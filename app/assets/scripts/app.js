import $ from 'jquery';

import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
new RevealOnScroll($('.testimonial'), '60%');
new RevealOnScroll($('.feature-item'), '85%');
var stickyHeader = new StickyHeader();