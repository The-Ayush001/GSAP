window.addEventListener("wheel",function(dets){
  // console.log(dets.deltaY)   //deltaY tels the direction of wheel in positive and negative value
  if(dets.deltaY > 0){
    console.log("scroll in upword direction")
    // GSAP
gsap.to(".marque",{
  transform:'translateX(-250%)',
  // delay:1,
  duration:5,
  repeat:-1,
  ease:'none'
})
gsap.to(".marque img",{
  rotate:180
})
  }
  else{
    console.log("scroll in downword direction")
    // GSAP
gsap.to(".marque",{
  transform:'translateX(0%)',
  // delay:1,
  duration:4,
  repeat:-1,
  ease:'none'
})
gsap.to(".marque img",{
  rotate:0
})
  }

})

