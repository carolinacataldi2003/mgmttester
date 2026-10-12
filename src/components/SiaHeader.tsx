import React, { useState } from 'react';
import { Globe, User, HelpCircle, Menu, X, ChevronDown } from 'lucide-react';

interface SiaHeaderProps {
  onOpenKrisFlyer: () => void;
  onSelectNavTab: (tab: string) => void;
  activeNavTab: string;
}

export const SiaHeader: React.FC<SiaHeaderProps> = ({
  onOpenKrisFlyer,
  onSelectNavTab,
  activeNavTab,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('Singapore - English');

  return (
    <header className="bg-white border-b border-neutral-200 sticky top-0 z-50 shadow-xs">
      {/* Top Utility Bar (Desktop) */}
      <div className="bg-[#0b1b3d] text-white text-xs py-1.5 px-4 sm:px-8 border-b border-[#1a2d54]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-neutral-300">
            <div className="flex items-center gap-1.5 hover:text-white cursor-pointer transition">
              <Globe className="w-3.5 h-3.5 text-[#ba9653]" />
              <span>{selectedLanguage}</span>
            </div>
            <span className="text-neutral-600 hidden sm:inline">|</span>
            <a
              href="#help"
              onClick={(e) => { e.preventDefault(); alert('Singapore Airlines Help Center: 24/7 Global Contact Center & FAQ.'); }}
              className="hidden sm:flex items-center gap-1 hover:text-white transition"
            >
              <HelpCircle className="w-3.5 h-3.5 text-neutral-400" />
              <span>Help & FAQ</span>
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenKrisFlyer}
              className="flex items-center gap-1.5 text-white hover:text-[#d4af37] font-semibold transition cursor-pointer"
            >
              <User className="w-3.5 h-3.5 text-[#ba9653]" />
              <span>KrisFlyer Sign-in / Join</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-18 sm:h-20 flex items-center justify-between">
        {/* Singapore Airlines Brand Logo */}
        <div
          onClick={() => onSelectNavTab('book')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Stylized SilverKris Golden Bird Icon */}
          <div className="w-9 h-9 sm:w-11 sm:h-11 bg-[#00205b] rounded-full flex items-center justify-center shadow-md p-1.5">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[#ba9653] fill-current">
              <path d="M10,40 Q40,15 90,20 Q60,45 80,75 Q45,55 35,85 Q30,55 10,40 Z" />
            </svg>
          </div>

          <div className="flex flex-col">
            <span className="font-sia-sans font-extrabold text-lg sm:text-2xl tracking-wider text-[#00205b] leading-tight">
              SINGAPORE AIRLINES
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest text-[#ba9653] font-semibold uppercase">
              A great way to fly · Star Alliance
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[14px] font-semibold text-[#00205b]">
          <button
            onClick={() => onSelectNavTab('book')}
            className={`py-2 border-b-2 transition font-bold ${
              activeNavTab === 'book'
                ? 'border-[#ba9653] text-[#00205b]'
                : 'border-transparent text-neutral-700 hover:text-[#00205b]'
            }`}
          >
            Book Trips
          </button>
          <button
            onClick={() => onSelectNavTab('offers')}
            className={`py-2 border-b-2 transition ${
              activeNavTab === 'offers'
                ? 'border-[#ba9653] text-[#00205b]'
                : 'border-transparent text-neutral-700 hover:text-[#00205b]'
            }`}
          >
            Special Offers
          </button>
          <button
            onClick={() => onSelectNavTab('experience')}
            className={`py-2 border-b-2 transition ${
              activeNavTab === 'experience'
                ? 'border-[#ba9653] text-[#00205b]'
                : 'border-transparent text-neutral-700 hover:text-[#00205b]'
            }`}
          >
            Flying With Us
          </button>
          <button
            onClick={onOpenKrisFlyer}
            className="py-2 border-b-2 border-transparent text-neutral-700 hover:text-[#00205b] transition flex items-center gap-1"
          >
            <span className="text-[#ba9653] font-bold">KrisFlyer</span>
            <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 text-[#00205b] hover:bg-neutral-100 rounded-md"
          aria-label="Toggle Navigation"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-neutral-200 px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-150">
          <button
            onClick={() => { onSelectNavTab('book'); setIsMobileMenuOpen(false); }}
            className="w-full text-left py-2 font-bold text-[#00205b] text-sm"
          >
            Book Flights & Trips
          </button>
          <button
            onClick={() => { onSelectNavTab('offers'); setIsMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-neutral-800 text-sm"
          >
            Special Offers & Deals
          </button>
          <button
            onClick={() => { onSelectNavTab('experience'); setIsMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-neutral-800 text-sm"
          >
            Travel Experience & Cabins
          </button>
          <button
            onClick={() => { onOpenKrisFlyer(); setIsMobileMenuOpen(false); }}
            className="w-full text-left py-2 text-[#ba9653] font-bold text-sm"
          >
            KrisFlyer Loyalty & Miles
          </button>
        </div>
      )}
    </header>
  );
};
