function content4(){
    let proj = document.querySelector(".project-container")
let fixed_img = document.querySelector(".fixed-image")
proj.addEventListener("mouseenter",function(){
    fixed_img.style.display = "block"
})
proj.addEventListener("mouseleave",function(){
    fixed_img.style.display = "none"
})

let proj_img = document.querySelectorAll(".project-box")
proj_img.forEach(function(p){
    p.addEventListener("mouseenter",function(){
        let img = p.getAttribute("src")
        fixed_img.style.backgroundImage = `url(${img})`
    })
})
}

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 0,
      });
}
content4()
swiper()

let loader = document.querySelector(".loader")
setTimeout(function(){
    loader.style.top = '-100%';
},4000)