/******/(()=>{// webpackBootstrap
/******/var e={
/***/60042:
/***/(e,t)=>{var r;
/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)){if(r.length){var l=a.apply(null,r);l&&e.push(l)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var s in r)n.call(r,s)&&r[s]&&e.push(s);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}
/***/,
/***/76061:
/***/(e,t,r)=>{"use strict";
/* harmony export */var n;r.d(t,{
/* harmony export */c3:()=>/* binding */i
/* harmony export */,po:()=>/* binding */l
/* harmony export */,zd:()=>/* binding */s
/* harmony export */,vX:()=>/* binding */o
/* harmony export */,cQ:()=>/* binding */c
/* harmony export */,fW:()=>/* binding */u
/* harmony export */});var a=(null===(n=window.sensei)||void 0===n?void 0:n.learningModeTemplateSetting)||{},i=a.value,l=a.name,s=a.options,o=a.customizeUrl,c=a.formId,u=a.section}
/***/,
/***/42616:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */M:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(69307),a=r(65736),i=r(55609),l=r(76061),__=a.__,s=function(e){var t=e.upsell,r=e.name,a=e.isActive,s=(0,n.useCallback)((function(){var e=document.querySelector("#".concat(l/* .formId */.cQ,' input[name="_wp_http_referer"]')),t=e.getAttribute("value");e.setAttribute("value","".concat(t,"#").concat(l/* .tabId */.fW))}),[]);// Update the _wp_http_referer so it opens the current settings
// tab after page refresh.
return(0,n.createElement)(n.Fragment,null,t&&(0,n.createElement)(i.Button,{isPrimary:!0,href:t.url,target:"_blank"},t.title),!a&&!t&&(0,n.createElement)(i.Button,{isPrimary:!0,type:"submit",value:r,name:l/* .inputName */.po,form:l/* .formId */.cQ,onClick:s},__("Activate","sensei-lms")),a&&(0,n.createElement)(i.Button,{isPrimary:!0,href:l/* .customizeUrl */.vX},__("Customize","sensei-lms")))};
/* harmony import */}
/***/,
/***/34412:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */k:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(69307),a=r(60042),i=r.n(a),l=r(65736),s=r(73552),o=r(42616),__=l.__,c=function(e){var t=e.title,r=e.isActive,a=e.upsell;return(0,n.createElement)("div",{className:i()({"sensei-lm-template-option__footer":!0,"sensei-lm-template-option__footer--active":r})},(0,n.createElement)(s/* .TemplateOptionTitle */.w,{isActive:r,tag:r?t:null==a?void 0:a.tag},r?__("Active","sensei-lms"):t),(0,n.createElement)("div",{className:"sensei-lm-template-option__actions"},(0,n.createElement)(o/* .TemplateActions */.M,e)))};
/* harmony import */}
/***/,
/***/46067:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */q:()=>/* binding */i
/* harmony export */});
/* harmony import */var n=r(69307),a=r(65736),__=a.__,i=function(e){var t=e.title,r=e.url,a=e.onPreview;return(0,n.createElement)("div",{className:"sensei-lm-template-option__thumbnail",onKeyPress:a,onClick:a,tabIndex:"0",role:"option",title:t},(0,n.createElement)("img",{alt:t,src:r}),(0,n.createElement)("div",{className:"sensei-lm-template-option__preview"},(0,n.createElement)("h4",{className:"sensei-lm-template-option__preview-title"},__("Preview","sensei-lms"))))};
/* harmony import */}
/***/,
/***/73552:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(69307),a=r(60042),i=r.n(a),l=function(e){var t=e.children,r=e.isActive,a=e.tag,l=void 0===a?"":a;return(0,n.createElement)("h4",{className:i()({"sensei-lm-template-option__title":!0,"sensei-lm-template-option__title--active":r})},t,l&&(0,n.createElement)(n.Fragment,null,": ",(0,n.createElement)("span",{className:"sensei-lm-template-option__title-tag"},l)))};
/* harmony import */}
/***/,
/***/31491:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */P:()=>/* binding */l
/* harmony export */});
/* harmony import */var n=r(69307),a=r(34412),i=r(46067),l=function(e){var t=e.name,r=e.title,l=e.screenshots,s=e.onPreview,o=(0,n.useCallback)((function(){return s(t)}),[s,t]);return(0,n.createElement)("li",{className:"sensei-lm-template-option__container"},(0,n.createElement)(i/* .TemplateOptionThumbnail */.q,{title:r,url:l.thumbnail,onPreview:o}),(0,n.createElement)(a/* .TemplateOptionFooter */.k,e))};
/* harmony import */}
/***/,
/***/36522:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */w:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(69307),a=r(55609),i=r(65736),l=r(42616),__=i.__,s=function(e){var t=e.onClose,r=e.title,s=e.screenshots;return(0,n.createElement)(a.Modal,{onRequestClose:t,title:(0,i.sprintf)(__("Preview %1$s","sensei-lms"),r),className:"sensei-lm-template-preview__modal"},(0,n.createElement)("div",{className:"sensei-lm-template-preview__container"},(0,n.createElement)("div",{className:"sensei-lm-template-preview__img"},(0,n.createElement)("img",{alt:r,src:s.full})),(0,n.createElement)("div",{className:"sensei-lm-template-preview__footer"},(0,n.createElement)(a.Button,{className:"sensei-lm-template-preview__cancel-btn",onClick:t,variant:"tertiary"},__("Cancel","sensei-lms")),(0,n.createElement)(l/* .TemplateActions */.M,e))))};
/* harmony import */}
/***/,
/***/76153:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */k:()=>/* binding */c
/* harmony export */});
/* harmony import */var n=r(25773),a=r(66886),i=r(69307),l=r(76061),s=r(31491),o=r(36522),c=function(){var e=(0,i.useState)(null),t=(0,a/* ["default"] */.Z)(e,2),r=t[0],c=t[1],u=l/* .templates */.zd[r]||{},m=(0,i.useCallback)((function(e){return c(e)}),[]),p=(0,i.useCallback)((function(){return c(null)}),[]);return(0,i.createElement)(i.Fragment,null,Object.keys(l/* .templates */.zd).map((function(e){var t=l/* .templates */.zd[e];return(0,i.createElement)(s/* .TemplateOption */.P,(0,n/* ["default"] */.Z)({},t,{key:t.name,isActive:l/* .activeTemplateName */.c3===t.name,onPreview:m}))})),r&&(0,i.createElement)(o/* .TemplatePreview */.w,(0,n/* ["default"] */.Z)({},u,{onClose:p,isActive:l/* .activeTemplateName */.c3===u.name})))};
/* harmony import */}
/***/,
/***/55609:
/***/e=>{"use strict";e.exports=window.wp.components}
/***/,
/***/69307:
/***/e=>{"use strict";e.exports=window.wp.element}
/***/,
/***/65736:
/***/e=>{"use strict";e.exports=window.wp.i18n}
/***/,
/***/1793:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66470:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e){if(Array.isArray(e))return e}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/25773:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/22446:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],_n=!0,l=!1;try{for(r=r.call(e);!(_n=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);_n=!0);}catch(e){l=!0,a=e}finally{try{_n||null==r.return||r.return()}finally{if(l)throw a}}return i}}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/53764:
/***/(e,t,r)=>{"use strict";
/* harmony export */function n(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}
/***/r.d(t,{
/* harmony export */Z:()=>/* binding */n
/* harmony export */})},
/***/66886:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */s
/* harmony export */});
/* harmony import */var n=r(66470),a=r(22446),i=r(64013),l=r(53764);
/* harmony import */function s(e,t){return(0,n/* ["default"] */.Z)(e)||(0,a/* ["default"] */.Z)(e,t)||(0,i/* ["default"] */.Z)(e,t)||(0,l/* ["default"] */.Z)()}
/***/},
/***/64013:
/***/(e,t,r)=>{"use strict";
/* harmony export */r.d(t,{
/* harmony export */Z:()=>/* binding */a
/* harmony export */});
/* harmony import */var n=r(1793);function a(e,t){if(e){if("string"==typeof e)return(0,n/* ["default"] */.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n/* ["default"] */.Z)(e,t):void 0}}
/***/
/******/}},t={};
/************************************************************************/
/******/ // The module cache
/******/
/******/
/******/ // The require function
/******/function r(n){
/******/ // Check if module is in cache
/******/var a=t[n];
/******/if(void 0!==a)
/******/return a.exports;
/******/
/******/ // Create a new module (and put it into the cache)
/******/var i=t[n]={
/******/ // no module.id needed
/******/ // no module.loaded needed
/******/exports:{}
/******/};
/******/
/******/ // Execute the module function
/******/
/******/
/******/ // Return the exports of the module
/******/return e[n](i,i.exports,r),i.exports;
/******/}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/
/******/ // getDefaultExport function for compatibility with non-harmony modules
/******/r.n=e=>{
/******/var t=e&&e.__esModule?
/******/()=>e.default
/******/:()=>e
/******/;
/******/return r.d(t,{a:t}),t;
/******/},
/******/ // define getter functions for harmony exports
/******/r.d=(e,t)=>{
/******/for(var n in t)
/******/r.o(t,n)&&!r.o(e,n)&&
/******/Object.defineProperty(e,n,{enumerable:!0,get:t[n]})
/******/;
/******/},
/******/r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t)
/******/,
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(()=>{"use strict";
/* harmony import */var e=r(69307),t=r(76153),n=document.getElementById("sensei-lm-block-template__options");
/* harmony import */(0,e.render)((0,e.createElement)(t/* .TemplateSelector */.k,null),n)})()})
/******/();