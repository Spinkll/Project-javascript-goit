(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=window.matchMedia("(prefers-color-scheme: dark)");function c(o){localStorage.setItem("theme",o),document.documentElement.className=o;const r=document.getElementById("favicon");o==="theme-dark"?r.href="./darkFavIcon.svg":r.href="./lightFavIcon.svg"}function l(){localStorage.getItem("theme")==="theme-dark"?c("theme-light"):c("theme-dark")}function m(){d.matches===!0?(c("theme-dark"),document.getElementById("slider").checked=!0,document.getElementById("mob--menu-slider").checked=!0):(c("theme-light"),document.getElementById("slider").checked=!1,document.getElementById("mob--menu-slider").checked=!1)}export{m as g,l as t};
//# sourceMappingURL=theme-module-b2765a56.js.map
