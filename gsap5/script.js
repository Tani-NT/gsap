function pageAnimation(){
    var tl = gsap.timeline()

    tl.from("nav h1, nav h4, nav button",{
        opacity:0,
        y:-40,
        delay: .5,
        duration:.5,
        stagger: 0.15
    })
    tl.from(".center-part1 h1",{
        x:-300,
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part1 p",{
        x:-100,
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.4
    },"-=0.3")
    tl.from(".center-part2 img",{
        opacity:0,
        duration:.4,
        x:200
    },"-=0.7")
    tl.from(".section1-bottom img",{
        opacity:0,
        stagger: 0.15,
        y:30,
        duration: 0.6
    })
}
pageAnimation();

function page2Animation(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger: ".section2",
            scroller: "body",
            top: "top 50%",
            end: "top 0",
            scrub:2
        }
    })

    tl2.from(".services",{
        y:300,
        opacity:0,
        duration:.8
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"a")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity: 0,
        duration:1
    },"a")
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"b")
    tl2.from(".elem.line2.right",{
        x:300,
        opcity: 0,
        duration:1
    },"b")
    tl2.from(".elem.line3.left",{
        x:-300,
        opacity:0,
        duration:1
    },"c")
    tl2.from(".elem.line3.right",{
        x:300,
        opacity: 0,
        duration:1
    },"c")
    tl2.from(".elem.line4.left",{
        x:-300,
        opacity:0,
        duration:1
    },"d")
    tl2.from(".elem.line4.right",{
        x:300,
        opcity: 0,
        duration:1
    },"d")
}
page2Animation();