import React, { useState } from 'react';
import { X, ZoomIn, ZoomOut, Download } from 'lucide-react';

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  caption: string;
  credit?: string;
}

export const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageUrl,
  caption,
  credit
}) => {
  const [zoom, setZoom] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white animate-in fade-in duration-200">
      {/* Lightbox Top Controls */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800 bg-black/60 backdrop-blur-xs">
        <div className="flex items-center gap-2">
          <span className="font-masthead text-lg text-neutral-300">The New York Times</span>
          <span className="text-xs text-neutral-500 font-nyt-sans">· Full View</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setZoom(prev => Math.min(2.5, prev + 0.25))}
            className="p-1.5 text-neutral-400 hover:text-white transition rounded"
            title="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={() => setZoom(prev => Math.max(1, prev - 0.25))}
            className="p-1.5 text-neutral-400 hover:text-white transition rounded"
            title="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              setZoom(1);
              onClose();
            }}
            className="p-1.5 text-neutral-400 hover:text-white transition rounded ml-2"
            title="Close image"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Image Center Viewport */}
      <div
        className="flex-1 flex items-center justify-center p-4 overflow-auto cursor-zoom-out"
        onClick={onClose}
      >
        <img
          src={imageUrl}
          alt={caption}
          onClick={(e) => e.stopPropagation()}
          className="max-h-[75vh] max-w-full object-contain transition-transform duration-200 rounded shadow-2xl"
          style={{ transform: `scale(${zoom})` }}
          referrerPolicy="no-referrer"
        />
      </div>

      {/* Bottom Caption Bar */}
      <div className="p-4 bg-neutral-950/90 border-t border-neutral-800 text-center max-w-2xl mx-auto w-full">
        <p className="font-nyt-serif text-sm leading-relaxed text-neutral-200">
          {caption}
        </p>
        {credit && (
          <p className="font-nyt-sans text-xs text-neutral-400 mt-1 uppercase tracking-wider">
            Photo: {credit}
          </p>
        )}
      </div>
    </div>
  );
};
