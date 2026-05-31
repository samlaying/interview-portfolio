import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Hero elements
  gsap.from('.hero-fade', {
    opacity: 0,
    y: 30,
    duration: 0.6,
    stagger: 0.15,
    ease: 'power2.out',
  });

  // Section headings and cards
  gsap.utils.toArray('.section-fade').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
    });
  });

  // Card accordions
  gsap.utils.toArray('.card-accordion').forEach((card) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 80%',
        once: true,
      },
      opacity: 0,
      y: 20,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
}
