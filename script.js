let nav = document.querySelector(".navbar");
let content = document.querySelector(".content");
let page = document.querySelector(".page2");
let project1 = document.querySelector(".project1 ");
let project2 = document.querySelector(".project2 ");
let project3  = document.querySelector(".project3 ");
let company = document.querySelector(".company")
let tl = gsap.timeline();

tl.from(nav,{
    y:-100,
    duration:1.2
})

tl.from(content,{
    opacity:0,
    duration:1,
    scale:0
})

gsap.from(page,{
    opacity: 0,
    y: 100,
    duration: 1,
    scrollTrigger:{
        trigger:page,
        start: "top 60%",
        toggleActions: "play none none none"
    }
})

project1.addEventListener("mouseover",() => {
    gsap.to(project1,{
        y:-35,
        duration:0.5
    })
})

project1.addEventListener("mouseleave",() => {
    gsap.to(project1,{
        y:0,
        duration:0.5
    })
})

project2.addEventListener("mouseover",() => {
    gsap.to(project2,{
        y:-35,
        duration:0.5
    })
})

project2.addEventListener("mouseleave",() => {
    gsap.to(project2,{
        y:0,
        duration:0.5
    })
})

project3.addEventListener("mouseover",() => {
    gsap.to(project3,{
        y:-35,
        duration:0.5
    })
})

project3.addEventListener("mouseleave",() => {
    gsap.to(project3,{
        y:0,
        duration:0.5
    })
})


gsap.fromTo(company,
    { x : 1300 },

    {   x: -1300,
        duration: 12,
        repeat: -1, }  
)
