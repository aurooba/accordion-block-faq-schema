!function(){"use strict";var e,n={207:function(){var e=window.wp.blocks,n=window.wp.element,t=(window.wp.i18n,window.wp.blockEditor),r=JSON.parse('{"u2":"a11y-day/accordion-inner-block"}');(0,e.registerBlockType)(r.u2,{edit:function({attributes:e,setAttributes:r,clientId:a}){const[o,c]=(0,n.useState)(e.heading),[i,l]=(0,n.useState)(e.content);return(0,n.useEffect)((()=>{r({id:a})}),[a]),(0,n.createElement)("div",{...(0,t.useBlockProps)()},(0,n.createElement)(t.RichText,{value:o,onChange:e=>{r({heading:e}),c(e)},tagName:"h3",placeholder:"Enter heading here...",className:"accordion-heading",tabindex:"0"}),(0,n.createElement)("div",{id:"sect1",role:"region","aria-labelledby":"accordion1id",className:"accordion-panel"},(0,n.createElement)(t.RichText,{value:i,onChange:e=>{r({content:e}),l(e)},tagName:"div",placeholder:"Enter content here...",className:"accordion-content"})))},save:function({attributes:e}){return(0,n.createElement)("div",{...t.useBlockProps.save()},(0,n.createElement)("h3",{className:"accordion-heading"},(0,n.createElement)("button",{type:"button","aria-expanded":"false",className:"accordion-trigger","aria-controls":`${e.id}-content`,id:`${e.id}-heading`,dangerouslySetInnerHTML:{__html:e.heading}})),(0,n.createElement)("div",{id:`${e.id}-content`,role:"region","aria-labelledby":`${e.id}-heading`,className:"accordion-panel"},(0,n.createElement)("div",{className:"accordion-content",dangerouslySetInnerHTML:{__html:e.content}})))}})}},t={};function r(e){var a=t[e];if(void 0!==a)return a.exports;var o=t[e]={exports:{}};return n[e](o,o.exports,r),o.exports}r.m=n,e=[],r.O=function(n,t,a,o){if(!t){var c=1/0;for(s=0;s<e.length;s++){t=e[s][0],a=e[s][1],o=e[s][2];for(var i=!0,l=0;l<t.length;l++)(!1&o||c>=o)&&Object.keys(r.O).every((function(e){return r.O[e](t[l])}))?t.splice(l--,1):(i=!1,o<c&&(c=o));if(i){e.splice(s--,1);var d=a();void 0!==d&&(n=d)}}return n}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[t,a,o]},r.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){var e={603:0,637:0};r.O.j=function(n){return 0===e[n]};var n=function(n,t){var a,o,c=t[0],i=t[1],l=t[2],d=0;if(c.some((function(n){return 0!==e[n]}))){for(a in i)r.o(i,a)&&(r.m[a]=i[a]);if(l)var s=l(r)}for(n&&n(t);d<c.length;d++)o=c[d],r.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return r.O(s)},t=self.webpackChunka11y_day_accordion_block=self.webpackChunka11y_day_accordion_block||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var a=r.O(void 0,[637],(function(){return r(207)}));a=r.O(a)}();