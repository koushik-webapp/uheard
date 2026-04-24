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
    title: 'Information We Collect',
    body: 'We may collect basic details such as your name, email, shipping and billing address, and payment information when you place an order. We also collect non-personal data like browser type, device information, and usage activity through cookies.',
  },
  {
    title: 'How We Use Your Information',
    body: 'Your information is used to process orders, send shipping updates, improve your browsing experience, and communicate with you — only if you have opted in to receive updates from us.',
  },
  {
    title: 'Cookies',
    body: 'We use cookies to enhance your browsing experience and understand site performance. You may disable cookies in your browser settings, though some features may not function properly if you do.',
  },
  {
    title: 'Data Protection',
    body: 'We use secure payment gateways and SSL encryption to protect your information. We do not store full payment card details on our servers. Your security is a priority.',
  },
  {
    title: 'Sharing of Information',
    body: 'We do not sell, trade, or rent your personal data to third parties. Information is only shared with trusted service providers to the extent necessary to complete your order.',
  },
  {
    title: 'Your Rights',
    body: 'You may request to access, update, or delete your personal data at any time. You may also unsubscribe from any marketing communications whenever you choose.',
  },
  {
    title: "Children's Privacy",
    body: 'Our website is not intended for children under the age of 13. We do not knowingly collect or store personal information from minors.',
  },
  {
    title: 'Updates to This Policy',
    body: 'We may update this Privacy Policy from time to time. Continued use of our website following any changes constitutes your acceptance of the updated policy.',
  },
];

export default function PrivacyPage() {
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
            Privacy Policy
          </motion.h1>

          <motion.p {...fadeUp(0.14)} style={{
            fontFamily: '"Playfair Display", Georgia, serif',
            fontSize: 'clamp(14px, 1.4vw, 17px)',
            fontStyle: 'italic', fontWeight: 400,
            color: '#888888', lineHeight: 1.65,
            margin: '0 auto 10px', whiteSpace: 'nowrap',
          }}>
            A simple and transparent approach to how we handle your information.
          </motion.p>

          <motion.p {...fadeUp(0.18)} style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: 'clamp(12.5px, 1.2vw, 14px)',
            fontWeight: 400, color: '#999999',
            lineHeight: 1.7, margin: '0 auto',
            whiteSpace: 'nowrap',
          }}>
            We respect your privacy and are committed to protecting your personal data when you visit U-HEARD or purchase from us.
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
            {sections.map((s, i) => (
              <motion.div
                key={s.title}
                {...fadeUp(0.1 + i * 0.06)}
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
                color: '#777777', lineHeight: 1.7, margin: '0 0 4px',
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
              <p style={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '11px', fontWeight: 400,
                color: '#bbbbbb', letterSpacing: '0.04em', margin: 0,
              }}>
                Last updated: April 2026
              </p>
            </div>

          </motion.div>
        </div>

      </main>
      <Footer />
    </>
  );
}
