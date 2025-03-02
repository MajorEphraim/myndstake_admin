(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Vb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var np={exports:{}},ru={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W0;function lI(){if(W0)return ru;W0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(a,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:n,type:a,key:c,ref:s!==void 0?s:null,props:l}}return ru.Fragment=e,ru.jsx=t,ru.jsxs=t,ru}var Z0;function uI(){return Z0||(Z0=1,np.exports=lI()),np.exports}var T=uI(),ip={exports:{}},Ce={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var J0;function cI(){if(J0)return Ce;J0=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),b=Symbol.iterator;function w(P){return P===null||typeof P!="object"?null:(P=b&&P[b]||P["@@iterator"],typeof P=="function"?P:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,H={};function k(P,ne,me){this.props=P,this.context=ne,this.refs=H,this.updater=me||N}k.prototype.isReactComponent={},k.prototype.setState=function(P,ne){if(typeof P!="object"&&typeof P!="function"&&P!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,P,ne,"setState")},k.prototype.forceUpdate=function(P){this.updater.enqueueForceUpdate(this,P,"forceUpdate")};function B(){}B.prototype=k.prototype;function W(P,ne,me){this.props=P,this.context=ne,this.refs=H,this.updater=me||N}var Q=W.prototype=new B;Q.constructor=W,x(Q,k.prototype),Q.isPureReactComponent=!0;var oe=Array.isArray,ae={H:null,A:null,T:null,S:null},Ee=Object.prototype.hasOwnProperty;function M(P,ne,me,le,ue,xe){return me=xe.ref,{$$typeof:n,type:P,key:ne,ref:me!==void 0?me:null,props:xe}}function I(P,ne){return M(P.type,ne,void 0,void 0,void 0,P.props)}function R(P){return typeof P=="object"&&P!==null&&P.$$typeof===n}function O(P){var ne={"=":"=0",":":"=2"};return"$"+P.replace(/[=:]/g,function(me){return ne[me]})}var L=/\/+/g;function q(P,ne){return typeof P=="object"&&P!==null&&P.key!=null?O(""+P.key):ne.toString(36)}function D(){}function St(P){switch(P.status){case"fulfilled":return P.value;case"rejected":throw P.reason;default:switch(typeof P.status=="string"?P.then(D,D):(P.status="pending",P.then(function(ne){P.status==="pending"&&(P.status="fulfilled",P.value=ne)},function(ne){P.status==="pending"&&(P.status="rejected",P.reason=ne)})),P.status){case"fulfilled":return P.value;case"rejected":throw P.reason}}throw P}function gt(P,ne,me,le,ue){var xe=typeof P;(xe==="undefined"||xe==="boolean")&&(P=null);var Ie=!1;if(P===null)Ie=!0;else switch(xe){case"bigint":case"string":case"number":Ie=!0;break;case"object":switch(P.$$typeof){case n:case e:Ie=!0;break;case _:return Ie=P._init,gt(Ie(P._payload),ne,me,le,ue)}}if(Ie)return ue=ue(P),Ie=le===""?"."+q(P,0):le,oe(ue)?(me="",Ie!=null&&(me=Ie.replace(L,"$&/")+"/"),gt(ue,ne,me,"",function(lt){return lt})):ue!=null&&(R(ue)&&(ue=I(ue,me+(ue.key==null||P&&P.key===ue.key?"":(""+ue.key).replace(L,"$&/")+"/")+Ie)),ne.push(ue)),1;Ie=0;var yt=le===""?".":le+":";if(oe(P))for(var Be=0;Be<P.length;Be++)le=P[Be],xe=yt+q(le,Be),Ie+=gt(le,ne,me,xe,ue);else if(Be=w(P),typeof Be=="function")for(P=Be.call(P),Be=0;!(le=P.next()).done;)le=le.value,xe=yt+q(le,Be++),Ie+=gt(le,ne,me,xe,ue);else if(xe==="object"){if(typeof P.then=="function")return gt(St(P),ne,me,le,ue);throw ne=String(P),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(P).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Ie}function se(P,ne,me){if(P==null)return P;var le=[],ue=0;return gt(P,le,"","",function(xe){return ne.call(me,xe,ue++)}),le}function Te(P){if(P._status===-1){var ne=P._result;ne=ne(),ne.then(function(me){(P._status===0||P._status===-1)&&(P._status=1,P._result=me)},function(me){(P._status===0||P._status===-1)&&(P._status=2,P._result=me)}),P._status===-1&&(P._status=0,P._result=ne)}if(P._status===1)return P._result.default;throw P._result}var ye=typeof reportError=="function"?reportError:function(P){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof P=="object"&&P!==null&&typeof P.message=="string"?String(P.message):String(P),error:P});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",P);return}console.error(P)};function Ke(){}return Ce.Children={map:se,forEach:function(P,ne,me){se(P,function(){ne.apply(this,arguments)},me)},count:function(P){var ne=0;return se(P,function(){ne++}),ne},toArray:function(P){return se(P,function(ne){return ne})||[]},only:function(P){if(!R(P))throw Error("React.Children.only expected to receive a single React element child.");return P}},Ce.Component=k,Ce.Fragment=t,Ce.Profiler=s,Ce.PureComponent=W,Ce.StrictMode=a,Ce.Suspense=p,Ce.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,Ce.act=function(){throw Error("act(...) is not supported in production builds of React.")},Ce.cache=function(P){return function(){return P.apply(null,arguments)}},Ce.cloneElement=function(P,ne,me){if(P==null)throw Error("The argument must be a React element, but you passed "+P+".");var le=x({},P.props),ue=P.key,xe=void 0;if(ne!=null)for(Ie in ne.ref!==void 0&&(xe=void 0),ne.key!==void 0&&(ue=""+ne.key),ne)!Ee.call(ne,Ie)||Ie==="key"||Ie==="__self"||Ie==="__source"||Ie==="ref"&&ne.ref===void 0||(le[Ie]=ne[Ie]);var Ie=arguments.length-2;if(Ie===1)le.children=me;else if(1<Ie){for(var yt=Array(Ie),Be=0;Be<Ie;Be++)yt[Be]=arguments[Be+2];le.children=yt}return M(P.type,ue,void 0,void 0,xe,le)},Ce.createContext=function(P){return P={$$typeof:c,_currentValue:P,_currentValue2:P,_threadCount:0,Provider:null,Consumer:null},P.Provider=P,P.Consumer={$$typeof:l,_context:P},P},Ce.createElement=function(P,ne,me){var le,ue={},xe=null;if(ne!=null)for(le in ne.key!==void 0&&(xe=""+ne.key),ne)Ee.call(ne,le)&&le!=="key"&&le!=="__self"&&le!=="__source"&&(ue[le]=ne[le]);var Ie=arguments.length-2;if(Ie===1)ue.children=me;else if(1<Ie){for(var yt=Array(Ie),Be=0;Be<Ie;Be++)yt[Be]=arguments[Be+2];ue.children=yt}if(P&&P.defaultProps)for(le in Ie=P.defaultProps,Ie)ue[le]===void 0&&(ue[le]=Ie[le]);return M(P,xe,void 0,void 0,null,ue)},Ce.createRef=function(){return{current:null}},Ce.forwardRef=function(P){return{$$typeof:d,render:P}},Ce.isValidElement=R,Ce.lazy=function(P){return{$$typeof:_,_payload:{_status:-1,_result:P},_init:Te}},Ce.memo=function(P,ne){return{$$typeof:g,type:P,compare:ne===void 0?null:ne}},Ce.startTransition=function(P){var ne=ae.T,me={};ae.T=me;try{var le=P(),ue=ae.S;ue!==null&&ue(me,le),typeof le=="object"&&le!==null&&typeof le.then=="function"&&le.then(Ke,ye)}catch(xe){ye(xe)}finally{ae.T=ne}},Ce.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},Ce.use=function(P){return ae.H.use(P)},Ce.useActionState=function(P,ne,me){return ae.H.useActionState(P,ne,me)},Ce.useCallback=function(P,ne){return ae.H.useCallback(P,ne)},Ce.useContext=function(P){return ae.H.useContext(P)},Ce.useDebugValue=function(){},Ce.useDeferredValue=function(P,ne){return ae.H.useDeferredValue(P,ne)},Ce.useEffect=function(P,ne){return ae.H.useEffect(P,ne)},Ce.useId=function(){return ae.H.useId()},Ce.useImperativeHandle=function(P,ne,me){return ae.H.useImperativeHandle(P,ne,me)},Ce.useInsertionEffect=function(P,ne){return ae.H.useInsertionEffect(P,ne)},Ce.useLayoutEffect=function(P,ne){return ae.H.useLayoutEffect(P,ne)},Ce.useMemo=function(P,ne){return ae.H.useMemo(P,ne)},Ce.useOptimistic=function(P,ne){return ae.H.useOptimistic(P,ne)},Ce.useReducer=function(P,ne,me){return ae.H.useReducer(P,ne,me)},Ce.useRef=function(P){return ae.H.useRef(P)},Ce.useState=function(P){return ae.H.useState(P)},Ce.useSyncExternalStore=function(P,ne,me){return ae.H.useSyncExternalStore(P,ne,me)},Ce.useTransition=function(){return ae.H.useTransition()},Ce.version="19.0.0",Ce}var eE;function Cg(){return eE||(eE=1,ip.exports=cI()),ip.exports}var j=Cg();const Lb=Vb(j);var rp={exports:{}},au={},ap={exports:{}},sp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tE;function fI(){return tE||(tE=1,function(n){function e(se,Te){var ye=se.length;se.push(Te);e:for(;0<ye;){var Ke=ye-1>>>1,P=se[Ke];if(0<s(P,Te))se[Ke]=Te,se[ye]=P,ye=Ke;else break e}}function t(se){return se.length===0?null:se[0]}function a(se){if(se.length===0)return null;var Te=se[0],ye=se.pop();if(ye!==Te){se[0]=ye;e:for(var Ke=0,P=se.length,ne=P>>>1;Ke<ne;){var me=2*(Ke+1)-1,le=se[me],ue=me+1,xe=se[ue];if(0>s(le,ye))ue<P&&0>s(xe,le)?(se[Ke]=xe,se[ue]=ye,Ke=ue):(se[Ke]=le,se[me]=ye,Ke=me);else if(ue<P&&0>s(xe,ye))se[Ke]=xe,se[ue]=ye,Ke=ue;else break e}}return Te}function s(se,Te){var ye=se.sortIndex-Te.sortIndex;return ye!==0?ye:se.id-Te.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var p=[],g=[],_=1,b=null,w=3,N=!1,x=!1,H=!1,k=typeof setTimeout=="function"?setTimeout:null,B=typeof clearTimeout=="function"?clearTimeout:null,W=typeof setImmediate<"u"?setImmediate:null;function Q(se){for(var Te=t(g);Te!==null;){if(Te.callback===null)a(g);else if(Te.startTime<=se)a(g),Te.sortIndex=Te.expirationTime,e(p,Te);else break;Te=t(g)}}function oe(se){if(H=!1,Q(se),!x)if(t(p)!==null)x=!0,St();else{var Te=t(g);Te!==null&&gt(oe,Te.startTime-se)}}var ae=!1,Ee=-1,M=5,I=-1;function R(){return!(n.unstable_now()-I<M)}function O(){if(ae){var se=n.unstable_now();I=se;var Te=!0;try{e:{x=!1,H&&(H=!1,B(Ee),Ee=-1),N=!0;var ye=w;try{t:{for(Q(se),b=t(p);b!==null&&!(b.expirationTime>se&&R());){var Ke=b.callback;if(typeof Ke=="function"){b.callback=null,w=b.priorityLevel;var P=Ke(b.expirationTime<=se);if(se=n.unstable_now(),typeof P=="function"){b.callback=P,Q(se),Te=!0;break t}b===t(p)&&a(p),Q(se)}else a(p);b=t(p)}if(b!==null)Te=!0;else{var ne=t(g);ne!==null&&gt(oe,ne.startTime-se),Te=!1}}break e}finally{b=null,w=ye,N=!1}Te=void 0}}finally{Te?L():ae=!1}}}var L;if(typeof W=="function")L=function(){W(O)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,D=q.port2;q.port1.onmessage=O,L=function(){D.postMessage(null)}}else L=function(){k(O,0)};function St(){ae||(ae=!0,L())}function gt(se,Te){Ee=k(function(){se(n.unstable_now())},Te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(se){se.callback=null},n.unstable_continueExecution=function(){x||N||(x=!0,St())},n.unstable_forceFrameRate=function(se){0>se||125<se?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<se?Math.floor(1e3/se):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_getFirstCallbackNode=function(){return t(p)},n.unstable_next=function(se){switch(w){case 1:case 2:case 3:var Te=3;break;default:Te=w}var ye=w;w=Te;try{return se()}finally{w=ye}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(se,Te){switch(se){case 1:case 2:case 3:case 4:case 5:break;default:se=3}var ye=w;w=se;try{return Te()}finally{w=ye}},n.unstable_scheduleCallback=function(se,Te,ye){var Ke=n.unstable_now();switch(typeof ye=="object"&&ye!==null?(ye=ye.delay,ye=typeof ye=="number"&&0<ye?Ke+ye:Ke):ye=Ke,se){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=ye+P,se={id:_++,callback:Te,priorityLevel:se,startTime:ye,expirationTime:P,sortIndex:-1},ye>Ke?(se.sortIndex=ye,e(g,se),t(p)===null&&se===t(g)&&(H?(B(Ee),Ee=-1):H=!0,gt(oe,ye-Ke))):(se.sortIndex=P,e(p,se),x||N||(x=!0,St())),se},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(se){var Te=w;return function(){var ye=w;w=Te;try{return se.apply(this,arguments)}finally{w=ye}}}}(sp)),sp}var nE;function hI(){return nE||(nE=1,ap.exports=fI()),ap.exports}var op={exports:{}},Wt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iE;function dI(){if(iE)return Wt;iE=1;var n=Cg();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var a={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(p,g,_){var b=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:b==null?null:""+b,children:p,containerInfo:g,implementation:_}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return Wt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,Wt.createPortal=function(p,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,_)},Wt.flushSync=function(p){var g=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=g,a.p=_,a.d.f()}},Wt.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,a.d.C(p,g))},Wt.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},Wt.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var _=g.as,b=d(_,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,N=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?a.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:b,integrity:w,fetchPriority:N}):_==="script"&&a.d.X(p,{crossOrigin:b,integrity:w,fetchPriority:N,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},Wt.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=d(g.as,g.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&a.d.M(p)},Wt.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,b=d(_,g.crossOrigin);a.d.L(p,_,{crossOrigin:b,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},Wt.preloadModule=function(p,g){if(typeof p=="string")if(g){var _=d(g.as,g.crossOrigin);a.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else a.d.m(p)},Wt.requestFormReset=function(p){a.d.r(p)},Wt.unstable_batchedUpdates=function(p,g){return p(g)},Wt.useFormState=function(p,g,_){return c.H.useFormState(p,g,_)},Wt.useFormStatus=function(){return c.H.useHostTransitionStatus()},Wt.version="19.0.0",Wt}var rE;function mI(){if(rE)return op.exports;rE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),op.exports=dI(),op.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var aE;function pI(){if(aE)return au;aE=1;var n=hI(),e=Cg(),t=mI();function a(i){var r="https://react.dev/errors/"+i;if(1<arguments.length){r+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+i+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}var l=Symbol.for("react.element"),c=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),g=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),w=Symbol.for("react.consumer"),N=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),H=Symbol.for("react.suspense"),k=Symbol.for("react.suspense_list"),B=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),Q=Symbol.for("react.offscreen"),oe=Symbol.for("react.memo_cache_sentinel"),ae=Symbol.iterator;function Ee(i){return i===null||typeof i!="object"?null:(i=ae&&i[ae]||i["@@iterator"],typeof i=="function"?i:null)}var M=Symbol.for("react.client.reference");function I(i){if(i==null)return null;if(typeof i=="function")return i.$$typeof===M?null:i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case p:return"Fragment";case d:return"Portal";case _:return"Profiler";case g:return"StrictMode";case H:return"Suspense";case k:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case N:return(i.displayName||"Context")+".Provider";case w:return(i._context.displayName||"Context")+".Consumer";case x:var r=i.render;return i=i.displayName,i||(i=r.displayName||r.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case B:return r=i.displayName||null,r!==null?r:I(i.type)||"Memo";case W:r=i._payload,i=i._init;try{return I(i(r))}catch{}}return null}var R=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=Object.assign,L,q;function D(i){if(L===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||"",q=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+L+i+q}var St=!1;function gt(i,r){if(!i||St)return"";St=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(r){var te=function(){throw Error()};if(Object.defineProperty(te.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(te,[])}catch(Y){var K=Y}Reflect.construct(i,[],te)}else{try{te.call()}catch(Y){K=Y}i.call(te.prototype)}}else{try{throw Error()}catch(Y){K=Y}(te=i())&&typeof te.catch=="function"&&te.catch(function(){})}}catch(Y){if(Y&&K&&typeof Y.stack=="string")return[Y.stack,K.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],A=m[1];if(E&&A){var C=E.split(`
`),U=A.split(`
`);for(h=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;h<U.length&&!U[h].includes("DetermineComponentFrameRoot");)h++;if(u===C.length||h===U.length)for(u=C.length-1,h=U.length-1;1<=u&&0<=h&&C[u]!==U[h];)h--;for(;1<=u&&0<=h;u--,h--)if(C[u]!==U[h]){if(u!==1||h!==1)do if(u--,h--,0>h||C[u]!==U[h]){var X=`
`+C[u].replace(" at new "," at ");return i.displayName&&X.includes("<anonymous>")&&(X=X.replace("<anonymous>",i.displayName)),X}while(1<=u&&0<=h);break}}}finally{St=!1,Error.prepareStackTrace=o}return(o=i?i.displayName||i.name:"")?D(o):""}function se(i){switch(i.tag){case 26:case 27:case 5:return D(i.type);case 16:return D("Lazy");case 13:return D("Suspense");case 19:return D("SuspenseList");case 0:case 15:return i=gt(i.type,!1),i;case 11:return i=gt(i.type.render,!1),i;case 1:return i=gt(i.type,!0),i;default:return""}}function Te(i){try{var r="";do r+=se(i),i=i.return;while(i);return r}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function ye(i){var r=i,o=i;if(i.alternate)for(;r.return;)r=r.return;else{i=r;do r=i,r.flags&4098&&(o=r.return),i=r.return;while(i)}return r.tag===3?o:null}function Ke(i){if(i.tag===13){var r=i.memoizedState;if(r===null&&(i=i.alternate,i!==null&&(r=i.memoizedState)),r!==null)return r.dehydrated}return null}function P(i){if(ye(i)!==i)throw Error(a(188))}function ne(i){var r=i.alternate;if(!r){if(r=ye(i),r===null)throw Error(a(188));return r!==i?null:i}for(var o=i,u=r;;){var h=o.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===o)return P(h),i;if(m===u)return P(h),r;m=m.sibling}throw Error(a(188))}if(o.return!==u.return)o=h,u=m;else{for(var E=!1,A=h.child;A;){if(A===o){E=!0,o=h,u=m;break}if(A===u){E=!0,u=h,o=m;break}A=A.sibling}if(!E){for(A=m.child;A;){if(A===o){E=!0,o=m,u=h;break}if(A===u){E=!0,u=m,o=h;break}A=A.sibling}if(!E)throw Error(a(189))}}if(o.alternate!==u)throw Error(a(190))}if(o.tag!==3)throw Error(a(188));return o.stateNode.current===o?i:r}function me(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i;for(i=i.child;i!==null;){if(r=me(i),r!==null)return r;i=i.sibling}return null}var le=Array.isArray,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,xe={pending:!1,data:null,method:null,action:null},Ie=[],yt=-1;function Be(i){return{current:i}}function lt(i){0>yt||(i.current=Ie[yt],Ie[yt]=null,yt--)}function Qe(i,r){yt++,Ie[yt]=i.current,i.current=r}var rn=Be(null),Li=Be(null),xn=Be(null),br=Be(null);function Ar(i,r){switch(Qe(xn,r),Qe(Li,i),Qe(rn,null),i=r.nodeType,i){case 9:case 11:r=(r=r.documentElement)&&(r=r.namespaceURI)?R0(r):0;break;default:if(i=i===8?r.parentNode:r,r=i.tagName,i=i.namespaceURI)i=R0(i),r=I0(i,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}lt(rn),Qe(rn,r)}function Ui(){lt(rn),lt(Li),lt(xn)}function Jo(i){i.memoizedState!==null&&Qe(br,i);var r=rn.current,o=I0(r,i.type);r!==o&&(Qe(Li,i),Qe(rn,o))}function Ns(i){Li.current===i&&(lt(rn),lt(Li)),br.current===i&&(lt(br),Jl._currentValue=xe)}var Os=Object.prototype.hasOwnProperty,ka=n.unstable_scheduleCallback,Ds=n.unstable_cancelCallback,rd=n.unstable_shouldYield,el=n.unstable_requestPaint,fn=n.unstable_now,tc=n.unstable_getCurrentPriorityLevel,Rt=n.unstable_ImmediatePriority,Pt=n.unstable_UserBlockingPriority,ji=n.unstable_NormalPriority,nc=n.unstable_LowPriority,tl=n.unstable_IdlePriority,ad=n.log,Pa=n.unstable_setDisableYieldValue,wr=null,Qt=null;function nl(i){if(Qt&&typeof Qt.onCommitFiberRoot=="function")try{Qt.onCommitFiberRoot(wr,i,void 0,(i.current.flags&128)===128)}catch{}}function si(i){if(typeof ad=="function"&&Pa(i),Qt&&typeof Qt.setStrictMode=="function")try{Qt.setStrictMode(wr,i)}catch{}}var an=Math.clz32?Math.clz32:rc,il=Math.log,ic=Math.LN2;function rc(i){return i>>>=0,i===0?32:31-(il(i)/ic|0)|0}var oi=128,Sr=4194304;function Qn(i){var r=i&42;if(r!==0)return r;switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return i&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return i}}function Nn(i,r){var o=i.pendingLanes;if(o===0)return 0;var u=0,h=i.suspendedLanes,m=i.pingedLanes,E=i.warmLanes;i=i.finishedLanes!==0;var A=o&134217727;return A!==0?(o=A&~h,o!==0?u=Qn(o):(m&=A,m!==0?u=Qn(m):i||(E=A&~E,E!==0&&(u=Qn(E))))):(A=o&~h,A!==0?u=Qn(A):m!==0?u=Qn(m):i||(E=o&~E,E!==0&&(u=Qn(E)))),u===0?0:r!==0&&r!==u&&!(r&h)&&(h=u&-u,E=r&-r,h>=E||h===32&&(E&4194176)!==0)?r:u}function Rr(i,r){return(i.pendingLanes&~(i.suspendedLanes&~i.pingedLanes)&r)===0}function ks(i,r){switch(i){case 1:case 2:case 4:case 8:return r+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rl(){var i=oi;return oi<<=1,!(oi&4194176)&&(oi=128),i}function Ir(){var i=Sr;return Sr<<=1,!(Sr&62914560)&&(Sr=4194304),i}function Ps(i){for(var r=[],o=0;31>o;o++)r.push(i);return r}function dt(i,r){i.pendingLanes|=r,r!==268435456&&(i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0)}function ac(i,r,o,u,h,m){var E=i.pendingLanes;i.pendingLanes=o,i.suspendedLanes=0,i.pingedLanes=0,i.warmLanes=0,i.expiredLanes&=o,i.entangledLanes&=o,i.errorRecoveryDisabledLanes&=o,i.shellSuspendCounter=0;var A=i.entanglements,C=i.expirationTimes,U=i.hiddenUpdates;for(o=E&~o;0<o;){var X=31-an(o),te=1<<X;A[X]=0,C[X]=-1;var K=U[X];if(K!==null)for(U[X]=null,X=0;X<K.length;X++){var Y=K[X];Y!==null&&(Y.lane&=-536870913)}o&=~te}u!==0&&Cr(i,u,0),m!==0&&h===0&&i.tag!==0&&(i.suspendedLanes|=m&~(E&~r))}function Cr(i,r,o){i.pendingLanes|=r,i.suspendedLanes&=~r;var u=31-an(r);i.entangledLanes|=r,i.entanglements[u]=i.entanglements[u]|1073741824|o&4194218}function xr(i,r){var o=i.entangledLanes|=r;for(i=i.entanglements;o;){var u=31-an(o),h=1<<u;h&r|i[u]&r&&(i[u]|=r),o&=~h}}function sc(i){return i&=-i,2<i?8<i?i&134217727?32:268435456:8:2}function oc(){var i=ue.p;return i!==0?i:(i=window.event,i===void 0?32:G0(i.type))}function Nr(i,r){var o=ue.p;try{return ue.p=i,r()}finally{ue.p=o}}var li=Math.random().toString(36).slice(2),Mt="__reactFiber$"+li,It="__reactProps$"+li,zi="__reactContainer$"+li,Ma="__reactEvents$"+li,Ms="__reactListeners$"+li,ui="__reactHandles$"+li,al="__reactResources$"+li,Or="__reactMarker$"+li;function Va(i){delete i[Mt],delete i[It],delete i[Ma],delete i[Ms],delete i[ui]}function Xn(i){var r=i[Mt];if(r)return r;for(var o=i.parentNode;o;){if(r=o[zi]||o[Mt]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(i=N0(i);i!==null;){if(o=i[Mt])return o;i=N0(i)}return r}i=o,o=i.parentNode}return null}function Fi(i){if(i=i[Mt]||i[zi]){var r=i.tag;if(r===5||r===6||r===13||r===26||r===27||r===3)return i}return null}function Dr(i){var r=i.tag;if(r===5||r===26||r===27||r===6)return i.stateNode;throw Error(a(33))}function kr(i){var r=i[al];return r||(r=i[al]={hoistableStyles:new Map,hoistableScripts:new Map}),r}function it(i){i[Or]=!0}var sl=new Set,Vs={};function _n(i,r){hn(i,r),hn(i+"Capture",r)}function hn(i,r){for(Vs[i]=r,i=0;i<r.length;i++)sl.add(r[i])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ol={},ll={};function lc(i){return Os.call(ll,i)?!0:Os.call(ol,i)?!1:sd.test(i)?ll[i]=!0:(ol[i]=!0,!1)}function Pr(i,r,o){if(lc(r))if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":i.removeAttribute(r);return;case"boolean":var u=r.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){i.removeAttribute(r);return}}i.setAttribute(r,""+o)}}function Mr(i,r,o){if(o===null)i.removeAttribute(r);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(r);return}i.setAttribute(r,""+o)}}function On(i,r,o,u){if(u===null)i.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":i.removeAttribute(o);return}i.setAttributeNS(r,o,""+u)}}function sn(i){switch(typeof i){case"bigint":case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function uc(i){var r=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function od(i){var r=uc(i)?"checked":"value",o=Object.getOwnPropertyDescriptor(i.constructor.prototype,r),u=""+i[r];if(!i.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,m=o.set;return Object.defineProperty(i,r,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,m.call(this,E)}}),Object.defineProperty(i,r,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){i._valueTracker=null,delete i[r]}}}}function La(i){i._valueTracker||(i._valueTracker=od(i))}function ul(i){if(!i)return!1;var r=i._valueTracker;if(!r)return!0;var o=r.getValue(),u="";return i&&(u=uc(i)?i.checked?"true":"false":i.value),i=u,i!==o?(r.setValue(i),!0):!1}function Ls(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}var Bi=/[\n"\\]/g;function ut(i){return i.replace(Bi,function(r){return"\\"+r.charCodeAt(0).toString(16)+" "})}function Vr(i,r,o,u,h,m,E,A){i.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?i.type=E:i.removeAttribute("type"),r!=null?E==="number"?(r===0&&i.value===""||i.value!=r)&&(i.value=""+sn(r)):i.value!==""+sn(r)&&(i.value=""+sn(r)):E!=="submit"&&E!=="reset"||i.removeAttribute("value"),r!=null?Us(i,E,sn(r)):o!=null?Us(i,E,sn(o)):u!=null&&i.removeAttribute("value"),h==null&&m!=null&&(i.defaultChecked=!!m),h!=null&&(i.checked=h&&typeof h!="function"&&typeof h!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?i.name=""+sn(A):i.removeAttribute("name")}function Ua(i,r,o,u,h,m,E,A){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(i.type=m),r!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||r!=null))return;o=o!=null?""+sn(o):"",r=r!=null?""+sn(r):o,A||r===i.value||(i.value=r),i.defaultValue=r}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,i.checked=A?i.checked:!!u,i.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(i.name=E)}function Us(i,r,o){r==="number"&&Ls(i.ownerDocument)===i||i.defaultValue===""+o||(i.defaultValue=""+o)}function qe(i,r,o,u){if(i=i.options,r){r={};for(var h=0;h<o.length;h++)r["$"+o[h]]=!0;for(o=0;o<i.length;o++)h=r.hasOwnProperty("$"+i[o].value),i[o].selected!==h&&(i[o].selected=h),h&&u&&(i[o].defaultSelected=!0)}else{for(o=""+sn(o),r=null,h=0;h<i.length;h++){if(i[h].value===o){i[h].selected=!0,u&&(i[h].defaultSelected=!0);return}r!==null||i[h].disabled||(r=i[h])}r!==null&&(r.selected=!0)}}function ja(i,r,o){if(r!=null&&(r=""+sn(r),r!==i.value&&(i.value=r),o==null)){i.defaultValue!==r&&(i.defaultValue=r);return}i.defaultValue=o!=null?""+sn(o):""}function Lr(i,r,o,u){if(r==null){if(u!=null){if(o!=null)throw Error(a(92));if(le(u)){if(1<u.length)throw Error(a(93));u=u[0]}o=u}o==null&&(o=""),r=o}o=sn(r),i.defaultValue=o,u=i.textContent,u===o&&u!==""&&u!==null&&(i.value=u)}function Dn(i,r){if(r){var o=i.firstChild;if(o&&o===i.lastChild&&o.nodeType===3){o.nodeValue=r;return}}i.textContent=r}var ld=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function cl(i,r,o){var u=r.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?i.setProperty(r,""):r==="float"?i.cssFloat="":i[r]="":u?i.setProperty(r,o):typeof o!="number"||o===0||ld.has(r)?r==="float"?i.cssFloat=o:i[r]=(""+o).trim():i[r]=o+"px"}function cc(i,r,o){if(r!=null&&typeof r!="object")throw Error(a(62));if(i=i.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||r!=null&&r.hasOwnProperty(u)||(u.indexOf("--")===0?i.setProperty(u,""):u==="float"?i.cssFloat="":i[u]="");for(var h in r)u=r[h],r.hasOwnProperty(h)&&o[h]!==u&&cl(i,h,u)}else for(var m in r)r.hasOwnProperty(m)&&cl(i,m,r[m])}function fl(i){if(i.indexOf("-")===-1)return!1;switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ud=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),cd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ci(i){return cd.test(""+i)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":i}var kn=null;function js(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var qi=null,Hi=null;function Gi(i){var r=Fi(i);if(r&&(i=r.stateNode)){var o=i[It]||null;e:switch(i=r.stateNode,r.type){case"input":if(Vr(i,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),r=o.name,o.type==="radio"&&r!=null){for(o=i;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+ut(""+r)+'"][type="radio"]'),r=0;r<o.length;r++){var u=o[r];if(u!==i&&u.form===i.form){var h=u[It]||null;if(!h)throw Error(a(90));Vr(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(r=0;r<o.length;r++)u=o[r],u.form===i.form&&ul(u)}break e;case"textarea":ja(i,o.value,o.defaultValue);break e;case"select":r=o.value,r!=null&&qe(i,!!o.multiple,r,!1)}}}var hl=!1;function fc(i,r,o){if(hl)return i(r,o);hl=!0;try{var u=i(r);return u}finally{if(hl=!1,(qi!==null||Hi!==null)&&(nf(),qi&&(r=qi,i=Hi,Hi=qi=null,Gi(r),i)))for(r=0;r<i.length;r++)Gi(i[r])}}function za(i,r){var o=i.stateNode;if(o===null)return null;var u=o[It]||null;if(u===null)return null;o=u[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(i=i.type,u=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!u;break e;default:i=!1}if(i)return null;if(o&&typeof o!="function")throw Error(a(231,r,typeof o));return o}var Pn=!1;if(En)try{var Fa={};Object.defineProperty(Fa,"passive",{get:function(){Pn=!0}}),window.addEventListener("test",Fa,Fa),window.removeEventListener("test",Fa,Fa)}catch{Pn=!1}var fi=null,Ur=null,Ki=null;function dl(){if(Ki)return Ki;var i,r=Ur,o=r.length,u,h="value"in fi?fi.value:fi.textContent,m=h.length;for(i=0;i<o&&r[i]===h[i];i++);var E=o-i;for(u=1;u<=E&&r[o-u]===h[m-u];u++);return Ki=h.slice(i,1<u?1-u:void 0)}function hi(i){var r=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&r===13&&(i=13)):i=r,i===10&&(i=13),32<=i||i===13?i:0}function di(){return!0}function ml(){return!1}function Vt(i){function r(o,u,h,m,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var A in i)i.hasOwnProperty(A)&&(o=i[A],this[A]=o?o(m):m[A]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?di:ml,this.isPropagationStopped=ml,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=di)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=di)},persist:function(){},isPersistent:di}),r}var $e={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zs=Vt($e),Ba=O({},$e,{view:0,detail:0}),hc=Vt(Ba),Fs,Bs,mi,qa=O({},Ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ka,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==mi&&(mi&&i.type==="mousemove"?(Fs=i.screenX-mi.screenX,Bs=i.screenY-mi.screenY):Bs=Fs=0,mi=i),Fs)},movementY:function(i){return"movementY"in i?i.movementY:Bs}}),Mn=Vt(qa),dc=O({},qa,{dataTransfer:0}),fd=Vt(dc),Ha=O({},Ba,{relatedTarget:0}),qs=Vt(Ha),pl=O({},$e,{animationName:0,elapsedTime:0,pseudoElement:0}),Hs=Vt(pl),mc=O({},$e,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),Gs=Vt(mc),hd=O({},$e,{data:0}),gl=Vt(hd),Ga={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function yl(i){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(i):(i=gc[i])?!!r[i]:!1}function Ka(){return yl}var yc=O({},Ba,{key:function(i){if(i.key){var r=Ga[i.key]||i.key;if(r!=="Unidentified")return r}return i.type==="keypress"?(i=hi(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?pc[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ka,charCode:function(i){return i.type==="keypress"?hi(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?hi(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Ks=Vt(yc),vc=O({},qa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vl=Vt(vc),$i=O({},Ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ka}),_c=Vt($i),Ec=O({},$e,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tc=Vt(Ec),bc=O({},qa,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),$s=Vt(bc),on=O({},$e,{newState:0,oldState:0}),Ac=Vt(on),wc=[9,13,27,32],pi=En&&"CompositionEvent"in window,f=null;En&&"documentMode"in document&&(f=document.documentMode);var y=En&&"TextEvent"in window&&!f,v=En&&(!pi||f&&8<f&&11>=f),S=" ",F=!1;function $(i,r){switch(i){case"keyup":return wc.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function re(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ue=!1;function Ct(i,r){switch(i){case"compositionend":return re(r);case"keypress":return r.which!==32?null:(F=!0,S);case"textInput":return i=r.data,i===S&&F?null:i;default:return null}}function je(i,r){if(Ue)return i==="compositionend"||!pi&&$(i,r)?(i=dl(),Ki=Ur=fi=null,Ue=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return v&&r.locale!=="ko"?null:r.data;default:return null}}var Lt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xt(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r==="input"?!!Lt[i.type]:r==="textarea"}function Yi(i,r,o,u){qi?Hi?Hi.push(u):Hi=[u]:qi=u,r=lf(r,"onChange"),0<r.length&&(o=new zs("onChange","change",null,o,u),i.push({event:o,listeners:r}))}var Bt=null,gi=null;function _l(i){T0(i,0)}function Sc(i){var r=Dr(i);if(ul(r))return i}function Xy(i,r){if(i==="change")return r}var Wy=!1;if(En){var dd;if(En){var md="oninput"in document;if(!md){var Zy=document.createElement("div");Zy.setAttribute("oninput","return;"),md=typeof Zy.oninput=="function"}dd=md}else dd=!1;Wy=dd&&(!document.documentMode||9<document.documentMode)}function Jy(){Bt&&(Bt.detachEvent("onpropertychange",ev),gi=Bt=null)}function ev(i){if(i.propertyName==="value"&&Sc(gi)){var r=[];Yi(r,gi,i,js(i)),fc(_l,r)}}function U1(i,r,o){i==="focusin"?(Jy(),Bt=r,gi=o,Bt.attachEvent("onpropertychange",ev)):i==="focusout"&&Jy()}function j1(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return Sc(gi)}function z1(i,r){if(i==="click")return Sc(r)}function F1(i,r){if(i==="input"||i==="change")return Sc(r)}function B1(i,r){return i===r&&(i!==0||1/i===1/r)||i!==i&&r!==r}var Tn=typeof Object.is=="function"?Object.is:B1;function El(i,r){if(Tn(i,r))return!0;if(typeof i!="object"||i===null||typeof r!="object"||r===null)return!1;var o=Object.keys(i),u=Object.keys(r);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!Os.call(r,h)||!Tn(i[h],r[h]))return!1}return!0}function tv(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function nv(i,r){var o=tv(i);i=0;for(var u;o;){if(o.nodeType===3){if(u=i+o.textContent.length,i<=r&&u>=r)return{node:o,offset:r-i};i=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=tv(o)}}function iv(i,r){return i&&r?i===r?!0:i&&i.nodeType===3?!1:r&&r.nodeType===3?iv(i,r.parentNode):"contains"in i?i.contains(r):i.compareDocumentPosition?!!(i.compareDocumentPosition(r)&16):!1:!1}function rv(i){i=i!=null&&i.ownerDocument!=null&&i.ownerDocument.defaultView!=null?i.ownerDocument.defaultView:window;for(var r=Ls(i.document);r instanceof i.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)i=r.contentWindow;else break;r=Ls(i.document)}return r}function pd(i){var r=i&&i.nodeName&&i.nodeName.toLowerCase();return r&&(r==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||r==="textarea"||i.contentEditable==="true")}function q1(i,r){var o=rv(r);r=i.focusedElem;var u=i.selectionRange;if(o!==r&&r&&r.ownerDocument&&iv(r.ownerDocument.documentElement,r)){if(u!==null&&pd(r)){if(i=u.start,o=u.end,o===void 0&&(o=i),"selectionStart"in r)r.selectionStart=i,r.selectionEnd=Math.min(o,r.value.length);else if(o=(i=r.ownerDocument||document)&&i.defaultView||window,o.getSelection){o=o.getSelection();var h=r.textContent.length,m=Math.min(u.start,h);u=u.end===void 0?m:Math.min(u.end,h),!o.extend&&m>u&&(h=u,u=m,m=h),h=nv(r,m);var E=nv(r,u);h&&E&&(o.rangeCount!==1||o.anchorNode!==h.node||o.anchorOffset!==h.offset||o.focusNode!==E.node||o.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),o.removeAllRanges(),m>u?(o.addRange(i),o.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),o.addRange(i)))}}for(i=[],o=r;o=o.parentNode;)o.nodeType===1&&i.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<i.length;r++)o=i[r],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var H1=En&&"documentMode"in document&&11>=document.documentMode,Ys=null,gd=null,Tl=null,yd=!1;function av(i,r,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;yd||Ys==null||Ys!==Ls(u)||(u=Ys,"selectionStart"in u&&pd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Tl&&El(Tl,u)||(Tl=u,u=lf(gd,"onSelect"),0<u.length&&(r=new zs("onSelect","select",null,r,o),i.push({event:r,listeners:u}),r.target=Ys)))}function $a(i,r){var o={};return o[i.toLowerCase()]=r.toLowerCase(),o["Webkit"+i]="webkit"+r,o["Moz"+i]="moz"+r,o}var Qs={animationend:$a("Animation","AnimationEnd"),animationiteration:$a("Animation","AnimationIteration"),animationstart:$a("Animation","AnimationStart"),transitionrun:$a("Transition","TransitionRun"),transitionstart:$a("Transition","TransitionStart"),transitioncancel:$a("Transition","TransitionCancel"),transitionend:$a("Transition","TransitionEnd")},vd={},sv={};En&&(sv=document.createElement("div").style,"AnimationEvent"in window||(delete Qs.animationend.animation,delete Qs.animationiteration.animation,delete Qs.animationstart.animation),"TransitionEvent"in window||delete Qs.transitionend.transition);function Ya(i){if(vd[i])return vd[i];if(!Qs[i])return i;var r=Qs[i],o;for(o in r)if(r.hasOwnProperty(o)&&o in sv)return vd[i]=r[o];return i}var ov=Ya("animationend"),lv=Ya("animationiteration"),uv=Ya("animationstart"),G1=Ya("transitionrun"),K1=Ya("transitionstart"),$1=Ya("transitioncancel"),cv=Ya("transitionend"),fv=new Map,hv="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Wn(i,r){fv.set(i,r),_n(r,[i])}var Vn=[],Xs=0,_d=0;function Rc(){for(var i=Xs,r=_d=Xs=0;r<i;){var o=Vn[r];Vn[r++]=null;var u=Vn[r];Vn[r++]=null;var h=Vn[r];Vn[r++]=null;var m=Vn[r];if(Vn[r++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&dv(o,h,m)}}function Ic(i,r,o,u){Vn[Xs++]=i,Vn[Xs++]=r,Vn[Xs++]=o,Vn[Xs++]=u,_d|=u,i.lanes|=u,i=i.alternate,i!==null&&(i.lanes|=u)}function Ed(i,r,o,u){return Ic(i,r,o,u),Cc(i)}function jr(i,r){return Ic(i,null,null,r),Cc(i)}function dv(i,r,o){i.lanes|=o;var u=i.alternate;u!==null&&(u.lanes|=o);for(var h=!1,m=i.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(i=m.stateNode,i===null||i._visibility&1||(h=!0)),i=m,m=m.return;h&&r!==null&&i.tag===3&&(m=i.stateNode,h=31-an(o),m=m.hiddenUpdates,i=m[h],i===null?m[h]=[r]:i.push(r),r.lane=o|536870912)}function Cc(i){if(50<Kl)throw Kl=0,Rm=null,Error(a(185));for(var r=i.return;r!==null;)i=r,r=i.return;return i.tag===3?i.stateNode:null}var Ws={},mv=new WeakMap;function Ln(i,r){if(typeof i=="object"&&i!==null){var o=mv.get(i);return o!==void 0?o:(r={value:i,source:r,stack:Te(r)},mv.set(i,r),r)}return{value:i,source:r,stack:Te(r)}}var Zs=[],Js=0,xc=null,Nc=0,Un=[],jn=0,Qa=null,Qi=1,Xi="";function Xa(i,r){Zs[Js++]=Nc,Zs[Js++]=xc,xc=i,Nc=r}function pv(i,r,o){Un[jn++]=Qi,Un[jn++]=Xi,Un[jn++]=Qa,Qa=i;var u=Qi;i=Xi;var h=32-an(u)-1;u&=~(1<<h),o+=1;var m=32-an(r)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,Qi=1<<32-an(r)+h|o<<h|u,Xi=m+i}else Qi=1<<m|o<<h|u,Xi=i}function Td(i){i.return!==null&&(Xa(i,1),pv(i,1,0))}function bd(i){for(;i===xc;)xc=Zs[--Js],Zs[Js]=null,Nc=Zs[--Js],Zs[Js]=null;for(;i===Qa;)Qa=Un[--jn],Un[jn]=null,Xi=Un[--jn],Un[jn]=null,Qi=Un[--jn],Un[jn]=null}var ln=null,qt=null,He=!1,Zn=null,yi=!1,Ad=Error(a(519));function Wa(i){var r=Error(a(418,""));throw wl(Ln(r,i)),Ad}function gv(i){var r=i.stateNode,o=i.type,u=i.memoizedProps;switch(r[Mt]=i,r[It]=u,o){case"dialog":Ve("cancel",r),Ve("close",r);break;case"iframe":case"object":case"embed":Ve("load",r);break;case"video":case"audio":for(o=0;o<Yl.length;o++)Ve(Yl[o],r);break;case"source":Ve("error",r);break;case"img":case"image":case"link":Ve("error",r),Ve("load",r);break;case"details":Ve("toggle",r);break;case"input":Ve("invalid",r),Ua(r,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),La(r);break;case"select":Ve("invalid",r);break;case"textarea":Ve("invalid",r),Lr(r,u.value,u.defaultValue,u.children),La(r)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||r.textContent===""+o||u.suppressHydrationWarning===!0||S0(r.textContent,o)?(u.popover!=null&&(Ve("beforetoggle",r),Ve("toggle",r)),u.onScroll!=null&&Ve("scroll",r),u.onScrollEnd!=null&&Ve("scrollend",r),u.onClick!=null&&(r.onclick=uf),r=!0):r=!1,r||Wa(i)}function yv(i){for(ln=i.return;ln;)switch(ln.tag){case 3:case 27:yi=!0;return;case 5:case 13:yi=!1;return;default:ln=ln.return}}function bl(i){if(i!==ln)return!1;if(!He)return yv(i),He=!0,!1;var r=!1,o;if((o=i.tag!==3&&i.tag!==27)&&((o=i.tag===5)&&(o=i.type,o=!(o!=="form"&&o!=="button")||qm(i.type,i.memoizedProps)),o=!o),o&&(r=!0),r&&qt&&Wa(i),yv(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(a(317));e:{for(i=i.nextSibling,r=0;i;){if(i.nodeType===8)if(o=i.data,o==="/$"){if(r===0){qt=ei(i.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++;i=i.nextSibling}qt=null}}else qt=ln?ei(i.stateNode.nextSibling):null;return!0}function Al(){qt=ln=null,He=!1}function wl(i){Zn===null?Zn=[i]:Zn.push(i)}var Sl=Error(a(460)),vv=Error(a(474)),wd={then:function(){}};function _v(i){return i=i.status,i==="fulfilled"||i==="rejected"}function Oc(){}function Ev(i,r,o){switch(o=i[o],o===void 0?i.push(r):o!==r&&(r.then(Oc,Oc),r=o),r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i===Sl?Error(a(483)):i;default:if(typeof r.status=="string")r.then(Oc,Oc);else{if(i=Je,i!==null&&100<i.shellSuspendCounter)throw Error(a(482));i=r,i.status="pending",i.then(function(u){if(r.status==="pending"){var h=r;h.status="fulfilled",h.value=u}},function(u){if(r.status==="pending"){var h=r;h.status="rejected",h.reason=u}})}switch(r.status){case"fulfilled":return r.value;case"rejected":throw i=r.reason,i===Sl?Error(a(483)):i}throw Rl=r,Sl}}var Rl=null;function Tv(){if(Rl===null)throw Error(a(459));var i=Rl;return Rl=null,i}var eo=null,Il=0;function Dc(i){var r=Il;return Il+=1,eo===null&&(eo=[]),Ev(eo,i,r)}function Cl(i,r){r=r.props.ref,i.ref=r!==void 0?r:null}function kc(i,r){throw r.$$typeof===l?Error(a(525)):(i=Object.prototype.toString.call(r),Error(a(31,i==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":i)))}function bv(i){var r=i._init;return r(i._payload)}function Av(i){function r(z,V){if(i){var G=z.deletions;G===null?(z.deletions=[V],z.flags|=16):G.push(V)}}function o(z,V){if(!i)return null;for(;V!==null;)r(z,V),V=V.sibling;return null}function u(z){for(var V=new Map;z!==null;)z.key!==null?V.set(z.key,z):V.set(z.index,z),z=z.sibling;return V}function h(z,V){return z=Wr(z,V),z.index=0,z.sibling=null,z}function m(z,V,G){return z.index=G,i?(G=z.alternate,G!==null?(G=G.index,G<V?(z.flags|=33554434,V):G):(z.flags|=33554434,V)):(z.flags|=1048576,V)}function E(z){return i&&z.alternate===null&&(z.flags|=33554434),z}function A(z,V,G,Z){return V===null||V.tag!==6?(V=vm(G,z.mode,Z),V.return=z,V):(V=h(V,G),V.return=z,V)}function C(z,V,G,Z){var he=G.type;return he===p?X(z,V,G.props.children,Z,G.key):V!==null&&(V.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===W&&bv(he)===V.type)?(V=h(V,G.props),Cl(V,G),V.return=z,V):(V=Wc(G.type,G.key,G.props,null,z.mode,Z),Cl(V,G),V.return=z,V)}function U(z,V,G,Z){return V===null||V.tag!==4||V.stateNode.containerInfo!==G.containerInfo||V.stateNode.implementation!==G.implementation?(V=_m(G,z.mode,Z),V.return=z,V):(V=h(V,G.children||[]),V.return=z,V)}function X(z,V,G,Z,he){return V===null||V.tag!==7?(V=os(G,z.mode,Z,he),V.return=z,V):(V=h(V,G),V.return=z,V)}function te(z,V,G){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=vm(""+V,z.mode,G),V.return=z,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case c:return G=Wc(V.type,V.key,V.props,null,z.mode,G),Cl(G,V),G.return=z,G;case d:return V=_m(V,z.mode,G),V.return=z,V;case W:var Z=V._init;return V=Z(V._payload),te(z,V,G)}if(le(V)||Ee(V))return V=os(V,z.mode,G,null),V.return=z,V;if(typeof V.then=="function")return te(z,Dc(V),G);if(V.$$typeof===N)return te(z,Yc(z,V),G);kc(z,V)}return null}function K(z,V,G,Z){var he=V!==null?V.key:null;if(typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint")return he!==null?null:A(z,V,""+G,Z);if(typeof G=="object"&&G!==null){switch(G.$$typeof){case c:return G.key===he?C(z,V,G,Z):null;case d:return G.key===he?U(z,V,G,Z):null;case W:return he=G._init,G=he(G._payload),K(z,V,G,Z)}if(le(G)||Ee(G))return he!==null?null:X(z,V,G,Z,null);if(typeof G.then=="function")return K(z,V,Dc(G),Z);if(G.$$typeof===N)return K(z,V,Yc(z,G),Z);kc(z,G)}return null}function Y(z,V,G,Z,he){if(typeof Z=="string"&&Z!==""||typeof Z=="number"||typeof Z=="bigint")return z=z.get(G)||null,A(V,z,""+Z,he);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case c:return z=z.get(Z.key===null?G:Z.key)||null,C(V,z,Z,he);case d:return z=z.get(Z.key===null?G:Z.key)||null,U(V,z,Z,he);case W:var Oe=Z._init;return Z=Oe(Z._payload),Y(z,V,G,Z,he)}if(le(Z)||Ee(Z))return z=z.get(G)||null,X(V,z,Z,he,null);if(typeof Z.then=="function")return Y(z,V,G,Dc(Z),he);if(Z.$$typeof===N)return Y(z,V,G,Yc(V,Z),he);kc(V,Z)}return null}function de(z,V,G,Z){for(var he=null,Oe=null,ge=V,_e=V=0,zt=null;ge!==null&&_e<G.length;_e++){ge.index>_e?(zt=ge,ge=null):zt=ge.sibling;var Ge=K(z,ge,G[_e],Z);if(Ge===null){ge===null&&(ge=zt);break}i&&ge&&Ge.alternate===null&&r(z,ge),V=m(Ge,V,_e),Oe===null?he=Ge:Oe.sibling=Ge,Oe=Ge,ge=zt}if(_e===G.length)return o(z,ge),He&&Xa(z,_e),he;if(ge===null){for(;_e<G.length;_e++)ge=te(z,G[_e],Z),ge!==null&&(V=m(ge,V,_e),Oe===null?he=ge:Oe.sibling=ge,Oe=ge);return He&&Xa(z,_e),he}for(ge=u(ge);_e<G.length;_e++)zt=Y(ge,z,_e,G[_e],Z),zt!==null&&(i&&zt.alternate!==null&&ge.delete(zt.key===null?_e:zt.key),V=m(zt,V,_e),Oe===null?he=zt:Oe.sibling=zt,Oe=zt);return i&&ge.forEach(function(ra){return r(z,ra)}),He&&Xa(z,_e),he}function Se(z,V,G,Z){if(G==null)throw Error(a(151));for(var he=null,Oe=null,ge=V,_e=V=0,zt=null,Ge=G.next();ge!==null&&!Ge.done;_e++,Ge=G.next()){ge.index>_e?(zt=ge,ge=null):zt=ge.sibling;var ra=K(z,ge,Ge.value,Z);if(ra===null){ge===null&&(ge=zt);break}i&&ge&&ra.alternate===null&&r(z,ge),V=m(ra,V,_e),Oe===null?he=ra:Oe.sibling=ra,Oe=ra,ge=zt}if(Ge.done)return o(z,ge),He&&Xa(z,_e),he;if(ge===null){for(;!Ge.done;_e++,Ge=G.next())Ge=te(z,Ge.value,Z),Ge!==null&&(V=m(Ge,V,_e),Oe===null?he=Ge:Oe.sibling=Ge,Oe=Ge);return He&&Xa(z,_e),he}for(ge=u(ge);!Ge.done;_e++,Ge=G.next())Ge=Y(ge,z,_e,Ge.value,Z),Ge!==null&&(i&&Ge.alternate!==null&&ge.delete(Ge.key===null?_e:Ge.key),V=m(Ge,V,_e),Oe===null?he=Ge:Oe.sibling=Ge,Oe=Ge);return i&&ge.forEach(function(oI){return r(z,oI)}),He&&Xa(z,_e),he}function ht(z,V,G,Z){if(typeof G=="object"&&G!==null&&G.type===p&&G.key===null&&(G=G.props.children),typeof G=="object"&&G!==null){switch(G.$$typeof){case c:e:{for(var he=G.key;V!==null;){if(V.key===he){if(he=G.type,he===p){if(V.tag===7){o(z,V.sibling),Z=h(V,G.props.children),Z.return=z,z=Z;break e}}else if(V.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===W&&bv(he)===V.type){o(z,V.sibling),Z=h(V,G.props),Cl(Z,G),Z.return=z,z=Z;break e}o(z,V);break}else r(z,V);V=V.sibling}G.type===p?(Z=os(G.props.children,z.mode,Z,G.key),Z.return=z,z=Z):(Z=Wc(G.type,G.key,G.props,null,z.mode,Z),Cl(Z,G),Z.return=z,z=Z)}return E(z);case d:e:{for(he=G.key;V!==null;){if(V.key===he)if(V.tag===4&&V.stateNode.containerInfo===G.containerInfo&&V.stateNode.implementation===G.implementation){o(z,V.sibling),Z=h(V,G.children||[]),Z.return=z,z=Z;break e}else{o(z,V);break}else r(z,V);V=V.sibling}Z=_m(G,z.mode,Z),Z.return=z,z=Z}return E(z);case W:return he=G._init,G=he(G._payload),ht(z,V,G,Z)}if(le(G))return de(z,V,G,Z);if(Ee(G)){if(he=Ee(G),typeof he!="function")throw Error(a(150));return G=he.call(G),Se(z,V,G,Z)}if(typeof G.then=="function")return ht(z,V,Dc(G),Z);if(G.$$typeof===N)return ht(z,V,Yc(z,G),Z);kc(z,G)}return typeof G=="string"&&G!==""||typeof G=="number"||typeof G=="bigint"?(G=""+G,V!==null&&V.tag===6?(o(z,V.sibling),Z=h(V,G),Z.return=z,z=Z):(o(z,V),Z=vm(G,z.mode,Z),Z.return=z,z=Z),E(z)):o(z,V)}return function(z,V,G,Z){try{Il=0;var he=ht(z,V,G,Z);return eo=null,he}catch(ge){if(ge===Sl)throw ge;var Oe=qn(29,ge,null,z.mode);return Oe.lanes=Z,Oe.return=z,Oe}finally{}}}var Za=Av(!0),wv=Av(!1),to=Be(null),Pc=Be(0);function Sv(i,r){i=or,Qe(Pc,i),Qe(to,r),or=i|r.baseLanes}function Sd(){Qe(Pc,or),Qe(to,to.current)}function Rd(){or=Pc.current,lt(to),lt(Pc)}var zn=Be(null),vi=null;function zr(i){var r=i.alternate;Qe(Nt,Nt.current&1),Qe(zn,i),vi===null&&(r===null||to.current!==null||r.memoizedState!==null)&&(vi=i)}function Rv(i){if(i.tag===22){if(Qe(Nt,Nt.current),Qe(zn,i),vi===null){var r=i.alternate;r!==null&&r.memoizedState!==null&&(vi=i)}}else Fr()}function Fr(){Qe(Nt,Nt.current),Qe(zn,zn.current)}function Wi(i){lt(zn),vi===i&&(vi=null),lt(Nt)}var Nt=Be(0);function Mc(i){for(var r=i;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if(r.flags&128)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Y1=typeof AbortController<"u"?AbortController:function(){var i=[],r=this.signal={aborted:!1,addEventListener:function(o,u){i.push(u)}};this.abort=function(){r.aborted=!0,i.forEach(function(o){return o()})}},Q1=n.unstable_scheduleCallback,X1=n.unstable_NormalPriority,Ot={$$typeof:N,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Id(){return{controller:new Y1,data:new Map,refCount:0}}function xl(i){i.refCount--,i.refCount===0&&Q1(X1,function(){i.controller.abort()})}var Nl=null,Cd=0,no=0,io=null;function W1(i,r){if(Nl===null){var o=Nl=[];Cd=0,no=Pm(),io={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Cd++,r.then(Iv,Iv),r}function Iv(){if(--Cd===0&&Nl!==null){io!==null&&(io.status="fulfilled");var i=Nl;Nl=null,no=0,io=null;for(var r=0;r<i.length;r++)(0,i[r])()}}function Z1(i,r){var o=[],u={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return i.then(function(){u.status="fulfilled",u.value=r;for(var h=0;h<o.length;h++)(0,o[h])(r)},function(h){for(u.status="rejected",u.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),u}var Cv=R.S;R.S=function(i,r){typeof r=="object"&&r!==null&&typeof r.then=="function"&&W1(i,r),Cv!==null&&Cv(i,r)};var Ja=Be(null);function xd(){var i=Ja.current;return i!==null?i:Je.pooledCache}function Vc(i,r){r===null?Qe(Ja,Ja.current):Qe(Ja,r.pool)}function xv(){var i=xd();return i===null?null:{parent:Ot._currentValue,pool:i}}var Br=0,Ne=null,Xe=null,vt=null,Lc=!1,ro=!1,es=!1,Uc=0,Ol=0,ao=null,J1=0;function mt(){throw Error(a(321))}function Nd(i,r){if(r===null)return!1;for(var o=0;o<r.length&&o<i.length;o++)if(!Tn(i[o],r[o]))return!1;return!0}function Od(i,r,o,u,h,m){return Br=m,Ne=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,R.H=i===null||i.memoizedState===null?ts:qr,es=!1,m=o(u,h),es=!1,ro&&(m=Ov(r,o,u,h)),Nv(i),m}function Nv(i){R.H=_i;var r=Xe!==null&&Xe.next!==null;if(Br=0,vt=Xe=Ne=null,Lc=!1,Ol=0,ao=null,r)throw Error(a(300));i===null||Ut||(i=i.dependencies,i!==null&&$c(i)&&(Ut=!0))}function Ov(i,r,o,u){Ne=i;var h=0;do{if(ro&&(ao=null),Ol=0,ro=!1,25<=h)throw Error(a(301));if(h+=1,vt=Xe=null,i.updateQueue!=null){var m=i.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}R.H=ns,m=r(o,u)}while(ro);return m}function eR(){var i=R.H,r=i.useState()[0];return r=typeof r.then=="function"?Dl(r):r,i=i.useState()[0],(Xe!==null?Xe.memoizedState:null)!==i&&(Ne.flags|=1024),r}function Dd(){var i=Uc!==0;return Uc=0,i}function kd(i,r,o){r.updateQueue=i.updateQueue,r.flags&=-2053,i.lanes&=~o}function Pd(i){if(Lc){for(i=i.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Lc=!1}Br=0,vt=Xe=Ne=null,ro=!1,Ol=Uc=0,ao=null}function dn(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vt===null?Ne.memoizedState=vt=i:vt=vt.next=i,vt}function _t(){if(Xe===null){var i=Ne.alternate;i=i!==null?i.memoizedState:null}else i=Xe.next;var r=vt===null?Ne.memoizedState:vt.next;if(r!==null)vt=r,Xe=i;else{if(i===null)throw Ne.alternate===null?Error(a(467)):Error(a(310));Xe=i,i={memoizedState:Xe.memoizedState,baseState:Xe.baseState,baseQueue:Xe.baseQueue,queue:Xe.queue,next:null},vt===null?Ne.memoizedState=vt=i:vt=vt.next=i}return vt}var jc;jc=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Dl(i){var r=Ol;return Ol+=1,ao===null&&(ao=[]),i=Ev(ao,i,r),r=Ne,(vt===null?r.memoizedState:vt.next)===null&&(r=r.alternate,R.H=r===null||r.memoizedState===null?ts:qr),i}function zc(i){if(i!==null&&typeof i=="object"){if(typeof i.then=="function")return Dl(i);if(i.$$typeof===N)return Xt(i)}throw Error(a(438,String(i)))}function Md(i){var r=null,o=Ne.updateQueue;if(o!==null&&(r=o.memoCache),r==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(r={data:u.data.map(function(h){return h.slice()}),index:0})))}if(r==null&&(r={data:[],index:0}),o===null&&(o=jc(),Ne.updateQueue=o),o.memoCache=r,o=r.data[r.index],o===void 0)for(o=r.data[r.index]=Array(i),u=0;u<i;u++)o[u]=oe;return r.index++,o}function Zi(i,r){return typeof r=="function"?r(i):r}function Fc(i){var r=_t();return Vd(r,Xe,i)}function Vd(i,r,o){var u=i.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=o;var h=i.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}r.baseQueue=h=m,u.pending=null}if(m=i.baseState,h===null)i.memoizedState=m;else{r=h.next;var A=E=null,C=null,U=r,X=!1;do{var te=U.lane&-536870913;if(te!==U.lane?(ze&te)===te:(Br&te)===te){var K=U.revertLane;if(K===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),te===no&&(X=!0);else if((Br&K)===K){U=U.next,K===no&&(X=!0);continue}else te={lane:0,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(A=C=te,E=m):C=C.next=te,Ne.lanes|=K,Zr|=K;te=U.action,es&&o(m,te),m=U.hasEagerState?U.eagerState:o(m,te)}else K={lane:te,revertLane:U.revertLane,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},C===null?(A=C=K,E=m):C=C.next=K,Ne.lanes|=te,Zr|=te;U=U.next}while(U!==null&&U!==r);if(C===null?E=m:C.next=A,!Tn(m,i.memoizedState)&&(Ut=!0,X&&(o=io,o!==null)))throw o;i.memoizedState=m,i.baseState=E,i.baseQueue=C,u.lastRenderedState=m}return h===null&&(u.lanes=0),[i.memoizedState,u.dispatch]}function Ld(i){var r=_t(),o=r.queue;if(o===null)throw Error(a(311));o.lastRenderedReducer=i;var u=o.dispatch,h=o.pending,m=r.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do m=i(m,E.action),E=E.next;while(E!==h);Tn(m,r.memoizedState)||(Ut=!0),r.memoizedState=m,r.baseQueue===null&&(r.baseState=m),o.lastRenderedState=m}return[m,u]}function Dv(i,r,o){var u=Ne,h=_t(),m=He;if(m){if(o===void 0)throw Error(a(407));o=o()}else o=r();var E=!Tn((Xe||h).memoizedState,o);if(E&&(h.memoizedState=o,Ut=!0),h=h.queue,zd(Mv.bind(null,u,h,i),[i]),h.getSnapshot!==r||E||vt!==null&&vt.memoizedState.tag&1){if(u.flags|=2048,so(9,Pv.bind(null,u,h,o,r),{destroy:void 0},null),Je===null)throw Error(a(349));m||Br&60||kv(u,r,o)}return o}function kv(i,r,o){i.flags|=16384,i={getSnapshot:r,value:o},r=Ne.updateQueue,r===null?(r=jc(),Ne.updateQueue=r,r.stores=[i]):(o=r.stores,o===null?r.stores=[i]:o.push(i))}function Pv(i,r,o,u){r.value=o,r.getSnapshot=u,Vv(r)&&Lv(i)}function Mv(i,r,o){return o(function(){Vv(r)&&Lv(i)})}function Vv(i){var r=i.getSnapshot;i=i.value;try{var o=r();return!Tn(i,o)}catch{return!0}}function Lv(i){var r=jr(i,2);r!==null&&un(r,i,2)}function Ud(i){var r=dn();if(typeof i=="function"){var o=i;if(i=o(),es){si(!0);try{o()}finally{si(!1)}}}return r.memoizedState=r.baseState=i,r.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:i},r}function Uv(i,r,o,u){return i.baseState=o,Vd(i,Xe,typeof u=="function"?u:Zi)}function tR(i,r,o,u,h){if(Hc(i))throw Error(a(485));if(i=r.action,i!==null){var m={payload:h,action:i,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};R.T!==null?o(!0):m.isTransition=!1,u(m),o=r.pending,o===null?(m.next=r.pending=m,jv(r,m)):(m.next=o.next,r.pending=o.next=m)}}function jv(i,r){var o=r.action,u=r.payload,h=i.state;if(r.isTransition){var m=R.T,E={};R.T=E;try{var A=o(h,u),C=R.S;C!==null&&C(E,A),zv(i,r,A)}catch(U){jd(i,r,U)}finally{R.T=m}}else try{m=o(h,u),zv(i,r,m)}catch(U){jd(i,r,U)}}function zv(i,r,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Fv(i,r,u)},function(u){return jd(i,r,u)}):Fv(i,r,o)}function Fv(i,r,o){r.status="fulfilled",r.value=o,Bv(r),i.state=o,r=i.pending,r!==null&&(o=r.next,o===r?i.pending=null:(o=o.next,r.next=o,jv(i,o)))}function jd(i,r,o){var u=i.pending;if(i.pending=null,u!==null){u=u.next;do r.status="rejected",r.reason=o,Bv(r),r=r.next;while(r!==u)}i.action=null}function Bv(i){i=i.listeners;for(var r=0;r<i.length;r++)(0,i[r])()}function qv(i,r){return r}function Hv(i,r){if(He){var o=Je.formState;if(o!==null){e:{var u=Ne;if(He){if(qt){t:{for(var h=qt,m=yi;h.nodeType!==8;){if(!m){h=null;break t}if(h=ei(h.nextSibling),h===null){h=null;break t}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){qt=ei(h.nextSibling),u=h.data==="F!";break e}}Wa(u)}u=!1}u&&(r=o[0])}}return o=dn(),o.memoizedState=o.baseState=r,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:qv,lastRenderedState:r},o.queue=u,o=l_.bind(null,Ne,u),u.dispatch=o,u=Ud(!1),m=Gd.bind(null,Ne,!1,u.queue),u=dn(),h={state:r,dispatch:null,action:i,pending:null},u.queue=h,o=tR.bind(null,Ne,h,m,o),h.dispatch=o,u.memoizedState=i,[r,o,!1]}function Gv(i){var r=_t();return Kv(r,Xe,i)}function Kv(i,r,o){r=Vd(i,r,qv)[0],i=Fc(Zi)[0],r=typeof r=="object"&&r!==null&&typeof r.then=="function"?Dl(r):r;var u=_t(),h=u.queue,m=h.dispatch;return o!==u.memoizedState&&(Ne.flags|=2048,so(9,nR.bind(null,h,o),{destroy:void 0},null)),[r,m,i]}function nR(i,r){i.action=r}function $v(i){var r=_t(),o=Xe;if(o!==null)return Kv(r,o,i);_t(),r=r.memoizedState,o=_t();var u=o.queue.dispatch;return o.memoizedState=i,[r,u,!1]}function so(i,r,o,u){return i={tag:i,create:r,inst:o,deps:u,next:null},r=Ne.updateQueue,r===null&&(r=jc(),Ne.updateQueue=r),o=r.lastEffect,o===null?r.lastEffect=i.next=i:(u=o.next,o.next=i,i.next=u,r.lastEffect=i),i}function Yv(){return _t().memoizedState}function Bc(i,r,o,u){var h=dn();Ne.flags|=i,h.memoizedState=so(1|r,o,{destroy:void 0},u===void 0?null:u)}function qc(i,r,o,u){var h=_t();u=u===void 0?null:u;var m=h.memoizedState.inst;Xe!==null&&u!==null&&Nd(u,Xe.memoizedState.deps)?h.memoizedState=so(r,o,m,u):(Ne.flags|=i,h.memoizedState=so(1|r,o,m,u))}function Qv(i,r){Bc(8390656,8,i,r)}function zd(i,r){qc(2048,8,i,r)}function Xv(i,r){return qc(4,2,i,r)}function Wv(i,r){return qc(4,4,i,r)}function Zv(i,r){if(typeof r=="function"){i=i();var o=r(i);return function(){typeof o=="function"?o():r(null)}}if(r!=null)return i=i(),r.current=i,function(){r.current=null}}function Jv(i,r,o){o=o!=null?o.concat([i]):null,qc(4,4,Zv.bind(null,r,i),o)}function Fd(){}function e_(i,r){var o=_t();r=r===void 0?null:r;var u=o.memoizedState;return r!==null&&Nd(r,u[1])?u[0]:(o.memoizedState=[i,r],i)}function t_(i,r){var o=_t();r=r===void 0?null:r;var u=o.memoizedState;if(r!==null&&Nd(r,u[1]))return u[0];if(u=i(),es){si(!0);try{i()}finally{si(!1)}}return o.memoizedState=[u,r],u}function Bd(i,r,o){return o===void 0||Br&1073741824?i.memoizedState=r:(i.memoizedState=o,i=i0(),Ne.lanes|=i,Zr|=i,o)}function n_(i,r,o,u){return Tn(o,r)?o:to.current!==null?(i=Bd(i,o,u),Tn(i,r)||(Ut=!0),i):Br&42?(i=i0(),Ne.lanes|=i,Zr|=i,r):(Ut=!0,i.memoizedState=o)}function i_(i,r,o,u,h){var m=ue.p;ue.p=m!==0&&8>m?m:8;var E=R.T,A={};R.T=A,Gd(i,!1,r,o);try{var C=h(),U=R.S;if(U!==null&&U(A,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var X=Z1(C,u);kl(i,r,X,Sn(i))}else kl(i,r,u,Sn(i))}catch(te){kl(i,r,{then:function(){},status:"rejected",reason:te},Sn())}finally{ue.p=m,R.T=E}}function iR(){}function qd(i,r,o,u){if(i.tag!==5)throw Error(a(476));var h=r_(i).queue;i_(i,h,r,xe,o===null?iR:function(){return a_(i),o(u)})}function r_(i){var r=i.memoizedState;if(r!==null)return r;r={memoizedState:xe,baseState:xe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:xe},next:null};var o={};return r.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:o},next:null},i.memoizedState=r,i=i.alternate,i!==null&&(i.memoizedState=r),r}function a_(i){var r=r_(i).next.queue;kl(i,r,{},Sn())}function Hd(){return Xt(Jl)}function s_(){return _t().memoizedState}function o_(){return _t().memoizedState}function rR(i){for(var r=i.return;r!==null;){switch(r.tag){case 24:case 3:var o=Sn();i=Kr(o);var u=$r(r,i,o);u!==null&&(un(u,r,o),Vl(u,r,o)),r={cache:Id()},i.payload=r;return}r=r.return}}function aR(i,r,o){var u=Sn();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},Hc(i)?u_(r,o):(o=Ed(i,r,o,u),o!==null&&(un(o,i,u),c_(o,r,u)))}function l_(i,r,o){var u=Sn();kl(i,r,o,u)}function kl(i,r,o,u){var h={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(Hc(i))u_(r,h);else{var m=i.alternate;if(i.lanes===0&&(m===null||m.lanes===0)&&(m=r.lastRenderedReducer,m!==null))try{var E=r.lastRenderedState,A=m(E,o);if(h.hasEagerState=!0,h.eagerState=A,Tn(A,E))return Ic(i,r,h,0),Je===null&&Rc(),!1}catch{}finally{}if(o=Ed(i,r,h,u),o!==null)return un(o,i,u),c_(o,r,u),!0}return!1}function Gd(i,r,o,u){if(u={lane:2,revertLane:Pm(),action:u,hasEagerState:!1,eagerState:null,next:null},Hc(i)){if(r)throw Error(a(479))}else r=Ed(i,o,u,2),r!==null&&un(r,i,2)}function Hc(i){var r=i.alternate;return i===Ne||r!==null&&r===Ne}function u_(i,r){ro=Lc=!0;var o=i.pending;o===null?r.next=r:(r.next=o.next,o.next=r),i.pending=r}function c_(i,r,o){if(o&4194176){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,xr(i,o)}}var _i={readContext:Xt,use:zc,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useLayoutEffect:mt,useInsertionEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useSyncExternalStore:mt,useId:mt};_i.useCacheRefresh=mt,_i.useMemoCache=mt,_i.useHostTransitionStatus=mt,_i.useFormState=mt,_i.useActionState=mt,_i.useOptimistic=mt;var ts={readContext:Xt,use:zc,useCallback:function(i,r){return dn().memoizedState=[i,r===void 0?null:r],i},useContext:Xt,useEffect:Qv,useImperativeHandle:function(i,r,o){o=o!=null?o.concat([i]):null,Bc(4194308,4,Zv.bind(null,r,i),o)},useLayoutEffect:function(i,r){return Bc(4194308,4,i,r)},useInsertionEffect:function(i,r){Bc(4,2,i,r)},useMemo:function(i,r){var o=dn();r=r===void 0?null:r;var u=i();if(es){si(!0);try{i()}finally{si(!1)}}return o.memoizedState=[u,r],u},useReducer:function(i,r,o){var u=dn();if(o!==void 0){var h=o(r);if(es){si(!0);try{o(r)}finally{si(!1)}}}else h=r;return u.memoizedState=u.baseState=h,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:h},u.queue=i,i=i.dispatch=aR.bind(null,Ne,i),[u.memoizedState,i]},useRef:function(i){var r=dn();return i={current:i},r.memoizedState=i},useState:function(i){i=Ud(i);var r=i.queue,o=l_.bind(null,Ne,r);return r.dispatch=o,[i.memoizedState,o]},useDebugValue:Fd,useDeferredValue:function(i,r){var o=dn();return Bd(o,i,r)},useTransition:function(){var i=Ud(!1);return i=i_.bind(null,Ne,i.queue,!0,!1),dn().memoizedState=i,[!1,i]},useSyncExternalStore:function(i,r,o){var u=Ne,h=dn();if(He){if(o===void 0)throw Error(a(407));o=o()}else{if(o=r(),Je===null)throw Error(a(349));ze&60||kv(u,r,o)}h.memoizedState=o;var m={value:o,getSnapshot:r};return h.queue=m,Qv(Mv.bind(null,u,m,i),[i]),u.flags|=2048,so(9,Pv.bind(null,u,m,o,r),{destroy:void 0},null),o},useId:function(){var i=dn(),r=Je.identifierPrefix;if(He){var o=Xi,u=Qi;o=(u&~(1<<32-an(u)-1)).toString(32)+o,r=":"+r+"R"+o,o=Uc++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=J1++,r=":"+r+"r"+o.toString(32)+":";return i.memoizedState=r},useCacheRefresh:function(){return dn().memoizedState=rR.bind(null,Ne)}};ts.useMemoCache=Md,ts.useHostTransitionStatus=Hd,ts.useFormState=Hv,ts.useActionState=Hv,ts.useOptimistic=function(i){var r=dn();r.memoizedState=r.baseState=i;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return r.queue=o,r=Gd.bind(null,Ne,!0,o),o.dispatch=r,[i,r]};var qr={readContext:Xt,use:zc,useCallback:e_,useContext:Xt,useEffect:zd,useImperativeHandle:Jv,useInsertionEffect:Xv,useLayoutEffect:Wv,useMemo:t_,useReducer:Fc,useRef:Yv,useState:function(){return Fc(Zi)},useDebugValue:Fd,useDeferredValue:function(i,r){var o=_t();return n_(o,Xe.memoizedState,i,r)},useTransition:function(){var i=Fc(Zi)[0],r=_t().memoizedState;return[typeof i=="boolean"?i:Dl(i),r]},useSyncExternalStore:Dv,useId:s_};qr.useCacheRefresh=o_,qr.useMemoCache=Md,qr.useHostTransitionStatus=Hd,qr.useFormState=Gv,qr.useActionState=Gv,qr.useOptimistic=function(i,r){var o=_t();return Uv(o,Xe,i,r)};var ns={readContext:Xt,use:zc,useCallback:e_,useContext:Xt,useEffect:zd,useImperativeHandle:Jv,useInsertionEffect:Xv,useLayoutEffect:Wv,useMemo:t_,useReducer:Ld,useRef:Yv,useState:function(){return Ld(Zi)},useDebugValue:Fd,useDeferredValue:function(i,r){var o=_t();return Xe===null?Bd(o,i,r):n_(o,Xe.memoizedState,i,r)},useTransition:function(){var i=Ld(Zi)[0],r=_t().memoizedState;return[typeof i=="boolean"?i:Dl(i),r]},useSyncExternalStore:Dv,useId:s_};ns.useCacheRefresh=o_,ns.useMemoCache=Md,ns.useHostTransitionStatus=Hd,ns.useFormState=$v,ns.useActionState=$v,ns.useOptimistic=function(i,r){var o=_t();return Xe!==null?Uv(o,Xe,i,r):(o.baseState=i,[i,o.queue.dispatch])};function Kd(i,r,o,u){r=i.memoizedState,o=o(u,r),o=o==null?r:O({},r,o),i.memoizedState=o,i.lanes===0&&(i.updateQueue.baseState=o)}var $d={isMounted:function(i){return(i=i._reactInternals)?ye(i)===i:!1},enqueueSetState:function(i,r,o){i=i._reactInternals;var u=Sn(),h=Kr(u);h.payload=r,o!=null&&(h.callback=o),r=$r(i,h,u),r!==null&&(un(r,i,u),Vl(r,i,u))},enqueueReplaceState:function(i,r,o){i=i._reactInternals;var u=Sn(),h=Kr(u);h.tag=1,h.payload=r,o!=null&&(h.callback=o),r=$r(i,h,u),r!==null&&(un(r,i,u),Vl(r,i,u))},enqueueForceUpdate:function(i,r){i=i._reactInternals;var o=Sn(),u=Kr(o);u.tag=2,r!=null&&(u.callback=r),r=$r(i,u,o),r!==null&&(un(r,i,o),Vl(r,i,o))}};function f_(i,r,o,u,h,m,E){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(u,m,E):r.prototype&&r.prototype.isPureReactComponent?!El(o,u)||!El(h,m):!0}function h_(i,r,o,u){i=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,u),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,u),r.state!==i&&$d.enqueueReplaceState(r,r.state,null)}function is(i,r){var o=r;if("ref"in r){o={};for(var u in r)u!=="ref"&&(o[u]=r[u])}if(i=i.defaultProps){o===r&&(o=O({},o));for(var h in i)o[h]===void 0&&(o[h]=i[h])}return o}var Gc=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var r=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(r))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function d_(i){Gc(i)}function m_(i){console.error(i)}function p_(i){Gc(i)}function Kc(i,r){try{var o=i.onUncaughtError;o(r.value,{componentStack:r.stack})}catch(u){setTimeout(function(){throw u})}}function g_(i,r,o){try{var u=i.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:r.tag===1?r.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Yd(i,r,o){return o=Kr(o),o.tag=3,o.payload={element:null},o.callback=function(){Kc(i,r)},o}function y_(i){return i=Kr(i),i.tag=3,i}function v_(i,r,o,u){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;i.payload=function(){return h(m)},i.callback=function(){g_(r,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(i.callback=function(){g_(r,o,u),typeof h!="function"&&(Jr===null?Jr=new Set([this]):Jr.add(this));var A=u.stack;this.componentDidCatch(u.value,{componentStack:A!==null?A:""})})}function sR(i,r,o,u,h){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(r=o.alternate,r!==null&&Ml(r,o,h,!0),o=zn.current,o!==null){switch(o.tag){case 13:return vi===null?xm():o.alternate===null&&ft===0&&(ft=3),o.flags&=-257,o.flags|=65536,o.lanes=h,u===wd?o.flags|=16384:(r=o.updateQueue,r===null?o.updateQueue=new Set([u]):r.add(u),Om(i,u,h)),!1;case 22:return o.flags|=65536,u===wd?o.flags|=16384:(r=o.updateQueue,r===null?(r={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=r):(o=r.retryQueue,o===null?r.retryQueue=new Set([u]):o.add(u)),Om(i,u,h)),!1}throw Error(a(435,o.tag))}return Om(i,u,h),xm(),!1}if(He)return r=zn.current,r!==null?(!(r.flags&65536)&&(r.flags|=256),r.flags|=65536,r.lanes=h,u!==Ad&&(i=Error(a(422),{cause:u}),wl(Ln(i,o)))):(u!==Ad&&(r=Error(a(423),{cause:u}),wl(Ln(r,o))),i=i.current.alternate,i.flags|=65536,h&=-h,i.lanes|=h,u=Ln(u,o),h=Yd(i.stateNode,u,h),um(i,h),ft!==4&&(ft=2)),!1;var m=Error(a(520),{cause:u});if(m=Ln(m,o),Hl===null?Hl=[m]:Hl.push(m),ft!==4&&(ft=2),r===null)return!0;u=Ln(u,o),o=r;do{switch(o.tag){case 3:return o.flags|=65536,i=h&-h,o.lanes|=i,i=Yd(o.stateNode,u,i),um(o,i),!1;case 1:if(r=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof r.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Jr===null||!Jr.has(m))))return o.flags|=65536,h&=-h,o.lanes|=h,h=y_(h),v_(h,i,o,u),um(o,h),!1}o=o.return}while(o!==null);return!1}var __=Error(a(461)),Ut=!1;function Ht(i,r,o,u){r.child=i===null?wv(r,null,o,u):Za(r,i.child,o,u)}function E_(i,r,o,u,h){o=o.render;var m=r.ref;if("ref"in u){var E={};for(var A in u)A!=="ref"&&(E[A]=u[A])}else E=u;return as(r),u=Od(i,r,o,E,m,h),A=Dd(),i!==null&&!Ut?(kd(i,r,h),Ji(i,r,h)):(He&&A&&Td(r),r.flags|=1,Ht(i,r,u,h),r.child)}function T_(i,r,o,u,h){if(i===null){var m=o.type;return typeof m=="function"&&!ym(m)&&m.defaultProps===void 0&&o.compare===null?(r.tag=15,r.type=m,b_(i,r,m,u,h)):(i=Wc(o.type,null,u,r,r.mode,h),i.ref=r.ref,i.return=r,r.child=i)}if(m=i.child,!im(i,h)){var E=m.memoizedProps;if(o=o.compare,o=o!==null?o:El,o(E,u)&&i.ref===r.ref)return Ji(i,r,h)}return r.flags|=1,i=Wr(m,u),i.ref=r.ref,i.return=r,r.child=i}function b_(i,r,o,u,h){if(i!==null){var m=i.memoizedProps;if(El(m,u)&&i.ref===r.ref)if(Ut=!1,r.pendingProps=u=m,im(i,h))i.flags&131072&&(Ut=!0);else return r.lanes=i.lanes,Ji(i,r,h)}return Qd(i,r,o,u,h)}function A_(i,r,o){var u=r.pendingProps,h=u.children,m=(r.stateNode._pendingVisibility&2)!==0,E=i!==null?i.memoizedState:null;if(Pl(i,r),u.mode==="hidden"||m){if(r.flags&128){if(u=E!==null?E.baseLanes|o:o,i!==null){for(h=r.child=i.child,m=0;h!==null;)m=m|h.lanes|h.childLanes,h=h.sibling;r.childLanes=m&~u}else r.childLanes=0,r.child=null;return w_(i,r,u,o)}if(o&536870912)r.memoizedState={baseLanes:0,cachePool:null},i!==null&&Vc(r,E!==null?E.cachePool:null),E!==null?Sv(r,E):Sd(),Rv(r);else return r.lanes=r.childLanes=536870912,w_(i,r,E!==null?E.baseLanes|o:o,o)}else E!==null?(Vc(r,E.cachePool),Sv(r,E),Fr(),r.memoizedState=null):(i!==null&&Vc(r,null),Sd(),Fr());return Ht(i,r,h,o),r.child}function w_(i,r,o,u){var h=xd();return h=h===null?null:{parent:Ot._currentValue,pool:h},r.memoizedState={baseLanes:o,cachePool:h},i!==null&&Vc(r,null),Sd(),Rv(r),i!==null&&Ml(i,r,u,!0),null}function Pl(i,r){var o=r.ref;if(o===null)i!==null&&i.ref!==null&&(r.flags|=2097664);else{if(typeof o!="function"&&typeof o!="object")throw Error(a(284));(i===null||i.ref!==o)&&(r.flags|=2097664)}}function Qd(i,r,o,u,h){return as(r),o=Od(i,r,o,u,void 0,h),u=Dd(),i!==null&&!Ut?(kd(i,r,h),Ji(i,r,h)):(He&&u&&Td(r),r.flags|=1,Ht(i,r,o,h),r.child)}function S_(i,r,o,u,h,m){return as(r),r.updateQueue=null,o=Ov(r,u,o,h),Nv(i),u=Dd(),i!==null&&!Ut?(kd(i,r,m),Ji(i,r,m)):(He&&u&&Td(r),r.flags|=1,Ht(i,r,o,m),r.child)}function R_(i,r,o,u,h){if(as(r),r.stateNode===null){var m=Ws,E=o.contextType;typeof E=="object"&&E!==null&&(m=Xt(E)),m=new o(u,m),r.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=$d,r.stateNode=m,m._reactInternals=r,m=r.stateNode,m.props=u,m.state=r.memoizedState,m.refs={},om(r),E=o.contextType,m.context=typeof E=="object"&&E!==null?Xt(E):Ws,m.state=r.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(Kd(r,o,E,u),m.state=r.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&$d.enqueueReplaceState(m,m.state,null),Ul(r,u,m,h),Ll(),m.state=r.memoizedState),typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!0}else if(i===null){m=r.stateNode;var A=r.memoizedProps,C=is(o,A);m.props=C;var U=m.context,X=o.contextType;E=Ws,typeof X=="object"&&X!==null&&(E=Xt(X));var te=o.getDerivedStateFromProps;X=typeof te=="function"||typeof m.getSnapshotBeforeUpdate=="function",A=r.pendingProps!==A,X||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(A||U!==E)&&h_(r,m,u,E),Gr=!1;var K=r.memoizedState;m.state=K,Ul(r,u,m,h),Ll(),U=r.memoizedState,A||K!==U||Gr?(typeof te=="function"&&(Kd(r,o,te,u),U=r.memoizedState),(C=Gr||f_(r,o,C,u,K,U,E))?(X||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(r.flags|=4194308)):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=u,r.memoizedState=U),m.props=u,m.state=U,m.context=E,u=C):(typeof m.componentDidMount=="function"&&(r.flags|=4194308),u=!1)}else{m=r.stateNode,lm(i,r),E=r.memoizedProps,X=is(o,E),m.props=X,te=r.pendingProps,K=m.context,U=o.contextType,C=Ws,typeof U=="object"&&U!==null&&(C=Xt(U)),A=o.getDerivedStateFromProps,(U=typeof A=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==te||K!==C)&&h_(r,m,u,C),Gr=!1,K=r.memoizedState,m.state=K,Ul(r,u,m,h),Ll();var Y=r.memoizedState;E!==te||K!==Y||Gr||i!==null&&i.dependencies!==null&&$c(i.dependencies)?(typeof A=="function"&&(Kd(r,o,A,u),Y=r.memoizedState),(X=Gr||f_(r,o,X,u,K,Y,C)||i!==null&&i.dependencies!==null&&$c(i.dependencies))?(U||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,Y,C),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,Y,C)),typeof m.componentDidUpdate=="function"&&(r.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&K===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&K===i.memoizedState||(r.flags|=1024),r.memoizedProps=u,r.memoizedState=Y),m.props=u,m.state=Y,m.context=C,u=X):(typeof m.componentDidUpdate!="function"||E===i.memoizedProps&&K===i.memoizedState||(r.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===i.memoizedProps&&K===i.memoizedState||(r.flags|=1024),u=!1)}return m=u,Pl(i,r),u=(r.flags&128)!==0,m||u?(m=r.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),r.flags|=1,i!==null&&u?(r.child=Za(r,i.child,null,h),r.child=Za(r,null,o,h)):Ht(i,r,o,h),r.memoizedState=m.state,i=r.child):i=Ji(i,r,h),i}function I_(i,r,o,u){return Al(),r.flags|=256,Ht(i,r,o,u),r.child}var Xd={dehydrated:null,treeContext:null,retryLane:0};function Wd(i){return{baseLanes:i,cachePool:xv()}}function Zd(i,r,o){return i=i!==null?i.childLanes&~o:0,r&&(i|=Hn),i}function C_(i,r,o){var u=r.pendingProps,h=!1,m=(r.flags&128)!==0,E;if((E=m)||(E=i!==null&&i.memoizedState===null?!1:(Nt.current&2)!==0),E&&(h=!0,r.flags&=-129),E=(r.flags&32)!==0,r.flags&=-33,i===null){if(He){if(h?zr(r):Fr(),He){var A=qt,C;if(C=A){e:{for(C=A,A=yi;C.nodeType!==8;){if(!A){A=null;break e}if(C=ei(C.nextSibling),C===null){A=null;break e}}A=C}A!==null?(r.memoizedState={dehydrated:A,treeContext:Qa!==null?{id:Qi,overflow:Xi}:null,retryLane:536870912},C=qn(18,null,null,0),C.stateNode=A,C.return=r,r.child=C,ln=r,qt=null,C=!0):C=!1}C||Wa(r)}if(A=r.memoizedState,A!==null&&(A=A.dehydrated,A!==null))return A.data==="$!"?r.lanes=16:r.lanes=536870912,null;Wi(r)}return A=u.children,u=u.fallback,h?(Fr(),h=r.mode,A=em({mode:"hidden",children:A},h),u=os(u,h,o,null),A.return=r,u.return=r,A.sibling=u,r.child=A,h=r.child,h.memoizedState=Wd(o),h.childLanes=Zd(i,E,o),r.memoizedState=Xd,u):(zr(r),Jd(r,A))}if(C=i.memoizedState,C!==null&&(A=C.dehydrated,A!==null)){if(m)r.flags&256?(zr(r),r.flags&=-257,r=tm(i,r,o)):r.memoizedState!==null?(Fr(),r.child=i.child,r.flags|=128,r=null):(Fr(),h=u.fallback,A=r.mode,u=em({mode:"visible",children:u.children},A),h=os(h,A,o,null),h.flags|=2,u.return=r,h.return=r,u.sibling=h,r.child=u,Za(r,i.child,null,o),u=r.child,u.memoizedState=Wd(o),u.childLanes=Zd(i,E,o),r.memoizedState=Xd,r=h);else if(zr(r),A.data==="$!"){if(E=A.nextSibling&&A.nextSibling.dataset,E)var U=E.dgst;E=U,u=Error(a(419)),u.stack="",u.digest=E,wl({value:u,source:null,stack:null}),r=tm(i,r,o)}else if(Ut||Ml(i,r,o,!1),E=(o&i.childLanes)!==0,Ut||E){if(E=Je,E!==null){if(u=o&-o,u&42)u=1;else switch(u){case 2:u=1;break;case 8:u=4;break;case 32:u=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:u=64;break;case 268435456:u=134217728;break;default:u=0}if(u=u&(E.suspendedLanes|o)?0:u,u!==0&&u!==C.retryLane)throw C.retryLane=u,jr(i,u),un(E,i,u),__}A.data==="$?"||xm(),r=tm(i,r,o)}else A.data==="$?"?(r.flags|=128,r.child=i.child,r=TR.bind(null,i),A._reactRetry=r,r=null):(i=C.treeContext,qt=ei(A.nextSibling),ln=r,He=!0,Zn=null,yi=!1,i!==null&&(Un[jn++]=Qi,Un[jn++]=Xi,Un[jn++]=Qa,Qi=i.id,Xi=i.overflow,Qa=r),r=Jd(r,u.children),r.flags|=4096);return r}return h?(Fr(),h=u.fallback,A=r.mode,C=i.child,U=C.sibling,u=Wr(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&31457280,U!==null?h=Wr(U,h):(h=os(h,A,o,null),h.flags|=2),h.return=r,u.return=r,u.sibling=h,r.child=u,u=h,h=r.child,A=i.child.memoizedState,A===null?A=Wd(o):(C=A.cachePool,C!==null?(U=Ot._currentValue,C=C.parent!==U?{parent:U,pool:U}:C):C=xv(),A={baseLanes:A.baseLanes|o,cachePool:C}),h.memoizedState=A,h.childLanes=Zd(i,E,o),r.memoizedState=Xd,u):(zr(r),o=i.child,i=o.sibling,o=Wr(o,{mode:"visible",children:u.children}),o.return=r,o.sibling=null,i!==null&&(E=r.deletions,E===null?(r.deletions=[i],r.flags|=16):E.push(i)),r.child=o,r.memoizedState=null,o)}function Jd(i,r){return r=em({mode:"visible",children:r},i.mode),r.return=i,i.child=r}function em(i,r){return e0(i,r,0,null)}function tm(i,r,o){return Za(r,i.child,null,o),i=Jd(r,r.pendingProps.children),i.flags|=2,r.memoizedState=null,i}function x_(i,r,o){i.lanes|=r;var u=i.alternate;u!==null&&(u.lanes|=r),am(i.return,r,o)}function nm(i,r,o,u,h){var m=i.memoizedState;m===null?i.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(m.isBackwards=r,m.rendering=null,m.renderingStartTime=0,m.last=u,m.tail=o,m.tailMode=h)}function N_(i,r,o){var u=r.pendingProps,h=u.revealOrder,m=u.tail;if(Ht(i,r,u.children,o),u=Nt.current,u&2)u=u&1|2,r.flags|=128;else{if(i!==null&&i.flags&128)e:for(i=r.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&x_(i,o,r);else if(i.tag===19)x_(i,o,r);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===r)break e;for(;i.sibling===null;){if(i.return===null||i.return===r)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}u&=1}switch(Qe(Nt,u),h){case"forwards":for(o=r.child,h=null;o!==null;)i=o.alternate,i!==null&&Mc(i)===null&&(h=o),o=o.sibling;o=h,o===null?(h=r.child,r.child=null):(h=o.sibling,o.sibling=null),nm(r,!1,h,o,m);break;case"backwards":for(o=null,h=r.child,r.child=null;h!==null;){if(i=h.alternate,i!==null&&Mc(i)===null){r.child=h;break}i=h.sibling,h.sibling=o,o=h,h=i}nm(r,!0,o,null,m);break;case"together":nm(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ji(i,r,o){if(i!==null&&(r.dependencies=i.dependencies),Zr|=r.lanes,!(o&r.childLanes))if(i!==null){if(Ml(i,r,o,!1),(o&r.childLanes)===0)return null}else return null;if(i!==null&&r.child!==i.child)throw Error(a(153));if(r.child!==null){for(i=r.child,o=Wr(i,i.pendingProps),r.child=o,o.return=r;i.sibling!==null;)i=i.sibling,o=o.sibling=Wr(i,i.pendingProps),o.return=r;o.sibling=null}return r.child}function im(i,r){return i.lanes&r?!0:(i=i.dependencies,!!(i!==null&&$c(i)))}function oR(i,r,o){switch(r.tag){case 3:Ar(r,r.stateNode.containerInfo),Hr(r,Ot,i.memoizedState.cache),Al();break;case 27:case 5:Jo(r);break;case 4:Ar(r,r.stateNode.containerInfo);break;case 10:Hr(r,r.type,r.memoizedProps.value);break;case 13:var u=r.memoizedState;if(u!==null)return u.dehydrated!==null?(zr(r),r.flags|=128,null):o&r.child.childLanes?C_(i,r,o):(zr(r),i=Ji(i,r,o),i!==null?i.sibling:null);zr(r);break;case 19:var h=(i.flags&128)!==0;if(u=(o&r.childLanes)!==0,u||(Ml(i,r,o,!1),u=(o&r.childLanes)!==0),h){if(u)return N_(i,r,o);r.flags|=128}if(h=r.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Qe(Nt,Nt.current),u)break;return null;case 22:case 23:return r.lanes=0,A_(i,r,o);case 24:Hr(r,Ot,i.memoizedState.cache)}return Ji(i,r,o)}function O_(i,r,o){if(i!==null)if(i.memoizedProps!==r.pendingProps)Ut=!0;else{if(!im(i,o)&&!(r.flags&128))return Ut=!1,oR(i,r,o);Ut=!!(i.flags&131072)}else Ut=!1,He&&r.flags&1048576&&pv(r,Nc,r.index);switch(r.lanes=0,r.tag){case 16:e:{i=r.pendingProps;var u=r.elementType,h=u._init;if(u=h(u._payload),r.type=u,typeof u=="function")ym(u)?(i=is(u,i),r.tag=1,r=R_(null,r,u,i,o)):(r.tag=0,r=Qd(null,r,u,i,o));else{if(u!=null){if(h=u.$$typeof,h===x){r.tag=11,r=E_(null,r,u,i,o);break e}else if(h===B){r.tag=14,r=T_(null,r,u,i,o);break e}}throw r=I(u)||u,Error(a(306,r,""))}}return r;case 0:return Qd(i,r,r.type,r.pendingProps,o);case 1:return u=r.type,h=is(u,r.pendingProps),R_(i,r,u,h,o);case 3:e:{if(Ar(r,r.stateNode.containerInfo),i===null)throw Error(a(387));var m=r.pendingProps;h=r.memoizedState,u=h.element,lm(i,r),Ul(r,m,null,o);var E=r.memoizedState;if(m=E.cache,Hr(r,Ot,m),m!==h.cache&&sm(r,[Ot],o,!0),Ll(),m=E.element,h.isDehydrated)if(h={element:m,isDehydrated:!1,cache:E.cache},r.updateQueue.baseState=h,r.memoizedState=h,r.flags&256){r=I_(i,r,m,o);break e}else if(m!==u){u=Ln(Error(a(424)),r),wl(u),r=I_(i,r,m,o);break e}else for(qt=ei(r.stateNode.containerInfo.firstChild),ln=r,He=!0,Zn=null,yi=!0,o=wv(r,null,m,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Al(),m===u){r=Ji(i,r,o);break e}Ht(i,r,m,o)}r=r.child}return r;case 26:return Pl(i,r),i===null?(o=P0(r.type,null,r.pendingProps,null))?r.memoizedState=o:He||(o=r.type,i=r.pendingProps,u=cf(xn.current).createElement(o),u[Mt]=r,u[It]=i,Gt(u,o,i),it(u),r.stateNode=u):r.memoizedState=P0(r.type,i.memoizedProps,r.pendingProps,i.memoizedState),null;case 27:return Jo(r),i===null&&He&&(u=r.stateNode=O0(r.type,r.pendingProps,xn.current),ln=r,yi=!0,qt=ei(u.firstChild)),u=r.pendingProps.children,i!==null||He?Ht(i,r,u,o):r.child=Za(r,null,u,o),Pl(i,r),r.child;case 5:return i===null&&He&&((h=u=qt)&&(u=LR(u,r.type,r.pendingProps,yi),u!==null?(r.stateNode=u,ln=r,qt=ei(u.firstChild),yi=!1,h=!0):h=!1),h||Wa(r)),Jo(r),h=r.type,m=r.pendingProps,E=i!==null?i.memoizedProps:null,u=m.children,qm(h,m)?u=null:E!==null&&qm(h,E)&&(r.flags|=32),r.memoizedState!==null&&(h=Od(i,r,eR,null,null,o),Jl._currentValue=h),Pl(i,r),Ht(i,r,u,o),r.child;case 6:return i===null&&He&&((i=o=qt)&&(o=UR(o,r.pendingProps,yi),o!==null?(r.stateNode=o,ln=r,qt=null,i=!0):i=!1),i||Wa(r)),null;case 13:return C_(i,r,o);case 4:return Ar(r,r.stateNode.containerInfo),u=r.pendingProps,i===null?r.child=Za(r,null,u,o):Ht(i,r,u,o),r.child;case 11:return E_(i,r,r.type,r.pendingProps,o);case 7:return Ht(i,r,r.pendingProps,o),r.child;case 8:return Ht(i,r,r.pendingProps.children,o),r.child;case 12:return Ht(i,r,r.pendingProps.children,o),r.child;case 10:return u=r.pendingProps,Hr(r,r.type,u.value),Ht(i,r,u.children,o),r.child;case 9:return h=r.type._context,u=r.pendingProps.children,as(r),h=Xt(h),u=u(h),r.flags|=1,Ht(i,r,u,o),r.child;case 14:return T_(i,r,r.type,r.pendingProps,o);case 15:return b_(i,r,r.type,r.pendingProps,o);case 19:return N_(i,r,o);case 22:return A_(i,r,o);case 24:return as(r),u=Xt(Ot),i===null?(h=xd(),h===null&&(h=Je,m=Id(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=o),h=m),r.memoizedState={parent:u,cache:h},om(r),Hr(r,Ot,h)):(i.lanes&o&&(lm(i,r),Ul(r,null,null,o),Ll()),h=i.memoizedState,m=r.memoizedState,h.parent!==u?(h={parent:u,cache:u},r.memoizedState=h,r.lanes===0&&(r.memoizedState=r.updateQueue.baseState=h),Hr(r,Ot,u)):(u=m.cache,Hr(r,Ot,u),u!==h.cache&&sm(r,[Ot],o,!0))),Ht(i,r,r.pendingProps.children,o),r.child;case 29:throw r.pendingProps}throw Error(a(156,r.tag))}var rm=Be(null),rs=null,er=null;function Hr(i,r,o){Qe(rm,r._currentValue),r._currentValue=o}function tr(i){i._currentValue=rm.current,lt(rm)}function am(i,r,o){for(;i!==null;){var u=i.alternate;if((i.childLanes&r)!==r?(i.childLanes|=r,u!==null&&(u.childLanes|=r)):u!==null&&(u.childLanes&r)!==r&&(u.childLanes|=r),i===o)break;i=i.return}}function sm(i,r,o,u){var h=i.child;for(h!==null&&(h.return=i);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;e:for(;m!==null;){var A=m;m=h;for(var C=0;C<r.length;C++)if(A.context===r[C]){m.lanes|=o,A=m.alternate,A!==null&&(A.lanes|=o),am(m.return,o,i),u||(E=null);break e}m=A.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=o,m=E.alternate,m!==null&&(m.lanes|=o),am(E,o,i),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===i){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function Ml(i,r,o,u){i=null;for(var h=r,m=!1;h!==null;){if(!m){if(h.flags&524288)m=!0;else if(h.flags&262144)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var A=h.type;Tn(h.pendingProps.value,E.value)||(i!==null?i.push(A):i=[A])}}else if(h===br.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(i!==null?i.push(Jl):i=[Jl])}h=h.return}i!==null&&sm(r,i,o,u),r.flags|=262144}function $c(i){for(i=i.firstContext;i!==null;){if(!Tn(i.context._currentValue,i.memoizedValue))return!0;i=i.next}return!1}function as(i){rs=i,er=null,i=i.dependencies,i!==null&&(i.firstContext=null)}function Xt(i){return D_(rs,i)}function Yc(i,r){return rs===null&&as(i),D_(i,r)}function D_(i,r){var o=r._currentValue;if(r={context:r,memoizedValue:o,next:null},er===null){if(i===null)throw Error(a(308));er=r,i.dependencies={lanes:0,firstContext:r},i.flags|=524288}else er=er.next=r;return o}var Gr=!1;function om(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function lm(i,r){i=i.updateQueue,r.updateQueue===i&&(r.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,callbacks:null})}function Kr(i){return{lane:i,tag:0,payload:null,callback:null,next:null}}function $r(i,r,o){var u=i.updateQueue;if(u===null)return null;if(u=u.shared,at&2){var h=u.pending;return h===null?r.next=r:(r.next=h.next,h.next=r),u.pending=r,r=Cc(i),dv(i,null,o),r}return Ic(i,u,r,o),Cc(i)}function Vl(i,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194176)!==0)){var u=r.lanes;u&=i.pendingLanes,o|=u,r.lanes=o,xr(i,o)}}function um(i,r){var o=i.updateQueue,u=i.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,o=o.next}while(o!==null);m===null?h=m=r:m=m.next=r}else h=m=r;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},i.updateQueue=o;return}i=o.lastBaseUpdate,i===null?o.firstBaseUpdate=r:i.next=r,o.lastBaseUpdate=r}var cm=!1;function Ll(){if(cm){var i=io;if(i!==null)throw i}}function Ul(i,r,o,u){cm=!1;var h=i.updateQueue;Gr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,A=h.shared.pending;if(A!==null){h.shared.pending=null;var C=A,U=C.next;C.next=null,E===null?m=U:E.next=U,E=C;var X=i.alternate;X!==null&&(X=X.updateQueue,A=X.lastBaseUpdate,A!==E&&(A===null?X.firstBaseUpdate=U:A.next=U,X.lastBaseUpdate=C))}if(m!==null){var te=h.baseState;E=0,X=U=C=null,A=m;do{var K=A.lane&-536870913,Y=K!==A.lane;if(Y?(ze&K)===K:(u&K)===K){K!==0&&K===no&&(cm=!0),X!==null&&(X=X.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});e:{var de=i,Se=A;K=r;var ht=o;switch(Se.tag){case 1:if(de=Se.payload,typeof de=="function"){te=de.call(ht,te,K);break e}te=de;break e;case 3:de.flags=de.flags&-65537|128;case 0:if(de=Se.payload,K=typeof de=="function"?de.call(ht,te,K):de,K==null)break e;te=O({},te,K);break e;case 2:Gr=!0}}K=A.callback,K!==null&&(i.flags|=64,Y&&(i.flags|=8192),Y=h.callbacks,Y===null?h.callbacks=[K]:Y.push(K))}else Y={lane:K,tag:A.tag,payload:A.payload,callback:A.callback,next:null},X===null?(U=X=Y,C=te):X=X.next=Y,E|=K;if(A=A.next,A===null){if(A=h.shared.pending,A===null)break;Y=A,A=Y.next,Y.next=null,h.lastBaseUpdate=Y,h.shared.pending=null}}while(!0);X===null&&(C=te),h.baseState=C,h.firstBaseUpdate=U,h.lastBaseUpdate=X,m===null&&(h.shared.lanes=0),Zr|=E,i.lanes=E,i.memoizedState=te}}function k_(i,r){if(typeof i!="function")throw Error(a(191,i));i.call(r)}function P_(i,r){var o=i.callbacks;if(o!==null)for(i.callbacks=null,i=0;i<o.length;i++)k_(o[i],r)}function jl(i,r){try{var o=r.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&i)===i){u=void 0;var m=o.create,E=o.inst;u=m(),E.destroy=u}o=o.next}while(o!==h)}}catch(A){Ze(r,r.return,A)}}function Yr(i,r,o){try{var u=r.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&i)===i){var E=u.inst,A=E.destroy;if(A!==void 0){E.destroy=void 0,h=r;var C=o;try{A()}catch(U){Ze(h,C,U)}}}u=u.next}while(u!==m)}}catch(U){Ze(r,r.return,U)}}function M_(i){var r=i.updateQueue;if(r!==null){var o=i.stateNode;try{P_(r,o)}catch(u){Ze(i,i.return,u)}}}function V_(i,r,o){o.props=is(i.type,i.memoizedProps),o.state=i.memoizedState;try{o.componentWillUnmount()}catch(u){Ze(i,r,u)}}function ss(i,r){try{var o=i.ref;if(o!==null){var u=i.stateNode;switch(i.tag){case 26:case 27:case 5:var h=u;break;default:h=u}typeof o=="function"?i.refCleanup=o(h):o.current=h}}catch(m){Ze(i,r,m)}}function bn(i,r){var o=i.ref,u=i.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(h){Ze(i,r,h)}finally{i.refCleanup=null,i=i.alternate,i!=null&&(i.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){Ze(i,r,h)}else o.current=null}function L_(i){var r=i.type,o=i.memoizedProps,u=i.stateNode;try{e:switch(r){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(h){Ze(i,i.return,h)}}function U_(i,r,o){try{var u=i.stateNode;DR(u,i.type,o,r),u[It]=r}catch(h){Ze(i,i.return,h)}}function j_(i){return i.tag===5||i.tag===3||i.tag===26||i.tag===27||i.tag===4}function fm(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||j_(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==27&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function hm(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(i,r):o.insertBefore(i,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(i,o)):(r=o,r.appendChild(i)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=uf));else if(u!==4&&u!==27&&(i=i.child,i!==null))for(hm(i,r,o),i=i.sibling;i!==null;)hm(i,r,o),i=i.sibling}function Qc(i,r,o){var u=i.tag;if(u===5||u===6)i=i.stateNode,r?o.insertBefore(i,r):o.appendChild(i);else if(u!==4&&u!==27&&(i=i.child,i!==null))for(Qc(i,r,o),i=i.sibling;i!==null;)Qc(i,r,o),i=i.sibling}var nr=!1,ct=!1,dm=!1,z_=typeof WeakSet=="function"?WeakSet:Set,jt=null,F_=!1;function lR(i,r){if(i=i.containerInfo,Fm=gf,i=rv(i),pd(i)){if("selectionStart"in i)var o={start:i.selectionStart,end:i.selectionEnd};else e:{o=(o=i.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var E=0,A=-1,C=-1,U=0,X=0,te=i,K=null;t:for(;;){for(var Y;te!==o||h!==0&&te.nodeType!==3||(A=E+h),te!==m||u!==0&&te.nodeType!==3||(C=E+u),te.nodeType===3&&(E+=te.nodeValue.length),(Y=te.firstChild)!==null;)K=te,te=Y;for(;;){if(te===i)break t;if(K===o&&++U===h&&(A=E),K===m&&++X===u&&(C=E),(Y=te.nextSibling)!==null)break;te=K,K=te.parentNode}te=Y}o=A===-1||C===-1?null:{start:A,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(Bm={focusedElem:i,selectionRange:o},gf=!1,jt=r;jt!==null;)if(r=jt,i=r.child,(r.subtreeFlags&1028)!==0&&i!==null)i.return=r,jt=i;else for(;jt!==null;){switch(r=jt,m=r.alternate,i=r.flags,r.tag){case 0:break;case 11:case 15:break;case 1:if(i&1024&&m!==null){i=void 0,o=r,h=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var de=is(o.type,h,o.elementType===o.type);i=u.getSnapshotBeforeUpdate(de,m),u.__reactInternalSnapshotBeforeUpdate=i}catch(Se){Ze(o,o.return,Se)}}break;case 3:if(i&1024){if(i=r.stateNode.containerInfo,o=i.nodeType,o===9)Km(i);else if(o===1)switch(i.nodeName){case"HEAD":case"HTML":case"BODY":Km(i);break;default:i.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(i&1024)throw Error(a(163))}if(i=r.sibling,i!==null){i.return=r.return,jt=i;break}jt=r.return}return de=F_,F_=!1,de}function B_(i,r,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:rr(i,o),u&4&&jl(5,o);break;case 1:if(rr(i,o),u&4)if(i=o.stateNode,r===null)try{i.componentDidMount()}catch(A){Ze(o,o.return,A)}else{var h=is(o.type,r.memoizedProps);r=r.memoizedState;try{i.componentDidUpdate(h,r,i.__reactInternalSnapshotBeforeUpdate)}catch(A){Ze(o,o.return,A)}}u&64&&M_(o),u&512&&ss(o,o.return);break;case 3:if(rr(i,o),u&64&&(u=o.updateQueue,u!==null)){if(i=null,o.child!==null)switch(o.child.tag){case 27:case 5:i=o.child.stateNode;break;case 1:i=o.child.stateNode}try{P_(u,i)}catch(A){Ze(o,o.return,A)}}break;case 26:rr(i,o),u&512&&ss(o,o.return);break;case 27:case 5:rr(i,o),r===null&&u&4&&L_(o),u&512&&ss(o,o.return);break;case 12:rr(i,o);break;case 13:rr(i,o),u&4&&G_(i,o);break;case 22:if(h=o.memoizedState!==null||nr,!h){r=r!==null&&r.memoizedState!==null||ct;var m=nr,E=ct;nr=h,(ct=r)&&!E?Qr(i,o,(o.subtreeFlags&8772)!==0):rr(i,o),nr=m,ct=E}u&512&&(o.memoizedProps.mode==="manual"?ss(o,o.return):bn(o,o.return));break;default:rr(i,o)}}function q_(i){var r=i.alternate;r!==null&&(i.alternate=null,q_(r)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(r=i.stateNode,r!==null&&Va(r)),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}var Et=null,An=!1;function ir(i,r,o){for(o=o.child;o!==null;)H_(i,r,o),o=o.sibling}function H_(i,r,o){if(Qt&&typeof Qt.onCommitFiberUnmount=="function")try{Qt.onCommitFiberUnmount(wr,o)}catch{}switch(o.tag){case 26:ct||bn(o,r),ir(i,r,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:ct||bn(o,r);var u=Et,h=An;for(Et=o.stateNode,ir(i,r,o),o=o.stateNode,r=o.attributes;r.length;)o.removeAttributeNode(r[0]);Va(o),Et=u,An=h;break;case 5:ct||bn(o,r);case 6:h=Et;var m=An;if(Et=null,ir(i,r,o),Et=h,An=m,Et!==null)if(An)try{i=Et,u=o.stateNode,i.nodeType===8?i.parentNode.removeChild(u):i.removeChild(u)}catch(E){Ze(o,r,E)}else try{Et.removeChild(o.stateNode)}catch(E){Ze(o,r,E)}break;case 18:Et!==null&&(An?(r=Et,o=o.stateNode,r.nodeType===8?Gm(r.parentNode,o):r.nodeType===1&&Gm(r,o),iu(r)):Gm(Et,o.stateNode));break;case 4:u=Et,h=An,Et=o.stateNode.containerInfo,An=!0,ir(i,r,o),Et=u,An=h;break;case 0:case 11:case 14:case 15:ct||Yr(2,o,r),ct||Yr(4,o,r),ir(i,r,o);break;case 1:ct||(bn(o,r),u=o.stateNode,typeof u.componentWillUnmount=="function"&&V_(o,r,u)),ir(i,r,o);break;case 21:ir(i,r,o);break;case 22:ct||bn(o,r),ct=(u=ct)||o.memoizedState!==null,ir(i,r,o),ct=u;break;default:ir(i,r,o)}}function G_(i,r){if(r.memoizedState===null&&(i=r.alternate,i!==null&&(i=i.memoizedState,i!==null&&(i=i.dehydrated,i!==null))))try{iu(i)}catch(o){Ze(r,r.return,o)}}function uR(i){switch(i.tag){case 13:case 19:var r=i.stateNode;return r===null&&(r=i.stateNode=new z_),r;case 22:return i=i.stateNode,r=i._retryCache,r===null&&(r=i._retryCache=new z_),r;default:throw Error(a(435,i.tag))}}function mm(i,r){var o=uR(i);r.forEach(function(u){var h=bR.bind(null,i,u);o.has(u)||(o.add(u),u.then(h,h))})}function Fn(i,r){var o=r.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],m=i,E=r,A=E;e:for(;A!==null;){switch(A.tag){case 27:case 5:Et=A.stateNode,An=!1;break e;case 3:Et=A.stateNode.containerInfo,An=!0;break e;case 4:Et=A.stateNode.containerInfo,An=!0;break e}A=A.return}if(Et===null)throw Error(a(160));H_(m,E,h),Et=null,An=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(r.subtreeFlags&13878)for(r=r.child;r!==null;)K_(r,i),r=r.sibling}var Jn=null;function K_(i,r){var o=i.alternate,u=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:Fn(r,i),Bn(i),u&4&&(Yr(3,i,i.return),jl(3,i),Yr(5,i,i.return));break;case 1:Fn(r,i),Bn(i),u&512&&(ct||o===null||bn(o,o.return)),u&64&&nr&&(i=i.updateQueue,i!==null&&(u=i.callbacks,u!==null&&(o=i.shared.hiddenCallbacks,i.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var h=Jn;if(Fn(r,i),Bn(i),u&512&&(ct||o===null||bn(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=i.memoizedState,o===null)if(u===null)if(i.stateNode===null){e:{u=i.type,o=i.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Or]||m[Mt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Gt(m,u,o),m[Mt]=i,it(m),u=m;break e;case"link":var E=L0("link","href",h).get(u+(o.href||""));if(E){for(var A=0;A<E.length;A++)if(m=E[A],m.getAttribute("href")===(o.href==null?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(A,1);break t}}m=h.createElement(u),Gt(m,u,o),h.head.appendChild(m);break;case"meta":if(E=L0("meta","content",h).get(u+(o.content||""))){for(A=0;A<E.length;A++)if(m=E[A],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(A,1);break t}}m=h.createElement(u),Gt(m,u,o),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[Mt]=i,it(m),u=m}i.stateNode=u}else U0(h,i.type,i.stateNode);else i.stateNode=V0(h,u,i.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?U0(h,i.type,i.stateNode):V0(h,u,i.memoizedProps)):u===null&&i.stateNode!==null&&U_(i,i.memoizedProps,o.memoizedProps)}break;case 27:if(u&4&&i.alternate===null){h=i.stateNode,m=i.memoizedProps;try{for(var C=h.firstChild;C;){var U=C.nextSibling,X=C.nodeName;C[Or]||X==="HEAD"||X==="BODY"||X==="SCRIPT"||X==="STYLE"||X==="LINK"&&C.rel.toLowerCase()==="stylesheet"||h.removeChild(C),C=U}for(var te=i.type,K=h.attributes;K.length;)h.removeAttributeNode(K[0]);Gt(h,te,m),h[Mt]=i,h[It]=m}catch(de){Ze(i,i.return,de)}}case 5:if(Fn(r,i),Bn(i),u&512&&(ct||o===null||bn(o,o.return)),i.flags&32){h=i.stateNode;try{Dn(h,"")}catch(de){Ze(i,i.return,de)}}u&4&&i.stateNode!=null&&(h=i.memoizedProps,U_(i,h,o!==null?o.memoizedProps:h)),u&1024&&(dm=!0);break;case 6:if(Fn(r,i),Bn(i),u&4){if(i.stateNode===null)throw Error(a(162));u=i.memoizedProps,o=i.stateNode;try{o.nodeValue=u}catch(de){Ze(i,i.return,de)}}break;case 3:if(df=null,h=Jn,Jn=ff(r.containerInfo),Fn(r,i),Jn=h,Bn(i),u&4&&o!==null&&o.memoizedState.isDehydrated)try{iu(r.containerInfo)}catch(de){Ze(i,i.return,de)}dm&&(dm=!1,$_(i));break;case 4:u=Jn,Jn=ff(i.stateNode.containerInfo),Fn(r,i),Bn(i),Jn=u;break;case 12:Fn(r,i),Bn(i);break;case 13:Fn(r,i),Bn(i),i.child.flags&8192&&i.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(Am=fn()),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,mm(i,u)));break;case 22:if(u&512&&(ct||o===null||bn(o,o.return)),C=i.memoizedState!==null,U=o!==null&&o.memoizedState!==null,X=nr,te=ct,nr=X||C,ct=te||U,Fn(r,i),ct=te,nr=X,Bn(i),r=i.stateNode,r._current=i,r._visibility&=-3,r._visibility|=r._pendingVisibility&2,u&8192&&(r._visibility=C?r._visibility&-2:r._visibility|1,C&&(r=nr||ct,o===null||U||r||oo(i)),i.memoizedProps===null||i.memoizedProps.mode!=="manual"))e:for(o=null,r=i;;){if(r.tag===5||r.tag===26||r.tag===27){if(o===null){U=o=r;try{if(h=U.stateNode,C)m=h.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none";else{E=U.stateNode,A=U.memoizedProps.style;var Y=A!=null&&A.hasOwnProperty("display")?A.display:null;E.style.display=Y==null||typeof Y=="boolean"?"":(""+Y).trim()}}catch(de){Ze(U,U.return,de)}}}else if(r.tag===6){if(o===null){U=r;try{U.stateNode.nodeValue=C?"":U.memoizedProps}catch(de){Ze(U,U.return,de)}}}else if((r.tag!==22&&r.tag!==23||r.memoizedState===null||r===i)&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===i)break e;for(;r.sibling===null;){if(r.return===null||r.return===i)break e;o===r&&(o=null),r=r.return}o===r&&(o=null),r.sibling.return=r.return,r=r.sibling}u&4&&(u=i.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,mm(i,o))));break;case 19:Fn(r,i),Bn(i),u&4&&(u=i.updateQueue,u!==null&&(i.updateQueue=null,mm(i,u)));break;case 21:break;default:Fn(r,i),Bn(i)}}function Bn(i){var r=i.flags;if(r&2){try{if(i.tag!==27){e:{for(var o=i.return;o!==null;){if(j_(o)){var u=o;break e}o=o.return}throw Error(a(160))}switch(u.tag){case 27:var h=u.stateNode,m=fm(i);Qc(i,m,h);break;case 5:var E=u.stateNode;u.flags&32&&(Dn(E,""),u.flags&=-33);var A=fm(i);Qc(i,A,E);break;case 3:case 4:var C=u.stateNode.containerInfo,U=fm(i);hm(i,U,C);break;default:throw Error(a(161))}}}catch(X){Ze(i,i.return,X)}i.flags&=-3}r&4096&&(i.flags&=-4097)}function $_(i){if(i.subtreeFlags&1024)for(i=i.child;i!==null;){var r=i;$_(r),r.tag===5&&r.flags&1024&&r.stateNode.reset(),i=i.sibling}}function rr(i,r){if(r.subtreeFlags&8772)for(r=r.child;r!==null;)B_(i,r.alternate,r),r=r.sibling}function oo(i){for(i=i.child;i!==null;){var r=i;switch(r.tag){case 0:case 11:case 14:case 15:Yr(4,r,r.return),oo(r);break;case 1:bn(r,r.return);var o=r.stateNode;typeof o.componentWillUnmount=="function"&&V_(r,r.return,o),oo(r);break;case 26:case 27:case 5:bn(r,r.return),oo(r);break;case 22:bn(r,r.return),r.memoizedState===null&&oo(r);break;default:oo(r)}i=i.sibling}}function Qr(i,r,o){for(o=o&&(r.subtreeFlags&8772)!==0,r=r.child;r!==null;){var u=r.alternate,h=i,m=r,E=m.flags;switch(m.tag){case 0:case 11:case 15:Qr(h,m,o),jl(4,m);break;case 1:if(Qr(h,m,o),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(U){Ze(u,u.return,U)}if(u=m,h=u.updateQueue,h!==null){var A=u.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)k_(C[h],A)}catch(U){Ze(u,u.return,U)}}o&&E&64&&M_(m),ss(m,m.return);break;case 26:case 27:case 5:Qr(h,m,o),o&&u===null&&E&4&&L_(m),ss(m,m.return);break;case 12:Qr(h,m,o);break;case 13:Qr(h,m,o),o&&E&4&&G_(h,m);break;case 22:m.memoizedState===null&&Qr(h,m,o),ss(m,m.return);break;default:Qr(h,m,o)}r=r.sibling}}function pm(i,r){var o=null;i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),i=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(i=r.memoizedState.cachePool.pool),i!==o&&(i!=null&&i.refCount++,o!=null&&xl(o))}function gm(i,r){i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&xl(i))}function Xr(i,r,o,u){if(r.subtreeFlags&10256)for(r=r.child;r!==null;)Y_(i,r,o,u),r=r.sibling}function Y_(i,r,o,u){var h=r.flags;switch(r.tag){case 0:case 11:case 15:Xr(i,r,o,u),h&2048&&jl(9,r);break;case 3:Xr(i,r,o,u),h&2048&&(i=null,r.alternate!==null&&(i=r.alternate.memoizedState.cache),r=r.memoizedState.cache,r!==i&&(r.refCount++,i!=null&&xl(i)));break;case 12:if(h&2048){Xr(i,r,o,u),i=r.stateNode;try{var m=r.memoizedProps,E=m.id,A=m.onPostCommit;typeof A=="function"&&A(E,r.alternate===null?"mount":"update",i.passiveEffectDuration,-0)}catch(C){Ze(r,r.return,C)}}else Xr(i,r,o,u);break;case 23:break;case 22:m=r.stateNode,r.memoizedState!==null?m._visibility&4?Xr(i,r,o,u):zl(i,r):m._visibility&4?Xr(i,r,o,u):(m._visibility|=4,lo(i,r,o,u,(r.subtreeFlags&10256)!==0)),h&2048&&pm(r.alternate,r);break;case 24:Xr(i,r,o,u),h&2048&&gm(r.alternate,r);break;default:Xr(i,r,o,u)}}function lo(i,r,o,u,h){for(h=h&&(r.subtreeFlags&10256)!==0,r=r.child;r!==null;){var m=i,E=r,A=o,C=u,U=E.flags;switch(E.tag){case 0:case 11:case 15:lo(m,E,A,C,h),jl(8,E);break;case 23:break;case 22:var X=E.stateNode;E.memoizedState!==null?X._visibility&4?lo(m,E,A,C,h):zl(m,E):(X._visibility|=4,lo(m,E,A,C,h)),h&&U&2048&&pm(E.alternate,E);break;case 24:lo(m,E,A,C,h),h&&U&2048&&gm(E.alternate,E);break;default:lo(m,E,A,C,h)}r=r.sibling}}function zl(i,r){if(r.subtreeFlags&10256)for(r=r.child;r!==null;){var o=i,u=r,h=u.flags;switch(u.tag){case 22:zl(o,u),h&2048&&pm(u.alternate,u);break;case 24:zl(o,u),h&2048&&gm(u.alternate,u);break;default:zl(o,u)}r=r.sibling}}var Fl=8192;function uo(i){if(i.subtreeFlags&Fl)for(i=i.child;i!==null;)Q_(i),i=i.sibling}function Q_(i){switch(i.tag){case 26:uo(i),i.flags&Fl&&i.memoizedState!==null&&WR(Jn,i.memoizedState,i.memoizedProps);break;case 5:uo(i);break;case 3:case 4:var r=Jn;Jn=ff(i.stateNode.containerInfo),uo(i),Jn=r;break;case 22:i.memoizedState===null&&(r=i.alternate,r!==null&&r.memoizedState!==null?(r=Fl,Fl=16777216,uo(i),Fl=r):uo(i));break;default:uo(i)}}function X_(i){var r=i.alternate;if(r!==null&&(i=r.child,i!==null)){r.child=null;do r=i.sibling,i.sibling=null,i=r;while(i!==null)}}function Bl(i){var r=i.deletions;if(i.flags&16){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];jt=u,Z_(u,i)}X_(i)}if(i.subtreeFlags&10256)for(i=i.child;i!==null;)W_(i),i=i.sibling}function W_(i){switch(i.tag){case 0:case 11:case 15:Bl(i),i.flags&2048&&Yr(9,i,i.return);break;case 3:Bl(i);break;case 12:Bl(i);break;case 22:var r=i.stateNode;i.memoizedState!==null&&r._visibility&4&&(i.return===null||i.return.tag!==13)?(r._visibility&=-5,Xc(i)):Bl(i);break;default:Bl(i)}}function Xc(i){var r=i.deletions;if(i.flags&16){if(r!==null)for(var o=0;o<r.length;o++){var u=r[o];jt=u,Z_(u,i)}X_(i)}for(i=i.child;i!==null;){switch(r=i,r.tag){case 0:case 11:case 15:Yr(8,r,r.return),Xc(r);break;case 22:o=r.stateNode,o._visibility&4&&(o._visibility&=-5,Xc(r));break;default:Xc(r)}i=i.sibling}}function Z_(i,r){for(;jt!==null;){var o=jt;switch(o.tag){case 0:case 11:case 15:Yr(8,o,r);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:xl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,jt=u;else e:for(o=i;jt!==null;){u=jt;var h=u.sibling,m=u.return;if(q_(u),u===o){jt=null;break e}if(h!==null){h.return=m,jt=h;break e}jt=m}}}function cR(i,r,o,u){this.tag=i,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(i,r,o,u){return new cR(i,r,o,u)}function ym(i){return i=i.prototype,!(!i||!i.isReactComponent)}function Wr(i,r){var o=i.alternate;return o===null?(o=qn(i.tag,r,i.key,i.mode),o.elementType=i.elementType,o.type=i.type,o.stateNode=i.stateNode,o.alternate=i,i.alternate=o):(o.pendingProps=r,o.type=i.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=i.flags&31457280,o.childLanes=i.childLanes,o.lanes=i.lanes,o.child=i.child,o.memoizedProps=i.memoizedProps,o.memoizedState=i.memoizedState,o.updateQueue=i.updateQueue,r=i.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=i.sibling,o.index=i.index,o.ref=i.ref,o.refCleanup=i.refCleanup,o}function J_(i,r){i.flags&=31457282;var o=i.alternate;return o===null?(i.childLanes=0,i.lanes=r,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=o.childLanes,i.lanes=o.lanes,i.child=o.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=o.memoizedProps,i.memoizedState=o.memoizedState,i.updateQueue=o.updateQueue,i.type=o.type,r=o.dependencies,i.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),i}function Wc(i,r,o,u,h,m){var E=0;if(u=i,typeof i=="function")ym(i)&&(E=1);else if(typeof i=="string")E=QR(i,o,rn.current)?26:i==="html"||i==="head"||i==="body"?27:5;else e:switch(i){case p:return os(o.children,h,m,r);case g:E=8,h|=24;break;case _:return i=qn(12,o,r,h|2),i.elementType=_,i.lanes=m,i;case H:return i=qn(13,o,r,h),i.elementType=H,i.lanes=m,i;case k:return i=qn(19,o,r,h),i.elementType=k,i.lanes=m,i;case Q:return e0(o,h,m,r);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case b:case N:E=10;break e;case w:E=9;break e;case x:E=11;break e;case B:E=14;break e;case W:E=16,u=null;break e}E=29,o=Error(a(130,i===null?"null":typeof i,"")),u=null}return r=qn(E,o,r,h),r.elementType=i,r.type=u,r.lanes=m,r}function os(i,r,o,u){return i=qn(7,i,u,r),i.lanes=o,i}function e0(i,r,o,u){i=qn(22,i,u,r),i.elementType=Q,i.lanes=o;var h={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var m=h._current;if(m===null)throw Error(a(456));if(!(h._pendingVisibility&2)){var E=jr(m,2);E!==null&&(h._pendingVisibility|=2,un(E,m,2))}},attach:function(){var m=h._current;if(m===null)throw Error(a(456));if(h._pendingVisibility&2){var E=jr(m,2);E!==null&&(h._pendingVisibility&=-3,un(E,m,2))}}};return i.stateNode=h,i}function vm(i,r,o){return i=qn(6,i,null,r),i.lanes=o,i}function _m(i,r,o){return r=qn(4,i.children!==null?i.children:[],i.key,r),r.lanes=o,r.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},r}function ar(i){i.flags|=4}function t0(i,r){if(r.type!=="stylesheet"||r.state.loading&4)i.flags&=-16777217;else if(i.flags|=16777216,!j0(r)){if(r=zn.current,r!==null&&((ze&4194176)===ze?vi!==null:(ze&62914560)!==ze&&!(ze&536870912)||r!==vi))throw Rl=wd,vv;i.flags|=8192}}function Zc(i,r){r!==null&&(i.flags|=4),i.flags&16384&&(r=i.tag!==22?Ir():536870912,i.lanes|=r,fo|=r)}function ql(i,r){if(!He)switch(i.tailMode){case"hidden":r=i.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?i.tail=null:o.sibling=null;break;case"collapsed":o=i.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?r||i.tail===null?i.tail=null:i.tail.sibling=null:u.sibling=null}}function rt(i){var r=i.alternate!==null&&i.alternate.child===i.child,o=0,u=0;if(r)for(var h=i.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&31457280,u|=h.flags&31457280,h.return=i,h=h.sibling;else for(h=i.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=i,h=h.sibling;return i.subtreeFlags|=u,i.childLanes=o,r}function fR(i,r,o){var u=r.pendingProps;switch(bd(r),r.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return rt(r),null;case 1:return rt(r),null;case 3:return o=r.stateNode,u=null,i!==null&&(u=i.memoizedState.cache),r.memoizedState.cache!==u&&(r.flags|=2048),tr(Ot),Ui(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(i===null||i.child===null)&&(bl(r)?ar(r):i===null||i.memoizedState.isDehydrated&&!(r.flags&256)||(r.flags|=1024,Zn!==null&&(Im(Zn),Zn=null))),rt(r),null;case 26:return o=r.memoizedState,i===null?(ar(r),o!==null?(rt(r),t0(r,o)):(rt(r),r.flags&=-16777217)):o?o!==i.memoizedState?(ar(r),rt(r),t0(r,o)):(rt(r),r.flags&=-16777217):(i.memoizedProps!==u&&ar(r),rt(r),r.flags&=-16777217),null;case 27:Ns(r),o=xn.current;var h=r.type;if(i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ar(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return rt(r),null}i=rn.current,bl(r)?gv(r):(i=O0(h,u,o),r.stateNode=i,ar(r))}return rt(r),null;case 5:if(Ns(r),o=r.type,i!==null&&r.stateNode!=null)i.memoizedProps!==u&&ar(r);else{if(!u){if(r.stateNode===null)throw Error(a(166));return rt(r),null}if(i=rn.current,bl(r))gv(r);else{switch(h=cf(xn.current),i){case 1:i=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:i=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":i=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":i=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":i=h.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?i.multiple=!0:u.size&&(i.size=u.size);break;default:i=typeof u.is=="string"?h.createElement(o,{is:u.is}):h.createElement(o)}}i[Mt]=r,i[It]=u;e:for(h=r.child;h!==null;){if(h.tag===5||h.tag===6)i.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===r)break e;for(;h.sibling===null;){if(h.return===null||h.return===r)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}r.stateNode=i;e:switch(Gt(i,o,u),o){case"button":case"input":case"select":case"textarea":i=!!u.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&ar(r)}}return rt(r),r.flags&=-16777217,null;case 6:if(i&&r.stateNode!=null)i.memoizedProps!==u&&ar(r);else{if(typeof u!="string"&&r.stateNode===null)throw Error(a(166));if(i=xn.current,bl(r)){if(i=r.stateNode,o=r.memoizedProps,u=null,h=ln,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}i[Mt]=r,i=!!(i.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||S0(i.nodeValue,o)),i||Wa(r)}else i=cf(i).createTextNode(u),i[Mt]=r,r.stateNode=i}return rt(r),null;case 13:if(u=r.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(h=bl(r),u!==null&&u.dehydrated!==null){if(i===null){if(!h)throw Error(a(318));if(h=r.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[Mt]=r}else Al(),!(r.flags&128)&&(r.memoizedState=null),r.flags|=4;rt(r),h=!1}else Zn!==null&&(Im(Zn),Zn=null),h=!0;if(!h)return r.flags&256?(Wi(r),r):(Wi(r),null)}if(Wi(r),r.flags&128)return r.lanes=o,r;if(o=u!==null,i=i!==null&&i.memoizedState!==null,o){u=r.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var m=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)}return o!==i&&o&&(r.child.flags|=8192),Zc(r,r.updateQueue),rt(r),null;case 4:return Ui(),i===null&&Um(r.stateNode.containerInfo),rt(r),null;case 10:return tr(r.type),rt(r),null;case 19:if(lt(Nt),h=r.memoizedState,h===null)return rt(r),null;if(u=(r.flags&128)!==0,m=h.rendering,m===null)if(u)ql(h,!1);else{if(ft!==0||i!==null&&i.flags&128)for(i=r.child;i!==null;){if(m=Mc(i),m!==null){for(r.flags|=128,ql(h,!1),i=m.updateQueue,r.updateQueue=i,Zc(r,i),r.subtreeFlags=0,i=o,o=r.child;o!==null;)J_(o,i),o=o.sibling;return Qe(Nt,Nt.current&1|2),r.child}i=i.sibling}h.tail!==null&&fn()>Jc&&(r.flags|=128,u=!0,ql(h,!1),r.lanes=4194304)}else{if(!u)if(i=Mc(m),i!==null){if(r.flags|=128,u=!0,i=i.updateQueue,r.updateQueue=i,Zc(r,i),ql(h,!0),h.tail===null&&h.tailMode==="hidden"&&!m.alternate&&!He)return rt(r),null}else 2*fn()-h.renderingStartTime>Jc&&o!==536870912&&(r.flags|=128,u=!0,ql(h,!1),r.lanes=4194304);h.isBackwards?(m.sibling=r.child,r.child=m):(i=h.last,i!==null?i.sibling=m:r.child=m,h.last=m)}return h.tail!==null?(r=h.tail,h.rendering=r,h.tail=r.sibling,h.renderingStartTime=fn(),r.sibling=null,i=Nt.current,Qe(Nt,u?i&1|2:i&1),r):(rt(r),null);case 22:case 23:return Wi(r),Rd(),u=r.memoizedState!==null,i!==null?i.memoizedState!==null!==u&&(r.flags|=8192):u&&(r.flags|=8192),u?o&536870912&&!(r.flags&128)&&(rt(r),r.subtreeFlags&6&&(r.flags|=8192)):rt(r),o=r.updateQueue,o!==null&&Zc(r,o.retryQueue),o=null,i!==null&&i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(o=i.memoizedState.cachePool.pool),u=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(u=r.memoizedState.cachePool.pool),u!==o&&(r.flags|=2048),i!==null&&lt(Ja),null;case 24:return o=null,i!==null&&(o=i.memoizedState.cache),r.memoizedState.cache!==o&&(r.flags|=2048),tr(Ot),rt(r),null;case 25:return null}throw Error(a(156,r.tag))}function hR(i,r){switch(bd(r),r.tag){case 1:return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 3:return tr(Ot),Ui(),i=r.flags,i&65536&&!(i&128)?(r.flags=i&-65537|128,r):null;case 26:case 27:case 5:return Ns(r),null;case 13:if(Wi(r),i=r.memoizedState,i!==null&&i.dehydrated!==null){if(r.alternate===null)throw Error(a(340));Al()}return i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 19:return lt(Nt),null;case 4:return Ui(),null;case 10:return tr(r.type),null;case 22:case 23:return Wi(r),Rd(),i!==null&&lt(Ja),i=r.flags,i&65536?(r.flags=i&-65537|128,r):null;case 24:return tr(Ot),null;case 25:return null;default:return null}}function n0(i,r){switch(bd(r),r.tag){case 3:tr(Ot),Ui();break;case 26:case 27:case 5:Ns(r);break;case 4:Ui();break;case 13:Wi(r);break;case 19:lt(Nt);break;case 10:tr(r.type);break;case 22:case 23:Wi(r),Rd(),i!==null&&lt(Ja);break;case 24:tr(Ot)}}var dR={getCacheForType:function(i){var r=Xt(Ot),o=r.data.get(i);return o===void 0&&(o=i(),r.data.set(i,o)),o}},mR=typeof WeakMap=="function"?WeakMap:Map,at=0,Je=null,De=null,ze=0,et=0,wn=null,sr=!1,co=!1,Em=!1,or=0,ft=0,Zr=0,ls=0,Tm=0,Hn=0,fo=0,Hl=null,Ei=null,bm=!1,Am=0,Jc=1/0,ef=null,Jr=null,tf=!1,us=null,Gl=0,wm=0,Sm=null,Kl=0,Rm=null;function Sn(){if(at&2&&ze!==0)return ze&-ze;if(R.T!==null){var i=no;return i!==0?i:Pm()}return oc()}function i0(){Hn===0&&(Hn=!(ze&536870912)||He?rl():536870912);var i=zn.current;return i!==null&&(i.flags|=32),Hn}function un(i,r,o){(i===Je&&et===2||i.cancelPendingCommit!==null)&&(ho(i,0),lr(i,ze,Hn,!1)),dt(i,o),(!(at&2)||i!==Je)&&(i===Je&&(!(at&2)&&(ls|=o),ft===4&&lr(i,ze,Hn,!1)),Ti(i))}function r0(i,r,o){if(at&6)throw Error(a(327));var u=!o&&(r&60)===0&&(r&i.expiredLanes)===0||Rr(i,r),h=u?yR(i,r):Nm(i,r,!0),m=u;do{if(h===0){co&&!u&&lr(i,r,0,!1);break}else if(h===6)lr(i,r,0,!sr);else{if(o=i.current.alternate,m&&!pR(o)){h=Nm(i,r,!1),m=!1;continue}if(h===2){if(m=r,i.errorRecoveryDisabledLanes&m)var E=0;else E=i.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){r=E;e:{var A=i;h=Hl;var C=A.current.memoizedState.isDehydrated;if(C&&(ho(A,E).flags|=256),E=Nm(A,E,!1),E!==2){if(Em&&!C){A.errorRecoveryDisabledLanes|=m,ls|=m,h=4;break e}m=Ei,Ei=h,m!==null&&Im(m)}h=E}if(m=!1,h!==2)continue}}if(h===1){ho(i,0),lr(i,r,0,!0);break}e:{switch(u=i,h){case 0:case 1:throw Error(a(345));case 4:if((r&4194176)===r){lr(u,r,Hn,!sr);break e}break;case 2:Ei=null;break;case 3:case 5:break;default:throw Error(a(329))}if(u.finishedWork=o,u.finishedLanes=r,(r&62914560)===r&&(m=Am+300-fn(),10<m)){if(lr(u,r,Hn,!sr),Nn(u,0)!==0)break e;u.timeoutHandle=C0(a0.bind(null,u,o,Ei,ef,bm,r,Hn,ls,fo,sr,2,-0,0),m);break e}a0(u,o,Ei,ef,bm,r,Hn,ls,fo,sr,0,-0,0)}}break}while(!0);Ti(i)}function Im(i){Ei===null?Ei=i:Ei.push.apply(Ei,i)}function a0(i,r,o,u,h,m,E,A,C,U,X,te,K){var Y=r.subtreeFlags;if((Y&8192||(Y&16785408)===16785408)&&(Zl={stylesheets:null,count:0,unsuspend:XR},Q_(r),r=ZR(),r!==null)){i.cancelPendingCommit=r(h0.bind(null,i,o,u,h,E,A,C,1,te,K)),lr(i,m,E,!U);return}h0(i,o,u,h,E,A,C,X,te,K)}function pR(i){for(var r=i;;){var o=r.tag;if((o===0||o===11||o===15)&&r.flags&16384&&(o=r.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var h=o[u],m=h.getSnapshot;h=h.value;try{if(!Tn(m(),h))return!1}catch{return!1}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===i)break;for(;r.sibling===null;){if(r.return===null||r.return===i)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function lr(i,r,o,u){r&=~Tm,r&=~ls,i.suspendedLanes|=r,i.pingedLanes&=~r,u&&(i.warmLanes|=r),u=i.expirationTimes;for(var h=r;0<h;){var m=31-an(h),E=1<<m;u[m]=-1,h&=~E}o!==0&&Cr(i,o,r)}function nf(){return at&6?!0:($l(0),!1)}function Cm(){if(De!==null){if(et===0)var i=De.return;else i=De,er=rs=null,Pd(i),eo=null,Il=0,i=De;for(;i!==null;)n0(i.alternate,i),i=i.return;De=null}}function ho(i,r){i.finishedWork=null,i.finishedLanes=0;var o=i.timeoutHandle;o!==-1&&(i.timeoutHandle=-1,PR(o)),o=i.cancelPendingCommit,o!==null&&(i.cancelPendingCommit=null,o()),Cm(),Je=i,De=o=Wr(i.current,null),ze=r,et=0,wn=null,sr=!1,co=Rr(i,r),Em=!1,fo=Hn=Tm=ls=Zr=ft=0,Ei=Hl=null,bm=!1,r&8&&(r|=r&32);var u=i.entangledLanes;if(u!==0)for(i=i.entanglements,u&=r;0<u;){var h=31-an(u),m=1<<h;r|=i[h],u&=~m}return or=r,Rc(),o}function s0(i,r){Ne=null,R.H=_i,r===Sl?(r=Tv(),et=3):r===vv?(r=Tv(),et=4):et=r===__?8:r!==null&&typeof r=="object"&&typeof r.then=="function"?6:1,wn=r,De===null&&(ft=1,Kc(i,Ln(r,i.current)))}function o0(){var i=R.H;return R.H=_i,i===null?_i:i}function l0(){var i=R.A;return R.A=dR,i}function xm(){ft=4,sr||(ze&4194176)!==ze&&zn.current!==null||(co=!0),!(Zr&134217727)&&!(ls&134217727)||Je===null||lr(Je,ze,Hn,!1)}function Nm(i,r,o){var u=at;at|=2;var h=o0(),m=l0();(Je!==i||ze!==r)&&(ef=null,ho(i,r)),r=!1;var E=ft;e:do try{if(et!==0&&De!==null){var A=De,C=wn;switch(et){case 8:Cm(),E=6;break e;case 3:case 2:case 6:zn.current===null&&(r=!0);var U=et;if(et=0,wn=null,mo(i,A,C,U),o&&co){E=0;break e}break;default:U=et,et=0,wn=null,mo(i,A,C,U)}}gR(),E=ft;break}catch(X){s0(i,X)}while(!0);return r&&i.shellSuspendCounter++,er=rs=null,at=u,R.H=h,R.A=m,De===null&&(Je=null,ze=0,Rc()),E}function gR(){for(;De!==null;)u0(De)}function yR(i,r){var o=at;at|=2;var u=o0(),h=l0();Je!==i||ze!==r?(ef=null,Jc=fn()+500,ho(i,r)):co=Rr(i,r);e:do try{if(et!==0&&De!==null){r=De;var m=wn;t:switch(et){case 1:et=0,wn=null,mo(i,r,m,1);break;case 2:if(_v(m)){et=0,wn=null,c0(r);break}r=function(){et===2&&Je===i&&(et=7),Ti(i)},m.then(r,r);break e;case 3:et=7;break e;case 4:et=5;break e;case 7:_v(m)?(et=0,wn=null,c0(r)):(et=0,wn=null,mo(i,r,m,7));break;case 5:var E=null;switch(De.tag){case 26:E=De.memoizedState;case 5:case 27:var A=De;if(!E||j0(E)){et=0,wn=null;var C=A.sibling;if(C!==null)De=C;else{var U=A.return;U!==null?(De=U,rf(U)):De=null}break t}}et=0,wn=null,mo(i,r,m,5);break;case 6:et=0,wn=null,mo(i,r,m,6);break;case 8:Cm(),ft=6;break e;default:throw Error(a(462))}}vR();break}catch(X){s0(i,X)}while(!0);return er=rs=null,R.H=u,R.A=h,at=o,De!==null?0:(Je=null,ze=0,Rc(),ft)}function vR(){for(;De!==null&&!rd();)u0(De)}function u0(i){var r=O_(i.alternate,i,or);i.memoizedProps=i.pendingProps,r===null?rf(i):De=r}function c0(i){var r=i,o=r.alternate;switch(r.tag){case 15:case 0:r=S_(o,r,r.pendingProps,r.type,void 0,ze);break;case 11:r=S_(o,r,r.pendingProps,r.type.render,r.ref,ze);break;case 5:Pd(r);default:n0(o,r),r=De=J_(r,or),r=O_(o,r,or)}i.memoizedProps=i.pendingProps,r===null?rf(i):De=r}function mo(i,r,o,u){er=rs=null,Pd(r),eo=null,Il=0;var h=r.return;try{if(sR(i,h,r,o,ze)){ft=1,Kc(i,Ln(o,i.current)),De=null;return}}catch(m){if(h!==null)throw De=h,m;ft=1,Kc(i,Ln(o,i.current)),De=null;return}r.flags&32768?(He||u===1?i=!0:co||ze&536870912?i=!1:(sr=i=!0,(u===2||u===3||u===6)&&(u=zn.current,u!==null&&u.tag===13&&(u.flags|=16384))),f0(r,i)):rf(r)}function rf(i){var r=i;do{if(r.flags&32768){f0(r,sr);return}i=r.return;var o=fR(r.alternate,r,or);if(o!==null){De=o;return}if(r=r.sibling,r!==null){De=r;return}De=r=i}while(r!==null);ft===0&&(ft=5)}function f0(i,r){do{var o=hR(i.alternate,i);if(o!==null){o.flags&=32767,De=o;return}if(o=i.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!r&&(i=i.sibling,i!==null)){De=i;return}De=i=o}while(i!==null);ft=6,De=null}function h0(i,r,o,u,h,m,E,A,C,U){var X=R.T,te=ue.p;try{ue.p=2,R.T=null,_R(i,r,o,u,te,h,m,E,A,C,U)}finally{R.T=X,ue.p=te}}function _R(i,r,o,u,h,m,E,A){do po();while(us!==null);if(at&6)throw Error(a(327));var C=i.finishedWork;if(u=i.finishedLanes,C===null)return null;if(i.finishedWork=null,i.finishedLanes=0,C===i.current)throw Error(a(177));i.callbackNode=null,i.callbackPriority=0,i.cancelPendingCommit=null;var U=C.lanes|C.childLanes;if(U|=_d,ac(i,u,U,m,E,A),i===Je&&(De=Je=null,ze=0),!(C.subtreeFlags&10256)&&!(C.flags&10256)||tf||(tf=!0,wm=U,Sm=o,AR(ji,function(){return po(),null})),o=(C.flags&15990)!==0,C.subtreeFlags&15990||o?(o=R.T,R.T=null,m=ue.p,ue.p=2,E=at,at|=4,lR(i,C),K_(C,i),q1(Bm,i.containerInfo),gf=!!Fm,Bm=Fm=null,i.current=C,B_(i,C.alternate,C),el(),at=E,ue.p=m,R.T=o):i.current=C,tf?(tf=!1,us=i,Gl=u):d0(i,U),U=i.pendingLanes,U===0&&(Jr=null),nl(C.stateNode),Ti(i),r!==null)for(h=i.onRecoverableError,C=0;C<r.length;C++)U=r[C],h(U.value,{componentStack:U.stack});return Gl&3&&po(),U=i.pendingLanes,u&4194218&&U&42?i===Rm?Kl++:(Kl=0,Rm=i):Kl=0,$l(0),null}function d0(i,r){(i.pooledCacheLanes&=r)===0&&(r=i.pooledCache,r!=null&&(i.pooledCache=null,xl(r)))}function po(){if(us!==null){var i=us,r=wm;wm=0;var o=sc(Gl),u=R.T,h=ue.p;try{if(ue.p=32>o?32:o,R.T=null,us===null)var m=!1;else{o=Sm,Sm=null;var E=us,A=Gl;if(us=null,Gl=0,at&6)throw Error(a(331));var C=at;if(at|=4,W_(E.current),Y_(E,E.current,A,o),at=C,$l(0,!1),Qt&&typeof Qt.onPostCommitFiberRoot=="function")try{Qt.onPostCommitFiberRoot(wr,E)}catch{}m=!0}return m}finally{ue.p=h,R.T=u,d0(i,r)}}return!1}function m0(i,r,o){r=Ln(o,r),r=Yd(i.stateNode,r,2),i=$r(i,r,2),i!==null&&(dt(i,2),Ti(i))}function Ze(i,r,o){if(i.tag===3)m0(i,i,o);else for(;r!==null;){if(r.tag===3){m0(r,i,o);break}else if(r.tag===1){var u=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Jr===null||!Jr.has(u))){i=Ln(o,i),o=y_(2),u=$r(r,o,2),u!==null&&(v_(o,u,r,i),dt(u,2),Ti(u));break}}r=r.return}}function Om(i,r,o){var u=i.pingCache;if(u===null){u=i.pingCache=new mR;var h=new Set;u.set(r,h)}else h=u.get(r),h===void 0&&(h=new Set,u.set(r,h));h.has(o)||(Em=!0,h.add(o),i=ER.bind(null,i,r,o),r.then(i,i))}function ER(i,r,o){var u=i.pingCache;u!==null&&u.delete(r),i.pingedLanes|=i.suspendedLanes&o,i.warmLanes&=~o,Je===i&&(ze&o)===o&&(ft===4||ft===3&&(ze&62914560)===ze&&300>fn()-Am?!(at&2)&&ho(i,0):Tm|=o,fo===ze&&(fo=0)),Ti(i)}function p0(i,r){r===0&&(r=Ir()),i=jr(i,r),i!==null&&(dt(i,r),Ti(i))}function TR(i){var r=i.memoizedState,o=0;r!==null&&(o=r.retryLane),p0(i,o)}function bR(i,r){var o=0;switch(i.tag){case 13:var u=i.stateNode,h=i.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=i.stateNode;break;case 22:u=i.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(r),p0(i,o)}function AR(i,r){return ka(i,r)}var af=null,go=null,Dm=!1,sf=!1,km=!1,cs=0;function Ti(i){i!==go&&i.next===null&&(go===null?af=go=i:go=go.next=i),sf=!0,Dm||(Dm=!0,SR(wR))}function $l(i,r){if(!km&&sf){km=!0;do for(var o=!1,u=af;u!==null;){if(i!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,A=u.pingedLanes;m=(1<<31-an(42|i)+1)-1,m&=h&~(E&~A),m=m&201326677?m&201326677|1:m?m|2:0}m!==0&&(o=!0,v0(u,m))}else m=ze,m=Nn(u,u===Je?m:0),!(m&3)||Rr(u,m)||(o=!0,v0(u,m));u=u.next}while(o);km=!1}}function wR(){sf=Dm=!1;var i=0;cs!==0&&(kR()&&(i=cs),cs=0);for(var r=fn(),o=null,u=af;u!==null;){var h=u.next,m=g0(u,r);m===0?(u.next=null,o===null?af=h:o.next=h,h===null&&(go=o)):(o=u,(i!==0||m&3)&&(sf=!0)),u=h}$l(i)}function g0(i,r){for(var o=i.suspendedLanes,u=i.pingedLanes,h=i.expirationTimes,m=i.pendingLanes&-62914561;0<m;){var E=31-an(m),A=1<<E,C=h[E];C===-1?(!(A&o)||A&u)&&(h[E]=ks(A,r)):C<=r&&(i.expiredLanes|=A),m&=~A}if(r=Je,o=ze,o=Nn(i,i===r?o:0),u=i.callbackNode,o===0||i===r&&et===2||i.cancelPendingCommit!==null)return u!==null&&u!==null&&Ds(u),i.callbackNode=null,i.callbackPriority=0;if(!(o&3)||Rr(i,o)){if(r=o&-o,r===i.callbackPriority)return r;switch(u!==null&&Ds(u),sc(o)){case 2:case 8:o=Pt;break;case 32:o=ji;break;case 268435456:o=tl;break;default:o=ji}return u=y0.bind(null,i),o=ka(o,u),i.callbackPriority=r,i.callbackNode=o,r}return u!==null&&u!==null&&Ds(u),i.callbackPriority=2,i.callbackNode=null,2}function y0(i,r){var o=i.callbackNode;if(po()&&i.callbackNode!==o)return null;var u=ze;return u=Nn(i,i===Je?u:0),u===0?null:(r0(i,u,r),g0(i,fn()),i.callbackNode!=null&&i.callbackNode===o?y0.bind(null,i):null)}function v0(i,r){if(po())return null;r0(i,r,!0)}function SR(i){MR(function(){at&6?ka(Rt,i):i()})}function Pm(){return cs===0&&(cs=rl()),cs}function _0(i){return i==null||typeof i=="symbol"||typeof i=="boolean"?null:typeof i=="function"?i:ci(""+i)}function E0(i,r){var o=r.ownerDocument.createElement("input");return o.name=r.name,o.value=r.value,i.id&&o.setAttribute("form",i.id),r.parentNode.insertBefore(o,r),i=new FormData(i),o.parentNode.removeChild(o),i}function RR(i,r,o,u,h){if(r==="submit"&&o&&o.stateNode===h){var m=_0((h[It]||null).action),E=u.submitter;E&&(r=(r=E[It]||null)?_0(r.formAction):E.getAttribute("formAction"),r!==null&&(m=r,E=null));var A=new zs("action","action",null,u,h);i.push({event:A,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(cs!==0){var C=E?E0(h,E):new FormData(h);qd(o,{pending:!0,data:C,method:h.method,action:m},null,C)}}else typeof m=="function"&&(A.preventDefault(),C=E?E0(h,E):new FormData(h),qd(o,{pending:!0,data:C,method:h.method,action:m},m,C))},currentTarget:h}]})}}for(var Mm=0;Mm<hv.length;Mm++){var Vm=hv[Mm],IR=Vm.toLowerCase(),CR=Vm[0].toUpperCase()+Vm.slice(1);Wn(IR,"on"+CR)}Wn(ov,"onAnimationEnd"),Wn(lv,"onAnimationIteration"),Wn(uv,"onAnimationStart"),Wn("dblclick","onDoubleClick"),Wn("focusin","onFocus"),Wn("focusout","onBlur"),Wn(G1,"onTransitionRun"),Wn(K1,"onTransitionStart"),Wn($1,"onTransitionCancel"),Wn(cv,"onTransitionEnd"),hn("onMouseEnter",["mouseout","mouseover"]),hn("onMouseLeave",["mouseout","mouseover"]),hn("onPointerEnter",["pointerout","pointerover"]),hn("onPointerLeave",["pointerout","pointerover"]),_n("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_n("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_n("onBeforeInput",["compositionend","keypress","textInput","paste"]),_n("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_n("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Yl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xR=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Yl));function T0(i,r){r=(r&4)!==0;for(var o=0;o<i.length;o++){var u=i[o],h=u.event;u=u.listeners;e:{var m=void 0;if(r)for(var E=u.length-1;0<=E;E--){var A=u[E],C=A.instance,U=A.currentTarget;if(A=A.listener,C!==m&&h.isPropagationStopped())break e;m=A,h.currentTarget=U;try{m(h)}catch(X){Gc(X)}h.currentTarget=null,m=C}else for(E=0;E<u.length;E++){if(A=u[E],C=A.instance,U=A.currentTarget,A=A.listener,C!==m&&h.isPropagationStopped())break e;m=A,h.currentTarget=U;try{m(h)}catch(X){Gc(X)}h.currentTarget=null,m=C}}}}function Ve(i,r){var o=r[Ma];o===void 0&&(o=r[Ma]=new Set);var u=i+"__bubble";o.has(u)||(b0(r,i,2,!1),o.add(u))}function Lm(i,r,o){var u=0;r&&(u|=4),b0(o,i,u,r)}var of="_reactListening"+Math.random().toString(36).slice(2);function Um(i){if(!i[of]){i[of]=!0,sl.forEach(function(o){o!=="selectionchange"&&(xR.has(o)||Lm(o,!1,i),Lm(o,!0,i))});var r=i.nodeType===9?i:i.ownerDocument;r===null||r[of]||(r[of]=!0,Lm("selectionchange",!1,r))}}function b0(i,r,o,u){switch(G0(r)){case 2:var h=tI;break;case 8:h=nI;break;default:h=Wm}o=h.bind(null,r,o,i),h=void 0,!Pn||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(h=!0),u?h!==void 0?i.addEventListener(r,o,{capture:!0,passive:h}):i.addEventListener(r,o,!0):h!==void 0?i.addEventListener(r,o,{passive:h}):i.addEventListener(r,o,!1)}function jm(i,r,o,u,h){var m=u;if(!(r&1)&&!(r&2)&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var A=u.stateNode.containerInfo;if(A===h||A.nodeType===8&&A.parentNode===h)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&(C=E.stateNode.containerInfo,C===h||C.nodeType===8&&C.parentNode===h))return;E=E.return}for(;A!==null;){if(E=Xn(A),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=m=E;continue e}A=A.parentNode}}u=u.return}fc(function(){var U=m,X=js(o),te=[];e:{var K=fv.get(i);if(K!==void 0){var Y=zs,de=i;switch(i){case"keypress":if(hi(o)===0)break e;case"keydown":case"keyup":Y=Ks;break;case"focusin":de="focus",Y=qs;break;case"focusout":de="blur",Y=qs;break;case"beforeblur":case"afterblur":Y=qs;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Y=Mn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Y=fd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Y=_c;break;case ov:case lv:case uv:Y=Hs;break;case cv:Y=Tc;break;case"scroll":case"scrollend":Y=hc;break;case"wheel":Y=$s;break;case"copy":case"cut":case"paste":Y=Gs;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Y=vl;break;case"toggle":case"beforetoggle":Y=Ac}var Se=(r&4)!==0,ht=!Se&&(i==="scroll"||i==="scrollend"),z=Se?K!==null?K+"Capture":null:K;Se=[];for(var V=U,G;V!==null;){var Z=V;if(G=Z.stateNode,Z=Z.tag,Z!==5&&Z!==26&&Z!==27||G===null||z===null||(Z=za(V,z),Z!=null&&Se.push(Ql(V,Z,G))),ht)break;V=V.return}0<Se.length&&(K=new Y(K,de,null,o,X),te.push({event:K,listeners:Se}))}}if(!(r&7)){e:{if(K=i==="mouseover"||i==="pointerover",Y=i==="mouseout"||i==="pointerout",K&&o!==kn&&(de=o.relatedTarget||o.fromElement)&&(Xn(de)||de[zi]))break e;if((Y||K)&&(K=X.window===X?X:(K=X.ownerDocument)?K.defaultView||K.parentWindow:window,Y?(de=o.relatedTarget||o.toElement,Y=U,de=de?Xn(de):null,de!==null&&(ht=ye(de),Se=de.tag,de!==ht||Se!==5&&Se!==27&&Se!==6)&&(de=null)):(Y=null,de=U),Y!==de)){if(Se=Mn,Z="onMouseLeave",z="onMouseEnter",V="mouse",(i==="pointerout"||i==="pointerover")&&(Se=vl,Z="onPointerLeave",z="onPointerEnter",V="pointer"),ht=Y==null?K:Dr(Y),G=de==null?K:Dr(de),K=new Se(Z,V+"leave",Y,o,X),K.target=ht,K.relatedTarget=G,Z=null,Xn(X)===U&&(Se=new Se(z,V+"enter",de,o,X),Se.target=G,Se.relatedTarget=ht,Z=Se),ht=Z,Y&&de)t:{for(Se=Y,z=de,V=0,G=Se;G;G=yo(G))V++;for(G=0,Z=z;Z;Z=yo(Z))G++;for(;0<V-G;)Se=yo(Se),V--;for(;0<G-V;)z=yo(z),G--;for(;V--;){if(Se===z||z!==null&&Se===z.alternate)break t;Se=yo(Se),z=yo(z)}Se=null}else Se=null;Y!==null&&A0(te,K,Y,Se,!1),de!==null&&ht!==null&&A0(te,ht,de,Se,!0)}}e:{if(K=U?Dr(U):window,Y=K.nodeName&&K.nodeName.toLowerCase(),Y==="select"||Y==="input"&&K.type==="file")var he=Xy;else if(xt(K))if(Wy)he=F1;else{he=j1;var Oe=U1}else Y=K.nodeName,!Y||Y.toLowerCase()!=="input"||K.type!=="checkbox"&&K.type!=="radio"?U&&fl(U.elementType)&&(he=Xy):he=z1;if(he&&(he=he(i,U))){Yi(te,he,o,X);break e}Oe&&Oe(i,K,U),i==="focusout"&&U&&K.type==="number"&&U.memoizedProps.value!=null&&Us(K,"number",K.value)}switch(Oe=U?Dr(U):window,i){case"focusin":(xt(Oe)||Oe.contentEditable==="true")&&(Ys=Oe,gd=U,Tl=null);break;case"focusout":Tl=gd=Ys=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,av(te,o,X);break;case"selectionchange":if(H1)break;case"keydown":case"keyup":av(te,o,X)}var ge;if(pi)e:{switch(i){case"compositionstart":var _e="onCompositionStart";break e;case"compositionend":_e="onCompositionEnd";break e;case"compositionupdate":_e="onCompositionUpdate";break e}_e=void 0}else Ue?$(i,o)&&(_e="onCompositionEnd"):i==="keydown"&&o.keyCode===229&&(_e="onCompositionStart");_e&&(v&&o.locale!=="ko"&&(Ue||_e!=="onCompositionStart"?_e==="onCompositionEnd"&&Ue&&(ge=dl()):(fi=X,Ur="value"in fi?fi.value:fi.textContent,Ue=!0)),Oe=lf(U,_e),0<Oe.length&&(_e=new gl(_e,i,null,o,X),te.push({event:_e,listeners:Oe}),ge?_e.data=ge:(ge=re(o),ge!==null&&(_e.data=ge)))),(ge=y?Ct(i,o):je(i,o))&&(_e=lf(U,"onBeforeInput"),0<_e.length&&(Oe=new gl("onBeforeInput","beforeinput",null,o,X),te.push({event:Oe,listeners:_e}),Oe.data=ge)),RR(te,i,U,o,X)}T0(te,r)})}function Ql(i,r,o){return{instance:i,listener:r,currentTarget:o}}function lf(i,r){for(var o=r+"Capture",u=[];i!==null;){var h=i,m=h.stateNode;h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=za(i,o),h!=null&&u.unshift(Ql(i,h,m)),h=za(i,r),h!=null&&u.push(Ql(i,h,m))),i=i.return}return u}function yo(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5&&i.tag!==27);return i||null}function A0(i,r,o,u,h){for(var m=r._reactName,E=[];o!==null&&o!==u;){var A=o,C=A.alternate,U=A.stateNode;if(A=A.tag,C!==null&&C===u)break;A!==5&&A!==26&&A!==27||U===null||(C=U,h?(U=za(o,m),U!=null&&E.unshift(Ql(o,U,C))):h||(U=za(o,m),U!=null&&E.push(Ql(o,U,C)))),o=o.return}E.length!==0&&i.push({event:r,listeners:E})}var NR=/\r\n?/g,OR=/\u0000|\uFFFD/g;function w0(i){return(typeof i=="string"?i:""+i).replace(NR,`
`).replace(OR,"")}function S0(i,r){return r=w0(r),w0(i)===r}function uf(){}function We(i,r,o,u,h,m){switch(o){case"children":typeof u=="string"?r==="body"||r==="textarea"&&u===""||Dn(i,u):(typeof u=="number"||typeof u=="bigint")&&r!=="body"&&Dn(i,""+u);break;case"className":Mr(i,"class",u);break;case"tabIndex":Mr(i,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Mr(i,o,u);break;case"style":cc(i,u,m);break;case"data":if(r!=="object"){Mr(i,"data",u);break}case"src":case"href":if(u===""&&(r!=="a"||o!=="href")){i.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=ci(""+u),i.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){i.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(r!=="input"&&We(i,r,"name",h.name,h,null),We(i,r,"formEncType",h.formEncType,h,null),We(i,r,"formMethod",h.formMethod,h,null),We(i,r,"formTarget",h.formTarget,h,null)):(We(i,r,"encType",h.encType,h,null),We(i,r,"method",h.method,h,null),We(i,r,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){i.removeAttribute(o);break}u=ci(""+u),i.setAttribute(o,u);break;case"onClick":u!=null&&(i.onclick=uf);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"multiple":i.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":i.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){i.removeAttribute("xlink:href");break}o=ci(""+u),i.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""+u):i.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,""):i.removeAttribute(o);break;case"capture":case"download":u===!0?i.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?i.setAttribute(o,u):i.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?i.setAttribute(o,u):i.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?i.removeAttribute(o):i.setAttribute(o,u);break;case"popover":Ve("beforetoggle",i),Ve("toggle",i),Pr(i,"popover",u);break;case"xlinkActuate":On(i,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":On(i,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":On(i,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":On(i,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":On(i,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":On(i,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":On(i,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":On(i,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":On(i,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Pr(i,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ud.get(o)||o,Pr(i,o,u))}}function zm(i,r,o,u,h,m){switch(o){case"style":cc(i,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(a(60));i.innerHTML=o}}break;case"children":typeof u=="string"?Dn(i,u):(typeof u=="number"||typeof u=="bigint")&&Dn(i,""+u);break;case"onScroll":u!=null&&Ve("scroll",i);break;case"onScrollEnd":u!=null&&Ve("scrollend",i);break;case"onClick":u!=null&&(i.onclick=uf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),r=o.slice(2,h?o.length-7:void 0),m=i[It]||null,m=m!=null?m[o]:null,typeof m=="function"&&i.removeEventListener(r,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(o in i?i[o]=null:i.hasAttribute(o)&&i.removeAttribute(o)),i.addEventListener(r,u,h);break e}o in i?i[o]=u:u===!0?i.setAttribute(o,""):Pr(i,o,u)}}}function Gt(i,r,o){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Ve("error",i),Ve("load",i);var u=!1,h=!1,m;for(m in o)if(o.hasOwnProperty(m)){var E=o[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:We(i,r,m,E,o,null)}}h&&We(i,r,"srcSet",o.srcSet,o,null),u&&We(i,r,"src",o.src,o,null);return;case"input":Ve("invalid",i);var A=m=E=h=null,C=null,U=null;for(u in o)if(o.hasOwnProperty(u)){var X=o[u];if(X!=null)switch(u){case"name":h=X;break;case"type":E=X;break;case"checked":C=X;break;case"defaultChecked":U=X;break;case"value":m=X;break;case"defaultValue":A=X;break;case"children":case"dangerouslySetInnerHTML":if(X!=null)throw Error(a(137,r));break;default:We(i,r,u,X,o,null)}}Ua(i,m,A,C,U,E,h,!1),La(i);return;case"select":Ve("invalid",i),u=E=m=null;for(h in o)if(o.hasOwnProperty(h)&&(A=o[h],A!=null))switch(h){case"value":m=A;break;case"defaultValue":E=A;break;case"multiple":u=A;default:We(i,r,h,A,o,null)}r=m,o=E,i.multiple=!!u,r!=null?qe(i,!!u,r,!1):o!=null&&qe(i,!!u,o,!0);return;case"textarea":Ve("invalid",i),m=h=u=null;for(E in o)if(o.hasOwnProperty(E)&&(A=o[E],A!=null))switch(E){case"value":u=A;break;case"defaultValue":h=A;break;case"children":m=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(a(91));break;default:We(i,r,E,A,o,null)}Lr(i,u,h,m),La(i);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":i.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:We(i,r,C,u,o,null)}return;case"dialog":Ve("cancel",i),Ve("close",i);break;case"iframe":case"object":Ve("load",i);break;case"video":case"audio":for(u=0;u<Yl.length;u++)Ve(Yl[u],i);break;case"image":Ve("error",i),Ve("load",i);break;case"details":Ve("toggle",i);break;case"embed":case"source":case"link":Ve("error",i),Ve("load",i);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in o)if(o.hasOwnProperty(U)&&(u=o[U],u!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,r));default:We(i,r,U,u,o,null)}return;default:if(fl(r)){for(X in o)o.hasOwnProperty(X)&&(u=o[X],u!==void 0&&zm(i,r,X,u,o,void 0));return}}for(A in o)o.hasOwnProperty(A)&&(u=o[A],u!=null&&We(i,r,A,u,o,null))}function DR(i,r,o,u){switch(r){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,A=null,C=null,U=null,X=null;for(Y in o){var te=o[Y];if(o.hasOwnProperty(Y)&&te!=null)switch(Y){case"checked":break;case"value":break;case"defaultValue":C=te;default:u.hasOwnProperty(Y)||We(i,r,Y,null,u,te)}}for(var K in u){var Y=u[K];if(te=o[K],u.hasOwnProperty(K)&&(Y!=null||te!=null))switch(K){case"type":m=Y;break;case"name":h=Y;break;case"checked":U=Y;break;case"defaultChecked":X=Y;break;case"value":E=Y;break;case"defaultValue":A=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(a(137,r));break;default:Y!==te&&We(i,r,K,Y,u,te)}}Vr(i,E,A,C,U,X,m,h);return;case"select":Y=E=A=K=null;for(m in o)if(C=o[m],o.hasOwnProperty(m)&&C!=null)switch(m){case"value":break;case"multiple":Y=C;default:u.hasOwnProperty(m)||We(i,r,m,null,u,C)}for(h in u)if(m=u[h],C=o[h],u.hasOwnProperty(h)&&(m!=null||C!=null))switch(h){case"value":K=m;break;case"defaultValue":A=m;break;case"multiple":E=m;default:m!==C&&We(i,r,h,m,u,C)}r=A,o=E,u=Y,K!=null?qe(i,!!o,K,!1):!!u!=!!o&&(r!=null?qe(i,!!o,r,!0):qe(i,!!o,o?[]:"",!1));return;case"textarea":Y=K=null;for(A in o)if(h=o[A],o.hasOwnProperty(A)&&h!=null&&!u.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:We(i,r,A,null,u,h)}for(E in u)if(h=u[E],m=o[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":K=h;break;case"defaultValue":Y=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&We(i,r,E,h,u,m)}ja(i,K,Y);return;case"option":for(var de in o)if(K=o[de],o.hasOwnProperty(de)&&K!=null&&!u.hasOwnProperty(de))switch(de){case"selected":i.selected=!1;break;default:We(i,r,de,null,u,K)}for(C in u)if(K=u[C],Y=o[C],u.hasOwnProperty(C)&&K!==Y&&(K!=null||Y!=null))switch(C){case"selected":i.selected=K&&typeof K!="function"&&typeof K!="symbol";break;default:We(i,r,C,K,u,Y)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Se in o)K=o[Se],o.hasOwnProperty(Se)&&K!=null&&!u.hasOwnProperty(Se)&&We(i,r,Se,null,u,K);for(U in u)if(K=u[U],Y=o[U],u.hasOwnProperty(U)&&K!==Y&&(K!=null||Y!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(a(137,r));break;default:We(i,r,U,K,u,Y)}return;default:if(fl(r)){for(var ht in o)K=o[ht],o.hasOwnProperty(ht)&&K!==void 0&&!u.hasOwnProperty(ht)&&zm(i,r,ht,void 0,u,K);for(X in u)K=u[X],Y=o[X],!u.hasOwnProperty(X)||K===Y||K===void 0&&Y===void 0||zm(i,r,X,K,u,Y);return}}for(var z in o)K=o[z],o.hasOwnProperty(z)&&K!=null&&!u.hasOwnProperty(z)&&We(i,r,z,null,u,K);for(te in u)K=u[te],Y=o[te],!u.hasOwnProperty(te)||K===Y||K==null&&Y==null||We(i,r,te,K,u,Y)}var Fm=null,Bm=null;function cf(i){return i.nodeType===9?i:i.ownerDocument}function R0(i){switch(i){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function I0(i,r){if(i===0)switch(r){case"svg":return 1;case"math":return 2;default:return 0}return i===1&&r==="foreignObject"?0:i}function qm(i,r){return i==="textarea"||i==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.children=="bigint"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Hm=null;function kR(){var i=window.event;return i&&i.type==="popstate"?i===Hm?!1:(Hm=i,!0):(Hm=null,!1)}var C0=typeof setTimeout=="function"?setTimeout:void 0,PR=typeof clearTimeout=="function"?clearTimeout:void 0,x0=typeof Promise=="function"?Promise:void 0,MR=typeof queueMicrotask=="function"?queueMicrotask:typeof x0<"u"?function(i){return x0.resolve(null).then(i).catch(VR)}:C0;function VR(i){setTimeout(function(){throw i})}function Gm(i,r){var o=r,u=0;do{var h=o.nextSibling;if(i.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){i.removeChild(h),iu(r);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);iu(r)}function Km(i){var r=i.firstChild;for(r&&r.nodeType===10&&(r=r.nextSibling);r;){var o=r;switch(r=r.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":Km(o),Va(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}i.removeChild(o)}}function LR(i,r,o,u){for(;i.nodeType===1;){var h=o;if(i.nodeName.toLowerCase()!==r.toLowerCase()){if(!u&&(i.nodeName!=="INPUT"||i.type!=="hidden"))break}else if(u){if(!i[Or])switch(r){case"meta":if(!i.hasAttribute("itemprop"))break;return i;case"link":if(m=i.getAttribute("rel"),m==="stylesheet"&&i.hasAttribute("data-precedence"))break;if(m!==h.rel||i.getAttribute("href")!==(h.href==null?null:h.href)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||i.getAttribute("title")!==(h.title==null?null:h.title))break;return i;case"style":if(i.hasAttribute("data-precedence"))break;return i;case"script":if(m=i.getAttribute("src"),(m!==(h.src==null?null:h.src)||i.getAttribute("type")!==(h.type==null?null:h.type)||i.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&i.hasAttribute("async")&&!i.hasAttribute("itemprop"))break;return i;default:return i}}else if(r==="input"&&i.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&i.getAttribute("name")===m)return i}else return i;if(i=ei(i.nextSibling),i===null)break}return null}function UR(i,r,o){if(r==="")return null;for(;i.nodeType!==3;)if((i.nodeType!==1||i.nodeName!=="INPUT"||i.type!=="hidden")&&!o||(i=ei(i.nextSibling),i===null))return null;return i}function ei(i){for(;i!=null;i=i.nextSibling){var r=i.nodeType;if(r===1||r===3)break;if(r===8){if(r=i.data,r==="$"||r==="$!"||r==="$?"||r==="F!"||r==="F")break;if(r==="/$")return null}}return i}function N0(i){i=i.previousSibling;for(var r=0;i;){if(i.nodeType===8){var o=i.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return i;r--}else o==="/$"&&r++}i=i.previousSibling}return null}function O0(i,r,o){switch(r=cf(o),i){case"html":if(i=r.documentElement,!i)throw Error(a(452));return i;case"head":if(i=r.head,!i)throw Error(a(453));return i;case"body":if(i=r.body,!i)throw Error(a(454));return i;default:throw Error(a(451))}}var Gn=new Map,D0=new Set;function ff(i){return typeof i.getRootNode=="function"?i.getRootNode():i.ownerDocument}var ur=ue.d;ue.d={f:jR,r:zR,D:FR,C:BR,L:qR,m:HR,X:KR,S:GR,M:$R};function jR(){var i=ur.f(),r=nf();return i||r}function zR(i){var r=Fi(i);r!==null&&r.tag===5&&r.type==="form"?a_(r):ur.r(i)}var vo=typeof document>"u"?null:document;function k0(i,r,o){var u=vo;if(u&&typeof r=="string"&&r){var h=ut(r);h='link[rel="'+i+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),D0.has(h)||(D0.add(h),i={rel:i,crossOrigin:o,href:r},u.querySelector(h)===null&&(r=u.createElement("link"),Gt(r,"link",i),it(r),u.head.appendChild(r)))}}function FR(i){ur.D(i),k0("dns-prefetch",i,null)}function BR(i,r){ur.C(i,r),k0("preconnect",i,r)}function qR(i,r,o){ur.L(i,r,o);var u=vo;if(u&&i&&r){var h='link[rel="preload"][as="'+ut(r)+'"]';r==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+ut(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+ut(o.imageSizes)+'"]')):h+='[href="'+ut(i)+'"]';var m=h;switch(r){case"style":m=_o(i);break;case"script":m=Eo(i)}Gn.has(m)||(i=O({rel:"preload",href:r==="image"&&o&&o.imageSrcSet?void 0:i,as:r},o),Gn.set(m,i),u.querySelector(h)!==null||r==="style"&&u.querySelector(Xl(m))||r==="script"&&u.querySelector(Wl(m))||(r=u.createElement("link"),Gt(r,"link",i),it(r),u.head.appendChild(r)))}}function HR(i,r){ur.m(i,r);var o=vo;if(o&&i){var u=r&&typeof r.as=="string"?r.as:"script",h='link[rel="modulepreload"][as="'+ut(u)+'"][href="'+ut(i)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=Eo(i)}if(!Gn.has(m)&&(i=O({rel:"modulepreload",href:i},r),Gn.set(m,i),o.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Wl(m)))return}u=o.createElement("link"),Gt(u,"link",i),it(u),o.head.appendChild(u)}}}function GR(i,r,o){ur.S(i,r,o);var u=vo;if(u&&i){var h=kr(u).hoistableStyles,m=_o(i);r=r||"default";var E=h.get(m);if(!E){var A={loading:0,preload:null};if(E=u.querySelector(Xl(m)))A.loading=5;else{i=O({rel:"stylesheet",href:i,"data-precedence":r},o),(o=Gn.get(m))&&$m(i,o);var C=E=u.createElement("link");it(C),Gt(C,"link",i),C._p=new Promise(function(U,X){C.onload=U,C.onerror=X}),C.addEventListener("load",function(){A.loading|=1}),C.addEventListener("error",function(){A.loading|=2}),A.loading|=4,hf(E,r,u)}E={type:"stylesheet",instance:E,count:1,state:A},h.set(m,E)}}}function KR(i,r){ur.X(i,r);var o=vo;if(o&&i){var u=kr(o).hoistableScripts,h=Eo(i),m=u.get(h);m||(m=o.querySelector(Wl(h)),m||(i=O({src:i,async:!0},r),(r=Gn.get(h))&&Ym(i,r),m=o.createElement("script"),it(m),Gt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function $R(i,r){ur.M(i,r);var o=vo;if(o&&i){var u=kr(o).hoistableScripts,h=Eo(i),m=u.get(h);m||(m=o.querySelector(Wl(h)),m||(i=O({src:i,async:!0,type:"module"},r),(r=Gn.get(h))&&Ym(i,r),m=o.createElement("script"),it(m),Gt(m,"link",i),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function P0(i,r,o,u){var h=(h=xn.current)?ff(h):null;if(!h)throw Error(a(446));switch(i){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(r=_o(o.href),o=kr(h).hoistableStyles,u=o.get(r),u||(u={type:"style",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){i=_o(o.href);var m=kr(h).hoistableStyles,E=m.get(i);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(i,E),(m=h.querySelector(Xl(i)))&&!m._p&&(E.instance=m,E.state.loading=5),Gn.has(i)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Gn.set(i,o),m||YR(h,i,o,E.state))),r&&u===null)throw Error(a(528,""));return E}if(r&&u!==null)throw Error(a(529,""));return null;case"script":return r=o.async,o=o.src,typeof o=="string"&&r&&typeof r!="function"&&typeof r!="symbol"?(r=Eo(o),o=kr(h).hoistableScripts,u=o.get(r),u||(u={type:"script",instance:null,count:0,state:null},o.set(r,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,i))}}function _o(i){return'href="'+ut(i)+'"'}function Xl(i){return'link[rel="stylesheet"]['+i+"]"}function M0(i){return O({},i,{"data-precedence":i.precedence,precedence:null})}function YR(i,r,o,u){i.querySelector('link[rel="preload"][as="style"]['+r+"]")?u.loading=1:(r=i.createElement("link"),u.preload=r,r.addEventListener("load",function(){return u.loading|=1}),r.addEventListener("error",function(){return u.loading|=2}),Gt(r,"link",o),it(r),i.head.appendChild(r))}function Eo(i){return'[src="'+ut(i)+'"]'}function Wl(i){return"script[async]"+i}function V0(i,r,o){if(r.count++,r.instance===null)switch(r.type){case"style":var u=i.querySelector('style[data-href~="'+ut(o.href)+'"]');if(u)return r.instance=u,it(u),u;var h=O({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(i.ownerDocument||i).createElement("style"),it(u),Gt(u,"style",h),hf(u,o.precedence,i),r.instance=u;case"stylesheet":h=_o(o.href);var m=i.querySelector(Xl(h));if(m)return r.state.loading|=4,r.instance=m,it(m),m;u=M0(o),(h=Gn.get(h))&&$m(u,h),m=(i.ownerDocument||i).createElement("link"),it(m);var E=m;return E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Gt(m,"link",u),r.state.loading|=4,hf(m,o.precedence,i),r.instance=m;case"script":return m=Eo(o.src),(h=i.querySelector(Wl(m)))?(r.instance=h,it(h),h):(u=o,(h=Gn.get(m))&&(u=O({},o),Ym(u,h)),i=i.ownerDocument||i,h=i.createElement("script"),it(h),Gt(h,"link",u),i.head.appendChild(h),r.instance=h);case"void":return null;default:throw Error(a(443,r.type))}else r.type==="stylesheet"&&!(r.state.loading&4)&&(u=r.instance,r.state.loading|=4,hf(u,o.precedence,i));return r.instance}function hf(i,r,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var A=u[E];if(A.dataset.precedence===r)m=A;else if(m!==h)break}m?m.parentNode.insertBefore(i,m.nextSibling):(r=o.nodeType===9?o.head:o,r.insertBefore(i,r.firstChild))}function $m(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.title==null&&(i.title=r.title)}function Ym(i,r){i.crossOrigin==null&&(i.crossOrigin=r.crossOrigin),i.referrerPolicy==null&&(i.referrerPolicy=r.referrerPolicy),i.integrity==null&&(i.integrity=r.integrity)}var df=null;function L0(i,r,o){if(df===null){var u=new Map,h=df=new Map;h.set(o,u)}else h=df,u=h.get(o),u||(u=new Map,h.set(o,u));if(u.has(i))return u;for(u.set(i,null),o=o.getElementsByTagName(i),h=0;h<o.length;h++){var m=o[h];if(!(m[Or]||m[Mt]||i==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(r)||"";E=i+E;var A=u.get(E);A?A.push(m):u.set(E,[m])}}return u}function U0(i,r,o){i=i.ownerDocument||i,i.head.insertBefore(o,r==="title"?i.querySelector("head > title"):null)}function QR(i,r,o){if(o===1||r.itemProp!=null)return!1;switch(i){case"meta":case"title":return!0;case"style":if(typeof r.precedence!="string"||typeof r.href!="string"||r.href==="")break;return!0;case"link":if(typeof r.rel!="string"||typeof r.href!="string"||r.href===""||r.onLoad||r.onError)break;switch(r.rel){case"stylesheet":return i=r.disabled,typeof r.precedence=="string"&&i==null;default:return!0}case"script":if(r.async&&typeof r.async!="function"&&typeof r.async!="symbol"&&!r.onLoad&&!r.onError&&r.src&&typeof r.src=="string")return!0}return!1}function j0(i){return!(i.type==="stylesheet"&&!(i.state.loading&3))}var Zl=null;function XR(){}function WR(i,r,o){if(Zl===null)throw Error(a(475));var u=Zl;if(r.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&!(r.state.loading&4)){if(r.instance===null){var h=_o(o.href),m=i.querySelector(Xl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(u.count++,u=mf.bind(u),i.then(u,u)),r.state.loading|=4,r.instance=m,it(m);return}m=i.ownerDocument||i,o=M0(o),(h=Gn.get(h))&&$m(o,h),m=m.createElement("link"),it(m);var E=m;E._p=new Promise(function(A,C){E.onload=A,E.onerror=C}),Gt(m,"link",o),r.instance=m}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(r,i),(i=r.state.preload)&&!(r.state.loading&3)&&(u.count++,r=mf.bind(u),i.addEventListener("load",r),i.addEventListener("error",r))}}function ZR(){if(Zl===null)throw Error(a(475));var i=Zl;return i.stylesheets&&i.count===0&&Qm(i,i.stylesheets),0<i.count?function(r){var o=setTimeout(function(){if(i.stylesheets&&Qm(i,i.stylesheets),i.unsuspend){var u=i.unsuspend;i.unsuspend=null,u()}},6e4);return i.unsuspend=r,function(){i.unsuspend=null,clearTimeout(o)}}:null}function mf(){if(this.count--,this.count===0){if(this.stylesheets)Qm(this,this.stylesheets);else if(this.unsuspend){var i=this.unsuspend;this.unsuspend=null,i()}}}var pf=null;function Qm(i,r){i.stylesheets=null,i.unsuspend!==null&&(i.count++,pf=new Map,r.forEach(JR,i),pf=null,mf.call(i))}function JR(i,r){if(!(r.state.loading&4)){var o=pf.get(i);if(o)var u=o.get(null);else{o=new Map,pf.set(i,o);for(var h=i.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}h=r.instance,E=h.getAttribute("data-precedence"),m=o.get(E)||u,m===u&&o.set(null,h),o.set(E,h),this.count++,u=mf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(i=i.nodeType===9?i.head:i,i.insertBefore(h,i.firstChild)),r.state.loading|=4}}var Jl={$$typeof:N,Provider:null,Consumer:null,_currentValue:xe,_currentValue2:xe,_threadCount:0};function eI(i,r,o,u,h,m,E,A){this.tag=1,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ps(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ps(0),this.hiddenUpdates=Ps(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=A,this.incompleteTransitions=new Map}function z0(i,r,o,u,h,m,E,A,C,U,X,te){return i=new eI(i,r,o,E,A,C,U,te),r=1,m===!0&&(r|=24),m=qn(3,null,null,r),i.current=m,m.stateNode=i,r=Id(),r.refCount++,i.pooledCache=r,r.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:r},om(m),i}function F0(i){return i?(i=Ws,i):Ws}function B0(i,r,o,u,h,m){h=F0(h),u.context===null?u.context=h:u.pendingContext=h,u=Kr(r),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=$r(i,u,r),o!==null&&(un(o,i,r),Vl(o,i,r))}function q0(i,r){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var o=i.retryLane;i.retryLane=o!==0&&o<r?o:r}}function Xm(i,r){q0(i,r),(i=i.alternate)&&q0(i,r)}function H0(i){if(i.tag===13){var r=jr(i,67108864);r!==null&&un(r,i,67108864),Xm(i,67108864)}}var gf=!0;function tI(i,r,o,u){var h=R.T;R.T=null;var m=ue.p;try{ue.p=2,Wm(i,r,o,u)}finally{ue.p=m,R.T=h}}function nI(i,r,o,u){var h=R.T;R.T=null;var m=ue.p;try{ue.p=8,Wm(i,r,o,u)}finally{ue.p=m,R.T=h}}function Wm(i,r,o,u){if(gf){var h=Zm(u);if(h===null)jm(i,r,u,yf,o),K0(i,u);else if(rI(h,i,r,o,u))u.stopPropagation();else if(K0(i,u),r&4&&-1<iI.indexOf(i)){for(;h!==null;){var m=Fi(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Qn(m.pendingLanes);if(E!==0){var A=m;for(A.pendingLanes|=2,A.entangledLanes|=2;E;){var C=1<<31-an(E);A.entanglements[1]|=C,E&=~C}Ti(m),!(at&6)&&(Jc=fn()+500,$l(0))}}break;case 13:A=jr(m,2),A!==null&&un(A,m,2),nf(),Xm(m,2)}if(m=Zm(u),m===null&&jm(i,r,u,yf,o),m===h)break;h=m}h!==null&&u.stopPropagation()}else jm(i,r,u,null,o)}}function Zm(i){return i=js(i),Jm(i)}var yf=null;function Jm(i){if(yf=null,i=Xn(i),i!==null){var r=ye(i);if(r===null)i=null;else{var o=r.tag;if(o===13){if(i=Ke(r),i!==null)return i;i=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;i=null}else r!==i&&(i=null)}}return yf=i,null}function G0(i){switch(i){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(tc()){case Rt:return 2;case Pt:return 8;case ji:case nc:return 32;case tl:return 268435456;default:return 32}default:return 32}}var ep=!1,ea=null,ta=null,na=null,eu=new Map,tu=new Map,ia=[],iI="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function K0(i,r){switch(i){case"focusin":case"focusout":ea=null;break;case"dragenter":case"dragleave":ta=null;break;case"mouseover":case"mouseout":na=null;break;case"pointerover":case"pointerout":eu.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":tu.delete(r.pointerId)}}function nu(i,r,o,u,h,m){return i===null||i.nativeEvent!==m?(i={blockedOn:r,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},r!==null&&(r=Fi(r),r!==null&&H0(r)),i):(i.eventSystemFlags|=u,r=i.targetContainers,h!==null&&r.indexOf(h)===-1&&r.push(h),i)}function rI(i,r,o,u,h){switch(r){case"focusin":return ea=nu(ea,i,r,o,u,h),!0;case"dragenter":return ta=nu(ta,i,r,o,u,h),!0;case"mouseover":return na=nu(na,i,r,o,u,h),!0;case"pointerover":var m=h.pointerId;return eu.set(m,nu(eu.get(m)||null,i,r,o,u,h)),!0;case"gotpointercapture":return m=h.pointerId,tu.set(m,nu(tu.get(m)||null,i,r,o,u,h)),!0}return!1}function $0(i){var r=Xn(i.target);if(r!==null){var o=ye(r);if(o!==null){if(r=o.tag,r===13){if(r=Ke(o),r!==null){i.blockedOn=r,Nr(i.priority,function(){if(o.tag===13){var u=Sn(),h=jr(o,u);h!==null&&un(h,o,u),Xm(o,u)}});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){i.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}i.blockedOn=null}function vf(i){if(i.blockedOn!==null)return!1;for(var r=i.targetContainers;0<r.length;){var o=Zm(i.nativeEvent);if(o===null){o=i.nativeEvent;var u=new o.constructor(o.type,o);kn=u,o.target.dispatchEvent(u),kn=null}else return r=Fi(o),r!==null&&H0(r),i.blockedOn=o,!1;r.shift()}return!0}function Y0(i,r,o){vf(i)&&o.delete(r)}function aI(){ep=!1,ea!==null&&vf(ea)&&(ea=null),ta!==null&&vf(ta)&&(ta=null),na!==null&&vf(na)&&(na=null),eu.forEach(Y0),tu.forEach(Y0)}function _f(i,r){i.blockedOn===r&&(i.blockedOn=null,ep||(ep=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,aI)))}var Ef=null;function Q0(i){Ef!==i&&(Ef=i,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Ef===i&&(Ef=null);for(var r=0;r<i.length;r+=3){var o=i[r],u=i[r+1],h=i[r+2];if(typeof u!="function"){if(Jm(u||o)===null)continue;break}var m=Fi(o);m!==null&&(i.splice(r,3),r-=3,qd(m,{pending:!0,data:h,method:o.method,action:u},u,h))}}))}function iu(i){function r(C){return _f(C,i)}ea!==null&&_f(ea,i),ta!==null&&_f(ta,i),na!==null&&_f(na,i),eu.forEach(r),tu.forEach(r);for(var o=0;o<ia.length;o++){var u=ia[o];u.blockedOn===i&&(u.blockedOn=null)}for(;0<ia.length&&(o=ia[0],o.blockedOn===null);)$0(o),o.blockedOn===null&&ia.shift();if(o=(i.ownerDocument||i).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var h=o[u],m=o[u+1],E=h[It]||null;if(typeof m=="function")E||Q0(o);else if(E){var A=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[It]||null)A=E.formAction;else if(Jm(h)!==null)continue}else A=E.action;typeof A=="function"?o[u+1]=A:(o.splice(u,3),u-=3),Q0(o)}}}function tp(i){this._internalRoot=i}Tf.prototype.render=tp.prototype.render=function(i){var r=this._internalRoot;if(r===null)throw Error(a(409));var o=r.current,u=Sn();B0(o,u,i,r,null,null)},Tf.prototype.unmount=tp.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var r=i.containerInfo;i.tag===0&&po(),B0(i.current,2,null,i,null,null),nf(),r[zi]=null}};function Tf(i){this._internalRoot=i}Tf.prototype.unstable_scheduleHydration=function(i){if(i){var r=oc();i={blockedOn:null,target:i,priority:r};for(var o=0;o<ia.length&&r!==0&&r<ia[o].priority;o++);ia.splice(o,0,i),o===0&&$0(i)}};var X0=e.version;if(X0!=="19.0.0")throw Error(a(527,X0,"19.0.0"));ue.findDOMNode=function(i){var r=i._reactInternals;if(r===void 0)throw typeof i.render=="function"?Error(a(188)):(i=Object.keys(i).join(","),Error(a(268,i)));return i=ne(r),i=i!==null?me(i):null,i=i===null?null:i.stateNode,i};var sI={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Xn,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bf.isDisabled&&bf.supportsFiber)try{wr=bf.inject(sI),Qt=bf}catch{}}return au.createRoot=function(i,r){if(!s(i))throw Error(a(299));var o=!1,u="",h=d_,m=m_,E=p_,A=null;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(u=r.identifierPrefix),r.onUncaughtError!==void 0&&(h=r.onUncaughtError),r.onCaughtError!==void 0&&(m=r.onCaughtError),r.onRecoverableError!==void 0&&(E=r.onRecoverableError),r.unstable_transitionCallbacks!==void 0&&(A=r.unstable_transitionCallbacks)),r=z0(i,1,!1,null,null,o,u,h,m,E,A,null),i[zi]=r.current,Um(i.nodeType===8?i.parentNode:i),new tp(r)},au.hydrateRoot=function(i,r,o){if(!s(i))throw Error(a(299));var u=!1,h="",m=d_,E=m_,A=p_,C=null,U=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(A=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(U=o.formState)),r=z0(i,1,!0,r,o??null,u,h,m,E,A,C,U),r.context=F0(null),o=r.current,u=Sn(),h=Kr(u),h.callback=null,$r(o,h,u),r.current.lanes=u,dt(r,u),Ti(r),i[zi]=r.current,Um(i),new Tf(r)},au.version="19.0.0",au}var sE;function gI(){if(sE)return rp.exports;sE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),rp.exports=pI(),rp.exports}var yI=gI(),su={},oE;function vI(){if(oE)return su;oE=1,Object.defineProperty(su,"__esModule",{value:!0}),su.parse=c,su.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,N){const x=new l,H=w.length;if(H<2)return x;const k=(N==null?void 0:N.decode)||_;let B=0;do{const W=w.indexOf("=",B);if(W===-1)break;const Q=w.indexOf(";",B),oe=Q===-1?H:Q;if(W>oe){B=w.lastIndexOf(";",W-1)+1;continue}const ae=d(w,B,W),Ee=p(w,W,ae),M=w.slice(ae,Ee);if(x[M]===void 0){let I=d(w,W+1,oe),R=p(w,oe,I);const O=k(w.slice(I,R));x[M]=O}B=oe+1}while(B<H);return x}function d(w,N,x){do{const H=w.charCodeAt(N);if(H!==32&&H!==9)return N}while(++N<x);return x}function p(w,N,x){for(;N>x;){const H=w.charCodeAt(--N);if(H!==32&&H!==9)return N+1}return x}function g(w,N,x){const H=(x==null?void 0:x.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const k=H(N);if(!e.test(k))throw new TypeError(`argument val is invalid: ${N}`);let B=w+"="+k;if(!x)return B;if(x.maxAge!==void 0){if(!Number.isInteger(x.maxAge))throw new TypeError(`option maxAge is invalid: ${x.maxAge}`);B+="; Max-Age="+x.maxAge}if(x.domain){if(!t.test(x.domain))throw new TypeError(`option domain is invalid: ${x.domain}`);B+="; Domain="+x.domain}if(x.path){if(!a.test(x.path))throw new TypeError(`option path is invalid: ${x.path}`);B+="; Path="+x.path}if(x.expires){if(!b(x.expires)||!Number.isFinite(x.expires.valueOf()))throw new TypeError(`option expires is invalid: ${x.expires}`);B+="; Expires="+x.expires.toUTCString()}if(x.httpOnly&&(B+="; HttpOnly"),x.secure&&(B+="; Secure"),x.partitioned&&(B+="; Partitioned"),x.priority)switch(typeof x.priority=="string"?x.priority.toLowerCase():void 0){case"low":B+="; Priority=Low";break;case"medium":B+="; Priority=Medium";break;case"high":B+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${x.priority}`)}if(x.sameSite)switch(typeof x.sameSite=="string"?x.sameSite.toLowerCase():x.sameSite){case!0:case"strict":B+="; SameSite=Strict";break;case"lax":B+="; SameSite=Lax";break;case"none":B+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${x.sameSite}`)}return B}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function b(w){return s.call(w)==="[object Date]"}return su}vI();/**
 * react-router v7.1.5
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var lE="popstate";function _I(n={}){function e(a,s){let{pathname:l,search:c,hash:d}=a.location;return Pp("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(a,s){return typeof s=="string"?s:wu(s)}return TI(e,t,null,n)}function st(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function Oi(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function EI(){return Math.random().toString(36).substring(2,10)}function uE(n,e){return{usr:n.state,key:n.key,idx:e}}function Pp(n,e,t=null,a){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?qo(e):e,state:t,key:e&&e.key||a||EI()}}function wu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function qo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let a=n.indexOf("?");a>=0&&(e.search=n.substring(a),n=n.substring(0,a)),n&&(e.pathname=n)}return e}function TI(n,e,t,a={}){let{window:s=document.defaultView,v5Compat:l=!1}=a,c=s.history,d="POP",p=null,g=_();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function _(){return(c.state||{idx:null}).idx}function b(){d="POP";let k=_(),B=k==null?null:k-g;g=k,p&&p({action:d,location:H.location,delta:B})}function w(k,B){d="PUSH";let W=Pp(H.location,k,B);g=_()+1;let Q=uE(W,g),oe=H.createHref(W);try{c.pushState(Q,"",oe)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;s.location.assign(oe)}l&&p&&p({action:d,location:H.location,delta:1})}function N(k,B){d="REPLACE";let W=Pp(H.location,k,B);g=_();let Q=uE(W,g),oe=H.createHref(W);c.replaceState(Q,"",oe),l&&p&&p({action:d,location:H.location,delta:0})}function x(k){let B=s.location.origin!=="null"?s.location.origin:s.location.href,W=typeof k=="string"?k:wu(k);return W=W.replace(/ $/,"%20"),st(B,`No window.location.(origin|href) available to create URL for href: ${W}`),new URL(W,B)}let H={get action(){return d},get location(){return n(s,c)},listen(k){if(p)throw new Error("A history only accepts one active listener");return s.addEventListener(lE,b),p=k,()=>{s.removeEventListener(lE,b),p=null}},createHref(k){return e(s,k)},createURL:x,encodeLocation(k){let B=x(k);return{pathname:B.pathname,search:B.search,hash:B.hash}},push:w,replace:N,go(k){return c.go(k)}};return H}function Ub(n,e,t="/"){return bI(n,e,t,!1)}function bI(n,e,t,a){let s=typeof e=="string"?qo(e):e,l=_a(s.pathname||"/",t);if(l==null)return null;let c=jb(n);AI(c);let d=null;for(let p=0;d==null&&p<c.length;++p){let g=PI(l);d=DI(c[p],g,a)}return d}function jb(n,e=[],t=[],a=""){let s=(l,c,d)=>{let p={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};p.relativePath.startsWith("/")&&(st(p.relativePath.startsWith(a),`Absolute route path "${p.relativePath}" nested under path "${a}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(a.length));let g=dr([a,p.relativePath]),_=t.concat(p);l.children&&l.children.length>0&&(st(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),jb(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:NI(g,l.index),routesMeta:_})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let p of zb(l.path))s(l,c,p)}),e}function zb(n){let e=n.split("/");if(e.length===0)return[];let[t,...a]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(a.length===0)return s?[l,""]:[l];let c=zb(a.join("/")),d=[];return d.push(...c.map(p=>p===""?l:[l,p].join("/"))),s&&d.push(...c),d.map(p=>n.startsWith("/")&&p===""?"/":p)}function AI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:OI(e.routesMeta.map(a=>a.childrenIndex),t.routesMeta.map(a=>a.childrenIndex)))}var wI=/^:[\w-]+$/,SI=3,RI=2,II=1,CI=10,xI=-2,cE=n=>n==="*";function NI(n,e){let t=n.split("/"),a=t.length;return t.some(cE)&&(a+=xI),e&&(a+=RI),t.filter(s=>!cE(s)).reduce((s,l)=>s+(wI.test(l)?SI:l===""?II:CI),a)}function OI(n,e){return n.length===e.length&&n.slice(0,-1).every((a,s)=>a===e[s])?n[n.length-1]-e[e.length-1]:0}function DI(n,e,t=!1){let{routesMeta:a}=n,s={},l="/",c=[];for(let d=0;d<a.length;++d){let p=a[d],g=d===a.length-1,_=l==="/"?e:e.slice(l.length)||"/",b=Yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:g},_),w=p.route;if(!b&&g&&t&&!a[a.length-1].route.index&&(b=Yf({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},_)),!b)return null;Object.assign(s,b.params),c.push({params:s,pathname:dr([l,b.pathname]),pathnameBase:UI(dr([l,b.pathnameBase])),route:w}),b.pathnameBase!=="/"&&(l=dr([l,b.pathnameBase]))}return c}function Yf(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,a]=kI(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:a.reduce((g,{paramName:_,isOptional:b},w)=>{if(_==="*"){let x=d[w]||"";c=l.slice(0,l.length-x.length).replace(/(.)\/+$/,"$1")}const N=d[w];return b&&!N?g[_]=void 0:g[_]=(N||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function kI(n,e=!1,t=!0){Oi(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let a=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,p)=>(a.push({paramName:d,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(a.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),a]}function PI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Oi(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function _a(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,a=n.charAt(t);return a&&a!=="/"?null:n.slice(t)||"/"}function MI(n,e="/"){let{pathname:t,search:a="",hash:s=""}=typeof n=="string"?qo(n):n;return{pathname:t?t.startsWith("/")?t:VI(t,e):e,search:jI(a),hash:zI(s)}}function VI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function lp(n,e,t,a){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(a)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function LI(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Fb(n){let e=LI(n);return e.map((t,a)=>a===e.length-1?t.pathname:t.pathnameBase)}function Bb(n,e,t,a=!1){let s;typeof n=="string"?s=qo(n):(s={...n},st(!s.pathname||!s.pathname.includes("?"),lp("?","pathname","search",s)),st(!s.pathname||!s.pathname.includes("#"),lp("#","pathname","hash",s)),st(!s.search||!s.search.includes("#"),lp("#","search","hash",s)));let l=n===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=t;else{let b=e.length-1;if(!a&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),b-=1;s.pathname=w.join("/")}d=b>=0?e[b]:"/"}let p=MI(s,d),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!p.pathname.endsWith("/")&&(g||_)&&(p.pathname+="/"),p}var dr=n=>n.join("/").replace(/\/\/+/g,"/"),UI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),jI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,zI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function FI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var qb=["POST","PUT","PATCH","DELETE"];new Set(qb);var BI=["GET",...qb];new Set(BI);var Ho=j.createContext(null);Ho.displayName="DataRouter";var Th=j.createContext(null);Th.displayName="DataRouterState";var Hb=j.createContext({isTransitioning:!1});Hb.displayName="ViewTransition";var qI=j.createContext(new Map);qI.displayName="Fetchers";var HI=j.createContext(null);HI.displayName="Await";var Mi=j.createContext(null);Mi.displayName="Navigation";var Uu=j.createContext(null);Uu.displayName="Location";var Er=j.createContext({outlet:null,matches:[],isDataRoute:!1});Er.displayName="Route";var xg=j.createContext(null);xg.displayName="RouteError";function GI(n,{relative:e}={}){st(ju(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:a}=j.useContext(Mi),{hash:s,pathname:l,search:c}=zu(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:dr([t,l])),a.createHref({pathname:d,search:c,hash:s})}function ju(){return j.useContext(Uu)!=null}function As(){return st(ju(),"useLocation() may be used only in the context of a <Router> component."),j.useContext(Uu).location}var Gb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Kb(n){j.useContext(Mi).static||j.useLayoutEffect(n)}function $b(){let{isDataRoute:n}=j.useContext(Er);return n?rC():KI()}function KI(){st(ju(),"useNavigate() may be used only in the context of a <Router> component.");let n=j.useContext(Ho),{basename:e,navigator:t}=j.useContext(Mi),{matches:a}=j.useContext(Er),{pathname:s}=As(),l=JSON.stringify(Fb(a)),c=j.useRef(!1);return Kb(()=>{c.current=!0}),j.useCallback((p,g={})=>{if(Oi(c.current,Gb),!c.current)return;if(typeof p=="number"){t.go(p);return}let _=Bb(p,JSON.parse(l),s,g.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:dr([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,l,s,n])}j.createContext(null);function zu(n,{relative:e}={}){let{matches:t}=j.useContext(Er),{pathname:a}=As(),s=JSON.stringify(Fb(t));return j.useMemo(()=>Bb(n,JSON.parse(s),a,e==="path"),[n,s,a,e])}function $I(n,e){return Yb(n,e)}function Yb(n,e,t,a){var W;st(ju(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=j.useContext(Mi),{matches:c}=j.useContext(Er),d=c[c.length-1],p=d?d.params:{},g=d?d.pathname:"/",_=d?d.pathnameBase:"/",b=d&&d.route;{let Q=b&&b.path||"";Qb(g,!b||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let w=As(),N;if(e){let Q=typeof e=="string"?qo(e):e;st(_==="/"||((W=Q.pathname)==null?void 0:W.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),N=Q}else N=w;let x=N.pathname||"/",H=x;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");H="/"+x.replace(/^\//,"").split("/").slice(Q.length).join("/")}let k=!l&&t&&t.matches&&t.matches.length>0?t.matches:Ub(n,{pathname:H});Oi(b||k!=null,`No routes matched location "${N.pathname}${N.search}${N.hash}" `),Oi(k==null||k[k.length-1].route.element!==void 0||k[k.length-1].route.Component!==void 0||k[k.length-1].route.lazy!==void 0,`Matched leaf route at location "${N.pathname}${N.search}${N.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let B=ZI(k&&k.map(Q=>Object.assign({},Q,{params:Object.assign({},p,Q.params),pathname:dr([_,s.encodeLocation?s.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:dr([_,s.encodeLocation?s.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,a);return e&&B?j.createElement(Uu.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...N},navigationType:"POP"}},B):B}function YI(){let n=iC(),e=FI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,a="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:a},l={padding:"2px 4px",backgroundColor:a},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=j.createElement(j.Fragment,null,j.createElement("p",null,"💿 Hey developer 👋"),j.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",j.createElement("code",{style:l},"ErrorBoundary")," or"," ",j.createElement("code",{style:l},"errorElement")," prop on your route.")),j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),t?j.createElement("pre",{style:s},t):null,c)}var QI=j.createElement(YI,null),XI=class extends j.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?j.createElement(Er.Provider,{value:this.props.routeContext},j.createElement(xg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function WI({routeContext:n,match:e,children:t}){let a=j.useContext(Ho);return a&&a.static&&a.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=e.route.id),j.createElement(Er.Provider,{value:n},t)}function ZI(n,e=[],t=null,a=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,l=t==null?void 0:t.errors;if(l!=null){let p=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);st(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,p+1))}let c=!1,d=-1;if(t)for(let p=0;p<s.length;p++){let g=s[p];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=p),g.route.id){let{loaderData:_,errors:b}=t,w=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!b||b[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((p,g,_)=>{let b,w=!1,N=null,x=null;t&&(b=l&&g.route.id?l[g.route.id]:void 0,N=g.route.errorElement||QI,c&&(d<0&&_===0?(Qb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,x=null):d===_&&(w=!0,x=g.route.hydrateFallbackElement||null)));let H=e.concat(s.slice(0,_+1)),k=()=>{let B;return b?B=N:w?B=x:g.route.Component?B=j.createElement(g.route.Component,null):g.route.element?B=g.route.element:B=p,j.createElement(WI,{match:g,routeContext:{outlet:p,matches:H,isDataRoute:t!=null},children:B})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?j.createElement(XI,{location:t.location,revalidation:t.revalidation,component:N,error:b,children:k(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):k()},null)}function Ng(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function JI(n){let e=j.useContext(Ho);return st(e,Ng(n)),e}function eC(n){let e=j.useContext(Th);return st(e,Ng(n)),e}function tC(n){let e=j.useContext(Er);return st(e,Ng(n)),e}function Og(n){let e=tC(n),t=e.matches[e.matches.length-1];return st(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function nC(){return Og("useRouteId")}function iC(){var a;let n=j.useContext(xg),e=eC("useRouteError"),t=Og("useRouteError");return n!==void 0?n:(a=e.errors)==null?void 0:a[t]}function rC(){let{router:n}=JI("useNavigate"),e=Og("useNavigate"),t=j.useRef(!1);return Kb(()=>{t.current=!0}),j.useCallback(async(s,l={})=>{Oi(t.current,Gb),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...l}))},[n,e])}var fE={};function Qb(n,e,t){!e&&!fE[n]&&(fE[n]=!0,Oi(!1,t))}j.memo(aC);function aC({routes:n,future:e,state:t}){return Yb(n,void 0,t,e)}function lu(n){st(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function sC({basename:n="/",children:e=null,location:t,navigationType:a="POP",navigator:s,static:l=!1}){st(!ju(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=j.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof t=="string"&&(t=qo(t));let{pathname:p="/",search:g="",hash:_="",state:b=null,key:w="default"}=t,N=j.useMemo(()=>{let x=_a(p,c);return x==null?null:{location:{pathname:x,search:g,hash:_,state:b,key:w},navigationType:a}},[c,p,g,_,b,w,a]);return Oi(N!=null,`<Router basename="${c}"> is not able to match the URL "${p}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),N==null?null:j.createElement(Mi.Provider,{value:d},j.createElement(Uu.Provider,{children:e,value:N}))}function oC({children:n,location:e}){return $I(Mp(n),e)}function Mp(n,e=[]){let t=[];return j.Children.forEach(n,(a,s)=>{if(!j.isValidElement(a))return;let l=[...e,s];if(a.type===j.Fragment){t.push.apply(t,Mp(a.props.children,l));return}st(a.type===lu,`[${typeof a.type=="string"?a.type:a.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),st(!a.props.index||!a.props.children,"An index route cannot have child routes.");let c={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,hydrateFallbackElement:a.props.hydrateFallbackElement,HydrateFallback:a.props.HydrateFallback,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.hasErrorBoundary===!0||a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(c.children=Mp(a.props.children,l)),t.push(c)}),t}var Pf="get",Mf="application/x-www-form-urlencoded";function bh(n){return n!=null&&typeof n.tagName=="string"}function lC(n){return bh(n)&&n.tagName.toLowerCase()==="button"}function uC(n){return bh(n)&&n.tagName.toLowerCase()==="form"}function cC(n){return bh(n)&&n.tagName.toLowerCase()==="input"}function fC(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function hC(n,e){return n.button===0&&(!e||e==="_self")&&!fC(n)}var Af=null;function dC(){if(Af===null)try{new FormData(document.createElement("form"),0),Af=!1}catch{Af=!0}return Af}var mC=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function up(n){return n!=null&&!mC.has(n)?(Oi(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Mf}"`),null):n}function pC(n,e){let t,a,s,l,c;if(uC(n)){let d=n.getAttribute("action");a=d?_a(d,e):null,t=n.getAttribute("method")||Pf,s=up(n.getAttribute("enctype"))||Mf,l=new FormData(n)}else if(lC(n)||cC(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=n.getAttribute("formaction")||d.getAttribute("action");if(a=p?_a(p,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Pf,s=up(n.getAttribute("formenctype"))||up(d.getAttribute("enctype"))||Mf,l=new FormData(d,n),!dC()){let{name:g,type:_,value:b}=n;if(_==="image"){let w=g?`${g}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else g&&l.append(g,b)}}else{if(bh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Pf,a=null,s=Mf,c=n}return l&&s==="text/plain"&&(c=l,l=void 0),{action:a,method:t.toLowerCase(),encType:s,formData:l,body:c}}function Dg(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function gC(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function yC(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function vC(n,e,t){let a=await Promise.all(n.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await gC(l,t);return c.links?c.links():[]}return[]}));return bC(a.flat(1).filter(yC).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function hE(n,e,t,a,s,l){let c=(p,g)=>t[g]?p.route.id!==t[g].route.id:!0,d=(p,g)=>{var _;return t[g].pathname!==p.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==p.params["*"]};return l==="assets"?e.filter((p,g)=>c(p,g)||d(p,g)):l==="data"?e.filter((p,g)=>{var b;let _=a.routes[p.route.id];if(!_||!_.hasLoader)return!1;if(c(p,g)||d(p,g))return!0;if(p.route.shouldRevalidate){let w=p.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((b=t[0])==null?void 0:b.params)||{},nextUrl:new URL(n,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function _C(n,e){return EC(n.map(t=>{let a=e.routes[t.route.id];if(!a)return[];let s=[a.module];return a.imports&&(s=s.concat(a.imports)),s}).flat(1))}function EC(n){return[...new Set(n)]}function TC(n){let e={},t=Object.keys(n).sort();for(let a of t)e[a]=n[a];return e}function bC(n,e){let t=new Set;return new Set(e),n.reduce((a,s)=>{let l=JSON.stringify(TC(s));return t.has(l)||(t.add(l),a.push({key:l,link:s})),a},[])}function AC(n){let e=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return e.pathname==="/"?e.pathname="_root.data":e.pathname=`${e.pathname.replace(/\/$/,"")}.data`,e}function wC(){let n=j.useContext(Ho);return Dg(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function SC(){let n=j.useContext(Th);return Dg(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var kg=j.createContext(void 0);kg.displayName="FrameworkContext";function Xb(){let n=j.useContext(kg);return Dg(n,"You must render this element inside a <HydratedRouter> element"),n}function RC(n,e){let t=j.useContext(kg),[a,s]=j.useState(!1),[l,c]=j.useState(!1),{onFocus:d,onBlur:p,onMouseEnter:g,onMouseLeave:_,onTouchStart:b}=e,w=j.useRef(null);j.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=B=>{B.forEach(W=>{c(W.isIntersecting)})},k=new IntersectionObserver(H,{threshold:.5});return w.current&&k.observe(w.current),()=>{k.disconnect()}}},[n]),j.useEffect(()=>{if(a){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[a]);let N=()=>{s(!0)},x=()=>{s(!1),c(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:ou(d,N),onBlur:ou(p,x),onMouseEnter:ou(g,N),onMouseLeave:ou(_,x),onTouchStart:ou(b,N)}]:[!1,w,{}]}function ou(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function IC({page:n,...e}){let{router:t}=wC(),a=j.useMemo(()=>Ub(t.routes,n,t.basename),[t.routes,n,t.basename]);return a?j.createElement(xC,{page:n,matches:a,...e}):null}function CC(n){let{manifest:e,routeModules:t}=Xb(),[a,s]=j.useState([]);return j.useEffect(()=>{let l=!1;return vC(n,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[n,e,t]),a}function xC({page:n,matches:e,...t}){let a=As(),{manifest:s,routeModules:l}=Xb(),{loaderData:c,matches:d}=SC(),p=j.useMemo(()=>hE(n,e,d,s,a,"data"),[n,e,d,s,a]),g=j.useMemo(()=>hE(n,e,d,s,a,"assets"),[n,e,d,s,a]),_=j.useMemo(()=>{if(n===a.pathname+a.search+a.hash)return[];let N=new Set,x=!1;if(e.forEach(k=>{var W;let B=s.routes[k.route.id];!B||!B.hasLoader||(!p.some(Q=>Q.route.id===k.route.id)&&k.route.id in c&&((W=l[k.route.id])!=null&&W.shouldRevalidate)||B.hasClientLoader?x=!0:N.add(k.route.id))}),N.size===0)return[];let H=AC(n);return x&&N.size>0&&H.searchParams.set("_routes",e.filter(k=>N.has(k.route.id)).map(k=>k.route.id).join(",")),[H.pathname+H.search]},[c,a,s,p,e,n,l]),b=j.useMemo(()=>_C(g,s),[g,s]),w=CC(g);return j.createElement(j.Fragment,null,_.map(N=>j.createElement("link",{key:N,rel:"prefetch",as:"fetch",href:N,...t})),b.map(N=>j.createElement("link",{key:N,rel:"modulepreload",href:N,...t})),w.map(({key:N,link:x})=>j.createElement("link",{key:N,...x})))}function NC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var Wb=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Wb&&(window.__reactRouterVersion="7.1.5")}catch{}function OC({basename:n,children:e,window:t}){let a=j.useRef();a.current==null&&(a.current=_I({window:t,v5Compat:!0}));let s=a.current,[l,c]=j.useState({action:s.action,location:s.location}),d=j.useCallback(p=>{j.startTransition(()=>c(p))},[c]);return j.useLayoutEffect(()=>s.listen(d),[s,d]),j.createElement(sC,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:s})}var Zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jb=j.forwardRef(function({onClick:e,discover:t="render",prefetch:a="none",relative:s,reloadDocument:l,replace:c,state:d,target:p,to:g,preventScrollReset:_,viewTransition:b,...w},N){let{basename:x}=j.useContext(Mi),H=typeof g=="string"&&Zb.test(g),k,B=!1;if(typeof g=="string"&&H&&(k=g,Wb))try{let R=new URL(window.location.href),O=g.startsWith("//")?new URL(R.protocol+g):new URL(g),L=_a(O.pathname,x);O.origin===R.origin&&L!=null?g=L+O.search+O.hash:B=!0}catch{Oi(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let W=GI(g,{relative:s}),[Q,oe,ae]=RC(a,w),Ee=MC(g,{replace:c,state:d,target:p,preventScrollReset:_,relative:s,viewTransition:b});function M(R){e&&e(R),R.defaultPrevented||Ee(R)}let I=j.createElement("a",{...w,...ae,href:k||W,onClick:B||l?e:M,ref:NC(N,oe),target:p,"data-discover":!H&&t==="render"?"true":void 0});return Q&&!H?j.createElement(j.Fragment,null,I,j.createElement(IC,{page:W})):I});Jb.displayName="Link";var DC=j.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:d,children:p,...g},_){let b=zu(c,{relative:g.relative}),w=As(),N=j.useContext(Th),{navigator:x,basename:H}=j.useContext(Mi),k=N!=null&&zC(b)&&d===!0,B=x.encodeLocation?x.encodeLocation(b).pathname:b.pathname,W=w.pathname,Q=N&&N.navigation&&N.navigation.location?N.navigation.location.pathname:null;t||(W=W.toLowerCase(),Q=Q?Q.toLowerCase():null,B=B.toLowerCase()),Q&&H&&(Q=_a(Q,H)||Q);const oe=B!=="/"&&B.endsWith("/")?B.length-1:B.length;let ae=W===B||!s&&W.startsWith(B)&&W.charAt(oe)==="/",Ee=Q!=null&&(Q===B||!s&&Q.startsWith(B)&&Q.charAt(B.length)==="/"),M={isActive:ae,isPending:Ee,isTransitioning:k},I=ae?e:void 0,R;typeof a=="function"?R=a(M):R=[a,ae?"active":null,Ee?"pending":null,k?"transitioning":null].filter(Boolean).join(" ");let O=typeof l=="function"?l(M):l;return j.createElement(Jb,{...g,"aria-current":I,className:R,ref:_,style:O,to:c,viewTransition:d},typeof p=="function"?p(M):p)});DC.displayName="NavLink";var kC=j.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:a,replace:s,state:l,method:c=Pf,action:d,onSubmit:p,relative:g,preventScrollReset:_,viewTransition:b,...w},N)=>{let x=UC(),H=jC(d,{relative:g}),k=c.toLowerCase()==="get"?"get":"post",B=typeof d=="string"&&Zb.test(d),W=Q=>{if(p&&p(Q),Q.defaultPrevented)return;Q.preventDefault();let oe=Q.nativeEvent.submitter,ae=(oe==null?void 0:oe.getAttribute("formmethod"))||c;x(oe||Q.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:s,state:l,relative:g,preventScrollReset:_,viewTransition:b})};return j.createElement("form",{ref:N,method:k,action:H,onSubmit:a?p:W,...w,"data-discover":!B&&n==="render"?"true":void 0})});kC.displayName="Form";function PC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function eA(n){let e=j.useContext(Ho);return st(e,PC(n)),e}function MC(n,{target:e,replace:t,state:a,preventScrollReset:s,relative:l,viewTransition:c}={}){let d=$b(),p=As(),g=zu(n,{relative:l});return j.useCallback(_=>{if(hC(_,e)){_.preventDefault();let b=t!==void 0?t:wu(p)===wu(g);d(n,{replace:b,state:a,preventScrollReset:s,relative:l,viewTransition:c})}},[p,d,g,t,a,e,n,s,l,c])}var VC=0,LC=()=>`__${String(++VC)}__`;function UC(){let{router:n}=eA("useSubmit"),{basename:e}=j.useContext(Mi),t=nC();return j.useCallback(async(a,s={})=>{let{action:l,method:c,encType:d,formData:p,body:g}=pC(a,e);if(s.navigate===!1){let _=s.fetcherKey||LC();await n.fetch(_,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await n.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:p,body:g,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function jC(n,{relative:e}={}){let{basename:t}=j.useContext(Mi),a=j.useContext(Er);st(a,"useFormAction must be used inside a RouteContext");let[s]=a.matches.slice(-1),l={...zu(n||".",{relative:e})},c=As();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),p=d.getAll("index");if(p.some(_=>_==="")){d.delete("index"),p.filter(b=>b).forEach(b=>d.append("index",b));let _=d.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:dr([t,l.pathname])),wu(l)}function zC(n,e={}){let t=j.useContext(Hb);st(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:a}=eA("useViewTransitionState"),s=zu(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=_a(t.currentLocation.pathname,a)||t.currentLocation.pathname,c=_a(t.nextLocation.pathname,a)||t.nextLocation.pathname;return Yf(s.pathname,c)!=null||Yf(s.pathname,l)!=null}new TextEncoder;const Ah=j.createContext(),FC=({children:n})=>{const[e,t]=j.useState(localStorage.getItem("userId"));return T.jsx(Ah.Provider,{value:{userId:e,setUserId:t},children:n})};function BC(){return T.jsxs("div",{className:"header",children:[T.jsxs("div",{className:"auth-left-container",children:[T.jsx("h1",{className:"app-name",children:"MyndStake"}),T.jsx("h1",{className:"com-name",children:"By StepTech"})]}),T.jsx("h1",{className:"admin-text",children:"Admins only"})]})}const Pg=j.createContext(),qC=({children:n})=>{const[e,t]=j.useState({username:"",email:""}),a=s=>{t(s)};return T.jsx(Pg.Provider,{value:{details:e,updateDetails:a},children:n})},Mg=j.createContext(),HC=({children:n})=>{const[e,t]=j.useState(""),a=()=>{t("close-drawer")},s=()=>{t("open-drawer")};return T.jsx(Mg.Provider,{value:{animation:e,closeDrawer:a,openDrawer:s},children:n})};/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function GC(n,e,t){return(e=$C(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function dE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,a)}return t}function ie(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?dE(Object(t),!0).forEach(function(a){GC(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):dE(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function KC(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var a=t.call(n,e);if(typeof a!="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function $C(n){var e=KC(n,"string");return typeof e=="symbol"?e:e+""}const mE=()=>{};let Vg={},tA={},nA=null,iA={mark:mE,measure:mE};try{typeof window<"u"&&(Vg=window),typeof document<"u"&&(tA=document),typeof MutationObserver<"u"&&(nA=MutationObserver),typeof performance<"u"&&(iA=performance)}catch{}const{userAgent:pE=""}=Vg.navigator||{},Ea=Vg,nt=tA,gE=nA,wf=iA;Ea.document;const Tr=!!nt.documentElement&&!!nt.head&&typeof nt.addEventListener=="function"&&typeof nt.createElement=="function",rA=~pE.indexOf("MSIE")||~pE.indexOf("Trident/");var YC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,QC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,aA={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},XC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},sA=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],tn="classic",wh="duotone",WC="sharp",ZC="sharp-duotone",oA=[tn,wh,WC,ZC],JC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},e2={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},t2=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),n2={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},i2=["fak","fa-kit","fakd","fa-kit-duotone"],yE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},r2=["kit"],a2={kit:{"fa-kit":"fak"}},s2=["fak","fakd"],o2={kit:{fak:"fa-kit"}},vE={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Sf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},l2=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],u2=["fak","fa-kit","fakd","fa-kit-duotone"],c2={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},f2={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},h2={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},Vp={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},d2=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],Lp=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...l2,...d2],m2=["solid","regular","light","thin","duotone","brands"],lA=[1,2,3,4,5,6,7,8,9,10],p2=lA.concat([11,12,13,14,15,16,17,18,19,20]),g2=[...Object.keys(h2),...m2,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Sf.GROUP,Sf.SWAP_OPACITY,Sf.PRIMARY,Sf.SECONDARY].concat(lA.map(n=>"".concat(n,"x"))).concat(p2.map(n=>"w-".concat(n))),y2={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const mr="___FONT_AWESOME___",Up=16,uA="fa",cA="svg-inline--fa",ps="data-fa-i2svg",jp="data-fa-pseudo-element",v2="data-fa-pseudo-element-pending",Lg="data-prefix",Ug="data-icon",_E="fontawesome-i2svg",_2="async",E2=["HTML","HEAD","STYLE","SCRIPT"],fA=(()=>{try{return!0}catch{return!1}})();function Fu(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[tn]}})}const hA=ie({},aA);hA[tn]=ie(ie(ie(ie({},{"fa-duotone":"duotone"}),aA[tn]),yE.kit),yE["kit-duotone"]);const T2=Fu(hA),zp=ie({},n2);zp[tn]=ie(ie(ie(ie({},{duotone:"fad"}),zp[tn]),vE.kit),vE["kit-duotone"]);const EE=Fu(zp),Fp=ie({},Vp);Fp[tn]=ie(ie({},Fp[tn]),o2.kit);const jg=Fu(Fp),Bp=ie({},f2);Bp[tn]=ie(ie({},Bp[tn]),a2.kit);Fu(Bp);const b2=YC,dA="fa-layers-text",A2=QC,w2=ie({},JC);Fu(w2);const S2=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cp=XC,R2=[...r2,...g2],gu=Ea.FontAwesomeConfig||{};function I2(n){var e=nt.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function C2(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}nt&&typeof nt.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,a]=e;const s=C2(I2(t));s!=null&&(gu[a]=s)});const mA={styleDefault:"solid",familyDefault:tn,cssPrefix:uA,replacementClass:cA,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gu.familyPrefix&&(gu.cssPrefix=gu.familyPrefix);const Po=ie(ie({},mA),gu);Po.autoReplaceSvg||(Po.observeMutations=!1);const pe={};Object.keys(mA).forEach(n=>{Object.defineProperty(pe,n,{enumerable:!0,set:function(e){Po[n]=e,yu.forEach(t=>t(pe))},get:function(){return Po[n]}})});Object.defineProperty(pe,"familyPrefix",{enumerable:!0,set:function(n){Po.cssPrefix=n,yu.forEach(e=>e(pe))},get:function(){return Po.cssPrefix}});Ea.FontAwesomeConfig=pe;const yu=[];function x2(n){return yu.push(n),()=>{yu.splice(yu.indexOf(n),1)}}const aa=Up,wi={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function N2(n){if(!n||!Tr)return;const e=nt.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=nt.head.childNodes;let a=null;for(let s=t.length-1;s>-1;s--){const l=t[s],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(a=l)}return nt.head.insertBefore(e,a),n}const O2="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Su(){let n=12,e="";for(;n-- >0;)e+=O2[Math.random()*62|0];return e}function Go(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function zg(n){return n.classList?Go(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function pA(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function D2(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(pA(n[t]),'" '),"").trim()}function Sh(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function Fg(n){return n.size!==wi.size||n.x!==wi.x||n.y!==wi.y||n.rotate!==wi.rotate||n.flipX||n.flipY}function k2(n){let{transform:e,containerWidth:t,iconWidth:a}=n;const s={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),p={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(a/2*-1," -256)")};return{outer:s,inner:p,path:g}}function P2(n){let{transform:e,width:t=Up,height:a=Up,startCentered:s=!1}=n,l="";return s&&rA?l+="translate(".concat(e.x/aa-t/2,"em, ").concat(e.y/aa-a/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/aa,"em), calc(-50% + ").concat(e.y/aa,"em)) "):l+="translate(".concat(e.x/aa,"em, ").concat(e.y/aa,"em) "),l+="scale(".concat(e.size/aa*(e.flipX?-1:1),", ").concat(e.size/aa*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var M2=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function gA(){const n=uA,e=cA,t=pe.cssPrefix,a=pe.replacementClass;let s=M2;if(t!==n||a!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");s=s.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(d,".".concat(a))}return s}let TE=!1;function fp(){pe.autoAddCss&&!TE&&(N2(gA()),TE=!0)}var V2={mixout(){return{dom:{css:gA,insertCss:fp}}},hooks(){return{beforeDOMElementCreation(){fp()},beforeI2svg(){fp()}}}};const pr=Ea||{};pr[mr]||(pr[mr]={});pr[mr].styles||(pr[mr].styles={});pr[mr].hooks||(pr[mr].hooks={});pr[mr].shims||(pr[mr].shims=[]);var Si=pr[mr];const yA=[],vA=function(){nt.removeEventListener("DOMContentLoaded",vA),Qf=1,yA.map(n=>n())};let Qf=!1;Tr&&(Qf=(nt.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(nt.readyState),Qf||nt.addEventListener("DOMContentLoaded",vA));function L2(n){Tr&&(Qf?setTimeout(n,0):yA.push(n))}function Bu(n){const{tag:e,attributes:t={},children:a=[]}=n;return typeof n=="string"?pA(n):"<".concat(e," ").concat(D2(t),">").concat(a.map(Bu).join(""),"</").concat(e,">")}function bE(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var hp=function(e,t,a,s){var l=Object.keys(e),c=l.length,d=t,p,g,_;for(a===void 0?(p=1,_=e[l[0]]):(p=0,_=a);p<c;p++)g=l[p],_=d(_,e[g],g,e);return _};function U2(n){const e=[];let t=0;const a=n.length;for(;t<a;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<a){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((s&1023)<<10)+(l&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}function qp(n){const e=U2(n);return e.length===1?e[0].toString(16):null}function j2(n,e){const t=n.length;let a=n.charCodeAt(e),s;return a>=55296&&a<=56319&&t>e+1&&(s=n.charCodeAt(e+1),s>=56320&&s<=57343)?(a-55296)*1024+s-56320+65536:a}function AE(n){return Object.keys(n).reduce((e,t)=>{const a=n[t];return!!a.icon?e[a.iconName]=a.icon:e[t]=a,e},{})}function Hp(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:a=!1}=t,s=AE(e);typeof Si.hooks.addPack=="function"&&!a?Si.hooks.addPack(n,AE(e)):Si.styles[n]=ie(ie({},Si.styles[n]||{}),s),n==="fas"&&Hp("fa",e)}const{styles:Ru,shims:z2}=Si,_A=Object.keys(jg),F2=_A.reduce((n,e)=>(n[e]=Object.keys(jg[e]),n),{});let Bg=null,EA={},TA={},bA={},AA={},wA={};function B2(n){return~R2.indexOf(n)}function q2(n,e){const t=e.split("-"),a=t[0],s=t.slice(1).join("-");return a===n&&s!==""&&!B2(s)?s:null}const SA=()=>{const n=a=>hp(Ru,(s,l,c)=>(s[c]=hp(l,a,{}),s),{});EA=n((a,s,l)=>(s[3]&&(a[s[3]]=l),s[2]&&s[2].filter(d=>typeof d=="number").forEach(d=>{a[d.toString(16)]=l}),a)),TA=n((a,s,l)=>(a[l]=l,s[2]&&s[2].filter(d=>typeof d=="string").forEach(d=>{a[d]=l}),a)),wA=n((a,s,l)=>{const c=s[2];return a[l]=l,c.forEach(d=>{a[d]=l}),a});const e="far"in Ru||pe.autoFetchSvg,t=hp(z2,(a,s)=>{const l=s[0];let c=s[1];const d=s[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(a.names[l]={prefix:c,iconName:d}),typeof l=="number"&&(a.unicodes[l.toString(16)]={prefix:c,iconName:d}),a},{names:{},unicodes:{}});bA=t.names,AA=t.unicodes,Bg=Rh(pe.styleDefault,{family:pe.familyDefault})};x2(n=>{Bg=Rh(n.styleDefault,{family:pe.familyDefault})});SA();function qg(n,e){return(EA[n]||{})[e]}function H2(n,e){return(TA[n]||{})[e]}function hs(n,e){return(wA[n]||{})[e]}function RA(n){return bA[n]||{prefix:null,iconName:null}}function G2(n){const e=AA[n],t=qg("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Ta(){return Bg}const IA=()=>({prefix:null,iconName:null,rest:[]});function K2(n){let e=tn;const t=_A.reduce((a,s)=>(a[s]="".concat(pe.cssPrefix,"-").concat(s),a),{});return oA.forEach(a=>{(n.includes(t[a])||n.some(s=>F2[a].includes(s)))&&(e=a)}),e}function Rh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=tn}=e,a=T2[t][n];if(t===wh&&!n)return"fad";const s=EE[t][n]||EE[t][a],l=n in Si.styles?n:null;return s||l||null}function $2(n){let e=[],t=null;return n.forEach(a=>{const s=q2(pe.cssPrefix,a);s?t=s:a&&e.push(a)}),{iconName:t,rest:e}}function wE(n){return n.sort().filter((e,t,a)=>a.indexOf(e)===t)}function Ih(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let a=null;const s=Lp.concat(u2),l=wE(n.filter(b=>s.includes(b))),c=wE(n.filter(b=>!Lp.includes(b))),d=l.filter(b=>(a=b,!sA.includes(b))),[p=null]=d,g=K2(l),_=ie(ie({},$2(c)),{},{prefix:Rh(p,{family:g})});return ie(ie(ie({},_),W2({values:n,family:g,styles:Ru,config:pe,canonical:_,givenPrefix:a})),Y2(t,a,_))}function Y2(n,e,t){let{prefix:a,iconName:s}=t;if(n||!a||!s)return{prefix:a,iconName:s};const l=e==="fa"?RA(s):{},c=hs(a,s);return s=l.iconName||c||s,a=l.prefix||a,a==="far"&&!Ru.far&&Ru.fas&&!pe.autoFetchSvg&&(a="fas"),{prefix:a,iconName:s}}const Q2=oA.filter(n=>n!==tn||n!==wh),X2=Object.keys(Vp).filter(n=>n!==tn).map(n=>Object.keys(Vp[n])).flat();function W2(n){const{values:e,family:t,canonical:a,givenPrefix:s="",styles:l={},config:c={}}=n,d=t===wh,p=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",_=a.prefix==="fad"||a.prefix==="fa-duotone";if(!d&&(p||g||_)&&(a.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(a.prefix="fab"),!a.prefix&&Q2.includes(t)&&(Object.keys(l).find(w=>X2.includes(w))||c.autoFetchSvg)){const w=t2.get(t).defaultShortPrefixId;a.prefix=w,a.iconName=hs(a.prefix,a.iconName)||a.iconName}return(a.prefix==="fa"||s==="fa")&&(a.prefix=Ta()||"fas"),a}class Z2{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(l=>{this.definitions[l]=ie(ie({},this.definitions[l]||{}),s[l]),Hp(l,s[l]);const c=jg[tn][l];c&&Hp(c,s[l]),SA()})}reset(){this.definitions={}}_pullDefinitions(e,t){const a=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(a).map(s=>{const{prefix:l,iconName:c,icon:d}=a[s],p=d[2];e[l]||(e[l]={}),p.length>0&&p.forEach(g=>{typeof g=="string"&&(e[l][g]=d)}),e[l][c]=d}),e}}let SE=[],So={};const Co={},J2=Object.keys(Co);function ex(n,e){let{mixoutsTo:t}=e;return SE=n,So={},Object.keys(Co).forEach(a=>{J2.indexOf(a)===-1&&delete Co[a]}),SE.forEach(a=>{const s=a.mixout?a.mixout():{};if(Object.keys(s).forEach(l=>{typeof s[l]=="function"&&(t[l]=s[l]),typeof s[l]=="object"&&Object.keys(s[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=s[l][c]})}),a.hooks){const l=a.hooks();Object.keys(l).forEach(c=>{So[c]||(So[c]=[]),So[c].push(l[c])})}a.provides&&a.provides(Co)}),t}function Gp(n,e){for(var t=arguments.length,a=new Array(t>2?t-2:0),s=2;s<t;s++)a[s-2]=arguments[s];return(So[n]||[]).forEach(c=>{e=c.apply(null,[e,...a])}),e}function gs(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),a=1;a<e;a++)t[a-1]=arguments[a];(So[n]||[]).forEach(l=>{l.apply(null,t)})}function ba(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Co[n]?Co[n].apply(null,e):void 0}function Kp(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Ta();if(e)return e=hs(t,e)||e,bE(CA.definitions,t,e)||bE(Si.styles,t,e)}const CA=new Z2,tx=()=>{pe.autoReplaceSvg=!1,pe.observeMutations=!1,gs("noAuto")},nx={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tr?(gs("beforeI2svg",n),ba("pseudoElements2svg",n),ba("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;pe.autoReplaceSvg===!1&&(pe.autoReplaceSvg=!0),pe.observeMutations=!0,L2(()=>{rx({autoReplaceSvgRoot:e}),gs("watch",n)})}},ix={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:hs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Rh(n[0]);return{prefix:t,iconName:hs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(pe.cssPrefix,"-"))>-1||n.match(b2))){const e=Ih(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Ta(),iconName:hs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Ta();return{prefix:e,iconName:hs(e,n)||n}}}},Cn={noAuto:tx,config:pe,dom:nx,parse:ix,library:CA,findIconDefinition:Kp,toHtml:Bu},rx=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=nt}=n;(Object.keys(Si.styles).length>0||pe.autoFetchSvg)&&Tr&&pe.autoReplaceSvg&&Cn.dom.i2svg({node:e})};function Ch(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>Bu(t))}}),Object.defineProperty(n,"node",{get:function(){if(!Tr)return;const t=nt.createElement("div");return t.innerHTML=n.html,t.children}}),n}function ax(n){let{children:e,main:t,mask:a,attributes:s,styles:l,transform:c}=n;if(Fg(c)&&t.found&&!a.found){const{width:d,height:p}=t,g={x:d/p/2,y:.5};s.style=Sh(ie(ie({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function sx(n){let{prefix:e,iconName:t,children:a,attributes:s,symbol:l}=n;const c=l===!0?"".concat(e,"-").concat(pe.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:ie(ie({},s),{},{id:c}),children:a}]}]}function Hg(n){const{icons:{main:e,mask:t},prefix:a,iconName:s,transform:l,symbol:c,title:d,maskId:p,titleId:g,extra:_,watchable:b=!1}=n,{width:w,height:N}=t.found?t:e,x=s2.includes(a),H=[pe.replacementClass,s?"".concat(pe.cssPrefix,"-").concat(s):""].filter(ae=>_.classes.indexOf(ae)===-1).filter(ae=>ae!==""||!!ae).concat(_.classes).join(" ");let k={children:[],attributes:ie(ie({},_.attributes),{},{"data-prefix":a,"data-icon":s,class:H,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(N)})};const B=x&&!~_.classes.indexOf("fa-fw")?{width:"".concat(w/N*16*.0625,"em")}:{};b&&(k.attributes[ps]=""),d&&(k.children.push({tag:"title",attributes:{id:k.attributes["aria-labelledby"]||"title-".concat(g||Su())},children:[d]}),delete k.attributes.title);const W=ie(ie({},k),{},{prefix:a,iconName:s,main:e,mask:t,maskId:p,transform:l,symbol:c,styles:ie(ie({},B),_.styles)}),{children:Q,attributes:oe}=t.found&&e.found?ba("generateAbstractMask",W)||{children:[],attributes:{}}:ba("generateAbstractIcon",W)||{children:[],attributes:{}};return W.children=Q,W.attributes=oe,c?sx(W):ax(W)}function RE(n){const{content:e,width:t,height:a,transform:s,title:l,extra:c,watchable:d=!1}=n,p=ie(ie(ie({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});d&&(p[ps]="");const g=ie({},c.styles);Fg(s)&&(g.transform=P2({transform:s,startCentered:!0,width:t,height:a}),g["-webkit-transform"]=g.transform);const _=Sh(g);_.length>0&&(p.style=_);const b=[];return b.push({tag:"span",attributes:p,children:[e]}),l&&b.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),b}function ox(n){const{content:e,title:t,extra:a}=n,s=ie(ie(ie({},a.attributes),t?{title:t}:{}),{},{class:a.classes.join(" ")}),l=Sh(a.styles);l.length>0&&(s.style=l);const c=[];return c.push({tag:"span",attributes:s,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:dp}=Si;function $p(n){const e=n[0],t=n[1],[a]=n.slice(4);let s=null;return Array.isArray(a)?s={tag:"g",attributes:{class:"".concat(pe.cssPrefix,"-").concat(cp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(cp.SECONDARY),fill:"currentColor",d:a[0]}},{tag:"path",attributes:{class:"".concat(pe.cssPrefix,"-").concat(cp.PRIMARY),fill:"currentColor",d:a[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:a}},{found:!0,width:e,height:t,icon:s}}const lx={found:!1,width:512,height:512};function ux(n,e){!fA&&!pe.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function Yp(n,e){let t=e;return e==="fa"&&pe.styleDefault!==null&&(e=Ta()),new Promise((a,s)=>{if(t==="fa"){const l=RA(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&dp[e]&&dp[e][n]){const l=dp[e][n];return a($p(l))}ux(n,e),a(ie(ie({},lx),{},{icon:pe.showMissingIcons&&n?ba("missingIconAbstract")||{}:{}}))})}const IE=()=>{},Qp=pe.measurePerformance&&wf&&wf.mark&&wf.measure?wf:{mark:IE,measure:IE},uu='FA "6.7.2"',cx=n=>(Qp.mark("".concat(uu," ").concat(n," begins")),()=>xA(n)),xA=n=>{Qp.mark("".concat(uu," ").concat(n," ends")),Qp.measure("".concat(uu," ").concat(n),"".concat(uu," ").concat(n," begins"),"".concat(uu," ").concat(n," ends"))};var Gg={begin:cx,end:xA};const Vf=()=>{};function CE(n){return typeof(n.getAttribute?n.getAttribute(ps):null)=="string"}function fx(n){const e=n.getAttribute?n.getAttribute(Lg):null,t=n.getAttribute?n.getAttribute(Ug):null;return e&&t}function hx(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(pe.replacementClass)}function dx(){return pe.autoReplaceSvg===!0?Lf.replace:Lf[pe.autoReplaceSvg]||Lf.replace}function mx(n){return nt.createElementNS("http://www.w3.org/2000/svg",n)}function px(n){return nt.createElement(n)}function NA(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?mx:px}=e;if(typeof n=="string")return nt.createTextNode(n);const a=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){a.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){a.appendChild(NA(l,{ceFn:t}))}),a}function gx(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const Lf={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(NA(t),e)}),e.getAttribute(ps)===null&&pe.keepOriginalSource){let t=nt.createComment(gx(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~zg(e).indexOf(pe.replacementClass))return Lf.replace(n);const a=new RegExp("".concat(pe.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,d)=>(d===pe.replacementClass||d.match(a)?c.toSvg.push(d):c.toNode.push(d),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const s=t.map(l=>Bu(l)).join(`
`);e.setAttribute(ps,""),e.innerHTML=s}};function xE(n){n()}function OA(n,e){const t=typeof e=="function"?e:Vf;if(n.length===0)t();else{let a=xE;pe.mutateApproach===_2&&(a=Ea.requestAnimationFrame||xE),a(()=>{const s=dx(),l=Gg.begin("mutate");n.map(s),l(),t()})}}let Kg=!1;function DA(){Kg=!0}function Xp(){Kg=!1}let Xf=null;function NE(n){if(!gE||!pe.observeMutations)return;const{treeCallback:e=Vf,nodeCallback:t=Vf,pseudoElementsCallback:a=Vf,observeMutationsRoot:s=nt}=n;Xf=new gE(l=>{if(Kg)return;const c=Ta();Go(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!CE(d.addedNodes[0])&&(pe.searchPseudoElements&&a(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&pe.searchPseudoElements&&a(d.target.parentNode),d.type==="attributes"&&CE(d.target)&&~S2.indexOf(d.attributeName))if(d.attributeName==="class"&&fx(d.target)){const{prefix:p,iconName:g}=Ih(zg(d.target));d.target.setAttribute(Lg,p||c),g&&d.target.setAttribute(Ug,g)}else hx(d.target)&&t(d.target)})}),Tr&&Xf.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function yx(){Xf&&Xf.disconnect()}function vx(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((a,s)=>{const l=s.split(":"),c=l[0],d=l.slice(1);return c&&d.length>0&&(a[c]=d.join(":").trim()),a},{})),t}function _x(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),a=n.innerText!==void 0?n.innerText.trim():"";let s=Ih(zg(n));return s.prefix||(s.prefix=Ta()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&a.length>0&&(s.iconName=H2(s.prefix,n.innerText)||qg(s.prefix,qp(n.innerText))),!s.iconName&&pe.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function Ex(n){const e=Go(n.attributes).reduce((s,l)=>(s.name!=="class"&&s.name!=="style"&&(s[l.name]=l.value),s),{}),t=n.getAttribute("title"),a=n.getAttribute("data-fa-title-id");return pe.autoA11y&&(t?e["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(a||Su()):(e["aria-hidden"]="true",e.focusable="false")),e}function Tx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:wi,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function OE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:a,rest:s}=_x(n),l=Ex(n),c=Gp("parseNodeAttributes",{},n);let d=e.styleParser?vx(n):[];return ie({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:a,transform:wi,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:d,attributes:l}},c)}const{styles:bx}=Si;function kA(n){const e=pe.autoReplaceSvg==="nest"?OE(n,{styleParser:!1}):OE(n);return~e.extra.classes.indexOf(dA)?ba("generateLayersText",n,e):ba("generateSvgReplacementMutation",n,e)}function Ax(){return[...i2,...Lp]}function DE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tr)return Promise.resolve();const t=nt.documentElement.classList,a=_=>t.add("".concat(_E,"-").concat(_)),s=_=>t.remove("".concat(_E,"-").concat(_)),l=pe.autoFetchSvg?Ax():sA.concat(Object.keys(bx));l.includes("fa")||l.push("fa");const c=[".".concat(dA,":not([").concat(ps,"])")].concat(l.map(_=>".".concat(_,":not([").concat(ps,"])"))).join(", ");if(c.length===0)return Promise.resolve();let d=[];try{d=Go(n.querySelectorAll(c))}catch{}if(d.length>0)a("pending"),s("complete");else return Promise.resolve();const p=Gg.begin("onTree"),g=d.reduce((_,b)=>{try{const w=kA(b);w&&_.push(w)}catch(w){fA||w.name==="MissingIcon"&&console.error(w)}return _},[]);return new Promise((_,b)=>{Promise.all(g).then(w=>{OA(w,()=>{a("active"),a("complete"),s("pending"),typeof e=="function"&&e(),p(),_()})}).catch(w=>{p(),b(w)})})}function wx(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;kA(n).then(t=>{t&&OA([t],e)})}function Sx(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const a=(e||{}).icon?e:Kp(e||{});let{mask:s}=t;return s&&(s=(s||{}).icon?s:Kp(s||{})),n(a,ie(ie({},t),{},{mask:s}))}}const Rx=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=wi,symbol:a=!1,mask:s=null,maskId:l=null,title:c=null,titleId:d=null,classes:p=[],attributes:g={},styles:_={}}=e;if(!n)return;const{prefix:b,iconName:w,icon:N}=n;return Ch(ie({type:"icon"},n),()=>(gs("beforeDOMElementCreation",{iconDefinition:n,params:e}),pe.autoA11y&&(c?g["aria-labelledby"]="".concat(pe.replacementClass,"-title-").concat(d||Su()):(g["aria-hidden"]="true",g.focusable="false")),Hg({icons:{main:$p(N),mask:s?$p(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:b,iconName:w,transform:ie(ie({},wi),t),symbol:a,title:c,maskId:l,titleId:d,extra:{attributes:g,styles:_,classes:p}})))};var Ix={mixout(){return{icon:Sx(Rx)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=DE,n.nodeCallback=wx,n}}},provides(n){n.i2svg=function(e){const{node:t=nt,callback:a=()=>{}}=e;return DE(t,a)},n.generateSvgReplacementMutation=function(e,t){const{iconName:a,title:s,titleId:l,prefix:c,transform:d,symbol:p,mask:g,maskId:_,extra:b}=t;return new Promise((w,N)=>{Promise.all([Yp(a,c),g.iconName?Yp(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(x=>{let[H,k]=x;w([e,Hg({icons:{main:H,mask:k},prefix:c,iconName:a,transform:d,symbol:p,maskId:_,title:s,titleId:l,extra:b,watchable:!0})])}).catch(N)})},n.generateAbstractIcon=function(e){let{children:t,attributes:a,main:s,transform:l,styles:c}=e;const d=Sh(c);d.length>0&&(a.style=d);let p;return Fg(l)&&(p=ba("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),t.push(p||s.icon),{children:t,attributes:a}}}},Cx={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return Ch({type:"layer"},()=>{gs("beforeDOMElementCreation",{assembler:n,params:e});let a=[];return n(s=>{Array.isArray(s)?s.map(l=>{a=a.concat(l.abstract)}):a=a.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(pe.cssPrefix,"-layers"),...t].join(" ")},children:a}]})}}}},xx={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:a=[],attributes:s={},styles:l={}}=e;return Ch({type:"counter",content:n},()=>(gs("beforeDOMElementCreation",{content:n,params:e}),ox({content:n.toString(),title:t,extra:{attributes:s,styles:l,classes:["".concat(pe.cssPrefix,"-layers-counter"),...a]}})))}}}},Nx={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=wi,title:a=null,classes:s=[],attributes:l={},styles:c={}}=e;return Ch({type:"text",content:n},()=>(gs("beforeDOMElementCreation",{content:n,params:e}),RE({content:n,transform:ie(ie({},wi),t),title:a,extra:{attributes:l,styles:c,classes:["".concat(pe.cssPrefix,"-layers-text"),...s]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:a,transform:s,extra:l}=t;let c=null,d=null;if(rA){const p=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/p,d=g.height/p}return pe.autoA11y&&!a&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,RE({content:e.innerHTML,width:c,height:d,transform:s,title:a,extra:l,watchable:!0})])}}};const Ox=new RegExp('"',"ug"),kE=[1105920,1112319],PE=ie(ie(ie(ie({},{FontAwesome:{normal:"fas",400:"fas"}}),e2),y2),c2),Wp=Object.keys(PE).reduce((n,e)=>(n[e.toLowerCase()]=PE[e],n),{}),Dx=Object.keys(Wp).reduce((n,e)=>{const t=Wp[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function kx(n){const e=n.replace(Ox,""),t=j2(e,0),a=t>=kE[0]&&t<=kE[1],s=e.length===2?e[0]===e[1]:!1;return{value:qp(s?e[0]:e),isSecondary:a||s}}function Px(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),a=parseInt(e),s=isNaN(a)?"normal":a;return(Wp[t]||{})[s]||Dx[t]}function ME(n,e){const t="".concat(v2).concat(e.replace(":","-"));return new Promise((a,s)=>{if(n.getAttribute(t)!==null)return a();const c=Go(n.children).filter(w=>w.getAttribute(jp)===e)[0],d=Ea.getComputedStyle(n,e),p=d.getPropertyValue("font-family"),g=p.match(A2),_=d.getPropertyValue("font-weight"),b=d.getPropertyValue("content");if(c&&!g)return n.removeChild(c),a();if(g&&b!=="none"&&b!==""){const w=d.getPropertyValue("content");let N=Px(p,_);const{value:x,isSecondary:H}=kx(w),k=g[0].startsWith("FontAwesome");let B=qg(N,x),W=B;if(k){const Q=G2(x);Q.iconName&&Q.prefix&&(B=Q.iconName,N=Q.prefix)}if(B&&!H&&(!c||c.getAttribute(Lg)!==N||c.getAttribute(Ug)!==W)){n.setAttribute(t,W),c&&n.removeChild(c);const Q=Tx(),{extra:oe}=Q;oe.attributes[jp]=e,Yp(B,N).then(ae=>{const Ee=Hg(ie(ie({},Q),{},{icons:{main:ae,mask:IA()},prefix:N,iconName:W,extra:oe,watchable:!0})),M=nt.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(M,n.firstChild):n.appendChild(M),M.outerHTML=Ee.map(I=>Bu(I)).join(`
`),n.removeAttribute(t),a()}).catch(s)}else a()}else a()})}function Mx(n){return Promise.all([ME(n,"::before"),ME(n,"::after")])}function Vx(n){return n.parentNode!==document.head&&!~E2.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(jp)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function VE(n){if(Tr)return new Promise((e,t)=>{const a=Go(n.querySelectorAll("*")).filter(Vx).map(Mx),s=Gg.begin("searchPseudoElements");DA(),Promise.all(a).then(()=>{s(),Xp(),e()}).catch(()=>{s(),Xp(),t()})})}var Lx={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=VE,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=nt}=e;pe.searchPseudoElements&&VE(t)}}};let LE=!1;var Ux={mixout(){return{dom:{unwatch(){DA(),LE=!0}}}},hooks(){return{bootstrap(){NE(Gp("mutationObserverCallbacks",{}))},noAuto(){yx()},watch(n){const{observeMutationsRoot:e}=n;LE?Xp():NE(Gp("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const UE=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,a)=>{const s=a.toLowerCase().split("-"),l=s[0];let c=s.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var jx={mixout(){return{parse:{transform:n=>UE(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=UE(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:a,containerWidth:s,iconWidth:l}=e;const c={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(a.x*32,", ").concat(a.y*32,") "),p="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),g="rotate(".concat(a.rotate," 0 0)"),_={transform:"".concat(d," ").concat(p," ").concat(g)},b={transform:"translate(".concat(l/2*-1," -256)")},w={outer:c,inner:_,path:b};return{tag:"g",attributes:ie({},w.outer),children:[{tag:"g",attributes:ie({},w.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:ie(ie({},t.icon.attributes),w.path)}]}]}}}};const mp={x:0,y:0,width:"100%",height:"100%"};function jE(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function zx(n){return n.tag==="g"?n.children:[n]}var Fx={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),a=t?Ih(t.split(" ").map(s=>s.trim())):IA();return a.prefix||(a.prefix=Ta()),n.mask=a,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:a,main:s,mask:l,maskId:c,transform:d}=e;const{width:p,icon:g}=s,{width:_,icon:b}=l,w=k2({transform:d,containerWidth:_,iconWidth:p}),N={tag:"rect",attributes:ie(ie({},mp),{},{fill:"white"})},x=g.children?{children:g.children.map(jE)}:{},H={tag:"g",attributes:ie({},w.inner),children:[jE(ie({tag:g.tag,attributes:ie(ie({},g.attributes),w.path)},x))]},k={tag:"g",attributes:ie({},w.outer),children:[H]},B="mask-".concat(c||Su()),W="clip-".concat(c||Su()),Q={tag:"mask",attributes:ie(ie({},mp),{},{id:B,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[N,k]},oe={tag:"defs",children:[{tag:"clipPath",attributes:{id:W},children:zx(b)},Q]};return t.push(oe,{tag:"rect",attributes:ie({fill:"currentColor","clip-path":"url(#".concat(W,")"),mask:"url(#".concat(B,")")},mp)}),{children:t,attributes:a}}}},Bx={provides(n){let e=!1;Ea.matchMedia&&(e=Ea.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],a={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:ie(ie({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=ie(ie({},s),{},{attributeName:"opacity"}),c={tag:"circle",attributes:ie(ie({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:ie(ie({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:ie(ie({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:ie(ie({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:ie(ie({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:ie(ie({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:ie(ie({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},qx={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),a=t===null?!1:t===""?!0:t;return n.symbol=a,n}}}},Hx=[V2,Ix,Cx,xx,Nx,Lx,Ux,jx,Fx,Bx,qx];ex(Hx,{mixoutsTo:Cn});Cn.noAuto;Cn.config;Cn.library;Cn.dom;const Zp=Cn.parse;Cn.findIconDefinition;Cn.toHtml;const Gx=Cn.icon;Cn.layer;Cn.text;Cn.counter;var pp={exports:{}},gp,zE;function Kx(){if(zE)return gp;zE=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return gp=n,gp}var yp,FE;function $x(){if(FE)return yp;FE=1;var n=Kx();function e(){}function t(){}return t.resetWarningCache=e,yp=function(){function a(c,d,p,g,_,b){if(b!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}a.isRequired=a;function s(){return a}var l={array:a,bigint:a,bool:a,func:a,number:a,object:a,string:a,symbol:a,any:a,arrayOf:s,element:a,elementType:a,instanceOf:s,node:a,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},yp}var BE;function Yx(){return BE||(BE=1,pp.exports=$x()()),pp.exports}var Qx=Yx();const ke=Vb(Qx);function qE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,a)}return t}function Ai(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?qE(Object(t),!0).forEach(function(a){Ro(n,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):qE(Object(t)).forEach(function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))})}return n}function Wf(n){"@babel/helpers - typeof";return Wf=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Wf(n)}function Ro(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function Xx(n,e){if(n==null)return{};var t={},a=Object.keys(n),s,l;for(l=0;l<a.length;l++)s=a[l],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function Wx(n,e){if(n==null)return{};var t=Xx(n,e),a,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)a=l[s],!(e.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(n,a)&&(t[a]=n[a])}return t}function Jp(n){return Zx(n)||Jx(n)||eN(n)||tN()}function Zx(n){if(Array.isArray(n))return eg(n)}function Jx(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function eN(n,e){if(n){if(typeof n=="string")return eg(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return eg(n,e)}}function eg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}function tN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nN(n){var e,t=n.beat,a=n.fade,s=n.beatFade,l=n.bounce,c=n.shake,d=n.flash,p=n.spin,g=n.spinPulse,_=n.spinReverse,b=n.pulse,w=n.fixedWidth,N=n.inverse,x=n.border,H=n.listItem,k=n.flip,B=n.size,W=n.rotation,Q=n.pull,oe=(e={"fa-beat":t,"fa-fade":a,"fa-beat-fade":s,"fa-bounce":l,"fa-shake":c,"fa-flash":d,"fa-spin":p,"fa-spin-reverse":_,"fa-spin-pulse":g,"fa-pulse":b,"fa-fw":w,"fa-inverse":N,"fa-border":x,"fa-li":H,"fa-flip":k===!0,"fa-flip-horizontal":k==="horizontal"||k==="both","fa-flip-vertical":k==="vertical"||k==="both"},Ro(e,"fa-".concat(B),typeof B<"u"&&B!==null),Ro(e,"fa-rotate-".concat(W),typeof W<"u"&&W!==null&&W!==0),Ro(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),Ro(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(oe).map(function(ae){return oe[ae]?ae:null}).filter(function(ae){return ae})}function iN(n){return n=n-0,n===n}function PA(n){return iN(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var rN=["style"];function aN(n){return n.charAt(0).toUpperCase()+n.slice(1)}function sN(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var a=t.indexOf(":"),s=PA(t.slice(0,a)),l=t.slice(a+1).trim();return s.startsWith("webkit")?e[aN(s)]=l:e[s]=l,e},{})}function MA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(p){return MA(n,p)}),s=Object.keys(e.attributes||{}).reduce(function(p,g){var _=e.attributes[g];switch(g){case"class":p.attrs.className=_,delete e.attributes.class;break;case"style":p.attrs.style=sN(_);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?p.attrs[g.toLowerCase()]=_:p.attrs[PA(g)]=_}return p},{attrs:{}}),l=t.style,c=l===void 0?{}:l,d=Wx(t,rN);return s.attrs.style=Ai(Ai({},s.attrs.style),c),n.apply(void 0,[e.tag,Ai(Ai({},s.attrs),d)].concat(Jp(a)))}var VA=!1;try{VA=!0}catch{}function oN(){if(!VA&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function HE(n){if(n&&Wf(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(Zp.icon)return Zp.icon(n);if(n===null)return null;if(n&&Wf(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function vp(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Ro({},n,e):{}}var GE={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},At=Lb.forwardRef(function(n,e){var t=Ai(Ai({},GE),n),a=t.icon,s=t.mask,l=t.symbol,c=t.className,d=t.title,p=t.titleId,g=t.maskId,_=HE(a),b=vp("classes",[].concat(Jp(nN(t)),Jp((c||"").split(" ")))),w=vp("transform",typeof t.transform=="string"?Zp.transform(t.transform):t.transform),N=vp("mask",HE(s)),x=Gx(_,Ai(Ai(Ai(Ai({},b),w),N),{},{symbol:l,title:d,titleId:p,maskId:g}));if(!x)return oN("Could not find icon",_),null;var H=x.abstract,k={ref:e};return Object.keys(t).forEach(function(B){GE.hasOwnProperty(B)||(k[B]=t[B])}),lN(H[0],k)});At.displayName="FontAwesomeIcon";At.propTypes={beat:ke.bool,border:ke.bool,beatFade:ke.bool,bounce:ke.bool,className:ke.string,fade:ke.bool,flash:ke.bool,mask:ke.oneOfType([ke.object,ke.array,ke.string]),maskId:ke.string,fixedWidth:ke.bool,inverse:ke.bool,flip:ke.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ke.oneOfType([ke.object,ke.array,ke.string]),listItem:ke.bool,pull:ke.oneOf(["right","left"]),pulse:ke.bool,rotation:ke.oneOf([0,90,180,270]),shake:ke.bool,size:ke.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ke.bool,spinPulse:ke.bool,spinReverse:ke.bool,symbol:ke.oneOfType([ke.bool,ke.string]),title:ke.string,titleId:ke.string,transform:ke.oneOfType([ke.string,ke.object]),swapOpacity:ke.bool};var lN=MA.bind(null,Lb.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const uN={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},cN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},fN={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M135.2 17.7L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-7.2-14.3C307.4 6.8 296.3 0 284.2 0L163.8 0c-12.1 0-23.2 6.8-28.6 17.7zM416 128L32 128 53.2 467c1.6 25.3 22.6 45 47.9 45l245.8 0c25.3 0 46.3-19.7 47.9-45L416 128z"]},hN={prefix:"fas",iconName:"file-pen",icon:[576,512,[128221,"file-edit"],"f31c","M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 125.7-86.8 86.8c-10.3 10.3-17.5 23.1-21 37.2l-18.7 74.9c-2.3 9.2-1.8 18.8 1.3 27.5L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM549.8 235.7l14.4 14.4c15.6 15.6 15.6 40.9 0 56.6l-29.4 29.4-71-71 29.4-29.4c15.6-15.6 40.9-15.6 56.6 0zM311.9 417L441.1 287.8l71 71L382.9 487.9c-4.1 4.1-9.2 7-14.9 8.4l-60.1 15c-5.5 1.4-11.2-.2-15.2-4.2s-5.6-9.7-4.2-15.2l15-60.1c1.4-5.6 4.3-10.8 8.4-14.9z"]},xh={prefix:"fas",iconName:"plus",icon:[448,512,[10133,61543,"add"],"2b","M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"]},xa={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]};var KE={};/**
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
 */const LA=function(n){const e=[];let t=0;for(let a=0;a<n.length;a++){let s=n.charCodeAt(a);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&a+1<n.length&&(n.charCodeAt(a+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++a)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},dN=function(n){const e=[];let t=0,a=0;for(;t<n.length;){const s=n[t++];if(s<128)e[a++]=String.fromCharCode(s);else if(s>191&&s<224){const l=n[t++];e[a++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=n[t++],c=n[t++],d=n[t++],p=((s&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[a++]=String.fromCharCode(55296+(p>>10)),e[a++]=String.fromCharCode(56320+(p&1023))}else{const l=n[t++],c=n[t++];e[a++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return e.join("")},UA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,a=[];for(let s=0;s<n.length;s+=3){const l=n[s],c=s+1<n.length,d=c?n[s+1]:0,p=s+2<n.length,g=p?n[s+2]:0,_=l>>2,b=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,N=g&63;p||(N=64,c||(w=64)),a.push(t[_],t[b],t[w],t[N])}return a.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(LA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dN(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,a=[];for(let s=0;s<n.length;){const l=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const b=s<n.length?t[n.charAt(s)]:64;if(++s,l==null||d==null||g==null||b==null)throw new mN;const w=l<<2|d>>4;if(a.push(w),g!==64){const N=d<<4&240|g>>2;if(a.push(N),b!==64){const x=g<<6&192|b;a.push(x)}}}return a},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class mN extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pN=function(n){const e=LA(n);return UA.encodeByteArray(e,!0)},Zf=function(n){return pN(n).replace(/\./g,"")},jA=function(n){try{return UA.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function gN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const yN=()=>gN().__FIREBASE_DEFAULTS__,vN=()=>{if(typeof process>"u"||typeof KE>"u")return;const n=KE.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},_N=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jA(n[1]);return e&&JSON.parse(e)},Nh=()=>{try{return yN()||vN()||_N()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},zA=n=>{var e,t;return(t=(e=Nh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},EN=n=>{const e=zA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const a=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),a]:[e.substring(0,t),a]},FA=()=>{var n;return(n=Nh())===null||n===void 0?void 0:n.config},BA=n=>{var e;return(e=Nh())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class TN{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,a)=>{t?this.reject(t):this.resolve(a),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,a))}}}/**
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
 */function bN(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},a=e||"demo-project",s=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${a}`,aud:a,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Zf(JSON.stringify(t)),Zf(JSON.stringify(c)),""].join(".")}/**
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
 */function nn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function AN(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nn())}function wN(){var n;const e=(n=Nh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function SN(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function RN(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function IN(){const n=nn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function CN(){return!wN()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function HA(){try{return typeof indexedDB=="object"}catch{return!1}}function GA(){return new Promise((n,e)=>{try{let t=!0;const a="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(a);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(a),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var l;e(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function xN(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const NN="FirebaseError";class Yn extends Error{constructor(e,t,a){super(t),this.code=e,this.customData=a,this.name=NN,Object.setPrototypeOf(this,Yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ws.prototype.create)}}class ws{constructor(e,t,a){this.service=e,this.serviceName=t,this.errors=a}create(e,...t){const a=t[0]||{},s=`${this.service}/${e}`,l=this.errors[e],c=l?ON(l,a):"Error",d=`${this.serviceName}: ${c} (${s}).`;return new Yn(s,d,a)}}function ON(n,e){return n.replace(DN,(t,a)=>{const s=e[a];return s!=null?String(s):`<${a}?>`})}const DN=/\{\$([^}]+)}/g;function kN(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Iu(n,e){if(n===e)return!0;const t=Object.keys(n),a=Object.keys(e);for(const s of t){if(!a.includes(s))return!1;const l=n[s],c=e[s];if($E(l)&&$E(c)){if(!Iu(l,c))return!1}else if(l!==c)return!1}for(const s of a)if(!t.includes(s))return!1;return!0}function $E(n){return n!==null&&typeof n=="object"}/**
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
 */function qu(n){const e=[];for(const[t,a]of Object.entries(n))Array.isArray(a)?a.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(a));return e.length?"&"+e.join("&"):""}function cu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(a=>{if(a){const[s,l]=a.split("=");e[decodeURIComponent(s)]=decodeURIComponent(l)}}),e}function fu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function PN(n,e){const t=new MN(n,e);return t.subscribe.bind(t)}class MN{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(a=>{this.error(a)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,a){let s;if(e===void 0&&t===void 0&&a===void 0)throw new Error("Missing Observer.");VN(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:a},s.next===void 0&&(s.next=_p),s.error===void 0&&(s.error=_p),s.complete===void 0&&(s.complete=_p);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(a){typeof console<"u"&&console.error&&console.error(a)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function VN(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function _p(){}/**
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
 */const LN=1e3,UN=2,jN=4*60*60*1e3,zN=.5;function YE(n,e=LN,t=UN){const a=e*Math.pow(t,n),s=Math.round(zN*a*(Math.random()-.5)*2);return Math.min(jN,a+s)}/**
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
 */function wt(n){return n&&n._delegate?n._delegate:n}class $n{constructor(e,t,a){this.name=e,this.instanceFactory=t,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const fs="[DEFAULT]";/**
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
 */class FN{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const a=new TN;if(this.instancesDeferred.set(t,a),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&a.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const a=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(a)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:a})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qN(e))try{this.getOrInitializeService({instanceIdentifier:fs})}catch{}for(const[t,a]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:s});a.resolve(l)}catch{}}}}clearInstance(e=fs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=fs){return this.instances.has(e)}getOptions(e=fs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,a=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(a))throw Error(`${this.name}(${a}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:a,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);a===d&&c.resolve(s)}return s}onInit(e,t){var a;const s=this.normalizeInstanceIdentifier(t),l=(a=this.onInitCallbacks.get(s))!==null&&a!==void 0?a:new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const a=this.onInitCallbacks.get(t);if(a)for(const s of a)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let a=this.instances.get(e);if(!a&&this.component&&(a=this.component.instanceFactory(this.container,{instanceIdentifier:BN(e),options:t}),this.instances.set(e,a),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(a,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,a)}catch{}return a||null}normalizeInstanceIdentifier(e=fs){return this.component?this.component.multipleInstances?e:fs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BN(n){return n===fs?void 0:n}function qN(n){return n.instantiationMode==="EAGER"}/**
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
 */class HN{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new FN(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Pe||(Pe={}));const GN={debug:Pe.DEBUG,verbose:Pe.VERBOSE,info:Pe.INFO,warn:Pe.WARN,error:Pe.ERROR,silent:Pe.SILENT},KN=Pe.INFO,$N={[Pe.DEBUG]:"log",[Pe.VERBOSE]:"log",[Pe.INFO]:"info",[Pe.WARN]:"warn",[Pe.ERROR]:"error"},YN=(n,e,...t)=>{if(e<n.logLevel)return;const a=new Date().toISOString(),s=$N[e];if(s)console[s](`[${a}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oh{constructor(e){this.name=e,this._logLevel=KN,this._logHandler=YN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?GN[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Pe.DEBUG,...e),this._logHandler(this,Pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Pe.VERBOSE,...e),this._logHandler(this,Pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Pe.INFO,...e),this._logHandler(this,Pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Pe.WARN,...e),this._logHandler(this,Pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Pe.ERROR,...e),this._logHandler(this,Pe.ERROR,...e)}}const QN=(n,e)=>e.some(t=>n instanceof t);let QE,XE;function XN(){return QE||(QE=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WN(){return XE||(XE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KA=new WeakMap,tg=new WeakMap,$A=new WeakMap,Ep=new WeakMap,$g=new WeakMap;function ZN(n){const e=new Promise((t,a)=>{const s=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(da(n.result)),s()},c=()=>{a(n.error),s()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&KA.set(t,n)}).catch(()=>{}),$g.set(e,n),e}function JN(n){if(tg.has(n))return;const e=new Promise((t,a)=>{const s=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),s()},c=()=>{a(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});tg.set(n,e)}let ng={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||$A.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return da(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function eO(n){ng=n(ng)}function tO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const a=n.call(Tp(this),e,...t);return $A.set(a,e.sort?e.sort():[e]),da(a)}:WN().includes(n)?function(...e){return n.apply(Tp(this),e),da(KA.get(this))}:function(...e){return da(n.apply(Tp(this),e))}}function nO(n){return typeof n=="function"?tO(n):(n instanceof IDBTransaction&&JN(n),QN(n,XN())?new Proxy(n,ng):n)}function da(n){if(n instanceof IDBRequest)return ZN(n);if(Ep.has(n))return Ep.get(n);const e=nO(n);return e!==n&&(Ep.set(n,e),$g.set(e,n)),e}const Tp=n=>$g.get(n);function YA(n,e,{blocked:t,upgrade:a,blocking:s,terminated:l}={}){const c=indexedDB.open(n,e),d=da(c);return a&&c.addEventListener("upgradeneeded",p=>{a(da(c.result),p.oldVersion,p.newVersion,da(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),d.then(p=>{l&&p.addEventListener("close",()=>l()),s&&p.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const iO=["get","getKey","getAll","getAllKeys","count"],rO=["put","add","delete","clear"],bp=new Map;function WE(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(bp.get(e))return bp.get(e);const t=e.replace(/FromIndex$/,""),a=e!==t,s=rO.includes(t);if(!(t in(a?IDBIndex:IDBObjectStore).prototype)||!(s||iO.includes(t)))return;const l=async function(c,...d){const p=this.transaction(c,s?"readwrite":"readonly");let g=p.store;return a&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&p.done]))[0]};return bp.set(e,l),l}eO(n=>({...n,get:(e,t,a)=>WE(e,t)||n.get(e,t,a),has:(e,t)=>!!WE(e,t)||n.has(e,t)}));/**
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
 */class aO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(sO(t)){const a=t.getImmediate();return`${a.library}/${a.version}`}else return null}).filter(t=>t).join(" ")}}function sO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ig="@firebase/app",ZE="0.11.1";/**
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
 */const gr=new Oh("@firebase/app"),oO="@firebase/app-compat",lO="@firebase/analytics-compat",uO="@firebase/analytics",cO="@firebase/app-check-compat",fO="@firebase/app-check",hO="@firebase/auth",dO="@firebase/auth-compat",mO="@firebase/database",pO="@firebase/data-connect",gO="@firebase/database-compat",yO="@firebase/functions",vO="@firebase/functions-compat",_O="@firebase/installations",EO="@firebase/installations-compat",TO="@firebase/messaging",bO="@firebase/messaging-compat",AO="@firebase/performance",wO="@firebase/performance-compat",SO="@firebase/remote-config",RO="@firebase/remote-config-compat",IO="@firebase/storage",CO="@firebase/storage-compat",xO="@firebase/firestore",NO="@firebase/vertexai",OO="@firebase/firestore-compat",DO="firebase",kO="11.3.1";/**
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
 */const rg="[DEFAULT]",PO={[ig]:"fire-core",[oO]:"fire-core-compat",[uO]:"fire-analytics",[lO]:"fire-analytics-compat",[fO]:"fire-app-check",[cO]:"fire-app-check-compat",[hO]:"fire-auth",[dO]:"fire-auth-compat",[mO]:"fire-rtdb",[pO]:"fire-data-connect",[gO]:"fire-rtdb-compat",[yO]:"fire-fn",[vO]:"fire-fn-compat",[_O]:"fire-iid",[EO]:"fire-iid-compat",[TO]:"fire-fcm",[bO]:"fire-fcm-compat",[AO]:"fire-perf",[wO]:"fire-perf-compat",[SO]:"fire-rc",[RO]:"fire-rc-compat",[IO]:"fire-gcs",[CO]:"fire-gcs-compat",[xO]:"fire-fst",[OO]:"fire-fst-compat",[NO]:"fire-vertex","fire-js":"fire-js",[DO]:"fire-js-all"};/**
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
 */const Jf=new Map,MO=new Map,ag=new Map;function JE(n,e){try{n.container.addComponent(e)}catch(t){gr.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ii(n){const e=n.name;if(ag.has(e))return gr.debug(`There were multiple attempts to register component ${e}.`),!1;ag.set(e,n);for(const t of Jf.values())JE(t,n);for(const t of MO.values())JE(t,n);return!0}function Ss(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Kn(n){return n==null?!1:n.settings!==void 0}/**
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
 */const VO={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ma=new ws("app","Firebase",VO);/**
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
 */class LO{constructor(e,t,a){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ma.create("app-deleted",{appName:this._name})}}/**
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
 */const Rs=kO;function QA(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const a=Object.assign({name:rg,automaticDataCollectionEnabled:!1},e),s=a.name;if(typeof s!="string"||!s)throw ma.create("bad-app-name",{appName:String(s)});if(t||(t=FA()),!t)throw ma.create("no-options");const l=Jf.get(s);if(l){if(Iu(t,l.options)&&Iu(a,l.config))return l;throw ma.create("duplicate-app",{appName:s})}const c=new HN(s);for(const p of ag.values())c.addComponent(p);const d=new LO(t,a,c);return Jf.set(s,d),d}function Yg(n=rg){const e=Jf.get(n);if(!e&&n===rg&&FA())return QA();if(!e)throw ma.create("no-app",{appName:n});return e}function gn(n,e,t){var a;let s=(a=PO[n])!==null&&a!==void 0?a:n;t&&(s+=`-${t}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gr.warn(d.join(" "));return}ii(new $n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const UO="firebase-heartbeat-database",jO=1,Cu="firebase-heartbeat-store";let Ap=null;function XA(){return Ap||(Ap=YA(UO,jO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Cu)}catch(t){console.warn(t)}}}}).catch(n=>{throw ma.create("idb-open",{originalErrorMessage:n.message})})),Ap}async function zO(n){try{const t=(await XA()).transaction(Cu),a=await t.objectStore(Cu).get(WA(n));return await t.done,a}catch(e){if(e instanceof Yn)gr.warn(e.message);else{const t=ma.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gr.warn(t.message)}}}async function eT(n,e){try{const a=(await XA()).transaction(Cu,"readwrite");await a.objectStore(Cu).put(e,WA(n)),await a.done}catch(t){if(t instanceof Yn)gr.warn(t.message);else{const a=ma.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gr.warn(a.message)}}}function WA(n){return`${n.name}!${n.options.appId}`}/**
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
 */const FO=1024,BO=30;class qO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new GO(t),this._heartbeatsCachePromise=this._storage.read().then(a=>(this._heartbeatsCache=a,a))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=tT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>BO){const c=KO(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(a){gr.warn(a)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=tT(),{heartbeatsToSend:a,unsentEntries:s}=HO(this._heartbeatsCache.heartbeats),l=Zf(JSON.stringify({version:2,heartbeats:a}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return gr.warn(t),""}}}function tT(){return new Date().toISOString().substring(0,10)}function HO(n,e=FO){const t=[];let a=n.slice();for(const s of n){const l=t.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),nT(t)>e){l.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),nT(t)>e){t.pop();break}a=a.slice(1)}return{heartbeatsToSend:t,unsentEntries:a}}class GO{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return HA()?GA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await zO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return eT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function nT(n){return Zf(JSON.stringify({version:2,heartbeats:n})).length}function KO(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let a=1;a<n.length;a++)n[a].date<t&&(t=n[a].date,e=a);return e}/**
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
 */function $O(n){ii(new $n("platform-logger",e=>new aO(e),"PRIVATE")),ii(new $n("heartbeat",e=>new qO(e),"PRIVATE")),gn(ig,ZE,n),gn(ig,ZE,"esm2017"),gn("fire-js","")}$O("");var YO="firebase",QO="11.3.1";/**
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
 */gn(YO,QO,"app");const ZA="@firebase/installations",Qg="0.6.12";/**
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
 */const JA=1e4,ew=`w:${Qg}`,tw="FIS_v2",XO="https://firebaseinstallations.googleapis.com/v1",WO=60*60*1e3,ZO="installations",JO="Installations";/**
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
 */const eD={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},ys=new ws(ZO,JO,eD);function nw(n){return n instanceof Yn&&n.code.includes("request-failed")}/**
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
 */function iw({projectId:n}){return`${XO}/projects/${n}/installations`}function rw(n){return{token:n.token,requestStatus:2,expiresIn:nD(n.expiresIn),creationTime:Date.now()}}async function aw(n,e){const a=(await e.json()).error;return ys.create("request-failed",{requestName:n,serverCode:a.code,serverMessage:a.message,serverStatus:a.status})}function sw({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tD(n,{refreshToken:e}){const t=sw(n);return t.append("Authorization",iD(e)),t}async function ow(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nD(n){return Number(n.replace("s","000"))}function iD(n){return`${tw} ${n}`}/**
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
 */async function rD({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const a=iw(n),s=sw(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={fid:t,authVersion:tw,appId:n.appId,sdkVersion:ew},d={method:"POST",headers:s,body:JSON.stringify(c)},p=await ow(()=>fetch(a,d));if(p.ok){const g=await p.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:rw(g.authToken)}}else throw await aw("Create Installation",p)}/**
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
 */function lw(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function aD(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const sD=/^[cdef][\w-]{21}$/,sg="";function oD(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=lD(n);return sD.test(t)?t:sg}catch{return sg}}function lD(n){return aD(n).substr(0,22)}/**
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
 */function Dh(n){return`${n.appName}!${n.appId}`}/**
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
 */const uw=new Map;function cw(n,e){const t=Dh(n);fw(t,e),uD(t,e)}function fw(n,e){const t=uw.get(n);if(t)for(const a of t)a(e)}function uD(n,e){const t=cD();t&&t.postMessage({key:n,fid:e}),fD()}let ds=null;function cD(){return!ds&&"BroadcastChannel"in self&&(ds=new BroadcastChannel("[Firebase] FID Change"),ds.onmessage=n=>{fw(n.data.key,n.data.fid)}),ds}function fD(){uw.size===0&&ds&&(ds.close(),ds=null)}/**
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
 */const hD="firebase-installations-database",dD=1,vs="firebase-installations-store";let wp=null;function Xg(){return wp||(wp=YA(hD,dD,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(vs)}}})),wp}async function eh(n,e){const t=Dh(n),s=(await Xg()).transaction(vs,"readwrite"),l=s.objectStore(vs),c=await l.get(t);return await l.put(e,t),await s.done,(!c||c.fid!==e.fid)&&cw(n,e.fid),e}async function hw(n){const e=Dh(n),a=(await Xg()).transaction(vs,"readwrite");await a.objectStore(vs).delete(e),await a.done}async function kh(n,e){const t=Dh(n),s=(await Xg()).transaction(vs,"readwrite"),l=s.objectStore(vs),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await s.done,d&&(!c||c.fid!==d.fid)&&cw(n,d.fid),d}/**
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
 */async function Wg(n){let e;const t=await kh(n.appConfig,a=>{const s=mD(a),l=pD(n,s);return e=l.registrationPromise,l.installationEntry});return t.fid===sg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mD(n){const e=n||{fid:oD(),registrationStatus:0};return dw(e)}function pD(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(ys.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},a=gD(n,t);return{installationEntry:t,registrationPromise:a}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:yD(n)}:{installationEntry:e}}async function gD(n,e){try{const t=await rD(n,e);return eh(n.appConfig,t)}catch(t){throw nw(t)&&t.customData.serverCode===409?await hw(n.appConfig):await eh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function yD(n){let e=await iT(n.appConfig);for(;e.registrationStatus===1;)await lw(100),e=await iT(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:a}=await Wg(n);return a||t}return e}function iT(n){return kh(n,e=>{if(!e)throw ys.create("installation-not-found");return dw(e)})}function dw(n){return vD(n)?{fid:n.fid,registrationStatus:0}:n}function vD(n){return n.registrationStatus===1&&n.registrationTime+JA<Date.now()}/**
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
 */async function _D({appConfig:n,heartbeatServiceProvider:e},t){const a=ED(n,t),s=tD(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={installation:{sdkVersion:ew,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(c)},p=await ow(()=>fetch(a,d));if(p.ok){const g=await p.json();return rw(g)}else throw await aw("Generate Auth Token",p)}function ED(n,{fid:e}){return`${iw(n)}/${e}/authTokens:generate`}/**
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
 */async function Zg(n,e=!1){let t;const a=await kh(n.appConfig,l=>{if(!mw(l))throw ys.create("not-registered");const c=l.authToken;if(!e&&AD(c))return l;if(c.requestStatus===1)return t=TD(n,e),l;{if(!navigator.onLine)throw ys.create("app-offline");const d=SD(l);return t=bD(n,d),d}});return t?await t:a.authToken}async function TD(n,e){let t=await rT(n.appConfig);for(;t.authToken.requestStatus===1;)await lw(100),t=await rT(n.appConfig);const a=t.authToken;return a.requestStatus===0?Zg(n,e):a}function rT(n){return kh(n,e=>{if(!mw(e))throw ys.create("not-registered");const t=e.authToken;return RD(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function bD(n,e){try{const t=await _D(n,e),a=Object.assign(Object.assign({},e),{authToken:t});return await eh(n.appConfig,a),t}catch(t){if(nw(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await hw(n.appConfig);else{const a=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await eh(n.appConfig,a)}throw t}}function mw(n){return n!==void 0&&n.registrationStatus===2}function AD(n){return n.requestStatus===2&&!wD(n)}function wD(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+WO}function SD(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function RD(n){return n.requestStatus===1&&n.requestTime+JA<Date.now()}/**
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
 */async function ID(n){const e=n,{installationEntry:t,registrationPromise:a}=await Wg(e);return a?a.catch(console.error):Zg(e).catch(console.error),t.fid}/**
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
 */async function CD(n,e=!1){const t=n;return await xD(t),(await Zg(t,e)).token}async function xD(n){const{registrationPromise:e}=await Wg(n);e&&await e}/**
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
 */function ND(n){if(!n||!n.options)throw Sp("App Configuration");if(!n.name)throw Sp("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Sp(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Sp(n){return ys.create("missing-app-config-values",{valueName:n})}/**
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
 */const pw="installations",OD="installations-internal",DD=n=>{const e=n.getProvider("app").getImmediate(),t=ND(e),a=Ss(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:a,_delete:()=>Promise.resolve()}},kD=n=>{const e=n.getProvider("app").getImmediate(),t=Ss(e,pw).getImmediate();return{getId:()=>ID(t),getToken:s=>CD(t,s)}};function PD(){ii(new $n(pw,DD,"PUBLIC")),ii(new $n(OD,kD,"PRIVATE"))}PD();gn(ZA,Qg);gn(ZA,Qg,"esm2017");/**
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
 */const th="analytics",MD="firebase_id",VD="origin",LD=60*1e3,UD="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Jg="https://www.googletagmanager.com/gtag/js";/**
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
 */const yn=new Oh("@firebase/analytics");/**
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
 */const jD={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},In=new ws("analytics","Analytics",jD);/**
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
 */function zD(n){if(!n.startsWith(Jg)){const e=In.create("invalid-gtag-resource",{gtagURL:n});return yn.warn(e.message),""}return n}function gw(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function FD(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function BD(n,e){const t=FD("firebase-js-sdk-policy",{createScriptURL:zD}),a=document.createElement("script"),s=`${Jg}?l=${n}&id=${e}`;a.src=t?t==null?void 0:t.createScriptURL(s):s,a.async=!0,document.head.appendChild(a)}function qD(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function HD(n,e,t,a,s,l){const c=a[s];try{if(c)await e[c];else{const p=(await gw(t)).find(g=>g.measurementId===s);p&&await e[p.appId]}}catch(d){yn.error(d)}n("config",s,l)}async function GD(n,e,t,a,s){try{let l=[];if(s&&s.send_to){let c=s.send_to;Array.isArray(c)||(c=[c]);const d=await gw(t);for(const p of c){const g=d.find(b=>b.measurementId===p),_=g&&e[g.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",a,s||{})}catch(l){yn.error(l)}}function KD(n,e,t,a){async function s(l,...c){try{if(l==="event"){const[d,p]=c;await GD(n,e,t,d,p)}else if(l==="config"){const[d,p]=c;await HD(n,e,t,a,d,p)}else if(l==="consent"){const[d,p]=c;n("consent",d,p)}else if(l==="get"){const[d,p,g]=c;n("get",d,p,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){yn.error(d)}}return s}function $D(n,e,t,a,s){let l=function(...c){window[a].push(arguments)};return window[s]&&typeof window[s]=="function"&&(l=window[s]),window[s]=KD(l,n,e,t),{gtagCore:l,wrappedGtag:window[s]}}function YD(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Jg)&&t.src.includes(n))return t;return null}/**
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
 */const QD=30,XD=1e3;class WD{constructor(e={},t=XD){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const yw=new WD;function ZD(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function JD(n){var e;const{appId:t,apiKey:a}=n,s={method:"GET",headers:ZD(a)},l=UD.replace("{app-id}",t),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let d="";try{const p=await c.json();!((e=p.error)===null||e===void 0)&&e.message&&(d=p.error.message)}catch{}throw In.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function ek(n,e=yw,t){const{appId:a,apiKey:s,measurementId:l}=n.options;if(!a)throw In.create("no-app-id");if(!s){if(l)return{measurementId:l,appId:a};throw In.create("no-api-key")}const c=e.getThrottleMetadata(a)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new ik;return setTimeout(async()=>{d.abort()},LD),vw({appId:a,apiKey:s,measurementId:l},c,d,e)}async function vw(n,{throttleEndTimeMillis:e,backoffCount:t},a,s=yw){var l;const{appId:c,measurementId:d}=n;try{await tk(a,e)}catch(p){if(d)return yn.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${p==null?void 0:p.message}]`),{appId:c,measurementId:d};throw p}try{const p=await JD(n);return s.deleteThrottleMetadata(c),p}catch(p){const g=p;if(!nk(g)){if(s.deleteThrottleMetadata(c),d)return yn.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw p}const _=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?YE(t,s.intervalMillis,QD):YE(t,s.intervalMillis),b={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return s.setThrottleMetadata(c,b),yn.debug(`Calling attemptFetch again in ${_} millis`),vw(n,b,a,s)}}function tk(n,e){return new Promise((t,a)=>{const s=Math.max(e-Date.now(),0),l=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(l),a(In.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nk(n){if(!(n instanceof Yn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ik{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function rk(n,e,t,a,s){if(s&&s.global){n("event",t,a);return}else{const l=await e,c=Object.assign(Object.assign({},a),{send_to:l});n("event",t,c)}}/**
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
 */async function ak(){if(HA())try{await GA()}catch(n){return yn.warn(In.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return yn.warn(In.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sk(n,e,t,a,s,l,c){var d;const p=ek(n);p.then(N=>{t[N.measurementId]=N.appId,n.options.measurementId&&N.measurementId!==n.options.measurementId&&yn.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${N.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(N=>yn.error(N)),e.push(p);const g=ak().then(N=>{if(N)return a.getId()}),[_,b]=await Promise.all([p,g]);YD(l)||BD(l,_.measurementId),s("js",new Date);const w=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return w[VD]="firebase",w.update=!0,b!=null&&(w[MD]=b),s("config",_.measurementId,w),_.measurementId}/**
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
 */class ok{constructor(e){this.app=e}_delete(){return delete vu[this.app.options.appId],Promise.resolve()}}let vu={},aT=[];const sT={};let Rp="dataLayer",lk="gtag",oT,_w,lT=!1;function uk(){const n=[];if(qA()&&n.push("This is a browser extension environment."),xN()||n.push("Cookies are not available."),n.length>0){const e=n.map((a,s)=>`(${s+1}) ${a}`).join(" "),t=In.create("invalid-analytics-context",{errorInfo:e});yn.warn(t.message)}}function ck(n,e,t){uk();const a=n.options.appId;if(!a)throw In.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)yn.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw In.create("no-api-key");if(vu[a]!=null)throw In.create("already-exists",{id:a});if(!lT){qD(Rp);const{wrappedGtag:l,gtagCore:c}=$D(vu,aT,sT,Rp,lk);_w=l,oT=c,lT=!0}return vu[a]=sk(n,aT,sT,e,oT,Rp,t),new ok(n)}function fk(n=Yg()){n=wt(n);const e=Ss(n,th);return e.isInitialized()?e.getImmediate():hk(n)}function hk(n,e={}){const t=Ss(n,th);if(t.isInitialized()){const s=t.getImmediate();if(Iu(e,t.getOptions()))return s;throw In.create("already-initialized")}return t.initialize({options:e})}function dk(n,e,t,a){n=wt(n),rk(_w,vu[n.app.options.appId],e,t,a).catch(s=>yn.error(s))}const uT="@firebase/analytics",cT="0.10.11";function mk(){ii(new $n(th,(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return ck(a,s,t)},"PUBLIC")),ii(new $n("analytics-internal",n,"PRIVATE")),gn(uT,cT),gn(uT,cT,"esm2017");function n(e){try{const t=e.getProvider(th).getImmediate();return{logEvent:(a,s,l)=>dk(t,a,s,l)}}catch(t){throw In.create("interop-component-reg-failed",{reason:t})}}}mk();function ey(n,e){var t={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&e.indexOf(a)<0&&(t[a]=n[a]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,a=Object.getOwnPropertySymbols(n);s<a.length;s++)e.indexOf(a[s])<0&&Object.prototype.propertyIsEnumerable.call(n,a[s])&&(t[a[s]]=n[a[s]]);return t}function Ew(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pk=Ew,Tw=new ws("auth","Firebase",Ew());/**
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
 */const nh=new Oh("@firebase/auth");function gk(n,...e){nh.logLevel<=Pe.WARN&&nh.warn(`Auth (${Rs}): ${n}`,...e)}function Uf(n,...e){nh.logLevel<=Pe.ERROR&&nh.error(`Auth (${Rs}): ${n}`,...e)}/**
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
 */function ri(n,...e){throw ty(n,...e)}function Ri(n,...e){return ty(n,...e)}function bw(n,e,t){const a=Object.assign(Object.assign({},pk()),{[e]:t});return new ws("auth","Firebase",a).create(e,{appName:n.name})}function pa(n){return bw(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ty(n,...e){if(typeof n!="string"){const t=e[0],a=[...e.slice(1)];return a[0]&&(a[0].appName=n.name),n._errorFactory.create(t,...a)}return Tw.create(n,...e)}function be(n,e,...t){if(!n)throw ty(e,...t)}function cr(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Uf(e),new Error(e)}function yr(n,e){n||cr(e)}/**
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
 */function og(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function yk(){return fT()==="http:"||fT()==="https:"}function fT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function vk(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(yk()||qA()||"connection"in navigator)?navigator.onLine:!0}function _k(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Hu{constructor(e,t){this.shortDelay=e,this.longDelay=t,yr(t>e,"Short delay should be less than long delay!"),this.isMobile=AN()||RN()}get(){return vk()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ny(n,e){yr(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Aw{static initialize(e,t,a){this.fetchImpl=e,t&&(this.headersImpl=t),a&&(this.responseImpl=a)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;cr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;cr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;cr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Ek={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Tk=new Hu(3e4,6e4);function Is(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Na(n,e,t,a,s={}){return ww(n,s,async()=>{let l={},c={};a&&(e==="GET"?c=a:l={body:JSON.stringify(a)});const d=qu(Object.assign({key:n.config.apiKey},c)).slice(1),p=await n._getAdditionalHeaders();p["Content-Type"]="application/json",n.languageCode&&(p["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:p},l);return SN()||(g.referrerPolicy="no-referrer"),Aw.fetch()(Sw(n,n.config.apiHost,t,d),g)})}async function ww(n,e,t){n._canInitEmulator=!1;const a=Object.assign(Object.assign({},Ek),e);try{const s=new Ak(n),l=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Rf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[p,g]=d.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Rf(n,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw Rf(n,"email-already-in-use",c);if(p==="USER_DISABLED")throw Rf(n,"user-disabled",c);const _=a[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw bw(n,_,g);ri(n,_)}}catch(s){if(s instanceof Yn)throw s;ri(n,"network-request-failed",{message:String(s)})}}async function Ph(n,e,t,a,s={}){const l=await Na(n,e,t,a,s);return"mfaPendingCredential"in l&&ri(n,"multi-factor-auth-required",{_serverResponse:l}),l}function Sw(n,e,t,a){const s=`${e}${t}?${a}`;return n.config.emulator?ny(n.config,s):`${n.config.apiScheme}://${s}`}function bk(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ak{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,a)=>{this.timer=setTimeout(()=>a(Ri(this.auth,"network-request-failed")),Tk.get())})}}function Rf(n,e,t){const a={appName:n.name};t.email&&(a.email=t.email),t.phoneNumber&&(a.phoneNumber=t.phoneNumber);const s=Ri(n,e,a);return s.customData._tokenResponse=t,s}function hT(n){return n!==void 0&&n.enterprise!==void 0}class wk{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return bk(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function Sk(n,e){return Na(n,"GET","/v2/recaptchaConfig",Is(n,e))}/**
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
 */async function Rk(n,e){return Na(n,"POST","/v1/accounts:delete",e)}async function Rw(n,e){return Na(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function _u(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ik(n,e=!1){const t=wt(n),a=await t.getIdToken(e),s=iy(a);be(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:s,token:a,authTime:_u(Ip(s.auth_time)),issuedAtTime:_u(Ip(s.iat)),expirationTime:_u(Ip(s.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function Ip(n){return Number(n)*1e3}function iy(n){const[e,t,a]=n.split(".");if(e===void 0||t===void 0||a===void 0)return Uf("JWT malformed, contained fewer than 3 sections"),null;try{const s=jA(t);return s?JSON.parse(s):(Uf("Failed to decode base64 JWT payload"),null)}catch(s){return Uf("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dT(n){const e=iy(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xu(n,e,t=!1){if(t)return e;try{return await e}catch(a){throw a instanceof Yn&&Ck(a)&&n.auth.currentUser===n&&await n.auth.signOut(),a}}function Ck({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class xk{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const a=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),a}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class lg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_u(this.lastLoginAt),this.creationTime=_u(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ih(n){var e;const t=n.auth,a=await n.getIdToken(),s=await xu(n,Rw(t,{idToken:a}));be(s==null?void 0:s.users.length,t,"internal-error");const l=s.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Iw(l.providerUserInfo):[],d=Ok(n.providerData,c),p=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),_=p?g:!1,b={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new lg(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,b)}async function Nk(n){const e=wt(n);await ih(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ok(n,e){return[...n.filter(a=>!e.some(s=>s.providerId===a.providerId)),...e]}function Iw(n){return n.map(e=>{var{providerId:t}=e,a=ey(e,["providerId"]);return{providerId:t,uid:a.rawId||"",displayName:a.displayName||null,email:a.email||null,phoneNumber:a.phoneNumber||null,photoURL:a.photoUrl||null}})}/**
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
 */async function Dk(n,e){const t=await ww(n,{},async()=>{const a=qu({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=n.config,c=Sw(n,s,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Aw.fetch()(c,{method:"POST",headers:d,body:a})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kk(n,e){return Na(n,"POST","/v2/accounts:revokeToken",Is(n,e))}/**
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
 */class xo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=dT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:a,refreshToken:s,expiresIn:l}=await Dk(e,t);this.updateTokensAndExpiration(a,s,Number(l))}updateTokensAndExpiration(e,t,a){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+a*1e3}static fromJSON(e,t){const{refreshToken:a,accessToken:s,expirationTime:l}=t,c=new xo;return a&&(be(typeof a=="string","internal-error",{appName:e}),c.refreshToken=a),s&&(be(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xo,this.toJSON())}_performRefresh(){return cr("not implemented")}}/**
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
 */function sa(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fr{constructor(e){var{uid:t,auth:a,stsTokenManager:s}=e,l=ey(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new xk(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=a,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new lg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await xu(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ik(this,e)}reload(){return Nk(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let a=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),a=!0),t&&await ih(this),await this.auth._persistUserIfCurrent(this),a&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Kn(this.auth.app))return Promise.reject(pa(this.auth));const e=await this.getIdToken();return await xu(this,Rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var a,s,l,c,d,p,g,_;const b=(a=t.displayName)!==null&&a!==void 0?a:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,N=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,x=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,k=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,B=(g=t.createdAt)!==null&&g!==void 0?g:void 0,W=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Q,emailVerified:oe,isAnonymous:ae,providerData:Ee,stsTokenManager:M}=t;be(Q&&M,e,"internal-error");const I=xo.fromJSON(this.name,M);be(typeof Q=="string",e,"internal-error"),sa(b,e.name),sa(w,e.name),be(typeof oe=="boolean",e,"internal-error"),be(typeof ae=="boolean",e,"internal-error"),sa(N,e.name),sa(x,e.name),sa(H,e.name),sa(k,e.name),sa(B,e.name),sa(W,e.name);const R=new fr({uid:Q,auth:e,email:w,emailVerified:oe,displayName:b,isAnonymous:ae,photoURL:x,phoneNumber:N,tenantId:H,stsTokenManager:I,createdAt:B,lastLoginAt:W});return Ee&&Array.isArray(Ee)&&(R.providerData=Ee.map(O=>Object.assign({},O))),k&&(R._redirectEventId=k),R}static async _fromIdTokenResponse(e,t,a=!1){const s=new xo;s.updateFromServerResponse(t);const l=new fr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:a});return await ih(l),l}static async _fromGetAccountInfoResponse(e,t,a){const s=t.users[0];be(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?Iw(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(l!=null&&l.length),d=new xo;d.updateFromIdToken(a);const p=new fr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new lg(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(l!=null&&l.length)};return Object.assign(p,g),p}}/**
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
 */const mT=new Map;function hr(n){yr(n instanceof Function,"Expected a class definition");let e=mT.get(n);return e?(yr(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,mT.set(n,e),e)}/**
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
 */class Cw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Cw.type="NONE";const pT=Cw;/**
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
 */function jf(n,e,t){return`firebase:${n}:${e}:${t}`}class No{constructor(e,t,a){this.persistence=e,this.auth=t,this.userKey=a;const{config:s,name:l}=this.auth;this.fullUserKey=jf(this.userKey,s.apiKey,l),this.fullPersistenceKey=jf("persistence",s.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,a="authUser"){if(!t.length)return new No(hr(pT),e,a);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=s[0]||hr(pT);const c=jf(a,e.config.apiKey,e.name);let d=null;for(const g of t)try{const _=await g._get(c);if(_){const b=fr._fromJSON(e,_);g!==l&&(d=b),l=g;break}}catch{}const p=s.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new No(l,e,a):(l=p[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new No(l,e,a))}}/**
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
 */function gT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Dw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Pw(e))return"Blackberry";if(Mw(e))return"Webos";if(Nw(e))return"Safari";if((e.includes("chrome/")||Ow(e))&&!e.includes("edge/"))return"Chrome";if(kw(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,a=n.match(t);if((a==null?void 0:a.length)===2)return a[1]}return"Other"}function xw(n=nn()){return/firefox\//i.test(n)}function Nw(n=nn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ow(n=nn()){return/crios\//i.test(n)}function Dw(n=nn()){return/iemobile/i.test(n)}function kw(n=nn()){return/android/i.test(n)}function Pw(n=nn()){return/blackberry/i.test(n)}function Mw(n=nn()){return/webos/i.test(n)}function ry(n=nn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Pk(n=nn()){var e;return ry(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Mk(){return IN()&&document.documentMode===10}function Vw(n=nn()){return ry(n)||kw(n)||Mw(n)||Pw(n)||/windows phone/i.test(n)||Dw(n)}/**
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
 */function Lw(n,e=[]){let t;switch(n){case"Browser":t=gT(nn());break;case"Worker":t=`${gT(nn())}-${n}`;break;default:t=n}const a=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Rs}/${a}`}/**
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
 */class Vk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const a=l=>new Promise((c,d)=>{try{const p=e(l);c(p)}catch(p){d(p)}});a.onAbort=t,this.queue.push(a);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const a of this.queue)await a(e),a.onAbort&&t.push(a.onAbort)}catch(a){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:a==null?void 0:a.message})}}}/**
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
 */async function Lk(n,e={}){return Na(n,"GET","/v2/passwordPolicy",Is(n,e))}/**
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
 */const Uk=6;class jk{constructor(e){var t,a,s,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:Uk,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(a=e.allowedNonAlphanumericCharacters)===null||a===void 0?void 0:a.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,a,s,l,c,d;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(a=p.meetsMaxPasswordLength)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(s=p.containsLowercaseLetter)!==null&&s!==void 0?s:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(d=p.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),p}validatePasswordLengthOptions(e,t){const a=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;a&&(t.meetsMinPasswordLength=e.length>=a),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let a;for(let s=0;s<e.length;s++)a=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,a>="a"&&a<="z",a>="A"&&a<="Z",a>="0"&&a<="9",this.allowedNonAlphanumericCharacters.includes(a))}updatePasswordCharacterOptionsStatuses(e,t,a,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=a)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class zk{constructor(e,t,a,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=a,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new yT(this),this.idTokenSubscription=new yT(this),this.beforeStateQueue=new Vk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tw,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=hr(t)),this._initializationPromise=this.queue(async()=>{var a,s;if(!this._deleted&&(this.persistenceManager=await No.create(this,e),!this._deleted)){if(!((a=this._popupRedirectResolver)===null||a===void 0)&&a._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Rw(this,{idToken:e}),a=await fr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(a)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const a=await this.assertedPersistence.getCurrentUser();let s=a,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===d)&&(p!=null&&p.user)&&(s=p.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=a,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ih(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_k()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Kn(this.app))return Promise.reject(pa(this));const t=e?wt(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Kn(this.app)?Promise.reject(pa(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Kn(this.app)?Promise.reject(pa(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(hr(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Lk(this),t=new jk(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ws("auth","Firebase",e())}onAuthStateChanged(e,t,a){return this.registerStateListener(this.authStateSubscription,e,t,a)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,a){return this.registerStateListener(this.idTokenSubscription,e,t,a)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const a=this.onAuthStateChanged(()=>{a(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),a={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(a.tenantId=this.tenantId),await kk(this,a)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const a=await this.getOrInitRedirectPersistenceManager(t);return e===null?a.removeCurrentUser():a.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&hr(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await No.create(this,[hr(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,a;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((a=this.redirectUser)===null||a===void 0?void 0:a._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const a=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==a&&(this.lastNotifiedUid=a,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,a,s){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,a,s);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Lw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const a=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());a&&(t["X-Firebase-Client"]=a);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&gk(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ko(n){return wt(n)}class yT{constructor(e){this.auth=e,this.observer=null,this.addObserver=PN(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Mh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Fk(n){Mh=n}function Uw(n){return Mh.loadJS(n)}function Bk(){return Mh.recaptchaEnterpriseScript}function qk(){return Mh.gapiScript}function Hk(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Gk{constructor(){this.enterprise=new Kk}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class Kk{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const $k="recaptcha-enterprise",jw="NO_RECAPTCHA";class Yk{constructor(e){this.type=$k,this.auth=Ko(e)}async verify(e="verify",t=!1){async function a(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{Sk(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new wk(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{d(p)})})}function s(l,c,d){const p=window.grecaptcha;hT(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(jw)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Gk().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{a(this.auth).then(d=>{if(!t&&hT(window.grecaptcha))s(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=Bk();p.length!==0&&(p+=d),Uw(p).then(()=>{s(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function vT(n,e,t,a=!1,s=!1){const l=new Yk(n);let c;if(s)c=jw;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const p=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const p=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return a?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function _T(n,e,t,a,s){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await vT(n,e,t,t==="getOobCode");return a(n,c)}else return a(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await vT(n,e,t,t==="getOobCode");return a(n,d)}else return Promise.reject(c)})}/**
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
 */function Qk(n,e){const t=Ss(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),l=t.getOptions();if(Iu(l,e??{}))return s;ri(s,"already-initialized")}return t.initialize({options:e})}function Xk(n,e){const t=(e==null?void 0:e.persistence)||[],a=(Array.isArray(t)?t:[t]).map(hr);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(a,e==null?void 0:e.popupRedirectResolver)}function Wk(n,e,t){const a=Ko(n);be(a._canInitEmulator,a,"emulator-config-failed"),be(/^https?:\/\//.test(e),a,"invalid-emulator-scheme");const s=!1,l=zw(e),{host:c,port:d}=Zk(e),p=d===null?"":`:${d}`;a.config.emulator={url:`${l}//${c}${p}/`},a.settings.appVerificationDisabledForTesting=!0,a.emulatorConfig=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})}),Jk()}function zw(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zk(n){const e=zw(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const a=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(a);if(s){const l=s[1];return{host:l,port:ET(a.substr(l.length+1))}}else{const[l,c]=a.split(":");return{host:l,port:ET(c)}}}function ET(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Jk(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class ay{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return cr("not implemented")}_getIdTokenResponse(e){return cr("not implemented")}_linkToIdToken(e,t){return cr("not implemented")}_getReauthenticationResolver(e){return cr("not implemented")}}async function eP(n,e){return Na(n,"POST","/v1/accounts:signUp",e)}/**
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
 */async function tP(n,e){return Ph(n,"POST","/v1/accounts:signInWithPassword",Is(n,e))}/**
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
 */async function nP(n,e){return Ph(n,"POST","/v1/accounts:signInWithEmailLink",Is(n,e))}async function iP(n,e){return Ph(n,"POST","/v1/accounts:signInWithEmailLink",Is(n,e))}/**
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
 */class Nu extends ay{constructor(e,t,a,s=null){super("password",a),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new Nu(e,t,"password")}static _fromEmailAndCode(e,t,a=null){return new Nu(e,t,"emailLink",a)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _T(e,t,"signInWithPassword",tP);case"emailLink":return nP(e,{email:this._email,oobCode:this._password});default:ri(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const a={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _T(e,a,"signUpPassword",eP);case"emailLink":return iP(e,{idToken:t,email:this._email,oobCode:this._password});default:ri(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Oo(n,e){return Ph(n,"POST","/v1/accounts:signInWithIdp",Is(n,e))}/**
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
 */const rP="http://localhost";class _s extends ay{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new _s(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ri("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:a,signInMethod:s}=t,l=ey(t,["providerId","signInMethod"]);if(!a||!s)return null;const c=new _s(a,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Oo(e,t)}_linkToIdToken(e,t){const a=this.buildRequest();return a.idToken=t,Oo(e,a)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Oo(e,t)}buildRequest(){const e={requestUri:rP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=qu(t)}return e}}/**
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
 */function aP(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function sP(n){const e=cu(fu(n)).link,t=e?cu(fu(e)).deep_link_id:null,a=cu(fu(n)).deep_link_id;return(a?cu(fu(a)).link:null)||a||t||e||n}class sy{constructor(e){var t,a,s,l,c,d;const p=cu(fu(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,_=(a=p.oobCode)!==null&&a!==void 0?a:null,b=aP((s=p.mode)!==null&&s!==void 0?s:null);be(g&&_&&b,"argument-error"),this.apiKey=g,this.operation=b,this.code=_,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=p.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=sP(e);try{return new sy(t)}catch{return null}}}/**
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
 */class $o{constructor(){this.providerId=$o.PROVIDER_ID}static credential(e,t){return Nu._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const a=sy.parseLink(t);return be(a,"argument-error"),Nu._fromEmailAndCode(e,a.code,a.tenantId)}}$o.PROVIDER_ID="password";$o.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$o.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Fw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Gu extends Fw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class oa extends Gu{constructor(){super("facebook.com")}static credential(e){return _s._fromParams({providerId:oa.PROVIDER_ID,signInMethod:oa.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return oa.credentialFromTaggedObject(e)}static credentialFromError(e){return oa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return oa.credential(e.oauthAccessToken)}catch{return null}}}oa.FACEBOOK_SIGN_IN_METHOD="facebook.com";oa.PROVIDER_ID="facebook.com";/**
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
 */class la extends Gu{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return _s._fromParams({providerId:la.PROVIDER_ID,signInMethod:la.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return la.credentialFromTaggedObject(e)}static credentialFromError(e){return la.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:a}=e;if(!t&&!a)return null;try{return la.credential(t,a)}catch{return null}}}la.GOOGLE_SIGN_IN_METHOD="google.com";la.PROVIDER_ID="google.com";/**
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
 */class ua extends Gu{constructor(){super("github.com")}static credential(e){return _s._fromParams({providerId:ua.PROVIDER_ID,signInMethod:ua.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ua.credentialFromTaggedObject(e)}static credentialFromError(e){return ua.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ua.credential(e.oauthAccessToken)}catch{return null}}}ua.GITHUB_SIGN_IN_METHOD="github.com";ua.PROVIDER_ID="github.com";/**
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
 */class ca extends Gu{constructor(){super("twitter.com")}static credential(e,t){return _s._fromParams({providerId:ca.PROVIDER_ID,signInMethod:ca.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ca.credentialFromTaggedObject(e)}static credentialFromError(e){return ca.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:a}=e;if(!t||!a)return null;try{return ca.credential(t,a)}catch{return null}}}ca.TWITTER_SIGN_IN_METHOD="twitter.com";ca.PROVIDER_ID="twitter.com";/**
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
 */class Mo{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,a,s=!1){const l=await fr._fromIdTokenResponse(e,a,s),c=TT(a);return new Mo({user:l,providerId:c,_tokenResponse:a,operationType:t})}static async _forOperation(e,t,a){await e._updateTokensIfNecessary(a,!0);const s=TT(a);return new Mo({user:e,providerId:s,_tokenResponse:a,operationType:t})}}function TT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class rh extends Yn{constructor(e,t,a,s){var l;super(t.code,t.message),this.operationType=a,this.user=s,Object.setPrototypeOf(this,rh.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:a}}static _fromErrorAndOperation(e,t,a,s){return new rh(e,t,a,s)}}function Bw(n,e,t,a){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?rh._fromErrorAndOperation(n,l,e,a):l})}async function oP(n,e,t=!1){const a=await xu(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Mo._forOperation(n,"link",a)}/**
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
 */async function lP(n,e,t=!1){const{auth:a}=n;if(Kn(a.app))return Promise.reject(pa(a));const s="reauthenticate";try{const l=await xu(n,Bw(a,s,e,n),t);be(l.idToken,a,"internal-error");const c=iy(l.idToken);be(c,a,"internal-error");const{sub:d}=c;return be(n.uid===d,a,"user-mismatch"),Mo._forOperation(n,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&ri(a,"user-mismatch"),l}}/**
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
 */async function qw(n,e,t=!1){if(Kn(n.app))return Promise.reject(pa(n));const a="signIn",s=await Bw(n,a,e),l=await Mo._fromIdTokenResponse(n,a,s);return t||await n._updateCurrentUser(l.user),l}async function uP(n,e){return qw(Ko(n),e)}/**
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
 */async function cP(n){const e=Ko(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function fP(n,e,t){return Kn(n.app)?Promise.reject(pa(n)):uP(wt(n),$o.credential(e,t)).catch(async a=>{throw a.code==="auth/password-does-not-meet-requirements"&&cP(n),a})}function hP(n,e,t,a){return wt(n).onIdTokenChanged(e,t,a)}function dP(n,e,t){return wt(n).beforeAuthStateChanged(e,t)}function mP(n){return wt(n).signOut()}const ah="__sak";/**
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
 */class Hw{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ah,"1"),this.storage.removeItem(ah),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const pP=1e3,gP=10;class Gw extends Hw{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Vw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const a=this.storage.getItem(t),s=this.localCache[t];a!==s&&e(t,s,a)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,p)=>{this.notifyListeners(c,p)});return}const a=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(a);!t&&this.localCache[a]===c||this.notifyListeners(a,c)},l=this.storage.getItem(a);Mk()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,gP):s()}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,a)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:a}),!0)})},pP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Gw.type="LOCAL";const yP=Gw;/**
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
 */class Kw extends Hw{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Kw.type="SESSION";const $w=Kw;/**
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
 */function vP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Vh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const a=new Vh(e);return this.receivers.push(a),a}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:a,eventType:s,data:l}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:a,eventType:s});const d=Array.from(c).map(async g=>g(t.origin,l)),p=await vP(d);t.ports[0].postMessage({status:"done",eventId:a,eventType:s,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vh.receivers=[];/**
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
 */function oy(n="",e=10){let t="";for(let a=0;a<e;a++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class _P{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,a=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((d,p)=>{const g=oy("",20);s.port1.start();const _=setTimeout(()=>{p(new Error("unsupported_event"))},a);c={messageChannel:s,onMessage(b){const w=b;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(_),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
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
 */function Ii(){return window}function EP(n){Ii().location.href=n}/**
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
 */function Yw(){return typeof Ii().WorkerGlobalScope<"u"&&typeof Ii().importScripts=="function"}async function TP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function AP(){return Yw()?self:null}/**
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
 */const Qw="firebaseLocalStorageDb",wP=1,sh="firebaseLocalStorage",Xw="fbase_key";class Ku{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Lh(n,e){return n.transaction([sh],e?"readwrite":"readonly").objectStore(sh)}function SP(){const n=indexedDB.deleteDatabase(Qw);return new Ku(n).toPromise()}function ug(){const n=indexedDB.open(Qw,wP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const a=n.result;try{a.createObjectStore(sh,{keyPath:Xw})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const a=n.result;a.objectStoreNames.contains(sh)?e(a):(a.close(),await SP(),e(await ug()))})})}async function bT(n,e,t){const a=Lh(n,!0).put({[Xw]:e,value:t});return new Ku(a).toPromise()}async function RP(n,e){const t=Lh(n,!1).get(e),a=await new Ku(t).toPromise();return a===void 0?null:a.value}function AT(n,e){const t=Lh(n,!0).delete(e);return new Ku(t).toPromise()}const IP=800,CP=3;class Ww{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ug(),this.db)}async _withRetries(e){let t=0;for(;;)try{const a=await this._openDb();return await e(a)}catch(a){if(t++>CP)throw a;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Yw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vh._getInstance(AP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await TP(),!this.activeServiceWorker)return;this.sender=new _P(this.activeServiceWorker);const a=await this.sender._send("ping",{},800);a&&!((e=a[0])===null||e===void 0)&&e.fulfilled&&!((t=a[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ug();return await bT(e,ah,"1"),await AT(e,ah),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(a=>bT(a,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(a=>RP(a,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>AT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=Lh(s,!1).getAll();return new Ku(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],a=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)a.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!a.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const a=this.listeners[e];if(a)for(const s of Array.from(a))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),IP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ww.type="LOCAL";const xP=Ww;new Hu(3e4,6e4);/**
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
 */function NP(n,e){return e?hr(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class ly extends ay{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Oo(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Oo(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Oo(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function OP(n){return qw(n.auth,new ly(n),n.bypassAuthState)}function DP(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),lP(t,new ly(n),n.bypassAuthState)}async function kP(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),oP(t,new ly(n),n.bypassAuthState)}/**
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
 */class Zw{constructor(e,t,a,s,l=!1){this.auth=e,this.resolver=a,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(a){this.reject(a)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:a,postBody:s,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:a,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return OP;case"linkViaPopup":case"linkViaRedirect":return kP;case"reauthViaPopup":case"reauthViaRedirect":return DP;default:ri(this.auth,"internal-error")}}resolve(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const PP=new Hu(2e3,1e4);class Io extends Zw{constructor(e,t,a,s,l){super(e,t,s,l),this.provider=a,this.authWindow=null,this.pollId=null,Io.currentPopupAction&&Io.currentPopupAction.cancel(),Io.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){yr(this.filter.length===1,"Popup operations only handle one event");const e=oy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ri(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ri(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Io.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,a;if(!((a=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||a===void 0)&&a.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ri(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,PP.get())};e()}}Io.currentPopupAction=null;/**
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
 */const MP="pendingRedirect",zf=new Map;class VP extends Zw{constructor(e,t,a=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,a),this.eventId=null}async execute(){let e=zf.get(this.auth._key());if(!e){try{const a=await LP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(a)}catch(t){e=()=>Promise.reject(t)}zf.set(this.auth._key(),e)}return this.bypassAuthState||zf.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function LP(n,e){const t=zP(e),a=jP(n);if(!await a._isAvailable())return!1;const s=await a._get(t)==="true";return await a._remove(t),s}function UP(n,e){zf.set(n._key(),e)}function jP(n){return hr(n._redirectPersistence)}function zP(n){return jf(MP,n.config.apiKey,n.name)}async function FP(n,e,t=!1){if(Kn(n.app))return Promise.reject(pa(n));const a=Ko(n),s=NP(a,e),c=await new VP(a,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await a._persistUserIfCurrent(c.user),await a._setRedirectUser(null,e)),c}/**
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
 */const BP=10*60*1e3;class qP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(a=>{this.isEventForConsumer(e,a)&&(t=!0,this.sendToConsumer(e,a),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!HP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var a;if(e.error&&!Jw(e)){const s=((a=e.error.code)===null||a===void 0?void 0:a.split("auth/")[1])||"internal-error";t.onError(Ri(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const a=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&a}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=BP&&this.cachedEventUids.clear(),this.cachedEventUids.has(wT(e))}saveEventToCache(e){this.cachedEventUids.add(wT(e)),this.lastProcessedEventTime=Date.now()}}function wT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jw({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function HP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jw(n);default:return!1}}/**
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
 */async function GP(n,e={}){return Na(n,"GET","/v1/projects",e)}/**
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
 */const KP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,$P=/^https?/;async function YP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await GP(n);for(const t of e)try{if(QP(t))return}catch{}ri(n,"unauthorized-domain")}function QP(n){const e=og(),{protocol:t,hostname:a}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&a===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===a}if(!$P.test(t))return!1;if(KP.test(n))return a===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(a)}/**
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
 */const XP=new Hu(3e4,6e4);function ST(){const n=Ii().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function WP(n){return new Promise((e,t)=>{var a,s,l;function c(){ST(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ST(),t(Ri(n,"network-request-failed"))},timeout:XP.get()})}if(!((s=(a=Ii().gapi)===null||a===void 0?void 0:a.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((l=Ii().gapi)===null||l===void 0)&&l.load)c();else{const d=Hk("iframefcb");return Ii()[d]=()=>{gapi.load?c():t(Ri(n,"network-request-failed"))},Uw(`${qk()}?onload=${d}`).catch(p=>t(p))}}).catch(e=>{throw Ff=null,e})}let Ff=null;function ZP(n){return Ff=Ff||WP(n),Ff}/**
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
 */const JP=new Hu(5e3,15e3),eM="__/auth/iframe",tM="emulator/auth/iframe",nM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function rM(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ny(e,tM):`https://${n.config.authDomain}/${eM}`,a={apiKey:e.apiKey,appName:n.name,v:Rs},s=iM.get(n.config.apiHost);s&&(a.eid=s);const l=n._getFrameworks();return l.length&&(a.fw=l.join(",")),`${t}?${qu(a).slice(1)}`}async function aM(n){const e=await ZP(n),t=Ii().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:rM(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:nM,dontclear:!0},a=>new Promise(async(s,l)=>{await a.restyle({setHideOnLeave:!1});const c=Ri(n,"network-request-failed"),d=Ii().setTimeout(()=>{l(c)},JP.get());function p(){Ii().clearTimeout(d),s(a)}a.ping(p).then(p,()=>{l(c)})}))}/**
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
 */const sM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},oM=500,lM=600,uM="_blank",cM="http://localhost";class RT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fM(n,e,t,a=oM,s=lM){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-a)/2,0).toString();let d="";const p=Object.assign(Object.assign({},sM),{width:a.toString(),height:s.toString(),top:l,left:c}),g=nn().toLowerCase();t&&(d=Ow(g)?uM:t),xw(g)&&(e=e||cM,p.scrollbars="yes");const _=Object.entries(p).reduce((w,[N,x])=>`${w}${N}=${x},`,"");if(Pk(g)&&d!=="_self")return hM(e||"",d),new RT(null);const b=window.open(e||"",d,_);be(b,n,"popup-blocked");try{b.focus()}catch{}return new RT(b)}function hM(n,e){const t=document.createElement("a");t.href=n,t.target=e;const a=document.createEvent("MouseEvent");a.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(a)}/**
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
 */const dM="__/auth/handler",mM="emulator/auth/handler",pM=encodeURIComponent("fac");async function IT(n,e,t,a,s,l){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:a,v:Rs,eventId:s};if(e instanceof Fw){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",kN(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,b]of Object.entries({}))c[_]=b}if(e instanceof Gu){const _=e.getScopes().filter(b=>b!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const p=await n._getAppCheckToken(),g=p?`#${pM}=${encodeURIComponent(p)}`:"";return`${gM(n)}?${qu(d).slice(1)}${g}`}function gM({config:n}){return n.emulator?ny(n,mM):`https://${n.authDomain}/${dM}`}/**
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
 */const Cp="webStorageSupport";class yM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$w,this._completeRedirectFn=FP,this._overrideRedirectResult=UP}async _openPopup(e,t,a,s){var l;yr((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await IT(e,t,a,og(),s);return fM(e,c,oy())}async _openRedirect(e,t,a,s){await this._originValidation(e);const l=await IT(e,t,a,og(),s);return EP(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:l}=this.eventManagers[t];return s?Promise.resolve(s):(yr(l,"If manager is not set, promise should be"),l)}const a=this.initAndGetManager(e);return this.eventManagers[t]={promise:a},a.catch(()=>{delete this.eventManagers[t]}),a}async initAndGetManager(e){const t=await aM(e),a=new qP(e);return t.register("authEvent",s=>(be(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:a.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:a},this.iframes[e._key()]=t,a}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cp,{type:Cp},s=>{var l;const c=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[Cp];c!==void 0&&t(!!c),ri(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=YP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Vw()||Nw()||ry()}}const vM=yM;var CT="@firebase/auth",xT="1.9.0";/**
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
 */class _M{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(a=>{e((a==null?void 0:a.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function EM(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function TM(n){ii(new $n("auth",(e,{options:t})=>{const a=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=a.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:a.name});const p={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Lw(n)},g=new zk(a,s,l,p);return Xk(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,a)=>{e.getProvider("auth-internal").initialize()})),ii(new $n("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(a=>new _M(a))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),gn(CT,xT,EM(n)),gn(CT,xT,"esm2017")}/**
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
 */const bM=5*60,AM=BA("authIdTokenMaxAge")||bM;let NT=null;const wM=n=>async e=>{const t=e&&await e.getIdTokenResult(),a=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(a&&a>AM)return;const s=t==null?void 0:t.token;NT!==s&&(NT=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function SM(n=Yg()){const e=Ss(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Qk(n,{popupRedirectResolver:vM,persistence:[xP,yP,$w]}),a=BA("authTokenSyncURL");if(a&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(a,location.origin);if(location.origin===l.origin){const c=wM(l.toString());dP(t,c,()=>c(t.currentUser)),hP(t,d=>c(d))}}const s=zA("auth");return s&&Wk(t,`http://${s}`),t}function RM(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}Fk({loadJS(n){return new Promise((e,t)=>{const a=document.createElement("script");a.setAttribute("src",n),a.onload=e,a.onerror=s=>{const l=Ri("internal-error");l.customData=s,t(l)},a.type="text/javascript",a.charset="UTF-8",RM().appendChild(a)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});TM("Browser");var OT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ga,eS;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(M,I){function R(){}R.prototype=I.prototype,M.D=I.prototype,M.prototype=new R,M.prototype.constructor=M,M.C=function(O,L,q){for(var D=Array(arguments.length-2),St=2;St<arguments.length;St++)D[St-2]=arguments[St];return I.prototype[L].apply(O,D)}}function t(){this.blockSize=-1}function a(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(a,t),a.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(M,I,R){R||(R=0);var O=Array(16);if(typeof I=="string")for(var L=0;16>L;++L)O[L]=I.charCodeAt(R++)|I.charCodeAt(R++)<<8|I.charCodeAt(R++)<<16|I.charCodeAt(R++)<<24;else for(L=0;16>L;++L)O[L]=I[R++]|I[R++]<<8|I[R++]<<16|I[R++]<<24;I=M.g[0],R=M.g[1],L=M.g[2];var q=M.g[3],D=I+(q^R&(L^q))+O[0]+3614090360&4294967295;I=R+(D<<7&4294967295|D>>>25),D=q+(L^I&(R^L))+O[1]+3905402710&4294967295,q=I+(D<<12&4294967295|D>>>20),D=L+(R^q&(I^R))+O[2]+606105819&4294967295,L=q+(D<<17&4294967295|D>>>15),D=R+(I^L&(q^I))+O[3]+3250441966&4294967295,R=L+(D<<22&4294967295|D>>>10),D=I+(q^R&(L^q))+O[4]+4118548399&4294967295,I=R+(D<<7&4294967295|D>>>25),D=q+(L^I&(R^L))+O[5]+1200080426&4294967295,q=I+(D<<12&4294967295|D>>>20),D=L+(R^q&(I^R))+O[6]+2821735955&4294967295,L=q+(D<<17&4294967295|D>>>15),D=R+(I^L&(q^I))+O[7]+4249261313&4294967295,R=L+(D<<22&4294967295|D>>>10),D=I+(q^R&(L^q))+O[8]+1770035416&4294967295,I=R+(D<<7&4294967295|D>>>25),D=q+(L^I&(R^L))+O[9]+2336552879&4294967295,q=I+(D<<12&4294967295|D>>>20),D=L+(R^q&(I^R))+O[10]+4294925233&4294967295,L=q+(D<<17&4294967295|D>>>15),D=R+(I^L&(q^I))+O[11]+2304563134&4294967295,R=L+(D<<22&4294967295|D>>>10),D=I+(q^R&(L^q))+O[12]+1804603682&4294967295,I=R+(D<<7&4294967295|D>>>25),D=q+(L^I&(R^L))+O[13]+4254626195&4294967295,q=I+(D<<12&4294967295|D>>>20),D=L+(R^q&(I^R))+O[14]+2792965006&4294967295,L=q+(D<<17&4294967295|D>>>15),D=R+(I^L&(q^I))+O[15]+1236535329&4294967295,R=L+(D<<22&4294967295|D>>>10),D=I+(L^q&(R^L))+O[1]+4129170786&4294967295,I=R+(D<<5&4294967295|D>>>27),D=q+(R^L&(I^R))+O[6]+3225465664&4294967295,q=I+(D<<9&4294967295|D>>>23),D=L+(I^R&(q^I))+O[11]+643717713&4294967295,L=q+(D<<14&4294967295|D>>>18),D=R+(q^I&(L^q))+O[0]+3921069994&4294967295,R=L+(D<<20&4294967295|D>>>12),D=I+(L^q&(R^L))+O[5]+3593408605&4294967295,I=R+(D<<5&4294967295|D>>>27),D=q+(R^L&(I^R))+O[10]+38016083&4294967295,q=I+(D<<9&4294967295|D>>>23),D=L+(I^R&(q^I))+O[15]+3634488961&4294967295,L=q+(D<<14&4294967295|D>>>18),D=R+(q^I&(L^q))+O[4]+3889429448&4294967295,R=L+(D<<20&4294967295|D>>>12),D=I+(L^q&(R^L))+O[9]+568446438&4294967295,I=R+(D<<5&4294967295|D>>>27),D=q+(R^L&(I^R))+O[14]+3275163606&4294967295,q=I+(D<<9&4294967295|D>>>23),D=L+(I^R&(q^I))+O[3]+4107603335&4294967295,L=q+(D<<14&4294967295|D>>>18),D=R+(q^I&(L^q))+O[8]+1163531501&4294967295,R=L+(D<<20&4294967295|D>>>12),D=I+(L^q&(R^L))+O[13]+2850285829&4294967295,I=R+(D<<5&4294967295|D>>>27),D=q+(R^L&(I^R))+O[2]+4243563512&4294967295,q=I+(D<<9&4294967295|D>>>23),D=L+(I^R&(q^I))+O[7]+1735328473&4294967295,L=q+(D<<14&4294967295|D>>>18),D=R+(q^I&(L^q))+O[12]+2368359562&4294967295,R=L+(D<<20&4294967295|D>>>12),D=I+(R^L^q)+O[5]+4294588738&4294967295,I=R+(D<<4&4294967295|D>>>28),D=q+(I^R^L)+O[8]+2272392833&4294967295,q=I+(D<<11&4294967295|D>>>21),D=L+(q^I^R)+O[11]+1839030562&4294967295,L=q+(D<<16&4294967295|D>>>16),D=R+(L^q^I)+O[14]+4259657740&4294967295,R=L+(D<<23&4294967295|D>>>9),D=I+(R^L^q)+O[1]+2763975236&4294967295,I=R+(D<<4&4294967295|D>>>28),D=q+(I^R^L)+O[4]+1272893353&4294967295,q=I+(D<<11&4294967295|D>>>21),D=L+(q^I^R)+O[7]+4139469664&4294967295,L=q+(D<<16&4294967295|D>>>16),D=R+(L^q^I)+O[10]+3200236656&4294967295,R=L+(D<<23&4294967295|D>>>9),D=I+(R^L^q)+O[13]+681279174&4294967295,I=R+(D<<4&4294967295|D>>>28),D=q+(I^R^L)+O[0]+3936430074&4294967295,q=I+(D<<11&4294967295|D>>>21),D=L+(q^I^R)+O[3]+3572445317&4294967295,L=q+(D<<16&4294967295|D>>>16),D=R+(L^q^I)+O[6]+76029189&4294967295,R=L+(D<<23&4294967295|D>>>9),D=I+(R^L^q)+O[9]+3654602809&4294967295,I=R+(D<<4&4294967295|D>>>28),D=q+(I^R^L)+O[12]+3873151461&4294967295,q=I+(D<<11&4294967295|D>>>21),D=L+(q^I^R)+O[15]+530742520&4294967295,L=q+(D<<16&4294967295|D>>>16),D=R+(L^q^I)+O[2]+3299628645&4294967295,R=L+(D<<23&4294967295|D>>>9),D=I+(L^(R|~q))+O[0]+4096336452&4294967295,I=R+(D<<6&4294967295|D>>>26),D=q+(R^(I|~L))+O[7]+1126891415&4294967295,q=I+(D<<10&4294967295|D>>>22),D=L+(I^(q|~R))+O[14]+2878612391&4294967295,L=q+(D<<15&4294967295|D>>>17),D=R+(q^(L|~I))+O[5]+4237533241&4294967295,R=L+(D<<21&4294967295|D>>>11),D=I+(L^(R|~q))+O[12]+1700485571&4294967295,I=R+(D<<6&4294967295|D>>>26),D=q+(R^(I|~L))+O[3]+2399980690&4294967295,q=I+(D<<10&4294967295|D>>>22),D=L+(I^(q|~R))+O[10]+4293915773&4294967295,L=q+(D<<15&4294967295|D>>>17),D=R+(q^(L|~I))+O[1]+2240044497&4294967295,R=L+(D<<21&4294967295|D>>>11),D=I+(L^(R|~q))+O[8]+1873313359&4294967295,I=R+(D<<6&4294967295|D>>>26),D=q+(R^(I|~L))+O[15]+4264355552&4294967295,q=I+(D<<10&4294967295|D>>>22),D=L+(I^(q|~R))+O[6]+2734768916&4294967295,L=q+(D<<15&4294967295|D>>>17),D=R+(q^(L|~I))+O[13]+1309151649&4294967295,R=L+(D<<21&4294967295|D>>>11),D=I+(L^(R|~q))+O[4]+4149444226&4294967295,I=R+(D<<6&4294967295|D>>>26),D=q+(R^(I|~L))+O[11]+3174756917&4294967295,q=I+(D<<10&4294967295|D>>>22),D=L+(I^(q|~R))+O[2]+718787259&4294967295,L=q+(D<<15&4294967295|D>>>17),D=R+(q^(L|~I))+O[9]+3951481745&4294967295,M.g[0]=M.g[0]+I&4294967295,M.g[1]=M.g[1]+(L+(D<<21&4294967295|D>>>11))&4294967295,M.g[2]=M.g[2]+L&4294967295,M.g[3]=M.g[3]+q&4294967295}a.prototype.u=function(M,I){I===void 0&&(I=M.length);for(var R=I-this.blockSize,O=this.B,L=this.h,q=0;q<I;){if(L==0)for(;q<=R;)s(this,M,q),q+=this.blockSize;if(typeof M=="string"){for(;q<I;)if(O[L++]=M.charCodeAt(q++),L==this.blockSize){s(this,O),L=0;break}}else for(;q<I;)if(O[L++]=M[q++],L==this.blockSize){s(this,O),L=0;break}}this.h=L,this.o+=I},a.prototype.v=function(){var M=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);M[0]=128;for(var I=1;I<M.length-8;++I)M[I]=0;var R=8*this.o;for(I=M.length-8;I<M.length;++I)M[I]=R&255,R/=256;for(this.u(M),M=Array(16),I=R=0;4>I;++I)for(var O=0;32>O;O+=8)M[R++]=this.g[I]>>>O&255;return M};function l(M,I){var R=d;return Object.prototype.hasOwnProperty.call(R,M)?R[M]:R[M]=I(M)}function c(M,I){this.h=I;for(var R=[],O=!0,L=M.length-1;0<=L;L--){var q=M[L]|0;O&&q==I||(R[L]=q,O=!1)}this.g=R}var d={};function p(M){return-128<=M&&128>M?l(M,function(I){return new c([I|0],0>I?-1:0)}):new c([M|0],0>M?-1:0)}function g(M){if(isNaN(M)||!isFinite(M))return b;if(0>M)return k(g(-M));for(var I=[],R=1,O=0;M>=R;O++)I[O]=M/R|0,R*=4294967296;return new c(I,0)}function _(M,I){if(M.length==0)throw Error("number format error: empty string");if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(M.charAt(0)=="-")return k(_(M.substring(1),I));if(0<=M.indexOf("-"))throw Error('number format error: interior "-" character');for(var R=g(Math.pow(I,8)),O=b,L=0;L<M.length;L+=8){var q=Math.min(8,M.length-L),D=parseInt(M.substring(L,L+q),I);8>q?(q=g(Math.pow(I,q)),O=O.j(q).add(g(D))):(O=O.j(R),O=O.add(g(D)))}return O}var b=p(0),w=p(1),N=p(16777216);n=c.prototype,n.m=function(){if(H(this))return-k(this).m();for(var M=0,I=1,R=0;R<this.g.length;R++){var O=this.i(R);M+=(0<=O?O:4294967296+O)*I,I*=4294967296}return M},n.toString=function(M){if(M=M||10,2>M||36<M)throw Error("radix out of range: "+M);if(x(this))return"0";if(H(this))return"-"+k(this).toString(M);for(var I=g(Math.pow(M,6)),R=this,O="";;){var L=oe(R,I).g;R=B(R,L.j(I));var q=((0<R.g.length?R.g[0]:R.h)>>>0).toString(M);if(R=L,x(R))return q+O;for(;6>q.length;)q="0"+q;O=q+O}},n.i=function(M){return 0>M?0:M<this.g.length?this.g[M]:this.h};function x(M){if(M.h!=0)return!1;for(var I=0;I<M.g.length;I++)if(M.g[I]!=0)return!1;return!0}function H(M){return M.h==-1}n.l=function(M){return M=B(this,M),H(M)?-1:x(M)?0:1};function k(M){for(var I=M.g.length,R=[],O=0;O<I;O++)R[O]=~M.g[O];return new c(R,~M.h).add(w)}n.abs=function(){return H(this)?k(this):this},n.add=function(M){for(var I=Math.max(this.g.length,M.g.length),R=[],O=0,L=0;L<=I;L++){var q=O+(this.i(L)&65535)+(M.i(L)&65535),D=(q>>>16)+(this.i(L)>>>16)+(M.i(L)>>>16);O=D>>>16,q&=65535,D&=65535,R[L]=D<<16|q}return new c(R,R[R.length-1]&-2147483648?-1:0)};function B(M,I){return M.add(k(I))}n.j=function(M){if(x(this)||x(M))return b;if(H(this))return H(M)?k(this).j(k(M)):k(k(this).j(M));if(H(M))return k(this.j(k(M)));if(0>this.l(N)&&0>M.l(N))return g(this.m()*M.m());for(var I=this.g.length+M.g.length,R=[],O=0;O<2*I;O++)R[O]=0;for(O=0;O<this.g.length;O++)for(var L=0;L<M.g.length;L++){var q=this.i(O)>>>16,D=this.i(O)&65535,St=M.i(L)>>>16,gt=M.i(L)&65535;R[2*O+2*L]+=D*gt,W(R,2*O+2*L),R[2*O+2*L+1]+=q*gt,W(R,2*O+2*L+1),R[2*O+2*L+1]+=D*St,W(R,2*O+2*L+1),R[2*O+2*L+2]+=q*St,W(R,2*O+2*L+2)}for(O=0;O<I;O++)R[O]=R[2*O+1]<<16|R[2*O];for(O=I;O<2*I;O++)R[O]=0;return new c(R,0)};function W(M,I){for(;(M[I]&65535)!=M[I];)M[I+1]+=M[I]>>>16,M[I]&=65535,I++}function Q(M,I){this.g=M,this.h=I}function oe(M,I){if(x(I))throw Error("division by zero");if(x(M))return new Q(b,b);if(H(M))return I=oe(k(M),I),new Q(k(I.g),k(I.h));if(H(I))return I=oe(M,k(I)),new Q(k(I.g),I.h);if(30<M.g.length){if(H(M)||H(I))throw Error("slowDivide_ only works with positive integers.");for(var R=w,O=I;0>=O.l(M);)R=ae(R),O=ae(O);var L=Ee(R,1),q=Ee(O,1);for(O=Ee(O,2),R=Ee(R,2);!x(O);){var D=q.add(O);0>=D.l(M)&&(L=L.add(R),q=D),O=Ee(O,1),R=Ee(R,1)}return I=B(M,L.j(I)),new Q(L,I)}for(L=b;0<=M.l(I);){for(R=Math.max(1,Math.floor(M.m()/I.m())),O=Math.ceil(Math.log(R)/Math.LN2),O=48>=O?1:Math.pow(2,O-48),q=g(R),D=q.j(I);H(D)||0<D.l(M);)R-=O,q=g(R),D=q.j(I);x(q)&&(q=w),L=L.add(q),M=B(M,D)}return new Q(L,M)}n.A=function(M){return oe(this,M).h},n.and=function(M){for(var I=Math.max(this.g.length,M.g.length),R=[],O=0;O<I;O++)R[O]=this.i(O)&M.i(O);return new c(R,this.h&M.h)},n.or=function(M){for(var I=Math.max(this.g.length,M.g.length),R=[],O=0;O<I;O++)R[O]=this.i(O)|M.i(O);return new c(R,this.h|M.h)},n.xor=function(M){for(var I=Math.max(this.g.length,M.g.length),R=[],O=0;O<I;O++)R[O]=this.i(O)^M.i(O);return new c(R,this.h^M.h)};function ae(M){for(var I=M.g.length+1,R=[],O=0;O<I;O++)R[O]=M.i(O)<<1|M.i(O-1)>>>31;return new c(R,M.h)}function Ee(M,I){var R=I>>5;I%=32;for(var O=M.g.length-R,L=[],q=0;q<O;q++)L[q]=0<I?M.i(q+R)>>>I|M.i(q+R+1)<<32-I:M.i(q+R);return new c(L,M.h)}a.prototype.digest=a.prototype.v,a.prototype.reset=a.prototype.s,a.prototype.update=a.prototype.u,eS=a,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=_,ga=c}).apply(typeof OT<"u"?OT:typeof self<"u"?self:typeof window<"u"?window:{});var If=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var tS,hu,nS,Bf,cg,iS,rS,aS;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,v){return f==Array.prototype||f==Object.prototype||(f[y]=v.value),f};function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof If=="object"&&If];for(var y=0;y<f.length;++y){var v=f[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var a=t(this);function s(f,y){if(y)e:{var v=a;f=f.split(".");for(var S=0;S<f.length-1;S++){var F=f[S];if(!(F in v))break e;v=v[F]}f=f[f.length-1],S=v[f],y=y(S),y!=S&&y!=null&&e(v,f,{configurable:!0,writable:!0,value:y})}}function l(f,y){f instanceof String&&(f+="");var v=0,S=!1,F={next:function(){if(!S&&v<f.length){var $=v++;return{value:y($,f[$]),done:!1}}return S=!0,{done:!0,value:void 0}}};return F[Symbol.iterator]=function(){return F},F}s("Array.prototype.values",function(f){return f||function(){return l(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function p(f){var y=typeof f;return y=y!="object"?y:f?Array.isArray(f)?"array":y:"null",y=="array"||y=="object"&&typeof f.length=="number"}function g(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function _(f,y,v){return f.call.apply(f.bind,arguments)}function b(f,y,v){if(!f)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var F=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(F,S),f.apply(y,F)}}return function(){return f.apply(y,arguments)}}function w(f,y,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:b,w.apply(null,arguments)}function N(f,y){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),f.apply(this,S)}}function x(f,y){function v(){}v.prototype=y.prototype,f.aa=y.prototype,f.prototype=new v,f.prototype.constructor=f,f.Qb=function(S,F,$){for(var re=Array(arguments.length-2),Ue=2;Ue<arguments.length;Ue++)re[Ue-2]=arguments[Ue];return y.prototype[F].apply(S,re)}}function H(f){const y=f.length;if(0<y){const v=Array(y);for(let S=0;S<y;S++)v[S]=f[S];return v}return[]}function k(f,y){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(p(S)){const F=f.length||0,$=S.length||0;f.length=F+$;for(let re=0;re<$;re++)f[F+re]=S[re]}else f.push(S)}}class B{constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function W(f){return/^[\s\xa0]*$/.test(f)}function Q(){var f=d.navigator;return f&&(f=f.userAgent)?f:""}function oe(f){return oe[" "](f),f}oe[" "]=function(){};var ae=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function Ee(f,y,v){for(const S in f)y.call(v,f[S],S,f)}function M(f,y){for(const v in f)y.call(void 0,f[v],v,f)}function I(f){const y={};for(const v in f)y[v]=f[v];return y}const R="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function O(f,y){let v,S;for(let F=1;F<arguments.length;F++){S=arguments[F];for(v in S)f[v]=S[v];for(let $=0;$<R.length;$++)v=R[$],Object.prototype.hasOwnProperty.call(S,v)&&(f[v]=S[v])}}function L(f){var y=1;f=f.split(":");const v=[];for(;0<y&&f.length;)v.push(f.shift()),y--;return f.length&&v.push(f.join(":")),v}function q(f){d.setTimeout(()=>{throw f},0)}function D(){var f=Ke;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class St{constructor(){this.h=this.g=null}add(y,v){const S=gt.get();S.set(y,v),this.h?this.h.next=S:this.g=S,this.h=S}}var gt=new B(()=>new se,f=>f.reset());class se{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ye=!1,Ke=new St,P=()=>{const f=d.Promise.resolve(void 0);Te=()=>{f.then(ne)}};var ne=()=>{for(var f;f=D();){try{f.h.call(f.g)}catch(v){q(v)}var y=gt;y.j(f),100>y.h&&(y.h++,f.next=y.g,y.g=f)}ye=!1};function me(){this.s=this.s,this.C=this.C}me.prototype.s=!1,me.prototype.ma=function(){this.s||(this.s=!0,this.N())},me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function le(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}le.prototype.h=function(){this.defaultPrevented=!0};var ue=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const v=()=>{};d.addEventListener("test",v,y),d.removeEventListener("test",v,y)}catch{}return f}();function xe(f,y){if(le.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var v=this.type=f.type,S=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget){if(ae){e:{try{oe(y.nodeName);var F=!0;break e}catch{}F=!1}F||(y=null)}}else v=="mouseover"?y=f.fromElement:v=="mouseout"&&(y=f.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:Ie[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&xe.aa.h.call(this)}}x(xe,le);var Ie={2:"touch",3:"pen",4:"mouse"};xe.prototype.h=function(){xe.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var yt="closure_listenable_"+(1e6*Math.random()|0),Be=0;function lt(f,y,v,S,F){this.listener=f,this.proxy=null,this.src=y,this.type=v,this.capture=!!S,this.ha=F,this.key=++Be,this.da=this.fa=!1}function Qe(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function rn(f){this.src=f,this.g={},this.h=0}rn.prototype.add=function(f,y,v,S,F){var $=f.toString();f=this.g[$],f||(f=this.g[$]=[],this.h++);var re=xn(f,y,S,F);return-1<re?(y=f[re],v||(y.fa=!1)):(y=new lt(y,this.src,$,!!S,F),y.fa=v,f.push(y)),y};function Li(f,y){var v=y.type;if(v in f.g){var S=f.g[v],F=Array.prototype.indexOf.call(S,y,void 0),$;($=0<=F)&&Array.prototype.splice.call(S,F,1),$&&(Qe(y),f.g[v].length==0&&(delete f.g[v],f.h--))}}function xn(f,y,v,S){for(var F=0;F<f.length;++F){var $=f[F];if(!$.da&&$.listener==y&&$.capture==!!v&&$.ha==S)return F}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Ar={};function Ui(f,y,v,S,F){if(Array.isArray(y)){for(var $=0;$<y.length;$++)Ui(f,y[$],v,S,F);return null}return v=tc(v),f&&f[yt]?f.K(y,v,g(S)?!!S.capture:!1,F):Jo(f,y,v,!1,S,F)}function Jo(f,y,v,S,F,$){if(!y)throw Error("Invalid event type");var re=g(F)?!!F.capture:!!F,Ue=el(f);if(Ue||(f[br]=Ue=new rn(f)),v=Ue.add(y,v,S,re,$),v.proxy)return v;if(S=Ns(),v.proxy=S,S.src=f,S.listener=v,f.addEventListener)ue||(F=re),F===void 0&&(F=!1),f.addEventListener(y.toString(),S,F);else if(f.attachEvent)f.attachEvent(Ds(y.toString()),S);else if(f.addListener&&f.removeListener)f.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function Ns(){function f(v){return y.call(f.src,f.listener,v)}const y=rd;return f}function Os(f,y,v,S,F){if(Array.isArray(y))for(var $=0;$<y.length;$++)Os(f,y[$],v,S,F);else S=g(S)?!!S.capture:!!S,v=tc(v),f&&f[yt]?(f=f.i,y=String(y).toString(),y in f.g&&($=f.g[y],v=xn($,v,S,F),-1<v&&(Qe($[v]),Array.prototype.splice.call($,v,1),$.length==0&&(delete f.g[y],f.h--)))):f&&(f=el(f))&&(y=f.g[y.toString()],f=-1,y&&(f=xn(y,v,S,F)),(v=-1<f?y[f]:null)&&ka(v))}function ka(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[yt])Li(y.i,f);else{var v=f.type,S=f.proxy;y.removeEventListener?y.removeEventListener(v,S,f.capture):y.detachEvent?y.detachEvent(Ds(v),S):y.addListener&&y.removeListener&&y.removeListener(S),(v=el(y))?(Li(v,f),v.h==0&&(v.src=null,y[br]=null)):Qe(f)}}}function Ds(f){return f in Ar?Ar[f]:Ar[f]="on"+f}function rd(f,y){if(f.da)f=!0;else{y=new xe(y,this);var v=f.listener,S=f.ha||f.src;f.fa&&ka(f),f=v.call(S,y)}return f}function el(f){return f=f[br],f instanceof rn?f:null}var fn="__closure_events_fn_"+(1e9*Math.random()>>>0);function tc(f){return typeof f=="function"?f:(f[fn]||(f[fn]=function(y){return f.handleEvent(y)}),f[fn])}function Rt(){me.call(this),this.i=new rn(this),this.M=this,this.F=null}x(Rt,me),Rt.prototype[yt]=!0,Rt.prototype.removeEventListener=function(f,y,v,S){Os(this,f,y,v,S)};function Pt(f,y){var v,S=f.F;if(S)for(v=[];S;S=S.F)v.push(S);if(f=f.M,S=y.type||y,typeof y=="string")y=new le(y,f);else if(y instanceof le)y.target=y.target||f;else{var F=y;y=new le(S,f),O(y,F)}if(F=!0,v)for(var $=v.length-1;0<=$;$--){var re=y.g=v[$];F=ji(re,S,!0,y)&&F}if(re=y.g=f,F=ji(re,S,!0,y)&&F,F=ji(re,S,!1,y)&&F,v)for($=0;$<v.length;$++)re=y.g=v[$],F=ji(re,S,!1,y)&&F}Rt.prototype.N=function(){if(Rt.aa.N.call(this),this.i){var f=this.i,y;for(y in f.g){for(var v=f.g[y],S=0;S<v.length;S++)Qe(v[S]);delete f.g[y],f.h--}}this.F=null},Rt.prototype.K=function(f,y,v,S){return this.i.add(String(f),y,!1,v,S)},Rt.prototype.L=function(f,y,v,S){return this.i.add(String(f),y,!0,v,S)};function ji(f,y,v,S){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();for(var F=!0,$=0;$<y.length;++$){var re=y[$];if(re&&!re.da&&re.capture==v){var Ue=re.listener,Ct=re.ha||re.src;re.fa&&Li(f.i,re),F=Ue.call(Ct,S)!==!1&&F}}return F&&!S.defaultPrevented}function nc(f,y,v){if(typeof f=="function")v&&(f=w(f,v));else if(f&&typeof f.handleEvent=="function")f=w(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(f,y||0)}function tl(f){f.g=nc(()=>{f.g=null,f.i&&(f.i=!1,tl(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class ad extends me{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:tl(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Pa(f){me.call(this),this.h=f,this.g={}}x(Pa,me);var wr=[];function Qt(f){Ee(f.g,function(y,v){this.g.hasOwnProperty(v)&&ka(y)},f),f.g={}}Pa.prototype.N=function(){Pa.aa.N.call(this),Qt(this)},Pa.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var nl=d.JSON.stringify,si=d.JSON.parse,an=class{stringify(f){return d.JSON.stringify(f,void 0)}parse(f){return d.JSON.parse(f,void 0)}};function il(){}il.prototype.h=null;function ic(f){return f.h||(f.h=f.i())}function rc(){}var oi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Sr(){le.call(this,"d")}x(Sr,le);function Qn(){le.call(this,"c")}x(Qn,le);var Nn={},Rr=null;function ks(){return Rr=Rr||new Rt}Nn.La="serverreachability";function rl(f){le.call(this,Nn.La,f)}x(rl,le);function Ir(f){const y=ks();Pt(y,new rl(y))}Nn.STAT_EVENT="statevent";function Ps(f,y){le.call(this,Nn.STAT_EVENT,f),this.stat=y}x(Ps,le);function dt(f){const y=ks();Pt(y,new Ps(y,f))}Nn.Ma="timingevent";function ac(f,y){le.call(this,Nn.Ma,f),this.size=y}x(ac,le);function Cr(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){f()},y)}function xr(){this.g=!0}xr.prototype.xa=function(){this.g=!1};function sc(f,y,v,S,F,$){f.info(function(){if(f.g)if($)for(var re="",Ue=$.split("&"),Ct=0;Ct<Ue.length;Ct++){var je=Ue[Ct].split("=");if(1<je.length){var Lt=je[0];je=je[1];var xt=Lt.split("_");re=2<=xt.length&&xt[1]=="type"?re+(Lt+"="+je+"&"):re+(Lt+"=redacted&")}}else re=null;else re=$;return"XMLHTTP REQ ("+S+") [attempt "+F+"]: "+y+`
`+v+`
`+re})}function oc(f,y,v,S,F,$,re){f.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+F+"]: "+y+`
`+v+`
`+$+" "+re})}function Nr(f,y,v,S){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+Mt(f,v)+(S?" "+S:"")})}function li(f,y){f.info(function(){return"TIMEOUT: "+y})}xr.prototype.info=function(){};function Mt(f,y){if(!f.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(f=0;f<v.length;f++)if(Array.isArray(v[f])){var S=v[f];if(!(2>S.length)){var F=S[1];if(Array.isArray(F)&&!(1>F.length)){var $=F[0];if($!="noop"&&$!="stop"&&$!="close")for(var re=1;re<F.length;re++)F[re]=""}}}}return nl(v)}catch{return y}}var It={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},zi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ma;function Ms(){}x(Ms,il),Ms.prototype.g=function(){return new XMLHttpRequest},Ms.prototype.i=function(){return{}},Ma=new Ms;function ui(f,y,v,S){this.j=f,this.i=y,this.l=v,this.R=S||1,this.U=new Pa(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new al}function al(){this.i=null,this.g="",this.h=!1}var Or={},Va={};function Xn(f,y,v){f.L=1,f.v=ja(ut(y)),f.m=v,f.P=!0,Fi(f,null)}function Fi(f,y){f.F=Date.now(),it(f),f.A=ut(f.v);var v=f.A,S=f.R;Array.isArray(S)||(S=[String(S)]),Hi(v.i,"t",S),f.C=0,v=f.j.J,f.h=new al,f.g=Tc(f.j,v?y:null,!f.m),0<f.O&&(f.M=new ad(w(f.Y,f,f.g),f.O)),y=f.U,v=f.g,S=f.ca;var F="readystatechange";Array.isArray(F)||(F&&(wr[0]=F.toString()),F=wr);for(var $=0;$<F.length;$++){var re=Ui(v,F[$],S||y.handleEvent,!1,y.h||y);if(!re)break;y.g[re.key]=re}y=f.H?I(f.H):{},f.m?(f.u||(f.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,y)):(f.u="GET",f.g.ea(f.A,f.u,null,y)),Ir(),sc(f.i,f.u,f.A,f.l,f.R,f.m)}ui.prototype.ca=function(f){f=f.target;const y=this.M;y&&Mn(f)==3?y.j():this.Y(f)},ui.prototype.Y=function(f){try{if(f==this.g)e:{const xt=Mn(this.g);var y=this.g.Ba();const Yi=this.g.Z();if(!(3>xt)&&(xt!=3||this.g&&(this.h.h||this.g.oa()||dc(this.g)))){this.J||xt!=4||y==7||(y==8||0>=Yi?Ir(3):Ir(2)),Vs(this);var v=this.g.Z();this.X=v;t:if(Dr(this)){var S=dc(this.g);f="";var F=S.length,$=Mn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){hn(this),_n(this);var re="";break t}this.h.i=new d.TextDecoder}for(y=0;y<F;y++)this.h.h=!0,f+=this.h.i.decode(S[y],{stream:!($&&y==F-1)});S.length=0,this.h.g+=f,this.C=0,re=this.h.g}else re=this.g.oa();if(this.o=v==200,oc(this.i,this.u,this.A,this.l,this.R,xt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var Ue,Ct=this.g;if((Ue=Ct.g?Ct.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!W(Ue)){var je=Ue;break t}}je=null}if(v=je)Nr(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,En(this,v);else{this.o=!1,this.s=3,dt(12),hn(this),_n(this);break e}}if(this.P){v=!0;let Bt;for(;!this.J&&this.C<re.length;)if(Bt=kr(this,re),Bt==Va){xt==4&&(this.s=4,dt(14),v=!1),Nr(this.i,this.l,null,"[Incomplete Response]");break}else if(Bt==Or){this.s=4,dt(15),Nr(this.i,this.l,re,"[Invalid Chunk]"),v=!1;break}else Nr(this.i,this.l,Bt,null),En(this,Bt);if(Dr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),xt!=4||re.length!=0||this.h.h||(this.s=1,dt(16),v=!1),this.o=this.o&&v,!v)Nr(this.i,this.l,re,"[Invalid Chunked Response]"),hn(this),_n(this);else if(0<re.length&&!this.W){this.W=!0;var Lt=this.j;Lt.g==this&&Lt.ba&&!Lt.M&&(Lt.j.info("Great, no buffering proxy detected. Bytes received: "+re.length),Ka(Lt),Lt.M=!0,dt(11))}}else Nr(this.i,this.l,re,null),En(this,re);xt==4&&hn(this),this.o&&!this.J&&(xt==4?vc(this.j,this):(this.o=!1,it(this)))}else fd(this.g),v==400&&0<re.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),hn(this),_n(this)}}}catch{}finally{}};function Dr(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function kr(f,y){var v=f.C,S=y.indexOf(`
`,v);return S==-1?Va:(v=Number(y.substring(v,S)),isNaN(v)?Or:(S+=1,S+v>y.length?Va:(y=y.slice(S,S+v),f.C=S+v,y)))}ui.prototype.cancel=function(){this.J=!0,hn(this)};function it(f){f.S=Date.now()+f.I,sl(f,f.I)}function sl(f,y){if(f.B!=null)throw Error("WatchDog timer not null");f.B=Cr(w(f.ba,f),y)}function Vs(f){f.B&&(d.clearTimeout(f.B),f.B=null)}ui.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(li(this.i,this.A),this.L!=2&&(Ir(),dt(17)),hn(this),this.s=2,_n(this)):sl(this,this.S-f)};function _n(f){f.j.G==0||f.J||vc(f.j,f)}function hn(f){Vs(f);var y=f.M;y&&typeof y.ma=="function"&&y.ma(),f.M=null,Qt(f.U),f.g&&(y=f.g,f.g=null,y.abort(),y.ma())}function En(f,y){try{var v=f.j;if(v.G!=0&&(v.g==f||Pr(v.h,f))){if(!f.K&&Pr(v.h,f)&&v.G==3){try{var S=v.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var F=S;if(F[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<f.F)Ks(v),Hs(v);else break e;yl(v),dt(18)}}else v.za=F[1],0<v.za-v.T&&37500>F[2]&&v.F&&v.v==0&&!v.C&&(v.C=Cr(w(v.Za,v),6e3));if(1>=lc(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else $i(v,11)}else if((f.K||v.g==f)&&Ks(v),!W(y))for(F=v.Da.g.parse(y),y=0;y<F.length;y++){let je=F[y];if(v.T=je[0],je=je[1],v.G==2)if(je[0]=="c"){v.K=je[1],v.ia=je[2];const Lt=je[3];Lt!=null&&(v.la=Lt,v.j.info("VER="+v.la));const xt=je[4];xt!=null&&(v.Aa=xt,v.j.info("SVER="+v.Aa));const Yi=je[5];Yi!=null&&typeof Yi=="number"&&0<Yi&&(S=1.5*Yi,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Bt=f.g;if(Bt){const gi=Bt.g?Bt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(gi){var $=S.h;$.g||gi.indexOf("spdy")==-1&&gi.indexOf("quic")==-1&&gi.indexOf("h2")==-1||($.j=$.l,$.g=new Set,$.h&&(Mr($,$.h),$.h=null))}if(S.D){const _l=Bt.g?Bt.g.getResponseHeader("X-HTTP-Session-Id"):null;_l&&(S.ya=_l,qe(S.I,S.D,_l))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-f.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var re=f;if(S.qa=Ec(S,S.J?S.ia:null,S.W),re.K){On(S.h,re);var Ue=re,Ct=S.L;Ct&&(Ue.I=Ct),Ue.B&&(Vs(Ue),it(Ue)),S.g=re}else gc(S);0<v.i.length&&Gs(v)}else je[0]!="stop"&&je[0]!="close"||$i(v,7);else v.G==3&&(je[0]=="stop"||je[0]=="close"?je[0]=="stop"?$i(v,7):pl(v):je[0]!="noop"&&v.l&&v.l.ta(je),v.v=0)}}Ir(4)}catch{}}var sd=class{constructor(f,y){this.g=f,this.map=y}};function ol(f){this.l=f||10,d.PerformanceNavigationTiming?(f=d.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ll(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function lc(f){return f.h?1:f.g?f.g.size:0}function Pr(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function Mr(f,y){f.g?f.g.add(y):f.h=y}function On(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}ol.prototype.cancel=function(){if(this.i=sn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function sn(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const v of f.g.values())y=y.concat(v.D);return y}return H(f.i)}function uc(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(p(f)){for(var y=[],v=f.length,S=0;S<v;S++)y.push(f[S]);return y}y=[],v=0;for(S in f)y[v++]=f[S];return y}function od(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(p(f)||typeof f=="string"){var y=[];f=f.length;for(var v=0;v<f;v++)y.push(v);return y}y=[],v=0;for(const S in f)y[v++]=S;return y}}}function La(f,y){if(f.forEach&&typeof f.forEach=="function")f.forEach(y,void 0);else if(p(f)||typeof f=="string")Array.prototype.forEach.call(f,y,void 0);else for(var v=od(f),S=uc(f),F=S.length,$=0;$<F;$++)y.call(void 0,S[$],v&&v[$],f)}var ul=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ls(f,y){if(f){f=f.split("&");for(var v=0;v<f.length;v++){var S=f[v].indexOf("="),F=null;if(0<=S){var $=f[v].substring(0,S);F=f[v].substring(S+1)}else $=f[v];y($,F?decodeURIComponent(F.replace(/\+/g," ")):"")}}}function Bi(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Bi){this.h=f.h,Vr(this,f.j),this.o=f.o,this.g=f.g,Ua(this,f.s),this.l=f.l;var y=f.i,v=new ci;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Us(this,v),this.m=f.m}else f&&(y=String(f).match(ul))?(this.h=!1,Vr(this,y[1]||"",!0),this.o=Lr(y[2]||""),this.g=Lr(y[3]||"",!0),Ua(this,y[4]),this.l=Lr(y[5]||"",!0),Us(this,y[6]||"",!0),this.m=Lr(y[7]||"")):(this.h=!1,this.i=new ci(null,this.h))}Bi.prototype.toString=function(){var f=[],y=this.j;y&&f.push(Dn(y,cl,!0),":");var v=this.g;return(v||y=="file")&&(f.push("//"),(y=this.o)&&f.push(Dn(y,cl,!0),"@"),f.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&f.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&f.push("/"),f.push(Dn(v,v.charAt(0)=="/"?fl:cc,!0))),(v=this.i.toString())&&f.push("?",v),(v=this.m)&&f.push("#",Dn(v,cd)),f.join("")};function ut(f){return new Bi(f)}function Vr(f,y,v){f.j=v?Lr(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function Ua(f,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);f.s=y}else f.s=null}function Us(f,y,v){y instanceof ci?(f.i=y,hl(f.i,f.h)):(v||(y=Dn(y,ud)),f.i=new ci(y,f.h))}function qe(f,y,v){f.i.set(y,v)}function ja(f){return qe(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function Lr(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Dn(f,y,v){return typeof f=="string"?(f=encodeURI(f).replace(y,ld),v&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function ld(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var cl=/[#\/\?@]/g,cc=/[#\?:]/g,fl=/[#\?]/g,ud=/[#\?@]/g,cd=/#/g;function ci(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function kn(f){f.g||(f.g=new Map,f.h=0,f.i&&Ls(f.i,function(y,v){f.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}n=ci.prototype,n.add=function(f,y){kn(this),this.i=null,f=Gi(this,f);var v=this.g.get(f);return v||this.g.set(f,v=[]),v.push(y),this.h+=1,this};function js(f,y){kn(f),y=Gi(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function qi(f,y){return kn(f),y=Gi(f,y),f.g.has(y)}n.forEach=function(f,y){kn(this),this.g.forEach(function(v,S){v.forEach(function(F){f.call(y,F,S,this)},this)},this)},n.na=function(){kn(this);const f=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let S=0;S<y.length;S++){const F=f[S];for(let $=0;$<F.length;$++)v.push(y[S])}return v},n.V=function(f){kn(this);let y=[];if(typeof f=="string")qi(this,f)&&(y=y.concat(this.g.get(Gi(this,f))));else{f=Array.from(this.g.values());for(let v=0;v<f.length;v++)y=y.concat(f[v])}return y},n.set=function(f,y){return kn(this),this.i=null,f=Gi(this,f),qi(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},n.get=function(f,y){return f?(f=this.V(f),0<f.length?String(f[0]):y):y};function Hi(f,y,v){js(f,y),0<v.length&&(f.i=null,f.g.set(Gi(f,y),H(v)),f.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var S=y[v];const $=encodeURIComponent(String(S)),re=this.V(S);for(S=0;S<re.length;S++){var F=$;re[S]!==""&&(F+="="+encodeURIComponent(String(re[S]))),f.push(F)}}return this.i=f.join("&")};function Gi(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function hl(f,y){y&&!f.j&&(kn(f),f.i=null,f.g.forEach(function(v,S){var F=S.toLowerCase();S!=F&&(js(this,S),Hi(this,F,v))},f)),f.j=y}function fc(f,y){const v=new xr;if(d.Image){const S=new Image;S.onload=N(Pn,v,"TestLoadImage: loaded",!0,y,S),S.onerror=N(Pn,v,"TestLoadImage: error",!1,y,S),S.onabort=N(Pn,v,"TestLoadImage: abort",!1,y,S),S.ontimeout=N(Pn,v,"TestLoadImage: timeout",!1,y,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=f}else y(!1)}function za(f,y){const v=new xr,S=new AbortController,F=setTimeout(()=>{S.abort(),Pn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:S.signal}).then($=>{clearTimeout(F),$.ok?Pn(v,"TestPingServer: ok",!0,y):Pn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(F),Pn(v,"TestPingServer: error",!1,y)})}function Pn(f,y,v,S,F){try{F&&(F.onload=null,F.onerror=null,F.onabort=null,F.ontimeout=null),S(v)}catch{}}function Fa(){this.g=new an}function fi(f,y,v){const S=v||"";try{La(f,function(F,$){let re=F;g(F)&&(re=nl(F)),y.push(S+$+"="+encodeURIComponent(re))})}catch(F){throw y.push(S+"type="+encodeURIComponent("_badmap")),F}}function Ur(f){this.l=f.Ub||null,this.j=f.eb||!1}x(Ur,il),Ur.prototype.g=function(){return new Ki(this.l,this.j)},Ur.prototype.i=function(f){return function(){return f}}({});function Ki(f,y){Rt.call(this),this.D=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}x(Ki,Rt),n=Ki.prototype,n.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=y,this.readyState=1,di(this)},n.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(y.body=f),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},n.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,di(this)),this.g&&(this.readyState=3,di(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;dl(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function dl(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}n.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?hi(this):di(this),this.readyState==3&&dl(this)}},n.Ra=function(f){this.g&&(this.response=this.responseText=f,hi(this))},n.Qa=function(f){this.g&&(this.response=f,hi(this))},n.ga=function(){this.g&&hi(this)};function hi(f){f.readyState=4,f.l=null,f.j=null,f.v=null,di(f)}n.setRequestHeader=function(f,y){this.u.append(f,y)},n.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,f.push(v[0]+": "+v[1]),v=y.next();return f.join(`\r
`)};function di(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Ki.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function ml(f){let y="";return Ee(f,function(v,S){y+=S,y+=":",y+=v,y+=`\r
`}),y}function Vt(f,y,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=ml(v),typeof f=="string"?v!=null&&encodeURIComponent(String(v)):qe(f,y,v))}function $e(f){Rt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}x($e,Rt);var zs=/^https?$/i,Ba=["POST","PUT"];n=$e.prototype,n.Ha=function(f){this.J=f},n.ea=function(f,y,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ma.g(),this.v=this.o?ic(this.o):ic(Ma),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch($){hc(this,$);return}if(f=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var F in S)v.set(F,S[F]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const $ of S.keys())v.set($,S.get($));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find($=>$.toLowerCase()=="content-type"),F=d.FormData&&f instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Ba,y,void 0))||S||F||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[$,re]of v)this.g.setRequestHeader($,re);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{qa(this),this.u=!0,this.g.send(f),this.u=!1}catch($){hc(this,$)}};function hc(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.m=5,Fs(f),mi(f)}function Fs(f){f.A||(f.A=!0,Pt(f,"complete"),Pt(f,"error"))}n.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,Pt(this,"complete"),Pt(this,"abort"),mi(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),mi(this,!0)),$e.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Bs(this):this.bb())},n.bb=function(){Bs(this)};function Bs(f){if(f.h&&typeof c<"u"&&(!f.v[1]||Mn(f)!=4||f.Z()!=2)){if(f.u&&Mn(f)==4)nc(f.Ea,0,f);else if(Pt(f,"readystatechange"),Mn(f)==4){f.h=!1;try{const re=f.Z();e:switch(re){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var S;if(S=re===0){var F=String(f.D).match(ul)[1]||null;!F&&d.self&&d.self.location&&(F=d.self.location.protocol.slice(0,-1)),S=!zs.test(F?F.toLowerCase():"")}v=S}if(v)Pt(f,"complete"),Pt(f,"success");else{f.m=6;try{var $=2<Mn(f)?f.g.statusText:""}catch{$=""}f.l=$+" ["+f.Z()+"]",Fs(f)}}finally{mi(f)}}}}function mi(f,y){if(f.g){qa(f);const v=f.g,S=f.v[0]?()=>{}:null;f.g=null,f.v=null,y||Pt(f,"ready");try{v.onreadystatechange=S}catch{}}}function qa(f){f.I&&(d.clearTimeout(f.I),f.I=null)}n.isActive=function(){return!!this.g};function Mn(f){return f.g?f.g.readyState:0}n.Z=function(){try{return 2<Mn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),si(y)}};function dc(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function fd(f){const y={};f=(f.g&&2<=Mn(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<f.length;S++){if(W(f[S]))continue;var v=L(f[S]);const F=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const $=y[F]||[];y[F]=$,$.push(v)}M(y,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ha(f,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[f]||y}function qs(f){this.Aa=0,this.i=[],this.j=new xr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ha("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ha("baseRetryDelayMs",5e3,f),this.cb=Ha("retryDelaySeedMs",1e4,f),this.Wa=Ha("forwardChannelMaxRetries",2,f),this.wa=Ha("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new ol(f&&f.concurrentRequestLimit),this.Da=new Fa,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=qs.prototype,n.la=8,n.G=1,n.connect=function(f,y,v,S){dt(0),this.W=f,this.H=y||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Ec(this,null,this.W),Gs(this)};function pl(f){if(mc(f),f.G==3){var y=f.U++,v=ut(f.I);if(qe(v,"SID",f.K),qe(v,"RID",y),qe(v,"TYPE","terminate"),Ga(f,v),y=new ui(f,f.j,y),y.L=2,y.v=ja(ut(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=y.v,v=!0),v||(y.g=Tc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),it(y)}_c(f)}function Hs(f){f.g&&(Ka(f),f.g.cancel(),f.g=null)}function mc(f){Hs(f),f.u&&(d.clearTimeout(f.u),f.u=null),Ks(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&d.clearTimeout(f.s),f.s=null)}function Gs(f){if(!ll(f.h)&&!f.s){f.s=!0;var y=f.Ga;Te||P(),ye||(Te(),ye=!0),Ke.add(y,f),f.B=0}}function hd(f,y){return lc(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=y.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=Cr(w(f.Ga,f,y),vl(f,f.B)),f.B++,!0)}n.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const F=new ui(this,this.j,f);let $=this.o;if(this.S&&($?($=I($),O($,this.S)):$=this.S),this.m!==null||this.O||(F.H=$,$=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=pc(this,F,y),v=ut(this.I),qe(v,"RID",f),qe(v,"CVER",22),this.D&&qe(v,"X-HTTP-Session-Id",this.D),Ga(this,v),$&&(this.O?y="headers="+encodeURIComponent(String(ml($)))+"&"+y:this.m&&Vt(v,this.m,$)),Mr(this.h,F),this.Ua&&qe(v,"TYPE","init"),this.P?(qe(v,"$req",y),qe(v,"SID","null"),F.T=!0,Xn(F,v,null)):Xn(F,v,y),this.G=2}}else this.G==3&&(f?gl(this,f):this.i.length==0||ll(this.h)||gl(this))};function gl(f,y){var v;y?v=y.l:v=f.U++;const S=ut(f.I);qe(S,"SID",f.K),qe(S,"RID",v),qe(S,"AID",f.T),Ga(f,S),f.m&&f.o&&Vt(S,f.m,f.o),v=new ui(f,f.j,v,f.B+1),f.m===null&&(v.H=f.o),y&&(f.i=y.D.concat(f.i)),y=pc(f,v,1e3),v.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Mr(f.h,v),Xn(v,S,y)}function Ga(f,y){f.H&&Ee(f.H,function(v,S){qe(y,S,v)}),f.l&&La({},function(v,S){qe(y,S,v)})}function pc(f,y,v){v=Math.min(f.i.length,v);var S=f.l?w(f.l.Na,f.l,f):null;e:{var F=f.i;let $=-1;for(;;){const re=["count="+v];$==-1?0<v?($=F[0].g,re.push("ofs="+$)):$=0:re.push("ofs="+$);let Ue=!0;for(let Ct=0;Ct<v;Ct++){let je=F[Ct].g;const Lt=F[Ct].map;if(je-=$,0>je)$=Math.max(0,F[Ct].g-100),Ue=!1;else try{fi(Lt,re,"req"+je+"_")}catch{S&&S(Lt)}}if(Ue){S=re.join("&");break e}}}return f=f.i.splice(0,v),y.D=f,S}function gc(f){if(!f.g&&!f.u){f.Y=1;var y=f.Fa;Te||P(),ye||(Te(),ye=!0),Ke.add(y,f),f.v=0}}function yl(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=Cr(w(f.Fa,f),vl(f,f.v)),f.v++,!0)}n.Fa=function(){if(this.u=null,yc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=Cr(w(this.ab,this),f)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,dt(10),Hs(this),yc(this))};function Ka(f){f.A!=null&&(d.clearTimeout(f.A),f.A=null)}function yc(f){f.g=new ui(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var y=ut(f.qa);qe(y,"RID","rpc"),qe(y,"SID",f.K),qe(y,"AID",f.T),qe(y,"CI",f.F?"0":"1"),!f.F&&f.ja&&qe(y,"TO",f.ja),qe(y,"TYPE","xmlhttp"),Ga(f,y),f.m&&f.o&&Vt(y,f.m,f.o),f.L&&(f.g.I=f.L);var v=f.g;f=f.ia,v.L=1,v.v=ja(ut(y)),v.m=null,v.P=!0,Fi(v,f)}n.Za=function(){this.C!=null&&(this.C=null,Hs(this),yl(this),dt(19))};function Ks(f){f.C!=null&&(d.clearTimeout(f.C),f.C=null)}function vc(f,y){var v=null;if(f.g==y){Ks(f),Ka(f),f.g=null;var S=2}else if(Pr(f.h,y))v=y.D,On(f.h,y),S=1;else return;if(f.G!=0){if(y.o)if(S==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var F=f.B;S=ks(),Pt(S,new ac(S,v)),Gs(f)}else gc(f);else if(F=y.s,F==3||F==0&&0<y.X||!(S==1&&hd(f,y)||S==2&&yl(f)))switch(v&&0<v.length&&(y=f.h,y.i=y.i.concat(v)),F){case 1:$i(f,5);break;case 4:$i(f,10);break;case 3:$i(f,6);break;default:$i(f,2)}}}function vl(f,y){let v=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(v*=2),v*y}function $i(f,y){if(f.j.info("Error code "+y),y==2){var v=w(f.fb,f),S=f.Xa;const F=!S;S=new Bi(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Vr(S,"https"),ja(S),F?fc(S.toString(),v):za(S.toString(),v)}else dt(2);f.G=0,f.l&&f.l.sa(y),_c(f),mc(f)}n.fb=function(f){f?(this.j.info("Successfully pinged google.com"),dt(2)):(this.j.info("Failed to ping google.com"),dt(1))};function _c(f){if(f.G=0,f.ka=[],f.l){const y=sn(f.h);(y.length!=0||f.i.length!=0)&&(k(f.ka,y),k(f.ka,f.i),f.h.i.length=0,H(f.i),f.i.length=0),f.l.ra()}}function Ec(f,y,v){var S=v instanceof Bi?ut(v):new Bi(v);if(S.g!="")y&&(S.g=y+"."+S.g),Ua(S,S.s);else{var F=d.location;S=F.protocol,y=y?y+"."+F.hostname:F.hostname,F=+F.port;var $=new Bi(null);S&&Vr($,S),y&&($.g=y),F&&Ua($,F),v&&($.l=v),S=$}return v=f.D,y=f.ya,v&&y&&qe(S,v,y),qe(S,"VER",f.la),Ga(f,S),S}function Tc(f,y,v){if(y&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Ca&&!f.pa?new $e(new Ur({eb:v})):new $e(f.pa),y.Ha(f.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function bc(){}n=bc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function $s(){}$s.prototype.g=function(f,y){return new on(f,y)};function on(f,y){Rt.call(this),this.g=new qs(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(f?f["X-WebChannel-Client-Profile"]=y.va:f={"X-WebChannel-Client-Profile":y.va}),this.g.S=f,(f=y&&y.Sb)&&!W(f)&&(this.g.m=f),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!W(y)&&(this.g.D=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new pi(this)}x(on,Rt),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){pl(this.g)},on.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var v={};v.__data__=f,f=v}else this.u&&(v={},v.__data__=nl(f),f=v);y.i.push(new sd(y.Ya++,f)),y.G==3&&Gs(y)},on.prototype.N=function(){this.g.l=null,delete this.j,pl(this.g),delete this.g,on.aa.N.call(this)};function Ac(f){Sr.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const v in y){f=v;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}x(Ac,Sr);function wc(){Qn.call(this),this.status=1}x(wc,Qn);function pi(f){this.g=f}x(pi,bc),pi.prototype.ua=function(){Pt(this.g,"a")},pi.prototype.ta=function(f){Pt(this.g,new Ac(f))},pi.prototype.sa=function(f){Pt(this.g,new wc)},pi.prototype.ra=function(){Pt(this.g,"b")},$s.prototype.createWebChannel=$s.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,aS=function(){return new $s},rS=function(){return ks()},iS=Nn,cg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},It.NO_ERROR=0,It.TIMEOUT=8,It.HTTP_ERROR=6,Bf=It,zi.COMPLETE="complete",nS=zi,rc.EventType=oi,oi.OPEN="a",oi.CLOSE="b",oi.ERROR="c",oi.MESSAGE="d",Rt.prototype.listen=Rt.prototype.K,hu=rc,$e.prototype.listenOnce=$e.prototype.L,$e.prototype.getLastError=$e.prototype.Ka,$e.prototype.getLastErrorCode=$e.prototype.Ba,$e.prototype.getStatus=$e.prototype.Z,$e.prototype.getResponseJson=$e.prototype.Oa,$e.prototype.getResponseText=$e.prototype.oa,$e.prototype.send=$e.prototype.ea,$e.prototype.setWithCredentials=$e.prototype.Ha,tS=$e}).apply(typeof If<"u"?If:typeof self<"u"?self:typeof window<"u"?window:{});const DT="@firebase/firestore",kT="4.7.8";/**
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
 */class Jt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Jt.UNAUTHENTICATED=new Jt(null),Jt.GOOGLE_CREDENTIALS=new Jt("google-credentials-uid"),Jt.FIRST_PARTY=new Jt("first-party-uid"),Jt.MOCK_USER=new Jt("mock-user");/**
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
 */let Yo="11.3.1";/**
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
 */const Es=new Oh("@firebase/firestore");function To(){return Es.logLevel}function ce(n,...e){if(Es.logLevel<=Pe.DEBUG){const t=e.map(uy);Es.debug(`Firestore (${Yo}): ${n}`,...t)}}function vr(n,...e){if(Es.logLevel<=Pe.ERROR){const t=e.map(uy);Es.error(`Firestore (${Yo}): ${n}`,...t)}}function Vo(n,...e){if(Es.logLevel<=Pe.WARN){const t=e.map(uy);Es.warn(`Firestore (${Yo}): ${n}`,...t)}}function uy(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function Ae(n="Unexpected state"){const e=`FIRESTORE (${Yo}) INTERNAL ASSERTION FAILED: `+n;throw vr(e),new Error(e)}function Ye(n,e){n||Ae()}function Re(n,e){return n}/**
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
 */const ee={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class fe extends Yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class ya{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class sS{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Jt.UNAUTHENTICATED))}shutdown(){}}class CM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class xM{constructor(e){this.t=e,this.currentUser=Jt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Ye(this.o===void 0);let a=this.i;const s=p=>this.i!==a?(a=this.i,t(p)):Promise.resolve();let l=new ya;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new ya,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const p=l;e.enqueueRetryable(async()=>{await p.promise,await s(this.currentUser)})},d=p=>{ce("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(p=>d(p)),setTimeout(()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?d(p):(ce("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new ya)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(a=>this.i!==e?(ce("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):a?(Ye(typeof a.accessToken=="string"),new sS(a.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ye(e===null||typeof e=="string"),new Jt(e)}}class NM{constructor(e,t,a){this.l=e,this.h=t,this.P=a,this.type="FirstParty",this.user=Jt.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class OM{constructor(e,t,a){this.l=e,this.h=t,this.P=a}getToken(){return Promise.resolve(new NM(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(Jt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class PT{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class DM{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,Kn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Ye(this.o===void 0);const a=l=>{l.error!=null&&ce("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,ce("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>a(l))};const s=l=>{ce("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?s(l):ce("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new PT(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Ye(typeof t.token=="string"),this.R=t.token,new PT(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function kM(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let a=0;a<n;a++)t[a]=Math.floor(256*Math.random());return t}/**
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
 */class oS{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let a="";for(;a.length<20;){const s=kM(40);for(let l=0;l<s.length;++l)a.length<20&&s[l]<t&&(a+=e.charAt(s[l]%62))}return a}}function Le(n,e){return n<e?-1:n>e?1:0}function Lo(n,e,t){return n.length===e.length&&n.every((a,s)=>t(a,e[s]))}/**
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
 */const MT=-62135596800,VT=1e6;class Dt{static now(){return Dt.fromMillis(Date.now())}static fromDate(e){return Dt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),a=Math.floor((e-1e3*t)*VT);return new Dt(t,a)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new fe(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new fe(ee.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<MT)throw new fe(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new fe(ee.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/VT}_compareTo(e){return this.seconds===e.seconds?Le(this.nanoseconds,e.nanoseconds):Le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-MT;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class we{static fromTimestamp(e){return new we(e)}static min(){return new we(new Dt(0,0))}static max(){return new we(new Dt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const LT="__name__";class bi{constructor(e,t,a){t===void 0?t=0:t>e.length&&Ae(),a===void 0?a=e.length-t:a>e.length-t&&Ae(),this.segments=e,this.offset=t,this.len=a}get length(){return this.len}isEqual(e){return bi.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof bi?e.forEach(a=>{t.push(a)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,a=this.limit();t<a;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const a=Math.min(e.length,t.length);for(let s=0;s<a;s++){const l=bi.compareSegments(e.get(s),t.get(s));if(l!==0)return l}return Math.sign(e.length-t.length)}static compareSegments(e,t){const a=bi.isNumericId(e),s=bi.isNumericId(t);return a&&!s?-1:!a&&s?1:a&&s?bi.extractNumericId(e).compare(bi.extractNumericId(t)):e<t?-1:e>t?1:0}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return ga.fromString(e.substring(4,e.length-2))}}class tt extends bi{construct(e,t,a){return new tt(e,t,a)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const a of e){if(a.indexOf("//")>=0)throw new fe(ee.INVALID_ARGUMENT,`Invalid segment (${a}). Paths must not contain // in them.`);t.push(...a.split("/").filter(s=>s.length>0))}return new tt(t)}static emptyPath(){return new tt([])}}const PM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends bi{construct(e,t,a){return new $t(e,t,a)}static isValidIdentifier(e){return PM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===LT}static keyField(){return new $t([LT])}static fromServerFormat(e){const t=[];let a="",s=0;const l=()=>{if(a.length===0)throw new fe(ee.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(a),a=""};let c=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new fe(ee.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[s+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new fe(ee.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);a+=p,s+=2}else d==="`"?(c=!c,s++):d!=="."||c?(a+=d,s++):(l(),s++)}if(l(),c)throw new fe(ee.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(t)}static emptyPath(){return new $t([])}}/**
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
 */class ve{constructor(e){this.path=e}static fromPath(e){return new ve(tt.fromString(e))}static fromName(e){return new ve(tt.fromString(e).popFirst(5))}static empty(){return new ve(tt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&tt.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return tt.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ve(new tt(e.slice()))}}/**
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
 */const Ou=-1;function MM(n,e){const t=n.toTimestamp().seconds,a=n.toTimestamp().nanoseconds+1,s=we.fromTimestamp(a===1e9?new Dt(t+1,0):new Dt(t,a));return new Aa(s,ve.empty(),e)}function VM(n){return new Aa(n.readTime,n.key,Ou)}class Aa{constructor(e,t,a){this.readTime=e,this.documentKey=t,this.largestBatchId=a}static min(){return new Aa(we.min(),ve.empty(),Ou)}static max(){return new Aa(we.max(),ve.empty(),Ou)}}function LM(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ve.comparator(n.documentKey,e.documentKey),t!==0?t:Le(n.largestBatchId,e.largestBatchId))}/**
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
 */const UM="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jM{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Qo(n){if(n.code!==ee.FAILED_PRECONDITION||n.message!==UM)throw n;ce("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class J{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Ae(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new J((a,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(a,s)},this.catchCallback=l=>{this.wrapFailure(t,l).next(a,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof J?t:J.resolve(t)}catch(t){return J.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):J.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):J.reject(t)}static resolve(e){return new J((t,a)=>{t(e)})}static reject(e){return new J((t,a)=>{a(e)})}static waitFor(e){return new J((t,a)=>{let s=0,l=0,c=!1;e.forEach(d=>{++s,d.next(()=>{++l,c&&l===s&&t()},p=>a(p))}),c=!0,l===s&&t()})}static or(e){let t=J.resolve(!1);for(const a of e)t=t.next(s=>s?J.resolve(s):a());return t}static forEach(e,t){const a=[];return e.forEach((s,l)=>{a.push(t.call(this,s,l))}),this.waitFor(a)}static mapArray(e,t){return new J((a,s)=>{const l=e.length,c=new Array(l);let d=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next(_=>{c[g]=_,++d,d===l&&a(c)},_=>s(_))}})}static doWhile(e,t){return new J((a,s)=>{const l=()=>{e()===!0?t().next(()=>{l()},s):a()};l()})}}function zM(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Xo(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Uh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=a=>this.oe(a),this._e=a=>t.writeSequenceNumber(a))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Uh.ae=-1;/**
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
 */const cy=-1;function jh(n){return n==null}function oh(n){return n===0&&1/n==-1/0}function FM(n){return typeof n=="number"&&Number.isInteger(n)&&!oh(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const lS="";function BM(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=UT(e)),e=qM(n.get(t),e);return UT(e)}function qM(n,e){let t=e;const a=n.length;for(let s=0;s<a;s++){const l=n.charAt(s);switch(l){case"\0":t+="";break;case lS:t+="";break;default:t+=l}}return t}function UT(n){return n+lS+""}/**
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
 */function jT(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Oa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function uS(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ot{constructor(e,t){this.comparator=e,this.root=t||Kt.EMPTY}insert(e,t){return new ot(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Kt.BLACK,null,null))}remove(e){return new ot(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Kt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const a=this.comparator(e,t.key);if(a===0)return t.value;a<0?t=t.left:a>0&&(t=t.right)}return null}indexOf(e){let t=0,a=this.root;for(;!a.isEmpty();){const s=this.comparator(e,a.key);if(s===0)return t+a.left.size;s<0?a=a.left:(t+=a.left.size+1,a=a.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,a)=>(e(t,a),!1))}toString(){const e=[];return this.inorderTraversal((t,a)=>(e.push(`${t}:${a}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cf(this.root,e,this.comparator,!0)}}class Cf{constructor(e,t,a,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?a(e.key,t):1,t&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Kt{constructor(e,t,a,s,l){this.key=e,this.value=t,this.color=a??Kt.RED,this.left=s??Kt.EMPTY,this.right=l??Kt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,a,s,l){return new Kt(e??this.key,t??this.value,a??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,a){let s=this;const l=a(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,t,a),null):l===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,a)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Kt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let a,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Kt.EMPTY;a=s.right.min(),s=s.copy(a.key,a.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Kt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Kt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Ae();const e=this.left.check();if(e!==this.right.check())throw Ae();return e+(this.isRed()?0:1)}}Kt.EMPTY=null,Kt.RED=!0,Kt.BLACK=!1;Kt.EMPTY=new class{constructor(){this.size=0}get key(){throw Ae()}get value(){throw Ae()}get color(){throw Ae()}get left(){throw Ae()}get right(){throw Ae()}copy(e,t,a,s,l){return this}insert(e,t,a){return new Kt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class kt{constructor(e){this.comparator=e,this.data=new ot(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,a)=>(e(t),!1))}forEachInRange(e,t){const a=this.data.getIteratorFrom(e[0]);for(;a.hasNext();){const s=a.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let a;for(a=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();a.hasNext();)if(!e(a.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zT(this.data.getIterator())}getIteratorFrom(e){return new zT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(a=>{t=t.add(a)}),t}isEqual(e){if(!(e instanceof kt)||this.size!==e.size)return!1;const t=this.data.getIterator(),a=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=a.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new kt(this.comparator);return t.data=e,t}}class zT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new Rn([])}unionWith(e){let t=new kt($t.comparator);for(const a of this.fields)t=t.add(a);for(const a of e)t=t.add(a);return new Rn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Lo(this.fields,e.fields,(t,a)=>t.isEqual(a))}}/**
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
 */class cS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Yt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new cS("Invalid base64 string: "+l):l}}(e);return new Yt(t)}static fromUint8Array(e){const t=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(e);return new Yt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const a=new Uint8Array(t.length);for(let s=0;s<t.length;s++)a[s]=t.charCodeAt(s);return a}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Yt.EMPTY_BYTE_STRING=new Yt("");const HM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function wa(n){if(Ye(!!n),typeof n=="string"){let e=0;const t=HM.exec(n);if(Ye(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const a=new Date(n);return{seconds:Math.floor(a.getTime()/1e3),nanos:e}}return{seconds:pt(n.seconds),nanos:pt(n.nanos)}}function pt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Sa(n){return typeof n=="string"?Yt.fromBase64String(n):Yt.fromUint8Array(n)}/**
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
 */const fS="server_timestamp",hS="__type__",dS="__previous_value__",mS="__local_write_time__";function fy(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[hS])===null||t===void 0?void 0:t.stringValue)===fS}function zh(n){const e=n.mapValue.fields[dS];return fy(e)?zh(e):e}function Du(n){const e=wa(n.mapValue.fields[mS].timestampValue);return new Dt(e.seconds,e.nanos)}/**
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
 */class GM{constructor(e,t,a,s,l,c,d,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=a,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=p,this.useFetchStreams=g}}const lh="(default)";class ku{constructor(e,t){this.projectId=e,this.database=t||lh}static empty(){return new ku("","")}get isDefaultDatabase(){return this.database===lh}isEqual(e){return e instanceof ku&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const pS="__type__",KM="__max__",xf={mapValue:{}},gS="__vector__",uh="value";function Ra(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?fy(n)?4:YM(n)?9007199254740991:$M(n)?10:11:Ae()}function Di(n,e){if(n===e)return!0;const t=Ra(n);if(t!==Ra(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Du(n).isEqual(Du(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=wa(s.timestampValue),d=wa(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,l){return Sa(s.bytesValue).isEqual(Sa(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,l){return pt(s.geoPointValue.latitude)===pt(l.geoPointValue.latitude)&&pt(s.geoPointValue.longitude)===pt(l.geoPointValue.longitude)}(n,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return pt(s.integerValue)===pt(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=pt(s.doubleValue),d=pt(l.doubleValue);return c===d?oh(c)===oh(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Lo(n.arrayValue.values||[],e.arrayValue.values||[],Di);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},d=l.mapValue.fields||{};if(jT(c)!==jT(d))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(d[p]===void 0||!Di(c[p],d[p])))return!1;return!0}(n,e);default:return Ae()}}function Pu(n,e){return(n.values||[]).find(t=>Di(t,e))!==void 0}function Uo(n,e){if(n===e)return 0;const t=Ra(n),a=Ra(e);if(t!==a)return Le(t,a);switch(t){case 0:case 9007199254740991:return 0;case 1:return Le(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=pt(l.integerValue||l.doubleValue),p=pt(c.integerValue||c.doubleValue);return d<p?-1:d>p?1:d===p?0:isNaN(d)?isNaN(p)?0:-1:1}(n,e);case 3:return FT(n.timestampValue,e.timestampValue);case 4:return FT(Du(n),Du(e));case 5:return Le(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Sa(l),p=Sa(c);return d.compareTo(p)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),p=c.split("/");for(let g=0;g<d.length&&g<p.length;g++){const _=Le(d[g],p[g]);if(_!==0)return _}return Le(d.length,p.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Le(pt(l.latitude),pt(c.latitude));return d!==0?d:Le(pt(l.longitude),pt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return BT(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,p,g,_;const b=l.fields||{},w=c.fields||{},N=(d=b[uh])===null||d===void 0?void 0:d.arrayValue,x=(p=w[uh])===null||p===void 0?void 0:p.arrayValue,H=Le(((g=N==null?void 0:N.values)===null||g===void 0?void 0:g.length)||0,((_=x==null?void 0:x.values)===null||_===void 0?void 0:_.length)||0);return H!==0?H:BT(N,x)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===xf.mapValue&&c===xf.mapValue)return 0;if(l===xf.mapValue)return 1;if(c===xf.mapValue)return-1;const d=l.fields||{},p=Object.keys(d),g=c.fields||{},_=Object.keys(g);p.sort(),_.sort();for(let b=0;b<p.length&&b<_.length;++b){const w=Le(p[b],_[b]);if(w!==0)return w;const N=Uo(d[p[b]],g[_[b]]);if(N!==0)return N}return Le(p.length,_.length)}(n.mapValue,e.mapValue);default:throw Ae()}}function FT(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Le(n,e);const t=wa(n),a=wa(e),s=Le(t.seconds,a.seconds);return s!==0?s:Le(t.nanos,a.nanos)}function BT(n,e){const t=n.values||[],a=e.values||[];for(let s=0;s<t.length&&s<a.length;++s){const l=Uo(t[s],a[s]);if(l)return l}return Le(t.length,a.length)}function jo(n){return fg(n)}function fg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const a=wa(t);return`time(${a.seconds},${a.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Sa(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return ve.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let a="[",s=!0;for(const l of t.values||[])s?s=!1:a+=",",a+=fg(l);return a+"]"}(n.arrayValue):"mapValue"in n?function(t){const a=Object.keys(t.fields||{}).sort();let s="{",l=!0;for(const c of a)l?l=!1:s+=",",s+=`${c}:${fg(t.fields[c])}`;return s+"}"}(n.mapValue):Ae()}function qf(n){switch(Ra(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=zh(n);return e?16+qf(e):16;case 5:return 2*n.stringValue.length;case 6:return Sa(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(a){return(a.values||[]).reduce((s,l)=>s+qf(l),0)}(n.arrayValue);case 10:case 11:return function(a){let s=0;return Oa(a.fields,(l,c)=>{s+=l.length+qf(c)}),s}(n.mapValue);default:throw Ae()}}function qT(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function hg(n){return!!n&&"integerValue"in n}function hy(n){return!!n&&"arrayValue"in n}function HT(n){return!!n&&"nullValue"in n}function GT(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hf(n){return!!n&&"mapValue"in n}function $M(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[pS])===null||t===void 0?void 0:t.stringValue)===gS}function Eu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Oa(n.mapValue.fields,(t,a)=>e.mapValue.fields[t]=Eu(a)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Eu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function YM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===KM}/**
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
 */class pn{constructor(e){this.value=e}static empty(){return new pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let a=0;a<e.length-1;++a)if(t=(t.mapValue.fields||{})[e.get(a)],!Hf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Eu(t)}setAll(e){let t=$t.emptyPath(),a={},s=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const p=this.getFieldsMap(t);this.applyChanges(p,a,s),a={},s=[],t=d.popLast()}c?a[d.lastSegment()]=Eu(c):s.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,a,s)}delete(e){const t=this.field(e.popLast());Hf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Di(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let a=0;a<e.length;++a){let s=t.mapValue.fields[e.get(a)];Hf(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(a)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,a){Oa(t,(s,l)=>e[s]=l);for(const s of a)delete e[s]}clone(){return new pn(Eu(this.value))}}function yS(n){const e=[];return Oa(n.fields,(t,a)=>{const s=new $t([t]);if(Hf(a)){const l=yS(a.mapValue).fields;if(l.length===0)e.push(s);else for(const c of l)e.push(s.child(c))}else e.push(s)}),new Rn(e)}/**
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
 */class en{constructor(e,t,a,s,l,c,d){this.key=e,this.documentType=t,this.version=a,this.readTime=s,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new en(e,0,we.min(),we.min(),we.min(),pn.empty(),0)}static newFoundDocument(e,t,a,s){return new en(e,1,t,we.min(),a,s,0)}static newNoDocument(e,t){return new en(e,2,t,we.min(),we.min(),pn.empty(),0)}static newUnknownDocument(e,t){return new en(e,3,t,we.min(),we.min(),pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(we.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=we.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof en&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new en(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ch{constructor(e,t){this.position=e,this.inclusive=t}}function KT(n,e,t){let a=0;for(let s=0;s<n.position.length;s++){const l=e[s],c=n.position[s];if(l.field.isKeyField()?a=ve.comparator(ve.fromName(c.referenceValue),t.key):a=Uo(c,t.data.field(l.field)),l.dir==="desc"&&(a*=-1),a!==0)break}return a}function $T(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Di(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class fh{constructor(e,t="asc"){this.field=e,this.dir=t}}function QM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class vS{}class bt extends vS{constructor(e,t,a){super(),this.field=e,this.op=t,this.value=a}static create(e,t,a){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,a):new WM(e,t,a):t==="array-contains"?new e4(e,a):t==="in"?new t4(e,a):t==="not-in"?new n4(e,a):t==="array-contains-any"?new i4(e,a):new bt(e,t,a)}static createKeyFieldInFilter(e,t,a){return t==="in"?new ZM(e,a):new JM(e,a)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Uo(t,this.value)):t!==null&&Ra(this.value)===Ra(t)&&this.matchesComparison(Uo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Ae()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ai extends vS{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new ai(e,t)}matches(e){return _S(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function _S(n){return n.op==="and"}function ES(n){return XM(n)&&_S(n)}function XM(n){for(const e of n.filters)if(e instanceof ai)return!1;return!0}function dg(n){if(n instanceof bt)return n.field.canonicalString()+n.op.toString()+jo(n.value);if(ES(n))return n.filters.map(e=>dg(e)).join(",");{const e=n.filters.map(t=>dg(t)).join(",");return`${n.op}(${e})`}}function TS(n,e){return n instanceof bt?function(a,s){return s instanceof bt&&a.op===s.op&&a.field.isEqual(s.field)&&Di(a.value,s.value)}(n,e):n instanceof ai?function(a,s){return s instanceof ai&&a.op===s.op&&a.filters.length===s.filters.length?a.filters.reduce((l,c,d)=>l&&TS(c,s.filters[d]),!0):!1}(n,e):void Ae()}function bS(n){return n instanceof bt?function(t){return`${t.field.canonicalString()} ${t.op} ${jo(t.value)}`}(n):n instanceof ai?function(t){return t.op.toString()+" {"+t.getFilters().map(bS).join(" ,")+"}"}(n):"Filter"}class WM extends bt{constructor(e,t,a){super(e,t,a),this.key=ve.fromName(a.referenceValue)}matches(e){const t=ve.comparator(e.key,this.key);return this.matchesComparison(t)}}class ZM extends bt{constructor(e,t){super(e,"in",t),this.keys=AS("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class JM extends bt{constructor(e,t){super(e,"not-in",t),this.keys=AS("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function AS(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(a=>ve.fromName(a.referenceValue))}class e4 extends bt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return hy(t)&&Pu(t.arrayValue,this.value)}}class t4 extends bt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Pu(this.value.arrayValue,t)}}class n4 extends bt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Pu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Pu(this.value.arrayValue,t)}}class i4 extends bt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!hy(t)||!t.arrayValue.values)&&t.arrayValue.values.some(a=>Pu(this.value.arrayValue,a))}}/**
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
 */class r4{constructor(e,t=null,a=[],s=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=a,this.filters=s,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function YT(n,e=null,t=[],a=[],s=null,l=null,c=null){return new r4(n,e,t,a,s,l,c)}function dy(n){const e=Re(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(a=>dg(a)).join(","),t+="|ob:",t+=e.orderBy.map(a=>function(l){return l.field.canonicalString()+l.dir}(a)).join(","),jh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(a=>jo(a)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(a=>jo(a)).join(",")),e.le=t}return e.le}function my(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!QM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!TS(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!$T(n.startAt,e.startAt)&&$T(n.endAt,e.endAt)}function mg(n){return ve.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class $u{constructor(e,t=null,a=[],s=[],l=null,c="F",d=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=a,this.filters=s,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=p,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function a4(n,e,t,a,s,l,c,d){return new $u(n,e,t,a,s,l,c,d)}function Fh(n){return new $u(n)}function QT(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function wS(n){return n.collectionGroup!==null}function Tu(n){const e=Re(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new kt($t.comparator);return c.filters.forEach(p=>{p.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new fh(l,a))}),t.has($t.keyField().canonicalString())||e.he.push(new fh($t.keyField(),a))}return e.he}function Ci(n){const e=Re(n);return e.Pe||(e.Pe=s4(e,Tu(n))),e.Pe}function s4(n,e){if(n.limitType==="F")return YT(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new fh(s.field,l)});const t=n.endAt?new ch(n.endAt.position,n.endAt.inclusive):null,a=n.startAt?new ch(n.startAt.position,n.startAt.inclusive):null;return YT(n.path,n.collectionGroup,e,n.filters,n.limit,t,a)}}function pg(n,e){const t=n.filters.concat([e]);return new $u(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function gg(n,e,t){return new $u(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Bh(n,e){return my(Ci(n),Ci(e))&&n.limitType===e.limitType}function SS(n){return`${dy(Ci(n))}|lt:${n.limitType}`}function bo(n){return`Query(target=${function(t){let a=t.path.canonicalString();return t.collectionGroup!==null&&(a+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(a+=`, filters: [${t.filters.map(s=>bS(s)).join(", ")}]`),jh(t.limit)||(a+=", limit: "+t.limit),t.orderBy.length>0&&(a+=`, orderBy: [${t.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),t.startAt&&(a+=", startAt: ",a+=t.startAt.inclusive?"b:":"a:",a+=t.startAt.position.map(s=>jo(s)).join(",")),t.endAt&&(a+=", endAt: ",a+=t.endAt.inclusive?"a:":"b:",a+=t.endAt.position.map(s=>jo(s)).join(",")),`Target(${a})`}(Ci(n))}; limitType=${n.limitType})`}function qh(n,e){return e.isFoundDocument()&&function(a,s){const l=s.key.path;return a.collectionGroup!==null?s.key.hasCollectionId(a.collectionGroup)&&a.path.isPrefixOf(l):ve.isDocumentKey(a.path)?a.path.isEqual(l):a.path.isImmediateParentOf(l)}(n,e)&&function(a,s){for(const l of Tu(a))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(n,e)&&function(a,s){for(const l of a.filters)if(!l.matches(s))return!1;return!0}(n,e)&&function(a,s){return!(a.startAt&&!function(c,d,p){const g=KT(c,d,p);return c.inclusive?g<=0:g<0}(a.startAt,Tu(a),s)||a.endAt&&!function(c,d,p){const g=KT(c,d,p);return c.inclusive?g>=0:g>0}(a.endAt,Tu(a),s))}(n,e)}function o4(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function RS(n){return(e,t)=>{let a=!1;for(const s of Tu(n)){const l=l4(s,e,t);if(l!==0)return l;a=a||s.field.isKeyField()}return 0}}function l4(n,e,t){const a=n.field.isKeyField()?ve.comparator(e.key,t.key):function(l,c,d){const p=c.data.field(l),g=d.data.field(l);return p!==null&&g!==null?Uo(p,g):Ae()}(n.field,e,t);switch(n.dir){case"asc":return a;case"desc":return-1*a;default:return Ae()}}/**
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
 */class Cs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a!==void 0){for(const[s,l]of a)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const a=this.mapKeyFn(e),s=this.inner[a];if(s===void 0)return this.inner[a]=[[e,t]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),a=this.inner[t];if(a===void 0)return!1;for(let s=0;s<a.length;s++)if(this.equalsFn(a[s][0],e))return a.length===1?delete this.inner[t]:a.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Oa(this.inner,(t,a)=>{for(const[s,l]of a)e(s,l)})}isEmpty(){return uS(this.inner)}size(){return this.innerSize}}/**
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
 */const u4=new ot(ve.comparator);function _r(){return u4}const IS=new ot(ve.comparator);function du(...n){let e=IS;for(const t of n)e=e.insert(t.key,t);return e}function CS(n){let e=IS;return n.forEach((t,a)=>e=e.insert(t,a.overlayedDocument)),e}function ms(){return bu()}function xS(){return bu()}function bu(){return new Cs(n=>n.toString(),(n,e)=>n.isEqual(e))}const c4=new ot(ve.comparator),f4=new kt(ve.comparator);function Me(...n){let e=f4;for(const t of n)e=e.add(t);return e}const h4=new kt(Le);function d4(){return h4}/**
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
 */function py(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:oh(e)?"-0":e}}function NS(n){return{integerValue:""+n}}function m4(n,e){return FM(e)?NS(e):py(n,e)}/**
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
 */class Hh{constructor(){this._=void 0}}function p4(n,e,t){return n instanceof hh?function(s,l){const c={fields:{[hS]:{stringValue:fS},[mS]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&fy(l)&&(l=zh(l)),l&&(c.fields[dS]=l),{mapValue:c}}(t,e):n instanceof Mu?DS(n,e):n instanceof Vu?kS(n,e):function(s,l){const c=OS(s,l),d=XT(c)+XT(s.Ie);return hg(c)&&hg(s.Ie)?NS(d):py(s.serializer,d)}(n,e)}function g4(n,e,t){return n instanceof Mu?DS(n,e):n instanceof Vu?kS(n,e):t}function OS(n,e){return n instanceof dh?function(a){return hg(a)||function(l){return!!l&&"doubleValue"in l}(a)}(e)?e:{integerValue:0}:null}class hh extends Hh{}class Mu extends Hh{constructor(e){super(),this.elements=e}}function DS(n,e){const t=PS(e);for(const a of n.elements)t.some(s=>Di(s,a))||t.push(a);return{arrayValue:{values:t}}}class Vu extends Hh{constructor(e){super(),this.elements=e}}function kS(n,e){let t=PS(e);for(const a of n.elements)t=t.filter(s=>!Di(s,a));return{arrayValue:{values:t}}}class dh extends Hh{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function XT(n){return pt(n.integerValue||n.doubleValue)}function PS(n){return hy(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function y4(n,e){return n.field.isEqual(e.field)&&function(a,s){return a instanceof Mu&&s instanceof Mu||a instanceof Vu&&s instanceof Vu?Lo(a.elements,s.elements,Di):a instanceof dh&&s instanceof dh?Di(a.Ie,s.Ie):a instanceof hh&&s instanceof hh}(n.transform,e.transform)}class v4{constructor(e,t){this.version=e,this.transformResults=t}}class ni{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ni}static exists(e){return new ni(void 0,e)}static updateTime(e){return new ni(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Gf(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Gh{}function MS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new gy(n.key,ni.none()):new Yu(n.key,n.data,ni.none());{const t=n.data,a=pn.empty();let s=new kt($t.comparator);for(let l of e.fields)if(!s.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?a.delete(l):a.set(l,c),s=s.add(l)}return new Da(n.key,a,new Rn(s.toArray()),ni.none())}}function _4(n,e,t){n instanceof Yu?function(s,l,c){const d=s.value.clone(),p=ZT(s.fieldTransforms,l,c.transformResults);d.setAll(p),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Da?function(s,l,c){if(!Gf(s.precondition,l))return void l.convertToUnknownDocument(c.version);const d=ZT(s.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(VS(s)),p.setAll(d),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()}(n,e,t):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function Au(n,e,t,a){return n instanceof Yu?function(l,c,d,p){if(!Gf(l.precondition,c))return d;const g=l.value.clone(),_=JT(l.fieldTransforms,p,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,a):n instanceof Da?function(l,c,d,p){if(!Gf(l.precondition,c))return d;const g=JT(l.fieldTransforms,p,c),_=c.data;return _.setAll(VS(l)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(b=>b.field))}(n,e,t,a):function(l,c,d){return Gf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function E4(n,e){let t=null;for(const a of n.fieldTransforms){const s=e.data.field(a.field),l=OS(a.transform,s||null);l!=null&&(t===null&&(t=pn.empty()),t.set(a.field,l))}return t||null}function WT(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(a,s){return a===void 0&&s===void 0||!(!a||!s)&&Lo(a,s,(l,c)=>y4(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Yu extends Gh{constructor(e,t,a,s=[]){super(),this.key=e,this.value=t,this.precondition=a,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Da extends Gh{constructor(e,t,a,s,l=[]){super(),this.key=e,this.data=t,this.fieldMask=a,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function VS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const a=n.data.field(t);e.set(t,a)}}),e}function ZT(n,e,t){const a=new Map;Ye(n.length===t.length);for(let s=0;s<t.length;s++){const l=n[s],c=l.transform,d=e.data.field(l.field);a.set(l.field,g4(c,d,t[s]))}return a}function JT(n,e,t){const a=new Map;for(const s of n){const l=s.transform,c=t.data.field(s.field);a.set(s.field,p4(l,c,e))}return a}class gy extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T4 extends Gh{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class b4{constructor(e,t,a,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=a,this.mutations=s}applyToRemoteDocument(e,t){const a=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&_4(l,e,a[s])}}applyToLocalView(e,t){for(const a of this.baseMutations)a.key.isEqual(e.key)&&(t=Au(a,e,t,this.localWriteTime));for(const a of this.mutations)a.key.isEqual(e.key)&&(t=Au(a,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const a=xS();return this.mutations.forEach(s=>{const l=e.get(s.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(s.key)?null:d;const p=MS(c,d);p!==null&&a.set(s.key,p),c.isValidDocument()||c.convertToNoDocument(we.min())}),a}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Me())}isEqual(e){return this.batchId===e.batchId&&Lo(this.mutations,e.mutations,(t,a)=>WT(t,a))&&Lo(this.baseMutations,e.baseMutations,(t,a)=>WT(t,a))}}class yy{constructor(e,t,a,s){this.batch=e,this.commitVersion=t,this.mutationResults=a,this.docVersions=s}static from(e,t,a){Ye(e.mutations.length===a.length);let s=function(){return c4}();const l=e.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,a[c].version);return new yy(e,t,a,s)}}/**
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
 */class A4{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class w4{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Tt,Fe;function S4(n){switch(n){case ee.OK:return Ae();case ee.CANCELLED:case ee.UNKNOWN:case ee.DEADLINE_EXCEEDED:case ee.RESOURCE_EXHAUSTED:case ee.INTERNAL:case ee.UNAVAILABLE:case ee.UNAUTHENTICATED:return!1;case ee.INVALID_ARGUMENT:case ee.NOT_FOUND:case ee.ALREADY_EXISTS:case ee.PERMISSION_DENIED:case ee.FAILED_PRECONDITION:case ee.ABORTED:case ee.OUT_OF_RANGE:case ee.UNIMPLEMENTED:case ee.DATA_LOSS:return!0;default:return Ae()}}function LS(n){if(n===void 0)return vr("GRPC error has no .code"),ee.UNKNOWN;switch(n){case Tt.OK:return ee.OK;case Tt.CANCELLED:return ee.CANCELLED;case Tt.UNKNOWN:return ee.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return ee.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return ee.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return ee.INTERNAL;case Tt.UNAVAILABLE:return ee.UNAVAILABLE;case Tt.UNAUTHENTICATED:return ee.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return ee.INVALID_ARGUMENT;case Tt.NOT_FOUND:return ee.NOT_FOUND;case Tt.ALREADY_EXISTS:return ee.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return ee.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return ee.FAILED_PRECONDITION;case Tt.ABORTED:return ee.ABORTED;case Tt.OUT_OF_RANGE:return ee.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return ee.UNIMPLEMENTED;case Tt.DATA_LOSS:return ee.DATA_LOSS;default:return Ae()}}(Fe=Tt||(Tt={}))[Fe.OK=0]="OK",Fe[Fe.CANCELLED=1]="CANCELLED",Fe[Fe.UNKNOWN=2]="UNKNOWN",Fe[Fe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Fe[Fe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Fe[Fe.NOT_FOUND=5]="NOT_FOUND",Fe[Fe.ALREADY_EXISTS=6]="ALREADY_EXISTS",Fe[Fe.PERMISSION_DENIED=7]="PERMISSION_DENIED",Fe[Fe.UNAUTHENTICATED=16]="UNAUTHENTICATED",Fe[Fe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Fe[Fe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Fe[Fe.ABORTED=10]="ABORTED",Fe[Fe.OUT_OF_RANGE=11]="OUT_OF_RANGE",Fe[Fe.UNIMPLEMENTED=12]="UNIMPLEMENTED",Fe[Fe.INTERNAL=13]="INTERNAL",Fe[Fe.UNAVAILABLE=14]="UNAVAILABLE",Fe[Fe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function R4(){return new TextEncoder}/**
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
 */const I4=new ga([4294967295,4294967295],0);function eb(n){const e=R4().encode(n),t=new eS;return t.update(e),new Uint8Array(t.digest())}function tb(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),a=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new ga([t,a],0),new ga([s,l],0)]}class vy{constructor(e,t,a){if(this.bitmap=e,this.padding=t,this.hashCount=a,t<0||t>=8)throw new mu(`Invalid padding: ${t}`);if(a<0)throw new mu(`Invalid hash count: ${a}`);if(e.length>0&&this.hashCount===0)throw new mu(`Invalid hash count: ${a}`);if(e.length===0&&t!==0)throw new mu(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=ga.fromNumber(this.Ee)}Ae(e,t,a){let s=e.add(t.multiply(ga.fromNumber(a)));return s.compare(I4)===1&&(s=new ga([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=eb(e),[a,s]=tb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(a,s,l);if(!this.Re(c))return!1}return!0}static create(e,t,a){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new vy(l,s,t);return a.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=eb(e),[a,s]=tb(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(a,s,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),a=e%8;this.bitmap[t]|=1<<a}}class mu extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Kh{constructor(e,t,a,s,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=a,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,a){const s=new Map;return s.set(e,Qu.createSynthesizedTargetChangeForCurrentChange(e,t,a)),new Kh(we.min(),s,new ot(Le),_r(),Me())}}class Qu{constructor(e,t,a,s,l){this.resumeToken=e,this.current=t,this.addedDocuments=a,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,a){return new Qu(a,t,Me(),Me(),Me())}}/**
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
 */class Kf{constructor(e,t,a,s){this.me=e,this.removedTargetIds=t,this.key=a,this.fe=s}}class US{constructor(e,t){this.targetId=e,this.ge=t}}class jS{constructor(e,t,a=Yt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=a,this.cause=s}}class nb{constructor(){this.pe=0,this.ye=ib(),this.we=Yt.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Me(),t=Me(),a=Me();return this.ye.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:a=a.add(s);break;default:Ae()}}),new Qu(this.we,this.Se,e,t,a)}Me(){this.be=!1,this.ye=ib()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Ye(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class C4{constructor(e){this.ke=e,this.qe=new Map,this.Qe=_r(),this.$e=Nf(),this.Ke=Nf(),this.Ue=new ot(Le)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const a=this.He(t);switch(e.state){case 0:this.Je(t)&&a.Ce(e.resumeToken);break;case 1:a.Be(),a.De||a.Me(),a.Ce(e.resumeToken);break;case 2:a.Be(),a.De||this.removeTarget(t);break;case 3:this.Je(t)&&(a.Le(),a.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),a.Ce(e.resumeToken));break;default:Ae()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((a,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,a=e.ge.count,s=this.Xe(t);if(s){const l=s.target;if(mg(l))if(a===0){const c=new ve(l.path);this.ze(t,c,en.newNoDocument(c,we.min()))}else Ye(a===1);else{const c=this.et(t);if(c!==a){const d=this.tt(e),p=d?this.nt(d,e,c):1;if(p!==0){this.Ye(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:a="",padding:s=0},hashCount:l=0}=t;let c,d;try{c=Sa(a).toUint8Array()}catch(p){if(p instanceof cS)return Vo("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{d=new vy(c,s,l)}catch(p){return Vo(p instanceof mu?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return d.Ee===0?null:d}nt(e,t,a){return t.ge.count===a-this.st(e,t.targetId)?0:2}st(e,t){const a=this.ke.getRemoteKeysForTarget(t);let s=0;return a.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&mg(d.target)){const p=new ve(d.target.path);this._t(p).has(c)||this.ut(c,p)||this.ze(c,p,en.newNoDocument(p,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let a=Me();this.Ke.forEach((l,c)=>{let d=!0;c.forEachWhile(p=>{const g=this.Xe(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(a=a.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const s=new Kh(e,t,this.Ue,this.Qe,a);return this.Qe=_r(),this.$e=Nf(),this.Ke=Nf(),this.Ue=new ot(Le),s}Ge(e,t){if(!this.Je(e))return;const a=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,a),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ke=this.Ke.insert(t.key,this.ct(t.key).add(e))}ze(e,t,a){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ke=this.Ke.insert(t,this.ct(t).delete(e)),this.Ke=this.Ke.insert(t,this.ct(t).add(e)),a&&(this.Qe=this.Qe.insert(t,a))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new nb,this.qe.set(e,t)),t}ct(e){let t=this.Ke.get(e);return t||(t=new kt(Le),this.Ke=this.Ke.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new kt(Le),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||ce("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new nb),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Nf(){return new ot(ve.comparator)}function ib(){return new ot(ve.comparator)}const x4={asc:"ASCENDING",desc:"DESCENDING"},N4={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},O4={and:"AND",or:"OR"};class D4{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yg(n,e){return n.useProto3Json||jh(e)?e:{value:e}}function mh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function k4(n,e){return mh(n,e.toTimestamp())}function xi(n){return Ye(!!n),we.fromTimestamp(function(t){const a=wa(t);return new Dt(a.seconds,a.nanos)}(n))}function _y(n,e){return vg(n,e).canonicalString()}function vg(n,e){const t=function(s){return new tt(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function FS(n){const e=tt.fromString(n);return Ye(KS(e)),e}function _g(n,e){return _y(n.databaseId,e.path)}function xp(n,e){const t=FS(e);if(t.get(1)!==n.databaseId.projectId)throw new fe(ee.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new fe(ee.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ve(qS(t))}function BS(n,e){return _y(n.databaseId,e)}function P4(n){const e=FS(n);return e.length===4?tt.emptyPath():qS(e)}function Eg(n){return new tt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qS(n){return Ye(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rb(n,e,t){return{name:_g(n,e),fields:t.value.mapValue.fields}}function M4(n,e){let t;if("targetChange"in e){e.targetChange;const a=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Ae()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(g,_){return g.useProto3Json?(Ye(_===void 0||typeof _=="string"),Yt.fromBase64String(_||"")):(Ye(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),Yt.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const _=g.code===void 0?ee.UNKNOWN:LS(g.code);return new fe(_,g.message||"")}(c);t=new jS(a,s,l,d||null)}else if("documentChange"in e){e.documentChange;const a=e.documentChange;a.document,a.document.name,a.document.updateTime;const s=xp(n,a.document.name),l=xi(a.document.updateTime),c=a.document.createTime?xi(a.document.createTime):we.min(),d=new pn({mapValue:{fields:a.document.fields}}),p=en.newFoundDocument(s,l,c,d),g=a.targetIds||[],_=a.removedTargetIds||[];t=new Kf(g,_,p.key,p)}else if("documentDelete"in e){e.documentDelete;const a=e.documentDelete;a.document;const s=xp(n,a.document),l=a.readTime?xi(a.readTime):we.min(),c=en.newNoDocument(s,l),d=a.removedTargetIds||[];t=new Kf([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const a=e.documentRemove;a.document;const s=xp(n,a.document),l=a.removedTargetIds||[];t=new Kf([],l,s,null)}else{if(!("filter"in e))return Ae();{e.filter;const a=e.filter;a.targetId;const{count:s=0,unchangedNames:l}=a,c=new w4(s,l),d=a.targetId;t=new US(d,c)}}return t}function V4(n,e){let t;if(e instanceof Yu)t={update:rb(n,e.key,e.value)};else if(e instanceof gy)t={delete:_g(n,e.key)};else if(e instanceof Da)t={update:rb(n,e.key,e.data),updateMask:G4(e.fieldMask)};else{if(!(e instanceof T4))return Ae();t={verify:_g(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(a=>function(l,c){const d=c.transform;if(d instanceof hh)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Mu)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Vu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof dh)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Ae()}(0,a))),e.precondition.isNone||(t.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:k4(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Ae()}(n,e.precondition)),t}function L4(n,e){return n&&n.length>0?(Ye(e!==void 0),n.map(t=>function(s,l){let c=s.updateTime?xi(s.updateTime):xi(l);return c.isEqual(we.min())&&(c=xi(l)),new v4(c,s.transformResults||[])}(t,e))):[]}function U4(n,e){return{documents:[BS(n,e.path)]}}function j4(n,e){const t={structuredQuery:{}},a=e.path;let s;e.collectionGroup!==null?(s=a,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=a.popLast(),t.structuredQuery.from=[{collectionId:a.lastSegment()}]),t.parent=BS(n,s);const l=function(g){if(g.length!==0)return GS(ai.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(_=>function(w){return{field:Ao(w.field),direction:B4(w.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=yg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:s}}function z4(n){let e=P4(n.parent);const t=n.structuredQuery,a=t.from?t.from.length:0;let s=null;if(a>0){Ye(a===1);const _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=function(b){const w=HS(b);return w instanceof ai&&ES(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(b){return b.map(w=>function(x){return new fh(wo(x.field),function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(b){let w;return w=typeof b=="object"?b.value:b,jh(w)?null:w}(t.limit));let p=null;t.startAt&&(p=function(b){const w=!!b.before,N=b.values||[];return new ch(N,w)}(t.startAt));let g=null;return t.endAt&&(g=function(b){const w=!b.before,N=b.values||[];return new ch(N,w)}(t.endAt)),a4(e,s,c,l,d,"F",p,g)}function F4(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Ae()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function HS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const a=wo(t.unaryFilter.field);return bt.create(a,"==",{doubleValue:NaN});case"IS_NULL":const s=wo(t.unaryFilter.field);return bt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=wo(t.unaryFilter.field);return bt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=wo(t.unaryFilter.field);return bt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Ae()}}(n):n.fieldFilter!==void 0?function(t){return bt.create(wo(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Ae()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return ai.create(t.compositeFilter.filters.map(a=>HS(a)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Ae()}}(t.compositeFilter.op))}(n):Ae()}function B4(n){return x4[n]}function q4(n){return N4[n]}function H4(n){return O4[n]}function Ao(n){return{fieldPath:n.canonicalString()}}function wo(n){return $t.fromServerFormat(n.fieldPath)}function GS(n){return n instanceof bt?function(t){if(t.op==="=="){if(GT(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NAN"}};if(HT(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(GT(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NAN"}};if(HT(t.value))return{unaryFilter:{field:Ao(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ao(t.field),op:q4(t.op),value:t.value}}}(n):n instanceof ai?function(t){const a=t.getFilters().map(s=>GS(s));return a.length===1?a[0]:{compositeFilter:{op:H4(t.op),filters:a}}}(n):Ae()}function G4(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function KS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class fa{constructor(e,t,a,s,l=we.min(),c=we.min(),d=Yt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=a,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=p}withSequenceNumber(e){return new fa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new fa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new fa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new fa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class K4{constructor(e){this.Tt=e}}function $4(n){const e=z4({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?gg(e,e.limit,"L"):e}/**
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
 */class Y4{constructor(){this.Tn=new Q4}addToCollectionParentIndex(e,t){return this.Tn.add(t),J.resolve()}getCollectionParents(e,t){return J.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return J.resolve()}deleteFieldIndex(e,t){return J.resolve()}deleteAllFieldIndexes(e){return J.resolve()}createTargetIndexes(e,t){return J.resolve()}getDocumentsMatchingTarget(e,t){return J.resolve(null)}getIndexType(e,t){return J.resolve(0)}getFieldIndexes(e,t){return J.resolve([])}getNextCollectionGroupToUpdate(e){return J.resolve(null)}getMinOffset(e,t){return J.resolve(Aa.min())}getMinOffsetFromCollectionGroup(e,t){return J.resolve(Aa.min())}updateCollectionGroup(e,t,a){return J.resolve()}updateIndexEntries(e,t){return J.resolve()}}class Q4{constructor(){this.index={}}add(e){const t=e.lastSegment(),a=e.popLast(),s=this.index[t]||new kt(tt.comparator),l=!s.has(a);return this.index[t]=s.add(a),l}has(e){const t=e.lastSegment(),a=e.popLast(),s=this.index[t];return s&&s.has(a)}getEntries(e){return(this.index[e]||new kt(tt.comparator)).toArray()}}/**
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
 */const ab={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},$S=41943040;class mn{static withCacheSize(e){return new mn(e,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,a){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=a}}/**
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
 */mn.DEFAULT_COLLECTION_PERCENTILE=10,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,mn.DEFAULT=new mn($S,mn.DEFAULT_COLLECTION_PERCENTILE,mn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),mn.DISABLED=new mn(-1,0,0);/**
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
 */class zo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Kn(){return new zo(0)}static Un(){return new zo(-1)}}/**
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
 */const sb="LruGarbageCollector",X4=1048576;function ob([n,e],[t,a]){const s=Le(n,t);return s===0?Le(e,a):s}class W4{constructor(e){this.Hn=e,this.buffer=new kt(ob),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const a=this.buffer.last();ob(t,a)<0&&(this.buffer=this.buffer.delete(a).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Z4{constructor(e,t,a){this.garbageCollector=e,this.asyncQueue=t,this.localStore=a,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){ce(sb,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Xo(t)?ce(sb,"Ignoring IndexedDB error during garbage collection: ",t):await Qo(t)}await this.er(3e5)})}}class J4{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(a=>Math.floor(t/100*a))}nthSequenceNumber(e,t){if(t===0)return J.resolve(Uh.ae);const a=new W4(t);return this.tr.forEachTarget(e,s=>a.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>a.Zn(s))).next(()=>a.maxValue)}removeTargets(e,t,a){return this.tr.removeTargets(e,t,a)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(ce("LruGarbageCollector","Garbage collection skipped; disabled"),J.resolve(ab)):this.getCacheSize(e).next(a=>a<this.params.cacheSizeCollectionThreshold?(ce("LruGarbageCollector",`Garbage collection skipped; Cache size ${a} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ab):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let a,s,l,c,d,p,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(b=>(b>this.params.maximumSequenceNumbersToCollect?(ce("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${b}`),s=this.params.maximumSequenceNumbersToCollect):s=b,c=Date.now(),this.nthSequenceNumber(e,s))).next(b=>(a=b,d=Date.now(),this.removeTargets(e,a,t))).next(b=>(l=b,p=Date.now(),this.removeOrphanedDocuments(e,a))).next(b=>(g=Date.now(),To()<=Pe.DEBUG&&ce("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${s} in `+(d-c)+`ms
	Removed ${l} targets in `+(p-d)+`ms
	Removed ${b} documents in `+(g-p)+`ms
Total Duration: ${g-_}ms`),J.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:b})))}}function eV(n,e){return new J4(n,e)}/**
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
 */class tV{constructor(){this.changes=new Cs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,en.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const a=this.changes.get(t);return a!==void 0?J.resolve(a):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class nV{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class iV{constructor(e,t,a,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=a,this.indexManager=s}getDocument(e,t){let a=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(a=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(a!==null&&Au(a.mutation,s,Rn.empty(),Dt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.getLocalViewOfDocuments(e,a,Me()).next(()=>a))}getLocalViewOfDocuments(e,t,a=Me()){const s=ms();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,a).next(l=>{let c=du();return l.forEach((d,p)=>{c=c.insert(d,p.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const a=ms();return this.populateOverlays(e,a,t).next(()=>this.computeViews(e,t,a,Me()))}populateOverlays(e,t,a){const s=[];return a.forEach(l=>{t.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,a,s){let l=_r();const c=bu(),d=function(){return bu()}();return t.forEach((p,g)=>{const _=a.get(g.key);s.has(g.key)&&(_===void 0||_.mutation instanceof Da)?l=l.insert(g.key,g):_!==void 0?(c.set(g.key,_.mutation.getFieldMask()),Au(_.mutation,g,_.mutation.getFieldMask(),Dt.now())):c.set(g.key,Rn.empty())}),this.recalculateAndSaveOverlays(e,l).next(p=>(p.forEach((g,_)=>c.set(g,_)),t.forEach((g,_)=>{var b;return d.set(g,new nV(_,(b=c.get(g))!==null&&b!==void 0?b:null))}),d))}recalculateAndSaveOverlays(e,t){const a=bu();let s=new ot((c,d)=>c-d),l=Me();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(p=>{const g=t.get(p);if(g===null)return;let _=a.get(p)||Rn.empty();_=d.applyToLocalView(g,_),a.set(p,_);const b=(s.get(d.batchId)||Me()).add(p);s=s.insert(d.batchId,b)})}).next(()=>{const c=[],d=s.getReverseIterator();for(;d.hasNext();){const p=d.getNext(),g=p.key,_=p.value,b=xS();_.forEach(w=>{if(!l.has(w)){const N=MS(t.get(w),a.get(w));N!==null&&b.set(w,N),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,b))}return J.waitFor(c)}).next(()=>a)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(a=>this.recalculateAndSaveOverlays(e,a))}getDocumentsMatchingQuery(e,t,a,s){return function(c){return ve.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):wS(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,a,s):this.getDocumentsMatchingCollectionQuery(e,t,a,s)}getNextDocuments(e,t,a,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,a,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,a.largestBatchId,s-l.size):J.resolve(ms());let d=Ou,p=l;return c.next(g=>J.forEach(g,(_,b)=>(d<b.largestBatchId&&(d=b.largestBatchId),l.get(_)?J.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{p=p.insert(_,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,p,g,Me())).next(_=>({batchId:d,changes:CS(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ve(t)).next(a=>{let s=du();return a.isFoundDocument()&&(s=s.insert(a.key,a)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,a,s){const l=t.collectionGroup;let c=du();return this.indexManager.getCollectionParents(e,l).next(d=>J.forEach(d,p=>{const g=function(b,w){return new $u(w,null,b.explicitOrderBy.slice(),b.filters.slice(),b.limit,b.limitType,b.startAt,b.endAt)}(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,a,s).next(_=>{_.forEach((b,w)=>{c=c.insert(b,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,a,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,a.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,a,l,s))).next(c=>{l.forEach((p,g)=>{const _=g.getKey();c.get(_)===null&&(c=c.insert(_,en.newInvalidDocument(_)))});let d=du();return c.forEach((p,g)=>{const _=l.get(p);_!==void 0&&Au(_.mutation,g,Rn.empty(),Dt.now()),qh(t,g)&&(d=d.insert(p,g))}),d})}}/**
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
 */class rV{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return J.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:xi(s.createTime)}}(t)),J.resolve()}getNamedQuery(e,t){return J.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:$4(s.bundledQuery),readTime:xi(s.readTime)}}(t)),J.resolve()}}/**
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
 */class aV{constructor(){this.overlays=new ot(ve.comparator),this.Rr=new Map}getOverlay(e,t){return J.resolve(this.overlays.get(t))}getOverlays(e,t){const a=ms();return J.forEach(t,s=>this.getOverlay(e,s).next(l=>{l!==null&&a.set(s,l)})).next(()=>a)}saveOverlays(e,t,a){return a.forEach((s,l)=>{this.Et(e,t,l)}),J.resolve()}removeOverlaysForBatchId(e,t,a){const s=this.Rr.get(a);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(a)),J.resolve()}getOverlaysForCollection(e,t,a){const s=ms(),l=t.length+1,c=new ve(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const p=d.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>a&&s.set(p.getKey(),p)}return J.resolve(s)}getOverlaysForCollectionGroup(e,t,a,s){let l=new ot((g,_)=>g-_);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>a){let _=l.get(g.largestBatchId);_===null&&(_=ms(),l=l.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const d=ms(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach((g,_)=>d.set(g,_)),!(d.size()>=s)););return J.resolve(d)}Et(e,t,a){const s=this.overlays.get(a.key);if(s!==null){const c=this.Rr.get(s.largestBatchId).delete(a.key);this.Rr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(a.key,new A4(t,a));let l=this.Rr.get(t);l===void 0&&(l=Me(),this.Rr.set(t,l)),this.Rr.set(t,l.add(a.key))}}/**
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
 */class sV{constructor(){this.sessionToken=Yt.EMPTY_BYTE_STRING}getSessionToken(e){return J.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,J.resolve()}}/**
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
 */class Ey{constructor(){this.Vr=new kt(Ft.mr),this.gr=new kt(Ft.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const a=new Ft(e,t);this.Vr=this.Vr.add(a),this.gr=this.gr.add(a)}yr(e,t){e.forEach(a=>this.addReference(a,t))}removeReference(e,t){this.wr(new Ft(e,t))}Sr(e,t){e.forEach(a=>this.removeReference(a,t))}br(e){const t=new ve(new tt([])),a=new Ft(t,e),s=new Ft(t,e+1),l=[];return this.gr.forEachInRange([a,s],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new ve(new tt([])),a=new Ft(t,e),s=new Ft(t,e+1);let l=Me();return this.gr.forEachInRange([a,s],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Ft(e,0),a=this.Vr.firstAfterOrEqual(t);return a!==null&&e.isEqual(a.key)}}class Ft{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return ve.comparator(e.key,t.key)||Le(e.Cr,t.Cr)}static pr(e,t){return Le(e.Cr,t.Cr)||ve.comparator(e.key,t.key)}}/**
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
 */class oV{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new kt(Ft.mr)}checkEmpty(e){return J.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,a,s){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new b4(l,t,a,s);this.mutationQueue.push(c);for(const d of s)this.Mr=this.Mr.add(new Ft(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return J.resolve(c)}lookupMutationBatch(e,t){return J.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const a=t+1,s=this.Nr(a),l=s<0?0:s;return J.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return J.resolve(this.mutationQueue.length===0?cy:this.Fr-1)}getAllMutationBatches(e){return J.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const a=new Ft(t,0),s=new Ft(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([a,s],c=>{const d=this.Or(c.Cr);l.push(d)}),J.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let a=new kt(Le);return t.forEach(s=>{const l=new Ft(s,0),c=new Ft(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{a=a.add(d.Cr)})}),J.resolve(this.Br(a))}getAllMutationBatchesAffectingQuery(e,t){const a=t.path,s=a.length+1;let l=a;ve.isDocumentKey(l)||(l=l.child(""));const c=new Ft(new ve(l),0);let d=new kt(Le);return this.Mr.forEachWhile(p=>{const g=p.key.path;return!!a.isPrefixOf(g)&&(g.length===s&&(d=d.add(p.Cr)),!0)},c),J.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(a=>{const s=this.Or(a);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Ye(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let a=this.Mr;return J.forEach(t.mutations,s=>{const l=new Ft(s.key,t.batchId);return a=a.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=a})}qn(e){}containsKey(e,t){const a=new Ft(t,0),s=this.Mr.firstAfterOrEqual(a);return J.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,J.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lV{constructor(e){this.kr=e,this.docs=function(){return new ot(ve.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const a=t.key,s=this.docs.get(a),l=s?s.size:0,c=this.kr(t);return this.docs=this.docs.insert(a,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,a.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const a=this.docs.get(t);return J.resolve(a?a.document.mutableCopy():en.newInvalidDocument(t))}getEntries(e,t){let a=_r();return t.forEach(s=>{const l=this.docs.get(s);a=a.insert(s,l?l.document.mutableCopy():en.newInvalidDocument(s))}),J.resolve(a)}getDocumentsMatchingQuery(e,t,a,s){let l=_r();const c=t.path,d=new ve(c.child("__id-9223372036854775808__")),p=this.docs.getIteratorFrom(d);for(;p.hasNext();){const{key:g,value:{document:_}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||LM(VM(_),a)<=0||(s.has(_.key)||qh(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return J.resolve(l)}getAllFromCollectionGroup(e,t,a,s){Ae()}qr(e,t){return J.forEach(this.docs,a=>t(a))}newChangeBuffer(e){return new uV(this)}getSize(e){return J.resolve(this.size)}}class uV extends tV{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((a,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(a)}),J.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
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
 */class cV{constructor(e){this.persistence=e,this.Qr=new Cs(t=>dy(t),my),this.lastRemoteSnapshotVersion=we.min(),this.highestTargetId=0,this.$r=0,this.Kr=new Ey,this.targetCount=0,this.Ur=zo.Kn()}forEachTarget(e,t){return this.Qr.forEach((a,s)=>t(s)),J.resolve()}getLastRemoteSnapshotVersion(e){return J.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return J.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Ur.next(),J.resolve(this.highestTargetId)}setTargetsMetadata(e,t,a){return a&&(this.lastRemoteSnapshotVersion=a),t>this.$r&&(this.$r=t),J.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ur=new zo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,J.resolve()}updateTargetData(e,t){return this.zn(t),J.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Kr.br(t.targetId),this.targetCount-=1,J.resolve()}removeTargets(e,t,a){let s=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&a.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),J.waitFor(l).next(()=>s)}getTargetCount(e){return J.resolve(this.targetCount)}getTargetData(e,t){const a=this.Qr.get(t)||null;return J.resolve(a)}addMatchingKeys(e,t,a){return this.Kr.yr(t,a),J.resolve()}removeMatchingKeys(e,t,a){this.Kr.Sr(t,a);const s=this.persistence.referenceDelegate,l=[];return s&&t.forEach(c=>{l.push(s.markPotentiallyOrphaned(e,c))}),J.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Kr.br(t),J.resolve()}getMatchingKeysForTargetId(e,t){const a=this.Kr.vr(t);return J.resolve(a)}containsKey(e,t){return J.resolve(this.Kr.containsKey(t))}}/**
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
 */class YS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Uh(0),this.zr=!1,this.zr=!0,this.jr=new sV,this.referenceDelegate=e(this),this.Hr=new cV(this),this.indexManager=new Y4,this.remoteDocumentCache=function(s){return new lV(s)}(a=>this.referenceDelegate.Jr(a)),this.serializer=new K4(t),this.Yr=new rV(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new aV,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let a=this.Wr[e.toKey()];return a||(a=new oV(t,this.referenceDelegate),this.Wr[e.toKey()]=a),a}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,a){ce("MemoryPersistence","Starting transaction:",e);const s=new fV(this.Gr.next());return this.referenceDelegate.Zr(),a(s).next(l=>this.referenceDelegate.Xr(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}ei(e,t){return J.or(Object.values(this.Wr).map(a=>()=>a.containsKey(e,t)))}}class fV extends jM{constructor(e){super(),this.currentSequenceNumber=e}}class Ty{constructor(e){this.persistence=e,this.ti=new Ey,this.ni=null}static ri(e){return new Ty(e)}get ii(){if(this.ni)return this.ni;throw Ae()}addReference(e,t,a){return this.ti.addReference(a,t),this.ii.delete(a.toString()),J.resolve()}removeReference(e,t,a){return this.ti.removeReference(a,t),this.ii.add(a.toString()),J.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),J.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const a=this.persistence.getTargetCache();return a.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(l=>this.ii.add(l.toString()))}).next(()=>a.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return J.forEach(this.ii,a=>{const s=ve.fromPath(a);return this.si(e,s).next(l=>{l||t.removeEntry(s,we.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(a=>{a?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return J.or([()=>J.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class ph{constructor(e,t){this.persistence=e,this.oi=new Cs(a=>BM(a.path),(a,s)=>a.isEqual(s)),this.garbageCollector=eV(this,t)}static ri(e,t){return new ph(e,t)}Zr(){}Xr(e){return J.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(a=>t.next(s=>a+s))}sr(e){let t=0;return this.rr(e,a=>{t++}).next(()=>t)}rr(e,t){return J.forEach(this.oi,(a,s)=>this.ar(e,a,s).next(l=>l?J.resolve():t(s)))}removeTargets(e,t,a){return this.persistence.getTargetCache().removeTargets(e,t,a)}removeOrphanedDocuments(e,t){let a=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.qr(e,c=>this.ar(e,c,t).next(d=>{d||(a++,l.removeEntry(c,we.min()))})).next(()=>l.apply(e)).next(()=>a)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}removeTarget(e,t){const a=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,a)}addReference(e,t,a){return this.oi.set(a,e.currentSequenceNumber),J.resolve()}removeReference(e,t,a){return this.oi.set(a,e.currentSequenceNumber),J.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),J.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qf(e.data.value)),t}ar(e,t,a){return J.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return J.resolve(s!==void 0&&s>a)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class by{constructor(e,t,a,s){this.targetId=e,this.fromCache=t,this.Hi=a,this.Ji=s}static Yi(e,t){let a=Me(),s=Me();for(const l of t.docChanges)switch(l.type){case 0:a=a.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new by(e,t.fromCache,a,s)}}/**
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
 */class hV{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class dV{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return CN()?8:zM(nn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,a,s){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,s,a).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new hV;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,a,s){return a.documentReadCount<this.es?(To()<=Pe.DEBUG&&ce("QueryEngine","SDK will not create cache indexes for query:",bo(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),J.resolve()):(To()<=Pe.DEBUG&&ce("QueryEngine","Query:",bo(t),"scans",a.documentReadCount,"local documents and returns",s,"documents as results."),a.documentReadCount>this.ts*s?(To()<=Pe.DEBUG&&ce("QueryEngine","The SDK decides to create cache indexes for query:",bo(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ci(t))):J.resolve())}rs(e,t){if(QT(t))return J.resolve(null);let a=Ci(t);return this.indexManager.getIndexType(e,a).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=gg(t,null,"F"),a=Ci(t)),this.indexManager.getDocumentsMatchingTarget(e,a).next(l=>{const c=Me(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,a).next(p=>{const g=this.cs(t,d);return this.ls(t,g,c,p.readTime)?this.rs(e,gg(t,null,"F")):this.hs(e,g,t,p)}))})))}ss(e,t,a,s){return QT(t)||s.isEqual(we.min())?J.resolve(null):this.ns.getDocuments(e,a).next(l=>{const c=this.cs(t,l);return this.ls(t,c,a,s)?J.resolve(null):(To()<=Pe.DEBUG&&ce("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),bo(t)),this.hs(e,c,t,MM(s,Ou)).next(d=>d))})}cs(e,t){let a=new kt(RS(e));return t.forEach((s,l)=>{qh(e,l)&&(a=a.add(l))}),a}ls(e,t,a,s){if(e.limit===null)return!1;if(a.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}_s(e,t,a){return To()<=Pe.DEBUG&&ce("QueryEngine","Using full collection scan to execute query:",bo(t)),this.ns.getDocumentsMatchingQuery(e,t,Aa.min(),a)}hs(e,t,a,s){return this.ns.getDocumentsMatchingQuery(e,a,s).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
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
 */const Ay="LocalStore",mV=3e8;class pV{constructor(e,t,a,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new ot(Le),this.Is=new Cs(l=>dy(l),my),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(a)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new iV(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function gV(n,e,t,a){return new pV(n,e,t,a)}async function QS(n,e){const t=Re(n);return await t.persistence.runTransaction("Handle user change","readonly",a=>{let s;return t.mutationQueue.getAllMutationBatches(a).next(l=>(s=l,t.As(e),t.mutationQueue.getAllMutationBatches(a))).next(l=>{const c=[],d=[];let p=Me();for(const g of s){c.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}for(const g of l){d.push(g.batchId);for(const _ of g.mutations)p=p.add(_.key)}return t.localDocuments.getDocuments(a,p).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:d}))})})}function yV(n,e){const t=Re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",a=>{const s=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,p,g,_){const b=g.batch,w=b.keys();let N=J.resolve();return w.forEach(x=>{N=N.next(()=>_.getEntry(p,x)).next(H=>{const k=g.docVersions.get(x);Ye(k!==null),H.version.compareTo(k)<0&&(b.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),_.addEntry(H)))})}),N.next(()=>d.mutationQueue.removeMutationBatch(p,b))}(t,a,e,l).next(()=>l.apply(a)).next(()=>t.mutationQueue.performConsistencyCheck(a)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(a,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(a,function(d){let p=Me();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(p=p.add(d.batch.mutations[g].key));return p}(e))).next(()=>t.localDocuments.getDocuments(a,s))})}function XS(n){const e=Re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function vV(n,e){const t=Re(n),a=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const d=[];e.targetChanges.forEach((_,b)=>{const w=s.get(b);if(!w)return;d.push(t.Hr.removeMatchingKeys(l,_.removedDocuments,b).next(()=>t.Hr.addMatchingKeys(l,_.addedDocuments,b)));let N=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(b)!==null?N=N.withResumeToken(Yt.EMPTY_BYTE_STRING,we.min()).withLastLimboFreeSnapshotVersion(we.min()):_.resumeToken.approximateByteSize()>0&&(N=N.withResumeToken(_.resumeToken,a)),s=s.insert(b,N),function(H,k,B){return H.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=mV?!0:B.addedDocuments.size+B.modifiedDocuments.size+B.removedDocuments.size>0}(w,N,_)&&d.push(t.Hr.updateTargetData(l,N))});let p=_r(),g=Me();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))}),d.push(_V(l,c,e.documentUpdates).next(_=>{p=_.Vs,g=_.fs})),!a.isEqual(we.min())){const _=t.Hr.getLastRemoteSnapshotVersion(l).next(b=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,a));d.push(_)}return J.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,p,g)).next(()=>p)}).then(l=>(t.Ts=s,l))}function _V(n,e,t){let a=Me(),s=Me();return t.forEach(l=>a=a.add(l)),e.getEntries(n,a).next(l=>{let c=_r();return t.forEach((d,p)=>{const g=l.get(d);p.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),p.isNoDocument()&&p.version.isEqual(we.min())?(e.removeEntry(d,p.readTime),c=c.insert(d,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(d,p)):ce(Ay,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",p.version)}),{Vs:c,fs:s}})}function EV(n,e){const t=Re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",a=>(e===void 0&&(e=cy),t.mutationQueue.getNextMutationBatchAfterBatchId(a,e)))}function TV(n,e){const t=Re(n);return t.persistence.runTransaction("Allocate target","readwrite",a=>{let s;return t.Hr.getTargetData(a,e).next(l=>l?(s=l,J.resolve(s)):t.Hr.allocateTargetId(a).next(c=>(s=new fa(e,c,"TargetPurposeListen",a.currentSequenceNumber),t.Hr.addTargetData(a,s).next(()=>s))))}).then(a=>{const s=t.Ts.get(a.targetId);return(s===null||a.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(a.targetId,a),t.Is.set(e,a.targetId)),a})}async function Tg(n,e,t){const a=Re(n),s=a.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await a.persistence.runTransaction("Release target",l,c=>a.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!Xo(c))throw c;ce(Ay,`Failed to update sequence numbers for target ${e}: ${c}`)}a.Ts=a.Ts.remove(e),a.Is.delete(s.target)}function lb(n,e,t){const a=Re(n);let s=we.min(),l=Me();return a.persistence.runTransaction("Execute query","readwrite",c=>function(p,g,_){const b=Re(p),w=b.Is.get(_);return w!==void 0?J.resolve(b.Ts.get(w)):b.Hr.getTargetData(g,_)}(a,c,Ci(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,a.Hr.getMatchingKeysForTargetId(c,d.targetId).next(p=>{l=p})}).next(()=>a.Ps.getDocumentsMatchingQuery(c,e,t?s:we.min(),t?l:Me())).next(d=>(bV(a,o4(e),d),{documents:d,gs:l})))}function bV(n,e,t){let a=n.Es.get(e)||we.min();t.forEach((s,l)=>{l.readTime.compareTo(a)>0&&(a=l.readTime)}),n.Es.set(e,a)}class ub{constructor(){this.activeTargetIds=d4()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class AV{constructor(){this.ho=new ub,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,a){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,a){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new ub,Promise.resolve()}handleUserChange(e,t,a){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class wV{To(e){}shutdown(){}}/**
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
 */const cb="ConnectivityMonitor";class fb{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){ce(cb,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){ce(cb,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Of=null;function bg(){return Of===null?Of=function(){return 268435456+Math.round(2147483648*Math.random())}():Of++,"0x"+Of.toString(16)}/**
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
 */const Np="RestConnection",SV={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class RV{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${a}/databases/${s}`,this.wo=this.databaseId.database===lh?`project_id=${a}`:`project_id=${a}&database_id=${s}`}So(e,t,a,s,l){const c=bg(),d=this.bo(e,t.toUriEncodedString());ce(Np,`Sending RPC '${e}' ${c}:`,d,a);const p={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(p,s,l),this.vo(e,d,p,a).then(g=>(ce(Np,`Received RPC '${e}' ${c}: `,g),g),g=>{throw Vo(Np,`RPC '${e}' ${c} failed with error: `,g,"url: ",d,"request:",a),g})}Co(e,t,a,s,l,c){return this.So(e,t,a,s,l)}Do(e,t,a){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Yo}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,l)=>e[l]=s),a&&a.headers.forEach((s,l)=>e[l]=s)}bo(e,t){const a=SV[e];return`${this.po}/v1/${t}:${a}`}terminate(){}}/**
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
 */class IV{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Ko(e){this.ko(e)}Uo(e){this.qo(e)}}/**
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
 */const Zt="WebChannelConnection";class CV extends RV{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,a,s){const l=bg();return new Promise((c,d)=>{const p=new tS;p.setWithCredentials(!0),p.listenOnce(nS.COMPLETE,()=>{try{switch(p.getLastErrorCode()){case Bf.NO_ERROR:const _=p.getResponseJson();ce(Zt,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case Bf.TIMEOUT:ce(Zt,`RPC '${e}' ${l} timed out`),d(new fe(ee.DEADLINE_EXCEEDED,"Request time out"));break;case Bf.HTTP_ERROR:const b=p.getStatus();if(ce(Zt,`RPC '${e}' ${l} failed with status:`,b,"response text:",p.getResponseText()),b>0){let w=p.getResponseJson();Array.isArray(w)&&(w=w[0]);const N=w==null?void 0:w.error;if(N&&N.status&&N.message){const x=function(k){const B=k.toLowerCase().replace(/_/g,"-");return Object.values(ee).indexOf(B)>=0?B:ee.UNKNOWN}(N.status);d(new fe(x,N.message))}else d(new fe(ee.UNKNOWN,"Server responded with status "+p.getStatus()))}else d(new fe(ee.UNAVAILABLE,"Connection failed."));break;default:Ae()}}finally{ce(Zt,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(s);ce(Zt,`RPC '${e}' ${l} sending request:`,s),p.send(t,"POST",g,a,15)})}Wo(e,t,a){const s=bg(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=aS(),d=rS(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.useFetchStreams=!0),this.Do(p.initMessageHeaders,t,a),p.encodeInitMessageHeaders=!0;const _=l.join("");ce(Zt,`Creating RPC '${e}' stream ${s}: ${_}`,p);const b=c.createWebChannel(_,p);let w=!1,N=!1;const x=new IV({Fo:k=>{N?ce(Zt,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(w||(ce(Zt,`Opening RPC '${e}' stream ${s} transport.`),b.open(),w=!0),ce(Zt,`RPC '${e}' stream ${s} sending:`,k),b.send(k))},Mo:()=>b.close()}),H=(k,B,W)=>{k.listen(B,Q=>{try{W(Q)}catch(oe){setTimeout(()=>{throw oe},0)}})};return H(b,hu.EventType.OPEN,()=>{N||(ce(Zt,`RPC '${e}' stream ${s} transport opened.`),x.Qo())}),H(b,hu.EventType.CLOSE,()=>{N||(N=!0,ce(Zt,`RPC '${e}' stream ${s} transport closed`),x.Ko())}),H(b,hu.EventType.ERROR,k=>{N||(N=!0,Vo(Zt,`RPC '${e}' stream ${s} transport errored:`,k),x.Ko(new fe(ee.UNAVAILABLE,"The operation could not be completed")))}),H(b,hu.EventType.MESSAGE,k=>{var B;if(!N){const W=k.data[0];Ye(!!W);const Q=W,oe=(Q==null?void 0:Q.error)||((B=Q[0])===null||B===void 0?void 0:B.error);if(oe){ce(Zt,`RPC '${e}' stream ${s} received error:`,oe);const ae=oe.status;let Ee=function(R){const O=Tt[R];if(O!==void 0)return LS(O)}(ae),M=oe.message;Ee===void 0&&(Ee=ee.INTERNAL,M="Unknown error status: "+ae+" with message "+oe.message),N=!0,x.Ko(new fe(Ee,M)),b.close()}else ce(Zt,`RPC '${e}' stream ${s} received:`,W),x.Uo(W)}}),H(d,iS.STAT_EVENT,k=>{k.stat===cg.PROXY?ce(Zt,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===cg.NOPROXY&&ce(Zt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.$o()},0),x}}function Op(){return typeof document<"u"?document:null}/**
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
 */function $h(n){return new D4(n,!0)}/**
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
 */class WS{constructor(e,t,a=1e3,s=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=a,this.zo=s,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),a=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-a);s>0&&ce("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${a} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
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
 */const hb="PersistentStream";class ZS{constructor(e,t,a,s,l,c,d,p){this.Ti=e,this.n_=a,this.r_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=p,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new WS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ee.RESOURCE_EXHAUSTED?(vr(t.toString()),vr("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ee.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([a,s])=>{this.i_===t&&this.V_(a,s)},a=>{e(()=>{const s=new fe(ee.UNKNOWN,"Fetching auth token failed: "+a.message);return this.m_(s)})})}V_(e,t){const a=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{a(()=>this.listener.xo())}),this.stream.No(()=>{a(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{a(()=>this.m_(s))}),this.stream.onMessage(s=>{a(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return ce(hb,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(ce(hb,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class xV extends ZS{constructor(e,t,a,s,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,a,s,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=M4(this.serializer,e),a=function(l){if(!("targetChange"in l))return we.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?we.min():c.readTime?xi(c.readTime):we.min()}(e);return this.listener.p_(t,a)}y_(e){const t={};t.database=Eg(this.serializer),t.addTarget=function(l,c){let d;const p=c.target;if(d=mg(p)?{documents:U4(l,p)}:{query:j4(l,p).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=zS(l,c.resumeToken);const g=yg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(we.min())>0){d.readTime=mh(l,c.snapshotVersion.toTimestamp());const g=yg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const a=F4(this.serializer,e);a&&(t.labels=a),this.I_(t)}w_(e){const t={};t.database=Eg(this.serializer),t.removeTarget=e,this.I_(t)}}class NV extends ZS{constructor(e,t,a,s,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,a,s,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,Ye(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Ye(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=L4(e.writeResults,e.commitTime),a=xi(e.commitTime);return this.listener.v_(a,t)}C_(){const e={};e.database=Eg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(a=>V4(this.serializer,a))};this.I_(t)}}/**
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
 */class OV{}class DV extends OV{constructor(e,t,a,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=a,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new fe(ee.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,a,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,vg(t,a),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new fe(ee.UNKNOWN,l.toString())})}Co(e,t,a,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,vg(t,a),s,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ee.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new fe(ee.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class kV{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(vr(t),this.N_=!1):ce("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
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
 */const Ts="RemoteStore";class PV{constructor(e,t,a,s,l){this.localStore=e,this.datastore=t,this.asyncQueue=a,this.remoteSyncer={},this.K_=[],this.U_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{a.enqueueAndForget(async()=>{xs(this)&&(ce(Ts,"Restarting streams for network reachability change."),await async function(p){const g=Re(p);g.W_.add(4),await Xu(g),g.j_.set("Unknown"),g.W_.delete(4),await Yh(g)}(this))})}),this.j_=new kV(a,s)}}async function Yh(n){if(xs(n))for(const e of n.G_)await e(!0)}async function Xu(n){for(const e of n.G_)await e(!1)}function JS(n,e){const t=Re(n);t.U_.has(e.targetId)||(t.U_.set(e.targetId,e),Iy(t)?Ry(t):Wo(t).c_()&&Sy(t,e))}function wy(n,e){const t=Re(n),a=Wo(t);t.U_.delete(e),a.c_()&&e1(t,e),t.U_.size===0&&(a.c_()?a.P_():xs(t)&&t.j_.set("Unknown"))}function Sy(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(we.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Wo(n).y_(e)}function e1(n,e){n.H_.Ne(e),Wo(n).w_(e)}function Ry(n){n.H_=new C4({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.U_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),Wo(n).start(),n.j_.B_()}function Iy(n){return xs(n)&&!Wo(n).u_()&&n.U_.size>0}function xs(n){return Re(n).W_.size===0}function t1(n){n.H_=void 0}async function MV(n){n.j_.set("Online")}async function VV(n){n.U_.forEach((e,t)=>{Sy(n,e)})}async function LV(n,e){t1(n),Iy(n)?(n.j_.q_(e),Ry(n)):n.j_.set("Unknown")}async function UV(n,e,t){if(n.j_.set("Online"),e instanceof jS&&e.state===2&&e.cause)try{await async function(s,l){const c=l.cause;for(const d of l.targetIds)s.U_.has(d)&&(await s.remoteSyncer.rejectListen(d,c),s.U_.delete(d),s.H_.removeTarget(d))}(n,e)}catch(a){ce(Ts,"Failed to remove targets %s: %s ",e.targetIds.join(","),a),await gh(n,a)}else if(e instanceof Kf?n.H_.We(e):e instanceof US?n.H_.Ze(e):n.H_.je(e),!t.isEqual(we.min()))try{const a=await XS(n.localStore);t.compareTo(a)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const _=l.U_.get(g);_&&l.U_.set(g,_.withResumeToken(p.resumeToken,c))}}),d.targetMismatches.forEach((p,g)=>{const _=l.U_.get(p);if(!_)return;l.U_.set(p,_.withResumeToken(Yt.EMPTY_BYTE_STRING,_.snapshotVersion)),e1(l,p);const b=new fa(_.target,p,g,_.sequenceNumber);Sy(l,b)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(a){ce(Ts,"Failed to raise snapshot:",a),await gh(n,a)}}async function gh(n,e,t){if(!Xo(e))throw e;n.W_.add(1),await Xu(n),n.j_.set("Offline"),t||(t=()=>XS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{ce(Ts,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await Yh(n)})}function n1(n,e){return e().catch(t=>gh(n,t,e))}async function Qh(n){const e=Re(n),t=Ia(e);let a=e.K_.length>0?e.K_[e.K_.length-1].batchId:cy;for(;jV(e);)try{const s=await EV(e.localStore,a);if(s===null){e.K_.length===0&&t.P_();break}a=s.batchId,zV(e,s)}catch(s){await gh(e,s)}i1(e)&&r1(e)}function jV(n){return xs(n)&&n.K_.length<10}function zV(n,e){n.K_.push(e);const t=Ia(n);t.c_()&&t.S_&&t.b_(e.mutations)}function i1(n){return xs(n)&&!Ia(n).u_()&&n.K_.length>0}function r1(n){Ia(n).start()}async function FV(n){Ia(n).C_()}async function BV(n){const e=Ia(n);for(const t of n.K_)e.b_(t.mutations)}async function qV(n,e,t){const a=n.K_.shift(),s=yy.from(a,e,t);await n1(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Qh(n)}async function HV(n,e){e&&Ia(n).S_&&await async function(a,s){if(function(c){return S4(c)&&c!==ee.ABORTED}(s.code)){const l=a.K_.shift();Ia(a).h_(),await n1(a,()=>a.remoteSyncer.rejectFailedWrite(l.batchId,s)),await Qh(a)}}(n,e),i1(n)&&r1(n)}async function db(n,e){const t=Re(n);t.asyncQueue.verifyOperationInProgress(),ce(Ts,"RemoteStore received new credentials");const a=xs(t);t.W_.add(3),await Xu(t),a&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await Yh(t)}async function GV(n,e){const t=Re(n);e?(t.W_.delete(2),await Yh(t)):e||(t.W_.add(2),await Xu(t),t.j_.set("Unknown"))}function Wo(n){return n.J_||(n.J_=function(t,a,s){const l=Re(t);return l.M_(),new xV(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{xo:MV.bind(null,n),No:VV.bind(null,n),Lo:LV.bind(null,n),p_:UV.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Iy(n)?Ry(n):n.j_.set("Unknown")):(await n.J_.stop(),t1(n))})),n.J_}function Ia(n){return n.Y_||(n.Y_=function(t,a,s){const l=Re(t);return l.M_(),new NV(a,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:FV.bind(null,n),Lo:HV.bind(null,n),D_:BV.bind(null,n),v_:qV.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await Qh(n)):(await n.Y_.stop(),n.K_.length>0&&(ce(Ts,`Stopping write stream with ${n.K_.length} pending writes`),n.K_=[]))})),n.Y_}/**
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
 */class Cy{constructor(e,t,a,s,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=a,this.op=s,this.removalCallback=l,this.deferred=new ya,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,a,s,l){const c=Date.now()+a,d=new Cy(e,t,c,s,l);return d.start(a),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new fe(ee.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xy(n,e){if(vr("AsyncQueue",`${e}: ${n}`),Xo(n))return new fe(ee.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Do{static emptySet(e){return new Do(e.comparator)}constructor(e){this.comparator=e?(t,a)=>e(t,a)||ve.comparator(t.key,a.key):(t,a)=>ve.comparator(t.key,a.key),this.keyedMap=du(),this.sortedSet=new ot(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,a)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Do)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),a=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=a.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const a=new Do;return a.comparator=this.comparator,a.keyedMap=e,a.sortedSet=t,a}}/**
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
 */class mb{constructor(){this.Z_=new ot(ve.comparator)}track(e){const t=e.doc.key,a=this.Z_.get(t);a?e.type!==0&&a.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&a.type!==1?this.Z_=this.Z_.insert(t,{type:a.type,doc:e.doc}):e.type===2&&a.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&a.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&a.type===0?this.Z_=this.Z_.remove(t):e.type===1&&a.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:a.doc}):e.type===0&&a.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Ae():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,a)=>{e.push(a)}),e}}class Fo{constructor(e,t,a,s,l,c,d,p,g){this.query=e,this.docs=t,this.oldDocs=a,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,a,s,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new Fo(e,t,Do.emptySet(t),c,a,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Bh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,a=e.docChanges;if(t.length!==a.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==a[s].type||!t[s].doc.isEqual(a[s].doc))return!1;return!0}}/**
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
 */class KV{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class $V{constructor(){this.queries=pb(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,a){const s=Re(t),l=s.queries;s.queries=pb(),l.forEach((c,d)=>{for(const p of d.ta)p.onError(a)})})(this,new fe(ee.ABORTED,"Firestore shutting down"))}}function pb(){return new Cs(n=>SS(n),Bh)}async function a1(n,e){const t=Re(n);let a=3;const s=e.query;let l=t.queries.get(s);l?!l.na()&&e.ra()&&(a=2):(l=new KV,a=e.ra()?0:1);try{switch(a){case 0:l.ea=await t.onListen(s,!0);break;case 1:l.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(c){const d=xy(c,`Initialization of query '${bo(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Ny(t)}async function s1(n,e){const t=Re(n),a=e.query;let s=3;const l=t.queries.get(a);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?s=e.ra()?0:1:!l.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(a),t.onUnlisten(a,!0);case 1:return t.queries.delete(a),t.onUnlisten(a,!1);case 2:return t.onLastRemoteStoreUnlisten(a);default:return}}function YV(n,e){const t=Re(n);let a=!1;for(const s of e){const l=s.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(s)&&(a=!0);c.ea=s}}a&&Ny(t)}function QV(n,e,t){const a=Re(n),s=a.queries.get(e);if(s)for(const l of s.ta)l.onError(t);a.queries.delete(e)}function Ny(n){n.ia.forEach(e=>{e.next()})}var Ag,gb;(gb=Ag||(Ag={}))._a="default",gb.Cache="cache";class o1{constructor(e,t,a){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=a||{}}oa(e){if(!this.options.includeMetadataChanges){const a=[];for(const s of e.docChanges)s.type!==3&&a.push(s);e=new Fo(e.query,e.docs,e.oldDocs,a,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const a=t!=="Offline";return(!this.options.Ta||!a)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=Fo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==Ag.Cache}}/**
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
 */class l1{constructor(e){this.key=e}}class u1{constructor(e){this.key=e}}class XV{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Me(),this.mutatedKeys=Me(),this.ya=RS(e),this.wa=new Do(this.ya)}get Sa(){return this.fa}ba(e,t){const a=t?t.Da:new mb,s=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=s,d=!1;const p=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,b)=>{const w=s.get(_),N=qh(this.query,b)?b:null,x=!!w&&this.mutatedKeys.has(w.key),H=!!N&&(N.hasLocalMutations||this.mutatedKeys.has(N.key)&&N.hasCommittedMutations);let k=!1;w&&N?w.data.isEqual(N.data)?x!==H&&(a.track({type:3,doc:N}),k=!0):this.va(w,N)||(a.track({type:2,doc:N}),k=!0,(p&&this.ya(N,p)>0||g&&this.ya(N,g)<0)&&(d=!0)):!w&&N?(a.track({type:0,doc:N}),k=!0):w&&!N&&(a.track({type:1,doc:w}),k=!0,(p||g)&&(d=!0)),k&&(N?(c=c.add(N),l=H?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),a.track({type:1,doc:_})}return{wa:c,Da:a,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,a,s){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((_,b)=>function(N,x){const H=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Ae()}};return H(N)-H(x)}(_.type,b.type)||this.ya(_.doc,b.doc)),this.Ca(a),s=s!=null&&s;const d=t&&!s?this.Fa():[],p=this.pa.size===0&&this.current&&!s?1:0,g=p!==this.ga;return this.ga=p,c.length!==0||g?{snapshot:new Fo(this.query,e.wa,l,c,e.mutatedKeys,p===0,g,!1,!!a&&a.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new mb,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Me(),this.wa.forEach(a=>{this.xa(a.key)&&(this.pa=this.pa.add(a.key))});const t=[];return e.forEach(a=>{this.pa.has(a)||t.push(new u1(a))}),this.pa.forEach(a=>{e.has(a)||t.push(new l1(a))}),t}Oa(e){this.fa=e.gs,this.pa=Me();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return Fo.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Oy="SyncEngine";class WV{constructor(e,t,a){this.query=e,this.targetId=t,this.view=a}}class ZV{constructor(e){this.key=e,this.Ba=!1}}class JV{constructor(e,t,a,s,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=a,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Cs(d=>SS(d),Bh),this.qa=new Map,this.Qa=new Set,this.$a=new ot(ve.comparator),this.Ka=new Map,this.Ua=new Ey,this.Wa={},this.Ga=new Map,this.za=zo.Un(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function eL(n,e,t=!0){const a=p1(n);let s;const l=a.ka.get(e);return l?(a.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.Na()):s=await c1(a,e,t,!0),s}async function tL(n,e){const t=p1(n);await c1(t,e,!0,!1)}async function c1(n,e,t,a){const s=await TV(n.localStore,Ci(e)),l=s.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return a&&(d=await nL(n,e,l,c==="current",s.resumeToken)),n.isPrimaryClient&&t&&JS(n.remoteStore,s),d}async function nL(n,e,t,a,s){n.Ha=(b,w,N)=>async function(H,k,B,W){let Q=k.view.ba(B);Q.ls&&(Q=await lb(H.localStore,k.query,!1).then(({documents:M})=>k.view.ba(M,Q)));const oe=W&&W.targetChanges.get(k.targetId),ae=W&&W.targetMismatches.get(k.targetId)!=null,Ee=k.view.applyChanges(Q,H.isPrimaryClient,oe,ae);return vb(H,k.targetId,Ee.Ma),Ee.snapshot}(n,b,w,N);const l=await lb(n.localStore,e,!0),c=new XV(e,l.gs),d=c.ba(l.documents),p=Qu.createSynthesizedTargetChangeForCurrentChange(t,a&&n.onlineState!=="Offline",s),g=c.applyChanges(d,n.isPrimaryClient,p);vb(n,t,g.Ma);const _=new WV(e,t,c);return n.ka.set(e,_),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),g.snapshot}async function iL(n,e,t){const a=Re(n),s=a.ka.get(e),l=a.qa.get(s.targetId);if(l.length>1)return a.qa.set(s.targetId,l.filter(c=>!Bh(c,e))),void a.ka.delete(e);a.isPrimaryClient?(a.sharedClientState.removeLocalQueryTarget(s.targetId),a.sharedClientState.isActiveQueryTarget(s.targetId)||await Tg(a.localStore,s.targetId,!1).then(()=>{a.sharedClientState.clearQueryState(s.targetId),t&&wy(a.remoteStore,s.targetId),wg(a,s.targetId)}).catch(Qo)):(wg(a,s.targetId),await Tg(a.localStore,s.targetId,!0))}async function rL(n,e){const t=Re(n),a=t.ka.get(e),s=t.qa.get(a.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(a.targetId),wy(t.remoteStore,a.targetId))}async function aL(n,e,t){const a=hL(n);try{const s=await function(c,d){const p=Re(c),g=Dt.now(),_=d.reduce((N,x)=>N.add(x.key),Me());let b,w;return p.persistence.runTransaction("Locally write mutations","readwrite",N=>{let x=_r(),H=Me();return p.ds.getEntries(N,_).next(k=>{x=k,x.forEach((B,W)=>{W.isValidDocument()||(H=H.add(B))})}).next(()=>p.localDocuments.getOverlayedDocuments(N,x)).next(k=>{b=k;const B=[];for(const W of d){const Q=E4(W,b.get(W.key).overlayedDocument);Q!=null&&B.push(new Da(W.key,Q,yS(Q.value.mapValue),ni.exists(!0)))}return p.mutationQueue.addMutationBatch(N,g,B,d)}).next(k=>{w=k;const B=k.applyToLocalDocumentSet(b,H);return p.documentOverlayCache.saveOverlays(N,k.batchId,B)})}).then(()=>({batchId:w.batchId,changes:CS(b)}))}(a.localStore,e);a.sharedClientState.addPendingMutation(s.batchId),function(c,d,p){let g=c.Wa[c.currentUser.toKey()];g||(g=new ot(Le)),g=g.insert(d,p),c.Wa[c.currentUser.toKey()]=g}(a,s.batchId,t),await Wu(a,s.changes),await Qh(a.remoteStore)}catch(s){const l=xy(s,"Failed to persist write");t.reject(l)}}async function f1(n,e){const t=Re(n);try{const a=await vV(t.localStore,e);e.targetChanges.forEach((s,l)=>{const c=t.Ka.get(l);c&&(Ye(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?c.Ba=!0:s.modifiedDocuments.size>0?Ye(c.Ba):s.removedDocuments.size>0&&(Ye(c.Ba),c.Ba=!1))}),await Wu(t,a,e)}catch(a){await Qo(a)}}function yb(n,e,t){const a=Re(n);if(a.isPrimaryClient&&t===0||!a.isPrimaryClient&&t===1){const s=[];a.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&s.push(d.snapshot)}),function(c,d){const p=Re(c);p.onlineState=d;let g=!1;p.queries.forEach((_,b)=>{for(const w of b.ta)w.sa(d)&&(g=!0)}),g&&Ny(p)}(a.eventManager,e),s.length&&a.La.p_(s),a.onlineState=e,a.isPrimaryClient&&a.sharedClientState.setOnlineState(e)}}async function sL(n,e,t){const a=Re(n);a.sharedClientState.updateQueryState(e,"rejected",t);const s=a.Ka.get(e),l=s&&s.key;if(l){let c=new ot(ve.comparator);c=c.insert(l,en.newNoDocument(l,we.min()));const d=Me().add(l),p=new Kh(we.min(),new Map,new ot(Le),c,d);await f1(a,p),a.$a=a.$a.remove(l),a.Ka.delete(e),Dy(a)}else await Tg(a.localStore,e,!1).then(()=>wg(a,e,t)).catch(Qo)}async function oL(n,e){const t=Re(n),a=e.batch.batchId;try{const s=await yV(t.localStore,e);d1(t,a,null),h1(t,a),t.sharedClientState.updateMutationState(a,"acknowledged"),await Wu(t,s)}catch(s){await Qo(s)}}async function lL(n,e,t){const a=Re(n);try{const s=await function(c,d){const p=Re(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return p.mutationQueue.lookupMutationBatch(g,d).next(b=>(Ye(b!==null),_=b.keys(),p.mutationQueue.removeMutationBatch(g,b))).next(()=>p.mutationQueue.performConsistencyCheck(g)).next(()=>p.documentOverlayCache.removeOverlaysForBatchId(g,_,d)).next(()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>p.localDocuments.getDocuments(g,_))})}(a.localStore,e);d1(a,e,t),h1(a,e),a.sharedClientState.updateMutationState(e,"rejected",t),await Wu(a,s)}catch(s){await Qo(s)}}function h1(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function d1(n,e,t){const a=Re(n);let s=a.Wa[a.currentUser.toKey()];if(s){const l=s.get(e);l&&(t?l.reject(t):l.resolve(),s=s.remove(e)),a.Wa[a.currentUser.toKey()]=s}}function wg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const a of n.qa.get(e))n.ka.delete(a),t&&n.La.Ja(a,t);n.qa.delete(e),n.isPrimaryClient&&n.Ua.br(e).forEach(a=>{n.Ua.containsKey(a)||m1(n,a)})}function m1(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(wy(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ka.delete(t),Dy(n))}function vb(n,e,t){for(const a of t)a instanceof l1?(n.Ua.addReference(a.key,e),uL(n,a)):a instanceof u1?(ce(Oy,"Document no longer in limbo: "+a.key),n.Ua.removeReference(a.key,e),n.Ua.containsKey(a.key)||m1(n,a.key)):Ae()}function uL(n,e){const t=e.key,a=t.path.canonicalString();n.$a.get(t)||n.Qa.has(a)||(ce(Oy,"New document in limbo: "+t),n.Qa.add(a),Dy(n))}function Dy(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new ve(tt.fromString(e)),a=n.za.next();n.Ka.set(a,new ZV(t)),n.$a=n.$a.insert(t,a),JS(n.remoteStore,new fa(Ci(Fh(t.path)),a,"TargetPurposeLimboResolution",Uh.ae))}}async function Wu(n,e,t){const a=Re(n),s=[],l=[],c=[];a.ka.isEmpty()||(a.ka.forEach((d,p)=>{c.push(a.Ha(p,e,t).then(g=>{var _;if((g||t)&&a.isPrimaryClient){const b=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(p.targetId))===null||_===void 0?void 0:_.current;a.sharedClientState.updateQueryState(p.targetId,b?"current":"not-current")}if(g){s.push(g);const b=by.Yi(p.targetId,g);l.push(b)}}))}),await Promise.all(c),a.La.p_(s),await async function(p,g){const _=Re(p);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",b=>J.forEach(g,w=>J.forEach(w.Hi,N=>_.persistence.referenceDelegate.addReference(b,w.targetId,N)).next(()=>J.forEach(w.Ji,N=>_.persistence.referenceDelegate.removeReference(b,w.targetId,N)))))}catch(b){if(!Xo(b))throw b;ce(Ay,"Failed to update sequence numbers: "+b)}for(const b of g){const w=b.targetId;if(!b.fromCache){const N=_.Ts.get(w),x=N.snapshotVersion,H=N.withLastLimboFreeSnapshotVersion(x);_.Ts=_.Ts.insert(w,H)}}}(a.localStore,l))}async function cL(n,e){const t=Re(n);if(!t.currentUser.isEqual(e)){ce(Oy,"User change. New user:",e.toKey());const a=await QS(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(p=>{p.reject(new fe(ee.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,a.removedBatchIds,a.addedBatchIds),await Wu(t,a.Rs)}}function fL(n,e){const t=Re(n),a=t.Ka.get(e);if(a&&a.Ba)return Me().add(a.key);{let s=Me();const l=t.qa.get(e);if(!l)return s;for(const c of l){const d=t.ka.get(c);s=s.unionWith(d.view.Sa)}return s}}function p1(n){const e=Re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=f1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fL.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sL.bind(null,e),e.La.p_=YV.bind(null,e.eventManager),e.La.Ja=QV.bind(null,e.eventManager),e}function hL(n){const e=Re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oL.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=lL.bind(null,e),e}class yh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=$h(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return gV(this.persistence,new dV,e.initialUser,this.serializer)}Xa(e){return new YS(Ty.ri,this.serializer)}Za(e){return new AV}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}yh.provider={build:()=>new yh};class dL extends yh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Ye(this.persistence.referenceDelegate instanceof ph);const a=this.persistence.referenceDelegate.garbageCollector;return new Z4(a,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?mn.withCacheSize(this.cacheSizeBytes):mn.DEFAULT;return new YS(a=>ph.ri(a,t),this.serializer)}}class Sg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=a=>yb(this.syncEngine,a,1),this.remoteStore.remoteSyncer.handleCredentialChange=cL.bind(null,this.syncEngine),await GV(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new $V}()}createDatastore(e){const t=$h(e.databaseInfo.databaseId),a=function(l){return new CV(l)}(e.databaseInfo);return function(l,c,d,p){return new DV(l,c,d,p)}(e.authCredentials,e.appCheckCredentials,a,t)}createRemoteStore(e){return function(a,s,l,c,d){return new PV(a,s,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>yb(this.syncEngine,t,0),function(){return fb.D()?new fb:new wV}())}createSyncEngine(e,t){return function(s,l,c,d,p,g,_){const b=new JV(s,l,c,d,p,g);return _&&(b.ja=!0),b}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const l=Re(s);ce(Ts,"RemoteStore shutting down."),l.W_.add(5),await Xu(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Sg.provider={build:()=>new Sg};/**
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
 */class g1{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):vr("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const Ca="FirestoreClient";class mL{constructor(e,t,a,s,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=a,this.databaseInfo=s,this.user=Jt.UNAUTHENTICATED,this.clientId=oS.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(a,async c=>{ce(Ca,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(a,c=>(ce(Ca,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ya;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const a=xy(t,"Failed to shutdown persistence");e.reject(a)}}),e.promise}}async function Dp(n,e){n.asyncQueue.verifyOperationInProgress(),ce(Ca,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let a=t.initialUser;n.setCredentialChangeListener(async s=>{a.isEqual(s)||(await QS(e.localStore,s),a=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function _b(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pL(n);ce(Ca,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(a=>db(e.remoteStore,a)),n.setAppCheckTokenChangeListener((a,s)=>db(e.remoteStore,s)),n._onlineComponents=e}async function pL(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){ce(Ca,"Using user provided OfflineComponentProvider");try{await Dp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===ee.FAILED_PRECONDITION||s.code===ee.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Vo("Error using user provided cache. Falling back to memory cache: "+t),await Dp(n,new yh)}}else ce(Ca,"Using default OfflineComponentProvider"),await Dp(n,new dL(void 0));return n._offlineComponents}async function y1(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(ce(Ca,"Using user provided OnlineComponentProvider"),await _b(n,n._uninitializedComponentsProvider._online)):(ce(Ca,"Using default OnlineComponentProvider"),await _b(n,new Sg))),n._onlineComponents}function gL(n){return y1(n).then(e=>e.syncEngine)}async function Rg(n){const e=await y1(n),t=e.eventManager;return t.onListen=eL.bind(null,e.syncEngine),t.onUnlisten=iL.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=tL.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rL.bind(null,e.syncEngine),t}function yL(n,e,t={}){const a=new ya;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,p,g){const _=new g1({next:w=>{_.su(),c.enqueueAndForget(()=>s1(l,b));const N=w.docs.has(d);!N&&w.fromCache?g.reject(new fe(ee.UNAVAILABLE,"Failed to get document because the client is offline.")):N&&w.fromCache&&p&&p.source==="server"?g.reject(new fe(ee.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),b=new o1(Fh(d.path),_,{includeMetadataChanges:!0,Ta:!0});return a1(l,b)}(await Rg(n),n.asyncQueue,e,t,a)),a.promise}/**
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
 */function v1(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Eb=new Map;/**
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
 */function _1(n,e,t){if(!t)throw new fe(ee.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function vL(n,e,t,a){if(e===!0&&a===!0)throw new fe(ee.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Tb(n){if(!ve.isDocumentKey(n))throw new fe(ee.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function bb(n){if(ve.isDocumentKey(n))throw new fe(ee.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Xh(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(a){return a.constructor?a.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Ae()}function Ni(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new fe(ee.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Xh(n);throw new fe(ee.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */const E1="firestore.googleapis.com",Ab=!0;class wb{constructor(e){var t,a;if(e.host===void 0){if(e.ssl!==void 0)throw new fe(ee.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=E1,this.ssl=Ab}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Ab;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=$S;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<X4)throw new fe(ee.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}vL("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=v1((a=e.experimentalLongPollingOptions)!==null&&a!==void 0?a:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new fe(ee.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(a,s){return a.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Wh{constructor(e,t,a,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=a,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new wb({}),this._settingsFrozen=!1,this._terminateTask="notTerminated"}get app(){if(!this._app)throw new fe(ee.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new fe(ee.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new wb(e),e.credentials!==void 0&&(this._authCredentials=function(a){if(!a)return new IM;switch(a.type){case"firstParty":return new OM(a.sessionIndex||"0",a.iamToken||null,a.authTokenFactory||null);case"provider":return a.client;default:throw new fe(ee.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const a=Eb.get(t);a&&(ce("ComponentProvider","Removing Datastore"),Eb.delete(t),a.terminate())}(this),Promise.resolve()}}function _L(n,e,t,a={}){var s;const l=(n=Ni(n,Wh))._getSettings(),c=`${e}:${t}`;if(l.host!==E1&&l.host!==c&&Vo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),a.mockUserToken){let d,p;if(typeof a.mockUserToken=="string")d=a.mockUserToken,p=Jt.MOCK_USER;else{d=bN(a.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const g=a.mockUserToken.sub||a.mockUserToken.user_id;if(!g)throw new fe(ee.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Jt(g)}n._authCredentials=new CM(new sS(d,p))}}/**
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
 */class Zo{constructor(e,t,a){this.converter=t,this._query=a,this.type="query",this.firestore=e}withConverter(e){return new Zo(this.firestore,e,this._query)}}class cn{constructor(e,t,a){this.converter=t,this._key=a,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new va(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new cn(this.firestore,e,this._key)}}class va extends Zo{constructor(e,t,a){super(e,t,Fh(a)),this._path=a,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new cn(this.firestore,null,new ve(e))}withConverter(e){return new va(this.firestore,e,this._path)}}function Zu(n,e,...t){if(n=wt(n),_1("collection","path",e),n instanceof Wh){const a=tt.fromString(e,...t);return bb(a),new va(n,null,a)}{if(!(n instanceof cn||n instanceof va))throw new fe(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(tt.fromString(e,...t));return bb(a),new va(n.firestore,null,a)}}function ki(n,e,...t){if(n=wt(n),arguments.length===1&&(e=oS.newId()),_1("doc","path",e),n instanceof Wh){const a=tt.fromString(e,...t);return Tb(a),new cn(n,null,new ve(a))}{if(!(n instanceof cn||n instanceof va))throw new fe(ee.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const a=n._path.child(tt.fromString(e,...t));return Tb(a),new cn(n.firestore,n instanceof va?n.converter:null,new ve(a))}}/**
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
 */const Sb="AsyncQueue";class Rb{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new WS(this,"async_queue_retry"),this.Su=()=>{const a=Op();a&&ce(Sb,"Visibility state changed to "+a.visibilityState),this.a_.t_()},this.bu=e;const t=Op();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=Op();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new ya;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!Xo(e))throw e;ce(Sb,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(a=>{this.gu=a,this.pu=!1;const s=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(a);throw vr("INTERNAL UNHANDLED ERROR: ",s),a}).then(a=>(this.pu=!1,a))));return this.bu=t,t}enqueueAfterDelay(e,t,a){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Cy.createAndSchedule(this,e,t,a,l=>this.Fu(l));return this.fu.push(s),s}Du(){this.gu&&Ae()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,a)=>t.targetTimeMs-a.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function Ib(n){return function(t,a){if(typeof t!="object"||t===null)return!1;const s=t;for(const l of a)if(l in s&&typeof s[l]=="function")return!0;return!1}(n,["next","error","complete"])}class bs extends Wh{constructor(e,t,a,s){super(e,t,a,s),this.type="firestore",this._queue=new Rb,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Rb(e),this._firestoreClient=void 0,await e}}}function EL(n,e){const t=typeof n=="object"?n:Yg(),a=typeof n=="string"?n:lh,s=Ss(t,"firestore").getImmediate({identifier:a});if(!s._initialized){const l=EN("firestore");l&&_L(s,...l)}return s}function ky(n){if(n._terminated)throw new fe(ee.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TL(n),n._firestoreClient}function TL(n){var e,t,a;const s=n._freezeSettings(),l=function(d,p,g,_){return new GM(d,p,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,v1(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((a=s.localCache)===null||a===void 0)&&a._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new mL(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const p=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(p),_online:p}}(n._componentsProvider))}/**
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
 */class Bo{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bo(Yt.fromBase64String(e))}catch(t){throw new fe(ee.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Bo(Yt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Zh{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new fe(ee.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Py{constructor(e){this._methodName=e}}/**
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
 */class My{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new fe(ee.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new fe(ee.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Le(this._lat,e._lat)||Le(this._long,e._long)}}/**
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
 */class Vy{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(a,s){if(a.length!==s.length)return!1;for(let l=0;l<a.length;++l)if(a[l]!==s[l])return!1;return!0}(this._values,e._values)}}/**
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
 */const bL=/^__.*__$/;class AL{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return this.fieldMask!==null?new Da(e,this.data,this.fieldMask,t,this.fieldTransforms):new Yu(e,this.data,t,this.fieldTransforms)}}class T1{constructor(e,t,a){this.data=e,this.fieldMask=t,this.fieldTransforms=a}toMutation(e,t){return new Da(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function b1(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Ae()}}class Ly{constructor(e,t,a,s,l,c){this.settings=e,this.databaseId=t,this.serializer=a,this.ignoreUndefinedProperties=s,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new Ly(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:a,Qu:!1});return s.$u(e),s}Ku(e){var t;const a=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:a,Qu:!1});return s.Bu(),s}Uu(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return vh(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(b1(this.Lu)&&bL.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class wL{constructor(e,t,a){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=a||$h(e)}ju(e,t,a,s=!1){return new Ly({Lu:e,methodName:t,zu:a,path:$t.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Uy(n){const e=n._freezeSettings(),t=$h(n._databaseId);return new wL(n._databaseId,!!e.ignoreUndefinedProperties,t)}function SL(n,e,t,a,s,l={}){const c=n.ju(l.merge||l.mergeFields?2:0,e,t,s);jy("Data must be an object, but it was:",c,a);const d=A1(a,c);let p,g;if(l.merge)p=new Rn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const _=[];for(const b of l.mergeFields){const w=Ig(e,b,t);if(!c.contains(w))throw new fe(ee.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);S1(_,w)||_.push(w)}p=new Rn(_),g=c.fieldTransforms.filter(b=>p.covers(b.field))}else p=null,g=c.fieldTransforms;return new AL(new pn(d),p,g)}class Jh extends Py{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Jh}}function RL(n,e,t,a){const s=n.ju(1,e,t);jy("Data must be an object, but it was:",s,a);const l=[],c=pn.empty();Oa(a,(p,g)=>{const _=zy(e,p,t);g=wt(g);const b=s.Ku(_);if(g instanceof Jh)l.push(_);else{const w=Ju(g,b);w!=null&&(l.push(_),c.set(_,w))}});const d=new Rn(l);return new T1(c,d,s.fieldTransforms)}function IL(n,e,t,a,s,l){const c=n.ju(1,e,t),d=[Ig(e,a,t)],p=[s];if(l.length%2!=0)throw new fe(ee.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(Ig(e,l[w])),p.push(l[w+1]);const g=[],_=pn.empty();for(let w=d.length-1;w>=0;--w)if(!S1(g,d[w])){const N=d[w];let x=p[w];x=wt(x);const H=c.Ku(N);if(x instanceof Jh)g.push(N);else{const k=Ju(x,H);k!=null&&(g.push(N),_.set(N,k))}}const b=new Rn(g);return new T1(_,b,c.fieldTransforms)}function CL(n,e,t,a=!1){return Ju(t,n.ju(a?4:3,e))}function Ju(n,e){if(w1(n=wt(n)))return jy("Unsupported field value:",e,n),A1(n,e);if(n instanceof Py)return function(a,s){if(!b1(s.Lu))throw s.Wu(`${a._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${a._methodName}() is not currently supported inside arrays`);const l=a._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(a,s){const l=[];let c=0;for(const d of a){let p=Ju(d,s.Uu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}}(n,e)}return function(a,s){if((a=wt(a))===null)return{nullValue:"NULL_VALUE"};if(typeof a=="number")return m4(s.serializer,a);if(typeof a=="boolean")return{booleanValue:a};if(typeof a=="string")return{stringValue:a};if(a instanceof Date){const l=Dt.fromDate(a);return{timestampValue:mh(s.serializer,l)}}if(a instanceof Dt){const l=new Dt(a.seconds,1e3*Math.floor(a.nanoseconds/1e3));return{timestampValue:mh(s.serializer,l)}}if(a instanceof My)return{geoPointValue:{latitude:a.latitude,longitude:a.longitude}};if(a instanceof Bo)return{bytesValue:zS(s.serializer,a._byteString)};if(a instanceof cn){const l=s.databaseId,c=a.firestore._databaseId;if(!c.isEqual(l))throw s.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:_y(a.firestore._databaseId||s.databaseId,a._key.path)}}if(a instanceof Vy)return function(c,d){return{mapValue:{fields:{[pS]:{stringValue:gS},[uh]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return py(d.serializer,g)})}}}}}}(a,s);throw s.Wu(`Unsupported field value: ${Xh(a)}`)}(n,e)}function A1(n,e){const t={};return uS(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Oa(n,(a,s)=>{const l=Ju(s,e.qu(a));l!=null&&(t[a]=l)}),{mapValue:{fields:t}}}function w1(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Dt||n instanceof My||n instanceof Bo||n instanceof cn||n instanceof Py||n instanceof Vy)}function jy(n,e,t){if(!w1(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const a=Xh(t);throw a==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+a)}}function Ig(n,e,t){if((e=wt(e))instanceof Zh)return e._internalPath;if(typeof e=="string")return zy(n,e);throw vh("Field path arguments must be of type string or ",n,!1,void 0,t)}const xL=new RegExp("[~\\*/\\[\\]]");function zy(n,e,t){if(e.search(xL)>=0)throw vh(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Zh(...e.split("."))._internalPath}catch{throw vh(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function vh(n,e,t,a,s){const l=a&&!a.isEmpty(),c=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${a}`),c&&(p+=` in document ${s}`),p+=")"),new fe(ee.INVALID_ARGUMENT,d+n+p)}function S1(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class R1{constructor(e,t,a,s,l){this._firestore=e,this._userDataWriter=t,this._key=a,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new cn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new NL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Fy("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class NL extends R1{data(){return super.data()}}function Fy(n,e){return typeof e=="string"?zy(n,e):e instanceof Zh?e._internalPath:e._delegate._internalPath}/**
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
 */function OL(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new fe(ee.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class By{}class DL extends By{}function ed(n,e,...t){let a=[];e instanceof By&&a.push(e),a=a.concat(t),function(l){const c=l.filter(p=>p instanceof qy).length,d=l.filter(p=>p instanceof td).length;if(c>1||c>0&&d>0)throw new fe(ee.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(a);for(const s of a)n=s._apply(n);return n}class td extends DL{constructor(e,t,a){super(),this._field=e,this._op=t,this._value=a,this.type="where"}static _create(e,t,a){return new td(e,t,a)}_apply(e){const t=this._parse(e);return I1(e._query,t),new Zo(e.firestore,e.converter,pg(e._query,t))}_parse(e){const t=Uy(e.firestore);return function(l,c,d,p,g,_,b){let w;if(g.isKeyField()){if(_==="array-contains"||_==="array-contains-any")throw new fe(ee.INVALID_ARGUMENT,`Invalid Query. You can't perform '${_}' queries on documentId().`);if(_==="in"||_==="not-in"){xb(b,_);const x=[];for(const H of b)x.push(Cb(p,l,H));w={arrayValue:{values:x}}}else w=Cb(p,l,b)}else _!=="in"&&_!=="not-in"&&_!=="array-contains-any"||xb(b,_),w=CL(d,c,b,_==="in"||_==="not-in");return bt.create(g,_,w)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function kL(n,e,t){const a=e,s=Fy("where",n);return td._create(s,a,t)}class qy extends By{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new qy(e,t)}_parse(e){const t=this._queryConstraints.map(a=>a._parse(e)).filter(a=>a.getFilters().length>0);return t.length===1?t[0]:ai.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,l){let c=s;const d=l.getFlattenedFilters();for(const p of d)I1(c,p),c=pg(c,p)}(e._query,t),new Zo(e.firestore,e.converter,pg(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Cb(n,e,t){if(typeof(t=wt(t))=="string"){if(t==="")throw new fe(ee.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wS(e)&&t.indexOf("/")!==-1)throw new fe(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const a=e.path.child(tt.fromString(t));if(!ve.isDocumentKey(a))throw new fe(ee.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${a}' is not because it has an odd number of segments (${a.length}).`);return qT(n,new ve(a))}if(t instanceof cn)return qT(n,t._key);throw new fe(ee.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Xh(t)}.`)}function xb(n,e){if(!Array.isArray(n)||n.length===0)throw new fe(ee.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function I1(n,e){const t=function(s,l){for(const c of s)for(const d of c.getFlattenedFilters())if(l.indexOf(d.op)>=0)return d.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new fe(ee.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new fe(ee.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class PL{convertValue(e,t="none"){switch(Ra(e)){case 0:return null;case 1:return e.booleanValue;case 2:return pt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Sa(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Ae()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const a={};return Oa(e,(s,l)=>{a[s]=this.convertValue(l,t)}),a}convertVectorValue(e){var t,a,s;const l=(s=(a=(t=e.fields)===null||t===void 0?void 0:t[uh].arrayValue)===null||a===void 0?void 0:a.values)===null||s===void 0?void 0:s.map(c=>pt(c.doubleValue));return new Vy(l)}convertGeoPoint(e){return new My(pt(e.latitude),pt(e.longitude))}convertArray(e,t){return(e.values||[]).map(a=>this.convertValue(a,t))}convertServerTimestamp(e,t){switch(t){case"previous":const a=zh(e);return a==null?null:this.convertValue(a,t);case"estimate":return this.convertTimestamp(Du(e));default:return null}}convertTimestamp(e){const t=wa(e);return new Dt(t.seconds,t.nanos)}convertDocumentKey(e,t){const a=tt.fromString(e);Ye(KS(a));const s=new ku(a.get(1),a.get(3)),l=new ve(a.popFirst(5));return s.isEqual(t)||vr(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
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
 */function ML(n,e,t){let a;return a=n?n.toFirestore(e):e,a}/**
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
 */class pu{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C1 extends R1{constructor(e,t,a,s,l,c){super(e,t,a,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new $f(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const a=this._document.data.field(Fy("DocumentSnapshot.get",e));if(a!==null)return this._userDataWriter.convertValue(a,t.serverTimestamps)}}}class $f extends C1{data(e={}){return super.data(e)}}class VL{constructor(e,t,a,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new pu(s.hasPendingWrites,s.fromCache),this.query=a}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(a=>{e.call(t,new $f(this._firestore,this._userDataWriter,a.key,a,new pu(this._snapshot.mutatedKeys.has(a.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new fe(ee.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(d=>{const p=new $f(s._firestore,s._userDataWriter,d.doc.key,d.doc,new pu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const p=new $f(s._firestore,s._userDataWriter,d.doc.key,d.doc,new pu(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,_=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:LL(d.type),doc:p,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function LL(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Ae()}}/**
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
 */function x1(n){n=Ni(n,cn);const e=Ni(n.firestore,bs);return yL(ky(e),n._key).then(t=>D1(e,n,t))}class N1 extends PL{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bo(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new cn(this.firestore,null,t)}}function Lu(n,e,t,...a){n=Ni(n,cn);const s=Ni(n.firestore,bs),l=Uy(s);let c;return c=typeof(e=wt(e))=="string"||e instanceof Zh?IL(l,"updateDoc",n._key,e,t,a):RL(l,"updateDoc",n._key,e),Hy(s,[c.toMutation(n._key,ni.exists(!0))])}function O1(n){return Hy(Ni(n.firestore,bs),[new gy(n._key,ni.none())])}function UL(n,e){const t=Ni(n.firestore,bs),a=ki(n),s=ML(n.converter,e);return Hy(t,[SL(Uy(n.firestore),"addDoc",a._key,s,n.converter!==null,{}).toMutation(a._key,ni.exists(!1))]).then(()=>a)}function nd(n,...e){var t,a,s;n=wt(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||Ib(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(Ib(e[c])){const b=e[c];e[c]=(t=b.next)===null||t===void 0?void 0:t.bind(b),e[c+1]=(a=b.error)===null||a===void 0?void 0:a.bind(b),e[c+2]=(s=b.complete)===null||s===void 0?void 0:s.bind(b)}let p,g,_;if(n instanceof cn)g=Ni(n.firestore,bs),_=Fh(n._key.path),p={next:b=>{e[c]&&e[c](D1(g,n,b))},error:e[c+1],complete:e[c+2]};else{const b=Ni(n,Zo);g=Ni(b.firestore,bs),_=b._query;const w=new N1(g);p={next:N=>{e[c]&&e[c](new VL(g,w,b,N))},error:e[c+1],complete:e[c+2]},OL(n._query)}return function(w,N,x,H){const k=new g1(H),B=new o1(N,k,x);return w.asyncQueue.enqueueAndForget(async()=>a1(await Rg(w),B)),()=>{k.su(),w.asyncQueue.enqueueAndForget(async()=>s1(await Rg(w),B))}}(ky(g),_,d,p)}function Hy(n,e){return function(a,s){const l=new ya;return a.asyncQueue.enqueueAndForget(async()=>aL(await gL(a),s,l)),l.promise}(ky(n),e)}function D1(n,e,t){const a=t.docs.get(e._key),s=new N1(n);return new C1(n,s,e._key,a,new pu(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Yo=s})(Rs),ii(new $n("firestore",(a,{instanceIdentifier:s,options:l})=>{const c=a.getProvider("app").getImmediate(),d=new bs(new xM(a.getProvider("auth-internal")),new DM(c,a.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new fe(ee.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ku(g.options.projectId,_)}(c,s),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),gn(DT,kT,e),gn(DT,kT,"esm2017")})();/**
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
 */const k1="firebasestorage.googleapis.com",jL="storageBucket",zL=2*60*1e3,FL=10*60*1e3;/**
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
 */class Vi extends Yn{constructor(e,t,a=0){super(kp(e),`Firebase Storage: ${t} (${kp(e)})`),this.status_=a,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Vi.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return kp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Pi;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Pi||(Pi={}));function kp(n){return"storage/"+n}function BL(){const n="An unknown error occurred, please check the error payload for server response.";return new Vi(Pi.UNKNOWN,n)}function qL(){return new Vi(Pi.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function HL(){return new Vi(Pi.CANCELED,"User canceled the upload/download.")}function GL(n){return new Vi(Pi.INVALID_URL,"Invalid URL '"+n+"'.")}function KL(n){return new Vi(Pi.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function Nb(n){return new Vi(Pi.INVALID_ARGUMENT,n)}function P1(){return new Vi(Pi.APP_DELETED,"The Firebase app was deleted.")}function $L(n){return new Vi(Pi.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
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
 */class ti{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let a;try{a=ti.makeFromUrl(e,t)}catch{return new ti(e,"")}if(a.path==="")return a;throw KL(e)}static makeFromUrl(e,t){let a=null;const s="([A-Za-z0-9.\\-_]+)";function l(oe){oe.path.charAt(oe.path.length-1)==="/"&&(oe.path_=oe.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+s+c,"i"),p={bucket:1,path:3};function g(oe){oe.path_=decodeURIComponent(oe.path)}const _="v[A-Za-z0-9_]+",b=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",N=new RegExp(`^https?://${b}/${_}/b/${s}/o${w}`,"i"),x={bucket:1,path:3},H=t===k1?"(?:storage.googleapis.com|storage.cloud.google.com)":t,k="([^?#]*)",B=new RegExp(`^https?://${H}/${s}/${k}`,"i"),Q=[{regex:d,indices:p,postModify:l},{regex:N,indices:x,postModify:g},{regex:B,indices:{bucket:1,path:2},postModify:g}];for(let oe=0;oe<Q.length;oe++){const ae=Q[oe],Ee=ae.regex.exec(e);if(Ee){const M=Ee[ae.indices.bucket];let I=Ee[ae.indices.path];I||(I=""),a=new ti(M,I),ae.postModify(a);break}}if(a==null)throw GL(e);return a}}class YL{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function QL(n,e,t){let a=1,s=null,l=null,c=!1,d=0;function p(){return d===2}let g=!1;function _(...k){g||(g=!0,e.apply(null,k))}function b(k){s=setTimeout(()=>{s=null,n(N,p())},k)}function w(){l&&clearTimeout(l)}function N(k,...B){if(g){w();return}if(k){w(),_.call(null,k,...B);return}if(p()||c){w(),_.call(null,k,...B);return}a<64&&(a*=2);let Q;d===1?(d=2,Q=0):Q=(a+Math.random())*1e3,b(Q)}let x=!1;function H(k){x||(x=!0,w(),!g&&(s!==null?(k||(d=2),clearTimeout(s),b(0)):k||(d=1)))}return b(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function XL(n){n(!1)}/**
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
 */function WL(n){return n!==void 0}function Ob(n,e,t,a){if(a<e)throw Nb(`Invalid value for '${n}'. Expected ${e} or greater.`);if(a>t)throw Nb(`Invalid value for '${n}'. Expected ${t} or less.`)}function ZL(n){const e=encodeURIComponent;let t="?";for(const a in n)if(n.hasOwnProperty(a)){const s=e(a)+"="+e(n[a]);t=t+s+"&"}return t=t.slice(0,-1),t}var _h;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(_h||(_h={}));/**
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
 */function JL(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||s||l}/**
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
 */class e3{constructor(e,t,a,s,l,c,d,p,g,_,b,w=!0){this.url_=e,this.method_=t,this.headers_=a,this.body_=s,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=p,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=b,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((N,x)=>{this.resolve_=N,this.reject_=x,this.start_()})}start_(){const e=(a,s)=>{if(s){a(!1,new Df(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const p=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===_h.NO_ERROR,p=l.getStatus();if(!d||JL(p,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===_h.ABORT;a(!1,new Df(!1,null,_));return}const g=this.successCodes_.indexOf(p)!==-1;a(!0,new Df(g,l))})},t=(a,s)=>{const l=this.resolve_,c=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const p=this.callback_(d,d.getResponse());WL(p)?l(p):l()}catch(p){c(p)}else if(d!==null){const p=BL();p.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,p)):c(p)}else if(s.canceled){const p=this.appDelete_?P1():HL();c(p)}else{const p=qL();c(p)}};this.canceled_?t(!1,new Df(!1,null,!0)):this.backoffId_=QL(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&XL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Df{constructor(e,t,a){this.wasSuccessCode=e,this.connection=t,this.canceled=!!a}}function t3(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function n3(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function i3(n,e){e&&(n["X-Firebase-GMPID"]=e)}function r3(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function a3(n,e,t,a,s,l,c=!0){const d=ZL(n.urlParams),p=n.url+d,g=Object.assign({},n.headers);return i3(g,e),t3(g,t),n3(g,l),r3(g,a),new e3(p,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,c)}/**
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
 */function s3(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function o3(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
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
 */class Eh{constructor(e,t){this._service=e,t instanceof ti?this._location=t:this._location=ti.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Eh(e,t)}get root(){const e=new ti(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return o3(this._location.path)}get storage(){return this._service}get parent(){const e=s3(this._location.path);if(e===null)return null;const t=new ti(this._location.bucket,e);return new Eh(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw $L(e)}}function Db(n,e){const t=e==null?void 0:e[jL];return t==null?null:ti.makeFromBucketSpec(t,n)}class l3{constructor(e,t,a,s,l){this.app=e,this._authProvider=t,this._appCheckProvider=a,this._url=s,this._firebaseVersion=l,this._bucket=null,this._host=k1,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=zL,this._maxUploadRetryTime=FL,this._requests=new Set,s!=null?this._bucket=ti.makeFromBucketSpec(s,this._host):this._bucket=Db(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=ti.makeFromBucketSpec(this._url,e):this._bucket=Db(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Ob("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Ob("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(Kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Eh(this,e)}_makeRequest(e,t,a,s,l=!0){if(this._deleted)return new YL(P1());{const c=a3(e,this._appId,a,s,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[a,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,a,s).getPromise()}}const kb="@firebase/storage",Pb="0.13.6";/**
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
 */const u3="storage";function c3(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),a=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new l3(t,a,s,e,Rs)}function f3(){ii(new $n(u3,c3,"PUBLIC").setMultipleInstances(!0)),gn(kb,Pb,""),gn(kb,Pb,"esm2017")}f3();const h3={apiKey:"AIzaSyA6VzoQeQ7MhVnlh-vFjT8jdAFBmVYELd0",authDomain:"myndstake-admin.firebaseapp.com",projectId:"myndstake-admin",storageBucket:"myndstake-admin.firebasestorage.app",messagingSenderId:"741663298575",appId:"1:741663298575:web:aa284645c658c465747f7a",measurementId:"G-W377FY6VLL"},Gy=QA(h3);fk(Gy);const vn=EL(Gy),M1=SM(Gy),d3=async n=>{const e=ki(vn,"user details",n);try{const t=await x1(e);let a;return t.exists()?a=t.data():console.log("No such document!"),a}catch(t){throw new Error(t)}},m3=async n=>{const e=ki(vn,"admin details",n);try{const t=await x1(e);let a;return t.exists()?a=t.data():console.log("No such document!"),a}catch(t){throw new Error(t)}},V1=async n=>{try{await UL(Zu(vn,"content"),n)}catch(e){throw new Error(e)}},p3=async(n,e)=>{try{const t=ki(vn,"content",e);await Lu(t,n)}catch(t){throw new Error(t)}},g3=async n=>{try{await O1(ki(vn,"content",n))}catch(e){throw new Error(e)}},id=async n=>{try{const e=ki(vn,"payments",n);await Lu(e,{status:"Paid"})}catch(e){throw new Error(e)}},y3=async(n,e)=>{try{await Lu(ki(vn,"user details",e),{status:"Verified"}),await Lu(ki(vn,"documentations",n),{status:"Verified"})}catch(t){throw new Error(t)}},v3=async(n,e)=>{try{await O1(ki(vn,"documentations",n)),await Lu(ki(vn,"user details",e),{status:"Not verified"})}catch(t){throw new Error(t)}},_3=async(n,e)=>{try{const s=(await fP(M1,n,e)).user.uid,l=await m3(s);return localStorage.setItem("userId",s),localStorage.setItem("admin details",JSON.stringify(l)),{userId:s,data:l}}catch(t){throw new Error(t)}},E3=async()=>{try{await mP(M1),localStorage.removeItem("userId"),localStorage.removeItem("admin details")}catch(n){throw new Error(n)}};function T3(){const{updateDetails:n}=j.useContext(Pg),{openDrawer:e}=j.useContext(Mg),{setUserId:t}=j.useContext(Ah),a=async()=>{try{await E3(),n({username:"",email:""}),t(null)}catch(l){alert(l.message)}},s=JSON.parse(localStorage.getItem("admin details"));return console.log(s),T.jsxs("div",{className:"header",children:[T.jsxs("div",{className:"left-container",children:[T.jsx("div",{className:"verification-link",children:T.jsx("a",{href:"/verifications",children:T.jsx("h5",{className:"link-text",children:"User Verification"})})}),T.jsx("div",{className:"link-container",children:T.jsx("a",{href:"/payments",children:T.jsx("h5",{className:"link-text",children:"Payments"})})}),T.jsx("div",{className:"link-container",children:T.jsx("a",{href:"/content",children:T.jsx("h5",{className:"link-text",children:"App Content"})})})]}),T.jsx("div",{className:"menubar-container",onClick:()=>e(),children:T.jsx(At,{icon:cN,color:"#fff",size:"2x"})}),T.jsxs("div",{className:"account-container",onClick:a,children:[T.jsx("h1",{className:"admin-name",children:s&&s.username}),T.jsx("div",{className:"logout-icon",children:T.jsx(At,{icon:uN,color:"#FE3E12",size:"1x"})})]})]})}const b3="/assets/logo-D3G-CBLy.png";/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const A3={prefix:"far",iconName:"circle-dot",icon:[512,512,[128280,"dot-circle"],"f192","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm256-96a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},w3={prefix:"far",iconName:"circle",icon:[512,512,[128308,128309,128992,128993,128994,128995,128996,9679,9898,9899,11044,61708,61915],"f111","M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"]};function ko({isSelected:n,isBig:e}){const t=e?"2x":"1x";return T.jsx("div",{children:n?T.jsx(At,{icon:A3,color:"#470477",size:t}):T.jsx(At,{icon:w3,color:"#470477",size:t})})}const ec=j.createContext(),S3=({children:n})=>{const[e,t]=j.useState([]);return j.useEffect(()=>{const a=ed(Zu(vn,"genres")),s=nd(a,l=>{const c=[];l.forEach(async d=>{c.push(d.data().name)}),t(c)});return()=>{s()}},[]),T.jsx(ec.Provider,{value:{genres:e,setGenres:t},children:n})},Ky=j.createContext(),R3=({children:n})=>{const[e,t]=j.useState([]),[a,s]=j.useState(!0);return j.useEffect(()=>{const l=ed(Zu(vn,"content")),c=nd(l,d=>{const p=[];d.forEach(async g=>{p.push({...g.data(),id:g.id})}),t(p),s(!1)});return()=>{c()}},[]),T.jsx(Ky.Provider,{value:{content:e,isLoading:a},children:n})};function I3({id:n,setIsVisible:e}){const[t,a]=j.useState(""),{genres:s}=j.useContext(ec),{content:l}=j.useContext(Ky),c=l.filter(B=>B.id===n)[0],[d,p]=j.useState(c.question?c.question:{}),[g,_]=j.useState(c.genre),[b,w]=j.useState(c.options.map(B=>({name:B,isSelected:B===c.correct}))),N=()=>{!b.map(B=>B.name).includes(t)&&t.length>0&&w(B=>[...B,{name:t,isSelected:!1}]),a("")},x=B=>{w(W=>W.filter(Q=>Q.name!==B))},H=B=>{const W=[];b.forEach(Q=>{Q.name!==B?W.push({...Q,isSelected:!1}):W.push({...Q,isSelected:!0})}),w(W)},k=async()=>{const B=b.filter(W=>W.isSelected);if(g===null||g==="Choose Genre"){alert("Choose genre");return}if(d===""){alert("Enter a question");return}if(b.length<2){alert("Enter atleast 2 options");return}if(B.length==0){alert("Select the correct option");return}try{await p3({question:d,genre:g,options:b.map(W=>W.name),correct:B[0].name},n),e(!1)}catch(W){alert(W.message)}};return T.jsxs("div",{className:"modal-add-content",children:[T.jsxs("div",{className:"add-content-actions",children:[T.jsx("h4",{className:"add-content-text",children:"Update Content"}),T.jsxs("select",{className:"choose-genre-dropdown",onChange:B=>_(B.target.value),value:g,children:[T.jsx("option",{children:"Choose Genre"}),s.map(B=>T.jsx("option",{children:B}))]}),T.jsx("textarea",{rows:"4",cols:"50",className:"question-input",placeholder:"Type a question...",onChange:B=>p(B.target.value),value:d}),T.jsxs("div",{children:[T.jsx("h4",{className:"options-text",children:"Options"}),T.jsx("div",{className:"all-options-container",children:b.map((B,W)=>T.jsxs("div",{className:"option-content-container",children:[T.jsxs("div",{className:"radio-option-choice",onClick:()=>H(B.name),children:[T.jsx(ko,{isSelected:B.isSelected,isBig:!0}),T.jsx("h5",{className:"added-option",children:B.name})]}),T.jsx("div",{className:"remove-option-btn",onClick:()=>x(B.name),children:T.jsx(At,{icon:xa,color:"#fff"})})]}))}),b.length>3?null:T.jsxs("div",{className:"option-input-container",children:[T.jsx("input",{className:"option-input",placeholder:"Type the option ...",onChange:B=>a(B.target.value),value:t}),T.jsx("div",{className:"add-option-btn",onClick:N,children:T.jsx(At,{icon:xh,color:"#fff"})})]})]})]}),T.jsx("div",{className:"submit-option-btn",onClick:k,children:T.jsx("h5",{className:"btn-text",children:"Update"})})]})}function L1(){return T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"modal-content",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:T.jsx("h1",{style:{color:"#fff",fontSize:"20px"},children:"...Loading"})}),T.jsx("div",{className:"verify-container"})]})}function kf(){const[n,e]=j.useState(""),[t,a]=j.useState(""),[s,l]=j.useState(!1),{setUserId:c}=j.useContext(Ah),{updateDetails:d}=j.useContext(Pg),p=async()=>{if(n===""||t===""){alert("All fields are required!");return}try{l(!0);const{userId:g,data:_}=await _3(n,t);l(!1),c(g),d(_)}catch(g){l(!1),alert(g.message)}};return T.jsxs(T.Fragment,{children:[s?T.jsx(L1,{}):null,T.jsxs("div",{className:"container",children:[T.jsxs("div",{className:"logo-words",children:[T.jsx("img",{src:b3,alt:"logo",className:"logo"}),T.jsxs("div",{className:"m-words-container",children:[T.jsx("h5",{className:"words",children:"Manage user verification, payments"}),T.jsx("h5",{className:"words",children:"and app content"})]})]}),T.jsxs("div",{className:"right-container",children:[T.jsxs("div",{className:"words-container",children:[T.jsx("h5",{className:"words",children:"Manage user verification, payments"}),T.jsx("h5",{className:"words",children:"and app content"})]}),T.jsxs("div",{className:"form",children:[T.jsx("input",{placeholder:"email",className:"cred-input",onChange:g=>e(g.target.value),value:n}),T.jsx("input",{placeholder:"password",className:"cred-input",onChange:g=>a(g.target.value),value:t}),T.jsx("div",{className:"login-btn",onClick:p,children:T.jsx("h5",{className:"btn-text",children:"Sign in"})})]})]})]})]})}function C3({setIsSending:n}){const[e,t]=j.useState([]),[a,s]=j.useState(""),[l,c]=j.useState(""),[d,p]=j.useState(null),{genres:g}=j.useContext(ec),_=()=>{!e.map(x=>x.name).includes(a)&&a.length>0&&t(x=>[...x,{name:a,isSelected:!1}]),s("")},b=x=>{t(H=>H.filter(k=>k.name!==x))},w=x=>{const H=[];e.forEach(k=>{k.name!==x?H.push({...k,isSelected:!1}):H.push({...k,isSelected:!0})}),t(H)},N=async()=>{const x=e.filter(H=>H.isSelected);if(d===null||d==="Choose Genre"){alert("Choose genre");return}if(l===""){alert("Enter a question");return}if(e.length<2){alert("Enter atleast 2 options");return}if(x.length==0){alert("Select the correct option");return}try{await V1({question:l,genre:d,options:e.map(H=>H.name),correct:x[0].name}),c(""),s(""),t([]),p(null)}catch(H){alert(H.message)}};return T.jsxs("div",{className:"add-content",children:[T.jsxs("div",{className:"add-content-actions",children:[T.jsx("h4",{className:"add-content-text",children:"Add Content"}),T.jsxs("select",{className:"choose-genre-dropdown",onChange:x=>p(x.target.value),children:[T.jsx("option",{children:"Choose Genre"}),g.map(x=>T.jsx("option",{children:x}))]}),T.jsx("textarea",{rows:"4",cols:"50",className:"question-input",placeholder:"Type a question...",onChange:x=>c(x.target.value),value:l}),T.jsxs("div",{children:[T.jsx("h4",{className:"options-text",children:"Options"}),T.jsx("div",{className:"all-options-container",children:e.map((x,H)=>T.jsxs("div",{className:"option-content-container",children:[T.jsxs("div",{className:"radio-option-choice",onClick:()=>w(x.name),children:[T.jsx(ko,{isSelected:x.isSelected,isBig:!0}),T.jsx("h5",{className:"added-option",children:x.name})]}),T.jsx("div",{className:"remove-option-btn",onClick:()=>b(x.name),children:T.jsx(At,{icon:xa,color:"#fff"})})]}))}),e.length>3?null:T.jsxs("div",{className:"option-input-container",children:[T.jsx("input",{className:"option-input",placeholder:"Type the option ...",onChange:x=>s(x.target.value),value:a}),T.jsx("div",{className:"add-option-btn",onClick:_,children:T.jsx(At,{icon:xh,color:"#fff"})})]})]})]}),T.jsx("div",{className:"submit-option-btn",onClick:N,children:T.jsx("h5",{className:"btn-text",children:"Submit"})})]})}function x3(n){return T.jsxs("div",{className:"headings-row",children:[T.jsx("div",{className:"question-heading",children:T.jsx("h6",{className:"heading-text",children:"Question"})}),T.jsx("div",{className:"genre-heading",children:T.jsx("h6",{className:"heading-text",children:"Genre"})}),T.jsx("div",{className:"options-heading",children:T.jsx("h6",{className:"heading-text",children:"Options"})}),T.jsx("div",{className:"actions-empty-heading"})]})}function N3({item:n,setIsVisible:e,setId:t}){const a=()=>{t(n.id),e(!0)};return T.jsxs("div",{className:"content-headings-row",children:[T.jsx("div",{className:"question-container",children:T.jsx("h6",{className:"content-question",children:n.question})}),T.jsx("div",{className:"genre-container",children:T.jsx("div",{className:"genre-text-container",children:T.jsx("h6",{className:"content-genre",children:n.genre})})}),T.jsxs("div",{className:"content-options",children:[T.jsx("div",{className:"paired-options",children:n.options.filter((s,l)=>l<2).map(s=>T.jsxs("div",{className:"option-container",children:[T.jsx(ko,{isSelected:s==n.correct,isBig:!1}),T.jsx("h5",{className:"option-text",children:s})]}))}),T.jsx("div",{className:"paired-options",children:n.options.filter((s,l)=>l>1).map(s=>T.jsxs("div",{className:"option-container",children:[T.jsx(ko,{isSelected:s==n.correct,isBig:!1}),T.jsx("h5",{className:"option-text",children:s})]}))}),T.jsx("div",{className:"all-options",children:n.options.map(s=>T.jsxs("div",{className:"option-container",children:[T.jsx(ko,{isSelected:s==n.correct,isBig:!1}),T.jsx("h5",{className:"option-text",children:s})]}))})]}),T.jsxs("div",{className:"content-actions",children:[T.jsx("div",{className:"content-update-btn",onClick:a,children:T.jsx(At,{icon:hN,color:"#fff"})}),T.jsx("div",{className:"content-delete-btn",onClick:()=>g3(n.id),children:T.jsx(At,{icon:fN,color:"#fff"})})]})]})}function O3({setIsVisible:n,id:e,setIsSending:t}){return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"modal-content",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[T.jsx("div",{className:"close-btn",onClick:()=>n(!1),children:T.jsx(At,{icon:xa,size:"4x",color:"#fff"})}),T.jsx(I3,{id:e,setIsVisible:n,setIsSending:t})]}),T.jsx("div",{className:"verify-container"})]})}function D3({setIsSending:n}){const[e,t]=j.useState([]),[a,s]=j.useState(""),[l,c]=j.useState(""),[d,p]=j.useState(null),{genres:g}=j.useContext(ec),_=()=>{!e.map(x=>x.name).includes(a)&&a.length>0&&t(x=>[...x,{name:a,isSelected:!1}]),s("")},b=x=>{t(H=>H.filter(k=>k.name!==x))},w=x=>{const H=[];e.forEach(k=>{k.name!==x?H.push({...k,isSelected:!1}):H.push({...k,isSelected:!0})}),t(H)},N=async()=>{const x=e.filter(H=>H.isSelected);if(d===null||d==="Choose Genre"){alert("Choose genre");return}if(l===""){alert("Enter a question");return}if(e.length<2){alert("Enter atleast 2 options");return}if(x.length==0){alert("Select the correct option");return}try{await V1({question:l,genre:d,options:e.map(H=>H.name),correct:x[0].name}),c(""),s(""),t([]),p(null)}catch(H){alert(H.message)}};return T.jsxs("div",{className:"modal-add-content",children:[T.jsxs("div",{className:"add-content-actions",children:[T.jsx("h4",{className:"add-content-text",children:"Add Content"}),T.jsxs("select",{className:"choose-genre-dropdown",onChange:x=>p(x.target.value),children:[T.jsx("option",{children:"Choose Genre"}),g.map(x=>T.jsx("option",{children:x}))]}),T.jsx("textarea",{rows:"4",cols:"50",className:"question-input",placeholder:"Type a question...",onChange:x=>c(x.target.value),value:l}),T.jsxs("div",{children:[T.jsx("h4",{className:"options-text",children:"Options"}),T.jsx("div",{className:"all-options-container",children:e.map((x,H)=>T.jsxs("div",{className:"option-content-container",children:[T.jsxs("div",{className:"radio-option-choice",onClick:()=>w(x.name),children:[T.jsx(ko,{isSelected:x.isSelected,isBig:!0}),T.jsx("h5",{className:"added-option",children:x.name})]}),T.jsx("div",{className:"remove-option-btn",onClick:()=>b(x.name),children:T.jsx(At,{icon:xa,color:"#fff"})})]}))}),e.length>3?null:T.jsxs("div",{className:"option-input-container",children:[T.jsx("input",{className:"option-input",placeholder:"Type the option ...",onChange:x=>s(x.target.value),value:a}),T.jsx("div",{className:"add-option-btn",onClick:_,children:T.jsx(At,{icon:xh,color:"#fff"})})]})]})]}),T.jsx("div",{className:"submit-option-btn",onClick:N,children:T.jsx("h5",{className:"btn-text",children:"Submit"})})]})}function k3({setIsVisible:n,setIsSending:e}){return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"modal-content",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[T.jsx("div",{className:"close-btn",onClick:()=>n(!1),children:T.jsx(At,{icon:xa,size:"4x",color:"#fff"})}),T.jsx(D3,{setIsSending:e})]}),T.jsx("div",{className:"verify-container"})]})}function $y(){return T.jsx("div",{style:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},children:T.jsx("h4",{style:{color:"#000"},children:"...fetching data"})})}function P3(){const{content:n,isLoading:e}=j.useContext(Ky),{genres:t}=j.useContext(ec),[a,s]=j.useState("1"),[l,c]=j.useState(""),[d,p]=j.useState("All"),[g,_]=j.useState(!1),[b,w]=j.useState(!1),[N,x]=j.useState(!1),H=n.filter(k=>k.question.toLowerCase().includes(l.toLowerCase())&&(k.genre===d||d==="All"));return T.jsxs(T.Fragment,{children:[g?T.jsx(O3,{setIsVisible:_,setIsSending:x,id:a}):null,b?T.jsx(k3,{setIsVisible:w,setIsSending:x}):null,N?T.jsx(L1,{}):null,T.jsxs("div",{className:"content-container",children:[T.jsx(C3,{setIsSending:x}),T.jsxs("div",{className:"all-content",children:[T.jsxs("div",{className:"content-upper-container",children:[T.jsxs("div",{className:"total-q-container",children:[T.jsx("h5",{className:"total-q-text",children:"Total questions"}),T.jsx("div",{className:"content-amount-container",children:T.jsx("h5",{className:"content-amount",children:n.length})})]}),T.jsxs("div",{className:"content-search-filter",children:[T.jsx("input",{className:"content-search-bar",placeholder:"Search by question or option....",onChange:k=>c(k.target.value),value:l}),T.jsxs("div",{className:"content-filter-container",children:[T.jsx("h5",{className:"content-filter-text",children:"filter by genre"}),T.jsxs("select",{className:"filter-genre-dropdown",onChange:k=>p(k.target.value),children:[T.jsx("option",{children:"All"}),t.map(k=>T.jsx("option",{children:k}))]})]})]}),T.jsx("div",{className:"mobile-new-content",onClick:()=>w(!0),children:T.jsx(At,{icon:xh,color:"#fff"})})]}),T.jsx("input",{className:"mobile-content-search-bar",placeholder:"Search by question or option....",onChange:k=>c(k.target.value),value:l}),T.jsxs("div",{className:"all-content-table",children:[T.jsx(x3,{}),e?T.jsx($y,{}):T.jsx("div",{className:"scrolling-content",children:H.map(k=>T.jsx(N3,{item:k,setIsVisible:_,setId:s}))})]})]})]})]})}function M3({totalBank:n,totalEwallet:e,totalCashSend:t,colNo:a,setColNo:s}){return T.jsxs("div",{className:"types-container",children:[T.jsxs("div",{className:"bank-transfer",style:{backgroundColor:a===1?"#FE3E12":null},onClick:()=>s(1),children:[T.jsx("h2",{className:"payment-type",style:{color:a===1?"#fff":"#000"},children:"Bank Transfer"}),T.jsx("div",{className:"count-container",style:{backgroundColor:a===1?"#E2DFDF":"#FE3E12"},children:T.jsx("h2",{className:"payment-count",style:{color:a===1?"#000":"#fff"},children:n})})]}),T.jsxs("div",{className:"e-wallet",style:{backgroundColor:a===2?"#FE3E12":null},onClick:()=>s(2),children:[T.jsx("h2",{className:"payment-type",style:{color:a===2?"#fff":"#000"},children:"E-Wallet"}),T.jsx("div",{className:"count-container",style:{backgroundColor:a===2?"#E2DFDF":"#FE3E12"},children:T.jsx("h2",{className:"payment-count",style:{color:a===2?"#000":"#fff"},children:e})})]}),T.jsxs("div",{className:"cash-send",style:{backgroundColor:a===3?"#FE3E12":null},onClick:()=>s(3),children:[T.jsx("h2",{className:"payment-type",style:{color:a===3?"#fff":"#000"},children:"Cash Send"}),T.jsx("div",{className:"count-container",style:{backgroundColor:a===3?"#E2DFDF":"#FE3E12"},children:T.jsx("h2",{className:"payment-count",style:{color:a===3?"#000":"#fff"},children:t})})]})]})}function ha({name:n,color:e}){return T.jsx("div",{className:"payment-btn",style:{backgroundColor:e},children:T.jsx("h6",{className:"payment-btn-text",children:n})})}function V3({data:n,setIsVisible:e,setId:t}){return T.jsxs("div",{className:"payments-table",children:[T.jsxs("div",{className:"headings-row",children:[T.jsx("div",{className:"heading",children:T.jsx("h6",{className:"heading-text",children:"#"})}),T.jsx("div",{className:"heading-2",children:T.jsx("h6",{className:"heading-text",children:"Acc Holder Name"})}),T.jsx("div",{className:"heading-3",children:T.jsx("h6",{className:"heading-text",children:"Acc Number"})}),T.jsx("div",{className:"heading-4",children:T.jsx("h6",{className:"heading-text",children:"Bank Name"})}),T.jsx("div",{className:"heading-5",children:T.jsx("h6",{className:"heading-text",children:"Branch Code"})}),T.jsx("div",{className:"heading-6",children:T.jsx("h6",{className:"heading-text",children:"Amount"})}),T.jsx("div",{className:"heading-7",children:T.jsx("h6",{className:"heading-text"})})]}),n.map((a,s)=>T.jsxs("div",{className:"payment-row",children:[T.jsx("div",{className:"info-container",children:T.jsx("h6",{className:"payment-info",children:s+1})}),T.jsx("div",{className:"info-container-2",children:T.jsx("h6",{className:"payment-info",children:a.holderName})}),T.jsx("div",{className:"info-container-3",children:T.jsx("h6",{className:"payment-info",children:a.accNo})}),T.jsx("div",{className:"info-container-4",children:T.jsx("h6",{className:"payment-info",children:a.bankName})}),T.jsx("div",{className:"info-container-5",children:T.jsx("h6",{className:"payment-info",children:a.branchCode})}),T.jsx("div",{className:"info-container-6",children:T.jsx("h6",{className:"payment-info",children:a.amount})}),a.status==="Outstanding"?T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"m-payment-btn-container",onClick:()=>{t(a.id),e(!0)},children:T.jsx(ha,{name:"Open",color:"#470477"})}),T.jsx("div",{className:"payment-btn-container",onClick:()=>id(a.id),children:T.jsx(ha,{name:"Done",color:"#470477"})})]}):T.jsxs(T.Fragment,{children:[T.jsx("div",{className:"m-payment-btn-container",children:T.jsx(ha,{name:"Paid",color:"#FE3E12"})}),T.jsx("div",{className:"payment-btn-container",children:T.jsx(ha,{name:"Paid",color:"#FE3E12"})})]})]}))]})}function L3({data:n}){return T.jsxs("div",{className:"payments-table",children:[T.jsxs("div",{className:"headings-row",children:[T.jsx("div",{className:"heading-no",children:T.jsx("h6",{className:"heading-text",children:"#"})}),T.jsx("div",{className:"heading",children:T.jsx("h6",{className:"heading-text",children:"Cell Number"})}),T.jsx("div",{className:"heading",children:T.jsx("h6",{className:"heading-text",children:"Amount"})}),T.jsx("div",{className:"empty-heading"})]}),n.map((e,t)=>T.jsxs("div",{className:"payment-row",children:[T.jsx("div",{className:"info-container-no",children:T.jsx("h6",{className:"payment-info",children:t+1})}),T.jsx("div",{className:"info-container",children:T.jsx("h6",{className:"payment-info",children:e.cellNo})}),T.jsx("div",{className:"info-container",children:T.jsx("h6",{className:"payment-info",children:e.amount})}),e.status==="Outstanding"?T.jsx("div",{className:"ewallet-btn-container",onClick:()=>id(e.id),children:T.jsx(ha,{name:"Done",color:"#470477"})}):T.jsx("div",{className:"ewallet-btn-container",children:T.jsx(ha,{name:"Paid",color:"#FE3E12"})})]}))]})}function U3({data:n}){return T.jsxs("div",{className:"payments-table",children:[T.jsxs("div",{className:"headings-row",children:[T.jsx("div",{className:"heading-no",children:T.jsx("h6",{className:"heading-text",children:"#"})}),T.jsx("div",{className:"heading",children:T.jsx("h6",{className:"heading-text",children:"Cell Number"})}),T.jsx("div",{className:"heading",children:T.jsx("h6",{className:"heading-text",children:"Amount"})}),T.jsx("div",{className:"empty-heading"})]}),n.map((e,t)=>T.jsxs("div",{className:"payment-row",children:[T.jsx("div",{className:"info-container-no",children:T.jsx("h6",{className:"payment-info",children:t+1})}),T.jsx("div",{className:"info-container",children:T.jsx("h6",{className:"payment-info",children:e.cellNo})}),T.jsx("div",{className:"info-container",children:T.jsx("h6",{className:"payment-info",children:e.amount})}),e.status==="Outstanding"?T.jsx("div",{className:"ewallet-btn-container",onClick:()=>id(e.id),children:T.jsx(ha,{name:"Done",color:"#470477"})}):T.jsx("div",{className:"ewallet-btn-container",children:T.jsx(ha,{name:"Paid",color:"#FE3E12"})})]}))]})}const Yy=j.createContext(),j3=({children:n})=>{const[e,t]=j.useState([]),[a,s]=j.useState(!0);return j.useEffect(()=>{const l=ed(Zu(vn,"payments")),c=nd(l,d=>{const p=[];d.forEach(async g=>{p.push({...g.data(),id:g.id})}),t(p),s(!1)});return()=>{c()}},[]),T.jsx(Yy.Provider,{value:{payments:e,isLoading:a},children:n})};function z3({id:n,setIsVisible:e}){const{payments:t}=j.useContext(Yy),{holderName:a,accNo:s,branchCode:l,amount:c,bankName:d}=t.filter(_=>_.id===n)[0],p=[{name:"Account Holder Name",value:a},{name:"Account Number",value:s},{name:"Bank Name",value:d},{name:"Branch Code",value:l},{name:"Amount",value:c}],g=async()=>{try{await id(n),e(!1)}catch(_){alert(_.message)}};return T.jsxs("div",{className:"banking-details-container",children:[T.jsxs("div",{className:"banking-details-upper-container",children:[T.jsx("h1",{className:"banking-details-text",children:"Banking details"}),T.jsx("div",{children:p.map(_=>T.jsxs("div",{className:"details-container",children:[T.jsx("h6",{className:"details-name",children:_.name}),T.jsx("h4",{className:"details-value",children:_.value})]}))})]}),T.jsx("div",{className:"open-btn",onClick:g,children:T.jsx("h5",{className:"btn-text",children:"Done"})})]})}function F3({setIsVisible:n,id:e}){return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"modal-content",style:{display:"flex",justifyContent:"center",alignItems:"center"},children:[T.jsx("div",{className:"close-btn",onClick:()=>n(!1),children:T.jsx(At,{icon:xa,size:"4x",color:"#fff"})}),T.jsx(z3,{id:e,setIsVisible:n})]}),T.jsx("div",{className:"verify-container"})]})}function B3(){const[n,e]=j.useState(1),[t,a]=j.useState(!1),[s,l]=j.useState(""),{payments:c,isLoading:d}=j.useContext(Yy),p=c&&c.filter(w=>w.type==="transfer"),g=c&&c.filter(w=>w.type==="e-wallet"),_=c&&c.filter(w=>w.type==="cash send"),b=()=>n===1?T.jsx(V3,{data:p,setIsVisible:a,setId:l}):n===2?T.jsx(L3,{data:g}):T.jsx(U3,{data:_});return T.jsxs(T.Fragment,{children:[t?T.jsx(F3,{setIsVisible:a,id:s}):null,T.jsxs("div",{className:"payments-container",children:[T.jsx(M3,{totalBank:p.filter(w=>w.status==="Outstanding").length,totalEwallet:g.filter(w=>w.status==="Outstanding").length,totalCashSend:_.filter(w=>w.status==="Outstanding").length,data:c,colNo:n,setColNo:e}),d?T.jsx($y,{}):b()]})]})}function q3({id:n,email:e,sentDate:t,pic:a,idPic:s,setIsVisible:l,setOpenedDetails:c}){const d=()=>{c(n),l(!0)};return T.jsxs("div",{className:"identification-container",children:[T.jsxs("div",{className:"email-date-container",children:[T.jsx("h6",{className:"email",children:e}),T.jsxs("div",{className:"date-container",children:[T.jsx("h6",{className:"date-text",children:"Date sent:"}),T.jsx("h6",{className:"date",children:t})]})]}),T.jsxs("div",{className:"pics",children:[T.jsx("img",{className:"selfie",src:a}),T.jsx("img",{className:"id-pic",src:s})]}),T.jsx("div",{className:"btn-container",children:T.jsx("div",{className:"open-btn",onClick:d,children:T.jsx("h5",{className:"btn-text",children:"Open"})})})]})}function H3({arr:n,setIsVisible:e,setOpenedDetails:t}){return T.jsx("div",{className:"grouped-identifications",children:n.map(a=>T.jsx(q3,{id:a.id,pic:a.selfie,idPic:a.idPic,email:a.email,sentDate:a.sentDate,setIsVisible:e,setOpenedDetails:t}))})}const Qy=j.createContext(),G3=({children:n})=>{const[e,t]=j.useState([]),[a,s]=j.useState(!0);return j.useEffect(()=>{const l=ed(Zu(vn,"documentations"),kL("status","==","Pending")),c=nd(l,async d=>{const p=[];d.forEach(g=>{const _=g.data();p.push((async()=>{const b=await d3(_.userId);return{..._,id:g.id,email:b.email}})())});try{const g=await Promise.all(p);s(!1),t(g)}catch(g){console.log(g)}});return()=>{c()}},[]),T.jsx(Qy.Provider,{value:{documentations:e,isLoading:a},children:n})};function K3({setIsVisible:n,id:e}){const[t,a]=j.useState(0),{documentations:s}=j.useContext(Qy),l=s.filter(_=>_.id===e)[0],c=l.selfie,d=l.idPic,p=async()=>{try{await y3(e,l.userId)}catch(_){alert(_.message)}},g=async()=>{try{await v3(e,l.userId)}catch(_){alert(_.message)}};return T.jsxs(T.Fragment,{children:[T.jsxs("div",{className:"modal-content",children:[T.jsx("div",{className:"close-btn",onClick:()=>n(!1),children:T.jsx(At,{icon:xa,size:"4x",color:"#fff"})}),T.jsxs("div",{className:"actual-content",children:[T.jsxs("div",{className:"all-images",children:[T.jsxs("div",{className:"images",children:[T.jsx("div",{className:"pic-container",style:{border:t===0?"#fff solid 4px":null},onClick:()=>a(0),children:T.jsx("img",{src:c,alt:"selfie",height:"100%",width:"100%"})}),T.jsx("div",{className:"pic-container",style:{border:t===1?"#fff solid 4px":null},onClick:()=>a(1),children:T.jsx("img",{src:d,alt:"id pic",height:"100%",width:"100%"})})]}),T.jsx("div",{className:"viewed-image-container",children:T.jsx("img",{src:t===0?c:d,className:"viewed-image"})})]}),T.jsxs("div",{className:"buttons",onClick:p,children:[T.jsx("div",{className:"verify-btn",children:T.jsx("h6",{className:"action-btn-text",children:"Verify"})}),T.jsx("div",{className:"reject-btn",onClick:g,children:T.jsx("h6",{className:"action-btn-text",children:"Reject"})})]})]})]}),T.jsx("div",{className:"verify-doc-container"})]})}function Mb(){const[n,e]=j.useState(!1),[t,a]=j.useState(null),{documentations:s,isLoading:l}=j.useContext(Qy),c=()=>{let d=[],p=0;for(;p<s.length;){let g=s.slice(p,p+3);d.push(g),p=p+3}return d};return T.jsxs(T.Fragment,{children:[n?T.jsx(K3,{setIsVisible:e,id:t}):null,T.jsxs("div",{className:"verification-container",children:[T.jsx("div",{children:T.jsxs("div",{className:"verification-words-container",children:[T.jsx("div",{className:"amount-circle",children:T.jsx("h6",{className:"amount",children:s.length})}),T.jsx("h6",{className:"verification-words",children:"Outstanding verifications"})]})}),l?T.jsx($y,{}):T.jsx("div",{className:"scrolling-details",children:c().map(d=>T.jsx(H3,{arr:d,setIsVisible:e,setOpenedDetails:a}))})]})]})}function $3(){const{animation:n,closeDrawer:e}=j.useContext(Mg),t=$b(),a=s=>{t(s),e()};return T.jsxs("div",{className:"drawer-content",style:{animation:"forwards 1s "+n},children:[T.jsx("div",{className:"drawer-close-container",onClick:e,children:T.jsx(At,{icon:xa,color:"#fff",size:"3x"})}),T.jsxs("div",{className:"drawer-links",children:[T.jsx("div",{className:"drawer-verification-link",onClick:()=>a("/verifications"),children:T.jsx("h5",{className:"drawer-link-text",children:"User Verification"})}),T.jsx("div",{className:"drawer-link-container",onClick:()=>a("/payments"),children:T.jsx("h5",{className:"drawer-link-text",children:"Payments"})}),T.jsx("div",{className:"drawer-link-container",onClick:()=>a("/content"),children:T.jsx("h5",{className:"drawer-link-text",children:"App Content"})})]})]})}function Y3(){const{userId:n}=j.useContext(Ah);function e(){return n==null?T.jsx(BC,{}):T.jsx(T3,{})}function t(){return T.jsx($3,{})}return T.jsx(OC,{children:T.jsxs("div",{children:[e(),t(),T.jsxs(oC,{children:[T.jsx(lu,{path:"/",element:n==null?T.jsx(kf,{}):T.jsx(Mb,{})}),T.jsx(lu,{path:"/payments",element:n==null?T.jsx(kf,{}):T.jsx(B3,{})}),T.jsx(lu,{path:"/content",element:n==null?T.jsx(kf,{}):T.jsx(P3,{})}),T.jsx(lu,{path:"/verifications",element:n==null?T.jsx(kf,{}):T.jsx(Mb,{})})]})]})})}function Q3(){return T.jsx(FC,{children:T.jsx(qC,{children:T.jsx(G3,{children:T.jsx(j3,{children:T.jsx(R3,{children:T.jsx(S3,{children:T.jsx(HC,{children:T.jsx(Y3,{})})})})})})})})}yI.createRoot(document.getElementById("root")).render(T.jsx(j.StrictMode,{children:T.jsx(Q3,{})}));
