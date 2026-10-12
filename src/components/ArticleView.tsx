import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Play,
  Pause,
  Bookmark,
  Share2,
  MessageSquare,
  Maximize2,
  Check,
  RotateCcw
} from 'lucide-react';
import { Article } from '../types/news';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onOpenLightbox: (imageUrl: string, caption: string, credit: string) => void;
  onOpenComments: (article: Article) => void;
  isBookmarked: boolean;
  onToggleBookmark: (article: Article) => void;
  relatedArticles: Article[];
  onSelectArticle: (article: Article) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onOpenLightbox,
  onOpenComments,
  isBookmarked,
  onToggleBookmark,
  relatedArticles,
  onSelectArticle,
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [audioProgress, setAudioProgress] = useState(0);
  const [audioRate, setAudioRate] = useState<'1x' | '1.25x' | '1.5x'>('1x');
  const [isCopied, setIsCopied] = useState(false);
  const [readingProgress, setReadingProgress] = useState(0);

  // Track reading scroll progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (window.scrollY / totalHeight) * 100));
        setReadingProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio timer simulation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlayingAudio) {
      interval = setInterval(() => {
        setAudioProgress((prev) => {
          if (prev >= 100) {
            setIsPlayingAudio(false);
            return 0;
          }
          const step = audioRate === '1x' ? 0.8 : audioRate === '1.25x' ? 1.0 : 1.3;
          return Math.min(100, prev + step);
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlayingAudio, audioRate]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const textClasses = {
    normal: 'text-[17px] leading-[1.65]',
    large: 'text-[19px] leading-[1.7]',
    xlarge: 'text-[21px] leading-[1.75]'
  }[fontSize];

  return (
    <div className="min-h-screen bg-white">
      {/* Top Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-neutral-100 z-50">
        <div
          className="h-full bg-neutral-900 transition-all duration-150"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Sticky Reader Action Bar */}
      <div className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b hairline-border px-4 py-2.5 flex items-center justify-between">
        <button
          onClick={onBack}
          className="flex items-center gap-1.5 text-xs font-nyt-sans font-bold text-neutral-800 hover:text-neutral-500 transition cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 stroke-[2.2]" />
          <span>Home</span>
        </button>

        <span className="font-masthead text-lg tracking-tight select-none">
          The New York Times
        </span>

        {/* Reader Controls */}
        <div className="flex items-center gap-2">
          {/* Font Size Adjuster */}
          <div className="flex items-center bg-neutral-100 rounded px-1.5 py-0.5">
            <button
              onClick={() => setFontSize('normal')}
              className={`text-[10px] font-bold px-1 transition ${fontSize === 'normal' ? 'text-black' : 'text-neutral-400'}`}
              title="Standard text"
            >
              A
            </button>
            <button
              onClick={() => setFontSize('large')}
              className={`text-xs font-bold px-1 transition ${fontSize === 'large' ? 'text-black' : 'text-neutral-400'}`}
              title="Large text"
            >
              A+
            </button>
          </div>

          {/* Bookmark */}
          <button
            onClick={() => onToggleBookmark(article)}
            className="p-1 text-neutral-700 hover:text-neutral-900 transition"
            title={isBookmarked ? 'Remove bookmark' : 'Bookmark story'}
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-neutral-900 text-neutral-900' : ''}`} />
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            className="p-1 text-neutral-700 hover:text-neutral-900 transition relative"
            title="Share article"
          >
            {isCopied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>

          {/* Comments */}
          <button
            onClick={() => onOpenComments(article)}
            className="p-1 text-neutral-700 hover:text-neutral-900 transition flex items-center gap-0.5 text-xs font-nyt-sans"
            title="Comments"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="font-bold text-[11px]">{article.commentCount}</span>
          </button>
        </div>
      </div>

      {/* Copy Toast feedback */}
      {isCopied && (
        <div className="fixed top-12 left-1/2 -translate-x-1/2 z-50 bg-neutral-900 text-white text-xs font-nyt-sans py-1.5 px-3 rounded shadow-md">
          Link copied to clipboard
        </div>
      )}

      {/* Article Content Body */}
      <main className="px-4 pt-4 pb-16 max-w-[650px] mx-auto">
        {/* Section kicker */}
        <div className="flex items-center gap-2 mb-2">
          <span className="font-nyt-sans text-xs font-bold uppercase tracking-wider text-neutral-600">
            {article.section}
          </span>
          {article.kicker && (
            <>
              <span className="text-neutral-400">·</span>
              <span className="font-nyt-sans text-xs font-bold uppercase tracking-wider text-[#326891]">
                {article.kicker}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h1
          className="font-nyt-serif font-bold text-[29px] sm:text-[34px] leading-[1.16] text-neutral-950 tracking-tight mb-3"
          style={{ textWrap: 'balance' }}
        >
          {article.title}
        </h1>

        {/* Deck */}
        <p className="font-nyt-serif text-[18px] leading-[1.4] text-neutral-700 mb-4">
          {article.deck}
        </p>

        {/* Audio Narration Player Bar */}
        <div className="my-5 p-3.5 bg-neutral-50 border hairline-border rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsPlayingAudio(!isPlayingAudio)}
                className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition active:scale-95 cursor-pointer shadow-sm"
              >
                {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div>
                <p className="font-nyt-sans font-bold text-xs text-neutral-900">
                  {isPlayingAudio ? 'Listening to article' : 'Listen to this article'}
                </p>
                <p className="font-nyt-sans text-[11px] text-neutral-500">
                  {article.readTime} narration · Narrated by Times Audio
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setAudioRate(prev => prev === '1x' ? '1.25x' : prev === '1.25x' ? '1.5x' : '1x');
                }}
                className="text-[11px] font-nyt-sans font-bold px-1.5 py-0.5 bg-neutral-200/70 hover:bg-neutral-200 rounded text-neutral-700 transition"
              >
                {audioRate}
              </button>

              <button
                onClick={() => {
                  setAudioProgress(0);
                  setIsPlayingAudio(false);
                }}
                className="text-neutral-500 hover:text-neutral-800 p-1"
                title="Reset audio"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Player Progress Scrubber */}
          <div className="w-full bg-neutral-200 h-1 rounded overflow-hidden">
            <div
              className="bg-[#326891] h-full transition-all duration-300"
              style={{ width: `${audioProgress}%` }}
            />
          </div>
        </div>

        {/* Lead Image */}
        <div className="my-5">
          <div className="relative rounded overflow-hidden bg-neutral-900">
            <img
              src={article.heroImage}
              alt={article.heroImageCaption || article.title}
              className="w-full object-cover max-h-[460px]"
              referrerPolicy="no-referrer"
            />
            <button
              onClick={() => onOpenLightbox(article.heroImage, article.heroImageCaption || '', article.heroImageCredit || '')}
              className="absolute bottom-2 right-2 p-1.5 bg-black/60 hover:bg-black/80 text-white rounded backdrop-blur-xs transition"
              title="Expand photo"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>
          {article.heroImageCaption && (
            <p className="font-nyt-serif text-[13px] text-neutral-600 mt-2 leading-relaxed">
              {article.heroImageCaption} <span className="font-nyt-sans text-[11px] text-neutral-400">({article.heroImageCredit})</span>
            </p>
          )}
        </div>

        {/* Authors and metadata */}
        <div className="py-3 border-y hairline-border my-5 font-nyt-sans text-xs">
          <div className="font-bold text-neutral-900">
            By {article.authors.join(' and ')}
          </div>
          {article.authorRoles && (
            <div className="text-neutral-500 text-[11px] mt-0.5">
              {article.authorRoles.join(' · ')}
            </div>
          )}
          <div className="text-neutral-400 text-[11px] mt-1">
            Published {article.publishDate} · {article.location}
          </div>
        </div>

        {/* Key Takeaways Box if available */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <aside className="my-6 p-4 bg-neutral-50 border-l-2 border-neutral-900 rounded-r-md">
            <h3 className="font-nyt-sans font-bold text-xs uppercase tracking-wider text-neutral-900 mb-2.5">
              Key Takeaways
            </h3>
            <ul className="space-y-2">
              {article.keyTakeaways.map((takeaway, idx) => (
                <li key={idx} className="font-nyt-serif text-[14px] text-neutral-800 flex items-start gap-2">
                  <span className="font-bold text-neutral-900 mt-0.5">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </aside>
        )}

        {/* Article Body Paragraphs */}
        <div className="space-y-5 text-neutral-900 font-nyt-serif">
          {article.bodyParagraphs.map((para, index) => {
            const isFirst = index === 0;
            return (
              <p
                key={index}
                className={`${textClasses} ${isFirst ? 'first-letter:text-5xl first-letter:font-masthead first-letter:float-left first-letter:mr-2.5 first-letter:mt-1 first-letter:leading-none' : ''}`}
              >
                {para}
              </p>
            );
          })}
        </div>

        {/* Pull Quote */}
        {article.pullQuote && (
          <figure className="my-8 py-5 border-y hairline-border text-center">
            <blockquote className="font-nyt-serif italic text-[22px] leading-relaxed text-neutral-800">
              “{article.pullQuote.quote}”
            </blockquote>
            <figcaption className="font-nyt-sans text-xs uppercase tracking-widest text-neutral-500 font-bold mt-2">
              — {article.pullQuote.attribution}
            </figcaption>
          </figure>
        )}

        {/* Reader discussion banner */}
        <div className="mt-10 p-4 border hairline-border rounded-lg bg-neutral-50 text-center">
          <p className="font-nyt-sans font-bold text-sm text-neutral-900 mb-1">
            Join the Conversation
          </p>
          <p className="font-nyt-serif text-xs text-neutral-600 mb-3">
            {article.commentCount} readers have commented on this reporting.
          </p>
          <button
            onClick={() => onOpenComments(article)}
            className="px-4 py-2 bg-neutral-900 hover:bg-neutral-800 text-white font-nyt-sans text-xs font-semibold rounded transition"
          >
            View & Submit Comments ({article.commentCount})
          </button>
        </div>

        {/* Related Coverage */}
        <div className="mt-12 pt-6 border-t hairline-border">
          <h2 className="font-nyt-sans font-bold text-sm uppercase tracking-wider text-neutral-900 mb-4">
            Related Reporting
          </h2>
          <div className="space-y-4">
            {relatedArticles
              .filter(rel => rel.id !== article.id)
              .slice(0, 3)
              .map(rel => (
                <article
                  key={rel.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onSelectArticle(rel);
                  }}
                  className="p-3 border hairline-border rounded hover:bg-neutral-50 transition cursor-pointer flex gap-3"
                >
                  <img
                    src={rel.heroImage}
                    alt={rel.title}
                    className="w-20 h-20 object-cover rounded shrink-0 bg-neutral-200"
                  />
                  <div>
                    <span className="font-nyt-sans text-[10px] uppercase font-bold text-neutral-500">
                      {rel.section}
                    </span>
                    <h3 className="font-nyt-serif font-bold text-sm leading-snug text-neutral-900 hover:text-neutral-700">
                      {rel.title}
                    </h3>
                    <span className="text-[10px] font-nyt-sans text-neutral-500 block mt-1">
                      {rel.readTime}
                    </span>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </main>
    </div>
  );
};
