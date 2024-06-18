import{t as q,g as C}from"./assets/theme-module-0a775abb.js";import{A as F,S as x,N as A,K as I,i as v,a as b,b as M}from"./assets/vendor-27446d2f.js";const B=document.querySelector(".faq__list");new F(B,{elementClass:"faq__item",triggerClass:"faq__btn",panelClass:"ac-panel",activeClass:"is-active",openOnInit:[0],onOpen:e=>{}});const j=document.querySelectorAll('[name="slider"]'),_=document.querySelector(".mob-menu-btn"),T=document.querySelector(".mob-menu-btn-close"),l=document.querySelector(".mob-menu");document.querySelector(".header-nav-menu");const P=document.querySelectorAll('a[href*="#"]');for(let e of P)e.addEventListener("click",function(t){t.preventDefault();const s=e.getAttribute("href").substr(1);document.getElementById(s).scrollIntoView({behavior:"smooth",block:"start"})});for(let e of j)e.addEventListener("click",t=>{q()});_.addEventListener("click",e=>{l.classList.add("is-open")});T.addEventListener("click",e=>{l.classList.remove("is-open")});l.addEventListener("click",e=>{const t=e.target.name;if(t==="About-me"||t==="Projects"||t==="Contacts")l.classList.remove("is-open");else return});const N=document.querySelector(".hero-button");N.addEventListener("click",e=>{document.getElementById("contacts").scrollIntoView({behavior:"smooth",block:"start"})});const d=document.getElementById("two-button"),R=document.querySelectorAll(".visit-button"),u=document.querySelectorAll("#list-sites .hidden");let r=0;const y=["https://spinkll.github.io/Project-javascript-goit/","https://spinkll.github.io/Project-javascript-goit/good-team","https://klimkovskyi.github.io/CodeCrafters/"];let c=0;function L(){r>=u.length?d.style.display="none":d.style.display="block"}L();d.addEventListener("click",()=>{let e=3;for(let t=r;t<r+e&&t<u.length;t++)u[t].classList.remove("hidden");r+=e,L()});R.forEach(e=>{e.addEventListener("click",function(){const t=y[c];t&&(window.open(t,"_blank"),c=(c+1)%y.length)})});const k=document.querySelector("#swiper-container"),h=new x(".swiper",{modules:[A,I],speed:400,spaceBetween:20,centeredSlides:!1,centeredSlidesBounds:!0,autoHeight:!0,breakpoints:{1280:{slidesPerView:2},0:{slidesPerView:"auto"}},keyboard:{enabled:!0,onlyInViewport:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});document.addEventListener("keydown",e=>{e.key==="Tab"&&k.contains(document.activeElement)&&(e.shiftKey?h.slidePrev():h.slideNext())});const E=document.querySelector(".loader");function V(){E.style.display="none"}function W(){E.style.visibility="visible"}const $="https://portfolio-js.b.goit.study/api/reviews",f=document.querySelector(".swiper-wrapper");async function H(){return(await b.get($,{})).data}function O(e){return e.map(t=>`
      <li class="swiper-slide" id="review-slide">

      <p class="reviews-text">${t.review}</p>
      <div class="review-author-data">
          <a class="reviews-img-link" href="${t.avatar_url}">
          <img class="reviews-img" alt="author's avatar" src="${t.avatar_url}"/>
          </a>
          <p class="reviews-name">${t.author}</p>
      </div>
      </li>`).join("")}const g=document.querySelector(".error-container");W();H().then(e=>{g.style.display="none",e.length>0?f.insertAdjacentHTML("beforeend",O(e)):(f.insertAdjacentHTML("beforeend","Not found"),v.show({message:"Sorry, no reviews found",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"}))}).catch(e=>{k.style.display="none",g.insertAdjacentHTML("beforeend","<p>Not found</p>"),v.show({message:"Sorry, no reviews found",maxWidth:"432px",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFFFFF"}),console.log(e)}).finally(()=>{V()});const a=document.querySelector(".work-together-form"),i=a.elements.email,z=a.elements.message,n=document.querySelector(".modal"),D=n.querySelector(".button-close"),w=n.querySelector(".modal-backdrop"),m=document.getElementById("email-error"),o=document.querySelector(".icon-email"),K=b.create({baseURL:"https://portfolio-js.b.goit.study/api-docs"});n.classList.add("visually-hidden");o.classList.add("visually-hidden");async function U(e,t){try{return(await K.post("",{email:e,message:t})).data}catch(s){throw s}}function S(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}a.addEventListener("input",e=>{const t=i.value.trim();o.classList.add("visually-hidden"),S(t)?o.classList.remove("visually-hidden"):(m.textContent="Invalid email, try again",i.classList.add("invalid-input"))});a.addEventListener("submit",async e=>{e.preventDefault();const t=i.value.trim(),s=z.value.trim();if(m.textContent="",i.classList.remove("invalid-input"),t===""||s===""){alert("Будь ласка, заповніть всі поля.");return}if(S(t))o.classList.remove("visually-hidden");else{m.textContent="Invalid email, try again",i.classList.add("invalid-input");return}try{await U(t,s),Z(),a.reset()}catch{alert("Помилка при відправленні повідомлення. Будь ласка, спробуйте ще раз.")}});function p(){o.classList.add("visually-hidden"),n.classList.add("visually-hidden"),n.classList.remove("show")}function Z(){o.classList.add("visually-hidden"),n.classList.remove("visually-hidden"),n.classList.add("show")}D.addEventListener("click",p);w.addEventListener("click",e=>{e.target===w&&p()});document.addEventListener("keydown",e=>{e.key==="Escape"&&p()});C();M.init();
//# sourceMappingURL=commonHelpers2.js.map
