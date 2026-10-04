// Mobile menu
const btn = document.querySelector('.menu-btn');
const nav = document.getElementById('nav');
btn?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  btn.setAttribute('aria-expanded', open);
});

// Carousels
document.querySelectorAll('.carousel').forEach((c) => {
  const track = c.querySelector('.track');
  const prev = c.querySelector('.prev');
  const next = c.querySelector('.next');
  const step = () => track.clientWidth * 0.9;
  const update = () => {
    prev.disabled = track.scrollLeft <= 4;
    next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
  };
  prev.addEventListener('click', () => track.scrollBy({ left: -step(), behavior: 'smooth' }));
  next.addEventListener('click', () => track.scrollBy({ left: step(), behavior: 'smooth' }));
  track.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
});

// Lightbox for zoomable images
const zooms = [...document.querySelectorAll('button.zoom img')];
const lb = document.querySelector('.lightbox');
const lbImg = lb.querySelector('img');
let idx = 0;
const show = (i) => {
  idx = (i + zooms.length) % zooms.length;
  lbImg.src = zooms[idx].currentSrc || zooms[idx].src;
  lbImg.alt = zooms[idx].alt;
};
const close = () => { lb.hidden = true; document.body.style.overflow = ''; zooms[idx]?.closest('button').focus(); };
zooms.forEach((img, i) => img.closest('button').addEventListener('click', () => {
  show(i); lb.hidden = false; document.body.style.overflow = 'hidden'; lb.querySelector('.lb-close').focus();
}));
lb.querySelector('.lb-close').addEventListener('click', close);
lb.querySelector('.lb-prev').addEventListener('click', () => show(idx - 1));
lb.querySelector('.lb-next').addEventListener('click', () => show(idx + 1));
lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
document.addEventListener('keydown', (e) => {
  if (lb.hidden) return;
  if (e.key === 'Escape') close();
  if (e.key === 'ArrowLeft') show(idx - 1);
  if (e.key === 'ArrowRight') show(idx + 1);
});
if (zooms.length < 2) lb.querySelectorAll('.lb-prev,.lb-next').forEach((b) => (b.hidden = true));
