"use strict";document.querySelectorAll(".control-tabs__tab").forEach(function(e){return e.addEventListener("click",function(t){t.preventDefault();t=t.target.getAttribute("href").replace("#","");document.querySelectorAll(".control-tabs__tab").forEach(function(t){return t.classList.remove("control-tabs__tab--active")}),document.querySelectorAll(".section-hero-tabs__block-slide").forEach(function(t){return t.classList.remove("section-hero-tabs__block-slide--active")}),e.classList.add("control-tabs__tab--active"),document.getElementById(t).classList.add("section-hero-tabs__block-slide--active")})}),document.querySelector(".control-tabs__tab").click();