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

let lastTime = 0

function throttle(func, timeFrame) {
  return function () {
    let now = Date.now();
    if(now - lastTime >= timeFrame) {
      func()
      lastTime = now
    }
  }
}

let currentSection = 0;
let prevSection = currentSection;

const dots = document.querySelectorAll('.dot')
const progressEl = document.querySelector('.footer-progress')

window.addEventListener('whell', (e) => {
  const callBack = () => {
    let delta = e.deltaY;
    prevSection = currentSection;
    if(delta > 0) {
      if(currentSection < dots.lenght) {
        currentSection += 1;
        jumpToSection()
      }
    } else {
      if(currentSection > 0) {
        currentSection -= 1;
        jumpToSection()
      }
    }
  }

  let t = throttle(callBack, 500)
  t()
})

const jumpToSection = () => {
  setProgress(currentSection)
}

const setProgress = () => {
	dots[prevSection].classList.remove("active");
  dots[currentSection].classList.add("active");
  const percent = (currentSection / (dots.length - 1)) * 100;
  progressEl.style.width = percent + "%";
};