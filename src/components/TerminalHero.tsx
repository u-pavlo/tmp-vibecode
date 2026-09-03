import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Cpu, Activity, Play, RefreshCw, AlertTriangle, CheckCircle2, ChevronRight, Zap } from 'lucide-react';
import { InteractiveCurveCanvas } from './InteractiveCurveCanvas';

interface TerminalHeroProps {
  onOpenAuditModal: () => void;
}

export const TerminalHero: React.FC<TerminalHeroProps> = ({ onOpenAuditModal }) => {
  const [activeTab, setActiveTab] = useState<'simulation' | 'fuzzer'>('simulation');
  const [fuzzerState, setFuzzerState] = useState<'idle' | 'running' | 'completed'>('running');
  const [fuzzerPreset, setFuzzerPreset] = useState<'reentrancy' | 'cpi_hijack' | 'oracle_manipulation'>('reentrancy');
  const [terminalLogs, setTerminalLogs] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // Simulation log generators
  const presetsData = {
    reentrancy: {
      name: 'EVM::Read-Only Reentrancy & Balancer Flashloan',
      target: 'VaultCore.sol:0x892a...f41e',
      steps: [
        '[INIT] Spawning Echidna/Medusa bytecode fuzzer...',
        '[AST] Parsed 4,890 instructions. Invariant `totalAssets == sum(balances)` loaded.',
        '[TEST_GEN] Injecting 50,000 randomized state transactions via Foundry invariant harness.',
        '[CALCULATING] Attempting flash-minting curve deflation in pool 0x3b...',
        '[ALERT] High severity vulnerability identified at opcode 0x05af (SSTORE after CALL)!',
        '[SYNTHESIS] Weaponizing proof-of-concept exploit: simulated $14.2M drain prevented.',
        '[PATCH_GENERATED] Applying CEI pattern + NonReentrant transient storage guard (EIP-1153).',
        '[VERIFIED] 0 regressions found. Z3 SMT solver proved invariant holds for all x in 𝔽ₚ.'
      ]
    },
    cpi_hijack: {
      name: 'SVM::Missing Signer & CPI Privilege Escalation',
      target: 'programs/liquidity_pool/src/lib.rs',
      steps: [
        '[INIT] Hooking Solana BPF instruction emulator & Anchor constraints...',
        '[ANALYSIS] Checking `account_info.is_signer` and PDA derivation bumps for seed: [b"vault", authority.key()]',
        '[EXPLOIT_VECTOR] Missing `has_one = authority` constraint detected on instruction `drain_surplus`!',
        '[ATTACK_SIM] Forged arbitrary account passed as token_program -> cross-program call redirected.',
        '[CRITICAL_BUG] Execution allowed arbitrary mint authority transfer!',
        '[REMEDIATION] Injected Anchor #[account(signer, seeds = [...], bump)] validation & Owner check.',
        '[VERIFIED] 100% formal check passed across all SVM instruction routes.'
      ]
    },
    oracle_manipulation: {
      name: 'MULTICHAIN::TWAP Window Decay & L2 Sequencer Lag',
      target: 'PriceConsumerV3.sol & PythRelayer.rs',
      steps: [
        '[INIT] Simulating sequencer downtime & low-liquidity spot price manipulation...',
        '[SCENARIO] 32-block sandwich attack with flash borrowed collateral on L2 rollup.',
        '[DRIFT_CHECK] Spot price deviates 34.8% from decentralized median before heartbeat triggers.',
        '[VULN] Liquidation threshold can be artificially triggered in single block!',
        '[MITIGATION] Enforced bounded TWAP deviation limits + multi-oracle circuit breaker.',
        '[VERIFIED] Protocol immune to price-distortion flash exploits.'
      ]
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (fuzzerState === 'running') {
      const data = presetsData[fuzzerPreset];
      setTerminalLogs([`>>> [TARGET: ${data.target}]`]);
      setProgress(5);

      let stepIndex = 0;
      interval = setInterval(() => {
        if (stepIndex < data.steps.length) {
          const nextStep = data.steps[stepIndex];
          setTerminalLogs((prev) => [...prev, nextStep]);
          stepIndex++;
          setProgress(Math.min(100, Math.round((stepIndex / data.steps.length) * 100)));
        } else {
          setFuzzerState('completed');
          clearInterval(interval);
        }
      }, 700);
    }

    return () => clearInterval(interval);
  }, [fuzzerState, fuzzerPreset]);

  const restartFuzzer = (preset: 'reentrancy' | 'cpi_hijack' | 'oracle_manipulation') => {
    setFuzzerPreset(preset);
    setFuzzerState('running');
    setTerminalLogs([]);
    setProgress(0);
  };

  return (
    <section className="relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Top Banner Status Bar */}
      <div className="flex flex-wrap items-center justify-between border-b border-panelBorder pb-4 mb-8 text-xs text-gray-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-phosphor bg-phosphor/10 px-2.5 py-1 rounded border border-phosphor/30 font-mono">
            <span className="w-2 h-2 rounded-full bg-phosphor animate-ping"></span>
            SYS_STATUS: ARMED & MONITORING
          </span>
          <span className="hidden sm:inline text-gray-500">|</span>
          <span className="hidden sm:inline font-mono">NODE_HASH: <code className="text-gray-300">0x7F...8A9D</code></span>
        </div>
        <div className="flex items-center gap-4 mt-2 sm:mt-0 font-mono">
          <span className="text-cyan-400">TVL_DEFENDED: $14.82B</span>
          <span className="text-gray-500">•</span>
          <span className="text-alert-critical">0-DAYS_NEUTRALIZED: 142</span>
        </div>
      </div>

      {/* Main Grid: Headline Left / Interactive Visual Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Core Statement (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-phosphor bg-phosphor/5 border border-phosphor/20 px-3 py-1.5 rounded uppercase">
            <Shield className="w-3.5 h-3.5 text-phosphor" />
            <span>Offensive Web3 Security Labs</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans">
            We don't audit for compliance. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-phosphor via-cyan-300 to-cyber-cyan glow-phosphor">
              We break protocols before black-hats do.
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-400 leading-relaxed font-mono">
            <strong className="text-gray-200">ELASTIC CURVE</strong> operates as an elite offensive security division. 
            We synthesize real exploit PoCs, execute deep bytecode reverse-engineering, and mathematically prove protocol invariants across EVM, SVM, Move, and Cosmos.
          </p>

          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 pt-2 font-mono">
            <div className="bg-panel border border-panelBorder p-3 rounded">
              <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">$14.8B+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">TVL Secured</div>
            </div>
            <div className="bg-panel border border-panelBorder p-3 rounded">
              <div className="text-xl sm:text-2xl font-bold text-phosphor tracking-tight">0</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Post-Signoff Exploits</div>
            </div>
            <div className="bg-panel border border-panelBorder p-3 rounded">
              <div className="text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight">520+</div>
              <div className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Protocols Hardened</div>
            </div>
          </div>

          {/* Interactive CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3 font-mono">
            <button
              onClick={onOpenAuditModal}
              className="flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold px-6 py-3.5 rounded text-sm transition-all duration-200 shadow-phosphor hover:scale-[1.02]"
            >
              <Zap className="w-4 h-4 fill-current" />
              <span>[DISPATCH_AUDIT_REQUEST]</span>
            </button>
            <a
              href="#reports"
              className="flex items-center justify-center gap-2 bg-panel hover:bg-carbon text-gray-200 hover:text-white border border-panelBorder hover:border-gray-600 px-5 py-3.5 rounded text-sm transition-colors"
            >
              <span>[EXPLORE_VERIFIED_LEDGER]</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="text-[11px] text-gray-500 font-mono flex items-center gap-2 pt-1">
            <span className="text-phosphor">✓</span> Fast-track engagement: War-room response within 4 hours. PGP encryption available.
          </div>
        </div>

        {/* Right Col: Interactive Visualizer & Fuzzer Simulator (7 cols) */}
        <div className="lg:col-span-7">
          <div className="bg-carbon border border-panelBorder rounded-lg overflow-hidden shadow-2xl">
            {/* Window Header */}
            <div className="bg-panel border-b border-panelBorder px-4 py-3 flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2 font-mono text-xs">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-phosphor/80 inline-block"></span>
                <span className="ml-2 text-gray-300 font-semibold">ELASTIC_CURVE::SECURITY_RUNTIME_v4.1</span>
              </div>

              {/* Toggle Mode */}
              <div className="flex items-center bg-void p-0.5 rounded border border-panelBorder text-xs font-mono">
                <button
                  onClick={() => setActiveTab('simulation')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeTab === 'simulation'
                      ? 'bg-panelBorder text-phosphor shadow'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  [TOPOLOGY_CANVAS]
                </button>
                <button
                  onClick={() => setActiveTab('fuzzer')}
                  className={`px-3 py-1 rounded transition-all ${
                    activeTab === 'fuzzer'
                      ? 'bg-panelBorder text-cyan-400 shadow'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  [ATTACK_FUZZER]
                </button>
              </div>
            </div>

            {/* Display Area */}
            {activeTab === 'simulation' ? (
              <div className="p-2">
                <InteractiveCurveCanvas />
              </div>
            ) : (
              <div className="p-4 space-y-4 font-mono">
                {/* Attack Scenario Switcher */}
                <div className="flex flex-wrap items-center justify-between gap-2 bg-void/70 p-2.5 rounded border border-panelBorder">
                  <div className="flex items-center gap-2 text-xs">
                    <Activity className="w-4 h-4 text-cyan-400 animate-spin" />
                    <span className="text-gray-400">VECTOR:</span>
                    <select
                      value={fuzzerPreset}
                      onChange={(e) => restartFuzzer(e.target.value as any)}
                      className="bg-panel border border-panelBorder text-white text-xs px-2 py-1 rounded focus:outline-none focus:border-phosphor"
                    >
                      <option value="reentrancy">EVM: Read-Only Reentrancy & Balancer Flashloan</option>
                      <option value="cpi_hijack">SVM/Solana: Missing Signer CPI Hijack</option>
                      <option value="oracle_manipulation">Multichain: L2 Sequencer TWAP Manipulation</option>
                    </select>
                  </div>

                  <button
                    onClick={() => restartFuzzer(fuzzerPreset)}
                    className="flex items-center gap-1.5 text-xs bg-panel border border-panelBorder hover:border-phosphor px-2.5 py-1 rounded text-gray-300 hover:text-phosphor transition-colors"
                  >
                    <RefreshCw className="w-3 h-3" />
                    <span>RERUN</span>
                  </button>
                </div>

                {/* Simulated Terminal Screen */}
                <div className="bg-void/95 border border-panelBorder rounded p-4 h-[380px] overflow-y-auto scanlines text-xs text-gray-300 space-y-2">
                  <div className="text-gray-500 border-b border-panelBorder/50 pb-2 flex justify-between">
                    <span>STATION: //WAR_ROOM/AUDIT_AGENT_#09</span>
                    <span>ENGINE: Foundry + Medusa + Z3 Prover</span>
                  </div>

                  {terminalLogs.map((log, idx) => {
                    const isAlert = log.includes('[ALERT]') || log.includes('[CRITICAL_BUG]') || log.includes('[EXPLOIT_VECTOR]');
                    const isSuccess = log.includes('[VERIFIED]') || log.includes('[PATCH_GENERATED]');
                    const isInit = log.includes('[INIT]') || log.includes('>>>');

                    return (
                      <div
                        key={idx}
                        className={`leading-relaxed transition-all duration-200 ${
                          isAlert
                            ? 'text-alert-critical font-bold'
                            : isSuccess
                            ? 'text-phosphor font-semibold'
                            : isInit
                            ? 'text-cyber-cyan'
                            : 'text-gray-300'
                        }`}
                      >
                        {log}
                      </div>
                    );
                  })}

                  {fuzzerState === 'running' && (
                    <div className="flex items-center gap-2 text-phosphor pt-2">
                      <span className="w-2 h-2 rounded-full bg-phosphor animate-ping"></span>
                      <span>FUZZING IN PROCESS ({progress}%)</span>
                      <span className="cursor-blink"></span>
                    </div>
                  )}

                  {fuzzerState === 'completed' && (
                    <div className="mt-4 p-3 bg-phosphor/10 border border-phosphor/30 rounded flex items-center justify-between text-xs text-phosphor">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-phosphor" />
                        <span>PROOF GENERATED: ZERO EXPLOITABILITY AFTER ELASTIC CURVE PATCH</span>
                      </div>
                      <span className="text-[10px] bg-phosphor/20 px-2 py-0.5 rounded">SHA256::9C7B...E14A</span>
                    </div>
                  )}
                </div>

                {/* Progress Bar */}
                <div className="space-y-1">
                  <div className="flex justify-between text-[11px] text-gray-400">
                    <span>STATE SPACE EXPLORATION:</span>
                    <span>{progress}% COMPLETED</span>
                  </div>
                  <div className="w-full bg-void h-1.5 rounded-full overflow-hidden border border-panelBorder">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-phosphor h-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
