import{a as f,S as d,i as l}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m="https://pixabay.com/api/",g="52397534-5a81c9abe88dcfa16cadbb760";async function y(s){const r={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return f.get(m,{params:r}).then(o=>o.data)}const c=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new d(".gallery a",{captionData:"alt",captionDelay:250});function b(s){const r=s.map(({webformatURL:o,largeImageURL:a,tags:e,likes:t,views:i,comments:p,downloads:u})=>`
<li class="gallery-item">
<a class="gallery-link" href="${a}">
<img class="gallery-image" src="${o}" alt="${e}" loading="lazy">
</a>
<div class="info">
<p class="info-item"> <b>Likes</b> <span>${t}</span></p>
<p class="info-item"> <b>Views</b> <span>${i}</span></p>
<p class="info-item"> <b>Comments</b> <span>${p}</span></p>
<p class="info-item"> <b>Downloads</b> <span>${u}</span></p>
</div>
</li>
`).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function S(){n&&n.classList.remove("hidden")}function w(){n&&n.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",s=>{s.preventDefault();const r=s.target.elements["search-text"].value.trim();if(!r){l.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}S(),L(),y(r).then(o=>{if(o.hits.length===0){l.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(o.hits)}).catch(o=>{l.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.log(o)}).finally(()=>{w()})});
//# sourceMappingURL=index.js.map
