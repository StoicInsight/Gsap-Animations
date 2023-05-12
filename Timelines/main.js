import { gsap } from "gsap";

const buttons = document.querySelector(".buttons");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");


// Scale img while moving to the x axis
// gsap.to(circle1, {x: 300, duration: 3, scale: 2, rotation: 360, ease: "power2.inOut"});

// gsap.from(circle2, {x: 400, y:200, scale: 3, rotation: 360, duration: 3, ease: "power2.inOut"});

// class animateButton {
//   constructor(item) {
//       this.item = document.querySelector(item);
//   }

//   tween() {
//     gsap.to(this.btn, {
//       duration: 4,
//       x: () => buttons.offsetWidth,
//       xPercent: -100,
//       rotation: 360,
//       ease: "none",
//       paused: true
//     })
//   }

//   play() {
//     console
//     document.getElementById('play').onClick = () => tween.play()
//   }

//   pause() {
//     document.getElementById('pause').onClick = () => tween.play()

//   } 

//   restart() {
//     document.getElementById('restart').onClick = () => tween.play()
//   }

//   resume() {
//     document.getElementById('resume').onClick = () => tween.play()

//   }

//   reverse() {
//     document.getElementById('reverse').onClick = () => tween.play()
//   }
// }

// const animation = new animateButton(".circle1");

// animation.play()
// animation.pause()

let tween = gsap.to(".circle1", {
  duration: 4, 
  x: () => buttons.offsetWidth, // animate by the px width of the nav
  xPercent: -100, // offset by the width of the box
  rotation: 360, 
  ease: "none", 
  paused: true
});

// click handlers for controlling the tween instance...
document.querySelector("#play").onclick = () => tween.play();
document.querySelector("#pause").onclick = () => tween.pause();
document.querySelector("#resume").onclick = () => tween.resume();
document.querySelector("#reverse").onclick = () => tween.reverse();
document.querySelector("#restart").onclick = () => tween.restart();