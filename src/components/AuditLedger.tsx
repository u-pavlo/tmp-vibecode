import React, { useState } from 'react';
import { Search, Filter, FileText, CheckCircle2, Shield, Download, ExternalLink } from 'lucide-react';

interface AuditReport {
  id: string;
  protocol: string;
  category: 'Lending' | 'AMM' | 'Bridge' | 'Staking' | 'ZK/L2';
  chain: 'EVM' | 'SVM' | 'MOVE' | 'COSMOS';
  tvl: string;
  findings: { critical: number; high: number; medium: number; low: number };
  status: 'REMEDIATED & PROVED';
  hash: string;
  date: string;
}

export const AuditLedger: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedChainFilter, setSelectedChainFilter] = useState<string>('ALL');
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>('ALL');
  const [previewReport, setPreviewReport] = useState<AuditReport | null>(null);

  const reports: AuditReport[] = [
    {
      id: 'EC-2026-084',
      protocol: 'AuraVault Multichain Collateral',
      category: 'Lending',
      chain: 'EVM',
      tvl: '$2.4B',
      findings: { critical: 2, high: 4, medium: 7, low: 11 },
      status: 'REMEDIATED & PROVED',
      hash: '0x8f2a99c4b12d774a1e944b11f2ac',
      date: '2026-08-14'
    },
    {
      id: 'EC-2026-079',
      protocol: 'SolFlux Asynchronous CLMM',
      category: 'AMM',
      chain: 'SVM',
      tvl: '$890M',
      findings: { critical: 1, high: 3, medium: 5, low: 8 },
      status: 'REMEDIATED & PROVED',
      hash: '0x44d18fa2093e8a55bca7710928cd',
      date: '2026-07-29'
    },
    {
      id: 'EC-2026-071',
      protocol: 'Hyperion IBC Hyper-Relayer',
      category: 'Bridge',
      chain: 'COSMOS',
      tvl: '$1.85B',
      findings: { critical: 3, high: 2, medium: 9, low: 14 },
      status: 'REMEDIATED & PROVED',
      hash: '0x3e18a994711bfca40029bca5e317',
      date: '2026-07-08'
    },
    {
      id: 'EC-2026-064',
      protocol: 'Aptos Liquid Prime Staking',
      category: 'Staking',
      chain: 'MOVE',
      tvl: '$640M',
      findings: { critical: 1, high: 2, medium: 4, low: 6 },
      status: 'REMEDIATED & PROVED',
      hash: '0x99cb110a24f5e71465bc99a84210',
      date: '2026-06-22'
    },
    {
      id: 'EC-2026-059',
      protocol: 'Kevlar ZK Rollup Sequencer',
      category: 'ZK/L2',
      chain: 'EVM',
      tvl: '$3.7B',
      findings: { critical: 4, high: 6, medium: 12, low: 18 },
      status: 'REMEDIATED & PROVED',
      hash: '0x12bb994cba810993efca1109a477',
      date: '2026-06-02'
    },
    {
      id: 'EC-2026-051',
      protocol: 'DriftAnchor Perpetual Dex',
      category: 'AMM',
      chain: 'SVM',
      tvl: '$1.12B',
      findings: { critical: 2, high: 5, medium: 8, low: 15 },
      status: 'REMEDIATED & PROVED',
      hash: '0x712aef9044bba8912389cd441a5b',
      date: '2026-05-18'
    }
  ];

  const filteredReports = reports.filter((r) => {
    const matchesSearch =
      r.protocol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.hash.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesChain = selectedChainFilter === 'ALL' || r.chain === selectedChainFilter;
    const matchesCategory = selectedCategoryFilter === 'ALL' || r.category === selectedCategoryFilter;

    return matchesSearch && matchesChain && matchesCategory;
  });

  return (
    <section id="reports" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono">
      {/* Header */}
      <div className="border-l-2 border-phosphor pl-4 mb-8">
        <div className="text-xs text-phosphor tracking-widest uppercase mb-1">
          // SECTION: 0x03_PUBLIC_VERIFICATION_LEDGER
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Cryptographically Signed Audit Database
        </h2>
        <p className="text-gray-400 text-sm mt-2 max-w-3xl">
          Complete transparency. Every public engagement conducted by Elastic Curve is published with SHA-256 commit hashes, weaponized PoC reproductions, and verified remediation diffs.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-carbon border border-panelBorder rounded-lg p-4 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search by protocol name, ID, or commit hash..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-void border border-panelBorder text-xs text-white pl-9 pr-4 py-2.5 rounded focus:outline-none focus:border-phosphor transition-colors"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          {/* Chain Filter */}
          <div className="flex items-center gap-1 bg-void border border-panelBorder p-1 rounded">
            {['ALL', 'EVM', 'SVM', 'MOVE', 'COSMOS'].map((chain) => (
              <button
                key={chain}
                onClick={() => setSelectedChainFilter(chain)}
                className={`px-2.5 py-1 rounded text-[11px] transition-colors ${
                  selectedChainFilter === chain
                    ? 'bg-panel border border-phosphor/50 text-phosphor font-bold'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {chain}
              </button>
            ))}
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategoryFilter}
            onChange={(e) => setSelectedCategoryFilter(e.target.value)}
            className="bg-void border border-panelBorder text-xs text-gray-300 px-3 py-2 rounded focus:outline-none focus:border-phosphor"
          >
            <option value="ALL">ALL CATEGORIES</option>
            <option value="Lending">Lending & Vaults</option>
            <option value="AMM">AMM & Perpetuals</option>
            <option value="Bridge">Bridges & IBC</option>
            <option value="Staking">Liquid Staking</option>
            <option value="ZK/L2">ZK / Rollups</option>
          </select>
        </div>
      </div>

      {/* Reports Table */}
      <div className="bg-carbon border border-panelBorder rounded-lg overflow-x-auto shadow-2xl">
        <table className="w-full text-left text-xs">
          <thead className="bg-panel border-b border-panelBorder text-gray-400 uppercase tracking-wider text-[10px]">
            <tr>
              <th className="py-3.5 px-4">REPORT_ID & PROTOCOL</th>
              <th className="py-3.5 px-4">CHAIN / SECTOR</th>
              <th className="py-3.5 px-4">TVL SECURED</th>
              <th className="py-3.5 px-4">FINDINGS (CRIT/HIGH/MED/LOW)</th>
              <th className="py-3.5 px-4">STATUS</th>
              <th className="py-3.5 px-4 text-right">ACTION</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-panelBorder">
            {filteredReports.map((report) => (
              <tr
                key={report.id}
                className="hover:bg-panel/70 transition-colors group cursor-pointer"
                onClick={() => setPreviewReport(report)}
              >
                <td className="py-4 px-4">
                  <div className="font-bold text-white group-hover:text-phosphor transition-colors">
                    {report.protocol}
                  </div>
                  <div className="text-[10px] text-gray-500 mt-0.5 flex items-center gap-2">
                    <span>{report.id}</span>
                    <span>•</span>
                    <span className="font-mono text-gray-400">{report.hash.slice(0, 14)}...</span>
                  </div>
                </td>

                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400 font-bold">{report.chain}</span>
                    <span className="text-gray-600">/</span>
                    <span className="text-gray-400">{report.category}</span>
                  </div>
                </td>

                <td className="py-4 px-4 font-bold text-gray-200">
                  {report.tvl}
                </td>

                <td className="py-4 px-4">
                  <div className="flex items-center gap-1.5 text-[11px]">
                    <span className="bg-alert-critical/20 text-alert-critical px-1.5 py-0.5 rounded font-bold">
                      {report.findings.critical}C
                    </span>
                    <span className="bg-alert-high/20 text-alert-high px-1.5 py-0.5 rounded font-bold">
                      {report.findings.high}H
                    </span>
                    <span className="bg-alert-medium/20 text-alert-medium px-1.5 py-0.5 rounded">
                      {report.findings.medium}M
                    </span>
                    <span className="bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded">
                      {report.findings.low}L
                    </span>
                  </div>
                </td>

                <td className="py-4 px-4">
                  <div className="inline-flex items-center gap-1 text-[11px] text-phosphor bg-phosphor/10 border border-phosphor/30 px-2 py-0.5 rounded">
                    <CheckCircle2 className="w-3 h-3 text-phosphor" />
                    <span>{report.status}</span>
                  </div>
                </td>

                <td className="py-4 px-4 text-right">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPreviewReport(report);
                    }}
                    className="inline-flex items-center gap-1 bg-void border border-panelBorder hover:border-phosphor px-3 py-1.5 rounded text-gray-300 hover:text-phosphor transition-colors text-[11px]"
                  >
                    <FileText className="w-3 h-3" />
                    <span>[INSPECT]</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredReports.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No audit reports match your filter criteria.
          </div>
        )}
      </div>

      {/* Report Preview Modal */}
      {previewReport && (
        <div className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-carbon border border-phosphor/40 rounded-lg max-w-2xl w-full p-6 shadow-phosphor space-y-5">
            <div className="flex items-center justify-between border-b border-panelBorder pb-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-phosphor" />
                <span className="font-bold text-white text-base">
                  REPORT_DISCLOSURE: {previewReport.id}
                </span>
              </div>
              <button
                onClick={() => setPreviewReport(null)}
                className="text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-panel border border-panelBorder"
              >
                [ESC_CLOSE]
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-void p-3 rounded border border-panelBorder">
                <div>
                  <span className="text-gray-500 block">TARGET PROTOCOL:</span>
                  <span className="font-bold text-white text-sm">{previewReport.protocol}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">DEFENDED CAPITAL:</span>
                  <span className="font-bold text-phosphor text-sm">{previewReport.tvl} USD</span>
                </div>
                <div>
                  <span className="text-gray-500 block">EXECUTION RUNTIME:</span>
                  <span className="text-cyan-400 font-semibold">{previewReport.chain} ({previewReport.category})</span>
                </div>
                <div>
                  <span className="text-gray-500 block">AUDIT COMPLETION:</span>
                  <span className="text-gray-300">{previewReport.date}</span>
                </div>
              </div>

              <div className="border border-panelBorder p-3 rounded bg-panel">
                <div className="text-gray-400 font-bold mb-2">VULNERABILITY DISCLOSURE BREAKDOWN:</div>
                <div className="grid grid-cols-4 gap-2 text-center">
                  <div className="bg-alert-critical/15 p-2 rounded border border-alert-critical/30">
                    <div className="text-lg font-bold text-alert-critical">{previewReport.findings.critical}</div>
                    <div className="text-[10px] text-gray-400">CRITICAL</div>
                  </div>
                  <div className="bg-alert-high/15 p-2 rounded border border-alert-high/30">
                    <div className="text-lg font-bold text-alert-high">{previewReport.findings.high}</div>
                    <div className="text-[10px] text-gray-400">HIGH</div>
                  </div>
                  <div className="bg-alert-medium/15 p-2 rounded border border-alert-medium/30">
                    <div className="text-lg font-bold text-alert-medium">{previewReport.findings.medium}</div>
                    <div className="text-[10px] text-gray-400">MEDIUM</div>
                  </div>
                  <div className="bg-gray-800 p-2 rounded border border-gray-700">
                    <div className="text-lg font-bold text-gray-300">{previewReport.findings.low}</div>
                    <div className="text-[10px] text-gray-400">LOW/INFO</div>
                  </div>
                </div>
              </div>

              <div className="bg-void p-3 rounded border border-panelBorder font-mono text-[11px] space-y-1">
                <div className="text-gray-400">COMMIT_PROVEN_SHA256:</div>
                <div className="text-phosphor break-all">{previewReport.hash}8491bbfa01e9944d18fa2093e8</div>
                <div className="text-gray-500 pt-1">GPG SIGNED BY: Elastic Curve Security Key #4E92-A10C</div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setPreviewReport(null)}
                className="bg-panel border border-panelBorder text-gray-300 px-4 py-2 rounded text-xs hover:text-white"
              >
                [CLOSE]
              </button>
              <button
                onClick={() => {
                  alert(`Downloading cryptographic report package for ${previewReport.protocol}...`);
                }}
                className="flex items-center gap-1.5 bg-phosphor text-void font-bold px-4 py-2 rounded text-xs hover:bg-phosphor-dim"
              >
                <Download className="w-3.5 h-3.5" />
                <span>DOWNLOAD_SIGNED_PDF</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
