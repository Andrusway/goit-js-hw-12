import{a as u,S as d,i as c}from"./assets/vendor-BSTwZ_tR.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const m="https://pixabay.com/api/",g="52397534-5a81c9abe88dcfa16cadbb760";async function y(s,o){try{const t={key:g,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await u.get(m,{params:t})).data}catch(t){throw console.log("Error fetching images:",t),t}}const l=document.querySelector(".gallery"),n=document.querySelector(".loader"),h=new d(".gallery a",{captionData:"alt",captionDelay:250});function b(s){const o=s.map(({webformatURL:t,largeImageURL:a,tags:e,likes:r,views:i,comments:p,downloads:f})=>`
<li class="gallery-item">
<a class="gallery-link" href="${a}">
<img class="gallery-image" src="${t}" alt="${e}" loading="lazy">
</a>
<div class="info">
<p class="info-item"> <b>Likes</b> <span>${r}</span></p>
<p class="info-item"> <b>Views</b> <span>${i}</span></p>
<p class="info-item"> <b>Comments</b> <span>${p}</span></p>
<p class="info-item"> <b>Downloads</b> <span>${f}</span></p>
</div>
</li>
`).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function L(){l.innerHTML=""}function w(){n&&n.classList.remove("hidden")}function S(){n&&n.classList.add("hidden")}const P=document.querySelector(".form");P.addEventListener("submit",async s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){c.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}w(),L();try{const t=await y(o);if(t.hits.length===0){c.error({title:"No results",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(t.hits)}catch(t){c.error({title:"Error",message:"Something went wrong. Please try again later!",position:"topRight"}),console.log(t)}finally{S()}});
//# sourceMappingURL=index.js.map
