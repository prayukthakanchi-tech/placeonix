(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function TE(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ay={exports:{}},Vl={},ly={exports:{}},X={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ko=Symbol.for("react.element"),IE=Symbol.for("react.portal"),SE=Symbol.for("react.fragment"),xE=Symbol.for("react.strict_mode"),kE=Symbol.for("react.profiler"),AE=Symbol.for("react.provider"),CE=Symbol.for("react.context"),RE=Symbol.for("react.forward_ref"),PE=Symbol.for("react.suspense"),bE=Symbol.for("react.memo"),NE=Symbol.for("react.lazy"),xp=Symbol.iterator;function DE(t){return t===null||typeof t!="object"?null:(t=xp&&t[xp]||t["@@iterator"],typeof t=="function"?t:null)}var uy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},cy=Object.assign,dy={};function Qi(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||uy}Qi.prototype.isReactComponent={};Qi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function hy(){}hy.prototype=Qi.prototype;function Fd(t,e,n){this.props=t,this.context=e,this.refs=dy,this.updater=n||uy}var Ud=Fd.prototype=new hy;Ud.constructor=Fd;cy(Ud,Qi.prototype);Ud.isPureReactComponent=!0;var kp=Array.isArray,fy=Object.prototype.hasOwnProperty,zd={current:null},py={key:!0,ref:!0,__self:!0,__source:!0};function my(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)fy.call(e,r)&&!py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ko,type:t,key:s,ref:o,props:i,_owner:zd.current}}function OE(t,e){return{$$typeof:ko,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Bd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ko}function ME(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ap=/\/+/g;function ju(t,e){return typeof t=="object"&&t!==null&&t.key!=null?ME(""+t.key):e.toString(36)}function ka(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ko:case IE:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ju(o,0):r,kp(i)?(n="",t!=null&&(n=t.replace(Ap,"$&/")+"/"),ka(i,e,n,"",function(h){return h})):i!=null&&(Bd(i)&&(i=OE(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Ap,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",kp(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+ju(s,l);o+=ka(s,e,n,u,i)}else if(u=DE(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+ju(s,l++),o+=ka(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ta(t,e,n){if(t==null)return t;var r=[],i=0;return ka(t,r,"","",function(s){return e.call(n,s,i++)}),r}function jE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ot={current:null},Aa={transition:null},LE={ReactCurrentDispatcher:ot,ReactCurrentBatchConfig:Aa,ReactCurrentOwner:zd};function gy(){throw Error("act(...) is not supported in production builds of React.")}X.Children={map:ta,forEach:function(t,e,n){ta(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ta(t,function(){e++}),e},toArray:function(t){return ta(t,function(e){return e})||[]},only:function(t){if(!Bd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};X.Component=Qi;X.Fragment=SE;X.Profiler=kE;X.PureComponent=Fd;X.StrictMode=xE;X.Suspense=PE;X.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=LE;X.act=gy;X.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=cy({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=zd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)fy.call(e,u)&&!py.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:ko,type:t.type,key:i,ref:s,props:r,_owner:o}};X.createContext=function(t){return t={$$typeof:CE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:AE,_context:t},t.Consumer=t};X.createElement=my;X.createFactory=function(t){var e=my.bind(null,t);return e.type=t,e};X.createRef=function(){return{current:null}};X.forwardRef=function(t){return{$$typeof:RE,render:t}};X.isValidElement=Bd;X.lazy=function(t){return{$$typeof:NE,_payload:{_status:-1,_result:t},_init:jE}};X.memo=function(t,e){return{$$typeof:bE,type:t,compare:e===void 0?null:e}};X.startTransition=function(t){var e=Aa.transition;Aa.transition={};try{t()}finally{Aa.transition=e}};X.unstable_act=gy;X.useCallback=function(t,e){return ot.current.useCallback(t,e)};X.useContext=function(t){return ot.current.useContext(t)};X.useDebugValue=function(){};X.useDeferredValue=function(t){return ot.current.useDeferredValue(t)};X.useEffect=function(t,e){return ot.current.useEffect(t,e)};X.useId=function(){return ot.current.useId()};X.useImperativeHandle=function(t,e,n){return ot.current.useImperativeHandle(t,e,n)};X.useInsertionEffect=function(t,e){return ot.current.useInsertionEffect(t,e)};X.useLayoutEffect=function(t,e){return ot.current.useLayoutEffect(t,e)};X.useMemo=function(t,e){return ot.current.useMemo(t,e)};X.useReducer=function(t,e,n){return ot.current.useReducer(t,e,n)};X.useRef=function(t){return ot.current.useRef(t)};X.useState=function(t){return ot.current.useState(t)};X.useSyncExternalStore=function(t,e,n){return ot.current.useSyncExternalStore(t,e,n)};X.useTransition=function(){return ot.current.useTransition()};X.version="18.3.1";ly.exports=X;var $=ly.exports;const yy=TE($);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var VE=$,FE=Symbol.for("react.element"),UE=Symbol.for("react.fragment"),zE=Object.prototype.hasOwnProperty,BE=VE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$E={key:!0,ref:!0,__self:!0,__source:!0};function vy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)zE.call(e,r)&&!$E.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:FE,type:t,key:s,ref:o,props:i,_owner:BE.current}}Vl.Fragment=UE;Vl.jsx=vy;Vl.jsxs=vy;ay.exports=Vl;var d=ay.exports,Tc={},_y={exports:{}},Tt={},wy={exports:{}},Ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(z,G){var K=z.length;z.push(G);e:for(;0<K;){var ce=K-1>>>1,Ee=z[ce];if(0<i(Ee,G))z[ce]=G,z[K]=Ee,K=ce;else break e}}function n(z){return z.length===0?null:z[0]}function r(z){if(z.length===0)return null;var G=z[0],K=z.pop();if(K!==G){z[0]=K;e:for(var ce=0,Ee=z.length,_r=Ee>>>1;ce<_r;){var St=2*(ce+1)-1,wr=z[St],Ot=St+1,Nn=z[Ot];if(0>i(wr,K))Ot<Ee&&0>i(Nn,wr)?(z[ce]=Nn,z[Ot]=K,ce=Ot):(z[ce]=wr,z[St]=K,ce=St);else if(Ot<Ee&&0>i(Nn,K))z[ce]=Nn,z[Ot]=K,ce=Ot;else break e}}return G}function i(z,G){var K=z.sortIndex-G.sortIndex;return K!==0?K:z.id-G.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var u=[],h=[],p=1,g=null,w=3,C=!1,P=!1,D=!1,F=typeof setTimeout=="function"?setTimeout:null,k=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(z){for(var G=n(h);G!==null;){if(G.callback===null)r(h);else if(G.startTime<=z)r(h),G.sortIndex=G.expirationTime,e(u,G);else break;G=n(h)}}function b(z){if(D=!1,_(z),!P)if(n(u)!==null)P=!0,$e(M);else{var G=n(h);G!==null&&ns(b,G.startTime-z)}}function M(z,G){P=!1,D&&(D=!1,k(y),y=-1),C=!0;var K=w;try{for(_(G),g=n(u);g!==null&&(!(g.expirationTime>G)||z&&!E());){var ce=g.callback;if(typeof ce=="function"){g.callback=null,w=g.priorityLevel;var Ee=ce(g.expirationTime<=G);G=t.unstable_now(),typeof Ee=="function"?g.callback=Ee:g===n(u)&&r(u),_(G)}else r(u);g=n(u)}if(g!==null)var _r=!0;else{var St=n(h);St!==null&&ns(b,St.startTime-G),_r=!1}return _r}finally{g=null,w=K,C=!1}}var j=!1,T=null,y=-1,I=5,x=-1;function E(){return!(t.unstable_now()-x<I)}function A(){if(T!==null){var z=t.unstable_now();x=z;var G=!0;try{G=T(!0,z)}finally{G?S():(j=!1,T=null)}}else j=!1}var S;if(typeof v=="function")S=function(){v(A)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,et=pe.port2;pe.port1.onmessage=A,S=function(){et.postMessage(null)}}else S=function(){F(A,0)};function $e(z){T=z,j||(j=!0,S())}function ns(z,G){y=F(function(){z(t.unstable_now())},G)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){P||C||(P=!0,$e(M))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return w},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function(z){switch(w){case 1:case 2:case 3:var G=3;break;default:G=w}var K=w;w=G;try{return z()}finally{w=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,G){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=w;w=z;try{return G()}finally{w=K}},t.unstable_scheduleCallback=function(z,G,K){var ce=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?ce+K:ce):K=ce,z){case 1:var Ee=-1;break;case 2:Ee=250;break;case 5:Ee=1073741823;break;case 4:Ee=1e4;break;default:Ee=5e3}return Ee=K+Ee,z={id:p++,callback:G,priorityLevel:z,startTime:K,expirationTime:Ee,sortIndex:-1},K>ce?(z.sortIndex=K,e(h,z),n(u)===null&&z===n(h)&&(D?(k(y),y=-1):D=!0,ns(b,K-ce))):(z.sortIndex=Ee,e(u,z),P||C||(P=!0,$e(M))),z},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(z){var G=w;return function(){var K=w;w=G;try{return z.apply(this,arguments)}finally{w=K}}}})(Ey);wy.exports=Ey;var WE=wy.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var HE=$,Et=WE;function V(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ty=new Set,Xs={};function Xr(t,e){Li(t,e),Li(t+"Capture",e)}function Li(t,e){for(Xs[t]=e,t=0;t<e.length;t++)Ty.add(e[t])}var Sn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ic=Object.prototype.hasOwnProperty,qE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Cp={},Rp={};function GE(t){return Ic.call(Rp,t)?!0:Ic.call(Cp,t)?!1:qE.test(t)?Rp[t]=!0:(Cp[t]=!0,!1)}function KE(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function QE(t,e,n,r){if(e===null||typeof e>"u"||KE(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function at(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ze[t]=new at(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ze[e]=new at(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ze[t]=new at(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ze[t]=new at(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ze[t]=new at(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ze[t]=new at(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ze[t]=new at(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ze[t]=new at(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ze[t]=new at(t,5,!1,t.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace($d,Wd);ze[e]=new at(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace($d,Wd);ze[e]=new at(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace($d,Wd);ze[e]=new at(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!1,!1)});ze.xlinkHref=new at("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ze[t]=new at(t,1,!1,t.toLowerCase(),null,!0,!0)});function Hd(t,e,n,r){var i=ze.hasOwnProperty(e)?ze[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(QE(e,n,i,r)&&(n=null),r||i===null?GE(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Pn=HE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,na=Symbol.for("react.element"),di=Symbol.for("react.portal"),hi=Symbol.for("react.fragment"),qd=Symbol.for("react.strict_mode"),Sc=Symbol.for("react.profiler"),Iy=Symbol.for("react.provider"),Sy=Symbol.for("react.context"),Gd=Symbol.for("react.forward_ref"),xc=Symbol.for("react.suspense"),kc=Symbol.for("react.suspense_list"),Kd=Symbol.for("react.memo"),zn=Symbol.for("react.lazy"),xy=Symbol.for("react.offscreen"),Pp=Symbol.iterator;function _s(t){return t===null||typeof t!="object"?null:(t=Pp&&t[Pp]||t["@@iterator"],typeof t=="function"?t:null)}var ye=Object.assign,Lu;function Rs(t){if(Lu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Lu=e&&e[1]||""}return`
`+Lu+t}var Vu=!1;function Fu(t,e){if(!t||Vu)return"";Vu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(h){var r=h}Reflect.construct(t,[],e)}else{try{e.call()}catch(h){r=h}t.call(e.prototype)}else{try{throw Error()}catch(h){r=h}t()}}catch(h){if(h&&r&&typeof h.stack=="string"){for(var i=h.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=l);break}}}finally{Vu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Rs(t):""}function YE(t){switch(t.tag){case 5:return Rs(t.type);case 16:return Rs("Lazy");case 13:return Rs("Suspense");case 19:return Rs("SuspenseList");case 0:case 2:case 15:return t=Fu(t.type,!1),t;case 11:return t=Fu(t.type.render,!1),t;case 1:return t=Fu(t.type,!0),t;default:return""}}function Ac(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hi:return"Fragment";case di:return"Portal";case Sc:return"Profiler";case qd:return"StrictMode";case xc:return"Suspense";case kc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Sy:return(t.displayName||"Context")+".Consumer";case Iy:return(t._context.displayName||"Context")+".Provider";case Gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Kd:return e=t.displayName||null,e!==null?e:Ac(t.type)||"Memo";case zn:e=t._payload,t=t._init;try{return Ac(t(e))}catch{}}return null}function JE(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ac(e);case 8:return e===qd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function ar(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ky(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function XE(t){var e=ky(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ra(t){t._valueTracker||(t._valueTracker=XE(t))}function Ay(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=ky(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Ga(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Cc(t,e){var n=e.checked;return ye({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function bp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=ar(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Cy(t,e){e=e.checked,e!=null&&Hd(t,"checked",e,!1)}function Rc(t,e){Cy(t,e);var n=ar(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Pc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Pc(t,e.type,ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Np(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Pc(t,e,n){(e!=="number"||Ga(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ps=Array.isArray;function Si(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+ar(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function bc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(V(91));return ye({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(V(92));if(Ps(n)){if(1<n.length)throw Error(V(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:ar(n)}}function Ry(t,e){var n=ar(e.value),r=ar(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Py(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Py(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,by=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Zs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ZE=["Webkit","ms","Moz","O"];Object.keys(js).forEach(function(t){ZE.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),js[e]=js[t]})});function Ny(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||js.hasOwnProperty(t)&&js[t]?(""+e).trim():e+"px"}function Dy(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Ny(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var e1=ye({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Dc(t,e){if(e){if(e1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(V(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(V(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(V(61))}if(e.style!=null&&typeof e.style!="object")throw Error(V(62))}}function Oc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mc=null;function Qd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jc=null,xi=null,ki=null;function Mp(t){if(t=Ro(t)){if(typeof jc!="function")throw Error(V(280));var e=t.stateNode;e&&(e=$l(e),jc(t.stateNode,t.type,e))}}function Oy(t){xi?ki?ki.push(t):ki=[t]:xi=t}function My(){if(xi){var t=xi,e=ki;if(ki=xi=null,Mp(t),e)for(t=0;t<e.length;t++)Mp(e[t])}}function jy(t,e){return t(e)}function Ly(){}var Uu=!1;function Vy(t,e,n){if(Uu)return t(e,n);Uu=!0;try{return jy(t,e,n)}finally{Uu=!1,(xi!==null||ki!==null)&&(Ly(),My())}}function eo(t,e){var n=t.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(V(231,e,typeof n));return n}var Lc=!1;if(Sn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Lc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Lc=!1}function t1(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(p){this.onError(p)}}var Ls=!1,Ka=null,Qa=!1,Vc=null,n1={onError:function(t){Ls=!0,Ka=t}};function r1(t,e,n,r,i,s,o,l,u){Ls=!1,Ka=null,t1.apply(n1,arguments)}function i1(t,e,n,r,i,s,o,l,u){if(r1.apply(this,arguments),Ls){if(Ls){var h=Ka;Ls=!1,Ka=null}else throw Error(V(198));Qa||(Qa=!0,Vc=h)}}function Zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Fy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function jp(t){if(Zr(t)!==t)throw Error(V(188))}function s1(t){var e=t.alternate;if(!e){if(e=Zr(t),e===null)throw Error(V(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return jp(i),t;if(s===r)return jp(i),e;s=s.sibling}throw Error(V(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(V(189))}}if(n.alternate!==r)throw Error(V(190))}if(n.tag!==3)throw Error(V(188));return n.stateNode.current===n?t:e}function Uy(t){return t=s1(t),t!==null?zy(t):null}function zy(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=zy(t);if(e!==null)return e;t=t.sibling}return null}var By=Et.unstable_scheduleCallback,Lp=Et.unstable_cancelCallback,o1=Et.unstable_shouldYield,a1=Et.unstable_requestPaint,Te=Et.unstable_now,l1=Et.unstable_getCurrentPriorityLevel,Yd=Et.unstable_ImmediatePriority,$y=Et.unstable_UserBlockingPriority,Ya=Et.unstable_NormalPriority,u1=Et.unstable_LowPriority,Wy=Et.unstable_IdlePriority,Fl=null,rn=null;function c1(t){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot(Fl,t,void 0,(t.current.flags&128)===128)}catch{}}var Ht=Math.clz32?Math.clz32:f1,d1=Math.log,h1=Math.LN2;function f1(t){return t>>>=0,t===0?32:31-(d1(t)/h1|0)|0}var sa=64,oa=4194304;function bs(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ja(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=bs(l):(s&=o,s!==0&&(r=bs(s)))}else o=n&~i,o!==0?r=bs(o):s!==0&&(r=bs(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Ht(e),i=1<<n,r|=t[n],e&=~i;return r}function p1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function m1(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Ht(s),l=1<<o,u=i[o];u===-1?(!(l&n)||l&r)&&(i[o]=p1(l,e)):u<=e&&(t.expiredLanes|=l),s&=~l}}function Fc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Hy(){var t=sa;return sa<<=1,!(sa&4194240)&&(sa=64),t}function zu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Ht(e),t[e]=n}function g1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Ht(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Jd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Ht(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var re=0;function qy(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Gy,Xd,Ky,Qy,Yy,Uc=!1,aa=[],Jn=null,Xn=null,Zn=null,to=new Map,no=new Map,$n=[],y1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Vp(t,e){switch(t){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":Xn=null;break;case"mouseover":case"mouseout":Zn=null;break;case"pointerover":case"pointerout":to.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":no.delete(e.pointerId)}}function Es(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=Ro(e),e!==null&&Xd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function v1(t,e,n,r,i){switch(e){case"focusin":return Jn=Es(Jn,t,e,n,r,i),!0;case"dragenter":return Xn=Es(Xn,t,e,n,r,i),!0;case"mouseover":return Zn=Es(Zn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return to.set(s,Es(to.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,no.set(s,Es(no.get(s)||null,t,e,n,r,i)),!0}return!1}function Jy(t){var e=Rr(t.target);if(e!==null){var n=Zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Fy(n),e!==null){t.blockedOn=e,Yy(t.priority,function(){Ky(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ca(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Mc=r,n.target.dispatchEvent(r),Mc=null}else return e=Ro(n),e!==null&&Xd(e),t.blockedOn=n,!1;e.shift()}return!0}function Fp(t,e,n){Ca(t)&&n.delete(e)}function _1(){Uc=!1,Jn!==null&&Ca(Jn)&&(Jn=null),Xn!==null&&Ca(Xn)&&(Xn=null),Zn!==null&&Ca(Zn)&&(Zn=null),to.forEach(Fp),no.forEach(Fp)}function Ts(t,e){t.blockedOn===e&&(t.blockedOn=null,Uc||(Uc=!0,Et.unstable_scheduleCallback(Et.unstable_NormalPriority,_1)))}function ro(t){function e(i){return Ts(i,t)}if(0<aa.length){Ts(aa[0],t);for(var n=1;n<aa.length;n++){var r=aa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Jn!==null&&Ts(Jn,t),Xn!==null&&Ts(Xn,t),Zn!==null&&Ts(Zn,t),to.forEach(e),no.forEach(e),n=0;n<$n.length;n++)r=$n[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<$n.length&&(n=$n[0],n.blockedOn===null);)Jy(n),n.blockedOn===null&&$n.shift()}var Ai=Pn.ReactCurrentBatchConfig,Xa=!0;function w1(t,e,n,r){var i=re,s=Ai.transition;Ai.transition=null;try{re=1,Zd(t,e,n,r)}finally{re=i,Ai.transition=s}}function E1(t,e,n,r){var i=re,s=Ai.transition;Ai.transition=null;try{re=4,Zd(t,e,n,r)}finally{re=i,Ai.transition=s}}function Zd(t,e,n,r){if(Xa){var i=zc(t,e,n,r);if(i===null)Ju(t,e,r,Za,n),Vp(t,r);else if(v1(i,t,e,n,r))r.stopPropagation();else if(Vp(t,r),e&4&&-1<y1.indexOf(t)){for(;i!==null;){var s=Ro(i);if(s!==null&&Gy(s),s=zc(t,e,n,r),s===null&&Ju(t,e,r,Za,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Ju(t,e,r,null,n)}}var Za=null;function zc(t,e,n,r){if(Za=null,t=Qd(r),t=Rr(t),t!==null)if(e=Zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Fy(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Za=t,null}function Xy(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(l1()){case Yd:return 1;case $y:return 4;case Ya:case u1:return 16;case Wy:return 536870912;default:return 16}default:return 16}}var Qn=null,eh=null,Ra=null;function Zy(){if(Ra)return Ra;var t,e=eh,n=e.length,r,i="value"in Qn?Qn.value:Qn.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Ra=i.slice(t,1<r?1-r:void 0)}function Pa(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function la(){return!0}function Up(){return!1}function It(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?la:Up,this.isPropagationStopped=Up,this}return ye(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=la)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=la)},persist:function(){},isPersistent:la}),e}var Yi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},th=It(Yi),Co=ye({},Yi,{view:0,detail:0}),T1=It(Co),Bu,$u,Is,Ul=ye({},Co,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nh,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Is&&(Is&&t.type==="mousemove"?(Bu=t.screenX-Is.screenX,$u=t.screenY-Is.screenY):$u=Bu=0,Is=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:$u}}),zp=It(Ul),I1=ye({},Ul,{dataTransfer:0}),S1=It(I1),x1=ye({},Co,{relatedTarget:0}),Wu=It(x1),k1=ye({},Yi,{animationName:0,elapsedTime:0,pseudoElement:0}),A1=It(k1),C1=ye({},Yi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),R1=It(C1),P1=ye({},Yi,{data:0}),Bp=It(P1),b1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},N1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},D1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function O1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=D1[t])?!!e[t]:!1}function nh(){return O1}var M1=ye({},Co,{key:function(t){if(t.key){var e=b1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Pa(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?N1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nh,charCode:function(t){return t.type==="keypress"?Pa(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Pa(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),j1=It(M1),L1=ye({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$p=It(L1),V1=ye({},Co,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nh}),F1=It(V1),U1=ye({},Yi,{propertyName:0,elapsedTime:0,pseudoElement:0}),z1=It(U1),B1=ye({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),$1=It(B1),W1=[9,13,27,32],rh=Sn&&"CompositionEvent"in window,Vs=null;Sn&&"documentMode"in document&&(Vs=document.documentMode);var H1=Sn&&"TextEvent"in window&&!Vs,ev=Sn&&(!rh||Vs&&8<Vs&&11>=Vs),Wp=" ",Hp=!1;function tv(t,e){switch(t){case"keyup":return W1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fi=!1;function q1(t,e){switch(t){case"compositionend":return nv(e);case"keypress":return e.which!==32?null:(Hp=!0,Wp);case"textInput":return t=e.data,t===Wp&&Hp?null:t;default:return null}}function G1(t,e){if(fi)return t==="compositionend"||!rh&&tv(t,e)?(t=Zy(),Ra=eh=Qn=null,fi=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return ev&&e.locale!=="ko"?null:e.data;default:return null}}var K1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function qp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!K1[t.type]:e==="textarea"}function rv(t,e,n,r){Oy(r),e=el(e,"onChange"),0<e.length&&(n=new th("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Fs=null,io=null;function Q1(t){pv(t,0)}function zl(t){var e=gi(t);if(Ay(e))return t}function Y1(t,e){if(t==="change")return e}var iv=!1;if(Sn){var Hu;if(Sn){var qu="oninput"in document;if(!qu){var Gp=document.createElement("div");Gp.setAttribute("oninput","return;"),qu=typeof Gp.oninput=="function"}Hu=qu}else Hu=!1;iv=Hu&&(!document.documentMode||9<document.documentMode)}function Kp(){Fs&&(Fs.detachEvent("onpropertychange",sv),io=Fs=null)}function sv(t){if(t.propertyName==="value"&&zl(io)){var e=[];rv(e,io,t,Qd(t)),Vy(Q1,e)}}function J1(t,e,n){t==="focusin"?(Kp(),Fs=e,io=n,Fs.attachEvent("onpropertychange",sv)):t==="focusout"&&Kp()}function X1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zl(io)}function Z1(t,e){if(t==="click")return zl(e)}function eT(t,e){if(t==="input"||t==="change")return zl(e)}function tT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Gt=typeof Object.is=="function"?Object.is:tT;function so(t,e){if(Gt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ic.call(e,i)||!Gt(t[i],e[i]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Yp(t,e){var n=Qp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function ov(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?ov(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function av(){for(var t=window,e=Ga();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ga(t.document)}return e}function ih(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function nT(t){var e=av(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&ov(n.ownerDocument.documentElement,n)){if(r!==null&&ih(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Yp(n,s);var o=Yp(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var rT=Sn&&"documentMode"in document&&11>=document.documentMode,pi=null,Bc=null,Us=null,$c=!1;function Jp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;$c||pi==null||pi!==Ga(r)||(r=pi,"selectionStart"in r&&ih(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Us&&so(Us,r)||(Us=r,r=el(Bc,"onSelect"),0<r.length&&(e=new th("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pi)))}function ua(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mi={animationend:ua("Animation","AnimationEnd"),animationiteration:ua("Animation","AnimationIteration"),animationstart:ua("Animation","AnimationStart"),transitionend:ua("Transition","TransitionEnd")},Gu={},lv={};Sn&&(lv=document.createElement("div").style,"AnimationEvent"in window||(delete mi.animationend.animation,delete mi.animationiteration.animation,delete mi.animationstart.animation),"TransitionEvent"in window||delete mi.transitionend.transition);function Bl(t){if(Gu[t])return Gu[t];if(!mi[t])return t;var e=mi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in lv)return Gu[t]=e[n];return t}var uv=Bl("animationend"),cv=Bl("animationiteration"),dv=Bl("animationstart"),hv=Bl("transitionend"),fv=new Map,Xp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mr(t,e){fv.set(t,e),Xr(e,[t])}for(var Ku=0;Ku<Xp.length;Ku++){var Qu=Xp[Ku],iT=Qu.toLowerCase(),sT=Qu[0].toUpperCase()+Qu.slice(1);mr(iT,"on"+sT)}mr(uv,"onAnimationEnd");mr(cv,"onAnimationIteration");mr(dv,"onAnimationStart");mr("dblclick","onDoubleClick");mr("focusin","onFocus");mr("focusout","onBlur");mr(hv,"onTransitionEnd");Li("onMouseEnter",["mouseout","mouseover"]);Li("onMouseLeave",["mouseout","mouseover"]);Li("onPointerEnter",["pointerout","pointerover"]);Li("onPointerLeave",["pointerout","pointerover"]);Xr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Xr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Xr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Xr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Xr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ns="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oT=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ns));function Zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,i1(r,e,void 0,t),t.currentTarget=null}function pv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;Zp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;Zp(i,l,h),s=u}}}if(Qa)throw t=Vc,Qa=!1,Vc=null,t}function le(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var r=t+"__bubble";n.has(r)||(mv(e,t,2,!1),n.add(r))}function Yu(t,e,n){var r=0;e&&(r|=4),mv(n,t,r,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function oo(t){if(!t[ca]){t[ca]=!0,Ty.forEach(function(n){n!=="selectionchange"&&(oT.has(n)||Yu(n,!1,t),Yu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,Yu("selectionchange",!1,e))}}function mv(t,e,n,r){switch(Xy(e)){case 1:var i=w1;break;case 4:i=E1;break;default:i=Zd}n=i.bind(null,e,n,t),i=void 0,!Lc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Ju(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Rr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Vy(function(){var h=s,p=Qd(n),g=[];e:{var w=fv.get(t);if(w!==void 0){var C=th,P=t;switch(t){case"keypress":if(Pa(n)===0)break e;case"keydown":case"keyup":C=j1;break;case"focusin":P="focus",C=Wu;break;case"focusout":P="blur",C=Wu;break;case"beforeblur":case"afterblur":C=Wu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=S1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=F1;break;case uv:case cv:case dv:C=A1;break;case hv:C=z1;break;case"scroll":C=T1;break;case"wheel":C=$1;break;case"copy":case"cut":case"paste":C=R1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=$p}var D=(e&4)!==0,F=!D&&t==="scroll",k=D?w!==null?w+"Capture":null:w;D=[];for(var v=h,_;v!==null;){_=v;var b=_.stateNode;if(_.tag===5&&b!==null&&(_=b,k!==null&&(b=eo(v,k),b!=null&&D.push(ao(v,b,_)))),F)break;v=v.return}0<D.length&&(w=new C(w,P,null,n,p),g.push({event:w,listeners:D}))}}if(!(e&7)){e:{if(w=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",w&&n!==Mc&&(P=n.relatedTarget||n.fromElement)&&(Rr(P)||P[xn]))break e;if((C||w)&&(w=p.window===p?p:(w=p.ownerDocument)?w.defaultView||w.parentWindow:window,C?(P=n.relatedTarget||n.toElement,C=h,P=P?Rr(P):null,P!==null&&(F=Zr(P),P!==F||P.tag!==5&&P.tag!==6)&&(P=null)):(C=null,P=h),C!==P)){if(D=zp,b="onMouseLeave",k="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(D=$p,b="onPointerLeave",k="onPointerEnter",v="pointer"),F=C==null?w:gi(C),_=P==null?w:gi(P),w=new D(b,v+"leave",C,n,p),w.target=F,w.relatedTarget=_,b=null,Rr(p)===h&&(D=new D(k,v+"enter",P,n,p),D.target=_,D.relatedTarget=F,b=D),F=b,C&&P)t:{for(D=C,k=P,v=0,_=D;_;_=li(_))v++;for(_=0,b=k;b;b=li(b))_++;for(;0<v-_;)D=li(D),v--;for(;0<_-v;)k=li(k),_--;for(;v--;){if(D===k||k!==null&&D===k.alternate)break t;D=li(D),k=li(k)}D=null}else D=null;C!==null&&em(g,w,C,D,!1),P!==null&&F!==null&&em(g,F,P,D,!0)}}e:{if(w=h?gi(h):window,C=w.nodeName&&w.nodeName.toLowerCase(),C==="select"||C==="input"&&w.type==="file")var M=Y1;else if(qp(w))if(iv)M=eT;else{M=X1;var j=J1}else(C=w.nodeName)&&C.toLowerCase()==="input"&&(w.type==="checkbox"||w.type==="radio")&&(M=Z1);if(M&&(M=M(t,h))){rv(g,M,n,p);break e}j&&j(t,w,h),t==="focusout"&&(j=w._wrapperState)&&j.controlled&&w.type==="number"&&Pc(w,"number",w.value)}switch(j=h?gi(h):window,t){case"focusin":(qp(j)||j.contentEditable==="true")&&(pi=j,Bc=h,Us=null);break;case"focusout":Us=Bc=pi=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Jp(g,n,p);break;case"selectionchange":if(rT)break;case"keydown":case"keyup":Jp(g,n,p)}var T;if(rh)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else fi?tv(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(ev&&n.locale!=="ko"&&(fi||y!=="onCompositionStart"?y==="onCompositionEnd"&&fi&&(T=Zy()):(Qn=p,eh="value"in Qn?Qn.value:Qn.textContent,fi=!0)),j=el(h,y),0<j.length&&(y=new Bp(y,t,null,n,p),g.push({event:y,listeners:j}),T?y.data=T:(T=nv(n),T!==null&&(y.data=T)))),(T=H1?q1(t,n):G1(t,n))&&(h=el(h,"onBeforeInput"),0<h.length&&(p=new Bp("onBeforeInput","beforeinput",null,n,p),g.push({event:p,listeners:h}),p.data=T))}pv(g,e)})}function ao(t,e,n){return{instance:t,listener:e,currentTarget:n}}function el(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=eo(t,n),s!=null&&r.unshift(ao(t,s,i)),s=eo(t,e),s!=null&&r.push(ao(t,s,i))),t=t.return}return r}function li(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function em(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=eo(n,s),u!=null&&o.unshift(ao(n,u,l))):i||(u=eo(n,s),u!=null&&o.push(ao(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var aT=/\r\n?/g,lT=/\u0000|\uFFFD/g;function tm(t){return(typeof t=="string"?t:""+t).replace(aT,`
`).replace(lT,"")}function da(t,e,n){if(e=tm(e),tm(t)!==e&&n)throw Error(V(425))}function tl(){}var Wc=null,Hc=null;function qc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gc=typeof setTimeout=="function"?setTimeout:void 0,uT=typeof clearTimeout=="function"?clearTimeout:void 0,nm=typeof Promise=="function"?Promise:void 0,cT=typeof queueMicrotask=="function"?queueMicrotask:typeof nm<"u"?function(t){return nm.resolve(null).then(t).catch(dT)}:Gc;function dT(t){setTimeout(function(){throw t})}function Xu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),ro(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ro(e)}function er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function rm(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Ji=Math.random().toString(36).slice(2),nn="__reactFiber$"+Ji,lo="__reactProps$"+Ji,xn="__reactContainer$"+Ji,Kc="__reactEvents$"+Ji,hT="__reactListeners$"+Ji,fT="__reactHandles$"+Ji;function Rr(t){var e=t[nn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[xn]||n[nn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=rm(t);t!==null;){if(n=t[nn])return n;t=rm(t)}return e}t=n,n=t.parentNode}return null}function Ro(t){return t=t[nn]||t[xn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(V(33))}function $l(t){return t[lo]||null}var Qc=[],yi=-1;function gr(t){return{current:t}}function ue(t){0>yi||(t.current=Qc[yi],Qc[yi]=null,yi--)}function se(t,e){yi++,Qc[yi]=t.current,t.current=e}var lr={},Xe=gr(lr),dt=gr(!1),Fr=lr;function Vi(t,e){var n=t.type.contextTypes;if(!n)return lr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function ht(t){return t=t.childContextTypes,t!=null}function nl(){ue(dt),ue(Xe)}function im(t,e,n){if(Xe.current!==lr)throw Error(V(168));se(Xe,e),se(dt,n)}function gv(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(V(108,JE(t)||"Unknown",i));return ye({},n,r)}function rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||lr,Fr=Xe.current,se(Xe,t),se(dt,dt.current),!0}function sm(t,e,n){var r=t.stateNode;if(!r)throw Error(V(169));n?(t=gv(t,e,Fr),r.__reactInternalMemoizedMergedChildContext=t,ue(dt),ue(Xe),se(Xe,t)):ue(dt),se(dt,n)}var fn=null,Wl=!1,Zu=!1;function yv(t){fn===null?fn=[t]:fn.push(t)}function pT(t){Wl=!0,yv(t)}function yr(){if(!Zu&&fn!==null){Zu=!0;var t=0,e=re;try{var n=fn;for(re=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}fn=null,Wl=!1}catch(i){throw fn!==null&&(fn=fn.slice(t+1)),By(Yd,yr),i}finally{re=e,Zu=!1}}return null}var vi=[],_i=0,il=null,sl=0,xt=[],kt=0,Ur=null,pn=1,mn="";function kr(t,e){vi[_i++]=sl,vi[_i++]=il,il=t,sl=e}function vv(t,e,n){xt[kt++]=pn,xt[kt++]=mn,xt[kt++]=Ur,Ur=t;var r=pn;t=mn;var i=32-Ht(r)-1;r&=~(1<<i),n+=1;var s=32-Ht(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,pn=1<<32-Ht(e)+i|n<<i|r,mn=s+t}else pn=1<<s|n<<i|r,mn=t}function sh(t){t.return!==null&&(kr(t,1),vv(t,1,0))}function oh(t){for(;t===il;)il=vi[--_i],vi[_i]=null,sl=vi[--_i],vi[_i]=null;for(;t===Ur;)Ur=xt[--kt],xt[kt]=null,mn=xt[--kt],xt[kt]=null,pn=xt[--kt],xt[kt]=null}var _t=null,vt=null,he=!1,Ft=null;function _v(t,e){var n=Ct(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function om(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_t=t,vt=er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_t=t,vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:pn,overflow:mn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ct(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_t=t,vt=null,!0):!1;default:return!1}}function Yc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(he){var e=vt;if(e){var n=e;if(!om(t,e)){if(Yc(t))throw Error(V(418));e=er(n.nextSibling);var r=_t;e&&om(t,e)?_v(r,n):(t.flags=t.flags&-4097|2,he=!1,_t=t)}}else{if(Yc(t))throw Error(V(418));t.flags=t.flags&-4097|2,he=!1,_t=t}}}function am(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_t=t}function ha(t){if(t!==_t)return!1;if(!he)return am(t),he=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!qc(t.type,t.memoizedProps)),e&&(e=vt)){if(Yc(t))throw wv(),Error(V(418));for(;e;)_v(t,e),e=er(e.nextSibling)}if(am(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(V(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vt=er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vt=null}}else vt=_t?er(t.stateNode.nextSibling):null;return!0}function wv(){for(var t=vt;t;)t=er(t.nextSibling)}function Fi(){vt=_t=null,he=!1}function ah(t){Ft===null?Ft=[t]:Ft.push(t)}var mT=Pn.ReactCurrentBatchConfig;function Ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(V(309));var r=n.stateNode}if(!r)throw Error(V(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(V(284));if(!n._owner)throw Error(V(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(V(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function lm(t){var e=t._init;return e(t._payload)}function Ev(t){function e(k,v){if(t){var _=k.deletions;_===null?(k.deletions=[v],k.flags|=16):_.push(v)}}function n(k,v){if(!t)return null;for(;v!==null;)e(k,v),v=v.sibling;return null}function r(k,v){for(k=new Map;v!==null;)v.key!==null?k.set(v.key,v):k.set(v.index,v),v=v.sibling;return k}function i(k,v){return k=ir(k,v),k.index=0,k.sibling=null,k}function s(k,v,_){return k.index=_,t?(_=k.alternate,_!==null?(_=_.index,_<v?(k.flags|=2,v):_):(k.flags|=2,v)):(k.flags|=1048576,v)}function o(k){return t&&k.alternate===null&&(k.flags|=2),k}function l(k,v,_,b){return v===null||v.tag!==6?(v=oc(_,k.mode,b),v.return=k,v):(v=i(v,_),v.return=k,v)}function u(k,v,_,b){var M=_.type;return M===hi?p(k,v,_.props.children,b,_.key):v!==null&&(v.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zn&&lm(M)===v.type)?(b=i(v,_.props),b.ref=Ss(k,v,_),b.return=k,b):(b=La(_.type,_.key,_.props,null,k.mode,b),b.ref=Ss(k,v,_),b.return=k,b)}function h(k,v,_,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=ac(_,k.mode,b),v.return=k,v):(v=i(v,_.children||[]),v.return=k,v)}function p(k,v,_,b,M){return v===null||v.tag!==7?(v=Mr(_,k.mode,b,M),v.return=k,v):(v=i(v,_),v.return=k,v)}function g(k,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=oc(""+v,k.mode,_),v.return=k,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case na:return _=La(v.type,v.key,v.props,null,k.mode,_),_.ref=Ss(k,null,v),_.return=k,_;case di:return v=ac(v,k.mode,_),v.return=k,v;case zn:var b=v._init;return g(k,b(v._payload),_)}if(Ps(v)||_s(v))return v=Mr(v,k.mode,_,null),v.return=k,v;fa(k,v)}return null}function w(k,v,_,b){var M=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return M!==null?null:l(k,v,""+_,b);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case na:return _.key===M?u(k,v,_,b):null;case di:return _.key===M?h(k,v,_,b):null;case zn:return M=_._init,w(k,v,M(_._payload),b)}if(Ps(_)||_s(_))return M!==null?null:p(k,v,_,b,null);fa(k,_)}return null}function C(k,v,_,b,M){if(typeof b=="string"&&b!==""||typeof b=="number")return k=k.get(_)||null,l(v,k,""+b,M);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case na:return k=k.get(b.key===null?_:b.key)||null,u(v,k,b,M);case di:return k=k.get(b.key===null?_:b.key)||null,h(v,k,b,M);case zn:var j=b._init;return C(k,v,_,j(b._payload),M)}if(Ps(b)||_s(b))return k=k.get(_)||null,p(v,k,b,M,null);fa(v,b)}return null}function P(k,v,_,b){for(var M=null,j=null,T=v,y=v=0,I=null;T!==null&&y<_.length;y++){T.index>y?(I=T,T=null):I=T.sibling;var x=w(k,T,_[y],b);if(x===null){T===null&&(T=I);break}t&&T&&x.alternate===null&&e(k,T),v=s(x,v,y),j===null?M=x:j.sibling=x,j=x,T=I}if(y===_.length)return n(k,T),he&&kr(k,y),M;if(T===null){for(;y<_.length;y++)T=g(k,_[y],b),T!==null&&(v=s(T,v,y),j===null?M=T:j.sibling=T,j=T);return he&&kr(k,y),M}for(T=r(k,T);y<_.length;y++)I=C(T,k,y,_[y],b),I!==null&&(t&&I.alternate!==null&&T.delete(I.key===null?y:I.key),v=s(I,v,y),j===null?M=I:j.sibling=I,j=I);return t&&T.forEach(function(E){return e(k,E)}),he&&kr(k,y),M}function D(k,v,_,b){var M=_s(_);if(typeof M!="function")throw Error(V(150));if(_=M.call(_),_==null)throw Error(V(151));for(var j=M=null,T=v,y=v=0,I=null,x=_.next();T!==null&&!x.done;y++,x=_.next()){T.index>y?(I=T,T=null):I=T.sibling;var E=w(k,T,x.value,b);if(E===null){T===null&&(T=I);break}t&&T&&E.alternate===null&&e(k,T),v=s(E,v,y),j===null?M=E:j.sibling=E,j=E,T=I}if(x.done)return n(k,T),he&&kr(k,y),M;if(T===null){for(;!x.done;y++,x=_.next())x=g(k,x.value,b),x!==null&&(v=s(x,v,y),j===null?M=x:j.sibling=x,j=x);return he&&kr(k,y),M}for(T=r(k,T);!x.done;y++,x=_.next())x=C(T,k,y,x.value,b),x!==null&&(t&&x.alternate!==null&&T.delete(x.key===null?y:x.key),v=s(x,v,y),j===null?M=x:j.sibling=x,j=x);return t&&T.forEach(function(A){return e(k,A)}),he&&kr(k,y),M}function F(k,v,_,b){if(typeof _=="object"&&_!==null&&_.type===hi&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case na:e:{for(var M=_.key,j=v;j!==null;){if(j.key===M){if(M=_.type,M===hi){if(j.tag===7){n(k,j.sibling),v=i(j,_.props.children),v.return=k,k=v;break e}}else if(j.elementType===M||typeof M=="object"&&M!==null&&M.$$typeof===zn&&lm(M)===j.type){n(k,j.sibling),v=i(j,_.props),v.ref=Ss(k,j,_),v.return=k,k=v;break e}n(k,j);break}else e(k,j);j=j.sibling}_.type===hi?(v=Mr(_.props.children,k.mode,b,_.key),v.return=k,k=v):(b=La(_.type,_.key,_.props,null,k.mode,b),b.ref=Ss(k,v,_),b.return=k,k=b)}return o(k);case di:e:{for(j=_.key;v!==null;){if(v.key===j)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(k,v.sibling),v=i(v,_.children||[]),v.return=k,k=v;break e}else{n(k,v);break}else e(k,v);v=v.sibling}v=ac(_,k.mode,b),v.return=k,k=v}return o(k);case zn:return j=_._init,F(k,v,j(_._payload),b)}if(Ps(_))return P(k,v,_,b);if(_s(_))return D(k,v,_,b);fa(k,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(k,v.sibling),v=i(v,_),v.return=k,k=v):(n(k,v),v=oc(_,k.mode,b),v.return=k,k=v),o(k)):n(k,v)}return F}var Ui=Ev(!0),Tv=Ev(!1),ol=gr(null),al=null,wi=null,lh=null;function uh(){lh=wi=al=null}function ch(t){var e=ol.current;ue(ol),t._currentValue=e}function Xc(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ci(t,e){al=t,lh=wi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ct=!0),t.firstContext=null)}function Nt(t){var e=t._currentValue;if(lh!==t)if(t={context:t,memoizedValue:e,next:null},wi===null){if(al===null)throw Error(V(308));wi=t,al.dependencies={lanes:0,firstContext:t}}else wi=wi.next=t;return e}var Pr=null;function dh(t){Pr===null?Pr=[t]:Pr.push(t)}function Iv(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,dh(e)):(n.next=i.next,i.next=n),e.interleaved=n,kn(t,r)}function kn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bn=!1;function hh(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Sv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _n(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function tr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,te&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,kn(t,n)}return i=r.interleaved,i===null?(e.next=e,dh(r)):(e.next=i.next,i.next=e),r.interleaved=e,kn(t,n)}function ba(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}function um(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ll(t,e,n,r){var i=t.updateQueue;Bn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var p=t.alternate;p!==null&&(p=p.updateQueue,l=p.lastBaseUpdate,l!==o&&(l===null?p.firstBaseUpdate=h:l.next=h,p.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,p=h=u=null,l=s;do{var w=l.lane,C=l.eventTime;if((r&w)===w){p!==null&&(p=p.next={eventTime:C,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var P=t,D=l;switch(w=e,C=n,D.tag){case 1:if(P=D.payload,typeof P=="function"){g=P.call(C,g,w);break e}g=P;break e;case 3:P.flags=P.flags&-65537|128;case 0:if(P=D.payload,w=typeof P=="function"?P.call(C,g,w):P,w==null)break e;g=ye({},g,w);break e;case 2:Bn=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,w=i.effects,w===null?i.effects=[l]:w.push(l))}else C={eventTime:C,lane:w,tag:l.tag,payload:l.payload,callback:l.callback,next:null},p===null?(h=p=C,u=g):p=p.next=C,o|=w;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;w=l,l=w.next,w.next=null,i.lastBaseUpdate=w,i.shared.pending=null}}while(!0);if(p===null&&(u=g),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=p,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Br|=o,t.lanes=o,t.memoizedState=g}}function cm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(V(191,i));i.call(r)}}}var Po={},sn=gr(Po),uo=gr(Po),co=gr(Po);function br(t){if(t===Po)throw Error(V(174));return t}function fh(t,e){switch(se(co,e),se(uo,t),se(sn,Po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Nc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Nc(e,t)}ue(sn),se(sn,e)}function zi(){ue(sn),ue(uo),ue(co)}function xv(t){br(co.current);var e=br(sn.current),n=Nc(e,t.type);e!==n&&(se(uo,t),se(sn,n))}function ph(t){uo.current===t&&(ue(sn),ue(uo))}var me=gr(0);function ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ec=[];function mh(){for(var t=0;t<ec.length;t++)ec[t]._workInProgressVersionPrimary=null;ec.length=0}var Na=Pn.ReactCurrentDispatcher,tc=Pn.ReactCurrentBatchConfig,zr=0,ge=null,Ce=null,Ne=null,cl=!1,zs=!1,ho=0,gT=0;function He(){throw Error(V(321))}function gh(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Gt(t[n],e[n]))return!1;return!0}function yh(t,e,n,r,i,s){if(zr=s,ge=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Na.current=t===null||t.memoizedState===null?wT:ET,t=n(r,i),zs){s=0;do{if(zs=!1,ho=0,25<=s)throw Error(V(301));s+=1,Ne=Ce=null,e.updateQueue=null,Na.current=TT,t=n(r,i)}while(zs)}if(Na.current=dl,e=Ce!==null&&Ce.next!==null,zr=0,Ne=Ce=ge=null,cl=!1,e)throw Error(V(300));return t}function vh(){var t=ho!==0;return ho=0,t}function en(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?ge.memoizedState=Ne=t:Ne=Ne.next=t,Ne}function Dt(){if(Ce===null){var t=ge.alternate;t=t!==null?t.memoizedState:null}else t=Ce.next;var e=Ne===null?ge.memoizedState:Ne.next;if(e!==null)Ne=e,Ce=t;else{if(t===null)throw Error(V(310));Ce=t,t={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?ge.memoizedState=Ne=t:Ne=Ne.next=t}return Ne}function fo(t,e){return typeof e=="function"?e(t):e}function nc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,u=null,h=s;do{var p=h.lane;if((zr&p)===p)u!==null&&(u=u.next={lane:0,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),r=h.hasEagerState?h.eagerState:t(r,h.action);else{var g={lane:p,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null};u===null?(l=u=g,o=r):u=u.next=g,ge.lanes|=p,Br|=p}h=h.next}while(h!==null&&h!==s);u===null?o=r:u.next=l,Gt(r,e.memoizedState)||(ct=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,ge.lanes|=s,Br|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function rc(t){var e=Dt(),n=e.queue;if(n===null)throw Error(V(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Gt(s,e.memoizedState)||(ct=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function kv(){}function Av(t,e){var n=ge,r=Dt(),i=e(),s=!Gt(r.memoizedState,i);if(s&&(r.memoizedState=i,ct=!0),r=r.queue,_h(Pv.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,po(9,Rv.bind(null,n,r,i,e),void 0,null),Oe===null)throw Error(V(349));zr&30||Cv(n,e,i)}return i}function Cv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Rv(t,e,n,r){e.value=n,e.getSnapshot=r,bv(e)&&Nv(t)}function Pv(t,e,n){return n(function(){bv(e)&&Nv(t)})}function bv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Gt(t,n)}catch{return!0}}function Nv(t){var e=kn(t,1);e!==null&&qt(e,t,1,-1)}function dm(t){var e=en();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:fo,lastRenderedState:t},e.queue=t,t=t.dispatch=_T.bind(null,ge,t),[e.memoizedState,t]}function po(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=ge.updateQueue,e===null?(e={lastEffect:null,stores:null},ge.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Dv(){return Dt().memoizedState}function Da(t,e,n,r){var i=en();ge.flags|=t,i.memoizedState=po(1|e,n,void 0,r===void 0?null:r)}function Hl(t,e,n,r){var i=Dt();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&gh(r,o.deps)){i.memoizedState=po(e,n,s,r);return}}ge.flags|=t,i.memoizedState=po(1|e,n,s,r)}function hm(t,e){return Da(8390656,8,t,e)}function _h(t,e){return Hl(2048,8,t,e)}function Ov(t,e){return Hl(4,2,t,e)}function Mv(t,e){return Hl(4,4,t,e)}function jv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Lv(t,e,n){return n=n!=null?n.concat([t]):null,Hl(4,4,jv.bind(null,e,t),n)}function wh(){}function Vv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gh(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Fv(t,e){var n=Dt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&gh(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Uv(t,e,n){return zr&21?(Gt(n,e)||(n=Hy(),ge.lanes|=n,Br|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ct=!0),t.memoizedState=n)}function yT(t,e){var n=re;re=n!==0&&4>n?n:4,t(!0);var r=tc.transition;tc.transition={};try{t(!1),e()}finally{re=n,tc.transition=r}}function zv(){return Dt().memoizedState}function vT(t,e,n){var r=rr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Bv(t))$v(e,n);else if(n=Iv(t,e,n,r),n!==null){var i=it();qt(n,t,r,i),Wv(n,e,r)}}function _T(t,e,n){var r=rr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Bv(t))$v(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Gt(l,o)){var u=e.interleaved;u===null?(i.next=i,dh(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=Iv(t,e,i,r),n!==null&&(i=it(),qt(n,t,r,i),Wv(n,e,r))}}function Bv(t){var e=t.alternate;return t===ge||e!==null&&e===ge}function $v(t,e){zs=cl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Wv(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Jd(t,n)}}var dl={readContext:Nt,useCallback:He,useContext:He,useEffect:He,useImperativeHandle:He,useInsertionEffect:He,useLayoutEffect:He,useMemo:He,useReducer:He,useRef:He,useState:He,useDebugValue:He,useDeferredValue:He,useTransition:He,useMutableSource:He,useSyncExternalStore:He,useId:He,unstable_isNewReconciler:!1},wT={readContext:Nt,useCallback:function(t,e){return en().memoizedState=[t,e===void 0?null:e],t},useContext:Nt,useEffect:hm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Da(4194308,4,jv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Da(4194308,4,t,e)},useInsertionEffect:function(t,e){return Da(4,2,t,e)},useMemo:function(t,e){var n=en();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=en();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=vT.bind(null,ge,t),[r.memoizedState,t]},useRef:function(t){var e=en();return t={current:t},e.memoizedState=t},useState:dm,useDebugValue:wh,useDeferredValue:function(t){return en().memoizedState=t},useTransition:function(){var t=dm(!1),e=t[0];return t=yT.bind(null,t[1]),en().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=ge,i=en();if(he){if(n===void 0)throw Error(V(407));n=n()}else{if(n=e(),Oe===null)throw Error(V(349));zr&30||Cv(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,hm(Pv.bind(null,r,s,t),[t]),r.flags|=2048,po(9,Rv.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=en(),e=Oe.identifierPrefix;if(he){var n=mn,r=pn;n=(r&~(1<<32-Ht(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=ho++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},ET={readContext:Nt,useCallback:Vv,useContext:Nt,useEffect:_h,useImperativeHandle:Lv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:Fv,useReducer:nc,useRef:Dv,useState:function(){return nc(fo)},useDebugValue:wh,useDeferredValue:function(t){var e=Dt();return Uv(e,Ce.memoizedState,t)},useTransition:function(){var t=nc(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Av,useId:zv,unstable_isNewReconciler:!1},TT={readContext:Nt,useCallback:Vv,useContext:Nt,useEffect:_h,useImperativeHandle:Lv,useInsertionEffect:Ov,useLayoutEffect:Mv,useMemo:Fv,useReducer:rc,useRef:Dv,useState:function(){return rc(fo)},useDebugValue:wh,useDeferredValue:function(t){var e=Dt();return Ce===null?e.memoizedState=t:Uv(e,Ce.memoizedState,t)},useTransition:function(){var t=rc(fo)[0],e=Dt().memoizedState;return[t,e]},useMutableSource:kv,useSyncExternalStore:Av,useId:zv,unstable_isNewReconciler:!1};function Lt(t,e){if(t&&t.defaultProps){e=ye({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zc(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ye({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ql={isMounted:function(t){return(t=t._reactInternals)?Zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=it(),i=rr(t),s=_n(r,i);s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),ba(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=it(),i=rr(t),s=_n(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=tr(t,s,i),e!==null&&(qt(e,t,i,r),ba(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=it(),r=rr(t),i=_n(n,r);i.tag=2,e!=null&&(i.callback=e),e=tr(t,i,r),e!==null&&(qt(e,t,r,n),ba(e,t,r))}};function fm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!so(n,r)||!so(i,s):!0}function Hv(t,e,n){var r=!1,i=lr,s=e.contextType;return typeof s=="object"&&s!==null?s=Nt(s):(i=ht(e)?Fr:Xe.current,r=e.contextTypes,s=(r=r!=null)?Vi(t,i):lr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ql,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function pm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&ql.enqueueReplaceState(e,e.state,null)}function ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},hh(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Nt(s):(s=ht(e)?Fr:Xe.current,i.context=Vi(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zc(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&ql.enqueueReplaceState(i,i.state,null),ll(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Bi(t,e){try{var n="",r=e;do n+=YE(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function ic(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function td(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var IT=typeof WeakMap=="function"?WeakMap:Map;function qv(t,e,n){n=_n(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){fl||(fl=!0,dd=r),td(t,e)},n}function Gv(t,e,n){n=_n(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){td(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){td(t,e),typeof r!="function"&&(nr===null?nr=new Set([this]):nr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function mm(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new IT;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=LT.bind(null,t,e,n),e.then(t,t))}function gm(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function ym(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_n(-1,1),e.tag=2,tr(n,e,1))),n.lanes|=1),t)}var ST=Pn.ReactCurrentOwner,ct=!1;function rt(t,e,n,r){e.child=t===null?Tv(e,null,n,r):Ui(e,t.child,n,r)}function vm(t,e,n,r,i){n=n.render;var s=e.ref;return Ci(e,i),r=yh(t,e,n,r,s,i),n=vh(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(he&&n&&sh(e),e.flags|=1,rt(t,e,r,i),e.child)}function _m(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Ch(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Kv(t,e,s,r,i)):(t=La(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:so,n(o,r)&&t.ref===e.ref)return An(t,e,i)}return e.flags|=1,t=ir(s,r),t.ref=e.ref,t.return=e,e.child=t}function Kv(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(so(s,r)&&t.ref===e.ref)if(ct=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(ct=!0);else return e.lanes=t.lanes,An(t,e,i)}return nd(t,e,n,r,i)}function Qv(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},se(Ti,yt),yt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,se(Ti,yt),yt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,se(Ti,yt),yt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,se(Ti,yt),yt|=r;return rt(t,e,i,n),e.child}function Yv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function nd(t,e,n,r,i){var s=ht(n)?Fr:Xe.current;return s=Vi(e,s),Ci(e,i),n=yh(t,e,n,r,s,i),r=vh(),t!==null&&!ct?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,An(t,e,i)):(he&&r&&sh(e),e.flags|=1,rt(t,e,n,i),e.child)}function wm(t,e,n,r,i){if(ht(n)){var s=!0;rl(e)}else s=!1;if(Ci(e,i),e.stateNode===null)Oa(t,e),Hv(e,n,r),ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=Nt(h):(h=ht(n)?Fr:Xe.current,h=Vi(e,h));var p=n.getDerivedStateFromProps,g=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&pm(e,o,r,h),Bn=!1;var w=e.memoizedState;o.state=w,ll(e,r,o,i),u=e.memoizedState,l!==r||w!==u||dt.current||Bn?(typeof p=="function"&&(Zc(e,n,p,r),u=e.memoizedState),(l=Bn||fm(e,n,l,r,w,u,h))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Sv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:Lt(e.type,l),o.props=h,g=e.pendingProps,w=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Nt(u):(u=ht(n)?Fr:Xe.current,u=Vi(e,u));var C=n.getDerivedStateFromProps;(p=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==g||w!==u)&&pm(e,o,r,u),Bn=!1,w=e.memoizedState,o.state=w,ll(e,r,o,i);var P=e.memoizedState;l!==g||w!==P||dt.current||Bn?(typeof C=="function"&&(Zc(e,n,C,r),P=e.memoizedState),(h=Bn||fm(e,n,h,r,w,P,u)||!1)?(p||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,P,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,P,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=P),o.props=r,o.state=P,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&w===t.memoizedState||(e.flags|=1024),r=!1)}return rd(t,e,n,r,s,i)}function rd(t,e,n,r,i,s){Yv(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&sm(e,n,!1),An(t,e,s);r=e.stateNode,ST.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ui(e,t.child,null,s),e.child=Ui(e,null,l,s)):rt(t,e,l,s),e.memoizedState=r.state,i&&sm(e,n,!0),e.child}function Jv(t){var e=t.stateNode;e.pendingContext?im(t,e.pendingContext,e.pendingContext!==e.context):e.context&&im(t,e.context,!1),fh(t,e.containerInfo)}function Em(t,e,n,r,i){return Fi(),ah(i),e.flags|=256,rt(t,e,n,r),e.child}var id={dehydrated:null,treeContext:null,retryLane:0};function sd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Xv(t,e,n){var r=e.pendingProps,i=me.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),se(me,i&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ql(o,r,0,null),t=Mr(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=sd(n),e.memoizedState=id,t):Eh(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return xT(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=ir(i,u),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=ir(l,s):(s=Mr(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?sd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=id,r}return s=t.child,t=s.sibling,r=ir(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Eh(t,e){return e=Ql({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function pa(t,e,n,r){return r!==null&&ah(r),Ui(e,t.child,null,n),t=Eh(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function xT(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=ic(Error(V(422))),pa(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Ql({mode:"visible",children:r.children},i,0,null),s=Mr(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&Ui(e,t.child,null,o),e.child.memoizedState=sd(o),e.memoizedState=id,s);if(!(e.mode&1))return pa(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(V(419)),r=ic(s,r,void 0),pa(t,e,o,r)}if(l=(o&t.childLanes)!==0,ct||l){if(r=Oe,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,kn(t,i),qt(r,t,i,-1))}return Ah(),r=ic(Error(V(421))),pa(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=VT.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,vt=er(i.nextSibling),_t=e,he=!0,Ft=null,t!==null&&(xt[kt++]=pn,xt[kt++]=mn,xt[kt++]=Ur,pn=t.id,mn=t.overflow,Ur=e),e=Eh(e,r.children),e.flags|=4096,e)}function Tm(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Xc(t.return,e,n)}function sc(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Zv(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(rt(t,e,r.children,n),r=me.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Tm(t,n,e);else if(t.tag===19)Tm(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(se(me,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),sc(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}sc(e,!0,n,null,s);break;case"together":sc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Oa(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function An(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Br|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(V(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function kT(t,e,n){switch(e.tag){case 3:Jv(e),Fi();break;case 5:xv(e);break;case 1:ht(e.type)&&rl(e);break;case 4:fh(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;se(ol,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(se(me,me.current&1),e.flags|=128,null):n&e.child.childLanes?Xv(t,e,n):(se(me,me.current&1),t=An(t,e,n),t!==null?t.sibling:null);se(me,me.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Zv(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),se(me,me.current),r)break;return null;case 22:case 23:return e.lanes=0,Qv(t,e,n)}return An(t,e,n)}var e_,od,t_,n_;e_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};od=function(){};t_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,br(sn.current);var s=null;switch(n){case"input":i=Cc(t,i),r=Cc(t,r),s=[];break;case"select":i=ye({},i,{value:void 0}),r=ye({},r,{value:void 0}),s=[];break;case"textarea":i=bc(t,i),r=bc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=tl)}Dc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Xs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Xs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&le("scroll",t),s||l===u||(s=[])):(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};n_=function(t,e,n,r){n!==r&&(e.flags|=4)};function xs(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function qe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function AT(t,e,n){var r=e.pendingProps;switch(oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(e),null;case 1:return ht(e.type)&&nl(),qe(e),null;case 3:return r=e.stateNode,zi(),ue(dt),ue(Xe),mh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(ha(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ft!==null&&(pd(Ft),Ft=null))),od(t,e),qe(e),null;case 5:ph(e);var i=br(co.current);if(n=e.type,t!==null&&e.stateNode!=null)t_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(V(166));return qe(e),null}if(t=br(sn.current),ha(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[nn]=e,r[lo]=s,t=(e.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<Ns.length;i++)le(Ns[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":bp(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Dp(r,s),le("invalid",r)}Dc(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&da(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&da(r.textContent,l,t),i=["children",""+l]):Xs.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ra(r),Np(r,s,!0);break;case"textarea":ra(r),Op(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=tl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Py(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[nn]=e,t[lo]=r,e_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oc(n,r),n){case"dialog":le("cancel",t),le("close",t),i=r;break;case"iframe":case"object":case"embed":le("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ns.length;i++)le(Ns[i],t);i=r;break;case"source":le("error",t),i=r;break;case"img":case"image":case"link":le("error",t),le("load",t),i=r;break;case"details":le("toggle",t),i=r;break;case"input":bp(t,r),i=Cc(t,r),le("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ye({},r,{value:void 0}),le("invalid",t);break;case"textarea":Dp(t,r),i=bc(t,r),le("invalid",t);break;default:i=r}Dc(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Dy(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&by(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Zs(t,u):typeof u=="number"&&Zs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Xs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&le("scroll",t):u!=null&&Hd(t,s,u,o))}switch(n){case"input":ra(t),Np(t,r,!1);break;case"textarea":ra(t),Op(t);break;case"option":r.value!=null&&t.setAttribute("value",""+ar(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Si(t,!!r.multiple,s,!1):r.defaultValue!=null&&Si(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=tl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qe(e),null;case 6:if(t&&e.stateNode!=null)n_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(V(166));if(n=br(co.current),br(sn.current),ha(e)){if(r=e.stateNode,n=e.memoizedProps,r[nn]=e,(s=r.nodeValue!==n)&&(t=_t,t!==null))switch(t.tag){case 3:da(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&da(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[nn]=e,e.stateNode=r}return qe(e),null;case 13:if(ue(me),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(he&&vt!==null&&e.mode&1&&!(e.flags&128))wv(),Fi(),e.flags|=98560,s=!1;else if(s=ha(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(V(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(V(317));s[nn]=e}else Fi(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qe(e),s=!1}else Ft!==null&&(pd(Ft),Ft=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||me.current&1?Re===0&&(Re=3):Ah())),e.updateQueue!==null&&(e.flags|=4),qe(e),null);case 4:return zi(),od(t,e),t===null&&oo(e.stateNode.containerInfo),qe(e),null;case 10:return ch(e.type._context),qe(e),null;case 17:return ht(e.type)&&nl(),qe(e),null;case 19:if(ue(me),s=e.memoizedState,s===null)return qe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xs(s,!1);else{if(Re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ul(t),o!==null){for(e.flags|=128,xs(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return se(me,me.current&1|2),e.child}t=t.sibling}s.tail!==null&&Te()>$i&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304)}else{if(!r)if(t=ul(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xs(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!he)return qe(e),null}else 2*Te()-s.renderingStartTime>$i&&n!==1073741824&&(e.flags|=128,r=!0,xs(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Te(),e.sibling=null,n=me.current,se(me,r?n&1|2:n&1),e):(qe(e),null);case 22:case 23:return kh(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?yt&1073741824&&(qe(e),e.subtreeFlags&6&&(e.flags|=8192)):qe(e),null;case 24:return null;case 25:return null}throw Error(V(156,e.tag))}function CT(t,e){switch(oh(e),e.tag){case 1:return ht(e.type)&&nl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zi(),ue(dt),ue(Xe),mh(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ph(e),null;case 13:if(ue(me),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(V(340));Fi()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ue(me),null;case 4:return zi(),null;case 10:return ch(e.type._context),null;case 22:case 23:return kh(),null;case 24:return null;default:return null}}var ma=!1,Qe=!1,RT=typeof WeakSet=="function"?WeakSet:Set,B=null;function Ei(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(t,e,r)}else n.current=null}function ad(t,e,n){try{n()}catch(r){_e(t,e,r)}}var Im=!1;function PT(t,e){if(Wc=Xa,t=av(),ih(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,u=-1,h=0,p=0,g=t,w=null;t:for(;;){for(var C;g!==n||i!==0&&g.nodeType!==3||(l=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(C=g.firstChild)!==null;)w=g,g=C;for(;;){if(g===t)break t;if(w===n&&++h===i&&(l=o),w===s&&++p===r&&(u=o),(C=g.nextSibling)!==null)break;g=w,w=g.parentNode}g=C}n=l===-1||u===-1?null:{start:l,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hc={focusedElem:t,selectionRange:n},Xa=!1,B=e;B!==null;)if(e=B,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,B=t;else for(;B!==null;){e=B;try{var P=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(P!==null){var D=P.memoizedProps,F=P.memoizedState,k=e.stateNode,v=k.getSnapshotBeforeUpdate(e.elementType===e.type?D:Lt(e.type,D),F);k.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(V(163))}}catch(b){_e(e,e.return,b)}if(t=e.sibling,t!==null){t.return=e.return,B=t;break}B=e.return}return P=Im,Im=!1,P}function Bs(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ad(e,n,s)}i=i.next}while(i!==r)}}function Gl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ld(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function r_(t){var e=t.alternate;e!==null&&(t.alternate=null,r_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[nn],delete e[lo],delete e[Kc],delete e[hT],delete e[fT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function i_(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||i_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ud(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=tl));else if(r!==4&&(t=t.child,t!==null))for(ud(t,e,n),t=t.sibling;t!==null;)ud(t,e,n),t=t.sibling}function cd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(cd(t,e,n),t=t.sibling;t!==null;)cd(t,e,n),t=t.sibling}var Me=null,Vt=!1;function Fn(t,e,n){for(n=n.child;n!==null;)s_(t,e,n),n=n.sibling}function s_(t,e,n){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount(Fl,n)}catch{}switch(n.tag){case 5:Qe||Ei(n,e);case 6:var r=Me,i=Vt;Me=null,Fn(t,e,n),Me=r,Vt=i,Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Me.removeChild(n.stateNode));break;case 18:Me!==null&&(Vt?(t=Me,n=n.stateNode,t.nodeType===8?Xu(t.parentNode,n):t.nodeType===1&&Xu(t,n),ro(t)):Xu(Me,n.stateNode));break;case 4:r=Me,i=Vt,Me=n.stateNode.containerInfo,Vt=!0,Fn(t,e,n),Me=r,Vt=i;break;case 0:case 11:case 14:case 15:if(!Qe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ad(n,e,o),i=i.next}while(i!==r)}Fn(t,e,n);break;case 1:if(!Qe&&(Ei(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,e,l)}Fn(t,e,n);break;case 21:Fn(t,e,n);break;case 22:n.mode&1?(Qe=(r=Qe)||n.memoizedState!==null,Fn(t,e,n),Qe=r):Fn(t,e,n);break;default:Fn(t,e,n)}}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new RT),e.forEach(function(r){var i=FT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Mt(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:Me=l.stateNode,Vt=!1;break e;case 3:Me=l.stateNode.containerInfo,Vt=!0;break e;case 4:Me=l.stateNode.containerInfo,Vt=!0;break e}l=l.return}if(Me===null)throw Error(V(160));s_(s,o,i),Me=null,Vt=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(h){_e(i,e,h)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)o_(e,t),e=e.sibling}function o_(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Mt(e,t),Zt(t),r&4){try{Bs(3,t,t.return),Gl(3,t)}catch(D){_e(t,t.return,D)}try{Bs(5,t,t.return)}catch(D){_e(t,t.return,D)}}break;case 1:Mt(e,t),Zt(t),r&512&&n!==null&&Ei(n,n.return);break;case 5:if(Mt(e,t),Zt(t),r&512&&n!==null&&Ei(n,n.return),t.flags&32){var i=t.stateNode;try{Zs(i,"")}catch(D){_e(t,t.return,D)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Cy(i,s),Oc(l,o);var h=Oc(l,s);for(o=0;o<u.length;o+=2){var p=u[o],g=u[o+1];p==="style"?Dy(i,g):p==="dangerouslySetInnerHTML"?by(i,g):p==="children"?Zs(i,g):Hd(i,p,g,h)}switch(l){case"input":Rc(i,s);break;case"textarea":Ry(i,s);break;case"select":var w=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var C=s.value;C!=null?Si(i,!!s.multiple,C,!1):w!==!!s.multiple&&(s.defaultValue!=null?Si(i,!!s.multiple,s.defaultValue,!0):Si(i,!!s.multiple,s.multiple?[]:"",!1))}i[lo]=s}catch(D){_e(t,t.return,D)}}break;case 6:if(Mt(e,t),Zt(t),r&4){if(t.stateNode===null)throw Error(V(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(D){_e(t,t.return,D)}}break;case 3:if(Mt(e,t),Zt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ro(e.containerInfo)}catch(D){_e(t,t.return,D)}break;case 4:Mt(e,t),Zt(t);break;case 13:Mt(e,t),Zt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Sh=Te())),r&4&&xm(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Qe=(h=Qe)||p,Mt(e,t),Qe=h):Mt(e,t),Zt(t),r&8192){if(h=t.memoizedState!==null,(t.stateNode.isHidden=h)&&!p&&t.mode&1)for(B=t,p=t.child;p!==null;){for(g=B=p;B!==null;){switch(w=B,C=w.child,w.tag){case 0:case 11:case 14:case 15:Bs(4,w,w.return);break;case 1:Ei(w,w.return);var P=w.stateNode;if(typeof P.componentWillUnmount=="function"){r=w,n=w.return;try{e=r,P.props=e.memoizedProps,P.state=e.memoizedState,P.componentWillUnmount()}catch(D){_e(r,n,D)}}break;case 5:Ei(w,w.return);break;case 22:if(w.memoizedState!==null){Am(g);continue}}C!==null?(C.return=w,B=C):Am(g)}p=p.sibling}e:for(p=null,g=t;;){if(g.tag===5){if(p===null){p=g;try{i=g.stateNode,h?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,l.style.display=Ny("display",o))}catch(D){_e(t,t.return,D)}}}else if(g.tag===6){if(p===null)try{g.stateNode.nodeValue=h?"":g.memoizedProps}catch(D){_e(t,t.return,D)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;p===g&&(p=null),g=g.return}p===g&&(p=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Mt(e,t),Zt(t),r&4&&xm(t);break;case 21:break;default:Mt(e,t),Zt(t)}}function Zt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(i_(n)){var r=n;break e}n=n.return}throw Error(V(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Zs(i,""),r.flags&=-33);var s=Sm(t);cd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Sm(t);ud(t,l,o);break;default:throw Error(V(161))}}catch(u){_e(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function bT(t,e,n){B=t,a_(t)}function a_(t,e,n){for(var r=(t.mode&1)!==0;B!==null;){var i=B,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||ma;if(!o){var l=i.alternate,u=l!==null&&l.memoizedState!==null||Qe;l=ma;var h=Qe;if(ma=o,(Qe=u)&&!h)for(B=i;B!==null;)o=B,u=o.child,o.tag===22&&o.memoizedState!==null?Cm(i):u!==null?(u.return=o,B=u):Cm(i);for(;s!==null;)B=s,a_(s),s=s.sibling;B=i,ma=l,Qe=h}km(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,B=s):km(t)}}function km(t){for(;B!==null;){var e=B;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qe||Gl(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Qe)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:Lt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&cm(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}cm(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var h=e.alternate;if(h!==null){var p=h.memoizedState;if(p!==null){var g=p.dehydrated;g!==null&&ro(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(V(163))}Qe||e.flags&512&&ld(e)}catch(w){_e(e,e.return,w)}}if(e===t){B=null;break}if(n=e.sibling,n!==null){n.return=e.return,B=n;break}B=e.return}}function Am(t){for(;B!==null;){var e=B;if(e===t){B=null;break}var n=e.sibling;if(n!==null){n.return=e.return,B=n;break}B=e.return}}function Cm(t){for(;B!==null;){var e=B;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gl(4,e)}catch(u){_e(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){_e(e,i,u)}}var s=e.return;try{ld(e)}catch(u){_e(e,s,u)}break;case 5:var o=e.return;try{ld(e)}catch(u){_e(e,o,u)}}}catch(u){_e(e,e.return,u)}if(e===t){B=null;break}var l=e.sibling;if(l!==null){l.return=e.return,B=l;break}B=e.return}}var NT=Math.ceil,hl=Pn.ReactCurrentDispatcher,Th=Pn.ReactCurrentOwner,Pt=Pn.ReactCurrentBatchConfig,te=0,Oe=null,xe=null,Fe=0,yt=0,Ti=gr(0),Re=0,mo=null,Br=0,Kl=0,Ih=0,$s=null,ut=null,Sh=0,$i=1/0,hn=null,fl=!1,dd=null,nr=null,ga=!1,Yn=null,pl=0,Ws=0,hd=null,Ma=-1,ja=0;function it(){return te&6?Te():Ma!==-1?Ma:Ma=Te()}function rr(t){return t.mode&1?te&2&&Fe!==0?Fe&-Fe:mT.transition!==null?(ja===0&&(ja=Hy()),ja):(t=re,t!==0||(t=window.event,t=t===void 0?16:Xy(t.type)),t):1}function qt(t,e,n,r){if(50<Ws)throw Ws=0,hd=null,Error(V(185));Ao(t,n,r),(!(te&2)||t!==Oe)&&(t===Oe&&(!(te&2)&&(Kl|=n),Re===4&&Wn(t,Fe)),ft(t,r),n===1&&te===0&&!(e.mode&1)&&($i=Te()+500,Wl&&yr()))}function ft(t,e){var n=t.callbackNode;m1(t,e);var r=Ja(t,t===Oe?Fe:0);if(r===0)n!==null&&Lp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Lp(n),e===1)t.tag===0?pT(Rm.bind(null,t)):yv(Rm.bind(null,t)),cT(function(){!(te&6)&&yr()}),n=null;else{switch(qy(r)){case 1:n=Yd;break;case 4:n=$y;break;case 16:n=Ya;break;case 536870912:n=Wy;break;default:n=Ya}n=m_(n,l_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function l_(t,e){if(Ma=-1,ja=0,te&6)throw Error(V(327));var n=t.callbackNode;if(Ri()&&t.callbackNode!==n)return null;var r=Ja(t,t===Oe?Fe:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=ml(t,r);else{e=r;var i=te;te|=2;var s=c_();(Oe!==t||Fe!==e)&&(hn=null,$i=Te()+500,Or(t,e));do try{MT();break}catch(l){u_(t,l)}while(!0);uh(),hl.current=s,te=i,xe!==null?e=0:(Oe=null,Fe=0,e=Re)}if(e!==0){if(e===2&&(i=Fc(t),i!==0&&(r=i,e=fd(t,i))),e===1)throw n=mo,Or(t,0),Wn(t,r),ft(t,Te()),n;if(e===6)Wn(t,r);else{if(i=t.current.alternate,!(r&30)&&!DT(i)&&(e=ml(t,r),e===2&&(s=Fc(t),s!==0&&(r=s,e=fd(t,s))),e===1))throw n=mo,Or(t,0),Wn(t,r),ft(t,Te()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(V(345));case 2:Ar(t,ut,hn);break;case 3:if(Wn(t,r),(r&130023424)===r&&(e=Sh+500-Te(),10<e)){if(Ja(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){it(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Gc(Ar.bind(null,t,ut,hn),e);break}Ar(t,ut,hn);break;case 4:if(Wn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Ht(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Te()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*NT(r/1960))-r,10<r){t.timeoutHandle=Gc(Ar.bind(null,t,ut,hn),r);break}Ar(t,ut,hn);break;case 5:Ar(t,ut,hn);break;default:throw Error(V(329))}}}return ft(t,Te()),t.callbackNode===n?l_.bind(null,t):null}function fd(t,e){var n=$s;return t.current.memoizedState.isDehydrated&&(Or(t,e).flags|=256),t=ml(t,e),t!==2&&(e=ut,ut=n,e!==null&&pd(e)),t}function pd(t){ut===null?ut=t:ut.push.apply(ut,t)}function DT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Gt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wn(t,e){for(e&=~Ih,e&=~Kl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Ht(e),r=1<<n;t[n]=-1,e&=~r}}function Rm(t){if(te&6)throw Error(V(327));Ri();var e=Ja(t,0);if(!(e&1))return ft(t,Te()),null;var n=ml(t,e);if(t.tag!==0&&n===2){var r=Fc(t);r!==0&&(e=r,n=fd(t,r))}if(n===1)throw n=mo,Or(t,0),Wn(t,e),ft(t,Te()),n;if(n===6)throw Error(V(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Ar(t,ut,hn),ft(t,Te()),null}function xh(t,e){var n=te;te|=1;try{return t(e)}finally{te=n,te===0&&($i=Te()+500,Wl&&yr())}}function $r(t){Yn!==null&&Yn.tag===0&&!(te&6)&&Ri();var e=te;te|=1;var n=Pt.transition,r=re;try{if(Pt.transition=null,re=1,t)return t()}finally{re=r,Pt.transition=n,te=e,!(te&6)&&yr()}}function kh(){yt=Ti.current,ue(Ti)}function Or(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,uT(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(oh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&nl();break;case 3:zi(),ue(dt),ue(Xe),mh();break;case 5:ph(r);break;case 4:zi();break;case 13:ue(me);break;case 19:ue(me);break;case 10:ch(r.type._context);break;case 22:case 23:kh()}n=n.return}if(Oe=t,xe=t=ir(t.current,null),Fe=yt=e,Re=0,mo=null,Ih=Kl=Br=0,ut=$s=null,Pr!==null){for(e=0;e<Pr.length;e++)if(n=Pr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Pr=null}return t}function u_(t,e){do{var n=xe;try{if(uh(),Na.current=dl,cl){for(var r=ge.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}cl=!1}if(zr=0,Ne=Ce=ge=null,zs=!1,ho=0,Th.current=null,n===null||n.return===null){Re=1,mo=e,xe=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=Fe,l.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u,p=l,g=p.tag;if(!(p.mode&1)&&(g===0||g===11||g===15)){var w=p.alternate;w?(p.updateQueue=w.updateQueue,p.memoizedState=w.memoizedState,p.lanes=w.lanes):(p.updateQueue=null,p.memoizedState=null)}var C=gm(o);if(C!==null){C.flags&=-257,ym(C,o,l,s,e),C.mode&1&&mm(s,h,e),e=C,u=h;var P=e.updateQueue;if(P===null){var D=new Set;D.add(u),e.updateQueue=D}else P.add(u);break e}else{if(!(e&1)){mm(s,h,e),Ah();break e}u=Error(V(426))}}else if(he&&l.mode&1){var F=gm(o);if(F!==null){!(F.flags&65536)&&(F.flags|=256),ym(F,o,l,s,e),ah(Bi(u,l));break e}}s=u=Bi(u,l),Re!==4&&(Re=2),$s===null?$s=[s]:$s.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var k=qv(s,u,e);um(s,k);break e;case 1:l=u;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(nr===null||!nr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var b=Gv(s,l,e);um(s,b);break e}}s=s.return}while(s!==null)}h_(n)}catch(M){e=M,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(!0)}function c_(){var t=hl.current;return hl.current=dl,t===null?dl:t}function Ah(){(Re===0||Re===3||Re===2)&&(Re=4),Oe===null||!(Br&268435455)&&!(Kl&268435455)||Wn(Oe,Fe)}function ml(t,e){var n=te;te|=2;var r=c_();(Oe!==t||Fe!==e)&&(hn=null,Or(t,e));do try{OT();break}catch(i){u_(t,i)}while(!0);if(uh(),te=n,hl.current=r,xe!==null)throw Error(V(261));return Oe=null,Fe=0,Re}function OT(){for(;xe!==null;)d_(xe)}function MT(){for(;xe!==null&&!o1();)d_(xe)}function d_(t){var e=p_(t.alternate,t,yt);t.memoizedProps=t.pendingProps,e===null?h_(t):xe=e,Th.current=null}function h_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=CT(n,e),n!==null){n.flags&=32767,xe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Re=6,xe=null;return}}else if(n=AT(n,e,yt),n!==null){xe=n;return}if(e=e.sibling,e!==null){xe=e;return}xe=e=t}while(e!==null);Re===0&&(Re=5)}function Ar(t,e,n){var r=re,i=Pt.transition;try{Pt.transition=null,re=1,jT(t,e,n,r)}finally{Pt.transition=i,re=r}return null}function jT(t,e,n,r){do Ri();while(Yn!==null);if(te&6)throw Error(V(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(V(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(g1(t,s),t===Oe&&(xe=Oe=null,Fe=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ga||(ga=!0,m_(Ya,function(){return Ri(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pt.transition,Pt.transition=null;var o=re;re=1;var l=te;te|=4,Th.current=null,PT(t,n),o_(n,t),nT(Hc),Xa=!!Wc,Hc=Wc=null,t.current=n,bT(n),a1(),te=l,re=o,Pt.transition=s}else t.current=n;if(ga&&(ga=!1,Yn=t,pl=i),s=t.pendingLanes,s===0&&(nr=null),c1(n.stateNode),ft(t,Te()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(fl)throw fl=!1,t=dd,dd=null,t;return pl&1&&t.tag!==0&&Ri(),s=t.pendingLanes,s&1?t===hd?Ws++:(Ws=0,hd=t):Ws=0,yr(),null}function Ri(){if(Yn!==null){var t=qy(pl),e=Pt.transition,n=re;try{if(Pt.transition=null,re=16>t?16:t,Yn===null)var r=!1;else{if(t=Yn,Yn=null,pl=0,te&6)throw Error(V(331));var i=te;for(te|=4,B=t.current;B!==null;){var s=B,o=s.child;if(B.flags&16){var l=s.deletions;if(l!==null){for(var u=0;u<l.length;u++){var h=l[u];for(B=h;B!==null;){var p=B;switch(p.tag){case 0:case 11:case 15:Bs(8,p,s)}var g=p.child;if(g!==null)g.return=p,B=g;else for(;B!==null;){p=B;var w=p.sibling,C=p.return;if(r_(p),p===h){B=null;break}if(w!==null){w.return=C,B=w;break}B=C}}}var P=s.alternate;if(P!==null){var D=P.child;if(D!==null){P.child=null;do{var F=D.sibling;D.sibling=null,D=F}while(D!==null)}}B=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,B=o;else e:for(;B!==null;){if(s=B,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Bs(9,s,s.return)}var k=s.sibling;if(k!==null){k.return=s.return,B=k;break e}B=s.return}}var v=t.current;for(B=v;B!==null;){o=B;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,B=_;else e:for(o=v;B!==null;){if(l=B,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Gl(9,l)}}catch(M){_e(l,l.return,M)}if(l===o){B=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,B=b;break e}B=l.return}}if(te=i,yr(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot(Fl,t)}catch{}r=!0}return r}finally{re=n,Pt.transition=e}}return!1}function Pm(t,e,n){e=Bi(n,e),e=qv(t,e,1),t=tr(t,e,1),e=it(),t!==null&&(Ao(t,1,e),ft(t,e))}function _e(t,e,n){if(t.tag===3)Pm(t,t,n);else for(;e!==null;){if(e.tag===3){Pm(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(nr===null||!nr.has(r))){t=Bi(n,t),t=Gv(e,t,1),e=tr(e,t,1),t=it(),e!==null&&(Ao(e,1,t),ft(e,t));break}}e=e.return}}function LT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=it(),t.pingedLanes|=t.suspendedLanes&n,Oe===t&&(Fe&n)===n&&(Re===4||Re===3&&(Fe&130023424)===Fe&&500>Te()-Sh?Or(t,0):Ih|=n),ft(t,e)}function f_(t,e){e===0&&(t.mode&1?(e=oa,oa<<=1,!(oa&130023424)&&(oa=4194304)):e=1);var n=it();t=kn(t,e),t!==null&&(Ao(t,e,n),ft(t,n))}function VT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),f_(t,n)}function FT(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(V(314))}r!==null&&r.delete(e),f_(t,n)}var p_;p_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||dt.current)ct=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ct=!1,kT(t,e,n);ct=!!(t.flags&131072)}else ct=!1,he&&e.flags&1048576&&vv(e,sl,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Oa(t,e),t=e.pendingProps;var i=Vi(e,Xe.current);Ci(e,n),i=yh(null,e,r,t,i,n);var s=vh();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ht(r)?(s=!0,rl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,hh(e),i.updater=ql,e.stateNode=i,i._reactInternals=e,ed(e,r,t,n),e=rd(null,e,r,!0,s,n)):(e.tag=0,he&&s&&sh(e),rt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Oa(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=zT(r),t=Lt(r,t),i){case 0:e=nd(null,e,r,t,n);break e;case 1:e=wm(null,e,r,t,n);break e;case 11:e=vm(null,e,r,t,n);break e;case 14:e=_m(null,e,r,Lt(r.type,t),n);break e}throw Error(V(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),nd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),wm(t,e,r,i,n);case 3:e:{if(Jv(e),t===null)throw Error(V(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Sv(t,e),ll(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Bi(Error(V(423)),e),e=Em(t,e,r,n,i);break e}else if(r!==i){i=Bi(Error(V(424)),e),e=Em(t,e,r,n,i);break e}else for(vt=er(e.stateNode.containerInfo.firstChild),_t=e,he=!0,Ft=null,n=Tv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Fi(),r===i){e=An(t,e,n);break e}rt(t,e,r,n)}e=e.child}return e;case 5:return xv(e),t===null&&Jc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,qc(r,i)?o=null:s!==null&&qc(r,s)&&(e.flags|=32),Yv(t,e),rt(t,e,o,n),e.child;case 6:return t===null&&Jc(e),null;case 13:return Xv(t,e,n);case 4:return fh(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ui(e,null,r,n):rt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),vm(t,e,r,i,n);case 7:return rt(t,e,e.pendingProps,n),e.child;case 8:return rt(t,e,e.pendingProps.children,n),e.child;case 12:return rt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,se(ol,r._currentValue),r._currentValue=o,s!==null)if(Gt(s.value,o)){if(s.children===i.children&&!dt.current){e=An(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var u=l.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=_n(-1,n&-n),u.tag=2;var h=s.updateQueue;if(h!==null){h=h.shared;var p=h.pending;p===null?u.next=u:(u.next=p.next,p.next=u),h.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Xc(s.return,n,e),l.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(V(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Xc(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ci(e,n),i=Nt(i),r=r(i),e.flags|=1,rt(t,e,r,n),e.child;case 14:return r=e.type,i=Lt(r,e.pendingProps),i=Lt(r.type,i),_m(t,e,r,i,n);case 15:return Kv(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:Lt(r,i),Oa(t,e),e.tag=1,ht(r)?(t=!0,rl(e)):t=!1,Ci(e,n),Hv(e,r,i),ed(e,r,i,n),rd(null,e,r,!0,t,n);case 19:return Zv(t,e,n);case 22:return Qv(t,e,n)}throw Error(V(156,e.tag))};function m_(t,e){return By(t,e)}function UT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ct(t,e,n,r){return new UT(t,e,n,r)}function Ch(t){return t=t.prototype,!(!t||!t.isReactComponent)}function zT(t){if(typeof t=="function")return Ch(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Gd)return 11;if(t===Kd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Ct(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function La(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ch(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hi:return Mr(n.children,i,s,e);case qd:o=8,i|=8;break;case Sc:return t=Ct(12,n,e,i|2),t.elementType=Sc,t.lanes=s,t;case xc:return t=Ct(13,n,e,i),t.elementType=xc,t.lanes=s,t;case kc:return t=Ct(19,n,e,i),t.elementType=kc,t.lanes=s,t;case xy:return Ql(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Iy:o=10;break e;case Sy:o=9;break e;case Gd:o=11;break e;case Kd:o=14;break e;case zn:o=16,r=null;break e}throw Error(V(130,t==null?t:typeof t,""))}return e=Ct(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Mr(t,e,n,r){return t=Ct(7,t,r,e),t.lanes=n,t}function Ql(t,e,n,r){return t=Ct(22,t,r,e),t.elementType=xy,t.lanes=n,t.stateNode={isHidden:!1},t}function oc(t,e,n){return t=Ct(6,t,null,e),t.lanes=n,t}function ac(t,e,n){return e=Ct(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function BT(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zu(0),this.expirationTimes=zu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zu(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rh(t,e,n,r,i,s,o,l,u){return t=new BT(t,e,n,l,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ct(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},hh(s),t}function $T(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function g_(t){if(!t)return lr;t=t._reactInternals;e:{if(Zr(t)!==t||t.tag!==1)throw Error(V(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ht(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(V(171))}if(t.tag===1){var n=t.type;if(ht(n))return gv(t,n,e)}return e}function y_(t,e,n,r,i,s,o,l,u){return t=Rh(n,r,!0,t,i,s,o,l,u),t.context=g_(null),n=t.current,r=it(),i=rr(n),s=_n(r,i),s.callback=e??null,tr(n,s,i),t.current.lanes=i,Ao(t,i,r),ft(t,r),t}function Yl(t,e,n,r){var i=e.current,s=it(),o=rr(i);return n=g_(n),e.context===null?e.context=n:e.pendingContext=n,e=_n(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=tr(i,e,o),t!==null&&(qt(t,i,o,s),ba(t,i,o)),o}function gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function bm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ph(t,e){bm(t,e),(t=t.alternate)&&bm(t,e)}function WT(){return null}var v_=typeof reportError=="function"?reportError:function(t){console.error(t)};function bh(t){this._internalRoot=t}Jl.prototype.render=bh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(V(409));Yl(t,e,null,null)};Jl.prototype.unmount=bh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;$r(function(){Yl(null,t,null,null)}),e[xn]=null}};function Jl(t){this._internalRoot=t}Jl.prototype.unstable_scheduleHydration=function(t){if(t){var e=Qy();t={blockedOn:null,target:t,priority:e};for(var n=0;n<$n.length&&e!==0&&e<$n[n].priority;n++);$n.splice(n,0,t),n===0&&Jy(t)}};function Nh(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Xl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function HT(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var h=gl(o);s.call(h)}}var o=y_(e,r,t,0,null,!1,!1,"",Nm);return t._reactRootContainer=o,t[xn]=o.current,oo(t.nodeType===8?t.parentNode:t),$r(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var h=gl(u);l.call(h)}}var u=Rh(t,0,!1,null,null,!1,!1,"",Nm);return t._reactRootContainer=u,t[xn]=u.current,oo(t.nodeType===8?t.parentNode:t),$r(function(){Yl(e,u,n,r)}),u}function Zl(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var u=gl(o);l.call(u)}}Yl(e,o,t,i)}else o=HT(n,e,t,i,r);return gl(o)}Gy=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=bs(e.pendingLanes);n!==0&&(Jd(e,n|1),ft(e,Te()),!(te&6)&&($i=Te()+500,yr()))}break;case 13:$r(function(){var r=kn(t,1);if(r!==null){var i=it();qt(r,t,1,i)}}),Ph(t,1)}};Xd=function(t){if(t.tag===13){var e=kn(t,134217728);if(e!==null){var n=it();qt(e,t,134217728,n)}Ph(t,134217728)}};Ky=function(t){if(t.tag===13){var e=rr(t),n=kn(t,e);if(n!==null){var r=it();qt(n,t,e,r)}Ph(t,e)}};Qy=function(){return re};Yy=function(t,e){var n=re;try{return re=t,e()}finally{re=n}};jc=function(t,e,n){switch(e){case"input":if(Rc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=$l(r);if(!i)throw Error(V(90));Ay(r),Rc(r,i)}}}break;case"textarea":Ry(t,n);break;case"select":e=n.value,e!=null&&Si(t,!!n.multiple,e,!1)}};jy=xh;Ly=$r;var qT={usingClientEntryPoint:!1,Events:[Ro,gi,$l,Oy,My,xh]},ks={findFiberByHostInstance:Rr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},GT={bundleType:ks.bundleType,version:ks.version,rendererPackageName:ks.rendererPackageName,rendererConfig:ks.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pn.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Uy(t),t===null?null:t.stateNode},findFiberByHostInstance:ks.findFiberByHostInstance||WT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ya=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ya.isDisabled&&ya.supportsFiber)try{Fl=ya.inject(GT),rn=ya}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qT;Tt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nh(e))throw Error(V(200));return $T(t,e,null,n)};Tt.createRoot=function(t,e){if(!Nh(t))throw Error(V(299));var n=!1,r="",i=v_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Rh(t,1,!1,null,null,n,!1,r,i),t[xn]=e.current,oo(t.nodeType===8?t.parentNode:t),new bh(e)};Tt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(V(188)):(t=Object.keys(t).join(","),Error(V(268,t)));return t=Uy(e),t=t===null?null:t.stateNode,t};Tt.flushSync=function(t){return $r(t)};Tt.hydrate=function(t,e,n){if(!Xl(e))throw Error(V(200));return Zl(null,t,e,!0,n)};Tt.hydrateRoot=function(t,e,n){if(!Nh(t))throw Error(V(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=v_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=y_(e,null,t,1,n??null,i,!1,s,o),t[xn]=e.current,oo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Jl(e)};Tt.render=function(t,e,n){if(!Xl(e))throw Error(V(200));return Zl(null,t,e,!1,n)};Tt.unmountComponentAtNode=function(t){if(!Xl(t))throw Error(V(40));return t._reactRootContainer?($r(function(){Zl(null,null,t,!1,function(){t._reactRootContainer=null,t[xn]=null})}),!0):!1};Tt.unstable_batchedUpdates=xh;Tt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Xl(n))throw Error(V(200));if(t==null||t._reactInternals===void 0)throw Error(V(38));return Zl(t,e,n,!1,r)};Tt.version="18.3.1-next-f1338f8080-20240426";function __(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(__)}catch(t){console.error(t)}}__(),_y.exports=Tt;var KT=_y.exports,Dm=KT;Tc.createRoot=Dm.createRoot,Tc.hydrateRoot=Dm.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QT=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),w_=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var YT={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JT=$.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...l},u)=>$.createElement("svg",{ref:u,...YT,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:w_("lucide",i),...l},[...o.map(([h,p])=>$.createElement(h,p)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=(t,e)=>{const n=$.forwardRef(({className:r,...i},s)=>$.createElement(JT,{ref:s,iconNode:e,className:w_(`lucide-${QT(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XT=mt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZT=mt("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eI=mt("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tI=mt("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nI=mt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rI=mt("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iI=mt("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sI=mt("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=mt("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oI=mt("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aI=mt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lI=mt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uI=mt("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cI=mt("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]),dI=()=>{};var Om={};/**
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
 */const T_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},hI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},I_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,g=(s&3)<<4|l>>4;let w=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(w=64)),r.push(n[p],n[g],n[w],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(T_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):hI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||g==null)throw new fI;const w=s<<2|l>>4;if(r.push(w),h!==64){const C=l<<4&240|h>>2;if(r.push(C),g!==64){const P=h<<6&192|g;r.push(P)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class fI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pI=function(t){const e=T_(t);return I_.encodeByteArray(e,!0)},yl=function(t){return pI(t).replace(/\./g,"")},S_=function(t){try{return I_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function mI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const gI=()=>mI().__FIREBASE_DEFAULTS__,yI=()=>{if(typeof process>"u"||typeof Om>"u")return;const t=Om.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},vI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&S_(t[1]);return e&&JSON.parse(e)},eu=()=>{try{return dI()||gI()||yI()||vI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},x_=t=>{var e,n;return(n=(e=eu())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},_I=t=>{const e=x_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},k_=()=>{var t;return(t=eu())==null?void 0:t.config},A_=t=>{var e;return(e=eu())==null?void 0:e[`_${t}`]};/**
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
 */class wI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function EI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[yl(JSON.stringify(n)),yl(JSON.stringify(o)),""].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function TI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function II(){var e;const t=(e=eu())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function C_(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function kI(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function AI(){return!II()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function R_(){try{return typeof indexedDB=="object"}catch{return!1}}function P_(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function CI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const RI="FirebaseError";class Yt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=RI,Object.setPrototypeOf(this,Yt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ei.prototype.create)}}class ei{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Yt(i,l,r)}}function PI(t,e){return t.replace(bI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const bI=/\{\$([^}]+)}/g;function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Mm(s)&&Mm(o)){if(!ur(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Mm(t){return t!==null&&typeof t=="object"}/**
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
 */function bo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ds(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Os(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function DI(t,e){const n=new OI(t,e);return n.subscribe.bind(n)}class OI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");MI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=lc),i.error===void 0&&(i.error=lc),i.complete===void 0&&(i.complete=lc);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function MI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function lc(){}/**
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
 */const jI=1e3,LI=2,VI=4*60*60*1e3,FI=.5;function jm(t,e=jI,n=LI){const r=e*Math.pow(n,t),i=Math.round(FI*r*(Math.random()-.5)*2);return Math.min(VI,r+i)}/**
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
 */function Be(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function No(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function b_(t){return(await fetch(t,{credentials:"include"})).ok}class Kt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Cr="[DEFAULT]";/**
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
 */class UI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new wI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(BI(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:zI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function zI(t){return t===Cr?void 0:t}function BI(t){return t.instantiationMode==="EAGER"}/**
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
 */class $I{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new UI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Z;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Z||(Z={}));const WI={debug:Z.DEBUG,verbose:Z.VERBOSE,info:Z.INFO,warn:Z.WARN,error:Z.ERROR,silent:Z.SILENT},HI=Z.INFO,qI={[Z.DEBUG]:"log",[Z.VERBOSE]:"log",[Z.INFO]:"info",[Z.WARN]:"warn",[Z.ERROR]:"error"},GI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=qI[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tu{constructor(e){this.name=e,this._logLevel=HI,this._logHandler=GI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Z))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Z.DEBUG,...e),this._logHandler(this,Z.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Z.VERBOSE,...e),this._logHandler(this,Z.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Z.INFO,...e),this._logHandler(this,Z.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Z.WARN,...e),this._logHandler(this,Z.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Z.ERROR,...e),this._logHandler(this,Z.ERROR,...e)}}const KI=(t,e)=>e.some(n=>t instanceof n);let Lm,Vm;function QI(){return Lm||(Lm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YI(){return Vm||(Vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const N_=new WeakMap,md=new WeakMap,D_=new WeakMap,uc=new WeakMap,Dh=new WeakMap;function JI(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(sr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&N_.set(n,t)}).catch(()=>{}),Dh.set(e,t),e}function XI(t){if(md.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});md.set(t,e)}let gd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return md.get(t);if(e==="objectStoreNames")return t.objectStoreNames||D_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZI(t){gd=t(gd)}function eS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(cc(this),e,...n);return D_.set(r,e.sort?e.sort():[e]),sr(r)}:YI().includes(t)?function(...e){return t.apply(cc(this),e),sr(N_.get(this))}:function(...e){return sr(t.apply(cc(this),e))}}function tS(t){return typeof t=="function"?eS(t):(t instanceof IDBTransaction&&XI(t),KI(t,QI())?new Proxy(t,gd):t)}function sr(t){if(t instanceof IDBRequest)return JI(t);if(uc.has(t))return uc.get(t);const e=tS(t);return e!==t&&(uc.set(t,e),Dh.set(e,t)),e}const cc=t=>Dh.get(t);function O_(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=sr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(sr(o.result),u.oldVersion,u.newVersion,sr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const nS=["get","getKey","getAll","getAllKeys","count"],rS=["put","add","delete","clear"],dc=new Map;function Fm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(dc.get(e))return dc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=rS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||nS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return dc.set(e,s),s}ZI(t=>({...t,get:(e,n,r)=>Fm(e,n)||t.get(e,n,r),has:(e,n)=>!!Fm(e,n)||t.has(e,n)}));/**
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
 */class iS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(sS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function sS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const yd="@firebase/app",Um="0.14.12";/**
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
 */const Cn=new tu("@firebase/app"),oS="@firebase/app-compat",aS="@firebase/analytics-compat",lS="@firebase/analytics",uS="@firebase/app-check-compat",cS="@firebase/app-check",dS="@firebase/auth",hS="@firebase/auth-compat",fS="@firebase/database",pS="@firebase/data-connect",mS="@firebase/database-compat",gS="@firebase/functions",yS="@firebase/functions-compat",vS="@firebase/installations",_S="@firebase/installations-compat",wS="@firebase/messaging",ES="@firebase/messaging-compat",TS="@firebase/performance",IS="@firebase/performance-compat",SS="@firebase/remote-config",xS="@firebase/remote-config-compat",kS="@firebase/storage",AS="@firebase/storage-compat",CS="@firebase/firestore",RS="@firebase/ai",PS="@firebase/firestore-compat",bS="firebase",NS="12.13.0";/**
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
 */const vd="[DEFAULT]",DS={[yd]:"fire-core",[oS]:"fire-core-compat",[lS]:"fire-analytics",[aS]:"fire-analytics-compat",[cS]:"fire-app-check",[uS]:"fire-app-check-compat",[dS]:"fire-auth",[hS]:"fire-auth-compat",[fS]:"fire-rtdb",[pS]:"fire-data-connect",[mS]:"fire-rtdb-compat",[gS]:"fire-fn",[yS]:"fire-fn-compat",[vS]:"fire-iid",[_S]:"fire-iid-compat",[wS]:"fire-fcm",[ES]:"fire-fcm-compat",[TS]:"fire-perf",[IS]:"fire-perf-compat",[SS]:"fire-rc",[xS]:"fire-rc-compat",[kS]:"fire-gcs",[AS]:"fire-gcs-compat",[CS]:"fire-fst",[PS]:"fire-fst-compat",[RS]:"fire-vertex","fire-js":"fire-js",[bS]:"fire-js-all"};/**
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
 */const vl=new Map,OS=new Map,_d=new Map;function zm(t,e){try{t.container.addComponent(e)}catch(n){Cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function un(t){const e=t.name;if(_d.has(e))return Cn.debug(`There were multiple attempts to register component ${e}.`),!1;_d.set(e,t);for(const n of vl.values())zm(n,t);for(const n of OS.values())zm(n,t);return!0}function ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function At(t){return t==null?!1:t.settings!==void 0}/**
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
 */const MS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},or=new ei("app","Firebase",MS);/**
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
 */class jS{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw or.create("app-deleted",{appName:this._name})}}/**
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
 */const Xi=NS;function M_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:vd,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw or.create("bad-app-name",{appName:String(i)});if(n||(n=k_()),!n)throw or.create("no-options");const s=vl.get(i);if(s){if(ur(n,s.options)&&ur(r,s.config))return s;throw or.create("duplicate-app",{appName:i})}const o=new $I(i);for(const u of _d.values())o.addComponent(u);const l=new jS(n,r,o);return vl.set(i,l),l}function Oh(t=vd){const e=vl.get(t);if(!e&&t===vd&&k_())return M_();if(!e)throw or.create("no-app",{appName:t});return e}function bt(t,e,n){let r=DS[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Cn.warn(o.join(" "));return}un(new Kt(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const LS="firebase-heartbeat-database",VS=1,go="firebase-heartbeat-store";let hc=null;function j_(){return hc||(hc=O_(LS,VS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(go)}catch(n){console.warn(n)}}}}).catch(t=>{throw or.create("idb-open",{originalErrorMessage:t.message})})),hc}async function FS(t){try{const n=(await j_()).transaction(go),r=await n.objectStore(go).get(L_(t));return await n.done,r}catch(e){if(e instanceof Yt)Cn.warn(e.message);else{const n=or.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Cn.warn(n.message)}}}async function Bm(t,e){try{const r=(await j_()).transaction(go,"readwrite");await r.objectStore(go).put(e,L_(t)),await r.done}catch(n){if(n instanceof Yt)Cn.warn(n.message);else{const r=or.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Cn.warn(r.message)}}}function L_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const US=1024,zS=30;class BS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new WS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=$m();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>zS){const o=HS(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Cn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$m(),{heartbeatsToSend:r,unsentEntries:i}=$S(this._heartbeatsCache.heartbeats),s=yl(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Cn.warn(n),""}}}function $m(){return new Date().toISOString().substring(0,10)}function $S(t,e=US){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Wm(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Wm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class WS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return R_()?P_().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return Bm(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Wm(t){return yl(JSON.stringify({version:2,heartbeats:t})).length}function HS(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function qS(t){un(new Kt("platform-logger",e=>new iS(e),"PRIVATE")),un(new Kt("heartbeat",e=>new BS(e),"PRIVATE")),bt(yd,Um,t),bt(yd,Um,"esm2020"),bt("fire-js","")}qS("");function V_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GS=V_,F_=new ei("auth","Firebase",V_());/**
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
 */const _l=new tu("@firebase/auth");function KS(t,...e){_l.logLevel<=Z.WARN&&_l.warn(`Auth (${Xi}): ${t}`,...e)}function Va(t,...e){_l.logLevel<=Z.ERROR&&_l.error(`Auth (${Xi}): ${t}`,...e)}/**
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
 */function Qt(t,...e){throw Mh(t,...e)}function on(t,...e){return Mh(t,...e)}function U_(t,e,n){const r={...GS(),[e]:n};return new ei("auth","Firebase",r).create(e,{appName:t.name})}function wn(t){return U_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Mh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return F_.create(t,...e)}function q(t,e,...n){if(!t)throw Mh(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Va(e),new Error(e)}function Rn(t,e){t||gn(e)}/**
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
 */function wd(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function QS(){return Hm()==="http:"||Hm()==="https:"}function Hm(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function YS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(QS()||C_()||"connection"in navigator)?navigator.onLine:!0}function JS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Do{constructor(e,n){this.shortDelay=e,this.longDelay=n,Rn(n>e,"Short delay should be less than long delay!"),this.isMobile=TI()||xI()}get(){return YS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function jh(t,e){Rn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ZS=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],ex=new Do(3e4,6e4);function vr(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function bn(t,e,n,r,i={}){return B_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=bo({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h={method:e,headers:u,...s};return SI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&No(t.emulatorConfig.host)&&(h.credentials="include"),z_.fetch()(await $_(t,t.config.apiHost,n,l),h)})}async function B_(t,e,n){t._canInitEmulator=!1;const r={...XS,...e};try{const i=new nx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw va(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw va(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw va(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw va(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw U_(t,p,h);Qt(t,p)}}catch(i){if(i instanceof Yt)throw i;Qt(t,"network-request-failed",{message:String(i)})}}async function Oo(t,e,n,r,i={}){const s=await bn(t,e,n,r,i);return"mfaPendingCredential"in s&&Qt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function $_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?jh(t.config,i):`${t.config.apiScheme}://${i}`;return ZS.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function tx(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),ex.get())})}}function va(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=on(t,e,r);return i.customData._tokenResponse=n,i}function qm(t){return t!==void 0&&t.enterprise!==void 0}class rx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tx(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function ix(t,e){return bn(t,"GET","/v2/recaptchaConfig",vr(t,e))}/**
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
 */async function sx(t,e){return bn(t,"POST","/v1/accounts:delete",e)}async function wl(t,e){return bn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ox(t,e=!1){const n=Be(t),r=await n.getIdToken(e),i=Lh(r);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Hs(fc(i.auth_time)),issuedAtTime:Hs(fc(i.iat)),expirationTime:Hs(fc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function fc(t){return Number(t)*1e3}function Lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Va("JWT malformed, contained fewer than 3 sections"),null;try{const i=S_(n);return i?JSON.parse(i):(Va("Failed to decode base64 JWT payload"),null)}catch(i){return Va("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Gm(t){const e=Lh(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Yt&&ax(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class lx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ed{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hs(this.lastLoginAt),this.creationTime=Hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function El(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Wi(t,wl(e,{idToken:n}));q(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?W_(i.providerUserInfo):[],o=cx(t.providerData,s),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),h=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new Ed(i.createdAt,i.lastLoginAt),isAnonymous:h};Object.assign(t,p)}async function ux(t){const e=Be(t);await El(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function cx(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function W_(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function dx(t,e){const n=await B_(t,{},async()=>{const r=bo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await $_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&No(t.emulatorConfig.host)&&(u.credentials="include"),z_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hx(t,e){return bn(t,"POST","/v2/accounts:revokeToken",vr(t,e))}/**
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
 */class Pi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Gm(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await dx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Pi;return r&&(q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Pi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Un(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class $t{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new lx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ed(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Wi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ox(this,e)}reload(){return ux(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new $t({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await El(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(wn(this.auth));const e=await this.getIdToken();return await Wi(this,sx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,l=n.tenantId??void 0,u=n._redirectEventId??void 0,h=n.createdAt??void 0,p=n.lastLoginAt??void 0,{uid:g,emailVerified:w,isAnonymous:C,providerData:P,stsTokenManager:D}=n;q(g&&D,e,"internal-error");const F=Pi.fromJSON(this.name,D);q(typeof g=="string",e,"internal-error"),Un(r,e.name),Un(i,e.name),q(typeof w=="boolean",e,"internal-error"),q(typeof C=="boolean",e,"internal-error"),Un(s,e.name),Un(o,e.name),Un(l,e.name),Un(u,e.name),Un(h,e.name),Un(p,e.name);const k=new $t({uid:g,auth:e,email:i,emailVerified:w,displayName:r,isAnonymous:C,photoURL:o,phoneNumber:s,tenantId:l,stsTokenManager:F,createdAt:h,lastLoginAt:p});return P&&Array.isArray(P)&&(k.providerData=P.map(v=>({...v}))),u&&(k._redirectEventId=u),k}static async _fromIdTokenResponse(e,n,r=!1){const i=new Pi;i.updateFromServerResponse(n);const s=new $t({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await El(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];q(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?W_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new Pi;l.updateFromIdToken(r);const u=new $t({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new Ed(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
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
 */const Km=new Map;function yn(t){Rn(t instanceof Function,"Expected a class definition");let e=Km.get(t);return e?(Rn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Km.set(t,e),e)}/**
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
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Qm=H_;/**
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
 */function Fa(t,e,n){return`firebase:${t}:${e}:${n}`}class bi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Fa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Fa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await wl(this.auth,{idToken:e}).catch(()=>{});return n?$t._fromGetAccountInfoResponse(this.auth,n,e):null}return $t._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new bi(yn(Qm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||yn(Qm);const o=Fa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){let g;if(typeof p=="string"){const w=await wl(e,{idToken:p}).catch(()=>{});if(!w)break;g=await $t._fromGetAccountInfoResponse(e,w,p)}else g=$t._fromJSON(e,p);h!==s&&(l=g),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new bi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new bi(s,e,r))}}/**
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
 */function Ym(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Q_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(q_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(J_(e))return"Blackberry";if(X_(e))return"Webos";if(G_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Y_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function q_(t=Ze()){return/firefox\//i.test(t)}function G_(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=Ze()){return/crios\//i.test(t)}function Q_(t=Ze()){return/iemobile/i.test(t)}function Y_(t=Ze()){return/android/i.test(t)}function J_(t=Ze()){return/blackberry/i.test(t)}function X_(t=Ze()){return/webos/i.test(t)}function Vh(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function fx(t=Ze()){var e;return Vh(t)&&!!((e=window.navigator)!=null&&e.standalone)}function px(){return kI()&&document.documentMode===10}function Z_(t=Ze()){return Vh(t)||Y_(t)||X_(t)||J_(t)||/windows phone/i.test(t)||Q_(t)}/**
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
 */function e0(t,e=[]){let n;switch(t){case"Browser":n=Ym(Ze());break;case"Worker":n=`${Ym(Ze())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xi}/${r}`}/**
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
 */class mx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function gx(t,e={}){return bn(t,"GET","/v2/passwordPolicy",vr(t,e))}/**
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
 */const yx=6;class vx{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??yx,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class _x{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jm(this),this.idTokenSubscription=new Jm(this),this.beforeStateQueue=new mx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=F_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await bi.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await wl(this,{idToken:e}),r=await $t._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(At(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,l=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await El(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(wn(this));const n=e?Be(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await gx(this),n=new vx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ei("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await hx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await bi.create(this,[yn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=e0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&KS(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ni(t){return Be(t)}class Jm{constructor(e){this.auth=e,this.observer=null,this.addObserver=DI(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let nu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function wx(t){nu=t}function t0(t){return nu.loadJS(t)}function Ex(){return nu.recaptchaEnterpriseScript}function Tx(){return nu.gapiScript}function Ix(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Sx{constructor(){this.enterprise=new xx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class xx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const kx="recaptcha-enterprise",n0="NO_RECAPTCHA";class Ax{constructor(e){this.type=kx,this.auth=ni(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{ix(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new rx(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;qm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(n0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Sx().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&qm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ex();u.length!==0&&(u+=l),t0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function Xm(t,e,n,r=!1,i=!1){const s=new Ax(t);let o;if(i)o=n0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function Td(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Xm(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const l=await Xm(t,e,n,n==="getOobCode");return r(t,l)}else return Promise.reject(o)})}/**
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
 */function Cx(t,e){const n=ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ur(s,e??{}))return i;Qt(i,"already-initialized")}return n.initialize({options:e})}function Rx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Px(t,e,n){const r=ni(t);q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=r0(e),{host:o,port:l}=bx(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},p=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){q(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),q(ur(h,r.config.emulator)&&ur(p,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=p,r.settings.appVerificationDisabledForTesting=!0,No(o)?b_(`${s}//${o}${u}`):Nx()}function r0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function bx(t){const e=r0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Zm(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Zm(o)}}}function Zm(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Nx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Fh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function Dx(t,e){return bn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function Ox(t,e){return Oo(t,"POST","/v1/accounts:signInWithPassword",vr(t,e))}/**
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
 */async function Mx(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}async function jx(t,e){return Oo(t,"POST","/v1/accounts:signInWithEmailLink",vr(t,e))}/**
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
 */class yo extends Fh{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new yo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new yo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,n,"signInWithPassword",Ox);case"emailLink":return Mx(e,{email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Td(e,r,"signUpPassword",Dx);case"emailLink":return jx(e,{idToken:n,email:this._email,oobCode:this._password});default:Qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ni(t,e){return Oo(t,"POST","/v1/accounts:signInWithIdp",vr(t,e))}/**
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
 */const Lx="http://localhost";class Wr extends Fh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Wr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new Wr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ni(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ni(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ni(e,n)}buildRequest(){const e={requestUri:Lx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=bo(n)}return e}}/**
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
 */function Vx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Fx(t){const e=Ds(Os(t)).link,n=e?Ds(Os(e)).deep_link_id:null,r=Ds(Os(t)).deep_link_id;return(r?Ds(Os(r)).link:null)||r||n||e||t}class Uh{constructor(e){const n=Ds(Os(e)),r=n.apiKey??null,i=n.oobCode??null,s=Vx(n.mode??null);q(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Fx(e);try{return new Uh(n)}catch{return null}}}/**
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
 */class Zi{constructor(){this.providerId=Zi.PROVIDER_ID}static credential(e,n){return yo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Uh.parseLink(n);return q(r,"argument-error"),yo._fromEmailAndCode(e,r.code,r.tenantId)}}Zi.PROVIDER_ID="password";Zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class i0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Mo extends i0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Hn extends Mo{constructor(){super("facebook.com")}static credential(e){return Wr._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Hn.PROVIDER_ID="facebook.com";/**
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
 */class qn extends Mo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Wr._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return qn.credential(n,r)}catch{return null}}}qn.GOOGLE_SIGN_IN_METHOD="google.com";qn.PROVIDER_ID="google.com";/**
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
 */class Gn extends Mo{constructor(){super("github.com")}static credential(e){return Wr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
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
 */class Kn extends Mo{constructor(){super("twitter.com")}static credential(e,n){return Wr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Kn.credential(n,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function Ux(t,e){return Oo(t,"POST","/v1/accounts:signUp",vr(t,e))}/**
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
 */class Hr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await $t._fromIdTokenResponse(e,r,i),o=eg(r);return new Hr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=eg(r);return new Hr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function eg(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Tl extends Yt{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Tl.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Tl(e,n,r,i)}}function s0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Tl._fromErrorAndOperation(t,s,e,r):s})}async function zx(t,e,n=!1){const r=await Wi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Hr._forOperation(t,"link",r)}/**
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
 */async function Bx(t,e,n=!1){const{auth:r}=t;if(At(r.app))return Promise.reject(wn(r));const i="reauthenticate";try{const s=await Wi(t,s0(r,i,e,t),n);q(s.idToken,r,"internal-error");const o=Lh(s.idToken);q(o,r,"internal-error");const{sub:l}=o;return q(t.uid===l,r,"user-mismatch"),Hr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Qt(r,"user-mismatch"),s}}/**
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
 */async function o0(t,e,n=!1){if(At(t.app))return Promise.reject(wn(t));const r="signIn",i=await s0(t,r,e),s=await Hr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $x(t,e){return o0(ni(t),e)}/**
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
 */async function a0(t){const e=ni(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Wx(t,e,n){if(At(t.app))return Promise.reject(wn(t));const r=ni(t),o=await Td(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ux).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&a0(t),u}),l=await Hr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function Hx(t,e,n){return At(t.app)?Promise.reject(wn(t)):$x(Be(t),Zi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&a0(t),r})}/**
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
 */async function qx(t,e){return bn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Gx(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Be(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wi(r,qx(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Kx(t,e,n,r){return Be(t).onIdTokenChanged(e,n,r)}function Qx(t,e,n){return Be(t).beforeAuthStateChanged(e,n)}function Yx(t,e,n,r){return Be(t).onAuthStateChanged(e,n,r)}function Jx(t){return Be(t).signOut()}const Il="__sak";/**
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
 */class l0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Il,"1"),this.storage.removeItem(Il),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Xx=1e3,Zx=10;class u0 extends l0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);px()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Zx):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Xx)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}u0.type="LOCAL";const ek=u0;/**
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
 */class c0 extends l0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}c0.type="SESSION";const d0=c0;/**
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
 */function tk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ru{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ru(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await tk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ru.receivers=[];/**
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
 */function zh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class nk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=zh("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const w=g;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(w.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function an(){return window}function rk(t){an().location.href=t}/**
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
 */function h0(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function ik(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function ok(){return h0()?self:null}/**
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
 */const f0="firebaseLocalStorageDb",ak=1,Sl="firebaseLocalStorage",p0="fbase_key";class jo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function iu(t,e){return t.transaction([Sl],e?"readwrite":"readonly").objectStore(Sl)}function lk(){const t=indexedDB.deleteDatabase(f0);return new jo(t).toPromise()}function Id(){const t=indexedDB.open(f0,ak);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sl,{keyPath:p0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sl)?e(r):(r.close(),await lk(),e(await Id()))})})}async function tg(t,e,n){const r=iu(t,!0).put({[p0]:e,value:n});return new jo(r).toPromise()}async function uk(t,e){const n=iu(t,!1).get(e),r=await new jo(n).toPromise();return r===void 0?null:r.value}function ng(t,e){const n=iu(t,!0).delete(e);return new jo(n).toPromise()}const ck=800,dk=3;class m0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Id(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>dk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ru._getInstance(ok()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await ik(),!this.activeServiceWorker)return;this.sender=new nk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Id();return await tg(e,Il,"1"),await ng(e,Il),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>uk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ng(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=iu(i,!1).getAll();return new jo(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}m0.type="LOCAL";const hk=m0;new Do(3e4,6e4);/**
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
 */function fk(t,e){return e?yn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bh extends Fh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ni(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ni(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ni(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function pk(t){return o0(t.auth,new Bh(t),t.bypassAuthState)}function mk(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Bx(n,new Bh(t),t.bypassAuthState)}async function gk(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),zx(n,new Bh(t),t.bypassAuthState)}/**
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
 */class g0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pk;case"linkViaPopup":case"linkViaRedirect":return gk;case"reauthViaPopup":case"reauthViaRedirect":return mk;default:Qt(this.auth,"internal-error")}}resolve(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Rn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const yk=new Do(2e3,1e4);class Ii extends g0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ii.currentPopupAction&&Ii.currentPopupAction.cancel(),Ii.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Rn(this.filter.length===1,"Popup operations only handle one event");const e=zh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ii.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,yk.get())};e()}}Ii.currentPopupAction=null;/**
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
 */const vk="pendingRedirect",Ua=new Map;class _k extends g0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ua.get(this.auth._key());if(!e){try{const r=await wk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ua.set(this.auth._key(),e)}return this.bypassAuthState||Ua.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wk(t,e){const n=Ik(e),r=Tk(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ek(t,e){Ua.set(t._key(),e)}function Tk(t){return yn(t._redirectPersistence)}function Ik(t){return Fa(vk,t.config.apiKey,t.name)}async function Sk(t,e,n=!1){if(At(t.app))return Promise.reject(wn(t));const r=ni(t),i=fk(r,e),o=await new _k(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const xk=10*60*1e3;class kk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ak(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!y0(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xk&&this.cachedEventUids.clear(),this.cachedEventUids.has(rg(e))}saveEventToCache(e){this.cachedEventUids.add(rg(e)),this.lastProcessedEventTime=Date.now()}}function rg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function y0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ak(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return y0(t);default:return!1}}/**
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
 */async function Ck(t,e={}){return bn(t,"GET","/v1/projects",e)}/**
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
 */const Rk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pk=/^https?/;async function bk(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Ck(t);for(const n of e)try{if(Nk(n))return}catch{}Qt(t,"unauthorized-domain")}function Nk(t){const e=wd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Pk.test(n))return!1;if(Rk.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Dk=new Do(3e4,6e4);function ig(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Ok(t){return new Promise((e,n)=>{var i,s,o;function r(){ig(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ig(),n(on(t,"network-request-failed"))},timeout:Dk.get()})}if((s=(i=an().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=an().gapi)!=null&&o.load)r();else{const l=Ix("iframefcb");return an()[l]=()=>{gapi.load?r():n(on(t,"network-request-failed"))},t0(`${Tx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw za=null,e})}let za=null;function Mk(t){return za=za||Ok(t),za}/**
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
 */const jk=new Do(5e3,15e3),Lk="__/auth/iframe",Vk="emulator/auth/iframe",Fk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Uk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zk(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?jh(e,Vk):`https://${t.config.authDomain}/${Lk}`,r={apiKey:e.apiKey,appName:t.name,v:Xi},i=Uk.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${bo(r).slice(1)}`}async function Bk(t){const e=await Mk(t),n=an().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:zk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Fk,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),l=an().setTimeout(()=>{s(o)},jk.get());function u(){an().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const $k={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Wk=500,Hk=600,qk="_blank",Gk="http://localhost";class sg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kk(t,e,n,r=Wk,i=Hk){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u={...$k,width:r.toString(),height:i.toString(),top:s,left:o},h=Ze().toLowerCase();n&&(l=K_(h)?qk:n),q_(h)&&(e=e||Gk,u.scrollbars="yes");const p=Object.entries(u).reduce((w,[C,P])=>`${w}${C}=${P},`,"");if(fx(h)&&l!=="_self")return Qk(e||"",l),new sg(null);const g=window.open(e||"",l,p);q(g,t,"popup-blocked");try{g.focus()}catch{}return new sg(g)}function Qk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yk="__/auth/handler",Jk="emulator/auth/handler",Xk=encodeURIComponent("fac");async function og(t,e,n,r,i,s){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xi,eventId:i};if(e instanceof i0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,g]of Object.entries({}))o[p]=g}if(e instanceof Mo){const p=e.getScopes().filter(g=>g!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${Xk}=${encodeURIComponent(u)}`:"";return`${Zk(t)}?${bo(l).slice(1)}${h}`}function Zk({config:t}){return t.emulator?jh(t,Jk):`https://${t.authDomain}/${Yk}`}/**
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
 */const pc="webStorageSupport";class eA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=d0,this._completeRedirectFn=Sk,this._overrideRedirectResult=Ek}async _openPopup(e,n,r,i){var o;Rn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await og(e,n,r,wd(),i);return Kk(e,s,zh())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await og(e,n,r,wd(),i);return rk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Rn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Bk(e),r=new kk(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(pc,{type:pc},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[pc];s!==void 0&&n(!!s),Qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=bk(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Z_()||G_()||Vh()}}const tA=eA;var ag="@firebase/auth",lg="1.13.1";/**
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
 */class nA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function rA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iA(t){un(new Kt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:e0(t)},h=new _x(r,i,s,u);return Rx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),un(new Kt("auth-internal",e=>{const n=ni(e.getProvider("auth").getImmediate());return(r=>new nA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),bt(ag,lg,rA(t)),bt(ag,lg,"esm2020")}/**
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
 */const sA=5*60,oA=A_("authIdTokenMaxAge")||sA;let ug=null;const aA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>oA)return;const i=n==null?void 0:n.token;ug!==i&&(ug=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function lA(t=Oh()){const e=ti(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Cx(t,{popupRedirectResolver:tA,persistence:[hk,ek,d0]}),r=A_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=aA(s.toString());Qx(n,o,()=>o(n.currentUser)),Kx(n,l=>o(l))}}const i=x_("auth");return i&&Px(n,`http://${i}`),n}function uA(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}wx({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=on("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",uA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iA("Browser");var cg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $h;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,y){function I(){}I.prototype=y.prototype,T.F=y.prototype,T.prototype=new I,T.prototype.constructor=T,T.D=function(x,E,A){for(var S=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)S[pe-2]=arguments[pe];return y.prototype[E].apply(x,S)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(T,y,I){I||(I=0);const x=Array(16);if(typeof y=="string")for(var E=0;E<16;++E)x[E]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(E=0;E<16;++E)x[E]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=T.g[0],I=T.g[1],E=T.g[2];let A=T.g[3],S;S=y+(A^I&(E^A))+x[0]+3614090360&4294967295,y=I+(S<<7&4294967295|S>>>25),S=A+(E^y&(I^E))+x[1]+3905402710&4294967295,A=y+(S<<12&4294967295|S>>>20),S=E+(I^A&(y^I))+x[2]+606105819&4294967295,E=A+(S<<17&4294967295|S>>>15),S=I+(y^E&(A^y))+x[3]+3250441966&4294967295,I=E+(S<<22&4294967295|S>>>10),S=y+(A^I&(E^A))+x[4]+4118548399&4294967295,y=I+(S<<7&4294967295|S>>>25),S=A+(E^y&(I^E))+x[5]+1200080426&4294967295,A=y+(S<<12&4294967295|S>>>20),S=E+(I^A&(y^I))+x[6]+2821735955&4294967295,E=A+(S<<17&4294967295|S>>>15),S=I+(y^E&(A^y))+x[7]+4249261313&4294967295,I=E+(S<<22&4294967295|S>>>10),S=y+(A^I&(E^A))+x[8]+1770035416&4294967295,y=I+(S<<7&4294967295|S>>>25),S=A+(E^y&(I^E))+x[9]+2336552879&4294967295,A=y+(S<<12&4294967295|S>>>20),S=E+(I^A&(y^I))+x[10]+4294925233&4294967295,E=A+(S<<17&4294967295|S>>>15),S=I+(y^E&(A^y))+x[11]+2304563134&4294967295,I=E+(S<<22&4294967295|S>>>10),S=y+(A^I&(E^A))+x[12]+1804603682&4294967295,y=I+(S<<7&4294967295|S>>>25),S=A+(E^y&(I^E))+x[13]+4254626195&4294967295,A=y+(S<<12&4294967295|S>>>20),S=E+(I^A&(y^I))+x[14]+2792965006&4294967295,E=A+(S<<17&4294967295|S>>>15),S=I+(y^E&(A^y))+x[15]+1236535329&4294967295,I=E+(S<<22&4294967295|S>>>10),S=y+(E^A&(I^E))+x[1]+4129170786&4294967295,y=I+(S<<5&4294967295|S>>>27),S=A+(I^E&(y^I))+x[6]+3225465664&4294967295,A=y+(S<<9&4294967295|S>>>23),S=E+(y^I&(A^y))+x[11]+643717713&4294967295,E=A+(S<<14&4294967295|S>>>18),S=I+(A^y&(E^A))+x[0]+3921069994&4294967295,I=E+(S<<20&4294967295|S>>>12),S=y+(E^A&(I^E))+x[5]+3593408605&4294967295,y=I+(S<<5&4294967295|S>>>27),S=A+(I^E&(y^I))+x[10]+38016083&4294967295,A=y+(S<<9&4294967295|S>>>23),S=E+(y^I&(A^y))+x[15]+3634488961&4294967295,E=A+(S<<14&4294967295|S>>>18),S=I+(A^y&(E^A))+x[4]+3889429448&4294967295,I=E+(S<<20&4294967295|S>>>12),S=y+(E^A&(I^E))+x[9]+568446438&4294967295,y=I+(S<<5&4294967295|S>>>27),S=A+(I^E&(y^I))+x[14]+3275163606&4294967295,A=y+(S<<9&4294967295|S>>>23),S=E+(y^I&(A^y))+x[3]+4107603335&4294967295,E=A+(S<<14&4294967295|S>>>18),S=I+(A^y&(E^A))+x[8]+1163531501&4294967295,I=E+(S<<20&4294967295|S>>>12),S=y+(E^A&(I^E))+x[13]+2850285829&4294967295,y=I+(S<<5&4294967295|S>>>27),S=A+(I^E&(y^I))+x[2]+4243563512&4294967295,A=y+(S<<9&4294967295|S>>>23),S=E+(y^I&(A^y))+x[7]+1735328473&4294967295,E=A+(S<<14&4294967295|S>>>18),S=I+(A^y&(E^A))+x[12]+2368359562&4294967295,I=E+(S<<20&4294967295|S>>>12),S=y+(I^E^A)+x[5]+4294588738&4294967295,y=I+(S<<4&4294967295|S>>>28),S=A+(y^I^E)+x[8]+2272392833&4294967295,A=y+(S<<11&4294967295|S>>>21),S=E+(A^y^I)+x[11]+1839030562&4294967295,E=A+(S<<16&4294967295|S>>>16),S=I+(E^A^y)+x[14]+4259657740&4294967295,I=E+(S<<23&4294967295|S>>>9),S=y+(I^E^A)+x[1]+2763975236&4294967295,y=I+(S<<4&4294967295|S>>>28),S=A+(y^I^E)+x[4]+1272893353&4294967295,A=y+(S<<11&4294967295|S>>>21),S=E+(A^y^I)+x[7]+4139469664&4294967295,E=A+(S<<16&4294967295|S>>>16),S=I+(E^A^y)+x[10]+3200236656&4294967295,I=E+(S<<23&4294967295|S>>>9),S=y+(I^E^A)+x[13]+681279174&4294967295,y=I+(S<<4&4294967295|S>>>28),S=A+(y^I^E)+x[0]+3936430074&4294967295,A=y+(S<<11&4294967295|S>>>21),S=E+(A^y^I)+x[3]+3572445317&4294967295,E=A+(S<<16&4294967295|S>>>16),S=I+(E^A^y)+x[6]+76029189&4294967295,I=E+(S<<23&4294967295|S>>>9),S=y+(I^E^A)+x[9]+3654602809&4294967295,y=I+(S<<4&4294967295|S>>>28),S=A+(y^I^E)+x[12]+3873151461&4294967295,A=y+(S<<11&4294967295|S>>>21),S=E+(A^y^I)+x[15]+530742520&4294967295,E=A+(S<<16&4294967295|S>>>16),S=I+(E^A^y)+x[2]+3299628645&4294967295,I=E+(S<<23&4294967295|S>>>9),S=y+(E^(I|~A))+x[0]+4096336452&4294967295,y=I+(S<<6&4294967295|S>>>26),S=A+(I^(y|~E))+x[7]+1126891415&4294967295,A=y+(S<<10&4294967295|S>>>22),S=E+(y^(A|~I))+x[14]+2878612391&4294967295,E=A+(S<<15&4294967295|S>>>17),S=I+(A^(E|~y))+x[5]+4237533241&4294967295,I=E+(S<<21&4294967295|S>>>11),S=y+(E^(I|~A))+x[12]+1700485571&4294967295,y=I+(S<<6&4294967295|S>>>26),S=A+(I^(y|~E))+x[3]+2399980690&4294967295,A=y+(S<<10&4294967295|S>>>22),S=E+(y^(A|~I))+x[10]+4293915773&4294967295,E=A+(S<<15&4294967295|S>>>17),S=I+(A^(E|~y))+x[1]+2240044497&4294967295,I=E+(S<<21&4294967295|S>>>11),S=y+(E^(I|~A))+x[8]+1873313359&4294967295,y=I+(S<<6&4294967295|S>>>26),S=A+(I^(y|~E))+x[15]+4264355552&4294967295,A=y+(S<<10&4294967295|S>>>22),S=E+(y^(A|~I))+x[6]+2734768916&4294967295,E=A+(S<<15&4294967295|S>>>17),S=I+(A^(E|~y))+x[13]+1309151649&4294967295,I=E+(S<<21&4294967295|S>>>11),S=y+(E^(I|~A))+x[4]+4149444226&4294967295,y=I+(S<<6&4294967295|S>>>26),S=A+(I^(y|~E))+x[11]+3174756917&4294967295,A=y+(S<<10&4294967295|S>>>22),S=E+(y^(A|~I))+x[2]+718787259&4294967295,E=A+(S<<15&4294967295|S>>>17),S=I+(A^(E|~y))+x[9]+3951481745&4294967295,T.g[0]=T.g[0]+y&4294967295,T.g[1]=T.g[1]+(E+(S<<21&4294967295|S>>>11))&4294967295,T.g[2]=T.g[2]+E&4294967295,T.g[3]=T.g[3]+A&4294967295}r.prototype.v=function(T,y){y===void 0&&(y=T.length);const I=y-this.blockSize,x=this.C;let E=this.h,A=0;for(;A<y;){if(E==0)for(;A<=I;)i(this,T,A),A+=this.blockSize;if(typeof T=="string"){for(;A<y;)if(x[E++]=T.charCodeAt(A++),E==this.blockSize){i(this,x),E=0;break}}else for(;A<y;)if(x[E++]=T[A++],E==this.blockSize){i(this,x),E=0;break}}this.h=E,this.o+=y},r.prototype.A=function(){var T=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);T[0]=128;for(var y=1;y<T.length-8;++y)T[y]=0;y=this.o*8;for(var I=T.length-8;I<T.length;++I)T[I]=y&255,y/=256;for(this.v(T),T=Array(16),y=0,I=0;I<4;++I)for(let x=0;x<32;x+=8)T[y++]=this.g[I]>>>x&255;return T};function s(T,y){var I=l;return Object.prototype.hasOwnProperty.call(I,T)?I[T]:I[T]=y(T)}function o(T,y){this.h=y;const I=[];let x=!0;for(let E=T.length-1;E>=0;E--){const A=T[E]|0;x&&A==y||(I[E]=A,x=!1)}this.g=I}var l={};function u(T){return-128<=T&&T<128?s(T,function(y){return new o([y|0],y<0?-1:0)}):new o([T|0],T<0?-1:0)}function h(T){if(isNaN(T)||!isFinite(T))return g;if(T<0)return F(h(-T));const y=[];let I=1;for(let x=0;T>=I;x++)y[x]=T/I|0,I*=4294967296;return new o(y,0)}function p(T,y){if(T.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(T.charAt(0)=="-")return F(p(T.substring(1),y));if(T.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=h(Math.pow(y,8));let x=g;for(let A=0;A<T.length;A+=8){var E=Math.min(8,T.length-A);const S=parseInt(T.substring(A,A+E),y);E<8?(E=h(Math.pow(y,E)),x=x.j(E).add(h(S))):(x=x.j(I),x=x.add(h(S)))}return x}var g=u(0),w=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(D(this))return-F(this).m();let T=0,y=1;for(let I=0;I<this.g.length;I++){const x=this.i(I);T+=(x>=0?x:4294967296+x)*y,y*=4294967296}return T},t.toString=function(T){if(T=T||10,T<2||36<T)throw Error("radix out of range: "+T);if(P(this))return"0";if(D(this))return"-"+F(this).toString(T);const y=h(Math.pow(T,6));var I=this;let x="";for(;;){const E=b(I,y).g;I=k(I,E.j(y));let A=((I.g.length>0?I.g[0]:I.h)>>>0).toString(T);if(I=E,P(I))return A+x;for(;A.length<6;)A="0"+A;x=A+x}},t.i=function(T){return T<0?0:T<this.g.length?this.g[T]:this.h};function P(T){if(T.h!=0)return!1;for(let y=0;y<T.g.length;y++)if(T.g[y]!=0)return!1;return!0}function D(T){return T.h==-1}t.l=function(T){return T=k(this,T),D(T)?-1:P(T)?0:1};function F(T){const y=T.g.length,I=[];for(let x=0;x<y;x++)I[x]=~T.g[x];return new o(I,~T.h).add(w)}t.abs=function(){return D(this)?F(this):this},t.add=function(T){const y=Math.max(this.g.length,T.g.length),I=[];let x=0;for(let E=0;E<=y;E++){let A=x+(this.i(E)&65535)+(T.i(E)&65535),S=(A>>>16)+(this.i(E)>>>16)+(T.i(E)>>>16);x=S>>>16,A&=65535,S&=65535,I[E]=S<<16|A}return new o(I,I[I.length-1]&-2147483648?-1:0)};function k(T,y){return T.add(F(y))}t.j=function(T){if(P(this)||P(T))return g;if(D(this))return D(T)?F(this).j(F(T)):F(F(this).j(T));if(D(T))return F(this.j(F(T)));if(this.l(C)<0&&T.l(C)<0)return h(this.m()*T.m());const y=this.g.length+T.g.length,I=[];for(var x=0;x<2*y;x++)I[x]=0;for(x=0;x<this.g.length;x++)for(let E=0;E<T.g.length;E++){const A=this.i(x)>>>16,S=this.i(x)&65535,pe=T.i(E)>>>16,et=T.i(E)&65535;I[2*x+2*E]+=S*et,v(I,2*x+2*E),I[2*x+2*E+1]+=A*et,v(I,2*x+2*E+1),I[2*x+2*E+1]+=S*pe,v(I,2*x+2*E+1),I[2*x+2*E+2]+=A*pe,v(I,2*x+2*E+2)}for(T=0;T<y;T++)I[T]=I[2*T+1]<<16|I[2*T];for(T=y;T<2*y;T++)I[T]=0;return new o(I,0)};function v(T,y){for(;(T[y]&65535)!=T[y];)T[y+1]+=T[y]>>>16,T[y]&=65535,y++}function _(T,y){this.g=T,this.h=y}function b(T,y){if(P(y))throw Error("division by zero");if(P(T))return new _(g,g);if(D(T))return y=b(F(T),y),new _(F(y.g),F(y.h));if(D(y))return y=b(T,F(y)),new _(F(y.g),y.h);if(T.g.length>30){if(D(T)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var I=w,x=y;x.l(T)<=0;)I=M(I),x=M(x);var E=j(I,1),A=j(x,1);for(x=j(x,2),I=j(I,2);!P(x);){var S=A.add(x);S.l(T)<=0&&(E=E.add(I),A=S),x=j(x,1),I=j(I,1)}return y=k(T,E.j(y)),new _(E,y)}for(E=g;T.l(y)>=0;){for(I=Math.max(1,Math.floor(T.m()/y.m())),x=Math.ceil(Math.log(I)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),A=h(I),S=A.j(y);D(S)||S.l(T)>0;)I-=x,A=h(I),S=A.j(y);P(A)&&(A=w),E=E.add(A),T=k(T,S)}return new _(E,T)}t.B=function(T){return b(this,T).h},t.and=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)&T.i(x);return new o(I,this.h&T.h)},t.or=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)|T.i(x);return new o(I,this.h|T.h)},t.xor=function(T){const y=Math.max(this.g.length,T.g.length),I=[];for(let x=0;x<y;x++)I[x]=this.i(x)^T.i(x);return new o(I,this.h^T.h)};function M(T){const y=T.g.length+1,I=[];for(let x=0;x<y;x++)I[x]=T.i(x)<<1|T.i(x-1)>>>31;return new o(I,T.h)}function j(T,y){const I=y>>5;y%=32;const x=T.g.length-I,E=[];for(let A=0;A<x;A++)E[A]=y>0?T.i(A+I)>>>y|T.i(A+I+1)<<32-y:T.i(A+I);return new o(E,T.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=p,$h=o}).apply(typeof cg<"u"?cg:typeof self<"u"?self:typeof window<"u"?window:{});var _a=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v0,Ms,_0,Ba,Sd,w0,E0,T0;(function(){var t,e=Object.defineProperty;function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof _a=="object"&&_a];for(var c=0;c<a.length;++c){var f=a[c];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var f=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var R=a[m];if(!(R in f))break e;f=f[R]}a=a[a.length-1],m=f[a],c=c(m),c!=m&&c!=null&&e(f,a,{configurable:!0,writable:!0,value:c})}}i("Symbol.dispose",function(a){return a||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(a){return a||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(a){return a||function(c){var f=[],m;for(m in c)Object.prototype.hasOwnProperty.call(c,m)&&f.push([m,c[m]]);return f}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function l(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function u(a,c,f){return a.call.apply(a.bind,arguments)}function h(a,c,f){return h=u,h.apply(null,arguments)}function p(a,c){var f=Array.prototype.slice.call(arguments,1);return function(){var m=f.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function g(a,c){function f(){}f.prototype=c.prototype,a.Z=c.prototype,a.prototype=new f,a.prototype.constructor=a,a.Ob=function(m,R,N){for(var U=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)U[Q-2]=arguments[Q];return c.prototype[R].apply(m,U)}}var w=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?a=>a&&AsyncContext.Snapshot.wrap(a):a=>a;function C(a){const c=a.length;if(c>0){const f=Array(c);for(let m=0;m<c;m++)f[m]=a[m];return f}return[]}function P(a,c){for(let m=1;m<arguments.length;m++){const R=arguments[m];var f=typeof R;if(f=f!="object"?f:R?Array.isArray(R)?"array":f:"null",f=="array"||f=="object"&&typeof R.length=="number"){f=a.length||0;const N=R.length||0;a.length=f+N;for(let U=0;U<N;U++)a[f+U]=R[U]}else a.push(R)}}class D{constructor(c,f){this.i=c,this.j=f,this.h=0,this.g=null}get(){let c;return this.h>0?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function F(a){o.setTimeout(()=>{throw a},0)}function k(){var a=T;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class v{constructor(){this.h=this.g=null}add(c,f){const m=_.get();m.set(c,f),this.h?this.h.next=m:this.g=m,this.h=m}}var _=new D(()=>new b,a=>a.reset());class b{constructor(){this.next=this.g=this.h=null}set(c,f){this.h=c,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let M,j=!1,T=new v,y=()=>{const a=Promise.resolve(void 0);M=()=>{a.then(I)}};function I(){for(var a;a=k();){try{a.h.call(a.g)}catch(f){F(f)}var c=_;c.j(a),c.h<100&&(c.h++,a.next=c.g,c.g=a)}j=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function E(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}E.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};o.addEventListener("test",f,c),o.removeEventListener("test",f,c)}catch{}return a}();function S(a){return/^[\s\xa0]*$/.test(a)}function pe(a,c){E.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a&&this.init(a,c)}g(pe,E),pe.prototype.init=function(a,c){const f=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget,c||(f=="mouseover"?c=a.fromElement:f=="mouseout"&&(c=a.toElement)),this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=a.pointerType,this.state=a.state,this.i=a,a.defaultPrevented&&pe.Z.h.call(this)},pe.prototype.h=function(){pe.Z.h.call(this);const a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var et="closure_listenable_"+(Math.random()*1e6|0),$e=0;function ns(a,c,f,m,R){this.listener=a,this.proxy=null,this.src=c,this.type=f,this.capture=!!m,this.ha=R,this.key=++$e,this.da=this.fa=!1}function z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function G(a,c,f){for(const m in a)c.call(f,a[m],m,a)}function K(a,c){for(const f in a)c.call(void 0,a[f],f,a)}function ce(a){const c={};for(const f in a)c[f]=a[f];return c}const Ee="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function _r(a,c){let f,m;for(let R=1;R<arguments.length;R++){m=arguments[R];for(f in m)a[f]=m[f];for(let N=0;N<Ee.length;N++)f=Ee[N],Object.prototype.hasOwnProperty.call(m,f)&&(a[f]=m[f])}}function St(a){this.src=a,this.g={},this.h=0}St.prototype.add=function(a,c,f,m,R){const N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);const U=Ot(a,c,m,R);return U>-1?(c=a[U],f||(c.fa=!1)):(c=new ns(c,this.src,N,!!m,R),c.fa=f,a.push(c)),c};function wr(a,c){const f=c.type;if(f in a.g){var m=a.g[f],R=Array.prototype.indexOf.call(m,c,void 0),N;(N=R>=0)&&Array.prototype.splice.call(m,R,1),N&&(z(c),a.g[f].length==0&&(delete a.g[f],a.h--))}}function Ot(a,c,f,m){for(let R=0;R<a.length;++R){const N=a[R];if(!N.da&&N.listener==c&&N.capture==!!f&&N.ha==m)return R}return-1}var Nn="closure_lm_"+(Math.random()*1e6|0),mu={};function Af(a,c,f,m,R){if(Array.isArray(c)){for(let N=0;N<c.length;N++)Af(a,c[N],f,m,R);return null}return f=Pf(f),a&&a[et]?a.J(c,f,l(m)?!!m.capture:!1,R):Gw(a,c,f,!1,m,R)}function Gw(a,c,f,m,R,N){if(!c)throw Error("Invalid event type");const U=l(R)?!!R.capture:!!R;let Q=yu(a);if(Q||(a[Nn]=Q=new St(a)),f=Q.add(c,f,m,U,N),f.proxy)return f;if(m=Kw(),f.proxy=m,m.src=a,m.listener=f,a.addEventListener)A||(R=U),R===void 0&&(R=!1),a.addEventListener(c.toString(),m,R);else if(a.attachEvent)a.attachEvent(Rf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function Kw(){function a(f){return c.call(a.src,a.listener,f)}const c=Qw;return a}function Cf(a,c,f,m,R){if(Array.isArray(c))for(var N=0;N<c.length;N++)Cf(a,c[N],f,m,R);else m=l(m)?!!m.capture:!!m,f=Pf(f),a&&a[et]?(a=a.i,N=String(c).toString(),N in a.g&&(c=a.g[N],f=Ot(c,f,m,R),f>-1&&(z(c[f]),Array.prototype.splice.call(c,f,1),c.length==0&&(delete a.g[N],a.h--)))):a&&(a=yu(a))&&(c=a.g[c.toString()],a=-1,c&&(a=Ot(c,f,m,R)),(f=a>-1?c[a]:null)&&gu(f))}function gu(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[et])wr(c.i,a);else{var f=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(f,m,a.capture):c.detachEvent?c.detachEvent(Rf(f),m):c.addListener&&c.removeListener&&c.removeListener(m),(f=yu(c))?(wr(f,a),f.h==0&&(f.src=null,c[Nn]=null)):z(a)}}}function Rf(a){return a in mu?mu[a]:mu[a]="on"+a}function Qw(a,c){if(a.da)a=!0;else{c=new pe(c,this);const f=a.listener,m=a.ha||a.src;a.fa&&gu(a),a=f.call(m,c)}return a}function yu(a){return a=a[Nn],a instanceof St?a:null}var vu="__closure_events_fn_"+(Math.random()*1e9>>>0);function Pf(a){return typeof a=="function"?a:(a[vu]||(a[vu]=function(c){return a.handleEvent(c)}),a[vu])}function We(){x.call(this),this.i=new St(this),this.M=this,this.G=null}g(We,x),We.prototype[et]=!0,We.prototype.removeEventListener=function(a,c,f,m){Cf(this,a,c,f,m)};function tt(a,c){var f,m=a.G;if(m)for(f=[];m;m=m.G)f.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new E(c,a);else if(c instanceof E)c.target=c.target||a;else{var R=c;c=new E(m,a),_r(c,R)}R=!0;let N,U;if(f)for(U=f.length-1;U>=0;U--)N=c.g=f[U],R=$o(N,m,!0,c)&&R;if(N=c.g=a,R=$o(N,m,!0,c)&&R,R=$o(N,m,!1,c)&&R,f)for(U=0;U<f.length;U++)N=c.g=f[U],R=$o(N,m,!1,c)&&R}We.prototype.N=function(){if(We.Z.N.call(this),this.i){var a=this.i;for(const c in a.g){const f=a.g[c];for(let m=0;m<f.length;m++)z(f[m]);delete a.g[c],a.h--}}this.G=null},We.prototype.J=function(a,c,f,m){return this.i.add(String(a),c,!1,f,m)},We.prototype.K=function(a,c,f,m){return this.i.add(String(a),c,!0,f,m)};function $o(a,c,f,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();let R=!0;for(let N=0;N<c.length;++N){const U=c[N];if(U&&!U.da&&U.capture==f){const Q=U.listener,Ae=U.ha||U.src;U.fa&&wr(a.i,U),R=Q.call(Ae,m)!==!1&&R}}return R&&!m.defaultPrevented}function Yw(a,c){if(typeof a!="function")if(a&&typeof a.handleEvent=="function")a=h(a.handleEvent,a);else throw Error("Invalid listener argument");return Number(c)>2147483647?-1:o.setTimeout(a,c||0)}function bf(a){a.g=Yw(()=>{a.g=null,a.i&&(a.i=!1,bf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class Jw extends x{constructor(c,f){super(),this.m=c,this.l=f,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:bf(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function rs(a){x.call(this),this.h=a,this.g={}}g(rs,x);var Nf=[];function Df(a){G(a.g,function(c,f){this.g.hasOwnProperty(f)&&gu(c)},a),a.g={}}rs.prototype.N=function(){rs.Z.N.call(this),Df(this)},rs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _u=o.JSON.stringify,Xw=o.JSON.parse,Zw=class{stringify(a){return o.JSON.stringify(a,void 0)}parse(a){return o.JSON.parse(a,void 0)}};function Of(){}function Mf(){}var is={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function wu(){E.call(this,"d")}g(wu,E);function Eu(){E.call(this,"c")}g(Eu,E);var Er={},jf=null;function Wo(){return jf=jf||new We}Er.Ia="serverreachability";function Lf(a){E.call(this,Er.Ia,a)}g(Lf,E);function ss(a){const c=Wo();tt(c,new Lf(c))}Er.STAT_EVENT="statevent";function Vf(a,c){E.call(this,Er.STAT_EVENT,a),this.stat=c}g(Vf,E);function nt(a){const c=Wo();tt(c,new Vf(c,a))}Er.Ja="timingevent";function Ff(a,c){E.call(this,Er.Ja,a),this.size=c}g(Ff,E);function os(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){a()},c)}function as(){this.g=!0}as.prototype.ua=function(){this.g=!1};function eE(a,c,f,m,R,N){a.info(function(){if(a.g)if(N){var U="",Q=N.split("&");for(let ie=0;ie<Q.length;ie++){var Ae=Q[ie].split("=");if(Ae.length>1){const Pe=Ae[0];Ae=Ae[1];const Xt=Pe.split("_");U=Xt.length>=2&&Xt[1]=="type"?U+(Pe+"="+Ae+"&"):U+(Pe+"=redacted&")}}}else U=null;else U=N;return"XMLHTTP REQ ("+m+") [attempt "+R+"]: "+c+`
`+f+`
`+U})}function tE(a,c,f,m,R,N,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+R+"]: "+c+`
`+f+`
`+N+" "+U})}function si(a,c,f,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+rE(a,f)+(m?" "+m:"")})}function nE(a,c){a.info(function(){return"TIMEOUT: "+c})}as.prototype.info=function(){};function rE(a,c){if(!a.g)return c;if(!c)return null;try{const N=JSON.parse(c);if(N){for(a=0;a<N.length;a++)if(Array.isArray(N[a])){var f=N[a];if(!(f.length<2)){var m=f[1];if(Array.isArray(m)&&!(m.length<1)){var R=m[0];if(R!="noop"&&R!="stop"&&R!="close")for(let U=1;U<m.length;U++)m[U]=""}}}}return _u(N)}catch{return c}}var Ho={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},Uf={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},zf;function Tu(){}g(Tu,Of),Tu.prototype.g=function(){return new XMLHttpRequest},zf=new Tu;function ls(a){return encodeURIComponent(String(a))}function iE(a){var c=1;a=a.split(":");const f=[];for(;c>0&&a.length;)f.push(a.shift()),c--;return a.length&&f.push(a.join(":")),f}function Dn(a,c,f,m){this.j=a,this.i=c,this.l=f,this.S=m||1,this.V=new rs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Bf}function Bf(){this.i=null,this.g="",this.h=!1}var $f={},Iu={};function Su(a,c,f){a.M=1,a.A=Go(Jt(c)),a.u=f,a.R=!0,Wf(a,null)}function Wf(a,c){a.F=Date.now(),qo(a),a.B=Jt(a.A);var f=a.B,m=a.S;Array.isArray(m)||(m=[String(m)]),rp(f.i,"t",m),a.C=0,f=a.j.L,a.h=new Bf,a.g=Ep(a.j,f?c:null,!a.u),a.P>0&&(a.O=new Jw(h(a.Y,a,a.g),a.P)),c=a.V,f=a.g,m=a.ba;var R="readystatechange";Array.isArray(R)||(R&&(Nf[0]=R.toString()),R=Nf);for(let N=0;N<R.length;N++){const U=Af(f,R[N],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.J?ce(a.J):{},a.u?(a.v||(a.v="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.B,a.v,a.u,c)):(a.v="GET",a.g.ea(a.B,a.v,null,c)),ss(),eE(a.i,a.v,a.B,a.l,a.S,a.u)}Dn.prototype.ba=function(a){a=a.target;const c=this.O;c&&jn(a)==3?c.j():this.Y(a)},Dn.prototype.Y=function(a){try{if(a==this.g)e:{const Q=jn(this.g),Ae=this.g.ya(),ie=this.g.ca();if(!(Q<3)&&(Q!=3||this.g&&(this.h.h||this.g.la()||cp(this.g)))){this.K||Q!=4||Ae==7||(Ae==8||ie<=0?ss(3):ss(2)),xu(this);var c=this.g.ca();this.X=c;var f=sE(this);if(this.o=c==200,tE(this.i,this.v,this.B,this.l,this.S,Q,c),this.o){if(this.U&&!this.L){t:{if(this.g){var m,R=this.g;if((m=R.g?R.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(m)){var N=m;break t}}N=null}if(a=N)si(this.i,this.l,a,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,ku(this,a);else{this.o=!1,this.m=3,nt(12),Tr(this),us(this);break e}}if(this.R){a=!0;let Pe;for(;!this.K&&this.C<f.length;)if(Pe=oE(this,f),Pe==Iu){Q==4&&(this.m=4,nt(14),a=!1),si(this.i,this.l,null,"[Incomplete Response]");break}else if(Pe==$f){this.m=4,nt(15),si(this.i,this.l,f,"[Invalid Chunk]"),a=!1;break}else si(this.i,this.l,Pe,null),ku(this,Pe);if(Hf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Q!=4||f.length!=0||this.h.h||(this.m=1,nt(16),a=!1),this.o=this.o&&a,!a)si(this.i,this.l,f,"[Invalid Chunked Response]"),Tr(this),us(this);else if(f.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+f.length),Ou(U),U.P=!0,nt(11))}}else si(this.i,this.l,f,null),ku(this,f);Q==4&&Tr(this),this.o&&!this.K&&(Q==4?yp(this.j,this):(this.o=!1,qo(this)))}else wE(this.g),c==400&&f.indexOf("Unknown SID")>0?(this.m=3,nt(12)):(this.m=0,nt(13)),Tr(this),us(this)}}}catch{}finally{}};function sE(a){if(!Hf(a))return a.g.la();const c=cp(a.g);if(c==="")return"";let f="";const m=c.length,R=jn(a.g)==4;if(!a.h.i){if(typeof TextDecoder>"u")return Tr(a),us(a),"";a.h.i=new o.TextDecoder}for(let N=0;N<m;N++)a.h.h=!0,f+=a.h.i.decode(c[N],{stream:!(R&&N==m-1)});return c.length=0,a.h.g+=f,a.C=0,a.h.g}function Hf(a){return a.g?a.v=="GET"&&a.M!=2&&a.j.Aa:!1}function oE(a,c){var f=a.C,m=c.indexOf(`
`,f);return m==-1?Iu:(f=Number(c.substring(f,m)),isNaN(f)?$f:(m+=1,m+f>c.length?Iu:(c=c.slice(m,m+f),a.C=m+f,c)))}Dn.prototype.cancel=function(){this.K=!0,Tr(this)};function qo(a){a.T=Date.now()+a.H,qf(a,a.H)}function qf(a,c){if(a.D!=null)throw Error("WatchDog timer not null");a.D=os(h(a.aa,a),c)}function xu(a){a.D&&(o.clearTimeout(a.D),a.D=null)}Dn.prototype.aa=function(){this.D=null;const a=Date.now();a-this.T>=0?(nE(this.i,this.B),this.M!=2&&(ss(),nt(17)),Tr(this),this.m=2,us(this)):qf(this,this.T-a)};function us(a){a.j.I==0||a.K||yp(a.j,a)}function Tr(a){xu(a);var c=a.O;c&&typeof c.dispose=="function"&&c.dispose(),a.O=null,Df(a.V),a.g&&(c=a.g,a.g=null,c.abort(),c.dispose())}function ku(a,c){try{var f=a.j;if(f.I!=0&&(f.g==a||Au(f.h,a))){if(!a.L&&Au(f.h,a)&&f.I==3){try{var m=f.Ba.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var R=m;if(R[0]==0){e:if(!f.v){if(f.g)if(f.g.F+3e3<a.F)Xo(f),Yo(f);else break e;Du(f),nt(18)}}else f.xa=R[1],0<f.xa-f.K&&R[2]<37500&&f.F&&f.A==0&&!f.C&&(f.C=os(h(f.Va,f),6e3));Qf(f.h)<=1&&f.ta&&(f.ta=void 0)}else Sr(f,11)}else if((a.L||f.g==a)&&Xo(f),!S(c))for(R=f.Ba.g.parse(c),c=0;c<R.length;c++){let ie=R[c];const Pe=ie[0];if(!(Pe<=f.K))if(f.K=Pe,ie=ie[1],f.I==2)if(ie[0]=="c"){f.M=ie[1],f.ba=ie[2];const Xt=ie[3];Xt!=null&&(f.ka=Xt,f.j.info("VER="+f.ka));const xr=ie[4];xr!=null&&(f.za=xr,f.j.info("SVER="+f.za));const Ln=ie[5];Ln!=null&&typeof Ln=="number"&&Ln>0&&(m=1.5*Ln,f.O=m,f.j.info("backChannelRequestTimeoutMs_="+m)),m=f;const Vn=a.g;if(Vn){const ea=Vn.g?Vn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ea){var N=m.h;N.g||ea.indexOf("spdy")==-1&&ea.indexOf("quic")==-1&&ea.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Cu(N,N.h),N.h=null))}if(m.G){const Mu=Vn.g?Vn.g.getResponseHeader("X-HTTP-Session-Id"):null;Mu&&(m.wa=Mu,ae(m.J,m.G,Mu))}}f.I=3,f.l&&f.l.ra(),f.aa&&(f.T=Date.now()-a.F,f.j.info("Handshake RTT: "+f.T+"ms")),m=f;var U=a;if(m.na=wp(m,m.L?m.ba:null,m.W),U.L){Yf(m.h,U);var Q=U,Ae=m.O;Ae&&(Q.H=Ae),Q.D&&(xu(Q),qo(Q)),m.g=U}else mp(m);f.i.length>0&&Jo(f)}else ie[0]!="stop"&&ie[0]!="close"||Sr(f,7);else f.I==3&&(ie[0]=="stop"||ie[0]=="close"?ie[0]=="stop"?Sr(f,7):Nu(f):ie[0]!="noop"&&f.l&&f.l.qa(ie),f.A=0)}}ss(4)}catch{}}var aE=class{constructor(a,c){this.g=a,this.map=c}};function Gf(a){this.l=a||10,o.PerformanceNavigationTiming?(a=o.performance.getEntriesByType("navigation"),a=a.length>0&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Kf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Qf(a){return a.h?1:a.g?a.g.size:0}function Au(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Cu(a,c){a.g?a.g.add(c):a.h=c}function Yf(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Gf.prototype.cancel=function(){if(this.i=Jf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Jf(a){if(a.h!=null)return a.i.concat(a.h.G);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const f of a.g.values())c=c.concat(f.G);return c}return C(a.i)}var Xf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function lE(a,c){if(a){a=a.split("&");for(let f=0;f<a.length;f++){const m=a[f].indexOf("=");let R,N=null;m>=0?(R=a[f].substring(0,m),N=a[f].substring(m+1)):R=a[f],c(R,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function On(a){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let c;a instanceof On?(this.l=a.l,cs(this,a.j),this.o=a.o,this.g=a.g,ds(this,a.u),this.h=a.h,Ru(this,ip(a.i)),this.m=a.m):a&&(c=String(a).match(Xf))?(this.l=!1,cs(this,c[1]||"",!0),this.o=hs(c[2]||""),this.g=hs(c[3]||"",!0),ds(this,c[4]),this.h=hs(c[5]||"",!0),Ru(this,c[6]||"",!0),this.m=hs(c[7]||"")):(this.l=!1,this.i=new ps(null,this.l))}On.prototype.toString=function(){const a=[];var c=this.j;c&&a.push(fs(c,Zf,!0),":");var f=this.g;return(f||c=="file")&&(a.push("//"),(c=this.o)&&a.push(fs(c,Zf,!0),"@"),a.push(ls(f).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.u,f!=null&&a.push(":",String(f))),(f=this.h)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fs(f,f.charAt(0)=="/"?dE:cE,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fs(f,fE)),a.join("")},On.prototype.resolve=function(a){const c=Jt(this);let f=!!a.j;f?cs(c,a.j):f=!!a.o,f?c.o=a.o:f=!!a.g,f?c.g=a.g:f=a.u!=null;var m=a.h;if(f)ds(c,a.u);else if(f=!!a.h){if(m.charAt(0)!="/")if(this.g&&!this.h)m="/"+m;else{var R=c.h.lastIndexOf("/");R!=-1&&(m=c.h.slice(0,R+1)+m)}if(R=m,R==".."||R==".")m="";else if(R.indexOf("./")!=-1||R.indexOf("/.")!=-1){m=R.lastIndexOf("/",0)==0,R=R.split("/");const N=[];for(let U=0;U<R.length;){const Q=R[U++];Q=="."?m&&U==R.length&&N.push(""):Q==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),m&&U==R.length&&N.push("")):(N.push(Q),m=!0)}m=N.join("/")}else m=R}return f?c.h=m:f=a.i.toString()!=="",f?Ru(c,ip(a.i)):f=!!a.m,f&&(c.m=a.m),c};function Jt(a){return new On(a)}function cs(a,c,f){a.j=f?hs(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function ds(a,c){if(c){if(c=Number(c),isNaN(c)||c<0)throw Error("Bad port number "+c);a.u=c}else a.u=null}function Ru(a,c,f){c instanceof ps?(a.i=c,pE(a.i,a.l)):(f||(c=fs(c,hE)),a.i=new ps(c,a.l))}function ae(a,c,f){a.i.set(c,f)}function Go(a){return ae(a,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),a}function hs(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fs(a,c,f){return typeof a=="string"?(a=encodeURI(a).replace(c,uE),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function uE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zf=/[#\/\?@]/g,cE=/[#\?:]/g,dE=/[#\?]/g,hE=/[#\?@]/g,fE=/#/g;function ps(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function Ir(a){a.g||(a.g=new Map,a.h=0,a.i&&lE(a.i,function(c,f){a.add(decodeURIComponent(c.replace(/\+/g," ")),f)}))}t=ps.prototype,t.add=function(a,c){Ir(this),this.i=null,a=oi(this,a);let f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(c),this.h+=1,this};function ep(a,c){Ir(a),c=oi(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function tp(a,c){return Ir(a),c=oi(a,c),a.g.has(c)}t.forEach=function(a,c){Ir(this),this.g.forEach(function(f,m){f.forEach(function(R){a.call(c,R,m,this)},this)},this)};function np(a,c){Ir(a);let f=[];if(typeof c=="string")tp(a,c)&&(f=f.concat(a.g.get(oi(a,c))));else for(a=Array.from(a.g.values()),c=0;c<a.length;c++)f=f.concat(a[c]);return f}t.set=function(a,c){return Ir(this),this.i=null,a=oi(this,a),tp(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=np(this,a),a.length>0?String(a[0]):c):c};function rp(a,c,f){ep(a,c),f.length>0&&(a.i=null,a.g.set(oi(a,c),C(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(let m=0;m<c.length;m++){var f=c[m];const R=ls(f);f=np(this,f);for(let N=0;N<f.length;N++){let U=R;f[N]!==""&&(U+="="+ls(f[N])),a.push(U)}}return this.i=a.join("&")};function ip(a){const c=new ps;return c.i=a.i,a.g&&(c.g=new Map(a.g),c.h=a.h),c}function oi(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function pE(a,c){c&&!a.j&&(Ir(a),a.i=null,a.g.forEach(function(f,m){const R=m.toLowerCase();m!=R&&(ep(this,m),rp(this,R,f))},a)),a.j=c}function mE(a,c){const f=new as;if(o.Image){const m=new Image;m.onload=p(Mn,f,"TestLoadImage: loaded",!0,c,m),m.onerror=p(Mn,f,"TestLoadImage: error",!1,c,m),m.onabort=p(Mn,f,"TestLoadImage: abort",!1,c,m),m.ontimeout=p(Mn,f,"TestLoadImage: timeout",!1,c,m),o.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function gE(a,c){const f=new as,m=new AbortController,R=setTimeout(()=>{m.abort(),Mn(f,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(N=>{clearTimeout(R),N.ok?Mn(f,"TestPingServer: ok",!0,c):Mn(f,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(R),Mn(f,"TestPingServer: error",!1,c)})}function Mn(a,c,f,m,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),m(f)}catch{}}function yE(){this.g=new Zw}function Pu(a){this.i=a.Sb||null,this.h=a.ab||!1}g(Pu,Of),Pu.prototype.g=function(){return new Ko(this.i,this.h)};function Ko(a,c){We.call(this),this.H=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ko,We),t=Ko.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=a,this.D=c,this.readyState=1,gs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const c={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};a&&(c.body=a),(this.H||o).fetch(new Request(this.D,c)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ms(this)),this.readyState=0},t.Pa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gs(this)),this.g&&(this.readyState=3,gs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;sp(this)}else a.text().then(this.Oa.bind(this),this.ga.bind(this))};function sp(a){a.j.read().then(a.Ma.bind(a)).catch(a.ga.bind(a))}t.Ma=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.B.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?ms(this):gs(this),this.readyState==3&&sp(this)}},t.Oa=function(a){this.g&&(this.response=this.responseText=a,ms(this))},t.Na=function(a){this.g&&(this.response=a,ms(this))},t.ga=function(){this.g&&ms(this)};function ms(a){a.readyState=4,a.l=null,a.j=null,a.B=null,gs(a)}t.setRequestHeader=function(a,c){this.A.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var f=c.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=c.next();return a.join(`\r
`)};function gs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Ko.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function op(a){let c="";return G(a,function(f,m){c+=m,c+=":",c+=f,c+=`\r
`}),c}function bu(a,c,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=op(f),typeof a=="string"?f!=null&&ls(f):ae(a,c,f))}function ve(a){We.call(this),this.headers=new Map,this.L=a||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(ve,We);var vE=/^https?$/i,_E=["POST","PUT"];t=ve.prototype,t.Fa=function(a){this.H=a},t.ea=function(a,c,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():zf.g(),this.g.onreadystatechange=w(h(this.Ca,this));try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(N){ap(this,N);return}if(a=f||"",f=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var R in m)f.set(R,m[R]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const N of m.keys())f.set(N,m.get(N));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),R=o.FormData&&a instanceof o.FormData,!(Array.prototype.indexOf.call(_E,c,void 0)>=0)||m||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of f)this.g.setRequestHeader(N,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(a),this.v=!1}catch(N){ap(this,N)}};function ap(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.o=5,lp(a),Qo(a)}function lp(a){a.A||(a.A=!0,tt(a,"complete"),tt(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=a||7,tt(this,"complete"),tt(this,"abort"),Qo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Qo(this,!0)),ve.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?up(this):this.Xa())},t.Xa=function(){up(this)};function up(a){if(a.h&&typeof s<"u"){if(a.v&&jn(a)==4)setTimeout(a.Ca.bind(a),0);else if(tt(a,"readystatechange"),jn(a)==4){a.h=!1;try{const N=a.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var f;if(!(f=c)){var m;if(m=N===0){let U=String(a.D).match(Xf)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),m=!vE.test(U?U.toLowerCase():"")}f=m}if(f)tt(a,"complete"),tt(a,"success");else{a.o=6;try{var R=jn(a)>2?a.g.statusText:""}catch{R=""}a.l=R+" ["+a.ca()+"]",lp(a)}}finally{Qo(a)}}}}function Qo(a,c){if(a.g){a.m&&(clearTimeout(a.m),a.m=null);const f=a.g;a.g=null,c||tt(a,"ready");try{f.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function jn(a){return a.g?a.g.readyState:0}t.ca=function(){try{return jn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),Xw(c)}};function cp(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.F){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function wE(a){const c={};a=(a.g&&jn(a)>=2&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(S(a[m]))continue;var f=iE(a[m]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=c[R]||[];c[R]=N,N.push(f)}K(c,function(m){return m.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function ys(a,c,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||c}function dp(a){this.za=0,this.i=[],this.j=new as,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=ys("failFast",!1,a),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=ys("baseRetryDelayMs",5e3,a),this.Za=ys("retryDelaySeedMs",1e4,a),this.Ta=ys("forwardChannelMaxRetries",2,a),this.va=ys("forwardChannelRequestTimeoutMs",2e4,a),this.ma=a&&a.xmlHttpFactory||void 0,this.Ua=a&&a.Rb||void 0,this.Aa=a&&a.useFetchStreams||!1,this.O=void 0,this.L=a&&a.supportsCrossDomainXhr||!1,this.M="",this.h=new Gf(a&&a.concurrentRequestLimit),this.Ba=new yE,this.S=a&&a.fastHandshake||!1,this.R=a&&a.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=a&&a.Pb||!1,a&&a.ua&&this.j.ua(),a&&a.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&a&&a.detectBufferingProxy||!1,this.ia=void 0,a&&a.longPollingTimeout&&a.longPollingTimeout>0&&(this.ia=a.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=dp.prototype,t.ka=8,t.I=1,t.connect=function(a,c,f,m){nt(0),this.W=a,this.H=c||{},f&&m!==void 0&&(this.H.OSID=f,this.H.OAID=m),this.F=this.X,this.J=wp(this,null,this.W),Jo(this)};function Nu(a){if(hp(a),a.I==3){var c=a.V++,f=Jt(a.J);if(ae(f,"SID",a.M),ae(f,"RID",c),ae(f,"TYPE","terminate"),vs(a,f),c=new Dn(a,a.j,c),c.M=2,c.A=Go(Jt(f)),f=!1,o.navigator&&o.navigator.sendBeacon)try{f=o.navigator.sendBeacon(c.A.toString(),"")}catch{}!f&&o.Image&&(new Image().src=c.A,f=!0),f||(c.g=Ep(c.j,null),c.g.ea(c.A)),c.F=Date.now(),qo(c)}_p(a)}function Yo(a){a.g&&(Ou(a),a.g.cancel(),a.g=null)}function hp(a){Yo(a),a.v&&(o.clearTimeout(a.v),a.v=null),Xo(a),a.h.cancel(),a.m&&(typeof a.m=="number"&&o.clearTimeout(a.m),a.m=null)}function Jo(a){if(!Kf(a.h)&&!a.m){a.m=!0;var c=a.Ea;M||y(),j||(M(),j=!0),T.add(c,a),a.D=0}}function EE(a,c){return Qf(a.h)>=a.h.j-(a.m?1:0)?!1:a.m?(a.i=c.G.concat(a.i),!0):a.I==1||a.I==2||a.D>=(a.Sa?0:a.Ta)?!1:(a.m=os(h(a.Ea,a,c),vp(a,a.D)),a.D++,!0)}t.Ea=function(a){if(this.m)if(this.m=null,this.I==1){if(!a){this.V=Math.floor(Math.random()*1e5),a=this.V++;const R=new Dn(this,this.j,a);let N=this.o;if(this.U&&(N?(N=ce(N),_r(N,this.U)):N=this.U),this.u!==null||this.R||(R.J=N,N=null),this.S)e:{for(var c=0,f=0;f<this.i.length;f++){t:{var m=this.i[f];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,c>4096){c=f;break e}if(c===4096||f===this.i.length-1){c=f+1;break e}}c=1e3}else c=1e3;c=pp(this,R,c),f=Jt(this.J),ae(f,"RID",a),ae(f,"CVER",22),this.G&&ae(f,"X-HTTP-Session-Id",this.G),vs(this,f),N&&(this.R?c="headers="+ls(op(N))+"&"+c:this.u&&bu(f,this.u,N)),Cu(this.h,R),this.Ra&&ae(f,"TYPE","init"),this.S?(ae(f,"$req",c),ae(f,"SID","null"),R.U=!0,Su(R,f,null)):Su(R,f,c),this.I=2}}else this.I==3&&(a?fp(this,a):this.i.length==0||Kf(this.h)||fp(this))};function fp(a,c){var f;c?f=c.l:f=a.V++;const m=Jt(a.J);ae(m,"SID",a.M),ae(m,"RID",f),ae(m,"AID",a.K),vs(a,m),a.u&&a.o&&bu(m,a.u,a.o),f=new Dn(a,a.j,f,a.D+1),a.u===null&&(f.J=a.o),c&&(a.i=c.G.concat(a.i)),c=pp(a,f,1e3),f.H=Math.round(a.va*.5)+Math.round(a.va*.5*Math.random()),Cu(a.h,f),Su(f,m,c)}function vs(a,c){a.H&&G(a.H,function(f,m){ae(c,m,f)}),a.l&&G({},function(f,m){ae(c,m,f)})}function pp(a,c,f){f=Math.min(a.i.length,f);const m=a.l?h(a.l.Ka,a.l,a):null;e:{var R=a.i;let Q=-1;for(;;){const Ae=["count="+f];Q==-1?f>0?(Q=R[0].g,Ae.push("ofs="+Q)):Q=0:Ae.push("ofs="+Q);let ie=!0;for(let Pe=0;Pe<f;Pe++){var N=R[Pe].g;const Xt=R[Pe].map;if(N-=Q,N<0)Q=Math.max(0,R[Pe].g-100),ie=!1;else try{N="req"+N+"_"||"";try{var U=Xt instanceof Map?Xt:Object.entries(Xt);for(const[xr,Ln]of U){let Vn=Ln;l(Ln)&&(Vn=_u(Ln)),Ae.push(N+xr+"="+encodeURIComponent(Vn))}}catch(xr){throw Ae.push(N+"type="+encodeURIComponent("_badmap")),xr}}catch{m&&m(Xt)}}if(ie){U=Ae.join("&");break e}}U=void 0}return a=a.i.splice(0,f),c.G=a,U}function mp(a){if(!a.g&&!a.v){a.Y=1;var c=a.Da;M||y(),j||(M(),j=!0),T.add(c,a),a.A=0}}function Du(a){return a.g||a.v||a.A>=3?!1:(a.Y++,a.v=os(h(a.Da,a),vp(a,a.A)),a.A++,!0)}t.Da=function(){if(this.v=null,gp(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var a=4*this.T;this.j.info("BP detection timer enabled: "+a),this.B=os(h(this.Wa,this),a)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,nt(10),Yo(this),gp(this))};function Ou(a){a.B!=null&&(o.clearTimeout(a.B),a.B=null)}function gp(a){a.g=new Dn(a,a.j,"rpc",a.Y),a.u===null&&(a.g.J=a.o),a.g.P=0;var c=Jt(a.na);ae(c,"RID","rpc"),ae(c,"SID",a.M),ae(c,"AID",a.K),ae(c,"CI",a.F?"0":"1"),!a.F&&a.ia&&ae(c,"TO",a.ia),ae(c,"TYPE","xmlhttp"),vs(a,c),a.u&&a.o&&bu(c,a.u,a.o),a.O&&(a.g.H=a.O);var f=a.g;a=a.ba,f.M=1,f.A=Go(Jt(c)),f.u=null,f.R=!0,Wf(f,a)}t.Va=function(){this.C!=null&&(this.C=null,Yo(this),Du(this),nt(19))};function Xo(a){a.C!=null&&(o.clearTimeout(a.C),a.C=null)}function yp(a,c){var f=null;if(a.g==c){Xo(a),Ou(a),a.g=null;var m=2}else if(Au(a.h,c))f=c.G,Yf(a.h,c),m=1;else return;if(a.I!=0){if(c.o)if(m==1){f=c.u?c.u.length:0,c=Date.now()-c.F;var R=a.D;m=Wo(),tt(m,new Ff(m,f)),Jo(a)}else mp(a);else if(R=c.m,R==3||R==0&&c.X>0||!(m==1&&EE(a,c)||m==2&&Du(a)))switch(f&&f.length>0&&(c=a.h,c.i=c.i.concat(f)),R){case 1:Sr(a,5);break;case 4:Sr(a,10);break;case 3:Sr(a,6);break;default:Sr(a,2)}}}function vp(a,c){let f=a.Qa+Math.floor(Math.random()*a.Za);return a.isActive()||(f*=2),f*c}function Sr(a,c){if(a.j.info("Error code "+c),c==2){var f=h(a.bb,a),m=a.Ua;const R=!m;m=new On(m||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||cs(m,"https"),Go(m),R?mE(m.toString(),f):gE(m.toString(),f)}else nt(2);a.I=0,a.l&&a.l.pa(c),_p(a),hp(a)}t.bb=function(a){a?(this.j.info("Successfully pinged google.com"),nt(2)):(this.j.info("Failed to ping google.com"),nt(1))};function _p(a){if(a.I=0,a.ja=[],a.l){const c=Jf(a.h);(c.length!=0||a.i.length!=0)&&(P(a.ja,c),P(a.ja,a.i),a.h.i.length=0,C(a.i),a.i.length=0),a.l.oa()}}function wp(a,c,f){var m=f instanceof On?Jt(f):new On(f);if(m.g!="")c&&(m.g=c+"."+m.g),ds(m,m.u);else{var R=o.location;m=R.protocol,c=c?c+"."+R.hostname:R.hostname,R=+R.port;const N=new On(null);m&&cs(N,m),c&&(N.g=c),R&&ds(N,R),f&&(N.h=f),m=N}return f=a.G,c=a.wa,f&&c&&ae(m,f,c),ae(m,"VER",a.ka),vs(a,m),m}function Ep(a,c,f){if(c&&!a.L)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Aa&&!a.ma?new ve(new Pu({ab:f})):new ve(a.ma),c.Fa(a.L),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tp(){}t=Tp.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function Zo(){}Zo.prototype.g=function(a,c){return new gt(a,c)};function gt(a,c){We.call(this),this.g=new dp(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.sa&&(a?a["X-WebChannel-Client-Profile"]=c.sa:a={"X-WebChannel-Client-Profile":c.sa}),this.g.U=a,(a=c&&c.Qb)&&!S(a)&&(this.g.u=a),this.A=c&&c.supportsCrossDomainXhr||!1,this.v=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!S(c)&&(this.g.G=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new ai(this)}g(gt,We),gt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},gt.prototype.close=function(){Nu(this.g)},gt.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.v&&(f={},f.__data__=_u(a),a=f);c.i.push(new aE(c.Ya++,a)),c.I==3&&Jo(c)},gt.prototype.N=function(){this.g.l=null,delete this.j,Nu(this.g),delete this.g,gt.Z.N.call(this)};function Ip(a){wu.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const f in c){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}g(Ip,wu);function Sp(){Eu.call(this),this.status=1}g(Sp,Eu);function ai(a){this.g=a}g(ai,Tp),ai.prototype.ra=function(){tt(this.g,"a")},ai.prototype.qa=function(a){tt(this.g,new Ip(a))},ai.prototype.pa=function(a){tt(this.g,new Sp)},ai.prototype.oa=function(){tt(this.g,"b")},Zo.prototype.createWebChannel=Zo.prototype.g,gt.prototype.send=gt.prototype.o,gt.prototype.open=gt.prototype.m,gt.prototype.close=gt.prototype.close,T0=function(){return new Zo},E0=function(){return Wo()},w0=Er,Sd={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ho.NO_ERROR=0,Ho.TIMEOUT=8,Ho.HTTP_ERROR=6,Ba=Ho,Uf.COMPLETE="complete",_0=Uf,Mf.EventType=is,is.OPEN="a",is.CLOSE="b",is.ERROR="c",is.MESSAGE="d",We.prototype.listen=We.prototype.J,Ms=Mf,ve.prototype.listenOnce=ve.prototype.K,ve.prototype.getLastError=ve.prototype.Ha,ve.prototype.getLastErrorCode=ve.prototype.ya,ve.prototype.getStatus=ve.prototype.ca,ve.prototype.getResponseJson=ve.prototype.La,ve.prototype.getResponseText=ve.prototype.la,ve.prototype.send=ve.prototype.ea,ve.prototype.setWithCredentials=ve.prototype.Fa,v0=ve}).apply(typeof _a<"u"?_a:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class Ke{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ke.UNAUTHENTICATED=new Ke(null),Ke.GOOGLE_CREDENTIALS=new Ke("google-credentials-uid"),Ke.FIRST_PARTY=new Ke("first-party-uid"),Ke.MOCK_USER=new Ke("mock-user");/**
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
 */let es="12.13.0";function cA(t){es=t}/**
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
 */const qr=new tu("@firebase/firestore");function ui(){return qr.logLevel}function W(t,...e){if(qr.logLevel<=Z.DEBUG){const n=e.map(Wh);qr.debug(`Firestore (${es}): ${t}`,...n)}}function Gr(t,...e){if(qr.logLevel<=Z.ERROR){const n=e.map(Wh);qr.error(`Firestore (${es}): ${t}`,...n)}}function vo(t,...e){if(qr.logLevel<=Z.WARN){const n=e.map(Wh);qr.warn(`Firestore (${es}): ${t}`,...n)}}function Wh(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,I0(t,r,n)}function I0(t,e,n){let r=`FIRESTORE (${es}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Gr(r),new Error(r)}function we(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||I0(e,i,r)}function oe(t,e){return t}/**
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
 */const L={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class H extends Yt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class jr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class S0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ke.UNAUTHENTICATED))}shutdown(){}}class hA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class fA{constructor(e){this.t=e,this.currentUser=Ke.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){we(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new jr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new jr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{W("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):(W("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new jr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(W("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(we(typeof r.accessToken=="string",31837,{l:r}),new S0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return we(e===null||typeof e=="string",2055,{h:e}),new Ke(e)}}class pA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=Ke.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class mA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new pA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(Ke.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class dg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class gA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,At(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){we(this.o===void 0,3512);const r=s=>{s.error!=null&&W("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,W("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{W("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):W("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new dg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(we(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new dg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function yA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Hh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=yA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function xd(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return mc(i)===mc(s)?ne(i,s):mc(i)?1:-1}return ne(t.length,e.length)}const vA=55296,_A=57343;function mc(t){const e=t.charCodeAt(0);return e>=vA&&e<=_A}function Hi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const hg="__name__";class tn{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return tn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof tn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=tn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=tn.isNumericId(e),i=tn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?tn.extractNumericId(e).compare(tn.extractNumericId(n)):xd(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $h.fromString(e.substring(4,e.length-2))}}class Ie extends tn{construct(e,n,r){return new Ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new H(L.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ie(n)}static emptyPath(){return new Ie([])}}const wA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ve extends tn{construct(e,n,r){return new Ve(e,n,r)}static isValidIdentifier(e){return wA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ve.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===hg}static keyField(){return new Ve([hg])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new H(L.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new H(L.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new H(L.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new H(L.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ve(n)}static emptyPath(){return new Ve([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Ie.fromString(e))}static fromName(e){return new Y(Ie.fromString(e).popFirst(5))}static empty(){return new Y(Ie.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Ie(e.slice()))}}/**
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
 */function EA(t,e,n){if(!n)throw new H(L.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function TA(t,e,n,r){if(e===!0&&r===!0)throw new H(L.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fg(t){if(!Y.isDocumentKey(t))throw new H(L.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function x0(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function qh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function kd(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new H(L.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=qh(t);throw new H(L.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function ke(t,e){const n={typeString:t};return e&&(n.value=e),n}function Lo(t,e){if(!x0(t))throw new H(L.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new H(L.INVALID_ARGUMENT,n);return!0}/**
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
 */const pg=-62135596800,mg=1e6;class fe{static now(){return fe.fromMillis(Date.now())}static fromDate(e){return fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*mg);return new fe(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new H(L.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<pg)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new H(L.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/mg}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:fe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Lo(e,fe._jsonSchema))return new fe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-pg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}fe._jsonSchemaVersion="firestore/timestamp/1.0",fe._jsonSchema={type:ke("string",fe._jsonSchemaVersion),seconds:ke("number"),nanoseconds:ke("number")};/**
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
 */class de{static fromTimestamp(e){return new de(e)}static min(){return new de(new fe(0,0))}static max(){return new de(new fe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const _o=-1;function IA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=de.fromTimestamp(r===1e9?new fe(n+1,0):new fe(n,r));return new cr(i,Y.empty(),e)}function SA(t){return new cr(t.readTime,t.key,_o)}class cr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new cr(de.min(),Y.empty(),_o)}static max(){return new cr(de.max(),Y.empty(),_o)}}function xA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Y.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const kA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Gh(t){if(t.code!==L.FAILED_PRECONDITION||t.message!==kA)throw t;W("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class O{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new O((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof O?n:O.resolve(n)}catch(n){return O.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):O.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):O.reject(n)}static resolve(e){return new O((n,r)=>{n(e)})}static reject(e){return new O((n,r)=>{r(e)})}static waitFor(e){return new O((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=O.resolve(!1);for(const r of e)n=n.next(i=>i?O.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new O((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(p=>{o[h]=p,++l,l===s&&r(o)},p=>i(p))}})}static doWhile(e,n){return new O((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function CA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Vo(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Kh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Kh.ce=-1;/**
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
 */const Qh=-1;function Yh(t){return t==null}function xl(t){return t===0&&1/t==-1/0}function RA(t){return typeof t=="number"&&Number.isInteger(t)&&!xl(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const k0="";function PA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=gg(e)),e=bA(t.get(n),e);return gg(e)}function bA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case k0:n+="";break;default:n+=s}}return n}function gg(t){return t+k0+""}/**
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
 */function yg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ts(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function A0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class pt{constructor(e,n){this.comparator=e,this.root=n||je.EMPTY}insert(e,n){return new pt(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,je.BLACK,null,null))}remove(e){return new pt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wa(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wa(this.root,e,this.comparator,!1)}getReverseIterator(){return new wa(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wa(this.root,e,this.comparator,!0)}}class wa{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class je{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??je.RED,this.left=i??je.EMPTY,this.right=s??je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new je(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return je.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}je.EMPTY=null,je.RED=!0,je.BLACK=!1;je.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ue{constructor(e){this.comparator=e,this.data=new pt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new vg(this.data.getIterator())}getIteratorFrom(e){return new vg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ue)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ue(this.comparator);return n.data=e,n}}class vg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(Ve.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new Ue(Ve.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Hi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class NA extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class cn{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new NA("Invalid base64 string: "+s):s}}(e);return new cn(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new cn(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}cn.EMPTY_BYTE_STRING=new cn("");const DA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Kr(t){if(we(!!t,39018),typeof t=="string"){let e=0;const n=DA.exec(t);if(we(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(t.seconds),nanos:Le(t.nanos)}}function Le(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qi(t){return typeof t=="string"?cn.fromBase64String(t):cn.fromUint8Array(t)}/**
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
 */const C0="server_timestamp",R0="__type__",P0="__previous_value__",b0="__local_write_time__";function Jh(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[R0])==null?void 0:r.stringValue)===C0}function Xh(t){const e=t.mapValue.fields[P0];return Jh(e)?Xh(e):e}function kl(t){const e=Kr(t.mapValue.fields[b0].timestampValue);return new fe(e.seconds,e.nanos)}/**
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
 */class OA{constructor(e,n,r,i,s,o,l,u,h,p,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=p,this.apiKey=g}}const Al="(default)";class Cl{constructor(e,n){this.projectId=e,this.database=n||Al}static empty(){return new Cl("","")}get isDefaultDatabase(){return this.database===Al}isEqual(e){return e instanceof Cl&&e.projectId===this.projectId&&e.database===this.database}}function MA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new H(L.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Cl(t.options.projectId,e)}/**
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
 */const N0="__type__",jA="__max__",Ea={mapValue:{}},D0="__vector__",Ad="value";function Qr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jh(t)?4:VA(t)?9007199254740991:LA(t)?10:11:J(28295,{value:t})}function dn(t,e){if(t===e)return!0;const n=Qr(t);if(n!==Qr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return kl(t).isEqual(kl(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Kr(i.timestampValue),l=Kr(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qi(i.bytesValue).isEqual(qi(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Le(i.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(i.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Le(i.integerValue)===Le(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Le(i.doubleValue),l=Le(s.doubleValue);return o===l?xl(o)===xl(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return Hi(t.arrayValue.values||[],e.arrayValue.values||[],dn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(yg(o)!==yg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!dn(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function wo(t,e){return(t.values||[]).find(n=>dn(n,e))!==void 0}function Gi(t,e){if(t===e)return 0;const n=Qr(t),r=Qr(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=Le(s.integerValue||s.doubleValue),u=Le(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return _g(t.timestampValue,e.timestampValue);case 4:return _g(kl(t),kl(e));case 5:return xd(t.stringValue,e.stringValue);case 6:return function(s,o){const l=qi(s),u=qi(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const p=ne(l[h],u[h]);if(p!==0)return p}return ne(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=ne(Le(s.latitude),Le(o.latitude));return l!==0?l:ne(Le(s.longitude),Le(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return wg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var w,C,P,D;const l=s.fields||{},u=o.fields||{},h=(w=l[Ad])==null?void 0:w.arrayValue,p=(C=u[Ad])==null?void 0:C.arrayValue,g=ne(((P=h==null?void 0:h.values)==null?void 0:P.length)||0,((D=p==null?void 0:p.values)==null?void 0:D.length)||0);return g!==0?g:wg(h,p)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===Ea.mapValue&&o===Ea.mapValue)return 0;if(s===Ea.mapValue)return 1;if(o===Ea.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},p=Object.keys(h);u.sort(),p.sort();for(let g=0;g<u.length&&g<p.length;++g){const w=xd(u[g],p[g]);if(w!==0)return w;const C=Gi(l[u[g]],h[p[g]]);if(C!==0)return C}return ne(u.length,p.length)}(t.mapValue,e.mapValue);default:throw J(23264,{he:n})}}function _g(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=Kr(t),r=Kr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function wg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Gi(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function Ki(t){return Cd(t)}function Cd(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qi(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Y.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=Cd(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${Cd(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function $a(t){switch(Qr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Xh(t);return e?16+$a(e):16;case 5:return 2*t.stringValue.length;case 6:return qi(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+$a(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return ts(r.fields,(s,o)=>{i+=s.length+$a(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function Rd(t){return!!t&&"integerValue"in t}function Zh(t){return!!t&&"arrayValue"in t}function Wa(t){return!!t&&"mapValue"in t}function LA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[N0])==null?void 0:r.stringValue)===D0}function qs(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return ts(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=qs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=qs(t.arrayValue.values[n]);return e}return{...t}}function VA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===jA}/**
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
 */class zt{constructor(e){this.value=e}static empty(){return new zt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Wa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(n)}setAll(e){let n=Ve.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=qs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Wa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return dn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Wa(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ts(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new zt(qs(this.value))}}function O0(t){const e=[];return ts(t.fields,(n,r)=>{const i=new Ve([n]);if(Wa(r)){const s=O0(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Wt(e)}/**
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
 */class Ut{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new Ut(e,0,de.min(),de.min(),de.min(),zt.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,de.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,de.min(),de.min(),zt.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,de.min(),de.min(),zt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(de.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=zt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=zt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=de.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Rl{constructor(e,n){this.position=e,this.inclusive=n}}function Eg(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Y.comparator(Y.fromName(o.referenceValue),n.key):r=Gi(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Tg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!dn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Pl{constructor(e,n="asc"){this.field=e,this.dir=n}}function FA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class M0{}class De extends M0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new zA(e,n,r):n==="array-contains"?new WA(e,r):n==="in"?new HA(e,r):n==="not-in"?new qA(e,r):n==="array-contains-any"?new GA(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new BA(e,r):new $A(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Gi(n,this.value)):n!==null&&Qr(this.value)===Qr(n)&&this.matchesComparison(Gi(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dr extends M0{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new dr(e,n)}matches(e){return j0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function j0(t){return t.op==="and"}function L0(t){return UA(t)&&j0(t)}function UA(t){for(const e of t.filters)if(e instanceof dr)return!1;return!0}function Pd(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+Ki(t.value);if(L0(t))return t.filters.map(e=>Pd(e)).join(",");{const e=t.filters.map(n=>Pd(n)).join(",");return`${t.op}(${e})`}}function V0(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&dn(r.value,i.value)}(t,e):t instanceof dr?function(r,i){return i instanceof dr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&V0(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function F0(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${Ki(n.value)}`}(t):t instanceof dr?function(n){return n.op.toString()+" {"+n.getFilters().map(F0).join(" ,")+"}"}(t):"Filter"}class zA extends De{constructor(e,n,r){super(e,n,r),this.key=Y.fromName(r.referenceValue)}matches(e){const n=Y.comparator(e.key,this.key);return this.matchesComparison(n)}}class BA extends De{constructor(e,n){super(e,"in",n),this.keys=U0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class $A extends De{constructor(e,n){super(e,"not-in",n),this.keys=U0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function U0(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>Y.fromName(r.referenceValue))}class WA extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Zh(n)&&wo(n.arrayValue,this.value)}}class HA extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wo(this.value.arrayValue,n)}}class qA extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(wo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!wo(this.value.arrayValue,n)}}class GA extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Zh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wo(this.value.arrayValue,r))}}/**
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
 */class KA{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Te=null}}function Ig(t,e=null,n=[],r=[],i=null,s=null,o=null){return new KA(t,e,n,r,i,s,o)}function ef(t){const e=oe(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Pd(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Yh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ki(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ki(r)).join(",")),e.Te=n}return e.Te}function tf(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!FA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Tg(t.startAt,e.startAt)&&Tg(t.endAt,e.endAt)}/**
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
 */class su{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function QA(t,e,n,r,i,s,o,l){return new su(t,e,n,r,i,s,o,l)}function YA(t){return new su(t)}function Sg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function JA(t){return Y.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function XA(t){return t.collectionGroup!==null}function Gs(t){const e=oe(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ue(Ve.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new Pl(s,r))}),n.has(Ve.keyField().canonicalString())||e.Ie.push(new Pl(Ve.keyField(),r))}return e.Ie}function Lr(t){const e=oe(t);return e.Ee||(e.Ee=ZA(e,Gs(t))),e.Ee}function ZA(t,e){if(t.limitType==="F")return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Pl(i.field,s)});const n=t.endAt?new Rl(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rl(t.startAt.position,t.startAt.inclusive):null;return Ig(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function bd(t,e,n){return new su(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function z0(t,e){return tf(Lr(t),Lr(e))&&t.limitType===e.limitType}function B0(t){return`${ef(Lr(t))}|lt:${t.limitType}`}function As(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>F0(i)).join(", ")}]`),Yh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ki(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ki(i)).join(",")),`Target(${r})`}(Lr(t))}; limitType=${t.limitType})`}function nf(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Y.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Gs(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Gs(r),i)||r.endAt&&!function(o,l,u){const h=Eg(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Gs(r),i))}(t,e)}function e2(t){return(e,n)=>{let r=!1;for(const i of Gs(t)){const s=t2(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function t2(t,e,n){const r=t.field.isKeyField()?Y.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Gi(u,h):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
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
 */class ri{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ts(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return A0(this.inner)}size(){return this.innerSize}}/**
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
 */const n2=new pt(Y.comparator);function bl(){return n2}const $0=new pt(Y.comparator);function Ta(...t){let e=$0;for(const n of t)e=e.insert(n.key,n);return e}function W0(t){let e=$0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Nr(){return Ks()}function H0(){return Ks()}function Ks(){return new ri(t=>t.toString(),(t,e)=>t.isEqual(e))}const r2=new pt(Y.comparator),i2=new Ue(Y.comparator);function Ye(...t){let e=i2;for(const n of t)e=e.add(n);return e}const s2=new Ue(ne);function o2(){return s2}/**
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
 */function rf(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xl(e)?"-0":e}}function q0(t){return{integerValue:""+t}}function a2(t,e){return RA(e)?q0(e):rf(t,e)}/**
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
 */class ou{constructor(){this._=void 0}}function l2(t,e,n){return t instanceof Eo?function(i,s){const o={fields:{[R0]:{stringValue:C0},[b0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jh(s)&&(s=Xh(s)),s&&(o.fields[P0]=s),{mapValue:o}}(n,e):t instanceof To?K0(t,e):t instanceof Io?Q0(t,e):function(i,s){const o=G0(i,s),l=xg(o)+xg(i.Ae);return Rd(o)&&Rd(i.Ae)?q0(l):rf(i.serializer,l)}(t,e)}function u2(t,e,n){return t instanceof To?K0(t,e):t instanceof Io?Q0(t,e):n}function G0(t,e){return t instanceof Nl?function(r){return Rd(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class Eo extends ou{}class To extends ou{constructor(e){super(),this.elements=e}}function K0(t,e){const n=Y0(e);for(const r of t.elements)n.some(i=>dn(i,r))||n.push(r);return{arrayValue:{values:n}}}class Io extends ou{constructor(e){super(),this.elements=e}}function Q0(t,e){let n=Y0(e);for(const r of t.elements)n=n.filter(i=>!dn(i,r));return{arrayValue:{values:n}}}class Nl extends ou{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function xg(t){return Le(t.integerValue||t.doubleValue)}function Y0(t){return Zh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class c2{constructor(e,n){this.field=e,this.transform=n}}function d2(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof To&&i instanceof To||r instanceof Io&&i instanceof Io?Hi(r.elements,i.elements,dn):r instanceof Nl&&i instanceof Nl?dn(r.Ae,i.Ae):r instanceof Eo&&i instanceof Eo}(t.transform,e.transform)}class h2{constructor(e,n){this.version=e,this.transformResults=n}}class En{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new En}static exists(e){return new En(void 0,e)}static updateTime(e){return new En(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ha(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class au{}function J0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Z0(t.key,En.none()):new Fo(t.key,t.data,En.none());{const n=t.data,r=zt.empty();let i=new Ue(Ve.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new ii(t.key,r,new Wt(i.toArray()),En.none())}}function f2(t,e,n){t instanceof Fo?function(i,s,o){const l=i.value.clone(),u=Ag(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof ii?function(i,s,o){if(!Ha(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Ag(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(X0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Qs(t,e,n,r){return t instanceof Fo?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=s.value.clone(),p=Cg(s.fieldTransforms,u,o);return h.setAll(p),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof ii?function(s,o,l,u){if(!Ha(s.precondition,o))return l;const h=Cg(s.fieldTransforms,u,o),p=o.data;return p.setAll(X0(s)),p.setAll(h),o.convertToFoundDocument(o.version,p).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,l){return Ha(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function p2(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=G0(r.transform,i||null);s!=null&&(n===null&&(n=zt.empty()),n.set(r.field,s))}return n||null}function kg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Hi(r,i,(s,o)=>d2(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fo extends au{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ii extends au{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function X0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Ag(t,e,n){const r=new Map;we(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,u2(o,l,n[i]))}return r}function Cg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,l2(s,o,e))}return r}class Z0 extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class m2 extends au{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class g2{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&f2(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Qs(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=H0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=J0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(de.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Ye())}isEqual(e){return this.batchId===e.batchId&&Hi(this.mutations,e.mutations,(n,r)=>kg(n,r))&&Hi(this.baseMutations,e.baseMutations,(n,r)=>kg(n,r))}}class sf{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){we(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return r2}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sf(e,n,r,i)}}/**
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
 */class y2{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */var Se,ee;function v2(t){switch(t){case L.OK:return J(64938);case L.CANCELLED:case L.UNKNOWN:case L.DEADLINE_EXCEEDED:case L.RESOURCE_EXHAUSTED:case L.INTERNAL:case L.UNAVAILABLE:case L.UNAUTHENTICATED:return!1;case L.INVALID_ARGUMENT:case L.NOT_FOUND:case L.ALREADY_EXISTS:case L.PERMISSION_DENIED:case L.FAILED_PRECONDITION:case L.ABORTED:case L.OUT_OF_RANGE:case L.UNIMPLEMENTED:case L.DATA_LOSS:return!0;default:return J(15467,{code:t})}}function _2(t){if(t===void 0)return Gr("GRPC error has no .code"),L.UNKNOWN;switch(t){case Se.OK:return L.OK;case Se.CANCELLED:return L.CANCELLED;case Se.UNKNOWN:return L.UNKNOWN;case Se.DEADLINE_EXCEEDED:return L.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return L.RESOURCE_EXHAUSTED;case Se.INTERNAL:return L.INTERNAL;case Se.UNAVAILABLE:return L.UNAVAILABLE;case Se.UNAUTHENTICATED:return L.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return L.INVALID_ARGUMENT;case Se.NOT_FOUND:return L.NOT_FOUND;case Se.ALREADY_EXISTS:return L.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return L.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return L.FAILED_PRECONDITION;case Se.ABORTED:return L.ABORTED;case Se.OUT_OF_RANGE:return L.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return L.UNIMPLEMENTED;case Se.DATA_LOSS:return L.DATA_LOSS;default:return J(39323,{code:t})}}(ee=Se||(Se={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new $h([4294967295,4294967295],0);class w2{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Nd(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function E2(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function T2(t,e){return Nd(t,e.toTimestamp())}function Di(t){return we(!!t,49232),de.fromTimestamp(function(n){const r=Kr(n);return new fe(r.seconds,r.nanos)}(t))}function ew(t,e){return Dd(t,e).canonicalString()}function Dd(t,e){const n=function(i){return new Ie(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function I2(t){const e=Ie.fromString(t);return we(b2(e),10190,{key:e.toString()}),e}function Od(t,e){return ew(t.databaseId,e.path)}function S2(t){const e=I2(t);return e.length===4?Ie.emptyPath():k2(e)}function x2(t){return new Ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function k2(t){return we(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Rg(t,e,n){return{name:Od(t,e),fields:n.value.mapValue.fields}}function A2(t,e){let n;if(e instanceof Fo)n={update:Rg(t,e.key,e.value)};else if(e instanceof Z0)n={delete:Od(t,e.key)};else if(e instanceof ii)n={update:Rg(t,e.key,e.data),updateMask:P2(e.fieldMask)};else{if(!(e instanceof m2))return J(16599,{dt:e.type});n={verify:Od(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const l=o.transform;if(l instanceof Eo)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof To)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof Io)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Nl)return{fieldPath:o.field.canonicalString(),increment:l.Ae};throw J(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:T2(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:J(27497)}(t,e.precondition)),n}function C2(t,e){return t&&t.length>0?(we(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?Di(i.updateTime):Di(s);return o.isEqual(de.min())&&(o=Di(s)),new h2(o,i.transformResults||[])}(n,e))):[]}function R2(t){let e=S2(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){we(r===1,65062);const p=n.from[0];p.allDescendants?i=p.collectionId:e=e.child(p.collectionId)}let s=[];n.where&&(s=function(g){const w=tw(g);return w instanceof dr&&L0(w)?w.getFilters():[w]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(w=>function(P){return new Pl(ci(P.field),function(F){switch(F){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(P.direction))}(w))}(n.orderBy));let l=null;n.limit&&(l=function(g){let w;return w=typeof g=="object"?g.value:g,Yh(w)?null:w}(n.limit));let u=null;n.startAt&&(u=function(g){const w=!!g.before,C=g.values||[];return new Rl(C,w)}(n.startAt));let h=null;return n.endAt&&(h=function(g){const w=!g.before,C=g.values||[];return new Rl(C,w)}(n.endAt)),QA(e,i,o,s,l,"F",u,h)}function tw(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ci(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ci(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ci(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ci(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(ci(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return dr.create(n.compositeFilter.filters.map(r=>tw(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function ci(t){return Ve.fromServerFormat(t.fieldPath)}function P2(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function b2(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function nw(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class N2{constructor(e){this.yt=e}}function D2(t){const e=R2({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?bd(e,e.limit,"L"):e}/**
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
 */class O2{constructor(){this.bn=new M2}addToCollectionParentIndex(e,n){return this.bn.add(n),O.resolve()}getCollectionParents(e,n){return O.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return O.resolve()}deleteFieldIndex(e,n){return O.resolve()}deleteAllFieldIndexes(e){return O.resolve()}createTargetIndexes(e,n){return O.resolve()}getDocumentsMatchingTarget(e,n){return O.resolve(null)}getIndexType(e,n){return O.resolve(0)}getFieldIndexes(e,n){return O.resolve([])}getNextCollectionGroupToUpdate(e){return O.resolve(null)}getMinOffset(e,n){return O.resolve(cr.min())}getMinOffsetFromCollectionGroup(e,n){return O.resolve(cr.min())}updateCollectionGroup(e,n,r){return O.resolve()}updateIndexEntries(e,n){return O.resolve()}}class M2{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ue(Ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ue(Ie.comparator)).toArray()}}/**
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
 */const Pg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},rw=41943040;class lt{static withCacheSize(e){return new lt(e,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(rw,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);/**
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
 */class hr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new hr(0)}static ar(){return new hr(-1)}}/**
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
 */const bg="LruGarbageCollector",j2=1048576;function Ng([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class L2{constructor(e){this.Pr=e,this.buffer=new Ue(Ng),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Ng(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class V2{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){W(bg,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Vo(n)?W(bg,"Ignoring IndexedDB error during garbage collection: ",n):await Gh(n)}await this.Ar(3e5)})}}class F2{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return O.resolve(Kh.ce);const r=new L2(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(W("LruGarbageCollector","Garbage collection skipped; disabled"),O.resolve(Pg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(W("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pg):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,l,u,h;const p=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(W("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,l=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(h=Date.now(),ui()<=Z.DEBUG&&W("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-p}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${g} documents in `+(h-u)+`ms
Total Duration: ${h-p}ms`),O.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function U2(t,e){return new F2(t,e)}/**
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
 */class z2{constructor(){this.changes=new ri(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?O.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class B2{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class $2{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Qs(r.mutation,i,Wt.empty(),fe.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Ye()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Ye()){const i=Nr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Ta();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Nr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Ye()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=bl();const o=Ks(),l=function(){return Ks()}();return n.forEach((u,h)=>{const p=r.get(h.key);i.has(h.key)&&(p===void 0||p.mutation instanceof ii)?s=s.insert(h.key,h):p!==void 0?(o.set(h.key,p.mutation.getFieldMask()),Qs(p.mutation,h,p.mutation.getFieldMask(),fe.now())):o.set(h.key,Wt.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,p)=>o.set(h,p)),n.forEach((h,p)=>l.set(h,new B2(p,o.get(h)??null))),l))}recalculateAndSaveOverlays(e,n){const r=Ks();let i=new pt((o,l)=>o-l),s=Ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let p=r.get(u)||Wt.empty();p=l.applyToLocalView(h,p),r.set(u,p);const g=(i.get(l.batchId)||Ye()).add(u);i=i.insert(l.batchId,g)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,p=u.value,g=H0();p.forEach(w=>{if(!s.has(w)){const C=J0(n.get(w),r.get(w));C!==null&&g.set(w,C),s=s.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,g))}return O.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return JA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):XA(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):O.resolve(Nr());let l=_o,u=s;return o.next(h=>O.forEach(h,(p,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),s.get(p)?O.resolve():this.remoteDocumentCache.getEntry(e,p).next(w=>{u=u.insert(p,w)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,Ye())).next(p=>({batchId:l,changes:W0(p)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Y(n)).next(r=>{let i=Ta();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Ta();return this.indexManager.getCollectionParents(e,s).next(l=>O.forEach(l,u=>{const h=function(g,w){return new su(w,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(p=>{p.forEach((g,w)=>{o=o.insert(g,w)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const p=h.getKey();o.get(p)===null&&(o=o.insert(p,Ut.newInvalidDocument(p)))});let l=Ta();return o.forEach((u,h)=>{const p=s.get(u);p!==void 0&&Qs(p.mutation,h,Wt.empty(),fe.now()),nf(n,h)&&(l=l.insert(u,h))}),l})}}/**
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
 */class W2{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return O.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:Di(i.createTime)}}(n)),O.resolve()}getNamedQuery(e,n){return O.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:D2(i.bundledQuery),readTime:Di(i.readTime)}}(n)),O.resolve()}}/**
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
 */class H2{constructor(){this.overlays=new pt(Y.comparator),this.Lr=new Map}getOverlay(e,n){return O.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Nr();return O.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),O.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),O.resolve()}getOverlaysForCollection(e,n,r){const i=Nr(),s=n.length+1,o=new Y(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return O.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new pt((h,p)=>h-p);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let p=s.get(h.largestBatchId);p===null&&(p=Nr(),s=s.insert(h.largestBatchId,p)),p.set(h.getKey(),h)}}const l=Nr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,p)=>l.set(h,p)),!(l.size()>=i)););return O.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new y2(n,r));let s=this.Lr.get(n);s===void 0&&(s=Ye(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
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
 */class q2{constructor(){this.sessionToken=cn.EMPTY_BYTE_STRING}getSessionToken(e){return O.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,O.resolve()}}/**
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
 */class of{constructor(){this.kr=new Ue(be.Kr),this.qr=new Ue(be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new be(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new be(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new Y(new Ie([])),r=new be(n,e),i=new be(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new Y(new Ie([])),r=new be(n,e),i=new be(n,e+1);let s=Ye();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new be(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class be{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return Y.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||Y.comparator(e.key,n.key)}}/**
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
 */class G2{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new Ue(be.Kr)}checkEmpty(e){return O.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new g2(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Hr=this.Hr.add(new be(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return O.resolve(o)}lookupMutationBatch(e,n){return O.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return O.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return O.resolve(this.mutationQueue.length===0?Qh:this.Yn-1)}getAllMutationBatches(e){return O.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new be(n,0),i=new be(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const l=this.Zr(o.Jr);s.push(l)}),O.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ue(ne);return n.forEach(i=>{const s=new be(i,0),o=new be(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],l=>{r=r.add(l.Jr)})}),O.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Y.isDocumentKey(s)||(s=s.child(""));const o=new be(new Y(s),0);let l=new Ue(ne);return this.Hr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Jr)),!0)},o),O.resolve(this.Yr(l))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){we(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return O.forEach(n.mutations,i=>{const s=new be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new be(n,0),i=this.Hr.firstAfterOrEqual(r);return O.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,O.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class K2{constructor(e){this.ti=e,this.docs=function(){return new pt(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return O.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=bl();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),O.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=bl();const o=n.path,l=new Y(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:p}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||xA(SA(p),r)<=0||(i.has(p.key)||nf(n,p))&&(s=s.insert(p.key,p.mutableCopy()))}return O.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}ni(e,n){return O.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new Q2(this)}getSize(e){return O.resolve(this.size)}}class Q2 extends z2{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),O.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class Y2{constructor(e){this.persistence=e,this.ri=new ri(n=>ef(n),tf),this.lastRemoteSnapshotVersion=de.min(),this.highestTargetId=0,this.ii=0,this.si=new of,this.targetCount=0,this.oi=hr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),O.resolve()}getLastRemoteSnapshotVersion(e){return O.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return O.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),O.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),O.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new hr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,O.resolve()}updateTargetData(e,n){return this.lr(n),O.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,O.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),O.waitFor(s).next(()=>i)}getTargetCount(e){return O.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return O.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),O.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),O.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),O.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return O.resolve(r)}containsKey(e,n){return O.resolve(this.si.containsKey(n))}}/**
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
 */class iw{constructor(e,n){this._i={},this.overlays={},this.ai=new Kh(0),this.ui=!1,this.ui=!0,this.ci=new q2,this.referenceDelegate=e(this),this.li=new Y2(this),this.indexManager=new O2,this.remoteDocumentCache=function(i){return new K2(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new N2(n),this.Pi=new W2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new H2,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new G2(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){W("MemoryPersistence","Starting transaction:",e);const i=new J2(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return O.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class J2 extends AA{constructor(e){super(),this.currentSequenceNumber=e}}class af{constructor(e){this.persistence=e,this.Ri=new of,this.Ai=null}static Vi(e){return new af(e)}get di(){if(this.Ai)return this.Ai;throw J(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),O.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),O.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),O.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return O.forEach(this.di,r=>{const i=Y.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,de.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return O.or([()=>O.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Dl{constructor(e,n){this.persistence=e,this.fi=new ri(r=>PA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=U2(this,n)}static Vi(e,n){return new Dl(e,n)}Ti(){}Ii(e){return O.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return O.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?O.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,de.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),O.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),O.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=$a(e.data.value)),n}wr(e,n,r){return O.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return O.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class lf{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=Ye(),i=Ye();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new lf(e,n.fromCache,r,i)}}/**
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
 */class X2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class Z2{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return AI()?8:CA(Ze())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new X2;return this.ys(e,n,o).next(l=>{if(s.result=l,this.As)return this.ws(e,n,o,l.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(ui()<=Z.DEBUG&&W("QueryEngine","SDK will not create cache indexes for query:",As(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),O.resolve()):(ui()<=Z.DEBUG&&W("QueryEngine","Query:",As(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(ui()<=Z.DEBUG&&W("QueryEngine","The SDK decides to create cache indexes for query:",As(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Lr(n))):O.resolve())}gs(e,n){if(Sg(n))return O.resolve(null);let r=Lr(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=bd(n,null,"F"),r=Lr(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=Ye(...s);return this.fs.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.Ss(n,l);return this.bs(n,h,o,u.readTime)?this.gs(e,bd(n,null,"F")):this.Ds(e,h,n,u)}))})))}ps(e,n,r,i){return Sg(n)||i.isEqual(de.min())?O.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?O.resolve(null):(ui()<=Z.DEBUG&&W("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),As(n)),this.Ds(e,o,n,IA(i,_o)).next(l=>l))})}Ss(e,n){let r=new Ue(e2(e));return n.forEach((i,s)=>{nf(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return ui()<=Z.DEBUG&&W("QueryEngine","Using full collection scan to execute query:",As(n)),this.fs.getDocumentsMatchingQuery(e,n,cr.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const eC="LocalStore";class tC{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new pt(ne),this.Fs=new ri(s=>ef(s),tf),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new $2(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function nC(t,e,n,r){return new tC(t,e,n,r)}async function sw(t,e){const n=oe(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=Ye();for(const h of i){o.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}for(const h of s){l.push(h.batchId);for(const p of h.mutations)u=u.add(p.key)}return n.localDocuments.getDocuments(r,u).next(h=>({Ns:h,removedBatchIds:o,addedBatchIds:l}))})})}function rC(t,e){const n=oe(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(l,u,h,p){const g=h.batch,w=g.keys();let C=O.resolve();return w.forEach(P=>{C=C.next(()=>p.getEntry(u,P)).next(D=>{const F=h.docVersions.get(P);we(F!==null,48541),D.version.compareTo(F)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),p.addEntry(D)))})}),C.next(()=>l.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(l){let u=Ye();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(u=u.add(l.batch.mutations[h].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function iC(t){const e=oe(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function sC(t,e){const n=oe(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Qh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class Dg{constructor(){this.activeTargetIds=o2()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class oC{constructor(){this.vo=new Dg,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new Dg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class aC{Mo(e){}shutdown(){}}/**
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
 */const Og="ConnectivityMonitor";class Mg{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){W(Og,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){W(Og,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ia=null;function Md(){return Ia===null?Ia=function(){return 268435456+Math.round(2147483648*Math.random())}():Ia++,"0x"+Ia.toString(16)}/**
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
 */const gc="RestConnection",lC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class uC{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===Al?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Md(),l=this.Qo(e,n.toUriEncodedString());W(gc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:h}=new URL(l),p=No(h);return this.zo(e,l,u,r,p).then(g=>(W(gc,`Received RPC '${e}' ${o}: `,g),g),g=>{throw vo(gc,`RPC '${e}' ${o} failed with error: `,g,"url: ",l,"request:",r),g})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+es}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=lC[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class cC{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ge="WebChannelConnection",Cs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class Oi extends uC{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!Oi.c_){const e=E0();Cs(e,w0.STAT_EVENT,n=>{n.stat===Sd.PROXY?W(Ge,"STAT_EVENT: detected buffering proxy"):n.stat===Sd.NOPROXY&&W(Ge,"STAT_EVENT: detected no buffering proxy")}),Oi.c_=!0}}zo(e,n,r,i,s){const o=Md();return new Promise((l,u)=>{const h=new v0;h.setWithCredentials(!0),h.listenOnce(_0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case Ba.NO_ERROR:const g=h.getResponseJson();W(Ge,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),l(g);break;case Ba.TIMEOUT:W(Ge,`RPC '${e}' ${o} timed out`),u(new H(L.DEADLINE_EXCEEDED,"Request time out"));break;case Ba.HTTP_ERROR:const w=h.getStatus();if(W(Ge,`RPC '${e}' ${o} failed with status:`,w,"response text:",h.getResponseText()),w>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const P=C==null?void 0:C.error;if(P&&P.status&&P.message){const D=function(k){const v=k.toLowerCase().replace(/_/g,"-");return Object.values(L).indexOf(v)>=0?v:L.UNKNOWN}(P.status);u(new H(D,P.message))}else u(new H(L.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new H(L.UNAVAILABLE,"Connection failed."));break;default:J(9055,{l_:e,streamId:o,h_:h.getLastErrorCode(),P_:h.getLastError()})}}finally{W(Ge,`RPC '${e}' ${o} completed.`)}});const p=JSON.stringify(i);W(Ge,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",p,r,15)})}T_(e,n,r){const i=Md(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Go(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const h=s.join("");W(Ge,`Creating RPC '${e}' stream ${i}: ${h}`,l);const p=o.createWebChannel(h,l);this.I_(p);let g=!1,w=!1;const C=new cC({Jo:P=>{w?W(Ge,`Not sending because RPC '${e}' stream ${i} is closed:`,P):(g||(W(Ge,`Opening RPC '${e}' stream ${i} transport.`),p.open(),g=!0),W(Ge,`RPC '${e}' stream ${i} sending:`,P),p.send(P))},Ho:()=>p.close()});return Cs(p,Ms.EventType.OPEN,()=>{w||(W(Ge,`RPC '${e}' stream ${i} transport opened.`),C.i_())}),Cs(p,Ms.EventType.CLOSE,()=>{w||(w=!0,W(Ge,`RPC '${e}' stream ${i} transport closed`),C.o_(),this.E_(p))}),Cs(p,Ms.EventType.ERROR,P=>{w||(w=!0,vo(Ge,`RPC '${e}' stream ${i} transport errored. Name:`,P.name,"Message:",P.message),C.o_(new H(L.UNAVAILABLE,"The operation could not be completed")))}),Cs(p,Ms.EventType.MESSAGE,P=>{var D;if(!w){const F=P.data[0];we(!!F,16349);const k=F,v=(k==null?void 0:k.error)||((D=k[0])==null?void 0:D.error);if(v){W(Ge,`RPC '${e}' stream ${i} received error:`,v);const _=v.status;let b=function(T){const y=Se[T];if(y!==void 0)return _2(y)}(_),M=v.message;_==="NOT_FOUND"&&M.includes("database")&&M.includes("does not exist")&&M.includes(this.databaseId.database)&&vo(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),b===void 0&&(b=L.INTERNAL,M="Unknown error status: "+_+" with message "+v.message),w=!0,C.o_(new H(b,M)),p.close()}else W(Ge,`RPC '${e}' stream ${i} received:`,F),C.__(F)}}),Oi.u_(),setTimeout(()=>{C.s_()},0),C}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return T0()}}/**
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
 */function dC(t){return new Oi(t)}function yc(){return typeof document<"u"?document:null}/**
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
 */function lu(t){return new w2(t,!0)}/**
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
 */Oi.c_=!1;class ow{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&W("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const jg="PersistentStream";class hC{constructor(e,n,r,i,s,o,l,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ow(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===L.RESOURCE_EXHAUSTED?(Gr(n.toString()),Gr("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===L.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new H(L.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return W(jg,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(W(jg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class fC extends hC{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return we(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,we(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){we(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=C2(e.writeResults,e.commitTime),r=Di(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=x2(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>A2(this.serializer,r))};this.K_(n)}}/**
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
 */class pC{}class mC extends pC{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Dd(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new H(L.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.jo(e,Dd(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===L.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new H(L.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function gC(t,e,n,r){return new mC(t,e,n,r)}class yC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Gr(n),this.aa=!1):W("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const Uo="RemoteStore";class vC{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new hr(1e3),this.Va=new hr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Bo(this)&&(W(Uo,"Restarting streams for network reachability change."),await async function(u){const h=oe(u);h.da.add(4),await zo(h),h.ga.set("Unknown"),h.da.delete(4),await uu(h)}(this))})}),this.ga=new yC(r,i)}}async function uu(t){if(Bo(t))for(const e of t.ma)await e(!0)}async function zo(t){for(const e of t.ma)await e(!1)}function Bo(t){return oe(t).da.size===0}async function aw(t,e,n){if(!Vo(e))throw e;t.da.add(1),await zo(t),t.ga.set("Offline"),n||(n=()=>iC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{W(Uo,"Retrying IndexedDB access"),await n(),t.da.delete(1),await uu(t)})}function lw(t,e){return e().catch(n=>aw(t,n,e))}async function cu(t){const e=oe(t),n=fr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Qh;for(;_C(e);)try{const i=await sC(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,wC(e,i)}catch(i){await aw(e,i)}uw(e)&&cw(e)}function _C(t){return Bo(t)&&t.Ta.length<10}function wC(t,e){t.Ta.push(e);const n=fr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function uw(t){return Bo(t)&&!fr(t).x_()&&t.Ta.length>0}function cw(t){fr(t).start()}async function EC(t){fr(t).ra()}async function TC(t){const e=fr(t);for(const n of t.Ta)e.ea(n.mutations)}async function IC(t,e,n){const r=t.Ta.shift(),i=sf.from(r,e,n);await lw(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await cu(t)}async function SC(t,e){e&&fr(t).Y_&&await async function(r,i){if(function(o){return v2(o)&&o!==L.ABORTED}(i.code)){const s=r.Ta.shift();fr(r).B_(),await lw(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await cu(r)}}(t,e),uw(t)&&cw(t)}async function Lg(t,e){const n=oe(t);n.asyncQueue.verifyOperationInProgress(),W(Uo,"RemoteStore received new credentials");const r=Bo(n);n.da.add(3),await zo(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await uu(n)}async function xC(t,e){const n=oe(t);e?(n.da.delete(2),await uu(n)):e||(n.da.add(2),await zo(n),n.ga.set("Unknown"))}function fr(t){return t.wa||(t.wa=function(n,r,i){const s=oe(n);return s.sa(),new fC(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:EC.bind(null,t),t_:SC.bind(null,t),ta:TC.bind(null,t),na:IC.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await cu(t)):(await t.wa.stop(),t.Ta.length>0&&(W(Uo,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class uf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new uf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new H(L.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dw(t,e){if(Gr("AsyncQueue",`${e}: ${t}`),Vo(t))return new H(L.UNAVAILABLE,`${e}: ${t}`);throw t}class kC{constructor(){this.queries=Vg(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=oe(n),s=i.queries;i.queries=Vg(),s.forEach((o,l)=>{for(const u of l.va)u.onError(r)})})(this,new H(L.ABORTED,"Firestore shutting down"))}}function Vg(){return new ri(t=>B0(t),z0)}function AC(t){t.xa.forEach(e=>{e.next()})}var Fg,Ug;(Ug=Fg||(Fg={})).Ba="default",Ug.Cache="cache";const CC="SyncEngine";class RC{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new ri(l=>B0(l),z0),this.Vu=new Map,this.du=new Set,this.mu=new pt(Y.comparator),this.fu=new Map,this.gu=new of,this.pu={},this.yu=new Map,this.wu=hr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function PC(t,e,n){const r=OC(t);try{const i=await function(o,l){const u=oe(o),h=fe.now(),p=l.reduce((C,P)=>C.add(P.key),Ye());let g,w;return u.persistence.runTransaction("Locally write mutations","readwrite",C=>{let P=bl(),D=Ye();return u.xs.getEntries(C,p).next(F=>{P=F,P.forEach((k,v)=>{v.isValidDocument()||(D=D.add(k))})}).next(()=>u.localDocuments.getOverlayedDocuments(C,P)).next(F=>{g=F;const k=[];for(const v of l){const _=p2(v,g.get(v.key).overlayedDocument);_!=null&&k.push(new ii(v.key,_,O0(_.value.mapValue),En.exists(!0)))}return u.mutationQueue.addMutationBatch(C,h,k,l)}).next(F=>{w=F;const k=F.applyToLocalDocumentSet(g,D);return u.documentOverlayCache.saveOverlays(C,F.batchId,k)})}).then(()=>({batchId:w.batchId,changes:W0(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,l,u){let h=o.pu[o.currentUser.toKey()];h||(h=new pt(ne)),h=h.insert(l,u),o.pu[o.currentUser.toKey()]=h}(r,i.batchId,n),await du(r,i.changes),await cu(r.remoteStore)}catch(i){const s=dw(i,"Failed to persist write");n.reject(s)}}function zg(t,e,n){const r=oe(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const l=o.view.Oa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=oe(o);u.onlineState=l;let h=!1;u.queries.forEach((p,g)=>{for(const w of g.va)w.Oa(l)&&(h=!0)}),h&&AC(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bC(t,e){const n=oe(t),r=e.batch.batchId;try{const i=await rC(n.localStore,e);fw(n,r,null),hw(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await du(n,i)}catch(i){await Gh(i)}}async function NC(t,e,n){const r=oe(t);try{const i=await function(o,l){const u=oe(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",h=>{let p;return u.mutationQueue.lookupMutationBatch(h,l).next(g=>(we(g!==null,37113),p=g.keys(),u.mutationQueue.removeMutationBatch(h,g))).next(()=>u.mutationQueue.performConsistencyCheck(h)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(h,p,l)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,p)).next(()=>u.localDocuments.getDocuments(h,p))})}(r.localStore,e);fw(r,e,n),hw(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await du(r,i)}catch(i){await Gh(i)}}function hw(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function fw(t,e,n){const r=oe(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}async function du(t,e,n){const r=oe(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((l,u)=>{o.push(r.bu(u,e,n).then(h=>{var p;if((h||n)&&r.isPrimaryClient){const g=h?!h.fromCache:(p=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:p.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(h){i.push(h);const g=lf.Es(u.targetId,h);s.push(g)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,h){const p=oe(u);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>O.forEach(h,w=>O.forEach(w.Ts,C=>p.persistence.referenceDelegate.addReference(g,w.targetId,C)).next(()=>O.forEach(w.Is,C=>p.persistence.referenceDelegate.removeReference(g,w.targetId,C)))))}catch(g){if(!Vo(g))throw g;W(eC,"Failed to update sequence numbers: "+g)}for(const g of h){const w=g.targetId;if(!g.fromCache){const C=p.vs.get(w),P=C.snapshotVersion,D=C.withLastLimboFreeSnapshotVersion(P);p.vs=p.vs.insert(w,D)}}}(r.localStore,s))}async function DC(t,e){const n=oe(t);if(!n.currentUser.isEqual(e)){W(CC,"User change. New user:",e.toKey());const r=await sw(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(l=>{l.forEach(u=>{u.reject(new H(L.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await du(n,r.Ns)}}function OC(t){const e=oe(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=bC.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NC.bind(null,e),e}class Ol{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lu(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return nC(this.persistence,new Z2,e.initialUser,this.serializer)}xu(e){return new iw(af.Vi,this.serializer)}Mu(e){return new oC}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ol.provider={build:()=>new Ol};class MC extends Ol{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){we(this.persistence.referenceDelegate instanceof Dl,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new V2(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?lt.withCacheSize(this.cacheSizeBytes):lt.DEFAULT;return new iw(r=>Dl.Vi(r,n),this.serializer)}}class jd{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DC.bind(null,this.syncEngine),await xC(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new kC}()}createDatastore(e){const n=lu(e.databaseInfo.databaseId),r=dC(e.databaseInfo);return gC(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new vC(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>zg(this.syncEngine,n,0),function(){return Mg.v()?new Mg:new aC}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,p){const g=new RC(i,s,o,l,u,h);return p&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=oe(i);W(Uo,"RemoteStore shutting down."),s.da.add(5),await zo(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}jd.provider={build:()=>new jd};/**
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
 */const pr="FirestoreClient";class jC{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=Ke.UNAUTHENTICATED,this.clientId=Hh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{W(pr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(W(pr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=dw(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vc(t,e){t.asyncQueue.verifyOperationInProgress(),W(pr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await sw(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Bg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LC(t);W(pr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Lg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Lg(e.remoteStore,i)),t._onlineComponents=e}async function LC(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){W(pr,"Using user provided OfflineComponentProvider");try{await vc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===L.FAILED_PRECONDITION||i.code===L.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;vo("Error using user provided cache. Falling back to memory cache: "+n),await vc(t,new Ol)}}else W(pr,"Using default OfflineComponentProvider"),await vc(t,new MC(void 0));return t._offlineComponents}async function VC(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(W(pr,"Using user provided OnlineComponentProvider"),await Bg(t,t._uninitializedComponentsProvider._online)):(W(pr,"Using default OnlineComponentProvider"),await Bg(t,new jd))),t._onlineComponents}function FC(t){return VC(t).then(e=>e.syncEngine)}function UC(t,e){const n=new jr;return t.asyncQueue.enqueueAndForget(async()=>PC(await FC(t),e,n)),n.promise}/**
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
 */function pw(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const zC="ComponentProvider",$g=new Map;function BC(t,e,n,r,i){return new OA(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,pw(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const mw="firestore.googleapis.com",Wg=!0;class Hg{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new H(L.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=mw,this.ssl=Wg}else this.host=e.host,this.ssl=e.ssl??Wg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=rw;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<j2)throw new H(L.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}TA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pw(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new H(L.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new H(L.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new H(L.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dA;switch(r.type){case"firstParty":return new mA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new H(L.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=$g.get(n);r&&(W(zC,"Removing Datastore"),$g.delete(n),r.terminate())}(this),Promise.resolve()}}function $C(t,e,n,r={}){var h;t=kd(t,cf);const i=No(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},l=`${e}:${n}`;i&&b_(`https://${l}`),s.host!==mw&&s.host!==l&&vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:l,ssl:i,emulatorOptions:r};if(!ur(u,o)&&(t._setSettings(u),r.mockUserToken)){let p,g;if(typeof r.mockUserToken=="string")p=r.mockUserToken,g=Ke.MOCK_USER;else{p=EI(r.mockUserToken,(h=t._app)==null?void 0:h.options.projectId);const w=r.mockUserToken.sub||r.mockUserToken.user_id;if(!w)throw new H(L.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ke(w)}t._authCredentials=new hA(new S0(p,g))}}/**
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
 */class df{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new df(this.firestore,e,this._query)}}class Je{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new So(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Je(this.firestore,e,this._key)}toJSON(){return{type:Je._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Lo(n,Je._jsonSchema))return new Je(e,r||null,new Y(Ie.fromString(n.referencePath)))}}Je._jsonSchemaVersion="firestore/documentReference/1.0",Je._jsonSchema={type:ke("string",Je._jsonSchemaVersion),referencePath:ke("string")};class So extends df{constructor(e,n,r){super(e,n,YA(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Je(this.firestore,null,new Y(e))}withConverter(e){return new So(this.firestore,e,this._path)}}function WC(t,e,...n){if(t=Be(t),arguments.length===1&&(e=Hh.newId()),EA("doc","path",e),t instanceof cf){const r=Ie.fromString(e,...n);return fg(r),new Je(t,null,new Y(r))}{if(!(t instanceof Je||t instanceof So))throw new H(L.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ie.fromString(e,...n));return fg(r),new Je(t.firestore,t instanceof So?t.converter:null,new Y(r))}}/**
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
 */const qg="AsyncQueue";class Gg{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new ow(this,"async_queue_retry"),this.lc=()=>{const r=yc();r&&W(qg,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=yc();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=yc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new jr;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Vo(e))throw e;W(qg,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Gr("INTERNAL UNHANDLED ERROR: ",Kg(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=uf.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&J(47125,{Rc:Kg(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Kg(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class gw extends cf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new Gg,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Gg(e),this._firestoreClient=void 0,await e}}}function HC(t,e){const n=typeof t=="object"?t:Oh(),r=typeof t=="string"?t:Al,i=ti(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=_I("firestore");s&&$C(i,...s)}return i}function qC(t){if(t._terminated)throw new H(L.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GC(t),t._firestoreClient}function GC(t){var r,i,s,o;const e=t._freezeSettings(),n=BC(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new jC(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const h=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(h),_online:h}}(t._componentsProvider))}/**
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
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(cn.fromBase64String(e))}catch(n){throw new H(L.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(cn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Lo(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:ke("string",Bt._jsonSchemaVersion),bytes:ke("string")};/**
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
 */class yw{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new H(L.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ve(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class hf{constructor(e){this._methodName=e}}/**
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
 */class Tn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new H(L.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new H(L.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Tn._jsonSchemaVersion}}static fromJSON(e){if(Lo(e,Tn._jsonSchema))return new Tn(e.latitude,e.longitude)}}Tn._jsonSchemaVersion="firestore/geoPoint/1.0",Tn._jsonSchema={type:ke("string",Tn._jsonSchemaVersion),latitude:ke("number"),longitude:ke("number")};/**
 * @license
 * Copyright 2024 Google LLC
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
 */class ln{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:ln._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Lo(e,ln._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new ln(e.vectorValues);throw new H(L.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}ln._jsonSchemaVersion="firestore/vectorValue/1.0",ln._jsonSchema={type:ke("string",ln._jsonSchemaVersion),vectorValues:ke("object")};/**
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
 */const KC=/^__.*__$/;class QC{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ii(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fo(e,this.data,n,this.fieldTransforms)}}function vw(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J(40011,{dataSource:t})}}class ff{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new ff({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return Ml(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(vw(this.dataSource)&&KC.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class YC{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||lu(e)}V(e,n,r,i=!1){return new ff({dataSource:e,methodName:n,targetDoc:r,path:Ve.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function JC(t){const e=t._freezeSettings(),n=lu(t._databaseId);return new YC(t._databaseId,!!e.ignoreUndefinedProperties,n)}function XC(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);Tw("Data must be an object, but it was:",o,r);const l=ww(r,o);let u,h;if(s.merge)u=new Wt(o.fieldMask),h=o.fieldTransforms;else if(s.mergeFields){const p=[];for(const g of s.mergeFields){const w=mf(e,g,n);if(!o.contains(w))throw new H(L.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);tR(p,w)||p.push(w)}u=new Wt(p),h=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,h=o.fieldTransforms;return new QC(new zt(l),u,h)}class pf extends hf{_toFieldTransform(e){return new c2(e.path,new Eo)}isEqual(e){return e instanceof pf}}function _w(t,e){if(Ew(t=Be(t)))return Tw("Unsupported field value:",e,t),ww(t,e);if(t instanceof hf)return function(r,i){if(!vw(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const l of r){let u=_w(l,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=Be(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return a2(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=fe.fromDate(r);return{timestampValue:Nd(i.serializer,s)}}if(r instanceof fe){const s=new fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Nd(i.serializer,s)}}if(r instanceof Tn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:E2(i.serializer,r._byteString)};if(r instanceof Je){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:ew(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof ln)return function(o,l){const u=o instanceof ln?o.toArray():o;return{mapValue:{fields:{[N0]:{stringValue:D0},[Ad]:{arrayValue:{values:u.map(p=>{if(typeof p!="number")throw l.Dc("VectorValues must only contain numeric values.");return rf(l.serializer,p)})}}}}}}(r,i);if(nw(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${qh(r)}`)}(t,e)}function ww(t,e){const n={};return A0(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ts(t,(r,i)=>{const s=_w(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Ew(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof fe||t instanceof Tn||t instanceof Bt||t instanceof Je||t instanceof hf||t instanceof ln||nw(t))}function Tw(t,e,n){if(!Ew(n)||!x0(n)){const r=qh(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function mf(t,e,n){if((e=Be(e))instanceof yw)return e._internalPath;if(typeof e=="string")return eR(t,e);throw Ml("Field path arguments must be of type string or ",t,!1,void 0,n)}const ZC=new RegExp("[~\\*/\\[\\]]");function eR(t,e,n){if(e.search(ZC)>=0)throw Ml(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yw(...e.split("."))._internalPath}catch{throw Ml(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ml(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new H(L.INVALID_ARGUMENT,l+t+u)}function tR(t,e){return t.some(n=>n.isEqual(e))}function nR(){return new pf("serverTimestamp")}const Qg="@firebase/firestore",Yg="4.14.1";/**
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
 */class Iw{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Je(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rR(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(mf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rR extends Iw{data(){return super.data()}}function iR(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class Sa{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mi extends Iw{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mf("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mi._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mi._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mi._jsonSchema={type:ke("string",Mi._jsonSchemaVersion),bundleSource:ke("string","DocumentSnapshot"),bundleName:ke("string"),bundle:ke("string")};class qa extends Mi{data(e={}){return super.data(e)}}class Ys{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Sa(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qa(this._firestore,this._userDataWriter,r.key,r,new Sa(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new H(L.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new qa(i._firestore,i._userDataWriter,l.doc.key,l.doc,new Sa(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,p=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),p=o.indexOf(l.doc.key)),{type:sR(l.type),doc:u,oldIndex:h,newIndex:p}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new H(L.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Ys._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function sR(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}/**
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
 */Ys._jsonSchemaVersion="firestore/querySnapshot/1.0",Ys._jsonSchema={type:ke("string",Ys._jsonSchemaVersion),bundleSource:ke("string","QuerySnapshot"),bundleName:ke("string"),bundle:ke("string")};function oR(t,e,n){t=kd(t,Je);const r=kd(t.firestore,gw),i=iR(t.converter,e),s=JC(r);return aR(r,[XC(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,En.none())])}function aR(t,e){const n=qC(t);return UC(n,e)}(function(e,n=!0){cA(Xi),un(new Kt("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new gw(new fA(r.getProvider("auth-internal")),new gA(o,r.getProvider("app-check-internal")),MA(o,i),o);return s={useFetchStreams:n,...s},l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),bt(Qg,Yg,e),bt(Qg,Yg,"esm2020")})();var lR="firebase",uR="12.13.0";/**
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
 */bt(lR,uR,"app");const Sw="@firebase/installations",gf="0.6.22";/**
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
 */const xw=1e4,kw=`w:${gf}`,Aw="FIS_v2",cR="https://firebaseinstallations.googleapis.com/v1",dR=60*60*1e3,hR="installations",fR="Installations";/**
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
 */const pR={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Yr=new ei(hR,fR,pR);function Cw(t){return t instanceof Yt&&t.code.includes("request-failed")}/**
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
 */function Rw({projectId:t}){return`${cR}/projects/${t}/installations`}function Pw(t){return{token:t.token,requestStatus:2,expiresIn:gR(t.expiresIn),creationTime:Date.now()}}async function bw(t,e){const r=(await e.json()).error;return Yr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Nw({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function mR(t,{refreshToken:e}){const n=Nw(t);return n.append("Authorization",yR(e)),n}async function Dw(t){const e=await t();return e.status>=500&&e.status<600?t():e}function gR(t){return Number(t.replace("s","000"))}function yR(t){return`${Aw} ${t}`}/**
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
 */async function vR({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Rw(t),i=Nw(t),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={fid:n,authVersion:Aw,appId:t.appId,sdkVersion:kw},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Dw(()=>fetch(r,l));if(u.ok){const h=await u.json();return{fid:h.fid||n,registrationStatus:2,refreshToken:h.refreshToken,authToken:Pw(h.authToken)}}else throw await bw("Create Installation",u)}/**
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
 */function Ow(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function _R(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const wR=/^[cdef][\w-]{21}$/,Ld="";function ER(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=TR(t);return wR.test(n)?n:Ld}catch{return Ld}}function TR(t){return _R(t).substr(0,22)}/**
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
 */function hu(t){return`${t.appName}!${t.appId}`}/**
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
 */const Mw=new Map;function jw(t,e){const n=hu(t);Lw(n,e),IR(n,e)}function Lw(t,e){const n=Mw.get(t);if(n)for(const r of n)r(e)}function IR(t,e){const n=SR();n&&n.postMessage({key:t,fid:e}),xR()}let Dr=null;function SR(){return!Dr&&"BroadcastChannel"in self&&(Dr=new BroadcastChannel("[Firebase] FID Change"),Dr.onmessage=t=>{Lw(t.data.key,t.data.fid)}),Dr}function xR(){Mw.size===0&&Dr&&(Dr.close(),Dr=null)}/**
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
 */const kR="firebase-installations-database",AR=1,Jr="firebase-installations-store";let _c=null;function yf(){return _c||(_c=O_(kR,AR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Jr)}}})),_c}async function jl(t,e){const n=hu(t),i=(await yf()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&jw(t,e.fid),e}async function Vw(t){const e=hu(t),r=(await yf()).transaction(Jr,"readwrite");await r.objectStore(Jr).delete(e),await r.done}async function fu(t,e){const n=hu(t),i=(await yf()).transaction(Jr,"readwrite"),s=i.objectStore(Jr),o=await s.get(n),l=e(o);return l===void 0?await s.delete(n):await s.put(l,n),await i.done,l&&(!o||o.fid!==l.fid)&&jw(t,l.fid),l}/**
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
 */async function vf(t){let e;const n=await fu(t.appConfig,r=>{const i=CR(r),s=RR(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===Ld?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function CR(t){const e=t||{fid:ER(),registrationStatus:0};return Fw(e)}function RR(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(Yr.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=PR(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:bR(t)}:{installationEntry:e}}async function PR(t,e){try{const n=await vR(t,e);return jl(t.appConfig,n)}catch(n){throw Cw(n)&&n.customData.serverCode===409?await Vw(t.appConfig):await jl(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function bR(t){let e=await Jg(t.appConfig);for(;e.registrationStatus===1;)await Ow(100),e=await Jg(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await vf(t);return r||n}return e}function Jg(t){return fu(t,e=>{if(!e)throw Yr.create("installation-not-found");return Fw(e)})}function Fw(t){return NR(t)?{fid:t.fid,registrationStatus:0}:t}function NR(t){return t.registrationStatus===1&&t.registrationTime+xw<Date.now()}/**
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
 */async function DR({appConfig:t,heartbeatServiceProvider:e},n){const r=OR(t,n),i=mR(t,n),s=e.getImmediate({optional:!0});if(s){const h=await s.getHeartbeatsHeader();h&&i.append("x-firebase-client",h)}const o={installation:{sdkVersion:kw,appId:t.appId}},l={method:"POST",headers:i,body:JSON.stringify(o)},u=await Dw(()=>fetch(r,l));if(u.ok){const h=await u.json();return Pw(h)}else throw await bw("Generate Auth Token",u)}function OR(t,{fid:e}){return`${Rw(t)}/${e}/authTokens:generate`}/**
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
 */async function _f(t,e=!1){let n;const r=await fu(t.appConfig,s=>{if(!Uw(s))throw Yr.create("not-registered");const o=s.authToken;if(!e&&LR(o))return s;if(o.requestStatus===1)return n=MR(t,e),s;{if(!navigator.onLine)throw Yr.create("app-offline");const l=FR(s);return n=jR(t,l),l}});return n?await n:r.authToken}async function MR(t,e){let n=await Xg(t.appConfig);for(;n.authToken.requestStatus===1;)await Ow(100),n=await Xg(t.appConfig);const r=n.authToken;return r.requestStatus===0?_f(t,e):r}function Xg(t){return fu(t,e=>{if(!Uw(e))throw Yr.create("not-registered");const n=e.authToken;return UR(n)?{...e,authToken:{requestStatus:0}}:e})}async function jR(t,e){try{const n=await DR(t,e),r={...e,authToken:n};return await jl(t.appConfig,r),n}catch(n){if(Cw(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Vw(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await jl(t.appConfig,r)}throw n}}function Uw(t){return t!==void 0&&t.registrationStatus===2}function LR(t){return t.requestStatus===2&&!VR(t)}function VR(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+dR}function FR(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function UR(t){return t.requestStatus===1&&t.requestTime+xw<Date.now()}/**
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
 */async function zR(t){const e=t,{installationEntry:n,registrationPromise:r}=await vf(e);return r?r.catch(console.error):_f(e).catch(console.error),n.fid}/**
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
 */async function BR(t,e=!1){const n=t;return await $R(n),(await _f(n,e)).token}async function $R(t){const{registrationPromise:e}=await vf(t);e&&await e}/**
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
 */function WR(t){if(!t||!t.options)throw wc("App Configuration");if(!t.name)throw wc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wc(t){return Yr.create("missing-app-config-values",{valueName:t})}/**
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
 */const zw="installations",HR="installations-internal",qR=t=>{const e=t.getProvider("app").getImmediate(),n=WR(e),r=ti(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},GR=t=>{const e=t.getProvider("app").getImmediate(),n=ti(e,zw).getImmediate();return{getId:()=>zR(n),getToken:i=>BR(n,i)}};function KR(){un(new Kt(zw,qR,"PUBLIC")),un(new Kt(HR,GR,"PRIVATE"))}KR();bt(Sw,gf);bt(Sw,gf,"esm2020");/**
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
 */const Ll="analytics",QR="firebase_id",YR="origin",JR=60*1e3,XR="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",wf="https://www.googletagmanager.com/gtag/js";/**
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
 */const st=new tu("@firebase/analytics");/**
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
 */const ZR={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},wt=new ei("analytics","Analytics",ZR);/**
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
 */function eP(t){if(!t.startsWith(wf)){const e=wt.create("invalid-gtag-resource",{gtagURL:t});return st.warn(e.message),""}return t}function Bw(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function tP(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function nP(t,e){const n=tP("firebase-js-sdk-policy",{createScriptURL:eP}),r=document.createElement("script"),i=`${wf}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function rP(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function iP(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await Bw(n)).find(h=>h.measurementId===i);u&&await e[u.appId]}}catch(l){st.error(l)}t("config",i,s)}async function sP(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const l=await Bw(n);for(const u of o){const h=l.find(g=>g.measurementId===u),p=h&&e[h.appId];if(p)s.push(p);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){st.error(s)}}function oP(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[l,u]=o;await sP(t,e,n,l,u)}else if(s==="config"){const[l,u]=o;await iP(t,e,n,r,l,u)}else if(s==="consent"){const[l,u]=o;t("consent",l,u)}else if(s==="get"){const[l,u,h]=o;t("get",l,u,h)}else if(s==="set"){const[l]=o;t("set",l)}else t(s,...o)}catch(l){st.error(l)}}return i}function aP(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=oP(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function lP(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(wf)&&n.src.includes(t))return n;return null}/**
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
 */const uP=30,cP=1e3;class dP{constructor(e={},n=cP){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const $w=new dP;function hP(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function fP(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:hP(n)},i=XR.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let l="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(l=u.error.message)}catch{}throw wt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:l})}return s.json()}async function pP(t,e=$w,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw wt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw wt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new yP;return setTimeout(async()=>{l.abort()},JR),Ww({appId:r,apiKey:i,measurementId:s},o,l,e)}async function Ww(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=$w){var l;const{appId:s,measurementId:o}=t;try{await mP(r,e)}catch(u){if(o)return st.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await fP(t);return i.deleteThrottleMetadata(s),u}catch(u){const h=u;if(!gP(h)){if(i.deleteThrottleMetadata(s),o)return st.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${h==null?void 0:h.message}]`),{appId:s,measurementId:o};throw u}const p=Number((l=h==null?void 0:h.customData)==null?void 0:l.httpStatus)===503?jm(n,i.intervalMillis,uP):jm(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+p,backoffCount:n+1};return i.setThrottleMetadata(s,g),st.debug(`Calling attemptFetch again in ${p} millis`),Ww(t,g,r,i)}}function mP(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(wt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function gP(t){if(!(t instanceof Yt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class yP{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function vP(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function _P(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function wP(){if(R_())try{await P_()}catch(t){return st.warn(wt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return st.warn(wt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function EP(t,e,n,r,i,s,o){const l=pP(t);l.then(w=>{n[w.measurementId]=w.appId,t.options.measurementId&&w.measurementId!==t.options.measurementId&&st.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${w.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(w=>st.error(w)),e.push(l);const u=wP().then(w=>{if(w)return r.getId()}),[h,p]=await Promise.all([l,u]);lP(s)||nP(s,h.measurementId),i("js",new Date);const g=(o==null?void 0:o.config)??{};return g[YR]="firebase",g.update=!0,p!=null&&(g[QR]=p),i("config",h.measurementId,g),h.measurementId}/**
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
 */class TP{constructor(e){this.app=e}_delete(){return delete ji[this.app.options.appId],Promise.resolve()}}let ji={},Zg=[];const ey={};let Ec="dataLayer",IP="gtag",ty,Ef,ny=!1;function SP(){const t=[];if(C_()&&t.push("This is a browser extension environment."),CI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=wt.create("invalid-analytics-context",{errorInfo:e});st.warn(n.message)}}function xP(t,e,n){SP();const r=t.options.appId;if(!r)throw wt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)st.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw wt.create("no-api-key");if(ji[r]!=null)throw wt.create("already-exists",{id:r});if(!ny){rP(Ec);const{wrappedGtag:s,gtagCore:o}=aP(ji,Zg,ey,Ec,IP);Ef=s,ty=o,ny=!0}return ji[r]=EP(t,Zg,ey,e,ty,Ec,n),new TP(t)}function kP(t=Oh()){t=Be(t);const e=ti(t,Ll);return e.isInitialized()?e.getImmediate():AP(t)}function AP(t,e={}){const n=ti(t,Ll);if(n.isInitialized()){const i=n.getImmediate();if(ur(e,n.getOptions()))return i;throw wt.create("already-initialized")}return n.initialize({options:e})}function CP(t,e,n){t=Be(t),_P(Ef,ji[t.app.options.appId],e,n).catch(r=>st.error(r))}function RP(t,e,n,r){t=Be(t),vP(Ef,ji[t.app.options.appId],e,n,r).catch(i=>st.error(i))}const ry="@firebase/analytics",iy="0.10.22";function PP(){un(new Kt(Ll,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return xP(r,i,n)},"PUBLIC")),un(new Kt("analytics-internal",t,"PRIVATE")),bt(ry,iy),bt(ry,iy,"esm2020");function t(e){try{const n=e.getProvider(Ll).getImmediate();return{logEvent:(r,i,s)=>RP(n,r,i,s),setUserProperties:(r,i)=>CP(n,r,i)}}catch(n){throw wt.create("interop-component-reg-failed",{reason:n})}}}PP();const bP={apiKey:"AIzaSyBlbEXZ9R0uPMZbg_Lip6kq8rWVLEndjiU",authDomain:"placeonix.firebaseapp.com",projectId:"placeonix",storageBucket:"placeonix.firebasestorage.app",messagingSenderId:"923570345439",appId:"1:923570345439:web:5b6a89efc297c7f945206a",measurementId:"G-W83XNJN2MF"},Tf=M_(bP),xa=lA(Tf),NP=HC(Tf);kP(Tf);const Hw=$.createContext(null);function sy(t){const e=(t==null?void 0:t.code)||"";return e.includes("auth/email-already-in-use")?"This email is already registered. Please log in instead.":e.includes("auth/invalid-credential")||e.includes("auth/wrong-password")?"Invalid email or password. Please check your details.":e.includes("auth/user-not-found")?"No account found with this email. Please sign up first.":e.includes("auth/weak-password")?"Password should be at least 6 characters.":e.includes("auth/invalid-email")?"Please enter a valid email address.":"Something went wrong. Please try again."}function DP({children:t}){const[e,n]=$.useState(null),[r,i]=$.useState(!0);$.useEffect(()=>Yx(xa,p=>{n(p),i(!1)}),[]);async function s(h,p){try{await Hx(xa,h,p)}catch(g){throw new Error(sy(g))}}async function o({name:h,email:p,password:g,branch:w}){try{const C=await Wx(xa,p,g);await Gx(C.user,{displayName:h});try{await oR(WC(NP,"users",C.user.uid),{name:h,email:p,branch:w,role:"student",placementReadiness:78,currentStreak:0,xp:0,createdAt:nR()})}catch{}}catch(C){throw new Error(sy(C))}}async function l(){await Jx(xa)}const u=$.useMemo(()=>({user:e,loading:r,login:s,signup:o,logout:l}),[e,r]);return d.jsx(Hw.Provider,{value:u,children:t})}function pu(){const t=$.useContext(Hw);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}const OP=[{icon:sI,label:"Dashboard",id:"dashboard"},{icon:eI,label:"Resources",id:"resources"},{icon:nI,label:"Aptitude",id:"aptitude"},{icon:rI,label:"Coding Practice",id:"coding"},{icon:tI,label:"AI Interview",id:"interview"},{icon:iI,label:"Resume & ATS",id:"resume"},{icon:XT,label:"Analytics",id:"analytics"},{icon:cI,label:"Profile",id:"profile"},{icon:lI,label:"Settings",id:"settings"}];function MP({activePage:t,setActivePage:e}){const{logout:n}=pu();return d.jsxs("aside",{className:"sidebar",children:[d.jsxs("div",{className:"sidebar-logo",children:[d.jsx("div",{className:"rocket",children:"P"}),d.jsx("span",{className:"sidebar-logo-text",children:"Placeonix"})]}),d.jsx("nav",{className:"sidebar-nav",children:OP.map(r=>d.jsx(jP,{item:r,active:t===r.id,onClick:()=>e(r.id)},r.id))}),d.jsxs("div",{className:"sidebar-progress-card",children:[d.jsxs("div",{className:"sidebar-progress-header",children:[d.jsx("div",{className:"sidebar-progress-icon",children:d.jsx(uI,{size:16,"aria-hidden":"true"})}),d.jsx("div",{children:d.jsx("div",{className:"sidebar-progress-title",children:"Keep Going!"})})]}),d.jsxs("div",{className:"sidebar-progress-sub",children:["Consistency today",d.jsx("br",{}),"Success tomorrow"]}),d.jsx("div",{className:"sidebar-progress-bar-wrap",children:d.jsx("div",{className:"sidebar-progress-bar-fill",style:{width:"72%"}})}),d.jsx("div",{className:"sidebar-progress-pct",children:"72%"})]}),d.jsx("div",{className:"sidebar-bottom",children:d.jsxs("button",{className:"sidebar-logout",type:"button",onClick:n,children:[d.jsx(E_,{className:"nav-icon",size:17,"aria-hidden":"true"}),d.jsx("span",{children:"Logout"})]})})]})}function jP({item:t,active:e,onClick:n}){const r=t.icon;return d.jsxs("button",{className:`nav-item ${e?"active":""}`,onClick:n,type:"button",children:[d.jsx(r,{className:"nav-icon",size:17,"aria-hidden":"true"}),d.jsx("span",{children:t.label})]})}function LP({onSearch:t}){var l;const{user:e,logout:n}=pu(),[r,i]=$.useState(""),s=(e==null?void 0:e.displayName)||((l=e==null?void 0:e.email)==null?void 0:l.split("@")[0])||"Student",o=s.slice(0,1).toUpperCase();return d.jsxs("header",{className:"topbar",children:[d.jsxs("div",{className:"search-bar",children:[d.jsx(aI,{className:"search-icon",size:17,"aria-hidden":"true"}),d.jsx("input",{type:"text",placeholder:"Search notes, skills, jobs, companies...",value:r,onChange:u=>{i(u.target.value),t&&t(u.target.value)}})]}),d.jsxs("div",{className:"topbar-right",children:[d.jsx("button",{className:"topbar-icon-btn",title:"Toggle theme",type:"button",children:d.jsx(oI,{size:18,"aria-hidden":"true"})}),d.jsxs("button",{className:"topbar-icon-btn",title:"Notifications",type:"button",children:[d.jsx(ZT,{size:18,"aria-hidden":"true"}),d.jsx("span",{className:"notif-badge",children:"3"})]}),d.jsxs("button",{className:"topbar-user",type:"button",onClick:n,title:"Logout",children:[d.jsx("div",{className:"topbar-avatar",children:o}),d.jsxs("span",{className:"topbar-username",children:["Hi ",s]}),d.jsx(E_,{className:"topbar-logout-text",size:15,"aria-hidden":"true"})]})]})]})}function VP(){return d.jsxs("footer",{className:"site-footer",children:[d.jsxs("div",{className:"footer-left",children:["For any queries & issues",d.jsx("br",{}),d.jsx("a",{href:"mailto:prayukthakanchi@gmail.com",children:"prayukthakanchi@gmail.com"})]}),d.jsxs("div",{className:"footer-center",children:["Designed & Developed by ",d.jsx("strong",{style:{color:"#6c3ce1"},children:"kanchi prayuktha"})]}),d.jsxs("div",{className:"footer-right",style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[d.jsx("strong",{style:{fontSize:13,color:"#374151",marginBottom:2},children:"Know More About Me"}),d.jsx("a",{href:"mailto:prayukthakanchi@gmail.com",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"📧 prayukthakanchi@gmail.com"}),d.jsx("a",{href:"https://www.linkedin.com/in/prayuktha-kanchi",target:"_blank",rel:"noreferrer",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"💼 LinkedIn/prayuktha-kanchi"}),d.jsx("a",{href:"https://github.com/prayukthakanchi-tech",target:"_blank",rel:"noreferrer",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"🐙 GitHucb/prayukthakanchi-tech"}),d.jsx("span",{style:{fontSize:12,color:"#9ca3af",marginTop:2},children:"© 2025 Kanchi Prayuktha"})]})]})}function FP({value:t,size:e=52}){const r=2*Math.PI*20,i=r-t/100*r;return d.jsxs("div",{className:"circular-progress",style:{width:e,height:e},children:[d.jsxs("svg",{viewBox:"0 0 52 52",width:e,height:e,children:[d.jsx("circle",{className:"track",cx:"26",cy:"26",r:20}),d.jsx("circle",{className:"fill",cx:"26",cy:"26",r:20,strokeDasharray:r,strokeDashoffset:i})]}),d.jsxs("div",{className:"circular-label",children:[t,"%"]})]})}const UP=[{icon:"💻",name:"CSE",bg:"#eff6ff",iconBg:"#dbeafe"},{icon:"📡",name:"ECE",bg:"#f0fdf4",iconBg:"#dcfce7"},{icon:"⚡",name:"EEE",bg:"#fffbeb",iconBg:"#fef3c7"},{icon:"🖥️",name:"IT",bg:"#f0fdf4",iconBg:"#dcfce7"},{icon:"⚙️",name:"ME",bg:"#f9fafb",iconBg:"#f3f4f6"},{icon:"🏗️",name:"CIVIL",bg:"#fff7ed",iconBg:"#ffedd5"},{icon:"✈️",name:"AERO",bg:"#eff6ff",iconBg:"#dbeafe"},{icon:"🫀",name:"BME",bg:"#fdf2f8",iconBg:"#fce7f3"},{icon:"🧬",name:"BT",bg:"#f0fdf4",iconBg:"#d1fae5"}],zP=[{icon:"📖",label:"Resources",sub:"Study Materials",bg:"#ede9fe",iconBg:"#ddd6fe"},{icon:"🧠",label:"Aptitude",sub:"Practice Now",bg:"#fce7f3",iconBg:"#fbcfe8"},{icon:"🎤",label:"Interview",sub:"Prep Smart",bg:"#fef3c7",iconBg:"#fde68a"},{icon:"💻",label:"Coding",sub:"Practice Code",bg:"#dbeafe",iconBg:"#bfdbfe"}],BP=[{icon:"📘",title:"Digital Electronics",sub:"ECE Notes",tag:"Notes",tagClass:"notes",bg:"#ede9fe"},{icon:"🎙️",title:"Embedded Systems",sub:"Interview Questions",tag:"Interview",tagClass:"interview",bg:"#fce7f3"},{icon:"🧠",title:"Aptitude Shortcuts",sub:"Tips & Tricks",tag:"Aptitude",tagClass:"aptitude",bg:"#ede9fe"}],$P=[{task:"Quantitative Aptitude",time:"30 min",done:!0},{task:"DSA Practice",time:"45 min",done:!0},{task:"Digital Electronics Revision",time:"60 min",done:!0}],WP=[{month:"May",day:"20",title:"TCS Ninja",sub:"Aptitude Test"},{month:"May",day:"24",title:"Infosys",sub:"Virtual Interview"}],HP=[{name:"Data Structures & Algorithms",pct:80,color:"#6c3ce1"},{name:"Aptitude",pct:65,color:"#f97316"},{name:"System Design",pct:45,color:"#3b82f6"},{name:"Communication Skills",pct:70,color:"#22c55e"}];function qP(){return d.jsxs("div",{children:[d.jsxs("section",{className:"hero-section",children:[d.jsxs("div",{className:"hero-text",children:[d.jsx("h1",{children:"Hi Student 👋"}),d.jsx("p",{children:"Let's learn, prepare and get your dream job!"}),d.jsx("button",{className:"btn-primary",children:"Start Learning →"})]}),d.jsx(GP,{})]}),d.jsxs("div",{className:"stats-grid",children:[d.jsxs("div",{className:"stat-card",children:[d.jsx(FP,{value:72}),d.jsxs("div",{className:"stat-info",children:[d.jsx("div",{className:"stat-label",children:"Placement Readiness"}),d.jsx("div",{className:"stat-value",children:"72%"}),d.jsx("div",{className:"stat-sub purple",children:"Keep improving!"})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon-wrap",style:{background:"#dcfce7"},children:"📗"}),d.jsxs("div",{className:"stat-info",children:[d.jsx("div",{className:"stat-label",children:"Skills Completed"}),d.jsx("div",{className:"stat-value",children:"8 / 15"}),d.jsxs("div",{style:{marginTop:6},children:[d.jsx("div",{style:{height:6,background:"#e5e7eb",borderRadius:999,overflow:"hidden"},children:d.jsx("div",{style:{width:"53%",height:"100%",background:"#22c55e",borderRadius:999}})}),d.jsx("div",{style:{fontSize:11,color:"#6b7280",marginTop:3},children:"53% Completed"})]})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon-wrap",style:{background:"#fff7ed"},children:"🔥"}),d.jsxs("div",{className:"stat-info",children:[d.jsx("div",{className:"stat-label",children:"Current Streak"}),d.jsx("div",{className:"stat-value",children:"12 Days"}),d.jsx("div",{className:"stat-sub orange",children:"Best: 18 Days"})]})]}),d.jsxs("div",{className:"stat-card",children:[d.jsx("div",{className:"stat-icon-wrap",style:{background:"#eff6ff"},children:"🎙️"}),d.jsxs("div",{className:"stat-info",children:[d.jsx("div",{className:"stat-label",children:"Mock Interview Score"}),d.jsx("div",{className:"stat-value",children:"80%"}),d.jsx("div",{className:"stat-sub green",children:"Great Performance!"})]})]})]}),d.jsxs("div",{className:"section-header",children:[d.jsx("span",{className:"section-title",children:"Explore By Department"}),d.jsx("span",{className:"view-all-link",children:"View All"})]}),d.jsx("div",{className:"departments-grid",style:{marginBottom:28},children:UP.map(t=>d.jsxs("div",{className:"dept-card",style:{background:t.bg},children:[d.jsx("div",{className:"dept-icon-wrap",style:{background:t.iconBg},children:t.icon}),d.jsx("div",{className:"dept-name",children:t.name})]},t.name))}),d.jsxs("div",{className:"bottom-grid",children:[d.jsxs("div",{children:[d.jsx("div",{className:"section-header",children:d.jsx("span",{className:"section-title",children:"Quick Access"})}),d.jsx("div",{className:"quick-access-grid",children:zP.map(t=>d.jsxs("div",{className:"quick-card",style:{background:t.bg},children:[d.jsx("div",{className:"quick-icon",style:{background:t.iconBg},children:t.icon}),d.jsx("div",{className:"quick-label",children:t.label}),d.jsx("div",{className:"quick-sub",children:t.sub})]},t.label))})]}),d.jsxs("div",{children:[d.jsxs("div",{className:"section-header",children:[d.jsx("span",{className:"section-title",children:"Recommended For You"}),d.jsx("span",{className:"view-all-link",children:"View All"})]}),d.jsx("div",{className:"recommended-list",children:BP.map(t=>d.jsxs("div",{className:"rec-card",children:[d.jsx("div",{className:"rec-thumb",style:{background:t.bg},children:t.icon}),d.jsxs("div",{className:"rec-info",children:[d.jsx("div",{className:"rec-title",children:t.title}),d.jsx("div",{className:"rec-sub",children:t.sub}),d.jsx("span",{className:`rec-tag ${t.tagClass}`,children:t.tag})]}),d.jsx("span",{style:{color:"#9ca3af",fontSize:16},children:"›"})]},t.title))})]})]}),d.jsxs("div",{className:"triple-grid",children:[d.jsxs("div",{className:"plan-card",children:[d.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[d.jsx("span",{className:"section-title",children:"Today's Plan"}),d.jsx("span",{className:"view-all-link",children:"View Plan"})]}),$P.map(t=>d.jsxs("div",{className:"plan-item",children:[d.jsx("div",{className:"plan-check",children:t.done?"✓":""}),d.jsx("div",{className:"plan-text",children:t.task}),d.jsx("div",{className:"plan-time",children:t.time})]},t.task))]}),d.jsxs("div",{className:"calendar-card",children:[d.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[d.jsx("span",{className:"section-title",children:"Placement Calendar"}),d.jsx("span",{className:"view-all-link",children:"View All"})]}),WP.map(t=>d.jsxs("div",{className:"cal-item",children:[d.jsxs("div",{className:"cal-date-box",children:[d.jsx("div",{className:"cal-month",children:t.month}),d.jsx("div",{className:"cal-day",children:t.day})]}),d.jsxs("div",{className:"cal-info",children:[d.jsx("div",{className:"cal-title",children:t.title}),d.jsx("div",{className:"cal-sub",children:t.sub})]}),d.jsx("span",{className:"cal-arrow",children:"›"})]},t.title)),d.jsx("div",{style:{marginTop:14,textAlign:"center"},children:d.jsx("button",{style:{width:"100%",padding:"9px",border:"1.5px dashed #d1d5db",borderRadius:10,background:"none",color:"#9ca3af",fontSize:13,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"},onMouseOver:t=>t.target.style.borderColor="#6c3ce1",onMouseOut:t=>t.target.style.borderColor="#d1d5db",children:"+ Add Event"})})]}),d.jsxs("div",{className:"skill-card",children:[d.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[d.jsx("span",{className:"section-title",children:"Skill Progress"}),d.jsx("span",{className:"view-all-link",children:"View All"})]}),HP.map(t=>d.jsxs("div",{className:"skill-item",children:[d.jsxs("div",{className:"skill-item-header",children:[d.jsx("span",{className:"skill-name",children:t.name}),d.jsxs("span",{className:"skill-pct",children:[t.pct,"%"]})]}),d.jsx("div",{className:"skill-bar-wrap",children:d.jsx("div",{className:"skill-bar-fill",style:{width:`${t.pct}%`,background:t.color}})})]},t.name))]})]})]})}function GP(){return d.jsx("div",{className:"hero-illustration","aria-hidden":"true",children:d.jsxs("svg",{width:"320",height:"180",viewBox:"0 0 320 180",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[d.jsx("rect",{x:"80",y:"90",width:"130",height:"82",rx:"8",fill:"#6c3ce1",opacity:"0.15"}),d.jsx("rect",{x:"86",y:"96",width:"118",height:"70",rx:"5",fill:"#6c3ce1",opacity:"0.25"}),d.jsx("rect",{x:"92",y:"102",width:"106",height:"58",rx:"3",fill:"white",opacity:"0.9"}),d.jsx("rect",{x:"100",y:"112",width:"60",height:"5",rx:"2",fill:"#6c3ce1",opacity:"0.4"}),d.jsx("rect",{x:"100",y:"121",width:"80",height:"4",rx:"2",fill:"#9ca3af",opacity:"0.4"}),d.jsx("rect",{x:"100",y:"129",width:"70",height:"4",rx:"2",fill:"#9ca3af",opacity:"0.3"}),d.jsx("rect",{x:"100",y:"137",width:"50",height:"4",rx:"2",fill:"#6c3ce1",opacity:"0.3"}),d.jsx("rect",{x:"70",y:"172",width:"150",height:"6",rx:"3",fill:"#6c3ce1",opacity:"0.2"}),d.jsx("circle",{cx:"220",cy:"60",r:"22",fill:"#6c3ce1",opacity:"0.2"}),d.jsx("circle",{cx:"220",cy:"55",r:"14",fill:"#6c3ce1",opacity:"0.35"}),d.jsx("path",{d:"M196 110 Q210 90 220 88 Q230 90 244 110",stroke:"#6c3ce1",strokeWidth:"3",fill:"none",opacity:"0.3"}),d.jsx("rect",{x:"240",y:"30",width:"68",height:"52",rx:"8",fill:"white",opacity:"0.85",filter:"drop-shadow(0 2px 8px rgba(108,60,225,0.15))"}),d.jsx("polyline",{points:"250,65 260,52 270,58 280,42 290,48 300,36",stroke:"#6c3ce1",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),d.jsx("circle",{cx:"300",cy:"36",r:"3",fill:"#6c3ce1"}),d.jsx("rect",{x:"14",y:"50",width:"52",height:"22",rx:"11",fill:"white",opacity:"0.85",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.08))"}),d.jsx("text",{x:"40",y:"65",textAnchor:"middle",fontSize:"10",fill:"#6c3ce1",fontWeight:"700",fontFamily:"DM Sans",children:"✓ DSA"}),d.jsx("rect",{x:"22",y:"120",width:"48",height:"22",rx:"11",fill:"white",opacity:"0.85",filter:"drop-shadow(0 2px 6px rgba(0,0,0,0.08))"}),d.jsx("text",{x:"46",y:"135",textAnchor:"middle",fontSize:"10",fill:"#f97316",fontWeight:"700",fontFamily:"DM Sans",children:"🔥 12d"}),d.jsx("text",{x:"188",y:"30",fontSize:"22",children:"🚀"}),d.jsx("ellipse",{cx:"60",cy:"168",rx:"18",ry:"8",fill:"#22c55e",opacity:"0.2"}),d.jsx("path",{d:"M60 165 Q55 148 50 140",stroke:"#22c55e",strokeWidth:"2",fill:"none",opacity:"0.5"}),d.jsx("path",{d:"M60 165 Q65 148 70 140",stroke:"#22c55e",strokeWidth:"2",fill:"none",opacity:"0.5"}),d.jsx("path",{d:"M60 165 Q60 150 60 138",stroke:"#22c55e",strokeWidth:"2",fill:"none",opacity:"0.5"}),d.jsx("ellipse",{cx:"50",cy:"140",rx:"8",ry:"5",fill:"#22c55e",opacity:"0.4",transform:"rotate(-20,50,140)"}),d.jsx("ellipse",{cx:"70",cy:"140",rx:"8",ry:"5",fill:"#22c55e",opacity:"0.4",transform:"rotate(20,70,140)"}),d.jsx("ellipse",{cx:"60",cy:"137",rx:"7",ry:"5",fill:"#22c55e",opacity:"0.4"})]})})}function KP({title:t,icon:e,description:n}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",gap:16},children:[d.jsx("div",{style:{width:80,height:80,borderRadius:20,background:"linear-gradient(135deg, #ede9fe, #ddd6fe)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36},children:e}),d.jsx("h2",{style:{fontFamily:"Syne, sans-serif",fontSize:24,fontWeight:800,color:"#111827",marginBottom:4},children:t}),d.jsx("p",{style:{color:"#6b7280",maxWidth:380,lineHeight:1.6,fontSize:14},children:n||`The ${t} section is coming in the next step. We're building this feature carefully to ensure the best experience.`}),d.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",background:"#ede9fe",borderRadius:999,color:"#6c3ce1",fontSize:13,fontWeight:600},children:"🔨 Coming in Step 2"})]})}const Js={quant:[{id:1,q:"A train 125m long passes a pole in 5 seconds. What is the speed of the train?",options:["25 m/s","30 m/s","20 m/s","15 m/s"],ans:0,explanation:"Speed = Distance / Time = 125 / 5 = 25 m/s"},{id:2,q:"If 20% of a number is 80, what is 35% of the number?",options:["120","140","160","180"],ans:1,explanation:"20% = 80 → Number = 400. 35% of 400 = 140"},{id:3,q:"A shopkeeper buys an item for ₹800 and sells it for ₹1000. What is the profit percentage?",options:["20%","25%","15%","30%"],ans:1,explanation:"Profit = 200. Profit% = (200/800) × 100 = 25%"},{id:4,q:"The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?",options:["12","15","18","20"],ans:2,explanation:"Boys = (3/5) × 30 = 18"},{id:5,q:"What is the compound interest on ₹10,000 at 10% p.a. for 2 years?",options:["₹2000","₹2100","₹1900","₹2500"],ans:1,explanation:"CI = 10000 × (1.1)² - 10000 = 12100 - 10000 = ₹2100"},{id:6,q:"A can do a piece of work in 10 days, B can do it in 15 days. In how many days can they finish it together?",options:["5 days","6 days","8 days","12 days"],ans:1,explanation:"Combined rate = 1/10 + 1/15 = 1/6. Days = 6"},{id:7,q:"What is the LCM of 12, 18, and 24?",options:["36","48","72","144"],ans:2,explanation:"LCM(12,18,24) = 72"},{id:8,q:"The average of 5 numbers is 30. If one number is removed, the average becomes 25. What was the removed number?",options:["50","55","45","60"],ans:0,explanation:"Sum of 5 = 150. Sum of 4 = 100. Removed = 50"}],logical:[{id:1,q:"In a certain code, MANGO is written as NBOHR. How is APPLE written in that code?",options:["BQQMF","ARQMF","BQPMF","BRQNF"],ans:0,explanation:"Each letter is shifted by +1. A→B, P→Q, P→Q, L→M, E→F = BQQMF"},{id:2,q:"Find the missing number: 2, 6, 12, 20, 30, ?",options:["40","42","44","46"],ans:1,explanation:"Differences: 4,6,8,10,12. Next = 30+12 = 42"},{id:3,q:"If all cats are dogs and some dogs are rats, which conclusion is definite?",options:["Some cats are rats","All dogs are cats","Some cats are not rats","Some cats are dogs"],ans:3,explanation:"Since all cats are dogs, some cats are definitely dogs."},{id:4,q:"A is the father of B. B is the sister of C. C is the mother of D. What is A to D?",options:["Uncle","Grandfather","Father","Cousin"],ans:1,explanation:"A→B→C→D. A is father of B (mother of D), so A is maternal grandfather of D."},{id:5,q:'Which number replaces "?" in: 3, 7, 15, 31, ?',options:["47","53","63","61"],ans:2,explanation:"Pattern: ×2+1. 3→7→15→31→63"},{id:6,q:"Arrange in meaningful order: (1) Sentence (2) Letter (3) Word (4) Paragraph",options:["2,3,1,4","1,2,3,4","3,2,1,4","2,1,3,4"],ans:0,explanation:"Letter → Word → Sentence → Paragraph (2,3,1,4)"},{id:7,q:"If FRIEND is coded as HUMJTK, then CANDLE is coded as?",options:["EDRPOI","EDRPNF","DCQPMI","FCPFNH"],ans:0,explanation:"Each letter is shifted by +2. C+2=E, A+2=C... = EDRPOI"},{id:8,q:`Pointing to a girl, Ram says "She is the daughter of my grandfather's only son." How is the girl related to Ram?`,options:["Sister","Cousin","Niece","Daughter"],ans:0,explanation:"Grandfather's only son = Ram's father. Father's daughter = Ram's sister."}],verbal:[{id:1,q:"Choose the word most similar in meaning to EPHEMERAL:",options:["Eternal","Transient","Permanent","Robust"],ans:1,explanation:"Ephemeral means lasting for a very short time. Transient = passing quickly."},{id:2,q:"Choose the ANTONYM of BENEVOLENT:",options:["Kind","Generous","Malevolent","Charitable"],ans:2,explanation:"Benevolent = kind/generous. Antonym = Malevolent (wishing harm)."},{id:3,q:"Fill the blank: The manager was ______ about the team's performance.",options:["elated","apathetic","dubious","skeptical"],ans:0,explanation:'"Elated" means extremely happy/excited, fitting positive context.'},{id:4,q:"Identify the grammatically correct sentence:",options:["She don't know the answer.","They was playing cricket.","He has been working since morning.","I goes to school daily."],ans:2,explanation:'"Has been working since" is the correct present perfect continuous form.'},{id:5,q:"Choose the word that best fits: The new policy was met with widespread _______ from employees.",options:["approval","opposition","indifference","celebration"],ans:1,explanation:'"Opposition" means resistance/disagreement, fitting "met with" negative context.'},{id:6,q:"PAUCITY means:",options:["Abundance","Scarcity","Clarity","Simplicity"],ans:1,explanation:"Paucity = scarcity, lack of something."},{id:7,q:"Choose the correct spelling:",options:["Accomodation","Accommodation","Acommodation","Acomodation"],ans:1,explanation:"Correct: Accommodation (double c, double m)."},{id:8,q:'The idiom "bite the bullet" means:',options:["To eat quickly","To endure a painful situation","To be aggressive","To make a quick decision"],ans:1,explanation:"To bite the bullet = to endure a painful or difficult situation bravely."}]},qw=[{id:"quant",label:"Quantitative",icon:"🔢",color:"#6c3ce1",bg:"#ede9fe",desc:"8 questions on numbers, percentages, profit/loss, time & work, averages"},{id:"logical",label:"Logical Reasoning",icon:"🧩",color:"#f97316",bg:"#fff7ed",desc:"8 questions on coding-decoding, series, syllogisms, blood relations"},{id:"verbal",label:"Verbal Ability",icon:"📝",color:"#3b82f6",bg:"#eff6ff",desc:"8 questions on synonyms, antonyms, grammar, reading comprehension"}];function Vd({q:t,index:e,submitted:n,userAnswer:r,onAnswer:i}){const s=r!==void 0,o=r===t.ans;return d.jsxs("div",{style:{background:"#fff",border:`1.5px solid ${n&&o?"#86efac":n&&s&&!o?"#fca5a5":"var(--card-border)"}`,borderRadius:14,padding:"20px 22px",marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"border-color 0.2s"},children:[d.jsxs("div",{style:{display:"flex",gap:12,marginBottom:14},children:[d.jsx("span",{style:{width:26,height:26,borderRadius:999,background:n?o&&s?"#22c55e":!o&&s?"#ef4444":"#e5e7eb":"var(--purple-soft)",color:n?s?"#fff":"var(--text-muted)":"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0},children:n&&s?o?"✓":"✗":e+1}),d.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)",lineHeight:1.6},children:t.q})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:t.options.map((l,u)=>{let h="#f9fafb",p="#e5e7eb",g="var(--text-primary)";return n?u===t.ans?(h="#dcfce7",p="#86efac",g="#166534"):u===r&&u!==t.ans&&(h="#fee2e2",p="#fca5a5",g="#991b1b"):r===u&&(h="var(--purple-xsoft)",p="var(--purple-primary)",g="var(--purple-primary)"),d.jsxs("button",{disabled:n,onClick:()=>i(t.id,u),style:{padding:"9px 14px",border:`1.5px solid ${p}`,borderRadius:10,background:h,color:g,fontSize:13.5,fontFamily:"inherit",fontWeight:500,cursor:n?"default":"pointer",textAlign:"left",transition:"all 0.15s",lineHeight:1.4},onMouseEnter:w=>{!n&&r!==u&&(w.currentTarget.style.borderColor="var(--purple-primary)")},onMouseLeave:w=>{!n&&r!==u&&(w.currentTarget.style.borderColor="#e5e7eb")},children:[d.jsxs("span",{style:{fontWeight:700,marginRight:6},children:[String.fromCharCode(65+u),"."]}),l]},u)})}),n&&d.jsxs("div",{style:{marginTop:12,padding:"10px 14px",background:"#f0fdf4",borderRadius:10,border:"1px solid #bbf7d0",fontSize:13,color:"#166534",lineHeight:1.6},children:["💡 ",d.jsx("strong",{children:"Explanation:"})," ",t.explanation]})]})}function QP({sectionId:t,onBack:e}){const n=Js[t],r=qw.find(C=>C.id===t),[i,s]=$.useState({}),[o,l]=$.useState(!1),[u,h]=$.useState(null);function p(C,P){o||s(D=>({...D,[C]:P}))}function g(){const C=n.reduce((P,D)=>P+(i[D.id]===D.ans?1:0),0);h(C),l(!0),window.scrollTo({top:0,behavior:"smooth"})}function w(){s({}),l(!1),h(null)}return d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[d.jsx("button",{onClick:e,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:"← Back"}),d.jsxs("div",{children:[d.jsxs("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:20,color:"var(--text-primary)"},children:[r.icon," ",r.label]}),d.jsxs("p",{style:{fontSize:13,color:"var(--text-muted)"},children:[n.length," questions"]})]})]}),o&&d.jsxs("div",{style:{background:u>=6?"#dcfce7":u>=4?"#fef3c7":"#fee2e2",border:`1.5px solid ${u>=6?"#86efac":u>=4?"#fde68a":"#fca5a5"}`,borderRadius:14,padding:"20px 24px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12},children:[d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",marginBottom:3},children:u>=6?"🎉 Great Job!":u>=4?"👍 Keep Practicing!":"📚 Need More Practice"}),d.jsxs("div",{style:{fontSize:14,color:"var(--text-secondary)"},children:["You scored ",d.jsxs("strong",{children:[u,"/",n.length]})," — ",Math.round(u/n.length*100),"% correct"]})]}),d.jsx("button",{onClick:w,style:{padding:"10px 22px",background:"var(--purple-primary)",color:"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:14,fontWeight:700,cursor:"pointer"},children:"Try Again"})]}),n.map((C,P)=>d.jsx(Vd,{q:C,index:P,submitted:o,userAnswer:i[C.id],onAnswer:p},C.id)),!o&&d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8,flexWrap:"wrap",gap:12},children:[d.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:[Object.keys(i).length," of ",n.length," answered"]}),d.jsx("button",{onClick:g,disabled:Object.keys(i).length===0,style:{padding:"12px 32px",background:Object.keys(i).length===0?"#e5e7eb":"var(--purple-primary)",color:Object.keys(i).length===0?"#9ca3af":"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:15,fontWeight:700,cursor:Object.keys(i).length===0?"not-allowed":"pointer",transition:"all 0.2s"},children:"Submit Answers →"})]})]})}function YP({onBack:t}){const e=[...Js.quant.slice(0,5),...Js.logical.slice(0,5),...Js.verbal.slice(0,5)],n=15*60,[r,i]=$.useState({}),[s,o]=$.useState(!1),[l,u]=$.useState(null),[h,p]=$.useState(n),g=$.useCallback(()=>{const v=e.reduce((_,b)=>_+(r[b.id+b.q.slice(0,3)]===b.ans?1:0),0);u(v),o(!0)},[r,e]);$.useEffect(()=>{if(s)return;const v=setInterval(()=>{p(_=>_<=1?(clearInterval(v),g(),0):_-1)},1e3);return()=>clearInterval(v)},[s,g]);function w(v,_,b){s||i(M=>({...M,[_]:b}))}const C=String(Math.floor(h/60)).padStart(2,"0"),P=String(h%60).padStart(2,"0"),D=h/n*100,F=h<120?"#ef4444":h<300?"#f97316":"#22c55e",k=["Quantitative (Q1–5)","Logical Reasoning (Q6–10)","Verbal Ability (Q11–15)"];return d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[d.jsx("button",{onClick:t,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:"← Back"}),d.jsx("div",{style:{flex:1},children:d.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:20,color:"var(--text-primary)"},children:"⏱️ Mock Test — 15 Questions"})}),!s&&d.jsxs("div",{style:{textAlign:"center",background:"#fff",border:`2px solid ${F}`,borderRadius:12,padding:"8px 18px",minWidth:90},children:[d.jsxs("div",{style:{fontSize:20,fontFamily:"Urbanist, sans-serif",fontWeight:900,color:F},children:[C,":",P]}),d.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontWeight:600},children:"remaining"}),d.jsx("div",{style:{height:4,background:"#e5e7eb",borderRadius:999,marginTop:5,overflow:"hidden"},children:d.jsx("div",{style:{width:`${D}%`,height:"100%",background:F,borderRadius:999,transition:"width 1s linear"}})})]})]}),s&&d.jsxs("div",{style:{background:l>=10?"#dcfce7":l>=7?"#fef3c7":"#fee2e2",border:`1.5px solid ${l>=10?"#86efac":l>=7?"#fde68a":"#fca5a5"}`,borderRadius:14,padding:"20px 24px",marginBottom:20},children:[d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,marginBottom:4},children:l>=10?"🏆 Excellent!":l>=7?"👍 Good effort!":"📚 Keep Practicing!"}),d.jsxs("div",{style:{fontSize:14,color:"var(--text-secondary)"},children:["Score: ",d.jsxs("strong",{children:[l,"/15"]})," — ",Math.round(l/15*100),"%"]})]}),e.map((v,_)=>{const b=v.id+v.q.slice(0,3);return _===0||_===5||_===10?d.jsxs(yy.Fragment,{children:[d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:14,color:"var(--purple-primary)",background:"var(--purple-xsoft)",padding:"8px 16px",borderRadius:10,marginBottom:12,marginTop:_>0?20:0},children:k[Math.floor(_/5)]}),d.jsx(Vd,{q:v,index:_,submitted:s,userAnswer:r[b],onAnswer:(M,j)=>w(v.id,b,j)})]},b):d.jsx(Vd,{q:v,index:_,submitted:s,userAnswer:r[b],onAnswer:(M,j)=>w(v.id,b,j)},b)}),!s&&d.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:8},children:d.jsx("button",{onClick:g,style:{padding:"12px 32px",background:"var(--purple-primary)",color:"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:15,fontWeight:700,cursor:"pointer"},children:"Submit Test →"})})]})}function JP(){const[t,e]=$.useState(null);return t==="mock"?d.jsx(YP,{onBack:()=>e(null)}):t?d.jsx(QP,{sectionId:t,onBack:()=>e(null)}):d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:28},children:[d.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:26,color:"var(--text-primary)",marginBottom:4},children:"🧠 Aptitude Practice"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:14},children:"Practice quantitative, logical, and verbal aptitude — the way companies test it."})]}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:14,marginBottom:28},children:[{icon:"📚",label:"Total Questions",value:"24",color:"#ede9fe"},{icon:"🏢",label:"Companies Covered",value:"TCS · Infosys · Wipro · Accenture",color:"#dcfce7",small:!0},{icon:"🎯",label:"Topics",value:"3 Sections",color:"#dbeafe"}].map(n=>d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"16px 20px",display:"flex",gap:14,alignItems:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[d.jsx("div",{style:{width:42,height:42,borderRadius:12,background:n.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:n.icon}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:n.small?"inherit":"Urbanist, sans-serif",fontWeight:800,fontSize:n.small?12:22,color:"var(--text-primary)",lineHeight:1.2},children:n.value}),d.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:n.label})]})]},n.label))}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16,marginBottom:20},children:[qw.map(n=>d.jsxs("div",{onClick:()=>e(n.id),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"22px",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.borderColor=n.color,r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow=`0 8px 24px ${n.color}22`},onMouseLeave:r=>{r.currentTarget.style.borderColor="var(--card-border)",r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.05)"},children:[d.jsx("div",{style:{width:52,height:52,borderRadius:14,background:n.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:14},children:n.icon}),d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:17,color:"var(--text-primary)",marginBottom:6},children:n.label}),d.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",lineHeight:1.6,marginBottom:16},children:n.desc}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsxs("span",{style:{fontSize:12,fontWeight:700,color:n.color,background:n.bg,padding:"3px 10px",borderRadius:999},children:[Js[n.id].length," Questions"]}),d.jsx("span",{style:{color:n.color,fontWeight:700,fontSize:15},children:"Start →"})]})]},n.id)),d.jsxs("div",{onClick:()=>e("mock"),style:{background:"linear-gradient(135deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:16,padding:"22px",cursor:"pointer",boxShadow:"0 4px 16px rgba(108,60,225,0.25)",transition:"all 0.2s"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-3px)",n.currentTarget.style.boxShadow="0 12px 32px rgba(108,60,225,0.35)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 16px rgba(108,60,225,0.25)"},children:[d.jsx("div",{style:{width:52,height:52,borderRadius:14,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:14},children:"⏱️"}),d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:17,color:"#fff",marginBottom:6},children:"Full Mock Test"}),d.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.8)",lineHeight:1.6,marginBottom:16},children:"15 questions across all sections with a 15-minute timer. Simulates real placement aptitude tests."}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[d.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"3px 10px",borderRadius:999},children:"15 min · 15 Q"}),d.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"Start →"})]})]})]}),d.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:14,padding:"18px 22px"},children:[d.jsx("div",{style:{fontWeight:800,fontFamily:"Urbanist, sans-serif",fontSize:15,color:"#92400e",marginBottom:10},children:"💡 Preparation Tips"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:8},children:["Practice IndiaBix daily for aptitude","Learn shortcut formulas for quant","Read English newspapers for verbal","Do puzzle solving for logical reasoning","Time yourself — 1.5 min per question","Review wrong answers carefully"].map(n=>d.jsxs("div",{style:{fontSize:13,color:"#78350f",display:"flex",gap:6,alignItems:"flex-start"},children:[d.jsx("span",{children:"•"}),d.jsx("span",{children:n})]},n))})]})]})}const If=["CSE","ECE","EEE","IT","ME","CIVIL","AERO","BME","BT"],Sf={CSE:["Software Engineer","Frontend Developer","Backend Developer","Full Stack Developer","Data Engineer","DevOps Engineer"],ECE:["Embedded Systems Engineer","VLSI Engineer","RF Engineer","Signal Processing Engineer","IoT Engineer"],EEE:["Electrical Engineer","Power Systems Engineer","Control Systems Engineer","Instrumentation Engineer"],IT:["IT Analyst","Network Engineer","System Administrator","Software Developer","Cloud Engineer"],ME:["Mechanical Design Engineer","Manufacturing Engineer","Thermal Engineer","Automobile Engineer"],CIVIL:["Structural Engineer","Site Engineer","Project Engineer","Geotechnical Engineer"],AERO:["Aeronautical Engineer","Propulsion Engineer","Avionics Engineer"],BME:["Biomedical Engineer","Clinical Engineer","R&D Engineer","Quality Engineer"],BT:["Biotech Research Associate","Process Engineer","Quality Control Analyst"]},xf=["TCS","Infosys","Wipro","Accenture","Cognizant","Amazon","Google","Microsoft","Qualcomm","Bosch","Medtronic","Biocon","L&T","ISRO","Other"],kf=["Fresher (0 exp)","Intern","1–2 years exp"],jt=7;async function Vr(t,e){var i;return((i=(await(await fetch("https://api.anthropic.com/v1/messages",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:"claude-sonnet-4-20250514",max_tokens:1500,system:e,messages:t})})).json()).content)==null?void 0:i.map(s=>s.text||"").join(""))||""}function Rt({label:t,value:e,onChange:n,options:r,placeholder:i}){return d.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[d.jsx("label",{style:{fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:t}),d.jsxs("select",{value:e,onChange:s=>n(s.target.value),style:{padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:10,fontSize:14,fontFamily:"inherit",background:"#fff",color:"var(--text-primary)",outline:"none",cursor:"pointer",transition:"border-color 0.2s"},onFocus:s=>s.target.style.borderColor="var(--purple-primary)",onBlur:s=>s.target.style.borderColor="var(--card-border)",children:[d.jsx("option",{value:"",children:i||"Select..."}),r.map(s=>d.jsx("option",{value:s,children:s},s))]})]})}function vn({onClick:t,disabled:e,loading:n,children:r,outline:i,small:s}){const o={fontFamily:"inherit",fontWeight:700,cursor:e||n?"not-allowed":"pointer",borderRadius:999,transition:"all 0.2s",border:"none"},l=s?{padding:"8px 18px",fontSize:13}:{padding:"12px 28px",fontSize:14},u=i?{background:"transparent",color:"var(--purple-primary)",border:"1.5px solid var(--purple-primary)"}:e||n?{background:"#e5e7eb",color:"#9ca3af"}:{background:"var(--purple-primary)",color:"#fff"};return d.jsx("button",{onClick:t,disabled:e||n,style:{...o,...l,...u},onMouseEnter:h=>{!e&&!n&&(h.currentTarget.style.opacity="0.85")},onMouseLeave:h=>h.currentTarget.style.opacity="1",children:n?"⏳ Thinking...":r})}function XP({onClick:t}){return d.jsx("button",{onClick:t,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)",transition:"all 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="var(--purple-primary)",onMouseLeave:e=>e.currentTarget.style.borderColor="var(--card-border)",children:"← Back"})}function xo({text:t}){return d.jsx("div",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.8},children:t.split(`
`).map((e,n)=>e.startsWith("## ")?d.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:17,color:"var(--text-primary)",margin:"16px 0 8px"},children:e.slice(3)},n):e.startsWith("### ")?d.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:15,color:"var(--text-primary)",margin:"14px 0 6px"},children:e.slice(4)},n):e.startsWith("- ")||e.startsWith("• ")?d.jsxs("div",{style:{display:"flex",gap:8,marginBottom:3},children:[d.jsx("span",{style:{color:"var(--purple-primary)",fontWeight:700,flexShrink:0},children:"•"}),d.jsx("span",{dangerouslySetInnerHTML:{__html:e.slice(2).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},n):e.trim()===""?d.jsx("div",{style:{height:6}},n):d.jsx("p",{style:{margin:"2px 0"},dangerouslySetInnerHTML:{__html:e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}},n))})}function In({title:t,subtitle:e,onBack:n}){return d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:28},children:[d.jsx(XP,{onClick:n}),d.jsxs("div",{children:[d.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",lineHeight:1.2},children:t}),e&&d.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:2},children:e})]})]})}function ZP({onBack:t}){const[e,n]=$.useState("setup"),[r,i]=$.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)"}),[s,o]=$.useState([]),[l,u]=$.useState([]),[h,p]=$.useState(""),[g,w]=$.useState(0),[C,P]=$.useState(""),[D,F]=$.useState(!1),[k,v]=$.useState(""),[_,b]=$.useState(!1),M=$.useRef(null);$.useEffect(()=>{var E;(E=M.current)==null||E.scrollIntoView({behavior:"smooth"})},[s,D]);const j=`You are an interview preparation coach. You are running a ${jt}-question diagnostic quiz for a ${r.level} candidate preparing for ${r.company} interview for the role of ${r.role} (${r.dept} branch).

Rules:
- Ask ONE question at a time
- After the candidate answers, give a SHORT encouraging response (1 sentence), then ask the NEXT question
- Questions should cover: self-introduction, technical basics, projects, strengths/weaknesses, situational, company-specific
- After exactly ${jt} questions and answers, write exactly "QUIZ_DONE" on its own line and nothing else

Format: Just the question text, no numbering. Keep it conversational.`;async function T(){if(!(!r.company||!r.dept||!r.role)){F(!0),n("quiz"),o([]),u([]),w(0);try{const E=await Vr([{role:"user",content:"Start the quiz. Ask the first question."}],j);p(E),o([{role:"assistant",content:E}]),w(1)}catch{p("Failed to start. Please check your connection.")}F(!1)}}async function y(){if(!C.trim()||D)return;const E=C.trim();P("");const A=[...l,E];u(A);const S=[...s,{role:"user",content:E}];o(S),F(!0);try{const pe=S.map($e=>({role:$e.role,content:$e.content})),et=await Vr(pe,j);et.includes("QUIZ_DONE")?(o($e=>[...$e,{role:"assistant",content:"✅ Quiz complete! Generating your personalised prep plan now..."}]),n("plan"),await I(A)):(o($e=>[...$e,{role:"assistant",content:et}]),p(et),w($e=>$e+1))}catch{o(pe=>[...pe,{role:"assistant",content:"⚠️ Connection issue. Please try again."}])}F(!1)}async function I(E){b(!0),v("");try{const A=E.map((et,$e)=>`Q${$e+1}: ${et}`).join(`
`),S=`Based on this diagnostic quiz, generate a complete interview preparation plan.

Candidate profile:
- Company: ${r.company}
- Branch: ${r.dept}
- Role: ${r.role}
- Level: ${r.level}

Their quiz answers (${E.length} questions):
${A}

Generate a detailed, personalised prep plan with these sections:
## 🎯 Profile Assessment
## 📚 Topics to Study (prioritised based on their answers)
## ❓ Top 10 Questions They'll Likely Face
## 💻 Technical Prep (specific to ${r.dept} and ${r.role})
## 🎤 HR Round Strategy
## 📅 7-Day Study Schedule
## ⚡ ${r.company}-Specific Tips

Be specific to their answers — address their weak areas and build on their strengths.`,pe=await Vr([{role:"user",content:S}],"You are an expert placement coach for Indian engineering students. Give practical, actionable, specific advice. Use ## for sections, - for bullets, **bold** for key terms.");v(pe)}catch{v("Failed to generate plan. Please refresh and try again.")}b(!1)}function x(E){E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),y())}return e==="setup"?d.jsxs("div",{children:[d.jsx(In,{title:"📚 Prepare for Interview",subtitle:"Answer a short quiz — then get your full personalised prep plan",onBack:t}),d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20},children:[d.jsx(Rt,{label:"Company *",value:r.company,onChange:E=>i(A=>({...A,company:E})),options:xf,placeholder:"Select company"}),d.jsx(Rt,{label:"Your Branch *",value:r.dept,onChange:E=>i(A=>({...A,dept:E,role:""})),options:If,placeholder:"Select branch"}),d.jsx(Rt,{label:"Role *",value:r.role,onChange:E=>i(A=>({...A,role:E})),options:Sf[r.dept]||[],placeholder:r.dept?"Select role":"Select branch first"}),d.jsx(Rt,{label:"Level",value:r.level,onChange:E=>i(A=>({...A,level:E})),options:kf})]}),d.jsxs("div",{style:{background:"var(--purple-xsoft)",border:"1px solid var(--purple-soft)",borderRadius:12,padding:"14px 16px",marginBottom:22},children:[d.jsx("div",{style:{fontWeight:700,fontSize:13,color:"var(--purple-primary)",marginBottom:8},children:"How this works"}),d.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[`1️⃣  AI asks you ${jt} quick questions about yourself`,"2️⃣  You answer naturally — no right or wrong answers","3️⃣  AI generates a full personalised prep plan at the end"].map(E=>d.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)"},children:E},E))})]}),d.jsx(vn,{onClick:T,disabled:!r.company||!r.dept||!r.role,loading:D,children:"🚀 Start Quiz"})]})]}):e==="plan"?d.jsxs("div",{children:[d.jsx(In,{title:"✨ Your Personalised Prep Plan",subtitle:`${r.company} · ${r.role} · ${r.dept}`,onBack:()=>n("setup")}),d.jsx("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:_?d.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"var(--text-muted)"},children:[d.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🤖"}),d.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:4,color:"var(--text-primary)"},children:"Building your personalised plan..."}),d.jsx("div",{style:{fontSize:13,marginBottom:20},children:"Analysing your quiz answers — takes about 15 seconds"}),d.jsx("div",{style:{height:5,background:"#f3f4f6",borderRadius:999,overflow:"hidden",maxWidth:300,margin:"0 auto"},children:d.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg, var(--purple-primary), #8b5cf6)",borderRadius:999,width:"70%",animation:"shimmer 1.5s infinite alternate"}})})]}):d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:22,paddingBottom:16,borderBottom:"1px solid #f3f4f6"},children:[d.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--purple-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:"🤖"}),d.jsxs("div",{style:{flex:1},children:[d.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:["AI Prep Plan — ",r.company," · ",r.role]}),d.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:["Based on your ",jt,"-question diagnostic quiz"]})]}),d.jsx(vn,{small:!0,outline:!0,onClick:()=>{n("setup"),v(""),o([]),u([])},children:"🔄 Redo"})]}),d.jsx(xo,{text:k})]})}),d.jsx("style",{children:"@keyframes shimmer { from { width: 40% } to { width: 90% } }"})]}):d.jsxs("div",{children:[d.jsx(In,{title:`📝 Diagnostic Quiz — ${r.company}`,subtitle:`Question ${Math.min(g,jt)} of ${jt} · ${r.role}`,onBack:()=>n("setup")}),d.jsxs("div",{style:{marginBottom:20},children:[d.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[d.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600},children:"Quiz Progress"}),d.jsxs("span",{style:{fontSize:12,color:"var(--purple-primary)",fontWeight:700},children:[Math.min(g,jt),"/",jt]})]}),d.jsx("div",{style:{height:6,background:"#f3f4f6",borderRadius:999,overflow:"hidden"},children:d.jsx("div",{style:{height:"100%",background:"var(--purple-primary)",borderRadius:999,width:`${Math.min(g,jt)/jt*100}%`,transition:"width 0.4s ease"}})})]}),d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:"16px 16px 0 0",padding:"20px",minHeight:340,maxHeight:420,overflowY:"auto",display:"flex",flexDirection:"column",gap:14},children:[s.map((E,A)=>d.jsxs("div",{style:{display:"flex",gap:10,flexDirection:E.role==="user"?"row-reverse":"row",alignItems:"flex-start"},children:[d.jsx("div",{style:{width:32,height:32,borderRadius:999,flexShrink:0,background:E.role==="user"?"var(--purple-primary)":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:E.role==="user"?"👤":"🤖"}),d.jsx("div",{style:{maxWidth:"78%",padding:"11px 15px",borderRadius:E.role==="user"?"16px 4px 16px 16px":"4px 16px 16px 16px",background:E.role==="user"?"var(--purple-primary)":"#f9fafb",border:E.role==="user"?"none":"1px solid var(--card-border)"},children:E.role==="user"?d.jsx("p",{style:{margin:0,fontSize:14,color:"#fff",lineHeight:1.6},children:E.content}):d.jsx(xo,{text:E.content})})]},A)),D&&d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx("div",{style:{width:32,height:32,borderRadius:999,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:"🤖"}),d.jsx("div",{style:{padding:"11px 16px",background:"#f9fafb",border:"1px solid var(--card-border)",borderRadius:"4px 16px 16px 16px",display:"flex",gap:5,alignItems:"center"},children:[0,1,2].map(E=>d.jsx("div",{style:{width:7,height:7,borderRadius:999,background:"var(--purple-primary)",opacity:.6,animation:`bounce 1s infinite ${E*.18}s`}},E))})]}),d.jsx("div",{ref:M})]}),d.jsxs("div",{style:{display:"flex",gap:10,padding:"14px 16px",background:"#fff",border:"1.5px solid var(--card-border)",borderTop:"1px solid #f3f4f6",borderRadius:"0 0 16px 16px"},children:[d.jsx("textarea",{value:C,onChange:E=>P(E.target.value),onKeyDown:x,rows:2,disabled:D,placeholder:"Type your answer... (Enter to send)",style:{flex:1,padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:12,fontSize:14,fontFamily:"inherit",resize:"none",outline:"none",lineHeight:1.5,color:"var(--text-primary)",background:D?"#f9fafb":"#fff",transition:"border-color 0.2s"},onFocus:E=>E.target.style.borderColor="var(--purple-primary)",onBlur:E=>E.target.style.borderColor="var(--card-border)"}),d.jsx("button",{onClick:y,disabled:!C.trim()||D,style:{width:46,height:46,borderRadius:12,border:"none",alignSelf:"flex-end",background:!C.trim()||D?"#e5e7eb":"var(--purple-primary)",color:!C.trim()||D?"#9ca3af":"#fff",cursor:!C.trim()||D?"not-allowed":"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]}),d.jsx("style",{children:"@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }"})]})}function eb({onBack:t}){const[e,n]=$.useState("setup"),[r,i]=$.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)",rounds:7}),[s,o]=$.useState([]),[l,u]=$.useState(""),[h,p]=$.useState(!1),[g,w]=$.useState(0),[C,P]=$.useState(""),D=$.useRef(null);$.useEffect(()=>{var _;(_=D.current)==null||_.scrollIntoView({behavior:"smooth"})},[s,h]);const F=`You are a professional interviewer at ${r.company} for the role of ${r.role} (${r.dept}, ${r.level}).

Rules:
- Ask ONE question at a time
- After each answer, give 1–2 sentence feedback (honest but encouraging), then ask next question  
- Mix technical and HR questions relevant to ${r.dept} and ${r.role}
- After exactly ${r.rounds} questions and their answers, write "INTERVIEW_COMPLETE" on its own line, then give a detailed performance review with score /10 per category (Communication, Technical, Confidence, Overall)

Format: feedback on answer (if any), then next question. Keep it professional and natural.`;async function k(){p(!0),n("live"),o([]),w(0);try{const _=await Vr([{role:"user",content:`Start. Briefly introduce yourself as ${r.company} interviewer and ask your first question.`}],F);o([{role:"assistant",content:_}]),w(1)}catch{o([{role:"assistant",content:"Failed to start. Please check connection."}])}p(!1)}async function v(){if(!l.trim()||h)return;const _=l.trim();u("");const b=[...s,{role:"user",content:_}];o(b),p(!0);try{const M=await Vr(b.map(j=>({role:j.role,content:j.content})),F);if(M.includes("INTERVIEW_COMPLETE")){const[j,T]=M.split("INTERVIEW_COMPLETE");o(y=>[...y,{role:"assistant",content:j.trim()}]),P(T.trim()),n("result")}else o(j=>[...j,{role:"assistant",content:M}]),w(j=>j+1)}catch{o(M=>[...M,{role:"assistant",content:"⚠️ Connection issue. Try again."}])}p(!1)}return e==="setup"?d.jsxs("div",{children:[d.jsx(In,{title:"🎙️ Live Mock Interview",subtitle:"AI interviews you in real time, gives feedback after each answer",onBack:t}),d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16},children:[d.jsx(Rt,{label:"Company *",value:r.company,onChange:_=>i(b=>({...b,company:_})),options:xf,placeholder:"Select"}),d.jsx(Rt,{label:"Branch *",value:r.dept,onChange:_=>i(b=>({...b,dept:_,role:""})),options:If,placeholder:"Select"}),d.jsx(Rt,{label:"Role *",value:r.role,onChange:_=>i(b=>({...b,role:_})),options:Sf[r.dept]||[],placeholder:r.dept?"Select role":"Pick branch first"}),d.jsx(Rt,{label:"Level",value:r.level,onChange:_=>i(b=>({...b,level:_})),options:kf})]}),d.jsxs("div",{style:{marginBottom:22},children:[d.jsx("label",{style:{fontSize:13,fontWeight:600,color:"var(--text-secondary)",display:"block",marginBottom:8},children:"Number of Questions"}),d.jsx("div",{style:{display:"flex",gap:8},children:[5,7,10].map(_=>d.jsxs("button",{onClick:()=>i(b=>({...b,rounds:_})),style:{padding:"8px 20px",borderRadius:999,border:"1.5px solid",borderColor:r.rounds===_?"var(--purple-primary)":"var(--card-border)",background:r.rounds===_?"var(--purple-xsoft)":"#fff",color:r.rounds===_?"var(--purple-primary)":"var(--text-secondary)",fontFamily:"inherit",fontSize:14,fontWeight:700,cursor:"pointer"},children:[_," Q"]},_))})]}),d.jsx(vn,{onClick:k,disabled:!r.company||!r.dept||!r.role,loading:h,children:"🎙️ Start Interview"})]})]}):e==="result"?d.jsxs("div",{children:[d.jsx(In,{title:"🏆 Interview Complete",onBack:()=>{n("setup"),o([]),P("")}}),d.jsxs("div",{style:{background:"linear-gradient(135deg, #ede9fe, #f5f3ff)",border:"1.5px solid var(--purple-soft)",borderRadius:16,padding:"28px",marginBottom:20},children:[d.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid rgba(108,60,225,0.15)"},children:[d.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:"🤖"}),d.jsxs("div",{children:[d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:17,color:"var(--text-primary)"},children:"Performance Review"}),d.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[r.company," · ",r.role," · ",r.rounds," questions"]})]})]}),d.jsx(xo,{text:C})]}),d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx(vn,{onClick:()=>{n("setup"),o([]),P("")},children:"🔄 Try Again"}),d.jsx(vn,{outline:!0,onClick:t,children:"← Back"})]})]}):d.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:520},children:[d.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14,flexShrink:0},children:[d.jsx("div",{style:{width:10,height:10,borderRadius:999,background:"#22c55e",boxShadow:"0 0 0 3px #dcfce7"}}),d.jsxs("span",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:700,fontSize:15,color:"var(--text-primary)"},children:["Live — ",r.company," · ",r.role]}),d.jsxs("span",{style:{marginLeft:"auto",fontSize:13,color:"var(--text-muted)",background:"#f3f4f6",padding:"3px 12px",borderRadius:999,fontWeight:600},children:["Q ",Math.min(g,r.rounds),"/",r.rounds]})]}),d.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:14,padding:"20px",background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:"16px 16px 0 0"},children:[s.map((_,b)=>d.jsxs("div",{style:{display:"flex",gap:10,flexDirection:_.role==="user"?"row-reverse":"row",alignItems:"flex-start"},children:[d.jsx("div",{style:{width:32,height:32,borderRadius:999,flexShrink:0,background:_.role==="user"?"var(--purple-primary)":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:_.role==="user"?"👤":"🤖"}),d.jsx("div",{style:{maxWidth:"78%",padding:"11px 15px",borderRadius:_.role==="user"?"16px 4px 16px 16px":"4px 16px 16px 16px",background:_.role==="user"?"var(--purple-primary)":"#f9fafb",border:_.role==="user"?"none":"1px solid var(--card-border)"},children:_.role==="user"?d.jsx("p",{style:{margin:0,fontSize:14,color:"#fff",lineHeight:1.6},children:_.content}):d.jsx(xo,{text:_.content})})]},b)),h&&d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx("div",{style:{width:32,height:32,borderRadius:999,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center"},children:"🤖"}),d.jsx("div",{style:{padding:"12px 16px",background:"#f9fafb",border:"1px solid var(--card-border)",borderRadius:"4px 16px 16px 16px",display:"flex",gap:5},children:[0,1,2].map(_=>d.jsx("div",{style:{width:7,height:7,borderRadius:999,background:"var(--purple-primary)",opacity:.6,animation:`bounce 1s infinite ${_*.18}s`}},_))})]}),d.jsx("div",{ref:D})]}),d.jsxs("div",{style:{display:"flex",gap:10,padding:"14px 16px",background:"#fff",border:"1.5px solid var(--card-border)",borderTop:"1px solid #f3f4f6",borderRadius:"0 0 16px 16px",flexShrink:0},children:[d.jsx("textarea",{value:l,onChange:_=>u(_.target.value),onKeyDown:_=>{_.key==="Enter"&&!_.shiftKey&&(_.preventDefault(),v())},rows:2,disabled:h,placeholder:"Type your answer... (Enter to send)",style:{flex:1,padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:12,fontSize:14,fontFamily:"inherit",resize:"none",outline:"none",color:"var(--text-primary)",background:h?"#f9fafb":"#fff"},onFocus:_=>_.target.style.borderColor="var(--purple-primary)",onBlur:_=>_.target.style.borderColor="var(--card-border)"}),d.jsx("button",{onClick:v,disabled:!l.trim()||h,style:{width:46,height:46,borderRadius:12,border:"none",alignSelf:"flex-end",background:!l.trim()||h?"#e5e7eb":"var(--purple-primary)",color:!l.trim()||h?"#9ca3af":"#fff",cursor:!l.trim()||h?"not-allowed":"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]}),d.jsx("style",{children:"@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}"})]})}function tb({onBack:t}){const[e,n]=$.useState("setup"),[r,i]=$.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)"}),[s,o]=$.useState([]),[l,u]=$.useState({}),[h,p]=$.useState(!1),[g,w]=$.useState(!1),[C,P]=$.useState("");async function D(){p(!0),n("test"),o([]),u({});try{const v=`Generate exactly 8 interview questions for a ${r.level} candidate applying to ${r.company} for the role of ${r.role} (${r.dept} branch).

Mix: 3 technical questions, 2 HR/behavioral, 2 situational, 1 company-specific.

Return ONLY a JSON array of 8 strings like:
["Question 1?", "Question 2?", ..., "Question 8?"]

No explanation, no markdown, just the JSON array.`,b=(await Vr([{role:"user",content:v}],"Return only valid JSON. No markdown. No explanation.")).replace(/```json|```/g,"").trim(),M=JSON.parse(b);o(Array.isArray(M)?M.slice(0,8):[])}catch{o(["Tell me about yourself.","What are your strengths and weaknesses?","Why do you want to join "+r.company+"?","Describe a challenging project you worked on.","Where do you see yourself in 5 years?","How do you handle pressure?",`What do you know about ${r.company}?`,"Do you have any questions for us?"])}p(!1)}async function F(){w(!0),n("result");try{const v=s.map((M,j)=>`Q${j+1}: ${M}
A${j+1}: ${l[j]||"(No answer given)"}`).join(`

`),_=`You are evaluating a mock interview for ${r.company} — ${r.role} (${r.dept}, ${r.level}).

Questions and answers:
${v}

Give a detailed evaluation:
## 📊 Overall Score: X/10

## ✅ What They Did Well

## ⚠️ Areas to Improve

## 🎯 Question-by-Question Feedback
(Brief feedback on each answer)

## 📚 Study Recommendations

## 💪 Final Verdict`,b=await Vr([{role:"user",content:_}],"You are an expert interview evaluator. Be honest, specific, and encouraging.");P(b)}catch{P("Failed to generate score. Please try again.")}w(!1)}const k=Object.values(l).filter(v=>v==null?void 0:v.trim()).length;return e==="setup"?d.jsxs("div",{children:[d.jsx(In,{title:"📋 Scored Mock Test",subtitle:"Answer all questions, then get a detailed score and feedback",onBack:t}),d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560},children:[d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:22},children:[d.jsx(Rt,{label:"Company *",value:r.company,onChange:v=>i(_=>({..._,company:v})),options:xf,placeholder:"Select"}),d.jsx(Rt,{label:"Branch *",value:r.dept,onChange:v=>i(_=>({..._,dept:v,role:""})),options:If,placeholder:"Select"}),d.jsx(Rt,{label:"Role *",value:r.role,onChange:v=>i(_=>({..._,role:v})),options:Sf[r.dept]||[],placeholder:r.dept?"Select role":"Pick branch first"}),d.jsx(Rt,{label:"Level",value:r.level,onChange:v=>i(_=>({..._,level:v})),options:kf})]}),d.jsx("div",{style:{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"12px 16px",marginBottom:22,fontSize:13,color:"#166534"},children:"💡 8 questions generated by AI for your specific company + role. Answer all of them, submit, and get scored."}),d.jsx(vn,{onClick:D,disabled:!r.company||!r.dept||!r.role,loading:h,children:"📋 Generate Questions"})]})]}):e==="test"?d.jsxs("div",{children:[d.jsx(In,{title:`📋 Mock Test — ${r.company}`,subtitle:`${r.role} · ${k}/${s.length} answered`,onBack:()=>n("setup")}),h?d.jsxs("div",{style:{textAlign:"center",padding:"60px",color:"var(--text-muted)"},children:[d.jsx("div",{style:{fontSize:36,marginBottom:10},children:"🤖"}),d.jsxs("div",{style:{fontWeight:600},children:["Generating questions for ",r.company,"..."]})]}):d.jsxs("div",{children:[s.map((v,_)=>{var b,M;return d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"20px 22px",marginBottom:14},children:[d.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12,alignItems:"flex-start"},children:[d.jsx("span",{style:{width:26,height:26,borderRadius:999,background:(b=l[_])!=null&&b.trim()?"var(--purple-primary)":"var(--purple-soft)",color:(M=l[_])!=null&&M.trim()?"#fff":"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0},children:_+1}),d.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)",lineHeight:1.6,margin:0},children:v})]}),d.jsx("textarea",{value:l[_]||"",onChange:j=>u(T=>({...T,[_]:j.target.value})),placeholder:"Type your answer here...",rows:3,style:{width:"100%",padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:10,fontSize:13.5,fontFamily:"inherit",resize:"vertical",outline:"none",lineHeight:1.6,color:"var(--text-primary)",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:j=>j.target.style.borderColor="var(--purple-primary)",onBlur:j=>j.target.style.borderColor="var(--card-border)"})]},_)}),d.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8},children:[d.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:[k," of ",s.length," answered"]}),d.jsx(vn,{onClick:F,disabled:k===0,children:"Submit & Get Score →"})]})]})]}):d.jsxs("div",{children:[d.jsx(In,{title:"📊 Your Score & Feedback",onBack:()=>{n("setup"),P("")}}),d.jsx("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",marginBottom:20},children:g?d.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"var(--text-muted)"},children:[d.jsx("div",{style:{fontSize:40,marginBottom:10},children:"🤖"}),d.jsx("div",{style:{fontWeight:700,fontSize:16,color:"var(--text-primary)",marginBottom:4},children:"Evaluating your answers..."}),d.jsx("div",{style:{fontSize:13},children:"Takes about 15 seconds"})]}):d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:20,paddingBottom:14,borderBottom:"1px solid #f3f4f6"},children:[d.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--purple-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:"🤖"}),d.jsxs("div",{children:[d.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:["Evaluation — ",r.company," · ",r.role]}),d.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[r.dept," · ",r.level]})]})]}),d.jsx(xo,{text:C})]})}),d.jsxs("div",{style:{display:"flex",gap:10},children:[d.jsx(vn,{onClick:()=>{n("setup"),P("")},children:"🔄 Try Again"}),d.jsx(vn,{outline:!0,onClick:t,children:"← Back"})]})]})}function nb({onBack:t}){const[e,n]=$.useState(null);return e==="live"?d.jsx(eb,{onBack:()=>n(null)}):e==="scored"?d.jsx(tb,{onBack:()=>n(null)}):d.jsxs("div",{children:[d.jsx(In,{title:"🎤 Attend Interview",subtitle:"Choose how you want to practice",onBack:t}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,maxWidth:720},children:[d.jsxs("div",{onClick:()=>n("live"),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.22s",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},onMouseEnter:r=>{r.currentTarget.style.borderColor="var(--purple-primary)",r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow="0 10px 28px rgba(108,60,225,0.12)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="var(--card-border)",r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)"},children:[d.jsx("div",{style:{width:54,height:54,borderRadius:16,background:"var(--purple-xsoft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:16},children:"🎙️"}),d.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"var(--text-primary)",marginBottom:8},children:"Live Interview"}),d.jsx("p",{style:{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.7,marginBottom:18},children:"AI asks questions one by one. You answer. AI gives brief feedback after each answer, then a full review at the end."}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:18},children:["Real-time feedback","Conversational","Score /10"].map(r=>d.jsx("span",{style:{fontSize:11,fontWeight:700,background:"var(--purple-soft)",color:"var(--purple-primary)",padding:"3px 9px",borderRadius:999},children:r},r))}),d.jsx("div",{style:{color:"var(--purple-primary)",fontWeight:700,fontSize:14},children:"Start Live →"})]}),d.jsxs("div",{onClick:()=>n("scored"),style:{background:"linear-gradient(145deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.22s",boxShadow:"0 4px 18px rgba(108,60,225,0.22)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow="0 14px 40px rgba(108,60,225,0.32)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 18px rgba(108,60,225,0.22)"},children:[d.jsx("div",{style:{width:54,height:54,borderRadius:16,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:16},children:"📋"}),d.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"#fff",marginBottom:8},children:"Scored Mock Test"}),d.jsx("p",{style:{fontSize:13.5,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:18},children:"AI generates 8 questions for your role. You answer all of them. Submit at the end to get a full score and detailed feedback."}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:18},children:["8 Questions","Full score","Q-by-Q feedback"].map(r=>d.jsx("span",{style:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.2)",color:"#fff",padding:"3px 9px",borderRadius:999},children:r},r))}),d.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14},children:"Start Test →"})]})]})]})}function rb(){const[t,e]=$.useState(null);return t==="prepare"?d.jsx(ZP,{onBack:()=>e(null)}):t==="attend"?d.jsx(nb,{onBack:()=>e(null)}):d.jsxs("div",{children:[d.jsxs("div",{style:{marginBottom:32},children:[d.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"var(--text-primary)",marginBottom:6},children:"🤖 AI Interview"}),d.jsx("p",{style:{color:"var(--text-muted)",fontSize:15},children:"Powered by Claude AI — prepare smarter, practice harder, get placed."})]}),d.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,maxWidth:820,marginBottom:36},children:[d.jsxs("div",{onClick:()=>e("prepare"),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:20,padding:"32px 28px",cursor:"pointer",transition:"all 0.25s",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},onMouseEnter:n=>{n.currentTarget.style.borderColor="var(--purple-primary)",n.currentTarget.style.transform="translateY(-4px)",n.currentTarget.style.boxShadow="0 12px 36px rgba(108,60,225,0.13)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--card-border)",n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.05)"},children:[d.jsx("div",{style:{width:64,height:64,borderRadius:18,background:"var(--purple-xsoft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,marginBottom:18},children:"📚"}),d.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:21,color:"var(--text-primary)",marginBottom:8},children:"Prepare for Interview"}),d.jsxs("p",{style:{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,marginBottom:18},children:["AI asks you a ",d.jsx("strong",{style:{color:"var(--text-primary)"},children:"quick quiz"})," first to understand you, then generates a ",d.jsx("strong",{style:{color:"var(--text-primary)"},children:"full personalised prep plan"})," with topics, questions, and a 7-day schedule."]}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22},children:["Quiz first","Then full plan","7-Day schedule","Company-specific"].map(n=>d.jsx("span",{style:{fontSize:11,fontWeight:700,background:"var(--purple-soft)",color:"var(--purple-primary)",padding:"3px 10px",borderRadius:999},children:n},n))}),d.jsx("div",{style:{color:"var(--purple-primary)",fontWeight:700,fontSize:14},children:"Start Preparing →"})]}),d.jsxs("div",{onClick:()=>e("attend"),style:{background:"linear-gradient(145deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:20,padding:"32px 28px",cursor:"pointer",transition:"all 0.25s",boxShadow:"0 4px 20px rgba(108,60,225,0.25)"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-4px)",n.currentTarget.style.boxShadow="0 16px 48px rgba(108,60,225,0.35)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 20px rgba(108,60,225,0.25)"},children:[d.jsx("div",{style:{width:64,height:64,borderRadius:18,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,marginBottom:18},children:"🎤"}),d.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:21,color:"#fff",marginBottom:8},children:"Attend Interview"}),d.jsxs("p",{style:{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:18},children:["Choose ",d.jsx("strong",{style:{color:"#fff"},children:"Live"})," (AI interviews in real time with per-answer feedback) or ",d.jsx("strong",{style:{color:"#fff"},children:"Scored Mock"})," (answer all questions, get full score at end)."]}),d.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22},children:["Live Interview","Scored Mock","Score /10","Any Company"].map(n=>d.jsx("span",{style:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.2)",color:"#fff",padding:"3px 10px",borderRadius:999},children:n},n))}),d.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14},children:"Choose Mode →"})]})]}),d.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"24px 28px"},children:[d.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:16,color:"var(--text-primary)",marginBottom:18},children:"⚡ What happens in each mode"}),d.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[{icon:"📚",title:"Prepare",steps:["Select company, branch, role",`AI quizzes you (${jt} quick questions)`,"AI builds personalised prep plan","Topics, likely Qs, 7-day schedule"]},{icon:"🎤",title:"Attend",steps:["Choose Live or Scored Mock","For Live: answer one Q at a time","For Scored: answer all 8 Qs, then submit","Get score, feedback, and improvement tips"]}].map(n=>d.jsxs("div",{children:[d.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:10},children:[d.jsx("span",{style:{fontSize:18},children:n.icon}),d.jsx("span",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:n.title})]}),n.steps.map((r,i)=>d.jsxs("div",{style:{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"},children:[d.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--purple-soft)",color:"var(--purple-primary)",fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1},children:i+1}),d.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5},children:r})]},i))]},n.title))})]})]})}function ib(){const{login:t,signup:e}=pu(),[n,r]=$.useState("login"),[i,s]=$.useState(""),[o,l]=$.useState("ECE"),[u,h]=$.useState(""),[p,g]=$.useState(""),[w,C]=$.useState(""),[P,D]=$.useState(!1),F=n==="signup";async function k(v){v.preventDefault(),C(""),D(!0);try{F?await e({name:i.trim()||"Placeonix Student",branch:o,email:u.trim(),password:p}):await t(u.trim(),p)}catch(_){C(_.message)}finally{D(!1)}}return d.jsxs("main",{className:"auth-shell",children:[d.jsxs("section",{className:"auth-hero",children:[d.jsx("div",{className:"auth-logo",children:"P"}),d.jsx("p",{className:"auth-kicker",children:"Welcome to Placeonix"}),d.jsx("h1",{children:"Your placement preparation starts here."}),d.jsx("p",{children:"Sign in to track your interviews, resume progress, aptitude practice, streaks, XP, and placement readiness."})]}),d.jsxs("section",{className:"auth-card","aria-label":F?"Create account":"Login",children:[d.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication mode",children:[d.jsx("button",{className:F?"":"active",type:"button",onClick:()=>{r("login"),C("")},children:"Login"}),d.jsx("button",{className:F?"active":"",type:"button",onClick:()=>{r("signup"),C("")},children:"Sign Up"})]}),d.jsx("h2",{children:F?"Create your account":"Login to your dashboard"}),d.jsx("p",{className:"auth-subtitle",children:F?"Use your email and password to create a Placeonix student account.":"Continue with your registered email and password."}),d.jsxs("form",{className:"auth-form",onSubmit:k,children:[F&&d.jsxs(d.Fragment,{children:[d.jsxs("label",{children:["Full Name",d.jsx("input",{type:"text",placeholder:"Kanchi Prayuktha",value:i,onChange:v=>s(v.target.value),required:!0})]}),d.jsxs("label",{children:["Department",d.jsxs("select",{value:o,onChange:v=>l(v.target.value),children:[d.jsx("option",{value:"ECE",children:"ECE"}),d.jsx("option",{value:"CSE",children:"CSE"}),d.jsx("option",{value:"EEE",children:"EEE"}),d.jsx("option",{value:"IT",children:"IT"}),d.jsx("option",{value:"ME",children:"ME"}),d.jsx("option",{value:"CIVIL",children:"CIVIL"}),d.jsx("option",{value:"AERO",children:"AERO"}),d.jsx("option",{value:"BME",children:"BME"}),d.jsx("option",{value:"BT",children:"BT"})]})]})]}),d.jsxs("label",{children:["Email",d.jsx("input",{type:"email",placeholder:"you@example.com",value:u,onChange:v=>h(v.target.value),autoComplete:"email",required:!0})]}),d.jsxs("label",{children:["Password",d.jsx("input",{type:"password",placeholder:"Minimum 6 characters",value:p,onChange:v=>g(v.target.value),autoComplete:F?"new-password":"current-password",required:!0,minLength:6})]}),w&&d.jsx("div",{className:"auth-error",children:w}),d.jsx("button",{className:"auth-submit",type:"submit",disabled:P,children:P?"Please wait...":F?"Create Account":"Login"})]})]})]})}const oy={dashboard:{title:"Dashboard",icon:"🏠"},resources:{title:"Resources",icon:"📚",desc:"Study materials, notes, and resources organized by department and subject."},aptitude:{title:"Aptitude",icon:"🧠"},coding:{title:"Coding Practice",icon:"💻",desc:"Built-in online code editor with DSA problems and Judge0-powered execution."},interview:{title:"AI Interview",icon:"🤖"},resume:{title:"Resume & ATS",icon:"📄",desc:"Upload your resume to get an ATS score, keyword analysis, and formatting suggestions."},analytics:{title:"Analytics",icon:"📊",desc:"Placement trends, package data, recruiter stats, and your performance analytics."},profile:{title:"Profile",icon:"👤",desc:"Manage your student profile, achievements, and placement preferences."},settings:{title:"Settings",icon:"⚙️",desc:"Manage your account, notifications, and platform preferences."}};function sb(){const{user:t,loading:e}=pu(),[n,r]=$.useState("dashboard"),i=oy[n]||oy.dashboard;return e?d.jsxs("div",{className:"auth-loading",children:[d.jsx("div",{className:"auth-loader"}),d.jsx("p",{children:"Loading Placeonix..."})]}):t?d.jsxs("div",{className:"app-shell",children:[d.jsx(MP,{activePage:n,setActivePage:r}),d.jsxs("div",{className:"main-area",children:[d.jsx(LP,{}),d.jsx("main",{className:"page-content",children:n==="dashboard"?d.jsx(qP,{}):n==="aptitude"?d.jsx(JP,{}):n==="interview"?d.jsx(rb,{}):d.jsx(KP,{title:i.title,icon:i.icon,description:i.desc})}),d.jsx(VP,{})]})]}):d.jsx(ib,{})}Tc.createRoot(document.getElementById("root")).render(d.jsx(yy.StrictMode,{children:d.jsx(DP,{children:d.jsx(sb,{})})}));
