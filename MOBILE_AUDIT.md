# Mobile Audit Report — SamsZ Ice Cream Website

This document outlines the visual, layout, typography, navigation, and spacing issues identified during the mobile audit of the SamsZ Ice Cream website across different responsive breakpoints.

---

## 1. Global Issues & Layout Constraints

### 1.1 Viewport & Box Model
* **Box Sizing**: While `*, *::before, *::after` has `box-sizing: border-box` defined in the reset, some library components or third-party layouts might override it. We will ensure all elements enforce this constraint.
* **Horizontal Overflow**: 
  * On viewport widths below 360px (such as 320px), the `.product-showcase-img-wrap` (width `300px`, plus parent flex/grid paddings and gaps) exceeds the viewport width, causing a horizontal scrollbar.
  * Inline styles in grids (like `about.html` stats section and `service.html` crafting process section) use hardcoded grid columns that do not collapse on mobile, causing extreme overflow.

### 1.2 WhatsApp Floating Button (`.wa-float`)
* **Size**: On mobile screens (< 768px), `.wa-float` hides its text and has `padding: 16px`. With a `22px` icon, the overall dimensions are `54px` x `54px`. This is slightly below the required `56px` tap target size.
* **Position**: Set to `bottom: 32px; right: 32px;` which takes up too much safe area on smaller mobile screens (e.g. 320px/375px), potentially blocking footer text or buttons.

---

## 2. Page-Specific Audit Findings

### 2.1 Homepage (`index.html`)
* **Hero Section**:
  * `.hero-headline` is `font-size: 2.4rem` on screens under 480px, which exceeds the required `max 2rem` limit.
  * `.hero-actions` flex directions and alignment need check to ensure they stack neatly without text wrapping issues.
  * `.hero-product-img` needs to be restricted to fit small screens without overflow.
* **Product Showcase (Flavor Switcher)**:
  * On screens below 900px, the grid collapses to 1 column and `.product-showcase-visual` gets `order: -1` (correct).
  * However, `.flavor-nav.left` and `.flavor-nav.right` stack as horizontal wraps. On mobile (< 768px), the layout feels squashed and flavor cards do not have clear spacing or minimum tap heights.
  * The center visual wrapper (`.product-showcase-img-wrap`) is too wide (`300px`) and causes horizontal scrolling on 320px screens.
* **Promo Section**:
  * `.promo-visual` height is fixed to `300px` under 900px, which is good, but `.promo-content` padding is `40px 30px` under 768px, which might cause text truncation on very small screens.
* **Footer**:
  * Footer columns collapse to 1 column below 768px, but the text might touch the edges if container padding is not enough.

### 2.2 About Page (`about.html`)
* **Story Grid & Images**:
  * `.about-img-main img` has an inline style `style="height:500px;object-fit:contain;background:#141422;padding:40px;"`. A fixed height of 500px on mobile makes the image occupy too much vertical space relative to its width, looking disproportionate.
  * `.about-img-badge` is positioned at `right: -30px` which overflows the viewport on mobile, causing horizontal scroll. Under 900px, CSS has `.about-img-badge { right: 20px; }` but on smaller viewports, it might still push layout boundaries.
* **Stats Section**:
  * **Critical Bug**: The stats container has inline styles:
    ```html
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:30px;" ...>
    ```
    This inline grid does not collapse on mobile screens, forcing 4 columns on a 320px/375px viewport, which makes the text overlapping and completely illegible.

### 2.3 Services Page (`service.html`)
* **Crafting Process Grid**:
  * **Critical Bug**: The grid has:
    ```html
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px;" ...>
    ```
    On a 320px viewport, `minmax(220px, 1fr)` plus parent container padding (20px each side) forces the column to exceed the viewport width, causing layout breakage and horizontal scroll.

### 2.4 Products Page (`product.html`)
* **Products Grid**:
  * `.products-grid` is defined as `grid-template-columns: repeat(auto-fill, minmax(260px, 1fr))` on desktop. On mobile under 480px, it collapses to `grid-template-columns: 1fr;`. 
  * However, between 480px and 768px (Tablet / Mobile Large), it uses the default `minmax(260px, 1fr)` which can result in sub-optimal sizing.
  * Image elements inside `.product-card-img-wrap` must be scaled properly to ensure zero container overflow.

### 2.5 Contact Page (`contact.html`)
* **Form & Spacing**:
  * `.contact-form-wrap` has `padding: 48px` which is too large on mobile and causes fields to shrink excessively. Although style.css has `.contact-form-wrap { padding: 28px 20px; }` at max-width 768px, we must verify it works down to 320px.
  * Send Message Button (`#sendMessageButton`) must be verified to be fully responsive and stretch to full width on mobile screens.

---

## 3. Typography & Spacing Target Metrics

### 3.1 Breakpoint Targets
* **Mobile Small**: `@media (max-width: 480px)`
* **Mobile Large**: `@media (max-width: 768px)`
* **Tablet**: `@media (max-width: 1024px)`

### 3.2 Typography Guidelines
* **Hero Heading**: Max `2rem` on mobile.
* **Section Heading**: Max `1.5rem` on mobile.
* **Body Text**: `14px-16px` on mobile.
* **Tap Targets**: Navigation links, buttons, and social links must have at least `44px` height/width.
