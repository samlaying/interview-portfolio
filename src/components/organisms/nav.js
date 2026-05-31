import gsap from 'gsap';
import 'gsap/ScrollToPlugin';

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        gsap.to(window, {
          scrollTo: { y: target, offsetY: 20 },
          duration: 0.8,
          ease: 'power2.inOut',
        });
      }
    });
  });

  const hint = document.getElementById('scroll-hint');
  if (hint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        gsap.to(hint, { opacity: 0, duration: 0.3, onComplete: () => hint.remove() });
      }
    }, { once: true });
  }
}
