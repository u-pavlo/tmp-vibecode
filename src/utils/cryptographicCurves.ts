import * as THREE from 'three';
import { Orbit, Cpu, Shield, Network } from 'lucide-react';
import React from 'react';

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
 * - Comma separated numbers: -3, 5
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

      a = Math.min(15, Math.max(-15, a));
      b = Math.min(25, Math.max(-15, b));

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
        message: `Parsed Edwards: a = ${a}, d ≈ ${dVal.toFixed(4)}`
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
        if (key === 'a') parsedParams.a = Math.min(15, Math.max(-15, val));
        else if (key === 'b') parsedParams.b = Math.min(25, Math.max(-15, val));
        else if (key === 'p') parsedParams.p = Math.min(8, Math.max(1, Math.round(val)));
        else if (key === 'q') parsedParams.q = Math.min(8, Math.max(1, Math.round(val)));
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
      let a = parseFloat(nums[0]);
      let b = parseFloat(nums[1]);
      if (!isNaN(a) && !isNaN(b)) {
        a = Math.min(15, Math.max(-15, a));
        b = Math.min(25, Math.max(-15, b));
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
      // When p === q, add a subtle phase dispersion so the manifold doesn't collapse into a single overlapping strand
      const effectiveQ = (this.p === this.q) ? (this.q + 0.02) : this.q;
      const v = t * Math.PI * 2 * effectiveQ;

      // Cryptographic non-linear harmonic resonance
      // Smooth hyperbolic tangent saturation prevents extreme negative or positive parameters from inverting or pinching the manifold
      const rawMod = Math.sin(u * 2) * (this.a * 0.032) + Math.cos(v) * (this.b * 0.024);
      const weierstrassMod = Math.tanh(rawMod * 0.45) * 0.60;
      const twistWarp = Math.sin(u) * Math.cos(v) * (Math.tanh(this.twist * 0.3) * 0.35);

      // Guaranteed strictly positive major radius: prevents inverted negative radius and self-intersecting loops
      const baseR = 1.0 + 0.38 * Math.cos(v) + weierstrassMod;
      const r = this.scale * Math.max(0.30, baseR);

      const x = r * Math.cos(u) - twistWarp;
      const y = r * Math.sin(u) + (0.34 + 0.06 * Math.cos(u * 2)) * Math.sin(v * (1 + this.twist * 0.12));
      const z = this.scale * 0.72 * Math.sin(v) + Math.tanh(this.a * 0.045) * 0.75 * Math.sin(u);

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
