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
  Network,
  Shield,
  Plus,
  Minus
} from 'lucide-react';

export type ChainKey = 'ETHEREUM' | 'SOLANA' | 'ARBITRUM' | 'STARKNET' | 'CUSTOM';
export type MaterialType = 'LIQUID_CHROME' | 'HOLO_WIREFRAME' | 'IRIDESCENT_GLASS';
export type DockMode = 'RIGHT' | 'BOTTOM' | 'COLLAPSED';

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

export interface ParseFormulaResult {
  success: boolean;
  params?: Partial<CurveParams>;
  detectedType: 'WEIERSTRASS' | 'EDWARDS' | 'PARAMS' | 'NUMBERS' | 'UNKNOWN';
  message: string;
}

/**
 * Robust mathematical formula parser for cryptographic curves.
 * Supports:
 * - Weierstrass: y^2 = x^3 + ax + b [mod p]
 * - Edwards: -x^2 + y^2 = 1 - d*x^2*y^2
 * - Parametric assignments: a=-2, b=5, p=4, q=7
 * - Comma separated numbers: -3, 7
 */
export const parseFormulaInput = (raw: string): ParseFormulaResult => {
  const text = raw.trim().replace(/\s+/g, ' ');
  if (!text) {
    return {
      success: false,
      detectedType: 'UNKNOWN',
      message: 'Enter formula (e.g. y^2 = x^3 - 3x + 5 or a=-2, b=4)'
    };
  }

  // 1. Check Weierstrass equation: y^2 = x^3 ... or y² = x³ ...
  const weierstrassMatch = text.match(
    /^(?:y\^?2|y²)\s*=\s*(?:x\^?3|x³)(?:\s*([+-])\s*([0-9.]*)\s*\*?\s*x)?(?:\s*([+-])\s*([0-9.]+))?(?:\s*(?:mod|\%)\s*([0-9]+))?/i
  );

  if (weierstrassMatch) {
    let a = 0;
    let b = 0;

    if (weierstrassMatch[1]) {
      const sign = weierstrassMatch[1] === '-' ? -1 : 1;
      const coeffStr = weierstrassMatch[2];
      const coeff = coeffStr === '' ? 1 : parseFloat(coeffStr);
      if (!isNaN(coeff)) a = sign * coeff;
    }

    if (weierstrassMatch[3]) {
      const sign = weierstrassMatch[3] === '-' ? -1 : 1;
      const constStr = weierstrassMatch[4];
      const val = parseFloat(constStr);
      if (!isNaN(val)) b = sign * val;
    }

    let p: number | undefined;
    if (weierstrassMatch[5]) {
      const pVal = parseInt(weierstrassMatch[5]);
      if (!isNaN(pVal) && pVal > 0) {
        p = Math.min(8, Math.max(1, (pVal % 8) || 3));
      }
    }

    const disc = computeDiscriminant(a, b);
    const singularText = disc === 0 ? ' (⚠ Cusp Degeneracy)' : ' (✓ Non-Singular)';

    return {
      success: true,
      params: { a, b, ...(p ? { p } : {}) },
      detectedType: 'WEIERSTRASS',
      message: `Parsed Weierstrass: a = ${a}, b = ${b}${p ? `, p = ${p}` : ''}${singularText}`
    };
  }

  // 2. Check Edwards form: -x^2 + y^2 = 1 ... or x^2 + y^2 = 1 ...
  const edwardsMatch = text.match(
    /(?:([+-]?)\s*(?:x\^?2|x²))\s*([+-])\s*(?:y\^?2|y²)\s*=\s*1\s*([+-])\s*([0-9./]+)\s*\*?\s*(?:x\^?2\s*\*?\s*y\^?2|x²y²)/i
  );
  if (edwardsMatch) {
    const a = edwardsMatch[1] === '-' ? -1 : 1;
    let dVal = 1;
    try {
      const expr = edwardsMatch[4];
      if (expr.includes('/')) {
        const [num, den] = expr.split('/');
        dVal = parseFloat(num) / parseFloat(den);
      } else {
        dVal = parseFloat(expr);
      }
    } catch {
      dVal = 1;
    }
    const b = Number((dVal * 2).toFixed(2));
    return {
      success: true,
      params: { a, b, twist: 1.65, p: 2, q: 5 },
      detectedType: 'EDWARDS',
      message: `Parsed Edwards: a = ${a}, d ≈ ${dVal.toFixed(4)} (Ed25519 topology)`
    };
  }

  // 3. Check key-value assignments: "a=-2, b=5" or "p=4; q=7; a=1"
  const kvRegex = /([abpqr]|twist|tubeRadius)\s*[:=]\s*([+-]?[0-9.]+)/gi;
  let match: RegExpExecArray | null;
  const parsedParams: Partial<CurveParams> = {};
  let count = 0;

  while ((match = kvRegex.exec(text)) !== null) {
    const key = match[1].toLowerCase();
    const val = parseFloat(match[2]);
    if (!isNaN(val)) {
      count++;
      if (key === 'a') parsedParams.a = val;
      else if (key === 'b') parsedParams.b = val;
      else if (key === 'p') parsedParams.p = Math.min(8, Math.max(1, Math.round(val)));
      else if (key === 'q') parsedParams.q = Math.min(12, Math.max(1, Math.round(val)));
      else if (key === 'twist') parsedParams.twist = Math.min(3.0, Math.max(0, val));
      else if (key === 'r' || key === 'tuberadius') parsedParams.tubeRadius = Math.min(0.6, Math.max(0.15, val));
    }
  }

  if (count > 0) {
    return {
      success: true,
      params: parsedParams,
      detectedType: 'PARAMS',
      message: `Parsed ${count} parameters: ${Object.entries(parsedParams).map(([k, v]) => `${k}=${v}`).join(', ')}`
    };
  }

  // 4. Check two numbers: "-3, 5" or "0 7"
  const nums = text.match(/[+-]?[0-9.]+/g);
  if (nums && nums.length >= 2) {
    const a = parseFloat(nums[0]);
    const b = parseFloat(nums[1]);
    if (!isNaN(a) && !isNaN(b)) {
      return {
        success: true,
        params: { a, b },
        detectedType: 'NUMBERS',
        message: `Extracted coefficients: a = ${a}, b = ${b}`
      };
    }
  }

  return {
    success: false,
    detectedType: 'UNKNOWN',
    message: 'Could not parse formula. Example: y^2 = x^3 - 3x + 5 or a=-2, b=4'
  };
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
    icon: Cpu,
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

  // Docking mode: RIGHT sidebar, BOTTOM drawer, or COLLAPSED floating pill
  const [dockMode, setDockMode] = useState<DockMode>(() => {
    if (typeof window === 'undefined') return 'RIGHT';
    const sp = new URLSearchParams(window.location.search);
    const d = sp.get('dock')?.toUpperCase();
    if (d === 'BOTTOM') return 'BOTTOM';
    if (d === 'COLLAPSED') return 'COLLAPSED';
    return 'RIGHT';
  });
  const dockModeRef = useRef<DockMode>(dockMode);

  // Direct formula string input & live feedback state
  const [formulaInput, setFormulaInput] = useState<string>('y^2 = x^3 + 7');
  const [parseStatus, setParseStatus] = useState<ParseFormulaResult | null>(null);

  const [materialType, setMaterialType] = useState<MaterialType>('LIQUID_CHROME');
  const [isRotating, setIsRotating] = useState(true);
  const [isExploded, setIsExploded] = useState(false);
  const [tags, setTags] = useState<VerificationTag[]>([]);

  // Smooth camera & mesh transform lerp references
  const isLabOpenRef = useRef(isLabOpen);
  const isBottomInit = isLabOpen && dockMode === 'BOTTOM';
  const offsetXLerpRef = useRef(isLabOpen ? (isBottomInit ? 0 : -1.45) : 0);
  const offsetYLerpRef = useRef(isBottomInit ? 1.05 : 0);
  const scaleLerpRef = useRef(isLabOpen ? (isBottomInit ? 0.60 : 0.45) : 1.0);

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

  // Sync refs with state
  useEffect(() => {
    isLabOpenRef.current = isLabOpen;
  }, [isLabOpen]);

  useEffect(() => {
    dockModeRef.current = dockMode;
  }, [dockMode]);

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
      opacity: 0.8
    });
    const hexMesh = new THREE.Mesh(hexGeo, hexMat);
    hexMesh.rotation.x = Math.PI / 2;
    effectGroup.add(hexMesh);

    // 5. Radial cryptographic data particle burst
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

  // Reusable materials creator
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

  // Build or rebuild 3D cryptographic curve geometry
  const buildCurveMesh = (
    scene: THREE.Scene,
    p: CurveParams,
    color1: number,
    color2: number,
    matType: MaterialType
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
    // Preserve current lerped transforms
    group.position.set(offsetXLerpRef.current, offsetYLerpRef.current, 0);
    group.scale.setScalar(scaleLerpRef.current);

    const curve = new BlockchainCryptographicCurve(p.a, p.b, p.p, p.q, p.twist, 1.65);
    const mats = createMaterials(color1, color2, matType);

    // LAYER 1: Solid Main Manifold Shell
    const shellGroup = new THREE.Group();
    const tubularSegments = 260;
    const radialSegments = 24;
    const geom = new THREE.TubeGeometry(curve, tubularSegments, p.tubeRadius, radialSegments, true);
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
  };

  // Main Three.js Scene Setup
  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera with FOV 45
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);
    cameraRef.current = camera;

    // 3. Renderer with high performance & pixel ratio
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

    // 4. OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.85;
    controls.zoomSpeed = 0.9;
    controls.enablePan = false;
    controls.minDistance = 3.5;
    controls.maxDistance = 14;
    controls.target.set(offsetXLerpRef.current, offsetYLerpRef.current, 0);
    controlsRef.current = controls;

    // 5. Dynamic Cryptographic Lighting Grid
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

    // 6. Ambient Data Starfield Particles
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

    // 7. Orbital Gyroscopic Rings
    const ringsGroup = new THREE.Group();
    ringsGroup.position.set(offsetXLerpRef.current, offsetYLerpRef.current, 0);
    ringsGroup.scale.setScalar(scaleLerpRef.current);
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

    // 8. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    // 9. Animation Loop with Dynamic 3D Auto-Framing
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // ZERO-OVERLAP 3D AUTO-FRAMING:
      // In RIGHT dock mode: target center of open 370px window is x = -1.45, scale = 0.45.
      // This guarantees 60px of completely empty space on both sides of the curve!
      // In BOTTOM dock mode: target center of open 430px window is y = +1.05, scale = 0.60.
      let targetOffsetX = 0.0;
      let targetOffsetY = 0.0;
      let targetScale = 1.0;

      if (isLabOpenRef.current && dockModeRef.current !== 'COLLAPSED') {
        if (dockModeRef.current === 'RIGHT') {
          targetOffsetX = -1.45;
          targetOffsetY = 0.0;
          targetScale = 0.45;
        } else if (dockModeRef.current === 'BOTTOM') {
          targetOffsetX = 0.0;
          targetOffsetY = 1.05;
          targetScale = 0.60;
        }
      }

      offsetXLerpRef.current = THREE.MathUtils.lerp(offsetXLerpRef.current, targetOffsetX, 0.08);
      offsetYLerpRef.current = THREE.MathUtils.lerp(offsetYLerpRef.current, targetOffsetY, 0.08);
      scaleLerpRef.current = THREE.MathUtils.lerp(scaleLerpRef.current, targetScale, 0.08);

      const currentOffsetX = offsetXLerpRef.current;
      const currentOffsetY = offsetYLerpRef.current;
      const currentScale = scaleLerpRef.current;

      if (meshGroupRef.current) {
        meshGroupRef.current.position.set(currentOffsetX, currentOffsetY, 0);
        meshGroupRef.current.scale.setScalar(currentScale);
      }
      if (ringsRef.current) {
        ringsRef.current.position.set(currentOffsetX, currentOffsetY, 0);
        ringsRef.current.scale.setScalar(currentScale);
      }
      if (controlsRef.current) {
        controlsRef.current.target.set(currentOffsetX, currentOffsetY, 0);
      }

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

          // Animate particle velocity and dispersion
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

      // Exploded View radial decomposition
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
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, []);

  // Update geometry when curve parameters or material changes
  useEffect(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    buildCurveMesh(
      scene,
      params,
      activeChainMeta.primaryColor,
      activeChainMeta.secondaryColor,
      materialType
    );

    // Update lights
    if (pointLight1Ref.current) {
      pointLight1Ref.current.color.setHex(activeChainMeta.primaryColor);
    }
    if (pointLight2Ref.current) {
      pointLight2Ref.current.color.setHex(activeChainMeta.secondaryColor);
    }
    if (centerGlowLightRef.current) {
      centerGlowLightRef.current.color.setHex(activeChainMeta.primaryColor);
    }
    if (ringMesh1Ref.current) {
      (ringMesh1Ref.current.material as THREE.MeshBasicMaterial).color.setHex(activeChainMeta.primaryColor);
    }
    if (ringMesh2Ref.current) {
      (ringMesh2Ref.current.material as THREE.MeshBasicMaterial).color.setHex(activeChainMeta.secondaryColor);
    }
  }, [params, materialType, selectedChain]);

  // OrbitControls auto-rotation sync
  useEffect(() => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = isRotating;
      controlsRef.current.autoRotateSpeed = 1.25;
    }
  }, [isRotating]);

  // Click Attestation via Raycasting
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
      const centerTarget = new THREE.Vector3(offsetXLerpRef.current, offsetYLerpRef.current, 0);
      const plane = new THREE.Plane();
      plane.setFromNormalAndCoplanarPoint(
        camera.getWorldDirection(new THREE.Vector3()).negate(),
        centerTarget
      );
      const target = new THREE.Vector3();
      raycasterRef.current.ray.intersectPlane(plane, target);
      hitPoint = target || centerTarget;
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

  // Switch blockchain curve preset
  const handleSelectChain = (key: ChainKey) => {
    setSelectedChain(key);
    if (key !== 'CUSTOM') {
      const preset = CHAIN_PRESETS[key];
      setParams({ ...preset.params });
      if (cameraRef.current) {
        const centerPoint = new THREE.Vector3(offsetXLerpRef.current, offsetYLerpRef.current, 0);
        const normal = cameraRef.current.position.clone().normalize();
        spawnVerificationAtPoint(centerPoint, normal, preset.primaryColor);
      }
    }
    spatialAudio.playVerificationPing(1.15);
  };

  // Adjust parameters
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

  // Handle direct formula string typing
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

  const handleSelectMaterial = (type: MaterialType) => {
    setMaterialType(type);
    spatialAudio.playClick(1050);
  };

  // Pointer tracking
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

  const handleResetCamera = () => {
    if (controlsRef.current && cameraRef.current) {
      controlsRef.current.reset();
      cameraRef.current.position.set(0, 0, 7.5);
      controlsRef.current.target.set(offsetXLerpRef.current, offsetYLerpRef.current, 0);
      cameraRef.current.lookAt(offsetXLerpRef.current, offsetYLerpRef.current, 0);
      spatialAudio.playClick(900);
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[560px] lg:h-[660px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#090416] via-[#04020a] to-[#020106] shadow-2xl group select-none"
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

      {/* 3D Canvas Viewport */}
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

      {/* Top Floating HUD */}
      <div
        className={`absolute top-3 left-3 z-20 pointer-events-none flex flex-col gap-1.5 transition-all duration-300 ${
          isLabOpen && dockMode === 'RIGHT' ? 'right-3 sm:right-[330px]' : 'right-3'
        }`}
      >
        {/* Row 1: Primary Controls */}
        <div className="flex items-center justify-between gap-2">
          {/* Left: Chain Badge & Formula Lab Toggle */}
          <div className="flex items-center gap-2 pointer-events-auto">
            <div className="flex items-center gap-2 bg-black/80 backdrop-blur-xl border border-white/15 px-3 py-1 rounded-full text-xs text-white shadow-lg">
              <span
                className="w-2.5 h-2.5 rounded-full animate-pulse shrink-0"
                style={{ backgroundColor: activeChainMeta.primaryHex }}
              ></span>
              <span className="font-bold tracking-wider font-mono text-xs truncate max-w-[120px] sm:max-w-none">
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
                  if (dockMode === 'COLLAPSED') setDockMode('RIGHT');
                  spatialAudio.playClick(1100);
                }}
                className="flex items-center gap-1.5 font-mono px-3 py-1 rounded-full text-xs font-bold transition-all border cursor-pointer bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 hover:text-white border-cyan-500/40 hover:border-cyan-300 shadow-lg shadow-cyan-500/10"
                title="Open Live Formula Lab"
              >
                <FlaskConical className="w-3.5 h-3.5" />
                <span>FORMULA_LAB</span>
              </button>
            )}
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
              onClick={handleResetCamera}
              className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-mono px-2.5 py-1 rounded-full text-xs transition-colors border border-white/15 cursor-pointer"
              title="Reset Camera Angle"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span className="hidden md:inline">RESET</span>
            </button>
          </div>
        </div>

        {/* Row 2: Active Equation Pill & Interaction Helper */}
        <div className="flex flex-wrap items-center gap-2 pointer-events-auto">
          <div className="flex items-center gap-2 bg-black/75 backdrop-blur-xl border border-white/15 px-2.5 py-1 rounded-xl text-xs font-mono text-gray-300 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
            <span className="font-bold text-white tracking-wide text-[11px] truncate max-w-[170px] sm:max-w-none">
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
      </div>

      {/* Exploded View Floating Layer Annotations */}
      {isExploded && (
        <div
          className={`absolute top-24 z-20 pointer-events-none hidden sm:flex flex-col gap-1.5 font-mono text-[10px] transition-all duration-300 ${
            isLabOpen && dockMode === 'RIGHT' ? 'right-[330px]' : 'right-4'
          }`}
        >
          <div className="bg-black/85 backdrop-blur-md border border-cyan-400/50 px-3 py-1.5 rounded-xl text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-500/10">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>LAYER 01: MANIFOLD_SHELL [+42% RADIAL]</span>
          </div>
          <div className="bg-black/85 backdrop-blur-md border border-emerald-400/50 px-3 py-1.5 rounded-xl text-emerald-300 flex items-center gap-2 shadow-lg shadow-emerald-500/10">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LAYER 02: CONSENSUS_NODES [+82% DISPERSION]</span>
          </div>
          <div className="bg-black/85 backdrop-blur-md border border-purple-400/50 px-3 py-1.5 rounded-xl text-purple-300 flex items-center gap-2 shadow-lg shadow-purple-500/10">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>LAYER 03: LASER_SPINE_CORE [1.8x EMISSIVE]</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 1: DOCKED RIGHT SIDEBAR (3D curve is auto-framed left with zero overlap!) */}
      {/* ========================================================================= */}
      {isLabOpen && dockMode === 'RIGHT' && (
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="absolute top-2.5 bottom-2.5 right-2.5 w-full sm:w-[315px] max-h-[calc(100%-20px)] overflow-y-auto z-40 bg-[#050814]/94 backdrop-blur-2xl border border-cyan-400/35 p-3 rounded-2xl shadow-[-16px_0_40px_rgba(0,0,0,0.9)] font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-right-6 duration-300 flex flex-col justify-between"
        >
          <div>
            {/* Header with Dock Mode Controls */}
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
                  <div className="text-[8px] text-gray-400">Live Parametric Inspector</div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Switch to Bottom Dock */}
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
                {/* Minimize Button */}
                <button
                  onClick={() => {
                    setDockMode('COLLAPSED');
                    spatialAudio.playClick(850);
                  }}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Minimize Formula Lab"
                >
                  <Minus className="w-3 h-3" />
                </button>
                {/* Close Button */}
                <button
                  onClick={() => setIsLabOpen(false)}
                  className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                  title="Close Inspector"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* DIRECT EDITABLE FORMULA DISPLAY (Users can type numbers right into formula!) */}
            <div className="mt-2 p-2 rounded-xl bg-black/60 border border-white/10 flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[8px] text-gray-400 uppercase tracking-wider">ACTIVE FORMULA (CLICK &amp; TYPE):</span>
                <span className="text-[8px] text-cyan-400 font-bold">WEIERSTRASS</span>
              </div>

              {/* Inline Interactive Number Inputs inside Equation */}
              <div className="flex items-center justify-center gap-1 font-mono text-xs py-1 px-1 bg-white/5 rounded-lg border border-white/5 whitespace-nowrap">
                <span className="text-emerald-400 font-bold">y²</span>
                <span className="text-gray-400">=</span>
                <span className="text-cyan-400 font-bold">x³</span>
                <span className="text-gray-400">+</span>

                {/* Inline Editable Param a */}
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

                {/* Inline Editable Param b */}
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

              {/* Discriminant & Invariant Alert */}
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

            {/* DIRECT FORMULA WRITER (Type full formulas like y^2 = x^3 - 3x + 5) */}
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

              {/* Quick Formula Template Chips */}
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

            {/* Quick Chain Presets Grid */}
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

            {/* Parametric Sliders with Micro-Steppers */}
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
            <span className="text-emerald-400">✓ 3D Auto-Framed (Zero Overlap)</span>
            <span className="text-cyan-400">60 FPS WebGL</span>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* MODE 2: DOCKED BOTTOM DRAWER (Curve elevates to upper 65% with zero overlap!) */}
      {/* ========================================================================= */}
      {isLabOpen && dockMode === 'BOTTOM' && (
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
          className="absolute bottom-2.5 left-2.5 right-2.5 h-[230px] z-40 bg-[#050814]/95 backdrop-blur-2xl border border-cyan-400/40 p-2.5 rounded-2xl shadow-[0_-16px_40px_rgba(0,0,0,0.9)] font-mono text-xs text-gray-200 animate-in fade-in slide-in-from-bottom-6 duration-300 flex flex-col justify-between"
        >
          {/* Drawer Header */}
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
                <span className="text-[9px] text-emerald-400 hidden sm:inline">• Curve Centered &amp; Elevated (100% Unobstructed)</span>
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
                onClick={() => {
                  setDockMode('COLLAPSED');
                  spatialAudio.playClick(850);
                }}
                className="p-1 rounded-lg bg-white/5 hover:bg-white/15 text-gray-400 hover:text-white transition-colors cursor-pointer"
                title="Minimize Formula Lab"
              >
                <Minus className="w-3 h-3" />
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

          {/* 3-Column Drawer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 pt-1 flex-1 overflow-hidden">
            {/* Column 1: Interactive Equation Card & Discriminant */}
            <div className="flex flex-col justify-between bg-black/50 p-2 rounded-xl border border-white/10">
              <div>
                <div className="text-[8px] text-gray-400 mb-1 flex items-center justify-between">
                  <span>INLINE FORMULA (CLICK &amp; TYPE):</span>
                  <span className="text-cyan-400 font-bold">WEIERSTRASS</span>
                </div>
                <div className="flex items-center justify-center gap-1 font-mono text-xs py-1.5 bg-white/5 rounded-lg border border-white/5 flex-wrap">
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

            {/* Column 2: Formula Writer & Quick Chips */}
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

              {/* Template Chips */}
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

      {/* ========================================================================= */}
      {/* MODE 3: COLLAPSED MINIMIZED PILL */}
      {/* ========================================================================= */}
      {isLabOpen && dockMode === 'COLLAPSED' && (
        <button
          onClick={() => {
            setDockMode('RIGHT');
            spatialAudio.playClick(1050);
          }}
          className="absolute bottom-3 right-3 z-30 flex items-center gap-2 bg-[#050814]/90 backdrop-blur-xl border border-cyan-400/50 px-3 py-1.5 rounded-xl text-xs font-mono text-cyan-300 shadow-xl hover:bg-cyan-500/20 cursor-pointer animate-in fade-in"
        >
          <FlaskConical className="w-3.5 h-3.5 text-cyan-400 animate-bounce" />
          <span>FORMULA LAB ({activeChainMeta.formula})</span>
          <span className="text-[10px] text-gray-400 pl-1 border-l border-white/20">Expand ⇥</span>
        </button>
      )}

      {/* Bottom Interactive Dock (When Lab is NOT in Bottom mode) */}
      {dockMode !== 'BOTTOM' && (
        isLabOpen ? (
          /* Compact Floating Dock in Bottom-Left when Right sidebar is open */
          <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 bg-[#050814]/90 backdrop-blur-2xl border border-white/15 p-1.5 px-2.5 rounded-2xl shadow-xl font-mono text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
            <div className="flex items-center gap-1.5 text-gray-400 text-[11px] pr-2 border-r border-white/10">
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: activeChainMeta.primaryHex }} />
              <span className="text-white font-bold">{activeChainMeta.shortName}</span>
            </div>

            {/* Material Switcher */}
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

            {/* Orbit Auto-rotation toggle */}
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
        ) : (
          /* Full Expanded Dock when Formula Lab is closed */
          <div className="absolute bottom-3 left-3 right-3 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5 bg-black/85 backdrop-blur-2xl border border-white/15 p-2.5 rounded-2xl transition-all duration-300">
            {/* Blockchain Cryptographic Curve Switcher */}
            <div className="flex flex-wrap items-center gap-1 text-xs font-mono">
              <span className="text-white/50 text-[10px] mr-1 hidden sm:inline">CHAIN_CURVE:</span>
              {(Object.keys(CHAIN_PRESETS) as Array<Exclude<ChainKey, 'CUSTOM'>>).map((key) => {
                const item = CHAIN_PRESETS[key];
                const Icon = item.icon;
                const isActive = selectedChain === key;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectChain(item.id)}
                    className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
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
                    <Icon className="w-3 h-3 shrink-0" />
                    <span>{item.shortName}</span>
                  </button>
                );
              })}

              {/* Custom Lab Tab */}
              <button
                onClick={() => {
                  setIsLabOpen(true);
                  if (dockMode === 'COLLAPSED') setDockMode('RIGHT');
                  spatialAudio.playClick(1050);
                }}
                className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                  selectedChain === 'CUSTOM'
                    ? 'bg-gradient-to-r from-amber-400 to-rose-400 text-black font-bold shadow-lg shadow-amber-500/20 scale-[1.02]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <FlaskConical className="w-3 h-3 shrink-0 text-amber-400" />
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
                className={`p-1.5 rounded-xl border transition-colors cursor-pointer ${
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
        )
      )}
    </div>
  );
};
