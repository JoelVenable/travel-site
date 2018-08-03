import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from "./modules/StickyHeader";

var mobileMenu = new MobileMenu();
var featureItem =
  new RevealOnScroll($('.feature-item'), "70%", "fadeInUp");
var testimonial =
  new RevealOnScroll($(".testimonial"), "90%", "fadeInUp");
var stickyHeader = new StickyHeader();