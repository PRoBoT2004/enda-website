# ENDA Website

## 🎯 Project Overview
We are actively building the frontend for the **Enda Website** using **Next.js 16 (App Router)** and **React 19**. 

Our current focus is on developing dynamic, component-driven pages such as the **Shoe Guide** and the **Our Impact** sections. We are strictly modularizing our styles using **CSS Modules**, which gives us fine-grained control over individual components while avoiding styling collisions across the broader application.

## 📏 Responsiveness Strategy (Fluid Layouts)
We are expecting and enforcing a **Fluid Responsive Design** across the entire website. 

Instead of relying solely on rigid, hardcoded pixel breakpoints, we are widely implementing the CSS `clamp()` function. This applies to:
- **Typography:** Fonts smoothly scale up and down based on viewport width (e.g., `clamp(14px, 1.35vw, 26px)`).
- **Spacing & Layout:** Paddings, margins, flex gaps, and component widths dynamically adjust to browser dimensions.

To ensure perfect rendering on extremely small devices, we complement the fluid design with traditional media queries (e.g., `@media (max-width: 768px)` and `@media (max-width: 480px)`). This establishes a "zoom-proof", mobile-friendly experience that avoids the awkward layout shifting commonly found in breakpoint-only designs.

## ✨ Visual Animations & Interactions
Our ongoing animation approach relies on rich, scroll-driven visual feedback to keep the interface engaging but highly performant:
- **Sticky CSS Interactions (Parallax-like):** We are heavily utilizing `position: sticky` and extended wrapper heights (e.g., `height: 200vh`) to create sections where underlying imagery remains fixed while foreground content seamlessly scrolls over it. 
- **Smooth Transitions and Micro-interactions:** We apply subtle CSS transitions for hover states (e.g., scaling images, shifting borders and colors).
- **Framer Motion:** Used modularly alongside our CSS to manage complex mount/unmount animations and viewport-triggered scroll reveals, ensuring a highly polished, state-of-the-art aesthetic.

---

*This README reflects the current workflow and established technical patterns as of our latest development sessions.*

## Project Stack

| Item | Detail |
|---|---|
| Framework | Next.js (App Router) |
| Styling | CSS Modules (`.module.css` per component) |
| Animations | Framer Motion |
| Mode | Dark — no light mode toggle |
| Base font size | Fluid root scaling (see globals.css) |

---

## Font System

| Font | Usage | File |
|---|---|---|
| `Countach-Light` | All headings, nav links, section titles, footer col heads | `/public/fonts/Countach_Light_Regular.otf` |
| `Countach-Regular` | Hero heading, mobile menu | `/public/fonts/Countach_Regular.otf` |
| `Play` | All body text, descriptions, prices, captions, CTA text | `/public/fonts/PLAY-REGULAR.TTF` + `PLAY-BOLD.TTF` |

> ⚠️ AvenirNext has been **fully removed** from the project. Do not reintroduce it.

### CSS Variables (globals.css)
```css
--font-heading: 'Countach-Light', sans-serif;
--font-body:    'Play', sans-serif;
```

---

## Color Tokens

```css
--color-bg-primary:     #000000ff;   /* main page bg */
--color-bg-secondary:   #000;   /* card / elevated bg */
--color-bg-tertiary:    #1a1a1a;   /* borders, subtle bg */
--color-text-primary:   #fff;   /* headings */
--color-text-secondary: #ffffffff;   /* body / muted */
--color-accent:         #c8a96e;   /* brand gold */
--color-accent-hover:   #d4b97e;
--color-border:         #000;
```

---

## Responsive Sizing Strategy

```
Desktop  → rem units  (inherits compensated root from globals.css)
Mobile   → px units   (root locked at 16px, immune to DPI changes)
```

### Root Font Size Compensation (globals.css)
```css
/* 100% zoom */
@media (min-width: 769px) {
  :root { font-size: clamp(14px, 0.9375vw, 18px); }
}
/* 125% Windows zoom — compensated */
@media (min-width: 769px) and (min-resolution: 120dpi) and (max-resolution: 143dpi) {
  :root { font-size: clamp(14px, 1.1vw, 18px); }
}
/* 150% Windows zoom — compensated */
@media (min-width: 769px) and (min-resolution: 144dpi) and (max-resolution: 167dpi) {
  :root { font-size: clamp(13px, 1.25vw, 17px); }
}
```

### Breakpoints Used
| Breakpoint | Target |
|---|---|
| `max-width: 1366px` | Laptops |
| `max-width: 1024px` | Small laptops / large tablets |
| `max-width: 768px` | Mobile — switch to px units |
| `max-width: 480px` | Small phones |
| `min-width: 2560px` | 4K / ultrawide |

---

## File Structure

```
app/
├── home/
│   ├── sections/
│   │   ├── HeroSection.js
│   │   ├── HeroSection.module.css
│   │   ├── ShopSection.js
│   │   ├── ShopSection.module.css
│   │   ├── ShowcaseSection.js
│   │   ├── ShowcaseSection.module.css
│   │   ├── FeaturedSection.js
│   │   ├── FeaturedSection.module.css
│   │   ├── EditorialSection.js
│   │   ├── EditorialSection.module.css
│   │   ├── WeEndaTogether.js
│   │   └── WeEndaTogether.module.css
│   ├── page.js
│   └── styles.module.css
├── components/
│   ├── TopBar/
│   │   ├── TopBar.js
│   │   └── TopBar.module.css
│   ├── Navigation/
│   │   ├── Navigation.js
│   │   └── Navigation.module.css
│   └── Footer/
│       ├── Footer.js
│       └── Footer.module.css
├── globals.css
├── layout.js
└── page.js
```

---

## Image Paths Reference

```
/public/images/
├── hero/
│   └── hero-background.png
├── shop/
│   ├── trainer.png
│   ├── jogging.png
│   └── running.png
├── showcase/
│   ├── x1.png          ← lifestyle image (product 1)
│   ├── x1-shoe.png     ← shoe image (product 1)
│   ├── x2.png
│   ├── x2-shoe.png
│   ├── x3.png
│   └── x3-shoe.png
├── featured/
│   ├── p1i1.png        ← lifestyle left (product 1)
│   ├── p1.png          ← shoe (product 1)
│   ├── p2i2.png
│   ├── p2.png
│   ├── p3i3.png
│   └── p3.png
├── editorial/
│   ├── editorial-1.png ← Our Story card
│   ├── editorial-2.png ← Our Community card
│   └── editorial-3.png ← Journal card
├── weenda/
│   └── we-enda-together.png
├── navigation/
│   ├── logo.png
│   ├── search-icon.svg
│   ├── user-icon.svg
│   └── cart-icon.svg
├── footer/
│   ├── logo.png
│   ├── bcorp.png
│   ├── visa.svg
│   ├── mastercard.svg
│   ├── amex.svg
│   ├── paypal.svg
│   ├── diners.svg
│   └── discover.svg
└── topbar/
    ├── group-2.svg     ← arrow icon
    └── flag.svg        ← Kenya flag
```

---

## Home Page — Section Order

```jsx
// app/home/page.js
import TopBar        from '@/components/TopBar/TopBar'
import Navigation    from '@/components/Navigation/Navigation'
import HeroSection   from './sections/HeroSection'
import ShopSection   from './sections/ShopSection'
import ShowcaseSection from './sections/ShowcaseSection'
import FeaturedSection from './sections/FeaturedSection'
import EditorialSection from './sections/EditorialSection'
import WeEndaTogether from './sections/WeEndaTogether'
import Footer        from '@/components/Footer/Footer'

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Navigation />
      <main>
        <HeroSection />
        <ShopSection />
        <ShowcaseSection />
        <FeaturedSection />
        <EditorialSection />
        <WeEndaTogether />
      </main>
      <Footer />
    </>
  )
}
```

---

## ⭐ Known Issues (Fix Before Launch)

### 1. FeaturedSection — Stacked Image Carousel
**Problem:** Next.js `<Image fill>` with multiple stacked images inside a single
container does not position reliably. Images were not filling the container correctly.

**Fix applied:** Replaced `next/image` with plain `<img>` tags + explicit CSS:
```css
.productImg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1),
              transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.imgActive {
  opacity: 1;
  transform: scale(1);
}
```
**Status:** Needs visual QA with real product images.

---

### 2. EditorialSection — Mobile Image Cropping ⭐
**Problem:** Cards stack vertically at fixed `280px` height on mobile. 
Depending on the editorial images (portrait vs landscape), the crop may 
look off — subject might be cut from frame.

**Fix needed:** Once real editorial images are added, adjust per-card 
`object-position` if needed, or change mobile card height to better 
suit the image ratio:
```css
/* In EditorialSection.module.css — mobile override */
@media (max-width: 768px) {
  .card { height: 320px; } /* increase if images feel cropped */

  /* Or target individual cards */
  .card:nth-child(2) .image {
    object-position: center 30%;
  }
}
```
**Status:** ⚠️ Review with real images before launch.

---

## Starting OurStory Page — Dark Mode

### Step 1 — Create the folder structure
```
app/
└── ourstory/
    ├── page.js
    ├── styles.module.css
    └── sections/
        ├── OurStoryHero.js
        ├── OurStoryHero.module.css
        └── ... (one .js + one .module.css per section)
```

### Step 2 — Base page.js
```jsx
// app/ourstory/page.js
import styles from './styles.module.css'
import OurStoryHero from './sections/OurStoryHero'
// import more sections as built...

export default function OurStoryPage() {
  return (
    <main className={styles.page}>
      <OurStoryHero />
      {/* add sections here as they are built */}
    </main>
  )
}
```

### Step 3 — Base styles.module.css
```css
/* app/ourstory/styles.module.css */
.page {
  width: 100%;
  background: #0a0a0a;
  min-height: 100vh;
}
```

### Step 4 — Section template to follow
Every new section follows this exact pattern:
```jsx
// app/ourstory/sections/OurStoryHero.js
'use client'
import { useEffect, useRef } from 'react'
import styles from './OurStoryHero.module.css'

export default function OurStoryHero() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(styles.visible)
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className={styles.section} ref={ref}>
      {/* section content */}
    </section>
  )
}
```

```css
/* app/ourstory/sections/OurStoryHero.module.css */
.section {
  width: 100%;
  background: #0a0a0a;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.section.visible {
  opacity: 1;
  transform: translateY(0);
}
```

---

## How to Start Next Chat

Paste this at the top:

```
I'm building the Enda website in Next.js (App Router).
Home page is DONE in dark mode. Read the README for full context.

Next: OurStory page — dark mode, same conventions.
- All headings: Countach-Light
- Body text: Play
- Background: #0a0a0a
- Same responsive strategy: rem on desktop, px on mobile
- Same breakpoints: 480 / 768 / 1024 / 1366 / 2560

Here is the first OurStory section:
- Screenshot: [attach]
- Rough HTML/CSS: [paste]

Deliver: OurStoryHero.js + OurStoryHero.module.css
```

---

*Last updated: Home Page Complete — Session 2*
