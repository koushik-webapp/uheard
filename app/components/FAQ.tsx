'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const generalFAQs = [
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit cards, including Visa, Mastercard, and American Express. We also support secure online payment options when available at checkout.',
  },
  {
    q: 'When will I receive my order?',
    a: 'Orders are processed as quickly as possible. Delivery times may vary depending on your location and shipping carrier.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Shipping availability may vary. Please contact us before placing an international order.',
  },
  {
    q: 'How can I track my order?',
    a: 'Once your order ships, tracking information will be shared if available.',
  },
  {
    q: 'What is your return or exchange policy?',
    a: 'Returns are accepted within 10 days for unused items in original condition. Please contact us at uheard4life@gmail.com to begin the process.',
  },
  {
    q: "What if my question isn't answered here?",
    a: "We're happy to help. Email us at uheard4life@gmail.com or send your query through our contact form.",
  },
];

const candleFAQs = [
  {
    q: 'How should I care for my candle?',
    a: 'Trim the wick before each burn and allow the wax to melt evenly across the top during the first use. This helps prevent tunneling and gives a cleaner burn.',
  },
  {
    q: 'What kind of wax do you use?',
    a: 'Our candles are handcrafted using quality soy wax and premium fragrance oils.',
  },
  {
    q: 'Why is my candle not giving enough scent?',
    a: 'A weak scent can happen if the wick is too long, the candle is not burned long enough, or the space is too large. Trim the wick and allow a full melt pool for the best scent throw.',
  },
  {
    q: 'What if my candle arrives damaged?',
    a: 'Please contact us with your order details and photos of the damaged item so we can help resolve it.',
  },
];

function FAQItem({
  item,
  id,
  activeId,
  onToggle,
  delay,
}: {
  item: { q: string; a: string };
  id: string;
  activeId: string | null;
  onToggle: (id: string) => void;
  delay: number;
}) {
  const isOpen = activeId === id;

  return (
    <motion.div {...fadeUp(delay)}>
      <button
        onClick={() => onToggle(id)}
        style={{
          width: '100%',
          background: isOpen ? '#ffffff' : '#f8f6f3',
          border: isOpen ? '1px solid rgba(198,40,40,0.15)' : '1px solid rgba(0,0,0,0.06)',
          borderRadius: '14px',
          padding: 'clamp(16px, 2vw, 20px) clamp(18px, 2.5vw, 24px)',
          cursor: 'pointer',
          textAlign: 'left',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: '16px',
          transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
          boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.06)' : 'none',
          marginBottom: '10px',
        }}
        aria-expanded={isOpen}
      >
        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: 'clamp(13px, 1.2vw, 14.5px)',
          fontWeight: 600,
          color: isOpen ? '#0f0f0f' : '#2a2a2a',
          lineHeight: 1.5,
          flex: 1,
          transition: 'color 0.2s ease',
        }}>
          {item.q}
        </span>

        <span style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '20px',
          fontWeight: 300,
          color: isOpen ? '#C62828' : '#888888',
          lineHeight: 1,
          flexShrink: 0,
          marginTop: '1px',
          transition: 'color 0.25s ease',
          userSelect: 'none',
        }}>
          {isOpen ? '−' : '+'}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden', marginTop: '-4px', marginBottom: '10px' }}
          >
            <div style={{
              background: '#ffffff',
              border: '1px solid rgba(198,40,40,0.10)',
              borderTop: 'none',
              borderRadius: '0 0 14px 14px',
              padding: 'clamp(14px, 1.8vw, 18px) clamp(18px, 2.5vw, 24px) clamp(16px, 2vw, 22px)',
            }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: 'clamp(12.5px, 1.1vw, 14px)',
                fontWeight: 400,
                color: '#5f5f5f',
                lineHeight: 1.85,
                margin: 0,
                letterSpacing: '0.01em',
              }}>
                {item.a}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggle = (id: string) => setActiveId(prev => (prev === id ? null : id));

  return (
    <section style={{
      position: 'relative',
      padding: 'clamp(64px, 8vw, 100px) clamp(16px, 4vw, 56px)',
    }}>
      <div style={{ position: 'relative', zIndex: 1, maxWidth: '1300px', margin: '0 auto' }}>

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <motion.p {...fadeUp(0)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#C62828', margin: '0 0 14px',
          }}>
            Support
          </motion.p>

          <motion.h2 {...fadeUp(0.08)} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(32px, 4vw, 54px)',
            fontWeight: 700, fontStyle: 'italic',
            color: '#111111', lineHeight: 1.1,
            margin: '0 0 16px', letterSpacing: '-0.01em',
          }}>
            Frequently Asked Questions
          </motion.h2>

          <motion.p {...fadeUp(0.14)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(13px, 1.2vw, 15px)',
            fontWeight: 400, color: '#888888',
            lineHeight: 1.7, margin: '0 auto',
            maxWidth: '520px',
          }}>
            Everything you need to know about our candles, orders, and support.
          </motion.p>
        </div>

        {/* ── Two-column grid ── */}
        <div
          className="faq-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(24px, 4vw, 56px)',
            alignItems: 'start',
          }}
        >
          {/* Left column */}
          <div>
            <motion.p {...fadeUp(0.18)} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#C62828', margin: '0 0 20px',
            }}>
              General Order and Shipping Questions
            </motion.p>

            {generalFAQs.map((item, i) => (
              <FAQItem
                key={`general-${i}`}
                id={`general-${i}`}
                item={item}
                activeId={activeId}
                onToggle={toggle}
                delay={0.22 + i * 0.05}
              />
            ))}
          </div>

          {/* Right column */}
          <div>
            <motion.p {...fadeUp(0.18)} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '13px', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: '#C62828', margin: '0 0 20px',
            }}>
              Candles
            </motion.p>

            {candleFAQs.map((item, i) => (
              <FAQItem
                key={`candle-${i}`}
                id={`candle-${i}`}
                item={item}
                activeId={activeId}
                onToggle={toggle}
                delay={0.22 + i * 0.05}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
