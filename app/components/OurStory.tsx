'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';

const values = [
  { label: '100% Vegan', desc: 'Soy wax only — no paraffin, no synthetic dyes.' },
  { label: 'Small Batch', desc: 'Hand-poured in limited quantities for consistent quality.' },
  { label: 'Clean Wicks', desc: 'Cotton and wood wicks — clean burning every time.' },
  { label: 'Recyclable', desc: 'Vessels designed to be repurposed after the candle is gone.' },
];

export default function OurStory() {
  const ref = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const { scrollYProgress } = useScroll({ target: imgRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%']);

  return (
    <section ref={ref} id="story" className="section-pad bg-white overflow-hidden">
      <div className="container-lg">

        {/* Red accent label */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-3 mb-10"
        >
          <div className="w-8 h-px bg-[#C62026]" />
          <p className="text-[10px] uppercase tracking-[3px] text-[#C62026] font-bold">Our Story</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Image */}
          <motion.div
            ref={imgRef}
            initial={{ opacity: 0, x: -24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative aspect-[4/5] overflow-hidden order-2 lg:order-1"
          >
            <motion.div style={{ y: imgY }} className="absolute inset-[-8%] w-[116%] h-[116%]">
              {/*
                Replace with:
                <Image src="/story.jpg" alt="Our story" fill className="object-cover" />
              */}
              <div className="w-full h-full bg-[#2d2d2d]" />
            </motion.div>

            {/* Founded badge */}
            <div className="absolute bottom-6 right-6 bg-[#C62026] text-white px-5 py-4 text-center">
              <p className="text-[28px] font-bold leading-none" style={{ fontFamily: "'Montserrat', sans-serif" }}>2019</p>
              <p className="text-[9px] uppercase tracking-[2px] mt-1 opacity-80">Founded</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.8, ease: 'easeOut' }}
            className="order-1 lg:order-2"
          >
            <h2
              className="text-[#000] font-bold mb-5"
              style={{
                fontFamily: "'Quintessential', Georgia, serif",
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 400,
                lineHeight: 1.15,
              }}
            >
              Scent is the closest
              <br />
              <em>thing to memory.</em>
            </h2>

            <div className="w-10 h-0.5 bg-[#C62026] mb-6" />

            <p className="text-[#434343] text-[15px] leading-relaxed mb-4">
              U-Heard was born from a simple belief: that a great candle can transport you instantly —
              to a summer morning, a grandmother's kitchen, a forest after rain.
            </p>
            <p className="text-[#434343] text-[15px] leading-relaxed mb-8">
              We create botanical fragrances inspired by the beauty of nature and the wonder of travel.
              Every scent is developed slowly, tested obsessively, and poured by hand.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-8">
              {values.map((v, i) => (
                <motion.div
                  key={v.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.09, duration: 0.5, ease: 'easeOut' }}
                  className="border-l-2 border-[#C62026] pl-3"
                >
                  <p className="text-[12px] font-bold text-[#000] mb-0.5 uppercase tracking-[0.5px]">{v.label}</p>
                  <p className="text-[12px] text-[#8f8f8f] leading-snug">{v.desc}</p>
                </motion.div>
              ))}
            </div>

            <a href="#story" className="btn-red">Read Our Story</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
