"use strict";

window.addEventListener("DOMContentLoaded", () => {

    // Variables 
    const loader = document.querySelector(".loader"),
          header = document.querySelector("header"),
          navbar = document.querySelector(".nav-links"),
          openNavBtn = document.querySelector("#openNavBtn"),
          closeNavBtn = document.querySelector("#closeNavBtn");

    // Loader
   setTimeout(() => {
    loader.style.display = "none";
   },5000)

//    Header

   window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0)
   })
//    OpenNavbar or CloseNavbar

   openNavBtn.addEventListener("click",() => {
    navbar.style.display = "flex";
   })

   closeNavBtn.addEventListener("click",() => {
    navbar.style.display = "none";
   })


})