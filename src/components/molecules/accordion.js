import gsap from 'gsap';

export function initAccordion() {
  const cards = document.querySelectorAll('[data-accordion]');

  cards.forEach((card) => {
    const trigger = card.querySelector('.accordion-trigger');
    const content = card.querySelector('.accordion-content');
    const arrow = card.querySelector('.accordion-arrow');
    let expanded = false;

    // Auto-expand on load
    gsap.set(content, { height: 'auto' });
    gsap.set(arrow, { rotation: 180 });
    card.classList.add('is-open');
    trigger.setAttribute('aria-expanded', 'true');
    expanded = true;

    trigger.addEventListener('click', () => {
      if (expanded) {
        gsap.to(content, { height: 0, duration: 0.2, ease: 'power2.in' });
        gsap.to(arrow, { rotation: 0, duration: 0.3 });
        card.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        gsap.to(content, { height: 'auto', duration: 0.3, ease: 'power2.out' });
        gsap.to(arrow, { rotation: 180, duration: 0.3 });
        card.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
      }
      expanded = !expanded;
    });
  });
}
