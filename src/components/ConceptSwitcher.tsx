import React from 'react';
import { Shield, Terminal, Sparkles, Box, Check } from 'lucide-react';

export type ConceptType = 'A' | 'B' | 'C' | 'D';

interface ConceptSwitcherProps {
  activeConcept: ConceptType;
  onSelectConcept: (concept: ConceptType) => void;
}

export const ConceptSwitcher: React.FC<ConceptSwitcherProps> = ({
  activeConcept,
  onSelectConcept
}) => {
  const concepts = [
    {
      id: 'A' as ConceptType,
      name: 'Концепция А',
      label: 'Institutional Lab',
      desc: 'Премиальный финтех-стиль (OpenZeppelin / Trail of Bits). Швейцарская строгость, математические инварианты, глубокий обсидиан.',
      icon: Shield,
      accent: 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
    },
    {
      id: 'B' as ConceptType,
      name: 'Концепция Б',
      label: 'Terminal Punk',
      desc: 'Наступательная безопасность (Zellic / Paradigm). Терминал, консольный фаззинг, diff-просмотрщик, фосфорный зеленый.',
      icon: Terminal,
      accent: 'border-phosphor text-phosphor bg-phosphor/10'
    },
    {
      id: 'C' as ConceptType,
      name: 'Концепция В',
      label: 'Neo-Tech ZK',
      desc: 'Футуристическая криптография (EigenLayer / Celestia). 3D-топология, ZK-proofs, стеклянный нео-интерфейс, фиолетовый космос.',
      icon: Sparkles,
      accent: 'border-purple-400 text-purple-300 bg-purple-400/10'
    },
    {
      id: 'D' as ConceptType,
      name: 'Концепция D',
      label: 'Hyper-3D Kinetic',
      desc: 'Максимальный 3D-фарш (Three.js WebGL). Интерактивная кинетическая 3D-скульптура, гироскопический 3D-параллакс, процедурный звук.',
      icon: Box,
      accent: 'border-emerald-400 text-emerald-300 bg-emerald-400/10'
    }
  ];

  return (
    <div className="sticky top-0 z-[100] bg-black/95 border-b border-white/10 backdrop-blur-xl px-4 py-2.5 font-mono shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-bold tracking-wider text-white">ART_DIRECTION_SWITCHER:</span>
          <span className="hidden lg:inline text-gray-400 text-[11px]">
            Сравните 4 варианта дизайна в 1 клик:
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-auto">
          {concepts.map((c) => {
            const Icon = c.icon;
            const isActive = activeConcept === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectConcept(c.id)}
                className={`flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? `${c.accent} font-bold shadow-lg ring-1 ring-white/20 scale-[1.02]`
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={c.desc}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="font-semibold">{c.name}</span>
                <span className="hidden sm:inline text-[10px] opacity-75">({c.label.split(' ')[0]})</span>
                {isActive && <Check className="w-3 h-3 ml-auto hidden md:inline" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
