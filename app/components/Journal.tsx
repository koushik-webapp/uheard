'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

/* ─── Data ──────────────────────────────────────────────────────────────── */
const candles = [
  {
    id: 1,
    name: 'Bartlett Pear',
    category: 'FRUITY · FLORAL',
    image: '/candles/journal-1.png',
    description:
      'A refined fruity-floral composition centered around the luscious sweetness of ripe pear. Subtle floral undertones soften the fragrance, creating a fresh yet elegant atmosphere. This scent gently uplifts the mood while bringing a sense of lightness and calm to your space.',
  },
  {
    id: 2,
    name: 'Coco Chanel Inspired',
    category: 'FLORAL · POWDERY',
    image: '/candles/journal-2.png',
    description:
      'Inspired by timeless elegance. A sophisticated blend of powdery florals, iris, and soft musk—refined, iconic, and unmistakably feminine. A candle that makes a room feel dressed.',
  },
  {
    id: 3,
    name: 'Fresh Rose',
    category: 'ROMANTIC · FLORAL',
    image: '/candles/journal-3.png',
    description:
      'The Fresh Rose candle offers a complex, romantic floral fragrance that is both sweet and slightly spicy. With green, powdery undertones and fruity hints of apple, pear, and honey-like warmth, this scent embodies femininity, romance, and timeless charm.',
  },
  {
    id: 4,
    name: 'Lavender',
    category: 'CALMING · HERBAL FLORAL',
    image: '/candles/journal-4.png',
    description:
      'The Lavender candle carries a fresh, floral, and herbaceous scent with a slightly sweet undertone. Known for its calming and soothing aroma, it evokes tranquility, relaxation, and promotes better sleep.',
  },
  {
    id: 5,
    name: 'Gorgeous Gucci',
    category: 'FRUITY · FLORAL',
    image: '/candles/journal-5.png',
    description:
      'This candle exudes a soft, sweet, and joyful fruity-floral fragrance. It opens with pear blossom and red berries, blooms into white gardenia, jasmine, and frangipani, and settles into a warm base of patchouli and brown sugar.',
  },
  {
    id: 6,
    name: 'Tommy Girl',
    category: 'FRESH · FLORAL',
    image: '/candles/journal-6.png',
    description:
      'Inspired by a classic fragrance, this candle brings a youthful and energetic vibe. It blends crisp notes of black currant, mandarin, and apple blossom with honeysuckle, rose, mint, and violet, finishing with sandalwood, jasmine, and cedar.',
  },
  {
    id: 7,
    name: 'Honeysuckle',
    category: 'SWEET · FLORAL',
    image: '/candles/journal-7.png',
    description:
      'The Honeysuckle candle features a sweet, intensely floral fragrance with honey and pollen nuances. Its intoxicating, nectarous aroma has a fresh citrusy-sweet touch, reminiscent of jasmine and vanilla.',
  },
];

const features = [
  { icon: '◈', label: 'Stress Relief & Mood Uplift' },
  { icon: '◈', label: '45–50 Hours Burn Time' },
  { icon: '◈', label: 'Hand-Poured in Small Batches' },
  { icon: '◈', label: 'Premium Essential Oils' },
];

/* ─── NavBtn ─────────────────────────────────────────────────────────────── */
function NavBtn({
  onClick,
  label,
  children,
}: {
  onClick: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: '38px', height: '38px', borderRadius: '50%',
        border: '1px solid rgba(17,17,17,0.22)',
        background: 'rgba(255,255,255,0.75)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        cursor: 'pointer', display: 'flex', alignItems: 'center',
        justifyContent: 'center', color: '#111', fontSize: '15px',
        transition: 'all 0.22s ease', flexShrink: 0,
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = '#C62828';
        el.style.borderColor = '#C62828';
        el.style.color = '#fff';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLButtonElement;
        el.style.background = 'rgba(255,255,255,0.75)';
        el.style.borderColor = 'rgba(17,17,17,0.22)';
        el.style.color = '#111';
      }}
    >
      {children}
    </button>
  );
}

/* ─── Main ───────────────────────────────────────────────────────────────── */
export default function Journal() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(i => (i + 1) % candles.length);
    }, 1000);
  }, []);

  useEffect(() => {
    if (!paused) startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, startTimer]);

  const go = (i: number) => { setActive(i); startTimer(); };
  const prev = () => go((active - 1 + candles.length) % candles.length);
  const next = () => go((active + 1) % candles.length);

  const candle = candles[active];

  return (
    <section
      id="journal"
      style={{ position: 'relative', width: '100%', minHeight: '100vh', overflow: 'hidden' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* ── Full-bleed background images ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: 'easeInOut' }}
            style={{ position: 'absolute', inset: 0 }}
          >
            <Image
              src={candle.image}
              alt={candle.name}
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        {/* Global ivory wash — reduced to let image breathe */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'rgba(252,250,248,0.18)',
        }} />

        {/* Left column fade */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, rgba(252,250,248,0.72) 0%, rgba(252,250,248,0.18) 28%, rgba(252,250,248,0) 52%)',
        }} />

        {/* Right column fade */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to left, rgba(252,250,248,0.38) 0%, rgba(252,250,248,0) 40%)',
        }} />

        {/* Top fade — picks up from OurStory bottom bleed */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(252,250,248,0.88) 0%, rgba(252,250,248,0) 18%)',
        }} />

        {/* Bottom fade — dissolves into Contact */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0) 22%)',
        }} />
      </div>

      {/* ── Content ── */}
      <div style={{
        position: 'relative', zIndex: 3,
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column',
        padding: 'clamp(56px, 7vw, 88px) clamp(20px, 4vw, 56px) clamp(40px, 5vw, 60px)',
        maxWidth: '1400px', margin: '0 auto', width: '100%',
      }}>

        {/* ── 3-column grid ── */}
        <div
          className="journal-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '200px 1fr 320px',
            gap: '0 clamp(16px, 3vw, 48px)',
            flex: 1,
            alignItems: 'start',
          }}
        >

          {/* ══ LEFT ══ */}
          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: '2px' }}>
            {/* JOURNAL label */}
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px', fontWeight: 800,
              letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#C62828', margin: '0 0 10px',
            }}>
              Journal
            </p>

            {/* Quote */}
            <p style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(20px, 2.1vw, 24px)',
              fontStyle: 'italic', fontWeight: 600,
              color: '#111111',
              lineHeight: 1.3, margin: '0 0 28px',
              letterSpacing: '0.01em',
              whiteSpace: 'nowrap',
            }}>
              &ldquo;Unique Scents with Unique Ideas&rdquo;
            </p>

            {/* Timeline list */}
            <div style={{ position: 'relative' }}>
              {/* Vertical line */}
              <div style={{
                position: 'absolute', left: '5px', top: '8px', bottom: '8px',
                width: '1px', background: 'rgba(17,17,17,0.12)',
              }} />

              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {candles.map((c, i) => (
                  <button
                    key={c.id}
                    onClick={() => go(i)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '14px',
                      padding: '9px 0', background: 'none', border: 'none',
                      cursor: 'pointer', textAlign: 'left', transition: 'opacity 0.3s ease',
                      opacity: active === i ? 1 : 0.38,
                    }}
                  >
                    {/* Dot */}
                    <div style={{
                      width: '11px', height: '11px', borderRadius: '50%', flexShrink: 0,
                      border: active === i ? '2px solid #C62828' : '1.5px solid rgba(17,17,17,0.30)',
                      background: active === i ? '#C62828' : 'transparent',
                      transition: 'all 0.3s ease', zIndex: 1,
                    }} />

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif', fontSize: '13px',
                        fontWeight: 700, color: '#C62828', letterSpacing: '0.05em',
                        flexShrink: 0,
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span style={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: active === i ? '17px' : '16px',
                        fontWeight: active === i ? 800 : 600,
                        color: active === i ? '#000000' : '#1a1a1a',
                        lineHeight: 1.3, transition: 'all 0.3s ease',
                      }}>
                        {c.name}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* ══ CENTER — breathes ══ */}
          <div />

          {/* ══ RIGHT — scent panel ══ */}
          <div style={{
            background: 'rgba(255,255,255,0.78)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(17,17,17,0.07)',
            borderRadius: '16px',
            padding: 'clamp(20px, 2.5vw, 32px)',
            display: 'flex', flexDirection: 'column',
          }}>
            {/* THE SCENT label */}
            <p style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 800,
              letterSpacing: '0.26em', textTransform: 'uppercase',
              color: '#C62828', margin: '0 0 18px',
            }}>
              The Scent
            </p>

            {/* Candle name */}
            <AnimatePresence mode="wait">
              <motion.h3
                key={`name-${active}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                style={{
                  fontFamily: '"Playfair Display", Georgia, serif',
                  fontSize: 'clamp(24px, 2.8vw, 36px)',
                  fontWeight: 700, fontStyle: 'italic',
                  color: '#000000', lineHeight: 1.15, margin: '0 0 8px',
                }}
              >
                {candle.name}
              </motion.h3>
            </AnimatePresence>

            {/* Category */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`cat-${active}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '11px', fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: '#C62828', margin: '0 0 20px',
                }}
              >
                {candle.category}
              </motion.p>
            </AnimatePresence>

            {/* Hairline */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.09)', marginBottom: '20px' }} />

            {/* Description */}
            <AnimatePresence mode="wait">
              <motion.p
                key={`desc-${active}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.42, ease: 'easeInOut' }}
                style={{
                  fontFamily: 'Montserrat, sans-serif', fontSize: '14px', fontWeight: 500,
                  color: '#111111', lineHeight: 1.88, letterSpacing: '0.01em', margin: '0 0 22px',
                }}
              >
                {candle.description}
              </motion.p>
            </AnimatePresence>

            {/* Hairline */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(17,17,17,0.09)', marginBottom: '18px' }} />

            {/* Features */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {features.map(f => (
                <div key={f.label} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ color: '#C62828', fontSize: '9px', flexShrink: 0 }}>{f.icon}</span>
                  <span style={{
                    fontFamily: 'Montserrat, sans-serif', fontSize: '13px',
                    fontWeight: 600, color: '#111111', letterSpacing: '0.02em',
                  }}>
                    {f.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ── Bottom navigation ── */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: '14px', marginTop: 'clamp(32px, 4vw, 52px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '22px' }}>
            <NavBtn onClick={prev} label="Previous">‹</NavBtn>

            <span style={{
              fontFamily: 'Montserrat, sans-serif', fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.16em', color: '#000000',
              minWidth: '56px', textAlign: 'center',
            }}>
              {String(active + 1).padStart(2, '0')} / {String(candles.length).padStart(2, '0')}
            </span>

            <NavBtn onClick={next} label="Next">›</NavBtn>
          </div>

          {/* Progress dots */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
            {candles.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to candle ${i + 1}`}
                style={{
                  width: active === i ? '22px' : '7px', height: '7px',
                  borderRadius: '4px', padding: 0, border: 'none', cursor: 'pointer',
                  background: active === i ? '#C62828' : 'rgba(17,17,17,0.22)',
                  transition: 'all 0.32s ease',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Responsive ── */}
      <style>{`
        @media (max-width: 960px) {
          .journal-grid {
            grid-template-columns: 160px 1fr 280px !important;
            gap: 0 clamp(12px, 2vw, 28px) !important;
          }
        }
        @media (max-width: 700px) {
          .journal-grid {
            grid-template-columns: 1fr !important;
          }
          .journal-grid > *:nth-child(2) {
            display: none !important;
          }
          .journal-grid > *:nth-child(1) {
            order: 1;
          }
          .journal-grid > *:nth-child(3) {
            order: 2;
          }
        }
      `}</style>
    </section>
  );
}
