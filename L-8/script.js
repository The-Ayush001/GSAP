
function page1Animation(){
  var tl = gsap.timeline()
tl.from('nav h1, nav h4, nav button',{
  y:-20,
  duration:0.5,
  delay:0.5,
  opacity:0,
  stagger:0.2
})
tl.from('.center-part1 h1,.center-part1 p,.center-part1 button',{
  x:-100,
  duration:0.5,
  opacity:0,
  stagger:0.3
})
tl.from('.center-part2 img',{
  duration:0.5,
  opacity:0
},'-=0.5')  // set the delay when be use timeline function 
tl.from('.section1bottom p',{
  y:30,
  opacity:0,
  duration:0.5,
  stagger:0.15
})
}
page1Animation()

var tl2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.services h3',
    scroller:'body',
    // markers:true,
    start:'top 90%',
    end:'top 15%',
    scrub:2
  }
})

tl2.from('.services',{
  y:100,
  opacity:0
})
tl2.from('#left1',{
  x:-200,
  duration:1,
  opacity:0,
},'anim')
tl2.from('#right1',{
  x:200,
  duration:1,
  opacity:0,
},'anim')  // name is same then property start on same time
tl2.from('#left2',{
  x:-200,
  duration:1,
  opacity:0,
},'anim2')
tl2.from('#right2',{
  x:200,
  duration:1,
  opacity:0,
},'anim2')  // name is same then property start on same time


// gsap.from('.services h3',{
  //   x:-100,
//   opacity:0,
//   duration:1,
//   scrollTrigger:{
//     trigger:'.services h3',
//     scroller:'body',
//     markers:true,
//     start:'top 80%'
//   }
// })


// gsap.from(ScrollTrigger);

// var tl2 = gsap.timeline({
//   scrollTrigger:{
//     trigger:'.section2',
//     scroller:'body',
//     markers:true,
//     start:'top 50%',
//     end:'top 0',
//     scrub:2,
//   }
// })
// tl2.from('.services',{
//   x:-300,
//   opacity:0
// })

// gsap.from('.services h3',{
//   x:-100,
//   opacity:0,
//   duration:0.5,
//   scrollTrigger:{
//     trigger:'.services h3',
//     scroller:'body',
//     markers:true,
//     start:'top 50%'
//   }
// })