gsap.registerPlugin(ScrollTrigger);

gsap.to(".green",{
    x:400,
    fill:"blue",
    scrollTrigger:{
        trigger:".green",
        toggleActions:"restart pause "
        // 1st value is for "when the bottom of the screen touches the given class"
        // 2nd value is for "when the top of screen touches the given class"
        // 3rd value is for "when the top of screen touches the given class"
        
    },
    rotation:360,
    duration:3,

})