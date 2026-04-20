# Apple Design Language

## Brand Identity
Apple's design is about reduction — removing everything that isn't essential.
Extreme craft, premium materials, cinematic presentation. Products look and feel expensive before you even read a word.

## Color Palette
- **Background:** #F5F5F7 (signature Apple light gray — NOT pure white)
- **White sections:** #FFFFFF
- **Dark sections:** #1D1D1F (almost black, warm undertone)
- **Text on light:** #1D1D1F
- **Text secondary:** #6E6E73
- **Blue accent:** #0071E3 (links, CTA buttons)
- **Product gradients:** product-specific, vivid saturation
- **Dividers:** rgba(0,0,0,0.1) (very faint)

## Typography
- **Font:** SF Pro Display / SF Pro Text (custom Apple, web fallback: system-ui, -apple-system)
- **H1:** 56–80px, weight 700, tracking -2px, line-height 1.05
  - Often uses font-size: clamp(40px, 8vw, 80px) for fluid scaling
- **H2:** 40–56px, weight 700, tight tracking
- **Body:** 17–19px, weight 400, line-height 1.6
- **Caption/labels:** 12px, uppercase, tracking 0.5px, #6E6E73
- **Large feature text:** 28–36px, weight 300 (thin weight for contrast)

## Spacing System
- Base: 8px
- Section vertical padding: 100–150px
- Content max-width: 980–1200px
- Internal component spacing: 40–80px
- Extremely generous whitespace — elements breathe

## Button Styles
- **Primary (CTA):** #0071E3 bg, white text, border-radius 980px (fully rounded pill)
  - Height: 44px, px: 24px, font-size: 17px, font-weight: 400
- **Secondary:** text-only link with chevron icon (→), no border/bg
- No hover shadows — just subtle bg darkening (opacity 0.85)
- Apple never uses heavy border buttons

## Card Styles
- Background: #FFFFFF or #F5F5F7
- Border-radius: 20–28px (very round)
- No visible border — rely on background contrast
- Shadow: extremely subtle or none
- Overflow: hidden for images to respect radius
- Full image fills (product photo = the card visual)

## Hero Section
- Centered layout, product or lifestyle image dominant
- Headline: 1–2 words often, massive, weight 700
- Subline: 1 sentence max, 21px gray
- CTA: Two text links (Learn more / Buy) — NO button box, just colored text
- Massive product image below or as background
- No noise, no mesh gradients, just clean and the product

## Navbar
- White/translucent background: rgba(255,255,255,0.8) + backdrop-filter blur(20px)
- Height: 44px
- All items 14px, weight 400, color #1D1D1F
- No hover underlines — just opacity change
- Extremely minimal, refined
- Logo (Apple mark) centered or left

## Section Patterns
- **Alternating dark/light:** dark sections punch visually between light
- **Sticky text + scrolling visuals:** text locks while image transitions
- **Full-bleed video sections:** autoplay, muted, looping product demos
- **Feature grid:** 2x2 or 3-column with large icons and short text below

## Motion / Transitions
- Duration: 300–500ms for reveals
- Easing: cubic-bezier(0.25, 0.1, 0.25, 1) — Apple's custom ease
- Scroll-triggered parallax on hero images (subtle)
- Elements fade + scale from 0.95 → 1.0 (never bounce)
- Section transitions: opacity 0 → 1 with slight Y offset
- "Sticky scroll" pinned animations (text changes as you scroll)

## Shadows
- Barely-there: 0 2px 20px rgba(0,0,0,0.06)
- Product images: 0 20px 60px rgba(0,0,0,0.15) for 3D effect
- Dark cards: no shadow, rely on bg contrast

## Mobile Patterns
- Identical design — mobile is primary
- Single column, full-width images
- Tap targets: 44px minimum (their own HIG rule)
- Font sizes reduce proportionally with clamp()
- Cards stack vertically with 16px gaps

## Key Design Decisions
1. Restraint IS the luxury signal — never oversell
2. Let the product/image do the talking
3. Maximum 10 words on a hero headline
4. Whitespace = confidence = premium
5. Round corners (very round) feel premium, approachable
6. System fonts render perfectly on Apple devices (strategic choice)
7. Dark sections are used sparingly for maximum impact
