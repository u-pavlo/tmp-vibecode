import React, { useState } from 'react';
import { ConceptSwitcher, ConceptType } from './components/ConceptSwitcher';
import { ConceptA } from './concepts/ConceptA';
import { ConceptB } from './concepts/ConceptB';
import { ConceptC } from './concepts/ConceptC';

export const App: React.FC = () => {
  // Set default concept to 'A' as explicitly requested: "но сначала запусти на 5173 сделанный А"
  const [activeConcept, setActiveConcept] = useState<ConceptType>('A');

  return (
    <div className="min-h-screen bg-black">
      {/* Top Floating Concept Switcher */}
      <ConceptSwitcher
        activeConcept={activeConcept}
        onSelectConcept={setActiveConcept}
      />

      {/* Render Active Art Direction */}
      {activeConcept === 'A' && <ConceptA />}
      {activeConcept === 'B' && <ConceptB />}
      {activeConcept === 'C' && <ConceptC />}
    </div>
  );
};

export default App;
