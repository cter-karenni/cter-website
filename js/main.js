// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', function(e) {
    e.stopPropagation();
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
  });

  // close when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    });
  });

  // close when tapping outside
  document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !mobileMenu.contains(e.target)) {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
    }
  });
}

// ── NAVBAR SCROLL ──
const navbar = document.getElementById('navbar');

if (navbar) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ── LANGUAGE TOGGLE ──
let currentLang = "en";

function toggleLanguage() {
  currentLang = currentLang === "en" ? "my" : "en";

  const toggleBtn = document.getElementById("language-toggle");
  if (toggleBtn) {
    toggleBtn.textContent = currentLang === "en" ? "မြန်မာ" : "English";
  }

  const elements = document.querySelectorAll(".lang-text");
  elements.forEach(element => {
    if (currentLang === "my") {
      element.textContent = element.getAttribute("data-my");
      element.classList.add("lang-my");
    } else {
      element.textContent = element.getAttribute("data-en");
      element.classList.remove("lang-my");
    }
  });
}

// ── BRIEFERS FILTER ──
function filterBriefers(year, btn) {
  const cards = document.querySelectorAll('.briefer-archive-card');
  const buttons = document.querySelectorAll('.filter-btn');

  buttons.forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');

  cards.forEach(card => {
    if (year === 'all' || card.dataset.year === year) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}