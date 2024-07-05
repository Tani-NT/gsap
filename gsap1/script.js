function yoyoAnimation(){
    gsap.from("h1",{
        opacity: 0,
        y:100,
        duration: 1,
        stagger: .5
    })
    gsap.to("#box",{
        x:1000,
        duration:2,
        delay:1,
        repeat:-1,
        yoyo:true,
        backgroundColor: "blue",
        borderRadius: "20%"
    })
}

function boxAnimation(){
    gsap.to("#box1",{
        x:1000,
        rotate: 360,
        duration: 1.5,
        delay: 1
    })
    gsap.to("#box2",{
        x:1000,
        backgroundColor: "red",
        duration: 1.5,
        delay: 2.5
    })
    gsap.to("#box3",{
        x:1000,
        duration:1.5,
        borderRadius: "50%",
        delay:4
    })
}

function timelineAnimation(){
    var tl = gsap.timeline();

    tl.from("h1",{
        y:-20,
        opacity:0,
        duration:1,
        delay:0.5
    })
    tl.from("h3",{
        y:-20,
        opacity:0,
        duration: 1,
        stagger: 0.3
    })
    tl.from("h2",{
        y:20,
        opacity:0,
        duration:1,
        scale: 0.3
    })
}

function pageAnimation(){
    gsap.from("#page1 .box",{
        scale: 0,
        duration:2,
        delay:.5,
        rotate: 360
    })
    gsap.from("#page2 .box",{
        scale: 0,
        duration: 2,
        rotate:360,
        scrollTrigger: {
            trigger: "#page2 .box",
            scroller: "body",
            start: "top 60%",
            scrub:2
        }
    })
    gsap.from("#page3 h5",{
        opacity:0,
        duration:2,
        x:500,
        scrollTrigger:{
            trigger:"#page3 h5",
            scroller: "body",
            start: "top 50%",
            scrub:4
        }
    })
    gsap.from("#page3 h4",{
        opacity:0,
        duration:2,
        x:-500,
        scrollTrigger:{
            trigger:"#page3 h4",
            scroller: "body",
            start: "top 40%",
            scrub:5
        }
    })
    gsap.to("#page5 h6",{
        transform:"translateX(-100%)",
        scrollTrigger:{
            trigger:"#page5",
            start: "top 0%",
            end:"top -100%",
            scrub:2,
            scroller: "body",
            pin:true
        }
    })
}

yoyoAnimation();
boxAnimation();
timelineAnimation();
pageAnimation();