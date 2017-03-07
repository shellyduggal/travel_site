import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.testimonial'), '60%');
new RevealOnScroll($('.feature-item'), '85%');