import Image from 'next/image';

const footerLinks = {
  Shop: [
    { label: 'All Candles', href: '#shop' },
    { label: 'Signature Collection', href: '#collections' },
    { label: 'Seasonal Bloom', href: '#collections' },
    { label: 'Travel Memories', href: '#collections' },
    { label: 'Gift Sets', href: '#shop' },
  ],
  Help: [
    { label: 'FAQ', href: '#' },
    { label: 'Shipping & Returns', href: '#' },
    { label: 'Contact Us', href: '#contact' },
    { label: 'Track Your Order', href: '#' },
    { label: 'Wholesale', href: '#' },
  ],
  Company: [
    { label: 'Our Story', href: '#story' },
    { label: 'Sustainability', href: '#' },
    { label: 'Journal', href: '#' },
    { label: 'Press', href: '#' },
    { label: 'Careers', href: '#' },
  ],
};

const socialLinks = [
  {
    label: 'Instagram',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>,
  },
  {
    label: 'TikTok',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.16 8.16 0 004.77 1.52V7.01a4.85 4.85 0 01-1-.32z"/></svg>,
  },
  {
    label: 'Facebook',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  },
  {
    label: 'Pinterest',
    href: '#',
    icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#F0F0F0] border-t border-[#e0e0e0]" id="contact">

      {/* Red top strip */}
      <div className="h-1 bg-[#C62026]" />

      <div className="container-lg py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image src="/logo.png" alt="U-Heard" width={120} height={40} className="object-contain h-10 w-auto" />
            </div>
            <p className="text-[#434343] text-[13px] leading-relaxed max-w-xs mb-5">
              Handcrafted botanical candles made in small batches. Inspired by nature, memory, and the magic of scent.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="text-[#8f8f8f] hover:text-[#C62026] transition-colors">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <p className="text-[11px] uppercase tracking-[1.5px] font-bold text-[#000] mb-4">{heading}</p>
              <ul className="flex flex-col gap-3">
                {links.map(link => (
                  <li key={link.label}>
                    <a href={link.href}
                      className="text-[13px] text-[#434343] hover:text-[#C62026] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-[#e0e0e0]">
        <div className="container-lg py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-[#8f8f8f]">© {year} U-Heard Candle Studio. All rights reserved.</p>
          <div className="flex gap-5">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-[11px] text-[#8f8f8f] hover:text-[#C62026] transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
