const tl = gsap.timeline();
tl.from("#nav", {
  opacity: 0,
  delay: 0.25,
});
tl.from("#nav h1, #nav h3, #nav button", {
  y: -100,
  duration: 2,
  delay: 1,
  stagger: 0.5,
});
tl.from("#left h1", {
  x: -100,
  duration: 1,
  opacity: 0,
  stagger: 0.5,
});
tl.from("#right img", {
  scale: 0,
  duration: 1,
  opacity: 0,
});
tl.from("#page2 .box", {
  opacity: 0,
  duration: 2,
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#page2 .box",
    scroller: "body",
    // markers: true,
    start: "top 100%",
    end: "top 20%",
    scrub: 1,
  },
});
