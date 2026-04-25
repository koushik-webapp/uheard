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
          src="/hero-collections.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-bottom"
        />
      </motion.div>

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
          {/* Inline wrapper so underline width = text width */}
          <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'stretch' }}>
            <div style={{ display: 'flex', alignItems: 'baseline' }}>
              <span style={{ ...titleFont, color: '#C62828' }}>U</span>
              <span style={{ ...titleFont, color: '#111111' }}>-</span>
              <span style={{ ...titleFont, color: '#111111' }}>HEARD</span>
            </div>
            <div style={{ height: '3px', backgroundColor: '#C62828', width: '100%', marginTop: '14px', borderRadius: '1px' }} />
          </div>
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

      </div>
    </section>
  );
}
