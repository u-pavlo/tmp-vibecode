import React from 'react';
import { Award, ShieldAlert, CheckCircle, ExternalLink, Flame } from 'lucide-react';

export const HallOfFame: React.FC = () => {
  const disclosures = [
    {
      cve: 'CVE-2025-49110',
      title: 'Cross-Chain Bridge Token Duplication & Root Hash Poisoning',
      bounty: '$1,000,000 USD (Max Tier)',
      ecosystem: 'COSMOS / EVM BRIDGE',
      impact: '$120M+ TVL Protected',
      severity: 'CRITICAL (CVSS 9.8)',
      desc: 'Discovered an asynchronous packet processing race condition where fraudulent light-client proofs could be accepted during validator set re-keying.',
      status: 'DISCLOSED & PATCHED'
    },
    {
      cve: 'CVE-2025-38812',
      title: 'SVM Account Substitution in Liquid Restaking Pool',
      bounty: '$500,000 USD',
      ecosystem: 'SOLANA SVM',
      impact: '$45M+ TVL Protected',
      severity: 'CRITICAL (CVSS 9.6)',
      desc: 'Bypassed Anchor account discriminator check via uninitialized sysvar memory, allowing unauthorized reward extraction.',
      status: 'DISCLOSED & PATCHED'
    },
    {
      cve: 'CVE-2024-91823',
      title: 'EIP-1153 Transient Storage Inter-Contract Reentrancy',
      bounty: '$250,000 USD',
      ecosystem: 'ETHEREUM L1 / ARBITRUM',
      impact: '$68M+ TVL Protected',
      severity: 'HIGH (CVSS 8.9)',
      desc: 'Demonstrated read-only reentrancy attack against lending vault oracle relying on transient state during flash loan liquidations.',
      status: 'DISCLOSED & PATCHED'
    },
    {
      cve: 'CVE-2024-81720',
      title: 'Move VM Parallel Execution Dynamic Field Lock Deadlock',
      bounty: '$150,000 USD',
      ecosystem: 'APTOS / SUI',
      impact: 'Network Halt Prevented',
      severity: 'HIGH (CVSS 8.4)',
      desc: 'Exploited optimistic concurrency control engine by crafting cyclical dependency in dynamic child objects, causing validator consensus desync.',
      status: 'DISCLOSED & PATCHED'
    }
  ];

  return (
    <section id="cves" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-l-2 border-alert-critical pl-4 mb-8">
        <div className="text-xs text-alert-critical tracking-widest uppercase mb-1">
          // SECTION: 0x05_WHITE_HAT_DISCLOSURES & HALL_OF_FAME
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Zero-Day Discoveries & Tier-1 Disclosures
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          We actively hunt 0-days in core blockchain infrastructure, virtual machines, and foundational DeFi primitives. When we find an exploit, we coordinate responsible white-hat disclosures before malice occurs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {disclosures.map((item, idx) => (
          <div
            key={idx}
            className="bg-carbon border border-panelBorder hover:border-alert-critical/50 rounded-lg p-6 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-alert-critical bg-alert-critical/10 px-2 py-0.5 rounded border border-alert-critical/30 flex items-center gap-1">
                  <Flame className="w-3 h-3 text-alert-critical" />
                  {item.cve}
                </span>
                <span className="text-[10px] text-phosphor bg-phosphor/10 px-2 py-0.5 rounded border border-phosphor/20">
                  {item.status}
                </span>
              </div>

              <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                {item.title}
              </h3>

              <p className="text-xs text-gray-400 leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <div className="border-t border-panelBorder pt-4 space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-gray-500">ECOSYSTEM:</span>
                <span className="text-cyan-400 font-semibold">{item.ecosystem}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">PREVENTED COLLATERAL LOSS:</span>
                <span className="text-phosphor font-bold">{item.impact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-500">BOUNTY REWARD AWARDED:</span>
                <span className="text-amber-400 font-semibold">{item.bounty}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
