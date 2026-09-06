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
  Cpu,
  Binary,
  Network,
  Shield
} from 'lucide-react';

export type ChainKey = 'ETHEREUM' | 'SOLANA' | 'ARBITRUM' | 'STARKNET' | 'CUSTOM';
export type MaterialType = 'LIQUID_CHROME' | 'HOLO_WIREFRAME' | 'IRIDESCENT_GLASS';

export interface CurveParams {
  a: number; // Weierstrass parameter a (-10 .. 10)
  b: number; // Weierstrass parameter b (-10 .. 20)
  p: number; // Torus winding / petals p (1 .. 8)
  q: number; // Torus winding / loops q (1 .. 12)
  twist: number; // Manifold twist / phase (0.0 .. 3.0)
  tubeRadius: number; // Tube caliber / radius (0.15 .. 0.55)
}

export interface ChainPreset {
  id: ChainKey;
  name: string;
  shortName: string;
  badge: string;
  curveType: string;
  formula: string;
  details: string;
  zkAttestation: string;
  params: CurveParams;
  primaryColor: number;
  primaryHex: string;
  secondaryColor: number;
  secondaryHex: string;
  icon: React.ComponentType<{ className?: string }>;
  auditLabels: string[];
}

export const computeDiscriminant = (a: number, b: number): number => {
  return -16 * (4 * Math.pow(a, 3) + 27 * Math.pow(b, 2));
};

export class BlockchainCryptographicCurve extends THREE.Curve<THREE.Vector3> {
  a: number;
  b: number;
  p: number;
  q: number;
  twist: number;
  scale: number;

  constructor(a: number, b: number, p: number, q: number, twist: number, scale = 1.65) {
    super();
    this.a = a;
    this.b = b;
    this.p = p;
    this.q = q;
    this.twist = twist;
    this.scale = scale;
  }

  getPoint(t: number, optionalTarget = new THREE.Vector3()): THREE.Vector3 {
    // Exact periodicity over [0, 1] using integer windings
    const u = t * Math.PI * 2 * this.p;
    const v = t * Math.PI * 2 * this.q;

    // Cryptographic non-linear harmonic resonance
    // Parameter a modulates meridian perturbation (Weierstrass x term)
    // Parameter b modulates toroidal radius expansion (Weierstrass constant term)
    const weierstrassMod = Math.sin(u * 2) * (this.a * 0.032) + Math.cos(v) * (this.b * 0.024);
    const twistWarp = Math.sin(u) * Math.cos(v) * (this.twist * 0.22);

    const r = this.scale * (1.0 + 0.38 * Math.cos(v) + weierstrassMod);
    const x = r * Math.cos(u) - twistWarp;
    const y = r * Math.sin(u) + (0.34 + 0.06 * Math.cos(u * 2)) * Math.sin(v * (1 + this.twist * 0.12));
    const z = this.scale * 0.72 * Math.sin(v) + Math.sin(u) * (this.a * 0.045);

    return optionalTarget.set(x, y, z);
  }
}

export const CHAIN_PRESETS: Record<Exclude<ChainKey, 'CUSTOM'>, ChainPreset> = {
  ETHEREUM: {
    id: 'ETHEREUM',
    name: 'Ethereum (EVM)',
    shortName: 'Ethereum',
    badge: 'secp256k1 Koblitz',
    curveType: 'Weierstrass Elliptic Curve',
    formula: 'y² = x³ + 7 mod p',
    details: 'secp256k1 Koblitz curve (a=0, b=7). Governs all EVM ECDSA signatures, Ethereum state roots, and account addresses.',
    zkAttestation: 'ECDSA Invariant: Non-Singular Δ = -21,168',
    params: {
      a: 0,
      b: 7,
      p: 3,
      q: 7,
      twist: 1.0,
      tubeRadius: 0.42
    },
    primaryColor: 0x00ffa3,
    primaryHex: '#00ffa3',
    secondaryColor: 0x00e5ff,
    secondaryHex: '#00e5ff',
    icon: Orbit,
    auditLabels: [
      'SECP256K1_ECDSA: PASS',
      'STATE_ROOT_SMT: ATTESTED',
      'EVM_BYTECODE: VERIFIED',
      'KECCAK256_HASH: SECURE',
      'NONCE_INVARIANT: VALID'
    ]
  },
  SOLANA: {
    id: 'SOLANA',
    name: 'Solana (SVM)',
    shortName: 'Solana',
    badge: 'Ed25519 Edwards',
    curveType: 'Twisted Edwards Curve',
    formula: '-x² + y² = 1 - (121665/121666)x²y²',
    details: 'Twisted Edwards curve Ed25519 with complete addition law. Powers 65,000+ TPS parallel execution & EdDSA in Solana Sealevel SVM.',
    zkAttestation: 'SVM Pipeline: High-Throughput EdDSA Verified',
    params: {
      a: -1,
      b: 2,
      p: 2,
      q: 5,
      twist: 1.65,
      tubeRadius: 0.38
    },
    primaryColor: 0x14f195,
    primaryHex: '#14f195',
    secondaryColor: 0x9945ff,
    secondaryHex: '#9945ff',
    icon: Binary,
    auditLabels: [
      'ED25519_SCHNORR: PASS',
      'SEALEVEL_TX: ATTESTED',
      'POH_TICK_VERIFIED: OK',
      'BFP_PROGRAM_LOCK: SAFE',
      'SVM_PARALLEL: CONFIRMED'
    ]
  },
  ARBITRUM: {
    id: 'ARBITRUM',
    name: 'Arbitrum (Nitro)',
    shortName: 'Arbitrum',
    badge: 'BLS12-381 KZG',
    curveType: 'Pairing-Friendly BLS Curve',
    formula: 'y² = x³ + 4 mod p',
    details: 'Pairing-friendly Barreto-Lynn-Scott curve with embedding degree 12. Powers Arbitrum Nitro fraud proofs & EIP-4844 KZG commitments.',
    zkAttestation: 'Bilinear Pairing e(P,Q) ∈ 𝔾_T | KZG Root: OK',
    params: {
      a: 0,
      b: 4,
      p: 4,
      q: 5,
      twist: 0.90,
      tubeRadius: 0.36
    },
    primaryColor: 0x28a0f0,
    primaryHex: '#28a0f0',
    secondaryColor: 0x00ffa3,
    secondaryHex: '#00ffa3',
    icon: Shield,
    auditLabels: [
      'BLS12_381_PAIRING: PASS',
      'KZG_COMMITMENT: OK',
      'EIP4844_BLOB: ATTESTED',
      'NITRO_WAVM: VERIFIED',
      'FRAUD_PROOF_TREE: OK'
    ]
  },
  STARKNET: {
    id: 'STARKNET',
    name: 'Starknet (ZK)',
    shortName: 'Starknet',
    badge: 'STARK-252 Cairo',
    curveType: 'Algebraic STARK Field Curve',
    formula: 'y² = x³ + x + 5 mod p',
    details: 'Starknet STARK-252 Prime Field curve over 252-bit field. Powers Cairo VM algebraic execution traces & recursive STARK validity proofs.',
    zkAttestation: 'Cairo Execution Trace: FRI Verified',
    params: {
      a: 1,
      b: 5,
      p: 3,
      q: 4,
      twist: 1.35,
      tubeRadius: 0.40
    },
    primaryColor: 0xff6b4a,
    primaryHex: '#ff6b4a',
    secondaryColor: 0xa855f7,
    secondaryHex: '#a855f7',
    icon: Network,
    auditLabels: [
      'CAIRO_AIR_TRACE: PASS',
      'FRI_LOW_DEGREE: VERIFIED',
      'STARK_VALIDITY: ATTESTED',
      'PEDERSEN_HASH: VALID',
      'RECURSIVE_PROOF: OK'
    ]
  }
};

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
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Initialize state with support for URL query params (deep-linking)
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

  // Raycasting references
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseVecRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // Mathematical discriminant calculation
  const discriminant = computeDiscriminant(params.a, params.b);
  const isSingular = discriminant === 0;

  // Active chain metadata
  const activeChainMeta = selectedChain !== 'CUSTOM'
    ? CHAIN_PRESETS[selectedChain]
    : {
        id: 'CUSTOM' as ChainKey,
        name: 'Custom Topology Lab',
        shortName: 'Formula Lab',
        badge: `p=${params.p}, q=${params.q} Manifold`,
        curveType: 'Custom Weierstrass Elliptic Curve',
        formula: `y² = x³ ${params.a === 0 ? '' : params.a > 0 ? `+ ${params.a}x` : `- ${Math.abs(params.a)}x`} ${params.b === 0 ? '' : params.b > 0 ? `+ ${params.b}` : `- ${Math.abs(params.b)}`} mod p`,
        details: 'User-configured parametric algebraic geometry. Real-time GPU re-parameterization with live non-singularity assessment.',
        zkAttestation: isSingular ? '⚠ Singular Curve: Cusp Degeneracy' : `✓ Non-Singular: Δ = ${discriminant.toLocaleString()}`,
        params,
        primaryColor: isSingular ? 0xf43f5e : 0x00ffa3,
        primaryHex: isSingular ? '#f43f5e' : '#00ffa3',
        secondaryColor: 0x00e5ff,
        secondaryHex: '#00e5ff',
        icon: Cpu,
        auditLabels: isSingular
          ? ['⚠ SINGULAR_CUSP: DEGENERATE', '⚠ GROUP_COLLAPSE: INSECURE', '⚠ NON_PRIME_ORDER: FAIL']
          : ['TOPOLOGY_INVARIANT: PASS', 'SMOOTH_MANIFOLD: OK', 'ABELIAN_GROUP: VALID', 'KZG_POLYNOMIAL: ATTESTED']
      };

  // Helper to spawn 3D cryptographic verification effect at specific point & normal
  const spawnVerificationAtPoint = (point: THREE.Vector3, normal: THREE.Vector3, accentColorHex: number) => {
    const scene = sceneRef.current;
    if (!scene) return;

    const effectGroup = new THREE.Group();
    effectGroup.position.copy(point);

    // Align effect orientation with surface normal
    const up = new THREE.Vector3(0, 1, 0);
    const quaternion = new THREE.Quaternion().setFromUnitVectors(up, normal);
    effectGroup.quaternion.copy(quaternion);

    // 1. High-intensity point light flash
    const flashLight = new THREE.PointLight(accentColorHex, 85, 14);
    flashLight.position.set(0, 0.08, 0);
    effectGroup.add(flashLight);

    // 2. Concentric Verification Ring 1 (Outer)
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

    // 3. Concentric Verification Ring 2 (Inner high-speed pulse)
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

    // 4. Hexagonal Cryptographic Target Reticle
    const hexGeo = new THREE.RingGeometry(0.12, 0.14, 6);
    const hexMat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const hex = new THREE.Mesh(hexGeo, hexMat);
    hex.rotation.x = Math.PI / 2;
    effectGroup.add(hex);

    // 5. Proof Particle Dispersal Field
    const particleCount = 28;
    const pGeo = new THREE.BufferGeometry();
    const pPositions = new Float32Array(particleCount * 3);
    const velocities: THREE.Vector3[] = [];

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = 0;
      pPositions[i * 3 + 1] = 0.04;
      pPositions[i * 3 + 2] = 0;

      const angle = Math.random() * Math.PI * 2;
      const speed = 1.4 + Math.random() * 2.8;
      const normalSpread = 0.4 + Math.random() * 1.8;

      velocities.push(
        new THREE.Vector3(
          Math.cos(angle) * speed,
          normalSpread,
          Math.sin(angle) * speed
        )
      );
    }

    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    const pMat = new THREE.PointsMaterial({
      size: 0.055,
      color: accentColorHex,
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
      hexReticle: hex,
      particles,
      particleVelocities: velocities,
      progress: 0,
      duration: 0.75
    });
  };

  // Initialize Three.js scene, camera, lighting, OrbitControls and render loop
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
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

    // 2. OrbitControls (Free 360° Drag & Zoom Rotation)
    const controls = new OrbitControls(camera, canvas);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.autoRotate = isRotating;
    controls.autoRotateSpeed = 0.9;
    controls.minDistance = 3.2;
    controls.maxDistance = 14;
    controls.enableZoom = true;
    controls.enablePan = false;
    controls.rotateSpeed = 0.85;

    controlsRef.current = controls;

    // 3. Multi-point Cinematic Crypto Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(activeChainMeta.primaryColor, 55, 60);
    pointLight1.position.set(6, 6, 6);
    scene.add(pointLight1);
    pointLight1Ref.current = pointLight1;

    const pointLight2 = new THREE.PointLight(activeChainMeta.secondaryColor, 45, 60);
    pointLight2.position.set(-6, -5, 5);
    scene.add(pointLight2);
    pointLight2Ref.current = pointLight2;

    const pointLight3 = new THREE.PointLight(0xa855f7, 40, 60);
    pointLight3.position.set(0, 7, -5);
    scene.add(pointLight3);

    // Center glow light
    const centerGlowLight = new THREE.PointLight(activeChainMeta.primaryColor, 20, 15);
    centerGlowLight.position.set(0, 0, 0);
    scene.add(centerGlowLight);
    centerGlowLightRef.current = centerGlowLight;

    // 4. Central Mesh Group
    const meshGroup = new THREE.Group();
    meshGroupRef.current = meshGroup;
    scene.add(meshGroup);

    // 5. Starfield & Kinetic Particles
    const particleCount = 2000;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorChoices = [
      new THREE.Color(0x00ffa3),
      new THREE.Color(0x00e5ff),
      new THREE.Color(0xa855f7),
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

    // 6. Orbital Gyroscopic Rings
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

    // 7. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // 8. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Update OrbitControls
      controls.update();

      // Subtle internal rotational oscillation
      if (meshGroupRef.current) {
        meshGroupRef.current.rotation.y += delta * 0.08;
      }

      // Rotate orbital rings
      if (ringsRef.current) {
        ringsRef.current.rotation.x = elapsed * 0.14;
        ringsRef.current.rotation.y = -elapsed * 0.18;
      }

      // Rotate particle field
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.03;
        particlesRef.current.rotation.z = elapsed * 0.015;
      }

      // Update and animate active cryptographic verifications
      const activeList = activeVerificationsRef.current;
      for (let i = activeList.length - 1; i >= 0; i--) {
        const item = activeList[i];
        item.progress += delta / item.duration;

        if (item.progress >= 1.0) {
          // Cleanup finished effect
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
          const t = item.progress;

          // Decay light flash
          item.light.intensity = 75 * Math.max(0, 1 - t * 1.6);

          // Expand concentric rings
          item.outerRing.scale.setScalar(0.2 + t * 4.6);
          (item.outerRing.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - t) * 0.9);

          item.innerRing.scale.setScalar(0.1 + t * 3.0);
          (item.innerRing.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - t) * 0.95);

          // Rotate and scale hexagonal target reticle
          item.hexReticle.rotation.z += delta * 1.5;
          item.hexReticle.scale.setScalar(0.7 + t * 2.2);
          (item.hexReticle.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - t * 1.3) * 0.85);

          // Disperse proof particles
          const posAttr = item.particles.geometry.attributes.position as THREE.BufferAttribute;
          for (let pIdx = 0; pIdx < item.particleVelocities.length; pIdx++) {
            const v = item.particleVelocities[pIdx];
            posAttr.setX(pIdx, posAttr.getX(pIdx) + v.x * delta);
            posAttr.setY(pIdx, posAttr.getY(pIdx) + v.y * delta);
            posAttr.setZ(pIdx, posAttr.getZ(pIdx) + v.z * delta);
          }
          posAttr.needsUpdate = true;
          (item.particles.material as THREE.PointsMaterial).opacity = Math.max(0, (1 - t) * 0.95);
        }
      }

      // Smooth Exploded View Layer Radial Expansion
      const targetLerp = isExplodedRef.current ? 1.0 : 0.0;
      explodeLerpRef.current = THREE.MathUtils.lerp(explodeLerpRef.current, targetLerp, 0.08);
      const ep = explodeLerpRef.current;

      // Concentric Radial Expansion & X-Ray Opacity Modulation
      if (shellLayerRef.current) {
        const shellScale = 1.0 + ep * 0.42;
        shellLayerRef.current.scale.setScalar(shellScale);
        shellLayerRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
            if (mat && mat.opacity !== undefined) {
              mat.transparent = true;
              mat.opacity = THREE.MathUtils.lerp(0.95, 0.28, ep);
            }
          }
        });
      }

      if (coreLayerRef.current) {
        const coreScale = 1.0 - ep * 0.18;
        coreLayerRef.current.scale.setScalar(coreScale);
        coreLayerRef.current.traverse((child) => {
          if ((child as THREE.Mesh).isMesh && (child as THREE.Mesh).material) {
            const mat = (child as THREE.Mesh).material as THREE.MeshStandardMaterial;
            if (mat && mat.emissiveIntensity !== undefined) {
              mat.emissiveIntensity = THREE.MathUtils.lerp(0.45, 1.85, ep);
            }
          }
        });
      }

      if (nodesLayerRef.current) {
        const nodesScale = 1.0 + ep * 0.82;
        nodesLayerRef.current.scale.setScalar(nodesScale);
      }

      if (ringsRef.current && ringsRef.current.children.length >= 2) {
        ringsRef.current.scale.setScalar(1.0 + ep * 0.32);
        ringsRef.current.children[0].position.z = ep * 1.8;
        ringsRef.current.children[1].position.z = -ep * 1.8;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      controls.dispose();
      renderer.dispose();
    };
  }, [isRotating]);

  // Update auto-rotate in controls when state changes
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isRotating;
    }
  }, [isRotating]);

  // Re-build central geometry & materials whenever params, chain, or materialType change
  useEffect(() => {
    const meshGroup = meshGroupRef.current;
    if (!meshGroup) return;

    // Clear previous elements & free WebGL buffers
    while (meshGroup.children.length > 0) {
      const child = meshGroup.children[0] as THREE.Group;
      child.traverse((obj) => {
        if ((obj as THREE.Mesh).geometry) {
          (obj as THREE.Mesh).geometry.dispose();
        }
        if ((obj as THREE.Mesh).material) {
          const mat = (obj as THREE.Mesh).material;
          if (Array.isArray(mat)) mat.forEach((m) => m.dispose());
          else mat.dispose();
        }
      });
      meshGroup.remove(child);
    }

    // Exploded View sub-layers
    const shellGroup = new THREE.Group();
    const coreGroup = new THREE.Group();
    const nodesGroup = new THREE.Group();

    shellLayerRef.current = shellGroup;
    coreLayerRef.current = coreGroup;
    nodesLayerRef.current = nodesGroup;

    meshGroup.add(shellGroup);
    meshGroup.add(coreGroup);
    meshGroup.add(nodesGroup);

    // Update dynamic scene lights & orbital rings to match the active cryptographic curve
    const primaryCol = activeChainMeta.primaryColor;
    const secondaryCol = activeChainMeta.secondaryColor;

    if (pointLight1Ref.current) pointLight1Ref.current.color.setHex(primaryCol);
    if (pointLight2Ref.current) pointLight2Ref.current.color.setHex(secondaryCol);
    if (centerGlowLightRef.current) centerGlowLightRef.current.color.setHex(primaryCol);
    if (ringMesh1Ref.current) (ringMesh1Ref.current.material as THREE.MeshBasicMaterial).color.setHex(primaryCol);
    if (ringMesh2Ref.current) (ringMesh2Ref.current.material as THREE.MeshBasicMaterial).color.setHex(secondaryCol);

    // Material generator based on materialType
    const getMaterialPair = (accentColorHex: number) => {
      let mainMat: THREE.Material;
      let wireMat: THREE.Material;

      switch (materialType) {
        case 'LIQUID_CHROME':
          mainMat = new THREE.MeshStandardMaterial({
            color: 0x0f172a,
            roughness: 0.08,
            metalness: 0.95,
            emissive: 0x032115,
            emissiveIntensity: 0.45,
            transparent: true,
            opacity: 0.95
          });
          wireMat = new THREE.MeshBasicMaterial({
            color: accentColorHex,
            wireframe: true,
            transparent: true,
            opacity: 0.55
          });
          break;
        case 'HOLO_WIREFRAME':
          mainMat = new THREE.MeshBasicMaterial({
            color: 0x020a12,
            wireframe: true,
            transparent: true,
            opacity: 0.25
          });
          wireMat = new THREE.MeshBasicMaterial({
            color: accentColorHex,
            wireframe: true,
            transparent: true,
            opacity: 0.9
          });
          break;
        case 'IRIDESCENT_GLASS':
          mainMat = new THREE.MeshStandardMaterial({
            color: 0x311042,
            roughness: 0.04,
            metalness: 0.6,
            emissive: 0x4a154b,
            emissiveIntensity: 0.55,
            transparent: true,
            opacity: 0.88
          });
          wireMat = new THREE.MeshBasicMaterial({
            color: secondaryCol,
            wireframe: true,
            transparent: true,
            opacity: 0.65
          });
          break;
      }
      return { mainMat, wireMat };
    };

    // Helper: Add glowing cryptographic validator node points along geometry
    const addCryptoNodes = (geo: THREE.BufferGeometry, nodeColor: number, count: number = 22) => {
      const posAttr = geo.attributes.position;
      if (!posAttr) return;

      const nodeGroup = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.048, 12, 12);
      const nodeMat = new THREE.MeshBasicMaterial({ color: nodeColor });

      const stride = Math.max(1, Math.floor(posAttr.count / count));
      for (let i = 0; i < posAttr.count; i += stride) {
        const x = posAttr.getX(i);
        const y = posAttr.getY(i);
        const z = posAttr.getZ(i);

        const node = new THREE.Mesh(nodeGeo, nodeMat);
        node.position.set(x, y, z);
        nodeGroup.add(node);
      }
      nodesGroup.add(nodeGroup);
    };

    // Build Parametric Blockchain Cryptographic Manifold
    const { mainMat, wireMat } = getMaterialPair(primaryCol);

    const curve = new BlockchainCryptographicCurve(
      params.a,
      params.b,
      params.p,
      params.q,
      params.twist,
      1.65
    );

    // Primary High-Resolution Manifold Tube
    const mainGeo = new THREE.TubeGeometry(curve, 220, params.tubeRadius, 26, true);
    const wireGeo = new THREE.TubeGeometry(curve, 110, params.tubeRadius * 1.018, 16, true);

    const mainMesh = new THREE.Mesh(mainGeo, mainMat);
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    shellGroup.add(mainMesh);
    shellGroup.add(wireMesh);

    // Inner Glowing High-Emissive Laser Core
    const laserGeo = new THREE.TubeGeometry(curve, 110, 0.08, 12, true);
    const laserMat = new THREE.MeshBasicMaterial({ color: primaryCol });
    const laserMesh = new THREE.Mesh(laserGeo, laserMat);
    coreGroup.add(laserMesh);

    // Add Cryptographic Validation Nodes
    addCryptoNodes(mainGeo, primaryCol, 22);

  }, [params, materialType, selectedChain]);

  // Perform Raycast at clicked screen coordinates and spawn localized cryptographic verification
  const triggerVerificationClick = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    const camera = cameraRef.current;
    const meshGroup = meshGroupRef.current;
    if (!canvas || !camera || !meshGroup) return;

    const rect = canvas.getBoundingClientRect();
    const relX = clientX - rect.left;
    const relY = clientY - rect.top;

    // Normalized Device Coordinates (-1 to +1)
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
      // Raycast onto plane through origin facing camera
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

    // Play pristine crystalline harmonic chime (cryptographic seal)
    spatialAudio.playVerificationPing(0.95 + Math.random() * 0.12);

    // Spawn localized 3D cryptographic reticle & particle attestation
    spawnVerificationAtPoint(hitPoint, hitNormal, activeChainMeta.primaryColor);

    // Add floating HUD verification tag in DOM at the click location
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

  // Handler for switching blockchain curves
  const handleSelectChain = (key: ChainKey) => {
    setSelectedChain(key);
    if (key !== 'CUSTOM') {
      const preset = CHAIN_PRESETS[key];
      setParams({ ...preset.params });
      if (cameraRef.current) {
        const centerPoint = new THREE.Vector3(0, 0, 0);
        const normal = cameraRef.current.position.clone().normalize();
        spawnVerificationAtPoint(centerPoint, normal, preset.primaryColor);
      }
    }
    spatialAudio.playVerificationPing(1.15);
  };

  // Handler for Formula Lab slider adjustments
  const handleParamChange = (param: keyof CurveParams, val: number) => {
    setSelectedChain('CUSTOM');
    setParams((prev) => ({
      ...prev,
      [param]: val
    }));
  };

  const handleSelectMaterial = (type: MaterialType) => {
    setMaterialType(type);
    spatialAudio.playClick(1050);
  };

  // Pointer tracking to differentiate single left-click from drag/rotation
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
    if (!pointerStartRef.current || e.button !== 0) return;

    const dx = e.clientX - pointerStartRef.current.x;
    const dy = e.clientY - pointerStartRef.current.y;
    const dist = Math.hypot(dx, dy);
    const elapsed = performance.now() - pointerStartRef.current.time;

    const clientX = e.clientX;
    const clientY = e.clientY;
    pointerStartRef.current = null;

    // Distinguish stationary tap (< 16px micro-movement, < 650ms duration) from 3D camera drag
    if (dist < 16 && elapsed < 650) {
      triggerVerificationClick(clientX, clientY);
    }
  };

  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      cameraRef.current.lookAt(0, 0, 0);
      spatialAudio.playClick(900);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] lg:h-[640px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#090416] via-[#04020a] to-[#020106] shadow-2xl group select-none"
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

      {/* 3D Canvas Viewport with Free Orbit Controls and Click-vs-Drag differentiation */}
      <canvas
        ref={canvasRef}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* Floating Invariant Attestation Badges spawned at exact click coordinates */}
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

      {/* Structured Floating Spatial HUD Header (2 Clean Tiers, zero overlap) */}
      <div className="absolute top-4 left-4 right-4 z-20 pointer-events-none flex flex-col gap-2">
        {/* Tier 1: Primary Controls */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Chain Badge & Formula Lab Toggle */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/15 px-3.5 py-1.5 rounded-full text-xs text-white shadow-lg">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse"
                style={{ backgroundColor: activeChainMeta.primaryHex }}
              ></span>
              <span className="font-bold tracking-wider font-mono">{activeChainMeta.name}</span>
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="font-mono text-[11px] font-semibold hidden sm:inline" style={{ color: activeChainMeta.primaryHex }}>
                {activeChainMeta.badge}
              </span>
            </div>

            <button
              onClick={() => {
                setIsLabOpen((prev) => !prev);
                spatialAudio.playClick(1100);
              }}
              className={`flex items-center gap-1.5 font-mono px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isLabOpen
                  ? 'bg-cyan-500 text-black border-cyan-400 shadow-xl shadow-cyan-500/30 scale-[1.03]'
                  : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border-cyan-500/40 hover:border-cyan-300 shadow-lg shadow-cyan-500/10'
              }`}
              title="Toggle Live Formula Lab"
            >
              <FlaskConical className={`w-3.5 h-3.5 ${isLabOpen ? 'animate-bounce' : ''}`} />
              <span>FORMULA_LAB</span>
            </button>
          </div>

          {/* Right: Exploded View & Reset */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <button
              onClick={() => {
                const next = !isExploded;
                setIsExploded(next);
                isExplodedRef.current = next;
                spatialAudio.playExplode(next);
              }}
              className={`flex items-center gap-1.5 font-mono px-3.5 py-1.5 rounded-full text-xs font-bold transition-all border cursor-pointer ${
                isExploded
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black border-emerald-400 shadow-xl shadow-emerald-500/30 scale-[1.03]'
                  : 'bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 hover:text-white border-emerald-500/40 hover:border-emerald-400 shadow-lg shadow-emerald-500/10'
              }`}
              title="Toggle Exploded Layer Decomposition"
            >
              <Layers className={`w-3.5 h-3.5 ${isExploded ? 'animate-pulse' : ''}`} />
              <span>{isExploded ? 'COLLAPSE' : 'EXPLODED'}</span>
            </button>

            <button
              onClick={handleResetCamera}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-mono px-3 py-1.5 rounded-full text-xs transition-colors border border-white/15 cursor-pointer"
              title="Reset Camera Angle"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">RESET</span>
            </button>
          </div>
        </div>

        {/* Tier 2: Active Equation Pill & Interaction Helper */}
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          {/* Active Formula Pill */}
          <div className="flex items-center gap-2 bg-black/75 backdrop-blur-xl border border-white/15 px-3 py-1 rounded-xl text-xs font-mono text-gray-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-bold text-white tracking-wide text-[11px]">{activeChainMeta.formula}</span>
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

          {/* Helper Hint */}
          <div className="hidden lg:flex items-center gap-1.5 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-xl text-[11px] text-gray-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>ЛКМ клик: аудит узла • Вращение 360° • Зум</span>
          </div>
        </div>
      </div>

      {/* Exploded View Floating Layer Annotations */}
      {isExploded && (
        <div className="absolute top-24 right-4 z-20 pointer-events-none hidden sm:flex flex-col gap-1.5 font-mono text-[10px]">
          <div className="bg-black/85 backdrop-blur-md border border-cyan-400/50 px-3 py-1.5 rounded-xl text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-500/10 animate-in fade-in slide-in-from-right-3 duration-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>LAYER 01: MANIFOLD_SHELL [+42% RADIAL]</span>
          </div>
          <div className="bg-black/85 backdrop-blur-md border border-emerald-400/50 px-3 py-1.5 rounded-xl text-emerald-300 flex items-center gap-2 shadow-lg shadow-emerald-500/10 animate-in fade-in slide-in-from-right-3 duration-300 delay-75">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LAYER 02: CONSENSUS_NODES [+82% DISPERSION]</span>
          </div>
          <div className="bg-black/85 backdrop-blur-md border border-purple-400/50 px-3 py-1.5 rounded-xl text-purple-300 flex items-center gap-2 shadow-lg shadow-purple-500/10 animate-in fade-in slide-in-from-right-3 duration-300 delay-150">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>LAYER 03: LASER_SPINE_CORE [1.8x EMISSIVE]</span>
          </div>
        </div>
      )}

      {/* Interactive Formula Lab Cybernetic Drawer (Draggable parameter sliders + real-time discriminant) */}
      {isLabOpen && (
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-16 left-4 right-4 sm:right-auto sm:w-[480px] max-h-[82%] overflow-y-auto z-40 bg-[#060a14]/95 backdrop-blur-2xl border border-cyan-400/40 p-3.5 rounded-2xl shadow-[0_0_50px_rgba(0,0,0,0.85)] font-mono text-xs text-gray-200 animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                <FlaskConical className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="font-bold text-white text-xs sm:text-sm tracking-wide flex items-center gap-2">
                  FORMULA LAB // CRYPTO CURVES
                </div>
                <div className="text-[9px] text-cyan-400/80">Real-Time Parametric GPU Morphing (&lt; 2ms)</div>
              </div>
            </div>
            <button
              onClick={() => setIsLabOpen(false)}
              className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
              title="Close Formula Lab"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Live Equation Display Banner */}
          <div className="mt-2 p-2 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className="text-[9px] text-gray-400 uppercase tracking-wider">ACTIVE ELLIPTIC EQUATION:</span>
              <span className="text-[9px] text-cyan-400 font-bold">WEIERSTRASS / EDWARDS</span>
            </div>
            <div className="text-sm sm:text-base font-bold text-white tracking-wide py-1 text-center bg-white/5 rounded-lg border border-white/5">
              <span className="text-emerald-400">y²</span> = <span className="text-cyan-400">x³</span>
              {params.a !== 0 && (
                <> {params.a > 0 ? '+ ' : '- '}
                  <span className="text-amber-300 font-extrabold">{Math.abs(params.a) === 1 ? '' : Math.abs(params.a)}</span>
                  <span className="text-cyan-400">x</span>
                </>
              )}
              {params.b !== 0 && (
                <> {params.b > 0 ? '+ ' : '- '}
                  <span className="text-purple-300 font-extrabold">{Math.abs(params.b)}</span>
                </>
              )}
              <span className="text-gray-400 text-xs font-normal"> (mod p)</span>
            </div>

            {/* Discriminant & Invariant Alert */}
            <div className="mt-0.5 pt-1.5 border-t border-white/10 flex flex-col gap-1 text-[10px]">
              <div className="flex items-center justify-between">
                <span className="text-gray-400">Discriminant Δ = -16(4a³ + 27b²):</span>
                <span className={`font-bold ${isSingular ? 'text-rose-400' : 'text-emerald-400'}`}>
                  {discriminant.toLocaleString()}
                </span>
              </div>
              <div
                className={`flex items-center gap-1.5 px-2 py-1 rounded-lg border text-[9px] sm:text-[10px] font-bold ${
                  isSingular
                    ? 'bg-rose-500/20 border-rose-500/40 text-rose-300 animate-pulse'
                    : 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300'
                }`}
              >
                {isSingular ? (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                    <span>⚠ SINGULAR CURVE: Cusp / Self-Intersection (Discrete Log Insecure)</span>
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>✓ NON-SINGULAR: Smooth Abelian Group (Hard ECDSA / Pairing Invariant)</span>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Quick Presets Grid */}
          <div className="mt-2">
            <div className="text-[9px] text-gray-400 mb-1 uppercase tracking-wider flex items-center justify-between">
              <span>LOAD BLOCKCHAIN PRESET:</span>
              <span className="text-[9px] text-white/40">1-CLICK</span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
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
                    <div className="font-bold text-[10px] truncate flex items-center justify-between">
                      <span>{preset.shortName}</span>
                      <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: preset.primaryHex }}></span>
                    </div>
                    <div className="text-[8.5px] text-gray-400 truncate">{preset.badge}</div>
                  </button>
                );
              })}
              {/* Singularity test preset button */}
              <button
                onClick={() => {
                  setSelectedChain('CUSTOM');
                  setParams({ a: 0, b: 0, p: 3, q: 7, twist: 1.0, tubeRadius: 0.42 });
                  spatialAudio.playClick(600);
                }}
                className="col-span-2 px-2 py-1 rounded-lg border border-rose-500/30 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 text-left transition-all cursor-pointer flex items-center justify-between"
                title="Simulate Singular Cusp Singularity (a=0, b=0)"
              >
                <span className="text-[9.5px] font-bold">⚡ Simulate Cusp: y² = x³ (a=0, b=0, Δ=0)</span>
                <span className="text-[8.5px] text-rose-400 font-mono">[COLLAPSE]</span>
              </button>
            </div>
          </div>

          {/* Live Sliders Controls */}
          <div className="mt-2.5 space-y-2">
            <div className="text-[9px] text-gray-400 uppercase tracking-wider flex items-center justify-between border-b border-white/10 pb-1">
              <span>PARAMETRIC CONTROLS:</span>
              <span className="text-[9px] text-cyan-400 flex items-center gap-1">
                <SlidersHorizontal className="w-3 h-3" />
                DRAG TO MORPH
              </span>
            </div>

            {/* Slider: Weierstrass a */}
            <div className="bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-gray-300">Parameter a (Meridian Harmonics):</span>
                <span className="text-amber-300 font-bold font-mono">{params.a}</span>
              </div>
              <input
                type="range"
                min="-10"
                max="10"
                step="0.5"
                value={params.a}
                onChange={(e) => handleParamChange('a', parseFloat(e.target.value))}
                className="w-full accent-amber-400 cursor-pointer"
              />
            </div>

            {/* Slider: Weierstrass b */}
            <div className="bg-white/5 p-2 rounded-xl border border-white/5">
              <div className="flex items-center justify-between text-[11px] mb-1">
                <span className="text-gray-300">Parameter b (Toroidal Breathing):</span>
                <span className="text-purple-300 font-bold font-mono">{params.b}</span>
              </div>
              <input
                type="range"
                min="-10"
                max="20"
                step="0.5"
                value={params.b}
                onChange={(e) => handleParamChange('b', parseFloat(e.target.value))}
                className="w-full accent-purple-400 cursor-pointer"
              />
            </div>

            {/* Grid for p and q */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-gray-300">Windings p (Petals):</span>
                  <span className="text-cyan-400 font-bold font-mono">{params.p}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="8"
                  step="1"
                  value={params.p}
                  onChange={(e) => handleParamChange('p', parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>

              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-gray-300">Windings q (Loops):</span>
                  <span className="text-cyan-400 font-bold font-mono">{params.q}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={params.q}
                  onChange={(e) => handleParamChange('q', parseInt(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
              </div>
            </div>

            {/* Grid for Twist and Tube Radius */}
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-gray-300">Twist τ (Phase):</span>
                  <span className="text-emerald-400 font-bold font-mono">{params.twist}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="3.0"
                  step="0.1"
                  value={params.twist}
                  onChange={(e) => handleParamChange('twist', parseFloat(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>

              <div className="bg-white/5 p-2 rounded-xl border border-white/5">
                <div className="flex items-center justify-between text-[11px] mb-1">
                  <span className="text-gray-300">Caliber r (Thickness):</span>
                  <span className="text-emerald-400 font-bold font-mono">{params.tubeRadius}</span>
                </div>
                <input
                  type="range"
                  min="0.15"
                  max="0.55"
                  step="0.02"
                  value={params.tubeRadius}
                  onChange={(e) => handleParamChange('tubeRadius', parseFloat(e.target.value))}
                  className="w-full accent-emerald-400 cursor-pointer"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Interactive Control Center: Blockchain Curves & Materials */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-black/85 backdrop-blur-2xl border border-white/15 p-3 rounded-2xl">
        {/* Blockchain Cryptographic Curve Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-white/50 text-[11px] mr-1 hidden sm:inline">BLOCKCHAIN_CURVE:</span>
          {(Object.keys(CHAIN_PRESETS) as Array<Exclude<ChainKey, 'CUSTOM'>>).map((key) => {
            const item = CHAIN_PRESETS[key];
            const Icon = item.icon;
            const isActive = selectedChain === key;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectChain(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                  isActive
                    ? 'text-black font-bold shadow-lg scale-[1.02]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
                style={{
                  background: isActive
                    ? `linear-gradient(135deg, ${item.primaryHex}, ${item.secondaryHex})`
                    : undefined
                }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.shortName}</span>
              </button>
            );
          })}

          {/* Custom Lab Tab */}
          <button
            onClick={() => {
              setIsLabOpen(true);
              spatialAudio.playClick(1050);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
              selectedChain === 'CUSTOM'
                ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-black font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
            }`}
          >
            <FlaskConical className="w-3.5 h-3.5 shrink-0 text-amber-400" />
            <span>Custom Lab 🧪</span>
          </button>
        </div>

        {/* Material & Spin Controls */}
        <div className="flex items-center gap-2 self-end md:self-auto text-xs font-mono">
          <div className="flex items-center bg-white/5 p-1 rounded-xl border border-white/10">
            {(['LIQUID_CHROME', 'HOLO_WIREFRAME', 'IRIDESCENT_GLASS'] as MaterialType[]).map((mat) => (
              <button
                key={mat}
                onClick={() => handleSelectMaterial(mat)}
                className={`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-[11px] ${
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
            className={`p-2 rounded-xl border transition-colors cursor-pointer ${
              isRotating
                ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300'
                : 'bg-white/5 border-white/10 text-gray-400 hover:text-white'
            }`}
            title="Toggle Auto-Rotation"
          >
            <Orbit className={`w-4 h-4 ${isRotating ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
