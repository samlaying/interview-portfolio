import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export function initSmoothScroll() {
  // CTA anchor links
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

  // Hide scroll hint on scroll
  const hint = document.getElementById('scroll-hint');
  if (hint) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        gsap.to(hint, { opacity: 0, duration: 0.3, onComplete: () => hint.remove() });
      }
    }, { once: true });
  }

  // WeChat copy button
  const wechatCopy = document.getElementById('wechat-copy');
  if (wechatCopy) {
    const label = wechatCopy.querySelector('.copy-label');
    const wechatId = wechatCopy.dataset.copy;
    wechatCopy.addEventListener('click', () => {
      navigator.clipboard.writeText(wechatId).then(() => {
        label.textContent = 'Copied';
        setTimeout(() => { label.textContent = 'Copy'; }, 2000);
      });
    });
  }
}
