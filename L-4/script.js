var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");
var image = document.querySelector("#image");


main.addEventListener("mousemove",function(event){
  // console.log(event)
  gsap.to(cursor,{
    x:event.x,  // coordinates of mouse curser in x axis
    y:event.y,  // coordinates of mouse curser in y axis
    duration:2,
    ease: "back.out",
  })
})

image.addEventListener("mouseenter",()=>{
  cursor.innerHTML = "view more"
  gsap.to(cursor,{
    scale:2,
    backgroundColor:"#ffffff5a"
  })
})
image.addEventListener("mouseleave",()=>{
  cursor.innerHTML = ""
  gsap.to(cursor,{
    scale:1,
    backgroundColor:"#ffff"
  })
})