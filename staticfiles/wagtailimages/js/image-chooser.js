(()=>{"use strict";var e,t={8682:(e,t,r)=>{var i=r(211);class o extends i.I{constructor(){super(...arguments),this.chooserModalClass=ImageChooserModal}initHTMLElements(e){super.initHTMLElements(e),this.previewImage=this.chooserElement.querySelector("[data-chooser-image]")}getStateFromHTML(){const e=super.getStateFromHTML();return e&&(e.preview={url:this.previewImage.getAttribute("src"),width:this.previewImage.getAttribute("width"),height:this.previewImage.getAttribute("height")}),e}renderState(e){super.renderState(e),this.previewImage.setAttribute("src",e.preview.url),this.previewImage.setAttribute("width",e.preview.width)}}window.ImageChooser=o},5311:e=>{e.exports=jQuery}},r={};function i(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,r,o,a)=>{if(!r){var n=1/0;for(h=0;h<e.length;h++){for(var[r,o,a]=e[h],s=!0,l=0;l<r.length;l++)(!1&a||n>=a)&&Object.keys(i.O).every((e=>i.O[e](r[l])))?r.splice(l--,1):(s=!1,a<n&&(n=a));if(s){e.splice(h--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var h=e.length;h>0&&e[h-1][2]>a;h--)e[h]=e[h-1];e[h]=[r,o,a]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var r in t)i.o(t,r)&&!i.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.j=912,(()=>{var e={912:0};i.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[n,s,l]=r,u=0;if(n.some((t=>0!==e[t]))){for(o in s)i.o(s,o)&&(i.m[o]=s[o]);if(l)var h=l(i)}for(t&&t(r);u<n.length;u++)a=n[u],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(h)},r=globalThis.webpackChunkwagtail=globalThis.webpackChunkwagtail||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=i.O(void 0,[751],(()=>i(8682)));o=i.O(o)})();
