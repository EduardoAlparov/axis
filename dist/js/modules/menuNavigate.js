"use strict";!function(){var e=document.querySelectorAll(".menu__link"),t=document.querySelectorAll(".section-outer"),o=document.querySelector(".arrow-link"),i=document.querySelector(".arrow-fixed-block");e.forEach(function(e){e.addEventListener("click",function(e){e.preventDefault();e=e.target.getAttribute("href").replace("#","");document.getElementById(e).scrollIntoView({block:"start",behavior:"smooth"})})}),window.addEventListener("scroll",function(e){pageYOffset>t[0].offsetHeight/2&&768<document.body.clientWidth?(i.style.visibility="visible",o.addEventListener("click",function(e){e.preventDefault(),document.body.scrollIntoView({block:"start",behavior:"smooth"})})):i.style.visibility="hidden"})}();