// const scroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true,
// });

(function () {
  const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    smoothMobile: false,
  });
  new ResizeObserver(() => scroll.update()).observe(
    document.querySelector("#main")
  );
})();

(function heroAnimation() {
  var tl = gsap.timeline();

  tl.from("#nav", {
    y: -10,
    duration: 1.3,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .to(".boundingElement", {
      delay: -0.9,
      y: 0,
      duration: 2,
      ease: Expo.easeInOut,
      stagger: 0.2,
    })
    .from("#heroFooter", {
      opacity: 0,
      delay: -1.2,
      duration: 1.5,
      ease: Expo.easeInOut,
    });
})();

document.querySelectorAll(".projectInfo").forEach(function (element) {
  var rotate = 0;
  var rotateDifference = 0;

  element.addEventListener("mousemove", function (details) {
    var diff = details.clientY - element.getBoundingClientRect().top;
    rotateDifference = details.clientX - rotate;
    rotate = details.clientX;

    gsap.to(element.querySelector("img"), {
      opacity: 1,
      display: "block",
      ease: Power1,
      top: diff - "50px",
      left: details.clientX - 200,
      rotate: gsap.utils.clamp(-20, 20, rotateDifference),
    });
  });

  element.addEventListener("mouseleave", function (details) {
    gsap.to(element.querySelector("img"), {
      opacity: 0,
      display: "none",
    });
  });
});

document.getElementById("menu").addEventListener("click", () => {
  var time = gsap.timeline();
  time.to(document.querySelector("#menu"), {
    opacity: 0,
    display: "none",
  });

  time.to(document.querySelectorAll(".menuItem"), {
    y: 10,
    duration: 0.5,
    opacity: 1,
    stagger: 0.4,
  });

  time.to(document.querySelectorAll(".menuItem"), {
    y: 0,
    stagger: 0.2,
  });
});
