!function(e){var r={};function t(s){if(r[s])return r[s].exports;var i=r[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=r,t.d=function(e,r,s){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:s})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(t.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var i in e)t.d(s,i,function(r){return e[r]}.bind(null,i));return s},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=287)}({15:function(e,r){e.exports=window.yoast.analysis},287:function(e,r,t){"use strict";t.r(r);const s=t(15).bundledPlugins.usedKeywords;(new class{constructor(){this._initialized=!1}register(){analysisWorker.registerMessageHandler("updateKeywordUsage",this.updateKeywordUsage.bind(this),"used-keywords-assessment"),analysisWorker.registerMessageHandler("initialize",this.initialize.bind(this),"used-keywords-assessment")}initialize(e){this._plugin=new s(analysisWorker,e),this._plugin.registerPlugin(),this._initialized=!0}updateKeywordUsage(e){if(!this._initialized)throw new Error("UsedKeywordsAssessment must be initialized before keyphrases can be updated.");const r=e.usedKeywords,t=e.usedKeywordsPostTypes;this._plugin.updateKeywordUsage(r,t),analysisWorker.refreshAssessment("usedKeywords","previouslyUsedKeywords")}}).register()}});