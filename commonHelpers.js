import{A as d}from"./assets/vendor-8f98089f.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const u=document.querySelector(".faq__list");new d(u,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0],onOpen:t=>{}});const m=window.matchMedia("(prefers-color-scheme: dark)");function r(t){localStorage.setItem("theme",t),document.documentElement.className=t}function a(){localStorage.getItem("theme")==="theme-dark"?r("theme-light"):r("theme-dark")}function f(){m.matches===!0?(r("theme-dark"),document.getElementById("slider").checked=!0):(r("theme-light"),document.getElementById("slider").checked=!1)}const h=document.querySelector("#slider"),p=document.querySelector(".mob-menu-btn"),g=document.querySelector(".mob-menu-btn-close"),c=document.querySelector(".mob-menu");document.querySelector("#about-me");const y=document.querySelectorAll('a[href*="#"]');function b(){for(let t of y)t.addEventListener("click",function(n){n.preventDefault();const s=t.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})})}h.addEventListener("click",t=>{a()});p.addEventListener("click",t=>{c.classList.add("is-open")});g.addEventListener("click",t=>{c.classList.remove("is-open")});c.addEventListener("click",t=>{c.classList.remove("is-open"),b()});f();
//# sourceMappingURL=commonHelpers.js.map
