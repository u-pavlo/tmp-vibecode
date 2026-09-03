import React from 'react';
import { Layers, Shield, Terminal, Sparkles, Check } from 'lucide-react';

export type ConceptType = 'A' | 'B' | 'C';

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
      label: 'Institutional / Cyber-Lab',
      desc: 'Премиальный финтех-стиль (OpenZeppelin / Trail of Bits). Швейцарская строгость, математические инварианты, глубокий обсидиан.',
      icon: Shield,
      accent: 'border-cyan-400 text-cyan-400 bg-cyan-400/10'
    },
    {
      id: 'B' as ConceptType,
      name: 'Концепция Б',
      label: 'White-Hat Elite / Terminal Punk',
      desc: 'Наступательная безопасность (Zellic / Paradigm). Терминал, консольный фаззинг, diff-просмотрщик, фосфорный зеленый.',
      icon: Terminal,
      accent: 'border-phosphor text-phosphor bg-phosphor/10'
    },
    {
      id: 'C' as ConceptType,
      name: 'Концепция В',
      label: 'Neo-Tech / Abstract Cryptography',
      desc: 'Футуристическая криптография (EigenLayer / Celestia). 3D-топология, ZK-proofs, стеклянный нео-интерфейс, фиолетовый космос.',
      icon: Sparkles,
      accent: 'border-purple-400 text-purple-300 bg-purple-400/10'
    }
  ];

  return (
    <div className="sticky top-0 z-[100] bg-black/95 border-b border-white/10 backdrop-blur-xl px-4 py-2.5 font-mono shadow-2xl transition-all">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-gray-300">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
          <span className="font-bold tracking-wider text-white">ART_DIRECTION_SWITCHER:</span>
          <span className="hidden lg:inline text-gray-400 text-[11px]">
            Переключайте визуальный язык в 1 клик прямо сейчас:
          </span>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full md:w-auto">
          {concepts.map((c) => {
            const Icon = c.icon;
            const isActive = activeConcept === c.id;
            return (
              <button
                key={c.id}
                onClick={() => onSelectConcept(c.id)}
                className={`flex items-center justify-center md:justify-start gap-2 px-3 py-1.5 rounded text-xs transition-all duration-200 border ${
                  isActive
                    ? `${c.accent} font-bold shadow-lg ring-1 ring-white/20 scale-[1.02]`
                    : 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
                title={c.desc}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="font-semibold">{c.name}</span>
                <span className="hidden xl:inline text-[10px] opacity-75">({c.label.split('/')[0].trim()})</span>
                {isActive && <Check className="w-3 h-3 ml-auto hidden sm:inline" />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
