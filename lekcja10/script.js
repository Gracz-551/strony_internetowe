"use strict";

let avatar = document.getElementById("avatar");
let name = document.getElementById("name");
let desc = document.getElementById("description");
let toggleBtn = document.getElementById("toggle-btn");

toggleBtn.addEventListener("click", function(){
    
    // document.body.classList.remove("hero");
    // document.body.classList.add("villain");
    
    let isHero = document.body.classList.contains("hero");
    
    if(isHero) {
        document.body.classList.replace("hero", "villain")
        name.textContent = "Bowser";
        desc.textContent = "Ognisty przeciwnik";
        avatar.src = "https://api.dicebear.com/10.x/pixelbot/svg?seed=Steve";
        avatar.style.borderColor = "#ef4444"; 
        toggleBtn.textContent = "Zmień na Bohatera"
    }
    else {
        document.body.classList.replace("villain", "hero");
        name.textContent = "Mario";
        desc.textContent = "Skaczący bohater";
        avatar.src = "https://api.dicebear.com/10.x/pixelbot/svg?seed=Creeper";
        avatar.style.borderColor = "#3b82f6";
        toggleBtn.textContent = "Zmień na złoczyńcę"
    }
});