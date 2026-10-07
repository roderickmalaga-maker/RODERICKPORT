/* ============================================================
   Roderick.dev — Client behavior
   Vanilla JS: typing effects, mobile nav, smooth scroll
   ============================================================ */
'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initHeroTitle();
  initTerminalTypewriter();
  initMobileMenu();
  initSmoothScroll();
  initContactForm();
});

/* ---------- Hero title rotation ---------- */
function initHeroTitle() {
  const el = document.getElementById('heroTitle');
  if (!el) return;
  const phrases = [
    'Fresh BSIT Graduate \u00b7 Aspiring Software Engineer \u00b7 Continuous Learner',
    'C++ \u00b7 C# \u00b7 Java \u00b7 Web Development',
  ];
  let idx = 0;
  const render = () => { el.textContent = phrases[idx]; idx = (idx + 1) % phrases.length; };
  render();
  setInterval(render, 4500);
}

/* ---------- Terminal typewriter effect ---------- */
function initTerminalTypewriter() {
  const line = document.getElementById('typewriter');
  if (!line) return;

  const text = 'roderick_malaga@sjp2cd.edu.ph';
  const speed = 85;
  let i = 0;

  const type = () => {
    if (i <= text.length) {
      line.textContent = text.slice(0, i);
      i++;
      setTimeout(type, speed);
    } else {
      // Keep caret visible after typing completes
      line.classList.add('done');
    }
  };
  // Start after a short pause to mirror the first prompt line
  setTimeout(type, 350);
}

/* ---------- Mobile navigation toggle ---------- */
function initMobileMenu() {
  const toggle = document.getElementById('navToggle');
  const list = document.getElementById('navList');
  if (!toggle || !list) return;

  toggle.addEventListener('click', () => {
    toggle.setAttribute('aria-expanded', list.classList.contains('open'));
    list.classList.toggle('open');
  });

  // Close menu when a link is clicked
  list.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      list.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ---------- Smooth scroll for in-page anchors ---------- */
function initSmoothScroll() {
  const isMobile = () => window.innerWidth < 820;
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 70;
        window.scrollTo({ top: isMobile() ? target.offsetTop - 80 : top, behavior: 'smooth' });
      }
    });
  });
}

/* ---------- Contact form (informational) ---------- */
function initContactForm() {
  const forms = document.querySelectorAll('.contact__form');
  forms.forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // This portfolio is static & non-backend. Guide the user to email directly.
      alert('Thanks for reaching out! Please email roderick_malaga@sjp2cd.edu.ph directly — this form is informational only.');
      form.reset();
    });
  });
}
