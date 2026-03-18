/* ═══════════════════════════════════════════
   LILIAN SHIHUNDU OPETE - Portfolio JS
   ═══════════════════════════════════════════ */

// ── LIGHTBOX DATA ──
const galleryData = [
  { src: 'assets/images/hero.jpg',      cap: 'Studio Portrait' },
  { src: 'assets/images/runway-1.jpg',  cap: 'Runway Walk' },
  { src: 'assets/images/pageant-1.jpg', cap: 'Miss Deaf ASK Mombasa 2024' },
  { src: 'assets/images/pageant-2.jpg', cap: 'Miss Deaf Africa 2021 - Kenya' },
  { src: 'assets/images/award-1.jpg',   cap: 'Coast Fashion & Modelling Awards 2025' },
  { src: 'assets/images/runway-2.jpg',  cap: 'Fashion Show' },
  { src: 'assets/images/award-2.jpg',   cap: 'Photogenic Model of the Year 2025' },
  { src: 'assets/images/runway-3.jpg',  cap: 'Backstage' },
  { src: 'assets/images/cert-mmdi.jpg', cap: 'Best Cultural Attire - MMDI 2022' },
];

let lbIdx = 0;

// ── LIGHTBOX FUNCTIONS ──
function openLB(i) {
  lbIdx = i;
  document.getElementById('lbImg').src = galleryData[i].src;
  document.getElementById('lbCaption').textContent = galleryData[i].cap;
  document.getElementById('lb').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLB() {
  document.getElementById('lb').classList.remove('open');
  document.body.style.overflow = '';
}

function lbNav(dir) {
  lbIdx = (lbIdx + dir + galleryData.length) % galleryData.length;
  const img = document.getElementById('lbImg');
  img.style.opacity = '0';
  setTimeout(() => {
    img.src = galleryData[lbIdx].src;
    document.getElementById('lbCaption').textContent = galleryData[lbIdx].cap;
    img.style.opacity = '1';
  }, 150);
}

function handleLbClick(e) {
  if (e.target === document.getElementById('lb')) closeLB();
}

// ── KEYBOARD NAVIGATION ──
document.addEventListener('keydown', e => {
  if (!document.getElementById('lb').classList.contains('open')) return;
  if (e.key === 'Escape')      closeLB();
  if (e.key === 'ArrowLeft')   lbNav(-1);
  if (e.key === 'ArrowRight')  lbNav(1);
});

// ── PORTFOLIO FILTER ──
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.dataset.filter;

    document.querySelectorAll('.gallery-item').forEach(item => {
      if (filter === 'all' || item.dataset.cat === filter) {
        item.style.display = 'block';
        setTimeout(() => {
          item.style.opacity = '1';
          item.style.transform = 'translateY(0)';
        }, 10);
      } else {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        setTimeout(() => { item.style.display = 'none'; }, 300);
      }
    });
  });
});

// ── SCROLL REVEAL ──
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
  revealObserver.observe(el);
});

// ── NAV SCROLL BEHAVIOUR ──
const navEl = document.getElementById('nav');
window.addEventListener('scroll', () => {
  navEl.classList.toggle('scrolled', window.scrollY > 60);

  // Highlight active section in nav
  const sections = ['home', 'about', 'portfolio', 'achievements', 'award-photos', 'contact'];
  let current = '';
  sections.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 120) current = id;
  });
  document.querySelectorAll('.nav-links a[data-section]').forEach(a => {
    a.classList.toggle('active', a.dataset.section === current);
  });
});

// ── HAMBURGER / MOBILE MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mm-link').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ── SMOOTH NAV LOGO → TOP ──
document.querySelector('.nav-logo').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
