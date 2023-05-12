import { gsap } from "gsap";

const box = document.querySelector(".box");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");


// Scale img while moving to the x axis
gsap.to(circle1, {x: 300, duration: 3, scale: 2, rotation: 360, ease: "power2.inOut"});

gsap.from(circle2, {x: 400, y:200, scale: 3, rotation: 360, duration: 3, ease: "power2.inOut"});

class animateButton {
  constructor(btn, item) {
      this.btn = document.querySelector(btn);
  }

  tween() {
    gsap.to(this.btn, {
      duration: 4,
      x: () => buttons.offsetWidth,
      xPercent: -100,
      rotation: 360,
      ease: "none",
      paused: true
    })
  }

  play() {
    this.btn.onClick = () => this.tween.play()
  }

  pause() {
    this.btn.onClick = () => this.tween.pause()

  } 

  restart() {
    this.btn.onClick = () => this.tween.restart()

  }

  resume() {
    this.btn.onClick = () => this.tween.resume()

  }

  reverse() {
    this.btn.onClick = () => this.tween.reverse()
  }


}