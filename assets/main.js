const menuOpen = document.querySelector(".menu-open");
const menuClose = document.querySelector(".menu-close");
const navMenu = document.querySelector(".nav-menu");


menuOpen.addEventListener("click", ()=>{
    menuToggle(menuOpen);
})
menuClose.addEventListener("click", ()=>{
    menuToggle(menuClose);
})
function menuToggle(btn){
    if(btn.classList.contains('menu-open')){
        btn.style.display="none";
        menuClose.classList.remove("hidden");
        navMenu.classList.add("active-menu");
    }else{
        btn.classList.add("hidden");
        menuOpen.style.display="block";
        navMenu.classList.remove("active-menu");
    }
}

