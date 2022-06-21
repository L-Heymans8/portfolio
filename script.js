gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".moving-txt",

    {
    // ScrollTrigger: ".moving-txt",
    x:100,
    y:100,
    opacity:0,
    color:"white",
    // start:"20px 80%",
    },

    {
    x:200,
    y:100,
    duration:2,
    opacity:1
    })