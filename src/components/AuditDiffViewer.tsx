import React, { useState } from 'react';
import { GitCompare, AlertTriangle, ShieldCheck, Check, Copy } from 'lucide-react';

export const AuditDiffViewer: React.FC = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  const cases = [
    {
      title: 'EVM::LendingPool.sol — Collateral Rounding to Zero Exploit',
      file: 'contracts/core/LendingPoolCollateral.sol',
      commitBefore: 'd8a391c (VULNERABLE)',
      commitAfter: '01fe99b (SECURED)',
      severity: 'CRITICAL',
      fundsAtRisk: '$38,400,000 USD',
      codeDiff: [
        { type: 'normal', line: '24', content: '    function liquidatePosition(address user, uint256 debtToCover) external {' },
        { type: 'normal', line: '25', content: '        uint256 userDebt = userPositions[user].borrowedAmount;' },
        { type: 'normal', line: '26', content: '        require(debtToCover <= userDebt, "EXCEEDS_DEBT");' },
        { type: 'normal', line: '27', content: '        ' },
        { type: 'delete', line: '28', content: '-       // VULN: Downcasting and integer division truncates to zero for tiny amounts' },
        { type: 'delete', line: '29', content: '-       uint256 collateralToSeize = (debtToCover * exchangeRate()) / 1e18;' },
        { type: 'delete', line: '30', content: '-       _burnDebt(user, debtToCover);' },
        { type: 'delete', line: '31', content: '-       _transferCollateral(msg.sender, collateralToSeize);' },
        { type: 'add',    line: '28', content: '+       // ELASTIC_CURVE FIX: Rounding favor protocol; require strictly non-zero collateral' },
        { type: 'add',    line: '29', content: '+       uint256 collateralToSeize = Math.mulDiv(debtToCover, exchangeRate(), 1e18, Math.Rounding.Ceil);' },
        { type: 'add',    line: '30', content: '+       if (collateralToSeize == 0) revert InvalidLiquidationAmount();' },
        { type: 'add',    line: '31', content: '+       _burnDebt(user, debtToCover);' },
        { type: 'add',    line: '32', content: '+       _transferCollateral(msg.sender, collateralToSeize);' },
        { type: 'normal', line: '33', content: '        emit Liquidated(user, msg.sender, debtToCover, collateralToSeize);' },
        { type: 'normal', line: '34', content: '    }' },
      ],
      formalProof: 'Z3 PROOF: ∀ (d, r) ∈ [1, 2^256-1]² : mulDiv(d, r, 1e18, Ceil) ≥ 1 ∧ protocolSolvency == true'
    },
    {
      title: 'SVM::staking_vault.rs — Missing PDA Bump Validation Hijack',
      file: 'programs/vault/src/instructions/claim_rewards.rs',
      commitBefore: '7b22d1a (VULNERABLE)',
      commitAfter: '9c5520e (SECURED)',
      severity: 'CRITICAL',
      fundsAtRisk: '$12,900,000 USD',
      codeDiff: [
        { type: 'normal', line: '42', content: '    #[account(' },
        { type: 'delete', line: '43', content: '-       mut,' },
        { type: 'delete', line: '44', content: '-       seeds = [b"reward_vault", user.key().as_ref()],' },
        { type: 'delete', line: '45', content: '-       bump // VULN: Accepts any bump supplied by malicious client, allowing shadow accounts' },
        { type: 'add',    line: '43', content: '+       mut,' },
        { type: 'add',    line: '44', content: '+       seeds = [b"reward_vault", user.key().as_ref()],' },
        { type: 'add',    line: '45', content: '+       bump = user_state.canonical_bump, // ELASTIC_CURVE FIX: enforce persistent canonical bump' },
        { type: 'add',    line: '46', content: '+       has_one = authority @ SecurityError::UnauthorizedCaller' },
        { type: 'normal', line: '47', content: '    )]' },
        { type: 'normal', line: '48', content: '    pub reward_vault: Account<\'info, TokenAccount>,' },
      ],
      formalProof: 'SVM PROVER: Canonical seed invariant verified: Pubkey::create_program_address(seeds) == reward_vault.key()'
    },
    {
      title: 'MOVE::flash_borrow.move — Linear Receipt Drop Without Debt Settle',
      file: 'sources/flash_lender.move',
      commitBefore: 'ee84c10 (VULNERABLE)',
      commitAfter: '14bb99a (SECURED)',
      severity: 'CRITICAL',
      fundsAtRisk: '$9,200,000 USD',
      codeDiff: [
        { type: 'delete', line: '18', content: '-   struct FlashReceipt has drop {' },
        { type: 'delete', line: '19', content: '-       amount: u64,' },
        { type: 'delete', line: '20', content: '-       fee: u64' },
        { type: 'delete', line: '21', content: '-   } // VULN: \'has drop\' allows borrower to discard receipt without returning coins!' },
        { type: 'add',    line: '18', content: '+   // ELASTIC_CURVE FIX: Hot Potato pattern; receipt MUST NOT have drop or store abilities' },
        { type: 'add',    line: '19', content: '+   struct FlashReceipt {' },
        { type: 'add',    line: '20', content: '+       amount: u64,' },
        { type: 'add',    line: '21', content: '+       fee: u64' },
        { type: 'add',    line: '22', content: '+   }' },
        { type: 'normal', line: '23', content: '    public fun repay_flash_loan(self: &mut Pool, receipt: FlashReceipt, payment: Coin) {' },
      ],
      formalProof: 'MOVE PROVER: Move compiler bytecode verification rejects dead receipts; balance invariance enforced at exit.'
    }
  ];

  const current = cases[selectedCase];

  const handleCopy = () => {
    const text = current.codeDiff.map(c => c.content).join('\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="diff" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-l-2 border-cyan-400 pl-4 mb-8">
        <div className="text-xs text-cyan-400 tracking-widest uppercase mb-1">
          // SECTION: 0x02_VULNERABILITY_DIFF_ENGINE
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Exploit PoC vs Hardened Patch Inspector
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          We don’t just write generic reports with vague recommendations. We deliver compile-ready, mathematically proven git diffs that neutralize vulnerabilities at the opcode and bytecode level.
        </p>
      </div>

      {/* Case Selector Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {cases.map((c, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCase(idx)}
            className={`text-xs px-4 py-2.5 rounded border transition-all ${
              selectedCase === idx
                ? 'bg-panel border-phosphor text-white font-bold shadow-phosphor-sm'
                : 'bg-carbon border-panelBorder text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            CASE_0{idx + 1}: {c.title.split('—')[0]}
          </button>
        ))}
      </div>

      {/* Code Viewer Panel */}
      <div className="bg-carbon border border-panelBorder rounded-lg overflow-hidden shadow-2xl">
        {/* Top File Bar */}
        <div className="bg-panel border-b border-panelBorder px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-3">
            <GitCompare className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-bold">{current.file}</span>
            <span className="text-gray-500">|</span>
            <span className="text-alert-critical font-bold bg-alert-critical/15 px-2 py-0.5 rounded border border-alert-critical/30">
              SAVED: {current.fundsAtRisk}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-gray-500 text-[11px]">
              DIFF: <code className="text-red-400">{current.commitBefore}</code> → <code className="text-phosphor">{current.commitAfter}</code>
            </span>
            <button
              onClick={handleCopy}
              className="flex items-center gap-1.5 bg-void border border-panelBorder hover:border-phosphor px-2.5 py-1 rounded text-gray-300 hover:text-phosphor transition-colors text-[11px]"
            >
              {copied ? <Check className="w-3 h-3 text-phosphor" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'COPIED' : 'COPY_PATCH'}</span>
            </button>
          </div>
        </div>

        {/* Diff lines */}
        <div className="p-4 bg-void/90 overflow-x-auto text-xs leading-relaxed scanlines">
          <div className="space-y-0.5">
            {current.codeDiff.map((line, idx) => {
              const isDel = line.type === 'delete';
              const isAdd = line.type === 'add';

              return (
                <div
                  key={idx}
                  className={`flex items-center font-mono py-0.5 px-2 rounded ${
                    isDel
                      ? 'bg-alert-critical/15 text-red-300 border-l-2 border-alert-critical'
                      : isAdd
                      ? 'bg-phosphor/15 text-green-300 border-l-2 border-phosphor'
                      : 'text-gray-400 hover:bg-white/5'
                  }`}
                >
                  <span className="w-8 select-none text-gray-600 text-[10px] pr-2 text-right">
                    {line.line}
                  </span>
                  <pre className="flex-1 font-mono">{line.content}</pre>
                </div>
              );
            })}
          </div>
        </div>

        {/* Proof of Correctness Footer */}
        <div className="bg-panel border-t border-panelBorder p-3.5 flex flex-wrap items-center justify-between text-xs gap-2">
          <div className="flex items-center gap-2 text-gray-300">
            <ShieldCheck className="w-4 h-4 text-phosphor" />
            <span className="font-bold text-phosphor">FORMAL VERIFICATION STATUS:</span>
            <span className="text-gray-400 font-mono text-[11px]">{current.formalProof}</span>
          </div>
          <span className="text-[11px] text-gray-500">ENGINE: Z3 / SMT-LIB2</span>
        </div>
      </div>
    </section>
  );
};
