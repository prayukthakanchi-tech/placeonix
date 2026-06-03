(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Bv={exports:{}},Sc={},$v={exports:{}},ie={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aa=Symbol.for("react.element"),F_=Symbol.for("react.portal"),B_=Symbol.for("react.fragment"),$_=Symbol.for("react.strict_mode"),U_=Symbol.for("react.profiler"),W_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),H_=Symbol.for("react.forward_ref"),G_=Symbol.for("react.suspense"),Q_=Symbol.for("react.memo"),K_=Symbol.for("react.lazy"),Um=Symbol.iterator;function Y_(t){return t===null||typeof t!="object"?null:(t=Um&&t[Um]||t["@@iterator"],typeof t=="function"?t:null)}var Uv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wv=Object.assign,qv={};function vs(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Uv}vs.prototype.isReactComponent={};vs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};vs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Hv(){}Hv.prototype=vs.prototype;function Uh(t,e,n){this.props=t,this.context=e,this.refs=qv,this.updater=n||Uv}var Wh=Uh.prototype=new Hv;Wh.constructor=Uh;Wv(Wh,vs.prototype);Wh.isPureReactComponent=!0;var Wm=Array.isArray,Gv=Object.prototype.hasOwnProperty,qh={current:null},Qv={key:!0,ref:!0,__self:!0,__source:!0};function Kv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Gv.call(e,r)&&!Qv.hasOwnProperty(r)&&(i[r]=e[r]);var c=arguments.length-2;if(c===1)i.children=n;else if(1<c){for(var u=Array(c),d=0;d<c;d++)u[d]=arguments[d+2];i.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps,c)i[r]===void 0&&(i[r]=c[r]);return{$$typeof:aa,type:t,key:s,ref:o,props:i,_owner:qh.current}}function J_(t,e){return{$$typeof:aa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Hh(t){return typeof t=="object"&&t!==null&&t.$$typeof===aa}function X_(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var qm=/\/+/g;function Au(t,e){return typeof t=="object"&&t!==null&&t.key!=null?X_(""+t.key):e.toString(36)}function ll(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case aa:case F_:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Au(o,0):r,Wm(i)?(n="",t!=null&&(n=t.replace(qm,"$&/")+"/"),ll(i,e,n,"",function(d){return d})):i!=null&&(Hh(i)&&(i=J_(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(qm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Wm(t))for(var c=0;c<t.length;c++){s=t[c];var u=r+Au(s,c);o+=ll(s,e,n,u,i)}else if(u=Y_(t),typeof u=="function")for(t=u.call(t),c=0;!(s=t.next()).done;)s=s.value,u=r+Au(s,c++),o+=ll(s,e,n,u,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Va(t,e,n){if(t==null)return t;var r=[],i=0;return ll(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Z_(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ut={current:null},cl={transition:null},eS={ReactCurrentDispatcher:ut,ReactCurrentBatchConfig:cl,ReactCurrentOwner:qh};function Yv(){throw Error("act(...) is not supported in production builds of React.")}ie.Children={map:Va,forEach:function(t,e,n){Va(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Va(t,function(){e++}),e},toArray:function(t){return Va(t,function(e){return e})||[]},only:function(t){if(!Hh(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ie.Component=vs;ie.Fragment=B_;ie.Profiler=U_;ie.PureComponent=Uh;ie.StrictMode=$_;ie.Suspense=G_;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;ie.act=Yv;ie.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Wv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=qh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var c=t.type.defaultProps;for(u in e)Gv.call(e,u)&&!Qv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&c!==void 0?c[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){c=Array(u);for(var d=0;d<u;d++)c[d]=arguments[d+2];r.children=c}return{$$typeof:aa,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t){return t={$$typeof:q_,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:W_,_context:t},t.Consumer=t};ie.createElement=Kv;ie.createFactory=function(t){var e=Kv.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:H_,render:t}};ie.isValidElement=Hh;ie.lazy=function(t){return{$$typeof:K_,_payload:{_status:-1,_result:t},_init:Z_}};ie.memo=function(t,e){return{$$typeof:Q_,type:t,compare:e===void 0?null:e}};ie.startTransition=function(t){var e=cl.transition;cl.transition={};try{t()}finally{cl.transition=e}};ie.unstable_act=Yv;ie.useCallback=function(t,e){return ut.current.useCallback(t,e)};ie.useContext=function(t){return ut.current.useContext(t)};ie.useDebugValue=function(){};ie.useDeferredValue=function(t){return ut.current.useDeferredValue(t)};ie.useEffect=function(t,e){return ut.current.useEffect(t,e)};ie.useId=function(){return ut.current.useId()};ie.useImperativeHandle=function(t,e,n){return ut.current.useImperativeHandle(t,e,n)};ie.useInsertionEffect=function(t,e){return ut.current.useInsertionEffect(t,e)};ie.useLayoutEffect=function(t,e){return ut.current.useLayoutEffect(t,e)};ie.useMemo=function(t,e){return ut.current.useMemo(t,e)};ie.useReducer=function(t,e,n){return ut.current.useReducer(t,e,n)};ie.useRef=function(t){return ut.current.useRef(t)};ie.useState=function(t){return ut.current.useState(t)};ie.useSyncExternalStore=function(t,e,n){return ut.current.useSyncExternalStore(t,e,n)};ie.useTransition=function(){return ut.current.useTransition()};ie.version="18.3.1";$v.exports=ie;var M=$v.exports;const Gh=z_(M);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=M,nS=Symbol.for("react.element"),rS=Symbol.for("react.fragment"),iS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function Jv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)iS.call(e,r)&&!oS.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:nS,type:t,key:s,ref:o,props:i,_owner:sS.current}}Sc.Fragment=rS;Sc.jsx=Jv;Sc.jsxs=Jv;Bv.exports=Sc;var a=Bv.exports,wd={},Xv={exports:{}},kt={},Zv={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e($,Y){var Z=$.length;$.push(Y);e:for(;0<Z;){var we=Z-1>>>1,Ce=$[we];if(0<i(Ce,Y))$[we]=Y,$[Z]=Ce,Z=we;else break e}}function n($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var Y=$[0],Z=$.pop();if(Z!==Y){$[0]=Z;e:for(var we=0,Ce=$.length,$r=Ce>>>1;we<$r;){var At=2*(we+1)-1,Ur=$[At],$t=At+1,qn=$[$t];if(0>i(Ur,Z))$t<Ce&&0>i(qn,Ur)?($[we]=qn,$[$t]=Z,we=$t):($[we]=Ur,$[At]=Z,we=At);else if($t<Ce&&0>i(qn,Z))$[we]=qn,$[$t]=Z,we=$t;else break e}}return Y}function i($,Y){var Z=$.sortIndex-Y.sortIndex;return Z!==0?Z:$.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,c=o.now();t.unstable_now=function(){return o.now()-c}}var u=[],d=[],f=1,g=null,m=3,S=!1,C=!1,j=!1,O=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b($){for(var Y=n(d);Y!==null;){if(Y.callback===null)r(d);else if(Y.startTime<=$)r(d),Y.sortIndex=Y.expirationTime,e(u,Y);else break;Y=n(d)}}function P($){if(j=!1,b($),!C)if(n(u)!==null)C=!0,ve(L);else{var Y=n(d);Y!==null&&Br(P,Y.startTime-$)}}function L($,Y){C=!1,j&&(j=!1,E(y),y=-1),S=!0;var Z=m;try{for(b(Y),g=n(u);g!==null&&(!(g.expirationTime>Y)||$&&!T());){var we=g.callback;if(typeof we=="function"){g.callback=null,m=g.priorityLevel;var Ce=we(g.expirationTime<=Y);Y=t.unstable_now(),typeof Ce=="function"?g.callback=Ce:g===n(u)&&r(u),b(Y)}else r(u);g=n(u)}if(g!==null)var $r=!0;else{var At=n(d);At!==null&&Br(P,At.startTime-Y),$r=!1}return $r}finally{g=null,m=Z,S=!1}}var R=!1,w=null,y=-1,I=5,k=-1;function T(){return!(t.unstable_now()-k<I)}function A(){if(w!==null){var $=t.unstable_now();k=$;var Y=!0;try{Y=w(!0,$)}finally{Y?_():(R=!1,w=null)}}else R=!1}var _;if(typeof v=="function")_=function(){v(A)};else if(typeof MessageChannel<"u"){var te=new MessageChannel,de=te.port2;te.port1.onmessage=A,_=function(){de.postMessage(null)}}else _=function(){O(A,0)};function ve($){w=$,R||(R=!0,_())}function Br($,Y){y=O(function(){$(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function($){$.callback=null},t.unstable_continueExecution=function(){C||S||(C=!0,ve(L))},t.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<$?Math.floor(1e3/$):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(u)},t.unstable_next=function($){switch(m){case 1:case 2:case 3:var Y=3;break;default:Y=m}var Z=m;m=Y;try{return $()}finally{m=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function($,Y){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=m;m=$;try{return Y()}finally{m=Z}},t.unstable_scheduleCallback=function($,Y,Z){var we=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?we+Z:we):Z=we,$){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=Z+Ce,$={id:f++,callback:Y,priorityLevel:$,startTime:Z,expirationTime:Ce,sortIndex:-1},Z>we?($.sortIndex=Z,e(d,$),n(u)===null&&$===n(d)&&(j?(E(y),y=-1):j=!0,Br(P,Z-we))):($.sortIndex=Ce,e(u,$),C||S||(C=!0,ve(L))),$},t.unstable_shouldYield=T,t.unstable_wrapCallback=function($){var Y=m;return function(){var Z=m;m=Y;try{return $.apply(this,arguments)}finally{m=Z}}}})(e0);Zv.exports=e0;var aS=Zv.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=M,It=aS;function F(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,Ro={};function xi(t,e){ss(t,e),ss(t+"Capture",e)}function ss(t,e){for(Ro[t]=e,t=0;t<e.length;t++)t0.add(e[t])}var Dn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xd=Object.prototype.hasOwnProperty,cS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Hm={},Gm={};function uS(t){return xd.call(Gm,t)?!0:xd.call(Hm,t)?!1:cS.test(t)?Gm[t]=!0:(Hm[t]=!0,!1)}function dS(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function hS(t,e,n,r){if(e===null||typeof e>"u"||dS(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qe[t]=new dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qe[e]=new dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qe[t]=new dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qe[t]=new dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qe[t]=new dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qe[t]=new dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qe[t]=new dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qe[t]=new dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qe[t]=new dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qh=/[\-:]([a-z])/g;function Kh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qh,Kh);Qe[e]=new dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qh,Kh);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qh,Kh);Qe[e]=new dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!1,!1)});Qe.xlinkHref=new dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qe[t]=new dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Yh(t,e,n,r){var i=Qe.hasOwnProperty(e)?Qe[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(hS(e,n,i,r)&&(n=null),r||i===null?uS(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var $n=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,za=Symbol.for("react.element"),Di=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),Jh=Symbol.for("react.strict_mode"),bd=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),r0=Symbol.for("react.context"),Xh=Symbol.for("react.forward_ref"),_d=Symbol.for("react.suspense"),Sd=Symbol.for("react.suspense_list"),Zh=Symbol.for("react.memo"),er=Symbol.for("react.lazy"),i0=Symbol.for("react.offscreen"),Qm=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=Qm&&t[Qm]||t["@@iterator"],typeof t=="function"?t:null)}var Ee=Object.assign,Ru;function no(t){if(Ru===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ru=e&&e[1]||""}return`
`+Ru+t}var Pu=!1;function ju(t,e){if(!t||Pu)return"";Pu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(d){var r=d}Reflect.construct(t,[],e)}else{try{e.call()}catch(d){r=d}t.call(e.prototype)}else{try{throw Error()}catch(d){r=d}t()}}catch(d){if(d&&r&&typeof d.stack=="string"){for(var i=d.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,c=s.length-1;1<=o&&0<=c&&i[o]!==s[c];)c--;for(;1<=o&&0<=c;o--,c--)if(i[o]!==s[c]){if(o!==1||c!==1)do if(o--,c--,0>c||i[o]!==s[c]){var u=`
`+i[o].replace(" at new "," at ");return t.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",t.displayName)),u}while(1<=o&&0<=c);break}}}finally{Pu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?no(t):""}function fS(t){switch(t.tag){case 5:return no(t.type);case 16:return no("Lazy");case 13:return no("Suspense");case 19:return no("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function Ed(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case Di:return"Portal";case bd:return"Profiler";case Jh:return"StrictMode";case _d:return"Suspense";case Sd:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case r0:return(t.displayName||"Context")+".Consumer";case n0:return(t._context.displayName||"Context")+".Provider";case Xh:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zh:return e=t.displayName||null,e!==null?e:Ed(t.type)||"Memo";case er:e=t._payload,t=t._init;try{return Ed(t(e))}catch{}}return null}function pS(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ed(e);case 8:return e===Jh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function s0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(t){var e=s0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Fa(t){t._valueTracker||(t._valueTracker=mS(t))}function o0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=s0(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Pl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Td(t,e){var n=e.checked;return Ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Km(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(t,e){e=e.checked,e!=null&&Yh(t,"checked",e,!1)}function Id(t,e){a0(t,e);var n=Sr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?kd(t,e.type,n):e.hasOwnProperty("defaultValue")&&kd(t,e.type,Sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Ym(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function kd(t,e,n){(e!=="number"||Pl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function Gi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Cd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(F(91));return Ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Jm(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(F(92));if(ro(n)){if(1<n.length)throw Error(F(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sr(n)}}function l0(t,e){var n=Sr(e.value),r=Sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Xm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function c0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ad(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?c0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ba,u0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ba=Ba||document.createElement("div"),Ba.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ba.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},gS=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){gS.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function d0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function h0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=d0(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var yS=Ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rd(t,e){if(e){if(yS[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(F(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(F(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(F(61))}if(e.style!=null&&typeof e.style!="object")throw Error(F(62))}}function Pd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jd=null;function ef(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Nd=null,Qi=null,Ki=null;function Zm(t){if(t=ua(t)){if(typeof Nd!="function")throw Error(F(280));var e=t.stateNode;e&&(e=Cc(e),Nd(t.stateNode,t.type,e))}}function f0(t){Qi?Ki?Ki.push(t):Ki=[t]:Qi=t}function p0(){if(Qi){var t=Qi,e=Ki;if(Ki=Qi=null,Zm(t),e)for(t=0;t<e.length;t++)Zm(e[t])}}function m0(t,e){return t(e)}function g0(){}var Nu=!1;function y0(t,e,n){if(Nu)return t(e,n);Nu=!0;try{return m0(t,e,n)}finally{Nu=!1,(Qi!==null||Ki!==null)&&(g0(),p0())}}function jo(t,e){var n=t.stateNode;if(n===null)return null;var r=Cc(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(F(231,e,typeof n));return n}var Dd=!1;if(Dn)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Dd=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Dd=!1}function vS(t,e,n,r,i,s,o,c,u){var d=Array.prototype.slice.call(arguments,3);try{e.apply(n,d)}catch(f){this.onError(f)}}var po=!1,jl=null,Nl=!1,Md=null,wS={onError:function(t){po=!0,jl=t}};function xS(t,e,n,r,i,s,o,c,u){po=!1,jl=null,vS.apply(wS,arguments)}function bS(t,e,n,r,i,s,o,c,u){if(xS.apply(this,arguments),po){if(po){var d=jl;po=!1,jl=null}else throw Error(F(198));Nl||(Nl=!0,Md=d)}}function bi(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function v0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function eg(t){if(bi(t)!==t)throw Error(F(188))}function _S(t){var e=t.alternate;if(!e){if(e=bi(t),e===null)throw Error(F(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return eg(i),t;if(s===r)return eg(i),e;s=s.sibling}throw Error(F(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,c=i.child;c;){if(c===n){o=!0,n=i,r=s;break}if(c===r){o=!0,r=i,n=s;break}c=c.sibling}if(!o){for(c=s.child;c;){if(c===n){o=!0,n=s,r=i;break}if(c===r){o=!0,r=s,n=i;break}c=c.sibling}if(!o)throw Error(F(189))}}if(n.alternate!==r)throw Error(F(190))}if(n.tag!==3)throw Error(F(188));return n.stateNode.current===n?t:e}function w0(t){return t=_S(t),t!==null?x0(t):null}function x0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=x0(t);if(e!==null)return e;t=t.sibling}return null}var b0=It.unstable_scheduleCallback,tg=It.unstable_cancelCallback,SS=It.unstable_shouldYield,ES=It.unstable_requestPaint,Re=It.unstable_now,TS=It.unstable_getCurrentPriorityLevel,tf=It.unstable_ImmediatePriority,_0=It.unstable_UserBlockingPriority,Dl=It.unstable_NormalPriority,IS=It.unstable_LowPriority,S0=It.unstable_IdlePriority,Ec=null,dn=null;function kS(t){if(dn&&typeof dn.onCommitFiberRoot=="function")try{dn.onCommitFiberRoot(Ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Yt=Math.clz32?Math.clz32:RS,CS=Math.log,AS=Math.LN2;function RS(t){return t>>>=0,t===0?32:31-(CS(t)/AS|0)|0}var $a=64,Ua=4194304;function io(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ml(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var c=o&~i;c!==0?r=io(c):(s&=o,s!==0&&(r=io(s)))}else o=n&~i,o!==0?r=io(o):s!==0&&(r=io(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Yt(e),i=1<<n,r|=t[n],e&=~i;return r}function PS(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function jS(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Yt(s),c=1<<o,u=i[o];u===-1?(!(c&n)||c&r)&&(i[o]=PS(c,e)):u<=e&&(t.expiredLanes|=c),s&=~c}}function Ld(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function E0(){var t=$a;return $a<<=1,!($a&4194240)&&($a=64),t}function Du(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function la(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Yt(e),t[e]=n}function NS(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Yt(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function nf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Yt(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ce=0;function T0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var I0,rf,k0,C0,A0,Od=!1,Wa=[],ur=null,dr=null,hr=null,No=new Map,Do=new Map,nr=[],DS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ng(t,e){switch(t){case"focusin":case"focusout":ur=null;break;case"dragenter":case"dragleave":dr=null;break;case"mouseover":case"mouseout":hr=null;break;case"pointerover":case"pointerout":No.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Do.delete(e.pointerId)}}function Hs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ua(e),e!==null&&rf(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function MS(t,e,n,r,i){switch(e){case"focusin":return ur=Hs(ur,t,e,n,r,i),!0;case"dragenter":return dr=Hs(dr,t,e,n,r,i),!0;case"mouseover":return hr=Hs(hr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return No.set(s,Hs(No.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Do.set(s,Hs(Do.get(s)||null,t,e,n,r,i)),!0}return!1}function R0(t){var e=Xr(t.target);if(e!==null){var n=bi(e);if(n!==null){if(e=n.tag,e===13){if(e=v0(n),e!==null){t.blockedOn=e,A0(t.priority,function(){k0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ul(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Vd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);jd=r,n.target.dispatchEvent(r),jd=null}else return e=ua(n),e!==null&&rf(e),t.blockedOn=n,!1;e.shift()}return!0}function rg(t,e,n){ul(t)&&n.delete(e)}function LS(){Od=!1,ur!==null&&ul(ur)&&(ur=null),dr!==null&&ul(dr)&&(dr=null),hr!==null&&ul(hr)&&(hr=null),No.forEach(rg),Do.forEach(rg)}function Gs(t,e){t.blockedOn===e&&(t.blockedOn=null,Od||(Od=!0,It.unstable_scheduleCallback(It.unstable_NormalPriority,LS)))}function Mo(t){function e(i){return Gs(i,t)}if(0<Wa.length){Gs(Wa[0],t);for(var n=1;n<Wa.length;n++){var r=Wa[n];r.blockedOn===t&&(r.blockedOn=null)}}for(ur!==null&&Gs(ur,t),dr!==null&&Gs(dr,t),hr!==null&&Gs(hr,t),No.forEach(e),Do.forEach(e),n=0;n<nr.length;n++)r=nr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)R0(n),n.blockedOn===null&&nr.shift()}var Yi=$n.ReactCurrentBatchConfig,Ll=!0;function OS(t,e,n,r){var i=ce,s=Yi.transition;Yi.transition=null;try{ce=1,sf(t,e,n,r)}finally{ce=i,Yi.transition=s}}function VS(t,e,n,r){var i=ce,s=Yi.transition;Yi.transition=null;try{ce=4,sf(t,e,n,r)}finally{ce=i,Yi.transition=s}}function sf(t,e,n,r){if(Ll){var i=Vd(t,e,n,r);if(i===null)Wu(t,e,r,Ol,n),ng(t,r);else if(MS(i,t,e,n,r))r.stopPropagation();else if(ng(t,r),e&4&&-1<DS.indexOf(t)){for(;i!==null;){var s=ua(i);if(s!==null&&I0(s),s=Vd(t,e,n,r),s===null&&Wu(t,e,r,Ol,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Wu(t,e,r,null,n)}}var Ol=null;function Vd(t,e,n,r){if(Ol=null,t=ef(r),t=Xr(t),t!==null)if(e=bi(t),e===null)t=null;else if(n=e.tag,n===13){if(t=v0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Ol=t,null}function P0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(TS()){case tf:return 1;case _0:return 4;case Dl:case IS:return 16;case S0:return 536870912;default:return 16}default:return 16}}var lr=null,of=null,dl=null;function j0(){if(dl)return dl;var t,e=of,n=e.length,r,i="value"in lr?lr.value:lr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return dl=i.slice(t,1<r?1-r:void 0)}function hl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function qa(){return!0}function ig(){return!1}function Ct(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var c in t)t.hasOwnProperty(c)&&(n=t[c],this[c]=n?n(s):s[c]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?qa:ig,this.isPropagationStopped=ig,this}return Ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=qa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=qa)},persist:function(){},isPersistent:qa}),e}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},af=Ct(ws),ca=Ee({},ws,{view:0,detail:0}),zS=Ct(ca),Mu,Lu,Qs,Tc=Ee({},ca,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qs&&(Qs&&t.type==="mousemove"?(Mu=t.screenX-Qs.screenX,Lu=t.screenY-Qs.screenY):Lu=Mu=0,Qs=t),Mu)},movementY:function(t){return"movementY"in t?t.movementY:Lu}}),sg=Ct(Tc),FS=Ee({},Tc,{dataTransfer:0}),BS=Ct(FS),$S=Ee({},ca,{relatedTarget:0}),Ou=Ct($S),US=Ee({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=Ct(US),qS=Ee({},ws,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),HS=Ct(qS),GS=Ee({},ws,{data:0}),og=Ct(GS),QS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},KS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},YS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function JS(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=YS[t])?!!e[t]:!1}function lf(){return JS}var XS=Ee({},ca,{key:function(t){if(t.key){var e=QS[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=hl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?KS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lf,charCode:function(t){return t.type==="keypress"?hl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?hl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),ZS=Ct(XS),eE=Ee({},Tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ag=Ct(eE),tE=Ee({},ca,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lf}),nE=Ct(tE),rE=Ee({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),iE=Ct(rE),sE=Ee({},Tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),oE=Ct(sE),aE=[9,13,27,32],cf=Dn&&"CompositionEvent"in window,mo=null;Dn&&"documentMode"in document&&(mo=document.documentMode);var lE=Dn&&"TextEvent"in window&&!mo,N0=Dn&&(!cf||mo&&8<mo&&11>=mo),lg=" ",cg=!1;function D0(t,e){switch(t){case"keyup":return aE.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function M0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Li=!1;function cE(t,e){switch(t){case"compositionend":return M0(e);case"keypress":return e.which!==32?null:(cg=!0,lg);case"textInput":return t=e.data,t===lg&&cg?null:t;default:return null}}function uE(t,e){if(Li)return t==="compositionend"||!cf&&D0(t,e)?(t=j0(),dl=of=lr=null,Li=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var dE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ug(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!dE[t.type]:e==="textarea"}function L0(t,e,n,r){f0(r),e=Vl(e,"onChange"),0<e.length&&(n=new af("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var go=null,Lo=null;function hE(t){G0(t,0)}function Ic(t){var e=zi(t);if(o0(e))return t}function fE(t,e){if(t==="change")return e}var O0=!1;if(Dn){var Vu;if(Dn){var zu="oninput"in document;if(!zu){var dg=document.createElement("div");dg.setAttribute("oninput","return;"),zu=typeof dg.oninput=="function"}Vu=zu}else Vu=!1;O0=Vu&&(!document.documentMode||9<document.documentMode)}function hg(){go&&(go.detachEvent("onpropertychange",V0),Lo=go=null)}function V0(t){if(t.propertyName==="value"&&Ic(Lo)){var e=[];L0(e,Lo,t,ef(t)),y0(hE,e)}}function pE(t,e,n){t==="focusin"?(hg(),go=e,Lo=n,go.attachEvent("onpropertychange",V0)):t==="focusout"&&hg()}function mE(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ic(Lo)}function gE(t,e){if(t==="click")return Ic(e)}function yE(t,e){if(t==="input"||t==="change")return Ic(e)}function vE(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Zt=typeof Object.is=="function"?Object.is:vE;function Oo(t,e){if(Zt(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!xd.call(e,i)||!Zt(t[i],e[i]))return!1}return!0}function fg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function pg(t,e){var n=fg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=fg(n)}}function z0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?z0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function F0(){for(var t=window,e=Pl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Pl(t.document)}return e}function uf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function wE(t){var e=F0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&z0(n.ownerDocument.documentElement,n)){if(r!==null&&uf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=pg(n,s);var o=pg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var xE=Dn&&"documentMode"in document&&11>=document.documentMode,Oi=null,zd=null,yo=null,Fd=!1;function mg(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Fd||Oi==null||Oi!==Pl(r)||(r=Oi,"selectionStart"in r&&uf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),yo&&Oo(yo,r)||(yo=r,r=Vl(zd,"onSelect"),0<r.length&&(e=new af("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Oi)))}function Ha(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Vi={animationend:Ha("Animation","AnimationEnd"),animationiteration:Ha("Animation","AnimationIteration"),animationstart:Ha("Animation","AnimationStart"),transitionend:Ha("Transition","TransitionEnd")},Fu={},B0={};Dn&&(B0=document.createElement("div").style,"AnimationEvent"in window||(delete Vi.animationend.animation,delete Vi.animationiteration.animation,delete Vi.animationstart.animation),"TransitionEvent"in window||delete Vi.transitionend.transition);function kc(t){if(Fu[t])return Fu[t];if(!Vi[t])return t;var e=Vi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in B0)return Fu[t]=e[n];return t}var $0=kc("animationend"),U0=kc("animationiteration"),W0=kc("animationstart"),q0=kc("transitionend"),H0=new Map,gg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(t,e){H0.set(t,e),xi(e,[t])}for(var Bu=0;Bu<gg.length;Bu++){var $u=gg[Bu],bE=$u.toLowerCase(),_E=$u[0].toUpperCase()+$u.slice(1);Dr(bE,"on"+_E)}Dr($0,"onAnimationEnd");Dr(U0,"onAnimationIteration");Dr(W0,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(q0,"onTransitionEnd");ss("onMouseEnter",["mouseout","mouseover"]);ss("onMouseLeave",["mouseout","mouseover"]);ss("onPointerEnter",["pointerout","pointerover"]);ss("onPointerLeave",["pointerout","pointerover"]);xi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));xi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));xi("onBeforeInput",["compositionend","keypress","textInput","paste"]);xi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));xi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var so="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),SE=new Set("cancel close invalid load scroll toggle".split(" ").concat(so));function yg(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,bS(r,e,void 0,t),t.currentTarget=null}function G0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var c=r[o],u=c.instance,d=c.currentTarget;if(c=c.listener,u!==s&&i.isPropagationStopped())break e;yg(i,c,d),s=u}else for(o=0;o<r.length;o++){if(c=r[o],u=c.instance,d=c.currentTarget,c=c.listener,u!==s&&i.isPropagationStopped())break e;yg(i,c,d),s=u}}}if(Nl)throw t=Md,Nl=!1,Md=null,t}function me(t,e){var n=e[qd];n===void 0&&(n=e[qd]=new Set);var r=t+"__bubble";n.has(r)||(Q0(e,t,2,!1),n.add(r))}function Uu(t,e,n){var r=0;e&&(r|=4),Q0(n,t,r,e)}var Ga="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Ga]){t[Ga]=!0,t0.forEach(function(n){n!=="selectionchange"&&(SE.has(n)||Uu(n,!1,t),Uu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ga]||(e[Ga]=!0,Uu("selectionchange",!1,e))}}function Q0(t,e,n,r){switch(P0(e)){case 1:var i=OS;break;case 4:i=VS;break;default:i=sf}n=i.bind(null,e,n,t),i=void 0,!Dd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Wu(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var c=r.stateNode.containerInfo;if(c===i||c.nodeType===8&&c.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;c!==null;){if(o=Xr(c),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}c=c.parentNode}}r=r.return}y0(function(){var d=s,f=ef(n),g=[];e:{var m=H0.get(t);if(m!==void 0){var S=af,C=t;switch(t){case"keypress":if(hl(n)===0)break e;case"keydown":case"keyup":S=ZS;break;case"focusin":C="focus",S=Ou;break;case"focusout":C="blur",S=Ou;break;case"beforeblur":case"afterblur":S=Ou;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=sg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=BS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=nE;break;case $0:case U0:case W0:S=WS;break;case q0:S=iE;break;case"scroll":S=zS;break;case"wheel":S=oE;break;case"copy":case"cut":case"paste":S=HS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=ag}var j=(e&4)!==0,O=!j&&t==="scroll",E=j?m!==null?m+"Capture":null:m;j=[];for(var v=d,b;v!==null;){b=v;var P=b.stateNode;if(b.tag===5&&P!==null&&(b=P,E!==null&&(P=jo(v,E),P!=null&&j.push(zo(v,P,b)))),O)break;v=v.return}0<j.length&&(m=new S(m,C,null,n,f),g.push({event:m,listeners:j}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",S=t==="mouseout"||t==="pointerout",m&&n!==jd&&(C=n.relatedTarget||n.fromElement)&&(Xr(C)||C[Mn]))break e;if((S||m)&&(m=f.window===f?f:(m=f.ownerDocument)?m.defaultView||m.parentWindow:window,S?(C=n.relatedTarget||n.toElement,S=d,C=C?Xr(C):null,C!==null&&(O=bi(C),C!==O||C.tag!==5&&C.tag!==6)&&(C=null)):(S=null,C=d),S!==C)){if(j=sg,P="onMouseLeave",E="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(j=ag,P="onPointerLeave",E="onPointerEnter",v="pointer"),O=S==null?m:zi(S),b=C==null?m:zi(C),m=new j(P,v+"leave",S,n,f),m.target=O,m.relatedTarget=b,P=null,Xr(f)===d&&(j=new j(E,v+"enter",C,n,f),j.target=b,j.relatedTarget=O,P=j),O=P,S&&C)t:{for(j=S,E=C,v=0,b=j;b;b=Ai(b))v++;for(b=0,P=E;P;P=Ai(P))b++;for(;0<v-b;)j=Ai(j),v--;for(;0<b-v;)E=Ai(E),b--;for(;v--;){if(j===E||E!==null&&j===E.alternate)break t;j=Ai(j),E=Ai(E)}j=null}else j=null;S!==null&&vg(g,m,S,j,!1),C!==null&&O!==null&&vg(g,O,C,j,!0)}}e:{if(m=d?zi(d):window,S=m.nodeName&&m.nodeName.toLowerCase(),S==="select"||S==="input"&&m.type==="file")var L=fE;else if(ug(m))if(O0)L=yE;else{L=mE;var R=pE}else(S=m.nodeName)&&S.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(L=gE);if(L&&(L=L(t,d))){L0(g,L,n,f);break e}R&&R(t,m,d),t==="focusout"&&(R=m._wrapperState)&&R.controlled&&m.type==="number"&&kd(m,"number",m.value)}switch(R=d?zi(d):window,t){case"focusin":(ug(R)||R.contentEditable==="true")&&(Oi=R,zd=d,yo=null);break;case"focusout":yo=zd=Oi=null;break;case"mousedown":Fd=!0;break;case"contextmenu":case"mouseup":case"dragend":Fd=!1,mg(g,n,f);break;case"selectionchange":if(xE)break;case"keydown":case"keyup":mg(g,n,f)}var w;if(cf)e:{switch(t){case"compositionstart":var y="onCompositionStart";break e;case"compositionend":y="onCompositionEnd";break e;case"compositionupdate":y="onCompositionUpdate";break e}y=void 0}else Li?D0(t,n)&&(y="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(y="onCompositionStart");y&&(N0&&n.locale!=="ko"&&(Li||y!=="onCompositionStart"?y==="onCompositionEnd"&&Li&&(w=j0()):(lr=f,of="value"in lr?lr.value:lr.textContent,Li=!0)),R=Vl(d,y),0<R.length&&(y=new og(y,t,null,n,f),g.push({event:y,listeners:R}),w?y.data=w:(w=M0(n),w!==null&&(y.data=w)))),(w=lE?cE(t,n):uE(t,n))&&(d=Vl(d,"onBeforeInput"),0<d.length&&(f=new og("onBeforeInput","beforeinput",null,n,f),g.push({event:f,listeners:d}),f.data=w))}G0(g,e)})}function zo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Vl(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=jo(t,n),s!=null&&r.unshift(zo(t,s,i)),s=jo(t,e),s!=null&&r.push(zo(t,s,i))),t=t.return}return r}function Ai(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function vg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var c=n,u=c.alternate,d=c.stateNode;if(u!==null&&u===r)break;c.tag===5&&d!==null&&(c=d,i?(u=jo(n,s),u!=null&&o.unshift(zo(n,u,c))):i||(u=jo(n,s),u!=null&&o.push(zo(n,u,c)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var EE=/\r\n?/g,TE=/\u0000|\uFFFD/g;function wg(t){return(typeof t=="string"?t:""+t).replace(EE,`
`).replace(TE,"")}function Qa(t,e,n){if(e=wg(e),wg(t)!==e&&n)throw Error(F(425))}function zl(){}var Bd=null,$d=null;function Ud(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Wd=typeof setTimeout=="function"?setTimeout:void 0,IE=typeof clearTimeout=="function"?clearTimeout:void 0,xg=typeof Promise=="function"?Promise:void 0,kE=typeof queueMicrotask=="function"?queueMicrotask:typeof xg<"u"?function(t){return xg.resolve(null).then(t).catch(CE)}:Wd;function CE(t){setTimeout(function(){throw t})}function qu(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Mo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Mo(e)}function fr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function bg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var xs=Math.random().toString(36).slice(2),un="__reactFiber$"+xs,Fo="__reactProps$"+xs,Mn="__reactContainer$"+xs,qd="__reactEvents$"+xs,AE="__reactListeners$"+xs,RE="__reactHandles$"+xs;function Xr(t){var e=t[un];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Mn]||n[un]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=bg(t);t!==null;){if(n=t[un])return n;t=bg(t)}return e}t=n,n=t.parentNode}return null}function ua(t){return t=t[un]||t[Mn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(F(33))}function Cc(t){return t[Fo]||null}var Hd=[],Fi=-1;function Mr(t){return{current:t}}function ye(t){0>Fi||(t.current=Hd[Fi],Hd[Fi]=null,Fi--)}function fe(t,e){Fi++,Hd[Fi]=t.current,t.current=e}var Er={},rt=Mr(Er),gt=Mr(!1),ci=Er;function os(t,e){var n=t.type.contextTypes;if(!n)return Er;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function yt(t){return t=t.childContextTypes,t!=null}function Fl(){ye(gt),ye(rt)}function _g(t,e,n){if(rt.current!==Er)throw Error(F(168));fe(rt,e),fe(gt,n)}function K0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(F(108,pS(t)||"Unknown",i));return Ee({},n,r)}function Bl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Er,ci=rt.current,fe(rt,t),fe(gt,gt.current),!0}function Sg(t,e,n){var r=t.stateNode;if(!r)throw Error(F(169));n?(t=K0(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,ye(gt),ye(rt),fe(rt,t)):ye(gt),fe(gt,n)}var Sn=null,Ac=!1,Hu=!1;function Y0(t){Sn===null?Sn=[t]:Sn.push(t)}function PE(t){Ac=!0,Y0(t)}function Lr(){if(!Hu&&Sn!==null){Hu=!0;var t=0,e=ce;try{var n=Sn;for(ce=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Sn=null,Ac=!1}catch(i){throw Sn!==null&&(Sn=Sn.slice(t+1)),b0(tf,Lr),i}finally{ce=e,Hu=!1}}return null}var Bi=[],$i=0,$l=null,Ul=0,Rt=[],Pt=0,ui=null,En=1,Tn="";function Kr(t,e){Bi[$i++]=Ul,Bi[$i++]=$l,$l=t,Ul=e}function J0(t,e,n){Rt[Pt++]=En,Rt[Pt++]=Tn,Rt[Pt++]=ui,ui=t;var r=En;t=Tn;var i=32-Yt(r)-1;r&=~(1<<i),n+=1;var s=32-Yt(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,En=1<<32-Yt(e)+i|n<<i|r,Tn=s+t}else En=1<<s|n<<i|r,Tn=t}function df(t){t.return!==null&&(Kr(t,1),J0(t,1,0))}function hf(t){for(;t===$l;)$l=Bi[--$i],Bi[$i]=null,Ul=Bi[--$i],Bi[$i]=null;for(;t===ui;)ui=Rt[--Pt],Rt[Pt]=null,Tn=Rt[--Pt],Rt[Pt]=null,En=Rt[--Pt],Rt[Pt]=null}var Et=null,_t=null,xe=!1,Gt=null;function X0(t,e){var n=Dt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Eg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Et=t,_t=fr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Et=t,_t=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ui!==null?{id:En,overflow:Tn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Dt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Et=t,_t=null,!0):!1;default:return!1}}function Gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qd(t){if(xe){var e=_t;if(e){var n=e;if(!Eg(t,e)){if(Gd(t))throw Error(F(418));e=fr(n.nextSibling);var r=Et;e&&Eg(t,e)?X0(r,n):(t.flags=t.flags&-4097|2,xe=!1,Et=t)}}else{if(Gd(t))throw Error(F(418));t.flags=t.flags&-4097|2,xe=!1,Et=t}}}function Tg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Et=t}function Ka(t){if(t!==Et)return!1;if(!xe)return Tg(t),xe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ud(t.type,t.memoizedProps)),e&&(e=_t)){if(Gd(t))throw Z0(),Error(F(418));for(;e;)X0(t,e),e=fr(e.nextSibling)}if(Tg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(F(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){_t=fr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}_t=null}}else _t=Et?fr(t.stateNode.nextSibling):null;return!0}function Z0(){for(var t=_t;t;)t=fr(t.nextSibling)}function as(){_t=Et=null,xe=!1}function ff(t){Gt===null?Gt=[t]:Gt.push(t)}var jE=$n.ReactCurrentBatchConfig;function Ks(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(F(309));var r=n.stateNode}if(!r)throw Error(F(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var c=i.refs;o===null?delete c[s]:c[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(F(284));if(!n._owner)throw Error(F(290,t))}return t}function Ya(t,e){throw t=Object.prototype.toString.call(e),Error(F(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Ig(t){var e=t._init;return e(t._payload)}function e1(t){function e(E,v){if(t){var b=E.deletions;b===null?(E.deletions=[v],E.flags|=16):b.push(v)}}function n(E,v){if(!t)return null;for(;v!==null;)e(E,v),v=v.sibling;return null}function r(E,v){for(E=new Map;v!==null;)v.key!==null?E.set(v.key,v):E.set(v.index,v),v=v.sibling;return E}function i(E,v){return E=yr(E,v),E.index=0,E.sibling=null,E}function s(E,v,b){return E.index=b,t?(b=E.alternate,b!==null?(b=b.index,b<v?(E.flags|=2,v):b):(E.flags|=2,v)):(E.flags|=1048576,v)}function o(E){return t&&E.alternate===null&&(E.flags|=2),E}function c(E,v,b,P){return v===null||v.tag!==6?(v=Zu(b,E.mode,P),v.return=E,v):(v=i(v,b),v.return=E,v)}function u(E,v,b,P){var L=b.type;return L===Mi?f(E,v,b.props.children,P,b.key):v!==null&&(v.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Ig(L)===v.type)?(P=i(v,b.props),P.ref=Ks(E,v,b),P.return=E,P):(P=wl(b.type,b.key,b.props,null,E.mode,P),P.ref=Ks(E,v,b),P.return=E,P)}function d(E,v,b,P){return v===null||v.tag!==4||v.stateNode.containerInfo!==b.containerInfo||v.stateNode.implementation!==b.implementation?(v=ed(b,E.mode,P),v.return=E,v):(v=i(v,b.children||[]),v.return=E,v)}function f(E,v,b,P,L){return v===null||v.tag!==7?(v=ii(b,E.mode,P,L),v.return=E,v):(v=i(v,b),v.return=E,v)}function g(E,v,b){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Zu(""+v,E.mode,b),v.return=E,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case za:return b=wl(v.type,v.key,v.props,null,E.mode,b),b.ref=Ks(E,null,v),b.return=E,b;case Di:return v=ed(v,E.mode,b),v.return=E,v;case er:var P=v._init;return g(E,P(v._payload),b)}if(ro(v)||Ws(v))return v=ii(v,E.mode,b,null),v.return=E,v;Ya(E,v)}return null}function m(E,v,b,P){var L=v!==null?v.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return L!==null?null:c(E,v,""+b,P);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case za:return b.key===L?u(E,v,b,P):null;case Di:return b.key===L?d(E,v,b,P):null;case er:return L=b._init,m(E,v,L(b._payload),P)}if(ro(b)||Ws(b))return L!==null?null:f(E,v,b,P,null);Ya(E,b)}return null}function S(E,v,b,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return E=E.get(b)||null,c(v,E,""+P,L);if(typeof P=="object"&&P!==null){switch(P.$$typeof){case za:return E=E.get(P.key===null?b:P.key)||null,u(v,E,P,L);case Di:return E=E.get(P.key===null?b:P.key)||null,d(v,E,P,L);case er:var R=P._init;return S(E,v,b,R(P._payload),L)}if(ro(P)||Ws(P))return E=E.get(b)||null,f(v,E,P,L,null);Ya(v,P)}return null}function C(E,v,b,P){for(var L=null,R=null,w=v,y=v=0,I=null;w!==null&&y<b.length;y++){w.index>y?(I=w,w=null):I=w.sibling;var k=m(E,w,b[y],P);if(k===null){w===null&&(w=I);break}t&&w&&k.alternate===null&&e(E,w),v=s(k,v,y),R===null?L=k:R.sibling=k,R=k,w=I}if(y===b.length)return n(E,w),xe&&Kr(E,y),L;if(w===null){for(;y<b.length;y++)w=g(E,b[y],P),w!==null&&(v=s(w,v,y),R===null?L=w:R.sibling=w,R=w);return xe&&Kr(E,y),L}for(w=r(E,w);y<b.length;y++)I=S(w,E,y,b[y],P),I!==null&&(t&&I.alternate!==null&&w.delete(I.key===null?y:I.key),v=s(I,v,y),R===null?L=I:R.sibling=I,R=I);return t&&w.forEach(function(T){return e(E,T)}),xe&&Kr(E,y),L}function j(E,v,b,P){var L=Ws(b);if(typeof L!="function")throw Error(F(150));if(b=L.call(b),b==null)throw Error(F(151));for(var R=L=null,w=v,y=v=0,I=null,k=b.next();w!==null&&!k.done;y++,k=b.next()){w.index>y?(I=w,w=null):I=w.sibling;var T=m(E,w,k.value,P);if(T===null){w===null&&(w=I);break}t&&w&&T.alternate===null&&e(E,w),v=s(T,v,y),R===null?L=T:R.sibling=T,R=T,w=I}if(k.done)return n(E,w),xe&&Kr(E,y),L;if(w===null){for(;!k.done;y++,k=b.next())k=g(E,k.value,P),k!==null&&(v=s(k,v,y),R===null?L=k:R.sibling=k,R=k);return xe&&Kr(E,y),L}for(w=r(E,w);!k.done;y++,k=b.next())k=S(w,E,y,k.value,P),k!==null&&(t&&k.alternate!==null&&w.delete(k.key===null?y:k.key),v=s(k,v,y),R===null?L=k:R.sibling=k,R=k);return t&&w.forEach(function(A){return e(E,A)}),xe&&Kr(E,y),L}function O(E,v,b,P){if(typeof b=="object"&&b!==null&&b.type===Mi&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case za:e:{for(var L=b.key,R=v;R!==null;){if(R.key===L){if(L=b.type,L===Mi){if(R.tag===7){n(E,R.sibling),v=i(R,b.props.children),v.return=E,E=v;break e}}else if(R.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===er&&Ig(L)===R.type){n(E,R.sibling),v=i(R,b.props),v.ref=Ks(E,R,b),v.return=E,E=v;break e}n(E,R);break}else e(E,R);R=R.sibling}b.type===Mi?(v=ii(b.props.children,E.mode,P,b.key),v.return=E,E=v):(P=wl(b.type,b.key,b.props,null,E.mode,P),P.ref=Ks(E,v,b),P.return=E,E=P)}return o(E);case Di:e:{for(R=b.key;v!==null;){if(v.key===R)if(v.tag===4&&v.stateNode.containerInfo===b.containerInfo&&v.stateNode.implementation===b.implementation){n(E,v.sibling),v=i(v,b.children||[]),v.return=E,E=v;break e}else{n(E,v);break}else e(E,v);v=v.sibling}v=ed(b,E.mode,P),v.return=E,E=v}return o(E);case er:return R=b._init,O(E,v,R(b._payload),P)}if(ro(b))return C(E,v,b,P);if(Ws(b))return j(E,v,b,P);Ya(E,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,v!==null&&v.tag===6?(n(E,v.sibling),v=i(v,b),v.return=E,E=v):(n(E,v),v=Zu(b,E.mode,P),v.return=E,E=v),o(E)):n(E,v)}return O}var ls=e1(!0),t1=e1(!1),Wl=Mr(null),ql=null,Ui=null,pf=null;function mf(){pf=Ui=ql=null}function gf(t){var e=Wl.current;ye(Wl),t._currentValue=e}function Kd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Ji(t,e){ql=t,pf=Ui=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(mt=!0),t.firstContext=null)}function Ft(t){var e=t._currentValue;if(pf!==t)if(t={context:t,memoizedValue:e,next:null},Ui===null){if(ql===null)throw Error(F(308));Ui=t,ql.dependencies={lanes:0,firstContext:t}}else Ui=Ui.next=t;return e}var Zr=null;function yf(t){Zr===null?Zr=[t]:Zr.push(t)}function n1(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,yf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Ln(t,r)}function Ln(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var tr=!1;function vf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function r1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Rn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,ae&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Ln(t,n)}return i=r.interleaved,i===null?(e.next=e,yf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Ln(t,n)}function fl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}function kg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Hl(t,e,n,r){var i=t.updateQueue;tr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,c=i.shared.pending;if(c!==null){i.shared.pending=null;var u=c,d=u.next;u.next=null,o===null?s=d:o.next=d,o=u;var f=t.alternate;f!==null&&(f=f.updateQueue,c=f.lastBaseUpdate,c!==o&&(c===null?f.firstBaseUpdate=d:c.next=d,f.lastBaseUpdate=u))}if(s!==null){var g=i.baseState;o=0,f=d=u=null,c=s;do{var m=c.lane,S=c.eventTime;if((r&m)===m){f!==null&&(f=f.next={eventTime:S,lane:0,tag:c.tag,payload:c.payload,callback:c.callback,next:null});e:{var C=t,j=c;switch(m=e,S=n,j.tag){case 1:if(C=j.payload,typeof C=="function"){g=C.call(S,g,m);break e}g=C;break e;case 3:C.flags=C.flags&-65537|128;case 0:if(C=j.payload,m=typeof C=="function"?C.call(S,g,m):C,m==null)break e;g=Ee({},g,m);break e;case 2:tr=!0}}c.callback!==null&&c.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[c]:m.push(c))}else S={eventTime:S,lane:m,tag:c.tag,payload:c.payload,callback:c.callback,next:null},f===null?(d=f=S,u=g):f=f.next=S,o|=m;if(c=c.next,c===null){if(c=i.shared.pending,c===null)break;m=c,c=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(!0);if(f===null&&(u=g),i.baseState=u,i.firstBaseUpdate=d,i.lastBaseUpdate=f,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);hi|=o,t.lanes=o,t.memoizedState=g}}function Cg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(F(191,i));i.call(r)}}}var da={},hn=Mr(da),Bo=Mr(da),$o=Mr(da);function ei(t){if(t===da)throw Error(F(174));return t}function wf(t,e){switch(fe($o,e),fe(Bo,t),fe(hn,da),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ad(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ad(e,t)}ye(hn),fe(hn,e)}function cs(){ye(hn),ye(Bo),ye($o)}function i1(t){ei($o.current);var e=ei(hn.current),n=Ad(e,t.type);e!==n&&(fe(Bo,t),fe(hn,n))}function xf(t){Bo.current===t&&(ye(hn),ye(Bo))}var _e=Mr(0);function Gl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Gu=[];function bf(){for(var t=0;t<Gu.length;t++)Gu[t]._workInProgressVersionPrimary=null;Gu.length=0}var pl=$n.ReactCurrentDispatcher,Qu=$n.ReactCurrentBatchConfig,di=0,Se=null,Oe=null,$e=null,Ql=!1,vo=!1,Uo=0,NE=0;function Je(){throw Error(F(321))}function _f(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Zt(t[n],e[n]))return!1;return!0}function Sf(t,e,n,r,i,s){if(di=s,Se=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,pl.current=t===null||t.memoizedState===null?OE:VE,t=n(r,i),vo){s=0;do{if(vo=!1,Uo=0,25<=s)throw Error(F(301));s+=1,$e=Oe=null,e.updateQueue=null,pl.current=zE,t=n(r,i)}while(vo)}if(pl.current=Kl,e=Oe!==null&&Oe.next!==null,di=0,$e=Oe=Se=null,Ql=!1,e)throw Error(F(300));return t}function Ef(){var t=Uo!==0;return Uo=0,t}function ln(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return $e===null?Se.memoizedState=$e=t:$e=$e.next=t,$e}function Bt(){if(Oe===null){var t=Se.alternate;t=t!==null?t.memoizedState:null}else t=Oe.next;var e=$e===null?Se.memoizedState:$e.next;if(e!==null)$e=e,Oe=t;else{if(t===null)throw Error(F(310));Oe=t,t={memoizedState:Oe.memoizedState,baseState:Oe.baseState,baseQueue:Oe.baseQueue,queue:Oe.queue,next:null},$e===null?Se.memoizedState=$e=t:$e=$e.next=t}return $e}function Wo(t,e){return typeof e=="function"?e(t):e}function Ku(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=Oe,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var c=o=null,u=null,d=s;do{var f=d.lane;if((di&f)===f)u!==null&&(u=u.next={lane:0,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null}),r=d.hasEagerState?d.eagerState:t(r,d.action);else{var g={lane:f,action:d.action,hasEagerState:d.hasEagerState,eagerState:d.eagerState,next:null};u===null?(c=u=g,o=r):u=u.next=g,Se.lanes|=f,hi|=f}d=d.next}while(d!==null&&d!==s);u===null?o=r:u.next=c,Zt(r,e.memoizedState)||(mt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=u,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Se.lanes|=s,hi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Yu(t){var e=Bt(),n=e.queue;if(n===null)throw Error(F(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Zt(s,e.memoizedState)||(mt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function s1(){}function o1(t,e){var n=Se,r=Bt(),i=e(),s=!Zt(r.memoizedState,i);if(s&&(r.memoizedState=i,mt=!0),r=r.queue,Tf(c1.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||$e!==null&&$e.memoizedState.tag&1){if(n.flags|=2048,qo(9,l1.bind(null,n,r,i,e),void 0,null),Ue===null)throw Error(F(349));di&30||a1(n,e,i)}return i}function a1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function l1(t,e,n,r){e.value=n,e.getSnapshot=r,u1(e)&&d1(t)}function c1(t,e,n){return n(function(){u1(e)&&d1(t)})}function u1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Zt(t,n)}catch{return!0}}function d1(t){var e=Ln(t,1);e!==null&&Jt(e,t,1,-1)}function Ag(t){var e=ln();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:t},e.queue=t,t=t.dispatch=LE.bind(null,Se,t),[e.memoizedState,t]}function qo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Se.updateQueue,e===null?(e={lastEffect:null,stores:null},Se.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function h1(){return Bt().memoizedState}function ml(t,e,n,r){var i=ln();Se.flags|=t,i.memoizedState=qo(1|e,n,void 0,r===void 0?null:r)}function Rc(t,e,n,r){var i=Bt();r=r===void 0?null:r;var s=void 0;if(Oe!==null){var o=Oe.memoizedState;if(s=o.destroy,r!==null&&_f(r,o.deps)){i.memoizedState=qo(e,n,s,r);return}}Se.flags|=t,i.memoizedState=qo(1|e,n,s,r)}function Rg(t,e){return ml(8390656,8,t,e)}function Tf(t,e){return Rc(2048,8,t,e)}function f1(t,e){return Rc(4,2,t,e)}function p1(t,e){return Rc(4,4,t,e)}function m1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function g1(t,e,n){return n=n!=null?n.concat([t]):null,Rc(4,4,m1.bind(null,e,t),n)}function If(){}function y1(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function v1(t,e){var n=Bt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&_f(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function w1(t,e,n){return di&21?(Zt(n,e)||(n=E0(),Se.lanes|=n,hi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,mt=!0),t.memoizedState=n)}function DE(t,e){var n=ce;ce=n!==0&&4>n?n:4,t(!0);var r=Qu.transition;Qu.transition={};try{t(!1),e()}finally{ce=n,Qu.transition=r}}function x1(){return Bt().memoizedState}function ME(t,e,n){var r=gr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},b1(t))_1(e,n);else if(n=n1(t,e,n,r),n!==null){var i=lt();Jt(n,t,r,i),S1(n,e,r)}}function LE(t,e,n){var r=gr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(b1(t))_1(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,c=s(o,n);if(i.hasEagerState=!0,i.eagerState=c,Zt(c,o)){var u=e.interleaved;u===null?(i.next=i,yf(e)):(i.next=u.next,u.next=i),e.interleaved=i;return}}catch{}finally{}n=n1(t,e,i,r),n!==null&&(i=lt(),Jt(n,t,r,i),S1(n,e,r))}}function b1(t){var e=t.alternate;return t===Se||e!==null&&e===Se}function _1(t,e){vo=Ql=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S1(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,nf(t,n)}}var Kl={readContext:Ft,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},OE={readContext:Ft,useCallback:function(t,e){return ln().memoizedState=[t,e===void 0?null:e],t},useContext:Ft,useEffect:Rg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ml(4194308,4,m1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ml(4194308,4,t,e)},useInsertionEffect:function(t,e){return ml(4,2,t,e)},useMemo:function(t,e){var n=ln();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=ln();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=ME.bind(null,Se,t),[r.memoizedState,t]},useRef:function(t){var e=ln();return t={current:t},e.memoizedState=t},useState:Ag,useDebugValue:If,useDeferredValue:function(t){return ln().memoizedState=t},useTransition:function(){var t=Ag(!1),e=t[0];return t=DE.bind(null,t[1]),ln().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Se,i=ln();if(xe){if(n===void 0)throw Error(F(407));n=n()}else{if(n=e(),Ue===null)throw Error(F(349));di&30||a1(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Rg(c1.bind(null,r,s,t),[t]),r.flags|=2048,qo(9,l1.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=ln(),e=Ue.identifierPrefix;if(xe){var n=Tn,r=En;n=(r&~(1<<32-Yt(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=NE++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},VE={readContext:Ft,useCallback:y1,useContext:Ft,useEffect:Tf,useImperativeHandle:g1,useInsertionEffect:f1,useLayoutEffect:p1,useMemo:v1,useReducer:Ku,useRef:h1,useState:function(){return Ku(Wo)},useDebugValue:If,useDeferredValue:function(t){var e=Bt();return w1(e,Oe.memoizedState,t)},useTransition:function(){var t=Ku(Wo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:o1,useId:x1,unstable_isNewReconciler:!1},zE={readContext:Ft,useCallback:y1,useContext:Ft,useEffect:Tf,useImperativeHandle:g1,useInsertionEffect:f1,useLayoutEffect:p1,useMemo:v1,useReducer:Yu,useRef:h1,useState:function(){return Yu(Wo)},useDebugValue:If,useDeferredValue:function(t){var e=Bt();return Oe===null?e.memoizedState=t:w1(e,Oe.memoizedState,t)},useTransition:function(){var t=Yu(Wo)[0],e=Bt().memoizedState;return[t,e]},useMutableSource:s1,useSyncExternalStore:o1,useId:x1,unstable_isNewReconciler:!1};function qt(t,e){if(t&&t.defaultProps){e=Ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Yd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Pc={isMounted:function(t){return(t=t._reactInternals)?bi(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=lt(),i=gr(t),s=Rn(r,i);s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Jt(e,t,i,r),fl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=lt(),i=gr(t),s=Rn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=pr(t,s,i),e!==null&&(Jt(e,t,i,r),fl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=lt(),r=gr(t),i=Rn(n,r);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,r),e!==null&&(Jt(e,t,r,n),fl(e,t,r))}};function Pg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,r)||!Oo(i,s):!0}function E1(t,e,n){var r=!1,i=Er,s=e.contextType;return typeof s=="object"&&s!==null?s=Ft(s):(i=yt(e)?ci:rt.current,r=e.contextTypes,s=(r=r!=null)?os(t,i):Er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Pc,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function jg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Pc.enqueueReplaceState(e,e.state,null)}function Jd(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},vf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=Ft(s):(s=yt(e)?ci:rt.current,i.context=os(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Yd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Pc.enqueueReplaceState(i,i.state,null),Hl(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function us(t,e){try{var n="",r=e;do n+=fS(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Ju(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Xd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FE=typeof WeakMap=="function"?WeakMap:Map;function T1(t,e,n){n=Rn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Jl||(Jl=!0,lh=r),Xd(t,e)},n}function I1(t,e,n){n=Rn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Xd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Xd(t,e),typeof r!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Ng(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new FE;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=e2.bind(null,t,e,n),e.then(t,t))}function Dg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Mg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Rn(-1,1),e.tag=2,pr(n,e,1))),n.lanes|=1),t)}var BE=$n.ReactCurrentOwner,mt=!1;function at(t,e,n,r){e.child=t===null?t1(e,null,n,r):ls(e,t.child,n,r)}function Lg(t,e,n,r,i){n=n.render;var s=e.ref;return Ji(e,i),r=Sf(t,e,n,r,s,i),n=Ef(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(xe&&n&&df(e),e.flags|=1,at(t,e,r,i),e.child)}function Og(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Df(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,k1(t,e,s,r,i)):(t=wl(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,r)&&t.ref===e.ref)return On(t,e,i)}return e.flags|=1,t=yr(s,r),t.ref=e.ref,t.return=e,e.child=t}function k1(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Oo(s,r)&&t.ref===e.ref)if(mt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(mt=!0);else return e.lanes=t.lanes,On(t,e,i)}return Zd(t,e,n,r,i)}function C1(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},fe(qi,xt),xt|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,fe(qi,xt),xt|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,fe(qi,xt),xt|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,fe(qi,xt),xt|=r;return at(t,e,i,n),e.child}function A1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Zd(t,e,n,r,i){var s=yt(n)?ci:rt.current;return s=os(e,s),Ji(e,i),n=Sf(t,e,n,r,s,i),r=Ef(),t!==null&&!mt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,On(t,e,i)):(xe&&r&&df(e),e.flags|=1,at(t,e,n,i),e.child)}function Vg(t,e,n,r,i){if(yt(n)){var s=!0;Bl(e)}else s=!1;if(Ji(e,i),e.stateNode===null)gl(t,e),E1(e,n,r),Jd(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,c=e.memoizedProps;o.props=c;var u=o.context,d=n.contextType;typeof d=="object"&&d!==null?d=Ft(d):(d=yt(n)?ci:rt.current,d=os(e,d));var f=n.getDerivedStateFromProps,g=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";g||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==r||u!==d)&&jg(e,o,r,d),tr=!1;var m=e.memoizedState;o.state=m,Hl(e,r,o,i),u=e.memoizedState,c!==r||m!==u||gt.current||tr?(typeof f=="function"&&(Yd(e,n,f,r),u=e.memoizedState),(c=tr||Pg(e,n,c,r,m,u,d))?(g||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=d,r=c):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,r1(t,e),c=e.memoizedProps,d=e.type===e.elementType?c:qt(e.type,c),o.props=d,g=e.pendingProps,m=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=Ft(u):(u=yt(n)?ci:rt.current,u=os(e,u));var S=n.getDerivedStateFromProps;(f=typeof S=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(c!==g||m!==u)&&jg(e,o,r,u),tr=!1,m=e.memoizedState,o.state=m,Hl(e,r,o,i);var C=e.memoizedState;c!==g||m!==C||gt.current||tr?(typeof S=="function"&&(Yd(e,n,S,r),C=e.memoizedState),(d=tr||Pg(e,n,d,r,m,C,u)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,C,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,C,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=C),o.props=r,o.state=C,o.context=u,r=d):(typeof o.componentDidUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||c===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return eh(t,e,n,r,s,i)}function eh(t,e,n,r,i,s){A1(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&Sg(e,n,!1),On(t,e,s);r=e.stateNode,BE.current=e;var c=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=ls(e,t.child,null,s),e.child=ls(e,null,c,s)):at(t,e,c,s),e.memoizedState=r.state,i&&Sg(e,n,!0),e.child}function R1(t){var e=t.stateNode;e.pendingContext?_g(t,e.pendingContext,e.pendingContext!==e.context):e.context&&_g(t,e.context,!1),wf(t,e.containerInfo)}function zg(t,e,n,r,i){return as(),ff(i),e.flags|=256,at(t,e,n,r),e.child}var th={dehydrated:null,treeContext:null,retryLane:0};function nh(t){return{baseLanes:t,cachePool:null,transitions:null}}function P1(t,e,n){var r=e.pendingProps,i=_e.current,s=!1,o=(e.flags&128)!==0,c;if((c=o)||(c=t!==null&&t.memoizedState===null?!1:(i&2)!==0),c?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),fe(_e,i&1),t===null)return Qd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Dc(o,r,0,null),t=ii(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=nh(n),e.memoizedState=th,t):kf(e,o));if(i=t.memoizedState,i!==null&&(c=i.dehydrated,c!==null))return $E(t,e,o,r,c,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,c=i.sibling;var u={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=u,e.deletions=null):(r=yr(i,u),r.subtreeFlags=i.subtreeFlags&14680064),c!==null?s=yr(c,s):(s=ii(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?nh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=th,r}return s=t.child,t=s.sibling,r=yr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function kf(t,e){return e=Dc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ja(t,e,n,r){return r!==null&&ff(r),ls(e,t.child,null,n),t=kf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function $E(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Ju(Error(F(422))),Ja(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Dc({mode:"visible",children:r.children},i,0,null),s=ii(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&ls(e,t.child,null,o),e.child.memoizedState=nh(o),e.memoizedState=th,s);if(!(e.mode&1))return Ja(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var c=r.dgst;return r=c,s=Error(F(419)),r=Ju(s,r,void 0),Ja(t,e,o,r)}if(c=(o&t.childLanes)!==0,mt||c){if(r=Ue,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Ln(t,i),Jt(r,t,i,-1))}return Nf(),r=Ju(Error(F(421))),Ja(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=t2.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,_t=fr(i.nextSibling),Et=e,xe=!0,Gt=null,t!==null&&(Rt[Pt++]=En,Rt[Pt++]=Tn,Rt[Pt++]=ui,En=t.id,Tn=t.overflow,ui=e),e=kf(e,r.children),e.flags|=4096,e)}function Fg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Kd(t.return,e,n)}function Xu(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function j1(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(at(t,e,r.children,n),r=_e.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Fg(t,n,e);else if(t.tag===19)Fg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(fe(_e,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Gl(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xu(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Gl(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xu(e,!0,n,null,s);break;case"together":Xu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function gl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function On(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),hi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(F(153));if(e.child!==null){for(t=e.child,n=yr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=yr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function UE(t,e,n){switch(e.tag){case 3:R1(e),as();break;case 5:i1(e);break;case 1:yt(e.type)&&Bl(e);break;case 4:wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;fe(Wl,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(fe(_e,_e.current&1),e.flags|=128,null):n&e.child.childLanes?P1(t,e,n):(fe(_e,_e.current&1),t=On(t,e,n),t!==null?t.sibling:null);fe(_e,_e.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return j1(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),fe(_e,_e.current),r)break;return null;case 22:case 23:return e.lanes=0,C1(t,e,n)}return On(t,e,n)}var N1,rh,D1,M1;N1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rh=function(){};D1=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ei(hn.current);var s=null;switch(n){case"input":i=Td(t,i),r=Td(t,r),s=[];break;case"select":i=Ee({},i,{value:void 0}),r=Ee({},r,{value:void 0}),s=[];break;case"textarea":i=Cd(t,i),r=Cd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=zl)}Rd(n,r);var o;n=null;for(d in i)if(!r.hasOwnProperty(d)&&i.hasOwnProperty(d)&&i[d]!=null)if(d==="style"){var c=i[d];for(o in c)c.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else d!=="dangerouslySetInnerHTML"&&d!=="children"&&d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(Ro.hasOwnProperty(d)?s||(s=[]):(s=s||[]).push(d,null));for(d in r){var u=r[d];if(c=i!=null?i[d]:void 0,r.hasOwnProperty(d)&&u!==c&&(u!=null||c!=null))if(d==="style")if(c){for(o in c)!c.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&c[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(d,n)),n=u;else d==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,c=c?c.__html:void 0,u!=null&&c!==u&&(s=s||[]).push(d,u)):d==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(d,""+u):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(d)?(u!=null&&d==="onScroll"&&me("scroll",t),s||c===u||(s=[])):(s=s||[]).push(d,u))}n&&(s=s||[]).push("style",n);var d=s;(e.updateQueue=d)&&(e.flags|=4)}};M1=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ys(t,e){if(!xe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Xe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function WE(t,e,n){var r=e.pendingProps;switch(hf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Xe(e),null;case 1:return yt(e.type)&&Fl(),Xe(e),null;case 3:return r=e.stateNode,cs(),ye(gt),ye(rt),bf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Ka(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Gt!==null&&(dh(Gt),Gt=null))),rh(t,e),Xe(e),null;case 5:xf(e);var i=ei($o.current);if(n=e.type,t!==null&&e.stateNode!=null)D1(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(F(166));return Xe(e),null}if(t=ei(hn.current),Ka(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[un]=e,r[Fo]=s,t=(e.mode&1)!==0,n){case"dialog":me("cancel",r),me("close",r);break;case"iframe":case"object":case"embed":me("load",r);break;case"video":case"audio":for(i=0;i<so.length;i++)me(so[i],r);break;case"source":me("error",r);break;case"img":case"image":case"link":me("error",r),me("load",r);break;case"details":me("toggle",r);break;case"input":Km(r,s),me("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},me("invalid",r);break;case"textarea":Jm(r,s),me("invalid",r)}Rd(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var c=s[o];o==="children"?typeof c=="string"?r.textContent!==c&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,c,t),i=["children",c]):typeof c=="number"&&r.textContent!==""+c&&(s.suppressHydrationWarning!==!0&&Qa(r.textContent,c,t),i=["children",""+c]):Ro.hasOwnProperty(o)&&c!=null&&o==="onScroll"&&me("scroll",r)}switch(n){case"input":Fa(r),Ym(r,s,!0);break;case"textarea":Fa(r),Xm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=zl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=c0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[un]=e,t[Fo]=r,N1(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pd(n,r),n){case"dialog":me("cancel",t),me("close",t),i=r;break;case"iframe":case"object":case"embed":me("load",t),i=r;break;case"video":case"audio":for(i=0;i<so.length;i++)me(so[i],t);i=r;break;case"source":me("error",t),i=r;break;case"img":case"image":case"link":me("error",t),me("load",t),i=r;break;case"details":me("toggle",t),i=r;break;case"input":Km(t,r),i=Td(t,r),me("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ee({},r,{value:void 0}),me("invalid",t);break;case"textarea":Jm(t,r),i=Cd(t,r),me("invalid",t);break;default:i=r}Rd(n,i),c=i;for(s in c)if(c.hasOwnProperty(s)){var u=c[s];s==="style"?h0(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&u0(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Po(t,u):typeof u=="number"&&Po(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ro.hasOwnProperty(s)?u!=null&&s==="onScroll"&&me("scroll",t):u!=null&&Yh(t,s,u,o))}switch(n){case"input":Fa(t),Ym(t,r,!1);break;case"textarea":Fa(t),Xm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Gi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Gi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=zl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Xe(e),null;case 6:if(t&&e.stateNode!=null)M1(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(F(166));if(n=ei($o.current),ei(hn.current),Ka(e)){if(r=e.stateNode,n=e.memoizedProps,r[un]=e,(s=r.nodeValue!==n)&&(t=Et,t!==null))switch(t.tag){case 3:Qa(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Qa(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[un]=e,e.stateNode=r}return Xe(e),null;case 13:if(ye(_e),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(xe&&_t!==null&&e.mode&1&&!(e.flags&128))Z0(),as(),e.flags|=98560,s=!1;else if(s=Ka(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(F(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(F(317));s[un]=e}else as(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Xe(e),s=!1}else Gt!==null&&(dh(Gt),Gt=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||_e.current&1?Ve===0&&(Ve=3):Nf())),e.updateQueue!==null&&(e.flags|=4),Xe(e),null);case 4:return cs(),rh(t,e),t===null&&Vo(e.stateNode.containerInfo),Xe(e),null;case 10:return gf(e.type._context),Xe(e),null;case 17:return yt(e.type)&&Fl(),Xe(e),null;case 19:if(ye(_e),s=e.memoizedState,s===null)return Xe(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ys(s,!1);else{if(Ve!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Gl(t),o!==null){for(e.flags|=128,Ys(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return fe(_e,_e.current&1|2),e.child}t=t.sibling}s.tail!==null&&Re()>ds&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304)}else{if(!r)if(t=Gl(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ys(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!xe)return Xe(e),null}else 2*Re()-s.renderingStartTime>ds&&n!==1073741824&&(e.flags|=128,r=!0,Ys(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Re(),e.sibling=null,n=_e.current,fe(_e,r?n&1|2:n&1),e):(Xe(e),null);case 22:case 23:return jf(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?xt&1073741824&&(Xe(e),e.subtreeFlags&6&&(e.flags|=8192)):Xe(e),null;case 24:return null;case 25:return null}throw Error(F(156,e.tag))}function qE(t,e){switch(hf(e),e.tag){case 1:return yt(e.type)&&Fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return cs(),ye(gt),ye(rt),bf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return xf(e),null;case 13:if(ye(_e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(F(340));as()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ye(_e),null;case 4:return cs(),null;case 10:return gf(e.type._context),null;case 22:case 23:return jf(),null;case 24:return null;default:return null}}var Xa=!1,tt=!1,HE=typeof WeakSet=="function"?WeakSet:Set,q=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(t,e,r)}else n.current=null}function ih(t,e,n){try{n()}catch(r){Ie(t,e,r)}}var Bg=!1;function GE(t,e){if(Bd=Ll,t=F0(),uf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,c=-1,u=-1,d=0,f=0,g=t,m=null;t:for(;;){for(var S;g!==n||i!==0&&g.nodeType!==3||(c=o+i),g!==s||r!==0&&g.nodeType!==3||(u=o+r),g.nodeType===3&&(o+=g.nodeValue.length),(S=g.firstChild)!==null;)m=g,g=S;for(;;){if(g===t)break t;if(m===n&&++d===i&&(c=o),m===s&&++f===r&&(u=o),(S=g.nextSibling)!==null)break;g=m,m=g.parentNode}g=S}n=c===-1||u===-1?null:{start:c,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for($d={focusedElem:t,selectionRange:n},Ll=!1,q=e;q!==null;)if(e=q,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,q=t;else for(;q!==null;){e=q;try{var C=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(C!==null){var j=C.memoizedProps,O=C.memoizedState,E=e.stateNode,v=E.getSnapshotBeforeUpdate(e.elementType===e.type?j:qt(e.type,j),O);E.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var b=e.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(F(163))}}catch(P){Ie(e,e.return,P)}if(t=e.sibling,t!==null){t.return=e.return,q=t;break}q=e.return}return C=Bg,Bg=!1,C}function wo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&ih(e,n,s)}i=i.next}while(i!==r)}}function jc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function sh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function L1(t){var e=t.alternate;e!==null&&(t.alternate=null,L1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[un],delete e[Fo],delete e[qd],delete e[AE],delete e[RE])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function O1(t){return t.tag===5||t.tag===3||t.tag===4}function $g(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||O1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function oh(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=zl));else if(r!==4&&(t=t.child,t!==null))for(oh(t,e,n),t=t.sibling;t!==null;)oh(t,e,n),t=t.sibling}function ah(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}var We=null,Ht=!1;function Xn(t,e,n){for(n=n.child;n!==null;)V1(t,e,n),n=n.sibling}function V1(t,e,n){if(dn&&typeof dn.onCommitFiberUnmount=="function")try{dn.onCommitFiberUnmount(Ec,n)}catch{}switch(n.tag){case 5:tt||Wi(n,e);case 6:var r=We,i=Ht;We=null,Xn(t,e,n),We=r,Ht=i,We!==null&&(Ht?(t=We,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):We.removeChild(n.stateNode));break;case 18:We!==null&&(Ht?(t=We,n=n.stateNode,t.nodeType===8?qu(t.parentNode,n):t.nodeType===1&&qu(t,n),Mo(t)):qu(We,n.stateNode));break;case 4:r=We,i=Ht,We=n.stateNode.containerInfo,Ht=!0,Xn(t,e,n),We=r,Ht=i;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ih(n,e,o),i=i.next}while(i!==r)}Xn(t,e,n);break;case 1:if(!tt&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(c){Ie(n,e,c)}Xn(t,e,n);break;case 21:Xn(t,e,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Xn(t,e,n),tt=r):Xn(t,e,n);break;default:Xn(t,e,n)}}function Ug(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HE),e.forEach(function(r){var i=n2.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Ut(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,c=o;e:for(;c!==null;){switch(c.tag){case 5:We=c.stateNode,Ht=!1;break e;case 3:We=c.stateNode.containerInfo,Ht=!0;break e;case 4:We=c.stateNode.containerInfo,Ht=!0;break e}c=c.return}if(We===null)throw Error(F(160));V1(s,o,i),We=null,Ht=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(d){Ie(i,e,d)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)z1(e,t),e=e.sibling}function z1(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ut(e,t),an(t),r&4){try{wo(3,t,t.return),jc(3,t)}catch(j){Ie(t,t.return,j)}try{wo(5,t,t.return)}catch(j){Ie(t,t.return,j)}}break;case 1:Ut(e,t),an(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(Ut(e,t),an(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{Po(i,"")}catch(j){Ie(t,t.return,j)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,c=t.type,u=t.updateQueue;if(t.updateQueue=null,u!==null)try{c==="input"&&s.type==="radio"&&s.name!=null&&a0(i,s),Pd(c,o);var d=Pd(c,s);for(o=0;o<u.length;o+=2){var f=u[o],g=u[o+1];f==="style"?h0(i,g):f==="dangerouslySetInnerHTML"?u0(i,g):f==="children"?Po(i,g):Yh(i,f,g,d)}switch(c){case"input":Id(i,s);break;case"textarea":l0(i,s);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var S=s.value;S!=null?Gi(i,!!s.multiple,S,!1):m!==!!s.multiple&&(s.defaultValue!=null?Gi(i,!!s.multiple,s.defaultValue,!0):Gi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Fo]=s}catch(j){Ie(t,t.return,j)}}break;case 6:if(Ut(e,t),an(t),r&4){if(t.stateNode===null)throw Error(F(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(j){Ie(t,t.return,j)}}break;case 3:if(Ut(e,t),an(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Mo(e.containerInfo)}catch(j){Ie(t,t.return,j)}break;case 4:Ut(e,t),an(t);break;case 13:Ut(e,t),an(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Rf=Re())),r&4&&Ug(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(tt=(d=tt)||f,Ut(e,t),tt=d):Ut(e,t),an(t),r&8192){if(d=t.memoizedState!==null,(t.stateNode.isHidden=d)&&!f&&t.mode&1)for(q=t,f=t.child;f!==null;){for(g=q=f;q!==null;){switch(m=q,S=m.child,m.tag){case 0:case 11:case 14:case 15:wo(4,m,m.return);break;case 1:Wi(m,m.return);var C=m.stateNode;if(typeof C.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,C.props=e.memoizedProps,C.state=e.memoizedState,C.componentWillUnmount()}catch(j){Ie(r,n,j)}}break;case 5:Wi(m,m.return);break;case 22:if(m.memoizedState!==null){qg(g);continue}}S!==null?(S.return=m,q=S):qg(g)}f=f.sibling}e:for(f=null,g=t;;){if(g.tag===5){if(f===null){f=g;try{i=g.stateNode,d?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(c=g.stateNode,u=g.memoizedProps.style,o=u!=null&&u.hasOwnProperty("display")?u.display:null,c.style.display=d0("display",o))}catch(j){Ie(t,t.return,j)}}}else if(g.tag===6){if(f===null)try{g.stateNode.nodeValue=d?"":g.memoizedProps}catch(j){Ie(t,t.return,j)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===t)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===t)break e;for(;g.sibling===null;){if(g.return===null||g.return===t)break e;f===g&&(f=null),g=g.return}f===g&&(f=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:Ut(e,t),an(t),r&4&&Ug(t);break;case 21:break;default:Ut(e,t),an(t)}}function an(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(O1(n)){var r=n;break e}n=n.return}throw Error(F(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Po(i,""),r.flags&=-33);var s=$g(t);ah(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,c=$g(t);oh(t,c,o);break;default:throw Error(F(161))}}catch(u){Ie(t,t.return,u)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function QE(t,e,n){q=t,F1(t)}function F1(t,e,n){for(var r=(t.mode&1)!==0;q!==null;){var i=q,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xa;if(!o){var c=i.alternate,u=c!==null&&c.memoizedState!==null||tt;c=Xa;var d=tt;if(Xa=o,(tt=u)&&!d)for(q=i;q!==null;)o=q,u=o.child,o.tag===22&&o.memoizedState!==null?Hg(i):u!==null?(u.return=o,q=u):Hg(i);for(;s!==null;)q=s,F1(s),s=s.sibling;q=i,Xa=c,tt=d}Wg(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,q=s):Wg(t)}}function Wg(t){for(;q!==null;){var e=q;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:tt||jc(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!tt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qt(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Cg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Cg(e,o,n)}break;case 5:var c=e.stateNode;if(n===null&&e.flags&4){n=c;var u=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var d=e.alternate;if(d!==null){var f=d.memoizedState;if(f!==null){var g=f.dehydrated;g!==null&&Mo(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(F(163))}tt||e.flags&512&&sh(e)}catch(m){Ie(e,e.return,m)}}if(e===t){q=null;break}if(n=e.sibling,n!==null){n.return=e.return,q=n;break}q=e.return}}function qg(t){for(;q!==null;){var e=q;if(e===t){q=null;break}var n=e.sibling;if(n!==null){n.return=e.return,q=n;break}q=e.return}}function Hg(t){for(;q!==null;){var e=q;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{jc(4,e)}catch(u){Ie(e,n,u)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(u){Ie(e,i,u)}}var s=e.return;try{sh(e)}catch(u){Ie(e,s,u)}break;case 5:var o=e.return;try{sh(e)}catch(u){Ie(e,o,u)}}}catch(u){Ie(e,e.return,u)}if(e===t){q=null;break}var c=e.sibling;if(c!==null){c.return=e.return,q=c;break}q=e.return}}var KE=Math.ceil,Yl=$n.ReactCurrentDispatcher,Cf=$n.ReactCurrentOwner,Lt=$n.ReactCurrentBatchConfig,ae=0,Ue=null,Ne=null,Ge=0,xt=0,qi=Mr(0),Ve=0,Ho=null,hi=0,Nc=0,Af=0,xo=null,ft=null,Rf=0,ds=1/0,_n=null,Jl=!1,lh=null,mr=null,Za=!1,cr=null,Xl=0,bo=0,ch=null,yl=-1,vl=0;function lt(){return ae&6?Re():yl!==-1?yl:yl=Re()}function gr(t){return t.mode&1?ae&2&&Ge!==0?Ge&-Ge:jE.transition!==null?(vl===0&&(vl=E0()),vl):(t=ce,t!==0||(t=window.event,t=t===void 0?16:P0(t.type)),t):1}function Jt(t,e,n,r){if(50<bo)throw bo=0,ch=null,Error(F(185));la(t,n,r),(!(ae&2)||t!==Ue)&&(t===Ue&&(!(ae&2)&&(Nc|=n),Ve===4&&rr(t,Ge)),vt(t,r),n===1&&ae===0&&!(e.mode&1)&&(ds=Re()+500,Ac&&Lr()))}function vt(t,e){var n=t.callbackNode;jS(t,e);var r=Ml(t,t===Ue?Ge:0);if(r===0)n!==null&&tg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&tg(n),e===1)t.tag===0?PE(Gg.bind(null,t)):Y0(Gg.bind(null,t)),kE(function(){!(ae&6)&&Lr()}),n=null;else{switch(T0(r)){case 1:n=tf;break;case 4:n=_0;break;case 16:n=Dl;break;case 536870912:n=S0;break;default:n=Dl}n=Q1(n,B1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function B1(t,e){if(yl=-1,vl=0,ae&6)throw Error(F(327));var n=t.callbackNode;if(Xi()&&t.callbackNode!==n)return null;var r=Ml(t,t===Ue?Ge:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Zl(t,r);else{e=r;var i=ae;ae|=2;var s=U1();(Ue!==t||Ge!==e)&&(_n=null,ds=Re()+500,ri(t,e));do try{XE();break}catch(c){$1(t,c)}while(!0);mf(),Yl.current=s,ae=i,Ne!==null?e=0:(Ue=null,Ge=0,e=Ve)}if(e!==0){if(e===2&&(i=Ld(t),i!==0&&(r=i,e=uh(t,i))),e===1)throw n=Ho,ri(t,0),rr(t,r),vt(t,Re()),n;if(e===6)rr(t,r);else{if(i=t.current.alternate,!(r&30)&&!YE(i)&&(e=Zl(t,r),e===2&&(s=Ld(t),s!==0&&(r=s,e=uh(t,s))),e===1))throw n=Ho,ri(t,0),rr(t,r),vt(t,Re()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(F(345));case 2:Yr(t,ft,_n);break;case 3:if(rr(t,r),(r&130023424)===r&&(e=Rf+500-Re(),10<e)){if(Ml(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){lt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Wd(Yr.bind(null,t,ft,_n),e);break}Yr(t,ft,_n);break;case 4:if(rr(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Yt(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Re()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*KE(r/1960))-r,10<r){t.timeoutHandle=Wd(Yr.bind(null,t,ft,_n),r);break}Yr(t,ft,_n);break;case 5:Yr(t,ft,_n);break;default:throw Error(F(329))}}}return vt(t,Re()),t.callbackNode===n?B1.bind(null,t):null}function uh(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(ri(t,e).flags|=256),t=Zl(t,e),t!==2&&(e=ft,ft=n,e!==null&&dh(e)),t}function dh(t){ft===null?ft=t:ft.push.apply(ft,t)}function YE(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Zt(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function rr(t,e){for(e&=~Af,e&=~Nc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Yt(e),r=1<<n;t[n]=-1,e&=~r}}function Gg(t){if(ae&6)throw Error(F(327));Xi();var e=Ml(t,0);if(!(e&1))return vt(t,Re()),null;var n=Zl(t,e);if(t.tag!==0&&n===2){var r=Ld(t);r!==0&&(e=r,n=uh(t,r))}if(n===1)throw n=Ho,ri(t,0),rr(t,e),vt(t,Re()),n;if(n===6)throw Error(F(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Yr(t,ft,_n),vt(t,Re()),null}function Pf(t,e){var n=ae;ae|=1;try{return t(e)}finally{ae=n,ae===0&&(ds=Re()+500,Ac&&Lr())}}function fi(t){cr!==null&&cr.tag===0&&!(ae&6)&&Xi();var e=ae;ae|=1;var n=Lt.transition,r=ce;try{if(Lt.transition=null,ce=1,t)return t()}finally{ce=r,Lt.transition=n,ae=e,!(ae&6)&&Lr()}}function jf(){xt=qi.current,ye(qi)}function ri(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,IE(n)),Ne!==null)for(n=Ne.return;n!==null;){var r=n;switch(hf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Fl();break;case 3:cs(),ye(gt),ye(rt),bf();break;case 5:xf(r);break;case 4:cs();break;case 13:ye(_e);break;case 19:ye(_e);break;case 10:gf(r.type._context);break;case 22:case 23:jf()}n=n.return}if(Ue=t,Ne=t=yr(t.current,null),Ge=xt=e,Ve=0,Ho=null,Af=Nc=hi=0,ft=xo=null,Zr!==null){for(e=0;e<Zr.length;e++)if(n=Zr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Zr=null}return t}function $1(t,e){do{var n=Ne;try{if(mf(),pl.current=Kl,Ql){for(var r=Se.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ql=!1}if(di=0,$e=Oe=Se=null,vo=!1,Uo=0,Cf.current=null,n===null||n.return===null){Ve=1,Ho=e,Ne=null;break}e:{var s=t,o=n.return,c=n,u=e;if(e=Ge,c.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=u,f=c,g=f.tag;if(!(f.mode&1)&&(g===0||g===11||g===15)){var m=f.alternate;m?(f.updateQueue=m.updateQueue,f.memoizedState=m.memoizedState,f.lanes=m.lanes):(f.updateQueue=null,f.memoizedState=null)}var S=Dg(o);if(S!==null){S.flags&=-257,Mg(S,o,c,s,e),S.mode&1&&Ng(s,d,e),e=S,u=d;var C=e.updateQueue;if(C===null){var j=new Set;j.add(u),e.updateQueue=j}else C.add(u);break e}else{if(!(e&1)){Ng(s,d,e),Nf();break e}u=Error(F(426))}}else if(xe&&c.mode&1){var O=Dg(o);if(O!==null){!(O.flags&65536)&&(O.flags|=256),Mg(O,o,c,s,e),ff(us(u,c));break e}}s=u=us(u,c),Ve!==4&&(Ve=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var E=T1(s,u,e);kg(s,E);break e;case 1:c=u;var v=s.type,b=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(mr===null||!mr.has(b)))){s.flags|=65536,e&=-e,s.lanes|=e;var P=I1(s,c,e);kg(s,P);break e}}s=s.return}while(s!==null)}q1(n)}catch(L){e=L,Ne===n&&n!==null&&(Ne=n=n.return);continue}break}while(!0)}function U1(){var t=Yl.current;return Yl.current=Kl,t===null?Kl:t}function Nf(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Ue===null||!(hi&268435455)&&!(Nc&268435455)||rr(Ue,Ge)}function Zl(t,e){var n=ae;ae|=2;var r=U1();(Ue!==t||Ge!==e)&&(_n=null,ri(t,e));do try{JE();break}catch(i){$1(t,i)}while(!0);if(mf(),ae=n,Yl.current=r,Ne!==null)throw Error(F(261));return Ue=null,Ge=0,Ve}function JE(){for(;Ne!==null;)W1(Ne)}function XE(){for(;Ne!==null&&!SS();)W1(Ne)}function W1(t){var e=G1(t.alternate,t,xt);t.memoizedProps=t.pendingProps,e===null?q1(t):Ne=e,Cf.current=null}function q1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=qE(n,e),n!==null){n.flags&=32767,Ne=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ve=6,Ne=null;return}}else if(n=WE(n,e,xt),n!==null){Ne=n;return}if(e=e.sibling,e!==null){Ne=e;return}Ne=e=t}while(e!==null);Ve===0&&(Ve=5)}function Yr(t,e,n){var r=ce,i=Lt.transition;try{Lt.transition=null,ce=1,ZE(t,e,n,r)}finally{Lt.transition=i,ce=r}return null}function ZE(t,e,n,r){do Xi();while(cr!==null);if(ae&6)throw Error(F(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(F(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(NS(t,s),t===Ue&&(Ne=Ue=null,Ge=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Za||(Za=!0,Q1(Dl,function(){return Xi(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Lt.transition,Lt.transition=null;var o=ce;ce=1;var c=ae;ae|=4,Cf.current=null,GE(t,n),z1(n,t),wE($d),Ll=!!Bd,$d=Bd=null,t.current=n,QE(n),ES(),ae=c,ce=o,Lt.transition=s}else t.current=n;if(Za&&(Za=!1,cr=t,Xl=i),s=t.pendingLanes,s===0&&(mr=null),kS(n.stateNode),vt(t,Re()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Jl)throw Jl=!1,t=lh,lh=null,t;return Xl&1&&t.tag!==0&&Xi(),s=t.pendingLanes,s&1?t===ch?bo++:(bo=0,ch=t):bo=0,Lr(),null}function Xi(){if(cr!==null){var t=T0(Xl),e=Lt.transition,n=ce;try{if(Lt.transition=null,ce=16>t?16:t,cr===null)var r=!1;else{if(t=cr,cr=null,Xl=0,ae&6)throw Error(F(331));var i=ae;for(ae|=4,q=t.current;q!==null;){var s=q,o=s.child;if(q.flags&16){var c=s.deletions;if(c!==null){for(var u=0;u<c.length;u++){var d=c[u];for(q=d;q!==null;){var f=q;switch(f.tag){case 0:case 11:case 15:wo(8,f,s)}var g=f.child;if(g!==null)g.return=f,q=g;else for(;q!==null;){f=q;var m=f.sibling,S=f.return;if(L1(f),f===d){q=null;break}if(m!==null){m.return=S,q=m;break}q=S}}}var C=s.alternate;if(C!==null){var j=C.child;if(j!==null){C.child=null;do{var O=j.sibling;j.sibling=null,j=O}while(j!==null)}}q=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,q=o;else e:for(;q!==null;){if(s=q,s.flags&2048)switch(s.tag){case 0:case 11:case 15:wo(9,s,s.return)}var E=s.sibling;if(E!==null){E.return=s.return,q=E;break e}q=s.return}}var v=t.current;for(q=v;q!==null;){o=q;var b=o.child;if(o.subtreeFlags&2064&&b!==null)b.return=o,q=b;else e:for(o=v;q!==null;){if(c=q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:jc(9,c)}}catch(L){Ie(c,c.return,L)}if(c===o){q=null;break e}var P=c.sibling;if(P!==null){P.return=c.return,q=P;break e}q=c.return}}if(ae=i,Lr(),dn&&typeof dn.onPostCommitFiberRoot=="function")try{dn.onPostCommitFiberRoot(Ec,t)}catch{}r=!0}return r}finally{ce=n,Lt.transition=e}}return!1}function Qg(t,e,n){e=us(n,e),e=T1(t,e,1),t=pr(t,e,1),e=lt(),t!==null&&(la(t,1,e),vt(t,e))}function Ie(t,e,n){if(t.tag===3)Qg(t,t,n);else for(;e!==null;){if(e.tag===3){Qg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(mr===null||!mr.has(r))){t=us(n,t),t=I1(e,t,1),e=pr(e,t,1),t=lt(),e!==null&&(la(e,1,t),vt(e,t));break}}e=e.return}}function e2(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=lt(),t.pingedLanes|=t.suspendedLanes&n,Ue===t&&(Ge&n)===n&&(Ve===4||Ve===3&&(Ge&130023424)===Ge&&500>Re()-Rf?ri(t,0):Af|=n),vt(t,e)}function H1(t,e){e===0&&(t.mode&1?(e=Ua,Ua<<=1,!(Ua&130023424)&&(Ua=4194304)):e=1);var n=lt();t=Ln(t,e),t!==null&&(la(t,e,n),vt(t,n))}function t2(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),H1(t,n)}function n2(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(F(314))}r!==null&&r.delete(e),H1(t,n)}var G1;G1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||gt.current)mt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return mt=!1,UE(t,e,n);mt=!!(t.flags&131072)}else mt=!1,xe&&e.flags&1048576&&J0(e,Ul,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;gl(t,e),t=e.pendingProps;var i=os(e,rt.current);Ji(e,n),i=Sf(null,e,r,t,i,n);var s=Ef();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,yt(r)?(s=!0,Bl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vf(e),i.updater=Pc,e.stateNode=i,i._reactInternals=e,Jd(e,r,t,n),e=eh(null,e,r,!0,s,n)):(e.tag=0,xe&&s&&df(e),at(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(gl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=i2(r),t=qt(r,t),i){case 0:e=Zd(null,e,r,t,n);break e;case 1:e=Vg(null,e,r,t,n);break e;case 11:e=Lg(null,e,r,t,n);break e;case 14:e=Og(null,e,r,qt(r.type,t),n);break e}throw Error(F(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Zd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Vg(t,e,r,i,n);case 3:e:{if(R1(e),t===null)throw Error(F(387));r=e.pendingProps,s=e.memoizedState,i=s.element,r1(t,e),Hl(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=us(Error(F(423)),e),e=zg(t,e,r,n,i);break e}else if(r!==i){i=us(Error(F(424)),e),e=zg(t,e,r,n,i);break e}else for(_t=fr(e.stateNode.containerInfo.firstChild),Et=e,xe=!0,Gt=null,n=t1(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(as(),r===i){e=On(t,e,n);break e}at(t,e,r,n)}e=e.child}return e;case 5:return i1(e),t===null&&Qd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ud(r,i)?o=null:s!==null&&Ud(r,s)&&(e.flags|=32),A1(t,e),at(t,e,o,n),e.child;case 6:return t===null&&Qd(e),null;case 13:return P1(t,e,n);case 4:return wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ls(e,null,r,n):at(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),Lg(t,e,r,i,n);case 7:return at(t,e,e.pendingProps,n),e.child;case 8:return at(t,e,e.pendingProps.children,n),e.child;case 12:return at(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,fe(Wl,r._currentValue),r._currentValue=o,s!==null)if(Zt(s.value,o)){if(s.children===i.children&&!gt.current){e=On(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var c=s.dependencies;if(c!==null){o=s.child;for(var u=c.firstContext;u!==null;){if(u.context===r){if(s.tag===1){u=Rn(-1,n&-n),u.tag=2;var d=s.updateQueue;if(d!==null){d=d.shared;var f=d.pending;f===null?u.next=u:(u.next=f.next,f.next=u),d.pending=u}}s.lanes|=n,u=s.alternate,u!==null&&(u.lanes|=n),Kd(s.return,n,e),c.lanes|=n;break}u=u.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(F(341));o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),Kd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}at(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Ji(e,n),i=Ft(i),r=r(i),e.flags|=1,at(t,e,r,n),e.child;case 14:return r=e.type,i=qt(r,e.pendingProps),i=qt(r.type,i),Og(t,e,r,i,n);case 15:return k1(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qt(r,i),gl(t,e),e.tag=1,yt(r)?(t=!0,Bl(e)):t=!1,Ji(e,n),E1(e,r,i),Jd(e,r,i,n),eh(null,e,r,!0,t,n);case 19:return j1(t,e,n);case 22:return C1(t,e,n)}throw Error(F(156,e.tag))};function Q1(t,e){return b0(t,e)}function r2(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Dt(t,e,n,r){return new r2(t,e,n,r)}function Df(t){return t=t.prototype,!(!t||!t.isReactComponent)}function i2(t){if(typeof t=="function")return Df(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Xh)return 11;if(t===Zh)return 14}return 2}function yr(t,e){var n=t.alternate;return n===null?(n=Dt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function wl(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Df(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return ii(n.children,i,s,e);case Jh:o=8,i|=8;break;case bd:return t=Dt(12,n,e,i|2),t.elementType=bd,t.lanes=s,t;case _d:return t=Dt(13,n,e,i),t.elementType=_d,t.lanes=s,t;case Sd:return t=Dt(19,n,e,i),t.elementType=Sd,t.lanes=s,t;case i0:return Dc(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case n0:o=10;break e;case r0:o=9;break e;case Xh:o=11;break e;case Zh:o=14;break e;case er:o=16,r=null;break e}throw Error(F(130,t==null?t:typeof t,""))}return e=Dt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ii(t,e,n,r){return t=Dt(7,t,r,e),t.lanes=n,t}function Dc(t,e,n,r){return t=Dt(22,t,r,e),t.elementType=i0,t.lanes=n,t.stateNode={isHidden:!1},t}function Zu(t,e,n){return t=Dt(6,t,null,e),t.lanes=n,t}function ed(t,e,n){return e=Dt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function s2(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Du(0),this.expirationTimes=Du(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Du(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Mf(t,e,n,r,i,s,o,c,u){return t=new s2(t,e,n,c,u),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Dt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(s),t}function o2(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Di,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function K1(t){if(!t)return Er;t=t._reactInternals;e:{if(bi(t)!==t||t.tag!==1)throw Error(F(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(yt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(F(171))}if(t.tag===1){var n=t.type;if(yt(n))return K0(t,n,e)}return e}function Y1(t,e,n,r,i,s,o,c,u){return t=Mf(n,r,!0,t,i,s,o,c,u),t.context=K1(null),n=t.current,r=lt(),i=gr(n),s=Rn(r,i),s.callback=e??null,pr(n,s,i),t.current.lanes=i,la(t,i,r),vt(t,r),t}function Mc(t,e,n,r){var i=e.current,s=lt(),o=gr(i);return n=K1(n),e.context===null?e.context=n:e.pendingContext=n,e=Rn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=pr(i,e,o),t!==null&&(Jt(t,i,o,s),fl(t,i,o)),o}function ec(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Kg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){Kg(t,e),(t=t.alternate)&&Kg(t,e)}function a2(){return null}var J1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Of(t){this._internalRoot=t}Lc.prototype.render=Of.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(F(409));Mc(t,e,null,null)};Lc.prototype.unmount=Of.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;fi(function(){Mc(null,t,null,null)}),e[Mn]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var e=C0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&R0(t)}};function Vf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Oc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Yg(){}function l2(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var d=ec(o);s.call(d)}}var o=Y1(e,r,t,0,null,!1,!1,"",Yg);return t._reactRootContainer=o,t[Mn]=o.current,Vo(t.nodeType===8?t.parentNode:t),fi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var c=r;r=function(){var d=ec(u);c.call(d)}}var u=Mf(t,0,!1,null,null,!1,!1,"",Yg);return t._reactRootContainer=u,t[Mn]=u.current,Vo(t.nodeType===8?t.parentNode:t),fi(function(){Mc(e,u,n,r)}),u}function Vc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var c=i;i=function(){var u=ec(o);c.call(u)}}Mc(e,o,t,i)}else o=l2(n,e,t,i,r);return ec(o)}I0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=io(e.pendingLanes);n!==0&&(nf(e,n|1),vt(e,Re()),!(ae&6)&&(ds=Re()+500,Lr()))}break;case 13:fi(function(){var r=Ln(t,1);if(r!==null){var i=lt();Jt(r,t,1,i)}}),Lf(t,1)}};rf=function(t){if(t.tag===13){var e=Ln(t,134217728);if(e!==null){var n=lt();Jt(e,t,134217728,n)}Lf(t,134217728)}};k0=function(t){if(t.tag===13){var e=gr(t),n=Ln(t,e);if(n!==null){var r=lt();Jt(n,t,e,r)}Lf(t,e)}};C0=function(){return ce};A0=function(t,e){var n=ce;try{return ce=t,e()}finally{ce=n}};Nd=function(t,e,n){switch(e){case"input":if(Id(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cc(r);if(!i)throw Error(F(90));o0(r),Id(r,i)}}}break;case"textarea":l0(t,n);break;case"select":e=n.value,e!=null&&Gi(t,!!n.multiple,e,!1)}};m0=Pf;g0=fi;var c2={usingClientEntryPoint:!1,Events:[ua,zi,Cc,f0,p0,Pf]},Js={findFiberByHostInstance:Xr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},u2={bundleType:Js.bundleType,version:Js.version,rendererPackageName:Js.rendererPackageName,rendererConfig:Js.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$n.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=w0(t),t===null?null:t.stateNode},findFiberByHostInstance:Js.findFiberByHostInstance||a2,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var el=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!el.isDisabled&&el.supportsFiber)try{Ec=el.inject(u2),dn=el}catch{}}kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=c2;kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vf(e))throw Error(F(200));return o2(t,e,null,n)};kt.createRoot=function(t,e){if(!Vf(t))throw Error(F(299));var n=!1,r="",i=J1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Mf(t,1,!1,null,null,n,!1,r,i),t[Mn]=e.current,Vo(t.nodeType===8?t.parentNode:t),new Of(e)};kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(F(188)):(t=Object.keys(t).join(","),Error(F(268,t)));return t=w0(e),t=t===null?null:t.stateNode,t};kt.flushSync=function(t){return fi(t)};kt.hydrate=function(t,e,n){if(!Oc(e))throw Error(F(200));return Vc(null,t,e,!0,n)};kt.hydrateRoot=function(t,e,n){if(!Vf(t))throw Error(F(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=J1;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Y1(e,null,t,1,n??null,i,!1,s,o),t[Mn]=e.current,Vo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Lc(e)};kt.render=function(t,e,n){if(!Oc(e))throw Error(F(200));return Vc(null,t,e,!1,n)};kt.unmountComponentAtNode=function(t){if(!Oc(t))throw Error(F(40));return t._reactRootContainer?(fi(function(){Vc(null,null,t,!1,function(){t._reactRootContainer=null,t[Mn]=null})}),!0):!1};kt.unstable_batchedUpdates=Pf;kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Oc(n))throw Error(F(200));if(t==null||t._reactInternals===void 0)throw Error(F(38));return Vc(t,e,n,!1,r)};kt.version="18.3.1-next-f1338f8080-20240426";function X1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(X1)}catch(t){console.error(t)}}X1(),Xv.exports=kt;var d2=Xv.exports,Jg=d2;wd.createRoot=Jg.createRoot,wd.hydrateRoot=Jg.hydrateRoot;/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Z1=(...t)=>t.filter((e,n,r)=>!!e&&r.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var f2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:i="",children:s,iconNode:o,...c},u)=>M.createElement("svg",{ref:u,...f2,width:e,height:e,stroke:t,strokeWidth:r?Number(n)*24/Number(e):n,className:Z1("lucide",i),...c},[...o.map(([d,f])=>M.createElement(d,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=(t,e)=>{const n=M.forwardRef(({className:r,...i},s)=>M.createElement(p2,{ref:s,iconNode:e,className:Z1(`lucide-${h2(t)}`,r),...i}));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=K("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=K("Award",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=K("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=K("Bell",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zf=K("BookOpen",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ew=K("Bot",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=K("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=K("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w2=K("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x2=K("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=K("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _2=K("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tw=K("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xg=K("CircleHelp",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=K("CodeXml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=K("Cpu",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=K("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S2=K("EyeOff",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=K("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=K("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I2=K("Flame",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=K("Gauge",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nw=K("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C2=K("Headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A2=K("Home",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=K("Laptop",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P2=K("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j2=K("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N2=K("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D2=K("MicVocal",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=K("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L2=K("Plane",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=K("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V2=K("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z2=K("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rw=K("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=K("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=K("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $2=K("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=K("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W2=K("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q2=K("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H2=K("Trophy",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iw=K("UserRound",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G2=K("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sw=K("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=K("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),K2=()=>{};var Zg={};/**
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
 */const ow=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Y2=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],c=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},aw={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,c=o?t[i+1]:0,u=i+2<t.length,d=u?t[i+2]:0,f=s>>2,g=(s&3)<<4|c>>4;let m=(c&15)<<2|d>>6,S=d&63;u||(S=64,o||(m=64)),r.push(n[f],n[g],n[m],n[S])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ow(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Y2(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const d=i<t.length?n[t.charAt(i)]:64;++i;const g=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||c==null||d==null||g==null)throw new J2;const m=s<<2|c>>4;if(r.push(m),d!==64){const S=c<<4&240|d>>2;if(r.push(S),g!==64){const C=d<<6&192|g;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class J2 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const X2=function(t){const e=ow(t);return aw.encodeByteArray(e,!0)},rc=function(t){return X2(t).replace(/\./g,"")},lw=function(t){try{return aw.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Z2(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const eT=()=>Z2().__FIREBASE_DEFAULTS__,tT=()=>{if(typeof process>"u"||typeof Zg>"u")return;const t=Zg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},nT=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&lw(t[1]);return e&&JSON.parse(e)},zc=()=>{try{return K2()||eT()||tT()||nT()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},cw=t=>{var e,n;return(n=(e=zc())==null?void 0:e.emulatorHosts)==null?void 0:n[t]},rT=t=>{const e=cw(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},uw=()=>{var t;return(t=zc())==null?void 0:t.config},dw=t=>{var e;return(e=zc())==null?void 0:e[`_${t}`]};/**
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
 */class iT{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function sT(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}},...t};return[rc(JSON.stringify(n)),rc(JSON.stringify(o)),""].join(".")}/**
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
 */function it(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oT(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(it())}function aT(){var e;const t=(e=zc())==null?void 0:e.forceEnvironment;if(t==="node")return!0;if(t==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lT(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cT(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function uT(){const t=it();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dT(){return!aT()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function fw(){try{return typeof indexedDB=="object"}catch{return!1}}function pw(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)==null?void 0:s.message)||"")}}catch(n){e(n)}})}function hT(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const fT="FirebaseError";class rn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=fT,Object.setPrototypeOf(this,rn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_i.prototype.create)}}class _i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?pT(s,r):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new rn(i,c,r)}}function pT(t,e){return t.replace(mT,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const mT=/\{\$([^}]+)}/g;function gT(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ey(s)&&ey(o)){if(!Tr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ey(t){return t!==null&&typeof t=="object"}/**
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
 */function ha(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function yT(t,e){const n=new vT(t,e);return n.subscribe.bind(n)}class vT{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wT(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=nd),i.error===void 0&&(i.error=nd),i.complete===void 0&&(i.complete=nd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wT(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function nd(){}/**
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
 */const xT=1e3,bT=2,_T=4*60*60*1e3,ST=.5;function ty(t,e=xT,n=bT){const r=e*Math.pow(n,t),i=Math.round(ST*r*(Math.random()-.5)*2);return Math.min(_T,r+i)}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}/**
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
 */function fa(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function mw(t){return(await fetch(t,{credentials:"include"})).ok}class en{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Jr="[DEFAULT]";/**
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
 */class ET{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new iT;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(IT(e))try{this.getOrInitializeService({instanceIdentifier:Jr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Jr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Jr){return this.instances.has(e)}getOptions(e=Jr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);r===c&&o.resolve(i)}return i}onInit(e,n){const r=this.normalizeInstanceIdentifier(n),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TT(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Jr){return this.component?this.component.multipleInstances?e:Jr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TT(t){return t===Jr?void 0:t}function IT(t){return t.instantiationMode==="EAGER"}/**
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
 */class kT{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new ET(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const CT={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},AT=se.INFO,RT={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},PT=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=RT[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fc{constructor(e){this.name=e,this._logLevel=AT,this._logHandler=PT,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CT[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const jT=(t,e)=>e.some(n=>t instanceof n);let ny,ry;function NT(){return ny||(ny=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function DT(){return ry||(ry=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gw=new WeakMap,hh=new WeakMap,yw=new WeakMap,rd=new WeakMap,Ff=new WeakMap;function MT(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(vr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&gw.set(n,t)}).catch(()=>{}),Ff.set(e,t),e}function LT(t){if(hh.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});hh.set(t,e)}let fh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||yw.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function OT(t){fh=t(fh)}function VT(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(id(this),e,...n);return yw.set(r,e.sort?e.sort():[e]),vr(r)}:DT().includes(t)?function(...e){return t.apply(id(this),e),vr(gw.get(this))}:function(...e){return vr(t.apply(id(this),e))}}function zT(t){return typeof t=="function"?VT(t):(t instanceof IDBTransaction&&LT(t),jT(t,NT())?new Proxy(t,fh):t)}function vr(t){if(t instanceof IDBRequest)return MT(t);if(rd.has(t))return rd.get(t);const e=zT(t);return e!==t&&(rd.set(t,e),Ff.set(e,t)),e}const id=t=>Ff.get(t);function vw(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),c=vr(o);return r&&o.addEventListener("upgradeneeded",u=>{r(vr(o.result),u.oldVersion,u.newVersion,vr(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",d=>i(d.oldVersion,d.newVersion,d))}).catch(()=>{}),c}const FT=["get","getKey","getAll","getAllKeys","count"],BT=["put","add","delete","clear"],sd=new Map;function iy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(sd.get(e))return sd.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=BT.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||FT.includes(n)))return;const s=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let d=u.store;return r&&(d=d.index(c.shift())),(await Promise.all([d[n](...c),i&&u.done]))[0]};return sd.set(e,s),s}OT(t=>({...t,get:(e,n,r)=>iy(e,n)||t.get(e,n,r),has:(e,n)=>!!iy(e,n)||t.has(e,n)}));/**
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
 */class $T{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(UT(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function UT(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",sy="0.14.12";/**
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
 */const Vn=new Fc("@firebase/app"),WT="@firebase/app-compat",qT="@firebase/analytics-compat",HT="@firebase/analytics",GT="@firebase/app-check-compat",QT="@firebase/app-check",KT="@firebase/auth",YT="@firebase/auth-compat",JT="@firebase/database",XT="@firebase/data-connect",ZT="@firebase/database-compat",eI="@firebase/functions",tI="@firebase/functions-compat",nI="@firebase/installations",rI="@firebase/installations-compat",iI="@firebase/messaging",sI="@firebase/messaging-compat",oI="@firebase/performance",aI="@firebase/performance-compat",lI="@firebase/remote-config",cI="@firebase/remote-config-compat",uI="@firebase/storage",dI="@firebase/storage-compat",hI="@firebase/firestore",fI="@firebase/ai",pI="@firebase/firestore-compat",mI="firebase",gI="12.13.0";/**
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
 */const mh="[DEFAULT]",yI={[ph]:"fire-core",[WT]:"fire-core-compat",[HT]:"fire-analytics",[qT]:"fire-analytics-compat",[QT]:"fire-app-check",[GT]:"fire-app-check-compat",[KT]:"fire-auth",[YT]:"fire-auth-compat",[JT]:"fire-rtdb",[XT]:"fire-data-connect",[ZT]:"fire-rtdb-compat",[eI]:"fire-fn",[tI]:"fire-fn-compat",[nI]:"fire-iid",[rI]:"fire-iid-compat",[iI]:"fire-fcm",[sI]:"fire-fcm-compat",[oI]:"fire-perf",[aI]:"fire-perf-compat",[lI]:"fire-rc",[cI]:"fire-rc-compat",[uI]:"fire-gcs",[dI]:"fire-gcs-compat",[hI]:"fire-fst",[pI]:"fire-fst-compat",[fI]:"fire-vertex","fire-js":"fire-js",[mI]:"fire-js-all"};/**
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
 */const ic=new Map,vI=new Map,gh=new Map;function oy(t,e){try{t.container.addComponent(e)}catch(n){Vn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function vn(t){const e=t.name;if(gh.has(e))return Vn.debug(`There were multiple attempts to register component ${e}.`),!1;gh.set(e,t);for(const n of ic.values())oy(n,t);for(const n of vI.values())oy(n,t);return!0}function Si(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const wI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new _i("app","Firebase",wI);/**
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
 */class xI{constructor(e,n,r){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new en("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const bs=gI;function ww(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r={name:mh,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw wr.create("bad-app-name",{appName:String(i)});if(n||(n=uw()),!n)throw wr.create("no-options");const s=ic.get(i);if(s){if(Tr(n,s.options)&&Tr(r,s.config))return s;throw wr.create("duplicate-app",{appName:i})}const o=new kT(i);for(const u of gh.values())o.addComponent(u);const c=new xI(n,r,o);return ic.set(i,c),c}function Bf(t=mh){const e=ic.get(t);if(!e&&t===mh&&uw())return ww();if(!e)throw wr.create("no-app",{appName:t});return e}function Ot(t,e,n){let r=yI[t]??t;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=e.match(/\s|\//);if(i||s){const o=[`Unable to register library "${r}" with version "${e}":`];i&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&o.push("and"),s&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Vn.warn(o.join(" "));return}vn(new en(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const bI="firebase-heartbeat-database",_I=1,Go="firebase-heartbeat-store";let od=null;function xw(){return od||(od=vw(bI,_I,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Go)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),od}async function SI(t){try{const n=(await xw()).transaction(Go),r=await n.objectStore(Go).get(bw(t));return await n.done,r}catch(e){if(e instanceof rn)Vn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Vn.warn(n.message)}}}async function ay(t,e){try{const r=(await xw()).transaction(Go,"readwrite");await r.objectStore(Go).put(e,bw(t)),await r.done}catch(n){if(n instanceof rn)Vn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Vn.warn(r.message)}}}function bw(t){return`${t.name}!${t.options.appId}`}/**
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
 */const EI=1024,TI=30;class II{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=ly();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>TI){const o=AI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Vn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ly(),{heartbeatsToSend:r,unsentEntries:i}=kI(this._heartbeatsCache.heartbeats),s=rc(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return Vn.warn(n),""}}}function ly(){return new Date().toISOString().substring(0,10)}function kI(t,e=EI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return fw()?pw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await SI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return ay(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function cy(t){return rc(JSON.stringify({version:2,heartbeats:t})).length}function AI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function RI(t){vn(new en("platform-logger",e=>new $T(e),"PRIVATE")),vn(new en("heartbeat",e=>new II(e),"PRIVATE")),Ot(ph,sy,t),Ot(ph,sy,"esm2020"),Ot("fire-js","")}RI("");function _w(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PI=_w,Sw=new _i("auth","Firebase",_w());/**
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
 */const sc=new Fc("@firebase/auth");function jI(t,...e){sc.logLevel<=se.WARN&&sc.warn(`Auth (${bs}): ${t}`,...e)}function bl(t,...e){sc.logLevel<=se.ERROR&&sc.error(`Auth (${bs}): ${t}`,...e)}/**
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
 */function tn(t,...e){throw $f(t,...e)}function fn(t,...e){return $f(t,...e)}function Ew(t,e,n){const r={...PI(),[e]:n};return new _i("auth","Firebase",r).create(e,{appName:t.name})}function Pn(t){return Ew(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function $f(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sw.create(t,...e)}function G(t,e,...n){if(!t)throw $f(e,...n)}function In(t){const e="INTERNAL ASSERTION FAILED: "+t;throw bl(e),new Error(e)}function zn(t,e){t||In(e)}/**
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
 */function yh(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.href)||""}function NI(){return uy()==="http:"||uy()==="https:"}function uy(){var t;return typeof self<"u"&&((t=self.location)==null?void 0:t.protocol)||null}/**
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
 */function DI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(NI()||hw()||"connection"in navigator)?navigator.onLine:!0}function MI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class pa{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=oT()||cT()}get(){return DI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Uf(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Tw{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;In("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;In("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;In("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const OI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],VI=new pa(3e4,6e4);function Un(t,e){return t.tenantId&&!e.tenantId?{...e,tenantId:t.tenantId}:e}async function Wn(t,e,n,r,i={}){return Iw(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const c=ha({key:t.config.apiKey,...o}).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const d={method:e,headers:u,...s};return lT()||(d.referrerPolicy="no-referrer"),t.emulatorConfig&&fa(t.emulatorConfig.host)&&(d.credentials="include"),Tw.fetch()(await kw(t,t.config.apiHost,n,c),d)})}async function Iw(t,e,n){t._canInitEmulator=!1;const r={...LI,...e};try{const i=new FI(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw tl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const c=s.ok?o.errorMessage:o.error.message,[u,d]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw tl(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw tl(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw tl(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(d)throw Ew(t,f,d);tn(t,f)}}catch(i){if(i instanceof rn)throw i;tn(t,"network-request-failed",{message:String(i)})}}async function ma(t,e,n,r,i={}){const s=await Wn(t,e,n,r,i);return"mfaPendingCredential"in s&&tn(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function kw(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Uf(t.config,i):`${t.config.apiScheme}://${i}`;return OI.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function zI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class FI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),VI.get())})}}function tl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=fn(t,e,r);return i.customData._tokenResponse=n,i}function dy(t){return t!==void 0&&t.enterprise!==void 0}class BI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return zI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function $I(t,e){return Wn(t,"GET","/v2/recaptchaConfig",Un(t,e))}/**
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
 */async function UI(t,e){return Wn(t,"POST","/v1/accounts:delete",e)}async function oc(t,e){return Wn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function _o(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WI(t,e=!1){const n=ke(t),r=await n.getIdToken(e),i=Wf(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:_o(ad(i.auth_time)),issuedAtTime:_o(ad(i.iat)),expirationTime:_o(ad(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ad(t){return Number(t)*1e3}function Wf(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return bl("JWT malformed, contained fewer than 3 sections"),null;try{const i=lw(n);return i?JSON.parse(i):(bl("Failed to decode base64 JWT payload"),null)}catch(i){return bl("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hy(t){const e=Wf(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof rn&&qI(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class vh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_o(this.lastLoginAt),this.creationTime=_o(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ac(t){var g;const e=t.auth,n=await t.getIdToken(),r=await Qo(t,oc(e,{idToken:n}));G(r==null?void 0:r.users.length,e,"internal-error");const i=r.users[0];t._notifyReloadListener(i);const s=(g=i.providerUserInfo)!=null&&g.length?Cw(i.providerUserInfo):[],o=QI(t.providerData,s),c=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(o!=null&&o.length),d=c?u:!1,f={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:o,metadata:new vh(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function GI(t){const e=ke(t);await ac(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QI(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Cw(t){return t.map(({providerId:e,...n})=>({providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
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
 */async function KI(t,e){const n=await Iw(t,{},async()=>{const r=ha({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await kw(t,i,"/v1/token",`key=${s}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return t.emulatorConfig&&fa(t.emulatorConfig.host)&&(u.credentials="include"),Tw.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YI(t,e){return Wn(t,"POST","/v2/accounts:revokeToken",Un(t,e))}/**
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
 */class Zi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hy(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=hy(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await KI(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Zi;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Zi,this.toJSON())}_performRefresh(){return In("not implemented")}}/**
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
 */function Zn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Kt{constructor({uid:e,auth:n,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new HI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new vh(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Qo(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WI(this,e)}reload(){return GI(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>({...n})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Kt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ac(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Pn(this.auth));const e=await this.getIdToken();return await Qo(this,UI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){const r=n.displayName??void 0,i=n.email??void 0,s=n.phoneNumber??void 0,o=n.photoURL??void 0,c=n.tenantId??void 0,u=n._redirectEventId??void 0,d=n.createdAt??void 0,f=n.lastLoginAt??void 0,{uid:g,emailVerified:m,isAnonymous:S,providerData:C,stsTokenManager:j}=n;G(g&&j,e,"internal-error");const O=Zi.fromJSON(this.name,j);G(typeof g=="string",e,"internal-error"),Zn(r,e.name),Zn(i,e.name),G(typeof m=="boolean",e,"internal-error"),G(typeof S=="boolean",e,"internal-error"),Zn(s,e.name),Zn(o,e.name),Zn(c,e.name),Zn(u,e.name),Zn(d,e.name),Zn(f,e.name);const E=new Kt({uid:g,auth:e,email:i,emailVerified:m,displayName:r,isAnonymous:S,photoURL:o,phoneNumber:s,tenantId:c,stsTokenManager:O,createdAt:d,lastLoginAt:f});return C&&Array.isArray(C)&&(E.providerData=C.map(v=>({...v}))),u&&(E._redirectEventId=u),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new Zi;i.updateFromServerResponse(n);const s=new Kt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ac(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Cw(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),c=new Zi;c.updateFromIdToken(r);const u=new Kt({uid:i.localId,auth:e,stsTokenManager:c,isAnonymous:o}),d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new vh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,d),u}}/**
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
 */const fy=new Map;function kn(t){zn(t instanceof Function,"Expected a class definition");let e=fy.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fy.set(t,e),e)}/**
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
 */class Aw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Aw.type="NONE";const py=Aw;/**
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
 */function _l(t,e,n){return`firebase:${t}:${e}:${n}`}class es{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=_l(this.userKey,i.apiKey,s),this.fullPersistenceKey=_l("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await oc(this.auth,{idToken:e}).catch(()=>{});return n?Kt._fromGetAccountInfoResponse(this.auth,n,e):null}return Kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new es(kn(py),e,r);const i=(await Promise.all(n.map(async d=>{if(await d._isAvailable())return d}))).filter(d=>d);let s=i[0]||kn(py);const o=_l(r,e.config.apiKey,e.name);let c=null;for(const d of n)try{const f=await d._get(o);if(f){let g;if(typeof f=="string"){const m=await oc(e,{idToken:f}).catch(()=>{});if(!m)break;g=await Kt._fromGetAccountInfoResponse(e,m,f)}else g=Kt._fromJSON(e,f);d!==s&&(c=g),s=d;break}}catch{}const u=i.filter(d=>d._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new es(s,e,r):(s=u[0],c&&await s._set(o,c.toJSON()),await Promise.all(n.map(async d=>{if(d!==s)try{await d._remove(o)}catch{}})),new es(s,e,r))}}/**
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
 */function my(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Nw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Rw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Mw(e))return"Blackberry";if(Lw(e))return"Webos";if(Pw(e))return"Safari";if((e.includes("chrome/")||jw(e))&&!e.includes("edge/"))return"Chrome";if(Dw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rw(t=it()){return/firefox\//i.test(t)}function Pw(t=it()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function jw(t=it()){return/crios\//i.test(t)}function Nw(t=it()){return/iemobile/i.test(t)}function Dw(t=it()){return/android/i.test(t)}function Mw(t=it()){return/blackberry/i.test(t)}function Lw(t=it()){return/webos/i.test(t)}function qf(t=it()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JI(t=it()){var e;return qf(t)&&!!((e=window.navigator)!=null&&e.standalone)}function XI(){return uT()&&document.documentMode===10}function Ow(t=it()){return qf(t)||Dw(t)||Lw(t)||Mw(t)||/windows phone/i.test(t)||Nw(t)}/**
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
 */function Vw(t,e=[]){let n;switch(t){case"Browser":n=my(it());break;case"Worker":n=`${my(it())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${bs}/${r}`}/**
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
 */class ZI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,c)=>{try{const u=e(s);o(u)}catch(u){c(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ek(t,e={}){return Wn(t,"GET","/v2/passwordPolicy",Un(t,e))}/**
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
 */const tk=6;class nk{constructor(e){var r;const n=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??tk,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,n),this.validatePasswordCharacterOptions(e,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class rk{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new ZI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=kn(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await es.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((i=this._popupRedirectResolver)!=null&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)==null?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await oc(this,{idToken:e}),r=await Kt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var s;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(s=this.redirectUser)==null?void 0:s._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(r=u.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ac(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Pn(this));const n=e?ke(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Pn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Pn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(kn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ek(this),n=new nk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YI(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&kn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await es.create(this,[kn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(c,this,"internal-error"),c.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await((i=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:i.getHeartbeatsHeader());n&&(e["X-Firebase-Client"]=n);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var n;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return e!=null&&e.error&&jI(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Or(t){return ke(t)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=yT(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Bc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ik(t){Bc=t}function zw(t){return Bc.loadJS(t)}function sk(){return Bc.recaptchaEnterpriseScript}function ok(){return Bc.gapiScript}function ak(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class lk{constructor(){this.enterprise=new ck}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class ck{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const uk="recaptcha-enterprise",Fw="NO_RECAPTCHA";class dk{constructor(e){this.type=uk,this.auth=Or(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,c)=>{$I(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const d=new BI(u);return s.tenantId==null?s._agentRecaptchaConfig=d:s._tenantRecaptchaConfigs[s.tenantId]=d,o(d.siteKey)}}).catch(u=>{c(u)})})}function i(s,o,c){const u=window.grecaptcha;dy(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(d=>{o(d)}).catch(()=>{o(Fw)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new lk().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(c=>{if(!n&&dy(window.grecaptcha))i(c,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=sk();u.length!==0&&(u+=c),zw(u).then(()=>{i(c,s,o)}).catch(d=>{o(d)})}}).catch(c=>{o(c)})})}}async function yy(t,e,n,r=!1,i=!1){const s=new dk(t);let o;if(i)o=Fw;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const c={...e};if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const u=c.phoneEnrollmentInfo.phoneNumber,d=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:d,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const u=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function lc(t,e,n,r,i){var s;if((s=t._getRecaptchaConfig())!=null&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await yy(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await yy(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function hk(t,e){const n=Si(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Tr(s,e??{}))return i;tn(i,"already-initialized")}return n.initialize({options:e})}function fk(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(kn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function pk(t,e,n){const r=Or(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Bw(e),{host:o,port:c}=mk(e),u=c===null?"":`:${c}`,d={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:c,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(Tr(d,r.config.emulator)&&Tr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=d,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,fa(o)?mw(`${s}//${o}${u}`):gk()}function Bw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function mk(t){const e=Bw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:vy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:vy(o)}}}function vy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function gk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Hf{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return In("not implemented")}_getIdTokenResponse(e){return In("not implemented")}_linkToIdToken(e,n){return In("not implemented")}_getReauthenticationResolver(e){return In("not implemented")}}async function yk(t,e){return Wn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function vk(t,e){return ma(t,"POST","/v1/accounts:signInWithPassword",Un(t,e))}async function wk(t,e){return Wn(t,"POST","/v1/accounts:sendOobCode",Un(t,e))}async function xk(t,e){return wk(t,e)}/**
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
 */async function bk(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}async function _k(t,e){return ma(t,"POST","/v1/accounts:signInWithEmailLink",Un(t,e))}/**
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
 */class Ko extends Hf{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ko(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ko(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,n,"signInWithPassword",vk);case"emailLink":return bk(e,{email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return lc(e,r,"signUpPassword",yk);case"emailLink":return _k(e,{idToken:n,email:this._email,oobCode:this._password});default:tn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function ts(t,e){return ma(t,"POST","/v1/accounts:signInWithIdp",Un(t,e))}/**
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
 */const Sk="http://localhost";class pi extends Hf{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new pi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):tn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...s}=n;if(!r||!i)return null;const o=new pi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ts(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ts(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ts(e,n)}buildRequest(){const e={requestUri:Sk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ha(n)}return e}}/**
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
 */function Ek(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tk(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class Gf{constructor(e){const n=oo(ao(e)),r=n.apiKey??null,i=n.oobCode??null,s=Ek(n.mode??null);G(r&&i&&s,"argument-error"),this.apiKey=r,this.operation=s,this.code=i,this.continueUrl=n.continueUrl??null,this.languageCode=n.lang??null,this.tenantId=n.tenantId??null}static parseLink(e){const n=Tk(e);try{return new Gf(n)}catch{return null}}}/**
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
 */class _s{constructor(){this.providerId=_s.PROVIDER_ID}static credential(e,n){return Ko._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Gf.parseLink(n);return G(r,"argument-error"),Ko._fromEmailAndCode(e,r.code,r.tenantId)}}_s.PROVIDER_ID="password";_s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";_s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class $w{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ga extends $w{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class ir extends ga{constructor(){super("facebook.com")}static credential(e){return pi._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.FACEBOOK_SIGN_IN_METHOD="facebook.com";ir.PROVIDER_ID="facebook.com";/**
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
 */class sr extends ga{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return pi._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.GOOGLE_SIGN_IN_METHOD="google.com";sr.PROVIDER_ID="google.com";/**
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
 */class or extends ga{constructor(){super("github.com")}static credential(e){return pi._fromParams({providerId:or.PROVIDER_ID,signInMethod:or.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return or.credentialFromTaggedObject(e)}static credentialFromError(e){return or.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return or.credential(e.oauthAccessToken)}catch{return null}}}or.GITHUB_SIGN_IN_METHOD="github.com";or.PROVIDER_ID="github.com";/**
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
 */class ar extends ga{constructor(){super("twitter.com")}static credential(e,n){return pi._fromParams({providerId:ar.PROVIDER_ID,signInMethod:ar.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ar.credentialFromTaggedObject(e)}static credentialFromError(e){return ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ar.credential(n,r)}catch{return null}}}ar.TWITTER_SIGN_IN_METHOD="twitter.com";ar.PROVIDER_ID="twitter.com";/**
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
 */async function Ik(t,e){return ma(t,"POST","/v1/accounts:signUp",Un(t,e))}/**
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
 */class mi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Kt._fromIdTokenResponse(e,r,i),o=wy(r);return new mi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wy(r);return new mi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class cc extends rn{constructor(e,n,r,i){super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,cc.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new cc(e,n,r,i)}}function Uw(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?cc._fromErrorAndOperation(t,s,e,r):s})}async function kk(t,e,n=!1){const r=await Qo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return mi._forOperation(t,"link",r)}/**
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
 */async function Ck(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Pn(r));const i="reauthenticate";try{const s=await Qo(t,Uw(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Wf(s.idToken);G(o,r,"internal-error");const{sub:c}=o;return G(t.uid===c,r,"user-mismatch"),mi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&tn(r,"user-mismatch"),s}}/**
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
 */async function Ww(t,e,n=!1){if(jt(t.app))return Promise.reject(Pn(t));const r="signIn",i=await Uw(t,r,e),s=await mi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Ak(t,e){return Ww(Or(t),e)}/**
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
 */async function qw(t){const e=Or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Rk(t,e,n){const r=Or(t);await lc(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",xk)}async function Pk(t,e,n){if(jt(t.app))return Promise.reject(Pn(t));const r=Or(t),o=await lc(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Ik).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&qw(t),u}),c=await mi._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function jk(t,e,n){return jt(t.app)?Promise.reject(Pn(t)):Ak(ke(t),_s.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&qw(t),r})}function Nk(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function Dk(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function Mk(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function Lk(t){return ke(t).signOut()}const uc="__sak";/**
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
 */class Hw{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(uc,"1"),this.storage.removeItem(uc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Ok=1e3,Vk=10;class Gw extends Hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ow(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);XI()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Vk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Ok)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gw.type="LOCAL";const zk=Gw;/**
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
 */class Qw extends Hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Qw.type="SESSION";const Kw=Qw;/**
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
 */function Fk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class $c{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new $c(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const c=Array.from(o).map(async d=>d(n.origin,s)),u=await Fk(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}$c.receivers=[];/**
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
 */function Qf(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class Bk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((c,u)=>{const d=Qf("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(g){const m=g;if(m.data.eventId===d)switch(m.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),c(m.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:d,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function pn(){return window}function $k(t){pn().location.href=t}/**
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
 */function Yw(){return typeof pn().WorkerGlobalScope<"u"&&typeof pn().importScripts=="function"}async function Uk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)==null?void 0:t.controller)||null}function qk(){return Yw()?self:null}/**
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
 */const Jw="firebaseLocalStorageDb",Hk=1,dc="firebaseLocalStorage",Xw="fbase_key";class ya{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Uc(t,e){return t.transaction([dc],e?"readwrite":"readonly").objectStore(dc)}function Gk(){const t=indexedDB.deleteDatabase(Jw);return new ya(t).toPromise()}function wh(){const t=indexedDB.open(Jw,Hk);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(dc,{keyPath:Xw})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(dc)?e(r):(r.close(),await Gk(),e(await wh()))})})}async function xy(t,e,n){const r=Uc(t,!0).put({[Xw]:e,value:n});return new ya(r).toPromise()}async function Qk(t,e){const n=Uc(t,!1).get(e),r=await new ya(n).toPromise();return r===void 0?null:r.value}function by(t,e){const n=Uc(t,!0).delete(e);return new ya(n).toPromise()}const Kk=800,Yk=3;class Zw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await wh(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Yk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=$c._getInstance(qk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var n,r;if(this.activeServiceWorker=await Uk(),!this.activeServiceWorker)return;this.sender=new Bk(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(n=e[0])!=null&&n.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await wh();return await xy(e,uc,"1"),await by(e,uc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>xy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Qk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>by(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Uc(i,!1).getAll();return new ya(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zw.type="LOCAL";const Jk=Zw;new pa(3e4,6e4);/**
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
 */function Xk(t,e){return e?kn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Kf extends Hf{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ts(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ts(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ts(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Zk(t){return Ww(t.auth,new Kf(t),t.bypassAuthState)}function eC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),Ck(n,new Kf(t),t.bypassAuthState)}async function tC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),kk(n,new Kf(t),t.bypassAuthState)}/**
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
 */class ex{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(d){this.reject(d)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Zk;case"linkViaPopup":case"linkViaRedirect":return tC;case"reauthViaPopup":case"reauthViaRedirect":return eC;default:tn(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const nC=new pa(2e3,1e4);class Hi extends ex{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Hi.currentPopupAction&&Hi.currentPopupAction.cancel(),Hi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Qf();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Hi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)==null?void 0:n.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,nC.get())};e()}}Hi.currentPopupAction=null;/**
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
 */const rC="pendingRedirect",Sl=new Map;class iC extends ex{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Sl.get(this.auth._key());if(!e){try{const r=await sC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Sl.set(this.auth._key(),e)}return this.bypassAuthState||Sl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sC(t,e){const n=lC(e),r=aC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function oC(t,e){Sl.set(t._key(),e)}function aC(t){return kn(t._redirectPersistence)}function lC(t){return _l(rC,t.config.apiKey,t.name)}async function cC(t,e,n=!1){if(jt(t.app))return Promise.reject(Pn(t));const r=Or(t),i=Xk(r,e),o=await new iC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const uC=10*60*1e3;class dC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!tx(e)){const i=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=uC&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function tx({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return tx(t);default:return!1}}/**
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
 */async function fC(t,e={}){return Wn(t,"GET","/v1/projects",e)}/**
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
 */const pC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,mC=/^https?/;async function gC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await fC(t);for(const n of e)try{if(yC(n))return}catch{}tn(t,"unauthorized-domain")}function yC(t){const e=yh(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!mC.test(n))return!1;if(pC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const vC=new pa(3e4,6e4);function Sy(){const t=pn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function wC(t){return new Promise((e,n)=>{var i,s,o;function r(){Sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sy(),n(fn(t,"network-request-failed"))},timeout:vC.get()})}if((s=(i=pn().gapi)==null?void 0:i.iframes)!=null&&s.Iframe)e(gapi.iframes.getContext());else if((o=pn().gapi)!=null&&o.load)r();else{const c=ak("iframefcb");return pn()[c]=()=>{gapi.load?r():n(fn(t,"network-request-failed"))},zw(`${ok()}?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw El=null,e})}let El=null;function xC(t){return El=El||wC(t),El}/**
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
 */const bC=new pa(5e3,15e3),_C="__/auth/iframe",SC="emulator/auth/iframe",EC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},TC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Uf(e,SC):`https://${t.config.authDomain}/${_C}`,r={apiKey:e.apiKey,appName:t.name,v:bs},i=TC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ha(r).slice(1)}`}async function kC(t){const e=await xC(t),n=pn().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:IC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:EC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=pn().setTimeout(()=>{s(o)},bC.get());function u(){pn().clearTimeout(c),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const CC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},AC=500,RC=600,PC="_blank",jC="http://localhost";class Ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function NC(t,e,n,r=AC,i=RC){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...CC,width:r.toString(),height:i.toString(),top:s,left:o},d=it().toLowerCase();n&&(c=jw(d)?PC:n),Rw(d)&&(e=e||jC,u.scrollbars="yes");const f=Object.entries(u).reduce((m,[S,C])=>`${m}${S}=${C},`,"");if(JI(d)&&c!=="_self")return DC(e||"",c),new Ey(null);const g=window.open(e||"",c,f);G(g,t,"popup-blocked");try{g.focus()}catch{}return new Ey(g)}function DC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const MC="__/auth/handler",LC="emulator/auth/handler",OC=encodeURIComponent("fac");async function Ty(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:bs,eventId:i};if(e instanceof $w){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gT(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,g]of Object.entries({}))o[f]=g}if(e instanceof ga){const f=e.getScopes().filter(g=>g!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),d=u?`#${OC}=${encodeURIComponent(u)}`:"";return`${VC(t)}?${ha(c).slice(1)}${d}`}function VC({config:t}){return t.emulator?Uf(t,LC):`https://${t.authDomain}/${MC}`}/**
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
 */const ld="webStorageSupport";class zC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Kw,this._completeRedirectFn=cC,this._overrideRedirectResult=oC}async _openPopup(e,n,r,i){var o;zn((o=this.eventManagers[e._key()])==null?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await Ty(e,n,r,yh(),i);return NC(e,s,Qf())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Ty(e,n,r,yh(),i);return $k(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(zn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kC(e),r=new dC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ld,{type:ld},i=>{var o;const s=(o=i==null?void 0:i[0])==null?void 0:o[ld];s!==void 0&&n(!!s),tn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=gC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ow()||Pw()||qf()}}const FC=zC;var Iy="@firebase/auth",ky="1.13.1";/**
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
 */class BC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function $C(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function UC(t){vn(new en("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vw(t)},d=new rk(r,i,s,u);return fk(d,n),d},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),vn(new en("auth-internal",e=>{const n=Or(e.getProvider("auth").getImmediate());return(r=>new BC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Iy,ky,$C(t)),Ot(Iy,ky,"esm2020")}/**
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
 */const WC=5*60,qC=dw("authIdTokenMaxAge")||WC;let Cy=null;const HC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qC)return;const i=n==null?void 0:n.token;Cy!==i&&(Cy=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function GC(t=Bf()){const e=Si(t,"auth");if(e.isInitialized())return e.getImmediate();const n=hk(t,{popupRedirectResolver:FC,persistence:[Jk,zk,Kw]}),r=dw("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=HC(s.toString());Dk(n,o,()=>o(n.currentUser)),Nk(n,c=>o(c))}}const i=cw("auth");return i&&pk(n,`http://${i}`),n}function QC(){var t;return((t=document.getElementsByTagName("head"))==null?void 0:t[0])??document}ik({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=fn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",QC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});UC("Browser");var Ay=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xr,nx;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function I(){}I.prototype=y.prototype,w.F=y.prototype,w.prototype=new I,w.prototype.constructor=w,w.D=function(k,T,A){for(var _=Array(arguments.length-2),te=2;te<arguments.length;te++)_[te-2]=arguments[te];return y.prototype[T].apply(k,_)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,n),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(w,y,I){I||(I=0);const k=Array(16);if(typeof y=="string")for(var T=0;T<16;++T)k[T]=y.charCodeAt(I++)|y.charCodeAt(I++)<<8|y.charCodeAt(I++)<<16|y.charCodeAt(I++)<<24;else for(T=0;T<16;++T)k[T]=y[I++]|y[I++]<<8|y[I++]<<16|y[I++]<<24;y=w.g[0],I=w.g[1],T=w.g[2];let A=w.g[3],_;_=y+(A^I&(T^A))+k[0]+3614090360&4294967295,y=I+(_<<7&4294967295|_>>>25),_=A+(T^y&(I^T))+k[1]+3905402710&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(I^A&(y^I))+k[2]+606105819&4294967295,T=A+(_<<17&4294967295|_>>>15),_=I+(y^T&(A^y))+k[3]+3250441966&4294967295,I=T+(_<<22&4294967295|_>>>10),_=y+(A^I&(T^A))+k[4]+4118548399&4294967295,y=I+(_<<7&4294967295|_>>>25),_=A+(T^y&(I^T))+k[5]+1200080426&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(I^A&(y^I))+k[6]+2821735955&4294967295,T=A+(_<<17&4294967295|_>>>15),_=I+(y^T&(A^y))+k[7]+4249261313&4294967295,I=T+(_<<22&4294967295|_>>>10),_=y+(A^I&(T^A))+k[8]+1770035416&4294967295,y=I+(_<<7&4294967295|_>>>25),_=A+(T^y&(I^T))+k[9]+2336552879&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(I^A&(y^I))+k[10]+4294925233&4294967295,T=A+(_<<17&4294967295|_>>>15),_=I+(y^T&(A^y))+k[11]+2304563134&4294967295,I=T+(_<<22&4294967295|_>>>10),_=y+(A^I&(T^A))+k[12]+1804603682&4294967295,y=I+(_<<7&4294967295|_>>>25),_=A+(T^y&(I^T))+k[13]+4254626195&4294967295,A=y+(_<<12&4294967295|_>>>20),_=T+(I^A&(y^I))+k[14]+2792965006&4294967295,T=A+(_<<17&4294967295|_>>>15),_=I+(y^T&(A^y))+k[15]+1236535329&4294967295,I=T+(_<<22&4294967295|_>>>10),_=y+(T^A&(I^T))+k[1]+4129170786&4294967295,y=I+(_<<5&4294967295|_>>>27),_=A+(I^T&(y^I))+k[6]+3225465664&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^I&(A^y))+k[11]+643717713&4294967295,T=A+(_<<14&4294967295|_>>>18),_=I+(A^y&(T^A))+k[0]+3921069994&4294967295,I=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(I^T))+k[5]+3593408605&4294967295,y=I+(_<<5&4294967295|_>>>27),_=A+(I^T&(y^I))+k[10]+38016083&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^I&(A^y))+k[15]+3634488961&4294967295,T=A+(_<<14&4294967295|_>>>18),_=I+(A^y&(T^A))+k[4]+3889429448&4294967295,I=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(I^T))+k[9]+568446438&4294967295,y=I+(_<<5&4294967295|_>>>27),_=A+(I^T&(y^I))+k[14]+3275163606&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^I&(A^y))+k[3]+4107603335&4294967295,T=A+(_<<14&4294967295|_>>>18),_=I+(A^y&(T^A))+k[8]+1163531501&4294967295,I=T+(_<<20&4294967295|_>>>12),_=y+(T^A&(I^T))+k[13]+2850285829&4294967295,y=I+(_<<5&4294967295|_>>>27),_=A+(I^T&(y^I))+k[2]+4243563512&4294967295,A=y+(_<<9&4294967295|_>>>23),_=T+(y^I&(A^y))+k[7]+1735328473&4294967295,T=A+(_<<14&4294967295|_>>>18),_=I+(A^y&(T^A))+k[12]+2368359562&4294967295,I=T+(_<<20&4294967295|_>>>12),_=y+(I^T^A)+k[5]+4294588738&4294967295,y=I+(_<<4&4294967295|_>>>28),_=A+(y^I^T)+k[8]+2272392833&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^I)+k[11]+1839030562&4294967295,T=A+(_<<16&4294967295|_>>>16),_=I+(T^A^y)+k[14]+4259657740&4294967295,I=T+(_<<23&4294967295|_>>>9),_=y+(I^T^A)+k[1]+2763975236&4294967295,y=I+(_<<4&4294967295|_>>>28),_=A+(y^I^T)+k[4]+1272893353&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^I)+k[7]+4139469664&4294967295,T=A+(_<<16&4294967295|_>>>16),_=I+(T^A^y)+k[10]+3200236656&4294967295,I=T+(_<<23&4294967295|_>>>9),_=y+(I^T^A)+k[13]+681279174&4294967295,y=I+(_<<4&4294967295|_>>>28),_=A+(y^I^T)+k[0]+3936430074&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^I)+k[3]+3572445317&4294967295,T=A+(_<<16&4294967295|_>>>16),_=I+(T^A^y)+k[6]+76029189&4294967295,I=T+(_<<23&4294967295|_>>>9),_=y+(I^T^A)+k[9]+3654602809&4294967295,y=I+(_<<4&4294967295|_>>>28),_=A+(y^I^T)+k[12]+3873151461&4294967295,A=y+(_<<11&4294967295|_>>>21),_=T+(A^y^I)+k[15]+530742520&4294967295,T=A+(_<<16&4294967295|_>>>16),_=I+(T^A^y)+k[2]+3299628645&4294967295,I=T+(_<<23&4294967295|_>>>9),_=y+(T^(I|~A))+k[0]+4096336452&4294967295,y=I+(_<<6&4294967295|_>>>26),_=A+(I^(y|~T))+k[7]+1126891415&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~I))+k[14]+2878612391&4294967295,T=A+(_<<15&4294967295|_>>>17),_=I+(A^(T|~y))+k[5]+4237533241&4294967295,I=T+(_<<21&4294967295|_>>>11),_=y+(T^(I|~A))+k[12]+1700485571&4294967295,y=I+(_<<6&4294967295|_>>>26),_=A+(I^(y|~T))+k[3]+2399980690&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~I))+k[10]+4293915773&4294967295,T=A+(_<<15&4294967295|_>>>17),_=I+(A^(T|~y))+k[1]+2240044497&4294967295,I=T+(_<<21&4294967295|_>>>11),_=y+(T^(I|~A))+k[8]+1873313359&4294967295,y=I+(_<<6&4294967295|_>>>26),_=A+(I^(y|~T))+k[15]+4264355552&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~I))+k[6]+2734768916&4294967295,T=A+(_<<15&4294967295|_>>>17),_=I+(A^(T|~y))+k[13]+1309151649&4294967295,I=T+(_<<21&4294967295|_>>>11),_=y+(T^(I|~A))+k[4]+4149444226&4294967295,y=I+(_<<6&4294967295|_>>>26),_=A+(I^(y|~T))+k[11]+3174756917&4294967295,A=y+(_<<10&4294967295|_>>>22),_=T+(y^(A|~I))+k[2]+718787259&4294967295,T=A+(_<<15&4294967295|_>>>17),_=I+(A^(T|~y))+k[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(T+(_<<21&4294967295|_>>>11))&4294967295,w.g[2]=w.g[2]+T&4294967295,w.g[3]=w.g[3]+A&4294967295}r.prototype.v=function(w,y){y===void 0&&(y=w.length);const I=y-this.blockSize,k=this.C;let T=this.h,A=0;for(;A<y;){if(T==0)for(;A<=I;)i(this,w,A),A+=this.blockSize;if(typeof w=="string"){for(;A<y;)if(k[T++]=w.charCodeAt(A++),T==this.blockSize){i(this,k),T=0;break}}else for(;A<y;)if(k[T++]=w[A++],T==this.blockSize){i(this,k),T=0;break}}this.h=T,this.o+=y},r.prototype.A=function(){var w=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;y=this.o*8;for(var I=w.length-8;I<w.length;++I)w[I]=y&255,y/=256;for(this.v(w),w=Array(16),y=0,I=0;I<4;++I)for(let k=0;k<32;k+=8)w[y++]=this.g[I]>>>k&255;return w};function s(w,y){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=y(w)}function o(w,y){this.h=y;const I=[];let k=!0;for(let T=w.length-1;T>=0;T--){const A=w[T]|0;k&&A==y||(I[T]=A,k=!1)}this.g=I}var c={};function u(w){return-128<=w&&w<128?s(w,function(y){return new o([y|0],y<0?-1:0)}):new o([w|0],w<0?-1:0)}function d(w){if(isNaN(w)||!isFinite(w))return g;if(w<0)return O(d(-w));const y=[];let I=1;for(let k=0;w>=I;k++)y[k]=w/I|0,I*=4294967296;return new o(y,0)}function f(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,y<2||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(f(w.substring(1),y));if(w.indexOf("-")>=0)throw Error('number format error: interior "-" character');const I=d(Math.pow(y,8));let k=g;for(let A=0;A<w.length;A+=8){var T=Math.min(8,w.length-A);const _=parseInt(w.substring(A,A+T),y);T<8?(T=d(Math.pow(y,T)),k=k.j(T).add(d(_))):(k=k.j(I),k=k.add(d(_)))}return k}var g=u(0),m=u(1),S=u(16777216);t=o.prototype,t.m=function(){if(j(this))return-O(this).m();let w=0,y=1;for(let I=0;I<this.g.length;I++){const k=this.i(I);w+=(k>=0?k:4294967296+k)*y,y*=4294967296}return w},t.toString=function(w){if(w=w||10,w<2||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(j(this))return"-"+O(this).toString(w);const y=d(Math.pow(w,6));var I=this;let k="";for(;;){const T=P(I,y).g;I=E(I,T.j(y));let A=((I.g.length>0?I.g[0]:I.h)>>>0).toString(w);if(I=T,C(I))return A+k;for(;A.length<6;)A="0"+A;k=A+k}},t.i=function(w){return w<0?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(let y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function j(w){return w.h==-1}t.l=function(w){return w=E(this,w),j(w)?-1:C(w)?0:1};function O(w){const y=w.g.length,I=[];for(let k=0;k<y;k++)I[k]=~w.g[k];return new o(I,~w.h).add(m)}t.abs=function(){return j(this)?O(this):this},t.add=function(w){const y=Math.max(this.g.length,w.g.length),I=[];let k=0;for(let T=0;T<=y;T++){let A=k+(this.i(T)&65535)+(w.i(T)&65535),_=(A>>>16)+(this.i(T)>>>16)+(w.i(T)>>>16);k=_>>>16,A&=65535,_&=65535,I[T]=_<<16|A}return new o(I,I[I.length-1]&-2147483648?-1:0)};function E(w,y){return w.add(O(y))}t.j=function(w){if(C(this)||C(w))return g;if(j(this))return j(w)?O(this).j(O(w)):O(O(this).j(w));if(j(w))return O(this.j(O(w)));if(this.l(S)<0&&w.l(S)<0)return d(this.m()*w.m());const y=this.g.length+w.g.length,I=[];for(var k=0;k<2*y;k++)I[k]=0;for(k=0;k<this.g.length;k++)for(let T=0;T<w.g.length;T++){const A=this.i(k)>>>16,_=this.i(k)&65535,te=w.i(T)>>>16,de=w.i(T)&65535;I[2*k+2*T]+=_*de,v(I,2*k+2*T),I[2*k+2*T+1]+=A*de,v(I,2*k+2*T+1),I[2*k+2*T+1]+=_*te,v(I,2*k+2*T+1),I[2*k+2*T+2]+=A*te,v(I,2*k+2*T+2)}for(w=0;w<y;w++)I[w]=I[2*w+1]<<16|I[2*w];for(w=y;w<2*y;w++)I[w]=0;return new o(I,0)};function v(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function b(w,y){this.g=w,this.h=y}function P(w,y){if(C(y))throw Error("division by zero");if(C(w))return new b(g,g);if(j(w))return y=P(O(w),y),new b(O(y.g),O(y.h));if(j(y))return y=P(w,O(y)),new b(O(y.g),y.h);if(w.g.length>30){if(j(w)||j(y))throw Error("slowDivide_ only works with positive integers.");for(var I=m,k=y;k.l(w)<=0;)I=L(I),k=L(k);var T=R(I,1),A=R(k,1);for(k=R(k,2),I=R(I,2);!C(k);){var _=A.add(k);_.l(w)<=0&&(T=T.add(I),A=_),k=R(k,1),I=R(I,1)}return y=E(w,T.j(y)),new b(T,y)}for(T=g;w.l(y)>=0;){for(I=Math.max(1,Math.floor(w.m()/y.m())),k=Math.ceil(Math.log(I)/Math.LN2),k=k<=48?1:Math.pow(2,k-48),A=d(I),_=A.j(y);j(_)||_.l(w)>0;)I-=k,A=d(I),_=A.j(y);C(A)&&(A=m),T=T.add(A),w=E(w,_)}return new b(T,w)}t.B=function(w){return P(this,w).h},t.and=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)&w.i(k);return new o(I,this.h&w.h)},t.or=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)|w.i(k);return new o(I,this.h|w.h)},t.xor=function(w){const y=Math.max(this.g.length,w.g.length),I=[];for(let k=0;k<y;k++)I[k]=this.i(k)^w.i(k);return new o(I,this.h^w.h)};function L(w){const y=w.g.length+1,I=[];for(let k=0;k<y;k++)I[k]=w.i(k)<<1|w.i(k-1)>>>31;return new o(I,w.h)}function R(w,y){const I=y>>5;y%=32;const k=w.g.length-I,T=[];for(let A=0;A<k;A++)T[A]=y>0?w.i(A+I)>>>y|w.i(A+I+1)<<32-y:w.i(A+I);return new o(T,w.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,nx=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=d,o.fromString=f,xr=o}).apply(typeof Ay<"u"?Ay:typeof self<"u"?self:typeof window<"u"?window:{});var nl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var rx,lo,ix,Tl,xh,sx,ox,ax;(function(){var t,e=Object.defineProperty;function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof nl=="object"&&nl];for(var h=0;h<l.length;++h){var p=l[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function i(l,h){if(h)e:{var p=r;l=l.split(".");for(var x=0;x<l.length-1;x++){var N=l[x];if(!(N in p))break e;p=p[N]}l=l[l.length-1],x=p[l],h=h(x),h!=x&&h!=null&&e(p,l,{configurable:!0,writable:!0,value:h})}}i("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(l){return l||function(h){var p=[],x;for(x in h)Object.prototype.hasOwnProperty.call(h,x)&&p.push([x,h[x]]);return p}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var s=s||{},o=this||self;function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function u(l,h,p){return l.call.apply(l.bind,arguments)}function d(l,h,p){return d=u,d.apply(null,arguments)}function f(l,h){var p=Array.prototype.slice.call(arguments,1);return function(){var x=p.slice();return x.push.apply(x,arguments),l.apply(this,x)}}function g(l,h){function p(){}p.prototype=h.prototype,l.Z=h.prototype,l.prototype=new p,l.prototype.constructor=l,l.Ob=function(x,N,D){for(var B=Array(arguments.length-2),ee=2;ee<arguments.length;ee++)B[ee-2]=arguments[ee];return h.prototype[N].apply(x,B)}}var m=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function S(l){const h=l.length;if(h>0){const p=Array(h);for(let x=0;x<h;x++)p[x]=l[x];return p}return[]}function C(l,h){for(let x=1;x<arguments.length;x++){const N=arguments[x];var p=typeof N;if(p=p!="object"?p:N?Array.isArray(N)?"array":p:"null",p=="array"||p=="object"&&typeof N.length=="number"){p=l.length||0;const D=N.length||0;l.length=p+D;for(let B=0;B<D;B++)l[p+B]=N[B]}else l.push(N)}}class j{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return this.h>0?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function O(l){o.setTimeout(()=>{throw l},0)}function E(){var l=w;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class v{constructor(){this.h=this.g=null}add(h,p){const x=b.get();x.set(h,p),this.h?this.h.next=x:this.g=x,this.h=x}}var b=new j(()=>new P,l=>l.reset());class P{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let L,R=!1,w=new v,y=()=>{const l=Promise.resolve(void 0);L=()=>{l.then(I)}};function I(){for(var l;l=E();){try{l.h.call(l.g)}catch(p){O(p)}var h=b;h.j(l),h.h<100&&(h.h++,l.next=h.g,h.g=l)}R=!1}function k(){this.u=this.u,this.C=this.C}k.prototype.u=!1,k.prototype.dispose=function(){this.u||(this.u=!0,this.N())},k.prototype[Symbol.dispose]=function(){this.dispose()},k.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function T(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}T.prototype.h=function(){this.defaultPrevented=!0};var A=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const p=()=>{};o.addEventListener("test",p,h),o.removeEventListener("test",p,h)}catch{}return l}();function _(l){return/^[\s\xa0]*$/.test(l)}function te(l,h){T.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,h)}g(te,T),te.prototype.init=function(l,h){const p=this.type=l.type,x=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget,h||(p=="mouseover"?h=l.fromElement:p=="mouseout"&&(h=l.toElement)),this.relatedTarget=h,x?(this.clientX=x.clientX!==void 0?x.clientX:x.pageX,this.clientY=x.clientY!==void 0?x.clientY:x.pageY,this.screenX=x.screenX||0,this.screenY=x.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&te.Z.h.call(this)},te.prototype.h=function(){te.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var de="closure_listenable_"+(Math.random()*1e6|0),ve=0;function Br(l,h,p,x,N){this.listener=l,this.proxy=null,this.src=h,this.type=p,this.capture=!!x,this.ha=N,this.key=++ve,this.da=this.fa=!1}function $(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function Y(l,h,p){for(const x in l)h.call(p,l[x],x,l)}function Z(l,h){for(const p in l)h.call(void 0,l[p],p,l)}function we(l){const h={};for(const p in l)h[p]=l[p];return h}const Ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $r(l,h){let p,x;for(let N=1;N<arguments.length;N++){x=arguments[N];for(p in x)l[p]=x[p];for(let D=0;D<Ce.length;D++)p=Ce[D],Object.prototype.hasOwnProperty.call(x,p)&&(l[p]=x[p])}}function At(l){this.src=l,this.g={},this.h=0}At.prototype.add=function(l,h,p,x,N){const D=l.toString();l=this.g[D],l||(l=this.g[D]=[],this.h++);const B=$t(l,h,x,N);return B>-1?(h=l[B],p||(h.fa=!1)):(h=new Br(h,this.src,D,!!x,N),h.fa=p,l.push(h)),h};function Ur(l,h){const p=h.type;if(p in l.g){var x=l.g[p],N=Array.prototype.indexOf.call(x,h,void 0),D;(D=N>=0)&&Array.prototype.splice.call(x,N,1),D&&($(h),l.g[p].length==0&&(delete l.g[p],l.h--))}}function $t(l,h,p,x){for(let N=0;N<l.length;++N){const D=l[N];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==x)return N}return-1}var qn="closure_lm_"+(Math.random()*1e6|0),lu={};function qp(l,h,p,x,N){if(Array.isArray(h)){for(let D=0;D<h.length;D++)qp(l,h[D],p,x,N);return null}return p=Qp(p),l&&l[de]?l.J(h,p,c(x)?!!x.capture:!1,N):u_(l,h,p,!1,x,N)}function u_(l,h,p,x,N,D){if(!h)throw Error("Invalid event type");const B=c(N)?!!N.capture:!!N;let ee=uu(l);if(ee||(l[qn]=ee=new At(l)),p=ee.add(h,p,x,B,D),p.proxy)return p;if(x=d_(),p.proxy=x,x.src=l,x.listener=p,l.addEventListener)A||(N=B),N===void 0&&(N=!1),l.addEventListener(h.toString(),x,N);else if(l.attachEvent)l.attachEvent(Gp(h.toString()),x);else if(l.addListener&&l.removeListener)l.addListener(x);else throw Error("addEventListener and attachEvent are unavailable.");return p}function d_(){function l(p){return h.call(l.src,l.listener,p)}const h=h_;return l}function Hp(l,h,p,x,N){if(Array.isArray(h))for(var D=0;D<h.length;D++)Hp(l,h[D],p,x,N);else x=c(x)?!!x.capture:!!x,p=Qp(p),l&&l[de]?(l=l.i,D=String(h).toString(),D in l.g&&(h=l.g[D],p=$t(h,p,x,N),p>-1&&($(h[p]),Array.prototype.splice.call(h,p,1),h.length==0&&(delete l.g[D],l.h--)))):l&&(l=uu(l))&&(h=l.g[h.toString()],l=-1,h&&(l=$t(h,p,x,N)),(p=l>-1?h[l]:null)&&cu(p))}function cu(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[de])Ur(h.i,l);else{var p=l.type,x=l.proxy;h.removeEventListener?h.removeEventListener(p,x,l.capture):h.detachEvent?h.detachEvent(Gp(p),x):h.addListener&&h.removeListener&&h.removeListener(x),(p=uu(h))?(Ur(p,l),p.h==0&&(p.src=null,h[qn]=null)):$(l)}}}function Gp(l){return l in lu?lu[l]:lu[l]="on"+l}function h_(l,h){if(l.da)l=!0;else{h=new te(h,this);const p=l.listener,x=l.ha||l.src;l.fa&&cu(l),l=p.call(x,h)}return l}function uu(l){return l=l[qn],l instanceof At?l:null}var du="__closure_events_fn_"+(Math.random()*1e9>>>0);function Qp(l){return typeof l=="function"?l:(l[du]||(l[du]=function(h){return l.handleEvent(h)}),l[du])}function Ye(){k.call(this),this.i=new At(this),this.M=this,this.G=null}g(Ye,k),Ye.prototype[de]=!0,Ye.prototype.removeEventListener=function(l,h,p,x){Hp(this,l,h,p,x)};function st(l,h){var p,x=l.G;if(x)for(p=[];x;x=x.G)p.push(x);if(l=l.M,x=h.type||h,typeof h=="string")h=new T(h,l);else if(h instanceof T)h.target=h.target||l;else{var N=h;h=new T(x,l),$r(h,N)}N=!0;let D,B;if(p)for(B=p.length-1;B>=0;B--)D=h.g=p[B],N=Ia(D,x,!0,h)&&N;if(D=h.g=l,N=Ia(D,x,!0,h)&&N,N=Ia(D,x,!1,h)&&N,p)for(B=0;B<p.length;B++)D=h.g=p[B],N=Ia(D,x,!1,h)&&N}Ye.prototype.N=function(){if(Ye.Z.N.call(this),this.i){var l=this.i;for(const h in l.g){const p=l.g[h];for(let x=0;x<p.length;x++)$(p[x]);delete l.g[h],l.h--}}this.G=null},Ye.prototype.J=function(l,h,p,x){return this.i.add(String(l),h,!1,p,x)},Ye.prototype.K=function(l,h,p,x){return this.i.add(String(l),h,!0,p,x)};function Ia(l,h,p,x){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();let N=!0;for(let D=0;D<h.length;++D){const B=h[D];if(B&&!B.da&&B.capture==p){const ee=B.listener,Le=B.ha||B.src;B.fa&&Ur(l.i,B),N=ee.call(Le,x)!==!1&&N}}return N&&!x.defaultPrevented}function f_(l,h){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=d(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(h)>2147483647?-1:o.setTimeout(l,h||0)}function Kp(l){l.g=f_(()=>{l.g=null,l.i&&(l.i=!1,Kp(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class p_ extends k{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Kp(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Cs(l){k.call(this),this.h=l,this.g={}}g(Cs,k);var Yp=[];function Jp(l){Y(l.g,function(h,p){this.g.hasOwnProperty(p)&&cu(h)},l),l.g={}}Cs.prototype.N=function(){Cs.Z.N.call(this),Jp(this)},Cs.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var hu=o.JSON.stringify,m_=o.JSON.parse,g_=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Xp(){}function Zp(){}var As={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function fu(){T.call(this,"d")}g(fu,T);function pu(){T.call(this,"c")}g(pu,T);var Wr={},em=null;function ka(){return em=em||new Ye}Wr.Ia="serverreachability";function tm(l){T.call(this,Wr.Ia,l)}g(tm,T);function Rs(l){const h=ka();st(h,new tm(h))}Wr.STAT_EVENT="statevent";function nm(l,h){T.call(this,Wr.STAT_EVENT,l),this.stat=h}g(nm,T);function ot(l){const h=ka();st(h,new nm(h,l))}Wr.Ja="timingevent";function rm(l,h){T.call(this,Wr.Ja,l),this.size=h}g(rm,T);function Ps(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},h)}function js(){this.g=!0}js.prototype.ua=function(){this.g=!1};function y_(l,h,p,x,N,D){l.info(function(){if(l.g)if(D){var B="",ee=D.split("&");for(let ue=0;ue<ee.length;ue++){var Le=ee[ue].split("=");if(Le.length>1){const Fe=Le[0];Le=Le[1];const on=Fe.split("_");B=on.length>=2&&on[1]=="type"?B+(Fe+"="+Le+"&"):B+(Fe+"=redacted&")}}}else B=null;else B=D;return"XMLHTTP REQ ("+x+") [attempt "+N+"]: "+h+`
`+p+`
`+B})}function v_(l,h,p,x,N,D,B){l.info(function(){return"XMLHTTP RESP ("+x+") [ attempt "+N+"]: "+h+`
`+p+`
`+D+" "+B})}function Ii(l,h,p,x){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+x_(l,p)+(x?" "+x:"")})}function w_(l,h){l.info(function(){return"TIMEOUT: "+h})}js.prototype.info=function(){};function x_(l,h){if(!l.g)return h;if(!h)return null;try{const D=JSON.parse(h);if(D){for(l=0;l<D.length;l++)if(Array.isArray(D[l])){var p=D[l];if(!(p.length<2)){var x=p[1];if(Array.isArray(x)&&!(x.length<1)){var N=x[0];if(N!="noop"&&N!="stop"&&N!="close")for(let B=1;B<x.length;B++)x[B]=""}}}}return hu(D)}catch{return h}}var Ca={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},im={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},sm;function mu(){}g(mu,Xp),mu.prototype.g=function(){return new XMLHttpRequest},sm=new mu;function Ns(l){return encodeURIComponent(String(l))}function b_(l){var h=1;l=l.split(":");const p=[];for(;h>0&&l.length;)p.push(l.shift()),h--;return l.length&&p.push(l.join(":")),p}function Hn(l,h,p,x){this.j=l,this.i=h,this.l=p,this.S=x||1,this.V=new Cs(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new om}function om(){this.i=null,this.g="",this.h=!1}var am={},gu={};function yu(l,h,p){l.M=1,l.A=Ra(sn(h)),l.u=p,l.R=!0,lm(l,null)}function lm(l,h){l.F=Date.now(),Aa(l),l.B=sn(l.A);var p=l.B,x=l.S;Array.isArray(x)||(x=[String(x)]),bm(p.i,"t",x),l.C=0,p=l.j.L,l.h=new om,l.g=zm(l.j,p?h:null,!l.u),l.P>0&&(l.O=new p_(d(l.Y,l,l.g),l.P)),h=l.V,p=l.g,x=l.ba;var N="readystatechange";Array.isArray(N)||(N&&(Yp[0]=N.toString()),N=Yp);for(let D=0;D<N.length;D++){const B=qp(p,N[D],x||h.handleEvent,!1,h.h||h);if(!B)break;h.g[B.key]=B}h=l.J?we(l.J):{},l.u?(l.v||(l.v="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,h)):(l.v="GET",l.g.ea(l.B,l.v,null,h)),Rs(),y_(l.i,l.v,l.B,l.l,l.S,l.u)}Hn.prototype.ba=function(l){l=l.target;const h=this.O;h&&Kn(l)==3?h.j():this.Y(l)},Hn.prototype.Y=function(l){try{if(l==this.g)e:{const ee=Kn(this.g),Le=this.g.ya(),ue=this.g.ca();if(!(ee<3)&&(ee!=3||this.g&&(this.h.h||this.g.la()||Cm(this.g)))){this.K||ee!=4||Le==7||(Le==8||ue<=0?Rs(3):Rs(2)),vu(this);var h=this.g.ca();this.X=h;var p=__(this);if(this.o=h==200,v_(this.i,this.v,this.B,this.l,this.S,ee,h),this.o){if(this.U&&!this.L){t:{if(this.g){var x,N=this.g;if((x=N.g?N.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!_(x)){var D=x;break t}}D=null}if(l=D)Ii(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,wu(this,l);else{this.o=!1,this.m=3,ot(12),qr(this),Ds(this);break e}}if(this.R){l=!0;let Fe;for(;!this.K&&this.C<p.length;)if(Fe=S_(this,p),Fe==gu){ee==4&&(this.m=4,ot(14),l=!1),Ii(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==am){this.m=4,ot(15),Ii(this.i,this.l,p,"[Invalid Chunk]"),l=!1;break}else Ii(this.i,this.l,Fe,null),wu(this,Fe);if(cm(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ee!=4||p.length!=0||this.h.h||(this.m=1,ot(16),l=!1),this.o=this.o&&l,!l)Ii(this.i,this.l,p,"[Invalid Chunked Response]"),qr(this),Ds(this);else if(p.length>0&&!this.W){this.W=!0;var B=this.j;B.g==this&&B.aa&&!B.P&&(B.j.info("Great, no buffering proxy detected. Bytes received: "+p.length),ku(B),B.P=!0,ot(11))}}else Ii(this.i,this.l,p,null),wu(this,p);ee==4&&qr(this),this.o&&!this.K&&(ee==4?Mm(this.j,this):(this.o=!1,Aa(this)))}else O_(this.g),h==400&&p.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),qr(this),Ds(this)}}}catch{}finally{}};function __(l){if(!cm(l))return l.g.la();const h=Cm(l.g);if(h==="")return"";let p="";const x=h.length,N=Kn(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return qr(l),Ds(l),"";l.h.i=new o.TextDecoder}for(let D=0;D<x;D++)l.h.h=!0,p+=l.h.i.decode(h[D],{stream:!(N&&D==x-1)});return h.length=0,l.h.g+=p,l.C=0,l.h.g}function cm(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function S_(l,h){var p=l.C,x=h.indexOf(`
`,p);return x==-1?gu:(p=Number(h.substring(p,x)),isNaN(p)?am:(x+=1,x+p>h.length?gu:(h=h.slice(x,x+p),l.C=x+p,h)))}Hn.prototype.cancel=function(){this.K=!0,qr(this)};function Aa(l){l.T=Date.now()+l.H,um(l,l.H)}function um(l,h){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Ps(d(l.aa,l),h)}function vu(l){l.D&&(o.clearTimeout(l.D),l.D=null)}Hn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(w_(this.i,this.B),this.M!=2&&(Rs(),ot(17)),qr(this),this.m=2,Ds(this)):um(this,this.T-l)};function Ds(l){l.j.I==0||l.K||Mm(l.j,l)}function qr(l){vu(l);var h=l.O;h&&typeof h.dispose=="function"&&h.dispose(),l.O=null,Jp(l.V),l.g&&(h=l.g,l.g=null,h.abort(),h.dispose())}function wu(l,h){try{var p=l.j;if(p.I!=0&&(p.g==l||xu(p.h,l))){if(!l.L&&xu(p.h,l)&&p.I==3){try{var x=p.Ba.g.parse(h)}catch{x=null}if(Array.isArray(x)&&x.length==3){var N=x;if(N[0]==0){e:if(!p.v){if(p.g)if(p.g.F+3e3<l.F)Ma(p),Na(p);else break e;Iu(p),ot(18)}}else p.xa=N[1],0<p.xa-p.K&&N[2]<37500&&p.F&&p.A==0&&!p.C&&(p.C=Ps(d(p.Va,p),6e3));fm(p.h)<=1&&p.ta&&(p.ta=void 0)}else Gr(p,11)}else if((l.L||p.g==l)&&Ma(p),!_(h))for(N=p.Ba.g.parse(h),h=0;h<N.length;h++){let ue=N[h];const Fe=ue[0];if(!(Fe<=p.K))if(p.K=Fe,ue=ue[1],p.I==2)if(ue[0]=="c"){p.M=ue[1],p.ba=ue[2];const on=ue[3];on!=null&&(p.ka=on,p.j.info("VER="+p.ka));const Qr=ue[4];Qr!=null&&(p.za=Qr,p.j.info("SVER="+p.za));const Yn=ue[5];Yn!=null&&typeof Yn=="number"&&Yn>0&&(x=1.5*Yn,p.O=x,p.j.info("backChannelRequestTimeoutMs_="+x)),x=p;const Jn=l.g;if(Jn){const Oa=Jn.g?Jn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Oa){var D=x.h;D.g||Oa.indexOf("spdy")==-1&&Oa.indexOf("quic")==-1&&Oa.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(bu(D,D.h),D.h=null))}if(x.G){const Cu=Jn.g?Jn.g.getResponseHeader("X-HTTP-Session-Id"):null;Cu&&(x.wa=Cu,pe(x.J,x.G,Cu))}}p.I=3,p.l&&p.l.ra(),p.aa&&(p.T=Date.now()-l.F,p.j.info("Handshake RTT: "+p.T+"ms")),x=p;var B=l;if(x.na=Vm(x,x.L?x.ba:null,x.W),B.L){pm(x.h,B);var ee=B,Le=x.O;Le&&(ee.H=Le),ee.D&&(vu(ee),Aa(ee)),x.g=B}else Nm(x);p.i.length>0&&Da(p)}else ue[0]!="stop"&&ue[0]!="close"||Gr(p,7);else p.I==3&&(ue[0]=="stop"||ue[0]=="close"?ue[0]=="stop"?Gr(p,7):Tu(p):ue[0]!="noop"&&p.l&&p.l.qa(ue),p.A=0)}}Rs(4)}catch{}}var E_=class{constructor(l,h){this.g=l,this.map=h}};function dm(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function hm(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function fm(l){return l.h?1:l.g?l.g.size:0}function xu(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function bu(l,h){l.g?l.g.add(h):l.h=h}function pm(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}dm.prototype.cancel=function(){if(this.i=mm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function mm(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const p of l.g.values())h=h.concat(p.G);return h}return S(l.i)}var gm=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T_(l,h){if(l){l=l.split("&");for(let p=0;p<l.length;p++){const x=l[p].indexOf("=");let N,D=null;x>=0?(N=l[p].substring(0,x),D=l[p].substring(x+1)):N=l[p],h(N,D?decodeURIComponent(D.replace(/\+/g," ")):"")}}}function Gn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let h;l instanceof Gn?(this.l=l.l,Ms(this,l.j),this.o=l.o,this.g=l.g,Ls(this,l.u),this.h=l.h,_u(this,_m(l.i)),this.m=l.m):l&&(h=String(l).match(gm))?(this.l=!1,Ms(this,h[1]||"",!0),this.o=Os(h[2]||""),this.g=Os(h[3]||"",!0),Ls(this,h[4]),this.h=Os(h[5]||"",!0),_u(this,h[6]||"",!0),this.m=Os(h[7]||"")):(this.l=!1,this.i=new zs(null,this.l))}Gn.prototype.toString=function(){const l=[];var h=this.j;h&&l.push(Vs(h,ym,!0),":");var p=this.g;return(p||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Vs(h,ym,!0),"@"),l.push(Ns(p).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.u,p!=null&&l.push(":",String(p))),(p=this.h)&&(this.g&&p.charAt(0)!="/"&&l.push("/"),l.push(Vs(p,p.charAt(0)=="/"?C_:k_,!0))),(p=this.i.toString())&&l.push("?",p),(p=this.m)&&l.push("#",Vs(p,R_)),l.join("")},Gn.prototype.resolve=function(l){const h=sn(this);let p=!!l.j;p?Ms(h,l.j):p=!!l.o,p?h.o=l.o:p=!!l.g,p?h.g=l.g:p=l.u!=null;var x=l.h;if(p)Ls(h,l.u);else if(p=!!l.h){if(x.charAt(0)!="/")if(this.g&&!this.h)x="/"+x;else{var N=h.h.lastIndexOf("/");N!=-1&&(x=h.h.slice(0,N+1)+x)}if(N=x,N==".."||N==".")x="";else if(N.indexOf("./")!=-1||N.indexOf("/.")!=-1){x=N.lastIndexOf("/",0)==0,N=N.split("/");const D=[];for(let B=0;B<N.length;){const ee=N[B++];ee=="."?x&&B==N.length&&D.push(""):ee==".."?((D.length>1||D.length==1&&D[0]!="")&&D.pop(),x&&B==N.length&&D.push("")):(D.push(ee),x=!0)}x=D.join("/")}else x=N}return p?h.h=x:p=l.i.toString()!=="",p?_u(h,_m(l.i)):p=!!l.m,p&&(h.m=l.m),h};function sn(l){return new Gn(l)}function Ms(l,h,p){l.j=p?Os(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function Ls(l,h){if(h){if(h=Number(h),isNaN(h)||h<0)throw Error("Bad port number "+h);l.u=h}else l.u=null}function _u(l,h,p){h instanceof zs?(l.i=h,P_(l.i,l.l)):(p||(h=Vs(h,A_)),l.i=new zs(h,l.l))}function pe(l,h,p){l.i.set(h,p)}function Ra(l){return pe(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Os(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Vs(l,h,p){return typeof l=="string"?(l=encodeURI(l).replace(h,I_),p&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function I_(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var ym=/[#\/\?@]/g,k_=/[#\?:]/g,C_=/[#\?]/g,A_=/[#\?@]/g,R_=/#/g;function zs(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Hr(l){l.g||(l.g=new Map,l.h=0,l.i&&T_(l.i,function(h,p){l.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=zs.prototype,t.add=function(l,h){Hr(this),this.i=null,l=ki(this,l);let p=this.g.get(l);return p||this.g.set(l,p=[]),p.push(h),this.h+=1,this};function vm(l,h){Hr(l),h=ki(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function wm(l,h){return Hr(l),h=ki(l,h),l.g.has(h)}t.forEach=function(l,h){Hr(this),this.g.forEach(function(p,x){p.forEach(function(N){l.call(h,N,x,this)},this)},this)};function xm(l,h){Hr(l);let p=[];if(typeof h=="string")wm(l,h)&&(p=p.concat(l.g.get(ki(l,h))));else for(l=Array.from(l.g.values()),h=0;h<l.length;h++)p=p.concat(l[h]);return p}t.set=function(l,h){return Hr(this),this.i=null,l=ki(this,l),wm(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=xm(this,l),l.length>0?String(l[0]):h):h};function bm(l,h,p){vm(l,h),p.length>0&&(l.i=null,l.g.set(ki(l,h),S(p)),l.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(let x=0;x<h.length;x++){var p=h[x];const N=Ns(p);p=xm(this,p);for(let D=0;D<p.length;D++){let B=N;p[D]!==""&&(B+="="+Ns(p[D])),l.push(B)}}return this.i=l.join("&")};function _m(l){const h=new zs;return h.i=l.i,l.g&&(h.g=new Map(l.g),h.h=l.h),h}function ki(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function P_(l,h){h&&!l.j&&(Hr(l),l.i=null,l.g.forEach(function(p,x){const N=x.toLowerCase();x!=N&&(vm(this,x),bm(this,N,p))},l)),l.j=h}function j_(l,h){const p=new js;if(o.Image){const x=new Image;x.onload=f(Qn,p,"TestLoadImage: loaded",!0,h,x),x.onerror=f(Qn,p,"TestLoadImage: error",!1,h,x),x.onabort=f(Qn,p,"TestLoadImage: abort",!1,h,x),x.ontimeout=f(Qn,p,"TestLoadImage: timeout",!1,h,x),o.setTimeout(function(){x.ontimeout&&x.ontimeout()},1e4),x.src=l}else h(!1)}function N_(l,h){const p=new js,x=new AbortController,N=setTimeout(()=>{x.abort(),Qn(p,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:x.signal}).then(D=>{clearTimeout(N),D.ok?Qn(p,"TestPingServer: ok",!0,h):Qn(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(N),Qn(p,"TestPingServer: error",!1,h)})}function Qn(l,h,p,x,N){try{N&&(N.onload=null,N.onerror=null,N.onabort=null,N.ontimeout=null),x(p)}catch{}}function D_(){this.g=new g_}function Su(l){this.i=l.Sb||null,this.h=l.ab||!1}g(Su,Xp),Su.prototype.g=function(){return new Pa(this.i,this.h)};function Pa(l,h){Ye.call(this),this.H=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Pa,Ye),t=Pa.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=h,this.readyState=1,Bs(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const h={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(h.body=l),(this.H||o).fetch(new Request(this.D,h)).then(this.Pa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Fs(this)),this.readyState=0},t.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Bs(this)),this.g&&(this.readyState=3,Bs(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Sm(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Sm(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}t.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.B.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Fs(this):Bs(this),this.readyState==3&&Sm(this)}},t.Oa=function(l){this.g&&(this.response=this.responseText=l,Fs(this))},t.Na=function(l){this.g&&(this.response=l,Fs(this))},t.ga=function(){this.g&&Fs(this)};function Fs(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Bs(l)}t.setRequestHeader=function(l,h){this.A.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,l.push(p[0]+": "+p[1]),p=h.next();return l.join(`\r
`)};function Bs(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Pa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Em(l){let h="";return Y(l,function(p,x){h+=x,h+=":",h+=p,h+=`\r
`}),h}function Eu(l,h,p){e:{for(x in p){var x=!1;break e}x=!0}x||(p=Em(p),typeof l=="string"?p!=null&&Ns(p):pe(l,h,p))}function Te(l){Ye.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Te,Ye);var M_=/^https?$/i,L_=["POST","PUT"];t=Te.prototype,t.Fa=function(l){this.H=l},t.ea=function(l,h,p,x){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():sm.g(),this.g.onreadystatechange=m(d(this.Ca,this));try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(D){Tm(this,D);return}if(l=p||"",p=new Map(this.headers),x)if(Object.getPrototypeOf(x)===Object.prototype)for(var N in x)p.set(N,x[N]);else if(typeof x.keys=="function"&&typeof x.get=="function")for(const D of x.keys())p.set(D,x.get(D));else throw Error("Unknown input type for opt_headers: "+String(x));x=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),N=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(L_,h,void 0)>=0)||x||N||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,B]of p)this.g.setRequestHeader(D,B);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(D){Tm(this,D)}};function Tm(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.o=5,Im(l),ja(l)}function Im(l){l.A||(l.A=!0,st(l,"complete"),st(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,st(this,"complete"),st(this,"abort"),ja(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ja(this,!0)),Te.Z.N.call(this)},t.Ca=function(){this.u||(this.B||this.v||this.j?km(this):this.Xa())},t.Xa=function(){km(this)};function km(l){if(l.h&&typeof s<"u"){if(l.v&&Kn(l)==4)setTimeout(l.Ca.bind(l),0);else if(st(l,"readystatechange"),Kn(l)==4){l.h=!1;try{const D=l.ca();e:switch(D){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var x;if(x=D===0){let B=String(l.D).match(gm)[1]||null;!B&&o.self&&o.self.location&&(B=o.self.location.protocol.slice(0,-1)),x=!M_.test(B?B.toLowerCase():"")}p=x}if(p)st(l,"complete"),st(l,"success");else{l.o=6;try{var N=Kn(l)>2?l.g.statusText:""}catch{N=""}l.l=N+" ["+l.ca()+"]",Im(l)}}finally{ja(l)}}}}function ja(l,h){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const p=l.g;l.g=null,h||st(l,"ready");try{p.onreadystatechange=null}catch{}}}t.isActive=function(){return!!this.g};function Kn(l){return l.g?l.g.readyState:0}t.ca=function(){try{return Kn(this)>2?this.g.status:-1}catch{return-1}},t.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.La=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),m_(h)}};function Cm(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function O_(l){const h={};l=(l.g&&Kn(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let x=0;x<l.length;x++){if(_(l[x]))continue;var p=b_(l[x]);const N=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[N]||[];h[N]=D,D.push(p)}Z(h,function(x){return x.join(", ")})}t.ya=function(){return this.o},t.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $s(l,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[l]||h}function Am(l){this.za=0,this.i=[],this.j=new js,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$s("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$s("baseRetryDelayMs",5e3,l),this.Za=$s("retryDelaySeedMs",1e4,l),this.Ta=$s("forwardChannelMaxRetries",2,l),this.va=$s("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new dm(l&&l.concurrentRequestLimit),this.Ba=new D_,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}t=Am.prototype,t.ka=8,t.I=1,t.connect=function(l,h,p,x){ot(0),this.W=l,this.H=h||{},p&&x!==void 0&&(this.H.OSID=p,this.H.OAID=x),this.F=this.X,this.J=Vm(this,null,this.W),Da(this)};function Tu(l){if(Rm(l),l.I==3){var h=l.V++,p=sn(l.J);if(pe(p,"SID",l.M),pe(p,"RID",h),pe(p,"TYPE","terminate"),Us(l,p),h=new Hn(l,l.j,h),h.M=2,h.A=Ra(sn(p)),p=!1,o.navigator&&o.navigator.sendBeacon)try{p=o.navigator.sendBeacon(h.A.toString(),"")}catch{}!p&&o.Image&&(new Image().src=h.A,p=!0),p||(h.g=zm(h.j,null),h.g.ea(h.A)),h.F=Date.now(),Aa(h)}Om(l)}function Na(l){l.g&&(ku(l),l.g.cancel(),l.g=null)}function Rm(l){Na(l),l.v&&(o.clearTimeout(l.v),l.v=null),Ma(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Da(l){if(!hm(l.h)&&!l.m){l.m=!0;var h=l.Ea;L||y(),R||(L(),R=!0),w.add(h,l),l.D=0}}function V_(l,h){return fm(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=h.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Ps(d(l.Ea,l,h),Lm(l,l.D)),l.D++,!0)}t.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const N=new Hn(this,this.j,l);let D=this.o;if(this.U&&(D?(D=we(D),$r(D,this.U)):D=this.U),this.u!==null||this.R||(N.J=D,D=null),this.S)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var x=this.i[p];if("__data__"in x.map&&(x=x.map.__data__,typeof x=="string")){x=x.length;break t}x=void 0}if(x===void 0)break;if(h+=x,h>4096){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=jm(this,N,h),p=sn(this.J),pe(p,"RID",l),pe(p,"CVER",22),this.G&&pe(p,"X-HTTP-Session-Id",this.G),Us(this,p),D&&(this.R?h="headers="+Ns(Em(D))+"&"+h:this.u&&Eu(p,this.u,D)),bu(this.h,N),this.Ra&&pe(p,"TYPE","init"),this.S?(pe(p,"$req",h),pe(p,"SID","null"),N.U=!0,yu(N,p,null)):yu(N,p,h),this.I=2}}else this.I==3&&(l?Pm(this,l):this.i.length==0||hm(this.h)||Pm(this))};function Pm(l,h){var p;h?p=h.l:p=l.V++;const x=sn(l.J);pe(x,"SID",l.M),pe(x,"RID",p),pe(x,"AID",l.K),Us(l,x),l.u&&l.o&&Eu(x,l.u,l.o),p=new Hn(l,l.j,p,l.D+1),l.u===null&&(p.J=l.o),h&&(l.i=h.G.concat(l.i)),h=jm(l,p,1e3),p.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),bu(l.h,p),yu(p,x,h)}function Us(l,h){l.H&&Y(l.H,function(p,x){pe(h,x,p)}),l.l&&Y({},function(p,x){pe(h,x,p)})}function jm(l,h,p){p=Math.min(l.i.length,p);const x=l.l?d(l.l.Ka,l.l,l):null;e:{var N=l.i;let ee=-1;for(;;){const Le=["count="+p];ee==-1?p>0?(ee=N[0].g,Le.push("ofs="+ee)):ee=0:Le.push("ofs="+ee);let ue=!0;for(let Fe=0;Fe<p;Fe++){var D=N[Fe].g;const on=N[Fe].map;if(D-=ee,D<0)ee=Math.max(0,N[Fe].g-100),ue=!1;else try{D="req"+D+"_"||"";try{var B=on instanceof Map?on:Object.entries(on);for(const[Qr,Yn]of B){let Jn=Yn;c(Yn)&&(Jn=hu(Yn)),Le.push(D+Qr+"="+encodeURIComponent(Jn))}}catch(Qr){throw Le.push(D+"type="+encodeURIComponent("_badmap")),Qr}}catch{x&&x(on)}}if(ue){B=Le.join("&");break e}}B=void 0}return l=l.i.splice(0,p),h.G=l,B}function Nm(l){if(!l.g&&!l.v){l.Y=1;var h=l.Da;L||y(),R||(L(),R=!0),w.add(h,l),l.A=0}}function Iu(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Ps(d(l.Da,l),Lm(l,l.A)),l.A++,!0)}t.Da=function(){if(this.v=null,Dm(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Ps(d(this.Wa,this),l)}},t.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Na(this),Dm(this))};function ku(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Dm(l){l.g=new Hn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var h=sn(l.na);pe(h,"RID","rpc"),pe(h,"SID",l.M),pe(h,"AID",l.K),pe(h,"CI",l.F?"0":"1"),!l.F&&l.ia&&pe(h,"TO",l.ia),pe(h,"TYPE","xmlhttp"),Us(l,h),l.u&&l.o&&Eu(h,l.u,l.o),l.O&&(l.g.H=l.O);var p=l.g;l=l.ba,p.M=1,p.A=Ra(sn(h)),p.u=null,p.R=!0,lm(p,l)}t.Va=function(){this.C!=null&&(this.C=null,Na(this),Iu(this),ot(19))};function Ma(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Mm(l,h){var p=null;if(l.g==h){Ma(l),ku(l),l.g=null;var x=2}else if(xu(l.h,h))p=h.G,pm(l.h,h),x=1;else return;if(l.I!=0){if(h.o)if(x==1){p=h.u?h.u.length:0,h=Date.now()-h.F;var N=l.D;x=ka(),st(x,new rm(x,p)),Da(l)}else Nm(l);else if(N=h.m,N==3||N==0&&h.X>0||!(x==1&&V_(l,h)||x==2&&Iu(l)))switch(p&&p.length>0&&(h=l.h,h.i=h.i.concat(p)),N){case 1:Gr(l,5);break;case 4:Gr(l,10);break;case 3:Gr(l,6);break;default:Gr(l,2)}}}function Lm(l,h){let p=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(p*=2),p*h}function Gr(l,h){if(l.j.info("Error code "+h),h==2){var p=d(l.bb,l),x=l.Ua;const N=!x;x=new Gn(x||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ms(x,"https"),Ra(x),N?j_(x.toString(),p):N_(x.toString(),p)}else ot(2);l.I=0,l.l&&l.l.pa(h),Om(l),Rm(l)}t.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function Om(l){if(l.I=0,l.ja=[],l.l){const h=mm(l.h);(h.length!=0||l.i.length!=0)&&(C(l.ja,h),C(l.ja,l.i),l.h.i.length=0,S(l.i),l.i.length=0),l.l.oa()}}function Vm(l,h,p){var x=p instanceof Gn?sn(p):new Gn(p);if(x.g!="")h&&(x.g=h+"."+x.g),Ls(x,x.u);else{var N=o.location;x=N.protocol,h=h?h+"."+N.hostname:N.hostname,N=+N.port;const D=new Gn(null);x&&Ms(D,x),h&&(D.g=h),N&&Ls(D,N),p&&(D.h=p),x=D}return p=l.G,h=l.wa,p&&h&&pe(x,p,h),pe(x,"VER",l.ka),Us(l,x),x}function zm(l,h,p){if(h&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Aa&&!l.ma?new Te(new Su({ab:p})):new Te(l.ma),h.Fa(l.L),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Fm(){}t=Fm.prototype,t.ra=function(){},t.qa=function(){},t.pa=function(){},t.oa=function(){},t.isActive=function(){return!0},t.Ka=function(){};function La(){}La.prototype.g=function(l,h){return new wt(l,h)};function wt(l,h){Ye.call(this),this.g=new Am(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.sa&&(l?l["X-WebChannel-Client-Profile"]=h.sa:l={"X-WebChannel-Client-Profile":h.sa}),this.g.U=l,(l=h&&h.Qb)&&!_(l)&&(this.g.u=l),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!_(h)&&(this.g.G=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new Ci(this)}g(wt,Ye),wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},wt.prototype.close=function(){Tu(this.g)},wt.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var p={};p.__data__=l,l=p}else this.v&&(p={},p.__data__=hu(l),l=p);h.i.push(new E_(h.Ya++,l)),h.I==3&&Da(h)},wt.prototype.N=function(){this.g.l=null,delete this.j,Tu(this.g),delete this.g,wt.Z.N.call(this)};function Bm(l){fu.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const p in h){l=p;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}g(Bm,fu);function $m(){pu.call(this),this.status=1}g($m,pu);function Ci(l){this.g=l}g(Ci,Fm),Ci.prototype.ra=function(){st(this.g,"a")},Ci.prototype.qa=function(l){st(this.g,new Bm(l))},Ci.prototype.pa=function(l){st(this.g,new $m)},Ci.prototype.oa=function(){st(this.g,"b")},La.prototype.createWebChannel=La.prototype.g,wt.prototype.send=wt.prototype.o,wt.prototype.open=wt.prototype.m,wt.prototype.close=wt.prototype.close,ax=function(){return new La},ox=function(){return ka()},sx=Wr,xh={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ca.NO_ERROR=0,Ca.TIMEOUT=8,Ca.HTTP_ERROR=6,Tl=Ca,im.COMPLETE="complete",ix=im,Zp.EventType=As,As.OPEN="a",As.CLOSE="b",As.ERROR="c",As.MESSAGE="d",Ye.prototype.listen=Ye.prototype.J,lo=Zp,Te.prototype.listenOnce=Te.prototype.K,Te.prototype.getLastError=Te.prototype.Ha,Te.prototype.getLastErrorCode=Te.prototype.ya,Te.prototype.getStatus=Te.prototype.ca,Te.prototype.getResponseJson=Te.prototype.La,Te.prototype.getResponseText=Te.prototype.la,Te.prototype.send=Te.prototype.ea,Te.prototype.setWithCredentials=Te.prototype.Fa,rx=Te}).apply(typeof nl<"u"?nl:typeof self<"u"?self:typeof window<"u"?window:{});/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Ss="12.13.0";function KC(t){Ss=t}/**
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
 */const gi=new Fc("@firebase/firestore");function Ri(){return gi.logLevel}function U(t,...e){if(gi.logLevel<=se.DEBUG){const n=e.map(Yf);gi.debug(`Firestore (${Ss}): ${t}`,...n)}}function Fn(t,...e){if(gi.logLevel<=se.ERROR){const n=e.map(Yf);gi.error(`Firestore (${Ss}): ${t}`,...n)}}function yi(t,...e){if(gi.logLevel<=se.WARN){const n=e.map(Yf);gi.warn(`Firestore (${Ss}): ${t}`,...n)}}function Yf(t){if(typeof t=="string")return t;try{return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,lx(t,r,n)}function lx(t,e,n){let r=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Fn(r),new Error(r)}function le(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||lx(e,i,r)}function X(t,e){return t}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends rn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class br{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class cx{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class YC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(et.UNAUTHENTICATED))}shutdown(){}}class JC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class XC{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){le(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new br;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new br,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new br)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(le(typeof r.accessToken=="string",31837,{l:r}),new cx(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return le(e===null||typeof e=="string",2055,{h:e}),new et(e)}}class ZC{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class eA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ZC(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ry{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){le(this.o===void 0,3512);const r=s=>{s.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new Ry(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(le(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Ry(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class Jf{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=nA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function ne(t,e){return t<e?-1:t>e?1:0}function bh(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const i=t.charAt(r),s=e.charAt(r);if(i!==s)return cd(i)===cd(s)?ne(i,s):cd(i)?1:-1}return ne(t.length,e.length)}const rA=55296,iA=57343;function cd(t){const e=t.charCodeAt(0);return e>=rA&&e<=iA}function fs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
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
 */const Py="__name__";class cn{constructor(e,n,r){n===void 0?n=0:n>e.length&&Q(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&Q(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return cn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof cn?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=cn.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return ne(e.length,n.length)}static compareSegments(e,n){const r=cn.isNumericId(e),i=cn.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?cn.extractNumericId(e).compare(cn.extractNumericId(n)):bh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return xr.fromString(e.substring(4,e.length-2))}}class he extends cn{construct(e,n,r){return new he(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(V.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new he(n)}static emptyPath(){return new he([])}}const sA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class He extends cn{construct(e,n,r){return new He(e,n,r)}static isValidIdentifier(e){return sA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),He.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Py}static keyField(){return new He([Py])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new W(V.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new W(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(r+=c,i++):(s(),i++)}if(s(),o)throw new W(V.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new He(n)}static emptyPath(){return new He([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(he.fromString(e))}static fromName(e){return new H(he.fromString(e).popFirst(5))}static empty(){return new H(he.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&he.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return he.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new he(e.slice()))}}/**
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
 */function ux(t,e,n){if(!n)throw new W(V.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function oA(t,e,n,r){if(e===!0&&r===!0)throw new W(V.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function jy(t){if(!H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ny(t){if(H.isDocumentKey(t))throw new W(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function dx(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Wc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q(12329,{type:typeof t})}function Vt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new W(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Wc(t);throw new W(V.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */function Me(t,e){const n={typeString:t};return e&&(n.value=e),n}function va(t,e){if(!dx(t))throw new W(V.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const i=e[r].typeString,s="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(i&&typeof o!==i){n=`JSON field '${r}' must be a ${i}.`;break}if(s!==void 0&&o!==s.value){n=`Expected '${r}' field to equal '${s.value}'`;break}}if(n)throw new W(V.INVALID_ARGUMENT,n);return!0}/**
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
 */const Dy=-62135596800,My=1e6;class ge{static now(){return ge.fromMillis(Date.now())}static fromDate(e){return ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*My);return new ge(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new W(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Dy)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/My}_compareTo(e){return this.seconds===e.seconds?ne(this.nanoseconds,e.nanoseconds):ne(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ge._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(va(e,ge._jsonSchema))return new ge(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Dy;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ge._jsonSchemaVersion="firestore/timestamp/1.0",ge._jsonSchema={type:Me("string",ge._jsonSchemaVersion),seconds:Me("number"),nanoseconds:Me("number")};/**
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
 */class J{static fromTimestamp(e){return new J(e)}static min(){return new J(new ge(0,0))}static max(){return new J(new ge(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Yo=-1;function aA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=J.fromTimestamp(r===1e9?new ge(n+1,0):new ge(n,r));return new Ir(i,H.empty(),e)}function lA(t){return new Ir(t.readTime,t.key,Yo)}class Ir{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Ir(J.min(),H.empty(),Yo)}static max(){return new Ir(J.max(),H.empty(),Yo)}}function cA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ne(t.largestBatchId,e.largestBatchId))}/**
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
 */const uA="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Es(t){if(t.code!==V.FAILED_PRECONDITION||t.message!==uA)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new z((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof z?n:z.resolve(n)}catch(n){return z.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):z.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):z.reject(n)}static resolve(e){return new z((n,r)=>{n(e)})}static reject(e){return new z((n,r)=>{r(e)})}static waitFor(e){return new z((n,r)=>{let i=0,s=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=z.resolve(!1);for(const r of e)n=n.next(i=>i?z.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new z((r,i)=>{const s=e.length,o=new Array(s);let c=0;for(let u=0;u<s;u++){const d=u;n(e[d]).next(f=>{o[d]=f,++c,c===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new z((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function hA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ts(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class qc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>n.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}qc.ce=-1;/**
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
 */const Xf=-1;function Hc(t){return t==null}function hc(t){return t===0&&1/t==-1/0}function fA(t){return typeof t=="number"&&Number.isInteger(t)&&!hc(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const hx="";function pA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Ly(e)),e=mA(t.get(n),e);return Ly(e)}function mA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case hx:n+="";break;default:n+=s}}return n}function Ly(t){return t+hx+""}/**
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
 */function Oy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fx(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class be{constructor(e,n){this.comparator=e,this.root=n||qe.EMPTY}insert(e,n){return new be(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,qe.BLACK,null,null))}remove(e){return new be(this.comparator,this.root.remove(e,this.comparator).copy(null,null,qe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new rl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new rl(this.root,e,this.comparator,!1)}getReverseIterator(){return new rl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new rl(this.root,e,this.comparator,!0)}}class rl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class qe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??qe.RED,this.left=i??qe.EMPTY,this.right=s??qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new qe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return qe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Q(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Q(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Q(27949);return e+(this.isRed()?0:1)}}qe.EMPTY=null,qe.RED=!0,qe.BLACK=!1;qe.EMPTY=new class{constructor(){this.size=0}get key(){throw Q(57766)}get value(){throw Q(16141)}get color(){throw Q(16727)}get left(){throw Q(29726)}get right(){throw Q(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new qe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class ze{constructor(e){this.comparator=e,this.data=new be(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Vy(this.data.getIterator())}getIteratorFrom(e){return new Vy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ze(this.comparator);return n.data=e,n}}class Vy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class St{constructor(e){this.fields=e,e.sort(He.comparator)}static empty(){return new St([])}unionWith(e){let n=new ze(He.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new St(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return fs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class px extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Ke{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new px("Invalid base64 string: "+s):s}}(e);return new Ke(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ke(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ne(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ke.EMPTY_BYTE_STRING=new Ke("");const gA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function kr(t){if(le(!!t,39018),typeof t=="string"){let e=0;const n=gA.exec(t);if(le(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ae(t.seconds),nanos:Ae(t.nanos)}}function Ae(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cr(t){return typeof t=="string"?Ke.fromBase64String(t):Ke.fromUint8Array(t)}/**
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
 */const mx="server_timestamp",gx="__type__",yx="__previous_value__",vx="__local_write_time__";function Zf(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[gx])==null?void 0:r.stringValue)===mx}function Gc(t){const e=t.mapValue.fields[yx];return Zf(e)?Gc(e):e}function Jo(t){const e=kr(t.mapValue.fields[vx].timestampValue);return new ge(e.seconds,e.nanos)}/**
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
 */class yA{constructor(e,n,r,i,s,o,c,u,d,f,g){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=d,this.isUsingEmulator=f,this.apiKey=g}}const fc="(default)";class Xo{constructor(e,n){this.projectId=e,this.database=n||fc}static empty(){return new Xo("","")}get isDefaultDatabase(){return this.database===fc}isEqual(e){return e instanceof Xo&&e.projectId===this.projectId&&e.database===this.database}}function vA(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new W(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xo(t.options.projectId,e)}/**
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
 */const wx="__type__",wA="__max__",il={mapValue:{}},xx="__vector__",pc="value";function Ar(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Zf(t)?4:bA(t)?9007199254740991:xA(t)?10:11:Q(28295,{value:t})}function wn(t,e){if(t===e)return!0;const n=Ar(t);if(n!==Ar(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Jo(t).isEqual(Jo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=kr(i.timestampValue),c=kr(s.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cr(i.bytesValue).isEqual(Cr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return Ae(i.geoPointValue.latitude)===Ae(s.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Ae(i.integerValue)===Ae(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Ae(i.doubleValue),c=Ae(s.doubleValue);return o===c?hc(o)===hc(c):isNaN(o)&&isNaN(c)}return!1}(t,e);case 9:return fs(t.arrayValue.values||[],e.arrayValue.values||[],wn);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},c=s.mapValue.fields||{};if(Oy(o)!==Oy(c))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(c[u]===void 0||!wn(o[u],c[u])))return!1;return!0}(t,e);default:return Q(52216,{left:t})}}function Zo(t,e){return(t.values||[]).find(n=>wn(n,e))!==void 0}function ps(t,e){if(t===e)return 0;const n=Ar(t),r=Ar(e);if(n!==r)return ne(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ne(t.booleanValue,e.booleanValue);case 2:return function(s,o){const c=Ae(s.integerValue||s.doubleValue),u=Ae(o.integerValue||o.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(t,e);case 3:return zy(t.timestampValue,e.timestampValue);case 4:return zy(Jo(t),Jo(e));case 5:return bh(t.stringValue,e.stringValue);case 6:return function(s,o){const c=Cr(s),u=Cr(o);return c.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const c=s.split("/"),u=o.split("/");for(let d=0;d<c.length&&d<u.length;d++){const f=ne(c[d],u[d]);if(f!==0)return f}return ne(c.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const c=ne(Ae(s.latitude),Ae(o.latitude));return c!==0?c:ne(Ae(s.longitude),Ae(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Fy(t.arrayValue,e.arrayValue);case 10:return function(s,o){var m,S,C,j;const c=s.fields||{},u=o.fields||{},d=(m=c[pc])==null?void 0:m.arrayValue,f=(S=u[pc])==null?void 0:S.arrayValue,g=ne(((C=d==null?void 0:d.values)==null?void 0:C.length)||0,((j=f==null?void 0:f.values)==null?void 0:j.length)||0);return g!==0?g:Fy(d,f)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===il.mapValue&&o===il.mapValue)return 0;if(s===il.mapValue)return 1;if(o===il.mapValue)return-1;const c=s.fields||{},u=Object.keys(c),d=o.fields||{},f=Object.keys(d);u.sort(),f.sort();for(let g=0;g<u.length&&g<f.length;++g){const m=bh(u[g],f[g]);if(m!==0)return m;const S=ps(c[u[g]],d[f[g]]);if(S!==0)return S}return ne(u.length,f.length)}(t.mapValue,e.mapValue);default:throw Q(23264,{he:n})}}function zy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ne(t,e);const n=kr(t),r=kr(e),i=ne(n.seconds,r.seconds);return i!==0?i:ne(n.nanos,r.nanos)}function Fy(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=ps(n[i],r[i]);if(s)return s}return ne(n.length,r.length)}function ms(t){return _h(t)}function _h(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=kr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=_h(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${_h(n.fields[o])}`;return i+"}"}(t.mapValue):Q(61005,{value:t})}function Il(t){switch(Ar(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Gc(t);return e?16+Il(e):16;case 5:return 2*t.stringValue.length;case 6:return Cr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Il(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return Vr(r.fields,(s,o)=>{i+=s.length+Il(o)}),i}(t.mapValue);default:throw Q(13486,{value:t})}}function By(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Sh(t){return!!t&&"integerValue"in t}function ep(t){return!!t&&"arrayValue"in t}function $y(t){return!!t&&"nullValue"in t}function Uy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kl(t){return!!t&&"mapValue"in t}function xA(t){var n,r;return((r=(((n=t==null?void 0:t.mapValue)==null?void 0:n.fields)||{})[wx])==null?void 0:r.stringValue)===xx}function So(t){if(t.geoPointValue)return{geoPointValue:{...t.geoPointValue}};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:{...t.timestampValue}};if(t.mapValue){const e={mapValue:{fields:{}}};return Vr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=So(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=So(t.arrayValue.values[n]);return e}return{...t}}function bA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===wA}/**
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
 */class pt{constructor(e){this.value=e}static empty(){return new pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kl(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=So(n)}setAll(e){let n=He.emptyPath(),r={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=c.popLast()}o?r[c.lastSegment()]=So(o):i.push(c.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kl(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return wn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kl(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Vr(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new pt(So(this.value))}}function bx(t){const e=[];return Vr(t.fields,(n,r)=>{const i=new He([n]);if(kl(r)){const s=bx(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new St(e)}/**
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
 */class nt{constructor(e,n,r,i,s,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=c}static newInvalidDocument(e){return new nt(e,0,J.min(),J.min(),J.min(),pt.empty(),0)}static newFoundDocument(e,n,r,i){return new nt(e,1,n,J.min(),r,i,0)}static newNoDocument(e,n){return new nt(e,2,n,J.min(),J.min(),pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,J.min(),J.min(),pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class mc{constructor(e,n){this.position=e,this.inclusive=n}}function Wy(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ps(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function qy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!wn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ea{constructor(e,n="asc"){this.field=e,this.dir=n}}function _A(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class _x{}class De extends _x{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new EA(e,n,r):n==="array-contains"?new kA(e,r):n==="in"?new CA(e,r):n==="not-in"?new AA(e,r):n==="array-contains-any"?new RA(e,r):new De(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TA(e,r):new IA(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(ps(n,this.value)):n!==null&&Ar(this.value)===Ar(n)&&this.matchesComparison(ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class nn extends _x{constructor(e,n){super(),this.filters=e,this.op=n,this.Pe=null}static create(e,n){return new nn(e,n)}matches(e){return Sx(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Sx(t){return t.op==="and"}function Ex(t){return SA(t)&&Sx(t)}function SA(t){for(const e of t.filters)if(e instanceof nn)return!1;return!0}function Eh(t){if(t instanceof De)return t.field.canonicalString()+t.op.toString()+ms(t.value);if(Ex(t))return t.filters.map(e=>Eh(e)).join(",");{const e=t.filters.map(n=>Eh(n)).join(",");return`${t.op}(${e})`}}function Tx(t,e){return t instanceof De?function(r,i){return i instanceof De&&r.op===i.op&&r.field.isEqual(i.field)&&wn(r.value,i.value)}(t,e):t instanceof nn?function(r,i){return i instanceof nn&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,c)=>s&&Tx(o,i.filters[c]),!0):!1}(t,e):void Q(19439)}function Ix(t){return t instanceof De?function(n){return`${n.field.canonicalString()} ${n.op} ${ms(n.value)}`}(t):t instanceof nn?function(n){return n.op.toString()+" {"+n.getFilters().map(Ix).join(" ,")+"}"}(t):"Filter"}class EA extends De{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class TA extends De{constructor(e,n){super(e,"in",n),this.keys=kx("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class IA extends De{constructor(e,n){super(e,"not-in",n),this.keys=kx("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function kx(t,e){var n;return(((n=e.arrayValue)==null?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class kA extends De{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ep(n)&&Zo(n.arrayValue,this.value)}}class CA extends De{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zo(this.value.arrayValue,n)}}class AA extends De{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zo(this.value.arrayValue,n)}}class RA extends De{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ep(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Zo(this.value.arrayValue,r))}}/**
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
 */class PA{constructor(e,n=null,r=[],i=[],s=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=c,this.Te=null}}function Hy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new PA(t,e,n,r,i,s,o)}function tp(t){const e=X(t);if(e.Te===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Eh(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Hc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>ms(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>ms(r)).join(",")),e.Te=n}return e.Te}function np(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_A(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tx(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!qy(t.startAt,e.startAt)&&qy(t.endAt,e.endAt)}function Th(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Is{constructor(e,n=null,r=[],i=[],s=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function jA(t,e,n,r,i,s,o,c){return new Is(t,e,n,r,i,s,o,c)}function rp(t){return new Is(t)}function Gy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function NA(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function Cx(t){return t.collectionGroup!==null}function Eo(t){const e=X(t);if(e.Ie===null){e.Ie=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ie.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new ze(He.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(d=>{d.isInequality()&&(c=c.add(d.field))})}),c})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ie.push(new ea(s,r))}),n.has(He.keyField().canonicalString())||e.Ie.push(new ea(He.keyField(),r))}return e.Ie}function mn(t){const e=X(t);return e.Ee||(e.Ee=DA(e,Eo(t))),e.Ee}function DA(t,e){if(t.limitType==="F")return Hy(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new ea(i.field,s)});const n=t.endAt?new mc(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new mc(t.startAt.position,t.startAt.inclusive):null;return Hy(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ih(t,e){const n=t.filters.concat([e]);return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function MA(t,e){const n=t.explicitOrderBy.concat([e]);return new Is(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}function kh(t,e,n){return new Is(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Qc(t,e){return np(mn(t),mn(e))&&t.limitType===e.limitType}function Ax(t){return`${tp(mn(t))}|lt:${t.limitType}`}function Pi(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>Ix(i)).join(", ")}]`),Hc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>ms(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>ms(i)).join(",")),`Target(${r})`}(mn(t))}; limitType=${t.limitType})`}function Kc(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):H.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Eo(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,c,u){const d=Wy(o,c,u);return o.inclusive?d<=0:d<0}(r.startAt,Eo(r),i)||r.endAt&&!function(o,c,u){const d=Wy(o,c,u);return o.inclusive?d>=0:d>0}(r.endAt,Eo(r),i))}(t,e)}function LA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rx(t){return(e,n)=>{let r=!1;for(const i of Eo(t)){const s=OA(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function OA(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(s,o,c){const u=o.data.field(s),d=c.data.field(s);return u!==null&&d!==null?ps(u,d):Q(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Q(19790,{direction:t.dir})}}/**
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
 */class Ei{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Vr(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return fx(this.inner)}size(){return this.innerSize}}/**
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
 */const VA=new be(H.comparator);function Bn(){return VA}const Px=new be(H.comparator);function co(...t){let e=Px;for(const n of t)e=e.insert(n.key,n);return e}function jx(t){let e=Px;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ti(){return To()}function Nx(){return To()}function To(){return new Ei(t=>t.toString(),(t,e)=>t.isEqual(e))}const zA=new be(H.comparator),FA=new ze(H.comparator);function re(...t){let e=FA;for(const n of t)e=e.add(n);return e}const BA=new ze(ne);function $A(){return BA}/**
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
 */function ip(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:hc(e)?"-0":e}}function Dx(t){return{integerValue:""+t}}function Mx(t,e){return fA(e)?Dx(e):ip(t,e)}/**
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
 */class Yc{constructor(){this._=void 0}}function UA(t,e,n){return t instanceof ta?function(i,s){const o={fields:{[gx]:{stringValue:mx},[vx]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Zf(s)&&(s=Gc(s)),s&&(o.fields[yx]=s),{mapValue:o}}(n,e):t instanceof na?Ox(t,e):t instanceof ra?Vx(t,e):function(i,s){const o=Lx(i,s),c=Qy(o)+Qy(i.Ae);return Sh(o)&&Sh(i.Ae)?Dx(c):ip(i.serializer,c)}(t,e)}function WA(t,e,n){return t instanceof na?Ox(t,e):t instanceof ra?Vx(t,e):n}function Lx(t,e){return t instanceof ia?function(r){return Sh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class ta extends Yc{}class na extends Yc{constructor(e){super(),this.elements=e}}function Ox(t,e){const n=zx(e);for(const r of t.elements)n.some(i=>wn(i,r))||n.push(r);return{arrayValue:{values:n}}}class ra extends Yc{constructor(e){super(),this.elements=e}}function Vx(t,e){let n=zx(e);for(const r of t.elements)n=n.filter(i=>!wn(i,r));return{arrayValue:{values:n}}}class ia extends Yc{constructor(e,n){super(),this.serializer=e,this.Ae=n}}function Qy(t){return Ae(t.integerValue||t.doubleValue)}function zx(t){return ep(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class Fx{constructor(e,n){this.field=e,this.transform=n}}function qA(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof na&&i instanceof na||r instanceof ra&&i instanceof ra?fs(r.elements,i.elements,wn):r instanceof ia&&i instanceof ia?wn(r.Ae,i.Ae):r instanceof ta&&i instanceof ta}(t.transform,e.transform)}class HA{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Cl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jc{}function Bx(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new sp(t.key,zt.none()):new wa(t.key,t.data,zt.none());{const n=t.data,r=pt.empty();let i=new ze(He.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new zr(t.key,r,new St(i.toArray()),zt.none())}}function GA(t,e,n){t instanceof wa?function(i,s,o){const c=i.value.clone(),u=Yy(i.fieldTransforms,s,o.transformResults);c.setAll(u),s.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):t instanceof zr?function(i,s,o){if(!Cl(i.precondition,s))return void s.convertToUnknownDocument(o.version);const c=Yy(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll($x(i)),u.setAll(c),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Io(t,e,n,r){return t instanceof wa?function(s,o,c,u){if(!Cl(s.precondition,o))return c;const d=s.value.clone(),f=Jy(s.fieldTransforms,u,o);return d.setAll(f),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),null}(t,e,n,r):t instanceof zr?function(s,o,c,u){if(!Cl(s.precondition,o))return c;const d=Jy(s.fieldTransforms,u,o),f=o.data;return f.setAll($x(s)),f.setAll(d),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(g=>g.field))}(t,e,n,r):function(s,o,c){return Cl(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c}(t,e,n)}function QA(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=Lx(r.transform,i||null);s!=null&&(n===null&&(n=pt.empty()),n.set(r.field,s))}return n||null}function Ky(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&fs(r,i,(s,o)=>qA(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wa extends Jc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class zr extends Jc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function $x(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Yy(t,e,n){const r=new Map;le(t.length===n.length,32656,{Ve:n.length,de:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,c=e.data.field(s.field);r.set(s.field,WA(o,c,n[i]))}return r}function Jy(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,UA(s,o,e))}return r}class sp extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class KA extends Jc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class YA{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&GA(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Io(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Nx();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let c=this.applyToLocalView(o,s.mutatedFields);c=n.has(i.key)?null:c;const u=Bx(o,c);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(J.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&fs(this.mutations,e.mutations,(n,r)=>Ky(n,r))&&fs(this.baseMutations,e.baseMutations,(n,r)=>Ky(n,r))}}class op{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){le(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=function(){return zA}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new op(e,n,r,i)}}/**
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
 */class JA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class XA{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var je,oe;function ZA(t){switch(t){case V.OK:return Q(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return Q(15467,{code:t})}}function Ux(t){if(t===void 0)return Fn("GRPC error has no .code"),V.UNKNOWN;switch(t){case je.OK:return V.OK;case je.CANCELLED:return V.CANCELLED;case je.UNKNOWN:return V.UNKNOWN;case je.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case je.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case je.INTERNAL:return V.INTERNAL;case je.UNAVAILABLE:return V.UNAVAILABLE;case je.UNAUTHENTICATED:return V.UNAUTHENTICATED;case je.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case je.NOT_FOUND:return V.NOT_FOUND;case je.ALREADY_EXISTS:return V.ALREADY_EXISTS;case je.PERMISSION_DENIED:return V.PERMISSION_DENIED;case je.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case je.ABORTED:return V.ABORTED;case je.OUT_OF_RANGE:return V.OUT_OF_RANGE;case je.UNIMPLEMENTED:return V.UNIMPLEMENTED;case je.DATA_LOSS:return V.DATA_LOSS;default:return Q(39323,{code:t})}}(oe=je||(je={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function eR(){return new TextEncoder}/**
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
 */const tR=new xr([4294967295,4294967295],0);function Xy(t){const e=eR().encode(t),n=new nx;return n.update(e),new Uint8Array(n.digest())}function Zy(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new xr([n,r],0),new xr([i,s],0)]}class ap{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new uo(`Invalid padding: ${n}`);if(r<0)throw new uo(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new uo(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new uo(`Invalid padding when bitmap length is 0: ${n}`);this.ge=8*e.length-n,this.pe=xr.fromNumber(this.ge)}ye(e,n,r){let i=e.add(n.multiply(xr.fromNumber(r)));return i.compare(tR)===1&&(i=new xr([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const n=Xy(e),[r,i]=Zy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);if(!this.we(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new ap(s,i,n);return r.forEach(c=>o.insert(c)),o}insert(e){if(this.ge===0)return;const n=Xy(e),[r,i]=Zy(n);for(let s=0;s<this.hashCount;s++){const o=this.ye(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class uo extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class xa{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new xa(J.min(),i,new be(ne),Bn(),re())}}class ba{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ba(r,n,re(),re(),re())}}/**
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
 */class Al{constructor(e,n,r,i){this.be=e,this.removedTargetIds=n,this.key=r,this.De=i}}class Wx{constructor(e,n){this.targetId=e,this.Ce=n}}class qx{constructor(e,n,r=Ke.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class ev{constructor(){this.ve=0,this.Fe=tv(),this.Me=Ke.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=re(),n=re(),r=re();return this.Fe.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Q(38017,{changeType:s})}}),new ba(this.Me,this.xe,e,n,r)}Ke(){this.Oe=!1,this.Fe=tv()}qe(e,n){this.Oe=!0,this.Fe=this.Fe.insert(e,n)}Ue(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}$e(){this.ve+=1}We(){this.ve-=1,le(this.ve>=0,3241,{ve:this.ve})}Qe(){this.Oe=!0,this.xe=!0}}class nR{constructor(e){this.Ge=e,this.ze=new Map,this.je=Bn(),this.Je=sl(),this.He=sl(),this.Ze=new be(ne)}Xe(e){for(const n of e.be)e.De&&e.De.isFoundDocument()?this.Ye(n,e.De):this.et(n,e.key,e.De);for(const n of e.removedTargetIds)this.et(n,e.key,e.De)}tt(e){this.forEachTarget(e,n=>{const r=this.nt(n);switch(e.state){case 0:this.rt(n)&&r.Le(e.resumeToken);break;case 1:r.We(),r.Ne||r.Ke(),r.Le(e.resumeToken);break;case 2:r.We(),r.Ne||this.removeTarget(n);break;case 3:this.rt(n)&&(r.Qe(),r.Le(e.resumeToken));break;case 4:this.rt(n)&&(this.it(n),r.Le(e.resumeToken));break;default:Q(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ze.forEach((r,i)=>{this.rt(i)&&n(i)})}st(e){const n=e.targetId,r=e.Ce.count,i=this.ot(n);if(i){const s=i.target;if(Th(s))if(r===0){const o=new H(s.path);this.et(n,o,nt.newNoDocument(o,J.min()))}else le(r===1,20013,{expectedCount:r});else{const o=this._t(n);if(o!==r){const c=this.ut(e),u=c?this.ct(c,e,o):1;if(u!==0){this.it(n);const d=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,d)}}}}}ut(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,c;try{o=Cr(r).toUint8Array()}catch(u){if(u instanceof px)return yi("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new ap(o,i,s)}catch(u){return yi(u instanceof uo?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,n,r){return n.Ce.count===r-this.Pt(e,n.targetId)?0:2}Pt(e,n){const r=this.Ge.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.Ge.ht(),c=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(c)||(this.et(n,s,null),i++)}),i}Tt(e){const n=new Map;this.ze.forEach((s,o)=>{const c=this.ot(o);if(c){if(s.current&&Th(c.target)){const u=new H(c.target.path);this.It(u).has(o)||this.Et(o,u)||this.et(o,u,nt.newNoDocument(u,e))}s.Be&&(n.set(o,s.ke()),s.Ke())}});let r=re();this.He.forEach((s,o)=>{let c=!0;o.forEachWhile(u=>{const d=this.ot(u);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(s))}),this.je.forEach((s,o)=>o.setReadTime(e));const i=new xa(e,n,this.Ze,this.je,r);return this.je=Bn(),this.Je=sl(),this.He=sl(),this.Ze=new be(ne),i}Ye(e,n){if(!this.rt(e))return;const r=this.Et(e,n.key)?2:0;this.nt(e).qe(n.key,r),this.je=this.je.insert(n.key,n),this.Je=this.Je.insert(n.key,this.It(n.key).add(e)),this.He=this.He.insert(n.key,this.Rt(n.key).add(e))}et(e,n,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,n)?i.qe(n,1):i.Ue(n),this.He=this.He.insert(n,this.Rt(n).delete(e)),this.He=this.He.insert(n,this.Rt(n).add(e)),r&&(this.je=this.je.insert(n,r))}removeTarget(e){this.ze.delete(e)}_t(e){const n=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.nt(e).$e()}nt(e){let n=this.ze.get(e);return n||(n=new ev,this.ze.set(e,n)),n}Rt(e){let n=this.He.get(e);return n||(n=new ze(ne),this.He=this.He.insert(e,n)),n}It(e){let n=this.Je.get(e);return n||(n=new ze(ne),this.Je=this.Je.insert(e,n)),n}rt(e){const n=this.ot(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}ot(e){const n=this.ze.get(e);return n&&n.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new ev),this.Ge.getRemoteKeysForTarget(e).forEach(n=>{this.et(e,n,null)})}Et(e,n){return this.Ge.getRemoteKeysForTarget(e).has(n)}}function sl(){return new be(H.comparator)}function tv(){return new be(H.comparator)}const rR={asc:"ASCENDING",desc:"DESCENDING"},iR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},sR={and:"AND",or:"OR"};class oR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ch(t,e){return t.useProto3Json||Hc(e)?e:{value:e}}function gc(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Hx(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aR(t,e){return gc(t,e.toTimestamp())}function gn(t){return le(!!t,49232),J.fromTimestamp(function(n){const r=kr(n);return new ge(r.seconds,r.nanos)}(t))}function lp(t,e){return Ah(t,e).canonicalString()}function Ah(t,e){const n=function(i){return new he(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Gx(t){const e=he.fromString(t);return le(Xx(e),10190,{key:e.toString()}),e}function Rh(t,e){return lp(t.databaseId,e.path)}function ud(t,e){const n=Gx(e);if(n.get(1)!==t.databaseId.projectId)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new W(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(Kx(n))}function Qx(t,e){return lp(t.databaseId,e)}function lR(t){const e=Gx(t);return e.length===4?he.emptyPath():Kx(e)}function Ph(t){return new he(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Kx(t){return le(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function nv(t,e,n){return{name:Rh(t,e),fields:n.value.mapValue.fields}}function cR(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:Q(39313,{state:d})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(d,f){return d.useProto3Json?(le(f===void 0||typeof f=="string",58123),Ke.fromBase64String(f||"")):(le(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ke.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(d){const f=d.code===void 0?V.UNKNOWN:Ux(d.code);return new W(f,d.message||"")}(o);n=new qx(r,i,s,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=ud(t,r.document.name),s=gn(r.document.updateTime),o=r.document.createTime?gn(r.document.createTime):J.min(),c=new pt({mapValue:{fields:r.document.fields}}),u=nt.newFoundDocument(i,s,o,c),d=r.targetIds||[],f=r.removedTargetIds||[];n=new Al(d,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=ud(t,r.document),s=r.readTime?gn(r.readTime):J.min(),o=nt.newNoDocument(i,s),c=r.removedTargetIds||[];n=new Al([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=ud(t,r.document),s=r.removedTargetIds||[];n=new Al([],s,i,null)}else{if(!("filter"in e))return Q(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new XA(i,s),c=r.targetId;n=new Wx(c,o)}}return n}function uR(t,e){let n;if(e instanceof wa)n={update:nv(t,e.key,e.value)};else if(e instanceof sp)n={delete:Rh(t,e.key)};else if(e instanceof zr)n={update:nv(t,e.key,e.data),updateMask:wR(e.fieldMask)};else{if(!(e instanceof KA))return Q(16599,{dt:e.type});n={verify:Rh(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const c=o.transform;if(c instanceof ta)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof na)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ra)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ia)return{fieldPath:o.field.canonicalString(),increment:c.Ae};throw Q(20930,{transform:o.transform})}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:aR(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q(27497)}(t,e.precondition)),n}function dR(t,e){return t&&t.length>0?(le(e!==void 0,14353),t.map(n=>function(i,s){let o=i.updateTime?gn(i.updateTime):gn(s);return o.isEqual(J.min())&&(o=gn(s)),new HA(o,i.transformResults||[])}(n,e))):[]}function hR(t,e){return{documents:[Qx(t,e.path)]}}function fR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Qx(t,i);const s=function(d){if(d.length!==0)return Jx(nn.create(d,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(d){if(d.length!==0)return d.map(f=>function(m){return{field:ji(m.field),direction:gR(m.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Ch(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=function(d){return{before:d.inclusive,values:d.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(d){return{before:!d.inclusive,values:d.position}}(e.endAt)),{ft:n,parent:i}}function pR(t){let e=lR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){le(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(g){const m=Yx(g);return m instanceof nn&&Ex(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=function(g){return g.map(m=>function(C){return new ea(Ni(C.field),function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(C.direction))}(m))}(n.orderBy));let c=null;n.limit&&(c=function(g){let m;return m=typeof g=="object"?g.value:g,Hc(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(g){const m=!!g.before,S=g.values||[];return new mc(S,m)}(n.startAt));let d=null;return n.endAt&&(d=function(g){const m=!g.before,S=g.values||[];return new mc(S,m)}(n.endAt)),jA(e,i,o,s,c,"F",u,d)}function mR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Yx(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Ni(n.unaryFilter.field);return De.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Ni(n.unaryFilter.field);return De.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Ni(n.unaryFilter.field);return De.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Ni(n.unaryFilter.field);return De.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Q(61313);default:return Q(60726)}}(t):t.fieldFilter!==void 0?function(n){return De.create(Ni(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Q(58110);default:return Q(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return nn.create(n.compositeFilter.filters.map(r=>Yx(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return Q(1026)}}(n.compositeFilter.op))}(t):Q(30097,{filter:t})}function gR(t){return rR[t]}function yR(t){return iR[t]}function vR(t){return sR[t]}function ji(t){return{fieldPath:t.canonicalString()}}function Ni(t){return He.fromServerFormat(t.fieldPath)}function Jx(t){return t instanceof De?function(n){if(n.op==="=="){if(Uy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NAN"}};if($y(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Uy(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NAN"}};if($y(n.value))return{unaryFilter:{field:ji(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ji(n.field),op:yR(n.op),value:n.value}}}(t):t instanceof nn?function(n){const r=n.getFilters().map(i=>Jx(i));return r.length===1?r[0]:{compositeFilter:{op:vR(n.op),filters:r}}}(t):Q(54877,{filter:t})}function wR(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Xx(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}function Zx(t){return!!t&&typeof t._toProto=="function"&&t._protoValueType==="ProtoValue"}/**
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
 */class Cn{constructor(e,n,r,i,s=J.min(),o=J.min(),c=Ke.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Cn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class xR{constructor(e){this.yt=e}}function bR(t){const e=pR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kh(e,e.limit,"L"):e}/**
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
 */class _R{constructor(){this.bn=new SR}addToCollectionParentIndex(e,n){return this.bn.add(n),z.resolve()}getCollectionParents(e,n){return z.resolve(this.bn.getEntries(n))}addFieldIndex(e,n){return z.resolve()}deleteFieldIndex(e,n){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,n){return z.resolve()}getDocumentsMatchingTarget(e,n){return z.resolve(null)}getIndexType(e,n){return z.resolve(0)}getFieldIndexes(e,n){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,n){return z.resolve(Ir.min())}getMinOffsetFromCollectionGroup(e,n){return z.resolve(Ir.min())}updateCollectionGroup(e,n,r){return z.resolve()}updateIndexEntries(e,n){return z.resolve()}}class SR{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ze(he.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ze(he.comparator)).toArray()}}/**
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
 */const rv={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},eb=41943040;class ht{static withCacheSize(e){return new ht(e,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ht.DEFAULT_COLLECTION_PERCENTILE=10,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ht.DEFAULT=new ht(eb,ht.DEFAULT_COLLECTION_PERCENTILE,ht.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ht.DISABLED=new ht(-1,0,0);/**
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
 */class Rr{constructor(e){this.sr=e}next(){return this.sr+=2,this.sr}static _r(){return new Rr(0)}static ar(){return new Rr(-1)}}/**
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
 */const iv="LruGarbageCollector",ER=1048576;function sv([t,e],[n,r]){const i=ne(t,n);return i===0?ne(e,r):i}class TR{constructor(e){this.Pr=e,this.buffer=new ze(sv),this.Tr=0}Ir(){return++this.Tr}Er(e){const n=[e,this.Ir()];if(this.buffer.size<this.Pr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();sv(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class IR{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Ar(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Ar(e){U(iv,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ts(n)?U(iv,"Ignoring IndexedDB error during garbage collection: ",n):await Es(n)}await this.Ar(3e5)})}}class kR{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.dr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return z.resolve(qc.ce);const r=new TR(n);return this.Vr.forEachTarget(e,i=>r.Er(i.sequenceNumber)).next(()=>this.Vr.mr(e,i=>r.Er(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(U("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(rv)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(U("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rv):this.gr(e,n))}getCacheSize(e){return this.Vr.getCacheSize(e)}gr(e,n){let r,i,s,o,c,u,d;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(U("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),i=this.params.maximumSequenceNumbersToCollect):i=g,o=Date.now(),this.nthSequenceNumber(e,i))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,n))).next(g=>(s=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(d=Date.now(),Ri()<=se.DEBUG&&U("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(c-o)+`ms
	Removed ${s} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(d-u)+`ms
Total Duration: ${d-f}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:g})))}}function CR(t,e){return new kR(t,e)}/**
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
 */class AR{constructor(){this.changes=new Ei(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?z.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class RR{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class PR{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Io(r.mutation,i,St.empty(),ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=ti();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ti();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,r,i){let s=Bn();const o=To(),c=function(){return To()}();return n.forEach((u,d)=>{const f=r.get(d.key);i.has(d.key)&&(f===void 0||f.mutation instanceof zr)?s=s.insert(d.key,d):f!==void 0?(o.set(d.key,f.mutation.getFieldMask()),Io(f.mutation,d,f.mutation.getFieldMask(),ge.now())):o.set(d.key,St.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((d,f)=>o.set(d,f)),n.forEach((d,f)=>c.set(d,new RR(f,o.get(d)??null))),c))}recalculateAndSaveOverlays(e,n){const r=To();let i=new be((o,c)=>o-c),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const d=n.get(u);if(d===null)return;let f=r.get(u)||St.empty();f=c.applyToLocalView(d,f),r.set(u,f);const g=(i.get(c.batchId)||re()).add(u);i=i.insert(c.batchId,g)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),d=u.key,f=u.value,g=Nx();f.forEach(m=>{if(!s.has(m)){const S=Bx(n.get(m),r.get(m));S!==null&&g.set(m,S),s=s.add(m)}}),o.push(this.documentOverlayCache.saveOverlays(e,d,g))}return z.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return NA(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Cx(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):z.resolve(ti());let c=Yo,u=s;return o.next(d=>z.forEach(d,(f,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),s.get(f)?z.resolve():this.remoteDocumentCache.getEntry(e,f).next(m=>{u=u.insert(f,m)}))).next(()=>this.populateOverlays(e,d,s)).next(()=>this.computeViews(e,u,d,re())).next(f=>({batchId:c,changes:jx(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=co();return this.indexManager.getCollectionParents(e,s).next(c=>z.forEach(c,u=>{const d=function(g,m){return new Is(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,d,r,i).next(f=>{f.forEach((g,m)=>{o=o.insert(g,m)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,d)=>{const f=d.getKey();o.get(f)===null&&(o=o.insert(f,nt.newInvalidDocument(f)))});let c=co();return o.forEach((u,d)=>{const f=s.get(u);f!==void 0&&Io(f.mutation,d,St.empty(),ge.now()),Kc(n,d)&&(c=c.insert(u,d))}),c})}}/**
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
 */class jR{constructor(e){this.serializer=e,this.Nr=new Map,this.Br=new Map}getBundleMetadata(e,n){return z.resolve(this.Nr.get(n))}saveBundleMetadata(e,n){return this.Nr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:gn(i.createTime)}}(n)),z.resolve()}getNamedQuery(e,n){return z.resolve(this.Br.get(n))}saveNamedQuery(e,n){return this.Br.set(n.name,function(i){return{name:i.name,query:bR(i.bundledQuery),readTime:gn(i.readTime)}}(n)),z.resolve()}}/**
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
 */class NR{constructor(){this.overlays=new be(H.comparator),this.Lr=new Map}getOverlay(e,n){return z.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ti();return z.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),z.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Lr.delete(r)),z.resolve()}getOverlaysForCollection(e,n,r){const i=ti(),s=n.length+1,o=new H(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,d=u.getKey();if(!n.isPrefixOf(d.path))break;d.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return z.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new be((d,f)=>d-f);const o=this.overlays.getIterator();for(;o.hasNext();){const d=o.getNext().value;if(d.getKey().getCollectionGroup()===n&&d.largestBatchId>r){let f=s.get(d.largestBatchId);f===null&&(f=ti(),s=s.insert(d.largestBatchId,f)),f.set(d.getKey(),d)}}const c=ti(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((d,f)=>c.set(d,f)),!(c.size()>=i)););return z.resolve(c)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Lr.get(i.largestBatchId).delete(r.key);this.Lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new JA(n,r));let s=this.Lr.get(n);s===void 0&&(s=re(),this.Lr.set(n,s)),this.Lr.set(n,s.add(r.key))}}/**
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
 */class DR{constructor(){this.sessionToken=Ke.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,z.resolve()}}/**
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
 */class cp{constructor(){this.kr=new ze(Be.Kr),this.qr=new ze(Be.Ur)}isEmpty(){return this.kr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.kr=this.kr.add(r),this.qr=this.qr.add(r)}$r(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Wr(new Be(e,n))}Qr(e,n){e.forEach(r=>this.removeReference(r,n))}Gr(e){const n=new H(new he([])),r=new Be(n,e),i=new Be(n,e+1),s=[];return this.qr.forEachInRange([r,i],o=>{this.Wr(o),s.push(o.key)}),s}zr(){this.kr.forEach(e=>this.Wr(e))}Wr(e){this.kr=this.kr.delete(e),this.qr=this.qr.delete(e)}jr(e){const n=new H(new he([])),r=new Be(n,e),i=new Be(n,e+1);let s=re();return this.qr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Be(e,0),r=this.kr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.Jr=n}static Kr(e,n){return H.comparator(e.key,n.key)||ne(e.Jr,n.Jr)}static Ur(e,n){return ne(e.Jr,n.Jr)||H.comparator(e.key,n.key)}}/**
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
 */class MR{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.Yn=1,this.Hr=new ze(Be.Kr)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.Yn;this.Yn++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new YA(s,n,r,i);this.mutationQueue.push(o);for(const c of i)this.Hr=this.Hr.add(new Be(c.key,s)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return z.resolve(o)}lookupMutationBatch(e,n){return z.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.Xr(r),s=i<0?0:i;return z.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Xf:this.Yn-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),i=new Be(n,Number.POSITIVE_INFINITY),s=[];return this.Hr.forEachInRange([r,i],o=>{const c=this.Zr(o.Jr);s.push(c)}),z.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ze(ne);return n.forEach(i=>{const s=new Be(i,0),o=new Be(i,Number.POSITIVE_INFINITY);this.Hr.forEachInRange([s,o],c=>{r=r.add(c.Jr)})}),z.resolve(this.Yr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Be(new H(s),0);let c=new ze(ne);return this.Hr.forEachWhile(u=>{const d=u.key.path;return!!r.isPrefixOf(d)&&(d.length===i&&(c=c.add(u.Jr)),!0)},o),z.resolve(this.Yr(c))}Yr(e){const n=[];return e.forEach(r=>{const i=this.Zr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){le(this.ei(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Hr;return z.forEach(n.mutations,i=>{const s=new Be(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Hr=r})}nr(e){}containsKey(e,n){const r=new Be(n,0),i=this.Hr.firstAfterOrEqual(r);return z.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ei(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class LR{constructor(e){this.ti=e,this.docs=function(){return new be(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ti(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return z.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Bn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():nt.newInvalidDocument(i))}),z.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Bn();const o=n.path,c=new H(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:d,value:{document:f}}=u.getNext();if(!o.isPrefixOf(d.path))break;d.path.length>o.length+1||cA(lA(f),r)<=0||(i.has(f.key)||Kc(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return z.resolve(s)}getAllFromCollectionGroup(e,n,r,i){Q(9500)}ni(e,n){return z.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new OR(this)}getSize(e){return z.resolve(this.size)}}class OR extends AR{constructor(e){super(),this.Mr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Mr.addEntry(e,i)):this.Mr.removeEntry(r)}),z.waitFor(n)}getFromCache(e,n){return this.Mr.getEntry(e,n)}getAllFromCache(e,n){return this.Mr.getEntries(e,n)}}/**
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
 */class VR{constructor(e){this.persistence=e,this.ri=new Ei(n=>tp(n),np),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.ii=0,this.si=new cp,this.targetCount=0,this.oi=Rr._r()}forEachTarget(e,n){return this.ri.forEach((r,i)=>n(i)),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.ii)}allocateTargetId(e){return this.highestTargetId=this.oi.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.ii&&(this.ii=n),z.resolve()}lr(e){this.ri.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.oi=new Rr(n),this.highestTargetId=n),e.sequenceNumber>this.ii&&(this.ii=e.sequenceNumber)}addTargetData(e,n){return this.lr(n),this.targetCount+=1,z.resolve()}updateTargetData(e,n){return this.lr(n),z.resolve()}removeTargetData(e,n){return this.ri.delete(n.target),this.si.Gr(n.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.ri.forEach((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ri.delete(o),s.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),z.waitFor(s).next(()=>i)}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,n){const r=this.ri.get(n)||null;return z.resolve(r)}addMatchingKeys(e,n,r){return this.si.$r(n,r),z.resolve()}removeMatchingKeys(e,n,r){this.si.Qr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),z.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.si.Gr(n),z.resolve()}getMatchingKeysForTargetId(e,n){const r=this.si.jr(n);return z.resolve(r)}containsKey(e,n){return z.resolve(this.si.containsKey(n))}}/**
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
 */class tb{constructor(e,n){this._i={},this.overlays={},this.ai=new qc(0),this.ui=!1,this.ui=!0,this.ci=new DR,this.referenceDelegate=e(this),this.li=new VR(this),this.indexManager=new _R,this.remoteDocumentCache=function(i){return new LR(i)}(r=>this.referenceDelegate.hi(r)),this.serializer=new xR(n),this.Pi=new jR(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ui=!1,Promise.resolve()}get started(){return this.ui}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new NR,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this._i[e.toKey()];return r||(r=new MR(n,this.referenceDelegate),this._i[e.toKey()]=r),r}getGlobalsCache(){return this.ci}getTargetCache(){return this.li}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Pi}runTransaction(e,n,r){U("MemoryPersistence","Starting transaction:",e);const i=new zR(this.ai.next());return this.referenceDelegate.Ti(),r(i).next(s=>this.referenceDelegate.Ii(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ei(e,n){return z.or(Object.values(this._i).map(r=>()=>r.containsKey(e,n)))}}class zR extends dA{constructor(e){super(),this.currentSequenceNumber=e}}class up{constructor(e){this.persistence=e,this.Ri=new cp,this.Ai=null}static Vi(e){return new up(e)}get di(){if(this.Ai)return this.Ai;throw Q(60996)}addReference(e,n,r){return this.Ri.addReference(r,n),this.di.delete(r.toString()),z.resolve()}removeReference(e,n,r){return this.Ri.removeReference(r,n),this.di.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,n){return this.di.add(n.toString()),z.resolve()}removeTarget(e,n){this.Ri.Gr(n.targetId).forEach(i=>this.di.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.di.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Ti(){this.Ai=new Set}Ii(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.di,r=>{const i=H.fromPath(r);return this.mi(e,i).next(s=>{s||n.removeEntry(i,J.min())})}).next(()=>(this.Ai=null,n.apply(e)))}updateLimboDocument(e,n){return this.mi(e,n).next(r=>{r?this.di.delete(n.toString()):this.di.add(n.toString())})}hi(e){return 0}mi(e,n){return z.or([()=>z.resolve(this.Ri.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class yc{constructor(e,n){this.persistence=e,this.fi=new Ei(r=>pA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=CR(this,n)}static Vi(e,n){return new yc(e,n)}Ti(){}Ii(e){return z.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}dr(e){const n=this.pr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}pr(e){let n=0;return this.mr(e,r=>{n++}).next(()=>n)}mr(e,n){return z.forEach(this.fi,(r,i)=>this.wr(e,r,i).next(s=>s?z.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.ni(e,o=>this.wr(e,o,n).next(c=>{c||(r++,s.removeEntry(o,J.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.fi.set(n,e.currentSequenceNumber),z.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,n,r){return this.fi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,n){return this.fi.set(n,e.currentSequenceNumber),z.resolve()}hi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Il(e.data.value)),n}wr(e,n,r){return z.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.fi.get(n);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class dp{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Ts=r,this.Is=i}static Es(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new dp(e,n.fromCache,r,i)}}/**
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
 */class FR{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class BR{constructor(){this.Rs=!1,this.As=!1,this.Vs=100,this.ds=function(){return dT()?8:hA(it())>0?6:4}()}initialize(e,n){this.fs=e,this.indexManager=n,this.Rs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.gs(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ps(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new FR;return this.ys(e,n,o).next(c=>{if(s.result=c,this.As)return this.ws(e,n,o,c.size)})}).next(()=>s.result)}ws(e,n,r,i){return r.documentReadCount<this.Vs?(Ri()<=se.DEBUG&&U("QueryEngine","SDK will not create cache indexes for query:",Pi(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),z.resolve()):(Ri()<=se.DEBUG&&U("QueryEngine","Query:",Pi(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ds*i?(Ri()<=se.DEBUG&&U("QueryEngine","The SDK decides to create cache indexes for query:",Pi(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,mn(n))):z.resolve())}gs(e,n){if(Gy(n))return z.resolve(null);let r=mn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kh(n,null,"F"),r=mn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.fs.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const d=this.Ss(n,c);return this.bs(n,d,o,u.readTime)?this.gs(e,kh(n,null,"F")):this.Ds(e,d,n,u)}))})))}ps(e,n,r,i){return Gy(n)||i.isEqual(J.min())?z.resolve(null):this.fs.getDocuments(e,r).next(s=>{const o=this.Ss(n,s);return this.bs(n,o,r,i)?z.resolve(null):(Ri()<=se.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Pi(n)),this.Ds(e,o,n,aA(i,Yo)).next(c=>c))})}Ss(e,n){let r=new ze(Rx(e));return n.forEach((i,s)=>{Kc(e,s)&&(r=r.add(s))}),r}bs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}ys(e,n,r){return Ri()<=se.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",Pi(n)),this.fs.getDocumentsMatchingQuery(e,n,Ir.min(),r)}Ds(e,n,r,i){return this.fs.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
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
 */const hp="LocalStore",$R=3e8;class UR{constructor(e,n,r,i){this.persistence=e,this.Cs=n,this.serializer=i,this.vs=new be(ne),this.Fs=new Ei(s=>tp(s),np),this.Ms=new Map,this.xs=e.getRemoteDocumentCache(),this.li=e.getTargetCache(),this.Pi=e.getBundleCache(),this.Os(r)}Os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new PR(this.xs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.xs.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.vs))}}function WR(t,e,n,r){return new UR(t,e,n,r)}async function nb(t,e){const n=X(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Os(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],c=[];let u=re();for(const d of i){o.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}for(const d of s){c.push(d.batchId);for(const f of d.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(d=>({Ns:d,removedBatchIds:o,addedBatchIds:c}))})})}function qR(t,e){const n=X(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.xs.newChangeBuffer({trackRemovals:!0});return function(c,u,d,f){const g=d.batch,m=g.keys();let S=z.resolve();return m.forEach(C=>{S=S.next(()=>f.getEntry(u,C)).next(j=>{const O=d.docVersions.get(C);le(O!==null,48541),j.version.compareTo(O)<0&&(g.applyToRemoteDocument(j,d),j.isValidDocument()&&(j.setReadTime(d.commitVersion),f.addEntry(j)))})}),S.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=re();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(u=u.add(c.batch.mutations[d].key));return u}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function rb(t){const e=X(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.li.getLastRemoteSnapshotVersion(n))}function HR(t,e){const n=X(t),r=e.snapshotVersion;let i=n.vs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.xs.newChangeBuffer({trackRemovals:!0});i=n.vs;const c=[];e.targetChanges.forEach((f,g)=>{const m=i.get(g);if(!m)return;c.push(n.li.removeMatchingKeys(s,f.removedDocuments,g).next(()=>n.li.addMatchingKeys(s,f.addedDocuments,g)));let S=m.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Ke.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):f.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(f.resumeToken,r)),i=i.insert(g,S),function(j,O,E){return j.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-j.snapshotVersion.toMicroseconds()>=$R?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(m,S,f)&&c.push(n.li.updateTargetData(s,S))});let u=Bn(),d=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),c.push(GR(s,o,e.documentUpdates).next(f=>{u=f.Bs,d=f.Ls})),!r.isEqual(J.min())){const f=n.li.getLastRemoteSnapshotVersion(s).next(g=>n.li.setTargetsMetadata(s,s.currentSequenceNumber,r));c.push(f)}return z.waitFor(c).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,d)).next(()=>u)}).then(s=>(n.vs=i,s))}function GR(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Bn();return n.forEach((c,u)=>{const d=s.get(c);u.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(J.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!d.isValidDocument()||u.version.compareTo(d.version)>0||u.version.compareTo(d.version)===0&&d.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):U(hp,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",u.version)}),{Bs:o,Ls:i}})}function QR(t,e){const n=X(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Xf),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function KR(t,e){const n=X(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.li.getTargetData(r,e).next(s=>s?(i=s,z.resolve(i)):n.li.allocateTargetId(r).next(o=>(i=new Cn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.li.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.vs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.vs=n.vs.insert(r.targetId,r),n.Fs.set(e,r.targetId)),r})}async function jh(t,e,n){const r=X(t),i=r.vs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ts(o))throw o;U(hp,`Failed to update sequence numbers for target ${e}: ${o}`)}r.vs=r.vs.remove(e),r.Fs.delete(i.target)}function ov(t,e,n){const r=X(t);let i=J.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,d,f){const g=X(u),m=g.Fs.get(f);return m!==void 0?z.resolve(g.vs.get(m)):g.li.getTargetData(d,f)}(r,o,mn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,r.li.getMatchingKeysForTargetId(o,c.targetId).next(u=>{s=u})}).next(()=>r.Cs.getDocumentsMatchingQuery(o,e,n?i:J.min(),n?s:re())).next(c=>(YR(r,LA(e),c),{documents:c,ks:s})))}function YR(t,e,n){let r=t.Ms.get(e)||J.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ms.set(e,r)}class av{constructor(){this.activeTargetIds=$A()}Qs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Gs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class JR{constructor(){this.vo=new av,this.Fo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.vo.Qs(e),this.Fo[e]||"not-current"}updateQueryState(e,n,r){this.Fo[e]=n}removeLocalQueryTarget(e){this.vo.Gs(e)}isLocalQueryTarget(e){return this.vo.activeTargetIds.has(e)}clearQueryState(e){delete this.Fo[e]}getAllActiveQueryTargets(){return this.vo.activeTargetIds}isActiveQueryTarget(e){return this.vo.activeTargetIds.has(e)}start(){return this.vo=new av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class XR{Mo(e){}shutdown(){}}/**
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
 */const lv="ConnectivityMonitor";class cv{constructor(){this.xo=()=>this.Oo(),this.No=()=>this.Bo(),this.Lo=[],this.ko()}Mo(e){this.Lo.push(e)}shutdown(){window.removeEventListener("online",this.xo),window.removeEventListener("offline",this.No)}ko(){window.addEventListener("online",this.xo),window.addEventListener("offline",this.No)}Oo(){U(lv,"Network connectivity changed: AVAILABLE");for(const e of this.Lo)e(0)}Bo(){U(lv,"Network connectivity changed: UNAVAILABLE");for(const e of this.Lo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ol=null;function Nh(){return ol===null?ol=function(){return 268435456+Math.round(2147483648*Math.random())}():ol++,"0x"+ol.toString(16)}/**
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
 */const dd="RestConnection",ZR={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class eP{get Ko(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.qo=n+"://"+e.host,this.Uo=`projects/${r}/databases/${i}`,this.$o=this.databaseId.database===fc?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Wo(e,n,r,i,s){const o=Nh(),c=this.Qo(e,n.toUriEncodedString());U(dd,`Sending RPC '${e}' ${o}:`,c,r);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.$o};this.Go(u,i,s);const{host:d}=new URL(c),f=fa(d);return this.zo(e,c,u,r,f).then(g=>(U(dd,`Received RPC '${e}' ${o}: `,g),g),g=>{throw yi(dd,`RPC '${e}' ${o} failed with error: `,g,"url: ",c,"request:",r),g})}jo(e,n,r,i,s,o){return this.Wo(e,n,r,i,s)}Go(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Qo(e,n){const r=ZR[e];let i=`${this.qo}/v1/${n}:${r}`;return this.databaseInfo.apiKey&&(i=`${i}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),i}terminate(){}}/**
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
 */class tP{constructor(e){this.Jo=e.Jo,this.Ho=e.Ho}Zo(e){this.Xo=e}Yo(e){this.e_=e}t_(e){this.n_=e}onMessage(e){this.r_=e}close(){this.Ho()}send(e){this.Jo(e)}i_(){this.Xo()}s_(){this.e_()}o_(e){this.n_(e)}__(e){this.r_(e)}}/**
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
 */const Ze="WebChannelConnection",Xs=(t,e,n)=>{t.listen(e,r=>{try{n(r)}catch(i){setTimeout(()=>{throw i},0)}})};class ns extends eP{constructor(e){super(e),this.a_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static u_(){if(!ns.c_){const e=ox();Xs(e,sx.STAT_EVENT,n=>{n.stat===xh.PROXY?U(Ze,"STAT_EVENT: detected buffering proxy"):n.stat===xh.NOPROXY&&U(Ze,"STAT_EVENT: detected no buffering proxy")}),ns.c_=!0}}zo(e,n,r,i,s){const o=Nh();return new Promise((c,u)=>{const d=new rx;d.setWithCredentials(!0),d.listenOnce(ix.COMPLETE,()=>{try{switch(d.getLastErrorCode()){case Tl.NO_ERROR:const g=d.getResponseJson();U(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(g)),c(g);break;case Tl.TIMEOUT:U(Ze,`RPC '${e}' ${o} timed out`),u(new W(V.DEADLINE_EXCEEDED,"Request time out"));break;case Tl.HTTP_ERROR:const m=d.getStatus();if(U(Ze,`RPC '${e}' ${o} failed with status:`,m,"response text:",d.getResponseText()),m>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const C=S==null?void 0:S.error;if(C&&C.status&&C.message){const j=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(v)>=0?v:V.UNKNOWN}(C.status);u(new W(j,C.message))}else u(new W(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else u(new W(V.UNAVAILABLE,"Connection failed."));break;default:Q(9055,{l_:e,streamId:o,h_:d.getLastErrorCode(),P_:d.getLastError()})}}finally{U(Ze,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);U(Ze,`RPC '${e}' ${o} sending request:`,i),d.send(n,"POST",f,r,15)})}T_(e,n,r){const i=Nh(),s=[this.qo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(c.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Go(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const d=s.join("");U(Ze,`Creating RPC '${e}' stream ${i}: ${d}`,c);const f=o.createWebChannel(d,c);this.I_(f);let g=!1,m=!1;const S=new tP({Jo:C=>{m?U(Ze,`Not sending because RPC '${e}' stream ${i} is closed:`,C):(g||(U(Ze,`Opening RPC '${e}' stream ${i} transport.`),f.open(),g=!0),U(Ze,`RPC '${e}' stream ${i} sending:`,C),f.send(C))},Ho:()=>f.close()});return Xs(f,lo.EventType.OPEN,()=>{m||(U(Ze,`RPC '${e}' stream ${i} transport opened.`),S.i_())}),Xs(f,lo.EventType.CLOSE,()=>{m||(m=!0,U(Ze,`RPC '${e}' stream ${i} transport closed`),S.o_(),this.E_(f))}),Xs(f,lo.EventType.ERROR,C=>{m||(m=!0,yi(Ze,`RPC '${e}' stream ${i} transport errored. Name:`,C.name,"Message:",C.message),S.o_(new W(V.UNAVAILABLE,"The operation could not be completed")))}),Xs(f,lo.EventType.MESSAGE,C=>{var j;if(!m){const O=C.data[0];le(!!O,16349);const E=O,v=(E==null?void 0:E.error)||((j=E[0])==null?void 0:j.error);if(v){U(Ze,`RPC '${e}' stream ${i} received error:`,v);const b=v.status;let P=function(w){const y=je[w];if(y!==void 0)return Ux(y)}(b),L=v.message;b==="NOT_FOUND"&&L.includes("database")&&L.includes("does not exist")&&L.includes(this.databaseId.database)&&yi(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),P===void 0&&(P=V.INTERNAL,L="Unknown error status: "+b+" with message "+v.message),m=!0,S.o_(new W(P,L)),f.close()}else U(Ze,`RPC '${e}' stream ${i} received:`,O),S.__(O)}}),ns.u_(),setTimeout(()=>{S.s_()},0),S}terminate(){this.a_.forEach(e=>e.close()),this.a_=[]}I_(e){this.a_.push(e)}E_(e){this.a_=this.a_.filter(n=>n===e)}Go(e,n,r){super.Go(e,n,r),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return ax()}}/**
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
 */function nP(t){return new ns(t)}function hd(){return typeof document<"u"?document:null}/**
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
 */function Xc(t){return new oR(t,!0)}/**
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
 */ns.c_=!1;class ib{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Ci=e,this.timerId=n,this.R_=r,this.A_=i,this.V_=s,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const n=Math.floor(this.d_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,n-r);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,i,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
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
 */const uv="PersistentStream";class sb{constructor(e,n,r,i,s,o,c,u){this.Ci=e,this.S_=r,this.b_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ib(e,n)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Ci.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}K_(e){this.q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():n&&n.code===V.RESOURCE_EXHAUSTED?(Fn(n.toString()),Fn("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):n&&n.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.t_(n)}W_(){}auth(){this.state=1;const e=this.Q_(this.D_),n=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.D_===n&&this.G_(r,i)},r=>{e(()=>{const i=new W(V.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)})})}G_(e,n){const r=this.Q_(this.D_);this.stream=this.j_(e,n),this.stream.Zo(()=>{r(()=>this.listener.Zo())}),this.stream.Yo(()=>{r(()=>(this.state=2,this.v_=this.Ci.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.Yo()))}),this.stream.t_(i=>{r(()=>this.z_(i))}),this.stream.onMessage(i=>{r(()=>++this.F_==1?this.J_(i):this.onNext(i))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return U(uv,`close with error: ${e}`),this.stream=null,this.close(4,e)}Q_(e){return n=>{this.Ci.enqueueAndForget(()=>this.D_===e?n():(U(uv,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class rP extends sb{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}j_(e,n){return this.connection.T_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const n=cR(this.serializer,e),r=function(s){if(!("targetChange"in s))return J.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?J.min():o.readTime?gn(o.readTime):J.min()}(e);return this.listener.H_(n,r)}Z_(e){const n={};n.database=Ph(this.serializer),n.addTarget=function(s,o){let c;const u=o.target;if(c=Th(u)?{documents:hR(s,u)}:{query:fR(s,u).ft},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=Hx(s,o.resumeToken);const d=Ch(s,o.expectedCount);d!==null&&(c.expectedCount=d)}else if(o.snapshotVersion.compareTo(J.min())>0){c.readTime=gc(s,o.snapshotVersion.toTimestamp());const d=Ch(s,o.expectedCount);d!==null&&(c.expectedCount=d)}return c}(this.serializer,e);const r=mR(this.serializer,e);r&&(n.labels=r),this.K_(n)}X_(e){const n={};n.database=Ph(this.serializer),n.removeTarget=e,this.K_(n)}}class iP extends sb{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}get Y_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}W_(){this.Y_&&this.ea([])}j_(e,n){return this.connection.T_("Write",e,n)}J_(e){return le(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,le(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){le(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const n=dR(e.writeResults,e.commitTime),r=gn(e.commitTime);return this.listener.na(r,n)}ra(){const e={};e.database=Ph(this.serializer),this.K_(e)}ea(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>uR(this.serializer,r))};this.K_(n)}}/**
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
 */class sP{}class oP extends sP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Wo(e,Ah(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new W(V.UNKNOWN,s.toString())})}jo(e,n,r,i,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,c])=>this.connection.jo(e,Ah(n,r),i,o,c,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new W(V.UNKNOWN,o.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}function aP(t,e,n,r){return new oP(t,e,n,r)}class lP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(Fn(n),this.aa=!1):U("OnlineStateTracker",n)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const xn="RemoteStore";class cP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Map,this.Ra=new Map,this.Aa=new Rr(1e3),this.Va=new Rr(1001),this.da=new Set,this.ma=[],this.fa=s,this.fa.Mo(o=>{r.enqueueAndForget(async()=>{Ti(this)&&(U(xn,"Restarting streams for network reachability change."),await async function(u){const d=X(u);d.da.add(4),await _a(d),d.ga.set("Unknown"),d.da.delete(4),await Zc(d)}(this))})}),this.ga=new lP(r,i)}}async function Zc(t){if(Ti(t))for(const e of t.ma)await e(!0)}async function _a(t){for(const e of t.ma)await e(!1)}function Dh(t,e){return t.Ea.get(e)||void 0}function ob(t,e){const n=X(t),r=Dh(n,e.targetId);if(r!==void 0&&n.Ia.has(r))return;const i=function(c,u){const d=Dh(c,u);d!==void 0&&c.Ra.delete(d);const f=function(m,S){return S%2!=0?m.Va.next():m.Aa.next()}(c,u);return c.Ea.set(u,f),c.Ra.set(f,u),f}(n,e.targetId);U(xn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,i);const s=new Cn(e.target,i,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);n.Ia.set(i,s),gp(n)?mp(n):ks(n).O_()&&pp(n,s)}function fp(t,e){const n=X(t),r=ks(n),i=Dh(n,e);U(xn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,i),n.Ia.delete(i),n.Ea.delete(e),n.Ra.delete(i),r.O_()&&ab(n,i),n.Ia.size===0&&(r.O_()?r.L_():Ti(n)&&n.ga.set("Unknown"))}function pp(t,e){if(t.pa.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(J.min())>0){const n=t.Ra.get(e.targetId);if(n===void 0)return void U(xn,"SDK target ID not found for remote ID: "+e.targetId);const r=t.remoteSyncer.getRemoteKeysForTarget(n).size;e=e.withExpectedCount(r)}ks(t).Z_(e)}function ab(t,e){t.pa.$e(e),ks(t).X_(e)}function mp(t){t.pa=new nR({getRemoteKeysForTarget:e=>{const n=t.Ra.get(e);return n!==void 0?t.remoteSyncer.getRemoteKeysForTarget(n):re()},At:e=>t.Ia.get(e)||null,ht:()=>t.datastore.serializer.databaseId}),ks(t).start(),t.ga.ua()}function gp(t){return Ti(t)&&!ks(t).x_()&&t.Ia.size>0}function Ti(t){return X(t).da.size===0}function lb(t){t.pa=void 0}async function uP(t){t.ga.set("Online")}async function dP(t){t.Ia.forEach((e,n)=>{pp(t,e)})}async function hP(t,e){lb(t),gp(t)?(t.ga.ha(e),mp(t)):t.ga.set("Unknown")}async function fP(t,e,n){if(t.ga.set("Online"),e instanceof qx&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const c of s.targetIds){if(i.Ia.has(c)){const u=i.Ra.get(c);u!==void 0&&(await i.remoteSyncer.rejectListen(u,o),i.Ea.delete(u),i.Ra.delete(c)),i.Ia.delete(c)}i.pa.removeTarget(c)}}(t,e)}catch(r){U(xn,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await vc(t,r)}else if(e instanceof Al?t.pa.Xe(e):e instanceof Wx?t.pa.st(e):t.pa.tt(e),!n.isEqual(J.min()))try{const r=await rb(t.localStore);n.compareTo(r)>=0&&await function(s,o){const c=s.pa.Tt(o);c.targetChanges.forEach((d,f)=>{if(d.resumeToken.approximateByteSize()>0){const g=s.Ia.get(f);g&&s.Ia.set(f,g.withResumeToken(d.resumeToken,o))}}),c.targetMismatches.forEach((d,f)=>{const g=s.Ia.get(d);if(!g)return;s.Ia.set(d,g.withResumeToken(Ke.EMPTY_BYTE_STRING,g.snapshotVersion)),ab(s,d);const m=new Cn(g.target,d,f,g.sequenceNumber);pp(s,m)});const u=function(f,g){const m=new Map;g.targetChanges.forEach((C,j)=>{const O=f.Ra.get(j);O!==void 0&&m.set(O,C)});let S=new be(ne);return g.targetMismatches.forEach((C,j)=>{const O=f.Ra.get(C);O!==void 0&&(S=S.insert(O,j))}),new xa(g.snapshotVersion,m,S,g.documentUpdates,g.resolvedLimboDocuments)}(s,c);return s.remoteSyncer.applyRemoteEvent(u)}(t,n)}catch(r){U(xn,"Failed to raise snapshot:",r),await vc(t,r)}}async function vc(t,e,n){if(!Ts(e))throw e;t.da.add(1),await _a(t),t.ga.set("Offline"),n||(n=()=>rb(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U(xn,"Retrying IndexedDB access"),await n(),t.da.delete(1),await Zc(t)})}function cb(t,e){return e().catch(n=>vc(t,n,e))}async function eu(t){const e=X(t),n=Pr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Xf;for(;pP(e);)try{const i=await QR(e.localStore,r);if(i===null){e.Ta.length===0&&n.L_();break}r=i.batchId,mP(e,i)}catch(i){await vc(e,i)}ub(e)&&db(e)}function pP(t){return Ti(t)&&t.Ta.length<10}function mP(t,e){t.Ta.push(e);const n=Pr(t);n.O_()&&n.Y_&&n.ea(e.mutations)}function ub(t){return Ti(t)&&!Pr(t).x_()&&t.Ta.length>0}function db(t){Pr(t).start()}async function gP(t){Pr(t).ra()}async function yP(t){const e=Pr(t);for(const n of t.Ta)e.ea(n.mutations)}async function vP(t,e,n){const r=t.Ta.shift(),i=op.from(r,e,n);await cb(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await eu(t)}async function wP(t,e){e&&Pr(t).Y_&&await async function(r,i){if(function(o){return ZA(o)&&o!==V.ABORTED}(i.code)){const s=r.Ta.shift();Pr(r).B_(),await cb(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await eu(r)}}(t,e),ub(t)&&db(t)}async function dv(t,e){const n=X(t);n.asyncQueue.verifyOperationInProgress(),U(xn,"RemoteStore received new credentials");const r=Ti(n);n.da.add(3),await _a(n),r&&n.ga.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await Zc(n)}async function xP(t,e){const n=X(t);e?(n.da.delete(2),await Zc(n)):e||(n.da.add(2),await _a(n),n.ga.set("Unknown"))}function ks(t){return t.ya||(t.ya=function(n,r,i){const s=X(n);return s.sa(),new rP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:uP.bind(null,t),Yo:dP.bind(null,t),t_:hP.bind(null,t),H_:fP.bind(null,t)}),t.ma.push(async e=>{e?(t.ya.B_(),gp(t)?mp(t):t.ga.set("Unknown")):(await t.ya.stop(),lb(t))})),t.ya}function Pr(t){return t.wa||(t.wa=function(n,r,i){const s=X(n);return s.sa(),new iP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),Yo:gP.bind(null,t),t_:wP.bind(null,t),ta:yP.bind(null,t),na:vP.bind(null,t)}),t.ma.push(async e=>{e?(t.wa.B_(),await eu(t)):(await t.wa.stop(),t.Ta.length>0&&(U(xn,`Stopping write stream with ${t.Ta.length} pending writes`),t.Ta=[]))})),t.wa}/**
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
 */class yp{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new br,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,c=new yp(e,n,o,i,s);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(V.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vp(t,e){if(Fn("AsyncQueue",`${e}: ${t}`),Ts(t))return new W(V.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class rs{static emptySet(e){return new rs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new be(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof rs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new rs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hv{constructor(){this.Sa=new be(H.comparator)}track(e){const n=e.doc.key,r=this.Sa.get(n);r?e.type!==0&&r.type===3?this.Sa=this.Sa.insert(n,e):e.type===3&&r.type!==1?this.Sa=this.Sa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Sa=this.Sa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Sa=this.Sa.remove(n):e.type===1&&r.type===2?this.Sa=this.Sa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Sa=this.Sa.insert(n,{type:2,doc:e.doc}):Q(63341,{Vt:e,ba:r}):this.Sa=this.Sa.insert(n,e)}Da(){const e=[];return this.Sa.inorderTraversal((n,r)=>{e.push(r)}),e}}class gs{constructor(e,n,r,i,s,o,c,u,d){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=d}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new gs(e,n,rs.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
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
 */class bP{constructor(){this.Ca=void 0,this.va=[]}Fa(){return this.va.some(e=>e.Ma())}}class _P{constructor(){this.queries=fv(),this.onlineState="Unknown",this.xa=new Set}terminate(){(function(n,r){const i=X(n),s=i.queries;i.queries=fv(),s.forEach((o,c)=>{for(const u of c.va)u.onError(r)})})(this,new W(V.ABORTED,"Firestore shutting down"))}}function fv(){return new Ei(t=>Ax(t),Qc)}async function hb(t,e){const n=X(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Fa()&&e.Ma()&&(r=2):(s=new bP,r=e.Ma()?0:1);try{switch(r){case 0:s.Ca=await n.onListen(i,!0);break;case 1:s.Ca=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const c=vp(o,`Initialization of query '${Pi(e.query)}' failed`);return void e.onError(c)}n.queries.set(i,s),s.va.push(e),e.Oa(n.onlineState),s.Ca&&e.Na(s.Ca)&&wp(n)}async function fb(t,e){const n=X(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.va.indexOf(e);o>=0&&(s.va.splice(o,1),s.va.length===0?i=e.Ma()?0:1:!s.Fa()&&e.Ma()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function SP(t,e){const n=X(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const c of o.va)c.Na(i)&&(r=!0);o.Ca=i}}r&&wp(n)}function EP(t,e,n){const r=X(t),i=r.queries.get(e);if(i)for(const s of i.va)s.onError(n);r.queries.delete(e)}function wp(t){t.xa.forEach(e=>{e.next()})}var Mh,pv;(pv=Mh||(Mh={})).Ba="default",pv.Cache="cache";class pb{constructor(e,n,r){this.query=e,this.La=n,this.ka=!1,this.Ka=null,this.onlineState="Unknown",this.options=r||{}}Na(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.ka?this.qa(e)&&(this.La.next(e),n=!0):this.Ua(e,this.onlineState)&&(this.$a(e),n=!0),this.Ka=e,n}onError(e){this.La.error(e)}Oa(e){this.onlineState=e;let n=!1;return this.Ka&&!this.ka&&this.Ua(this.Ka,e)&&(this.$a(this.Ka),n=!0),n}Ua(e,n){if(!e.fromCache||!this.Ma())return!0;const r=n!=="Offline";return(!this.options.Wa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}qa(e){if(e.docChanges.length>0)return!0;const n=this.Ka&&this.Ka.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}$a(e){e=gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ka=!0,this.La.next(e)}Ma(){return this.options.source!==Mh.Cache}}/**
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
 */class mb{constructor(e){this.key=e}}class gb{constructor(e){this.key=e}}class TP{constructor(e,n){this.query=e,this.tu=n,this.nu=null,this.hasCachedResults=!1,this.current=!1,this.ru=re(),this.mutatedKeys=re(),this.iu=Rx(e),this.su=new rs(this.iu)}get ou(){return this.tu}_u(e,n){const r=n?n.au:new hv,i=n?n.su:this.su;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,g)=>{const m=i.get(f),S=Kc(this.query,g)?g:null,C=!!m&&this.mutatedKeys.has(m.key),j=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;m&&S?m.data.isEqual(S.data)?C!==j&&(r.track({type:3,doc:S}),O=!0):this.uu(m,S)||(r.track({type:2,doc:S}),O=!0,(u&&this.iu(S,u)>0||d&&this.iu(S,d)<0)&&(c=!0)):!m&&S?(r.track({type:0,doc:S}),O=!0):m&&!S&&(r.track({type:1,doc:m}),O=!0,(u||d)&&(c=!0)),O&&(S?(o=o.add(S),s=j?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{su:o,au:r,bs:c,mutatedKeys:s}}uu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.su;this.su=e.su,this.mutatedKeys=e.mutatedKeys;const o=e.au.Da();o.sort((f,g)=>function(S,C){const j=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q(20277,{Vt:O})}};return j(S)-j(C)}(f.type,g.type)||this.iu(f.doc,g.doc)),this.cu(r),i=i??!1;const c=n&&!i?this.lu():[],u=this.ru.size===0&&this.current&&!i?1:0,d=u!==this.nu;return this.nu=u,o.length!==0||d?{snapshot:new gs(this.query,e.su,s,o,e.mutatedKeys,u===0,d,!1,!!r&&r.resumeToken.approximateByteSize()>0),hu:c}:{hu:c}}Oa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({su:this.su,au:new hv,mutatedKeys:this.mutatedKeys,bs:!1},!1)):{hu:[]}}Pu(e){return!this.tu.has(e)&&!!this.su.has(e)&&!this.su.get(e).hasLocalMutations}cu(e){e&&(e.addedDocuments.forEach(n=>this.tu=this.tu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.tu=this.tu.delete(n)),this.current=e.current)}lu(){if(!this.current)return[];const e=this.ru;this.ru=re(),this.su.forEach(r=>{this.Pu(r.key)&&(this.ru=this.ru.add(r.key))});const n=[];return e.forEach(r=>{this.ru.has(r)||n.push(new gb(r))}),this.ru.forEach(r=>{e.has(r)||n.push(new mb(r))}),n}Tu(e){this.tu=e.ks,this.ru=re();const n=this._u(e.documents);return this.applyChanges(n,!0)}Iu(){return gs.fromInitialDocuments(this.query,this.su,this.mutatedKeys,this.nu===0,this.hasCachedResults)}}const xp="SyncEngine";class IP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class kP{constructor(e){this.key=e,this.Eu=!1}}class CP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ru={},this.Au=new Ei(c=>Ax(c),Qc),this.Vu=new Map,this.du=new Set,this.mu=new be(H.comparator),this.fu=new Map,this.gu=new cp,this.pu={},this.yu=new Map,this.wu=Rr.ar(),this.onlineState="Unknown",this.Su=void 0}get isPrimaryClient(){return this.Su===!0}}async function AP(t,e,n=!0){const r=_b(t);let i;const s=r.Au.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.Iu()):i=await yb(r,e,n,!0),i}async function RP(t,e){const n=_b(t);await yb(n,e,!0,!1)}async function yb(t,e,n,r){const i=await KR(t.localStore,mn(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let c;return r&&(c=await PP(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&ob(t.remoteStore,i),c}async function PP(t,e,n,r,i){t.bu=(g,m,S)=>async function(j,O,E,v){let b=O.view._u(E);b.bs&&(b=await ov(j.localStore,O.query,!1).then(({documents:w})=>O.view._u(w,b)));const P=v&&v.targetChanges.get(O.targetId),L=v&&v.targetMismatches.get(O.targetId)!=null,R=O.view.applyChanges(b,j.isPrimaryClient,P,L);return gv(j,O.targetId,R.hu),R.snapshot}(t,g,m,S);const s=await ov(t.localStore,e,!0),o=new TP(e,s.ks),c=o._u(s.documents),u=ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),d=o.applyChanges(c,t.isPrimaryClient,u);gv(t,n,d.hu);const f=new IP(e,n,o);return t.Au.set(e,f),t.Vu.has(n)?t.Vu.get(n).push(e):t.Vu.set(n,[e]),d.snapshot}async function jP(t,e,n){const r=X(t),i=r.Au.get(e),s=r.Vu.get(i.targetId);if(s.length>1)return r.Vu.set(i.targetId,s.filter(o=>!Qc(o,e))),void r.Au.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await jh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&fp(r.remoteStore,i.targetId),Lh(r,i.targetId)}).catch(Es)):(Lh(r,i.targetId),await jh(r.localStore,i.targetId,!0))}async function NP(t,e){const n=X(t),r=n.Au.get(e),i=n.Vu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),fp(n.remoteStore,r.targetId))}async function DP(t,e,n){const r=BP(t);try{const i=await function(o,c){const u=X(o),d=ge.now(),f=c.reduce((S,C)=>S.add(C.key),re());let g,m;return u.persistence.runTransaction("Locally write mutations","readwrite",S=>{let C=Bn(),j=re();return u.xs.getEntries(S,f).next(O=>{C=O,C.forEach((E,v)=>{v.isValidDocument()||(j=j.add(E))})}).next(()=>u.localDocuments.getOverlayedDocuments(S,C)).next(O=>{g=O;const E=[];for(const v of c){const b=QA(v,g.get(v.key).overlayedDocument);b!=null&&E.push(new zr(v.key,b,bx(b.value.mapValue),zt.exists(!0)))}return u.mutationQueue.addMutationBatch(S,d,E,c)}).next(O=>{m=O;const E=O.applyToLocalDocumentSet(g,j);return u.documentOverlayCache.saveOverlays(S,O.batchId,E)})}).then(()=>({batchId:m.batchId,changes:jx(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,c,u){let d=o.pu[o.currentUser.toKey()];d||(d=new be(ne)),d=d.insert(c,u),o.pu[o.currentUser.toKey()]=d}(r,i.batchId,n),await Sa(r,i.changes),await eu(r.remoteStore)}catch(i){const s=vp(i,"Failed to persist write");n.reject(s)}}async function vb(t,e){const n=X(t);try{const r=await HR(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.fu.get(s);o&&(le(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.Eu=!0:i.modifiedDocuments.size>0?le(o.Eu,14607):i.removedDocuments.size>0&&(le(o.Eu,42227),o.Eu=!1))}),await Sa(n,r,e)}catch(r){await Es(r)}}function mv(t,e,n){const r=X(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Au.forEach((s,o)=>{const c=o.view.Oa(e);c.snapshot&&i.push(c.snapshot)}),function(o,c){const u=X(o);u.onlineState=c;let d=!1;u.queries.forEach((f,g)=>{for(const m of g.va)m.Oa(c)&&(d=!0)}),d&&wp(u)}(r.eventManager,e),i.length&&r.Ru.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function MP(t,e,n){const r=X(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.fu.get(e),s=i&&i.key;if(s){let o=new be(H.comparator);o=o.insert(s,nt.newNoDocument(s,J.min()));const c=re().add(s),u=new xa(J.min(),new Map,new be(ne),o,c);await vb(r,u),r.mu=r.mu.remove(s),r.fu.delete(e),bp(r)}else await jh(r.localStore,e,!1).then(()=>Lh(r,e,n)).catch(Es)}async function LP(t,e){const n=X(t),r=e.batch.batchId;try{const i=await qR(n.localStore,e);xb(n,r,null),wb(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Sa(n,i)}catch(i){await Es(i)}}async function OP(t,e,n){const r=X(t);try{const i=await function(o,c){const u=X(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",d=>{let f;return u.mutationQueue.lookupMutationBatch(d,c).next(g=>(le(g!==null,37113),f=g.keys(),u.mutationQueue.removeMutationBatch(d,g))).next(()=>u.mutationQueue.performConsistencyCheck(d)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(d,f,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,f)).next(()=>u.localDocuments.getDocuments(d,f))})}(r.localStore,e);xb(r,e,n),wb(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Sa(r,i)}catch(i){await Es(i)}}function wb(t,e){(t.yu.get(e)||[]).forEach(n=>{n.resolve()}),t.yu.delete(e)}function xb(t,e,n){const r=X(t);let i=r.pu[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.pu[r.currentUser.toKey()]=i}}function Lh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Vu.get(e))t.Au.delete(r),n&&t.Ru.Du(r,n);t.Vu.delete(e),t.isPrimaryClient&&t.gu.Gr(e).forEach(r=>{t.gu.containsKey(r)||bb(t,r)})}function bb(t,e){t.du.delete(e.path.canonicalString());const n=t.mu.get(e);n!==null&&(fp(t.remoteStore,n),t.mu=t.mu.remove(e),t.fu.delete(n),bp(t))}function gv(t,e,n){for(const r of n)r instanceof mb?(t.gu.addReference(r.key,e),VP(t,r)):r instanceof gb?(U(xp,"Document no longer in limbo: "+r.key),t.gu.removeReference(r.key,e),t.gu.containsKey(r.key)||bb(t,r.key)):Q(19791,{Cu:r})}function VP(t,e){const n=e.key,r=n.path.canonicalString();t.mu.get(n)||t.du.has(r)||(U(xp,"New document in limbo: "+n),t.du.add(r),bp(t))}function bp(t){for(;t.du.size>0&&t.mu.size<t.maxConcurrentLimboResolutions;){const e=t.du.values().next().value;t.du.delete(e);const n=new H(he.fromString(e)),r=t.wu.next();t.fu.set(r,new kP(n)),t.mu=t.mu.insert(n,r),ob(t.remoteStore,new Cn(mn(rp(n.path)),r,"TargetPurposeLimboResolution",qc.ce))}}async function Sa(t,e,n){const r=X(t),i=[],s=[],o=[];r.Au.isEmpty()||(r.Au.forEach((c,u)=>{o.push(r.bu(u,e,n).then(d=>{var f;if((d||n)&&r.isPrimaryClient){const g=d?!d.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))==null?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(d){i.push(d);const g=dp.Es(u.targetId,d);s.push(g)}}))}),await Promise.all(o),r.Ru.H_(i),await async function(u,d){const f=X(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>z.forEach(d,m=>z.forEach(m.Ts,S=>f.persistence.referenceDelegate.addReference(g,m.targetId,S)).next(()=>z.forEach(m.Is,S=>f.persistence.referenceDelegate.removeReference(g,m.targetId,S)))))}catch(g){if(!Ts(g))throw g;U(hp,"Failed to update sequence numbers: "+g)}for(const g of d){const m=g.targetId;if(!g.fromCache){const S=f.vs.get(m),C=S.snapshotVersion,j=S.withLastLimboFreeSnapshotVersion(C);f.vs=f.vs.insert(m,j)}}}(r.localStore,s))}async function zP(t,e){const n=X(t);if(!n.currentUser.isEqual(e)){U(xp,"User change. New user:",e.toKey());const r=await nb(n.localStore,e);n.currentUser=e,function(s,o){s.yu.forEach(c=>{c.forEach(u=>{u.reject(new W(V.CANCELLED,o))})}),s.yu.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Sa(n,r.Ns)}}function FP(t,e){const n=X(t),r=n.fu.get(e);if(r&&r.Eu)return re().add(r.key);{let i=re();const s=n.Vu.get(e);if(!s)return i;for(const o of s){const c=n.Au.get(o);i=i.unionWith(c.view.ou)}return i}}function _b(t){const e=X(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=vb.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=FP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=MP.bind(null,e),e.Ru.H_=SP.bind(null,e.eventManager),e.Ru.Du=EP.bind(null,e.eventManager),e}function BP(t){const e=X(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=LP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=OP.bind(null,e),e}class wc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Xc(e.databaseInfo.databaseId),this.sharedClientState=this.Mu(e),this.persistence=this.xu(e),await this.persistence.start(),this.localStore=this.Ou(e),this.gcScheduler=this.Nu(e,this.localStore),this.indexBackfillerScheduler=this.Bu(e,this.localStore)}Nu(e,n){return null}Bu(e,n){return null}Ou(e){return WR(this.persistence,new BR,e.initialUser,this.serializer)}xu(e){return new tb(up.Vi,this.serializer)}Mu(e){return new JR}async terminate(){var e,n;(e=this.gcScheduler)==null||e.stop(),(n=this.indexBackfillerScheduler)==null||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}wc.provider={build:()=>new wc};class $P extends wc{constructor(e){super(),this.cacheSizeBytes=e}Nu(e,n){le(this.persistence.referenceDelegate instanceof yc,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new IR(r,e.asyncQueue,n)}xu(e){const n=this.cacheSizeBytes!==void 0?ht.withCacheSize(this.cacheSizeBytes):ht.DEFAULT;return new tb(r=>yc.Vi(r,n),this.serializer)}}class Oh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=zP.bind(null,this.syncEngine),await xP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new _P}()}createDatastore(e){const n=Xc(e.databaseInfo.databaseId),r=nP(e.databaseInfo);return aP(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,c){return new cP(r,i,s,o,c)}(this.localStore,this.datastore,e.asyncQueue,n=>mv(this.syncEngine,n,0),function(){return cv.v()?new cv:new XR}())}createSyncEngine(e,n){return function(i,s,o,c,u,d,f){const g=new CP(i,s,o,c,u,d);return f&&(g.Su=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=X(i);U(xn,"RemoteStore shutting down."),s.da.add(5),await _a(s),s.fa.shutdown(),s.ga.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(n=this.eventManager)==null||n.terminate()}}Oh.provider={build:()=>new Oh};/**
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
 */class Sb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.ku(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.ku(this.observer.error,e):Fn("Uncaught Error in snapshot listener:",e.toString()))}Ku(){this.muted=!0}ku(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */const jr="FirestoreClient";class UP{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this._databaseInfo=i,this.user=et.UNAUTHENTICATED,this.clientId=Jf.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{U(jr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>(U(jr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new br;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vp(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function fd(t,e){t.asyncQueue.verifyOperationInProgress(),U(jr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await nb(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function yv(t,e){t.asyncQueue.verifyOperationInProgress();const n=await WP(t);U(jr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>dv(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>dv(e.remoteStore,i)),t._onlineComponents=e}async function WP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U(jr,"Using user provided OfflineComponentProvider");try{await fd(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;yi("Error using user provided cache. Falling back to memory cache: "+n),await fd(t,new wc)}}else U(jr,"Using default OfflineComponentProvider"),await fd(t,new $P(void 0));return t._offlineComponents}async function Eb(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U(jr,"Using user provided OnlineComponentProvider"),await yv(t,t._uninitializedComponentsProvider._online)):(U(jr,"Using default OnlineComponentProvider"),await yv(t,new Oh))),t._onlineComponents}function qP(t){return Eb(t).then(e=>e.syncEngine)}async function Vh(t){const e=await Eb(t),n=e.eventManager;return n.onListen=AP.bind(null,e.syncEngine),n.onUnlisten=jP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=RP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=NP.bind(null,e.syncEngine),n}function HP(t,e,n,r){const i=new Sb(r),s=new pb(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>hb(await Vh(t),s)),()=>{i.Ku(),t.asyncQueue.enqueueAndForget(async()=>fb(await Vh(t),s))}}function GP(t,e,n={}){const r=new br;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,c,u,d){const f=new Sb({next:m=>{f.Ku(),o.enqueueAndForget(()=>fb(s,g)),m.fromCache&&u.source==="server"?d.reject(new W(V.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):d.resolve(m)},error:m=>d.reject(m)}),g=new pb(c,f,{includeMetadataChanges:!0,Wa:!0});return hb(s,g)}(await Vh(t),t.asyncQueue,e,n,r)),r.promise}function QP(t,e){const n=new br;return t.asyncQueue.enqueueAndForget(async()=>DP(await qP(t),e,n)),n.promise}/**
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
 */function Tb(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const KP="ComponentProvider",vv=new Map;function YP(t,e,n,r,i){return new yA(t,e,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,Tb(i.experimentalLongPollingOptions),i.useFetchStreams,i.isUsingEmulator,r)}/**
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
 */const Ib="firestore.googleapis.com",wv=!0;class xv{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new W(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ib,this.ssl=wv}else this.host=e.host,this.ssl=e.ssl??wv;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=eb;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ER)throw new W(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}oA("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Tb(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new W(V.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class tu{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xv({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xv(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new YC;switch(r.type){case"firstParty":return new eA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=vv.get(n);r&&(U(KP,"Removing Datastore"),vv.delete(n),r.terminate())}(this),Promise.resolve()}}function JP(t,e,n,r={}){var d;t=Vt(t,tu);const i=fa(e),s=t._getSettings(),o={...s,emulatorOptions:t._getEmulatorOptions()},c=`${e}:${n}`;i&&mw(`https://${c}`),s.host!==Ib&&s.host!==c&&yi("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...s,host:c,ssl:i,emulatorOptions:r};if(!Tr(u,o)&&(t._setSettings(u),r.mockUserToken)){let f,g;if(typeof r.mockUserToken=="string")f=r.mockUserToken,g=et.MOCK_USER;else{f=sT(r.mockUserToken,(d=t._app)==null?void 0:d.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new W(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new et(m)}t._authCredentials=new JC(new cx(f,g))}}/**
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
 */class Fr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class Pe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _r(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Pe(this.firestore,e,this._key)}toJSON(){return{type:Pe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(va(n,Pe._jsonSchema))return new Pe(e,r||null,new H(he.fromString(n.referencePath)))}}Pe._jsonSchemaVersion="firestore/documentReference/1.0",Pe._jsonSchema={type:Me("string",Pe._jsonSchemaVersion),referencePath:Me("string")};class _r extends Fr{constructor(e,n,r){super(e,n,rp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Pe(this.firestore,null,new H(e))}withConverter(e){return new _r(this.firestore,e,this._path)}}function ko(t,e,...n){if(t=ke(t),ux("collection","path",e),t instanceof tu){const r=he.fromString(e,...n);return Ny(r),new _r(t,null,r)}{if(!(t instanceof Pe||t instanceof _r))throw new W(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return Ny(r),new _r(t.firestore,null,r)}}function jn(t,e,...n){if(t=ke(t),arguments.length===1&&(e=Jf.newId()),ux("doc","path",e),t instanceof tu){const r=he.fromString(e,...n);return jy(r),new Pe(t,null,new H(r))}{if(!(t instanceof Pe||t instanceof _r))throw new W(V.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(he.fromString(e,...n));return jy(r),new Pe(t.firestore,t instanceof _r?t.converter:null,new H(r))}}/**
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
 */const bv="AsyncQueue";class _v{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new ib(this,"async_queue_retry"),this.lc=()=>{const r=hd();r&&U(bv,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.hc=e;const n=hd();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const n=hd();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const n=new br;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!Ts(e))throw e;U(bv,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const n=this.hc.then(()=>(this.ac=!0,e().catch(r=>{throw this._c=r,this.ac=!1,Fn("INTERNAL UNHANDLED ERROR: ",Sv(r)),r}).then(r=>(this.ac=!1,r))));return this.hc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.cc.indexOf(e)>-1&&(n=0);const i=yp.createAndSchedule(this,e,n,r,s=>this.Ec(s));return this.oc.push(i),i}Pc(){this._c&&Q(47125,{Rc:Sv(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const n of this.oc)if(n.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.oc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const n=this.oc.indexOf(e);this.oc.splice(n,1)}}function Sv(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class Nr extends tu{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new _v,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new _v(e),this._firestoreClient=void 0,await e}}}function XP(t,e){const n=typeof t=="object"?t:Bf(),r=typeof t=="string"?t:fc,i=Si(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=rT("firestore");s&&JP(i,...s)}return i}function _p(t){if(t._terminated)throw new W(V.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||ZP(t),t._firestoreClient}function ZP(t){var r,i,s,o;const e=t._freezeSettings(),n=YP(t._databaseId,((r=t._app)==null?void 0:r.options.appId)||"",t._persistenceKey,(i=t._app)==null?void 0:i.options.apiKey,e);t._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((o=e.localCache)!=null&&o._onlineComponentProvider)&&(t._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),t._firestoreClient=new UP(t._authCredentials,t._appCheckCredentials,t._queue,n,t._componentsProvider&&function(u){const d=u==null?void 0:u._online.build();return{_offline:u==null?void 0:u._offline.build(d),_online:d}}(t._componentsProvider))}/**
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
 */class Nt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nt(Ke.fromBase64String(e))}catch(n){throw new W(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Nt(Ke.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Nt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(va(e,Nt._jsonSchema))return Nt.fromBase64String(e.bytes)}}Nt._jsonSchemaVersion="firestore/bytes/1.0",Nt._jsonSchema={type:Me("string",Nt._jsonSchemaVersion),bytes:Me("string")};/**
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
 */class Sp{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new W(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new He(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ea{constructor(e){this._methodName=e}}/**
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
 */class yn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new W(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new W(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ne(this._lat,e._lat)||ne(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:yn._jsonSchemaVersion}}static fromJSON(e){if(va(e,yn._jsonSchema))return new yn(e.latitude,e.longitude)}}yn._jsonSchemaVersion="firestore/geoPoint/1.0",yn._jsonSchema={type:Me("string",yn._jsonSchemaVersion),latitude:Me("number"),longitude:Me("number")};/**
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
 */class Xt{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}toJSON(){return{type:Xt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(va(e,Xt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(n=>typeof n=="number"))return new Xt(e.vectorValues);throw new W(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Xt._jsonSchemaVersion="firestore/vectorValue/1.0",Xt._jsonSchema={type:Me("string",Xt._jsonSchemaVersion),vectorValues:Me("object")};/**
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
 */const ej=/^__.*__$/;class tj{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new wa(e,this.data,n,this.fieldTransforms)}}class kb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Cb(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q(40011,{dataSource:t})}}class Ep{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.fc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}i(e){return new Ep({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}yc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.wc(e),r}Sc(e){var i;const n=(i=this.path)==null?void 0:i.child(e),r=this.i({path:n,arrayElement:!1});return r.fc(),r}bc(e){return this.i({path:void 0,arrayElement:!0})}Dc(e){return xc(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}fc(){if(this.path)for(let e=0;e<this.path.length;e++)this.wc(this.path.get(e))}wc(e){if(e.length===0)throw this.Dc("Document fields must not be empty");if(Cb(this.dataSource)&&ej.test(e))throw this.Dc('Document fields cannot begin and end with "__"')}}class nj{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Xc(e)}V(e,n,r,i=!1){return new Ep({dataSource:e,methodName:n,targetDoc:r,path:He.emptyPath(),arrayElement:!1,hasConverter:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function nu(t){const e=t._freezeSettings(),n=Xc(t._databaseId);return new nj(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ab(t,e,n,r,i,s={}){const o=t.V(s.merge||s.mergeFields?2:0,e,n,i);kp("Data must be an object, but it was:",o,r);const c=Rb(r,o);let u,d;if(s.merge)u=new St(o.fieldMask),d=o.fieldTransforms;else if(s.mergeFields){const f=[];for(const g of s.mergeFields){const m=ys(e,g,n);if(!o.contains(m))throw new W(V.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Nb(f,m)||f.push(m)}u=new St(f),d=o.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,d=o.fieldTransforms;return new tj(new pt(c),u,d)}class ru extends Ea{_toFieldTransform(e){if(e.dataSource!==2)throw e.dataSource===1?e.Dc(`${this._methodName}() can only appear at the top level of your update data`):e.Dc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ru}}class Tp extends Ea{_toFieldTransform(e){return new Fx(e.path,new ta)}isEqual(e){return e instanceof Tp}}class Ip extends Ea{constructor(e,n){super(e),this.Fc=n}_toFieldTransform(e){const n=new ia(e.serializer,Mx(e.serializer,this.Fc));return new Fx(e.path,n)}isEqual(e){return e instanceof Ip&&this.Fc===e.Fc}}function rj(t,e,n,r){const i=t.V(1,e,n);kp("Data must be an object, but it was:",i,r);const s=[],o=pt.empty();Vr(r,(u,d)=>{const f=jb(e,u,n);d=ke(d);const g=i.Sc(f);if(d instanceof ru)s.push(f);else{const m=Ta(d,g);m!=null&&(s.push(f),o.set(f,m))}});const c=new St(s);return new kb(o,c,i.fieldTransforms)}function ij(t,e,n,r,i,s){const o=t.V(1,e,n),c=[ys(e,r,n)],u=[i];if(s.length%2!=0)throw new W(V.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<s.length;m+=2)c.push(ys(e,s[m])),u.push(s[m+1]);const d=[],f=pt.empty();for(let m=c.length-1;m>=0;--m)if(!Nb(d,c[m])){const S=c[m];let C=u[m];C=ke(C);const j=o.Sc(S);if(C instanceof ru)d.push(S);else{const O=Ta(C,j);O!=null&&(d.push(S),f.set(S,O))}}const g=new St(d);return new kb(f,g,o.fieldTransforms)}function sj(t,e,n,r=!1){return Ta(n,t.V(r?4:3,e))}function Ta(t,e){if(Pb(t=ke(t)))return kp("Unsupported field value:",e,t),Rb(t,e);if(t instanceof Ea)return function(r,i){if(!Cb(i.dataSource))throw i.Dc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Dc(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.Dc("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const c of r){let u=Ta(c,i.bc(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mx(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ge.fromDate(r);return{timestampValue:gc(i.serializer,s)}}if(r instanceof ge){const s=new ge(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:gc(i.serializer,s)}}if(r instanceof yn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Nt)return{bytesValue:Hx(i.serializer,r._byteString)};if(r instanceof Pe){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Dc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:lp(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof Xt)return function(o,c){const u=o instanceof Xt?o.toArray():o;return{mapValue:{fields:{[wx]:{stringValue:xx},[pc]:{arrayValue:{values:u.map(f=>{if(typeof f!="number")throw c.Dc("VectorValues must only contain numeric values.");return ip(c.serializer,f)})}}}}}}(r,i);if(Zx(r))return r._toProto(i.serializer);throw i.Dc(`Unsupported field value: ${Wc(r)}`)}(t,e)}function Rb(t,e){const n={};return fx(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Vr(t,(r,i)=>{const s=Ta(i,e.yc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function Pb(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ge||t instanceof yn||t instanceof Nt||t instanceof Pe||t instanceof Ea||t instanceof Xt||Zx(t))}function kp(t,e,n){if(!Pb(n)||!dx(n)){const r=Wc(n);throw r==="an object"?e.Dc(t+" a custom object"):e.Dc(t+" "+r)}}function ys(t,e,n){if((e=ke(e))instanceof Sp)return e._internalPath;if(typeof e=="string")return jb(t,e);throw xc("Field path arguments must be of type string or ",t,!1,void 0,n)}const oj=new RegExp("[~\\*/\\[\\]]");function jb(t,e,n){if(e.search(oj)>=0)throw xc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Sp(...e.split("."))._internalPath}catch{throw xc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function xc(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new W(V.INVALID_ARGUMENT,c+t+u)}function Nb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class aj{convertValue(e,n="none"){switch(Ar(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw Q(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Vr(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var r,i,s;const n=(s=(i=(r=e.fields)==null?void 0:r[pc].arrayValue)==null?void 0:i.values)==null?void 0:s.map(o=>Ae(o.doubleValue));return new Xt(n)}convertGeoPoint(e){return new yn(Ae(e.latitude),Ae(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Jo(e));default:return null}}convertTimestamp(e){const n=kr(e);return new ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=he.fromString(e);le(Xx(r),9688,{name:e});const i=new Xo(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Fn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */class Cp extends aj{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Pe(this.firestore,null,n)}}function Qt(){return new Tp("serverTimestamp")}function lj(t){return new Ip("increment",t)}const Ev="@firebase/firestore",Tv="4.14.1";/**
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
 */function Iv(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const i=n;for(const s of r)if(s in i&&typeof i[s]=="function")return!0;return!1}(t,["next","error","complete"])}/**
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
 */class Db{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Pe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new cj(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const n=this._document.data.field(ys("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class cj extends Db{data(){return super.data()}}/**
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
 */function Mb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new W(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ap{}class Lb extends Ap{}function uj(t,e,...n){let r=[];e instanceof Ap&&r.push(e),r=r.concat(n),function(s){const o=s.filter(u=>u instanceof Pp).length,c=s.filter(u=>u instanceof Rp).length;if(o>1||o>0&&c>0)throw new W(V.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)t=i._apply(t);return t}class Rp extends Lb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rp(e,n,r)}_apply(e){const n=this._parse(e);return Ob(e._query,n),new Fr(e.firestore,e.converter,Ih(e._query,n))}_parse(e){const n=nu(e.firestore);return function(s,o,c,u,d,f,g){let m;if(d.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new W(V.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Cv(g,f);const C=[];for(const j of g)C.push(kv(u,s,j));m={arrayValue:{values:C}}}else m=kv(u,s,g)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Cv(g,f),m=sj(c,o,g,f==="in"||f==="not-in");return De.create(d,f,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Pp extends Ap{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Pp(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:nn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(i,s){let o=i;const c=s.getFlattenedFilters();for(const u of c)Ob(o,u),o=Ih(o,u)}(e._query,n),new Fr(e.firestore,e.converter,Ih(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class jp extends Lb{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new jp(e,n)}_apply(e){const n=function(i,s,o){if(i.startAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new W(V.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ea(s,o)}(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,MA(e._query,n))}}function dj(t,e="asc"){const n=e,r=ys("orderBy",t);return jp._create(r,n)}function kv(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new W(V.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Cx(e)&&n.indexOf("/")!==-1)throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(he.fromString(n));if(!H.isDocumentKey(r))throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return By(t,new H(r))}if(n instanceof Pe)return By(t,n._key);throw new W(V.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Wc(n)}.`)}function Cv(t,e){if(!Array.isArray(t)||t.length===0)throw new W(V.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ob(t,e){const n=function(i,s){for(const o of i)for(const c of o.getFlattenedFilters())if(s.indexOf(c.op)>=0)return c.op;return null}(t.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(V.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Vb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ho{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class si extends Db{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Rl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(ys("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=si._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}si._jsonSchemaVersion="firestore/documentSnapshot/1.0",si._jsonSchema={type:Me("string",si._jsonSchemaVersion),bundleSource:Me("string","DocumentSnapshot"),bundleName:Me("string"),bundle:Me("string")};class Rl extends si{data(e={}){return super.data(e)}}class oi{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ho(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Rl(this._firestore,this._userDataWriter,r.key,r,new ho(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new W(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(c=>{const u=new Rl(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ho(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(c=>s||c.type!==3).map(c=>{const u=new Rl(i._firestore,i._userDataWriter,c.doc.key,c.doc,new ho(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,f=-1;return c.type!==0&&(d=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:hj(c.type),doc:u,oldIndex:d,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Jf.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],i=[];return this.docs.forEach(s=>{s._document!==null&&(n.push(s._document),r.push(this._userDataWriter.convertObjectMap(s._document.data.value.mapValue.fields,"previous")),i.push(s.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function hj(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q(61501,{type:t})}}/**
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
 */oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Me("string",oi._jsonSchemaVersion),bundleSource:Me("string","QuerySnapshot"),bundleName:Me("string"),bundle:Me("string")};function fj(t){t=Vt(t,Fr);const e=Vt(t.firestore,Nr),n=_p(e),r=new Cp(e);return Mb(t._query),GP(n,t._query).then(i=>new oi(e,r,t,i))}function pd(t,e,n){t=Vt(t,Pe);const r=Vt(t.firestore,Nr),i=Vb(t.converter,e,n),s=nu(r);return su(r,[Ab(s,"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,zt.none())])}function iu(t,e,n,...r){t=Vt(t,Pe);const i=Vt(t.firestore,Nr),s=nu(i);let o;return o=typeof(e=ke(e))=="string"||e instanceof Sp?ij(s,"updateDoc",t._key,e,n,r):rj(s,"updateDoc",t._key,e),su(i,[o.toMutation(t._key,zt.exists(!0))])}function pj(t){return su(Vt(t.firestore,Nr),[new sp(t._key,zt.none())])}function zb(t,e){const n=Vt(t.firestore,Nr),r=jn(t),i=Vb(t.converter,e),s=nu(t.firestore);return su(n,[Ab(s,"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Np(t,...e){var d,f,g;t=ke(t);let n={includeMetadataChanges:!1,source:"default"},r=0;typeof e[r]!="object"||Iv(e[r])||(n=e[r++]);const i={includeMetadataChanges:n.includeMetadataChanges,source:n.source};if(Iv(e[r])){const m=e[r];e[r]=(d=m.next)==null?void 0:d.bind(m),e[r+1]=(f=m.error)==null?void 0:f.bind(m),e[r+2]=(g=m.complete)==null?void 0:g.bind(m)}let s,o,c;if(t instanceof Pe)o=Vt(t.firestore,Nr),c=rp(t._key.path),s={next:m=>{e[r]&&e[r](mj(o,t,m))},error:e[r+1],complete:e[r+2]};else{const m=Vt(t,Fr);o=Vt(m.firestore,Nr),c=m._query;const S=new Cp(o);s={next:C=>{e[r]&&e[r](new oi(o,S,m,C))},error:e[r+1],complete:e[r+2]},Mb(t._query)}const u=_p(o);return HP(u,c,i,s)}function su(t,e){const n=_p(t);return QP(n,e)}function mj(t,e,n){const r=n.docs.get(e._key),i=new Cp(t);return new si(t,i,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){KC(bs),vn(new en("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),c=new Nr(new XC(r.getProvider("auth-internal")),new tA(o,r.getProvider("app-check-internal")),vA(o,i),o);return s={useFetchStreams:n,...s},c._setSettings(s),c},"PUBLIC").setMultipleInstances(!0)),Ot(Ev,Tv,e),Ot(Ev,Tv,"esm2020")})();var gj="firebase",yj="12.13.0";/**
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
 */Ot(gj,yj,"app");const Fb="@firebase/installations",Dp="0.6.22";/**
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
 */const Bb=1e4,$b=`w:${Dp}`,Ub="FIS_v2",vj="https://firebaseinstallations.googleapis.com/v1",wj=60*60*1e3,xj="installations",bj="Installations";/**
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
 */const _j={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},vi=new _i(xj,bj,_j);function Wb(t){return t instanceof rn&&t.code.includes("request-failed")}/**
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
 */function qb({projectId:t}){return`${vj}/projects/${t}/installations`}function Hb(t){return{token:t.token,requestStatus:2,expiresIn:Ej(t.expiresIn),creationTime:Date.now()}}async function Gb(t,e){const r=(await e.json()).error;return vi.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Qb({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Sj(t,{refreshToken:e}){const n=Qb(t);return n.append("Authorization",Tj(e)),n}async function Kb(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Ej(t){return Number(t.replace("s","000"))}function Tj(t){return`${Ub} ${t}`}/**
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
 */async function Ij({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=qb(t),i=Qb(t),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={fid:n,authVersion:Ub,appId:t.appId,sdkVersion:$b},c={method:"POST",headers:i,body:JSON.stringify(o)},u=await Kb(()=>fetch(r,c));if(u.ok){const d=await u.json();return{fid:d.fid||n,registrationStatus:2,refreshToken:d.refreshToken,authToken:Hb(d.authToken)}}else throw await Gb("Create Installation",u)}/**
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
 */function Yb(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function kj(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Cj=/^[cdef][\w-]{21}$/,zh="";function Aj(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=Rj(t);return Cj.test(n)?n:zh}catch{return zh}}function Rj(t){return kj(t).substr(0,22)}/**
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
 */function ou(t){return`${t.appName}!${t.appId}`}/**
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
 */const Jb=new Map;function Xb(t,e){const n=ou(t);Zb(n,e),Pj(n,e)}function Zb(t,e){const n=Jb.get(t);if(n)for(const r of n)r(e)}function Pj(t,e){const n=jj();n&&n.postMessage({key:t,fid:e}),Nj()}let ni=null;function jj(){return!ni&&"BroadcastChannel"in self&&(ni=new BroadcastChannel("[Firebase] FID Change"),ni.onmessage=t=>{Zb(t.data.key,t.data.fid)}),ni}function Nj(){Jb.size===0&&ni&&(ni.close(),ni=null)}/**
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
 */const Dj="firebase-installations-database",Mj=1,wi="firebase-installations-store";let md=null;function Mp(){return md||(md=vw(Dj,Mj,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(wi)}}})),md}async function bc(t,e){const n=ou(t),i=(await Mp()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n);return await s.put(e,n),await i.done,(!o||o.fid!==e.fid)&&Xb(t,e.fid),e}async function e_(t){const e=ou(t),r=(await Mp()).transaction(wi,"readwrite");await r.objectStore(wi).delete(e),await r.done}async function au(t,e){const n=ou(t),i=(await Mp()).transaction(wi,"readwrite"),s=i.objectStore(wi),o=await s.get(n),c=e(o);return c===void 0?await s.delete(n):await s.put(c,n),await i.done,c&&(!o||o.fid!==c.fid)&&Xb(t,c.fid),c}/**
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
 */async function Lp(t){let e;const n=await au(t.appConfig,r=>{const i=Lj(r),s=Oj(t,i);return e=s.registrationPromise,s.installationEntry});return n.fid===zh?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Lj(t){const e=t||{fid:Aj(),registrationStatus:0};return t_(e)}function Oj(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(vi.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Vj(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zj(t)}:{installationEntry:e}}async function Vj(t,e){try{const n=await Ij(t,e);return bc(t.appConfig,n)}catch(n){throw Wb(n)&&n.customData.serverCode===409?await e_(t.appConfig):await bc(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function zj(t){let e=await Av(t.appConfig);for(;e.registrationStatus===1;)await Yb(100),e=await Av(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Lp(t);return r||n}return e}function Av(t){return au(t,e=>{if(!e)throw vi.create("installation-not-found");return t_(e)})}function t_(t){return Fj(t)?{fid:t.fid,registrationStatus:0}:t}function Fj(t){return t.registrationStatus===1&&t.registrationTime+Bb<Date.now()}/**
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
 */async function Bj({appConfig:t,heartbeatServiceProvider:e},n){const r=$j(t,n),i=Sj(t,n),s=e.getImmediate({optional:!0});if(s){const d=await s.getHeartbeatsHeader();d&&i.append("x-firebase-client",d)}const o={installation:{sdkVersion:$b,appId:t.appId}},c={method:"POST",headers:i,body:JSON.stringify(o)},u=await Kb(()=>fetch(r,c));if(u.ok){const d=await u.json();return Hb(d)}else throw await Gb("Generate Auth Token",u)}function $j(t,{fid:e}){return`${qb(t)}/${e}/authTokens:generate`}/**
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
 */async function Op(t,e=!1){let n;const r=await au(t.appConfig,s=>{if(!n_(s))throw vi.create("not-registered");const o=s.authToken;if(!e&&qj(o))return s;if(o.requestStatus===1)return n=Uj(t,e),s;{if(!navigator.onLine)throw vi.create("app-offline");const c=Gj(s);return n=Wj(t,c),c}});return n?await n:r.authToken}async function Uj(t,e){let n=await Rv(t.appConfig);for(;n.authToken.requestStatus===1;)await Yb(100),n=await Rv(t.appConfig);const r=n.authToken;return r.requestStatus===0?Op(t,e):r}function Rv(t){return au(t,e=>{if(!n_(e))throw vi.create("not-registered");const n=e.authToken;return Qj(n)?{...e,authToken:{requestStatus:0}}:e})}async function Wj(t,e){try{const n=await Bj(t,e),r={...e,authToken:n};return await bc(t.appConfig,r),n}catch(n){if(Wb(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await e_(t.appConfig);else{const r={...e,authToken:{requestStatus:0}};await bc(t.appConfig,r)}throw n}}function n_(t){return t!==void 0&&t.registrationStatus===2}function qj(t){return t.requestStatus===2&&!Hj(t)}function Hj(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+wj}function Gj(t){const e={requestStatus:1,requestTime:Date.now()};return{...t,authToken:e}}function Qj(t){return t.requestStatus===1&&t.requestTime+Bb<Date.now()}/**
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
 */async function Kj(t){const e=t,{installationEntry:n,registrationPromise:r}=await Lp(e);return r?r.catch(console.error):Op(e).catch(console.error),n.fid}/**
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
 */async function Yj(t,e=!1){const n=t;return await Jj(n),(await Op(n,e)).token}async function Jj(t){const{registrationPromise:e}=await Lp(t);e&&await e}/**
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
 */function Xj(t){if(!t||!t.options)throw gd("App Configuration");if(!t.name)throw gd("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw gd(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function gd(t){return vi.create("missing-app-config-values",{valueName:t})}/**
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
 */const r_="installations",Zj="installations-internal",eN=t=>{const e=t.getProvider("app").getImmediate(),n=Xj(e),r=Si(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},tN=t=>{const e=t.getProvider("app").getImmediate(),n=Si(e,r_).getImmediate();return{getId:()=>Kj(n),getToken:i=>Yj(n,i)}};function nN(){vn(new en(r_,eN,"PUBLIC")),vn(new en(Zj,tN,"PRIVATE"))}nN();Ot(Fb,Dp);Ot(Fb,Dp,"esm2020");/**
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
 */const _c="analytics",rN="firebase_id",iN="origin",sN=60*1e3,oN="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Vp="https://www.googletagmanager.com/gtag/js";/**
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
 */const ct=new Fc("@firebase/analytics");/**
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
 */const aN={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new _i("analytics","Analytics",aN);/**
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
 */function lN(t){if(!t.startsWith(Vp)){const e=Tt.create("invalid-gtag-resource",{gtagURL:t});return ct.warn(e.message),""}return t}function i_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function cN(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function uN(t,e){const n=cN("firebase-js-sdk-policy",{createScriptURL:lN}),r=document.createElement("script"),i=`${Vp}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function dN(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function hN(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const u=(await i_(n)).find(d=>d.measurementId===i);u&&await e[u.appId]}}catch(c){ct.error(c)}t("config",i,s)}async function fN(t,e,n,r,i){try{let s=[];if(i&&i.send_to){let o=i.send_to;Array.isArray(o)||(o=[o]);const c=await i_(n);for(const u of o){const d=c.find(g=>g.measurementId===u),f=d&&e[d.appId];if(f)s.push(f);else{s=[];break}}}s.length===0&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){ct.error(s)}}function pN(t,e,n,r){async function i(s,...o){try{if(s==="event"){const[c,u]=o;await fN(t,e,n,c,u)}else if(s==="config"){const[c,u]=o;await hN(t,e,n,r,c,u)}else if(s==="consent"){const[c,u]=o;t("consent",c,u)}else if(s==="get"){const[c,u,d]=o;t("get",c,u,d)}else if(s==="set"){const[c]=o;t("set",c)}else t(s,...o)}catch(c){ct.error(c)}}return i}function mN(t,e,n,r,i){let s=function(...o){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(s=window[i]),window[i]=pN(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function gN(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Vp)&&n.src.includes(t))return n;return null}/**
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
 */const yN=30,vN=1e3;class wN{constructor(e={},n=vN){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const s_=new wN;function xN(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function bN(t){var o;const{appId:e,apiKey:n}=t,r={method:"GET",headers:xN(n)},i=oN.replace("{app-id}",e),s=await fetch(i,r);if(s.status!==200&&s.status!==304){let c="";try{const u=await s.json();(o=u.error)!=null&&o.message&&(c=u.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:c})}return s.json()}async function _N(t,e=s_,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Tt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},c=new TN;return setTimeout(async()=>{c.abort()},sN),o_({appId:r,apiKey:i,measurementId:s},o,c,e)}async function o_(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=s_){var c;const{appId:s,measurementId:o}=t;try{await SN(r,e)}catch(u){if(o)return ct.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw u}try{const u=await bN(t);return i.deleteThrottleMetadata(s),u}catch(u){const d=u;if(!EN(d)){if(i.deleteThrottleMetadata(s),o)return ct.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${d==null?void 0:d.message}]`),{appId:s,measurementId:o};throw u}const f=Number((c=d==null?void 0:d.customData)==null?void 0:c.httpStatus)===503?ty(n,i.intervalMillis,yN):ty(n,i.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return i.setThrottleMetadata(s,g),ct.debug(`Calling attemptFetch again in ${f} millis`),o_(t,g,r,i)}}function SN(t,e){return new Promise((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener(()=>{clearTimeout(s),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function EN(t){if(!(t instanceof rn)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class TN{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function IN(t,e,n,r,i){if(i&&i.global){t("event",n,r);return}else{const s=await e,o={...r,send_to:s};t("event",n,o)}}async function kN(t,e,n,r){if(r&&r.global){const i={};for(const s of Object.keys(n))i[`user_properties.${s}`]=n[s];return t("set",i),Promise.resolve()}else{const i=await e;t("config",i,{update:!0,user_properties:n})}}/**
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
 */async function CN(){if(fw())try{await pw()}catch(t){return ct.warn(Tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return ct.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function AN(t,e,n,r,i,s,o){const c=_N(t);c.then(m=>{n[m.measurementId]=m.appId,t.options.measurementId&&m.measurementId!==t.options.measurementId&&ct.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>ct.error(m)),e.push(c);const u=CN().then(m=>{if(m)return r.getId()}),[d,f]=await Promise.all([c,u]);gN(s)||uN(s,d.measurementId),i("js",new Date);const g=(o==null?void 0:o.config)??{};return g[iN]="firebase",g.update=!0,f!=null&&(g[rN]=f),i("config",d.measurementId,g),d.measurementId}/**
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
 */class RN{constructor(e){this.app=e}_delete(){return delete is[this.app.options.appId],Promise.resolve()}}let is={},Pv=[];const jv={};let yd="dataLayer",PN="gtag",Nv,zp,Dv=!1;function jN(){const t=[];if(hw()&&t.push("This is a browser extension environment."),hT()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,i)=>`(${i+1}) ${r}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});ct.warn(n.message)}}function NN(t,e,n){jN();const r=t.options.appId;if(!r)throw Tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)ct.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(is[r]!=null)throw Tt.create("already-exists",{id:r});if(!Dv){dN(yd);const{wrappedGtag:s,gtagCore:o}=mN(is,Pv,jv,yd,PN);zp=s,Nv=o,Dv=!0}return is[r]=AN(t,Pv,jv,e,Nv,yd,n),new RN(t)}function DN(t=Bf()){t=ke(t);const e=Si(t,_c);return e.isInitialized()?e.getImmediate():MN(t)}function MN(t,e={}){const n=Si(t,_c);if(n.isInitialized()){const i=n.getImmediate();if(Tr(e,n.getOptions()))return i;throw Tt.create("already-initialized")}return n.initialize({options:e})}function LN(t,e,n){t=ke(t),kN(zp,is[t.app.options.appId],e,n).catch(r=>ct.error(r))}function ON(t,e,n,r){t=ke(t),IN(zp,is[t.app.options.appId],e,n,r).catch(i=>ct.error(i))}const Mv="@firebase/analytics",Lv="0.10.22";function VN(){vn(new en(_c,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return NN(r,i,n)},"PUBLIC")),vn(new en("analytics-internal",t,"PRIVATE")),Ot(Mv,Lv),Ot(Mv,Lv,"esm2020");function t(e){try{const n=e.getProvider(_c).getImmediate();return{logEvent:(r,i,s)=>ON(n,r,i,s),setUserProperties:(r,i)=>LN(n,r,i)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}VN();const zN={apiKey:"AIzaSyBlbEXZ9R0uPMZbg_Lip6kq8rWVlEndjiU",authDomain:"placeonix.firebaseapp.com",projectId:"placeonix",storageBucket:"placeonix.firebasestorage.app",messagingSenderId:"923570345439",appId:"1:923570345439:web:5b6a89efc297c7f945206a",measurementId:"G-W83XNJN2MF"},Fp=ww(zN),Zs=GC(Fp),bt=XP(Fp);DN(Fp);const a_=M.createContext(null);function vd(t){const e=(t==null?void 0:t.code)||"";return e.includes("auth/email-already-in-use")?"This email is already registered. Please log in instead.":e.includes("auth/invalid-credential")||e.includes("auth/wrong-password")?"Invalid email or password. Please check your details.":e.includes("auth/user-not-found")?"No account found with this email. Please sign up first.":e.includes("auth/weak-password")?"Password should be at least 6 characters.":e.includes("auth/operation-not-allowed")?"Email/password login is not enabled in Firebase. Enable it in Firebase Console > Authentication > Sign-in method.":e.includes("auth/unauthorized-domain")?"This website domain is not authorized in Firebase. Add placeonix-theta.vercel.app in Firebase Console > Authentication > Settings > Authorized domains.":e.includes("auth/network-request-failed")?"Network error. Please check your internet connection and try again.":e.includes("auth/invalid-email")?"Please enter a valid email address.":`Firebase error: ${e||"unknown error"}. Please try again.`}function FN({children:t}){const[e,n]=M.useState(null),[r,i]=M.useState(null),[s,o]=M.useState(!0);M.useEffect(()=>Mk(Zs,C=>{n(C),o(!1)}),[]),M.useEffect(()=>{if(!e){i(null);return}const S=jn(bt,"users",e.uid);return Np(S,j=>{if(j.exists()){i(j.data());return}const O={email:e.email,branch:"ECE",role:"student",placementReadiness:78,skillsCompleted:8,skillsTarget:15,currentStreak:0,bestStreak:0,mockInterviewScore:0,xp:0,interviewsCompleted:0,createdAt:Qt(),updatedAt:Qt()};pd(S,O,{merge:!0}),i(O)},()=>{i(null)})},[e]);async function c(S,C){try{await jk(Zs,S,C)}catch(j){throw new Error(vd(j))}}async function u({email:S,password:C,branch:j}){try{const O=await Pk(Zs,S,C);try{await pd(jn(bt,"users",O.user.uid),{email:S,branch:j,role:"student",placementReadiness:78,skillsCompleted:0,skillsTarget:15,currentStreak:0,bestStreak:0,mockInterviewScore:0,xp:0,interviewsCompleted:0,createdAt:Qt(),updatedAt:Qt()})}catch{}}catch(O){throw new Error(vd(O))}}async function d(S){try{await Rk(Zs,S)}catch(C){throw new Error(vd(C))}}async function f(S){if(!e)throw new Error("You must be logged in to update your profile.");await pd(jn(bt,"users",e.uid),{...S,email:e.email,updatedAt:Qt()},{merge:!0})}async function g(){await Lk(Zs)}const m=M.useMemo(()=>({user:e,profile:r,loading:s,login:c,signup:u,resetPassword:d,updateUserProfile:f,logout:g}),[e,r,s]);return a.jsx(a_.Provider,{value:m,children:t})}function bn(){const t=M.useContext(a_);if(!t)throw new Error("useAuth must be used inside AuthProvider");return t}const BN=["admin@placeonix.com","prayukthakanchi@gmail.com"],$N=[{icon:A2,label:"Dashboard",id:"dashboard"},{icon:zf,label:"Placement Hub",id:"resources"},{icon:hs,label:"Aptitude",id:"aptitude"},{icon:tc,label:"Coding Practice",id:"coding"},{icon:ew,label:"AI Interview",id:"interview"},{icon:T2,label:"Resume & ATS",id:"resume"},{icon:g2,label:"Analytics",id:"analytics"},{icon:iw,label:"Profile",id:"profile"},{icon:F2,label:"Settings",id:"settings"}];function UN({activePage:t,setActivePage:e,mobileOpen:n,onMobileClose:r}){const{user:i,profile:s,logout:o}=bn(),c=(s==null?void 0:s.placementReadiness)??78,u=i&&BN.includes(i.email),d=[...$N];u&&d.push({icon:B2,label:"Admin Dashboard",id:"admin"});function f(g){e(g),r&&r()}return a.jsxs(a.Fragment,{children:[n&&a.jsx("div",{className:"sidebar-overlay",onClick:r}),a.jsxs("aside",{className:`sidebar${n?" sidebar-mobile-open":""}`,children:[a.jsxs("div",{className:"sidebar-logo",children:[a.jsx("div",{className:"rocket",children:"P"}),a.jsx("span",{className:"sidebar-logo-text",children:"Placeonix"}),a.jsx("button",{className:"sidebar-close-btn",onClick:r,"aria-label":"Close menu",children:a.jsx(sw,{size:18})})]}),a.jsx("nav",{className:"sidebar-nav",children:d.map(g=>a.jsx(WN,{item:g,active:t===g.id,onClick:()=>f(g.id)},g.id))}),a.jsxs("div",{className:"sidebar-progress-card",children:[a.jsxs("div",{className:"sidebar-progress-header",children:[a.jsx("div",{className:"sidebar-progress-icon",children:a.jsx(q2,{size:16,"aria-hidden":"true"})}),a.jsx("div",{children:a.jsx("div",{className:"sidebar-progress-title",children:"Keep Going!"})})]}),a.jsxs("div",{className:"sidebar-progress-sub",children:["Consistency today",a.jsx("br",{}),"Success tomorrow"]}),a.jsx("div",{className:"sidebar-progress-bar-wrap",children:a.jsx("div",{className:"sidebar-progress-bar-fill",style:{width:`${c}%`}})}),a.jsxs("div",{className:"sidebar-progress-pct",children:[c,"%"]})]}),a.jsx("div",{className:"sidebar-bottom",children:a.jsxs("button",{className:"sidebar-logout",type:"button",onClick:o,children:[a.jsx(P2,{className:"nav-icon",size:17,"aria-hidden":"true"}),a.jsx("span",{children:"Logout"})]})})]})]})}function WN({item:t,active:e,onClick:n}){const r=t.icon;return a.jsxs("button",{className:`nav-item ${e?"active":""}`,onClick:n,type:"button",children:[a.jsx(r,{className:"nav-icon",size:17,"aria-hidden":"true"}),a.jsx("span",{children:t.label})]})}function qN({onSearch:t,onMenuToggle:e}){var S;const{user:n,profile:r,logout:i}=bn(),[s,o]=M.useState(""),[c,u]=M.useState(()=>localStorage.getItem("plx_theme")==="dark"),d=(r==null?void 0:r.name)||(n==null?void 0:n.displayName)||((S=n==null?void 0:n.email)==null?void 0:S.split("@")[0])||"Student",f=(r==null?void 0:r.branch)||"Student",g=d.slice(0,1).toUpperCase();function m(){const C=!c;u(C),localStorage.setItem("plx_theme",C?"dark":"light"),document.documentElement.setAttribute("data-theme",C?"dark":"light")}return a.jsxs("header",{className:"topbar",children:[a.jsx("button",{className:"topbar-hamburger",onClick:e,"aria-label":"Open menu",type:"button",children:a.jsx(N2,{size:22})}),a.jsxs("div",{className:"search-bar",children:[a.jsx(rw,{className:"search-icon",size:17,"aria-hidden":"true"}),a.jsx("input",{type:"text",placeholder:"Search notes, skills, jobs, companies...",value:s,onChange:C=>{o(C.target.value),t&&t(C.target.value)}})]}),a.jsxs("div",{className:"topbar-right",children:[a.jsx("button",{className:"topbar-icon-btn",title:"Toggle theme",type:"button",onClick:m,children:c?a.jsx(W2,{size:18,"aria-hidden":"true"}):a.jsx(M2,{size:18,"aria-hidden":"true"})}),a.jsxs("button",{className:"topbar-icon-btn",title:"Notifications",type:"button",children:[a.jsx(y2,{size:18,"aria-hidden":"true"}),a.jsx("span",{className:"notif-badge",children:"3"})]}),a.jsxs("button",{className:"topbar-user",type:"button",onClick:i,title:"Logout",children:[a.jsx("div",{className:"topbar-avatar",children:g}),a.jsxs("span",{className:"topbar-username",children:["Hi ",d,a.jsx("small",{children:f})]})]})]})]})}function HN(){return a.jsxs("footer",{className:"site-footer",children:[a.jsxs("div",{className:"footer-left",children:["For any queries & issues",a.jsx("br",{}),a.jsx("a",{href:"mailto:prayukthakanchi@gmail.com",children:"prayukthakanchi@gmail.com"})]}),a.jsxs("div",{className:"footer-center",children:["Designed & Developed by ",a.jsx("strong",{style:{color:"#6c3ce1"},children:"kanchi prayuktha"})]}),a.jsxs("div",{className:"footer-right",style:{display:"flex",flexDirection:"column",gap:4,alignItems:"flex-end"},children:[a.jsx("strong",{style:{fontSize:13,color:"#374151",marginBottom:2},children:"Know More About Me"}),a.jsx("a",{href:"mailto:prayukthakanchi@gmail.com",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"📧 prayukthakanchi@gmail.com"}),a.jsx("a",{href:"https://www.linkedin.com/in/prayuktha-kanchi",target:"_blank",rel:"noreferrer",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"💼 LinkedIn/prayuktha-kanchi"}),a.jsx("a",{href:"https://github.com/prayukthakanchi-tech",target:"_blank",rel:"noreferrer",style:{color:"#6c3ce1",fontSize:12.5,fontWeight:500},children:"🐙 GitHub/prayukthakanchi-tech"}),a.jsx("span",{style:{fontSize:12,color:"#9ca3af",marginTop:2},children:"© 2026 Kanchi Prayuktha"})]})]})}function GN({value:t,size:e=52}){const r=2*Math.PI*20,i=r-t/100*r;return a.jsxs("div",{className:"circular-progress",style:{width:e,height:e},children:[a.jsxs("svg",{viewBox:"0 0 52 52",width:e,height:e,children:[a.jsx("circle",{className:"track",cx:"26",cy:"26",r:20}),a.jsx("circle",{className:"fill",cx:"26",cy:"26",r:20,strokeDasharray:r,strokeDashoffset:i})]}),a.jsxs("div",{className:"circular-label",children:[t,"%"]})]})}const QN=[{icon:nc,name:"CSE",bg:"#eff6ff",iconBg:"#dbeafe"},{icon:O2,name:"ECE",bg:"#f0fdf4",iconBg:"#dcfce7"},{icon:Q2,name:"EEE",bg:"#fffbeb",iconBg:"#fef3c7"},{icon:R2,name:"IT",bg:"#f0fdf4",iconBg:"#dcfce7"},{icon:G2,name:"ME",bg:"#f9fafb",iconBg:"#f3f4f6"},{icon:w2,name:"CIVIL",bg:"#fff7ed",iconBg:"#ffedd5"},{icon:L2,name:"AERO",bg:"#eff6ff",iconBg:"#dbeafe"},{icon:U2,name:"BME",bg:"#fdf2f8",iconBg:"#fce7f3"},{icon:hs,name:"BT",bg:"#f0fdf4",iconBg:"#d1fae5"}],KN=[{icon:zf,label:"Resources",sub:"Study Materials",bg:"#ede9fe",iconBg:"#ddd6fe"},{icon:hs,label:"Aptitude",sub:"Practice Now",bg:"#fce7f3",iconBg:"#fbcfe8"},{icon:D2,label:"Interview",sub:"Prep Smart",bg:"#fef3c7",iconBg:"#fde68a"},{icon:tc,label:"Coding",sub:"Practice Code",bg:"#dbeafe",iconBg:"#bfdbfe"}],YN=[{icon:nc,title:"Digital Electronics",sub:"ECE Notes",tag:"Notes",tagClass:"notes",bg:"#ede9fe"},{icon:ew,title:"Embedded Systems",sub:"Interview Questions",tag:"Interview",tagClass:"interview",bg:"#fce7f3"},{icon:hs,title:"Aptitude Shortcuts",sub:"Tips & Tricks",tag:"Aptitude",tagClass:"aptitude",bg:"#ede9fe"}],JN=[{task:"Quantitative Aptitude",time:"30 min",done:!0},{task:"DSA Practice",time:"45 min",done:!0},{task:"Digital Electronics Revision",time:"60 min",done:!0}],XN=[{month:"May",day:"20",title:"TCS Ninja",sub:"Aptitude Test"},{month:"May",day:"24",title:"Infosys",sub:"Virtual Interview"}],ZN=[{name:"Data Structures & Algorithms",pct:80,color:"#6c3ce1"},{name:"Aptitude",pct:65,color:"#f97316"},{name:"System Design",pct:45,color:"#3b82f6"},{name:"Communication Skills",pct:70,color:"#22c55e"}];function e4(){var g;const{user:t,profile:e}=bn(),n=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||((g=t==null?void 0:t.email)==null?void 0:g.split("@")[0])||"Student",r=(e==null?void 0:e.placementReadiness)??78,i=(e==null?void 0:e.skillsCompleted)??0,s=(e==null?void 0:e.skillsTarget)??15,o=s?Math.round(i/s*100):0,c=(e==null?void 0:e.currentStreak)??0,u=(e==null?void 0:e.bestStreak)??0,d=(e==null?void 0:e.mockInterviewScore)??0;e==null||e.xp;const f=(e==null?void 0:e.interviewsCompleted)??0;return a.jsxs("div",{children:[a.jsxs("section",{className:"hero-section",children:[a.jsxs("div",{className:"hero-text",children:[a.jsxs("h1",{children:["Hi ",n]}),a.jsx("p",{children:"Let's learn, prepare and get your dream job!"}),a.jsxs("button",{className:"btn-primary",type:"button",children:["Start Learning",a.jsx(td,{size:17,"aria-hidden":"true"})]})]}),a.jsx(t4,{})]}),a.jsxs("div",{className:"stats-grid",children:[a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"#ede9fe"},children:a.jsx(k2,{size:24,"aria-hidden":"true"})}),a.jsx(GN,{value:r}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-label",children:"Placement Readiness"}),a.jsxs("div",{className:"stat-value",children:[r,"%"]}),a.jsx("div",{className:"stat-sub purple",children:"Keep improving!"})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"#dcfce7"},children:a.jsx(nw,{size:24,"aria-hidden":"true"})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-label",children:"Skills Completed"}),a.jsxs("div",{className:"stat-value",children:[i," / ",s]}),a.jsxs("div",{style:{marginTop:6},children:[a.jsx("div",{style:{height:6,background:"#e5e7eb",borderRadius:999,overflow:"hidden"},children:a.jsx("div",{style:{width:`${o}%`,height:"100%",background:"#22c55e",borderRadius:999}})}),a.jsxs("div",{style:{fontSize:11,color:"#6b7280",marginTop:3},children:[o,"% Completed"]})]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"#fff7ed"},children:a.jsx(I2,{size:24,"aria-hidden":"true"})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-label",children:"Current Streak"}),a.jsxs("div",{className:"stat-value",children:[c," Days"]}),a.jsxs("div",{className:"stat-sub orange",children:["Best: ",u," Days"]})]})]}),a.jsxs("div",{className:"stat-card",children:[a.jsx("div",{className:"stat-icon-wrap",style:{background:"#eff6ff"},children:a.jsx(H2,{size:24,"aria-hidden":"true"})}),a.jsxs("div",{className:"stat-info",children:[a.jsx("div",{className:"stat-label",children:"Mock Interview Score"}),a.jsxs("div",{className:"stat-value",children:[d,"%"]}),a.jsxs("div",{className:"stat-sub green",children:[f," interviews completed"]})]})]})]}),a.jsxs("div",{className:"user-progress-strip",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Department"}),a.jsx("strong",{children:(e==null?void 0:e.branch)||"ECE"})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Account"}),a.jsx("strong",{children:t==null?void 0:t.email})]})]}),a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-title",children:"Explore By Department"}),a.jsx("span",{className:"view-all-link",children:"View All"})]}),a.jsx("div",{className:"departments-grid",style:{marginBottom:28},children:QN.map(m=>{const S=m.icon;return a.jsxs("div",{className:"dept-card",style:{background:m.bg},children:[a.jsx("div",{className:"dept-icon-wrap",style:{background:m.iconBg},children:a.jsx(S,{size:22,"aria-hidden":"true"})}),a.jsx("div",{className:"dept-name",children:m.name})]},m.name)})}),a.jsxs("div",{className:"bottom-grid",children:[a.jsxs("div",{children:[a.jsx("div",{className:"section-header",children:a.jsx("span",{className:"section-title",children:"Quick Access"})}),a.jsx("div",{className:"quick-access-grid",children:KN.map(m=>{const S=m.icon;return a.jsxs("div",{className:"quick-card",style:{background:m.bg},children:[a.jsx("div",{className:"quick-icon",style:{background:m.iconBg},children:a.jsx(S,{size:22,"aria-hidden":"true"})}),a.jsx("div",{className:"quick-label",children:m.label}),a.jsx("div",{className:"quick-sub",children:m.sub})]},m.label)})})]}),a.jsxs("div",{children:[a.jsxs("div",{className:"section-header",children:[a.jsx("span",{className:"section-title",children:"Recommended For You"}),a.jsx("span",{className:"view-all-link",children:"View All"})]}),a.jsx("div",{className:"recommended-list",children:YN.map(m=>{const S=m.icon;return a.jsxs("div",{className:"rec-card",children:[a.jsx("div",{className:"rec-thumb",style:{background:m.bg},children:a.jsx(S,{size:22,"aria-hidden":"true"})}),a.jsxs("div",{className:"rec-info",children:[a.jsx("div",{className:"rec-title",children:m.title}),a.jsx("div",{className:"rec-sub",children:m.sub}),a.jsx("span",{className:`rec-tag ${m.tagClass}`,children:m.tag})]}),a.jsx(td,{size:16,color:"#9ca3af","aria-hidden":"true"})]},m.title)})})]})]}),a.jsxs("div",{className:"triple-grid",children:[a.jsxs("div",{className:"plan-card",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[a.jsx("span",{className:"section-title",children:"Today's Plan"}),a.jsx("span",{className:"view-all-link",children:"View Plan"})]}),JN.map(m=>a.jsxs("div",{className:"plan-item",children:[a.jsx("div",{className:"plan-check",children:m.done?"✓":""}),a.jsx("div",{className:"plan-text",children:m.task}),a.jsx("div",{className:"plan-time",children:m.time})]},m.task))]}),a.jsxs("div",{className:"calendar-card",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[a.jsx("span",{className:"section-title",children:"Placement Calendar"}),a.jsx("span",{className:"view-all-link",children:"View All"})]}),XN.map(m=>a.jsxs("div",{className:"cal-item",children:[a.jsxs("div",{className:"cal-date-box",children:[a.jsx("div",{className:"cal-month",children:m.month}),a.jsx("div",{className:"cal-day",children:m.day})]}),a.jsxs("div",{className:"cal-info",children:[a.jsx("div",{className:"cal-title",children:m.title}),a.jsx("div",{className:"cal-sub",children:m.sub})]}),a.jsx(td,{className:"cal-arrow",size:16,"aria-hidden":"true"})]},m.title)),a.jsx("div",{style:{marginTop:14,textAlign:"center"},children:a.jsxs("button",{className:"add-event-btn",type:"button",children:[a.jsx(x2,{size:16,"aria-hidden":"true"}),"+ Add Event"]})})]}),a.jsxs("div",{className:"skill-card",children:[a.jsxs("div",{className:"section-header",style:{marginBottom:14},children:[a.jsx("span",{className:"section-title",children:"Skill Progress"}),a.jsx("span",{className:"view-all-link",children:"View All"})]}),ZN.map(m=>a.jsxs("div",{className:"skill-item",children:[a.jsxs("div",{className:"skill-item-header",children:[a.jsx("span",{className:"skill-name",children:m.name}),a.jsxs("span",{className:"skill-pct",children:[m.pct,"%"]})]}),a.jsx("div",{className:"skill-bar-wrap",children:a.jsx("div",{className:"skill-bar-fill",style:{width:`${m.pct}%`,background:m.color}})})]},m.name))]})]})]})}function t4(){return a.jsx("div",{className:"hero-illustration","aria-hidden":"true",children:a.jsxs("svg",{width:"320",height:"180",viewBox:"0 0 320 180",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"80",y:"90",width:"130",height:"82",rx:"8",fill:"#6c3ce1",opacity:"0.15"}),a.jsx("rect",{x:"86",y:"96",width:"118",height:"70",rx:"5",fill:"#6c3ce1",opacity:"0.25"}),a.jsx("rect",{x:"92",y:"102",width:"106",height:"58",rx:"3",fill:"white",opacity:"0.9"}),a.jsx("rect",{x:"100",y:"112",width:"60",height:"5",rx:"2",fill:"#6c3ce1",opacity:"0.4"}),a.jsx("rect",{x:"100",y:"121",width:"80",height:"4",rx:"2",fill:"#9ca3af",opacity:"0.4"}),a.jsx("rect",{x:"100",y:"129",width:"70",height:"4",rx:"2",fill:"#9ca3af",opacity:"0.3"}),a.jsx("rect",{x:"100",y:"137",width:"50",height:"4",rx:"2",fill:"#6c3ce1",opacity:"0.3"}),a.jsx("rect",{x:"70",y:"172",width:"150",height:"6",rx:"3",fill:"#6c3ce1",opacity:"0.2"}),a.jsx("circle",{cx:"220",cy:"60",r:"22",fill:"#6c3ce1",opacity:"0.2"}),a.jsx("circle",{cx:"220",cy:"55",r:"14",fill:"#6c3ce1",opacity:"0.35"}),a.jsx("path",{d:"M196 110 Q210 90 220 88 Q230 90 244 110",stroke:"#6c3ce1",strokeWidth:"3",fill:"none",opacity:"0.3"}),a.jsx("rect",{x:"240",y:"30",width:"68",height:"52",rx:"8",fill:"white",opacity:"0.85"}),a.jsx("polyline",{points:"250,65 260,52 270,58 280,42 290,48 300,36",stroke:"#6c3ce1",strokeWidth:"2",fill:"none",strokeLinecap:"round"}),a.jsx("circle",{cx:"300",cy:"36",r:"3",fill:"#6c3ce1"}),a.jsx("foreignObject",{x:"178",y:"18",width:"34",height:"34",children:a.jsx(V2,{size:26,color:"#6c3ce1"})}),a.jsx("foreignObject",{x:"20",y:"48",width:"54",height:"28",children:a.jsx(C2,{size:24,color:"#f97316"})})]})})}function n4({title:t,icon:e,description:n}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:"60vh",textAlign:"center",gap:16},children:[a.jsx("div",{style:{width:80,height:80,borderRadius:20,background:"linear-gradient(135deg, #ede9fe, #ddd6fe)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:36},children:e}),a.jsx("h2",{style:{fontFamily:"Syne, sans-serif",fontSize:24,fontWeight:800,color:"#111827",marginBottom:4},children:t}),a.jsx("p",{style:{color:"#6b7280",maxWidth:380,lineHeight:1.6,fontSize:14},children:n||`The ${t} section is coming in the next step. We're building this feature carefully to ensure the best experience.`}),a.jsx("div",{style:{display:"inline-flex",alignItems:"center",gap:8,padding:"8px 20px",background:"#ede9fe",borderRadius:999,color:"#6c3ce1",fontSize:13,fontWeight:600},children:"🔨 Coming in Step 2"})]})}const Bp=["CSE","ECE","EEE","IT","ME","CIVIL","AERO","BME","BT"],$p={CSE:["Software Engineer","Frontend Developer","Backend Developer","Full Stack Developer","Data Engineer","DevOps Engineer"],ECE:["Embedded Systems Engineer","VLSI Engineer","RF Engineer","Signal Processing Engineer","IoT Engineer"],EEE:["Electrical Engineer","Power Systems Engineer","Control Systems Engineer","Instrumentation Engineer"],IT:["IT Analyst","Network Engineer","System Administrator","Software Developer","Cloud Engineer"],ME:["Mechanical Design Engineer","Manufacturing Engineer","Thermal Engineer","Automobile Engineer"],CIVIL:["Structural Engineer","Site Engineer","Project Engineer","Geotechnical Engineer"],AERO:["Aeronautical Engineer","Propulsion Engineer","Avionics Engineer"],BME:["Biomedical Engineer","Clinical Engineer","R&D Engineer","Quality Engineer"],BT:["Biotech Research Associate","Process Engineer","Quality Control Analyst"]},Up=["TCS","Infosys","Wipro","Accenture","Cognizant","Amazon","Google","Microsoft","Qualcomm","Bosch","Medtronic","Biocon","L&T","ISRO","Other"],Wp=["Fresher (0 exp)","Intern","1–2 years exp"],Wt=7;async function ai(t,e){var s,o,c,u,d;const n=e+`

`+t.map(f=>`${f.role}: ${f.content}`).join(`
`),i=await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=AIzaSyDP_wvS3hMQm9zmmMcDdNGva0b85S2l2es",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:n}]}]})})).json();return console.log("GEMINI RESPONSE:",i),((d=(u=(c=(o=(s=i==null?void 0:i.candidates)==null?void 0:s[0])==null?void 0:o.content)==null?void 0:c.parts)==null?void 0:u[0])==null?void 0:d.text)||"No response generated."}function Mt({label:t,value:e,onChange:n,options:r,placeholder:i}){return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[a.jsx("label",{style:{fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:t}),a.jsxs("select",{value:e,onChange:s=>n(s.target.value),style:{padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:10,fontSize:14,fontFamily:"inherit",background:"#fff",color:"var(--text-primary)",outline:"none",cursor:"pointer",transition:"border-color 0.2s"},onFocus:s=>s.target.style.borderColor="var(--purple-primary)",onBlur:s=>s.target.style.borderColor="var(--card-border)",children:[a.jsx("option",{value:"",children:i||"Select..."}),r.map(s=>a.jsx("option",{value:s,children:s},s))]})]})}function An({onClick:t,disabled:e,loading:n,children:r,outline:i,small:s}){const o={fontFamily:"inherit",fontWeight:700,cursor:e||n?"not-allowed":"pointer",borderRadius:999,transition:"all 0.2s",border:"none"},c=s?{padding:"8px 18px",fontSize:13}:{padding:"12px 28px",fontSize:14},u=i?{background:"transparent",color:"var(--purple-primary)",border:"1.5px solid var(--purple-primary)"}:e||n?{background:"#e5e7eb",color:"#9ca3af"}:{background:"var(--purple-primary)",color:"#fff"};return a.jsx("button",{onClick:t,disabled:e||n,style:{...o,...c,...u},onMouseEnter:d=>{!e&&!n&&(d.currentTarget.style.opacity="0.85")},onMouseLeave:d=>d.currentTarget.style.opacity="1",children:n?"⏳ Thinking...":r})}function r4({onClick:t}){return a.jsx("button",{onClick:t,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)",transition:"all 0.2s"},onMouseEnter:e=>e.currentTarget.style.borderColor="var(--purple-primary)",onMouseLeave:e=>e.currentTarget.style.borderColor="var(--card-border)",children:"← Back"})}function sa({text:t}){return a.jsx("div",{style:{fontSize:14,color:"var(--text-secondary)",lineHeight:1.8},children:t.split(`
`).map((e,n)=>e.startsWith("## ")?a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:17,color:"var(--text-primary)",margin:"16px 0 8px"},children:e.slice(3)},n):e.startsWith("### ")?a.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:15,color:"var(--text-primary)",margin:"14px 0 6px"},children:e.slice(4)},n):e.startsWith("- ")||e.startsWith("• ")?a.jsxs("div",{style:{display:"flex",gap:8,marginBottom:3},children:[a.jsx("span",{style:{color:"var(--purple-primary)",fontWeight:700,flexShrink:0},children:"•"}),a.jsx("span",{dangerouslySetInnerHTML:{__html:e.slice(2).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}})]},n):e.trim()===""?a.jsx("div",{style:{height:6}},n):a.jsx("p",{style:{margin:"2px 0"},dangerouslySetInnerHTML:{__html:e.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")}},n))})}function Nn({title:t,subtitle:e,onBack:n}){return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:28},children:[a.jsx(r4,{onClick:n}),a.jsxs("div",{children:[a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",lineHeight:1.2},children:t}),e&&a.jsx("p",{style:{fontSize:13,color:"var(--text-muted)",marginTop:2},children:e})]})]})}function i4({onBack:t}){const[e,n]=M.useState("setup"),[r,i]=M.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)"}),[s,o]=M.useState([]),[c,u]=M.useState([]),[d,f]=M.useState(""),[g,m]=M.useState(0),[S,C]=M.useState(""),[j,O]=M.useState(!1),[E,v]=M.useState(""),[b,P]=M.useState(!1),L=M.useRef(null);M.useEffect(()=>{var T;(T=L.current)==null||T.scrollIntoView({behavior:"smooth"})},[s,j]);const R=`You are an interview preparation coach. You are running a ${Wt}-question diagnostic quiz for a ${r.level} candidate preparing for ${r.company} interview for the role of ${r.role} (${r.dept} branch).

Rules:
- Ask ONE question at a time
- After the candidate answers, give a SHORT encouraging response (1 sentence), then ask the NEXT question
- Questions should cover: self-introduction, technical basics, projects, strengths/weaknesses, situational, company-specific
- After exactly ${Wt} questions and answers, write exactly "QUIZ_DONE" on its own line and nothing else

Format: Just the question text, no numbering. Keep it conversational.`;async function w(){if(!(!r.company||!r.dept||!r.role)){O(!0),n("quiz"),o([]),u([]),m(0);try{const T=await ai([{role:"user",content:"Start the quiz. Ask the first question."}],R);f(T),o([{role:"assistant",content:T}]),m(1)}catch{f("Failed to start. Please check your connection.")}O(!1)}}async function y(){if(!S.trim()||j)return;const T=S.trim();C("");const A=[...c,T];u(A);const _=[...s,{role:"user",content:T}];o(_),O(!0);try{const te=_.map(ve=>({role:ve.role,content:ve.content})),de=await ai(te,R);de.includes("QUIZ_DONE")?(o(ve=>[...ve,{role:"assistant",content:"✅ Quiz complete! Generating your personalised prep plan now..."}]),n("plan"),await I(A)):(o(ve=>[...ve,{role:"assistant",content:de}]),f(de),m(ve=>ve+1))}catch{o(te=>[...te,{role:"assistant",content:"⚠️ Connection issue. Please try again."}])}O(!1)}async function I(T){P(!0),v("");try{const A=T.map((de,ve)=>`Q${ve+1}: ${de}`).join(`
`),_=`Based on this diagnostic quiz, generate a complete interview preparation plan.

Candidate profile:
- Company: ${r.company}
- Branch: ${r.dept}
- Role: ${r.role}
- Level: ${r.level}

Their quiz answers (${T.length} questions):
${A}

Generate a detailed, personalised prep plan with these sections:
## 🎯 Profile Assessment
## 📚 Topics to Study (prioritised based on their answers)
## ❓ Top 10 Questions They'll Likely Face
## 💻 Technical Prep (specific to ${r.dept} and ${r.role})
## 🎤 HR Round Strategy
## 📅 7-Day Study Schedule
## ⚡ ${r.company}-Specific Tips

Be specific to their answers — address their weak areas and build on their strengths.`,te=await ai([{role:"user",content:_}],"You are an expert placement coach for Indian engineering students. Give practical, actionable, specific advice. Use ## for sections, - for bullets, **bold** for key terms.");v(te)}catch{v("Failed to generate plan. Please refresh and try again.")}P(!1)}function k(T){T.key==="Enter"&&!T.shiftKey&&(T.preventDefault(),y())}return e==="setup"?a.jsxs("div",{children:[a.jsx(Nn,{title:"📚 Prepare for Interview",subtitle:"Answer a short quiz — then get your full personalised prep plan",onBack:t}),a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560,boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:20},children:[a.jsx(Mt,{label:"Company *",value:r.company,onChange:T=>i(A=>({...A,company:T})),options:Up,placeholder:"Select company"}),a.jsx(Mt,{label:"Your Branch *",value:r.dept,onChange:T=>i(A=>({...A,dept:T,role:""})),options:Bp,placeholder:"Select branch"}),a.jsx(Mt,{label:"Role *",value:r.role,onChange:T=>i(A=>({...A,role:T})),options:$p[r.dept]||[],placeholder:r.dept?"Select role":"Select branch first"}),a.jsx(Mt,{label:"Level",value:r.level,onChange:T=>i(A=>({...A,level:T})),options:Wp})]}),a.jsxs("div",{style:{background:"var(--purple-xsoft)",border:"1px solid var(--purple-soft)",borderRadius:12,padding:"14px 16px",marginBottom:22},children:[a.jsx("div",{style:{fontWeight:700,fontSize:13,color:"var(--purple-primary)",marginBottom:8},children:"How this works"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[`1️⃣  AI asks you ${Wt} quick questions about yourself`,"2️⃣  You answer naturally — no right or wrong answers","3️⃣  AI generates a full personalised prep plan at the end"].map(T=>a.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)"},children:T},T))})]}),a.jsx(An,{onClick:w,disabled:!r.company||!r.dept||!r.role,loading:j,children:"🚀 Start Quiz"})]})]}):e==="plan"?a.jsxs("div",{children:[a.jsx(Nn,{title:"✨ Your Personalised Prep Plan",subtitle:`${r.company} · ${r.role} · ${r.dept}`,onBack:()=>n("setup")}),a.jsx("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)"},children:b?a.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"var(--text-muted)"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:12},children:"🤖"}),a.jsx("div",{style:{fontWeight:700,fontSize:16,marginBottom:4,color:"var(--text-primary)"},children:"Building your personalised plan..."}),a.jsx("div",{style:{fontSize:13,marginBottom:20},children:"Analysing your quiz answers — takes about 15 seconds"}),a.jsx("div",{style:{height:5,background:"#f3f4f6",borderRadius:999,overflow:"hidden",maxWidth:300,margin:"0 auto"},children:a.jsx("div",{style:{height:"100%",background:"linear-gradient(90deg, var(--purple-primary), #8b5cf6)",borderRadius:999,width:"70%",animation:"shimmer 1.5s infinite alternate"}})})]}):a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:22,paddingBottom:16,borderBottom:"1px solid #f3f4f6"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--purple-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:"🤖"}),a.jsxs("div",{style:{flex:1},children:[a.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:["AI Prep Plan — ",r.company," · ",r.role]}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:["Based on your ",Wt,"-question diagnostic quiz"]})]}),a.jsx(An,{small:!0,outline:!0,onClick:()=>{n("setup"),v(""),o([]),u([])},children:"🔄 Redo"})]}),a.jsx(sa,{text:E})]})}),a.jsx("style",{children:"@keyframes shimmer { from { width: 40% } to { width: 90% } }"})]}):a.jsxs("div",{children:[a.jsx(Nn,{title:`📝 Diagnostic Quiz — ${r.company}`,subtitle:`Question ${Math.min(g,Wt)} of ${Wt} · ${r.role}`,onBack:()=>n("setup")}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:6},children:[a.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600},children:"Quiz Progress"}),a.jsxs("span",{style:{fontSize:12,color:"var(--purple-primary)",fontWeight:700},children:[Math.min(g,Wt),"/",Wt]})]}),a.jsx("div",{style:{height:6,background:"#f3f4f6",borderRadius:999,overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",background:"var(--purple-primary)",borderRadius:999,width:`${Math.min(g,Wt)/Wt*100}%`,transition:"width 0.4s ease"}})})]}),a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:"16px 16px 0 0",padding:"20px",minHeight:340,maxHeight:420,overflowY:"auto",display:"flex",flexDirection:"column",gap:14},children:[s.map((T,A)=>a.jsxs("div",{style:{display:"flex",gap:10,flexDirection:T.role==="user"?"row-reverse":"row",alignItems:"flex-start"},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:999,flexShrink:0,background:T.role==="user"?"var(--purple-primary)":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:T.role==="user"?"👤":"🤖"}),a.jsx("div",{style:{maxWidth:"78%",padding:"11px 15px",borderRadius:T.role==="user"?"16px 4px 16px 16px":"4px 16px 16px 16px",background:T.role==="user"?"var(--purple-primary)":"#f9fafb",border:T.role==="user"?"none":"1px solid var(--card-border)"},children:T.role==="user"?a.jsx("p",{style:{margin:0,fontSize:14,color:"#fff",lineHeight:1.6},children:T.content}):a.jsx(sa,{text:T.content})})]},A)),j&&a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:999,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:"🤖"}),a.jsx("div",{style:{padding:"11px 16px",background:"#f9fafb",border:"1px solid var(--card-border)",borderRadius:"4px 16px 16px 16px",display:"flex",gap:5,alignItems:"center"},children:[0,1,2].map(T=>a.jsx("div",{style:{width:7,height:7,borderRadius:999,background:"var(--purple-primary)",opacity:.6,animation:`bounce 1s infinite ${T*.18}s`}},T))})]}),a.jsx("div",{ref:L})]}),a.jsxs("div",{style:{display:"flex",gap:10,padding:"14px 16px",background:"#fff",border:"1.5px solid var(--card-border)",borderTop:"1px solid #f3f4f6",borderRadius:"0 0 16px 16px"},children:[a.jsx("textarea",{value:S,onChange:T=>C(T.target.value),onKeyDown:k,rows:2,disabled:j,placeholder:"Type your answer... (Enter to send)",style:{flex:1,padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:12,fontSize:14,fontFamily:"inherit",resize:"none",outline:"none",lineHeight:1.5,color:"var(--text-primary)",background:j?"#f9fafb":"#fff",transition:"border-color 0.2s"},onFocus:T=>T.target.style.borderColor="var(--purple-primary)",onBlur:T=>T.target.style.borderColor="var(--card-border)"}),a.jsx("button",{onClick:y,disabled:!S.trim()||j,style:{width:46,height:46,borderRadius:12,border:"none",alignSelf:"flex-end",background:!S.trim()||j?"#e5e7eb":"var(--purple-primary)",color:!S.trim()||j?"#9ca3af":"#fff",cursor:!S.trim()||j?"not-allowed":"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]}),a.jsx("style",{children:"@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }"})]})}function s4({onBack:t}){const[e,n]=M.useState("setup"),[r,i]=M.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)",rounds:7}),[s,o]=M.useState([]),[c,u]=M.useState(""),[d,f]=M.useState(!1),[g,m]=M.useState(0),[S,C]=M.useState(""),j=M.useRef(null);M.useEffect(()=>{var b;(b=j.current)==null||b.scrollIntoView({behavior:"smooth"})},[s,d]);const O=`You are a professional interviewer at ${r.company} for the role of ${r.role} (${r.dept}, ${r.level}).

Rules:
- Ask ONE question at a time
- After each answer, give 1–2 sentence feedback (honest but encouraging), then ask next question  
- Mix technical and HR questions relevant to ${r.dept} and ${r.role}
- After exactly ${r.rounds} questions and their answers, write "INTERVIEW_COMPLETE" on its own line, then give a detailed performance review with score /10 per category (Communication, Technical, Confidence, Overall)

Format: feedback on answer (if any), then next question. Keep it professional and natural.`;async function E(){f(!0),n("live"),o([]),m(0);try{const b=await ai([{role:"user",content:`Start. Briefly introduce yourself as ${r.company} interviewer and ask your first question.`}],O);o([{role:"assistant",content:b}]),m(1)}catch{o([{role:"assistant",content:"Failed to start. Please check connection."}])}f(!1)}async function v(){if(!c.trim()||d)return;const b=c.trim();u("");const P=[...s,{role:"user",content:b}];o(P),f(!0);try{const L=await ai(P.map(R=>({role:R.role,content:R.content})),O);if(L.includes("INTERVIEW_COMPLETE")){const[R,w]=L.split("INTERVIEW_COMPLETE");o(y=>[...y,{role:"assistant",content:R.trim()}]),C(w.trim()),n("result")}else o(R=>[...R,{role:"assistant",content:L}]),m(R=>R+1)}catch{o(L=>[...L,{role:"assistant",content:"⚠️ Connection issue. Try again."}])}f(!1)}return e==="setup"?a.jsxs("div",{children:[a.jsx(Nn,{title:"🎙️ Live Mock Interview",subtitle:"AI interviews you in real time, gives feedback after each answer",onBack:t}),a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:16},children:[a.jsx(Mt,{label:"Company *",value:r.company,onChange:b=>i(P=>({...P,company:b})),options:Up,placeholder:"Select"}),a.jsx(Mt,{label:"Branch *",value:r.dept,onChange:b=>i(P=>({...P,dept:b,role:""})),options:Bp,placeholder:"Select"}),a.jsx(Mt,{label:"Role *",value:r.role,onChange:b=>i(P=>({...P,role:b})),options:$p[r.dept]||[],placeholder:r.dept?"Select role":"Pick branch first"}),a.jsx(Mt,{label:"Level",value:r.level,onChange:b=>i(P=>({...P,level:b})),options:Wp})]}),a.jsxs("div",{style:{marginBottom:22},children:[a.jsx("label",{style:{fontSize:13,fontWeight:600,color:"var(--text-secondary)",display:"block",marginBottom:8},children:"Number of Questions"}),a.jsx("div",{style:{display:"flex",gap:8},children:[5,7,10].map(b=>a.jsxs("button",{onClick:()=>i(P=>({...P,rounds:b})),style:{padding:"8px 20px",borderRadius:999,border:"1.5px solid",borderColor:r.rounds===b?"var(--purple-primary)":"var(--card-border)",background:r.rounds===b?"var(--purple-xsoft)":"#fff",color:r.rounds===b?"var(--purple-primary)":"var(--text-secondary)",fontFamily:"inherit",fontSize:14,fontWeight:700,cursor:"pointer"},children:[b," Q"]},b))})]}),a.jsx(An,{onClick:E,disabled:!r.company||!r.dept||!r.role,loading:d,children:"🎙️ Start Interview"})]})]}):e==="result"?a.jsxs("div",{children:[a.jsx(Nn,{title:"🏆 Interview Complete",onBack:()=>{n("setup"),o([]),C("")}}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #ede9fe, #f5f3ff)",border:"1.5px solid var(--purple-soft)",borderRadius:16,padding:"28px",marginBottom:20},children:[a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:18,paddingBottom:14,borderBottom:"1px solid rgba(108,60,225,0.15)"},children:[a.jsx("div",{style:{width:44,height:44,borderRadius:12,background:"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:22},children:"🤖"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:17,color:"var(--text-primary)"},children:"Performance Review"}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[r.company," · ",r.role," · ",r.rounds," questions"]})]})]}),a.jsx(sa,{text:S})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx(An,{onClick:()=>{n("setup"),o([]),C("")},children:"🔄 Try Again"}),a.jsx(An,{outline:!0,onClick:t,children:"← Back"})]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"calc(100vh - 180px)",minHeight:520},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14,flexShrink:0},children:[a.jsx("div",{style:{width:10,height:10,borderRadius:999,background:"#22c55e",boxShadow:"0 0 0 3px #dcfce7"}}),a.jsxs("span",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:700,fontSize:15,color:"var(--text-primary)"},children:["Live — ",r.company," · ",r.role]}),a.jsxs("span",{style:{marginLeft:"auto",fontSize:13,color:"var(--text-muted)",background:"#f3f4f6",padding:"3px 12px",borderRadius:999,fontWeight:600},children:["Q ",Math.min(g,r.rounds),"/",r.rounds]})]}),a.jsxs("div",{style:{flex:1,overflowY:"auto",display:"flex",flexDirection:"column",gap:14,padding:"20px",background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:"16px 16px 0 0"},children:[s.map((b,P)=>a.jsxs("div",{style:{display:"flex",gap:10,flexDirection:b.role==="user"?"row-reverse":"row",alignItems:"flex-start"},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:999,flexShrink:0,background:b.role==="user"?"var(--purple-primary)":"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center",fontSize:15},children:b.role==="user"?"👤":"🤖"}),a.jsx("div",{style:{maxWidth:"78%",padding:"11px 15px",borderRadius:b.role==="user"?"16px 4px 16px 16px":"4px 16px 16px 16px",background:b.role==="user"?"var(--purple-primary)":"#f9fafb",border:b.role==="user"?"none":"1px solid var(--card-border)"},children:b.role==="user"?a.jsx("p",{style:{margin:0,fontSize:14,color:"#fff",lineHeight:1.6},children:b.content}):a.jsx(sa,{text:b.content})})]},P)),d&&a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("div",{style:{width:32,height:32,borderRadius:999,background:"#f3f4f6",display:"flex",alignItems:"center",justifyContent:"center"},children:"🤖"}),a.jsx("div",{style:{padding:"12px 16px",background:"#f9fafb",border:"1px solid var(--card-border)",borderRadius:"4px 16px 16px 16px",display:"flex",gap:5},children:[0,1,2].map(b=>a.jsx("div",{style:{width:7,height:7,borderRadius:999,background:"var(--purple-primary)",opacity:.6,animation:`bounce 1s infinite ${b*.18}s`}},b))})]}),a.jsx("div",{ref:j})]}),a.jsxs("div",{style:{display:"flex",gap:10,padding:"14px 16px",background:"#fff",border:"1.5px solid var(--card-border)",borderTop:"1px solid #f3f4f6",borderRadius:"0 0 16px 16px",flexShrink:0},children:[a.jsx("textarea",{value:c,onChange:b=>u(b.target.value),onKeyDown:b=>{b.key==="Enter"&&!b.shiftKey&&(b.preventDefault(),v())},rows:2,disabled:d,placeholder:"Type your answer... (Enter to send)",style:{flex:1,padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:12,fontSize:14,fontFamily:"inherit",resize:"none",outline:"none",color:"var(--text-primary)",background:d?"#f9fafb":"#fff"},onFocus:b=>b.target.style.borderColor="var(--purple-primary)",onBlur:b=>b.target.style.borderColor="var(--card-border)"}),a.jsx("button",{onClick:v,disabled:!c.trim()||d,style:{width:46,height:46,borderRadius:12,border:"none",alignSelf:"flex-end",background:!c.trim()||d?"#e5e7eb":"var(--purple-primary)",color:!c.trim()||d?"#9ca3af":"#fff",cursor:!c.trim()||d?"not-allowed":"pointer",fontSize:20,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:"↑"})]}),a.jsx("style",{children:"@keyframes bounce{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}"})]})}function o4({onBack:t}){const[e,n]=M.useState("setup"),[r,i]=M.useState({company:"",dept:"",role:"",level:"Fresher (0 exp)"}),[s,o]=M.useState([]),[c,u]=M.useState({}),[d,f]=M.useState(!1),[g,m]=M.useState(!1),[S,C]=M.useState("");async function j(){f(!0),n("test"),o([]),u({});try{const v=`Generate exactly 8 interview questions for a ${r.level} candidate applying to ${r.company} for the role of ${r.role} (${r.dept} branch).

Mix: 3 technical questions, 2 HR/behavioral, 2 situational, 1 company-specific.

Return ONLY a JSON array of 8 strings like:
["Question 1?", "Question 2?", ..., "Question 8?"]

No explanation, no markdown, just the JSON array.`,P=(await ai([{role:"user",content:v}],"Return only valid JSON. No markdown. No explanation.")).replace(/```json|```/g,"").trim(),L=JSON.parse(P);o(Array.isArray(L)?L.slice(0,8):[])}catch{o(["Tell me about yourself.","What are your strengths and weaknesses?","Why do you want to join "+r.company+"?","Describe a challenging project you worked on.","Where do you see yourself in 5 years?","How do you handle pressure?",`What do you know about ${r.company}?`,"Do you have any questions for us?"])}f(!1)}async function O(){m(!0),n("result");try{const v=s.map((L,R)=>`Q${R+1}: ${L}
A${R+1}: ${c[R]||"(No answer given)"}`).join(`

`),b=`You are evaluating a mock interview for ${r.company} — ${r.role} (${r.dept}, ${r.level}).

Questions and answers:
${v}

Give a detailed evaluation:
## 📊 Overall Score: X/10

## ✅ What They Did Well

## ⚠️ Areas to Improve

## 🎯 Question-by-Question Feedback
(Brief feedback on each answer)

## 📚 Study Recommendations

## 💪 Final Verdict`,P=await ai([{role:"user",content:b}],"You are an expert interview evaluator. Be honest, specific, and encouraging.");C(P)}catch{C("Failed to generate score. Please try again.")}m(!1)}const E=Object.values(c).filter(v=>v==null?void 0:v.trim()).length;return e==="setup"?a.jsxs("div",{children:[a.jsx(Nn,{title:"📋 Scored Mock Test",subtitle:"Answer all questions, then get a detailed score and feedback",onBack:t}),a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",maxWidth:560},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,marginBottom:22},children:[a.jsx(Mt,{label:"Company *",value:r.company,onChange:v=>i(b=>({...b,company:v})),options:Up,placeholder:"Select"}),a.jsx(Mt,{label:"Branch *",value:r.dept,onChange:v=>i(b=>({...b,dept:v,role:""})),options:Bp,placeholder:"Select"}),a.jsx(Mt,{label:"Role *",value:r.role,onChange:v=>i(b=>({...b,role:v})),options:$p[r.dept]||[],placeholder:r.dept?"Select role":"Pick branch first"}),a.jsx(Mt,{label:"Level",value:r.level,onChange:v=>i(b=>({...b,level:v})),options:Wp})]}),a.jsx("div",{style:{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:10,padding:"12px 16px",marginBottom:22,fontSize:13,color:"#166534"},children:"💡 8 questions generated by AI for your specific company + role. Answer all of them, submit, and get scored."}),a.jsx(An,{onClick:j,disabled:!r.company||!r.dept||!r.role,loading:d,children:"📋 Generate Questions"})]})]}):e==="test"?a.jsxs("div",{children:[a.jsx(Nn,{title:`📋 Mock Test — ${r.company}`,subtitle:`${r.role} · ${E}/${s.length} answered`,onBack:()=>n("setup")}),d?a.jsxs("div",{style:{textAlign:"center",padding:"60px",color:"var(--text-muted)"},children:[a.jsx("div",{style:{fontSize:36,marginBottom:10},children:"🤖"}),a.jsxs("div",{style:{fontWeight:600},children:["Generating questions for ",r.company,"..."]})]}):a.jsxs("div",{children:[s.map((v,b)=>{var P,L;return a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"20px 22px",marginBottom:14},children:[a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:12,alignItems:"flex-start"},children:[a.jsx("span",{style:{width:26,height:26,borderRadius:999,background:(P=c[b])!=null&&P.trim()?"var(--purple-primary)":"var(--purple-soft)",color:(L=c[b])!=null&&L.trim()?"#fff":"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0},children:b+1}),a.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)",lineHeight:1.6,margin:0},children:v})]}),a.jsx("textarea",{value:c[b]||"",onChange:R=>u(w=>({...w,[b]:R.target.value})),placeholder:"Type your answer here...",rows:3,style:{width:"100%",padding:"10px 14px",border:"1.5px solid var(--card-border)",borderRadius:10,fontSize:13.5,fontFamily:"inherit",resize:"vertical",outline:"none",lineHeight:1.6,color:"var(--text-primary)",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:R=>R.target.style.borderColor="var(--purple-primary)",onBlur:R=>R.target.style.borderColor="var(--card-border)"})]},b)}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8},children:[a.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:[E," of ",s.length," answered"]}),a.jsx(An,{onClick:O,disabled:E===0,children:"Submit & Get Score →"})]})]})]}):a.jsxs("div",{children:[a.jsx(Nn,{title:"📊 Your Score & Feedback",onBack:()=>{n("setup"),C("")}}),a.jsx("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"28px",marginBottom:20},children:g?a.jsxs("div",{style:{textAlign:"center",padding:"48px 20px",color:"var(--text-muted)"},children:[a.jsx("div",{style:{fontSize:40,marginBottom:10},children:"🤖"}),a.jsx("div",{style:{fontWeight:700,fontSize:16,color:"var(--text-primary)",marginBottom:4},children:"Evaluating your answers..."}),a.jsx("div",{style:{fontSize:13},children:"Takes about 15 seconds"})]}):a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",marginBottom:20,paddingBottom:14,borderBottom:"1px solid #f3f4f6"},children:[a.jsx("div",{style:{width:40,height:40,borderRadius:10,background:"var(--purple-soft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20},children:"🤖"}),a.jsxs("div",{children:[a.jsxs("div",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:["Evaluation — ",r.company," · ",r.role]}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)"},children:[r.dept," · ",r.level]})]})]}),a.jsx(sa,{text:S})]})}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx(An,{onClick:()=>{n("setup"),C("")},children:"🔄 Try Again"}),a.jsx(An,{outline:!0,onClick:t,children:"← Back"})]})]})}function a4({onBack:t}){const[e,n]=M.useState(null);return e==="live"?a.jsx(s4,{onBack:()=>n(null)}):e==="scored"?a.jsx(o4,{onBack:()=>n(null)}):a.jsxs("div",{children:[a.jsx(Nn,{title:"🎤 Attend Interview",subtitle:"Choose how you want to practice",onBack:t}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:18,maxWidth:720},children:[a.jsxs("div",{onClick:()=>n("live"),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.22s",boxShadow:"0 2px 8px rgba(0,0,0,0.04)"},onMouseEnter:r=>{r.currentTarget.style.borderColor="var(--purple-primary)",r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow="0 10px 28px rgba(108,60,225,0.12)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="var(--card-border)",r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.04)"},children:[a.jsx("div",{style:{width:54,height:54,borderRadius:16,background:"var(--purple-xsoft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:16},children:"🎙️"}),a.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"var(--text-primary)",marginBottom:8},children:"Live Interview"}),a.jsx("p",{style:{fontSize:13.5,color:"var(--text-muted)",lineHeight:1.7,marginBottom:18},children:"AI asks questions one by one. You answer. AI gives brief feedback after each answer, then a full review at the end."}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:18},children:["Real-time feedback","Conversational","Score /10"].map(r=>a.jsx("span",{style:{fontSize:11,fontWeight:700,background:"var(--purple-soft)",color:"var(--purple-primary)",padding:"3px 9px",borderRadius:999},children:r},r))}),a.jsx("div",{style:{color:"var(--purple-primary)",fontWeight:700,fontSize:14},children:"Start Live →"})]}),a.jsxs("div",{onClick:()=>n("scored"),style:{background:"linear-gradient(145deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:18,padding:"28px 24px",cursor:"pointer",transition:"all 0.22s",boxShadow:"0 4px 18px rgba(108,60,225,0.22)"},onMouseEnter:r=>{r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow="0 14px 40px rgba(108,60,225,0.32)"},onMouseLeave:r=>{r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 4px 18px rgba(108,60,225,0.22)"},children:[a.jsx("div",{style:{width:54,height:54,borderRadius:16,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:28,marginBottom:16},children:"📋"}),a.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"#fff",marginBottom:8},children:"Scored Mock Test"}),a.jsx("p",{style:{fontSize:13.5,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:18},children:"AI generates 8 questions for your role. You answer all of them. Submit at the end to get a full score and detailed feedback."}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:5,marginBottom:18},children:["8 Questions","Full score","Q-by-Q feedback"].map(r=>a.jsx("span",{style:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.2)",color:"#fff",padding:"3px 9px",borderRadius:999},children:r},r))}),a.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14},children:"Start Test →"})]})]})]})}function l4(){const[t,e]=M.useState(null);return t==="prepare"?a.jsx(i4,{onBack:()=>e(null)}):t==="attend"?a.jsx(a4,{onBack:()=>e(null)}):a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:32},children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"var(--text-primary)",marginBottom:6},children:"🤖 AI Interview"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:15},children:"Smart Interview Practice For Placements"})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20,maxWidth:820,marginBottom:36},children:[a.jsxs("div",{onClick:()=>e("prepare"),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:20,padding:"32px 28px",cursor:"pointer",transition:"all 0.25s",boxShadow:"0 2px 8px rgba(0,0,0,0.05)"},onMouseEnter:n=>{n.currentTarget.style.borderColor="var(--purple-primary)",n.currentTarget.style.transform="translateY(-4px)",n.currentTarget.style.boxShadow="0 12px 36px rgba(108,60,225,0.13)"},onMouseLeave:n=>{n.currentTarget.style.borderColor="var(--card-border)",n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 2px 8px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{width:64,height:64,borderRadius:18,background:"var(--purple-xsoft)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,marginBottom:18},children:"📚"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:21,color:"var(--text-primary)",marginBottom:8},children:"Prepare for Interview"}),a.jsxs("p",{style:{fontSize:14,color:"var(--text-muted)",lineHeight:1.7,marginBottom:18},children:["AI asks you a ",a.jsx("strong",{style:{color:"var(--text-primary)"},children:"quick quiz"})," first to understand you, then generates a ",a.jsx("strong",{style:{color:"var(--text-primary)"},children:"full personalised prep plan"})," with topics, questions, and a 7-day schedule."]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22},children:["Quiz first","Then full plan","7-Day schedule","Company-specific"].map(n=>a.jsx("span",{style:{fontSize:11,fontWeight:700,background:"var(--purple-soft)",color:"var(--purple-primary)",padding:"3px 10px",borderRadius:999},children:n},n))}),a.jsx("div",{style:{color:"var(--purple-primary)",fontWeight:700,fontSize:14},children:"Start Preparing →"})]}),a.jsxs("div",{onClick:()=>e("attend"),style:{background:"linear-gradient(145deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:20,padding:"32px 28px",cursor:"pointer",transition:"all 0.25s",boxShadow:"0 4px 20px rgba(108,60,225,0.25)"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-4px)",n.currentTarget.style.boxShadow="0 16px 48px rgba(108,60,225,0.35)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 20px rgba(108,60,225,0.25)"},children:[a.jsx("div",{style:{width:64,height:64,borderRadius:18,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:32,marginBottom:18},children:"🎤"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:21,color:"#fff",marginBottom:8},children:"Attend Interview"}),a.jsxs("p",{style:{fontSize:14,color:"rgba(255,255,255,0.85)",lineHeight:1.7,marginBottom:18},children:["Choose ",a.jsx("strong",{style:{color:"#fff"},children:"Live"})," (AI interviews in real time with per-answer feedback) or ",a.jsx("strong",{style:{color:"#fff"},children:"Scored Mock"})," (answer all questions, get full score at end)."]}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:22},children:["Live Interview","Scored Mock","Score /10","Any Company"].map(n=>a.jsx("span",{style:{fontSize:11,fontWeight:700,background:"rgba(255,255,255,0.2)",color:"#fff",padding:"3px 10px",borderRadius:999},children:n},n))}),a.jsx("div",{style:{color:"#fff",fontWeight:700,fontSize:14},children:"Choose Mode →"})]})]}),a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"24px 28px"},children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:16,color:"var(--text-primary)",marginBottom:18},children:"⚡ What happens in each mode"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:20},children:[{icon:"📚",title:"Prepare",steps:["Select company, branch, role",`AI quizzes you (${Wt} quick questions)`,"AI builds personalised prep plan","Topics, likely Qs, 7-day schedule"]},{icon:"🎤",title:"Attend",steps:["Choose Live or Scored Mock","For Live: answer one Q at a time","For Scored: answer all 8 Qs, then submit","Get score, feedback, and improvement tips"]}].map(n=>a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",gap:8,alignItems:"center",marginBottom:10},children:[a.jsx("span",{style:{fontSize:18},children:n.icon}),a.jsx("span",{style:{fontWeight:700,fontSize:14,color:"var(--text-primary)"},children:n.title})]}),n.steps.map((r,i)=>a.jsxs("div",{style:{display:"flex",gap:8,marginBottom:6,alignItems:"flex-start"},children:[a.jsx("span",{style:{width:18,height:18,borderRadius:999,background:"var(--purple-soft)",color:"var(--purple-primary)",fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:1},children:i+1}),a.jsx("span",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5},children:r})]},i))]},n.title))})]})]})}const Co={quant:[{id:1,q:"A train 125m long passes a pole in 5 seconds. What is the speed of the train?",options:["25 m/s","30 m/s","20 m/s","15 m/s"],ans:0,explanation:"Speed = Distance / Time = 125 / 5 = 25 m/s"},{id:2,q:"If 20% of a number is 80, what is 35% of the number?",options:["120","140","160","180"],ans:1,explanation:"20% = 80 → Number = 400. 35% of 400 = 140"},{id:3,q:"A shopkeeper buys an item for ₹800 and sells it for ₹1000. What is the profit percentage?",options:["20%","25%","15%","30%"],ans:1,explanation:"Profit = 200. Profit% = (200/800) × 100 = 25%"},{id:4,q:"The ratio of boys to girls in a class is 3:2. If there are 30 students, how many are boys?",options:["12","15","18","20"],ans:2,explanation:"Boys = (3/5) × 30 = 18"},{id:5,q:"What is the compound interest on ₹10,000 at 10% p.a. for 2 years?",options:["₹2000","₹2100","₹1900","₹2500"],ans:1,explanation:"CI = 10000 × (1.1)² - 10000 = 12100 - 10000 = ₹2100"},{id:6,q:"A can do a piece of work in 10 days, B can do it in 15 days. In how many days can they finish it together?",options:["5 days","6 days","8 days","12 days"],ans:1,explanation:"Combined rate = 1/10 + 1/15 = 1/6. Days = 6"},{id:7,q:"What is the LCM of 12, 18, and 24?",options:["36","48","72","144"],ans:2,explanation:"LCM(12,18,24) = 72"},{id:8,q:"The average of 5 numbers is 30. If one number is removed, the average becomes 25. What was the removed number?",options:["50","55","45","60"],ans:0,explanation:"Sum of 5 = 150. Sum of 4 = 100. Removed = 50"}],logical:[{id:1,q:"In a certain code, MANGO is written as NBOHR. How is APPLE written in that code?",options:["BQQMF","ARQMF","BQPMF","BRQNF"],ans:0,explanation:"Each letter is shifted by +1. A→B, P→Q, P→Q, L→M, E→F = BQQMF"},{id:2,q:"Find the missing number: 2, 6, 12, 20, 30, ?",options:["40","42","44","46"],ans:1,explanation:"Differences: 4,6,8,10,12. Next = 30+12 = 42"},{id:3,q:"If all cats are dogs and some dogs are rats, which conclusion is definite?",options:["Some cats are rats","All dogs are cats","Some cats are not rats","Some cats are dogs"],ans:3,explanation:"Since all cats are dogs, some cats are definitely dogs."},{id:4,q:"A is the father of B. B is the sister of C. C is the mother of D. What is A to D?",options:["Uncle","Grandfather","Father","Cousin"],ans:1,explanation:"A→B→C→D. A is father of B (mother of D), so A is maternal grandfather of D."},{id:5,q:'Which number replaces "?" in: 3, 7, 15, 31, ?',options:["47","53","63","61"],ans:2,explanation:"Pattern: ×2+1. 3→7→15→31→63"},{id:6,q:"Arrange in meaningful order: (1) Sentence (2) Letter (3) Word (4) Paragraph",options:["2,3,1,4","1,2,3,4","3,2,1,4","2,1,3,4"],ans:0,explanation:"Letter → Word → Sentence → Paragraph (2,3,1,4)"},{id:7,q:"If FRIEND is coded as HUMJTK, then CANDLE is coded as?",options:["EDRPOI","EDRPNF","DCQPMI","FCPFNH"],ans:0,explanation:"Each letter is shifted by +2. C+2=E, A+2=C... = EDRPOI"},{id:8,q:`Pointing to a girl, Ram says "She is the daughter of my grandfather's only son." How is the girl related to Ram?`,options:["Sister","Cousin","Niece","Daughter"],ans:0,explanation:"Grandfather's only son = Ram's father. Father's daughter = Ram's sister."}],verbal:[{id:1,q:"Choose the word most similar in meaning to EPHEMERAL:",options:["Eternal","Transient","Permanent","Robust"],ans:1,explanation:"Ephemeral means lasting for a very short time. Transient = passing quickly."},{id:2,q:"Choose the ANTONYM of BENEVOLENT:",options:["Kind","Generous","Malevolent","Charitable"],ans:2,explanation:"Benevolent = kind/generous. Antonym = Malevolent (wishing harm)."},{id:3,q:"Fill the blank: The manager was ______ about the team's performance.",options:["elated","apathetic","dubious","skeptical"],ans:0,explanation:'"Elated" means extremely happy/excited, fitting positive context.'},{id:4,q:"Identify the grammatically correct sentence:",options:["She don't know the answer.","They was playing cricket.","He has been working since morning.","I goes to school daily."],ans:2,explanation:'"Has been working since" is the correct present perfect continuous form.'},{id:5,q:"Choose the word that best fits: The new policy was met with widespread _______ from employees.",options:["approval","opposition","indifference","celebration"],ans:1,explanation:'"Opposition" means resistance/disagreement, fitting "met with" negative context.'},{id:6,q:"PAUCITY means:",options:["Abundance","Scarcity","Clarity","Simplicity"],ans:1,explanation:"Paucity = scarcity, lack of something."},{id:7,q:"Choose the correct spelling:",options:["Accomodation","Accommodation","Acommodation","Acomodation"],ans:1,explanation:"Correct: Accommodation (double c, double m)."},{id:8,q:'The idiom "bite the bullet" means:',options:["To eat quickly","To endure a painful situation","To be aggressive","To make a quick decision"],ans:1,explanation:"To bite the bullet = to endure a painful or difficult situation bravely."}]},l_=[{id:"quant",label:"Quantitative",icon:"🔢",color:"#6c3ce1",bg:"#ede9fe",desc:"8 questions on numbers, percentages, profit/loss, time & work, averages"},{id:"logical",label:"Logical Reasoning",icon:"🧩",color:"#f97316",bg:"#fff7ed",desc:"8 questions on coding-decoding, series, syllogisms, blood relations"},{id:"verbal",label:"Verbal Ability",icon:"📝",color:"#3b82f6",bg:"#eff6ff",desc:"8 questions on synonyms, antonyms, grammar, reading comprehension"}];function Fh({q:t,index:e,submitted:n,userAnswer:r,onAnswer:i}){const s=r!==void 0,o=r===t.ans;return a.jsxs("div",{style:{background:"#fff",border:`1.5px solid ${n&&o?"#86efac":n&&s&&!o?"#fca5a5":"var(--card-border)"}`,borderRadius:14,padding:"20px 22px",marginBottom:16,boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"border-color 0.2s"},children:[a.jsxs("div",{style:{display:"flex",gap:12,marginBottom:14},children:[a.jsx("span",{style:{width:26,height:26,borderRadius:999,background:n?o&&s?"#22c55e":!o&&s?"#ef4444":"#e5e7eb":"var(--purple-soft)",color:n?s?"#fff":"var(--text-muted)":"var(--purple-primary)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,flexShrink:0},children:n&&s?o?"✓":"✗":e+1}),a.jsx("p",{style:{fontSize:14,fontWeight:600,color:"var(--text-primary)",lineHeight:1.6},children:t.q})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:t.options.map((c,u)=>{let d="#f9fafb",f="#e5e7eb",g="var(--text-primary)";return n?u===t.ans?(d="#dcfce7",f="#86efac",g="#166534"):u===r&&u!==t.ans&&(d="#fee2e2",f="#fca5a5",g="#991b1b"):r===u&&(d="var(--purple-xsoft)",f="var(--purple-primary)",g="var(--purple-primary)"),a.jsxs("button",{disabled:n,onClick:()=>i(t.id,u),style:{padding:"9px 14px",border:`1.5px solid ${f}`,borderRadius:10,background:d,color:g,fontSize:13.5,fontFamily:"inherit",fontWeight:500,cursor:n?"default":"pointer",textAlign:"left",transition:"all 0.15s",lineHeight:1.4},onMouseEnter:m=>{!n&&r!==u&&(m.currentTarget.style.borderColor="var(--purple-primary)")},onMouseLeave:m=>{!n&&r!==u&&(m.currentTarget.style.borderColor="#e5e7eb")},children:[a.jsxs("span",{style:{fontWeight:700,marginRight:6},children:[String.fromCharCode(65+u),"."]}),c]},u)})}),n&&a.jsxs("div",{style:{marginTop:12,padding:"10px 14px",background:"#f0fdf4",borderRadius:10,border:"1px solid #bbf7d0",fontSize:13,color:"#166534",lineHeight:1.6},children:["💡 ",a.jsx("strong",{children:"Explanation:"})," ",t.explanation]})]})}function c4({sectionId:t,onBack:e}){const n=Co[t],r=l_.find(S=>S.id===t),[i,s]=M.useState({}),[o,c]=M.useState(!1),[u,d]=M.useState(null);function f(S,C){o||s(j=>({...j,[S]:C}))}function g(){const S=n.reduce((C,j)=>C+(i[j.id]===j.ans?1:0),0);d(S),c(!0),window.scrollTo({top:0,behavior:"smooth"})}function m(){s({}),c(!1),d(null)}return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[a.jsx("button",{onClick:e,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:"← Back"}),a.jsxs("div",{children:[a.jsxs("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:20,color:"var(--text-primary)"},children:[r.icon," ",r.label]}),a.jsxs("p",{style:{fontSize:13,color:"var(--text-muted)"},children:[n.length," questions"]})]})]}),o&&a.jsxs("div",{style:{background:u>=6?"#dcfce7":u>=4?"#fef3c7":"#fee2e2",border:`1.5px solid ${u>=6?"#86efac":u>=4?"#fde68a":"#fca5a5"}`,borderRadius:14,padding:"20px 24px",marginBottom:20,display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:12},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",marginBottom:3},children:u>=6?"🎉 Great Job!":u>=4?"👍 Keep Practicing!":"📚 Need More Practice"}),a.jsxs("div",{style:{fontSize:14,color:"var(--text-secondary)"},children:["You scored ",a.jsxs("strong",{children:[u,"/",n.length]})," — ",Math.round(u/n.length*100),"% correct"]})]}),a.jsx("button",{onClick:m,style:{padding:"10px 22px",background:"var(--purple-primary)",color:"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:14,fontWeight:700,cursor:"pointer"},children:"Try Again"})]}),n.map((S,C)=>a.jsx(Fh,{q:S,index:C,submitted:o,userAnswer:i[S.id],onAnswer:f},S.id)),!o&&a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginTop:8,flexWrap:"wrap",gap:12},children:[a.jsxs("span",{style:{fontSize:13,color:"var(--text-muted)"},children:[Object.keys(i).length," of ",n.length," answered"]}),a.jsx("button",{onClick:g,disabled:Object.keys(i).length===0,style:{padding:"12px 32px",background:Object.keys(i).length===0?"#e5e7eb":"var(--purple-primary)",color:Object.keys(i).length===0?"#9ca3af":"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:15,fontWeight:700,cursor:Object.keys(i).length===0?"not-allowed":"pointer",transition:"all 0.2s"},children:"Submit Answers →"})]})]})}function u4({onBack:t}){const e=[...Co.quant.slice(0,5),...Co.logical.slice(0,5),...Co.verbal.slice(0,5)],n=15*60,[r,i]=M.useState({}),[s,o]=M.useState(!1),[c,u]=M.useState(null),[d,f]=M.useState(n),g=M.useCallback(()=>{const v=e.reduce((b,P)=>b+(r[P.id+P.q.slice(0,3)]===P.ans?1:0),0);u(v),o(!0)},[r,e]);M.useEffect(()=>{if(s)return;const v=setInterval(()=>{f(b=>b<=1?(clearInterval(v),g(),0):b-1)},1e3);return()=>clearInterval(v)},[s,g]);function m(v,b,P){s||i(L=>({...L,[b]:P}))}const S=String(Math.floor(d/60)).padStart(2,"0"),C=String(d%60).padStart(2,"0"),j=d/n*100,O=d<120?"#ef4444":d<300?"#f97316":"#22c55e",E=["Quantitative (Q1–5)","Logical Reasoning (Q6–10)","Verbal Ability (Q11–15)"];return a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:20},children:[a.jsx("button",{onClick:t,style:{padding:"7px 16px",border:"1.5px solid var(--card-border)",borderRadius:999,background:"#fff",cursor:"pointer",fontFamily:"inherit",fontSize:13,fontWeight:600,color:"var(--text-secondary)"},children:"← Back"}),a.jsx("div",{style:{flex:1},children:a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:20,color:"var(--text-primary)"},children:"⏱️ Mock Test — 15 Questions"})}),!s&&a.jsxs("div",{style:{textAlign:"center",background:"#fff",border:`2px solid ${O}`,borderRadius:12,padding:"8px 18px",minWidth:90},children:[a.jsxs("div",{style:{fontSize:20,fontFamily:"Urbanist, sans-serif",fontWeight:900,color:O},children:[S,":",C]}),a.jsx("div",{style:{fontSize:10,color:"var(--text-muted)",fontWeight:600},children:"remaining"}),a.jsx("div",{style:{height:4,background:"#e5e7eb",borderRadius:999,marginTop:5,overflow:"hidden"},children:a.jsx("div",{style:{width:`${j}%`,height:"100%",background:O,borderRadius:999,transition:"width 1s linear"}})})]})]}),s&&a.jsxs("div",{style:{background:c>=10?"#dcfce7":c>=7?"#fef3c7":"#fee2e2",border:`1.5px solid ${c>=10?"#86efac":c>=7?"#fde68a":"#fca5a5"}`,borderRadius:14,padding:"20px 24px",marginBottom:20},children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,marginBottom:4},children:c>=10?"🏆 Excellent!":c>=7?"👍 Good effort!":"📚 Keep Practicing!"}),a.jsxs("div",{style:{fontSize:14,color:"var(--text-secondary)"},children:["Score: ",a.jsxs("strong",{children:[c,"/15"]})," — ",Math.round(c/15*100),"%"]})]}),e.map((v,b)=>{const P=v.id+v.q.slice(0,3);return b===0||b===5||b===10?a.jsxs(Gh.Fragment,{children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:14,color:"var(--purple-primary)",background:"var(--purple-xsoft)",padding:"8px 16px",borderRadius:10,marginBottom:12,marginTop:b>0?20:0},children:E[Math.floor(b/5)]}),a.jsx(Fh,{q:v,index:b,submitted:s,userAnswer:r[P],onAnswer:(L,R)=>m(v.id,P,R)})]},P):a.jsx(Fh,{q:v,index:b,submitted:s,userAnswer:r[P],onAnswer:(L,R)=>m(v.id,P,R)},P)}),!s&&a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",marginTop:8},children:a.jsx("button",{onClick:g,style:{padding:"12px 32px",background:"var(--purple-primary)",color:"#fff",border:"none",borderRadius:999,fontFamily:"inherit",fontSize:15,fontWeight:700,cursor:"pointer"},children:"Submit Test →"})})]})}function d4(){const[t,e]=M.useState(null);return t==="mock"?a.jsx(u4,{onBack:()=>e(null)}):t?a.jsx(c4,{sectionId:t,onBack:()=>e(null)}):a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:26,color:"var(--text-primary)",marginBottom:4},children:"🧠 Aptitude Practice"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:14},children:"Practice quantitative, logical, and verbal aptitude — the way companies test it."})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:14,marginBottom:28},children:[{icon:"📚",label:"Total Questions",value:"24",color:"#ede9fe"},{icon:"🏢",label:"Companies Covered",value:"TCS · Infosys · Wipro · Accenture",color:"#dcfce7",small:!0},{icon:"🎯",label:"Topics",value:"3 Sections",color:"#dbeafe"}].map(n=>a.jsxs("div",{style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"16px 20px",display:"flex",gap:14,alignItems:"center",boxShadow:"0 1px 3px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{width:42,height:42,borderRadius:12,background:n.color,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:n.icon}),a.jsxs("div",{children:[a.jsx("div",{style:{fontFamily:n.small?"inherit":"Urbanist, sans-serif",fontWeight:800,fontSize:n.small?12:22,color:"var(--text-primary)",lineHeight:1.2},children:n.value}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:2},children:n.label})]})]},n.label))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gap:16,marginBottom:20},children:[l_.map(n=>a.jsxs("div",{onClick:()=>e(n.id),style:{background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"22px",cursor:"pointer",boxShadow:"0 1px 3px rgba(0,0,0,0.05)",transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.borderColor=n.color,r.currentTarget.style.transform="translateY(-3px)",r.currentTarget.style.boxShadow=`0 8px 24px ${n.color}22`},onMouseLeave:r=>{r.currentTarget.style.borderColor="var(--card-border)",r.currentTarget.style.transform="translateY(0)",r.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.05)"},children:[a.jsx("div",{style:{width:52,height:52,borderRadius:14,background:n.bg,display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:14},children:n.icon}),a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:17,color:"var(--text-primary)",marginBottom:6},children:n.label}),a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",lineHeight:1.6,marginBottom:16},children:n.desc}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("span",{style:{fontSize:12,fontWeight:700,color:n.color,background:n.bg,padding:"3px 10px",borderRadius:999},children:[Co[n.id].length," Questions"]}),a.jsx("span",{style:{color:n.color,fontWeight:700,fontSize:15},children:"Start →"})]})]},n.id)),a.jsxs("div",{onClick:()=>e("mock"),style:{background:"linear-gradient(135deg, #6c3ce1, #8b5cf6)",border:"1.5px solid #6c3ce1",borderRadius:16,padding:"22px",cursor:"pointer",boxShadow:"0 4px 16px rgba(108,60,225,0.25)",transition:"all 0.2s"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-3px)",n.currentTarget.style.boxShadow="0 12px 32px rgba(108,60,225,0.35)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 4px 16px rgba(108,60,225,0.25)"},children:[a.jsx("div",{style:{width:52,height:52,borderRadius:14,background:"rgba(255,255,255,0.2)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:26,marginBottom:14},children:"⏱️"}),a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:800,fontSize:17,color:"#fff",marginBottom:6},children:"Full Mock Test"}),a.jsx("div",{style:{fontSize:13,color:"rgba(255,255,255,0.8)",lineHeight:1.6,marginBottom:16},children:"15 questions across all sections with a 15-minute timer. Simulates real placement aptitude tests."}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#fff",background:"rgba(255,255,255,0.2)",padding:"3px 10px",borderRadius:999},children:"15 min · 15 Q"}),a.jsx("span",{style:{color:"#fff",fontWeight:700,fontSize:15},children:"Start →"})]})]})]}),a.jsxs("div",{style:{background:"#fffbeb",border:"1px solid #fde68a",borderRadius:14,padding:"18px 22px"},children:[a.jsx("div",{style:{fontWeight:800,fontFamily:"Urbanist, sans-serif",fontSize:15,color:"#92400e",marginBottom:10},children:"💡 Preparation Tips"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:8},children:["Practice IndiaBix daily for aptitude","Learn shortcut formulas for quant","Read English newspapers for verbal","Do puzzle solving for logical reasoning","Time yourself — 1.5 min per question","Review wrong answers carefully"].map(n=>a.jsxs("div",{style:{fontSize:13,color:"#78350f",display:"flex",gap:6,alignItems:"flex-start"},children:[a.jsx("span",{children:"•"}),a.jsx("span",{children:n})]},n))})]})]})}function h4(){const{login:t,signup:e,resetPassword:n}=bn(),[r,i]=M.useState("login"),[s,o]=M.useState("ECE"),[c,u]=M.useState(""),[d,f]=M.useState(""),[g,m]=M.useState(!1),[S,C]=M.useState(""),[j,O]=M.useState(""),[E,v]=M.useState(!1),b=r==="signup";async function P(R){R.preventDefault(),C(""),O(""),v(!0);try{b?(await e({branch:s,email:c.trim(),password:d}),O("Account created successfully. Opening your dashboard...")):await t(c.trim(),d)}catch(w){C(w.message)}finally{v(!1)}}async function L(){if(C(""),O(""),!c.trim()){C("Enter your email first, then click forgot password.");return}try{await n(c.trim()),O("Password reset link sent. Please check your email.")}catch(R){C(R.message)}}return a.jsxs("main",{className:"auth-shell",children:[a.jsxs("section",{className:"auth-hero",children:[a.jsxs("div",{className:"auth-logo","aria-label":"Placeonix",children:[a.jsx(nw,{size:34,"aria-hidden":"true"}),a.jsx($2,{className:"auth-logo-spark",size:15,"aria-hidden":"true"})]}),a.jsx("p",{className:"auth-kicker",children:"Welcome to Placeonix"}),a.jsx("h1",{children:"Your placement preparation starts here."}),a.jsx("p",{children:"Sign in to track your interviews, resume progress, aptitude practice, streaks, XP, and placement readiness."})]}),a.jsxs("section",{className:"auth-card","aria-label":b?"Create account":"Login",children:[a.jsxs("div",{className:"auth-tabs",role:"tablist","aria-label":"Authentication mode",children:[a.jsx("button",{className:b?"":"active",type:"button",onClick:()=>{i("login"),C(""),O("")},children:"Login"}),a.jsx("button",{className:b?"active":"",type:"button",onClick:()=>{i("signup"),C(""),O("")},children:"Sign Up"})]}),a.jsx("h2",{children:b?"Create your account":"Login to your dashboard"}),a.jsx("p",{className:"auth-subtitle",children:b?"Use your email and password to create a Placeonix student account.":"Continue with your registered email and password."}),a.jsxs("form",{className:"auth-form",onSubmit:P,children:[b&&a.jsxs("label",{children:["Department",a.jsxs("select",{value:s,onChange:R=>o(R.target.value),children:[a.jsx("option",{value:"ECE",children:"ECE"}),a.jsx("option",{value:"CSE",children:"CSE"}),a.jsx("option",{value:"EEE",children:"EEE"}),a.jsx("option",{value:"IT",children:"IT"}),a.jsx("option",{value:"ME",children:"ME"}),a.jsx("option",{value:"CIVIL",children:"CIVIL"}),a.jsx("option",{value:"AERO",children:"AERO"}),a.jsx("option",{value:"BME",children:"BME"}),a.jsx("option",{value:"BT",children:"BT"})]})]}),a.jsxs("label",{children:["Email",a.jsx("input",{type:"email",placeholder:"you@example.com",value:c,onChange:R=>u(R.target.value),autoComplete:"email",required:!0})]}),a.jsxs("label",{children:["Password",a.jsxs("span",{className:"password-field",children:[a.jsx("input",{type:g?"text":"password",placeholder:"Minimum 6 characters",value:d,onChange:R=>f(R.target.value),autoComplete:b?"new-password":"current-password",required:!0,minLength:6}),a.jsx("button",{type:"button",className:"password-toggle",onClick:()=>m(R=>!R),"aria-label":g?"Hide password":"Show password",title:g?"Hide password":"Show password",children:g?a.jsx(S2,{size:19,"aria-hidden":"true"}):a.jsx(E2,{size:19,"aria-hidden":"true"})})]})]}),!b&&a.jsx("button",{className:"forgot-password",type:"button",onClick:L,children:"Forgot password?"}),S&&a.jsx("div",{className:"auth-error",children:S}),j&&a.jsx("div",{className:"auth-success",children:j}),a.jsx("button",{className:"auth-submit",type:"submit",disabled:E,children:E?"Please wait...":b?"Create Account":"Login"})]})]})]})}const f4=["ECE","CSE","EEE","IT","ME","CIVIL","AERO","BME","BT"];function p4(){var O;const{user:t,profile:e,updateUserProfile:n}=bn(),[r,i]=M.useState(""),[s,o]=M.useState("ECE"),[c,u]=M.useState("Embedded Engineer"),[d,f]=M.useState(!1),[g,m]=M.useState(""),[S,C]=M.useState("");M.useEffect(()=>{i((e==null?void 0:e.name)||""),o((e==null?void 0:e.branch)||"ECE"),u((e==null?void 0:e.careerGoal)||"Embedded Engineer")},[e]);async function j(E){E.preventDefault(),m(""),C(""),f(!0);try{await n({name:r.trim(),branch:s,careerGoal:c.trim()}),m("Profile saved. Your dashboard is now updated.")}catch(v){C(v.message||"Could not save profile. Please try again.")}finally{f(!1)}}return a.jsxs("div",{className:"profile-page",children:[a.jsxs("section",{className:"profile-hero card",children:[a.jsx("div",{className:"profile-avatar-large",children:((e==null?void 0:e.name)||(t==null?void 0:t.email)||"S").slice(0,1).toUpperCase()}),a.jsxs("div",{children:[a.jsx("p",{className:"profile-kicker",children:"Student Profile"}),a.jsx("h1",{children:(e==null?void 0:e.name)||((O=t==null?void 0:t.email)==null?void 0:O.split("@")[0])||"Placeonix Student"}),a.jsx("p",{children:"Manage the account details used across your dashboard, progress cards, and recommendations."})]})]}),a.jsxs("div",{className:"profile-grid",children:[a.jsxs("section",{className:"profile-card card",children:[a.jsxs("h2",{children:[a.jsx(iw,{size:21,"aria-hidden":"true"}),"Profile Details"]}),a.jsxs("form",{className:"profile-form",onSubmit:j,children:[a.jsxs("label",{children:["Display Name",a.jsx("input",{value:r,onChange:E=>i(E.target.value),placeholder:"Enter your name"})]}),a.jsxs("label",{children:["Department",a.jsx("select",{value:s,onChange:E=>o(E.target.value),children:f4.map(E=>a.jsx("option",{value:E,children:E},E))})]}),a.jsxs("label",{children:["Career Goal",a.jsx("input",{value:c,onChange:E=>u(E.target.value),placeholder:"Embedded Engineer"})]}),g&&a.jsx("div",{className:"profile-success",children:g}),S&&a.jsx("div",{className:"profile-error",children:S}),a.jsxs("button",{className:"profile-save-btn",type:"submit",disabled:d,children:[a.jsx(z2,{size:17,"aria-hidden":"true"}),d?"Saving...":"Save Profile"]})]})]}),a.jsxs("section",{className:"profile-card card",children:[a.jsxs("h2",{children:[a.jsx(j2,{size:21,"aria-hidden":"true"}),"Account Summary"]}),a.jsxs("div",{className:"profile-summary-list",children:[a.jsxs("div",{children:[a.jsx("span",{children:"Email"}),a.jsx("strong",{children:t==null?void 0:t.email})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Department"}),a.jsx("strong",{children:(e==null?void 0:e.branch)||"ECE"})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Career Goal"}),a.jsx("strong",{children:(e==null?void 0:e.careerGoal)||"Embedded Engineer"})]}),a.jsxs("div",{children:[a.jsx("span",{children:"Placement Readiness"}),a.jsxs("strong",{children:[(e==null?void 0:e.placementReadiness)??78,"%"]})]})]}),a.jsxs("div",{className:"profile-note",children:[a.jsx(tw,{size:19,"aria-hidden":"true"}),a.jsx("p",{children:"Your profile is stored in Firebase and updates automatically after saving."})]})]})]})]})}const Bh=[{id:71,name:"Python",ext:"py",color:"#3b82f6",icon:"🐍"},{id:62,name:"Java",ext:"java",color:"#f97316",icon:"☕"},{id:54,name:"C++",ext:"cpp",color:"#8b5cf6",icon:"🔷"},{id:63,name:"JavaScript",ext:"js",color:"#eab308",icon:"🟨"},{id:50,name:"C",ext:"c",color:"#6b7280",icon:"⚙️"}],li={Easy:{color:"#16a34a",bg:"#dcfce7",border:"#86efac"},Medium:{color:"#d97706",bg:"#fef3c7",border:"#fde68a"},Hard:{color:"#dc2626",bg:"#fee2e2",border:"#fca5a5"}},eo=[{id:1,title:"Two Sum",difficulty:"Easy",category:"Arrays",company:["Amazon","TCS","Infosys"],acceptance:"72%",fnName:"twoSum",description:`Given an array of integers **nums** and an integer **target**, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.`,examples:[{input:"nums = [2,7,11,15], target = 9",output:"[0,1]",explanation:"nums[0] + nums[1] = 2 + 7 = 9"},{input:"nums = [3,2,4], target = 6",output:"[1,2]",explanation:"nums[1] + nums[2] = 2 + 4 = 6"}],constraints:["2 ≤ nums.length ≤ 10⁴","-10⁹ ≤ nums[i] ≤ 10⁹","Only one valid answer exists"],hints:["Try using a hash map to store seen numbers","For each number, check if (target - number) exists in the map","Time complexity can be reduced to O(n)"],solution:`**Approach: Hash Map (O(n) time, O(n) space)**

For each element, store it in a hash map. For every new element, check if its complement (target - element) already exists in the map.

**Key Insight:** Instead of checking all pairs (O(n²)), we look up the complement in O(1) using a hash map.

**Algorithm:**
1. Create an empty map
2. For each index i and value nums[i]:
   - complement = target - nums[i]
   - If complement is in map → return [map[complement], i]
   - Else → store map[nums[i]] = i`,starterCode:{71:`def twoSum(nums, target):
    # Use a hash map to store seen values
    seen = {}
    for i, num in enumerate(nums):
        complement = target - num
        if complement in seen:
            return [seen[complement], i]
        seen[num] = i
    return []

# ── Tests ──
print(twoSum([2, 7, 11, 15], 9))   # Expected: [0, 1]
print(twoSum([3, 2, 4], 6))        # Expected: [1, 2]
print(twoSum([3, 3], 6))           # Expected: [0, 1]`,62:`import java.util.HashMap;
import java.util.Map;
import java.util.Arrays;

public class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> seen = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (seen.containsKey(complement)) {
                return new int[]{seen.get(complement), i};
            }
            seen.put(nums[i], i);
        }
        return new int[]{};
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(Arrays.toString(sol.twoSum(new int[]{2,7,11,15}, 9))); // [0, 1]
        System.out.println(Arrays.toString(sol.twoSum(new int[]{3,2,4}, 6)));     // [1, 2]
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> seen;
    for (int i = 0; i < (int)nums.size(); i++) {
        int complement = target - nums[i];
        if (seen.count(complement)) return {seen[complement], i};
        seen[nums[i]] = i;
    }
    return {};
}

int main() {
    vector<int> nums1 = {2, 7, 11, 15};
    auto r1 = twoSum(nums1, 9);
    cout << "[" << r1[0] << ", " << r1[1] << "]" << endl; // [0, 1]

    vector<int> nums2 = {3, 2, 4};
    auto r2 = twoSum(nums2, 6);
    cout << "[" << r2[0] << ", " << r2[1] << "]" << endl; // [1, 2]
    return 0;
}`,63:`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    const seen = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (seen.has(complement)) return [seen.get(complement), i];
        seen.set(nums[i], i);
    }
    return [];
}

// ── Tests ──
console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));       // [1, 2]
console.log(twoSum([3, 3], 6));          // [0, 1]`,50:`#include <stdio.h>
#include <stdlib.h>

int* twoSum(int* nums, int n, int target, int* returnSize) {
    int* result = (int*)malloc(2 * sizeof(int));
    *returnSize = 2;
    // O(n²) brute force for C (no built-in hash map)
    for (int i = 0; i < n; i++) {
        for (int j = i + 1; j < n; j++) {
            if (nums[i] + nums[j] == target) {
                result[0] = i; result[1] = j;
                return result;
            }
        }
    }
    return result;
}

int main() {
    int nums[] = {2, 7, 11, 15};
    int size;
    int* r = twoSum(nums, 4, 9, &size);
    printf("[%d, %d]
", r[0], r[1]); // [0, 1]
    free(r);
    return 0;
}`}},{id:2,title:"Reverse a String",difficulty:"Easy",category:"Strings",company:["TCS","Wipro","Cognizant"],acceptance:"85%",fnName:"reverseString",description:`Write a function that reverses a string. The input string is given as an array of characters.

You must do this by modifying the input array **in-place** with O(1) extra memory.`,examples:[{input:'s = ["h","e","l","l","o"]',output:'["o","l","l","e","h"]'},{input:'s = ["H","a","n","n","a","h"]',output:'["h","a","n","n","a","H"]'}],constraints:["1 ≤ s.length ≤ 10⁵","s[i] is a printable ASCII character"],hints:["Use two pointers — one from start, one from end","Swap characters and move pointers toward center","No extra array needed — swap in-place"],solution:`**Approach: Two Pointers (O(n) time, O(1) space)**

Place one pointer at the start and another at the end. Swap the characters and move both pointers inward until they meet.

**Algorithm:**
1. left = 0, right = len(s) - 1
2. While left < right:
   - Swap s[left] and s[right]
   - left++, right--`,starterCode:{71:`def reverseString(s):
    # Two-pointer in-place reversal
    left, right = 0, len(s) - 1
    while left < right:
        s[left], s[right] = s[right], s[left]
        left += 1
        right -= 1

# ── Tests ──
s1 = ["h","e","l","l","o"]
reverseString(s1)
print(s1)  # ['o', 'l', 'l', 'e', 'h']

s2 = ["H","a","n","n","a","h"]
reverseString(s2)
print(s2)  # ['h', 'a', 'n', 'n', 'a', 'H']`,62:`import java.util.Arrays;

public class Solution {
    public void reverseString(char[] s) {
        int left = 0, right = s.length - 1;
        while (left < right) {
            char tmp = s[left];
            s[left++] = s[right];
            s[right--] = tmp;
        }
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        char[] s = {'h','e','l','l','o'};
        sol.reverseString(s);
        System.out.println(Arrays.toString(s)); // [o, l, l, e, h]
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

void reverseString(vector<char>& s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        swap(s[left++], s[right--]);
    }
}

int main() {
    vector<char> s = {'h','e','l','l','o'};
    reverseString(s);
    for (char c : s) cout << c;
    cout << endl; // olleh
    return 0;
}`,63:`/**
 * @param {character[]} s
 * @return {void} (modifies in-place)
 */
function reverseString(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++; right--;
    }
}

// ── Tests ──
const s1 = ["h","e","l","l","o"];
reverseString(s1);
console.log(s1); // ['o','l','l','e','h']`,50:`#include <stdio.h>

void reverseString(char* s, int n) {
    int left = 0, right = n - 1;
    while (left < right) {
        char tmp = s[left];
        s[left++] = s[right];
        s[right--] = tmp;
    }
}

int main() {
    char s[] = {'h','e','l','l','o','\0'};
    reverseString(s, 5);
    printf("%s
", s); // olleh
    return 0;
}`}},{id:3,title:"Find Maximum in Array",difficulty:"Easy",category:"Arrays",company:["TCS","Infosys","Wipro"],acceptance:"90%",fnName:"findMax",description:`Given an integer array **nums**, return the maximum element in the array.

Try to solve it in O(n) time and O(1) space.`,examples:[{input:"nums = [3, 1, 4, 1, 5, 9, 2, 6]",output:"9"},{input:"nums = [-1, -5, -3]",output:"-1"}],constraints:["1 ≤ nums.length ≤ 10⁵","-10⁹ ≤ nums[i] ≤ 10⁹"],hints:["Start with the first element as max","Iterate through the array updating max if current > max"],solution:`**Approach: Linear Scan (O(n) time, O(1) space)**

Initialize max as the first element. Iterate through the rest and update max whenever a larger value is found.

This is the most efficient possible — we must look at every element at least once.`,starterCode:{71:`def findMax(nums):
    max_val = nums[0]
    for num in nums[1:]:
        if num > max_val:
            max_val = num
    return max_val

# ── Tests ──
print(findMax([3, 1, 4, 1, 5, 9, 2, 6]))  # 9
print(findMax([-1, -5, -3]))               # -1
print(findMax([42]))                        # 42`,62:`public class Solution {
    public int findMax(int[] nums) {
        int max = nums[0];
        for (int i = 1; i < nums.length; i++) {
            if (nums[i] > max) max = nums[i];
        }
        return max;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.findMax(new int[]{3,1,4,1,5,9,2,6})); // 9
        System.out.println(sol.findMax(new int[]{-1,-5,-3}));         // -1
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

int findMax(vector<int>& nums) {
    int maxVal = nums[0];
    for (int i = 1; i < (int)nums.size(); i++) {
        if (nums[i] > maxVal) maxVal = nums[i];
    }
    return maxVal;
    // Or simply: return *max_element(nums.begin(), nums.end());
}

int main() {
    vector<int> nums = {3, 1, 4, 1, 5, 9, 2, 6};
    cout << findMax(nums) << endl; // 9
    return 0;
}`,63:`/**
 * @param {number[]} nums
 * @return {number}
 */
function findMax(nums) {
    let max = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
    // Alternatively: return Math.max(...nums);
}

// ── Tests ──
console.log(findMax([3, 1, 4, 1, 5, 9, 2, 6])); // 9
console.log(findMax([-1, -5, -3]));               // -1`,50:`#include <stdio.h>

int findMax(int* nums, int n) {
    int max = nums[0];
    for (int i = 1; i < n; i++) {
        if (nums[i] > max) max = nums[i];
    }
    return max;
}

int main() {
    int nums[] = {3, 1, 4, 1, 5, 9, 2, 6};
    printf("%d
", findMax(nums, 8)); // 9
    return 0;
}`}},{id:4,title:"Check Palindrome",difficulty:"Easy",category:"Strings",company:["Accenture","Cognizant","TCS"],acceptance:"82%",fnName:"isPalindrome",description:`Given a string **s**, return **true** if it is a palindrome, or **false** otherwise.

A string is a palindrome when it reads the same forward and backward. Consider only alphanumeric characters and ignore case.`,examples:[{input:'s = "A man, a plan, a canal: Panama"',output:"true",explanation:'"amanaplanacanalpanama" is a palindrome'},{input:'s = "race a car"',output:"false"}],constraints:["1 ≤ s.length ≤ 2 × 10⁵","s consists only of printable ASCII characters"],hints:["Clean the string first — remove non-alphanumeric chars and lowercase","Compare with its reverse, or use two pointers from both ends"],solution:`**Approach: Two Pointers (O(n) time, O(1) space)**

Skip non-alphanumeric characters with two pointers and compare characters in-place without creating a new string.

**Algorithm:**
1. left = 0, right = len(s) - 1
2. Skip non-alphanumeric on both sides
3. Compare s[left].lower() == s[right].lower()
4. If mismatch → return False`,starterCode:{71:`def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        # Skip non-alphanumeric characters
        while left < right and not s[left].isalnum():
            left += 1
        while left < right and not s[right].isalnum():
            right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1
        right -= 1
    return True

# ── Tests ──
print(isPalindrome("A man, a plan, a canal: Panama"))  # True
print(isPalindrome("race a car"))                       # False
print(isPalindrome(" "))                                # True`,62:`public class Solution {
    public boolean isPalindrome(String s) {
        int left = 0, right = s.length() - 1;
        while (left < right) {
            while (left < right && !Character.isLetterOrDigit(s.charAt(left))) left++;
            while (left < right && !Character.isLetterOrDigit(s.charAt(right))) right--;
            if (Character.toLowerCase(s.charAt(left)) != Character.toLowerCase(s.charAt(right)))
                return false;
            left++; right--;
        }
        return true;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isPalindrome("A man, a plan, a canal: Panama")); // true
        System.out.println(sol.isPalindrome("race a car")); // false
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++; right--;
    }
    return true;
}

int main() {
    cout << isPalindrome("A man, a plan, a canal: Panama") << endl; // 1
    cout << isPalindrome("race a car") << endl;                      // 0
    return 0;
}`,63:`/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) left++;
        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++; right--;
    }
    return true;
}

// ── Tests ──
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false`,50:`#include <stdio.h>
#include <ctype.h>
#include <stdbool.h>
#include <string.h>

bool isPalindrome(char* s) {
    int left = 0, right = strlen(s) - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) left++;
        while (left < right && !isalnum(s[right])) right--;
        if (tolower(s[left]) != tolower(s[right])) return false;
        left++; right--;
    }
    return true;
}

int main() {
    printf("%s
", isPalindrome("A man, a plan, a canal: Panama") ? "true" : "false"); // true
    printf("%s
", isPalindrome("race a car") ? "true" : "false"); // false
    return 0;
}`}},{id:5,title:"Fibonacci Number",difficulty:"Easy",category:"Recursion / DP",company:["TCS","Wipro","Infosys"],acceptance:"88%",fnName:"fib",description:`The **Fibonacci numbers** form a sequence where each number is the sum of the two preceding ones, starting from 0 and 1.

Given **n**, calculate **F(n)**. Implement it iteratively for O(n) time and O(1) space.`,examples:[{input:"n = 4",output:"3",explanation:"F(4) = F(3) + F(2) = 2 + 1 = 3"},{input:"n = 10",output:"55"}],constraints:["0 ≤ n ≤ 30"],hints:["Start with base cases: fib(0)=0, fib(1)=1","Iterative approach only needs two variables (a, b)","Recursive is elegant but O(2ⁿ) — avoid it"],solution:`**Approach: Iterative (O(n) time, O(1) space)**

Keep only the last two Fibonacci values and update them in a loop.

**F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)**

Avoid recursion — it recalculates the same subproblems exponentially.`,starterCode:{71:`def fib(n):
    if n <= 1:
        return n
    a, b = 0, 1
    for _ in range(2, n + 1):
        a, b = b, a + b
    return b

# ── Tests ──
print(fib(0))   # 0
print(fib(1))   # 1
print(fib(4))   # 3
print(fib(10))  # 55`,62:`public class Solution {
    public int fib(int n) {
        if (n <= 1) return n;
        int a = 0, b = 1;
        for (int i = 2; i <= n; i++) {
            int temp = a + b;
            a = b;
            b = temp;
        }
        return b;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.fib(4));   // 3
        System.out.println(sol.fib(10));  // 55
    }
}`,54:`#include <iostream>
using namespace std;

int fib(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b; b = temp;
    }
    return b;
}

int main() {
    cout << fib(4)  << endl;  // 3
    cout << fib(10) << endl;  // 55
    return 0;
}`,63:`/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}

// ── Tests ──
console.log(fib(4));   // 3
console.log(fib(10));  // 55`,50:`#include <stdio.h>

int fib(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; i++) {
        int temp = a + b;
        a = b; b = temp;
    }
    return b;
}

int main() {
    printf("%d
", fib(4));   // 3
    printf("%d
", fib(10));  // 55
    return 0;
}`}},{id:6,title:"Longest Substring Without Repeating Characters",difficulty:"Medium",category:"Strings / Sliding Window",company:["Amazon","Accenture","Google"],acceptance:"58%",fnName:"lengthOfLongestSubstring",description:"Given a string **s**, find the length of the **longest substring** without repeating characters.",examples:[{input:'s = "abcabcbb"',output:"3",explanation:'"abc" is the longest substring without repeating chars'},{input:'s = "bbbbb"',output:"1"},{input:'s = "pwwkew"',output:"3",explanation:'"wke" is the longest'}],constraints:["0 ≤ s.length ≤ 5 × 10⁴","s consists of English letters, digits, symbols, spaces"],hints:["Use a sliding window with two pointers (left, right)","Use a Set to track characters in current window","When a duplicate is found, shrink window from the left"],solution:`**Approach: Sliding Window + Hash Set (O(n) time, O(min(m,n)) space)**

Maintain a window [left, right]. Expand right; when a duplicate is found, shrink from left until the duplicate is removed.

Track the maximum window size throughout.`,starterCode:{71:`def lengthOfLongestSubstring(s):
    char_set = set()
    left = 0
    max_len = 0
    for right in range(len(s)):
        # Shrink window until no duplicate
        while s[right] in char_set:
            char_set.remove(s[left])
            left += 1
        char_set.add(s[right])
        max_len = max(max_len, right - left + 1)
    return max_len

# ── Tests ──
print(lengthOfLongestSubstring("abcabcbb"))  # 3
print(lengthOfLongestSubstring("bbbbb"))     # 1
print(lengthOfLongestSubstring("pwwkew"))    # 3`,62:`import java.util.HashSet;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashSet<Character> set = new HashSet<>();
        int left = 0, maxLen = 0;
        for (int right = 0; right < s.length(); right++) {
            while (set.contains(s.charAt(right))) {
                set.remove(s.charAt(left++));
            }
            set.add(s.charAt(right));
            maxLen = Math.max(maxLen, right - left + 1);
        }
        return maxLen;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.lengthOfLongestSubstring("abcabcbb")); // 3
        System.out.println(sol.lengthOfLongestSubstring("pwwkew"));   // 3
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

int lengthOfLongestSubstring(string s) {
    unordered_set<char> window;
    int left = 0, maxLen = 0;
    for (int right = 0; right < (int)s.size(); right++) {
        while (window.count(s[right])) {
            window.erase(s[left++]);
        }
        window.insert(s[right]);
        maxLen = max(maxLen, right - left + 1);
    }
    return maxLen;
}

int main() {
    cout << lengthOfLongestSubstring("abcabcbb") << endl; // 3
    cout << lengthOfLongestSubstring("pwwkew")   << endl; // 3
    return 0;
}`,63:`/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    const window = new Set();
    let left = 0, maxLen = 0;
    for (let right = 0; right < s.length; right++) {
        while (window.has(s[right])) {
            window.delete(s[left++]);
        }
        window.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}

// ── Tests ──
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("pwwkew"));   // 3`,50:`#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char* s) {
    int freq[128] = {0};
    int left = 0, maxLen = 0, n = strlen(s);
    for (int right = 0; right < n; right++) {
        freq[(int)s[right]]++;
        while (freq[(int)s[right]] > 1) {
            freq[(int)s[left++]]--;
        }
        if (right - left + 1 > maxLen) maxLen = right - left + 1;
    }
    return maxLen;
}

int main() {
    printf("%d
", lengthOfLongestSubstring("abcabcbb")); // 3
    printf("%d
", lengthOfLongestSubstring("pwwkew"));   // 3
    return 0;
}`}},{id:7,title:"Valid Parentheses",difficulty:"Medium",category:"Stack",company:["Amazon","Google","Cognizant"],acceptance:"64%",fnName:"isValid",description:`Given a string **s** containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
- Open brackets must be closed by the same type
- Open brackets must be closed in the correct order
- Every close bracket has a corresponding open bracket`,examples:[{input:'s = "()"',output:"true"},{input:'s = "()[]{}"',output:"true"},{input:'s = "(]"',output:"false"}],constraints:["1 ≤ s.length ≤ 10⁴","s consists of parentheses only"],hints:["Use a stack — push open brackets, pop on closing","Map each closing bracket to its opening pair","At the end, the stack must be empty"],solution:`**Approach: Stack (O(n) time, O(n) space)**

Push every opening bracket. On a closing bracket, check if the top of the stack matches. If not → invalid. At the end, the stack must be empty.

**Matching pairs:** ')' → '(', ']' → '[', '}' → '{'`,starterCode:{71:`def isValid(s):
    stack = []
    mapping = {')': '(', '}': '{', ']': '['}
    for char in s:
        if char in mapping:
            top = stack.pop() if stack else '#'
            if mapping[char] != top:
                return False
        else:
            stack.append(char)
    return len(stack) == 0

# ── Tests ──
print(isValid("()"))      # True
print(isValid("()[]{}"))  # True
print(isValid("(]"))      # False
print(isValid("([)]"))    # False`,62:`import java.util.Stack;

public class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for (char c : s.toCharArray()) {
            if (c == '(' || c == '{' || c == '[') {
                stack.push(c);
            } else {
                if (stack.isEmpty()) return false;
                char top = stack.pop();
                if ((c==')' && top!='(') || (c=='}' && top!='{') || (c==']' && top!='['))
                    return false;
            }
        }
        return stack.isEmpty();
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.isValid("()[]{}")); // true
        System.out.println(sol.isValid("(]"));     // false
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

bool isValid(string s) {
    stack<char> st;
    unordered_map<char,char> map = {{')','{'},{')','{'},{')','{'}};
    // correct map:
    map = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (map.count(c)) {
            if (st.empty() || st.top() != map[c]) return false;
            st.pop();
        } else st.push(c);
    }
    return st.empty();
}

int main() {
    cout << isValid("()[]{}") << endl; // 1
    cout << isValid("(]")     << endl; // 0
    return 0;
}`,63:`/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (map[c]) {
            if (stack.pop() !== map[c]) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}

// ── Tests ──
console.log(isValid("()[]{}"));  // true
console.log(isValid("(]"));      // false
console.log(isValid("([)]"));    // false`,50:`#include <stdio.h>
#include <string.h>
#include <stdbool.h>

bool isValid(char* s) {
    int n = strlen(s);
    char stack[n + 1]; int top = -1;
    for (int i = 0; s[i]; i++) {
        char c = s[i];
        if (c=='(' || c=='{' || c=='[') stack[++top] = c;
        else {
            if (top < 0) return false;
            char t = stack[top--];
            if ((c==')' && t!='(') || (c=='}' && t!='{') || (c==']' && t!='['))
                return false;
        }
    }
    return top == -1;
}

int main() {
    printf("%s
", isValid("()[]{}") ? "true":"false"); // true
    printf("%s
", isValid("(]")     ? "true":"false"); // false
    return 0;
}`}},{id:8,title:"Binary Search",difficulty:"Medium",category:"Binary Search",company:["TCS","Amazon","Infosys"],acceptance:"61%",fnName:"search",description:`Given an array of integers **nums** sorted in ascending order, and an integer **target**, write a function to search target in nums.

If target exists, return its index. Otherwise, return **-1**.

You must write an algorithm with **O(log n)** runtime complexity.`,examples:[{input:"nums = [-1,0,3,5,9,12], target = 9",output:"4"},{input:"nums = [-1,0,3,5,9,12], target = 2",output:"-1"}],constraints:["1 ≤ nums.length ≤ 10⁴","All values unique","Array sorted ascending"],hints:["Maintain left and right boundaries","Calculate mid = left + (right - left) // 2","If nums[mid] < target → move left up; else → move right down"],solution:`**Approach: Classic Binary Search (O(log n) time, O(1) space)**

Repeatedly halve the search space by comparing the middle element with the target.

**Why mid = left + (right-left)//2 instead of (left+right)//2?**
To avoid integer overflow when left and right are large.`,starterCode:{71:`def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        elif nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1

# ── Tests ──
print(search([-1, 0, 3, 5, 9, 12], 9))   # 4
print(search([-1, 0, 3, 5, 9, 12], 2))   # -1`,62:`public class Solution {
    public int search(int[] nums, int target) {
        int left = 0, right = nums.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) return mid;
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.search(new int[]{-1,0,3,5,9,12}, 9)); // 4
        System.out.println(sol.search(new int[]{-1,0,3,5,9,12}, 2)); // -1
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    vector<int> nums = {-1, 0, 3, 5, 9, 12};
    cout << search(nums, 9) << endl;  // 4
    cout << search(nums, 2) << endl;  // -1
    return 0;
}`,63:`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// ── Tests ──
console.log(search([-1,0,3,5,9,12], 9)); // 4
console.log(search([-1,0,3,5,9,12], 2)); // -1`,50:`#include <stdio.h>

int search(int* nums, int n, int target) {
    int left = 0, right = n - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        else if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

int main() {
    int nums[] = {-1, 0, 3, 5, 9, 12};
    printf("%d
", search(nums, 6, 9));  // 4
    printf("%d
", search(nums, 6, 2));  // -1
    return 0;
}`}},{id:9,title:"Merge Two Sorted Lists",difficulty:"Medium",category:"Linked List",company:["Amazon","Accenture","TCS"],acceptance:"55%",fnName:"mergeTwoLists",description:`You are given the heads of two sorted linked lists **list1** and **list2**.

Merge the two lists into one sorted list made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.`,examples:[{input:"list1 = [1,2,4], list2 = [1,3,4]",output:"[1,1,2,3,4,4]"},{input:"list1 = [], list2 = [0]",output:"[0]"}],constraints:["0 ≤ nodes ≤ 50","-100 ≤ Node.val ≤ 100","Both lists sorted"],hints:["Use a dummy head node to simplify edge cases","Compare the heads of both lists and attach the smaller one","After the loop, attach whichever list still has remaining nodes"],solution:`**Approach: Iterative with Dummy Node (O(m+n) time, O(1) space)**

Create a dummy node as the start. Keep a current pointer and greedily pick the smaller node from either list. Append remaining nodes at the end.`,starterCode:{71:`class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def mergeTwoLists(list1, list2):
    dummy = ListNode(0)
    curr = dummy
    while list1 and list2:
        if list1.val <= list2.val:
            curr.next = list1
            list1 = list1.next
        else:
            curr.next = list2
            list2 = list2.next
        curr = curr.next
    curr.next = list1 or list2
    return dummy.next

# ── Helper ──
def build(vals):
    dummy = ListNode(0); curr = dummy
    for v in vals: curr.next = ListNode(v); curr = curr.next
    return dummy.next

def to_list(node):
    res = []
    while node: res.append(node.val); node = node.next
    return res

# ── Tests ──
print(to_list(mergeTwoLists(build([1,2,4]), build([1,3,4]))))  # [1,1,2,3,4,4]`,62:`public class Solution {
    static class ListNode {
        int val; ListNode next;
        ListNode(int v) { val = v; }
    }

    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode(0), curr = dummy;
        while (l1 != null && l2 != null) {
            if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
            else { curr.next = l2; l2 = l2.next; }
            curr = curr.next;
        }
        curr.next = (l1 != null) ? l1 : l2;
        return dummy.next;
    }

    public static void main(String[] args) {
        // Build 1->2->4 and 1->3->4, merge
        System.out.println("See implementation above");
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

struct ListNode { int val; ListNode* next; ListNode(int v):val(v),next(nullptr){} };

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy(0); ListNode* curr = &dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next = l1; l1 = l1->next; }
        else { curr->next = l2; l2 = l2->next; }
        curr = curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    // Build lists and test
    ListNode* l1 = new ListNode(1); l1->next = new ListNode(2); l1->next->next = new ListNode(4);
    ListNode* l2 = new ListNode(1); l2->next = new ListNode(3); l2->next->next = new ListNode(4);
    ListNode* merged = mergeTwoLists(l1, l2);
    while (merged) { cout << merged->val << " "; merged = merged->next; }
    cout << endl; // 1 1 2 3 4 4
    return 0;
}`,63:`class ListNode {
    constructor(val = 0, next = null) { this.val = val; this.next = next; }
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    while (l1 && l2) {
        if (l1.val <= l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}

// ── Helper ──
const build = vals => { const d = new ListNode(); let c = d; vals.forEach(v => { c.next = new ListNode(v); c = c.next; }); return d.next; }
const toArr = n => { const r = []; while(n){r.push(n.val);n=n.next;} return r; }

console.log(toArr(mergeTwoLists(build([1,2,4]), build([1,3,4])))); // [1,1,2,3,4,4]`,50:`#include <stdio.h>
#include <stdlib.h>

typedef struct Node { int val; struct Node* next; } ListNode;
ListNode* newNode(int v) { ListNode* n = malloc(sizeof(ListNode)); n->val=v; n->next=NULL; return n; }

ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
    ListNode dummy; dummy.next=NULL; ListNode* curr=&dummy;
    while (l1 && l2) {
        if (l1->val <= l2->val) { curr->next=l1; l1=l1->next; }
        else { curr->next=l2; l2=l2->next; }
        curr=curr->next;
    }
    curr->next = l1 ? l1 : l2;
    return dummy.next;
}

int main() {
    ListNode *l1=newNode(1); l1->next=newNode(2); l1->next->next=newNode(4);
    ListNode *l2=newNode(1); l2->next=newNode(3); l2->next->next=newNode(4);
    ListNode *m=mergeTwoLists(l1,l2);
    while(m){printf("%d ",m->val);m=m->next;}
    printf("
"); // 1 1 2 3 4 4
    return 0;
}`}},{id:10,title:"Trapping Rain Water",difficulty:"Hard",category:"Arrays / Two Pointer",company:["Amazon","Google"],acceptance:"42%",fnName:"trap",description:"Given **n** non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.",examples:[{input:"height = [0,1,0,2,1,0,1,3,2,1,2,1]",output:"6",explanation:"6 units of rain water are trapped"},{input:"height = [4,2,0,3,2,5]",output:"9"}],constraints:["n == height.length","1 ≤ n ≤ 2 × 10⁴","0 ≤ height[i] ≤ 10⁵"],hints:["For each position, water = min(maxLeft, maxRight) - height[i]","Two-pointer O(n) is optimal","Move the pointer with the smaller max-height inward"],solution:`**Approach: Two Pointers (O(n) time, O(1) space)**

Maintain left/right pointers and their respective max heights. The pointer with the smaller max determines the water level.

Water at position = min(maxLeft, maxRight) - height[i]`,starterCode:{71:`def trap(height):
    left, right = 0, len(height) - 1
    left_max = right_max = 0
    water = 0
    while left < right:
        if height[left] < height[right]:
            if height[left] >= left_max:
                left_max = height[left]
            else:
                water += left_max - height[left]
            left += 1
        else:
            if height[right] >= right_max:
                right_max = height[right]
            else:
                water += right_max - height[right]
            right -= 1
    return water

# ── Tests ──
print(trap([0,1,0,2,1,0,1,3,2,1,2,1]))  # 6
print(trap([4,2,0,3,2,5]))               # 9`,62:`public class Solution {
    public int trap(int[] height) {
        int left = 0, right = height.length - 1;
        int leftMax = 0, rightMax = 0, water = 0;
        while (left < right) {
            if (height[left] < height[right]) {
                if (height[left] >= leftMax) leftMax = height[left];
                else water += leftMax - height[left];
                left++;
            } else {
                if (height[right] >= rightMax) rightMax = height[right];
                else water += rightMax - height[right];
                right--;
            }
        }
        return water;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.trap(new int[]{0,1,0,2,1,0,1,3,2,1,2,1})); // 6
        System.out.println(sol.trap(new int[]{4,2,0,3,2,5}));              // 9
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

int trap(vector<int>& height) {
    int left = 0, right = height.size() - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

int main() {
    vector<int> h = {0,1,0,2,1,0,1,3,2,1,2,1};
    cout << trap(h) << endl; // 6
    return 0;
}`,63:`/**
 * @param {number[]} height
 * @return {number}
 */
function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

// ── Tests ──
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6
console.log(trap([4,2,0,3,2,5]));               // 9`,50:`#include <stdio.h>

int trap(int* height, int n) {
    int left = 0, right = n - 1;
    int leftMax = 0, rightMax = 0, water = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) leftMax = height[left];
            else water += leftMax - height[left];
            left++;
        } else {
            if (height[right] >= rightMax) rightMax = height[right];
            else water += rightMax - height[right];
            right--;
        }
    }
    return water;
}

int main() {
    int h[] = {0,1,0,2,1,0,1,3,2,1,2,1};
    printf("%d
", trap(h, 12)); // 6
    return 0;
}`}},{id:11,title:"Longest Palindromic Substring",difficulty:"Hard",category:"DP / Strings",company:["Amazon","Google","Microsoft"],acceptance:"38%",fnName:"longestPalindrome",description:"Given a string **s**, return the **longest palindromic substring** in s.",examples:[{input:'s = "babad"',output:'"bab"',explanation:'"aba" is also valid'},{input:'s = "cbbd"',output:'"bb"'}],constraints:["1 ≤ s.length ≤ 1000","s consists of digits and English letters"],hints:["Try expand-around-center approach","For each character, expand outward while palindrome holds","Handle both odd-length and even-length centers"],solution:`**Approach: Expand Around Center (O(n²) time, O(1) space)**

For each character (and pair), expand outward as long as characters match. Track the longest palindrome found.

**Two center types:**
- Odd length: expand from single character "aba"
- Even length: expand from pair "bb"`,starterCode:{71:`def longestPalindrome(s):
    def expand(left, right):
        while left >= 0 and right < len(s) and s[left] == s[right]:
            left -= 1
            right += 1
        return s[left + 1:right]  # slice of valid palindrome

    result = ""
    for i in range(len(s)):
        odd  = expand(i, i)       # odd length
        even = expand(i, i + 1)   # even length
        result = max(result, odd, even, key=len)
    return result

# ── Tests ──
print(longestPalindrome("babad"))  # "bab" or "aba"
print(longestPalindrome("cbbd"))   # "bb"
print(longestPalindrome("a"))      # "a"`,62:`public class Solution {
    private String expand(String s, int left, int right) {
        while (left >= 0 && right < s.length() && s.charAt(left) == s.charAt(right)) {
            left--; right++;
        }
        return s.substring(left + 1, right);
    }

    public String longestPalindrome(String s) {
        String result = "";
        for (int i = 0; i < s.length(); i++) {
            String odd  = expand(s, i, i);
            String even = expand(s, i, i + 1);
            if (odd.length()  > result.length()) result = odd;
            if (even.length() > result.length()) result = even;
        }
        return result;
    }

    public static void main(String[] args) {
        Solution sol = new Solution();
        System.out.println(sol.longestPalindrome("babad")); // bab
        System.out.println(sol.longestPalindrome("cbbd"));  // bb
    }
}`,54:`#include <bits/stdc++.h>
using namespace std;

string longestPalindrome(string s) {
    int n = s.size(), start = 0, maxLen = 1;
    auto expand = [&](int l, int r) {
        while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }
        if (r - l - 1 > maxLen) { maxLen = r - l - 1; start = l + 1; }
    };
    for (int i = 0; i < n; i++) {
        expand(i, i);     // odd
        expand(i, i + 1); // even
    }
    return s.substr(start, maxLen);
}

int main() {
    cout << longestPalindrome("babad") << endl; // bab
    cout << longestPalindrome("cbbd")  << endl; // bb
    return 0;
}`,63:`/**
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    let result = "";
    function expand(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--; right++;
        }
        return s.slice(left + 1, right);
    }
    for (let i = 0; i < s.length; i++) {
        const odd  = expand(i, i);
        const even = expand(i, i + 1);
        const longer = odd.length > even.length ? odd : even;
        if (longer.length > result.length) result = longer;
    }
    return result;
}

// ── Tests ──
console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd"));  // "bb"`,50:`#include <stdio.h>
#include <string.h>

char result[1001];

void expand(char* s, int n, int l, int r) {
    while (l >= 0 && r < n && s[l] == s[r]) { l--; r++; }
    int len = r - l - 1;
    if (len > (int)strlen(result)) {
        strncpy(result, s + l + 1, len);
        result[len] = '\0';
    }
}

char* longestPalindrome(char* s) {
    int n = strlen(s);
    result[0] = s[0]; result[1] = '\0';
    for (int i = 0; i < n; i++) {
        expand(s, n, i, i);     // odd
        expand(s, n, i, i + 1); // even
    }
    return result;
}

int main() {
    printf("%s
", longestPalindrome("babad")); // bab
    printf("%s
", longestPalindrome("cbbd"));  // bb
    return 0;
}`}}];async function m4(t,e){var n;try{const r=await fetch("https://judge0-ce.p.rapidapi.com/submissions?base64_encoded=false&wait=true",{method:"POST",headers:{"Content-Type":"application/json","X-RapidAPI-Key":"SIGN_UP_FOR_KEY","X-RapidAPI-Host":"judge0-ce.p.rapidapi.com"},body:JSON.stringify({source_code:t,language_id:e,cpu_time_limit:5,memory_limit:128e3})});if(!r.ok)throw new Error("API error");const i=await r.json();return i.stdout?{success:!0,output:i.stdout.trim(),time:i.time,memory:i.memory}:i.stderr?{success:!1,output:i.stderr,type:"Runtime Error"}:i.compile_output?{success:!1,output:i.compile_output,type:"Compile Error"}:{success:!1,output:((n=i.status)==null?void 0:n.description)||"Unknown",type:"Status"}}catch{return{success:!1,output:`⚙️  To enable live code execution:

1. Go to rapidapi.com → search "Judge0 CE"
2. Subscribe to free plan (50 runs/day)
3. Copy your RapidAPI key
4. Replace "SIGN_UP_FOR_KEY" in CodingPractice.jsx

JavaScript runs live in the browser — try switching to JS!`,type:"Setup Required"}}}function c_({difficulty:t,small:e}){const n=li[t];return a.jsx("span",{style:{fontSize:e?10:12,fontWeight:700,color:n.color,background:n.bg,border:`1px solid ${n.border}`,padding:e?"2px 7px":"3px 10px",borderRadius:999},children:t})}function g4({problems:t,selected:e,onSelect:n,filter:r,setFilter:i,search:s,setSearch:o,solved:c}){const u=t.filter(f=>{const g=r.diff==="All"||f.difficulty===r.diff,m=!s||f.title.toLowerCase().includes(s.toLowerCase())||f.category.toLowerCase().includes(s.toLowerCase());return g&&m}),d=t.filter(f=>c.has(f.id)).length;return a.jsxs("div",{style:{width:300,flexShrink:0,display:"flex",flexDirection:"column",background:"#fff",border:"1.5px solid var(--card-border)",borderRadius:16,overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"12px 14px",borderBottom:"1px solid var(--card-border)",background:"#fafafa"},children:[a.jsxs("div",{style:{position:"relative",marginBottom:8},children:[a.jsx("span",{style:{position:"absolute",left:9,top:"50%",transform:"translateY(-50%)",fontSize:13,color:"#9ca3af"},children:"🔍"}),a.jsx("input",{value:s,onChange:f=>o(f.target.value),placeholder:"Search problems...",style:{width:"100%",padding:"7px 10px 7px 30px",border:"1.5px solid var(--card-border)",borderRadius:8,fontSize:12.5,fontFamily:"inherit",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:f=>f.target.style.borderColor="var(--purple-primary)",onBlur:f=>f.target.style.borderColor="var(--card-border)"})]}),a.jsx("div",{style:{display:"flex",gap:5,marginBottom:6},children:["All","Easy","Medium","Hard"].map(f=>{var g,m,S;return a.jsx("button",{onClick:()=>i(C=>({...C,diff:f})),style:{flex:1,padding:"4px 2px",borderRadius:7,border:"1.5px solid",cursor:"pointer",fontFamily:"inherit",fontSize:10.5,fontWeight:700,transition:"all 0.15s",borderColor:r.diff===f?((g=li[f])==null?void 0:g.border)||"var(--purple-primary)":"var(--card-border)",background:r.diff===f?((m=li[f])==null?void 0:m.bg)||"var(--purple-xsoft)":"#fff",color:r.diff===f?((S=li[f])==null?void 0:S.color)||"var(--purple-primary)":"var(--text-muted)"},children:f},f)})})]}),a.jsxs("div",{style:{padding:"8px 14px",borderBottom:"1px solid var(--card-border)",background:"#f9fafb"},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginBottom:4},children:[a.jsx("span",{style:{fontSize:11,color:"var(--text-muted)",fontWeight:600},children:"Progress"}),a.jsxs("span",{style:{fontSize:11,color:"var(--purple-primary)",fontWeight:700},children:[d," / ",t.length]})]}),a.jsx("div",{style:{height:5,borderRadius:999,background:"#e5e7eb",overflow:"hidden"},children:a.jsx("div",{style:{height:"100%",width:`${d/t.length*100}%`,background:"linear-gradient(90deg, #7c3aed, #6366f1)",borderRadius:999,transition:"width 0.4s ease"}})})]}),a.jsx("div",{style:{flex:1,overflowY:"auto",maxHeight:"calc(100vh - 330px)"},children:u.length===0?a.jsx("div",{style:{padding:"28px 16px",textAlign:"center",color:"var(--text-muted)",fontSize:13},children:"No problems match filters"}):u.map(f=>{const g=c.has(f.id),m=(e==null?void 0:e.id)===f.id;return a.jsxs("div",{onClick:()=>n(f),style:{padding:"11px 14px",borderBottom:"1px solid #f3f4f6",cursor:"pointer",transition:"all 0.15s",background:m?"var(--purple-xsoft)":"#fff",borderLeft:`3px solid ${m?"var(--purple-primary)":"transparent"}`,boxShadow:m?"inset 0 0 0 1px rgba(109,40,217,0.08)":"none"},onMouseEnter:S=>{m||(S.currentTarget.style.background="#f9fafb")},onMouseLeave:S=>{m||(S.currentTarget.style.background="#fff")},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:3},children:[a.jsxs("span",{style:{fontSize:13,fontWeight:700,color:m?"var(--purple-primary)":"var(--text-primary)",display:"flex",alignItems:"center",gap:5},children:[g?a.jsx("span",{title:"Solved",style:{color:"#16a34a"},children:"✅"}):a.jsx("span",{style:{color:"#d1d5db",fontSize:11},children:"○"}),f.id,". ",f.title]}),a.jsx(c_,{difficulty:f.difficulty,small:!0})]}),a.jsxs("div",{style:{display:"flex",gap:5,alignItems:"center",paddingLeft:18},children:[a.jsx("span",{style:{fontSize:10.5,color:"var(--text-muted)",background:"#f3f4f6",padding:"1px 6px",borderRadius:999},children:f.category.split(" / ")[0]}),a.jsxs("span",{style:{fontSize:10.5,color:"var(--text-muted)"},children:[f.acceptance," acceptance"]})]})]},f.id)})}),a.jsx("div",{style:{padding:"8px 14px",borderTop:"1px solid var(--card-border)",background:"#fafafa"},children:a.jsxs("span",{style:{fontSize:11,color:"var(--text-muted)"},children:[u.length," / ",t.length," shown"]})})]})}function y4({problem:t,activeTab:e,setActiveTab:n,onMarkSolved:r,isSolved:i}){const[s,o]=M.useState([]);return M.useEffect(()=>o([]),[t.id]),a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"#fff",overflow:"hidden"},children:[a.jsxs("div",{style:{padding:"18px 20px 12px",borderBottom:"1px solid var(--card-border)",flexShrink:0},children:[a.jsxs("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"var(--text-primary)",marginBottom:8},children:[t.id,". ",t.title]}),a.jsxs("div",{style:{display:"flex",gap:6,flexWrap:"wrap",alignItems:"center"},children:[a.jsx(c_,{difficulty:t.difficulty}),a.jsx("span",{style:{fontSize:11.5,color:"var(--text-secondary)",background:"#f3f4f6",padding:"2px 8px",borderRadius:999,fontWeight:600},children:t.category}),a.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:"var(--text-muted)"},children:["✅ ",t.acceptance]})]}),a.jsx("div",{style:{display:"flex",gap:0,marginTop:12,borderRadius:8,overflow:"hidden",border:"1.5px solid var(--card-border)",width:"fit-content"},children:["Description","Solution","Hints"].map((c,u)=>a.jsx("button",{onClick:()=>n(c),style:{padding:"5px 14px",border:"none",background:e===c?"var(--purple-primary)":"#f9fafb",color:e===c?"#fff":"var(--text-muted)",fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit",borderLeft:u>0?"1px solid var(--card-border)":"none",transition:"all 0.15s"},children:c},c))})]}),a.jsxs("div",{style:{flex:1,overflowY:"auto",padding:"16px 20px"},children:[e==="Description"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{style:{fontSize:13.5,color:"var(--text-secondary)",lineHeight:1.85,marginBottom:18},dangerouslySetInnerHTML:{__html:t.description.replace(/\*\*(.*?)\*\*/g,'<strong style="color:#111827">$1</strong>').replace(/\n/g,"<br/>")}}),a.jsx("div",{style:{fontWeight:800,fontSize:13,color:"var(--text-primary)",marginBottom:10,fontFamily:"Urbanist, sans-serif"},children:"Examples"}),t.examples.map((c,u)=>a.jsxs("div",{style:{background:"#f9fafb",border:"1px solid var(--card-border)",borderRadius:10,padding:"12px 14px",marginBottom:10,fontFamily:"monospace"},children:[a.jsxs("div",{style:{fontSize:12.5,marginBottom:3},children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:"Input: "}),a.jsx("strong",{children:c.input})]}),a.jsxs("div",{style:{fontSize:12.5,marginBottom:c.explanation?3:0},children:[a.jsx("span",{style:{color:"var(--text-muted)"},children:"Output: "}),a.jsx("strong",{children:c.output})]}),c.explanation&&a.jsxs("div",{style:{fontSize:11.5,color:"var(--text-muted)",fontFamily:"DM Sans, sans-serif",marginTop:4},children:["💬 ",c.explanation]})]},u)),a.jsx("div",{style:{fontWeight:800,fontSize:13,color:"var(--text-primary)",margin:"16px 0 8px",fontFamily:"Urbanist, sans-serif"},children:"Constraints"}),t.constraints.map((c,u)=>a.jsxs("div",{style:{fontSize:12.5,color:"var(--text-secondary)",display:"flex",gap:7,marginBottom:4,alignItems:"center"},children:[a.jsx("span",{style:{color:"var(--purple-primary)",fontWeight:700},children:"•"}),a.jsx("code",{style:{fontFamily:"monospace",background:"#f3f4f6",padding:"1px 6px",borderRadius:4},children:c})]},u))]}),e==="Solution"&&a.jsx("div",{children:a.jsxs("div",{style:{background:"linear-gradient(135deg, var(--purple-xsoft), #ede9fe)",border:"1.5px solid #c4b5fd",borderRadius:10,padding:"14px 16px",marginBottom:16},children:[a.jsx("div",{style:{fontSize:12,color:"#7c3aed",fontWeight:700,marginBottom:4},children:"💡 Approach & Explanation"}),a.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.85,whiteSpace:"pre-line"},dangerouslySetInnerHTML:{__html:t.solution.replace(/\*\*(.*?)\*\*/g,'<strong style="color:#111827">$1</strong>')}})]})}),e==="Hints"&&a.jsxs("div",{children:[a.jsx("p",{style:{fontSize:12.5,color:"var(--text-muted)",marginBottom:14},children:"Reveal hints one at a time. Try to solve without them first!"}),t.hints.map((c,u)=>{const d=s.includes(u);return a.jsxs("div",{style:{marginBottom:10,borderRadius:10,border:"1.5px solid",borderColor:d?"#c4b5fd":"var(--card-border)",overflow:"hidden",transition:"border-color 0.2s"},children:[a.jsxs("button",{onClick:()=>o(f=>d?f.filter(g=>g!==u):[...f,u]),style:{width:"100%",padding:"10px 14px",display:"flex",alignItems:"center",gap:10,background:d?"var(--purple-xsoft)":"#f9fafb",border:"none",cursor:"pointer",fontFamily:"inherit",textAlign:"left"},children:[a.jsx("span",{style:{width:22,height:22,borderRadius:999,background:d?"var(--purple-primary)":"#e5e7eb",color:d?"#fff":"var(--text-muted)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,flexShrink:0},children:u+1}),a.jsx("span",{style:{fontSize:12.5,fontWeight:600,color:d?"var(--purple-primary)":"var(--text-muted)"},children:d?"Hint "+(u+1):`Hint ${u+1} — click to reveal`}),a.jsx("span",{style:{marginLeft:"auto",fontSize:12,color:"var(--text-muted)"},children:d?"▲":"▼"})]}),d&&a.jsx("div",{style:{padding:"10px 14px 12px 46px",fontSize:13,color:"var(--text-secondary)",lineHeight:1.7,borderTop:"1px solid #e9d5ff",background:"#fff"},children:c})]},u)})]})]}),a.jsx("div",{style:{padding:"10px 16px",borderTop:"1px solid var(--card-border)",background:"#fafafa",flexShrink:0},children:a.jsx("button",{onClick:r,style:{width:"100%",padding:"8px",borderRadius:9,border:`1.5px solid ${i?"#86efac":"var(--card-border)"}`,background:i?"#dcfce7":"#fff",color:i?"#16a34a":"var(--text-muted)",fontSize:12.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"all 0.2s"},children:i?"✅ Marked as Solved — click to undo":"○ Mark as Solved"})})]})}function v4({problem:t,lang:e,setLang:n,code:r,setCode:i,output:s,running:o,onRun:c,onReset:u}){const d=r.split(`
`).length,f=M.useRef(null),g=M.useRef(null),[m,S]=M.useState(150);M.useRef(null);const C=M.useCallback(()=>{f.current&&g.current&&(f.current.scrollTop=g.current.scrollTop)},[]),j=M.useCallback(v=>{if(v.key==="Tab"){v.preventDefault();const b=v.target.selectionStart,P=r.substring(0,b)+"  "+r.substring(v.target.selectionEnd);i(P),setTimeout(()=>v.target.setSelectionRange(b+2,b+2),0)}v.key==="Enter"&&v.ctrlKey&&(v.preventDefault(),c())},[r,i,c]),O=M.useCallback(v=>{v.preventDefault();const b=v.clientY,P=m,L=w=>{const y=b-w.clientY;S(Math.max(80,Math.min(320,P+y)))},R=()=>{document.removeEventListener("mousemove",L),document.removeEventListener("mouseup",R)};document.addEventListener("mousemove",L),document.addEventListener("mouseup",R)},[m]),E=Bh.find(v=>v.id===e);return a.jsxs("div",{style:{flex:1,display:"flex",flexDirection:"column",background:"#1e1e2e",borderRadius:16,overflow:"hidden",border:"1.5px solid #2d2d3f"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"9px 14px",background:"#16162a",borderBottom:"1px solid #2d2d3f",flexShrink:0},children:[a.jsx("div",{style:{display:"flex",gap:5},children:["#ff5f57","#ffbd2e","#28ca41"].map((v,b)=>a.jsx("div",{style:{width:11,height:11,borderRadius:999,background:v}},b))}),a.jsxs("span",{style:{fontSize:11.5,color:"#6b7280",fontFamily:"monospace",marginLeft:4},children:[t.title.toLowerCase().replace(/ /g,"_"),".",E==null?void 0:E.ext]}),a.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:4},children:Bh.map(v=>a.jsxs("button",{onClick:()=>n(v.id),style:{padding:"3px 9px",borderRadius:6,border:"1px solid",cursor:"pointer",fontFamily:"inherit",fontSize:11,fontWeight:700,transition:"all 0.15s",borderColor:e===v.id?v.color:"#2d2d3f",background:e===v.id?v.color+"22":"transparent",color:e===v.id?v.color:"#6b7280"},children:[v.icon," ",v.name]},v.id))})]}),a.jsxs("div",{style:{flex:1,position:"relative",display:"flex",overflow:"hidden"},children:[a.jsx("div",{ref:f,style:{width:38,background:"#16162a",padding:"14px 6px 14px 0",textAlign:"right",borderRight:"1px solid #2d2d3f",userSelect:"none",flexShrink:0,overflow:"hidden"},children:Array.from({length:d},(v,b)=>a.jsx("div",{style:{fontSize:11.5,color:"#3d3d5c",lineHeight:"1.65",fontFamily:"monospace",paddingRight:6},children:b+1},b))}),a.jsx("textarea",{ref:g,value:r,onChange:v=>i(v.target.value),onScroll:C,onKeyDown:j,spellCheck:!1,style:{flex:1,padding:"14px 14px",background:"#1e1e2e",color:"#cdd6f4",border:"none",outline:"none",fontFamily:'"Fira Code", "Cascadia Code", monospace',fontSize:13.5,lineHeight:"1.65",resize:"none",tabSize:2}})]}),a.jsxs("div",{style:{display:"flex",gap:8,padding:"9px 14px",background:"#16162a",borderTop:"1px solid #2d2d3f",flexShrink:0,alignItems:"center"},children:[a.jsx("button",{onClick:u,style:{padding:"6px 12px",borderRadius:7,border:"1px solid #2d2d3f",background:"transparent",color:"#6b7280",fontSize:12,fontFamily:"inherit",fontWeight:600,cursor:"pointer",transition:"all 0.15s"},onMouseEnter:v=>v.currentTarget.style.borderColor="#4b4b6b",onMouseLeave:v=>v.currentTarget.style.borderColor="#2d2d3f",children:"↩ Reset"}),a.jsx("span",{style:{flex:1,fontSize:10.5,color:"#3d3d5c"},children:"Tab = indent · Ctrl+Enter = run"}),a.jsx("button",{onClick:c,disabled:o,style:{padding:"7px 20px",borderRadius:8,border:"none",cursor:o?"not-allowed":"pointer",fontSize:12.5,fontFamily:"inherit",fontWeight:700,transition:"all 0.2s",display:"flex",alignItems:"center",gap:6,background:o?"#2d2d3f":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:o?"#6b7280":"#fff",boxShadow:o?"none":"0 2px 8px rgba(108,60,225,0.4)"},children:o?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{display:"inline-block",width:12,height:12,border:"2px solid #6b7280",borderTopColor:"#a78bfa",borderRadius:999,animation:"spin 0.8s linear infinite"}}),"Running..."]}):"▶ Run Code"})]}),a.jsx("div",{onMouseDown:O,style:{height:6,background:"#11111f",borderTop:"1px solid #2d2d3f",cursor:"row-resize",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:a.jsx("div",{style:{width:32,height:2,background:"#2d2d3f",borderRadius:999}})}),a.jsxs("div",{style:{height:m,background:"#11111f",borderTop:"1px solid #1a1a2e",padding:"10px 14px",overflowY:"auto",flexShrink:0,transition:"height 0s"},children:[a.jsxs("div",{style:{fontSize:10,color:"#3d3d5c",fontWeight:700,marginBottom:6,textTransform:"uppercase",letterSpacing:1.5,display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{width:6,height:6,borderRadius:999,background:s===null?"#3d3d5c":s.success?"#28ca41":"#ff5f57",display:"inline-block"}}),"Output",(s==null?void 0:s.time)&&a.jsxs("span",{style:{fontWeight:500,textTransform:"none",letterSpacing:0},children:["· ⚡ ",s.time,"s · ",s.memory," KB"]})]}),s===null?a.jsx("div",{style:{fontSize:12,color:"#3d3d5c",fontFamily:"monospace"},children:'Click "Run Code" or press Ctrl+Enter to execute...'}):a.jsx("pre",{style:{fontSize:12.5,color:s.success?"#a6e3a1":"#f38ba8",fontFamily:"monospace",margin:0,whiteSpace:"pre-wrap",lineHeight:1.65},children:s.output})]}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})}function w4(){const[t,e]=M.useState(eo[0]),[n,r]=M.useState(71),[i,s]=M.useState("Description"),[o,c]=M.useState({diff:"All"}),[u,d]=M.useState(""),[f,g]=M.useState("split"),[m,S]=M.useState(null),[C,j]=M.useState(!1),[O,E]=M.useState(()=>{const A={};return eo.forEach(_=>{Bh.forEach(te=>{A[`${_.id}-${te.id}`]=_.starterCode[te.id]||""})}),A}),[v,b]=M.useState(()=>{try{return new Set(JSON.parse(localStorage.getItem("placeonix_solved")||"[]"))}catch{return new Set}}),P=`${t.id}-${n}`,L=O[P]||"",R=A=>E(_=>({..._,[P]:A}));function w(A){e(A),S(null),s("Description")}function y(A){r(A),S(null)}async function I(){if(!L.trim())return;if(j(!0),S(null),n===63){try{const _=[],te={log:(...de)=>_.push(de.map(ve=>typeof ve=="object"?JSON.stringify(ve):String(ve)).join(" "))};new Function("console",L)(te),S({success:!0,output:_.join(`
`)||"(no output)"})}catch(_){S({success:!1,output:_.message,type:"Error"})}j(!1);return}const A=await m4(L,n);S(A),j(!1)}function k(){E(A=>({...A,[P]:t.starterCode[n]||""})),S(null)}function T(){b(A=>{const _=new Set(A);return _.has(t.id)?_.delete(t.id):_.add(t.id),localStorage.setItem("placeonix_solved",JSON.stringify([..._])),_})}return a.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"calc(100vh - 130px)",minHeight:600},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:14,flexShrink:0,flexWrap:"wrap"},children:[a.jsxs("div",{children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)",lineHeight:1.2},children:"💻 Coding Practice"}),a.jsxs("p",{style:{fontSize:12.5,color:"var(--text-muted)",marginTop:2},children:[eo.length," problems · Arrays · Strings · DP · Linked Lists · Hard"]})]}),a.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:8},children:["Easy","Medium","Hard"].map(A=>a.jsxs("div",{style:{padding:"5px 12px",background:li[A].bg,border:`1px solid ${li[A].border}`,borderRadius:999,fontSize:11.5,fontWeight:700,color:li[A].color},children:[eo.filter(_=>_.difficulty===A).length," ",A]},A))}),a.jsx("div",{style:{display:"flex",gap:3,background:"#f3f4f6",borderRadius:10,padding:3},children:[["split","⊞ Split"],["problem","📄 Problem"],["editor","💻 Editor"]].map(([A,_])=>a.jsx("button",{onClick:()=>g(A),style:{padding:"5px 10px",borderRadius:7,border:"none",cursor:"pointer",fontSize:12,fontWeight:700,fontFamily:"inherit",transition:"all 0.15s",background:f===A?"#fff":"transparent",color:f===A?"var(--purple-primary)":"var(--text-muted)",boxShadow:f===A?"0 1px 3px rgba(0,0,0,0.1)":"none"},children:_},A))})]}),a.jsxs("div",{style:{display:"flex",gap:12,flex:1,overflow:"hidden"},children:[(f==="split"||f==="problem")&&a.jsx(g4,{problems:eo,selected:t,onSelect:w,filter:o,setFilter:c,search:u,setSearch:d,solved:v}),(f==="split"||f==="problem")&&t&&a.jsx("div",{style:{flex:f==="split"?"0 0 340px":1,border:"1.5px solid var(--card-border)",borderRadius:16,overflow:"hidden",display:"flex",flexDirection:"column"},children:a.jsx(y4,{problem:t,activeTab:i,setActiveTab:s,onMarkSolved:T,isSolved:v.has(t.id)})}),(f==="split"||f==="editor")&&a.jsx(v4,{problem:t,lang:n,setLang:y,code:L,setCode:R,output:m,running:C,onRun:I,onReset:k})]})]})}const x4="rzp_test_REPLACE_WITH_YOUR_KEY",oa=[{id:"starter",name:"Starter ATS Review",price:50,badge:null,color:"#6366f1",delivery:"24 hours",features:["Detailed ATS Report","Resume Mistake Analysis","Keyword Gap Analysis","Placement Readiness Score","Improvement Suggestions"],cta:"Get Detailed Report"},{id:"upgrade",name:"Resume Upgrade",price:199,badge:"Most Popular",badgeColor:"#7c3aed",color:"#7c3aed",delivery:"48 hours",features:["Everything in Starter","Full ATS Optimization","Complete Resume Rewrite","Professional Formatting","Industry-Specific Keywords","Stronger Project Descriptions","Skills Section Enhancement"],cta:"Upgrade My Resume"},{id:"success",name:"Placement Success Pack",price:499,badge:"Best Value",badgeColor:"#059669",color:"#059669",delivery:"72 hours",features:["Everything in Resume Upgrade","LinkedIn Profile Optimization","Personalized Improvement Report","Resume & LinkedIn Consistency Check","Placement-Focused Recommendations","Priority Resume Processing"],cta:"Maximize My Chances"}],b4=[{key:"payment_received",label:"Payment Received"},{key:"resume_received",label:"Resume Received"},{key:"under_review",label:"Under Review"},{key:"ats_complete",label:"ATS Analysis Complete"},{key:"optimization_in_progress",label:"Optimization In Progress"},{key:"final_review",label:"Final Review"},{key:"delivered",label:"Delivered"}];function _4(){return"PLX-"+Date.now().toString(36).toUpperCase()+"-"+Math.random().toString(36).slice(2,6).toUpperCase()}function S4(){return new Promise(t=>{if(window.Razorpay)return t(!0);const e=document.createElement("script");e.src="https://checkout.razorpay.com/v1/checkout.js",e.onload=()=>t(!0),e.onerror=()=>t(!1),document.body.appendChild(e)})}function E4(t){const e=t.length;return Math.min(85,Math.max(35,38+e%30))}function T4(){const t=[{icon:"🔒",text:"ATS-Friendly Analysis"},{icon:"🎓",text:"Student-Focused"},{icon:"🎯",text:"Placement-Oriented"},{icon:"💸",text:"Affordable Pricing"},{icon:"🛡️",text:"Secure Payments"}];return a.jsx("div",{style:{background:"rgba(255,255,255,0.06)",borderTop:"1px solid rgba(255,255,255,0.08)",borderBottom:"1px solid rgba(255,255,255,0.08)",padding:"12px 0"},children:a.jsx("div",{style:{maxWidth:900,margin:"0 auto",display:"flex",justifyContent:"center",gap:32,flexWrap:"wrap",padding:"0 24px"},children:t.map((e,n)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:7,fontSize:13,color:"rgba(255,255,255,0.75)",fontWeight:600},children:[a.jsx("span",{children:e.icon}),a.jsx("span",{children:e.text})]},n))})})}function I4({onUpgrade:t}){const[e,n]=M.useState(null),[r,i]=M.useState(null),[s,o]=M.useState(!1),[c,u]=M.useState(!1),d=M.useRef();function f(S){if(!S)return;if(!["application/pdf","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(S.type)&&!S.name.match(/\.(pdf|doc|docx)$/i)){alert("Please upload a PDF, DOC, or DOCX file.");return}n(S),i(null),o(!0),setTimeout(()=>{i(E4(S.name)),o(!1)},2200)}const g=r<50?"#ef4444":r<70?"#f97316":"#16a34a",m=r<50?"Needs Urgent Work":r<70?"Below Average":"Decent — But Can Be Better";return a.jsxs("div",{style:{background:"#fff",borderRadius:20,border:"1.5px solid #e5e7eb",padding:"32px 32px 28px",boxShadow:"0 4px 24px rgba(0,0,0,0.07)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:6},children:[a.jsx("span",{style:{fontSize:22},children:"📄"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:20,color:"#111827"},children:"Free ATS Score Checker"}),a.jsx("span",{style:{fontSize:11,fontWeight:700,background:"#dcfce7",color:"#16a34a",padding:"2px 10px",borderRadius:999,border:"1px solid #86efac"},children:"FREE"})]}),a.jsx("p",{style:{fontSize:13.5,color:"#6b7280",marginBottom:22,lineHeight:1.6},children:"Upload your resume and see how it performs against ATS filters. Most resumes fail before a human ever reads them."}),a.jsxs("div",{onClick:()=>{var S;return(S=d.current)==null?void 0:S.click()},onDragOver:S=>{S.preventDefault(),u(!0)},onDragLeave:()=>u(!1),onDrop:S=>{S.preventDefault(),u(!1),f(S.dataTransfer.files[0])},style:{border:`2px dashed ${c?"#7c3aed":"#d1d5db"}`,borderRadius:14,padding:"28px 20px",textAlign:"center",cursor:"pointer",background:c?"#f5f3ff":"#fafafa",transition:"all 0.2s",marginBottom:16},children:[a.jsx("div",{style:{fontSize:32,marginBottom:8},children:"☁️"}),a.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#374151",marginBottom:4},children:e?`✅ ${e.name}`:"Drop your resume here or click to upload"}),a.jsx("div",{style:{fontSize:12,color:"#9ca3af"},children:"PDF, DOC, DOCX • Max 5MB"}),a.jsx("input",{ref:d,type:"file",accept:".pdf,.doc,.docx",style:{display:"none"},onChange:S=>f(S.target.files[0])})]}),s&&a.jsxs("div",{style:{textAlign:"center",padding:"16px 0"},children:[a.jsx("div",{style:{display:"inline-block",width:32,height:32,border:"3px solid #e5e7eb",borderTopColor:"#7c3aed",borderRadius:999,animation:"spin 0.8s linear infinite",marginBottom:10}}),a.jsx("div",{style:{fontSize:13,color:"#6b7280",fontWeight:600},children:"Analyzing your resume against ATS filters..."})]}),r!==null&&!s&&a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:24,background:"#f9fafb",borderRadius:14,padding:"20px 24px",marginBottom:20,border:"1px solid #e5e7eb"},children:[a.jsxs("div",{style:{position:"relative",flexShrink:0},children:[a.jsxs("svg",{width:90,height:90,viewBox:"0 0 90 90",children:[a.jsx("circle",{cx:45,cy:45,r:38,fill:"none",stroke:"#e5e7eb",strokeWidth:9}),a.jsx("circle",{cx:45,cy:45,r:38,fill:"none",stroke:g,strokeWidth:9,strokeDasharray:`${r/100*238.76} 238.76`,strokeLinecap:"round",transform:"rotate(-90 45 45)",style:{transition:"stroke-dasharray 1s ease"}})]}),a.jsxs("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[a.jsx("span",{style:{fontSize:22,fontWeight:900,color:g},children:r}),a.jsx("span",{style:{fontSize:9,color:"#9ca3af",fontWeight:700},children:"/ 100"})]})]}),a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:16,fontWeight:800,color:"#111827",marginBottom:4},children:["ATS Score: ",a.jsx("span",{style:{color:g},children:m})]}),a.jsx("div",{style:{fontSize:13,color:"#6b7280",lineHeight:1.7},children:r<50?"⚠️ Your resume is likely being filtered out before recruiters see it. Immediate optimization needed.":r<70?"⚠️ Your resume passes some ATS filters but misses critical keywords and formatting standards.":"⚠️ Your resume has potential but still misses key optimization points that top candidates have."})]})]}),a.jsxs("div",{style:{marginBottom:18},children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#111827",marginBottom:10},children:"✅ Basic Issues Found:"}),["Missing quantified achievements","Weak action verbs detected","Formatting may cause ATS parse errors"].map((S,C)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"6px 0",fontSize:13,color:"#374151"},children:[a.jsx("span",{style:{color:"#ef4444",fontWeight:700},children:"✗"})," ",S]},C))]}),a.jsxs("div",{style:{background:"linear-gradient(135deg, #f5f3ff, #ede9fe)",border:"1.5px solid #c4b5fd",borderRadius:14,padding:"18px 20px",position:"relative",overflow:"hidden"},children:[a.jsxs("div",{style:{position:"absolute",inset:0,backdropFilter:"blur(3px)",background:"rgba(245,243,255,0.5)",zIndex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:10},children:[a.jsx("div",{style:{fontSize:28},children:"🔒"}),a.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#4c1d95",textAlign:"center"},children:"Unlock Full Analysis"}),a.jsx("div",{style:{fontSize:12,color:"#6d28d9",textAlign:"center",maxWidth:240},children:"See exactly what's holding your resume back and how to fix it"}),a.jsx("button",{onClick:()=>t(oa[0]),style:{padding:"9px 22px",background:"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:"#fff",border:"none",borderRadius:10,fontSize:13,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 12px rgba(109,40,217,0.4)"},children:"Unlock for ₹50 →"})]}),a.jsx("div",{style:{opacity:.25},children:["Missing Keywords","ATS Improvement Suggestions","Recruiter Red Flags","Skills Optimization","Project Description Improvements","Placement Readiness Report"].map((S,C)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"5px 0",fontSize:13},children:[a.jsx("span",{children:"🔑"})," ",S]},C))})]})]}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})}function k4(){const t=[{icon:"📐",title:"Poor Formatting",desc:"Tables, images, and fancy layouts confuse ATS systems and get your resume rejected instantly."},{icon:"💬",title:"Weak Project Descriptions",desc:'Vague descriptions like "worked on a project" tell recruiters nothing. They want impact and numbers.'},{icon:"🔑",title:"Missing Keywords",desc:"ATS filters scan for specific skills and keywords. If they're not there, your resume never reaches a human."},{icon:"📋",title:"Generic Resumes",desc:"One-size-fits-all resumes don't work. Recruiters want to see alignment with their specific requirements."},{icon:"🤖",title:"ATS Incompatibility",desc:"Even well-written resumes fail if they use the wrong file format, fonts, or section headings."},{icon:"📎",title:"Irrelevant Information",desc:"Hobbies, personal photos, and unrelated experience waste precious space and dilute your profile."}];return a.jsx("div",{style:{padding:"60px 0",background:"#fff"},children:a.jsxs("div",{style:{maxWidth:900,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("div",{style:{display:"inline-block",background:"#fef2f2",color:"#dc2626",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid #fca5a5",marginBottom:12},children:"WHY STUDENTS GET REJECTED"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#111827",marginBottom:12},children:"6 Reasons Your Resume Gets Filtered Out"}),a.jsx("p",{style:{fontSize:15,color:"#6b7280",maxWidth:560,margin:"0 auto"},children:"Recruiters spend an average of 7 seconds on a resume. ATS systems spend even less. Here's what's killing your chances."})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(260px, 1fr))",gap:18},children:t.map((e,n)=>a.jsxs("div",{style:{padding:"22px 20px",background:"#fafafa",border:"1.5px solid #f3f4f6",borderRadius:14,transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#7c3aed",r.currentTarget.style.background="#f5f3ff"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#f3f4f6",r.currentTarget.style.background="#fafafa"},children:[a.jsx("div",{style:{fontSize:28,marginBottom:10},children:e.icon}),a.jsx("div",{style:{fontSize:15,fontWeight:800,color:"#111827",marginBottom:6},children:e.title}),a.jsx("div",{style:{fontSize:13,color:"#6b7280",lineHeight:1.7},children:e.desc})]},n))})]})})}function C4(){const t=[{before:"Generic Resume",after:"ATS-Optimized Resume"},{before:"Low ATS Score (40-55)",after:"High ATS Score (80+)"},{before:"Weak Project Descriptions",after:"Impact-Driven Projects with Numbers"},{before:"Few Interview Calls",after:"More Shortlisting Opportunities"},{before:"Missing Industry Keywords",after:"Role-Specific Keywords Included"},{before:"Generic Skills Section",after:"Targeted Skills for Your Domain"}];return a.jsx("div",{style:{padding:"60px 0",background:"linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 100%)"},children:a.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("div",{style:{display:"inline-block",background:"rgba(139,92,246,0.2)",color:"#a78bfa",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid rgba(167,139,250,0.3)",marginBottom:12},children:"TRANSFORMATION"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#fff",marginBottom:12},children:"Before vs After Optimization"}),a.jsx("p",{style:{fontSize:15,color:"#94a3b8"},children:"See the difference a professionally optimized resume makes."})]}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24},children:[a.jsxs("div",{style:{background:"rgba(239,68,68,0.08)",border:"1.5px solid rgba(239,68,68,0.25)",borderRadius:16,padding:"24px 22px"},children:[a.jsxs("div",{style:{fontSize:13,fontWeight:800,color:"#f87171",marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"#ef4444",display:"inline-block"}}),"BEFORE"]}),t.map((e,n)=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:12,fontSize:13,color:"#f87171"},children:[a.jsx("span",{style:{marginTop:2,flexShrink:0},children:"✗"}),a.jsx("span",{children:e.before})]},n))]}),a.jsxs("div",{style:{background:"rgba(22,163,74,0.08)",border:"1.5px solid rgba(22,163,74,0.25)",borderRadius:16,padding:"24px 22px"},children:[a.jsxs("div",{style:{fontSize:13,fontWeight:800,color:"#4ade80",marginBottom:16,display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:8,height:8,borderRadius:999,background:"#22c55e",display:"inline-block"}}),"AFTER"]}),t.map((e,n)=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:12,fontSize:13,color:"#4ade80"},children:[a.jsx("span",{style:{marginTop:2,flexShrink:0},children:"✓"}),a.jsx("span",{children:e.after})]},n))]})]})]})})}function A4(){const t=[{icon:"⚡",title:"Relevant Skills",desc:"Specific technical and soft skills that match the job description exactly."},{icon:"🏗️",title:"Strong Projects",desc:"Projects with clear outcomes, technologies used, and measurable results."},{icon:"🤖",title:"ATS-Friendly Structure",desc:"Simple layouts with standard headings that parse cleanly through automated filters."},{icon:"📈",title:"Clear Achievements",desc:"Numbers and percentages that show what you actually accomplished, not just what you did."},{icon:"✨",title:"Professional Presentation",desc:"Clean, consistent formatting that reads well in 7 seconds and makes a strong first impression."}];return a.jsx("div",{style:{padding:"60px 0",background:"#f9fafb"},children:a.jsxs("div",{style:{maxWidth:860,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("div",{style:{display:"inline-block",background:"#f0fdf4",color:"#16a34a",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid #86efac",marginBottom:12},children:"RECRUITER INSIGHTS"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#111827",marginBottom:12},children:"What Recruiters Actually Want"}),a.jsx("p",{style:{fontSize:15,color:"#6b7280"},children:"We've studied what hiring managers look for. Here's exactly what makes them shortlist a candidate."})]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:t.map((e,n)=>a.jsxs("div",{style:{display:"flex",gap:18,padding:"18px 22px",background:"#fff",border:"1.5px solid #e5e7eb",borderRadius:14,alignItems:"flex-start",transition:"all 0.2s"},onMouseEnter:r=>{r.currentTarget.style.borderColor="#7c3aed",r.currentTarget.style.boxShadow="0 4px 16px rgba(124,58,237,0.1)"},onMouseLeave:r=>{r.currentTarget.style.borderColor="#e5e7eb",r.currentTarget.style.boxShadow="none"},children:[a.jsx("div",{style:{width:42,height:42,background:"#f5f3ff",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:e.icon}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:15,fontWeight:800,color:"#111827",marginBottom:4},children:e.title}),a.jsx("div",{style:{fontSize:13,color:"#6b7280",lineHeight:1.7},children:e.desc})]})]},n))})]})})}function R4({onSelect:t,purchasedPlan:e}){return a.jsx("div",{style:{padding:"60px 0",background:"#fff"},children:a.jsxs("div",{style:{maxWidth:960,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:48},children:[a.jsx("div",{style:{display:"inline-block",background:"#f5f3ff",color:"#7c3aed",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid #c4b5fd",marginBottom:12},children:"CHOOSE YOUR PLAN"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:30,color:"#111827",marginBottom:12},children:"Affordable Pricing. Real Results."}),a.jsx("p",{style:{fontSize:15,color:"#6b7280",maxWidth:520,margin:"0 auto"},children:"All plans are handled by our placement experts. No AI-only solutions — real, manual, personalized reviews."})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:20,alignItems:"start"},children:oa.map(n=>a.jsxs("div",{style:{position:"relative",borderRadius:20,border:`2px solid ${n.badge==="Most Popular"?n.color:"#e5e7eb"}`,padding:"28px 24px",background:"#fff",boxShadow:n.badge==="Most Popular"?"0 8px 32px rgba(124,58,237,0.15)":"0 2px 8px rgba(0,0,0,0.04)",transition:"transform 0.2s",transform:n.badge==="Most Popular"?"scale(1.03)":"scale(1)"},children:[n.badge&&a.jsx("div",{style:{position:"absolute",top:-13,left:"50%",transform:"translateX(-50%)",background:n.badgeColor,color:"#fff",fontSize:11,fontWeight:800,padding:"4px 16px",borderRadius:999,whiteSpace:"nowrap"},children:n.badge}),a.jsx("div",{style:{fontSize:16,fontWeight:800,color:"#111827",marginBottom:6},children:n.name}),a.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:4,marginBottom:4},children:[a.jsxs("span",{style:{fontSize:36,fontWeight:900,color:n.color},children:["₹",n.price]}),a.jsx("span",{style:{fontSize:13,color:"#9ca3af"},children:"one-time"})]}),a.jsxs("div",{style:{fontSize:12,color:"#9ca3af",marginBottom:20},children:["⏱ Delivered in ",n.delivery]}),a.jsx("div",{style:{borderTop:"1px solid #f3f4f6",paddingTop:18,marginBottom:20},children:n.features.map((r,i)=>a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:8,marginBottom:9,fontSize:13,color:"#374151"},children:[a.jsx("span",{style:{color:n.color,fontWeight:700,flexShrink:0,marginTop:1},children:"✓"}),a.jsx("span",{children:r})]},i))}),a.jsx("button",{onClick:()=>t(n),disabled:e===n.id,style:{width:"100%",padding:"12px",borderRadius:12,border:"none",cursor:e===n.id?"default":"pointer",fontSize:14,fontWeight:700,fontFamily:"inherit",transition:"all 0.2s",background:e===n.id?"#f3f4f6":`linear-gradient(135deg, ${n.color}, ${n.color}dd)`,color:e===n.id?"#9ca3af":"#fff",boxShadow:e===n.id?"none":`0 4px 14px ${n.color}44`},children:e===n.id?"✅ Purchased":n.cta})]},n.id))}),a.jsx("div",{style:{textAlign:"center",marginTop:24,fontSize:13,color:"#9ca3af"},children:"🔒 Secure Payment · Your resume stays private · No spam"})]})})}function P4({purchasedPlan:t,onSelect:e}){if(!t)return null;const n=t==="starter"?oa[1]:t==="upgrade"?oa[2]:null;return n?a.jsx("div",{style:{padding:"24px",background:"linear-gradient(135deg, #7c3aed11, #6366f111)",border:"1.5px solid #c4b5fd",borderRadius:16,margin:"0 0 32px"},children:a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:16},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:13,color:"#7c3aed",fontWeight:700,marginBottom:4},children:"🚀 Your resume still has room to grow!"}),a.jsxs("div",{style:{fontSize:16,fontWeight:800,color:"#111827",marginBottom:4},children:["Upgrade to ",n.name]}),a.jsx("div",{style:{fontSize:13,color:"#6b7280"},children:n.features.slice(1,4).join(" · ")})]}),a.jsxs("button",{onClick:()=>e(n),style:{padding:"11px 24px",background:"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:"#fff",border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px rgba(109,40,217,0.35)",whiteSpace:"nowrap"},children:["Upgrade for ₹",n.price," →"]})]})}):null}function j4({plan:t,onClose:e,onSuccess:n}){const[r,i]=M.useState(1),[s,o]=M.useState(!1),[c,u]=M.useState(null),[d,f]=M.useState(null),{user:g}=bn(),[m,S]=M.useState({name:"",email:(g==null?void 0:g.email)||"",mobile:"",file:null,jobRole:"",branch:"",graduationYear:new Date().getFullYear()+1,linkedin:"",notes:""}),[C,j]=M.useState(!1),[O,E]=M.useState(!1),v=M.useRef(),b=(w,y)=>S(I=>({...I,[w]:y}));async function P(){if(o(!0),!await S4()){alert("Failed to load payment gateway. Please check your internet connection."),o(!1);return}const y=_4();f(y);const I={key:x4,amount:t.price*100,currency:"INR",name:"Placeonix",description:t.name,image:"https://placeonix-theta.vercel.app/favicon.ico",prefill:{name:m.name||(g==null?void 0:g.displayName),email:m.email,contact:m.mobile},notes:{plan:t.id,orderId:y},theme:{color:"#7c3aed"},modal:{ondismiss:()=>{o(!1)}},handler:function(k){u(k.razorpay_payment_id),o(!1),i(3)}};try{const k=new window.Razorpay(I);k.on("payment.failed",()=>{o(!1),alert("Payment failed. Please try again.")}),k.open()}catch{o(!1),alert("Payment gateway error. Please try again.")}}async function L(w){if(w.preventDefault(),!m.name||!m.email||!m.mobile||!m.file||!m.jobRole||!m.branch){alert("Please fill in all required fields and upload your resume.");return}j(!0);try{const y=await zb(ko(bt,"orders"),{orderId:d,planId:t.id,planName:t.name,price:t.price,paymentId:c,status:"resume_received",customerName:m.name,customerEmail:m.email,customerMobile:m.mobile,resumeFileName:m.file.name,jobRole:m.jobRole,branch:m.branch,graduationYear:m.graduationYear,linkedin:m.linkedin,notes:m.notes,userId:(g==null?void 0:g.uid)||null,createdAt:Qt(),updatedAt:Qt(),deliveryDays:t.delivery});E(!0),i(4),n&&n({orderId:d,planName:t.name,docId:y.id})}catch(y){alert("Submission failed: "+y.message)}j(!1)}const R=["Select Package","Payment","Submit Resume","Confirmation"];return a.jsxs("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.65)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:w=>w.target===w.currentTarget&&e(),children:[a.jsxs("div",{style:{background:"#fff",borderRadius:22,width:"100%",maxWidth:560,maxHeight:"90vh",overflow:"auto",boxShadow:"0 24px 80px rgba(0,0,0,0.3)"},children:[a.jsxs("div",{style:{padding:"22px 24px 16px",borderBottom:"1px solid #f3f4f6",display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsx("div",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:18,color:"#111827"},children:t.name}),a.jsx("button",{onClick:e,style:{background:"none",border:"none",fontSize:22,cursor:"pointer",color:"#9ca3af",lineHeight:1},children:"×"})]}),a.jsx("div",{style:{padding:"16px 24px",borderBottom:"1px solid #f3f4f6"},children:a.jsx("div",{style:{display:"flex",gap:0},children:R.map((w,y)=>{const I=y+1,k=r===I,T=r>I;return a.jsxs(Gh.Fragment,{children:[a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,flex:1},children:[a.jsx("div",{style:{width:28,height:28,borderRadius:999,display:"flex",alignItems:"center",justifyContent:"center",fontSize:12,fontWeight:800,background:T||k?"#7c3aed":"#f3f4f6",color:T||k?"#fff":"#9ca3af"},children:T?"✓":I}),a.jsx("div",{style:{fontSize:9.5,fontWeight:600,color:k||T?"#7c3aed":"#9ca3af",textAlign:"center",lineHeight:1.3},children:w})]}),y<3&&a.jsx("div",{style:{flex:1,height:2,background:r>I?"#7c3aed":"#f3f4f6",marginTop:13,transition:"background 0.3s"}})]},y)})})}),a.jsxs("div",{style:{padding:"24px"},children:[r===1&&a.jsxs("div",{children:[a.jsxs("div",{style:{background:"#f9fafb",border:"1.5px solid #e5e7eb",borderRadius:14,padding:"20px",marginBottom:20},children:[a.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#111827",marginBottom:12},children:t.name}),t.features.map((w,y)=>a.jsxs("div",{style:{display:"flex",gap:8,marginBottom:7,fontSize:13,color:"#374151"},children:[a.jsx("span",{style:{color:"#7c3aed"},children:"✓"}),a.jsx("span",{children:w})]},y)),a.jsxs("div",{style:{borderTop:"1px solid #e5e7eb",marginTop:14,paddingTop:14,display:"flex",justifyContent:"space-between",alignItems:"center"},children:[a.jsx("span",{style:{fontSize:13,color:"#6b7280"},children:"Total Amount"}),a.jsxs("span",{style:{fontSize:22,fontWeight:900,color:"#7c3aed"},children:["₹",t.price]})]})]}),a.jsx("button",{onClick:()=>i(2),style:{width:"100%",padding:"14px",background:"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 4px 14px rgba(109,40,217,0.4)"},children:"Proceed to Payment →"})]}),r===2&&a.jsxs("div",{children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:24},children:[a.jsxs("div",{style:{fontSize:36,fontWeight:900,color:"#7c3aed",marginBottom:4},children:["₹",t.price]}),a.jsxs("div",{style:{fontSize:14,color:"#6b7280"},children:["for ",t.name]})]}),a.jsxs("div",{style:{background:"#f9fafb",border:"1px solid #e5e7eb",borderRadius:14,padding:"16px 18px",marginBottom:20},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#374151",marginBottom:12},children:"PAYMENT METHODS ACCEPTED"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:["UPI","Google Pay","PhonePe","Paytm","Razorpay","Debit Card","Credit Card","Net Banking"].map(w=>a.jsx("span",{style:{padding:"4px 10px",background:"#fff",border:"1px solid #e5e7eb",borderRadius:7,fontSize:12,color:"#374151",fontWeight:600},children:w},w))})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:"#6b7280",marginBottom:20,justifyContent:"center"},children:[a.jsx("span",{children:"🔒"}),a.jsx("span",{children:"Secure Payment Protected by Razorpay"})]}),a.jsx("button",{onClick:P,disabled:s,style:{width:"100%",padding:"14px",background:s?"#f3f4f6":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:s?"#9ca3af":"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:s?"not-allowed":"pointer",display:"flex",alignItems:"center",justifyContent:"center",gap:8},children:s?a.jsxs(a.Fragment,{children:[a.jsx("span",{style:{width:16,height:16,border:"2px solid #d1d5db",borderTopColor:"#7c3aed",borderRadius:999,display:"inline-block",animation:"spin 0.8s linear infinite"}}),"Opening Razorpay..."]}):`Pay ₹${t.price} Securely →`})]}),r===3&&a.jsxs("form",{onSubmit:L,children:[a.jsx("div",{style:{fontSize:13,color:"#16a34a",fontWeight:700,background:"#dcfce7",padding:"10px 14px",borderRadius:10,marginBottom:20,display:"flex",gap:8},children:"✅ Payment successful! Now submit your details."}),[{label:"Full Name *",key:"name",type:"text",placeholder:"Your full name"},{label:"Email Address *",key:"email",type:"email",placeholder:"your@email.com"},{label:"Mobile Number *",key:"mobile",type:"tel",placeholder:"10-digit mobile number"},{label:"Target Job Role *",key:"jobRole",type:"text",placeholder:"e.g. Software Engineer, Data Analyst"},{label:"Branch / Degree *",key:"branch",type:"text",placeholder:"e.g. B.Tech CSE, MBA"},{label:"Graduation Year *",key:"graduationYear",type:"number",placeholder:"e.g. 2025"},{label:"LinkedIn URL (Optional)",key:"linkedin",type:"url",placeholder:"https://linkedin.com/in/yourprofile"}].map(({label:w,key:y,type:I,placeholder:k})=>a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12.5,fontWeight:700,color:"#374151",display:"block",marginBottom:5},children:w}),a.jsx("input",{type:I,value:m[y],onChange:T=>b(y,T.target.value),placeholder:k,required:!w.includes("Optional"),style:{width:"100%",padding:"9px 12px",border:"1.5px solid #e5e7eb",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",transition:"border-color 0.2s"},onFocus:T=>T.target.style.borderColor="#7c3aed",onBlur:T=>T.target.style.borderColor="#e5e7eb"})]},y)),a.jsxs("div",{style:{marginBottom:14},children:[a.jsx("label",{style:{fontSize:12.5,fontWeight:700,color:"#374151",display:"block",marginBottom:5},children:"Upload Resume *"}),a.jsxs("div",{onClick:()=>{var w;return(w=v.current)==null?void 0:w.click()},style:{border:"2px dashed #d1d5db",borderRadius:10,padding:"16px",textAlign:"center",cursor:"pointer",background:"#fafafa",transition:"all 0.2s"},onMouseEnter:w=>w.currentTarget.style.borderColor="#7c3aed",onMouseLeave:w=>w.currentTarget.style.borderColor="#d1d5db",children:[a.jsx("div",{style:{fontSize:13,color:m.file?"#16a34a":"#6b7280",fontWeight:600},children:m.file?`✅ ${m.file.name}`:"📄 Click to upload your resume (PDF/DOC/DOCX)"}),a.jsx("input",{ref:v,type:"file",accept:".pdf,.doc,.docx",style:{display:"none"},onChange:w=>b("file",w.target.files[0])})]})]}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("label",{style:{fontSize:12.5,fontWeight:700,color:"#374151",display:"block",marginBottom:5},children:"Additional Notes (Optional)"}),a.jsx("textarea",{value:m.notes,onChange:w=>b("notes",w.target.value),placeholder:"Any specific areas you'd like us to focus on...",style:{width:"100%",padding:"9px 12px",border:"1.5px solid #e5e7eb",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",height:80,resize:"vertical"}})]}),a.jsx("button",{type:"submit",disabled:C,style:{width:"100%",padding:"14px",background:C?"#f3f4f6":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:C?"#9ca3af":"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:C?"not-allowed":"pointer"},children:C?"Submitting...":"Submit & Confirm Order →"})]}),r===4&&a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:52,marginBottom:16},children:"🎉"}),a.jsx("h3",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"#111827",marginBottom:10},children:"Order Confirmed!"}),a.jsx("p",{style:{fontSize:14,color:"#6b7280",marginBottom:24,lineHeight:1.7},children:"Your order has been received successfully. Resume review will begin shortly."}),a.jsx("div",{style:{background:"#f9fafb",border:"1.5px solid #e5e7eb",borderRadius:14,padding:"20px",marginBottom:24,textAlign:"left"},children:[["Order ID",d],["Package",t.name],["Payment",`₹${t.price} — Paid`],["Estimated Delivery",t.delivery],["Support","support@placeonix.com"]].map(([w,y])=>a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",padding:"7px 0",borderBottom:"1px solid #f3f4f6",fontSize:13},children:[a.jsx("span",{style:{color:"#6b7280",fontWeight:600},children:w}),a.jsx("span",{style:{color:"#111827",fontWeight:700},children:y})]},w))}),a.jsxs("div",{style:{textAlign:"left",marginBottom:20},children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#374151",marginBottom:12},children:"📦 Order Tracking"}),b4.map((w,y)=>{const I=y<=1;return a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:8},children:[a.jsx("div",{style:{width:24,height:24,borderRadius:999,background:I?"#7c3aed":"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:I?"#fff":"#9ca3af",fontWeight:800,flexShrink:0},children:I?"✓":y+1}),a.jsx("div",{style:{fontSize:13,color:I?"#111827":"#9ca3af",fontWeight:I?700:400},children:w.label}),y===1&&a.jsx("span",{style:{fontSize:10,background:"#dcfce7",color:"#16a34a",padding:"1px 7px",borderRadius:999,fontWeight:700,marginLeft:"auto"},children:"CURRENT"})]},w.key)})]}),a.jsx("button",{onClick:e,style:{width:"100%",padding:"12px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:12,fontSize:14,fontWeight:700,cursor:"pointer"},children:"Close"})]})]})]}),a.jsx("style",{children:"@keyframes spin { to { transform: rotate(360deg); } }"})]})}function N4(){const t=[{icon:"🎓",title:"Built for Students",desc:"Designed specifically for freshers, final-year students, and internship seekers — not professionals."},{icon:"🎯",title:"Placement Focused",desc:"Every recommendation is oriented towards getting you shortlisted in campus placements and off-campus drives."},{icon:"💸",title:"Affordable Pricing",desc:"Starting at just ₹50 — because every student deserves access to professional resume guidance."},{icon:"🤖",title:"ATS-Oriented",desc:"We understand how applicant tracking systems work and optimize your resume accordingly."},{icon:"✏️",title:"Manual Review",desc:"Real people review your resume — not automated tools that miss nuance."},{icon:"🔒",title:"Privacy First",desc:"Your resume data is never shared with third parties. Strict data handling policies apply."}];return a.jsx("div",{style:{padding:"60px 0",background:"#fff"},children:a.jsxs("div",{style:{maxWidth:900,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("div",{style:{display:"inline-block",background:"#f5f3ff",color:"#7c3aed",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid #c4b5fd",marginBottom:12},children:"WHY PLACEONIX"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#111827",marginBottom:12},children:"Honest. Affordable. Student-First."}),a.jsx("p",{style:{fontSize:15,color:"#6b7280",maxWidth:500,margin:"0 auto"},children:"We don't make inflated claims. We focus on what matters — getting you shortlisted."})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:18},children:t.map((e,n)=>a.jsxs("div",{style:{display:"flex",gap:14,padding:"18px",background:"#fafafa",border:"1.5px solid #f3f4f6",borderRadius:14},children:[a.jsx("div",{style:{fontSize:24,flexShrink:0},children:e.icon}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:14,fontWeight:800,color:"#111827",marginBottom:4},children:e.title}),a.jsx("div",{style:{fontSize:12.5,color:"#6b7280",lineHeight:1.65},children:e.desc})]})]},n))})]})})}function D4(){const[t,e]=M.useState(null),n=[{q:"What is an ATS score?",a:"An ATS (Applicant Tracking System) score measures how well your resume matches what automated hiring software is looking for. Most companies use ATS to filter resumes before a human ever sees them. A low score means your resume gets rejected automatically."},{q:"Why is ATS optimization important?",a:"Over 75% of resumes are rejected by ATS before reaching a recruiter. Without proper keyword usage, formatting, and structure, even a strong candidate can be filtered out. ATS optimization ensures your resume actually gets in front of a human."},{q:"Will this guarantee me a job?",a:"No — and we won't claim that. What we can do is significantly improve your chances of getting shortlisted for interviews by making your resume ATS-compatible, keyword-optimized, and professionally structured. The rest depends on your interview performance."},{q:"How long does delivery take?",a:"Starter ATS Review: 24 hours. Resume Upgrade: 48 hours. Placement Success Pack: 72 hours. These are maximum timeframes — we often deliver sooner."},{q:"Which file formats are accepted?",a:"We accept PDF, DOC, and DOCX formats. We recommend uploading a PDF to preserve formatting, but any of the three formats will work."},{q:"Can freshers use this service?",a:"Absolutely — this service is specifically designed for freshers, final-year students, and early career professionals. All recommendations are tailored to placement-focused resumes, not experienced professional CVs."},{q:"Is my resume reviewed manually?",a:"Yes. All plans include a manual review by a real person, not just an automated tool. This is what makes our insights actionable and context-aware."},{q:"Can I request changes after delivery?",a:"For the Resume Upgrade and Placement Success Pack, we offer one round of revision if you feel something doesn't match your expectations. Contact us at support@placeonix.com."},{q:"Is my information secure?",a:"Yes. Your resume and personal details are stored securely and are never shared with third parties. We use encrypted storage and access control on all submitted data."},{q:"What happens after payment?",a:"After payment, you'll be asked to submit your resume and details through a secure form. You'll receive an order confirmation with a unique Order ID. Our team will begin the review and deliver results within the promised timeframe."}];return a.jsx("div",{style:{padding:"60px 0",background:"#f9fafb"},children:a.jsxs("div",{style:{maxWidth:760,margin:"0 auto",padding:"0 24px"},children:[a.jsxs("div",{style:{textAlign:"center",marginBottom:40},children:[a.jsx("div",{style:{display:"inline-block",background:"#f5f3ff",color:"#7c3aed",fontSize:12,fontWeight:700,padding:"4px 14px",borderRadius:999,border:"1px solid #c4b5fd",marginBottom:12},children:"FAQ"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#111827"},children:"Frequently Asked Questions"})]}),n.map((r,i)=>a.jsxs("div",{style:{marginBottom:10,borderRadius:14,border:`1.5px solid ${t===i?"#c4b5fd":"#e5e7eb"}`,overflow:"hidden",transition:"border-color 0.2s"},children:[a.jsxs("button",{onClick:()=>e(t===i?null:i),style:{width:"100%",padding:"16px 20px",display:"flex",justifyContent:"space-between",alignItems:"center",background:t===i?"#f5f3ff":"#fff",border:"none",cursor:"pointer",fontFamily:"inherit",textAlign:"left",gap:16},children:[a.jsx("span",{style:{fontSize:14,fontWeight:700,color:t===i?"#7c3aed":"#111827",lineHeight:1.4},children:r.q}),a.jsx("span",{style:{fontSize:18,color:"#9ca3af",flexShrink:0,transform:t===i?"rotate(45deg)":"none",transition:"transform 0.2s"},children:"+"})]}),t===i&&a.jsx("div",{style:{padding:"4px 20px 18px",fontSize:13.5,color:"#6b7280",lineHeight:1.8,borderTop:"1px solid #e9d5ff",background:"#fff"},children:r.a})]},i))]})})}function M4(){const[t,e]=M.useState(null),[n,r]=M.useState(null),i=M.useRef();function s(){var c;(c=i.current)==null||c.scrollIntoView({behavior:"smooth",block:"start"})}function o({orderId:c,planName:u}){r(t==null?void 0:t.id)}return a.jsxs("div",{style:{marginLeft:-24,marginRight:-24,marginTop:-24},children:[a.jsxs("div",{style:{background:"linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 60%, #0d0d1a 100%)",padding:"64px 24px 52px",textAlign:"center",position:"relative",overflow:"hidden"},children:[a.jsx("div",{style:{position:"absolute",top:-80,left:"50%",transform:"translateX(-50%)",width:600,height:400,background:"radial-gradient(ellipse, rgba(124,58,237,0.25) 0%, transparent 70%)",pointerEvents:"none"}}),a.jsxs("div",{style:{position:"relative",maxWidth:720,margin:"0 auto"},children:[a.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(124,58,237,0.2)",border:"1px solid rgba(167,139,250,0.3)",borderRadius:999,padding:"6px 16px",marginBottom:24},children:[a.jsx("span",{style:{width:7,height:7,borderRadius:999,background:"#a78bfa",display:"inline-block",animation:"pulse 2s infinite"}}),a.jsx("span",{style:{fontSize:12,fontWeight:700,color:"#a78bfa"},children:"Resume & ATS Optimization"})]}),a.jsxs("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:"clamp(28px, 5vw, 48px)",color:"#fff",lineHeight:1.15,marginBottom:18},children:["Your Resume Gets",a.jsx("br",{}),a.jsx("span",{style:{background:"linear-gradient(135deg, #a78bfa, #60a5fa)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"},children:"One Chance. Make It Count."})]}),a.jsx("p",{style:{fontSize:16,color:"#94a3b8",maxWidth:580,margin:"0 auto 32px",lineHeight:1.75},children:"Most students never realize why their resumes get rejected. Get ATS insights, resume improvements, and placement-focused recommendations that help you stand out from hundreds of applicants."}),a.jsxs("div",{style:{display:"flex",gap:14,justifyContent:"center",flexWrap:"wrap"},children:[a.jsx("button",{onClick:s,style:{padding:"13px 28px",background:"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:"#fff",border:"none",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",boxShadow:"0 6px 20px rgba(109,40,217,0.5)",transition:"transform 0.2s"},onMouseEnter:c=>c.currentTarget.style.transform="translateY(-2px)",onMouseLeave:c=>c.currentTarget.style.transform="translateY(0)",children:"Check My Resume"}),a.jsx("button",{onClick:()=>e(oa[1]),style:{padding:"13px 28px",background:"rgba(255,255,255,0.08)",color:"#e2e8f0",border:"1.5px solid rgba(255,255,255,0.15)",borderRadius:12,fontSize:15,fontWeight:700,cursor:"pointer",transition:"all 0.2s"},onMouseEnter:c=>{c.currentTarget.style.background="rgba(255,255,255,0.14)"},onMouseLeave:c=>{c.currentTarget.style.background="rgba(255,255,255,0.08)"},children:"Upgrade My Resume"})]}),a.jsx("div",{style:{marginTop:32,display:"flex",gap:20,justifyContent:"center",flexWrap:"wrap"},children:["75% of resumes never reach a recruiter","Recruiters spend 7 seconds per resume","ATS rejects before humans even see it"].map((c,u)=>a.jsxs("div",{style:{fontSize:12,color:"#64748b",display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{style:{color:"#f87171"},children:"⚠"}),c]},u))})]})]}),a.jsx(T4,{}),a.jsx("div",{style:{padding:"52px 24px",background:"#f9fafb"},children:a.jsx("div",{style:{maxWidth:640,margin:"0 auto"},children:a.jsx(I4,{onUpgrade:c=>e(c)})})}),a.jsx(k4,{}),a.jsx(C4,{}),a.jsx(A4,{}),a.jsxs("div",{ref:i,children:[a.jsx(P4,{purchasedPlan:n,onSelect:e}),a.jsx(R4,{onSelect:e,purchasedPlan:n})]}),a.jsx(N4,{}),a.jsx(D4,{}),a.jsxs("div",{style:{padding:"52px 24px",background:"linear-gradient(135deg, #0f0f1a, #1a1a2e)",textAlign:"center"},children:[a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"#fff",marginBottom:12},children:"Ready to Stand Out?"}),a.jsx("p",{style:{fontSize:15,color:"#94a3b8",marginBottom:28,maxWidth:460,margin:"0 auto 28px"},children:"Don't let a poorly optimized resume cost you your dream placement. Get started for just ₹50."}),a.jsx("button",{onClick:s,style:{padding:"14px 36px",background:"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:"#fff",border:"none",borderRadius:14,fontSize:16,fontWeight:800,cursor:"pointer",boxShadow:"0 6px 24px rgba(109,40,217,0.5)"},children:"View Plans & Get Started"})]}),t&&a.jsx(j4,{plan:t,onClose:()=>e(null),onSuccess:c=>{o(c)}}),a.jsx("style",{children:`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
        @keyframes spin  { to { transform: rotate(360deg); } }
      `})]})}const Ov=["admin@placeonix.com","prayukthakanchi@gmail.com"],Ao=[{key:"payment_received",label:"Payment Received",color:"#6366f1"},{key:"resume_received",label:"Resume Received",color:"#8b5cf6"},{key:"under_review",label:"Under Review",color:"#f97316"},{key:"ats_complete",label:"ATS Analysis Complete",color:"#eab308"},{key:"optimization_in_progress",label:"Optimization In Progress",color:"#3b82f6"},{key:"final_review",label:"Final Review",color:"#a855f7"},{key:"delivered",label:"Delivered",color:"#16a34a"}],Vv={starter:"#6366f1",upgrade:"#7c3aed",success:"#059669"};function L4({status:t}){const e=Ao.find(n=>n.key===t)||{label:t,color:"#9ca3af"};return a.jsx("span",{style:{fontSize:11,fontWeight:700,color:e.color,background:e.color+"18",border:`1px solid ${e.color}44`,padding:"3px 10px",borderRadius:999,whiteSpace:"nowrap"},children:e.label})}function O4({order:t,onClose:e}){const[n,r]=M.useState(t.status),[i,s]=M.useState(t.adminNotes||""),[o,c]=M.useState(!1),[u,d]=M.useState(!1),f=Ao.findIndex(m=>m.key===n);async function g(){c(!0);try{await iu(jn(bt,"orders",t.id),{status:n,adminNotes:i,updatedAt:Qt()}),d(!0),setTimeout(()=>d(!1),2e3)}catch(m){alert("Save failed: "+m.message)}c(!1)}return a.jsx("div",{style:{position:"fixed",inset:0,background:"rgba(0,0,0,0.6)",zIndex:1e3,display:"flex",alignItems:"center",justifyContent:"center",padding:20},onClick:m=>m.target===m.currentTarget&&e(),children:a.jsxs("div",{style:{background:"#fff",borderRadius:20,width:"100%",maxWidth:640,maxHeight:"90vh",overflow:"auto",boxShadow:"0 24px 80px rgba(0,0,0,0.25)"},children:[a.jsxs("div",{style:{padding:"20px 24px",borderBottom:"1px solid #f3f4f6",display:"flex",alignItems:"center",justifyContent:"space-between",background:"#fafafa"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:16,fontWeight:900,color:"#111827",fontFamily:"Urbanist, sans-serif"},children:t.orderId}),a.jsxs("div",{style:{fontSize:13,color:"#6b7280",marginTop:2},children:[t.planName," · ₹",t.price]})]}),a.jsx("button",{onClick:e,style:{background:"none",border:"none",fontSize:24,cursor:"pointer",color:"#9ca3af"},children:"×"})]}),a.jsxs("div",{style:{padding:"24px"},children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#374151",marginBottom:12,textTransform:"uppercase",letterSpacing:.5},children:"Customer Details"}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12},children:[["Name",t.customerName],["Email",t.customerEmail],["Mobile",t.customerMobile],["Job Role",t.jobRole],["Branch",t.branch],["Graduation",t.graduationYear],["LinkedIn",t.linkedin||"—"],["Payment ID",t.paymentId]].map(([m,S])=>a.jsxs("div",{style:{background:"#f9fafb",borderRadius:10,padding:"10px 14px"},children:[a.jsx("div",{style:{fontSize:11,color:"#9ca3af",fontWeight:700,marginBottom:2},children:m}),a.jsx("div",{style:{fontSize:13,color:"#111827",fontWeight:600,wordBreak:"break-all"},children:S})]},m))}),t.notes&&a.jsxs("div",{style:{marginTop:12,background:"#fffbeb",border:"1px solid #fde68a",borderRadius:10,padding:"10px 14px"},children:[a.jsx("div",{style:{fontSize:11,color:"#92400e",fontWeight:700,marginBottom:2},children:"Customer Notes"}),a.jsx("div",{style:{fontSize:13,color:"#78350f"},children:t.notes})]})]}),a.jsxs("div",{style:{marginBottom:24,background:"#f0fdf4",border:"1px solid #86efac",borderRadius:12,padding:"14px 16px",display:"flex",alignItems:"center",gap:12},children:[a.jsx("span",{style:{fontSize:28},children:"📄"}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:"#15803d"},children:"Resume Submitted"}),a.jsx("div",{style:{fontSize:12,color:"#16a34a"},children:t.resumeFileName})]})]}),a.jsxs("div",{style:{marginBottom:24},children:[a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#374151",marginBottom:14,textTransform:"uppercase",letterSpacing:.5},children:"Order Progress"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:Ao.map((m,S)=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[a.jsx("div",{style:{width:24,height:24,borderRadius:999,background:S<=f?m.color:"#e5e7eb",display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,color:S<=f?"#fff":"#9ca3af",fontWeight:800,flexShrink:0,transition:"all 0.3s"},children:S<f?"✓":S+1}),a.jsx("div",{style:{fontSize:13,color:S<=f?"#111827":"#9ca3af",fontWeight:S===f?700:400},children:m.label}),S===f&&a.jsx("span",{style:{fontSize:10,background:m.color+"22",color:m.color,padding:"1px 8px",borderRadius:999,fontWeight:700,border:`1px solid ${m.color}44`},children:"CURRENT"})]},m.key))})]}),a.jsxs("div",{style:{marginBottom:18},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#374151",display:"block",marginBottom:8,textTransform:"uppercase",letterSpacing:.5},children:"Update Status"}),a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:Ao.map(m=>a.jsx("button",{onClick:()=>r(m.key),style:{padding:"6px 12px",borderRadius:8,border:`1.5px solid ${n===m.key?m.color:"#e5e7eb"}`,background:n===m.key?m.color+"15":"#fff",color:n===m.key?m.color:"#6b7280",fontSize:11.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:m.label},m.key))})]}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"#374151",display:"block",marginBottom:6,textTransform:"uppercase",letterSpacing:.5},children:"Admin Notes"}),a.jsx("textarea",{value:i,onChange:m=>s(m.target.value),placeholder:"Add internal notes, observations, or next steps...",style:{width:"100%",padding:"10px 12px",border:"1.5px solid #e5e7eb",borderRadius:10,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",height:90,resize:"vertical"},onFocus:m=>m.target.style.borderColor="#7c3aed",onBlur:m=>m.target.style.borderColor="#e5e7eb"})]}),a.jsxs("div",{style:{display:"flex",gap:10},children:[a.jsx("button",{onClick:g,disabled:o,style:{flex:1,padding:"12px",background:o?"#f3f4f6":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:o?"#9ca3af":"#fff",border:"none",borderRadius:11,fontSize:14,fontWeight:700,cursor:o?"not-allowed":"pointer",fontFamily:"inherit"},children:u?"✅ Saved!":o?"Saving...":"Save Changes"}),a.jsx("button",{onClick:e,style:{padding:"12px 20px",background:"#f3f4f6",color:"#374151",border:"none",borderRadius:11,fontSize:14,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},children:"Close"})]})]})]})})}function V4(){const{user:t,profile:e}=bn(),[n,r]=M.useState([]),[i,s]=M.useState(!0),[o,c]=M.useState(null),[u,d]=M.useState("all"),[f,g]=M.useState("all"),[m,S]=M.useState("");M.useEffect(()=>{t&&Ov.includes(t.email)&&e&&e.role!=="admin"&&iu(jn(bt,"users",t.uid),{role:"admin"}).then(()=>console.log("Successfully promoted to admin in DB")).catch(E=>console.error("Failed to promote to admin in DB:",E))},[t,e]);const C=t&&Ov.includes(t.email);if(M.useEffect(()=>{if(!C)return;const E=uj(ko(bt,"orders"),dj("createdAt","desc"));return Np(E,b=>{r(b.docs.map(P=>({id:P.id,...P.data()}))),s(!1)},()=>s(!1))},[C]),!t)return a.jsxs("div",{style:{textAlign:"center",padding:"60px 24px"},children:[a.jsx("div",{style:{fontSize:48,marginBottom:16},children:"🔐"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)"},children:"Please log in to access the admin dashboard."})]});if(!C)return a.jsxs("div",{style:{textAlign:"center",padding:"60px 24px"},children:[a.jsx("div",{style:{fontSize:48,marginBottom:16},children:"🚫"}),a.jsx("h2",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:22,color:"var(--text-primary)"},children:"Access Denied"}),a.jsx("p",{style:{color:"var(--text-secondary)",fontSize:14,marginTop:8},children:"You don't have admin access. Contact the platform owner."})]});const j=n.filter(E=>{var L,R,w;const v=u==="all"||E.status===u,b=f==="all"||E.planId===f,P=!m||((L=E.customerName)==null?void 0:L.toLowerCase().includes(m.toLowerCase()))||((R=E.orderId)==null?void 0:R.toLowerCase().includes(m.toLowerCase()))||((w=E.customerEmail)==null?void 0:w.toLowerCase().includes(m.toLowerCase()));return v&&b&&P}),O=[{label:"Total Orders",value:n.length,icon:"📦",color:"#6366f1"},{label:"Pending Orders",value:n.filter(E=>E.status!=="delivered").length,icon:"⏳",color:"#f97316"},{label:"Delivered",value:n.filter(E=>E.status==="delivered").length,icon:"✅",color:"#7c3aed"},{label:"Revenue",value:`₹${n.reduce((E,v)=>E+(v.price||0),0)}`,icon:"💰",color:"#16a34a"}];return a.jsxs("div",{children:[a.jsxs("div",{style:{marginBottom:24},children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:24,color:"var(--text-primary)",marginBottom:4},children:"🛠️ Admin Dashboard"}),a.jsxs("p",{style:{fontSize:13,color:"var(--text-muted)"},children:["Resume orders & customer service management · ",t.email]})]}),a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(160px, 1fr))",gap:14,marginBottom:24},children:O.map((E,v)=>a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"18px 18px",display:"flex",gap:12,alignItems:"center"},children:[a.jsx("div",{style:{width:42,height:42,borderRadius:12,background:E.color+"15",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0},children:E.icon}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:22,fontWeight:900,color:E.color,fontFamily:"Urbanist, sans-serif"},children:E.value}),a.jsx("div",{style:{fontSize:12,color:"var(--text-muted)",fontWeight:600},children:E.label})]})]},v))}),a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:14,padding:"16px 18px",marginBottom:18,display:"flex",gap:12,flexWrap:"wrap",alignItems:"center"},children:[a.jsxs("div",{style:{position:"relative",flex:1,minWidth:200},children:[a.jsx("span",{style:{position:"absolute",left:10,top:"50%",transform:"translateY(-50%)",fontSize:14,color:"#9ca3af"},children:"🔍"}),a.jsx("input",{value:m,onChange:E=>S(E.target.value),placeholder:"Search by name, email, or order ID...",style:{width:"100%",padding:"8px 10px 8px 32px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--card-bg)",color:"var(--text-primary)"},onFocus:E=>E.target.style.borderColor="#7c3aed",onBlur:E=>E.target.style.borderColor="var(--card-border)"})]}),a.jsxs("select",{value:f,onChange:E=>g(E.target.value),style:{padding:"8px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",color:"var(--text-secondary)",background:"var(--card-bg)",outline:"none",cursor:"pointer"},children:[a.jsx("option",{value:"all",children:"All Plans"}),a.jsx("option",{value:"starter",children:"Starter ATS Review"}),a.jsx("option",{value:"upgrade",children:"Resume Upgrade"}),a.jsx("option",{value:"success",children:"Placement Success Pack"})]}),a.jsxs("select",{value:u,onChange:E=>d(E.target.value),style:{padding:"8px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",color:"var(--text-secondary)",background:"var(--card-bg)",outline:"none",cursor:"pointer"},children:[a.jsx("option",{value:"all",children:"All Statuses"}),Ao.map(E=>a.jsx("option",{value:E.key,children:E.label},E.key))]}),a.jsxs("span",{style:{fontSize:12,color:"var(--text-muted)",whiteSpace:"nowrap"},children:[j.length," orders"]})]}),a.jsx("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:16,overflow:"hidden"},children:i?a.jsx("div",{style:{padding:"48px",textAlign:"center",color:"var(--text-muted)"},children:"Loading orders..."}):j.length===0?a.jsxs("div",{style:{padding:"48px",textAlign:"center",color:"var(--text-muted)"},children:[a.jsx("div",{style:{fontSize:36,marginBottom:12},children:"📭"}),a.jsx("div",{style:{fontSize:15,fontWeight:700,color:"var(--text-primary)"},children:"No orders yet"}),a.jsx("div",{style:{fontSize:13,marginTop:4},children:"Orders will appear here once students make a purchase."})]}):a.jsx("div",{style:{overflowX:"auto"},children:a.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",minWidth:700},children:[a.jsx("thead",{children:a.jsx("tr",{style:{background:"var(--main-bg)",borderBottom:"1px solid var(--card-border)"},children:["Order ID","Student","Plan","Amount","Status","Resume","Date","Action"].map(E=>a.jsx("th",{style:{padding:"12px 16px",fontSize:11.5,fontWeight:700,color:"var(--text-muted)",textAlign:"left",textTransform:"uppercase",letterSpacing:.5,whiteSpace:"nowrap"},children:E},E))})}),a.jsx("tbody",{children:j.map((E,v)=>{var b,P;return a.jsxs("tr",{style:{borderBottom:v<j.length-1?"1px solid var(--card-border)":"none",transition:"background 0.15s"},children:[a.jsx("td",{style:{padding:"12px 16px"},children:a.jsx("div",{style:{fontSize:12,fontWeight:700,color:"#7c3aed",fontFamily:"monospace"},children:E.orderId})}),a.jsxs("td",{style:{padding:"12px 16px"},children:[a.jsx("div",{style:{fontSize:13,fontWeight:700,color:"var(--text-primary)"},children:E.customerName}),a.jsx("div",{style:{fontSize:11.5,color:"var(--text-secondary)"},children:E.customerEmail})]}),a.jsx("td",{style:{padding:"12px 16px"},children:a.jsx("span",{style:{fontSize:11.5,fontWeight:700,color:Vv[E.planId]||"#6b7280",background:(Vv[E.planId]||"#6b7280")+"15",padding:"3px 9px",borderRadius:999},children:E.planId==="starter"?"Starter":E.planId==="upgrade"?"Upgrade":"Success Pack"})}),a.jsxs("td",{style:{padding:"12px 16px",fontSize:14,fontWeight:800,color:"var(--text-primary)"},children:["₹",E.price]}),a.jsx("td",{style:{padding:"12px 16px"},children:a.jsx(L4,{status:E.status})}),a.jsx("td",{style:{padding:"12px 16px"},children:a.jsxs("span",{style:{fontSize:11.5,color:"var(--text-secondary)",background:"var(--main-bg)",padding:"2px 8px",borderRadius:6,fontFamily:"monospace"},children:[((b=E.resumeFileName)==null?void 0:b.slice(0,18))||"—","…"]})}),a.jsx("td",{style:{padding:"12px 16px",fontSize:12,color:"var(--text-muted)",whiteSpace:"nowrap"},children:(P=E.createdAt)!=null&&P.toDate?E.createdAt.toDate().toLocaleDateString("en-IN"):"—"}),a.jsx("td",{style:{padding:"12px 16px"},children:a.jsx("button",{onClick:()=>c(E),style:{padding:"6px 14px",background:"var(--purple-xsoft)",color:"#7c3aed",border:"1.5px solid #c4b5fd",borderRadius:8,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},children:"Manage"})})]},E.id)})})]})})}),o&&a.jsx(O4,{order:o,onClose:()=>c(null)})]})}const z4=["CSE","ECE","EEE","ME","CE","IT","MBA","Other"],F4=[2024,2025,2026,2027,2028],B4=[{key:"emailUpdates",label:"Email updates",desc:"Receive order & feature updates via email"},{key:"practiceReminder",label:"Daily practice reminder",desc:"Get a reminder to practice coding & aptitude"}];function zv({checked:t,onChange:e}){return a.jsx("div",{onClick:()=>e(!t),style:{width:44,height:24,borderRadius:999,background:t?"#7c3aed":"#d1d5db",cursor:"pointer",position:"relative",transition:"background 0.25s",flexShrink:0},children:a.jsx("div",{style:{width:18,height:18,borderRadius:999,background:"#fff",position:"absolute",top:3,left:t?23:3,transition:"left 0.25s",boxShadow:"0 1px 4px rgba(0,0,0,0.2)"}})})}function al({title:t,subtitle:e,children:n}){return a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"24px",marginBottom:20},children:[a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("div",{style:{fontSize:15,fontWeight:800,color:"var(--text-primary)"},children:t}),e&&a.jsx("div",{style:{fontSize:13,color:"var(--text-muted)",marginTop:3},children:e})]}),n]})}function $4(){var k,T,A;const{user:t,profile:e,updateUserProfile:n,logout:r}=bn(),[i,s]=M.useState((e==null?void 0:e.name)||(t==null?void 0:t.displayName)||""),[o,c]=M.useState((e==null?void 0:e.branch)||"CSE"),[u,d]=M.useState((e==null?void 0:e.graduationYear)||2025),[f,g]=M.useState((e==null?void 0:e.linkedin)||""),[m,S]=M.useState((e==null?void 0:e.phone)||""),[C,j]=M.useState(!1),[O,E]=M.useState(!1),[v,b]=M.useState({emailUpdates:((k=e==null?void 0:e.notifs)==null?void 0:k.emailUpdates)??!0,practiceReminder:((T=e==null?void 0:e.notifs)==null?void 0:T.practiceReminder)??!0}),[P,L]=M.useState(()=>localStorage.getItem("plx_theme")==="dark");function R(_){L(_),localStorage.setItem("plx_theme",_?"dark":"light"),document.documentElement.setAttribute("data-theme",_?"dark":"light")}async function w(_){_.preventDefault(),j(!0);try{await n({name:i,branch:o,graduationYear:Number(u),linkedin:f,phone:m,notifs:v,updatedAt:Qt()}),E(!0),setTimeout(()=>E(!1),2500)}catch(te){alert("Failed to save: "+te.message)}j(!1)}const y=(e==null?void 0:e.name)||(t==null?void 0:t.displayName)||((A=t==null?void 0:t.email)==null?void 0:A.split("@")[0])||"Student",I=y.slice(0,1).toUpperCase();return a.jsxs("div",{style:{maxWidth:680,margin:"0 auto"},children:[a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:26,color:"var(--text-primary)",marginBottom:4},children:"⚙️ Settings"}),a.jsx("p",{style:{fontSize:13.5,color:"var(--text-muted)"},children:"Manage your account, preferences, and notifications"})]}),a.jsxs("div",{style:{background:"var(--purple-xsoft)",border:"1.5px solid var(--card-border)",borderRadius:16,padding:"22px 24px",marginBottom:20,display:"flex",alignItems:"center",gap:18},children:[a.jsx("div",{style:{width:64,height:64,borderRadius:999,background:"linear-gradient(135deg, #6c3ce1, #8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:26,fontWeight:900,fontFamily:"Urbanist, sans-serif",flexShrink:0},children:I}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:17,fontWeight:800,color:"var(--text-primary)"},children:y}),a.jsx("div",{style:{fontSize:13,color:"var(--text-secondary)",marginTop:2},children:t==null?void 0:t.email}),a.jsxs("div",{style:{fontSize:12,color:"var(--text-muted)",marginTop:1},children:[o," · Graduating ",u]})]})]}),a.jsx(al,{title:"Profile Information",subtitle:"Update your personal details visible across Placeonix",children:a.jsxs("form",{onSubmit:w,children:[a.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14},children:[{label:"Display Name",value:i,setter:s,type:"text",placeholder:"Your name"},{label:"Phone Number",value:m,setter:S,type:"tel",placeholder:"10-digit number"}].map(({label:_,value:te,setter:de,type:ve,placeholder:Br})=>a.jsxs("div",{children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:_}),a.jsx("input",{type:ve,value:te,onChange:$=>de($.target.value),placeholder:Br,style:{width:"100%",padding:"9px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--card-bg)",color:"var(--text-primary)"},onFocus:$=>$.target.style.borderColor="#7c3aed",onBlur:$=>$.target.style.borderColor="var(--card-border)"})]},_))}),a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:14,marginBottom:14},children:[a.jsxs("div",{children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:"Branch"}),a.jsx("select",{value:o,onChange:_=>c(_.target.value),style:{width:"100%",padding:"9px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",background:"var(--card-bg)",color:"var(--text-primary)",cursor:"pointer"},children:z4.map(_=>a.jsx("option",{value:_,children:_},_))})]}),a.jsxs("div",{children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:"Graduation Year"}),a.jsx("select",{value:u,onChange:_=>d(Number(_.target.value)),style:{width:"100%",padding:"9px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",background:"var(--card-bg)",color:"var(--text-primary)",cursor:"pointer"},children:F4.map(_=>a.jsx("option",{value:_,children:_},_))})]})]}),a.jsxs("div",{style:{marginBottom:18},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:"LinkedIn URL"}),a.jsx("input",{type:"url",value:f,onChange:_=>g(_.target.value),placeholder:"https://linkedin.com/in/yourprofile",style:{width:"100%",padding:"9px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",outline:"none",boxSizing:"border-box",background:"var(--card-bg)",color:"var(--text-primary)"},onFocus:_=>_.target.style.borderColor="#7c3aed",onBlur:_=>_.target.style.borderColor="var(--card-border)"})]}),a.jsxs("div",{style:{marginBottom:6},children:[a.jsx("label",{style:{fontSize:12,fontWeight:700,color:"var(--text-secondary)",display:"block",marginBottom:6},children:"Email Address"}),a.jsx("input",{type:"email",value:(t==null?void 0:t.email)||"",disabled:!0,style:{width:"100%",padding:"9px 12px",border:"1.5px solid var(--card-border)",borderRadius:9,fontSize:13,fontFamily:"inherit",background:"var(--main-bg)",color:"var(--text-muted)",boxSizing:"border-box"}}),a.jsx("div",{style:{fontSize:11.5,color:"var(--text-muted)",marginTop:4},children:"Email cannot be changed after account creation"})]}),a.jsx("div",{style:{marginTop:20},children:a.jsx("button",{type:"submit",disabled:C,style:{padding:"10px 28px",background:C?"var(--main-bg)":"linear-gradient(135deg, #6c3ce1, #7c3aed)",color:C?"var(--text-muted)":"#fff",border:"none",borderRadius:10,fontSize:13.5,fontWeight:700,cursor:C?"not-allowed":"pointer",fontFamily:"inherit",transition:"all 0.2s"},children:O?"✅ Saved!":C?"Saving...":"Save Changes"})})]})}),a.jsxs(al,{title:"Appearance",subtitle:"Customize how Placeonix looks for you",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--text-primary)"},children:"Dark Mode"}),a.jsx("div",{style:{fontSize:12.5,color:"var(--text-secondary)",marginTop:2},children:"Switch between light and dark interface"})]}),a.jsx(zv,{checked:P,onChange:R})]}),a.jsx("div",{style:{marginTop:18,display:"flex",gap:10},children:[{label:"☀️ Light",value:!1},{label:"🌙 Dark",value:!0}].map(_=>a.jsx("button",{onClick:()=>R(_.value),style:{flex:1,padding:"10px",borderRadius:10,border:`1.5px solid ${P===_.value?"#7c3aed":"var(--card-border)"}`,background:P===_.value?"var(--purple-xsoft)":"var(--card-bg)",color:P===_.value?"#7c3aed":"var(--text-secondary)",fontSize:13.5,fontWeight:700,cursor:"pointer",fontFamily:"inherit",transition:"all 0.15s"},children:_.label},_.label))})]}),a.jsx(al,{title:"Notifications",subtitle:"Control which notifications you receive",children:a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16},children:B4.map(_=>a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--text-primary)"},children:_.label}),a.jsx("div",{style:{fontSize:12.5,color:"var(--text-secondary)",marginTop:2},children:_.desc})]}),a.jsx(zv,{checked:v[_.key],onChange:te=>{const de={...v,[_.key]:te};b(de),t&&iu(jn(bt,"users",t.uid),{notifs:de,updatedAt:Qt()}).catch(()=>{})}})]},_.key))})}),a.jsx(al,{title:"Account & Security",subtitle:"Manage your login and account settings",children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"var(--main-bg)",borderRadius:12,border:"1px solid var(--card-border)"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:"var(--text-primary)"},children:"Password"}),a.jsx("div",{style:{fontSize:12.5,color:"var(--text-secondary)"},children:"Use the Reset Password email flow to change your password"})]}),a.jsx("span",{style:{fontSize:12,color:"var(--text-muted)",background:"var(--card-bg)",padding:"3px 10px",borderRadius:999},children:"Via Email"})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"12px 16px",background:"#fef2f2",borderRadius:12,border:"1px solid #fecaca"},children:[a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:14,fontWeight:700,color:"#dc2626"},children:"Sign Out"}),a.jsx("div",{style:{fontSize:12.5,color:"#ef4444"},children:"Log out of your Placeonix account"})]}),a.jsx("button",{onClick:r,style:{padding:"7px 18px",background:"#dc2626",color:"#fff",border:"none",borderRadius:9,fontSize:13,fontWeight:700,cursor:"pointer",fontFamily:"inherit"},children:"Sign Out"})]})]})}),a.jsx("div",{style:{textAlign:"center",padding:"8px 0 24px",fontSize:12,color:"#d1d5db"},children:"Placeonix v1.0.0 · Built for students · 🔒 Your data is private"})]})}const U4={CSE:{name:"Computer Science Engineering",icon:"💻",aptitude:{description:"Quantitative Aptitude, Logical Reasoning, and Verbal Ability foundation for top product and service companies.",topics:["Quantitative: Time & Work, Time/Speed/Distance, Profit & Loss, Percentages, Ratio & Proportion.","Logical Reasoning: Syllogisms, Blood Relations, Coding-Decoding, Seating Arrangements, Data Sufficiency.","Verbal Ability: Sentence Correction, Reading Comprehension, Synonyms & Antonyms, Parajumbles."],playlists:[{title:"IndiaBIX Quantitative Aptitude Tutorials",url:"https://www.indiabix.com/aptitude/questions-and-answers/"},{title:"PrepInsta Placement Aptitude Masterclass",url:"https://prepinsta.com/"}]},coding:{description:"Data Structures, Algorithms, and coding fundamentals required for technical assessment rounds.",topics:["Data Structures: Arrays, Strings, HashMaps, Linked Lists, Stacks, Queues, Binary Trees, Graphs.","Algorithms: Searching, Sorting, Recursion, Backtracking, Dynamic Programming, Greedy Algorithms.","Databases: SQL Queries, Relational Schemas, Constraints."],playlists:[{title:"Striver's DSA A-to-Z Course Sheet",url:"https://takeuforward.org/strivers-a2z-dsa-course-sheet-preview-2/"},{title:"NeetCode 150 - LeetCode Map",url:"https://neetcode.io/practice"},{title:"Abdul Bari's Algorithms lectures",url:"https://www.youtube.com/playlist?list=PLDN4rRL5gy4UzoN7Apx-w5G37WPo68e59"}]},core:{description:"Core computer science subjects representing the pillars of technical engineering rounds.",topics:["Operating Systems: Process scheduling, threads, memory management (paging, virtual memory), deadlocks, and semaphores.","Database Management Systems (DBMS): Normalization (1NF to BCNF), SQL queries, transactions, ACID properties, indexing.","Computer Networks: OSI & TCP/IP models, routing protocols, TCP/UDP sockets, DNS, HTTP, subnetting."],playlists:[{title:"Gate Smashers - Operating Systems Course",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"},{title:"Gate Smashers - DBMS Course",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiGGtVqgLYuJaqyLl74I_641"},{title:"Operating Systems: Three Easy Pieces (OSTEP)",url:"https://pages.cs.wisc.edu/~remzi/OSTEP/"}]},interview:{conceptual:[{question:"Explain the four main pillars of Object-Oriented Programming (OOP) with real-world analogies.",answer:`1. Abstraction: Hiding internal complexity and showing only essential features. (e.g., using a remote control to operate a TV without knowing the internal circuitry).
2. Encapsulation: Binding data and methods that operate on that data into a single unit (class) and restricting direct access using access modifiers. (e.g., a capsule enclosing medicine ingredients).
3. Inheritance: Reusability mechanism where a new class inherits attributes and behaviors of an existing class. (e.g., a child inheriting traits from parents).
4. Polymorphism: Ability of a function or method to take multiple forms. Can be compile-time (overloading) or runtime (overriding). (e.g., a single 'Draw' method drawing shapes, circles, or squares depending on the object type).`},{question:"What is database normalization? Explain 1NF, 2NF, 3NF, and BCNF.",answer:`Normalization is the systematic process of organizing data in database tables to minimize redundancy and avoid insertion, deletion, and update anomalies:
- 1NF (First Normal Form): All table attributes must contain atomic (indivisible) values, and there must be no repeating groups.
- 2NF (Second Normal Form): Must be in 1NF, and all non-key attributes must be fully functionally dependent on the primary key (no partial dependencies on composite keys).
- 3NF (Third Normal Form): Must be in 2NF, and there must be no transitive dependencies (non-key columns depending on other non-key columns).
- BCNF (Boyce-Codd Normal Form): A stronger version of 3NF where for every non-trivial functional dependency A -> B, A must be a super key.`}],problemSolving:[{question:"How would you find the maximum subarray sum in O(N) time? Explain the algorithm.",answer:"This is solved using Kadane's Algorithm. The algorithm keeps track of two variables: `max_so_far` (global maximum sum found so far) and `max_ending_here` (maximum sum ending at the current position):\n1. Initialize `max_so_far = INT_MIN` and `max_ending_here = 0`.\n2. Iterate through each element `x` of the array.\n3. Add `x` to `max_ending_here`.\n4. If `max_ending_here > max_so_far`, update `max_so_far = max_ending_here`.\n5. If `max_ending_here < 0`, reset `max_ending_here = 0`.\nTime complexity is O(N) and space complexity is O(1)."},{question:"Write a SQL query to find the second highest salary in an Employee table without using LIMIT.",answer:`You can find the second highest salary by selecting the maximum salary that is strictly less than the overall maximum salary:

\`\`\`sql
SELECT MAX(Salary) AS SecondHighestSalary
FROM Employee
WHERE Salary < (SELECT MAX(Salary) FROM Employee);
\`\`\`
Alternatively, using a correlated subquery:
\`\`\`sql
SELECT DISTINCT E1.Salary
FROM Employee E1
WHERE 1 = (
    SELECT COUNT(DISTINCT E2.Salary)
    FROM Employee E2
    WHERE E2.Salary > E1.Salary
);
\`\`\``}],applied:[{question:"What is a Cross-Site Scripting (XSS) vulnerability, and how do you secure an IT system against it?",answer:`XSS occurs when an application includes untrusted user-supplied data in a web page without proper validation or escaping, allowing attackers to execute malicious scripts in the victim's browser. Prevention strategies include:
1. Input Validation: Check all inputs for correct formats using whitelisting.
2. Context-Aware Output Escaping/Encoding: Convert characters like <, >, &, ", and ' to their safe HTML/JS entity equivalents before rendering.
3. Content Security Policy (CSP): Set HTTP headers to restrict the sources from which scripts can be loaded and executed.
4. HttpOnly Cookies: Prevent client-side scripts from accessing session tokens.`},{question:"How would you design an automated, scalable machine learning inference pipeline on the cloud?",answer:`A modern serverless ML inference pipeline uses:
1. API Gateway: Receives the client prediction requests securely.
2. Serverless Function (e.g., AWS Lambda / Google Cloud Function): Receives the input payload from the API gateway, loads the lightweight model, and performs inference. For large deep learning models, deploy via containerized Lambdas with access to shared Elastic File Systems (EFS).
3. Cache Layer (Redis/ElastiCache): Stores predictions for frequent duplicate queries to reduce serverless invocation overhead.
4. Queue (SQS) & Object Storage (S3): For batch inference, store payloads in S3, queue metadata in SQS, and process asynchronously using auto-scaling compute workers (AWS ECS/Fargate).`}],hrStyle:[{question:"Tell me about a time you faced a conflict in a software development project team and how you resolved it.",answer:`Use the STAR method:
- Situation: During our Software Engineering course project, we were divided on choosing between SQL (PostgreSQL) and NoSQL (MongoDB) for our backend.
- Task: We needed to settle the technical stack quickly as the project deadline was approaching.
- Action: I scheduled a brief research session. Instead of arguing, I proposed that each side draft a quick proof-of-concept based on our primary data models (highly structured user relationships). I demonstrated that relational tables suited our transactional needs better, while acknowledging NoSQL strengths for analytics.
- Result: The team agreed objectively to PostgreSQL. We finished the project ahead of schedule with 95% test coverage and presented it successfully.`},{question:"Describe a complex memory leak or bug you debugged. What tools did you use?",answer:"Answer outline: Focus on a specific debugging challenge. For example: In a Node.js API project, the server crashed due to Heap Out of Memory. I used Chrome DevTools memory profiles and heap snapshots to capture memory state under stress. I discovered that a global array was storing database connection listeners without releasing them. By replacing the listeners with once-only triggers or properly cleaning them up in connection teardown blocks, the memory usage stabilized at a constant 80MB under load, preventing any further server crashes."}]}},IT:{name:"Information Technology",icon:"🌐",aptitude:{description:"Quantitative, Logical Reasoning, and Verbal Ability with a strong focus on logical problem-solving and patterns.",topics:["Quantitative Aptitude: Probability, Permutations & Combinations, Data Interpretation, Averages, Percentages.","Logical Reasoning: Cryptarithmetic, Coding-Decoding, Venn Diagrams, Seating Arrangement.","Verbal: Verbal Reasoning, Error Spotting, Reading Comprehension."],playlists:[{title:"PrepInsta Logical Reasoning Masterclass",url:"https://prepinsta.com/"},{title:"IndiaBIX Quantitative Aptitude Practice",url:"https://www.indiabix.com/aptitude/questions-and-answers/"}]},coding:{description:"Algorithmic thinking, string manipulations, data structures, and database query problem-solving.",topics:["Core Programming: Array searches, string manipulation, anagram checks, hash mapping.","SQL Practice: CRUD operations, joins, aggregations, nested queries.","Web APIs: REST API design, status codes, JSON representations."],playlists:[{title:"freeCodeCamp JavaScript & Data Structures",url:"https://www.freecodecamp.org/"},{title:"Striver's SQL & Database Sheet",url:"https://takeuforward.org/"}]},core:{description:"Systems, Software Engineering principles, Cloud infrastructure, and web security architectures.",topics:["Software Engineering: SDLC models (Waterfall, Agile Scrum), software testing levels, design patterns.","System Design: Scale architectures (vertical vs horizontal), load balancers, caching mechanisms, CDNs.","Cloud Computing & Cybersecurity: Virtualization, Cloud services (IaaS, PaaS, SaaS), Web security protocols."],playlists:[{title:"Gate Smashers - System Design Basics",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiHaeSkOPofz7IpS3u9kS0Oq"},{title:"GeeksforGeeks Cybersecurity Tutorial",url:"https://www.geeksforgeeks.org/cyber-security-tutorial/"},{title:"JavaTpoint - Software Engineering Principles",url:"https://www.javatpoint.com/software-engineering-tutorial"}]},interview:{conceptual:[{question:"What is the difference between monolithic and microservice architectures?",answer:`Monolithic Architecture:
- All components of the software application are bundled into a single, unified codebase and deployable unit.
- Easier to build and test initially, but scaling, modifying, or using diverse technology stacks becomes extremely hard as the app grows.
- If one module fails, the entire application can crash.

Microservice Architecture:
- The application is broken down into small, independent, loosely coupled services communicating via lightweight APIs (HTTP/REST or gRPC).
- Each service has its own database, technology stack, and scaling profile.
- Increases development speed and fault isolation, but introduces complexity in networking, transaction handling, and deployments.`},{question:"Explain the Agile Scrum software development methodology.",answer:`Agile Scrum is an iterative framework for project management. It breaks project releases down into short cycles called Sprints (typically 2 to 4 weeks). Key roles include:
1. Product Owner: Defines and prioritizes features in the product backlog.
2. Scrum Master: Facilitates team meetings, removes blockers, and ensures Scrum practices are followed.
3. Developers: Build the increment.
Key ceremonies:
- Sprint Planning: Team selects items from the backlog to complete in the current sprint.
- Daily Standup: 15-minute sync on what was done, what's next, and blockers.
- Sprint Review: Demonstration of the working increment to stakeholders.
- Sprint Retrospective: Team reflects on what went well and what can be improved.`}],problemSolving:[{question:"How do you check if two strings are anagrams of each other? Write the algorithm.",answer:`An anagram is a word formed by rearranging the letters of another. The most efficient way is checking character counts using a frequency hash map:
1. If lengths of the two strings are not equal, return false.
2. Initialize a frequency array of size 256 (or hash map) to 0.
3. Loop through the strings. For the first string, increment the character count in the array; for the second string, decrement it.
4. Iterate through the frequency array. If any element is not 0, return false. Otherwise, return true.
Time Complexity: O(N) where N is string length. Space Complexity: O(1) for ASCII characters.`},{question:"Write an SQL query to find all departments in a company that have more than 5 employees.",answer:"You can solve this using the GROUP BY clause and filtering with HAVING:\n\n```sql\nSELECT DepartmentID, COUNT(EmployeeID) AS EmployeeCount\nFROM Employees\nGROUP BY DepartmentID\nHAVING COUNT(EmployeeID) > 5;\n```\nNote: `WHERE` cannot be used here because aggregate functions (like `COUNT`) must be evaluated after grouping, which is what `HAVING` handles."}],applied:[{question:"How do you prevent SQL Injection vulnerabilities in an IT web application?",answer:`SQL Injection occurs when user input is concatenated directly into SQL query strings, allowing attackers to alter query structures. The main prevention techniques are:
1. Prepared Statements (Parameterized Queries): Ensures that parameters are sent separately from the SQL statement itself, so user input is treated strictly as data, never parsed as executable code.
2. ORM Frameworks: Use secure ORMs (like Hibernate, Entity Framework, or Prisma) which parameterize queries by default.
3. Input Whitelisting: Clean and validate inputs (e.g. ensure numerical IDs are actual integers).
4. Principle of Least Privilege: Configure the database user account used by the app to have only the minimum permissions necessary.`},{question:"How would you design a scalable shopping cart system using serverless AWS architecture?",answer:`1. Frontend hosting: Single Page Application hosted in AWS S3 and served globally via Amazon CloudFront (CDN).
2. Routing: Amazon API Gateway handles HTTP request routing to backend endpoints.
3. Compute: AWS Lambda executes microservice logic serverlessly, autoscaling based on incoming web traffic.
4. Database: Amazon DynamoDB stores user shopping carts in a highly scalable, low-latency NoSQL table using UserID as the partition key.
5. Cache: Amazon ElastiCache (Redis) handles fast product catalog details to prevent slow database queries.`}],hrStyle:[{question:"What is your approach when a customer reports a critical bug in production?",answer:`I follow a structured incident response approach:
1. Replicate & Assess: Try to reproduce the bug in a local or staging environment. Review production logs (e.g., CloudWatch, Sentry) to understand the scope and impact.
2. Temporary Mitigation: If the bug is severe, I propose rolling back to the previous stable release or applying a temporary hotfix (e.g., turning off the buggy feature using feature flags).
3. Deep Fix: Write the actual patch, write unit tests to prevent regression, and submit for peer code review.
4. Deploy & Verify: Deploy to staging, verify behavior, and then release to production.
5. Post-Mortem: Discuss with the team to identify root causes and improve automated tests.`},{question:"Tell me about a time you had to adapt to a completely new technology under a tight deadline.",answer:"Answer outline: Detail a situation where a project required a tool you didn't know (e.g., learning Docker or React). Describe how you structured your learning (official documentation, basic tutorials, building a simple boilerplate), and how you successfully applied it to deliver the project on time."}]}},ECE:{name:"Electronics & Communication Engineering",icon:"⚡",aptitude:{description:"Quantitative, Logical Reasoning, and Visual Pattern matching suited for core hardware and signal engineering companies.",topics:["Quantitative: Linear Equations, Speed & Distance, Work equations, Data Interpretation.","Logical: Patterns, Syllogisms, Venn diagrams, Spatial visualization.","Verbal: Grammar, critical reasoning, technical report comprehension."],playlists:[{title:"Neso Academy - General Aptitude",url:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRjg5C0k64oqS17yrFI2A1du"}]},coding:{description:"Low-level C programming, bitwise operations, register programming, and digital logic simulation.",topics:["Low-level Programming: Pointers in C, memory offsets, structure alignment, bitwise masks.","Hardware Description Languages: Verilog syntax, combinational and sequential HDL modeling.","Simulation: Basic algorithms, sorting, searching, state machine simulation."],playlists:[{title:"ASIC World Verilog Guide",url:"https://www.asic-world.com/verilog/index.html"},{title:"C Programming for Embedded Systems",url:"https://users.ece.utexas.edu/~valvano/embed/toc1.htm"}]},core:{description:"Core electronics subjects covering analog/digital design, signal processing, and VLSI physics.",topics:["Analog Circuits: Semiconductor diodes, BJT/MOSFET models, Operational Amplifiers (Op-Amps), oscillators.","Digital Logic & VLSI: Logic gates, Karnaugh Maps, flip-flops, setup/hold times, CMOS layout, propagation delays.","Embedded Systems & DSP: Microcontrollers (ARM, 8051), interrupt handlers, SPI, I2C, UART, DFT/FFT, Z-Transforms."],playlists:[{title:"Neso Academy - Digital Electronics",url:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm"},{title:"Neso Academy - Analog Electronics",url:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRhPG3QI33UYAd5V0aTOaFnK"},{title:"Embedded Systems Shape the World",url:"https://users.ece.utexas.edu/~valvano/embed/toc1.htm"},{title:"MIT Signals and Systems",url:"https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/"}]},interview:{conceptual:[{question:"Explain the operating stages and characteristics of a CMOS inverter.",answer:`A CMOS inverter consists of an enhancement-type PMOS pull-up transistor and an NMOS pull-down transistor connected in series:
- When Input is Low (GND): PMOS is ON ($V_{GS}$ is negative enough), NMOS is OFF. Output is pulled up to $V_{DD}$ (Logic High).
- When Input is High ($V_{DD}$): NMOS is ON ($V_{GS}$ is positive), PMOS is OFF. Output is pulled down to GND (Logic Low).
During transitions, there is a region where both transistors are partially ON, causing a brief spike in current (short-circuit current). Key features of CMOS include high input impedance and extremely low static power dissipation since one of the transistors is always OFF in steady-state.`},{question:"What is Setup Time and Hold Time? What happens if they are violated?",answer:`In digital synchronous circuits (like flip-flops):
- Setup Time ($T_{setup}$): The minimum amount of time that data input must remain stable *before* the active clock edge arrives.
- Hold Time ($T_{hold}$): The minimum amount of time that data input must remain stable *after* the active clock edge arrives.
If either setup or hold time is violated, the flip-flop output may fail to settle into a stable 0 or 1 state, entering a metastable state. Metastability can cause propagation of unpredictable logical values through the circuit, leading to system failure.`}],problemSolving:[{question:"Design a 2-to-1 Multiplexer using only 2-input NAND gates.",answer:`The output equation of a 2:1 Multiplexer is: $Y = A\\bar{S} + BS$ where $S$ is selector, $A, B$ are inputs.
1. We can write $Y = \\overline{\\overline{A\\bar{S} + BS}} = \\overline{\\overline{A\\bar{S}} \\cdot \\overline{BS}}$.
2. To generate $\\bar{S}$, use a NAND gate as an inverter: $S_{inv} = \\text{NAND}(S, S)$.
3. Generate $Y_1 = \\text{NAND}(A, S_{inv}) = \\overline{A\\bar{S}}$.
4. Generate $Y_2 = \\text{NAND}(B, S) = \\overline{BS}$.
5. Combine outputs: $Y = \\text{NAND}(Y_1, Y_2) = \\overline{Y_1 \\cdot Y_2} = A\\bar{S} + BS$.
This implementation requires exactly 4 NAND gates.`},{question:"An amplifier has a voltage gain ($V_{out}/V_{in}$) of 1000. Calculate its gain in Decibels (dB).",answer:`Voltage gain in dB is calculated using the logarithmic formula:
$$\\text{Gain (dB)} = 20 \\log_{10}\\left(\\frac{V_{out}}{V_{in}}\\right)$$
Substitute 1000:
$$\\text{Gain (dB)} = 20 \\log_{10}(1000) = 20 \\times 3 = 60 \\text{ dB}$$
If it were a power gain ($P_{out}/P_{in}$), the multiplier would be 10 instead of 20 (resulting in 30 dB).`}],applied:[{question:"How would you interface a digital sensor with a microcontroller using SPI protocol?",answer:`SPI (Serial Peripheral Interface) is a synchronous, full-duplex, master-slave communication protocol. Steps to interface:
1. Hardware Connections: Connect four lines:
   - MOSI (Master Out Slave In) -> Sensor SI
   - MISO (Master In Slave Out) -> Sensor SO
   - SCK (Serial Clock) -> Sensor SCK
   - SS/CS (Slave Select / Chip Select) -> Sensor CS (controlled via GPIO)
2. Pin Config & Timing: Set the microcontroller pin modes, choose clock polarity (CPOL) and phase (CPHA) to match the sensor's datasheet.
3. Software Data Exchange: Pull CS line Low to activate the sensor. Send the read/write address command over MOSI while reading returned bytes on MISO synchronously. Pull CS High when transaction is complete.`},{question:"Explain the methods you would use to analyze and filter high-frequency noise from a sensor signal.",answer:`1. Hardware low-pass RC filter: Implement a simple resistor-capacitor (RC) analog filter before the ADC input to block noise frequencies above cutoff $f_c = 1/(2\\pi RC)$.
2. Hardware shielding: Use twisted pair wiring or differential signaling to minimize electromagnetic interference (EMI).
3. Software DSP filtering: Implement a moving average filter or a digital Low-Pass FIR (Finite Impulse Response) filter in microcontroller code. For real-time applications, calculate filter coefficients using MATLAB and run: $y[n] = \\sum b_i x[n-i]$.`}],hrStyle:[{question:"Describe a time you had to troubleshoot a circuit board in the lab that was not functioning as expected.",answer:`Situation: During a microprocessor lab, our custom telemetry board didn't power up when plugged in; the indicator LEDs remained off.
- Task: We had to identify the cause of the failure and fix it within the 3-hour lab period.
- Action: I took a methodical debugging approach. First, I disconnected the power supply to prevent short-circuit burns. I used a digital multimeter (DMM) to run a continuity test between the ground plane and power rail, discovering a low resistance path (short circuit). I then inspected the board under a microscope and located a tiny solder bridge across the terminals of a SMD bypass capacitor. I used a desoldering braid to clean the pin joint.
- Result: We re-measured resistance (now infinity/open), powered up the board, and successfully loaded our firmware, completing the lab on time.`},{question:"How do you coordinate with software engineers when working on a hardware-software interface?",answer:"Answer outline: Focus on creating clear interface control documents (ICDs) early on. Mappings of registers, memory offsets, timing constraints, and pinouts are documented. Use simulators or logic analyzers (e.g. Saleae) during integration phases so both hardware and software behaviors can be visualized and verified simultaneously."}]}},EEE:{name:"Electrical & Electronics Engineering",icon:"🔋",aptitude:{description:"Quantitative, Logical Reasoning, and Critical Path analysis for electrical utilities, power grids, and core sectors.",topics:["Quantitative: Percentages, Averages, Linear Algebra, Time & Work, Profit & Loss.","Logical: Syllogisms, series completion, critical path sequencing (PERT/CPM).","Verbal: Technical vocabulary, instructions matching, reading comprehension."],playlists:[{title:"IndiaBIX Quantitative Aptitude Practice",url:"https://www.indiabix.com/aptitude/questions-and-answers/"}]},coding:{description:"MATLAB/Simulink modeling, numerical scripts, basic C algorithms for controllers.",topics:["Numerical Tools: MATLAB matrix operations, differential equation solver scripts.","Microcontroller Coding: Basic C programming, register setup, timer interrupts.","Simulation: Power system and electric circuit state solvers."],playlists:[{title:"MATLAB & Simulink Tutorials",url:"https://www.mathworks.com/support/schedules.html"}]},core:{description:"Electrical machines, power grids, converters, and automatic control loop equations.",topics:["Electrical Machines: Synchronous generators, transformers, 3-phase induction motors, DC motor starting methods.","Power Electronics: Thyristor rectifiers, Buck, Boost, and Buck-Boost DC-DC converters, single-phase inverters.","Control Systems: Transfer functions, feedback loop stability, Routh-Hurwitz stability criterion, root locus plots."],playlists:[{title:"NPTEL Electrical Machines Course",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_y9V3Q41-Yv_m2L3k5Tf3t"},{title:"NPTEL Power Systems Engineering Lectures",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Qj-7-Sbe7z4y0v6qFzQ2l"},{title:"Control Systems Crash Course",url:"https://www.youtube.com/playlist?list=PLgwJf8NHJnNFgJ1uR8h986x3yQfI0_cZ6"}]},interview:{conceptual:[{question:"How does a 3-phase Induction Motor generate starting torque? Why is it self-starting?",answer:`A 3-phase induction motor is self-starting because of the interaction of magnetic fields:
1. 3-Phase Stator Winding: The stator contains three windings space-shifted by $120^\\circ$ electrical degrees. When connected to a 3-phase AC supply, the currents create a Rotating Magnetic Field (RMF) that rotates at synchronous speed $N_s = 120f/P$.
2. Electromagnetic Induction: The rotating field cuts the stationary rotor conductors, inducing electromotive force (EMF) in them according to Faraday's Law.
3. Rotor Current: Since the rotor conductors form a closed circuit, currents flow through them.
4. Torque Generation: The rotor currents interact with the stator RMF, generating a mechanical force (Lorentz Force) that rotates the rotor in the direction of the RMF according to Lenz's Law.`},{question:"Explain the Routh-Hurwitz Stability Criterion in Control Systems.",answer:`The Routh-Hurwitz criterion determines the stability of a linear time-invariant (LTI) system by analyzing the coefficients of its characteristic equation $A(s) = a_n s^n + a_{n-1} s^{n-1} + ... + a_0 = 0$:
1. Construct the Routh Array using the coefficients.
2. Analyze the first column of the array.
3. The system is stable if and only if all elements in the first column have the same mathematical sign (all positive or all negative).
4. If there are sign changes, the system is unstable, and the number of sign changes equals the number of roots of the characteristic equation lying in the right half of the s-plane (RHP).`}],problemSolving:[{question:"Calculate the transfer function of a series RC circuit where the output is taken across the capacitor.",answer:`For a series RC circuit, the input voltage is $v_{in}(t)$ and output is $v_{out}(t) = v_c(t)$:
1. Apply Laplace Transform to the components: $R \\to R$, $C \\to 1/(Cs)$.
2. By voltage divider, the output voltage in the s-domain is:
   $$V_{out}(s) = V_{in}(s) \\cdot \\frac{\\frac{1}{Cs}}{R + \\frac{1}{Cs}}$$
3. Simplify the fraction by multiplying numerator and denominator by $Cs$:
   $$H(s) = \\frac{V_{out}(s)}{V_{in}(s)} = \\frac{1}{RCs + 1}$$
This is a standard first-order system with time constant $\\tau = RC$.`},{question:"Calculate the synchronous speed of a 4-pole induction motor running on a grid frequency of 50 Hz. If rotor speed is 1440 RPM, what is the slip?",answer:`1. Synchronous Speed ($N_s$):
   $$N_s = \\frac{120 \\times f}{P} = \\frac{120 \\times 50}{4} = 1500 \\text{ RPM}$$
2. Slip ($s$):
   $$s = \\frac{N_s - N_r}{N_s} = \\frac{1500 - 1440}{1500} = \\frac{60}{1500} = 0.04 \\text{ (or } 4\\%\\text{)}$$`}],applied:[{question:"How is regenerative braking implemented in electric vehicle (EV) motor controllers?",answer:`Regenerative braking turns the traction motor into a generator during deceleration:
1. Generating Mode: When the accelerator is released, the motor controller changes the firing angle of the inverter switches so that the back-EMF of the traction motor becomes higher than the battery terminal voltage.
2. Direction of Current: Current reverses, flowing from the motor back through the freewheeling diodes of the inverter to the battery pack.
3. Retarding Torque: The magnetic drag of the generator provides braking torque to decelerate the vehicle, while converting kinetic energy into chemical energy stored in the battery.`},{question:"How do you diagnose and troubleshoot harmonic distortions in an industrial power system?",answer:`1. Measurements: Connect a Power Quality Analyzer at the Point of Common Coupling (PCC) to measure Total Harmonic Distortion (THD) for voltage and current.
2. Identification: Identify sources of non-linear loads (e.g. Variable Frequency Drives, rectifiers, arc furnaces).
3. Mitigations:
   - Install Passive Filters (inductor-capacitor networks tuned to block specific odd harmonics like 5th and 7th).
   - Deploy Active Harmonic Filters (AHF) that monitor current harmonics in real-time and inject equal but opposite phase currents to cancel them out.`}],hrStyle:[{question:"How do you handle safety protocols when working with high-voltage equipment in a team lab?",answer:`Safety is paramount in electrical engineering:
- Pre-work briefing: We review circuit diagrams and assign roles before turning on power supplies.
- PPE: Ensure everyone is wearing safety glasses and non-conductive safety shoes.
- One-Hand Rule: When probing powered circuits, keep one hand in your pocket to prevent forming a path through your chest.
- Lock-Out/Tag-Out (LOTO): Physical locks are placed on circuit breakers during wiring changes to prevent accidental power-up by others.
- Emergency plan: Knowing the location of the main power shut-off switch and the lab's first-aid/cardiac defibrillator (AED) units.`},{question:"Describe a project experience where you had to manage budget constraints while selecting electrical components.",answer:"Answer outline: Detail a lab project (e.g. custom inverter). You had to balance expensive high-rated IGBTs vs budget limits. Explain how you calculated the maximum expected currents under overload, added a safety factor (e.g., 1.5x), and chose an optimized mid-tier component that met safety margins without exceeding the budget limit."}]}},ME:{name:"Mechanical Engineering",icon:"⚙️",aptitude:{description:"Quantitative, Logical Reasoning, and Mechanical Comprehension tests targeting manufacturing, auto, and design firms.",topics:["Quantitative: Pipes & Cisterns, Clocks, Time & Distance, Ratios.","Logical: Gear rotation patterns, spatial reasoning, pulleys and lever mechanisms.","Verbal: Safety procedures translation, reading technical manuals."],playlists:[{title:"Sanfoundry Mechanical Engineering MCQs",url:"https://www.sanfoundry.com/"}]},coding:{description:"Python/MATLAB for finite element analysis, heat transfer calculations, and CNC G-Code scripting.",topics:["Scientific Scripting: Matrix stress calculations using Python/NumPy, plotting temperature gradients.","CNC Programming: Writing and verifying G-Code (G01, G02, G03) and M-Code blocks for automated lathe milling."],playlists:[{title:"Autodesk G-Code & CNC Programming Guide",url:"https://academy.autodesk.com/"}]},core:{description:"Fluid dynamics, heat transfer, structural materials, and CAD design workflows.",topics:["Thermodynamics & Fluids: Otto/Diesel power cycles, Carnot engine limits, Bernoulli's equation, boundary layers.","Strength of Materials: Stress-Strain diagrams, bending moments, shear force profiles, torsion, buckling limits.","Manufacturing & CAD: Casting principles, welding types, SolidWorks modeling, Finite Element Method (FEM) constraints."],playlists:[{title:"Lesics 3D Concepts - Mechanical Engineering",url:"https://www.youtube.com/c/Lesics"},{title:"NPTEL Strength of Materials Course",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Jb_5lB_WlXGZ2uM1jU5N3"},{title:"GrabCAD Community CAD/CAM Library",url:"https://grabcad.com/tutorials"}]},interview:{conceptual:[{question:"Explain the Second Law of Thermodynamics and its implications on heat engines.",answer:`The Second Law of Thermodynamics states that heat cannot spontaneously flow from a cooler body to a warmer body, and entropy of an isolated system always increases over time. For heat engines, it is formulated in two statements:
1. Kelvin-Planck Statement: It is impossible to construct a device operating in a cycle that absorbs heat from a single thermal reservoir and converts it entirely into work. There must be some heat rejected to a cold sink.
2. Implications: This means no heat engine can ever have $100\\%$ thermal efficiency. The upper limit of efficiency for any heat engine operating between temperatures $T_H$ (hot source) and $T_C$ (cold sink) is defined by the Carnot efficiency: $\\eta_{max} = 1 - T_C/T_H$.`},{question:"Explain the stress-strain curve for a ductile material like mild steel.",answer:`The stress-strain curve shows several distinct regions when subjected to tensile loading:
1. Proportional Limit: Stress is directly proportional to strain (Hooke's Law holds).
2. Elastic Limit: The material returns to its original dimensions upon unloading. No permanent deformation occurs.
3. Yield Point (Upper & Lower): Elastic limit is exceeded. Plastic deformation begins; the material yields with little to no additional load.
4. Ultimate Tensile Strength (UTS): The maximum stress value the material can withstand. Beyond this point, necking (localized cross-sectional reduction) begins.
5. Fracture Point: The material ruptures.`}],problemSolving:[{question:"A cantilever beam of length L supports a point load P at its free end. Calculate the maximum bending moment and maximum deflection.",answer:`For a cantilever beam fixed at $x=0$ and loaded with point load $P$ at $x=L$:
1. Bending Moment ($M$): The bending moment is maximum at the fixed support because the moment arm is longest there:
   $$M_{max} = -P \\cdot L$$
2. Deflection ($\\delta$): Using standard Euler-Bernoulli beam theory equations:
   $$\\delta_{max} = \\frac{P \\cdot L^3}{3EI}$$
where $E$ is Young's Modulus and $I$ is the Area Moment of Inertia of the beam's cross-section.`},{question:"Calculate the thermal efficiency of an engine operating on the Otto cycle if the compression ratio (r) is 8. (Assume ratio of specific heats $\\gamma = 1.4$).",answer:`The formula for Otto cycle thermal efficiency is:
$$\\eta = 1 - \\frac{1}{r^{\\gamma - 1}}$$
Substitute $r = 8$ and $\\gamma = 1.4$:
$$\\eta = 1 - \\frac{1}{8^{1.4 - 1}} = 1 - \\frac{1}{8^{0.4}}$$
Since $8^{0.4} \\approx 2.3$,
$$\\eta \\approx 1 - \\frac{1}{2.3} \\approx 1 - 0.435 = 0.565 \\text{ (or } 56.5\\%\\text{)}$$`}],applied:[{question:"Compare additive manufacturing (3D Printing) and subtractive manufacturing (CNC Milling) design constraints.",answer:`Additive Manufacturing (3D Printing):
- Constraints: Requires support structures for overhangs angle $>45^\\circ$. Layer-by-layer adhesion introduces anisotropic material strength (weaker along Z-axis). High surface roughness requires post-processing.
- Advantages: Design freedom (internal channels, lattices), minimal material waste.

Subtractive Manufacturing (CNC Milling):
- Constraints: Limited tool entry angles (requires multi-axis machines for complex cuts). Fillets are required since round rotary tools cannot cut sharp internal corners. Material waste is high.
- Advantages: Excellent surface finish, isotropic strength, works on a wider range of materials.`},{question:"How would you diagnose structural cracks on a cast iron pump casing?",answer:`I would follow a non-destructive testing (NDT) workflow:
1. Visual Inspection: Use magnifier and light to inspect surface stress locations.
2. Liquid Dye Penetrant Testing: Clean the casing surface, apply a red dye penetrant, wipe it off, and apply a developer. The dye bleeding into surface cracks will clearly highlight them.
3. Magnetic Particle Testing (if applicable): Apply magnetic fields and metallic powders to locate sub-surface cracks.
4. Remediation: Run Finite Element Method (FEM) simulation on the casing under dynamic pressure to check if stress levels exceed fatigue limits. Redesign with thicker walls if stress is concentrated.`}],hrStyle:[{question:"Describe a design project where your CAD modeling team had conflicting design concepts. How did you resolve it?",answer:`STAR method:
- Situation: During our SAE formula student project, the chassis team disagreed on choosing between a steel space-frame and a carbon-fiber monocoque.
- Task: We had to decide within two weeks to avoid delaying manufacturing.
- Action: As team lead, I created a weighted decision matrix. We scored both choices on objective parameters: manufacturing cost, weight, crash simulation results, and lead time. While carbon fiber was lighter, our FEA simulations showed the space frame met all safety criteria and cost $70\\%$ less to fabricate in our lab.
- Result: The team agreed unanimously to the space-frame chassis. We manufactured it successfully and passed tech inspection at the competition.`},{question:"Tell me about a time you had to present a complex engineering design to non-technical stakeholders.",answer:"Answer outline: Detail how you translated technical drawings into simple functional parameters (e.g., how the mechanism saves costs, increases speed, or improves safety) using 3D animations instead of complex stress equations."}]}},CIVIL:{name:"Civil Engineering",icon:"🧱",aptitude:{description:"Quantitative, Logical Reasoning, and Spatial logic for construction, infrastructure, and structural firms.",topics:["Quantitative: Heights & Distances, Area & Volume, Time/Speed/Distance, Ratios.","Logical: Structural sequences, logical flowcharts, network diagrams.","Verbal: Building code summaries, project specifications reading."],playlists:[{title:"Civil Engineering Academy Portal",url:"https://civilengineeringacademy.com/"}]},coding:{description:"Excel Macros, VBA programming, and basic structural scripts for beam load analysis.",topics:["Spreadsheet Tools: Excel VBA macros to calculate material bills, estimate costs, and solve concrete weights.","Structural Scripts: Basic Python arrays to calculate bending moments at coordinate intervals."],playlists:[{title:"VBA Programming for Civil Engineers",url:"https://civilengineeringacademy.com/"}]},core:{description:"Structural design, concrete technology, soil hydraulics, and construction charts.",topics:["Structural Design & Analysis: Concrete grade codes, shear rebar placement, beam load distributions, truss analysis.","Hydraulics & Fluids: Open channel flow, Darcy's law for soil seepage, groundwater tables, dam pressure distributions.","Construction Management: Critical Path Method (CPM), PERT charts, quality concrete mixes, slump testing."],playlists:[{title:"NPTEL Structural Analysis Playlist",url:"https://www.youtube.com/playlist?list=PL43E087796791E479"},{title:"GATE Academy Civil Lectures",url:"https://www.youtube.com/playlist?list=PL-k6G5rLqD7P-Tpx7aI0tPj_jC_J7wL9D"}]},interview:{conceptual:[{question:"What is the difference between under-reinforced and over-reinforced concrete beams? Why are under-reinforced designs preferred?",answer:`1. Under-reinforced Beams:
- The tension steel yields before the compression concrete reaches its ultimate crushing strain.
- Ductile failure: Yielding steel undergoes significant plastic deformation, creating visible cracks and deflections as a warning before failure.
- This is highly preferred to allow building evacuations.

2. Over-reinforced Beams:
- The compression concrete crushes before the tension steel yields.
- Brittle failure: Failure occurs suddenly without warning, which is extremely dangerous.
Therefore, building design codes enforce under-reinforced sections by limiting the maximum allowable area of steel.`},{question:"Explain Darcy's Law for water flow through porous soils.",answer:`Darcy's Law describes the rate of fluid flow through a porous medium (like water through a soil mass):
$$Q = k \\cdot i \\cdot A$$
where:
- $Q$ is the discharge flow rate ($m^3/s$).
- $k$ is the hydraulic conductivity/permeability coefficient of the soil ($m/s$).
- $i$ is the hydraulic gradient ($h/L$, head loss per unit flow length).
- $A$ is the cross-sectional area perpendicular to the flow direction.
This law is fundamental for analyzing soil seepage under dams, well hydraulics, and drainage designs.`}],problemSolving:[{question:"For a simply supported beam of length 6m supporting a Uniformly Distributed Load (UDL) of 4kN/m over its entire length, calculate the maximum shear force and maximum bending moment.",answer:`1. Reaction Forces: Since the load is symmetrical, the reaction forces at supports $A$ and $B$ are equal:
   $$R_A = R_B = \\frac{w \\cdot L}{2} = \\frac{4 \\cdot 6}{2} = 12 \\text{ kN}$$
2. Maximum Shear Force ($V_{max}$): Occurs at the supports:
   $$V_{max} = R_A = 12 \\text{ kN}$$
3. Maximum Bending Moment ($M_{max}$): Occurs at the midpoint ($x = L/2 = 3\\text{m}$):
   $$M_{max} = \\frac{w \\cdot L^2}{8} = \\frac{4 \\cdot 6^2}{8} = \\frac{144}{8} = 18 \\text{ kNm}$$
At the midpoint, the shear force crosses zero.`},{question:"Calculate the water-to-cement ratio if a concrete mix design uses 180 liters of water and 400 kg of cement. How does this ratio affect strength?",answer:`1. Calculation:
   $$\\text{Water-Cement Ratio} = \\frac{\\text{Weight of Water}}{\\text{Weight of Cement}} = \\frac{180 \\text{ kg}}{400 \\text{ kg}} = 0.45$$
Note: 1 liter of water has a mass of 1 kg.
2. Effect on Strength: A lower water-cement ratio increases concrete strength and durability by placing cement particles closer together, reducing capillary voids. However, if the ratio is too low (e.g. $<0.35$), the concrete becomes unworkable and difficult to compact, leading to structural voids.`}],applied:[{question:"What quality control tests must be conducted on concrete during cast execution on-site?",answer:`1. Slump Cone Test: Performed on fresh concrete mix on-site to verify workability and consistency before casting. If concrete slump does not match design spec, the truck is rejected.
2. Compression Cube Casting: Fresh concrete samples are cast into $150\\text{mm}$ cubes. They are cured and crushed in a compression testing machine at 7 days and 28 days to verify strength specs (e.g. $30\\text{MPa}$ for M30 concrete).
3. Temperature Monitoring: For mass concrete pours (e.g., raft foundations), monitor temperature differentials to prevent thermal cracking.`},{question:"How would you handle structural foundation settlements detected in an existing building?",answer:`1. Diagnostic: Install settlement tell-tale markers to monitor rate and direction of crack expansion. Conduct soil bore tests to analyze moisture changes.
2. Remediation:
   - Underpinning: Extend the depth of the foundation down to a stronger soil strata using micro-piles.
   - Soil Grouting: Inject cement or chemical grouts under pressure to compact and stabilize loose sub-base soils.`}],hrStyle:[{question:"Describe a time your design team noticed a safety violation on a construction site. How did you handle it?",answer:`Situation: During a site visit for our structural concrete lab project, I noticed subcontractor workers casting columns without safety harnesses or fall protection rails at a height of 4 meters.
- Task: We had to stop the unsafe work immediately without causing contractual disputes.
- Action: I called the site safety supervisor to the location. I pointed out the violation of safety codes, explaining the liability risks and worker danger. We paused the pour, and the safety team set up safety lines.
- Result: Workers tied off before resuming. The pour was finished safely, and the team established a daily safety check routine.`},{question:"How do you handle disputes with subcontractors regarding material specifications on site?",answer:"Answer outline: Focus on objectivity and referencing contract documents. I compare delivered material certificates (e.g. mill test certificates for steel) with the approved structural drawings. If materials do not meet design grades, I issue a formal non-conformance report (NCR) to ensure compliance."}]}},AERO:{name:"Aerospace Engineering",icon:"✈️",aptitude:{description:"Quantitative, Physics-oriented math, and Spatial logic for aerospace, aeronautics, and defense firms.",topics:["Quantitative: Kinematics, vectors, rates of change, spatial rotation logic.","Logical: Mechanical linkages, flow charts, coordinate transformations.","Verbal: Technical flight logs translation, aviation regulations."],playlists:[{title:"Sanfoundry Aerodynamics & Flight Mechanics MCQs",url:"https://www.sanfoundry.com/"}]},coding:{description:"Python/MATLAB for computational fluid dynamics (CFD), flight path simulation, and control parameters.",topics:["Simulation: Coding Runge-Kutta numerical integration for trajectory simulation in Python.","CFD scripting: Setting up mesh vectors and boundary conditions in MATLAB scripts."],playlists:[{title:"Computational Fluid Dynamics Guide",url:"https://ocw.mit.edu/courses/aeronautics-and-astronautics/"}]},core:{description:"Flight mechanics, boundary layers, structural stress-strain, jet propulsion, and avionics.",topics:["Aerodynamics & Fluids: Airfoil lift/drag curves, boundary layer separation, supersonic shock waves (normal & oblique).","Structures & Avionics: Thin-walled pressure vessels, aerospace alloys, autopilot PID control models, IMU sensors.","Propulsion: Gas turbine cycles (Brayton), bypass ratios, rocket propellants."],playlists:[{title:"NASA Glenn Research - Aerodynamics Basics",url:"https://www.grc.nasa.gov/www/k-12/airplane/index.html"},{title:"NPTEL Flight Mechanics & Aircraft Dynamics",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_S5p3q_SNDsV1e0zXWwz1"}]},interview:{conceptual:[{question:"How does an airfoil generate aerodynamic lift? Explain using pressure differences.",answer:`An airfoil generates lift through a combination of Bernoulli's principle and Newton's Third Law:
1. Flow asymmetry: Because of the airfoil's shape and angle of attack, the air flowing over the curved top surface travels faster than the air flowing under the bottom surface.
2. Pressure difference: According to Bernoulli's equation, as fluid speed increases, static pressure decreases. This creates a low-pressure region on the upper surface and a higher-pressure region on the lower surface.
3. Net Force: This pressure differential generates a net upward aerodynamic force perpendicular to the freestream velocity, known as Lift.
4. Downward deflection: The airfoil also forces the air downwards; Newton's Third Law dictates an equal and opposite reaction forcing the airfoil upwards.`},{question:"Explain the differences between normal and oblique shock waves in supersonic flow.",answer:`Shock waves are discontinuities where pressure, temperature, and density increase abruptly while flow velocity drops:
- Normal Shock Wave: Occurs perpendicular ($90^\\circ$) to the upstream flow direction. The flow downstream of a normal shock wave always drops from supersonic to subsonic speed ($M < 1$).
- Oblique Shock Wave: Occurs at an angle to the flow direction (usually formed by a wedge or concave corner). The flow downstream of an oblique shock wave is deflected but usually remains supersonic, though at a lower Mach number than upstream.`}],problemSolving:[{question:"An aircraft with wing area $20\\text{ m}^2$ and lift coefficient $C_L = 1.2$ flies at a velocity of $50\\text{ m/s}$ in air density $\\rho = 1.2\\text{ kg/m}^3$. Calculate the aerodynamic lift.",answer:`The lift equation is:
$$L = \\frac{1}{2} \\rho \\cdot v^2 \\cdot S \\cdot C_L$$
Substitute the given values:
$$L = 0.5 \\times 1.2 \\times 50^2 \\times 20 \\times 1.2$$
$$L = 0.6 \\times 2500 \\times 24$$
$$L = 1500 \\times 24 = 36,000 \\text{ N (or } 36 \\text{ kN)}$$`},{question:"Calculate the Mach number of an aircraft flying at $680\\text{ m/s}$ where ambient temperature is such that the speed of sound is $340\\text{ m/s}$. Under what regime is the aircraft flying?",answer:`1. Mach number ($M$) calculation:
   $$M = \\frac{\\text{Velocity of Aircraft } v}{\\text{Speed of Sound } a} = \\frac{680}{340} = 2.0$$
2. Flight regime: Since $M = 2.0$ (which is greater than 1.2 but less than 5.0), the aircraft is flying in the supersonic regime.`}],applied:[{question:"How do you minimize structural fatigue in commercial aircraft fuselage joints?",answer:`1. Material Selection: Use fatigue-resistant materials like Aluminum-Copper alloys (2000 series) or modern Carbon-Fiber Reinforced Polymers (CFRP).
2. Manufacturing steps: Perform cold expansion on rivet/fastener holes. This induces beneficial residual compressive stress fields around the hole margins, halting crack initiation.
3. Design: Eliminate sharp interior corners; use generous radius fillets. Incorporate 'crack arrestor' structural strips to limit damage propagation.`},{question:"How would you diagnose autopilot oscillation issues in a drone simulation test?",answer:`I would analyze the control loop signals:
1. Log PID Outputs: Log the Proportional ($K_p$), Integral ($K_i$), and Derivative ($K_d$) outputs alongside gyroscope attitude data.
2. Root Cause: If the drone oscillates rapidly, $K_p$ is likely too high, causing overshoot. If oscillations are slow, $K_i$ might be causing windup.
3. Remediation: Turn off $K_i$ and $K_d$. Gradually increase $K_p$ until self-oscillation starts, then set it to half. Introduce $K_d$ to damp out overshoots, and finally add small $K_i$ to eliminate steady-state errors.`}],hrStyle:[{question:"Describe a time your aerospace team faced an unexpected simulation error close to a project deadline.",answer:`Situation: During a wind tunnel prep lab, our calculated drag coefficients in the CFD mesh deviated by $40\\%$ from our flat-plate theoretical equations.
- Task: We had to fix the simulation mesh model within 48 hours to secure testing approvals.
- Action: I organized an emergency debugging session. I checked our boundary conditions and discovered that we hadn't set the turbulence model correctly, neglecting boundary layer wall functions ($y^+$ calculations) in our mesh. I recalculated the grid spacing near the airfoil surface to satisfy $y^+ \\approx 1$ and switched to the Spalart-Allmaras turbulence model.
- Result: The new CFD drag matched theory within $3\\%$, allowing us to pass verification and run our wind tunnel test on schedule.`},{question:"How do you handle high-pressure environments, such as during critical testing or flight test programs?",answer:"Answer outline: Detail utilizing standard checklists and pre-flight safety briefings. Emphasize that in aviation, safety takes absolute precedence over deadlines, and keeping a calm, methodical checklist-driven mindset prevents human error."}]}},BME:{name:"Biomedical Engineering",icon:"🏥",aptitude:{description:"Quantitative, Logical Reasoning, and Medical charts data interpretation for clinical, design, and instrumentation companies.",topics:["Quantitative: Statistics, standard deviations, probability distributions, coordinate geometry.","Logical: Biological flow charts, logical syllogisms, medical device fault sequences.","Verbal: Medical literature reviews, FDA compliance standards parsing."],playlists:[{title:"Sanfoundry Biomedical Instrumentation MCQs",url:"https://www.sanfoundry.com/"}]},coding:{description:"Python/MATLAB for biosignal filtering (ECG/EEG), clinical image processing, and biological systems modeling.",topics:["Signal Filtering: Writing Fourier transform and Butterworth filter scripts in MATLAB.","Medical Imaging: Implementing thresholding and edge detection on MRI DICOM files in Python."],playlists:[{title:"Biomedical Signal Processing Tutorials",url:"https://www.youtube.com/playlist?list=PLTfCJuq2YtB0j3Hh9QZ8Wn3yU_eK_gYn3"}]},core:{description:"Anatomy dynamics, biosignal telemetry, implant materials, and clinical instrumentation.",topics:["Anatomy & Devices: ECG/EEG signal acquisition, pacemakers, physiological sensors, MRI/CT scanners.","Biomechanics & Biomaterials: Joint mechanics, biocompatibility, orthopedic implant stress, blood rheology.","Biosignal Processing: Digital filters (Butterworth, Notch), noise reduction (50Hz grid noise), wave classification."],playlists:[{title:"Yale Open Courseware - Intro to Biomedical Engineering",url:"https://oyc.yale.edu/biomedical-engineering/beng-100"},{title:"NIH Biomedical Engineering Science Portal",url:"https://www.nibib.nih.gov/science-education/science-topics"}]},interview:{conceptual:[{question:"How does a standard Electrocardiogram (ECG) acquire cardiac signals from the skin?",answer:`ECG signal acquisition involves the following steps:
1. Transduction: Ag/AgCl electrodes placed on the skin detect ionic currents generated by the depolarization and repolarization of the heart muscle.
2. Amplification: Because skin-surface ECG signals are tiny ($0.5\\text{mV}$ to $2\\text{mV}$), they are passed through an Instrumentation Amplifier with a high Common-Mode Rejection Ratio (CMRR $>100\\text{dB}$) to eliminate common-mode noise.
3. Filtering: Passband filters limit the signal to $0.05\\text{ Hz}$ to $150\\text{ Hz}$ to block respiration baseline drift ($<0.05\\text{Hz}$) and high-frequency muscle tremors.
4. Digitization: An ADC converts the analog voltages for digital processing and screen visualization.`},{question:"What defines biocompatibility for materials used in medical implants?",answer:`Biocompatibility is the ability of a material to perform its desired function inside a living host without eliciting undesirable local or systemic effects. Key criteria:
1. Non-toxic & Non-carcinogenic: Must not leach toxic chemicals into surrounding fluids.
2. Bioinert or Bioactive: Must not trigger an immune reaction (foreign body response) leading to thick fibrous capsules.
3. Corrosion resistance: Must withstand the highly saline environment of body fluids.
Common biocompatible materials include Titanium alloys, 316L Stainless Steel, and ceramics like Alumina.`}],problemSolving:[{question:"Design a high-pass active RC filter to block low-frequency baseline wander (< 0.5 Hz) in an ECG acquisition circuit. Calculate the resistor value if the capacitor is set to 1 microfarad.",answer:`The cutoff frequency equation for an active RC filter is:
$$f_c = \\frac{1}{2\\pi \\cdot R \\cdot C}$$
1. Rearrange to solve for $R$:
   $$R = \\frac{1}{2\\pi \\cdot f_c \\cdot C}$$
2. Substitute $f_c = 0.5 \\text{ Hz}$ and $C = 1 \\mu\\text{F} = 10^{-6}\\text{ F}$:
   $$R = \\frac{1}{2\\pi \\cdot 0.5 \\cdot 10^{-6}} = \\frac{1}{\\pi \\cdot 10^{-6}} = \\frac{10^6}{\\pi} \\approx 318,310 \\text{ }\\Omega \\approx 318 \\text{ k}\\Omega$$
Using a $318\\text{ k}\\Omega$ resistor will set the cutoff exactly at $0.5\\text{ Hz}$.`},{question:"Determine the spatial resolution (pixel size) of a CT scanner with a Field of View (FOV) of 250 mm and an acquisition matrix size of 512 x 512.",answer:`The formula for CT spatial pixel size is:
$$\\text{Pixel Size} = \\frac{\\text{FOV}}{\\text{Matrix Size}}$$
Substitute the values:
$$\\text{Pixel Size} = \\frac{250 \\text{ mm}}{512} \\approx 0.488 \\text{ mm/pixel}$$
The spatial resolution is approximately $0.49\\text{ mm}$.`}],applied:[{question:"How would you design a prosthetic knee joint for a young, active patient?",answer:`1. Material Selection: Use Titanium-6Aluminum-4Vanadium alloy or carbon-fiber composites for high strength-to-weight ratio and bio-inertness.
2. Kinematics: Incorporate a polycentric (multi-axis) hinge design to replicate the natural sliding-rolling motion of the human knee.
3. Damping: Deploy a micro-hydraulic damper with an embedded microcontroller that adjusts resistance dynamically based on IMU data, allowing walking and running.
4. Interface: Design a soft silicone gel sleeve insert to prevent pressure sores at the residual limb socket.`},{question:"How do you isolate and debug a 50Hz power line noise issue during ECG sensor testing?",answer:`1. Hardware verification: Check electrode gel wetness; high contact impedance increases noise. Verify that the shield lines of the patient cable are connected to system ground.
2. Instrumentation checks: Verify the CMRR of the pre-amplifier. If the op-amp input impedances are mismatched, common-mode 50Hz noise will convert to differential noise.
3. Software fix: Apply a digital IIR Notch Filter tuned precisely to $50\\text{ Hz}$ (or $60\\text{ Hz}$ depending on grid location) in code to eliminate power-line interference without distorting QRS details.`}],hrStyle:[{question:"How do you address ethical and patient-safety guidelines during medical device design?",answer:`Patient safety is our primary engineering metric:
- Electrical Isolation: I design the device inputs to be isolated from mains voltage using optical couplers, keeping leakage currents under $10\\mu\\text{A}$ (satisfying IEC 60601-1 standards).
- Redundancy: Implement watchdogs and hardware fail-safes (e.g. pacemakers revert to fixed backing rates if code freezes).
- FDA validation: Keep rigorous design records (DHF) and trace verification steps to ensure patient protection before clinical trials.`},{question:"Describe a time your biomedical team faced a disagreement during testing of a clinical sensor prototype.",answer:"Answer outline: Detail how your team disagreed on whether a sensor's temperature drift was acceptable. You resolved this by reviewing the FDA specifications for clinical thermometers, showing that the drift exceeded limits, and agreeing objectively to implement a compensation equation in software."}]}},BT:{name:"Biotechnology",icon:"🧬",aptitude:{description:"Quantitative, Logical Reasoning, and Probability/Statistics math for pharmaceutical, agri-tech, and bio-industrial sectors.",topics:["Quantitative: Probability (Mendelian ratios), permutations, statistics (T-tests, Chi-square), ratios.","Logical: Genetic trees, biological process flow charts, classification patterns.","Verbal: Patent specifications reading, safety guidelines verification."],playlists:[{title:"Sanfoundry Biotechnology MCQs",url:"https://www.sanfoundry.com/"}]},coding:{description:"Bioinformatics coding, DNA alignment search algorithms, and biological database parsing.",topics:["Bioinformatics Coding: Python scripts to parse FASTA files, count GC-content, and find motifs.","Database Tools: Running command-line BLAST searches, querying NCBI records."],playlists:[{title:"Rosalind Bioinformatics Coding Portal",url:"https://rosalind.info/problems/locations/"}]},core:{description:"Genetics, molecular replication, cell growth math, and bioprocess purification units.",topics:["Molecular Biology: DNA replication enzymes, RNA transcription factors, translation models, CRISPR-Cas9 mechanics.","Bioprocess Engineering: Microbial growth curves, Monod model equations, bioreactor aeration, downstream purification.","Genetics & Biotech: Mendelian inheritance, PCR thermal profiles, HPLC chromatography."],playlists:[{title:"Shomu's Biology (Biotechnology Lectures)",url:"https://www.youtube.com/c/ShomusBiologyOfficial"},{title:"NPTEL Pharmaceutical Biotechnology",url:"https://archive.nptel.ac.in/courses/102/105/102105058/"}]},interview:{conceptual:[{question:"Describe the steps and enzyme functions involved in eukaryotic DNA Replication.",answer:`DNA replication is highly coordinated and semi-conservative:
1. Unwinding: Helicase breaks hydrogen bonds to unwind the double helix, forming a replication fork. Single-Stranded Binding Proteins (SSBs) stabilize the strands.
2. Priming: Primase synthesizes short RNA primers to provide a free 3'-OH end.
3. Elongation: DNA Polymerase $\\delta$ and $\\epsilon$ add nucleotides in the 5' to 3' direction. The leading strand is synthesized continuously, while the lagging strand is synthesized discontinuously, creating Okazaki fragments.
4. Ligation: Exonuclease removes RNA primers, DNA Polymerase fills the gaps, and DNA Ligase seals the phosphodiester backbone.`},{question:"What is the Monod Model for microbial growth in bioprocess engineering?",answer:`The Monod model relates the specific growth rate ($\\mu$) of microorganisms to the concentration of a limiting substrate ($S$):
$$\\mu = \\mu_{max} \\cdot \\frac{S}{K_s + S}$$
where:
- $\\mu$ is the specific growth rate ($h^{-1}$).
- $\\mu_{max}$ is the maximum growth rate.
- $S$ is the substrate concentration ($g/L$).
- $K_s$ is the half-velocity constant (substrate concentration where $\\mu = \\mu_{max}/2$).
This is mathematically equivalent to Michaelis-Menten kinetics and is vital for bioreactor scaling.`}],problemSolving:[{question:"Calculate the doubling time of a bacterial culture that grows from $10^3$ to $10^6$ cells in 6 hours of exponential growth.",answer:`The exponential growth equation is:
$$N_t = N_0 \\cdot 2^g$$
where $g$ is the number of generations:
1. Solve for $g$:
   $$10^6 = 10^3 \\cdot 2^g \\implies 2^g = 1000$$
   $$g = \\log_2(1000) = \\frac{\\ln(1000)}{\\ln(2)} \\approx \\frac{6.908}{0.693} \\approx 9.96 \\text{ generations}$$
2. Calculate Doubling Time ($t_d$):
   $$t_d = \\frac{\\text{Total Time } t}{g} = \\frac{6 \\text{ hours}}{9.96} \\approx 0.602 \\text{ hours} \\approx 36.1 \\text{ minutes}$$
The doubling time is approximately 36 minutes.`},{question:"An enzyme has a maximum velocity ($V_{max}$) of 50 micromoles/sec, and the substrate concentration is equal to $K_m$. What is the reaction velocity (V)?",answer:`Using the Michaelis-Menten equation:
$$V = \\frac{V_{max} \\cdot S}{K_m + S}$$
Since we are given that $S = K_m$:
$$V = \\frac{V_{max} \\cdot K_m}{K_m + K_m} = \\frac{V_{max} \\cdot K_m}{2 K_m} = \\frac{V_{max}}{2}$$
Substitute $V_{max} = 50 \\mu\\text{mol/s}$:
$$V = \\frac{50}{2} = 25 \\mu\\text{mol/s}$$
The reaction velocity is exactly half of the maximum velocity.`}],applied:[{question:"Outline the downstream purification process to isolate a recombinant monoclonal antibody from cell harvest.",answer:`1. Clarification: Centrifugation or depth filtration to remove mammalian host cells and cellular debris.
2. Capture: Protein A Affinity Chromatography. The antibody binds specifically to the resin, and impurities are washed away. Elute the target by lowering pH to $\\approx 3.0$.
3. Viral Inactivation: Hold the eluate at low pH for 1 hour to denature enveloped viruses.
4. Polishing: Ion Exchange Chromatography (Anion/Cation) to remove trace host cell proteins (HCP), DNA, and antibody aggregates.
5. Formulation: Ultrafiltration/Diafiltration to exchange buffer and concentrate the purified antibody to drug storage requirements.`},{question:"How do you optimize growth yields of a recombinant protein expressed in E. coli in a batch fermenter?",answer:`1. Aeration Control: Monitor Dissolved Oxygen (DO). Adjust agitation speed and air flow rate to maintain DO above $30\\%$ to prevent anaerobic byproduct (acetate) accumulation.
2. Induction point: Monitor optical density ($OD_{600}$). Induce protein expression (e.g. using IPTG) during mid-exponential phase to maximize cellular machinery availability.
3. Codon Optimization: Modify the recombinant gene sequence to use codons favored by E. coli, eliminating translation bottlenecks.`}],hrStyle:[{question:"Describe a time your biotechnology team faced contamination in a cell culture run. How did you investigate it?",answer:`Situation: During a 5-day yeast fermentation lab, our control flask turned turbid, indicating bacterial contamination, which threatened to ruin our dataset.
- Task: We had to identify the point of entry and save our remaining runs.
- Action: I led the troubleshooting. I took samples for gram staining and confirmed rod-shaped bacteria. I systematically audited our aseptic flow: autoclave logs, hood airflow, and media sterility. I found that the autoclave temperature sensor had logged a lower temp during our run due to a steam valve clog.
- Result: We cleaned the fermenters with sanitizers, replaced the media, autoclaved again under verified sensors, and successfully finished our project with sterile cultures.`},{question:"How do you handle biosafety protocols (e.g. Biosafety Levels) when working in a collaborative team?",answer:"Answer outline: Detail strictly enforcing BSL safety guidelines (BSL-1 or BSL-2). Wearing lab coats, gloves, and eye protection. Ensuring autoclave schedules are checked, biological waste disposal protocols are followed, and clean team communication is maintained to prevent contamination or exposure."}]}}},W4=[{key:"CSE",name:"Computer Science",icon:"💻"},{key:"IT",name:"Information Technology",icon:"🌐"},{key:"ECE",name:"Electronics & Communication",icon:"⚡"},{key:"EEE",name:"Electrical & Electronics",icon:"🔋"},{key:"ME",name:"Mechanical",icon:"⚙️"},{key:"CIVIL",name:"Civil",icon:"🧱"},{key:"AERO",name:"Aeronautical",icon:"✈️"},{key:"BME",name:"Biomedical",icon:"🏥"},{key:"BT",name:"Biotechnology",icon:"🧬"}],$h={CSE:{text:"#0284c7",bg:"rgba(2,132,199,0.08)",border:"1px solid rgba(2,132,199,0.2)"},IT:{text:"#2563eb",bg:"rgba(37,99,235,0.08)",border:"1px solid rgba(37,99,235,0.2)"},ECE:{text:"#ea580c",bg:"rgba(234,88,12,0.08)",border:"1px solid rgba(234,88,12,0.2)"},EEE:{text:"#e11d48",bg:"rgba(225,29,72,0.08)",border:"1px solid rgba(225,29,72,0.2)"},ME:{text:"#16a34a",bg:"rgba(22,163,74,0.08)",border:"1px solid rgba(22,163,74,0.2)"},CIVIL:{text:"#ca8a04",bg:"rgba(202,138,4,0.08)",border:"1px solid rgba(202,138,4,0.2)"},AERO:{text:"#9333ea",bg:"rgba(147,51,234,0.08)",border:"1px solid rgba(147,51,234,0.2)"},BME:{text:"#db2777",bg:"rgba(219,39,119,0.08)",border:"1px solid rgba(219,39,119,0.2)"},BT:{text:"#0d9488",bg:"rgba(13,148,136,0.08)",border:"1px solid rgba(13,148,136,0.2)"}},q4=[{title:"IndiaBIX Quantitative Aptitude Practice",url:"https://www.indiabix.com/aptitude/questions-and-answers/",category:"aptitude",department:"COMMON",subject:"Quantitative Aptitude",description:"Practice online test questions in quantitative aptitude with formulas and shortcut explanations.",tags:["#aptitude","#quant","#indiabix"]},{title:"PrepInsta Placement Aptitude Masterclass",url:"https://prepinsta.com/",category:"aptitude",department:"COMMON",subject:"Placement Assessment",description:"Complete assessment portal for quantitative, logical, and verbal reasoning rounds.",tags:["#aptitude","#reasoning","#prepinsta"]},{title:"IndiaBIX Logical Reasoning Tests",url:"https://www.indiabix.com/logical-reasoning/questions-and-answers/",category:"aptitude",department:"COMMON",subject:"Logical Reasoning",description:"Verbal and non-verbal logical reasoning questions with solutions for placement exams.",tags:["#reasoning","#indiabix","#prep"]},{title:"GeeksforGeeks SDE Prep Roadmap",url:"https://www.geeksforgeeks.org/lmns-gq-gfg/",category:"company",department:"CSE",subject:"SDE Interviews",description:"Company-wise software engineer interview question sheets and SDE placement roadmap.",tags:["#sde","#gfg","#placementprep"]},{title:"PrepInsta Company Mock Papers",url:"https://prepinsta.com/company-prep/",category:"company",department:"COMMON",subject:"Recruiter Mock Papers",description:"Mock tests and past placement papers for TCS, Infosys, Cognizant, Wipro, and Accenture.",tags:["#companyprep","#mocktests","#tcs"]},{title:"Striver's DSA A-to-Z Placement Sheet",url:"https://takeuforward.org/strivers-a2z-dsa-course-sheet-preview-2/",category:"coding",department:"CSE",subject:"Data Structures & Algorithms",description:"The most structured coding sheet for software engineering placements.",tags:["#dsa","#coding","#striversheet"]},{title:"NeetCode 150 - Coding Practice Map",url:"https://neetcode.io/practice",category:"coding",department:"CSE",subject:"Coding Practice",description:"150 curated LeetCode problems with full video walk-throughs and structural maps.",tags:["#leetcode","#coding","#dsa"]},{title:"Abdul Bari's Algorithms Lectures",url:"https://www.youtube.com/playlist?list=PLDN4rRL5gy4UzoN7Apx-w5G37WPo68e59",category:"coding",department:"CSE",subject:"Algorithms",description:"Gold standard video tutorials explaining algorithm design techniques (Greedy, DP, Divide & Conquer).",tags:["#algorithms","#dsa","#youtube"]},{title:"Jenny's Lectures - Data Structures Course",url:"https://www.youtube.com/playlist?list=PLdo5W4Nhv31bbKJzrsKfMpo_grxuLl8JH",category:"coding",department:"CSE",subject:"Data Structures",description:"Detailed whiteboard lectures explaining arrays, stacks, trees, and linked list implementations.",tags:["#datastructures","#cse","#youtube"]},{title:"Gate Smashers - Operating Systems Course",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p",category:"core",department:"CSE",subject:"Operating Systems",description:"Clear and popular lectures covering CPU Scheduling, Semaphores, Deadlocks, and Memory.",tags:["#os","#gate","#youtube"]},{title:"Operating Systems: Three Easy Pieces (OSTEP)",url:"https://pages.cs.wisc.edu/~remzi/OSTEP/",category:"core",department:"CSE",subject:"OS Internals",description:"Highly acclaimed free textbook explaining virtualization, concurrency, and persistence internals.",tags:["#os","#concurrency","#ostep","#internals"]},{title:"PortSwigger Web Security Academy",url:"https://portswigger.net/web-security",category:"core",department:"CSE",subject:"Cybersecurity",description:"Free interactive labs covering security vulnerabilities, injection attacks, and encryption.",tags:["#security","#cybersecurity","#portswigger"]},{title:"Gate Smashers - Database Management System (DBMS)",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiGGtVqgLYuJaqyLl74I_641",category:"core",department:"CSE",subject:"DBMS",description:"Foundational DBMS topics covering SQL, normalization, transactions, and ER modeling.",tags:["#dbms","#sql","#gate"]},{title:"Gate Smashers - Computer Networks (CN)",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_",category:"core",department:"CSE",subject:"Computer Networks",description:"OSI Layer dynamics, TCP/IP protocols, subnetting calculations, and routing algorithms.",tags:["#networks","#cn","#gate"]},{title:"GeeksforGeeks CSE Technical Interview Questions",url:"https://www.geeksforgeeks.org/computer-science-interview-questions/",category:"interview",department:"CSE",subject:"CSE Foundations",description:"Top 100+ computer science foundational interview questions covering OOPs, OS, SQL, and networks.",tags:["#csequestions","#interviewprep","#gfg"]},{title:"freeCodeCamp - Web Development & JavaScript",url:"https://www.freecodecamp.org/",category:"coding",department:"IT",subject:"Web Development",description:"Massive project-based learning platform for modern web technologies and frontend/backend certificates.",tags:["#webdev","#javascript","#fullstack"]},{title:"Gate Smashers - System Design Basics",url:"https://www.youtube.com/playlist?list=PLxCzCOWd7aiHaeSkOPofz7IpS3u9kS0Oq",category:"core",department:"IT",subject:"System Design",description:"Fundamentals of horizontal/vertical scaling, load balancers, caching, CDN, and system architecture.",tags:["#systemdesign","#scaling","#it"]},{title:"GeeksforGeeks Cybersecurity Tutorial",url:"https://www.geeksforgeeks.org/cyber-security-tutorial/",category:"core",department:"IT",subject:"Cybersecurity",description:"Foundational cybersecurity articles covering network security, threat models, and crypto.",tags:["#security","#cybersecurity","#gfg"]},{title:"JavaTpoint - Software Engineering Principles",url:"https://www.javatpoint.com/software-engineering-tutorial",category:"core",department:"IT",subject:"Software Engineering",description:"Reference guide for software lifecycles, Agile methodology, testing, and design models.",tags:["#agile","#sdlc","#engineering"]},{title:"GeeksforGeeks IT Specialist Foundational Interview Questions",url:"https://www.geeksforgeeks.org/it-interview-questions/",category:"interview",department:"IT",subject:"IT Foundations",description:"Foundational interview questions for IT graduates covering SQL queries, cloud basics, and Linux scripting.",tags:["#itquestions","#cloud","#linux"]},{title:"Neso Academy - Digital Electronics",url:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRjMH3mWf6kwqiTbT798eAOm",category:"core",department:"ECE",subject:"Digital Electronics",description:"Top video course covering logic gates, Karnaugh maps, sequential flip-flops, and hardware registers.",tags:["#digital","#logic","#vlsi"]},{title:"Neso Academy - Analog Electronics Lectures",url:"https://www.youtube.com/playlist?list=PLBlnK6fEyqRhPG3QI33UYAd5V0aTOaFnK",category:"core",department:"ECE",subject:"Analog Electronics",description:"Detailed tutorials on diode physics, transistor modeling, Op-Amps, and active filters.",tags:["#analog","#circuits","#opamps"]},{title:"Behzad Razavi - Microelectronics Lectures",url:"https://www.youtube.com/playlist?list=PLyYRy1NwsKafyvE0p3tvsX8xI6mH43Wcr",category:"core",department:"ECE",subject:"Microelectronics Design",description:"World-renowned professor's lectures on integrated analog circuit design and fabrication physics.",tags:["#circuits","#razavi","#vlsi"]},{title:"Embedded Systems Shape the World Course",url:"https://users.ece.utexas.edu/~valvano/embed/toc1.htm",category:"core",department:"ECE",subject:"Embedded Systems",description:"Open courseware teaching microcontroller architectures, RTOS timers, and sensor interfaces.",tags:["#embedded","#microcontrollers","#ece","#valvano"]},{title:"MIT Signals and Systems Course",url:"https://ocw.mit.edu/courses/6-003-signals-and-systems-fall-2011/",category:"core",department:"ECE",subject:"Signal Processing",description:"Core signal processing fundamentals, Fourier transforms, Laplace domains, and filtering applications.",tags:["#signals","#dsp","#mit"]},{title:"Verilog HDL Hardware Description Guide",url:"https://www.asic-world.com/verilog/index.html",category:"core",department:"ECE",subject:"VLSI Coding",description:"Syntax lists and design templates for writing Verilog code for hardware roles.",tags:["#verilog","#vlsi","#coding"]},{title:"VLSI Encyclopedia Curation Space",url:"http://www.vlsiencyclopedia.com/",category:"core",department:"ECE",subject:"VLSI Design",description:"Excellent reference articles covering physical design, ASIC design flows, and CMOS circuits.",tags:["#vlsi","#asic","#cmos"]},{title:"Sanfoundry Digital Electronics & ECE Foundational Questions",url:"https://www.sanfoundry.com/1000-digital-circuits-questions-answers/",category:"interview",department:"ECE",subject:"ECE Foundations",description:"1000+ MCQs and technical interview questions on digital electronics and circuit design.",tags:["#ecequestions","#digitalcircuits","#sanfoundry"]},{title:"Electrical4U - Core Prep Portal",url:"https://www.electrical4u.com/",category:"core",department:"EEE",subject:"Electrical Engineering",description:"Theoretical database and quiz engine for electrical machines, grid stability, and electrical formulas.",tags:["#electrical","#machines","#eee"]},{title:"NPTEL Electrical Machines Playlist",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_y9V3Q41-Yv_m2L3k5Tf3t",category:"core",department:"EEE",subject:"Electrical Machines",description:"Academic lecture series explaining transformers, DC motors, and AC induction dynamics.",tags:["#machines","#acmotors","#eee"]},{title:"NPTEL Power Systems Engineering Lectures",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Qj-7-Sbe7z4y0v6qFzQ2l",category:"core",department:"EEE",subject:"Power Systems",description:"Advanced grid design stability, transmission equations, and load protection systems.",tags:["#powersystems","#grid","#eee"]},{title:"Control Systems Crash Course",url:"https://www.youtube.com/playlist?list=PLgwJf8NHJnNFgJ1uR8h986x3yQfI0_cZ6",category:"core",department:"EEE",subject:"Control Systems",description:"GATE and core interview questions solved in control engineering, transfer functions, and root locus.",tags:["#controlsystems","#gate","#circuits"]},{title:"Electrical Technology Core Prep Library",url:"https://www.electricaltechnology.org/",category:"core",department:"EEE",subject:"Basic Electrical",description:"Comprehensive formulas, calculator lists, and electrical design cheat sheets.",tags:["#formulas","#eee","#calculators"]},{title:"GeeksforGeeks Electrical Engineering Foundational Questions",url:"https://www.geeksforgeeks.org/electrical-engineering-interview-questions/",category:"interview",department:"EEE",subject:"EEE Foundations",description:"Foundational interview questions for EEE students covering AC/DC motors, grid distribution, and generators.",tags:["#eeequestions","#grid","#motors"]},{title:"Lesics 3D Concepts - Thermal Design",url:"https://www.youtube.com/c/Lesics",category:"core",department:"ME",subject:"Thermodynamics & Design",description:"Clear 3D animations visualising mechanical assemblies, engine pistons, and thermodynamics.",tags:["#mechanics","#thermo","#engines"]},{title:"Autodesk CAD/CAM Learning Academy",url:"https://academy.autodesk.com/",category:"core",department:"ME",subject:"CAD/CAM",description:"Professional visual tutorials covering computer-aided design, manufacturing modeling, and machining.",tags:["#cad","#cam","#modeling","#me"]},{title:"GrabCAD Community Tutorial Portal",url:"https://grabcad.com/tutorials",category:"core",department:"ME",subject:"CAD Modeling & FEA",description:"Huge interactive portal for CAD modeling practice, Finite Element Analysis (FEA), and SolidWorks tips.",tags:["#cad","#solidworks","#fea"]},{title:"NPTEL Strength of Materials Course",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_Jb_5lB_WlXGZ2uM1jU5N3",category:"core",department:"ME",subject:"Strength of Materials",description:"Advanced mechanics equations, stress-strain calculations, and beam loading analysis.",tags:["#materials","#stress","#mechanics"]},{title:"IndiaBIX Core Mechanical MCQs",url:"https://www.indiabix.com/mechanical-engineering/questions-and-answers/",category:"core",department:"ME",subject:"Mechanical MCQ Prep",description:"Placement mock assessment database for core mechanical engineering placement papers.",tags:["#indiabix","#mcqs","#mechanical"]},{title:"Sanfoundry Strength of Materials & Mechanical Foundational Questions",url:"https://www.sanfoundry.com/strength-materials-questions-answers/",category:"interview",department:"ME",subject:"Mechanical Foundations",description:"Detailed foundational Q&As in material strength, thermodynamics, fluid dynamics, and CAD modeling.",tags:["#mequestions","#thermo","#solidworks"]},{title:"Civil Engineering Academy Portal",url:"https://civilengineeringacademy.com/",category:"core",department:"CIVIL",subject:"Structural Design",description:"Study resources, mock tests, and article guides for structural civil engineering and concretes.",tags:["#structural","#concrete","#civil"]},{title:"GATE Academy Civil Lectures",url:"https://www.youtube.com/playlist?list=PL-k6G5rLqD7P-Tpx7aI0tPj_jC_J7wL9D",category:"core",department:"CIVIL",subject:"Surveying & Materials",description:"Curated video playlist focusing on civil construction materials, soils, and surveying formulas.",tags:["#surveying","#civil","#materials"]},{title:"NPTEL Structural Analysis Playlist",url:"https://www.youtube.com/playlist?list=PL43E087796791E479",category:"core",department:"CIVIL",subject:"Structural Analysis",description:"Detailed academic video series covering frame vectors, shear distributions, and deflection calculations.",tags:["#structures","#civil","#mechanics"]},{title:"GATE Academy Strength of Materials (Civil)",url:"https://www.youtube.com/playlist?list=PL-k6G5rLqD7O116gT_hA6j-U8J9A4a0v6",category:"core",department:"CIVIL",subject:"Structural Analysis",description:"Top videos solving structural concrete loading, bending moments, and sheer force diagrams.",tags:["#structural","#stress","#concrete"]},{title:"GeeksforGeeks Civil Engineering Foundational Questions",url:"https://www.geeksforgeeks.org/civil-engineering-interview-questions/",category:"interview",department:"CIVIL",subject:"Civil Foundations",description:"Comprehensive interview questions covering concrete grades, soil bearing, beam design, and hydrology.",tags:["#civilquestions","#structural","#concrete"]},{title:"MIT OpenCourseWare - Aerodynamics",url:"https://ocw.mit.edu/courses/aeronautics-and-astronautics/",category:"core",department:"AERO",subject:"Aerodynamics & Propulsion",description:"Direct access to MIT lecture sheets covering flight mechanics, aerospace structures, and rocket engineering.",tags:["#aerodynamics","#mit","#rockets"]},{title:"NASA Glenn Research Center - Aerodynamics Portal",url:"https://www.grc.nasa.gov/www/k-12/airplane/index.html",category:"core",department:"AERO",subject:"Aerospace Basics",description:"Official learning portal explaining engine thrust, lift, drag, and gas turbine mechanics.",tags:["#nasa","#lift","#drag","#propulsion"]},{title:"Flight Mechanics & Aircraft Dynamics (NPTEL)",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_S5p3q_SNDsV1e0zXWwz1",category:"core",department:"AERO",subject:"Flight Mechanics",description:"Advanced academic aerospace lectures focusing on stability, drag coefficients, and control vectors.",tags:["#flight","#stability","#nptel"]},{title:"Propulsion & Rocket Science Playlist",url:"https://www.youtube.com/playlist?list=PLyqSpQzTE6M_xS5p3q_SNDsV1e0zXWwz1",category:"core",department:"AERO",subject:"Propulsion",description:"Jet engine operations, nozzle designs, combustion physics, and aerospace propulsion lectures.",tags:["#propulsion","#rockets","#aerospace"]},{title:"Sanfoundry Aerodynamics & Flight Mechanics Foundational Questions",url:"https://www.sanfoundry.com/aerodynamics-questions-answers/",category:"interview",department:"AERO",subject:"Aerospace Foundations",description:"Top Q&As covering lift, drag, aerodynamics coefficients, gas dynamics, and propulsion configurations.",tags:["#aeroquestions","#lift","#propulsion"]},{title:"NIH Biomedical Engineering Science Portal",url:"https://www.nibib.nih.gov/science-education/science-topics",category:"core",department:"BME",subject:"Biomedical Instrumentation",description:"Official science topics covering medical imaging physics (MRI, CT, ultrasound) and prosthetic bio-design.",tags:["#imaging","#nih","#instrumentation"]},{title:"Introduction to Biomedical Engineering (Yale OCW)",url:"https://oyc.yale.edu/biomedical-engineering/beng-100",category:"core",department:"BME",subject:"Bio-design & Devices",description:"Yale open course materials covering artificial organs, cardiac pacing, and biomechanics formulas.",tags:["#yale","#biomechanics","#organs"]},{title:"Biomedical Signal Processing Videos",url:"https://www.youtube.com/playlist?list=PLTfCJuq2YtB0j3Hh9QZ8Wn3yU_eK_gYn3",category:"core",department:"BME",subject:"Signal Processing",description:"Biosignals details covering ECG filtering, EEG wave analysis, and digital biometric signal filters.",tags:["#signals","#ecg","#biometrics"]},{title:"NIH Genomics & Genome Assembly Program",url:"https://www.genome.gov/about-genomics/educational-resources",category:"core",department:"BME",subject:"Genomics",description:"Foundational education on DNA base sequencing models, genomic databases, and bioinformatics tools.",tags:["#genomics","#dna","#nih"]},{title:"Sanfoundry Biomedical Instrumentation Foundational Questions",url:"https://www.sanfoundry.com/biomedical-instrumentation-questions-answers/",category:"interview",department:"BME",subject:"Biomedical Foundations",description:"Foundational interview Q&As covering physiological sensors, clinical imaging machines, and biological transducers.",tags:["#bmequestions","#sensors","#imaging"]},{title:"BiotechTimes - Entrance & Placements",url:"https://biotechtimes.org/",category:"core",department:"BT",subject:"Biochemistry & Genetics",description:"Career guides, biotechnology study notes, molecular biology MCQs, and industry news feeds.",tags:["#biotech","#genetics","#molecular"]},{title:"Shomu's Biology (Biotech & Life Sciences)",url:"https://www.youtube.com/c/ShomusBiologyOfficial",category:"core",department:"BT",subject:"Biotechnology & Bioinformatics",description:"The premier YouTube channel explaining biochemistry, cell genetics, DNA sequencing, and bioprocess engineering.",tags:["#biology","#biochem","#youtube"]},{title:"NPTEL Pharmaceutical Biotechnology Course",url:"https://archive.nptel.ac.in/courses/102/105/102105058/",category:"core",department:"BT",subject:"Pharmaceutical Biotech",description:"Foundational lectures on immunotoxins, biopharmaceuticals, drug development cycles, and vaccine structures.",tags:["#pharmaceutical","#biotech","#drugs","#nptel"]},{title:"NCBI Bookshelf Curation Portal",url:"https://www.ncbi.nlm.nih.gov/books",category:"core",department:"BT",subject:"Genomics & Bio-textbooks",description:"Access to free medical and biotech textbooks covering molecular biology, genetics, and bioinformatics.",tags:["#textbooks","#ncbi","#molecular"]},{title:"Rosalind Bioinformatics Coding Portal",url:"https://rosalind.info/problems/locations/",category:"coding",department:"BT",subject:"Bioinformatics Coding",description:"Rosalind problem solving hub matching coding exercises with DNA/genomics sequencing algorithms.",tags:["#bioinformatics","#rosalind","#coding"]},{title:"Sanfoundry Molecular Biology & Biotechnology Foundational Questions",url:"https://www.sanfoundry.com/biotechnology-questions-answers/",category:"interview",department:"BT",subject:"Biotech Foundations",description:"Technical placement questions covering molecular replication, protein design, cell structures, and fermentation chemistry.",tags:["#btquestions","#dna","#fermentation"]}];function H4(t){try{const e=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/,n=t.match(e);if(n&&n[2].length===11)return`https://img.youtube.com/vi/${n[2]}/mqdefault.jpg`}catch{}return"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=400&q=80"}function G4(){const{user:t,profile:e}=bn(),[n,r]=M.useState([]),[i,s]=M.useState("CSE"),[o,c]=M.useState(""),[u,d]=M.useState("resources"),[f,g]=M.useState({});M.useEffect(()=>{e!=null&&e.branch&&s(e.branch)},[e]),M.useEffect(()=>{const R=ko(bt,"resources"),w=Np(R,async y=>{const I=[];y.forEach(T=>{I.push({id:T.id,...T.data()})});const k=I.some(T=>T.subject==="Embedded Systems");if(I.length===0||!k){console.log("Firestore resources empty or outdated. Upgrading database...");try{const T=await fj(ko(bt,"resources"));for(const A of T.docs)await pj(jn(bt,"resources",A.id));for(const A of q4)await zb(ko(bt,"resources"),{...A,submittedBy:"System Curator",status:"approved",clicks:0,createdAt:Qt()});console.log("Database update & seeding completed.")}catch(T){console.error("Database migration failed:",T)}}else r(I)});return()=>w()},[]);async function m(R,w){try{await iu(jn(bt,"resources",R),{clicks:lj(1)})}catch{}window.open(w,"_blank","noopener,noreferrer")}const S=n.filter(R=>{var I,k,T,A;const w=!o||((I=R.title)==null?void 0:I.toLowerCase().includes(o.toLowerCase()))||((k=R.subject)==null?void 0:k.toLowerCase().includes(o.toLowerCase()))||((T=R.description)==null?void 0:T.toLowerCase().includes(o.toLowerCase()))||((A=R.tags)==null?void 0:A.some(_=>_.toLowerCase().includes(o.toLowerCase()))),y=R.department==="COMMON"||R.department===i;return w&&y}),C=S.filter(R=>R.category==="aptitude"),j=S.filter(R=>R.category==="coding"),O=S.filter(R=>R.category==="core"),E=S.filter(R=>R.category==="interview"),v=S.filter(R=>R.category==="company"),b=R=>{g(w=>({...w,[R]:!w[R]}))},P=U4[i],L=$h[i]||{text:"var(--purple-primary)",bg:"var(--purple-soft)",border:"1px solid var(--card-border)"};return a.jsxs("div",{style:{maxWidth:1120,margin:"0 auto",paddingBottom:60},children:[a.jsxs("div",{style:{marginBottom:28},children:[a.jsx("h1",{style:{fontFamily:"Urbanist, sans-serif",fontWeight:900,fontSize:28,color:"var(--text-primary)",marginBottom:4},children:"📚 Placement Prep Hub"}),a.jsx("p",{style:{fontSize:13.5,color:"var(--text-secondary)"},children:"Curated learning roadmaps, core subject preparation, and placement materials tailored for engineering students."})]}),a.jsx("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:16,padding:18,marginBottom:24},children:a.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",background:"var(--main-bg)",border:"1px solid var(--card-border)",borderRadius:10,padding:"10px 14px"},children:[a.jsx(rw,{size:20,color:"var(--text-secondary)"}),a.jsx("input",{type:"text",placeholder:"Search keywords, coding sheets, mock papers, playlists...",value:o,onChange:R=>c(R.target.value),style:{width:"100%",border:"none",background:"transparent",outline:"none",color:"var(--text-primary)",fontSize:14,fontFamily:"inherit"}}),o&&a.jsx("button",{onClick:()=>c(""),style:{border:"none",background:"transparent",color:"var(--text-muted)",cursor:"pointer"},children:a.jsx(sw,{size:18})})]})}),a.jsxs("div",{style:{marginBottom:24},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[a.jsx("h2",{style:{fontSize:14,fontWeight:900,color:"var(--text-primary)",textTransform:"uppercase",letterSpacing:.5},children:"Select Your Branch"}),a.jsxs("span",{style:{fontSize:12.5,fontWeight:700,color:L.text,background:L.bg,border:L.border,padding:"3px 10px",borderRadius:6},children:["Found ",S.length," verified resource",S.length!==1?"s":""]})]}),a.jsx("div",{style:{display:"flex",gap:10,overflowX:"auto",paddingBottom:10,scrollbarWidth:"none",msOverflowStyle:"none"},children:W4.map(R=>{const w=i===R.key,y=$h[R.key]||{text:"var(--purple-primary)",bg:"var(--purple-soft)"};return a.jsxs("button",{onClick:()=>s(R.key),style:{display:"flex",alignItems:"center",gap:8,padding:"10px 18px",borderRadius:14,border:w?`2px solid ${y.text}`:"1.5px solid var(--card-border)",background:w?y.bg:"var(--card-bg)",color:w?y.text:"var(--text-secondary)",fontWeight:700,fontSize:13.5,cursor:"pointer",whiteSpace:"nowrap",transition:"all 0.2s ease",boxShadow:w?"0 4px 14px rgba(0,0,0,0.05)":"none"},children:[a.jsx("span",{style:{fontSize:16},children:R.icon}),R.name]},R.key)})})]}),a.jsxs("div",{style:{display:"flex",gap:12,borderBottom:"2px solid var(--card-border)",marginBottom:28},children:[a.jsxs("button",{onClick:()=>d("resources"),style:{padding:"12px 20px",fontSize:14.5,fontWeight:800,color:u==="resources"?L.text:"var(--text-secondary)",borderBottom:u==="resources"?`3px solid ${L.text}`:"3px solid transparent",marginBottom:-2,transition:"all 0.2s ease",cursor:"pointer",display:"flex",alignItems:"center",gap:8},children:[a.jsx(zf,{size:18})," Curated Playlists & Links"]}),a.jsxs("button",{onClick:()=>d("syllabus"),style:{padding:"12px 20px",fontSize:14.5,fontWeight:800,color:u==="syllabus"?L.text:"var(--text-secondary)",borderBottom:u==="syllabus"?`3px solid ${L.text}`:"3px solid transparent",marginBottom:-2,transition:"all 0.2s ease",cursor:"pointer",display:"flex",alignItems:"center",gap:8},children:[a.jsx(tw,{size:18})," Structured Prep & Q&A Syllabus"]})]}),u==="resources"?a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:40},children:[a.jsxs("div",{children:[a.jsxs("h2",{style:{fontSize:17,fontWeight:900,color:"var(--text-primary)",display:"flex",alignItems:"center",gap:8,paddingBottom:10,borderBottom:"1.5px solid var(--card-border)",marginBottom:20},children:[a.jsx(hs,{size:22,color:L.text})," Aptitude & Reasoning Prep"]}),C.length===0?a.jsx("div",{style:{color:"var(--text-muted)",fontSize:13.5,background:"var(--card-bg)",padding:20,borderRadius:14},children:"No aptitude preparation resources matching active search query."}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:C.map(R=>a.jsx(to,{res:R,onClick:()=>m(R.id,R.url)},R.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{style:{fontSize:17,fontWeight:900,color:"var(--text-primary)",display:"flex",alignItems:"center",gap:8,paddingBottom:10,borderBottom:"1.5px solid var(--card-border)",marginBottom:20},children:[a.jsx(tc,{size:22,color:L.text})," Coding & Algorithmic Problem Solving"]}),j.length===0?a.jsx("div",{style:{color:"var(--text-muted)",fontSize:13.5,background:"var(--card-bg)",padding:20,borderRadius:14},children:"No programming sheets or coding platforms matching active search query."}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:j.map(R=>a.jsx(to,{res:R,onClick:()=>m(R.id,R.url)},R.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{style:{fontSize:17,fontWeight:900,color:"var(--text-primary)",display:"flex",alignItems:"center",gap:8,paddingBottom:10,borderBottom:"1.5px solid var(--card-border)",marginBottom:20},children:[a.jsx(nc,{size:22,color:L.text})," Core ",i," Subjects Preparation"]}),O.length===0?a.jsx("div",{style:{color:"var(--text-muted)",fontSize:13.5,background:"var(--card-bg)",padding:20,borderRadius:14},children:"No core subjects reference guides or playlists available yet."}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:O.map(R=>a.jsx(to,{res:R,onClick:()=>m(R.id,R.url)},R.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{style:{fontSize:17,fontWeight:900,color:"var(--text-primary)",display:"flex",alignItems:"center",gap:8,paddingBottom:10,borderBottom:"1.5px solid var(--card-border)",marginBottom:20},children:[a.jsx(Xg,{size:22,color:L.text})," Foundational Interview Q&A Guides"]}),E.length===0?a.jsx("div",{style:{color:"var(--text-muted)",fontSize:13.5,background:"var(--card-bg)",padding:20,borderRadius:14},children:"No foundational interview questions available yet for this branch."}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:E.map(R=>a.jsx(to,{res:R,onClick:()=>m(R.id,R.url)},R.id))})]}),a.jsxs("div",{children:[a.jsxs("h2",{style:{fontSize:17,fontWeight:900,color:"var(--text-primary)",display:"flex",alignItems:"center",gap:8,paddingBottom:10,borderBottom:"1.5px solid var(--card-border)",marginBottom:20},children:[a.jsx(v2,{size:22,color:L.text})," Recruit Assessment & Mock Papers"]}),v.length===0?a.jsx("div",{style:{color:"var(--text-muted)",fontSize:13.5,background:"var(--card-bg)",padding:20,borderRadius:14},children:"No mock assessments or assessment sheets found."}):a.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(320px, 1fr))",gap:20},children:v.map(R=>a.jsx(to,{res:R,onClick:()=>m(R.id,R.url)},R.id))})]})]}):a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:36},children:[a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(320px, 1fr))",gap:24},children:[(P==null?void 0:P.aptitude)&&a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:18,padding:22,boxShadow:"var(--shadow-card)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[a.jsx("div",{style:{background:"var(--purple-soft)",color:"var(--purple-primary)",width:38,height:38,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(hs,{size:20})}),a.jsx("h3",{style:{fontSize:16,fontWeight:900,color:"var(--text-primary)"},children:"Aptitude & Reasoning Prep"})]}),a.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5,marginBottom:16},children:P.aptitude.description}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Syllabus Topics"}),a.jsx("ul",{style:{paddingLeft:18,fontSize:13,color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:6},children:P.aptitude.topics.map((R,w)=>a.jsx("li",{style:{lineHeight:1.4},children:R},w))})]})]}),P.aptitude.playlists&&P.aptitude.playlists.length>0&&a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Top Playlists & Portals"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:P.aptitude.playlists.map((R,w)=>a.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:"var(--main-bg)",border:"1px solid var(--card-border)",borderRadius:10,fontSize:12.5,fontWeight:700,color:L.text,textDecoration:"none",transition:"all 0.2s"},children:[a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"85%"},children:R.title}),a.jsx(xl,{size:13})]},w))})]})]}),(P==null?void 0:P.coding)&&a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:18,padding:22,boxShadow:"var(--shadow-card)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[a.jsx("div",{style:{background:"rgba(2,132,199,0.08)",color:"#0284c7",width:38,height:38,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(tc,{size:20})}),a.jsx("h3",{style:{fontSize:16,fontWeight:900,color:"var(--text-primary)"},children:"Coding & Algorithmic Prep"})]}),a.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5,marginBottom:16},children:P.coding.description}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Syllabus Topics"}),a.jsx("ul",{style:{paddingLeft:18,fontSize:13,color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:6},children:P.coding.topics.map((R,w)=>a.jsx("li",{style:{lineHeight:1.4},children:R},w))})]})]}),P.coding.playlists&&P.coding.playlists.length>0&&a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Top Playlists & Sheets"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:P.coding.playlists.map((R,w)=>a.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:"var(--main-bg)",border:"1px solid var(--card-border)",borderRadius:10,fontSize:12.5,fontWeight:700,color:L.text,textDecoration:"none",transition:"all 0.2s"},children:[a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"85%"},children:R.title}),a.jsx(xl,{size:13})]},w))})]})]}),(P==null?void 0:P.core)&&a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:18,padding:22,boxShadow:"var(--shadow-card)",display:"flex",flexDirection:"column",justifyContent:"space-between"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:16},children:[a.jsx("div",{style:{background:"rgba(234,88,12,0.08)",color:"#ea580c",width:38,height:38,borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center"},children:a.jsx(nc,{size:20})}),a.jsx("h3",{style:{fontSize:16,fontWeight:900,color:"var(--text-primary)"},children:"Core Subjects Prep"})]}),a.jsx("p",{style:{fontSize:13,color:"var(--text-secondary)",lineHeight:1.5,marginBottom:16},children:P.core.description}),a.jsxs("div",{style:{marginBottom:20},children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Syllabus Topics"}),a.jsx("ul",{style:{paddingLeft:18,fontSize:13,color:"var(--text-secondary)",display:"flex",flexDirection:"column",gap:6},children:P.core.topics.map((R,w)=>a.jsx("li",{style:{lineHeight:1.4},children:R},w))})]})]}),P.core.playlists&&P.core.playlists.length>0&&a.jsxs("div",{children:[a.jsx("h4",{style:{fontSize:11.5,fontWeight:800,color:"var(--text-muted)",textTransform:"uppercase",marginBottom:8,letterSpacing:.5},children:"Top Playlists & Portals"}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:8},children:P.core.playlists.map((R,w)=>a.jsxs("a",{href:R.url,target:"_blank",rel:"noopener noreferrer",style:{display:"flex",alignItems:"center",justifyContent:"space-between",padding:"10px 14px",background:"var(--main-bg)",border:"1px solid var(--card-border)",borderRadius:10,fontSize:12.5,fontWeight:700,color:L.text,textDecoration:"none",transition:"all 0.2s"},children:[a.jsx("span",{style:{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",maxWidth:"85%"},children:R.title}),a.jsx(xl,{size:13})]},w))})]})]})]}),a.jsxs("div",{style:{background:"var(--card-bg)",border:"1.5px solid var(--card-border)",borderRadius:20,padding:24,boxShadow:"var(--shadow-card)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:24,paddingBottom:12,borderBottom:"1.5px solid var(--card-border)"},children:[a.jsx(Xg,{size:24,color:L.text}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:18,fontWeight:900,color:"var(--text-primary)"},children:"Foundational Interview Q&A Guides"}),a.jsx("p",{style:{fontSize:12.5,color:"var(--text-secondary)"},children:"Click on questions to expand and study the model answers tailored to your department mappings."})]})]}),(P==null?void 0:P.interview)&&a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:28},children:Object.keys(P.interview).map(R=>{const w=P.interview[R]||[],I={conceptual:{title:"Conceptual — Theory-based Understanding",icon:"💡"},problemSolving:{title:"Problem-Solving — Analytical & Numerical Challenges",icon:"⚡"},applied:{title:"Applied — Real-world & Project Applications",icon:"🛠️"},hrStyle:{title:"HR-style — Behavioral & Teamwork Questions",icon:"👥"}}[R]||{title:R,icon:"❓"};return a.jsxs("div",{children:[a.jsxs("h4",{style:{fontSize:14,fontWeight:900,color:L.text,display:"flex",alignItems:"center",gap:8,marginBottom:12},children:[a.jsx("span",{style:{fontSize:16},children:I.icon})," ",I.title]}),a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:10},children:w.map((k,T)=>{const A=`${i}-${R}-${T}`,_=!!f[A];return a.jsxs("div",{style:{border:"1.5px solid var(--card-border)",borderRadius:12,overflow:"hidden",background:_?"var(--main-bg)":"transparent",transition:"all 0.2s ease"},children:[a.jsxs("button",{onClick:()=>b(A),style:{width:"100%",padding:"14px 18px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12,textAlign:"left",fontWeight:800,fontSize:13.5,color:"var(--text-primary)",background:"transparent",cursor:"pointer"},children:[a.jsx("span",{children:k.question}),_?a.jsx(_2,{size:18,color:L.text}):a.jsx(b2,{size:18,color:"var(--text-secondary)"})]}),_&&a.jsx("div",{style:{padding:"16px 20px",borderTop:"1px solid var(--card-border)",fontSize:13.5,color:"var(--text-secondary)",lineHeight:1.6,background:"var(--card-bg)"},children:k.answer.includes("```sql")||k.answer.includes("```c")||k.answer.includes("```javascript")?a.jsx("div",{style:{whiteSpace:"pre-wrap"},children:k.answer.split("```").map((te,de)=>{if(de%2===1){const ve=te.replace(/^(sql|c|javascript|python)/i,"").trim();return a.jsx("pre",{style:{background:"var(--main-bg)",border:"1px solid var(--card-border)",padding:"12px 16px",borderRadius:8,fontFamily:"Fira Code, monospace",fontSize:12.5,color:"var(--text-primary)",overflowX:"auto",margin:"12px 0"},children:a.jsx("code",{children:ve})},de)}return a.jsx("span",{children:te},de)})}):a.jsx("div",{style:{whiteSpace:"pre-wrap"},children:k.answer})})]},T)})})]},R)})})]})]})]})}function to({res:t,onClick:e}){var c,u;const n=((c=t.url)==null?void 0:c.includes("youtube.com"))||((u=t.url)==null?void 0:u.includes("youtu.be")),r=H4(t.url),i=$h[t.department]||{text:"var(--purple-primary)",bg:"var(--purple-soft)",border:"1px solid var(--card-border)"},[s,o]=M.useState(!1);return a.jsxs("div",{onClick:e,onMouseEnter:()=>o(!0),onMouseLeave:()=>o(!1),style:{background:"var(--card-bg)",border:s?`1.5px solid ${i.text}`:"1.5px solid var(--card-border)",borderRadius:18,overflow:"hidden",cursor:"pointer",display:"flex",flexDirection:"column",justifyContent:"space-between",transform:s?"translateY(-4px)":"translateY(0)",boxShadow:s?"0 12px 28px rgba(0,0,0,0.08)":"var(--shadow-card)",transition:"all 0.25s cubic-bezier(0.4, 0, 0.2, 1)"},children:[a.jsxs("div",{children:[n&&a.jsxs("div",{style:{width:"100%",height:160,position:"relative",overflow:"hidden"},children:[a.jsx("img",{src:r,alt:t.title,style:{width:"100%",height:"100%",objectFit:"cover",transform:s?"scale(1.05)":"scale(1)",transition:"transform 0.4s ease"}}),a.jsx("div",{style:{position:"absolute",inset:0,background:s?"rgba(0,0,0,0.15)":"rgba(0,0,0,0.05)",display:"flex",alignItems:"center",justifyContent:"center",transition:"background 0.25s"},children:a.jsx("div",{style:{width:46,height:46,borderRadius:999,background:"rgba(239,68,68,0.95)",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",fontSize:14,boxShadow:"0 4px 12px rgba(0,0,0,0.3)",transform:s?"scale(1.1)":"scale(1)",transition:"transform 0.25s"},children:"▶"})})]}),a.jsxs("div",{style:{padding:20},children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:12},children:[a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:5,fontSize:10.5,fontWeight:800,color:"#166534",background:"#dcfce7",padding:"3px 8px",borderRadius:6},children:[a.jsx(m2,{size:12})," Verified Material"]}),t.department!=="COMMON"&&a.jsx("span",{style:{fontSize:10.5,fontWeight:800,color:i.text,background:i.bg,border:i.border,padding:"3px 9px",borderRadius:6,letterSpacing:.5},children:t.department})]}),a.jsx("h3",{style:{fontSize:14.5,fontWeight:800,color:"var(--text-primary)",marginBottom:5,lineHeight:1.35},children:t.title}),a.jsxs("div",{style:{fontSize:12,fontWeight:700,color:"var(--text-muted)",marginBottom:10,display:"flex",alignItems:"center",gap:6},children:[a.jsx("span",{children:"📚"}),a.jsx("span",{style:{fontWeight:800,color:"var(--text-secondary)"},children:t.subject})]}),t.description&&a.jsx("p",{style:{fontSize:12.5,color:"var(--text-secondary)",lineHeight:1.5,margin:"6px 0 12px"},children:t.description})]})]}),a.jsxs("div",{style:{padding:"0 20px 20px"},children:[t.tags&&t.tags.length>0&&a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6,marginBottom:14},children:t.tags.map(d=>a.jsx("span",{style:{fontSize:10.5,fontWeight:700,color:"var(--text-secondary)",background:"var(--main-bg)",border:"1px solid var(--card-border)",padding:"3px 8px",borderRadius:6},children:d},d))}),a.jsx("div",{style:{display:"flex",justifyContent:"flex-end",borderTop:"1px solid var(--card-border)",paddingTop:12},children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:4,fontSize:12.5,fontWeight:700,color:i.text||"var(--purple-primary)"},children:[n?"Watch Playlist":"Open Link"," ",a.jsx(xl,{size:13})]})})]})]})}const Fv={dashboard:{title:"Dashboard",icon:"🏠"},resources:{title:"Placement Hub",icon:"📚",desc:"Department-specific placement prep, core engineering subject roadmaps, aptitude and technical coding."},aptitude:{title:"Aptitude",icon:"🧠"},coding:{title:"Coding Practice",icon:"💻",desc:"Built-in online code editor with DSA problems and Judge0-powered execution."},interview:{title:"AI Interview",icon:"🤖"},resume:{title:"Resume & ATS",icon:"📄",desc:"Upload your resume to get an ATS score, keyword analysis, and formatting suggestions."},analytics:{title:"Analytics",icon:"📊",desc:"Placement trends, package data, recruiter stats, and your performance analytics."},profile:{title:"Profile",icon:"👤",desc:"Manage your student profile, achievements, and placement preferences."},settings:{title:"Settings",icon:"⚙️",desc:"Manage your account, notifications, and platform preferences."}};function Q4(){const{user:t,loading:e}=bn(),[n,r]=M.useState("dashboard"),[i,s]=M.useState(!1),o=Fv[n]||Fv.dashboard;return e?a.jsxs("div",{className:"auth-loading",children:[a.jsx("div",{className:"auth-loader"}),a.jsx("p",{children:"Loading Placeonix..."})]}):t?a.jsxs("div",{className:"app-shell",children:[i&&a.jsx("div",{className:"sidebar-overlay",onClick:()=>s(!1)}),a.jsx(UN,{activePage:n,setActivePage:r,mobileOpen:i,onMobileClose:()=>s(!1)}),a.jsxs("div",{className:"main-area",children:[a.jsx(qN,{onMenuToggle:()=>s(!i)}),a.jsx("main",{className:"page-content",children:n==="dashboard"?a.jsx(e4,{}):n==="resources"?a.jsx(G4,{}):n==="aptitude"?a.jsx(d4,{}):n==="coding"?a.jsx(w4,{}):n==="resume"?a.jsx(M4,{}):n==="admin"?a.jsx(V4,{}):n==="interview"?a.jsx(l4,{}):n==="profile"?a.jsx(p4,{}):n==="settings"?a.jsx($4,{}):a.jsx(n4,{title:o.title,icon:o.icon,description:o.desc})}),a.jsx(HN,{})]})]}):a.jsx(h4,{})}wd.createRoot(document.getElementById("root")).render(a.jsx(Gh.StrictMode,{children:a.jsx(FN,{children:a.jsx(Q4,{})})}));
