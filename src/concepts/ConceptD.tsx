import React, { useState } from 'react';
import { 
  Zap, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  Sparkles, 
  Layers, 
  Activity, 
  Box, 
  Orbit, 
  ArrowRight, 
  CheckCircle2, 
  Cpu, 
  Lock, 
  Terminal, 
  Menu, 
  X,
  Compass,
  Radio,
  Share2
} from 'lucide-react';
import { HyperCoreCanvas3D } from '../components/HyperCoreCanvas3D';
import { TiltCard3D } from '../components/TiltCard3D';
import { spatialAudio } from '../utils/spatialAudio';

export const ConceptD: React.FC = () => {
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [scannerActive, setScannerActive] = useState(false);
  const [scannerProgress, setScannerProgress] = useState(100);
  const [activeSystemTab, setActiveSystemTab] = useState<'AUTONOMOUS_MESH' | 'HIGH_THROUGHPUT' | 'CRYPTO_CORE'>('AUTONOMOUS_MESH');

  const handleToggleAudio = () => {
    const state = spatialAudio.toggleAudio();
    setAudioEnabled(state);
  };

  const handleRunScanner = () => {
    setScannerActive(true);
    setScannerProgress(0);
    spatialAudio.playWarp();

    let p = 0;
    const interval = setInterval(() => {
      p += 5;
      setScannerProgress(p);
      if (p % 20 === 0) {
        spatialAudio.playClick(600 + p * 8);
      }
      if (p >= 100) {
        clearInterval(interval);
        setScannerActive(false);
        spatialAudio.playChime(880, 'sine', 0.4);
      }
    }, 80);
  };

  const pillars = [
    {
      title: 'Autonomous State-Space Fuzzing',
      category: 'KINETIC VERIFICATION',
      badge: '10M+ Permutations/sec',
      desc: 'Simulating non-linear state explosions across multi-agent consensus matrices before production deployment.',
      glow: 'rgba(0, 255, 163, 0.3)',
      accentColor: 'text-emerald-400',
      icon: Activity
    },
    {
      title: 'Zero-Tolerance Invariant Synthesis',
      category: 'MATHEMATICAL CERTAINTY',
      badge: 'Formal SMT Proofs',
      desc: 'Constructing machine-checkable deductive proofs that certify zero-exploitability across all possible execution branches.',
      glow: 'rgba(0, 229, 255, 0.3)',
      accentColor: 'text-cyan-400',
      icon: ShieldCheck
    },
    {
      title: 'Spatial Topology & Cartel Defense',
      category: 'GAME THEORETIC DEFENSE',
      badge: 'Byzantine Fault Invariance',
      desc: 'Stress-testing distributed validator sets against adversarial collusion, MEV extraction, and censorship vectors.',
      glow: 'rgba(168, 85, 247, 0.3)',
      accentColor: 'text-purple-400',
      icon: Orbit
    },
    {
      title: 'Post-Quantum Algorithmic Shields',
      category: 'NEXT-ERA CRYPTOGRAPHY',
      badge: 'Lattice Soundness',
      desc: 'Auditing high-performance cryptographic primitives, zero-knowledge circuits, and quantum-resistant signature schemes.',
      glow: 'rgba(251, 191, 36, 0.3)',
      accentColor: 'text-amber-400',
      icon: Box
    }
  ];

  return (
    <div className="min-h-screen bg-[#030208] text-gray-100 font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden">
      {/* Volumetric background lights */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 -right-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px]" />
        <div className="absolute -bottom-40 left-1/3 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]" />
      </div>

      {/* Top Kinetic Bar */}
      <div className="relative z-50 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-4 py-2 text-xs font-mono text-gray-400">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              DIMENSION_D::HYPER_SPATIAL_ONLINE
            </span>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline text-white/60">AUTONOMOUS AUDITING & 3D CYBER DEFENSE</span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleToggleAudio}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] transition-all cursor-pointer ${
                audioEnabled
                  ? 'bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/20'
                  : 'bg-white/5 border-white/15 text-gray-400 hover:text-white'
              }`}
            >
              {audioEnabled ? <Volume2 className="w-3.5 h-3.5 text-emerald-400" /> : <VolumeX className="w-3.5 h-3.5" />}
              <span>SPATIAL_AUDIO: {audioEnabled ? 'ON' : 'OFF'}</span>
            </button>

            <span className="hidden md:inline text-white/40">ENGINE: Three.js WebGL 2.0</span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className="sticky top-11 z-40 bg-[#030208]/85 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-purple-500 p-0.5 shadow-xl shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#090615] rounded-[14px] flex items-center justify-center">
                <Orbit className="w-5 h-5 text-emerald-400 animate-spin-slow" />
              </div>
            </div>
            <div>
              <span className="text-xl font-extrabold tracking-wider text-white flex items-center gap-1.5">
                ELASTIC CURVE
                <span className="text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full font-mono">
                  3D_KINETIC
                </span>
              </span>
              <span className="text-[10px] text-gray-400 tracking-widest uppercase block -mt-1 font-mono">
                Hyper-Spatial System Defense
              </span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-gray-300 font-medium">
            <a href="#hyper-core" className="hover:text-emerald-400 transition-colors">Hyper-Core 3D</a>
            <a href="#kinetic-pillars" className="hover:text-emerald-400 transition-colors">3D Pillars</a>
            <a href="#spatial-scanner" className="hover:text-emerald-400 transition-colors">Spatial Diagnostic</a>
            <a href="#matrix" className="hover:text-emerald-400 transition-colors">Resilience Matrix</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setModalOpen(true);
                spatialAudio.playClick(1100);
              }}
              className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 hover:opacity-90 text-black font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2 hover:scale-[1.03] cursor-pointer"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>Request 3D Audit</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0a0618] border-b border-white/10 px-4 py-4 space-y-3 font-mono text-xs">
            <a href="#hyper-core" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-1.5">
              [01_HYPER_CORE_3D]
            </a>
            <a href="#kinetic-pillars" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-1.5">
              [02_3D_PILLARS]
            </a>
            <a href="#spatial-scanner" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-1.5">
              [03_SPATIAL_DIAGNOSTIC]
            </a>
            <a href="#matrix" onClick={() => setMobileMenuOpen(false)} className="block text-gray-300 hover:text-emerald-400 py-1.5">
              [04_RESILIENCE_MATRIX]
            </a>
          </div>
        )}
      </header>

      {/* Hero Section: The Hyper-Core 3D Engine */}
      <section id="hyper-core" className="scroll-mt-28 relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Statement (5 cols) */}
          <div className="lg:col-span-5 space-y-7">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-400 animate-spin" />
              <span>Next-Generation System Verification</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400">
                Digital Resilience
              </span> <br />
              in 3D Space.
            </h1>

            <p className="text-base text-gray-300 leading-relaxed font-normal">
              Beyond check-the-box compliance. We map high-throughput architectures into continuous kinetic manifolds, verifying systemic fault-invariance and mathematical soundness before threats materialize.
            </p>

            {/* Kinetic Stat Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono">
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-white">$18.4B+</div>
                <div className="text-[11px] text-gray-400 mt-1 uppercase">Assets Shielded</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-emerald-400">0.000%</div>
                <div className="text-[11px] text-gray-400 mt-1 uppercase">Post-Audit Flaws</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl">
                <div className="text-2xl font-black text-cyan-400">100%</div>
                <div className="text-[11px] text-gray-400 mt-1 uppercase">Machine Proved</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  setModalOpen(true);
                  spatialAudio.playClick(1000);
                }}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-extrabold px-7 py-4 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.03] cursor-pointer"
              >
                <span>Initiate Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#spatial-scanner"
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-4 rounded-xl text-sm transition-colors cursor-pointer"
              >
                <Activity className="w-4 h-4 text-emerald-400" />
                <span>Launch Diagnostic</span>
              </a>
            </div>

            <div className="text-xs text-gray-400 flex items-center gap-2 pt-1 font-mono">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Partner-led cryptographers • Zero compliance theater • Realtime SMT invariants</span>
            </div>
          </div>

          {/* Right Hero: Three.js Interactive HyperCore Viewport (7 cols) */}
          <div className="lg:col-span-7">
            <HyperCoreCanvas3D />
          </div>
        </div>
      </section>

      {/* 3D Perspective Tilt Cards Matrix */}
      <section id="kinetic-pillars" className="scroll-mt-28 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2">
            // INTERACTIVE 3D PERSPECTIVE MATRIX
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            High-Dimensional Security Architecture
          </h2>
          <p className="text-gray-300 text-sm sm:text-base mt-3">
            Hover and tilt the cards below to explore our multi-layered engineering disciplines. Built with dynamic specular glares and physical 3D gyro-parallax.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <TiltCard3D
                key={idx}
                glowColor={pillar.glow}
                className="p-8 sm:p-10 flex flex-col justify-between min-h-[320px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {pillar.category}
                    </span>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white">
                      <Icon className={`w-6 h-6 ${pillar.accentColor}`} />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 font-normal">
                    {pillar.desc}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono">
                  <span className="text-gray-400">BENCHMARK:</span>
                  <span className={`font-bold ${pillar.accentColor}`}>{pillar.badge}</span>
                </div>
              </TiltCard3D>
            );
          })}
        </div>
      </section>

      {/* Interactive 3D Spatial System Diagnostic Terminal */}
      <section id="spatial-scanner" className="scroll-mt-28 py-24 bg-white/[0.01] border-y border-white/10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2">
              REALTIME DIAGNOSTIC MANIFOLD
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Spatial System Scanner
            </h2>
            <p className="text-gray-300 text-sm mt-2">
              Select a target infrastructure subsystem and initiate our procedural state-space solver. Watch the real-time invariant convergence cycle.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl">
            {/* Left Control Panel (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <label className="block text-xs font-mono text-gray-400 font-bold uppercase">
                  TARGET ARCHITECTURE CLUSTER:
                </label>
                <div className="space-y-2">
                  {[
                    { id: 'AUTONOMOUS_MESH', label: 'Autonomous Mesh & Consensus Layer', desc: 'Tendermint / Solana BPF / Narwhal Engine' },
                    { id: 'HIGH_THROUGHPUT', label: 'L1/L2 High-Throughput Manifold', desc: 'Arbitrum Nitro / Monad / Move VM PTB' },
                    { id: 'CRYPTO_CORE', label: 'Cryptographic Core & ZK Circuit', desc: 'KZG Commitments / PlonK / Halo2 Prover' }
                  ].map((sys) => (
                    <button
                      key={sys.id}
                      onClick={() => {
                        setActiveSystemTab(sys.id as any);
                        spatialAudio.playClick(900);
                      }}
                      className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                        activeSystemTab === sys.id
                          ? 'bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/10'
                          : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{sys.label}</div>
                      <div className="text-xs text-gray-400 font-mono mt-1">{sys.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={handleRunScanner}
                disabled={scannerActive}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 hover:opacity-90 text-black font-extrabold py-4 rounded-2xl text-sm transition-all shadow-xl shadow-emerald-500/25 disabled:opacity-60 cursor-pointer"
              >
                <Zap className="w-4 h-4 fill-current" />
                <span>{scannerActive ? 'COMPUTING STATE MANIFOLD...' : 'RUN SPATIAL SOLVER'}</span>
              </button>
            </div>

            {/* Right Diagnostic Visualizer (7 cols) */}
            <div className="lg:col-span-7 bg-[#070414] border border-white/15 rounded-2xl p-6 font-mono text-xs space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-emerald-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  CLUSTER: {activeSystemTab}
                </span>
                <span className="text-gray-400 text-[11px]">SOLVER: Z3_DEDUCTIVE_PROVER</span>
              </div>

              {/* Progress & Diagnostic bars */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">INVARIANT SATISFIABILITY:</span>
                  <span className="font-bold text-emerald-400">{scannerProgress}% SOLVED</span>
                </div>
                <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10">
                  <div
                    className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 h-full transition-all duration-150"
                    style={{ width: `${scannerProgress}%` }}
                  />
                </div>
              </div>

              {/* Realtime Output Logs */}
              <div className="bg-black/60 border border-white/10 rounded-xl p-4 space-y-2 text-[11px] leading-relaxed max-h-56 overflow-y-auto">
                <div className="text-gray-500">&gt;&gt;&gt; INITIALIZING HYPER-DIMENSIONAL GRAPH MODEL...</div>
                <div className="text-cyan-300">&gt;&gt;&gt; 14,892 concurrent callframes mapped into invariant topology.</div>
                <div className="text-purple-300">&gt;&gt;&gt; Testing non-linear reentrancy edge cases across transient storage slots.</div>
                {scannerProgress >= 50 && (
                  <div className="text-amber-300 font-semibold">
                    &gt;&gt;&gt; [ANOMALY_RESOLVED]: Zero-day overflow vector neutralized at opcode 0x48.
                  </div>
                )}
                {scannerProgress >= 100 && (
                  <div className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-lg flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>CERTIFICATE OF SOUNDNESS GENERATED (SHA256::8A4F...11CE)</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal: 3D Engagement Request */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 font-sans">
          <div className="bg-[#0b071e] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-2.5 text-white font-bold text-base">
                <Orbit className="w-5 h-5 text-emerald-400" />
                <span>Initialize 3D Cyber Engagement</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                spatialAudio.playChime(720, 'triangle', 0.5);
                alert('Engagement docket initialized. Our senior security architects will contact you within 4 hours.');
                setModalOpen(false);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-gray-300 font-semibold mb-1">System / Project Architecture</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Next-Gen Autonomous DEX / Layer-1"
                  className="w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Architecture Domain</label>
                  <select className="w-full bg-black/50 border border-white/15 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-emerald-400">
                    <option>High-Throughput Multichain</option>
                    <option>Autonomous AI & Contracts</option>
                    <option>Zero-Knowledge Circuits</option>
                    <option>Consensus & Bridging Infra</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-300 font-semibold mb-1">Target Launch SLA</label>
                  <input
                    type="text"
                    placeholder="Q4 2026 / Expedited"
                    className="w-full bg-black/50 border border-white/15 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Repository / Whitepaper Spec URL</label>
                <input
                  type="text"
                  required
                  placeholder="https://github.com/org/core-protocol"
                  className="w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"
                />
              </div>

              <div>
                <label className="block text-gray-300 font-semibold mb-1">Encrypted Contact (Telegram / Signal / Email)</label>
                <input
                  type="text"
                  required
                  placeholder="@architect_lead or cto@domain.io"
                  className="w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-black font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 hover:opacity-95 cursor-pointer"
              >
                Dispatch Engagement Docket
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Spatial Footer */}
      <footer className="bg-[#020105] border-t border-white/10 py-14 px-4 sm:px-6 lg:px-8 text-xs text-gray-400 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-extrabold text-white text-sm tracking-wider">
              ELASTIC CURVE::HYPER_SPATIAL
            </span>
            <span className="text-white/20">|</span>
            <span>AUTONOMOUS SYSTEM AUDITING & 3D CYBER DEFENSE</span>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="#hyper-core" className="hover:text-emerald-400">HYPER_CORE</a>
            <a href="#kinetic-pillars" className="hover:text-emerald-400">3D_PILLARS</a>
            <a href="#spatial-scanner" className="hover:text-emerald-400">DIAGNOSTIC</a>
            <span className="text-emerald-400">STATUS: 60_FPS_STABLE</span>
          </div>
        </div>
      </footer>
    </div>
  );
};
