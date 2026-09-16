import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { spatialAudio } from '../utils/spatialAudio';
import { 
  Orbit, 
  RefreshCw, 
  RotateCcw,
  Sparkles, 
  ShieldCheck,
  Layers,
  FlaskConical,
  SlidersHorizontal,
  X,
  AlertCircle,
  CheckCircle2,
  Plus,
  Minus,
  Palette
} from 'lucide-react';
import {
  ChainKey,
  MaterialType,
  DockMode,
  CurveParams,
  ParseFormulaResult,
  BlockchainCryptographicCurve,
  CHAIN_PRESETS,
  computeDiscriminant,
  parseFormulaInput
} from '../utils/cryptographicCurves';

export type InspectorTab = 'FORMULA' | 'COLOR';

export interface CustomColors {
  primary: string;
  secondary: string;
  core: string;
}

export interface ColorPreset {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  core: string;
  badge: string;
}

export const COLOR_PRESETS: ColorPreset[] = [
  {
    id: 'cyber_emerald',
    name: 'Cyber Emerald',
    primary: '#00ffa3',
    secondary: '#00e5ff',
    core: '#ffffff',
    badge: 'EVM'
  },
  {
    id: 'solana_sunset',
    name: 'Solana Sunset',
    primary: '#14f195',
    secondary: '#9945ff',
    core: '#ffffff',
    badge: 'SVM'
  },
  {
    id: 'arbitrum_azure',
    name: 'Arbitrum Azure',
    primary: '#28a0f0',
    secondary: '#00ffa3',
    core: '#ffffff',
    badge: 'NITRO'
  },
  {
    id: 'starknet_crimson',
    name: 'Crimson ZK',
    primary: '#ff6b4a',
    secondary: '#a855f7',
    core: '#fed7aa',
    badge: 'CAIRO'
  },
  {
    id: 'cyberpunk_neon',
    name: 'Neon Cyberpunk',
    primary: '#00f0ff',
    secondary: '#ff0055',
    core: '#ffffff',
    badge: 'NEON'
  },
  {
    id: 'solar_amber',
    name: 'Solar Amber',
    primary: '#f59e0b',
    secondary: '#ef4444',
    core: '#fef08a',
    badge: 'BTC'
  },
  {
    id: 'void_violet',
    name: 'Void Violet',
    primary: '#a855f7',
    secondary: '#38bdf8',
    core: '#e0e7ff',
    badge: 'VOID'
  },
  {
    id: 'stealth_platinum',
    name: 'Stealth Platinum',
    primary: '#94a3b8',
    secondary: '#38bdf8',
    core: '#f8fafc',
    badge: 'TITAN'
  }
];

interface ActiveVerification {
  group: THREE.Group;
  light: THREE.PointLight;
  outerRing: THREE.Mesh;
  innerRing: THREE.Mesh;
  hexReticle: THREE.Mesh;
  particles: THREE.Points;
  particleVelocities: THREE.Vector3[];
  progress: number;
  duration: number;
}

interface VerificationTag {
  id: number;
  x: number;
  y: number;
  label: string;
  hash: string;
  isSingular?: boolean;
}

const getRandomHex = () => {
  const chars = '0123456789ABCDEF';
  let s = '0x';
  for (let i = 0; i < 4; i++) s += chars[Math.floor(Math.random() * chars.length)];
  s += '...';
  for (let i = 0; i < 2; i++) s += chars[Math.floor(Math.random() * chars.length)];
  return s;
};

export const PARAM_BOUNDS: Record<keyof CurveParams, { min: number; max: number; step: number }> = {
  a: { min: -15, max: 15, step: 0.5 },
  b: { min: -15, max: 25, step: 0.5 },
  p: { min: 1, max: 8, step: 1 },
  q: { min: 1, max: 8, step: 1 },
  twist: { min: 0, max: 3, step: 0.05 },
  tubeRadius: { min: 0.08, max: 0.36, step: 0.01 }
};

export const HyperCoreCanvas3D: React.FC = () => {
  const canvasContainerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Deep-linking URL params
  const [selectedChain, setSelectedChain] = useState<ChainKey>(() => {
    if (typeof window === 'undefined') return 'ETHEREUM';
    const sp = new URLSearchParams(window.location.search);
    const c = sp.get('chain')?.toUpperCase() as ChainKey;
    return (c && (c in CHAIN_PRESETS || c === 'CUSTOM')) ? c : 'ETHEREUM';
  });

  const [lastPresetKey, setLastPresetKey] = useState<Exclude<ChainKey, 'CUSTOM'>>(() => {
    if (typeof window === 'undefined') return 'ETHEREUM';
    const sp = new URLSearchParams(window.location.search);
    const c = sp.get('chain')?.toUpperCase() as ChainKey;
    return (c && c in CHAIN_PRESETS) ? (c as Exclude<ChainKey, 'CUSTOM'>) : 'ETHEREUM';
  });

  const [params, setParams] = useState<CurveParams>(() => {
    if (typeof window === 'undefined') return CHAIN_PRESETS.ETHEREUM.params;
    const sp = new URLSearchParams(window.location.search);
    const c = sp.get('chain')?.toUpperCase() as ChainKey;
    const base = (c && c in CHAIN_PRESETS)
      ? { ...CHAIN_PRESETS[c as Exclude<ChainKey, 'CUSTOM'>].params }
      : { ...CHAIN_PRESETS.ETHEREUM.params };

    if (sp.has('a')) base.a = parseFloat(sp.get('a')!);
    if (sp.has('b')) base.b = parseFloat(sp.get('b')!);
    if (sp.has('p')) base.p = parseInt(sp.get('p')!);
    if (sp.has('q')) base.q = parseInt(sp.get('q')!);
    if (sp.has('twist')) base.twist = parseFloat(sp.get('twist')!);
    if (sp.has('r')) base.tubeRadius = parseFloat(sp.get('r')!);
    return base;
  });

  const [activeInspectorTab, setActiveInspectorTab] = useState<InspectorTab>(() => {
    if (typeof window === 'undefined') return 'FORMULA';
    const sp = new URLSearchParams(window.location.search);
    if (sp.get('color') === '1' || sp.get('colors') === '1' || sp.get('studio') === '1') {
      return 'COLOR';
    }
    return 'FORMULA';
  });

  const [isInspectorOpen, setIsInspectorOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const sp = new URLSearchParams(window.location.search);
    return (
      sp.get('lab') === '1' ||
      sp.get('lab') === 'true' ||
      sp.get('color') === '1' ||
      sp.get('colors') === '1' ||
      sp.get('studio') === '1'
    );
  });

  // Docking mode: RIGHT sidebar or BOTTOM drawer
  const [dockMode, setDockMode] = useState<DockMode>(() => {
    if (typeof window === 'undefined') return 'RIGHT';
    const sp = new URLSearchParams(window.location.search);
    const d = sp.get('dock')?.toUpperCase();
    if (d === 'BOTTOM') return 'BOTTOM';
    return 'RIGHT';
  });

  // User zoom scale control (1.0 = 100%, range: 0.45 .. 2.0)
  const [userZoomScale, setUserZoomScale] = useState<number>(1.0);

  // Direct formula string input & live feedback state
  const [formulaInput, setFormulaInput] = useState<string>('y^2 = x^3 + 7');
  const [parseStatus, setParseStatus] = useState<ParseFormulaResult | null>(null);

  const [materialType, setMaterialType] = useState<MaterialType>('LIQUID_CHROME');
  const [isRotating, setIsRotating] = useState(true);
  const [isExploded, setIsExploded] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get('exploded') === '1' || sp.get('explode') === '1';
  });
  const [tags, setTags] = useState<VerificationTag[]>([]);

  // Interactive Color Studio State with Deep-Linking
  const [customColors, setCustomColors] = useState<CustomColors | null>(() => {
    if (typeof window === 'undefined') return null;
    const sp = new URLSearchParams(window.location.search);
    const th = sp.get('theme')?.toLowerCase();
    if (th) {
      const match = COLOR_PRESETS.find(
        (p) => p.id.toLowerCase().includes(th) || p.name.toLowerCase().includes(th)
      );
      if (match) return { primary: match.primary, secondary: match.secondary, core: match.core };
    }
    if (sp.has('c1') && sp.has('c2')) {
      return {
        primary: '#' + sp.get('c1')!.replace('#', ''),
        secondary: '#' + sp.get('c2')!.replace('#', ''),
        core: sp.has('core') ? '#' + sp.get('core')!.replace('#', '') : '#ffffff'
      };
    }
    return null;
  });

  // Synchronized state refs for callbacks & ResizeObserver
  const isExplodedRef = useRef(isExploded);
  const explodeLerpRef = useRef(isExploded ? 1.0 : 0);
  const coreLayerRef = useRef<THREE.Group | null>(null);
  const shellLayerRef = useRef<THREE.Group | null>(null);
  const nodesLayerRef = useRef<THREE.Group | null>(null);
  const wireMeshRef = useRef<THREE.Mesh | null>(null);
  const naturalRadiusRef = useRef<number>(3.2);
  const userZoomScaleRef = useRef<number>(userZoomScale);
  const dockModeRef = useRef<DockMode>(dockMode);
  const isDockOpenRef = useRef<boolean>(isInspectorOpen);

  useEffect(() => {
    userZoomScaleRef.current = userZoomScale;
  }, [userZoomScale]);

  useEffect(() => {
    dockModeRef.current = dockMode;
  }, [dockMode]);

  useEffect(() => {
    isDockOpenRef.current = isInspectorOpen;
  }, [isInspectorOpen]);

  // Helper to open/close inspector and switch tabs with URL state sync
  const setInspectorMode = (open: boolean, tab: InspectorTab = activeInspectorTab) => {
    setIsInspectorOpen(open);
    isDockOpenRef.current = open;
    setActiveInspectorTab(tab);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (open) {
        if (tab === 'FORMULA') {
          url.searchParams.set('lab', '1');
          url.searchParams.delete('color');
          url.searchParams.delete('colors');
          url.searchParams.delete('studio');
        } else {
          url.searchParams.set('color', '1');
          url.searchParams.delete('lab');
        }
      } else {
        url.searchParams.delete('lab');
        url.searchParams.delete('color');
        url.searchParams.delete('colors');
        url.searchParams.delete('studio');
      }
      window.history.replaceState({}, '', url.toString());
    }
  };

  // References for three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringsRef = useRef<THREE.Group | null>(null);

  // Dynamic lights
  const pointLight1Ref = useRef<THREE.PointLight | null>(null);
  const pointLight2Ref = useRef<THREE.PointLight | null>(null);
  const rimLightRef = useRef<THREE.PointLight | null>(null);
  const centerGlowLightRef = useRef<THREE.PointLight | null>(null);
  const ringMesh1Ref = useRef<THREE.Mesh | null>(null);
  const ringMesh2Ref = useRef<THREE.Mesh | null>(null);

  // Dynamic quantum photon nodes & curve reference for silky kinetic flow
  const currentCurveRef = useRef<BlockchainCryptographicCurve | null>(null);
  const flowingNodesRef = useRef<THREE.Mesh[]>([]);

  // Active verification effects pool
  const activeVerificationsRef = useRef<ActiveVerification[]>([]);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseVecRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // Mathematical discriminant
  const discriminant = computeDiscriminant(params.a, params.b);
  const isSingular = discriminant === 0;

  const activeChainMeta = (selectedChain in CHAIN_PRESETS)
    ? CHAIN_PRESETS[selectedChain as Exclude<ChainKey, 'CUSTOM'>]
    : {
        id: 'CUSTOM' as const,
        name: isSingular ? 'Cusp Singularity Manifold' : 'Custom Elliptic Manifold',
        shortName: isSingular ? 'Cusp (Δ=0)' : 'Custom',
        badge: isSingular ? 'SINGULAR FIELD' : 'USER RECONFIGURED',
        curveType: isSingular ? 'Degenerate Singular Curve' : 'Custom Weierstrass Cryptographic Curve',
        formula: (() => {
          let expr = 'y² = x³';
          if (params.a !== 0) {
            const aSign = params.a > 0 ? '+ ' : '- ';
            const aVal = Math.abs(params.a);
            expr += ` ${aSign}${aVal === 1 ? '' : aVal}x`;
          }
          if (params.b !== 0) {
            const bSign = params.b > 0 ? '+ ' : '- ';
            const bVal = Math.abs(params.b);
            expr += ` ${bSign}${bVal}`;
          }
          return `${expr} mod ${params.p}`;
        })(),
        details: isSingular
          ? 'Singular discriminant (Δ = 0). The curve develops a sharp cusp or self-intersection, breaking cryptographic discrete logarithm hardness.'
          : 'Custom parametric curve actively synthesized on GPU.',
        zkAttestation: isSingular ? 'SECURITY ALERT: Invariant Failed Δ = 0' : 'Arbitrary Curve Attestation: Live Recomputed',
        params,
        primaryColor: isSingular ? 0xf43f5e : 0xa855f7,
        primaryHex: isSingular ? '#f43f5e' : '#a855f7',
        secondaryColor: isSingular ? 0xfb7185 : 0x06b6d4,
        secondaryHex: isSingular ? '#fb7185' : '#06b6d4',
        icon: Sparkles,
        auditLabels: [
          isSingular ? 'DISCRIMINANT: 0 (COLLAPSE)' : 'DISCRIMINANT: NON-ZERO',
          'PARAMETRIC_SURFACE: ACTIVE',
          'DYNAMIC_GPU_BUFFER: OK'
        ]
      };

  // Live Effective Colors (Customized or Chain Defaults)
  const effectivePrimaryHex = customColors?.primary ?? activeChainMeta.primaryHex;
  const effectiveSecondaryHex = customColors?.secondary ?? activeChainMeta.secondaryHex;
  const effectiveCoreHex = customColors?.core ?? '#ffffff';

  const effectivePrimaryColor = parseInt(effectivePrimaryHex.replace('#', ''), 16) || activeChainMeta.primaryColor;
  const effectiveSecondaryColor = parseInt(effectiveSecondaryHex.replace('#', ''), 16) || activeChainMeta.secondaryColor;
  const effectiveCoreColor = parseInt(effectiveCoreHex.replace('#', ''), 16) || 0xffffff;

  // Randomize Color Studio Themes
  const handleRandomizeColors = () => {
    const cyberCombinations = [
      { p: '#00ffa3', s: '#00e5ff', c: '#ffffff' },
      { p: '#14f195', s: '#9945ff', c: '#ffffff' },
      { p: '#28a0f0', s: '#38bdf8', c: '#ffffff' },
      { p: '#ff0055', s: '#00f0ff', c: '#ffffff' },
      { p: '#f59e0b', s: '#ec4899', c: '#fef08a' },
      { p: '#8b5cf6', s: '#06b6d4', c: '#e0e7ff' },
      { p: '#10b981', s: '#6366f1', c: '#a7f3d0' },
      { p: '#ec4899', s: '#f43f5e', c: '#fff1f2' },
      { p: '#38bdf8', s: '#a855f7', c: '#ffffff' },
      { p: '#e11d48', s: '#fbbf24', c: '#ffe4e6' },
      { p: '#06b6d4', s: '#f97316', c: '#ffffff' },
      { p: '#84cc16', s: '#10b981', c: '#ecfccb' }
    ];
    const pick = cyberCombinations[Math.floor(Math.random() * cyberCombinations.length)];
    setCustomColors({
      primary: pick.p,
      secondary: pick.s,
      core: pick.c
    });
    spatialAudio.playVerificationPing(1.3);
  };

  // HIGH-TECH ELEVATED HOLOGRAPHIC & CRYPTOGRAPHIC MATERIAL FACTORY
  const createMaterials = (c1: number, c2: number, coreColor: number, matType: MaterialType) => {
    let mainMaterial: THREE.Material;

    if (matType === 'IRIDESCENT_GLASS') {
      // Obsidian Crystal Glass: Deep translucent dark crystal with chromatic attenuation
      mainMaterial = new THREE.MeshPhysicalMaterial({
        color: 0x050812,
        emissive: c1,
        emissiveIntensity: 0.12,
        roughness: 0.08,
        metalness: 0.15,
        transmission: 0.84,
        ior: 1.55,
        thickness: 0.45,
        transparent: true,
        opacity: 0.88,
        clearcoat: 0.85,
        clearcoatRoughness: 0.05,
        attenuationColor: new THREE.Color(c1),
        attenuationDistance: 1.8
      });
    } else if (matType === 'HOLO_WIREFRAME') {
      // Cyber Mesh / Stealth Lattice: Translucent dark core with bright emissive wireframe
      mainMaterial = new THREE.MeshStandardMaterial({
        color: c1,
        emissive: c1,
        emissiveIntensity: 0.45,
        roughness: 0.22,
        metalness: 0.85,
        wireframe: true
      });
    } else {
      // STEALTH TITANIUM CHROME (Liquid Chrome): Deep precision-machined titanium with specular reflections
      mainMaterial = new THREE.MeshStandardMaterial({
        color: 0x0a101d,
        emissive: c1,
        emissiveIntensity: 0.18,
        roughness: 0.18,
        metalness: 0.92
      });
    }

    // Refined Cybernetic Holographic Coordinate Lattice (Elevated original wireframe)
    const wireframeMat = new THREE.MeshBasicMaterial({
      color: c2,
      wireframe: true,
      transparent: true,
      opacity: 0.32,
      blending: THREE.AdditiveBlending
    });

    // Elevated Faceted Diamond Validation Beacons (Precision quantum cryptographic nodes)
    const beaconMat = new THREE.MeshStandardMaterial({
      color: c2,
      emissive: c2,
      emissiveIntensity: 0.65,
      roughness: 0.12,
      metalness: 0.90
    });

    // Radiant Central Laser Spine Core
    const coreMat = new THREE.MeshBasicMaterial({
      color: coreColor,
      transparent: true,
      opacity: 0.92,
      blending: THREE.AdditiveBlending
    });

    // Dynamic Flowing Quantum Photon Sparks
    const photonMat = new THREE.MeshBasicMaterial({
      color: coreColor,
      transparent: true,
      opacity: 0.96,
      blending: THREE.AdditiveBlending
    });

    return { main: mainMaterial, wireframe: wireframeMat, beacon: beaconMat, core: coreMat, photon: photonMat };
  };

  // Spawn Verification Shockwave
  const spawnVerificationAtPoint = (point: THREE.Vector3, normal: THREE.Vector3, accentColorHex: number) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const effectGroup = new THREE.Group();
    effectGroup.position.copy(point);

    const up = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, normal);
    effectGroup.quaternion.copy(quaternion);

    const flashLight = new THREE.PointLight(accentColorHex, 85, 14);
    flashLight.position.set(0, 0.08, 0);
    effectGroup.add(flashLight);

    const ringGeo1 = new THREE.RingGeometry(0.04, 0.08, 36);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 2;
    effectGroup.add(ring1);

    const ringGeo2 = new THREE.RingGeometry(0.02, 0.045, 28);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 1.0
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.x = Math.PI / 2;
    effectGroup.add(ring2);

    const hexGeo = new THREE.RingGeometry(0.12, 0.14, 6);
    const hexMat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.8
    });
    const hexMesh = new THREE.Mesh(hexGeo, hexMat);
    hexMesh.rotation.x = Math.PI / 2;
    effectGroup.add(hexMesh);

    const pCount = 28;
    const pGeo = new THREE.BufferGeometry();
    const pPos = new Float32Array(pCount * 3);
    const pVels: THREE.Vector3[] = [];

    for (let i = 0; i < pCount; i++) {
      pPos[i * 3] = 0;
      pPos[i * 3 + 1] = 0;
      pPos[i * 3 + 2] = 0;

      const angle = Math.random() * Math.PI * 2;
      const speed = 0.8 + Math.random() * 1.8;
      pVels.push(new THREE.Vector3(
        Math.cos(angle) * speed,
        0.3 + Math.random() * 0.8,
        Math.sin(angle) * speed
      ));
    }
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));

    const pMat = new THREE.PointsMaterial({
      color: accentColorHex,
      size: 0.04,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(pGeo, pMat);
    effectGroup.add(particles);

    scene.add(effectGroup);

    activeVerificationsRef.current.push({
      group: effectGroup,
      light: flashLight,
      outerRing: ring1,
      innerRing: ring2,
      hexReticle: hexMesh,
      particles,
      particleVelocities: pVels,
      progress: 0,
      duration: 1.15
    });
  };

  // Helper to compute ideal scale & position based on dock mode and aspect ratio
  const computeFramingParameters = (aspect: number, zoomScale: number) => {
    const isBottom = isDockOpenRef.current && dockModeRef.current === 'BOTTOM';
    const isRight = isDockOpenRef.current && dockModeRef.current === 'RIGHT';

    let baseRadius = 1.68;
    let posY = 0;

    if (isRight) {
      baseRadius = 1.34;
      posY = 0;
    } else if (isBottom) {
      baseRadius = 1.28;
      posY = 0.44; // lift up to keep 100% clearance above bottom HUD
    }

    const targetRadius = baseRadius * zoomScale;
    const norm = targetRadius / Math.max(1.1, naturalRadiusRef.current);
    return { norm, posY };
  };

  // Update Geometry & Scaling (Elevated Cybernetic Holographic Architecture)
  const updateCurveGeometry = (
    p: CurveParams,
    color1: number,
    color2: number,
    coreColor: number,
    matType: MaterialType,
    zoomFactor: number
  ) => {
    const scene = sceneRef.current;
    if (!scene) return;

    if (meshGroupRef.current) {
      scene.remove(meshGroupRef.current);
      meshGroupRef.current.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.geometry.dispose();
          if (Array.isArray(child.material)) {
            child.material.forEach((m) => m.dispose());
          } else {
            child.material.dispose();
          }
        }
      });
    }

    const group = new THREE.Group();
    const curve = new BlockchainCryptographicCurve(p.a, p.b, p.p, p.q, p.twist, 1.65);
    currentCurveRef.current = curve;
    const mats = createMaterials(color1, color2, coreColor, matType);

    const tubularSegments = 300;
    const effectiveRadius = Math.min(0.36, Math.max(0.08, p.tubeRadius || 0.20));

    // LAYER 1: Solid Main Manifold Shell (Liquid Chrome / Holo Wireframe / Obsidian Glass)
    const shellGroup = new THREE.Group();
    const radialSegments = 28;
    const geom = new THREE.TubeGeometry(curve, tubularSegments, effectiveRadius, radialSegments, true);
    geom.computeVertexNormals();

    // Bounding sphere calculation
    geom.computeBoundingSphere();
    const naturalRadius = geom.boundingSphere?.radius || 3.2;
    naturalRadiusRef.current = naturalRadius;

    // Framing calculation
    const aspect = cameraRef.current?.aspect || 1.0;
    const { norm, posY } = computeFramingParameters(aspect, zoomFactor);

    group.scale.setScalar(norm);
    group.position.set(0, posY, 0);

    const mainMesh = new THREE.Mesh(geom, mats.main);
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;
    shellGroup.add(mainMesh);

    // LAYER 2: Elevated Cybernetic Holographic Coordinate Lattice Overlay
    // Hugs the manifold contour with fine luminous wireframe lines
    const wireGeom = new THREE.TubeGeometry(curve, 260, effectiveRadius * 1.018, 16, true);
    const wireMesh = new THREE.Mesh(wireGeom, mats.wireframe);
    wireMeshRef.current = wireMesh;
    shellGroup.add(wireMesh);

    group.add(shellGroup);
    shellLayerRef.current = shellGroup;

    // LAYER 3: Elevated Faceted Diamond Validation Beacons & Flowing Photons
    const nodesGroup = new THREE.Group();
    const beaconCount = 48;
    const beaconGeo = new THREE.OctahedronGeometry(0.048, 0);

    for (let i = 0; i < beaconCount; i++) {
      const t = i / beaconCount;
      const pt = curve.getPoint(t);
      const tangent = curve.getTangent(t).normalize();
      const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), tangent);

      const beaconMesh = new THREE.Mesh(beaconGeo, mats.beacon);
      beaconMesh.position.copy(pt);
      beaconMesh.quaternion.copy(quat);
      nodesGroup.add(beaconMesh);
    }

    // Dynamic photon energy pulses streaming along the curve
    const photonCount = 24;
    const photonGeo = new THREE.SphereGeometry(effectiveRadius * 0.32, 10, 10);
    const flowingMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < photonCount; i++) {
      const t = i / photonCount;
      const pt = curve.getPoint(t);
      const photonMesh = new THREE.Mesh(photonGeo, mats.photon);
      photonMesh.position.copy(pt);
      nodesGroup.add(photonMesh);
      flowingMeshes.push(photonMesh);
    }
    flowingNodesRef.current = flowingMeshes;
    group.add(nodesGroup);
    nodesLayerRef.current = nodesGroup;

    // LAYER 4: Radiant Central Laser Spine Core
    const coreGroup = new THREE.Group();
    const coreGeom = new THREE.TubeGeometry(curve, 240, effectiveRadius * 0.22, 10, true);
    coreGeom.computeVertexNormals();
    const coreMesh = new THREE.Mesh(coreGeom, mats.core);
    coreGroup.add(coreMesh);
    group.add(coreGroup);
    coreLayerRef.current = coreGroup;

    scene.add(group);
    meshGroupRef.current = group;

    // Scale orbital rings proportionally
    if (ringsRef.current) {
      ringsRef.current.scale.setScalar(norm);
      ringsRef.current.position.set(0, posY, 0);
    }
  };

  // Main Three.js Scene Setup with ResizeObserver
  useEffect(() => {
    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 500;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height, true);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    rendererRef.current = renderer;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.85;
    controls.zoomSpeed = 0.9;
    controls.enablePan = false;
    controls.minDistance = 3.2;
    controls.maxDistance = 14;
    controls.target.set(0, 0, 0);
    controlsRef.current = controls;

    // 1. Soft Ambient Light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.55);
    scene.add(ambientLight);

    // 2. Directional Key Studio Light (Crisp specular glint on chrome & crystal glass)
    const keyLight = new THREE.DirectionalLight(0xffffff, 2.4);
    keyLight.position.set(6, 8, 7);
    scene.add(keyLight);

    // 3. Primary Accent Light
    const light1 = new THREE.PointLight(activeChainMeta.primaryColor, 8.5, 24);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    pointLight1Ref.current = light1;

    // 4. Secondary Accent Light
    const light2 = new THREE.PointLight(activeChainMeta.secondaryColor, 7.5, 24);
    light2.position.set(-5, -4, 4);
    scene.add(light2);
    pointLight2Ref.current = light2;

    // 5. Cinematic Backlight / Rim Light (Creates radiant silhouette halo)
    const rimLight = new THREE.PointLight(activeChainMeta.secondaryColor, 12, 26);
    rimLight.position.set(0, 3, -6.5);
    scene.add(rimLight);
    rimLightRef.current = rimLight;

    // 6. Center Core Glow Light
    const centerGlow = new THREE.PointLight(activeChainMeta.primaryColor, 4.0, 12);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);
    centerGlowLightRef.current = centerGlow;

    // Background cosmic particle grid
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color(activeChainMeta.primaryColor),
      new THREE.Color(activeChainMeta.secondaryColor),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 6.0 + Math.random() * 8.0;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const color = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // Orbital Gyroscopic Rings
    const ringsGroup = new THREE.Group();
    ringsRef.current = ringsGroup;

    const ringRadius = 3.3;
    const ringGeo1 = new THREE.TorusGeometry(ringRadius, 0.015, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({ color: activeChainMeta.primaryColor, transparent: true, opacity: 0.35 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringsGroup.add(ring1);
    ringMesh1Ref.current = ring1;

    const ringGeo2 = new THREE.TorusGeometry(ringRadius * 1.15, 0.012, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: activeChainMeta.secondaryColor, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringsGroup.add(ring2);
    ringMesh2Ref.current = ring2;

    scene.add(ringsGroup);

    // Build initial geometry
    updateCurveGeometry(
      params,
      effectivePrimaryColor,
      effectiveSecondaryColor,
      effectiveCoreColor,
      materialType,
      userZoomScale
    );

    // Robust ResizeObserver: updateStyle = true ensures canvas style matches DOM box
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = Math.floor(entry.contentRect.width);
        const h = Math.floor(entry.contentRect.height);
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, true);

          if (meshGroupRef.current && naturalRadiusRef.current) {
            const { norm, posY } = computeFramingParameters(camera.aspect, userZoomScaleRef.current);
            meshGroupRef.current.scale.setScalar(norm);
            meshGroupRef.current.position.set(0, posY, 0);
            if (ringsRef.current) {
              ringsRef.current.scale.setScalar(norm);
              ringsRef.current.position.set(0, posY, 0);
            }
          }
        }
      }
    });

    resizeObserver.observe(container);

    // Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      controls.update();

      if (meshGroupRef.current) {
        meshGroupRef.current.rotation.y += delta * 0.08;
      }

      // Dynamic breathing of the holographic wireframe lattice
      if (wireMeshRef.current && wireMeshRef.current.material) {
        (wireMeshRef.current.material as THREE.MeshBasicMaterial).opacity =
          0.26 + 0.12 * Math.sin(elapsed * 2.4);
      }

      // Silky Flowing Quantum Photon Stream (Dynamic data pulses along curve geodesics)
      if (flowingNodesRef.current.length > 0 && currentCurveRef.current) {
        const curve = currentCurveRef.current;
        const count = flowingNodesRef.current.length;
        const flowSpeed = 0.045;
        for (let i = 0; i < count; i++) {
          const t = (i / count + elapsed * flowSpeed) % 1.0;
          const pt = curve.getPoint(t);
          const nodeMesh = flowingNodesRef.current[i];
          if (nodeMesh) {
            nodeMesh.position.copy(pt);
            const s = 1.0 + 0.22 * Math.sin(elapsed * 4.0 + i * 0.5);
            nodeMesh.scale.set(s, s, s);
          }
        }
      }

      // Inner Luminous Laser Spine Core Harmonic Breathing
      if (coreLayerRef.current && coreLayerRef.current.children[0]) {
        const coreMesh = coreLayerRef.current.children[0] as THREE.Mesh;
        if (coreMesh && coreMesh.material) {
          (coreMesh.material as THREE.MeshBasicMaterial).opacity = 0.82 + 0.16 * Math.sin(elapsed * 2.8);
        }
      }

      if (ringsRef.current) {
        ringsRef.current.rotation.x = elapsed * 0.14;
        ringsRef.current.rotation.y = -elapsed * 0.18;
      }

      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.03;
        particlesRef.current.rotation.z = elapsed * 0.015;
      }

      // Verifications pool animation
      const activeList = activeVerificationsRef.current;
      for (let i = activeList.length - 1; i >= 0; i--) {
        const item = activeList[i];
        item.progress += delta / item.duration;

        if (item.progress >= 1.0) {
          scene.remove(item.group);
          item.outerRing.geometry.dispose();
          (item.outerRing.material as THREE.Material).dispose();
          item.innerRing.geometry.dispose();
          (item.innerRing.material as THREE.Material).dispose();
          item.hexReticle.geometry.dispose();
          (item.hexReticle.material as THREE.Material).dispose();
          item.particles.geometry.dispose();
          (item.particles.material as THREE.Material).dispose();
          activeList.splice(i, 1);
        } else {
          const pVal = item.progress;
          const scaleVal = 1.0 + pVal * 4.2;
          item.outerRing.scale.set(scaleVal, scaleVal, scaleVal);
          (item.outerRing.material as THREE.MeshBasicMaterial).opacity = (1.0 - pVal) * 0.9;

          const innerScale = 1.0 + pVal * 6.5;
          item.innerRing.scale.set(innerScale, innerScale, innerScale);
          (item.innerRing.material as THREE.MeshBasicMaterial).opacity = (1.0 - pVal) * 0.95;

          const hexScale = 1.0 + pVal * 3.4;
          item.hexReticle.scale.set(hexScale, hexScale, hexScale);
          (item.hexReticle.material as THREE.MeshBasicMaterial).opacity = (1.0 - pVal) * 0.85;

          item.light.intensity = 85 * (1.0 - pVal);

          const posAttr = item.particles.geometry.attributes.position as THREE.BufferAttribute;
          const positionsArr = posAttr.array as Float32Array;
          for (let j = 0; j < item.particleVelocities.length; j++) {
            const v = item.particleVelocities[j];
            positionsArr[j * 3] += v.x * delta * 1.5;
            positionsArr[j * 3 + 1] += v.y * delta * 1.5;
            positionsArr[j * 3 + 2] += v.z * delta * 1.5;
          }
          posAttr.needsUpdate = true;
          (item.particles.material as THREE.PointsMaterial).opacity = 1.0 - pVal;
        }
      }

      // Smooth Exploded View Decomposition
      const targetExplode = isExplodedRef.current ? 1.0 : 0.0;
      explodeLerpRef.current = THREE.MathUtils.lerp(explodeLerpRef.current, targetExplode, delta * 6.5);
      const eLerp = explodeLerpRef.current;

      if (coreLayerRef.current) {
        const coreScale = 1.0 - eLerp * 0.38;
        coreLayerRef.current.scale.set(coreScale, coreScale, coreScale);
      }

      if (shellLayerRef.current) {
        const shellScale = 1.0 + eLerp * 0.48;
        shellLayerRef.current.scale.set(shellScale, shellScale, shellScale);
        shellLayerRef.current.children.forEach((child) => {
          if (child instanceof THREE.Mesh && child.material) {
            const mat = child.material as THREE.MeshStandardMaterial;
            if (mat.opacity !== undefined) {
              mat.transparent = true;
              mat.opacity = 1.0 - eLerp * 0.42;
            }
          }
        });
      }

      if (nodesLayerRef.current) {
        const nodesScale = 1.0 + eLerp * 1.08;
        nodesLayerRef.current.scale.set(nodesScale, nodesScale, nodesScale);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      resizeObserver.disconnect();
      renderer.dispose();
    };
  }, []);

  // Update Three.js on Param, Color, Material, or Zoom Change
  useEffect(() => {
    updateCurveGeometry(
      params,
      effectivePrimaryColor,
      effectiveSecondaryColor,
      effectiveCoreColor,
      materialType,
      userZoomScale
    );

    if (pointLight1Ref.current) {
      pointLight1Ref.current.color.setHex(effectivePrimaryColor);
    }
    if (pointLight2Ref.current) {
      pointLight2Ref.current.color.setHex(effectiveSecondaryColor);
    }
    if (centerGlowLightRef.current) {
      centerGlowLightRef.current.color.setHex(effectivePrimaryColor);
    }
    if (ringMesh1Ref.current) {
      (ringMesh1Ref.current.material as THREE.MeshBasicMaterial).color.setHex(effectivePrimaryColor);
    }
    if (ringMesh2Ref.current) {
      (ringMesh2Ref.current.material as THREE.MeshBasicMaterial).color.setHex(effectiveSecondaryColor);
    }
    if (rimLightRef.current) {
      rimLightRef.current.color.setHex(effectiveSecondaryColor);
    }
  }, [params, selectedChain, customColors, materialType, userZoomScale]);

  // Raycasting for LMB clicks
  const triggerVerificationClick = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const camera = cameraRef.current;
    const meshGroup = meshGroupRef.current;
    if (!canvas || !camera || !meshGroup) return;

    const rect = canvas.getBoundingClientRect();
    mouseVecRef.current.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    mouseVecRef.current.y = -((clientY - rect.top) / rect.height) * 2 + 1;

    raycasterRef.current.setFromCamera(mouseVecRef.current, camera);
    const intersects = raycasterRef.current.intersectObjects(meshGroup.children, true);

    let hitPoint: THREE.Vector3;
    let hitNormal = new THREE.Vector3(0, 1, 0);

    if (intersects.length > 0) {
      hitPoint = intersects[0].point;
      if (intersects[0].face) {
        hitNormal = intersects[0].face.normal.clone().transformDirection(meshGroup.matrixWorld);
      }
    } else {
      const vec = new THREE.Vector3(mouseVecRef.current.x, mouseVecRef.current.y, 0.5);
      vec.unproject(camera);
      const dir = vec.sub(camera.position).normalize();
      hitPoint = camera.position.clone().add(dir.multiplyScalar(7.5));
    }

    spawnVerificationAtPoint(hitPoint, hitNormal, effectivePrimaryColor);

    if (isSingular) {
      spatialAudio.playWarp();
    } else {
      spatialAudio.playVerificationPing(1.0);
    }

    const tagId = Date.now() + Math.random();
    const randomLabel = isSingular
      ? 'SINGULARITY: CUSP COLLAPSE'
      : activeChainMeta.auditLabels[Math.floor(Math.random() * activeChainMeta.auditLabels.length)];

    const newTag: VerificationTag = {
      id: tagId,
      x: clientX - rect.left,
      y: clientY - rect.top,
      label: randomLabel,
      hash: getRandomHex(),
      isSingular
    };

    setTags((prev) => [...prev.slice(-4), newTag]);
    setTimeout(() => {
      setTags((prev) => prev.filter((t) => t.id !== tagId));
    }, 1800);
  };

  const handleSelectChain = (key: ChainKey) => {
    setSelectedChain(key);
    setCustomColors(null);
    if (key !== 'CUSTOM') {
      setLastPresetKey(key as Exclude<ChainKey, 'CUSTOM'>);
      const preset = CHAIN_PRESETS[key as Exclude<ChainKey, 'CUSTOM'>];
      setParams({ ...preset.params });
      setFormulaInput(preset.formula);
      setParseStatus({ success: true, message: `Active Preset: ${preset.name}`, detectedType: 'PARAMS' });
      if (cameraRef.current) {
        const normal = cameraRef.current.position.clone().normalize();
        spawnVerificationAtPoint(new THREE.Vector3(0, 0, 0), normal, preset.primaryColor);
      }
    }
    spatialAudio.playVerificationPing(1.15);
  };

  const handleParamChange = (param: keyof CurveParams, val: number) => {
    if (isNaN(val)) return;
    setSelectedChain('CUSTOM');
    const bounds = PARAM_BOUNDS[param];
    const clamped = bounds ? Math.min(bounds.max, Math.max(bounds.min, val)) : val;
    setParams((prev) => ({
      ...prev,
      [param]: clamped
    }));
  };

  const handleStepParam = (param: keyof CurveParams, deltaVal: number, minVal?: number, maxVal?: number) => {
    setSelectedChain('CUSTOM');
    const bounds = PARAM_BOUNDS[param];
    const effectiveMin = minVal !== undefined ? minVal : (bounds?.min ?? -15);
    const effectiveMax = maxVal !== undefined ? maxVal : (bounds?.max ?? 25);
    setParams((prev) => {
      const next = Math.min(effectiveMax, Math.max(effectiveMin, Number((prev[param] + deltaVal).toFixed(2))));
      return {
        ...prev,
        [param]: next
      };
    });
  };

  const handleResetAll = () => {
    const targetKey: Exclude<ChainKey, 'CUSTOM'> =
      (selectedChain !== 'CUSTOM' && selectedChain in CHAIN_PRESETS)
        ? (selectedChain as Exclude<ChainKey, 'CUSTOM'>)
        : (lastPresetKey || 'ETHEREUM');

    const preset = CHAIN_PRESETS[targetKey] || CHAIN_PRESETS.ETHEREUM;

    setSelectedChain(targetKey);
    setLastPresetKey(targetKey);
    setParams({ ...preset.params });
    setFormulaInput(preset.formula);
    setParseStatus({ success: true, message: `Reset to ${preset.name}`, detectedType: 'PARAMS' });

    setCustomColors(null);
    setInspectorMode(false);

    setIsExploded(false);
    isExplodedRef.current = false;

    setUserZoomScale(1.0);
    userZoomScaleRef.current = 1.0;

    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      controlsRef.current.target.set(0, 0, 0);
    }

    if (meshGroupRef.current && cameraRef.current) {
      const { norm, posY } = computeFramingParameters(cameraRef.current.aspect, 1.0);
      meshGroupRef.current.scale.setScalar(norm);
      meshGroupRef.current.position.set(0, posY, 0);
      if (ringsRef.current) {
        ringsRef.current.scale.setScalar(norm);
        ringsRef.current.position.set(0, posY, 0);
      }
    }

    spatialAudio.playClick(920);
    spatialAudio.playVerificationPing(1.25);
    if (cameraRef.current) {
      const normal = cameraRef.current.position.clone().normalize();
      spawnVerificationAtPoint(new THREE.Vector3(0, 0, 0), normal, preset.primaryColor);
    }
  };

  const handleApplyFormulaInput = (text: string) => {
    const res = parseFormulaInput(text);
    setParseStatus(res);
    if (res.success && res.params) {
      setSelectedChain('CUSTOM');
      setParams((prev) => ({
        ...prev,
        ...res.params
      }));
      spatialAudio.playVerificationPing(1.2);
    } else {
      spatialAudio.playClick(400);
    }
  };

  const handleZoomChange = (delta: number) => {
    setUserZoomScale((prev) => {
      const next = Math.min(2.0, Math.max(0.45, Number((prev + delta).toFixed(2))));
      userZoomScaleRef.current = next;
      if (meshGroupRef.current && naturalRadiusRef.current && cameraRef.current) {
        const { norm, posY } = computeFramingParameters(cameraRef.current.aspect, next);
        meshGroupRef.current.scale.setScalar(norm);
        meshGroupRef.current.position.set(0, posY, 0);
        if (ringsRef.current) {
          ringsRef.current.scale.setScalar(norm);
          ringsRef.current.position.set(0, posY, 0);
        }
      }
      return next;
    });
    spatialAudio.playClick(850);
  };

  const handleResetScale = () => {
    setUserZoomScale(1.0);
    userZoomScaleRef.current = 1.0;
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      controlsRef.current.target.set(0, 0, 0);
    }
    if (meshGroupRef.current && naturalRadiusRef.current && cameraRef.current) {
      const { norm, posY } = computeFramingParameters(cameraRef.current.aspect, 1.0);
      meshGroupRef.current.scale.setScalar(norm);
      meshGroupRef.current.position.set(0, posY, 0);
      if (ringsRef.current) {
        ringsRef.current.scale.setScalar(norm);
        ringsRef.current.position.set(0, posY, 0);
      }
    }
    spatialAudio.playClick(900);
  };

  // Dedicated dock switch handler ensuring pristine camera angle & geometry alignment
  const handleDockChange = (newDock: DockMode) => {
    setDockMode(newDock);
    dockModeRef.current = newDock;
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      controlsRef.current.target.set(0, 0, 0);
    }
    if (meshGroupRef.current && naturalRadiusRef.current && cameraRef.current) {
      const { norm, posY } = computeFramingParameters(cameraRef.current.aspect, userZoomScaleRef.current);
      meshGroupRef.current.scale.setScalar(norm);
      meshGroupRef.current.position.set(0, posY, 0);
      if (ringsRef.current) {
        ringsRef.current.scale.setScalar(norm);
        ringsRef.current.position.set(0, posY, 0);
      }
    }
    spatialAudio.playClick(900);
  };

  const handleSelectMaterial = (type: MaterialType) => {
    setMaterialType(type);
    spatialAudio.playClick(1050);
  };

  // Pointer tracking for click-vs-drag
  const pointerStartRef = useRef<{ x: number; y: number; time: number } | null>(null);

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0) return;
    pointerStartRef.current = {
      x: e.clientX,
      y: e.clientY,
      time: performance.now()
    };
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (e.button !== 0 || !pointerStartRef.current) return;
    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    const dist = Math.hypot(dx, dy);
    const elapsed = performance.now() - pointerStartRef.current.time;

    const clientX = e.clientX;
    const clientY = e.clientY;
    pointerStartRef.current = null;

    if (dist < 16 && elapsed < 650) {
      triggerVerificationClick(clientX, clientY);
    }
  };

  return (
    <div className="relative w-full h-[620px] lg:h-[700px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#090416] via-[#04020a] to-[#020106] shadow-2xl group select-none flex flex-col">
      <style>{`
        @keyframes cryptoAuditBadge {
          0% {
            opacity: 0;
            transform: translate(-50%, 0) scale(0.7);
          }
          12% {
            opacity: 1;
            transform: translate(-50%, -14px) scale(1.06);
          }
          80% {
            opacity: 1;
            transform: translate(-50%, -26px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -40px) scale(0.92);
          }
        }
        .crypto-audit-tag {
          animation: cryptoAuditBadge 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. TOP COMMAND BAR: ALWAYS-VISIBLE CHAIN SWITCHER & ACTION CONTROLS       */}
      {/* ========================================================================= */}
      <div className="shrink-0 px-3.5 py-2.5 bg-[#050310]/95 border-b border-white/10 backdrop-blur-2xl flex flex-wrap items-center justify-between gap-2.5 z-30">
        {/* Sleek Segmented Cryptographic Chain Switcher */}
        <div className="flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/10 overflow-x-auto max-w-full">
          {(['ETHEREUM', 'SOLANA', 'ARBITRUM', 'STARKNET'] as const).map((key) => {
            const preset = CHAIN_PRESETS[key];
            const isAct = selectedChain === key;
            const Icon = preset.icon;
            const shortTag = key === 'ETHEREUM' ? 'EVM' : key === 'SOLANA' ? 'SVM' : key === 'ARBITRUM' ? 'Nitro' : 'Cairo';
            return (
              <button
                key={key}
                onClick={() => handleSelectChain(key)}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isAct
                    ? 'text-white shadow-lg'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                style={
                  isAct
                    ? {
                        backgroundColor: `${preset.primaryHex}26`,
                        borderColor: `${preset.primaryHex}77`,
                        borderWidth: '1px',
                        boxShadow: `0 0 16px ${preset.primaryHex}40`
                      }
                    : { border: '1px solid transparent' }
                }
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: preset.primaryHex }}
                />
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{preset.shortName}</span>
                <span className="text-[9.5px] opacity-60 font-normal pl-1 border-l border-white/10">
                  {shortTag}
                </span>
              </button>
            );
          })}
        </div>

        {/* Global Action Buttons */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            onClick={() => {
              if (isInspectorOpen && activeInspectorTab === 'COLOR') {
                setInspectorMode(false);
                spatialAudio.playClick(850);
              } else {
                setInspectorMode(true, 'COLOR');
                spatialAudio.playClick(1050);
              }
            }}
            className={`flex items-center gap-1.5 font-mono px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              isInspectorOpen && activeInspectorTab === 'COLOR'
                ? 'bg-purple-500/25 text-white border-purple-400 shadow-lg shadow-purple-500/25 ring-1 ring-purple-400/50'
                : 'bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border-purple-500/30'
            }`}
            title="Toggle Color Studio Dock (0% Overlap)"
          >
            <Palette className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">COLOR_STUDIO</span>
            <span className="sm:hidden">COLOR</span>
            {customColors && (
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            )}
          </button>

          <button
            onClick={() => {
              if (isInspectorOpen && activeInspectorTab === 'FORMULA') {
                setInspectorMode(false);
                spatialAudio.playClick(850);
              } else {
                setInspectorMode(true, 'FORMULA');
                spatialAudio.playClick(1100);
              }
            }}
            className={`flex items-center gap-1.5 font-mono px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              isInspectorOpen && activeInspectorTab === 'FORMULA'
                ? 'bg-cyan-500/25 text-white border-cyan-400 shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/50'
                : 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border-cyan-500/30'
            }`}
            title="Toggle Formula Lab Inspector (0% Overlap)"
          >
            <FlaskConical className="w-3.5 h-3.5" />
            <span>FORMULA_LAB</span>
          </button>

          <button
            onClick={() => {
              const next = !isExploded;
              setIsExploded(next);
              isExplodedRef.current = next;
              spatialAudio.playExplode(next);
            }}
            className={`flex items-center gap-1.5 font-mono px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
              isExploded
                ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black border-emerald-400 shadow-xl shadow-emerald-500/30 scale-[1.02]'
                : 'bg-white/5 hover:bg-white/10 text-gray-300 border-white/15'
            }`}
            title="Toggle Exploded Layer Decomposition"
          >
            <Layers className="w-3.5 h-3.5" />
            <span className="hidden md:inline">{isExploded ? 'COLLAPSE' : 'EXPLODED'}</span>
          </button>

          <button
            onClick={handleResetAll}
            className="p-1.5 bg-white/5 hover:bg-white/10 active:rotate-180 text-gray-300 hover:text-white rounded-xl border border-white/15 cursor-pointer transition-all duration-300 group"
            title="Reset All: Curve Parameters, Preset & Camera (Сбросить кривую и параметры к исходным)"
          >
            <RefreshCw className="w-3.5 h-3.5 group-active:rotate-180 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SPLIT-VIEWPORT BODY: 3D Canvas & Adjacent Inspector Pane               */}
      {/* ========================================================================= */}
      <div
        className={`relative flex-1 min-h-0 w-full flex ${
          isInspectorOpen && dockMode === 'BOTTOM' ? 'flex-col' : 'flex-col md:flex-row'
        }`}
      >
        {/* PANE 1: THE DEDICATED 3D CANVAS VIEWPORT */}
        <div
          ref={canvasContainerRef}
          className="relative flex-1 h-full min-w-0 min-h-0 overflow-hidden"
        >
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            className="w-full h-full block cursor-grab active:cursor-grabbing"
          />

          {/* Floating Invariant Attestation Badges */}
          {tags.map((tag) => (
            <div
              key={tag.id}
              style={{ left: `${tag.x}px`, top: `${tag.y}px` }}
              className="absolute pointer-events-none z-30"
            >
              <div
                className={`crypto-audit-tag flex items-center gap-2 px-3 py-1.5 rounded-xl backdrop-blur-xl border font-mono text-xs whitespace-nowrap ${
                  tag.isSingular
                    ? 'bg-[#18040a]/92 border-rose-500/60 shadow-[0_0_24px_rgba(244,63,94,0.4)] text-rose-300'
                    : 'bg-[#040812]/92 border-emerald-400/50 shadow-[0_0_24px_rgba(0,255,163,0.35)] text-emerald-300'
                }`}
              >
                {tag.isSingular ? (
                  <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0 animate-pulse" />
                ) : (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
                )}
                <span className="font-bold tracking-wider">{tag.label}</span>
                <span className="text-white/40 text-[11px] font-normal pl-1 border-l border-white/20">{tag.hash}</span>
              </div>
            </div>
          ))}

          {/* Subtle Top Indicator Inside Canvas (Shown only when inspector is closed or docked at bottom) */}
          {(!isInspectorOpen || dockMode === 'BOTTOM') && (
            <div className="absolute top-2.5 left-3 z-20 pointer-events-none flex items-center gap-2">
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl text-[11px] font-mono text-gray-300">
                <Sparkles className="w-3 h-3 text-cyan-400 shrink-0" />
                <span className="font-semibold text-white tracking-wide truncate max-w-[200px] sm:max-w-none">
                  {activeChainMeta.formula}
                </span>
                <span className="text-white/20">|</span>
                <span
                  className={`text-[9.5px] font-semibold px-1.5 py-0.5 rounded ${
                    isSingular
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {isSingular ? 'Δ = 0 ⚠' : `Δ = ${discriminant.toLocaleString()} ✓`}
                </span>
              </div>
            </div>
          )}

          {/* Scale Control HUD (Bottom-Right) */}
          <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-[#050814]/90 backdrop-blur-xl border border-white/15 px-2 py-1 rounded-xl font-mono text-[11px] text-gray-300 shadow-xl">
            <span className="text-[9.5px] text-gray-400 hidden sm:inline mr-0.5">SCALE:</span>
            <button
              onClick={() => handleZoomChange(-0.1)}
              className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer"
              title="Zoom Out (-10%)"
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="min-w-[36px] text-center font-bold text-cyan-300 font-mono text-[10.5px]">
              {Math.round(userZoomScale * 100)}%
            </span>
            <button
              onClick={() => handleZoomChange(0.1)}
              className="w-5 h-5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-gray-300 hover:text-white cursor-pointer"
              title="Zoom In (+10%)"
            >
              <Plus className="w-3 h-3" />
            </button>
            <button
              onClick={handleResetScale}
              className="px-1.5 py-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/30 text-[9px] font-bold cursor-pointer transition-colors"
              title="Reset Auto-Fit to 100%"
            >
              FIT
            </button>
          </div>

          {/* Material Switcher & Orbit Toggle (Bottom-Left) */}
          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-[#050814]/90 backdrop-blur-2xl border border-white/15 p-1.5 px-2.5 rounded-2xl shadow-xl font-mono text-xs">
            <div className="flex items-center bg-white/5 p-0.5 rounded-xl border border-white/10">
              {(['LIQUID_CHROME', 'HOLO_WIREFRAME', 'IRIDESCENT_GLASS'] as MaterialType[]).map((mat) => (
                <button
                  key={mat}
                  onClick={() => handleSelectMaterial(mat)}
                  className={`px-2 py-0.5 rounded-lg transition-all cursor-pointer text-[10px] ${
                    materialType === mat
                      ? 'bg-white/20 text-white font-bold'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {mat === 'LIQUID_CHROME' ? 'Titanium Chrome' : mat === 'HOLO_WIREFRAME' ? 'Cyber Lattice' : 'Obsidian Glass'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsRotating(!isRotating)}
              className={`p-1 rounded-xl border transition-colors cursor-pointer ${
                isRotating
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
              }`}
              title="Toggle Auto-Rotation"
            >
              <Orbit className={`w-3.5 h-3.5 ${isRotating ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* PANE 2A: RIGHT SIDEBAR INSPECTOR DOCK                                     */}
        {/* ========================================================================= */}
        {isInspectorOpen && dockMode === 'RIGHT' && (
          <div
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="w-[320px] xl:w-[340px] h-full shrink-0 border-l border-white/10 bg-[#040714]/98 backdrop-blur-2xl flex flex-col justify-between p-3.5 z-20 font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto"
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/10 gap-1.5">
                {/* Segmented Tab Switcher */}
                <div className="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 shrink-0">
                  <button
                    onClick={() => {
                      setInspectorMode(true, 'FORMULA');
                      spatialAudio.playClick(950);
                    }}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9.5px] font-bold transition-all cursor-pointer ${
                      activeInspectorTab === 'FORMULA'
                        ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FlaskConical className="w-3 h-3" />
                    <span>FORMULA</span>
                  </button>
                  <button
                    onClick={() => {
                      setInspectorMode(true, 'COLOR');
                      spatialAudio.playClick(1050);
                    }}
                    className={`flex items-center gap-1 px-2 py-1 rounded-md text-[9.5px] font-bold transition-all cursor-pointer ${
                      activeInspectorTab === 'COLOR'
                        ? 'bg-purple-500/25 text-purple-200 border border-purple-400/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3 h-3" />
                    <span>COLORS</span>
                    {customColors && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                  </button>
                </div>

                <div className="flex items-center gap-1 ml-auto">
                  <button
                    onClick={() => handleDockChange('BOTTOM')}
                    className="px-1.5 py-1 rounded text-[8.5px] font-mono bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-300 hover:text-white transition-all cursor-pointer"
                    title="Switch to Bottom Drawer Dock"
                  >
                    ⤓ Bottom
                  </button>
                  <button
                    onClick={() => {
                      setInspectorMode(false);
                      spatialAudio.playClick(850);
                    }}
                    className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                    title="Close Inspector"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {activeInspectorTab === 'FORMULA' ? (
                <>
                  {/* DIRECT EDITABLE INLINE FORMULA CARD */}
              <div className="mt-2 p-2 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="text-[8px] text-gray-400 uppercase tracking-wider">ACTIVE FORMULA (CLICK &amp; TYPE):</span>
                  <span className="text-[8px] text-cyan-400 font-bold">WEIERSTRASS</span>
                </div>

                <div className="flex items-center justify-center gap-1 font-mono text-xs py-1.5 px-1 bg-white/5 rounded-lg border border-white/5 whitespace-nowrap">
                  <span className="text-emerald-400 font-bold">y²</span>
                  <span className="text-gray-400">=</span>
                  <span className="text-cyan-400 font-bold">x³</span>
                  <span className="text-gray-400">+</span>

                  {/* Inline Editable a */}
                  <div className="inline-flex items-center bg-amber-500/15 border border-amber-500/40 hover:border-amber-400 focus-within:border-amber-400 rounded px-1.5 py-0.5">
                    <input
                      type="number"
                      min={PARAM_BOUNDS.a.min}
                      max={PARAM_BOUNDS.a.max}
                      step={PARAM_BOUNDS.a.step}
                      value={params.a}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) handleParamChange('a', val);
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      className="w-12 min-w-[44px] bg-transparent text-amber-300 font-bold text-center outline-none text-xs font-mono"
                      title="Direct edit Weierstrass parameter a"
                    />
                    <span className="text-amber-400 text-[10px]">·x</span>
                  </div>

                  <span className="text-gray-400">+</span>

                  {/* Inline Editable b */}
                  <div className="inline-flex items-center bg-purple-500/15 border border-purple-500/40 hover:border-purple-400 focus-within:border-purple-400 rounded px-1.5 py-0.5">
                    <input
                      type="number"
                      min={PARAM_BOUNDS.b.min}
                      max={PARAM_BOUNDS.b.max}
                      step={PARAM_BOUNDS.b.step}
                      value={params.b}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) handleParamChange('b', val);
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      className="w-12 min-w-[44px] bg-transparent text-purple-300 font-bold text-center outline-none text-xs font-mono"
                      title="Direct edit Weierstrass parameter b"
                    />
                  </div>

                  <span className="text-gray-400 text-[11px]">(mod</span>

                  {/* Inline Editable p */}
                  <div className="inline-flex items-center bg-cyan-500/15 border border-cyan-500/40 hover:border-cyan-400 focus-within:border-cyan-400 rounded px-1 py-0.5">
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={params.p}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val >= 1 && val <= 8) handleParamChange('p', val);
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      className="w-6 bg-transparent text-cyan-300 font-bold text-center outline-none text-xs font-mono"
                      title="Direct edit Torus winding parameter p"
                    />
                  </div>
                  <span className="text-gray-400 text-[11px]">)</span>
                </div>

                <div className="flex items-center justify-between text-[9px] pt-1 border-t border-white/10">
                  <span className="text-gray-400">Discriminant Δ = -16(4a³+27b²):</span>
                  <span className={`font-mono font-bold ${isSingular ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {discriminant.toLocaleString()}
                  </span>
                </div>

                <div
                  className={`px-2 py-1 rounded text-[8.5px] font-mono flex items-center justify-between ${
                    isSingular
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                      : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  <div className="flex items-center gap-1.5">
                    {isSingular ? <AlertCircle className="w-3 h-3 text-rose-400 animate-pulse" /> : <CheckCircle2 className="w-3 h-3 text-emerald-400" />}
                    <span className="font-bold">{isSingular ? 'CUSP SINGULARITY: INSECURE' : 'NON-SINGULAR: Hard Discrete Log Group'}</span>
                  </div>
                </div>
              </div>

              {/* FORMULA STRING WRITER INPUT */}
              <div className="mt-2.5 p-2 rounded-xl bg-black/60 border border-white/10 space-y-1.5">
                <div className="flex items-center justify-between text-[8px] text-gray-400 uppercase tracking-wider">
                  <span className="flex items-center gap-1 text-cyan-400 font-bold">
                    <Sparkles className="w-2.5 h-2.5" />
                    FORMULA STRING WRITER:
                  </span>
                  <span>ENTER TO APPLY</span>
                </div>

                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={formulaInput}
                    onChange={(e) => setFormulaInput(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleApplyFormulaInput(formulaInput);
                    }}
                    placeholder="e.g. y^2 = x^3 - 3x + 5"
                    className="w-full bg-black/80 border border-white/20 focus:border-cyan-400 rounded-lg px-2.5 py-1.5 text-xs text-white font-mono placeholder:text-gray-600 outline-none pr-7 shadow-inner"
                  />
                  <button
                    onClick={() => handleApplyFormulaInput(formulaInput)}
                    className="absolute right-1 px-1.5 py-1 rounded text-gray-400 hover:text-cyan-300 cursor-pointer transition-colors"
                    title="Apply custom formula"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                {parseStatus && (
                  <div
                    className={`text-[8px] px-2 py-0.5 rounded font-mono ${
                      parseStatus.success
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                        : 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    }`}
                  >
                    {parseStatus.message}
                  </div>
                )}

                {/* Quick Formula Chips */}
                <div className="flex flex-wrap gap-1 pt-0.5">
                  {[
                    { label: 'secp256k1', val: 'y^2 = x^3 + 7 mod 3' },
                    { label: 'BLS12-381', val: 'y^2 = x^3 + 4 mod 4' },
                    { label: 'NIST P-256', val: 'y^2 = x^3 - 3x + 5' },
                    { label: 'Cusp (Δ=0)', val: 'y^2 = x^3' },
                    { label: 'Congruent', val: 'y^2 = x^3 - 25x' },
                    { label: 'Trefoil', val: 'p=2, q=3, twist=1.0' },
                    { label: 'Soliton', val: 'p=3, q=8, twist=2.1' }
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => {
                        setFormulaInput(chip.val);
                        handleApplyFormulaInput(chip.val);
                      }}
                      className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[8px] text-gray-300 hover:text-white border border-white/10 transition-colors cursor-pointer font-mono"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sliders */}
              <div className="mt-2 space-y-1">
                <div className="text-[8px] text-gray-400 uppercase tracking-wider flex items-center justify-between border-b border-white/10 pb-0.5">
                  <span>FINE-TUNING SLIDERS:</span>
                  <span className="text-[8px] text-cyan-400 flex items-center gap-1">
                    <SlidersHorizontal className="w-2.5 h-2.5" />
                    LIVE GPU
                  </span>
                </div>

                {/* Slider a */}
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9.5px]">
                    <span className="text-gray-300">Param a (Meridian):</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStepParam('a', -0.5)}
                        className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-2 h-2" />
                      </button>
                      <span className="text-amber-300 font-bold font-mono min-w-[26px] text-center">{params.a}</span>
                      <button
                        onClick={() => handleStepParam('a', 0.5)}
                        className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-2 h-2" />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={PARAM_BOUNDS.a.min}
                    max={PARAM_BOUNDS.a.max}
                    step={PARAM_BOUNDS.a.step}
                    value={params.a}
                    onChange={(e) => handleParamChange('a', parseFloat(e.target.value))}
                    className="w-full h-1 accent-amber-400 cursor-pointer mt-1"
                  />
                </div>

                {/* Slider b */}
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9.5px]">
                    <span className="text-gray-300">Param b (Toroid):</span>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => handleStepParam('b', -0.5)}
                        className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                      >
                        <Minus className="w-2 h-2" />
                      </button>
                      <span className="text-purple-300 font-bold font-mono min-w-[26px] text-center">{params.b}</span>
                      <button
                        onClick={() => handleStepParam('b', 0.5)}
                        className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                      >
                        <Plus className="w-2 h-2" />
                      </button>
                    </div>
                  </div>
                  <input
                    type="range"
                    min={PARAM_BOUNDS.b.min}
                    max={PARAM_BOUNDS.b.max}
                    step={PARAM_BOUNDS.b.step}
                    value={params.b}
                    onChange={(e) => handleParamChange('b', parseFloat(e.target.value))}
                    className="w-full h-1 accent-purple-400 cursor-pointer mt-1"
                  />
                </div>

                {/* Winding p & q */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-[9px] mb-0.5">
                      <span className="text-gray-300">Winding p:</span>
                      <span className="text-cyan-400 font-bold font-mono">{params.p}</span>
                    </div>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.p.min}
                      max={PARAM_BOUNDS.p.max}
                      step={PARAM_BOUNDS.p.step}
                      value={params.p}
                      onChange={(e) => handleParamChange('p', parseInt(e.target.value))}
                      className="w-full h-1 accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-[9px] mb-0.5">
                      <span className="text-gray-300">Winding q:</span>
                      <span className="text-cyan-400 font-bold font-mono">{params.q}</span>
                    </div>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.q.min}
                      max={PARAM_BOUNDS.q.max}
                      step={PARAM_BOUNDS.q.step}
                      value={params.q}
                      onChange={(e) => handleParamChange('q', parseInt(e.target.value))}
                      className="w-full h-1 accent-cyan-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Twist & Caliber */}
                <div className="grid grid-cols-2 gap-1.5">
                  <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-[9px] mb-0.5">
                      <span className="text-gray-300">Twist τ:</span>
                      <span className="text-emerald-400 font-bold font-mono">{params.twist}</span>
                    </div>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.twist.min}
                      max={PARAM_BOUNDS.twist.max}
                      step={PARAM_BOUNDS.twist.step}
                      value={params.twist}
                      onChange={(e) => handleParamChange('twist', parseFloat(e.target.value))}
                      className="w-full h-1 accent-emerald-400 cursor-pointer"
                    />
                  </div>

                  <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                    <div className="flex items-center justify-between text-[9px] mb-0.5">
                      <span className="text-gray-300">Caliber r:</span>
                      <span className="text-emerald-400 font-bold font-mono">{params.tubeRadius}</span>
                    </div>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.tubeRadius.min}
                      max={PARAM_BOUNDS.tubeRadius.max}
                      step={PARAM_BOUNDS.tubeRadius.step}
                      value={params.tubeRadius}
                      onChange={(e) => handleParamChange('tubeRadius', parseFloat(e.target.value))}
                      className="w-full h-1 accent-emerald-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Reset to Preset Button */}
                <button
                  onClick={() => {
                    const targetKey = (selectedChain !== 'CUSTOM' && selectedChain in CHAIN_PRESETS)
                      ? (selectedChain as Exclude<ChainKey, 'CUSTOM'>)
                      : (lastPresetKey || 'ETHEREUM');
                    const preset = CHAIN_PRESETS[targetKey];
                    setParams({ ...preset.params });
                    setFormulaInput(preset.formula);
                    setParseStatus({ success: true, message: `Reset to ${preset.name}`, detectedType: 'PARAMS' });
                    spatialAudio.playClick(900);
                  }}
                  className="mt-1 flex items-center justify-center gap-1.5 w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[9px] text-gray-400 hover:text-white border border-white/10 cursor-pointer font-mono transition-colors"
                  title="Reset parameters to active preset standard"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>RESET PARAMETERS</span>
                </button>
              </div>
                </>
              ) : (
                /* COLOR STUDIO CONTENT IN RIGHT SIDEBAR */
                <div className="mt-2 space-y-3">
                  {/* Section 1: Curated Cyber Themes */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[8.5px] uppercase tracking-wider text-gray-400 font-bold">
                        CURATED CYBER THEMES
                      </span>
                      <button
                        onClick={handleRandomizeColors}
                        className="flex items-center gap-1 text-[8.5px] text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                        title="Randomize cyber palette"
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Shuffle</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {COLOR_PRESETS.map((preset) => {
                        const isAct =
                          customColors?.primary === preset.primary &&
                          customColors?.secondary === preset.secondary;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              setCustomColors({
                                primary: preset.primary,
                                secondary: preset.secondary,
                                core: preset.core
                              });
                              spatialAudio.playVerificationPing(1.2);
                            }}
                            className={`flex items-center gap-2 p-1.5 rounded-xl border text-left transition-all cursor-pointer ${
                              isAct
                                ? 'bg-white/15 border-purple-400 text-white shadow-md'
                                : 'bg-black/40 hover:bg-white/5 border-white/10 text-gray-300'
                            }`}
                          >
                            <div className="flex -space-x-1 shrink-0">
                              <span
                                className="w-3 h-3 rounded-full border border-black/40"
                                style={{ backgroundColor: preset.primary }}
                              />
                              <span
                                className="w-3 h-3 rounded-full border border-black/40"
                                style={{ backgroundColor: preset.secondary }}
                              />
                            </div>
                            <div className="truncate">
                              <div className="text-[10px] font-bold leading-tight truncate">{preset.name}</div>
                              <div className="text-[8px] text-gray-400 leading-tight">{preset.badge}</div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Section 2: Custom Shader Channels */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                    <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      CUSTOM SHADER CHANNELS:
                    </div>

                    {/* Primary Channel */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-lg overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectivePrimaryHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: e.target.value,
                                secondary: effectiveSecondaryHex,
                                core: effectiveCoreHex
                              });
                            }}
                            className="absolute -top-3 -left-3 w-12 h-12 cursor-pointer opacity-100"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-white">Primary Rail</div>
                          <div className="text-[8px] text-gray-400">Manifold & Key Lights</div>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={effectivePrimaryHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: val,
                              secondary: effectiveSecondaryHex,
                              core: effectiveCoreHex
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300 font-mono text-[10px] text-center uppercase outline-none focus:border-cyan-400"
                      />
                    </div>

                    {/* Secondary Channel */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-lg overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectiveSecondaryHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: effectivePrimaryHex,
                                secondary: e.target.value,
                                core: effectiveCoreHex
                              });
                            }}
                            className="absolute -top-3 -left-3 w-12 h-12 cursor-pointer opacity-100"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-white">Lattice & Beacons</div>
                          <div className="text-[8px] text-gray-400">Wireframe, Rim & Rings</div>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={effectiveSecondaryHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: effectivePrimaryHex,
                              secondary: val,
                              core: effectiveCoreHex
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-purple-300 font-mono text-[10px] text-center uppercase outline-none focus:border-purple-400"
                      />
                    </div>

                    {/* Laser Core Channel */}
                    <div className="flex items-center justify-between p-2 rounded-xl bg-black/40 border border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="relative w-6 h-6 rounded-lg overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectiveCoreHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: effectivePrimaryHex,
                                secondary: effectiveSecondaryHex,
                                core: e.target.value
                              });
                            }}
                            className="absolute -top-3 -left-3 w-12 h-12 cursor-pointer opacity-100"
                          />
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-white">Laser Spine Core</div>
                          <div className="text-[8px] text-gray-400">Central Luminous Filament</div>
                        </div>
                      </div>
                      <input
                        type="text"
                        value={effectiveCoreHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: effectivePrimaryHex,
                              secondary: effectiveSecondaryHex,
                              core: val
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-amber-200 font-mono text-[10px] text-center uppercase outline-none focus:border-amber-400"
                      />
                    </div>
                  </div>

                  {/* Section 3: Live Palette Swatch & Reset */}
                  <div className="p-2.5 rounded-xl bg-black/60 border border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-[8px] text-gray-400">
                      <span>LIVE CHROMATIC SPECTRUM:</span>
                      <span className="font-bold text-white font-mono">
                        {customColors ? 'CUSTOM PALETTE' : `${activeChainMeta.shortName} NATIVE`}
                      </span>
                    </div>

                    {/* Gradient bar preview */}
                    <div
                      className="h-4 rounded-lg border border-white/20 shadow-inner"
                      style={{
                        background: `linear-gradient(90deg, ${effectivePrimaryHex} 0%, ${effectiveSecondaryHex} 50%, ${effectiveCoreHex} 100%)`
                      }}
                    />

                    <button
                      onClick={() => {
                        setCustomColors(null);
                        spatialAudio.playClick(900);
                      }}
                      className="w-full py-1.5 px-3 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-[9.5px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <RotateCcw className="w-3 h-3" />
                      <span>Reset to {activeChainMeta.shortName} Native</span>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="pt-1.5 border-t border-white/10 text-[7.5px] text-gray-400 flex items-center justify-between">
              <span className="text-emerald-400">✓ Side-by-Side (0% Overlap)</span>
              <span className="text-cyan-400">60 FPS WebGL</span>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PANE 2B: BOTTOM DRAWER DOCK MODE                                          */}
        {/* ========================================================================= */}
        {isInspectorOpen && dockMode === 'BOTTOM' && (
          <div
            onPointerDown={(e) => e.stopPropagation()}
            onClick={(e) => e.stopPropagation()}
            className="h-[235px] w-full shrink-0 border-t border-white/10 bg-[#040714]/98 backdrop-blur-2xl flex flex-col justify-between p-3 z-20 font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-300"
          >
            <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
              <div className="flex items-center gap-3">
                {/* Segmented Tab Switcher */}
                <div className="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/10 shrink-0">
                  <button
                    onClick={() => {
                      setInspectorMode(true, 'FORMULA');
                      spatialAudio.playClick(950);
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9.5px] font-bold transition-all cursor-pointer ${
                      activeInspectorTab === 'FORMULA'
                        ? 'bg-cyan-500/25 text-cyan-200 border border-cyan-400/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <FlaskConical className="w-3 h-3" />
                    <span>FORMULA LAB</span>
                  </button>
                  <button
                    onClick={() => {
                      setInspectorMode(true, 'COLOR');
                      spatialAudio.playClick(1050);
                    }}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[9.5px] font-bold transition-all cursor-pointer ${
                      activeInspectorTab === 'COLOR'
                        ? 'bg-purple-500/25 text-purple-200 border border-purple-400/40 shadow-sm'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    <Palette className="w-3 h-3" />
                    <span>COLOR STUDIO</span>
                    {customColors && <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />}
                  </button>
                </div>

                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    GPU &lt; 2ms
                  </span>
                  <span className="text-[9px] text-emerald-400">• 100% Unobstructed Panoramic Viewport</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => handleDockChange('RIGHT')}
                  className="px-2 py-0.5 rounded text-[8.5px] font-mono bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-300 hover:text-white transition-all cursor-pointer"
                  title="Switch to Right Sidebar Dock"
                >
                  ⇥ Right Dock
                </button>
                <button
                  onClick={() => {
                    setInspectorMode(false);
                    spatialAudio.playClick(850);
                  }}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Inspector"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {activeInspectorTab === 'FORMULA' ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1.5 flex-1 overflow-x-auto min-w-[650px]">
              {/* Column 1: Inline Formula with generous left alignment padding */}
              <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10 overflow-hidden">
                <div>
                  <div className="text-[8px] text-gray-400 mb-1 flex items-center justify-between">
                    <span>INLINE FORMULA (CLICK &amp; TYPE):</span>
                    <span className="text-cyan-400 font-bold">WEIERSTRASS</span>
                  </div>
                  <div className="flex items-center justify-start gap-1 font-mono text-[11px] py-1.5 px-2 bg-white/5 rounded-lg border border-white/5 overflow-x-auto whitespace-nowrap">
                    <span className="text-emerald-400 font-bold pl-0.5">y²</span>
                    <span>=</span>
                    <span className="text-cyan-400 font-bold">x³</span>
                    <span>+</span>
                    <div className="inline-flex items-center bg-amber-500/15 border border-amber-500/40 rounded px-1.5 py-0.5">
                      <input
                        type="number"
                        min={PARAM_BOUNDS.a.min}
                        max={PARAM_BOUNDS.a.max}
                        step={PARAM_BOUNDS.a.step}
                        value={params.a}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) handleParamChange('a', val);
                        }}
                        onWheel={(e) => e.currentTarget.blur()}
                        className="w-12 min-w-[44px] bg-transparent text-amber-300 font-bold text-center outline-none text-[11px] font-mono"
                      />
                      <span className="text-amber-400 text-[10px]">·x</span>
                    </div>
                    <span>+</span>
                    <div className="inline-flex items-center bg-purple-500/15 border border-purple-500/40 rounded px-1.5 py-0.5">
                      <input
                        type="number"
                        min={PARAM_BOUNDS.b.min}
                        max={PARAM_BOUNDS.b.max}
                        step={PARAM_BOUNDS.b.step}
                        value={params.b}
                        onChange={(e) => {
                          const val = parseFloat(e.target.value);
                          if (!isNaN(val)) handleParamChange('b', val);
                        }}
                        onWheel={(e) => e.currentTarget.blur()}
                        className="w-12 min-w-[44px] bg-transparent text-purple-300 font-bold text-center outline-none text-[11px] font-mono"
                      />
                    </div>
                    <span className="text-gray-400 text-[10px]">(mod</span>
                    <input
                      type="number"
                      min="1"
                      max="8"
                      value={params.p}
                      onChange={(e) => {
                        const val = parseInt(e.target.value);
                        if (!isNaN(val) && val >= 1 && val <= 8) handleParamChange('p', val);
                      }}
                      onWheel={(e) => e.currentTarget.blur()}
                      className="w-6 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300 font-bold text-center outline-none text-[10px] font-mono"
                    />
                    <span className="text-gray-400 text-[10px]">)</span>
                  </div>
                </div>

                <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8px]">
                  <span className="text-gray-400">Δ = -16(4a³+27b²):</span>
                  <span
                    className={`px-1.5 py-0.5 rounded font-bold ${
                      isSingular
                        ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {isSingular ? '⚠ CUSP SINGULARITY' : `✓ ${discriminant.toLocaleString()} NON-SINGULAR`}
                  </span>
                </div>
              </div>

              {/* Column 2: Formula Writer */}
              <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10">
                <div>
                  <div className="text-[8px] text-gray-400 mb-1 flex items-center justify-between">
                    <span className="text-cyan-300 font-bold">TYPE ANY EQUATION:</span>
                    <span className="text-[7.5px]">ENTER TO APPLY</span>
                  </div>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={formulaInput}
                      onChange={(e) => setFormulaInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleApplyFormulaInput(formulaInput);
                      }}
                      placeholder="y^2 = x^3 - 3x + 5"
                      className="w-full bg-black/70 border border-white/20 focus:border-cyan-400 rounded-lg px-2 py-1 text-xs text-white font-mono placeholder:text-gray-600 outline-none pr-6"
                    />
                    <button
                      onClick={() => handleApplyFormulaInput(formulaInput)}
                      className="absolute right-1 text-gray-400 hover:text-cyan-300 cursor-pointer"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 pt-1">
                  {[
                    { label: 'secp256k1', val: 'y^2 = x^3 + 7 mod 3' },
                    { label: 'BLS12-381', val: 'y^2 = x^3 + 4 mod 4' },
                    { label: 'NIST P-256', val: 'y^2 = x^3 - 3x + 5' },
                    { label: 'Cusp (Δ=0)', val: 'y^2 = x^3' },
                    { label: 'Trefoil', val: 'p=2, q=3, twist=1.0' }
                  ].map((chip) => (
                    <button
                      key={chip.label}
                      onClick={() => {
                        setFormulaInput(chip.val);
                        handleApplyFormulaInput(chip.val);
                      }}
                      className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 text-[7.5px] text-gray-300 hover:text-white border border-white/10 cursor-pointer font-mono"
                    >
                      {chip.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Column 3: Live Sliders */}
              <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10 text-[9px]">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Param a:</span>
                    <span className="text-amber-400 font-bold font-mono">{params.a}</span>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.a.min}
                      max={PARAM_BOUNDS.a.max}
                      step={PARAM_BOUNDS.a.step}
                      value={params.a}
                      onChange={(e) => handleParamChange('a', parseFloat(e.target.value))}
                      className="w-24 h-1 accent-amber-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Param b:</span>
                    <span className="text-purple-400 font-bold font-mono">{params.b}</span>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.b.min}
                      max={PARAM_BOUNDS.b.max}
                      step={PARAM_BOUNDS.b.step}
                      value={params.b}
                      onChange={(e) => handleParamChange('b', parseFloat(e.target.value))}
                      className="w-24 h-1 accent-purple-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Winding p:</span>
                    <span className="text-cyan-400 font-bold font-mono">{params.p}</span>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.p.min}
                      max={PARAM_BOUNDS.p.max}
                      step={PARAM_BOUNDS.p.step}
                      value={params.p}
                      onChange={(e) => handleParamChange('p', parseInt(e.target.value))}
                      className="w-24 h-1 accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Winding q:</span>
                    <span className="text-cyan-400 font-bold font-mono">{params.q}</span>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.q.min}
                      max={PARAM_BOUNDS.q.max}
                      step={PARAM_BOUNDS.q.step}
                      value={params.q}
                      onChange={(e) => handleParamChange('q', parseInt(e.target.value))}
                      className="w-24 h-1 accent-cyan-400 cursor-pointer"
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Twist τ:</span>
                    <span className="text-emerald-400 font-bold font-mono">{params.twist}</span>
                    <input
                      type="range"
                      min={PARAM_BOUNDS.twist.min}
                      max={PARAM_BOUNDS.twist.max}
                      step={PARAM_BOUNDS.twist.step}
                      value={params.twist}
                      onChange={(e) => handleParamChange('twist', parseFloat(e.target.value))}
                      className="w-24 h-1 accent-emerald-400 cursor-pointer"
                    />
                  </div>
                </div>

                {/* Reset to Preset Button */}
                <button
                  onClick={() => {
                    const targetKey = (selectedChain !== 'CUSTOM' && selectedChain in CHAIN_PRESETS)
                      ? (selectedChain as Exclude<ChainKey, 'CUSTOM'>)
                      : (lastPresetKey || 'ETHEREUM');
                    const preset = CHAIN_PRESETS[targetKey];
                    setParams({ ...preset.params });
                    setFormulaInput(preset.formula);
                    setParseStatus({ success: true, message: `Reset to ${preset.name}`, detectedType: 'PARAMS' });
                    spatialAudio.playClick(900);
                  }}
                  className="mt-1 flex items-center justify-center gap-1 w-full py-1 rounded bg-white/5 hover:bg-white/10 text-[8px] text-gray-400 hover:text-white border border-white/10 cursor-pointer font-mono transition-colors"
                  title="Reset parameters to active preset standard"
                >
                  <RotateCcw className="w-2.5 h-2.5" />
                  <span>RESET PARAMETERS</span>
                </button>
              </div>
            </div>
            ) : (
              /* COLOR STUDIO CONTENT IN BOTTOM DRAWER */
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1.5 flex-1 overflow-x-auto min-w-[650px]">
                {/* Column 1: Curated Cyber Themes */}
                <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10 overflow-hidden">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[8.5px] uppercase tracking-wider text-gray-400 font-bold">
                        CURATED CYBER PALETTES:
                      </span>
                      <button
                        onClick={handleRandomizeColors}
                        className="flex items-center gap-1 text-[8.5px] text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                        title="Randomize cyber palette"
                      >
                        <Sparkles className="w-2.5 h-2.5" />
                        <span>Shuffle</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-1 max-h-[135px] overflow-y-auto pr-0.5">
                      {COLOR_PRESETS.map((preset) => {
                        const isAct =
                          customColors?.primary === preset.primary &&
                          customColors?.secondary === preset.secondary;
                        return (
                          <button
                            key={preset.id}
                            onClick={() => {
                              setCustomColors({
                                primary: preset.primary,
                                secondary: preset.secondary,
                                core: preset.core
                              });
                              spatialAudio.playVerificationPing(1.2);
                            }}
                            className={`flex items-center gap-1.5 p-1 rounded-lg border text-left transition-all cursor-pointer ${
                              isAct
                                ? 'bg-white/15 border-purple-400 text-white'
                                : 'bg-black/40 hover:bg-white/5 border-white/10 text-gray-300'
                            }`}
                          >
                            <div className="flex -space-x-1 shrink-0">
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/40"
                                style={{ backgroundColor: preset.primary }}
                              />
                              <span
                                className="w-2.5 h-2.5 rounded-full border border-black/40"
                                style={{ backgroundColor: preset.secondary }}
                              />
                            </div>
                            <span className="text-[9px] font-bold truncate">{preset.name}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="text-[7.5px] text-gray-400 pt-1 border-t border-white/10 flex items-center justify-between">
                    <span>8 Blockchain Themes</span>
                    <span className="text-purple-300">1-Click Apply</span>
                  </div>
                </div>

                {/* Column 2: Manifold & Lattice Channels */}
                <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10">
                  <div className="space-y-1.5">
                    <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      GPU SHADER CHANNELS:
                    </div>

                    {/* Primary Channel */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-5 h-5 rounded-md overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectivePrimaryHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: e.target.value,
                                secondary: effectiveSecondaryHex,
                                core: effectiveCoreHex
                              });
                            }}
                            className="absolute -top-3 -left-3 w-10 h-10 cursor-pointer opacity-100"
                          />
                        </div>
                        <div className="text-[9.5px] font-bold text-white">Primary Rail</div>
                      </div>
                      <input
                        type="text"
                        value={effectivePrimaryHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: val,
                              secondary: effectiveSecondaryHex,
                              core: effectiveCoreHex
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300 font-mono text-[9.5px] text-center uppercase outline-none focus:border-cyan-400"
                      />
                    </div>

                    {/* Secondary Channel */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-5 h-5 rounded-md overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectiveSecondaryHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: effectivePrimaryHex,
                                secondary: e.target.value,
                                core: effectiveCoreHex
                              });
                            }}
                            className="absolute -top-3 -left-3 w-10 h-10 cursor-pointer opacity-100"
                          />
                        </div>
                        <div className="text-[9.5px] font-bold text-white">Lattice & Beacons</div>
                      </div>
                      <input
                        type="text"
                        value={effectiveSecondaryHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: effectivePrimaryHex,
                              secondary: val,
                              core: effectiveCoreHex
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-purple-300 font-mono text-[9.5px] text-center uppercase outline-none focus:border-purple-400"
                      />
                    </div>
                  </div>
                  <div className="text-[7.5px] text-gray-400 pt-1 border-t border-white/10 flex items-center justify-between">
                    <span>Key Lights & Specular</span>
                    <span className="text-cyan-300">Live GPU Updates</span>
                  </div>
                </div>

                {/* Column 3: Laser Spine Core Channel & Actions */}
                <div className="flex flex-col justify-between bg-black/50 p-2.5 rounded-xl border border-white/10">
                  <div className="space-y-1.5">
                    <div className="text-[8.5px] uppercase tracking-wider text-gray-400 font-bold mb-1">
                      CORE EMISSION & ACTIONS:
                    </div>

                    {/* Core Channel */}
                    <div className="flex items-center justify-between p-1.5 rounded-lg bg-black/40 border border-white/10">
                      <div className="flex items-center gap-1.5">
                        <div className="relative w-5 h-5 rounded-md overflow-hidden border border-white/20 shrink-0 cursor-pointer shadow-inner">
                          <input
                            type="color"
                            value={effectiveCoreHex}
                            onChange={(e) => {
                              setCustomColors({
                                primary: effectivePrimaryHex,
                                secondary: effectiveSecondaryHex,
                                core: e.target.value
                              });
                            }}
                            className="absolute -top-3 -left-3 w-10 h-10 cursor-pointer opacity-100"
                          />
                        </div>
                        <div className="text-[9.5px] font-bold text-white">Laser Spine Core</div>
                      </div>
                      <input
                        type="text"
                        value={effectiveCoreHex.toUpperCase()}
                        onChange={(e) => {
                          const val = e.target.value;
                          if (/^#[0-9A-Fa-f]{0,6}$/.test(val)) {
                            setCustomColors({
                              primary: effectivePrimaryHex,
                              secondary: effectiveSecondaryHex,
                              core: val
                            });
                          }
                        }}
                        className="w-16 px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-amber-200 font-mono text-[9.5px] text-center uppercase outline-none focus:border-amber-400"
                      />
                    </div>

                    {/* Gradient preview bar */}
                    <div
                      className="h-3.5 rounded-lg border border-white/20 shadow-inner"
                      style={{
                        background: `linear-gradient(90deg, ${effectivePrimaryHex} 0%, ${effectiveSecondaryHex} 50%, ${effectiveCoreHex} 100%)`
                      }}
                    />
                  </div>

                  <button
                    onClick={() => {
                      setCustomColors(null);
                      spatialAudio.playClick(900);
                    }}
                    className="w-full py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white border border-white/10 text-[9px] font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset to {activeChainMeta.shortName} Native</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HyperCoreCanvas3D;
