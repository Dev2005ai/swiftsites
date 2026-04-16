/**
 * SwiftSites — script.js
 * Navbar · Hamburger · Smooth Scroll · Scroll Animations
 * Prozess Timeline · Particle Canvas · Contact Form
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Helpers ───────────────────────────────────────────────
  const $ = (sel) => document.querySelector(sel);
  const $$ = (sel) => document.querySelectorAll(sel);

  // ── 1. Footer Year ────────────────────────────────────────
  const yearEl = $('#footerYear');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ── 2. Navbar Scroll Behaviour ────────────────────────────
  const navbar = $('#navbar');

  function updateNavbar() {
    navbar.classList.toggle('navbar--scrolled', window.scrollY > 60);
  }

  window.addEventListener('scroll', updateNavbar, { passive: true });
  updateNavbar();

  // ── 3. Active Nav Link (IntersectionObserver) ─────────────
  const sections = $$('section[id], main section[id]');
  const navLinks = $$('.navbar__link');

  const activeLinkObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'is-active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { threshold: 0.35, rootMargin: `-${72}px 0px -40% 0px` });

  sections.forEach(s => activeLinkObserver.observe(s));

  // ── 4. Hamburger Menu ─────────────────────────────────────
  const hamburger   = $('#hamburger');
  const mobileMenu  = $('#mobileMenu');

  function openMenu() {
    hamburger.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
    mobileMenu.classList.add('is-open');
    mobileMenu.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    hamburger.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.classList.remove('is-open');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', () => {
    hamburger.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu();
  });

  // Close on mobile link click
  $$('.mobile-menu__link, .mobile-menu .btn').forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (mobileMenu.classList.contains('is-open') &&
        !navbar.contains(e.target)) {
      closeMenu();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeMenu();
  });

  // ── 5. Smooth Scroll (with navbar offset) ─────────────────
  $$('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;

      const target = $(href);
      if (!target) return;

      e.preventDefault();
      closeMenu();

      const offset     = 72; // navbar height
      const targetTop  = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    });
  });

  // ── 6. Scroll-In Animations ───────────────────────────────
  const animItems = $$('.animate-on-scroll');

  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  // Stagger delay for grid children
  const staggerParents = [
    '.leistungen__grid',
    '.warum__grid',
    '.portfolio__grid',
    '.preise__grid'
  ];

  staggerParents.forEach(selector => {
    const parent = $(selector);
    if (!parent) return;
    parent.querySelectorAll('.animate-on-scroll').forEach((child, i) => {
      child.style.transitionDelay = `${i * 90}ms`;
    });
  });

  animItems.forEach(el => scrollObserver.observe(el));

  // ── 7. Prozess Timeline Line ──────────────────────────────
  const prozessLine    = $('#prozessLine');
  const prozessSection = $('#prozessTimeline');

  if (prozessLine && prozessSection) {
    const lineObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          prozessLine.classList.add('is-animated');
          lineObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    lineObserver.observe(prozessSection);
  }

  // ── 8. Particle Canvas ────────────────────────────────────
  const canvas = $('#heroCanvas');

  if (canvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const ctx        = canvas.getContext('2d');
    const isMobile   = () => window.innerWidth < 768;
    let particles    = [];
    let animId;

    const PARTICLE_COUNT_DESKTOP = 80;
    const PARTICLE_COUNT_MOBILE  = 35;
    const CONNECT_DIST           = 130;
    const ACCENT_COLOR           = '56, 189, 248';

    function resize() {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      init();
    }

    function rand(min, max) {
      return Math.random() * (max - min) + min;
    }

    function init() {
      const count = isMobile() ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;
      particles   = [];

      for (let i = 0; i < count; i++) {
        particles.push({
          x:       rand(0, canvas.width),
          y:       rand(0, canvas.height),
          vx:      rand(-0.25, 0.25),
          vy:      rand(-0.25, 0.25),
          radius:  rand(1, 2.2),
          alpha:   rand(0.15, 0.5)
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move & wrap particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0)             p.x = canvas.width;
        if (p.x > canvas.width)  p.x = 0;
        if (p.y < 0)             p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx   = particles[i].x - particles[j].x;
          const dy   = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const opacity = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(${ACCENT_COLOR}, ${opacity})`;
            ctx.lineWidth   = 1;
            ctx.stroke();
          }
        }
      }

      // Draw particles
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${ACCENT_COLOR}, ${p.alpha})`;
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    }

    let resizeTimer;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 200);
    });

    resize();
    draw();
  }

  // ── 9. Contact Form Validation ────────────────────────────
  const form       = $('#contactForm');
  const submitBtn  = $('#submitBtn');
  const formSuccess = $('#formSuccess');

  if (!form) return;

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function setError(groupId, errorId, msg) {
    const group = $(`#${groupId}`);
    const error = $(`#${errorId}`);
    if (!group || !error) return;
    group.classList.add('has-error');
    error.textContent = msg;
  }

  function clearError(groupId, errorId) {
    const group = $(`#${groupId}`);
    const error = $(`#${errorId}`);
    if (!group || !error) return;
    group.classList.remove('has-error');
    error.textContent = '';
  }

  function validateForm() {
    let valid = true;

    const name    = $('#inputName').value.trim();
    const email   = $('#inputEmail').value.trim();
    const message = $('#inputMessage').value.trim();

    if (!name) {
      setError('groupName', 'errorName', 'Bitte geben Sie Ihren Namen ein.');
      valid = false;
    } else {
      clearError('groupName', 'errorName');
    }

    if (!email) {
      setError('groupEmail', 'errorEmail', 'Bitte geben Sie Ihre E-Mail-Adresse ein.');
      valid = false;
    } else if (!EMAIL_RE.test(email)) {
      setError('groupEmail', 'errorEmail', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
      valid = false;
    } else {
      clearError('groupEmail', 'errorEmail');
    }

    if (!message) {
      setError('groupMessage', 'errorMessage', 'Bitte schreiben Sie uns eine Nachricht.');
      valid = false;
    } else if (message.length < 20) {
      setError('groupMessage', 'errorMessage', 'Ihre Nachricht sollte mindestens 20 Zeichen lang sein.');
      valid = false;
    } else {
      clearError('groupMessage', 'errorMessage');
    }

    return valid;
  }

  // Clear errors on re-input
  ['inputName', 'inputEmail', 'inputMessage'].forEach(id => {
    const el = $(`#${id}`);
    if (!el) return;
    el.addEventListener('input', () => {
      const map = { inputName: ['groupName','errorName'], inputEmail: ['groupEmail','errorEmail'], inputMessage: ['groupMessage','errorMessage'] };
      if (map[id]) clearError(...map[id]);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) {
      // Scroll to first error
      const firstError = form.querySelector('.form-group.has-error .form-input');
      if (firstError) firstError.focus();
      return;
    }

    // Loading state
    submitBtn.disabled = true;
    submitBtn.classList.add('is-loading');
    formSuccess.classList.remove('is-visible', 'is-hiding');

    const data = new FormData(form);
    data.append('access_key', '154779e6-8961-488a-b0e1-b35e0a73f95d');

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })
      .then(res => res.json())
      .then(res => {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
        if (res.success) {
          form.reset();
          formSuccess.classList.add('is-visible');
          formSuccess.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

          // Auto-hide nach 10 Sekunden mit Ausblend-Animation
          setTimeout(() => {
            formSuccess.classList.replace('is-visible', 'is-hiding');
            formSuccess.addEventListener('animationend', () => {
              formSuccess.classList.remove('is-hiding');
            }, { once: true });
          }, 10000);
        } else {
          alert('Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt an business@swiftsites.info');
        }
      })
      .catch(() => {
        submitBtn.disabled = false;
        submitBtn.classList.remove('is-loading');
        alert('Fehler beim Senden. Bitte versuche es erneut oder schreib uns direkt an business@swiftsites.info');
      });
  });

});
