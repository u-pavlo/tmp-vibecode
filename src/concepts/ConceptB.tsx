import React, { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { TerminalHero } from '../components/TerminalHero';
import { MultichainMatrix } from '../components/MultichainMatrix';
import { AuditDiffViewer } from '../components/AuditDiffViewer';
import { AuditLedger } from '../components/AuditLedger';
import { ScopeEstimator } from '../components/ScopeEstimator';
import { HallOfFame } from '../components/HallOfFame';
import { Footer } from '../components/Footer';
import { AuditRequestModal } from '../components/AuditRequestModal';

export const ConceptB: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [scopeData, setScopeData] = useState<any>(null);

  const handleOpenModal = () => {
    setScopeData(null);
    setModalOpen(true);
  };

  const handleOpenModalWithScope = (scope: any) => {
    setScopeData(scope);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-void text-gray-200 flex flex-col selection:bg-phosphor selection:text-void bg-terminal-grid">
      <Navbar onOpenAuditModal={handleOpenModal} />

      <main className="flex-grow space-y-8">
        <TerminalHero onOpenAuditModal={handleOpenModal} />
        <MultichainMatrix />
        <AuditDiffViewer />
        <AuditLedger />
        <ScopeEstimator onOpenAuditModalWithScope={handleOpenModalWithScope} />
        <HallOfFame />
      </main>

      <Footer />

      <AuditRequestModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialScope={scopeData}
      />
    </div>
  );
};
