'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [submitted] = useState(false);

  return (
    <section ref={ref} className="section-pad bg-[#000]">
      <div className="container-md text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          {/* Red accent bar */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#C62026]" />
            <p className="text-[10px] uppercase tracking-[3px] text-[#C62026] font-bold">Join the Community</p>
            <div className="w-8 h-px bg-[#C62026]" />
          </div>


          <h2
            className="text-white font-bold mb-3"
            style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: 'clamp(28px, 5vw, 58px)',
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
            }}
          >
            15% OFF ON CART TOTAL
          </h2>

          <p style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(13px, 1.4vw, 15px)',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.55)',
            letterSpacing: '0.08em',
            marginBottom: '28px',
            textAlign: 'center',
          }}>
            Use Code&nbsp;
            <span style={{
              color: '#ffffff',
              fontWeight: 800,
              letterSpacing: '0.12em',
              background: 'rgba(198,40,38,0.25)',
              padding: '3px 10px',
              borderRadius: '4px',
              border: '1px solid rgba(198,40,38,0.4)',
            }}>
              UHEARD15
            </span>
          </p>


          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex flex-col items-center gap-3"
            >
              <div className="w-10 h-10 border-2 border-[#C62026] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 8l4 4 8-8" stroke="#C62026" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-white text-[15px] font-semibold">You're in! Check your inbox.</p>
              <p className="text-white/40 text-[13px]">Your 15% discount code is on its way.</p>
            </motion.div>
          ) : (
            <div className="flex flex-col items-center gap-4 w-full">
              <a
                href="/collections"
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
                  padding: '14px 40px',
                  background: '#C62026',
                  color: '#ffffff',
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: '12px', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  textDecoration: 'none',
                  borderRadius: '100px',
                  boxShadow: '0 6px 24px rgba(198,40,38,0.35)',
                  transition: 'filter 0.25s ease, transform 0.25s ease',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.15)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1)';
                  (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
                }}
              >
                Subscribe & Shop Now
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          )}

          <p className="text-white/25 text-[11px] mt-6 tracking-[0.5px]">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
