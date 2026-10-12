import React, { useState } from 'react';
import { X, Check, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types/news';

interface SubscribeModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveSaved: (articleId: string) => void;
  initialTab?: 'subscribe' | 'saved';
}

export const SubscribeModal: React.FC<SubscribeModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveSaved,
  initialTab = 'subscribe'
}) => {
  const [activeTab, setActiveTab] = useState<'subscribe' | 'saved'>(initialTab);
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[500px] bg-white rounded-xl shadow-2xl p-6 z-10 max-h-[90vh] overflow-y-auto animate-in fade-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b hairline-border">
          <div className="font-masthead text-xl font-bold text-neutral-900">
            The New York Times
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-500 hover:text-neutral-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab switchers */}
        <div className="flex border-b hairline-border gap-4 mt-3 text-xs font-nyt-sans">
          <button
            onClick={() => setActiveTab('subscribe')}
            className={`py-2 font-bold border-b-2 transition ${
              activeTab === 'subscribe'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            All-Access Subscription
          </button>
          <button
            onClick={() => setActiveTab('saved')}
            className={`py-2 font-bold border-b-2 transition flex items-center gap-1.5 ${
              activeTab === 'saved'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>Saved Stories ({savedArticles.length})</span>
          </button>
        </div>

        {activeTab === 'subscribe' ? (
          <div className="mt-4 space-y-4">
            <div className="text-center py-2">
              <span className="text-[11px] font-nyt-sans uppercase font-bold tracking-widest text-[#326891]">
                Special Limited Offer
              </span>
              <h3 className="font-nyt-serif font-bold text-2xl text-neutral-950 mt-1">
                Subscribe for $1 a week.
              </h3>
              <p className="font-nyt-serif text-xs text-neutral-600 mt-1">
                Billed every 4 weeks for the first year. Cancel anytime.
              </p>
            </div>

            <div className="space-y-2.5 p-4 bg-neutral-50 rounded-lg border hairline-border text-xs font-nyt-sans text-neutral-700">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Unlimited World Journalism</strong> on nytimes.com and iOS/Android app.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>NYT Games:</strong> Wordle, Connections, The Crossword & Spelling Bee.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>NYT Cooking:</strong> 20,000+ recipes tested by our editors.</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>The Athletic:</strong> In-depth sports coverage and live analysis.</span>
              </div>
            </div>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-center text-xs font-nyt-sans text-emerald-800">
                ✓ <strong>All-Access Member Active</strong> — Thank you for supporting independent journalism.
              </div>
            ) : (
              <button
                onClick={() => setSubscribed(true)}
                className="w-full py-3 bg-neutral-950 hover:bg-neutral-800 text-white font-nyt-sans font-bold text-xs uppercase tracking-wider rounded transition"
              >
                Claim $1/Week Subscription
              </button>
            )}
          </div>
        ) : (
          <div className="mt-4 space-y-3">
            {savedArticles.length === 0 ? (
              <div className="py-8 text-center text-neutral-500 font-nyt-serif text-sm">
                You have no saved stories yet. Tap the bookmark icon on any article to save it for later reading.
              </div>
            ) : (
              <div className="space-y-2.5 max-h-[50vh] overflow-y-auto pr-1">
                {savedArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-3 border hairline-border rounded-lg flex items-start justify-between gap-3 hover:bg-neutral-50 transition"
                  >
                    <div
                      onClick={() => {
                        onSelectArticle(article);
                        onClose();
                      }}
                      className="cursor-pointer flex-1"
                    >
                      <span className="text-[10px] font-nyt-sans uppercase font-bold text-neutral-500">
                        {article.section}
                      </span>
                      <h4 className="font-nyt-serif font-bold text-xs text-neutral-900 line-clamp-2">
                        {article.title}
                      </h4>
                      <span className="text-[10px] text-neutral-400 font-nyt-sans mt-0.5 block">
                        {article.readTime}
                      </span>
                    </div>

                    <button
                      onClick={() => onRemoveSaved(article.id)}
                      className="text-neutral-400 hover:text-red-600 p-1 transition"
                      title="Remove from saved"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
