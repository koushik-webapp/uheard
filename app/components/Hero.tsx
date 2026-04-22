'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const fadeIn = (delay: number) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1.0, delay, ease: 'easeInOut' as const },
});

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const candleY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);

  const titleFont: React.CSSProperties = {
    fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
    fontWeight: 700,
    fontSize: 'clamp(56px, 10vw, 120px)',
    letterSpacing: '-0.015em',
    lineHeight: 1,
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Video background */}
      <motion.div
        style={{ y: candleY }}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <video
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Bottom fade — dissolves hero into OurStory */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 10,
          height: '260px', pointerEvents: 'none',
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.72) 70%, rgba(255,255,255,1) 100%)',
        }}
      />

      {/* Hero content — upper-center */}
      <div
        className="absolute inset-0 z-20 flex flex-col items-center"
        style={{ paddingTop: '10%' }}
      >
        {/* Title + underline */}
        <motion.div
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          {...fadeIn(1.0)}
        >
          {/* U HEARD row */}
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <span style={{ ...titleFont, color: '#C62828' }}>U</span>
            <span style={{ ...titleFont, color: '#111111', marginLeft: '0.18em' }}>HEARD</span>
          </div>

          {/* Underline — full width, bold */}
          <div
            style={{
              height: '3px',
              backgroundColor: '#C62828',
              width: '100%',
              marginTop: '14px',
              borderRadius: '1px',
            }}
          />
        </motion.div>

        {/* Quote */}
        <motion.p
          style={{
            fontFamily: 'Quintessential, Georgia, "Times New Roman", serif',
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(20px, 2.5vw, 31px)',
            color: '#333333',
            letterSpacing: '0.07em',
            lineHeight: 1.5,
            marginTop: 'clamp(12px, 1.6vw, 18px)',
          }}
          {...fadeIn(1.2)}
        >
          Where Every Flame Tells a Story.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#collections"
          style={{
            display: 'inline-block',
            marginTop: 'clamp(18px, 2.5vw, 28px)',
            padding: '12px 36px',
            backgroundColor: '#C62828',
            color: '#ffffff',
            fontFamily: 'Montserrat, Helvetica Neue, Arial, sans-serif',
            fontWeight: 600,
            fontSize: '11px',
            letterSpacing: '0.12em',
            textTransform: 'uppercase' as const,
            borderRadius: '100px',
            border: '1px solid rgba(210,170,90,0.2)',
            boxShadow: '0 6px 24px rgba(198,40,40,0.22)',
            textDecoration: 'none',
            transition: 'filter 0.3s ease',
          }}
          {...fadeIn(1.4)}
          onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)'; }}
        >
          Explore the Collection
        </motion.a>
      </div>
    </section>
  );
}
