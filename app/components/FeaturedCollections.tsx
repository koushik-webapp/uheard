'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const collections = [
  {
    name: 'Signature Collection',
    description: 'Our most-loved scents, hand-poured weekly',
    tag: 'Bestselling',
    bg: '#2d2d2d',
    textColor: '#ffffff',
    href: '#shop',
  },
  {
    name: 'Seasonal Bloom',
    description: 'Limited botanicals captured at peak season',
    tag: 'Limited Edition',
    bg: '#C62026',
    textColor: '#ffffff',
    href: '#shop',
  },
  {
    name: 'Travel Memories',
    description: 'Scents inspired by places worth remembering',
    tag: 'New Arrivals',
    bg: '#f8f8f8',
    textColor: '#000000',
    href: '#shop',
  },
];

const products = [
  { name: 'Amber & Cedar', price: '$38', size: '8 oz', bg: '#e8d5b0', tag: 'Bestseller' },
  { name: 'Midnight Jasmine', price: '$38', size: '8 oz', bg: '#c8d4c0', tag: null },
  { name: 'Sea Salt & Driftwood', price: '$42', size: '10 oz', bg: '#c0cad4', tag: 'New' },
  { name: 'Sandalwood & Vanilla', price: '$38', size: '8 oz', bg: '#d4c8bc', tag: null },
  { name: 'Black Fig & Moss', price: '$45', size: '12 oz', bg: '#c8bec8', tag: 'New' },
  { name: 'Citrus & White Tea', price: '$38', size: '8 oz', bg: '#d4d0b8', tag: null },
  { name: 'Oud & Amber', price: '$52', size: '12 oz', bg: '#c4a888', tag: 'Limited' },
  { name: 'Lavender Fields', price: '$38', size: '8 oz', bg: '#c8c4d4', tag: null },
];

const StarRating = () => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#C62026">
        <path d="M5 1l1.2 2.4L9 3.9l-2 1.9.5 2.7L5 7.3 2.5 8.5 3 5.8 1 3.9l2.8-.5L5 1z"/>
      </svg>
    ))}
  </div>
);

const filters = ['All', 'New', 'Bestsellers', 'Limited'];

export default function FeaturedCollections() {
  const collRef = useRef<HTMLElement>(null);
  const prodRef = useRef<HTMLElement>(null);
  const collInView = useInView(collRef, { once: true, margin: '-60px' });
  const prodInView = useInView(prodRef, { once: true, margin: '-60px' });

  return (
    <>
      {/* ── Collections ── */}
      <section ref={collRef} id="collections" className="section-pad bg-white">
        <div className="container-lg">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={collInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-10"
          >
            <p className="text-[10px] uppercase tracking-[3px] text-[#C62026] font-semibold mb-2">Explore</p>
            <h2 className="text-[#000] font-bold" style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontFamily: "'Montserrat', sans-serif" }}>
              Shop by Collection
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {collections.map((col, i) => (
              <motion.a
                key={col.name}
                href={col.href}
                initial={{ opacity: 0, y: 24 }}
                animate={collInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.6, ease: 'easeOut' }}
                className="group block relative overflow-hidden aspect-[4/5]"
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{ background: col.bg }}
                />
                {/* Overlay */}
                <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.18)' }} />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-[#C62026] text-white text-[9px] font-bold tracking-[1.5px] uppercase">
                    {col.tag}
                  </span>
                </div>

                {/* Text */}
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <h3 className="font-bold mb-1 uppercase tracking-[1px]"
                    style={{ color: col.textColor, fontSize: '18px', fontFamily: "'Montserrat', sans-serif" }}>
                    {col.name}
                  </h3>
                  <p className="text-[13px] mb-4" style={{ color: col.textColor, opacity: 0.75 }}>{col.description}</p>
                  <span className="text-[10px] uppercase tracking-[2px] font-bold border-b pb-0.5 transition-colors"
                    style={{ color: col.textColor, borderColor: `${col.textColor}60` }}>
                    Shop Now →
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section ref={prodRef} id="shop" className="section-pad" style={{ background: '#f8f8f8' }}>
        <div className="container-lg">
          {/* Header + filters */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={prodInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-10"
          >
            <div>
              <p className="text-[10px] uppercase tracking-[3px] text-[#C62026] font-semibold mb-1">Products</p>
              <h2 className="text-[#000] font-bold" style={{ fontSize: 'clamp(22px, 3.5vw, 38px)', fontFamily: "'Montserrat', sans-serif" }}>
                Our Bestsellers
              </h2>
            </div>

            <div className="flex gap-2 flex-wrap">
              {filters.map((f, i) => (
                <button
                  key={f}
                  className={`text-[10px] uppercase tracking-[1px] px-4 py-2 font-semibold border transition-all ${
                    i === 0
                      ? 'bg-[#C62026] text-white border-[#C62026]'
                      : 'bg-white text-[#434343] border-[#e0e0e0] hover:border-[#C62026] hover:text-[#C62026]'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {products.map((p, i) => (
              <motion.article
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                animate={prodInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.06, duration: 0.55, ease: 'easeOut' }}
                className="group cursor-pointer"
              >
                {/* Image */}
                <div className="product-img-wrap aspect-square mb-3 relative">
                  <div className="w-full h-full" style={{ background: p.bg }} />
                  {p.tag && (
                    <span className="absolute top-2 left-2 text-[9px] uppercase tracking-[1px] font-bold px-2 py-1 bg-[#C62026] text-white">
                      {p.tag}
                    </span>
                  )}
                  {/* Quick Add hover */}
                  <div className="absolute bottom-0 inset-x-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#C62026] text-white text-[10px] uppercase tracking-[1.5px] text-center py-3 font-bold">
                    Quick Add
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <StarRating />
                  <h3 className="text-[13px] font-semibold text-[#000] mt-1 leading-snug">{p.name}</h3>
                  <p className="text-[11px] text-[#8f8f8f] uppercase tracking-[0.5px]">{p.size}</p>
                  <div className="flex items-center justify-between mt-1">
                    <p className="text-[14px] font-bold text-[#000]">{p.price}</p>
                    <button className="text-[10px] uppercase tracking-[1px] text-[#C62026] font-semibold hover:underline">
                      + Cart
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* View all */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={prodInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-center mt-12"
          >
            <a href="#" className="btn-black">View All Products</a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
