!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=0)}([function(n,e,t){"use strict";t.r(e);var o={baseUrl:"https://api.github.com",get(n){return fetch(this.baseUrl+n).then(n=>n.json())}};const r="/users/",i=({hash:n})=>n.substr(n.indexOf("#/")+2);var a=({avatar_url:n,name:e,login:t,company:o,location:r,public_repos:i,following:a,followers:u})=>`\n  <img src="${n}" alt="">\n  <h3>${e}</h3>\n\n  <strong>${t}</strong>\n\n  <p>Company: ${o}</p>\n  <p>Location: ${r}</p>\n\n  <h4>Statistic</h4>\n\n  <p>Repositories: ${i}</p>\n  <p>Following: ${a}</p>\n  <p>Followers: ${u}</p>\n`;async function u(n){const e=await async function(){const n=i(window.location);return{...await o.get(`${r}${n}`),userQuery:n}}(),t=a(e);n.innerHTML=t}window.addEventListener("load",()=>{window.location="#/"}),window.addEventListener("hashchange",()=>{u(document.getElementById("root"))})}]);