'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

export default function Newsletter() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section ref={ref} className="section-pad bg-[#000]" style={{ position: 'relative' }}>
      {/* Top fade from Contact dark bottom */}
      <div aria-hidden="true" style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '80px', pointerEvents: 'none',
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,1) 100%)',
      }} />
      <div className="container-md text-center" style={{ position: 'relative', zIndex: 1 }}>
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
            className="text-white font-bold mb-4"
            style={{
              fontFamily: "'Quintessential', Georgia, serif",
              fontSize: 'clamp(26px, 4vw, 50px)',
              fontWeight: 400,
              lineHeight: 1.1,
            }}
          >
            Get 15% off your
            <br />
            <em>first order.</em>
          </h2>

          <p className="text-white/50 text-[14px] mb-8 max-w-md mx-auto leading-relaxed">
            Subscribe for early access to new scents, behind-the-scenes content, and exclusive discounts.
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                aria-label="Email address"
                className="flex-1 px-5 py-4 bg-white/[0.06] border border-white/[0.12] text-white placeholder-white/30 text-[13px] focus:outline-none focus:border-[#C62026] transition-colors"
              />
              <button
                type="submit"
                className="btn-red whitespace-nowrap"
                style={{ borderRadius: 0 }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="text-white/25 text-[11px] mt-5 tracking-[0.5px]">
            No spam. Unsubscribe anytime.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
