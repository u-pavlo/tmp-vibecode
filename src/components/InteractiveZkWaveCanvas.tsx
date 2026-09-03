import React, { useEffect, useRef, useState } from 'react';

export const InteractiveZkWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [proofSystem, setProofSystem] = useState<'PLONK' | 'GROTH16' | 'HALO2'>('PLONK');

  // Proof system parameters
  const systemConfigs = {
    PLONK: {
      formula: 'KZG10 on BN254 / Universal SRS',
      waveSpeed: 2.2,
      frequency: 0.65,
      hueBase: 260, // Violet
      constraints: '2^19 Plonkish Permutations',
      proofSize: '~800 bytes',
      verifyTime: '2.8 ms'
    },
    GROTH16: {
      formula: 'Pairing e(A, B) = e(α, β) · e(x, γ) on BLS12-381',
      waveSpeed: 1.4,
      frequency: 0.45,
      hueBase: 190, // Cyan
      constraints: '2^20 R1CS Constraints',
      proofSize: '128 bytes (Constant)',
      verifyTime: '1.2 ms'
    },
    HALO2: {
      formula: 'IPA (Inner Product Argument) without Trusted Setup',
      waveSpeed: 3.0,
      frequency: 0.85,
      hueBase: 150, // Emerald
      constraints: '2^21 UltraPlonk Custom Gates',
      proofSize: '1.4 KB',
      verifyTime: '4.5 ms'
    }
  };

  const currentConfig = systemConfigs[proofSystem];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let t = 0;
    let mouseX = 0;
    let mouseY = 0;
    let isHovered = false;

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      isHovered = true;
    };
    const handleMouseLeave = () => { isHovered = false; };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Particle nodes for ZK proof graph
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.002,
      vy: (Math.random() - 0.5) * 0.002,
      radius: Math.random() * 2.5 + 1.5,
      phase: Math.random() * Math.PI * 2,
    }));

    const render = () => {
      t += 0.015;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Deep space nebula glow
      const radial = ctx.createRadialGradient(
        width * 0.5, height * 0.5, 20,
        width * 0.5, height * 0.5, width * 0.6
      );
      radial.addColorStop(0, 'rgba(139, 92, 246, 0.12)');
      radial.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      radial.addColorStop(1, 'rgba(8, 5, 20, 0)');
      ctx.fillStyle = radial;
      ctx.fillRect(0, 0, width, height);

      // Draw 3D-projected polynomial wave surface
      const rows = 18;
      const cols = 28;
      const originX = width * 0.5;
      const originY = height * 0.6;
      const gridScale = Math.min(width, height) / 22;

      ctx.lineWidth = 1.2;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        let started = false;

        const rowZ = r - rows / 2;

        for (let c = 0; c < cols; c++) {
          const colX = c - cols / 2;

          // 3D Math function: Polynomial ZK commitment wave
          const dist = Math.sqrt(colX * colX + rowZ * rowZ);
          const mouseInfluence = isHovered
            ? Math.exp(-Math.hypot(originX + colX * gridScale - mouseX, originY + rowZ * gridScale - mouseY) / 80) * 3
            : 0;

          const wave = Math.sin(dist * currentConfig.frequency - t * currentConfig.waveSpeed) * 1.8 + Math.cos(colX * 0.5 + t) * 0.8 + mouseInfluence;

          // Perspective isometric projection
          const projX = originX + (colX - rowZ * 0.5) * gridScale * 1.3;
          const projY = originY + (colX * 0.2 + rowZ * 0.6) * gridScale * 0.9 - wave * gridScale * 0.7;

          if (!started) {
            ctx.moveTo(projX, projY);
            started = true;
          } else {
            ctx.lineTo(projX, projY);
          }
        }

        // Color based on row depth
        const hue = currentConfig.hueBase + (r / rows) * 50; // Dynamic hue
        ctx.strokeStyle = `hsla(${hue}, 85%, 65%, ${0.2 + (r / rows) * 0.4})`;
        ctx.stroke();
      }

      // Draw floating ZK proof constraint nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = 1; if (p.x > 1) p.x = 0;
        if (p.y < 0) p.y = 1; if (p.y > 1) p.y = 0;

        const px = p.x * width;
        const py = p.y * height;

        ctx.beginPath();
        ctx.arc(px, py, p.radius + Math.sin(t * 3 + p.phase) * 1, 0, Math.PI * 2);
        ctx.fillStyle = idx % 3 === 0 ? '#10B981' : idx % 2 === 0 ? '#00F0FF' : '#A78BFA';
        ctx.fill();

        // Connect nearby points
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 0.12) {
            ctx.beginPath();
            ctx.moveTo(px, py);
            ctx.lineTo(p2.x * width, p2.y * height);
            ctx.strokeStyle = `rgba(167, 139, 250, ${(0.12 - dist) * 4})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [proofSystem, currentConfig]);

  return (
    <div className="relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0e0722] via-[#090516] to-[#05030d]">
      {/* Top Floating Glass Badge */}
      <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-purple-200">
        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
        <span className="font-semibold">ZK POLYNOMIAL COMMITMENT TOPOLOGY</span>
        <span className="text-white/40">|</span>
        <span className="text-cyan-300 font-mono">{currentConfig.formula}</span>
      </div>

      <div className="absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-lg text-[11px]">
        {(['PLONK', 'GROTH16', 'HALO2'] as const).map((sys) => (
          <button
            key={sys}
            onClick={() => setProofSystem(sys)}
            className={`px-2.5 py-1 rounded transition-all cursor-pointer ${
              proofSystem === sys
                ? 'bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30'
                : 'text-purple-300 hover:text-white'
            }`}
          >
            {sys}
          </button>
        ))}
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-pointer" />

      {/* Bottom info bar */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between text-xs text-purple-200/70 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl">
        <div className="flex items-center gap-4 font-mono text-[11px]">
          <span>SCHEME: <strong className="text-white">{proofSystem} PROVER</strong></span>
          <span className="hidden sm:inline">CONSTRAINTS: <strong className="text-emerald-400">{currentConfig.constraints}</strong></span>
          <span className="hidden md:inline">PROOF SIZE: <strong className="text-cyan-300">{currentConfig.proofSize}</strong></span>
          <span className="hidden lg:inline">VERIFY TIME: <strong className="text-purple-300">{currentConfig.verifyTime}</strong></span>
        </div>
        <div className="text-emerald-400 font-mono text-[11px] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
          <span>INTERACTIVE TOPOLOGY ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
