# Unified Design System — uheard Digital Agency

## Sources & What We Took

| Element | Source | Why |
|---------|--------|-----|
| Color palette (dark + indigo accent) | Linear + Stripe | Linear's near-black creates drama; Stripe's indigo is more distinctive than plain blue |
| Hero layout + massive typography | Linear + Framer | Maximum visual impact, commands attention immediately |
| Gradient text on key phrase | Framer + Linear | Selectively applied for "wow" without being cheap |
| Card border style (hairline on dark) | Linear | Sophisticated without heavy shadows |
| Button shape (pill CTA) | Apple + Framer | Pill = friendly + premium; avoids corporate rectangle |
| Spacing/breathing room | Apple + Stripe | Generous whitespace = confidence |
| Navbar blur + transparency | Linear + Apple | Modern, depth-aware, doesn't steal attention from content |
| Trust section layout | Stripe | Best-in-class at building institutional trust |
| Motion (spring + stagger) | Framer | Framer's physics-based motion feels alive, not mechanical |
| Section alternation (dark/darker) | Linear | Creates rhythm without color chaos |

## Final Design Tokens

### Colors
```
Background: #0A0A0F
Surface: #131318
Surface-2: #1C1C24
Border: rgba(255,255,255,0.07)
Border-hover: rgba(255,255,255,0.15)
Accent: #6B5EFC  (our own indigo — between Stripe and Linear)
Accent-2: #9B8AFB (lighter indigo for gradients)
Accent-glow: rgba(107,94,252,0.3)
Text-1: #F0F0F5
Text-2: #A0A0B0
Text-3: #606070
White: #FFFFFF
Gradient-text: linear-gradient(135deg, #6B5EFC, #A78BFA)
```

### Typography
```
Font: Inter (Google Fonts)
H1: clamp(48px, 7vw, 88px), weight 800, tracking -3px, line-height 1.0
H2: clamp(32px, 5vw, 60px), weight 700, tracking -2px, line-height 1.1
H3: clamp(20px, 3vw, 28px), weight 600, tracking -0.5px
Body: 17px, weight 400, line-height 1.7
Small: 14px, weight 500
Label: 11px, uppercase, tracking 2px, weight 700
```

### Spacing
```
xs: 4px
sm: 8px
md: 16px
lg: 24px
xl: 40px
2xl: 64px
3xl: 96px
4xl: 128px
section-y: clamp(80px, 10vw, 128px)
```

### Border Radius
```
sm: 6px  (inputs, badges)
md: 12px (cards)
lg: 20px (large cards)
pill: 9999px (buttons)
```

### Shadows / Glows
```
card: 0 0 0 1px rgba(255,255,255,0.07), inset 0 1px 0 rgba(255,255,255,0.06)
card-hover: 0 0 0 1px rgba(255,255,255,0.15)
accent-glow: 0 0 60px rgba(107,94,252,0.25)
button-glow: 0 0 30px rgba(107,94,252,0.4)
```

### Motion
```
fast: 150ms ease
base: 250ms cubic-bezier(0.16, 1, 0.3, 1)  [fast-out ease — snappy]
slow: 500ms cubic-bezier(0.16, 1, 0.3, 1)
spring: stiffness 400, damping 30 (Framer Motion)
stagger: 0.08s between children
```
