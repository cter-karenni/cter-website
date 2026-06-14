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

function toggleMobileMenu() {
      const hamburgerBtn = document.getElementById('hamburgerBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      
      // Toggles the animations on the lines and handles display
      hamburgerBtn.classList.toggle('open');
      mobileMenu.classList.toggle('open');
    }

    function filterBriefers(year) {
      const cards = document.querySelectorAll('.briefer-archive-card');
      const buttons = document.querySelectorAll('.filter-btn');

      buttons.forEach(btn => btn.classList.remove('active'));
      event.target.classList.add('active');

      cards.forEach(card => {
        if (year === 'all' || card.dataset.year === year) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    }