gsap.to(".box1", {
  x: 400,  //box move along x-axis
  rotation: 360,   //box rotate 360 degrees
  duration: 2,   //box move in 2 seconds
  delay: 1,   //wait for 1 second before starting the animation
  scale: 0.5,   //box size reduce to half
  ease: "power1.inOut",   //ease function for smooth animation
  backgroundColor: "yellow",
  borderRadius: "50%",

  repeat: 1,   //repeat the animation once
  yoyo: true   //reverse the animation on repeat
})

gsap.from(".box2",{
  y:400,    //box move along y-axis
  rotation:360,   //box rotate 360 degrees
  duration:2,   //box move in 2 seconds
  delay:1,   //wait for 1 second before starting the animation
  scale:0.5,   //box size reduce to half
  ease:"power1.inOut",   //ease function for smooth animation
  backgroundColor:"aqua",
  borderRadius:"50%",

  repeat: 1,   //repeat the animation once
})
gsap.to(".box3",{
  z:400,    //box move along z-axis
  rotation:360,
  duration:2,
  delay:1,
  scale:0.5,   //box reduce to half
  ease:"power1.inOut",
  backgroundColor:"aqua",
  borderRadius:"50%",

  repeat: 1,   //repeat the animation once
  yoyo: true   //reverse the animation on repeat
})

gsap.from("h1",{
  color:"red",
  duration:1,    //animation duration 1 second
  delay:1,   //wait for 1 second before starting the animation
  opacity:0,   //start with opacity 0 (box not visible in start)
  y:20,   //move 20px along y-axis
  stagger:0.5,   //element move one by one with 0.5 second delay
})


// timeline
var tl = gsap.timeline();
tl.to(".box4",{
  x: 400,
  rotation: 360,
  duration: 1.5,
  delay: 1,
  ease: "power1.inOut",
})
tl.to(".box5",{
  x: 400,
  rotation: 360,
  duration: 1.5,
  delay: 1,
  ease: "power1.inOut",
})
tl.to(".box6",{
  x: 400,
  rotation: 360,
  duration: 1.5,
  delay: 1,
  ease: "power1.inOut",
})

// set the timeline in nav wrapper
var timeline = gsap.timeline();

timeline.from("h2",{
  y:-20,
  duration: 1,
  delay: 1,
  opacity: 0,
  stagger: 0.5
})
timeline.from("h4", {
  y: -20,
  duration:2,
  // delay: 1,
  opacity: 0,
  stagger: 0.5
});

timeline.from("h3",{
  y:20,
  opacity:0,
  duration: 0.5,
  scale:0.2
})