'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

/* ─── Data ───────────────────────────────────────────────────────────────── */
const products = [
  {
    id: 1,
    name: 'Bartlett Pear',
    scentFamily: 'FRUITY / FLORAL',
    smellsLike: 'Sun-ripened pear with a whisper of soft white blossom.',
    price: '$22.00',
    reviews: 34,
    rating: 5,
    badge: 'BESTSELLER',
    image: '/candles/bartlett-pear.png',
  },
  {
    id: 2,
    name: 'Coco Chanel Inspired',
    scentFamily: 'WARM / POWDERY',
    smellsLike: 'Powdery iris, soft musk, and timeless femininity.',
    price: '$24.00',
    reviews: 51,
    rating: 5,
    badge: 'BESTSELLER',
    image: '/candles/coco-chanel.png',
  },
  {
    id: 3,
    name: 'Fresh Rose',
    scentFamily: 'FLORAL / ROMANTIC',
    smellsLike: 'Fresh-cut roses with a dewy green finish.',
    price: '$22.00',
    reviews: 28,
    rating: 4.5,
    badge: null,
    image: '/candles/fresh-rose.png',
  },
  {
    id: 4,
    name: 'Lavender',
    scentFamily: 'HERBAL / CALMING',
    smellsLike: 'Lavender fields, chamomile, and warm amber.',
    price: '$20.00',
    reviews: 21,
    rating: 4.5,
    badge: null,
    image: '/candles/lavender.png',
  },
  {
    id: 5,
    name: 'Gorgeous Gucci',
    scentFamily: 'FRUITY / FLORAL',
    smellsLike: 'Pear blossom, gardenia, and a base of brown sugar.',
    price: '$24.00',
    reviews: 19,
    rating: 5,
    badge: 'BESTSELLER',
    image: '/candles/gorgeous-gucci.png',
  },
  {
    id: 6,
    name: 'Tommy Girl',
    scentFamily: 'FRESH / FLORAL',
    smellsLike: 'Apple blossom, honeysuckle, and clean cedar.',
    price: '$22.00',
    reviews: 25,
    rating: 4,
    badge: null,
    image: '/candles/tommy-girl.png',
  },
  {
    id: 7,
    name: 'Honeysuckle',
    scentFamily: 'SWEET / FLORAL',
    smellsLike: 'Honeysuckle nectar with jasmine and warm vanilla.',
    price: '$20.00',
    reviews: 17,
    rating: 5,
    badge: null,
    image: '/candles/honeysuckle.png',
  },
];

/* ─── Star Rating ────────────────────────────────────────────────────────── */
function StarRating({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
      {[1, 2, 3, 4, 5].map(i => {
        const filled = i <= Math.floor(rating);
        const half = !filled && i - 0.5 <= rating;
        return (
          <svg key={i} width="13" height="13" viewBox="0 0 24 24">
            {half ? (
              <>
                <defs>
                  <linearGradient id={`h${i}`}>
                    <stop offset="50%" stopColor="#111" />
                    <stop offset="50%" stopColor="#ddd" />
                  </linearGradient>
                </defs>
                <polygon
                  points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                  fill={`url(#h${i})`}
                />
              </>
            ) : (
              <polygon
                points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                fill={filled ? '#111111' : '#e0e0e0'}
              />
            )}
          </svg>
        );
      })}
    </div>
  );
}

/* ─── Cart Icon ──────────────────────────────────────────────────────────── */
function CartIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  );
}

/* ─── Product Card ───────────────────────────────────────────────────────── */
type Product = typeof products[0];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setRevealed(true); },
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 28 }}
      animate={revealed ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.72, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {/* ── Image area ── */}
      <div style={{
        position: 'relative',
        aspectRatio: '3 / 4',
        background: '#f5f4f1',
        overflow: 'hidden',
        borderRadius: '3px',
      }}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center top',
            filter: hovered ? 'grayscale(0) brightness(1.04)' : 'grayscale(1) brightness(1.02)',
            transform: hovered ? 'scale(1.025)' : 'scale(1)',
            transition: 'filter 0.55s ease, transform 0.55s ease',
          }}
        />

        {/* Badge */}
        {product.badge && (
          <div style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'rgba(60,58,56,0.82)',
            backdropFilter: 'blur(6px)',
            padding: '5px 10px',
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '9px', fontWeight: 700,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#ffffff',
          }}>
            {product.badge}
          </div>
        )}

        {/* Cart button */}
        <button
          aria-label="Add to bag"
          style={{
            position: 'absolute', bottom: '12px', right: '12px',
            width: '34px', height: '34px',
            background: 'rgba(255,255,255,0.90)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0,0,0,0.10)',
            borderRadius: '3px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: '#111', cursor: 'pointer',
            transition: 'background 0.2s ease, color 0.2s ease',
            opacity: hovered ? 1 : 0,
            transform: hovered ? 'translateY(0)' : 'translateY(6px)',
            transitionProperty: 'opacity, transform, background, color',
            transitionDuration: '0.28s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLButtonElement).style.background = '#111';
            (e.currentTarget as HTMLButtonElement).style.color = '#fff';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.90)';
            (e.currentTarget as HTMLButtonElement).style.color = '#111';
          }}
        >
          <CartIcon />
        </button>
      </div>

      {/* ── Product info ── */}
      <div style={{ padding: '14px 2px 20px' }}>
        {/* Stars + reviews */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <StarRating rating={product.rating} />
          <span style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '11px', fontWeight: 400, color: '#888',
          }}>
            {product.reviews} Reviews
          </span>
        </div>

        {/* Scent family */}
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '9.5px', fontWeight: 700,
          letterSpacing: '0.16em', textTransform: 'uppercase',
          color: '#999', margin: '0 0 5px',
        }}>
          Scent Family: {product.scentFamily}
        </p>

        {/* Name */}
        <h3 style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: 'clamp(15px, 1.4vw, 18px)',
          fontWeight: 600, color: '#111111',
          lineHeight: 1.25, margin: '0 0 5px',
        }}>
          {product.name}
        </h3>

        {/* Smells like */}
        <p style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontSize: '13px', fontStyle: 'italic',
          fontWeight: 400, color: '#777',
          lineHeight: 1.5, margin: '0 0 10px',
        }}>
          Smells like: {product.smellsLike}
        </p>

        {/* Price */}
        <p style={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '14px', fontWeight: 600,
          color: '#111111', margin: 0,
        }}>
          {product.price}
        </p>
      </div>
    </motion.div>
  );
}

/* ─── Main Section ───────────────────────────────────────────────────────── */
export default function Collections() {
  return (
    <section
      id="collections"
      style={{
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 'clamp(64px, 8vw, 110px) 0 clamp(80px, 10vw, 130px)',
        position: 'relative',
      }}
    >
      <div style={{
        maxWidth: '1440px', margin: '0 auto',
        padding: '0 clamp(16px, 4vw, 56px)',
      }}>

        {/* ── Section header ── */}
        <div style={{ marginBottom: 'clamp(40px, 5vw, 64px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '36px', height: '1px', background: '#C62828', opacity: 0.6 }} />
            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '10px', fontWeight: 700,
              letterSpacing: '0.28em', textTransform: 'uppercase',
              color: '#C62828', margin: 0,
            }}>
              Collections
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{
              fontFamily: '"Playfair Display", Georgia, serif',
              fontSize: 'clamp(30px, 4.5vw, 58px)',
              fontWeight: 700, fontStyle: 'italic',
              color: '#111111', lineHeight: 1.08, margin: 0,
              letterSpacing: '-0.01em',
            }}>
              The Full Collection.
            </h2>

            <p style={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: '12px', fontWeight: 400,
              color: '#888', lineHeight: 1.7,
              maxWidth: '300px', margin: 0,
            }}>
              Every scent, hand-poured with care. Discover the fragrance that speaks to you.
            </p>
          </div>

          {/* Red accent line */}
          <div style={{
            marginTop: '20px',
            width: '100%', height: '1px',
            background: 'linear-gradient(to right, rgba(198,40,40,0.25), transparent)',
          }} />
        </div>

        {/* ── Product grid ── */}
        <div
          className="collections-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 'clamp(20px, 3vw, 40px) clamp(12px, 2vw, 28px)',
          }}
        >
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .collections-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 768px) {
          .collections-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .collections-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
