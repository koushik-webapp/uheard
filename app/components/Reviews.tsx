'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Data ───────────────────────────────────────────────────────────────── */
const reviews = [
  {
    name: 'Jackie',
    text: 'The Coco Chanel candle truly lives up to its name. I\'m very happy with the long-lasting aroma—it feels elegant and refined. I\'ll definitely be placing more orders.',
  },
  {
    name: 'Sophilia',
    text: 'The Bartlett Pear scent feels like stepping into a pool of fresh, sweet pears. The fragrance filled my entire home beautifully and exceeded all my expectations.',
  },
  {
    name: 'Lee and his partner',
    text: 'We absolutely love the Polo Red scent—it creates such a warm, cozy atmosphere. Perfect for evenings together. We\'ll definitely be ordering more for the holidays.',
  },
  {
    name: 'Nadia',
    text: 'The Fresh Rose candle is stunning. It met every expectation and more—the scent is soft, romantic, and lingers perfectly. I\'m already looking forward to trying more.',
  },
  {
    name: 'Amelia',
    text: 'The Lavender candle is incredibly calming. It instantly transforms my space into a peaceful retreat. Perfect after long days—I\'ve never experienced something this soothing.',
  },
  {
    name: 'Daniel',
    text: 'These candles feel truly premium—from the packaging to the scent throw. The Tommy Girl fragrance is fresh, clean, and uplifting. It makes my home feel alive.',
  },
  {
    name: 'Priya',
    text: 'Honeysuckle is absolutely beautiful. It reminds me of warm summer evenings—sweet, floral, and comforting. Guests always ask what I\'m burning.',
  },
];

const CARD_W = 380;
const GAP = 24;

/* ─── Stars ──────────────────────────────────────────────────────────────── */
function Stars() {
  return (
    <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="#c9a452"
          />
        </svg>
      ))}
    </div>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function Reviews() {
  const [active, setActive] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [containerW, setContainerW] = useState(1200);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) setContainerW(containerRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  const trackOffset = containerW / 2 - CARD_W / 2 - active * (CARD_W + GAP);

  const prev = useCallback(() => setActive(i => Math.max(0, i - 1)), []);
  const next = useCallback(() => setActive(i => Math.min(reviews.length - 1, i + 1)), []);

  return (
    <section
      ref={sectionRef}
      style={{
        width: '100%',
        backgroundColor: '#fafaf8',
        padding: 'clamp(64px, 8vw, 110px) 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* ── Section header ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ textAlign: 'center', marginBottom: 'clamp(40px, 6vw, 64px)', padding: '0 clamp(16px, 4vw, 48px)' }}
      >
        {/* REVIEWS label */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '16px' }}>
          <div style={{ width: '36px', height: '1px', background: '#C62828', opacity: 0.6 }} />
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#C62828', margin: 0,
          }}>
            Reviews
          </p>
          <div style={{ width: '36px', height: '1px', background: '#C62828', opacity: 0.6 }} />
        </div>

        {/* Main title */}
        <h2 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(28px, 4vw, 52px)',
          fontWeight: 700, fontStyle: 'italic',
          color: '#111111', lineHeight: 1.1,
          margin: '0 0 12px', letterSpacing: '-0.01em',
        }}>
          What Our Customers Say
        </h2>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '13px', fontWeight: 400,
          color: '#888888', lineHeight: 1.6, margin: 0,
        }}>
          Real reviews from people who love our candles
        </p>
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {/* Track wrapper with fade edges */}
        <div
          ref={containerRef}
          style={{ position: 'relative', overflow: 'hidden', padding: '20px 0 28px' }}
        >
          {/* Left fade */}
          <div style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '160px', zIndex: 2,
            background: 'linear-gradient(to right, #fafaf8 20%, transparent)',
            pointerEvents: 'none',
          }} />
          {/* Right fade */}
          <div style={{
            position: 'absolute', right: 0, top: 0, bottom: 0, width: '160px', zIndex: 2,
            background: 'linear-gradient(to left, #fafaf8 20%, transparent)',
            pointerEvents: 'none',
          }} />

          {/* Sliding track */}
          <motion.div
            style={{ display: 'flex', gap: `${GAP}px`, willChange: 'transform' }}
            animate={{ x: trackOffset }}
            transition={{ type: 'spring', stiffness: 280, damping: 32, mass: 0.9 }}
          >
            {reviews.map((review, i) => {
              const isActive = i === active;
              const dist = Math.abs(i - active);
              return (
                <motion.div
                  key={review.name}
                  onClick={() => setActive(i)}
                  animate={{
                    scale: isActive ? 1.03 : 1,
                    opacity: dist > 2 ? 0.25 : dist === 2 ? 0.55 : dist === 1 ? 0.82 : 1,
                  }}
                  transition={{ duration: 0.45, ease: 'easeInOut' }}
                  style={{
                    flexShrink: 0,
                    width: `${CARD_W}px`,
                    background: '#ffffff',
                    borderRadius: '20px',
                    border: `1px solid ${isActive ? 'rgba(198,40,40,0.12)' : 'rgba(0,0,0,0.07)'}`,
                    boxShadow: isActive
                      ? '0 12px 48px rgba(0,0,0,0.08), 0 2px 12px rgba(0,0,0,0.04)'
                      : '0 2px 16px rgba(0,0,0,0.04)',
                    padding: 'clamp(24px, 3vw, 36px)',
                    cursor: isActive ? 'default' : 'pointer',
                    transition: 'box-shadow 0.4s ease, border-color 0.4s ease',
                  }}
                >
                  <Stars />

                  {/* Review text */}
                  <p style={{
                    fontFamily: '"Playfair Display", Georgia, serif',
                    fontSize: 'clamp(14px, 1.3vw, 16px)',
                    fontStyle: 'italic', fontWeight: 400,
                    color: '#4A4A4A', lineHeight: 1.85,
                    margin: '0 0 24px', letterSpacing: '0.01em',
                  }}>
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Divider */}
                  <div style={{ width: '32px', height: '1px', background: '#C62828', opacity: 0.4, marginBottom: '16px' }} />

                  {/* Reviewer name */}
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '13px', fontWeight: 700,
                    color: '#111111', margin: '0 0 3px', letterSpacing: '0.02em',
                  }}>
                    {review.name}
                  </p>
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '11px', fontWeight: 400,
                    color: '#aaaaaa', margin: 0, letterSpacing: '0.04em',
                  }}>
                    Verified Customer
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Navigation ── */}
        <div style={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', gap: '20px',
          padding: '0 clamp(16px, 4vw, 48px)',
        }}>
          {/* Arrows + dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            {/* Prev */}
            <button
              onClick={prev}
              disabled={active === 0}
              aria-label="Previous review"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.15)',
                background: active === 0 ? 'rgba(0,0,0,0.03)' : '#ffffff',
                color: active === 0 ? '#ccc' : '#111',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: active === 0 ? 'default' : 'pointer',
                fontSize: '16px', transition: 'all 0.22s ease',
                boxShadow: active === 0 ? 'none' : '0 2px 10px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={e => {
                if (active !== 0) {
                  (e.currentTarget as HTMLButtonElement).style.background = '#C62828';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#C62828';
                }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = active === 0 ? 'rgba(0,0,0,0.03)' : '#ffffff';
                (e.currentTarget as HTMLButtonElement).style.color = active === 0 ? '#ccc' : '#111';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.15)';
              }}
            >
              ‹
            </button>

            {/* Dots */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to review ${i + 1}`}
                  style={{
                    width: active === i ? '24px' : '8px',
                    height: '8px', borderRadius: '4px',
                    background: active === i ? '#C62828' : 'rgba(0,0,0,0.18)',
                    border: 'none', cursor: 'pointer', padding: 0,
                    transition: 'all 0.32s ease',
                  }}
                />
              ))}
            </div>

            {/* Next */}
            <button
              onClick={next}
              disabled={active === reviews.length - 1}
              aria-label="Next review"
              style={{
                width: '40px', height: '40px', borderRadius: '50%',
                border: '1px solid rgba(0,0,0,0.15)',
                background: active === reviews.length - 1 ? 'rgba(0,0,0,0.03)' : '#ffffff',
                color: active === reviews.length - 1 ? '#ccc' : '#111',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: active === reviews.length - 1 ? 'default' : 'pointer',
                fontSize: '16px', transition: 'all 0.22s ease',
                boxShadow: active === reviews.length - 1 ? 'none' : '0 2px 10px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={e => {
                if (active !== reviews.length - 1) {
                  (e.currentTarget as HTMLButtonElement).style.background = '#C62828';
                  (e.currentTarget as HTMLButtonElement).style.color = '#fff';
                  (e.currentTarget as HTMLButtonElement).style.borderColor = '#C62828';
                }
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.background = active === reviews.length - 1 ? 'rgba(0,0,0,0.03)' : '#ffffff';
                (e.currentTarget as HTMLButtonElement).style.color = active === reviews.length - 1 ? '#ccc' : '#111';
                (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.15)';
              }}
            >
              ›
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
