'use strict'
const menuIcon = document.querySelector(".menu__icon");
if (menuIcon) {
   const headMenu = document.querySelector(".header__nav");
   const headCall = document.querySelector(".header__call");
   menuIcon.addEventListener("click", function (e){
      headCall.classList.toggle("header__call-black");
      menuIcon.classList.toggle("_active");
      headMenu.classList.toggle("_actived");
      document.body.classList.toggle("_lock");
      
});
}