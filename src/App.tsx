import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroArticle } from './components/HeroArticle';
import { SecondaryStories } from './components/SecondaryStories';
import { ArticleView } from './components/ArticleView';
import { NavDrawer } from './components/NavDrawer';
import { CommentsModal } from './components/CommentsModal';
import { TipModal } from './components/TipModal';
import { SubscribeModal } from './components/SubscribeModal';
import { ImageLightbox } from './components/ImageLightbox';
import { ViewModeToggle } from './components/ViewModeToggle';
import {
  HERO_ARTICLE,
  ANALYSIS_ARTICLE,
  MORE_STORIES,
  ALL_ARTICLES
} from './data/mockNews';
import { Article } from './types/news';

export default function App() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isTipModalOpen, setIsTipModalOpen] = useState(false);
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [subscribeModalTab, setSubscribeModalTab] = useState<'subscribe' | 'saved'>('subscribe');
  const [commentsArticle, setCommentsArticle] = useState<Article | null>(null);
  const [layoutMode, setLayoutMode] = useState<'mobile' | 'expanded'>('mobile');

  // Bookmarked articles state
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());

  // Lightbox state
  const [lightbox, setLightbox] = useState<{
    isOpen: boolean;
    imageUrl: string;
    caption: string;
    credit: string;
  }>({
    isOpen: false,
    imageUrl: '',
    caption: '',
    credit: ''
  });

  const toggleBookmark = (article: Article) => {
    setBookmarkedIds(prev => {
      const next = new Set(prev);
      if (next.has(article.id)) {
        next.delete(article.id);
      } else {
        next.add(article.id);
      }
      return next;
    });
  };

  const handleOpenLightbox = (imageUrl: string, caption: string, credit: string) => {
    setLightbox({
      isOpen: true,
      imageUrl,
      caption,
      credit
    });
  };

  const savedArticlesList = ALL_ARTICLES.filter(a => bookmarkedIds.has(a.id));

  // If viewing an article
  if (selectedArticle) {
    return (
      <div className="min-h-screen bg-white">
        <ArticleView
          article={selectedArticle}
          onBack={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSelectedArticle(null);
          }}
          onOpenLightbox={handleOpenLightbox}
          onOpenComments={(art) => setCommentsArticle(art)}
          isBookmarked={bookmarkedIds.has(selectedArticle.id)}
          onToggleBookmark={toggleBookmark}
          relatedArticles={ALL_ARTICLES}
          onSelectArticle={(art) => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSelectedArticle(art);
          }}
        />

        {/* Global Modals */}
        <CommentsModal
          isOpen={!!commentsArticle}
          onClose={() => setCommentsArticle(null)}
          article={commentsArticle}
        />

        <TipModal
          isOpen={isTipModalOpen}
          onClose={() => setIsTipModalOpen(false)}
        />

        <SubscribeModal
          isOpen={isSubscribeModalOpen}
          onClose={() => setIsSubscribeModalOpen(false)}
          savedArticles={savedArticlesList}
          onSelectArticle={(art) => {
            setSelectedArticle(art);
            setIsSubscribeModalOpen(false);
          }}
          onRemoveSaved={(id) => {
            setBookmarkedIds(prev => {
              const next = new Set(prev);
              next.delete(id);
              return next;
            });
          }}
          initialTab={subscribeModalTab}
        />

        <ImageLightbox
          isOpen={lightbox.isOpen}
          onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
          imageUrl={lightbox.imageUrl}
          caption={lightbox.caption}
          credit={lightbox.credit}
        />
      </div>
    );
  }

  // Home Screen View
  return (
    <div className={`min-h-screen ${layoutMode === 'mobile' ? 'bg-[#f7f7f5] py-0 sm:py-6' : 'bg-[#fafafa]'}`}>
      {/* Container: 430px mobile column OR full expanded layout */}
      <div
        className={`bg-white transition-all duration-300 ${
          layoutMode === 'mobile'
            ? 'max-w-[430px] mx-auto min-h-screen shadow-md flex flex-col border-x border-gray-100 pb-16'
            : 'max-w-6xl mx-auto min-h-screen shadow-sm flex flex-col border-x border-gray-200 pb-20'
        }`}
      >
        {/* Main Header */}
        <Header
          onOpenNav={() => setIsNavOpen(true)}
          onOpenAccount={() => {
            setSubscribeModalTab('saved');
            setIsSubscribeModalOpen(true);
          }}
          onOpenSubscribe={() => {
            setSubscribeModalTab('subscribe');
            setIsSubscribeModalOpen(true);
          }}
          onGoHome={() => {
            setSelectedArticle(null);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          savedCount={savedArticlesList.length}
        />

        {/* Main Content Area */}
        <main className="flex-1 px-4 pt-4">
          {layoutMode === 'mobile' ? (
            // Mobile authentic stacked view matching Image 1
            <>
              <HeroArticle
                article={HERO_ARTICLE}
                onSelectArticle={(art) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedArticle(art);
                }}
                onOpenLightbox={handleOpenLightbox}
                isBookmarked={bookmarkedIds.has(HERO_ARTICLE.id)}
                onToggleBookmark={toggleBookmark}
              />

              <SecondaryStories
                analysisArticle={ANALYSIS_ARTICLE}
                stories={MORE_STORIES}
                onSelectArticle={(art) => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setSelectedArticle(art);
                }}
                onOpenComments={(art) => setCommentsArticle(art)}
                onOpenTipModal={() => setIsTipModalOpen(true)}
                bookmarkedIds={bookmarkedIds}
                onToggleBookmark={toggleBookmark}
              />
            </>
          ) : (
            // Broadsheet Multi-Column View
            <div className="pt-2">
              <section className="text-center pb-4 pt-1 border-b hairline-border mb-6">
                <p className="font-nyt-sans text-sm text-neutral-800 tracking-tight">
                  These top stories are <span className="font-bold">free to read</span> on the International Edition.
                </p>
                <div className="w-20 h-[2px] bg-[#326891] mx-auto mt-2"></div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left Column: Lead Hero Story (7 cols) */}
                <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r hairline-border lg:pr-8 pb-8 lg:pb-0">
                  <HeroArticle
                    article={HERO_ARTICLE}
                    onSelectArticle={(art) => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedArticle(art);
                    }}
                    onOpenLightbox={handleOpenLightbox}
                    isBookmarked={bookmarkedIds.has(HERO_ARTICLE.id)}
                    onToggleBookmark={toggleBookmark}
                  />
                </div>

                {/* Right Column: Analysis and More to Read (5 cols) */}
                <div className="lg:col-span-5">
                  <SecondaryStories
                    analysisArticle={ANALYSIS_ARTICLE}
                    stories={MORE_STORIES}
                    onSelectArticle={(art) => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setSelectedArticle(art);
                    }}
                    onOpenComments={(art) => setCommentsArticle(art)}
                    onOpenTipModal={() => setIsTipModalOpen(true)}
                    bookmarkedIds={bookmarkedIds}
                    onToggleBookmark={toggleBookmark}
                  />
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Navigation Drawer */}
      <NavDrawer
        isOpen={isNavOpen}
        onClose={() => setIsNavOpen(false)}
        articles={ALL_ARTICLES}
        onSelectArticle={(art) => {
          setSelectedArticle(art);
          setIsNavOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenSubscribe={() => {
          setSubscribeModalTab('subscribe');
          setIsSubscribeModalOpen(true);
        }}
      />

      {/* Comments Modal */}
      <CommentsModal
        isOpen={!!commentsArticle}
        onClose={() => setCommentsArticle(null)}
        article={commentsArticle}
      />

      {/* Tip Submission Modal */}
      <TipModal
        isOpen={isTipModalOpen}
        onClose={() => setIsTipModalOpen(false)}
      />

      {/* Subscribe / Account Modal */}
      <SubscribeModal
        isOpen={isSubscribeModalOpen}
        onClose={() => setIsSubscribeModalOpen(false)}
        savedArticles={savedArticlesList}
        onSelectArticle={(art) => {
          setSelectedArticle(art);
          setIsSubscribeModalOpen(false);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onRemoveSaved={(id) => {
          setBookmarkedIds(prev => {
            const next = new Set(prev);
            next.delete(id);
            return next;
          });
        }}
        initialTab={subscribeModalTab}
      />

      {/* Fullscreen Photo Lightbox */}
      <ImageLightbox
        isOpen={lightbox.isOpen}
        onClose={() => setLightbox(prev => ({ ...prev, isOpen: false }))}
        imageUrl={lightbox.imageUrl}
        caption={lightbox.caption}
        credit={lightbox.credit}
      />

      {/* View Mode Switcher (Mobile 430px vs Expanded Broadsheet) */}
      <ViewModeToggle
        mode={layoutMode}
        onToggle={(m) => setLayoutMode(m)}
      />
    </div>
  );
}
