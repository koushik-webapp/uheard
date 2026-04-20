# Framer Design Language

## Brand Identity
Framer is bold, creative, experimental. It targets designers and visually-literate audiences.
Uses motion as a core element — nothing is static. Vibrant, forward-thinking, almost architectural.

## Color Palette
- **Background:** #0B0B0F (deep dark, cooler than Linear's)
- **Surface:** #141418
- **Accent Primary:** #FF4D4D (red-pink — bold, unexpected)
- **Accent Alt:** #7B61FF (purple for secondary elements)
- **Neutral Light:** #E8E8E8 on dark, #1C1C1F on light
- **White:** #FAFAFA
- **Text Primary:** #EBEBEB
- **Text Secondary:** #888893
- **Gradient:** from #FF4D4D → #FF8C42 (warm red-orange hero gradient)
- **Section backgrounds:** alternating dark + very dark (no pure white)

## Typography
- **Font:** "Framer" (custom), falls back to: Inter, system-ui
- **H1:** 72–100px, weight 800, tracking -4px, line-height 0.95
  - Extremely large and tight — breaks layout conventions deliberately
- **H2:** 48–64px, weight 700, tracking -2px
- **Body:** 17px, weight 400, line-height 1.65
- **Eyebrow:** 11px, uppercase, weight 700, tracking 2px, accent color
- **Numbers/stats:** 80–120px, thin weight (100–300), almost decorative

## Spacing System
- Base: 4px
- Dense section padding: 80–120px
- Cards: tight internal spacing 20–24px
- Full-bleed layouts with deliberate overflow/edge elements
- "Breaking the grid" intentionally for dynamism

## Button Styles
- **Primary:** bg accent (#FF4D4D or gradient), white text, border-radius 100px (pill)
  - Height: 48px, px: 28px, font-weight: 700
  - Hover: brightness(1.1) + scale(1.02)
- **Dark ghost:** border 1px rgba(255,255,255,0.15), transparent bg, hover: bg rgba(255,255,255,0.08)
- **Icon+text buttons** with arrow animations on hover (arrow slides right)

## Card Styles
- Dark glass: background rgba(255,255,255,0.04), backdrop-filter blur(20px)
- Border: 1px solid rgba(255,255,255,0.08)
- Border-radius: 16–20px
- Hover: border-color brightens + subtle scale(1.01)
- Featured cards: gradient border (border-image with gradient)
- Screenshot/visual cards: heavily styled with browser chrome UI

## Hero Section
- Full viewport height
- Massive typography, 1–3 words, runs edge to edge
- Animated background: moving gradient, particles, or abstract shapes
- Accent-colored word highlight (red or gradient)
- CTA below text: pill button + ghost button
- Short supporting line: 1 sentence, muted gray
- Interactive element (cursor follower, hover distortion) sometimes

## Navbar
- Dark transparent, becomes blurred on scroll
- Logo left, links minimal center, CTA right
- "Sign in" link style, primary "Start for free" button
- Links: 14px, weight 500, text-secondary, hover → text white
- Animated underline on hover (width: 0 → 100% transition)

## Motion (Core to Framer)
- Spring physics: stiffness 400, damping 30 (snappy springs)
- Page transitions: clip-path or scale reveals
- Hover states: physically spring-animated (not ease)
- Scroll: aggressive parallax, text moves at different rates
- Stagger delays: 0.05–0.1s between list items/cards
- Cursor: custom cursor that magnetically snaps to buttons
- Letters animate independently in hero (character-split animation)

## Shadows
- Dark mode: glow-based
- Accent glow: 0 0 80px rgba(255,77,77,0.25)
- Card depth: inset 0 1px 0 rgba(255,255,255,0.08)

## Mobile Patterns
- Dark maintained
- Bold type stays large (clamp to 48px min on mobile hero)
- Swipe gestures for carousels
- Sticky CTAs at bottom of mobile viewport

## Key Design Decisions
1. Motion is not decoration — it IS the product
2. Bold accent color (red) breaks the dark-blue monotony of tech
3. Typography so large it becomes texture/background
4. Glass morphism (backdrop-blur) for depth
5. Deliberate asymmetry and grid-breaking feels creative
6. Heavy use of product screenshots with heavy UI chrome (makes product tangible)
7. Gradients on text for key words (not whole headlines)
