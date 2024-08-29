import{a as g,S as L,i}from"./assets/vendor-DWaGEket.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&a(m)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const f=e=>`
    <li class="gallery-card">
      <a href="${e.largeImageURL}">
        <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p class="info-item">
          <b>Likes:</b> ${e.likes}
        </p>
        <p class="info-item">
          <b>Views:</b> ${e.views}
        </p>
        <p class="info-item">
          <b>Comments:</b> ${e.comments}
        </p>
        <p class="info-item">
          <b>Downloads:</b> ${e.downloads}
        </p>
      </div>
    </li>
  `,b="45569082-93b38ce8ee83e3f403ee7e577",v="https://pixabay.com/api/",h=async(e,r)=>{const o=new URLSearchParams({orientation:"horizontal",image_type:"photo",safesearch:!0,key:b,q:e,page:r,per_page:15}),{data:a}=await g.get(`${v}?${o}`);return h.length===0&&loadMoreBtn.classList.add("is-hidden"),a},u=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=document.querySelector(".js-loader"),p=document.querySelector(".load-more");let n=1,l="";const y=new L(".js-gallery a",{captionsData:"alt",captionDelay:250}),S=async e=>{if(e.preventDefault(),l=u.elements.user_query.value.trim(),l===""){i.error({message:"Sorry, there no image you are looking",position:"topRight"});return}n=1,d.classList.remove("is-hidden");try{const r=await h(l,n);if(r.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),c.innerHTML="";return}const o=r.hits.map(a=>f(a)).join("");c.innerHTML=o,y.refresh(),u.reset(),r.totalHits>15&&p.classList.remove("is-hidden")}catch(r){i.error({message:r.message})}finally{d.classList.add("is-hidden")}},w=async()=>{n++,d.classList.remove("is-hidden");try{const e=await h(l,n),r=e.hits.map(o=>f(o)).join("");c.insertAdjacentHTML("beforeend",r),P(),y.refresh(),Math.ceil(e.totalHits/15)===n&&(p.classList.add("is-hidden"),i.info({message:"We're sorry, but you've reached the end of search results",position:"topRight"}))}catch(e){i.error({message:e.message})}finally{d.classList.add("is-hidden")}},P=()=>{const{height:e}=c.firstElementChild.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};p.addEventListener("click",w);u.addEventListener("submit",S);
//# sourceMappingURL=index.js.map
