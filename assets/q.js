// Reveal on scroll + cursor-following glow on cards.
const io = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
document.querySelectorAll('.glow').forEach(card => card.addEventListener('pointermove', e => {
  const r = card.getBoundingClientRect();
  card.style.setProperty('--x', `${e.clientX - r.left}px`);
  card.style.setProperty('--y', `${e.clientY - r.top}px`);
}));
