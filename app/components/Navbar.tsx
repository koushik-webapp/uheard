'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import NavHeader from '@/components/ui/nav-header';

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Collections', href: '#collections' },
  { label: 'Our Story', href: '#story' },
  { label: 'Journal', href: '#journal' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const cartCount = 0;

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-[#2b2b2b]/95 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.08)]' : 'bg-[#2b2b2b]/10 backdrop-blur-sm'
        }`}
      >
        <div className="container-lg">
          <div className="flex items-center justify-between h-[68px] md:h-[80px]">

            {/* Left: Logo + hamburger (mobile) */}
            <div className="flex items-center gap-4">
              <button
                className="md:hidden flex flex-col gap-[5px] py-1"
                onClick={() => setMenuOpen(v => !v)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-[1.5px] bg-[#2b2b2b] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-[#2b2b2b] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-5 h-[1.5px] bg-[#2b2b2b] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
              </button>

              <a href="/">
                <Image
                  src="/logo.png"
                  alt="U-Heard logo"
                  width={130}
                  height={44}
                  priority
                  className="object-contain h-10 w-auto"
                />
              </a>
            </div>

            {/* Center: Pill Nav (desktop) */}
            <div className="hidden md:block">
              <NavHeader />
            </div>

            {/* Right: Search, Account, Cart */}
            <div className="flex items-center gap-4">
              {/* Search */}
              <button
                onClick={() => setSearchOpen(v => !v)}
                aria-label="Search"
                className="text-[#2b2b2b] hover:text-[#C62026] transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Account */}
              <a href="/account" aria-label="My Account" className="hidden md:block text-[#2b2b2b] hover:text-[#C62026] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>

              {/* Cart */}
              <button aria-label="Cart" className="relative text-[#2b2b2b] hover:text-[#C62026] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-[#C62026] text-white text-[9px] font-bold flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Search dropdown */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="overflow-hidden border-t border-[#e0e0e0] bg-[#2b2b2b]"
            >
              <div className="container-lg py-4">
                <div className="relative">
                  <input
                    autoFocus
                    type="text"
                    placeholder="Search candles, scents, collections..."
                    className="w-full border-b border-[#c0c0c0] pb-2 pr-8 text-[14px] text-[#2b2b2b] placeholder-[#8f8f8f] focus:outline-none focus:border-[#C62026] transition-colors bg-transparent"
                  />
                  <span className="absolute right-0 top-0 text-[#8f8f8f]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M20 20l-3.5-3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Mobile slide-in menu */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 md:hidden"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="fixed top-0 left-0 bottom-0 z-50 w-72 bg-white shadow-2xl flex flex-col md:hidden"
            >
              {/* Mobile header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#e0e0e0]" style={{ background: '#C62026' }}>
                <Image src="/logo.png" alt="U-Heard" width={100} height={34} className="object-contain h-8 w-auto brightness-0 invert" />
                <button onClick={() => setMenuOpen(false)} aria-label="Close menu" className="text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </button>
              </div>

              <nav className="flex flex-col py-4 overflow-y-auto flex-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.25, ease: 'easeOut' }}
                    className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[1px] text-[#2b2b2b] hover:text-[#C62026] hover:bg-[#f8f8f8] border-b border-[#f0f0f0] transition-colors"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              <div className="p-5 border-t border-[#e0e0e0]">
                <a href="/account" className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[1px] text-[#434343]">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  My Account
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
