const loader = document.querySelector(".loader-conatiner");
const loaderLogo = document.querySelector(".loader-logo");
const header = document.querySelector("header");
const menuToggle = document.querySelector(".menu-toggle");


window.addEventListener("load", ()=>{
    setTimeout(()=>{
    loaderLogo.classList.add("hide-loaderimg");
    loader.classList.add("hide-loader");
    header.classList.add("show-header");
    },1000)
})


menuToggle.addEventListener("click", ()=>{
    menuToggle.classList.toggle("active-menu");
})