"use strict";var backgroundContainer=document.querySelector("#first-inner"),downloadInput=document.querySelector(".file-input"),standartPicBlock=document.querySelector("#file-input3"),standartPicContainer=document.querySelector("#standart-pic-container"),sublistPicBlock=document.querySelector("#file-input2"),sublistPicContainer=document.querySelector("#sublist-pic-container");function setBackgroundImage(e,n){var t=document.getElementById(e);t.files&&t.files[0]&&((e=new FileReader).onload=function(e){n.style.backgroundImage="url("+e.target.result+")"},e.readAsDataURL(t.files[0]))}downloadInput.addEventListener("change",function(){setBackgroundImage("input-file",backgroundContainer)}),standartPicBlock.addEventListener("change",function(){setBackgroundImage("file-input3",standartPicContainer)}),sublistPicBlock.addEventListener("change",function(){setBackgroundImage("file-input2",sublistPicContainer)});