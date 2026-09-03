import React from 'react';
import { Terminal, Shield, Lock, ExternalLink, Github, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-carbon border-t border-panelBorder text-xs text-gray-400 font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Col 1 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white tracking-wider text-sm">
                ELASTIC_CURVE<span className="text-phosphor">::</span>LABS
              </span>
            </div>
            <p className="text-[11px] text-gray-500 leading-relaxed">
              Offensive smart contract audits, formal verification, and zero-day research across EVM, SVM, Move, and Cosmos.
            </p>
            <div className="text-[10px] text-phosphor flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-phosphor"></span>
              WAR_ROOM_HOTLINE: active 24/7/365
            </div>
          </div>

          {/* Col 2 */}
          <div className="space-y-2">
            <div className="text-gray-300 font-bold uppercase text-[11px]">RESEARCH & PAPERS</div>
            <ul className="space-y-1 text-[11px]">
              <li><a href="#vectors" className="hover:text-phosphor">0x01: EIP-1153 Transient Exploits</a></li>
              <li><a href="#vectors" className="hover:text-phosphor">0x02: SVM CPI Hijacking Vectors</a></li>
              <li><a href="#vectors" className="hover:text-phosphor">0x03: Sui Move Dynamic Fields</a></li>
              <li><a href="#vectors" className="hover:text-phosphor">0x04: CosmWasm Async Race Conditions</a></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div className="space-y-2">
            <div className="text-gray-300 font-bold uppercase text-[11px]">VERIFICATION LEDGER</div>
            <ul className="space-y-1 text-[11px]">
              <li><a href="#reports" className="hover:text-phosphor">Public Reports Registry</a></li>
              <li><a href="#diff" className="hover:text-phosphor">Interactive Diff Viewer</a></li>
              <li><a href="#cves" className="hover:text-phosphor">Hall of Fame Disclosures</a></li>
              <li><a href="#estimator" className="hover:text-phosphor">Scope & Pricing Calculator</a></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div className="space-y-2">
            <div className="text-gray-300 font-bold uppercase text-[11px]">ENCRYPTED DISPATCH</div>
            <div className="bg-void p-2.5 rounded border border-panelBorder text-[10px] space-y-1">
              <div className="text-gray-400">PGP FINGERPRINT:</div>
              <div className="text-cyan-400 break-all font-mono">
                4E92 A10C F882 19BC 7014 91EE C3BA 0041
              </div>
            </div>
            <div className="text-[10px] text-gray-500 pt-1">
              SIGNAL / TELEGRAM: <span className="text-gray-300 font-bold">@elastic_curve_sec</span>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-panelBorder/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500">
          <div>
            © {new Date().getFullYear()} ELASTIC CURVE RESEARCH LABS. ALL CRYPTOGRAPHIC INVARIANTS ENFORCED.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-phosphor">STATUS: OPERATIONAL</span>
            <span>•</span>
            <span>NO COMPLIANCE THEATER</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
