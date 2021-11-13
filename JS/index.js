let insta = document.getElementById('link-insta')
let face = document.getElementById('link-face')
let tube = document.getElementById('link-tube')
let spoti = document.getElementById('link-spoti')
let hover = document.getElementById('footer-links')

hover.addEventListener('mouseleave', ()=>{
    insta.style.backgroundColor = "white"
    face.style.backgroundColor = "white"
    tube.style.backgroundColor = "white"
    spoti.style.backgroundColor = "white"
})
insta.addEventListener('mouseenter', ()=>{
    if(insta){
        insta.style.backgroundColor = "white"
        insta.style.transition = "0.5s"
        face.style.backgroundColor = "gray"
        tube.style.backgroundColor = "gray"
        spoti.style.backgroundColor = "gray"
    }
})
face.addEventListener('mouseenter', ()=>{  
    if(face){
        insta.style.backgroundColor = "gray"
        face.style.backgroundColor = "white"
        face.style.transition = "0.5s"
        tube.style.backgroundColor = "gray"
        spoti.style.backgroundColor = "gray"
    }
})
tube.addEventListener('mouseenter', ()=>{  
    if(tube){
        insta.style.backgroundColor = "gray"
        face.style.backgroundColor = "gray"
        tube.style.backgroundColor = "white"
        tube.style.transition = "0.5s"
        spoti.style.backgroundColor = "gray"
    }
})
spoti.addEventListener('mouseenter', ()=>{  
    if(spoti){
        insta.style.backgroundColor = "gray"
        face.style.backgroundColor = "gray"
        tube.style.backgroundColor = "gray"
        spoti.style.backgroundColor = "white"
        spoti.style.transition = "0.5s"
    }
})

const btn = document.getElementById('checar')
function toogleMenu(event) {
    if(event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}
btn.addEventListener('click', toogleMenu);
btn.addEventListener('touchstart', toogleMenu);