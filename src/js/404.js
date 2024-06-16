const switcSliders = document.querySelectorAll('[name="slider"]');
const mobMenuOpen = document.querySelector(".mob-menu-btn");
const mobMenuClose = document.querySelector(".mob-menu-btn-close");
const mobMenu = document.querySelector(".mob-menu");

import { getTheme } from './theme-module';
getTheme();
import './footer';
import {toggleTheme} from "./theme-module.js";

for(let switcSlider of switcSliders) {
    switcSlider.addEventListener("click", event => {
        toggleTheme();
    })
}
console.log(mobMenuOpen)
mobMenuOpen.addEventListener("click", event => {
    mobMenu.classList.add("is-open");
    console.log('tic')
})
mobMenuClose.addEventListener("click", event => {
    mobMenu.classList.remove("is-open");
})