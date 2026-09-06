import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { spatialAudio } from '../utils/spatialAudio';
import { Zap, Orbit, RefreshCw, Eye, Sparkles } from 'lucide-react';

type GeometryType = 'TORUS_KNOT' | 'QUANTUM_CORE' | 'MOEBIUS_RIBBON' | 'PARTICLE_SWARM';
type MaterialType = 'HOLO_WIREFRAME' | 'LIQUID_CHROME' | 'IRIDESCENT_GLASS';

export const HyperCoreCanvas3D: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [geometryType, setGeometryType] = useState<GeometryType>('TORUS_KNOT');
  const [materialType, setMaterialType] = useState<MaterialType>('LIQUID_CHROME');
  const [isRotating, setIsRotating] = useState(true);
  const [pulseCount, setPulseCount] = useState(0);

  // References for three.js objects
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshGroupRef = useRef<THREE.Group | null>(null);
  const innerMeshRef = useRef<THREE.Mesh | null>(null);
  const wireframeMeshRef = useRef<THREE.Mesh | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const ringsRef = useRef<THREE.Group | null>(null);

  // Shockwave ring
  const shockwaveRef = useRef<{ mesh: THREE.Mesh; scale: number; active: boolean } | null>(null);

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

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffa3, 40, 50);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x00e5ff, 35, 50);
    pointLight2.position.set(-5, -4, 4);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xa855f7, 30, 50);
    pointLight3.position.set(0, 6, -4);
    scene.add(pointLight3);

    // 3. Central Mesh Group
    const meshGroup = new THREE.Group();
    meshGroupRef.current = meshGroup;
    scene.add(meshGroup);

    // 4. Background Starfield & Kinetic Particles
    const particleCount = 1800;
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
      opacity: 0.75,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    particlesRef.current = particles;
    scene.add(particles);

    // 5. Orbital Gyroscopic Rings
    const ringsGroup = new THREE.Group();
    ringsRef.current = ringsGroup;

    const ringRadius = 3.2;
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

    // 6. Shockwave Plane
    const shockGeo = new THREE.RingGeometry(0.1, 0.25, 64);
    const shockMat = new THREE.MeshBasicMaterial({
      color: 0x00ffa3,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0
    });
    const shockMesh = new THREE.Mesh(shockGeo, shockMat);
    shockMesh.rotation.x = Math.PI / 2;
    scene.add(shockMesh);
    shockwaveRef.current = { mesh: shockMesh, scale: 0.1, active: false };

    // 7. Mouse tracking & interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetX = x * 2.2;
      targetY = -y * 2.2;
    };

    window.addEventListener('mousemove', onMouseMove);

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

    // 9. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsed = clock.getElapsedTime();

      // Smooth camera parallax
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      camera.position.x = mouseX * 2;
      camera.position.y = mouseY * 2;
      camera.lookAt(0, 0, 0);

      // Rotate central 3D mesh
      if (meshGroupRef.current && isRotating) {
        meshGroupRef.current.rotation.x = elapsed * 0.25;
        meshGroupRef.current.rotation.y = elapsed * 0.35;
      }

      // Rotate orbital rings
      if (ringsRef.current) {
        ringsRef.current.rotation.x = elapsed * 0.15;
        ringsRef.current.rotation.y = -elapsed * 0.2;
      }

      // Rotate particle field
      if (particlesRef.current) {
        particlesRef.current.rotation.y = elapsed * 0.04;
        particlesRef.current.rotation.z = elapsed * 0.02;
      }

      // Handle shockwave expansion
      if (shockwaveRef.current && shockwaveRef.current.active) {
        const sw = shockwaveRef.current;
        sw.scale += delta * 12;
        sw.mesh.scale.set(sw.scale, sw.scale, sw.scale);
        (sw.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.8 - sw.scale * 0.12);

        if (sw.scale > 7) {
          sw.active = false;
          (sw.mesh.material as THREE.MeshBasicMaterial).opacity = 0;
        }
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animId);
      renderer.dispose();
    };
  }, [isRotating]);

  // Re-build central geometry & materials whenever state changes
  useEffect(() => {
    const meshGroup = meshGroupRef.current;
    if (!meshGroup) return;

    // Remove previous children
    while (meshGroup.children.length > 0) {
      meshGroup.remove(meshGroup.children[0]);
    }

    // 1. Build Geometry
    let geo: THREE.BufferGeometry;
    let wireGeo: THREE.BufferGeometry;

    switch (geometryType) {
      case 'TORUS_KNOT':
        geo = new THREE.TorusKnotGeometry(1.6, 0.45, 180, 36, 2, 5);
        wireGeo = new THREE.TorusKnotGeometry(1.61, 0.46, 90, 24, 2, 5);
        break;
      case 'QUANTUM_CORE':
        geo = new THREE.IcosahedronGeometry(1.9, 3);
        wireGeo = new THREE.IcosahedronGeometry(1.95, 1);
        break;
      case 'MOEBIUS_RIBBON':
        geo = new THREE.TorusGeometry(1.8, 0.35, 30, 200, Math.PI * 2);
        wireGeo = new THREE.TorusGeometry(1.82, 0.36, 16, 80, Math.PI * 2);
        break;
      case 'PARTICLE_SWARM':
        geo = new THREE.DodecahedronGeometry(1.9, 2);
        wireGeo = new THREE.DodecahedronGeometry(2.0, 1);
        break;
      default:
        geo = new THREE.TorusKnotGeometry(1.6, 0.45, 160, 32, 2, 5);
        wireGeo = new THREE.TorusKnotGeometry(1.61, 0.46, 80, 20, 2, 5);
    }

    // 2. Build Materials
    let innerMat: THREE.Material;
    let wireMat: THREE.Material;

    switch (materialType) {
      case 'LIQUID_CHROME':
        innerMat = new THREE.MeshStandardMaterial({
          color: 0x111622,
          roughness: 0.1,
          metalness: 0.95,
          emissive: 0x002b1b,
          emissiveIntensity: 0.35
        });
        wireMat = new THREE.MeshBasicMaterial({
          color: 0x00ffa3,
          wireframe: true,
          transparent: true,
          opacity: 0.45
        });
        break;
      case 'HOLO_WIREFRAME':
        innerMat = new THREE.MeshBasicMaterial({
          color: 0x001122,
          wireframe: true,
          transparent: true,
          opacity: 0.2
        });
        wireMat = new THREE.MeshBasicMaterial({
          color: 0x00e5ff,
          wireframe: true,
          transparent: true,
          opacity: 0.85
        });
        break;
      case 'IRIDESCENT_GLASS':
        innerMat = new THREE.MeshStandardMaterial({
          color: 0x2e1065,
          roughness: 0.05,
          metalness: 0.5,
          emissive: 0x4c1d95,
          emissiveIntensity: 0.4
        });
        wireMat = new THREE.MeshBasicMaterial({
          color: 0xa855f7,
          wireframe: true,
          transparent: true,
          opacity: 0.6
        });
        break;
    }

    const innerMesh = new THREE.Mesh(geo, innerMat);
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);

    innerMeshRef.current = innerMesh;
    wireframeMeshRef.current = wireMesh;

    meshGroup.add(innerMesh);
    meshGroup.add(wireMesh);
  }, [geometryType, materialType]);

  // Trigger Shockwave Burst
  const triggerPulse = () => {
    setPulseCount(prev => prev + 1);
    spatialAudio.playWarp();

    if (shockwaveRef.current) {
      shockwaveRef.current.scale = 0.5;
      shockwaveRef.current.active = true;
      (shockwaveRef.current.mesh.material as THREE.MeshBasicMaterial).opacity = 0.85;
    }
  };

  const handleSelectGeometry = (type: GeometryType) => {
    setGeometryType(type);
    triggerPulse();
  };

  const handleSelectMaterial = (type: MaterialType) => {
    setMaterialType(type);
    spatialAudio.playClick(1050);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0a0518] via-[#04020a] to-[#020106] shadow-2xl"
    >
      {/* 3D Canvas Viewport */}
      <canvas
        ref={canvasRef}
        onClick={triggerPulse}
        className="w-full h-full block cursor-grab active:cursor-grabbing"
      />

      {/* Top Floating Spatial HUD */}
      <div className="absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none">
        <div className="flex items-center gap-2.5 bg-black/60 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-full text-xs text-white pointer-events-auto">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wider font-mono">ELASTIC_HYPER_CORE_3D</span>
          <span className="text-white/30">|</span>
          <span className="text-emerald-400 font-mono text-[11px]">WebGL 2.0 • 60 FPS</span>
        </div>

        <button
          onClick={triggerPulse}
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-full text-xs transition-all shadow-lg shadow-emerald-500/25 pointer-events-auto cursor-pointer hover:scale-105"
        >
          <Zap className="w-3.5 h-3.5 fill-current" />
          <span>TRIGGER_SHOCKWAVE</span>
        </button>
      </div>

      {/* Bottom Interactive Control Center */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-black/75 backdrop-blur-2xl border border-white/15 p-3 rounded-2xl">
        {/* Geometry Switcher */}
        <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
          <span className="text-white/50 text-[11px] mr-1 hidden sm:inline">GEOMETRY:</span>
          {[
            { id: 'TORUS_KNOT', label: 'Torus Knot' },
            { id: 'QUANTUM_CORE', label: 'Quantum Core' },
            { id: 'MOEBIUS_RIBBON', label: 'Moebius Ribbon' },
            { id: 'PARTICLE_SWARM', label: 'Star Swarm' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleSelectGeometry(item.id as GeometryType)}
              className={`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${
                geometryType === item.id
                  ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-md shadow-emerald-500/20'
                  : 'bg-white/5 text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
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
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            title="Toggle Auto-Rotation"
          >
            <Orbit className={`w-4 h-4 ${isRotating ? 'text-emerald-400 animate-spin' : 'text-gray-500'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};
