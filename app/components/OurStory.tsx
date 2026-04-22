'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';


const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] as const },
});


export default function OurStory() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="story"
      ref={sectionRef}
      style={{
        position: 'relative',
        width: '100%',
        backgroundColor: '#ffffff',
        overflow: 'hidden',
        padding: 'clamp(24px, 3vw, 40px) 0 clamp(40px, 5vw, 64px)',
      }}
    >

      {/* ── Content wrapper ── */}
      <div style={{
        position: 'relative', zIndex: 1,
        maxWidth: '100%', margin: '0 auto',
        padding: '0 clamp(16px, 3vw, 40px)',
      }}>


        {/* ── Two-column: image left, text right ── */}
        <div
          className="story-cols"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px, 3vw, 48px)',
            alignItems: 'stretch',
          }}
        >

          {/* ── LEFT: Empty image placeholder ── */}
          <motion.div {...fadeUp(0)} style={{ display: 'flex', alignSelf: 'stretch' }}>
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              minHeight: '300px',
              borderRadius: '4px',
              overflow: 'hidden',
            }}>
              <Image
                src="/ourstory-img.jpg"
                alt="Our Story — Jacqueline's Enchanting Candles"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center bottom' }}
                sizes="(max-width: 860px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* ── RIGHT: Story content ── */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            {/* OUR STORY label */}
            <motion.div {...fadeUp(0.1)} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '32px', height: '1px', background: '#C62828', opacity: 0.6 }} />
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '10px', fontWeight: 700,
                  letterSpacing: '0.28em', textTransform: 'uppercase',
                  color: '#C62828', margin: 0,
                }}>
                  Our Story
                </p>
              </div>
            </motion.div>

            {/* Main heading */}
            <motion.h2 {...fadeUp(0.18)} style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(28px, 3.6vw, 48px)',
              fontWeight: 700, fontStyle: 'italic',
              color: '#111111', lineHeight: 1.12,
              margin: '0 0 20px',
              letterSpacing: '-0.01em',
            }}>
              It began with a simple flame.
            </motion.h2>

            {/* Story paragraph */}
            <motion.p {...fadeUp(0.26)} style={{ ...bodyStyle, flex: 1 }}>
              I began my candle journey in the quiet comfort of my own kitchen—where curiosity slowly turned into craft, and passion found its purpose. What started as a simple love for beautifully scented candles soon became something deeper; I found myself drawn to fragrances that felt just right, each one evoking a memory, a mood, a moment. Then one day, a thought sparked—<em style={{ fontStyle: 'italic', color: '#333' }}>why not create my own?</em> That moment led me to take a candle-making course, where everything finally clicked. Inspired and determined, I returned home, gathered everything I needed, and began creating. From that very first pour, Jacqueline&rsquo;s Enchanting Candles was born—and what started as a small idea quickly grew into something meaningful. Today, every candle is hand-poured with care, designed to bring warmth, calm, and story into every space.
            </motion.p>

            {/* Closing line */}
            <motion.p {...fadeUp(0.34)} style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(15px, 1.6vw, 18px)',
              fontStyle: 'italic', fontWeight: 400,
              color: '#555555',
              lineHeight: 1.5,
              margin: '8px 0 0',
            }}>
              Where every flame tells a story.
            </motion.p>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .story-cols {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

const bodyStyle: React.CSSProperties = {
  fontFamily: 'Montserrat, sans-serif',
  fontSize: 'clamp(14px, 1.3vw, 15px)',
  fontWeight: 400,
  color: '#555555',
  lineHeight: 1.85,
  letterSpacing: '0.01em',
  textAlign: 'justify',
  margin: 0,
};
