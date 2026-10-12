import React, { useState } from 'react';
import { X, Shield, Lock, Send, CheckCircle2, MessageCircle, Mail } from 'lucide-react';

interface TipModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TipModal: React.FC<TipModalProps> = ({ isOpen, onClose }) => {
  const [department, setDepartment] = useState('International News');
  const [tipDetails, setTipDetails] = useState('');
  const [contactMethod, setContactMethod] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!tipDetails.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

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
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-neutral-900" />
            <h2 className="font-nyt-sans font-bold text-base text-neutral-950">
              Confidential News Tips
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-neutral-500 hover:text-neutral-900 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-12 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-nyt-serif font-bold text-xl text-neutral-900">
              Tip Received Securely
            </h3>
            <p className="font-nyt-sans text-xs text-neutral-600 max-w-sm mx-auto">
              Thank you for reaching out to The New York Times. Our investigative desk reviews confidential leads continually.
            </p>
          </div>
        ) : (
          <div className="mt-4 space-y-5">
            <p className="font-nyt-serif text-[14px] text-neutral-700 leading-relaxed">
              Do you have the next big story? The Times provides several avenues to securely and confidentially share documents, records, and leads with our journalists.
            </p>

            {/* Secure Channels List */}
            <div className="grid grid-cols-2 gap-2 text-xs font-nyt-sans">
              <div className="p-3 border hairline-border rounded-lg bg-neutral-50">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900 mb-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Signal App</span>
                </div>
                <p className="text-[11px] text-neutral-600">
                  +1 (646) 580-0244 for end-to-end encrypted messaging.
                </p>
              </div>

              <div className="p-3 border hairline-border rounded-lg bg-neutral-50">
                <div className="flex items-center gap-1.5 font-bold text-neutral-900 mb-1">
                  <Lock className="w-4 h-4 text-amber-700" />
                  <span>SecureDrop</span>
                </div>
                <p className="text-[11px] text-neutral-600">
                  Tor onion whistleblower network with zero IP logging.
                </p>
              </div>
            </div>

            {/* Quick Web Tip Form */}
            <form onSubmit={handleSubmit} className="space-y-3 pt-2">
              <div>
                <label className="block text-[11px] font-nyt-sans font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Desk / Topic
                </label>
                <select
                  value={department}
                  onChange={(e) => setDepartment(e.target.value)}
                  className="w-full bg-neutral-50 border hairline-border rounded px-3 py-1.5 text-xs font-nyt-sans focus:outline-none focus:ring-1 focus:ring-neutral-900"
                >
                  <option>International News</option>
                  <option>National Investigations</option>
                  <option>Business & Finance</option>
                  <option>Technology & AI</option>
                  <option>Science & Climate</option>
                  <option>Culture & Arts</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-nyt-sans font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Tip Details & Evidence
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Describe the newsworthy situation, key figures involved, and any supporting documentation..."
                  value={tipDetails}
                  onChange={(e) => setTipDetails(e.target.value)}
                  className="w-full bg-neutral-50 border hairline-border rounded p-2.5 text-xs font-nyt-serif focus:outline-none focus:ring-1 focus:ring-neutral-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-nyt-sans font-bold uppercase tracking-wider text-neutral-600 mb-1">
                  Optional Contact (Signal username or proton email)
                </label>
                <input
                  type="text"
                  placeholder="Optional secure handle or email"
                  value={contactMethod}
                  onChange={(e) => setContactMethod(e.target.value)}
                  className="w-full bg-neutral-50 border hairline-border rounded px-3 py-1.5 text-xs font-nyt-sans focus:outline-none focus:ring-1 focus:ring-neutral-900"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded font-nyt-sans text-xs font-bold transition flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Transmit Confidential Lead</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
