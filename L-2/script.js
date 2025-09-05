gsap.from("#page1 #box",{
  duration: 2,
  delay: 1,
  opacity: 0,
  scale: 0,
  rotation: 360,
})
gsap.from("#page2 #box",{
  duration: 3,
  opacity: 0,
  scale: 0,
  rotation: 360,
  //set the effect of the scroll
  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
   markers:true,
   start:"top 60%"
  }
})
gsap.from("#page3 #box",{
  duration: 2,
  opacity: 0,
  scale: 0,
  rotation: 360,
  ease: "elastic",  //set easing function for animation

  // set the effect of the scroll
  scrollTrigger:{
    trigger:"#page3 #box",
    scroller:"body",
    markers:true,
    start:"top 60%"
  }
})

// set the animation for the heading

gsap.from("#page2 h1",{
  opacity:0,
  x:500,
  duration:2,
  scrollTrigger:{
    trigger:"#page2 h1",
    scroller:"body",
    markers:true,
    start:"top 50%"
  }
})
gsap.from("#page2 h2",{
  opacity:0,
  x:-500,
  duration:2,
  scrollTrigger:{
    trigger:"#page2 h2",
    scroller:"body",
    markers:true,
    start:"top 50%"
  }
})