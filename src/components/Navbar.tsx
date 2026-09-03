import React, { useState } from 'react';
import { Shield, Terminal, Menu, X, Lock, ExternalLink, Code2 } from 'lucide-react';

interface NavbarProps {
  onOpenAuditModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAuditModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: '[01_ATTACK_VECTORS]', href: '#vectors' },
    { label: '[02_DIFF_INSPECTOR]', href: '#diff' },
    { label: '[03_AUDIT_LEDGER]', href: '#reports' },
    { label: '[04_SCOPE_CALCULATOR]', href: '#estimator' },
    { label: '[05_HALL_OF_FAME]', href: '#cves' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-void/90 backdrop-blur-md border-b border-panelBorder font-mono">
      {/* Super Top Ticker */}
      <div className="hidden md:flex items-center justify-between px-6 py-1 bg-carbon text-[11px] text-gray-400 border-b border-panelBorder/50">
        <div className="flex items-center gap-4">
          <span className="text-phosphor flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-phosphor inline-block"></span>
            NETWORK_STATUS: ALL ENGINES OPERATIONAL
          </span>
          <span className="text-gray-600">|</span>
          <span>EVM · SVM/SOLANA · MOVE · COSMOS</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-gray-500">PGP_FINGERPRINT: <code className="text-gray-300">4E92 A10C F882 19BC</code></span>
          <span className="text-gray-600">|</span>
          <a href="#reports" className="text-cyber-cyan hover:underline flex items-center gap-1">
            <span>PUBLIC_KEY</span>
            <ExternalLink className="w-2.5 h-2.5" />
          </a>
        </div>
      </div>

      {/* Main Nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded bg-panel border border-panelBorder flex items-center justify-center group-hover:border-phosphor transition-colors">
            <svg className="w-5 h-5 text-phosphor" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 18c6 0 6-12 12-12s6 12 6 12" />
              <circle cx="12" cy="12" r="2.5" fill="#00FF66" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-base tracking-wider text-white group-hover:text-phosphor transition-colors">
              ELASTIC_CURVE<span className="text-phosphor">::</span>
            </span>
            <span className="text-[10px] text-gray-400 tracking-widest -mt-1">OFFENSIVE_SECURITY</span>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs text-gray-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-phosphor transition-colors tracking-wide py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenAuditModal}
            className="flex items-center gap-2 bg-panel hover:bg-carbon text-phosphor border border-phosphor/50 hover:border-phosphor px-4 py-2 rounded text-xs tracking-wider transition-all duration-200 shadow-phosphor-sm hover:scale-[1.02]"
          >
            <Lock className="w-3.5 h-3.5 text-phosphor" />
            <span>[REQUEST_AUDIT]</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-panel border-b border-panelBorder px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-gray-300 hover:text-phosphor py-1.5"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-panelBorder">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAuditModal();
              }}
              className="w-full flex items-center justify-center gap-2 bg-phosphor text-void font-bold py-2.5 rounded text-xs"
            >
              <Lock className="w-3.5 h-3.5" />
              <span>[REQUEST_AUDIT_WAR_ROOM]</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
