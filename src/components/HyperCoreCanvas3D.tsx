import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { spatialAudio } from '../utils/spatialAudio';
import { 
  Orbit, 
  RefreshCw, 
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
  Maximize2
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

  const [isLabOpen, setIsLabOpen] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const sp = new URLSearchParams(window.location.search);
    return sp.get('lab') === '1' || sp.get('lab') === 'true';
  });

  // Docking mode: RIGHT sidebar, BOTTOM drawer, or COLLAPSED floating pill
  const [dockMode, setDockMode] = useState<DockMode>(() => {
    if (typeof window === 'undefined') return 'RIGHT';
    const sp = new URLSearchParams(window.location.search);
    const d = sp.get('dock')?.toUpperCase();
    if (d === 'BOTTOM') return 'BOTTOM';
    if (d === 'COLLAPSED') return 'COLLAPSED';
    return 'RIGHT';
  });

  // User zoom scale control (1.0 = 100%, range: 0.5 .. 2.0)
  const [userZoomScale, setUserZoomScale] = useState<number>(1.0);

  // Direct formula string input & live feedback state
  const [formulaInput, setFormulaInput] = useState<string>('y^2 = x^3 + 7');
  const [parseStatus, setParseStatus] = useState<ParseFormulaResult | null>(null);

  const [materialType, setMaterialType] = useState<MaterialType>('LIQUID_CHROME');
  const [isRotating, setIsRotating] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const [tags, setTags] = useState<VerificationTag[]>([]);

  // Exploded view animation references
  const isExplodedRef = useRef(false);
  const explodeLerpRef = useRef(0);
  const coreLayerRef = useRef<THREE.Group | null>(null);
  const shellLayerRef = useRef<THREE.Group | null>(null);
  const nodesLayerRef = useRef<THREE.Group | null>(null);

  // References for three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringsRef = useRef<THREE.Group | null>(null);

  // Dynamic light & ring refs for color shifting
  const pointLight1Ref = useRef<THREE.PointLight | null>(null);
  const pointLight2Ref = useRef<THREE.PointLight | null>(null);
  const centerGlowLightRef = useRef<THREE.PointLight | null>(null);
  const ringMesh1Ref = useRef<THREE.Mesh | null>(null);
  const ringMesh2Ref = useRef<THREE.Mesh | null>(null);

  // Active verification effects pool
  const activeVerificationsRef = useRef<ActiveVerification[]>([]);

  // Scale normalization & container geometry tracking
  const naturalRadiusRef = useRef<number>(2.5);
  const userZoomScaleRef = useRef<number>(userZoomScale);
  useEffect(() => {
    userZoomScaleRef.current = userZoomScale;
  }, [userZoomScale]);

  // Raycasting references
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseVecRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // Mathematical discriminant calculation
  const discriminant = computeDiscriminant(params.a, params.b);
  const isSingular = discriminant === 0;

  // Keep formulaInput string in sync when params change
  useEffect(() => {
    const aTerm = params.a === 0 ? '' : params.a > 0 ? `+ ${params.a === 1 ? '' : params.a}x` : `- ${Math.abs(params.a) === 1 ? '' : Math.abs(params.a)}x`;
    const bTerm = params.b === 0 ? '' : params.b > 0 ? `+ ${params.b}` : `- ${Math.abs(params.b)}`;
    setFormulaInput(`y^2 = x^3 ${aTerm} ${bTerm} mod ${params.p}`.replace(/\s+/g, ' ').trim());
  }, [params.a, params.b, params.p]);

  // Active chain metadata
  const activeChainMeta = selectedChain !== 'CUSTOM'
    ? CHAIN_PRESETS[selectedChain]
    : {
        id: 'CUSTOM' as ChainKey,
        name: 'Custom Lab',
        shortName: 'Formula Lab',
        badge: `p=${params.p}, q=${params.q}`,
        curveType: 'Custom Weierstrass Elliptic Curve',
        formula: `y² = x³ ${params.a === 0 ? '' : params.a > 0 ? `+ ${params.a}x` : `- ${Math.abs(params.a)}x`} ${params.b === 0 ? '' : params.b > 0 ? `+ ${params.b}` : `- ${Math.abs(params.b)}`} mod ${params.p}`,
        details: 'User-configured parametric algebraic geometry. Real-time GPU re-parameterization with live non-singularity assessment.',
        zkAttestation: isSingular ? '⚠ Singular Curve: Cusp Degeneracy' : `✓ Non-Singular: Δ = ${discriminant.toLocaleString()}`,
        params,
        primaryColor: isSingular ? 0xf43f5e : 0x00ffa3,
        primaryHex: isSingular ? '#f43f5e' : '#00ffa3',
        secondaryColor: 0x00e5ff,
        secondaryHex: '#00e5ff',
        icon: Orbit,
        auditLabels: isSingular
          ? ['⚠ SINGULAR_CUSP: DEGENERATE', '⚠ GROUP_COLLAPSE: INSECURE', '⚠ NON_PRIME_ORDER: FAIL']
          : ['TOPOLOGY_INVARIANT: PASS', 'SMOOTH_MANIFOLD: OK', 'ABELIAN_GROUP: VALID', 'KZG_POLYNOMIAL: ATTESTED']
      };

  // Helper to spawn 3D cryptographic verification effect
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
      size: 0.06,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending
    });
    const pSystem = new THREE.Points(pGeo, pMat);
    effectGroup.add(pSystem);

    scene.add(effectGroup);

    activeVerificationsRef.current.push({
      group: effectGroup,
      light: flashLight,
      outerRing: ring1,
      innerRing: ring2,
      hexReticle: hexMesh,
      particles: pSystem,
      particleVelocities: pVels,
      progress: 0,
      duration: 1.15
    });
  };

  const createMaterials = (color1: number, color2: number, matType: MaterialType) => {
    switch (matType) {
      case 'LIQUID_CHROME':
        return {
          main: new THREE.MeshPhysicalMaterial({
            color: color1,
            metalness: 0.95,
            roughness: 0.12,
            clearcoat: 1.0,
            clearcoatRoughness: 0.08,
            reflectivity: 1.0,
            wireframe: false
          }),
          wireframe: new THREE.MeshBasicMaterial({
            color: color2,
            wireframe: true,
            transparent: true,
            opacity: 0.22
          })
        };
      case 'HOLO_WIREFRAME':
        return {
          main: new THREE.MeshBasicMaterial({
            color: color1,
            wireframe: true,
            transparent: true,
            opacity: 0.88,
            blending: THREE.AdditiveBlending
          }),
          wireframe: new THREE.MeshBasicMaterial({
            color: 0xffffff,
            wireframe: true,
            transparent: true,
            opacity: 0.35,
            blending: THREE.AdditiveBlending
          })
        };
      case 'IRIDESCENT_GLASS':
      default:
        return {
          main: new THREE.MeshPhysicalMaterial({
            color: color1,
            metalness: 0.15,
            roughness: 0.05,
            transmission: 0.85,
            thickness: 1.4,
            ior: 1.7,
            transparent: true,
            opacity: 0.92
          }),
          wireframe: new THREE.MeshBasicMaterial({
            color: color2,
            wireframe: true,
            transparent: true,
            opacity: 0.38
          })
        };
    }
  };

  // Build 3D curve with Bounding-Sphere Auto-Fit Normalization
  const buildCurveMesh = (
    scene: THREE.Scene,
    p: CurveParams,
    color1: number,
    color2: number,
    matType: MaterialType,
    zoomFactor: number
  ) => {
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
    const mats = createMaterials(color1, color2, matType);

    // LAYER 1: Solid Main Manifold Shell
    const shellGroup = new THREE.Group();
    const tubularSegments = 260;
    const radialSegments = 24;
    const geom = new THREE.TubeGeometry(curve, tubularSegments, p.tubeRadius, radialSegments, true);

    // BEST PRACTICE: Bounding-Sphere Auto-Scale Normalization
    // Measures natural geometry bounds so regardless of curve parameters (even Solana twist or huge b),
    // the figure scales automatically to fit harmoniously with generous negative space
    geom.computeBoundingSphere();
    const naturalRadius = geom.boundingSphere?.radius || 2.5;
    naturalRadiusRef.current = naturalRadius;

    // Aspect-aware target radius: preserves comfortable padding in both portrait & landscape containers
    const aspect = cameraRef.current?.aspect || 1.0;
    const targetRadius = Math.min(1.78, 1.78 * Math.max(0.68, aspect)) * zoomFactor;
    const autoScaleNorm = targetRadius / Math.max(1.1, naturalRadius);

    group.scale.setScalar(autoScaleNorm);

    const mainMesh = new THREE.Mesh(geom, mats.main);
    mainMesh.castShadow = true;
    mainMesh.receiveShadow = true;
    shellGroup.add(mainMesh);

    // Holographic lattice overlay
    const wireGeom = new THREE.TubeGeometry(curve, tubularSegments, p.tubeRadius * 1.018, 12, true);
    const wireMesh = new THREE.Mesh(wireGeom, mats.wireframe);
    shellGroup.add(wireMesh);
    group.add(shellGroup);
    shellLayerRef.current = shellGroup;

    // LAYER 2: Decentralized Consensus Validation Nodes
    const nodesGroup = new THREE.Group();
    const nodeCount = 54;
    const nodeGeo = new THREE.OctahedronGeometry(0.045, 0);
    const nodeMat = new THREE.MeshBasicMaterial({
      color: color2,
      wireframe: false,
      transparent: true,
      opacity: 0.95
    });

    for (let i = 0; i < nodeCount; i++) {
      const t = i / nodeCount;
      const pt = curve.getPoint(t);
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.copy(pt);
      nodesGroup.add(nodeMesh);
    }
    group.add(nodesGroup);
    nodesLayerRef.current = nodesGroup;

    // LAYER 3: Internal Luminous Laser Spine Core
    const coreGroup = new THREE.Group();
    const coreGeom = new THREE.TubeGeometry(curve, tubularSegments, p.tubeRadius * 0.22, 10, true);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    });
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    coreGroup.add(coreMesh);
    group.add(coreGroup);
    coreLayerRef.current = coreGroup;

    scene.add(group);
    meshGroupRef.current = group;

    // Scale orbital rings proportionally to match the auto-fitted curve
    if (ringsRef.current) {
      ringsRef.current.scale.setScalar(autoScaleNorm);
    }
  };

  // Main Three.js Scene Setup with ResizeObserver
  useEffect(() => {
    const container = canvasContainerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth || 600;
    const height = container.clientHeight || 600;

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
    renderer.setSize(width, height);
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

    // Lighting Grid
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(activeChainMeta.primaryColor, 8.5, 24);
    light1.position.set(5, 5, 5);
    scene.add(light1);
    pointLight1Ref.current = light1;

    const light2 = new THREE.PointLight(activeChainMeta.secondaryColor, 7.5, 24);
    light2.position.set(-5, -4, 4);
    scene.add(light2);
    pointLight2Ref.current = light2;

    const centerGlow = new THREE.PointLight(activeChainMeta.primaryColor, 3.2, 10);
    centerGlow.position.set(0, 0, 0);
    scene.add(centerGlow);
    centerGlowLightRef.current = centerGlow;

    // Particles
    const particleCount = 220;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color(activeChainMeta.primaryColor),
      new THREE.Color(activeChainMeta.secondaryColor),
      new THREE.Color(0xffffff)
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.5 + Math.random() * 8.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

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

    // BEST PRACTICE: ResizeObserver on canvas container
    // When Formula Lab opens/closes (changing container flex width), the canvas seamlessly adapts!
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const w = entry.contentRect.width;
        const h = entry.contentRect.height;
        if (w > 0 && h > 0) {
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          renderer.setSize(w, h, false);

          // Dynamic scale normalization on container resize (e.g. sidebar toggle)
          if (meshGroupRef.current && naturalRadiusRef.current) {
            const dynamicTarget = Math.min(1.78, 1.78 * Math.max(0.68, camera.aspect)) * userZoomScaleRef.current;
            const norm = dynamicTarget / Math.max(1.1, naturalRadiusRef.current);
            meshGroupRef.current.scale.setScalar(norm);
            if (ringsRef.current) {
              ringsRef.current.scale.setScalar(norm);
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
          (item.innerRing.material as THREE.MeshBasicMaterial).opacity = Math.pow(1.0 - pVal, 2);

          item.hexReticle.rotation.z += delta * 3.5;
          (item.hexReticle.material as THREE.MeshBasicMaterial).opacity = (1.0 - pVal) * 0.75;
          item.light.intensity = 85 * (1.0 - pVal);

          const posAttr = item.particles.geometry.attributes.position as THREE.BufferAttribute;
          const posArray = posAttr.array as Float32Array;
          for (let j = 0; j < item.particleVelocities.length; j++) {
            const vel = item.particleVelocities[j];
            posArray[j * 3] += vel.x * delta;
            posArray[j * 3 + 1] += vel.y * delta;
            posArray[j * 3 + 2] += vel.z * delta;
          }
          posAttr.needsUpdate = true;
          (item.particles.material as THREE.PointsMaterial).opacity = 1.0 - pVal;
        }
      }

      // Exploded View
      const targetExplode = isExplodedRef.current ? 1.0 : 0.0;
      explodeLerpRef.current = THREE.MathUtils.lerp(explodeLerpRef.current, targetExplode, 0.08);
      const curExplode = explodeLerpRef.current;

      if (shellLayerRef.current) {
        const shellScale = 1.0 + curExplode * 0.42;
        shellLayerRef.current.scale.set(shellScale, shellScale, shellScale);
        shellLayerRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.Material;
            if (mat && 'opacity' in mat) {
              (mat as THREE.MeshPhysicalMaterial).opacity = 0.92 - curExplode * 0.65;
            }
          }
        });
      }

      if (nodesLayerRef.current) {
        const nodeScale = 1.0 + curExplode * 0.82;
        nodesLayerRef.current.scale.set(nodeScale, nodeScale, nodeScale);
      }

      if (coreLayerRef.current) {
        coreLayerRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.MeshBasicMaterial;
            if (mat) {
              mat.opacity = 0.88 + curExplode * 0.92;
            }
          }
        });
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  // Rebuild mesh when parameters, material, or zoom changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    buildCurveMesh(
      scene,
      params,
      activeChainMeta.primaryColor,
      activeChainMeta.secondaryColor,
      materialType,
      userZoomScale
    );

    if (pointLight1Ref.current) pointLight1Ref.current.color.setHex(activeChainMeta.primaryColor);
    if (pointLight2Ref.current) pointLight2Ref.current.color.setHex(activeChainMeta.secondaryColor);
    if (centerGlowLightRef.current) centerGlowLightRef.current.color.setHex(activeChainMeta.primaryColor);
    if (ringMesh1Ref.current) (ringMesh1Ref.current.material as THREE.MeshBasicMaterial).color.setHex(activeChainMeta.primaryColor);
    if (ringMesh2Ref.current) (ringMesh2Ref.current.material as THREE.MeshBasicMaterial).color.setHex(activeChainMeta.secondaryColor);
  }, [params, materialType, selectedChain, userZoomScale]);

  // OrbitControls sync
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isRotating;
      controlsRef.current.autoRotateSpeed = 1.25;
    }
  }, [isRotating]);

  // Click Attestation Raycasting
  const triggerVerificationClick = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const camera = cameraRef.current;
    const meshGroup = meshGroupRef.current;
    if (!canvas || !camera || !meshGroup) return;

    const rect = canvas.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    const mouseX = (relX / rect.width) * 2 - 1;
    const mouseY = -(relY / rect.height) * 2 + 1;
    mouseVecRef.current.set(mouseX, mouseY);

    raycasterRef.current.setFromCamera(mouseVecRef.current, camera);
    const intersects = raycasterRef.current.intersectObjects(meshGroup.children, true);

    let hitPoint: THREE.Vector3;
    let hitNormal: THREE.Vector3;
    let isDirectHit = false;

    if (intersects.length > 0) {
      const hit = intersects[0];
      hitPoint = hit.point.clone();
      isDirectHit = true;

      if (hit.face) {
        const normalMatrix = new THREE.Matrix3().getNormalMatrix(hit.object.matrixWorld);
        hitNormal = hit.face.normal.clone().applyMatrix3(normalMatrix).normalize();
      } else {
        hitNormal = camera.position.clone().sub(hitPoint).normalize();
      }
    } else {
      const plane = new THREE.Plane();
      plane.setFromNormalAndCoplanarPoint(
        camera.getWorldDirection(new THREE.Vector3()).negate(),
        new THREE.Vector3(0, 0, 0)
      );
      const target = new THREE.Vector3();
      raycasterRef.current.ray.intersectPlane(plane, target);
      hitPoint = target || new THREE.Vector3(0, 0, 0);
      hitNormal = camera.position.clone().sub(hitPoint).normalize();
    }

    spatialAudio.playVerificationPing(0.95 + Math.random() * 0.12);
    spawnVerificationAtPoint(hitPoint, hitNormal, activeChainMeta.primaryColor);

    const tagId = Date.now() + Math.random();
    const labels = activeChainMeta.auditLabels;
    const label = isDirectHit
      ? labels[Math.floor(Math.random() * labels.length)]
      : (isSingular ? '⚠ SINGULAR_TOPOLOGY' : 'CURVE_ATTESTED');

    const newTag: VerificationTag = {
      id: tagId,
      x: relX,
      y: relY,
      label,
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
    if (key !== 'CUSTOM') {
      const preset = CHAIN_PRESETS[key];
      setParams({ ...preset.params });
      if (cameraRef.current) {
        const normal = cameraRef.current.position.clone().normalize();
        spawnVerificationAtPoint(new THREE.Vector3(0, 0, 0), normal, preset.primaryColor);
      }
    }
    spatialAudio.playVerificationPing(1.15);
  };

  const handleParamChange = (param: keyof CurveParams, val: number) => {
    setSelectedChain('CUSTOM');
    setParams((prev) => ({
      ...prev,
      [param]: val
    }));
  };

  const handleStepParam = (param: keyof CurveParams, deltaVal: number, minVal: number, maxVal: number) => {
    setSelectedChain('CUSTOM');
    setParams((prev) => {
      const next = Math.min(maxVal, Math.max(minVal, Number((prev[param] + deltaVal).toFixed(2))));
      return {
        ...prev,
        [param]: next
      };
    });
    spatialAudio.playClick(950);
  };

  const handleFormulaInputChange = (text: string) => {
    setFormulaInput(text);
    const res = parseFormulaInput(text);
    setParseStatus(res);
    if (res.success && res.params) {
      setSelectedChain('CUSTOM');
      setParams((prev) => ({
        ...prev,
        ...res.params
      }));
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
      if (meshGroupRef.current && naturalRadiusRef.current && cameraRef.current) {
        const targetRad = Math.min(1.78, 1.78 * Math.max(0.68, cameraRef.current.aspect)) * next;
        const norm = targetRad / Math.max(1.1, naturalRadiusRef.current);
        meshGroupRef.current.scale.setScalar(norm);
        if (ringsRef.current) {
          ringsRef.current.scale.setScalar(norm);
        }
      }
      return next;
    });
    spatialAudio.playClick(850);
  };

  const handleResetScale = () => {
    setUserZoomScale(1.0);
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      controlsRef.current.target.set(0, 0, 0);
      if (meshGroupRef.current && naturalRadiusRef.current) {
        const targetRad = Math.min(1.78, 1.78 * Math.max(0.68, cameraRef.current.aspect));
        const norm = targetRad / Math.max(1.1, naturalRadiusRef.current);
        meshGroupRef.current.scale.setScalar(norm);
        if (ringsRef.current) {
          ringsRef.current.scale.setScalar(norm);
        }
      }
    }
    spatialAudio.playClick(900);
  };

  const handleSelectMaterial = (type: MaterialType) => {
    setMaterialType(type);
    spatialAudio.playClick(1050);
  };

  // Pointer tracking for click-vs-drag differentiation
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
    /* STRUCTURAL SPLIT-VIEWPORT CONTAINER: The 3D Canvas and the Inspector are adjacent flex siblings! */
    <div
      className={`relative w-full h-[580px] lg:h-[680px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#090416] via-[#04020a] to-[#020106] shadow-2xl group select-none flex ${
        isLabOpen && dockMode === 'BOTTOM' ? 'flex-col' : 'flex-col md:flex-row'
      }`}
    >
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
      {/* PANE 1: THE DEDICATED 3D CANVAS VIEWPORT (Resizes dynamically; 0% overlap) */}
      {/* ========================================================================= */}
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

        {/* Top HUD (Constrained inside the 3D viewport pane) */}
        <div className="absolute top-3 left-3 right-3 z-20 pointer-events-none flex flex-col gap-1.5">
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 pointer-events-auto">
              <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/15 px-3 py-1 rounded-full text-xs text-white shadow-lg">
                <span
                  className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                  style={{ backgroundColor: activeChainMeta.primaryHex }}
                ></span>
                <span className="font-bold tracking-wider font-mono text-xs truncate max-w-[130px] sm:max-w-none">
                  {activeChainMeta.name}
                </span>
                <span className="text-white/30 hidden md:inline">|</span>
                <span className="font-mono text-[11px] font-semibold hidden md:inline" style={{ color: activeChainMeta.primaryHex }}>
                  {activeChainMeta.badge}
                </span>
              </div>

              {!isLabOpen && (
                <button
                  onClick={() => {
                    setIsLabOpen(true);
                    spatialAudio.playClick(1100);
                  }}
                  className="flex items-center gap-1.5 font-mono px-3.5 py-1 rounded-full text-xs font-bold transition-all border cursor-pointer bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border-cyan-500/40 hover:border-cyan-300 shadow-lg shadow-cyan-500/10"
                  title="Open Live Formula Lab Inspector"
                >
                  <FlaskConical className="w-3.5 h-3.5" />
                  <span>FORMULA_LAB</span>
                </button>
              )}
            </div>

            <div className="flex items-center gap-1.5 pointer-events-auto">
              <button
                onClick={() => {
                  const next = !isExploded;
                  setIsExploded(next);
                  isExplodedRef.current = next;
                  spatialAudio.playExplode(next);
                }}
                className={`flex items-center gap-1.5 font-mono px-3 py-1 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                  isExploded
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black border-emerald-400 shadow-xl shadow-emerald-500/30 scale-[1.03]'
                    : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-white border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-500/10'
                }`}
                title="Toggle Exploded Layer Decomposition"
              >
                <Layers className={`w-3.5 h-3.5 ${isExploded ? 'animate-pulse' : ''}`} />
                <span className="hidden sm:inline">{isExploded ? 'COLLAPSE' : 'EXPLODED'}</span>
              </button>

              <button
                onClick={handleResetScale}
                className="flex items-center gap-1 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-mono px-2.5 py-1 rounded-full text-xs transition-colors border border-white/15 cursor-pointer"
                title="Reset Camera Angle & Scale"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span className="hidden md:inline">RESET</span>
              </button>
            </div>
          </div>

          {/* Sub-bar: Equation badge & hint (Only displayed when Formula Lab is closed or in bottom dock) */}
          {(!isLabOpen || dockMode === 'BOTTOM') && (
            <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
              <div className="flex items-center gap-2 bg-black/75 backdrop-blur-xl border border-white/15 px-2.5 py-1 rounded-xl text-xs font-mono text-gray-300 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="font-bold text-white tracking-wide text-[11px] truncate max-w-[180px] sm:max-w-none">
                  {activeChainMeta.formula}
                </span>
                <span className="text-white/20">|</span>
                <span
                  className={`text-[10px] font-semibold px-1.5 py-0.5 rounded ${
                    isSingular
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {isSingular ? 'Δ = 0 ⚠' : `Δ = ${discriminant.toLocaleString()} ✓`}
                </span>
              </div>

              <div className="hidden xl:flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-xl text-[10.5px] text-gray-300 font-mono">
                <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                <span>ЛКМ клик: аудит • Вращение 360°</span>
              </div>
            </div>
          )}
        </div>

        {/* BEST PRACTICE: Interactive 3D Zoom & Auto-Scale HUD (Bottom-Right of Canvas) */}
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

        {/* Bottom Left Dock: Material Switcher & Orbit */}
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
                {mat === 'LIQUID_CHROME' ? 'Chrome' : mat === 'HOLO_WIREFRAME' ? 'Holo' : 'Glass'}
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
      {/* PANE 2: THE FORMULA LAB INSPECTOR (Dedicated Side-by-Side Flex Pane!)     */}
      {/* ========================================================================= */}
      {isLabOpen && dockMode === 'RIGHT' && (
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="w-[335px] xl:w-[355px] h-full shrink-0 border-l border-white/10 bg-[#040714]/98 backdrop-blur-2xl flex flex-col justify-between p-3.5 z-20 font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-right-4 duration-300 overflow-y-auto"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                  <FlaskConical className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="font-bold text-white text-xs tracking-wide flex items-center gap-1.5">
                    <span>FORMULA LAB</span>
                    <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      GPU &lt; 2ms
                    </span>
                  </div>
                  <div className="text-[8px] text-gray-400">Side-by-Side Inspector</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => {
                    setDockMode('BOTTOM');
                    spatialAudio.playClick(900);
                  }}
                  className="px-1.5 py-0.5 rounded text-[8.5px] font-mono bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-300 hover:text-white transition-all cursor-pointer"
                  title="Switch to Bottom Drawer Dock"
                >
                  ⤓ Bottom
                </button>
                <button
                  onClick={() => setIsLabOpen(false)}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Inspector"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* DIRECT EDITABLE INLINE FORMULA CARD */}
            <div className="mt-2 p-2 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">ACTIVE FORMULA (CLICK &amp; TYPE):</span>
                <span className="text-[8px] text-cyan-400 font-bold">WEIERSTRASS</span>
              </div>

              {/* Inline Interactive Number Inputs inside Equation */}
              <div className="flex items-center justify-center gap-1 font-mono text-xs py-1.5 px-1 bg-white/5 rounded-lg border border-white/5 whitespace-nowrap">
                <span className="text-emerald-400 font-bold">y²</span>
                <span className="text-gray-400">=</span>
                <span className="text-cyan-400 font-bold">x³</span>
                <span className="text-gray-400">+</span>

                {/* Inline Editable a */}
                <div className="inline-flex items-center bg-amber-500/15 border border-amber-500/40 hover:border-amber-400 focus-within:border-amber-400 rounded px-1 py-0.5">
                  <input
                    type="number"
                    step="0.5"
                    value={params.a}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) handleParamChange('a', val);
                    }}
                    className="w-8 bg-transparent text-amber-300 font-bold font-mono text-center outline-none text-xs"
                    title="Click to edit coefficient a directly"
                  />
                  <span className="text-amber-400/80 text-[10px]">·x</span>
                </div>

                <span className="text-gray-400">+</span>

                {/* Inline Editable b */}
                <div className="inline-flex items-center bg-purple-500/15 border border-purple-500/40 hover:border-purple-400 focus-within:border-purple-400 rounded px-1 py-0.5">
                  <input
                    type="number"
                    step="0.5"
                    value={params.b}
                    onChange={(e) => {
                      const val = parseFloat(e.target.value);
                      if (!isNaN(val)) handleParamChange('b', val);
                    }}
                    className="w-8 bg-transparent text-purple-300 font-bold font-mono text-center outline-none text-xs"
                    title="Click to edit coefficient b directly"
                  />
                </div>

                <span className="text-gray-400 text-[10px] ml-0.5">(mod</span>
                <input
                  type="number"
                  min="1"
                  max="8"
                  value={params.p}
                  onChange={(e) => {
                    const val = parseInt(e.target.value);
                    if (!isNaN(val) && val >= 1 && val <= 8) handleParamChange('p', val);
                  }}
                  className="w-6 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300 font-bold font-mono text-center outline-none text-[10px]"
                  title="Modulus / Winding Petals p"
                />
                <span className="text-gray-400 text-[10px]">)</span>
              </div>

              {/* Discriminant Alert */}
              <div className="pt-1 border-t border-white/10 flex flex-col gap-1 text-[9px]">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Discriminant Δ = -16(4a³+27b²):</span>
                  <span className={`font-bold font-mono ${isSingular ? 'text-rose-400' : 'text-emerald-400'}`}>
                    {discriminant.toLocaleString()}
                  </span>
                </div>
                <div
                  className={`flex items-center gap-1.5 px-2 py-0.5 rounded-lg border text-[8.5px] font-bold ${
                    isSingular
                      ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse'
                      : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                  }`}
                >
                  {isSingular ? (
                    <>
                      <AlertCircle className="w-3 h-3 text-rose-400 shrink-0" />
                      <span>⚠ SINGULAR: Cusp Degeneracy (Insecure)</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>✓ NON-SINGULAR: Hard Discrete Log Group</span>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* DIRECT FORMULA WRITER (Type full formulas) */}
            <div className="mt-2 p-2 rounded-xl bg-black/50 border border-white/10 flex flex-col gap-1">
              <div className="flex items-center justify-between text-[8px] text-gray-400 uppercase tracking-wider">
                <span className="flex items-center gap-1 text-cyan-300 font-bold">
                  <Sparkles className="w-2.5 h-2.5 text-cyan-400" />
                  FORMULA STRING WRITER:
                </span>
                <span className="text-[7.5px] text-gray-400">ENTER TO APPLY</span>
              </div>

              <div className="relative flex items-center">
                <input
                  type="text"
                  value={formulaInput}
                  onChange={(e) => handleFormulaInputChange(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') handleApplyFormulaInput(formulaInput);
                  }}
                  placeholder="e.g. y^2 = x^3 - 3x + 5 or a=-2, b=4"
                  className={`w-full bg-[#030611] border rounded-lg px-2.5 py-1 font-mono text-[11px] text-white placeholder-gray-500 outline-none transition-all pr-7 ${
                    parseStatus?.success
                      ? 'border-cyan-400/50 focus:border-cyan-400 shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : parseStatus?.success === false
                        ? 'border-rose-500/50 focus:border-rose-400'
                        : 'border-white/15 focus:border-cyan-400/50'
                  }`}
                />
                <button
                  onClick={() => handleApplyFormulaInput(formulaInput)}
                  className="absolute right-1 p-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 transition-colors cursor-pointer"
                  title="Apply formula"
                >
                  <CheckCircle2 className="w-3 h-3" />
                </button>
              </div>

              {parseStatus && (
                <div
                  className={`text-[8px] font-mono px-2 py-0.5 rounded flex items-center gap-1 ${
                    parseStatus.success
                      ? 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-300 border border-rose-500/20'
                  }`}
                >
                  {parseStatus.success ? (
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-2.5 h-2.5 text-rose-400 shrink-0" />
                  )}
                  <span className="truncate">{parseStatus.message}</span>
                </div>
              )}

              {/* Template Chips */}
              <div className="flex flex-wrap gap-1 pt-0.5">
                {[
                  { label: 'secp256k1', expr: 'y^2 = x^3 + 7' },
                  { label: 'BLS12-381', expr: 'y^2 = x^3 + 4' },
                  { label: 'NIST P-256', expr: 'y^2 = x^3 - 3x + 5' },
                  { label: 'Cusp (Δ=0)', expr: 'y^2 = x^3' },
                  { label: 'Congruent', expr: 'y^2 = x^3 - x' },
                  { label: 'Trefoil', expr: 'p=2, q=3, a=0, b=5' },
                  { label: 'Soliton', expr: 'p=5, q=8, twist=1.8' }
                ].map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => {
                      setFormulaInput(chip.expr);
                      handleApplyFormulaInput(chip.expr);
                    }}
                    className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 hover:border-cyan-400/40 text-[8px] text-gray-300 hover:text-white transition-all cursor-pointer font-mono"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Blockchain Presets */}
            <div className="mt-2">
              <div className="text-[8px] text-gray-400 mb-1 uppercase tracking-wider flex items-center justify-between">
                <span>LOAD PRESET:</span>
                <span className="text-[7.5px] text-cyan-400">CLICK TO APPLY</span>
              </div>
              <div className="grid grid-cols-2 gap-1">
                {(Object.keys(CHAIN_PRESETS) as Array<Exclude<ChainKey, 'CUSTOM'>>).map((key) => {
                  const preset = CHAIN_PRESETS[key];
                  const isCurrent = selectedChain === key;
                  return (
                    <button
                      key={key}
                      onClick={() => handleSelectChain(key)}
                      className={`px-2 py-1 rounded-lg border text-left transition-all cursor-pointer ${
                        isCurrent
                          ? 'bg-cyan-500/25 border-cyan-400 text-white shadow-sm'
                          : 'bg-white/5 border-white/10 hover:bg-white/10 text-gray-300 hover:text-white'
                      }`}
                    >
                      <div className="font-bold text-[9px] truncate flex items-center justify-between">
                        <span>{preset.shortName}</span>
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preset.primaryHex }}></span>
                      </div>
                      <div className="text-[7.5px] text-gray-400 truncate">{preset.badge}</div>
                    </button>
                  );
                })}
                <button
                  onClick={() => {
                    setSelectedChain('CUSTOM');
                    setParams({ a: 0, b: 0, p: 3, q: 7, twist: 1.0, tubeRadius: 0.42 });
                    spatialAudio.playClick(600);
                  }}
                  className="col-span-2 px-2 py-0.5 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-left transition-all cursor-pointer flex items-center justify-between"
                  title="Simulate Singular Cusp Singularity (a=0, b=0)"
                >
                  <span className="text-[8px] font-bold">⚡ Simulate Cusp: a=0, b=0 (Δ=0)</span>
                  <span className="text-[7.5px] text-rose-400 font-mono">[COLLAPSE]</span>
                </button>
              </div>
            </div>

            {/* Fine-Tuning Sliders */}
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
                      onClick={() => handleStepParam('a', -0.5, -10, 10)}
                      className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                    >
                      <Minus className="w-2 h-2" />
                    </button>
                    <span className="text-amber-300 font-bold font-mono min-w-[26px] text-center">{params.a}</span>
                    <button
                      onClick={() => handleStepParam('a', 0.5, -10, 10)}
                      className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                    >
                      <Plus className="w-2 h-2" />
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="10"
                  step="0.5"
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
                      onClick={() => handleStepParam('b', -0.5, -10, 20)}
                      className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                    >
                      <Minus className="w-2 h-2" />
                    </button>
                    <span className="text-purple-300 font-bold font-mono min-w-[26px] text-center">{params.b}</span>
                    <button
                      onClick={() => handleStepParam('b', 0.5, -10, 20)}
                      className="w-3.5 h-3.5 rounded bg-white/10 hover:bg-white/20 flex items-center justify-center text-[10px] text-gray-300 hover:text-white cursor-pointer"
                    >
                      <Plus className="w-2 h-2" />
                    </button>
                  </div>
                </div>
                <input
                  type="range"
                  min="-10"
                  max="20"
                  step="0.5"
                  value={params.b}
                  onChange={(e) => handleParamChange('b', parseFloat(e.target.value))}
                  className="w-full h-1 accent-purple-400 cursor-pointer mt-1"
                />
              </div>

              {/* Sliders p & q */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9px] mb-0.5">
                    <span className="text-gray-300">Winding p:</span>
                    <span className="text-cyan-300 font-bold font-mono">{params.p}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    value={params.p}
                    onChange={(e) => handleParamChange('p', parseInt(e.target.value))}
                    className="w-full h-1 accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9px] mb-0.5">
                    <span className="text-gray-300">Winding q:</span>
                    <span className="text-cyan-300 font-bold font-mono">{params.q}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="12"
                    step="1"
                    value={params.q}
                    onChange={(e) => handleParamChange('q', parseInt(e.target.value))}
                    className="w-full h-1 accent-cyan-400 cursor-pointer"
                  />
                </div>
              </div>

              {/* Sliders twist & caliber */}
              <div className="grid grid-cols-2 gap-1">
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[9px] mb-0.5">
                    <span className="text-gray-300">Twist τ:</span>
                    <span className="text-emerald-400 font-bold font-mono">{params.twist}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.0"
                    step="0.1"
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
                    min="0.15"
                    max="0.55"
                    step="0.02"
                    value={params.tubeRadius}
                    onChange={(e) => handleParamChange('tubeRadius', parseFloat(e.target.value))}
                    className="w-full h-1 accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="pt-1.5 border-t border-white/10 text-[7.5px] text-gray-400 flex items-center justify-between">
            <span className="text-emerald-400">✓ Side-by-Side (0% Overlap)</span>
            <span className="text-cyan-400">60 FPS WebGL</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* PANE 2: BOTTOM DRAWER DOCK MODE                                          */}
      {/* ========================================================================= */}
      {isLabOpen && dockMode === 'BOTTOM' && (
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="h-[235px] w-full shrink-0 border-t border-white/10 bg-[#040714]/98 backdrop-blur-2xl flex flex-col justify-between p-3 z-20 font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <FlaskConical className="w-3.5 h-3.5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white text-xs tracking-wide">FORMULA LAB DRAWER</span>
                <span className="text-[8.5px] px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                  GPU &lt; 2ms
                </span>
                <span className="text-[9px] text-emerald-400 hidden sm:inline">• 100% Unobstructed Panoramic Viewport</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => {
                  setDockMode('RIGHT');
                  spatialAudio.playClick(900);
                }}
                className="px-2 py-0.5 rounded text-[8.5px] font-mono bg-white/5 hover:bg-white/15 border border-white/10 text-cyan-300 hover:text-white transition-all cursor-pointer"
                title="Switch to Right Sidebar Dock"
              >
                ⇥ Right Dock
              </button>
              <button
                onClick={() => setIsLabOpen(false)}
                className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Close Formula Lab"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 flex-1 overflow-hidden">
            {/* Column 1: Inline Formula */}
            <div className="flex flex-col justify-between bg-black/50 p-2 rounded-xl border border-white/10">
              <div>
                <div className="text-[8px] text-gray-400 mb-1 flex items-center justify-between">
                  <span>INLINE FORMULA (CLICK &amp; TYPE):</span>
                  <span className="text-cyan-400 font-bold">WEIERSTRASS</span>
                </div>
                <div className="flex items-center justify-center gap-1 font-mono text-xs py-1.5 bg-white/5 rounded-lg border border-white/5 whitespace-nowrap">
                  <span className="text-emerald-400 font-bold">y²</span>
                  <span>=</span>
                  <span className="text-cyan-400 font-bold">x³</span>
                  <span>+</span>
                  <div className="inline-flex items-center bg-amber-500/15 border border-amber-500/40 rounded px-1">
                    <input
                      type="number"
                      step="0.5"
                      value={params.a}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) handleParamChange('a', val);
                      }}
                      className="w-8 bg-transparent text-amber-300 font-bold text-center outline-none text-xs"
                    />
                    <span className="text-amber-400 text-[10px]">·x</span>
                  </div>
                  <span>+</span>
                  <div className="inline-flex items-center bg-purple-500/15 border border-purple-500/40 rounded px-1">
                    <input
                      type="number"
                      step="0.5"
                      value={params.b}
                      onChange={(e) => {
                        const val = parseFloat(e.target.value);
                        if (!isNaN(val)) handleParamChange('b', val);
                      }}
                      className="w-8 bg-transparent text-purple-300 font-bold text-center outline-none text-xs"
                    />
                  </div>
                  <span className="text-gray-400 text-[11px]">(mod</span>
                  <input
                    type="number"
                    min="1"
                    max="8"
                    value={params.p}
                    onChange={(e) => {
                      const val = parseInt(e.target.value);
                      if (!isNaN(val) && val >= 1 && val <= 8) handleParamChange('p', val);
                    }}
                    className="w-6 bg-cyan-500/10 border border-cyan-500/30 rounded text-cyan-300 font-bold text-center outline-none text-[10px]"
                  />
                  <span className="text-gray-400 text-[11px]">)</span>
                </div>
              </div>

              <div className="pt-1 border-t border-white/10 flex items-center justify-between text-[8.5px]">
                <span className="text-gray-400">Δ = -16(4a³+27b²):</span>
                <span
                  className={`px-2 py-0.5 rounded font-bold ${
                    isSingular
                      ? 'bg-rose-500/20 text-rose-300 border border-rose-500/40 animate-pulse'
                      : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                  }`}
                >
                  {isSingular ? '⚠ CUSP SINGULARITY (Δ=0)' : `✓ ${discriminant.toLocaleString()} NON-SINGULAR`}
                </span>
              </div>
            </div>

            {/* Column 2: Formula Writer */}
            <div className="flex flex-col justify-between bg-black/50 p-2 rounded-xl border border-white/10">
              <div>
                <div className="text-[8px] text-gray-400 mb-1 flex items-center justify-between">
                  <span className="text-cyan-300 font-bold">TYPE ANY EQUATION:</span>
                  <span className="text-[7.5px]">ENTER TO APPLY</span>
                </div>
                <div className="relative flex items-center">
                  <input
                    type="text"
                    value={formulaInput}
                    onChange={(e) => handleFormulaInputChange(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleApplyFormulaInput(formulaInput);
                    }}
                    placeholder="y^2 = x^3 - 3x + 5 or a=-2, b=4"
                    className="w-full bg-[#030611] border border-cyan-400/40 rounded-lg px-2 py-1 font-mono text-xs text-white placeholder-gray-500 outline-none pr-7"
                  />
                  <button
                    onClick={() => handleApplyFormulaInput(formulaInput)}
                    className="absolute right-1 p-0.5 rounded bg-cyan-500/20 hover:bg-cyan-500/40 text-cyan-300 cursor-pointer"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap gap-1 pt-1">
                {[
                  { label: 'secp256k1', expr: 'y^2 = x^3 + 7' },
                  { label: 'BLS12-381', expr: 'y^2 = x^3 + 4' },
                  { label: 'NIST P-256', expr: 'y^2 = x^3 - 3x + 5' },
                  { label: 'Cusp (Δ=0)', expr: 'y^2 = x^3' },
                  { label: 'Trefoil', expr: 'p=2, q=3, a=0, b=5' }
                ].map((chip) => (
                  <button
                    key={chip.label}
                    onClick={() => {
                      setFormulaInput(chip.expr);
                      handleApplyFormulaInput(chip.expr);
                    }}
                    className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-white/15 border border-white/10 text-[8px] text-gray-300 hover:text-white transition-all cursor-pointer font-mono"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Column 3: Fine-Tuning Sliders */}
            <div className="flex flex-col justify-between bg-black/50 p-2 rounded-xl border border-white/10 space-y-1">
              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[8.5px]">
                    <span className="text-gray-300">Param a:</span>
                    <span className="text-amber-300 font-bold font-mono">{params.a}</span>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="10"
                    step="0.5"
                    value={params.a}
                    onChange={(e) => handleParamChange('a', parseFloat(e.target.value))}
                    className="w-full h-1 accent-amber-400 cursor-pointer"
                  />
                </div>

                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[8.5px]">
                    <span className="text-gray-300">Param b:</span>
                    <span className="text-purple-300 font-bold font-mono">{params.b}</span>
                  </div>
                  <input
                    type="range"
                    min="-10"
                    max="20"
                    step="0.5"
                    value={params.b}
                    onChange={(e) => handleParamChange('b', parseFloat(e.target.value))}
                    className="w-full h-1 accent-purple-400 cursor-pointer"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-1.5">
                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[8.5px]">
                    <span className="text-gray-300">Winding p/q:</span>
                    <span className="text-cyan-300 font-bold font-mono">{params.p}/{params.q}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="8"
                    step="1"
                    value={params.p}
                    onChange={(e) => handleParamChange('p', parseInt(e.target.value))}
                    className="w-full h-1 accent-cyan-400 cursor-pointer"
                  />
                </div>

                <div className="bg-white/5 p-1 rounded-lg border border-white/5">
                  <div className="flex items-center justify-between text-[8.5px]">
                    <span className="text-gray-300">Twist τ:</span>
                    <span className="text-emerald-400 font-bold font-mono">{params.twist}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="3.0"
                    step="0.1"
                    value={params.twist}
                    onChange={(e) => handleParamChange('twist', parseFloat(e.target.value))}
                    className="w-full h-1 accent-emerald-400 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
