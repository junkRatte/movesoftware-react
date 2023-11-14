function uT(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const cT="modulepreload",hT=function(t){return"/movesoftware-react/"+t},Of={},dT=function(e,n,r){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=hT(s),s in Of)return;Of[s]=!0;const o=s.endsWith(".css"),a=o?'[rel="stylesheet"]':"";if(!!r)for(let c=i.length-1;c>=0;c--){const h=i[c];if(h.href===s&&(!o||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${a}`))return;const u=document.createElement("link");if(u.rel=o?"stylesheet":cT,o||(u.as="script",u.crossOrigin=""),u.href=s,document.head.appendChild(u),o)return new Promise((c,h)=>{u.addEventListener("load",c),u.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};var FO=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function mg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function $O(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var n=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var gg={exports:{}},Us={},_g={exports:{}},Y={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var Df=Object.getOwnPropertySymbols,fT=Object.prototype.hasOwnProperty,pT=Object.prototype.propertyIsEnumerable;function mT(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function gT(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var yg=gT()?Object.assign:function(t,e){for(var n,r=mT(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)fT.call(n,o)&&(r[o]=n[o]);if(Df){i=Df(n);for(var a=0;a<i.length;a++)pT.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wh=yg,_t=typeof Symbol=="function"&&Symbol.for,Fs=_t?Symbol.for("react.element"):60103,_T=_t?Symbol.for("react.portal"):60106,yT=_t?Symbol.for("react.fragment"):60107,vT=_t?Symbol.for("react.strict_mode"):60108,ET=_t?Symbol.for("react.profiler"):60114,wT=_t?Symbol.for("react.provider"):60109,TT=_t?Symbol.for("react.context"):60110,IT=_t?Symbol.for("react.forward_ref"):60112,RT=_t?Symbol.for("react.suspense"):60113,ST=_t?Symbol.for("react.memo"):60115,AT=_t?Symbol.for("react.lazy"):60116,Vf=typeof Symbol=="function"&&Symbol.iterator;function $s(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var vg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Eg={};function pi(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||vg}pi.prototype.isReactComponent={};pi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error($s(85));this.updater.enqueueSetState(this,t,e,"setState")};pi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wg(){}wg.prototype=pi.prototype;function Th(t,e,n){this.props=t,this.context=e,this.refs=Eg,this.updater=n||vg}var Ih=Th.prototype=new wg;Ih.constructor=Th;wh(Ih,pi.prototype);Ih.isPureReactComponent=!0;var Rh={current:null},Tg=Object.prototype.hasOwnProperty,Ig={key:!0,ref:!0,__self:!0,__source:!0};function Rg(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tg.call(e,r)&&!Ig.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Fs,type:t,key:s,ref:o,props:i,_owner:Rh.current}}function PT(t,e){return{$$typeof:Fs,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Sh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fs}function CT(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,function(n){return e[n]})}var Sg=/\/+/g,ua=[];function Ag(t,e,n,r){if(ua.length){var i=ua.pop();return i.result=t,i.keyPrefix=e,i.func=n,i.context=r,i.count=0,i}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function Pg(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>ua.length&&ua.push(t)}function Gu(t,e,n,r){var i=typeof t;(i==="undefined"||i==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Fs:case _T:s=!0}}if(s)return n(r,t,e===""?"."+lu(t,0):e),1;if(s=0,e=e===""?".":e+":",Array.isArray(t))for(var o=0;o<t.length;o++){i=t[o];var a=e+lu(i,o);s+=Gu(i,a,n,r)}else if(t===null||typeof t!="object"?a=null:(a=Vf&&t[Vf]||t["@@iterator"],a=typeof a=="function"?a:null),typeof a=="function")for(t=a.call(t),o=0;!(i=t.next()).done;)i=i.value,a=e+lu(i,o++),s+=Gu(i,a,n,r);else if(i==="object")throw n=""+t,Error($s(31,n==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return s}function Qu(t,e,n){return t==null?0:Gu(t,"",e,n)}function lu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?CT(t.key):e.toString(36)}function kT(t,e){t.func.call(t.context,e,t.count++)}function NT(t,e,n){var r=t.result,i=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?Yu(t,r,n,function(s){return s}):t!=null&&(Sh(t)&&(t=PT(t,i+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(Sg,"$&/")+"/")+n)),r.push(t))}function Yu(t,e,n,r,i){var s="";n!=null&&(s=(""+n).replace(Sg,"$&/")+"/"),e=Ag(e,s,r,i),Qu(t,NT,e),Pg(e)}var Cg={current:null};function Zt(){var t=Cg.current;if(t===null)throw Error($s(321));return t}var xT={ReactCurrentDispatcher:Cg,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:Rh,IsSomeRendererActing:{current:!1},assign:wh};Y.Children={map:function(t,e,n){if(t==null)return t;var r=[];return Yu(t,r,null,e,n),r},forEach:function(t,e,n){if(t==null)return t;e=Ag(null,null,e,n),Qu(t,kT,e),Pg(e)},count:function(t){return Qu(t,function(){return null},null)},toArray:function(t){var e=[];return Yu(t,e,null,function(n){return n}),e},only:function(t){if(!Sh(t))throw Error($s(143));return t}};Y.Component=pi;Y.Fragment=yT;Y.Profiler=ET;Y.PureComponent=Th;Y.StrictMode=vT;Y.Suspense=RT;Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xT;Y.cloneElement=function(t,e,n){if(t==null)throw Error($s(267,t));var r=wh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Rh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tg.call(e,l)&&!Ig.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Fs,type:t.type,key:i,ref:s,props:r,_owner:o}};Y.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:TT,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:wT,_context:t},t.Consumer=t};Y.createElement=Rg;Y.createFactory=function(t){var e=Rg.bind(null,t);return e.type=t,e};Y.createRef=function(){return{current:null}};Y.forwardRef=function(t){return{$$typeof:IT,render:t}};Y.isValidElement=Sh;Y.lazy=function(t){return{$$typeof:AT,_ctor:t,_status:-1,_result:null}};Y.memo=function(t,e){return{$$typeof:ST,type:t,compare:e===void 0?null:e}};Y.useCallback=function(t,e){return Zt().useCallback(t,e)};Y.useContext=function(t,e){return Zt().useContext(t,e)};Y.useDebugValue=function(){};Y.useEffect=function(t,e){return Zt().useEffect(t,e)};Y.useImperativeHandle=function(t,e,n){return Zt().useImperativeHandle(t,e,n)};Y.useLayoutEffect=function(t,e){return Zt().useLayoutEffect(t,e)};Y.useMemo=function(t,e){return Zt().useMemo(t,e)};Y.useReducer=function(t,e,n){return Zt().useReducer(t,e,n)};Y.useRef=function(t){return Zt().useRef(t)};Y.useState=function(t){return Zt().useState(t)};Y.version="16.14.0";_g.exports=Y;var C=_g.exports;const Ah=mg(C),OT=uT({__proto__:null,default:Ah},[C]);/** @license React v16.14.0
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var DT=C,kg=60103;Us.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var Lf=Symbol.for;kg=Lf("react.element"),Us.Fragment=Lf("react.fragment")}var VT=DT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,LT=Object.prototype.hasOwnProperty,MT={key:!0,ref:!0,__self:!0,__source:!0};function Ng(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)LT.call(e,r)&&!MT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:kg,type:t,key:s,ref:o,props:i,_owner:VT.current}}Us.jsx=Ng;Us.jsxs=Ng;gg.exports=Us;var Wn=gg.exports,xg={exports:{}},ut={},Og={exports:{}},Dg={};/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i,s;if(typeof window>"u"||typeof MessageChannel!="function"){var o=null,a=null,l=function(){if(o!==null)try{var S=t.unstable_now();o(!0,S),o=null}catch(V){throw setTimeout(l,0),V}},u=Date.now();t.unstable_now=function(){return Date.now()-u},e=function(S){o!==null?setTimeout(e,0,S):(o=S,setTimeout(l,0))},n=function(S,V){a=setTimeout(S,V)},r=function(){clearTimeout(a)},i=function(){return!1},s=t.unstable_forceFrameRate=function(){}}else{var c=window.performance,h=window.Date,p=window.setTimeout,g=window.clearTimeout;if(typeof console<"u"){var I=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),typeof I!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if(typeof c=="object"&&typeof c.now=="function")t.unstable_now=function(){return c.now()};else{var w=h.now();t.unstable_now=function(){return h.now()-w}}var d=!1,f=null,m=-1,_=5,y=0;i=function(){return t.unstable_now()>=y},s=function(){},t.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):_=0<S?Math.floor(1e3/S):5};var R=new MessageChannel,P=R.port2;R.port1.onmessage=function(){if(f!==null){var S=t.unstable_now();y=S+_;try{f(!0,S)?P.postMessage(null):(d=!1,f=null)}catch(V){throw P.postMessage(null),V}}else d=!1},e=function(S){f=S,d||(d=!0,P.postMessage(null))},n=function(S,V){m=p(function(){S(t.unstable_now())},V)},r=function(){g(m),m=-1}}function L(S,V){var q=S.length;S.push(V);e:for(;;){var le=q-1>>>1,de=S[le];if(de!==void 0&&0<ge(de,V))S[le]=V,S[q]=de,q=le;else break e}}function M(S){return S=S[0],S===void 0?null:S}function O(S){var V=S[0];if(V!==void 0){var q=S.pop();if(q!==V){S[0]=q;e:for(var le=0,de=S.length;le<de;){var $n=2*(le+1)-1,jn=S[$n],Ai=$n+1,kr=S[Ai];if(jn!==void 0&&0>ge(jn,q))kr!==void 0&&0>ge(kr,jn)?(S[le]=kr,S[Ai]=q,le=Ai):(S[le]=jn,S[$n]=q,le=$n);else if(kr!==void 0&&0>ge(kr,q))S[le]=kr,S[Ai]=q,le=Ai;else break e}}return V}return null}function ge(S,V){var q=S.sortIndex-V.sortIndex;return q!==0?q:S.id-V.id}var Ye=[],en=[],aT=1,je=null,Ne=3,_o=!1,Fn=!1,Si=!1;function yo(S){for(var V=M(en);V!==null;){if(V.callback===null)O(en);else if(V.startTime<=S)O(en),V.sortIndex=V.expirationTime,L(Ye,V);else break;V=M(en)}}function ou(S){if(Si=!1,yo(S),!Fn)if(M(Ye)!==null)Fn=!0,e(au);else{var V=M(en);V!==null&&n(ou,V.startTime-S)}}function au(S,V){Fn=!1,Si&&(Si=!1,r()),_o=!0;var q=Ne;try{for(yo(V),je=M(Ye);je!==null&&(!(je.expirationTime>V)||S&&!i());){var le=je.callback;if(le!==null){je.callback=null,Ne=je.priorityLevel;var de=le(je.expirationTime<=V);V=t.unstable_now(),typeof de=="function"?je.callback=de:je===M(Ye)&&O(Ye),yo(V)}else O(Ye);je=M(Ye)}if(je!==null)var $n=!0;else{var jn=M(en);jn!==null&&n(ou,jn.startTime-V),$n=!1}return $n}finally{je=null,Ne=q,_o=!1}}function xf(S){switch(S){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1e4;default:return 5e3}}var lT=s;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(S){S.callback=null},t.unstable_continueExecution=function(){Fn||_o||(Fn=!0,e(au))},t.unstable_getCurrentPriorityLevel=function(){return Ne},t.unstable_getFirstCallbackNode=function(){return M(Ye)},t.unstable_next=function(S){switch(Ne){case 1:case 2:case 3:var V=3;break;default:V=Ne}var q=Ne;Ne=V;try{return S()}finally{Ne=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=lT,t.unstable_runWithPriority=function(S,V){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var q=Ne;Ne=S;try{return V()}finally{Ne=q}},t.unstable_scheduleCallback=function(S,V,q){var le=t.unstable_now();if(typeof q=="object"&&q!==null){var de=q.delay;de=typeof de=="number"&&0<de?le+de:le,q=typeof q.timeout=="number"?q.timeout:xf(S)}else q=xf(S),de=le;return q=de+q,S={id:aT++,callback:V,priorityLevel:S,startTime:de,expirationTime:q,sortIndex:-1},de>le?(S.sortIndex=de,L(en,S),M(Ye)===null&&S===M(en)&&(Si?r():Si=!0,n(ou,de-le))):(S.sortIndex=q,L(Ye,S),Fn||_o||(Fn=!0,e(au))),S},t.unstable_shouldYield=function(){var S=t.unstable_now();yo(S);var V=M(Ye);return V!==je&&je!==null&&V!==null&&V.callback!==null&&V.startTime<=S&&V.expirationTime<je.expirationTime||i()},t.unstable_wrapCallback=function(S){var V=Ne;return function(){var q=Ne;Ne=V;try{return S.apply(this,arguments)}finally{Ne=q}}}})(Dg);Og.exports=Dg;var bT=Og.exports;/** @license React v16.14.0
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hl=C,We=yg,Ce=bT;function T(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!hl)throw Error(T(227));function UT(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ki=!1,ca=null,ha=!1,Xu=null,FT={onError:function(t){Ki=!0,ca=t}};function $T(t,e,n,r,i,s,o,a,l){Ki=!1,ca=null,UT.apply(FT,arguments)}function jT(t,e,n,r,i,s,o,a,l){if($T.apply(this,arguments),Ki){if(Ki){var u=ca;Ki=!1,ca=null}else throw Error(T(198));ha||(ha=!0,Xu=u)}}var Ph=null,Vg=null,Lg=null;function Mf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=Lg(n),jT(r,e,void 0,t),t.currentTarget=null}var da=null,Vr={};function Mg(){if(da)for(var t in Vr){var e=Vr[t],n=da.indexOf(t);if(!(-1<n))throw Error(T(96,t));if(!fa[n]){if(!e.extractEvents)throw Error(T(97,t));fa[n]=e,n=e.eventTypes;for(var r in n){var i=void 0,s=n[r],o=e,a=r;if(Ju.hasOwnProperty(a))throw Error(T(99,a));Ju[a]=s;var l=s.phasedRegistrationNames;if(l){for(i in l)l.hasOwnProperty(i)&&bf(l[i],o,a);i=!0}else s.registrationName?(bf(s.registrationName,o,a),i=!0):i=!1;if(!i)throw Error(T(98,r,t))}}}}function bf(t,e,n){if(ei[t])throw Error(T(100,t));ei[t]=e,Ch[t]=e.eventTypes[n].dependencies}var fa=[],Ju={},ei={},Ch={};function bg(t){var e=!1,n;for(n in t)if(t.hasOwnProperty(n)){var r=t[n];if(!Vr.hasOwnProperty(n)||Vr[n]!==r){if(Vr[n])throw Error(T(102,n));Vr[n]=r,e=!0}}e&&Mg()}var Ln=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Zu=null,zr=null,Wr=null;function Uf(t){if(t=Vg(t)){if(typeof Zu!="function")throw Error(T(280));var e=t.stateNode;e&&(e=Ph(e),Zu(t.stateNode,t.type,e))}}function Ug(t){zr?Wr?Wr.push(t):Wr=[t]:zr=t}function Fg(){if(zr){var t=zr,e=Wr;if(Wr=zr=null,Uf(t),e)for(t=0;t<e.length;t++)Uf(e[t])}}function kh(t,e){return t(e)}function $g(t,e,n,r,i){return t(e,n,r,i)}function Nh(){}var jg=kh,qn=!1,uu=!1;function xh(){(zr!==null||Wr!==null)&&(Nh(),Fg())}function Bg(t,e,n){if(uu)return t(e,n);uu=!0;try{return jg(t,e,n)}finally{uu=!1,xh()}}var BT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ff=Object.prototype.hasOwnProperty,$f={},jf={};function zT(t){return Ff.call(jf,t)?!0:Ff.call($f,t)?!1:BT.test(t)?jf[t]=!0:($f[t]=!0,!1)}function WT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function HT(t,e,n,r){if(e===null||typeof e>"u"||WT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function He(t,e,n,r,i,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s}var ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ke[t]=new He(t,0,!1,t,null,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ke[e]=new He(e,1,!1,t[1],null,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ke[t]=new He(t,2,!1,t.toLowerCase(),null,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ke[t]=new He(t,2,!1,t,null,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ke[t]=new He(t,3,!1,t.toLowerCase(),null,!1)});["checked","multiple","muted","selected"].forEach(function(t){ke[t]=new He(t,3,!0,t,null,!1)});["capture","download"].forEach(function(t){ke[t]=new He(t,4,!1,t,null,!1)});["cols","rows","size","span"].forEach(function(t){ke[t]=new He(t,6,!1,t,null,!1)});["rowSpan","start"].forEach(function(t){ke[t]=new He(t,5,!1,t.toLowerCase(),null,!1)});var Oh=/[\-:]([a-z])/g;function Dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oh,Dh);ke[e]=new He(e,1,!1,t,null,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oh,Dh);ke[e]=new He(e,1,!1,t,"http://www.w3.org/1999/xlink",!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oh,Dh);ke[e]=new He(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1)});["tabIndex","crossOrigin"].forEach(function(t){ke[t]=new He(t,1,!1,t.toLowerCase(),null,!1)});ke.xlinkHref=new He("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(t){ke[t]=new He(t,1,!1,t.toLowerCase(),null,!0)});var ft=hl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;ft.hasOwnProperty("ReactCurrentDispatcher")||(ft.ReactCurrentDispatcher={current:null});ft.hasOwnProperty("ReactCurrentBatchConfig")||(ft.ReactCurrentBatchConfig={suspense:null});function Vh(t,e,n,r){var i=ke.hasOwnProperty(e)?ke[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(HT(e,n,i,r)&&(n=null),r||i===null?zT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qT=/^(.*)[\\\/]/,Qe=typeof Symbol=="function"&&Symbol.for,vo=Qe?Symbol.for("react.element"):60103,Lr=Qe?Symbol.for("react.portal"):60106,Hn=Qe?Symbol.for("react.fragment"):60107,zg=Qe?Symbol.for("react.strict_mode"):60108,jo=Qe?Symbol.for("react.profiler"):60114,Wg=Qe?Symbol.for("react.provider"):60109,Hg=Qe?Symbol.for("react.context"):60110,KT=Qe?Symbol.for("react.concurrent_mode"):60111,Lh=Qe?Symbol.for("react.forward_ref"):60112,Bo=Qe?Symbol.for("react.suspense"):60113,ec=Qe?Symbol.for("react.suspense_list"):60120,Mh=Qe?Symbol.for("react.memo"):60115,qg=Qe?Symbol.for("react.lazy"):60116,Kg=Qe?Symbol.for("react.block"):60121,Bf=typeof Symbol=="function"&&Symbol.iterator;function Pi(t){return t===null||typeof t!="object"?null:(t=Bf&&t[Bf]||t["@@iterator"],typeof t=="function"?t:null)}function GT(t){if(t._status===-1){t._status=0;var e=t._ctor;e=e(),t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}}function Kt(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Hn:return"Fragment";case Lr:return"Portal";case jo:return"Profiler";case zg:return"StrictMode";case Bo:return"Suspense";case ec:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hg:return"Context.Consumer";case Wg:return"Context.Provider";case Lh:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Mh:return Kt(t.type);case Kg:return Kt(t.render);case qg:if(t=t._status===1?t._result:null)return Kt(t)}return null}function bh(t){var e="";do{e:switch(t.tag){case 3:case 4:case 6:case 7:case 10:case 9:var n="";break e;default:var r=t._debugOwner,i=t._debugSource,s=Kt(t.type);n=null,r&&(n=Kt(r.type)),r=s,s="",i?s=" (at "+i.fileName.replace(qT,"")+":"+i.lineNumber+")":n&&(s=" (created by "+n+")"),n=`
    in `+(r||"Unknown")+s}e+=n,t=t.return}while(t);return e}function Cn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function QT(t){var e=Gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Eo(t){t._valueTracker||(t._valueTracker=QT(t))}function Qg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Gg(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function tc(t,e){var n=e.checked;return We({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function zf(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Cn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Yg(t,e){e=e.checked,e!=null&&Vh(t,"checked",e,!1)}function nc(t,e){Yg(t,e);var n=Cn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?rc(t,e.type,n):e.hasOwnProperty("defaultValue")&&rc(t,e.type,Cn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wf(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function rc(t,e,n){(e!=="number"||t.ownerDocument.activeElement!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function YT(t){var e="";return hl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function ic(t,e){return t=We({children:void 0},e),(e=YT(e.children))&&(t.children=e),t}function Hr(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Cn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function sc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(T(91));return We({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Hf(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(T(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(T(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Cn(n)}}function Xg(t,e){var n=Cn(e.value),r=Cn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function qf(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var Jg={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Zg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function oc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Zg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var wo,e_=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==Jg.svg||"innerHTML"in t)t.innerHTML=e;else{for(wo=wo||document.createElement("div"),wo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=wo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ls(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}function To(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Mr={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},cu={},t_={};Ln&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete Mr.animationend.animation,delete Mr.animationiteration.animation,delete Mr.animationstart.animation),"TransitionEvent"in window||delete Mr.transitionend.transition);function dl(t){if(cu[t])return cu[t];if(!Mr[t])return t;var e=Mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return cu[t]=e[n];return t}var n_=dl("animationend"),r_=dl("animationiteration"),i_=dl("animationstart"),s_=dl("transitionend"),Ui="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kf=new(typeof WeakMap=="function"?WeakMap:Map);function Uh(t){var e=Kf.get(t);return e===void 0&&(e=new Map,Kf.set(t,e)),e}function Er(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.effectTag&1026&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function o_(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gf(t){if(Er(t)!==t)throw Error(T(188))}function XT(t){var e=t.alternate;if(!e){if(e=Er(t),e===null)throw Error(T(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gf(i),t;if(s===r)return Gf(i),e;s=s.sibling}throw Error(T(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==r)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?t:e}function a_(t){if(t=XT(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function ti(t,e){if(e==null)throw Error(T(30));return t==null?e:Array.isArray(t)?Array.isArray(e)?(t.push.apply(t,e),t):(t.push(e),t):Array.isArray(e)?[t].concat(e):[t,e]}function Fh(t,e,n){Array.isArray(t)?t.forEach(e,n):t&&e.call(n,t)}var Ci=null;function JT(t){if(t){var e=t._dispatchListeners,n=t._dispatchInstances;if(Array.isArray(e))for(var r=0;r<e.length&&!t.isPropagationStopped();r++)Mf(t,e[r],n[r]);else e&&Mf(t,e,n);t._dispatchListeners=null,t._dispatchInstances=null,t.isPersistent()||t.constructor.release(t)}}function fl(t){if(t!==null&&(Ci=ti(Ci,t)),t=Ci,Ci=null,t){if(Fh(t,JT),Ci)throw Error(T(95));if(ha)throw t=Xu,ha=!1,Xu=null,t}}function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}function l_(t){if(!Ln)return!1;t="on"+t;var e=t in document;return e||(e=document.createElement("div"),e.setAttribute(t,"return;"),e=typeof e[t]=="function"),e}var pa=[];function u_(t){t.topLevelType=null,t.nativeEvent=null,t.targetInst=null,t.ancestors.length=0,10>pa.length&&pa.push(t)}function c_(t,e,n,r){if(pa.length){var i=pa.pop();return i.topLevelType=t,i.eventSystemFlags=r,i.nativeEvent=e,i.targetInst=n,i}return{topLevelType:t,eventSystemFlags:r,nativeEvent:e,targetInst:n,ancestors:[]}}function h_(t){var e=t.targetInst,n=e;do{if(!n){t.ancestors.push(n);break}var r=n;if(r.tag===3)r=r.stateNode.containerInfo;else{for(;r.return;)r=r.return;r=r.tag!==3?null:r.stateNode.containerInfo}if(!r)break;e=n.tag,e!==5&&e!==6||t.ancestors.push(n),n=Bs(r)}while(n);for(n=0;n<t.ancestors.length;n++){e=t.ancestors[n];var i=$h(t.nativeEvent);r=t.topLevelType;var s=t.nativeEvent,o=t.eventSystemFlags;n===0&&(o|=64);for(var a=null,l=0;l<fa.length;l++){var u=fa[l];u&&(u=u.extractEvents(r,e,s,i,o))&&(a=ti(a,u))}fl(a)}}function ac(t,e,n){if(!n.has(t)){switch(t){case"scroll":Fi(e,"scroll",!0);break;case"focus":case"blur":Fi(e,"focus",!0),Fi(e,"blur",!0),n.set("blur",null),n.set("focus",null);break;case"cancel":case"close":l_(t)&&Fi(e,t,!0);break;case"invalid":case"submit":case"reset":break;default:Ui.indexOf(t)===-1&&te(t,e)}n.set(t,null)}}var d_,jh,f_,lc=!1,vt=[],gn=null,_n=null,yn=null,us=new Map,cs=new Map,ki=[],uc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),ZT="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" ");function e0(t,e){var n=Uh(e);uc.forEach(function(r){ac(r,e,n)}),ZT.forEach(function(r){ac(r,e,n)})}function cc(t,e,n,r,i){return{blockedOn:t,topLevelType:e,eventSystemFlags:n|32,nativeEvent:i,container:r}}function Qf(t,e){switch(t){case"focus":case"blur":gn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":yn=null;break;case"pointerover":case"pointerout":us.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(e.pointerId)}}function Ni(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=cc(e,n,r,i,s),e!==null&&(e=zs(e),e!==null&&jh(e)),t):(t.eventSystemFlags|=r,t)}function t0(t,e,n,r,i){switch(e){case"focus":return gn=Ni(gn,t,e,n,r,i),!0;case"dragenter":return _n=Ni(_n,t,e,n,r,i),!0;case"mouseover":return yn=Ni(yn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return us.set(s,Ni(us.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,cs.set(s,Ni(cs.get(s)||null,t,e,n,r,i)),!0}return!1}function n0(t){var e=Bs(t.target);if(e!==null){var n=Er(e);if(n!==null){if(e=n.tag,e===13){if(e=o_(n),e!==null){t.blockedOn=e,Ce.unstable_runWithPriority(t.priority,function(){f_(n)});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function zo(t){if(t.blockedOn!==null)return!1;var e=Wh(t.topLevelType,t.eventSystemFlags,t.container,t.nativeEvent);if(e!==null){var n=zs(e);return n!==null&&jh(n),t.blockedOn=e,!1}return!0}function Yf(t,e,n){zo(t)&&n.delete(e)}function r0(){for(lc=!1;0<vt.length;){var t=vt[0];if(t.blockedOn!==null){t=zs(t.blockedOn),t!==null&&d_(t);break}var e=Wh(t.topLevelType,t.eventSystemFlags,t.container,t.nativeEvent);e!==null?t.blockedOn=e:vt.shift()}gn!==null&&zo(gn)&&(gn=null),_n!==null&&zo(_n)&&(_n=null),yn!==null&&zo(yn)&&(yn=null),us.forEach(Yf),cs.forEach(Yf)}function xi(t,e){t.blockedOn===e&&(t.blockedOn=null,lc||(lc=!0,Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority,r0)))}function p_(t){function e(i){return xi(i,t)}if(0<vt.length){xi(vt[0],t);for(var n=1;n<vt.length;n++){var r=vt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(gn!==null&&xi(gn,t),_n!==null&&xi(_n,t),yn!==null&&xi(yn,t),us.forEach(e),cs.forEach(e),n=0;n<ki.length;n++)r=ki[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)n0(n),n.blockedOn===null&&ki.shift()}var m_={},g_=new Map,Bh=new Map,i0=["abort","abort",n_,"animationEnd",r_,"animationIteration",i_,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",s_,"transitionEnd","waiting","waiting"];function zh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1],s="on"+(i[0].toUpperCase()+i.slice(1));s={phasedRegistrationNames:{bubbled:s,captured:s+"Capture"},dependencies:[r],eventPriority:e},Bh.set(r,e),g_.set(r,s),m_[i]=s}}zh("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);zh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);zh(i0,2);for(var Xf="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),hu=0;hu<Xf.length;hu++)Bh.set(Xf[hu],0);var s0=Ce.unstable_UserBlockingPriority,o0=Ce.unstable_runWithPriority,Wo=!0;function te(t,e){Fi(e,t,!1)}function Fi(t,e,n){var r=Bh.get(e);switch(r===void 0?2:r){case 0:r=a0.bind(null,e,1,t);break;case 1:r=l0.bind(null,e,1,t);break;default:r=pl.bind(null,e,1,t)}n?t.addEventListener(e,r,!0):t.addEventListener(e,r,!1)}function a0(t,e,n,r){qn||Nh();var i=pl,s=qn;qn=!0;try{$g(i,t,e,n,r)}finally{(qn=s)||xh()}}function l0(t,e,n,r){o0(s0,pl.bind(null,t,e,n,r))}function pl(t,e,n,r){if(Wo)if(0<vt.length&&-1<uc.indexOf(t))t=cc(null,t,e,n,r),vt.push(t);else{var i=Wh(t,e,n,r);if(i===null)Qf(t,r);else if(-1<uc.indexOf(t))t=cc(i,t,e,n,r),vt.push(t);else if(!t0(i,t,e,n,r)){Qf(t,r),t=c_(t,r,null,e);try{Bg(h_,t)}finally{u_(t)}}}}function Wh(t,e,n,r){if(n=$h(r),n=Bs(n),n!==null){var i=Er(n);if(i===null)n=null;else{var s=i.tag;if(s===13){if(n=o_(i),n!==null)return n;n=null}else if(s===3){if(i.stateNode.hydrate)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null)}}t=c_(t,r,n,e);try{Bg(h_,t)}finally{u_(t)}return null}var Gi={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},u0=["Webkit","ms","Moz","O"];Object.keys(Gi).forEach(function(t){u0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Gi[e]=Gi[t]})});function __(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Gi.hasOwnProperty(t)&&Gi[t]?(""+e).trim():e+"px"}function y_(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=__(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var c0=We({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function hc(t,e){if(e){if(c0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(T(137,t,""));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(T(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(T(61))}if(e.style!=null&&typeof e.style!="object")throw Error(T(62,""))}}function dc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=Jg.html;function Ut(t,e){t=t.nodeType===9||t.nodeType===11?t:t.ownerDocument;var n=Uh(t);e=Ch[e];for(var r=0;r<e.length;r++)ac(e[r],t,n)}function ma(){}function fc(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ep(t,e){var n=Zf(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Zf(n)}}function v_(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?v_(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function tp(){for(var t=window,e=fc();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=fc(t.document)}return e}function pc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var E_="$",w_="/$",Hh="$?",qh="$!",du=null,fu=null;function T_(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function mc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var pu=typeof setTimeout=="function"?setTimeout:void 0,h0=typeof clearTimeout=="function"?clearTimeout:void 0;function qr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n===E_||n===qh||n===Hh){if(e===0)return t;e--}else n===w_&&e++}t=t.previousSibling}return null}var Kh=Math.random().toString(36).slice(2),un="__reactInternalInstance$"+Kh,ga="__reactEventHandlers$"+Kh,js="__reactContainere$"+Kh;function Bs(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[js]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=np(t);t!==null;){if(n=t[un])return n;t=np(t)}return e}t=n,n=t.parentNode}return null}function zs(t){return t=t[un]||t[js],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function lr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(T(33))}function Gh(t){return t[ga]||null}function Ft(t){do t=t.return;while(t&&t.tag!==5);return t||null}function I_(t,e){var n=t.stateNode;if(!n)return null;var r=Ph(n);if(!r)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(T(231,e,typeof n));return n}function rp(t,e,n){(e=I_(t,n.dispatchConfig.phasedRegistrationNames[e]))&&(n._dispatchListeners=ti(n._dispatchListeners,e),n._dispatchInstances=ti(n._dispatchInstances,t))}function d0(t){if(t&&t.dispatchConfig.phasedRegistrationNames){for(var e=t._targetInst,n=[];e;)n.push(e),e=Ft(e);for(e=n.length;0<e--;)rp(n[e],"captured",t);for(e=0;e<n.length;e++)rp(n[e],"bubbled",t)}}function gc(t,e,n){t&&n&&n.dispatchConfig.registrationName&&(e=I_(t,n.dispatchConfig.registrationName))&&(n._dispatchListeners=ti(n._dispatchListeners,e),n._dispatchInstances=ti(n._dispatchInstances,t))}function f0(t){t&&t.dispatchConfig.registrationName&&gc(t._targetInst,null,t)}function ni(t){Fh(t,d0)}var cn=null,Qh=null,Ho=null;function R_(){if(Ho)return Ho;var t,e=Qh,n=e.length,r,i="value"in cn?cn.value:cn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ho=i.slice(t,1<r?1-r:void 0)}function qo(){return!0}function _a(){return!1}function rt(t,e,n,r){this.dispatchConfig=t,this._targetInst=e,this.nativeEvent=n,t=this.constructor.Interface;for(var i in t)t.hasOwnProperty(i)&&((e=t[i])?this[i]=e(n):i==="target"?this.target=r:this[i]=n[i]);return this.isDefaultPrevented=(n.defaultPrevented!=null?n.defaultPrevented:n.returnValue===!1)?qo:_a,this.isPropagationStopped=_a,this}We(rt.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){this.isPersistent=qo},isPersistent:_a,destructor:function(){var t=this.constructor.Interface,e;for(e in t)this[e]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null,this.isPropagationStopped=this.isDefaultPrevented=_a,this._dispatchInstances=this._dispatchListeners=null}});rt.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};rt.extend=function(t){function e(){}function n(){return r.apply(this,arguments)}var r=this;e.prototype=r.prototype;var i=new e;return We(i,n.prototype),n.prototype=i,n.prototype.constructor=n,n.Interface=We({},r.Interface,t),n.extend=r.extend,S_(n),n};S_(rt);function p0(t,e,n,r){if(this.eventPool.length){var i=this.eventPool.pop();return this.call(i,t,e,n,r),i}return new this(t,e,n,r)}function m0(t){if(!(t instanceof this))throw Error(T(279));t.destructor(),10>this.eventPool.length&&this.eventPool.push(t)}function S_(t){t.eventPool=[],t.getPooled=p0,t.release=m0}var g0=rt.extend({data:null}),_0=rt.extend({data:null}),y0=[9,13,27,32],Yh=Ln&&"CompositionEvent"in window,Qi=null;Ln&&"documentMode"in document&&(Qi=document.documentMode);var v0=Ln&&"TextEvent"in window&&!Qi,A_=Ln&&(!Yh||Qi&&8<Qi&&11>=Qi),ip=String.fromCharCode(32),bt={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},sp=!1;function P_(t,e){switch(t){case"keyup":return y0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"blur":return!0;default:return!1}}function C_(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var br=!1;function E0(t,e){switch(t){case"compositionend":return C_(e);case"keypress":return e.which!==32?null:(sp=!0,ip);case"textInput":return t=e.data,t===ip&&sp?null:t;default:return null}}function w0(t,e){if(br)return t==="compositionend"||!Yh&&P_(t,e)?(t=R_(),Ho=Qh=cn=null,br=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return A_&&e.locale!=="ko"?null:e.data;default:return null}}var T0={eventTypes:bt,extractEvents:function(t,e,n,r){var i;if(Yh)e:{switch(t){case"compositionstart":var s=bt.compositionStart;break e;case"compositionend":s=bt.compositionEnd;break e;case"compositionupdate":s=bt.compositionUpdate;break e}s=void 0}else br?P_(t,n)&&(s=bt.compositionEnd):t==="keydown"&&n.keyCode===229&&(s=bt.compositionStart);return s?(A_&&n.locale!=="ko"&&(br||s!==bt.compositionStart?s===bt.compositionEnd&&br&&(i=R_()):(cn=r,Qh="value"in cn?cn.value:cn.textContent,br=!0)),s=g0.getPooled(s,e,n,r),i?s.data=i:(i=C_(n),i!==null&&(s.data=i)),ni(s),i=s):i=null,(t=v0?E0(t,n):w0(t,n))?(e=_0.getPooled(bt.beforeInput,e,n,r),e.data=t,ni(e)):e=null,i===null?e:e===null?i:[i,e]}},I0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function k_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!I0[t.type]:e==="textarea"}var N_={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}};function x_(t,e,n){return t=rt.getPooled(N_.change,t,e,n),t.type="change",Ug(n),ni(t),t}var Yi=null,hs=null;function R0(t){fl(t)}function ml(t){var e=lr(t);if(Qg(e))return t}function S0(t,e){if(t==="change")return e}var _c=!1;Ln&&(_c=l_("input")&&(!document.documentMode||9<document.documentMode));function op(){Yi&&(Yi.detachEvent("onpropertychange",O_),hs=Yi=null)}function O_(t){if(t.propertyName==="value"&&ml(hs))if(t=x_(hs,t,$h(t)),qn)fl(t);else{qn=!0;try{kh(R0,t)}finally{qn=!1,xh()}}}function A0(t,e,n){t==="focus"?(op(),Yi=e,hs=n,Yi.attachEvent("onpropertychange",O_)):t==="blur"&&op()}function P0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ml(hs)}function C0(t,e){if(t==="click")return ml(e)}function k0(t,e){if(t==="input"||t==="change")return ml(e)}var N0={eventTypes:N_,_isInputEventSupported:_c,extractEvents:function(t,e,n,r){var i=e?lr(e):window,s=i.nodeName&&i.nodeName.toLowerCase();if(s==="select"||s==="input"&&i.type==="file")var o=S0;else if(k_(i))if(_c)o=k0;else{o=P0;var a=A0}else(s=i.nodeName)&&s.toLowerCase()==="input"&&(i.type==="checkbox"||i.type==="radio")&&(o=C0);if(o&&(o=o(t,e)))return x_(o,n,r);a&&a(t,i,e),t==="blur"&&(t=i._wrapperState)&&t.controlled&&i.type==="number"&&rc(i,"number",i.value)}},Ws=rt.extend({view:null,detail:null}),x0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=x0[t])?!!e[t]:!1}function Xh(){return O0}var ap=0,lp=0,up=!1,cp=!1,Hs=Ws.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:Xh,button:null,buttons:null,relatedTarget:function(t){return t.relatedTarget||(t.fromElement===t.srcElement?t.toElement:t.fromElement)},movementX:function(t){if("movementX"in t)return t.movementX;var e=ap;return ap=t.screenX,up?t.type==="mousemove"?t.screenX-e:0:(up=!0,0)},movementY:function(t){if("movementY"in t)return t.movementY;var e=lp;return lp=t.screenY,cp?t.type==="mousemove"?t.screenY-e:0:(cp=!0,0)}}),D_=Hs.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Oi={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout","pointerover"]}},D0={eventTypes:Oi,extractEvents:function(t,e,n,r,i){var s=t==="mouseover"||t==="pointerover",o=t==="mouseout"||t==="pointerout";if(s&&!(i&32)&&(n.relatedTarget||n.fromElement)||!o&&!s)return null;if(s=r.window===r?r:(s=r.ownerDocument)?s.defaultView||s.parentWindow:window,o){if(o=e,e=(e=n.relatedTarget||n.toElement)?Bs(e):null,e!==null){var a=Er(e);(e!==a||e.tag!==5&&e.tag!==6)&&(e=null)}}else o=null;if(o===e)return null;if(t==="mouseout"||t==="mouseover")var l=Hs,u=Oi.mouseLeave,c=Oi.mouseEnter,h="mouse";else(t==="pointerout"||t==="pointerover")&&(l=D_,u=Oi.pointerLeave,c=Oi.pointerEnter,h="pointer");if(t=o==null?s:lr(o),s=e==null?s:lr(e),u=l.getPooled(u,o,n,r),u.type=h+"leave",u.target=t,u.relatedTarget=s,n=l.getPooled(c,e,n,r),n.type=h+"enter",n.target=s,n.relatedTarget=t,r=o,h=e,r&&h)e:{for(l=r,c=h,o=0,t=l;t;t=Ft(t))o++;for(t=0,e=c;e;e=Ft(e))t++;for(;0<o-t;)l=Ft(l),o--;for(;0<t-o;)c=Ft(c),t--;for(;o--;){if(l===c||l===c.alternate)break e;l=Ft(l),c=Ft(c)}l=null}else l=null;for(c=l,l=[];r&&r!==c&&(o=r.alternate,!(o!==null&&o===c));)l.push(r),r=Ft(r);for(r=[];h&&h!==c&&(o=h.alternate,!(o!==null&&o===c));)r.push(h),h=Ft(h);for(h=0;h<l.length;h++)gc(l[h],"bubbled",u);for(h=r.length;0<h--;)gc(r[h],"captured",n);return i&64?[u,n]:[u]}};function V0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ur=typeof Object.is=="function"?Object.is:V0,L0=Object.prototype.hasOwnProperty;function ds(t,e){if(ur(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!L0.call(e,n[r])||!ur(t[n[r]],e[n[r]]))return!1;return!0}var M0=Ln&&"documentMode"in document&&11>=document.documentMode,V_={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},Ur=null,yc=null,Xi=null,vc=!1;function hp(t,e){var n=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;return vc||Ur==null||Ur!==fc(n)?null:(n=Ur,"selectionStart"in n&&pc(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Xi&&ds(Xi,n)?null:(Xi=n,t=rt.getPooled(V_.select,yc,t,e),t.type="select",t.target=Ur,ni(t),t))}var b0={eventTypes:V_,extractEvents:function(t,e,n,r,i,s){if(i=s||(r.window===r?r.document:r.nodeType===9?r:r.ownerDocument),!(s=!i)){e:{i=Uh(i),s=Ch.onSelect;for(var o=0;o<s.length;o++)if(!i.has(s[o])){i=!1;break e}i=!0}s=!i}if(s)return null;switch(i=e?lr(e):window,t){case"focus":(k_(i)||i.contentEditable==="true")&&(Ur=i,yc=e,Xi=null);break;case"blur":Xi=yc=Ur=null;break;case"mousedown":vc=!0;break;case"contextmenu":case"mouseup":case"dragend":return vc=!1,hp(n,r);case"selectionchange":if(M0)break;case"keydown":case"keyup":return hp(n,r)}return null}},U0=rt.extend({animationName:null,elapsedTime:null,pseudoElement:null}),F0=rt.extend({clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$0=Ws.extend({relatedTarget:null});function Ko(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}var j0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},B0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},z0=Ws.extend({key:function(t){if(t.key){var e=j0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ko(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?B0[t.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:Xh,charCode:function(t){return t.type==="keypress"?Ko(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ko(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),W0=Hs.extend({dataTransfer:null}),H0=Ws.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:Xh}),q0=rt.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),K0=Hs.extend({deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:null,deltaMode:null}),G0={eventTypes:m_,extractEvents:function(t,e,n,r){var i=g_.get(t);if(!i)return null;switch(t){case"keypress":if(Ko(n)===0)return null;case"keydown":case"keyup":t=z0;break;case"blur":case"focus":t=$0;break;case"click":if(n.button===2)return null;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":t=Hs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":t=W0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":t=H0;break;case n_:case r_:case i_:t=U0;break;case s_:t=q0;break;case"scroll":t=Ws;break;case"wheel":t=K0;break;case"copy":case"cut":case"paste":t=F0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":t=D_;break;default:t=rt}return e=t.getPooled(i,e,n,r),ni(e),e}};if(da)throw Error(T(101));da=Array.prototype.slice.call("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));Mg();var Q0=zs;Ph=Gh;Vg=Q0;Lg=lr;bg({SimpleEventPlugin:G0,EnterLeaveEventPlugin:D0,ChangeEventPlugin:N0,SelectEventPlugin:b0,BeforeInputEventPlugin:T0});var Ec=[],Fr=-1;function ee(t){0>Fr||(t.current=Ec[Fr],Ec[Fr]=null,Fr--)}function ue(t,e){Fr++,Ec[Fr]=t.current,t.current=e}var kn={},Ue={current:kn},qe={current:!1},cr=kn;function ri(t,e){var n=t.type.contextTypes;if(!n)return kn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ke(t){return t=t.childContextTypes,t!=null}function ya(){ee(qe),ee(Ue)}function dp(t,e,n){if(Ue.current!==kn)throw Error(T(168));ue(Ue,e),ue(qe,n)}function L_(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(T(108,Kt(e)||"Unknown",i));return We({},n,{},r)}function Go(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||kn,cr=Ue.current,ue(Ue,t),ue(qe,qe.current),!0}function fp(t,e,n){var r=t.stateNode;if(!r)throw Error(T(169));n?(t=L_(t,e,cr),r.__reactInternalMemoizedMergedChildContext=t,ee(qe),ee(Ue),ue(Ue,t)):ee(qe),ue(qe,n)}var Y0=Ce.unstable_runWithPriority,Jh=Ce.unstable_scheduleCallback,M_=Ce.unstable_cancelCallback,pp=Ce.unstable_requestPaint,wc=Ce.unstable_now,X0=Ce.unstable_getCurrentPriorityLevel,gl=Ce.unstable_ImmediatePriority,b_=Ce.unstable_UserBlockingPriority,U_=Ce.unstable_NormalPriority,F_=Ce.unstable_LowPriority,$_=Ce.unstable_IdlePriority,j_={},J0=Ce.unstable_shouldYield,Z0=pp!==void 0?pp:function(){},$t=null,Qo=null,mu=!1,mp=wc(),ot=1e4>mp?wc:function(){return wc()-mp};function _l(){switch(X0()){case gl:return 99;case b_:return 98;case U_:return 97;case F_:return 96;case $_:return 95;default:throw Error(T(332))}}function B_(t){switch(t){case 99:return gl;case 98:return b_;case 97:return U_;case 96:return F_;case 95:return $_;default:throw Error(T(332))}}function Nn(t,e){return t=B_(t),Y0(t,e)}function z_(t,e,n){return t=B_(t),Jh(t,e,n)}function gp(t){return $t===null?($t=[t],Qo=Jh(gl,W_)):$t.push(t),j_}function Lt(){if(Qo!==null){var t=Qo;Qo=null,M_(t)}W_()}function W_(){if(!mu&&$t!==null){mu=!0;var t=0;try{var e=$t;Nn(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),$t=null}catch(n){throw $t!==null&&($t=$t.slice(t+1)),Jh(gl,Lt),n}finally{mu=!1}}}function Yo(t,e,n){return n/=10,1073741821-(((1073741821-t+e/10)/n|0)+1)*n}function ct(t,e){if(t&&t.defaultProps){e=We({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n])}return e}var va={current:null},Ea=null,$r=null,wa=null;function Zh(){wa=$r=Ea=null}function ed(t){var e=va.current;ee(va),t.type._context._currentValue=e}function H_(t,e){for(;t!==null;){var n=t.alternate;if(t.childExpirationTime<e)t.childExpirationTime=e,n!==null&&n.childExpirationTime<e&&(n.childExpirationTime=e);else if(n!==null&&n.childExpirationTime<e)n.childExpirationTime=e;else break;t=t.return}}function Kr(t,e){Ea=t,wa=$r=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.expirationTime>=e&&(Et=!0),t.firstContext=null)}function lt(t,e){if(wa!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(wa=t,e=1073741823),e={context:t,observedBits:e,next:null},$r===null){if(Ea===null)throw Error(T(308));$r=e,Ea.dependencies={expirationTime:0,firstContext:e,responders:null}}else $r=$r.next=e;return t._currentValue}var nn=!1;function td(t){t.updateQueue={baseState:t.memoizedState,baseQueue:null,shared:{pending:null},effects:null}}function nd(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,baseQueue:t.baseQueue,shared:t.shared,effects:t.effects})}function vn(t,e){return t={expirationTime:t,suspenseConfig:e,tag:0,payload:null,callback:null,next:null},t.next=t}function En(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function _p(t,e){var n=t.alternate;n!==null&&nd(n,t),t=t.updateQueue,n=t.baseQueue,n===null?(t.baseQueue=e.next=e,e.next=e):(e.next=n.next,n.next=e)}function fs(t,e,n,r){var i=t.updateQueue;nn=!1;var s=i.baseQueue,o=i.shared.pending;if(o!==null){if(s!==null){var a=s.next;s.next=o.next,o.next=a}s=o,i.shared.pending=null,a=t.alternate,a!==null&&(a=a.updateQueue,a!==null&&(a.baseQueue=o))}if(s!==null){a=s.next;var l=i.baseState,u=0,c=null,h=null,p=null;if(a!==null){var g=a;do{if(o=g.expirationTime,o<r){var I={expirationTime:g.expirationTime,suspenseConfig:g.suspenseConfig,tag:g.tag,payload:g.payload,callback:g.callback,next:null};p===null?(h=p=I,c=l):p=p.next=I,o>u&&(u=o)}else{p!==null&&(p=p.next={expirationTime:1073741823,suspenseConfig:g.suspenseConfig,tag:g.tag,payload:g.payload,callback:g.callback,next:null}),wy(o,g.suspenseConfig);e:{var w=t,d=g;switch(o=e,I=n,d.tag){case 1:if(w=d.payload,typeof w=="function"){l=w.call(I,l,o);break e}l=w;break e;case 3:w.effectTag=w.effectTag&-4097|64;case 0:if(w=d.payload,o=typeof w=="function"?w.call(I,l,o):w,o==null)break e;l=We({},l,o);break e;case 2:nn=!0}}g.callback!==null&&(t.effectTag|=32,o=i.effects,o===null?i.effects=[g]:o.push(g))}if(g=g.next,g===null||g===a){if(o=i.shared.pending,o===null)break;g=s.next=o.next,o.next=a,i.baseQueue=s=o,i.shared.pending=null}}while(1)}p===null?c=l:p.next=h,i.baseState=c,i.baseQueue=p,Tl(u),t.expirationTime=u,t.memoizedState=l}}function yp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=i,i=n,typeof r!="function")throw Error(T(191,r));r.call(i)}}}var Ji=ft.ReactCurrentBatchConfig,q_=new hl.Component().refs;function Ta(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:We({},e,n),t.memoizedState=n,t.expirationTime===0&&(t.updateQueue.baseState=n)}var yl={isMounted:function(t){return(t=t._reactInternalFiber)?Er(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternalFiber;var r=At(),i=Ji.suspense;r=rr(r,t,i),i=vn(r,i),i.payload=e,n!=null&&(i.callback=n),En(t,i),Tn(t,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternalFiber;var r=At(),i=Ji.suspense;r=rr(r,t,i),i=vn(r,i),i.tag=1,i.payload=e,n!=null&&(i.callback=n),En(t,i),Tn(t,r)},enqueueForceUpdate:function(t,e){t=t._reactInternalFiber;var n=At(),r=Ji.suspense;n=rr(n,t,r),r=vn(n,r),r.tag=2,e!=null&&(r.callback=e),En(t,r),Tn(t,n)}};function vp(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!ds(n,r)||!ds(i,s):!0}function K_(t,e,n){var r=!1,i=kn,s=e.contextType;return typeof s=="object"&&s!==null?s=lt(s):(i=Ke(e)?cr:Ue.current,r=e.contextTypes,s=(r=r!=null)?ri(t,i):kn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yl,t.stateNode=e,e._reactInternalFiber=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Ep(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&yl.enqueueReplaceState(e,e.state,null)}function Tc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=q_,td(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=lt(s):(s=Ke(e)?cr:Ue.current,i.context=ri(t,s)),fs(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ta(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&yl.enqueueReplaceState(i,i.state,null),fs(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.effectTag|=4)}var Io=Array.isArray;function Di(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var r=n.stateNode}if(!r)throw Error(T(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===q_&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,t))}return t}function Ro(t,e){if(t.type!=="textarea")throw Error(T(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e,""))}function G_(t){function e(d,f){if(t){var m=d.lastEffect;m!==null?(m.nextEffect=f,d.lastEffect=f):d.firstEffect=d.lastEffect=f,f.nextEffect=null,f.effectTag=8}}function n(d,f){if(!t)return null;for(;f!==null;)e(d,f),f=f.sibling;return null}function r(d,f){for(d=new Map;f!==null;)f.key!==null?d.set(f.key,f):d.set(f.index,f),f=f.sibling;return d}function i(d,f){return d=hr(d,f),d.index=0,d.sibling=null,d}function s(d,f,m){return d.index=m,t?(m=d.alternate,m!==null?(m=m.index,m<f?(d.effectTag=2,f):m):(d.effectTag=2,f)):f}function o(d){return t&&d.alternate===null&&(d.effectTag=2),d}function a(d,f,m,_){return f===null||f.tag!==6?(f=wu(m,d.mode,_),f.return=d,f):(f=i(f,m),f.return=d,f)}function l(d,f,m,_){return f!==null&&f.elementType===m.type?(_=i(f,m.props),_.ref=Di(d,f,m),_.return=d,_):(_=ea(m.type,m.key,m.props,null,d.mode,_),_.ref=Di(d,f,m),_.return=d,_)}function u(d,f,m,_){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=Tu(m,d.mode,_),f.return=d,f):(f=i(f,m.children||[]),f.return=d,f)}function c(d,f,m,_,y){return f===null||f.tag!==7?(f=fn(m,d.mode,_,y),f.return=d,f):(f=i(f,m),f.return=d,f)}function h(d,f,m){if(typeof f=="string"||typeof f=="number")return f=wu(""+f,d.mode,m),f.return=d,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case vo:return m=ea(f.type,f.key,f.props,null,d.mode,m),m.ref=Di(d,null,f),m.return=d,m;case Lr:return f=Tu(f,d.mode,m),f.return=d,f}if(Io(f)||Pi(f))return f=fn(f,d.mode,m,null),f.return=d,f;Ro(d,f)}return null}function p(d,f,m,_){var y=f!==null?f.key:null;if(typeof m=="string"||typeof m=="number")return y!==null?null:a(d,f,""+m,_);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case vo:return m.key===y?m.type===Hn?c(d,f,m.props.children,_,y):l(d,f,m,_):null;case Lr:return m.key===y?u(d,f,m,_):null}if(Io(m)||Pi(m))return y!==null?null:c(d,f,m,_,null);Ro(d,m)}return null}function g(d,f,m,_,y){if(typeof _=="string"||typeof _=="number")return d=d.get(m)||null,a(f,d,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case vo:return d=d.get(_.key===null?m:_.key)||null,_.type===Hn?c(f,d,_.props.children,y,_.key):l(f,d,_,y);case Lr:return d=d.get(_.key===null?m:_.key)||null,u(f,d,_,y)}if(Io(_)||Pi(_))return d=d.get(m)||null,c(f,d,_,y,null);Ro(f,_)}return null}function I(d,f,m,_){for(var y=null,R=null,P=f,L=f=0,M=null;P!==null&&L<m.length;L++){P.index>L?(M=P,P=null):M=P.sibling;var O=p(d,P,m[L],_);if(O===null){P===null&&(P=M);break}t&&P&&O.alternate===null&&e(d,P),f=s(O,f,L),R===null?y=O:R.sibling=O,R=O,P=M}if(L===m.length)return n(d,P),y;if(P===null){for(;L<m.length;L++)P=h(d,m[L],_),P!==null&&(f=s(P,f,L),R===null?y=P:R.sibling=P,R=P);return y}for(P=r(d,P);L<m.length;L++)M=g(P,d,L,m[L],_),M!==null&&(t&&M.alternate!==null&&P.delete(M.key===null?L:M.key),f=s(M,f,L),R===null?y=M:R.sibling=M,R=M);return t&&P.forEach(function(ge){return e(d,ge)}),y}function w(d,f,m,_){var y=Pi(m);if(typeof y!="function")throw Error(T(150));if(m=y.call(m),m==null)throw Error(T(151));for(var R=y=null,P=f,L=f=0,M=null,O=m.next();P!==null&&!O.done;L++,O=m.next()){P.index>L?(M=P,P=null):M=P.sibling;var ge=p(d,P,O.value,_);if(ge===null){P===null&&(P=M);break}t&&P&&ge.alternate===null&&e(d,P),f=s(ge,f,L),R===null?y=ge:R.sibling=ge,R=ge,P=M}if(O.done)return n(d,P),y;if(P===null){for(;!O.done;L++,O=m.next())O=h(d,O.value,_),O!==null&&(f=s(O,f,L),R===null?y=O:R.sibling=O,R=O);return y}for(P=r(d,P);!O.done;L++,O=m.next())O=g(P,d,L,O.value,_),O!==null&&(t&&O.alternate!==null&&P.delete(O.key===null?L:O.key),f=s(O,f,L),R===null?y=O:R.sibling=O,R=O);return t&&P.forEach(function(Ye){return e(d,Ye)}),y}return function(d,f,m,_){var y=typeof m=="object"&&m!==null&&m.type===Hn&&m.key===null;y&&(m=m.props.children);var R=typeof m=="object"&&m!==null;if(R)switch(m.$$typeof){case vo:e:{for(R=m.key,y=f;y!==null;){if(y.key===R){switch(y.tag){case 7:if(m.type===Hn){n(d,y.sibling),f=i(y,m.props.children),f.return=d,d=f;break e}break;default:if(y.elementType===m.type){n(d,y.sibling),f=i(y,m.props),f.ref=Di(d,y,m),f.return=d,d=f;break e}}n(d,y);break}else e(d,y);y=y.sibling}m.type===Hn?(f=fn(m.props.children,d.mode,_,m.key),f.return=d,d=f):(_=ea(m.type,m.key,m.props,null,d.mode,_),_.ref=Di(d,f,m),_.return=d,d=_)}return o(d);case Lr:e:{for(y=m.key;f!==null;){if(f.key===y)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(d,f.sibling),f=i(f,m.children||[]),f.return=d,d=f;break e}else{n(d,f);break}else e(d,f);f=f.sibling}f=Tu(m,d.mode,_),f.return=d,d=f}return o(d)}if(typeof m=="string"||typeof m=="number")return m=""+m,f!==null&&f.tag===6?(n(d,f.sibling),f=i(f,m),f.return=d,d=f):(n(d,f),f=wu(m,d.mode,_),f.return=d,d=f),o(d);if(Io(m))return I(d,f,m,_);if(Pi(m))return w(d,f,m,_);if(R&&Ro(d,m),typeof m>"u"&&!y)switch(d.tag){case 1:case 0:throw d=d.type,Error(T(152,d.displayName||d.name||"Component"))}return n(d,f)}}var ii=G_(!0),rd=G_(!1),qs={},St={current:qs},ps={current:qs},ms={current:qs};function Kn(t){if(t===qs)throw Error(T(174));return t}function Ic(t,e){switch(ue(ms,e),ue(ps,t),ue(St,qs),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:oc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=oc(e,t)}ee(St),ue(St,e)}function si(){ee(St),ee(ps),ee(ms)}function wp(t){Kn(ms.current);var e=Kn(St.current),n=oc(e,t.type);e!==n&&(ue(ps,t),ue(St,n))}function id(t){ps.current===t&&(ee(St),ee(ps))}var re={current:0};function Ia(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===Hh||n.data===qh))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.effectTag&64)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}function sd(t,e){return{responder:t,props:e}}var Xo=ft.ReactCurrentDispatcher,at=ft.ReactCurrentBatchConfig,hn=0,pe=null,Oe=null,De=null,Ra=!1;function Xe(){throw Error(T(321))}function od(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ur(t[n],e[n]))return!1;return!0}function ad(t,e,n,r,i,s){if(hn=s,pe=e,e.memoizedState=null,e.updateQueue=null,e.expirationTime=0,Xo.current=t===null||t.memoizedState===null?eI:tI,t=n(r,i),e.expirationTime===hn){s=0;do{if(e.expirationTime=0,!(25>s))throw Error(T(301));s+=1,De=Oe=null,e.updateQueue=null,Xo.current=nI,t=n(r,i)}while(e.expirationTime===hn)}if(Xo.current=Pa,e=Oe!==null&&Oe.next!==null,hn=0,De=Oe=pe=null,Ra=!1,e)throw Error(T(300));return t}function Gr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return De===null?pe.memoizedState=De=t:De=De.next=t,De}function mi(){if(Oe===null){var t=pe.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=De===null?pe.memoizedState:De.next;if(e!==null)De=e,Oe=t;else{if(t===null)throw Error(T(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},De===null?pe.memoizedState=De=t:De=De.next=t}return De}function er(t,e){return typeof e=="function"?e(t):e}function So(t){var e=mi(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,l=i;do{var u=l.expirationTime;if(u<hn){var c={expirationTime:l.expirationTime,suspenseConfig:l.suspenseConfig,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,u>pe.expirationTime&&(pe.expirationTime=u,Tl(u))}else a!==null&&(a=a.next={expirationTime:1073741823,suspenseConfig:l.suspenseConfig,action:l.action,eagerReducer:l.eagerReducer,eagerState:l.eagerState,next:null}),wy(u,l.suspenseConfig),r=l.eagerReducer===t?l.eagerState:t(r,l.action);l=l.next}while(l!==null&&l!==i);a===null?s=r:a.next=o,ur(r,e.memoizedState)||(Et=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function Ao(t){var e=mi(),n=e.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ur(s,e.memoizedState)||(Et=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function gu(t){var e=Gr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:er,lastRenderedState:t},t=t.dispatch=ey.bind(null,pe,t),[e.memoizedState,t]}function Rc(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=pe.updateQueue,e===null?(e={lastEffect:null},pe.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Q_(){return mi().memoizedState}function Sc(t,e,n,r){var i=Gr();pe.effectTag|=t,i.memoizedState=Rc(1|e,n,void 0,r===void 0?null:r)}function ld(t,e,n,r){var i=mi();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&od(r,o.deps)){Rc(e,n,s,r);return}}pe.effectTag|=t,i.memoizedState=Rc(1|e,n,s,r)}function Tp(t,e){return Sc(516,4,t,e)}function Sa(t,e){return ld(516,4,t,e)}function Y_(t,e){return ld(4,2,t,e)}function X_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function J_(t,e,n){return n=n!=null?n.concat([t]):null,ld(4,2,X_.bind(null,e,t),n)}function ud(){}function Ip(t,e){return Gr().memoizedState=[t,e===void 0?null:e],t}function Aa(t,e){var n=mi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Z_(t,e){var n=mi();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&od(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function cd(t,e,n){var r=_l();Nn(98>r?98:r,function(){t(!0)}),Nn(97<r?97:r,function(){var i=at.suspense;at.suspense=e===void 0?null:e;try{t(!1),n()}finally{at.suspense=i}})}function ey(t,e,n){var r=At(),i=Ji.suspense;r=rr(r,t,i),i={expirationTime:r,suspenseConfig:i,action:n,eagerReducer:null,eagerState:null,next:null};var s=e.pending;if(s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i,s=t.alternate,t===pe||s!==null&&s===pe)Ra=!0,i.expirationTime=hn,pe.expirationTime=hn;else{if(t.expirationTime===0&&(s===null||s.expirationTime===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.eagerReducer=s,i.eagerState=a,ur(a,o))return}catch{}finally{}Tn(t,r)}}var Pa={readContext:lt,useCallback:Xe,useContext:Xe,useEffect:Xe,useImperativeHandle:Xe,useLayoutEffect:Xe,useMemo:Xe,useReducer:Xe,useRef:Xe,useState:Xe,useDebugValue:Xe,useResponder:Xe,useDeferredValue:Xe,useTransition:Xe},eI={readContext:lt,useCallback:Ip,useContext:lt,useEffect:Tp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Sc(4,2,X_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Sc(4,2,t,e)},useMemo:function(t,e){var n=Gr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Gr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=ey.bind(null,pe,t),[r.memoizedState,t]},useRef:function(t){var e=Gr();return t={current:t},e.memoizedState=t},useState:gu,useDebugValue:ud,useResponder:sd,useDeferredValue:function(t,e){var n=gu(t),r=n[0],i=n[1];return Tp(function(){var s=at.suspense;at.suspense=e===void 0?null:e;try{i(t)}finally{at.suspense=s}},[t,e]),r},useTransition:function(t){var e=gu(!1),n=e[0];return e=e[1],[Ip(cd.bind(null,e,t),[e,t]),n]}},tI={readContext:lt,useCallback:Aa,useContext:lt,useEffect:Sa,useImperativeHandle:J_,useLayoutEffect:Y_,useMemo:Z_,useReducer:So,useRef:Q_,useState:function(){return So(er)},useDebugValue:ud,useResponder:sd,useDeferredValue:function(t,e){var n=So(er),r=n[0],i=n[1];return Sa(function(){var s=at.suspense;at.suspense=e===void 0?null:e;try{i(t)}finally{at.suspense=s}},[t,e]),r},useTransition:function(t){var e=So(er),n=e[0];return e=e[1],[Aa(cd.bind(null,e,t),[e,t]),n]}},nI={readContext:lt,useCallback:Aa,useContext:lt,useEffect:Sa,useImperativeHandle:J_,useLayoutEffect:Y_,useMemo:Z_,useReducer:Ao,useRef:Q_,useState:function(){return Ao(er)},useDebugValue:ud,useResponder:sd,useDeferredValue:function(t,e){var n=Ao(er),r=n[0],i=n[1];return Sa(function(){var s=at.suspense;at.suspense=e===void 0?null:e;try{i(t)}finally{at.suspense=s}},[t,e]),r},useTransition:function(t){var e=Ao(er),n=e[0];return e=e[1],[Aa(cd.bind(null,e,t),[e,t]),n]}},Bt=null,dn=null,tr=!1;function ty(t,e){var n=wt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.effectTag=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function Rp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Ac(t){if(tr){var e=dn;if(e){var n=e;if(!Rp(t,e)){if(e=qr(n.nextSibling),!e||!Rp(t,e)){t.effectTag=t.effectTag&-1025|2,tr=!1,Bt=t;return}ty(Bt,n)}Bt=t,dn=qr(e.firstChild)}else t.effectTag=t.effectTag&-1025|2,tr=!1,Bt=t}}function Sp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Bt=t}function Po(t){if(t!==Bt)return!1;if(!tr)return Sp(t),tr=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!mc(e,t.memoizedProps))for(e=dn;e;)ty(t,e),e=qr(e.nextSibling);if(Sp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(T(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n===w_){if(e===0){dn=qr(t.nextSibling);break e}e--}else n!==E_&&n!==qh&&n!==Hh||e++}t=t.nextSibling}dn=null}}else dn=Bt?qr(t.stateNode.nextSibling):null;return!0}function _u(){dn=Bt=null,tr=!1}var rI=ft.ReactCurrentOwner,Et=!1;function Je(t,e,n,r){e.child=t===null?rd(e,null,n,r):ii(e,t.child,n,r)}function Ap(t,e,n,r,i){n=n.render;var s=e.ref;return Kr(e,i),r=ad(t,e,n,r,s,i),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.effectTag&=-517,t.expirationTime<=i&&(t.expirationTime=0),zt(t,e,i)):(e.effectTag|=1,Je(t,e,r,i),e.child)}function Pp(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!md(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,ny(t,e,o,r,i,s)):(t=ea(n.type,null,r,null,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,i<s&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:ds,n(i,r)&&t.ref===e.ref)?zt(t,e,s):(e.effectTag|=1,t=hr(o,r),t.ref=e.ref,t.return=e,e.child=t)}function ny(t,e,n,r,i,s){return t!==null&&ds(t.memoizedProps,r)&&t.ref===e.ref&&(Et=!1,i<s)?(e.expirationTime=t.expirationTime,zt(t,e,s)):Pc(t,e,n,r,s)}function ry(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.effectTag|=128)}function Pc(t,e,n,r,i){var s=Ke(n)?cr:Ue.current;return s=ri(e,s),Kr(e,i),n=ad(t,e,n,r,s,i),t!==null&&!Et?(e.updateQueue=t.updateQueue,e.effectTag&=-517,t.expirationTime<=i&&(t.expirationTime=0),zt(t,e,i)):(e.effectTag|=1,Je(t,e,n,i),e.child)}function Cp(t,e,n,r,i){if(Ke(n)){var s=!0;Go(e)}else s=!1;if(Kr(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),K_(e,n,r),Tc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=lt(u):(u=Ke(n)?cr:Ue.current,u=ri(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ep(e,o,r,u),nn=!1;var p=e.memoizedState;o.state=p,fs(e,r,o,i),l=e.memoizedState,a!==r||p!==l||qe.current||nn?(typeof c=="function"&&(Ta(e,n,c,r),l=e.memoizedState),(a=nn||vp(e,n,a,r,p,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.effectTag|=4)):(typeof o.componentDidMount=="function"&&(e.effectTag|=4),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.effectTag|=4),r=!1)}else o=e.stateNode,nd(t,e),a=e.memoizedProps,o.props=e.type===e.elementType?a:ct(e.type,a),l=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=lt(u):(u=Ke(n)?cr:Ue.current,u=ri(e,u)),c=n.getDerivedStateFromProps,(h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Ep(e,o,r,u),nn=!1,l=e.memoizedState,o.state=l,fs(e,r,o,i),p=e.memoizedState,a!==r||l!==p||qe.current||nn?(typeof c=="function"&&(Ta(e,n,c,r),p=e.memoizedState),(c=nn||vp(e,n,a,r,l,p,u))?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,p,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,p,u)),typeof o.componentDidUpdate=="function"&&(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.effectTag|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=256),e.memoizedProps=r,e.memoizedState=p),o.props=r,o.state=p,o.context=u,r=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&l===t.memoizedState||(e.effectTag|=256),r=!1);return Cc(t,e,n,r,s,i)}function Cc(t,e,n,r,i,s){ry(t,e);var o=(e.effectTag&64)!==0;if(!r&&!o)return i&&fp(e,n,!1),zt(t,e,s);r=e.stateNode,rI.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.effectTag|=1,t!==null&&o?(e.child=ii(e,t.child,null,s),e.child=ii(e,null,a,s)):Je(t,e,a,s),e.memoizedState=r.state,i&&fp(e,n,!0),e.child}function kp(t){var e=t.stateNode;e.pendingContext?dp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&dp(t,e.context,!1),Ic(t,e.containerInfo)}var yu={dehydrated:null,retryTime:0};function Np(t,e,n){var r=e.mode,i=e.pendingProps,s=re.current,o=!1,a;if((a=(e.effectTag&64)!==0)||(a=(s&2)!==0&&(t===null||t.memoizedState!==null)),a?(o=!0,e.effectTag&=-65):t!==null&&t.memoizedState===null||i.fallback===void 0||i.unstable_avoidThisFallback===!0||(s|=1),ue(re,s&1),t===null){if(i.fallback!==void 0&&Ac(e),o){if(o=i.fallback,i=fn(null,r,0,null),i.return=e,!(e.mode&2))for(t=e.memoizedState!==null?e.child.child:e.child,i.child=t;t!==null;)t.return=i,t=t.sibling;return n=fn(o,r,n,null),n.return=e,i.sibling=n,e.memoizedState=yu,e.child=i,n}return r=i.children,e.memoizedState=null,e.child=rd(e,null,r,n)}if(t.memoizedState!==null){if(t=t.child,r=t.sibling,o){if(i=i.fallback,n=hr(t,t.pendingProps),n.return=e,!(e.mode&2)&&(o=e.memoizedState!==null?e.child.child:e.child,o!==t.child))for(n.child=o;o!==null;)o.return=n,o=o.sibling;return r=hr(r,i),r.return=e,n.sibling=r,n.childExpirationTime=0,e.memoizedState=yu,e.child=n,r}return n=ii(e,t.child,i.children,n),e.memoizedState=null,e.child=n}if(t=t.child,o){if(o=i.fallback,i=fn(null,r,0,null),i.return=e,i.child=t,t!==null&&(t.return=i),!(e.mode&2))for(t=e.memoizedState!==null?e.child.child:e.child,i.child=t;t!==null;)t.return=i,t=t.sibling;return n=fn(o,r,n,null),n.return=e,i.sibling=n,n.effectTag|=2,i.childExpirationTime=0,e.memoizedState=yu,e.child=i,n}return e.memoizedState=null,e.child=ii(e,t,i.children,n)}function xp(t,e){t.expirationTime<e&&(t.expirationTime=e);var n=t.alternate;n!==null&&n.expirationTime<e&&(n.expirationTime=e),H_(t.return,e)}function vu(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailExpiration:0,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailExpiration=0,o.tailMode=i,o.lastEffect=s)}function Op(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Je(t,e,r.children,n),r=re.current,r&2)r=r&1|2,e.effectTag|=64;else{if(t!==null&&t.effectTag&64)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n);else if(t.tag===19)xp(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ue(re,r),!(e.mode&2))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ia(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),vu(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ia(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}vu(e,!0,n,null,s,e.lastEffect);break;case"together":vu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function zt(t,e,n){t!==null&&(e.dependencies=t.dependencies);var r=e.expirationTime;if(r!==0&&Tl(r),e.childExpirationTime<n)return null;if(t!==null&&e.child!==t.child)throw Error(T(153));if(e.child!==null){for(t=e.child,n=hr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=hr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}var iy,kc,sy,oy;iy=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};kc=function(){};sy=function(t,e,n,r,i){var s=t.memoizedProps;if(s!==r){var o=e.stateNode;switch(Kn(St.current),t=null,n){case"input":s=tc(o,s),r=tc(o,r),t=[];break;case"option":s=ic(o,s),r=ic(o,r),t=[];break;case"select":s=We({},s,{value:void 0}),r=We({},r,{value:void 0}),t=[];break;case"textarea":s=sc(o,s),r=sc(o,r),t=[];break;default:typeof s.onClick!="function"&&typeof r.onClick=="function"&&(o.onclick=ma)}hc(n,r);var a,l;n=null;for(a in s)if(!r.hasOwnProperty(a)&&s.hasOwnProperty(a)&&s[a]!=null)if(a==="style")for(l in o=s[a],o)o.hasOwnProperty(l)&&(n||(n={}),n[l]="");else a!=="dangerouslySetInnerHTML"&&a!=="children"&&a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ei.hasOwnProperty(a)?t||(t=[]):(t=t||[]).push(a,null));for(a in r){var u=r[a];if(o=s!=null?s[a]:void 0,r.hasOwnProperty(a)&&u!==o&&(u!=null||o!=null))if(a==="style")if(o){for(l in o)!o.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&o[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(t||(t=[]),t.push(a,n)),n=u;else a==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,o=o?o.__html:void 0,u!=null&&o!==u&&(t=t||[]).push(a,u)):a==="children"?o===u||typeof u!="string"&&typeof u!="number"||(t=t||[]).push(a,""+u):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&(ei.hasOwnProperty(a)?(u!=null&&Ut(i,a),t||o===u||(t=[])):(t=t||[]).push(a,u))}n&&(t=t||[]).push("style",n),i=t,(e.updateQueue=i)&&(e.effectTag|=4)}};oy=function(t,e,n,r){n!==r&&(e.effectTag|=4)};function Co(t,e){switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function iI(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Ke(e.type)&&ya(),null;case 3:return si(),ee(qe),ee(Ue),n=e.stateNode,n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),t!==null&&t.child!==null||!Po(e)||(e.effectTag|=4),kc(e),null;case 5:id(e),n=Kn(ms.current);var i=e.type;if(t!==null&&e.stateNode!=null)sy(t,e,i,r,n),t.ref!==e.ref&&(e.effectTag|=128);else{if(!r){if(e.stateNode===null)throw Error(T(166));return null}if(t=Kn(St.current),Po(e)){r=e.stateNode,i=e.type;var s=e.memoizedProps;switch(r[un]=e,r[ga]=s,i){case"iframe":case"object":case"embed":te("load",r);break;case"video":case"audio":for(t=0;t<Ui.length;t++)te(Ui[t],r);break;case"source":te("error",r);break;case"img":case"image":case"link":te("error",r),te("load",r);break;case"form":te("reset",r),te("submit",r);break;case"details":te("toggle",r);break;case"input":zf(r,s),te("invalid",r),Ut(n,"onChange");break;case"select":r._wrapperState={wasMultiple:!!s.multiple},te("invalid",r),Ut(n,"onChange");break;case"textarea":Hf(r,s),te("invalid",r),Ut(n,"onChange")}hc(i,s),t=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(t=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(t=["children",""+a]):ei.hasOwnProperty(o)&&a!=null&&Ut(n,o)}switch(i){case"input":Eo(r),Wf(r,s,!0);break;case"textarea":Eo(r),qf(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=ma)}n=t,e.updateQueue=n,n!==null&&(e.effectTag|=4)}else{switch(o=n.nodeType===9?n:n.ownerDocument,t===Jf&&(t=Zg(i)),t===Jf?i==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(i,{is:r.is}):(t=o.createElement(i),i==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,i),t[un]=e,t[ga]=r,iy(t,e,!1,!1),e.stateNode=t,o=dc(i,r),i){case"iframe":case"object":case"embed":te("load",t),a=r;break;case"video":case"audio":for(a=0;a<Ui.length;a++)te(Ui[a],t);a=r;break;case"source":te("error",t),a=r;break;case"img":case"image":case"link":te("error",t),te("load",t),a=r;break;case"form":te("reset",t),te("submit",t),a=r;break;case"details":te("toggle",t),a=r;break;case"input":zf(t,r),a=tc(t,r),te("invalid",t),Ut(n,"onChange");break;case"option":a=ic(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},a=We({},r,{value:void 0}),te("invalid",t),Ut(n,"onChange");break;case"textarea":Hf(t,r),a=sc(t,r),te("invalid",t),Ut(n,"onChange");break;default:a=r}hc(i,a);var l=a;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?y_(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&e_(t,u)):s==="children"?typeof u=="string"?(i!=="textarea"||u!=="")&&ls(t,u):typeof u=="number"&&ls(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ei.hasOwnProperty(s)?u!=null&&Ut(n,s):u!=null&&Vh(t,s,u,o))}switch(i){case"input":Eo(t),Wf(t,r,!1);break;case"textarea":Eo(t),qf(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Cn(r.value));break;case"select":t.multiple=!!r.multiple,n=r.value,n!=null?Hr(t,!!r.multiple,n,!1):r.defaultValue!=null&&Hr(t,!!r.multiple,r.defaultValue,!0);break;default:typeof a.onClick=="function"&&(t.onclick=ma)}T_(i,r)&&(e.effectTag|=4)}e.ref!==null&&(e.effectTag|=128)}return null;case 6:if(t&&e.stateNode!=null)oy(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(T(166));n=Kn(ms.current),Kn(St.current),Po(e)?(n=e.stateNode,r=e.memoizedProps,n[un]=e,n.nodeValue!==r&&(e.effectTag|=4)):(n=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),n[un]=e,e.stateNode=n)}return null;case 13:return ee(re),r=e.memoizedState,e.effectTag&64?(e.expirationTime=n,e):(n=r!==null,r=!1,t===null?e.memoizedProps.fallback!==void 0&&Po(e):(i=t.memoizedState,r=i!==null,n||i===null||(i=t.child.sibling,i!==null&&(s=e.firstEffect,s!==null?(e.firstEffect=i,i.nextEffect=s):(e.firstEffect=e.lastEffect=i,i.nextEffect=null),i.effectTag=8))),n&&!r&&e.mode&2&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||re.current&1?ye===nr&&(ye=Na):((ye===nr||ye===Na)&&(ye=vl),_s!==0&&et!==null&&(Yn(et,Ge),Ay(et,_s)))),(n||r)&&(e.effectTag|=4),null);case 4:return si(),kc(e),null;case 10:return ed(e),null;case 17:return Ke(e.type)&&ya(),null;case 19:if(ee(re),r=e.memoizedState,r===null)return null;if(i=(e.effectTag&64)!==0,s=r.rendering,s===null){if(i)Co(r,!1);else if(ye!==nr||t!==null&&t.effectTag&64)for(s=e.child;s!==null;){if(t=Ia(s),t!==null){for(e.effectTag|=64,Co(r,!1),i=t.updateQueue,i!==null&&(e.updateQueue=i,e.effectTag|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=e.child;r!==null;)i=r,s=n,i.effectTag&=2,i.nextEffect=null,i.firstEffect=null,i.lastEffect=null,t=i.alternate,t===null?(i.childExpirationTime=0,i.expirationTime=s,i.child=null,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null):(i.childExpirationTime=t.childExpirationTime,i.expirationTime=t.expirationTime,i.child=t.child,i.memoizedProps=t.memoizedProps,i.memoizedState=t.memoizedState,i.updateQueue=t.updateQueue,s=t.dependencies,i.dependencies=s===null?null:{expirationTime:s.expirationTime,firstContext:s.firstContext,responders:s.responders}),r=r.sibling;return ue(re,re.current&1|2),e.child}s=s.sibling}}else{if(!i)if(t=Ia(s),t!==null){if(e.effectTag|=64,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.effectTag|=4),Co(r,!0),r.tail===null&&r.tailMode==="hidden"&&!s.alternate)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*ot()-r.renderingStartTime>r.tailExpiration&&1<n&&(e.effectTag|=64,i=!0,Co(r,!1),e.expirationTime=e.childExpirationTime=n-1);r.isBackwards?(s.sibling=e.child,e.child=s):(n=r.last,n!==null?n.sibling=s:e.child=s,r.last=s)}return r.tail!==null?(r.tailExpiration===0&&(r.tailExpiration=ot()+500),n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=ot(),n.sibling=null,e=re.current,ue(re,i?e&1|2:e&1),n):null}throw Error(T(156,e.tag))}function sI(t){switch(t.tag){case 1:Ke(t.type)&&ya();var e=t.effectTag;return e&4096?(t.effectTag=e&-4097|64,t):null;case 3:if(si(),ee(qe),ee(Ue),e=t.effectTag,e&64)throw Error(T(285));return t.effectTag=e&-4097|64,t;case 5:return id(t),null;case 13:return ee(re),e=t.effectTag,e&4096?(t.effectTag=e&-4097|64,t):null;case 19:return ee(re),null;case 4:return si(),null;case 10:return ed(t),null;default:return null}}function hd(t,e){return{value:t,source:e,stack:bh(e)}}var oI=typeof WeakSet=="function"?WeakSet:Set;function Nc(t,e){var n=e.source,r=e.stack;r===null&&n!==null&&(r=bh(n)),n!==null&&Kt(n.type),e=e.value,t!==null&&t.tag===1&&Kt(t.type);try{console.error(e)}catch(i){setTimeout(function(){throw i})}}function aI(t,e){try{e.props=t.memoizedProps,e.state=t.memoizedState,e.componentWillUnmount()}catch(n){ir(t,n)}}function Dp(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){ir(t,n)}else e.current=null}function lI(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.effectTag&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:ct(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(T(163))}function ay(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.destroy;n.destroy=void 0,r!==void 0&&r()}n=n.next}while(n!==e)}}function ly(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function uI(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:ly(3,n);return;case 1:if(t=n.stateNode,n.effectTag&4)if(e===null)t.componentDidMount();else{var r=n.elementType===n.type?e.memoizedProps:ct(n.type,e.memoizedProps);t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate)}e=n.updateQueue,e!==null&&yp(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}yp(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.effectTag&4&&T_(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&p_(n))));return;case 19:case 17:case 20:case 21:return}throw Error(T(163))}function Vp(t,e,n){switch(typeof Uc=="function"&&Uc(e),e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var r=t.next;Nn(97<n?97:n,function(){var i=r;do{var s=i.destroy;if(s!==void 0){var o=e;try{s()}catch(a){ir(o,a)}}i=i.next}while(i!==r)})}break;case 1:Dp(e),n=e.stateNode,typeof n.componentWillUnmount=="function"&&aI(e,n);break;case 5:Dp(e);break;case 4:cy(t,e,n)}}function uy(t){var e=t.alternate;t.return=null,t.child=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.alternate=null,t.firstEffect=null,t.lastEffect=null,t.pendingProps=null,t.memoizedProps=null,t.stateNode=null,e!==null&&uy(e)}function Lp(t){return t.tag===5||t.tag===3||t.tag===4}function Mp(t){e:{for(var e=t.return;e!==null;){if(Lp(e)){var n=e;break e}e=e.return}throw Error(T(160))}switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(T(161))}n.effectTag&16&&(ls(e,""),n.effectTag&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Lp(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.effectTag&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.effectTag&2)){n=n.stateNode;break e}}r?xc(t,n,e):Oc(t,n,e)}function xc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=ma));else if(r!==4&&(t=t.child,t!==null))for(xc(t,e,n),t=t.sibling;t!==null;)xc(t,e,n),t=t.sibling}function Oc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Oc(t,e,n),t=t.sibling;t!==null;)Oc(t,e,n),t=t.sibling}function cy(t,e,n){for(var r=e,i=!1,s,o;;){if(!i){i=r.return;e:for(;;){if(i===null)throw Error(T(160));switch(s=i.stateNode,i.tag){case 5:o=!1;break e;case 3:s=s.containerInfo,o=!0;break e;case 4:s=s.containerInfo,o=!0;break e}i=i.return}i=!0}if(r.tag===5||r.tag===6){e:for(var a=t,l=r,u=n,c=l;;)if(Vp(a,c,u),c.child!==null&&c.tag!==4)c.child.return=c,c=c.child;else{if(c===l)break e;for(;c.sibling===null;){if(c.return===null||c.return===l)break e;c=c.return}c.sibling.return=c.return,c=c.sibling}o?(a=s,l=r.stateNode,a.nodeType===8?a.parentNode.removeChild(l):a.removeChild(l)):s.removeChild(r.stateNode)}else if(r.tag===4){if(r.child!==null){s=r.stateNode.containerInfo,o=!0,r.child.return=r,r=r.child;continue}}else if(Vp(t,r,n),r.child!==null){r.child.return=r,r=r.child;continue}if(r===e)break;for(;r.sibling===null;){if(r.return===null||r.return===e)return;r=r.return,r.tag===4&&(i=!1)}r.sibling.return=r.return,r=r.sibling}}function Eu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:ay(3,e);return;case 1:return;case 5:var n=e.stateNode;if(n!=null){var r=e.memoizedProps,i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[ga]=r,t==="input"&&r.type==="radio"&&r.name!=null&&Yg(n,r),dc(t,i),e=dc(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?y_(n,a):o==="dangerouslySetInnerHTML"?e_(n,a):o==="children"?ls(n,a):Vh(n,o,a,e)}switch(t){case"input":nc(n,r);break;case"textarea":Xg(n,r);break;case"select":e=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,t=r.value,t!=null?Hr(n,!!r.multiple,t,!1):e!==!!r.multiple&&(r.defaultValue!=null?Hr(n,!!r.multiple,r.defaultValue,!0):Hr(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(T(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:e=e.stateNode,e.hydrate&&(e.hydrate=!1,p_(e.containerInfo));return;case 12:return;case 13:if(n=e,e.memoizedState===null?r=!1:(r=!0,n=e.child,pd=ot()),n!==null)e:for(t=n;;){if(t.tag===5)s=t.stateNode,r?(s=s.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(s=t.stateNode,i=t.memoizedProps.style,i=i!=null&&i.hasOwnProperty("display")?i.display:null,s.style.display=__("display",i));else if(t.tag===6)t.stateNode.nodeValue=r?"":t.memoizedProps;else if(t.tag===13&&t.memoizedState!==null&&t.memoizedState.dehydrated===null){s=t.child.sibling,s.return=t,t=s;continue}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}bp(e);return;case 19:bp(e);return;case 17:return}throw Error(T(163))}function bp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new oI),e.forEach(function(r){var i=vI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}var cI=typeof WeakMap=="function"?WeakMap:Map;function hy(t,e,n){n=vn(n,null),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Da||(Da=!0,Dc=r),Nc(t,e)},n}function dy(t,e,n){n=vn(n,null),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Nc(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(wn===null?wn=new Set([this]):wn.add(this),Nc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var hI=Math.ceil,Ca=ft.ReactCurrentDispatcher,fy=ft.ReactCurrentOwner,ve=0,dd=8,pt=16,Ot=32,nr=0,ka=1,py=2,Na=3,vl=4,fd=5,$=ve,et=null,z=null,Ge=0,ye=nr,El=null,jt=1073741823,gs=1073741823,xa=null,_s=0,Oa=!1,pd=0,my=500,N=null,Da=!1,Dc=null,wn=null,Va=!1,Zi=null,$i=90,Gn=null,es=0,Vc=null,Jo=0;function At(){return($&(pt|Ot))!==ve?1073741821-(ot()/10|0):Jo!==0?Jo:Jo=1073741821-(ot()/10|0)}function rr(t,e,n){if(e=e.mode,!(e&2))return 1073741823;var r=_l();if(!(e&4))return r===99?1073741823:1073741822;if(($&pt)!==ve)return Ge;if(n!==null)t=Yo(t,n.timeoutMs|0||5e3,250);else switch(r){case 99:t=1073741823;break;case 98:t=Yo(t,150,100);break;case 97:case 96:t=Yo(t,5e3,250);break;case 95:t=2;break;default:throw Error(T(326))}return et!==null&&t===Ge&&--t,t}function Tn(t,e){if(50<es)throw es=0,Vc=null,Error(T(185));if(t=wl(t,e),t!==null){var n=_l();e===1073741823?($&dd)!==ve&&($&(pt|Ot))===ve?Lc(t):(tt(t),$===ve&&Lt()):tt(t),($&4)===ve||n!==98&&n!==99||(Gn===null?Gn=new Map([[t,e]]):(n=Gn.get(t),(n===void 0||n>e)&&Gn.set(t,e)))}}function wl(t,e){t.expirationTime<e&&(t.expirationTime=e);var n=t.alternate;n!==null&&n.expirationTime<e&&(n.expirationTime=e);var r=t.return,i=null;if(r===null&&t.tag===3)i=t.stateNode;else for(;r!==null;){if(n=r.alternate,r.childExpirationTime<e&&(r.childExpirationTime=e),n!==null&&n.childExpirationTime<e&&(n.childExpirationTime=e),r.return===null&&r.tag===3){i=r.stateNode;break}r=r.return}return i!==null&&(et===i&&(Tl(e),ye===vl&&Yn(i,Ge)),Ay(i,e)),i}function Zo(t){var e=t.lastExpiredTime;if(e!==0||(e=t.firstPendingTime,!Sy(t,e)))return e;var n=t.lastPingedTime;return t=t.nextKnownPendingLevel,t=n>t?n:t,2>=t&&e!==t?0:t}function tt(t){if(t.lastExpiredTime!==0)t.callbackExpirationTime=1073741823,t.callbackPriority=99,t.callbackNode=gp(Lc.bind(null,t));else{var e=Zo(t),n=t.callbackNode;if(e===0)n!==null&&(t.callbackNode=null,t.callbackExpirationTime=0,t.callbackPriority=90);else{var r=At();if(e===1073741823?r=99:e===1||e===2?r=95:(r=10*(1073741821-e)-10*(1073741821-r),r=0>=r?99:250>=r?98:5250>=r?97:95),n!==null){var i=t.callbackPriority;if(t.callbackExpirationTime===e&&i>=r)return;n!==j_&&M_(n)}t.callbackExpirationTime=e,t.callbackPriority=r,e=e===1073741823?gp(Lc.bind(null,t)):z_(r,gy.bind(null,t),{timeout:10*(1073741821-e)-ot()}),t.callbackNode=e}}}function gy(t,e){if(Jo=0,e)return e=At(),Fc(t,e),tt(t),null;var n=Zo(t);if(n!==0){if(e=t.callbackNode,($&(pt|Ot))!==ve)throw Error(T(327));if(gi(),t===et&&n===Ge||Qn(t,n),z!==null){var r=$;$|=pt;var i=Ey();do try{pI();break}catch(a){vy(t,a)}while(1);if(Zh(),$=r,Ca.current=i,ye===ka)throw e=El,Qn(t,n),Yn(t,n),tt(t),e;if(z===null)switch(i=t.finishedWork=t.current.alternate,t.finishedExpirationTime=n,r=ye,et=null,r){case nr:case ka:throw Error(T(345));case py:Fc(t,2<n?2:n);break;case Na:if(Yn(t,n),r=t.lastSuspendedTime,n===r&&(t.nextKnownPendingLevel=Mc(i)),jt===1073741823&&(i=pd+my-ot(),10<i)){if(Oa){var s=t.lastPingedTime;if(s===0||s>=n){t.lastPingedTime=n,Qn(t,n);break}}if(s=Zo(t),s!==0&&s!==n)break;if(r!==0&&r!==n){t.lastPingedTime=r;break}t.timeoutHandle=pu(Bn.bind(null,t),i);break}Bn(t);break;case vl:if(Yn(t,n),r=t.lastSuspendedTime,n===r&&(t.nextKnownPendingLevel=Mc(i)),Oa&&(i=t.lastPingedTime,i===0||i>=n)){t.lastPingedTime=n,Qn(t,n);break}if(i=Zo(t),i!==0&&i!==n)break;if(r!==0&&r!==n){t.lastPingedTime=r;break}if(gs!==1073741823?r=10*(1073741821-gs)-ot():jt===1073741823?r=0:(r=10*(1073741821-jt)-5e3,i=ot(),n=10*(1073741821-n)-i,r=i-r,0>r&&(r=0),r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*hI(r/1960))-r,n<r&&(r=n)),10<r){t.timeoutHandle=pu(Bn.bind(null,t),r);break}Bn(t);break;case fd:if(jt!==1073741823&&xa!==null){s=jt;var o=xa;if(r=o.busyMinDurationMs|0,0>=r?r=0:(i=o.busyDelayMs|0,s=ot()-(10*(1073741821-s)-(o.timeoutMs|0||5e3)),r=s<=i?0:i+r-s),10<r){Yn(t,n),t.timeoutHandle=pu(Bn.bind(null,t),r);break}}Bn(t);break;default:throw Error(T(329))}if(tt(t),t.callbackNode===e)return gy.bind(null,t)}}return null}function Lc(t){var e=t.lastExpiredTime;if(e=e!==0?e:1073741823,($&(pt|Ot))!==ve)throw Error(T(327));if(gi(),t===et&&e===Ge||Qn(t,e),z!==null){var n=$;$|=pt;var r=Ey();do try{fI();break}catch(i){vy(t,i)}while(1);if(Zh(),$=n,Ca.current=r,ye===ka)throw n=El,Qn(t,e),Yn(t,e),tt(t),n;if(z!==null)throw Error(T(261));t.finishedWork=t.current.alternate,t.finishedExpirationTime=e,et=null,Bn(t),tt(t)}return null}function dI(){if(Gn!==null){var t=Gn;Gn=null,t.forEach(function(e,n){Fc(n,e),tt(n)}),Lt()}}function _y(t,e){var n=$;$|=1;try{return t(e)}finally{$=n,$===ve&&Lt()}}function yy(t,e){var n=$;$&=-2,$|=dd;try{return t(e)}finally{$=n,$===ve&&Lt()}}function Qn(t,e){t.finishedWork=null,t.finishedExpirationTime=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,h0(n)),z!==null)for(n=z.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&ya();break;case 3:si(),ee(qe),ee(Ue);break;case 5:id(r);break;case 4:si();break;case 13:ee(re);break;case 19:ee(re);break;case 10:ed(r)}n=n.return}et=t,z=hr(t.current,null),Ge=e,ye=nr,El=null,gs=jt=1073741823,xa=null,_s=0,Oa=!1}function vy(t,e){do{try{if(Zh(),Xo.current=Pa,Ra)for(var n=pe.memoizedState;n!==null;){var r=n.queue;r!==null&&(r.pending=null),n=n.next}if(hn=0,De=Oe=pe=null,Ra=!1,z===null||z.return===null)return ye=ka,El=e,z=null;e:{var i=t,s=z.return,o=z,a=e;if(e=Ge,o.effectTag|=2048,o.firstEffect=o.lastEffect=null,a!==null&&typeof a=="object"&&typeof a.then=="function"){var l=a;if(!(o.mode&2)){var u=o.alternate;u?(o.updateQueue=u.updateQueue,o.memoizedState=u.memoizedState,o.expirationTime=u.expirationTime):(o.updateQueue=null,o.memoizedState=null)}var c=(re.current&1)!==0,h=s;do{var p;if(p=h.tag===13){var g=h.memoizedState;if(g!==null)p=g.dehydrated!==null;else{var I=h.memoizedProps;p=I.fallback===void 0?!1:I.unstable_avoidThisFallback!==!0?!0:!c}}if(p){var w=h.updateQueue;if(w===null){var d=new Set;d.add(l),h.updateQueue=d}else w.add(l);if(!(h.mode&2)){if(h.effectTag|=64,o.effectTag&=-2981,o.tag===1)if(o.alternate===null)o.tag=17;else{var f=vn(1073741823,null);f.tag=2,En(o,f)}o.expirationTime=1073741823;break e}a=void 0,o=e;var m=i.pingCache;if(m===null?(m=i.pingCache=new cI,a=new Set,m.set(l,a)):(a=m.get(l),a===void 0&&(a=new Set,m.set(l,a))),!a.has(o)){a.add(o);var _=yI.bind(null,i,l,o);l.then(_,_)}h.effectTag|=4096,h.expirationTime=e;break e}h=h.return}while(h!==null);a=Error((Kt(o.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`+bh(o))}ye!==fd&&(ye=py),a=hd(a,o),h=s;do{switch(h.tag){case 3:l=a,h.effectTag|=4096,h.expirationTime=e;var y=hy(h,l,e);_p(h,y);break e;case 1:l=a;var R=h.type,P=h.stateNode;if(!(h.effectTag&64)&&(typeof R.getDerivedStateFromError=="function"||P!==null&&typeof P.componentDidCatch=="function"&&(wn===null||!wn.has(P)))){h.effectTag|=4096,h.expirationTime=e;var L=dy(h,l,e);_p(h,L);break e}}h=h.return}while(h!==null)}z=Iy(z)}catch(M){e=M;continue}break}while(1)}function Ey(){var t=Ca.current;return Ca.current=Pa,t===null?Pa:t}function wy(t,e){t<jt&&2<t&&(jt=t),e!==null&&t<gs&&2<t&&(gs=t,xa=e)}function Tl(t){t>_s&&(_s=t)}function fI(){for(;z!==null;)z=Ty(z)}function pI(){for(;z!==null&&!J0();)z=Ty(z)}function Ty(t){var e=Ry(t.alternate,t,Ge);return t.memoizedProps=t.pendingProps,e===null&&(e=Iy(t)),fy.current=null,e}function Iy(t){z=t;do{var e=z.alternate;if(t=z.return,z.effectTag&2048){if(e=sI(z),e!==null)return e.effectTag&=2047,e;t!==null&&(t.firstEffect=t.lastEffect=null,t.effectTag|=2048)}else{if(e=iI(e,z,Ge),Ge===1||z.childExpirationTime!==1){for(var n=0,r=z.child;r!==null;){var i=r.expirationTime,s=r.childExpirationTime;i>n&&(n=i),s>n&&(n=s),r=r.sibling}z.childExpirationTime=n}if(e!==null)return e;t!==null&&!(t.effectTag&2048)&&(t.firstEffect===null&&(t.firstEffect=z.firstEffect),z.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=z.firstEffect),t.lastEffect=z.lastEffect),1<z.effectTag&&(t.lastEffect!==null?t.lastEffect.nextEffect=z:t.firstEffect=z,t.lastEffect=z))}if(e=z.sibling,e!==null)return e;z=t}while(z!==null);return ye===nr&&(ye=fd),null}function Mc(t){var e=t.expirationTime;return t=t.childExpirationTime,e>t?e:t}function Bn(t){var e=_l();return Nn(99,mI.bind(null,t,e)),null}function mI(t,e){do gi();while(Zi!==null);if(($&(pt|Ot))!==ve)throw Error(T(327));var n=t.finishedWork,r=t.finishedExpirationTime;if(n===null)return null;if(t.finishedWork=null,t.finishedExpirationTime=0,n===t.current)throw Error(T(177));t.callbackNode=null,t.callbackExpirationTime=0,t.callbackPriority=90,t.nextKnownPendingLevel=0;var i=Mc(n);if(t.firstPendingTime=i,r<=t.lastSuspendedTime?t.firstSuspendedTime=t.lastSuspendedTime=t.nextKnownPendingLevel=0:r<=t.firstSuspendedTime&&(t.firstSuspendedTime=r-1),r<=t.lastPingedTime&&(t.lastPingedTime=0),r<=t.lastExpiredTime&&(t.lastExpiredTime=0),t===et&&(z=et=null,Ge=0),1<n.effectTag?n.lastEffect!==null?(n.lastEffect.nextEffect=n,i=n.firstEffect):i=n:i=n.firstEffect,i!==null){var s=$;$|=Ot,fy.current=null,du=Wo;var o=tp();if(pc(o)){if("selectionStart"in o)var a={start:o.selectionStart,end:o.selectionEnd};else e:{a=(a=o.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var u=l.anchorOffset,c=l.focusNode;l=l.focusOffset;try{a.nodeType,c.nodeType}catch{a=null;break e}var h=0,p=-1,g=-1,I=0,w=0,d=o,f=null;t:for(;;){for(var m;d!==a||u!==0&&d.nodeType!==3||(p=h+u),d!==c||l!==0&&d.nodeType!==3||(g=h+l),d.nodeType===3&&(h+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===o)break t;if(f===a&&++I===u&&(p=h),f===c&&++w===l&&(g=h),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}a=p===-1||g===-1?null:{start:p,end:g}}else a=null}a=a||{start:0,end:0}}else a=null;fu={activeElementDetached:null,focusedElem:o,selectionRange:a},Wo=!1,N=i;do try{gI()}catch(O){if(N===null)throw Error(T(330));ir(N,O),N=N.nextEffect}while(N!==null);N=i;do try{for(o=t,a=e;N!==null;){var _=N.effectTag;if(_&16&&ls(N.stateNode,""),_&128){var y=N.alternate;if(y!==null){var R=y.ref;R!==null&&(typeof R=="function"?R(null):R.current=null)}}switch(_&1038){case 2:Mp(N),N.effectTag&=-3;break;case 6:Mp(N),N.effectTag&=-3,Eu(N.alternate,N);break;case 1024:N.effectTag&=-1025;break;case 1028:N.effectTag&=-1025,Eu(N.alternate,N);break;case 4:Eu(N.alternate,N);break;case 8:u=N,cy(o,u,a),uy(u)}N=N.nextEffect}}catch(O){if(N===null)throw Error(T(330));ir(N,O),N=N.nextEffect}while(N!==null);if(R=fu,y=tp(),_=R.focusedElem,a=R.selectionRange,y!==_&&_&&_.ownerDocument&&v_(_.ownerDocument.documentElement,_)){for(a!==null&&pc(_)&&(y=a.start,R=a.end,R===void 0&&(R=y),"selectionStart"in _?(_.selectionStart=y,_.selectionEnd=Math.min(R,_.value.length)):(R=(y=_.ownerDocument||document)&&y.defaultView||window,R.getSelection&&(R=R.getSelection(),u=_.textContent.length,o=Math.min(a.start,u),a=a.end===void 0?o:Math.min(a.end,u),!R.extend&&o>a&&(u=a,a=o,o=u),u=ep(_,o),c=ep(_,a),u&&c&&(R.rangeCount!==1||R.anchorNode!==u.node||R.anchorOffset!==u.offset||R.focusNode!==c.node||R.focusOffset!==c.offset)&&(y=y.createRange(),y.setStart(u.node,u.offset),R.removeAllRanges(),o>a?(R.addRange(y),R.extend(c.node,c.offset)):(y.setEnd(c.node,c.offset),R.addRange(y)))))),y=[],R=_;R=R.parentNode;)R.nodeType===1&&y.push({element:R,left:R.scrollLeft,top:R.scrollTop});for(typeof _.focus=="function"&&_.focus(),_=0;_<y.length;_++)R=y[_],R.element.scrollLeft=R.left,R.element.scrollTop=R.top}Wo=!!du,fu=du=null,t.current=n,N=i;do try{for(_=t;N!==null;){var P=N.effectTag;if(P&36&&uI(_,N.alternate,N),P&128){y=void 0;var L=N.ref;if(L!==null){var M=N.stateNode;switch(N.tag){case 5:y=M;break;default:y=M}typeof L=="function"?L(y):L.current=y}}N=N.nextEffect}}catch(O){if(N===null)throw Error(T(330));ir(N,O),N=N.nextEffect}while(N!==null);N=null,Z0(),$=s}else t.current=n;if(Va)Va=!1,Zi=t,$i=e;else for(N=i;N!==null;)e=N.nextEffect,N.nextEffect=null,N=e;if(e=t.firstPendingTime,e===0&&(wn=null),e===1073741823?t===Vc?es++:(es=0,Vc=t):es=0,typeof bc=="function"&&bc(n.stateNode,r),tt(t),Da)throw Da=!1,t=Dc,Dc=null,t;return($&dd)!==ve||Lt(),null}function gI(){for(;N!==null;){var t=N.effectTag;t&256&&lI(N.alternate,N),!(t&512)||Va||(Va=!0,z_(97,function(){return gi(),null})),N=N.nextEffect}}function gi(){if($i!==90){var t=97<$i?97:$i;return $i=90,Nn(t,_I)}}function _I(){if(Zi===null)return!1;var t=Zi;if(Zi=null,($&(pt|Ot))!==ve)throw Error(T(331));var e=$;for($|=Ot,t=t.current.firstEffect;t!==null;){try{var n=t;if(n.effectTag&512)switch(n.tag){case 0:case 11:case 15:case 22:ay(5,n),ly(5,n)}}catch(r){if(t===null)throw Error(T(330));ir(t,r)}n=t.nextEffect,t.nextEffect=null,t=n}return $=e,Lt(),!0}function Up(t,e,n){e=hd(n,e),e=hy(t,e,1073741823),En(t,e),t=wl(t,1073741823),t!==null&&tt(t)}function ir(t,e){if(t.tag===3)Up(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Up(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(wn===null||!wn.has(r))){t=hd(e,t),t=dy(n,t,1073741823),En(n,t),n=wl(n,1073741823),n!==null&&tt(n);break}}n=n.return}}function yI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),et===t&&Ge===n?ye===vl||ye===Na&&jt===1073741823&&ot()-pd<my?Qn(t,Ge):Oa=!0:Sy(t,n)&&(e=t.lastPingedTime,e!==0&&e<n||(t.lastPingedTime=n,tt(t)))}function vI(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=At(),e=rr(e,t,null)),t=wl(t,e),t!==null&&tt(t)}var Ry;Ry=function(t,e,n){var r=e.expirationTime;if(t!==null){var i=e.pendingProps;if(t.memoizedProps!==i||qe.current)Et=!0;else{if(r<n){switch(Et=!1,e.tag){case 3:kp(e),_u();break;case 5:if(wp(e),e.mode&4&&n!==1&&i.hidden)return e.expirationTime=e.childExpirationTime=1,null;break;case 1:Ke(e.type)&&Go(e);break;case 4:Ic(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value,i=e.type._context,ue(va,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return r=e.child.childExpirationTime,r!==0&&r>=n?Np(t,e,n):(ue(re,re.current&1),e=zt(t,e,n),e!==null?e.sibling:null);ue(re,re.current&1);break;case 19:if(r=e.childExpirationTime>=n,t.effectTag&64){if(r)return Op(t,e,n);e.effectTag|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null),ue(re,re.current),!r)return null}return zt(t,e,n)}Et=!1}}else Et=!1;switch(e.expirationTime=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),t=e.pendingProps,i=ri(e,Ue.current),Kr(e,n),i=ad(null,e,r,t,i,n),e.effectTag|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ke(r)){var s=!0;Go(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,td(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ta(e,r,o,t),i.updater=yl,e.stateNode=i,i._reactInternalFiber=e,Tc(e,r,t,n),e=Cc(null,e,r,!0,s,n)}else e.tag=0,Je(null,e,i,n),e=e.child;return e;case 16:e:{if(i=e.elementType,t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),t=e.pendingProps,GT(i),i._status!==1)throw i._result;switch(i=i._result,e.type=i,s=e.tag=TI(i),t=ct(i,t),s){case 0:e=Pc(null,e,i,t,n);break e;case 1:e=Cp(null,e,i,t,n);break e;case 11:e=Ap(null,e,i,t,n);break e;case 14:e=Pp(null,e,i,ct(i.type,t),r,n);break e}throw Error(T(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Pc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Cp(t,e,r,i,n);case 3:if(kp(e),r=e.updateQueue,t===null||r===null)throw Error(T(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,nd(t,e),fs(e,r,null,n),r=e.memoizedState.element,r===i)_u(),e=zt(t,e,n);else{if((i=e.stateNode.hydrate)&&(dn=qr(e.stateNode.containerInfo.firstChild),Bt=e,i=tr=!0),i)for(n=rd(e,null,r,n),e.child=n;n;)n.effectTag=n.effectTag&-3|1024,n=n.sibling;else Je(t,e,r,n),_u();e=e.child}return e;case 5:return wp(e),t===null&&Ac(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,mc(r,i)?o=null:s!==null&&mc(r,s)&&(e.effectTag|=16),ry(t,e),e.mode&4&&n!==1&&i.hidden?(e.expirationTime=e.childExpirationTime=1,e=null):(Je(t,e,o,n),e=e.child),e;case 6:return t===null&&Ac(e),null;case 13:return Np(t,e,n);case 4:return Ic(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ii(e,null,r,n):Je(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),Ap(t,e,r,i,n);case 7:return Je(t,e,e.pendingProps,n),e.child;case 8:return Je(t,e,e.pendingProps.children,n),e.child;case 12:return Je(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(ue(va,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=ur(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!qe.current){e=zt(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var l=a.dependencies;if(l!==null){o=a.child;for(var u=l.firstContext;u!==null;){if(u.context===r&&u.observedBits&s){a.tag===1&&(u=vn(n,null),u.tag=2,En(a,u)),a.expirationTime<n&&(a.expirationTime=n),u=a.alternate,u!==null&&u.expirationTime<n&&(u.expirationTime=n),H_(a.return,n),l.expirationTime<n&&(l.expirationTime=n);break}u=u.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Je(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,Kr(e,n),i=lt(i,s.unstable_observedBits),r=r(i),e.effectTag|=1,Je(t,e,r,n),e.child;case 14:return i=e.type,s=ct(i,e.pendingProps),s=ct(i.type,s),Pp(t,e,i,s,r,n);case 15:return ny(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ct(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.effectTag|=2),e.tag=1,Ke(r)?(t=!0,Go(e)):t=!1,Kr(e,n),K_(e,r,i),Tc(e,r,i,n),Cc(null,e,r,!0,t,n);case 19:return Op(t,e,n)}throw Error(T(156,e.tag))};var bc=null,Uc=null;function EI(t){if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u")return!1;var e=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(e.isDisabled||!e.supportsFiber)return!0;try{var n=e.inject(t);bc=function(r){try{e.onCommitFiberRoot(n,r,void 0,(r.current.effectTag&64)===64)}catch{}},Uc=function(r){try{e.onCommitFiberUnmount(n,r)}catch{}}}catch{}return!0}function wI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.effectTag=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childExpirationTime=this.expirationTime=0,this.alternate=null}function wt(t,e,n,r){return new wI(t,e,n,r)}function md(t){return t=t.prototype,!(!t||!t.isReactComponent)}function TI(t){if(typeof t=="function")return md(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Lh)return 11;if(t===Mh)return 14}return 2}function hr(t,e){var n=t.alternate;return n===null?(n=wt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.effectTag=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childExpirationTime=t.childExpirationTime,n.expirationTime=t.expirationTime,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{expirationTime:e.expirationTime,firstContext:e.firstContext,responders:e.responders},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ea(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")md(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Hn:return fn(n.children,i,s,e);case KT:o=8,i|=7;break;case zg:o=8,i|=1;break;case jo:return t=wt(12,n,e,i|8),t.elementType=jo,t.type=jo,t.expirationTime=s,t;case Bo:return t=wt(13,n,e,i),t.type=Bo,t.elementType=Bo,t.expirationTime=s,t;case ec:return t=wt(19,n,e,i),t.elementType=ec,t.expirationTime=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Wg:o=10;break e;case Hg:o=9;break e;case Lh:o=11;break e;case Mh:o=14;break e;case qg:o=16,r=null;break e;case Kg:o=22;break e}throw Error(T(130,t==null?t:typeof t,""))}return e=wt(o,n,e,i),e.elementType=t,e.type=r,e.expirationTime=s,e}function fn(t,e,n,r){return t=wt(7,t,r,e),t.expirationTime=n,t}function wu(t,e,n){return t=wt(6,t,null,e),t.expirationTime=n,t}function Tu(t,e,n){return e=wt(4,t.children!==null?t.children:[],t.key,e),e.expirationTime=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function II(t,e,n){this.tag=e,this.current=null,this.containerInfo=t,this.pingCache=this.pendingChildren=null,this.finishedExpirationTime=0,this.finishedWork=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=90,this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0}function Sy(t,e){var n=t.firstSuspendedTime;return t=t.lastSuspendedTime,n!==0&&n>=e&&t<=e}function Yn(t,e){var n=t.firstSuspendedTime,r=t.lastSuspendedTime;n<e&&(t.firstSuspendedTime=e),(r>e||n===0)&&(t.lastSuspendedTime=e),e<=t.lastPingedTime&&(t.lastPingedTime=0),e<=t.lastExpiredTime&&(t.lastExpiredTime=0)}function Ay(t,e){e>t.firstPendingTime&&(t.firstPendingTime=e);var n=t.firstSuspendedTime;n!==0&&(e>=n?t.firstSuspendedTime=t.lastSuspendedTime=t.nextKnownPendingLevel=0:e>=t.lastSuspendedTime&&(t.lastSuspendedTime=e+1),e>t.nextKnownPendingLevel&&(t.nextKnownPendingLevel=e))}function Fc(t,e){var n=t.lastExpiredTime;(n===0||n>e)&&(t.lastExpiredTime=e)}function La(t,e,n,r){var i=e.current,s=At(),o=Ji.suspense;s=rr(s,i,o);e:if(n){n=n._reactInternalFiber;t:{if(Er(n)!==n||n.tag!==1)throw Error(T(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Ke(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(T(171))}if(n.tag===1){var l=n.type;if(Ke(l)){n=L_(n,l,a);break e}}n=a}else n=kn;return e.context===null?e.context=n:e.pendingContext=n,e=vn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),En(i,e),Tn(i,s),s}function Iu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Fp(t,e){t=t.memoizedState,t!==null&&t.dehydrated!==null&&t.retryTime<e&&(t.retryTime=e)}function gd(t,e){Fp(t,e),(t=t.alternate)&&Fp(t,e)}function _d(t,e,n){n=n!=null&&n.hydrate===!0;var r=new II(t,e,n),i=wt(3,null,null,e===2?7:e===1?3:0);r.current=i,i.stateNode=r,td(i),t[js]=r.current,n&&e!==0&&e0(t,t.nodeType===9?t:t.ownerDocument),this._internalRoot=r}_d.prototype.render=function(t){La(t,this._internalRoot,null,null)};_d.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;La(null,t,null,function(){e[js]=null})};function Ks(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function RI(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new _d(t,0,e?{hydrate:!0}:void 0)}function Il(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var u=Iu(o);a.call(u)}}La(e,o,t,i)}else{if(s=n._reactRootContainer=RI(n,r),o=s._internalRoot,typeof i=="function"){var l=i;i=function(){var u=Iu(o);l.call(u)}}yy(function(){La(e,o,t,i)})}return Iu(o)}function SI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Lr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}d_=function(t){if(t.tag===13){var e=Yo(At(),150,100);Tn(t,e),gd(t,e)}};jh=function(t){t.tag===13&&(Tn(t,3),gd(t,3))};f_=function(t){if(t.tag===13){var e=At();e=rr(e,t,null),Tn(t,e),gd(t,e)}};Zu=function(t,e,n){switch(e){case"input":if(nc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Gh(r);if(!i)throw Error(T(90));Qg(r),nc(r,i)}}}break;case"textarea":Xg(t,n);break;case"select":e=n.value,e!=null&&Hr(t,!!n.multiple,e,!1)}};kh=_y;$g=function(t,e,n,r,i){var s=$;$|=4;try{return Nn(98,t.bind(null,e,n,r,i))}finally{$=s,$===ve&&Lt()}};Nh=function(){($&(1|pt|Ot))===ve&&(dI(),gi())};jg=function(t,e){var n=$;$|=2;try{return t(e)}finally{$=n,$===ve&&Lt()}};function Py(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ks(e))throw Error(T(200));return SI(t,e,null,n)}var AI={Events:[zs,lr,Gh,bg,Ju,ni,function(t){Fh(t,f0)},Ug,Fg,pl,fl,gi,{current:!1}]};(function(t){var e=t.findFiberByHostInstance;return EI(We({},t,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ft.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=a_(n),n===null?null:n.stateNode},findFiberByHostInstance:function(n){return e?e(n):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Bs,bundleType:0,version:"16.14.0",rendererPackageName:"react-dom"});ut.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=AI;ut.createPortal=Py;ut.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternalFiber;if(e===void 0)throw typeof t.render=="function"?Error(T(188)):Error(T(268,Object.keys(t)));return t=a_(e),t=t===null?null:t.stateNode,t};ut.flushSync=function(t,e){if(($&(pt|Ot))!==ve)throw Error(T(187));var n=$;$|=1;try{return Nn(99,t.bind(null,e))}finally{$=n,Lt()}};ut.hydrate=function(t,e,n){if(!Ks(e))throw Error(T(200));return Il(null,t,e,!0,n)};ut.render=function(t,e,n){if(!Ks(e))throw Error(T(200));return Il(null,t,e,!1,n)};ut.unmountComponentAtNode=function(t){if(!Ks(t))throw Error(T(40));return t._reactRootContainer?(yy(function(){Il(null,null,t,!1,function(){t._reactRootContainer=null,t[js]=null})}),!0):!1};ut.unstable_batchedUpdates=_y;ut.unstable_createPortal=function(t,e){return Py(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};ut.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ks(n))throw Error(T(200));if(t==null||t._reactInternalFiber===void 0)throw Error(T(38));return Il(t,e,n,!1,r)};ut.version="16.14.0";function Cy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cy)}catch(t){console.error(t)}}Cy(),xg.exports=ut;var PI=xg.exports;const CI=mg(PI);/**
 * @remix-run/router v1.10.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ys(){return ys=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ys.apply(this,arguments)}var pn;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(pn||(pn={}));const $p="popstate";function kI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return $c("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Ma(i)}return xI(e,n,null,t)}function ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function yd(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function NI(){return Math.random().toString(36).substr(2,8)}function jp(t,e){return{usr:t.state,key:t.key,idx:e}}function $c(t,e,n,r){return n===void 0&&(n=null),ys({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?_i(e):e,{state:n,key:e&&e.key||r||NI()})}function Ma(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function _i(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function xI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=pn.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(ys({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function h(){a=pn.Pop;let d=c(),f=d==null?null:d-u;u=d,l&&l({action:a,location:w.location,delta:f})}function p(d,f){a=pn.Push;let m=$c(w.location,d,f);n&&n(m,d),u=c()+1;let _=jp(m,u),y=w.createHref(m);try{o.pushState(_,"",y)}catch(R){if(R instanceof DOMException&&R.name==="DataCloneError")throw R;i.location.assign(y)}s&&l&&l({action:a,location:w.location,delta:1})}function g(d,f){a=pn.Replace;let m=$c(w.location,d,f);n&&n(m,d),u=c();let _=jp(m,u),y=w.createHref(m);o.replaceState(_,"",y),s&&l&&l({action:a,location:w.location,delta:0})}function I(d){let f=i.location.origin!=="null"?i.location.origin:i.location.href,m=typeof d=="string"?d:Ma(d);return ie(f,"No window.location.(origin|href) available to create URL for href: "+m),new URL(m,f)}let w={get action(){return a},get location(){return t(i,o)},listen(d){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener($p,h),l=d,()=>{i.removeEventListener($p,h),l=null}},createHref(d){return e(i,d)},createURL:I,encodeLocation(d){let f=I(d);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:p,replace:g,go(d){return o.go(d)}};return w}var Bp;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(Bp||(Bp={}));function OI(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?_i(e):e,i=vs(r.pathname||"/",n);if(i==null)return null;let s=ky(t);DI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=BI(s[a],WI(i));return o}function ky(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(ie(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=In([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),ky(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:$I(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of Ny(s.path))i(s,o,l)}),e}function Ny(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=Ny(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function DI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:jI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const VI=/^:\w+$/,LI=3,MI=2,bI=1,UI=10,FI=-2,zp=t=>t==="*";function $I(t,e){let n=t.split("/"),r=n.length;return n.some(zp)&&(r+=FI),e&&(r+=MI),n.filter(i=>!zp(i)).reduce((i,s)=>i+(VI.test(s)?LI:s===""?bI:UI),r)}function jI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function BI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=jc({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:In([i,c.pathname]),pathnameBase:GI(In([i,c.pathnameBase])),route:h}),c.pathnameBase!=="/"&&(i=In([i,c.pathnameBase]))}return s}function jc(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=zI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,h)=>{if(c==="*"){let p=a[h]||"";o=s.slice(0,s.length-p.length).replace(/(.)\/+$/,"$1")}return u[c]=HI(a[h]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function zI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),yd(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function WI(t){try{return decodeURI(t)}catch(e){return yd(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function HI(t,e){try{return decodeURIComponent(t)}catch(n){return yd(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function vs(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function qI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?_i(t):t;return{pathname:n?n.startsWith("/")?n:KI(n,e):e,search:QI(r),hash:YI(i)}}function KI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Ru(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function xy(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Oy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=_i(t):(i=ys({},t),ie(!i.pathname||!i.pathname.includes("?"),Ru("?","pathname","search",i)),ie(!i.pathname||!i.pathname.includes("#"),Ru("#","pathname","hash",i)),ie(!i.search||!i.search.includes("#"),Ru("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let h=e.length-1;if(o.startsWith("..")){let p=o.split("/");for(;p[0]==="..";)p.shift(),h-=1;i.pathname=p.join("/")}a=h>=0?e[h]:"/"}let l=qI(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const In=t=>t.join("/").replace(/\/\/+/g,"/"),GI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),QI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,YI=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function XI(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const Dy=["post","put","patch","delete"];new Set(Dy);const JI=["get",...Dy];new Set(JI);/**
 * React Router v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ba(){return ba=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},ba.apply(this,arguments)}const Rl=C.createContext(null),Vy=C.createContext(null),wr=C.createContext(null),Sl=C.createContext(null),Mn=C.createContext({outlet:null,matches:[],isDataRoute:!1}),Ly=C.createContext(null);function ZI(t,e){let{relative:n}=e===void 0?{}:e;Gs()||ie(!1);let{basename:r,navigator:i}=C.useContext(wr),{hash:s,pathname:o,search:a}=Al(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:In([r,o])),i.createHref({pathname:l,search:a,hash:s})}function Gs(){return C.useContext(Sl)!=null}function Qs(){return Gs()||ie(!1),C.useContext(Sl).location}function My(t){C.useContext(wr).static||C.useLayoutEffect(t)}function e1(){let{isDataRoute:t}=C.useContext(Mn);return t?f1():t1()}function t1(){Gs()||ie(!1);let t=C.useContext(Rl),{basename:e,navigator:n}=C.useContext(wr),{matches:r}=C.useContext(Mn),{pathname:i}=Qs(),s=JSON.stringify(xy(r).map(l=>l.pathnameBase)),o=C.useRef(!1);return My(()=>{o.current=!0}),C.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=Oy(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:In([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}function jO(){let{matches:t}=C.useContext(Mn),e=t[t.length-1];return e?e.params:{}}function Al(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=C.useContext(Mn),{pathname:i}=Qs(),s=JSON.stringify(xy(r).map(o=>o.pathnameBase));return C.useMemo(()=>Oy(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function n1(t,e){return r1(t,e)}function r1(t,e,n){Gs()||ie(!1);let{navigator:r}=C.useContext(wr),{matches:i}=C.useContext(Mn),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=Qs(),u;if(e){var c;let w=typeof e=="string"?_i(e):e;a==="/"||(c=w.pathname)!=null&&c.startsWith(a)||ie(!1),u=w}else u=l;let h=u.pathname||"/",p=a==="/"?h:h.slice(a.length)||"/",g=OI(t,{pathname:p}),I=l1(g&&g.map(w=>Object.assign({},w,{params:Object.assign({},o,w.params),pathname:In([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:In([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&I?C.createElement(Sl.Provider,{value:{location:ba({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:pn.Pop}},I):I}function i1(){let t=d1(),e=XI(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},e),n?C.createElement("pre",{style:i},n):null,s)}const s1=C.createElement(i1,null);class o1 extends C.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?C.createElement(Mn.Provider,{value:this.props.routeContext},C.createElement(Ly.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function a1(t){let{routeContext:e,match:n,children:r}=t,i=C.useContext(Rl);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),C.createElement(Mn.Provider,{value:e},r)}function l1(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||ie(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,h=null;n&&(h=l.route.errorElement||s1);let p=e.concat(s.slice(0,u+1)),g=()=>{let I;return c?I=h:l.route.Component?I=C.createElement(l.route.Component,null):l.route.element?I=l.route.element:I=a,C.createElement(a1,{match:l,routeContext:{outlet:a,matches:p,isDataRoute:n!=null},children:I})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?C.createElement(o1,{location:n.location,revalidation:n.revalidation,component:h,error:c,children:g(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):g()},null)}var by=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(by||{}),Ua=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(Ua||{});function u1(t){let e=C.useContext(Rl);return e||ie(!1),e}function c1(t){let e=C.useContext(Vy);return e||ie(!1),e}function h1(t){let e=C.useContext(Mn);return e||ie(!1),e}function Uy(t){let e=h1(),n=e.matches[e.matches.length-1];return n.route.id||ie(!1),n.route.id}function d1(){var t;let e=C.useContext(Ly),n=c1(Ua.UseRouteError),r=Uy(Ua.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function f1(){let{router:t}=u1(by.UseNavigateStable),e=Uy(Ua.UseNavigateStable),n=C.useRef(!1);return My(()=>{n.current=!0}),C.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,ba({fromRouteId:e},s)))},[t,e])}function p1(t){ie(!1)}function m1(t){let{basename:e="/",children:n=null,location:r,navigationType:i=pn.Pop,navigator:s,static:o=!1}=t;Gs()&&ie(!1);let a=e.replace(/^\/*/,"/"),l=C.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=_i(r));let{pathname:u="/",search:c="",hash:h="",state:p=null,key:g="default"}=r,I=C.useMemo(()=>{let w=vs(u,a);return w==null?null:{location:{pathname:w,search:c,hash:h,state:p,key:g},navigationType:i}},[a,u,c,h,p,g,i]);return I==null?null:C.createElement(wr.Provider,{value:l},C.createElement(Sl.Provider,{children:n,value:I}))}function BO(t){let{children:e,location:n}=t;return n1(Bc(e),n)}new Promise(()=>{});function Bc(t,e){e===void 0&&(e=[]);let n=[];return C.Children.forEach(t,(r,i)=>{if(!C.isValidElement(r))return;let s=[...e,i];if(r.type===C.Fragment){n.push.apply(n,Bc(r.props.children,s));return}r.type!==p1&&ie(!1),!r.props.index||!r.props.children||ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Bc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fa(){return Fa=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fa.apply(this,arguments)}function Fy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function g1(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function _1(t,e){return t.button===0&&(!e||e==="_self")&&!g1(t)}const y1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],v1=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],E1=C.createContext({isTransitioning:!1}),w1="startTransition",Wp=OT[w1];function T1(t){let{basename:e,children:n,future:r,window:i}=t,s=C.useRef();s.current==null&&(s.current=kI({window:i,v5Compat:!0}));let o=s.current,[a,l]=C.useState({action:o.action,location:o.location}),{v7_startTransition:u}=r||{},c=C.useCallback(h=>{u&&Wp?Wp(()=>l(h)):l(h)},[l,u]);return C.useLayoutEffect(()=>o.listen(c),[o,c]),C.createElement(m1,{basename:e,children:n,location:a.location,navigationType:a.action,navigator:o})}const I1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,S1=C.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,unstable_viewTransition:h}=e,p=Fy(e,y1),{basename:g}=C.useContext(wr),I,w=!1;if(typeof u=="string"&&R1.test(u)&&(I=u,I1))try{let _=new URL(window.location.href),y=u.startsWith("//")?new URL(_.protocol+u):new URL(u),R=vs(y.pathname,g);y.origin===_.origin&&R!=null?u=R+y.search+y.hash:w=!0}catch{}let d=ZI(u,{relative:i}),f=P1(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i,unstable_viewTransition:h});function m(_){r&&r(_),_.defaultPrevented||f(_)}return C.createElement("a",Fa({},p,{href:I||d,onClick:w||s?r:m,ref:n,target:l}))}),zO=C.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,unstable_viewTransition:u,children:c}=e,h=Fy(e,v1),p=Al(l,{relative:h.relative}),g=Qs(),I=C.useContext(Vy),{navigator:w}=C.useContext(wr),d=I!=null&&C1(p)&&u===!0,f=w.encodeLocation?w.encodeLocation(p).pathname:p.pathname,m=g.pathname,_=I&&I.navigation&&I.navigation.location?I.navigation.location.pathname:null;i||(m=m.toLowerCase(),_=_?_.toLowerCase():null,f=f.toLowerCase());let y=m===f||!o&&m.startsWith(f)&&m.charAt(f.length)==="/",R=_!=null&&(_===f||!o&&_.startsWith(f)&&_.charAt(f.length)==="/"),P={isActive:y,isPending:R,isTransitioning:d},L=y?r:void 0,M;typeof s=="function"?M=s(P):M=[s,y?"active":null,R?"pending":null,d?"transitioning":null].filter(Boolean).join(" ");let O=typeof a=="function"?a(P):a;return C.createElement(S1,Fa({},h,{"aria-current":L,className:M,ref:n,style:O,to:l,unstable_viewTransition:u}),typeof c=="function"?c(P):c)});var zc;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(zc||(zc={}));var Hp;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Hp||(Hp={}));function A1(t){let e=C.useContext(Rl);return e||ie(!1),e}function P1(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a}=e===void 0?{}:e,l=e1(),u=Qs(),c=Al(t,{relative:o});return C.useCallback(h=>{if(_1(h,n)){h.preventDefault();let p=r!==void 0?r:Ma(u)===Ma(c);l(t,{replace:p,state:i,preventScrollReset:s,relative:o,unstable_viewTransition:a})}},[u,l,c,r,i,n,t,s,o,a])}function C1(t,e){e===void 0&&(e={});let n=C.useContext(E1);n==null&&ie(!1);let{basename:r}=A1(zc.useViewTransitionState),i=Al(t,{relative:e.relative});if(!n.isTransitioning)return!1;let s=vs(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=vs(n.nextLocation.pathname,r)||n.nextLocation.pathname;return jc(i.pathname,o)!=null||jc(i.pathname,s)!=null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $y=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},k1=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},jy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let p=(a&15)<<2|u>>6,g=u&63;l||(g=64,o||(p=64)),r.push(n[c],n[h],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):k1(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||h==null)throw new N1;const p=s<<2|a>>4;if(r.push(p),u!==64){const g=a<<4&240|u>>2;if(r.push(g),h!==64){const I=u<<6&192|h;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class N1 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const x1=function(t){const e=$y(t);return jy.encodeByteArray(e,!0)},$a=function(t){return x1(t).replace(/\./g,"")},By=function(t){try{return jy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D1=()=>O1().__FIREBASE_DEFAULTS__,V1=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},L1=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&By(t[1]);return e&&JSON.parse(e)},Pl=()=>{try{return D1()||V1()||L1()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},zy=t=>{var e,n;return(n=(e=Pl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Wy=t=>{const e=zy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Hy=()=>{var t;return(t=Pl())===null||t===void 0?void 0:t.config},qy=t=>{var e;return(e=Pl())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M1{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ky(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[$a(JSON.stringify(n)),$a(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function b1(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function U1(){var t;const e=(t=Pl())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function F1(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function $1(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function j1(){const t=Fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function B1(){try{return typeof indexedDB=="object"}catch{return!1}}function z1(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W1="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=W1,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ys.prototype.create)}}class Ys{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?H1(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Mt(i,a,r)}}function H1(t,e){return t.replace(q1,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const q1=/\{\$([^}]+)}/g;function K1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ja(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(qp(s)&&qp(o)){if(!ja(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function qp(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xs(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ji(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Bi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function G1(t,e){const n=new Q1(t,e);return n.subscribe.bind(n)}class Q1{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Y1(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Su),i.error===void 0&&(i.error=Su),i.complete===void 0&&(i.complete=Su);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Y1(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Su(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X1{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new M1;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Z1(e))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=zn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zn){return this.instances.has(e)}getOptions(e=zn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:J1(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zn){return this.component?this.component.multipleInstances?e:zn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function J1(t){return t===zn?void 0:t}function Z1(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new X1(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var H;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(H||(H={}));const tR={debug:H.DEBUG,verbose:H.VERBOSE,info:H.INFO,warn:H.WARN,error:H.ERROR,silent:H.SILENT},nR=H.INFO,rR={[H.DEBUG]:"log",[H.VERBOSE]:"log",[H.INFO]:"info",[H.WARN]:"warn",[H.ERROR]:"error"},iR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=rR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vd{constructor(e){this.name=e,this._logLevel=nR,this._logHandler=iR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in H))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,H.DEBUG,...e),this._logHandler(this,H.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,H.VERBOSE,...e),this._logHandler(this,H.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,H.INFO,...e),this._logHandler(this,H.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,H.WARN,...e),this._logHandler(this,H.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,H.ERROR,...e),this._logHandler(this,H.ERROR,...e)}}const sR=(t,e)=>e.some(n=>t instanceof n);let Kp,Gp;function oR(){return Kp||(Kp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function aR(){return Gp||(Gp=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Gy=new WeakMap,Wc=new WeakMap,Qy=new WeakMap,Au=new WeakMap,Ed=new WeakMap;function lR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Rn(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Gy.set(n,t)}).catch(()=>{}),Ed.set(e,t),e}function uR(t){if(Wc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Wc.set(t,e)}let Hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Wc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Qy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Rn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function cR(t){Hc=t(Hc)}function hR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Pu(this),e,...n);return Qy.set(r,e.sort?e.sort():[e]),Rn(r)}:aR().includes(t)?function(...e){return t.apply(Pu(this),e),Rn(Gy.get(this))}:function(...e){return Rn(t.apply(Pu(this),e))}}function dR(t){return typeof t=="function"?hR(t):(t instanceof IDBTransaction&&uR(t),sR(t,oR())?new Proxy(t,Hc):t)}function Rn(t){if(t instanceof IDBRequest)return lR(t);if(Au.has(t))return Au.get(t);const e=dR(t);return e!==t&&(Au.set(t,e),Ed.set(e,t)),e}const Pu=t=>Ed.get(t);function fR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Rn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Rn(o.result),l.oldVersion,l.newVersion,Rn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const pR=["get","getKey","getAll","getAllKeys","count"],mR=["put","add","delete","clear"],Cu=new Map;function Qp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cu.get(e))return Cu.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=mR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||pR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Cu.set(e,s),s}cR(t=>({...t,get:(e,n,r)=>Qp(e,n)||t.get(e,n,r),has:(e,n)=>!!Qp(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_R(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _R(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const qc="@firebase/app",Yp="0.9.20";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dr=new vd("@firebase/app"),yR="@firebase/app-compat",vR="@firebase/analytics-compat",ER="@firebase/analytics",wR="@firebase/app-check-compat",TR="@firebase/app-check",IR="@firebase/auth",RR="@firebase/auth-compat",SR="@firebase/database",AR="@firebase/database-compat",PR="@firebase/functions",CR="@firebase/functions-compat",kR="@firebase/installations",NR="@firebase/installations-compat",xR="@firebase/messaging",OR="@firebase/messaging-compat",DR="@firebase/performance",VR="@firebase/performance-compat",LR="@firebase/remote-config",MR="@firebase/remote-config-compat",bR="@firebase/storage",UR="@firebase/storage-compat",FR="@firebase/firestore",$R="@firebase/firestore-compat",jR="firebase",BR="10.5.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kc="[DEFAULT]",zR={[qc]:"fire-core",[yR]:"fire-core-compat",[ER]:"fire-analytics",[vR]:"fire-analytics-compat",[TR]:"fire-app-check",[wR]:"fire-app-check-compat",[IR]:"fire-auth",[RR]:"fire-auth-compat",[SR]:"fire-rtdb",[AR]:"fire-rtdb-compat",[PR]:"fire-fn",[CR]:"fire-fn-compat",[kR]:"fire-iid",[NR]:"fire-iid-compat",[xR]:"fire-fcm",[OR]:"fire-fcm-compat",[DR]:"fire-perf",[VR]:"fire-perf-compat",[LR]:"fire-rc",[MR]:"fire-rc-compat",[bR]:"fire-gcs",[UR]:"fire-gcs-compat",[FR]:"fire-fst",[$R]:"fire-fst-compat","fire-js":"fire-js",[jR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba=new Map,Gc=new Map;function WR(t,e){try{t.container.addComponent(e)}catch(n){dr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function fr(t){const e=t.name;if(Gc.has(e))return dr.debug(`There were multiple attempts to register component ${e}.`),!1;Gc.set(e,t);for(const n of Ba.values())WR(n,t);return!0}function Cl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Sn=new Ys("app","Firebase",HR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=BR;function Yy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Kc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Sn.create("bad-app-name",{appName:String(i)});if(n||(n=Hy()),!n)throw Sn.create("no-options");const s=Ba.get(i);if(s){if(ja(n,s.options)&&ja(r,s.config))return s;throw Sn.create("duplicate-app",{appName:i})}const o=new eR(i);for(const l of Gc.values())o.addComponent(l);const a=new qR(n,r,o);return Ba.set(i,a),a}function wd(t=Kc){const e=Ba.get(t);if(!e&&t===Kc&&Hy())return Yy();if(!e)throw Sn.create("no-app",{appName:t});return e}function Pt(t,e,n){var r;let i=(r=zR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),dr.warn(a.join(" "));return}fr(new xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="firebase-heartbeat-database",GR=1,Es="firebase-heartbeat-store";let ku=null;function Xy(){return ku||(ku=fR(KR,GR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Es)}}}).catch(t=>{throw Sn.create("idb-open",{originalErrorMessage:t.message})})),ku}async function QR(t){try{return await(await Xy()).transaction(Es).objectStore(Es).get(Jy(t))}catch(e){if(e instanceof Mt)dr.warn(e.message);else{const n=Sn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});dr.warn(n.message)}}}async function Xp(t,e){try{const r=(await Xy()).transaction(Es,"readwrite");await r.objectStore(Es).put(e,Jy(t)),await r.done}catch(n){if(n instanceof Mt)dr.warn(n.message);else{const r=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});dr.warn(r.message)}}}function Jy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YR=1024,XR=30*24*60*60*1e3;class JR{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new eS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Jp();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=XR}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Jp(),{heartbeatsToSend:n,unsentEntries:r}=ZR(this._heartbeatsCache.heartbeats),i=$a(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Jp(){return new Date().toISOString().substring(0,10)}function ZR(t,e=YR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Zp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Zp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class eS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return B1()?z1().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await QR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Xp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Zp(t){return $a(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tS(t){fr(new xn("platform-logger",e=>new gR(e),"PRIVATE")),fr(new xn("heartbeat",e=>new JR(e),"PRIVATE")),Pt(qc,Yp,t),Pt(qc,Yp,"esm2017"),Pt("fire-js","")}tS("");var nS="firebase",rS="10.5.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pt(nS,rS,"app");function Td(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function em(t){return t!==void 0&&t.enterprise!==void 0}class iS{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}function Zy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sS=Zy,ev=new Ys("auth","Firebase",Zy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=new vd("@firebase/auth");function oS(t,...e){za.logLevel<=H.WARN&&za.warn(`Auth (${Tr}): ${t}`,...e)}function ta(t,...e){za.logLevel<=H.ERROR&&za.error(`Auth (${Tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(t,...e){throw Id(t,...e)}function Ct(t,...e){return Id(t,...e)}function aS(t,e,n){const r=Object.assign(Object.assign({},sS()),{[e]:n});return new Ys("auth","Firebase",r).create(e,{appName:t.name})}function Id(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ev.create(t,...e)}function b(t,e,...n){if(!t)throw Id(e,...n)}function Wt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ta(e),new Error(e)}function Qt(t,e){t||Wt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lS(){return tm()==="http:"||tm()==="https:"}function tm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lS()||F1()||"connection"in navigator)?navigator.onLine:!0}function cS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,n){this.shortDelay=e,this.longDelay=n,Qt(n>e,"Short delay should be less than long delay!"),this.isMobile=b1()||$1()}get(){return uS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rd(t,e){Qt(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Wt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Wt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Wt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS=new Js(3e4,6e4);function Ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rr(t,e,n,r,i={}){return nv(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),tv.fetch()(rv(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function nv(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hS),e);try{const i=new fS(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ko(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw ko(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw ko(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw ko(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw aS(t,c,u);mt(t,c)}}catch(i){if(i instanceof Mt)throw i;mt(t,"network-request-failed",{message:String(i)})}}async function Zs(t,e,n,r,i={}){const s=await Rr(t,e,n,r,i);return"mfaPendingCredential"in s&&mt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function rv(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Rd(t.config,i):`${t.config.apiScheme}://${i}`}class fS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ct(this.auth,"network-request-failed")),dS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ko(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Ct(t,e,r);return i.customData._tokenResponse=n,i}async function pS(t,e){return Rr(t,"GET","/v2/recaptchaConfig",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mS(t,e){return Rr(t,"POST","/v1/accounts:delete",e)}async function gS(t,e){return Rr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _S(t,e=!1){const n=Ee(t),r=await n.getIdToken(e),i=Sd(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:ts(Nu(i.auth_time)),issuedAtTime:ts(Nu(i.iat)),expirationTime:ts(Nu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Nu(t){return Number(t)*1e3}function Sd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ta("JWT malformed, contained fewer than 3 sections"),null;try{const i=By(n);return i?JSON.parse(i):(ta("Failed to decode base64 JWT payload"),null)}catch(i){return ta("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function yS(t){const e=Sd(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ws(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&vS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function vS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ES{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ts(this.lastLoginAt),this.creationTime=ts(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ws(t,gS(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?IS(s.providerUserInfo):[],a=TS(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new iv(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function wS(t){const e=Ee(t);await Wa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function TS(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function IS(t){return t.map(e=>{var{providerId:n}=e,r=Td(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RS(t,e){const n=await nv(t,{},async()=>{const r=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=rv(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tv.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):yS(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await RS(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Ts;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ts,this.toJSON())}_performRefresh(){return Wt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tn(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Td(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ES(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new iv(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ws(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _S(this,e)}reload(){return wS(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Wa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ws(this,mS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(i=n.email)!==null&&i!==void 0?i:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,d=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,f=(u=n.createdAt)!==null&&u!==void 0?u:void 0,m=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:_,emailVerified:y,isAnonymous:R,providerData:P,stsTokenManager:L}=n;b(_&&L,e,"internal-error");const M=Ts.fromJSON(this.name,L);b(typeof _=="string",e,"internal-error"),tn(h,e.name),tn(p,e.name),b(typeof y=="boolean",e,"internal-error"),b(typeof R=="boolean",e,"internal-error"),tn(g,e.name),tn(I,e.name),tn(w,e.name),tn(d,e.name),tn(f,e.name),tn(m,e.name);const O=new sr({uid:_,auth:e,email:p,emailVerified:y,displayName:h,isAnonymous:R,photoURL:I,phoneNumber:g,tenantId:w,stsTokenManager:M,createdAt:f,lastLoginAt:m});return P&&Array.isArray(P)&&(O.providerData=P.map(ge=>Object.assign({},ge))),d&&(O._redirectEventId=d),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ts;i.updateFromServerResponse(n);const s=new sr({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Wa(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;function Ht(t){Qt(t instanceof Function,"Expected a class definition");let e=nm.get(t);return e?(Qt(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,nm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}sv.type="NONE";const rm=sv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(t,e,n){return`firebase:${t}:${e}:${n}`}class Qr{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=na(this.userKey,i.apiKey,s),this.fullPersistenceKey=na("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Qr(Ht(rm),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Ht(rm);const o=na(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const h=sr._fromJSON(e,c);u!==s&&(a=h),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new Qr(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Qr(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(lv(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ov(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(cv(e))return"Blackberry";if(hv(e))return"Webos";if(Ad(e))return"Safari";if((e.includes("chrome/")||av(e))&&!e.includes("edge/"))return"Chrome";if(uv(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ov(t=Fe()){return/firefox\//i.test(t)}function Ad(t=Fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function av(t=Fe()){return/crios\//i.test(t)}function lv(t=Fe()){return/iemobile/i.test(t)}function uv(t=Fe()){return/android/i.test(t)}function cv(t=Fe()){return/blackberry/i.test(t)}function hv(t=Fe()){return/webos/i.test(t)}function kl(t=Fe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function SS(t=Fe()){var e;return kl(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function AS(){return j1()&&document.documentMode===10}function dv(t=Fe()){return kl(t)||uv(t)||hv(t)||cv(t)||/windows phone/i.test(t)||lv(t)}function PS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fv(t,e=[]){let n;switch(t){case"Browser":n=im(Fe());break;case"Worker":n=`${im(Fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kS(t,e={}){return Rr(t,"GET","/v2/passwordPolicy",Ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS=6;class xS{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:NS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsUppercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OS{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sm(this),this.idTokenSubscription=new sm(this),this.beforeStateQueue=new CS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ev,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Ht(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Qr.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Wa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Ee(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ht(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await kS(this),n=new xS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ys("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Ht(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await Qr.create(this,[Ht(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fv(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&oS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Sr(t){return Ee(t)}class sm{constructor(e){this.auth=e,this.observer=null,this.addObserver=G1(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function pv(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Ct("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",DS().appendChild(r)})}function VS(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const LS="https://www.google.com/recaptcha/enterprise.js?render=",MS="recaptcha-enterprise",bS="NO_RECAPTCHA";class US{constructor(e){this.type=MS,this.auth=Sr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{pS(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new iS(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;em(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(bS)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&em(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}pv(LS+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function Ha(t,e,n,r=!1){const i=new US(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function FS(t,e){const n=Cl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ja(s,e??{}))return i;mt(i,"already-initialized")}return n.initialize({options:e})}function $S(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Ht);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function jS(t,e,n){const r=Sr(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=mv(e),{host:o,port:a}=BS(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||zS()}function mv(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function BS(t){const e=mv(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:om(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:om(o)}}}function om(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function zS(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wt("not implemented")}_getIdTokenResponse(e){return Wt("not implemented")}_linkToIdToken(e,n){return Wt("not implemented")}_getReauthenticationResolver(e){return Wt("not implemented")}}async function WS(t,e){return Rr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xu(t,e){return Zs(t,"POST","/v1/accounts:signInWithPassword",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HS(t,e){return Zs(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}async function qS(t,e){return Zs(t,"POST","/v1/accounts:signInWithEmailLink",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is extends Pd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Is(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Is(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ha(e,r,"signInWithPassword");return xu(e,i)}else return xu(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ha(e,r,"signInWithPassword");return xu(e,s)}else return Promise.reject(i)});case"emailLink":return HS(e,{email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return WS(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return qS(e,{idToken:n,email:this._email,oobCode:this._password});default:mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yr(t,e){return Zs(t,"POST","/v1/accounts:signInWithIdp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KS="http://localhost";class pr extends Pd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Td(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new pr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Yr(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Yr(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Yr(e,n)}buildRequest(){const e={requestUri:KS,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GS(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function QS(t){const e=ji(Bi(t)).link,n=e?ji(Bi(e)).deep_link_id:null,r=ji(Bi(t)).deep_link_id;return(r?ji(Bi(r)).link:null)||r||n||e||t}class Cd{constructor(e){var n,r,i,s,o,a;const l=ji(Bi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,h=GS((i=l.mode)!==null&&i!==void 0?i:null);b(u&&c&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=QS(e);try{return new Cd(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,n){return Is._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cd.parseLink(n);return b(r,"argument-error"),Is._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo extends gv{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends eo{constructor(){super("facebook.com")}static credential(e){return pr._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.FACEBOOK_SIGN_IN_METHOD="facebook.com";rn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends eo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pr._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.GOOGLE_SIGN_IN_METHOD="google.com";sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on extends eo{constructor(){super("github.com")}static credential(e){return pr._fromParams({providerId:on.PROVIDER_ID,signInMethod:on.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return on.credentialFromTaggedObject(e)}static credentialFromError(e){return on.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return on.credential(e.oauthAccessToken)}catch{return null}}}on.GITHUB_SIGN_IN_METHOD="github.com";on.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an extends eo{constructor(){super("twitter.com")}static credential(e,n){return pr._fromParams({providerId:an.PROVIDER_ID,signInMethod:an.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return an.credentialFromTaggedObject(e)}static credentialFromError(e){return an.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return an.credential(n,r)}catch{return null}}}an.TWITTER_SIGN_IN_METHOD="twitter.com";an.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ou(t,e){return Zs(t,"POST","/v1/accounts:signUp",Ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await sr._fromIdTokenResponse(e,r,i),o=am(r);return new mr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=am(r);return new mr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function am(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa extends Mt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,qa.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new qa(e,n,r,i)}}function _v(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?qa._fromErrorAndOperation(t,s,e,r):s})}async function YS(t,e,n=!1){const r=await ws(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XS(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ws(t,_v(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Sd(s.idToken);b(o,r,"internal-error");const{sub:a}=o;return b(t.uid===a,r,"user-mismatch"),mr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&mt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yv(t,e,n=!1){const r="signIn",i=await _v(t,r,e),s=await mr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function JS(t,e){return yv(Sr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vv(t){const e=Sr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WO(t,e,n){var r;const i=Sr(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Ha(i,s,"signUpPassword");o=Ou(i,u)}else o=Ou(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await Ha(i,s,"signUpPassword");return Ou(i,c)}throw u});const a=await o.catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&vv(t),u}),l=await mr._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function HO(t,e,n){return JS(Ee(t),yi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&vv(t),r})}function ZS(t,e,n,r){return Ee(t).onIdTokenChanged(e,n,r)}function eA(t,e,n){return Ee(t).beforeAuthStateChanged(e,n)}function qO(t,e,n,r){return Ee(t).onAuthStateChanged(e,n,r)}function KO(t){return Ee(t).signOut()}const Ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){const t=Fe();return Ad(t)||kl(t)}const nA=1e3,rA=10;class wv extends Ev{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=tA()&&PS(),this.fallbackToPolling=dv(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);AS()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},nA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}wv.type="LOCAL";const iA=wv;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tv extends Ev{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Tv.type="SESSION";const Iv=Tv;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sA(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await sA(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kd("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const p=h;if(p.data.eventId===u)switch(p.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(p.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return window}function aA(t){kt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){return typeof kt().WorkerGlobalScope<"u"&&typeof kt().importScripts=="function"}async function lA(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function uA(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function cA(){return Rv()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sv="firebaseLocalStorageDb",hA=1,Ga="firebaseLocalStorage",Av="fbase_key";class to{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function xl(t,e){return t.transaction([Ga],e?"readwrite":"readonly").objectStore(Ga)}function dA(){const t=indexedDB.deleteDatabase(Sv);return new to(t).toPromise()}function Yc(){const t=indexedDB.open(Sv,hA);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ga,{keyPath:Av})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ga)?e(r):(r.close(),await dA(),e(await Yc()))})})}async function lm(t,e,n){const r=xl(t,!0).put({[Av]:e,value:n});return new to(r).toPromise()}async function fA(t,e){const n=xl(t,!1).get(e),r=await new to(n).toPromise();return r===void 0?null:r.value}function um(t,e){const n=xl(t,!0).delete(e);return new to(n).toPromise()}const pA=800,mA=3;class Pv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>mA)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Rv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(cA()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await lA(),!this.activeServiceWorker)return;this.sender=new oA(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||uA()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yc();return await lm(e,Ka,"1"),await um(e,Ka),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lm(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>fA(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>um(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=xl(i,!1).getAll();return new to(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),pA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Pv.type="LOCAL";const gA=Pv;new Js(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _A(t,e){return e?Ht(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd extends Pd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yr(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Yr(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Yr(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function yA(t){return yv(t.auth,new Nd(t),t.bypassAuthState)}function vA(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),XS(n,new Nd(t),t.bypassAuthState)}async function EA(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),YS(n,new Nd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cv{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return yA;case"linkViaPopup":case"linkViaRedirect":return EA;case"reauthViaPopup":case"reauthViaRedirect":return vA;default:mt(this.auth,"internal-error")}}resolve(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Qt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wA=new Js(2e3,1e4);class jr extends Cv{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,jr.currentPopupAction&&jr.currentPopupAction.cancel(),jr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){Qt(this.filter.length===1,"Popup operations only handle one event");const e=kd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ct(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ct(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ct(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,wA.get())};e()}}jr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TA="pendingRedirect",ra=new Map;class IA extends Cv{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ra.get(this.auth._key());if(!e){try{const r=await RA(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ra.set(this.auth._key(),e)}return this.bypassAuthState||ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function RA(t,e){const n=PA(e),r=AA(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function SA(t,e){ra.set(t._key(),e)}function AA(t){return Ht(t._redirectPersistence)}function PA(t){return na(TA,t.config.apiKey,t.name)}async function CA(t,e,n=!1){const r=Sr(t),i=_A(r,e),o=await new IA(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA=10*60*1e3;class NA{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xA(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!kv(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ct(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=kA&&this.cachedEventUids.clear(),this.cachedEventUids.has(cm(e))}saveEventToCache(e){this.cachedEventUids.add(cm(e)),this.lastProcessedEventTime=Date.now()}}function cm(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function kv({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xA(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return kv(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function OA(t,e={}){return Rr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,VA=/^https?/;async function LA(t){if(t.config.emulator)return;const{authorizedDomains:e}=await OA(t);for(const n of e)try{if(MA(n))return}catch{}mt(t,"unauthorized-domain")}function MA(t){const e=Qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!VA.test(n))return!1;if(DA.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bA=new Js(3e4,6e4);function hm(){const t=kt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UA(t){return new Promise((e,n)=>{var r,i,s;function o(){hm(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{hm(),n(Ct(t,"network-request-failed"))},timeout:bA.get()})}if(!((i=(r=kt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=kt().gapi)===null||s===void 0)&&s.load)o();else{const a=VS("iframefcb");return kt()[a]=()=>{gapi.load?o():n(Ct(t,"network-request-failed"))},pv(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ia=null,e})}let ia=null;function FA(t){return ia=ia||UA(t),ia}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=new Js(5e3,15e3),jA="__/auth/iframe",BA="emulator/auth/iframe",zA={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},WA=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HA(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Rd(e,BA):`https://${t.config.authDomain}/${jA}`,r={apiKey:e.apiKey,appName:t.name,v:Tr},i=WA.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Xs(r).slice(1)}`}async function qA(t){const e=await FA(t),n=kt().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:HA(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zA,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Ct(t,"network-request-failed"),a=kt().setTimeout(()=>{s(o)},$A.get());function l(){kt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KA={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},GA=500,QA=600,YA="_blank",XA="http://localhost";class dm{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function JA(t,e,n,r=GA,i=QA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},KA),{width:r.toString(),height:i.toString(),top:s,left:o}),u=Fe().toLowerCase();n&&(a=av(u)?YA:n),ov(u)&&(e=e||XA,l.scrollbars="yes");const c=Object.entries(l).reduce((p,[g,I])=>`${p}${g}=${I},`,"");if(SS(u)&&a!=="_self")return ZA(e||"",a),new dm(null);const h=window.open(e||"",a,c);b(h,t,"popup-blocked");try{h.focus()}catch{}return new dm(h)}function ZA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eP="__/auth/handler",tP="emulator/auth/handler",nP=encodeURIComponent("fac");async function fm(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Tr,eventId:i};if(e instanceof gv){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",K1(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(e instanceof eo){const c=e.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${nP}=${encodeURIComponent(l)}`:"";return`${rP(t)}?${Xs(a).slice(1)}${u}`}function rP({config:t}){return t.emulator?Rd(t,tP):`https://${t.authDomain}/${eP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="webStorageSupport";class iP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Iv,this._completeRedirectFn=CA,this._overrideRedirectResult=SA}async _openPopup(e,n,r,i){var s;Qt((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await fm(e,n,r,Qc(),i);return JA(e,o,kd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await fm(e,n,r,Qc(),i);return aA(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Qt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await qA(e),r=new NA(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Du,{type:Du},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Du];o!==void 0&&n(!!o),mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=LA(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return dv()||Ad()||kl()}}const sP=iP;var pm="@firebase/auth",mm="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function lP(t){fr(new xn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fv(t)},u=new OS(r,i,s,l);return $S(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),fr(new xn("auth-internal",e=>{const n=Sr(e.getProvider("auth").getImmediate());return(r=>new oP(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pt(pm,mm,aP(t)),Pt(pm,mm,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uP=5*60,cP=qy("authIdTokenMaxAge")||uP;let gm=null;const hP=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>cP)return;const i=n==null?void 0:n.token;gm!==i&&(gm=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function dP(t=wd()){const e=Cl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=FS(t,{popupRedirectResolver:sP,persistence:[gA,iA,Iv]}),r=qy("authTokenSyncURL");if(r){const s=hP(r);eA(n,s,()=>s(n.currentUser)),ZS(n,o=>s(o))}const i=zy("auth");return i&&jS(n,`http://${i}`),n}lP("Browser");var fP=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},A,xd=xd||{},F=fP||self;function Ol(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function no(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pP(t){return Object.prototype.hasOwnProperty.call(t,Vu)&&t[Vu]||(t[Vu]=++mP)}var Vu="closure_uid_"+(1e9*Math.random()>>>0),mP=0;function gP(t,e,n){return t.call.apply(t.bind,arguments)}function _P(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Me(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Me=gP:Me=_P,Me.apply(null,arguments)}function No(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Te(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function bn(){this.s=this.s,this.o=this.o}var yP=0;bn.prototype.s=!1;bn.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),yP!=0)&&pP(this)};bn.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Nv=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Od(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function _m(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ol(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function be(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}be.prototype.h=function(){this.defaultPrevented=!0};var vP=function(){if(!F.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{F.addEventListener("test",()=>{},e),F.removeEventListener("test",()=>{},e)}catch{}return t}();function Rs(t){return/^[\s\xa0]*$/.test(t)}function Dl(){var t=F.navigator;return t&&(t=t.userAgent)?t:""}function yt(t){return Dl().indexOf(t)!=-1}function Dd(t){return Dd[" "](t),t}Dd[" "]=function(){};function EP(t,e){var n=dC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var wP=yt("Opera"),oi=yt("Trident")||yt("MSIE"),xv=yt("Edge"),Xc=xv||oi,Ov=yt("Gecko")&&!(Dl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge"))&&!(yt("Trident")||yt("MSIE"))&&!yt("Edge"),TP=Dl().toLowerCase().indexOf("webkit")!=-1&&!yt("Edge");function Dv(){var t=F.document;return t?t.documentMode:void 0}var Jc;e:{var Lu="",Mu=function(){var t=Dl();if(Ov)return/rv:([^\);]+)(\)|;)/.exec(t);if(xv)return/Edge\/([\d\.]+)/.exec(t);if(oi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(TP)return/WebKit\/(\S+)/.exec(t);if(wP)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Mu&&(Lu=Mu?Mu[1]:""),oi){var bu=Dv();if(bu!=null&&bu>parseFloat(Lu)){Jc=String(bu);break e}}Jc=Lu}var Zc;if(F.document&&oi){var ym=Dv();Zc=ym||parseInt(Jc,10)||void 0}else Zc=void 0;var IP=Zc;function Ss(t,e){if(be.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ov){e:{try{Dd(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:RP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ss.$.h.call(this)}}Te(Ss,be);var RP={2:"touch",3:"pen",4:"mouse"};Ss.prototype.h=function(){Ss.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var ro="closure_listenable_"+(1e6*Math.random()|0),SP=0;function AP(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++SP,this.fa=this.ia=!1}function Vl(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Vd(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function PP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function Vv(t){const e={};for(const n in t)e[n]=t[n];return e}const vm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Lv(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<vm.length;s++)n=vm[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ll(t){this.src=t,this.g={},this.h=0}Ll.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=th(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new AP(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function eh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Nv(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Vl(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function th(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var Ld="closure_lm_"+(1e6*Math.random()|0),Uu={};function Mv(t,e,n,r,i){if(r&&r.once)return Uv(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Mv(t,e[s],n,r,i);return null}return n=Ud(n),t&&t[ro]?t.O(e,n,no(r)?!!r.capture:!!r,i):bv(t,e,n,!1,r,i)}function bv(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=no(i)?!!i.capture:!!i,a=bd(t);if(a||(t[Ld]=a=new Ll(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=CP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)vP||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent($v(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function CP(){function t(n){return e.call(t.src,t.listener,n)}const e=kP;return t}function Uv(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Uv(t,e[s],n,r,i);return null}return n=Ud(n),t&&t[ro]?t.P(e,n,no(r)?!!r.capture:!!r,i):bv(t,e,n,!0,r,i)}function Fv(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Fv(t,e[s],n,r,i);else r=no(r)?!!r.capture:!!r,n=Ud(n),t&&t[ro]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=th(s,n,r,i),-1<n&&(Vl(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=bd(t))&&(e=t.g[e.toString()],t=-1,e&&(t=th(e,n,r,i)),(n=-1<t?e[t]:null)&&Md(n))}function Md(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[ro])eh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent($v(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=bd(e))?(eh(n,t),n.h==0&&(n.src=null,e[Ld]=null)):Vl(t)}}}function $v(t){return t in Uu?Uu[t]:Uu[t]="on"+t}function kP(t,e){if(t.fa)t=!0;else{e=new Ss(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Md(t),t=n.call(r,e)}return t}function bd(t){return t=t[Ld],t instanceof Ll?t:null}var Fu="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ud(t){return typeof t=="function"?t:(t[Fu]||(t[Fu]=function(e){return t.handleEvent(e)}),t[Fu])}function we(){bn.call(this),this.i=new Ll(this),this.S=this,this.J=null}Te(we,bn);we.prototype[ro]=!0;we.prototype.removeEventListener=function(t,e,n,r){Fv(this,t,e,n,r)};function Ae(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new be(e,t);else if(e instanceof be)e.target=e.target||t;else{var i=e;e=new be(r,t),Lv(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=xo(o,r,!0,e)&&i}if(o=e.g=t,i=xo(o,r,!0,e)&&i,i=xo(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=xo(o,r,!1,e)&&i}we.prototype.N=function(){if(we.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Vl(n[r]);delete t.g[e],t.h--}}this.J=null};we.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};we.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function xo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&eh(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fd=F.JSON.stringify;class NP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function xP(){var t=$d;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class OP{constructor(){this.h=this.g=null}add(e,n){const r=jv.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var jv=new NP(()=>new DP,t=>t.reset());class DP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function VP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function LP(t){F.setTimeout(()=>{throw t},0)}let As,Ps=!1,$d=new OP,Bv=()=>{const t=F.Promise.resolve(void 0);As=()=>{t.then(MP)}};var MP=()=>{for(var t;t=xP();){try{t.h.call(t.g)}catch(n){LP(n)}var e=jv;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ps=!1};function Ml(t,e){we.call(this),this.h=t||1,this.g=e||F,this.j=Me(this.qb,this),this.l=Date.now()}Te(Ml,we);A=Ml.prototype;A.ga=!1;A.T=null;A.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Ae(this,"tick"),this.ga&&(jd(this),this.start()))}};A.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function jd(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}A.N=function(){Ml.$.N.call(this),jd(this),delete this.g};function Bd(t,e,n){if(typeof t=="function")n&&(t=Me(t,n));else if(t&&typeof t.handleEvent=="function")t=Me(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:F.setTimeout(t,e||0)}function zv(t){t.g=Bd(()=>{t.g=null,t.i&&(t.i=!1,zv(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class bP extends bn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:zv(this)}N(){super.N(),this.g&&(F.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(t){bn.call(this),this.h=t,this.g={}}Te(Cs,bn);var Em=[];function Wv(t,e,n,r){Array.isArray(n)||(n&&(Em[0]=n.toString()),n=Em);for(var i=0;i<n.length;i++){var s=Mv(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Hv(t){Vd(t.g,function(e,n){this.g.hasOwnProperty(n)&&Md(e)},t),t.g={}}Cs.prototype.N=function(){Cs.$.N.call(this),Hv(this)};Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function bl(){this.g=!0}bl.prototype.Ea=function(){this.g=!1};function UP(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function FP(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Br(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+jP(t,n)+(r?" "+r:"")})}function $P(t,e){t.info(function(){return"TIMEOUT: "+e})}bl.prototype.info=function(){};function jP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fd(n)}catch{return e}}var Ar={},wm=null;function Ul(){return wm=wm||new we}Ar.Ta="serverreachability";function qv(t){be.call(this,Ar.Ta,t)}Te(qv,be);function ks(t){const e=Ul();Ae(e,new qv(e))}Ar.STAT_EVENT="statevent";function Kv(t,e){be.call(this,Ar.STAT_EVENT,t),this.stat=e}Te(Kv,be);function ze(t){const e=Ul();Ae(e,new Kv(e,t))}Ar.Ua="timingevent";function Gv(t,e){be.call(this,Ar.Ua,t),this.size=e}Te(Gv,be);function io(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return F.setTimeout(function(){t()},e)}var Fl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Qv={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zd(){}zd.prototype.h=null;function Tm(t){return t.h||(t.h=t.i())}function Yv(){}var so={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wd(){be.call(this,"d")}Te(Wd,be);function Hd(){be.call(this,"c")}Te(Hd,be);var nh;function $l(){}Te($l,zd);$l.prototype.g=function(){return new XMLHttpRequest};$l.prototype.i=function(){return{}};nh=new $l;function oo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Cs(this),this.P=BP,t=Xc?125:void 0,this.V=new Ml(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Xv}function Xv(){this.i=null,this.g="",this.h=!1}var BP=45e3,rh={},Qa={};A=oo.prototype;A.setTimeout=function(t){this.P=t};function ih(t,e,n){t.L=1,t.v=Bl(Yt(e)),t.s=n,t.S=!0,Jv(t,null)}function Jv(t,e){t.G=Date.now(),ao(t),t.A=Yt(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),oE(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Xv,t.g=PE(t.l,n?e:null,!t.s),0<t.O&&(t.M=new bP(Me(t.Pa,t,t.g),t.O)),Wv(t.U,t.g,"readystatechange",t.nb),e=t.I?Vv(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),ks(),UP(t.j,t.u,t.A,t.m,t.W,t.s)}A.nb=function(t){t=t.target;const e=this.M;e&&Tt(t)==3?e.l():this.Pa(t)};A.Pa=function(t){try{if(t==this.g)e:{const c=Tt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Xc||this.g&&(this.h.h||this.g.ja()||Am(this.g)))){this.J||c!=4||e==7||(e==8||0>=h?ks(3):ks(2)),jl(this);var n=this.g.da();this.ca=n;t:if(Zv(this)){var r=Am(this.g);t="";var i=r.length,s=Tt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Xn(this),ns(this);var o="";break t}this.h.i=new F.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,FP(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Rs(a)){var u=a;break t}}u=null}if(n=u)Br(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,sh(this,n);else{this.i=!1,this.o=3,ze(12),Xn(this),ns(this);break e}}this.S?(eE(this,c,o),Xc&&this.i&&c==3&&(Wv(this.U,this.V,"tick",this.mb),this.V.start())):(Br(this.j,this.m,o,null),sh(this,o)),c==4&&Xn(this),this.i&&!this.J&&(c==4?IE(this.l,this):(this.i=!1,ao(this)))}else uC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,ze(12)):(this.o=0,ze(13)),Xn(this),ns(this)}}}catch{}finally{}};function Zv(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function eE(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=zP(t,n),i==Qa){e==4&&(t.o=4,ze(14),r=!1),Br(t.j,t.m,null,"[Incomplete Response]");break}else if(i==rh){t.o=4,ze(15),Br(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Br(t.j,t.m,i,null),sh(t,i);Zv(t)&&i!=Qa&&i!=rh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,ze(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Xd(e),e.M=!0,ze(11))):(Br(t.j,t.m,n,"[Invalid Chunked Response]"),Xn(t),ns(t))}A.mb=function(){if(this.g){var t=Tt(this.g),e=this.g.ja();this.C<e.length&&(jl(this),eE(this,t,e),this.i&&t!=4&&ao(this))}};function zP(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Qa:(n=Number(e.substring(n,r)),isNaN(n)?rh:(r+=1,r+n>e.length?Qa:(e=e.slice(r,r+n),t.C=r+n,e)))}A.cancel=function(){this.J=!0,Xn(this)};function ao(t){t.Y=Date.now()+t.P,tE(t,t.P)}function tE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=io(Me(t.lb,t),e)}function jl(t){t.B&&(F.clearTimeout(t.B),t.B=null)}A.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?($P(this.j,this.A),this.L!=2&&(ks(),ze(17)),Xn(this),this.o=2,ns(this)):tE(this,this.Y-t)};function ns(t){t.l.H==0||t.J||IE(t.l,t)}function Xn(t){jl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,jd(t.V),Hv(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function sh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||oh(n.i,t))){if(!t.K&&oh(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Ja(n),ql(n);else break e;Yd(n),ze(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=io(Me(n.ib,n),6e3));if(1>=uE(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else Jn(n,11)}else if((t.K||n.g==t)&&Ja(n),!Rs(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const h=u[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const p=u[5];p!=null&&typeof p=="number"&&0<p&&(r=1.5*p,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const g=t.g;if(g){const I=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(I){var s=r.i;s.g||I.indexOf("spdy")==-1&&I.indexOf("quic")==-1&&I.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(qd(s,s.h),s.h=null))}if(r.F){const w=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.Da=w,X(r.I,r.F,w))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=AE(r,r.J?r.pa:null,r.Y),o.K){cE(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(jl(a),ao(a)),r.g=o}else wE(r);0<n.j.length&&Kl(n)}else u[0]!="stop"&&u[0]!="close"||Jn(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?Jn(n,7):Qd(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}ks(4)}catch{}}function WP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ol(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function HP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ol(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function nE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ol(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=HP(t),r=WP(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var rE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function qP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function or(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof or){this.h=t.h,Ya(this,t.j),this.s=t.s,this.g=t.g,Xa(this,t.m),this.l=t.l;var e=t.i,n=new Ns;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Im(this,n),this.o=t.o}else t&&(e=String(t).match(rE))?(this.h=!1,Ya(this,e[1]||"",!0),this.s=zi(e[2]||""),this.g=zi(e[3]||"",!0),Xa(this,e[4]),this.l=zi(e[5]||"",!0),Im(this,e[6]||"",!0),this.o=zi(e[7]||"")):(this.h=!1,this.i=new Ns(null,this.h))}or.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Wi(e,Rm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Wi(e,Rm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Wi(n,n.charAt(0)=="/"?QP:GP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Wi(n,XP)),t.join("")};function Yt(t){return new or(t)}function Ya(t,e,n){t.j=n?zi(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Xa(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Im(t,e,n){e instanceof Ns?(t.i=e,JP(t.i,t.h)):(n||(e=Wi(e,YP)),t.i=new Ns(e,t.h))}function X(t,e,n){t.i.set(e,n)}function Bl(t){return X(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function zi(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,KP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function KP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Rm=/[#\/\?@]/g,GP=/[#\?:]/g,QP=/[#\?]/g,YP=/[#\?@]/g,XP=/#/g;function Ns(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Un(t){t.g||(t.g=new Map,t.h=0,t.i&&qP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}A=Ns.prototype;A.add=function(t,e){Un(this),this.i=null,t=vi(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function iE(t,e){Un(t),e=vi(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function sE(t,e){return Un(t),e=vi(t,e),t.g.has(e)}A.forEach=function(t,e){Un(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};A.ta=function(){Un(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};A.Z=function(t){Un(this);let e=[];if(typeof t=="string")sE(this,t)&&(e=e.concat(this.g.get(vi(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};A.set=function(t,e){return Un(this),this.i=null,t=vi(this,t),sE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};A.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function oE(t,e,n){iE(t,e),0<n.length&&(t.i=null,t.g.set(vi(t,e),Od(n)),t.h+=n.length)}A.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function vi(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function JP(t,e){e&&!t.j&&(Un(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(iE(this,r),oE(this,i,n))},t)),t.j=e}var ZP=class{constructor(t,e){this.g=t,this.map=e}};function aE(t){this.l=t||eC,F.PerformanceNavigationTiming?(t=F.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(F.g&&F.g.Ka&&F.g.Ka()&&F.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var eC=10;function lE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function uE(t){return t.h?1:t.g?t.g.size:0}function oh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function qd(t,e){t.g?t.g.add(e):t.h=e}function cE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}aE.prototype.cancel=function(){if(this.i=hE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function hE(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Od(t.i)}var tC=class{stringify(t){return F.JSON.stringify(t,void 0)}parse(t){return F.JSON.parse(t,void 0)}};function nC(){this.g=new tC}function rC(t,e,n){const r=n||"";try{nE(t,function(i,s){let o=i;no(i)&&(o=Fd(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function iC(t,e){const n=new bl;if(F.Image){const r=new Image;r.onload=No(Oo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=No(Oo,n,r,"TestLoadImage: error",!1,e),r.onabort=No(Oo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=No(Oo,n,r,"TestLoadImage: timeout",!1,e),F.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Oo(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function zl(t){this.l=t.ec||null,this.j=t.ob||!1}Te(zl,zd);zl.prototype.g=function(){return new Wl(this.l,this.j)};zl.prototype.i=function(t){return function(){return t}}({});function Wl(t,e){we.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Te(Wl,we);var Kd=0;A=Wl.prototype;A.open=function(t,e){if(this.readyState!=Kd)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xs(this)};A.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||F).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};A.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,lo(this)),this.readyState=Kd};A.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xs(this)),this.g&&(this.readyState=3,xs(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof F.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;dE(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function dE(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}A.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?lo(this):xs(this),this.readyState==3&&dE(this)}};A.Za=function(t){this.g&&(this.response=this.responseText=t,lo(this))};A.Ya=function(t){this.g&&(this.response=t,lo(this))};A.ka=function(){this.g&&lo(this)};function lo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xs(t)}A.setRequestHeader=function(t,e){this.v.append(t,e)};A.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};A.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xs(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var sC=F.JSON.parse;function se(t){we.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=fE,this.L=this.M=!1}Te(se,we);var fE="",oC=/^https?$/i,aC=["POST","PUT"];A=se.prototype;A.Oa=function(t){this.M=t};A.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():nh.g(),this.C=this.u?Tm(this.u):Tm(nh),this.g.onreadystatechange=Me(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){Sm(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=F.FormData&&t instanceof F.FormData,!(0<=Nv(aC,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{gE(this),0<this.B&&((this.L=lC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Me(this.ua,this)):this.A=Bd(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){Sm(this,s)}};function lC(t){return oi&&typeof t.timeout=="number"&&t.ontimeout!==void 0}A.ua=function(){typeof xd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ae(this,"timeout"),this.abort(8))};function Sm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,pE(t),Hl(t)}function pE(t){t.F||(t.F=!0,Ae(t,"complete"),Ae(t,"error"))}A.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Ae(this,"complete"),Ae(this,"abort"),Hl(this))};A.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Hl(this,!0)),se.$.N.call(this)};A.La=function(){this.s||(this.G||this.v||this.l?mE(this):this.kb())};A.kb=function(){mE(this)};function mE(t){if(t.h&&typeof xd<"u"&&(!t.C[1]||Tt(t)!=4||t.da()!=2)){if(t.v&&Tt(t)==4)Bd(t.La,0,t);else if(Ae(t,"readystatechange"),Tt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(rE)[1]||null;!i&&F.self&&F.self.location&&(i=F.self.location.protocol.slice(0,-1)),r=!oC.test(i?i.toLowerCase():"")}n=r}if(n)Ae(t,"complete"),Ae(t,"success");else{t.m=6;try{var s=2<Tt(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",pE(t)}}finally{Hl(t)}}}}function Hl(t,e){if(t.g){gE(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Ae(t,"ready");try{n.onreadystatechange=r}catch{}}}function gE(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(F.clearTimeout(t.A),t.A=null)}A.isActive=function(){return!!this.g};function Tt(t){return t.g?t.g.readyState:0}A.da=function(){try{return 2<Tt(this)?this.g.status:-1}catch{return-1}};A.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};A.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),sC(e)}};function Am(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case fE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function uC(t){const e={};t=(t.g&&2<=Tt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Rs(t[r]))continue;var n=VP(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}PP(e,function(r){return r.join(", ")})}A.Ia=function(){return this.m};A.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function _E(t){let e="";return Vd(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Gd(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=_E(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):X(t,e,n))}function Vi(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function yE(t){this.Ga=0,this.j=[],this.l=new bl,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Vi("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Vi("baseRetryDelayMs",5e3,t),this.hb=Vi("retryDelaySeedMs",1e4,t),this.eb=Vi("forwardChannelMaxRetries",2,t),this.xa=Vi("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new aE(t&&t.concurrentRequestLimit),this.Ja=new nC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}A=yE.prototype;A.ra=8;A.H=1;function Qd(t){if(vE(t),t.H==3){var e=t.W++,n=Yt(t.I);if(X(n,"SID",t.K),X(n,"RID",e),X(n,"TYPE","terminate"),uo(t,n),e=new oo(t,t.l,e),e.L=2,e.v=Bl(Yt(n)),n=!1,F.navigator&&F.navigator.sendBeacon)try{n=F.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&F.Image&&(new Image().src=e.v,n=!0),n||(e.g=PE(e.l,null),e.g.ha(e.v)),e.G=Date.now(),ao(e)}SE(t)}function ql(t){t.g&&(Xd(t),t.g.cancel(),t.g=null)}function vE(t){ql(t),t.u&&(F.clearTimeout(t.u),t.u=null),Ja(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&F.clearTimeout(t.m),t.m=null)}function Kl(t){if(!lE(t.i)&&!t.m){t.m=!0;var e=t.Na;As||Bv(),Ps||(As(),Ps=!0),$d.add(e,t),t.C=0}}function cC(t,e){return uE(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=io(Me(t.Na,t,e),RE(t,t.C)),t.C++,!0)}A.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new oo(this,this.l,t);let s=this.s;if(this.U&&(s?(s=Vv(s),Lv(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=EE(this,i,e),n=Yt(this.I),X(n,"RID",t),X(n,"CVER",22),this.F&&X(n,"X-HTTP-Session-Id",this.F),uo(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(_E(s)))+"&"+e:this.o&&Gd(n,this.o,s)),qd(this.i,i),this.bb&&X(n,"TYPE","init"),this.P?(X(n,"$req",e),X(n,"SID","null"),i.aa=!0,ih(i,n,null)):ih(i,n,e),this.H=2}}else this.H==3&&(t?Pm(this,t):this.j.length==0||lE(this.i)||Pm(this))};function Pm(t,e){var n;e?n=e.m:n=t.W++;const r=Yt(t.I);X(r,"SID",t.K),X(r,"RID",n),X(r,"AID",t.V),uo(t,r),t.o&&t.s&&Gd(r,t.o,t.s),n=new oo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=EE(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),qd(t.i,n),ih(n,r,e)}function uo(t,e){t.na&&Vd(t.na,function(n,r){X(e,r,n)}),t.h&&nE({},function(n,r){X(e,r,n)})}function EE(t,e,n){n=Math.min(t.j.length,n);var r=t.h?Me(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{rC(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function wE(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;As||Bv(),Ps||(As(),Ps=!0),$d.add(e,t),t.A=0}}function Yd(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=io(Me(t.Ma,t),RE(t,t.A)),t.A++,!0)}A.Ma=function(){if(this.u=null,TE(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=io(Me(this.jb,this),t)}};A.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ze(10),ql(this),TE(this))};function Xd(t){t.B!=null&&(F.clearTimeout(t.B),t.B=null)}function TE(t){t.g=new oo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Yt(t.wa);X(e,"RID","rpc"),X(e,"SID",t.K),X(e,"AID",t.V),X(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&X(e,"TO",t.qa),X(e,"TYPE","xmlhttp"),uo(t,e),t.o&&t.s&&Gd(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=Bl(Yt(e)),n.s=null,n.S=!0,Jv(n,t)}A.ib=function(){this.v!=null&&(this.v=null,ql(this),Yd(this),ze(19))};function Ja(t){t.v!=null&&(F.clearTimeout(t.v),t.v=null)}function IE(t,e){var n=null;if(t.g==e){Ja(t),Xd(t),t.g=null;var r=2}else if(oh(t.i,e))n=e.F,cE(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=Ul(),Ae(r,new Gv(r,n)),Kl(t)}else wE(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&cC(t,e)||r==2&&Yd(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}}function RE(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function Jn(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=Me(t.pb,t);n||(n=new or("//www.google.com/images/cleardot.gif"),F.location&&F.location.protocol=="http"||Ya(n,"https"),Bl(n)),iC(n.toString(),r)}else ze(2);t.H=0,t.h&&t.h.za(e),SE(t),vE(t)}A.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ze(2)):(this.l.info("Failed to ping google.com"),ze(1))};function SE(t){if(t.H=0,t.ma=[],t.h){const e=hE(t.i);(e.length!=0||t.j.length!=0)&&(_m(t.ma,e),_m(t.ma,t.j),t.i.i.length=0,Od(t.j),t.j.length=0),t.h.ya()}}function AE(t,e,n){var r=n instanceof or?Yt(n):new or(n);if(r.g!="")e&&(r.g=e+"."+r.g),Xa(r,r.m);else{var i=F.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new or(null);r&&Ya(s,r),e&&(s.g=e),i&&Xa(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&X(r,n,e),X(r,"VER",t.ra),uo(t,r),r}function PE(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new se(new zl({ob:!0})):new se(t.va),e.Oa(t.J),e}A.isActive=function(){return!!this.h&&this.h.isActive(this)};function CE(){}A=CE.prototype;A.Ba=function(){};A.Aa=function(){};A.za=function(){};A.ya=function(){};A.isActive=function(){return!0};A.Va=function(){};function Za(){if(oi&&!(10<=Number(IP)))throw Error("Environmental error: no available transport.")}Za.prototype.g=function(t,e){return new nt(t,e)};function nt(t,e){we.call(this),this.g=new yE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Rs(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Rs(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ei(this)}Te(nt,we);nt.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ze(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=AE(t,null,t.Y),Kl(t)};nt.prototype.close=function(){Qd(this.g)};nt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Fd(t),t=n);e.j.push(new ZP(e.fb++,t)),e.H==3&&Kl(e)};nt.prototype.N=function(){this.g.h=null,delete this.j,Qd(this.g),delete this.g,nt.$.N.call(this)};function kE(t){Wd.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Te(kE,Wd);function NE(){Hd.call(this),this.status=1}Te(NE,Hd);function Ei(t){this.g=t}Te(Ei,CE);Ei.prototype.Ba=function(){Ae(this.g,"a")};Ei.prototype.Aa=function(t){Ae(this.g,new kE(t))};Ei.prototype.za=function(t){Ae(this.g,new NE)};Ei.prototype.ya=function(){Ae(this.g,"b")};function hC(){this.blockSize=-1}function gt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Te(gt,hC);gt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function $u(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}gt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)$u(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){$u(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){$u(this,r),i=0;break}}this.h=i,this.i+=e};gt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Q(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var dC={};function Jd(t){return-128<=t&&128>t?EP(t,function(e){return new Q([e|0],0>e?-1:0)}):new Q([t|0],0>t?-1:0)}function It(t){if(isNaN(t)||!isFinite(t))return Xr;if(0>t)return Re(It(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ah;return new Q(e,0)}function xE(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Re(xE(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=It(Math.pow(e,8)),r=Xr,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=It(Math.pow(e,s)),r=r.R(s).add(It(o))):(r=r.R(n),r=r.add(It(o)))}return r}var ah=4294967296,Xr=Jd(0),lh=Jd(1),Cm=Jd(16777216);A=Q.prototype;A.ea=function(){if(it(this))return-Re(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ah+r)*e,e*=ah}return t};A.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(qt(this))return"0";if(it(this))return"-"+Re(this).toString(t);for(var e=It(Math.pow(t,6)),n=this,r="";;){var i=tl(n,e).g;n=el(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,qt(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};A.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function qt(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function it(t){return t.h==-1}A.X=function(t){return t=el(this,t),it(t)?-1:qt(t)?0:1};function Re(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Q(n,~t.h).add(lh)}A.abs=function(){return it(this)?Re(this):this};A.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Q(n,n[n.length-1]&-2147483648?-1:0)};function el(t,e){return t.add(Re(e))}A.R=function(t){if(qt(this)||qt(t))return Xr;if(it(this))return it(t)?Re(this).R(Re(t)):Re(Re(this).R(t));if(it(t))return Re(this.R(Re(t)));if(0>this.X(Cm)&&0>t.X(Cm))return It(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Do(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Do(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Do(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Do(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Q(n,0)};function Do(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Li(t,e){this.g=t,this.h=e}function tl(t,e){if(qt(e))throw Error("division by zero");if(qt(t))return new Li(Xr,Xr);if(it(t))return e=tl(Re(t),e),new Li(Re(e.g),Re(e.h));if(it(e))return e=tl(t,Re(e)),new Li(Re(e.g),e.h);if(30<t.g.length){if(it(t)||it(e))throw Error("slowDivide_ only works with positive integers.");for(var n=lh,r=e;0>=r.X(t);)n=km(n),r=km(r);var i=Nr(n,1),s=Nr(r,1);for(r=Nr(r,2),n=Nr(n,2);!qt(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Nr(r,1),n=Nr(n,1)}return e=el(t,i.R(e)),new Li(i,e)}for(i=Xr;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=It(n),o=s.R(e);it(o)||0<o.X(t);)n-=r,s=It(n),o=s.R(e);qt(s)&&(s=lh),i=i.add(s),t=el(t,o)}return new Li(i,t)}A.gb=function(t){return tl(this,t).h};A.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Q(n,this.h&t.h)};A.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Q(n,this.h|t.h)};A.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Q(n,this.h^t.h)};function km(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Q(n,t.h)}function Nr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Q(i,t.h)}Za.prototype.createWebChannel=Za.prototype.g;nt.prototype.send=nt.prototype.u;nt.prototype.open=nt.prototype.m;nt.prototype.close=nt.prototype.close;Fl.NO_ERROR=0;Fl.TIMEOUT=8;Fl.HTTP_ERROR=6;Qv.COMPLETE="complete";Yv.EventType=so;so.OPEN="a";so.CLOSE="b";so.ERROR="c";so.MESSAGE="d";we.prototype.listen=we.prototype.O;se.prototype.listenOnce=se.prototype.P;se.prototype.getLastError=se.prototype.Sa;se.prototype.getLastErrorCode=se.prototype.Ia;se.prototype.getStatus=se.prototype.da;se.prototype.getResponseJson=se.prototype.Wa;se.prototype.getResponseText=se.prototype.ja;se.prototype.send=se.prototype.ha;se.prototype.setWithCredentials=se.prototype.Oa;gt.prototype.digest=gt.prototype.l;gt.prototype.reset=gt.prototype.reset;gt.prototype.update=gt.prototype.j;Q.prototype.add=Q.prototype.add;Q.prototype.multiply=Q.prototype.R;Q.prototype.modulo=Q.prototype.gb;Q.prototype.compare=Q.prototype.X;Q.prototype.toNumber=Q.prototype.ea;Q.prototype.toString=Q.prototype.toString;Q.prototype.getBits=Q.prototype.D;Q.fromNumber=It;Q.fromString=xE;var fC=function(){return new Za},pC=function(){return Ul()},ju=Fl,mC=Qv,gC=Ar,Nm={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Vo=Yv,_C=se,yC=gt,Jr=Q;const xm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ve.UNAUTHENTICATED=new Ve(null),Ve.GOOGLE_CREDENTIALS=new Ve("google-credentials-uid"),Ve.FIRST_PARTY=new Ve("first-party-uid"),Ve.MOCK_USER=new Ve("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wi="10.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr=new vd("@firebase/firestore");function Mi(){return gr.logLevel}function k(t,...e){if(gr.logLevel<=H.DEBUG){const n=e.map(Zd);gr.debug(`Firestore (${wi}): ${t}`,...n)}}function Xt(t,...e){if(gr.logLevel<=H.ERROR){const n=e.map(Zd);gr.error(`Firestore (${wi}): ${t}`,...n)}}function ai(t,...e){if(gr.logLevel<=H.WARN){const n=e.map(Zd);gr.warn(`Firestore (${wi}): ${t}`,...n)}}function Zd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t="Unexpected state"){const e=`FIRESTORE (${wi}) INTERNAL ASSERTION FAILED: `+t;throw Xt(e),new Error(e)}function J(t,e){t||U()}function B(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class x extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ve.UNAUTHENTICATED))}shutdown(){}}class EC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class wC{constructor(e){this.t=e,this.currentUser=Ve.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new An;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new An,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new An)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(J(typeof r.accessToken=="string"),new OE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return J(e===null||typeof e=="string"),new Ve(e)}}class TC{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ve.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class IC{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new TC(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ve.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class RC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class SC{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,k("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(J(typeof n.token=="string"),this.R=n.token,new RC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DE{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=AC(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function G(t,e){return t<e?-1:t>e?1:0}function li(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new x(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new x(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return me.fromMillis(Date.now())}static fromDate(e){return me.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new me(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?G(this.nanoseconds,e.nanoseconds):G(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{constructor(e){this.timestamp=e}static fromTimestamp(e){return new j(e)}static min(){return new j(new me(0,0))}static max(){return new j(new me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(e,n,r){n===void 0?n=0:n>e.length&&U(),r===void 0?r=e.length-n:r>e.length-n&&U(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Os.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Os?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Z extends Os{construct(e,n,r){return new Z(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new x(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Z(n)}static emptyPath(){return new Z([])}}const PC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Se extends Os{construct(e,n,r){return new Se(e,n,r)}static isValidIdentifier(e){return PC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Se.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Se(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new x(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new x(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new x(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new x(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Se(n)}static emptyPath(){return new Se([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.path=e}static fromPath(e){return new D(Z.fromString(e))}static fromName(e){return new D(Z.fromString(e).popFirst(5))}static empty(){return new D(Z.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Z.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Z.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new D(new Z(e.slice()))}}function CC(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=j.fromTimestamp(r===1e9?new me(n+1,0):new me(n,r));return new On(i,D.empty(),e)}function kC(t){return new On(t.readTime,t.key,-1)}class On{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new On(j.min(),D.empty(),-1)}static max(){return new On(j.max(),D.empty(),-1)}}function NC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=D.comparator(t.documentKey,e.documentKey),n!==0?n:G(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function co(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==xC)throw t;k("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new v((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof v?n:v.resolve(n)}catch(n){return v.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):v.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):v.reject(n)}static resolve(e){return new v((n,r)=>{n(e)})}static reject(e){return new v((n,r)=>{r(e)})}static waitFor(e){return new v((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=v.resolve(!1);for(const r of e)n=n.next(i=>i?v.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new v((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new v((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function ho(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}ef.ae=-1;function Gl(t){return t==null}function nl(t){return t===0&&1/t==-1/0}function DC(t){return typeof t=="number"&&Number.isInteger(t)&&!nl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ti(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function VE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e,n){this.comparator=e,this.root=n||Ie.EMPTY}insert(e,n){return new ne(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ie.BLACK,null,null))}remove(e){return new ne(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ie.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Lo(this.root,e,this.comparator,!0)}}class Lo{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ie{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Ie.RED,this.left=i??Ie.EMPTY,this.right=s??Ie.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Ie(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ie.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ie.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ie.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ie.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}Ie.EMPTY=null,Ie.RED=!0,Ie.BLACK=!1;Ie.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(e,n,r,i,s){return this}insert(e,n,r){return new Ie(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(e){this.comparator=e,this.data=new ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Dm(this.data.getIterator())}getIteratorFrom(e){return new Dm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class Dm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.fields=e,e.sort(Se.comparator)}static empty(){return new ht([])}unionWith(e){let n=new Pe(Se.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new LE("Invalid base64 string: "+s):s}}(e);return new $e(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new $e(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return G(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}$e.EMPTY_BYTE_STRING=new $e("");const VC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dn(t){if(J(!!t),typeof t=="string"){let e=0;const n=VC.exec(t);if(J(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:he(t.seconds),nanos:he(t.nanos)}}function he(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function _r(t){return typeof t=="string"?$e.fromBase64String(t):$e.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function nf(t){const e=t.mapValue.fields.__previous_value__;return tf(e)?nf(e):e}function Ds(t){const e=Dn(t.mapValue.fields.__local_write_time__.timestampValue);return new me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class Vs{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function yr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?tf(t)?4:MC(t)?9007199254740991:10:U()}function Dt(t,e){if(t===e)return!0;const n=yr(t);if(n!==yr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ds(t).isEqual(Ds(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Dn(i.timestampValue),a=Dn(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return _r(i.bytesValue).isEqual(_r(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return he(i.geoPointValue.latitude)===he(s.geoPointValue.latitude)&&he(i.geoPointValue.longitude)===he(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return he(i.integerValue)===he(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=he(i.doubleValue),a=he(s.doubleValue);return o===a?nl(o)===nl(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return li(t.arrayValue.values||[],e.arrayValue.values||[],Dt);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Om(o)!==Om(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!Dt(o[l],a[l])))return!1;return!0}(t,e);default:return U()}}function Ls(t,e){return(t.values||[]).find(n=>Dt(n,e))!==void 0}function ui(t,e){if(t===e)return 0;const n=yr(t),r=yr(e);if(n!==r)return G(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return G(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=he(s.integerValue||s.doubleValue),l=he(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Vm(t.timestampValue,e.timestampValue);case 4:return Vm(Ds(t),Ds(e));case 5:return G(t.stringValue,e.stringValue);case 6:return function(s,o){const a=_r(s),l=_r(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=G(a[u],l[u]);if(c!==0)return c}return G(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=G(he(s.latitude),he(o.latitude));return a!==0?a:G(he(s.longitude),he(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=ui(a[u],l[u]);if(c)return c}return G(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Mo.mapValue&&o===Mo.mapValue)return 0;if(s===Mo.mapValue)return 1;if(o===Mo.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let h=0;h<l.length&&h<c.length;++h){const p=G(l[h],c[h]);if(p!==0)return p;const g=ui(a[l[h]],u[c[h]]);if(g!==0)return g}return G(l.length,c.length)}(t.mapValue,e.mapValue);default:throw U()}}function Vm(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return G(t,e);const n=Dn(t),r=Dn(e),i=G(n.seconds,r.seconds);return i!==0?i:G(n.nanos,r.nanos)}function ci(t){return uh(t)}function uh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Dn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return _r(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return D.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=uh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${uh(n.fields[o])}`;return i+"}"}(t.mapValue):U()}function ch(t){return!!t&&"integerValue"in t}function rf(t){return!!t&&"arrayValue"in t}function Lm(t){return!!t&&"nullValue"in t}function Mm(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function sa(t){return!!t&&"mapValue"in t}function rs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ti(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=rs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=rs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function MC(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.value=e}static empty(){return new st({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!sa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=rs(n)}setAll(e){let n=Se.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=rs(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());sa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Dt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];sa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ti(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new st(rs(this.value))}}function ME(t){const e=[];return Ti(t.fields,(n,r)=>{const i=new Se([n]);if(sa(r)){const s=ME(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new ht(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Le(e,0,j.min(),j.min(),j.min(),st.empty(),0)}static newFoundDocument(e,n,r,i){return new Le(e,1,n,j.min(),r,i,0)}static newNoDocument(e,n){return new Le(e,2,n,j.min(),j.min(),st.empty(),0)}static newUnknownDocument(e,n){return new Le(e,3,n,j.min(),j.min(),st.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(j.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=st.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=st.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=j.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Le&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Le(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rl{constructor(e,n){this.position=e,this.inclusive=n}}function bm(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=D.comparator(D.fromName(o.referenceValue),n.key):r=ui(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Um(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Dt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,n="asc"){this.field=e,this.dir=n}}function bC(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bE{}class fe extends bE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new FC(e,n,r):n==="array-contains"?new BC(e,r):n==="in"?new zC(e,r):n==="not-in"?new WC(e,r):n==="array-contains-any"?new HC(e,r):new fe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new $C(e,r):new jC(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ui(n,this.value)):n!==null&&yr(this.value)===yr(n)&&this.matchesComparison(ui(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Vt extends bE{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new Vt(e,n)}matches(e){return UE(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function UE(t){return t.op==="and"}function FE(t){return UC(t)&&UE(t)}function UC(t){for(const e of t.filters)if(e instanceof Vt)return!1;return!0}function hh(t){if(t instanceof fe)return t.field.canonicalString()+t.op.toString()+ci(t.value);if(FE(t))return t.filters.map(e=>hh(e)).join(",");{const e=t.filters.map(n=>hh(n)).join(",");return`${t.op}(${e})`}}function $E(t,e){return t instanceof fe?function(r,i){return i instanceof fe&&r.op===i.op&&r.field.isEqual(i.field)&&Dt(r.value,i.value)}(t,e):t instanceof Vt?function(r,i){return i instanceof Vt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&$E(o,i.filters[a]),!0):!1}(t,e):void U()}function jE(t){return t instanceof fe?function(n){return`${n.field.canonicalString()} ${n.op} ${ci(n.value)}`}(t):t instanceof Vt?function(n){return n.op.toString()+" {"+n.getFilters().map(jE).join(" ,")+"}"}(t):"Filter"}class FC extends fe{constructor(e,n,r){super(e,n,r),this.key=D.fromName(r.referenceValue)}matches(e){const n=D.comparator(e.key,this.key);return this.matchesComparison(n)}}class $C extends fe{constructor(e,n){super(e,"in",n),this.keys=BE("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class jC extends fe{constructor(e,n){super(e,"not-in",n),this.keys=BE("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function BE(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>D.fromName(r.referenceValue))}class BC extends fe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return rf(n)&&Ls(n.arrayValue,this.value)}}class zC extends fe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ls(this.value.arrayValue,n)}}class WC extends fe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ls(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ls(this.value.arrayValue,n)}}class HC extends fe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!rf(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ls(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qC{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.le=null}}function Fm(t,e=null,n=[],r=[],i=null,s=null,o=null){return new qC(t,e,n,r,i,s,o)}function sf(t){const e=B(t);if(e.le===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>hh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Gl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ci(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ci(r)).join(",")),e.le=n}return e.le}function of(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!bC(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!$E(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Um(t.startAt,e.startAt)&&Um(t.endAt,e.endAt)}function dh(t){return D.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ql{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.he=null,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function KC(t,e,n,r,i,s,o,a){return new Ql(t,e,n,r,i,s,o,a)}function zE(t){return new Ql(t)}function $m(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function GC(t){return t.collectionGroup!==null}function is(t){const e=B(t);if(e.he===null){e.he=[];const n=new Set;for(const s of e.explicitOrderBy)e.he.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Pe(Se.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(u=>{u.isInequality()&&(a=a.add(u.field))})}),a})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.he.push(new il(s,r))}),n.has(Se.keyField().canonicalString())||e.he.push(new il(Se.keyField(),r))}return e.he}function Nt(t){const e=B(t);return e.Pe||(e.Pe=QC(e,is(t))),e.Pe}function QC(t,e){if(t.limitType==="F")return Fm(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new il(i.field,s)});const n=t.endAt?new rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new rl(t.startAt.position,t.startAt.inclusive):null;return Fm(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function fh(t,e,n){return new Ql(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yl(t,e){return of(Nt(t),Nt(e))&&t.limitType===e.limitType}function WE(t){return`${sf(Nt(t))}|lt:${t.limitType}`}function xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>jE(i)).join(", ")}]`),Gl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ci(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ci(i)).join(",")),`Target(${r})`}(Nt(t))}; limitType=${t.limitType})`}function Xl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):D.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of is(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=bm(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,is(r),i)||r.endAt&&!function(o,a,l){const u=bm(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,is(r),i))}(t,e)}function YC(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function HE(t){return(e,n)=>{let r=!1;for(const i of is(t)){const s=XC(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function XC(t,e,n){const r=t.field.isKeyField()?D.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?ui(l,u):U()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ti(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return VE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC=new ne(D.comparator);function Jt(){return JC}const qE=new ne(D.comparator);function Hi(...t){let e=qE;for(const n of t)e=e.insert(n.key,n);return e}function KE(t){let e=qE;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Zn(){return ss()}function GE(){return ss()}function ss(){return new Ii(t=>t.toString(),(t,e)=>t.isEqual(e))}const ZC=new ne(D.comparator),ek=new Pe(D.comparator);function W(...t){let e=ek;for(const n of t)e=e.add(n);return e}const tk=new Pe(G);function nk(){return tk}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QE(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:nl(e)?"-0":e}}function YE(t){return{integerValue:""+t}}function rk(t,e){return DC(e)?YE(e):QE(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this._=void 0}}function ik(t,e,n){return t instanceof sl?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&tf(s)&&(s=nf(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof Ms?JE(t,e):t instanceof bs?ZE(t,e):function(i,s){const o=XE(i,s),a=jm(o)+jm(i.Te);return ch(o)&&ch(i.Te)?YE(a):QE(i.serializer,a)}(t,e)}function sk(t,e,n){return t instanceof Ms?JE(t,e):t instanceof bs?ZE(t,e):n}function XE(t,e){return t instanceof ol?function(r){return ch(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class sl extends Jl{}class Ms extends Jl{constructor(e){super(),this.elements=e}}function JE(t,e){const n=ew(e);for(const r of t.elements)n.some(i=>Dt(i,r))||n.push(r);return{arrayValue:{values:n}}}class bs extends Jl{constructor(e){super(),this.elements=e}}function ZE(t,e){let n=ew(e);for(const r of t.elements)n=n.filter(i=>!Dt(i,r));return{arrayValue:{values:n}}}class ol extends Jl{constructor(e,n){super(),this.serializer=e,this.Te=n}}function jm(t){return he(t.integerValue||t.doubleValue)}function ew(t){return rf(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function ok(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof Ms&&i instanceof Ms||r instanceof bs&&i instanceof bs?li(r.elements,i.elements,Dt):r instanceof ol&&i instanceof ol?Dt(r.Te,i.Te):r instanceof sl&&i instanceof sl}(t.transform,e.transform)}class ak{constructor(e,n){this.version=e,this.transformResults=n}}class Gt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Gt}static exists(e){return new Gt(void 0,e)}static updateTime(e){return new Gt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Zl{}function tw(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new rw(t.key,Gt.none()):new fo(t.key,t.data,Gt.none());{const n=t.data,r=st.empty();let i=new Pe(Se.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Pr(t.key,r,new ht(i.toArray()),Gt.none())}}function lk(t,e,n){t instanceof fo?function(i,s,o){const a=i.value.clone(),l=zm(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Pr?function(i,s,o){if(!oa(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=zm(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(nw(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function os(t,e,n,r){return t instanceof fo?function(s,o,a,l){if(!oa(s.precondition,o))return a;const u=s.value.clone(),c=Wm(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Pr?function(s,o,a,l){if(!oa(s.precondition,o))return a;const u=Wm(s.fieldTransforms,l,o),c=o.data;return c.setAll(nw(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(s,o,a){return oa(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function uk(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=XE(r.transform,i||null);s!=null&&(n===null&&(n=st.empty()),n.set(r.field,s))}return n||null}function Bm(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&li(r,i,(s,o)=>ok(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends Zl{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Pr extends Zl{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function nw(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function zm(t,e,n){const r=new Map;J(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,sk(o,a,n[i]))}return r}function Wm(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ik(s,o,e))}return r}class rw extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ck extends Zl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hk{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&lk(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=os(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=GE();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=tw(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(j.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),W())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,(n,r)=>Bm(n,r))&&li(this.baseMutations,e.baseMutations,(n,r)=>Bm(n,r))}}class af{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){J(e.mutations.length===r.length);let i=function(){return ZC}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new af(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce,K;function pk(t){switch(t){default:return U();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function iw(t){if(t===void 0)return Xt("GRPC error has no .code"),E.UNKNOWN;switch(t){case ce.OK:return E.OK;case ce.CANCELLED:return E.CANCELLED;case ce.UNKNOWN:return E.UNKNOWN;case ce.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case ce.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case ce.INTERNAL:return E.INTERNAL;case ce.UNAVAILABLE:return E.UNAVAILABLE;case ce.UNAUTHENTICATED:return E.UNAUTHENTICATED;case ce.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case ce.NOT_FOUND:return E.NOT_FOUND;case ce.ALREADY_EXISTS:return E.ALREADY_EXISTS;case ce.PERMISSION_DENIED:return E.PERMISSION_DENIED;case ce.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case ce.ABORTED:return E.ABORTED;case ce.OUT_OF_RANGE:return E.OUT_OF_RANGE;case ce.UNIMPLEMENTED:return E.UNIMPLEMENTED;case ce.DATA_LOSS:return E.DATA_LOSS;default:return U()}}(K=ce||(ce={}))[K.OK=0]="OK",K[K.CANCELLED=1]="CANCELLED",K[K.UNKNOWN=2]="UNKNOWN",K[K.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",K[K.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",K[K.NOT_FOUND=5]="NOT_FOUND",K[K.ALREADY_EXISTS=6]="ALREADY_EXISTS",K[K.PERMISSION_DENIED=7]="PERMISSION_DENIED",K[K.UNAUTHENTICATED=16]="UNAUTHENTICATED",K[K.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",K[K.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",K[K.ABORTED=10]="ABORTED",K[K.OUT_OF_RANGE=11]="OUT_OF_RANGE",K[K.UNIMPLEMENTED=12]="UNIMPLEMENTED",K[K.INTERNAL=13]="INTERNAL",K[K.UNAVAILABLE=14]="UNAVAILABLE",K[K.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mk(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gk=new Jr([4294967295,4294967295],0);function Hm(t){const e=mk().encode(t),n=new yC;return n.update(e),new Uint8Array(n.digest())}function qm(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Jr([n,r],0),new Jr([i,s],0)]}class lf{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new qi(`Invalid padding: ${n}`);if(r<0)throw new qi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new qi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new qi(`Invalid padding when bitmap length is 0: ${n}`);this.Ee=8*e.length-n,this.de=Jr.fromNumber(this.Ee)}Ae(e,n,r){let i=e.add(n.multiply(Jr.fromNumber(r)));return i.compare(gk)===1&&(i=new Jr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.de).toNumber()}Re(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ee===0)return!1;const n=Hm(e),[r,i]=qm(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);if(!this.Re(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new lf(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Ee===0)return;const n=Hm(e),[r,i]=qm(n);for(let s=0;s<this.hashCount;s++){const o=this.Ae(r,i,s);this.Ve(o)}}Ve(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class qi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new eu(j.min(),i,new ne(G),Jt(),W())}}class po{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,W(),W(),W())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{constructor(e,n,r,i){this.me=e,this.removedTargetIds=n,this.key=r,this.fe=i}}class sw{constructor(e,n){this.targetId=e,this.ge=n}}class ow{constructor(e,n,r=$e.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Km{constructor(){this.pe=0,this.ye=Qm(),this.we=$e.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get Ce(){return this.be}ve(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=W(),n=W(),r=W();return this.ye.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:U()}}),new po(this.we,this.Se,e,n,r)}Me(){this.be=!1,this.ye=Qm()}xe(e,n){this.be=!0,this.ye=this.ye.insert(e,n)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1}Le(){this.be=!0,this.Se=!0}}class _k{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Jt(),this.Ke=Gm(),this.$e=new ne(G)}Ue(e){for(const n of e.me)e.fe&&e.fe.isFoundDocument()?this.We(n,e.fe):this.Ge(n,e.key,e.fe);for(const n of e.removedTargetIds)this.Ge(n,e.key,e.fe)}ze(e){this.forEachTarget(e,n=>{const r=this.je(n);switch(e.state){case 0:this.He(n)&&r.ve(e.resumeToken);break;case 1:r.Be(),r.De||r.Me(),r.ve(e.resumeToken);break;case 2:r.Be(),r.De||this.removeTarget(n);break;case 3:this.He(n)&&(r.Le(),r.ve(e.resumeToken));break;case 4:this.He(n)&&(this.Je(n),r.ve(e.resumeToken));break;default:U()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.qe.forEach((r,i)=>{this.He(i)&&n(i)})}Ye(e){const n=e.targetId,r=e.ge.count,i=this.Ze(n);if(i){const s=i.target;if(dh(s))if(r===0){const o=new D(s.path);this.Ge(n,o,Le.newNoDocument(o,j.min()))}else J(r===1);else{const o=this.Xe(n);if(o!==r){const a=this.et(e),l=a?this.tt(a,e,o):1;if(l!==0){this.Je(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.$e=this.$e.insert(n,u)}}}}}et(e){const n=e.ge.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,a;try{o=_r(r).toUint8Array()}catch(l){if(l instanceof LE)return ai("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new lf(o,i,s)}catch(l){return ai(l instanceof qi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Ee===0?null:a}tt(e,n,r){return n.ge.count===r-this.it(e,n.targetId)?0:2}it(e,n){const r=this.ke.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ke.rt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(a)||(this.Ge(n,s,null),i++)}),i}st(e){const n=new Map;this.qe.forEach((s,o)=>{const a=this.Ze(o);if(a){if(s.current&&dh(a.target)){const l=new D(a.target.path);this.Qe.get(l)!==null||this.ot(o,l)||this.Ge(o,l,Le.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Fe()),s.Me())}});let r=W();this.Ke.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Ze(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Qe.forEach((s,o)=>o.setReadTime(e));const i=new eu(e,n,this.$e,this.Qe,r);return this.Qe=Jt(),this.Ke=Gm(),this.$e=new ne(G),i}We(e,n){if(!this.He(e))return;const r=this.ot(e,n.key)?2:0;this.je(e).xe(n.key,r),this.Qe=this.Qe.insert(n.key,n),this.Ke=this.Ke.insert(n.key,this._t(n.key).add(e))}Ge(e,n,r){if(!this.He(e))return;const i=this.je(e);this.ot(e,n)?i.xe(n,1):i.Oe(n),this.Ke=this.Ke.insert(n,this._t(n).delete(e)),r&&(this.Qe=this.Qe.insert(n,r))}removeTarget(e){this.qe.delete(e)}Xe(e){const n=this.je(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ne(e){this.je(e).Ne()}je(e){let n=this.qe.get(e);return n||(n=new Km,this.qe.set(e,n)),n}_t(e){let n=this.Ke.get(e);return n||(n=new Pe(G),this.Ke=this.Ke.insert(e,n)),n}He(e){const n=this.Ze(e)!==null;return n||k("WatchChangeAggregator","Detected inactive target",e),n}Ze(e){const n=this.qe.get(e);return n&&n.De?null:this.ke.ut(e)}Je(e){this.qe.set(e,new Km),this.ke.getRemoteKeysForTarget(e).forEach(n=>{this.Ge(e,n,null)})}ot(e,n){return this.ke.getRemoteKeysForTarget(e).has(n)}}function Gm(){return new ne(D.comparator)}function Qm(){return new ne(D.comparator)}const yk=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),vk=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ek=(()=>({and:"AND",or:"OR"}))();class wk{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ph(t,e){return t.useProto3Json||Gl(e)?e:{value:e}}function al(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function aw(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tk(t,e){return al(t,e.toTimestamp())}function xt(t){return J(!!t),j.fromTimestamp(function(n){const r=Dn(n);return new me(r.seconds,r.nanos)}(t))}function uf(t,e){return function(r){return new Z(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function lw(t){const e=Z.fromString(t);return J(dw(e)),e}function mh(t,e){return uf(t.databaseId,e.path)}function Bu(t,e){const n=lw(e);if(n.get(1)!==t.databaseId.projectId)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new x(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new D(uw(n))}function gh(t,e){return uf(t.databaseId,e)}function Ik(t){const e=lw(t);return e.length===4?Z.emptyPath():uw(e)}function _h(t){return new Z(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uw(t){return J(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Ym(t,e,n){return{name:mh(t,e),fields:n.value.mapValue.fields}}function Rk(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(J(c===void 0||typeof c=="string"),$e.fromBase64String(c||"")):(J(c===void 0||c instanceof Uint8Array),$e.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?E.UNKNOWN:iw(u.code);return new x(c,u.message||"")}(o);n=new ow(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Bu(t,r.document.name),s=xt(r.document.updateTime),o=r.document.createTime?xt(r.document.createTime):j.min(),a=new st({mapValue:{fields:r.document.fields}}),l=Le.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new aa(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Bu(t,r.document),s=r.readTime?xt(r.readTime):j.min(),o=Le.newNoDocument(i,s),a=r.removedTargetIds||[];n=new aa([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Bu(t,r.document),s=r.removedTargetIds||[];n=new aa([],s,i,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new fk(i,s),a=r.targetId;n=new sw(a,o)}}return n}function Sk(t,e){let n;if(e instanceof fo)n={update:Ym(t,e.key,e.value)};else if(e instanceof rw)n={delete:mh(t,e.key)};else if(e instanceof Pr)n={update:Ym(t,e.key,e.data),updateMask:Vk(e.fieldMask)};else{if(!(e instanceof ck))return U();n={verify:mh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof sl)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ms)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof bs)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ol)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw U()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:Tk(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(t,e.precondition)),n}function Ak(t,e){return t&&t.length>0?(J(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?xt(i.updateTime):xt(s);return o.isEqual(j.min())&&(o=xt(s)),new ak(o,i.transformResults||[])}(n,e))):[]}function Pk(t,e){return{documents:[gh(t,e.path)]}}function Ck(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=gh(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=gh(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return hw(Vt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Or(h.field),direction:xk(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=ph(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function kk(t){let e=Ik(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){J(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(h){const p=cw(h);return p instanceof Vt&&FE(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(p=>function(I){return new il(Dr(I.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(I.direction))}(p))}(n.orderBy));let a=null;n.limit&&(a=function(h){let p;return p=typeof h=="object"?h.value:h,Gl(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(h){const p=!!h.before,g=h.values||[];return new rl(g,p)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const p=!h.before,g=h.values||[];return new rl(g,p)}(n.endAt)),KC(e,i,o,s,a,"F",l,u)}function Nk(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return U()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function cw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Dr(n.unaryFilter.field);return fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Dr(n.unaryFilter.field);return fe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Dr(n.unaryFilter.field);return fe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Dr(n.unaryFilter.field);return fe.create(o,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(t):t.fieldFilter!==void 0?function(n){return fe.create(Dr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Vt.create(n.compositeFilter.filters.map(r=>cw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return U()}}(n.compositeFilter.op))}(t):U()}function xk(t){return yk[t]}function Ok(t){return vk[t]}function Dk(t){return Ek[t]}function Or(t){return{fieldPath:t.canonicalString()}}function Dr(t){return Se.fromServerFormat(t.fieldPath)}function hw(t){return t instanceof fe?function(n){if(n.op==="=="){if(Mm(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Mm(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NAN"}};if(Lm(n.value))return{unaryFilter:{field:Or(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(n.field),op:Ok(n.op),value:n.value}}}(t):t instanceof Vt?function(n){const r=n.getFilters().map(i=>hw(i));return r.length===1?r[0]:{compositeFilter:{op:Dk(n.op),filters:r}}}(t):U()}function Vk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function dw(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,n,r,i,s=j.min(),o=j.min(),a=$e.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new mn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new mn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lk{constructor(e){this.ct=e}}function Mk(t){const e=kk({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?fh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bk{constructor(){this._n=new Uk}addToCollectionParentIndex(e,n){return this._n.add(n),v.resolve()}getCollectionParents(e,n){return v.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return v.resolve()}deleteFieldIndex(e,n){return v.resolve()}deleteAllFieldIndexes(e){return v.resolve()}createTargetIndexes(e,n){return v.resolve()}getDocumentsMatchingTarget(e,n){return v.resolve(null)}getIndexType(e,n){return v.resolve(0)}getFieldIndexes(e,n){return v.resolve([])}getNextCollectionGroupToUpdate(e){return v.resolve(null)}getMinOffset(e,n){return v.resolve(On.min())}getMinOffsetFromCollectionGroup(e,n){return v.resolve(On.min())}updateCollectionGroup(e,n,r){return v.resolve()}updateIndexEntries(e,n){return v.resolve()}}class Uk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Pe(Z.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Pe(Z.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hi{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new hi(0)}static Bn(){return new hi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fk{constructor(){this.changes=new Ii(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Le.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?v.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&os(r.mutation,i,ht.empty(),me.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,W()).next(()=>r))}getLocalViewOfDocuments(e,n,r=W()){const i=Zn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Hi();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Zn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,W()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Jt();const o=ss(),a=function(){return ss()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Pr)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),os(c.mutation,u,c.mutation.getFieldMask(),me.now())):o.set(u.key,ht.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var h;return a.set(u,new $k(c,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ss();let i=new ne((o,a)=>o-a),s=W();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||ht.empty();c=a.applyToLocalView(u,c),r.set(l,c);const h=(i.get(a.batchId)||W()).add(l);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,h=GE();c.forEach(p=>{if(!s.has(p)){const g=tw(n.get(p),r.get(p));g!==null&&h.set(p,g),s=s.add(p)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return v.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return D.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):GC(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):v.resolve(Zn());let a=-1,l=s;return o.next(u=>v.forEach(u,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?v.resolve():this.remoteDocumentCache.getEntry(e,c).next(p=>{l=l.insert(c,p)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,W())).next(c=>({batchId:a,changes:KE(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new D(n)).next(r=>{let i=Hi();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Hi();return this.indexManager.getCollectionParents(e,s).next(a=>v.forEach(a,l=>{const u=function(h,p){return new Ql(p,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(s));return this.getDocumentsMatchingCollectionQuery(e,u,r,i).next(c=>{c.forEach((h,p)=>{o=o.insert(h,p)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((l,u)=>{const c=u.getKey();o.get(c)===null&&(o=o.insert(c,Le.newInvalidDocument(c)))});let a=Hi();return o.forEach((l,u)=>{const c=s.get(l);c!==void 0&&os(c.mutation,u,ht.empty(),me.now()),Xl(n,u)&&(a=a.insert(l,u))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bk{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return v.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:xt(i.createTime)}}(n)),v.resolve()}getNamedQuery(e,n){return v.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(i){return{name:i.name,query:Mk(i.bundledQuery),readTime:xt(i.readTime)}}(n)),v.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zk{constructor(){this.overlays=new ne(D.comparator),this.hr=new Map}getOverlay(e,n){return v.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Zn();return v.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),v.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.hr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(r)),v.resolve()}getOverlaysForCollection(e,n,r){const i=Zn(),s=n.length+1,o=new D(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return v.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new ne((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=Zn(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=Zn(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return v.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.hr.get(i.largestBatchId).delete(r.key);this.hr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new dk(n,r));let s=this.hr.get(n);s===void 0&&(s=W(),this.hr.set(n,s)),this.hr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cf{constructor(){this.Pr=new Pe(_e.Ir),this.Tr=new Pe(_e.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new _e(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new _e(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new D(new Z([])),r=new _e(n,e),i=new _e(n,e+1),s=[];return this.Tr.forEachInRange([r,i],o=>{this.Ar(o),s.push(o.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new D(new Z([])),r=new _e(n,e),i=new _e(n,e+1);let s=W();return this.Tr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new _e(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class _e{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return D.comparator(e.key,n.key)||G(e.pr,n.pr)}static Er(e,n){return G(e.pr,n.pr)||D.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new Pe(_e.Ir)}checkEmpty(e){return v.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new hk(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.wr=this.wr.add(new _e(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return v.resolve(o)}lookupMutationBatch(e,n){return v.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.br(r),s=i<0?0:i;return v.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return v.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return v.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new _e(n,0),i=new _e(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([r,i],o=>{const a=this.Sr(o.pr);s.push(a)}),v.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Pe(G);return n.forEach(i=>{const s=new _e(i,0),o=new _e(i,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,o],a=>{r=r.add(a.pr)})}),v.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;D.isDocumentKey(s)||(s=s.child(""));const o=new _e(new D(s),0);let a=new Pe(G);return this.wr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.pr)),!0)},o),v.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const i=this.Sr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){J(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return v.forEach(n.mutations,i=>{const s=new _e(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new _e(n,0),i=this.wr.firstAfterOrEqual(r);return v.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,v.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hk{constructor(e){this.vr=e,this.docs=function(){return new ne(D.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return v.resolve(r?r.document.mutableCopy():Le.newInvalidDocument(n))}getEntries(e,n){let r=Jt();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Le.newInvalidDocument(i))}),v.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Jt();const o=n.path,a=new D(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||NC(kC(c),r)<=0||(i.has(c.key)||Xl(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return v.resolve(s)}getAllFromCollectionGroup(e,n,r,i){U()}Fr(e,n){return v.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new qk(this)}getSize(e){return v.resolve(this.size)}}class qk extends Fk{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.ar.addEntry(e,i)):this.ar.removeEntry(r)}),v.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kk{constructor(e){this.persistence=e,this.Mr=new Ii(n=>sf(n),of),this.lastRemoteSnapshotVersion=j.min(),this.highestTargetId=0,this.Or=0,this.Nr=new cf,this.targetCount=0,this.Br=hi.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,i)=>n(i)),v.resolve()}getLastRemoteSnapshotVersion(e){return v.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return v.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Br.next(),v.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),v.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Br=new hi(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,v.resolve()}updateTargetData(e,n){return this.qn(n),v.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,v.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),v.waitFor(s).next(()=>i)}getTargetCount(e){return v.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return v.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),v.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),v.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),v.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return v.resolve(r)}containsKey(e,n){return v.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gk{constructor(e,n){this.Lr={},this.overlays={},this.kr=new ef(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new Kk(this),this.indexManager=new bk,this.remoteDocumentCache=function(i){return new Hk(i)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new Lk(n),this.$r=new Bk(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new zk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Lr[e.toKey()];return r||(r=new Wk(n,this.referenceDelegate),this.Lr[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){k("MemoryPersistence","Starting transaction:",e);const i=new Qk(this.kr.next());return this.referenceDelegate.Ur(),r(i).next(s=>this.referenceDelegate.Wr(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Gr(e,n){return v.or(Object.values(this.Lr).map(r=>()=>r.containsKey(e,n)))}}class Qk extends OC{constructor(e){super(),this.currentSequenceNumber=e}}class hf{constructor(e){this.persistence=e,this.zr=new cf,this.jr=null}static Hr(e){return new hf(e)}get Jr(){if(this.jr)return this.jr;throw U()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),v.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),v.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),v.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(i=>this.Jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return v.forEach(this.Jr,r=>{const i=D.fromPath(r);return this.Yr(e,i).next(s=>{s||n.removeEntry(i,j.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return v.or([()=>v.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=i}static Ki(e,n){let r=W(),i=W();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new df(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yk{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=8}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ji(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.Hi(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new Yk;return this.Ji(e,n,o).next(a=>{if(s.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>s.result)}Yi(e,n,r,i){return r.documentReadCount<this.Wi?(Mi()<=H.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),v.resolve()):(Mi()<=H.DEBUG&&k("QueryEngine","Query:",xr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Gi*i?(Mi()<=H.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Nt(n))):v.resolve())}ji(e,n){if($m(n))return v.resolve(null);let r=Nt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=fh(n,null,"F"),r=Nt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=W(...s);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Zi(n,a);return this.Xi(n,u,o,l.readTime)?this.ji(e,fh(n,null,"F")):this.es(e,u,n,l)}))})))}Hi(e,n,r,i){return $m(n)||i.isEqual(j.min())?v.resolve(null):this.zi.getDocuments(e,r).next(s=>{const o=this.Zi(n,s);return this.Xi(n,o,r,i)?v.resolve(null):(Mi()<=H.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xr(n)),this.es(e,o,n,CC(i,-1)).next(a=>a))})}Zi(e,n){let r=new Pe(HE(e));return n.forEach((i,s)=>{Xl(e,s)&&(r=r.add(s))}),r}Xi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ji(e,n,r){return Mi()<=H.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",xr(n)),this.zi.getDocumentsMatchingQuery(e,n,On.min(),r)}es(e,n,r,i){return this.zi.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jk{constructor(e,n,r,i){this.persistence=e,this.ts=n,this.serializer=i,this.ns=new ne(G),this.rs=new Ii(s=>sf(s),of),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new jk(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function Zk(t,e,n,r){return new Jk(t,e,n,r)}async function fw(t,e){const n=B(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=W();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({us:u,removedBatchIds:o,addedBatchIds:a}))})})}function eN(t,e){const n=B(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const h=u.batch,p=h.keys();let g=v.resolve();return p.forEach(I=>{g=g.next(()=>c.getEntry(l,I)).next(w=>{const d=u.docVersions.get(I);J(d!==null),w.version.compareTo(d)<0&&(h.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),g.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=W();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function pw(t){const e=B(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function tN(t,e){const n=B(t),r=e.snapshotVersion;let i=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.os.newChangeBuffer({trackRemovals:!0});i=n.ns;const a=[];e.targetChanges.forEach((c,h)=>{const p=i.get(h);if(!p)return;a.push(n.Qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(s,c.addedDocuments,h)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(h)!==null?g=g.withResumeToken($e.EMPTY_BYTE_STRING,j.min()).withLastLimboFreeSnapshotVersion(j.min()):c.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(c.resumeToken,r)),i=i.insert(h,g),function(w,d,f){return w.resumeToken.approximateByteSize()===0||d.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:f.addedDocuments.size+f.modifiedDocuments.size+f.removedDocuments.size>0}(p,g,c)&&a.push(n.Qr.updateTargetData(s,g))});let l=Jt(),u=W();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(nN(s,o,e.documentUpdates).next(c=>{l=c.cs,u=c.ls})),!r.isEqual(j.min())){const c=n.Qr.getLastRemoteSnapshotVersion(s).next(h=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return v.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.ns=i,s))}function nN(t,e,n){let r=W(),i=W();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Jt();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(j.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):k("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{cs:o,ls:i}})}function rN(t,e){const n=B(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function iN(t,e){const n=B(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Qr.getTargetData(r,e).next(s=>s?(i=s,v.resolve(i)):n.Qr.allocateTargetId(r).next(o=>(i=new mn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.ns.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function yh(t,e,n){const r=B(t),i=r.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!ho(o))throw o;k("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(i.target)}function Xm(t,e,n){const r=B(t);let i=j.min(),s=W();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,u,c){const h=B(l),p=h.rs.get(c);return p!==void 0?v.resolve(h.ns.get(p)):h.Qr.getTargetData(u,c)}(r,o,Nt(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?i:j.min(),n?s:W())).next(a=>(sN(r,YC(e),a),{documents:a,hs:s})))}function sN(t,e,n){let r=t.ss.get(e)||j.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.ss.set(e,r)}class Jm{constructor(){this.activeTargetIds=nk()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oN{constructor(){this.no=new Jm,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Jm,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aN{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){k("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){k("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let bo=null;function zu(){return bo===null?bo=function(){return 268435456+Math.round(2147483648*Math.random())}():bo++,"0x"+bo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lN={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xe="WebChannelConnection";class cN extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${i}/databases/${s}`,this.yo=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get wo(){return!1}So(n,r,i,s,o){const a=zu(),l=this.bo(n,r);k("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(u,s,o),this.Co(n,l,u,i).then(c=>(k("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw ai("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}vo(n,r,i,s,o,a){return this.So(n,r,i,s,o)}Do(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+wi}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}bo(n,r){const i=lN[n];return`${this.fo}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,i){const s=zu();return new Promise((o,a)=>{const l=new _C;l.setWithCredentials(!0),l.listenOnce(mC.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ju.NO_ERROR:const c=l.getResponseJson();k(xe,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case ju.TIMEOUT:k(xe,`RPC '${e}' ${s} timed out`),a(new x(E.DEADLINE_EXCEEDED,"Request time out"));break;case ju.HTTP_ERROR:const h=l.getStatus();if(k(xe,`RPC '${e}' ${s} failed with status:`,h,"response text:",l.getResponseText()),h>0){let p=l.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const I=function(d){const f=d.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(f)>=0?f:E.UNKNOWN}(g.status);a(new x(I,g.message))}else a(new x(E.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new x(E.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{k(xe,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);k(xe,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}Fo(e,n,r){const i=zu(),s=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=fC(),a=pC(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");k(xe,`Creating RPC '${e}' stream ${i}: ${c}`,l);const h=o.createWebChannel(c,l);let p=!1,g=!1;const I=new uN({lo:d=>{g?k(xe,`Not sending because RPC '${e}' stream ${i} is closed:`,d):(p||(k(xe,`Opening RPC '${e}' stream ${i} transport.`),h.open(),p=!0),k(xe,`RPC '${e}' stream ${i} sending:`,d),h.send(d))},ho:()=>h.close()}),w=(d,f,m)=>{d.listen(f,_=>{try{m(_)}catch(y){setTimeout(()=>{throw y},0)}})};return w(h,Vo.EventType.OPEN,()=>{g||k(xe,`RPC '${e}' stream ${i} transport opened.`)}),w(h,Vo.EventType.CLOSE,()=>{g||(g=!0,k(xe,`RPC '${e}' stream ${i} transport closed`),I.Vo())}),w(h,Vo.EventType.ERROR,d=>{g||(g=!0,ai(xe,`RPC '${e}' stream ${i} transport errored:`,d),I.Vo(new x(E.UNAVAILABLE,"The operation could not be completed")))}),w(h,Vo.EventType.MESSAGE,d=>{var f;if(!g){const m=d.data[0];J(!!m);const _=m,y=_.error||((f=_[0])===null||f===void 0?void 0:f.error);if(y){k(xe,`RPC '${e}' stream ${i} received error:`,y);const R=y.status;let P=function(O){const ge=ce[O];if(ge!==void 0)return iw(ge)}(R),L=y.message;P===void 0&&(P=E.INTERNAL,L="Unknown error status: "+R+" with message "+y.message),g=!0,I.Vo(new x(P,L)),h.close()}else k(xe,`RPC '${e}' stream ${i} received:`,m),I.mo(m)}}),w(a,gC.STAT_EVENT,d=>{d.stat===Nm.PROXY?k(xe,`RPC '${e}' stream ${i} detected buffering proxy`):d.stat===Nm.NOPROXY&&k(xe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{I.Ro()},0),I}}function Wu(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(t){return new wk(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mw{constructor(e,n,r=1e3,i=1.5,s=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=i,this.Oo=s,this.No=0,this.Bo=null,this.Lo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Lo),i=Math.max(0,n-r);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Bo=this.oi.enqueueAfterDelay(this.timerId,i,()=>(this.Lo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Bo!==null&&(this.Bo.skipDelay(),this.Bo=null)}cancel(){this.Bo!==null&&(this.Bo.cancel(),this.Bo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gw{constructor(e,n,r,i,s,o,a,l){this.oi=e,this.$o=r,this.Uo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new mw(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(Xt(n.toString()),Xt("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Wo===n&&this.o_(r,i)},r=>{e(()=>{const i=new x(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(i)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(i=>{r(()=>this.__(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return k("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(k("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class hN extends gw{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=Rk(this.serializer,e),r=function(s){if(!("targetChange"in s))return j.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?j.min():o.readTime?xt(o.readTime):j.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=_h(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=dh(l)?{documents:Pk(s,l)}:{query:Ck(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=aw(s,o.resumeToken);const u=ph(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(j.min())>0){a.readTime=al(s,o.snapshotVersion.toTimestamp());const u=ph(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=Nk(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=_h(this.serializer),n.removeTarget=e,this.t_(n)}}class dN extends gw{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(J(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=Ak(e.writeResults,e.commitTime),r=xt(e.commitTime);return this.listener.T_(r,n)}return J(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=_h(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Sk(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fN extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.A_=!1}R_(){if(this.A_)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.So(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new x(E.UNKNOWN,i.toString())})}vo(e,n,r,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.vo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new x(E.UNKNOWN,s.toString())})}terminate(){this.A_=!0}}class pN{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(Xt(n),this.g_=!1):k("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=s,this.M_.io(o=>{r.enqueueAndForget(async()=>{Cr(this)&&(k("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=B(l);u.v_.add(4),await mo(u),u.x_.set("Unknown"),u.v_.delete(4),await nu(u)}(this))})}),this.x_=new pN(r,i)}}async function nu(t){if(Cr(t))for(const e of t.F_)await e(!0)}async function mo(t){for(const e of t.F_)await e(!1)}function _w(t,e){const n=B(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),mf(n)?pf(n):Ri(n).Jo()&&ff(n,e))}function yw(t,e){const n=B(t),r=Ri(n);n.C_.delete(e),r.Jo()&&vw(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Cr(n)&&n.x_.set("Unknown"))}function ff(t,e){if(t.O_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(j.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ri(t).c_(e)}function vw(t,e){t.O_.Ne(e),Ri(t).l_(e)}function pf(t){t.O_=new _k({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.C_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),Ri(t).start(),t.x_.p_()}function mf(t){return Cr(t)&&!Ri(t).Ho()&&t.C_.size>0}function Cr(t){return B(t).v_.size===0}function Ew(t){t.O_=void 0}async function gN(t){t.C_.forEach((e,n)=>{ff(t,e)})}async function _N(t,e){Ew(t),mf(t)?(t.x_.S_(e),pf(t)):t.x_.set("Unknown")}async function yN(t,e,n){if(t.x_.set("Online"),e instanceof ow&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.C_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.C_.delete(a),i.O_.removeTarget(a))}(t,e)}catch(r){k("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ll(t,r)}else if(e instanceof aa?t.O_.Ue(e):e instanceof sw?t.O_.Ye(e):t.O_.ze(e),!n.isEqual(j.min()))try{const r=await pw(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.O_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.C_.get(u);c&&s.C_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.C_.get(l);if(!c)return;s.C_.set(l,c.withResumeToken($e.EMPTY_BYTE_STRING,c.snapshotVersion)),vw(s,l);const h=new mn(c.target,l,u,c.sequenceNumber);ff(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){k("RemoteStore","Failed to raise snapshot:",r),await ll(t,r)}}async function ll(t,e,n){if(!ho(e))throw e;t.v_.add(1),await mo(t),t.x_.set("Offline"),n||(n=()=>pw(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{k("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await nu(t)})}function ww(t,e){return e().catch(n=>ll(t,n,e))}async function ru(t){const e=B(t),n=Vn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;vN(e);)try{const i=await rN(e.localStore,r);if(i===null){e.D_.length===0&&n.Xo();break}r=i.batchId,EN(e,i)}catch(i){await ll(e,i)}Tw(e)&&Iw(e)}function vN(t){return Cr(t)&&t.D_.length<10}function EN(t,e){t.D_.push(e);const n=Vn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function Tw(t){return Cr(t)&&!Vn(t).Ho()&&t.D_.length>0}function Iw(t){Vn(t).start()}async function wN(t){Vn(t).d_()}async function TN(t){const e=Vn(t);for(const n of t.D_)e.I_(n.mutations)}async function IN(t,e,n){const r=t.D_.shift(),i=af.from(r,e,n);await ww(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ru(t)}async function RN(t,e){e&&Vn(t).P_&&await async function(r,i){if(function(o){return pk(o)&&o!==E.ABORTED}(i.code)){const s=r.D_.shift();Vn(r).Zo(),await ww(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ru(r)}}(t,e),Tw(t)&&Iw(t)}async function eg(t,e){const n=B(t);n.asyncQueue.verifyOperationInProgress(),k("RemoteStore","RemoteStore received new credentials");const r=Cr(n);n.v_.add(3),await mo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await nu(n)}async function SN(t,e){const n=B(t);e?(n.v_.delete(2),await nu(n)):e||(n.v_.add(2),await mo(n),n.x_.set("Unknown"))}function Ri(t){return t.N_||(t.N_=function(n,r,i){const s=B(n);return s.R_(),new hN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:gN.bind(null,t),To:_N.bind(null,t),u_:yN.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),mf(t)?pf(t):t.x_.set("Unknown")):(await t.N_.stop(),Ew(t))})),t.N_}function Vn(t){return t.B_||(t.B_=function(n,r,i){const s=B(n);return s.R_(),new dN(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Po:wN.bind(null,t),To:RN.bind(null,t),E_:TN.bind(null,t),T_:IN.bind(null,t)}),t.F_.push(async e=>{e?(t.B_.Zo(),await ru(t)):(await t.B_.stop(),t.D_.length>0&&(k("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.B_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new gf(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new x(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function _f(t,e){if(Xt("AsyncQueue",`${e}: ${t}`),ho(t))return new x(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.comparator=e?(n,r)=>e(n,r)||D.comparator(n.key,r.key):(n,r)=>D.comparator(n.key,r.key),this.keyedMap=Hi(),this.sortedSet=new ne(this.comparator)}static emptySet(e){return new Zr(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Zr)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Zr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tg{constructor(){this.L_=new ne(D.comparator)}track(e){const n=e.doc.key,r=this.L_.get(n);r?e.type!==0&&r.type===3?this.L_=this.L_.insert(n,e):e.type===3&&r.type!==1?this.L_=this.L_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.L_=this.L_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.L_=this.L_.remove(n):e.type===1&&r.type===2?this.L_=this.L_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.L_=this.L_.insert(n,{type:2,doc:e.doc}):U():this.L_=this.L_.insert(n,e)}k_(){const e=[];return this.L_.inorderTraversal((n,r)=>{e.push(r)}),e}}class di{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new di(e,n,Zr.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AN{constructor(){this.q_=void 0,this.listeners=[]}}class PN{constructor(){this.queries=new Ii(e=>WE(e),Yl),this.onlineState="Unknown",this.Q_=new Set}}async function CN(t,e){const n=B(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new AN),i)try{s.q_=await n.onListen(r)}catch(o){const a=_f(o,`Initialization of query '${xr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.K_(n.onlineState),s.q_&&e.U_(s.q_)&&yf(n)}async function kN(t,e){const n=B(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function NN(t,e){const n=B(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.U_(i)&&(r=!0);o.q_=i}}r&&yf(n)}function xN(t,e,n){const r=B(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function yf(t){t.Q_.forEach(e=>{e.next()})}class ON{constructor(e,n,r){this.query=e,this.W_=n,this.G_=!1,this.z_=null,this.onlineState="Unknown",this.options=r||{}}U_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new di(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.G_?this.j_(e)&&(this.W_.next(e),n=!0):this.H_(e,this.onlineState)&&(this.J_(e),n=!0),this.z_=e,n}onError(e){this.W_.error(e)}K_(e){this.onlineState=e;let n=!1;return this.z_&&!this.G_&&this.H_(this.z_,e)&&(this.J_(this.z_),n=!0),n}H_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Y_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}j_(e){if(e.docChanges.length>0)return!0;const n=this.z_&&this.z_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}J_(e){e=di.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.G_=!0,this.W_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e){this.key=e}}class Sw{constructor(e){this.key=e}}class DN{constructor(e,n){this.query=e,this.sa=n,this.oa=null,this.hasCachedResults=!1,this.current=!1,this._a=W(),this.mutatedKeys=W(),this.aa=HE(e),this.ua=new Zr(this.aa)}get ca(){return this.sa}la(e,n){const r=n?n.ha:new tg,i=n?n.ua:this.ua;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const p=i.get(c),g=Xl(this.query,h)?h:null,I=!!p&&this.mutatedKeys.has(p.key),w=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let d=!1;p&&g?p.data.isEqual(g.data)?I!==w&&(r.track({type:3,doc:g}),d=!0):this.Pa(p,g)||(r.track({type:2,doc:g}),d=!0,(l&&this.aa(g,l)>0||u&&this.aa(g,u)<0)&&(a=!0)):!p&&g?(r.track({type:0,doc:g}),d=!0):p&&!g&&(r.track({type:1,doc:p}),d=!0,(l||u)&&(a=!0)),d&&(g?(o=o.add(g),s=w?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ua:o,ha:r,Xi:a,mutatedKeys:s}}Pa(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ua;this.ua=e.ua,this.mutatedKeys=e.mutatedKeys;const s=e.ha.k_();s.sort((u,c)=>function(p,g){const I=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return I(p)-I(g)}(u.type,c.type)||this.aa(u.doc,c.doc)),this.Ia(r);const o=n?this.Ta():[],a=this._a.size===0&&this.current?1:0,l=a!==this.oa;return this.oa=a,s.length!==0||l?{snapshot:new di(this.query,e.ua,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ea:o}:{Ea:o}}K_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ua:this.ua,ha:new tg,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Ea:[]}}da(e){return!this.sa.has(e)&&!!this.ua.has(e)&&!this.ua.get(e).hasLocalMutations}Ia(e){e&&(e.addedDocuments.forEach(n=>this.sa=this.sa.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.sa=this.sa.delete(n)),this.current=e.current)}Ta(){if(!this.current)return[];const e=this._a;this._a=W(),this.ua.forEach(r=>{this.da(r.key)&&(this._a=this._a.add(r.key))});const n=[];return e.forEach(r=>{this._a.has(r)||n.push(new Sw(r))}),this._a.forEach(r=>{e.has(r)||n.push(new Rw(r))}),n}Aa(e){this.sa=e.hs,this._a=W();const n=this.la(e.documents);return this.applyChanges(n,!0)}Ra(){return di.fromInitialDocuments(this.query,this.ua,this.mutatedKeys,this.oa===0,this.hasCachedResults)}}class VN{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class LN{constructor(e){this.key=e,this.Va=!1}}class MN{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.ma={},this.fa=new Ii(a=>WE(a),Yl),this.ga=new Map,this.pa=new Set,this.ya=new ne(D.comparator),this.wa=new Map,this.Sa=new cf,this.ba={},this.Da=new Map,this.Ca=hi.Bn(),this.onlineState="Unknown",this.va=void 0}get isPrimaryClient(){return this.va===!0}}async function bN(t,e){const n=KN(t);let r,i;const s=n.fa.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Ra();else{const o=await iN(n.localStore,Nt(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await UN(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&_w(n.remoteStore,o)}return i}async function UN(t,e,n,r,i){t.Fa=(h,p,g)=>async function(w,d,f,m){let _=d.view.la(f);_.Xi&&(_=await Xm(w.localStore,d.query,!1).then(({documents:P})=>d.view.la(P,_)));const y=m&&m.targetChanges.get(d.targetId),R=d.view.applyChanges(_,w.isPrimaryClient,y);return rg(w,d.targetId,R.Ea),R.snapshot}(t,h,p,g);const s=await Xm(t.localStore,e,!0),o=new DN(e,s.hs),a=o.la(s.documents),l=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);rg(t,n,u.Ea);const c=new VN(e,n,o);return t.fa.set(e,c),t.ga.has(n)?t.ga.get(n).push(e):t.ga.set(n,[e]),u.snapshot}async function FN(t,e){const n=B(t),r=n.fa.get(e),i=n.ga.get(r.targetId);if(i.length>1)return n.ga.set(r.targetId,i.filter(s=>!Yl(s,e))),void n.fa.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await yh(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),yw(n.remoteStore,r.targetId),vh(n,r.targetId)}).catch(co)):(vh(n,r.targetId),await yh(n.localStore,r.targetId,!0))}async function $N(t,e,n){const r=GN(t);try{const i=await function(o,a){const l=B(o),u=me.now(),c=a.reduce((g,I)=>g.add(I.key),W());let h,p;return l.persistence.runTransaction("Locally write mutations","readwrite",g=>{let I=Jt(),w=W();return l.os.getEntries(g,c).next(d=>{I=d,I.forEach((f,m)=>{m.isValidDocument()||(w=w.add(f))})}).next(()=>l.localDocuments.getOverlayedDocuments(g,I)).next(d=>{h=d;const f=[];for(const m of a){const _=uk(m,h.get(m.key).overlayedDocument);_!=null&&f.push(new Pr(m.key,_,ME(_.value.mapValue),Gt.exists(!0)))}return l.mutationQueue.addMutationBatch(g,u,f,a)}).next(d=>{p=d;const f=d.applyToLocalDocumentSet(h,w);return l.documentOverlayCache.saveOverlays(g,d.batchId,f)})}).then(()=>({batchId:p.batchId,changes:KE(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.ba[o.currentUser.toKey()];u||(u=new ne(G)),u=u.insert(a,l),o.ba[o.currentUser.toKey()]=u}(r,i.batchId,n),await go(r,i.changes),await ru(r.remoteStore)}catch(i){const s=_f(i,"Failed to persist write");n.reject(s)}}async function Aw(t,e){const n=B(t);try{const r=await tN(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.wa.get(s);o&&(J(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Va=!0:i.modifiedDocuments.size>0?J(o.Va):i.removedDocuments.size>0&&(J(o.Va),o.Va=!1))}),await go(n,r,e)}catch(r){await co(r)}}function ng(t,e,n){const r=B(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.fa.forEach((s,o)=>{const a=o.view.K_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=B(o);l.onlineState=a;let u=!1;l.queries.forEach((c,h)=>{for(const p of h.listeners)p.K_(a)&&(u=!0)}),u&&yf(l)}(r.eventManager,e),i.length&&r.ma.u_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function jN(t,e,n){const r=B(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.wa.get(e),s=i&&i.key;if(s){let o=new ne(D.comparator);o=o.insert(s,Le.newNoDocument(s,j.min()));const a=W().add(s),l=new eu(j.min(),new Map,new ne(G),o,a);await Aw(r,l),r.ya=r.ya.remove(s),r.wa.delete(e),vf(r)}else await yh(r.localStore,e,!1).then(()=>vh(r,e,n)).catch(co)}async function BN(t,e){const n=B(t),r=e.batch.batchId;try{const i=await eN(n.localStore,e);Cw(n,r,null),Pw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,i)}catch(i){await co(i)}}async function zN(t,e,n){const r=B(t);try{const i=await function(o,a){const l=B(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(h=>(J(h!==null),c=h.keys(),l.mutationQueue.removeMutationBatch(u,h))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);Cw(r,e,n),Pw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,i)}catch(i){await co(i)}}function Pw(t,e){(t.Da.get(e)||[]).forEach(n=>{n.resolve()}),t.Da.delete(e)}function Cw(t,e,n){const r=B(t);let i=r.ba[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.ba[r.currentUser.toKey()]=i}}function vh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ga.get(e))t.fa.delete(r),n&&t.ma.Ma(r,n);t.ga.delete(e),t.isPrimaryClient&&t.Sa.Vr(e).forEach(r=>{t.Sa.containsKey(r)||kw(t,r)})}function kw(t,e){t.pa.delete(e.path.canonicalString());const n=t.ya.get(e);n!==null&&(yw(t.remoteStore,n),t.ya=t.ya.remove(e),t.wa.delete(n),vf(t))}function rg(t,e,n){for(const r of n)r instanceof Rw?(t.Sa.addReference(r.key,e),WN(t,r)):r instanceof Sw?(k("SyncEngine","Document no longer in limbo: "+r.key),t.Sa.removeReference(r.key,e),t.Sa.containsKey(r.key)||kw(t,r.key)):U()}function WN(t,e){const n=e.key,r=n.path.canonicalString();t.ya.get(n)||t.pa.has(r)||(k("SyncEngine","New document in limbo: "+n),t.pa.add(r),vf(t))}function vf(t){for(;t.pa.size>0&&t.ya.size<t.maxConcurrentLimboResolutions;){const e=t.pa.values().next().value;t.pa.delete(e);const n=new D(Z.fromString(e)),r=t.Ca.next();t.wa.set(r,new LN(n)),t.ya=t.ya.insert(n,r),_w(t.remoteStore,new mn(Nt(zE(n.path)),r,"TargetPurposeLimboResolution",ef.ae))}}async function go(t,e,n){const r=B(t),i=[],s=[],o=[];r.fa.isEmpty()||(r.fa.forEach((a,l)=>{o.push(r.Fa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=df.Ki(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.ma.u_(i),await async function(l,u){const c=B(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>v.forEach(u,p=>v.forEach(p.qi,g=>c.persistence.referenceDelegate.addReference(h,p.targetId,g)).next(()=>v.forEach(p.Qi,g=>c.persistence.referenceDelegate.removeReference(h,p.targetId,g)))))}catch(h){if(!ho(h))throw h;k("LocalStore","Failed to update sequence numbers: "+h)}for(const h of u){const p=h.targetId;if(!h.fromCache){const g=c.ns.get(p),I=g.snapshotVersion,w=g.withLastLimboFreeSnapshotVersion(I);c.ns=c.ns.insert(p,w)}}}(r.localStore,s))}async function HN(t,e){const n=B(t);if(!n.currentUser.isEqual(e)){k("SyncEngine","User change. New user:",e.toKey());const r=await fw(n.localStore,e);n.currentUser=e,function(s,o){s.Da.forEach(a=>{a.forEach(l=>{l.reject(new x(E.CANCELLED,o))})}),s.Da.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.us)}}function qN(t,e){const n=B(t),r=n.wa.get(e);if(r&&r.Va)return W().add(r.key);{let i=W();const s=n.ga.get(e);if(!s)return i;for(const o of s){const a=n.fa.get(o);i=i.unionWith(a.view.ca)}return i}}function KN(t){const e=B(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Aw.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=qN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=jN.bind(null,e),e.ma.u_=NN.bind(null,e.eventManager),e.ma.Ma=xN.bind(null,e.eventManager),e}function GN(t){const e=B(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=BN.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=zN.bind(null,e),e}class ig{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=tu(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Zk(this.persistence,new Xk,e.initialUser,this.serializer)}createPersistence(e){return new Gk(hf.Hr,this.serializer)}createSharedClientState(e){return new oN}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class QN{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>ng(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=HN.bind(null,this.syncEngine),await SN(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new PN}()}createDatastore(e){const n=tu(e.databaseInfo.databaseId),r=function(s){return new cN(s)}(e.databaseInfo);return function(s,o,a,l){return new fN(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new mN(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>ng(this.syncEngine,n,0),function(){return Zm.C()?new Zm:new aN}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const h=new MN(i,s,o,a,l,u);return c&&(h.va=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=B(n);k("RemoteStore","RemoteStore shutting down."),r.v_.add(5),await mo(r),r.M_.shutdown(),r.x_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YN{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Na(this.observer.next,e)}error(e){this.observer.error?this.Na(this.observer.error,e):Xt("Uncaught Error in snapshot listener:",e.toString())}Ba(){this.muted=!0}Na(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XN{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ve.UNAUTHENTICATED,this.clientId=DE.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{k("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(k("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new x(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=_f(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hu(t,e){t.asyncQueue.verifyOperationInProgress(),k("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await fw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function sg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ZN(t);k("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>eg(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>eg(e.remoteStore,s)),t._onlineComponents=e}function JN(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function ZN(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){k("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hu(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!JN(n))throw n;ai("Error using user provided cache. Falling back to memory cache: "+n),await Hu(t,new ig)}}else k("FirestoreClient","Using default OfflineComponentProvider"),await Hu(t,new ig);return t._offlineComponents}async function Nw(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(k("FirestoreClient","Using user provided OnlineComponentProvider"),await sg(t,t._uninitializedComponentsProvider._online)):(k("FirestoreClient","Using default OnlineComponentProvider"),await sg(t,new QN))),t._onlineComponents}function ex(t){return Nw(t).then(e=>e.syncEngine)}async function tx(t){const e=await Nw(t),n=e.eventManager;return n.onListen=bN.bind(null,e.syncEngine),n.onUnlisten=FN.bind(null,e.syncEngine),n}function nx(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new YN({next:p=>{o.enqueueAndForget(()=>kN(s,h)),p.fromCache&&l.source==="server"?u.reject(new x(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(p)},error:p=>u.reject(p)}),h=new ON(a,c,{includeMetadataChanges:!0,Y_:!0});return CN(s,h)}(await tx(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ow(t,e,n){if(!n)throw new x(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function rx(t,e,n,r){if(e===!0&&r===!0)throw new x(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ag(t){if(!D.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function lg(t){if(D.isDocumentKey(t))throw new x(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Ef(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":U()}function ul(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new x(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ef(t);throw new x(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ug{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new x(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new x(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}rx("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=xw((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new x(E.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class iu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new x(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new x(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ug(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new vC;switch(r.type){case"firstParty":return new IC(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new x(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=og.get(n);r&&(k("ComponentProvider","Removing Datastore"),og.delete(n),r.terminate())}(this),Promise.resolve()}}function ix(t,e,n,r={}){var i;const s=(t=ul(t,iu))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&ai("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ve.MOCK_USER;else{a=Ky(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new x(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ve(u)}t._authCredentials=new EC(new OE(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new su(this.firestore,e,this._query)}}class dt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Pn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new dt(this.firestore,e,this._key)}}class Pn extends su{constructor(e,n,r){super(e,n,zE(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new dt(this.firestore,null,new D(e))}withConverter(e){return new Pn(this.firestore,e,this._path)}}function XO(t,e,...n){if(t=Ee(t),Ow("collection","path",e),t instanceof iu){const r=Z.fromString(e,...n);return lg(r),new Pn(t,null,r)}{if(!(t instanceof dt||t instanceof Pn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return lg(r),new Pn(t.firestore,null,r)}}function sx(t,e,...n){if(t=Ee(t),arguments.length===1&&(e=DE.V()),Ow("doc","path",e),t instanceof iu){const r=Z.fromString(e,...n);return ag(r),new dt(t,null,new D(r))}{if(!(t instanceof dt||t instanceof Pn))throw new x(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Z.fromString(e,...n));return ag(r),new dt(t.firestore,t instanceof Pn?t.converter:null,new D(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ox{constructor(){this.Ya=Promise.resolve(),this.Za=[],this.Xa=!1,this.eu=[],this.tu=null,this.nu=!1,this.ru=!1,this.iu=[],this.jo=new mw(this,"async_queue_retry"),this.su=()=>{const n=Wu();n&&k("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=Wu();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.su)}get isShuttingDown(){return this.Xa}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ou(),this._u(e)}enterRestrictedMode(e){if(!this.Xa){this.Xa=!0,this.ru=e||!1;const n=Wu();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.su)}}enqueue(e){if(this.ou(),this.Xa)return new Promise(()=>{});const n=new An;return this._u(()=>this.Xa&&this.ru?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Za.push(e),this.au()))}async au(){if(this.Za.length!==0){try{await this.Za[0](),this.Za.shift(),this.jo.reset()}catch(e){if(!ho(e))throw e;k("AsyncQueue","Operation failed with retryable error: "+e)}this.Za.length>0&&this.jo.qo(()=>this.au())}}_u(e){const n=this.Ya.then(()=>(this.nu=!0,e().catch(r=>{this.tu=r,this.nu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Xt("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.nu=!1,r))));return this.Ya=n,n}enqueueAfterDelay(e,n,r){this.ou(),this.iu.indexOf(e)>-1&&(n=0);const i=gf.createAndSchedule(this,e,n,r,s=>this.uu(s));return this.eu.push(i),i}ou(){this.tu&&U()}verifyOperationInProgress(){}async cu(){let e;do e=this.Ya,await e;while(e!==this.Ya)}lu(e){for(const n of this.eu)if(n.timerId===e)return!0;return!1}hu(e){return this.cu().then(()=>{this.eu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.eu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.cu()})}Pu(e){this.iu.push(e)}uu(e){const n=this.eu.indexOf(e);this.eu.splice(n,1)}}class wf extends iu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new ox}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Vw(this),this._firestoreClient.terminate()}}function ax(t,e){const n=typeof t=="object"?t:wd(),r=typeof t=="string"?t:e||"(default)",i=Cl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Wy("firestore");s&&ix(i,...s)}return i}function Dw(t){return t._firestoreClient||Vw(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Vw(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new LC(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,xw(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new XN(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new fi($e.fromBase64String(e))}catch(n){throw new x(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new fi($e.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tf{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new x(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Se(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lw{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class If{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new x(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new x(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return G(this._lat,e._lat)||G(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx=/^__.*__$/;class ux{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Pr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}function Mw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Rf{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Iu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new Rf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}du(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Ru(e),i}Vu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Eu({path:r,Au:!1});return i.Iu(),i}mu(e){return this.Eu({path:void 0,Au:!0})}fu(e){return cl(e,this.settings.methodName,this.settings.gu||!1,this.path,this.settings.pu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Iu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ru(this.path.get(e))}Ru(e){if(e.length===0)throw this.fu("Document fields must not be empty");if(Mw(this.Tu)&&lx.test(e))throw this.fu('Document fields cannot begin and end with "__"')}}class cx{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||tu(e)}yu(e,n,r,i=!1){return new Rf({Tu:e,methodName:n,pu:r,path:Se.emptyPath(),Au:!1,gu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hx(t){const e=t._freezeSettings(),n=tu(t._databaseId);return new cx(t._databaseId,!!e.ignoreUndefinedProperties,n)}function dx(t,e,n,r,i,s={}){const o=t.yu(s.merge||s.mergeFields?2:0,e,n,i);$w("Data must be an object, but it was:",o,r);const a=Uw(r,o);let l,u;if(s.merge)l=new ht(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const p=fx(e,h,n);if(!o.contains(p))throw new x(E.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);mx(c,p)||c.push(p)}l=new ht(c),u=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,u=o.fieldTransforms;return new ux(new st(a),l,u)}function bw(t,e){if(Fw(t=Ee(t)))return $w("Unsupported field value:",e,t),Uw(t,e);if(t instanceof Lw)return function(r,i){if(!Mw(i.Tu))throw i.fu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.fu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Au&&e.Tu!==4)throw e.fu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=bw(a,i.mu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Ee(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return rk(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=me.fromDate(r);return{timestampValue:al(i.serializer,s)}}if(r instanceof me){const s=new me(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:al(i.serializer,s)}}if(r instanceof If)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof fi)return{bytesValue:aw(i.serializer,r._byteString)};if(r instanceof dt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.fu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uf(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.fu(`Unsupported field value: ${Ef(r)}`)}(t,e)}function Uw(t,e){const n={};return VE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ti(t,(r,i)=>{const s=bw(i,e.du(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Fw(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof me||t instanceof If||t instanceof fi||t instanceof dt||t instanceof Lw)}function $w(t,e,n){if(!Fw(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=Ef(n);throw r==="an object"?e.fu(t+" a custom object"):e.fu(t+" "+r)}}function fx(t,e,n){if((e=Ee(e))instanceof Tf)return e._internalPath;if(typeof e=="string")return jw(t,e);throw cl("Field path arguments must be of type string or ",t,!1,void 0,n)}const px=new RegExp("[~\\*/\\[\\]]");function jw(t,e,n){if(e.search(px)>=0)throw cl(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tf(...e.split("."))._internalPath}catch{throw cl(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function cl(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new x(E.INVALID_ARGUMENT,a+t+l)}function mx(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new dt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new gx(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zw("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class gx extends Bw{data(){return super.data()}}function zw(t,e){return typeof e=="string"?jw(t,e):e instanceof Tf?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _x(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new x(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class yx{convertValue(e,n="none"){switch(yr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return he(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(_r(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw U()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Ti(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new If(he(e.latitude),he(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=nf(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ds(e));default:return null}}convertTimestamp(e){const n=Dn(e);return new me(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Z.fromString(e);J(dw(r));const i=new Vs(r.get(1),r.get(3)),s=new D(r.popFirst(5));return i.isEqual(n)||Xt(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vx(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uo{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ex extends Bw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zw("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class la extends Ex{data(e={}){return super.data(e)}}class wx{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Uo(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new Uo(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new x(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new la(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new la(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Uo(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Tx(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Tx(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}class Ix extends yx{constructor(e){super(),this.firestore=e}convertBytes(e){return new fi(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new dt(this.firestore,null,n)}}function JO(t){t=ul(t,su);const e=ul(t.firestore,wf),n=Dw(e),r=new Ix(e);return _x(t._query),nx(n,t._query).then(i=>new wx(e,r,t,i))}function ZO(t,e){const n=ul(t.firestore,wf),r=sx(t),i=vx(t.converter,e);return Rx(n,[dx(hx(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Gt.exists(!1))]).then(()=>r)}function Rx(t,e){return function(r,i){const s=new An;return r.asyncQueue.enqueueAndForget(async()=>$N(await ex(r),i,s)),s.promise}(Dw(t),e)}(function(e,n=!0){(function(i){wi=i})(Tr),fr(new xn("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new wf(new wC(r.getProvider("auth-internal")),new SC(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new x(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vs(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Pt(xm,"4.3.0",e),Pt(xm,"4.3.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww="firebasestorage.googleapis.com",Hw="storageBucket",Sx=2*60*1e3,Ax=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae extends Mt{constructor(e,n,r=0){super(qu(e),`Firebase Storage: ${n} (${qu(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,ae.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qu(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(oe||(oe={}));function qu(t){return"storage/"+t}function Sf(){const t="An unknown error occurred, please check the error payload for server response.";return new ae(oe.UNKNOWN,t)}function Px(t){return new ae(oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Cx(t){return new ae(oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function kx(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new ae(oe.UNAUTHENTICATED,t)}function Nx(){return new ae(oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function xx(t){return new ae(oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ox(){return new ae(oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Dx(){return new ae(oe.CANCELED,"User canceled the upload/download.")}function Vx(t){return new ae(oe.INVALID_URL,"Invalid URL '"+t+"'.")}function Lx(t){return new ae(oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Mx(){return new ae(oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Hw+"' property when initializing the app?")}function bx(){return new ae(oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Ux(){return new ae(oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Fx(t){return new ae(oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Eh(t){return new ae(oe.INVALID_ARGUMENT,t)}function qw(){return new ae(oe.APP_DELETED,"The Firebase app was deleted.")}function $x(t){return new ae(oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function as(t,e){return new ae(oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function bi(t){throw new ae(oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Ze.makeFromUrl(e,n)}catch{return new Ze(e,"")}if(r.path==="")return r;throw Lx(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(y){y.path.charAt(y.path.length-1)==="/"&&(y.path_=y.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(y){y.path_=decodeURIComponent(y.path)}const c="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),p="(/([^?#]*).*)?$",g=new RegExp(`^https?://${h}/${c}/b/${i}/o${p}`,"i"),I={bucket:1,path:3},w=n===Ww?"(?:storage.googleapis.com|storage.cloud.google.com)":n,d="([^?#]*)",f=new RegExp(`^https?://${w}/${i}/${d}`,"i"),_=[{regex:a,indices:l,postModify:s},{regex:g,indices:I,postModify:u},{regex:f,indices:{bucket:1,path:2},postModify:u}];for(let y=0;y<_.length;y++){const R=_[y],P=R.regex.exec(e);if(P){const L=P[R.indices.bucket];let M=P[R.indices.path];M||(M=""),r=new Ze(L,M),R.postModify(r);break}}if(r==null)throw Vx(e);return r}}class jx{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...d){u||(u=!0,e.apply(null,d))}function h(d){i=setTimeout(()=>{i=null,t(g,l())},d)}function p(){s&&clearTimeout(s)}function g(d,...f){if(u){p();return}if(d){p(),c.call(null,d,...f);return}if(l()||o){p(),c.call(null,d,...f);return}r<64&&(r*=2);let _;a===1?(a=2,_=0):_=(r+Math.random())*1e3,h(_)}let I=!1;function w(d){I||(I=!0,p(),!u&&(i!==null?(d||(a=2),clearTimeout(i),h(0)):d||(a=1)))}return h(0),s=setTimeout(()=>{o=!0,w(!0)},n),w}function zx(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wx(t){return t!==void 0}function Hx(t){return typeof t=="object"&&!Array.isArray(t)}function Af(t){return typeof t=="string"||t instanceof String}function cg(t){return Pf()&&t instanceof Blob}function Pf(){return typeof Blob<"u"&&!U1()}function hg(t,e,n,r){if(r<e)throw Eh(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Eh(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cf(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Kw(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ar;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ar||(ar={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qx(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n,r,i,s,o,a,l,u,c,h,p=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=h,this.retry=p,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((g,I)=>{this.resolve_=g,this.reject_=I,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Fo(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ar.NO_ERROR,l=s.getStatus();if(!a||qx(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ar.ABORT;r(!1,new Fo(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Fo(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Wx(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Sf();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?qw():Dx();o(l)}else{const l=Ox();o(l)}};this.canceled_?n(!1,new Fo(!1,null,!0)):this.backoffId_=Bx(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&zx(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Fo{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Gx(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Qx(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function Yx(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Xx(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function Jx(t,e,n,r,i,s,o=!0){const a=Kw(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return Yx(u,e),Gx(u,n),Qx(u,s),Xx(u,r),new Kx(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zx(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function eO(...t){const e=Zx();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Pf())return new Blob(t);throw new ae(oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function tO(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nO(t){if(typeof atob>"u")throw Fx("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rt={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Ku{constructor(e,n){this.data=e,this.contentType=n||null}}function rO(t,e){switch(t){case Rt.RAW:return new Ku(Gw(e));case Rt.BASE64:case Rt.BASE64URL:return new Ku(Qw(t,e));case Rt.DATA_URL:return new Ku(sO(e),oO(e))}throw Sf()}function Gw(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function iO(t){let e;try{e=decodeURIComponent(t)}catch{throw as(Rt.DATA_URL,"Malformed data URL.")}return Gw(e)}function Qw(t,e){switch(t){case Rt.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw as(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case Rt.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw as(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=nO(e)}catch(i){throw i.message.includes("polyfill")?i:as(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class Yw{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw as(Rt.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=aO(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function sO(t){const e=new Yw(t);return e.base64?Qw(Rt.BASE64,e.rest):iO(e.rest)}function oO(t){return new Yw(t).contentType}function aO(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,n){let r=0,i="";cg(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(cg(this.data_)){const r=this.data_,i=tO(r,e,n);return i===null?null:new ln(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new ln(r,!0)}}static getBlob(...e){if(Pf()){const n=e.map(r=>r instanceof ln?r.data_:r);return new ln(eO.apply(null,n))}else{const n=e.map(o=>Af(o)?rO(Rt.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new ln(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t){let e;try{e=JSON.parse(t)}catch{return null}return Hx(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lO(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function uO(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Jw(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cO(t,e){return e}class Be{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||cO}}let $o=null;function hO(t){return!Af(t)||t.length<2?t:Jw(t)}function Zw(){if($o)return $o;const t=[];t.push(new Be("bucket")),t.push(new Be("generation")),t.push(new Be("metageneration")),t.push(new Be("name","fullPath",!0));function e(s,o){return hO(o)}const n=new Be("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Be("size");return i.xform=r,t.push(i),t.push(new Be("timeCreated")),t.push(new Be("updated")),t.push(new Be("md5Hash",null,!0)),t.push(new Be("cacheControl",null,!0)),t.push(new Be("contentDisposition",null,!0)),t.push(new Be("contentEncoding",null,!0)),t.push(new Be("contentLanguage",null,!0)),t.push(new Be("contentType",null,!0)),t.push(new Be("metadata","customMetadata",!0)),$o=t,$o}function dO(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new Ze(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function fO(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return dO(r,t),r}function eT(t,e,n){const r=Xw(e);return r===null?null:fO(t,r,n)}function pO(t,e,n,r){const i=Xw(e);if(i===null||!Af(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,h=t.fullPath,p="/b/"+o(c)+"/o/"+o(h),g=Cf(p,n,r),I=Kw({alt:"media",token:u});return g+I})[0]}function mO(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class tT{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){if(!t)throw Sf()}function gO(t,e){function n(r,i){const s=eT(t,i,e);return nT(s!==null),s}return n}function _O(t,e){function n(r,i){const s=eT(t,i,e);return nT(s!==null),pO(s,i,t.host,t._protocol)}return n}function rT(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=Nx():i=kx():n.getStatus()===402?i=Cx(t.bucket):n.getStatus()===403?i=xx(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function yO(t){const e=rT(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=Px(t.path)),s.serverResponse=i.serverResponse,s}return n}function vO(t,e,n){const r=e.fullServerUrl(),i=Cf(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new tT(i,s,_O(t,n),o);return a.errorHandler=yO(e),a}function EO(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function wO(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=EO(null,e)),r}function TO(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let _="";for(let y=0;y<2;y++)_=_+Math.random().toString().slice(2);return _}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=wO(e,r,i),c=mO(u,n),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,p=`\r
--`+l+"--",g=ln.getBlob(h,r,p);if(g===null)throw bx();const I={name:u.fullPath},w=Cf(s,t.host,t._protocol),d="POST",f=t.maxUploadRetryTime,m=new tT(w,d,gO(t,n),f);return m.urlParams=I,m.headers=o,m.body=g.uploadData(),m.errorHandler=rT(e),m}class IO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ar.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ar.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ar.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw bi("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw bi("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw bi("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw bi("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw bi("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class RO extends IO{initXhr(){this.xhr_.responseType="text"}}function iT(){return new RO}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(e,n){this._service=e,n instanceof Ze?this._location=n:this._location=Ze.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new vr(e,n)}get root(){const e=new Ze(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Jw(this._location.path)}get storage(){return this._service}get parent(){const e=lO(this._location.path);if(e===null)return null;const n=new Ze(this._location.bucket,e);return new vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw $x(e)}}function SO(t,e,n){t._throwIfRoot("uploadBytes");const r=TO(t.storage,t._location,Zw(),new ln(e,!0),n);return t.storage.makeRequestWithTokens(r,iT).then(i=>({metadata:i,ref:t}))}function AO(t){t._throwIfRoot("getDownloadURL");const e=vO(t.storage,t._location,Zw());return t.storage.makeRequestWithTokens(e,iT).then(n=>{if(n===null)throw Ux();return n})}function PO(t,e){const n=uO(t._location.path,e),r=new Ze(t._location.bucket,n);return new vr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CO(t){return/^[A-Za-z]+:\/\//.test(t)}function kO(t,e){return new vr(t,e)}function sT(t,e){if(t instanceof kf){const n=t;if(n._bucket==null)throw Mx();const r=new vr(n,n._bucket);return e!=null?sT(r,e):r}else return e!==void 0?PO(t,e):t}function NO(t,e){if(e&&CO(e)){if(t instanceof kf)return kO(t,e);throw Eh("To use ref(service, url), the first argument must be a Storage instance.")}else return sT(t,e)}function dg(t,e){const n=e==null?void 0:e[Hw];return n==null?null:Ze.makeFromBucketSpec(n,t)}function xO(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:Ky(i,t.app.options.projectId))}class kf{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=Ww,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Sx,this._maxUploadRetryTime=Ax,this._requests=new Set,i!=null?this._bucket=Ze.makeFromBucketSpec(i,this._host):this._bucket=dg(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Ze.makeFromBucketSpec(this._url,e):this._bucket=dg(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hg("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hg("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new vr(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new jx(qw());{const o=Jx(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const fg="@firebase/storage",pg="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oT="storage";function eD(t,e,n){return t=Ee(t),SO(t,e,n)}function tD(t){return t=Ee(t),AO(t)}function nD(t,e){return t=Ee(t),NO(t,e)}function OO(t=wd(),e){t=Ee(t);const r=Cl(t,oT).getImmediate({identifier:e}),i=Wy("storage");return i&&DO(r,...i),r}function DO(t,e,n,r={}){xO(t,e,n,r)}function VO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new kf(n,r,i,e,Tr)}function LO(){fr(new xn(oT,VO,"PUBLIC").setMultipleInstances(!0)),Pt(fg,pg,""),Pt(fg,pg,"esm2017")}LO();const MO={apiKey:"AIzaSyBuJYG9PBmVovJYFjSBwHj6ex4ubAl1BhM",authDomain:"move-software.firebaseapp.com",projectId:"move-software",storageBucket:"move-software.appspot.com",messagingSenderId:"867199092595",appId:"1:867199092595:web:14a290118200fa185c2706"},Nf=Yy(MO),rD=dP(Nf),iD=OO(Nf),sD=ax(Nf);function bO(){return Wn.jsx("div",{className:"loader-wrapper",children:Wn.jsx("div",{className:"loader"})})}const UO=Ah.lazy(()=>dT(()=>import("./App-9f0a3e3e.js"),["assets/App-9f0a3e3e.js","assets/App-925e4738.css"]));CI.render(Wn.jsx(Ah.StrictMode,{children:Wn.jsx(C.Suspense,{fallback:Wn.jsx(bO,{}),children:Wn.jsx(T1,{basename:"/movesoftware-react/",children:Wn.jsx(UO,{})})})}),document.getElementById("root"));export{S1 as L,zO as N,Ah as R,rD as a,KO as b,WO as c,XO as d,JO as e,sD as f,mg as g,ZO as h,$O as i,Wn as j,FO as k,bO as l,nD as m,iD as n,qO as o,eD as p,tD as q,C as r,HO as s,jO as t,e1 as u,Qs as v,BO as w,p1 as x};
