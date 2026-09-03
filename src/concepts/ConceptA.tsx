import React, { useState } from 'react';
import { 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight, 
  Lock, 
  Search, 
  ExternalLink, 
  ChevronRight, 
  Menu,
  X,
  Shield,
  Layers,
  Cpu,
  Code2,
  FileCheck2,
  Award
} from 'lucide-react';
import { InteractiveCurveCanvas } from '../components/InteractiveCurveCanvas';

export const ConceptA: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'evm' | 'svm' | 'move' | 'cosmos'>('evm');
  const [modalOpen, setModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchLedger, setSearchLedger] = useState('');

  const services = [
    {
      title: 'Smart Contract Security Audit',
      badge: 'Multichain Core',
      desc: 'In-depth manual bytecode reverse engineering and automated invariant testing across Solidity, Rust/Anchor, Move, and CosmWasm.',
      deliverable: 'Comprehensive audit report with proof-of-concept exploits and compile-ready remediation.'
    },
    {
      title: 'Mathematical Formal Verification',
      badge: 'Z3 & SMT Solvers',
      desc: 'Mathematical proofs of system invariants using state-of-the-art deductive verifiers, certifying that critical failure states are logically impossible.',
      deliverable: 'Formal mathematical proof specification and machine-checked theorem artifacts.'
    },
    {
      title: 'L1/L2 Protocol Architecture & Consensus',
      badge: 'Infrastructure Grade',
      desc: 'Verification of state transition functions, mempool censorship resistance, sequencer MEV mitigation, and cross-chain messaging bridges.',
      deliverable: 'Architectural vulnerability assessment and consensus edge-case stress matrix.'
    },
    {
      title: 'Zero-Knowledge Circuit Verification',
      badge: 'ZK-SNARKs & STARKs',
      desc: 'Rigorous analysis of Circom, Halo2, and PlonK arithmetic circuits to identify under-constrained signals and soundness errors.',
      deliverable: 'Soundness verification and constraint completeness certification.'
    }
  ];

  const methodologySteps = [
    {
      phase: 'PHASE 01',
      title: 'Threat Modeling & Specification Extraction',
      desc: 'Our senior cryptographers map protocol assumptions, liquidity invariant boundaries, and privilege hierarchies.'
    },
    {
      phase: 'PHASE 02',
      title: 'Automated Fuzzing & Static Analysis',
      desc: 'Deployment of specialized mutation-based harnesses running millions of state transitions per minute.'
    },
    {
      phase: 'PHASE 03',
      title: 'Manual Adversarial Peer Review',
      desc: 'Two independent lead security researchers reverse-engineer critical logic paths to discover 0-day architectural flaws.'
    },
    {
      phase: 'PHASE 04',
      title: 'Remediation Review & Verification',
      desc: 'Full regression testing on client remediation commits to guarantee patches do not introduce secondary attack surfaces.'
    },
    {
      phase: 'PHASE 05',
      title: 'Cryptographic Sign-off & Publication',
      desc: 'Issuance of a cryptographically signed certification with SHA-256 commit verification for stakeholder trust.'
    }
  ];

  const matrixData = {
    evm: {
      name: 'EVM Core & Layer-2 Protocols',
      stack: 'Solidity / Yul / Vyper',
      invariants: [
        'Atomic balance conservation: sum(userBalances) <= totalAssets',
        'Transient storage (EIP-1153) reentry fence clearance across callframes',
        'Uniswap v4 dynamic hook execution privilege boundary assertions',
        'ERC-4337 Account Abstraction paymaster gas exhaustion bounding'
      ],
      tools: ['Foundry Invariant Harness', 'Halmos Symbolic Engine', 'Certora Prover', 'Slither Detectors'],
      sampleCode: `// FORMAL SPEC: Invariant Solvency
function check_solvency() public view {
    assert(vault.totalAssets() >= vault.totalDebt());
}`
    },
    svm: {
      name: 'Solana SVM & High-Throughput Execution',
      stack: 'Rust / Anchor / Native BPF',
      invariants: [
        'PDA bump canonicalization: Pubkey::create_program_address() == vault.key',
        'Missing signer constraint checks on state mutating CPI instructions',
        'Remaining accounts array uniqueness and discriminator verification',
        'Clock sysvar drift & slot timestamp manipulation resilience'
      ],
      tools: ['Anchor Linter Suite', 'Trident Fuzzing Framework', 'Solana BPF Instruction Trace'],
      sampleCode: `// ANCHOR SPEC: Canonical Bump Verification
#[account(
    mut,
    seeds = [b"vault", authority.key().as_ref()],
    bump = vault.canonical_bump
)]`
    },
    move: {
      name: 'Move Object Model & Linear Logic',
      stack: 'Aptos / Sui Move Bytecode',
      invariants: [
        'Hot Potato pattern: debt receipts must be unpacked strictly during settlement',
        'Dynamic field borrow_mut concurrency isolation across parallel PTB runs',
        'Linear capability preservation: no capability leakage through public entry calls',
        'Package upgrade immutability and package dependency pinning'
      ],
      tools: ['Aptos Move Prover', 'Sui Bytecode Verifier', 'MSL (Move Spec Language)'],
      sampleCode: `// MOVE PROVER: Hot Potato Linear Receipt
spec repay_flash_loan {
    aborts_if payment.value < receipt.amount + receipt.fee;
    ensures pool.balance == old(pool.balance) + receipt.fee;
}`
    },
    cosmos: {
      name: 'Cosmos Appchains & Interchain IBC',
      stack: 'Rust / CosmWasm / Tendermint',
      invariants: [
        'IBC packet sequence nonces must strictly increment monotonically',
        'CosmWasm SubMsg execution reply ordering and state rollback atomicity',
        'Unbounded storage iteration gas exhaustion prevention in state pruning',
        'Cross-chain light client header verification timeout validation'
      ],
      tools: ['CosmWasm Multi-Test', 'Hermes IBC Verifier', 'Tendermint Consensus Fuzzer'],
      sampleCode: `// COSMWASM SPEC: Sequence Nonce
ensure!(packet.sequence == state.expected_sequence, ContractError::InvalidPacketSequence);`
    }
  };

  const verifiedProtocols = [
    {
      name: 'AuraVault Multichain Collateral',
      tvl: '$2,400,000,000 USD',
      chain: 'EVM (Arbitrum & Mainnet)',
      type: 'CDP & Lending',
      reportId: 'EC-2026-A084',
      status: 'VERIFIED & CERTIFIED'
    },
    {
      name: 'Hyperion IBC Cross-Chain Relayer',
      tvl: '$1,850,000,000 USD',
      chain: 'Cosmos Interchain',
      type: 'Bridge Infrastructure',
      reportId: 'EC-2026-A071',
      status: 'VERIFIED & CERTIFIED'
    },
    {
      name: 'SolFlux Asynchronous CLMM',
      tvl: '$890,000,000 USD',
      chain: 'Solana SVM',
      type: 'Concentrated Liquidity',
      reportId: 'EC-2026-A079',
      status: 'VERIFIED & CERTIFIED'
    },
    {
      name: 'Aptos Prime Liquid Staking',
      tvl: '$640,000,000 USD',
      chain: 'Move VM',
      type: 'Liquid Staking Protocol',
      reportId: 'EC-2026-A064',
      status: 'VERIFIED & CERTIFIED'
    }
  ];

  const standards = [
    {
      title: 'Formal Mathematical Proving',
      badge: 'Z3 / SMT-LIB2',
      desc: 'Machine-checkable proofs ensuring critical smart contract invariants hold across infinite state spaces.'
    },
    {
      title: 'SOC-2 Type II Certified Process',
      badge: 'Enterprise Trust',
      desc: 'Full audit trail, encrypted key custody, and strict confidentiality protocols for private pre-audit codebases.'
    },
    {
      title: '24/7 Critical Incident War-Room',
      badge: 'SLA < 2 Hours',
      desc: 'Immediate mobilization of lead offensive researchers if anomalous mainnet behavior is detected.'
    },
    {
      title: 'Post-Deployment Realtime Invariants',
      badge: 'Continuous Guard',
      desc: 'Ongoing cryptographic invariant monitoring hooks integrated directly with RPC nodes and alerting relayers.'
    }
  ];

  const filteredProtocols = verifiedProtocols.filter(p => 
    p.name.toLowerCase().includes(searchLedger.toLowerCase()) ||
    p.chain.toLowerCase().includes(searchLedger.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#070A12] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Enterprise Top Banner */}
      <div className="bg-[#0B101D] border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>INSTITUTIONAL GRADE SECURITY</span>
            </span>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="hidden sm:inline">FORMAL VERIFICATION & CODE AUDITING</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <span>TOTAL VALUE SECURED: <strong className="text-slate-100">$14.82B+</strong></span>
            <span>ENGAGEMENTS: <strong className="text-slate-100">450+</strong></span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-11 z-40 bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-transparent border border-cyan-500/30 flex items-center justify-center">
              <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 19C9 19 9 5 15 5S15 19 20 19" strokeLinecap="round" />
                <circle cx="15" cy="5" r="2.5" fill="#00E5FF" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-sans">
                ELASTIC CURVE
                <span className="text-[10px] text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 rounded font-mono">
                  LABS
                </span>
              </span>
              <span className="text-[11px] text-slate-400 block -mt-1 tracking-wider uppercase">
                Institutional Security & Verification
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm text-slate-300 font-medium">
            <a href="#services" className="hover:text-cyan-400 transition-colors">Services</a>
            <a href="#methodology" className="hover:text-cyan-400 transition-colors">Methodology</a>
            <a href="#matrix" className="hover:text-cyan-400 transition-colors">Multichain Matrix</a>
            <a href="#ledger" className="hover:text-cyan-400 transition-colors">Verified Ledger</a>
            <a href="#standards" className="hover:text-cyan-400 transition-colors">Standards</a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:scale-[1.02]"
            >
              <Lock className="w-4 h-4" />
              <span>Request Audit</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-400 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0A0F1A] border-b border-slate-800 px-4 py-4 space-y-3 font-mono text-xs">
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-300 hover:text-cyan-400 py-1.5"
            >
              [01_SERVICES]
            </a>
            <a 
              href="#methodology" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-300 hover:text-cyan-400 py-1.5"
            >
              [02_METHODOLOGY]
            </a>
            <a 
              href="#matrix" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-300 hover:text-cyan-400 py-1.5"
            >
              [03_MULTICHAIN_MATRIX]
            </a>
            <a 
              href="#ledger" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-300 hover:text-cyan-400 py-1.5"
            >
              [04_VERIFIED_LEDGER]
            </a>
            <a 
              href="#standards" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-slate-300 hover:text-cyan-400 py-1.5"
            >
              [05_STANDARDS]
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Institutional Multichain Security Firm
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Mathematical Inevitability for <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">
                Multichain Protocols
              </span>
            </h1>

            <p className="text-base text-slate-400 leading-relaxed max-w-xl">
              Elastic Curve provides institutional-grade smart contract audits, formal Z3 verification, and cryptographic stress-testing for Tier-1 Web3 foundations and decentralized finance protocols.
            </p>

            {/* Institutional Stat Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white font-mono">$14.8B+</div>
                <div className="text-xs text-slate-400 mt-1">TVL Defended</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-cyan-400 font-mono">0</div>
                <div className="text-xs text-slate-400 mt-1">Post-Signoff Exploits</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-indigo-400 font-mono">100%</div>
                <div className="text-xs text-slate-400 mt-1">Proof Verification</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setModalOpen(true)}
                className="flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer"
              >
                <span>Initialize Engagement</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#ledger"
                className="flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer"
              >
                <span>View Public Reports</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>

            <div className="text-xs text-slate-500 flex items-center gap-2 pt-2">
              <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Dedicated partner-led reviews • Comprehensive remediation sprints • War-room SLA</span>
            </div>
          </div>

          {/* Right Hero: Blueprint Topology Visualizer */}
          <div className="lg:col-span-6">
            <div className="rounded-xl border border-slate-800 bg-[#0B111D] p-2 shadow-2xl relative overflow-hidden">
              <div className="px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  AFFINE_CURVE_FORMAL_PROVER
                </span>
                <span className="text-cyan-400">secp256k1 & BLS12-381</span>
              </div>
              <InteractiveCurveCanvas />
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Standards Bar */}
      <section className="border-y border-slate-800/80 bg-[#0A0F1A] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-xs text-slate-500 uppercase tracking-widest font-mono mb-6">
            TRUSTED BY INSTITUTIONAL FOUNDATIONS & DEFI CAPITALS
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">ETHEREUM_L2</div>
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">ARBITRUM_DAO</div>
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">SOLANA_CORE</div>
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">COSMOS_HUB</div>
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">APTOS_FOUND</div>
            <div className="text-sm font-bold tracking-wider text-slate-300 font-mono">MAKER_VAULTS</div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section id="services" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            PRACTICE AREAS
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Comprehensive Multichain Security Suite
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            We operate across the entire lifecycle of distributed systems, from algorithmic consensus down to execution bytecode and zero-knowledge circuit soundness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((srv, idx) => (
            <div
              key={idx}
              className="bg-[#0B101D] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-8 transition-all duration-200 group hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                    {srv.badge}
                  </span>
                  <span className="text-slate-600 font-mono text-xs">PRACTICE_0{idx + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3">
                  {srv.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {srv.desc}
                </p>
              </div>

              <div className="border-t border-slate-800/80 pt-4 flex items-start gap-2 text-xs text-slate-400 font-mono">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>DELIVERABLE: {srv.deliverable}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section id="methodology" className="scroll-mt-28 py-20 bg-[#0A0F1A] border-y border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
              VERIFICATION LIFECYCLE
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The 5-Stage Institutional Audit Pipeline
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2">
              Every audit follows a rigorous, peer-reviewed engineering protocol to guarantee zero stone is left unturned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {methodologySteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-[#0B101D] border border-slate-800 rounded-xl p-5 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-cyan-400 font-mono text-xs font-bold mb-2">
                    {step.phase}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono">
                  GATE: 100% SIGN-OFF
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multichain Matrix Section (Interactive Tabs) */}
      <section id="matrix" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            CROSS-ECOSYSTEM SPECIFICATION
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional Multichain Matrix
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Select an execution environment to view formal verification invariants, bytecode analysis heuristics, and automated toolchains.
          </p>
        </div>

        {/* Interactive Chain Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {[
            { id: 'evm', label: 'EVM Architecture', sub: 'Ethereum & Rollups' },
            { id: 'svm', label: 'Solana SVM', sub: 'Rust / BPF Execution' },
            { id: 'move', label: 'Move Language', sub: 'Aptos & Sui Objects' },
            { id: 'cosmos', label: 'Cosmos Interchain', sub: 'CosmWasm & Tendermint' }
          ].map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`text-left p-4 rounded-xl border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#0B101D] border-cyan-400 text-white shadow-lg shadow-cyan-500/10'
                    : 'bg-[#0A0F1A] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-mono font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`}>
                    0{tab.id === 'evm' ? '1' : tab.id === 'svm' ? '2' : tab.id === 'move' ? '3' : '4'}::CHAIN
                  </span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>}
                </div>
                <div className="font-bold text-sm text-white mt-1">{tab.label}</div>
                <div className="text-xs text-slate-400 mt-0.5">{tab.sub}</div>
              </button>
            );
          })}
        </div>

        {/* Active Tab Panel Content */}
        {(() => {
          const currentMatrix = matrixData[activeTab];
          return (
            <div className="bg-[#0B101D] border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white font-sans">{currentMatrix.name}</h3>
                  <span className="text-xs font-mono text-cyan-400">{currentMatrix.stack}</span>
                </div>
                <div className="flex items-center gap-2">
                  {currentMatrix.tools.map((t, idx) => (
                    <span key={idx} className="bg-[#070A12] border border-slate-800 text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-7 space-y-3">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                    FORMALLY VERIFIED MATHEMATICAL INVARIANTS:
                  </h4>
                  <div className="space-y-2">
                    {currentMatrix.invariants.map((inv, idx) => (
                      <div key={idx} className="bg-[#070A12] border border-slate-800/80 p-3 rounded-lg flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-slate-300 font-mono leading-relaxed">{inv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-2">
                  <h4 className="text-xs font-mono text-slate-400 uppercase font-bold tracking-wider">
                    SPECIFICATION DEFINITION ARTIFACT:
                  </h4>
                  <pre className="bg-[#070A12] border border-slate-800 p-4 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                    <code>{currentMatrix.sampleCode}</code>
                  </pre>
                </div>
              </div>
            </div>
          );
        })()}
      </section>

      {/* Public Verified Ledger */}
      <section id="ledger" className="scroll-mt-28 py-20 bg-[#0A0F1A] border-y border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
                AUDIT CERTIFICATIONS
              </div>
              <h2 className="text-3xl font-extrabold text-white tracking-tight">
                Public Verification Ledger
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Search cryptographically certified audit records and formal verification reports.
              </p>
            </div>

            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search protocol or chain..."
                value={searchLedger}
                onChange={(e) => setSearchLedger(e.target.value)}
                className="w-full bg-[#0B101D] border border-slate-800 text-xs text-white pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
          </div>

          <div className="bg-[#0B101D] border border-slate-800 rounded-xl overflow-hidden shadow-xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#0D1424] border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-mono">
                <tr>
                  <th className="py-4 px-6">PROTOCOL</th>
                  <th className="py-4 px-6">ECOSYSTEM</th>
                  <th className="py-4 px-6">CATEGORY</th>
                  <th className="py-4 px-6">TOTAL VALUE DEFENDED</th>
                  <th className="py-4 px-6">STATUS</th>
                  <th className="py-4 px-6 text-right">CERTIFICATION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                {filteredProtocols.map((p, i) => (
                  <tr key={i} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-4 px-6 font-bold text-white font-sans">
                      {p.name}
                      <span className="block text-xs font-mono text-slate-500 mt-0.5">{p.reportId}</span>
                    </td>
                    <td className="py-4 px-6 font-mono text-cyan-400 text-xs">
                      {p.chain}
                    </td>
                    <td className="py-4 px-6 text-slate-400 text-xs">
                      {p.type}
                    </td>
                    <td className="py-4 px-6 font-mono font-bold text-slate-200 text-xs">
                      {p.tvl}
                    </td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-mono">
                        <CheckCircle className="w-3.5 h-3.5" />
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <button
                        onClick={() => alert(`Opening formal audit certificate for ${p.name}`)}
                        className="text-xs font-medium text-cyan-400 hover:text-cyan-300 font-mono hover:underline inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>PDF_REPORT</span>
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Institutional Standards & Governance */}
      <section id="standards" className="scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2">
            SECURITY GOVERNANCE
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Institutional Standards & Guarantees
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            We adhere to the highest technical rigor and operational confidentiality protocols required by sovereign funds and decentralized foundations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {standards.map((st, idx) => (
            <div key={idx} className="bg-[#0B101D] border border-slate-800 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full">
                  {st.badge}
                </span>
                <h4 className="text-base font-bold text-white mt-4 mb-2">{st.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3 h-3" />
                <span>ACTIVE STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Contact Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B101D] border border-cyan-500/30 rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-5">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold">
                <ShieldCheck className="w-5 h-5 text-cyan-400" />
                <span>Initialize Formal Security Engagement</span>
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <p className="text-xs text-slate-400">
              Submit your protocol specifications and repository details. Our partner team will coordinate an introductory technical scope assessment within 6 hours.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('Engagement inquiry submitted. Our partner team will contact you shortly.');
                setModalOpen(false);
              }}
              className="space-y-4 text-xs"
            >
              <div>
                <label className="block text-slate-300 font-medium mb-1">Protocol / Organization Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Nexus Protocol"
                  className="w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Target Blockchain</label>
                  <select className="w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400">
                    <option>EVM (Ethereum / L2s)</option>
                    <option>Solana (SVM)</option>
                    <option>Move (Aptos / Sui)</option>
                    <option>Cosmos (CosmWasm)</option>
                    <option>Cross-Chain / Multi</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-300 font-medium mb-1">Target Launch Date</label>
                  <input
                    type="text"
                    placeholder="Q4 2026 / Mainnet"
                    className="w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Repository / Whitepaper URL</label>
                <input
                  type="text"
                  required
                  placeholder="https://github.com/org/contracts"
                  className="w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-medium mb-1">Work Email or Telegram / Signal</label>
                <input
                  type="text"
                  required
                  placeholder="cto@protocol.io or @telegram"
                  className="w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Submit for Technical Scoping
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Institutional Footer */}
      <footer className="bg-[#05080E] border-t border-slate-800 text-xs text-slate-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-bold text-slate-300 tracking-wider font-sans">
              ELASTIC CURVE LABS
            </span>
            <span className="text-slate-700">|</span>
            <span>INSTITUTIONAL CYBER-SECURITY & VERIFICATION</span>
          </div>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#services" className="hover:text-cyan-400">PRACTICES</a>
            <a href="#methodology" className="hover:text-cyan-400">METHODOLOGY</a>
            <a href="#matrix" className="hover:text-cyan-400">MATRIX</a>
            <a href="#ledger" className="hover:text-cyan-400">LEDGER</a>
            <a href="#standards" className="hover:text-cyan-400">STANDARDS</a>
            <span>PGP_ID: 4E92-A10C</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]">
          © {new Date().getFullYear()} Elastic Curve Security Labs Inc. All formal invariants mathematically verified.
        </div>
      </footer>
    </div>
  );
};
