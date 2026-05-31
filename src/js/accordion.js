import gsap from 'gsap';

export function initAccordion() {
  const cards = document.querySelectorAll('[data-accordion]');

  cards.forEach((card) => {
    const trigger = card.querySelector('.accordion-trigger');
    const content = card.querySelector('.accordion-content');
    const arrow = card.querySelector('.accordion-arrow');
    let expanded = false;

    trigger.addEventListener('click', () => {
      if (expanded) {
        gsap.to(content, { height: 0, duration: 0.2, ease: 'power2.in' });
        gsap.to(arrow, { rotation: 0, duration: 0.3 });
      } else {
        gsap.to(content, { height: 'auto', duration: 0.3, ease: 'power2.out' });
        gsap.to(arrow, { rotation: 180, duration: 0.3 });
      }
      expanded = !expanded;
    });
  });
}
