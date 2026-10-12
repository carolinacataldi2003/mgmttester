import React, { useState } from 'react';
import { X, ThumbsUp, Send, CheckCircle2 } from 'lucide-react';
import { Article, Comment } from '../types/news';
import { MOCK_COMMENTS } from '../data/mockNews';

interface CommentsModalProps {
  isOpen: boolean;
  onClose: () => void;
  article: Article | null;
}

export const CommentsModal: React.FC<CommentsModalProps> = ({
  isOpen,
  onClose,
  article
}) => {
  const [tab, setTab] = useState<'nyt' | 'all'>('nyt');
  const [comments, setComments] = useState<Comment[]>(MOCK_COMMENTS);
  const [newCommentText, setNewCommentText] = useState('');
  const [userName, setUserName] = useState('');
  const [userLocation, setUserLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [recommendedIds, setRecommendedIds] = useState<Set<string>>(new Set());

  if (!isOpen || !article) return null;

  const handleRecommend = (id: string) => {
    setRecommendedIds(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
        setComments(current =>
          current.map(c => c.id === id ? { ...c, recommendations: c.recommendations - 1 } : c)
        );
      } else {
        next.add(id);
        setComments(current =>
          current.map(c => c.id === id ? { ...c, recommendations: c.recommendations + 1 } : c)
        );
      }
      return next;
    });
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim() || !userName.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newComment: Comment = {
        id: `c-${Date.now()}`,
        author: userName.trim(),
        location: userLocation.trim() || 'Reader',
        timestamp: 'Just now',
        content: newCommentText.trim(),
        recommendations: 1,
        isNytPick: false
      };

      setComments([newComment, ...comments]);
      setNewCommentText('');
      setIsSubmitting(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }, 400);
  };

  const displayedComments = tab === 'nyt'
    ? comments.filter(c => c.isNytPick)
    : comments;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-[560px] bg-white h-[85vh] sm:h-[80vh] rounded-t-xl sm:rounded-xl shadow-2xl flex flex-col z-10 overflow-hidden animate-in fade-in slide-in-from-bottom duration-200">
        {/* Header */}
        <div className="px-5 py-3.5 border-b hairline-border flex items-center justify-between bg-neutral-50/70">
          <div>
            <h2 className="font-nyt-sans font-bold text-sm text-neutral-900">
              Reader Discussion
            </h2>
            <p className="font-nyt-serif text-xs text-neutral-600 line-clamp-1">
              {article.title}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-500 hover:text-neutral-900 transition rounded-md"
            aria-label="Close comments"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b hairline-border px-5 gap-6 text-xs font-nyt-sans">
          <button
            onClick={() => setTab('nyt')}
            className={`py-2.5 font-bold border-b-2 transition ${
              tab === 'nyt'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            NYT Picks ({comments.filter(c => c.isNytPick).length})
          </button>
          <button
            onClick={() => setTab('all')}
            className={`py-2.5 font-bold border-b-2 transition ${
              tab === 'all'
                ? 'border-neutral-950 text-neutral-950'
                : 'border-transparent text-neutral-500 hover:text-neutral-800'
            }`}
          >
            All Reader Comments ({comments.length + 50})
          </button>
        </div>

        {/* Scrollable comments list */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {displayedComments.map((comment) => {
            const hasRecommended = recommendedIds.has(comment.id);
            return (
              <div
                key={comment.id}
                className="p-3.5 border hairline-border rounded-lg bg-white space-y-2"
              >
                <div className="flex items-center justify-between text-xs font-nyt-sans">
                  <div>
                    <span className="font-bold text-neutral-900">{comment.author}</span>
                    <span className="text-neutral-400 text-[11px] ml-1.5">
                      {comment.location} · {comment.timestamp}
                    </span>
                  </div>
                  {comment.isNytPick && (
                    <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 bg-neutral-900 text-white rounded">
                      NYT Pick
                    </span>
                  )}
                </div>

                <p className="font-nyt-serif text-[14px] leading-relaxed text-neutral-800">
                  {comment.content}
                </p>

                <div className="flex items-center justify-end pt-1">
                  <button
                    onClick={() => handleRecommend(comment.id)}
                    className={`flex items-center gap-1.5 text-xs font-nyt-sans px-2 py-1 rounded transition ${
                      hasRecommended
                        ? 'bg-neutral-100 text-neutral-950 font-bold'
                        : 'text-neutral-500 hover:text-neutral-900'
                    }`}
                  >
                    <ThumbsUp className={`w-3.5 h-3.5 ${hasRecommended ? 'fill-neutral-900' : ''}`} />
                    <span className="text-[11px]">{comment.recommendations} Recommend</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Add comment footer form */}
        <div className="p-4 border-t hairline-border bg-neutral-50">
          {showSuccess && (
            <div className="mb-2 p-2 bg-emerald-50 text-emerald-800 text-xs rounded flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Thank you! Your comment has been published to the discussion.</span>
            </div>
          )}

          <form onSubmit={handleSubmitComment} className="space-y-2">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="Your Name (Required)"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                required
                className="bg-white border hairline-border rounded px-2.5 py-1.5 text-xs font-nyt-sans focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />
              <input
                type="text"
                placeholder="City, State / Country"
                value={userLocation}
                onChange={(e) => setUserLocation(e.target.value)}
                className="bg-white border hairline-border rounded px-2.5 py-1.5 text-xs font-nyt-sans focus:outline-none focus:ring-1 focus:ring-neutral-800"
              />
            </div>
            <div className="relative">
              <textarea
                placeholder="Join the discussion. Civil, thoughtful contributions are welcome..."
                rows={2}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                required
                className="w-full bg-white border hairline-border rounded px-2.5 py-1.5 text-xs font-nyt-serif focus:outline-none focus:ring-1 focus:ring-neutral-800 resize-none pr-10"
              />
              <button
                type="submit"
                disabled={isSubmitting || !newCommentText.trim() || !userName.trim()}
                className="absolute right-2 bottom-3 p-1.5 bg-neutral-900 text-white rounded hover:bg-neutral-800 disabled:opacity-40 transition"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
