var zg=Object.defineProperty;var Vg=(s,e,n)=>e in s?zg(s,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):s[e]=n;var Wa=(s,e,n)=>Vg(s,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function p0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ju={exports:{}},Xa={},Hu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rm;function jg(){if(rm)return gt;rm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),S=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,C={};function _(k,J,Ie){this.props=k,this.context=J,this.refs=C,this.updater=Ie||M}_.prototype.isReactComponent={},_.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},_.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=_.prototype;function R(k,J,Ie){this.props=k,this.context=J,this.refs=C,this.updater=Ie||M}var L=R.prototype=new v;L.constructor=R,E(L,_.prototype),L.isPureReactComponent=!0;var T=Array.isArray,D=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(k,J,Ie){var Ge,ze={},le=null,ge=null;if(J!=null)for(Ge in J.ref!==void 0&&(ge=J.ref),J.key!==void 0&&(le=""+J.key),J)D.call(J,Ge)&&!F.hasOwnProperty(Ge)&&(ze[Ge]=J[Ge]);var pe=arguments.length-2;if(pe===1)ze.children=Ie;else if(1<pe){for(var Fe=Array(pe),Ze=0;Ze<pe;Ze++)Fe[Ze]=arguments[Ze+2];ze.children=Fe}if(k&&k.defaultProps)for(Ge in pe=k.defaultProps,pe)ze[Ge]===void 0&&(ze[Ge]=pe[Ge]);return{$$typeof:s,type:k,key:le,ref:ge,props:ze,_owner:P.current}}function I(k,J){return{$$typeof:s,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function B(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function z(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Ie){return J[Ie]})}var Y=/\/+/g;function Q(k,J){return typeof k=="object"&&k!==null&&k.key!=null?z(""+k.key):J.toString(36)}function ae(k,J,Ie,Ge,ze){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var ge=!1;if(k===null)ge=!0;else switch(le){case"string":case"number":ge=!0;break;case"object":switch(k.$$typeof){case s:case e:ge=!0}}if(ge)return ge=k,ze=ze(ge),k=Ge===""?"."+Q(ge,0):Ge,T(ze)?(Ie="",k!=null&&(Ie=k.replace(Y,"$&/")+"/"),ae(ze,J,Ie,"",function(Ze){return Ze})):ze!=null&&(B(ze)&&(ze=I(ze,Ie+(!ze.key||ge&&ge.key===ze.key?"":(""+ze.key).replace(Y,"$&/")+"/")+k)),J.push(ze)),1;if(ge=0,Ge=Ge===""?".":Ge+":",T(k))for(var pe=0;pe<k.length;pe++){le=k[pe];var Fe=Ge+Q(le,pe);ge+=ae(le,J,Ie,Fe,ze)}else if(Fe=g(k),typeof Fe=="function")for(k=Fe.call(k),pe=0;!(le=k.next()).done;)le=le.value,Fe=Ge+Q(le,pe++),ge+=ae(le,J,Ie,Fe,ze);else if(le==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return ge}function G(k,J,Ie){if(k==null)return k;var Ge=[],ze=0;return ae(k,Ge,"","",function(le){return J.call(Ie,le,ze++)}),Ge}function ce(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(Ie){(k._status===0||k._status===-1)&&(k._status=1,k._result=Ie)},function(Ie){(k._status===0||k._status===-1)&&(k._status=2,k._result=Ie)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var $={current:null},X={transition:null},re={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:X,ReactCurrentOwner:P};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:G,forEach:function(k,J,Ie){G(k,function(){J.apply(this,arguments)},Ie)},count:function(k){var J=0;return G(k,function(){J++}),J},toArray:function(k){return G(k,function(J){return J})||[]},only:function(k){if(!B(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},gt.Component=_,gt.Fragment=n,gt.Profiler=o,gt.PureComponent=R,gt.StrictMode=r,gt.Suspense=p,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=re,gt.act=oe,gt.cloneElement=function(k,J,Ie){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Ge=E({},k.props),ze=k.key,le=k.ref,ge=k._owner;if(J!=null){if(J.ref!==void 0&&(le=J.ref,ge=P.current),J.key!==void 0&&(ze=""+J.key),k.type&&k.type.defaultProps)var pe=k.type.defaultProps;for(Fe in J)D.call(J,Fe)&&!F.hasOwnProperty(Fe)&&(Ge[Fe]=J[Fe]===void 0&&pe!==void 0?pe[Fe]:J[Fe])}var Fe=arguments.length-2;if(Fe===1)Ge.children=Ie;else if(1<Fe){pe=Array(Fe);for(var Ze=0;Ze<Fe;Ze++)pe[Ze]=arguments[Ze+2];Ge.children=pe}return{$$typeof:s,type:k.type,key:ze,ref:le,props:Ge,_owner:ge}},gt.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},gt.createElement=w,gt.createFactory=function(k){var J=w.bind(null,k);return J.type=k,J},gt.createRef=function(){return{current:null}},gt.forwardRef=function(k){return{$$typeof:f,render:k}},gt.isValidElement=B,gt.lazy=function(k){return{$$typeof:y,_payload:{_status:-1,_result:k},_init:ce}},gt.memo=function(k,J){return{$$typeof:x,type:k,compare:J===void 0?null:J}},gt.startTransition=function(k){var J=X.transition;X.transition={};try{k()}finally{X.transition=J}},gt.unstable_act=oe,gt.useCallback=function(k,J){return $.current.useCallback(k,J)},gt.useContext=function(k){return $.current.useContext(k)},gt.useDebugValue=function(){},gt.useDeferredValue=function(k){return $.current.useDeferredValue(k)},gt.useEffect=function(k,J){return $.current.useEffect(k,J)},gt.useId=function(){return $.current.useId()},gt.useImperativeHandle=function(k,J,Ie){return $.current.useImperativeHandle(k,J,Ie)},gt.useInsertionEffect=function(k,J){return $.current.useInsertionEffect(k,J)},gt.useLayoutEffect=function(k,J){return $.current.useLayoutEffect(k,J)},gt.useMemo=function(k,J){return $.current.useMemo(k,J)},gt.useReducer=function(k,J,Ie){return $.current.useReducer(k,J,Ie)},gt.useRef=function(k){return $.current.useRef(k)},gt.useState=function(k){return $.current.useState(k)},gt.useSyncExternalStore=function(k,J,Ie){return $.current.useSyncExternalStore(k,J,Ie)},gt.useTransition=function(){return $.current.useTransition()},gt.version="18.3.1",gt}var sm;function Mh(){return sm||(sm=1,Hu.exports=jg()),Hu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var am;function Hg(){if(am)return Xa;am=1;var s=Mh(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,x){var y,S={},g=null,M=null;x!==void 0&&(g=""+x),p.key!==void 0&&(g=""+p.key),p.ref!==void 0&&(M=p.ref);for(y in p)r.call(p,y)&&!c.hasOwnProperty(y)&&(S[y]=p[y]);if(f&&f.defaultProps)for(y in p=f.defaultProps,p)S[y]===void 0&&(S[y]=p[y]);return{$$typeof:e,type:f,key:g,ref:M,props:S,_owner:o.current}}return Xa.Fragment=n,Xa.jsx=d,Xa.jsxs=d,Xa}var om;function Gg(){return om||(om=1,ju.exports=Hg()),ju.exports}var l=Gg(),Le=Mh();const Wg=p0(Le);var fl={},Gu={exports:{}},Vn={},Wu={exports:{}},Xu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lm;function Xg(){return lm||(lm=1,(function(s){function e(X,re){var oe=X.length;X.push(re);e:for(;0<oe;){var k=oe-1>>>1,J=X[k];if(0<o(J,re))X[k]=re,X[oe]=J,oe=k;else break e}}function n(X){return X.length===0?null:X[0]}function r(X){if(X.length===0)return null;var re=X[0],oe=X.pop();if(oe!==re){X[0]=oe;e:for(var k=0,J=X.length,Ie=J>>>1;k<Ie;){var Ge=2*(k+1)-1,ze=X[Ge],le=Ge+1,ge=X[le];if(0>o(ze,oe))le<J&&0>o(ge,ze)?(X[k]=ge,X[le]=oe,k=le):(X[k]=ze,X[Ge]=oe,k=Ge);else if(le<J&&0>o(ge,oe))X[k]=ge,X[le]=oe,k=le;else break e}}return re}function o(X,re){var oe=X.sortIndex-re.sortIndex;return oe!==0?oe:X.id-re.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],x=[],y=1,S=null,g=3,M=!1,E=!1,C=!1,_=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,R=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(X){for(var re=n(x);re!==null;){if(re.callback===null)r(x);else if(re.startTime<=X)r(x),re.sortIndex=re.expirationTime,e(p,re);else break;re=n(x)}}function T(X){if(C=!1,L(X),!E)if(n(p)!==null)E=!0,ce(D);else{var re=n(x);re!==null&&$(T,re.startTime-X)}}function D(X,re){E=!1,C&&(C=!1,v(w),w=-1),M=!0;var oe=g;try{for(L(re),S=n(p);S!==null&&(!(S.expirationTime>re)||X&&!z());){var k=S.callback;if(typeof k=="function"){S.callback=null,g=S.priorityLevel;var J=k(S.expirationTime<=re);re=s.unstable_now(),typeof J=="function"?S.callback=J:S===n(p)&&r(p),L(re)}else r(p);S=n(p)}if(S!==null)var Ie=!0;else{var Ge=n(x);Ge!==null&&$(T,Ge.startTime-re),Ie=!1}return Ie}finally{S=null,g=oe,M=!1}}var P=!1,F=null,w=-1,I=5,B=-1;function z(){return!(s.unstable_now()-B<I)}function Y(){if(F!==null){var X=s.unstable_now();B=X;var re=!0;try{re=F(!0,X)}finally{re?Q():(P=!1,F=null)}}else P=!1}var Q;if(typeof R=="function")Q=function(){R(Y)};else if(typeof MessageChannel<"u"){var ae=new MessageChannel,G=ae.port2;ae.port1.onmessage=Y,Q=function(){G.postMessage(null)}}else Q=function(){_(Y,0)};function ce(X){F=X,P||(P=!0,Q())}function $(X,re){w=_(function(){X(s.unstable_now())},re)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(X){X.callback=null},s.unstable_continueExecution=function(){E||M||(E=!0,ce(D))},s.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<X?Math.floor(1e3/X):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return n(p)},s.unstable_next=function(X){switch(g){case 1:case 2:case 3:var re=3;break;default:re=g}var oe=g;g=re;try{return X()}finally{g=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(X,re){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var oe=g;g=X;try{return re()}finally{g=oe}},s.unstable_scheduleCallback=function(X,re,oe){var k=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?k+oe:k):oe=k,X){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=oe+J,X={id:y++,callback:re,priorityLevel:X,startTime:oe,expirationTime:J,sortIndex:-1},oe>k?(X.sortIndex=oe,e(x,X),n(p)===null&&X===n(x)&&(C?(v(w),w=-1):C=!0,$(T,oe-k))):(X.sortIndex=J,e(p,X),E||M||(E=!0,ce(D))),X},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(X){var re=g;return function(){var oe=g;g=re;try{return X.apply(this,arguments)}finally{g=oe}}}})(Xu)),Xu}var cm;function qg(){return cm||(cm=1,Wu.exports=Xg()),Wu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function Yg(){if(um)return Vn;um=1;var s=Mh(),e=qg();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function c(t,i){d(t,i),d(t+"Capture",i)}function d(t,i){for(o[t]=i,t=0;t<i.length;t++)r.add(i[t])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,x=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,y={},S={};function g(t){return p.call(S,t)?!0:p.call(y,t)?!1:x.test(t)?S[t]=!0:(y[t]=!0,!1)}function M(t,i,a,u){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function E(t,i,a,u){if(i===null||typeof i>"u"||M(t,i,a,u))return!0;if(u)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(t,i,a,u,h,m,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=m,this.removeEmptyString=A}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){_[t]=new C(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];_[i]=new C(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){_[t]=new C(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){_[t]=new C(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){_[t]=new C(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){_[t]=new C(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){_[t]=new C(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){_[t]=new C(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){_[t]=new C(t,5,!1,t.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function R(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(v,R);_[i]=new C(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(v,R);_[i]=new C(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(v,R);_[i]=new C(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!1,!1)}),_.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){_[t]=new C(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,u){var h=_.hasOwnProperty(i)?_[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,h,u)&&(a=null),u||h===null?g(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):h.mustUseProperty?t[h.propertyName]=a===null?h.type===3?!1:"":a:(i=h.attributeName,u=h.attributeNamespace,a===null?t.removeAttribute(i):(h=h.type,a=h===3||h===4&&a===!0?"":""+a,u?t.setAttributeNS(u,i,a):t.setAttribute(i,a))))}var T=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,D=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),B=Symbol.for("react.provider"),z=Symbol.for("react.context"),Y=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ae=Symbol.for("react.suspense_list"),G=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),$=Symbol.for("react.offscreen"),X=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=X&&t[X]||t["@@iterator"],typeof t=="function"?t:null)}var oe=Object.assign,k;function J(t){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+t}var Ie=!1;function Ge(t,i){if(!t||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var u=de}Reflect.construct(t,[],i)}else{try{i.call()}catch(de){u=de}t.call(i.prototype)}else{try{throw Error()}catch(de){u=de}t()}}catch(de){if(de&&u&&typeof de.stack=="string"){for(var h=de.stack.split(`
`),m=u.stack.split(`
`),A=h.length-1,O=m.length-1;1<=A&&0<=O&&h[A]!==m[O];)O--;for(;1<=A&&0<=O;A--,O--)if(h[A]!==m[O]){if(A!==1||O!==1)do if(A--,O--,0>O||h[A]!==m[O]){var V=`
`+h[A].replace(" at new "," at ");return t.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",t.displayName)),V}while(1<=A&&0<=O);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?J(t):""}function ze(t){switch(t.tag){case 5:return J(t.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return t=Ge(t.type,!1),t;case 11:return t=Ge(t.type.render,!1),t;case 1:return t=Ge(t.type,!0),t;default:return""}}function le(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case F:return"Fragment";case P:return"Portal";case I:return"Profiler";case w:return"StrictMode";case Q:return"Suspense";case ae:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case B:return(t._context.displayName||"Context")+".Provider";case Y:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case G:return i=t.displayName||null,i!==null?i:le(t.type)||"Memo";case ce:i=t._payload,t=t._init;try{return le(t(i))}catch{}}return null}function ge(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function pe(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fe(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ze(t){var i=Fe(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),u=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var h=a.get,m=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return h.call(this)},set:function(A){u=""+A,m.call(this,A)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function et(t){t._valueTracker||(t._valueTracker=Ze(t))}function kt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),u="";return t&&(u=Fe(t)?t.checked?"true":"false":t.value),t=u,t!==a?(i.setValue(t),!0):!1}function lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function St(t,i){var a=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mt(t,i){var a=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;a=pe(i.value!=null?i.value:a),t._wrapperState={initialChecked:u,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ft(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function Ft(t,i){ft(t,i);var a=pe(i.value),u=i.type;if(a!=null)u==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(u==="submit"||u==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?Ht(t,i.type,a):i.hasOwnProperty("defaultValue")&&Ht(t,i.type,pe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function jt(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function Ht(t,i,a){(i!=="number"||lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Bt=Array.isArray;function Ct(t,i,a,u){if(t=t.options,i){i={};for(var h=0;h<a.length;h++)i["$"+a[h]]=!0;for(a=0;a<t.length;a++)h=i.hasOwnProperty("$"+t[a].value),t[a].selected!==h&&(t[a].selected=h),h&&u&&(t[a].defaultSelected=!0)}else{for(a=""+pe(a),i=null,h=0;h<t.length;h++){if(t[h].value===a){t[h].selected=!0,u&&(t[h].defaultSelected=!0);return}i!==null||t[h].disabled||(i=t[h])}i!==null&&(i.selected=!0)}}function Ot(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function j(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Bt(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:pe(a)}}function yt(t,i){var a=pe(i.value),u=pe(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),u!=null&&(t.defaultValue=""+u)}function st(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function U(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function b(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?U(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var K,se=(function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,u,h){MSApp.execUnsafeLocalFunction(function(){return t(i,a,u,h)})}:t})(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=K.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function he(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(t){Ce.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Me[i]=Me[t]})});function fe(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(t)&&Me[t]?(""+i).trim():i+"px"}function xe(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var u=a.indexOf("--")===0,h=fe(a,i[a],u);a==="float"&&(a="cssFloat"),u?t.setProperty(a,h):t[a]=h}}var Re=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ye(t,i){if(i){if(Re[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function Pe(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ae=null;function Je(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var tt=null,rt=null,H=null;function Te(t){if(t=Ra(t)){if(typeof tt!="function")throw Error(n(280));var i=t.stateNode;i&&(i=Co(i),tt(t.stateNode,t.type,i))}}function me(t){rt?H?H.push(t):H=[t]:rt=t}function Ne(){if(rt){var t=rt,i=H;if(H=rt=null,Te(t),i)for(t=0;t<i.length;t++)Te(i[t])}}function De(t,i){return t(i)}function ve(){}var We=!1;function je(t,i,a){if(We)return t(i,a);We=!0;try{return De(t,i,a)}finally{We=!1,(rt!==null||H!==null)&&(ve(),Ne())}}function Ut(t,i){var a=t.stateNode;if(a===null)return null;var u=Co(a);if(u===null)return null;a=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(t=t.type,u=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!u;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var Rt=!1;if(f)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){Rt=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{Rt=!1}function Jn(t,i,a,u,h,m,A,O,V){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(ye){this.onError(ye)}}var Lr=!1,us=null,Dr=!1,Ur=null,dc={onError:function(t){Lr=!0,us=t}};function co(t,i,a,u,h,m,A,O,V){Lr=!1,us=null,Jn.apply(dc,arguments)}function uo(t,i,a,u,h,m,A,O,V){if(co.apply(this,arguments),Lr){if(Lr){var de=us;Lr=!1,us=null}else throw Error(n(198));Dr||(Dr=!0,Ur=de)}}function An(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function ds(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function ua(t){if(An(t)!==t)throw Error(n(188))}function ho(t){var i=t.alternate;if(!i){if(i=An(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,u=i;;){var h=a.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){a=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===a)return ua(h),t;if(m===u)return ua(h),i;m=m.sibling}throw Error(n(188))}if(a.return!==u.return)a=h,u=m;else{for(var A=!1,O=h.child;O;){if(O===a){A=!0,a=h,u=m;break}if(O===u){A=!0,u=h,a=m;break}O=O.sibling}if(!A){for(O=m.child;O;){if(O===a){A=!0,a=m,u=h;break}if(O===u){A=!0,u=m,a=h;break}O=O.sibling}if(!A)throw Error(n(189))}}if(a.alternate!==u)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function Fr(t){return t=ho(t),t!==null?da(t):null}function da(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=da(t);if(i!==null)return i;t=t.sibling}return null}var Or=e.unstable_scheduleCallback,ha=e.unstable_cancelCallback,fo=e.unstable_shouldYield,hc=e.unstable_requestPaint,$t=e.unstable_now,fc=e.unstable_getCurrentPriorityLevel,fa=e.unstable_ImmediatePriority,N=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ue=e.unstable_LowPriority,ne=e.unstable_IdlePriority,te=null,we=null;function Be(t){if(we&&typeof we.onCommitFiberRoot=="function")try{we.onCommitFiberRoot(te,t,void 0,(t.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:ct,Xe=Math.log,Qe=Math.LN2;function ct(t){return t>>>=0,t===0?32:31-(Xe(t)/Qe|0)|0}var ut=64,$e=4194304;function bt(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function zt(t,i){var a=t.pendingLanes;if(a===0)return 0;var u=0,h=t.suspendedLanes,m=t.pingedLanes,A=a&268435455;if(A!==0){var O=A&~h;O!==0?u=bt(O):(m&=A,m!==0&&(u=bt(m)))}else A=a&~h,A!==0?u=bt(A):m!==0&&(u=bt(m));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,m=i&-i,h>=m||h===16&&(m&4194240)!==0))return i;if((u&4)!==0&&(u|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=u;0<i;)a=31-be(i),h=1<<a,u|=t[a],i&=~h;return u}function qt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function It(t,i){for(var a=t.suspendedLanes,u=t.pingedLanes,h=t.expirationTimes,m=t.pendingLanes;0<m;){var A=31-be(m),O=1<<A,V=h[A];V===-1?((O&a)===0||(O&u)!==0)&&(h[A]=qt(O,i)):V<=i&&(t.expiredLanes|=O),m&=~O}}function rn(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Oe(){var t=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),t}function mn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function pt(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-be(i),t[i]=a}function Dn(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var u=t.eventTimes;for(t=t.expirationTimes;0<a;){var h=31-be(a),m=1<<h;i[h]=0,u[h]=-1,t[h]=-1,a&=~m}}function Un(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var u=31-be(a),h=1<<u;h&i|t[u]&i&&(t[u]|=i),a&=~h}}var xt=0;function ki(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var Pt,Gt,ci,Lt,ui,Ei=!1,kr=[],rr=null,sr=null,ar=null,pa=new Map,ma=new Map,or=[],lx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zh(t,i){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":ar=null;break;case"pointerover":case"pointerout":pa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ma.delete(i.pointerId)}}function xa(t,i,a,u,h,m){return t===null||t.nativeEvent!==m?(t={blockedOn:i,domEventName:a,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=Ra(i),i!==null&&Gt(i)),t):(t.eventSystemFlags|=u,i=t.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),t)}function cx(t,i,a,u,h){switch(i){case"focusin":return rr=xa(rr,t,i,a,u,h),!0;case"dragenter":return sr=xa(sr,t,i,a,u,h),!0;case"mouseover":return ar=xa(ar,t,i,a,u,h),!0;case"pointerover":var m=h.pointerId;return pa.set(m,xa(pa.get(m)||null,t,i,a,u,h)),!0;case"gotpointercapture":return m=h.pointerId,ma.set(m,xa(ma.get(m)||null,t,i,a,u,h)),!0}return!1}function Vh(t){var i=Br(t.target);if(i!==null){var a=An(i);if(a!==null){if(i=a.tag,i===13){if(i=ds(a),i!==null){t.blockedOn=i,ui(t.priority,function(){ci(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function po(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=mc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var u=new a.constructor(a.type,a);Ae=u,a.target.dispatchEvent(u),Ae=null}else return i=Ra(a),i!==null&&Gt(i),t.blockedOn=a,!1;i.shift()}return!0}function jh(t,i,a){po(t)&&a.delete(i)}function ux(){Ei=!1,rr!==null&&po(rr)&&(rr=null),sr!==null&&po(sr)&&(sr=null),ar!==null&&po(ar)&&(ar=null),pa.forEach(jh),ma.forEach(jh)}function ga(t,i){t.blockedOn===i&&(t.blockedOn=null,Ei||(Ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ux)))}function va(t){function i(h){return ga(h,t)}if(0<kr.length){ga(kr[0],t);for(var a=1;a<kr.length;a++){var u=kr[a];u.blockedOn===t&&(u.blockedOn=null)}}for(rr!==null&&ga(rr,t),sr!==null&&ga(sr,t),ar!==null&&ga(ar,t),pa.forEach(i),ma.forEach(i),a=0;a<or.length;a++)u=or[a],u.blockedOn===t&&(u.blockedOn=null);for(;0<or.length&&(a=or[0],a.blockedOn===null);)Vh(a),a.blockedOn===null&&or.shift()}var hs=T.ReactCurrentBatchConfig,mo=!0;function dx(t,i,a,u){var h=xt,m=hs.transition;hs.transition=null;try{xt=1,pc(t,i,a,u)}finally{xt=h,hs.transition=m}}function hx(t,i,a,u){var h=xt,m=hs.transition;hs.transition=null;try{xt=4,pc(t,i,a,u)}finally{xt=h,hs.transition=m}}function pc(t,i,a,u){if(mo){var h=mc(t,i,a,u);if(h===null)Ic(t,i,u,xo,a),zh(t,u);else if(cx(h,t,i,a,u))u.stopPropagation();else if(zh(t,u),i&4&&-1<lx.indexOf(t)){for(;h!==null;){var m=Ra(h);if(m!==null&&Pt(m),m=mc(t,i,a,u),m===null&&Ic(t,i,u,xo,a),m===h)break;h=m}h!==null&&u.stopPropagation()}else Ic(t,i,u,null,a)}}var xo=null;function mc(t,i,a,u){if(xo=null,t=Je(u),t=Br(t),t!==null)if(i=An(t),i===null)t=null;else if(a=i.tag,a===13){if(t=ds(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return xo=t,null}function Hh(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(fc()){case fa:return 1;case N:return 4;case q:case ue:return 16;case ne:return 536870912;default:return 16}default:return 16}}var lr=null,xc=null,go=null;function Gh(){if(go)return go;var t,i=xc,a=i.length,u,h="value"in lr?lr.value:lr.textContent,m=h.length;for(t=0;t<a&&i[t]===h[t];t++);var A=a-t;for(u=1;u<=A&&i[a-u]===h[m-u];u++);return go=h.slice(t,1<u?1-u:void 0)}function vo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function _o(){return!0}function Wh(){return!1}function Wn(t){function i(a,u,h,m,A){this._reactName=a,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=A,this.currentTarget=null;for(var O in t)t.hasOwnProperty(O)&&(a=t[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?_o:Wh,this.isPropagationStopped=Wh,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_o)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_o)},persist:function(){},isPersistent:_o}),i}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},gc=Wn(fs),_a=oe({},fs,{view:0,detail:0}),fx=Wn(_a),vc,_c,ya,yo=oe({},_a,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ya&&(ya&&t.type==="mousemove"?(vc=t.screenX-ya.screenX,_c=t.screenY-ya.screenY):_c=vc=0,ya=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),Xh=Wn(yo),px=oe({},yo,{dataTransfer:0}),mx=Wn(px),xx=oe({},_a,{relatedTarget:0}),yc=Wn(xx),gx=oe({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),vx=Wn(gx),_x=oe({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),yx=Wn(_x),Sx=oe({},fs,{data:0}),qh=Wn(Sx),Mx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ex={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function wx(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=bx[t])?!!i[t]:!1}function Sc(){return wx}var Tx=oe({},_a,{key:function(t){if(t.key){var i=Mx[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Ex[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ax=Wn(Tx),Cx=oe({},yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Yh=Wn(Cx),Nx=oe({},_a,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Rx=Wn(Nx),Px=oe({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ix=Wn(Px),Lx=oe({},yo,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Dx=Wn(Lx),Ux=[9,13,27,32],Mc=f&&"CompositionEvent"in window,Sa=null;f&&"documentMode"in document&&(Sa=document.documentMode);var Fx=f&&"TextEvent"in window&&!Sa,$h=f&&(!Mc||Sa&&8<Sa&&11>=Sa),Kh=" ",Zh=!1;function Qh(t,i){switch(t){case"keyup":return Ux.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jh(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Ox(t,i){switch(t){case"compositionend":return Jh(i);case"keypress":return i.which!==32?null:(Zh=!0,Kh);case"textInput":return t=i.data,t===Kh&&Zh?null:t;default:return null}}function kx(t,i){if(ps)return t==="compositionend"||!Mc&&Qh(t,i)?(t=Gh(),go=xc=lr=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return $h&&i.locale!=="ko"?null:i.data;default:return null}}var Bx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ef(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Bx[t.type]:i==="textarea"}function tf(t,i,a,u){me(u),i=wo(i,"onChange"),0<i.length&&(a=new gc("onChange","change",null,a,u),t.push({event:a,listeners:i}))}var Ma=null,Ea=null;function zx(t){yf(t,0)}function So(t){var i=_s(t);if(kt(i))return t}function Vx(t,i){if(t==="change")return i}var nf=!1;if(f){var Ec;if(f){var bc="oninput"in document;if(!bc){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),bc=typeof rf.oninput=="function"}Ec=bc}else Ec=!1;nf=Ec&&(!document.documentMode||9<document.documentMode)}function sf(){Ma&&(Ma.detachEvent("onpropertychange",af),Ea=Ma=null)}function af(t){if(t.propertyName==="value"&&So(Ea)){var i=[];tf(i,Ea,t,Je(t)),je(zx,i)}}function jx(t,i,a){t==="focusin"?(sf(),Ma=i,Ea=a,Ma.attachEvent("onpropertychange",af)):t==="focusout"&&sf()}function Hx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return So(Ea)}function Gx(t,i){if(t==="click")return So(i)}function Wx(t,i){if(t==="input"||t==="change")return So(i)}function Xx(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var di=typeof Object.is=="function"?Object.is:Xx;function ba(t,i){if(di(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),u=Object.keys(i);if(a.length!==u.length)return!1;for(u=0;u<a.length;u++){var h=a[u];if(!p.call(i,h)||!di(t[h],i[h]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,i){var a=of(t);t=0;for(var u;a;){if(a.nodeType===3){if(u=t+a.textContent.length,t<=i&&u>=i)return{node:a,offset:i-t};t=u}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=of(a)}}function cf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?cf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function uf(){for(var t=window,i=lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=lt(t.document)}return i}function wc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function qx(t){var i=uf(),a=t.focusedElem,u=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&cf(a.ownerDocument.documentElement,a)){if(u!==null&&wc(a)){if(i=u.start,t=u.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var h=a.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!t.extend&&m>u&&(h=u,u=m,m=h),h=lf(a,m);var A=lf(a,u);h&&A&&(t.rangeCount!==1||t.anchorNode!==h.node||t.anchorOffset!==h.offset||t.focusNode!==A.node||t.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),t.removeAllRanges(),m>u?(t.addRange(i),t.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yx=f&&"documentMode"in document&&11>=document.documentMode,ms=null,Tc=null,wa=null,Ac=!1;function df(t,i,a){var u=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ac||ms==null||ms!==lt(u)||(u=ms,"selectionStart"in u&&wc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),wa&&ba(wa,u)||(wa=u,u=wo(Tc,"onSelect"),0<u.length&&(i=new gc("onSelect","select",null,i,a),t.push({event:i,listeners:u}),i.target=ms)))}function Mo(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var xs={animationend:Mo("Animation","AnimationEnd"),animationiteration:Mo("Animation","AnimationIteration"),animationstart:Mo("Animation","AnimationStart"),transitionend:Mo("Transition","TransitionEnd")},Cc={},hf={};f&&(hf=document.createElement("div").style,"AnimationEvent"in window||(delete xs.animationend.animation,delete xs.animationiteration.animation,delete xs.animationstart.animation),"TransitionEvent"in window||delete xs.transitionend.transition);function Eo(t){if(Cc[t])return Cc[t];if(!xs[t])return t;var i=xs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in hf)return Cc[t]=i[a];return t}var ff=Eo("animationend"),pf=Eo("animationiteration"),mf=Eo("animationstart"),xf=Eo("transitionend"),gf=new Map,vf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function cr(t,i){gf.set(t,i),c(i,[t])}for(var Nc=0;Nc<vf.length;Nc++){var Rc=vf[Nc],$x=Rc.toLowerCase(),Kx=Rc[0].toUpperCase()+Rc.slice(1);cr($x,"on"+Kx)}cr(ff,"onAnimationEnd"),cr(pf,"onAnimationIteration"),cr(mf,"onAnimationStart"),cr("dblclick","onDoubleClick"),cr("focusin","onFocus"),cr("focusout","onBlur"),cr(xf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Zx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ta));function _f(t,i,a){var u=t.type||"unknown-event";t.currentTarget=a,uo(u,i,void 0,t),t.currentTarget=null}function yf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var u=t[a],h=u.event;u=u.listeners;e:{var m=void 0;if(i)for(var A=u.length-1;0<=A;A--){var O=u[A],V=O.instance,de=O.currentTarget;if(O=O.listener,V!==m&&h.isPropagationStopped())break e;_f(h,O,de),m=V}else for(A=0;A<u.length;A++){if(O=u[A],V=O.instance,de=O.currentTarget,O=O.listener,V!==m&&h.isPropagationStopped())break e;_f(h,O,de),m=V}}}if(Dr)throw t=Ur,Dr=!1,Ur=null,t}function Wt(t,i){var a=i[kc];a===void 0&&(a=i[kc]=new Set);var u=t+"__bubble";a.has(u)||(Sf(i,t,2,!1),a.add(u))}function Pc(t,i,a){var u=0;i&&(u|=4),Sf(a,t,u,i)}var bo="_reactListening"+Math.random().toString(36).slice(2);function Aa(t){if(!t[bo]){t[bo]=!0,r.forEach(function(a){a!=="selectionchange"&&(Zx.has(a)||Pc(a,!1,t),Pc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[bo]||(i[bo]=!0,Pc("selectionchange",!1,i))}}function Sf(t,i,a,u){switch(Hh(i)){case 1:var h=dx;break;case 4:h=hx;break;default:h=pc}a=h.bind(null,i,a,t),h=void 0,!Rt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?t.addEventListener(i,a,{capture:!0,passive:h}):t.addEventListener(i,a,!0):h!==void 0?t.addEventListener(i,a,{passive:h}):t.addEventListener(i,a,!1)}function Ic(t,i,a,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var O=u.stateNode.containerInfo;if(O===h||O.nodeType===8&&O.parentNode===h)break;if(A===4)for(A=u.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===h||V.nodeType===8&&V.parentNode===h))return;A=A.return}for(;O!==null;){if(A=Br(O),A===null)return;if(V=A.tag,V===5||V===6){u=m=A;continue e}O=O.parentNode}}u=u.return}je(function(){var de=m,ye=Je(a),Se=[];e:{var _e=gf.get(t);if(_e!==void 0){var ke=gc,He=t;switch(t){case"keypress":if(vo(a)===0)break e;case"keydown":case"keyup":ke=Ax;break;case"focusin":He="focus",ke=yc;break;case"focusout":He="blur",ke=yc;break;case"beforeblur":case"afterblur":ke=yc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ke=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ke=mx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ke=Rx;break;case ff:case pf:case mf:ke=vx;break;case xf:ke=Ix;break;case"scroll":ke=fx;break;case"wheel":ke=Dx;break;case"copy":case"cut":case"paste":ke=yx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ke=Yh}var qe=(i&4)!==0,tn=!qe&&t==="scroll",ee=qe?_e!==null?_e+"Capture":null:_e;qe=[];for(var W=de,ie;W!==null;){ie=W;var Ee=ie.stateNode;if(ie.tag===5&&Ee!==null&&(ie=Ee,ee!==null&&(Ee=Ut(W,ee),Ee!=null&&qe.push(Ca(W,Ee,ie)))),tn)break;W=W.return}0<qe.length&&(_e=new ke(_e,He,null,a,ye),Se.push({event:_e,listeners:qe}))}}if((i&7)===0){e:{if(_e=t==="mouseover"||t==="pointerover",ke=t==="mouseout"||t==="pointerout",_e&&a!==Ae&&(He=a.relatedTarget||a.fromElement)&&(Br(He)||He[Bi]))break e;if((ke||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,ke?(He=a.relatedTarget||a.toElement,ke=de,He=He?Br(He):null,He!==null&&(tn=An(He),He!==tn||He.tag!==5&&He.tag!==6)&&(He=null)):(ke=null,He=de),ke!==He)){if(qe=Xh,Ee="onMouseLeave",ee="onMouseEnter",W="mouse",(t==="pointerout"||t==="pointerover")&&(qe=Yh,Ee="onPointerLeave",ee="onPointerEnter",W="pointer"),tn=ke==null?_e:_s(ke),ie=He==null?_e:_s(He),_e=new qe(Ee,W+"leave",ke,a,ye),_e.target=tn,_e.relatedTarget=ie,Ee=null,Br(ye)===de&&(qe=new qe(ee,W+"enter",He,a,ye),qe.target=ie,qe.relatedTarget=tn,Ee=qe),tn=Ee,ke&&He)t:{for(qe=ke,ee=He,W=0,ie=qe;ie;ie=gs(ie))W++;for(ie=0,Ee=ee;Ee;Ee=gs(Ee))ie++;for(;0<W-ie;)qe=gs(qe),W--;for(;0<ie-W;)ee=gs(ee),ie--;for(;W--;){if(qe===ee||ee!==null&&qe===ee.alternate)break t;qe=gs(qe),ee=gs(ee)}qe=null}else qe=null;ke!==null&&Mf(Se,_e,ke,qe,!1),He!==null&&tn!==null&&Mf(Se,tn,He,qe,!0)}}e:{if(_e=de?_s(de):window,ke=_e.nodeName&&_e.nodeName.toLowerCase(),ke==="select"||ke==="input"&&_e.type==="file")var Ke=Vx;else if(ef(_e))if(nf)Ke=Wx;else{Ke=Hx;var nt=jx}else(ke=_e.nodeName)&&ke.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Ke=Gx);if(Ke&&(Ke=Ke(t,de))){tf(Se,Ke,a,ye);break e}nt&&nt(t,_e,de),t==="focusout"&&(nt=_e._wrapperState)&&nt.controlled&&_e.type==="number"&&Ht(_e,"number",_e.value)}switch(nt=de?_s(de):window,t){case"focusin":(ef(nt)||nt.contentEditable==="true")&&(ms=nt,Tc=de,wa=null);break;case"focusout":wa=Tc=ms=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,df(Se,a,ye);break;case"selectionchange":if(Yx)break;case"keydown":case"keyup":df(Se,a,ye)}var it;if(Mc)e:{switch(t){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else ps?Qh(t,a)&&(ot="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(ot="onCompositionStart");ot&&($h&&a.locale!=="ko"&&(ps||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&ps&&(it=Gh()):(lr=ye,xc="value"in lr?lr.value:lr.textContent,ps=!0)),nt=wo(de,ot),0<nt.length&&(ot=new qh(ot,t,null,a,ye),Se.push({event:ot,listeners:nt}),it?ot.data=it:(it=Jh(a),it!==null&&(ot.data=it)))),(it=Fx?Ox(t,a):kx(t,a))&&(de=wo(de,"onBeforeInput"),0<de.length&&(ye=new qh("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:de}),ye.data=it))}yf(Se,i)})}function Ca(t,i,a){return{instance:t,listener:i,currentTarget:a}}function wo(t,i){for(var a=i+"Capture",u=[];t!==null;){var h=t,m=h.stateNode;h.tag===5&&m!==null&&(h=m,m=Ut(t,a),m!=null&&u.unshift(Ca(t,m,h)),m=Ut(t,i),m!=null&&u.push(Ca(t,m,h))),t=t.return}return u}function gs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Mf(t,i,a,u,h){for(var m=i._reactName,A=[];a!==null&&a!==u;){var O=a,V=O.alternate,de=O.stateNode;if(V!==null&&V===u)break;O.tag===5&&de!==null&&(O=de,h?(V=Ut(a,m),V!=null&&A.unshift(Ca(a,V,O))):h||(V=Ut(a,m),V!=null&&A.push(Ca(a,V,O)))),a=a.return}A.length!==0&&t.push({event:i,listeners:A})}var Qx=/\r\n?/g,Jx=/\u0000|\uFFFD/g;function Ef(t){return(typeof t=="string"?t:""+t).replace(Qx,`
`).replace(Jx,"")}function To(t,i,a){if(i=Ef(i),Ef(t)!==i&&a)throw Error(n(425))}function Ao(){}var Lc=null,Dc=null;function Uc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,eg=typeof clearTimeout=="function"?clearTimeout:void 0,bf=typeof Promise=="function"?Promise:void 0,tg=typeof queueMicrotask=="function"?queueMicrotask:typeof bf<"u"?function(t){return bf.resolve(null).then(t).catch(ng)}:Fc;function ng(t){setTimeout(function(){throw t})}function Oc(t,i){var a=i,u=0;do{var h=a.nextSibling;if(t.removeChild(a),h&&h.nodeType===8)if(a=h.data,a==="/$"){if(u===0){t.removeChild(h),va(i);return}u--}else a!=="$"&&a!=="$?"&&a!=="$!"||u++;a=h}while(a);va(i)}function ur(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function wf(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var vs=Math.random().toString(36).slice(2),bi="__reactFiber$"+vs,Na="__reactProps$"+vs,Bi="__reactContainer$"+vs,kc="__reactEvents$"+vs,ig="__reactListeners$"+vs,rg="__reactHandles$"+vs;function Br(t){var i=t[bi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Bi]||a[bi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=wf(t);t!==null;){if(a=t[bi])return a;t=wf(t)}return i}t=a,a=t.parentNode}return null}function Ra(t){return t=t[bi]||t[Bi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function _s(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function Co(t){return t[Na]||null}var Bc=[],ys=-1;function dr(t){return{current:t}}function Xt(t){0>ys||(t.current=Bc[ys],Bc[ys]=null,ys--)}function Vt(t,i){ys++,Bc[ys]=t.current,t.current=i}var hr={},yn=dr(hr),Fn=dr(!1),zr=hr;function Ss(t,i){var a=t.type.contextTypes;if(!a)return hr;var u=t.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},m;for(m in a)h[m]=i[m];return u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=h),h}function On(t){return t=t.childContextTypes,t!=null}function No(){Xt(Fn),Xt(yn)}function Tf(t,i,a){if(yn.current!==hr)throw Error(n(168));Vt(yn,i),Vt(Fn,a)}function Af(t,i,a){var u=t.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return a;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(n(108,ge(t)||"Unknown",h));return oe({},a,u)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||hr,zr=yn.current,Vt(yn,t),Vt(Fn,Fn.current),!0}function Cf(t,i,a){var u=t.stateNode;if(!u)throw Error(n(169));a?(t=Af(t,i,zr),u.__reactInternalMemoizedMergedChildContext=t,Xt(Fn),Xt(yn),Vt(yn,t)):Xt(Fn),Vt(Fn,a)}var zi=null,Po=!1,zc=!1;function Nf(t){zi===null?zi=[t]:zi.push(t)}function sg(t){Po=!0,Nf(t)}function fr(){if(!zc&&zi!==null){zc=!0;var t=0,i=xt;try{var a=zi;for(xt=1;t<a.length;t++){var u=a[t];do u=u(!0);while(u!==null)}zi=null,Po=!1}catch(h){throw zi!==null&&(zi=zi.slice(t+1)),Or(fa,fr),h}finally{xt=i,zc=!1}}return null}var Ms=[],Es=0,Io=null,Lo=0,ei=[],ti=0,Vr=null,Vi=1,ji="";function jr(t,i){Ms[Es++]=Lo,Ms[Es++]=Io,Io=t,Lo=i}function Rf(t,i,a){ei[ti++]=Vi,ei[ti++]=ji,ei[ti++]=Vr,Vr=t;var u=Vi;t=ji;var h=32-be(u)-1;u&=~(1<<h),a+=1;var m=32-be(i)+h;if(30<m){var A=h-h%5;m=(u&(1<<A)-1).toString(32),u>>=A,h-=A,Vi=1<<32-be(i)+h|a<<h|u,ji=m+t}else Vi=1<<m|a<<h|u,ji=t}function Vc(t){t.return!==null&&(jr(t,1),Rf(t,1,0))}function jc(t){for(;t===Io;)Io=Ms[--Es],Ms[Es]=null,Lo=Ms[--Es],Ms[Es]=null;for(;t===Vr;)Vr=ei[--ti],ei[ti]=null,ji=ei[--ti],ei[ti]=null,Vi=ei[--ti],ei[ti]=null}var Xn=null,qn=null,Yt=!1,hi=null;function Pf(t,i){var a=si(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function If(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Xn=t,qn=ur(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Xn=t,qn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Vr!==null?{id:Vi,overflow:ji}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=si(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Xn=t,qn=null,!0):!1;default:return!1}}function Hc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gc(t){if(Yt){var i=qn;if(i){var a=i;if(!If(t,i)){if(Hc(t))throw Error(n(418));i=ur(a.nextSibling);var u=Xn;i&&If(t,i)?Pf(u,a):(t.flags=t.flags&-4097|2,Yt=!1,Xn=t)}}else{if(Hc(t))throw Error(n(418));t.flags=t.flags&-4097|2,Yt=!1,Xn=t}}}function Lf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Xn=t}function Do(t){if(t!==Xn)return!1;if(!Yt)return Lf(t),Yt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Uc(t.type,t.memoizedProps)),i&&(i=qn)){if(Hc(t))throw Df(),Error(n(418));for(;i;)Pf(t,i),i=ur(i.nextSibling)}if(Lf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){qn=ur(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}qn=null}}else qn=Xn?ur(t.stateNode.nextSibling):null;return!0}function Df(){for(var t=qn;t;)t=ur(t.nextSibling)}function bs(){qn=Xn=null,Yt=!1}function Wc(t){hi===null?hi=[t]:hi.push(t)}var ag=T.ReactCurrentBatchConfig;function Pa(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var u=a.stateNode}if(!u)throw Error(n(147,t));var h=u,m=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(A){var O=h.refs;A===null?delete O[m]:O[m]=A},i._stringRef=m,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Uo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function Uf(t){var i=t._init;return i(t._payload)}function Ff(t){function i(ee,W){if(t){var ie=ee.deletions;ie===null?(ee.deletions=[W],ee.flags|=16):ie.push(W)}}function a(ee,W){if(!t)return null;for(;W!==null;)i(ee,W),W=W.sibling;return null}function u(ee,W){for(ee=new Map;W!==null;)W.key!==null?ee.set(W.key,W):ee.set(W.index,W),W=W.sibling;return ee}function h(ee,W){return ee=Sr(ee,W),ee.index=0,ee.sibling=null,ee}function m(ee,W,ie){return ee.index=ie,t?(ie=ee.alternate,ie!==null?(ie=ie.index,ie<W?(ee.flags|=2,W):ie):(ee.flags|=2,W)):(ee.flags|=1048576,W)}function A(ee){return t&&ee.alternate===null&&(ee.flags|=2),ee}function O(ee,W,ie,Ee){return W===null||W.tag!==6?(W=Fu(ie,ee.mode,Ee),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function V(ee,W,ie,Ee){var Ke=ie.type;return Ke===F?ye(ee,W,ie.props.children,Ee,ie.key):W!==null&&(W.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&Uf(Ke)===W.type)?(Ee=h(W,ie.props),Ee.ref=Pa(ee,W,ie),Ee.return=ee,Ee):(Ee=sl(ie.type,ie.key,ie.props,null,ee.mode,Ee),Ee.ref=Pa(ee,W,ie),Ee.return=ee,Ee)}function de(ee,W,ie,Ee){return W===null||W.tag!==4||W.stateNode.containerInfo!==ie.containerInfo||W.stateNode.implementation!==ie.implementation?(W=Ou(ie,ee.mode,Ee),W.return=ee,W):(W=h(W,ie.children||[]),W.return=ee,W)}function ye(ee,W,ie,Ee,Ke){return W===null||W.tag!==7?(W=Kr(ie,ee.mode,Ee,Ke),W.return=ee,W):(W=h(W,ie),W.return=ee,W)}function Se(ee,W,ie){if(typeof W=="string"&&W!==""||typeof W=="number")return W=Fu(""+W,ee.mode,ie),W.return=ee,W;if(typeof W=="object"&&W!==null){switch(W.$$typeof){case D:return ie=sl(W.type,W.key,W.props,null,ee.mode,ie),ie.ref=Pa(ee,null,W),ie.return=ee,ie;case P:return W=Ou(W,ee.mode,ie),W.return=ee,W;case ce:var Ee=W._init;return Se(ee,Ee(W._payload),ie)}if(Bt(W)||re(W))return W=Kr(W,ee.mode,ie,null),W.return=ee,W;Uo(ee,W)}return null}function _e(ee,W,ie,Ee){var Ke=W!==null?W.key:null;if(typeof ie=="string"&&ie!==""||typeof ie=="number")return Ke!==null?null:O(ee,W,""+ie,Ee);if(typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:return ie.key===Ke?V(ee,W,ie,Ee):null;case P:return ie.key===Ke?de(ee,W,ie,Ee):null;case ce:return Ke=ie._init,_e(ee,W,Ke(ie._payload),Ee)}if(Bt(ie)||re(ie))return Ke!==null?null:ye(ee,W,ie,Ee,null);Uo(ee,ie)}return null}function ke(ee,W,ie,Ee,Ke){if(typeof Ee=="string"&&Ee!==""||typeof Ee=="number")return ee=ee.get(ie)||null,O(W,ee,""+Ee,Ke);if(typeof Ee=="object"&&Ee!==null){switch(Ee.$$typeof){case D:return ee=ee.get(Ee.key===null?ie:Ee.key)||null,V(W,ee,Ee,Ke);case P:return ee=ee.get(Ee.key===null?ie:Ee.key)||null,de(W,ee,Ee,Ke);case ce:var nt=Ee._init;return ke(ee,W,ie,nt(Ee._payload),Ke)}if(Bt(Ee)||re(Ee))return ee=ee.get(ie)||null,ye(W,ee,Ee,Ke,null);Uo(W,Ee)}return null}function He(ee,W,ie,Ee){for(var Ke=null,nt=null,it=W,ot=W=0,fn=null;it!==null&&ot<ie.length;ot++){it.index>ot?(fn=it,it=null):fn=it.sibling;var Nt=_e(ee,it,ie[ot],Ee);if(Nt===null){it===null&&(it=fn);break}t&&it&&Nt.alternate===null&&i(ee,it),W=m(Nt,W,ot),nt===null?Ke=Nt:nt.sibling=Nt,nt=Nt,it=fn}if(ot===ie.length)return a(ee,it),Yt&&jr(ee,ot),Ke;if(it===null){for(;ot<ie.length;ot++)it=Se(ee,ie[ot],Ee),it!==null&&(W=m(it,W,ot),nt===null?Ke=it:nt.sibling=it,nt=it);return Yt&&jr(ee,ot),Ke}for(it=u(ee,it);ot<ie.length;ot++)fn=ke(it,ee,ot,ie[ot],Ee),fn!==null&&(t&&fn.alternate!==null&&it.delete(fn.key===null?ot:fn.key),W=m(fn,W,ot),nt===null?Ke=fn:nt.sibling=fn,nt=fn);return t&&it.forEach(function(Mr){return i(ee,Mr)}),Yt&&jr(ee,ot),Ke}function qe(ee,W,ie,Ee){var Ke=re(ie);if(typeof Ke!="function")throw Error(n(150));if(ie=Ke.call(ie),ie==null)throw Error(n(151));for(var nt=Ke=null,it=W,ot=W=0,fn=null,Nt=ie.next();it!==null&&!Nt.done;ot++,Nt=ie.next()){it.index>ot?(fn=it,it=null):fn=it.sibling;var Mr=_e(ee,it,Nt.value,Ee);if(Mr===null){it===null&&(it=fn);break}t&&it&&Mr.alternate===null&&i(ee,it),W=m(Mr,W,ot),nt===null?Ke=Mr:nt.sibling=Mr,nt=Mr,it=fn}if(Nt.done)return a(ee,it),Yt&&jr(ee,ot),Ke;if(it===null){for(;!Nt.done;ot++,Nt=ie.next())Nt=Se(ee,Nt.value,Ee),Nt!==null&&(W=m(Nt,W,ot),nt===null?Ke=Nt:nt.sibling=Nt,nt=Nt);return Yt&&jr(ee,ot),Ke}for(it=u(ee,it);!Nt.done;ot++,Nt=ie.next())Nt=ke(it,ee,ot,Nt.value,Ee),Nt!==null&&(t&&Nt.alternate!==null&&it.delete(Nt.key===null?ot:Nt.key),W=m(Nt,W,ot),nt===null?Ke=Nt:nt.sibling=Nt,nt=Nt);return t&&it.forEach(function(Bg){return i(ee,Bg)}),Yt&&jr(ee,ot),Ke}function tn(ee,W,ie,Ee){if(typeof ie=="object"&&ie!==null&&ie.type===F&&ie.key===null&&(ie=ie.props.children),typeof ie=="object"&&ie!==null){switch(ie.$$typeof){case D:e:{for(var Ke=ie.key,nt=W;nt!==null;){if(nt.key===Ke){if(Ke=ie.type,Ke===F){if(nt.tag===7){a(ee,nt.sibling),W=h(nt,ie.props.children),W.return=ee,ee=W;break e}}else if(nt.elementType===Ke||typeof Ke=="object"&&Ke!==null&&Ke.$$typeof===ce&&Uf(Ke)===nt.type){a(ee,nt.sibling),W=h(nt,ie.props),W.ref=Pa(ee,nt,ie),W.return=ee,ee=W;break e}a(ee,nt);break}else i(ee,nt);nt=nt.sibling}ie.type===F?(W=Kr(ie.props.children,ee.mode,Ee,ie.key),W.return=ee,ee=W):(Ee=sl(ie.type,ie.key,ie.props,null,ee.mode,Ee),Ee.ref=Pa(ee,W,ie),Ee.return=ee,ee=Ee)}return A(ee);case P:e:{for(nt=ie.key;W!==null;){if(W.key===nt)if(W.tag===4&&W.stateNode.containerInfo===ie.containerInfo&&W.stateNode.implementation===ie.implementation){a(ee,W.sibling),W=h(W,ie.children||[]),W.return=ee,ee=W;break e}else{a(ee,W);break}else i(ee,W);W=W.sibling}W=Ou(ie,ee.mode,Ee),W.return=ee,ee=W}return A(ee);case ce:return nt=ie._init,tn(ee,W,nt(ie._payload),Ee)}if(Bt(ie))return He(ee,W,ie,Ee);if(re(ie))return qe(ee,W,ie,Ee);Uo(ee,ie)}return typeof ie=="string"&&ie!==""||typeof ie=="number"?(ie=""+ie,W!==null&&W.tag===6?(a(ee,W.sibling),W=h(W,ie),W.return=ee,ee=W):(a(ee,W),W=Fu(ie,ee.mode,Ee),W.return=ee,ee=W),A(ee)):a(ee,W)}return tn}var ws=Ff(!0),Of=Ff(!1),Fo=dr(null),Oo=null,Ts=null,Xc=null;function qc(){Xc=Ts=Oo=null}function Yc(t){var i=Fo.current;Xt(Fo),t._currentValue=i}function $c(t,i,a){for(;t!==null;){var u=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),t===a)break;t=t.return}}function As(t,i){Oo=t,Xc=Ts=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(kn=!0),t.firstContext=null)}function ni(t){var i=t._currentValue;if(Xc!==t)if(t={context:t,memoizedValue:i,next:null},Ts===null){if(Oo===null)throw Error(n(308));Ts=t,Oo.dependencies={lanes:0,firstContext:t}}else Ts=Ts.next=t;return i}var Hr=null;function Kc(t){Hr===null?Hr=[t]:Hr.push(t)}function kf(t,i,a,u){var h=i.interleaved;return h===null?(a.next=a,Kc(i)):(a.next=h.next,h.next=a),i.interleaved=a,Hi(t,u)}function Hi(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var pr=!1;function Zc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bf(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Gi(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function mr(t,i,a){var u=t.updateQueue;if(u===null)return null;if(u=u.shared,(Tt&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Hi(t,a)}return h=u.interleaved,h===null?(i.next=i,Kc(u)):(i.next=h.next,h.next=i),u.interleaved=i,Hi(t,a)}function ko(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,Un(t,a)}}function zf(t,i){var a=t.updateQueue,u=t.alternate;if(u!==null&&(u=u.updateQueue,a===u)){var h=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var A={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?h=m=A:m=m.next=A,a=a.next}while(a!==null);m===null?h=m=i:m=m.next=i}else h=m=i;a={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,effects:u.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function Bo(t,i,a,u){var h=t.updateQueue;pr=!1;var m=h.firstBaseUpdate,A=h.lastBaseUpdate,O=h.shared.pending;if(O!==null){h.shared.pending=null;var V=O,de=V.next;V.next=null,A===null?m=de:A.next=de,A=V;var ye=t.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==A&&(O===null?ye.firstBaseUpdate=de:O.next=de,ye.lastBaseUpdate=V))}if(m!==null){var Se=h.baseState;A=0,ye=de=V=null,O=m;do{var _e=O.lane,ke=O.eventTime;if((u&_e)===_e){ye!==null&&(ye=ye.next={eventTime:ke,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var He=t,qe=O;switch(_e=i,ke=a,qe.tag){case 1:if(He=qe.payload,typeof He=="function"){Se=He.call(ke,Se,_e);break e}Se=He;break e;case 3:He.flags=He.flags&-65537|128;case 0:if(He=qe.payload,_e=typeof He=="function"?He.call(ke,Se,_e):He,_e==null)break e;Se=oe({},Se,_e);break e;case 2:pr=!0}}O.callback!==null&&O.lane!==0&&(t.flags|=64,_e=h.effects,_e===null?h.effects=[O]:_e.push(O))}else ke={eventTime:ke,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(de=ye=ke,V=Se):ye=ye.next=ke,A|=_e;if(O=O.next,O===null){if(O=h.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,h.lastBaseUpdate=_e,h.shared.pending=null}}while(!0);if(ye===null&&(V=Se),h.baseState=V,h.firstBaseUpdate=de,h.lastBaseUpdate=ye,i=h.shared.interleaved,i!==null){h=i;do A|=h.lane,h=h.next;while(h!==i)}else m===null&&(h.shared.lanes=0);Xr|=A,t.lanes=A,t.memoizedState=Se}}function Vf(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var u=t[i],h=u.callback;if(h!==null){if(u.callback=null,u=a,typeof h!="function")throw Error(n(191,h));h.call(u)}}}var Ia={},wi=dr(Ia),La=dr(Ia),Da=dr(Ia);function Gr(t){if(t===Ia)throw Error(n(174));return t}function Qc(t,i){switch(Vt(Da,i),Vt(La,t),Vt(wi,Ia),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:b(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=b(i,t)}Xt(wi),Vt(wi,i)}function Cs(){Xt(wi),Xt(La),Xt(Da)}function jf(t){Gr(Da.current);var i=Gr(wi.current),a=b(i,t.type);i!==a&&(Vt(La,t),Vt(wi,a))}function Jc(t){La.current===t&&(Xt(wi),Xt(La))}var Kt=dr(0);function zo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var eu=[];function tu(){for(var t=0;t<eu.length;t++)eu[t]._workInProgressVersionPrimary=null;eu.length=0}var Vo=T.ReactCurrentDispatcher,nu=T.ReactCurrentBatchConfig,Wr=0,Zt=null,on=null,dn=null,jo=!1,Ua=!1,Fa=0,og=0;function Sn(){throw Error(n(321))}function iu(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!di(t[a],i[a]))return!1;return!0}function ru(t,i,a,u,h,m){if(Wr=m,Zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Vo.current=t===null||t.memoizedState===null?dg:hg,t=a(u,h),Ua){m=0;do{if(Ua=!1,Fa=0,25<=m)throw Error(n(301));m+=1,dn=on=null,i.updateQueue=null,Vo.current=fg,t=a(u,h)}while(Ua)}if(Vo.current=Wo,i=on!==null&&on.next!==null,Wr=0,dn=on=Zt=null,jo=!1,i)throw Error(n(300));return t}function su(){var t=Fa!==0;return Fa=0,t}function Ti(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return dn===null?Zt.memoizedState=dn=t:dn=dn.next=t,dn}function ii(){if(on===null){var t=Zt.alternate;t=t!==null?t.memoizedState:null}else t=on.next;var i=dn===null?Zt.memoizedState:dn.next;if(i!==null)dn=i,on=t;else{if(t===null)throw Error(n(310));on=t,t={memoizedState:on.memoizedState,baseState:on.baseState,baseQueue:on.baseQueue,queue:on.queue,next:null},dn===null?Zt.memoizedState=dn=t:dn=dn.next=t}return dn}function Oa(t,i){return typeof i=="function"?i(t):i}function au(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=on,h=u.baseQueue,m=a.pending;if(m!==null){if(h!==null){var A=h.next;h.next=m.next,m.next=A}u.baseQueue=h=m,a.pending=null}if(h!==null){m=h.next,u=u.baseState;var O=A=null,V=null,de=m;do{var ye=de.lane;if((Wr&ye)===ye)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),u=de.hasEagerState?de.eagerState:t(u,de.action);else{var Se={lane:ye,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(O=V=Se,A=u):V=V.next=Se,Zt.lanes|=ye,Xr|=ye}de=de.next}while(de!==null&&de!==m);V===null?A=u:V.next=O,di(u,i.memoizedState)||(kn=!0),i.memoizedState=u,i.baseState=A,i.baseQueue=V,a.lastRenderedState=u}if(t=a.interleaved,t!==null){h=t;do m=h.lane,Zt.lanes|=m,Xr|=m,h=h.next;while(h!==t)}else h===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function ou(t){var i=ii(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var u=a.dispatch,h=a.pending,m=i.memoizedState;if(h!==null){a.pending=null;var A=h=h.next;do m=t(m,A.action),A=A.next;while(A!==h);di(m,i.memoizedState)||(kn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,u]}function Hf(){}function Gf(t,i){var a=Zt,u=ii(),h=i(),m=!di(u.memoizedState,h);if(m&&(u.memoizedState=h,kn=!0),u=u.queue,lu(qf.bind(null,a,u,t),[t]),u.getSnapshot!==i||m||dn!==null&&dn.memoizedState.tag&1){if(a.flags|=2048,ka(9,Xf.bind(null,a,u,h,i),void 0,null),hn===null)throw Error(n(349));(Wr&30)!==0||Wf(a,i,h)}return h}function Wf(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function Xf(t,i,a,u){i.value=a,i.getSnapshot=u,Yf(i)&&$f(t)}function qf(t,i,a){return a(function(){Yf(i)&&$f(t)})}function Yf(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!di(t,a)}catch{return!0}}function $f(t){var i=Hi(t,1);i!==null&&xi(i,t,1,-1)}function Kf(t){var i=Ti();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Oa,lastRenderedState:t},i.queue=t,t=t.dispatch=ug.bind(null,Zt,t),[i.memoizedState,t]}function ka(t,i,a,u){return t={tag:t,create:i,destroy:a,deps:u,next:null},i=Zt.updateQueue,i===null?(i={lastEffect:null,stores:null},Zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(u=a.next,a.next=t,t.next=u,i.lastEffect=t)),t}function Zf(){return ii().memoizedState}function Ho(t,i,a,u){var h=Ti();Zt.flags|=t,h.memoizedState=ka(1|i,a,void 0,u===void 0?null:u)}function Go(t,i,a,u){var h=ii();u=u===void 0?null:u;var m=void 0;if(on!==null){var A=on.memoizedState;if(m=A.destroy,u!==null&&iu(u,A.deps)){h.memoizedState=ka(i,a,m,u);return}}Zt.flags|=t,h.memoizedState=ka(1|i,a,m,u)}function Qf(t,i){return Ho(8390656,8,t,i)}function lu(t,i){return Go(2048,8,t,i)}function Jf(t,i){return Go(4,2,t,i)}function ep(t,i){return Go(4,4,t,i)}function tp(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function np(t,i,a){return a=a!=null?a.concat([t]):null,Go(4,4,tp.bind(null,i,t),a)}function cu(){}function ip(t,i){var a=ii();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&iu(i,u[1])?u[0]:(a.memoizedState=[t,i],t)}function rp(t,i){var a=ii();i=i===void 0?null:i;var u=a.memoizedState;return u!==null&&i!==null&&iu(i,u[1])?u[0]:(t=t(),a.memoizedState=[t,i],t)}function sp(t,i,a){return(Wr&21)===0?(t.baseState&&(t.baseState=!1,kn=!0),t.memoizedState=a):(di(a,i)||(a=Oe(),Zt.lanes|=a,Xr|=a,t.baseState=!0),i)}function lg(t,i){var a=xt;xt=a!==0&&4>a?a:4,t(!0);var u=nu.transition;nu.transition={};try{t(!1),i()}finally{xt=a,nu.transition=u}}function ap(){return ii().memoizedState}function cg(t,i,a){var u=_r(t);if(a={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null},op(t))lp(i,a);else if(a=kf(t,i,a,u),a!==null){var h=Nn();xi(a,t,u,h),cp(a,i,u)}}function ug(t,i,a){var u=_r(t),h={lane:u,action:a,hasEagerState:!1,eagerState:null,next:null};if(op(t))lp(i,h);else{var m=t.alternate;if(t.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var A=i.lastRenderedState,O=m(A,a);if(h.hasEagerState=!0,h.eagerState=O,di(O,A)){var V=i.interleaved;V===null?(h.next=h,Kc(i)):(h.next=V.next,V.next=h),i.interleaved=h;return}}catch{}finally{}a=kf(t,i,h,u),a!==null&&(h=Nn(),xi(a,t,u,h),cp(a,i,u))}}function op(t){var i=t.alternate;return t===Zt||i!==null&&i===Zt}function lp(t,i){Ua=jo=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function cp(t,i,a){if((a&4194240)!==0){var u=i.lanes;u&=t.pendingLanes,a|=u,i.lanes=a,Un(t,a)}}var Wo={readContext:ni,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},dg={readContext:ni,useCallback:function(t,i){return Ti().memoizedState=[t,i===void 0?null:i],t},useContext:ni,useEffect:Qf,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Ho(4194308,4,tp.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Ho(4194308,4,t,i)},useInsertionEffect:function(t,i){return Ho(4,2,t,i)},useMemo:function(t,i){var a=Ti();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var u=Ti();return i=a!==void 0?a(i):i,u.memoizedState=u.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},u.queue=t,t=t.dispatch=cg.bind(null,Zt,t),[u.memoizedState,t]},useRef:function(t){var i=Ti();return t={current:t},i.memoizedState=t},useState:Kf,useDebugValue:cu,useDeferredValue:function(t){return Ti().memoizedState=t},useTransition:function(){var t=Kf(!1),i=t[0];return t=lg.bind(null,t[1]),Ti().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var u=Zt,h=Ti();if(Yt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),hn===null)throw Error(n(349));(Wr&30)!==0||Wf(u,i,a)}h.memoizedState=a;var m={value:a,getSnapshot:i};return h.queue=m,Qf(qf.bind(null,u,m,t),[t]),u.flags|=2048,ka(9,Xf.bind(null,u,m,a,i),void 0,null),a},useId:function(){var t=Ti(),i=hn.identifierPrefix;if(Yt){var a=ji,u=Vi;a=(u&~(1<<32-be(u)-1)).toString(32)+a,i=":"+i+"R"+a,a=Fa++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=og++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},hg={readContext:ni,useCallback:ip,useContext:ni,useEffect:lu,useImperativeHandle:np,useInsertionEffect:Jf,useLayoutEffect:ep,useMemo:rp,useReducer:au,useRef:Zf,useState:function(){return au(Oa)},useDebugValue:cu,useDeferredValue:function(t){var i=ii();return sp(i,on.memoizedState,t)},useTransition:function(){var t=au(Oa)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Hf,useSyncExternalStore:Gf,useId:ap,unstable_isNewReconciler:!1},fg={readContext:ni,useCallback:ip,useContext:ni,useEffect:lu,useImperativeHandle:np,useInsertionEffect:Jf,useLayoutEffect:ep,useMemo:rp,useReducer:ou,useRef:Zf,useState:function(){return ou(Oa)},useDebugValue:cu,useDeferredValue:function(t){var i=ii();return on===null?i.memoizedState=t:sp(i,on.memoizedState,t)},useTransition:function(){var t=ou(Oa)[0],i=ii().memoizedState;return[t,i]},useMutableSource:Hf,useSyncExternalStore:Gf,useId:ap,unstable_isNewReconciler:!1};function fi(t,i){if(t&&t.defaultProps){i=oe({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function uu(t,i,a,u){i=t.memoizedState,a=a(u,i),a=a==null?i:oe({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Xo={isMounted:function(t){return(t=t._reactInternals)?An(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var u=Nn(),h=_r(t),m=Gi(u,h);m.payload=i,a!=null&&(m.callback=a),i=mr(t,m,h),i!==null&&(xi(i,t,h,u),ko(i,t,h))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var u=Nn(),h=_r(t),m=Gi(u,h);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=mr(t,m,h),i!==null&&(xi(i,t,h,u),ko(i,t,h))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=Nn(),u=_r(t),h=Gi(a,u);h.tag=2,i!=null&&(h.callback=i),i=mr(t,h,u),i!==null&&(xi(i,t,u,a),ko(i,t,u))}};function up(t,i,a,u,h,m,A){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(u,m,A):i.prototype&&i.prototype.isPureReactComponent?!ba(a,u)||!ba(h,m):!0}function dp(t,i,a){var u=!1,h=hr,m=i.contextType;return typeof m=="object"&&m!==null?m=ni(m):(h=On(i)?zr:yn.current,u=i.contextTypes,m=(u=u!=null)?Ss(t,h):hr),i=new i(a,m),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Xo,t.stateNode=i,i._reactInternals=t,u&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=h,t.__reactInternalMemoizedMaskedChildContext=m),i}function hp(t,i,a,u){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,u),i.state!==t&&Xo.enqueueReplaceState(i,i.state,null)}function du(t,i,a,u){var h=t.stateNode;h.props=a,h.state=t.memoizedState,h.refs={},Zc(t);var m=i.contextType;typeof m=="object"&&m!==null?h.context=ni(m):(m=On(i)?zr:yn.current,h.context=Ss(t,m)),h.state=t.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(uu(t,i,m,a),h.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&Xo.enqueueReplaceState(h,h.state,null),Bo(t,a,h,u),h.state=t.memoizedState),typeof h.componentDidMount=="function"&&(t.flags|=4194308)}function Ns(t,i){try{var a="",u=i;do a+=ze(u),u=u.return;while(u);var h=a}catch(m){h=`
Error generating stack: `+m.message+`
`+m.stack}return{value:t,source:i,stack:h,digest:null}}function hu(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function fu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var pg=typeof WeakMap=="function"?WeakMap:Map;function fp(t,i,a){a=Gi(-1,a),a.tag=3,a.payload={element:null};var u=i.value;return a.callback=function(){Jo||(Jo=!0,Cu=u),fu(t,i)},a}function pp(t,i,a){a=Gi(-1,a),a.tag=3;var u=t.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;a.payload=function(){return u(h)},a.callback=function(){fu(t,i)}}var m=t.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){fu(t,i),typeof u!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),a}function mp(t,i,a){var u=t.pingCache;if(u===null){u=t.pingCache=new pg;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(a)||(h.add(a),t=Cg.bind(null,t,i,a),i.then(t,t))}function xp(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function gp(t,i,a,u,h){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Gi(-1,1),i.tag=2,mr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=h,t)}var mg=T.ReactCurrentOwner,kn=!1;function Cn(t,i,a,u){i.child=t===null?Of(i,null,a,u):ws(i,t.child,a,u)}function vp(t,i,a,u,h){a=a.render;var m=i.ref;return As(i,h),u=ru(t,i,a,u,m,h),a=su(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Wi(t,i,h)):(Yt&&a&&Vc(i),i.flags|=1,Cn(t,i,u,h),i.child)}function _p(t,i,a,u,h){if(t===null){var m=a.type;return typeof m=="function"&&!Uu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,yp(t,i,m,u,h)):(t=sl(a.type,null,u,i,i.mode,h),t.ref=i.ref,t.return=i,i.child=t)}if(m=t.child,(t.lanes&h)===0){var A=m.memoizedProps;if(a=a.compare,a=a!==null?a:ba,a(A,u)&&t.ref===i.ref)return Wi(t,i,h)}return i.flags|=1,t=Sr(m,u),t.ref=i.ref,t.return=i,i.child=t}function yp(t,i,a,u,h){if(t!==null){var m=t.memoizedProps;if(ba(m,u)&&t.ref===i.ref)if(kn=!1,i.pendingProps=u=m,(t.lanes&h)!==0)(t.flags&131072)!==0&&(kn=!0);else return i.lanes=t.lanes,Wi(t,i,h)}return pu(t,i,a,u,h)}function Sp(t,i,a){var u=i.pendingProps,h=u.children,m=t!==null?t.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Vt(Ps,Yn),Yn|=a;else{if((a&1073741824)===0)return t=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Vt(Ps,Yn),Yn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=m!==null?m.baseLanes:a,Vt(Ps,Yn),Yn|=u}else m!==null?(u=m.baseLanes|a,i.memoizedState=null):u=a,Vt(Ps,Yn),Yn|=u;return Cn(t,i,h,a),i.child}function Mp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function pu(t,i,a,u,h){var m=On(a)?zr:yn.current;return m=Ss(i,m),As(i,h),a=ru(t,i,a,u,m,h),u=su(),t!==null&&!kn?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~h,Wi(t,i,h)):(Yt&&u&&Vc(i),i.flags|=1,Cn(t,i,a,h),i.child)}function Ep(t,i,a,u,h){if(On(a)){var m=!0;Ro(i)}else m=!1;if(As(i,h),i.stateNode===null)Yo(t,i),dp(i,a,u),du(i,a,u,h),u=!0;else if(t===null){var A=i.stateNode,O=i.memoizedProps;A.props=O;var V=A.context,de=a.contextType;typeof de=="object"&&de!==null?de=ni(de):(de=On(a)?zr:yn.current,de=Ss(i,de));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";Se||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==u||V!==de)&&hp(i,A,u,de),pr=!1;var _e=i.memoizedState;A.state=_e,Bo(i,u,A,h),V=i.memoizedState,O!==u||_e!==V||Fn.current||pr?(typeof ye=="function"&&(uu(i,a,ye,u),V=i.memoizedState),(O=pr||up(i,a,O,u,_e,V,de))?(Se||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=V),A.props=u,A.state=V,A.context=de,u=O):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{A=i.stateNode,Bf(t,i),O=i.memoizedProps,de=i.type===i.elementType?O:fi(i.type,O),A.props=de,Se=i.pendingProps,_e=A.context,V=a.contextType,typeof V=="object"&&V!==null?V=ni(V):(V=On(a)?zr:yn.current,V=Ss(i,V));var ke=a.getDerivedStateFromProps;(ye=typeof ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Se||_e!==V)&&hp(i,A,u,V),pr=!1,_e=i.memoizedState,A.state=_e,Bo(i,u,A,h);var He=i.memoizedState;O!==Se||_e!==He||Fn.current||pr?(typeof ke=="function"&&(uu(i,a,ke,u),He=i.memoizedState),(de=pr||up(i,a,de,u,_e,He,V)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,He,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,He,V)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=He),A.props=u,A.state=He,A.context=V,u=de):(typeof A.componentDidUpdate!="function"||O===t.memoizedProps&&_e===t.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===t.memoizedProps&&_e===t.memoizedState||(i.flags|=1024),u=!1)}return mu(t,i,a,u,m,h)}function mu(t,i,a,u,h,m){Mp(t,i);var A=(i.flags&128)!==0;if(!u&&!A)return h&&Cf(i,a,!1),Wi(t,i,m);u=i.stateNode,mg.current=i;var O=A&&typeof a.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,t!==null&&A?(i.child=ws(i,t.child,null,m),i.child=ws(i,null,O,m)):Cn(t,i,O,m),i.memoizedState=u.state,h&&Cf(i,a,!0),i.child}function bp(t){var i=t.stateNode;i.pendingContext?Tf(t,i.pendingContext,i.pendingContext!==i.context):i.context&&Tf(t,i.context,!1),Qc(t,i.containerInfo)}function wp(t,i,a,u,h){return bs(),Wc(h),i.flags|=256,Cn(t,i,a,u),i.child}var xu={dehydrated:null,treeContext:null,retryLane:0};function gu(t){return{baseLanes:t,cachePool:null,transitions:null}}function Tp(t,i,a){var u=i.pendingProps,h=Kt.current,m=!1,A=(i.flags&128)!==0,O;if((O=A)||(O=t!==null&&t.memoizedState===null?!1:(h&2)!==0),O?(m=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(h|=1),Vt(Kt,h&1),t===null)return Gc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=u.children,t=u.fallback,m?(u=i.mode,m=i.child,A={mode:"hidden",children:A},(u&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=A):m=al(A,u,0,null),t=Kr(t,u,a,null),m.return=i,t.return=i,m.sibling=t,i.child=m,i.child.memoizedState=gu(a),i.memoizedState=xu,t):vu(i,A));if(h=t.memoizedState,h!==null&&(O=h.dehydrated,O!==null))return xg(t,i,A,u,O,h,a);if(m){m=u.fallback,A=i.mode,h=t.child,O=h.sibling;var V={mode:"hidden",children:u.children};return(A&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=V,i.deletions=null):(u=Sr(h,V),u.subtreeFlags=h.subtreeFlags&14680064),O!==null?m=Sr(O,m):(m=Kr(m,A,a,null),m.flags|=2),m.return=i,u.return=i,u.sibling=m,i.child=u,u=m,m=i.child,A=t.child.memoizedState,A=A===null?gu(a):{baseLanes:A.baseLanes|a,cachePool:null,transitions:A.transitions},m.memoizedState=A,m.childLanes=t.childLanes&~a,i.memoizedState=xu,u}return m=t.child,t=m.sibling,u=Sr(m,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=a),u.return=i,u.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=u,i.memoizedState=null,u}function vu(t,i){return i=al({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function qo(t,i,a,u){return u!==null&&Wc(u),ws(i,t.child,null,a),t=vu(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function xg(t,i,a,u,h,m,A){if(a)return i.flags&256?(i.flags&=-257,u=hu(Error(n(422))),qo(t,i,A,u)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(m=u.fallback,h=i.mode,u=al({mode:"visible",children:u.children},h,0,null),m=Kr(m,h,A,null),m.flags|=2,u.return=i,m.return=i,u.sibling=m,i.child=u,(i.mode&1)!==0&&ws(i,t.child,null,A),i.child.memoizedState=gu(A),i.memoizedState=xu,m);if((i.mode&1)===0)return qo(t,i,A,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var O=u.dgst;return u=O,m=Error(n(419)),u=hu(m,u,void 0),qo(t,i,A,u)}if(O=(A&t.childLanes)!==0,kn||O){if(u=hn,u!==null){switch(A&-A){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|A))!==0?0:h,h!==0&&h!==m.retryLane&&(m.retryLane=h,Hi(t,h),xi(u,t,h,-1))}return Du(),u=hu(Error(n(421))),qo(t,i,A,u)}return h.data==="$?"?(i.flags|=128,i.child=t.child,i=Ng.bind(null,t),h._reactRetry=i,null):(t=m.treeContext,qn=ur(h.nextSibling),Xn=i,Yt=!0,hi=null,t!==null&&(ei[ti++]=Vi,ei[ti++]=ji,ei[ti++]=Vr,Vi=t.id,ji=t.overflow,Vr=i),i=vu(i,u.children),i.flags|=4096,i)}function Ap(t,i,a){t.lanes|=i;var u=t.alternate;u!==null&&(u.lanes|=i),$c(t.return,i,a)}function _u(t,i,a,u,h){var m=t.memoizedState;m===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:a,tailMode:h}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=a,m.tailMode=h)}function Cp(t,i,a){var u=i.pendingProps,h=u.revealOrder,m=u.tail;if(Cn(t,i,u.children,a),u=Kt.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Ap(t,a,i);else if(t.tag===19)Ap(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}u&=1}if(Vt(Kt,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(a=i.child,h=null;a!==null;)t=a.alternate,t!==null&&zo(t)===null&&(h=a),a=a.sibling;a=h,a===null?(h=i.child,i.child=null):(h=a.sibling,a.sibling=null),_u(i,!1,h,a,m);break;case"backwards":for(a=null,h=i.child,i.child=null;h!==null;){if(t=h.alternate,t!==null&&zo(t)===null){i.child=h;break}t=h.sibling,h.sibling=a,a=h,h=t}_u(i,!0,a,null,m);break;case"together":_u(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Yo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Wi(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=Sr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=Sr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function gg(t,i,a){switch(i.tag){case 3:bp(i),bs();break;case 5:jf(i);break;case 1:On(i.type)&&Ro(i);break;case 4:Qc(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Vt(Fo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Vt(Kt,Kt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Tp(t,i,a):(Vt(Kt,Kt.current&1),t=Wi(t,i,a),t!==null?t.sibling:null);Vt(Kt,Kt.current&1);break;case 19:if(u=(a&i.childLanes)!==0,(t.flags&128)!==0){if(u)return Cp(t,i,a);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Vt(Kt,Kt.current),u)break;return null;case 22:case 23:return i.lanes=0,Sp(t,i,a)}return Wi(t,i,a)}var Np,yu,Rp,Pp;Np=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},yu=function(){},Rp=function(t,i,a,u){var h=t.memoizedProps;if(h!==u){t=i.stateNode,Gr(wi.current);var m=null;switch(a){case"input":h=St(t,h),u=St(t,u),m=[];break;case"select":h=oe({},h,{value:void 0}),u=oe({},u,{value:void 0}),m=[];break;case"textarea":h=Ot(t,h),u=Ot(t,u),m=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(t.onclick=Ao)}Ye(a,u);var A;a=null;for(de in h)if(!u.hasOwnProperty(de)&&h.hasOwnProperty(de)&&h[de]!=null)if(de==="style"){var O=h[de];for(A in O)O.hasOwnProperty(A)&&(a||(a={}),a[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?m||(m=[]):(m=m||[]).push(de,null));for(de in u){var V=u[de];if(O=h!=null?h[de]:void 0,u.hasOwnProperty(de)&&V!==O&&(V!=null||O!=null))if(de==="style")if(O){for(A in O)!O.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(a||(a={}),a[A]="");for(A in V)V.hasOwnProperty(A)&&O[A]!==V[A]&&(a||(a={}),a[A]=V[A])}else a||(m||(m=[]),m.push(de,a)),a=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(m=m||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(m=m||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&Wt("scroll",t),m||O===V||(m=[])):(m=m||[]).push(de,V))}a&&(m=m||[]).push("style",a);var de=m;(i.updateQueue=de)&&(i.flags|=4)}},Pp=function(t,i,a,u){a!==u&&(i.flags|=4)};function Ba(t,i){if(!Yt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var u=null;a!==null;)a.alternate!==null&&(u=a),a=a.sibling;u===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:u.sibling=null}}function Mn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,u=0;if(i)for(var h=t.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=t,h=h.sibling;else for(h=t.child;h!==null;)a|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=t,h=h.sibling;return t.subtreeFlags|=u,t.childLanes=a,i}function vg(t,i,a){var u=i.pendingProps;switch(jc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(i),null;case 1:return On(i.type)&&No(),Mn(i),null;case 3:return u=i.stateNode,Cs(),Xt(Fn),Xt(yn),tu(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,hi!==null&&(Pu(hi),hi=null))),yu(t,i),Mn(i),null;case 5:Jc(i);var h=Gr(Da.current);if(a=i.type,t!==null&&i.stateNode!=null)Rp(t,i,a,u,h),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(n(166));return Mn(i),null}if(t=Gr(wi.current),Do(i)){u=i.stateNode,a=i.type;var m=i.memoizedProps;switch(u[bi]=i,u[Na]=m,t=(i.mode&1)!==0,a){case"dialog":Wt("cancel",u),Wt("close",u);break;case"iframe":case"object":case"embed":Wt("load",u);break;case"video":case"audio":for(h=0;h<Ta.length;h++)Wt(Ta[h],u);break;case"source":Wt("error",u);break;case"img":case"image":case"link":Wt("error",u),Wt("load",u);break;case"details":Wt("toggle",u);break;case"input":mt(u,m),Wt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!m.multiple},Wt("invalid",u);break;case"textarea":j(u,m),Wt("invalid",u)}Ye(a,m),h=null;for(var A in m)if(m.hasOwnProperty(A)){var O=m[A];A==="children"?typeof O=="string"?u.textContent!==O&&(m.suppressHydrationWarning!==!0&&To(u.textContent,O,t),h=["children",O]):typeof O=="number"&&u.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&To(u.textContent,O,t),h=["children",""+O]):o.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&Wt("scroll",u)}switch(a){case"input":et(u),jt(u,m,!0);break;case"textarea":et(u),st(u);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(u.onclick=Ao)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{A=h.nodeType===9?h:h.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=U(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=A.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof u.is=="string"?t=A.createElement(a,{is:u.is}):(t=A.createElement(a),a==="select"&&(A=t,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):t=A.createElementNS(t,a),t[bi]=i,t[Na]=u,Np(t,i,!1,!1),i.stateNode=t;e:{switch(A=Pe(a,u),a){case"dialog":Wt("cancel",t),Wt("close",t),h=u;break;case"iframe":case"object":case"embed":Wt("load",t),h=u;break;case"video":case"audio":for(h=0;h<Ta.length;h++)Wt(Ta[h],t);h=u;break;case"source":Wt("error",t),h=u;break;case"img":case"image":case"link":Wt("error",t),Wt("load",t),h=u;break;case"details":Wt("toggle",t),h=u;break;case"input":mt(t,u),h=St(t,u),Wt("invalid",t);break;case"option":h=u;break;case"select":t._wrapperState={wasMultiple:!!u.multiple},h=oe({},u,{value:void 0}),Wt("invalid",t);break;case"textarea":j(t,u),h=Ot(t,u),Wt("invalid",t);break;default:h=u}Ye(a,h),O=h;for(m in O)if(O.hasOwnProperty(m)){var V=O[m];m==="style"?xe(t,V):m==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&se(t,V)):m==="children"?typeof V=="string"?(a!=="textarea"||V!=="")&&he(t,V):typeof V=="number"&&he(t,""+V):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?V!=null&&m==="onScroll"&&Wt("scroll",t):V!=null&&L(t,m,V,A))}switch(a){case"input":et(t),jt(t,u,!1);break;case"textarea":et(t),st(t);break;case"option":u.value!=null&&t.setAttribute("value",""+pe(u.value));break;case"select":t.multiple=!!u.multiple,m=u.value,m!=null?Ct(t,!!u.multiple,m,!1):u.defaultValue!=null&&Ct(t,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(t.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Mn(i),null;case 6:if(t&&i.stateNode!=null)Pp(t,i,t.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(n(166));if(a=Gr(Da.current),Gr(wi.current),Do(i)){if(u=i.stateNode,a=i.memoizedProps,u[bi]=i,(m=u.nodeValue!==a)&&(t=Xn,t!==null))switch(t.tag){case 3:To(u.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&To(u.nodeValue,a,(t.mode&1)!==0)}m&&(i.flags|=4)}else u=(a.nodeType===9?a:a.ownerDocument).createTextNode(u),u[bi]=i,i.stateNode=u}return Mn(i),null;case 13:if(Xt(Kt),u=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Yt&&qn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Df(),bs(),i.flags|=98560,m=!1;else if(m=Do(i),u!==null&&u.dehydrated!==null){if(t===null){if(!m)throw Error(n(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(n(317));m[bi]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Mn(i),m=!1}else hi!==null&&(Pu(hi),hi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(u=u!==null,u!==(t!==null&&t.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Kt.current&1)!==0?ln===0&&(ln=3):Du())),i.updateQueue!==null&&(i.flags|=4),Mn(i),null);case 4:return Cs(),yu(t,i),t===null&&Aa(i.stateNode.containerInfo),Mn(i),null;case 10:return Yc(i.type._context),Mn(i),null;case 17:return On(i.type)&&No(),Mn(i),null;case 19:if(Xt(Kt),m=i.memoizedState,m===null)return Mn(i),null;if(u=(i.flags&128)!==0,A=m.rendering,A===null)if(u)Ba(m,!1);else{if(ln!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(A=zo(t),A!==null){for(i.flags|=128,Ba(m,!1),u=A.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=a,a=i.child;a!==null;)m=a,t=u,m.flags&=14680066,A=m.alternate,A===null?(m.childLanes=0,m.lanes=t,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=A.childLanes,m.lanes=A.lanes,m.child=A.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=A.memoizedProps,m.memoizedState=A.memoizedState,m.updateQueue=A.updateQueue,m.type=A.type,t=A.dependencies,m.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Vt(Kt,Kt.current&1|2),i.child}t=t.sibling}m.tail!==null&&$t()>Is&&(i.flags|=128,u=!0,Ba(m,!1),i.lanes=4194304)}else{if(!u)if(t=zo(A),t!==null){if(i.flags|=128,u=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ba(m,!0),m.tail===null&&m.tailMode==="hidden"&&!A.alternate&&!Yt)return Mn(i),null}else 2*$t()-m.renderingStartTime>Is&&a!==1073741824&&(i.flags|=128,u=!0,Ba(m,!1),i.lanes=4194304);m.isBackwards?(A.sibling=i.child,i.child=A):(a=m.last,a!==null?a.sibling=A:i.child=A,m.last=A)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=$t(),i.sibling=null,a=Kt.current,Vt(Kt,u?a&1|2:a&1),i):(Mn(i),null);case 22:case 23:return Lu(),u=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(Mn(i),i.subtreeFlags&6&&(i.flags|=8192)):Mn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function _g(t,i){switch(jc(i),i.tag){case 1:return On(i.type)&&No(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return Cs(),Xt(Fn),Xt(yn),tu(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return Jc(i),null;case 13:if(Xt(Kt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));bs()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Xt(Kt),null;case 4:return Cs(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var $o=!1,En=!1,yg=typeof WeakSet=="function"?WeakSet:Set,Ve=null;function Rs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(u){en(t,i,u)}else a.current=null}function Su(t,i,a){try{a()}catch(u){en(t,i,u)}}var Ip=!1;function Sg(t,i){if(Lc=mo,t=uf(),wc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var u=a.getSelection&&a.getSelection();if(u&&u.rangeCount!==0){a=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var A=0,O=-1,V=-1,de=0,ye=0,Se=t,_e=null;t:for(;;){for(var ke;Se!==a||h!==0&&Se.nodeType!==3||(O=A+h),Se!==m||u!==0&&Se.nodeType!==3||(V=A+u),Se.nodeType===3&&(A+=Se.nodeValue.length),(ke=Se.firstChild)!==null;)_e=Se,Se=ke;for(;;){if(Se===t)break t;if(_e===a&&++de===h&&(O=A),_e===m&&++ye===u&&(V=A),(ke=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=ke}a=O===-1||V===-1?null:{start:O,end:V}}else a=null}a=a||{start:0,end:0}}else a=null;for(Dc={focusedElem:t,selectionRange:a},mo=!1,Ve=i;Ve!==null;)if(i=Ve,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Ve=t;else for(;Ve!==null;){i=Ve;try{var He=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(He!==null){var qe=He.memoizedProps,tn=He.memoizedState,ee=i.stateNode,W=ee.getSnapshotBeforeUpdate(i.elementType===i.type?qe:fi(i.type,qe),tn);ee.__reactInternalSnapshotBeforeUpdate=W}break;case 3:var ie=i.stateNode.containerInfo;ie.nodeType===1?ie.textContent="":ie.nodeType===9&&ie.documentElement&&ie.removeChild(ie.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Ee){en(i,i.return,Ee)}if(t=i.sibling,t!==null){t.return=i.return,Ve=t;break}Ve=i.return}return He=Ip,Ip=!1,He}function za(t,i,a){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&t)===t){var m=h.destroy;h.destroy=void 0,m!==void 0&&Su(i,a,m)}h=h.next}while(h!==u)}}function Ko(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var u=a.create;a.destroy=u()}a=a.next}while(a!==i)}}function Mu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function Lp(t){var i=t.alternate;i!==null&&(t.alternate=null,Lp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[bi],delete i[Na],delete i[kc],delete i[ig],delete i[rg])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Dp(t){return t.tag===5||t.tag===3||t.tag===4}function Up(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Dp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Eu(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(u!==4&&(t=t.child,t!==null))for(Eu(t,i,a),t=t.sibling;t!==null;)Eu(t,i,a),t=t.sibling}function bu(t,i,a){var u=t.tag;if(u===5||u===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(u!==4&&(t=t.child,t!==null))for(bu(t,i,a),t=t.sibling;t!==null;)bu(t,i,a),t=t.sibling}var xn=null,pi=!1;function xr(t,i,a){for(a=a.child;a!==null;)Fp(t,i,a),a=a.sibling}function Fp(t,i,a){if(we&&typeof we.onCommitFiberUnmount=="function")try{we.onCommitFiberUnmount(te,a)}catch{}switch(a.tag){case 5:En||Rs(a,i);case 6:var u=xn,h=pi;xn=null,xr(t,i,a),xn=u,pi=h,xn!==null&&(pi?(t=xn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):xn.removeChild(a.stateNode));break;case 18:xn!==null&&(pi?(t=xn,a=a.stateNode,t.nodeType===8?Oc(t.parentNode,a):t.nodeType===1&&Oc(t,a),va(t)):Oc(xn,a.stateNode));break;case 4:u=xn,h=pi,xn=a.stateNode.containerInfo,pi=!0,xr(t,i,a),xn=u,pi=h;break;case 0:case 11:case 14:case 15:if(!En&&(u=a.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var m=h,A=m.destroy;m=m.tag,A!==void 0&&((m&2)!==0||(m&4)!==0)&&Su(a,i,A),h=h.next}while(h!==u)}xr(t,i,a);break;case 1:if(!En&&(Rs(a,i),u=a.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=a.memoizedProps,u.state=a.memoizedState,u.componentWillUnmount()}catch(O){en(a,i,O)}xr(t,i,a);break;case 21:xr(t,i,a);break;case 22:a.mode&1?(En=(u=En)||a.memoizedState!==null,xr(t,i,a),En=u):xr(t,i,a);break;default:xr(t,i,a)}}function Op(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new yg),i.forEach(function(u){var h=Rg.bind(null,t,u);a.has(u)||(a.add(u),u.then(h,h))})}}function mi(t,i){var a=i.deletions;if(a!==null)for(var u=0;u<a.length;u++){var h=a[u];try{var m=t,A=i,O=A;e:for(;O!==null;){switch(O.tag){case 5:xn=O.stateNode,pi=!1;break e;case 3:xn=O.stateNode.containerInfo,pi=!0;break e;case 4:xn=O.stateNode.containerInfo,pi=!0;break e}O=O.return}if(xn===null)throw Error(n(160));Fp(m,A,h),xn=null,pi=!1;var V=h.alternate;V!==null&&(V.return=null),h.return=null}catch(de){en(h,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)kp(i,t),i=i.sibling}function kp(t,i){var a=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(mi(i,t),Ai(t),u&4){try{za(3,t,t.return),Ko(3,t)}catch(qe){en(t,t.return,qe)}try{za(5,t,t.return)}catch(qe){en(t,t.return,qe)}}break;case 1:mi(i,t),Ai(t),u&512&&a!==null&&Rs(a,a.return);break;case 5:if(mi(i,t),Ai(t),u&512&&a!==null&&Rs(a,a.return),t.flags&32){var h=t.stateNode;try{he(h,"")}catch(qe){en(t,t.return,qe)}}if(u&4&&(h=t.stateNode,h!=null)){var m=t.memoizedProps,A=a!==null?a.memoizedProps:m,O=t.type,V=t.updateQueue;if(t.updateQueue=null,V!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&ft(h,m),Pe(O,A);var de=Pe(O,m);for(A=0;A<V.length;A+=2){var ye=V[A],Se=V[A+1];ye==="style"?xe(h,Se):ye==="dangerouslySetInnerHTML"?se(h,Se):ye==="children"?he(h,Se):L(h,ye,Se,de)}switch(O){case"input":Ft(h,m);break;case"textarea":yt(h,m);break;case"select":var _e=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!m.multiple;var ke=m.value;ke!=null?Ct(h,!!m.multiple,ke,!1):_e!==!!m.multiple&&(m.defaultValue!=null?Ct(h,!!m.multiple,m.defaultValue,!0):Ct(h,!!m.multiple,m.multiple?[]:"",!1))}h[Na]=m}catch(qe){en(t,t.return,qe)}}break;case 6:if(mi(i,t),Ai(t),u&4){if(t.stateNode===null)throw Error(n(162));h=t.stateNode,m=t.memoizedProps;try{h.nodeValue=m}catch(qe){en(t,t.return,qe)}}break;case 3:if(mi(i,t),Ai(t),u&4&&a!==null&&a.memoizedState.isDehydrated)try{va(i.containerInfo)}catch(qe){en(t,t.return,qe)}break;case 4:mi(i,t),Ai(t);break;case 13:mi(i,t),Ai(t),h=t.child,h.flags&8192&&(m=h.memoizedState!==null,h.stateNode.isHidden=m,!m||h.alternate!==null&&h.alternate.memoizedState!==null||(Au=$t())),u&4&&Op(t);break;case 22:if(ye=a!==null&&a.memoizedState!==null,t.mode&1?(En=(de=En)||ye,mi(i,t),En=de):mi(i,t),Ai(t),u&8192){if(de=t.memoizedState!==null,(t.stateNode.isHidden=de)&&!ye&&(t.mode&1)!==0)for(Ve=t,ye=t.child;ye!==null;){for(Se=Ve=ye;Ve!==null;){switch(_e=Ve,ke=_e.child,_e.tag){case 0:case 11:case 14:case 15:za(4,_e,_e.return);break;case 1:Rs(_e,_e.return);var He=_e.stateNode;if(typeof He.componentWillUnmount=="function"){u=_e,a=_e.return;try{i=u,He.props=i.memoizedProps,He.state=i.memoizedState,He.componentWillUnmount()}catch(qe){en(u,a,qe)}}break;case 5:Rs(_e,_e.return);break;case 22:if(_e.memoizedState!==null){Vp(Se);continue}}ke!==null?(ke.return=_e,Ve=ke):Vp(Se)}ye=ye.sibling}e:for(ye=null,Se=t;;){if(Se.tag===5){if(ye===null){ye=Se;try{h=Se.stateNode,de?(m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Se.stateNode,V=Se.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=fe("display",A))}catch(qe){en(t,t.return,qe)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=de?"":Se.memoizedProps}catch(qe){en(t,t.return,qe)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===t)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===t)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===t)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:mi(i,t),Ai(t),u&4&&Op(t);break;case 21:break;default:mi(i,t),Ai(t)}}function Ai(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(Dp(a)){var u=a;break e}a=a.return}throw Error(n(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(he(h,""),u.flags&=-33);var m=Up(t);bu(t,m,h);break;case 3:case 4:var A=u.stateNode.containerInfo,O=Up(t);Eu(t,O,A);break;default:throw Error(n(161))}}catch(V){en(t,t.return,V)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function Mg(t,i,a){Ve=t,Bp(t)}function Bp(t,i,a){for(var u=(t.mode&1)!==0;Ve!==null;){var h=Ve,m=h.child;if(h.tag===22&&u){var A=h.memoizedState!==null||$o;if(!A){var O=h.alternate,V=O!==null&&O.memoizedState!==null||En;O=$o;var de=En;if($o=A,(En=V)&&!de)for(Ve=h;Ve!==null;)A=Ve,V=A.child,A.tag===22&&A.memoizedState!==null?jp(h):V!==null?(V.return=A,Ve=V):jp(h);for(;m!==null;)Ve=m,Bp(m),m=m.sibling;Ve=h,$o=O,En=de}zp(t)}else(h.subtreeFlags&8772)!==0&&m!==null?(m.return=h,Ve=m):zp(t)}}function zp(t){for(;Ve!==null;){var i=Ve;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:En||Ko(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!En)if(a===null)u.componentDidMount();else{var h=i.elementType===i.type?a.memoizedProps:fi(i.type,a.memoizedProps);u.componentDidUpdate(h,a.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Vf(i,m,u);break;case 3:var A=i.updateQueue;if(A!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Vf(i,A,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var V=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&a.focus();break;case"img":V.src&&(a.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var ye=de.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&va(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}En||i.flags&512&&Mu(i)}catch(_e){en(i,i.return,_e)}}if(i===t){Ve=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function Vp(t){for(;Ve!==null;){var i=Ve;if(i===t){Ve=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ve=a;break}Ve=i.return}}function jp(t){for(;Ve!==null;){var i=Ve;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{Ko(4,i)}catch(V){en(i,a,V)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(V){en(i,h,V)}}var m=i.return;try{Mu(i)}catch(V){en(i,m,V)}break;case 5:var A=i.return;try{Mu(i)}catch(V){en(i,A,V)}}}catch(V){en(i,i.return,V)}if(i===t){Ve=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ve=O;break}Ve=i.return}}var Eg=Math.ceil,Zo=T.ReactCurrentDispatcher,wu=T.ReactCurrentOwner,ri=T.ReactCurrentBatchConfig,Tt=0,hn=null,sn=null,gn=0,Yn=0,Ps=dr(0),ln=0,Va=null,Xr=0,Qo=0,Tu=0,ja=null,Bn=null,Au=0,Is=1/0,Xi=null,Jo=!1,Cu=null,gr=null,el=!1,vr=null,tl=0,Ha=0,Nu=null,nl=-1,il=0;function Nn(){return(Tt&6)!==0?$t():nl!==-1?nl:nl=$t()}function _r(t){return(t.mode&1)===0?1:(Tt&2)!==0&&gn!==0?gn&-gn:ag.transition!==null?(il===0&&(il=Oe()),il):(t=xt,t!==0||(t=window.event,t=t===void 0?16:Hh(t.type)),t)}function xi(t,i,a,u){if(50<Ha)throw Ha=0,Nu=null,Error(n(185));pt(t,a,u),((Tt&2)===0||t!==hn)&&(t===hn&&((Tt&2)===0&&(Qo|=a),ln===4&&yr(t,gn)),zn(t,u),a===1&&Tt===0&&(i.mode&1)===0&&(Is=$t()+500,Po&&fr()))}function zn(t,i){var a=t.callbackNode;It(t,i);var u=zt(t,t===hn?gn:0);if(u===0)a!==null&&ha(a),t.callbackNode=null,t.callbackPriority=0;else if(i=u&-u,t.callbackPriority!==i){if(a!=null&&ha(a),i===1)t.tag===0?sg(Gp.bind(null,t)):Nf(Gp.bind(null,t)),tg(function(){(Tt&6)===0&&fr()}),a=null;else{switch(ki(u)){case 1:a=fa;break;case 4:a=N;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=Qp(a,Hp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Hp(t,i){if(nl=-1,il=0,(Tt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ls()&&t.callbackNode!==a)return null;var u=zt(t,t===hn?gn:0);if(u===0)return null;if((u&30)!==0||(u&t.expiredLanes)!==0||i)i=rl(t,u);else{i=u;var h=Tt;Tt|=2;var m=Xp();(hn!==t||gn!==i)&&(Xi=null,Is=$t()+500,Yr(t,i));do try{Tg();break}catch(O){Wp(t,O)}while(!0);qc(),Zo.current=m,Tt=h,sn!==null?i=0:(hn=null,gn=0,i=ln)}if(i!==0){if(i===2&&(h=rn(t),h!==0&&(u=h,i=Ru(t,h))),i===1)throw a=Va,Yr(t,0),yr(t,u),zn(t,$t()),a;if(i===6)yr(t,u);else{if(h=t.current.alternate,(u&30)===0&&!bg(h)&&(i=rl(t,u),i===2&&(m=rn(t),m!==0&&(u=m,i=Ru(t,m))),i===1))throw a=Va,Yr(t,0),yr(t,u),zn(t,$t()),a;switch(t.finishedWork=h,t.finishedLanes=u,i){case 0:case 1:throw Error(n(345));case 2:$r(t,Bn,Xi);break;case 3:if(yr(t,u),(u&130023424)===u&&(i=Au+500-$t(),10<i)){if(zt(t,0)!==0)break;if(h=t.suspendedLanes,(h&u)!==u){Nn(),t.pingedLanes|=t.suspendedLanes&h;break}t.timeoutHandle=Fc($r.bind(null,t,Bn,Xi),i);break}$r(t,Bn,Xi);break;case 4:if(yr(t,u),(u&4194240)===u)break;for(i=t.eventTimes,h=-1;0<u;){var A=31-be(u);m=1<<A,A=i[A],A>h&&(h=A),u&=~m}if(u=h,u=$t()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*Eg(u/1960))-u,10<u){t.timeoutHandle=Fc($r.bind(null,t,Bn,Xi),u);break}$r(t,Bn,Xi);break;case 5:$r(t,Bn,Xi);break;default:throw Error(n(329))}}}return zn(t,$t()),t.callbackNode===a?Hp.bind(null,t):null}function Ru(t,i){var a=ja;return t.current.memoizedState.isDehydrated&&(Yr(t,i).flags|=256),t=rl(t,i),t!==2&&(i=Bn,Bn=a,i!==null&&Pu(i)),t}function Pu(t){Bn===null?Bn=t:Bn.push.apply(Bn,t)}function bg(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var u=0;u<a.length;u++){var h=a[u],m=h.getSnapshot;h=h.value;try{if(!di(m(),h))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function yr(t,i){for(i&=~Tu,i&=~Qo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-be(i),u=1<<a;t[a]=-1,i&=~u}}function Gp(t){if((Tt&6)!==0)throw Error(n(327));Ls();var i=zt(t,0);if((i&1)===0)return zn(t,$t()),null;var a=rl(t,i);if(t.tag!==0&&a===2){var u=rn(t);u!==0&&(i=u,a=Ru(t,u))}if(a===1)throw a=Va,Yr(t,0),yr(t,i),zn(t,$t()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,$r(t,Bn,Xi),zn(t,$t()),null}function Iu(t,i){var a=Tt;Tt|=1;try{return t(i)}finally{Tt=a,Tt===0&&(Is=$t()+500,Po&&fr())}}function qr(t){vr!==null&&vr.tag===0&&(Tt&6)===0&&Ls();var i=Tt;Tt|=1;var a=ri.transition,u=xt;try{if(ri.transition=null,xt=1,t)return t()}finally{xt=u,ri.transition=a,Tt=i,(Tt&6)===0&&fr()}}function Lu(){Yn=Ps.current,Xt(Ps)}function Yr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,eg(a)),sn!==null)for(a=sn.return;a!==null;){var u=a;switch(jc(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&No();break;case 3:Cs(),Xt(Fn),Xt(yn),tu();break;case 5:Jc(u);break;case 4:Cs();break;case 13:Xt(Kt);break;case 19:Xt(Kt);break;case 10:Yc(u.type._context);break;case 22:case 23:Lu()}a=a.return}if(hn=t,sn=t=Sr(t.current,null),gn=Yn=i,ln=0,Va=null,Tu=Qo=Xr=0,Bn=ja=null,Hr!==null){for(i=0;i<Hr.length;i++)if(a=Hr[i],u=a.interleaved,u!==null){a.interleaved=null;var h=u.next,m=a.pending;if(m!==null){var A=m.next;m.next=h,u.next=A}a.pending=u}Hr=null}return t}function Wp(t,i){do{var a=sn;try{if(qc(),Vo.current=Wo,jo){for(var u=Zt.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}jo=!1}if(Wr=0,dn=on=Zt=null,Ua=!1,Fa=0,wu.current=null,a===null||a.return===null){ln=1,Va=i,sn=null;break}e:{var m=t,A=a.return,O=a,V=i;if(i=gn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,ye=O,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var ke=xp(A);if(ke!==null){ke.flags&=-257,gp(ke,A,O,m,i),ke.mode&1&&mp(m,de,i),i=ke,V=de;var He=i.updateQueue;if(He===null){var qe=new Set;qe.add(V),i.updateQueue=qe}else He.add(V);break e}else{if((i&1)===0){mp(m,de,i),Du();break e}V=Error(n(426))}}else if(Yt&&O.mode&1){var tn=xp(A);if(tn!==null){(tn.flags&65536)===0&&(tn.flags|=256),gp(tn,A,O,m,i),Wc(Ns(V,O));break e}}m=V=Ns(V,O),ln!==4&&(ln=2),ja===null?ja=[m]:ja.push(m),m=A;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var ee=fp(m,V,i);zf(m,ee);break e;case 1:O=V;var W=m.type,ie=m.stateNode;if((m.flags&128)===0&&(typeof W.getDerivedStateFromError=="function"||ie!==null&&typeof ie.componentDidCatch=="function"&&(gr===null||!gr.has(ie)))){m.flags|=65536,i&=-i,m.lanes|=i;var Ee=pp(m,O,i);zf(m,Ee);break e}}m=m.return}while(m!==null)}Yp(a)}catch(Ke){i=Ke,sn===a&&a!==null&&(sn=a=a.return);continue}break}while(!0)}function Xp(){var t=Zo.current;return Zo.current=Wo,t===null?Wo:t}function Du(){(ln===0||ln===3||ln===2)&&(ln=4),hn===null||(Xr&268435455)===0&&(Qo&268435455)===0||yr(hn,gn)}function rl(t,i){var a=Tt;Tt|=2;var u=Xp();(hn!==t||gn!==i)&&(Xi=null,Yr(t,i));do try{wg();break}catch(h){Wp(t,h)}while(!0);if(qc(),Tt=a,Zo.current=u,sn!==null)throw Error(n(261));return hn=null,gn=0,ln}function wg(){for(;sn!==null;)qp(sn)}function Tg(){for(;sn!==null&&!fo();)qp(sn)}function qp(t){var i=Zp(t.alternate,t,Yn);t.memoizedProps=t.pendingProps,i===null?Yp(t):sn=i,wu.current=null}function Yp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=vg(a,i,Yn),a!==null){sn=a;return}}else{if(a=_g(a,i),a!==null){a.flags&=32767,sn=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ln=6,sn=null;return}}if(i=i.sibling,i!==null){sn=i;return}sn=i=t}while(i!==null);ln===0&&(ln=5)}function $r(t,i,a){var u=xt,h=ri.transition;try{ri.transition=null,xt=1,Ag(t,i,a,u)}finally{ri.transition=h,xt=u}return null}function Ag(t,i,a,u){do Ls();while(vr!==null);if((Tt&6)!==0)throw Error(n(327));a=t.finishedWork;var h=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var m=a.lanes|a.childLanes;if(Dn(t,m),t===hn&&(sn=hn=null,gn=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||el||(el=!0,Qp(q,function(){return Ls(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=ri.transition,ri.transition=null;var A=xt;xt=1;var O=Tt;Tt|=4,wu.current=null,Sg(t,a),kp(a,t),qx(Dc),mo=!!Lc,Dc=Lc=null,t.current=a,Mg(a),hc(),Tt=O,xt=A,ri.transition=m}else t.current=a;if(el&&(el=!1,vr=t,tl=h),m=t.pendingLanes,m===0&&(gr=null),Be(a.stateNode),zn(t,$t()),i!==null)for(u=t.onRecoverableError,a=0;a<i.length;a++)h=i[a],u(h.value,{componentStack:h.stack,digest:h.digest});if(Jo)throw Jo=!1,t=Cu,Cu=null,t;return(tl&1)!==0&&t.tag!==0&&Ls(),m=t.pendingLanes,(m&1)!==0?t===Nu?Ha++:(Ha=0,Nu=t):Ha=0,fr(),null}function Ls(){if(vr!==null){var t=ki(tl),i=ri.transition,a=xt;try{if(ri.transition=null,xt=16>t?16:t,vr===null)var u=!1;else{if(t=vr,vr=null,tl=0,(Tt&6)!==0)throw Error(n(331));var h=Tt;for(Tt|=4,Ve=t.current;Ve!==null;){var m=Ve,A=m.child;if((Ve.flags&16)!==0){var O=m.deletions;if(O!==null){for(var V=0;V<O.length;V++){var de=O[V];for(Ve=de;Ve!==null;){var ye=Ve;switch(ye.tag){case 0:case 11:case 15:za(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Ve=Se;else for(;Ve!==null;){ye=Ve;var _e=ye.sibling,ke=ye.return;if(Lp(ye),ye===de){Ve=null;break}if(_e!==null){_e.return=ke,Ve=_e;break}Ve=ke}}}var He=m.alternate;if(He!==null){var qe=He.child;if(qe!==null){He.child=null;do{var tn=qe.sibling;qe.sibling=null,qe=tn}while(qe!==null)}}Ve=m}}if((m.subtreeFlags&2064)!==0&&A!==null)A.return=m,Ve=A;else e:for(;Ve!==null;){if(m=Ve,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:za(9,m,m.return)}var ee=m.sibling;if(ee!==null){ee.return=m.return,Ve=ee;break e}Ve=m.return}}var W=t.current;for(Ve=W;Ve!==null;){A=Ve;var ie=A.child;if((A.subtreeFlags&2064)!==0&&ie!==null)ie.return=A,Ve=ie;else e:for(A=W;Ve!==null;){if(O=Ve,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ko(9,O)}}catch(Ke){en(O,O.return,Ke)}if(O===A){Ve=null;break e}var Ee=O.sibling;if(Ee!==null){Ee.return=O.return,Ve=Ee;break e}Ve=O.return}}if(Tt=h,fr(),we&&typeof we.onPostCommitFiberRoot=="function")try{we.onPostCommitFiberRoot(te,t)}catch{}u=!0}return u}finally{xt=a,ri.transition=i}}return!1}function $p(t,i,a){i=Ns(a,i),i=fp(t,i,1),t=mr(t,i,1),i=Nn(),t!==null&&(pt(t,1,i),zn(t,i))}function en(t,i,a){if(t.tag===3)$p(t,t,a);else for(;i!==null;){if(i.tag===3){$p(i,t,a);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(gr===null||!gr.has(u))){t=Ns(a,t),t=pp(i,t,1),i=mr(i,t,1),t=Nn(),i!==null&&(pt(i,1,t),zn(i,t));break}}i=i.return}}function Cg(t,i,a){var u=t.pingCache;u!==null&&u.delete(i),i=Nn(),t.pingedLanes|=t.suspendedLanes&a,hn===t&&(gn&a)===a&&(ln===4||ln===3&&(gn&130023424)===gn&&500>$t()-Au?Yr(t,0):Tu|=a),zn(t,i)}function Kp(t,i){i===0&&((t.mode&1)===0?i=1:(i=$e,$e<<=1,($e&130023424)===0&&($e=4194304)));var a=Nn();t=Hi(t,i),t!==null&&(pt(t,i,a),zn(t,a))}function Ng(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Kp(t,a)}function Rg(t,i){var a=0;switch(t.tag){case 13:var u=t.stateNode,h=t.memoizedState;h!==null&&(a=h.retryLane);break;case 19:u=t.stateNode;break;default:throw Error(n(314))}u!==null&&u.delete(i),Kp(t,a)}var Zp;Zp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Fn.current)kn=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return kn=!1,gg(t,i,a);kn=(t.flags&131072)!==0}else kn=!1,Yt&&(i.flags&1048576)!==0&&Rf(i,Lo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;Yo(t,i),t=i.pendingProps;var h=Ss(i,yn.current);As(i,a),h=ru(null,i,u,t,h,a);var m=su();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,On(u)?(m=!0,Ro(i)):m=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,Zc(i),h.updater=Xo,i.stateNode=h,h._reactInternals=i,du(i,u,t,a),i=mu(null,i,u,!0,m,a)):(i.tag=0,Yt&&m&&Vc(i),Cn(null,i,h,a),i=i.child),i;case 16:u=i.elementType;e:{switch(Yo(t,i),t=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=Ig(u),t=fi(u,t),h){case 0:i=pu(null,i,u,t,a);break e;case 1:i=Ep(null,i,u,t,a);break e;case 11:i=vp(null,i,u,t,a);break e;case 14:i=_p(null,i,u,fi(u.type,t),a);break e}throw Error(n(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:fi(u,h),pu(t,i,u,h,a);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:fi(u,h),Ep(t,i,u,h,a);case 3:e:{if(bp(i),t===null)throw Error(n(387));u=i.pendingProps,m=i.memoizedState,h=m.element,Bf(t,i),Bo(i,u,null,a);var A=i.memoizedState;if(u=A.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){h=Ns(Error(n(423)),i),i=wp(t,i,u,a,h);break e}else if(u!==h){h=Ns(Error(n(424)),i),i=wp(t,i,u,a,h);break e}else for(qn=ur(i.stateNode.containerInfo.firstChild),Xn=i,Yt=!0,hi=null,a=Of(i,null,u,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),u===h){i=Wi(t,i,a);break e}Cn(t,i,u,a)}i=i.child}return i;case 5:return jf(i),t===null&&Gc(i),u=i.type,h=i.pendingProps,m=t!==null?t.memoizedProps:null,A=h.children,Uc(u,h)?A=null:m!==null&&Uc(u,m)&&(i.flags|=32),Mp(t,i),Cn(t,i,A,a),i.child;case 6:return t===null&&Gc(i),null;case 13:return Tp(t,i,a);case 4:return Qc(i,i.stateNode.containerInfo),u=i.pendingProps,t===null?i.child=ws(i,null,u,a):Cn(t,i,u,a),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:fi(u,h),vp(t,i,u,h,a);case 7:return Cn(t,i,i.pendingProps,a),i.child;case 8:return Cn(t,i,i.pendingProps.children,a),i.child;case 12:return Cn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,m=i.memoizedProps,A=h.value,Vt(Fo,u._currentValue),u._currentValue=A,m!==null)if(di(m.value,A)){if(m.children===h.children&&!Fn.current){i=Wi(t,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){A=m.child;for(var V=O.firstContext;V!==null;){if(V.context===u){if(m.tag===1){V=Gi(-1,a&-a),V.tag=2;var de=m.updateQueue;if(de!==null){de=de.shared;var ye=de.pending;ye===null?V.next=V:(V.next=ye.next,ye.next=V),de.pending=V}}m.lanes|=a,V=m.alternate,V!==null&&(V.lanes|=a),$c(m.return,a,i),O.lanes|=a;break}V=V.next}}else if(m.tag===10)A=m.type===i.type?null:m.child;else if(m.tag===18){if(A=m.return,A===null)throw Error(n(341));A.lanes|=a,O=A.alternate,O!==null&&(O.lanes|=a),$c(A,a,i),A=m.sibling}else A=m.child;if(A!==null)A.return=m;else for(A=m;A!==null;){if(A===i){A=null;break}if(m=A.sibling,m!==null){m.return=A.return,A=m;break}A=A.return}m=A}Cn(t,i,h.children,a),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,As(i,a),h=ni(h),u=u(h),i.flags|=1,Cn(t,i,u,a),i.child;case 14:return u=i.type,h=fi(u,i.pendingProps),h=fi(u.type,h),_p(t,i,u,h,a);case 15:return yp(t,i,i.type,i.pendingProps,a);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:fi(u,h),Yo(t,i),i.tag=1,On(u)?(t=!0,Ro(i)):t=!1,As(i,a),dp(i,u,h),du(i,u,h,a),mu(null,i,u,!0,t,a);case 19:return Cp(t,i,a);case 22:return Sp(t,i,a)}throw Error(n(156,i.tag))};function Qp(t,i){return Or(t,i)}function Pg(t,i,a,u){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function si(t,i,a,u){return new Pg(t,i,a,u)}function Uu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ig(t){if(typeof t=="function")return Uu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Y)return 11;if(t===G)return 14}return 2}function Sr(t,i){var a=t.alternate;return a===null?(a=si(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function sl(t,i,a,u,h,m){var A=2;if(u=t,typeof t=="function")Uu(t)&&(A=1);else if(typeof t=="string")A=5;else e:switch(t){case F:return Kr(a.children,h,m,i);case w:A=8,h|=8;break;case I:return t=si(12,a,i,h|2),t.elementType=I,t.lanes=m,t;case Q:return t=si(13,a,i,h),t.elementType=Q,t.lanes=m,t;case ae:return t=si(19,a,i,h),t.elementType=ae,t.lanes=m,t;case $:return al(a,h,m,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case B:A=10;break e;case z:A=9;break e;case Y:A=11;break e;case G:A=14;break e;case ce:A=16,u=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=si(A,a,i,h),i.elementType=t,i.type=u,i.lanes=m,i}function Kr(t,i,a,u){return t=si(7,t,u,i),t.lanes=a,t}function al(t,i,a,u){return t=si(22,t,u,i),t.elementType=$,t.lanes=a,t.stateNode={isHidden:!1},t}function Fu(t,i,a){return t=si(6,t,null,i),t.lanes=a,t}function Ou(t,i,a){return i=si(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function Lg(t,i,a,u,h){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mn(0),this.expirationTimes=mn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mn(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function ku(t,i,a,u,h,m,A,O,V){return t=new Lg(t,i,a,O,V),i===1?(i=1,m===!0&&(i|=8)):i=0,m=si(3,null,null,i),t.current=m,m.stateNode=t,m.memoizedState={element:u,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(m),t}function Dg(t,i,a){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:t,containerInfo:i,implementation:a}}function Jp(t){if(!t)return hr;t=t._reactInternals;e:{if(An(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(On(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(On(a))return Af(t,a,i)}return i}function em(t,i,a,u,h,m,A,O,V){return t=ku(a,u,!0,t,h,m,A,O,V),t.context=Jp(null),a=t.current,u=Nn(),h=_r(a),m=Gi(u,h),m.callback=i??null,mr(a,m,h),t.current.lanes=h,pt(t,h,u),zn(t,u),t}function ol(t,i,a,u){var h=i.current,m=Nn(),A=_r(h);return a=Jp(a),i.context===null?i.context=a:i.pendingContext=a,i=Gi(m,A),i.payload={element:t},u=u===void 0?null:u,u!==null&&(i.callback=u),t=mr(h,i,A),t!==null&&(xi(t,h,A,m),ko(t,h,A)),A}function ll(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function tm(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Bu(t,i){tm(t,i),(t=t.alternate)&&tm(t,i)}function Ug(){return null}var nm=typeof reportError=="function"?reportError:function(t){console.error(t)};function zu(t){this._internalRoot=t}cl.prototype.render=zu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));ol(t,i,null,null)},cl.prototype.unmount=zu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;qr(function(){ol(null,t,null,null)}),i[Bi]=null}};function cl(t){this._internalRoot=t}cl.prototype.unstable_scheduleHydration=function(t){if(t){var i=Lt();t={blockedOn:null,target:t,priority:i};for(var a=0;a<or.length&&i!==0&&i<or[a].priority;a++);or.splice(a,0,t),a===0&&Vh(t)}};function Vu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ul(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function im(){}function Fg(t,i,a,u,h){if(h){if(typeof u=="function"){var m=u;u=function(){var de=ll(A);m.call(de)}}var A=em(i,u,t,0,null,!1,!1,"",im);return t._reactRootContainer=A,t[Bi]=A.current,Aa(t.nodeType===8?t.parentNode:t),qr(),A}for(;h=t.lastChild;)t.removeChild(h);if(typeof u=="function"){var O=u;u=function(){var de=ll(V);O.call(de)}}var V=ku(t,0,!1,null,null,!1,!1,"",im);return t._reactRootContainer=V,t[Bi]=V.current,Aa(t.nodeType===8?t.parentNode:t),qr(function(){ol(i,V,a,u)}),V}function dl(t,i,a,u,h){var m=a._reactRootContainer;if(m){var A=m;if(typeof h=="function"){var O=h;h=function(){var V=ll(A);O.call(V)}}ol(i,A,t,h)}else A=Fg(a,i,t,h,u);return ll(A)}Pt=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=bt(i.pendingLanes);a!==0&&(Un(i,a|1),zn(i,$t()),(Tt&6)===0&&(Is=$t()+500,fr()))}break;case 13:qr(function(){var u=Hi(t,1);if(u!==null){var h=Nn();xi(u,t,1,h)}}),Bu(t,1)}},Gt=function(t){if(t.tag===13){var i=Hi(t,134217728);if(i!==null){var a=Nn();xi(i,t,134217728,a)}Bu(t,134217728)}},ci=function(t){if(t.tag===13){var i=_r(t),a=Hi(t,i);if(a!==null){var u=Nn();xi(a,t,i,u)}Bu(t,i)}},Lt=function(){return xt},ui=function(t,i){var a=xt;try{return xt=t,i()}finally{xt=a}},tt=function(t,i,a){switch(i){case"input":if(Ft(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var u=a[i];if(u!==t&&u.form===t.form){var h=Co(u);if(!h)throw Error(n(90));kt(u),Ft(u,h)}}}break;case"textarea":yt(t,a);break;case"select":i=a.value,i!=null&&Ct(t,!!a.multiple,i,!1)}},De=Iu,ve=qr;var Og={usingClientEntryPoint:!1,Events:[Ra,_s,Co,me,Ne,Iu]},Ga={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},kg={bundleType:Ga.bundleType,version:Ga.version,rendererPackageName:Ga.rendererPackageName,rendererConfig:Ga.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:T.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Fr(t),t===null?null:t.stateNode},findFiberByHostInstance:Ga.findFiberByHostInstance||Ug,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{te=hl.inject(kg),we=hl}catch{}}return Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Og,Vn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(n(200));return Dg(t,i,null,a)},Vn.createRoot=function(t,i){if(!Vu(t))throw Error(n(299));var a=!1,u="",h=nm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=ku(t,1,!1,null,null,a,!1,u,h),t[Bi]=i.current,Aa(t.nodeType===8?t.parentNode:t),new zu(i)},Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=Fr(i),t=t===null?null:t.stateNode,t},Vn.flushSync=function(t){return qr(t)},Vn.hydrate=function(t,i,a){if(!ul(i))throw Error(n(200));return dl(null,t,i,!0,a)},Vn.hydrateRoot=function(t,i,a){if(!Vu(t))throw Error(n(405));var u=a!=null&&a.hydratedSources||null,h=!1,m="",A=nm;if(a!=null&&(a.unstable_strictMode===!0&&(h=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(A=a.onRecoverableError)),i=em(i,null,t,1,a??null,h,!1,m,A),t[Bi]=i.current,Aa(t),u)for(t=0;t<u.length;t++)a=u[t],h=a._getVersion,h=h(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,h]:i.mutableSourceEagerHydrationData.push(a,h);return new cl(i)},Vn.render=function(t,i,a){if(!ul(i))throw Error(n(200));return dl(null,t,i,!1,a)},Vn.unmountComponentAtNode=function(t){if(!ul(t))throw Error(n(40));return t._reactRootContainer?(qr(function(){dl(null,null,t,!1,function(){t._reactRootContainer=null,t[Bi]=null})}),!0):!1},Vn.unstable_batchedUpdates=Iu,Vn.unstable_renderSubtreeIntoContainer=function(t,i,a,u){if(!ul(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return dl(t,i,a,!1,u)},Vn.version="18.3.1-next-f1338f8080-20240426",Vn}var dm;function $g(){if(dm)return Gu.exports;dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Gu.exports=Yg(),Gu.exports}var hm;function Kg(){if(hm)return fl;hm=1;var s=$g();return fl.createRoot=s.createRoot,fl.hydrateRoot=s.hydrateRoot,fl}var Zg=Kg();const Qg=p0(Zg);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jg=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),m0=(...s)=>s.filter((e,n,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ev={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=Le.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:r,className:o="",children:c,iconNode:d,...f},p)=>Le.createElement("svg",{ref:p,...ev,width:e,height:e,stroke:s,strokeWidth:r?Number(n)*24/Number(e):n,className:m0("lucide",o),...f},[...d.map(([x,y])=>Le.createElement(x,y)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=(s,e)=>{const n=Le.forwardRef(({className:r,...o},c)=>Le.createElement(tv,{ref:c,iconNode:e,className:m0(`lucide-${Jg(s)}`,r),...o}));return n.displayName=`${s}`,n};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Cd=wt("Activity",nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],tc=wt("ArrowRight",iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rv=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]],sv=wt("Atom",rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]],ov=wt("Binary",av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lv=[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]],x0=wt("Box",lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cv=[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]],uv=wt("Calculator",cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Ys=wt("Check",dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],g0=wt("ChevronRight",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ns=wt("CircleCheckBig",fv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Gl=wt("CircleCheck",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],xv=wt("Clock",mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],vv=wt("Copy",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],v0=wt("Download",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],_0=wt("ExternalLink",yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],y0=wt("FileText",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],S0=wt("Flame",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ev=[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]],bv=wt("GitCompare",Ev);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Tv=wt("Layers",wv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Wl=wt("Lock",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]],nc=wt("Menu",Cv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]],no=wt("Orbit",Nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],Pv=wt("Play",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Lv=wt("RefreshCw",Iv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],M0=wt("Search",Dv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Fv=wt("Send",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Xl=wt("ShieldCheck",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ic=wt("Shield",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],$s=wt("Sparkles",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]],Vv=wt("Terminal",zv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Hv=wt("Users",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Wv=wt("Volume2",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],qv=wt("VolumeX",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],rc=wt("X",Yv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $v=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],na=wt("Zap",$v),Kv=({activeConcept:s,onSelectConcept:e})=>{const n=[{id:"A",name:"Концепция А",label:"Institutional Lab",desc:"Премиальный финтех-стиль (OpenZeppelin / Trail of Bits). Швейцарская строгость, математические инварианты, глубокий обсидиан.",icon:ic,accent:"border-cyan-400 text-cyan-400 bg-cyan-400/10"},{id:"B",name:"Концепция Б",label:"Terminal Punk",desc:"Наступательная безопасность (Zellic / Paradigm). Терминал, консольный фаззинг, diff-просмотрщик, фосфорный зеленый.",icon:Vv,accent:"border-phosphor text-phosphor bg-phosphor/10"},{id:"C",name:"Концепция В",label:"Neo-Tech ZK",desc:"Футуристическая криптография (EigenLayer / Celestia). 3D-топология, ZK-proofs, стеклянный нео-интерфейс, фиолетовый космос.",icon:$s,accent:"border-purple-400 text-purple-300 bg-purple-400/10"},{id:"D",name:"Концепция D",label:"Hyper-3D Kinetic",desc:"Максимальный 3D-фарш (Three.js WebGL). Интерактивная кинетическая 3D-скульптура, гироскопический 3D-параллакс, процедурный звук.",icon:x0,accent:"border-emerald-400 text-emerald-300 bg-emerald-400/10"}];return l.jsx("div",{className:"sticky top-0 z-[100] bg-black/95 border-b border-white/10 backdrop-blur-xl px-4 py-2.5 font-mono shadow-2xl transition-all",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs text-gray-300",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"font-bold tracking-wider text-white",children:"ART_DIRECTION_SWITCHER:"}),l.jsx("span",{className:"hidden lg:inline text-gray-400 text-[11px]",children:"Сравните 4 варианта дизайна в 1 клик:"})]}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2 w-full xl:w-auto",children:n.map(r=>{const o=r.icon,c=s===r.id;return l.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl text-xs transition-all duration-200 border cursor-pointer ${c?`${r.accent} font-bold shadow-lg ring-1 ring-white/20 scale-[1.02]`:"bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"}`,title:r.desc,children:[l.jsx(o,{className:"w-3.5 h-3.5 shrink-0"}),l.jsx("span",{className:"font-semibold",children:r.name}),l.jsxs("span",{className:"hidden sm:inline text-[10px] opacity-75",children:["(",r.label.split(" ")[0],")"]}),c&&l.jsx(Ys,{className:"w-3 h-3 ml-auto hidden md:inline"})]},r.id)})})]})})},E0=()=>{const s=Le.useRef(null),[e,n]=Le.useState({a:-3,b:7}),[r,o]=Le.useState(!0);return Le.useEffect(()=>{const c=s.current;if(!c)return;const d=c.getContext("2d");if(!d)return;let f,p=0,x=0,y=0,S=!1;const g=()=>{const _=c.getBoundingClientRect();c.width=_.width*window.devicePixelRatio,c.height=_.height*window.devicePixelRatio,d.scale(window.devicePixelRatio,window.devicePixelRatio)};g(),window.addEventListener("resize",g);const M=_=>{const v=c.getBoundingClientRect();x=_.clientX-v.left,y=_.clientY-v.top,S=!0},E=()=>{S=!1};c.addEventListener("mousemove",M),c.addEventListener("mouseleave",E);const C=()=>{p+=.02;const _=c.getBoundingClientRect(),v=_.width,R=_.height;d.clearRect(0,0,v,R);const L=v*.48,T=R*.52,D=Math.min(v,R)/14;d.strokeStyle="rgba(30, 41, 59, 0.4)",d.lineWidth=1;const P=D*1.5;for(let Q=L%P;Q<v;Q+=P)d.beginPath(),d.moveTo(Q,0),d.lineTo(Q,R),d.stroke();for(let Q=T%P;Q<R;Q+=P)d.beginPath(),d.moveTo(0,Q),d.lineTo(v,Q),d.stroke();d.strokeStyle="rgba(0, 255, 102, 0.15)",d.lineWidth=1.5,d.beginPath(),d.moveTo(0,T),d.lineTo(v,T),d.moveTo(L,0),d.lineTo(L,R),d.stroke(),d.font='10px "JetBrains Mono", monospace',d.fillStyle="rgba(148, 163, 184, 0.5)",d.fillText("0x0 (GENESIS_POINT)",L+8,T-8),d.fillText("+X (SLOPE_SEC)",v-110,T-8),d.fillText("+Y (AFFINE)",L+8,16);const F=e.a+(S?(x/v-.5)*1.5:Math.sin(p*.5)*.4),w=e.b+(S?(y/R-.5)*2:Math.cos(p*.4)*.8),I=Q=>{d.beginPath();let ae=!1;for(let G=0;G<v;G+=2){const ce=(G-L)/D,$=Math.pow(ce,3)+F*ce+w;if($>=0){const X=Q*Math.sqrt($),re=T-X*D;ae?d.lineTo(G,re):(d.moveTo(G,re),ae=!0)}else ae=!1}d.stroke()};d.shadowColor="#00FF66",d.shadowBlur=14,d.strokeStyle="#00FF66",d.lineWidth=2.5,I(1),I(-1),d.shadowBlur=0;const B=1.2+Math.sin(p*.8)*.8,z=Math.pow(B,3)+F*B+w;if(z>0){const Q=Math.sqrt(z),ae=L+B*D,G=T-Q*D,ce=p*1.2,$=220,X=ae+Math.cos(ce)*$,re=G+Math.sin(ce)*$;d.strokeStyle="rgba(0, 240, 255, 0.4)",d.setLineDash([4,4]),d.beginPath(),d.moveTo(ae-Math.cos(ce)*$,G-Math.sin(ce)*$),d.lineTo(X,re),d.stroke(),d.setLineDash([]),d.fillStyle="#00FF66",d.beginPath(),d.arc(ae,G,5,0,Math.PI*2),d.fill(),d.fillStyle="#00F0FF",d.font='11px "JetBrains Mono", monospace',d.fillText(`P_NODE(x:${B.toFixed(2)}, y:${Q.toFixed(2)})`,ae+10,G-8);const oe=T+Q*D;d.strokeStyle="rgba(255, 46, 91, 0.4)",d.beginPath(),d.moveTo(ae,G),d.lineTo(ae,oe),d.stroke(),d.fillStyle="#FF2E5B",d.beginPath(),d.arc(ae,oe,4,0,Math.PI*2),d.fill(),d.fillText("-P (INVARIANT_CHECK)",ae+10,oe+15)}if(r){const Q=(Math.sin(p*1.5)*.5+.5)*R,ae=d.createLinearGradient(0,Q-40,0,Q+40);ae.addColorStop(0,"rgba(0, 255, 102, 0)"),ae.addColorStop(.5,"rgba(0, 255, 102, 0.08)"),ae.addColorStop(1,"rgba(0, 255, 102, 0)"),d.fillStyle=ae,d.fillRect(0,Q-40,v,80),d.strokeStyle="rgba(0, 255, 102, 0.5)",d.lineWidth=1,d.beginPath(),d.moveTo(0,Q),d.lineTo(v,Q),d.stroke(),d.font='10px "JetBrains Mono", monospace',d.fillStyle="#00FF66",d.fillText(`[RADAR::FORMAL_VERIFICATION_PASS_0x${Math.floor(p*20%999).toString(16).toUpperCase()}]`,20,Q-8)}[{x:-1.2,y:1.8,label:"EVM::UniswapV4_Hook",verified:!0,pulse:Math.sin(p*3)},{x:.5,y:-2.3,label:"SVM::Raydium_CPI",verified:!0,pulse:Math.cos(p*2.5)},{x:2.1,y:3.1,label:"MOVE::Aptos_LendingVault",verified:!0,pulse:Math.sin(p*4)},{x:3.2,y:-4.4,label:"COSMOS::IBC_ChannelGuard",verified:!0,pulse:Math.cos(p*3.2)}].forEach(Q=>{const ae=L+Q.x*D,G=T-Q.y*D;ae>0&&ae<v&&G>0&&G<R&&(d.beginPath(),d.arc(ae,G,4+Math.abs(Q.pulse)*2,0,Math.PI*2),d.fillStyle=Q.verified?"#00FF66":"#FF2E5B",d.fill(),d.strokeStyle=Q.verified?"rgba(0, 255, 102, 0.3)":"rgba(255, 46, 91, 0.3)",d.lineWidth=1,d.beginPath(),d.arc(ae,G,12+Math.abs(Q.pulse)*6,0,Math.PI*2),d.stroke(),d.font='10px "JetBrains Mono", monospace',d.fillStyle="#CBD5E1",d.fillText(`[${Q.label}]`,ae+14,G+4))}),f=requestAnimationFrame(C)};return C(),()=>{window.removeEventListener("resize",g),c.removeEventListener("mousemove",M),c.removeEventListener("mouseleave",E),cancelAnimationFrame(f)}},[e,r]),l.jsxs("div",{className:"relative w-full h-[480px] lg:h-[560px] bg-carbon/90 border border-panelBorder rounded-lg overflow-hidden scanlines",children:[l.jsxs("div",{className:"absolute top-3 left-4 z-30 flex items-center gap-3 text-xs text-muted-gray bg-void/80 px-3 py-1.5 rounded border border-panelBorder",children:[l.jsx("span",{className:"inline-block w-2 h-2 rounded-full bg-phosphor animate-pulse"}),l.jsx("span",{className:"text-phosphor font-bold",children:"ELLIPTIC_CURVE_SIMULATOR"}),l.jsx("span",{className:"text-gray-500",children:"|"}),l.jsxs("span",{className:"text-cyan-400 font-mono",children:["y² = x³ + (",e.a,")x + (",e.b,") (mod 𝔽ₚ)"]})]}),l.jsxs("div",{className:"absolute top-3 right-4 z-30 flex items-center gap-2",children:[l.jsx("button",{onClick:()=>o(!r),className:"text-[11px] px-2.5 py-1 rounded bg-panel border border-panelBorder hover:border-phosphor/50 text-gray-300 hover:text-phosphor transition-colors",children:r?"[PAUSE_SCAN]":"[RESUME_SCAN]"}),l.jsx("button",{onClick:()=>n({a:-3,b:e.b%12+3}),className:"text-[11px] px-2.5 py-1 rounded bg-panel border border-panelBorder hover:border-cyber-cyan/50 text-gray-300 hover:text-cyber-cyan transition-colors",children:"[MUTATE_CURVE]"})]}),l.jsx("canvas",{ref:s,className:"w-full h-full cursor-crosshair block"}),l.jsxs("div",{className:"absolute bottom-3 left-4 right-4 z-30 flex flex-wrap items-center justify-between text-[11px] text-gray-400 bg-void/85 backdrop-blur px-3 py-1.5 rounded border border-panelBorder",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("span",{children:["COORDINATES: ",l.jsx("strong",{className:"text-phosphor",children:"AFFINE_WEIERSTRASS"})]}),l.jsxs("span",{className:"hidden sm:inline",children:["FIELD: ",l.jsx("strong",{className:"text-cyan-400",children:"secp256k1 & BLS12-381"})]}),l.jsxs("span",{className:"hidden md:inline",children:["SOLVER: ",l.jsx("strong",{className:"text-amber-400",children:"Z3 SMT Invariant Verifier"})]})]}),l.jsxs("div",{className:"text-phosphor flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 bg-phosphor rounded-full"}),l.jsx("span",{children:"INTERACTIVE TOPOLOGY ACTIVE"})]})]})]})},Zv=()=>{const[s,e]=Le.useState("evm"),[n,r]=Le.useState(!1),[o,c]=Le.useState(!1),[d,f]=Le.useState(""),p=[{title:"Smart Contract Security Audit",badge:"Multichain Core",desc:"In-depth manual bytecode reverse engineering and automated invariant testing across Solidity, Rust/Anchor, Move, and CosmWasm.",deliverable:"Comprehensive audit report with proof-of-concept exploits and compile-ready remediation."},{title:"Mathematical Formal Verification",badge:"Z3 & SMT Solvers",desc:"Mathematical proofs of system invariants using state-of-the-art deductive verifiers, certifying that critical failure states are logically impossible.",deliverable:"Formal mathematical proof specification and machine-checked theorem artifacts."},{title:"L1/L2 Protocol Architecture & Consensus",badge:"Infrastructure Grade",desc:"Verification of state transition functions, mempool censorship resistance, sequencer MEV mitigation, and cross-chain messaging bridges.",deliverable:"Architectural vulnerability assessment and consensus edge-case stress matrix."},{title:"Zero-Knowledge Circuit Verification",badge:"ZK-SNARKs & STARKs",desc:"Rigorous analysis of Circom, Halo2, and PlonK arithmetic circuits to identify under-constrained signals and soundness errors.",deliverable:"Soundness verification and constraint completeness certification."}],x=[{phase:"PHASE 01",title:"Threat Modeling & Specification Extraction",desc:"Our senior cryptographers map protocol assumptions, liquidity invariant boundaries, and privilege hierarchies."},{phase:"PHASE 02",title:"Automated Fuzzing & Static Analysis",desc:"Deployment of specialized mutation-based harnesses running millions of state transitions per minute."},{phase:"PHASE 03",title:"Manual Adversarial Peer Review",desc:"Two independent lead security researchers reverse-engineer critical logic paths to discover 0-day architectural flaws."},{phase:"PHASE 04",title:"Remediation Review & Verification",desc:"Full regression testing on client remediation commits to guarantee patches do not introduce secondary attack surfaces."},{phase:"PHASE 05",title:"Cryptographic Sign-off & Publication",desc:"Issuance of a cryptographically signed certification with SHA-256 commit verification for stakeholder trust."}],y={evm:{name:"EVM Core & Layer-2 Protocols",stack:"Solidity / Yul / Vyper",invariants:["Atomic balance conservation: sum(userBalances) <= totalAssets","Transient storage (EIP-1153) reentry fence clearance across callframes","Uniswap v4 dynamic hook execution privilege boundary assertions","ERC-4337 Account Abstraction paymaster gas exhaustion bounding"],tools:["Foundry Invariant Harness","Halmos Symbolic Engine","Certora Prover","Slither Detectors"],sampleCode:`// FORMAL SPEC: Invariant Solvency
function check_solvency() public view {
    assert(vault.totalAssets() >= vault.totalDebt());
}`},svm:{name:"Solana SVM & High-Throughput Execution",stack:"Rust / Anchor / Native BPF",invariants:["PDA bump canonicalization: Pubkey::create_program_address() == vault.key","Missing signer constraint checks on state mutating CPI instructions","Remaining accounts array uniqueness and discriminator verification","Clock sysvar drift & slot timestamp manipulation resilience"],tools:["Anchor Linter Suite","Trident Fuzzing Framework","Solana BPF Instruction Trace"],sampleCode:`// ANCHOR SPEC: Canonical Bump Verification
#[account(
    mut,
    seeds = [b"vault", authority.key().as_ref()],
    bump = vault.canonical_bump
)]`},move:{name:"Move Object Model & Linear Logic",stack:"Aptos / Sui Move Bytecode",invariants:["Hot Potato pattern: debt receipts must be unpacked strictly during settlement","Dynamic field borrow_mut concurrency isolation across parallel PTB runs","Linear capability preservation: no capability leakage through public entry calls","Package upgrade immutability and package dependency pinning"],tools:["Aptos Move Prover","Sui Bytecode Verifier","MSL (Move Spec Language)"],sampleCode:`// MOVE PROVER: Hot Potato Linear Receipt
spec repay_flash_loan {
    aborts_if payment.value < receipt.amount + receipt.fee;
    ensures pool.balance == old(pool.balance) + receipt.fee;
}`},cosmos:{name:"Cosmos Appchains & Interchain IBC",stack:"Rust / CosmWasm / Tendermint",invariants:["IBC packet sequence nonces must strictly increment monotonically","CosmWasm SubMsg execution reply ordering and state rollback atomicity","Unbounded storage iteration gas exhaustion prevention in state pruning","Cross-chain light client header verification timeout validation"],tools:["CosmWasm Multi-Test","Hermes IBC Verifier","Tendermint Consensus Fuzzer"],sampleCode:`// COSMWASM SPEC: Sequence Nonce
ensure!(packet.sequence == state.expected_sequence, ContractError::InvalidPacketSequence);`}},S=[{name:"AuraVault Multichain Collateral",tvl:"$2,400,000,000 USD",chain:"EVM (Arbitrum & Mainnet)",type:"CDP & Lending",reportId:"EC-2026-A084",status:"VERIFIED & CERTIFIED"},{name:"Hyperion IBC Cross-Chain Relayer",tvl:"$1,850,000,000 USD",chain:"Cosmos Interchain",type:"Bridge Infrastructure",reportId:"EC-2026-A071",status:"VERIFIED & CERTIFIED"},{name:"SolFlux Asynchronous CLMM",tvl:"$890,000,000 USD",chain:"Solana SVM",type:"Concentrated Liquidity",reportId:"EC-2026-A079",status:"VERIFIED & CERTIFIED"},{name:"Aptos Prime Liquid Staking",tvl:"$640,000,000 USD",chain:"Move VM",type:"Liquid Staking Protocol",reportId:"EC-2026-A064",status:"VERIFIED & CERTIFIED"}],g=[{title:"Formal Mathematical Proving",badge:"Z3 / SMT-LIB2",desc:"Machine-checkable proofs ensuring critical smart contract invariants hold across infinite state spaces."},{title:"SOC-2 Type II Certified Process",badge:"Enterprise Trust",desc:"Full audit trail, encrypted key custody, and strict confidentiality protocols for private pre-audit codebases."},{title:"24/7 Critical Incident War-Room",badge:"SLA < 2 Hours",desc:"Immediate mobilization of lead offensive researchers if anomalous mainnet behavior is detected."},{title:"Post-Deployment Realtime Invariants",badge:"Continuous Guard",desc:"Ongoing cryptographic invariant monitoring hooks integrated directly with RPC nodes and alerting relayers."}],M=S.filter(E=>E.name.toLowerCase().includes(d.toLowerCase())||E.chain.toLowerCase().includes(d.toLowerCase()));return l.jsxs("div",{className:"min-h-screen bg-[#070A12] text-slate-200 font-sans selection:bg-cyan-500 selection:text-black",children:[l.jsx("div",{className:"bg-[#0B101D] border-b border-slate-800/80 text-xs text-slate-400 py-1.5 px-4 sm:px-8",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-400 font-medium",children:[l.jsx(Xl,{className:"w-3.5 h-3.5 text-cyan-400"}),l.jsx("span",{children:"INSTITUTIONAL GRADE SECURITY"})]}),l.jsx("span",{className:"text-slate-600 hidden sm:inline",children:"•"}),l.jsx("span",{className:"hidden sm:inline",children:"FORMAL VERIFICATION & CODE AUDITING"})]}),l.jsxs("div",{className:"flex items-center gap-6 font-mono text-[11px]",children:[l.jsxs("span",{children:["TOTAL VALUE SECURED: ",l.jsx("strong",{className:"text-slate-100",children:"$14.82B+"})]}),l.jsxs("span",{children:["ENGAGEMENTS: ",l.jsx("strong",{className:"text-slate-100",children:"450+"})]})]})]})}),l.jsxs("header",{className:"sticky top-11 z-40 bg-[#070A12]/90 backdrop-blur-md border-b border-slate-800/80",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 via-indigo-500/20 to-transparent border border-cyan-500/30 flex items-center justify-center",children:l.jsxs("svg",{className:"w-6 h-6 text-cyan-400",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[l.jsx("path",{d:"M4 19C9 19 9 5 15 5S15 19 20 19",strokeLinecap:"round"}),l.jsx("circle",{cx:"15",cy:"5",r:"2.5",fill:"#00E5FF"})]})}),l.jsxs("div",{children:[l.jsxs("span",{className:"text-lg font-bold tracking-tight text-white flex items-center gap-1.5 font-sans",children:["ELASTIC CURVE",l.jsx("span",{className:"text-[10px] text-cyan-400 border border-cyan-500/30 bg-cyan-500/10 px-1.5 py-0.5 rounded font-mono",children:"LABS"})]}),l.jsx("span",{className:"text-[11px] text-slate-400 block -mt-1 tracking-wider uppercase",children:"Institutional Security & Verification"})]})]}),l.jsxs("nav",{className:"hidden lg:flex items-center gap-8 text-sm text-slate-300 font-medium",children:[l.jsx("a",{href:"#services",className:"hover:text-cyan-400 transition-colors",children:"Services"}),l.jsx("a",{href:"#methodology",className:"hover:text-cyan-400 transition-colors",children:"Methodology"}),l.jsx("a",{href:"#matrix",className:"hover:text-cyan-400 transition-colors",children:"Multichain Matrix"}),l.jsx("a",{href:"#ledger",className:"hover:text-cyan-400 transition-colors",children:"Verified Ledger"}),l.jsx("a",{href:"#standards",className:"hover:text-cyan-400 transition-colors",children:"Standards"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>r(!0),className:"bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-5 py-2.5 rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/20 flex items-center gap-2 hover:scale-[1.02]",children:[l.jsx(Wl,{className:"w-4 h-4"}),l.jsx("span",{children:"Request Audit"})]}),l.jsx("button",{onClick:()=>c(!o),className:"lg:hidden p-2 text-slate-400 hover:text-white",children:o?l.jsx(rc,{className:"w-6 h-6"}):l.jsx(nc,{className:"w-6 h-6"})})]})]}),o&&l.jsxs("div",{className:"lg:hidden bg-[#0A0F1A] border-b border-slate-800 px-4 py-4 space-y-3 font-mono text-xs",children:[l.jsx("a",{href:"#services",onClick:()=>c(!1),className:"block text-slate-300 hover:text-cyan-400 py-1.5",children:"[01_SERVICES]"}),l.jsx("a",{href:"#methodology",onClick:()=>c(!1),className:"block text-slate-300 hover:text-cyan-400 py-1.5",children:"[02_METHODOLOGY]"}),l.jsx("a",{href:"#matrix",onClick:()=>c(!1),className:"block text-slate-300 hover:text-cyan-400 py-1.5",children:"[03_MULTICHAIN_MATRIX]"}),l.jsx("a",{href:"#ledger",onClick:()=>c(!1),className:"block text-slate-300 hover:text-cyan-400 py-1.5",children:"[04_VERIFIED_LEDGER]"}),l.jsx("a",{href:"#standards",onClick:()=>c(!1),className:"block text-slate-300 hover:text-cyan-400 py-1.5",children:"[05_STANDARDS]"})]})]}),l.jsx("section",{className:"relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[l.jsxs("div",{className:"lg:col-span-6 space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),"Institutional Multichain Security Firm"]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]",children:["Mathematical Inevitability for ",l.jsx("br",{className:"hidden sm:inline"}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400",children:"Multichain Protocols"})]}),l.jsx("p",{className:"text-base text-slate-400 leading-relaxed max-w-xl",children:"Elastic Curve provides institutional-grade smart contract audits, formal Z3 verification, and cryptographic stress-testing for Tier-1 Web3 foundations and decentralized finance protocols."}),l.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-4 border-t border-slate-800",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-white font-mono",children:"$14.8B+"}),l.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"TVL Defended"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-cyan-400 font-mono",children:"0"}),l.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"Post-Signoff Exploits"})]}),l.jsxs("div",{children:[l.jsx("div",{className:"text-2xl sm:text-3xl font-bold text-indigo-400 font-mono",children:"100%"}),l.jsx("div",{className:"text-xs text-slate-400 mt-1",children:"Proof Verification"})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row gap-4",children:[l.jsxs("button",{onClick:()=>r(!0),className:"flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-lg text-sm transition-all shadow-lg shadow-cyan-500/25 cursor-pointer",children:[l.jsx("span",{children:"Initialize Engagement"}),l.jsx(tc,{className:"w-4 h-4"})]}),l.jsxs("a",{href:"#ledger",className:"flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-slate-700 px-6 py-3.5 rounded-lg text-sm transition-colors cursor-pointer",children:[l.jsx("span",{children:"View Public Reports"}),l.jsx(g0,{className:"w-4 h-4 text-slate-400"})]})]}),l.jsxs("div",{className:"text-xs text-slate-500 flex items-center gap-2 pt-2",children:[l.jsx(ns,{className:"w-4 h-4 text-emerald-400 shrink-0"}),l.jsx("span",{children:"Dedicated partner-led reviews • Comprehensive remediation sprints • War-room SLA"})]})]}),l.jsx("div",{className:"lg:col-span-6",children:l.jsxs("div",{className:"rounded-xl border border-slate-800 bg-[#0B111D] p-2 shadow-2xl relative overflow-hidden",children:[l.jsxs("div",{className:"px-4 py-2.5 border-b border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono",children:[l.jsxs("span",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"AFFINE_CURVE_FORMAL_PROVER"]}),l.jsx("span",{className:"text-cyan-400",children:"secp256k1 & BLS12-381"})]}),l.jsx(E0,{})]})})]})}),l.jsx("section",{className:"border-y border-slate-800/80 bg-[#0A0F1A] py-8",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsx("div",{className:"text-center text-xs text-slate-500 uppercase tracking-widest font-mono mb-6",children:"TRUSTED BY INSTITUTIONAL FOUNDATIONS & DEFI CAPITALS"}),l.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-6 gap-6 items-center justify-items-center opacity-70 grayscale hover:grayscale-0 transition-all",children:[l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"ETHEREUM_L2"}),l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"ARBITRUM_DAO"}),l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"SOLANA_CORE"}),l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"COSMOS_HUB"}),l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"APTOS_FOUND"}),l.jsx("div",{className:"text-sm font-bold tracking-wider text-slate-300 font-mono",children:"MAKER_VAULTS"})]})]})}),l.jsxs("section",{id:"services",className:"scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2",children:"PRACTICE AREAS"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Comprehensive Multichain Security Suite"}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base mt-3",children:"We operate across the entire lifecycle of distributed systems, from algorithmic consensus down to execution bytecode and zero-knowledge circuit soundness."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:p.map((E,C)=>l.jsxs("div",{className:"bg-[#0B101D] border border-slate-800 hover:border-cyan-500/40 rounded-xl p-8 transition-all duration-200 group hover:shadow-xl hover:shadow-cyan-500/5 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-mono font-medium text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full",children:E.badge}),l.jsxs("span",{className:"text-slate-600 font-mono text-xs",children:["PRACTICE_0",C+1]})]}),l.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-400 transition-colors mb-3",children:E.title}),l.jsx("p",{className:"text-slate-400 text-sm leading-relaxed mb-6",children:E.desc})]}),l.jsxs("div",{className:"border-t border-slate-800/80 pt-4 flex items-start gap-2 text-xs text-slate-400 font-mono",children:[l.jsx(ns,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),l.jsxs("span",{children:["DELIVERABLE: ",E.deliverable]})]})]},C))})]}),l.jsx("section",{id:"methodology",className:"scroll-mt-28 py-20 bg-[#0A0F1A] border-y border-slate-800/80",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-3xl mb-14",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2",children:"VERIFICATION LIFECYCLE"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"The 5-Stage Institutional Audit Pipeline"}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base mt-2",children:"Every audit follows a rigorous, peer-reviewed engineering protocol to guarantee zero stone is left unturned."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-5 gap-4",children:x.map((E,C)=>l.jsxs("div",{className:"bg-[#0B101D] border border-slate-800 rounded-xl p-5 relative flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-cyan-400 font-mono text-xs font-bold mb-2",children:E.phase}),l.jsx("h4",{className:"text-sm font-bold text-white mb-2 leading-snug",children:E.title}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:E.desc})]}),l.jsx("div",{className:"mt-6 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-mono",children:"GATE: 100% SIGN-OFF"})]},C))})]})}),l.jsxs("section",{id:"matrix",className:"scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"max-w-3xl mb-12",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2",children:"CROSS-ECOSYSTEM SPECIFICATION"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Institutional Multichain Matrix"}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base mt-2",children:"Select an execution environment to view formal verification invariants, bytecode analysis heuristics, and automated toolchains."})]}),l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8",children:[{id:"evm",label:"EVM Architecture",sub:"Ethereum & Rollups"},{id:"svm",label:"Solana SVM",sub:"Rust / BPF Execution"},{id:"move",label:"Move Language",sub:"Aptos & Sui Objects"},{id:"cosmos",label:"Cosmos Interchain",sub:"CosmWasm & Tendermint"}].map(E=>{const C=s===E.id;return l.jsxs("button",{onClick:()=>e(E.id),className:`text-left p-4 rounded-xl border transition-all cursor-pointer ${C?"bg-[#0B101D] border-cyan-400 text-white shadow-lg shadow-cyan-500/10":"bg-[#0A0F1A] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsxs("span",{className:`text-xs font-mono font-bold ${C?"text-cyan-400":"text-slate-500"}`,children:["0",E.id==="evm"?"1":E.id==="svm"?"2":E.id==="move"?"3":"4","::CHAIN"]}),C&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"})]}),l.jsx("div",{className:"font-bold text-sm text-white mt-1",children:E.label}),l.jsx("div",{className:"text-xs text-slate-400 mt-0.5",children:E.sub})]},E.id)})}),(()=>{const E=y[s];return l.jsxs("div",{className:"bg-[#0B101D] border border-slate-800 rounded-xl p-6 lg:p-8 space-y-6",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-4",children:[l.jsxs("div",{children:[l.jsx("h3",{className:"text-xl font-bold text-white font-sans",children:E.name}),l.jsx("span",{className:"text-xs font-mono text-cyan-400",children:E.stack})]}),l.jsx("div",{className:"flex items-center gap-2",children:E.tools.map((C,_)=>l.jsx("span",{className:"bg-[#070A12] border border-slate-800 text-slate-300 text-[11px] font-mono px-2.5 py-1 rounded",children:C},_))})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-3",children:[l.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase font-bold tracking-wider",children:"FORMALLY VERIFIED MATHEMATICAL INVARIANTS:"}),l.jsx("div",{className:"space-y-2",children:E.invariants.map((C,_)=>l.jsxs("div",{className:"bg-[#070A12] border border-slate-800/80 p-3 rounded-lg flex items-start gap-3",children:[l.jsx(ns,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),l.jsx("span",{className:"text-xs text-slate-300 font-mono leading-relaxed",children:C})]},_))})]}),l.jsxs("div",{className:"lg:col-span-5 space-y-2",children:[l.jsx("h4",{className:"text-xs font-mono text-slate-400 uppercase font-bold tracking-wider",children:"SPECIFICATION DEFINITION ARTIFACT:"}),l.jsx("pre",{className:"bg-[#070A12] border border-slate-800 p-4 rounded-lg text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed",children:l.jsx("code",{children:E.sampleCode})})]})]})]})})()]}),l.jsx("section",{id:"ledger",className:"scroll-mt-28 py-20 bg-[#0A0F1A] border-y border-slate-800/80 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4",children:[l.jsxs("div",{children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2",children:"AUDIT CERTIFICATIONS"}),l.jsx("h2",{className:"text-3xl font-extrabold text-white tracking-tight",children:"Public Verification Ledger"}),l.jsx("p",{className:"text-slate-400 text-sm mt-1",children:"Search cryptographically certified audit records and formal verification reports."})]}),l.jsxs("div",{className:"relative w-full md:w-72",children:[l.jsx(M0,{className:"w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2"}),l.jsx("input",{type:"text",placeholder:"Search protocol or chain...",value:d,onChange:E=>f(E.target.value),className:"w-full bg-[#0B101D] border border-slate-800 text-xs text-white pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400 transition-colors"})]})]}),l.jsx("div",{className:"bg-[#0B101D] border border-slate-800 rounded-xl overflow-hidden shadow-xl",children:l.jsxs("table",{className:"w-full text-left text-sm",children:[l.jsx("thead",{className:"bg-[#0D1424] border-b border-slate-800 text-slate-400 text-xs uppercase tracking-wider font-mono",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-4 px-6",children:"PROTOCOL"}),l.jsx("th",{className:"py-4 px-6",children:"ECOSYSTEM"}),l.jsx("th",{className:"py-4 px-6",children:"CATEGORY"}),l.jsx("th",{className:"py-4 px-6",children:"TOTAL VALUE DEFENDED"}),l.jsx("th",{className:"py-4 px-6",children:"STATUS"}),l.jsx("th",{className:"py-4 px-6 text-right",children:"CERTIFICATION"})]})}),l.jsx("tbody",{className:"divide-y divide-slate-800/80",children:M.map((E,C)=>l.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[l.jsxs("td",{className:"py-4 px-6 font-bold text-white font-sans",children:[E.name,l.jsx("span",{className:"block text-xs font-mono text-slate-500 mt-0.5",children:E.reportId})]}),l.jsx("td",{className:"py-4 px-6 font-mono text-cyan-400 text-xs",children:E.chain}),l.jsx("td",{className:"py-4 px-6 text-slate-400 text-xs",children:E.type}),l.jsx("td",{className:"py-4 px-6 font-mono font-bold text-slate-200 text-xs",children:E.tvl}),l.jsx("td",{className:"py-4 px-6",children:l.jsxs("span",{className:"inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-mono",children:[l.jsx(ns,{className:"w-3.5 h-3.5"}),E.status]})}),l.jsx("td",{className:"py-4 px-6 text-right",children:l.jsxs("button",{onClick:()=>alert(`Opening formal audit certificate for ${E.name}`),className:"text-xs font-medium text-cyan-400 hover:text-cyan-300 font-mono hover:underline inline-flex items-center gap-1 cursor-pointer",children:[l.jsx("span",{children:"PDF_REPORT"}),l.jsx(_0,{className:"w-3 h-3"})]})})]},C))})]})})]})}),l.jsxs("section",{id:"standards",className:"scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-400 uppercase tracking-widest mb-2",children:"SECURITY GOVERNANCE"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Institutional Standards & Guarantees"}),l.jsx("p",{className:"text-slate-400 text-sm sm:text-base mt-2",children:"We adhere to the highest technical rigor and operational confidentiality protocols required by sovereign funds and decentralized foundations."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:g.map((E,C)=>l.jsxs("div",{className:"bg-[#0B101D] border border-slate-800 rounded-xl p-6 flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-1 rounded-full",children:E.badge}),l.jsx("h4",{className:"text-base font-bold text-white mt-4 mb-2",children:E.title}),l.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:E.desc})]}),l.jsxs("div",{className:"mt-6 pt-3 border-t border-slate-800 text-[10px] font-mono text-emerald-400 flex items-center gap-1",children:[l.jsx(ns,{className:"w-3 h-3"}),l.jsx("span",{children:"ACTIVE STANDARD"})]})]},C))})]}),n&&l.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-[#0B101D] border border-cyan-500/30 rounded-xl max-w-lg w-full p-6 shadow-2xl space-y-5",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-white font-bold",children:[l.jsx(Xl,{className:"w-5 h-5 text-cyan-400"}),l.jsx("span",{children:"Initialize Formal Security Engagement"})]}),l.jsx("button",{onClick:()=>r(!1),className:"text-slate-400 hover:text-white text-xs px-2 py-1 rounded bg-slate-800 cursor-pointer",children:"Close"})]}),l.jsx("p",{className:"text-xs text-slate-400",children:"Submit your protocol specifications and repository details. Our partner team will coordinate an introductory technical scope assessment within 6 hours."}),l.jsxs("form",{onSubmit:E=>{E.preventDefault(),alert("Engagement inquiry submitted. Our partner team will contact you shortly."),r(!1)},className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 font-medium mb-1",children:"Protocol / Organization Name"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Nexus Protocol",className:"w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 font-medium mb-1",children:"Target Blockchain"}),l.jsxs("select",{className:"w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400",children:[l.jsx("option",{children:"EVM (Ethereum / L2s)"}),l.jsx("option",{children:"Solana (SVM)"}),l.jsx("option",{children:"Move (Aptos / Sui)"}),l.jsx("option",{children:"Cosmos (CosmWasm)"}),l.jsx("option",{children:"Cross-Chain / Multi"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 font-medium mb-1",children:"Target Launch Date"}),l.jsx("input",{type:"text",placeholder:"Q4 2026 / Mainnet",className:"w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2 rounded-lg focus:outline-none focus:border-cyan-400"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 font-medium mb-1",children:"Repository / Whitepaper URL"}),l.jsx("input",{type:"text",required:!0,placeholder:"https://github.com/org/contracts",className:"w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-slate-300 font-medium mb-1",children:"Work Email or Telegram / Signal"}),l.jsx("input",{type:"text",required:!0,placeholder:"cto@protocol.io or @telegram",className:"w-full bg-[#070A12] border border-slate-800 text-white px-3 py-2.5 rounded-lg focus:outline-none focus:border-cyan-400"})]}),l.jsx("button",{type:"submit",className:"w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-3 rounded-lg transition-all shadow-lg shadow-cyan-500/20 cursor-pointer",children:"Submit for Technical Scoping"})]})]})}),l.jsxs("footer",{className:"bg-[#05080E] border-t border-slate-800 text-xs text-slate-500 py-12 px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"font-bold text-slate-300 tracking-wider font-sans",children:"ELASTIC CURVE LABS"}),l.jsx("span",{className:"text-slate-700",children:"|"}),l.jsx("span",{children:"INSTITUTIONAL CYBER-SECURITY & VERIFICATION"})]}),l.jsxs("div",{className:"flex items-center gap-6 font-mono text-[11px]",children:[l.jsx("a",{href:"#services",className:"hover:text-cyan-400",children:"PRACTICES"}),l.jsx("a",{href:"#methodology",className:"hover:text-cyan-400",children:"METHODOLOGY"}),l.jsx("a",{href:"#matrix",className:"hover:text-cyan-400",children:"MATRIX"}),l.jsx("a",{href:"#ledger",className:"hover:text-cyan-400",children:"LEDGER"}),l.jsx("a",{href:"#standards",className:"hover:text-cyan-400",children:"STANDARDS"}),l.jsx("span",{children:"PGP_ID: 4E92-A10C"})]})]}),l.jsxs("div",{className:"max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-900 text-center text-slate-600 text-[11px]",children:["© ",new Date().getFullYear()," Elastic Curve Security Labs Inc. All formal invariants mathematically verified."]})]})]})},Qv=({onOpenAuditModal:s})=>{const[e,n]=Le.useState(!1),r=[{label:"[01_ATTACK_VECTORS]",href:"#vectors"},{label:"[02_DIFF_INSPECTOR]",href:"#diff"},{label:"[03_AUDIT_LEDGER]",href:"#reports"},{label:"[04_SCOPE_CALCULATOR]",href:"#estimator"},{label:"[05_HALL_OF_FAME]",href:"#cves"}];return l.jsxs("header",{className:"sticky top-0 z-50 bg-void/90 backdrop-blur-md border-b border-panelBorder font-mono",children:[l.jsxs("div",{className:"hidden md:flex items-center justify-between px-6 py-1 bg-carbon text-[11px] text-gray-400 border-b border-panelBorder/50",children:[l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("span",{className:"text-phosphor flex items-center gap-1",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-phosphor inline-block"}),"NETWORK_STATUS: ALL ENGINES OPERATIONAL"]}),l.jsx("span",{className:"text-gray-600",children:"|"}),l.jsx("span",{children:"EVM · SVM/SOLANA · MOVE · COSMOS"})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("span",{className:"text-gray-500",children:["PGP_FINGERPRINT: ",l.jsx("code",{className:"text-gray-300",children:"4E92 A10C F882 19BC"})]}),l.jsx("span",{className:"text-gray-600",children:"|"}),l.jsxs("a",{href:"#reports",className:"text-cyber-cyan hover:underline flex items-center gap-1",children:[l.jsx("span",{children:"PUBLIC_KEY"}),l.jsx(_0,{className:"w-2.5 h-2.5"})]})]})]}),l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between",children:[l.jsxs("a",{href:"#",className:"flex items-center gap-2 group",children:[l.jsx("div",{className:"w-9 h-9 rounded bg-panel border border-panelBorder flex items-center justify-center group-hover:border-phosphor transition-colors",children:l.jsxs("svg",{className:"w-5 h-5 text-phosphor",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round",strokeLinejoin:"round",children:[l.jsx("path",{d:"M3 18c6 0 6-12 12-12s6 12 6 12"}),l.jsx("circle",{cx:"12",cy:"12",r:"2.5",fill:"#00FF66"})]})}),l.jsxs("div",{className:"flex flex-col",children:[l.jsxs("span",{className:"font-extrabold text-base tracking-wider text-white group-hover:text-phosphor transition-colors",children:["ELASTIC_CURVE",l.jsx("span",{className:"text-phosphor",children:"::"})]}),l.jsx("span",{className:"text-[10px] text-gray-400 tracking-widest -mt-1",children:"OFFENSIVE_SECURITY"})]})]}),l.jsx("nav",{className:"hidden lg:flex items-center gap-6 text-xs text-gray-300",children:r.map(o=>l.jsx("a",{href:o.href,className:"hover:text-phosphor transition-colors tracking-wide py-1",children:o.label},o.href))}),l.jsx("div",{className:"hidden sm:flex items-center gap-3",children:l.jsxs("button",{onClick:s,className:"flex items-center gap-2 bg-panel hover:bg-carbon text-phosphor border border-phosphor/50 hover:border-phosphor px-4 py-2 rounded text-xs tracking-wider transition-all duration-200 shadow-phosphor-sm hover:scale-[1.02]",children:[l.jsx(Wl,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"[REQUEST_AUDIT]"})]})}),l.jsx("div",{className:"lg:hidden flex items-center gap-2",children:l.jsx("button",{onClick:()=>n(!e),className:"p-2 text-gray-400 hover:text-white",children:e?l.jsx(rc,{className:"w-6 h-6"}):l.jsx(nc,{className:"w-6 h-6"})})})]}),e&&l.jsxs("div",{className:"lg:hidden bg-panel border-b border-panelBorder px-4 py-4 space-y-3",children:[r.map(o=>l.jsx("a",{href:o.href,onClick:()=>n(!1),className:"block text-sm text-gray-300 hover:text-phosphor py-1.5",children:o.label},o.href)),l.jsx("div",{className:"pt-2 border-t border-panelBorder",children:l.jsxs("button",{onClick:()=>{n(!1),s()},className:"w-full flex items-center justify-center gap-2 bg-phosphor text-void font-bold py-2.5 rounded text-xs",children:[l.jsx(Wl,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"[REQUEST_AUDIT_WAR_ROOM]"})]})})]})]})},Jv=({onOpenAuditModal:s})=>{const[e,n]=Le.useState("simulation"),[r,o]=Le.useState("running"),[c,d]=Le.useState("reentrancy"),[f,p]=Le.useState([]),[x,y]=Le.useState(0),S={reentrancy:{name:"EVM::Read-Only Reentrancy & Balancer Flashloan",target:"VaultCore.sol:0x892a...f41e",steps:["[INIT] Spawning Echidna/Medusa bytecode fuzzer...","[AST] Parsed 4,890 instructions. Invariant `totalAssets == sum(balances)` loaded.","[TEST_GEN] Injecting 50,000 randomized state transactions via Foundry invariant harness.","[CALCULATING] Attempting flash-minting curve deflation in pool 0x3b...","[ALERT] High severity vulnerability identified at opcode 0x05af (SSTORE after CALL)!","[SYNTHESIS] Weaponizing proof-of-concept exploit: simulated $14.2M drain prevented.","[PATCH_GENERATED] Applying CEI pattern + NonReentrant transient storage guard (EIP-1153).","[VERIFIED] 0 regressions found. Z3 SMT solver proved invariant holds for all x in 𝔽ₚ."]},cpi_hijack:{name:"SVM::Missing Signer & CPI Privilege Escalation",target:"programs/liquidity_pool/src/lib.rs",steps:["[INIT] Hooking Solana BPF instruction emulator & Anchor constraints...",'[ANALYSIS] Checking `account_info.is_signer` and PDA derivation bumps for seed: [b"vault", authority.key()]',"[EXPLOIT_VECTOR] Missing `has_one = authority` constraint detected on instruction `drain_surplus`!","[ATTACK_SIM] Forged arbitrary account passed as token_program -> cross-program call redirected.","[CRITICAL_BUG] Execution allowed arbitrary mint authority transfer!","[REMEDIATION] Injected Anchor #[account(signer, seeds = [...], bump)] validation & Owner check.","[VERIFIED] 100% formal check passed across all SVM instruction routes."]},oracle_manipulation:{name:"MULTICHAIN::TWAP Window Decay & L2 Sequencer Lag",target:"PriceConsumerV3.sol & PythRelayer.rs",steps:["[INIT] Simulating sequencer downtime & low-liquidity spot price manipulation...","[SCENARIO] 32-block sandwich attack with flash borrowed collateral on L2 rollup.","[DRIFT_CHECK] Spot price deviates 34.8% from decentralized median before heartbeat triggers.","[VULN] Liquidation threshold can be artificially triggered in single block!","[MITIGATION] Enforced bounded TWAP deviation limits + multi-oracle circuit breaker.","[VERIFIED] Protocol immune to price-distortion flash exploits."]}};Le.useEffect(()=>{let M;if(r==="running"){const E=S[c];p([`>>> [TARGET: ${E.target}]`]),y(5);let C=0;M=setInterval(()=>{if(C<E.steps.length){const _=E.steps[C];p(v=>[...v,_]),C++,y(Math.min(100,Math.round(C/E.steps.length*100)))}else o("completed"),clearInterval(M)},700)}return()=>clearInterval(M)},[r,c]);const g=M=>{d(M),o("running"),p([]),y(0)};return l.jsxs("section",{className:"relative pt-6 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between border-b border-panelBorder pb-4 mb-8 text-xs text-gray-400",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-phosphor bg-phosphor/10 px-2.5 py-1 rounded border border-phosphor/30 font-mono",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-phosphor animate-ping"}),"SYS_STATUS: ARMED & MONITORING"]}),l.jsx("span",{className:"hidden sm:inline text-gray-500",children:"|"}),l.jsxs("span",{className:"hidden sm:inline font-mono",children:["NODE_HASH: ",l.jsx("code",{className:"text-gray-300",children:"0x7F...8A9D"})]})]}),l.jsxs("div",{className:"flex items-center gap-4 mt-2 sm:mt-0 font-mono",children:[l.jsx("span",{className:"text-cyan-400",children:"TVL_DEFENDED: $14.82B"}),l.jsx("span",{className:"text-gray-500",children:"•"}),l.jsx("span",{className:"text-alert-critical",children:"0-DAYS_NEUTRALIZED: 142"})]})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-xs font-mono tracking-widest text-phosphor bg-phosphor/5 border border-phosphor/20 px-3 py-1.5 rounded uppercase",children:[l.jsx(ic,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"Offensive Web3 Security Labs"})]}),l.jsxs("h1",{className:"text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight font-sans",children:["We don't audit for compliance. ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-phosphor via-cyan-300 to-cyber-cyan glow-phosphor",children:"We break protocols before black-hats do."})]}),l.jsxs("p",{className:"text-sm sm:text-base text-gray-400 leading-relaxed font-mono",children:[l.jsx("strong",{className:"text-gray-200",children:"ELASTIC CURVE"})," operates as an elite offensive security division. We synthesize real exploit PoCs, execute deep bytecode reverse-engineering, and mathematically prove protocol invariants across EVM, SVM, Move, and Cosmos."]}),l.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2 font-mono",children:[l.jsxs("div",{className:"bg-panel border border-panelBorder p-3 rounded",children:[l.jsx("div",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"$14.8B+"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider mt-1",children:"TVL Secured"})]}),l.jsxs("div",{className:"bg-panel border border-panelBorder p-3 rounded",children:[l.jsx("div",{className:"text-xl sm:text-2xl font-bold text-phosphor tracking-tight",children:"0"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider mt-1",children:"Post-Signoff Exploits"})]}),l.jsxs("div",{className:"bg-panel border border-panelBorder p-3 rounded",children:[l.jsx("div",{className:"text-xl sm:text-2xl font-bold text-cyan-400 tracking-tight",children:"520+"}),l.jsx("div",{className:"text-[10px] text-gray-400 uppercase tracking-wider mt-1",children:"Protocols Hardened"})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row gap-3 font-mono",children:[l.jsxs("button",{onClick:s,className:"flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold px-6 py-3.5 rounded text-sm transition-all duration-200 shadow-phosphor hover:scale-[1.02]",children:[l.jsx(na,{className:"w-4 h-4 fill-current"}),l.jsx("span",{children:"[DISPATCH_AUDIT_REQUEST]"})]}),l.jsxs("a",{href:"#reports",className:"flex items-center justify-center gap-2 bg-panel hover:bg-carbon text-gray-200 hover:text-white border border-panelBorder hover:border-gray-600 px-5 py-3.5 rounded text-sm transition-colors",children:[l.jsx("span",{children:"[EXPLORE_VERIFIED_LEDGER]"}),l.jsx(g0,{className:"w-4 h-4"})]})]}),l.jsxs("div",{className:"text-[11px] text-gray-500 font-mono flex items-center gap-2 pt-1",children:[l.jsx("span",{className:"text-phosphor",children:"✓"})," Fast-track engagement: War-room response within 4 hours. PGP encryption available."]})]}),l.jsx("div",{className:"lg:col-span-7",children:l.jsxs("div",{className:"bg-carbon border border-panelBorder rounded-lg overflow-hidden shadow-2xl",children:[l.jsxs("div",{className:"bg-panel border-b border-panelBorder px-4 py-3 flex flex-wrap items-center justify-between gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2 font-mono text-xs",children:[l.jsx("span",{className:"w-3 h-3 rounded-full bg-red-500/80 inline-block"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-500/80 inline-block"}),l.jsx("span",{className:"w-3 h-3 rounded-full bg-phosphor/80 inline-block"}),l.jsx("span",{className:"ml-2 text-gray-300 font-semibold",children:"ELASTIC_CURVE::SECURITY_RUNTIME_v4.1"})]}),l.jsxs("div",{className:"flex items-center bg-void p-0.5 rounded border border-panelBorder text-xs font-mono",children:[l.jsx("button",{onClick:()=>n("simulation"),className:`px-3 py-1 rounded transition-all ${e==="simulation"?"bg-panelBorder text-phosphor shadow":"text-gray-400 hover:text-gray-200"}`,children:"[TOPOLOGY_CANVAS]"}),l.jsx("button",{onClick:()=>n("fuzzer"),className:`px-3 py-1 rounded transition-all ${e==="fuzzer"?"bg-panelBorder text-cyan-400 shadow":"text-gray-400 hover:text-gray-200"}`,children:"[ATTACK_FUZZER]"})]})]}),e==="simulation"?l.jsx("div",{className:"p-2",children:l.jsx(E0,{})}):l.jsxs("div",{className:"p-4 space-y-4 font-mono",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 bg-void/70 p-2.5 rounded border border-panelBorder",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs",children:[l.jsx(Cd,{className:"w-4 h-4 text-cyan-400 animate-spin"}),l.jsx("span",{className:"text-gray-400",children:"VECTOR:"}),l.jsxs("select",{value:c,onChange:M=>g(M.target.value),className:"bg-panel border border-panelBorder text-white text-xs px-2 py-1 rounded focus:outline-none focus:border-phosphor",children:[l.jsx("option",{value:"reentrancy",children:"EVM: Read-Only Reentrancy & Balancer Flashloan"}),l.jsx("option",{value:"cpi_hijack",children:"SVM/Solana: Missing Signer CPI Hijack"}),l.jsx("option",{value:"oracle_manipulation",children:"Multichain: L2 Sequencer TWAP Manipulation"})]})]}),l.jsxs("button",{onClick:()=>g(c),className:"flex items-center gap-1.5 text-xs bg-panel border border-panelBorder hover:border-phosphor px-2.5 py-1 rounded text-gray-300 hover:text-phosphor transition-colors",children:[l.jsx(Lv,{className:"w-3 h-3"}),l.jsx("span",{children:"RERUN"})]})]}),l.jsxs("div",{className:"bg-void/95 border border-panelBorder rounded p-4 h-[380px] overflow-y-auto scanlines text-xs text-gray-300 space-y-2",children:[l.jsxs("div",{className:"text-gray-500 border-b border-panelBorder/50 pb-2 flex justify-between",children:[l.jsx("span",{children:"STATION: //WAR_ROOM/AUDIT_AGENT_#09"}),l.jsx("span",{children:"ENGINE: Foundry + Medusa + Z3 Prover"})]}),f.map((M,E)=>{const C=M.includes("[ALERT]")||M.includes("[CRITICAL_BUG]")||M.includes("[EXPLOIT_VECTOR]"),_=M.includes("[VERIFIED]")||M.includes("[PATCH_GENERATED]"),v=M.includes("[INIT]")||M.includes(">>>");return l.jsx("div",{className:`leading-relaxed transition-all duration-200 ${C?"text-alert-critical font-bold":_?"text-phosphor font-semibold":v?"text-cyber-cyan":"text-gray-300"}`,children:M},E)}),r==="running"&&l.jsxs("div",{className:"flex items-center gap-2 text-phosphor pt-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-phosphor animate-ping"}),l.jsxs("span",{children:["FUZZING IN PROCESS (",x,"%)"]}),l.jsx("span",{className:"cursor-blink"})]}),r==="completed"&&l.jsxs("div",{className:"mt-4 p-3 bg-phosphor/10 border border-phosphor/30 rounded flex items-center justify-between text-xs text-phosphor",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Gl,{className:"w-4 h-4 text-phosphor"}),l.jsx("span",{children:"PROOF GENERATED: ZERO EXPLOITABILITY AFTER ELASTIC CURVE PATCH"})]}),l.jsx("span",{className:"text-[10px] bg-phosphor/20 px-2 py-0.5 rounded",children:"SHA256::9C7B...E14A"})]})]}),l.jsxs("div",{className:"space-y-1",children:[l.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400",children:[l.jsx("span",{children:"STATE SPACE EXPLORATION:"}),l.jsxs("span",{children:[x,"% COMPLETED"]})]}),l.jsx("div",{className:"w-full bg-void h-1.5 rounded-full overflow-hidden border border-panelBorder",children:l.jsx("div",{className:"bg-gradient-to-r from-cyan-500 to-phosphor h-full transition-all duration-300",style:{width:`${x}%`}})})]})]})]})})]})]})},e_=()=>{const[s,e]=Le.useState("evm"),n=[{id:"evm",name:"EVM_CORE",subtitle:"Ethereum / L2s / Monad",badge:"Solidity / Vyper / Yul",color:"text-cyan-400",borderColor:"border-cyan-500/30",activeBorder:"border-cyan-400",vectors:[{name:"Transient Storage (EIP-1153) Reentrancy",severity:"CRITICAL",desc:"Transient storage (TSTORE/TLOAD) cleared at transaction end breaks conventional storage reentrancy guards.",poc:"attacker.sol: flashloan() -> hookCallback() -> tstore(reentrancy_slot, 0)",mitigation:"Implement transient reentrancy guards with atomic transient clear checks in all external callframes."},{name:"Uniswap v4 Dynamic Hook Privilege Hijacking",severity:"HIGH",desc:"Unchecked `beforeSwap` or `afterAddLiquidity` return values allowing malicious pool key manipulation.",poc:"Hook.sol: executeArbitrage() with spoofed BalanceDelta",mitigation:"Formal invariant proof verifying delta settling through PoolManager balance accounting."},{name:"ERC-4337 Paymaster Signature & Gas Siphoning",severity:"HIGH",desc:"PostOp execution failure that forces bundler to sponsor reverted userOps, draining paymaster deposit.",poc:"UserOp.paymasterAndData forged gas limits trigger bundler penalty",mitigation:"Context-aware gas bounding and strict verificationGasLimit validation."}],tools:["Foundry Invariant Harness","Medusa Symbolic Fuzzer","Halmos Formally Prover","Slither Custom Detectors"]},{id:"svm",name:"SOLANA_SVM",subtitle:"Solana / Eclipse / Firedancer",badge:"Rust / Anchor / Native BPF",color:"text-phosphor",borderColor:"border-phosphor/30",activeBorder:"border-phosphor",vectors:[{name:"CPI (Cross-Program Invocation) Account Hijack",severity:"CRITICAL",desc:"Failure to verify `account_info.owner == &spl_token::id()` allowing arbitrary malicious program substitution.",poc:"invoke_signed(&fake_instruction, &[fake_token_program, victim_vault])",mitigation:"Enforce Anchor `Program<'info, Token>` constraints and explicit program address assert_eq!."},{name:"PDA Seed Canonicalization & Bump Collision",severity:"CRITICAL",desc:"Using client-supplied bumps or variable-length seeds that can collide with different account derivations.",poc:"find_program_address(&[user_input], program_id) overlapping authority space",mitigation:"Hardcode canonical bump seeds inside Anchor accounts (`bump = vault.bump`) and fixed-length hashing."},{name:"Remaining Accounts Deserialization Abuse",severity:"HIGH",desc:"Iterating over ctx.remaining_accounts without verifying duplications or ownership checks.",poc:"Passing duplicated account keys in oracle array to skew median price calculation",mitigation:"Implement strict array uniqueness checks and account discriminator validation."}],tools:["Anchor Linter Suite","Trident Fuzzing Framework","Solana BPF Instruction Trace","Firedancer Compatibility Matrix"]},{id:"move",name:"MOVE_VM",subtitle:"Aptos / Sui / Movement",badge:"Move Bytecode / Object Model",color:"text-amber-400",borderColor:"border-amber-500/30",activeBorder:"border-amber-400",vectors:[{name:"Dynamic Field Dangling Object Reference",severity:"CRITICAL",desc:"In Sui Move, borrowing dynamic fields while dropping parent object capability in parallel execution.",poc:"dynamic_field::borrow_mut(&mut obj) across conflicting PTB transactions",mitigation:"Strict linear capability life-cycle verification with Move Prover."},{name:"Capability Leakage via Public Entry Functions",severity:"HIGH",desc:"Exposing administrative `signer` capabilities through unconstrained `public entry` dispatch.",poc:"admin_mint(caller: &signer) called without protocol whitelist verification",mitigation:"Enforce friend visibility and Move 2024 positional parameter restrictions."},{name:"Flash Loan Hot Potato Bypass",severity:"HIGH",desc:"Improper receipt structuring allowing flash loan debt resolution without full principal repayment.",poc:"struct Receipt without drop; unpack without fee calculation assertion",mitigation:"Mathematical assertion on coin value equality inside the receipt destructor."}],tools:["Aptos Move Prover","Sui PTB Fuzzer","Bytecode Verifier CLI","Formal Specification Language (MSL)"]},{id:"cosmos",name:"COSMOS_IBC",subtitle:"CosmWasm / Appchains / Celestia",badge:"Rust / CosmWasm / Tendermint",color:"text-purple-400",borderColor:"border-purple-500/30",activeBorder:"border-purple-400",vectors:[{name:"IBC Packet Replay & Timeout Race Condition",severity:"CRITICAL",desc:"Packet acknowledgment handling vulnerable to malicious relayer re-submission before state update.",poc:"on_packet_ack() re-processing mint without sequence nonce check",mitigation:"Cryptographic nonces and strict monotonic sequence validation on channel state."},{name:"CosmWasm Submessage Execution Reentrancy",severity:"HIGH",desc:"External SubMsg execution order allows state modification before the Reply handler executes.",poc:"SubMsg::reply_on_success() where state mutated before handler validates balances",mitigation:"Atomic snapshotting and optimistic lock patterns across contract calls."},{name:"Gas Exhaustion State Pruning Vector",severity:"MEDIUM",desc:"Unbounded storage vectors in CosmWasm storage causing block gas limit exhaustion during iterations.",poc:"Map::range() iterating over 100k user positions in single transaction",mitigation:"Indexed pagination and off-chain indexer delegation with cryptographic commitments."}],tools:["CosmWasm Multi-Test Harness","Hermes IBC Simulator","Tendermint Consensus Fuzzer","Bech32 Address Sanitizers"]}],r=n.find(o=>o.id===s);return l.jsxs("section",{id:"vectors",className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono",children:[l.jsxs("div",{className:"border-l-2 border-phosphor pl-4 mb-10",children:[l.jsx("div",{className:"text-xs text-phosphor tracking-widest uppercase mb-1",children:"// SECTION: 0x01_MULTICHAIN_MATRIX"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"Cross-Ecosystem Attack Vectors & Zero-Day Neutralization"}),l.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-3xl",children:"Different execution environments require completely distinct offensive heuristics. We don't apply generic rules; our auditors reverse-engineer bytecode down to VM-specific memory layouts and execution models."})]}),l.jsx("div",{className:"grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8",children:n.map(o=>{const c=o.id===s;return l.jsxs("button",{onClick:()=>e(o.id),className:`text-left p-4 rounded-lg border transition-all duration-200 ${c?`bg-panel ${o.activeBorder} shadow-lg ring-1 ring-white/10`:"bg-carbon/60 border-panelBorder hover:border-gray-600 hover:bg-carbon"}`,children:[l.jsxs("div",{className:"flex items-center justify-between",children:[l.jsx("span",{className:`text-xs font-bold ${o.color}`,children:o.name}),c&&l.jsx("span",{className:"w-2 h-2 rounded-full bg-phosphor animate-pulse"})]}),l.jsx("div",{className:"text-sm font-semibold text-white mt-1",children:o.subtitle}),l.jsx("div",{className:"text-[11px] text-gray-500 mt-1",children:o.badge})]},o.id)})}),l.jsxs("div",{className:"bg-carbon border border-panelBorder rounded-lg p-6 lg:p-8",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between border-b border-panelBorder pb-4 mb-6 gap-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:`text-xl font-bold ${r.color}`,children:[r.name,"::VULNERABILITY_CATALOG"]}),l.jsx("span",{className:"text-xs bg-void border border-panelBorder px-2.5 py-1 rounded text-gray-400",children:r.badge})]}),l.jsxs("div",{className:"text-xs text-gray-400",children:["AUDIT_GRADE: ",l.jsx("span",{className:"text-phosphor font-bold",children:"MILITARY_OFFENSIVE_SPEC"})]})]}),l.jsx("div",{className:"space-y-4",children:r.vectors.map((o,c)=>l.jsxs("div",{className:"bg-panel border border-panelBorder hover:border-gray-600 rounded-lg p-5 transition-all",children:[l.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 mb-2",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsxs("span",{className:"text-gray-500 text-xs",children:["#0",c+1]}),l.jsx("h3",{className:"text-base font-bold text-white font-mono",children:o.name})]}),l.jsxs("span",{className:`text-[10px] font-bold px-2 py-0.5 rounded ${o.severity==="CRITICAL"?"bg-alert-critical/20 text-alert-critical border border-alert-critical/40":o.severity==="HIGH"?"bg-alert-high/20 text-alert-high border border-alert-high/40":"bg-alert-medium/20 text-alert-medium border border-alert-medium/40"}`,children:["[",o.severity,"_SEVERITY]"]})]}),l.jsx("p",{className:"text-xs text-gray-400 mb-3",children:o.desc}),l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 text-xs bg-void/80 p-3 rounded border border-panelBorder/70",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"text-[10px] text-red-400 font-bold mb-1 flex items-center gap-1",children:[l.jsx(S0,{className:"w-3 h-3 text-red-400"}),l.jsx("span",{children:"EXPLOIT_PROOF_OF_CONCEPT (PoC):"})]}),l.jsx("code",{className:"text-gray-300 block text-[11px] bg-carbon p-2 rounded border border-panelBorder/50 overflow-x-auto",children:o.poc})]}),l.jsxs("div",{children:[l.jsxs("div",{className:"text-[10px] text-phosphor font-bold mb-1 flex items-center gap-1",children:[l.jsx(ns,{className:"w-3 h-3 text-phosphor"}),l.jsx("span",{children:"ELASTIC_CURVE_HARDENING:"})]}),l.jsx("div",{className:"text-gray-300 text-[11px] bg-carbon p-2 rounded border border-panelBorder/50",children:o.mitigation})]})]})]},c))}),l.jsxs("div",{className:"mt-6 pt-4 border-t border-panelBorder flex flex-wrap items-center justify-between text-xs text-gray-400 gap-3",children:[l.jsx("span",{className:"text-gray-500 uppercase",children:"Automated Rig & Symbolic Engines:"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:r.tools.map((o,c)=>l.jsxs("span",{className:"bg-void border border-panelBorder px-2.5 py-1 rounded text-gray-300 text-[11px]",children:["⚙ ",o]},c))})]})]})]})},t_=()=>{const[s,e]=Le.useState(0),[n,r]=Le.useState(!1),o=[{title:"EVM::LendingPool.sol — Collateral Rounding to Zero Exploit",file:"contracts/core/LendingPoolCollateral.sol",commitBefore:"d8a391c (VULNERABLE)",commitAfter:"01fe99b (SECURED)",severity:"CRITICAL",fundsAtRisk:"$38,400,000 USD",codeDiff:[{type:"normal",line:"24",content:"    function liquidatePosition(address user, uint256 debtToCover) external {"},{type:"normal",line:"25",content:"        uint256 userDebt = userPositions[user].borrowedAmount;"},{type:"normal",line:"26",content:'        require(debtToCover <= userDebt, "EXCEEDS_DEBT");'},{type:"normal",line:"27",content:"        "},{type:"delete",line:"28",content:"-       // VULN: Downcasting and integer division truncates to zero for tiny amounts"},{type:"delete",line:"29",content:"-       uint256 collateralToSeize = (debtToCover * exchangeRate()) / 1e18;"},{type:"delete",line:"30",content:"-       _burnDebt(user, debtToCover);"},{type:"delete",line:"31",content:"-       _transferCollateral(msg.sender, collateralToSeize);"},{type:"add",line:"28",content:"+       // ELASTIC_CURVE FIX: Rounding favor protocol; require strictly non-zero collateral"},{type:"add",line:"29",content:"+       uint256 collateralToSeize = Math.mulDiv(debtToCover, exchangeRate(), 1e18, Math.Rounding.Ceil);"},{type:"add",line:"30",content:"+       if (collateralToSeize == 0) revert InvalidLiquidationAmount();"},{type:"add",line:"31",content:"+       _burnDebt(user, debtToCover);"},{type:"add",line:"32",content:"+       _transferCollateral(msg.sender, collateralToSeize);"},{type:"normal",line:"33",content:"        emit Liquidated(user, msg.sender, debtToCover, collateralToSeize);"},{type:"normal",line:"34",content:"    }"}],formalProof:"Z3 PROOF: ∀ (d, r) ∈ [1, 2^256-1]² : mulDiv(d, r, 1e18, Ceil) ≥ 1 ∧ protocolSolvency == true"},{title:"SVM::staking_vault.rs — Missing PDA Bump Validation Hijack",file:"programs/vault/src/instructions/claim_rewards.rs",commitBefore:"7b22d1a (VULNERABLE)",commitAfter:"9c5520e (SECURED)",severity:"CRITICAL",fundsAtRisk:"$12,900,000 USD",codeDiff:[{type:"normal",line:"42",content:"    #[account("},{type:"delete",line:"43",content:"-       mut,"},{type:"delete",line:"44",content:'-       seeds = [b"reward_vault", user.key().as_ref()],'},{type:"delete",line:"45",content:"-       bump // VULN: Accepts any bump supplied by malicious client, allowing shadow accounts"},{type:"add",line:"43",content:"+       mut,"},{type:"add",line:"44",content:'+       seeds = [b"reward_vault", user.key().as_ref()],'},{type:"add",line:"45",content:"+       bump = user_state.canonical_bump, // ELASTIC_CURVE FIX: enforce persistent canonical bump"},{type:"add",line:"46",content:"+       has_one = authority @ SecurityError::UnauthorizedCaller"},{type:"normal",line:"47",content:"    )]"},{type:"normal",line:"48",content:"    pub reward_vault: Account<'info, TokenAccount>,"}],formalProof:"SVM PROVER: Canonical seed invariant verified: Pubkey::create_program_address(seeds) == reward_vault.key()"},{title:"MOVE::flash_borrow.move — Linear Receipt Drop Without Debt Settle",file:"sources/flash_lender.move",commitBefore:"ee84c10 (VULNERABLE)",commitAfter:"14bb99a (SECURED)",severity:"CRITICAL",fundsAtRisk:"$9,200,000 USD",codeDiff:[{type:"delete",line:"18",content:"-   struct FlashReceipt has drop {"},{type:"delete",line:"19",content:"-       amount: u64,"},{type:"delete",line:"20",content:"-       fee: u64"},{type:"delete",line:"21",content:"-   } // VULN: 'has drop' allows borrower to discard receipt without returning coins!"},{type:"add",line:"18",content:"+   // ELASTIC_CURVE FIX: Hot Potato pattern; receipt MUST NOT have drop or store abilities"},{type:"add",line:"19",content:"+   struct FlashReceipt {"},{type:"add",line:"20",content:"+       amount: u64,"},{type:"add",line:"21",content:"+       fee: u64"},{type:"add",line:"22",content:"+   }"},{type:"normal",line:"23",content:"    public fun repay_flash_loan(self: &mut Pool, receipt: FlashReceipt, payment: Coin) {"}],formalProof:"MOVE PROVER: Move compiler bytecode verification rejects dead receipts; balance invariance enforced at exit."}],c=o[s],d=()=>{const f=c.codeDiff.map(p=>p.content).join(`
`);navigator.clipboard.writeText(f),r(!0),setTimeout(()=>r(!1),2e3)};return l.jsxs("section",{id:"diff",className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono",children:[l.jsxs("div",{className:"border-l-2 border-cyan-400 pl-4 mb-8",children:[l.jsx("div",{className:"text-xs text-cyan-400 tracking-widest uppercase mb-1",children:"// SECTION: 0x02_VULNERABILITY_DIFF_ENGINE"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"Exploit PoC vs Hardened Patch Inspector"}),l.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-3xl",children:"We don’t just write generic reports with vague recommendations. We deliver compile-ready, mathematically proven git diffs that neutralize vulnerabilities at the opcode and bytecode level."})]}),l.jsx("div",{className:"flex flex-wrap gap-2 mb-6",children:o.map((f,p)=>l.jsxs("button",{onClick:()=>e(p),className:`text-xs px-4 py-2.5 rounded border transition-all ${s===p?"bg-panel border-phosphor text-white font-bold shadow-phosphor-sm":"bg-carbon border-panelBorder text-gray-400 hover:text-white hover:border-gray-600"}`,children:["CASE_0",p+1,": ",f.title.split("—")[0]]},p))}),l.jsxs("div",{className:"bg-carbon border border-panelBorder rounded-lg overflow-hidden shadow-2xl",children:[l.jsxs("div",{className:"bg-panel border-b border-panelBorder px-4 py-3 flex flex-wrap items-center justify-between gap-3 text-xs",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx(bv,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{className:"text-white font-bold",children:c.file}),l.jsx("span",{className:"text-gray-500",children:"|"}),l.jsxs("span",{className:"text-alert-critical font-bold bg-alert-critical/15 px-2 py-0.5 rounded border border-alert-critical/30",children:["SAVED: ",c.fundsAtRisk]})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"text-gray-500 text-[11px]",children:["DIFF: ",l.jsx("code",{className:"text-red-400",children:c.commitBefore})," → ",l.jsx("code",{className:"text-phosphor",children:c.commitAfter})]}),l.jsxs("button",{onClick:d,className:"flex items-center gap-1.5 bg-void border border-panelBorder hover:border-phosphor px-2.5 py-1 rounded text-gray-300 hover:text-phosphor transition-colors text-[11px]",children:[n?l.jsx(Ys,{className:"w-3 h-3 text-phosphor"}):l.jsx(vv,{className:"w-3 h-3"}),l.jsx("span",{children:n?"COPIED":"COPY_PATCH"})]})]})]}),l.jsx("div",{className:"p-4 bg-void/90 overflow-x-auto text-xs leading-relaxed scanlines",children:l.jsx("div",{className:"space-y-0.5",children:c.codeDiff.map((f,p)=>{const x=f.type==="delete",y=f.type==="add";return l.jsxs("div",{className:`flex items-center font-mono py-0.5 px-2 rounded ${x?"bg-alert-critical/15 text-red-300 border-l-2 border-alert-critical":y?"bg-phosphor/15 text-green-300 border-l-2 border-phosphor":"text-gray-400 hover:bg-white/5"}`,children:[l.jsx("span",{className:"w-8 select-none text-gray-600 text-[10px] pr-2 text-right",children:f.line}),l.jsx("pre",{className:"flex-1 font-mono",children:f.content})]},p)})})}),l.jsxs("div",{className:"bg-panel border-t border-panelBorder p-3.5 flex flex-wrap items-center justify-between text-xs gap-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Xl,{className:"w-4 h-4 text-phosphor"}),l.jsx("span",{className:"font-bold text-phosphor",children:"FORMAL VERIFICATION STATUS:"}),l.jsx("span",{className:"text-gray-400 font-mono text-[11px]",children:c.formalProof})]}),l.jsx("span",{className:"text-[11px] text-gray-500",children:"ENGINE: Z3 / SMT-LIB2"})]})]})]})},n_=()=>{const[s,e]=Le.useState(""),[n,r]=Le.useState("ALL"),[o,c]=Le.useState("ALL"),[d,f]=Le.useState(null),x=[{id:"EC-2026-084",protocol:"AuraVault Multichain Collateral",category:"Lending",chain:"EVM",tvl:"$2.4B",findings:{critical:2,high:4,medium:7,low:11},status:"REMEDIATED & PROVED",hash:"0x8f2a99c4b12d774a1e944b11f2ac",date:"2026-08-14"},{id:"EC-2026-079",protocol:"SolFlux Asynchronous CLMM",category:"AMM",chain:"SVM",tvl:"$890M",findings:{critical:1,high:3,medium:5,low:8},status:"REMEDIATED & PROVED",hash:"0x44d18fa2093e8a55bca7710928cd",date:"2026-07-29"},{id:"EC-2026-071",protocol:"Hyperion IBC Hyper-Relayer",category:"Bridge",chain:"COSMOS",tvl:"$1.85B",findings:{critical:3,high:2,medium:9,low:14},status:"REMEDIATED & PROVED",hash:"0x3e18a994711bfca40029bca5e317",date:"2026-07-08"},{id:"EC-2026-064",protocol:"Aptos Liquid Prime Staking",category:"Staking",chain:"MOVE",tvl:"$640M",findings:{critical:1,high:2,medium:4,low:6},status:"REMEDIATED & PROVED",hash:"0x99cb110a24f5e71465bc99a84210",date:"2026-06-22"},{id:"EC-2026-059",protocol:"Kevlar ZK Rollup Sequencer",category:"ZK/L2",chain:"EVM",tvl:"$3.7B",findings:{critical:4,high:6,medium:12,low:18},status:"REMEDIATED & PROVED",hash:"0x12bb994cba810993efca1109a477",date:"2026-06-02"},{id:"EC-2026-051",protocol:"DriftAnchor Perpetual Dex",category:"AMM",chain:"SVM",tvl:"$1.12B",findings:{critical:2,high:5,medium:8,low:15},status:"REMEDIATED & PROVED",hash:"0x712aef9044bba8912389cd441a5b",date:"2026-05-18"}].filter(y=>{const S=y.protocol.toLowerCase().includes(s.toLowerCase())||y.id.toLowerCase().includes(s.toLowerCase())||y.hash.toLowerCase().includes(s.toLowerCase()),g=n==="ALL"||y.chain===n,M=o==="ALL"||y.category===o;return S&&g&&M});return l.jsxs("section",{id:"reports",className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono",children:[l.jsxs("div",{className:"border-l-2 border-phosphor pl-4 mb-8",children:[l.jsx("div",{className:"text-xs text-phosphor tracking-widest uppercase mb-1",children:"// SECTION: 0x03_PUBLIC_VERIFICATION_LEDGER"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"Cryptographically Signed Audit Database"}),l.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-3xl",children:"Complete transparency. Every public engagement conducted by Elastic Curve is published with SHA-256 commit hashes, weaponized PoC reproductions, and verified remediation diffs."})]}),l.jsxs("div",{className:"bg-carbon border border-panelBorder rounded-lg p-4 mb-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4",children:[l.jsxs("div",{className:"relative flex-1",children:[l.jsx(M0,{className:"w-4 h-4 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"}),l.jsx("input",{type:"text",placeholder:"Search by protocol name, ID, or commit hash...",value:s,onChange:y=>e(y.target.value),className:"w-full bg-void border border-panelBorder text-xs text-white pl-9 pr-4 py-2.5 rounded focus:outline-none focus:border-phosphor transition-colors"})]}),l.jsxs("div",{className:"flex flex-wrap items-center gap-2 text-xs",children:[l.jsx("div",{className:"flex items-center gap-1 bg-void border border-panelBorder p-1 rounded",children:["ALL","EVM","SVM","MOVE","COSMOS"].map(y=>l.jsx("button",{onClick:()=>r(y),className:`px-2.5 py-1 rounded text-[11px] transition-colors ${n===y?"bg-panel border border-phosphor/50 text-phosphor font-bold":"text-gray-400 hover:text-white"}`,children:y},y))}),l.jsxs("select",{value:o,onChange:y=>c(y.target.value),className:"bg-void border border-panelBorder text-xs text-gray-300 px-3 py-2 rounded focus:outline-none focus:border-phosphor",children:[l.jsx("option",{value:"ALL",children:"ALL CATEGORIES"}),l.jsx("option",{value:"Lending",children:"Lending & Vaults"}),l.jsx("option",{value:"AMM",children:"AMM & Perpetuals"}),l.jsx("option",{value:"Bridge",children:"Bridges & IBC"}),l.jsx("option",{value:"Staking",children:"Liquid Staking"}),l.jsx("option",{value:"ZK/L2",children:"ZK / Rollups"})]})]})]}),l.jsxs("div",{className:"bg-carbon border border-panelBorder rounded-lg overflow-x-auto shadow-2xl",children:[l.jsxs("table",{className:"w-full text-left text-xs",children:[l.jsx("thead",{className:"bg-panel border-b border-panelBorder text-gray-400 uppercase tracking-wider text-[10px]",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3.5 px-4",children:"REPORT_ID & PROTOCOL"}),l.jsx("th",{className:"py-3.5 px-4",children:"CHAIN / SECTOR"}),l.jsx("th",{className:"py-3.5 px-4",children:"TVL SECURED"}),l.jsx("th",{className:"py-3.5 px-4",children:"FINDINGS (CRIT/HIGH/MED/LOW)"}),l.jsx("th",{className:"py-3.5 px-4",children:"STATUS"}),l.jsx("th",{className:"py-3.5 px-4 text-right",children:"ACTION"})]})}),l.jsx("tbody",{className:"divide-y divide-panelBorder",children:x.map(y=>l.jsxs("tr",{className:"hover:bg-panel/70 transition-colors group cursor-pointer",onClick:()=>f(y),children:[l.jsxs("td",{className:"py-4 px-4",children:[l.jsx("div",{className:"font-bold text-white group-hover:text-phosphor transition-colors",children:y.protocol}),l.jsxs("div",{className:"text-[10px] text-gray-500 mt-0.5 flex items-center gap-2",children:[l.jsx("span",{children:y.id}),l.jsx("span",{children:"•"}),l.jsxs("span",{className:"font-mono text-gray-400",children:[y.hash.slice(0,14),"..."]})]})]}),l.jsx("td",{className:"py-4 px-4",children:l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx("span",{className:"text-cyan-400 font-bold",children:y.chain}),l.jsx("span",{className:"text-gray-600",children:"/"}),l.jsx("span",{className:"text-gray-400",children:y.category})]})}),l.jsx("td",{className:"py-4 px-4 font-bold text-gray-200",children:y.tvl}),l.jsx("td",{className:"py-4 px-4",children:l.jsxs("div",{className:"flex items-center gap-1.5 text-[11px]",children:[l.jsxs("span",{className:"bg-alert-critical/20 text-alert-critical px-1.5 py-0.5 rounded font-bold",children:[y.findings.critical,"C"]}),l.jsxs("span",{className:"bg-alert-high/20 text-alert-high px-1.5 py-0.5 rounded font-bold",children:[y.findings.high,"H"]}),l.jsxs("span",{className:"bg-alert-medium/20 text-alert-medium px-1.5 py-0.5 rounded",children:[y.findings.medium,"M"]}),l.jsxs("span",{className:"bg-gray-800 text-gray-300 px-1.5 py-0.5 rounded",children:[y.findings.low,"L"]})]})}),l.jsx("td",{className:"py-4 px-4",children:l.jsxs("div",{className:"inline-flex items-center gap-1 text-[11px] text-phosphor bg-phosphor/10 border border-phosphor/30 px-2 py-0.5 rounded",children:[l.jsx(Gl,{className:"w-3 h-3 text-phosphor"}),l.jsx("span",{children:y.status})]})}),l.jsx("td",{className:"py-4 px-4 text-right",children:l.jsxs("button",{onClick:S=>{S.stopPropagation(),f(y)},className:"inline-flex items-center gap-1 bg-void border border-panelBorder hover:border-phosphor px-3 py-1.5 rounded text-gray-300 hover:text-phosphor transition-colors text-[11px]",children:[l.jsx(y0,{className:"w-3 h-3"}),l.jsx("span",{children:"[INSPECT]"})]})})]},y.id))})]}),x.length===0&&l.jsx("div",{className:"text-center py-12 text-gray-500",children:"No audit reports match your filter criteria."})]}),d&&l.jsx("div",{className:"fixed inset-0 z-50 bg-void/80 backdrop-blur-sm flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-carbon border border-phosphor/40 rounded-lg max-w-2xl w-full p-6 shadow-phosphor space-y-5",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-panelBorder pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(ic,{className:"w-5 h-5 text-phosphor"}),l.jsxs("span",{className:"font-bold text-white text-base",children:["REPORT_DISCLOSURE: ",d.id]})]}),l.jsx("button",{onClick:()=>f(null),className:"text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-panel border border-panelBorder",children:"[ESC_CLOSE]"})]}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("div",{className:"grid grid-cols-2 gap-4 bg-void p-3 rounded border border-panelBorder",children:[l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"TARGET PROTOCOL:"}),l.jsx("span",{className:"font-bold text-white text-sm",children:d.protocol})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"DEFENDED CAPITAL:"}),l.jsxs("span",{className:"font-bold text-phosphor text-sm",children:[d.tvl," USD"]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"EXECUTION RUNTIME:"}),l.jsxs("span",{className:"text-cyan-400 font-semibold",children:[d.chain," (",d.category,")"]})]}),l.jsxs("div",{children:[l.jsx("span",{className:"text-gray-500 block",children:"AUDIT COMPLETION:"}),l.jsx("span",{className:"text-gray-300",children:d.date})]})]}),l.jsxs("div",{className:"border border-panelBorder p-3 rounded bg-panel",children:[l.jsx("div",{className:"text-gray-400 font-bold mb-2",children:"VULNERABILITY DISCLOSURE BREAKDOWN:"}),l.jsxs("div",{className:"grid grid-cols-4 gap-2 text-center",children:[l.jsxs("div",{className:"bg-alert-critical/15 p-2 rounded border border-alert-critical/30",children:[l.jsx("div",{className:"text-lg font-bold text-alert-critical",children:d.findings.critical}),l.jsx("div",{className:"text-[10px] text-gray-400",children:"CRITICAL"})]}),l.jsxs("div",{className:"bg-alert-high/15 p-2 rounded border border-alert-high/30",children:[l.jsx("div",{className:"text-lg font-bold text-alert-high",children:d.findings.high}),l.jsx("div",{className:"text-[10px] text-gray-400",children:"HIGH"})]}),l.jsxs("div",{className:"bg-alert-medium/15 p-2 rounded border border-alert-medium/30",children:[l.jsx("div",{className:"text-lg font-bold text-alert-medium",children:d.findings.medium}),l.jsx("div",{className:"text-[10px] text-gray-400",children:"MEDIUM"})]}),l.jsxs("div",{className:"bg-gray-800 p-2 rounded border border-gray-700",children:[l.jsx("div",{className:"text-lg font-bold text-gray-300",children:d.findings.low}),l.jsx("div",{className:"text-[10px] text-gray-400",children:"LOW/INFO"})]})]})]}),l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder font-mono text-[11px] space-y-1",children:[l.jsx("div",{className:"text-gray-400",children:"COMMIT_PROVEN_SHA256:"}),l.jsxs("div",{className:"text-phosphor break-all",children:[d.hash,"8491bbfa01e9944d18fa2093e8"]}),l.jsx("div",{className:"text-gray-500 pt-1",children:"GPG SIGNED BY: Elastic Curve Security Key #4E92-A10C"})]})]}),l.jsxs("div",{className:"flex items-center justify-end gap-3 pt-2",children:[l.jsx("button",{onClick:()=>f(null),className:"bg-panel border border-panelBorder text-gray-300 px-4 py-2 rounded text-xs hover:text-white",children:"[CLOSE]"}),l.jsxs("button",{onClick:()=>{alert(`Downloading cryptographic report package for ${d.protocol}...`)},className:"flex items-center gap-1.5 bg-phosphor text-void font-bold px-4 py-2 rounded text-xs hover:bg-phosphor-dim",children:[l.jsx(v0,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"DOWNLOAD_SIGNED_PDF"})]})]})]})})]})},i_=({onOpenAuditModalWithScope:s})=>{const[e,n]=Le.useState(2500),[r,o]=Le.useState("multichain"),[c,d]=Le.useState("lending"),[f,p]=Le.useState("accelerated"),x=Math.ceil(e/400),y=r==="multichain"?1.6:r==="cosmos"?1.3:1,S=c==="bridge"?1.5:c==="zk"?1.7:1.2,g=Math.max(5,Math.round(x*y*S*(f==="emergency"?.4:f==="accelerated"?.7:1))),M=f==="emergency"?4:e>5e3?3:2,E=(e*8500).toLocaleString(),C=()=>{s({sloc:e,ecosystem:r,protocolType:c,urgency:f,estimatedDays:g,auditorCount:M})};return l.jsxs("section",{id:"estimator",className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono",children:[l.jsxs("div",{className:"border-l-2 border-amber-400 pl-4 mb-8",children:[l.jsx("div",{className:"text-xs text-amber-400 tracking-widest uppercase mb-1",children:"// SECTION: 0x04_ENGAGEMENT_SCOPE_CALCULATOR"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"Audit Scope, Fuzzing Runs & Turnaround Estimator"}),l.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-3xl",children:"Transparent metrics. Input your codebase parameters to compute formal verification cycles, dedicated offensive researchers, and expected time to cryptographic sign-off."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 bg-carbon border border-panelBorder rounded-lg p-6 lg:p-8 shadow-2xl",children:[l.jsxs("div",{className:"lg:col-span-7 space-y-6",children:[l.jsxs("div",{className:"bg-panel p-4 rounded border border-panelBorder space-y-3",children:[l.jsxs("div",{className:"flex justify-between items-center text-xs",children:[l.jsx("span",{className:"text-gray-300 font-bold",children:"CODEBASE COMPLEXITY (nSLOC):"}),l.jsxs("span",{className:"text-phosphor font-bold text-sm bg-void px-2.5 py-1 rounded border border-panelBorder",children:[e.toLocaleString()," Lines of Code"]})]}),l.jsx("input",{type:"range",min:"300",max:"15000",step:"100",value:e,onChange:_=>n(parseInt(_.target.value)),className:"w-full accent-phosphor cursor-pointer"}),l.jsxs("div",{className:"flex justify-between text-[10px] text-gray-500",children:[l.jsx("span",{children:"300 (Micro-Vault)"}),l.jsx("span",{children:"5,000 (Complex DeFi)"}),l.jsx("span",{children:"15,000+ (Modular L1/L2)"})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs text-gray-400 font-bold",children:"TARGET ECOSYSTEM & VM:"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:[{id:"multichain",label:"Cross-Chain Multi"},{id:"evm",label:"EVM (Solidity/Yul)"},{id:"svm",label:"SVM (Solana/Anchor)"},{id:"move",label:"Move (Aptos/Sui)"},{id:"cosmos",label:"Cosmos (CosmWasm)"}].map(_=>l.jsx("button",{onClick:()=>o(_.id),className:`text-xs py-2 px-3 rounded border text-left transition-all ${r===_.id?"bg-panel border-cyan-400 text-cyan-300 font-bold":"bg-void border-panelBorder text-gray-400 hover:text-white"}`,children:_.label},_.id))})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs text-gray-400 font-bold",children:"PROTOCOL ARCHITECTURE:"}),l.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-2",children:[{id:"lending",label:"Lending & CDP Vaults"},{id:"amm",label:"DEX / AMM / Perps"},{id:"bridge",label:"Bridge / Interop Relayer"},{id:"staking",label:"Liquid Staking & Restaking"},{id:"zk",label:"ZK-Rollup & Circuits"}].map(_=>l.jsx("button",{onClick:()=>d(_.id),className:`text-xs py-2 px-3 rounded border text-left transition-all ${c===_.id?"bg-panel border-phosphor text-phosphor font-bold":"bg-void border-panelBorder text-gray-400 hover:text-white"}`,children:_.label},_.id))})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("label",{className:"text-xs text-gray-400 font-bold",children:"ENGAGEMENT PRIORITY & TIMELINE:"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"standard",title:"Standard",desc:"Normal pacing"},{id:"accelerated",title:"Accelerated",desc:"Dual-lead sprint"},{id:"emergency",title:"War Room (72h)",desc:"24/7 Red-team"}].map(_=>l.jsxs("button",{onClick:()=>p(_.id),className:`text-xs p-2.5 rounded border text-left transition-all ${f===_.id?"bg-panel border-alert-critical text-white font-bold":"bg-void border-panelBorder text-gray-400 hover:text-white"}`,children:[l.jsx("div",{className:f===_.id?"text-red-400":"text-gray-300",children:_.title}),l.jsx("div",{className:"text-[10px] text-gray-500 mt-0.5",children:_.desc})]},_.id))})]})]}),l.jsxs("div",{className:"lg:col-span-5 bg-panel border border-panelBorder rounded-lg p-6 flex flex-col justify-between space-y-6",children:[l.jsxs("div",{className:"space-y-5",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-panelBorder pb-3",children:[l.jsxs("span",{className:"text-xs text-gray-400 uppercase font-bold flex items-center gap-1.5",children:[l.jsx(uv,{className:"w-4 h-4 text-phosphor"}),"ESTIMATED_RESOURCES"]}),l.jsx("span",{className:"text-[10px] text-phosphor bg-phosphor/10 px-2 py-0.5 rounded border border-phosphor/20",children:"DYNAMIC_ALLOCATION"})]}),l.jsxs("div",{className:"space-y-3 text-xs",children:[l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(xv,{className:"w-4 h-4 text-cyan-400"}),l.jsx("span",{children:"ESTIMATED TURNAROUND:"})]}),l.jsxs("span",{className:"font-bold text-base text-white",children:["~",g," Days"]})]}),l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Hv,{className:"w-4 h-4 text-phosphor"}),l.jsx("span",{children:"DEDICATED RESEARCHERS:"})]}),l.jsxs("span",{className:"font-bold text-base text-phosphor",children:[M," Senior White-Hats"]})]}),l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(na,{className:"w-4 h-4 text-amber-400"}),l.jsx("span",{children:"STATE MUTATION PASSES:"})]}),l.jsx("span",{className:"font-bold text-base text-amber-300",children:E})]})]}),l.jsxs("div",{className:"border-t border-panelBorder pt-4 space-y-2 text-[11px] text-gray-400",children:[l.jsx("div",{className:"text-gray-300 font-bold text-xs mb-1",children:"INCLUDED DELIVERABLES:"}),l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Ys,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"Executable Exploit PoCs (Foundry/Anchor tests)"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Ys,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"Compile-ready Git Diff remediation patches"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Ys,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"Z3 SMT formal mathematical invariant proof"})]}),l.jsxs("div",{className:"flex items-center gap-2 text-gray-300",children:[l.jsx(Ys,{className:"w-3.5 h-3.5 text-phosphor"}),l.jsx("span",{children:"Free remediated code re-test within 14 days"})]})]})]}),l.jsxs("button",{onClick:C,className:"w-full flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold py-3.5 rounded text-xs transition-all shadow-phosphor hover:scale-[1.02]",children:[l.jsx("span",{children:"[LOCK_ESTIMATE_&_SUBMIT_CODE]"}),l.jsx(tc,{className:"w-4 h-4"})]})]})]})]})},r_=()=>{const s=[{cve:"CVE-2025-49110",title:"Cross-Chain Bridge Token Duplication & Root Hash Poisoning",bounty:"$1,000,000 USD (Max Tier)",ecosystem:"COSMOS / EVM BRIDGE",impact:"$120M+ TVL Protected",severity:"CRITICAL (CVSS 9.8)",desc:"Discovered an asynchronous packet processing race condition where fraudulent light-client proofs could be accepted during validator set re-keying.",status:"DISCLOSED & PATCHED"},{cve:"CVE-2025-38812",title:"SVM Account Substitution in Liquid Restaking Pool",bounty:"$500,000 USD",ecosystem:"SOLANA SVM",impact:"$45M+ TVL Protected",severity:"CRITICAL (CVSS 9.6)",desc:"Bypassed Anchor account discriminator check via uninitialized sysvar memory, allowing unauthorized reward extraction.",status:"DISCLOSED & PATCHED"},{cve:"CVE-2024-91823",title:"EIP-1153 Transient Storage Inter-Contract Reentrancy",bounty:"$250,000 USD",ecosystem:"ETHEREUM L1 / ARBITRUM",impact:"$68M+ TVL Protected",severity:"HIGH (CVSS 8.9)",desc:"Demonstrated read-only reentrancy attack against lending vault oracle relying on transient state during flash loan liquidations.",status:"DISCLOSED & PATCHED"},{cve:"CVE-2024-81720",title:"Move VM Parallel Execution Dynamic Field Lock Deadlock",bounty:"$150,000 USD",ecosystem:"APTOS / SUI",impact:"Network Halt Prevented",severity:"HIGH (CVSS 8.4)",desc:"Exploited optimistic concurrency control engine by crafting cyclical dependency in dynamic child objects, causing validator consensus desync.",status:"DISCLOSED & PATCHED"}];return l.jsxs("section",{id:"cves",className:"py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto font-mono",children:[l.jsxs("div",{className:"border-l-2 border-alert-critical pl-4 mb-8",children:[l.jsx("div",{className:"text-xs text-alert-critical tracking-widest uppercase mb-1",children:"// SECTION: 0x05_WHITE_HAT_DISCLOSURES & HALL_OF_FAME"}),l.jsx("h2",{className:"text-2xl sm:text-3xl font-extrabold text-white tracking-tight",children:"Zero-Day Discoveries & Tier-1 Disclosures"}),l.jsx("p",{className:"text-gray-400 text-sm mt-2 max-w-3xl",children:"We actively hunt 0-days in core blockchain infrastructure, virtual machines, and foundational DeFi primitives. When we find an exploit, we coordinate responsible white-hat disclosures before malice occurs."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:s.map((e,n)=>l.jsxs("div",{className:"bg-carbon border border-panelBorder hover:border-alert-critical/50 rounded-lg p-6 transition-all duration-200 group flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between gap-2 mb-3",children:[l.jsxs("span",{className:"text-xs font-bold text-alert-critical bg-alert-critical/10 px-2 py-0.5 rounded border border-alert-critical/30 flex items-center gap-1",children:[l.jsx(S0,{className:"w-3 h-3 text-alert-critical"}),e.cve]}),l.jsx("span",{className:"text-[10px] text-phosphor bg-phosphor/10 px-2 py-0.5 rounded border border-phosphor/20",children:e.status})]}),l.jsx("h3",{className:"text-base font-bold text-white group-hover:text-cyan-300 transition-colors mb-2",children:e.title}),l.jsx("p",{className:"text-xs text-gray-400 leading-relaxed mb-4",children:e.desc})]}),l.jsxs("div",{className:"border-t border-panelBorder pt-4 space-y-2 text-xs",children:[l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-500",children:"ECOSYSTEM:"}),l.jsx("span",{className:"text-cyan-400 font-semibold",children:e.ecosystem})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-500",children:"PREVENTED COLLATERAL LOSS:"}),l.jsx("span",{className:"text-phosphor font-bold",children:e.impact})]}),l.jsxs("div",{className:"flex justify-between",children:[l.jsx("span",{className:"text-gray-500",children:"BOUNTY REWARD AWARDED:"}),l.jsx("span",{className:"text-amber-400 font-semibold",children:e.bounty})]})]})]},n))})]})},s_=()=>l.jsx("footer",{className:"bg-carbon border-t border-panelBorder text-xs text-gray-400 font-mono",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 mb-8",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsx("div",{className:"flex items-center gap-2",children:l.jsxs("span",{className:"font-bold text-white tracking-wider text-sm",children:["ELASTIC_CURVE",l.jsx("span",{className:"text-phosphor",children:"::"}),"LABS"]})}),l.jsx("p",{className:"text-[11px] text-gray-500 leading-relaxed",children:"Offensive smart contract audits, formal verification, and zero-day research across EVM, SVM, Move, and Cosmos."}),l.jsxs("div",{className:"text-[10px] text-phosphor flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-phosphor"}),"WAR_ROOM_HOTLINE: active 24/7/365"]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"text-gray-300 font-bold uppercase text-[11px]",children:"RESEARCH & PAPERS"}),l.jsxs("ul",{className:"space-y-1 text-[11px]",children:[l.jsx("li",{children:l.jsx("a",{href:"#vectors",className:"hover:text-phosphor",children:"0x01: EIP-1153 Transient Exploits"})}),l.jsx("li",{children:l.jsx("a",{href:"#vectors",className:"hover:text-phosphor",children:"0x02: SVM CPI Hijacking Vectors"})}),l.jsx("li",{children:l.jsx("a",{href:"#vectors",className:"hover:text-phosphor",children:"0x03: Sui Move Dynamic Fields"})}),l.jsx("li",{children:l.jsx("a",{href:"#vectors",className:"hover:text-phosphor",children:"0x04: CosmWasm Async Race Conditions"})})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"text-gray-300 font-bold uppercase text-[11px]",children:"VERIFICATION LEDGER"}),l.jsxs("ul",{className:"space-y-1 text-[11px]",children:[l.jsx("li",{children:l.jsx("a",{href:"#reports",className:"hover:text-phosphor",children:"Public Reports Registry"})}),l.jsx("li",{children:l.jsx("a",{href:"#diff",className:"hover:text-phosphor",children:"Interactive Diff Viewer"})}),l.jsx("li",{children:l.jsx("a",{href:"#cves",className:"hover:text-phosphor",children:"Hall of Fame Disclosures"})}),l.jsx("li",{children:l.jsx("a",{href:"#estimator",className:"hover:text-phosphor",children:"Scope & Pricing Calculator"})})]})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsx("div",{className:"text-gray-300 font-bold uppercase text-[11px]",children:"ENCRYPTED DISPATCH"}),l.jsxs("div",{className:"bg-void p-2.5 rounded border border-panelBorder text-[10px] space-y-1",children:[l.jsx("div",{className:"text-gray-400",children:"PGP FINGERPRINT:"}),l.jsx("div",{className:"text-cyan-400 break-all font-mono",children:"4E92 A10C F882 19BC 7014 91EE C3BA 0041"})]}),l.jsxs("div",{className:"text-[10px] text-gray-500 pt-1",children:["SIGNAL / TELEGRAM: ",l.jsx("span",{className:"text-gray-300 font-bold",children:"@elastic_curve_sec"})]})]})]}),l.jsxs("div",{className:"border-t border-panelBorder/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-gray-500",children:[l.jsxs("div",{children:["© ",new Date().getFullYear()," ELASTIC CURVE RESEARCH LABS. ALL CRYPTOGRAPHIC INVARIANTS ENFORCED."]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsx("span",{className:"text-phosphor",children:"STATUS: OPERATIONAL"}),l.jsx("span",{children:"•"}),l.jsx("span",{children:"NO COMPLIANCE THEATER"})]})]})]})}),a_=({isOpen:s,onClose:e,initialScope:n})=>{const[r,o]=Le.useState(""),[c,d]=Le.useState(""),[f,p]=Le.useState(""),[x,y]=Le.useState(["EVM"]),[S,g]=Le.useState("accelerated"),[M,E]=Le.useState(null);if(Le.useEffect(()=>{n&&(n.urgency&&g(n.urgency),n.ecosystem&&(n.ecosystem==="multichain"?y(["EVM","SVM","COSMOS"]):y([n.ecosystem.toUpperCase()])))},[n]),!s)return null;const C=v=>{y(R=>R.includes(v)?R.filter(L=>L!==v):[...R,v])},_=v=>{v.preventDefault();const R=`EC-DISPATCH-0x${Math.floor(Math.random()*16777215).toString(16).toUpperCase()}`;E(R)};return l.jsx("div",{className:"fixed inset-0 z-50 bg-void/85 backdrop-blur-md flex items-center justify-center p-4 font-mono",children:l.jsxs("div",{className:"bg-carbon border border-phosphor/50 rounded-lg max-w-xl w-full p-6 shadow-phosphor relative",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-panelBorder pb-3 mb-5",children:[l.jsxs("div",{className:"flex items-center gap-2",children:[l.jsx(Wl,{className:"w-4 h-4 text-phosphor"}),l.jsx("span",{className:"font-bold text-white text-sm",children:"[DISPATCH_AUDIT_WAR_ROOM]"})]}),l.jsx("button",{onClick:e,className:"text-gray-400 hover:text-white text-xs px-2 py-1 rounded bg-panel border border-panelBorder",children:"[CLOSE]"})]}),M?l.jsxs("div",{className:"space-y-4 py-4 text-center",children:[l.jsx("div",{className:"w-12 h-12 rounded-full bg-phosphor/10 border border-phosphor flex items-center justify-center mx-auto text-phosphor",children:l.jsx(ns,{className:"w-6 h-6"})}),l.jsx("h3",{className:"text-lg font-bold text-white font-mono",children:"ENGAGEMENT_SESSION_DISPATCHED"}),l.jsx("p",{className:"text-xs text-gray-400 max-w-md mx-auto",children:"Your security docket has been signed into our encrypted queue. A lead offensive researcher will verify your repository and initialize communication within 4 hours."}),l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder text-xs",children:[l.jsx("span",{className:"text-gray-500 block mb-1",children:"DOCKET TICKET NUMBER:"}),l.jsx("span",{className:"font-bold text-phosphor text-sm",children:M})]}),l.jsx("button",{onClick:()=>{E(null),e()},className:"bg-panel border border-panelBorder hover:border-phosphor text-gray-300 hover:text-phosphor px-6 py-2 rounded text-xs transition-colors",children:"[RETURN_TO_DASHBOARD]"})]}):l.jsxs("form",{onSubmit:_,className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 mb-1 font-bold",children:"CODEBASE REPOSITORY (GITHUB / GITLAB / PRIVATE):"}),l.jsx("input",{type:"text",required:!0,placeholder:"https://github.com/protocol/core-contracts",value:r,onChange:v=>o(v.target.value),className:"w-full bg-void border border-panelBorder text-white px-3 py-2.5 rounded focus:outline-none focus:border-phosphor transition-colors"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 mb-1 font-bold",children:"TARGET BRANCH / COMMIT:"}),l.jsx("input",{type:"text",placeholder:"main @ 0x8f2a4c...",value:c,onChange:v=>d(v.target.value),className:"w-full bg-void border border-panelBorder text-white px-3 py-2 rounded focus:outline-none focus:border-phosphor transition-colors"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 mb-1 font-bold",children:"CONTACT (TELEGRAM/SIGNAL):"}),l.jsx("input",{type:"text",required:!0,placeholder:"@founder_handle or +1...",value:f,onChange:v=>p(v.target.value),className:"w-full bg-void border border-panelBorder text-white px-3 py-2 rounded focus:outline-none focus:border-phosphor transition-colors"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 mb-1 font-bold",children:"EXECUTION ENVIRONMENTS:"}),l.jsx("div",{className:"flex flex-wrap gap-2",children:["EVM","SVM","MOVE","COSMOS","ZK"].map(v=>l.jsxs("button",{type:"button",onClick:()=>C(v),className:`px-3 py-1.5 rounded border transition-colors ${x.includes(v)?"bg-panel border-phosphor text-phosphor font-bold":"bg-void border-panelBorder text-gray-400"}`,children:["[",x.includes(v)?"x":" ","] ",v]},v))})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-400 mb-1 font-bold",children:"ENGAGEMENT URGENCY:"}),l.jsx("div",{className:"grid grid-cols-3 gap-2",children:[{id:"standard",label:"Standard (2-3 wks)"},{id:"accelerated",label:"Accelerated (7-10 d)"},{id:"emergency",label:"War Room (72h)"}].map(v=>l.jsx("button",{type:"button",onClick:()=>g(v.id),className:`p-2 rounded border text-center transition-colors ${S===v.id?"bg-panel border-cyan-400 text-cyan-300 font-bold":"bg-void border-panelBorder text-gray-400"}`,children:v.label},v.id))})]}),l.jsxs("div",{className:"bg-void p-3 rounded border border-panelBorder flex items-start gap-2 text-gray-400 text-[11px]",children:[l.jsx(ic,{className:"w-4 h-4 text-phosphor shrink-0 mt-0.5"}),l.jsx("span",{children:"All communications encrypted with PGP. Under strict NDA default. We never disclose vulnerabilities without protocol authorization."})]}),l.jsxs("button",{type:"submit",className:"w-full flex items-center justify-center gap-2 bg-phosphor hover:bg-phosphor-dim text-void font-bold py-3 rounded transition-all shadow-phosphor hover:scale-[1.01]",children:[l.jsx(Fv,{className:"w-3.5 h-3.5"}),l.jsx("span",{children:"[SUBMIT_DOCKET_FOR_OFFENSIVE_AUDIT]"})]})]})]})})},o_=()=>{const[s,e]=Le.useState(!1),[n,r]=Le.useState(null),o=()=>{r(null),e(!0)},c=d=>{r(d),e(!0)};return l.jsxs("div",{className:"min-h-screen bg-void text-gray-200 flex flex-col selection:bg-phosphor selection:text-void bg-terminal-grid",children:[l.jsx(Qv,{onOpenAuditModal:o}),l.jsxs("main",{className:"flex-grow space-y-8",children:[l.jsx(Jv,{onOpenAuditModal:o}),l.jsx(e_,{}),l.jsx(t_,{}),l.jsx(n_,{}),l.jsx(i_,{onOpenAuditModalWithScope:c}),l.jsx(r_,{})]}),l.jsx(s_,{}),l.jsx(a_,{isOpen:s,onClose:()=>e(!1),initialScope:n})]})},l_=()=>{const s=Le.useRef(null),[e,n]=Le.useState("PLONK"),o={PLONK:{formula:"KZG10 on BN254 / Universal SRS",waveSpeed:2.2,frequency:.65,hueBase:260,constraints:"2^19 Plonkish Permutations",proofSize:"~800 bytes",verifyTime:"2.8 ms"},GROTH16:{formula:"Pairing e(A, B) = e(α, β) · e(x, γ) on BLS12-381",waveSpeed:1.4,frequency:.45,hueBase:190,constraints:"2^20 R1CS Constraints",proofSize:"128 bytes (Constant)",verifyTime:"1.2 ms"},HALO2:{formula:"IPA (Inner Product Argument) without Trusted Setup",waveSpeed:3,frequency:.85,hueBase:150,constraints:"2^21 UltraPlonk Custom Gates",proofSize:"1.4 KB",verifyTime:"4.5 ms"}}[e];return Le.useEffect(()=>{const c=s.current;if(!c)return;const d=c.getContext("2d");if(!d)return;let f,p=0,x=0,y=0,S=!1;const g=()=>{const v=c.getBoundingClientRect();c.width=v.width*window.devicePixelRatio,c.height=v.height*window.devicePixelRatio,d.scale(window.devicePixelRatio,window.devicePixelRatio)};g(),window.addEventListener("resize",g);const M=v=>{const R=c.getBoundingClientRect();x=v.clientX-R.left,y=v.clientY-R.top,S=!0},E=()=>{S=!1};c.addEventListener("mousemove",M),c.addEventListener("mouseleave",E);const C=Array.from({length:45},()=>({x:Math.random(),y:Math.random(),vx:(Math.random()-.5)*.002,vy:(Math.random()-.5)*.002,radius:Math.random()*2.5+1.5,phase:Math.random()*Math.PI*2})),_=()=>{p+=.015;const v=c.getBoundingClientRect(),R=v.width,L=v.height;d.clearRect(0,0,R,L);const T=d.createRadialGradient(R*.5,L*.5,20,R*.5,L*.5,R*.6);T.addColorStop(0,"rgba(139, 92, 246, 0.12)"),T.addColorStop(.5,"rgba(56, 189, 248, 0.06)"),T.addColorStop(1,"rgba(8, 5, 20, 0)"),d.fillStyle=T,d.fillRect(0,0,R,L);const D=18,P=28,F=R*.5,w=L*.6,I=Math.min(R,L)/22;d.lineWidth=1.2;for(let B=0;B<D;B++){d.beginPath();let z=!1;const Y=B-D/2;for(let ae=0;ae<P;ae++){const G=ae-P/2,ce=Math.sqrt(G*G+Y*Y),$=S?Math.exp(-Math.hypot(F+G*I-x,w+Y*I-y)/80)*3:0,X=Math.sin(ce*o.frequency-p*o.waveSpeed)*1.8+Math.cos(G*.5+p)*.8+$,re=F+(G-Y*.5)*I*1.3,oe=w+(G*.2+Y*.6)*I*.9-X*I*.7;z?d.lineTo(re,oe):(d.moveTo(re,oe),z=!0)}const Q=o.hueBase+B/D*50;d.strokeStyle=`hsla(${Q}, 85%, 65%, ${.2+B/D*.4})`,d.stroke()}C.forEach((B,z)=>{B.x+=B.vx,B.y+=B.vy,B.x<0&&(B.x=1),B.x>1&&(B.x=0),B.y<0&&(B.y=1),B.y>1&&(B.y=0);const Y=B.x*R,Q=B.y*L;d.beginPath(),d.arc(Y,Q,B.radius+Math.sin(p*3+B.phase)*1,0,Math.PI*2),d.fillStyle=z%3===0?"#10B981":z%2===0?"#00F0FF":"#A78BFA",d.fill();for(let ae=z+1;ae<C.length;ae++){const G=C[ae],ce=Math.hypot(B.x-G.x,B.y-G.y);ce<.12&&(d.beginPath(),d.moveTo(Y,Q),d.lineTo(G.x*R,G.y*L),d.strokeStyle=`rgba(167, 139, 250, ${(.12-ce)*4})`,d.lineWidth=.8,d.stroke())}}),f=requestAnimationFrame(_)};return _(),()=>{window.removeEventListener("resize",g),c.removeEventListener("mousemove",M),c.removeEventListener("mouseleave",E),cancelAnimationFrame(f)}},[e,o]),l.jsxs("div",{className:"relative w-full h-[460px] lg:h-[540px] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#0e0722] via-[#090516] to-[#05030d]",children:[l.jsxs("div",{className:"absolute top-4 left-4 z-20 flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-full text-xs text-purple-200",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"font-semibold",children:"ZK POLYNOMIAL COMMITMENT TOPOLOGY"}),l.jsx("span",{className:"text-white/40",children:"|"}),l.jsx("span",{className:"text-cyan-300 font-mono",children:o.formula})]}),l.jsx("div",{className:"absolute top-4 right-4 z-20 flex items-center gap-1.5 bg-white/5 backdrop-blur-md border border-white/10 p-1 rounded-lg text-[11px]",children:["PLONK","GROTH16","HALO2"].map(c=>l.jsx("button",{onClick:()=>n(c),className:`px-2.5 py-1 rounded transition-all cursor-pointer ${e===c?"bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30":"text-purple-300 hover:text-white"}`,children:c},c))}),l.jsx("canvas",{ref:s,className:"w-full h-full block cursor-pointer"}),l.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between text-xs text-purple-200/70 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl",children:[l.jsxs("div",{className:"flex items-center gap-4 font-mono text-[11px]",children:[l.jsxs("span",{children:["SCHEME: ",l.jsxs("strong",{className:"text-white",children:[e," PROVER"]})]}),l.jsxs("span",{className:"hidden sm:inline",children:["CONSTRAINTS: ",l.jsx("strong",{className:"text-emerald-400",children:o.constraints})]}),l.jsxs("span",{className:"hidden md:inline",children:["PROOF SIZE: ",l.jsx("strong",{className:"text-cyan-300",children:o.proofSize})]}),l.jsxs("span",{className:"hidden lg:inline",children:["VERIFY TIME: ",l.jsx("strong",{className:"text-purple-300",children:o.verifyTime})]})]}),l.jsxs("div",{className:"text-emerald-400 font-mono text-[11px] flex items-center gap-1.5",children:[l.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-emerald-400"}),l.jsx("span",{children:"INTERACTIVE TOPOLOGY ACTIVE"})]})]})]})},c_=()=>{const[s,e]=Le.useState(!1),[n,r]=Le.useState(!1),[o,c]=Le.useState(!1),[d,f]=Le.useState(3),[p,x]=Le.useState("benchmarks"),y=[{title:"Zero-Knowledge Circuit Soundness",icon:ov,badge:"ZK-SNARK & STARK",desc:"Formally proving the absence of under-constrained signals, soundness bugs, and completeness failures in Circom, Halo2, and Gnark arithmetic circuits.",metric:"Over 40M ZK constraints verified"},{title:"Modular Data Availability & Rollup Security",icon:no,badge:"Celestia / EigenDA / Avail",desc:"Verifying 2D Reed-Solomon erasure coding, cryptographic fraud proofs, and decentralized sequencer consensus failover mechanisms.",metric:"Zero consensus state corruption"},{title:"Restaking & Shared Security Defense",icon:Tv,badge:"EigenLayer / Symbiotic / Karak",desc:"Adversarial game-theoretic simulation of AVS slashing conditions, dual-staking invariants, and operator collusion vector analysis.",metric:"$6.2B in Restaked Assets Guarded"},{title:"Multichain Intent Solvers & Relayers",icon:sv,badge:"ERC-7683 / IBC v2 / Hyperlane",desc:"Securing asynchronous cross-chain message queues, optimistic settlement windows, and intent auction MEV-leakage boundaries.",metric:"100% atomic execution safety"}],S=[{system:"Groth16 (BN254)",proofSize:"128 bytes",verifyTime:"1.2 ms",evmGas:"210,000 gas",trustedSetup:"Circuit-specific",status:"Production Tier"},{system:"PLONK / KZG",proofSize:"~800 bytes",verifyTime:"2.8 ms",evmGas:"280,000 gas",trustedSetup:"Universal (Per-field)",status:"Standard"},{system:"Halo2 (IPA)",proofSize:"1.4 KB",verifyTime:"4.5 ms",evmGas:"340,000 gas (with Snark wrapper)",trustedSetup:"None (Transparent)",status:"Next-Gen"},{system:"STARKs (FRI)",proofSize:"45 - 120 KB",verifyTime:"6.2 ms",evmGas:"Recursive Verification",trustedSetup:"None (Quantum-Resistant)",status:"L2 Scaling"}],g=[{id:"EC-PAPER-2026-01",title:"Under-Constrained Signal Discovery via Symbolic SMT Solving in Plonkish Arithmetization",authors:"Elastic Curve Cryptography Research Group",abstract:"We present an automated sound algorithm to systematically extract polynomial permutation constraints and flag unconstrained witness variables before mainnet rollup deployment.",date:"August 2026"},{id:"EC-PAPER-2026-02",title:"Formal Safety Proofs of Asynchronous Cross-Rollup Intent Settlement Relayers",authors:"Elastic Curve Multi-Rollup Division",abstract:"Proving that under arbitrary relayer re-ordering and L1 re-org depth up to k blocks, cross-chain balance preservation invariant strictly holds.",date:"June 2026"}],M=()=>{c(!0),f(0);const E=setInterval(()=>{f(C=>C>=3?(clearInterval(E),c(!1),3):C+1)},600)};return l.jsxs("div",{className:"min-h-screen bg-[#070410] text-purple-100 font-sans selection:bg-purple-500 selection:text-white relative overflow-x-hidden",children:[l.jsx("div",{className:"absolute top-0 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none"}),l.jsx("div",{className:"absolute bottom-10 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"}),l.jsx("div",{className:"border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-4 py-1.5 text-xs text-purple-300/70 font-mono",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),"ZK-CORE::ONLINE"]}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsx("span",{children:"POLYNOMIAL COMMITMENTS & MULTICHAIN RESILIENCE"})]}),l.jsxs("div",{className:"flex items-center gap-4 text-[11px]",children:[l.jsxs("span",{children:["ZK CIRCUITS VERIFIED: ",l.jsx("strong",{className:"text-white",children:"180+"})]}),l.jsxs("span",{children:["ARITHMETIC GATES: ",l.jsx("strong",{className:"text-cyan-300",children:"42,000,000+"})]})]})]})}),l.jsxs("header",{className:"sticky top-11 z-40 bg-[#070410]/80 backdrop-blur-2xl border-b border-white/10",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("div",{className:"w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 via-indigo-500 to-cyan-400 p-0.5 shadow-lg shadow-purple-500/20",children:l.jsx("div",{className:"w-full h-full bg-[#0c071d] rounded-[10px] flex items-center justify-center",children:l.jsx($s,{className:"w-5 h-5 text-cyan-300"})})}),l.jsxs("div",{children:[l.jsxs("span",{className:"text-lg font-bold tracking-wider text-white flex items-center gap-1.5",children:["ELASTIC CURVE",l.jsx("span",{className:"text-[10px] text-purple-300 bg-purple-500/20 border border-purple-400/30 px-2 py-0.5 rounded-full font-mono",children:"NEO-TECH"})]}),l.jsx("span",{className:"text-[11px] text-purple-300/60 block -mt-1 tracking-widest font-mono",children:"CRYPTOGRAPHIC LABS"})]})]}),l.jsxs("nav",{className:"hidden lg:flex items-center gap-8 text-sm text-purple-200/80 font-medium",children:[l.jsx("a",{href:"#zk-engine",className:"hover:text-cyan-300 transition-colors",children:"ZK Engine"}),l.jsx("a",{href:"#modular",className:"hover:text-cyan-300 transition-colors",children:"Modular Stacks"}),l.jsx("a",{href:"#interactive-proof",className:"hover:text-cyan-300 transition-colors",children:"Proof Simulator"}),l.jsx("a",{href:"#research",className:"hover:text-cyan-300 transition-colors",children:"Papers & Benchmarks"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>e(!0),className:"bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 hover:from-purple-400 hover:to-cyan-300 text-slate-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-all shadow-lg shadow-purple-500/25 flex items-center gap-2 hover:scale-[1.02] cursor-pointer",children:[l.jsx($s,{className:"w-4 h-4"}),l.jsx("span",{children:"Launch Engagement"})]}),l.jsx("button",{onClick:()=>r(!n),className:"lg:hidden p-2 text-purple-300 hover:text-white",children:n?l.jsx(rc,{className:"w-6 h-6"}):l.jsx(nc,{className:"w-6 h-6"})})]})]}),n&&l.jsxs("div",{className:"lg:hidden bg-[#0c071d] border-b border-white/10 px-4 py-4 space-y-3 font-mono text-xs",children:[l.jsx("a",{href:"#zk-engine",onClick:()=>r(!1),className:"block text-purple-200 hover:text-cyan-300 py-1.5",children:"[01_ZK_ENGINE]"}),l.jsx("a",{href:"#modular",onClick:()=>r(!1),className:"block text-purple-200 hover:text-cyan-300 py-1.5",children:"[02_MODULAR_STACKS]"}),l.jsx("a",{href:"#interactive-proof",onClick:()=>r(!1),className:"block text-purple-200 hover:text-cyan-300 py-1.5",children:"[03_PROOF_SIMULATOR]"}),l.jsx("a",{href:"#research",onClick:()=>r(!1),className:"block text-purple-200 hover:text-cyan-300 py-1.5",children:"[04_PAPERS_&_BENCHMARKS]"})]})]}),l.jsx("section",{id:"zk-engine",className:"scroll-mt-28 relative pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-xs font-mono text-purple-300 bg-purple-500/10 border border-purple-500/20 px-3.5 py-1.5 rounded-full",children:[l.jsx($s,{className:"w-3.5 h-3.5 text-cyan-300 animate-spin"}),l.jsx("span",{children:"Next-Gen Zero-Knowledge & Protocol Defense"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight",children:["The Future of ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-emerald-400",children:"Cryptographic Proofs"})]}),l.jsx("p",{className:"text-base text-purple-200/70 leading-relaxed",children:"We audit Zero-Knowledge circuits, modular rollups, and cross-chain invariant boundaries. We prove mathematical soundness so your protocol can scale without systemic insolvency."}),l.jsxs("div",{className:"grid grid-cols-3 gap-3 pt-2 font-mono",children:[l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md",children:[l.jsx("div",{className:"text-2xl font-bold text-white",children:"$14.8B"}),l.jsx("div",{className:"text-[11px] text-purple-300/60 mt-1",children:"TVL Guarded"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md",children:[l.jsx("div",{className:"text-2xl font-bold text-cyan-300",children:"42M+"}),l.jsx("div",{className:"text-[11px] text-purple-300/60 mt-1",children:"ZK Constraints"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-xl backdrop-blur-md",children:[l.jsx("div",{className:"text-2xl font-bold text-emerald-400",children:"0"}),l.jsx("div",{className:"text-[11px] text-purple-300/60 mt-1",children:"Soundness Flaws"})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row gap-3",children:[l.jsxs("button",{onClick:()=>e(!0),className:"flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 font-bold px-6 py-3.5 rounded-xl text-sm transition-all shadow-lg shadow-purple-500/20 hover:scale-[1.02] cursor-pointer",children:[l.jsx("span",{children:"Request Cryptographic Audit"}),l.jsx(tc,{className:"w-4 h-4"})]}),l.jsxs("a",{href:"#interactive-proof",className:"flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-purple-200 border border-white/10 px-6 py-3.5 rounded-xl text-sm transition-colors cursor-pointer",children:[l.jsx(na,{className:"w-4 h-4 text-cyan-300"}),l.jsx("span",{children:"Test ZK Simulator"})]})]})]}),l.jsx("div",{className:"lg:col-span-7",children:l.jsx(l_,{})})]})}),l.jsxs("section",{id:"modular",className:"scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest mb-2",children:"MODULAR PARADIGMS"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Security for Next-Generation Decentralized Architecture"}),l.jsx("p",{className:"text-purple-200/70 text-sm sm:text-base mt-3",children:"Monolithic security is obsolete. We specialize in the new frontier: validity rollups, modular data availability layers, and shared security mesh networks."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:y.map((E,C)=>{const _=E.icon;return l.jsxs("div",{className:"bg-white/[0.03] hover:bg-white/[0.05] border border-white/10 hover:border-purple-500/40 rounded-2xl p-8 transition-all duration-200 backdrop-blur-xl group flex flex-col justify-between",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-4",children:[l.jsx("span",{className:"text-xs font-mono font-medium text-cyan-300 bg-cyan-500/10 border border-cyan-400/20 px-3 py-1 rounded-full",children:E.badge}),l.jsx("div",{className:"w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-400/20 flex items-center justify-center text-purple-300 group-hover:text-cyan-300 transition-colors",children:l.jsx(_,{className:"w-5 h-5"})})]}),l.jsx("h3",{className:"text-xl font-bold text-white group-hover:text-cyan-200 transition-colors mb-2",children:E.title}),l.jsx("p",{className:"text-purple-200/70 text-sm leading-relaxed mb-6",children:E.desc})]}),l.jsxs("div",{className:"border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono text-emerald-400",children:[l.jsx("span",{children:"METRIC:"}),l.jsx("span",{className:"font-bold",children:E.metric})]})]},C)})})]}),l.jsx("section",{id:"interactive-proof",className:"scroll-mt-28 py-20 bg-white/[0.01] border-y border-white/10",children:l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[l.jsxs("div",{className:"max-w-3xl mb-12",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-emerald-400 uppercase tracking-widest mb-2",children:"INTERACTIVE REASONING LAB"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Zero-Knowledge Verification Simulator"}),l.jsx("p",{className:"text-purple-200/70 text-sm mt-2",children:"Experience our automated constraint-soundness engine in real time. Simulate polynomial evaluation and verify KZG multi-point open commitments."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white/[0.03] border border-white/10 rounded-2xl p-6 lg:p-8 backdrop-blur-2xl",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"space-y-4",children:[l.jsxs("div",{className:"bg-white/5 p-4 rounded-xl border border-white/10",children:[l.jsx("div",{className:"text-xs font-bold text-white mb-1 font-mono",children:"CIRCUIT SPECIFICATION:"}),l.jsxs("div",{className:"text-xs text-purple-300/80 font-mono",children:["Target: ",l.jsx("code",{children:"BatchMerkleTreeUpdate.circom"})]}),l.jsx("div",{className:"text-[11px] text-purple-200/60 mt-1",children:"Depth: 32 • Arity: 2 • Hash Function: PoseidonT3 • Curves: BN254 / Alt_bn128"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-purple-300",children:"POLYNOMIAL DEGREE:"}),l.jsx("span",{className:"text-cyan-300 font-bold",children:"2^18 (262,144 gates)"})]}),l.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-purple-300",children:"SOUNDNESS ERROR:"}),l.jsx("span",{className:"text-emerald-400 font-bold",children:"ε < 2^-128 (Cryptographic Invariant)"})]})]})]}),l.jsxs("button",{onClick:M,disabled:o,className:"w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold py-3.5 rounded-xl text-xs font-mono transition-all shadow-lg shadow-purple-500/20 disabled:opacity-60 cursor-pointer",children:[l.jsx(Pv,{className:"w-4 h-4 fill-current"}),l.jsx("span",{children:o?"EXECUTING Z3 SOUNDNESS PROVER...":"RUN VERIFICATION PIPELINE"})]})]}),l.jsxs("div",{className:"lg:col-span-7 bg-[#0b061d] border border-white/10 rounded-xl p-5 font-mono text-xs space-y-3",children:[l.jsxs("div",{className:"text-purple-400 border-b border-white/10 pb-2 flex justify-between text-[11px]",children:[l.jsx("span",{children:"STAGE TRACE // KZG_BATCH_EVALUATOR"}),l.jsxs("span",{children:["STATE: ",o?"ACTIVE":"READY"]})]}),l.jsx("div",{className:"space-y-3 pt-2",children:[{step:0,label:"01. R1CS to Plonkish Arithmetization",desc:"Parsing 262,144 gates and building permutation copy-constraints."},{step:1,label:"02. Under-Constrained Signal Fuzzing",desc:"Attempting to forge witness values without private inputs."},{step:2,label:"03. SMT Solvers Invariant Proving",desc:"Proving polynomial quotient vanishing over roots of unity H."},{step:3,label:"04. Cryptographic Proof Attestation",desc:"Verifier contract gas footprint confirmed: 242,100 gas on EVM."}].map(E=>l.jsxs("div",{className:`p-3 rounded-lg border transition-all ${d>=E.step?"bg-emerald-500/10 border-emerald-500/30 text-emerald-300":"bg-white/[0.02] border-white/5 text-purple-300/40"}`,children:[l.jsxs("div",{className:"flex items-center justify-between font-bold text-xs",children:[l.jsx("span",{children:E.label}),d>=E.step&&l.jsx("span",{className:"text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded",children:"PROVED"})]}),l.jsx("div",{className:"text-[11px] text-purple-200/70 mt-1",children:E.desc})]},E.step))})]})]})]})}),l.jsxs("section",{id:"research",className:"scroll-mt-28 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"max-w-3xl mb-12",children:[l.jsx("div",{className:"text-xs font-mono font-semibold text-cyan-300 uppercase tracking-widest mb-2",children:"ACADEMIC RIGOR & BENCHMARKS"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-extrabold text-white tracking-tight",children:"Cryptographic Research & Proof Metrics"}),l.jsx("p",{className:"text-purple-200/70 text-sm mt-2",children:"Switch between prover performance benchmarks, published theorem papers, and circuit vulnerability taxonomies."})]}),l.jsxs("div",{className:"flex flex-wrap gap-2 mb-8 font-mono text-xs",children:[l.jsx("button",{onClick:()=>x("benchmarks"),className:`px-4 py-2 rounded-xl border transition-all cursor-pointer ${p==="benchmarks"?"bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20":"bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10"}`,children:"[01_PROVER_BENCHMARKS]"}),l.jsx("button",{onClick:()=>x("papers"),className:`px-4 py-2 rounded-xl border transition-all cursor-pointer ${p==="papers"?"bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20":"bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10"}`,children:"[02_FORMAL_PAPERS]"}),l.jsx("button",{onClick:()=>x("vulnerabilities"),className:`px-4 py-2 rounded-xl border transition-all cursor-pointer ${p==="vulnerabilities"?"bg-purple-600 text-white font-bold border-purple-400 shadow-lg shadow-purple-500/20":"bg-white/5 text-purple-300 border-white/10 hover:text-white hover:bg-white/10"}`,children:"[03_CIRCUIT_FLAW_TAXONOMY]"})]}),p==="benchmarks"&&l.jsx("div",{className:"bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-2xl",children:l.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[l.jsx("thead",{className:"bg-white/5 border-b border-white/10 text-purple-300 text-[11px] uppercase",children:l.jsxs("tr",{children:[l.jsx("th",{className:"py-3.5 px-6",children:"PROOF_SYSTEM"}),l.jsx("th",{className:"py-3.5 px-6",children:"PROOF_SIZE"}),l.jsx("th",{className:"py-3.5 px-6",children:"VERIFICATION_TIME"}),l.jsx("th",{className:"py-3.5 px-6",children:"EVM_GAS_FOOTPRINT"}),l.jsx("th",{className:"py-3.5 px-6",children:"TRUSTED_SETUP"}),l.jsx("th",{className:"py-3.5 px-6 text-right",children:"TIER"})]})}),l.jsx("tbody",{className:"divide-y divide-white/5",children:S.map((E,C)=>l.jsxs("tr",{className:"hover:bg-white/[0.02] transition-colors",children:[l.jsx("td",{className:"py-4 px-6 font-bold text-white",children:E.system}),l.jsx("td",{className:"py-4 px-6 text-cyan-300",children:E.proofSize}),l.jsx("td",{className:"py-4 px-6 text-emerald-300",children:E.verifyTime}),l.jsx("td",{className:"py-4 px-6 text-purple-200",children:E.evmGas}),l.jsx("td",{className:"py-4 px-6 text-purple-300/70",children:E.trustedSetup}),l.jsx("td",{className:"py-4 px-6 text-right",children:l.jsx("span",{className:"text-[10px] bg-purple-500/20 text-purple-200 border border-purple-400/30 px-2 py-0.5 rounded-full",children:E.status})})]},C))})]})}),p==="papers"&&l.jsx("div",{className:"space-y-4",children:g.map((E,C)=>l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 rounded-2xl p-6 backdrop-blur-2xl flex flex-col md:flex-row md:items-center justify-between gap-4",children:[l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-300",children:[l.jsx(y0,{className:"w-4 h-4"}),l.jsx("span",{children:E.id}),l.jsx("span",{children:"•"}),l.jsx("span",{className:"text-purple-300/60",children:E.date})]}),l.jsx("h3",{className:"text-lg font-bold text-white font-sans",children:E.title}),l.jsx("p",{className:"text-xs text-purple-200/70 leading-relaxed max-w-2xl",children:E.abstract})]}),l.jsxs("button",{onClick:()=>alert(`Downloading preprint for ${E.id}...`),className:"inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/15 px-4 py-2 rounded-xl text-xs font-mono text-purple-200 hover:text-white transition-colors cursor-pointer shrink-0",children:[l.jsx(v0,{className:"w-3.5 h-3.5 text-cyan-300"}),l.jsx("span",{children:"DOWNLOAD_PDF"})]})]},C))}),p==="vulnerabilities"&&l.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs",children:[l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2",children:[l.jsx("div",{className:"text-red-400 font-bold",children:"01::UNDER_CONSTRAINED_SIGNALS"}),l.jsx("p",{className:"text-purple-200/70 text-[11px] leading-relaxed",children:"When an arithmetic circuit fails to constrain an intermediate signal, allowing a malicious prover to synthesize a valid proof with forged inputs."}),l.jsx("div",{className:"text-emerald-400 text-[10px] pt-1",children:"VERIFIED VIA: Z3 Permutation Solvers"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2",children:[l.jsx("div",{className:"text-amber-400 font-bold",children:"02::SHADOW_POLYNOMIAL_OVERFLOW"}),l.jsx("p",{className:"text-purple-200/70 text-[11px] leading-relaxed",children:"Polynomial evaluation wrap-around mod p during multi-scalar multiplication (MSM) that yields accidental collision in quotient vanishing polynomials."}),l.jsx("div",{className:"text-emerald-400 text-[10px] pt-1",children:"VERIFIED VIA: Symbolic Range Assertions"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-5 rounded-2xl space-y-2",children:[l.jsx("div",{className:"text-cyan-400 font-bold",children:"03::FIAT_SHAMIR_WEAK_HASHING"}),l.jsx("p",{className:"text-purple-200/70 text-[11px] leading-relaxed",children:"Insecure transcript absorbing order where verifier challenge α is generated without binding all preceding public signals."}),l.jsx("div",{className:"text-emerald-400 text-[10px] pt-1",children:"VERIFIED VIA: Transcript State Machine Check"})]})]})]}),s&&l.jsx("div",{className:"fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4",children:l.jsxs("div",{className:"bg-[#0f0a26] border border-purple-500/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[l.jsxs("div",{className:"flex items-center gap-2 text-white font-bold",children:[l.jsx($s,{className:"w-5 h-5 text-cyan-300"}),l.jsx("span",{children:"Initialize Cryptographic Audit"})]}),l.jsx("button",{onClick:()=>e(!1),className:"text-purple-300 hover:text-white text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 cursor-pointer",children:"Close"})]}),l.jsxs("form",{onSubmit:E=>{E.preventDefault(),alert("Cryptographic engagement submitted! Our cryptography lead will reach out."),e(!1)},className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-purple-200 font-medium mb-1",children:"Protocol / Circuit Repository URL"}),l.jsx("input",{type:"text",required:!0,placeholder:"https://github.com/protocol/circuits",className:"w-full bg-[#080414] border border-white/10 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-cyan-400"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-purple-200 font-medium mb-1",children:"Architecture Domain"}),l.jsxs("select",{className:"w-full bg-[#080414] border border-white/10 text-white px-3 py-2 rounded-xl focus:outline-none focus:border-cyan-400",children:[l.jsx("option",{children:"ZK-Rollup & Circuits"}),l.jsx("option",{children:"Modular Data Availability"}),l.jsx("option",{children:"Restaking & AVS"}),l.jsx("option",{children:"Cross-Rollup Relayer"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-purple-200 font-medium mb-1",children:"Contact (Telegram/Signal)"}),l.jsx("input",{type:"text",required:!0,placeholder:"@lead_crypto",className:"w-full bg-[#080414] border border-white/10 text-white px-3 py-2 rounded-xl focus:outline-none focus:border-cyan-400"})]})]}),l.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-purple-500 to-cyan-400 text-slate-950 font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-500/20 cursor-pointer",children:"Dispatch Circuit Docket"})]})]})}),l.jsx("footer",{className:"bg-[#05020d] border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 text-xs text-purple-300/60 font-mono",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[l.jsx("div",{className:"flex items-center gap-2 text-white font-bold tracking-wider",children:l.jsx("span",{children:"ELASTIC_CURVE::NEO_TECH_LABS"})}),l.jsxs("div",{className:"flex items-center gap-4 text-[11px]",children:[l.jsx("a",{href:"#zk-engine",className:"hover:text-cyan-300",children:"ZK-ENGINE"}),l.jsx("span",{children:"•"}),l.jsx("a",{href:"#modular",className:"hover:text-cyan-300",children:"MODULAR_STACKS"}),l.jsx("span",{children:"•"}),l.jsx("a",{href:"#interactive-proof",className:"hover:text-cyan-300",children:"PROOF_SIMULATOR"}),l.jsx("span",{children:"•"}),l.jsx("a",{href:"#research",className:"hover:text-cyan-300",children:"BENCHMARKS"})]})]})})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="185",u_=0,fm=1,d_=2,kl=1,h_=2,eo=3,Pr=0,Gn=1,Pi=2,er=0,Js=1,Nd=2,pm=3,mm=4,f_=5,is=100,p_=101,m_=102,x_=103,g_=104,v_=200,__=201,y_=202,S_=203,Rd=204,Pd=205,M_=206,E_=207,b_=208,w_=209,T_=210,A_=211,C_=212,N_=213,R_=214,Id=0,Ld=1,Dd=2,ia=3,Ud=4,Fd=5,Od=6,kd=7,b0=0,P_=1,I_=2,Di=0,w0=1,T0=2,A0=3,C0=4,N0=5,R0=6,P0=7,I0=300,os=301,ra=302,qu=303,Yu=304,sc=306,Bd=1e3,Ji=1001,zd=1002,vn=1003,L_=1004,pl=1005,Tn=1006,$u=1007,ss=1008,Qn=1009,L0=1010,D0=1011,io=1012,bh=1013,Fi=1014,Ii=1015,nr=1016,wh=1017,Th=1018,ro=1020,U0=35902,F0=35899,O0=1021,k0=1022,Mi=1023,ir=1026,as=1027,B0=1028,Ah=1029,ls=1030,Ch=1031,Nh=1033,Bl=33776,zl=33777,Vl=33778,jl=33779,Vd=35840,jd=35841,Hd=35842,Gd=35843,Wd=36196,Xd=37492,qd=37496,Yd=37488,$d=37489,ql=37490,Kd=37491,Zd=37808,Qd=37809,Jd=37810,eh=37811,th=37812,nh=37813,ih=37814,rh=37815,sh=37816,ah=37817,oh=37818,lh=37819,ch=37820,uh=37821,dh=36492,hh=36494,fh=36495,ph=36283,mh=36284,Yl=36285,xh=36286,D_=3200,gh=0,U_=1,Nr="",oi="srgb",$l="srgb-linear",Kl="linear",Dt="srgb",Ds=7680,xm=519,F_=512,O_=513,k_=514,Rh=515,B_=516,z_=517,Ph=518,V_=519,gm=35044,vm="300 es",Li=2e3,so=2001;function j_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zl(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function H_(){const s=Zl("canvas");return s.style.display="block",s}const _m={};function ym(...s){const e="THREE."+s.shift();console.log(e,...s)}function z0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=s[1];n&&n.isStackTrace?s[0]+=" "+n.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function at(...s){s=z0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...s)}}function At(...s){s=z0(s);const e="THREE."+s.shift();{const n=s[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...s)}}function ea(...s){const e=s.join(" ");e in _m||(_m[e]=!0,at(...s))}function G_(s,e,n){return new Promise(function(r,o){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:r()}}setTimeout(c,n)})}const W_={[Id]:Ld,[Dd]:Od,[Ud]:kd,[ia]:Fd,[Ld]:Id,[Od]:Dd,[kd]:Ud,[Fd]:ia};class cs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(n)===-1&&r[e].push(n)}hasEventListener(e,n){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(n)!==-1}removeEventListener(e,n){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const r=n[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let c=0,d=o.length;c<d;c++)o[c].call(this,e);e.target=null}}}const bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,vh=180/Math.PI;function ao(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(bn[s&255]+bn[s>>8&255]+bn[s>>16&255]+bn[s>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[n&63|128]+bn[n>>8&255]+"-"+bn[n>>16&255]+bn[n>>24&255]+bn[r&255]+bn[r>>8&255]+bn[r>>16&255]+bn[r>>24&255]).toLowerCase()}function Et(s,e,n){return Math.max(e,Math.min(n,s))}function X_(s,e){return(s%e+e)%e}function Zu(s,e,n){return(1-n)*s+n*e}function qa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function jn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Uh=class Uh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,r=this.y,o=e.elements;return this.x=o[0]*n+o[3]*r+o[6],this.y=o[1]*n+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y;return n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const r=Math.cos(n),o=Math.sin(n),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*o+e.x,this.y=c*o+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Uh.prototype.isVector2=!0;let _t=Uh;class oa{constructor(e=0,n=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=r,this._w=o}static slerpFlat(e,n,r,o,c,d,f){let p=r[o+0],x=r[o+1],y=r[o+2],S=r[o+3],g=c[d+0],M=c[d+1],E=c[d+2],C=c[d+3];if(S!==C||p!==g||x!==M||y!==E){let _=p*g+x*M+y*E+S*C;_<0&&(g=-g,M=-M,E=-E,C=-C,_=-_);let v=1-f;if(_<.9995){const R=Math.acos(_),L=Math.sin(R);v=Math.sin(v*R)/L,f=Math.sin(f*R)/L,p=p*v+g*f,x=x*v+M*f,y=y*v+E*f,S=S*v+C*f}else{p=p*v+g*f,x=x*v+M*f,y=y*v+E*f,S=S*v+C*f;const R=1/Math.sqrt(p*p+x*x+y*y+S*S);p*=R,x*=R,y*=R,S*=R}}e[n]=p,e[n+1]=x,e[n+2]=y,e[n+3]=S}static multiplyQuaternionsFlat(e,n,r,o,c,d){const f=r[o],p=r[o+1],x=r[o+2],y=r[o+3],S=c[d],g=c[d+1],M=c[d+2],E=c[d+3];return e[n]=f*E+y*S+p*M-x*g,e[n+1]=p*E+y*g+x*S-f*M,e[n+2]=x*E+y*M+f*g-p*S,e[n+3]=y*E-f*S-p*g-x*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,r,o){return this._x=e,this._y=n,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const r=e._x,o=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,x=f(r/2),y=f(o/2),S=f(c/2),g=p(r/2),M=p(o/2),E=p(c/2);switch(d){case"XYZ":this._x=g*y*S+x*M*E,this._y=x*M*S-g*y*E,this._z=x*y*E+g*M*S,this._w=x*y*S-g*M*E;break;case"YXZ":this._x=g*y*S+x*M*E,this._y=x*M*S-g*y*E,this._z=x*y*E-g*M*S,this._w=x*y*S+g*M*E;break;case"ZXY":this._x=g*y*S-x*M*E,this._y=x*M*S+g*y*E,this._z=x*y*E+g*M*S,this._w=x*y*S-g*M*E;break;case"ZYX":this._x=g*y*S-x*M*E,this._y=x*M*S+g*y*E,this._z=x*y*E-g*M*S,this._w=x*y*S+g*M*E;break;case"YZX":this._x=g*y*S+x*M*E,this._y=x*M*S+g*y*E,this._z=x*y*E-g*M*S,this._w=x*y*S-g*M*E;break;case"XZY":this._x=g*y*S-x*M*E,this._y=x*M*S-g*y*E,this._z=x*y*E+g*M*S,this._w=x*y*S+g*M*E;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const r=n/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,r=n[0],o=n[4],c=n[8],d=n[1],f=n[5],p=n[9],x=n[2],y=n[6],S=n[10],g=r+f+S;if(g>0){const M=.5/Math.sqrt(g+1);this._w=.25/M,this._x=(y-p)*M,this._y=(c-x)*M,this._z=(d-o)*M}else if(r>f&&r>S){const M=2*Math.sqrt(1+r-f-S);this._w=(y-p)/M,this._x=.25*M,this._y=(o+d)/M,this._z=(c+x)/M}else if(f>S){const M=2*Math.sqrt(1+f-r-S);this._w=(c-x)/M,this._x=(o+d)/M,this._y=.25*M,this._z=(p+y)/M}else{const M=2*Math.sqrt(1+S-r-f);this._w=(d-o)/M,this._x=(c+x)/M,this._y=(p+y)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let r=e.dot(n)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,n){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,n/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const r=e._x,o=e._y,c=e._z,d=e._w,f=n._x,p=n._y,x=n._z,y=n._w;return this._x=r*y+d*f+o*x-c*p,this._y=o*y+d*p+c*f-r*x,this._z=c*y+d*x+r*p-o*f,this._w=d*y-r*f-o*p-c*x,this._onChangeCallback(),this}slerp(e,n){let r=e._x,o=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,c=-c,d=-d,f=-f);let p=1-n;if(f<.9995){const x=Math.acos(f),y=Math.sin(x);p=Math.sin(p*x)/y,n=Math.sin(n*x)/y,this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this._onChangeCallback()}else this._x=this._x*p+r*n,this._y=this._y*p+o*n,this._z=this._z*p+c*n,this._w=this._w*p+d*n,this.normalize();return this}slerpQuaternions(e,n,r){return this.copy(e).slerp(n,r)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Fh=class Fh{constructor(e=0,n=0,r=0){this.x=e,this.y=n,this.z=r}set(e,n,r){return r===void 0&&(r=this.z),this.x=e,this.y=n,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Sm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Sm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*r+c[6]*o,this.y=c[1]*n+c[4]*r+c[7]*o,this.z=c[2]*n+c[5]*r+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=e.elements,d=1/(c[3]*n+c[7]*r+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*r+c[8]*o+c[12])*d,this.y=(c[1]*n+c[5]*r+c[9]*o+c[13])*d,this.z=(c[2]*n+c[6]*r+c[10]*o+c[14])*d,this}applyQuaternion(e){const n=this.x,r=this.y,o=this.z,c=e.x,d=e.y,f=e.z,p=e.w,x=2*(d*o-f*r),y=2*(f*n-c*o),S=2*(c*r-d*n);return this.x=n+p*x+d*S-f*y,this.y=r+p*y+f*x-c*S,this.z=o+p*S+c*y-d*x,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,r=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*r+c[8]*o,this.y=c[1]*n+c[5]*r+c[9]*o,this.z=c[2]*n+c[6]*r+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const r=e.x,o=e.y,c=e.z,d=n.x,f=n.y,p=n.z;return this.x=o*p-c*f,this.y=c*d-r*p,this.z=r*f-o*d,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const r=e.dot(this)/n;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const r=this.dot(e)/n;return Math.acos(Et(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return n*n+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,r){const o=Math.sin(n)*e;return this.x=o*Math.sin(r),this.y=Math.cos(n)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,r){return this.x=e*Math.sin(n),this.y=r,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=r,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,r=Math.sqrt(1-n*n);return this.x=r*Math.cos(e),this.y=n,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fh.prototype.isVector3=!0;let Z=Fh;const Qu=new Z,Sm=new oa,Oh=class Oh{constructor(e,n,r,o,c,d,f,p,x){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,x)}set(e,n,r,o,c,d,f,p,x){const y=this.elements;return y[0]=e,y[1]=o,y[2]=f,y[3]=n,y[4]=c,y[5]=p,y[6]=r,y[7]=d,y[8]=x,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],this}extractBasis(e,n,r){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[3],p=r[6],x=r[1],y=r[4],S=r[7],g=r[2],M=r[5],E=r[8],C=o[0],_=o[3],v=o[6],R=o[1],L=o[4],T=o[7],D=o[2],P=o[5],F=o[8];return c[0]=d*C+f*R+p*D,c[3]=d*_+f*L+p*P,c[6]=d*v+f*T+p*F,c[1]=x*C+y*R+S*D,c[4]=x*_+y*L+S*P,c[7]=x*v+y*T+S*F,c[2]=g*C+M*R+E*D,c[5]=g*_+M*L+E*P,c[8]=g*v+M*T+E*F,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],x=e[7],y=e[8];return n*d*y-n*f*x-r*c*y+r*f*p+o*c*x-o*d*p}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],x=e[7],y=e[8],S=y*d-f*x,g=f*p-y*c,M=x*c-d*p,E=n*S+r*g+o*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=S*C,e[1]=(o*x-y*r)*C,e[2]=(f*r-o*d)*C,e[3]=g*C,e[4]=(y*n-o*p)*C,e[5]=(o*c-f*n)*C,e[6]=M*C,e[7]=(r*p-x*n)*C,e[8]=(d*n-r*c)*C,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,r,o,c,d,f){const p=Math.cos(c),x=Math.sin(c);return this.set(r*p,r*x,-r*(p*d+x*f)+d+e,-o*x,o*p,-o*(-x*d+p*f)+f+n,0,0,1),this}scale(e,n){return ea("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ju.makeScale(e,n)),this}rotate(e){return ea("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ju.makeRotation(-e)),this}translate(e,n){return ea("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,r,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<9;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<9;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Oh.prototype.isMatrix3=!0;let dt=Oh;const Ju=new dt,Mm=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Em=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function q_(){const s={enabled:!0,workingColorSpace:$l,spaces:{},convert:function(o,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Dt&&(o.r=tr(o.r),o.g=tr(o.g),o.b=tr(o.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(o.applyMatrix3(this.spaces[c].toXYZ),o.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Dt&&(o.r=ta(o.r),o.g=ta(o.g),o.b=ta(o.b))),o},workingToColorSpace:function(o,c){return this.convert(o,this.workingColorSpace,c)},colorSpaceToWorking:function(o,c){return this.convert(o,c,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Nr?Kl:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,c=this.workingColorSpace){return o.fromArray(this.spaces[c].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,c,d){return o.copy(this.spaces[c].toXYZ).multiply(this.spaces[d].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,c){return ea("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,c)},toWorkingColorSpace:function(o,c){return ea("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,c)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[$l]:{primaries:e,whitePoint:r,transfer:Kl,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Mm,fromXYZ:Em,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}}),s}const Mt=q_();function tr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ta(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class Y_{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Us===void 0&&(Us=Zl("canvas")),Us.width=e.width,Us.height=e.height;const o=Us.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Us}return r.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Zl("canvas");n.width=e.width,n.height=e.height;const r=n.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),c=o.data;for(let d=0;d<c.length;d++)c[d]=tr(c[d]/255)*255;return r.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let r=0;r<n.length;r++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[r]=Math.floor(tr(n[r]/255)*255):n[r]=tr(n[r]);return{data:n,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let $_=0;class Ih{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$_++}),this.uuid=ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let d=0,f=o.length;d<f;d++)o[d].isDataTexture?c.push(ed(o[d].image)):c.push(ed(o[d]))}else c=ed(o);r.url=c}return n||(e.images[this.uuid]=r),r}}function ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Y_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let K_=0;const td=new Z;class Pn extends cs{constructor(e=Pn.DEFAULT_IMAGE,n=Pn.DEFAULT_MAPPING,r=Ji,o=Ji,c=Tn,d=ss,f=Mi,p=Qn,x=Pn.DEFAULT_ANISOTROPY,y=Nr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=ao(),this.name="",this.source=new Ih(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=c,this.minFilter=d,this.anisotropy=x,this.format=f,this.internalFormat=null,this.type=p,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=y,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(td).x}get height(){return this.source.getSize(td).y}get depth(){return this.source.getSize(td).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const r=e[n];if(r===void 0){at(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),n||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==I0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case Ji:e.x=e.x<0?0:1;break;case zd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case Ji:e.y=e.y<0?0:1;break;case zd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Pn.DEFAULT_IMAGE=null;Pn.DEFAULT_MAPPING=I0;Pn.DEFAULT_ANISOTROPY=1;const kh=class kh{constructor(e=0,n=0,r=0,o=1){this.x=e,this.y=n,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,r,o){return this.x=e,this.y=n,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,r=this.y,o=this.z,c=this.w,d=e.elements;return this.x=d[0]*n+d[4]*r+d[8]*o+d[12]*c,this.y=d[1]*n+d[5]*r+d[9]*o+d[13]*c,this.z=d[2]*n+d[6]*r+d[10]*o+d[14]*c,this.w=d[3]*n+d[7]*r+d[11]*o+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,r,o,c;const p=e.elements,x=p[0],y=p[4],S=p[8],g=p[1],M=p[5],E=p[9],C=p[2],_=p[6],v=p[10];if(Math.abs(y-g)<.01&&Math.abs(S-C)<.01&&Math.abs(E-_)<.01){if(Math.abs(y+g)<.1&&Math.abs(S+C)<.1&&Math.abs(E+_)<.1&&Math.abs(x+M+v-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(x+1)/2,T=(M+1)/2,D=(v+1)/2,P=(y+g)/4,F=(S+C)/4,w=(E+_)/4;return L>T&&L>D?L<.01?(r=0,o=.707106781,c=.707106781):(r=Math.sqrt(L),o=P/r,c=F/r):T>D?T<.01?(r=.707106781,o=0,c=.707106781):(o=Math.sqrt(T),r=P/o,c=w/o):D<.01?(r=.707106781,o=.707106781,c=0):(c=Math.sqrt(D),r=F/c,o=w/c),this.set(r,o,c,n),this}let R=Math.sqrt((_-E)*(_-E)+(S-C)*(S-C)+(g-y)*(g-y));return Math.abs(R)<.001&&(R=1),this.x=(_-E)/R,this.y=(S-C)/R,this.z=(g-y)/R,this.w=Math.acos((x+M+v-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Et(this.x,e.x,n.x),this.y=Et(this.y,e.y,n.y),this.z=Et(this.z,e.z,n.z),this.w=Et(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Et(this.x,e,n),this.y=Et(this.y,e,n),this.z=Et(this.z,e,n),this.w=Et(this.w,e,n),this}clampLength(e,n){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Et(r,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,r){return this.x=e.x+(n.x-e.x)*r,this.y=e.y+(n.y-e.y)*r,this.z=e.z+(n.z-e.z)*r,this.w=e.w+(n.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};kh.prototype.isVector4=!0;let Qt=kh;class Z_ extends cs{constructor(e=1,n=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=r.depth,this.scissor=new Qt(0,0,e,n),this.scissorTest=!1,this.viewport=new Qt(0,0,e,n),this.textures=[];const o={width:e,height:n,depth:r.depth},c=new Pn(o),d=r.count;for(let f=0;f<d;f++)this.textures[f]=c.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const n={minFilter:Tn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,r=1){if(this.width!==e||this.height!==n||this.depth!==r){this.width=e,this.height=n,this.depth=r;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},e.textures[n].image);this.textures[n].source=new Ih(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends Z_{constructor(e=1,n=1,r={}){super(e,n,r),this.isWebGLRenderTarget=!0}}class V0 extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends Pn{constructor(e=null,n=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:r,depth:o},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ji,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ec=class ec{constructor(e,n,r,o,c,d,f,p,x,y,S,g,M,E,C,_){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,r,o,c,d,f,p,x,y,S,g,M,E,C,_)}set(e,n,r,o,c,d,f,p,x,y,S,g,M,E,C,_){const v=this.elements;return v[0]=e,v[4]=n,v[8]=r,v[12]=o,v[1]=c,v[5]=d,v[9]=f,v[13]=p,v[2]=x,v[6]=y,v[10]=S,v[14]=g,v[3]=M,v[7]=E,v[11]=C,v[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ec().fromArray(this.elements)}copy(e){const n=this.elements,r=e.elements;return n[0]=r[0],n[1]=r[1],n[2]=r[2],n[3]=r[3],n[4]=r[4],n[5]=r[5],n[6]=r[6],n[7]=r[7],n[8]=r[8],n[9]=r[9],n[10]=r[10],n[11]=r[11],n[12]=r[12],n[13]=r[13],n[14]=r[14],n[15]=r[15],this}copyPosition(e){const n=this.elements,r=e.elements;return n[12]=r[12],n[13]=r[13],n[14]=r[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,r){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,n,r){return this.set(e.x,n.x,r.x,0,e.y,n.y,r.y,0,e.z,n.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const n=this.elements,r=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),c=1/Fs.setFromMatrixColumn(e,1).length(),d=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=r[0]*o,n[1]=r[1]*o,n[2]=r[2]*o,n[3]=0,n[4]=r[4]*c,n[5]=r[5]*c,n[6]=r[6]*c,n[7]=0,n[8]=r[8]*d,n[9]=r[9]*d,n[10]=r[10]*d,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,r=e.x,o=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(o),x=Math.sin(o),y=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const g=d*y,M=d*S,E=f*y,C=f*S;n[0]=p*y,n[4]=-p*S,n[8]=x,n[1]=M+E*x,n[5]=g-C*x,n[9]=-f*p,n[2]=C-g*x,n[6]=E+M*x,n[10]=d*p}else if(e.order==="YXZ"){const g=p*y,M=p*S,E=x*y,C=x*S;n[0]=g+C*f,n[4]=E*f-M,n[8]=d*x,n[1]=d*S,n[5]=d*y,n[9]=-f,n[2]=M*f-E,n[6]=C+g*f,n[10]=d*p}else if(e.order==="ZXY"){const g=p*y,M=p*S,E=x*y,C=x*S;n[0]=g-C*f,n[4]=-d*S,n[8]=E+M*f,n[1]=M+E*f,n[5]=d*y,n[9]=C-g*f,n[2]=-d*x,n[6]=f,n[10]=d*p}else if(e.order==="ZYX"){const g=d*y,M=d*S,E=f*y,C=f*S;n[0]=p*y,n[4]=E*x-M,n[8]=g*x+C,n[1]=p*S,n[5]=C*x+g,n[9]=M*x-E,n[2]=-x,n[6]=f*p,n[10]=d*p}else if(e.order==="YZX"){const g=d*p,M=d*x,E=f*p,C=f*x;n[0]=p*y,n[4]=C-g*S,n[8]=E*S+M,n[1]=S,n[5]=d*y,n[9]=-f*y,n[2]=-x*y,n[6]=M*S+E,n[10]=g-C*S}else if(e.order==="XZY"){const g=d*p,M=d*x,E=f*p,C=f*x;n[0]=p*y,n[4]=-S,n[8]=x*y,n[1]=g*S+C,n[5]=d*y,n[9]=M*S-E,n[2]=E*S-M,n[6]=f*y,n[10]=C*S+g}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J_,e,ey)}lookAt(e,n,r){const o=this.elements;return $n.subVectors(e,n),$n.lengthSq()===0&&($n.z=1),$n.normalize(),Er.crossVectors(r,$n),Er.lengthSq()===0&&(Math.abs(r.z)===1?$n.x+=1e-4:$n.z+=1e-4,$n.normalize(),Er.crossVectors(r,$n)),Er.normalize(),ml.crossVectors($n,Er),o[0]=Er.x,o[4]=ml.x,o[8]=$n.x,o[1]=Er.y,o[5]=ml.y,o[9]=$n.y,o[2]=Er.z,o[6]=ml.z,o[10]=$n.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const r=e.elements,o=n.elements,c=this.elements,d=r[0],f=r[4],p=r[8],x=r[12],y=r[1],S=r[5],g=r[9],M=r[13],E=r[2],C=r[6],_=r[10],v=r[14],R=r[3],L=r[7],T=r[11],D=r[15],P=o[0],F=o[4],w=o[8],I=o[12],B=o[1],z=o[5],Y=o[9],Q=o[13],ae=o[2],G=o[6],ce=o[10],$=o[14],X=o[3],re=o[7],oe=o[11],k=o[15];return c[0]=d*P+f*B+p*ae+x*X,c[4]=d*F+f*z+p*G+x*re,c[8]=d*w+f*Y+p*ce+x*oe,c[12]=d*I+f*Q+p*$+x*k,c[1]=y*P+S*B+g*ae+M*X,c[5]=y*F+S*z+g*G+M*re,c[9]=y*w+S*Y+g*ce+M*oe,c[13]=y*I+S*Q+g*$+M*k,c[2]=E*P+C*B+_*ae+v*X,c[6]=E*F+C*z+_*G+v*re,c[10]=E*w+C*Y+_*ce+v*oe,c[14]=E*I+C*Q+_*$+v*k,c[3]=R*P+L*B+T*ae+D*X,c[7]=R*F+L*z+T*G+D*re,c[11]=R*w+L*Y+T*ce+D*oe,c[15]=R*I+L*Q+T*$+D*k,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[12],d=e[1],f=e[5],p=e[9],x=e[13],y=e[2],S=e[6],g=e[10],M=e[14],E=e[3],C=e[7],_=e[11],v=e[15],R=p*M-x*g,L=f*M-x*S,T=f*g-p*S,D=d*M-x*y,P=d*g-p*y,F=d*S-f*y;return n*(C*R-_*L+v*T)-r*(E*R-_*D+v*P)+o*(E*L-C*D+v*F)-c*(E*T-C*P+_*F)}determinantAffine(){const e=this.elements,n=e[0],r=e[4],o=e[8],c=e[1],d=e[5],f=e[9],p=e[2],x=e[6],y=e[10];return n*(d*y-f*x)-r*(c*y-f*p)+o*(c*x-d*p)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=r),this}invert(){const e=this.elements,n=e[0],r=e[1],o=e[2],c=e[3],d=e[4],f=e[5],p=e[6],x=e[7],y=e[8],S=e[9],g=e[10],M=e[11],E=e[12],C=e[13],_=e[14],v=e[15],R=n*f-r*d,L=n*p-o*d,T=n*x-c*d,D=r*p-o*f,P=r*x-c*f,F=o*x-c*p,w=y*C-S*E,I=y*_-g*E,B=y*v-M*E,z=S*_-g*C,Y=S*v-M*C,Q=g*v-M*_,ae=R*Q-L*Y+T*z+D*B-P*I+F*w;if(ae===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/ae;return e[0]=(f*Q-p*Y+x*z)*G,e[1]=(o*Y-r*Q-c*z)*G,e[2]=(C*F-_*P+v*D)*G,e[3]=(g*P-S*F-M*D)*G,e[4]=(p*B-d*Q-x*I)*G,e[5]=(n*Q-o*B+c*I)*G,e[6]=(_*T-E*F-v*L)*G,e[7]=(y*F-g*T+M*L)*G,e[8]=(d*Y-f*B+x*w)*G,e[9]=(r*B-n*Y-c*w)*G,e[10]=(E*P-C*T+v*R)*G,e[11]=(S*T-y*P-M*R)*G,e[12]=(f*I-d*z-p*w)*G,e[13]=(n*z-r*I+o*w)*G,e[14]=(C*L-E*D-_*R)*G,e[15]=(y*D-S*L+g*R)*G,this}scale(e){const n=this.elements,r=e.x,o=e.y,c=e.z;return n[0]*=r,n[4]*=o,n[8]*=c,n[1]*=r,n[5]*=o,n[9]*=c,n[2]*=r,n[6]*=o,n[10]*=c,n[3]*=r,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,r,o))}makeTranslation(e,n,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,r,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,n,-r,0,0,r,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,0,r,0,0,1,0,0,-r,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),r=Math.sin(e);return this.set(n,-r,0,0,r,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const r=Math.cos(n),o=Math.sin(n),c=1-r,d=e.x,f=e.y,p=e.z,x=c*d,y=c*f;return this.set(x*d+r,x*f-o*p,x*p+o*f,0,x*f+o*p,y*f+r,y*p-o*d,0,x*p-o*f,y*p+o*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,n,r){return this.set(e,0,0,0,0,n,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,n,r,o,c,d){return this.set(1,r,c,0,e,1,d,0,n,o,1,0,0,0,0,1),this}compose(e,n,r){const o=this.elements,c=n._x,d=n._y,f=n._z,p=n._w,x=c+c,y=d+d,S=f+f,g=c*x,M=c*y,E=c*S,C=d*y,_=d*S,v=f*S,R=p*x,L=p*y,T=p*S,D=r.x,P=r.y,F=r.z;return o[0]=(1-(C+v))*D,o[1]=(M+T)*D,o[2]=(E-L)*D,o[3]=0,o[4]=(M-T)*P,o[5]=(1-(g+v))*P,o[6]=(_+R)*P,o[7]=0,o[8]=(E+L)*F,o[9]=(_-R)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),n.identity(),this;let d=Fs.set(o[0],o[1],o[2]).length();const f=Fs.set(o[4],o[5],o[6]).length(),p=Fs.set(o[8],o[9],o[10]).length();c<0&&(d=-d),gi.copy(this);const x=1/d,y=1/f,S=1/p;return gi.elements[0]*=x,gi.elements[1]*=x,gi.elements[2]*=x,gi.elements[4]*=y,gi.elements[5]*=y,gi.elements[6]*=y,gi.elements[8]*=S,gi.elements[9]*=S,gi.elements[10]*=S,n.setFromRotationMatrix(gi),r.x=d,r.y=f,r.z=p,this}makePerspective(e,n,r,o,c,d,f=Li,p=!1){const x=this.elements,y=2*c/(n-e),S=2*c/(r-o),g=(n+e)/(n-e),M=(r+o)/(r-o);let E,C;if(p)E=c/(d-c),C=d*c/(d-c);else if(f===Li)E=-(d+c)/(d-c),C=-2*d*c/(d-c);else if(f===so)E=-d/(d-c),C=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return x[0]=y,x[4]=0,x[8]=g,x[12]=0,x[1]=0,x[5]=S,x[9]=M,x[13]=0,x[2]=0,x[6]=0,x[10]=E,x[14]=C,x[3]=0,x[7]=0,x[11]=-1,x[15]=0,this}makeOrthographic(e,n,r,o,c,d,f=Li,p=!1){const x=this.elements,y=2/(n-e),S=2/(r-o),g=-(n+e)/(n-e),M=-(r+o)/(r-o);let E,C;if(p)E=1/(d-c),C=d/(d-c);else if(f===Li)E=-2/(d-c),C=-(d+c)/(d-c);else if(f===so)E=-1/(d-c),C=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return x[0]=y,x[4]=0,x[8]=0,x[12]=g,x[1]=0,x[5]=S,x[9]=0,x[13]=M,x[2]=0,x[6]=0,x[10]=E,x[14]=C,x[3]=0,x[7]=0,x[11]=0,x[15]=1,this}equals(e){const n=this.elements,r=e.elements;for(let o=0;o<16;o++)if(n[o]!==r[o])return!1;return!0}fromArray(e,n=0){for(let r=0;r<16;r++)this.elements[r]=e[r+n];return this}toArray(e=[],n=0){const r=this.elements;return e[n]=r[0],e[n+1]=r[1],e[n+2]=r[2],e[n+3]=r[3],e[n+4]=r[4],e[n+5]=r[5],e[n+6]=r[6],e[n+7]=r[7],e[n+8]=r[8],e[n+9]=r[9],e[n+10]=r[10],e[n+11]=r[11],e[n+12]=r[12],e[n+13]=r[13],e[n+14]=r[14],e[n+15]=r[15],e}};ec.prototype.isMatrix4=!0;let Jt=ec;const Fs=new Z,gi=new Jt,J_=new Z(0,0,0),ey=new Z(1,1,1),Er=new Z,ml=new Z,$n=new Z,bm=new Jt,wm=new oa;class Ir{constructor(e=0,n=0,r=0,o=Ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,r,o=this._order){return this._x=e,this._y=n,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,r=!0){const o=e.elements,c=o[0],d=o[4],f=o[8],p=o[1],x=o[5],y=o[9],S=o[2],g=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Et(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-y,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(g,x),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(f,M),this._z=Math.atan2(p,x)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Et(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,x)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-Et(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,M),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,x));break;case"YZX":this._z=Math.asin(Et(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-y,x),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,M));break;case"XZY":this._z=Math.asin(-Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(g,x),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-y,M),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,r){return bm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(bm,n,r)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return wm.setFromEuler(this),this.setFromQuaternion(wm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ir.DEFAULT_ORDER="XYZ";class j0{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ty=0;const Tm=new Z,Os=new oa,qi=new Jt,xl=new Z,Ya=new Z,ny=new Z,iy=new oa,Am=new Z(1,0,0),Cm=new Z(0,1,0),Nm=new Z(0,0,1),Rm={type:"added"},ry={type:"removed"},ks={type:"childadded",child:null},nd={type:"childremoved",child:null};class In extends cs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ty++}),this.uuid=ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Z,n=new Ir,r=new oa,o=new Z(1,1,1);function c(){r.setFromEuler(n,!1)}function d(){n.setFromQuaternion(r,void 0,!1)}n._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Jt},normalMatrix:{value:new dt}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new j0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(Am,e)}rotateY(e){return this.rotateOnAxis(Cm,e)}rotateZ(e){return this.rotateOnAxis(Nm,e)}translateOnAxis(e,n){return Tm.copy(e).applyQuaternion(this.quaternion),this.position.add(Tm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Am,e)}translateY(e){return this.translateOnAxis(Cm,e)}translateZ(e){return this.translateOnAxis(Nm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(qi.copy(this.matrixWorld).invert())}lookAt(e,n,r){e.isVector3?xl.copy(e):xl.set(e,n,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Ya.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?qi.lookAt(Ya,xl,this.up):qi.lookAt(xl,Ya,this.up),this.quaternion.setFromRotationMatrix(qi),o&&(qi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(qi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rm),ks.child=e,this.dispatchEvent(ks),ks.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(ry),nd.child=e,this.dispatchEvent(nd),nd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),qi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),qi.multiply(e.parent.matrixWorld)),e.applyMatrix4(qi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rm),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let r=0,o=this.children.length;r<o;r++){const d=this.children[r].getObjectByProperty(e,n);if(d!==void 0)return d}}getObjectsByProperty(e,n,r=[]){this[e]===n&&r.push(this);const o=this.children;for(let c=0,d=o.length;c<d;c++)o[c].getObjectsByProperty(e,n,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,e,ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ya,iy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,r=e.y,o=e.z,c=this.matrix.elements;c[12]+=n-c[0]*n-c[4]*r-c[8]*o,c[13]+=r-c[1]*n-c[5]*r-c[9]*o,c[14]+=o-c[2]*n-c[6]*r-c[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let r=0,o=n.length;r<o;r++)n[r].updateMatrixWorld(e)}updateWorldMatrix(e,n,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),n===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const n=e===void 0||typeof e=="string",r={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let x=0,y=p.length;x<y;x++){const S=p[x];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,x=this.material.length;p<x;p++)f.push(c(e.materials,this.material[p]));o.material=f}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(c(e.animations,p))}}if(n){const f=d(e.geometries),p=d(e.materials),x=d(e.textures),y=d(e.images),S=d(e.shapes),g=d(e.skeletons),M=d(e.animations),E=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),x.length>0&&(r.textures=x),y.length>0&&(r.images=y),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=o,r;function d(f){const p=[];for(const x in f){const y=f[x];delete y.metadata,p.push(y)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}In.DEFAULT_UP=new Z(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ks extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sy={type:"move"};class id{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const r of e.hand.values())this._getHandJoint(n,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,r){let o=null,c=null,d=null;const f=this._targetRay,p=this._grip,x=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(x&&e.hand){d=!0;for(const C of e.hand.values()){const _=n.getJointPose(C,r),v=this._getHandJoint(x,C);_!==null&&(v.matrix.fromArray(_.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=_.radius),v.visible=_!==null}const y=x.joints["index-finger-tip"],S=x.joints["thumb-tip"],g=y.position.distanceTo(S.position),M=.02,E=.005;x.inputState.pinching&&g>M+E?(x.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!x.inputState.pinching&&g<=M-E&&(x.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=n.getPose(e.targetRaySpace,r),o===null&&c!==null&&(o=c),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(sy)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=c!==null),x!==null&&(x.visible=d!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const r=new Ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[n.jointName]=r,e.add(r)}return e.joints[n.jointName]}}const H0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},br={h:0,s:0,l:0},gl={h:0,s:0,l:0};function rd(s,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?s+(e-s)*6*n:n<1/2?e:n<2/3?s+(e-s)*6*(2/3-n):s}class vt{constructor(e,n,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,r)}set(e,n,r){if(n===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=oi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.colorSpaceToWorking(this,n),this}setRGB(e,n,r,o=Mt.workingColorSpace){return this.r=e,this.g=n,this.b=r,Mt.colorSpaceToWorking(this,o),this}setHSL(e,n,r,o=Mt.workingColorSpace){if(e=X_(e,1),n=Et(n,0,1),r=Et(r,0,1),n===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+n):r+n-r*n,d=2*r-c;this.r=rd(d,c,e+1/3),this.g=rd(d,c,e),this.b=rd(d,c,e-1/3)}return Mt.colorSpaceToWorking(this,o),this}setStyle(e,n=oi){function r(c){c!==void 0&&parseFloat(c)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=o[1],f=o[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:at("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(d===6)return this.setHex(parseInt(c,16),n);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=oi){const r=H0[e.toLowerCase()];return r!==void 0?this.setHex(r,n):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=tr(e.r),this.g=tr(e.g),this.b=tr(e.b),this}copyLinearToSRGB(e){return this.r=ta(e.r),this.g=ta(e.g),this.b=ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=oi){return Mt.workingToColorSpace(wn.copy(this),e),Math.round(Et(wn.r*255,0,255))*65536+Math.round(Et(wn.g*255,0,255))*256+Math.round(Et(wn.b*255,0,255))}getHexString(e=oi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Mt.workingColorSpace){Mt.workingToColorSpace(wn.copy(this),n);const r=wn.r,o=wn.g,c=wn.b,d=Math.max(r,o,c),f=Math.min(r,o,c);let p,x;const y=(f+d)/2;if(f===d)p=0,x=0;else{const S=d-f;switch(x=y<=.5?S/(d+f):S/(2-d-f),d){case r:p=(o-c)/S+(o<c?6:0);break;case o:p=(c-r)/S+2;break;case c:p=(r-o)/S+4;break}p/=6}return e.h=p,e.s=x,e.l=y,e}getRGB(e,n=Mt.workingColorSpace){return Mt.workingToColorSpace(wn.copy(this),n),e.r=wn.r,e.g=wn.g,e.b=wn.b,e}getStyle(e=oi){Mt.workingToColorSpace(wn.copy(this),e);const n=wn.r,r=wn.g,o=wn.b;return e!==oi?`color(${e} ${n.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,n,r){return this.getHSL(br),this.setHSL(br.h+e,br.s+n,br.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,r){return this.r=e.r+(n.r-e.r)*r,this.g=e.g+(n.g-e.g)*r,this.b=e.b+(n.b-e.b)*r,this}lerpHSL(e,n){this.getHSL(br),e.getHSL(gl);const r=Zu(br.h,gl.h,n),o=Zu(br.s,gl.s,n),c=Zu(br.l,gl.l,n);return this.setHSL(r,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,r=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*r+c[6]*o,this.g=c[1]*n+c[4]*r+c[7]*o,this.b=c[2]*n+c[5]*r+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const wn=new vt;vt.NAMES=H0;class ay extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ir,this.environmentIntensity=1,this.environmentRotation=new Ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const vi=new Z,Yi=new Z,sd=new Z,$i=new Z,Bs=new Z,zs=new Z,Pm=new Z,ad=new Z,od=new Z,ld=new Z,cd=new Qt,ud=new Qt,dd=new Qt;class Si{constructor(e=new Z,n=new Z,r=new Z){this.a=e,this.b=n,this.c=r}static getNormal(e,n,r,o){o.subVectors(r,n),vi.subVectors(e,n),o.cross(vi);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,r,o,c){vi.subVectors(o,n),Yi.subVectors(r,n),sd.subVectors(e,n);const d=vi.dot(vi),f=vi.dot(Yi),p=vi.dot(sd),x=Yi.dot(Yi),y=Yi.dot(sd),S=d*x-f*f;if(S===0)return c.set(0,0,0),null;const g=1/S,M=(x*p-f*y)*g,E=(d*y-f*p)*g;return c.set(1-M-E,E,M)}static containsPoint(e,n,r,o){return this.getBarycoord(e,n,r,o,$i)===null?!1:$i.x>=0&&$i.y>=0&&$i.x+$i.y<=1}static getInterpolation(e,n,r,o,c,d,f,p){return this.getBarycoord(e,n,r,o,$i)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,$i.x),p.addScaledVector(d,$i.y),p.addScaledVector(f,$i.z),p)}static getInterpolatedAttribute(e,n,r,o,c,d){return cd.setScalar(0),ud.setScalar(0),dd.setScalar(0),cd.fromBufferAttribute(e,n),ud.fromBufferAttribute(e,r),dd.fromBufferAttribute(e,o),d.setScalar(0),d.addScaledVector(cd,c.x),d.addScaledVector(ud,c.y),d.addScaledVector(dd,c.z),d}static isFrontFacing(e,n,r,o){return vi.subVectors(r,n),Yi.subVectors(e,n),vi.cross(Yi).dot(o)<0}set(e,n,r){return this.a.copy(e),this.b.copy(n),this.c.copy(r),this}setFromPointsAndIndices(e,n,r,o){return this.a.copy(e[n]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,r,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),Yi.subVectors(this.a,this.b),vi.cross(Yi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Si.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Si.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,r,o,c){return Si.getInterpolation(e,this.a,this.b,this.c,n,r,o,c)}containsPoint(e){return Si.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Si.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const r=this.a,o=this.b,c=this.c;let d,f;Bs.subVectors(o,r),zs.subVectors(c,r),ad.subVectors(e,r);const p=Bs.dot(ad),x=zs.dot(ad);if(p<=0&&x<=0)return n.copy(r);od.subVectors(e,o);const y=Bs.dot(od),S=zs.dot(od);if(y>=0&&S<=y)return n.copy(o);const g=p*S-y*x;if(g<=0&&p>=0&&y<=0)return d=p/(p-y),n.copy(r).addScaledVector(Bs,d);ld.subVectors(e,c);const M=Bs.dot(ld),E=zs.dot(ld);if(E>=0&&M<=E)return n.copy(c);const C=M*x-p*E;if(C<=0&&x>=0&&E<=0)return f=x/(x-E),n.copy(r).addScaledVector(zs,f);const _=y*E-M*S;if(_<=0&&S-y>=0&&M-E>=0)return Pm.subVectors(c,o),f=(S-y)/(S-y+(M-E)),n.copy(o).addScaledVector(Pm,f);const v=1/(_+C+g);return d=C*v,f=g*v,n.copy(r).addScaledVector(Bs,d).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class oo{constructor(e=new Z(1/0,1/0,1/0),n=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n+=3)this.expandByPoint(_i.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,r=e.count;n<r;n++)this.expandByPoint(_i.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,r=e.length;n<r;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const r=_i.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,_i):_i.fromBufferAttribute(c,d),_i.applyMatrix4(e.matrixWorld),this.expandByPoint(_i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),vl.copy(r.boundingBox)),vl.applyMatrix4(e.matrixWorld),this.union(vl)}const o=e.children;for(let c=0,d=o.length;c<d;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,_i),_i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,r;return e.normal.x>0?(n=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),n<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($a),_l.subVectors(this.max,$a),Vs.subVectors(e.a,$a),js.subVectors(e.b,$a),Hs.subVectors(e.c,$a),wr.subVectors(js,Vs),Tr.subVectors(Hs,js),Zr.subVectors(Vs,Hs);let n=[0,-wr.z,wr.y,0,-Tr.z,Tr.y,0,-Zr.z,Zr.y,wr.z,0,-wr.x,Tr.z,0,-Tr.x,Zr.z,0,-Zr.x,-wr.y,wr.x,0,-Tr.y,Tr.x,0,-Zr.y,Zr.x,0];return!hd(n,Vs,js,Hs,_l)||(n=[1,0,0,0,1,0,0,0,1],!hd(n,Vs,js,Hs,_l))?!1:(yl.crossVectors(wr,Tr),n=[yl.x,yl.y,yl.z],hd(n,Vs,js,Hs,_l))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(_i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ki=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],_i=new Z,vl=new oo,Vs=new Z,js=new Z,Hs=new Z,wr=new Z,Tr=new Z,Zr=new Z,$a=new Z,_l=new Z,yl=new Z,Qr=new Z;function hd(s,e,n,r,o){for(let c=0,d=s.length-3;c<=d;c+=3){Qr.fromArray(s,c);const f=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),p=e.dot(Qr),x=n.dot(Qr),y=r.dot(Qr);if(Math.max(-Math.max(p,x,y),Math.min(p,x,y))>f)return!1}return!0}const an=new Z,Sl=new _t;let oy=0;class li extends cs{constructor(e,n,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:oy++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=r,this.usage=gm,this.updateRanges=[],this.gpuType=Ii,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,r){e*=this.itemSize,r*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,r=this.count;n<r;n++)Sl.fromBufferAttribute(this,n),Sl.applyMatrix3(e),this.setXY(n,Sl.x,Sl.y);else if(this.itemSize===3)for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyMatrix3(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyMatrix4(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyMatrix4(e),this.setXYZ(n,an.x,an.y,an.z);return this}applyNormalMatrix(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.applyNormalMatrix(e),this.setXYZ(n,an.x,an.y,an.z);return this}transformDirection(e){for(let n=0,r=this.count;n<r;n++)an.fromBufferAttribute(this,n),an.transformDirection(e),this.setXYZ(n,an.x,an.y,an.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let r=this.array[e*this.itemSize+n];return this.normalized&&(r=qa(r,this.array)),r}setComponent(e,n,r){return this.normalized&&(r=jn(r,this.array)),this.array[e*this.itemSize+n]=r,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qa(n,this.array)),n}setX(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qa(n,this.array)),n}setY(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qa(n,this.array)),n}setZ(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qa(n,this.array)),n}setW(e,n){return this.normalized&&(n=jn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,r){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array)),this.array[e+0]=n,this.array[e+1]=r,this}setXYZ(e,n,r,o){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),o=jn(o,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,n,r,o,c){return e*=this.itemSize,this.normalized&&(n=jn(n,this.array),r=jn(r,this.array),o=jn(o,this.array),c=jn(c,this.array)),this.array[e+0]=n,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==gm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class G0 extends li{constructor(e,n,r){super(new Uint16Array(e),n,r)}}class W0 extends li{constructor(e,n,r){super(new Uint32Array(e),n,r)}}class nn extends li{constructor(e,n,r){super(new Float32Array(e),n,r)}}const ly=new oo,Ka=new Z,fd=new Z;class ac{constructor(e=new Z,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const r=this.center;n!==void 0?r.copy(n):ly.setFromPoints(e).getCenter(r);let o=0;for(let c=0,d=e.length;c<d;c++)o=Math.max(o,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const r=this.center.distanceToSquared(e);return n.copy(e),r>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ka.subVectors(e,this.center);const n=Ka.lengthSq();if(n>this.radius*this.radius){const r=Math.sqrt(n),o=(r-this.radius)*.5;this.center.addScaledVector(Ka,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ka.copy(e.center).add(fd)),this.expandByPoint(Ka.copy(e.center).sub(fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let cy=0;const ai=new Jt,pd=new In,Gs=new Z,Kn=new oo,Za=new oo,pn=new Z;class Ln extends cs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cy++}),this.uuid=ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(j_(e)?W0:G0)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,r=0){this.groups.push({start:e,count:n,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return ai.makeRotationFromQuaternion(e),this.applyMatrix4(ai),this}rotateX(e){return ai.makeRotationX(e),this.applyMatrix4(ai),this}rotateY(e){return ai.makeRotationY(e),this.applyMatrix4(ai),this}rotateZ(e){return ai.makeRotationZ(e),this.applyMatrix4(ai),this}translate(e,n,r){return ai.makeTranslation(e,n,r),this.applyMatrix4(ai),this}scale(e,n,r){return ai.makeScale(e,n,r),this.applyMatrix4(ai),this}lookAt(e){return pd.lookAt(e),pd.updateMatrix(),this.applyMatrix4(pd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const r=[];for(let o=0,c=e.length;o<c;o++){const d=e[o];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new nn(r,3))}else{const r=Math.min(e.length,n.count);for(let o=0;o<r;o++){const c=e[o];n.setXYZ(o,c.x,c.y,c.z||0)}e.length>n.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new oo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let r=0,o=n.length;r<o;r++){const c=n[r];Kn.setFromBufferAttribute(c),this.morphTargetsRelative?(pn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(pn),pn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(pn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ac);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),n)for(let c=0,d=n.length;c<d;c++){const f=n[c];Za.setFromBufferAttribute(f),this.morphTargetsRelative?(pn.addVectors(Kn.min,Za.min),Kn.expandByPoint(pn),pn.addVectors(Kn.max,Za.max),Kn.expandByPoint(pn)):(Kn.expandByPoint(Za.min),Kn.expandByPoint(Za.max))}Kn.getCenter(r);let o=0;for(let c=0,d=e.count;c<d;c++)pn.fromBufferAttribute(e,c),o=Math.max(o,r.distanceToSquared(pn));if(n)for(let c=0,d=n.length;c<d;c++){const f=n[c],p=this.morphTargetsRelative;for(let x=0,y=f.count;x<y;x++)pn.fromBufferAttribute(f,x),p&&(Gs.fromBufferAttribute(e,x),pn.add(Gs)),o=Math.max(o,r.distanceToSquared(pn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=n.position,o=n.normal,c=n.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new li(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],p=[];for(let w=0;w<r.count;w++)f[w]=new Z,p[w]=new Z;const x=new Z,y=new Z,S=new Z,g=new _t,M=new _t,E=new _t,C=new Z,_=new Z;function v(w,I,B){x.fromBufferAttribute(r,w),y.fromBufferAttribute(r,I),S.fromBufferAttribute(r,B),g.fromBufferAttribute(c,w),M.fromBufferAttribute(c,I),E.fromBufferAttribute(c,B),y.sub(x),S.sub(x),M.sub(g),E.sub(g);const z=1/(M.x*E.y-E.x*M.y);isFinite(z)&&(C.copy(y).multiplyScalar(E.y).addScaledVector(S,-M.y).multiplyScalar(z),_.copy(S).multiplyScalar(M.x).addScaledVector(y,-E.x).multiplyScalar(z),f[w].add(C),f[I].add(C),f[B].add(C),p[w].add(_),p[I].add(_),p[B].add(_))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let w=0,I=R.length;w<I;++w){const B=R[w],z=B.start,Y=B.count;for(let Q=z,ae=z+Y;Q<ae;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const L=new Z,T=new Z,D=new Z,P=new Z;function F(w){D.fromBufferAttribute(o,w),P.copy(D);const I=f[w];L.copy(I),L.sub(D.multiplyScalar(D.dot(I))).normalize(),T.crossVectors(P,I);const z=T.dot(p[w])<0?-1:1;d.setXYZW(w,L.x,L.y,L.z,z)}for(let w=0,I=R.length;w<I;++w){const B=R[w],z=B.start,Y=B.count;for(let Q=z,ae=z+Y;Q<ae;Q+=3)F(e.getX(Q+0)),F(e.getX(Q+1)),F(e.getX(Q+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==n.count)r=new li(new Float32Array(n.count*3),3),this.setAttribute("normal",r);else for(let g=0,M=r.count;g<M;g++)r.setXYZ(g,0,0,0);const o=new Z,c=new Z,d=new Z,f=new Z,p=new Z,x=new Z,y=new Z,S=new Z;if(e)for(let g=0,M=e.count;g<M;g+=3){const E=e.getX(g+0),C=e.getX(g+1),_=e.getX(g+2);o.fromBufferAttribute(n,E),c.fromBufferAttribute(n,C),d.fromBufferAttribute(n,_),y.subVectors(d,c),S.subVectors(o,c),y.cross(S),f.fromBufferAttribute(r,E),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,_),f.add(y),p.add(y),x.add(y),r.setXYZ(E,f.x,f.y,f.z),r.setXYZ(C,p.x,p.y,p.z),r.setXYZ(_,x.x,x.y,x.z)}else for(let g=0,M=n.count;g<M;g+=3)o.fromBufferAttribute(n,g+0),c.fromBufferAttribute(n,g+1),d.fromBufferAttribute(n,g+2),y.subVectors(d,c),S.subVectors(o,c),y.cross(S),r.setXYZ(g+0,y.x,y.y,y.z),r.setXYZ(g+1,y.x,y.y,y.z),r.setXYZ(g+2,y.x,y.y,y.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,r=e.count;n<r;n++)pn.fromBufferAttribute(e,n),pn.normalize(),e.setXYZ(n,pn.x,pn.y,pn.z)}toNonIndexed(){function e(f,p){const x=f.array,y=f.itemSize,S=f.normalized,g=new x.constructor(p.length*y);let M=0,E=0;for(let C=0,_=p.length;C<_;C++){f.isInterleavedBufferAttribute?M=p[C]*f.data.stride+f.offset:M=p[C]*y;for(let v=0;v<y;v++)g[E++]=x[M++]}return new li(g,y,S)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ln,r=this.index.array,o=this.attributes;for(const f in o){const p=o[f],x=e(p,r);n.setAttribute(f,x)}const c=this.morphAttributes;for(const f in c){const p=[],x=c[f];for(let y=0,S=x.length;y<S;y++){const g=x[y],M=e(g,r);p.push(M)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const x=d[f];n.addGroup(x.start,x.count,x.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const x in p)p[x]!==void 0&&(e[x]=p[x]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const r=this.attributes;for(const p in r){const x=r[p];e.data.attributes[p]=x.toJSON(e.data)}const o={};let c=!1;for(const p in this.morphAttributes){const x=this.morphAttributes[p],y=[];for(let S=0,g=x.length;S<g;S++){const M=x[S];y.push(M.toJSON(e.data))}y.length>0&&(o[p]=y,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const x in o){const y=o[x];this.setAttribute(x,y.clone(n))}const c=e.morphAttributes;for(const x in c){const y=[],S=c[x];for(let g=0,M=S.length;g<M;g++)y.push(S[g].clone(n));this.morphAttributes[x]=y}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let x=0,y=d.length;x<y;x++){const S=d[x];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let uy=0;class la extends cs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uy++}),this.uuid=ao(),this.name="",this.type="Material",this.blending=Js,this.side=Pr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rd,this.blendDst=Pd,this.blendEquation=is,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=xm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ds,this.stencilZFail=Ds,this.stencilZPass=Ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const r=e[n];if(r===void 0){at(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){at(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[n]=r}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Js&&(r.blending=this.blending),this.side!==Pr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Rd&&(r.blendSrc=this.blendSrc),this.blendDst!==Pd&&(r.blendDst=this.blendDst),this.blendEquation!==is&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==xm&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ds&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ds&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ds&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(n){const c=o(e.textures),d=o(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new vt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new _t().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new _t().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let r=null;if(n!==null){const o=n.length;r=new Array(o);for(let c=0;c!==o;++c)r[c]=n[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Zi=new Z,md=new Z,Ml=new Z,Ar=new Z,xd=new Z,El=new Z,gd=new Z;class X0{constructor(e=new Z,n=new Z(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Zi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const r=n.dot(this.direction);return r<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Zi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Zi.copy(this.origin).addScaledVector(this.direction,n),Zi.distanceToSquared(e))}distanceSqToSegment(e,n,r,o){md.copy(e).add(n).multiplyScalar(.5),Ml.copy(n).sub(e).normalize(),Ar.copy(this.origin).sub(md);const c=e.distanceTo(n)*.5,d=-this.direction.dot(Ml),f=Ar.dot(this.direction),p=-Ar.dot(Ml),x=Ar.lengthSq(),y=Math.abs(1-d*d);let S,g,M,E;if(y>0)if(S=d*p-f,g=d*f-p,E=c*y,S>=0)if(g>=-E)if(g<=E){const C=1/y;S*=C,g*=C,M=S*(S+d*g+2*f)+g*(d*S+g+2*p)+x}else g=c,S=Math.max(0,-(d*g+f)),M=-S*S+g*(g+2*p)+x;else g=-c,S=Math.max(0,-(d*g+f)),M=-S*S+g*(g+2*p)+x;else g<=-E?(S=Math.max(0,-(-d*c+f)),g=S>0?-c:Math.min(Math.max(-c,-p),c),M=-S*S+g*(g+2*p)+x):g<=E?(S=0,g=Math.min(Math.max(-c,-p),c),M=g*(g+2*p)+x):(S=Math.max(0,-(d*c+f)),g=S>0?c:Math.min(Math.max(-c,-p),c),M=-S*S+g*(g+2*p)+x);else g=d>0?-c:c,S=Math.max(0,-(d*g+f)),M=-S*S+g*(g+2*p)+x;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(md).addScaledVector(Ml,g),M}intersectSphere(e,n){Zi.subVectors(e.center,this.origin);const r=Zi.dot(this.direction),o=Zi.dot(Zi)-r*r,c=e.radius*e.radius;if(o>c)return null;const d=Math.sqrt(c-o),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/n;return r>=0?r:null}intersectPlane(e,n){const r=this.distanceToPlane(e);return r===null?null:this.at(r,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let r,o,c,d,f,p;const x=1/this.direction.x,y=1/this.direction.y,S=1/this.direction.z,g=this.origin;return x>=0?(r=(e.min.x-g.x)*x,o=(e.max.x-g.x)*x):(r=(e.max.x-g.x)*x,o=(e.min.x-g.x)*x),y>=0?(c=(e.min.y-g.y)*y,d=(e.max.y-g.y)*y):(c=(e.max.y-g.y)*y,d=(e.min.y-g.y)*y),r>d||c>o||((c>r||isNaN(r))&&(r=c),(d<o||isNaN(o))&&(o=d),S>=0?(f=(e.min.z-g.z)*S,p=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,p=(e.min.z-g.z)*S),r>p||f>o)||((f>r||r!==r)&&(r=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(r>=0?r:o,n)}intersectsBox(e){return this.intersectBox(e,Zi)!==null}intersectTriangle(e,n,r,o,c){xd.subVectors(n,e),El.subVectors(r,e),gd.crossVectors(xd,El);let d=this.direction.dot(gd),f;if(d>0){if(o)return null;f=1}else if(d<0)f=-1,d=-d;else return null;Ar.subVectors(this.origin,e);const p=f*this.direction.dot(El.crossVectors(Ar,El));if(p<0)return null;const x=f*this.direction.dot(xd.cross(Ar));if(x<0||p+x>d)return null;const y=-f*Ar.dot(gd);return y<0?null:this.at(y/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qi extends la{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.combine=b0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Im=new Jt,Jr=new X0,bl=new ac,Lm=new Z,wl=new Z,Tl=new Z,Al=new Z,vd=new Z,Cl=new Z,Dm=new Z,Nl=new Z;class Hn extends In{constructor(e=new Ln,n=new Qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,n){const r=this.geometry,o=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;n.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(c&&f){Cl.set(0,0,0);for(let p=0,x=c.length;p<x;p++){const y=f[p],S=c[p];y!==0&&(vd.fromBufferAttribute(S,e),d?Cl.addScaledVector(vd,y):Cl.addScaledVector(vd.sub(n),y))}n.add(Cl)}return n}raycast(e,n){const r=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),bl.copy(r.boundingSphere),bl.applyMatrix4(c),Jr.copy(e.ray).recast(e.near),!(bl.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(bl,Lm)===null||Jr.origin.distanceToSquared(Lm)>(e.far-e.near)**2))&&(Im.copy(c).invert(),Jr.copy(e.ray).applyMatrix4(Im),!(r.boundingBox!==null&&Jr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,n,Jr)))}_computeIntersections(e,n,r){let o;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,x=c.attributes.uv,y=c.attributes.uv1,S=c.attributes.normal,g=c.groups,M=c.drawRange;if(f!==null)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const _=g[E],v=d[_.materialIndex],R=Math.max(_.start,M.start),L=Math.min(f.count,Math.min(_.start+_.count,M.start+M.count));for(let T=R,D=L;T<D;T+=3){const P=f.getX(T),F=f.getX(T+1),w=f.getX(T+2);o=Rl(this,v,e,r,x,y,S,P,F,w),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(f.count,M.start+M.count);for(let _=E,v=C;_<v;_+=3){const R=f.getX(_),L=f.getX(_+1),T=f.getX(_+2);o=Rl(this,d,e,r,x,y,S,R,L,T),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(d))for(let E=0,C=g.length;E<C;E++){const _=g[E],v=d[_.materialIndex],R=Math.max(_.start,M.start),L=Math.min(p.count,Math.min(_.start+_.count,M.start+M.count));for(let T=R,D=L;T<D;T+=3){const P=T,F=T+1,w=T+2;o=Rl(this,v,e,r,x,y,S,P,F,w),o&&(o.faceIndex=Math.floor(T/3),o.face.materialIndex=_.materialIndex,n.push(o))}}else{const E=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let _=E,v=C;_<v;_+=3){const R=_,L=_+1,T=_+2;o=Rl(this,d,e,r,x,y,S,R,L,T),o&&(o.faceIndex=Math.floor(_/3),n.push(o))}}}}function dy(s,e,n,r,o,c,d,f){let p;if(e.side===Gn?p=r.intersectTriangle(d,c,o,!0,f):p=r.intersectTriangle(o,c,d,e.side===Pr,f),p===null)return null;Nl.copy(f),Nl.applyMatrix4(s.matrixWorld);const x=n.ray.origin.distanceTo(Nl);return x<n.near||x>n.far?null:{distance:x,point:Nl.clone(),object:s}}function Rl(s,e,n,r,o,c,d,f,p,x){s.getVertexPosition(f,wl),s.getVertexPosition(p,Tl),s.getVertexPosition(x,Al);const y=dy(s,e,n,r,wl,Tl,Al,Dm);if(y){const S=new Z;Si.getBarycoord(Dm,wl,Tl,Al,S),o&&(y.uv=Si.getInterpolatedAttribute(o,f,p,x,S,new _t)),c&&(y.uv1=Si.getInterpolatedAttribute(c,f,p,x,S,new _t)),d&&(y.normal=Si.getInterpolatedAttribute(d,f,p,x,S,new Z),y.normal.dot(r.direction)>0&&y.normal.multiplyScalar(-1));const g={a:f,b:p,c:x,normal:new Z,materialIndex:0};Si.getNormal(wl,Tl,Al,g.normal),y.face=g,y.barycoord=S}return y}class hy extends Pn{constructor(e=null,n=1,r=1,o,c,d,f,p,x=vn,y=vn,S,g){super(null,d,f,p,x,y,o,c,S,g),this.isDataTexture=!0,this.image={data:e,width:n,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const _d=new Z,fy=new Z,py=new dt;class ts{constructor(e=new Z(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,r,o){return this.normal.set(e,n,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,r){const o=_d.subVectors(r,n).cross(fy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,r=!0){const o=e.delta(_d),c=this.normal.dot(o);if(c===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:n.copy(e.start).addScaledVector(o,d)}intersectsLine(e){const n=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return n<0&&r>0||r<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const r=n||py.getNormalMatrix(e),o=this.coplanarPoint(_d).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new ac,my=new _t(.5,.5),Pl=new Z;class Lh{constructor(e=new ts,n=new ts,r=new ts,o=new ts,c=new ts,d=new ts){this.planes=[e,n,r,o,c,d]}set(e,n,r,o,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(n),f[2].copy(r),f[3].copy(o),f[4].copy(c),f[5].copy(d),this}copy(e){const n=this.planes;for(let r=0;r<6;r++)n[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,n=Li,r=!1){const o=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],x=c[3],y=c[4],S=c[5],g=c[6],M=c[7],E=c[8],C=c[9],_=c[10],v=c[11],R=c[12],L=c[13],T=c[14],D=c[15];if(o[0].setComponents(x-d,M-y,v-E,D-R).normalize(),o[1].setComponents(x+d,M+y,v+E,D+R).normalize(),o[2].setComponents(x+f,M+S,v+C,D+L).normalize(),o[3].setComponents(x-f,M-S,v-C,D-L).normalize(),r)o[4].setComponents(p,g,_,T).normalize(),o[5].setComponents(x-p,M-g,v-_,D-T).normalize();else if(o[4].setComponents(x-p,M-g,v-_,D-T).normalize(),n===Li)o[5].setComponents(x+p,M+g,v+_,D+T).normalize();else if(n===so)o[5].setComponents(p,g,_,T).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){es.center.set(0,0,0);const n=my.distanceTo(e.center);return es.radius=.7071067811865476+n,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const n=this.planes,r=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let r=0;r<6;r++){const o=n[r];if(Pl.x=o.normal.x>0?e.max.x:e.min.x,Pl.y=o.normal.y>0?e.max.y:e.min.y,Pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let r=0;r<6;r++)if(n[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class q0 extends la{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Um=new Jt,_h=new X0,Il=new ac,Ll=new Z;class xy extends In{constructor(e=new Ln,n=new q0){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const r=this.geometry,o=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Il.copy(r.boundingSphere),Il.applyMatrix4(o),Il.radius+=c,e.ray.intersectsSphere(Il)===!1)return;Um.copy(o).invert(),_h.copy(e.ray).applyMatrix4(Um);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,x=r.index,S=r.attributes.position;if(x!==null){const g=Math.max(0,d.start),M=Math.min(x.count,d.start+d.count);for(let E=g,C=M;E<C;E++){const _=x.getX(E);Ll.fromBufferAttribute(S,_),Fm(Ll,_,p,o,e,n,this)}}else{const g=Math.max(0,d.start),M=Math.min(S.count,d.start+d.count);for(let E=g,C=M;E<C;E++)Ll.fromBufferAttribute(S,E),Fm(Ll,E,p,o,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,r=Object.keys(n);if(r.length>0){const o=n[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=o.length;c<d;c++){const f=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Fm(s,e,n,r,o,c,d){const f=_h.distanceSqToPoint(s);if(f<n){const p=new Z;_h.closestPointToPoint(s,p),p.applyMatrix4(r);const x=o.ray.origin.distanceTo(p);if(x<o.near||x>o.far)return;c.push({distance:x,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Y0 extends Pn{constructor(e=[],n=os,r,o,c,d,f,p,x,y){super(e,n,r,o,c,d,f,p,x,y),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sa extends Pn{constructor(e,n,r=Fi,o,c,d,f=vn,p=vn,x,y=ir,S=1){if(y!==ir&&y!==as)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:n,depth:S};super(g,o,c,d,f,p,y,r,x),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ih(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class gy extends sa{constructor(e,n=Fi,r=os,o,c,d=vn,f=vn,p,x=ir){const y={width:e,height:e,depth:1},S=[y,y,y,y,y,y];super(e,e,n,r,o,c,d,f,p,x),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class $0 extends Pn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class lo extends Ln{constructor(e=1,n=1,r=1,o=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:r,widthSegments:o,heightSegments:c,depthSegments:d};const f=this;o=Math.floor(o),c=Math.floor(c),d=Math.floor(d);const p=[],x=[],y=[],S=[];let g=0,M=0;E("z","y","x",-1,-1,r,n,e,d,c,0),E("z","y","x",1,-1,r,n,-e,d,c,1),E("x","z","y",1,1,e,r,n,o,d,2),E("x","z","y",1,-1,e,r,-n,o,d,3),E("x","y","z",1,-1,e,n,r,o,c,4),E("x","y","z",-1,-1,e,n,-r,o,c,5),this.setIndex(p),this.setAttribute("position",new nn(x,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(S,2));function E(C,_,v,R,L,T,D,P,F,w,I){const B=T/F,z=D/w,Y=T/2,Q=D/2,ae=P/2,G=F+1,ce=w+1;let $=0,X=0;const re=new Z;for(let oe=0;oe<ce;oe++){const k=oe*z-Q;for(let J=0;J<G;J++){const Ie=J*B-Y;re[C]=Ie*R,re[_]=k*L,re[v]=ae,x.push(re.x,re.y,re.z),re[C]=0,re[_]=0,re[v]=P>0?1:-1,y.push(re.x,re.y,re.z),S.push(J/F),S.push(1-oe/w),$+=1}}for(let oe=0;oe<w;oe++)for(let k=0;k<F;k++){const J=g+k+G*oe,Ie=g+k+G*(oe+1),Ge=g+(k+1)+G*(oe+1),ze=g+(k+1)+G*oe;p.push(J,Ie,ze),p.push(Ie,Ge,ze),X+=6}f.addGroup(M,X,I),M+=X,g+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oc extends Ln{constructor(e=[],n=[],r=1,o=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:r,detail:o};const c=[],d=[];f(o),x(r),y(),this.setAttribute("position",new nn(c,3)),this.setAttribute("normal",new nn(c.slice(),3)),this.setAttribute("uv",new nn(d,2)),o===0?this.computeVertexNormals():this.normalizeNormals();function f(R){const L=new Z,T=new Z,D=new Z;for(let P=0;P<n.length;P+=3)M(n[P+0],L),M(n[P+1],T),M(n[P+2],D),p(L,T,D,R)}function p(R,L,T,D){const P=D+1,F=[];for(let w=0;w<=P;w++){F[w]=[];const I=R.clone().lerp(T,w/P),B=L.clone().lerp(T,w/P),z=P-w;for(let Y=0;Y<=z;Y++)Y===0&&w===P?F[w][Y]=I:F[w][Y]=I.clone().lerp(B,Y/z)}for(let w=0;w<P;w++)for(let I=0;I<2*(P-w)-1;I++){const B=Math.floor(I/2);I%2===0?(g(F[w][B+1]),g(F[w+1][B]),g(F[w][B])):(g(F[w][B+1]),g(F[w+1][B+1]),g(F[w+1][B]))}}function x(R){const L=new Z;for(let T=0;T<c.length;T+=3)L.x=c[T+0],L.y=c[T+1],L.z=c[T+2],L.normalize().multiplyScalar(R),c[T+0]=L.x,c[T+1]=L.y,c[T+2]=L.z}function y(){const R=new Z;for(let L=0;L<c.length;L+=3){R.x=c[L+0],R.y=c[L+1],R.z=c[L+2];const T=_(R)/2/Math.PI+.5,D=v(R)/Math.PI+.5;d.push(T,1-D)}E(),S()}function S(){for(let R=0;R<d.length;R+=6){const L=d[R+0],T=d[R+2],D=d[R+4],P=Math.max(L,T,D),F=Math.min(L,T,D);P>.9&&F<.1&&(L<.2&&(d[R+0]+=1),T<.2&&(d[R+2]+=1),D<.2&&(d[R+4]+=1))}}function g(R){c.push(R.x,R.y,R.z)}function M(R,L){const T=R*3;L.x=e[T+0],L.y=e[T+1],L.z=e[T+2]}function E(){const R=new Z,L=new Z,T=new Z,D=new Z,P=new _t,F=new _t,w=new _t;for(let I=0,B=0;I<c.length;I+=9,B+=6){R.set(c[I+0],c[I+1],c[I+2]),L.set(c[I+3],c[I+4],c[I+5]),T.set(c[I+6],c[I+7],c[I+8]),P.set(d[B+0],d[B+1]),F.set(d[B+2],d[B+3]),w.set(d[B+4],d[B+5]),D.copy(R).add(L).add(T).divideScalar(3);const z=_(D);C(P,B+0,R,z),C(F,B+2,L,z),C(w,B+4,T,z)}}function C(R,L,T,D){D<0&&R.x===1&&(d[L]=R.x-1),T.x===0&&T.z===0&&(d[L]=D/2/Math.PI+.5)}function _(R){return Math.atan2(R.z,-R.x)}function v(R){return Math.atan2(-R.y,Math.sqrt(R.x*R.x+R.z*R.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oc(e.vertices,e.indices,e.radius,e.detail)}}class Ql extends oc{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=1/r,c=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-o,-r,0,-o,r,0,o,-r,0,o,r,-o,-r,0,-o,r,0,o,-r,0,o,r,0,-r,0,-o,r,0,-o,-r,0,o,r,0,o],d=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(c,d,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Ql(e.radius,e.detail)}}class Jl extends oc{constructor(e=1,n=0){const r=(1+Math.sqrt(5))/2,o=[-1,r,0,1,r,0,-1,-r,0,1,-r,0,0,-1,r,0,1,r,0,-1,-r,0,1,-r,r,0,-1,r,0,1,-r,0,-1,-r,0,1],c=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(o,c,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Jl(e.radius,e.detail)}}class lc extends Ln{constructor(e=1,n=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:r,heightSegments:o};const c=e/2,d=n/2,f=Math.floor(r),p=Math.floor(o),x=f+1,y=p+1,S=e/f,g=n/p,M=[],E=[],C=[],_=[];for(let v=0;v<y;v++){const R=v*g-d;for(let L=0;L<x;L++){const T=L*S-c;E.push(T,-R,0),C.push(0,0,1),_.push(L/f),_.push(1-v/p)}}for(let v=0;v<p;v++)for(let R=0;R<f;R++){const L=R+x*v,T=R+x*(v+1),D=R+1+x*(v+1),P=R+1+x*v;M.push(L,T,P),M.push(T,D,P)}this.setIndex(M),this.setAttribute("position",new nn(E,3)),this.setAttribute("normal",new nn(C,3)),this.setAttribute("uv",new nn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Dh extends Ln{constructor(e=.5,n=1,r=32,o=1,c=0,d=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:r,phiSegments:o,thetaStart:c,thetaLength:d},r=Math.max(3,r),o=Math.max(1,o);const f=[],p=[],x=[],y=[];let S=e;const g=(n-e)/o,M=new Z,E=new _t;for(let C=0;C<=o;C++){for(let _=0;_<=r;_++){const v=c+_/r*d;M.x=S*Math.cos(v),M.y=S*Math.sin(v),p.push(M.x,M.y,M.z),x.push(0,0,1),E.x=(M.x/n+1)/2,E.y=(M.y/n+1)/2,y.push(E.x,E.y)}S+=g}for(let C=0;C<o;C++){const _=C*(r+1);for(let v=0;v<r;v++){const R=v+_,L=R,T=R+r+1,D=R+r+2,P=R+1;f.push(L,T,P),f.push(T,D,P)}}this.setIndex(f),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Dh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zs extends Ln{constructor(e=1,n=.4,r=12,o=48,c=Math.PI*2,d=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:r,tubularSegments:o,arc:c,thetaStart:d,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const p=[],x=[],y=[],S=[],g=new Z,M=new Z,E=new Z;for(let C=0;C<=r;C++){const _=d+C/r*f;for(let v=0;v<=o;v++){const R=v/o*c;M.x=(e+n*Math.cos(_))*Math.cos(R),M.y=(e+n*Math.cos(_))*Math.sin(R),M.z=n*Math.sin(_),x.push(M.x,M.y,M.z),g.x=e*Math.cos(R),g.y=e*Math.sin(R),E.subVectors(M,g).normalize(),y.push(E.x,E.y,E.z),S.push(v/o),S.push(C/r)}}for(let C=1;C<=r;C++)for(let _=1;_<=o;_++){const v=(o+1)*C+_-1,R=(o+1)*(C-1)+_-1,L=(o+1)*(C-1)+_,T=(o+1)*C+_;p.push(v,R,T),p.push(R,L,T)}this.setIndex(p),this.setAttribute("position",new nn(x,3)),this.setAttribute("normal",new nn(y,3)),this.setAttribute("uv",new nn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Qs extends Ln{constructor(e=1,n=.4,r=64,o=8,c=2,d=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:n,tubularSegments:r,radialSegments:o,p:c,q:d},r=Math.floor(r),o=Math.floor(o);const f=[],p=[],x=[],y=[],S=new Z,g=new Z,M=new Z,E=new Z,C=new Z,_=new Z,v=new Z;for(let L=0;L<=r;++L){const T=L/r*c*Math.PI*2;R(T,c,d,e,M),R(T+.01,c,d,e,E),_.subVectors(E,M),v.addVectors(E,M),C.crossVectors(_,v),v.crossVectors(C,_),C.normalize(),v.normalize();for(let D=0;D<=o;++D){const P=D/o*Math.PI*2,F=-n*Math.cos(P),w=n*Math.sin(P);S.x=M.x+(F*v.x+w*C.x),S.y=M.y+(F*v.y+w*C.y),S.z=M.z+(F*v.z+w*C.z),p.push(S.x,S.y,S.z),g.subVectors(S,M).normalize(),x.push(g.x,g.y,g.z),y.push(L/r),y.push(D/o)}}for(let L=1;L<=r;L++)for(let T=1;T<=o;T++){const D=(o+1)*(L-1)+(T-1),P=(o+1)*L+(T-1),F=(o+1)*L+T,w=(o+1)*(L-1)+T;f.push(D,P,w),f.push(P,F,w)}this.setIndex(f),this.setAttribute("position",new nn(p,3)),this.setAttribute("normal",new nn(x,3)),this.setAttribute("uv",new nn(y,2));function R(L,T,D,P,F){const w=Math.cos(L),I=Math.sin(L),B=D/T*L,z=Math.cos(B);F.x=P*(2+z)*.5*w,F.y=P*(2+z)*I*.5,F.z=P*Math.sin(B)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qs(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}function aa(s){const e={};for(const n in s){e[n]={};for(const r in s[n]){const o=s[n][r];if(Om(o))o.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][r]=null):e[n][r]=o.clone();else if(Array.isArray(o))if(Om(o[0])){const c=[];for(let d=0,f=o.length;d<f;d++)c[d]=o[d].clone();e[n][r]=c}else e[n][r]=o.slice();else e[n][r]=o}}return e}function Rn(s){const e={};for(let n=0;n<s.length;n++){const r=aa(s[n]);for(const o in r)e[o]=r[o]}return e}function Om(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function vy(s){const e=[];for(let n=0;n<s.length;n++)e.push(s[n].clone());return e}function K0(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Mt.workingColorSpace}const _y={clone:aa,merge:Rn};var yy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oi extends la{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yy,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=aa(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const d=this.uniforms[o].value;d&&d.isTexture?n.uniforms[o]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?n.uniforms[o]={type:"c",value:d.getHex()}:d&&d.isVector2?n.uniforms[o]={type:"v2",value:d.toArray()}:d&&d.isVector3?n.uniforms[o]={type:"v3",value:d.toArray()}:d&&d.isVector4?n.uniforms[o]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?n.uniforms[o]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?n.uniforms[o]={type:"m4",value:d.toArray()}:n.uniforms[o]={value:d}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(n.extensions=r),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=n[o.value]||null;break;case"c":this.uniforms[r].value=new vt().setHex(o.value);break;case"v2":this.uniforms[r].value=new _t().fromArray(o.value);break;case"v3":this.uniforms[r].value=new Z().fromArray(o.value);break;case"v4":this.uniforms[r].value=new Qt().fromArray(o.value);break;case"m3":this.uniforms[r].value=new dt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new Jt().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class My extends Oi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class km extends la{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gh,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ir,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ey extends la{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=D_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class by extends la{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Z0 extends In{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=n}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}}const yd=new Jt,Bm=new Z,zm=new Z;class wy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.mapType=Qn,this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Lh,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new Qt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,r=this.matrix;Bm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Bm),zm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(zm),n.updateMatrixWorld(),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,n.coordinateSystem,n.reversedDepth),n.coordinateSystem===so||n.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Dl=new Z,Ul=new oa,Ci=new Z;class Q0 extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=Li,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Dl,Ul,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Ul,Ci.set(1,1,1)).invert()}updateWorldMatrix(e,n,r=!1){super.updateWorldMatrix(e,n,r),this.matrixWorld.decompose(Dl,Ul,Ci),Ci.x===1&&Ci.y===1&&Ci.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Dl,Ul,Ci.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cr=new Z,Vm=new _t,jm=new _t;class Zn extends Q0{constructor(e=50,n=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=vh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vh*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,r){Cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z),Cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cr.x,Cr.y).multiplyScalar(-e/Cr.z)}getViewSize(e,n){return this.getViewBounds(e,Vm,jm),n.subVectors(jm,Vm)}setViewOffset(e,n,r,o,c,d){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ku*.5*this.fov)/this.zoom,r=2*n,o=this.aspect*r,c=-.5*o;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,x=d.fullHeight;c+=d.offsetX*o/p,n-=d.offsetY*r/x,o*=d.width/p,r*=d.height/x}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ty extends wy{constructor(){super(new Zn(90,1,.5,500)),this.isPointLightShadow=!0}}class Sd extends Z0{constructor(e,n,r=0,o=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Ty}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}}class J0 extends Q0{constructor(e=-1,n=1,r=1,o=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=r,this.bottom=o,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,r,o,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=r,this.view.offsetY=o,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const x=(this.right-this.left)/this.view.fullWidth/this.zoom,y=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=x*this.view.offsetX,d=c+x*this.view.width,f-=y*this.view.offsetY,p=f-y*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Ay extends Z0{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Ws=-90,Xs=1;class Cy extends In{constructor(e,n,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Zn(Ws,Xs,e,n);o.layers=this.layers,this.add(o);const c=new Zn(Ws,Xs,e,n);c.layers=this.layers,this.add(c);const d=new Zn(Ws,Xs,e,n);d.layers=this.layers,this.add(d);const f=new Zn(Ws,Xs,e,n);f.layers=this.layers,this.add(f);const p=new Zn(Ws,Xs,e,n);p.layers=this.layers,this.add(p);const x=new Zn(Ws,Xs,e,n);x.layers=this.layers,this.add(x)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[r,o,c,d,f,p]=n;for(const x of n)this.remove(x);if(e===Li)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===so)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const x of n)this.add(x),x.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,x,y]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let _=!1;e.isWebGLRenderer===!0?_=e.state.buffers.depth.getReversed():_=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(r,1,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,d),e.setRenderTarget(r,2,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,f),e.setRenderTarget(r,3,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(r,4,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,x),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),_&&e.autoClear===!1&&e.clearDepth(),e.render(n,y),e.setRenderTarget(S,g,M),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Ny extends Zn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Ry{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,at("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const Bh=class Bh{constructor(e,n,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let r=0;r<4;r++)this.elements[r]=e[r+n];return this}set(e,n,r,o){const c=this.elements;return c[0]=e,c[2]=n,c[1]=r,c[3]=o,this}};Bh.prototype.isMatrix2=!0;let Hm=Bh;function Gm(s,e,n,r){const o=Py(r);switch(n){case O0:return s*e;case B0:return s*e/o.components*o.byteLength;case Ah:return s*e/o.components*o.byteLength;case ls:return s*e*2/o.components*o.byteLength;case Ch:return s*e*2/o.components*o.byteLength;case k0:return s*e*3/o.components*o.byteLength;case Mi:return s*e*4/o.components*o.byteLength;case Nh:return s*e*4/o.components*o.byteLength;case Bl:case zl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Vl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case jd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case Vd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case Wd:case Xd:case Yd:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case qd:case ql:case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case eh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case th:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case nh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ih:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ah:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case oh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ch:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uh:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dh:case hh:case fh:return Math.ceil(s/4)*Math.ceil(e/4)*16;case ph:case mh:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Yl:case xh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Py(s){switch(s){case Qn:case L0:return{byteLength:1,components:1};case io:case D0:case nr:return{byteLength:2,components:1};case wh:case Th:return{byteLength:2,components:4};case Fi:case bh:case Ii:return{byteLength:4,components:1};case U0:case F0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ex(){let s=null,e=!1,n=null,r=null;function o(c,d){n(c,d),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){s=c}}}function Iy(s){const e=new WeakMap;function n(f,p){const x=f.array,y=f.usage,S=x.byteLength,g=s.createBuffer();s.bindBuffer(p,g),s.bufferData(p,x,y),f.onUploadCallback();let M;if(x instanceof Float32Array)M=s.FLOAT;else if(typeof Float16Array<"u"&&x instanceof Float16Array)M=s.HALF_FLOAT;else if(x instanceof Uint16Array)f.isFloat16BufferAttribute?M=s.HALF_FLOAT:M=s.UNSIGNED_SHORT;else if(x instanceof Int16Array)M=s.SHORT;else if(x instanceof Uint32Array)M=s.UNSIGNED_INT;else if(x instanceof Int32Array)M=s.INT;else if(x instanceof Int8Array)M=s.BYTE;else if(x instanceof Uint8Array)M=s.UNSIGNED_BYTE;else if(x instanceof Uint8ClampedArray)M=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+x);return{buffer:g,type:M,bytesPerElement:x.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,x){const y=p.array,S=p.updateRanges;if(s.bindBuffer(x,f),S.length===0)s.bufferSubData(x,0,y);else{S.sort((M,E)=>M.start-E.start);let g=0;for(let M=1;M<S.length;M++){const E=S[g],C=S[M];C.start<=E.start+E.count+1?E.count=Math.max(E.count,C.start+C.count-E.start):(++g,S[g]=C)}S.length=g+1;for(let M=0,E=S.length;M<E;M++){const C=S[M];s.bufferSubData(x,C.start*y.BYTES_PER_ELEMENT,y,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const y=e.get(f);(!y||y.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const x=e.get(f);if(x===void 0)e.set(f,n(f,p));else if(x.version<f.version){if(x.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(x.buffer,f,p),x.version=f.version}}return{get:o,remove:c,update:d}}var Ly=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Uy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ky=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,jy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Jy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,eS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,tS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,nS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,iS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,rS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,oS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cS="gl_FragColor = linearToOutputTexel( gl_FragColor );",uS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,hS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_S=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,SS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,MS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ES=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,TS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,AS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,CS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,NS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,PS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,LS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,DS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,US=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,FS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,VS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,HS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,GS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,WS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,YS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,n1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,i1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,a1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,o1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,l1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,c1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,u1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,d1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,h1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,f1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,p1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,x1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,v1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,_1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,y1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,S1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,E1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,w1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,T1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,A1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,C1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const L1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,D1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,z1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,V1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,j1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,H1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,X1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,K1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Q1=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,aM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ht={alphahash_fragment:Ly,alphahash_pars_fragment:Dy,alphamap_fragment:Uy,alphamap_pars_fragment:Fy,alphatest_fragment:Oy,alphatest_pars_fragment:ky,aomap_fragment:By,aomap_pars_fragment:zy,batching_pars_vertex:Vy,batching_vertex:jy,begin_vertex:Hy,beginnormal_vertex:Gy,bsdfs:Wy,iridescence_fragment:Xy,bumpmap_pars_fragment:qy,clipping_planes_fragment:Yy,clipping_planes_pars_fragment:$y,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Zy,color_fragment:Qy,color_pars_fragment:Jy,color_pars_vertex:eS,color_vertex:tS,common:nS,cube_uv_reflection_fragment:iS,defaultnormal_vertex:rS,displacementmap_pars_vertex:sS,displacementmap_vertex:aS,emissivemap_fragment:oS,emissivemap_pars_fragment:lS,colorspace_fragment:cS,colorspace_pars_fragment:uS,envmap_fragment:dS,envmap_common_pars_fragment:hS,envmap_pars_fragment:fS,envmap_pars_vertex:pS,envmap_physical_pars_fragment:wS,envmap_vertex:mS,fog_vertex:xS,fog_pars_vertex:gS,fog_fragment:vS,fog_pars_fragment:_S,gradientmap_pars_fragment:yS,lightmap_pars_fragment:SS,lights_lambert_fragment:MS,lights_lambert_pars_fragment:ES,lights_pars_begin:bS,lights_toon_fragment:TS,lights_toon_pars_fragment:AS,lights_phong_fragment:CS,lights_phong_pars_fragment:NS,lights_physical_fragment:RS,lights_physical_pars_fragment:PS,lights_fragment_begin:IS,lights_fragment_maps:LS,lights_fragment_end:DS,lightprobes_pars_fragment:US,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:BS,map_fragment:zS,map_pars_fragment:VS,map_particle_fragment:jS,map_particle_pars_fragment:HS,metalnessmap_fragment:GS,metalnessmap_pars_fragment:WS,morphinstance_vertex:XS,morphcolor_vertex:qS,morphnormal_vertex:YS,morphtarget_pars_vertex:$S,morphtarget_vertex:KS,normal_fragment_begin:ZS,normal_fragment_maps:QS,normal_pars_fragment:JS,normal_pars_vertex:e1,normal_vertex:t1,normalmap_pars_fragment:n1,clearcoat_normal_fragment_begin:i1,clearcoat_normal_fragment_maps:r1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:a1,opaque_fragment:o1,packing:l1,premultiplied_alpha_fragment:c1,project_vertex:u1,dithering_fragment:d1,dithering_pars_fragment:h1,roughnessmap_fragment:f1,roughnessmap_pars_fragment:p1,shadowmap_pars_fragment:m1,shadowmap_pars_vertex:x1,shadowmap_vertex:g1,shadowmask_pars_fragment:v1,skinbase_vertex:_1,skinning_pars_vertex:y1,skinning_vertex:S1,skinnormal_vertex:M1,specularmap_fragment:E1,specularmap_pars_fragment:b1,tonemapping_fragment:w1,tonemapping_pars_fragment:T1,transmission_fragment:A1,transmission_pars_fragment:C1,uv_pars_fragment:N1,uv_pars_vertex:R1,uv_vertex:P1,worldpos_vertex:I1,background_vert:L1,background_frag:D1,backgroundCube_vert:U1,backgroundCube_frag:F1,cube_vert:O1,cube_frag:k1,depth_vert:B1,depth_frag:z1,distance_vert:V1,distance_frag:j1,equirect_vert:H1,equirect_frag:G1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:$1,meshlambert_frag:K1,meshmatcap_vert:Z1,meshmatcap_frag:Q1,meshnormal_vert:J1,meshnormal_frag:eM,meshphong_vert:tM,meshphong_frag:nM,meshphysical_vert:iM,meshphysical_frag:rM,meshtoon_vert:sM,meshtoon_frag:aM,points_vert:oM,points_frag:lM,shadow_vert:cM,shadow_frag:uM,sprite_vert:dM,sprite_frag:hM},Ue={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Ri={basic:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:ht.meshbasic_vert,fragmentShader:ht.meshbasic_frag},lambert:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)},envMapIntensity:{value:1}}]),vertexShader:ht.meshlambert_vert,fragmentShader:ht.meshlambert_frag},phong:{uniforms:Rn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ht.meshphong_vert,fragmentShader:ht.meshphong_frag},standard:{uniforms:Rn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag},toon:{uniforms:Rn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new vt(0)}}]),vertexShader:ht.meshtoon_vert,fragmentShader:ht.meshtoon_frag},matcap:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:ht.meshmatcap_vert,fragmentShader:ht.meshmatcap_frag},points:{uniforms:Rn([Ue.points,Ue.fog]),vertexShader:ht.points_vert,fragmentShader:ht.points_frag},dashed:{uniforms:Rn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ht.linedashed_vert,fragmentShader:ht.linedashed_frag},depth:{uniforms:Rn([Ue.common,Ue.displacementmap]),vertexShader:ht.depth_vert,fragmentShader:ht.depth_frag},normal:{uniforms:Rn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:ht.meshnormal_vert,fragmentShader:ht.meshnormal_frag},sprite:{uniforms:Rn([Ue.sprite,Ue.fog]),vertexShader:ht.sprite_vert,fragmentShader:ht.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ht.background_vert,fragmentShader:ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ht.backgroundCube_vert,fragmentShader:ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ht.cube_vert,fragmentShader:ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ht.equirect_vert,fragmentShader:ht.equirect_frag},distance:{uniforms:Rn([Ue.common,Ue.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ht.distance_vert,fragmentShader:ht.distance_frag},shadow:{uniforms:Rn([Ue.lights,Ue.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ht.shadow_vert,fragmentShader:ht.shadow_frag}};Ri.physical={uniforms:Rn([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ht.meshphysical_vert,fragmentShader:ht.meshphysical_frag};const Fl={r:0,b:0,g:0},fM=new Jt,tx=new dt;tx.set(-1,0,0,0,1,0,0,0,1);function pM(s,e,n,r,o,c){const d=new vt(0);let f=o===!0?0:1,p,x,y=null,S=0,g=null;function M(R){let L=R.isScene===!0?R.background:null;if(L&&L.isTexture){const T=R.backgroundBlurriness>0;L=e.get(L,T)}return L}function E(R){let L=!1;const T=M(R);T===null?_(d,f):T&&T.isColor&&(_(T,1),L=!0);const D=s.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,c):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,c),(s.autoClear||L)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(R,L){const T=M(L);T&&(T.isCubeTexture||T.mapping===sc)?(x===void 0&&(x=new Hn(new lo(1,1,1),new Oi({name:"BackgroundCubeMaterial",uniforms:aa(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function(D,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(x)),x.material.uniforms.envMap.value=T,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(fM.makeRotationFromEuler(L.backgroundRotation)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&x.material.uniforms.backgroundRotation.value.premultiply(tx),x.material.toneMapped=Mt.getTransfer(T.colorSpace)!==Dt,(y!==T||S!==T.version||g!==s.toneMapping)&&(x.material.needsUpdate=!0,y=T,S=T.version,g=s.toneMapping),x.layers.enableAll(),R.unshift(x,x.geometry,x.material,0,0,null)):T&&T.isTexture&&(p===void 0&&(p=new Hn(new lc(2,2),new Oi({name:"BackgroundMaterial",uniforms:aa(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Pr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=T,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=Mt.getTransfer(T.colorSpace)!==Dt,T.matrixAutoUpdate===!0&&T.updateMatrix(),p.material.uniforms.uvTransform.value.copy(T.matrix),(y!==T||S!==T.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,y=T,S=T.version,g=s.toneMapping),p.layers.enableAll(),R.unshift(p,p.geometry,p.material,0,0,null))}function _(R,L){R.getRGB(Fl,K0(s)),n.buffers.color.setClear(Fl.r,Fl.g,Fl.b,L,c)}function v(){x!==void 0&&(x.geometry.dispose(),x.material.dispose(),x=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(R,L=1){d.set(R),f=L,_(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(R){f=R,_(d,f)},render:E,addToRenderList:C,dispose:v}}function mM(s,e){const n=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let c=o,d=!1;function f(z,Y,Q,ae,G){let ce=!1;const $=S(z,ae,Q,Y);c!==$&&(c=$,x(c.object)),ce=M(z,ae,Q,G),ce&&E(z,ae,Q,G),G!==null&&e.update(G,s.ELEMENT_ARRAY_BUFFER),(ce||d)&&(d=!1,T(z,Y,Q,ae),G!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function p(){return s.createVertexArray()}function x(z){return s.bindVertexArray(z)}function y(z){return s.deleteVertexArray(z)}function S(z,Y,Q,ae){const G=ae.wireframe===!0;let ce=r[Y.id];ce===void 0&&(ce={},r[Y.id]=ce);const $=z.isInstancedMesh===!0?z.id:0;let X=ce[$];X===void 0&&(X={},ce[$]=X);let re=X[Q.id];re===void 0&&(re={},X[Q.id]=re);let oe=re[G];return oe===void 0&&(oe=g(p()),re[G]=oe),oe}function g(z){const Y=[],Q=[],ae=[];for(let G=0;G<n;G++)Y[G]=0,Q[G]=0,ae[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:Q,attributeDivisors:ae,object:z,attributes:{},index:null}}function M(z,Y,Q,ae){const G=c.attributes,ce=Y.attributes;let $=0;const X=Q.getAttributes();for(const re in X)if(X[re].location>=0){const k=G[re];let J=ce[re];if(J===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(J=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(J=z.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;$++}return c.attributesNum!==$||c.index!==ae}function E(z,Y,Q,ae){const G={},ce=Y.attributes;let $=0;const X=Q.getAttributes();for(const re in X)if(X[re].location>=0){let k=ce[re];k===void 0&&(re==="instanceMatrix"&&z.instanceMatrix&&(k=z.instanceMatrix),re==="instanceColor"&&z.instanceColor&&(k=z.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),G[re]=J,$++}c.attributes=G,c.attributesNum=$,c.index=ae}function C(){const z=c.newAttributes;for(let Y=0,Q=z.length;Y<Q;Y++)z[Y]=0}function _(z){v(z,0)}function v(z,Y){const Q=c.newAttributes,ae=c.enabledAttributes,G=c.attributeDivisors;Q[z]=1,ae[z]===0&&(s.enableVertexAttribArray(z),ae[z]=1),G[z]!==Y&&(s.vertexAttribDivisor(z,Y),G[z]=Y)}function R(){const z=c.newAttributes,Y=c.enabledAttributes;for(let Q=0,ae=Y.length;Q<ae;Q++)Y[Q]!==z[Q]&&(s.disableVertexAttribArray(Q),Y[Q]=0)}function L(z,Y,Q,ae,G,ce,$){$===!0?s.vertexAttribIPointer(z,Y,Q,G,ce):s.vertexAttribPointer(z,Y,Q,ae,G,ce)}function T(z,Y,Q,ae){C();const G=ae.attributes,ce=Q.getAttributes(),$=Y.defaultAttributeValues;for(const X in ce){const re=ce[X];if(re.location>=0){let oe=G[X];if(oe===void 0&&(X==="instanceMatrix"&&z.instanceMatrix&&(oe=z.instanceMatrix),X==="instanceColor"&&z.instanceColor&&(oe=z.instanceColor)),oe!==void 0){const k=oe.normalized,J=oe.itemSize,Ie=e.get(oe);if(Ie===void 0)continue;const Ge=Ie.buffer,ze=Ie.type,le=Ie.bytesPerElement,ge=ze===s.INT||ze===s.UNSIGNED_INT||oe.gpuType===bh;if(oe.isInterleavedBufferAttribute){const pe=oe.data,Fe=pe.stride,Ze=oe.offset;if(pe.isInstancedInterleavedBuffer){for(let et=0;et<re.locationSize;et++)v(re.location+et,pe.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let et=0;et<re.locationSize;et++)_(re.location+et);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let et=0;et<re.locationSize;et++)L(re.location+et,J/re.locationSize,ze,k,Fe*le,(Ze+J/re.locationSize*et)*le,ge)}else{if(oe.isInstancedBufferAttribute){for(let pe=0;pe<re.locationSize;pe++)v(re.location+pe,oe.meshPerAttribute);z.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let pe=0;pe<re.locationSize;pe++)_(re.location+pe);s.bindBuffer(s.ARRAY_BUFFER,Ge);for(let pe=0;pe<re.locationSize;pe++)L(re.location+pe,J/re.locationSize,ze,k,J*le,J/re.locationSize*pe*le,ge)}}else if($!==void 0){const k=$[X];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(re.location,k);break;case 3:s.vertexAttrib3fv(re.location,k);break;case 4:s.vertexAttrib4fv(re.location,k);break;default:s.vertexAttrib1fv(re.location,k)}}}}R()}function D(){I();for(const z in r){const Y=r[z];for(const Q in Y){const ae=Y[Q];for(const G in ae){const ce=ae[G];for(const $ in ce)y(ce[$].object),delete ce[$];delete ae[G]}}delete r[z]}}function P(z){if(r[z.id]===void 0)return;const Y=r[z.id];for(const Q in Y){const ae=Y[Q];for(const G in ae){const ce=ae[G];for(const $ in ce)y(ce[$].object),delete ce[$];delete ae[G]}}delete r[z.id]}function F(z){for(const Y in r){const Q=r[Y];for(const ae in Q){const G=Q[ae];if(G[z.id]===void 0)continue;const ce=G[z.id];for(const $ in ce)y(ce[$].object),delete ce[$];delete G[z.id]}}}function w(z){for(const Y in r){const Q=r[Y],ae=z.isInstancedMesh===!0?z.id:0,G=Q[ae];if(G!==void 0){for(const ce in G){const $=G[ce];for(const X in $)y($[X].object),delete $[X];delete G[ce]}delete Q[ae],Object.keys(Q).length===0&&delete r[Y]}}}function I(){B(),d=!0,c!==o&&(c=o,x(c.object))}function B(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:I,resetDefaultState:B,dispose:D,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:_,disableUnusedAttributes:R}}function xM(s,e,n){let r;function o(p){r=p}function c(p,x){s.drawArrays(r,p,x),n.update(x,r,1)}function d(p,x,y){y!==0&&(s.drawArraysInstanced(r,p,x,y),n.update(x,r,y))}function f(p,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,x,0,y);let g=0;for(let M=0;M<y;M++)g+=x[M];n.update(g,r,1)}this.setMode=o,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function gM(s,e,n,r){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function d(F){return!(F!==Mi&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===nr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Qn&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ii&&!w)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let x=n.precision!==void 0?n.precision:"highp";const y=p(x);y!==x&&(at("WebGLRenderer:",x,"not supported, using",y,"instead."),x=y);const S=n.logarithmicDepthBuffer===!0,g=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&g===!1&&at("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),R=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),L=s.getParameter(s.MAX_VARYING_VECTORS),T=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),D=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:x,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:M,maxVertexTextures:E,maxTextureSize:C,maxCubemapSize:_,maxAttributes:v,maxVertexUniforms:R,maxVaryings:L,maxFragmentUniforms:T,maxSamples:D,samples:P}}function vM(s){const e=this;let n=null,r=0,o=!1,c=!1;const d=new ts,f=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const M=S.length!==0||g||r!==0||o;return o=g,r=S.length,M},this.beginShadows=function(){c=!0,y(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,g){n=y(S,g,0)},this.setState=function(S,g,M){const E=S.clippingPlanes,C=S.clipIntersection,_=S.clipShadows,v=s.get(S);if(!o||E===null||E.length===0||c&&!_)c?y(null):x();else{const R=c?0:r,L=R*4;let T=v.clippingState||null;p.value=T,T=y(E,g,L,M);for(let D=0;D!==L;++D)T[D]=n[D];v.clippingState=T,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=R}};function x(){p.value!==n&&(p.value=n,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function y(S,g,M,E){const C=S!==null?S.length:0;let _=null;if(C!==0){if(_=p.value,E!==!0||_===null){const v=M+C*4,R=g.matrixWorldInverse;f.getNormalMatrix(R),(_===null||_.length<v)&&(_=new Float32Array(v));for(let L=0,T=M;L!==C;++L,T+=4)d.copy(S[L]).applyMatrix4(R,f),d.normal.toArray(_,T),_[T+3]=d.constant}p.value=_,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,_}}const Rr=4,Wm=[.125,.215,.35,.446,.526,.582],rs=20,_M=256,Qa=new J0,Xm=new vt;let Md=null,Ed=0,bd=0,wd=!1;const yM=new Z;class qm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,r=.1,o=100,c={}){const{size:d=256,position:f=yM}=c;Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(d);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$m(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Md,Ed,bd),this._renderer.xr.enabled=wd,e.scissorTest=!1,qs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===os||e.mapping===ra?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Md=this._renderer.getRenderTarget(),Ed=this._renderer.getActiveCubeFace(),bd=this._renderer.getActiveMipmapLevel(),wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=n||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,r={magFilter:Tn,minFilter:Tn,generateMipmaps:!1,type:nr,format:Mi,colorSpace:$l,depthBuffer:!1},o=Ym(e,n,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ym(e,n,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=SM(c)),this._blurMaterial=EM(c,e,n),this._ggxMaterial=MM(c,e,n)}return o}_compileMaterial(e){const n=new Hn(new Ln,e);this._renderer.compile(n,Qa)}_sceneToCubeUV(e,n,r,o,c){const p=new Zn(90,1,n,r),x=[1,-1,1,1,1,1],y=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,M=S.toneMapping;S.getClearColor(Xm),S.toneMapping=Di,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Hn(new lo,new Qi({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,_=C.material;let v=!1;const R=e.background;R?R.isColor&&(_.color.copy(R),e.background=null,v=!0):(_.color.copy(Xm),v=!0);for(let L=0;L<6;L++){const T=L%3;T===0?(p.up.set(0,x[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+y[L],c.y,c.z)):T===1?(p.up.set(0,0,x[L]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+y[L],c.z)):(p.up.set(0,x[L],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+y[L]));const D=this._cubeSize;qs(o,T*D,L>2?D:0,D,D),S.setRenderTarget(o),v&&S.render(C,p),S.render(e,p)}S.toneMapping=M,S.autoClear=g,e.background=R}_textureToCubeUV(e,n){const r=this._renderer,o=e.mapping===os||e.mapping===ra;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$m());const c=o?this._cubemapMaterial:this._equirectMaterial,d=this._lodMeshes[0];d.material=c;const f=c.uniforms;f.envMap.value=e;const p=this._cubeSize;qs(n,0,0,3*p,2*p),r.setRenderTarget(n),r.render(d,Qa)}_applyPMREM(e){const n=this._renderer,r=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let c=1;c<o;c++)this._applyGGXFilter(e,c-1,c);n.autoClear=r}_applyGGXFilter(e,n,r){const o=this._renderer,c=this._pingPongRenderTarget,d=this._ggxMaterial,f=this._lodMeshes[r];f.material=d;const p=d.uniforms,x=r/(this._lodMeshes.length-1),y=n/(this._lodMeshes.length-1),S=Math.sqrt(x*x-y*y),g=0+x*1.25,M=S*g,{_lodMax:E}=this,C=this._sizeLods[r],_=3*C*(r>E-Rr?r-E+Rr:0),v=4*(this._cubeSize-C);p.envMap.value=e.texture,p.roughness.value=M,p.mipInt.value=E-n,qs(c,_,v,3*C,2*C),o.setRenderTarget(c),o.render(f,Qa),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-r,qs(e,_,v,3*C,2*C),o.setRenderTarget(e),o.render(f,Qa)}_blur(e,n,r,o,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,n,r,o,"latitudinal",c),this._halfBlur(d,e,r,r,o,"longitudinal",c)}_halfBlur(e,n,r,o,c,d,f){const p=this._renderer,x=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const y=3,S=this._lodMeshes[o];S.material=x;const g=x.uniforms,M=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*rs-1),C=c/E,_=isFinite(c)?1+Math.floor(y*C):rs;_>rs&&at(`sigmaRadians, ${c}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${rs}`);const v=[];let R=0;for(let F=0;F<rs;++F){const w=F/C,I=Math.exp(-w*w/2);v.push(I),F===0?R+=I:F<_&&(R+=2*I)}for(let F=0;F<v.length;F++)v[F]=v[F]/R;g.envMap.value=e.texture,g.samples.value=_,g.weights.value=v,g.latitudinal.value=d==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:L}=this;g.dTheta.value=E,g.mipInt.value=L-r;const T=this._sizeLods[o],D=3*T*(o>L-Rr?o-L+Rr:0),P=4*(this._cubeSize-T);qs(n,D,P,3*T,2*T),p.setRenderTarget(n),p.render(S,Qa)}}function SM(s){const e=[],n=[],r=[];let o=s;const c=s-Rr+1+Wm.length;for(let d=0;d<c;d++){const f=Math.pow(2,o);e.push(f);let p=1/f;d>s-Rr?p=Wm[d-s+Rr-1]:d===0&&(p=0),n.push(p);const x=1/(f-2),y=-x,S=1+x,g=[y,y,S,y,S,S,y,y,S,S,y,S],M=6,E=6,C=3,_=2,v=1,R=new Float32Array(C*E*M),L=new Float32Array(_*E*M),T=new Float32Array(v*E*M);for(let P=0;P<M;P++){const F=P%3*2/3-1,w=P>2?0:-1,I=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];R.set(I,C*E*P),L.set(g,_*E*P);const B=[P,P,P,P,P,P];T.set(B,v*E*P)}const D=new Ln;D.setAttribute("position",new li(R,C)),D.setAttribute("uv",new li(L,_)),D.setAttribute("faceIndex",new li(T,v)),r.push(new Hn(D,null)),o>Rr&&o--}return{lodMeshes:r,sizeLods:e,sigmas:n}}function Ym(s,e,n){const r=new Ui(s,e,n);return r.texture.mapping=sc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function qs(s,e,n,r,o){s.viewport.set(e,n,r,o),s.scissor.set(e,n,r,o)}function MM(s,e,n){return new Oi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_M,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:cc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function EM(s,e,n){const r=new Float32Array(rs),o=new Z(0,1,0);return new Oi({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function $m(){return new Oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function Km(){return new Oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function cc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class nx extends Ui{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new Y0(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new lo(5,5,5),c=new Oi({name:"CubemapFromEquirect",uniforms:aa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:er});c.uniforms.tEquirect.value=n;const d=new Hn(o,c),f=n.minFilter;return n.minFilter===ss&&(n.minFilter=Tn),new Cy(1,10,this).update(e,d),n.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,n=!0,r=!0,o=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(n,r,o);e.setRenderTarget(c)}}function bM(s){let e=new WeakMap,n=new WeakMap,r=null;function o(g,M=!1){return g==null?null:M?d(g):c(g)}function c(g){if(g&&g.isTexture){const M=g.mapping;if(M===qu||M===Yu)if(e.has(g)){const E=e.get(g).texture;return f(E,g.mapping)}else{const E=g.image;if(E&&E.height>0){const C=new nx(E.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",x),f(C.texture,g.mapping)}else return null}}return g}function d(g){if(g&&g.isTexture){const M=g.mapping,E=M===qu||M===Yu,C=M===os||M===ra;if(E||C){let _=n.get(g);const v=_!==void 0?_.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new qm(s)),_=E?r.fromEquirectangular(g,_):r.fromCubemap(g,_),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),_.texture;if(_!==void 0)return _.texture;{const R=g.image;return E&&R&&R.height>0||C&&R&&p(R)?(r===null&&(r=new qm(s)),_=E?r.fromEquirectangular(g):r.fromCubemap(g),_.texture.pmremVersion=g.pmremVersion,n.set(g,_),g.addEventListener("dispose",y),_.texture):null}}}return g}function f(g,M){return M===qu?g.mapping=os:M===Yu&&(g.mapping=ra),g}function p(g){let M=0;const E=6;for(let C=0;C<E;C++)g[C]!==void 0&&M++;return M===E}function x(g){const M=g.target;M.removeEventListener("dispose",x);const E=e.get(M);E!==void 0&&(e.delete(M),E.dispose())}function y(g){const M=g.target;M.removeEventListener("dispose",y);const E=n.get(M);E!==void 0&&(n.delete(M),E.dispose())}function S(){e=new WeakMap,n=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function wM(s){const e={};function n(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return n(r)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(r){const o=n(r);return o===null&&ea("WebGLRenderer: "+r+" extension not supported."),o}}}function TM(s,e,n,r){const o={},c=new WeakMap;function d(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const E in g.attributes)e.remove(g.attributes[E]);g.removeEventListener("dispose",d),delete o[g.id];const M=c.get(g);M&&(e.remove(M),c.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",d),o[g.id]=!0,n.memory.geometries++),g}function p(S){const g=S.attributes;for(const M in g)e.update(g[M],s.ARRAY_BUFFER)}function x(S){const g=[],M=S.index,E=S.attributes.position;let C=0;if(E===void 0)return;if(M!==null){const R=M.array;C=M.version;for(let L=0,T=R.length;L<T;L+=3){const D=R[L+0],P=R[L+1],F=R[L+2];g.push(D,P,P,F,F,D)}}else{const R=E.array;C=E.version;for(let L=0,T=R.length/3-1;L<T;L+=3){const D=L+0,P=L+1,F=L+2;g.push(D,P,P,F,F,D)}}const _=new(E.count>=65535?W0:G0)(g,1);_.version=C;const v=c.get(S);v&&e.remove(v),c.set(S,_)}function y(S){const g=c.get(S);if(g){const M=S.index;M!==null&&g.version<M.version&&x(S)}else x(S);return c.get(S)}return{get:f,update:p,getWireframeAttribute:y}}function AM(s,e,n){let r;function o(S){r=S}let c,d;function f(S){c=S.type,d=S.bytesPerElement}function p(S,g){s.drawElements(r,g,c,S*d),n.update(g,r,1)}function x(S,g,M){M!==0&&(s.drawElementsInstanced(r,g,c,S*d,M),n.update(g,r,M))}function y(S,g,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,c,S,0,M);let C=0;for(let _=0;_<M;_++)C+=g[_];n.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=x,this.renderMultiDraw=y}function CM(s){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(n.calls++,d){case s.TRIANGLES:n.triangles+=f*(c/3);break;case s.LINES:n.lines+=f*(c/2);break;case s.LINE_STRIP:n.lines+=f*(c-1);break;case s.LINE_LOOP:n.lines+=f*c;break;case s.POINTS:n.points+=f*c;break;default:At("WebGLInfo: Unknown draw mode:",d);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:r}}function NM(s,e,n){const r=new WeakMap,o=new Qt;function c(d,f,p){const x=d.morphTargetInfluences,y=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=y!==void 0?y.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let B=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",B)};var M=B;g!==void 0&&g.texture.dispose();const E=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,_=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],R=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let T=0;E===!0&&(T=1),C===!0&&(T=2),_===!0&&(T=3);let D=f.attributes.position.count*T,P=1;D>e.maxTextureSize&&(P=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const F=new Float32Array(D*P*4*S),w=new V0(F,D,P,S);w.type=Ii,w.needsUpdate=!0;const I=T*4;for(let z=0;z<S;z++){const Y=v[z],Q=R[z],ae=L[z],G=D*P*4*z;for(let ce=0;ce<Y.count;ce++){const $=ce*I;E===!0&&(o.fromBufferAttribute(Y,ce),F[G+$+0]=o.x,F[G+$+1]=o.y,F[G+$+2]=o.z,F[G+$+3]=0),C===!0&&(o.fromBufferAttribute(Q,ce),F[G+$+4]=o.x,F[G+$+5]=o.y,F[G+$+6]=o.z,F[G+$+7]=0),_===!0&&(o.fromBufferAttribute(ae,ce),F[G+$+8]=o.x,F[G+$+9]=o.y,F[G+$+10]=o.z,F[G+$+11]=ae.itemSize===4?o.w:1)}}g={count:S,texture:w,size:new _t(D,P)},r.set(f,g),f.addEventListener("dispose",B)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,n);else{let E=0;for(let _=0;_<x.length;_++)E+=x[_];const C=f.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",C),p.getUniforms().setValue(s,"morphTargetInfluences",x)}p.getUniforms().setValue(s,"morphTargetsTexture",g.texture,n),p.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:c}}function RM(s,e,n,r,o){let c=new WeakMap;function d(x){const y=o.render.frame,S=x.geometry,g=e.get(x,S);if(c.get(g)!==y&&(e.update(g),c.set(g,y)),x.isInstancedMesh&&(x.hasEventListener("dispose",p)===!1&&x.addEventListener("dispose",p),c.get(x)!==y&&(n.update(x.instanceMatrix,s.ARRAY_BUFFER),x.instanceColor!==null&&n.update(x.instanceColor,s.ARRAY_BUFFER),c.set(x,y))),x.isSkinnedMesh){const M=x.skeleton;c.get(M)!==y&&(M.update(),c.set(M,y))}return g}function f(){c=new WeakMap}function p(x){const y=x.target;y.removeEventListener("dispose",p),r.releaseStatesOfObject(y),n.remove(y.instanceMatrix),y.instanceColor!==null&&n.remove(y.instanceColor)}return{update:d,dispose:f}}const PM={[w0]:"LINEAR_TONE_MAPPING",[T0]:"REINHARD_TONE_MAPPING",[A0]:"CINEON_TONE_MAPPING",[C0]:"ACES_FILMIC_TONE_MAPPING",[R0]:"AGX_TONE_MAPPING",[P0]:"NEUTRAL_TONE_MAPPING",[N0]:"CUSTOM_TONE_MAPPING"};function IM(s,e,n,r,o,c){const d=new Ui(e,n,{type:s,depthBuffer:o,stencilBuffer:c,samples:r?4:0,depthTexture:o?new sa(e,n):void 0}),f=new Ui(e,n,{type:nr,depthBuffer:!1,stencilBuffer:!1}),p=new Ln;p.setAttribute("position",new nn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new nn([0,2,0,0,2,0],2));const x=new My({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),y=new Hn(p,x),S=new J0(-1,1,1,-1,0,1);let g=null,M=null,E=!1,C,_=null,v=[],R=!1;this.setSize=function(L,T){d.setSize(L,T),f.setSize(L,T);for(let D=0;D<v.length;D++){const P=v[D];P.setSize&&P.setSize(L,T)}},this.setEffects=function(L){v=L,R=v.length>0&&v[0].isRenderPass===!0;const T=d.width,D=d.height;for(let P=0;P<v.length;P++){const F=v[P];F.setSize&&F.setSize(T,D)}},this.begin=function(L,T){if(E||L.toneMapping===Di&&v.length===0)return!1;if(_=T,T!==null){const D=T.width,P=T.height;(d.width!==D||d.height!==P)&&this.setSize(D,P)}return R===!1&&L.setRenderTarget(d),C=L.toneMapping,L.toneMapping=Di,!0},this.hasRenderPass=function(){return R},this.end=function(L,T){L.toneMapping=C,E=!0;let D=d,P=f;for(let F=0;F<v.length;F++){const w=v[F];if(w.enabled!==!1&&(w.render(L,P,D,T),w.needsSwap!==!1)){const I=D;D=P,P=I}}if(g!==L.outputColorSpace||M!==L.toneMapping){g=L.outputColorSpace,M=L.toneMapping,x.defines={},Mt.getTransfer(g)===Dt&&(x.defines.SRGB_TRANSFER="");const F=PM[M];F&&(x.defines[F]=""),x.needsUpdate=!0}x.uniforms.tDiffuse.value=D.texture,L.setRenderTarget(_),L.render(y,S),_=null,E=!1},this.isCompositing=function(){return E},this.dispose=function(){d.depthTexture&&d.depthTexture.dispose(),d.dispose(),f.dispose(),p.dispose(),x.dispose()}}const ix=new Pn,yh=new sa(1,1),rx=new V0,sx=new Q_,ax=new Y0,Zm=[],Qm=[],Jm=new Float32Array(16),e0=new Float32Array(9),t0=new Float32Array(4);function ca(s,e,n){const r=s[0];if(r<=0||r>0)return s;const o=e*n;let c=Zm[o];if(c===void 0&&(c=new Float32Array(o),Zm[o]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=n,s[d].toArray(c,f)}return c}function cn(s,e){if(s.length!==e.length)return!1;for(let n=0,r=s.length;n<r;n++)if(s[n]!==e[n])return!1;return!0}function un(s,e){for(let n=0,r=e.length;n<r;n++)s[n]=e[n]}function uc(s,e){let n=Qm[e];n===void 0&&(n=new Int32Array(e),Qm[e]=n);for(let r=0;r!==e;++r)n[r]=s.allocateTextureUnit();return n}function LM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1f(this.addr,e),n[0]=e)}function DM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2fv(this.addr,e),un(n,e)}}function UM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(cn(n,e))return;s.uniform3fv(this.addr,e),un(n,e)}}function FM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4fv(this.addr,e),un(n,e)}}function OM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix2fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;t0.set(r),s.uniformMatrix2fv(this.addr,!1,t0),un(n,r)}}function kM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix3fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;e0.set(r),s.uniformMatrix3fv(this.addr,!1,e0),un(n,r)}}function BM(s,e){const n=this.cache,r=e.elements;if(r===void 0){if(cn(n,e))return;s.uniformMatrix4fv(this.addr,!1,e),un(n,e)}else{if(cn(n,r))return;Jm.set(r),s.uniformMatrix4fv(this.addr,!1,Jm),un(n,r)}}function zM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1i(this.addr,e),n[0]=e)}function VM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2iv(this.addr,e),un(n,e)}}function jM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3iv(this.addr,e),un(n,e)}}function HM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4iv(this.addr,e),un(n,e)}}function GM(s,e){const n=this.cache;n[0]!==e&&(s.uniform1ui(this.addr,e),n[0]=e)}function WM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(cn(n,e))return;s.uniform2uiv(this.addr,e),un(n,e)}}function XM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(cn(n,e))return;s.uniform3uiv(this.addr,e),un(n,e)}}function qM(s,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(cn(n,e))return;s.uniform4uiv(this.addr,e),un(n,e)}}function YM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let c;this.type===s.SAMPLER_2D_SHADOW?(yh.compareFunction=n.isReversedDepthBuffer()?Ph:Rh,c=yh):c=ix,n.setTexture2D(e||c,o)}function $M(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture3D(e||sx,o)}function KM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTextureCube(e||ax,o)}function ZM(s,e,n){const r=this.cache,o=n.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),n.setTexture2DArray(e||rx,o)}function QM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return UM;case 35666:return FM;case 35674:return OM;case 35675:return kM;case 35676:return BM;case 5124:case 35670:return zM;case 35667:case 35671:return VM;case 35668:case 35672:return jM;case 35669:case 35673:return HM;case 5125:return GM;case 36294:return WM;case 36295:return XM;case 36296:return qM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return $M;case 35680:case 36300:case 36308:case 36293:return KM;case 36289:case 36303:case 36311:case 36292:return ZM}}function JM(s,e){s.uniform1fv(this.addr,e)}function eE(s,e){const n=ca(e,this.size,2);s.uniform2fv(this.addr,n)}function tE(s,e){const n=ca(e,this.size,3);s.uniform3fv(this.addr,n)}function nE(s,e){const n=ca(e,this.size,4);s.uniform4fv(this.addr,n)}function iE(s,e){const n=ca(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,n)}function rE(s,e){const n=ca(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,n)}function sE(s,e){const n=ca(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,n)}function aE(s,e){s.uniform1iv(this.addr,e)}function oE(s,e){s.uniform2iv(this.addr,e)}function lE(s,e){s.uniform3iv(this.addr,e)}function cE(s,e){s.uniform4iv(this.addr,e)}function uE(s,e){s.uniform1uiv(this.addr,e)}function dE(s,e){s.uniform2uiv(this.addr,e)}function hE(s,e){s.uniform3uiv(this.addr,e)}function fE(s,e){s.uniform4uiv(this.addr,e)}function pE(s,e,n){const r=this.cache,o=e.length,c=uc(n,o);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=yh:d=ix;for(let f=0;f!==o;++f)n.setTexture2D(e[f]||d,c[f])}function mE(s,e,n){const r=this.cache,o=e.length,c=uc(n,o);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==o;++d)n.setTexture3D(e[d]||sx,c[d])}function xE(s,e,n){const r=this.cache,o=e.length,c=uc(n,o);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==o;++d)n.setTextureCube(e[d]||ax,c[d])}function gE(s,e,n){const r=this.cache,o=e.length,c=uc(n,o);cn(r,c)||(s.uniform1iv(this.addr,c),un(r,c));for(let d=0;d!==o;++d)n.setTexture2DArray(e[d]||rx,c[d])}function vE(s){switch(s){case 5126:return JM;case 35664:return eE;case 35665:return tE;case 35666:return nE;case 35674:return iE;case 35675:return rE;case 35676:return sE;case 5124:case 35670:return aE;case 35667:case 35671:return oE;case 35668:case 35672:return lE;case 35669:case 35673:return cE;case 5125:return uE;case 36294:return dE;case 36295:return hE;case 36296:return fE;case 35678:case 36198:case 36298:case 36306:case 35682:return pE;case 35679:case 36299:case 36307:return mE;case 35680:case 36300:case 36308:case 36293:return xE;case 36289:case 36303:case 36311:case 36292:return gE}}class _E{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.setValue=QM(n.type)}}class yE{constructor(e,n,r){this.id=e,this.addr=r,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=vE(n.type)}}class SE{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,r){const o=this.seq;for(let c=0,d=o.length;c!==d;++c){const f=o[c];f.setValue(e,n[f.id],r)}}}const Td=/(\w+)(\])?(\[|\.)?/g;function n0(s,e){s.seq.push(e),s.map[e.id]=e}function ME(s,e,n){const r=s.name,o=r.length;for(Td.lastIndex=0;;){const c=Td.exec(r),d=Td.lastIndex;let f=c[1];const p=c[2]==="]",x=c[3];if(p&&(f=f|0),x===void 0||x==="["&&d+2===o){n0(n,x===void 0?new _E(f,s,e):new yE(f,s,e));break}else{let S=n.map[f];S===void 0&&(S=new SE(f),n0(n,S)),n=S}}}class Hl{constructor(e,n){this.seq=[],this.map={};const r=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(n,d),p=e.getUniformLocation(n,f.name);ME(f,p,this)}const o=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(d):c.push(d);o.length>0&&(this.seq=o.concat(c))}setValue(e,n,r,o){const c=this.map[n];c!==void 0&&c.setValue(e,r,o)}setOptional(e,n,r){const o=n[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,n,r,o){for(let c=0,d=n.length;c!==d;++c){const f=n[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,o)}}static seqWithValue(e,n){const r=[];for(let o=0,c=e.length;o!==c;++o){const d=e[o];d.id in n&&r.push(d)}return r}}function i0(s,e,n){const r=s.createShader(e);return s.shaderSource(r,n),s.compileShader(r),r}const EE=37297;let bE=0;function wE(s,e){const n=s.split(`
`),r=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let d=o;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${n[d]}`)}return r.join(`
`)}const r0=new dt;function TE(s){Mt._getMatrix(r0,Mt.workingColorSpace,s);const e=`mat3( ${r0.elements.map(n=>n.toFixed(4))} )`;switch(Mt.getTransfer(s)){case Kl:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function s0(s,e,n){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return n.toUpperCase()+`

`+c+`

`+wE(s.getShaderSource(e),f)}else return c}function AE(s,e){const n=TE(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const CE={[w0]:"Linear",[T0]:"Reinhard",[A0]:"Cineon",[C0]:"ACESFilmic",[R0]:"AgX",[P0]:"Neutral",[N0]:"Custom"};function NE(s,e){const n=CE[e];return n===void 0?(at("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Ol=new Z;function RE(){Mt.getLuminanceCoefficients(Ol);const s=Ol.x.toFixed(4),e=Ol.y.toFixed(4),n=Ol.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function PE(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(to).join(`
`)}function IE(s){const e=[];for(const n in s){const r=s[n];r!==!1&&e.push("#define "+n+" "+r)}return e.join(`
`)}function LE(s,e){const n={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const c=s.getActiveAttrib(e,o),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),n[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return n}function to(s){return s!==""}function a0(s,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function o0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DE=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sh(s){return s.replace(DE,FE)}const UE=new Map;function FE(s,e){let n=ht[e];if(n===void 0){const r=UE.get(e);if(r!==void 0)n=ht[r],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sh(n)}const OE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l0(s){return s.replace(OE,kE)}function kE(s,e,n,r){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function c0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const BE={[kl]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};function zE(s){return BE[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const VE={[os]:"ENVMAP_TYPE_CUBE",[ra]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function jE(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":VE[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const HE={[ra]:"ENVMAP_MODE_REFRACTION"};function GE(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":HE[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const WE={[b0]:"ENVMAP_BLENDING_MULTIPLY",[P_]:"ENVMAP_BLENDING_MIX",[I_]:"ENVMAP_BLENDING_ADD"};function XE(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":WE[s.combine]||"ENVMAP_BLENDING_NONE"}function qE(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:r,maxMip:n}}function YE(s,e,n,r){const o=s.getContext(),c=n.defines;let d=n.vertexShader,f=n.fragmentShader;const p=zE(n),x=jE(n),y=GE(n),S=XE(n),g=qE(n),M=PE(n),E=IE(c),C=o.createProgram();let _,v,R=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(_=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(to).join(`
`),_.length>0&&(_+=`
`),v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E].filter(to).join(`
`),v.length>0&&(v+=`
`)):(_=[c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+y:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(to).join(`
`),v=[c0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,E,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.envMap?"#define "+y:"",n.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?ht.tonemapping_pars_fragment:"",n.toneMapping!==Di?NE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ht.colorspace_pars_fragment,AE("linearToOutputTexel",n.outputColorSpace),RE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(to).join(`
`)),d=Sh(d),d=a0(d,n),d=o0(d,n),f=Sh(f),f=a0(f,n),f=o0(f,n),d=l0(d),f=l0(f),n.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,_=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,v=["#define varying in",n.glslVersion===vm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===vm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const L=R+_+d,T=R+v+f,D=i0(o,o.VERTEX_SHADER,L),P=i0(o,o.FRAGMENT_SHADER,T);o.attachShader(C,D),o.attachShader(C,P),n.index0AttributeName!==void 0?o.bindAttribLocation(C,0,n.index0AttributeName):n.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(z){if(s.debug.checkShaderErrors){const Y=o.getProgramInfoLog(C)||"",Q=o.getShaderInfoLog(D)||"",ae=o.getShaderInfoLog(P)||"",G=Y.trim(),ce=Q.trim(),$=ae.trim();let X=!0,re=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(X=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,D,P);else{const oe=s0(o,D,"vertex"),k=s0(o,P,"fragment");At("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+G+`
`+oe+`
`+k)}else G!==""?at("WebGLProgram: Program Info Log:",G):(ce===""||$==="")&&(re=!1);re&&(z.diagnostics={runnable:X,programLog:G,vertexShader:{log:ce,prefix:_},fragmentShader:{log:$,prefix:v}})}o.deleteShader(D),o.deleteShader(P),w=new Hl(o,C),I=LE(o,C)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let I;this.getAttributes=function(){return I===void 0&&F(this),I};let B=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return B===!1&&(B=o.getProgramParameter(C,EE)),B},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=bE++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=D,this.fragmentShader=P,this}let $E=0;class KE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,r){const o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const r of n)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let r=n.get(e);return r===void 0&&(r=new Set,n.set(e,r)),r}_getShaderStage(e){const n=this.shaderCache;let r=n.get(e);return r===void 0&&(r=new ZE(e),n.set(e,r)),r}}class ZE{constructor(e){this.id=$E++,this.code=e,this.usedTimes=0}}function QE(s){return s===ls||s===ql||s===Yl}function JE(s,e,n,r,o,c){const d=new j0,f=new KE,p=new Set,x=[],y=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(w){return p.add(w),w===0?"uv":`uv${w}`}function C(w,I,B,z,Y,Q){const ae=z.fog,G=Y.geometry,ce=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?z.environment:null,$=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,X=e.get(w.envMap||ce,$),re=X&&X.mapping===sc?X.image.height:null,oe=M[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&at("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const k=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,J=k!==void 0?k.length:0;let Ie=0;G.morphAttributes.position!==void 0&&(Ie=1),G.morphAttributes.normal!==void 0&&(Ie=2),G.morphAttributes.color!==void 0&&(Ie=3);let Ge,ze,le,ge;if(oe){const je=Ri[oe];Ge=je.vertexShader,ze=je.fragmentShader}else{Ge=w.vertexShader,ze=w.fragmentShader;const je=f.getVertexShaderStage(w),Ut=f.getFragmentShaderStage(w);f.update(w,je,Ut),le=je.id,ge=Ut.id}const pe=s.getRenderTarget(),Fe=s.state.buffers.depth.getReversed(),Ze=Y.isInstancedMesh===!0,et=Y.isBatchedMesh===!0,kt=!!w.map,lt=!!w.matcap,St=!!X,mt=!!w.aoMap,ft=!!w.lightMap,Ft=!!w.bumpMap&&w.wireframe===!1,jt=!!w.normalMap,Ht=!!w.displacementMap,Bt=!!w.emissiveMap,Ct=!!w.metalnessMap,Ot=!!w.roughnessMap,j=w.anisotropy>0,yt=w.clearcoat>0,st=w.dispersion>0,U=w.iridescence>0,b=w.sheen>0,K=w.transmission>0,se=j&&!!w.anisotropyMap,he=yt&&!!w.clearcoatMap,Me=yt&&!!w.clearcoatNormalMap,Ce=yt&&!!w.clearcoatRoughnessMap,fe=U&&!!w.iridescenceMap,xe=U&&!!w.iridescenceThicknessMap,Re=b&&!!w.sheenColorMap,Ye=b&&!!w.sheenRoughnessMap,Pe=!!w.specularMap,Ae=!!w.specularColorMap,Je=!!w.specularIntensityMap,tt=K&&!!w.transmissionMap,rt=K&&!!w.thicknessMap,H=!!w.gradientMap,Te=!!w.alphaMap,me=w.alphaTest>0,Ne=!!w.alphaHash,De=!!w.extensions;let ve=Di;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(ve=s.toneMapping);const We={shaderID:oe,shaderType:w.type,shaderName:w.name,vertexShader:Ge,fragmentShader:ze,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:ge,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:et,batchingColor:et&&Y._colorsTexture!==null,instancing:Ze,instancingColor:Ze&&Y.instanceColor!==null,instancingMorph:Ze&&Y.morphTexture!==null,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Mt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:kt,matcap:lt,envMap:St,envMapMode:St&&X.mapping,envMapCubeUVHeight:re,aoMap:mt,lightMap:ft,bumpMap:Ft,normalMap:jt,displacementMap:Ht,emissiveMap:Bt,normalMapObjectSpace:jt&&w.normalMapType===U_,normalMapTangentSpace:jt&&w.normalMapType===gh,packedNormalMap:jt&&w.normalMapType===gh&&QE(w.normalMap.format),metalnessMap:Ct,roughnessMap:Ot,anisotropy:j,anisotropyMap:se,clearcoat:yt,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:st,iridescence:U,iridescenceMap:fe,iridescenceThicknessMap:xe,sheen:b,sheenColorMap:Re,sheenRoughnessMap:Ye,specularMap:Pe,specularColorMap:Ae,specularIntensityMap:Je,transmission:K,transmissionMap:tt,thicknessMap:rt,gradientMap:H,opaque:w.transparent===!1&&w.blending===Js&&w.alphaToCoverage===!1,alphaMap:Te,alphaTest:me,alphaHash:Ne,combine:w.combine,mapUv:kt&&E(w.map.channel),aoMapUv:mt&&E(w.aoMap.channel),lightMapUv:ft&&E(w.lightMap.channel),bumpMapUv:Ft&&E(w.bumpMap.channel),normalMapUv:jt&&E(w.normalMap.channel),displacementMapUv:Ht&&E(w.displacementMap.channel),emissiveMapUv:Bt&&E(w.emissiveMap.channel),metalnessMapUv:Ct&&E(w.metalnessMap.channel),roughnessMapUv:Ot&&E(w.roughnessMap.channel),anisotropyMapUv:se&&E(w.anisotropyMap.channel),clearcoatMapUv:he&&E(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&E(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&E(w.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&E(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&E(w.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&E(w.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(w.sheenRoughnessMap.channel),specularMapUv:Pe&&E(w.specularMap.channel),specularColorMapUv:Ae&&E(w.specularColorMap.channel),specularIntensityMapUv:Je&&E(w.specularIntensityMap.channel),transmissionMapUv:tt&&E(w.transmissionMap.channel),thicknessMapUv:rt&&E(w.thicknessMap.channel),alphaMapUv:Te&&E(w.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(jt||j),vertexNormals:!!G.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!G.attributes.uv&&(kt||Te),fog:!!ae,useFog:w.fog===!0,fogExp2:!!ae&&ae.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||G.attributes.normal===void 0&&jt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Fe,skinning:Y.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Ie,numDirLights:I.directional.length,numPointLights:I.point.length,numSpotLights:I.spot.length,numSpotLightMaps:I.spotLightMap.length,numRectAreaLights:I.rectArea.length,numHemiLights:I.hemi.length,numDirLightShadows:I.directionalShadowMap.length,numPointLightShadows:I.pointShadowMap.length,numSpotLightShadows:I.spotShadowMap.length,numSpotLightShadowsWithMaps:I.numSpotLightShadowsWithMaps,numLightProbes:I.numLightProbes,numLightProbeGrids:Q.length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:kt&&w.map.isVideoTexture===!0&&Mt.getTransfer(w.map.colorSpace)===Dt,decodeVideoTextureEmissive:Bt&&w.emissiveMap.isVideoTexture===!0&&Mt.getTransfer(w.emissiveMap.colorSpace)===Dt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Pi,flipSided:w.side===Gn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:De&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(De&&w.extensions.multiDraw===!0||et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=p.has(1),We.vertexUv2s=p.has(2),We.vertexUv3s=p.has(3),p.clear(),We}function _(w){const I=[];if(w.shaderID?I.push(w.shaderID):(I.push(w.customVertexShaderID),I.push(w.customFragmentShaderID)),w.defines!==void 0)for(const B in w.defines)I.push(B),I.push(w.defines[B]);return w.isRawShaderMaterial===!1&&(v(I,w),R(I,w),I.push(s.outputColorSpace)),I.push(w.customProgramCacheKey),I.join()}function v(w,I){w.push(I.precision),w.push(I.outputColorSpace),w.push(I.envMapMode),w.push(I.envMapCubeUVHeight),w.push(I.mapUv),w.push(I.alphaMapUv),w.push(I.lightMapUv),w.push(I.aoMapUv),w.push(I.bumpMapUv),w.push(I.normalMapUv),w.push(I.displacementMapUv),w.push(I.emissiveMapUv),w.push(I.metalnessMapUv),w.push(I.roughnessMapUv),w.push(I.anisotropyMapUv),w.push(I.clearcoatMapUv),w.push(I.clearcoatNormalMapUv),w.push(I.clearcoatRoughnessMapUv),w.push(I.iridescenceMapUv),w.push(I.iridescenceThicknessMapUv),w.push(I.sheenColorMapUv),w.push(I.sheenRoughnessMapUv),w.push(I.specularMapUv),w.push(I.specularColorMapUv),w.push(I.specularIntensityMapUv),w.push(I.transmissionMapUv),w.push(I.thicknessMapUv),w.push(I.combine),w.push(I.fogExp2),w.push(I.sizeAttenuation),w.push(I.morphTargetsCount),w.push(I.morphAttributeCount),w.push(I.numDirLights),w.push(I.numPointLights),w.push(I.numSpotLights),w.push(I.numSpotLightMaps),w.push(I.numHemiLights),w.push(I.numRectAreaLights),w.push(I.numDirLightShadows),w.push(I.numPointLightShadows),w.push(I.numSpotLightShadows),w.push(I.numSpotLightShadowsWithMaps),w.push(I.numLightProbes),w.push(I.shadowMapType),w.push(I.toneMapping),w.push(I.numClippingPlanes),w.push(I.numClipIntersection),w.push(I.depthPacking)}function R(w,I){d.disableAll(),I.instancing&&d.enable(0),I.instancingColor&&d.enable(1),I.instancingMorph&&d.enable(2),I.matcap&&d.enable(3),I.envMap&&d.enable(4),I.normalMapObjectSpace&&d.enable(5),I.normalMapTangentSpace&&d.enable(6),I.clearcoat&&d.enable(7),I.iridescence&&d.enable(8),I.alphaTest&&d.enable(9),I.vertexColors&&d.enable(10),I.vertexAlphas&&d.enable(11),I.vertexUv1s&&d.enable(12),I.vertexUv2s&&d.enable(13),I.vertexUv3s&&d.enable(14),I.vertexTangents&&d.enable(15),I.anisotropy&&d.enable(16),I.alphaHash&&d.enable(17),I.batching&&d.enable(18),I.dispersion&&d.enable(19),I.batchingColor&&d.enable(20),I.gradientMap&&d.enable(21),I.packedNormalMap&&d.enable(22),I.vertexNormals&&d.enable(23),w.push(d.mask),d.disableAll(),I.fog&&d.enable(0),I.useFog&&d.enable(1),I.flatShading&&d.enable(2),I.logarithmicDepthBuffer&&d.enable(3),I.reversedDepthBuffer&&d.enable(4),I.skinning&&d.enable(5),I.morphTargets&&d.enable(6),I.morphNormals&&d.enable(7),I.morphColors&&d.enable(8),I.premultipliedAlpha&&d.enable(9),I.shadowMapEnabled&&d.enable(10),I.doubleSided&&d.enable(11),I.flipSided&&d.enable(12),I.useDepthPacking&&d.enable(13),I.dithering&&d.enable(14),I.transmission&&d.enable(15),I.sheen&&d.enable(16),I.opaque&&d.enable(17),I.pointsUvs&&d.enable(18),I.decodeVideoTexture&&d.enable(19),I.decodeVideoTextureEmissive&&d.enable(20),I.alphaToCoverage&&d.enable(21),I.numLightProbeGrids>0&&d.enable(22),I.hasPositionAttribute&&d.enable(23),w.push(d.mask)}function L(w){const I=M[w.type];let B;if(I){const z=Ri[I];B=_y.clone(z.uniforms)}else B=w.uniforms;return B}function T(w,I){let B=y.get(I);return B!==void 0?++B.usedTimes:(B=new YE(s,I,w,o),x.push(B),y.set(I,B)),B}function D(w){if(--w.usedTimes===0){const I=x.indexOf(w);x[I]=x[x.length-1],x.pop(),y.delete(w.cacheKey),w.destroy()}}function P(w){f.remove(w)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:_,getUniforms:L,acquireProgram:T,releaseProgram:D,releaseShaderCache:P,programs:x,dispose:F}}function eb(){let s=new WeakMap;function e(d){return s.has(d)}function n(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function o(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:n,remove:r,update:o,dispose:c}}function tb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function u0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function d0(){const s=[];let e=0;const n=[],r=[],o=[];function c(){e=0,n.length=0,r.length=0,o.length=0}function d(g){let M=0;return g.isInstancedMesh&&(M+=2),g.isSkinnedMesh&&(M+=1),M}function f(g,M,E,C,_,v){let R=s[e];return R===void 0?(R={id:g.id,object:g,geometry:M,material:E,materialVariant:d(g),groupOrder:C,renderOrder:g.renderOrder,z:_,group:v},s[e]=R):(R.id=g.id,R.object=g,R.geometry=M,R.material=E,R.materialVariant=d(g),R.groupOrder=C,R.renderOrder=g.renderOrder,R.z=_,R.group=v),e++,R}function p(g,M,E,C,_,v){const R=f(g,M,E,C,_,v);E.transmission>0?r.push(R):E.transparent===!0?o.push(R):n.push(R)}function x(g,M,E,C,_,v){const R=f(g,M,E,C,_,v);E.transmission>0?r.unshift(R):E.transparent===!0?o.unshift(R):n.unshift(R)}function y(g,M,E){n.length>1&&n.sort(g||tb),r.length>1&&r.sort(M||u0),o.length>1&&o.sort(M||u0),E&&(n.reverse(),r.reverse(),o.reverse())}function S(){for(let g=e,M=s.length;g<M;g++){const E=s[g];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:n,transmissive:r,transparent:o,init:c,push:p,unshift:x,finish:S,sort:y}}function nb(){let s=new WeakMap;function e(r,o){const c=s.get(r);let d;return c===void 0?(d=new d0,s.set(r,[d])):o>=c.length?(d=new d0,c.push(d)):d=c[o],d}function n(){s=new WeakMap}return{get:e,dispose:n}}function ib(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new Z,color:new vt};break;case"SpotLight":n={position:new Z,direction:new Z,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new Z,color:new vt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new Z,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":n={color:new vt,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=n,n}}}function rb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=n,n}}}let sb=0;function ab(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function ob(s){const e=new ib,n=rb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let x=0;x<9;x++)r.probe.push(new Z);const o=new Z,c=new Jt,d=new Jt;function f(x){let y=0,S=0,g=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let M=0,E=0,C=0,_=0,v=0,R=0,L=0,T=0,D=0,P=0,F=0;x.sort(ab);for(let I=0,B=x.length;I<B;I++){const z=x[I],Y=z.color,Q=z.intensity,ae=z.distance;let G=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ls?G=z.shadow.map.texture:G=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)y+=Y.r*Q,S+=Y.g*Q,g+=Y.b*Q;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],Q);F++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const $=z.shadow,X=n.get(z);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.directionalShadow[M]=X,r.directionalShadowMap[M]=G,r.directionalShadowMatrix[M]=z.shadow.matrix,R++}r.directional[M]=ce,M++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(Y).multiplyScalar(Q),ce.distance=ae,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[C]=ce;const $=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,$.updateMatrices(z),z.castShadow&&P++),r.spotLightMatrix[C]=$.matrix,z.castShadow){const X=n.get(z);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,r.spotShadow[C]=X,r.spotShadowMap[C]=G,T++}C++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(Y).multiplyScalar(Q),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[_]=ce,_++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const $=z.shadow,X=n.get(z);X.shadowIntensity=$.intensity,X.shadowBias=$.bias,X.shadowNormalBias=$.normalBias,X.shadowRadius=$.radius,X.shadowMapSize=$.mapSize,X.shadowCameraNear=$.camera.near,X.shadowCameraFar=$.camera.far,r.pointShadow[E]=X,r.pointShadowMap[E]=G,r.pointShadowMatrix[E]=z.shadow.matrix,L++}r.point[E]=ce,E++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(Q),ce.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[v]=ce,v++}}_>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=y,r.ambient[1]=S,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==M||w.pointLength!==E||w.spotLength!==C||w.rectAreaLength!==_||w.hemiLength!==v||w.numDirectionalShadows!==R||w.numPointShadows!==L||w.numSpotShadows!==T||w.numSpotMaps!==D||w.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=C,r.rectArea.length=_,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=R,r.directionalShadowMap.length=R,r.pointShadow.length=L,r.pointShadowMap.length=L,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=R,r.pointShadowMatrix.length=L,r.spotLightMatrix.length=T+D-P,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=F,w.directionalLength=M,w.pointLength=E,w.spotLength=C,w.rectAreaLength=_,w.hemiLength=v,w.numDirectionalShadows=R,w.numPointShadows=L,w.numSpotShadows=T,w.numSpotMaps=D,w.numLightProbes=F,r.version=sb++)}function p(x,y){let S=0,g=0,M=0,E=0,C=0;const _=y.matrixWorldInverse;for(let v=0,R=x.length;v<R;v++){const L=x[v];if(L.isDirectionalLight){const T=r.directional[S];T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),S++}else if(L.isSpotLight){const T=r.spot[M];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),T.direction.sub(o),T.direction.transformDirection(_),M++}else if(L.isRectAreaLight){const T=r.rectArea[E];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(_),d.identity(),c.copy(L.matrixWorld),c.premultiply(_),d.extractRotation(c),T.halfWidth.set(L.width*.5,0,0),T.halfHeight.set(0,L.height*.5,0),T.halfWidth.applyMatrix4(d),T.halfHeight.applyMatrix4(d),E++}else if(L.isPointLight){const T=r.point[g];T.position.setFromMatrixPosition(L.matrixWorld),T.position.applyMatrix4(_),g++}else if(L.isHemisphereLight){const T=r.hemi[C];T.direction.setFromMatrixPosition(L.matrixWorld),T.direction.transformDirection(_),C++}}}return{setup:f,setupView:p,state:r}}function h0(s){const e=new ob(s),n=[],r=[],o=[];function c(g){S.camera=g,n.length=0,r.length=0,o.length=0}function d(g){n.push(g)}function f(g){r.push(g)}function p(g){o.push(g)}function x(){e.setup(n)}function y(g){e.setupView(n,g)}const S={lightsArray:n,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:S,setupLights:x,setupLightsView:y,pushLight:d,pushShadow:f,pushLightProbeGrid:p}}function lb(s){let e=new WeakMap;function n(o,c=0){const d=e.get(o);let f;return d===void 0?(f=new h0(s),e.set(o,[f])):c>=d.length?(f=new h0(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:n,dispose:r}}const cb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,db=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],hb=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],f0=new Jt,Ja=new Z,Ad=new Z;function fb(s,e,n){let r=new Lh;const o=new _t,c=new _t,d=new Qt,f=new Ey,p=new by,x={},y=n.maxTextureSize,S={[Pr]:Gn,[Gn]:Pr,[Pi]:Pi},g=new Oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:cb,fragmentShader:ub}),M=g.clone();M.defines.HORIZONTAL_PASS=1;const E=new Ln;E.setAttribute("position",new li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Hn(E,g),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kl;let v=this.type;this.render=function(P,F,w){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||P.length===0)return;this.type===h_&&(at("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=kl);const I=s.getRenderTarget(),B=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),Y=s.state;Y.setBlending(er),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Q=v!==this.type;Q&&F.traverse(function(ae){ae.material&&(Array.isArray(ae.material)?ae.material.forEach(G=>G.needsUpdate=!0):ae.material.needsUpdate=!0)});for(let ae=0,G=P.length;ae<G;ae++){const ce=P[ae],$=ce.shadow;if($===void 0){at("WebGLShadowMap:",ce,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;o.copy($.mapSize);const X=$.getFrameExtents();o.multiply(X),c.copy($.mapSize),(o.x>y||o.y>y)&&(o.x>y&&(c.x=Math.floor(y/X.x),o.x=c.x*X.x,$.mapSize.x=c.x),o.y>y&&(c.y=Math.floor(y/X.y),o.y=c.y*X.y,$.mapSize.y=c.y));const re=s.state.buffers.depth.getReversed();if($.camera._reversedDepth=re,$.map===null||Q===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===eo){if(ce.isPointLight){at("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}$.map=new Ui(o.x,o.y,{format:ls,type:nr,minFilter:Tn,magFilter:Tn,generateMipmaps:!1}),$.map.texture.name=ce.name+".shadowMap",$.map.depthTexture=new sa(o.x,o.y,Ii),$.map.depthTexture.name=ce.name+".shadowMapDepth",$.map.depthTexture.format=ir,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=vn,$.map.depthTexture.magFilter=vn}else ce.isPointLight?($.map=new nx(o.x),$.map.depthTexture=new gy(o.x,Fi)):($.map=new Ui(o.x,o.y),$.map.depthTexture=new sa(o.x,o.y,Fi)),$.map.depthTexture.name=ce.name+".shadowMap",$.map.depthTexture.format=ir,this.type===kl?($.map.depthTexture.compareFunction=re?Ph:Rh,$.map.depthTexture.minFilter=Tn,$.map.depthTexture.magFilter=Tn):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=vn,$.map.depthTexture.magFilter=vn);$.camera.updateProjectionMatrix()}const oe=$.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<oe;k++){if($.map.isWebGLCubeRenderTarget)s.setRenderTarget($.map,k),s.clear();else{k===0&&(s.setRenderTarget($.map),s.clear());const J=$.getViewport(k);d.set(c.x*J.x,c.y*J.y,c.x*J.z,c.y*J.w),Y.viewport(d)}if(ce.isPointLight){const J=$.camera,Ie=$.matrix,Ge=ce.distance||J.far;Ge!==J.far&&(J.far=Ge,J.updateProjectionMatrix()),Ja.setFromMatrixPosition(ce.matrixWorld),J.position.copy(Ja),Ad.copy(J.position),Ad.add(db[k]),J.up.copy(hb[k]),J.lookAt(Ad),J.updateMatrixWorld(),Ie.makeTranslation(-Ja.x,-Ja.y,-Ja.z),f0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),$._frustum.setFromProjectionMatrix(f0,J.coordinateSystem,J.reversedDepth)}else $.updateMatrices(ce);r=$.getFrustum(),T(F,w,$.camera,ce,this.type)}$.isPointLightShadow!==!0&&this.type===eo&&R($,w),$.needsUpdate=!1}v=this.type,_.needsUpdate=!1,s.setRenderTarget(I,B,z)};function R(P,F){const w=e.update(C);g.defines.VSM_SAMPLES!==P.blurSamples&&(g.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,g.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new Ui(o.x,o.y,{format:ls,type:nr})),g.uniforms.shadow_pass.value=P.map.depthTexture,g.uniforms.resolution.value=P.mapSize,g.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(F,null,w,g,C,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value=P.mapSize,M.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(F,null,w,M,C,null)}function L(P,F,w,I){let B=null;const z=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(z!==void 0)B=z;else if(B=w.isPointLight===!0?p:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const Y=B.uuid,Q=F.uuid;let ae=x[Y];ae===void 0&&(ae={},x[Y]=ae);let G=ae[Q];G===void 0&&(G=B.clone(),ae[Q]=G,F.addEventListener("dispose",D)),B=G}if(B.visible=F.visible,B.wireframe=F.wireframe,I===eo?B.side=F.shadowSide!==null?F.shadowSide:F.side:B.side=F.shadowSide!==null?F.shadowSide:S[F.side],B.alphaMap=F.alphaMap,B.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,B.map=F.map,B.clipShadows=F.clipShadows,B.clippingPlanes=F.clippingPlanes,B.clipIntersection=F.clipIntersection,B.displacementMap=F.displacementMap,B.displacementScale=F.displacementScale,B.displacementBias=F.displacementBias,B.wireframeLinewidth=F.wireframeLinewidth,B.linewidth=F.linewidth,w.isPointLight===!0&&B.isMeshDistanceMaterial===!0){const Y=s.properties.get(B);Y.light=w}return B}function T(P,F,w,I,B){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&B===eo)&&(!P.frustumCulled||r.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const Q=e.update(P),ae=P.material;if(Array.isArray(ae)){const G=Q.groups;for(let ce=0,$=G.length;ce<$;ce++){const X=G[ce],re=ae[X.materialIndex];if(re&&re.visible){const oe=L(P,re,I,B);P.onBeforeShadow(s,P,F,w,Q,oe,X),s.renderBufferDirect(w,null,Q,oe,P,X),P.onAfterShadow(s,P,F,w,Q,oe,X)}}}else if(ae.visible){const G=L(P,ae,I,B);P.onBeforeShadow(s,P,F,w,Q,G,null),s.renderBufferDirect(w,null,Q,G,P,null),P.onAfterShadow(s,P,F,w,Q,G,null)}}const Y=P.children;for(let Q=0,ae=Y.length;Q<ae;Q++)T(Y[Q],F,w,I,B)}function D(P){P.target.removeEventListener("dispose",D);for(const w in x){const I=x[w],B=P.target.uuid;B in I&&(I[B].dispose(),delete I[B])}}}function pb(s,e){function n(){let H=!1;const Te=new Qt;let me=null;const Ne=new Qt(0,0,0,0);return{setMask:function(De){me!==De&&!H&&(s.colorMask(De,De,De,De),me=De)},setLocked:function(De){H=De},setClear:function(De,ve,We,je,Ut){Ut===!0&&(De*=je,ve*=je,We*=je),Te.set(De,ve,We,je),Ne.equals(Te)===!1&&(s.clearColor(De,ve,We,je),Ne.copy(Te))},reset:function(){H=!1,me=null,Ne.set(-1,0,0,0)}}}function r(){let H=!1,Te=!1,me=null,Ne=null,De=null;return{setReversed:function(ve){if(Te!==ve){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Te=ve;const je=De;De=null,this.setClear(je)}},getReversed:function(){return Te},setTest:function(ve){ve?pe(s.DEPTH_TEST):Fe(s.DEPTH_TEST)},setMask:function(ve){me!==ve&&!H&&(s.depthMask(ve),me=ve)},setFunc:function(ve){if(Te&&(ve=W_[ve]),Ne!==ve){switch(ve){case Id:s.depthFunc(s.NEVER);break;case Ld:s.depthFunc(s.ALWAYS);break;case Dd:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case Ud:s.depthFunc(s.EQUAL);break;case Fd:s.depthFunc(s.GEQUAL);break;case Od:s.depthFunc(s.GREATER);break;case kd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=ve}},setLocked:function(ve){H=ve},setClear:function(ve){De!==ve&&(De=ve,Te&&(ve=1-ve),s.clearDepth(ve))},reset:function(){H=!1,me=null,Ne=null,De=null,Te=!1}}}function o(){let H=!1,Te=null,me=null,Ne=null,De=null,ve=null,We=null,je=null,Ut=null;return{setTest:function(Rt){H||(Rt?pe(s.STENCIL_TEST):Fe(s.STENCIL_TEST))},setMask:function(Rt){Te!==Rt&&!H&&(s.stencilMask(Rt),Te=Rt)},setFunc:function(Rt,_n,Jn){(me!==Rt||Ne!==_n||De!==Jn)&&(s.stencilFunc(Rt,_n,Jn),me=Rt,Ne=_n,De=Jn)},setOp:function(Rt,_n,Jn){(ve!==Rt||We!==_n||je!==Jn)&&(s.stencilOp(Rt,_n,Jn),ve=Rt,We=_n,je=Jn)},setLocked:function(Rt){H=Rt},setClear:function(Rt){Ut!==Rt&&(s.clearStencil(Rt),Ut=Rt)},reset:function(){H=!1,Te=null,me=null,Ne=null,De=null,ve=null,We=null,je=null,Ut=null}}}const c=new n,d=new r,f=new o,p=new WeakMap,x=new WeakMap;let y={},S={},g={},M=new WeakMap,E=[],C=null,_=!1,v=null,R=null,L=null,T=null,D=null,P=null,F=null,w=new vt(0,0,0),I=0,B=!1,z=null,Y=null,Q=null,ae=null,G=null;const ce=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const re=s.getParameter(s.VERSION);re.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(re)[1]),$=X>=1):re.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(re)[1]),$=X>=2);let oe=null,k={};const J=s.getParameter(s.SCISSOR_BOX),Ie=s.getParameter(s.VIEWPORT),Ge=new Qt().fromArray(J),ze=new Qt().fromArray(Ie);function le(H,Te,me,Ne){const De=new Uint8Array(4),ve=s.createTexture();s.bindTexture(H,ve),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<me;We++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Te,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Te+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return ve}const ge={};ge[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),ge[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ge[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ge[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),pe(s.DEPTH_TEST),d.setFunc(ia),Ft(!1),jt(fm),pe(s.CULL_FACE),mt(er);function pe(H){y[H]!==!0&&(s.enable(H),y[H]=!0)}function Fe(H){y[H]!==!1&&(s.disable(H),y[H]=!1)}function Ze(H,Te){return g[H]!==Te?(s.bindFramebuffer(H,Te),g[H]=Te,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Te),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Te),!0):!1}function et(H,Te){let me=E,Ne=!1;if(H){me=M.get(Te),me===void 0&&(me=[],M.set(Te,me));const De=H.textures;if(me.length!==De.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,We=De.length;ve<We;ve++)me[ve]=s.COLOR_ATTACHMENT0+ve;me.length=De.length,Ne=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(me)}function kt(H){return C!==H?(s.useProgram(H),C=H,!0):!1}const lt={[is]:s.FUNC_ADD,[p_]:s.FUNC_SUBTRACT,[m_]:s.FUNC_REVERSE_SUBTRACT};lt[x_]=s.MIN,lt[g_]=s.MAX;const St={[v_]:s.ZERO,[__]:s.ONE,[y_]:s.SRC_COLOR,[Rd]:s.SRC_ALPHA,[T_]:s.SRC_ALPHA_SATURATE,[b_]:s.DST_COLOR,[M_]:s.DST_ALPHA,[S_]:s.ONE_MINUS_SRC_COLOR,[Pd]:s.ONE_MINUS_SRC_ALPHA,[w_]:s.ONE_MINUS_DST_COLOR,[E_]:s.ONE_MINUS_DST_ALPHA,[A_]:s.CONSTANT_COLOR,[C_]:s.ONE_MINUS_CONSTANT_COLOR,[N_]:s.CONSTANT_ALPHA,[R_]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(H,Te,me,Ne,De,ve,We,je,Ut,Rt){if(H===er){_===!0&&(Fe(s.BLEND),_=!1);return}if(_===!1&&(pe(s.BLEND),_=!0),H!==f_){if(H!==v||Rt!==B){if((R!==is||D!==is)&&(s.blendEquation(s.FUNC_ADD),R=is,D=is),Rt)switch(H){case Js:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nd:s.blendFunc(s.ONE,s.ONE);break;case pm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",H);break}else switch(H){case Js:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Nd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case pm:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mm:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",H);break}L=null,T=null,P=null,F=null,w.set(0,0,0),I=0,v=H,B=Rt}return}De=De||Te,ve=ve||me,We=We||Ne,(Te!==R||De!==D)&&(s.blendEquationSeparate(lt[Te],lt[De]),R=Te,D=De),(me!==L||Ne!==T||ve!==P||We!==F)&&(s.blendFuncSeparate(St[me],St[Ne],St[ve],St[We]),L=me,T=Ne,P=ve,F=We),(je.equals(w)===!1||Ut!==I)&&(s.blendColor(je.r,je.g,je.b,Ut),w.copy(je),I=Ut),v=H,B=!1}function ft(H,Te){H.side===Pi?Fe(s.CULL_FACE):pe(s.CULL_FACE);let me=H.side===Gn;Te&&(me=!me),Ft(me),H.blending===Js&&H.transparent===!1?mt(er):mt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),c.setMask(H.colorWrite);const Ne=H.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Bt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?pe(s.SAMPLE_ALPHA_TO_COVERAGE):Fe(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ft(H){z!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),z=H)}function jt(H){H!==u_?(pe(s.CULL_FACE),H!==Y&&(H===fm?s.cullFace(s.BACK):H===d_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Fe(s.CULL_FACE),Y=H}function Ht(H){H!==Q&&($&&s.lineWidth(H),Q=H)}function Bt(H,Te,me){H?(pe(s.POLYGON_OFFSET_FILL),(ae!==Te||G!==me)&&(ae=Te,G=me,d.getReversed()&&(Te=-Te),s.polygonOffset(Te,me))):Fe(s.POLYGON_OFFSET_FILL)}function Ct(H){H?pe(s.SCISSOR_TEST):Fe(s.SCISSOR_TEST)}function Ot(H){H===void 0&&(H=s.TEXTURE0+ce-1),oe!==H&&(s.activeTexture(H),oe=H)}function j(H,Te,me){me===void 0&&(oe===null?me=s.TEXTURE0+ce-1:me=oe);let Ne=k[me];Ne===void 0&&(Ne={type:void 0,texture:void 0},k[me]=Ne),(Ne.type!==H||Ne.texture!==Te)&&(oe!==me&&(s.activeTexture(me),oe=me),s.bindTexture(H,Te||ge[H]),Ne.type=H,Ne.texture=Te)}function yt(){const H=k[oe];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function U(){try{s.compressedTexImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function b(){try{s.texSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function K(){try{s.texSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function se(){try{s.compressedTexSubImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function Me(){try{s.texStorage2D(...arguments)}catch(H){At("WebGLState:",H)}}function Ce(){try{s.texStorage3D(...arguments)}catch(H){At("WebGLState:",H)}}function fe(){try{s.texImage2D(...arguments)}catch(H){At("WebGLState:",H)}}function xe(){try{s.texImage3D(...arguments)}catch(H){At("WebGLState:",H)}}function Re(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function Ye(H,Te){S[H]!==Te&&(s.pixelStorei(H,Te),S[H]=Te)}function Pe(H){Ge.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Ge.copy(H))}function Ae(H){ze.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function Je(H,Te){let me=x.get(Te);me===void 0&&(me=new WeakMap,x.set(Te,me));let Ne=me.get(H);Ne===void 0&&(Ne=s.getUniformBlockIndex(Te,H.name),me.set(H,Ne))}function tt(H,Te){const Ne=x.get(Te).get(H);p.get(Te)!==Ne&&(s.uniformBlockBinding(Te,Ne,H.__bindingPointIndex),p.set(Te,Ne))}function rt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),y={},S={},oe=null,k={},g={},M=new WeakMap,E=[],C=null,_=!1,v=null,R=null,L=null,T=null,D=null,P=null,F=null,w=new vt(0,0,0),I=0,B=!1,z=null,Y=null,Q=null,ae=null,G=null,Ge.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:pe,disable:Fe,bindFramebuffer:Ze,drawBuffers:et,useProgram:kt,setBlending:mt,setMaterial:ft,setFlipSided:Ft,setCullFace:jt,setLineWidth:Ht,setPolygonOffset:Bt,setScissorTest:Ct,activeTexture:Ot,bindTexture:j,unbindTexture:yt,compressedTexImage2D:st,compressedTexImage3D:U,texImage2D:fe,texImage3D:xe,pixelStorei:Ye,getParameter:Re,updateUBOMapping:Je,uniformBlockBinding:tt,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:b,texSubImage3D:K,compressedTexSubImage2D:se,compressedTexSubImage3D:he,scissor:Pe,viewport:Ae,reset:rt}}function mb(s,e,n,r,o,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),x=new _t,y=new WeakMap,S=new Set;let g;const M=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(U,b){return E?new OffscreenCanvas(U,b):Zl("canvas")}function _(U,b,K){let se=1;const he=st(U);if((he.width>K||he.height>K)&&(se=K/Math.max(he.width,he.height)),se<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const Me=Math.floor(se*he.width),Ce=Math.floor(se*he.height);g===void 0&&(g=C(Me,Ce));const fe=b?C(Me,Ce):g;return fe.width=Me,fe.height=Ce,fe.getContext("2d").drawImage(U,0,0,Me,Ce),at("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Ce+")."),fe}else return"data"in U&&at("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),U;return U}function v(U){return U.generateMipmaps}function R(U){s.generateMipmap(U)}function L(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function T(U,b,K,se,he,Me=!1){if(U!==null){if(s[U]!==void 0)return s[U];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ce;se&&(Ce=e.get("EXT_texture_norm16"),Ce||at("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let fe=b;if(b===s.RED&&(K===s.FLOAT&&(fe=s.R32F),K===s.HALF_FLOAT&&(fe=s.R16F),K===s.UNSIGNED_BYTE&&(fe=s.R8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.R16_EXT),K===s.SHORT&&Ce&&(fe=Ce.R16_SNORM_EXT)),b===s.RED_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.R8UI),K===s.UNSIGNED_SHORT&&(fe=s.R16UI),K===s.UNSIGNED_INT&&(fe=s.R32UI),K===s.BYTE&&(fe=s.R8I),K===s.SHORT&&(fe=s.R16I),K===s.INT&&(fe=s.R32I)),b===s.RG&&(K===s.FLOAT&&(fe=s.RG32F),K===s.HALF_FLOAT&&(fe=s.RG16F),K===s.UNSIGNED_BYTE&&(fe=s.RG8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RG16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RG8UI),K===s.UNSIGNED_SHORT&&(fe=s.RG16UI),K===s.UNSIGNED_INT&&(fe=s.RG32UI),K===s.BYTE&&(fe=s.RG8I),K===s.SHORT&&(fe=s.RG16I),K===s.INT&&(fe=s.RG32I)),b===s.RGB_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),K===s.UNSIGNED_INT&&(fe=s.RGB32UI),K===s.BYTE&&(fe=s.RGB8I),K===s.SHORT&&(fe=s.RGB16I),K===s.INT&&(fe=s.RGB32I)),b===s.RGBA_INTEGER&&(K===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),K===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),K===s.UNSIGNED_INT&&(fe=s.RGBA32UI),K===s.BYTE&&(fe=s.RGBA8I),K===s.SHORT&&(fe=s.RGBA16I),K===s.INT&&(fe=s.RGBA32I)),b===s.RGB&&(K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RGB16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RGB16_SNORM_EXT),K===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),K===s.UNSIGNED_INT_10F_11F_11F_REV&&(fe=s.R11F_G11F_B10F)),b===s.RGBA){const xe=Me?Kl:Mt.getTransfer(he);K===s.FLOAT&&(fe=s.RGBA32F),K===s.HALF_FLOAT&&(fe=s.RGBA16F),K===s.UNSIGNED_BYTE&&(fe=xe===Dt?s.SRGB8_ALPHA8:s.RGBA8),K===s.UNSIGNED_SHORT&&Ce&&(fe=Ce.RGBA16_EXT),K===s.SHORT&&Ce&&(fe=Ce.RGBA16_SNORM_EXT),K===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),K===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function D(U,b){let K;return U?b===null||b===Fi||b===ro?K=s.DEPTH24_STENCIL8:b===Ii?K=s.DEPTH32F_STENCIL8:b===io&&(K=s.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Fi||b===ro?K=s.DEPTH_COMPONENT24:b===Ii?K=s.DEPTH_COMPONENT32F:b===io&&(K=s.DEPTH_COMPONENT16),K}function P(U,b){return v(U)===!0||U.isFramebufferTexture&&U.minFilter!==vn&&U.minFilter!==Tn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function F(U){const b=U.target;b.removeEventListener("dispose",F),I(b),b.isVideoTexture&&y.delete(b),b.isHTMLTexture&&S.delete(b)}function w(U){const b=U.target;b.removeEventListener("dispose",w),z(b)}function I(U){const b=r.get(U);if(b.__webglInit===void 0)return;const K=U.source,se=M.get(K);if(se){const he=se[b.__cacheKey];he.usedTimes--,he.usedTimes===0&&B(U),Object.keys(se).length===0&&M.delete(K)}r.remove(U)}function B(U){const b=r.get(U);s.deleteTexture(b.__webglTexture);const K=U.source,se=M.get(K);delete se[b.__cacheKey],d.memory.textures--}function z(U){const b=r.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),r.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let se=0;se<6;se++){if(Array.isArray(b.__webglFramebuffer[se]))for(let he=0;he<b.__webglFramebuffer[se].length;he++)s.deleteFramebuffer(b.__webglFramebuffer[se][he]);else s.deleteFramebuffer(b.__webglFramebuffer[se]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[se])}else{if(Array.isArray(b.__webglFramebuffer))for(let se=0;se<b.__webglFramebuffer.length;se++)s.deleteFramebuffer(b.__webglFramebuffer[se]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let se=0;se<b.__webglColorRenderbuffer.length;se++)b.__webglColorRenderbuffer[se]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[se]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const K=U.textures;for(let se=0,he=K.length;se<he;se++){const Me=r.get(K[se]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),d.memory.textures--),r.remove(K[se])}r.remove(U)}let Y=0;function Q(){Y=0}function ae(){return Y}function G(U){Y=U}function ce(){const U=Y;return U>=o.maxTextures&&at("WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+o.maxTextures),Y+=1,U}function $(U){const b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function X(U,b){const K=r.get(U);if(U.isVideoTexture&&j(U),U.isRenderTargetTexture===!1&&U.isExternalTexture!==!0&&U.version>0&&K.__version!==U.version){const se=U.image;if(se===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(se.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{Fe(K,U,b);return}}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D,K.__webglTexture,s.TEXTURE0+b)}function re(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Fe(K,U,b);return}else U.isExternalTexture&&(K.__webglTexture=U.sourceTexture?U.sourceTexture:null);n.bindTexture(s.TEXTURE_2D_ARRAY,K.__webglTexture,s.TEXTURE0+b)}function oe(U,b){const K=r.get(U);if(U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){Fe(K,U,b);return}n.bindTexture(s.TEXTURE_3D,K.__webglTexture,s.TEXTURE0+b)}function k(U,b){const K=r.get(U);if(U.isCubeDepthTexture!==!0&&U.version>0&&K.__version!==U.version){Ze(K,U,b);return}n.bindTexture(s.TEXTURE_CUBE_MAP,K.__webglTexture,s.TEXTURE0+b)}const J={[Bd]:s.REPEAT,[Ji]:s.CLAMP_TO_EDGE,[zd]:s.MIRRORED_REPEAT},Ie={[vn]:s.NEAREST,[L_]:s.NEAREST_MIPMAP_NEAREST,[pl]:s.NEAREST_MIPMAP_LINEAR,[Tn]:s.LINEAR,[$u]:s.LINEAR_MIPMAP_NEAREST,[ss]:s.LINEAR_MIPMAP_LINEAR},Ge={[F_]:s.NEVER,[V_]:s.ALWAYS,[O_]:s.LESS,[Rh]:s.LEQUAL,[k_]:s.EQUAL,[Ph]:s.GEQUAL,[B_]:s.GREATER,[z_]:s.NOTEQUAL};function ze(U,b){if(b.type===Ii&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Tn||b.magFilter===$u||b.magFilter===pl||b.magFilter===ss||b.minFilter===Tn||b.minFilter===$u||b.minFilter===pl||b.minFilter===ss)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,J[b.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,J[b.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,J[b.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,Ie[b.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,Ie[b.minFilter]),b.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,Ge[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===vn||b.minFilter!==pl&&b.minFilter!==ss||b.type===Ii&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");s.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,o.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function le(U,b){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",F));const se=b.source;let he=M.get(se);he===void 0&&(he={},M.set(se,he));const Me=$(b);if(Me!==U.__cacheKey){he[Me]===void 0&&(he[Me]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,K=!0),he[Me].usedTimes++;const Ce=he[U.__cacheKey];Ce!==void 0&&(he[U.__cacheKey].usedTimes--,Ce.usedTimes===0&&B(b)),U.__cacheKey=Me,U.__webglTexture=he[Me].texture}return K}function ge(U,b,K){return Math.floor(Math.floor(U/K)/b)}function pe(U,b,K,se){const Me=U.updateRanges;if(Me.length===0)n.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,K,se,b.data);else{Me.sort((Ye,Pe)=>Ye.start-Pe.start);let Ce=0;for(let Ye=1;Ye<Me.length;Ye++){const Pe=Me[Ce],Ae=Me[Ye],Je=Pe.start+Pe.count,tt=ge(Ae.start,b.width,4),rt=ge(Pe.start,b.width,4);Ae.start<=Je+1&&tt===rt&&ge(Ae.start+Ae.count-1,b.width,4)===tt?Pe.count=Math.max(Pe.count,Ae.start+Ae.count-Pe.start):(++Ce,Me[Ce]=Ae)}Me.length=Ce+1;const fe=n.getParameter(s.UNPACK_ROW_LENGTH),xe=n.getParameter(s.UNPACK_SKIP_PIXELS),Re=n.getParameter(s.UNPACK_SKIP_ROWS);n.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let Ye=0,Pe=Me.length;Ye<Pe;Ye++){const Ae=Me[Ye],Je=Math.floor(Ae.start/4),tt=Math.ceil(Ae.count/4),rt=Je%b.width,H=Math.floor(Je/b.width),Te=tt,me=1;n.pixelStorei(s.UNPACK_SKIP_PIXELS,rt),n.pixelStorei(s.UNPACK_SKIP_ROWS,H),n.texSubImage2D(s.TEXTURE_2D,0,rt,H,Te,me,K,se,b.data)}U.clearUpdateRanges(),n.pixelStorei(s.UNPACK_ROW_LENGTH,fe),n.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),n.pixelStorei(s.UNPACK_SKIP_ROWS,Re)}}function Fe(U,b,K){let se=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(se=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(se=s.TEXTURE_3D);const he=le(U,b),Me=b.source;n.bindTexture(se,U.__webglTexture,s.TEXTURE0+K);const Ce=r.get(Me);if(Me.version!==Ce.__version||he===!0){if(n.activeTexture(s.TEXTURE0+K),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const me=Mt.getPrimaries(Mt.workingColorSpace),Ne=b.colorSpace===Nr?null:Mt.getPrimaries(b.colorSpace),De=b.colorSpace===Nr||me===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De)}n.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=_(b.image,!1,o.maxTextureSize);xe=yt(b,xe);const Re=c.convert(b.format,b.colorSpace),Ye=c.convert(b.type);let Pe=T(b.internalFormat,Re,Ye,b.normalized,b.colorSpace,b.isVideoTexture);ze(se,b);let Ae;const Je=b.mipmaps,tt=b.isVideoTexture!==!0,rt=Ce.__version===void 0||he===!0,H=Me.dataReady,Te=P(b,xe);if(b.isDepthTexture)Pe=D(b.format===as,b.type),rt&&(tt?n.texStorage2D(s.TEXTURE_2D,1,Pe,xe.width,xe.height):n.texImage2D(s.TEXTURE_2D,0,Pe,xe.width,xe.height,0,Re,Ye,null));else if(b.isDataTexture)if(Je.length>0){tt&&rt&&n.texStorage2D(s.TEXTURE_2D,Te,Pe,Je[0].width,Je[0].height);for(let me=0,Ne=Je.length;me<Ne;me++)Ae=Je[me],tt?H&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Re,Ye,Ae.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Ae.width,Ae.height,0,Re,Ye,Ae.data);b.generateMipmaps=!1}else tt?(rt&&n.texStorage2D(s.TEXTURE_2D,Te,Pe,xe.width,xe.height),H&&pe(b,xe,Re,Ye)):n.texImage2D(s.TEXTURE_2D,0,Pe,xe.width,xe.height,0,Re,Ye,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){tt&&rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Pe,Je[0].width,Je[0].height,xe.depth);for(let me=0,Ne=Je.length;me<Ne;me++)if(Ae=Je[me],b.format!==Mi)if(Re!==null)if(tt){if(H)if(b.layerUpdates.size>0){const De=Gm(Ae.width,Ae.height,b.format,b.type);for(const ve of b.layerUpdates){const We=Ae.data.subarray(ve*De/Ae.data.BYTES_PER_ELEMENT,(ve+1)*De/Ae.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,ve,Ae.width,Ae.height,1,Re,We)}b.clearLayerUpdates()}else n.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,xe.depth,Re,Ae.data)}else n.compressedTexImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Ae.width,Ae.height,xe.depth,0,Ae.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?H&&n.texSubImage3D(s.TEXTURE_2D_ARRAY,me,0,0,0,Ae.width,Ae.height,xe.depth,Re,Ye,Ae.data):n.texImage3D(s.TEXTURE_2D_ARRAY,me,Pe,Ae.width,Ae.height,xe.depth,0,Re,Ye,Ae.data)}else{tt&&rt&&n.texStorage2D(s.TEXTURE_2D,Te,Pe,Je[0].width,Je[0].height);for(let me=0,Ne=Je.length;me<Ne;me++)Ae=Je[me],b.format!==Mi?Re!==null?tt?H&&n.compressedTexSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Re,Ae.data):n.compressedTexImage2D(s.TEXTURE_2D,me,Pe,Ae.width,Ae.height,0,Ae.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?H&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Ae.width,Ae.height,Re,Ye,Ae.data):n.texImage2D(s.TEXTURE_2D,me,Pe,Ae.width,Ae.height,0,Re,Ye,Ae.data)}else if(b.isDataArrayTexture)if(tt){if(rt&&n.texStorage3D(s.TEXTURE_2D_ARRAY,Te,Pe,xe.width,xe.height,xe.depth),H)if(b.layerUpdates.size>0){const me=Gm(xe.width,xe.height,b.format,b.type);for(const Ne of b.layerUpdates){const De=xe.data.subarray(Ne*me/xe.data.BYTES_PER_ELEMENT,(Ne+1)*me/xe.data.BYTES_PER_ELEMENT);n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Re,Ye,De)}b.clearLayerUpdates()}else n.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)}else n.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(b.isData3DTexture)tt?(rt&&n.texStorage3D(s.TEXTURE_3D,Te,Pe,xe.width,xe.height,xe.depth),H&&n.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Ye,xe.data)):n.texImage3D(s.TEXTURE_3D,0,Pe,xe.width,xe.height,xe.depth,0,Re,Ye,xe.data);else if(b.isFramebufferTexture){if(rt)if(tt)n.texStorage2D(s.TEXTURE_2D,Te,Pe,xe.width,xe.height);else{let me=xe.width,Ne=xe.height;for(let De=0;De<Te;De++)n.texImage2D(s.TEXTURE_2D,De,Pe,me,Ne,0,Re,Ye,null),me>>=1,Ne>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const me=s.canvas;if(me.hasAttribute("layoutsubtree")||me.setAttribute("layoutsubtree","true"),xe.parentNode!==me){me.appendChild(xe),S.add(b),me.onpaint=Ne=>{const De=Ne.changedElements;for(const ve of S)De.includes(ve.image)&&(ve.needsUpdate=!0)},me.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const De=s.RGBA,ve=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,De,ve,We,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Je.length>0){if(tt&&rt){const me=st(Je[0]);n.texStorage2D(s.TEXTURE_2D,Te,Pe,me.width,me.height)}for(let me=0,Ne=Je.length;me<Ne;me++)Ae=Je[me],tt?H&&n.texSubImage2D(s.TEXTURE_2D,me,0,0,Re,Ye,Ae):n.texImage2D(s.TEXTURE_2D,me,Pe,Re,Ye,Ae);b.generateMipmaps=!1}else if(tt){if(rt){const me=st(xe);n.texStorage2D(s.TEXTURE_2D,Te,Pe,me.width,me.height)}H&&n.texSubImage2D(s.TEXTURE_2D,0,0,0,Re,Ye,xe)}else n.texImage2D(s.TEXTURE_2D,0,Pe,Re,Ye,xe);v(b)&&R(se),Ce.__version=Me.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function Ze(U,b,K){if(b.image.length!==6)return;const se=le(U,b),he=b.source;n.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+K);const Me=r.get(he);if(he.version!==Me.__version||se===!0){n.activeTexture(s.TEXTURE0+K);const Ce=Mt.getPrimaries(Mt.workingColorSpace),fe=b.colorSpace===Nr?null:Mt.getPrimaries(b.colorSpace),xe=b.colorSpace===Nr||Ce===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;n.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=b.isCompressedTexture||b.image[0].isCompressedTexture,Ye=b.image[0]&&b.image[0].isDataTexture,Pe=[];for(let ve=0;ve<6;ve++)!Re&&!Ye?Pe[ve]=_(b.image[ve],!0,o.maxCubemapSize):Pe[ve]=Ye?b.image[ve].image:b.image[ve],Pe[ve]=yt(b,Pe[ve]);const Ae=Pe[0],Je=c.convert(b.format,b.colorSpace),tt=c.convert(b.type),rt=T(b.internalFormat,Je,tt,b.normalized,b.colorSpace),H=b.isVideoTexture!==!0,Te=Me.__version===void 0||se===!0,me=he.dataReady;let Ne=P(b,Ae);ze(s.TEXTURE_CUBE_MAP,b);let De;if(Re){H&&Te&&n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,rt,Ae.width,Ae.height);for(let ve=0;ve<6;ve++){De=Pe[ve].mipmaps;for(let We=0;We<De.length;We++){const je=De[We];b.format!==Mi?Je!==null?H?me&&n.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,je.width,je.height,Je,je.data):n.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,rt,je.width,je.height,0,je.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,je.width,je.height,Je,tt,je.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,rt,je.width,je.height,0,Je,tt,je.data)}}}else{if(De=b.mipmaps,H&&Te){De.length>0&&Ne++;const ve=st(Pe[0]);n.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,rt,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Ye){H?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Pe[ve].width,Pe[ve].height,Je,tt,Pe[ve].data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Pe[ve].width,Pe[ve].height,0,Je,tt,Pe[ve].data);for(let We=0;We<De.length;We++){const Ut=De[We].image[ve].image;H?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Ut.width,Ut.height,Je,tt,Ut.data):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,rt,Ut.width,Ut.height,0,Je,tt,Ut.data)}}else{H?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Je,tt,Pe[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,rt,Je,tt,Pe[ve]);for(let We=0;We<De.length;We++){const je=De[We];H?me&&n.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Je,tt,je.image[ve]):n.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,rt,Je,tt,je.image[ve])}}}v(b)&&R(s.TEXTURE_CUBE_MAP),Me.__version=he.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function et(U,b,K,se,he,Me){const Ce=c.convert(K.format,K.colorSpace),fe=c.convert(K.type),xe=T(K.internalFormat,Ce,fe,K.normalized,K.colorSpace),Re=r.get(b),Ye=r.get(K);if(Ye.__renderTarget=b,!Re.__hasExternalTextures){const Pe=Math.max(1,b.width>>Me),Ae=Math.max(1,b.height>>Me);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?n.texImage3D(he,Me,xe,Pe,Ae,b.depth,0,Ce,fe,null):n.texImage2D(he,Me,xe,Pe,Ae,0,Ce,fe,null)}n.bindFramebuffer(s.FRAMEBUFFER,U),Ot(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,he,Ye.__webglTexture,0,Ct(b)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,se,he,Ye.__webglTexture,Me),n.bindFramebuffer(s.FRAMEBUFFER,null)}function kt(U,b,K){if(s.bindRenderbuffer(s.RENDERBUFFER,U),b.depthBuffer){const se=b.depthTexture,he=se&&se.isDepthTexture?se.type:null,Me=D(b.stencilBuffer,he),Ce=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ot(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(b),Me,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(b),Me,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Me,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,U)}else{const se=b.textures;for(let he=0;he<se.length;he++){const Me=se[he],Ce=c.convert(Me.format,Me.colorSpace),fe=c.convert(Me.type),xe=T(Me.internalFormat,Ce,fe,Me.normalized,Me.colorSpace);Ot(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ct(b),xe,b.width,b.height):K?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ct(b),xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(U,b,K){const se=b.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(s.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(b.depthTexture);if(he.__renderTarget=b,(!he.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),se){if(he.__webglInit===void 0&&(he.__webglInit=!0,b.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),n.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ze(s.TEXTURE_CUBE_MAP,b.depthTexture);const Re=c.convert(b.depthTexture.format),Ye=c.convert(b.depthTexture.type);let Pe;b.depthTexture.format===ir?Pe=s.DEPTH_COMPONENT24:b.depthTexture.format===as&&(Pe=s.DEPTH24_STENCIL8);for(let Ae=0;Ae<6;Ae++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,Pe,b.width,b.height,0,Re,Ye,null)}}else X(b.depthTexture,0);const Me=he.__webglTexture,Ce=Ct(b),fe=se?s.TEXTURE_CUBE_MAP_POSITIVE_X+K:s.TEXTURE_2D,xe=b.depthTexture.format===as?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===ir)Ot(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,fe,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,fe,Me,0);else if(b.depthTexture.format===as)Ot(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,fe,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,fe,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function St(U){const b=r.get(U),K=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){const se=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),se){const he=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,se.removeEventListener("dispose",he)};se.addEventListener("dispose",he),b.__depthDisposeCallback=he}b.__boundDepthTexture=se}if(U.depthTexture&&!b.__autoAllocateDepthBuffer)if(K)for(let se=0;se<6;se++)lt(b.__webglFramebuffer[se],U,se);else{const se=U.texture.mipmaps;se&&se.length>0?lt(b.__webglFramebuffer[0],U,0):lt(b.__webglFramebuffer,U,0)}else if(K){b.__webglDepthbuffer=[];for(let se=0;se<6;se++)if(n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[se]),b.__webglDepthbuffer[se]===void 0)b.__webglDepthbuffer[se]=s.createRenderbuffer(),kt(b.__webglDepthbuffer[se],U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer[se];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}else{const se=U.texture.mipmaps;if(se&&se.length>0?n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):n.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),kt(b.__webglDepthbuffer,U,!1);else{const he=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}n.bindFramebuffer(s.FRAMEBUFFER,null)}function mt(U,b,K){const se=r.get(U);b!==void 0&&et(se.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),K!==void 0&&St(U)}function ft(U){const b=U.texture,K=r.get(U),se=r.get(b);U.addEventListener("dispose",w);const he=U.textures,Me=U.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(se.__webglTexture===void 0&&(se.__webglTexture=s.createTexture()),se.__version=b.version,d.memory.textures++),Me){K.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer[fe]=[];for(let xe=0;xe<b.mipmaps.length;xe++)K.__webglFramebuffer[fe][xe]=s.createFramebuffer()}else K.__webglFramebuffer[fe]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){K.__webglFramebuffer=[];for(let fe=0;fe<b.mipmaps.length;fe++)K.__webglFramebuffer[fe]=s.createFramebuffer()}else K.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let fe=0,xe=he.length;fe<xe;fe++){const Re=r.get(he[fe]);Re.__webglTexture===void 0&&(Re.__webglTexture=s.createTexture(),d.memory.textures++)}if(U.samples>0&&Ot(U)===!1){K.__webglMultisampledFramebuffer=s.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(s.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let fe=0;fe<he.length;fe++){const xe=he[fe];K.__webglColorRenderbuffer[fe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,K.__webglColorRenderbuffer[fe]);const Re=c.convert(xe.format,xe.colorSpace),Ye=c.convert(xe.type),Pe=T(xe.internalFormat,Re,Ye,xe.normalized,xe.colorSpace,U.isXRRenderTarget===!0),Ae=Ct(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ae,Pe,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,K.__webglColorRenderbuffer[fe])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=s.createRenderbuffer(),kt(K.__webglDepthRenderbuffer,U,!0)),n.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){n.bindTexture(s.TEXTURE_CUBE_MAP,se.__webglTexture),ze(s.TEXTURE_CUBE_MAP,b);for(let fe=0;fe<6;fe++)if(b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)et(K.__webglFramebuffer[fe][xe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,xe);else et(K.__webglFramebuffer[fe],U,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);v(b)&&R(s.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let fe=0,xe=he.length;fe<xe;fe++){const Re=he[fe],Ye=r.get(Re);let Pe=s.TEXTURE_2D;(U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Pe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(Pe,Ye.__webglTexture),ze(Pe,Re),et(K.__webglFramebuffer,U,Re,s.COLOR_ATTACHMENT0+fe,Pe,0),v(Re)&&R(Pe)}n.unbindTexture()}else{let fe=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(fe=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),n.bindTexture(fe,se.__webglTexture),ze(fe,b),b.mipmaps&&b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)et(K.__webglFramebuffer[xe],U,b,s.COLOR_ATTACHMENT0,fe,xe);else et(K.__webglFramebuffer,U,b,s.COLOR_ATTACHMENT0,fe,0);v(b)&&R(fe),n.unbindTexture()}U.depthBuffer&&St(U)}function Ft(U){const b=U.textures;for(let K=0,se=b.length;K<se;K++){const he=b[K];if(v(he)){const Me=L(U),Ce=r.get(he).__webglTexture;n.bindTexture(Me,Ce),R(Me),n.unbindTexture()}}}const jt=[],Ht=[];function Bt(U){if(U.samples>0){if(Ot(U)===!1){const b=U.textures,K=U.width,se=U.height;let he=s.COLOR_BUFFER_BIT;const Me=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(U),fe=b.length>1;if(fe)for(let Re=0;Re<b.length;Re++)n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,null),n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,null,0);n.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=U.texture.mipmaps;xe&&xe.length>0?n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Re=0;Re<b.length;Re++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),fe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=r.get(b[Re]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ye,0)}s.blitFramebuffer(0,0,K,se,0,0,K,se,he,s.NEAREST),p===!0&&(jt.length=0,Ht.length=0,jt.push(s.COLOR_ATTACHMENT0+Re),U.depthBuffer&&U.resolveDepthBuffer===!1&&(jt.push(Me),Ht.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ht)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,jt))}if(n.bindFramebuffer(s.READ_FRAMEBUFFER,null),n.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),fe)for(let Re=0;Re<b.length;Re++){n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Re]);const Ye=r.get(b[Re]).__webglTexture;n.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Re,s.TEXTURE_2D,Ye,0)}n.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&p){const b=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ct(U){return Math.min(o.maxSamples,U.samples)}function Ot(U){const b=r.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function j(U){const b=d.render.frame;y.get(U)!==b&&(y.set(U,b),U.update())}function yt(U,b){const K=U.colorSpace,se=U.format,he=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==$l&&K!==Nr&&(Mt.getTransfer(K)===Dt?(se!==Mi||he!==Qn)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",K)),b}function st(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(x.width=U.naturalWidth||U.width,x.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(x.width=U.displayWidth,x.height=U.displayHeight):(x.width=U.width,x.height=U.height),x}this.allocateTextureUnit=ce,this.resetTextureUnits=Q,this.getTextureUnits=ae,this.setTextureUnits=G,this.setTexture2D=X,this.setTexture2DArray=re,this.setTexture3D=oe,this.setTextureCube=k,this.rebindTextures=mt,this.setupRenderTarget=ft,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=et,this.useMultisampledRTT=Ot,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function xb(s,e){function n(r,o=Nr){let c;const d=Mt.getTransfer(o);if(r===Qn)return s.UNSIGNED_BYTE;if(r===wh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Th)return s.UNSIGNED_SHORT_5_5_5_1;if(r===U0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===F0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===L0)return s.BYTE;if(r===D0)return s.SHORT;if(r===io)return s.UNSIGNED_SHORT;if(r===bh)return s.INT;if(r===Fi)return s.UNSIGNED_INT;if(r===Ii)return s.FLOAT;if(r===nr)return s.HALF_FLOAT;if(r===O0)return s.ALPHA;if(r===k0)return s.RGB;if(r===Mi)return s.RGBA;if(r===ir)return s.DEPTH_COMPONENT;if(r===as)return s.DEPTH_STENCIL;if(r===B0)return s.RED;if(r===Ah)return s.RED_INTEGER;if(r===ls)return s.RG;if(r===Ch)return s.RG_INTEGER;if(r===Nh)return s.RGBA_INTEGER;if(r===Bl||r===zl||r===Vl||r===jl)if(d===Dt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Bl)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===jl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Bl)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===zl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vl)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===jl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Vd||r===jd||r===Hd||r===Gd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Vd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===jd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===Xd||r===qd||r===Yd||r===$d||r===ql||r===Kd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Wd||r===Xd)return d===Dt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===qd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return c.COMPRESSED_R11_EAC;if(r===$d)return c.COMPRESSED_SIGNED_R11_EAC;if(r===ql)return c.COMPRESSED_RG11_EAC;if(r===Kd)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Zd||r===Qd||r===Jd||r===eh||r===th||r===nh||r===ih||r===rh||r===sh||r===ah||r===oh||r===lh||r===ch||r===uh)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===Zd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Qd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===eh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===th)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===nh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ih)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ah)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===oh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ch)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uh)return d===Dt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dh||r===hh||r===fh)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===dh)return d===Dt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===fh)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===ph||r===mh||r===Yl||r===xh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===ph)return c.COMPRESSED_RED_RGTC1_EXT;if(r===mh)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Yl)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===xh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ro?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:n}}const gb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,vb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class _b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const r=new $0(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,r=new Oi({vertexShader:gb,fragmentShader:vb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Hn(new lc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class yb extends cs{constructor(e,n){super();const r=this;let o=null,c=1,d=null,f="local-floor",p=1,x=null,y=null,S=null,g=null,M=null,E=null;const C=typeof XRWebGLBinding<"u",_=new _b,v={},R=n.getContextAttributes();let L=null,T=null;const D=[],P=[],F=new _t;let w=null;const I=new Zn;I.viewport=new Qt;const B=new Zn;B.viewport=new Qt;const z=[I,B],Y=new Ny;let Q=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let ge=D[le];return ge===void 0&&(ge=new id,D[le]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(le){let ge=D[le];return ge===void 0&&(ge=new id,D[le]=ge),ge.getGripSpace()},this.getHand=function(le){let ge=D[le];return ge===void 0&&(ge=new id,D[le]=ge),ge.getHandSpace()};function G(le){const ge=P.indexOf(le.inputSource);if(ge===-1)return;const pe=D[ge];pe!==void 0&&(pe.update(le.inputSource,le.frame,x||d),pe.dispatchEvent({type:le.type,data:le.inputSource}))}function ce(){o.removeEventListener("select",G),o.removeEventListener("selectstart",G),o.removeEventListener("selectend",G),o.removeEventListener("squeeze",G),o.removeEventListener("squeezestart",G),o.removeEventListener("squeezeend",G),o.removeEventListener("end",ce),o.removeEventListener("inputsourceschange",$);for(let le=0;le<D.length;le++){const ge=P[le];ge!==null&&(P[le]=null,D[le].disconnect(ge))}Q=null,ae=null,_.reset();for(const le in v)delete v[le];e.setRenderTarget(L),M=null,g=null,S=null,o=null,T=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){c=le,r.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return x||d},this.setReferenceSpace=function(le){x=le},this.getBaseLayer=function(){return g!==null?g:M},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,n)),S},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(L=e.getRenderTarget(),o.addEventListener("select",G),o.addEventListener("selectstart",G),o.addEventListener("selectend",G),o.addEventListener("squeeze",G),o.addEventListener("squeezestart",G),o.addEventListener("squeezeend",G),o.addEventListener("end",ce),o.addEventListener("inputsourceschange",$),R.xrCompatible!==!0&&await n.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let pe=null,Fe=null,Ze=null;R.depth&&(Ze=R.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=R.stencil?as:ir,Fe=R.stencil?ro:Fi);const et={colorFormat:n.RGBA8,depthFormat:Ze,scaleFactor:c};S=this.getBinding(),g=S.createProjectionLayer(et),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),T=new Ui(g.textureWidth,g.textureHeight,{format:Mi,type:Qn,depthTexture:new sa(g.textureWidth,g.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const pe={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,pe),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),T=new Ui(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Qn,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}T.isXRRenderTarget=!0,this.setFoveation(p),x=null,d=await o.requestReferenceSpace(f),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(le){for(let ge=0;ge<le.removed.length;ge++){const pe=le.removed[ge],Fe=P.indexOf(pe);Fe>=0&&(P[Fe]=null,D[Fe].disconnect(pe))}for(let ge=0;ge<le.added.length;ge++){const pe=le.added[ge];let Fe=P.indexOf(pe);if(Fe===-1){for(let et=0;et<D.length;et++)if(et>=P.length){P.push(pe),Fe=et;break}else if(P[et]===null){P[et]=pe,Fe=et;break}if(Fe===-1)break}const Ze=D[Fe];Ze&&Ze.connect(pe)}}const X=new Z,re=new Z;function oe(le,ge,pe){X.setFromMatrixPosition(ge.matrixWorld),re.setFromMatrixPosition(pe.matrixWorld);const Fe=X.distanceTo(re),Ze=ge.projectionMatrix.elements,et=pe.projectionMatrix.elements,kt=Ze[14]/(Ze[10]-1),lt=Ze[14]/(Ze[10]+1),St=(Ze[9]+1)/Ze[5],mt=(Ze[9]-1)/Ze[5],ft=(Ze[8]-1)/Ze[0],Ft=(et[8]+1)/et[0],jt=kt*ft,Ht=kt*Ft,Bt=Fe/(-ft+Ft),Ct=Bt*-ft;if(ge.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Ct),le.translateZ(Bt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Ze[10]===-1)le.projectionMatrix.copy(ge.projectionMatrix),le.projectionMatrixInverse.copy(ge.projectionMatrixInverse);else{const Ot=kt+Bt,j=lt+Bt,yt=jt-Ct,st=Ht+(Fe-Ct),U=St*lt/j*Ot,b=mt*lt/j*Ot;le.projectionMatrix.makePerspective(yt,st,U,b,Ot,j),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function k(le,ge){ge===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(ge.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let ge=le.near,pe=le.far;_.texture!==null&&(_.depthNear>0&&(ge=_.depthNear),_.depthFar>0&&(pe=_.depthFar)),Y.near=B.near=I.near=ge,Y.far=B.far=I.far=pe,(Q!==Y.near||ae!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Q=Y.near,ae=Y.far),Y.layers.mask=le.layers.mask|6,I.layers.mask=Y.layers.mask&-5,B.layers.mask=Y.layers.mask&-3;const Fe=le.parent,Ze=Y.cameras;k(Y,Fe);for(let et=0;et<Ze.length;et++)k(Ze[et],Fe);Ze.length===2?oe(Y,I,B):Y.projectionMatrix.copy(I.projectionMatrix),J(le,Y,Fe)};function J(le,ge,pe){pe===null?le.matrix.copy(ge.matrixWorld):(le.matrix.copy(pe.matrixWorld),le.matrix.invert(),le.matrix.multiply(ge.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(ge.projectionMatrix),le.projectionMatrixInverse.copy(ge.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=vh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(g===null&&M===null))return p},this.setFoveation=function(le){p=le,g!==null&&(g.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(Y)},this.getCameraTexture=function(le){return v[le]};let Ie=null;function Ge(le,ge){if(y=ge.getViewerPose(x||d),E=ge,y!==null){const pe=y.views;M!==null&&(e.setRenderTargetFramebuffer(T,M.framebuffer),e.setRenderTarget(T));let Fe=!1;pe.length!==Y.cameras.length&&(Y.cameras.length=0,Fe=!0);for(let lt=0;lt<pe.length;lt++){const St=pe[lt];let mt=null;if(M!==null)mt=M.getViewport(St);else{const Ft=S.getViewSubImage(g,St);mt=Ft.viewport,lt===0&&(e.setRenderTargetTextures(T,Ft.colorTexture,Ft.depthStencilTexture),e.setRenderTarget(T))}let ft=z[lt];ft===void 0&&(ft=new Zn,ft.layers.enable(lt),ft.viewport=new Qt,z[lt]=ft),ft.matrix.fromArray(St.transform.matrix),ft.matrix.decompose(ft.position,ft.quaternion,ft.scale),ft.projectionMatrix.fromArray(St.projectionMatrix),ft.projectionMatrixInverse.copy(ft.projectionMatrix).invert(),ft.viewport.set(mt.x,mt.y,mt.width,mt.height),lt===0&&(Y.matrix.copy(ft.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Fe===!0&&Y.cameras.push(ft)}const Ze=o.enabledFeatures;if(Ze&&Ze.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const lt=S.getDepthInformation(pe[0]);lt&&lt.isValid&&lt.texture&&_.init(lt,o.renderState)}if(Ze&&Ze.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let lt=0;lt<pe.length;lt++){const St=pe[lt].camera;if(St){let mt=v[St];mt||(mt=new $0,v[St]=mt);const ft=S.getCameraImage(St);mt.sourceTexture=ft}}}}for(let pe=0;pe<D.length;pe++){const Fe=P[pe],Ze=D[pe];Fe!==null&&Ze!==void 0&&Ze.update(Fe,ge,x||d)}Ie&&Ie(le,ge),ge.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ge}),E=null}const ze=new ex;ze.setAnimationLoop(Ge),this.setAnimationLoop=function(le){Ie=le},this.dispose=function(){}}}const Sb=new Jt,ox=new dt;ox.set(-1,0,0,0,1,0,0,0,1);function Mb(s,e){function n(_,v){_.matrixAutoUpdate===!0&&_.updateMatrix(),v.value.copy(_.matrix)}function r(_,v){v.color.getRGB(_.fogColor.value,K0(s)),v.isFog?(_.fogNear.value=v.near,_.fogFar.value=v.far):v.isFogExp2&&(_.fogDensity.value=v.density)}function o(_,v,R,L,T){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?c(_,v):v.isMeshLambertMaterial?(c(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(c(_,v),S(_,v)):v.isMeshPhongMaterial?(c(_,v),y(_,v),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(c(_,v),g(_,v),v.isMeshPhysicalMaterial&&M(_,v,T)):v.isMeshMatcapMaterial?(c(_,v),E(_,v)):v.isMeshDepthMaterial?c(_,v):v.isMeshDistanceMaterial?(c(_,v),C(_,v)):v.isMeshNormalMaterial?c(_,v):v.isLineBasicMaterial?(d(_,v),v.isLineDashedMaterial&&f(_,v)):v.isPointsMaterial?p(_,v,R,L):v.isSpriteMaterial?x(_,v):v.isShadowMaterial?(_.color.value.copy(v.color),_.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(_,v){_.opacity.value=v.opacity,v.color&&_.diffuse.value.copy(v.color),v.emissive&&_.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.bumpMap&&(_.bumpMap.value=v.bumpMap,n(v.bumpMap,_.bumpMapTransform),_.bumpScale.value=v.bumpScale,v.side===Gn&&(_.bumpScale.value*=-1)),v.normalMap&&(_.normalMap.value=v.normalMap,n(v.normalMap,_.normalMapTransform),_.normalScale.value.copy(v.normalScale),v.side===Gn&&_.normalScale.value.negate()),v.displacementMap&&(_.displacementMap.value=v.displacementMap,n(v.displacementMap,_.displacementMapTransform),_.displacementScale.value=v.displacementScale,_.displacementBias.value=v.displacementBias),v.emissiveMap&&(_.emissiveMap.value=v.emissiveMap,n(v.emissiveMap,_.emissiveMapTransform)),v.specularMap&&(_.specularMap.value=v.specularMap,n(v.specularMap,_.specularMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest);const R=e.get(v),L=R.envMap,T=R.envMapRotation;L&&(_.envMap.value=L,_.envMapRotation.value.setFromMatrix4(Sb.makeRotationFromEuler(T)).transpose(),L.isCubeTexture&&L.isRenderTargetTexture===!1&&_.envMapRotation.value.premultiply(ox),_.reflectivity.value=v.reflectivity,_.ior.value=v.ior,_.refractionRatio.value=v.refractionRatio),v.lightMap&&(_.lightMap.value=v.lightMap,_.lightMapIntensity.value=v.lightMapIntensity,n(v.lightMap,_.lightMapTransform)),v.aoMap&&(_.aoMap.value=v.aoMap,_.aoMapIntensity.value=v.aoMapIntensity,n(v.aoMap,_.aoMapTransform))}function d(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform))}function f(_,v){_.dashSize.value=v.dashSize,_.totalSize.value=v.dashSize+v.gapSize,_.scale.value=v.scale}function p(_,v,R,L){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.size.value=v.size*R,_.scale.value=L*.5,v.map&&(_.map.value=v.map,n(v.map,_.uvTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function x(_,v){_.diffuse.value.copy(v.color),_.opacity.value=v.opacity,_.rotation.value=v.rotation,v.map&&(_.map.value=v.map,n(v.map,_.mapTransform)),v.alphaMap&&(_.alphaMap.value=v.alphaMap,n(v.alphaMap,_.alphaMapTransform)),v.alphaTest>0&&(_.alphaTest.value=v.alphaTest)}function y(_,v){_.specular.value.copy(v.specular),_.shininess.value=Math.max(v.shininess,1e-4)}function S(_,v){v.gradientMap&&(_.gradientMap.value=v.gradientMap)}function g(_,v){_.metalness.value=v.metalness,v.metalnessMap&&(_.metalnessMap.value=v.metalnessMap,n(v.metalnessMap,_.metalnessMapTransform)),_.roughness.value=v.roughness,v.roughnessMap&&(_.roughnessMap.value=v.roughnessMap,n(v.roughnessMap,_.roughnessMapTransform)),v.envMap&&(_.envMapIntensity.value=v.envMapIntensity)}function M(_,v,R){_.ior.value=v.ior,v.sheen>0&&(_.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),_.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(_.sheenColorMap.value=v.sheenColorMap,n(v.sheenColorMap,_.sheenColorMapTransform)),v.sheenRoughnessMap&&(_.sheenRoughnessMap.value=v.sheenRoughnessMap,n(v.sheenRoughnessMap,_.sheenRoughnessMapTransform))),v.clearcoat>0&&(_.clearcoat.value=v.clearcoat,_.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(_.clearcoatMap.value=v.clearcoatMap,n(v.clearcoatMap,_.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,n(v.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(_.clearcoatNormalMap.value=v.clearcoatNormalMap,n(v.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Gn&&_.clearcoatNormalScale.value.negate())),v.dispersion>0&&(_.dispersion.value=v.dispersion),v.iridescence>0&&(_.iridescence.value=v.iridescence,_.iridescenceIOR.value=v.iridescenceIOR,_.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(_.iridescenceMap.value=v.iridescenceMap,n(v.iridescenceMap,_.iridescenceMapTransform)),v.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=v.iridescenceThicknessMap,n(v.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),v.transmission>0&&(_.transmission.value=v.transmission,_.transmissionSamplerMap.value=R.texture,_.transmissionSamplerSize.value.set(R.width,R.height),v.transmissionMap&&(_.transmissionMap.value=v.transmissionMap,n(v.transmissionMap,_.transmissionMapTransform)),_.thickness.value=v.thickness,v.thicknessMap&&(_.thicknessMap.value=v.thicknessMap,n(v.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=v.attenuationDistance,_.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(_.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(_.anisotropyMap.value=v.anisotropyMap,n(v.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=v.specularIntensity,_.specularColor.value.copy(v.specularColor),v.specularColorMap&&(_.specularColorMap.value=v.specularColorMap,n(v.specularColorMap,_.specularColorMapTransform)),v.specularIntensityMap&&(_.specularIntensityMap.value=v.specularIntensityMap,n(v.specularIntensityMap,_.specularIntensityMapTransform))}function E(_,v){v.matcap&&(_.matcap.value=v.matcap)}function C(_,v){const R=e.get(v).light;_.referencePosition.value.setFromMatrixPosition(R.matrixWorld),_.nearDistance.value=R.shadow.camera.near,_.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function Eb(s,e,n,r){let o={},c={},d=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(T,D){const P=D.program;r.uniformBlockBinding(T,P)}function x(T,D){let P=o[T.id];P===void 0&&(_(T),P=y(T),o[T.id]=P,T.addEventListener("dispose",R));const F=D.program;r.updateUBOMapping(T,F);const w=e.render.frame;c[T.id]!==w&&(g(T),c[T.id]=w)}function y(T){const D=S();T.__bindingPointIndex=D;const P=s.createBuffer(),F=T.__size,w=T.usage;return s.bindBuffer(s.UNIFORM_BUFFER,P),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,D,P),P}function S(){for(let T=0;T<f;T++)if(d.indexOf(T)===-1)return d.push(T),T;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const D=o[T.id],P=T.uniforms,F=T.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let w=0,I=P.length;w<I;w++){const B=P[w];if(Array.isArray(B))for(let z=0,Y=B.length;z<Y;z++)M(B[z],w,z,F);else M(B,w,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function M(T,D,P,F){if(C(T,D,P,F)===!0){const w=T.__offset,I=T.value;if(Array.isArray(I)){let B=0;for(let z=0;z<I.length;z++){const Y=I[z],Q=v(Y);E(Y,T.__data,B),typeof Y!="number"&&typeof Y!="boolean"&&!Y.isMatrix3&&!ArrayBuffer.isView(Y)&&(B+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(I,T.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,T.__data)}}function E(T,D,P){typeof T=="number"||typeof T=="boolean"?D[0]=T:T.isMatrix3?(D[0]=T.elements[0],D[1]=T.elements[1],D[2]=T.elements[2],D[3]=0,D[4]=T.elements[3],D[5]=T.elements[4],D[6]=T.elements[5],D[7]=0,D[8]=T.elements[6],D[9]=T.elements[7],D[10]=T.elements[8],D[11]=0):ArrayBuffer.isView(T)?D.set(new T.constructor(T.buffer,T.byteOffset,D.length)):T.toArray(D,P)}function C(T,D,P,F){const w=T.value,I=D+"_"+P;if(F[I]===void 0)return typeof w=="number"||typeof w=="boolean"?F[I]=w:ArrayBuffer.isView(w)?F[I]=w.slice():F[I]=w.clone(),!0;{const B=F[I];if(typeof w=="number"||typeof w=="boolean"){if(B!==w)return F[I]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(B.equals(w)===!1)return B.copy(w),!0}}return!1}function _(T){const D=T.uniforms;let P=0;const F=16;for(let I=0,B=D.length;I<B;I++){const z=Array.isArray(D[I])?D[I]:[D[I]];for(let Y=0,Q=z.length;Y<Q;Y++){const ae=z[Y],G=Array.isArray(ae.value)?ae.value:[ae.value];for(let ce=0,$=G.length;ce<$;ce++){const X=G[ce],re=v(X),oe=P%F,k=oe%re.boundary,J=oe+k;P+=k,J!==0&&F-J<re.storage&&(P+=F-J),ae.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=P,P+=re.storage}}}const w=P%F;return w>0&&(P+=F-w),T.__size=P,T.__cache={},this}function v(T){const D={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(D.boundary=4,D.storage=4):T.isVector2?(D.boundary=8,D.storage=8):T.isVector3||T.isColor?(D.boundary=16,D.storage=12):T.isVector4?(D.boundary=16,D.storage=16):T.isMatrix3?(D.boundary=48,D.storage=48):T.isMatrix4?(D.boundary=64,D.storage=64):T.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(T)?(D.boundary=16,D.storage=T.byteLength):at("WebGLRenderer: Unsupported uniform value type.",T),D}function R(T){const D=T.target;D.removeEventListener("dispose",R);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),s.deleteBuffer(o[D.id]),delete o[D.id],delete c[D.id]}function L(){for(const T in o)s.deleteBuffer(o[T]);d=[],o={},c={}}return{bind:p,update:x,dispose:L}}const bb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Ni=null;function wb(){return Ni===null&&(Ni=new hy(bb,16,16,ls,nr),Ni.name="DFG_LUT",Ni.minFilter=Tn,Ni.magFilter=Tn,Ni.wrapS=Ji,Ni.wrapT=Ji,Ni.generateMipmaps=!1,Ni.needsUpdate=!0),Ni}class Tb{constructor(e={}){const{canvas:n=H_(),context:r=null,depth:o=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:x=!1,powerPreference:y="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:M=Qn}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=d;const C=M,_=new Set([Nh,Ch,Ah]),v=new Set([Qn,Fi,io,ro,wh,Th]),R=new Uint32Array(4),L=new Int32Array(4),T=new Z;let D=null,P=null;const F=[],w=[];let I=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const B=this;let z=!1,Y=null,Q=null,ae=null,G=null;this._outputColorSpace=oi;let ce=0,$=0,X=null,re=-1,oe=null;const k=new Qt,J=new Qt;let Ie=null;const Ge=new vt(0);let ze=0,le=n.width,ge=n.height,pe=1,Fe=null,Ze=null;const et=new Qt(0,0,le,ge),kt=new Qt(0,0,le,ge);let lt=!1;const St=new Lh;let mt=!1,ft=!1;const Ft=new Jt,jt=new Z,Ht=new Qt,Bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function Ot(){return X===null?pe:1}let j=r;function yt(N,q){return n.getContext(N,q)}try{const N={alpha:!0,depth:o,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:x,powerPreference:y,failIfMajorPerformanceCaveat:S};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Eh}`),n.addEventListener("webglcontextlost",Ut,!1),n.addEventListener("webglcontextrestored",Rt,!1),n.addEventListener("webglcontextcreationerror",_n,!1),j===null){const q="webgl2";if(j=yt(q,N),j===null)throw yt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(N){throw At("WebGLRenderer: "+N.message),N}let st,U,b,K,se,he,Me,Ce,fe,xe,Re,Ye,Pe,Ae,Je,tt,rt,H,Te,me,Ne,De,ve;function We(){st=new wM(j),st.init(),Ne=new xb(j,st),U=new gM(j,st,e,Ne),b=new pb(j,st),U.reversedDepthBuffer&&g&&b.buffers.depth.setReversed(!0),Q=j.createFramebuffer(),ae=j.createFramebuffer(),G=j.createFramebuffer(),K=new CM(j),se=new eb,he=new mb(j,st,b,se,U,Ne,K),Me=new bM(B),Ce=new Iy(j),De=new mM(j,Ce),fe=new TM(j,Ce,K,De),xe=new RM(j,fe,Ce,De,K),H=new NM(j,U,he),Je=new vM(se),Re=new JE(B,Me,st,U,De,Je),Ye=new Mb(B,se),Pe=new nb,Ae=new lb(st),rt=new pM(B,Me,b,xe,E,p),tt=new fb(B,xe,U),ve=new Eb(j,K,U,b),Te=new xM(j,st,K),me=new AM(j,st,K),K.programs=Re.programs,B.capabilities=U,B.extensions=st,B.properties=se,B.renderLists=Pe,B.shadowMap=tt,B.state=b,B.info=K}We(),C!==Qn&&(I=new IM(C,n.width,n.height,f,o,c));const je=new yb(B,j);this.xr=je,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const N=st.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=st.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(N){N!==void 0&&(pe=N,this.setSize(le,ge,!1))},this.getSize=function(N){return N.set(le,ge)},this.setSize=function(N,q,ue=!0){if(je.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}le=N,ge=q,n.width=Math.floor(N*pe),n.height=Math.floor(q*pe),ue===!0&&(n.style.width=N+"px",n.style.height=q+"px"),I!==null&&I.setSize(n.width,n.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(le*pe,ge*pe).floor()},this.setDrawingBufferSize=function(N,q,ue){le=N,ge=q,pe=ue,n.width=Math.floor(N*ue),n.height=Math.floor(q*ue),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(C===Qn){At("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){at("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(et)},this.setViewport=function(N,q,ue,ne){N.isVector4?et.set(N.x,N.y,N.z,N.w):et.set(N,q,ue,ne),b.viewport(k.copy(et).multiplyScalar(pe).round())},this.getScissor=function(N){return N.copy(kt)},this.setScissor=function(N,q,ue,ne){N.isVector4?kt.set(N.x,N.y,N.z,N.w):kt.set(N,q,ue,ne),b.scissor(J.copy(kt).multiplyScalar(pe).round())},this.getScissorTest=function(){return lt},this.setScissorTest=function(N){b.setScissorTest(lt=N)},this.setOpaqueSort=function(N){Fe=N},this.setTransparentSort=function(N){Ze=N},this.getClearColor=function(N){return N.copy(rt.getClearColor())},this.setClearColor=function(){rt.setClearColor(...arguments)},this.getClearAlpha=function(){return rt.getClearAlpha()},this.setClearAlpha=function(){rt.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,ue=!0){let ne=0;if(N){let te=!1;if(X!==null){const we=X.texture.format;te=_.has(we)}if(te){const we=X.texture.type,Be=v.has(we),be=rt.getClearColor(),Xe=rt.getClearAlpha(),Qe=be.r,ct=be.g,ut=be.b;Be?(R[0]=Qe,R[1]=ct,R[2]=ut,R[3]=Xe,j.clearBufferuiv(j.COLOR,0,R)):(L[0]=Qe,L[1]=ct,L[2]=ut,L[3]=Xe,j.clearBufferiv(j.COLOR,0,L))}else ne|=j.COLOR_BUFFER_BIT}q&&(ne|=j.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(ne|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&j.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),Y=N},this.dispose=function(){n.removeEventListener("webglcontextlost",Ut,!1),n.removeEventListener("webglcontextrestored",Rt,!1),n.removeEventListener("webglcontextcreationerror",_n,!1),rt.dispose(),Pe.dispose(),Ae.dispose(),se.dispose(),Me.dispose(),xe.dispose(),De.dispose(),ve.dispose(),Re.dispose(),je.dispose(),je.removeEventListener("sessionstart",co),je.removeEventListener("sessionend",uo),An.stop()};function Ut(N){N.preventDefault(),ym("WebGLRenderer: Context Lost."),z=!0}function Rt(){ym("WebGLRenderer: Context Restored."),z=!1;const N=K.autoReset,q=tt.enabled,ue=tt.autoUpdate,ne=tt.needsUpdate,te=tt.type;We(),K.autoReset=N,tt.enabled=q,tt.autoUpdate=ue,tt.needsUpdate=ne,tt.type=te}function _n(N){At("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Jn(N){const q=N.target;q.removeEventListener("dispose",Jn),Lr(q)}function Lr(N){us(N),se.remove(N)}function us(N){const q=se.get(N).programs;q!==void 0&&(q.forEach(function(ue){Re.releaseProgram(ue)}),N.isShaderMaterial&&Re.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,ue,ne,te,we){q===null&&(q=Bt);const Be=te.isMesh&&te.matrixWorld.determinantAffine()<0,be=$t(N,q,ue,ne,te);b.setMaterial(ne,Be);let Xe=ue.index,Qe=1;if(ne.wireframe===!0){if(Xe=fe.getWireframeAttribute(ue),Xe===void 0)return;Qe=2}const ct=ue.drawRange,ut=ue.attributes.position;let $e=ct.start*Qe,bt=(ct.start+ct.count)*Qe;we!==null&&($e=Math.max($e,we.start*Qe),bt=Math.min(bt,(we.start+we.count)*Qe)),Xe!==null?($e=Math.max($e,0),bt=Math.min(bt,Xe.count)):ut!=null&&($e=Math.max($e,0),bt=Math.min(bt,ut.count));const zt=bt-$e;if(zt<0||zt===1/0)return;De.setup(te,ne,be,ue,Xe);let qt,It=Te;if(Xe!==null&&(qt=Ce.get(Xe),It=me,It.setIndex(qt)),te.isMesh)ne.wireframe===!0?(b.setLineWidth(ne.wireframeLinewidth*Ot()),It.setMode(j.LINES)):It.setMode(j.TRIANGLES);else if(te.isLine){let rn=ne.linewidth;rn===void 0&&(rn=1),b.setLineWidth(rn*Ot()),te.isLineSegments?It.setMode(j.LINES):te.isLineLoop?It.setMode(j.LINE_LOOP):It.setMode(j.LINE_STRIP)}else te.isPoints?It.setMode(j.POINTS):te.isSprite&&It.setMode(j.TRIANGLES);if(te.isBatchedMesh)if(st.get("WEBGL_multi_draw"))It.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const rn=te._multiDrawStarts,Oe=te._multiDrawCounts,mn=te._multiDrawCount,pt=Xe?Ce.get(Xe).bytesPerElement:1,Dn=se.get(ne).currentProgram.getUniforms();for(let Un=0;Un<mn;Un++)Dn.setValue(j,"_gl_DrawID",Un),It.render(rn[Un]/pt,Oe[Un])}else if(te.isInstancedMesh)It.renderInstances($e,zt,te.count);else if(ue.isInstancedBufferGeometry){const rn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Oe=Math.min(ue.instanceCount,rn);It.renderInstances($e,zt,Oe)}else It.render($e,zt)};function Dr(N,q,ue){N.transparent===!0&&N.side===Pi&&N.forceSinglePass===!1?(N.side=Gn,N.needsUpdate=!0,Or(N,q,ue),N.side=Pr,N.needsUpdate=!0,Or(N,q,ue),N.side=Pi):Or(N,q,ue)}this.compile=function(N,q,ue=null){ue===null&&(ue=N),P=Ae.get(ue),P.init(q),w.push(P),ue.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),N!==ue&&N.traverseVisible(function(te){te.isLight&&te.layers.test(q.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights();const ne=new Set;return N.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const we=te.material;if(we)if(Array.isArray(we))for(let Be=0;Be<we.length;Be++){const be=we[Be];Dr(be,ue,te),ne.add(be)}else Dr(we,ue,te),ne.add(we)}),P=w.pop(),ne},this.compileAsync=function(N,q,ue=null){const ne=this.compile(N,q,ue);return new Promise(te=>{function we(){if(ne.forEach(function(Be){se.get(Be).currentProgram.isReady()&&ne.delete(Be)}),ne.size===0){te(N);return}setTimeout(we,10)}st.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Ur=null;function dc(N){Ur&&Ur(N)}function co(){An.stop()}function uo(){An.start()}const An=new ex;An.setAnimationLoop(dc),typeof self<"u"&&An.setContext(self),this.setAnimationLoop=function(N){Ur=N,je.setAnimationLoop(N),N===null?An.stop():An.start()},je.addEventListener("sessionstart",co),je.addEventListener("sessionend",uo),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;Y!==null&&Y.renderStart(N,q);const ue=je.enabled===!0&&je.isPresenting===!0,ne=I!==null&&(X===null||ue)&&I.begin(B,X);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera(q),q=je.getCamera()),N.isScene===!0&&N.onBeforeRender(B,N,q,X),P=Ae.get(N,w.length),P.init(q),P.state.textureUnits=he.getTextureUnits(),w.push(P),Ft.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),St.setFromProjectionMatrix(Ft,Li,q.reversedDepth),ft=this.localClippingEnabled,mt=Je.init(this.clippingPlanes,ft),D=Pe.get(N,F.length),D.init(),F.push(D),je.enabled===!0&&je.isPresenting===!0){const Be=B.xr.getDepthSensingMesh();Be!==null&&ds(Be,q,-1/0,B.sortObjects)}ds(N,q,0,B.sortObjects),D.finish(),B.sortObjects===!0&&D.sort(Fe,Ze,q.reversedDepth),Ct=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,Ct&&rt.addToRenderList(D,N),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Je.beginShadows();const te=P.state.shadowsArray;if(tt.render(te,N,q),mt===!0&&Je.endShadows(),(ne&&I.hasRenderPass())===!1){const Be=D.opaque,be=D.transmissive;if(P.setupLights(),q.isArrayCamera){const Xe=q.cameras;if(be.length>0)for(let Qe=0,ct=Xe.length;Qe<ct;Qe++){const ut=Xe[Qe];ho(Be,be,N,ut)}Ct&&rt.render(N);for(let Qe=0,ct=Xe.length;Qe<ct;Qe++){const ut=Xe[Qe];ua(D,N,ut,ut.viewport)}}else be.length>0&&ho(Be,be,N,q),Ct&&rt.render(N),ua(D,N,q)}X!==null&&$===0&&(he.updateMultisampleRenderTarget(X),he.updateRenderTargetMipmap(X)),ne&&I.end(B),N.isScene===!0&&N.onAfterRender(B,N,q),De.resetDefaultState(),re=-1,oe=null,w.pop(),w.length>0?(P=w[w.length-1],he.setTextureUnits(P.state.textureUnits),mt===!0&&Je.setGlobalState(B.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?D=F[F.length-1]:D=null,Y!==null&&Y.renderEnd()};function ds(N,q,ue,ne){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)ue=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLightProbeGrid)P.pushLightProbeGrid(N);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){if(!N.frustumCulled||St.intersectsSprite(N)){ne&&Ht.setFromMatrixPosition(N.matrixWorld).applyMatrix4(Ft);const Be=xe.update(N),be=N.material;be.visible&&D.push(N,Be,be,ue,Ht.z,null)}}else if((N.isMesh||N.isLine||N.isPoints)&&(!N.frustumCulled||St.intersectsObject(N))){const Be=xe.update(N),be=N.material;if(ne&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ht.copy(N.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),Ht.copy(Be.boundingSphere.center)),Ht.applyMatrix4(N.matrixWorld).applyMatrix4(Ft)),Array.isArray(be)){const Xe=Be.groups;for(let Qe=0,ct=Xe.length;Qe<ct;Qe++){const ut=Xe[Qe],$e=be[ut.materialIndex];$e&&$e.visible&&D.push(N,Be,$e,ue,Ht.z,ut)}}else be.visible&&D.push(N,Be,be,ue,Ht.z,null)}}const we=N.children;for(let Be=0,be=we.length;Be<be;Be++)ds(we[Be],q,ue,ne)}function ua(N,q,ue,ne){const{opaque:te,transmissive:we,transparent:Be}=N;P.setupLightsView(ue),mt===!0&&Je.setGlobalState(B.clippingPlanes,ue),ne&&b.viewport(k.copy(ne)),te.length>0&&Fr(te,q,ue),we.length>0&&Fr(we,q,ue),Be.length>0&&Fr(Be,q,ue),b.buffers.depth.setTest(!0),b.buffers.depth.setMask(!0),b.buffers.color.setMask(!0),b.setPolygonOffset(!1)}function ho(N,q,ue,ne){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ne.id]===void 0){const $e=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ne.id]=new Ui(1,1,{generateMipmaps:!0,type:$e?nr:Qn,minFilter:ss,samples:Math.max(4,U.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Mt.workingColorSpace})}const we=P.state.transmissionRenderTarget[ne.id],Be=ne.viewport||k;we.setSize(Be.z*B.transmissionResolutionScale,Be.w*B.transmissionResolutionScale);const be=B.getRenderTarget(),Xe=B.getActiveCubeFace(),Qe=B.getActiveMipmapLevel();B.setRenderTarget(we),B.getClearColor(Ge),ze=B.getClearAlpha(),ze<1&&B.setClearColor(16777215,.5),B.clear(),Ct&&rt.render(ue);const ct=B.toneMapping;B.toneMapping=Di;const ut=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),P.setupLightsView(ne),mt===!0&&Je.setGlobalState(B.clippingPlanes,ne),Fr(N,ue,ne),he.updateMultisampleRenderTarget(we),he.updateRenderTargetMipmap(we),st.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let bt=0,zt=q.length;bt<zt;bt++){const qt=q[bt],{object:It,geometry:rn,material:Oe,group:mn}=qt;if(Oe.side===Pi&&It.layers.test(ne.layers)){const pt=Oe.side;Oe.side=Gn,Oe.needsUpdate=!0,da(It,ue,ne,rn,Oe,mn),Oe.side=pt,Oe.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(we),he.updateRenderTargetMipmap(we))}B.setRenderTarget(be,Xe,Qe),B.setClearColor(Ge,ze),ut!==void 0&&(ne.viewport=ut),B.toneMapping=ct}function Fr(N,q,ue){const ne=q.isScene===!0?q.overrideMaterial:null;for(let te=0,we=N.length;te<we;te++){const Be=N[te],{object:be,geometry:Xe,group:Qe}=Be;let ct=Be.material;ct.allowOverride===!0&&ne!==null&&(ct=ne),be.layers.test(ue.layers)&&da(be,q,ue,Xe,ct,Qe)}}function da(N,q,ue,ne,te,we){N.onBeforeRender(B,q,ue,ne,te,we),N.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),te.onBeforeRender(B,q,ue,ne,N,we),te.transparent===!0&&te.side===Pi&&te.forceSinglePass===!1?(te.side=Gn,te.needsUpdate=!0,B.renderBufferDirect(ue,q,ne,te,N,we),te.side=Pr,te.needsUpdate=!0,B.renderBufferDirect(ue,q,ne,te,N,we),te.side=Pi):B.renderBufferDirect(ue,q,ne,te,N,we),N.onAfterRender(B,q,ue,ne,te,we)}function Or(N,q,ue){q.isScene!==!0&&(q=Bt);const ne=se.get(N),te=P.state.lights,we=P.state.shadowsArray,Be=te.state.version,be=Re.getParameters(N,te.state,we,q,ue,P.state.lightProbeGridArray),Xe=Re.getProgramCacheKey(be);let Qe=ne.programs;ne.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const ct=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ne.envMap=Me.get(N.envMap||ne.environment,ct),ne.envMapRotation=ne.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,Qe===void 0&&(N.addEventListener("dispose",Jn),Qe=new Map,ne.programs=Qe);let ut=Qe.get(Xe);if(ut!==void 0){if(ne.currentProgram===ut&&ne.lightsStateVersion===Be)return fo(N,be),ut}else be.uniforms=Re.getUniforms(N),Y!==null&&N.isNodeMaterial&&Y.build(N,ue,be),N.onBeforeCompile(be,B),ut=Re.acquireProgram(be,Xe),Qe.set(Xe,ut),ne.uniforms=be.uniforms;const $e=ne.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&($e.clippingPlanes=Je.uniform),fo(N,be),ne.needsLights=fa(N),ne.lightsStateVersion=Be,ne.needsLights&&($e.ambientLightColor.value=te.state.ambient,$e.lightProbe.value=te.state.probe,$e.directionalLights.value=te.state.directional,$e.directionalLightShadows.value=te.state.directionalShadow,$e.spotLights.value=te.state.spot,$e.spotLightShadows.value=te.state.spotShadow,$e.rectAreaLights.value=te.state.rectArea,$e.ltc_1.value=te.state.rectAreaLTC1,$e.ltc_2.value=te.state.rectAreaLTC2,$e.pointLights.value=te.state.point,$e.pointLightShadows.value=te.state.pointShadow,$e.hemisphereLights.value=te.state.hemi,$e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,$e.spotLightMatrix.value=te.state.spotLightMatrix,$e.spotLightMap.value=te.state.spotLightMap,$e.pointShadowMatrix.value=te.state.pointShadowMatrix),ne.lightProbeGrid=P.state.lightProbeGridArray.length>0,ne.currentProgram=ut,ne.uniformsList=null,ut}function ha(N){if(N.uniformsList===null){const q=N.currentProgram.getUniforms();N.uniformsList=Hl.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function fo(N,q){const ue=se.get(N);ue.outputColorSpace=q.outputColorSpace,ue.batching=q.batching,ue.batchingColor=q.batchingColor,ue.instancing=q.instancing,ue.instancingColor=q.instancingColor,ue.instancingMorph=q.instancingMorph,ue.skinning=q.skinning,ue.morphTargets=q.morphTargets,ue.morphNormals=q.morphNormals,ue.morphColors=q.morphColors,ue.morphTargetsCount=q.morphTargetsCount,ue.numClippingPlanes=q.numClippingPlanes,ue.numIntersection=q.numClipIntersection,ue.vertexAlphas=q.vertexAlphas,ue.vertexTangents=q.vertexTangents,ue.toneMapping=q.toneMapping}function hc(N,q){if(N.length===0)return null;if(N.length===1)return N[0].texture!==null?N[0]:null;T.setFromMatrixPosition(q.matrixWorld);for(let ue=0,ne=N.length;ue<ne;ue++){const te=N[ue];if(te.texture!==null&&te.boundingBox.containsPoint(T))return te}return null}function $t(N,q,ue,ne,te){q.isScene!==!0&&(q=Bt),he.resetTextureUnits();const we=q.fog,Be=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,be=X===null?B.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Mt.workingColorSpace,Xe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=Me.get(ne.envMap||Be,Xe),ct=ne.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,ut=!!ue.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),$e=!!ue.morphAttributes.position,bt=!!ue.morphAttributes.normal,zt=!!ue.morphAttributes.color;let qt=Di;ne.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(qt=B.toneMapping);const It=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,rn=It!==void 0?It.length:0,Oe=se.get(ne),mn=P.state.lights;if(mt===!0&&(ft===!0||N!==oe)){const Lt=N===oe&&ne.id===re;Je.setState(ne,N,Lt)}let pt=!1;ne.version===Oe.__version?(Oe.needsLights&&Oe.lightsStateVersion!==mn.state.version||Oe.outputColorSpace!==be||te.isBatchedMesh&&Oe.batching===!1||!te.isBatchedMesh&&Oe.batching===!0||te.isBatchedMesh&&Oe.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&Oe.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&Oe.instancing===!1||!te.isInstancedMesh&&Oe.instancing===!0||te.isSkinnedMesh&&Oe.skinning===!1||!te.isSkinnedMesh&&Oe.skinning===!0||te.isInstancedMesh&&Oe.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Oe.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Oe.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Oe.instancingMorph===!1&&te.morphTexture!==null||Oe.envMap!==Qe||ne.fog===!0&&Oe.fog!==we||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==Je.numPlanes||Oe.numIntersection!==Je.numIntersection)||Oe.vertexAlphas!==ct||Oe.vertexTangents!==ut||Oe.morphTargets!==$e||Oe.morphNormals!==bt||Oe.morphColors!==zt||Oe.toneMapping!==qt||Oe.morphTargetsCount!==rn||!!Oe.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(pt=!0):(pt=!0,Oe.__version=ne.version);let Dn=Oe.currentProgram;pt===!0&&(Dn=Or(ne,q,te),Y&&ne.isNodeMaterial&&Y.onUpdateProgram(ne,Dn,Oe));let Un=!1,xt=!1,ki=!1;const Pt=Dn.getUniforms(),Gt=Oe.uniforms;if(b.useProgram(Dn.program)&&(Un=!0,xt=!0,ki=!0),ne.id!==re&&(re=ne.id,xt=!0),Oe.needsLights){const Lt=hc(P.state.lightProbeGridArray,te);Oe.lightProbeGrid!==Lt&&(Oe.lightProbeGrid=Lt,xt=!0)}if(Un||oe!==N){b.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(j,"projectionMatrix",N.projectionMatrix),Pt.setValue(j,"viewMatrix",N.matrixWorldInverse);const ui=Pt.map.cameraPosition;ui!==void 0&&ui.setValue(j,jt.setFromMatrixPosition(N.matrixWorld)),U.logarithmicDepthBuffer&&Pt.setValue(j,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Pt.setValue(j,"isOrthographic",N.isOrthographicCamera===!0),oe!==N&&(oe=N,xt=!0,ki=!0)}if(Oe.needsLights&&(mn.state.directionalShadowMap.length>0&&Pt.setValue(j,"directionalShadowMap",mn.state.directionalShadowMap,he),mn.state.spotShadowMap.length>0&&Pt.setValue(j,"spotShadowMap",mn.state.spotShadowMap,he),mn.state.pointShadowMap.length>0&&Pt.setValue(j,"pointShadowMap",mn.state.pointShadowMap,he)),te.isSkinnedMesh){Pt.setOptional(j,te,"bindMatrix"),Pt.setOptional(j,te,"bindMatrixInverse");const Lt=te.skeleton;Lt&&(Lt.boneTexture===null&&Lt.computeBoneTexture(),Pt.setValue(j,"boneTexture",Lt.boneTexture,he))}te.isBatchedMesh&&(Pt.setOptional(j,te,"batchingTexture"),Pt.setValue(j,"batchingTexture",te._matricesTexture,he),Pt.setOptional(j,te,"batchingIdTexture"),Pt.setValue(j,"batchingIdTexture",te._indirectTexture,he),Pt.setOptional(j,te,"batchingColorTexture"),te._colorsTexture!==null&&Pt.setValue(j,"batchingColorTexture",te._colorsTexture,he));const ci=ue.morphAttributes;if((ci.position!==void 0||ci.normal!==void 0||ci.color!==void 0)&&H.update(te,ue,Dn),(xt||Oe.receiveShadow!==te.receiveShadow)&&(Oe.receiveShadow=te.receiveShadow,Pt.setValue(j,"receiveShadow",te.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&(Gt.envMapIntensity.value=q.environmentIntensity),Gt.dfgLUT!==void 0&&(Gt.dfgLUT.value=wb()),xt){if(Pt.setValue(j,"toneMappingExposure",B.toneMappingExposure),Oe.needsLights&&fc(Gt,ki),we&&ne.fog===!0&&Ye.refreshFogUniforms(Gt,we),Ye.refreshMaterialUniforms(Gt,ne,pe,ge,P.state.transmissionRenderTarget[N.id]),Oe.needsLights&&Oe.lightProbeGrid){const Lt=Oe.lightProbeGrid;Gt.probesSH.value=Lt.texture,Gt.probesMin.value.copy(Lt.boundingBox.min),Gt.probesMax.value.copy(Lt.boundingBox.max),Gt.probesResolution.value.copy(Lt.resolution)}Hl.upload(j,ha(Oe),Gt,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Hl.upload(j,ha(Oe),Gt,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Pt.setValue(j,"center",te.center),Pt.setValue(j,"modelViewMatrix",te.modelViewMatrix),Pt.setValue(j,"normalMatrix",te.normalMatrix),Pt.setValue(j,"modelMatrix",te.matrixWorld),ne.uniformsGroups!==void 0){const Lt=ne.uniformsGroups;for(let ui=0,Ei=Lt.length;ui<Ei;ui++){const kr=Lt[ui];ve.update(kr,Dn),ve.bind(kr,Dn)}}return Dn}function fc(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function fa(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ce},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(N,q,ue){const ne=se.get(N);ne.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),se.get(N.texture).__webglTexture=q,se.get(N.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ue,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){const ue=se.get(N);ue.__webglFramebuffer=q,ue.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,ue=0){X=N,ce=q,$=ue;let ne=null,te=!1,we=!1;if(N){const be=se.get(N);if(be.__useDefaultFramebuffer!==void 0){b.bindFramebuffer(j.FRAMEBUFFER,be.__webglFramebuffer),k.copy(N.viewport),J.copy(N.scissor),Ie=N.scissorTest,b.viewport(k),b.scissor(J),b.setScissorTest(Ie),re=-1;return}else if(be.__webglFramebuffer===void 0)he.setupRenderTarget(N);else if(be.__hasExternalTextures)he.rebindTextures(N,se.get(N.texture).__webglTexture,se.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ct=N.depthTexture;if(be.__boundDepthTexture!==ct){if(ct!==null&&se.has(ct)&&(N.width!==ct.image.width||N.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(N)}}const Xe=N.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(we=!0);const Qe=se.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ne=Qe[q][ue]:ne=Qe[q],te=!0):N.samples>0&&he.useMultisampledRTT(N)===!1?ne=se.get(N).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ue]:ne=Qe,k.copy(N.viewport),J.copy(N.scissor),Ie=N.scissorTest}else k.copy(et).multiplyScalar(pe).floor(),J.copy(kt).multiplyScalar(pe).floor(),Ie=lt;if(ue!==0&&(ne=Q),b.bindFramebuffer(j.FRAMEBUFFER,ne)&&b.drawBuffers(N,ne),b.viewport(k),b.scissor(J),b.setScissorTest(Ie),te){const be=se.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,ue)}else if(we){const be=q;for(let Xe=0;Xe<N.textures.length;Xe++){const Qe=se.get(N.textures[Xe]);j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0+Xe,Qe.__webglTexture,ue,be)}}else if(N!==null&&ue!==0){const be=se.get(N.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,be.__webglTexture,ue)}re=-1},this.readRenderTargetPixels=function(N,q,ue,ne,te,we,Be,be=0){if(!(N&&N.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Xe=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe){b.bindFramebuffer(j.FRAMEBUFFER,Xe);try{const Qe=N.textures[be],ct=Qe.format,ut=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+be),!U.textureFormatReadable(ct)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!U.textureTypeReadable(ut)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-ne&&ue>=0&&ue<=N.height-te&&j.readPixels(q,ue,ne,te,Ne.convert(ct),Ne.convert(ut),we)}finally{const Qe=X!==null?se.get(X).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(N,q,ue,ne,te,we,Be,be=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Xe=se.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Be!==void 0&&(Xe=Xe[Be]),Xe)if(q>=0&&q<=N.width-ne&&ue>=0&&ue<=N.height-te){b.bindFramebuffer(j.FRAMEBUFFER,Xe);const Qe=N.textures[be],ct=Qe.format,ut=Qe.type;if(N.textures.length>1&&j.readBuffer(j.COLOR_ATTACHMENT0+be),!U.textureFormatReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!U.textureTypeReadable(ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=j.createBuffer();j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.bufferData(j.PIXEL_PACK_BUFFER,we.byteLength,j.STREAM_READ),j.readPixels(q,ue,ne,te,Ne.convert(ct),Ne.convert(ut),0);const bt=X!==null?se.get(X).__webglFramebuffer:null;b.bindFramebuffer(j.FRAMEBUFFER,bt);const zt=j.fenceSync(j.SYNC_GPU_COMMANDS_COMPLETE,0);return j.flush(),await G_(j,zt,4),j.bindBuffer(j.PIXEL_PACK_BUFFER,$e),j.getBufferSubData(j.PIXEL_PACK_BUFFER,0,we),j.deleteBuffer($e),j.deleteSync(zt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,ue=0){const ne=Math.pow(2,-ue),te=Math.floor(N.image.width*ne),we=Math.floor(N.image.height*ne),Be=q!==null?q.x:0,be=q!==null?q.y:0;he.setTexture2D(N,0),j.copyTexSubImage2D(j.TEXTURE_2D,ue,0,0,Be,be,te,we),b.unbindTexture()},this.copyTextureToTexture=function(N,q,ue=null,ne=null,te=0,we=0){let Be,be,Xe,Qe,ct,ut,$e,bt,zt;const qt=N.isCompressedTexture?N.mipmaps[we]:N.image;if(ue!==null)Be=ue.max.x-ue.min.x,be=ue.max.y-ue.min.y,Xe=ue.isBox3?ue.max.z-ue.min.z:1,Qe=ue.min.x,ct=ue.min.y,ut=ue.isBox3?ue.min.z:0;else{const Gt=Math.pow(2,-te);Be=Math.floor(qt.width*Gt),be=Math.floor(qt.height*Gt),N.isDataArrayTexture?Xe=qt.depth:N.isData3DTexture?Xe=Math.floor(qt.depth*Gt):Xe=1,Qe=0,ct=0,ut=0}ne!==null?($e=ne.x,bt=ne.y,zt=ne.z):($e=0,bt=0,zt=0);const It=Ne.convert(q.format),rn=Ne.convert(q.type);let Oe;q.isData3DTexture?(he.setTexture3D(q,0),Oe=j.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),Oe=j.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),Oe=j.TEXTURE_2D),b.activeTexture(j.TEXTURE0),b.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,q.flipY),b.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),b.pixelStorei(j.UNPACK_ALIGNMENT,q.unpackAlignment);const mn=b.getParameter(j.UNPACK_ROW_LENGTH),pt=b.getParameter(j.UNPACK_IMAGE_HEIGHT),Dn=b.getParameter(j.UNPACK_SKIP_PIXELS),Un=b.getParameter(j.UNPACK_SKIP_ROWS),xt=b.getParameter(j.UNPACK_SKIP_IMAGES);b.pixelStorei(j.UNPACK_ROW_LENGTH,qt.width),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,qt.height),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Qe),b.pixelStorei(j.UNPACK_SKIP_ROWS,ct),b.pixelStorei(j.UNPACK_SKIP_IMAGES,ut);const ki=N.isDataArrayTexture||N.isData3DTexture,Pt=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){const Gt=se.get(N),ci=se.get(q),Lt=se.get(Gt.__renderTarget),ui=se.get(ci.__renderTarget);b.bindFramebuffer(j.READ_FRAMEBUFFER,Lt.__webglFramebuffer),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let Ei=0;Ei<Xe;Ei++)ki&&(j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,se.get(N).__webglTexture,te,ut+Ei),j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,se.get(q).__webglTexture,we,zt+Ei)),j.blitFramebuffer(Qe,ct,Be,be,$e,bt,Be,be,j.DEPTH_BUFFER_BIT,j.NEAREST);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else if(te!==0||N.isRenderTargetTexture||se.has(N)){const Gt=se.get(N),ci=se.get(q);b.bindFramebuffer(j.READ_FRAMEBUFFER,ae),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,G);for(let Lt=0;Lt<Xe;Lt++)ki?j.framebufferTextureLayer(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,Gt.__webglTexture,te,ut+Lt):j.framebufferTexture2D(j.READ_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,Gt.__webglTexture,te),Pt?j.framebufferTextureLayer(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,ci.__webglTexture,we,zt+Lt):j.framebufferTexture2D(j.DRAW_FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_2D,ci.__webglTexture,we),te!==0?j.blitFramebuffer(Qe,ct,Be,be,$e,bt,Be,be,j.COLOR_BUFFER_BIT,j.NEAREST):Pt?j.copyTexSubImage3D(Oe,we,$e,bt,zt+Lt,Qe,ct,Be,be):j.copyTexSubImage2D(Oe,we,$e,bt,Qe,ct,Be,be);b.bindFramebuffer(j.READ_FRAMEBUFFER,null),b.bindFramebuffer(j.DRAW_FRAMEBUFFER,null)}else Pt?N.isDataTexture||N.isData3DTexture?j.texSubImage3D(Oe,we,$e,bt,zt,Be,be,Xe,It,rn,qt.data):q.isCompressedArrayTexture?j.compressedTexSubImage3D(Oe,we,$e,bt,zt,Be,be,Xe,It,qt.data):j.texSubImage3D(Oe,we,$e,bt,zt,Be,be,Xe,It,rn,qt):N.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,we,$e,bt,Be,be,It,rn,qt.data):N.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,we,$e,bt,qt.width,qt.height,It,qt.data):j.texSubImage2D(j.TEXTURE_2D,we,$e,bt,Be,be,It,rn,qt);b.pixelStorei(j.UNPACK_ROW_LENGTH,mn),b.pixelStorei(j.UNPACK_IMAGE_HEIGHT,pt),b.pixelStorei(j.UNPACK_SKIP_PIXELS,Dn),b.pixelStorei(j.UNPACK_SKIP_ROWS,Un),b.pixelStorei(j.UNPACK_SKIP_IMAGES,xt),we===0&&q.generateMipmaps&&j.generateMipmap(Oe),b.unbindTexture()},this.initRenderTarget=function(N){se.get(N).__webglFramebuffer===void 0&&he.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?he.setTextureCube(N,0):N.isData3DTexture?he.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?he.setTexture2DArray(N,0):he.setTexture2D(N,0),b.unbindTexture()},this.resetState=function(){ce=0,$=0,X=null,b.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Mt._getDrawingBufferColorSpace(e),n.unpackColorSpace=Mt._getUnpackColorSpace()}}class Ab{constructor(){Wa(this,"ctx",null);Wa(this,"isEnabled",!1);Wa(this,"ambientOsc",null);Wa(this,"ambientGain",null)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}toggleAudio(){return this.initContext(),this.isEnabled=!this.isEnabled,this.isEnabled?(this.startAmbient(),this.playChime(640,"sine",.15)):this.stopAmbient(),this.isEnabled}getAudioState(){return this.isEnabled}playClick(e=880){if(!(!this.isEnabled||!this.ctx))try{const n=this.ctx.createOscillator(),r=this.ctx.createGain();n.type="triangle",n.frequency.setValueAtTime(e,this.ctx.currentTime),n.frequency.exponentialRampToValueAtTime(e*.4,this.ctx.currentTime+.05),r.gain.setValueAtTime(.08,this.ctx.currentTime),r.gain.exponentialRampToValueAtTime(1e-4,this.ctx.currentTime+.05),n.connect(r),r.connect(this.ctx.destination),n.start(),n.stop(this.ctx.currentTime+.05)}catch{}}playWarp(){if(!(!this.isEnabled||!this.ctx))try{const e=this.ctx.currentTime,n=this.ctx.createOscillator(),r=this.ctx.createBiquadFilter(),o=this.ctx.createGain();n.type="sawtooth",n.frequency.setValueAtTime(140,e),n.frequency.exponentialRampToValueAtTime(560,e+.2),n.frequency.exponentialRampToValueAtTime(80,e+.45),r.type="lowpass",r.frequency.setValueAtTime(600,e),r.frequency.exponentialRampToValueAtTime(2400,e+.2),r.frequency.exponentialRampToValueAtTime(400,e+.45),o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.001,e+.45),n.connect(r),r.connect(o),o.connect(this.ctx.destination),n.start(e),n.stop(e+.45)}catch{}}playChime(e=523.25,n="sine",r=.3){if(!(!this.isEnabled||!this.ctx))try{const o=this.ctx.currentTime,c=this.ctx.createOscillator(),d=this.ctx.createGain();c.type=n,c.frequency.setValueAtTime(e,o),d.gain.setValueAtTime(.1,o),d.gain.exponentialRampToValueAtTime(1e-4,o+r),c.connect(d),d.connect(this.ctx.destination),c.start(o),c.stop(o+r)}catch{}}startAmbient(){if(this.ctx)try{this.stopAmbient();const e=this.ctx.currentTime;this.ambientOsc=this.ctx.createOscillator(),this.ambientGain=this.ctx.createGain(),this.ambientOsc.type="sine",this.ambientOsc.frequency.setValueAtTime(55,e),this.ambientGain.gain.setValueAtTime(1e-4,e),this.ambientGain.gain.linearRampToValueAtTime(.02,e+1.5),this.ambientOsc.connect(this.ambientGain),this.ambientGain.connect(this.ctx.destination),this.ambientOsc.start(e)}catch{}}stopAmbient(){if(this.ambientOsc&&this.ambientGain&&this.ctx)try{const e=this.ctx.currentTime;this.ambientGain.gain.linearRampToValueAtTime(1e-4,e+.5),setTimeout(()=>{var n,r;(n=this.ambientOsc)==null||n.stop(),(r=this.ambientOsc)==null||r.disconnect(),this.ambientOsc=null},500)}catch{this.ambientOsc=null}}}const yi=new Ab,Cb=()=>{const s=Le.useRef(null),e=Le.useRef(null),[n,r]=Le.useState("TORUS_KNOT"),[o,c]=Le.useState("LIQUID_CHROME"),[d,f]=Le.useState(!0),[p,x]=Le.useState(0),y=Le.useRef(null),S=Le.useRef(null),g=Le.useRef(null),M=Le.useRef(null),E=Le.useRef(null),C=Le.useRef(null),_=Le.useRef(null);Le.useEffect(()=>{const T=s.current,D=e.current;if(!T||!D)return;const P=new ay;y.current=P;const F=T.clientWidth,w=T.clientHeight,I=new Zn(45,F/w,.1,1e3);I.position.set(0,0,7.5);const B=new Tb({canvas:D,antialias:!0,alpha:!0,powerPreference:"high-performance"});B.setSize(F,w),B.setPixelRatio(Math.min(window.devicePixelRatio,2));const z=new Ay(16777215,.6);P.add(z);const Y=new Sd(65443,40,50);Y.position.set(5,5,5),P.add(Y);const Q=new Sd(58879,35,50);Q.position.set(-5,-4,4),P.add(Q);const ae=new Sd(11032055,30,50);ae.position.set(0,6,-4),P.add(ae);const G=new Ks;S.current=G,P.add(G);const ce=1800,$=new Ln,X=new Float32Array(ce*3),re=new Float32Array(ce*3),oe=[new vt(65443),new vt(58879),new vt(11032055),new vt(16777215)];for(let j=0;j<ce;j++){const yt=3.5+Math.random()*8.5,st=Math.random()*Math.PI*2,U=Math.acos(Math.random()*2-1);X[j*3]=yt*Math.sin(U)*Math.cos(st),X[j*3+1]=yt*Math.sin(U)*Math.sin(st),X[j*3+2]=yt*Math.cos(U);const b=oe[Math.floor(Math.random()*oe.length)];re[j*3]=b.r,re[j*3+1]=b.g,re[j*3+2]=b.b}$.setAttribute("position",new li(X,3)),$.setAttribute("color",new li(re,3));const k=new q0({size:.045,vertexColors:!0,transparent:!0,opacity:.75,blending:Nd}),J=new xy($,k);E.current=J,P.add(J);const Ie=new Ks;C.current=Ie;const Ge=3.2,ze=new Zs(Ge,.015,16,120),le=new Qi({color:65443,transparent:!0,opacity:.35}),ge=new Hn(ze,le);ge.rotation.x=Math.PI/3,Ie.add(ge);const pe=new Zs(Ge*1.15,.012,16,120),Fe=new Qi({color:58879,transparent:!0,opacity:.3}),Ze=new Hn(pe,Fe);Ze.rotation.y=Math.PI/4,Ie.add(Ze),P.add(Ie);const et=new Dh(.1,.25,64),kt=new Qi({color:65443,side:Pi,transparent:!0,opacity:0}),lt=new Hn(et,kt);lt.rotation.x=Math.PI/2,P.add(lt),_.current={mesh:lt,scale:.1,active:!1};let St=0,mt=0,ft=0,Ft=0;const jt=j=>{const yt=T.getBoundingClientRect(),st=(j.clientX-yt.left)/yt.width-.5,U=(j.clientY-yt.top)/yt.height-.5;ft=st*2.2,Ft=-U*2.2};window.addEventListener("mousemove",jt);const Ht=()=>{if(!T)return;const j=T.clientWidth,yt=T.clientHeight;I.aspect=j/yt,I.updateProjectionMatrix(),B.setSize(j,yt)};window.addEventListener("resize",Ht);let Bt,Ct=new Ry;const Ot=()=>{Bt=requestAnimationFrame(Ot);const j=Ct.getDelta(),yt=Ct.getElapsedTime();if(St+=(ft-St)*.05,mt+=(Ft-mt)*.05,I.position.x=St*2,I.position.y=mt*2,I.lookAt(0,0,0),S.current&&d&&(S.current.rotation.x=yt*.25,S.current.rotation.y=yt*.35),C.current&&(C.current.rotation.x=yt*.15,C.current.rotation.y=-yt*.2),E.current&&(E.current.rotation.y=yt*.04,E.current.rotation.z=yt*.02),_.current&&_.current.active){const st=_.current;st.scale+=j*12,st.mesh.scale.set(st.scale,st.scale,st.scale),st.mesh.material.opacity=Math.max(0,.8-st.scale*.12),st.scale>7&&(st.active=!1,st.mesh.material.opacity=0)}B.render(P,I)};return Ot(),()=>{window.removeEventListener("mousemove",jt),window.removeEventListener("resize",Ht),cancelAnimationFrame(Bt),B.dispose()}},[d]),Le.useEffect(()=>{const T=S.current;if(!T)return;for(;T.children.length>0;)T.remove(T.children[0]);let D,P;switch(n){case"TORUS_KNOT":D=new Qs(1.6,.45,180,36,2,5),P=new Qs(1.61,.46,90,24,2,5);break;case"QUANTUM_CORE":D=new Jl(1.9,3),P=new Jl(1.95,1);break;case"MOEBIUS_RIBBON":D=new Zs(1.8,.35,30,200,Math.PI*2),P=new Zs(1.82,.36,16,80,Math.PI*2);break;case"PARTICLE_SWARM":D=new Ql(1.9,2),P=new Ql(2,1);break;default:D=new Qs(1.6,.45,160,32,2,5),P=new Qs(1.61,.46,80,20,2,5)}let F,w;switch(o){case"LIQUID_CHROME":F=new km({color:1119778,roughness:.1,metalness:.95,emissive:11035,emissiveIntensity:.35}),w=new Qi({color:65443,wireframe:!0,transparent:!0,opacity:.45});break;case"HOLO_WIREFRAME":F=new Qi({color:4386,wireframe:!0,transparent:!0,opacity:.2}),w=new Qi({color:58879,wireframe:!0,transparent:!0,opacity:.85});break;case"IRIDESCENT_GLASS":F=new km({color:3018853,roughness:.05,metalness:.5,emissive:4988309,emissiveIntensity:.4}),w=new Qi({color:11032055,wireframe:!0,transparent:!0,opacity:.6});break}const I=new Hn(D,F),B=new Hn(P,w);g.current=I,M.current=B,T.add(I),T.add(B)},[n,o]);const v=()=>{x(T=>T+1),yi.playWarp(),_.current&&(_.current.scale=.5,_.current.active=!0,_.current.mesh.material.opacity=.85)},R=T=>{r(T),v()},L=T=>{c(T),yi.playClick(1050)};return l.jsxs("div",{ref:s,className:"relative w-full h-[520px] lg:h-[620px] rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#0a0518] via-[#04020a] to-[#020106] shadow-2xl",children:[l.jsx("canvas",{ref:e,onClick:v,className:"w-full h-full block cursor-grab active:cursor-grabbing"}),l.jsxs("div",{className:"absolute top-4 left-4 right-4 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-none",children:[l.jsxs("div",{className:"flex items-center gap-2.5 bg-black/60 backdrop-blur-xl border border-white/15 px-4 py-2 rounded-full text-xs text-white pointer-events-auto",children:[l.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"}),l.jsx("span",{className:"font-bold tracking-wider font-mono",children:"ELASTIC_HYPER_CORE_3D"}),l.jsx("span",{className:"text-white/30",children:"|"}),l.jsx("span",{className:"text-emerald-400 font-mono text-[11px]",children:"WebGL 2.0 • 60 FPS"})]}),l.jsxs("button",{onClick:v,className:"flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black font-bold px-4 py-2 rounded-full text-xs transition-all shadow-lg shadow-emerald-500/25 pointer-events-auto cursor-pointer hover:scale-105",children:[l.jsx(na,{className:"w-3.5 h-3.5 fill-current"}),l.jsx("span",{children:"TRIGGER_SHOCKWAVE"})]})]}),l.jsxs("div",{className:"absolute bottom-4 left-4 right-4 z-20 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-black/75 backdrop-blur-2xl border border-white/15 p-3 rounded-2xl",children:[l.jsxs("div",{className:"flex flex-wrap items-center gap-1.5 text-xs font-mono",children:[l.jsx("span",{className:"text-white/50 text-[11px] mr-1 hidden sm:inline",children:"GEOMETRY:"}),[{id:"TORUS_KNOT",label:"Torus Knot"},{id:"QUANTUM_CORE",label:"Quantum Core"},{id:"MOEBIUS_RIBBON",label:"Moebius Ribbon"},{id:"PARTICLE_SWARM",label:"Star Swarm"}].map(T=>l.jsx("button",{onClick:()=>R(T.id),className:`px-3 py-1.5 rounded-xl transition-all cursor-pointer text-xs ${n===T.id?"bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-bold shadow-md shadow-emerald-500/20":"bg-white/5 text-gray-300 hover:text-white hover:bg-white/10"}`,children:T.label},T.id))]}),l.jsxs("div",{className:"flex items-center gap-2 self-end md:self-auto text-xs font-mono",children:[l.jsx("div",{className:"flex items-center bg-white/5 p-1 rounded-xl border border-white/10",children:["LIQUID_CHROME","HOLO_WIREFRAME","IRIDESCENT_GLASS"].map(T=>l.jsx("button",{onClick:()=>L(T),className:`px-2.5 py-1 rounded-lg transition-all cursor-pointer text-[11px] ${o===T?"bg-white/20 text-white font-bold":"text-gray-400 hover:text-white"}`,children:T==="LIQUID_CHROME"?"Chrome":T==="HOLO_WIREFRAME"?"Holo":"Glass"},T))}),l.jsx("button",{onClick:()=>f(!d),className:"p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer",title:"Toggle Auto-Rotation",children:l.jsx(no,{className:`w-4 h-4 ${d?"text-emerald-400 animate-spin":"text-gray-500"}`})})]})]})]})},Nb=({children:s,className:e="",glowColor:n="rgba(0, 255, 163, 0.25)"})=>{const r=Le.useRef(null),[o,c]=Le.useState(0),[d,f]=Le.useState(0),[p,x]=Le.useState({x:50,y:50}),[y,S]=Le.useState(!1),g=C=>{if(!r.current)return;const _=r.current.getBoundingClientRect(),v=C.clientX-_.left,R=C.clientY-_.top,L=_.width/2,T=_.height/2,D=(R-T)/T*-12,P=(v-L)/L*12;c(D),f(P),x({x:v/_.width*100,y:R/_.height*100})},M=()=>{S(!0),yi.playClick(950)},E=()=>{S(!1),c(0),f(0)};return l.jsx("div",{style:{perspective:1e3},className:"transition-transform duration-300 ease-out",children:l.jsxs("div",{ref:r,onMouseMove:g,onMouseEnter:M,onMouseLeave:E,style:{transform:y?`rotateX(${o}deg) rotateY(${d}deg) scale3d(1.02, 1.02, 1.02)`:"rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",transition:y?"transform 0.1s ease-out":"transform 0.5s ease-out",boxShadow:y?`0 20px 40px -15px ${n}`:"none"},className:`relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent backdrop-blur-xl ${e}`,children:[y&&l.jsx("div",{className:"pointer-events-none absolute inset-0 z-20 transition-opacity duration-300",style:{background:`radial-gradient(circle 220px at ${p.x}% ${p.y}%, rgba(255, 255, 255, 0.18), transparent 70%)`}}),l.jsx("div",{style:{transform:"translateZ(30px)"},className:"relative z-10",children:s})]})})},Rb=()=>{const[s,e]=Le.useState(!1),[n,r]=Le.useState(!1),[o,c]=Le.useState(!1),[d,f]=Le.useState(!1),[p,x]=Le.useState(100),[y,S]=Le.useState("AUTONOMOUS_MESH"),g=()=>{const C=yi.toggleAudio();e(C)},M=()=>{f(!0),x(0),yi.playWarp();let C=0;const _=setInterval(()=>{C+=5,x(C),C%20===0&&yi.playClick(600+C*8),C>=100&&(clearInterval(_),f(!1),yi.playChime(880,"sine",.4))},80)},E=[{title:"Autonomous State-Space Fuzzing",category:"KINETIC VERIFICATION",badge:"10M+ Permutations/sec",desc:"Simulating non-linear state explosions across multi-agent consensus matrices before production deployment.",glow:"rgba(0, 255, 163, 0.3)",accentColor:"text-emerald-400",icon:Cd},{title:"Zero-Tolerance Invariant Synthesis",category:"MATHEMATICAL CERTAINTY",badge:"Formal SMT Proofs",desc:"Constructing machine-checkable deductive proofs that certify zero-exploitability across all possible execution branches.",glow:"rgba(0, 229, 255, 0.3)",accentColor:"text-cyan-400",icon:Xl},{title:"Spatial Topology & Cartel Defense",category:"GAME THEORETIC DEFENSE",badge:"Byzantine Fault Invariance",desc:"Stress-testing distributed validator sets against adversarial collusion, MEV extraction, and censorship vectors.",glow:"rgba(168, 85, 247, 0.3)",accentColor:"text-purple-400",icon:no},{title:"Post-Quantum Algorithmic Shields",category:"NEXT-ERA CRYPTOGRAPHY",badge:"Lattice Soundness",desc:"Auditing high-performance cryptographic primitives, zero-knowledge circuits, and quantum-resistant signature schemes.",glow:"rgba(251, 191, 36, 0.3)",accentColor:"text-amber-400",icon:x0}];return l.jsxs("div",{className:"min-h-screen bg-[#030208] text-gray-100 font-sans selection:bg-emerald-400 selection:text-black relative overflow-x-hidden",children:[l.jsxs("div",{className:"pointer-events-none fixed inset-0 z-0",children:[l.jsx("div",{className:"absolute -top-40 -left-40 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[140px]"}),l.jsx("div",{className:"absolute top-1/2 -right-40 w-[700px] h-[700px] bg-cyan-500/10 rounded-full blur-[160px]"}),l.jsx("div",{className:"absolute -bottom-40 left-1/3 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[180px]"})]}),l.jsx("div",{className:"relative z-50 border-b border-white/10 bg-white/[0.02] backdrop-blur-xl px-4 py-2 text-xs font-mono text-gray-400",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("span",{className:"flex items-center gap-1.5 text-emerald-400 font-semibold",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-ping"}),"DIMENSION_D::HYPER_SPATIAL_ONLINE"]}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsx("span",{className:"hidden sm:inline text-white/60",children:"AUTONOMOUS AUDITING & 3D CYBER DEFENSE"})]}),l.jsxs("div",{className:"flex items-center gap-4",children:[l.jsxs("button",{onClick:g,className:`flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] transition-all cursor-pointer ${s?"bg-emerald-500/20 border-emerald-400 text-emerald-300 shadow-lg shadow-emerald-500/20":"bg-white/5 border-white/15 text-gray-400 hover:text-white"}`,children:[s?l.jsx(Wv,{className:"w-3.5 h-3.5 text-emerald-400"}):l.jsx(qv,{className:"w-3.5 h-3.5"}),l.jsxs("span",{children:["SPATIAL_AUDIO: ",s?"ON":"OFF"]})]}),l.jsx("span",{className:"hidden md:inline text-white/40",children:"ENGINE: Three.js WebGL 2.0"})]})]})}),l.jsxs("header",{className:"sticky top-11 z-40 bg-[#030208]/85 backdrop-blur-2xl border-b border-white/10",children:[l.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between",children:[l.jsxs("a",{href:"#",className:"flex items-center gap-3 group",children:[l.jsx("div",{className:"w-11 h-11 rounded-2xl bg-gradient-to-tr from-emerald-400 via-cyan-400 to-purple-500 p-0.5 shadow-xl shadow-emerald-500/20 group-hover:scale-105 transition-transform",children:l.jsx("div",{className:"w-full h-full bg-[#090615] rounded-[14px] flex items-center justify-center",children:l.jsx(no,{className:"w-5 h-5 text-emerald-400 animate-spin-slow"})})}),l.jsxs("div",{children:[l.jsxs("span",{className:"text-xl font-extrabold tracking-wider text-white flex items-center gap-1.5",children:["ELASTIC CURVE",l.jsx("span",{className:"text-[10px] text-emerald-400 bg-emerald-500/15 border border-emerald-400/30 px-2 py-0.5 rounded-full font-mono",children:"3D_KINETIC"})]}),l.jsx("span",{className:"text-[10px] text-gray-400 tracking-widest uppercase block -mt-1 font-mono",children:"Hyper-Spatial System Defense"})]})]}),l.jsxs("nav",{className:"hidden lg:flex items-center gap-8 text-sm text-gray-300 font-medium",children:[l.jsx("a",{href:"#hyper-core",className:"hover:text-emerald-400 transition-colors",children:"Hyper-Core 3D"}),l.jsx("a",{href:"#kinetic-pillars",className:"hover:text-emerald-400 transition-colors",children:"3D Pillars"}),l.jsx("a",{href:"#spatial-scanner",className:"hover:text-emerald-400 transition-colors",children:"Spatial Diagnostic"}),l.jsx("a",{href:"#matrix",className:"hover:text-emerald-400 transition-colors",children:"Resilience Matrix"})]}),l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsxs("button",{onClick:()=>{c(!0),yi.playClick(1100)},className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 hover:opacity-90 text-black font-extrabold px-6 py-3 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 flex items-center gap-2 hover:scale-[1.03] cursor-pointer",children:[l.jsx(na,{className:"w-4 h-4 fill-current"}),l.jsx("span",{children:"Request 3D Audit"})]}),l.jsx("button",{onClick:()=>r(!n),className:"lg:hidden p-2 text-gray-400 hover:text-white",children:n?l.jsx(rc,{className:"w-6 h-6"}):l.jsx(nc,{className:"w-6 h-6"})})]})]}),n&&l.jsxs("div",{className:"lg:hidden bg-[#0a0618] border-b border-white/10 px-4 py-4 space-y-3 font-mono text-xs",children:[l.jsx("a",{href:"#hyper-core",onClick:()=>r(!1),className:"block text-gray-300 hover:text-emerald-400 py-1.5",children:"[01_HYPER_CORE_3D]"}),l.jsx("a",{href:"#kinetic-pillars",onClick:()=>r(!1),className:"block text-gray-300 hover:text-emerald-400 py-1.5",children:"[02_3D_PILLARS]"}),l.jsx("a",{href:"#spatial-scanner",onClick:()=>r(!1),className:"block text-gray-300 hover:text-emerald-400 py-1.5",children:"[03_SPATIAL_DIAGNOSTIC]"}),l.jsx("a",{href:"#matrix",onClick:()=>r(!1),className:"block text-gray-300 hover:text-emerald-400 py-1.5",children:"[04_RESILIENCE_MATRIX]"})]})]}),l.jsx("section",{id:"hyper-core",className:"scroll-mt-28 relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-7",children:[l.jsxs("div",{className:"inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/25 px-4 py-1.5 rounded-full",children:[l.jsx($s,{className:"w-4 h-4 text-emerald-400 animate-spin"}),l.jsx("span",{children:"Next-Generation System Verification"})]}),l.jsxs("h1",{className:"text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]",children:["Architecting ",l.jsx("br",{}),l.jsx("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-300 to-purple-400",children:"Digital Resilience"})," ",l.jsx("br",{}),"in 3D Space."]}),l.jsx("p",{className:"text-base text-gray-300 leading-relaxed font-normal",children:"Beyond check-the-box compliance. We map high-throughput architectures into continuous kinetic manifolds, verifying systemic fault-invariance and mathematical soundness before threats materialize."}),l.jsxs("div",{className:"grid grid-cols-3 gap-4 pt-4 border-t border-white/10 font-mono",children:[l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl",children:[l.jsx("div",{className:"text-2xl font-black text-white",children:"$18.4B+"}),l.jsx("div",{className:"text-[11px] text-gray-400 mt-1 uppercase",children:"Assets Shielded"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl",children:[l.jsx("div",{className:"text-2xl font-black text-emerald-400",children:"0.000%"}),l.jsx("div",{className:"text-[11px] text-gray-400 mt-1 uppercase",children:"Post-Audit Flaws"})]}),l.jsxs("div",{className:"bg-white/[0.03] border border-white/10 p-3.5 rounded-2xl backdrop-blur-xl",children:[l.jsx("div",{className:"text-2xl font-black text-cyan-400",children:"100%"}),l.jsx("div",{className:"text-[11px] text-gray-400 mt-1 uppercase",children:"Machine Proved"})]})]}),l.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row gap-4",children:[l.jsxs("button",{onClick:()=>{c(!0),yi.playClick(1e3)},className:"flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-extrabold px-7 py-4 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 hover:scale-[1.03] cursor-pointer",children:[l.jsx("span",{children:"Initiate Engagement"}),l.jsx(tc,{className:"w-4 h-4"})]}),l.jsxs("a",{href:"#spatial-scanner",className:"flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 px-6 py-4 rounded-xl text-sm transition-colors cursor-pointer",children:[l.jsx(Cd,{className:"w-4 h-4 text-emerald-400"}),l.jsx("span",{children:"Launch Diagnostic"})]})]}),l.jsxs("div",{className:"text-xs text-gray-400 flex items-center gap-2 pt-1 font-mono",children:[l.jsx(Gl,{className:"w-4 h-4 text-emerald-400 shrink-0"}),l.jsx("span",{children:"Partner-led cryptographers • Zero compliance theater • Realtime SMT invariants"})]})]}),l.jsx("div",{className:"lg:col-span-7",children:l.jsx(Cb,{})})]})}),l.jsxs("section",{id:"kinetic-pillars",className:"scroll-mt-28 py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto",children:[l.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[l.jsx("div",{className:"text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest mb-2",children:"// INTERACTIVE 3D PERSPECTIVE MATRIX"}),l.jsx("h2",{className:"text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight",children:"High-Dimensional Security Architecture"}),l.jsx("p",{className:"text-gray-300 text-sm sm:text-base mt-3",children:"Hover and tilt the cards below to explore our multi-layered engineering disciplines. Built with dynamic specular glares and physical 3D gyro-parallax."})]}),l.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:E.map((C,_)=>{const v=C.icon;return l.jsxs(Nb,{glowColor:C.glow,className:"p-8 sm:p-10 flex flex-col justify-between min-h-[320px]",children:[l.jsxs("div",{children:[l.jsxs("div",{className:"flex items-center justify-between mb-6",children:[l.jsx("span",{className:"text-[11px] font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300",children:C.category}),l.jsx("div",{className:"w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white",children:l.jsx(v,{className:`w-6 h-6 ${C.accentColor}`})})]}),l.jsx("h3",{className:"text-2xl font-bold text-white mb-3",children:C.title}),l.jsx("p",{className:"text-gray-300 text-sm leading-relaxed mb-6 font-normal",children:C.desc})]}),l.jsxs("div",{className:"border-t border-white/10 pt-4 flex items-center justify-between text-xs font-mono",children:[l.jsx("span",{className:"text-gray-400",children:"BENCHMARK:"}),l.jsx("span",{className:`font-bold ${C.accentColor}`,children:C.badge})]})]},_)})})]}),l.jsx("section",{id:"spatial-scanner",className:"scroll-mt-28 py-24 bg-white/[0.01] border-y border-white/10 px-4 sm:px-6 lg:px-8",children:l.jsxs("div",{className:"max-w-7xl mx-auto",children:[l.jsxs("div",{className:"max-w-3xl mb-14",children:[l.jsx("div",{className:"text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest mb-2",children:"REALTIME DIAGNOSTIC MANIFOLD"}),l.jsx("h2",{className:"text-3xl sm:text-4xl font-black text-white tracking-tight",children:"Spatial System Scanner"}),l.jsx("p",{className:"text-gray-300 text-sm mt-2",children:"Select a target infrastructure subsystem and initiate our procedural state-space solver. Watch the real-time invariant convergence cycle."})]}),l.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-8 bg-gradient-to-br from-white/[0.05] via-white/[0.02] to-transparent border border-white/15 rounded-3xl p-6 sm:p-10 backdrop-blur-2xl",children:[l.jsxs("div",{className:"lg:col-span-5 space-y-6",children:[l.jsxs("div",{className:"space-y-3",children:[l.jsx("label",{className:"block text-xs font-mono text-gray-400 font-bold uppercase",children:"TARGET ARCHITECTURE CLUSTER:"}),l.jsx("div",{className:"space-y-2",children:[{id:"AUTONOMOUS_MESH",label:"Autonomous Mesh & Consensus Layer",desc:"Tendermint / Solana BPF / Narwhal Engine"},{id:"HIGH_THROUGHPUT",label:"L1/L2 High-Throughput Manifold",desc:"Arbitrum Nitro / Monad / Move VM PTB"},{id:"CRYPTO_CORE",label:"Cryptographic Core & ZK Circuit",desc:"KZG Commitments / PlonK / Halo2 Prover"}].map(C=>l.jsxs("button",{onClick:()=>{S(C.id),yi.playClick(900)},className:`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${y===C.id?"bg-gradient-to-r from-emerald-500/20 to-cyan-500/10 border-emerald-400/60 text-white shadow-lg shadow-emerald-500/10":"bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"}`,children:[l.jsx("div",{className:"font-bold text-sm text-white",children:C.label}),l.jsx("div",{className:"text-xs text-gray-400 font-mono mt-1",children:C.desc})]},C.id))})]}),l.jsxs("button",{onClick:M,disabled:d,className:"w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 hover:opacity-90 text-black font-extrabold py-4 rounded-2xl text-sm transition-all shadow-xl shadow-emerald-500/25 disabled:opacity-60 cursor-pointer",children:[l.jsx(na,{className:"w-4 h-4 fill-current"}),l.jsx("span",{children:d?"COMPUTING STATE MANIFOLD...":"RUN SPATIAL SOLVER"})]})]}),l.jsxs("div",{className:"lg:col-span-7 bg-[#070414] border border-white/15 rounded-2xl p-6 font-mono text-xs space-y-4",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-3",children:[l.jsxs("span",{className:"text-emerald-400 flex items-center gap-2",children:[l.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"CLUSTER: ",y]}),l.jsx("span",{className:"text-gray-400 text-[11px]",children:"SOLVER: Z3_DEDUCTIVE_PROVER"})]}),l.jsxs("div",{className:"space-y-2",children:[l.jsxs("div",{className:"flex justify-between text-xs",children:[l.jsx("span",{className:"text-gray-400",children:"INVARIANT SATISFIABILITY:"}),l.jsxs("span",{className:"font-bold text-emerald-400",children:[p,"% SOLVED"]})]}),l.jsx("div",{className:"w-full bg-white/5 h-2 rounded-full overflow-hidden border border-white/10",children:l.jsx("div",{className:"bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 h-full transition-all duration-150",style:{width:`${p}%`}})})]}),l.jsxs("div",{className:"bg-black/60 border border-white/10 rounded-xl p-4 space-y-2 text-[11px] leading-relaxed max-h-56 overflow-y-auto",children:[l.jsx("div",{className:"text-gray-500",children:">>> INITIALIZING HYPER-DIMENSIONAL GRAPH MODEL..."}),l.jsx("div",{className:"text-cyan-300",children:">>> 14,892 concurrent callframes mapped into invariant topology."}),l.jsx("div",{className:"text-purple-300",children:">>> Testing non-linear reentrancy edge cases across transient storage slots."}),p>=50&&l.jsx("div",{className:"text-amber-300 font-semibold",children:">>> [ANOMALY_RESOLVED]: Zero-day overflow vector neutralized at opcode 0x48."}),p>=100&&l.jsxs("div",{className:"text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 p-2.5 rounded-lg flex items-center gap-2",children:[l.jsx(Gl,{className:"w-4 h-4 text-emerald-400 shrink-0"}),l.jsx("span",{children:"CERTIFICATE OF SOUNDNESS GENERATED (SHA256::8A4F...11CE)"})]})]})]})]})]})}),o&&l.jsx("div",{className:"fixed inset-0 z-50 bg-black/85 backdrop-blur-xl flex items-center justify-center p-4 font-sans",children:l.jsxs("div",{className:"bg-[#0b071e] border border-emerald-500/40 rounded-3xl max-w-lg w-full p-8 shadow-2xl space-y-6 relative overflow-hidden",children:[l.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[l.jsxs("div",{className:"flex items-center gap-2.5 text-white font-bold text-base",children:[l.jsx(no,{className:"w-5 h-5 text-emerald-400"}),l.jsx("span",{children:"Initialize 3D Cyber Engagement"})]}),l.jsx("button",{onClick:()=>c(!1),className:"text-gray-400 hover:text-white text-xs px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 cursor-pointer",children:"Close"})]}),l.jsxs("form",{onSubmit:C=>{C.preventDefault(),yi.playChime(720,"triangle",.5),alert("Engagement docket initialized. Our senior security architects will contact you within 4 hours."),c(!1)},className:"space-y-4 text-xs",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-300 font-semibold mb-1",children:"System / Project Architecture"}),l.jsx("input",{type:"text",required:!0,placeholder:"e.g. Next-Gen Autonomous DEX / Layer-1",className:"w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"})]}),l.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-300 font-semibold mb-1",children:"Architecture Domain"}),l.jsxs("select",{className:"w-full bg-black/50 border border-white/15 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-emerald-400",children:[l.jsx("option",{children:"High-Throughput Multichain"}),l.jsx("option",{children:"Autonomous AI & Contracts"}),l.jsx("option",{children:"Zero-Knowledge Circuits"}),l.jsx("option",{children:"Consensus & Bridging Infra"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-300 font-semibold mb-1",children:"Target Launch SLA"}),l.jsx("input",{type:"text",placeholder:"Q4 2026 / Expedited",className:"w-full bg-black/50 border border-white/15 text-white px-3 py-2.5 rounded-xl focus:outline-none focus:border-emerald-400"})]})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-300 font-semibold mb-1",children:"Repository / Whitepaper Spec URL"}),l.jsx("input",{type:"text",required:!0,placeholder:"https://github.com/org/core-protocol",className:"w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"})]}),l.jsxs("div",{children:[l.jsx("label",{className:"block text-gray-300 font-semibold mb-1",children:"Encrypted Contact (Telegram / Signal / Email)"}),l.jsx("input",{type:"text",required:!0,placeholder:"@architect_lead or cto@domain.io",className:"w-full bg-black/50 border border-white/15 text-white px-4 py-3 rounded-xl focus:outline-none focus:border-emerald-400"})]}),l.jsx("button",{type:"submit",className:"w-full bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-500 text-black font-extrabold py-3.5 rounded-xl text-sm transition-all shadow-xl shadow-emerald-500/25 hover:opacity-95 cursor-pointer",children:"Dispatch Engagement Docket"})]})]})}),l.jsx("footer",{className:"bg-[#020105] border-t border-white/10 py-14 px-4 sm:px-6 lg:px-8 text-xs text-gray-400 font-mono",children:l.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6",children:[l.jsxs("div",{className:"flex items-center gap-3",children:[l.jsx("span",{className:"font-extrabold text-white text-sm tracking-wider",children:"ELASTIC CURVE::HYPER_SPATIAL"}),l.jsx("span",{className:"text-white/20",children:"|"}),l.jsx("span",{children:"AUTONOMOUS SYSTEM AUDITING & 3D CYBER DEFENSE"})]}),l.jsxs("div",{className:"flex items-center gap-6 text-[11px]",children:[l.jsx("a",{href:"#hyper-core",className:"hover:text-emerald-400",children:"HYPER_CORE"}),l.jsx("a",{href:"#kinetic-pillars",className:"hover:text-emerald-400",children:"3D_PILLARS"}),l.jsx("a",{href:"#spatial-scanner",className:"hover:text-emerald-400",children:"DIAGNOSTIC"}),l.jsx("span",{className:"text-emerald-400",children:"STATUS: 60_FPS_STABLE"})]})]})})]})},Pb=()=>{const[s,e]=Le.useState("D");return l.jsxs("div",{className:"min-h-screen bg-black",children:[l.jsx(Kv,{activeConcept:s,onSelectConcept:e}),s==="A"&&l.jsx(Zv,{}),s==="B"&&l.jsx(o_,{}),s==="C"&&l.jsx(c_,{}),s==="D"&&l.jsx(Rb,{})]})};Qg.createRoot(document.getElementById("root")).render(l.jsx(Wg.StrictMode,{children:l.jsx(Pb,{})}));
