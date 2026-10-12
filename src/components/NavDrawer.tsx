import React, { useState } from 'react';
import { X, Search, Globe, ChevronRight, Sparkles, BookOpen, Utensils, Gamepad2, Headphones } from 'lucide-react';
import { SECTIONS_LIST } from '../data/mockNews';
import { Article } from '../types/news';

interface NavDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onOpenSubscribe: () => void;
}

export const NavDrawer: React.FC<NavDrawerProps> = ({
  isOpen,
  onClose,
  articles,
  onSelectArticle,
  onOpenSubscribe
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeEdition, setActiveEdition] = useState('International');

  if (!isOpen) return null;

  const filteredArticles = searchQuery.trim()
    ? articles.filter(
        a =>
          a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.deck.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.section.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Container */}
      <div className="relative w-full max-w-[340px] bg-white h-full shadow-2xl flex flex-col z-10 animate-in slide-in-from-left duration-200">
        {/* Top Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b hairline-border">
          <div className="font-masthead text-xl font-bold text-neutral-900">
            The New York Times
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-600 hover:text-neutral-950 transition rounded-md"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Edition selector strip */}
        <div className="px-4 py-2 border-b hairline-border bg-neutral-50 flex items-center gap-1.5 text-xs font-nyt-sans overflow-x-auto">
          <Globe className="w-3.5 h-3.5 text-neutral-500 shrink-0" />
          {['International', 'U.S.', 'Español', '中文'].map(edition => (
            <button
              key={edition}
              onClick={() => setActiveEdition(edition)}
              className={`px-2 py-0.5 rounded text-[11px] font-semibold transition ${
                activeEdition === edition
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-950'
              }`}
            >
              {edition}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="p-3 border-b hairline-border">
          <div className="relative">
            <Search className="w-4 h-4 text-neutral-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search news, topics, authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-neutral-100 rounded-md py-1.5 pl-8 pr-3 text-xs font-nyt-sans focus:outline-none focus:ring-1 focus:ring-neutral-800"
            />
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-5">
          {/* Search Results if query present */}
          {searchQuery.trim() && (
            <div>
              <p className="text-[11px] font-nyt-sans uppercase font-bold text-neutral-500 mb-2">
                Search Results ({filteredArticles.length})
              </p>
              {filteredArticles.length > 0 ? (
                <div className="space-y-2">
                  {filteredArticles.map(art => (
                    <div
                      key={art.id}
                      onClick={() => {
                        onSelectArticle(art);
                        onClose();
                      }}
                      className="p-2 border hairline-border rounded hover:bg-neutral-50 cursor-pointer text-xs"
                    >
                      <span className="text-[10px] uppercase font-bold text-neutral-500">
                        {art.section}
                      </span>
                      <p className="font-nyt-serif font-bold text-neutral-900 line-clamp-2">
                        {art.title}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-neutral-500 italic">No articles found matching &quot;{searchQuery}&quot;</p>
              )}
            </div>
          )}

          {/* Quick Features */}
          <div>
            <p className="text-[11px] font-nyt-sans uppercase font-bold tracking-wider text-neutral-400 mb-2">
              Featured Times Products
            </p>
            <div className="grid grid-cols-2 gap-2 text-xs font-nyt-sans">
              <a
                href="#games"
                onClick={(e) => { e.preventDefault(); alert('NYT Games: Wordle, Connections & The Mini available daily.'); }}
                className="flex items-center gap-2 p-2 rounded border hairline-border hover:bg-neutral-50 transition"
              >
                <Gamepad2 className="w-4 h-4 text-[#326891]" />
                <span className="font-semibold text-neutral-800">Games</span>
              </a>
              <a
                href="#cooking"
                onClick={(e) => { e.preventDefault(); alert('NYT Cooking: 20,000+ recipes curated by Times editors.'); }}
                className="flex items-center gap-2 p-2 rounded border hairline-border hover:bg-neutral-50 transition"
              >
                <Utensils className="w-4 h-4 text-amber-700" />
                <span className="font-semibold text-neutral-800">Cooking</span>
              </a>
              <a
                href="#audio"
                onClick={(e) => { e.preventDefault(); alert('Times Audio: Listen to The Daily, Ezra Klein, and narrated articles.'); }}
                className="flex items-center gap-2 p-2 rounded border hairline-border hover:bg-neutral-50 transition"
              >
                <Headphones className="w-4 h-4 text-indigo-700" />
                <span className="font-semibold text-neutral-800">Audio</span>
              </a>
              <a
                href="#wirecutter"
                onClick={(e) => { e.preventDefault(); alert('Wirecutter: Independent product reviews tested by experts.'); }}
                className="flex items-center gap-2 p-2 rounded border hairline-border hover:bg-neutral-50 transition"
              >
                <Sparkles className="w-4 h-4 text-emerald-700" />
                <span className="font-semibold text-neutral-800">Wirecutter</span>
              </a>
            </div>
          </div>

          {/* News Sections List */}
          <div>
            <p className="text-[11px] font-nyt-sans uppercase font-bold tracking-wider text-neutral-400 mb-2">
              Sections
            </p>
            <ul className="divide-y hairline-border">
              {SECTIONS_LIST.map(sec => (
                <li key={sec.id}>
                  <button
                    onClick={() => {
                      const match = articles.find(a => a.section.toLowerCase().includes(sec.id));
                      if (match) {
                        onSelectArticle(match);
                      }
                      onClose();
                    }}
                    className="w-full py-2.5 flex items-center justify-between text-xs font-nyt-sans hover:text-[#326891] transition text-left"
                  >
                    <span className="font-semibold text-neutral-800">{sec.name}</span>
                    <span className="text-[11px] text-neutral-400">{sec.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Drawer Footer CTA */}
        <div className="p-4 border-t hairline-border bg-neutral-50">
          <div className="text-center">
            <p className="font-nyt-serif font-bold text-sm text-neutral-900 mb-1">
              Independent journalism worth paying for.
            </p>
            <button
              onClick={() => {
                onClose();
                onOpenSubscribe();
              }}
              className="w-full mt-2 py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-nyt-sans text-xs font-semibold transition"
            >
              Subscribe for $1/week
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
