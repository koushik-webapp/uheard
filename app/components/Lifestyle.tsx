'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] as const },
});

export default function Lifestyle() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src="/section-bg.png"
        alt="Jacqueline's Enchanting Candles lifestyle"
        fill
        style={{ objectFit: 'cover', objectPosition: 'center center' }}
        sizes="100vw"
        priority
      />

      {/* Soft warm overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(255,248,242,0.42)' }} />

      {/* ── Content: label + heading + CTA grouped at top center ── */}
      <div style={{
        position: 'absolute', zIndex: 2,
        top: 'clamp(40px, 7vh, 72px)',
        left: 0, right: 0,
        display: 'flex', flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 clamp(24px, 6vw, 80px)',
        gap: '20px',
      }}>

        {/* Label */}
        <motion.div {...fadeUp(0)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
          <div style={{ width: '28px', height: '1px', background: '#C62828', opacity: 0.7 }} />
          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#C62828', margin: 0,
          }}>
            Handcrafted for You
          </p>
          <div style={{ width: '28px', height: '1px', background: '#C62828', opacity: 0.7 }} />
        </motion.div>

        {/* Heading — single line */}
        <motion.h2 {...fadeUp(0.1)} style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(26px, 3.8vw, 52px)',
          fontWeight: 700, fontStyle: 'italic',
          color: '#1a1a1a', lineHeight: 1.1,
          margin: 0, letterSpacing: '-0.01em',
          whiteSpace: 'nowrap',
        }}>
          Made with intention. Burned with love.
        </motion.h2>

        {/* CTA — directly under heading */}
        <motion.a
          {...fadeUp(0.18)}
          href="/collections"
          style={{
            display: 'inline-flex', alignItems: 'center', gap: '10px',
            padding: '13px 36px',
            background: '#C62828',
            color: '#ffffff',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            textDecoration: 'none',
            borderRadius: '100px',
            boxShadow: '0 6px 28px rgba(198,40,40,0.30)',
            transition: 'filter 0.25s ease, transform 0.25s ease',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.12)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)';
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
          }}
        >
          Shop the Collection
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </motion.a>

      </div>
    </section>
  );
}
