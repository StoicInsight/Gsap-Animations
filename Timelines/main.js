import { gsap } from "gsap";

const box = document.querySelector(".box");
const circle1 = document.querySelector(".circle1");
const circle2 = document.querySelector(".circle2");


// Scale img while moving to the x axis
gsap.to(circle1, {x: 300, duration: 3, scale: 2, rotation: 360, ease: "power2.inOut"});

gsap.from(circle2, {x: 400, y:200, scale: 3, rotation: 360, duration: 3, ease: "power2.inOut"});