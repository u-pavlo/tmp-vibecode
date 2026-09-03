import React, { useState } from 'react';
import { Layers, ShieldAlert, Cpu, CheckCircle, Flame, ArrowRight, Code } from 'lucide-react';

export const MultichainMatrix: React.FC = () => {
  const [selectedChain, setSelectedChain] = useState<'evm' | 'svm' | 'move' | 'cosmos'>('evm');

  const chains = [
    {
      id: 'evm',
      name: 'EVM_CORE',
      subtitle: 'Ethereum / L2s / Monad',
      badge: 'Solidity / Vyper / Yul',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
      activeBorder: 'border-cyan-400',
      vectors: [
        {
          name: 'Transient Storage (EIP-1153) Reentrancy',
          severity: 'CRITICAL',
          desc: 'Transient storage (TSTORE/TLOAD) cleared at transaction end breaks conventional storage reentrancy guards.',
          poc: 'attacker.sol: flashloan() -> hookCallback() -> tstore(reentrancy_slot, 0)',
          mitigation: 'Implement transient reentrancy guards with atomic transient clear checks in all external callframes.'
        },
        {
          name: 'Uniswap v4 Dynamic Hook Privilege Hijacking',
          severity: 'HIGH',
          desc: 'Unchecked `beforeSwap` or `afterAddLiquidity` return values allowing malicious pool key manipulation.',
          poc: 'Hook.sol: executeArbitrage() with spoofed BalanceDelta',
          mitigation: 'Formal invariant proof verifying delta settling through PoolManager balance accounting.'
        },
        {
          name: 'ERC-4337 Paymaster Signature & Gas Siphoning',
          severity: 'HIGH',
          desc: 'PostOp execution failure that forces bundler to sponsor reverted userOps, draining paymaster deposit.',
          poc: 'UserOp.paymasterAndData forged gas limits trigger bundler penalty',
          mitigation: 'Context-aware gas bounding and strict verificationGasLimit validation.'
        }
      ],
      tools: ['Foundry Invariant Harness', 'Medusa Symbolic Fuzzer', 'Halmos Formally Prover', 'Slither Custom Detectors']
    },
    {
      id: 'svm',
      name: 'SOLANA_SVM',
      subtitle: 'Solana / Eclipse / Firedancer',
      badge: 'Rust / Anchor / Native BPF',
      color: 'text-phosphor',
      borderColor: 'border-phosphor/30',
      activeBorder: 'border-phosphor',
      vectors: [
        {
          name: 'CPI (Cross-Program Invocation) Account Hijack',
          severity: 'CRITICAL',
          desc: 'Failure to verify `account_info.owner == &spl_token::id()` allowing arbitrary malicious program substitution.',
          poc: 'invoke_signed(&fake_instruction, &[fake_token_program, victim_vault])',
          mitigation: 'Enforce Anchor `Program<\'info, Token>` constraints and explicit program address assert_eq!.'
        },
        {
          name: 'PDA Seed Canonicalization & Bump Collision',
          severity: 'CRITICAL',
          desc: 'Using client-supplied bumps or variable-length seeds that can collide with different account derivations.',
          poc: 'find_program_address(&[user_input], program_id) overlapping authority space',
          mitigation: 'Hardcode canonical bump seeds inside Anchor accounts (`bump = vault.bump`) and fixed-length hashing.'
        },
        {
          name: 'Remaining Accounts Deserialization Abuse',
          severity: 'HIGH',
          desc: 'Iterating over ctx.remaining_accounts without verifying duplications or ownership checks.',
          poc: 'Passing duplicated account keys in oracle array to skew median price calculation',
          mitigation: 'Implement strict array uniqueness checks and account discriminator validation.'
        }
      ],
      tools: ['Anchor Linter Suite', 'Trident Fuzzing Framework', 'Solana BPF Instruction Trace', 'Firedancer Compatibility Matrix']
    },
    {
      id: 'move',
      name: 'MOVE_VM',
      subtitle: 'Aptos / Sui / Movement',
      badge: 'Move Bytecode / Object Model',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
      activeBorder: 'border-amber-400',
      vectors: [
        {
          name: 'Dynamic Field Dangling Object Reference',
          severity: 'CRITICAL',
          desc: 'In Sui Move, borrowing dynamic fields while dropping parent object capability in parallel execution.',
          poc: 'dynamic_field::borrow_mut(&mut obj) across conflicting PTB transactions',
          mitigation: 'Strict linear capability life-cycle verification with Move Prover.'
        },
        {
          name: 'Capability Leakage via Public Entry Functions',
          severity: 'HIGH',
          desc: 'Exposing administrative `signer` capabilities through unconstrained `public entry` dispatch.',
          poc: 'admin_mint(caller: &signer) called without protocol whitelist verification',
          mitigation: 'Enforce friend visibility and Move 2024 positional parameter restrictions.'
        },
        {
          name: 'Flash Loan Hot Potato Bypass',
          severity: 'HIGH',
          desc: 'Improper receipt structuring allowing flash loan debt resolution without full principal repayment.',
          poc: 'struct Receipt without drop; unpack without fee calculation assertion',
          mitigation: 'Mathematical assertion on coin value equality inside the receipt destructor.'
        }
      ],
      tools: ['Aptos Move Prover', 'Sui PTB Fuzzer', 'Bytecode Verifier CLI', 'Formal Specification Language (MSL)']
    },
    {
      id: 'cosmos',
      name: 'COSMOS_IBC',
      subtitle: 'CosmWasm / Appchains / Celestia',
      badge: 'Rust / CosmWasm / Tendermint',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
      activeBorder: 'border-purple-400',
      vectors: [
        {
          name: 'IBC Packet Replay & Timeout Race Condition',
          severity: 'CRITICAL',
          desc: 'Packet acknowledgment handling vulnerable to malicious relayer re-submission before state update.',
          poc: 'on_packet_ack() re-processing mint without sequence nonce check',
          mitigation: 'Cryptographic nonces and strict monotonic sequence validation on channel state.'
        },
        {
          name: 'CosmWasm Submessage Execution Reentrancy',
          severity: 'HIGH',
          desc: 'External SubMsg execution order allows state modification before the Reply handler executes.',
          poc: 'SubMsg::reply_on_success() where state mutated before handler validates balances',
          mitigation: 'Atomic snapshotting and optimistic lock patterns across contract calls.'
        },
        {
          name: 'Gas Exhaustion State Pruning Vector',
          severity: 'MEDIUM',
          desc: 'Unbounded storage vectors in CosmWasm storage causing block gas limit exhaustion during iterations.',
          poc: 'Map::range() iterating over 100k user positions in single transaction',
          mitigation: 'Indexed pagination and off-chain indexer delegation with cryptographic commitments.'
        }
      ],
      tools: ['CosmWasm Multi-Test Harness', 'Hermes IBC Simulator', 'Tendermint Consensus Fuzzer', 'Bech32 Address Sanitizers']
    }
  ];

  const activeChainData = chains.find((c) => c.id === selectedChain)!;

  return (
    <section id="vectors" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-l-2 border-phosphor pl-4 mb-10">
        <div className="text-xs text-phosphor tracking-widest uppercase mb-1">
          // SECTION: 0x01_MULTICHAIN_MATRIX
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Cross-Ecosystem Attack Vectors & Zero-Day Neutralization
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          Different execution environments require completely distinct offensive heuristics. We don't apply generic rules; our auditors reverse-engineer bytecode down to VM-specific memory layouts and execution models.
        </p>
      </div>

      {/* Chain Selector Tabs */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
        {chains.map((chain) => {
          const isSelected = chain.id === selectedChain;
          return (
            <button
              key={chain.id}
              onClick={() => setSelectedChain(chain.id as any)}
              className={`text-left p-4 rounded-lg border transition-all duration-200 ${
                isSelected
                  ? `bg-panel ${chain.activeBorder} shadow-lg ring-1 ring-white/10`
                  : 'bg-carbon/60 border-panelBorder hover:border-gray-600 hover:bg-carbon'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-xs font-bold ${chain.color}`}>
                  {chain.name}
                </span>
                {isSelected && (
                  <span className="w-2 h-2 rounded-full bg-phosphor animate-pulse"></span>
                )}
              </div>
              <div className="text-sm font-semibold text-white mt-1">{chain.subtitle}</div>
              <div className="text-[11px] text-gray-500 mt-1">{chain.badge}</div>
            </button>
          );
        })}
      </div>

      {/* Selected Chain Attack Panel */}
      <div className="bg-carbon border border-panelBorder rounded-lg p-6 lg:p-8">
        <div className="flex flex-wrap items-center justify-between border-b border-panelBorder pb-4 mb-6 gap-3">
          <div className="flex items-center gap-3">
            <span className={`text-xl font-bold ${activeChainData.color}`}>
              {activeChainData.name}::VULNERABILITY_CATALOG
            </span>
            <span className="text-xs bg-void border border-panelBorder px-2.5 py-1 rounded text-gray-400">
              {activeChainData.badge}
            </span>
          </div>
          <div className="text-xs text-gray-400">
            AUDIT_GRADE: <span className="text-phosphor font-bold">MILITARY_OFFENSIVE_SPEC</span>
          </div>
        </div>

        {/* Vectors List */}
        <div className="space-y-4">
          {activeChainData.vectors.map((vector, i) => (
            <div
              key={i}
              className="bg-panel border border-panelBorder hover:border-gray-600 rounded-lg p-5 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500 text-xs">#0{i + 1}</span>
                  <h3 className="text-base font-bold text-white font-mono">{vector.name}</h3>
                </div>
                <span
                  className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    vector.severity === 'CRITICAL'
                      ? 'bg-alert-critical/20 text-alert-critical border border-alert-critical/40'
                      : vector.severity === 'HIGH'
                      ? 'bg-alert-high/20 text-alert-high border border-alert-high/40'
                      : 'bg-alert-medium/20 text-alert-medium border border-alert-medium/40'
                  }`}
                >
                  [{vector.severity}_SEVERITY]
                </span>
              </div>

              <p className="text-xs text-gray-400 mb-3">{vector.desc}</p>

              {/* Technical breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-void/80 p-3 rounded border border-panelBorder/70">
                <div>
                  <div className="text-[10px] text-red-400 font-bold mb-1 flex items-center gap-1">
                    <Flame className="w-3 h-3 text-red-400" />
                    <span>EXPLOIT_PROOF_OF_CONCEPT (PoC):</span>
                  </div>
                  <code className="text-gray-300 block text-[11px] bg-carbon p-2 rounded border border-panelBorder/50 overflow-x-auto">
                    {vector.poc}
                  </code>
                </div>
                <div>
                  <div className="text-[10px] text-phosphor font-bold mb-1 flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-phosphor" />
                    <span>ELASTIC_CURVE_HARDENING:</span>
                  </div>
                  <div className="text-gray-300 text-[11px] bg-carbon p-2 rounded border border-panelBorder/50">
                    {vector.mitigation}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tooling Stack for this chain */}
        <div className="mt-6 pt-4 border-t border-panelBorder flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3">
          <span className="text-gray-500 uppercase">Automated Rig & Symbolic Engines:</span>
          <div className="flex flex-wrap gap-2">
            {activeChainData.tools.map((tool, idx) => (
              <span
                key={idx}
                className="bg-void border border-panelBorder px-2.5 py-1 rounded text-gray-300 text-[11px]"
              >
                ⚙ {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
