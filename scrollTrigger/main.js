import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const container = document.querySelector('.container');
const lines = document.querySelector('.lines');

const scrollAnim = gsap.to(lines, {x: "-50%", ease: "none"})

ScrollTrigger.create({
  trigger: container,
  animation: scrollAnim,
  pin: true,
  scrub: 0.6
})