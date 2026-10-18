import{a as g,S as p,i as n}from"./assets/vendor-B4VkUtbg.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function r(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=r(t);fetch(t.href,o)}})();const h="https://pixabay.com/api/",y="38889455-fd8af79455bb4793a4bd4120e";function w(s){return g.get(h,{params:{key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(e=>e.data.hits)}const f=document.querySelector(".gallery"),d=document.querySelector(".loader"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250});function b(s){const e=s.map(r=>`
                <li class="gallery-item">
                    <a class="gallery-link" href="${r.largeImageURL}">
                        <img
                            class="gallery-image"
                            src="${r.webformatURL}"
                            alt="${r.tags}"
                            loading="lazy"
                        />
                        <div class="image-info">
                            <p><strong class="image-info-label">Likes</strong>${r.likes}</p>
                            <p><strong class="image-info-label">Views</strong>${r.views}</p>
                            <p><strong class="image-info-label">Comments</strong>${r.comments}</p>
                            <p><strong class="image-info-label">Downloads</strong>${r.downloads}</p>
                        </div>
                    </a>
                </li>
            `).join("");f.insertAdjacentHTML("beforeend",e),L.refresh()}function P(){f.innerHTML=""}function v(){d.classList.add("is-visible")}function S(){d.classList.remove("is-visible")}const I=document.querySelector(".form"),m=document.querySelector('input[name="search-text"]');function i(s){if(!s){n.warning({message:"Please enter a search query.",position:"topRight"});return}m.value=s,P(),v(),w(s).then(e=>{if(e.length===0){n.info({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e)}).catch(e=>{n.error({message:e.message,position:"topRight"})}).finally(()=>{S()})}I.addEventListener("submit",s=>{s.preventDefault();const e=m.value.trim();if(!e){i(e);return}const r=new URLSearchParams(window.location.search);r.set("search-text",e),window.history.replaceState({},"",`${window.location.pathname}?${r}`),i(e)});var u;const c=(u=new URLSearchParams(window.location.search).get("search-text"))==null?void 0:u.trim();c&&i(c);
//# sourceMappingURL=index.js.map
