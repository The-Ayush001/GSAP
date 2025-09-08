var menu = document.querySelector('#menu')
var close = document.querySelector('#close')
// var full = document.querySelector('#full')

var tl = gsap.timeline()

  tl.to("#full", {
    right:0,
    duration:0.5
  })
  tl.from("h4", {
    x: 100,
    opacity: 0,
    duration:0.7,
    stagger:0.2 //apply for all h4 
  })
  tl.from("#full i",{
    opacity:0,
    duratio:0.5
  })

  tl.pause()  //pause the time (all timeline property are stop)

  menu.addEventListener('click', function (){
    tl.play()   //all timeline property are run
})

close.addEventListener('click', function (){
  tl.reverse()

  })
