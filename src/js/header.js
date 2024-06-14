const switcslider = document.querySelector("#slider");
const mobMenuOpen = document.querySelector(".mob-menu-btn");
const mobMenuClose = document.querySelector(".mob-menu-btn-close");
const mobMenu = document.querySelector(".mob-menu");

import {toggleTheme} from "./theme-module.js";

function scrole(name) {
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

switcslider.addEventListener("click", event => {
    toggleTheme();
})
mobMenuOpen.addEventListener("click", event => {
    mobMenu.classList.add("is-open");
})
mobMenuClose.addEventListener("click", event => {
    mobMenu.classList.remove("is-open");
})

mobMenu.addEventListener('click', event => {
    const name = event.target.name;
    scrole(name)
})