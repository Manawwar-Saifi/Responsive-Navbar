
let icon = document.getElementById('hamburger')
let menu =  document.querySelector('.nav-items')
let nav =  document.querySelector('.nav')
let main =  document.querySelector('.main')
let cross =  document.querySelector('#first-li img')



icon.addEventListener("click",(e)=>{
    menu.classList.add("phone-main")
    
})

cross.addEventListener("click",()=>{
    menu.classList.remove("phone-main")
})

// WE CAN CREAT EFFECT USING JQUERY BUT THIS IS FOR THE RESPONSIVE NAV BAR 