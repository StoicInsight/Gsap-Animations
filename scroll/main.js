

gsap.registerPlugin(ScrollTrigger);


let square = document.querySelector('.square')

// gsap.to(square, {
//   x: 500,
//   duration: 4,
//   ScrollTrigger: square
// })

gsap.to(square, {
  scrollTrigger: {
    trigger: '.square',
    start: "top 30%",
    end: () => `+=${square.offsetHeight}`,
    toggleClass: "red",
    markers: true
  },
  // x: 700,
  duration: 4
});