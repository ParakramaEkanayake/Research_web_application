/* ============================================
   NAVBAR — scroll effect & active section
============================================ */
const navbar  = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  // Sticky style
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // Logo change on scroll
  const logoImg = document.querySelector('.nav-logo img');
  if (window.scrollY > 60) {
    logoImg.src = 'images/logo1.png';
  } else {
    logoImg.src = 'images/logo2.png';
  }

  // Back to top visibility
  if (window.scrollY > 400) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }

  // Active nav link highlight
  let current = '';
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop - 100;
    if (window.scrollY >= sectionTop) {
      current = sec.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
});

/* ============================================
   HAMBURGER MENU
============================================ */
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksMenu.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
document.querySelectorAll('.nav-link, .dropdown-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksMenu.classList.remove('open');
  });
});

/* ============================================
   MILESTONES TAB SWITCHER
============================================ */
function showMilestone(id) {
  // Hide all panels
  document.querySelectorAll('.milestone-content').forEach(el => {
    el.classList.remove('active');
  });
  // Deactivate all tabs
  document.querySelectorAll('.milestone-tab').forEach(el => {
    el.classList.remove('active');
  });
  // Show selected
  const panel = document.getElementById('milestone-' + id);
  const tab   = document.getElementById('tab-' + id);
  if (panel) panel.classList.add('active');
  if (tab)   tab.classList.add('active');
}

/* ============================================
   CONTACT FORM
============================================ */
function handleFormSubmit(e) {
  e.preventDefault();
  const successMsg = document.getElementById('form-success');
  successMsg.classList.remove('hidden');
  e.target.reset();
  setTimeout(() => {
    successMsg.classList.add('hidden');
  }, 5000);
}

/* ============================================
   SMOOTH SCROLL for anchor links
============================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

/* ============================================
   SCROLL REVEAL — fade-in on scroll
============================================ */
const revealEls = document.querySelectorAll(
  '.domain-card, .doc-card, .slide-card, .team-card, .milestone-tab, .contact-info-panel, .contact-form-panel'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(30px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  revealObserver.observe(el);
});
