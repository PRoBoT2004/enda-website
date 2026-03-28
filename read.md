# Project Update: Enda Website

## What We Are Doing
We are currently building the frontend for the **Enda Website**. Our focus is on creating dynamic, component-driven pages (such as the *Shoe Guide* and *Our Impact* sections) using **Next.js 16 (App Router)** and **React 19**. We are modularizing styles with **CSS Modules** for fine-grained control and to avoid styling collisions.

## Kind of Responsiveness Expected
We expect a **Fluid Responsive Design** strategy constraint. 
Instead of only utilizing hard pixel breakpoints, we heavily rely on the CSS `clamp()` function. This ensures:
- **Typography:** Smooth scaling of fonts based on viewport width (e.g. `clamp(14px, 1.35vw, 26px)`).
- **Spacing/Layouts:** Margins, paddings, and gaps adapt naturally up until they hit critical breakpoints.
For smaller screens (`max-width: 768px` and `480px`), we introduce traditional media queries as fallbacks to lock paddings and fonts, creating a "zoom-proof" mobile experience without dramatic layout shifts.

## Visual Animations Used
We rely on native, performance-friendly CSS interactions with modular visual enhancements:
- **Sticky / Parallax Scrolling:** Using pure CSS `position: sticky` and tall wrappers (e.g., `200vh`) to create visual sequences (e.g., in the Shoe Guide, where text layers scroll continuously over a fixed background image).
- **Modern CSS Transitions:** Smooth hover interactions on links and cards (custom easing, scaling).
- **Framer Motion:** Accompanies our CSS for precise scroll reveals (`whileInView`), and mount/unmount effects, making sure the UI retains a highly polished, premium look.
