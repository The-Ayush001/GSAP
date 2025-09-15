    const p = document.querySelector("#text");
    const words = p.innerText.split(" ");
    p.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

    // Animate each word one by one
    gsap.to("#text span", {
      y:50,
      opacity: 1,
      duration: 0.5,
      stagger: 0.5, // delay between words
      ease: "ease"
    });