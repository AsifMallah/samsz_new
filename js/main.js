/* ============================================================
   SAMSZ ICE CREAM — Main JavaScript
   GSAP + ScrollTrigger + Vanilla Tilt + Custom Cursor
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Page Loader ── */
  const loader = document.getElementById('page-loader');
  if (loader) {
    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => loader.remove(), 600);
        initHeroAnimations();
      }, 800);
    });
  } else {
    initHeroAnimations();
  }

  /* ── Custom Cursor ── */
  const cursorDot = document.getElementById('cursor-dot');
  const cursorOutline = document.getElementById('cursor-outline');
  let mouseX = 0, mouseY = 0;
  let dotX = 0, dotY = 0;
  let outX = 0, outY = 0;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateCursor() {
    dotX += (mouseX - dotX) * 0.5;
    dotY += (mouseY - dotY) * 0.5;
    outX += (mouseX - outX) * 0.12;
    outY += (mouseY - outY) * 0.12;

    if (cursorDot) { cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`; }
    if (cursorOutline) { cursorOutline.style.transform = `translate(${outX}px, ${outY}px)`; }
    requestAnimationFrame(animateCursor);
  }
  animateCursor();

  document.querySelectorAll('a, button, .cat-tab, .flavor-card, .product-card, .gallery-item, .mobile-menu-close').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  /* ── Price Typography Formatter ── */
  function formatPriceElement(el, amount) {
    if (!el) return;
    const value = amount != null ? String(amount) : el.textContent.replace(/[^\d]/g, '');
    if (!value) return;
    el.classList.add('price-display');
    el.innerHTML = `<span class="price-currency">Rs</span><span class="price-amount">${value}</span>`;
  }

  function initPriceFormatting() {
    document.querySelectorAll('.product-card-price, .flavor-card-price, .product-main-price').forEach(el => {
      formatPriceElement(el);
    });
  }

  initPriceFormatting();

  /* ── Floating Particles ── */
  const particleBgs = document.querySelectorAll('.particles-bg');
  particleBgs.forEach(bg => {
    for (let i = 0; i < 20; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 6 + 2;
      const colors = ['rgba(255,45,120,0.5)', 'rgba(0,229,204,0.5)', 'rgba(255,209,102,0.5)', 'rgba(168,85,247,0.5)'];
      p.style.cssText = `
        width: ${size}px; height: ${size}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        left: ${Math.random() * 100}%;
        bottom: -20px;
        animation-duration: ${Math.random() * 8 + 6}s;
        animation-delay: ${Math.random() * 8}s;
      `;
      bg.appendChild(p);
    }
  });

  /* ── Floating Icons ── */
  const floatingIconsBgs = document.querySelectorAll('.floating-icons');
  const icons = ['🍦', '🍨', '🍧', '🍡', '🍰', '❄️'];
  floatingIconsBgs.forEach(bg => {
    icons.forEach((icon, i) => {
      const el = document.createElement('div');
      el.className = 'float-icon';
      el.textContent = icon;
      el.style.cssText = `
        left: ${10 + i * 15}%;
        top: ${Math.random() * 70 + 10}%;
        animation-duration: ${4 + i * 0.8}s;
        animation-delay: ${i * 0.5}s;
      `;
      bg.appendChild(el);
    });
  });

  /* ── Sticky Navbar ── */
  const navbar = document.querySelector('.navbar-samsz');
  if (navbar) {
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    });
  }

  /* ── Mobile Menu ── */
  const hamburger = document.querySelector('.nav-hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileMenuClose = document.querySelector('.mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu .nav-links a');

  if (hamburger && mobileMenu) {
    const closeMobileMenu = () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
      hamburger.focus();
    };

    const openMobileMenu = () => {
      hamburger.classList.add('open');
      mobileMenu.classList.add('open');
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
      if (mobileMenuClose) {
        requestAnimationFrame(() => mobileMenuClose.focus());
      }
    };

    mobileMenu.setAttribute('aria-hidden', 'true');
    mobileMenu.setAttribute('aria-modal', 'true');

    hamburger.addEventListener('click', () => {
      if (mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMobileMenu);
    }

    mobileMenu.addEventListener('click', e => {
      if (e.target === mobileMenu) closeMobileMenu();
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMobileMenu();
      }
    });
  }

  /* ── Back to Top ── */
  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', () => {
      backTop.classList.toggle('visible', window.scrollY > 300);
    });
    backTop.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ── Hero Animations (GSAP) ── */
  function initHeroAnimations() {
    if (typeof gsap === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    // Hero label
    gsap.to('.hero-label', { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 });

    // Hero headline words
    const words = document.querySelectorAll('.hero-headline .word');
    if (words.length) {
      gsap.to(words, {
        y: 0, opacity: 1,
        duration: 0.8,
        stagger: 0.06,
        ease: 'power3.out',
        delay: 0.4
      });
    }

    // Hero desc + actions
    gsap.to('.hero-desc', { opacity: 1, y: 0, duration: 0.8, delay: 0.9, ease: 'power3.out' });
    gsap.to('.hero-actions', { opacity: 1, y: 0, duration: 0.8, delay: 1.1, ease: 'power3.out' });
    gsap.to('.hero-stats', { opacity: 1, y: 0, duration: 0.8, delay: 1.3, ease: 'power3.out' });

    // Hero visual
    gsap.to('.hero-visual', {
      opacity: 1, y: 0,
      rotateY: 0,
      duration: 1.2,
      delay: 0.6,
      ease: 'elastic.out(1, 0.6)'
    });

    /* ── Scroll Trigger Reveals ── */
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    /* Staggered cards */
    gsap.utils.toArray('.stagger-group').forEach(group => {
      const items = group.querySelectorAll('.stagger-item');
      gsap.fromTo(items,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    /* Section headings reveal wipe */
    gsap.utils.toArray('.section-heading').forEach(h => {
      gsap.fromTo(h,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: h,
            start: 'top 88%',
            toggleActions: 'play none none none'
          }
        }
      );
    });

    /* Parallax on hero gradient mesh */
    gsap.to('.gradient-mesh', {
      y: -120,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });

    /* Counter animation */
    document.querySelectorAll('.count-up').forEach(el => {
      const target = parseInt(el.getAttribute('data-target'), 10);
      gsap.fromTo(el, { textContent: 0 }, {
        textContent: target,
        duration: 2,
        ease: 'power1.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      });
    });
  }

  /* ── Vanilla Tilt on Product Cards ── */
  function initTilt() {
    if (typeof VanillaTilt === 'undefined') return;
    if (window.matchMedia('(hover: none)').matches) return;
    VanillaTilt.init(document.querySelectorAll('.product-card[data-tilt]'), {
      max: 12,
      speed: 400,
      glare: true,
      'max-glare': 0.15,
      perspective: 800
    });
    VanillaTilt.init(document.querySelectorAll('.service-card[data-tilt]'), {
      max: 8,
      speed: 400
    });
  }
  initTilt();

  /* ── Product Category Tabs & Flavor Switcher ── */
  const catTabs = document.querySelectorAll('.cat-tab');
  const productSections = document.querySelectorAll('.product-section');

  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      productSections.forEach(s => s.classList.remove('active'));
      tab.classList.add('active');
      const target = document.getElementById(tab.dataset.target);
      if (target) target.classList.add('active');
    });
  });

  /* ── Flavor Switcher ── */
  function initFlavorSwitcher(sectionId, flavors, priceDefault) {
    const section = document.getElementById(sectionId);
    if (!section) return;

    let currentIndex = 0;
    const imgWrap = section.querySelector('.product-showcase-img-wrap');
    const imgEl = section.querySelector('.showcase-product-img');
    const nameEl = section.querySelector('.product-main-name');
    const priceEl = section.querySelector('.product-main-price');
    const cards = section.querySelectorAll('.flavor-card');

    function switchTo(idx) {
      currentIndex = (idx + flavors.length) % flavors.length;
      const f = flavors[currentIndex];

      imgWrap.classList.add('changing');
      setTimeout(() => {
        imgEl.src = f.img;
        imgEl.alt = f.name;
        if (f.nameHtml) {
          nameEl.innerHTML = f.nameHtml;
          nameEl.classList.add('flavor-name-multiline');
        } else {
          nameEl.textContent = f.name;
          nameEl.classList.remove('flavor-name-multiline');
        }
        if (priceEl) formatPriceElement(priceEl, f.price || priceDefault);
        imgWrap.classList.remove('changing');
      }, 200);

      cards.forEach((c, i) => c.classList.toggle('active', i === currentIndex));
    }

    cards.forEach((card, i) => {
      card.addEventListener('click', () => switchTo(i));
    });

    section.querySelectorAll('.prev-btn').forEach(btn => btn.addEventListener('click', () => switchTo(currentIndex - 1)));
    section.querySelectorAll('.next-btn').forEach(btn => btn.addEventListener('click', () => switchTo(currentIndex + 1)));
  }

  /* Flavor data */
  initFlavorSwitcher('section-icepop', [
    { name: 'Wild Blueberry', img: 'img/WB.png', price: 260 },
    { name: 'Desi Imlee & Aloo Bukhara', nameHtml: 'Desi Imlee &amp;<br>Aloo Bukhara', img: 'img/DI.png', price: 260 },
    { name: 'Juicy Pineapple', img: 'img/JP.png', price: 260 },
    { name: 'Energetic Strawberry', img: 'img/ES.png', price: 260 },
    { name: 'Cola Bomb', img: 'img/CB.png', price: 260 },
    { name: 'Lychee Fruity', img: 'img/LF.png', price: 260 }
  ], 260);

  initFlavorSwitcher('section-cups', [
    { name: 'Mango', img: 'img/MA.png', price: 50 },
    { name: 'Strawberry', img: 'img/SB.png', price: 50 },
    { name: 'Vanilla', img: 'img/VA.png', price: 50 },
    { name: 'Kulfa', img: 'img/KU.png', price: 50 },
    { name: 'Pista', img: 'img/PI.png', price: 50 }
  ], 50);

  initFlavorSwitcher('section-popsicle', [
    { name: 'Mango Bite', img: 'img/popM.png', price: 30 },
    { name: 'Orange Pop', img: 'img/popO.png', price: 30 },
    { name: 'Falsa', img: 'img/popF.png', price: 30 }
  ], 30);

  initFlavorSwitcher('section-chocbar', [
    { name: 'Nutty Chocolate', img: 'img/choc1.png', price: 80 },
    { name: 'Choc Bar', img: 'img/choc2.png', price: 50 },
    { name: 'Choco Dip', img: 'img/choc3.png', price: 40 }
  ], 80);

  initFlavorSwitcher('section-kulfa', [
    { name: 'Crunchy Badami', img: 'img/BKK.png', price: 80 },
    { name: 'Pista Delight', img: 'img/PKK.png', price: 80 }
  ], 80);

  initFlavorSwitcher('section-bricks', [
    { name: 'Strawberry', img: 'img/SBB.png', price: 450 },
    { name: 'Kulfa', img: 'img/KBB.png', price: 450 },
    { name: 'Chocolate', img: 'img/CBB.png', price: 450 },
    { name: 'Pista', img: 'img/PBB.png', price: 450 },
    { name: 'Mango', img: 'img/MBB.png', price: 450 }
  ], 450);

  initFlavorSwitcher('section-conezilla', [
    { name: 'Chocolate', img: 'img/CCC.png', price: 80 },
    { name: 'Strawberry', img: 'img/SCC.png', price: 80 }
  ], 80);

  /* ── Order Now via WhatsApp ── */
  window.orderNow = function (productName) {
    const phone = '+923112811272';
    const text = productName
      ? `Hello! I would like to order: ${productName} 🍦`
      : 'Hello! I would like to order some ice cream 🍦';
    window.open(`https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(text)}`, '_blank');
  };

  /* ── Contact Form (Formspree) ── */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async e => {
      e.preventDefault();
      const btn = contactForm.querySelector('[type="submit"]');
      const successMsg = document.getElementById('formSuccess');
      btn.textContent = 'Sending…';
      btn.disabled = true;

      try {
        const res = await fetch('https://formspree.io/f/xanwokgy', {
          method: 'POST',
          body: new FormData(contactForm),
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          contactForm.reset();
          if (successMsg) {
            successMsg.style.display = 'block';
            setTimeout(() => successMsg.style.display = 'none', 5000);
          }
          btn.textContent = 'Message Sent ✓';
          setTimeout(() => { btn.textContent = 'Send Message'; btn.disabled = false; }, 4000);
        } else {
          throw new Error();
        }
      } catch {
        btn.textContent = 'Error — Try Again';
        btn.disabled = false;
        setTimeout(() => btn.textContent = 'Send Message', 3000);
      }
    });
  }

  /* ── Active Nav Link Highlighting on Scroll ── */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
  if (sections.length && navLinks.length) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.4 });
    sections.forEach(s => obs.observe(s));
  }

  /* ── Swiper Carousel (if present) ── */
  if (typeof Swiper !== 'undefined') {
    document.querySelectorAll('.swiper').forEach(el => {
      new Swiper(el, {
        loop: true,
        spaceBetween: 24,
        slidesPerView: 1,
        autoplay: { delay: 3500, disableOnInteraction: false },
        pagination: { el: '.swiper-pagination', clickable: true },
        breakpoints: {
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 }
        }
      });
    });
  }

});
