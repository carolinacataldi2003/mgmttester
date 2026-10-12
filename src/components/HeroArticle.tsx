import React from 'react';
import { Maximize2, Bookmark } from 'lucide-react';
import { Article } from '../types/news';

interface HeroArticleProps {
  article: Article;
  onSelectArticle: (article: Article) => void;
  onOpenLightbox: (imageUrl: string, caption: string, credit: string) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
}

export const HeroArticle: React.FC<HeroArticleProps> = ({
  article,
  onSelectArticle,
  onOpenLightbox,
  isBookmarked,
  onToggleBookmark,
}) => {
  return (
    <div>
      {/* Notice Eyebrow Banner */}
      <section className="text-center pb-4 pt-1" data-purpose="free-to-read-banner">
        <p className="font-nyt-sans text-[13px] text-neutral-800 tracking-tight">
          These top stories are <span className="font-bold">free to read</span>.
        </p>
        <div className="w-16 h-[2px] bg-[#326891] mx-auto mt-2 mb-4"></div>
      </section>

      {/* Hero Story Section */}
      <article className="pb-6" data-purpose="hero-article">
        {/* Lead Headline */}
        <h1
          onClick={() => onSelectArticle(article)}
          className="font-nyt-serif font-bold text-[29px] leading-[1.18] text-neutral-950 tracking-tight mb-3 cursor-pointer hover:text-neutral-700 transition-colors"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        {/* Lead Paragraph Summary */}
        <p
          onClick={() => onSelectArticle(article)}
          className="font-nyt-serif text-[16px] leading-[1.4] text-neutral-800 mb-2 cursor-pointer hover:text-neutral-900"
        >
          {article.deck}
        </p>

        {/* Read time & Meta actions */}
        <div className="flex items-center justify-between text-[11px] font-nyt-sans uppercase tracking-wider text-neutral-600 font-bold mb-4">
          <div className="flex items-center gap-2">
            <span>{article.readTime}</span>
            <span>·</span>
            <span className="text-[#326891] font-semibold">WORLD NEWS</span>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleBookmark(article);
            }}
            className="text-neutral-500 hover:text-neutral-900 transition p-1"
            title={isBookmarked ? 'Saved to Reading List' : 'Save for later'}
            aria-label="Bookmark article"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-neutral-900 text-neutral-900' : ''}`} />
          </button>
        </div>

        {/* Hero Image Container with Overlays */}
        <div
          className="relative w-full rounded overflow-hidden shadow-sm bg-neutral-900 group cursor-pointer"
          data-purpose="hero-media-container"
          onClick={() => onSelectArticle(article)}
        >
          <img
            alt={article.heroImageCaption || article.title}
            className="w-full object-cover object-top h-[390px] transition-transform duration-500 group-hover:scale-[1.02]"
            src={article.heroImage}
            referrerPolicy="no-referrer"
          />

          {/* Live Top Caption Badge Overlay */}
          <div className="absolute top-3 left-3 flex flex-col text-white drop-shadow-md bg-black/40 backdrop-blur-xs px-2 py-1 rounded">
            <span className="font-nyt-sans font-bold text-xs tracking-tight">{article.location || 'Riyadh, Saudi Arabia'}</span>
            <span className="font-nyt-sans text-[11px] text-white/90">Oct. 11</span>
          </div>

          {/* NYT Classic Gothic 'T' Watermark Overlay */}
          <div className="absolute top-3 right-3 text-white drop-shadow-lg opacity-90">
            <span className="font-masthead text-4xl select-none leading-none font-bold">T</span>
          </div>

          {/* Bottom Caption Overlay Plaque */}
          <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm p-3 rounded shadow text-neutral-950">
            <div className="flex items-end justify-between gap-2">
              <p className="font-nyt-serif font-bold text-[14px] leading-tight text-neutral-900">
                {article.heroImageCaption}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onOpenLightbox(article.heroImage, article.heroImageCaption || '', article.heroImageCredit || '');
                }}
                aria-label="Expand image"
                className="shrink-0 p-1.5 text-neutral-700 hover:text-black hover:bg-neutral-100 rounded transition"
                type="button"
              >
                <Maximize2 className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Reporters Byline */}
        <div className="mt-3 text-[12px] font-nyt-sans text-neutral-600 flex items-center justify-between">
          <div>
            By{' '}
            {article.authors.map((author, index) => (
              <span key={author}>
                <span className="font-medium text-neutral-900">{author}</span>
                {index < article.authors.length - 1 ? ' and ' : ''}
              </span>
            ))}
          </div>

          <button
            onClick={() => onSelectArticle(article)}
            className="text-[11px] font-bold text-[#326891] hover:underline"
          >
            Read Full Story →
          </button>
        </div>
      </article>
    </div>
  );
};
