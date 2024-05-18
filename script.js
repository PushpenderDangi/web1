
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function loading() {
    gsap.from("#page1 h1", {
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.2
    })
    gsap.from("#page1 #video-container", {
        scale:0.9,
        opacity:0,
        delay:1.3,
        duration:0.3,
        
    })
}
loading()
