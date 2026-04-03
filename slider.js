/* ===== PROJECT SLIDER JS ===== */

const track    = document.getElementById('sliderTrack');
const prevBtn  = document.getElementById('prevBtn');
const nextBtn  = document.getElementById('nextBtn');
const dotsEl   = document.getElementById('sliderDots');
const cards    = document.querySelectorAll('.project-card');

const CARD_GAP  = 24;  // matches CSS gap 1.5rem
let cardWidth   = cards[0]?.offsetWidth || 360;
let current     = 0;
const total     = cards.length;

// Build dots
cards.forEach((_, i) => {
  const dot = document.createElement('div');
  dot.className = 'dot' + (i === 0 ? ' active' : '');
  dot.addEventListener('click', () => goTo(i));
  dotsEl.appendChild(dot);
});

function updateDots() {
  document.querySelectorAll('.dot').forEach((d, i) => {
    d.classList.toggle('active', i === current);
  });
}

function goTo(idx) {
  current = Math.max(0, Math.min(idx, total - 1));
  const offset = current * (cardWidth + CARD_GAP);
  track.scrollTo({ left: offset, behavior: 'smooth' });
  updateDots();
}

prevBtn.addEventListener('click', () => goTo(current - 1));
nextBtn.addEventListener('click', () => goTo(current + 1));

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft')  goTo(current - 1);
  if (e.key === 'ArrowRight') goTo(current + 1);
});

// Sync dots on manual scroll
let scrollTimer;
track.addEventListener('scroll', () => {
  clearTimeout(scrollTimer);
  scrollTimer = setTimeout(() => {
    cardWidth = cards[0]?.offsetWidth || 360;
    const snapped = Math.round(track.scrollLeft / (cardWidth + CARD_GAP));
    current = Math.max(0, Math.min(snapped, total - 1));
    updateDots();
  }, 80);
});

// Drag to scroll (mouse)
let isDown = false;
let startX, scrollStart;

track.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - track.offsetLeft;
  scrollStart = track.scrollLeft;
  track.style.cursor = 'grabbing';
});

document.addEventListener('mouseup', () => {
  if (!isDown) return;
  isDown = false;
  track.style.cursor = 'grab';
  cardWidth = cards[0]?.offsetWidth || 360;
  const snapped = Math.round(track.scrollLeft / (cardWidth + CARD_GAP));
  goTo(snapped);
});

document.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const diff = x - startX;
  track.scrollLeft = scrollStart - diff;
});

// Auto-play
let autoPlay = setInterval(() => goTo((current + 1) % total), 4000);
track.addEventListener('mouseenter', () => clearInterval(autoPlay));
track.addEventListener('mouseleave', () => {
  autoPlay = setInterval(() => goTo((current + 1) % total), 4000);
});

// Resize handler
window.addEventListener('resize', () => {
  cardWidth = cards[0]?.offsetWidth || 360;
});
