var h1 = document.querySelector('h1')
var h1text = h1.textContent
console.log(h1text)

function breakThetext() {
var splitteText = h1text.split("")  //split text 
console.log(splitteText)

var clutter = ""
splitteText.forEach((element)=>{
  console.log("hello")  //print 5 time hello
  console.log(element)  //print splitte text
  clutter += `<span>${element}</span>`;
})

console.log(clutter)
h1.innerHTML = clutter
}

breakThetext()

gsap.from("h1 span",{
  y:100,
  opacity:0,
  delay:0.5,
  duration:0.7,
  stagger: 0.2,
})
