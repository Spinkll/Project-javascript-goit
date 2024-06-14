const header = document.querySelector(".header");
const mobMenuOpen = document.querySelector(".mob-menu-btn");
const mobMenu = document.querySelector(".mob-menu");

import {toggleTheme} from "./theme-module.js";

function scrole(name) {
    if(name === "Close") {
        mobMenu.classList.remove("is-open");
    }
    if(name === "About me") {
        mobMenu.classList.remove("is-open");
        window.scrollBy({
            top: /*елементи куди скролемо*/getBoundingClientRect().height,
            behavior: "smooth",
        });
    }
    if(name === "Projects") {
        mobMenu.classList.remove("is-open");
        window.scrollBy({
            top: /*елементи куди скролемо*/getBoundingClientRect().height,
            behavior: "smooth",
        });
    }
    if(name === "Contacts") {
        mobMenu.classList.remove("is-open");
        window.scrollBy({
            top: /*елементи куди скролемо*/getBoundingClientRect().height,
            behavior: "smooth",
        });
    }
}

header.addEventListener("click", event => {
    const name = event.target.name;
    if(name === "About me" || name === "Projects" || name === "Projects") {
        scrole()
    }
    if(name === "slider") {
        toggleTheme();
    }
    if(name === "menu-open") {
        mobMenu.classList.add("is-open");
    }
})
/*
mobMenuOpen.addEventListener("click", event => {
    mobMenu.classList.add("is-open");
})
*/
mobMenu.addEventListener('click', event => {
    const name = event.target.name;
    scrole(name)
})