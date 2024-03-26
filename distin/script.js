function loco() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
loco();

var tl = gsap.timeline();

tl.from("#page-1 h2 span", {
  opacity: 0,
  duration: 0.5,
  delay: 0.1,
  repeat: -1,
  yoyo: true,
});

var allh2 = document.querySelectorAll("#page-2 h2");
allh2.forEach(function (dets) {
  var clutter = "";
  var text = dets.textContent;
  var split = text.split(" ");
  split.forEach(function (e) {
    clutter = clutter + `<span>${e}</span>`;
  });
  dets.innerHTML = clutter;
});

gsap.from("#page-2 h2 span", {
  y: 100,
  rotate: "5deg",
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page-2 h2",
    // markers:true,
    start: "top 85%",
    end: "top 40%",
    scrub: 4,
  },
});

var allh3 = document.querySelectorAll("#page-2 h3");
allh3.forEach(function (dets) {
  var clutter = "";
  var text = dets.textContent;
  var split = text.split(" ");
  split.forEach(function (e) {
    clutter = clutter + `<span>${e}</span>`;
  });
  dets.innerHTML = clutter;
});

gsap.from("#page-2 h3 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  rotate: "15deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page-2 h3",
    // markers:true,
    start: "top 85%",
    end: "top 60%",
    scrub: 4,
  },
});

var allh5 = document.querySelectorAll("#page-5 h3");
allh5.forEach(function (dets) {
  var clutter = "";
  var text = dets.textContent;
  var split = text.split(" ");
  split.forEach(function (e) {
    clutter = clutter + `<span>${e}</span>`;
  });
  dets.innerHTML = clutter;
});

gsap.from("#page-5 h3 span", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 1,
  rotate: "5deg",
  scrollTrigger: {
    scroller: "#main",
    trigger: "#page-5 h3",
    // markers:true,
    start: "top 85%",
    end: "top 60%",
    scrub: 4,
  },
});

tl.to(".box h1", {
  x: -250,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".box h1",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
  },
});
tl.to(".box h4", {
  x: -50,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".box h1",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
  },
});
tl.to(".box h5", {
  x: 150,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".box h1",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
  },
});
tl.to(".box h6", {
  x: 350,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: ".box h1",
    scroller: "#main",
    // markers:true,
    start: "top 50%",
    end: "top 10%",
    scrub: 3,
  },
});
