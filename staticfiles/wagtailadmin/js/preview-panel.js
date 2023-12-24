(()=>{"use strict";var e,t={7314:(e,t,r)=>{var a=r(434),n=r(9437),o=r(9408);document.addEventListener("DOMContentLoaded",(()=>{!function(){const e=document.querySelector('[data-side-panel="preview"]');if(!e)return;const t=e.querySelector("[data-preview-panel]"),r=t.querySelectorAll("[data-device-width]"),i=t.querySelector("[data-default-size]"),l=e=>{const r=t.classList.contains("preview-panel--unavailable");let a=e;e&&!r||(a=i.dataset.deviceWidth),t.style.setProperty("--preview-device-width",a)},s=e=>{const a=e.target.value,n=e.target.dataset.deviceWidth;l(n);try{localStorage.setItem("wagtail:preview-panel-device",a)}catch(e){}r.forEach((e=>{t.classList.toggle(`preview-panel--${e.value}`,e.value===a)}))};r.forEach((e=>e.addEventListener("change",s))),new ResizeObserver((e=>t.style.setProperty("--preview-panel-width",e[0].contentRect.width))).observe(t);const c=t.querySelector("[data-preview-new-tab]"),d=t.querySelector("[data-refresh-preview]"),v=t.querySelector("[data-preview-spinner]"),u=document.querySelector("[data-edit-form]"),h=t.dataset.action,w=document.querySelector("[data-preview-mode-select]");let p,f=t.querySelector("[data-preview-iframe]"),m=!1,y=!1;const g=()=>{clearTimeout(p),v.classList.add("w-hidden"),m=!1},E=()=>{const e=document.createElement("iframe"),t=new URL(h,window.location.href);w&&t.searchParams.set("mode",w.value),t.searchParams.set("in_preview_panel","true"),e.style.width=0,e.style.height=0,e.style.opacity=0,e.style.position="absolute",e.src=t.toString(),f.insertAdjacentElement("afterend",e);const r=()=>{Array.from(f.attributes).forEach((t=>{"src"!==t.nodeName&&e.setAttribute(t.nodeName,t.nodeValue)})),e.contentWindow.scroll(f.contentWindow.scrollX,f.contentWindow.scrollY),f.remove(),f=e,e.style=null,g(),e.removeEventListener("load",r)};e.addEventListener("load",r)},b=()=>m?Promise.resolve():(m=!0,p=setTimeout((()=>v.classList.remove("w-hidden")),2e3),fetch(h,{method:"POST",body:new FormData(u)}).then((e=>e.json())).then((e=>(t.classList.toggle("preview-panel--has-errors",!e.is_valid),t.classList.toggle("preview-panel--unavailable",!e.is_available),e.is_available||l(),e.is_valid?E():y?g():(fetch(h,{headers:{[a.QF.CSRF_HEADER_NAME]:a.QF.CSRF_TOKEN},method:"DELETE"}),y=!0,E()),e.is_valid))).catch((e=>{throw g(),e}))),L=()=>b().catch((()=>{window.alert((0,o.ih)("Error while sending preview data."))}));if(c.addEventListener("click",(e=>{e.preventDefault();const t=window.open("",h);t.focus(),L().then((e=>{if(e){const e=new URL(c.href);t.document.location=e.toString()}else window.focus(),t.close()}))})),d&&d.addEventListener("click",L),a.QF.WAGTAIL_AUTO_UPDATE_PREVIEW){let t,r="";const o=()=>{const e=new URLSearchParams(new FormData(u)).toString(),t=r!==e;return r=e,t},i=(0,n.D)(b,a.QF.WAGTAIL_AUTO_UPDATE_PREVIEW_INTERVAL),l=()=>{!m&&o()&&i()};e.addEventListener("show",(()=>{l(),t=setInterval(l,a.QF.WAGTAIL_AUTO_UPDATE_PREVIEW_INTERVAL)})),e.addEventListener("hide",(()=>{clearInterval(t)}))}else e.addEventListener("show",(()=>{b()}));w&&w.addEventListener("change",(e=>{const t=e.target.value,r=new URL(h,window.location.href);r.searchParams.set("mode",t),r.searchParams.delete("in_preview_panel"),c.href=r.toString(),L()}));let _=null;try{_=localStorage.getItem("wagtail:preview-panel-device")}catch(e){}(t.querySelector(`[data-device-width][value="${_}"]`)||i).click()}()}))}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e](o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var i=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],l=!0,s=0;s<r.length;s++)(!1&o||i>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(l=!1,o<i&&(i=o));if(l){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.j=673,(()=>{var e={673:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[i,l,s]=r,c=0;if(i.some((t=>0!==e[t]))){for(n in l)a.o(l,n)&&(a.m[n]=l[n]);if(s)var d=s(a)}for(t&&t(r);c<i.length;c++)o=i[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[751],(()=>a(7314)));n=a.O(n)})();
