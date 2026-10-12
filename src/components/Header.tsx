import React from 'react';
import { Menu, Bookmark } from 'lucide-react';

interface HeaderProps {
  onOpenNav: () => void;
  onOpenAccount: () => void;
  onOpenSubscribe: () => void;
  onGoHome: () => void;
  savedCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenNav,
  onOpenAccount,
  onOpenSubscribe,
  onGoHome,
  savedCount
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white border-b hairline-border shadow-[0_1px_2px_rgba(0,0,0,0.03)]" data-purpose="primary-header">
      {/* Top Bar: Menu, Masthead, Profile */}
      <div className="flex items-center justify-between px-4 h-14">
        {/* Hamburger Menu Button */}
        <button
          onClick={onOpenNav}
          aria-label="Open Navigation Menu"
          className="p-1.5 -ml-1 text-neutral-900 hover:text-neutral-600 active:scale-95 transition cursor-pointer"
          type="button"
        >
          <Menu className="w-6 h-6 stroke-[2.2]" />
        </button>

        {/* The New York Times Logo */}
        <button
          onClick={onGoHome}
          className="font-masthead text-[29px] tracking-tight pt-1 select-none font-bold text-center leading-none text-neutral-950 hover:opacity-85 transition cursor-pointer"
        >
          The New York Times
        </button>

        {/* User Profile Avatar Icon / Saved items */}
        <div className="flex items-center gap-1 -mr-1">
          {savedCount > 0 && (
            <button
              onClick={onOpenAccount}
              aria-label="Saved Articles"
              className="p-1.5 text-neutral-800 hover:text-neutral-600 transition relative"
              title={`${savedCount} saved articles`}
            >
              <Bookmark className="w-5 h-5 fill-neutral-800 text-neutral-800" />
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {savedCount}
              </span>
            </button>
          )}

          <button
            onClick={onOpenAccount}
            aria-label="Account Settings"
            className="p-1.5 text-neutral-900 hover:text-neutral-600 active:scale-95 transition cursor-pointer"
            type="button"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                clipRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM3.75 16.5a8.25 8.25 0 0 1 16.5 0v.09a8.205 8.205 0 0 1-4.877 3.332A6.744 6.744 0 0 0 12 17.25c-1.39 0-2.67.42-3.723 1.144A8.204 8.204 0 0 1 3.75 16.59v-.09Z"
                fillRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Date and Subscribe Sub-header Strip */}
      <div className="flex items-center justify-between px-4 py-2 border-t hairline-border bg-white text-xs">
        <span className="font-nyt-sans font-bold text-[12px] tracking-tight text-neutral-800">
          Monday, October 12, 2026
        </span>
        <button
          onClick={onOpenSubscribe}
          className="px-2.5 py-1 text-[11px] font-nyt-sans font-semibold tracking-tight border border-neutral-800 rounded hover:bg-neutral-900 hover:text-white transition-colors cursor-pointer"
        >
          Subscribe for $1/week
        </button>
      </div>
    </header>
  );
};
