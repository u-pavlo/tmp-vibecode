import React, { useState } from 'react';
import { Calculator, Shield, Clock, Users, ArrowRight, Zap, Check } from 'lucide-react';

interface ScopeEstimatorProps {
  onOpenAuditModalWithScope: (scopeData: any) => void;
}

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onOpenAuditModalWithScope }) => {
  const [sloc, setSloc] = useState<number>(2500);
  const [ecosystem, setEcosystem] = useState<'evm' | 'svm' | 'move' | 'cosmos' | 'multichain'>('multichain');
  const [protocolType, setProtocolType] = useState<'lending' | 'amm' | 'bridge' | 'staking' | 'zk'>('lending');
  const [urgency, setUrgency] = useState<'standard' | 'accelerated' | 'emergency'>('accelerated');

  // Calculation heuristic
  const baseDays = Math.ceil(sloc / 400);
  const chainMultiplier = ecosystem === 'multichain' ? 1.6 : ecosystem === 'cosmos' ? 1.3 : 1.0;
  const protoMultiplier = protocolType === 'bridge' ? 1.5 : protocolType === 'zk' ? 1.7 : 1.2;
  const calculatedDays = Math.max(5, Math.round(baseDays * chainMultiplier * protoMultiplier * (urgency === 'emergency' ? 0.4 : urgency === 'accelerated' ? 0.7 : 1.0)));

  const auditorCount = urgency === 'emergency' ? 4 : sloc > 5000 ? 3 : 2;
  const fuzzingRounds = (sloc * 8500).toLocaleString();

  const handleProceed = () => {
    onOpenAuditModalWithScope({
      sloc,
      ecosystem,
      protocolType,
      urgency,
      estimatedDays: calculatedDays,
      auditorCount
    });
  };

  return (
    <section id="estimator" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-l-2 border-amber-400 pl-4 mb-8">
        <div className="text-xs text-amber-400 tracking-widest uppercase mb-1">
          // SECTION: 0x04_ENGAGEMENT_SCOPE_CALCULATOR
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Audit Scope, Fuzzing Runs & Turnaround Estimator
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          Transparent metrics. Input your codebase parameters to compute formal verification cycles, dedicated offensive researchers, and expected time to cryptographic sign-off.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-carbon border border-panelBorder rounded-lg p-6 lg:p-8 shadow-2xl">
        {/* Left Form: Inputs (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* SLOC Slider */}
          <div className="bg-panel p-4 rounded border border-panelBorder space-y-3">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-300 font-bold">CODEBASE COMPLEXITY (nSLOC):</span>
              <span className="text-phosphor font-bold text-sm bg-void px-2.5 py-1 rounded border border-panelBorder">
                {sloc.toLocaleString()} Lines of Code
              </span>
            </div>
            <input
              type="range"
              min="300"
              max="15000"
              step="100"
              value={sloc}
              onChange={(e) => setSloc(parseInt(e.target.value))}
              className="w-full accent-phosphor cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-gray-500">
              <span>300 (Micro-Vault)</span>
              <span>5,000 (Complex DeFi)</span>
              <span>15,000+ (Modular L1/L2)</span>
            </div>
          </div>

          {/* Ecosystem selection */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-bold">TARGET ECOSYSTEM & VM:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'multichain', label: 'Cross-Chain Multi' },
                { id: 'evm', label: 'EVM (Solidity/Yul)' },
                { id: 'svm', label: 'SVM (Solana/Anchor)' },
                { id: 'move', label: 'Move (Aptos/Sui)' },
                { id: 'cosmos', label: 'Cosmos (CosmWasm)' }
              ].map((eco) => (
                <button
                  key={eco.id}
                  onClick={() => setEcosystem(eco.id as any)}
                  className={`text-xs py-2 px-3 rounded border text-left transition-all ${
                    ecosystem === eco.id
                      ? 'bg-panel border-cyan-400 text-cyan-300 font-bold'
                      : 'bg-void border-panelBorder text-gray-400 hover:text-white'
                  }`}
                >
                  {eco.label}
                </button>
              ))}
            </div>
          </div>

          {/* Protocol Type */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-bold">PROTOCOL ARCHITECTURE:</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'lending', label: 'Lending & CDP Vaults' },
                { id: 'amm', label: 'DEX / AMM / Perps' },
                { id: 'bridge', label: 'Bridge / Interop Relayer' },
                { id: 'staking', label: 'Liquid Staking & Restaking' },
                { id: 'zk', label: 'ZK-Rollup & Circuits' }
              ].map((proto) => (
                <button
                  key={proto.id}
                  onClick={() => setProtocolType(proto.id as any)}
                  className={`text-xs py-2 px-3 rounded border text-left transition-all ${
                    protocolType === proto.id
                      ? 'bg-panel border-phosphor text-phosphor font-bold'
                      : 'bg-void border-panelBorder text-gray-400 hover:text-white'
                  }`}
                >
                  {proto.label}
                </button>
              ))}
            </div>
          </div>

          {/* Urgency SLA */}
          <div className="space-y-2">
            <label className="text-xs text-gray-400 font-bold">ENGAGEMENT PRIORITY & TIMELINE:</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'standard', title: 'Standard', desc: 'Normal pacing' },
                { id: 'accelerated', title: 'Accelerated', desc: 'Dual-lead sprint' },
                { id: 'emergency', title: 'War Room (72h)', desc: '24/7 Red-team' }
              ].map((urg) => (
                <button
                  key={urg.id}
                  onClick={() => setUrgency(urg.id as any)}
                  className={`text-xs p-2.5 rounded border text-left transition-all ${
                    urgency === urg.id
                      ? 'bg-panel border-alert-critical text-white font-bold'
                      : 'bg-void border-panelBorder text-gray-400 hover:text-white'
                  }`}
                >
                  <div className={urgency === urg.id ? 'text-red-400' : 'text-gray-300'}>{urg.title}</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">{urg.desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Output: Estimation Summary (5 cols) */}
        <div className="lg:col-span-5 bg-panel border border-panelBorder rounded-lg p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-panelBorder pb-3">
              <span className="text-xs text-gray-400 uppercase font-bold flex items-center gap-1.5">
                <Calculator className="w-4 h-4 text-phosphor" />
                ESTIMATED_RESOURCES
              </span>
              <span className="text-[10px] text-phosphor bg-phosphor/10 px-2 py-0.5 rounded border border-phosphor/20">
                DYNAMIC_ALLOCATION
              </span>
            </div>

            {/* Metrics cards */}
            <div className="space-y-3 text-xs">
              <div className="bg-void p-3 rounded border border-panelBorder flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>ESTIMATED TURNAROUND:</span>
                </div>
                <span className="font-bold text-base text-white">~{calculatedDays} Days</span>
              </div>

              <div className="bg-void p-3 rounded border border-panelBorder flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300">
                  <Users className="w-4 h-4 text-phosphor" />
                  <span>DEDICATED RESEARCHERS:</span>
                </div>
                <span className="font-bold text-base text-phosphor">{auditorCount} Senior White-Hats</span>
              </div>

              <div className="bg-void p-3 rounded border border-panelBorder flex items-center justify-between">
                <div className="flex items-center gap-2 text-gray-300">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span>STATE MUTATION PASSES:</span>
                </div>
                <span className="font-bold text-base text-amber-300">{fuzzingRounds}</span>
              </div>
            </div>

            {/* Deliverables checklist */}
            <div className="border-t border-panelBorder pt-4 space-y-2 text-[11px] text-gray-400">
              <div className="text-gray-300 font-bold text-xs mb-1">INCLUDED DELIVERABLES:</div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-3.5 h-3.5 text-phosphor" />
                <span>Executable Exploit PoCs (Foundry/Anchor tests)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-3.5 h-3.5 text-phosphor" />
                <span>Compile-ready Git Diff remediation patches</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-3.5 h-3.5 text-phosphor" />
                <span>Z3 SMT formal mathematical invariant proof</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Check className="w-3.5 h-3.5 text-phosphor" />
                <span>Free remediated code re-test within 14 days</span>
              </div>
            </div>
          </div>

          <button
            onClick={handleProceed}
            className="w-full flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold py-3.5 rounded text-xs transition-all shadow-phosphor hover:scale-[1.02]"
          >
            <span>[LOCK_ESTIMATE_&_SUBMIT_CODE]</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};
