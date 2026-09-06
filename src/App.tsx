import React, { useState } from 'react';
import { ConceptSwitcher, ConceptType } from './components/ConceptSwitcher';
import { ConceptA } from './concepts/ConceptA';
import { ConceptB } from './concepts/ConceptB';
import { ConceptC } from './concepts/ConceptC';
import { ConceptD } from './concepts/ConceptD';

export const App: React.FC = () => {
  // Set default concept to 'D' (Hyper-Spatial 3D Kinetic) to showcase the new 3D design
  const [activeConcept, setActiveConcept] = useState<ConceptType>('D');

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
      {activeConcept === 'D' && <ConceptD />}
    </div>
  );
};

export default App;
