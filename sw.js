if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,a)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const c={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return c;default:return e(r)}}))).then((e=>{const r=a(...e);return s.default||(s.default=r),s}))})))}}define("./sw.js",["./workbox-aac6dc4a"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/icon-144x144.png",revision:"a0a21704f5e77aa3347b38111fa55825"},{url:"assets/icon-16x16.png",revision:"15b7013e5bdaa7877f1637a0a15ce2fc"},{url:"assets/icon-32x32.png",revision:"4a469017ff5af18d27d688a7b66fdc67"},{url:"assets/icon-512x512.png",revision:"297af8b8a062bffbcc49848a80d67dc4"},{url:"assets/icon-64x64.png",revision:"f58fe014a33ba6265f0318830b99f8be"},{url:"favicon.png",revision:"17e04db89dcff9516a446038e754eac3"},{url:"feed.xml",revision:"d41756884415b9f2576747c8969a68a4"},{url:"main.js",revision:"909a51c8febf2739d85ca21f58107930"},{url:"manifest.json",revision:"f7afd8f2fde53482c0e6098ae05e150b"},{url:"Readme.md",revision:"35737a9f69736ddc09c48a746ae94141"},{url:"robots.txt",revision:"790f3ce48828a818794772f17ffa1b17"},{url:"sitemap.xml",revision:"25505ca2cf23b84b1894ac3b13f48c64"},{url:"sw.js",revision:"5d1ff7c4dacced8702eb2bc5c7ccfd88"},{url:"workbox-aac6dc4a.js",revision:"e1bd95a69f1132ad922924df5498e5c9"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map