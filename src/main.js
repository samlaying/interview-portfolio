import './utils/gsap-setup.js';
import './assets/styles/input.css';

import { initAccordion } from './components/molecules/accordion.js';
import { initScrollAnimations } from './components/organisms/scroll-anim.js';
import { initCountUp } from './components/atoms/count-up.js';
import { initSmoothScroll } from './components/organisms/nav.js';
import { initContact } from './components/organisms/contact.js';

initAccordion();
initScrollAnimations();
initCountUp();
initSmoothScroll();
initContact();
