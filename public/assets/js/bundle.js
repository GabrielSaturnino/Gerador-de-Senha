(()=>{"use strict";var r,n,e,o,t,a,i,c,A,s,u,p,d,l,f,m,h,g,C,v,b,y,I,x,B={122:(r,n,e)=>{e.d(n,{Z:()=>c});var o=e(537),t=e.n(o),a=e(645),i=e.n(a)()(t());i.push([r.id,':root {\r\n    --primary-color: rgb(7, 63, 136);\r\n    --primary-color-darker: rgb(4, 36, 78);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-size: 1.3em;\r\n    line-height: 1.5;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    margin: 40px 0;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n    width: 25px;\r\n    height: 15px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 40px 0;\r\n    font-size: 1em;\r\n}',"",{version:3,sources:["webpack://./src/assets/css/style.css"],names:[],mappings:"AAAA;IACI,gCAAgC;IAChC,sCAAsC;AAC1C;;AAEA;IACI,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,UAAU;IACV,gCAAgC;IAChC,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,gBAAgB;IAChB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,WAAW;IACX,mBAAmB;AACvB;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,YAAY;IACZ,gCAAgC;IAChC,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,eAAe;IACf,gBAAgB;AACpB;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,cAAc;IACd,2BAA2B;IAC3B,cAAc;AAClB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,cAAc;IACd,cAAc;AAClB",sourcesContent:[':root {\r\n    --primary-color: rgb(7, 63, 136);\r\n    --primary-color-darker: rgb(4, 36, 78);\r\n}\r\n\r\n* {\r\n    box-sizing: border-box;\r\n    outline: 0;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    padding: 0;\r\n    background: var(--primary-color);\r\n    font-size: 1.3em;\r\n    line-height: 1.5;\r\n}\r\n\r\n.container {\r\n    max-width: 640px;\r\n    margin: 50px auto;\r\n    background: #fff;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n}\r\n\r\nform input, form label, form button {\r\n    display: block;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\nform input {\r\n    font-size: 24px;\r\n    height: 50px;\r\n    padding: 0 20px;\r\n}\r\n\r\nform input:focus {\r\n    outline: 1px solid var(--primary-color);\r\n}\r\n\r\nform button {\r\n    border: none;\r\n    background: var(--primary-color);\r\n    color: white;\r\n    font-size: 18px;\r\n    font-weight: 700;\r\n    height: 50px;\r\n    cursor: pointer;\r\n    margin-top: 30px;\r\n}\r\n\r\nform button:hover {\r\n    background: var(--primary-color-darker);\r\n}\r\n\r\n.senha-gerada {\r\n    font-size: 2em;\r\n    color: var(--primary-color);\r\n    margin: 40px 0;\r\n}\r\n\r\ninput[type="checkbox"] {\r\n    width: 25px;\r\n    height: 15px;\r\n}\r\n\r\nbutton {\r\n    display: block;\r\n    margin: 40px 0;\r\n    font-size: 1em;\r\n}'],sourceRoot:""}]);const c=i},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",o=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),o&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),o&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,o,t,a){"string"==typeof r&&(r=[[null,r,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var A=this[c][0];null!=A&&(i[A]=!0)}for(var s=0;s<r.length;s++){var u=[].concat(r[s]);o&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),e&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=e):u[2]=e),t&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=t):u[4]="".concat(t)),n.push(u))}},n}},537:r=>{r.exports=function(r){var n=r[1],e=r[3];if(!e)return n;if("function"==typeof btoa){var o=btoa(unescape(encodeURIComponent(JSON.stringify(e)))),t="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),a="/*# ".concat(t," */"),i=e.sources.map((function(r){return"/*# sourceURL=".concat(e.sourceRoot||"").concat(r," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:r=>{var n=[];function e(r){for(var e=-1,o=0;o<n.length;o++)if(n[o].identifier===r){e=o;break}return e}function o(r,o){for(var a={},i=[],c=0;c<r.length;c++){var A=r[c],s=o.base?A[0]+o.base:A[0],u=a[s]||0,p="".concat(s," ").concat(u);a[s]=u+1;var d=e(p),l={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==d)n[d].references++,n[d].updater(l);else{var f=t(l,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function t(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,t){var a=o(r=r||[],t=t||{});return function(r){r=r||[];for(var i=0;i<a.length;i++){var c=e(a[i]);n[c].references--}for(var A=o(r,t),s=0;s<a.length;s++){var u=e(a[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=A}}},569:r=>{var n={};r.exports=function(r,e){var o=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var o="";e.supports&&(o+="@supports (".concat(e.supports,") {")),e.media&&(o+="@media ".concat(e.media," {"));var t=void 0!==e.layer;t&&(o+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),o+=e.css,t&&(o+="}"),e.media&&(o+="}"),e.supports&&(o+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(o,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}}},k={};function S(r){var n=k[r];if(void 0!==n)return n.exports;var e=k[r]={id:r,exports:{}};return B[r](e,e.exports,S),e.exports}S.n=r=>{var n=r&&r.__esModule?()=>r.default:()=>r;return S.d(n,{a:n}),n},S.d=(r,n)=>{for(var e in n)S.o(n,e)&&!S.o(r,e)&&Object.defineProperty(r,e,{enumerable:!0,get:n[e]})},S.o=(r,n)=>Object.prototype.hasOwnProperty.call(r,n),r=function(r,n){return Math.floor(Math.random()*(n-r)+r)},n=",.;~^[]{}!@#$%¨&*()-_=+§`´:/||<>",e=function(){return n[r(0,n.length)]},o=document.querySelector(".senha-gerada"),t=document.querySelector(".qtd-caracteres"),a=document.querySelector(".chk-maiusculas"),i=document.querySelector(".chk-minusculas"),c=document.querySelector(".chk-numeros"),A=document.querySelector(".chk-simbolos"),s=document.querySelector(".gerar-senha"),u=S(379),p=S.n(u),d=S(795),l=S.n(d),f=S(569),m=S.n(f),h=S(565),g=S.n(h),C=S(216),v=S.n(C),b=S(589),y=S.n(b),I=S(122),(x={}).styleTagTransform=y(),x.setAttributes=g(),x.insert=m().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),p()(I.Z,x),I.Z&&I.Z.locals&&I.Z.locals,s.addEventListener("click",(function(){o.innerHTML="Senha: "+(t.value>20?"Valor invalido de caracteres":function(n,o,t,a,i){var c=[];n=Number(n);for(var A=0;A<n;A++)o&&c.push(String.fromCharCode(r(65,91))),t&&c.push(String.fromCharCode(r(97,123))),a&&c.push(String.fromCharCode(r(48,58))),i&&c.push(e());return c.sort((function(){return.5-Math.random()})),c.join("").slice(0,n)}(t.value,a.checked,i.checked,c.checked,A.checked)||"Nada Selecionado")}))})();
//# sourceMappingURL=bundle.js.map