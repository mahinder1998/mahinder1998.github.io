let menuBtn = document.querySelector(".menu-btn");
let menuItem = document.querySelector(".menu-item");
let menuClose = document.querySelector(".menu-close");

// open menu function
function openMenu(){
    menuItem.classList.add("active-menu");
    menuBtn.classList.add("hidden");
    menuClose.classList.remove("hidden");
}
// addeventlistener
menuBtn.addEventListener("click", openMenu);

// clsoe menu function

function closeMenu(){
    menuItem.classList.remove("active-menu");
    menuBtn.classList.remove("hidden");
    menuClose.classList.add("hidden");
}

//addeventlistener
menuClose.addEventListener("click", closeMenu);