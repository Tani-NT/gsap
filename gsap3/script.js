function menuAnimation(){
    var tl = gsap.timeline();

    tl.to("#full",{
        right:0,
        duration:.1,
        ease: "ease-in"
    })
    tl.from("#full h4",{
        x:150,
        stagger: .3,
        opacity:0,
        duration:.2,
        ease: "ease-in"
    })
    tl.from("#full i",{
        opacity:0
    })

    tl.pause();

    var menu = document.querySelector(".menu")
    menu.addEventListener("click",function(){
        tl.play()
    })

    var close = document.querySelector(".close")
    close.addEventListener("click",function(){
        tl.reverse()
    })
}
menuAnimation();

function breakingLetter(){
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    var splittedText = h1Text.split("")
    var clutter = ""

    var halfValue = Math.floor(splittedText.length/2)
    splittedText.forEach(function(elem, index){
        if(index > halfValue){
            clutter += `<span class="a">${elem}</span>`
        }
        else{
            clutter += `<span class="b">${elem}</span>`
        }
    })
    h1.innerHTML = clutter
}

breakingLetter();

gsap.from("#page2 h1 .a",{
    y:80,
    opacity: 0, 
    stagger: 0.15,
    duration: 0.6,
    delay:0.5
})
gsap.from("h1 .b",{
    y:80,
    opacity: 0, 
    stagger: -0.15,
    duration: 0.6,
    delay:0.5
})