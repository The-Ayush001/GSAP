gsap.from("#page1 #box",{
  delay:1,
  duration:3,
  opacity: 0,
  scale: 0,
  rotation:720,

})

gsap.from("#page2 #box",{
  duration: 1,
  opacity: 0,
  scale: 0.5,  // scale from 0.5 to 1
  rotation: 360,
  //set the effect of the scroll
  scrollTrigger:{
    trigger:"#page2 #box",
    scroller:"body",
   markers:true,    // Enable markers for debugging
   start:"top 60%",   //animation starts when trigger hits 60% of viewport
   end:"top 30%",   //animation complete when trigger hits 30% of viewport
   scrub: 2,  // animation depends on scroll position
  }
})
// set animation for pag34 h1 tag (experience)
gsap.to("#page3 h1",{
  transform:"translate(-55%)",
  scrollTrigger:{
    trigger:"#page3",  //trigger element page4
    scroller:"body",
    markers:true,
    start:"top 0%",
    end:"top -150%",  //set the end point of the animation
    scrub: 2,
    pin:true
  }
})

gsap.from("#page4 #box",{
  duration: 1,
  opacity: 0,
  scale: 0,   // scale from 0 to 1
  rotation: 360,
  //set the effect of the scroll
  scrollTrigger:{
    trigger:"#page4 #box",
    scroller:"body",
   markers:true,    // Enable markers for debugging
   start:"top 60%",   //animation starts when trigger hits 60% of viewport
   end:"top 10%",   //animation complete when trigger hits 30% of viewport
   scrub: 2,  // animation depends on scroll position
   pin:true,  // pin the element while the animation is running
  }
})
