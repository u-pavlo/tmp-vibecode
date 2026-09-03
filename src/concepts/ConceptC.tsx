import React, { useState } from 'react';
import { 
  Sparkles, 
  Binary, 
  Orbit, 
  ArrowRight, 
  Layers, 
  Play, 
  Zap,
  Atom,
  Menu,
  X,
  FileText,
  Download,
  BarChart3,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { InteractiveZkWaveCanvas } from '../components/InteractiveZkWaveCanvas';

export const ConceptC: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [zkVerifierRunning, setZkVerifierRunning] = useState(false);
  const [verifiedStep, setVerifiedStep] = useState(3);
  const [activeResearchTab, setActiveResearchTab] = useState<'benchmarks' | 'papers' | 'vulnerabilities'>('benchmarks');

  const pillars = [
    {
      title: 'Zero-Knowledge Circuit Soundness',
      icon: Binary,
      badge: 'ZK-SNARK & STARK',
      desc: 'Formally proving the absence of under-constrained signals, soundness bugs, and completeness failures in Circom, Halo2, and Gnark arithmetic circuits.',
      metric: 'Over 40M ZK constraints verified'
    },
    {
      title: 'Modular Data Availability & Rollup Security',
      icon: Orbit,
      badge: 'Celestia / EigenDA / Avail',
      desc: 'Verifying 2D Reed-Solomon erasure coding, cryptographic fraud proofs, and decentralized sequencer consensus failover mechanisms.',
      metric: 'Zero consensus state corruption'
    },
    {
      title: 'Restaking & Shared Security Defense',
      icon: Layers,
      badge: 'EigenLayer / Symbiotic / Karak',
      desc: 'Adversarial game-theoretic simulation of AVS slashing conditions, dual-staking invariants, and operator collusion vector analysis.',
      metric: '$6.2B in Restaked Assets Guarded'
    },
    {
      title: 'Multichain Intent Solvers & Relayers',
      icon: Atom,
      badge: 'ERC-7683 / IBC v2 / Hyperlane',
      desc: 'Securing asynchronous cross-chain message queues, optimistic settlement windows, and intent auction MEV-leakage boundaries.',
      metric: '100% atomic execution safety'
    }
  ];

  const benchmarks = [
    {
      system: 'Groth16 (BN254)',
      proofSize: '128 bytes',
      verifyTime: '1.2 ms',
      evmGas: '210,000 gas',
      trustedSetup: 'Circuit-specific',
      status: 'Production Tier'
    },
    {
      system: 'PLONK / KZG',
      proofSize: '~800 bytes',
      verifyTime: '2.8 ms',
      evmGas: '280,000 gas',
      trustedSetup: 'Universal (Per-field)',
      status: 'Standard'
    },
    {
      system: 'Halo2 (IPA)',
      proofSize: '1.4 KB',
      verifyTime: '4.5 ms',
      evmGas: '340,000 gas (with Snark wrapper)',
      trustedSetup: 'None (Transparent)',
      status: 'Next-Gen'
    },
    {
      system: 'STARKs (FRI)',
      proofSize: '45 - 120 KB',
      verifyTime: '6.2 ms',
      evmGas: 'Recursive Verification',
      trustedSetup: 'None (Quantum-Resistant)',
      status: 'L2 Scaling'
    }
  ];

  const papers = [
    {
      id: 'EC-PAPER-2026-01',
      title: 'Under-Constrained Signal Discovery via Symbolic SMT Solving in Plonkish Arithmetization',
      authors: 'Elastic Curve Cryptography Research Group',
      abstract: 'We present an automated sound algorithm to systematically extract polynomial permutation constraints and flag unconstrained witness variables before mainnet rollup deployment.',
      date: 'August 2026'
    },
    {
      id: 'EC-PAPER-2026-02',
      title: 'Formal Safety Proofs of Asynchronous Cross-Rollup Intent Settlement Relayers',
      authors: 'Elastic Curve Multi-Rollup Division',
      abstract: 'Proving that under arbitrary relayer re-ordering and L1 re-org depth up to k blocks, cross-chain balance preservation invariant strictly holds.',
      date: 'June 2026'
    }
  ];

  const handleSimulateZkProof = () => {
    setZkVerifierRunning(true);
    setVerifiedStep(0);
    const interval = setInterval(() => {
      setVerifiedStep(prev => {
        if (prev >= 3) {
          clearInterval(interval);
          setZkVerifierRunning(false);
          return 3;
        }
        return prev + 1;
      });
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#070410] text-purple-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      {/* Neo-Tech Top Ticker */}
      <div className="border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-4 py-1.5 text-xs text-purple-300/70 font-mono">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              ZK-CORE::ONLINE
            </span>
            <span className="text-white/20">|</span>
            <span>POLYNOMIAL COMMITMENTS & MULTICHAIN RESILIENCE</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>ZK CIRCUITS VERIFIED: <strong className="text-white">180+</strong></span>
            <span>ARITHMETIC GATES: <strong className="text-cyan-300">42,000,000+</strong></span>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className="sticky top-11 z-40 bg-[#070410]/80 backdrop-blur-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20">
              <div className="w-full h-full bg-[#0c071d] rounded-[10px] flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-cyan-300" />
              </div>
            </div>
            <div>
              <span className="text-lg font-bold tracking-wider text-white flex items-center gap-1.5">
                ELASTIC CURVE
                <span className="text-[10px] text-purple-300 bg-purple-500/20 border border-purple-400/30 px-2 py-0.5 rounded-full font-mono">
                  NEO-TECH
                </span>
              </span>
              <span className="text-[11px] text-purple-300/60 block -mt-1 tracking-widest font-mono">
                CRYPTOGRAPHIC LABS
              </span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8 text-sm text-purple-200/80 font-medium">
            <a href="#zk-engine" className="hover:text-cyan-300 transition-colors">ZK Engine</a>
            <a href="#modular" className="hover:text-cyan-300 transition-colors">Modular Stacks</a>
            <a href="#interactive-proof" className="hover:text-cyan-300 transition-colors">Proof Simulator</a>
            <a href="#research" className="hover:text-cyan-300 transition-colors">Papers & Benchmarks</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 hover:from-purple-400 hover:to-cyan-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 hover:scale-[1.02] cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Engagement</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-purple-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0c071d] border-b border-white/10 px-4 py-4 space-y-3 font-mono text-xs">
            <a href="#zk-engine" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-cyan-300 py-1.5">
              [01_ZK_ENGINE]
            </a>
            <a href="#modular" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-cyan-300 py-1.5">
              [02_MODULAR_STACKS]
            </a>
            <a href="#interactive-proof" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-cyan-300 py-1.5">
              [03_PROOF_SIMULATOR]
            </a>
            <a href="#research" onClick={() => setMobileMenuOpen(false)} className="block text-purple-200 hover:text-cyan-300 py-1.5">
              [04_PAPERS_&_BENCHMARKS]
            </a>
          </div>
        )}
      </header>

      {/* Hero Section (ZK Engine) */}
      <section id="zk-engine" className="scroll-mt-28 relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Text (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" />
              <span>Next-Gen Zero-Knowledge & Protocol Defense</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400">
                Cryptographic Proofs
              </span>
            </h1>

            <p className="text-base text-purple-200/70 leading-relaxed">
              We audit Zero-Knowledge circuits, modular rollups, and cross-chain invariant boundaries. We prove mathematical soundness so your protocol can scale without systemic insolvency.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                <div className="text-2xl font-bold text-white">$14.8B</div>
                <div className="text-[11px] text-purple-300/60 mt-1">TVL Guarded</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                <div className="text-2xl font-bold text-cyan-300">42M+</div>
                <div className="text-[11px] text-purple-300/60 mt-1">ZK Constraints</div>
              </div>
              <div className="bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                <div className="text-2xl font-bold text-emerald-400">0</div>
                <div className="text-[11px] text-purple-300/60 mt-1">Soundness Flaws</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-purple-500/20 hover:scale-[1.02] cursor-pointer"
              >
                <span>Request Cryptographic Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#interactive-proof"
                className="flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-purple-200 border border-white/10 px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer"
              >
                <Zap className="w-4 h-4 text-cyan-300" />
                <span>Test ZK Simulator</span>
              </a>
            </div>
          </div>

          {/* Right Visual (7 cols): Interactive ZK Wave Canvas */}
          <div className="lg:col-span-7">
            <InteractiveZkWaveCanvas />
          </div>
        </div>
      </section>

      {/* Modular Security Pillars */}
      <section id="modular" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest mb-2">
            MODULAR PARADIGMS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Security for Next-Generation Decentralized Architecture
          </h2>
          <p className="text-purple-200/70 text-sm sm:text-base mt-3">
            Monolithic security is obsolete. We specialize in the new frontier: validity rollups, modular data availability layers, and shared security mesh networks.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-purple-500/40 rounded-2xl p-8 transition-all duration-200 backdrop-blur-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full">
                      {pillar.badge}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-purple-200/70 text-sm leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                <div className="border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-emerald-400">
                  <span>METRIC:</span>
                  <span className="font-bold">{pillar.metric}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive ZK Proof Simulator Section */}
      <section id="interactive-proof" className="scroll-mt-28 py-20 bg-white/[0.01] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2">
              INTERACTIVE REASONING LAB
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Zero-Knowledge Verification Simulator
            </h2>
            <p className="text-purple-200/70 text-sm mt-2">
              Experience our automated constraint-soundness engine in real time. Simulate polynomial evaluation and verify KZG multi-point open commitments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl">
            {/* Left controller (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="text-xs font-bold text-white mb-1 font-mono">CIRCUIT SPECIFICATION:</div>
                  <div className="text-xs text-purple-300/80 font-mono">
                    Target: <code>BatchMerkleTreeUpdate.circom</code>
                  </div>
                  <div className="text-[11px] text-purple-200/60 mt-1">
                    Depth: 32 • Arity: 2 • Hash Function: PoseidonT3 • Curves: BN254 / Alt_bn128
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-purple-300">POLYNOMIAL DEGREE:</span>
                    <span className="text-cyan-300 font-bold">2^18 (262,144 gates)</span>
                  </div>
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-purple-300">SOUNDNESS ERROR:</span>
                    <span className="text-emerald-400 font-bold">&epsilon; &lt; 2^-128 (Cryptographic Invariant)</span>
                  </div>
                </div>
              </div>

              <button
                onClick={handleSimulateZkProof}
                disabled={zkVerifierRunning}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl text-xs font-mono transition-all shadow-lg shadow-purple-500/20 disabled:opacity-60 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>{zkVerifierRunning ? 'EXECUTING Z3 SOUNDNESS PROVER...' : 'RUN VERIFICATION PIPELINE'}</span>
              </button>
            </div>

            {/* Right steps trace (7 cols) */}
            <div className="lg:col-span-7 bg-[#0b061d] border border-white/10 rounded-xl p-5 font-mono text-xs space-y-3">
              <div className="text-purple-400 border-b border-white/10 pb-2 flex justify-between text-[11px]">
                <span>STAGE TRACE // KZG_BATCH_EVALUATOR</span>
                <span>STATE: {zkVerifierRunning ? 'ACTIVE' : 'READY'}</span>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  { step: 0, label: '01. R1CS to Plonkish Arithmetization', desc: 'Parsing 262,144 gates and building permutation copy-constraints.' },
                  { step: 1, label: '02. Under-Constrained Signal Fuzzing', desc: 'Attempting to forge witness values without private inputs.' },
                  { step: 2, label: '03. SMT Solvers Invariant Proving', desc: 'Proving polynomial quotient vanishing over roots of unity H.' },
                  { step: 3, label: '04. Cryptographic Proof Attestation', desc: 'Verifier contract gas footprint confirmed: 242,100 gas on EVM.' },
                ].map((item) => (
                  <div
                    key={item.step}
                    className={`p-3 rounded-lg border transition-all ${
                      verifiedStep >= item.step
                        ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                        : 'bg-white/[0.02] border-white/5 text-purple-300/40'
                    }`}
                  >
                    <div className="flex items-center justify-between font-bold text-xs">
                      <span>{item.label}</span>
                      {verifiedStep >= item.step && (
                        <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded">
                          PROVED
                        </span>
                      )}
                    </div>
                    <div className="text-[11px] text-purple-200/70 mt-1">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Papers & Cryptographic Benchmarks (Interactive Tabs) */}
      <section id="research" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest mb-2">
            ACADEMIC RIGOR & BENCHMARKS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Cryptographic Research & Proof Metrics
          </h2>
          <p className="text-purple-200/70 text-sm mt-2">
            Switch between prover performance benchmarks, published theorem papers, and circuit vulnerability taxonomies.
          </p>
        </div>

        {/* Research Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 font-mono text-xs">
          <button
            onClick={() => setActiveResearchTab('benchmarks')}
            className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
              activeResearchTab === 'benchmarks'
                ? 'bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            [01_PROVER_BENCHMARKS]
          </button>
          <button
            onClick={() => setActiveResearchTab('papers')}
            className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
              activeResearchTab === 'papers'
                ? 'bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            [02_FORMAL_PAPERS]
          </button>
          <button
            onClick={() => setActiveResearchTab('vulnerabilities')}
            className={`px-4 py-2 rounded-xl border transition-all cursor-pointer ${
              activeResearchTab === 'vulnerabilities'
                ? 'bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10'
            }`}
          >
            [03_CIRCUIT_FLAW_TAXONOMY]
          </button>
        </div>

        {/* Tab 1: Benchmarks */}
        {activeResearchTab === 'benchmarks' && (
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-2xl">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/5 border-b border-white/10 text-purple-300 text-[11px] uppercase">
                <tr>
                  <th className="py-3.5 px-6">PROOF_SYSTEM</th>
                  <th className="py-3.5 px-6">PROOF_SIZE</th>
                  <th className="py-3.5 px-6">VERIFICATION_TIME</th>
                  <th className="py-3.5 px-6">EVM_GAS_FOOTPRINT</th>
                  <th className="py-3.5 px-6">TRUSTED_SETUP</th>
                  <th className="py-3.5 px-6 text-right">TIER</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {benchmarks.map((b, idx) => (
                  <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                    <td className="py-4 px-6 font-bold text-white">{b.system}</td>
                    <td className="py-4 px-6 text-cyan-300">{b.proofSize}</td>
                    <td className="py-4 px-6 text-emerald-300">{b.verifyTime}</td>
                    <td className="py-4 px-6 text-purple-200">{b.evmGas}</td>
                    <td className="py-4 px-6 text-purple-300/70">{b.trustedSetup}</td>
                    <td className="py-4 px-6 text-right">
                      <span className="text-[10px] bg-purple-500/20 text-purple-200 border border-purple-400/30 px-2 py-0.5 rounded-full">
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Tab 2: Papers */}
        {activeResearchTab === 'papers' && (
          <div className="space-y-4">
            {papers.map((p, idx) => (
              <div key={idx} className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-300">
                    <FileText className="w-4 h-4" />
                    <span>{p.id}</span>
                    <span>•</span>
                    <span className="text-purple-300/60">{p.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans">{p.title}</h3>
                  <p className="text-xs text-purple-200/70 leading-relaxed max-w-2xl">{p.abstract}</p>
                </div>
                <button
                  onClick={() => alert(`Downloading preprint for ${p.id}...`)}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-xs font-mono text-purple-200 hover:text-white transition-colors cursor-pointer shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-cyan-300" />
                  <span>DOWNLOAD_PDF</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Vulnerabilities */}
        {activeResearchTab === 'vulnerabilities' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2">
              <div className="text-red-400 font-bold">01::UNDER_CONSTRAINED_SIGNALS</div>
              <p className="text-purple-200/70 text-[11px] leading-relaxed">
                When an arithmetic circuit fails to constrain an intermediate signal, allowing a malicious prover to synthesize a valid proof with forged inputs.
              </p>
              <div className="text-emerald-400 text-[10px] pt-1">VERIFIED VIA: Z3 Permutation Solvers</div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2">
              <div className="text-amber-400 font-bold">02::SHADOW_POLYNOMIAL_OVERFLOW</div>
              <p className="text-purple-200/70 text-[11px] leading-relaxed">
                Polynomial evaluation wrap-around mod p during multi-scalar multiplication (MSM) that yields accidental collision in quotient vanishing polynomials.
              </p>
              <div className="text-emerald-400 text-[10px] pt-1">VERIFIED VIA: Symbolic Range Assertions</div>
            </div>

            <div className="bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2">
              <div className="text-cyan-400 font-bold">03::FIAT_SHAMIR_WEAK_HASHING</div>
              <p className="text-purple-200/70 text-[11px] leading-relaxed">
                Insecure transcript absorbing order where verifier challenge &alpha; is generated without binding all preceding public signals.
              </p>
              <div className="text-emerald-400 text-[10px] pt-1">VERIFIED VIA: Transcript State Machine Check</div>
            </div>
          </div>
        )}
      </section>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0f0a26] border border-purple-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <Sparkles className="w-5 h-5 text-cyan-300" />
                <span>Initialize Cryptographic Audit</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-purple-300 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 cursor-pointer"
              >
                Close
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Cryptographic engagement submitted! Our cryptography lead will reach out.');
                setModalOpen(false);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-purple-200 font-medium mb-1">Protocol / Circuit Repository URL</label>
                <input
                  type="text"
                  required
                  placeholder="https://github.com/protocol/circuits"
                  className="w-full bg-[#080414] border border-white/10 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-purple-200 font-medium mb-1">Architecture Domain</label>
                  <select className="w-full bg-[#080414] border border-white/10 text-white px-3 py-2 rounded-xl focus:outline-none focus:border-cyan-400">
                    <option>ZK-Rollup & Circuits</option>
                    <option>Modular Data Availability</option>
                    <option>Restaking & AVS</option>
                    <option>Cross-Rollup Relayer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-purple-200 font-medium mb-1">Contact (Telegram/Signal)</label>
                  <input
                    type="text"
                    required
                    placeholder="@lead_crypto"
                    className="w-full bg-[#080414] border border-white/10 text-white px-3 py-2 rounded-xl focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
              >
                Dispatch Circuit Docket
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Neo-Tech Footer */}
      <footer className="bg-[#05020d] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-xs text-purple-300/60 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-white font-bold tracking-wider">
            <span>ELASTIC_CURVE::NEO_TECH_LABS</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <a href="#zk-engine" className="hover:text-cyan-300">ZK-ENGINE</a>
            <span>•</span>
            <a href="#modular" className="hover:text-cyan-300">MODULAR_STACKS</a>
            <span>•</span>
            <a href="#interactive-proof" className="hover:text-cyan-300">PROOF_SIMULATOR</a>
            <span>•</span>
            <a href="#research" className="hover:text-cyan-300">BENCHMARKS</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
