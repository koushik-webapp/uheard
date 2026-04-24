'use client';

import { SimpleHeader } from '@/components/ui/simple-header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] as const },
});

const sections = [
  {
    title: 'About Us',
    body: 'U-HEARD was established in 2024 and is based in East Orange, New Jersey. We offer handcrafted soy candles, custom apparel, and written works by the brand\'s founder.',
  },
  {
    title: 'Use of Our Website',
    body: 'You agree to use our website responsibly and in accordance with applicable laws. Any misuse or unauthorized use is prohibited.',
  },
  {
    title: 'Products',
    body: 'All products are handcrafted and may vary slightly in appearance. We aim for accuracy, but minor differences may occur.',
  },
  {
    title: 'Pricing & Payments',
    body: 'Prices are listed in USD and may change over time. Payment is required at checkout using accepted methods (Visa, MasterCard, Apple Pay). Orders are confirmed only after successful payment.',
  },
  {
    title: 'Shipping & Delivery',
    body: 'Shipping costs are calculated at checkout. Delivery timelines are estimates and may vary. Responsibility transfers to the customer once the order is handed to the carrier.',
  },
  {
    title: 'Returns & Refunds',
    body: 'Returns are accepted within 10 days of purchase for unused items in original condition. To request a return, contact: uheard4life@gmail.com',
  },
  {
    title: 'Intellectual Property',
    body: 'All content, branding, and designs belong to U-HEARD and may not be used without permission.',
  },
  {
    title: 'Limitation of Liability',
    body: 'We are not liable for indirect or incidental damages resulting from the use of our products or website.',
  },
  {
    title: 'Governing Law',
    body: 'These terms are governed by the laws of the State of New Jersey.',
  },
  {
    title: 'Updates',
    body: 'We may update these terms occasionally. Continued use means acceptance of any changes.',
  },
];

export default function TermsPage() {
  return (
    <>
      <SimpleHeader />
      <main style={{ backgroundColor: '#f7f4ef', minHeight: '100vh', paddingTop: '68px' }}>

        {/* ── Page header ── */}
        <div style={{
          textAlign: 'center',
          padding: 'clamp(56px, 8vw, 96px) clamp(24px, 6vw, 80px) clamp(40px, 5vw, 60px)',
        }}>
          <motion.p {...fadeUp(0)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '10px', fontWeight: 700,
            letterSpacing: '0.28em', textTransform: 'uppercase',
            color: '#C62828', margin: '0 0 16px',
          }}>
            Legal
          </motion.p>

          <motion.h1 {...fadeUp(0.08)} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(38px, 5vw, 62px)',
            fontWeight: 700, fontStyle: 'italic',
            color: '#111111', lineHeight: 1.06,
            margin: '0 0 20px', letterSpacing: '-0.01em',
          }}>
            Terms &amp; Conditions
          </motion.h1>

          <motion.p {...fadeUp(0.14)} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            fontStyle: 'italic', fontWeight: 400,
            color: '#888888', lineHeight: 1.65,
            margin: '0 auto 10px', maxWidth: '520px',
          }}>
            A simple and transparent outline of how we operate at U-HEARD.
          </motion.p>

          <motion.p {...fadeUp(0.18)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(12.5px, 1.2vw, 14px)',
            fontWeight: 400, color: '#999999',
            lineHeight: 1.7, margin: '0 auto',
            maxWidth: '480px',
          }}>
            By using our website or purchasing from us, you agree to the following terms.
          </motion.p>
        </div>

        {/* ── Main card ── */}
        <div style={{
          maxWidth: '1300px',
          margin: '0 auto',
          padding: '0 clamp(16px, 3vw, 40px) clamp(64px, 8vw, 100px)',
        }}>
          <motion.div
            {...fadeUp(0.22)}
            style={{
              background: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '22px',
              border: '1px solid rgba(0,0,0,0.06)',
              boxShadow: '0 8px 48px rgba(0,0,0,0.07), 0 2px 12px rgba(0,0,0,0.04)',
              padding: 'clamp(32px, 5vw, 72px)',
              overflow: 'hidden',
            }}
          >
            {/* Last updated note */}
            <motion.p {...fadeUp(0.26)} style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '11px', fontWeight: 400,
              color: '#bbbbbb', letterSpacing: '0.04em',
              margin: '0 0 clamp(28px, 3.5vw, 40px)',
            }}>
              Last updated: September 26, 2025
            </motion.p>

            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(0.1 + i * 0.05)}
                style={{
                  paddingBottom: i < sections.length - 1 ? 'clamp(24px, 3vw, 36px)' : 0,
                  marginBottom: i < sections.length - 1 ? 'clamp(24px, 3vw, 36px)' : 0,
                  borderBottom: i < sections.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                }}
              >
                {/* Section label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ width: '18px', height: '1px', background: '#C62828', opacity: 0.6, flexShrink: 0 }} />
                  <p style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '10px', fontWeight: 700,
                    letterSpacing: '0.24em', textTransform: 'uppercase',
                    color: '#C62828', margin: 0,
                  }}>
                    {s.title}
                  </p>
                </div>

                {/* Body */}
                <p style={{
                  fontFamily: 'Montserrat, sans-serif',
                  fontSize: 'clamp(13px, 1.2vw, 14.5px)',
                  fontWeight: 400,
                  color: '#5f5f5f',
                  lineHeight: 1.85,
                  letterSpacing: '0.01em',
                  margin: 0,
                }}>
                  {s.body}
                </p>
              </motion.div>
            ))}

            {/* Divider */}
            <div style={{ width: '100%', height: '1px', background: 'rgba(0,0,0,0.07)', margin: 'clamp(28px, 3.5vw, 40px) 0' }} />

            {/* Contact note */}
            <div style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '13.5px', fontWeight: 400,
                color: '#777777', lineHeight: 1.7, margin: 0,
              }}>
                Questions? Contact us at{' '}
                <a
                  href="mailto:uheard4life@gmail.com"
                  style={{
                    color: '#C62828', fontWeight: 600,
                    textDecoration: 'none',
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'underline'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.textDecoration = 'none'; }}
                >
                  uheard4life@gmail.com
                </a>
              </p>
            </div>

          </motion.div>
        </div>

      </main>
      <Footer />
    </>
  );
}
