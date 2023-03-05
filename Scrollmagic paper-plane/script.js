const flightPath ={
    curviness: 2,
    autoRotate: true,
    values:[
        {x:100,y:-20},
        {x:300,y:30},
        {x:500,y:100},
        {x:750,y:-100},
        {x:350,y:-50},
        {x:600,y:150},
        {x:950,y:-100},
        {x:650,y:-100},
        {x:1000,y:100},
        {x:window.innerWidth,y:-300}



    ]
}

const tween = new TimelineLite();

tween.add(
    TweenLite.to('.paper-plane',2,{
        bezier : flightPath,
        ease: Power1.easeInOut 
    })
)

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration:3000,

})
.setTween(tween)
.addIndicators()
.addTo(controller);
