'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const candleY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const logoScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.04]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen w-full overflow-hidden bg-white"
    >
      {/* Candle image — full background */}
      <motion.div
        style={{ y: candleY }}
        className="absolute inset-0 z-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        aria-hidden="true"
      >
        <Image
          src="/hero.png"
          alt=""
          fill
          className="object-contain object-center"
          priority
          quality={100}
        />
      </motion.div>

      {/* Logo overlay — transparent PNG, sits above candles */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 z-10"
        style={{ top: '8%', scale: logoScale }}
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src="/hero-overlay.png"
          alt="U-Heard"
          width={620}
          height={200}
          priority
          className="w-[260px] md:w-[420px] lg:w-[620px] h-auto object-contain"
        />
      </motion.div>
    </section>
  );
}
