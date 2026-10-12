import React from 'react';
import { Smartphone, Monitor } from 'lucide-react';

interface ViewModeToggleProps {
  mode: 'mobile' | 'expanded';
  onToggle: (mode: 'mobile' | 'expanded') => void;
}

export const ViewModeToggle: React.FC<ViewModeToggleProps> = ({ mode, onToggle }) => {
  return (
    <div className="fixed bottom-4 right-4 z-40 bg-neutral-900/90 text-white backdrop-blur-md px-3 py-1.5 rounded-full shadow-lg border border-neutral-700/60 flex items-center gap-2 text-xs font-nyt-sans">
      <span className="text-[11px] text-neutral-400 uppercase tracking-wider font-semibold hidden sm:inline">
        Layout:
      </span>
      <button
        onClick={() => onToggle('mobile')}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition ${
          mode === 'mobile'
            ? 'bg-white text-neutral-950 font-bold shadow-xs'
            : 'text-neutral-300 hover:text-white'
        }`}
        title="Mobile Screen (430px)"
      >
        <Smartphone className="w-3.5 h-3.5" />
        <span className="text-[11px]">Mobile</span>
      </button>

      <button
        onClick={() => onToggle('expanded')}
        className={`flex items-center gap-1 px-2.5 py-1 rounded-full transition ${
          mode === 'expanded'
            ? 'bg-white text-neutral-950 font-bold shadow-xs'
            : 'text-neutral-300 hover:text-white'
        }`}
        title="Expanded Broadsheet Layout"
      >
        <Monitor className="w-3.5 h-3.5" />
        <span className="text-[11px]">Broadsheet</span>
      </button>
    </div>
  );
};
