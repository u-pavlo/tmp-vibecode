import React, { useState, useEffect } from 'react';
import { X, Lock, Shield, CheckCircle, Send, Terminal, AlertCircle } from 'lucide-react';

interface AuditRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialScope?: any;
}

export const AuditRequestModal: React.FC<AuditRequestModalProps> = ({
  isOpen,
  onClose,
  initialScope
}) => {
  const [repoUrl, setRepoUrl] = useState('');
  const [commitHash, setCommitHash] = useState('');
  const [contact, setContact] = useState('');
  const [ecosystems, setEcosystems] = useState<string[]>(['EVM']);
  const [sla, setSla] = useState<'standard' | 'accelerated' | 'emergency'>('accelerated');
  const [submittedTicket, setSubmittedTicket] = useState<string | null>(null);

  useEffect(() => {
    if (initialScope) {
      if (initialScope.urgency) setSla(initialScope.urgency);
      if (initialScope.ecosystem) {
        if (initialScope.ecosystem === 'multichain') {
          setEcosystems(['EVM', 'SVM', 'COSMOS']);
        } else {
          setEcosystems([initialScope.ecosystem.toUpperCase()]);
        }
      }
    }
  }, [initialScope]);

  if (!isOpen) return null;

  const toggleEco = (name: string) => {
    setEcosystems(prev =>
      prev.includes(name) ? prev.filter(e => e !== name) : [...prev, name]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fakeTicket = `EC-DISPATCH-0x${Math.floor(Math.random() * 0xffffff).toString(16).toUpperCase()}`;
    setSubmittedTicket(fakeTicket);
  };

  return (
    <div className="fixed inset-0 z-50 bg-void/85 backdrop-blur-md flex items-center justify-center p-4 font-mono">
      <div className="bg-carbon border border-phosphor/50 rounded-lg max-w-xl w-full p-6 shadow-phosphor relative">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-panelBorder pb-3 mb-5">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-phosphor" />
            <span className="font-bold text-white text-sm">
              [DISPATCH_AUDIT_WAR_ROOM]
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-panel border border-panelBorder"
          >
            [CLOSE]
          </button>
        </div>

        {submittedTicket ? (
          <div className="space-y-4 py-4 text-center">
            <div className="w-12 h-12 rounded-full bg-phosphor/10 border border-phosphor flex items-center justify-center mx-auto text-phosphor">
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white font-mono">ENGAGEMENT_SESSION_DISPATCHED</h3>
            <p className="text-xs text-gray-400 max-w-md mx-auto">
              Your security docket has been signed into our encrypted queue. A lead offensive researcher will verify your repository and initialize communication within 4 hours.
            </p>
            <div className="bg-void p-3 rounded border border-panelBorder text-xs">
              <span className="text-gray-500 block mb-1">DOCKET TICKET NUMBER:</span>
              <span className="font-bold text-phosphor text-sm">{submittedTicket}</span>
            </div>
            <button
              onClick={() => {
                setSubmittedTicket(null);
                onClose();
              }}
              className="bg-panel border border-panelBorder hover:border-phosphor text-gray-300 hover:text-phosphor px-6 py-2 rounded text-xs transition-colors"
            >
              [RETURN_TO_DASHBOARD]
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {/* Repo Link */}
            <div>
              <label className="block text-gray-400 mb-1 font-bold">
                CODEBASE REPOSITORY (GITHUB / GITLAB / PRIVATE):
              </label>
              <input
                type="text"
                required
                placeholder="https://github.com/protocol/core-contracts"
                value={repoUrl}
                onChange={(e) => setRepoUrl(e.target.value)}
                className="w-full bg-void border border-panelBorder text-white px-3 py-2.5 rounded focus:outline-none focus:border-phosphor transition-colors"
              />
            </div>

            {/* Commit Hash */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-gray-400 mb-1 font-bold">TARGET BRANCH / COMMIT:</label>
                <input
                  type="text"
                  placeholder="main @ 0x8f2a4c..."
                  value={commitHash}
                  onChange={(e) => setCommitHash(e.target.value)}
                  className="w-full bg-void border border-panelBorder text-white px-3 py-2 rounded focus:outline-none focus:border-phosphor transition-colors"
                />
              </div>
              <div>
                <label className="block text-gray-400 mb-1 font-bold">CONTACT (TELEGRAM/SIGNAL):</label>
                <input
                  type="text"
                  required
                  placeholder="@founder_handle or +1..."
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full bg-void border border-panelBorder text-white px-3 py-2 rounded focus:outline-none focus:border-phosphor transition-colors"
                />
              </div>
            </div>

            {/* Ecosystem Selection */}
            <div>
              <label className="block text-gray-400 mb-1 font-bold">EXECUTION ENVIRONMENTS:</label>
              <div className="flex flex-wrap gap-2">
                {['EVM', 'SVM', 'MOVE', 'COSMOS', 'ZK'].map((eco) => (
                  <button
                    type="button"
                    key={eco}
                    onClick={() => toggleEco(eco)}
                    className={`px-3 py-1.5 rounded border transition-colors ${
                      ecosystems.includes(eco)
                        ? 'bg-panel border-phosphor text-phosphor font-bold'
                        : 'bg-void border-panelBorder text-gray-400'
                    }`}
                  >
                    [{ecosystems.includes(eco) ? 'x' : ' '}] {eco}
                  </button>
                ))}
              </div>
            </div>

            {/* SLA Selection */}
            <div>
              <label className="block text-gray-400 mb-1 font-bold">ENGAGEMENT URGENCY:</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Standard (2-3 wks)' },
                  { id: 'accelerated', label: 'Accelerated (7-10 d)' },
                  { id: 'emergency', label: 'War Room (72h)' }
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setSla(item.id as any)}
                    className={`p-2 rounded border text-center transition-colors ${
                      sla === item.id
                        ? 'bg-panel border-cyan-400 text-cyan-300 font-bold'
                        : 'bg-void border-panelBorder text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Security Guarantee Note */}
            <div className="bg-void p-3 rounded border border-panelBorder flex items-start gap-2 text-gray-400 text-[11px]">
              <Shield className="w-4 h-4 text-phosphor shrink-0 mt-0.5" />
              <span>
                All communications encrypted with PGP. Under strict NDA default. We never disclose vulnerabilities without protocol authorization.
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold py-3 rounded transition-all shadow-phosphor hover:scale-[1.01]"
            >
              <Send className="w-3.5 h-3.5" />
              <span>[SUBMIT_DOCKET_FOR_OFFENSIVE_AUDIT]</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
