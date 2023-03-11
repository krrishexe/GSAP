gsap.registerPlugin(ScrollTrigger);

gsap.to(".green",{
    x:400,
    fill:"blue",
    scrollTrigger:{
        trigger:".green",
        start:"top center",             
        // Top means 'top of the selected div.
        // center means '  center of the viewport height.
        // markers:true,
        toggleActions:"restart pause reverse none"
        // 1st value is for "when the bottom of the screen touches the given class"
        // 2nd value is for "when the top of screen touches the given class"
        // 3rd value is for "when the top of screen touches the given class"
        
    },
    rotation:360,
    duration:3,

})

gsap.to(".head",{
    x:-600,
    color:"white",
    scrollTrigger:{
        trigger:".head",
        toggleActions:"play pause reverse none",
        start:"top center",
        markers:true,
    },
    duration:2,
})