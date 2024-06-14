const swich = document.querySelector("#slider");

import {toggleTheme} from "./theme-module.js";

swich.addEventListener("click", event => {
        toggleTheme();
})