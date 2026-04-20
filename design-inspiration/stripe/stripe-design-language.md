# Stripe Design Language

## Brand Identity
Stripe uses a clean, technical, trust-forward design language that communicates security and sophistication through restraint.

## Color Palette
- **Primary Blue:** #635BFF (electric indigo — signature Stripe violet-blue)
- **Dark Navy:** #0A2540 (deep background, creates premium contrast)
- **White:** #FFFFFF
- **Light Gray BG:** #F6F9FC (section backgrounds)
- **Muted Text:** #425466
- **Success Green:** #09825D
- **Error Red:** #DF1B41
- **Gradient:** from #635BFF → #8A84FF (purple tones for hero meshes)

## Typography
- **Font:** "Sohne" (custom, falls back to system-ui, -apple-system, sans-serif)
- **Heading scale:**
  - H1: 60–80px, weight 700, line-height 1.05, letter-spacing -2px
  - H2: 44px, weight 700, line-height 1.1, letter-spacing -1px
  - H3: 28px, weight 600, line-height 1.2
  - Body: 18px, weight 400, line-height 1.6, color #425466
- **Subheadings:** uppercase, 11px, letter-spacing 3px, blue/purple

## Spacing System
- Base unit: 8px
- Component padding: 24–48px
- Section padding: 80–120px vertical
- Container max-width: 1200px, centered, padded 20–40px

## Button Styles
- **Primary:** bg #635BFF, text white, border-radius 6px, px 20 py 10, font-weight 600, no shadow
- **Outline:** border 1.5px #CDD5DF, bg transparent, text #0A2540, hover bg #F6F9FC
- **Size:** medium = 40px height, large = 48px height
- Transitions: all 0.2s ease

## Card Styles
- Background: white
- Border: 1px solid #E0E6EB
- Border-radius: 8–12px
- Box-shadow: 0 2px 8px rgba(0,0,0,0.05), 0 4px 24px rgba(0,0,0,0.04)
- Hover: shadow deepens slightly, subtle translateY(-2px)
- Inner padding: 32px

## Hero Section
- Split layout: left text + right visual OR centered with gradient mesh background
- Mesh gradient: purple/blue blobs, blurred with filter:blur(80px)
- Headline: massive, tight, dark navy
- Subheadline: 18–20px, gray, max-width 480px
- CTA cluster: primary button + text link with arrow
- No heavy border or frame — content floats on light

## Navbar
- White background, border-bottom 1px rgba(0,0,0,0.07)
- Logo left, nav links center, CTAs right
- Nav links: 14px, weight 500, color #425466, hover dark
- Sticky with backdrop-filter blur on scroll
- Dropdown menus with card-style panels

## Trust Signals
- Logos: grayscale company logos in a horizontal strip
- Label: "Trusted by X companies worldwide"
- Stats: clean number + descriptor, no decorative borders

## Motion / Transitions
- Duration: 200ms for micro-interactions, 400ms for reveals
- Easing: cubic-bezier(0.4, 0, 0.2, 1) (ease-in-out)
- Scroll-triggered: fade-up with slight Y offset (20px → 0), no spring
- No bouncy animations — everything is smooth, controlled

## Shadows
- Elevation 1: 0 1px 3px rgba(0,0,0,0.08)
- Elevation 2: 0 4px 16px rgba(0,0,0,0.08)
- Elevation 3: 0 8px 40px rgba(0,0,0,0.12)
- Purple glow: 0 0 40px rgba(99,91,255,0.2) (for featured elements)

## Mobile Patterns
- Stack single column at 768px
- 16px outer padding on mobile
- Hamburger menu slides in from right
- Touch targets minimum 44px

## Key Design Decisions
1. Heavy whitespace signals premium
2. Indigo/violet differentiates from competitors (blue = boring)
3. Gradients are subtle mesh, not harsh linear
4. Typography does the heavy lifting — very large, tight H1s
5. Cards hover gently, never aggressively
