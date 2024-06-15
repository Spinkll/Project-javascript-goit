import{A as b,S as k,N as L,K as E,i as m,a as y}from"./assets/vendor-6128a7b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&l(d)}).observe(document,{childList:!0,subtree:!0});function r(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(o){if(o.ep)return;o.ep=!0;const s=r(o);fetch(o.href,s)}})();const S=document.querySelector(".faq__list");new b(S,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0],onOpen:e=>{}});const F=window.matchMedia("(prefers-color-scheme: dark)"),p=document.getElementById("favicon-light"),f=document.getElementById("favicon-dark");function a(e){localStorage.setItem("theme",e),document.documentElement.className=e,e==="theme-dark"?(p.href="/lightFavIcon.svg",f.href="/darkFavIcon.svg"):(p.href="/darkFavIcon.svg",f.href="/lightFavIcon.svg")}function q(){localStorage.getItem("theme")==="theme-dark"?a("theme-light"):a("theme-dark")}function I(){F.matches===!0?(a("theme-dark"),document.getElementById("slider").checked=!0):(a("theme-light"),document.getElementById("slider").checked=!1)}const M=document.querySelector("#slider"),C=document.querySelector(".mob-menu-btn"),A=document.querySelector(".mob-menu-btn-close"),c=document.querySelector(".mob-menu"),x=document.querySelector(".header-nav-menu"),B=document.querySelectorAll('a[href*="#"]');function w(){for(let e of B)e.addEventListener("click",function(t){t.preventDefault();const r=e.getAttribute("href").substr(1);document.getElementById(r).scrollIntoView({behavior:"smooth",block:"start"})})}M.addEventListener("click",e=>{q()});C.addEventListener("click",e=>{c.classList.add("is-open")});A.addEventListener("click",e=>{c.classList.remove("is-open")});x.addEventListener("click",e=>{const t=e.target.name;if(t==="About me"||t==="Projects"||t==="Contacts")w();else return});c.addEventListener("click",e=>{const t=e.target.name;if(t==="About me"||t==="Projects"||t==="Contacts")c.classList.remove("is-open"),w();else return});new k(".swiper",{modules:[L,E],speed:400,spaceBetween:20,centeredSlides:!1,centeredSlidesBounds:!0,autoHeight:!0,breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:"auto"}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});const O="https://portfolio-js.b.goit.study/api/reviews",h=document.querySelector(".swiper-wrapper");async function _(){return(await y.get(O,{})).data}function j(e){return e.map(t=>`
      <li class="swiper-slide">
      <p class="reviews-text">${t.review}</p>
      <div class="review-author-data">
          <a class="reviews-img-link" href="${t.avatar_url}">
          <img class="reviews-img" alt="author's avatar" src="${t.avatar_url}"/>
          </a>
          <p class="reviews-name">${t.author}</p>
      </div>
      </li>`).join("")}const g=document.querySelector(".error-container"),P=document.querySelector(".swiper");_().then(e=>{g.style.display="none",e.length>0?h.insertAdjacentHTML("beforeend",j(e)):(h.insertAdjacentHTML("beforeend","Not found"),m.show({message:"Sorry, no reviews found",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"}))}).catch(e=>{P.style.display="none",g.insertAdjacentHTML("beforeend","<p>Not found</p>"),m.show({message:"Sorry, no reviews found",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"}),console.log(e)});const i=document.querySelector(".work-together-form"),T=i.elements.email,N=i.elements.message,n=document.querySelector(".modal"),R=n.querySelector(".button-close"),v=n.querySelector(".modal-backdrop"),W=y.create({baseURL:"https://portfolio-js.b.goit.study/api-docs"});n.classList.add("visually-hidden");async function H(e,t){try{return(await W.post("",{email:e,message:t})).data}catch(r){throw r}}i.addEventListener("submit",async e=>{e.preventDefault();const t=T.value.trim(),r=N.value.trim();if(t===""||r===""){alert("Будь ласка, заповніть всі поля.");return}try{await H(t,r),V(),i.reset()}catch{alert("Помилка при відправленні повідомлення. Будь ласка, спробуйте ще раз.")}});function u(){n.classList.add("visually-hidden"),n.classList.remove("show")}function V(){n.classList.remove("visually-hidden"),n.classList.add("show")}R.addEventListener("click",u);v.addEventListener("click",e=>{e.target===v&&u()});document.addEventListener("keydown",e=>{e.key==="Escape"&&u()});I();
//# sourceMappingURL=commonHelpers.js.map
