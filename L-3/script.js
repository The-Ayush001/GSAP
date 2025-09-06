var initialPath = "M 20 200 Q  750 200 1480 200";  //path of svg line

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){  // when mouse moves over the element
  // console.log("mover");
  // console.log(dets);
  path = `M 20 200 Q ${dets.x} ${dets.y} 1480 200`
  gsap.to("svg path",{
    attr:{d:path},   //assign the new path to the d attribute of the path element
    // duration: ,
    
  })
});

string.addEventListener("mouseleave", function(){  // when mouse leaves the element 
  console.log("Leaved")
  initialPath = "M 20 200 Q  750 200 1480 200"
gsap.to("svg path",{
  attr:{d:initialPath},
  duration: 2.5,
  ease: "elastic.out(2,0.2)"  //go to gsap easing
})
});