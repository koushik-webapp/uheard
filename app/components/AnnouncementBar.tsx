'use client';

import { useState } from 'react';

const messages = [
  'Free shipping on orders over $50 — U.S. only',
  'New arrivals dropping this week — Shop the Collection',
  'All candles hand-poured in small batches',
];

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative flex items-center justify-center px-10 py-2.5 text-white text-[11px] font-semibold tracking-[1.5px] uppercase" style={{ background: '#C62026' }}>
      <span>{messages[idx]}</span>

      {/* Dot nav */}
      <div className="absolute right-8 flex gap-2 items-center">
        {messages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Message ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all ${i === idx ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>

      {/* Close */}
      <button
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
        className="absolute left-4 text-white/70 hover:text-white transition-colors"
      >
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
