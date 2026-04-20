# Linear Design Language

## Brand Identity
Linear is dark-mode first, ultra-modern, developer-aesthetic. Speed, power, and minimal friction.
Dark backgrounds with precise bright accents. Every element feels purposeful, dense, and fast.

## Color Palette
- **Background:** #0F0F10 (near-black, not pure black — warmer)
- **Surface:** #1A1A1E (cards, modals)
- **Border:** rgba(255,255,255,0.08) (almost invisible hairlines)
- **Primary Accent:** #5B6AF5 (bright purple-blue)
- **Secondary Accent:** #9747FF (purple)
- **Text Primary:** #F7F7F8 (off-white, never pure white)
- **Text Secondary:** #A1A1AA (muted gray)
- **Text Tertiary:** #71717A
- **Gradient Orb:** radial from #5B6AF5 to transparent (hero glow)

## Typography
- **Font:** Inter (system, clean, technical)
- **H1:** 64–80px, weight 700–800, tracking -3px, line-height 1.0
- **H2:** 40–48px, weight 700, tracking -1.5px
- **H3:** 24px, weight 600, tracking -0.5px
- **Body:** 16–17px, weight 400, line-height 1.7, color text-secondary
- **Label/Tag:** 12px, weight 600, uppercase, tracking 1px

## Spacing System
- Base: 4px grid (tighter than Stripe)
- Component padding: 16–32px
- Section padding: 96–160px vertical
- Max-width: 1100px
- Grid: mostly full-bleed with internal constraints

## Button Styles
- **Primary:** bg #5B6AF5, white text, border-radius 8px, height 40px, font-weight 600
  - Inner glow: box-shadow 0 0 20px rgba(91,106,245,0.4)
- **Ghost:** border 1px rgba(255,255,255,0.12), text white, hover bg rgba(255,255,255,0.06)
- **Icon button:** square, 32px, rgba(255,255,255,0.06) bg
- All buttons: no text-transform, clean and minimal

## Card Styles
- Background: #1A1A1E or rgba(255,255,255,0.03)
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: 12px
- No shadow on dark — rely on border contrast
- Hover: border brightens to rgba(255,255,255,0.15), slight inner glow
- Feature cards have gradient top border (purple → blue)

## Hero Section
- Dark full-bleed background
- Large centered radial glow behind headline
- Headline: 72–80px, white, tight tracking, weight 800
- Two-tone text: "Build software" (white) + "for the future" (gradient text)
- Gradient text: background-clip: text with linear-gradient(135deg, #5B6AF5, #9747FF)
- Animated particles or grid lines in background (subtle)
- CTA: Primary button + ghost button, centered below headline
- Product screenshots with dark chrome below hero

## Navbar
- Transparent on top, blurs to dark bg on scroll
- backdrop-filter: blur(12px) + bg rgba(15,15,16,0.8)
- Logo + nav links centered or left, CTA right
- Links: text-secondary color, 14px, weight 500
- Hover: text white, fast 150ms transition
- Border-bottom: rgba(255,255,255,0.06) only on scroll

## Motion / Transitions
- Duration: 150–250ms for interactive, 600ms for page elements
- Easing: cubic-bezier(0.16, 1, 0.3, 1) — fast out, spring feel
- Scroll animations: fade-up with stagger between cards
- Gradient orbs: slow rotation animation (8–12s, subtle)
- Text: word-by-word or character-by-character reveal for hero

## Shadows (Dark Mode)
- No traditional box-shadows — use borders + glows instead
- Accent glow: 0 0 60px rgba(91,106,245,0.15)
- Card top highlight: inset 0 1px 0 rgba(255,255,255,0.1)

## Mobile Patterns
- Dark mode maintained
- 20px outer padding
- Full-width cards and buttons
- Bottom navigation option for apps

## Key Design Decisions
1. True dark — not gray, not navy, near-black
2. Speed as aesthetic — minimal elements, decisive whitespace
3. Typography extremely tight and large — commands attention
4. Gradient text for key phrases (selective, not overused)
5. Glows replace shadows in dark mode
6. Borders are hairline-thin, almost ethereal
7. Inter font feels "engineered" — perfect for tech
