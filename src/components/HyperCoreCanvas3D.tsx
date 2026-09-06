import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { spatialAudio } from '../utils/spatialAudio';
import { 
  Orbit, 
  RefreshCw, 
  Sparkles, 
  Shield, 
  Binary, 
  Network, 
  CheckCircle2, 
  ShieldCheck,
  Layers
} from 'lucide-react';

type GeometryType = 'ELLIPTIC_CURVE' | 'ZK_TREFOIL' | 'MERKLE_CORE' | 'CROSS_CHAIN_HELIX';
type MaterialType = 'LIQUID_CHROME' | 'HOLO_WIREFRAME' | 'IRIDESCENT_GLASS';

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
}

const AUDIT_LABELS = [
  'INVARIANT_CHECK: PASS',
  'ZK_PROOF: VALIDATED',
  'STATE_ROOT: ATTESTED',
  'KZG_COMMITMENT: OK',
  'BYTECODE: NO_VULN',
  'ORACLE_SYNC: CONFIRMED'
];

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

  const [geometryType, setGeometryType] = useState<GeometryType>('ELLIPTIC_CURVE');
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

  // Active verification effects pool
  const activeVerificationsRef = useRef<ActiveVerification[]>([]);

  // Raycasting references
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseVecRef = useRef<THREE.Vector2>(new THREE.Vector2());

  // Shapes metadata for crypto HUD
  const shapesMeta: Record<GeometryType, { name: string; tag: string; spec: string; color: number }> = {
    ELLIPTIC_CURVE: {
      name: 'ELLIPTIC CURVE',
      tag: 'ECC secp256k1',
      spec: 'y² = x³ + 7 mod p • Continuous Braided Topological Manifold',
      color: 0x00ffa3
    },
    ZK_TREFOIL: {
      name: 'ZK-SNARK TREFOIL',
      tag: 'Recursive Proofs',
      spec: 'Dual-Intertwined Trefoil Knot • Universal KZG Polynomial Embedding',
      color: 0x00e5ff
    },
    MERKLE_CORE: {
      name: 'MERKLE CONSENSUS CORE',
      tag: 'BFT Consensus',
      spec: 'Stellated Validator Node Lattice & State Root Geometry',
      color: 0xa855f7
    },
    CROSS_CHAIN_HELIX: {
      name: 'CROSS-CHAIN DUAL HELIX',
      tag: 'Atomic Relayer',
      spec: 'Non-colliding Interleaved Torus Manifold T(4, 5) • State Bridging',
      color: 0x00ffa3
    }
  };

  const currentMeta = shapesMeta[geometryType];

  // Helper to spawn 3D cryptographic verification effect at specific point & normal
  const spawnVerificationAtPoint = useCallback((
    point: THREE.Vector3,
    normal: THREE.Vector3,
    accentColorHex: number
  ) => {
    const scene = sceneRef.current;
    if (!scene) return;

    // 1. Group at hitPoint oriented along surface normal
    const group = new THREE.Group();
    group.position.copy(point);

    const quat = new THREE.Quaternion();
    quat.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal.clone().normalize());
    group.quaternion.copy(quat);

    // 2. High-intensity localized flash light at the impact point
    const pointLight = new THREE.PointLight(accentColorHex, 75, 9);
    pointLight.position.set(0, 0, 0.2);
    group.add(pointLight);

    // 3. Outer Concentric Invariant Ring
    const outerGeo = new THREE.RingGeometry(0.08, 0.14, 64);
    const outerMat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const outerRing = new THREE.Mesh(outerGeo, outerMat);
    group.add(outerRing);

    // 4. Inner High-Speed Verification Ring
    const innerGeo = new THREE.RingGeometry(0.025, 0.055, 48);
    const innerMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const innerRing = new THREE.Mesh(innerGeo, innerMat);
    group.add(innerRing);

    // 5. Cryptographic Hexagonal Target Reticle
    const hexGeo = new THREE.RingGeometry(0.18, 0.21, 6);
    const hexMat = new THREE.MeshBasicMaterial({
      color: accentColorHex,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const hexReticle = new THREE.Mesh(hexGeo, hexMat);
    group.add(hexReticle);

    // 6. Dispersing Attestation Proof Particles (Hemispherical burst along normal)
    const particleCount = 38;
    const pPositions = new Float32Array(particleCount * 3);
    const pColors = new Float32Array(particleCount * 3);
    const particleVelocities: THREE.Vector3[] = [];

    const baseColor = new THREE.Color(accentColorHex);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      pPositions[i * 3] = 0;
      pPositions[i * 3 + 1] = 0;
      pPositions[i * 3 + 2] = 0.05;

      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * (Math.PI / 3);
      const speed = 1.3 + Math.random() * 2.6;

      const vx = Math.sin(phi) * Math.cos(theta) * speed;
      const vy = Math.sin(phi) * Math.sin(theta) * speed;
      const vz = Math.cos(phi) * speed;
      particleVelocities.push(new THREE.Vector3(vx, vy, vz));

      const col = Math.random() > 0.4 ? baseColor : whiteColor;
      pColors[i * 3] = col.r;
      pColors[i * 3 + 1] = col.g;
      pColors[i * 3 + 2] = col.b;
    }

    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
    pGeo.setAttribute('color', new THREE.BufferAttribute(pColors, 3));

    const pMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 1.0,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(pGeo, pMat);
    group.add(particles);

    scene.add(group);

    // Push into active animation pool
    activeVerificationsRef.current.push({
      group,
      light: pointLight,
      outerRing,
      innerRing,
      hexReticle,
      particles,
      particleVelocities,
      progress: 0,
      duration: 0.8
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;

    // 1. Scene setup
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

    const pointLight1 = new THREE.PointLight(0x00ffa3, 55, 60);
    pointLight1.position.set(6, 6, 6);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00e5ff, 45, 60);
    pointLight2.position.set(-6, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa855f7, 40, 60);
    pointLight3.position.set(0, 7, -5);
    scene.add(pointLight3);

    // Center glow light
    const centerGlowLight = new THREE.PointLight(0x00ffa3, 20, 15);
    centerGlowLight.position.set(0, 0, 0);
    scene.add(centerGlowLight);

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
    const ringMat1 = new THREE.MeshBasicMaterial({ color: 0x00ffa3, transparent: true, opacity: 0.35 });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    ringsGroup.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(ringRadius * 1.15, 0.012, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({ color: 0x00e5ff, transparent: true, opacity: 0.3 });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    ringsGroup.add(ring2);

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
    let clock = new THREE.Clock();

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
            v.multiplyScalar(0.95); // Drag damping
          }
          posAttr.needsUpdate = true;
          (item.particles.material as THREE.PointsMaterial).opacity = Math.max(0, (1 - t) * 0.9);
        }
      }

      // Update Exploded View layer decomposition
      const targetExplode = isExplodedRef.current ? 1.0 : 0.0;
      explodeLerpRef.current = THREE.MathUtils.lerp(explodeLerpRef.current, targetExplode, delta * 3.8);
      const ep = explodeLerpRef.current;

      if (shellLayerRef.current) {
        shellLayerRef.current.scale.setScalar(1.0 + ep * 0.42);
      }
      if (coreLayerRef.current) {
        coreLayerRef.current.scale.setScalar(1.0 - ep * 0.18);
        coreLayerRef.current.position.z = ep * 0.4;
      }
      if (nodesLayerRef.current) {
        nodesLayerRef.current.scale.setScalar(1.0 + ep * 0.82);
      }
      if (ringsRef.current && ringsRef.current.children.length >= 2) {
        ringsRef.current.children[0].position.z = ep * 2.2;
        ringsRef.current.children[1].position.z = -ep * 2.2;
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

  // Re-build central geometry & materials whenever state changes
  useEffect(() => {
    const meshGroup = meshGroupRef.current;
    if (!meshGroup) return;

    // Clear previous elements
    while (meshGroup.children.length > 0) {
      meshGroup.remove(meshGroup.children[0]);
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
            emissiveIntensity: 0.45
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
            color: 0x00e5ff,
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
            emissiveIntensity: 0.55
          });
          wireMat = new THREE.MeshBasicMaterial({
            color: 0xa855f7,
            wireframe: true,
            transparent: true,
            opacity: 0.65
          });
          break;
      }
      return { mainMat, wireMat };
    };

    // Helper: Add glowing cryptographic validator node points along geometry
    const addCryptoNodes = (geo: THREE.BufferGeometry, nodeColor: number, count: number = 18) => {
      const posAttr = geo.attributes.position;
      if (!posAttr) return;

      const nodeGroup = new THREE.Group();
      const nodeGeo = new THREE.SphereGeometry(0.045, 12, 12);
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

    // 1. SHAPE 1: ELLIPTIC_CURVE (The signature Elastic Curve)
    if (geometryType === 'ELLIPTIC_CURVE') {
      const { mainMat, wireMat } = getMaterialPair(0x00ffa3);
      // Primary Torus Knot T(3, 7) - dense, organic, resilient braided knot
      const mainGeo = new THREE.TorusKnotGeometry(1.65, 0.44, 240, 36, 3, 7);
      const wireGeo = new THREE.TorusKnotGeometry(1.66, 0.45, 120, 24, 3, 7);

      const mainMesh = new THREE.Mesh(mainGeo, mainMat);
      const wireMesh = new THREE.Mesh(wireGeo, wireMat);
      shellGroup.add(mainMesh);
      shellGroup.add(wireMesh);

      // Inner glowing laser core spline
      const laserGeo = new THREE.TorusKnotGeometry(1.65, 0.08, 120, 16, 3, 7);
      const laserMat = new THREE.MeshBasicMaterial({ color: 0x00ffa3 });
      const laserMesh = new THREE.Mesh(laserGeo, laserMat);
      coreGroup.add(laserMesh);

      // Add cryptographic validation nodes
      addCryptoNodes(mainGeo, 0x00ffa3, 20);
    }

    // 2. SHAPE 2: ZK_TREFOIL (Nested Multi-Loop Zero-Knowledge Manifold)
    else if (geometryType === 'ZK_TREFOIL') {
      const { mainMat, wireMat } = getMaterialPair(0x00e5ff);

      // Outer Trefoil Knot T(2, 3) with flowing tube
      const outerGeo = new THREE.TorusKnotGeometry(1.85, 0.38, 220, 32, 2, 3);
      const outerWire = new THREE.TorusKnotGeometry(1.86, 0.39, 100, 20, 2, 3);
      const outerMesh = new THREE.Mesh(outerGeo, mainMat);
      const outerWireMesh = new THREE.Mesh(outerWire, wireMat);
      shellGroup.add(outerMesh);
      shellGroup.add(outerWireMesh);

      // Nested Intertwined Inner Trefoil Knot T(3, 2) rotating orthogonally
      const innerGeo = new THREE.TorusKnotGeometry(1.2, 0.22, 180, 24, 3, 2);
      const innerMat = new THREE.MeshStandardMaterial({
        color: 0x002233,
        roughness: 0.1,
        metalness: 0.9,
        emissive: 0x00e5ff,
        emissiveIntensity: 0.55
      });
      const innerMesh = new THREE.Mesh(innerGeo, innerMat);
      innerMesh.rotation.x = Math.PI / 2;
      coreGroup.add(innerMesh);

      addCryptoNodes(outerGeo, 0x00e5ff, 24);
    }

    // 3. SHAPE 3: MERKLE_CORE (Nested Stellated Cryptographic Consensus Engine)
    else if (geometryType === 'MERKLE_CORE') {
      const { mainMat, wireMat } = getMaterialPair(0xa855f7);

      // Outer Geodesic Lattice Cage
      const outerGeo = new THREE.IcosahedronGeometry(2.1, 1);
      const outerWire = new THREE.IcosahedronGeometry(2.12, 1);
      const outerMesh = new THREE.Mesh(outerGeo, mainMat);
      const outerWireMesh = new THREE.Mesh(outerWire, wireMat);
      shellGroup.add(outerMesh);
      shellGroup.add(outerWireMesh);

      // Mid Dodecahedron Shell
      const midGeo = new THREE.DodecahedronGeometry(1.4, 0);
      const midMat = new THREE.MeshStandardMaterial({
        color: 0x1a052b,
        roughness: 0.1,
        metalness: 0.95,
        emissive: 0x9333ea,
        emissiveIntensity: 0.4
      });
      const midMesh = new THREE.Mesh(midGeo, midMat);
      shellGroup.add(midMesh);

      // Central Pulsating State Crystal (Octahedron)
      const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
      const coreMat = new THREE.MeshBasicMaterial({ color: 0x00ffa3 });
      const coreMesh = new THREE.Mesh(coreGeo, coreMat);
      coreGroup.add(coreMesh);

      // Orbiting Satellite Validator Nodes connected by energy beams
      const satGroup = new THREE.Group();
      const satGeo = new THREE.SphereGeometry(0.09, 12, 12);
      const satMat = new THREE.MeshBasicMaterial({ color: 0x00ffa3 });
      const linePositions: number[] = [];

      const icosaVertices = outerGeo.attributes.position;
      for (let i = 0; i < icosaVertices.count; i += 3) {
        const vx = icosaVertices.getX(i) * 1.12;
        const vy = icosaVertices.getY(i) * 1.12;
        const vz = icosaVertices.getZ(i) * 1.12;

        const sat = new THREE.Mesh(satGeo, satMat);
        sat.position.set(vx, vy, vz);
        satGroup.add(sat);

        // Beam from center (0,0,0) to node
        linePositions.push(0, 0, 0, vx, vy, vz);
      }

      // Add beam lines
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const lineMat = new THREE.LineBasicMaterial({ color: 0x00ffa3, transparent: true, opacity: 0.35 });
      const lines = new THREE.LineSegments(lineGeo, lineMat);

      nodesGroup.add(satGroup);
      nodesGroup.add(lines);
    }

    // 4. SHAPE 4: CROSS_CHAIN_HELIX (Dual-Ribbon Multi-Rollup Manifold)
    else if (geometryType === 'CROSS_CHAIN_HELIX') {
      const { mainMat, wireMat } = getMaterialPair(0x00ffa3);

      // Primary Intertwined Ribbon T(4, 5) - highly intricate, resembling cross-chain bridges
      const helixGeo1 = new THREE.TorusKnotGeometry(1.75, 0.36, 260, 36, 4, 5);
      const helixWire1 = new THREE.TorusKnotGeometry(1.76, 0.37, 130, 24, 4, 5);
      const mesh1 = new THREE.Mesh(helixGeo1, mainMat);
      const wire1 = new THREE.Mesh(helixWire1, wireMat);
      shellGroup.add(mesh1);
      shellGroup.add(wire1);

      // Counter-phase glowing fiber optic core inside the helix
      const fiberGeo = new THREE.TorusKnotGeometry(1.75, 0.08, 140, 16, 4, 5);
      const fiberMat = new THREE.MeshBasicMaterial({ color: 0x00e5ff });
      const fiberMesh = new THREE.Mesh(fiberGeo, fiberMat);
      coreGroup.add(fiberMesh);

      addCryptoNodes(helixGeo1, 0x00ffa3, 24);
    }
  }, [geometryType, materialType]);

  // Perform Raycast at the exact clicked screen coordinates and spawn localized cryptographic verification
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
    spawnVerificationAtPoint(hitPoint, hitNormal, currentMeta.color);

    // Add floating HUD verification tag in DOM at the click location
    const tagId = Date.now() + Math.random();
    const newTag: VerificationTag = {
      id: tagId,
      x: relX,
      y: relY,
      label: isDirectHit ? AUDIT_LABELS[Math.floor(Math.random() * AUDIT_LABELS.length)] : 'TOPOLOGY_ATTESTED',
      hash: getRandomHex()
    };

    setTags(prev => [...prev.slice(-4), newTag]);
    setTimeout(() => {
      setTags(prev => prev.filter(t => t.id !== tagId));
    }, 1200);
  };

  const handleSelectGeometry = (type: GeometryType) => {
    setGeometryType(type);
    if (cameraRef.current) {
      const centerPoint = new THREE.Vector3(0, 0, 0);
      const normal = cameraRef.current.position.clone().normalize();
      spawnVerificationAtPoint(centerPoint, normal, shapesMeta[type].color);
      spatialAudio.playVerificationPing(1.15);
    }
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

    // Distinguish stationary tap (< 6px movement, < 350ms duration) from 3D camera drag
    if (dist < 6 && elapsed < 350) {
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
            transform: translate(-50%, 0) scale(0.75);
          }
          15% {
            opacity: 1;
            transform: translate(-50%, -10px) scale(1.03);
          }
          75% {
            opacity: 0.95;
            transform: translate(-50%, -22px) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate(-50%, -34px) scale(0.92);
          }
        }
        .crypto-audit-tag {
          animation: cryptoAuditBadge 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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
          <div className="crypto-audit-tag flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#040812]/92 backdrop-blur-xl border border-emerald-400/50 shadow-[0_0_24px_rgba(0,255,163,0.35)] text-emerald-300 font-mono text-xs whitespace-nowrap">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 animate-pulse" />
            <span className="font-bold tracking-wider">{tag.label}</span>
            <span className="text-white/40 text-[11px] font-normal pl-1 border-l border-white/20">{tag.hash}</span>
          </div>
        </div>
      ))}

      {/* Top Floating Spatial HUD with Crypto Metadata */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2.5 bg-black/75 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-full text-xs text-white pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wider font-mono">{currentMeta.name}</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400 font-mono text-[11px] font-semibold">{currentMeta.tag}</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          <button
            onClick={() => {
              const next = !isExploded;
              setIsExploded(next);
              isExplodedRef.current = next;
              spatialAudio.playExplode(next);
            }}
            className={`flex items-center gap-1.5 font-mono px-3.5 py-2 rounded-full text-xs transition-all border cursor-pointer ${
              isExploded
                ? 'bg-gradient-to-r from-emerald-500/25 to-cyan-500/25 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/20'
                : 'bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white border-white/15'
            }`}
            title="Toggle Exploded Layer Decomposition"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>{isExploded ? 'COLLAPSE' : 'EXPLODED_VIEW'}</span>
          </button>

          <button
            onClick={handleResetCamera}
            className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-gray-200 hover:text-white font-mono px-3.5 py-2 rounded-full text-xs transition-colors border border-white/15 cursor-pointer"
            title="Reset Camera Angle"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>RESET_VIEW</span>
          </button>
        </div>
      </div>

      {/* Exploded View Floating Layer Annotations */}
      {isExploded && (
        <div className="absolute top-20 right-4 z-20 pointer-events-none hidden sm:flex flex-col gap-1.5 font-mono text-[10px]">
          <div className="bg-black/80 backdrop-blur-md border border-cyan-400/50 px-3 py-1.5 rounded-xl text-cyan-300 flex items-center gap-2 shadow-lg shadow-cyan-500/10 animate-in fade-in slide-in-from-right-3 duration-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>LAYER 01: SHELL_INVARIANTS [+42%]</span>
          </div>
          <div className="bg-black/80 backdrop-blur-md border border-emerald-400/50 px-3 py-1.5 rounded-xl text-emerald-300 flex items-center gap-2 shadow-lg shadow-emerald-500/10 animate-in fade-in slide-in-from-right-3 duration-300 delay-75">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>LAYER 02: CONSENSUS_NODES [+82%]</span>
          </div>
          <div className="bg-black/80 backdrop-blur-md border border-purple-400/50 px-3 py-1.5 rounded-xl text-purple-300 flex items-center gap-2 shadow-lg shadow-purple-500/10 animate-in fade-in slide-in-from-right-3 duration-300 delay-150">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span>LAYER 03: SMT_CORE_SPINE [-18%]</span>
          </div>
        </div>
      )}

      {/* Active Formula Overlay */}
      <div className="absolute top-16 left-4 z-20 pointer-events-none hidden sm:block">
        <div className="bg-black/60 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-[11px] text-gray-300 font-mono flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span className="text-gray-200">{currentMeta.spec}</span>
        </div>
      </div>

      {/* Floating Free Rotation & Click Helper Hint */}
      <div className="absolute top-26 left-4 z-20 pointer-events-none">
        <div className="bg-black/55 backdrop-blur-md border border-white/10 px-3.5 py-1.5 rounded-xl text-[11px] text-gray-300 font-mono flex items-center gap-2">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
          <span>ЛКМ клик по узлу: криптографический аудит в точке касания • Вращение 360° • Зум</span>
        </div>
      </div>

      {/* Bottom Interactive Control Center: Crypto Geometric Manifolds */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-black/85 backdrop-blur-2xl border border-white/15 p-3 rounded-2xl">
        {/* Cryptographic Geometry Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-white/50 text-[11px] mr-1 hidden sm:inline">CRYPTO_TOPOLOGY:</span>
          {[
            { id: 'ELLIPTIC_CURVE', label: 'Elliptic Curve (ECC)', icon: Orbit },
            { id: 'ZK_TREFOIL', label: 'ZK-SNARK Trefoil', icon: Binary },
            { id: 'MERKLE_CORE', label: 'Merkle Consensus Core', icon: Network },
            { id: 'CROSS_CHAIN_HELIX', label: 'Cross-Chain Helix', icon: Shield }
          ].map((item) => {
            const Icon = item.icon;
            const isActive = geometryType === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleSelectGeometry(item.id as GeometryType)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                  isActive
                    ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-lg shadow-emerald-500/20 scale-[1.02]'
                    : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{item.label}</span>
              </button>
            );
          })}
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
