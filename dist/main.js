(()=>{"use strict";var e,t,r,n,i={852:(e,t,r)=>{e.exports=r.p+"765007c51d3b12b7aed0.png"},284:(e,t,r)=>{e.exports=r.p+"5d77b856ecc7d2aceba4.png"},360:(e,t,r)=>{e.exports=r.p+"c477cd18abc5233cc1af.png"},563:(e,t,r)=>{e.exports=r.p+"f56e36c227f204effe72.png"}},a={};function o(e){var t=a[e];if(void 0!==t)return t.exports;var r=a[e]={exports:{}};return i[e](r,r.exports,o),r.exports}o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e})(),e={BRONCO:{message:"Bronco",image:o(852)},MUSTANG:{message:"Mustang",image:o(563)},MUSTANG_BRONCO:{message:"MustangBronco",image:o(360)},NEITHER:{message:"",image:o(284)}},t=document.getElementById("intInput"),r=document.getElementById("run"),n=document.getElementById("validationError"),t.addEventListener("keyup",(function(){var e=t.value.trim();!e||isNaN(e)||-1!==e.indexOf(".")?(r.disabled=!0,n.style.display="initial"):(r.disabled=!1,n.style.display="none")})),r.addEventListener("click",(function(){return n=function(t){var r=!(t%3),n=!(t%5);if(r&&n)return e.MUSTANG_BRONCO;if(r)return e.MUSTANG;if(n)return e.BRONCO;var i=e.NEITHER;return i.message=t,i}(t.value),document.getElementById("declareMsg").textContent=n.message,document.getElementById("declareImg").src=n.image,void(r.textContent="Go Again?");var n}))})();