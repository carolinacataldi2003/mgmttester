import React from 'react';
import { MessageSquare, ChevronRight, Bookmark } from 'lucide-react';
import { Article } from '../types/news';

interface SecondaryStoriesProps {
  analysisArticle: Article;
  stories: Article[];
  onSelectArticle: (article: Article) => void;
  onOpenComments: (article: Article) => void;
  onOpenTipModal: () => void;
  bookmarkedIds: Set<string>;
  onToggleBookmark: (article: Article) => void;
}

export const SecondaryStories: React.FC<SecondaryStoriesProps> = ({
  analysisArticle,
  stories,
  onSelectArticle,
  onOpenComments,
  onOpenTipModal,
  bookmarkedIds,
  onToggleBookmark,
}) => {
  return (
    <div>
      {/* Divider */}
      <hr className="hairline-border my-2 border-t" />

      {/* Analysis Story */}
      <article className="py-4" data-purpose="secondary-analysis-article">
        <div className="flex items-center justify-between mb-1">
          <span className="font-nyt-sans text-[10px] uppercase font-bold tracking-widest text-neutral-600 block">
            Analysis
          </span>
          <button
            onClick={() => onToggleBookmark(analysisArticle)}
            className="text-neutral-400 hover:text-neutral-800 transition"
            title="Save article"
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.has(analysisArticle.id) ? 'fill-neutral-900 text-neutral-900' : ''}`} />
          </button>
        </div>

        <h2
          onClick={() => onSelectArticle(analysisArticle)}
          className="font-nyt-serif font-bold text-[19px] leading-snug text-neutral-950 hover:text-neutral-700 cursor-pointer transition-colors"
          style={{ textWrap: 'balance' }}
        >
          {analysisArticle.title}
        </h2>

        <div className="flex items-center justify-between mt-2">
          <div className="text-[11px] font-nyt-sans uppercase tracking-wider text-neutral-500 font-semibold">
            {analysisArticle.readTime}
          </div>
          <button
            onClick={() => onSelectArticle(analysisArticle)}
            className="text-[11px] font-bold text-[#326891] hover:underline"
          >
            Read Analysis →
          </button>
        </div>
      </article>

      {/* Divider */}
      <div className="h-[1px] bg-neutral-300 w-full my-3"></div>

      {/* Free To Read Section */}
      <section className="pt-2 pb-6" data-purpose="more-stories">
        <div className="flex items-center gap-1.5 mb-4">
          <h2 className="font-nyt-sans font-bold text-base text-neutral-950 tracking-tight">
            More to read <span className="font-nyt-serif italic font-normal text-neutral-800">for free.</span>
          </h2>
        </div>

        {/* Story 1: Catch up on the news */}
        {stories[0] && (
          <article className="pb-5 border-b hairline-border mb-4">
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-nyt-sans uppercase font-bold tracking-wide text-neutral-600 block">
                {stories[0].kicker || 'The World'}
              </span>
              <button
                onClick={() => onToggleBookmark(stories[0])}
                className="text-neutral-400 hover:text-neutral-800 transition"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.has(stories[0].id) ? 'fill-neutral-900 text-neutral-900' : ''}`} />
              </button>
            </div>

            <h3
              onClick={() => onSelectArticle(stories[0])}
              className="font-nyt-serif font-bold text-[18px] leading-snug text-neutral-950 mb-1.5 cursor-pointer hover:text-neutral-700 transition-colors"
              style={{ textWrap: 'balance' }}
            >
              {stories[0].title}
            </h3>

            <p
              onClick={() => onSelectArticle(stories[0])}
              className="font-nyt-serif text-[14px] text-neutral-700 leading-normal mb-2 cursor-pointer hover:text-neutral-900"
            >
              {stories[0].deck}
            </p>

            <div className="flex items-center justify-between text-xs font-nyt-sans text-neutral-500">
              <span>{stories[0].heroImageCredit || 'Ohad Zwigenberg/Associated Press'}</span>

              <button
                onClick={() => onOpenComments(stories[0])}
                className="flex items-center gap-1 text-[11px] font-medium text-neutral-800 hover:text-[#326891] transition cursor-pointer"
                title="View reader discussion"
              >
                <MessageSquare className="w-3.5 h-3.5 text-neutral-500 fill-neutral-200" />
                <span className="font-semibold">{stories[0].commentCount}</span>
              </button>
            </div>
          </article>
        )}

        {/* Story 2: The Taliban */}
        {stories[1] && (
          <article className="pb-5 border-b hairline-border mb-4">
            <div className="flex items-center justify-end mb-1">
              <button
                onClick={() => onToggleBookmark(stories[1])}
                className="text-neutral-400 hover:text-neutral-800 transition"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.has(stories[1].id) ? 'fill-neutral-900 text-neutral-900' : ''}`} />
              </button>
            </div>

            <h3
              onClick={() => onSelectArticle(stories[1])}
              className="font-nyt-serif font-bold text-[18px] leading-snug text-neutral-950 mb-1.5 cursor-pointer hover:text-neutral-700 transition-colors"
              style={{ textWrap: 'balance' }}
            >
              {stories[1].title}
            </h3>

            <p
              onClick={() => onSelectArticle(stories[1])}
              className="font-nyt-serif text-[14px] text-neutral-700 leading-normal mb-2 cursor-pointer hover:text-neutral-900"
            >
              {stories[1].deck}
            </p>

            <div className="flex items-center justify-between text-xs font-nyt-sans text-neutral-500">
              <span className="font-nyt-sans text-[11px] uppercase tracking-wider font-semibold">
                {stories[1].readTime}
              </span>
              <span className="text-[11px]">{stories[1].heroImageCredit || 'Tomas Munita for The New York Times'}</span>
            </div>
          </article>
        )}

        {/* Story 3: The Great Read */}
        {stories[2] && (
          <article className="pb-4">
            <div className="flex items-center justify-between mb-1.5">
              <div className="inline-block bg-neutral-100 text-neutral-800 text-[10px] font-nyt-sans font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-xs">
                The Great Read
              </div>
              <button
                onClick={() => onToggleBookmark(stories[2])}
                className="text-neutral-400 hover:text-neutral-800 transition"
              >
                <Bookmark className={`w-3.5 h-3.5 ${bookmarkedIds.has(stories[2].id) ? 'fill-neutral-900 text-neutral-900' : ''}`} />
              </button>
            </div>

            <h3
              onClick={() => onSelectArticle(stories[2])}
              className="font-nyt-serif font-bold text-[18px] leading-snug text-neutral-950 mb-1.5 cursor-pointer hover:text-neutral-700 transition-colors"
              style={{ textWrap: 'balance' }}
            >
              {stories[2].title}
            </h3>

            <p
              onClick={() => onSelectArticle(stories[2])}
              className="font-nyt-serif text-[14px] text-neutral-700 leading-normal mb-2 cursor-pointer hover:text-neutral-900"
            >
              {stories[2].deck}
            </p>

            <div className="text-[11px] font-nyt-sans text-neutral-500 flex items-center justify-between">
              <span>{stories[2].authors[0] || 'Steffen Skjottelvik'}</span>
              <button
                onClick={() => onSelectArticle(stories[2])}
                className="text-[11px] font-bold text-[#326891] hover:underline"
              >
                Read Feature →
              </button>
            </div>
          </article>
        )}
      </section>

      {/* Confidential Tip Banner */}
      <section
        onClick={onOpenTipModal}
        className="bg-neutral-50 border-t border-b hairline-border -mx-4 px-4 py-3 text-xs font-nyt-sans flex items-center justify-between cursor-pointer hover:bg-neutral-100 transition-colors"
        data-purpose="confidential-tip"
      >
        <div>
          <span className="font-bold text-neutral-900">Got a Tip?</span> The Times offers several ways to send confidential information.
        </div>
        <ChevronRight className="w-4 h-4 text-neutral-600 shrink-0 ml-2" />
      </section>

      {/* Footer */}
      <footer className="mt-8 px-4 border-t hairline-border pt-6 text-center" data-purpose="site-footer">
        <div className="font-masthead text-xl select-none font-bold text-neutral-800 mb-3">
          The New York Times
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 text-[11px] text-neutral-600 font-nyt-sans mb-4">
          <a className="hover:underline text-neutral-700" href="#copyright">
            © 2026 The New York Times Company
          </a>
          <a className="hover:underline text-neutral-700" href="#nytco">
            NYTCo
          </a>
          <a className="hover:underline text-neutral-700" href="#contact">
            Contact Us
          </a>
          <a className="hover:underline text-neutral-700" href="#accessibility">
            Accessibility
          </a>
          <a className="hover:underline text-neutral-700" href="#privacy">
            Privacy Policy
          </a>
          <a className="hover:underline text-neutral-700" href="#terms">
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
};
