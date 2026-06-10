# 🍦 Ice Cream Website — Full Redesign Prompt for Claude Code

\---

## 🎯 YOUR MISSION

You are an expert senior frontend developer and UI/UX designer. Your job is to:

1. **AUDIT** the existing ice cream website codebase deeply
2. **REDESIGN** it into a world-class, modern, immersive 3D animated website
3. **PRESERVE** ALL existing data — products, prices, descriptions, images, contact info, menu items — nothing gets removed
4. **ENHANCE** the UI/UX inspired by the Boba Ice Cream design style: https://dribbble.com/shots/21528529-Boba-Ice-Cream-Website-Mobile-Experience
5. **INTEGRATE** Formspree contact form, WhatsApp API button, and all working links

\---

## 🔍 STEP 1 — DEEP AUDIT (Do This First)

Before writing a single line of new code, audit the entire existing project:

* List every HTML page and its purpose
* List every CSS file and identify design patterns used
* List every JS file and what it does
* Catalog ALL products (name, price, description, image paths)
* Catalog ALL sections: hero, about, menu, gallery, contact, footer, etc.
* Catalog ALL existing links (nav links, social links, buttons)
* Identify ALL forms and their current behavior
* Note ALL images and assets used
* Identify what is broken, outdated, or missing
* Document the color scheme, fonts, and layout structure currently used

Output a full audit report as `AUDIT\_REPORT.md` before proceeding.

\---

## 🎨 STEP 2 — DESIGN DIRECTION

Redesign the website with this visual direction:

### Style Inspiration

* Reference: Boba Ice Cream Dribbble shot (dark, moody, premium, playful)
* Aesthetic: **Luxury Dessert Brand** — dark rich backgrounds, vibrant product colors, smooth animations
* Feel: Like a high-end dessert brand (think Magnum, Häagen-Dazs meets a Gen-Z streetwear brand)

### Visual Requirements

* **Dark theme** — deep blacks, dark navy or chocolate browns as base
* **Vibrant accent colors** — pulled from the ice cream product images (pinks, teals, creams, yellows)
* **Typography** — use Google Fonts: a bold display font (e.g. Playfair Display, Clash Display, or Syne) + clean body font (e.g. DM Sans, Outfit)
* **Backgrounds** — gradient meshes, subtle noise textures, soft glows behind products
* **Glassmorphism** cards for product display
* **Custom cursor** — a small ice cream scoop or dot that follows mouse
* **Grain overlay** — subtle film grain texture on hero section

### Layout

* Full-screen hero with 3D floating product
* Horizontal scroll section for product categories
* Staggered product grid with hover 3D tilt
* Parallax layers throughout
* Sticky navigation with blur backdrop
* Smooth page scroll behavior

\---

## ✨ STEP 3 — ANIMATIONS \& 3D EFFECTS

Implement ALL of the following using **GSAP + ScrollTrigger + CSS 3D**:

### On Page Load

* Logo animates in with a bounce/elastic effect
* Hero headline splits into characters and animates in letter by letter
* Hero product image floats in from bottom with rotation
* Background gradient slowly shifts color (infinite loop)

### On Scroll

* Sections fade + slide up as they enter viewport (ScrollTrigger)
* Product cards stagger in one by one
* Parallax depth on hero background layers (background moves slower than foreground)
* Section headings have a "reveal" wipe effect (text masked reveal)
* Numbers/stats count up when scrolled into view
* Horizontal scrolling product showcase section

### On Hover

* Product cards tilt in 3D (mouse-tracking tilt effect using JS)
* Buttons have magnetic hover effect (button follows cursor slightly)
* Nav links have underline slide animation
* Product images scale up slightly with a soft glow
* CTA buttons have a shimmer/shine sweep effect on hover

### Floating Elements

* Small decorative ice cream icons (🍦 🍨 🍧) floating slowly in background
* Hero product image bobs up and down continuously (CSS keyframe)
* Particle/bubble effect in hero background (small circles floating up)

\---

## 🛠️ STEP 4 — TECHNICAL INTEGRATIONS

### Contact Form — Formspree

```html
<form action="https://formspree.io/f/YOUR\_FORM\_ID" method="POST">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <input type="tel" name="phone" placeholder="Your Phone" />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send Message</button>
</form>
```

* Replace `YOUR\_FORM\_ID` with the actual Formspree ID
* Add success/error state animations after submission
* Form fields should have floating label animation

### WhatsApp Button

```html
<a href="https://wa.me/YOUR\_WHATSAPP\_NUMBER?text=Hi!%20I%20want%20to%20order%20ice%20cream%20🍦" 
   target="\_blank" 
   class="whatsapp-float">
  <img src="whatsapp-icon.svg" alt="Chat on WhatsApp" />
  Order on WhatsApp
</a>
```

* Replace `YOUR\_WHATSAPP\_NUMBER` with full number including country code (e.g. 923001234567)
* Float this button fixed bottom-right on all pages
* Pulse animation on the button to draw attention
* On mobile, this should be prominent and easy to tap

### Navigation Links

* ALL nav links must be working and scroll smoothly to sections
* Mobile hamburger menu with full-screen overlay animation
* Active section highlighting in nav as user scrolls

### Social Media Links

* Keep all existing social links
* Add hover color effects matching each platform

\---

## 📱 STEP 5 — RESPONSIVENESS

The website MUST be fully responsive:

* **Mobile (320px–768px)**: Single column, large touch targets, WhatsApp button prominent
* **Tablet (768px–1024px)**: 2-column product grid, adjusted typography
* **Desktop (1024px+)**: Full experience with all 3D effects and animations
* **Reduce motion**: Respect `prefers-reduced-motion` media query — disable heavy animations for users who prefer it
* Test all breakpoints before finishing

\---

## 🗂️ STEP 6 — FILE STRUCTURE

Organize the project cleanly:

```
/project
  index.html
  /pages
    menu.html
    about.html
    contact.html
    (any other existing pages)
  /css
    style.css
    animations.css
    responsive.css
  /js
    main.js
    animations.js
    tilt.js
  /images
    (all existing images preserved)
  /assets
    fonts/
    icons/
  AUDIT\_REPORT.md
```

\---

## ✅ STEP 7 — FINAL CHECKLIST

Before saying you are done, verify every item:

* \[ ] All existing products are present with correct names, prices, descriptions
* \[ ] All images load correctly (no broken image paths)
* \[ ] All navigation links work and scroll to correct sections
* \[ ] Contact form submits to Formspree successfully
* \[ ] WhatsApp button opens correct chat on click
* \[ ] All social media links open correctly
* \[ ] Website loads fast (images optimized, no unnecessary libraries)
* \[ ] Mobile layout looks great and is fully usable
* \[ ] All animations work smoothly (60fps)
* \[ ] No console errors in browser
* \[ ] Custom cursor works on desktop
* \[ ] Horizontal scroll section works on both mouse and touch
* \[ ] All buttons have hover states
* \[ ] Footer has all necessary links and info

\---

## 🚫 RULES — NEVER DO THIS

* ❌ Do NOT remove any product data, prices, or descriptions
* ❌ Do NOT remove any existing pages
* ❌ Do NOT use placeholder "Lorem Ipsum" text — keep all real content
* ❌ Do NOT use boring generic fonts (Arial, Roboto, Inter, system-ui)
* ❌ Do NOT use a plain white background
* ❌ Do NOT use purple gradient on white (overused AI aesthetic)
* ❌ Do NOT leave any broken links
* ❌ Do NOT use heavy 3D libraries (Three.js) unless performance is confirmed fine
* ❌ Do NOT skip mobile responsiveness

\---

## 📦 LIBRARIES TO USE

Add these via CDN in HTML head — no npm needed:

```html
<!-- GSAP Animation -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>

<!-- Vanilla Tilt (3D hover effect) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.8.0/vanilla-tilt.min.js"></script>

<!-- Swiper (product carousel) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css"/>
<script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js"></script>

<!-- Google Fonts -->
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800\&family=DM+Sans:wght@300;400;500\&display=swap" rel="stylesheet">
```

\---

## 💬 HOW TO USE THIS PROMPT

1. Open **Claude Code** in your terminal or VS Code
2. Navigate to your project folder: `cd your-ice-cream-project`
3. Start Claude Code: `claude`
4. Paste this entire prompt
5. Let Claude Code audit and rebuild autonomously
6. After it finishes, replace:

   * `YOUR\_FORM\_ID` → your Formspree form ID
   * `YOUR\_WHATSAPP\_NUMBER` → your WhatsApp number with country code
7. Open `index.html` in browser and test everything

\---

*Generated for Ice Cream Website Redesign Project
Inspired by: https://dribbble.com/shots/21528529-Boba-Ice-Cream-Website-Mobile-Experience*

