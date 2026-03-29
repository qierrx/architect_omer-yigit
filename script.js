'use strict';
// ═══════════════════════════════════════════
//  i18n — Dil / Language System
// ═══════════════════════════════════════════

const translations = {
  tr: {
    // Nav
    'nav-about': 'Hakkımda',
    'nav-skills': 'Beceriler',
    'nav-exp': 'Deneyim',
    'nav-edu': 'Eğitim',
    'nav-cta': 'İletişim',
    // Hero
    'hero-eyebrow': 'Mimar · İstanbul · 2026',
    'hero-meta-1': 'Mimar',
    'hero-meta-2': 'Kocaeli Üniversitesi',
    'hero-meta-3': 'İstanbul',
    'hero-scroll': 'Kaydır',
    // About
    'about-label': 'Hakkımda',
    'about-title': 'Tasarımda hassasiyet.<br><em>Her detayda tutku.</em>',
    'about-p1': 'Kocaeli Üniversitesi Mimarlık ve Tasarım Fakültesi, Mimarlık Bölümü mezunuyum. Mimari çizim, 3D modelleme ve tasarım sunumları için sektörde yaygın kullanılan yazılımları etkin biçimde kullanıyorum.',
    'about-p2': 'Eğitim sürecimde belediyelerin denetim, inşaat ve etüt-proje birimlerinde yaptığım stajlar sayesinde hem <strong>uygulama hem de idari süreçlere</strong> hâkimiyet kazandım.',
    'about-p3': 'Ayrıca İstanbul\'da çeşitli mimari ve tasarım projelerinde <strong>serbest olarak</strong> görev alarak farklı ölçeklerde deneyim edindim; disiplinli ve detay odaklı çalışma anlayışıyla projelere değer katmayı hedefliyorum.',
    'profile-role': 'Mimar',
    'stat-1-l': 'Ay<br>Staj',
    'stat-2-l': 'Yazılım<br>Aracı',
    'stat-3-l': 'Bilinen<br>Dil',
    'chip-loc': 'Esenevler mah. Yunus Emre Cad. No:1/1, Ümraniye / İstanbul',
    // Skills
    'skills-label': 'Uzmanlık',
    'skills-title': 'Araçlar & <em>Beceriler</em>',
    'skills-desc': 'Akademik titizlik ve belediye ile özel projelerdeki uygulamalı deneyimle oluşturulmuş çok yönlü bir araç seti.',
    'sb1-title': 'Tasarım Yazılımları',
    'sb2-title': 'Temel Yetkinlikler',
    'sb3-title': 'Diller',
    'st1': 'Mimari Çizim & Sunum',
    'st2': '3D Modelleme & Render',
    'st3': 'Mimari Tasarım',
    'st4': 'Maket Yapımı',
    'st5': 'Grafik Tasarım',
    'st6': 'Kavramsal Düşünce',
    'st7': 'Zaman Yönetimi',
    'st8': 'Takım Çalışması',
    'lang-native': 'Anadil',
    'lang-beginner': 'Başlangıç',
    'lang-beginner2': 'Başlangıç',
    // Experience
    'exp-label': 'Kariyer',
    'exp-sidebar-title': 'İş<br>Deneyimi',
    'exp-sidebar-note': 'Ümraniye Belediyesi\'nde ofis ve şantiye stajları ile İstanbul genelinde serbest projeler — inşaatın her aşamasında pratik uzmanlık geliştirme.',
    'exp1-company': 'Ümraniye Belediyesi &ensp;·&ensp; Ofis Stajı',
    'exp1-d1': 'Mimari ve statik projelerde plan çözümleme',
    'exp1-d2': 'AutoCAD tabanlı planların mekânsal geometri üzerinden 3D modellenmesi',
    'exp1-d3': 'Modellenen projelerin render motorlarıyla sunuma hazırlanması',
    'exp1-d4': 'Adobe Photoshop ile afiş ve ilan tasarımı',
    'exp2-name': 'Yapı Kontrol Müdürlüğü',
    'exp2-company': 'Ümraniye Belediyesi &ensp;·&ensp; Şantiye Stajı',
    'exp2-d1': 'Yapı Denetim Kanunu kapsamında inşaatların kontrolü; gerekli vizelerin verilmesi',
    'exp2-d2': 'İnşaatların tüm aşamalarında yalıtım çalışmalarının denetlenmesi',
    'exp2-d3': 'Sözlü/yazılı iletişimle gelen talep ve şikâyetlerin yasal süreçler işletilerek çözüme kavuşturulması',
    'exp2-d4': 'Mimari, mekanik ve elektrik uygulamalarının onaylı projelere uygunluğunun denetlenmesi',
    'exp3-name': 'Serbest Mimar',
    'exp3-company': 'Çeşitli Projeler &ensp;·&ensp; İstanbul',
    'exp3-d1': 'Farklı ölçeklerde çeşitli mimari ve tasarım projeleri',
    'exp3-d2': '3D modelleme, görselleştirme ve sunum hazırlama',
    'exp3-d3': 'Müşteri teslimlerinde detay odaklı, kaliteli çıktı anlayışı',
    // Education
    'edu-label': 'Akademik',
    'edu-title': 'Eğitim',
    'edu1-degree': 'Lisans Derecesi',
    'edu1-school': 'Kocaeli Üniversitesi',
    'edu1-dept': 'Mimarlık ve Tasarım Fakültesi<br>Mimarlık Bölümü',
    'edu1-pill': 'Lisans · 5 Yıl',
    'edu2-degree': 'Lise Diploması',
    'edu2-school': 'Prof. Dr. Nabi Avcı Fen Lisesi',
    'edu2-dept': 'Ortaöğretim<br>Fen Bölümü',
    'edu2-pill': 'Fen Lisesi · 4 Yıl',
    // Contact
    'contact-label': 'İletişime Geçelim',
    'contact-headline': 'Birlikte Çalışmaya<br><em>hazır mısın?</em>',
    'contact-body': 'İstanbul ve çevresinde tam zamanlı pozisyonlara, serbest projelere ve mimari fırsatlara açığım.',
    'cc-email-label': 'E-posta',
    'cc-phone-label': 'Telefon',
    'cc-loc-label': 'Konum',
    'cc-loc-val': 'Ümraniye / İstanbul, Türkiye',
    // Footer
    'footer-role': 'Mimar · Kocaeli Üniversitesi · İstanbul',
    'footer-copy': '© 2026 Tüm hakları saklıdır.',
  },

  en: {
    // Nav
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-exp': 'Experience',
    'nav-edu': 'Education',
    'nav-cta': 'Contact',
    // Hero
    'hero-eyebrow': 'Architect · Istanbul · 2026',
    'hero-meta-1': 'Architect',
    'hero-meta-2': 'Kocaeli University',
    'hero-meta-3': 'Istanbul',
    'hero-scroll': 'Scroll',
    // About
    'about-label': 'About Me',
    'about-title': 'Precision in design.<br><em>Passion in every detail.</em>',
    'about-p1': 'I graduated from the Department of Architecture at <strong>Kocaeli University</strong>, Faculty of Architecture and Design. I am proficient in widely-used industry software for architectural drawing, 3D modeling, and design presentations.',
    'about-p2': 'During my education, I gained both <strong>practical and administrative experience</strong> through internships in municipal inspection, construction, and survey-project departments.',
    'about-p3': 'I have also worked as a <strong>freelancer</strong> on various architectural and design projects in Istanbul, gaining experience at different scales. I aim to add value to projects with a disciplined and detail-oriented working approach.',
    'profile-role': 'Architect',
    'stat-1-l': 'Months<br>Internship',
    'stat-2-l': 'Software<br>Mastered',
    'stat-3-l': 'Languages<br>Known',
    'chip-loc': 'Esenevler mah. Yunus Emre Cad. No:1/1, Ümraniye / Istanbul',
    // Skills
    'skills-label': 'Expertise',
    'skills-title': 'Tools & <em>Skills</em>',
    'skills-desc': 'A versatile toolkit built through academic rigor and hands-on professional experience in municipal and private projects.',
    'sb1-title': 'Design Software',
    'sb2-title': 'Core Competencies',
    'sb3-title': 'Languages',
    'st1': 'Architectural Drawing & Presentation',
    'st2': '3D Modeling & Rendering',
    'st3': 'Architectural Design',
    'st4': 'Model Making',
    'st5': 'Graphic Design',
    'st6': 'Conceptual Thinking',
    'st7': 'Time Management',
    'st8': 'Teamwork &amp; Collaboration',
    'lang-native': 'Native',
    'lang-beginner': 'Beginner',
    'lang-beginner2': 'Beginner',
    // Experience
    'exp-label': 'Career',
    'exp-sidebar-title': 'Work<br>Experience',
    'exp-sidebar-note': 'Municipal internships at Ümraniye Municipality and freelance projects across Istanbul — building practical expertise at every stage of construction.',
    'exp1-company': 'Ümraniye Municipality &ensp;·&ensp; Office Internship',
    'exp1-d1': 'Analysis of plans in architectural and structural projects',
    'exp1-d2': '3D modeling of AutoCAD-based plans on spatial geometry',
    'exp1-d3': 'Preparing modeled projects for presentation using rendering engines',
    'exp1-d4': 'Designing posters and advertisements using Adobe Photoshop',
    'exp2-name': 'Yapı Kontrol Müdürlüğü',
    'exp2-company': 'Ümraniye Municipality &ensp;·&ensp; Site Internship',
    'exp2-d1': 'Inspecting construction projects under the Building Inspection Law; approving required permits',
    'exp2-d2': 'Supervising insulation works at all stages of construction',
    'exp2-d3': 'Evaluating requests and complaints; resolving legal procedures in a timely manner',
    'exp2-d4': 'Ensuring architectural, mechanical, and electrical applications comply with approved plans',
    'exp3-name': 'Freelance Architect',
    'exp3-company': 'Various Projects &ensp;·&ensp; Istanbul',
    'exp3-d1': 'Diverse architectural and design projects across multiple scales',
    'exp3-d2': '3D modeling, visualization, and presentation preparation',
    'exp3-d3': 'Detail-oriented approach delivering high-quality client outputs',
    // Education
    'edu-label': 'Academic',
    'edu-title': 'Education',
    'edu1-degree': "Bachelor's Degree",
    'edu1-school': 'Kocaeli University',
    'edu1-dept': 'Faculty of Architecture & Design<br>Department of Architecture',
    'edu1-pill': 'Undergraduate · 5 Years',
    'edu2-degree': 'High School Diploma',
    'edu2-school': 'Prof. Dr. Nabi Avcı Science High School',
    'edu2-dept': 'Secondary Education<br>Science Track',
    'edu2-pill': 'Science High School · 4 Years',
    // Contact
    'contact-label': "Let's Connect",
    'contact-headline': 'Ready to<br><em>collaborate?</em>',
    'contact-body': 'Open to full-time positions, freelance projects, and architectural opportunities in Istanbul and beyond.',
    'cc-email-label': 'Email',
    'cc-phone-label': 'Phone',
    'cc-loc-label': 'Location',
    'cc-loc-val': 'Ümraniye / Istanbul, Turkey',
    // Footer
    'footer-role': 'Architect · Kocaeli University · Istanbul',
    'footer-copy': '© 2026 All rights reserved.',
  }
};

// ── Apply language ─────────────────────────
let currentLang = localStorage.getItem('öyk-lang') || 'tr';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('öyk-lang', lang);
  document.documentElement.lang = lang;

  const dict = translations[lang];

  // Plain text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // HTML content (for elements with <em>, <strong>, <br>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.dataset.i18nHtml;
    if (dict[key] !== undefined) el.innerHTML = dict[key];
  });

  // Update toggle button
  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.textContent = lang === 'tr' ? 'EN' : 'TR';
    btn.classList.toggle('is-en', lang === 'en');
  }

  // Update page title & meta
  document.title = lang === 'tr'
    ? 'Ömer Yiğit Kuloğlu — Mimar'
    : 'Ömer Yiğit Kuloğlu — Architect';

  // Hero bg word
  const bgWord = document.getElementById('heroBgWord');
  if (bgWord) bgWord.textContent = lang === 'tr' ? 'MİMAR' : 'ARCH';
}

// ── Language toggle button ─────────────────
document.addEventListener('DOMContentLoaded', () => {
  applyLang(currentLang);

  const btn = document.getElementById('langToggle');
  if (btn) {
    btn.addEventListener('click', () => {
      applyLang(currentLang === 'tr' ? 'en' : 'tr');
    });
  }
});

// ── Phone link: mobile opens dialer, desktop visual-only ──
(function initPhoneLinks() {
  // Detect touch/mobile device
  const isMobile = () =>
    /Mobi|Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent) ||
    ('maxTouchPoints' in navigator && navigator.maxTouchPoints > 1);

  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');

  phoneLinks.forEach(el => {
    if (!isMobile()) {
      // Desktop: prevent click so no app dialog pops up
      el.addEventListener('click', e => e.preventDefault());
      // Keep hover styles intact — only block the action
      el.setAttribute('aria-label', el.getAttribute('aria-label') + ' (yalnızca mobilde aranabilir)');
      el.dataset.desktopOnly = 'true';
    }
    // Mobile: href="tel:..." already works natively — nothing extra needed
  });
})();

// ═══════════════════════════════════════════
//  ARCHITECT CV — Scroll Engine
//  Apple-style: scroll-bound transforms,
//  sticky pinning, parallax, word reveal
// ═══════════════════════════════════════════

// ── 1. Custom cursor ───────────────────────
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mx = -200, my = -200;
  let rx = -200, ry = -200;
  let rafId;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; }, { passive: true });

  function lerp(a, b, t) { return a + (b - a) * t; }

  function animCursor() {
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    rx = lerp(rx, mx, 0.1);
    ry = lerp(ry, my, 0.1);
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    rafId = requestAnimationFrame(animCursor);
  }
  animCursor();

  document.querySelectorAll('a, button, .t-card, .edu-card, .skill-block, .ccard, .ptag, .stag').forEach(el => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });
})();

// ── 2. Navbar scroll ───────────────────────
(function initNavbar() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  // Hamburger
  const btn = document.getElementById('hamburger');
  const links = document.getElementById('navLinks');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('.nav-link').forEach(l => l.addEventListener('click', () => links.classList.remove('open')));
  }
})();

// ── 3. Hero entrance ──────────────────────
(function initHeroEntrance() {
  // Word reveal with stagger
  const words = ['w1', 'w2', 'w3'];
  words.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    setTimeout(() => el.classList.add('in'), 300 + i * 120);
  });

  const ids = ['heroEyebrow', 'heroYear', 'heroDivider', 'heroMeta', 'heroScroll'];
  const dels = [600, 700, 800, 1000, 1300];
  ids.forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) setTimeout(() => el.classList.add('in'), dels[i]);
  });
})();

// ── 4. Hero scroll-pinned effects ────────
(function initHeroScroll() {
  const heroSection = document.getElementById('hero');
  const heroContent = document.getElementById('heroContent');
  const heroLines = document.getElementById('heroLines');
  const bgWord = document.getElementById('heroBgWord');
  const heroEye = document.getElementById('heroEyebrow');
  const heroYear = document.getElementById('heroYear');
  const heroDivider = document.getElementById('heroDivider');
  const heroMeta = document.getElementById('heroMeta');
  const heroScroll = document.getElementById('heroScroll');

  if (!heroSection) return;

  function onScroll() {
    const heroH = heroSection.offsetHeight;  // 300vh
    const pinH = window.innerHeight;
    const sy = window.scrollY;
    // progress 0→1 over the non-sticky scroll range
    const scrollable = heroH - pinH;
    const prog = Math.min(Math.max(sy / scrollable, 0), 1);

    // Content: scale up + fade out (Apple iPhone text effect)
    // prog 0→1 over 100vh scrollable range (200vh - 100vh viewport)
    // Fade starts at 40% scroll, fully gone at 80% so there's no jarring black screen
    if (heroContent) {
      const scale = 1 + prog * 0.12;
      const opacity = Math.max(0, 1 - Math.max(0, (prog - 0.35) / 0.5));
      const ty = prog * -30;
      heroContent.style.transform = `scale(${scale}) translateY(${ty}px)`;
      heroContent.style.opacity = opacity;
    }

    // Grid lines: rotate subtly
    if (heroLines) {
      heroLines.style.transform = `rotate(${prog * 3}deg) scale(${1 + prog * 0.15})`;
      heroLines.style.opacity = Math.max(0, 1 - prog * 1.5);
    }

    // Background word: scale massively (like Apple's "iPhone" word)
    if (bgWord) {
      const bScale = 1 + prog * 6;
      const bOpacity = Math.max(0, Math.min(0.06, 0.06 - prog * 0.04));
      bgWord.style.transform = `scale(${bScale})`;
      bgWord.style.opacity = bOpacity;
    }

    // Corner labels: fade differently
    [heroEye, heroYear].forEach(el => {
      if (el) el.style.opacity = Math.max(0, 1 - prog * 3);
    });

    // Scroll indicator fades on first scroll
    if (heroScroll) heroScroll.style.opacity = Math.max(0, 1 - prog * 4);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── 5. Scroll Reveal (IntersectionObserver) ──
(function initScrollReveal() {
  const els = document.querySelectorAll('.sr');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => obs.observe(el));
})();

// ── 6. Counter animation ──────────────────
(function initCounters() {
  const counters = document.querySelectorAll('[data-target]');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.target, 10);
      const dur = 1400;
      const start = performance.now();

      function tick(now) {
        const t = Math.min((now - start) / dur, 1);
        const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
        el.textContent = Math.round(ease * target);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target;
      }
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.6 });

  counters.forEach(el => obs.observe(el));
})();

// ── 7. Skill bar fill ─────────────────────
(function initSkillBars() {
  const bars = document.querySelectorAll('.sbar-fill');
  if (!bars.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const bar = entry.target;
      setTimeout(() => { bar.style.width = bar.dataset.pct + '%'; }, 200);
      obs.unobserve(bar);
    });
  }, { threshold: 0.4 });

  bars.forEach(b => obs.observe(b));
})();

// ── 8. Section parallax on scroll ────────
(function initParallax() {
  // Subtle translateY parallax on cards as they enter the viewport
  const cards = document.querySelectorAll('.edu-card');

  function onScroll() {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const vy = window.innerHeight / 2;
      const dist = (center - vy) / window.innerHeight;
      // Only subtle shift when near viewport
      if (Math.abs(dist) < 1) {
        const ty = dist * 12;
        card.style.transform = `translateY(${ty}px)`;
      }
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });
})();

// ── 9. 3D tilt on hover (cards) ──────────
(function initTilt() {
  const tiltEls = document.querySelectorAll('.t-card, .edu-card, .skill-block, .ccard');

  tiltEls.forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      const rotX = -dy * 5;
      const rotY = dx * 5;
      el.style.transform = `perspective(900px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transition = 'transform 0.5s cubic-bezier(0.16,1,0.3,1)';
      el.style.transform = '';
      setTimeout(() => { el.style.transition = ''; }, 500);
    });

    el.addEventListener('mouseenter', () => {
      el.style.transition = 'transform 0.1s ease';
    });
  });
})();

// ── 10. Section active nav highlight ──────
(function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      links.forEach(l => l.style.color = '');
      const active = document.querySelector(`.nav-link[href="#${entry.target.id}"]`);
      if (active) active.style.color = 'var(--terra)';
    });
  }, { rootMargin: '-30% 0px -60% 0px' });

  sections.forEach(s => obs.observe(s));
})();

// ── 11. Timeline items: scroll-driven slide ──
(function initTimelineAnim() {
  // Extra: as you scroll through experience, cards slide in from opacity
  // Already handled by .sr but we add a binding offset per item
  const items = document.querySelectorAll('.t-item');
  items.forEach((item, i) => {
    item.style.transitionDelay = (i * 0.08) + 's';
  });
})();

// ── 12. Apple-style text counter on hero numbers ──
// (already done via counters, this is extra glitch effect on scroll)
(function initHeroGlitch() {
  // subtle accent-line parallax
  const lines = document.querySelectorAll('.accent-line');
  window.addEventListener('scroll', () => {
    lines.forEach(line => {
      const rect = line.getBoundingClientRect();
      const prog = 1 - (rect.top / window.innerHeight);
      line.style.opacity = (0.15 + prog * 0.35).toFixed(2);
    });
  }, { passive: true });
})();
