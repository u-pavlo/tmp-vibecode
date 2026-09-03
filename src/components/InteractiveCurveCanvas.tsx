import React, { useEffect, useRef, useState } from 'react';

export const InteractiveCurveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [params, setParams] = useState({ a: -3, b: 7 }); // secp256k1 style parameters y^2 = x^3 - 3x + 7
  const [isScanning, setIsScanning] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
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

    const handleMouseLeave = () => {
      isHovered = false;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    // Cryptographic points
    interface NodePoint {
      x: number;
      y: number;
      label: string;
      verified: boolean;
      pulse: number;
    }

    const render = () => {
      t += 0.02;
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);

      // Coordinate System Center
      const originX = width * 0.48;
      const originY = height * 0.52;
      const scale = Math.min(width, height) / 14;

      // 1. Grid Background
      ctx.strokeStyle = 'rgba(30, 41, 59, 0.4)';
      ctx.lineWidth = 1;
      const step = scale * 1.5;

      for (let x = originX % step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = originY % step; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Axes
      ctx.strokeStyle = 'rgba(0, 255, 102, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, originY);
      ctx.lineTo(width, originY);
      ctx.moveTo(originX, 0);
      ctx.lineTo(originX, height);
      ctx.stroke();

      // Axis labels
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
      ctx.fillText('0x0 (GENESIS_POINT)', originX + 8, originY - 8);
      ctx.fillText('+X (SLOPE_SEC)', width - 110, originY - 8);
      ctx.fillText('+Y (AFFINE)', originX + 8, 16);

      // 3. Draw Elliptic Curve: y^2 = x^3 + a*x + b
      // y = ± sqrt(x^3 + ax + b)
      const aVal = params.a + (isHovered ? (mouseX / width - 0.5) * 1.5 : Math.sin(t * 0.5) * 0.4);
      const bVal = params.b + (isHovered ? (mouseY / height - 0.5) * 2 : Math.cos(t * 0.4) * 0.8);

      const drawCurveBranch = (sign: number) => {
        ctx.beginPath();
        let started = false;

        // Sample along x from -4 to 6
        for (let screenX = 0; screenX < width; screenX += 2) {
          const mathX = (screenX - originX) / scale;
          const rhs = Math.pow(mathX, 3) + aVal * mathX + bVal;

          if (rhs >= 0) {
            const mathY = sign * Math.sqrt(rhs);
            const screenY = originY - mathY * scale;

            if (!started) {
              ctx.moveTo(screenX, screenY);
              started = true;
            } else {
              ctx.lineTo(screenX, screenY);
            }
          } else {
            started = false;
          }
        }
        ctx.stroke();
      };

      // Outer glow for the curve
      ctx.shadowColor = '#00FF66';
      ctx.shadowBlur = 14;
      ctx.strokeStyle = '#00FF66';
      ctx.lineWidth = 2.5;

      drawCurveBranch(1);
      drawCurveBranch(-1);

      ctx.shadowBlur = 0; // reset glow

      // 4. Tangent & Secant Lines (Simulating Point Addition: P + Q = -R -> R)
      const px = 1.2 + Math.sin(t * 0.8) * 0.8;
      const pyRhs = Math.pow(px, 3) + aVal * px + bVal;
      
      if (pyRhs > 0) {
        const py = Math.sqrt(pyRhs);
        const screenPx = originX + px * scale;
        const screenPy = originY - py * scale;

        // Draw Secant / Scanning Ray
        const scanAngle = t * 1.2;
        const rayLen = 220;
        const rayEndX = screenPx + Math.cos(scanAngle) * rayLen;
        const rayEndY = screenPy + Math.sin(scanAngle) * rayLen;

        ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.moveTo(screenPx - Math.cos(scanAngle) * rayLen, screenPy - Math.sin(scanAngle) * rayLen);
        ctx.lineTo(rayEndX, rayEndY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Point P
        ctx.fillStyle = '#00FF66';
        ctx.beginPath();
        ctx.arc(screenPx, screenPy, 5, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#00F0FF';
        ctx.font = '11px "JetBrains Mono", monospace';
        ctx.fillText(`P_NODE(x:${px.toFixed(2)}, y:${py.toFixed(2)})`, screenPx + 10, screenPy - 8);

        // Reflection point -P
        const screenNegPy = originY + py * scale;
        ctx.strokeStyle = 'rgba(255, 46, 91, 0.4)';
        ctx.beginPath();
        ctx.moveTo(screenPx, screenPy);
        ctx.lineTo(screenPx, screenNegPy);
        ctx.stroke();

        ctx.fillStyle = '#FF2E5B';
        ctx.beginPath();
        ctx.arc(screenPx, screenNegPy, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillText(`-P (INVARIANT_CHECK)`, screenPx + 10, screenNegPy + 15);
      }

      // 5. Active Verification Radar Scan
      if (isScanning) {
        const scanY = (Math.sin(t * 1.5) * 0.5 + 0.5) * height;
        const grad = ctx.createLinearGradient(0, scanY - 40, 0, scanY + 40);
        grad.addColorStop(0, 'rgba(0, 255, 102, 0)');
        grad.addColorStop(0.5, 'rgba(0, 255, 102, 0.08)');
        grad.addColorStop(1, 'rgba(0, 255, 102, 0)');

        ctx.fillStyle = grad;
        ctx.fillRect(0, scanY - 40, width, 80);

        ctx.strokeStyle = 'rgba(0, 255, 102, 0.5)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, scanY);
        ctx.lineTo(width, scanY);
        ctx.stroke();

        ctx.font = '10px "JetBrains Mono", monospace';
        ctx.fillStyle = '#00FF66';
        ctx.fillText(`[RADAR::FORMAL_VERIFICATION_PASS_0x${Math.floor((t * 20) % 999).toString(16).toUpperCase()}]`, 20, scanY - 8);
      }

      // 6. Multichain Protocol Nodes scattered on curve
      const nodes: NodePoint[] = [
        { x: -1.2, y: 1.8, label: 'EVM::UniswapV4_Hook', verified: true, pulse: Math.sin(t * 3) },
        { x: 0.5, y: -2.3, label: 'SVM::Raydium_CPI', verified: true, pulse: Math.cos(t * 2.5) },
        { x: 2.1, y: 3.1, label: 'MOVE::Aptos_LendingVault', verified: true, pulse: Math.sin(t * 4) },
        { x: 3.2, y: -4.4, label: 'COSMOS::IBC_ChannelGuard', verified: true, pulse: Math.cos(t * 3.2) },
      ];

      nodes.forEach((node) => {
        const nx = originX + node.x * scale;
        const ny = originY - node.y * scale;

        if (nx > 0 && nx < width && ny > 0 && ny < height) {
          ctx.beginPath();
          ctx.arc(nx, ny, 4 + Math.abs(node.pulse) * 2, 0, Math.PI * 2);
          ctx.fillStyle = node.verified ? '#00FF66' : '#FF2E5B';
          ctx.fill();

          ctx.strokeStyle = node.verified ? 'rgba(0, 255, 102, 0.3)' : 'rgba(255, 46, 91, 0.3)';
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(nx, ny, 12 + Math.abs(node.pulse) * 6, 0, Math.PI * 2);
          ctx.stroke();

          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = '#CBD5E1';
          ctx.fillText(`[${node.label}]`, nx + 14, ny + 4);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [params, isScanning]);

  return (
    <div className="relative w-full h-[480px] lg:h-[560px] bg-carbon/90 border border-panelBorder rounded-lg overflow-hidden scanlines">
      {/* Mathematical Header Overlay */}
      <div className="absolute top-3 left-4 z-30 flex items-center gap-3 text-xs text-muted-gray bg-void/80 px-3 py-1.5 rounded border border-panelBorder">
        <span className="inline-block w-2 h-2 rounded-full bg-phosphor animate-pulse"></span>
        <span className="text-phosphor font-bold">ELLIPTIC_CURVE_SIMULATOR</span>
        <span className="text-gray-500">|</span>
        <span className="text-cyan-400 font-mono">y² = x³ + ({params.a})x + ({params.b}) (mod 𝔽ₚ)</span>
      </div>

      <div className="absolute top-3 right-4 z-30 flex items-center gap-2">
        <button
          onClick={() => setIsScanning(!isScanning)}
          className="text-[11px] px-2.5 py-1 rounded bg-panel border border-panelBorder hover:border-phosphor/50 text-gray-300 hover:text-phosphor transition-colors"
        >
          {isScanning ? '[PAUSE_SCAN]' : '[RESUME_SCAN]'}
        </button>
        <button
          onClick={() => setParams({ a: -3, b: (params.b % 12) + 3 })}
          className="text-[11px] px-2.5 py-1 rounded bg-panel border border-panelBorder hover:border-cyber-cyan/50 text-gray-300 hover:text-cyber-cyan transition-colors"
        >
          [MUTATE_CURVE]
        </button>
      </div>

      {/* Main Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair block"
      />

      {/* Bottom Status Ticker */}
      <div className="absolute bottom-3 left-4 right-4 z-30 flex flex-wrap items-center justify-between text-[11px] text-gray-400 bg-void/85 backdrop-blur px-3 py-1.5 rounded border border-panelBorder">
        <div className="flex items-center gap-4">
          <span>COORDINATES: <strong className="text-phosphor">AFFINE_WEIERSTRASS</strong></span>
          <span className="hidden sm:inline">FIELD: <strong className="text-cyan-400">secp256k1 & BLS12-381</strong></span>
          <span className="hidden md:inline">SOLVER: <strong className="text-amber-400">Z3 SMT Invariant Verifier</strong></span>
        </div>
        <div className="text-phosphor flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 bg-phosphor rounded-full"></span>
          <span>INTERACTIVE TOPOLOGY ACTIVE</span>
        </div>
      </div>
    </div>
  );
};
