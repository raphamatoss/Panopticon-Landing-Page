// Reveal sections as they scroll into view.
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// Hero phone: count recognized students in sync with the 6s detection animation.
const counter = document.querySelector('[data-count]');
if (counter && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const total = Number(counter.dataset.count);
  const delays = [0.2, 0.6, 1.0, 1.4, 1.8]; // matches --d on each .box
  const cycle = () => {
    counter.textContent = '0';
    delays.slice(0, total).forEach((d, i) => {
      setTimeout(() => { counter.textContent = String(i + 1); }, (d + 0.6) * 1000);
    });
  };
  cycle();
  setInterval(cycle, 6000);
} else if (counter) {
  counter.textContent = counter.dataset.count;
}
