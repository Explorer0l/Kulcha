/*! For license information please see main.88795fa0.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),i=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,m={};function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}function y(){}function x(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var b=x.prototype=new y;b.constructor=x,g(b,v.prototype),b.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,o={},i=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(i=""+t.key),t)k.call(t,a)&&!j.hasOwnProperty(a)&&(o[a]=t[a]);var s=arguments.length-2;if(1===s)o.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];o.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:n,type:e,key:i,ref:l,props:o,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var _=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function L(e,t,a,o,i){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return i=i(s=e),e=""===o?"."+P(s,0):o,w(i)?(a="",null!=e&&(a=e.replace(_,"$&/")+"/"),L(i,t,a,"",(function(e){return e}))):null!=i&&(E(i)&&(i=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,a+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(_,"$&/")+"/")+e)),t.push(i)),1;if(s=0,o=""===o?".":o+":",w(e))for(var u=0;u<e.length;u++){var c=o+P(l=e[u],u);s+=L(l,t,a,c,i)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=L(l=l.value,t,a,c=o+P(l,u++),i);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function z(e,t,n){if(null==e)return e;var r=[],a=0;return L(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function T(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var R={current:null},N={transition:null},O={ReactCurrentDispatcher:R,ReactCurrentBatchConfig:N,ReactCurrentOwner:S};function F(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:z,forEach:function(e,t,n){z(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return z(e,(function(){t++})),t},toArray:function(e){return z(e,(function(e){return e}))||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=a,t.Profiler=i,t.PureComponent=x,t.StrictMode=o,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,t.act=F,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=g({},e.props),o=e.key,i=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,l=S.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!j.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:o,ref:i,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:T}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=F,t.useCallback=function(e,t){return R.current.useCallback(e,t)},t.useContext=function(e){return R.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return R.current.useDeferredValue(e)},t.useEffect=function(e,t){return R.current.useEffect(e,t)},t.useId=function(){return R.current.useId()},t.useImperativeHandle=function(e,t,n){return R.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return R.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return R.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return R.current.useMemo(e,t)},t.useReducer=function(e,t,n){return R.current.useReducer(e,t,n)},t.useRef=function(e){return R.current.useRef(e)},t.useState=function(e){return R.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return R.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return R.current.useTransition()},t.version="18.3.1"},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<o(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,i=a>>>1;r<i;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>o(s,n))u<a&&0>o(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>o(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function o(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var i=performance;t.unstable_now=function(){return i.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,p=null,f=3,h=!1,g=!1,m=!1,v="function"===typeof setTimeout?setTimeout:null,y="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function b(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(m=!1,b(e),!g)if(null!==r(u))g=!0,N(k);else{var t=r(c);null!==t&&O(w,t.startTime-e)}}function k(e,n){g=!1,m&&(m=!1,y(E),E=-1),h=!0;var o=f;try{for(b(n),p=r(u);null!==p&&(!(p.expirationTime>n)||e&&!L());){var i=p.callback;if("function"===typeof i){p.callback=null,f=p.priorityLevel;var l=i(p.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?p.callback=l:p===r(u)&&a(u),b(n)}else a(u);p=r(u)}if(null!==p)var s=!0;else{var d=r(c);null!==d&&O(w,d.startTime-n),s=!1}return s}finally{p=null,f=o,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,j=!1,C=null,E=-1,_=5,P=-1;function L(){return!(t.unstable_now()-P<_)}function z(){if(null!==C){var e=t.unstable_now();P=e;var n=!0;try{n=C(!0,e)}finally{n?S():(j=!1,C=null)}}else j=!1}if("function"===typeof x)S=function(){x(z)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,R=T.port2;T.port1.onmessage=z,S=function(){R.postMessage(null)}}else S=function(){v(z,0)};function N(e){C=e,j||(j=!0,S())}function O(e,n){E=v((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){g||h||(g=!0,N(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,a,o){var i=t.unstable_now();switch("object"===typeof o&&null!==o?o="number"===typeof(o=o.delay)&&0<o?i+o:i:o=i,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:o,expirationTime:l=o+l,sortIndex:-1},o>i?(e.sortIndex=o,n(c,e),null===r(u)&&e===r(c)&&(m?(y(E),E=-1):m=!0,O(w,o-i))):(e.sortIndex=l,n(u,e),g||h||(g=!0,N(k))),e},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var o=Object.keys(e),i=Object.keys(t);if(o.length!==i.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<o.length;s++){var u=o[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.createRoot=r.createRoot,t.hydrateRoot=r.hydrateRoot},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function o(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},h={};function g(e,t,n,r,a,o,i){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=i}var m={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e){m[e]=new g(e,0,!1,e,null,!1,!1)})),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach((function(e){var t=e[0];m[t]=new g(t,1,!1,e[1],null,!1,!1)})),["contentEditable","draggable","spellCheck","value"].forEach((function(e){m[e]=new g(e,2,!1,e.toLowerCase(),null,!1,!1)})),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach((function(e){m[e]=new g(e,2,!1,e,null,!1,!1)})),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e){m[e]=new g(e,3,!1,e.toLowerCase(),null,!1,!1)})),["checked","multiple","muted","selected"].forEach((function(e){m[e]=new g(e,3,!0,e,null,!1,!1)})),["capture","download"].forEach((function(e){m[e]=new g(e,4,!1,e,null,!1,!1)})),["cols","rows","size","span"].forEach((function(e){m[e]=new g(e,6,!1,e,null,!1,!1)})),["rowSpan","start"].forEach((function(e){m[e]=new g(e,5,!1,e.toLowerCase(),null,!1,!1)}));var v=/[\-:]([a-z])/g;function y(e){return e[1].toUpperCase()}function x(e,t,n,r){var a=m.hasOwnProperty(t)?m[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(f,e)&&(p.test(e)?h[e]=!0:(f[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,null,!1,!1)})),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)})),["xml:base","xml:lang","xml:space"].forEach((function(e){var t=e.replace(v,y);m[t]=new g(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)})),["tabIndex","crossOrigin"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!1,!1)})),m.xlinkHref=new g("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach((function(e){m[e]=new g(e,1,!1,e.toLowerCase(),null,!0,!0)}));var b=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),_=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),T=Symbol.for("react.memo"),R=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var N=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var O=Symbol.iterator;function F(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=O&&e[O]||e["@@iterator"])?e:null}var M,B=Object.assign;function I(e){if(void 0===M)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);M=t&&t[1]||""}return"\n"+M+e}var D=!1;function $(e,t){if(!e||D)return"";D=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),o=r.stack.split("\n"),i=a.length-1,l=o.length-1;1<=i&&0<=l&&a[i]!==o[l];)l--;for(;1<=i&&0<=l;i--,l--)if(a[i]!==o[l]){if(1!==i||1!==l)do{if(i--,0>--l||a[i]!==o[l]){var s="\n"+a[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=i&&0<=l);break}}}finally{D=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?I(e):""}function A(e){switch(e.tag){case 5:return I(e.type);case 16:return I("Lazy");case 13:return I("Suspense");case 19:return I("SuspenseList");case 0:case 2:case 15:return e=$(e.type,!1);case 11:return e=$(e.type.render,!1);case 1:return e=$(e.type,!0);default:return""}}function W(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case j:return"StrictMode";case L:return"Suspense";case z:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case _:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case P:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case T:return null!==(t=e.displayName||null)?t:W(e.type)||"Memo";case R:t=e._payload,e=e._init;try{return W(e(t))}catch(n){}}return null}function U(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return W(t);case 8:return t===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function H(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function V(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function K(e){e._valueTracker||(e._valueTracker=function(e){var t=V(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,o.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function Q(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=V(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function Y(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function q(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function G(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=H(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&x(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=H(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,H(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&Y(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+H(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(o(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(o(92));if(te(n)){if(1<n.length)throw Error(o(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:H(n)}}function oe(e,t){var n=H(t.value),r=H(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function ie(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction((function(){return ce(e,t)}))}:ce);function pe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var fe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function ge(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||fe.hasOwnProperty(e)&&fe[e]?(""+t).trim():t+"px"}function me(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=ge(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(fe).forEach((function(e){he.forEach((function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fe[t]=fe[e]}))}));var ve=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ye(e,t){if(t){if(ve[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(o(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(o(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(o(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(o(62))}}function xe(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var be=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,je=null;function Ce(e){if(e=xa(e)){if("function"!==typeof ke)throw Error(o(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?je?je.push(e):je=[e]:Se=e}function _e(){if(Se){var e=Se,t=je;if(je=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function Pe(e,t){return e(t)}function Le(){}var ze=!1;function Te(e,t,n){if(ze)return e(t,n);ze=!0;try{return Pe(e,t,n)}finally{ze=!1,(null!==Se||null!==je)&&(Le(),_e())}}function Re(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Ne=!1;if(c)try{var Oe={};Object.defineProperty(Oe,"passive",{get:function(){Ne=!0}}),window.addEventListener("test",Oe,Oe),window.removeEventListener("test",Oe,Oe)}catch(ce){Ne=!1}function Fe(e,t,n,r,a,o,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Me=!1,Be=null,Ie=!1,De=null,$e={onError:function(e){Me=!0,Be=e}};function Ae(e,t,n,r,a,o,i,l,s){Me=!1,Be=null,Fe.apply($e,arguments)}function We(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function Ue(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function He(e){if(We(e)!==e)throw Error(o(188))}function Ve(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=We(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var i=a.alternate;if(null===i){if(null!==(r=a.return)){n=r;continue}break}if(a.child===i.child){for(i=a.child;i;){if(i===n)return He(a),e;if(i===r)return He(a),t;i=i.sibling}throw Error(o(188))}if(n.return!==r.return)n=a,r=i;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=i;break}if(s===r){l=!0,r=a,n=i;break}s=s.sibling}if(!l){for(s=i.child;s;){if(s===n){l=!0,n=i,r=a;break}if(s===r){l=!0,r=i,n=a;break}s=s.sibling}if(!l)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(e))?Ke(e):null}function Ke(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Ke(e);if(null!==t)return t;e=e.sibling}return null}var Qe=a.unstable_scheduleCallback,Ye=a.unstable_cancelCallback,qe=a.unstable_shouldYield,Ge=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,ot=null;var it=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function pt(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,o=e.pingedLanes,i=268435455&n;if(0!==i){var l=i&~a;0!==l?r=dt(l):0!==(o&=i)&&(r=dt(o))}else 0!==(i=n&~a)?r=dt(i):0!==o&&(r=dt(o));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(o=t&-t)||16===a&&0!==(4194240&o)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-it(t)),r|=e[n],t&=~a;return r}function ft(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function gt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function mt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function vt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-it(t)]=n}function yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-it(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var xt=0;function bt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,jt,Ct,Et=!1,_t=[],Pt=null,Lt=null,zt=null,Tt=new Map,Rt=new Map,Nt=[],Ot="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ft(e,t){switch(e){case"focusin":case"focusout":Pt=null;break;case"dragenter":case"dragleave":Lt=null;break;case"mouseover":case"mouseout":zt=null;break;case"pointerover":case"pointerout":Tt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function Mt(e,t,n,r,a,o){return null===e||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[a]},null!==t&&(null!==(t=xa(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Bt(e){var t=ya(e.target);if(null!==t){var n=We(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=Ue(n)))return e.blockedOn=t,void Ct(e.priority,(function(){St(n)}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function It(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=qt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=xa(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);be=r,n.target.dispatchEvent(r),be=null,t.shift()}return!0}function Dt(e,t,n){It(e)&&n.delete(t)}function $t(){Et=!1,null!==Pt&&It(Pt)&&(Pt=null),null!==Lt&&It(Lt)&&(Lt=null),null!==zt&&It(zt)&&(zt=null),Tt.forEach(Dt),Rt.forEach(Dt)}function At(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,$t)))}function Wt(e){function t(t){return At(t,e)}if(0<_t.length){At(_t[0],e);for(var n=1;n<_t.length;n++){var r=_t[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==Pt&&At(Pt,e),null!==Lt&&At(Lt,e),null!==zt&&At(zt,e),Tt.forEach(t),Rt.forEach(t),n=0;n<Nt.length;n++)(r=Nt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Nt.length&&null===(n=Nt[0]).blockedOn;)Bt(n),null===n.blockedOn&&Nt.shift()}var Ut=b.ReactCurrentBatchConfig,Ht=!0;function Vt(e,t,n,r){var a=xt,o=Ut.transition;Ut.transition=null;try{xt=1,Qt(e,t,n,r)}finally{xt=a,Ut.transition=o}}function Kt(e,t,n,r){var a=xt,o=Ut.transition;Ut.transition=null;try{xt=4,Qt(e,t,n,r)}finally{xt=a,Ut.transition=o}}function Qt(e,t,n,r){if(Ht){var a=qt(e,t,n,r);if(null===a)Hr(e,t,r,Yt,n),Ft(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return Pt=Mt(Pt,e,t,n,r,a),!0;case"dragenter":return Lt=Mt(Lt,e,t,n,r,a),!0;case"mouseover":return zt=Mt(zt,e,t,n,r,a),!0;case"pointerover":var o=a.pointerId;return Tt.set(o,Mt(Tt.get(o)||null,e,t,n,r,a)),!0;case"gotpointercapture":return o=a.pointerId,Rt.set(o,Mt(Rt.get(o)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Ft(e,r),4&t&&-1<Ot.indexOf(e)){for(;null!==a;){var o=xa(a);if(null!==o&&wt(o),null===(o=qt(e,t,n,r))&&Hr(e,t,r,Yt,n),o===a)break;a=o}null!==a&&r.stopPropagation()}else Hr(e,t,r,null,n)}}var Yt=null;function qt(e,t,n,r){if(Yt=null,null!==(e=ya(e=we(r))))if(null===(t=We(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=Ue(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Yt=e,null}function Gt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,o=a.length;for(e=0;e<r&&n[e]===a[e];e++);var i=r-e;for(t=1;t<=i&&n[r-t]===a[o-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,o){for(var i in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=o,this.currentTarget=null,e)e.hasOwnProperty(i)&&(t=e[i],this[i]=t?t(a):a[i]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=B({},un,{view:0,detail:0}),pn=an(dn),fn=B({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(fn),gn=an(B({},fn,{dataTransfer:0})),mn=an(B({},dn,{relatedTarget:0})),vn=an(B({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),yn=B({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),xn=an(yn),bn=an(B({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return jn}var En=B({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),_n=an(En),Pn=an(B({},fn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Ln=an(B({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),zn=an(B({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Tn=B({},fn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Rn=an(Tn),Nn=[9,13,27,32],On=c&&"CompositionEvent"in window,Fn=null;c&&"documentMode"in document&&(Fn=document.documentMode);var Mn=c&&"TextEvent"in window&&!Fn,Bn=c&&(!On||Fn&&8<Fn&&11>=Fn),In=String.fromCharCode(32),Dn=!1;function $n(e,t){switch(e){case"keyup":return-1!==Nn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function An(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var Wn=!1;var Un={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Hn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Un[e.type]:"textarea"===t}function Vn(e,t,n,r){Ee(r),0<(t=Kr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Kn=null,Qn=null;function Yn(e){Ir(e,0)}function qn(e){if(Q(ba(e)))return e}function Gn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Kn&&(Kn.detachEvent("onpropertychange",nr),Qn=Kn=null)}function nr(e){if("value"===e.propertyName&&qn(Qn)){var t=[];Vn(t,Qn,e,we(e)),Te(Yn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Qn=n,(Kn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return qn(Qn)}function or(e,t){if("click"===e)return qn(t)}function ir(e,t){if("input"===e||"change"===e)return qn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function pr(){for(var e=window,t=Y();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=Y((e=t.contentWindow).document)}return t}function fr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=pr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&fr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,o=Math.min(r.start,a);r=void 0===r.end?o:Math.min(r.end,a),!e.extend&&o>r&&(a=r,r=o,o=a),a=cr(n,o);var i=cr(n,r);a&&i&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gr=c&&"documentMode"in document&&11>=document.documentMode,mr=null,vr=null,yr=null,xr=!1;function br(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;xr||null==mr||mr!==Y(r)||("selectionStart"in(r=mr)&&fr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},yr&&sr(yr,r)||(yr=r,0<(r=Kr(vr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=mr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},jr={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in jr)return Sr[e]=n[t];return e}c&&(jr=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),_r=Cr("animationiteration"),Pr=Cr("animationstart"),Lr=Cr("transitionend"),zr=new Map,Tr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Rr(e,t){zr.set(e,t),s(t,[e])}for(var Nr=0;Nr<Tr.length;Nr++){var Or=Tr[Nr];Rr(Or.toLowerCase(),"on"+(Or[0].toUpperCase()+Or.slice(1)))}Rr(Er,"onAnimationEnd"),Rr(_r,"onAnimationIteration"),Rr(Pr,"onAnimationStart"),Rr("dblclick","onDoubleClick"),Rr("focusin","onFocus"),Rr("focusout","onBlur"),Rr(Lr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Mr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fr));function Br(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,i,l,s,u){if(Ae.apply(this,arguments),Me){if(!Me)throw Error(o(198));var c=Be;Me=!1,Be=null,Ie||(Ie=!0,De=c)}}(r,t,void 0,e),e.currentTarget=null}function Ir(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==o&&a.isPropagationStopped())break e;Br(a,l,u),o=s}else for(i=0;i<r.length;i++){if(s=(l=r[i]).instance,u=l.currentTarget,l=l.listener,s!==o&&a.isPropagationStopped())break e;Br(a,l,u),o=s}}}if(Ie)throw e=De,Ie=!1,De=null,e}function Dr(e,t){var n=t[ga];void 0===n&&(n=t[ga]=new Set);var r=e+"__bubble";n.has(r)||(Ur(t,e,2,!1),n.add(r))}function $r(e,t,n){var r=0;t&&(r|=4),Ur(n,e,r,t)}var Ar="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[Ar]){e[Ar]=!0,i.forEach((function(t){"selectionchange"!==t&&(Mr.has(t)||$r(t,!1,e),$r(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ar]||(t[Ar]=!0,$r("selectionchange",!1,t))}}function Ur(e,t,n,r){switch(Gt(t)){case 1:var a=Vt;break;case 4:a=Kt;break;default:a=Qt}n=a.bind(null,t,n,e),a=void 0,!Ne||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Hr(e,t,n,r,a){var o=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var i=r.tag;if(3===i||4===i){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===i)for(i=r.return;null!==i;){var s=i.tag;if((3===s||4===s)&&((s=i.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;i=i.return}for(;null!==l;){if(null===(i=ya(l)))return;if(5===(s=i.tag)||6===s){r=o=i;continue e}l=l.parentNode}}r=r.return}Te((function(){var r=o,a=we(n),i=[];e:{var l=zr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=_n;break;case"focusin":u="focus",s=mn;break;case"focusout":u="blur",s=mn;break;case"beforeblur":case"afterblur":s=mn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=gn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=Ln;break;case Er:case _r:case Pr:s=vn;break;case Lr:s=zn;break;case"scroll":s=pn;break;case"wheel":s=Rn;break;case"copy":case"cut":case"paste":s=xn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=Pn}var c=0!==(4&t),d=!c&&"scroll"===e,p=c?null!==l?l+"Capture":null:l;c=[];for(var f,h=r;null!==h;){var g=(f=h).stateNode;if(5===f.tag&&null!==g&&(f=g,null!==p&&(null!=(g=Re(h,p))&&c.push(Vr(h,g,f)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),i.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===be||!(u=n.relatedTarget||n.fromElement)||!ya(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?ya(u):null)&&(u!==(d=We(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,g="onMouseLeave",p="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=Pn,g="onPointerLeave",p="onPointerEnter",h="pointer"),d=null==s?l:ba(s),f=null==u?l:ba(u),(l=new c(g,h+"leave",s,n,a)).target=d,l.relatedTarget=f,g=null,ya(a)===r&&((c=new c(p,h+"enter",u,n,a)).target=f,c.relatedTarget=d,g=c),d=g,s&&u)e:{for(p=u,h=0,f=c=s;f;f=Qr(f))h++;for(f=0,g=p;g;g=Qr(g))f++;for(;0<h-f;)c=Qr(c),h--;for(;0<f-h;)p=Qr(p),f--;for(;h--;){if(c===p||null!==p&&c===p.alternate)break e;c=Qr(c),p=Qr(p)}c=null}else c=null;null!==s&&Yr(i,l,s,c,!1),null!==u&&null!==d&&Yr(i,d,u,c,!0)}if("select"===(s=(l=r?ba(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var m=Gn;else if(Hn(l))if(Xn)m=ir;else{m=ar;var v=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(m=or);switch(m&&(m=m(e,r))?Vn(i,m,n,a):(v&&v(e,l,r),"focusout"===e&&(v=l._wrapperState)&&v.controlled&&"number"===l.type&&ee(l,"number",l.value)),v=r?ba(r):window,e){case"focusin":(Hn(v)||"true"===v.contentEditable)&&(mr=v,vr=r,yr=null);break;case"focusout":yr=vr=mr=null;break;case"mousedown":xr=!0;break;case"contextmenu":case"mouseup":case"dragend":xr=!1,br(i,n,a);break;case"selectionchange":if(gr)break;case"keydown":case"keyup":br(i,n,a)}var y;if(On)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else Wn?$n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Bn&&"ko"!==n.locale&&(Wn||"onCompositionStart"!==x?"onCompositionEnd"===x&&Wn&&(y=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,Wn=!0)),0<(v=Kr(r,x)).length&&(x=new bn(x,e,null,n,a),i.push({event:x,listeners:v}),y?x.data=y:null!==(y=An(n))&&(x.data=y))),(y=Mn?function(e,t){switch(e){case"compositionend":return An(t);case"keypress":return 32!==t.which?null:(Dn=!0,In);case"textInput":return(e=t.data)===In&&Dn?null:e;default:return null}}(e,n):function(e,t){if(Wn)return"compositionend"===e||!On&&$n(e,t)?(e=en(),Jt=Zt=Xt=null,Wn=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Bn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Kr(r,"onBeforeInput")).length&&(a=new bn("onBeforeInput","beforeinput",null,n,a),i.push({event:a,listeners:r}),a.data=y))}Ir(i,t)}))}function Vr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Kr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,o=a.stateNode;5===a.tag&&null!==o&&(a=o,null!=(o=Re(e,n))&&r.unshift(Vr(e,o,a)),null!=(o=Re(e,t))&&r.push(Vr(e,o,a))),e=e.return}return r}function Qr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Yr(e,t,n,r,a){for(var o=t._reactName,i=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=Re(n,o))&&i.unshift(Vr(n,s,l)):a||null!=(s=Re(n,o))&&i.push(Vr(n,s,l))),n=n.return}0!==i.length&&e.push({event:t,listeners:i})}var qr=/\r\n?/g,Gr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(qr,"\n").replace(Gr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(o(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,oa="function"===typeof Promise?Promise:void 0,ia="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof oa?function(e){return oa.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout((function(){throw e}))}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void Wt(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);Wt(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),pa="__reactFiber$"+da,fa="__reactProps$"+da,ha="__reactContainer$"+da,ga="__reactEvents$"+da,ma="__reactListeners$"+da,va="__reactHandles$"+da;function ya(e){var t=e[pa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[pa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[pa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function xa(e){return!(e=e[pa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function ba(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(o(33))}function wa(e){return e[fa]||null}var ka=[],Sa=-1;function ja(e){return{current:e}}function Ca(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ea(e,t){Sa++,ka[Sa]=e.current,e.current=t}var _a={},Pa=ja(_a),La=ja(!1),za=_a;function Ta(e,t){var n=e.type.contextTypes;if(!n)return _a;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,o={};for(a in n)o[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ra(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Na(){Ca(La),Ca(Pa)}function Oa(e,t,n){if(Pa.current!==_a)throw Error(o(168));Ea(Pa,t),Ea(La,n)}function Fa(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(o(108,U(e)||"Unknown",a));return B({},n,r)}function Ma(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||_a,za=Pa.current,Ea(Pa,e),Ea(La,La.current),!0}function Ba(e,t,n){var r=e.stateNode;if(!r)throw Error(o(169));n?(e=Fa(e,t,za),r.__reactInternalMemoizedMergedChildContext=e,Ca(La),Ca(Pa),Ea(Pa,e)):Ca(La),Ea(La,n)}var Ia=null,Da=!1,$a=!1;function Aa(e){null===Ia?Ia=[e]:Ia.push(e)}function Wa(){if(!$a&&null!==Ia){$a=!0;var e=0,t=xt;try{var n=Ia;for(xt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}Ia=null,Da=!1}catch(a){throw null!==Ia&&(Ia=Ia.slice(e+1)),Qe(Je,Wa),a}finally{xt=t,$a=!1}}return null}var Ua=[],Ha=0,Va=null,Ka=0,Qa=[],Ya=0,qa=null,Ga=1,Xa="";function Za(e,t){Ua[Ha++]=Ka,Ua[Ha++]=Va,Va=e,Ka=t}function Ja(e,t,n){Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,qa=e;var r=Ga;e=Xa;var a=32-it(r)-1;r&=~(1<<a),n+=1;var o=32-it(t)+a;if(30<o){var i=a-a%5;o=(r&(1<<i)-1).toString(32),r>>=i,a-=i,Ga=1<<32-it(t)+a|n<<a|r,Xa=o+e}else Ga=1<<o|n<<a|r,Xa=e}function eo(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function to(e){for(;e===Va;)Va=Ua[--Ha],Ua[Ha]=null,Ka=Ua[--Ha],Ua[Ha]=null;for(;e===qa;)qa=Qa[--Ya],Qa[Ya]=null,Xa=Qa[--Ya],Qa[Ya]=null,Ga=Qa[--Ya],Qa[Ya]=null}var no=null,ro=null,ao=!1,oo=null;function io(e,t){var n=Tu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function lo(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,no=e,ro=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,no=e,ro=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==qa?{id:Ga,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Tu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,no=e,ro=null,!0);default:return!1}}function so(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function uo(e){if(ao){var t=ro;if(t){var n=t;if(!lo(e,t)){if(so(e))throw Error(o(418));t=ua(n.nextSibling);var r=no;t&&lo(e,t)?io(r,n):(e.flags=-4097&e.flags|2,ao=!1,no=e)}}else{if(so(e))throw Error(o(418));e.flags=-4097&e.flags|2,ao=!1,no=e}}}function co(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;no=e}function po(e){if(e!==no)return!1;if(!ao)return co(e),ao=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ro)){if(so(e))throw fo(),Error(o(418));for(;t;)io(e,t),t=ua(t.nextSibling)}if(co(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ro=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ro=null}}else ro=no?ua(e.stateNode.nextSibling):null;return!0}function fo(){for(var e=ro;e;)e=ua(e.nextSibling)}function ho(){ro=no=null,ao=!1}function go(e){null===oo?oo=[e]:oo.push(e)}var mo=b.ReactCurrentBatchConfig;function vo(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(o(309));var r=n.stateNode}if(!r)throw Error(o(147,e));var a=r,i=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===i?t.ref:(t=function(e){var t=a.refs;null===e?delete t[i]:t[i]=e},t._stringRef=i,t)}if("string"!==typeof e)throw Error(o(284));if(!n._owner)throw Error(o(290,e))}return e}function yo(e,t){throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function xo(e){return(0,e._init)(e._payload)}function bo(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Nu(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Bu(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var o=n.type;return o===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===o||"object"===typeof o&&null!==o&&o.$$typeof===R&&xo(o)===t.type)?((r=a(t,n.props)).ref=vo(e,t,n),r.return=e,r):((r=Ou(n.type,n.key,n.props,null,e.mode,r)).ref=vo(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Iu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,o){return null===t||7!==t.tag?((t=Fu(n,e.mode,r,o)).return=e,t):((t=a(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Bu(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Ou(t.type,t.key,t.props,null,e.mode,n)).ref=vo(e,null,t),n.return=e,n;case k:return(t=Iu(t,e.mode,n)).return=e,t;case R:return p(e,(0,t._init)(t._payload),n)}if(te(t)||F(t))return(t=Fu(t,e.mode,n,null)).return=e,t;yo(e,t)}return null}function f(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case R:return f(e,t,(a=n._init)(n._payload),r)}if(te(n)||F(n))return null!==a?null:d(e,t,n,r,null);yo(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case R:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||F(r))return d(t,e=e.get(n)||null,r,a,null);yo(t,r)}return null}function g(a,o,l,s){for(var u=null,c=null,d=o,g=o=0,m=null;null!==d&&g<l.length;g++){d.index>g?(m=d,d=null):m=d.sibling;var v=f(a,d,l[g],s);if(null===v){null===d&&(d=m);break}e&&d&&null===v.alternate&&t(a,d),o=i(v,o,g),null===c?u=v:c.sibling=v,c=v,d=m}if(g===l.length)return n(a,d),ao&&Za(a,g),u;if(null===d){for(;g<l.length;g++)null!==(d=p(a,l[g],s))&&(o=i(d,o,g),null===c?u=d:c.sibling=d,c=d);return ao&&Za(a,g),u}for(d=r(a,d);g<l.length;g++)null!==(m=h(d,a,g,l[g],s))&&(e&&null!==m.alternate&&d.delete(null===m.key?g:m.key),o=i(m,o,g),null===c?u=m:c.sibling=m,c=m);return e&&d.forEach((function(e){return t(a,e)})),ao&&Za(a,g),u}function m(a,l,s,u){var c=F(s);if("function"!==typeof c)throw Error(o(150));if(null==(s=c.call(s)))throw Error(o(151));for(var d=c=null,g=l,m=l=0,v=null,y=s.next();null!==g&&!y.done;m++,y=s.next()){g.index>m?(v=g,g=null):v=g.sibling;var x=f(a,g,y.value,u);if(null===x){null===g&&(g=v);break}e&&g&&null===x.alternate&&t(a,g),l=i(x,l,m),null===d?c=x:d.sibling=x,d=x,g=v}if(y.done)return n(a,g),ao&&Za(a,m),c;if(null===g){for(;!y.done;m++,y=s.next())null!==(y=p(a,y.value,u))&&(l=i(y,l,m),null===d?c=y:d.sibling=y,d=y);return ao&&Za(a,m),c}for(g=r(a,g);!y.done;m++,y=s.next())null!==(y=h(g,a,m,y.value,u))&&(e&&null!==y.alternate&&g.delete(null===y.key?m:y.key),l=i(y,l,m),null===d?c=y:d.sibling=y,d=y);return e&&g.forEach((function(e){return t(a,e)})),ao&&Za(a,m),c}return function e(r,o,i,s){if("object"===typeof i&&null!==i&&i.type===S&&null===i.key&&(i=i.props.children),"object"===typeof i&&null!==i){switch(i.$$typeof){case w:e:{for(var u=i.key,c=o;null!==c;){if(c.key===u){if((u=i.type)===S){if(7===c.tag){n(r,c.sibling),(o=a(c,i.props.children)).return=r,r=o;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===R&&xo(u)===c.type){n(r,c.sibling),(o=a(c,i.props)).ref=vo(r,c,i),o.return=r,r=o;break e}n(r,c);break}t(r,c),c=c.sibling}i.type===S?((o=Fu(i.props.children,r.mode,s,i.key)).return=r,r=o):((s=Ou(i.type,i.key,i.props,null,r.mode,s)).ref=vo(r,o,i),s.return=r,r=s)}return l(r);case k:e:{for(c=i.key;null!==o;){if(o.key===c){if(4===o.tag&&o.stateNode.containerInfo===i.containerInfo&&o.stateNode.implementation===i.implementation){n(r,o.sibling),(o=a(o,i.children||[])).return=r,r=o;break e}n(r,o);break}t(r,o),o=o.sibling}(o=Iu(i,r.mode,s)).return=r,r=o}return l(r);case R:return e(r,o,(c=i._init)(i._payload),s)}if(te(i))return g(r,o,i,s);if(F(i))return m(r,o,i,s);yo(r,i)}return"string"===typeof i&&""!==i||"number"===typeof i?(i=""+i,null!==o&&6===o.tag?(n(r,o.sibling),(o=a(o,i)).return=r,r=o):(n(r,o),(o=Bu(i,r.mode,s)).return=r,r=o),l(r)):n(r,o)}}var wo=bo(!0),ko=bo(!1),So=ja(null),jo=null,Co=null,Eo=null;function _o(){Eo=Co=jo=null}function Po(e){var t=So.current;Ca(So),e._currentValue=t}function Lo(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function zo(e,t){jo=e,Eo=Co=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(xl=!0),e.firstContext=null)}function To(e){var t=e._currentValue;if(Eo!==e)if(e={context:e,memoizedValue:t,next:null},null===Co){if(null===jo)throw Error(o(308));Co=e,jo.dependencies={lanes:0,firstContext:e}}else Co=Co.next=e;return t}var Ro=null;function No(e){null===Ro?Ro=[e]:Ro.push(e)}function Oo(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,No(t)):(n.next=a.next,a.next=n),t.interleaved=n,Fo(e,r)}function Fo(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Mo=!1;function Bo(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Io(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Do(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function $o(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&Ps)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Fo(e,n)}return null===(a=r.interleaved)?(t.next=t,No(r)):(t.next=a.next,a.next=t),r.interleaved=t,Fo(e,n)}function Ao(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}function Wo(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,o=null;if(null!==(n=n.firstBaseUpdate)){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===o?a=o=i:o=o.next=i,n=n.next}while(null!==n);null===o?a=o=t:o=o.next=t}else a=o=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:o,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Uo(e,t,n,r){var a=e.updateQueue;Mo=!1;var o=a.firstBaseUpdate,i=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===i?o=u:i.next=u,i=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==i&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==o){var d=a.baseState;for(i=0,c=u=s=null,l=o;;){var p=l.lane,f=l.eventTime;if((r&p)===p){null!==c&&(c=c.next={eventTime:f,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,g=l;switch(p=t,f=n,g.tag){case 1:if("function"===typeof(h=g.payload)){d=h.call(f,d,p);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(p="function"===typeof(h=g.payload)?h.call(f,d,p):h)||void 0===p)break e;d=B({},d,p);break e;case 2:Mo=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(p=a.effects)?a.effects=[l]:p.push(l))}else f={eventTime:f,lane:p,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=f,s=d):c=c.next=f,i|=p;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(p=l).next,p.next=null,a.lastBaseUpdate=p,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{i|=a.lane,a=a.next}while(a!==t)}else null===o&&(a.shared.lanes=0);Ms|=i,e.lanes=i,e.memoizedState=d}}function Ho(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(o(191,a));a.call(r)}}}var Vo={},Ko=ja(Vo),Qo=ja(Vo),Yo=ja(Vo);function qo(e){if(e===Vo)throw Error(o(174));return e}function Go(e,t){switch(Ea(Yo,t),Ea(Qo,e),Ea(Ko,Vo),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Ko),Ea(Ko,t)}function Xo(){Ca(Ko),Ca(Qo),Ca(Yo)}function Zo(e){qo(Yo.current);var t=qo(Ko.current),n=se(t,e.type);t!==n&&(Ea(Qo,e),Ea(Ko,n))}function Jo(e){Qo.current===e&&(Ca(Ko),Ca(Qo))}var ei=ja(0);function ti(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ni=[];function ri(){for(var e=0;e<ni.length;e++)ni[e]._workInProgressVersionPrimary=null;ni.length=0}var ai=b.ReactCurrentDispatcher,oi=b.ReactCurrentBatchConfig,ii=0,li=null,si=null,ui=null,ci=!1,di=!1,pi=0,fi=0;function hi(){throw Error(o(321))}function gi(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function mi(e,t,n,r,a,i){if(ii=i,li=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ai.current=null===e||null===e.memoizedState?Ji:el,e=n(r,a),di){i=0;do{if(di=!1,pi=0,25<=i)throw Error(o(301));i+=1,ui=si=null,t.updateQueue=null,ai.current=tl,e=n(r,a)}while(di)}if(ai.current=Zi,t=null!==si&&null!==si.next,ii=0,ui=si=li=null,ci=!1,t)throw Error(o(300));return e}function vi(){var e=0!==pi;return pi=0,e}function yi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===ui?li.memoizedState=ui=e:ui=ui.next=e,ui}function xi(){if(null===si){var e=li.alternate;e=null!==e?e.memoizedState:null}else e=si.next;var t=null===ui?li.memoizedState:ui.next;if(null!==t)ui=t,si=e;else{if(null===e)throw Error(o(310));e={memoizedState:(si=e).memoizedState,baseState:si.baseState,baseQueue:si.baseQueue,queue:si.queue,next:null},null===ui?li.memoizedState=ui=e:ui=ui.next=e}return ui}function bi(e,t){return"function"===typeof t?t(e):t}function wi(e){var t=xi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=si,a=r.baseQueue,i=n.pending;if(null!==i){if(null!==a){var l=a.next;a.next=i.next,i.next=l}r.baseQueue=a=i,n.pending=null}if(null!==a){i=a.next,r=r.baseState;var s=l=null,u=null,c=i;do{var d=c.lane;if((ii&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var p={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=p,l=r):u=u.next=p,li.lanes|=d,Ms|=d}c=c.next}while(null!==c&&c!==i);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(xl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{i=a.lane,li.lanes|=i,Ms|=i,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ki(e){var t=xi(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,i=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{i=e(i,l.action),l=l.next}while(l!==a);lr(i,t.memoizedState)||(xl=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Si(){}function ji(e,t){var n=li,r=xi(),a=t(),i=!lr(r.memoizedState,a);if(i&&(r.memoizedState=a,xl=!0),r=r.queue,Mi(_i.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||null!==ui&&1&ui.memoizedState.tag){if(n.flags|=2048,Ti(9,Ei.bind(null,n,r,a,t),void 0,null),null===Ls)throw Error(o(349));0!==(30&ii)||Ci(n,t,a)}return a}function Ci(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ei(e,t,n,r){t.value=n,t.getSnapshot=r,Pi(t)&&Li(e)}function _i(e,t,n){return n((function(){Pi(t)&&Li(e)}))}function Pi(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function Li(e){var t=Fo(e,1);null!==t&&nu(t,e,1,-1)}function zi(e){var t=yi();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:bi,lastRenderedState:e},t.queue=e,e=e.dispatch=Yi.bind(null,li,e),[t.memoizedState,e]}function Ti(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=li.updateQueue)?(t={lastEffect:null,stores:null},li.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function Ri(){return xi().memoizedState}function Ni(e,t,n,r){var a=yi();li.flags|=e,a.memoizedState=Ti(1|t,n,void 0,void 0===r?null:r)}function Oi(e,t,n,r){var a=xi();r=void 0===r?null:r;var o=void 0;if(null!==si){var i=si.memoizedState;if(o=i.destroy,null!==r&&gi(r,i.deps))return void(a.memoizedState=Ti(t,n,o,r))}li.flags|=e,a.memoizedState=Ti(1|t,n,o,r)}function Fi(e,t){return Ni(8390656,8,e,t)}function Mi(e,t){return Oi(2048,8,e,t)}function Bi(e,t){return Oi(4,2,e,t)}function Ii(e,t){return Oi(4,4,e,t)}function Di(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function $i(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Oi(4,4,Di.bind(null,t,e),n)}function Ai(){}function Wi(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gi(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ui(e,t){var n=xi();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&gi(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Hi(e,t,n){return 0===(21&ii)?(e.baseState&&(e.baseState=!1,xl=!0),e.memoizedState=n):(lr(n,t)||(n=gt(),li.lanes|=n,Ms|=n,e.baseState=!0),t)}function Vi(e,t){var n=xt;xt=0!==n&&4>n?n:4,e(!0);var r=oi.transition;oi.transition={};try{e(!1),t()}finally{xt=n,oi.transition=r}}function Ki(){return xi().memoizedState}function Qi(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},qi(e))Gi(t,n);else if(null!==(n=Oo(e,t,n,r))){nu(n,e,r,eu()),Xi(n,t,r)}}function Yi(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(qi(e))Gi(t,a);else{var o=e.alternate;if(0===e.lanes&&(null===o||0===o.lanes)&&null!==(o=t.lastRenderedReducer))try{var i=t.lastRenderedState,l=o(i,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,i)){var s=t.interleaved;return null===s?(a.next=a,No(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Oo(e,t,a,r))&&(nu(n,e,r,a=eu()),Xi(n,t,r))}}function qi(e){var t=e.alternate;return e===li||null!==t&&t===li}function Gi(e,t){di=ci=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xi(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,yt(e,n)}}var Zi={readContext:To,useCallback:hi,useContext:hi,useEffect:hi,useImperativeHandle:hi,useInsertionEffect:hi,useLayoutEffect:hi,useMemo:hi,useReducer:hi,useRef:hi,useState:hi,useDebugValue:hi,useDeferredValue:hi,useTransition:hi,useMutableSource:hi,useSyncExternalStore:hi,useId:hi,unstable_isNewReconciler:!1},Ji={readContext:To,useCallback:function(e,t){return yi().memoizedState=[e,void 0===t?null:t],e},useContext:To,useEffect:Fi,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ni(4194308,4,Di.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ni(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ni(4,2,e,t)},useMemo:function(e,t){var n=yi();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=yi();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Qi.bind(null,li,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},yi().memoizedState=e},useState:zi,useDebugValue:Ai,useDeferredValue:function(e){return yi().memoizedState=e},useTransition:function(){var e=zi(!1),t=e[0];return e=Vi.bind(null,e[1]),yi().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=li,a=yi();if(ao){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===Ls)throw Error(o(349));0!==(30&ii)||Ci(r,t,n)}a.memoizedState=n;var i={value:n,getSnapshot:t};return a.queue=i,Fi(_i.bind(null,r,i,e),[e]),r.flags|=2048,Ti(9,Ei.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=yi(),t=Ls.identifierPrefix;if(ao){var n=Xa;t=":"+t+"R"+(n=(Ga&~(1<<32-it(Ga)-1)).toString(32)+n),0<(n=pi++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=fi++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:To,useCallback:Wi,useContext:To,useEffect:Mi,useImperativeHandle:$i,useInsertionEffect:Bi,useLayoutEffect:Ii,useMemo:Ui,useReducer:wi,useRef:Ri,useState:function(){return wi(bi)},useDebugValue:Ai,useDeferredValue:function(e){return Hi(xi(),si.memoizedState,e)},useTransition:function(){return[wi(bi)[0],xi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Ki,unstable_isNewReconciler:!1},tl={readContext:To,useCallback:Wi,useContext:To,useEffect:Mi,useImperativeHandle:$i,useInsertionEffect:Bi,useLayoutEffect:Ii,useMemo:Ui,useReducer:ki,useRef:Ri,useState:function(){return ki(bi)},useDebugValue:Ai,useDeferredValue:function(e){var t=xi();return null===si?t.memoizedState=e:Hi(t,si.memoizedState,e)},useTransition:function(){return[ki(bi)[0],xi().memoizedState]},useMutableSource:Si,useSyncExternalStore:ji,useId:Ki,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=B({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:B({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&We(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Do(r,a);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nu(t,e,a,r),Ao(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),o=Do(r,a);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=$o(e,o,a))&&(nu(t,e,a,r),Ao(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Do(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=$o(e,a,r))&&(nu(t,e,r,n),Ao(t,e,r))}};function ol(e,t,n,r,a,o,i){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,o,i):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,o))}function il(e,t,n){var r=!1,a=_a,o=t.contextType;return"object"===typeof o&&null!==o?o=To(o):(a=Ra(t)?za:Pa.current,o=(r=null!==(r=t.contextTypes)&&void 0!==r)?Ta(e,a):_a),t=new t(n,o),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=o),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Bo(e);var o=t.contextType;"object"===typeof o&&null!==o?a.context=To(o):(o=Ra(t)?za:Pa.current,a.context=Ta(e,o)),a.state=e.memoizedState,"function"===typeof(o=t.getDerivedStateFromProps)&&(rl(e,t,o,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),Uo(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=A(r),r=r.return}while(r);var a=n}catch(o){a="\nError generating stack: "+o.message+"\n"+o.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout((function(){throw n}))}}var pl="function"===typeof WeakMap?WeakMap:Map;function fl(e,t,n){(n=Do(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Hs||(Hs=!0,Vs=r),dl(0,t)},n}function hl(e,t,n){(n=Do(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var o=e.stateNode;return null!==o&&"function"===typeof o.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Ks?Ks=new Set([this]):Ks.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function gl(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new pl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function ml(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function vl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Do(-1,1)).tag=2,$o(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var yl=b.ReactCurrentOwner,xl=!1;function bl(e,t,n,r){t.child=null===e?ko(t,null,n,r):wo(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var o=t.ref;return zo(t,a),r=mi(e,t,n,r,o,a),n=vi(),null===e||xl?(ao&&n&&eo(t),t.flags|=1,bl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var o=n.type;return"function"!==typeof o||Ru(o)||void 0!==o.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Ou(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=o,Sl(e,t,o,r,a))}if(o=e.child,0===(e.lanes&a)){var i=o.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(i,r)&&e.ref===t.ref)return Hl(e,t,a)}return t.flags|=1,(e=Nu(o,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var o=e.memoizedProps;if(sr(o,r)&&e.ref===t.ref){if(xl=!1,t.pendingProps=r=o,0===(e.lanes&a))return t.lanes=e.lanes,Hl(e,t,a);0!==(131072&e.flags)&&(xl=!0)}}return El(e,t,n,r,a)}function jl(e,t,n){var r=t.pendingProps,a=r.children,o=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(Ns,Rs),Rs|=n;else{if(0===(1073741824&n))return e=null!==o?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(Ns,Rs),Rs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==o?o.baseLanes:n,Ea(Ns,Rs),Rs|=r}else null!==o?(r=o.baseLanes|n,t.memoizedState=null):r=n,Ea(Ns,Rs),Rs|=r;return bl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var o=Ra(n)?za:Pa.current;return o=Ta(t,o),zo(t,a),n=mi(e,t,n,r,o,a),r=vi(),null===e||xl?(ao&&r&&eo(t),t.flags|=1,bl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Hl(e,t,a))}function _l(e,t,n,r,a){if(Ra(n)){var o=!0;Ma(t)}else o=!1;if(zo(t,a),null===t.stateNode)Ul(e,t),il(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;"object"===typeof u&&null!==u?u=To(u):u=Ta(t,u=Ra(n)?za:Pa.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof i.getSnapshotBeforeUpdate;d||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,i,r,u),Mo=!1;var p=t.memoizedState;i.state=p,Uo(t,r,i,a),s=t.memoizedState,l!==r||p!==s||La.current||Mo?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Mo||ol(t,n,l,r,p,s,u))?(d||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,Io(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),i.props=u,d=t.pendingProps,p=i.context,"object"===typeof(s=n.contextType)&&null!==s?s=To(s):s=Ta(t,s=Ra(n)?za:Pa.current);var f=n.getDerivedStateFromProps;(c="function"===typeof f||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(l!==d||p!==s)&&ll(t,i,r,s),Mo=!1,p=t.memoizedState,i.state=p,Uo(t,r,i,a);var h=t.memoizedState;l!==d||p!==h||La.current||Mo?("function"===typeof f&&(rl(t,n,f,r),h=t.memoizedState),(u=Mo||ol(t,n,u,r,p,h,s)||!1)?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,h,s),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),i.props=r,i.state=h,i.context=s,r=u):("function"!==typeof i.componentDidUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||l===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return Pl(e,t,n,r,o,a)}function Pl(e,t,n,r,a,o){Cl(e,t);var i=0!==(128&t.flags);if(!r&&!i)return a&&Ba(t,n,!1),Hl(e,t,o);r=t.stateNode,yl.current=t;var l=i&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&i?(t.child=wo(t,e.child,null,o),t.child=wo(t,null,l,o)):bl(e,t,l,o),t.memoizedState=r.state,a&&Ba(t,n,!0),t.child}function Ll(e){var t=e.stateNode;t.pendingContext?Oa(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Oa(0,t.context,!1),Go(e,t.containerInfo)}function zl(e,t,n,r,a){return ho(),go(a),t.flags|=256,bl(e,t,n,r),t.child}var Tl,Rl,Nl,Ol,Fl={dehydrated:null,treeContext:null,retryLane:0};function Ml(e){return{baseLanes:e,cachePool:null,transitions:null}}function Bl(e,t,n){var r,a=t.pendingProps,i=ei.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&i)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(i|=1),Ea(ei,1&i),null===e)return uo(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Mu(s,a,0,null),e=Fu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Ml(n),t.memoizedState=Fl,e):Il(t,s));if(null!==(i=e.memoizedState)&&null!==(r=i.dehydrated))return function(e,t,n,r,a,i,l){if(n)return 256&t.flags?(t.flags&=-257,Dl(e,t,l,r=cl(Error(o(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(i=r.fallback,a=t.mode,r=Mu({mode:"visible",children:r.children},a,0,null),(i=Fu(i,a,l,null)).flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,0!==(1&t.mode)&&wo(t,e.child,null,l),t.child.memoizedState=Ml(l),t.memoizedState=Fl,i);if(0===(1&t.mode))return Dl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Dl(e,t,l,r=cl(i=Error(o(419)),r,void 0))}if(s=0!==(l&e.childLanes),xl||s){if(null!==(r=Ls)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==i.retryLane&&(i.retryLane=a,Fo(e,a),nu(r,e,a,-1))}return gu(),Dl(e,t,l,r=cl(Error(o(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=_u.bind(null,e),a._reactRetry=t,null):(e=i.treeContext,ro=ua(a.nextSibling),no=t,ao=!0,oo=null,null!==e&&(Qa[Ya++]=Ga,Qa[Ya++]=Xa,Qa[Ya++]=qa,Ga=e.id,Xa=e.overflow,qa=t),t=Il(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,i,n);if(l){l=a.fallback,s=t.mode,r=(i=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==i?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Nu(i,u)).subtreeFlags=14680064&i.subtreeFlags,null!==r?l=Nu(r,l):(l=Fu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Ml(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Fl,a}return e=(l=e.child).sibling,a=Nu(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Il(e,t){return(t=Mu({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Dl(e,t,n,r){return null!==r&&go(r),wo(t,e.child,null,n),(e=Il(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function $l(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),Lo(e.return,t,n)}function Al(e,t,n,r,a){var o=e.memoizedState;null===o?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=a)}function Wl(e,t,n){var r=t.pendingProps,a=r.revealOrder,o=r.tail;if(bl(e,t,r.children,n),0!==(2&(r=ei.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&$l(e,n,t);else if(19===e.tag)$l(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea(ei,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===ti(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Al(t,!1,a,n,o);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===ti(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Al(t,!0,n,null,o);break;case"together":Al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ul(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Hl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ms|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nu(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nu(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Vl(e,t){if(!ao)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Kl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Ql(e,t,n){var r=t.pendingProps;switch(to(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Kl(t),null;case 1:case 17:return Ra(t.type)&&Na(),Kl(t),null;case 3:return r=t.stateNode,Xo(),Ca(La),Ca(Pa),ri(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(po(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==oo&&(iu(oo),oo=null))),Rl(e,t),Kl(t),null;case 5:Jo(t);var a=qo(Yo.current);if(n=t.type,null!==e&&null!=t.stateNode)Nl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(o(166));return Kl(t),null}if(e=qo(Ko.current),po(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[pa]=t,r[fa]=i,e=0!==(1&t.mode),n){case"dialog":Dr("cancel",r),Dr("close",r);break;case"iframe":case"object":case"embed":Dr("load",r);break;case"video":case"audio":for(a=0;a<Fr.length;a++)Dr(Fr[a],r);break;case"source":Dr("error",r);break;case"img":case"image":case"link":Dr("error",r),Dr("load",r);break;case"details":Dr("toggle",r);break;case"input":G(r,i),Dr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},Dr("invalid",r);break;case"textarea":ae(r,i),Dr("invalid",r)}for(var s in ye(n,i),a=null,i)if(i.hasOwnProperty(s)){var u=i[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==i.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Dr("scroll",r)}switch(n){case"input":K(r),J(r,i,!0);break;case"textarea":K(r),ie(r);break;case"select":case"option":break;default:"function"===typeof i.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[pa]=t,e[fa]=r,Tl(e,t,!1,!1),t.stateNode=e;e:{switch(s=xe(n,r),n){case"dialog":Dr("cancel",e),Dr("close",e),a=r;break;case"iframe":case"object":case"embed":Dr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Fr.length;a++)Dr(Fr[a],e);a=r;break;case"source":Dr("error",e),a=r;break;case"img":case"image":case"link":Dr("error",e),Dr("load",e),a=r;break;case"details":Dr("toggle",e),a=r;break;case"input":G(e,r),a=q(e,r),Dr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=B({},r,{value:void 0}),Dr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Dr("invalid",e)}for(i in ye(n,a),u=a)if(u.hasOwnProperty(i)){var c=u[i];"style"===i?me(e,c):"dangerouslySetInnerHTML"===i?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===i?"string"===typeof c?("textarea"!==n||""!==c)&&pe(e,c):"number"===typeof c&&pe(e,""+c):"suppressContentEditableWarning"!==i&&"suppressHydrationWarning"!==i&&"autoFocus"!==i&&(l.hasOwnProperty(i)?null!=c&&"onScroll"===i&&Dr("scroll",e):null!=c&&x(e,i,c,s))}switch(n){case"input":K(e),J(e,r,!1);break;case"textarea":K(e),ie(e);break;case"option":null!=r.value&&e.setAttribute("value",""+H(r.value));break;case"select":e.multiple=!!r.multiple,null!=(i=r.value)?ne(e,!!r.multiple,i,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Kl(t),null;case 6:if(e&&null!=t.stateNode)Ol(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(n=qo(Yo.current),qo(Ko.current),po(t)){if(r=t.stateNode,n=t.memoizedProps,r[pa]=t,(i=r.nodeValue!==n)&&null!==(e=no))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}i&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[pa]=t,t.stateNode=r}return Kl(t),null;case 13:if(Ca(ei),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ao&&null!==ro&&0!==(1&t.mode)&&0===(128&t.flags))fo(),ho(),t.flags|=98560,i=!1;else if(i=po(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[pa]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Kl(t),i=!1}else null!==oo&&(iu(oo),oo=null),i=!0;if(!i)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&ei.current)?0===Os&&(Os=3):gu())),null!==t.updateQueue&&(t.flags|=4),Kl(t),null);case 4:return Xo(),Rl(e,t),null===e&&Wr(t.stateNode.containerInfo),Kl(t),null;case 10:return Po(t.type._context),Kl(t),null;case 19:if(Ca(ei),null===(i=t.memoizedState))return Kl(t),null;if(r=0!==(128&t.flags),null===(s=i.rendering))if(r)Vl(i,!1);else{if(0!==Os||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=ti(e))){for(t.flags|=128,Vl(i,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(i=n).flags&=14680066,null===(s=i.alternate)?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=s.childLanes,i.lanes=s.lanes,i.child=s.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=s.memoizedProps,i.memoizedState=s.memoizedState,i.updateQueue=s.updateQueue,i.type=s.type,e=s.dependencies,i.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea(ei,1&ei.current|2),t.child}e=e.sibling}null!==i.tail&&Xe()>Ws&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ti(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Vl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!s.alternate&&!ao)return Kl(t),null}else 2*Xe()-i.renderingStartTime>Ws&&1073741824!==n&&(t.flags|=128,r=!0,Vl(i,!1),t.lanes=4194304);i.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=i.last)?n.sibling=s:t.child=s,i.last=s)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=Xe(),t.sibling=null,n=ei.current,Ea(ei,r?1&n|2:1&n),t):(Kl(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&Rs)&&(Kl(t),6&t.subtreeFlags&&(t.flags|=8192)):Kl(t),null;case 24:case 25:return null}throw Error(o(156,t.tag))}function Yl(e,t){switch(to(t),t.tag){case 1:return Ra(t.type)&&Na(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return Xo(),Ca(La),Ca(Pa),ri(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Jo(t),null;case 13:if(Ca(ei),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(ei),null;case 4:return Xo(),null;case 10:return Po(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Tl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},Rl=function(){},Nl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,qo(Ko.current);var o,i=null;switch(n){case"input":a=q(e,a),r=q(e,r),i=[];break;case"select":a=B({},a,{value:void 0}),r=B({},r,{value:void 0}),i=[];break;case"textarea":a=re(e,a),r=re(e,r),i=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ye(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(o in s)s.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?i||(i=[]):(i=i||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(o in s)!s.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&s[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(i||(i=[]),i.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(i=i||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(i=i||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Dr("scroll",e),i||s===u||(i=[])):(i=i||[]).push(c,u))}n&&(i=i||[]).push("style",n);var c=i;(t.updateQueue=c)&&(t.flags|=4)}},Ol=function(e,t,n,r){n!==r&&(t.flags|=4)};var ql=!1,Gl=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){ju(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){ju(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var o=a.destroy;a.destroy=void 0,void 0!==o&&es(t,n,o)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function os(e){var t=e.alternate;null!==t&&(e.alternate=null,os(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[pa],delete t[fa],delete t[ga],delete t[ma],delete t[va])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function is(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||is(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function ps(e,t,n){for(n=n.child;null!==n;)fs(e,t,n),n=n.sibling}function fs(e,t,n){if(ot&&"function"===typeof ot.onCommitFiberUnmount)try{ot.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:Gl||Jl(n,t);case 6:var r=cs,a=ds;cs=null,ps(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),Wt(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,ps(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!Gl&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var o=a,i=o.destroy;o=o.tag,void 0!==i&&(0!==(2&o)||0!==(4&o))&&es(n,t,i),a=a.next}while(a!==r)}ps(e,t,n);break;case 1:if(!Gl&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ju(n,t,l)}ps(e,t,n);break;case 21:ps(e,t,n);break;case 22:1&n.mode?(Gl=(r=Gl)||null!==n.memoizedState,ps(e,t,n),Gl=r):ps(e,t,n);break;default:ps(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach((function(t){var r=Pu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}}function gs(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var i=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(o(160));fs(i,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){ju(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)ms(t,e),t=t.sibling}function ms(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(gs(t,e),vs(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(m){ju(e,e.return,m)}try{ns(5,e,e.return)}catch(m){ju(e,e.return,m)}}break;case 1:gs(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(gs(t,e),vs(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{pe(a,"")}catch(m){ju(e,e.return,m)}}if(4&r&&null!=(a=e.stateNode)){var i=e.memoizedProps,l=null!==n?n.memoizedProps:i,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===i.type&&null!=i.name&&X(a,i),xe(s,l);var c=xe(s,i);for(l=0;l<u.length;l+=2){var d=u[l],p=u[l+1];"style"===d?me(a,p):"dangerouslySetInnerHTML"===d?de(a,p):"children"===d?pe(a,p):x(a,d,p,c)}switch(s){case"input":Z(a,i);break;case"textarea":oe(a,i);break;case"select":var f=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!i.multiple;var h=i.value;null!=h?ne(a,!!i.multiple,h,!1):f!==!!i.multiple&&(null!=i.defaultValue?ne(a,!!i.multiple,i.defaultValue,!0):ne(a,!!i.multiple,i.multiple?[]:"",!1))}a[fa]=i}catch(m){ju(e,e.return,m)}}break;case 6:if(gs(t,e),vs(e),4&r){if(null===e.stateNode)throw Error(o(162));a=e.stateNode,i=e.memoizedProps;try{a.nodeValue=i}catch(m){ju(e,e.return,m)}}break;case 3:if(gs(t,e),vs(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Wt(t.containerInfo)}catch(m){ju(e,e.return,m)}break;case 4:default:gs(t,e),vs(e);break;case 13:gs(t,e),vs(e),8192&(a=e.child).flags&&(i=null!==a.memoizedState,a.stateNode.isHidden=i,!i||null!==a.alternate&&null!==a.alternate.memoizedState||(As=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(Gl=(c=Gl)||d,gs(t,e),Gl=c):gs(t,e),vs(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(p=Zl=d;null!==Zl;){switch(h=(f=Zl).child,f.tag){case 0:case 11:case 14:case 15:ns(4,f,f.return);break;case 1:Jl(f,f.return);var g=f.stateNode;if("function"===typeof g.componentWillUnmount){r=f,n=f.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(m){ju(r,n,m)}}break;case 5:Jl(f,f.return);break;case 22:if(null!==f.memoizedState){ws(p);continue}}null!==h?(h.return=f,Zl=h):ws(p)}d=d.sibling}e:for(d=null,p=e;;){if(5===p.tag){if(null===d){d=p;try{a=p.stateNode,c?"function"===typeof(i=a.style).setProperty?i.setProperty("display","none","important"):i.display="none":(s=p.stateNode,l=void 0!==(u=p.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=ge("display",l))}catch(m){ju(e,e.return,m)}}}else if(6===p.tag){if(null===d)try{p.stateNode.nodeValue=c?"":p.memoizedProps}catch(m){ju(e,e.return,m)}}else if((22!==p.tag&&23!==p.tag||null===p.memoizedState||p===e)&&null!==p.child){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;null===p.sibling;){if(null===p.return||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:gs(t,e),vs(e),4&r&&hs(e);case 21:}}function vs(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(is(n)){var r=n;break e}n=n.return}throw Error(o(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(pe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var i=r.stateNode.containerInfo;ss(e,ls(e),i);break;default:throw Error(o(161))}}catch(l){ju(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function ys(e,t,n){Zl=e,xs(e,t,n)}function xs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,o=a.child;if(22===a.tag&&r){var i=null!==a.memoizedState||ql;if(!i){var l=a.alternate,s=null!==l&&null!==l.memoizedState||Gl;l=ql;var u=Gl;if(ql=i,(Gl=s)&&!u)for(Zl=a;null!==Zl;)s=(i=Zl).child,22===i.tag&&null!==i.memoizedState?ks(a):null!==s?(s.return=i,Zl=s):ks(a);for(;null!==o;)Zl=o,xs(o,t,n),o=o.sibling;Zl=a,ql=l,Gl=u}bs(e)}else 0!==(8772&a.subtreeFlags)&&null!==o?(o.return=a,Zl=o):bs(e)}}function bs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:Gl||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!Gl)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;null!==i&&Ho(t,i,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Ho(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var p=d.dehydrated;null!==p&&Wt(p)}}}break;default:throw Error(o(163))}Gl||512&t.flags&&as(t)}catch(f){ju(t,t.return,f)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){ju(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){ju(t,a,s)}}var o=t.return;try{as(t)}catch(s){ju(t,o,s)}break;case 5:var i=t.return;try{as(t)}catch(s){ju(t,i,s)}}}catch(s){ju(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,js=Math.ceil,Cs=b.ReactCurrentDispatcher,Es=b.ReactCurrentOwner,_s=b.ReactCurrentBatchConfig,Ps=0,Ls=null,zs=null,Ts=0,Rs=0,Ns=ja(0),Os=0,Fs=null,Ms=0,Bs=0,Is=0,Ds=null,$s=null,As=0,Ws=1/0,Us=null,Hs=!1,Vs=null,Ks=null,Qs=!1,Ys=null,qs=0,Gs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&Ps)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&Ps)&&0!==Ts?Ts&-Ts:null!==mo.transition?(0===Js&&(Js=gt()),Js):0!==(e=xt)?e:e=void 0===(e=window.event)?16:Gt(e.type)}function nu(e,t,n,r){if(50<Gs)throw Gs=0,Xs=null,Error(o(185));vt(e,n,r),0!==(2&Ps)&&e===Ls||(e===Ls&&(0===(2&Ps)&&(Bs|=n),4===Os&&lu(e,Ts)),ru(e,r),1===n&&0===Ps&&0===(1&t.mode)&&(Ws=Xe()+500,Da&&Wa()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,o=e.pendingLanes;0<o;){var i=31-it(o),l=1<<i,s=a[i];-1===s?0!==(l&n)&&0===(l&r)||(a[i]=ft(l,t)):s<=t&&(e.expiredLanes|=l),o&=~l}}(e,t);var r=pt(e,e===Ls?Ts:0);if(0===r)null!==n&&Ye(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ye(n),1===t)0===e.tag?function(e){Da=!0,Aa(e)}(su.bind(null,e)):Aa(su.bind(null,e)),ia((function(){0===(6&Ps)&&Wa()})),n=null;else{switch(bt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=Lu(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&Ps))throw Error(o(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=pt(e,e===Ls?Ts:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=mu(e,r);else{t=r;var a=Ps;Ps|=2;var i=hu();for(Ls===e&&Ts===t||(Us=null,Ws=Xe()+500,pu(e,t));;)try{yu();break}catch(s){fu(e,s)}_o(),Cs.current=i,Ps=a,null!==zs?t=0:(Ls=null,Ts=0,t=Os)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=ou(e,a))),1===t)throw n=Fs,pu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],o=a.getSnapshot;a=a.value;try{if(!lr(o(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=mu(e,r))&&(0!==(i=ht(e))&&(r=i,t=ou(e,i))),1===t))throw n=Fs,pu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(o(345));case 2:case 5:wu(e,$s,Us);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=As+500-Xe())){if(0!==pt(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,$s,Us),t);break}wu(e,$s,Us);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-it(r);i=1<<l,(l=t[l])>a&&(a=l),r&=~i}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*js(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,$s,Us),r);break}wu(e,$s,Us);break;default:throw Error(o(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function ou(e,t){var n=Ds;return e.current.memoizedState.isDehydrated&&(pu(e,t).flags|=256),2!==(e=mu(e,t))&&(t=$s,$s=n,null!==t&&iu(t)),e}function iu(e){null===$s?$s=e:$s.push.apply($s,e)}function lu(e,t){for(t&=~Is,t&=~Bs,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-it(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&Ps))throw Error(o(327));ku();var t=pt(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=mu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=ou(e,r))}if(1===n)throw n=Fs,pu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(o(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,$s,Us),ru(e,Xe()),null}function uu(e,t){var n=Ps;Ps|=1;try{return e(t)}finally{0===(Ps=n)&&(Ws=Xe()+500,Da&&Wa())}}function cu(e){null!==Ys&&0===Ys.tag&&0===(6&Ps)&&ku();var t=Ps;Ps|=1;var n=_s.transition,r=xt;try{if(_s.transition=null,xt=1,e)return e()}finally{xt=r,_s.transition=n,0===(6&(Ps=t))&&Wa()}}function du(){Rs=Ns.current,Ca(Ns)}function pu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==zs)for(n=zs.return;null!==n;){var r=n;switch(to(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Na();break;case 3:Xo(),Ca(La),Ca(Pa),ri();break;case 5:Jo(r);break;case 4:Xo();break;case 13:case 19:Ca(ei);break;case 10:Po(r.type._context);break;case 22:case 23:du()}n=n.return}if(Ls=e,zs=e=Nu(e.current,null),Ts=Rs=t,Os=0,Fs=null,Is=Bs=Ms=0,$s=Ds=null,null!==Ro){for(t=0;t<Ro.length;t++)if(null!==(r=(n=Ro[t]).interleaved)){n.interleaved=null;var a=r.next,o=n.pending;if(null!==o){var i=o.next;o.next=a,r.next=i}n.pending=r}Ro=null}return e}function fu(e,t){for(;;){var n=zs;try{if(_o(),ai.current=Zi,ci){for(var r=li.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}ci=!1}if(ii=0,ui=si=li=null,di=!1,pi=0,Es.current=null,null===n||null===n.return){Os=1,Fs=t,zs=null;break}e:{var i=e,l=n.return,s=n,u=t;if(t=Ts,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,p=d.tag;if(0===(1&d.mode)&&(0===p||11===p||15===p)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=ml(l);if(null!==h){h.flags&=-257,vl(h,l,s,0,t),1&h.mode&&gl(i,c,t),u=c;var g=(t=h).updateQueue;if(null===g){var m=new Set;m.add(u),t.updateQueue=m}else g.add(u);break e}if(0===(1&t)){gl(i,c,t),gu();break e}u=Error(o(426))}else if(ao&&1&s.mode){var v=ml(l);if(null!==v){0===(65536&v.flags)&&(v.flags|=256),vl(v,l,s,0,t),go(ul(u,s));break e}}i=u=ul(u,s),4!==Os&&(Os=2),null===Ds?Ds=[i]:Ds.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,fl(0,u,t));break e;case 1:s=u;var y=i.type,x=i.stateNode;if(0===(128&i.flags)&&("function"===typeof y.getDerivedStateFromError||null!==x&&"function"===typeof x.componentDidCatch&&(null===Ks||!Ks.has(x)))){i.flags|=65536,t&=-t,i.lanes|=t,Wo(i,hl(i,s,t));break e}}i=i.return}while(null!==i)}bu(n)}catch(b){t=b,zs===n&&null!==n&&(zs=n=n.return);continue}break}}function hu(){var e=Cs.current;return Cs.current=Zi,null===e?Zi:e}function gu(){0!==Os&&3!==Os&&2!==Os||(Os=4),null===Ls||0===(268435455&Ms)&&0===(268435455&Bs)||lu(Ls,Ts)}function mu(e,t){var n=Ps;Ps|=2;var r=hu();for(Ls===e&&Ts===t||(Us=null,pu(e,t));;)try{vu();break}catch(a){fu(e,a)}if(_o(),Ps=n,Cs.current=r,null!==zs)throw Error(o(261));return Ls=null,Ts=0,Os}function vu(){for(;null!==zs;)xu(zs)}function yu(){for(;null!==zs&&!qe();)xu(zs)}function xu(e){var t=Ss(e.alternate,e,Rs);e.memoizedProps=e.pendingProps,null===t?bu(e):zs=t,Es.current=null}function bu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Ql(n,t,Rs)))return void(zs=n)}else{if(null!==(n=Yl(n,t)))return n.flags&=32767,void(zs=n);if(null===e)return Os=6,void(zs=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(zs=t);zs=t=e}while(null!==t);0===Os&&(Os=5)}function wu(e,t,n){var r=xt,a=_s.transition;try{_s.transition=null,xt=1,function(e,t,n,r){do{ku()}while(null!==Ys);if(0!==(6&Ps))throw Error(o(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(o(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-it(n),o=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~o}}(e,i),e===Ls&&(zs=Ls=null,Ts=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Qs||(Qs=!0,Lu(tt,(function(){return ku(),null}))),i=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||i){i=_s.transition,_s.transition=null;var l=xt;xt=1;var s=Ps;Ps|=4,Es.current=null,function(e,t){if(ea=Ht,fr(e=pr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==a&&3!==p.nodeType||(s=l+a),p!==i||0!==r&&3!==p.nodeType||(u=l+r),3===p.nodeType&&(l+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++c===a&&(s=l),f===i&&++d===r&&(u=l),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Ht=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var g=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==g){var m=g.memoizedProps,v=g.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?m:nl(t.type,m),v);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;1===b.nodeType?b.textContent="":9===b.nodeType&&b.documentElement&&b.removeChild(b.documentElement);break;default:throw Error(o(163))}}catch(w){ju(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}g=ts,ts=!1}(e,n),ms(n,e),hr(ta),Ht=!!ea,ta=ea=null,e.current=n,ys(n,e,a),Ge(),Ps=s,xt=l,_s.transition=i}else e.current=n;if(Qs&&(Qs=!1,Ys=e,qs=a),i=e.pendingLanes,0===i&&(Ks=null),function(e){if(ot&&"function"===typeof ot.onCommitFiberRoot)try{ot.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Hs)throw Hs=!1,e=Vs,Vs=null,e;0!==(1&qs)&&0!==e.tag&&ku(),i=e.pendingLanes,0!==(1&i)?e===Xs?Gs++:(Gs=0,Xs=e):Gs=0,Wa()}(e,t,n,r)}finally{_s.transition=a,xt=r}return null}function ku(){if(null!==Ys){var e=bt(qs),t=_s.transition,n=xt;try{if(_s.transition=null,xt=16>e?16:e,null===Ys)var r=!1;else{if(e=Ys,Ys=null,qs=0,0!==(6&Ps))throw Error(o(331));var a=Ps;for(Ps|=4,Zl=e.current;null!==Zl;){var i=Zl,l=i.child;if(0!==(16&Zl.flags)){var s=i.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,i)}var p=d.child;if(null!==p)p.return=d,Zl=p;else for(;null!==Zl;){var f=(d=Zl).sibling,h=d.return;if(os(d),d===c){Zl=null;break}if(null!==f){f.return=h,Zl=f;break}Zl=h}}}var g=i.alternate;if(null!==g){var m=g.child;if(null!==m){g.child=null;do{var v=m.sibling;m.sibling=null,m=v}while(null!==m)}}Zl=i}}if(0!==(2064&i.subtreeFlags)&&null!==l)l.return=i,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(i=Zl).flags))switch(i.tag){case 0:case 11:case 15:ns(9,i,i.return)}var y=i.sibling;if(null!==y){y.return=i.return,Zl=y;break e}Zl=i.return}}var x=e.current;for(Zl=x;null!==Zl;){var b=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==b)b.return=l,Zl=b;else e:for(l=x;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){ju(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(Ps=a,Wa(),ot&&"function"===typeof ot.onPostCommitFiberRoot)try{ot.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{xt=n,_s.transition=t}}return!1}function Su(e,t,n){e=$o(e,t=fl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(vt(e,1,t),ru(e,t))}function ju(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ks||!Ks.has(r))){t=$o(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(vt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,Ls===e&&(Ts&n)===n&&(4===Os||3===Os&&(130023424&Ts)===Ts&&500>Xe()-As?pu(e,0):Is|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Fo(e,t))&&(vt(e,t,n),ru(e,n))}function _u(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function Pu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(o(314))}null!==r&&r.delete(t),Eu(e,n)}function Lu(e,t){return Qe(e,t)}function zu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Tu(e,t,n,r){return new zu(e,t,n,r)}function Ru(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nu(e,t){var n=e.alternate;return null===n?((n=Tu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ou(e,t,n,r,a,i){var l=2;if(r=e,"function"===typeof e)Ru(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Fu(n.children,a,i,t);case j:l=8,a|=8;break;case C:return(e=Tu(12,n,t,2|a)).elementType=C,e.lanes=i,e;case L:return(e=Tu(13,n,t,a)).elementType=L,e.lanes=i,e;case z:return(e=Tu(19,n,t,a)).elementType=z,e.lanes=i,e;case N:return Mu(n,a,i,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case _:l=9;break e;case P:l=11;break e;case T:l=14;break e;case R:l=16,r=null;break e}throw Error(o(130,null==e?e:typeof e,""))}return(t=Tu(l,n,t,a)).elementType=e,t.type=r,t.lanes=i,t}function Fu(e,t,n,r){return(e=Tu(7,e,r,t)).lanes=n,e}function Mu(e,t,n,r){return(e=Tu(22,e,r,t)).elementType=N,e.lanes=n,e.stateNode={isHidden:!1},e}function Bu(e,t,n){return(e=Tu(6,e,null,t)).lanes=n,e}function Iu(e,t,n){return(t=Tu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Du(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=mt(0),this.expirationTimes=mt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=mt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function $u(e,t,n,r,a,o,i,l,s){return e=new Du(e,t,n,l,s),1===t?(t=1,!0===o&&(t|=8)):t=0,o=Tu(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bo(o),e}function Au(e){if(!e)return _a;e:{if(We(e=e._reactInternals)!==e||1!==e.tag)throw Error(o(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(o(171))}if(1===e.tag){var n=e.type;if(Ra(n))return Fa(e,n,t)}return t}function Wu(e,t,n,r,a,o,i,l,s){return(e=$u(n,r,!0,e,0,o,0,l,s)).context=Au(null),n=e.current,(o=Do(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,$o(n,o,a),e.current.lanes=a,vt(e,a,r),ru(e,r),e}function Uu(e,t,n,r){var a=t.current,o=eu(),i=tu(a);return n=Au(n),null===t.context?t.context=n:t.pendingContext=n,(t=Do(o,i)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=$o(a,t,i))&&(nu(e,a,i,o),Ao(e,a,i)),i}function Hu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Vu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Ku(e,t){Vu(e,t),(e=e.alternate)&&Vu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||La.current)xl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return xl=!1,function(e,t,n){switch(t.tag){case 3:Ll(t),ho();break;case 5:Zo(t);break;case 1:Ra(t.type)&&Ma(t);break;case 4:Go(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(So,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea(ei,1&ei.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Bl(e,t,n):(Ea(ei,1&ei.current),null!==(e=Hl(e,t,n))?e.sibling:null);Ea(ei,1&ei.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return Wl(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea(ei,ei.current),r)break;return null;case 22:case 23:return t.lanes=0,jl(e,t,n)}return Hl(e,t,n)}(e,t,n);xl=0!==(131072&e.flags)}else xl=!1,ao&&0!==(1048576&t.flags)&&Ja(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Ul(e,t),e=t.pendingProps;var a=Ta(t,Pa.current);zo(t,n),a=mi(null,t,r,e,a,n);var i=vi();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ra(r)?(i=!0,Ma(t)):i=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Bo(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=Pl(null,t,r,!0,i,n)):(t.tag=0,ao&&i&&eo(t),bl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Ul(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return Ru(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===P)return 11;if(e===T)return 14}return 2}(r),e=nl(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=_l(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(o(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,El(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,_l(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(Ll(t),null===e)throw Error(o(387));r=t.pendingProps,a=(i=t.memoizedState).element,Io(e,t),Uo(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=zl(e,t,r,n,a=ul(Error(o(423)),t));break e}if(r!==a){t=zl(e,t,r,n,a=ul(Error(o(424)),t));break e}for(ro=ua(t.stateNode.containerInfo.firstChild),no=t,ao=!0,oo=null,n=ko(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===a){t=Hl(e,t,n);break e}bl(e,t,r,n)}t=t.child}return t;case 5:return Zo(t),null===e&&uo(t),r=t.type,a=t.pendingProps,i=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==i&&na(r,i)&&(t.flags|=32),Cl(e,t),bl(e,t,l,n),t.child;case 6:return null===e&&uo(t),null;case 13:return Bl(e,t,n);case 4:return Go(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=wo(t,null,r,n):bl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return bl(e,t,t.pendingProps,n),t.child;case 8:case 12:return bl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,i=t.memoizedProps,l=a.value,Ea(So,r._currentValue),r._currentValue=l,null!==i)if(lr(i.value,l)){if(i.children===a.children&&!La.current){t=Hl(e,t,n);break e}}else for(null!==(i=t.child)&&(i.return=t);null!==i;){var s=i.dependencies;if(null!==s){l=i.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===i.tag){(u=Do(-1,n&-n)).tag=2;var c=i.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}i.lanes|=n,null!==(u=i.alternate)&&(u.lanes|=n),Lo(i.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===i.tag)l=i.type===t.type?null:i.child;else if(18===i.tag){if(null===(l=i.return))throw Error(o(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),Lo(l,n,t),l=i.sibling}else l=i.child;if(null!==l)l.return=i;else for(l=i;null!==l;){if(l===t){l=null;break}if(null!==(i=l.sibling)){i.return=l.return,l=i;break}l=l.return}i=l}bl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,zo(t,n),r=r(a=To(a)),t.flags|=1,bl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Ul(e,t),t.tag=1,Ra(r)?(e=!0,Ma(t)):e=!1,zo(t,n),il(t,r,a),sl(t,r,a,n),Pl(null,t,r,!0,e,n);case 19:return Wl(e,t,n);case 22:return jl(e,t,n)}throw Error(o(156,t.tag))};var Qu="function"===typeof reportError?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}function qu(e){this._internalRoot=e}function Gu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var o=n._reactRootContainer;if(o){var i=o;if("function"===typeof a){var l=a;a=function(){var e=Hu(i);l.call(e)}}Uu(t,i,e,a)}else i=function(e,t,n,r,a){if(a){if("function"===typeof r){var o=r;r=function(){var e=Hu(i);o.call(e)}}var i=Wu(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=i,e[ha]=i.current,Wr(8===e.nodeType?e.parentNode:e),cu(),i}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Hu(s);l.call(e)}}var s=$u(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,Wr(8===e.nodeType?e.parentNode:e),cu((function(){Uu(t,s,n,r)})),s}(n,t,e,a,r);return Hu(i)}qu.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Uu(e,t,null,null)},qu.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu((function(){Uu(null,e,null,null)})),t[ha]=null}},qu.prototype.unstable_scheduleHydration=function(e){if(e){var t=jt();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Nt.length&&0!==t&&t<Nt[n].priority;n++);Nt.splice(n,0,e),0===n&&Bt(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(yt(t,1|n),ru(t,Xe()),0===(6&Ps)&&(Ws=Xe()+500,Wa()))}break;case 13:cu((function(){var t=Fo(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}})),Ku(e,1)}},kt=function(e){if(13===e.tag){var t=Fo(e,134217728);if(null!==t)nu(t,e,134217728,eu());Ku(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Fo(e,t);if(null!==n)nu(n,e,t,eu());Ku(e,t)}},jt=function(){return xt},Ct=function(e,t){var n=xt;try{return xt=e,t()}finally{xt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(o(90));Q(r),Z(r,a)}}}break;case"textarea":oe(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},Pe=uu,Le=cu;var ec={usingClientEntryPoint:!1,Events:[xa,ba,wa,Ee,_e,uu]},tc={findFiberByHostInstance:ya,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=Ve(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),ot=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!Gu(t))throw Error(o(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!Gu(e))throw Error(o(299));var n=!1,r="",a=Qu;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=$u(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,Wr(8===e.nodeType?e.parentNode:e),new Yu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=null===(e=Ve(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(o(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(o(405));var r=null!=n&&n.hydratedSources||null,a=!1,i="",l=Qu;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=Wu(t,null,e,1,null!=n?n:null,a,0,i,l),e[ha]=t.current,Wr(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new qu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(o(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(o(40));return!!e._reactRootContainer&&(cu((function(){Ju(null,null,e,!1,(function(){e._reactRootContainer=null,e[ha]=null}))})),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(o(200));if(null==e||void 0===e._reactInternals)throw Error(o(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},853:(e,t,n)=>{"use strict";e.exports=n(234)},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},(()=>{var e,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__;n.t=function(r,a){if(1&a&&(r=this(r)),8&a)return r;if("object"===typeof r&&r){if(4&a&&r.__esModule)return r;if(16&a&&"function"===typeof r.then)return r}var o=Object.create(null);n.r(o);var i={};e=e||[null,t({}),t([]),t(t)];for(var l=2&a&&r;"object"==typeof l&&!~e.indexOf(l);l=t(l))Object.getOwnPropertyNames(l).forEach((e=>i[e]=()=>r[e]));return i.default=()=>r,n.d(o,i),o}})(),n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".4281a8a5.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="kulcha-app:";n.l=(r,a,o,i)=>{if(e[r])e[r].push(a);else{var l,s;if(void 0!==o)for(var u=document.getElementsByTagName("script"),c=0;c<u.length;c++){var d=u[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+o){l=d;break}}l||(s=!0,(l=document.createElement("script")).charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+o),l.src=r),e[r]=[a];var p=(t,n)=>{l.onerror=l.onload=null,clearTimeout(f);var a=e[r];if(delete e[r],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=p.bind(null,l.onerror),l.onload=p.bind(null,l.onload),s&&document.head.appendChild(l)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var o=new Promise(((n,r)=>a=e[t]=[n,r]));r.push(a[2]=o);var i=n.p+n.u(t),l=new Error;n.l(i,(r=>{if(n.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var o=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;l.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",l.name="ChunkLoadError",l.type=o,l.request=i,a[1](l)}}),"chunk-"+t,t)}};var t=(t,r)=>{var a,o,i=r[0],l=r[1],s=r[2],u=0;if(i.some((t=>0!==e[t]))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)s(n)}for(t&&t(r);u<i.length;u++)o=i[u],n.o(e,o)&&e[o]&&e[o][0](),e[o]=0},r=self.webpackChunkkulcha_app=self.webpackChunkkulcha_app||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e,t=n(43),r=n.t(t,2),a=n(391),o=n(950),i=n.t(o,2);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(this,arguments)}!function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(e||(e={}));const s="popstate";function u(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function c(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function d(e,t){return{usr:e.state,key:e.key,idx:t}}function p(e,t,n,r){return void 0===n&&(n=null),l({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?h(t):t,{state:n,key:t&&t.key||r||Math.random().toString(36).substr(2,8)})}function f(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function h(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function g(t,n,r,a){void 0===a&&(a={});let{window:o=document.defaultView,v5Compat:i=!1}=a,c=o.history,h=e.Pop,g=null,m=v();function v(){return(c.state||{idx:null}).idx}function y(){h=e.Pop;let t=v(),n=null==t?null:t-m;m=t,g&&g({action:h,location:b.location,delta:n})}function x(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:f(e);return n=n.replace(/ $/,"%20"),u(t,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,t)}null==m&&(m=0,c.replaceState(l({},c.state,{idx:m}),""));let b={get action(){return h},get location(){return t(o,c)},listen(e){if(g)throw new Error("A history only accepts one active listener");return o.addEventListener(s,y),g=e,()=>{o.removeEventListener(s,y),g=null}},createHref:e=>n(o,e),createURL:x,encodeLocation(e){let t=x(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(t,n){h=e.Push;let a=p(b.location,t,n);r&&r(a,t),m=v()+1;let l=d(a,m),s=b.createHref(a);try{c.pushState(l,"",s)}catch(u){if(u instanceof DOMException&&"DataCloneError"===u.name)throw u;o.location.assign(s)}i&&g&&g({action:h,location:b.location,delta:1})},replace:function(t,n){h=e.Replace;let a=p(b.location,t,n);r&&r(a,t),m=v();let o=d(a,m),l=b.createHref(a);c.replaceState(o,"",l),i&&g&&g({action:h,location:b.location,delta:0})},go:e=>c.go(e)};return b}var m;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(m||(m={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,n){return void 0===n&&(n="/"),y(e,t,n,!1)}function y(e,t,n,r){let a=R(("string"===typeof t?h(t):t).pathname||"/",n);if(null==a)return null;let o=x(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=T(a);i=L(o[l],e,r)}return i}function x(e,t,n,r){void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===r&&(r="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(u(i.relativePath.startsWith(r),'Absolute route path "'+i.relativePath+'" nested under path "'+r+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(r.length));let l=B([r,i.relativePath]),s=n.concat(i);e.children&&e.children.length>0&&(u(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+l+'".'),x(e.children,t,s,l)),(null!=e.path||e.index)&&t.push({path:l,score:P(l,e.index),routesMeta:s})};return e.forEach(((e,t)=>{var n;if(""!==e.path&&null!=(n=e.path)&&n.includes("?"))for(let r of b(e.path))a(e,t,r);else a(e,t)})),t}function b(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,a=n.endsWith("?"),o=n.replace(/\?$/,"");if(0===r.length)return a?[o,""]:[o];let i=b(r.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const w=/^:[\w-]+$/,k=3,S=2,j=1,C=10,E=-2,_=e=>"*"===e;function P(e,t){let n=e.split("/"),r=n.length;return n.some(_)&&(r+=E),t&&(r+=S),n.filter((e=>!_(e))).reduce(((e,t)=>e+(w.test(t)?k:""===t?j:C)),r)}function L(e,t,n){void 0===n&&(n=!1);let{routesMeta:r}=e,a={},o="/",i=[];for(let l=0;l<r.length;++l){let e=r[l],s=l===r.length-1,u="/"===o?t:t.slice(o.length)||"/",c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),d=e.route;if(!c&&s&&n&&!r[r.length-1].route.index&&(c=z({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:B([o,c.pathname]),pathnameBase:I(B([o,c.pathnameBase])),route:d}),"/"!==c.pathnameBase&&(o=B([o,c.pathnameBase]))}return i}function z(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=function(e,t,n){void 0===t&&(t=!1);void 0===n&&(n=!0);c("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let r=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(r.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,r]}(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:a}=t;if("*"===r){let e=l[n]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[n];return e[r]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return c(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function R(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function N(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the `to."+n+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function O(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function F(e,t){let n=O(e);return t?n.map(((e,t)=>t===n.length-1?e.pathname:e.pathnameBase)):n.map((e=>e.pathnameBase))}function M(e,t,n,r){let a;void 0===r&&(r=!1),"string"===typeof e?a=h(e):(a=l({},e),u(!a.pathname||!a.pathname.includes("?"),N("?","pathname","search",a)),u(!a.pathname||!a.pathname.includes("#"),N("#","pathname","hash",a)),u(!a.search||!a.search.includes("#"),N("#","search","hash",a)));let o,i=""===e||""===a.pathname,s=i?"/":a.pathname;if(null==s)o=n;else{let e=t.length-1;if(!r&&s.startsWith("..")){let t=s.split("/");for(;".."===t[0];)t.shift(),e-=1;a.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:n,search:r="",hash:a=""}="string"===typeof e?h(e):e,o=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:o,search:D(r),hash:$(a)}}(a,o),d=s&&"/"!==s&&s.endsWith("/"),p=(i||"."===s)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}const B=e=>e.join("/").replace(/\/\/+/g,"/"),I=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),D=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",$=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";Error;function A(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const W=["post","put","patch","delete"],U=(new Set(W),["get",...W]);new Set(U),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred");function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},H.apply(this,arguments)}const V=t.createContext(null);const K=t.createContext(null);const Q=t.createContext(null);const Y=t.createContext(null);const q=t.createContext({outlet:null,matches:[],isDataRoute:!1});const G=t.createContext(null);function X(){return null!=t.useContext(Y)}function Z(){return X()||u(!1),t.useContext(Y).location}function J(e){t.useContext(Q).static||t.useLayoutEffect(e)}function ee(){let{isDataRoute:e}=t.useContext(q);return e?function(){let{router:e}=ue(le.UseNavigateStable),n=de(se.UseNavigateStable),r=t.useRef(!1);return J((()=>{r.current=!0})),t.useCallback((function(t,a){void 0===a&&(a={}),r.current&&("number"===typeof t?e.navigate(t):e.navigate(t,H({fromRouteId:n},a)))}),[e,n])}():function(){X()||u(!1);let e=t.useContext(V),{basename:n,future:r,navigator:a}=t.useContext(Q),{matches:o}=t.useContext(q),{pathname:i}=Z(),l=JSON.stringify(F(o,r.v7_relativeSplatPath)),s=t.useRef(!1);return J((()=>{s.current=!0})),t.useCallback((function(t,r){if(void 0===r&&(r={}),!s.current)return;if("number"===typeof t)return void a.go(t);let o=M(t,JSON.parse(l),i,"path"===r.relative);null==e&&"/"!==n&&(o.pathname="/"===o.pathname?n:B([n,o.pathname])),(r.replace?a.replace:a.push)(o,r.state,r)}),[n,a,l,i,e])}()}function te(n,r,a,o){X()||u(!1);let{navigator:i,static:l}=t.useContext(Q),{matches:s}=t.useContext(q),c=s[s.length-1],d=c?c.params:{},p=(c&&c.pathname,c?c.pathnameBase:"/");c&&c.route;let f,g=Z();if(r){var m;let e="string"===typeof r?h(r):r;"/"===p||(null==(m=e.pathname)?void 0:m.startsWith(p))||u(!1),f=e}else f=g;let y=f.pathname||"/",x=y;if("/"!==p){let e=p.replace(/^\//,"").split("/");x="/"+y.replace(/^\//,"").split("/").slice(e.length).join("/")}let b=!l&&a&&a.matches&&a.matches.length>0?a.matches:v(n,{pathname:x});let w=ie(b&&b.map((e=>Object.assign({},e,{params:Object.assign({},d,e.params),pathname:B([p,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?p:B([p,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),s,a,o);return r&&w?t.createElement(Y.Provider,{value:{location:H({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:e.Pop}},w):w}function ne(){let e=function(){var e;let n=t.useContext(G),r=ce(se.UseRouteError),a=de(se.UseRouteError);if(void 0!==n)return n;return null==(e=r.errors)?void 0:e[a]}(),n=A(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,a="rgba(200,200,200, 0.5)",o={padding:"0.5rem",backgroundColor:a};return t.createElement(t.Fragment,null,t.createElement("h2",null,"Unexpected Application Error!"),t.createElement("h3",{style:{fontStyle:"italic"}},n),r?t.createElement("pre",{style:o},r):null,null)}const re=t.createElement(ne,null);class ae extends t.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?t.createElement(q.Provider,{value:this.props.routeContext},t.createElement(G.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function oe(e){let{routeContext:n,match:r,children:a}=e,o=t.useContext(V);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),t.createElement(q.Provider,{value:n},a)}function ie(e,n,r,a){var o;if(void 0===n&&(n=[]),void 0===r&&(r=null),void 0===a&&(a=null),null==e){var i;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(i=a)&&i.v7_partialHydration&&0===n.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let l=e,s=null==(o=r)?void 0:o.errors;if(null!=s){let e=l.findIndex((e=>e.route.id&&void 0!==(null==s?void 0:s[e.route.id])));e>=0||u(!1),l=l.slice(0,Math.min(l.length,e+1))}let c=!1,d=-1;if(r&&a&&a.v7_partialHydration)for(let t=0;t<l.length;t++){let e=l[t];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(d=t),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,l=d>=0?l.slice(0,d+1):[l[0]];break}}}return l.reduceRight(((e,a,o)=>{let i,u=!1,p=null,f=null;var h;r&&(i=s&&a.route.id?s[a.route.id]:void 0,p=a.route.errorElement||re,c&&(d<0&&0===o?(h="route-fallback",!1||pe[h]||(pe[h]=!0),u=!0,f=null):d===o&&(u=!0,f=a.route.hydrateFallbackElement||null)));let g=n.concat(l.slice(0,o+1)),m=()=>{let n;return n=i?p:u?f:a.route.Component?t.createElement(a.route.Component,null):a.route.element?a.route.element:e,t.createElement(oe,{match:a,routeContext:{outlet:e,matches:g,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?t.createElement(ae,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):m()}),null)}var le=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(le||{}),se=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(se||{});function ue(e){let n=t.useContext(V);return n||u(!1),n}function ce(e){let n=t.useContext(K);return n||u(!1),n}function de(e){let n=function(){let e=t.useContext(q);return e||u(!1),e}(),r=n.matches[n.matches.length-1];return r.route.id||u(!1),r.route.id}const pe={};function fe(e,t){null==e||e.v7_startTransition,void 0===(null==e?void 0:e.v7_relativeSplatPath)&&(!t||t.v7_relativeSplatPath),t&&(t.v7_fetcherPersist,t.v7_normalizeFormMethod,t.v7_partialHydration,t.v7_skipActionErrorRevalidation)}r.startTransition;function he(e){u(!1)}function ge(n){let{basename:r="/",children:a=null,location:o,navigationType:i=e.Pop,navigator:l,static:s=!1,future:c}=n;X()&&u(!1);let d=r.replace(/^\/*/,"/"),p=t.useMemo((()=>({basename:d,navigator:l,static:s,future:H({v7_relativeSplatPath:!1},c)})),[d,c,l,s]);"string"===typeof o&&(o=h(o));let{pathname:f="/",search:g="",hash:m="",state:v=null,key:y="default"}=o,x=t.useMemo((()=>{let e=R(f,d);return null==e?null:{location:{pathname:e,search:g,hash:m,state:v,key:y},navigationType:i}}),[d,f,g,m,v,y,i]);return null==x?null:t.createElement(Q.Provider,{value:p},t.createElement(Y.Provider,{children:a,value:x}))}function me(e){let{children:t,location:n}=e;return te(ve(t),n)}new Promise((()=>{}));t.Component;function ve(e,n){void 0===n&&(n=[]);let r=[];return t.Children.forEach(e,((e,a)=>{if(!t.isValidElement(e))return;let o=[...n,a];if(e.type===t.Fragment)return void r.push.apply(r,ve(e.props.children,o));e.type!==he&&u(!1),e.props.index&&e.props.children&&u(!1);let i={id:e.props.id||o.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(i.children=ve(e.props.children,o)),r.push(i)})),r}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);try{window.__reactRouterVersion="6"}catch(zi){}new Map;const ye=r.startTransition;i.flushSync,r.useId;function xe(e){let{basename:n,children:r,future:a,window:o}=e,i=t.useRef();var l;null==i.current&&(i.current=(void 0===(l={window:o,v5Compat:!0})&&(l={}),g((function(e,t){let{pathname:n,search:r,hash:a}=e.location;return p("",{pathname:n,search:r,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:f(t)}),null,l)));let s=i.current,[u,c]=t.useState({action:s.action,location:s.location}),{v7_startTransition:d}=a||{},h=t.useCallback((e=>{d&&ye?ye((()=>c(e))):c(e)}),[c,d]);return t.useLayoutEffect((()=>s.listen(h)),[s,h]),t.useEffect((()=>fe(a)),[a]),t.createElement(ge,{basename:n,children:r,location:u.location,navigationType:u.action,navigator:s,future:a})}"undefined"!==typeof window&&"undefined"!==typeof window.document&&window.document.createElement;var be,we;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(be||(be={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(we||(we={}));const ke=[{id:1,name:"\u041c\u043e\u0441\u043a\u0432\u0430"},{id:2,name:"\u0421\u0430\u043d\u043a\u0442-\u041f\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"},{id:3,name:"\u041d\u043e\u0432\u043e\u0441\u0438\u0431\u0438\u0440\u0441\u043a"},{id:4,name:"\u0415\u043a\u0430\u0442\u0435\u0440\u0438\u043d\u0431\u0443\u0440\u0433"},{id:5,name:"\u041a\u0430\u0437\u0430\u043d\u044c"}],Se=[{id:1,name:"Kulcha \u0426\u0435\u043d\u0442\u0440\u0430\u043b\u044c\u043d\u044b\u0439",cityId:1,address:"\u0443\u043b. \u0422\u0432\u0435\u0440\u0441\u043a\u0430\u044f, 5",description:"\u041b\u0443\u0447\u0448\u0438\u0439 \u0438\u043d\u0434\u0438\u0439\u0441\u043a\u0438\u0439 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u0432 \u0446\u0435\u043d\u0442\u0440\u0435 \u041c\u043e\u0441\u043a\u0432\u044b"},{id:2,name:"Kulcha \u042d\u043a\u0441\u043f\u0440\u0435\u0441\u0441",cityId:1,address:"\u041a\u0443\u0442\u0443\u0437\u043e\u0432\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, 32",description:"\u0411\u044b\u0441\u0442\u0440\u0430\u044f \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0430 \u0432\u043a\u0443\u0441\u043d\u043e\u0439 \u0438\u043d\u0434\u0438\u0439\u0441\u043a\u043e\u0439 \u0435\u0434\u044b"},{id:3,name:"Kulcha \u041f\u0440\u0435\u043c\u0438\u0443\u043c",cityId:2,address:"\u041d\u0435\u0432\u0441\u043a\u0438\u0439 \u043f\u0440\u043e\u0441\u043f\u0435\u043a\u0442, 28",description:"\u0418\u0437\u044b\u0441\u043a\u0430\u043d\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430 \u0432 \u0438\u0441\u0442\u043e\u0440\u0438\u0447\u0435\u0441\u043a\u043e\u043c \u0446\u0435\u043d\u0442\u0440\u0435"},{id:4,name:"Kulcha \u0424\u044d\u043c\u0438\u043b\u0438",cityId:2,address:"\u0443\u043b. \u0420\u0443\u0431\u0438\u043d\u0448\u0442\u0435\u0439\u043d\u0430, 15",description:"\u0421\u0435\u043c\u0435\u0439\u043d\u044b\u0439 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d \u0441 \u0434\u0435\u0442\u0441\u043a\u0438\u043c \u043c\u0435\u043d\u044e"},{id:5,name:"Kulcha \u0412\u043e\u0441\u0442\u043e\u0447\u043d\u044b\u0439",cityId:3,address:"\u0443\u043b. \u041b\u0435\u043d\u0438\u043d\u0430, 10",description:"\u0410\u0443\u0442\u0435\u043d\u0442\u0438\u0447\u043d\u0430\u044f \u0438\u043d\u0434\u0438\u0439\u0441\u043a\u0430\u044f \u043a\u0443\u0445\u043d\u044f"},{id:6,name:"Kulcha \u0413\u0443\u0440\u043c\u044d",cityId:4,address:"\u0443\u043b. \u0412\u0430\u0439\u043d\u0435\u0440\u0430, 9",description:"\u0413\u0430\u0441\u0442\u0440\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0448\u0435\u0434\u0435\u0432\u0440\u044b \u0438\u043d\u0434\u0438\u0439\u0441\u043a\u043e\u0439 \u043a\u0443\u0445\u043d\u0438"},{id:7,name:"Kulcha \u0422\u0440\u0430\u0434\u0438\u0446\u0438\u0438",cityId:5,address:"\u0443\u043b. \u0411\u0430\u0443\u043c\u0430\u043d\u0430, 31",description:"\u0422\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u0430\u044f \u043a\u0443\u0445\u043d\u044f \u0432 \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u043e\u043c \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0438"}],je=[{id:1,name:"\u0411\u0430\u0442\u0442\u0435\u0440 \u0427\u0438\u043a\u0435\u043d",price:450,description:"\u041d\u0435\u0436\u043d\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430 \u0432 \u0431\u043e\u0433\u0430\u0442\u043e\u043c \u0441\u043b\u0438\u0432\u043e\u0447\u043d\u043e-\u0442\u043e\u043c\u0430\u0442\u043d\u043e\u043c \u0441\u043e\u0443\u0441\u0435 \u0441 \u043c\u0430\u0441\u043b\u043e\u043c \u0438 \u0430\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u043c\u0438 \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438."},{id:2,name:"\u041f\u0430\u043d\u0438\u0440 \u0422\u0438\u043a\u043a\u0430",price:350,description:"\u041a\u0443\u0431\u0438\u043a\u0438 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0441\u044b\u0440\u0430, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0435\u0446\u0438\u044f\u0445 \u0438 \u043e\u0431\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0435 \u0434\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0430."},{id:3,name:"\u0427\u0438\u043a\u0435\u043d \u0411\u0438\u0440\u044c\u044f\u043d\u0438",price:420,description:"\u0410\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0440\u0438\u0441 \u0431\u0430\u0441\u043c\u0430\u0442\u0438, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0441 \u043d\u0435\u0436\u043d\u043e\u0439 \u043a\u0443\u0440\u0438\u0446\u0435\u0439 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c\u0438 \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438."},{id:4,name:"\u0421\u0430\u043c\u043e\u0441\u0430",price:120,description:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043f\u0438\u0440\u043e\u0436\u043a\u0438 \u0441 \u043d\u0430\u0447\u0438\u043d\u043a\u043e\u0439 \u0438\u0437 \u043f\u0440\u044f\u043d\u043e\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0438 \u0433\u043e\u0440\u043e\u0445\u0430."},{id:5,name:"\u0427\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439 \u041d\u0430\u0430\u043d",price:80,description:"\u041c\u044f\u0433\u043a\u0430\u044f \u043b\u0435\u043f\u0435\u0448\u043a\u0430 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0438 \u043c\u0430\u0441\u043b\u043e\u043c, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u0430\u044f \u0432 \u0442\u0430\u043d\u0434\u044b\u0440\u0435."},{id:6,name:"\u0413\u0443\u043b\u0430\u0431 \u0414\u0436\u0430\u043c\u0443\u043d",price:150,description:"\u0421\u043b\u0430\u0434\u043a\u0438\u0435 \u0448\u0430\u0440\u0438\u043a\u0438 \u0438\u0437 \u043c\u043e\u043b\u043e\u043a\u0430, \u043f\u0440\u043e\u043f\u0438\u0442\u0430\u043d\u043d\u044b\u0435 \u0441\u0430\u0445\u0430\u0440\u043d\u044b\u043c \u0441\u0438\u0440\u043e\u043f\u043e\u043c \u0441 \u043a\u0430\u0440\u0434\u0430\u043c\u043e\u043d\u043e\u043c \u0438 \u0440\u043e\u0437\u043e\u0432\u043e\u0439 \u0432\u043e\u0434\u043e\u0439."}];var Ce=n(579);const Ee=(0,t.createContext)(void 0),_e=e=>{let{children:n}=e;const[r]=(0,t.useState)(ke),[a]=(0,t.useState)(Se),[o]=(0,t.useState)(je),[i,l]=(0,t.useState)([]),[s,u]=(0,t.useState)(null),[c,d]=(0,t.useState)(null),[p,f]=(0,t.useState)("delivery"),[h,g]=(0,t.useState)([]),[m,v]=(0,t.useState)(null),[y,x]=(0,t.useState)([{id:1,name:"\u0411\u0430\u0442\u0442\u0435\u0440 \u0427\u0438\u043a\u0435\u043d",price:450,description:"\u041d\u0435\u0436\u043d\u0430\u044f \u043a\u0443\u0440\u0438\u0446\u0430 \u0432 \u0431\u043e\u0433\u0430\u0442\u043e\u043c \u0441\u043b\u0438\u0432\u043e\u0447\u043d\u043e-\u0442\u043e\u043c\u0430\u0442\u043d\u043e\u043c \u0441\u043e\u0443\u0441\u0435 \u0441 \u043c\u0430\u0441\u043b\u043e\u043c \u0438 \u0430\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u043c\u0438 \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438.",image:"/assets/images/paneer-tikka.jpg"},{id:2,name:"\u041f\u0430\u043d\u0438\u0440 \u0422\u0438\u043a\u043a\u0430",price:350,description:"\u041a\u0443\u0431\u0438\u043a\u0438 \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0441\u044b\u0440\u0430, \u043c\u0430\u0440\u0438\u043d\u043e\u0432\u0430\u043d\u043d\u044b\u0435 \u0432 \u0441\u043f\u0435\u0446\u0438\u044f\u0445 \u0438 \u043e\u0431\u0436\u0430\u0440\u0435\u043d\u043d\u044b\u0435 \u0434\u043e \u0441\u043e\u0432\u0435\u0440\u0448\u0435\u043d\u0441\u0442\u0432\u0430.",image:"/assets/images/paneer-tikka.jpg"},{id:3,name:"\u0427\u0438\u043a\u0435\u043d \u0411\u0438\u0440\u044c\u044f\u043d\u0438",price:420,description:"\u0410\u0440\u043e\u043c\u0430\u0442\u043d\u044b\u0439 \u0440\u0438\u0441 \u0431\u0430\u0441\u043c\u0430\u0442\u0438, \u043f\u0440\u0438\u0433\u043e\u0442\u043e\u0432\u043b\u0435\u043d\u043d\u044b\u0439 \u0441 \u043d\u0435\u0436\u043d\u043e\u0439 \u043a\u0443\u0440\u0438\u0446\u0435\u0439 \u0438 \u043f\u0440\u044f\u043d\u044b\u043c\u0438 \u0441\u043f\u0435\u0446\u0438\u044f\u043c\u0438.",image:"/assets/images/chicken-biryani.jpg"},{id:4,name:"\u0421\u0430\u043c\u043e\u0441\u0430",price:120,description:"\u0425\u0440\u0443\u0441\u0442\u044f\u0449\u0438\u0435 \u043f\u0438\u0440\u043e\u0436\u043a\u0438 \u0441 \u043d\u0430\u0447\u0438\u043d\u043a\u043e\u0439 \u0438\u0437 \u043f\u0440\u044f\u043d\u043e\u0433\u043e \u043a\u0430\u0440\u0442\u043e\u0444\u0435\u043b\u044f \u0438 \u0433\u043e\u0440\u043e\u0445\u0430.",image:"/assets/images/vegetable-samosa.jpg"},{id:5,name:"\u0427\u0435\u0441\u043d\u043e\u0447\u043d\u044b\u0439 \u041d\u0430\u0430\u043d",price:80,description:"\u041c\u044f\u0433\u043a\u0430\u044f \u043b\u0435\u043f\u0435\u0448\u043a\u0430 \u0441 \u0447\u0435\u0441\u043d\u043e\u043a\u043e\u043c \u0438 \u043c\u0430\u0441\u043b\u043e\u043c, \u0437\u0430\u043f\u0435\u0447\u0435\u043d\u043d\u0430\u044f \u0432 \u0442\u0430\u043d\u0434\u044b\u0440\u0435.",image:"/assets/images/masala-dosa.jpg"},{id:6,name:"\u0413\u0443\u043b\u0430\u0431 \u0414\u0436\u0430\u043c\u0443\u043d",price:150,description:"\u0421\u043b\u0430\u0434\u043a\u0438\u0435 \u0448\u0430\u0440\u0438\u043a\u0438 \u0438\u0437 \u043c\u043e\u043b\u043e\u043a\u0430, \u043f\u0440\u043e\u043f\u0438\u0442\u0430\u043d\u043d\u044b\u0435 \u0441\u0430\u0445\u0430\u0440\u043d\u044b\u043c \u0441\u0438\u0440\u043e\u043f\u043e\u043c \u0441 \u043a\u0430\u0440\u0434\u0430\u043c\u043e\u043d\u043e\u043c \u0438 \u0440\u043e\u0437\u043e\u0432\u043e\u0439 \u0432\u043e\u0434\u043e\u0439.",image:"/assets/images/gulab-jamun.jpg"}]),b=s,w=c,k=()=>{l([])};return(0,Ce.jsx)(Ee.Provider,{value:{cities:r,restaurants:a,foodItems:o,cart:i,selectedCity:b,selectedRestaurant:w,deliveryMethod:p,orderHistory:h,userAddress:m,menuItems:y,setSelectedCity:e=>{u(e),e||d(null)},setSelectedRestaurant:e=>{d(e)},setDeliveryMethod:f,addToCart:e=>{l((t=>t.find((t=>t.id===e.id))?t.map((t=>t.id===e.id?{...t,quantity:t.quantity+1}:t)):[...t,{...e,quantity:1}]))},removeFromCart:e=>{l((t=>t.filter((t=>t.id!==e))))},updateCartItemQuantity:(e,t)=>{l((n=>n.map((n=>n.id===e?{...n,quantity:t}:n))))},clearCart:k,updateUserAddress:e=>{v(e)},placeOrder:()=>{if(0===i.length)return;const e={id:Date.now(),items:[...i],totalAmount:i.reduce(((e,t)=>e+t.price*t.quantity),0),deliveryMethod:p,date:(new Date).toISOString(),status:"pending",address:m||void 0};g((t=>[e,...t])),k()},updateOrderStatus:(e,t)=>{g((n=>n.map((n=>n.id===e?{...n,status:t}:n))))},increaseQuantity:e=>{l((t=>t.map((t=>t.id===e?{...t,quantity:t.quantity+1}:t))))},decreaseQuantity:e=>{l((t=>{var n;const r=t.map((t=>t.id===e?{...t,quantity:Math.max(1,t.quantity-1)}:t));return 0===(null===(n=r.find((t=>t.id===e)))||void 0===n?void 0:n.quantity)?r.filter((t=>t.id!==e)):r}))}},children:n})},Pe=()=>{const e=t.useContext(Ee);if(void 0===e)throw new Error("useAppContext must be used within an AppProvider");return e};var Le=function(){return Le=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},Le.apply(this,arguments)};Object.create;function ze(e,t,n){if(n||2===arguments.length)for(var r,a=0,o=t.length;a<o;a++)!r&&a in t||(r||(r=Array.prototype.slice.call(t,0,a)),r[a]=t[a]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var Te=n(324),Re=n.n(Te),Ne="-ms-",Oe="-moz-",Fe="-webkit-",Me="comm",Be="rule",Ie="decl",De="@keyframes",$e=Math.abs,Ae=String.fromCharCode,We=Object.assign;function Ue(e){return e.trim()}function He(e,t){return(e=t.exec(e))?e[0]:e}function Ve(e,t,n){return e.replace(t,n)}function Ke(e,t,n){return e.indexOf(t,n)}function Qe(e,t){return 0|e.charCodeAt(t)}function Ye(e,t,n){return e.slice(t,n)}function qe(e){return e.length}function Ge(e){return e.length}function Xe(e,t){return t.push(e),e}function Ze(e,t){return e.filter((function(e){return!He(e,t)}))}var Je=1,et=1,tt=0,nt=0,rt=0,at="";function ot(e,t,n,r,a,o,i,l){return{value:e,root:t,parent:n,type:r,props:a,children:o,line:Je,column:et,length:i,return:"",siblings:l}}function it(e,t){return We(ot("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function lt(e){for(;e.root;)e=it(e.root,{children:[e]});Xe(e,e.siblings)}function st(){return rt=nt>0?Qe(at,--nt):0,et--,10===rt&&(et=1,Je--),rt}function ut(){return rt=nt<tt?Qe(at,nt++):0,et++,10===rt&&(et=1,Je++),rt}function ct(){return Qe(at,nt)}function dt(){return nt}function pt(e,t){return Ye(at,e,t)}function ft(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ht(e){return Je=et=1,tt=qe(at=e),nt=0,[]}function gt(e){return at="",e}function mt(e){return Ue(pt(nt-1,xt(91===e?e+2:40===e?e+1:e)))}function vt(e){for(;(rt=ct())&&rt<33;)ut();return ft(e)>2||ft(rt)>3?"":" "}function yt(e,t){for(;--t&&ut()&&!(rt<48||rt>102||rt>57&&rt<65||rt>70&&rt<97););return pt(e,dt()+(t<6&&32==ct()&&32==ut()))}function xt(e){for(;ut();)switch(rt){case e:return nt;case 34:case 39:34!==e&&39!==e&&xt(rt);break;case 40:41===e&&xt(e);break;case 92:ut()}return nt}function bt(e,t){for(;ut()&&e+rt!==57&&(e+rt!==84||47!==ct()););return"/*"+pt(t,nt-1)+"*"+Ae(47===e?e:ut())}function wt(e){for(;!ft(ct());)ut();return pt(e,nt)}function kt(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function St(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case Ie:return e.return=e.return||e.value;case Me:return"";case De:return e.return=e.value+"{"+kt(e.children,r)+"}";case Be:if(!qe(e.value=e.props.join(",")))return""}return qe(n=kt(e.children,r))?e.return=e.value+"{"+n+"}":""}function jt(e,t,n){switch(function(e,t){return 45^Qe(e,0)?(((t<<2^Qe(e,0))<<2^Qe(e,1))<<2^Qe(e,2))<<2^Qe(e,3):0}(e,t)){case 5103:return Fe+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Fe+e+e;case 4789:return Oe+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return Fe+e+Oe+e+Ne+e+e;case 5936:switch(Qe(e,t+11)){case 114:return Fe+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return Fe+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return Fe+e+Ne+Ve(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return Fe+e+Ne+e+e;case 6165:return Fe+e+Ne+"flex-"+e+e;case 5187:return Fe+e+Ve(e,/(\w+).+(:[^]+)/,Fe+"box-$1$2"+Ne+"flex-$1$2")+e;case 5443:return Fe+e+Ne+"flex-item-"+Ve(e,/flex-|-self/g,"")+(He(e,/flex-|baseline/)?"":Ne+"grid-row-"+Ve(e,/flex-|-self/g,""))+e;case 4675:return Fe+e+Ne+"flex-line-pack"+Ve(e,/align-content|flex-|-self/g,"")+e;case 5548:return Fe+e+Ne+Ve(e,"shrink","negative")+e;case 5292:return Fe+e+Ne+Ve(e,"basis","preferred-size")+e;case 6060:return Fe+"box-"+Ve(e,"-grow","")+Fe+e+Ne+Ve(e,"grow","positive")+e;case 4554:return Fe+Ve(e,/([^-])(transform)/g,"$1"+Fe+"$2")+e;case 6187:return Ve(Ve(Ve(e,/(zoom-|grab)/,Fe+"$1"),/(image-set)/,Fe+"$1"),e,"")+e;case 5495:case 3959:return Ve(e,/(image-set\([^]*)/,Fe+"$1$`$1");case 4968:return Ve(Ve(e,/(.+:)(flex-)?(.*)/,Fe+"box-pack:$3"+Ne+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Fe+e+e;case 4200:if(!He(e,/flex-|baseline/))return Ne+"grid-column-align"+Ye(e,t)+e;break;case 2592:case 3360:return Ne+Ve(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,He(e.props,/grid-\w+-end/)}))?~Ke(e+(n=n[t].value),"span",0)?e:Ne+Ve(e,"-start","")+e+Ne+"grid-row-span:"+(~Ke(n,"span",0)?He(n,/\d+/):+He(n,/\d+/)-+He(e,/\d+/))+";":Ne+Ve(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return He(e.props,/grid-\w+-start/)}))?e:Ne+Ve(Ve(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Ve(e,/(.+)-inline(.+)/,Fe+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(qe(e)-1-t>6)switch(Qe(e,t+1)){case 109:if(45!==Qe(e,t+4))break;case 102:return Ve(e,/(.+:)(.+)-([^]+)/,"$1"+Fe+"$2-$3$1"+Oe+(108==Qe(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ke(e,"stretch",0)?jt(Ve(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Ve(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,a,o,i,l){return Ne+n+":"+r+l+(a?Ne+n+"-span:"+(o?i:+i-+r)+l:"")+e}));case 4949:if(121===Qe(e,t+6))return Ve(e,":",":"+Fe)+e;break;case 6444:switch(Qe(e,45===Qe(e,14)?18:11)){case 120:return Ve(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Fe+(45===Qe(e,14)?"inline-":"")+"box$3$1"+Fe+"$2$3$1"+Ne+"$2box$3")+e;case 100:return Ve(e,":",":"+Ne)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Ve(e,"scroll-","scroll-snap-")+e}return e}function Ct(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Ie:return void(e.return=jt(e.value,e.length,n));case De:return kt([it(e,{value:Ve(e.value,"@","@"+Fe)})],r);case Be:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(He(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":lt(it(e,{props:[Ve(t,/:(read-\w+)/,":-moz-$1")]})),lt(it(e,{props:[t]})),We(e,{props:Ze(n,r)});break;case"::placeholder":lt(it(e,{props:[Ve(t,/:(plac\w+)/,":"+Fe+"input-$1")]})),lt(it(e,{props:[Ve(t,/:(plac\w+)/,":-moz-$1")]})),lt(it(e,{props:[Ve(t,/:(plac\w+)/,Ne+"input-$1")]})),lt(it(e,{props:[t]})),We(e,{props:Ze(n,r)})}return""}))}}function Et(e){return gt(_t("",null,null,null,[""],e=ht(e),0,[0],e))}function _t(e,t,n,r,a,o,i,l,s){for(var u=0,c=0,d=i,p=0,f=0,h=0,g=1,m=1,v=1,y=0,x="",b=a,w=o,k=r,S=x;m;)switch(h=y,y=ut()){case 40:if(108!=h&&58==Qe(S,d-1)){-1!=Ke(S+=Ve(mt(y),"&","&\f"),"&\f",$e(u?l[u-1]:0))&&(v=-1);break}case 34:case 39:case 91:S+=mt(y);break;case 9:case 10:case 13:case 32:S+=vt(h);break;case 92:S+=yt(dt()-1,7);continue;case 47:switch(ct()){case 42:case 47:Xe(Lt(bt(ut(),dt()),t,n,s),s);break;default:S+="/"}break;case 123*g:l[u++]=qe(S)*v;case 125*g:case 59:case 0:switch(y){case 0:case 125:m=0;case 59+c:-1==v&&(S=Ve(S,/\f/g,"")),f>0&&qe(S)-d&&Xe(f>32?zt(S+";",r,n,d-1,s):zt(Ve(S," ","")+";",r,n,d-2,s),s);break;case 59:S+=";";default:if(Xe(k=Pt(S,t,n,u,c,a,l,x,b=[],w=[],d,o),o),123===y)if(0===c)_t(S,t,k,k,b,o,d,l,w);else switch(99===p&&110===Qe(S,3)?100:p){case 100:case 108:case 109:case 115:_t(e,k,k,r&&Xe(Pt(e,k,k,0,0,a,l,x,a,b=[],d,w),w),a,w,d,l,r?b:w);break;default:_t(S,k,k,k,[""],w,0,l,w)}}u=c=f=0,g=v=1,x=S="",d=i;break;case 58:d=1+qe(S),f=h;default:if(g<1)if(123==y)--g;else if(125==y&&0==g++&&125==st())continue;switch(S+=Ae(y),y*g){case 38:v=c>0?1:(S+="\f",-1);break;case 44:l[u++]=(qe(S)-1)*v,v=1;break;case 64:45===ct()&&(S+=mt(ut())),p=ct(),c=d=qe(x=S+=wt(dt())),y++;break;case 45:45===h&&2==qe(S)&&(g=0)}}return o}function Pt(e,t,n,r,a,o,i,l,s,u,c,d){for(var p=a-1,f=0===a?o:[""],h=Ge(f),g=0,m=0,v=0;g<r;++g)for(var y=0,x=Ye(e,p+1,p=$e(m=i[g])),b=e;y<h;++y)(b=Ue(m>0?f[y]+" "+x:Ve(x,/&\f/g,f[y])))&&(s[v++]=b);return ot(e,t,n,0===a?Be:l,s,u,c,d)}function Lt(e,t,n,r){return ot(e,t,n,Me,Ae(rt),Ye(e,2,-2),0,r)}function zt(e,t,n,r,a){return ot(e,t,n,Ie,Ye(e,0,r),Ye(e,r+1,-1),r,a)}var Tt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Rt="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",Nt="active",Ot="data-styled-version",Ft="6.1.16",Mt="/*!sc*/\n",Bt="undefined"!=typeof window&&"HTMLElement"in window,It=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),Dt={},$t=(new Set,Object.freeze([])),At=Object.freeze({});function Wt(e,t,n){return void 0===n&&(n=At),e.theme!==n.theme&&e.theme||t||n.theme}var Ut=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),Ht=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Vt=/(^-|-$)/g;function Kt(e){return e.replace(Ht,"-").replace(Vt,"")}var Qt=/(a)(d)/gi,Yt=function(e){return String.fromCharCode(e+(e>25?39:97))};function qt(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Yt(t%52)+n;return(Yt(t%52)+n).replace(Qt,"$1-$2")}var Gt,Xt=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Zt=function(e){return Xt(5381,e)};function Jt(e){return qt(Zt(e)>>>0)}function en(e){return e.displayName||e.name||"Component"}function tn(e){return"string"==typeof e&&!0}var nn="function"==typeof Symbol&&Symbol.for,rn=nn?Symbol.for("react.memo"):60115,an=nn?Symbol.for("react.forward_ref"):60112,on={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},ln={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},sn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},un=((Gt={})[an]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Gt[rn]=sn,Gt);function cn(e){return("type"in(t=e)&&t.type.$$typeof)===rn?sn:"$$typeof"in e?un[e.$$typeof]:on;var t}var dn=Object.defineProperty,pn=Object.getOwnPropertyNames,fn=Object.getOwnPropertySymbols,hn=Object.getOwnPropertyDescriptor,gn=Object.getPrototypeOf,mn=Object.prototype;function vn(e,t,n){if("string"!=typeof t){if(mn){var r=gn(t);r&&r!==mn&&vn(e,r,n)}var a=pn(t);fn&&(a=a.concat(fn(t)));for(var o=cn(e),i=cn(t),l=0;l<a.length;++l){var s=a[l];if(!(s in ln||n&&n[s]||i&&s in i||o&&s in o)){var u=hn(t,s);try{dn(e,s,u)}catch(e){}}}}return e}function yn(e){return"function"==typeof e}function xn(e){return"object"==typeof e&&"styledComponentId"in e}function bn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function wn(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function kn(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Sn(e,t,n){if(void 0===n&&(n=!1),!n&&!kn(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=Sn(e[r],t[r]);else if(kn(t))for(var r in t)e[r]=Sn(e[r],t[r]);return e}function jn(e,t){Object.defineProperty(e,"toString",{value:t})}function Cn(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var En=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)if((a<<=1)<0)throw Cn(16,"".concat(e));this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var o=r;o<a;o++)this.groupSizes[o]=0}for(var i=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(i,t[o])&&(this.groupSizes[e]++,i++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,o=r;o<a;o++)t+="".concat(this.tag.getRule(o)).concat(Mt);return t},e}(),_n=new Map,Pn=new Map,Ln=1,zn=function(e){if(_n.has(e))return _n.get(e);for(;Pn.has(Ln);)Ln++;var t=Ln++;return _n.set(e,t),Pn.set(t,e),t},Tn=function(e,t){Ln=t+1,_n.set(e,t),Pn.set(t,e)},Rn="style[".concat(Rt,"][").concat(Ot,'="').concat(Ft,'"]'),Nn=new RegExp("^".concat(Rt,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),On=function(e,t,n){for(var r,a=n.split(","),o=0,i=a.length;o<i;o++)(r=a[o])&&e.registerName(t,r)},Fn=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(Mt),a=[],o=0,i=r.length;o<i;o++){var l=r[o].trim();if(l){var s=l.match(Nn);if(s){var u=0|parseInt(s[1],10),c=s[2];0!==u&&(Tn(c,u),On(e,c,s[3]),e.getTag().insertRules(u,a)),a.length=0}else a.push(l)}}},Mn=function(e){for(var t=document.querySelectorAll(Rn),n=0,r=t.length;n<r;n++){var a=t[n];a&&a.getAttribute(Rt)!==Nt&&(Fn(e,a),a.parentNode&&a.parentNode.removeChild(a))}};function Bn(){return n.nc}var In=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){var t=Array.from(e.querySelectorAll("style[".concat(Rt,"]")));return t[t.length-1]}(n),o=void 0!==a?a.nextSibling:null;r.setAttribute(Rt,Nt),r.setAttribute(Ot,Ft);var i=Bn();return i&&r.setAttribute("nonce",i),n.insertBefore(r,o),r},Dn=function(){function e(e){this.element=In(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}throw Cn(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),$n=function(){function e(e){this.element=In(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),An=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),Wn=Bt,Un={isServer:!Bt,useCSSOMInjection:!It},Hn=function(){function e(e,t,n){void 0===e&&(e=At),void 0===t&&(t={});var r=this;this.options=Le(Le({},Un),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Bt&&Wn&&(Wn=!1,Mn(this)),jn(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=function(n){var a=function(e){return Pn.get(e)}(n);if(void 0===a)return"continue";var o=e.names.get(a),i=t.getGroup(n);if(void 0===o||!o.size||0===i.length)return"continue";var l="".concat(Rt,".g").concat(n,'[id="').concat(a,'"]'),s="";void 0!==o&&o.forEach((function(e){e.length>0&&(s+="".concat(e,","))})),r+="".concat(i).concat(l,'{content:"').concat(s,'"}').concat(Mt)},o=0;o<n;o++)a(o);return r}(r)}))}return e.registerId=function(e){return zn(e)},e.prototype.rehydrate=function(){!this.server&&Bt&&Mn(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(Le(Le({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new An(n):t?new Dn(n):new $n(n)}(this.options),new En(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(zn(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(zn(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(zn(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Vn=/&/g,Kn=/^\s*\/\/.*$/gm;function Qn(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Qn(e.children,t)),e}))}function Yn(e){var t,n,r,a=void 0===e?At:e,o=a.options,i=void 0===o?At:o,l=a.plugins,s=void 0===l?$t:l,u=function(e,r,a){return a.startsWith(n)&&a.endsWith(n)&&a.replaceAll(n,"").length>0?".".concat(t):e},c=s.slice();c.push((function(e){e.type===Be&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Vn,n).replace(r,u))})),i.prefix&&c.push(Ct),c.push(St);var d=function(e,a,o,l){void 0===a&&(a=""),void 0===o&&(o=""),void 0===l&&(l="&"),t=l,n=a,r=new RegExp("\\".concat(n,"\\b"),"g");var s=e.replace(Kn,""),u=Et(o||a?"".concat(o," ").concat(a," { ").concat(s," }"):s);i.namespace&&(u=Qn(u,i.namespace));var d,p=[];return kt(u,function(e){var t=Ge(e);return function(n,r,a,o){for(var i="",l=0;l<t;l++)i+=e[l](n,r,a,o)||"";return i}}(c.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=s.length?s.reduce((function(e,t){return t.name||Cn(15),Xt(e,t.name)}),5381).toString():"",d}var qn=new Hn,Gn=Yn(),Xn=t.createContext({shouldForwardProp:void 0,styleSheet:qn,stylis:Gn}),Zn=(Xn.Consumer,t.createContext(void 0));function Jn(){return(0,t.useContext)(Xn)}function er(e){var n=(0,t.useState)(e.stylisPlugins),r=n[0],a=n[1],o=Jn().styleSheet,i=(0,t.useMemo)((function(){var t=o;return e.sheet?t=e.sheet:e.target&&(t=t.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(t=t.reconstructWithOptions({useCSSOMInjection:!1})),t}),[e.disableCSSOMInjection,e.sheet,e.target,o]),l=(0,t.useMemo)((function(){return Yn({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:r})}),[e.enableVendorPrefixes,e.namespace,r]);(0,t.useEffect)((function(){Re()(r,e.stylisPlugins)||a(e.stylisPlugins)}),[e.stylisPlugins]);var s=(0,t.useMemo)((function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:i,stylis:l}}),[e.shouldForwardProp,i,l]);return t.createElement(Xn.Provider,{value:s},t.createElement(Zn.Provider,{value:l},e.children))}var tr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Gn);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,jn(this,(function(){throw Cn(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Gn),this.name+e.hash},e}(),nr=function(e){return e>="A"&&e<="Z"};function rr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;nr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var ar=function(e){return null==e||!1===e||""===e},or=function(e){var t,n,r=[];for(var a in e){var o=e[a];e.hasOwnProperty(a)&&!ar(o)&&(Array.isArray(o)&&o.isCss||yn(o)?r.push("".concat(rr(a),":"),o,";"):kn(o)?r.push.apply(r,ze(ze(["".concat(a," {")],or(o),!1),["}"],!1)):r.push("".concat(rr(a),": ").concat((t=a,null==(n=o)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in Tt||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ir(e,t,n,r){return ar(e)?[]:xn(e)?[".".concat(e.styledComponentId)]:yn(e)?!yn(a=e)||a.prototype&&a.prototype.isReactComponent||!t?[e]:ir(e(t),t,n,r):e instanceof tr?n?(e.inject(n,r),[e.getName(r)]):[e]:kn(e)?or(e):Array.isArray(e)?Array.prototype.concat.apply($t,e.map((function(e){return ir(e,t,n,r)}))):[e.toString()];var a}function lr(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(yn(n)&&!xn(n))return!1}return!0}var sr=Zt(Ft),ur=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&lr(e),this.componentId=t,this.baseHash=Xt(sr,t),this.baseStyle=n,Hn.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=bn(r,this.staticRulesId);else{var a=wn(ir(this.rules,e,t,n)),o=qt(Xt(this.baseHash,a)>>>0);if(!t.hasNameForId(this.componentId,o)){var i=n(a,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,i)}r=bn(r,o),this.staticRulesId=o}else{for(var l=Xt(this.baseHash,n.hash),s="",u=0;u<this.rules.length;u++){var c=this.rules[u];if("string"==typeof c)s+=c;else if(c){var d=wn(ir(c,e,t,n));l=Xt(l,d+u),s+=d}}if(s){var p=qt(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(s,".".concat(p),void 0,this.componentId)),r=bn(r,p)}}return r},e}(),cr=t.createContext(void 0);cr.Consumer;var dr={};new Set;function pr(e,n,r){var a=xn(e),o=e,i=!tn(e),l=n.attrs,s=void 0===l?$t:l,u=n.componentId,c=void 0===u?function(e,t){var n="string"!=typeof e?"sc":Kt(e);dr[n]=(dr[n]||0)+1;var r="".concat(n,"-").concat(Jt(Ft+n+dr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):u,d=n.displayName,p=void 0===d?function(e){return tn(e)?"styled.".concat(e):"Styled(".concat(en(e),")")}(e):d,f=n.displayName&&n.componentId?"".concat(Kt(n.displayName),"-").concat(n.componentId):n.componentId||c,h=a&&o.attrs?o.attrs.concat(s).filter(Boolean):s,g=n.shouldForwardProp;if(a&&o.shouldForwardProp){var m=o.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;g=function(e,t){return m(e,t)&&v(e,t)}}else g=m}var y=new ur(r,f,a?o.componentStyle:void 0);function x(e,n){return function(e,n,r){var a=e.attrs,o=e.componentStyle,i=e.defaultProps,l=e.foldedComponentIds,s=e.styledComponentId,u=e.target,c=t.useContext(cr),d=Jn(),p=e.shouldForwardProp||d.shouldForwardProp,f=Wt(n,c,i)||At,h=function(e,t,n){for(var r,a=Le(Le({},t),{className:void 0,theme:n}),o=0;o<e.length;o+=1){var i=yn(r=e[o])?r(a):r;for(var l in i)a[l]="className"===l?bn(a[l],i[l]):"style"===l?Le(Le({},a[l]),i[l]):i[l]}return t.className&&(a.className=bn(a.className,t.className)),a}(a,n,f),g=h.as||u,m={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?m.as=h.forwardedAs:p&&!p(v,g)||(m[v]=h[v]));var y=function(e,t){var n=Jn();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(o,h),x=bn(l,s);return y&&(x+=" "+y),h.className&&(x+=" "+h.className),m[tn(g)&&!Ut.has(g)?"class":"className"]=x,r&&(m.ref=r),(0,t.createElement)(g,m)}(b,e,n)}x.displayName=p;var b=t.forwardRef(x);return b.attrs=h,b.componentStyle=y,b.displayName=p,b.shouldForwardProp=g,b.foldedComponentIds=a?bn(o.foldedComponentIds,o.styledComponentId):"",b.styledComponentId=f,b.target=a?o.target:e,Object.defineProperty(b,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,a=t;r<a.length;r++)Sn(e,a[r],!0);return e}({},o.defaultProps,e):e}}),jn(b,(function(){return".".concat(b.styledComponentId)})),i&&vn(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}function fr(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n}var hr=function(e){return Object.assign(e,{isCss:!0})};function gr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(yn(e)||kn(e))return hr(ir(fr($t,ze([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?ir(r):hr(ir(fr(r,t)))}function mr(e,t,n){if(void 0===n&&(n=At),!t)throw Cn(1,t);var r=function(r){for(var a=[],o=1;o<arguments.length;o++)a[o-1]=arguments[o];return e(t,n,gr.apply(void 0,ze([r],a,!1)))};return r.attrs=function(r){return mr(e,t,Le(Le({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return mr(e,t,Le(Le({},n),r))},r}var vr=function(e){return mr(pr,e)},yr=vr;Ut.forEach((function(e){yr[e]=vr(e)}));var xr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=lr(e),Hn.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var a=r(wn(ir(this.rules,t,n,r)),""),o=this.componentId+e;n.insertRules(o,o,a)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&Hn.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function e(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var n=Bn(),r=wn([n&&'nonce="'.concat(n,'"'),"".concat(Rt,'="true"'),"".concat(Ot,'="').concat(Ft,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw Cn(2);return e._emitSheetCSS()},this.getStyleElement=function(){var n;if(e.sealed)throw Cn(2);var r=e.instance.toString();if(!r)return[];var a=((n={})[Rt]="",n[Ot]=Ft,n.dangerouslySetInnerHTML={__html:r},n),o=Bn();return o&&(a.nonce=o),[t.createElement("style",Le({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new Hn({isServer:!0}),this.sealed=!1}e.prototype.collectStyles=function(e){if(this.sealed)throw Cn(2);return t.createElement(er,{sheet:this.instance},e)},e.prototype.interleaveWithNodeStream=function(e){throw Cn(3)}})(),"__sc-".concat(Rt,"__");const br=(function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var a=gr.apply(void 0,ze([e],n,!1)),o="sc-global-".concat(Jt(JSON.stringify(a))),i=new xr(a,o),l=function(e){var n=Jn(),r=t.useContext(cr),a=t.useRef(n.styleSheet.allocateGSInstance(o)).current;return n.styleSheet.server&&s(a,e,n.styleSheet,r,n.stylis),t.useLayoutEffect((function(){if(!n.styleSheet.server)return s(a,e,n.styleSheet,r,n.stylis),function(){return i.removeStyles(a,n.styleSheet)}}),[a,e,n.styleSheet,r,n.stylis]),null};function s(e,t,n,r,a){if(i.isStatic)i.renderStyles(e,Dt,n,a);else{var o=Le(Le({},t),{theme:Wt(t,r,l.defaultProps)});i.renderStyles(e,o,n,a)}}return t.memo(l)})`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

  :root {
    --primary-color: #FF9F0D;
    --primary-light: #FFB846;
    --primary-dark: #E58D00;
    --background-color: #000000;
    --background-light: #121212;
    --background-dark: #050505;
    --card-bg: #1A1A1A;
    --card-hover: #252525;
    --text-color: #FFFFFF;
    --text-secondary: #AAAAAA;
    --text-tertiary: #666666;
    --button-bg: #FFFFFF;
    --button-text: #888888;
    --border-radius-sm: 8px;
    --border-radius-md: 12px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    --transition-fast: 0.2s ease;
    --transition-normal: 0.3s ease;
    --spacing-xs: 4px;
    --spacing-sm: 8px;
    --spacing-md: 16px;
    --spacing-lg: 24px;
    --spacing-xl: 32px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }

  body {
    font-family: 'Poppins', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    min-height: 100vh;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    letter-spacing: -0.02em;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.75rem;
  }

  h3 {
    font-size: 1.5rem;
  }

  p {
    margin-bottom: var(--spacing-md);
  }

  button {
    font-family: 'Poppins', sans-serif;
    background-color: var(--button-bg);
    color: var(--button-text);
    border: none;
    border-radius: var(--border-radius-md);
    padding: 10px 15px;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 500;
    transition: all var(--transition-normal);
    outline: none;

    &:hover {
      background-color: var(--primary-color);
      color: var(--text-color);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(255, 159, 13, 0.25);
    }

    &:active {
      transform: translateY(0);
    }
  }

  a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color var(--transition-fast);
    
    &:hover {
      color: var(--primary-light);
    }
  }

  input, select {
    font-family: 'Poppins', sans-serif;
    background-color: var(--card-bg);
    color: var(--text-color);
    border: 1px solid #333;
    border-radius: var(--border-radius-sm);
    padding: 12px 16px;
    font-size: 1rem;
    transition: all var(--transition-fast);
    outline: none;
    width: 100%;
    
    &:focus {
      border-color: var(--primary-color);
      box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background-light);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary-dark);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-color);
  }
`,wr=yr.div`
  max-width: 100%;
  padding: 0 var(--spacing-md);
  margin: 0 auto;
  width: 100%;
`,kr=yr.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: var(--spacing-lg) 0;
  position: relative;
  margin-bottom: var(--spacing-md);
`,Sr=yr.div`
  width: 120px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,jr=yr.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform var(--transition-normal);
  
  &:hover {
    transform: scale(1.05);
  }
`,Cr=yr.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: var(--spacing-lg);
  padding: var(--spacing-sm) var(--spacing-md);
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  overflow-x: auto;
  gap: var(--spacing-sm);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  /* Hide scrollbar but allow scrolling */
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`,Er=yr.button`
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-lg);
  background-color: var(--button-bg);
  color: var(--button-text);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 0.85rem;
  min-width: 70px;
  transition: all var(--transition-normal);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
  
  svg {
    margin-bottom: 5px;
    transition: transform var(--transition-fast);
  }
  
  &:hover, &.active {
    background-color: var(--primary-color);
    color: var(--text-color);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(255, 159, 13, 0.3);
    
    svg {
      transform: scale(1.1);
    }
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    
    &:hover {
      background-color: var(--button-bg);
      color: var(--button-text);
      transform: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      
      svg {
        transform: none;
      }
    }
  }
`,_r=yr.main`
  padding: var(--spacing-md) 0;
`,Pr=yr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: var(--spacing-lg);
  margin-top: var(--spacing-lg);
`,Lr=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all var(--transition-normal);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  height: 100%;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
    background-color: var(--card-hover);
  }
`,zr=(yr.img`
  width: 100%;
  height: 140px;
  object-fit: cover;
  transition: transform var(--transition-normal);
  
  ${Lr}:hover & {
    transform: scale(1.05);
  }
`,yr.div`
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
`,yr.h3`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  font-weight: 600;
  color: var(--text-color);
`,yr.p`
  font-size: 1rem;
  color: var(--primary-color);
  margin-bottom: var(--spacing-sm);
  font-weight: 600;
`,yr.button`
  width: 100%;
  padding: var(--spacing-sm);
  font-size: 0.95rem;
  margin-top: auto;
  border-radius: var(--border-radius-sm);
  background-color: var(--primary-color);
  color: var(--text-color);
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
`),Tr=(yr.footer`
  margin-top: var(--spacing-xl);
  padding: var(--spacing-lg) 0;
  text-align: center;
  border-top: 1px solid var(--card-bg);
`,yr.button`
  position: absolute;
  right: var(--spacing-sm);
  top: var(--spacing-lg);
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--card-bg);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  
  svg {
    transition: transform var(--transition-fast);
  }
  
  &:hover {
    background-color: var(--primary-color);
    
    svg {
      transform: scale(1.1);
    }
  }
`),Rr=yr.button`
  position: fixed;
  bottom: var(--spacing-lg);
  right: var(--spacing-lg);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: var(--primary-color);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  
  &:hover {
    background-color: var(--primary-light);
    transform: scale(1.05) translateY(-2px);
  }
  
  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: var(--background-color);
    color: var(--text-color);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.9rem;
    font-weight: 600;
    border: 2px solid var(--primary-color);
  }
`,Nr=yr.div`
  margin-bottom: var(--spacing-lg);
`,Or=yr.label`
  display: block;
  margin-bottom: var(--spacing-sm);
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-secondary);
`,Fr=yr.input`
  width: 100%;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  border: 1px solid ${e=>e.error?"#F44336":"rgba(255, 255, 255, 0.1)"};
  background-color: var(--background-light);
  color: var(--text-color);
  font-size: 1rem;
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${e=>e.error?"#F44336":"var(--primary-color)"};
    box-shadow: ${e=>e.error?"0 0 0 2px rgba(244, 67, 54, 0.2)":"0 0 0 2px rgba(255, 159, 13, 0.2)"};
  }
  
  &::placeholder {
    color: var(--text-secondary);
  }
  
  &:hover {
    border-color: ${e=>e.error?"#F44336":"var(--primary-light)"};
  }
`,Mr=yr.select`
  width: 100%;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: var(--card-bg);
  color: var(--text-color);
  border: 1px solid #333;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FF9F0D' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px;
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,Br=yr.div`
  display: flex;
  gap: var(--spacing-sm);
  margin: var(--spacing-lg) 0;
`,Ir=yr.button`
  flex: 1;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  background-color: ${e=>e.$active?"var(--primary-color)":"var(--card-bg)"};
  color: ${e=>e.$active?"var(--text-color)":"var(--text-secondary)"};
  font-weight: ${e=>e.$active?"600":"400"};
  box-shadow: ${e=>e.$active?"0 4px 8px rgba(255, 159, 13, 0.3)":"none"};
  
  &:hover {
    background-color: ${e=>e.$active?"var(--primary-light)":"var(--card-hover)"};
    color: var(--text-color);
    transform: translateY(-2px);
  }
`,Dr=yr.div`
  margin-top: var(--spacing-lg);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`,$r=yr.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--text-color);
`,Ar=yr.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
  color: var(--text-color);
  font-weight: 600;
`,Wr=yr.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,Ur=yr.div`
  padding: var(--spacing-md);
  border-bottom: 1px solid #333;
  transition: all var(--transition-fast);
  border-radius: var(--border-radius-sm);
  
  &:last-child {
    border-bottom: none;
  }
  
  &:hover {
    background-color: var(--card-hover);
  }
`,Hr=(yr.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: var(--spacing-sm);
`,yr.p`
  font-size: 1.1rem;
  color: var(--primary-color);
  margin-top: var(--spacing-sm);
  font-weight: 600;
`,yr.div`
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
`),Vr=(yr.span`
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 12px;
  margin-left: var(--spacing-xs);
`,yr.hr`
  border: none;
  height: 1px;
  background-color: rgba(255, 255, 255, 0.1);
  margin: var(--spacing-md) 0;
`,yr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-xl);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-lg);
  margin: var(--spacing-md) 0;
  
  svg {
    color: var(--primary-color);
    margin-bottom: var(--spacing-md);
  }
  
  h3 {
    margin-bottom: var(--spacing-sm);
    color: var(--text-color);
  }
  
  p {
    margin-bottom: var(--spacing-md);
    color: var(--text-secondary);
  }
`),Kr=yr.div`
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,Qr=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-md);
  transition: all var(--transition-normal);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  height: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
    background-color: var(--card-hover);
  }
`,Yr=yr.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  font-weight: 600;
  color: var(--text-color);
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,qr=()=>{const e=ee(),{selectedCity:t,selectedRestaurant:n}=Pe();return(0,Ce.jsxs)(kr,{children:[(0,Ce.jsx)(Sr,{children:(0,Ce.jsx)(jr,{src:"/assets/images/logo.png",alt:"Kulcha"})}),(0,Ce.jsx)(Tr,{onClick:()=>{e("/profile")},children:(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,Ce.jsx)("circle",{cx:"12",cy:"7",r:"4"})]})})]})},Gr=()=>{const e=ee(),n=Z(),{selectedCity:r,selectedRestaurant:a,deliveryMethod:o,setDeliveryMethod:i}=Pe(),[l,s]=(0,t.useState)("home");(0,t.useEffect)((()=>{n.pathname.includes("city-selection")?s("city"):n.pathname.includes("restaurant-selection")?s("restaurant"):"/"===n.pathname&&s("home")}),[n.pathname]);return(0,Ce.jsxs)(Cr,{children:[(0,Ce.jsxs)(Er,{onClick:()=>{e("/city-selection")},className:"city"===l?"active":"",children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"}),(0,Ce.jsx)("circle",{cx:"12",cy:"9",r:"2.5"})]}),r?r.name:"City"]}),(0,Ce.jsxs)(Er,{onClick:()=>{r&&e("/restaurant-selection")},disabled:!r,className:"restaurant"===l?"active":"",children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,Ce.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,Ce.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),a?a.name:"Restaurant"]}),(0,Ce.jsxs)(Er,{onClick:()=>{i("delivery")},className:"delivery"===o?"active":"",children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"7",cy:"17",r:"2"}),(0,Ce.jsx)("circle",{cx:"17",cy:"17",r:"2"}),(0,Ce.jsx)("path",{d:"M5 17H3v-6l2-2h8l3 3h1a2 2 0 0 1 2 2v3h-2"}),(0,Ce.jsx)("path",{d:"M15 8h5l-1.5 5h-5"})]}),"Delivery"]}),(0,Ce.jsxs)(Er,{onClick:()=>{i("pickup")},className:"pickup"===o?"active":"",children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M4 10h12"}),(0,Ce.jsx)("path",{d:"M4 14h9"}),(0,Ce.jsx)("path",{d:"M4 18h6"}),(0,Ce.jsx)("path",{d:"M18 15v6"}),(0,Ce.jsx)("path",{d:"M15 18h6"}),(0,Ce.jsx)("path",{d:"m14.5 7.5-8-4-2 3 8 4Z"})]}),"Pickup"]})]})},Xr=yr.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  background-color: var(--card-bg);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    transform: translateY(-5px) rotateX(2deg);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  }
`,Zr=yr.div`
  position: relative;
  height: 180px;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
  }
`,Jr=yr.div`
  height: 100%;
  background-image: ${e=>`url(${e.$imageUrl})`};
  background-size: cover;
  background-position: center;
  transition: transform 0.5s ease;
  
  ${Xr}:hover & {
    transform: scale(1.05);
  }
`,ea=yr.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`,ta=yr.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
`,na=yr.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`,ra=yr.div`
  font-weight: 700;
  color: var(--primary-color);
  font-size: 1.1rem;
  display: inline-block;
  padding: 4px 8px;
  background-color: rgba(255, 159, 13, 0.1);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-sm);
`,aa=yr.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-md);
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  margin-top: auto;
  
  svg {
    margin-right: 6px;
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
  }
  
  &:active {
    transform: translateY(0);
  }
`,oa=yr.span`
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
  background-color: var(--primary-color);
  color: white;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 20px;
  z-index: 1;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`,ia=e=>{var n,r,a,o;let{id:i,name:l,description:s,price:u,item:c}=e;const[d,p]=(0,t.useState)(!1),{addToCart:f}=Pe(),h=i||(null!==(n=null===c||void 0===c?void 0:c.id)&&void 0!==n?n:0),g=l||(null!==(r=null===c||void 0===c?void 0:c.name)&&void 0!==r?r:""),m=s||(null!==(a=null===c||void 0===c?void 0:c.description)&&void 0!==a?a:""),v=u||(null!==(o=null===c||void 0===c?void 0:c.price)&&void 0!==o?o:0),y=()=>({1:"/assets/images/butter-chicken.jpg",2:"/assets/images/paneer-tikka.jpg",3:"/assets/images/chicken-biryani.jpg",4:"/assets/images/vegetable-samosa.jpg",5:"/assets/images/masala-dosa.jpg",6:"/assets/images/gulab-jamun.jpg"}[h]||`https://via.placeholder.com/400x300?text=${encodeURIComponent(g)}`),x=[1,3,5].includes(h);return(0,Ce.jsxs)(Xr,{children:[x&&(0,Ce.jsx)(oa,{children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435"}),(0,Ce.jsx)(Zr,{children:(0,Ce.jsx)(Jr,{$imageUrl:y()})}),(0,Ce.jsxs)(ea,{children:[(0,Ce.jsx)(ta,{children:g}),(0,Ce.jsx)(na,{children:m}),(0,Ce.jsxs)(ra,{children:["\u20bd",v]}),(0,Ce.jsx)(aa,{onClick:()=>{const e={id:h,name:g,price:v,description:m,image:y()};f(e),p(!0),setTimeout((()=>{p(!1)}),1500)},children:d?(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"\u0414\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u043e \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]}):(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,Ce.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,Ce.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"\u0412 \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})})]})]})};const la=function(){var e;const n=null===(e=window.Telegram)||void 0===e?void 0:e.WebApp;return(0,t.useEffect)((()=>{n&&(n.ready(),n.expand())}),[n]),{tg:n,showBackButton:()=>{n&&n.BackButton.show()},hideBackButton:()=>{n&&n.BackButton.hide()},setBackButtonCallback:e=>{n&&n.BackButton.onClick(e)},showMainButton:e=>{n&&(n.MainButton.setText(e),n.MainButton.show())},hideMainButton:()=>{n&&n.MainButton.hide()},setMainButtonCallback:e=>{n&&n.MainButton.onClick(e)},enableMainButton:()=>{n&&n.MainButton.enable()},disableMainButton:()=>{n&&n.MainButton.disable()},showMainButtonLoader:()=>{n&&n.MainButton.showProgress(!1)},hideMainButtonLoader:()=>{n&&n.MainButton.hideProgress()},getUser:()=>{var e;return null===n||void 0===n||null===(e=n.initDataUnsafe)||void 0===e?void 0:e.user}}},sa=()=>{const e=ee(),{cart:t}=Pe(),n=t.reduce(((e,t)=>e+t.quantity),0);return(0,Ce.jsxs)(Rr,{onClick:()=>{e("/cart")},children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"8",cy:"21",r:"1"}),(0,Ce.jsx)("circle",{cx:"19",cy:"21",r:"1"}),(0,Ce.jsx)("path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"})]}),n>0&&(0,Ce.jsx)("span",{children:n})]})},ua=yr(Kr)`
  min-height: 70vh;
`,ca=yr.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  @media (min-width: 768px) {
    height: 300px;
  }
`,da=yr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: var(--spacing-lg);
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 60%,
    rgba(0, 0, 0, 0) 100%
  );
  z-index: 1;
`,pa=yr.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-image: url('/assets/images/paneer-tikka.jpg');
  background-position: center;
  background-size: cover;
  transform: scale(1.05);
  filter: brightness(0.9);
  animation: subtle-zoom 30s infinite alternate;
  
  @keyframes subtle-zoom {
    0% {
      transform: scale(1.05) translate(0%, 0%);
    }
    100% {
      transform: scale(1.15) translate(-2%, -1%);
    }
  }
`,fa=yr.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: var(--spacing-sm);
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  max-width: 70%;
  
  @media (max-width: 600px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`,ha=yr.p`
  font-size: 1.2rem;
  margin-bottom: var(--spacing-md);
  color: rgba(255, 255, 255, 0.9);
  max-width: 60%;
  
  @media (max-width: 600px) {
    font-size: 1rem;
    max-width: 100%;
  }
`,ga=yr.button`
  background-color: var(--primary-color);
  color: white;
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  align-self: flex-start;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 12px rgba(255, 159, 13, 0.3);
  transition: all 0.2s ease;
  
  svg {
    margin-right: var(--spacing-xs);
  }
  
  &:hover {
    background-color: var(--primary-light);
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(255, 159, 13, 0.4);
  }
`,ma=yr.div`
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-md);
  background-color: var(--background-color);
  overflow-x: auto;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
  
  position: ${e=>e.$isSticky?"fixed":"relative"};
  top: ${e=>e.$isSticky?"0":"auto"};
  left: ${e=>e.$isSticky?"0":"auto"};
  right: ${e=>e.$isSticky?"0":"auto"};
  width: ${e=>e.$isSticky?"100%":"auto"};
  border-radius: ${e=>e.$isSticky?"0":"var(--border-radius-md)"};
  box-shadow: ${e=>e.$isSticky?"0 2px 10px rgba(0, 0, 0, 0.1)":"0 2px 8px rgba(0, 0, 0, 0.05)"};
  transition: all 0.3s ease;

  &::-webkit-scrollbar {
    display: none;
  }
  
  @media (max-width: 600px) {
    padding: var(--spacing-md);
    gap: var(--spacing-md);
  }
`,va=yr.button`
  background-color: ${e=>e.$active?"var(--primary-color)":"var(--card-bg)"};
  color: ${e=>e.$active?"white":"var(--text-color)"};
  border: none;
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: ${e=>e.$active?"600":"400"};
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.95rem;
  
  svg, span {
    margin-right: var(--spacing-xs);
    font-size: 1.1rem;
    display: inline-flex;
    align-items: center;
    flex-shrink: 0;
  }
  
  &:hover {
    background-color: ${e=>e.$active?"var(--primary-light)":"var(--card-hover)"};
    transform: translateY(-2px);
  }
  
  @media (max-width: 600px) {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
    min-height: 48px;
    min-width: 110px;
    
    svg, span {
      font-size: 1.1rem;
      margin-right: var(--spacing-sm);
    }
  }
`,ya=yr.div`
  height: ${e=>e.$isVisible?"68px":"0"};
  transition: height 0.3s ease;
  
  @media (max-width: 600px) {
    height: ${e=>e.$isVisible?"76px":"0"};
  }
`,xa=yr(Ar)`
  display: flex;
  align-items: center;
  margin-top: var(--spacing-xl);
  
  svg {
    margin-right: var(--spacing-sm);
    color: var(--primary-color);
  }
`,ba=yr.div`
  margin-bottom: var(--spacing-xl);
`,wa=yr.div`
  margin-bottom: var(--spacing-xl);
  scroll-margin-top: 80px;
`,ka=()=>{const e=ee(),{selectedCity:n,selectedRestaurant:r,menuItems:a,setSelectedCity:o,setSelectedRestaurant:i}=Pe(),{hideBackButton:l,hideMainButton:s}=la(),[u,c]=(0,t.useState)("popular"),[d,p]=(0,t.useState)(!1),[f,h]=(0,t.useState)(0),[g,m]=(0,t.useState)("up"),[v,y]=(0,t.useState)(null),[x,b]=(0,t.useState)(!1),w=(0,t.useRef)(0),k=(0,t.useRef)(null),S=(0,t.useRef)(null),j=(0,t.useRef)(null),C=(0,t.useRef)(null),E=(0,t.useRef)(null),_=(0,t.useRef)(null);(0,t.useEffect)((()=>{l(),s()}),[l,s]),(0,t.useEffect)((()=>{if(k.current&&null===v){const e=k.current.getBoundingClientRect().top+window.scrollY;y(e)}}),[v]),(0,t.useEffect)((()=>{const e=()=>{const e=window.scrollY,t=Date.now();if(m(e>f?"down":"up"),h(e),k.current&&null!==v)if(e<v-1)p(!1);else{const t=k.current.getBoundingClientRect().top;"down"===g?p(t<=0):e<v&&p(!1)}x||t-w.current<2e3||Math.abs(e-f)>50||(_.current&&clearTimeout(_.current),_.current=window.setTimeout((()=>{var t,n,r,a;const o=e+100,i=[{id:"desserts",position:(null===(t=E.current)||void 0===t?void 0:t.offsetTop)||0},{id:"appetizers",position:(null===(n=C.current)||void 0===n?void 0:n.offsetTop)||0},{id:"main",position:(null===(r=j.current)||void 0===r?void 0:r.offsetTop)||0},{id:"popular",position:(null===(a=S.current)||void 0===a?void 0:a.offsetTop)||0}].filter((e=>e.position>0)).sort(((e,t)=>t.position-e.position)),l=i.find((e=>o>=e.position-70));l&&c(l.id)}),200))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e),_.current&&clearTimeout(_.current)}}),[f,g,v,x]);const P=()=>{s(),n?r||e("/restaurant-selection"):e("/city-selection")},L=a.filter((e=>[1,3,5].includes(e.id))),z=a.filter((e=>[1,2,3].includes(e.id))),T=a.filter((e=>[4,5].includes(e.id))),R=a.filter((e=>[6].includes(e.id)));return(0,Ce.jsx)(ua,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:n&&r?(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)(ca,{children:[(0,Ce.jsx)(pa,{}),(0,Ce.jsxs)(da,{children:[(0,Ce.jsx)(fa,{children:r.name}),(0,Ce.jsxs)(ha,{children:["\u041d\u0430\u0441\u043b\u0430\u0434\u0438\u0442\u0435\u0441\u044c \u043b\u0443\u0447\u0448\u0435\u0439 \u0435\u0434\u043e\u0439 \u0432 ",n.name]}),(0,Ce.jsxs)(ga,{onClick:()=>{i(null),e("/restaurant-selection")},children:[(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("path",{d:"M9 14l6-6-6-6"})}),"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"]})]})]}),(0,Ce.jsx)(ma,{ref:k,$isSticky:d,children:[{id:"popular",name:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u043e\u0435",icon:"\u2b50"},{id:"main",name:"\u041f\u0435\u0440\u0432\u043e\u0435",icon:"\ud83c\udf5b"},{id:"appetizers",name:"\u0412\u0442\u043e\u0440\u043e\u0435",icon:"\ud83e\udd63"},{id:"desserts",name:"\u0414\u0435\u0441\u0435\u0440\u0442\u044b",icon:"\ud83c\udf6e"}].map((e=>(0,Ce.jsxs)(va,{$active:u===e.id,onClick:()=>(e=>{w.current=Date.now(),b(!0),c(e);let t=null;switch(e){case"popular":default:t=S.current;break;case"main":t=j.current;break;case"appetizers":t=C.current;break;case"desserts":t=E.current}t&&requestAnimationFrame((()=>{window.scrollTo({top:t.offsetTop-70,behavior:"smooth"}),setTimeout((()=>{b(!1)}),2e3)}))})(e.id),children:[(0,Ce.jsx)("span",{children:e.icon})," ",e.name]},e.id)))}),(0,Ce.jsx)(ya,{$isVisible:d}),(0,Ce.jsxs)(ba,{ref:S,children:[(0,Ce.jsxs)(xa,{children:[(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"})}),"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430"]}),(0,Ce.jsx)(Pr,{children:L.map((e=>(0,Ce.jsx)(ia,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)))})]}),(0,Ce.jsxs)(wa,{ref:j,children:[(0,Ce.jsxs)(xa,{children:[(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM15.42 15.71l5.38 5.38a1 1 0 0 0 1.41 0l1.88-1.88a1 1 0 0 0 0-1.41l-5.38-5.38"})}),"\u041f\u0435\u0440\u0432\u043e\u0435"]}),(0,Ce.jsx)(Pr,{children:z.map((e=>(0,Ce.jsx)(ia,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)))})]}),(0,Ce.jsxs)(wa,{ref:C,children:[(0,Ce.jsxs)(xa,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z"}),(0,Ce.jsx)("line",{x1:"6",y1:"17",x2:"18",y2:"17"})]}),"\u0412\u0442\u043e\u0440\u043e\u0435"]}),(0,Ce.jsx)(Pr,{children:T.map((e=>(0,Ce.jsx)(ia,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)))})]}),(0,Ce.jsxs)(wa,{ref:E,children:[(0,Ce.jsxs)(xa,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M12 21a9 9 0 0 1-9-9c0-3.9 2.5-7.2 6-8.5 0 1.5.5 3 1.5 4 .8.8 1.8 1.2 2.8 1.5.8.2 1.7.3 2.7.3a8 8 0 0 0 3.3-.7"}),(0,Ce.jsx)("path",{d:"M12 12a9 9 0 0 0 9 9c3.9 0 7.2-2.5 8.5-6-1.5 0-3-.5-4-1.5-.8-.8-1.2-1.8-1.5-2.8-.2-.8-.3-1.7-.3-2.7a8 8 0 0 1 .7-3.3"}),(0,Ce.jsx)("path",{d:"M21 12h-2c0-4.4-3.6-8-8-8v-2c5.5 0 10 4.5 10 10z"})]}),"\u0414\u0435\u0441\u0435\u0440\u0442\u044b"]}),(0,Ce.jsx)(Pr,{children:R.map((e=>(0,Ce.jsx)(ia,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)))})]})]}):(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)(ca,{children:[(0,Ce.jsx)(pa,{}),(0,Ce.jsxs)(da,{children:[(0,Ce.jsx)(fa,{children:"\u0412\u043a\u0443\u0441\u043d\u0430\u044f \u0435\u0434\u0430 \u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u043e\u0439"}),(0,Ce.jsx)(ha,{children:"\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0434\u043b\u044f \u0441\u0435\u0431\u044f \u0430\u0443\u0442\u0435\u043d\u0442\u0438\u0447\u043d\u044b\u0435 \u0432\u043a\u0443\u0441\u044b \u043b\u0443\u0447\u0448\u0438\u0445 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),(0,Ce.jsxs)(ga,{onClick:P,children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Ce.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"\u041d\u0430\u0447\u0430\u0442\u044c"]})]})]}),(0,Ce.jsxs)(Vr,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,Ce.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),(0,Ce.jsx)("h3",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"}),(0,Ce.jsx)("p",{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434 \u0438 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"}),(0,Ce.jsxs)(ga,{onClick:P,children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,Ce.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0435"]})]})]})}),(0,Ce.jsx)(sa,{})]})})},Sa=()=>{const e=ee(),{cities:n,selectedCity:r,setSelectedCity:a}=Pe(),{showBackButton:o,hideBackButton:i,setBackButtonCallback:l,hideMainButton:s}=la();(0,t.useEffect)((()=>{0===n.length&&e("/")}),[n,e]),(0,t.useEffect)((()=>(i(),s(),()=>{i()})),[i,e,r,l,s]);return(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsxs)(_r,{children:[(0,Ce.jsx)($r,{children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0432\u0430\u0448 \u0433\u043e\u0440\u043e\u0434"}),(0,Ce.jsxs)("div",{children:[(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{htmlFor:"city",children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),(0,Ce.jsxs)(Mr,{id:"city",value:(null===r||void 0===r?void 0:r.id)||"",onChange:e=>{const t=parseInt(e.target.value,10),r=n.find((e=>e.id===t));r&&a(r)},children:[(0,Ce.jsx)("option",{value:"",disabled:!0,children:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434"}),n.map((e=>(0,Ce.jsx)("option",{value:e.id,children:e.name},e.id)))]})]}),(0,Ce.jsx)("h3",{style:{marginTop:"30px"},children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"}),(0,Ce.jsx)(Pr,{children:n.map((t=>(0,Ce.jsxs)(Qr,{onClick:()=>(t=>{const r=n.find((e=>e.id===t));r&&(a(r),e("/restaurant-selection"))})(t.id),children:[(0,Ce.jsx)(Yr,{children:t.name}),(0,Ce.jsx)(zr,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0433\u043e\u0440\u043e\u0434"})]},t.id)))})]})]}),(0,Ce.jsx)(sa,{})]})},ja=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  overflow: hidden;
  cursor: pointer;
  transition: all var(--transition-normal);
  position: relative;
  height: 220px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  
  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: var(--box-shadow);
    
    &::after {
      opacity: 0.7;
    }
    
    .restaurant-info {
      transform: translateY(0);
    }
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.3));
    opacity: 0.5;
    transition: opacity var(--transition-normal);
    z-index: 1;
  }
`,Ca=yr.div`
  width: 100%;
  height: 100%;
  background-image: ${e=>e.$bgImage?`url(${e.$bgImage})`:"linear-gradient(45deg, var(--primary-dark), var(--primary-color))"};
  background-size: cover;
  background-position: center;
  transition: transform var(--transition-normal);
  
  ${ja}:hover & {
    transform: scale(1.1);
  }
`,Ea=yr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-md);
  color: var(--text-color);
  z-index: 2;
  transform: translateY(10px);
  transition: transform var(--transition-normal);
  
  h3 {
    font-size: 1.3rem;
    margin-bottom: 4px;
    font-weight: 600;
  }
  
  p {
    font-size: 0.9rem;
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
  }
`,_a=yr(zr)`
  width: 100%;
  background-color: var(--primary-color);
  color: white;
  border-radius: var(--border-radius-sm);
  font-weight: 500;
  
  &:hover {
    background-color: var(--primary-light);
  }
`,Pa=yr.span`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background-color: var(--primary-color);
  color: white;
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  z-index: 3;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`,La=yr.div`
  margin-bottom: var(--spacing-md);
  position: relative;
`,za=yr(Fr)`
  padding-left: 40px;
  width: 100%;
  background-color: var(--card-bg);
  border: 1px solid rgba(255, 255, 255, 0.1);
  
  &:focus {
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(255, 159, 13, 0.2);
  }
`,Ta=yr.div`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--text-secondary);
`,Ra=yr(Vr)`
  padding: var(--spacing-lg);
  margin-top: var(--spacing-md);
`,Na=["https://images.unsplash.com/photo-1517248135467-4c7edcad34c4","https://images.unsplash.com/photo-1552566626-52f8b828add9","https://images.unsplash.com/photo-1514933651103-005eec06c04b","https://images.unsplash.com/photo-1559339352-11d035aa65de"],Oa=()=>{const e=ee(),{restaurants:n,selectedCity:r,setSelectedRestaurant:a}=Pe(),[o,i]=(0,t.useState)(""),{showBackButton:l,hideBackButton:s,hideMainButton:u,setBackButtonCallback:c}=la(),d=(0,t.useMemo)((()=>{if(!r)return[];let e=n.filter((e=>e.cityId===r.id));if(o.trim()){const t=o.toLowerCase().trim();e=e.filter((e=>e.name.toLowerCase().includes(t)||e.address.toLowerCase().includes(t)))}return e}),[n,r,o]);(0,t.useEffect)((()=>{r||e("/city-selection")}),[r,e]),(0,t.useEffect)((()=>(l(),u(),c((()=>{e("/city-selection")})),()=>{s()})),[s,e,c,l,u]);const p=e=>Na[e%Na.length];return(0,Ce.jsx)(Kr,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsxs)(_r,{children:[(0,Ce.jsxs)($r,{children:["\u0420\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u044b \u0432 ",null===r||void 0===r?void 0:r.name]}),(0,Ce.jsxs)(La,{children:[(0,Ce.jsx)(Ta,{children:(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,Ce.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]})}),(0,Ce.jsx)(za,{type:"text",placeholder:"\u041f\u043e\u0438\u0441\u043a \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432...",value:o,onChange:e=>i(e.target.value)})]}),0===d.length?o?(0,Ce.jsxs)(Ra,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"11",cy:"11",r:"8"}),(0,Ce.jsx)("line",{x1:"21",y1:"21",x2:"16.65",y2:"16.65"})]}),(0,Ce.jsx)("h3",{children:"\u041d\u0435\u0442 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432"}),(0,Ce.jsxs)("p",{children:['\u041f\u043e \u0437\u0430\u043f\u0440\u043e\u0441\u0443 "',o,'" \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e']}),(0,Ce.jsx)(zr,{onClick:()=>i(""),children:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u043e\u0438\u0441\u043a"})]}):(0,Ce.jsxs)(Vr,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M17 11H3c-.6 0-1 .4-1 1v9c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-9c0-.6-.4-1-1-1Z"}),(0,Ce.jsx)("path",{d:"M14 11V6c0-2.8-2.2-5-5-5S4 3.2 4 6v5"}),(0,Ce.jsx)("path",{d:"M21 11v9c0 .6-.4 1-1 1h-2c-.6 0-1-.4-1-1v-9c0-.6.4-1 1-1h2c.6 0 1 .4 1 1Z"})]}),(0,Ce.jsx)("h3",{children:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432"}),(0,Ce.jsx)("p",{children:"\u0412 \u044d\u0442\u043e\u043c \u0433\u043e\u0440\u043e\u0434\u0435 \u043f\u043e\u043a\u0430 \u043d\u0435\u0442 \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d\u043e\u0432."}),(0,Ce.jsx)(zr,{onClick:()=>e("/city-selection"),children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0434\u0440\u0443\u0433\u043e\u0439 \u0433\u043e\u0440\u043e\u0434"})]}):(0,Ce.jsx)(Pr,{children:d.map(((t,r)=>(0,Ce.jsxs)(ja,{onClick:()=>(t=>{const r=n.find((e=>e.id===t));r&&(a(r),e("/"))})(t.id),children:[(0,Ce.jsx)(Ca,{$bgImage:p(r)}),(0,Ce.jsx)(Pa,{children:"\u041f\u0430\u0440\u0442\u043d\u0435\u0440 Kulcha"}),(0,Ce.jsxs)(Ea,{className:"restaurant-info",children:[(0,Ce.jsx)("h3",{children:t.name}),(0,Ce.jsx)("p",{children:t.address}),(0,Ce.jsx)(_a,{children:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u0441\u0442\u043e\u0440\u0430\u043d"})]})]},t.id)))})]}),(0,Ce.jsx)(sa,{})]})})},Fa=yr(Kr)`
  min-height: 70vh;
`,Ma=yr(Br)`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: var(--background-color);
  padding: var(--spacing-sm) 0;
  margin-bottom: var(--spacing-lg);
`,Ba=yr(Ir)`
  border-radius: var(--border-radius-lg);
  font-weight: 500;
  padding: var(--spacing-sm) var(--spacing-md);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,Ia=yr.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`,Da=yr(Nr)`
  grid-column: span 2;
  
  @media (max-width: 600px) {
    grid-column: span 1;
  }
`,$a=yr.button`
  background-color: var(--primary-color);
  color: white;
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  width: 100%;
  margin-top: var(--spacing-md);
  
  &:hover {
    background-color: var(--primary-light);
  }
`,Aa=(yr(Ur)`
  background-color: var(--card-bg);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: none;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-sm);
`,yr.span`
  font-weight: 600;
  color: var(--text-color);
`,yr.span`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: ${e=>{switch(e.$status){case"delivered":return"#4CAF50";case"cancelled":return"#F44336";default:return"#FF9800"}}};
  color: white;
`,yr.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-sm);
`,yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`),Wa=(yr.span`
  color: var(--text-color);
`,yr.span`
  color: var(--text-secondary);
`,yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: var(--spacing-sm);
`,()=>{const[e,n]=(0,t.useState)("orders"),[r,a]=(0,t.useState)(!1),o=ee(),{orderHistory:i,userAddress:l,updateUserAddress:s}=Pe(),{showBackButton:u,hideBackButton:c,setBackButtonCallback:d,hideMainButton:p}=la();(0,t.useEffect)((()=>(u(),p(),d((()=>{o("/")})),()=>{c()})),[c,p,o,d,u]);const f=e=>{const{name:t,value:n}=e.target;s({...l||{name:"",phone:"",address:"",city:""},[t]:n}),a(!1)},h=e=>{switch(e){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";case"rejected":return"\u041e\u0442\u043a\u043b\u043e\u043d\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}},g=e=>{switch(e){case"pending":return"#FFC107";case"confirmed":return"#2196F3";case"preparing":return"#9C27B0";case"ready":return"#4CAF50";case"delivered":return"#8BC34A";case"rejected":return"#F44336";default:return"#607D8B"}};return(0,Ce.jsx)(Fa,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsxs)(_r,{children:[(0,Ce.jsx)($r,{children:"\u0412\u0430\u0448 \u043f\u0440\u043e\u0444\u0438\u043b\u044c"}),(0,Ce.jsxs)(Ma,{children:[(0,Ce.jsxs)(Ba,{onClick:()=>n("orders"),$active:"orders"===e,children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",ry:"2"}),(0,Ce.jsx)("line",{x1:"8",y1:"21",x2:"16",y2:"21"}),(0,Ce.jsx)("line",{x1:"12",y1:"17",x2:"12",y2:"21"})]}),"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]}),(0,Ce.jsxs)(Ba,{onClick:()=>n("address"),$active:"address"===e,children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),(0,Ce.jsx)("circle",{cx:"12",cy:"10",r:"3"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"]})]}),"address"===e&&(0,Ce.jsxs)(Hr,{children:[(0,Ce.jsx)($r,{children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),r&&(0,Ce.jsxs)("div",{style:{padding:"var(--spacing-sm)",backgroundColor:"#4CAF50",color:"white",borderRadius:"var(--border-radius-sm)",marginBottom:"var(--spacing-md)",display:"flex",alignItems:"center",justifyContent:"center"},children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",style:{marginRight:"8px"},children:[(0,Ce.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,Ce.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"\u0410\u0434\u0440\u0435\u0441 \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0441\u043e\u0445\u0440\u0430\u043d\u0435\u043d!"]}),(0,Ce.jsxs)(Ia,{onSubmit:e=>{e.preventDefault(),a(!0)},children:[(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{htmlFor:"name",children:"\u0418\u043c\u044f"}),(0,Ce.jsx)(Fr,{type:"text",id:"name",name:"name",value:(null===l||void 0===l?void 0:l.name)||"",onChange:f,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0438\u043c\u044f",required:!0})]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{htmlFor:"phone",children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d"}),(0,Ce.jsx)(Fr,{type:"tel",id:"phone",name:"phone",value:(null===l||void 0===l?void 0:l.phone)||"",onChange:f,placeholder:"+7 (___) ___-__-__",required:!0})]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{htmlFor:"city",children:"\u0413\u043e\u0440\u043e\u0434"}),(0,Ce.jsx)(Fr,{type:"text",id:"city",name:"city",value:(null===l||void 0===l?void 0:l.city)||"",onChange:f,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0433\u043e\u0440\u043e\u0434\u0430"})]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{htmlFor:"address",children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438"}),(0,Ce.jsx)(Fr,{type:"text",id:"address",name:"address",value:(null===l||void 0===l?void 0:l.address)||"",onChange:f,placeholder:"\u0423\u043b\u0438\u0446\u0430, \u0434\u043e\u043c, \u043a\u0432\u0430\u0440\u0442\u0438\u0440\u0430"})]}),(0,Ce.jsx)(Da,{children:(0,Ce.jsx)($a,{type:"submit",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0430\u0434\u0440\u0435\u0441"})})]})]}),"orders"===e&&(0,Ce.jsxs)(Dr,{children:[(0,Ce.jsx)($r,{children:"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),0===i.length?(0,Ce.jsxs)(Vr,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,Ce.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,Ce.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),(0,Ce.jsx)("h3",{children:"\u041d\u0435\u0442 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"}),(0,Ce.jsx)("p",{children:"\u0412\u044b \u0435\u0449\u0435 \u043d\u0435 \u0441\u0434\u0435\u043b\u0430\u043b\u0438 \u043d\u0438 \u043e\u0434\u043d\u043e\u0433\u043e \u0437\u0430\u043a\u0430\u0437\u0430."}),(0,Ce.jsx)($a,{onClick:()=>o("/"),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"})]}):i.map((e=>{return(0,Ce.jsxs)(Aa,{onClick:()=>{return t=e.id,void o(`/orders/${t}`);var t},children:[(0,Ce.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"var(--spacing-sm)"},children:[(0,Ce.jsxs)("div",{style:{fontWeight:"bold"},children:["\u0417\u0430\u043a\u0430\u0437 #",e.id]}),(0,Ce.jsx)("div",{style:{display:"inline-block",padding:"4px 8px",borderRadius:"12px",fontSize:"0.8rem",fontWeight:"bold",color:"white",backgroundColor:g(e.status)},children:h(e.status)})]}),(0,Ce.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",fontSize:"0.9rem",color:"var(--text-secondary)",marginBottom:"var(--spacing-sm)"},children:[(0,Ce.jsx)("div",{children:(t=e.date,new Date(t).toLocaleString())}),(0,Ce.jsx)("div",{children:"delivery"===e.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),(0,Ce.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"var(--spacing-sm)"},children:[(0,Ce.jsxs)("div",{style:{fontSize:"0.9rem"},children:[e.items.length," ",1===e.items.length?"\u0442\u043e\u0432\u0430\u0440":e.items.length>=2&&e.items.length<=4?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),(0,Ce.jsxs)("div",{style:{fontWeight:"bold",color:"var(--primary-color)"},children:["\u20bd",e.totalAmount]})]})]},e.id);var t}))]})]}),(0,Ce.jsx)(sa,{})]})})}),Ua=yr(Kr)`
  min-height: 70vh;
`,Ha=yr.div`
  margin-bottom: var(--spacing-xl);
`,Va=yr(Ar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,Ka=yr.div`
  display: flex;
  align-items: center;
`,Qa=yr.button`
  background-color: transparent;
  color: #F44336;
  border: 1px solid #F44336;
  padding: 8px 12px;
  border-radius: var(--border-radius-sm);
  font-size: 0.95rem;
  font-weight: 500;
  margin-left: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
  }
  
  &:hover {
    background-color: #F44336;
    color: white;
    transform: translateY(-2px);
  }
`,Ya=yr.div`
  margin-bottom: var(--spacing-xl);
`,qa=yr.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`,Ga=yr.div`
  flex: 1;
`,Xa=yr.h3`
  font-size: 1.1rem;
  margin: 0 0 var(--spacing-xs) 0;
  color: var(--text-color);
`,Za=yr.div`
  font-weight: 600;
  color: var(--primary-color);
`,Ja=yr.div`
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-sm);
  overflow: hidden;
  margin-left: var(--spacing-md);
`,eo=yr.button`
  width: 40px;
  height: 40px;
  background-color: var(--primary-color);
  color: white;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: var(--primary-light);
  }
  
  &:disabled {
    background-color: var(--primary-dark);
    opacity: 0.6;
    cursor: not-allowed;
  }
`,to=yr.span`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--card-bg);
  color: var(--text-color);
  font-weight: 600;
  font-size: 1.1rem;
`,no=yr.div`
  display: flex;
  align-items: center;
`,ro=yr.button`
  background-color: #F44336;
  color: white;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: var(--spacing-md);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #D32F2F;
    transform: scale(1.05);
  }
`,ao=yr.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,oo=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`,io=yr.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
`,lo=yr.span`
  font-weight: 600;
  color: var(--text-color);
`,so=yr(io)`
  font-size: 1.1rem;
  color: var(--text-color);
`,uo=yr(lo)`
  font-size: 1.2rem;
  color: var(--primary-color);
`,co=yr(Wr)`
  width: 100%;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`,po=()=>{const{cart:e,increaseQuantity:n,decreaseQuantity:r,removeFromCart:a,clearCart:o}=Pe(),i=ee(),{showBackButton:l,hideBackButton:s,setBackButtonCallback:u}=la();(0,t.useEffect)((()=>(l(),u((()=>{i(-1)})),()=>{s()})),[s,i,u,l]);const c=e.reduce(((e,t)=>e+t.price*t.quantity),0),d=c+150;return(0,Ce.jsx)(Ua,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:(0,Ce.jsxs)(Ha,{children:[(0,Ce.jsxs)(Va,{children:[(0,Ce.jsxs)("div",{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,Ce.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,Ce.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"]}),e.length>0&&(0,Ce.jsxs)(Ka,{children:[(0,Ce.jsxs)("span",{style:{fontSize:"1.1rem"},children:[e.length," ",1===e.length?"\u0442\u043e\u0432\u0430\u0440":e.length>=2&&e.length<=4?"\u0442\u043e\u0432\u0430\u0440\u0430":"\u0442\u043e\u0432\u0430\u0440\u043e\u0432"]}),(0,Ce.jsxs)(Qa,{onClick:o,children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,Ce.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]}),"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"]})]})]}),0===e.length?(0,Ce.jsxs)(Vr,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"9",cy:"21",r:"1"}),(0,Ce.jsx)("circle",{cx:"20",cy:"21",r:"1"}),(0,Ce.jsx)("path",{d:"M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"})]}),(0,Ce.jsx)("h3",{children:"\u0412\u0430\u0448\u0430 \u043a\u043e\u0440\u0437\u0438\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),(0,Ce.jsx)("p",{children:"\u0414\u043e\u0431\u0430\u0432\u044c\u0442\u0435 \u0432\u043a\u0443\u0441\u043d\u044b\u0435 \u0431\u043b\u044e\u0434\u0430 \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443 \u0438 \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044c!"}),(0,Ce.jsx)(Wr,{onClick:()=>i("/"),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u0435\u043d\u044e"})]}):(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsx)(Ya,{children:e.map((e=>(0,Ce.jsxs)(qa,{children:[(0,Ce.jsxs)(Ga,{children:[(0,Ce.jsx)(Xa,{children:e.name}),(0,Ce.jsxs)(Za,{children:["\u20bd",e.price]})]}),(0,Ce.jsxs)(no,{children:[(0,Ce.jsxs)(Ja,{children:[(0,Ce.jsx)(eo,{onClick:()=>r(e.id),"aria-label":"Decrease quantity",children:(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})}),(0,Ce.jsx)(to,{children:e.quantity}),(0,Ce.jsx)(eo,{onClick:()=>n(e.id),"aria-label":"Increase quantity",children:(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),(0,Ce.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})]}),(0,Ce.jsx)(ro,{onClick:()=>a(e.id),"aria-label":"Remove item",children:(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("polyline",{points:"3 6 5 6 21 6"}),(0,Ce.jsx)("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"})]})})]})]},e.id)))}),(0,Ce.jsxs)(ao,{children:[(0,Ce.jsxs)(oo,{children:[(0,Ce.jsx)(io,{children:"\u041f\u043e\u0434\u044b\u0442\u043e\u0433"}),(0,Ce.jsxs)(lo,{children:["\u20bd",c]})]}),(0,Ce.jsxs)(oo,{children:[(0,Ce.jsx)(io,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,Ce.jsxs)(lo,{children:["\u20bd",150]})]}),(0,Ce.jsxs)(oo,{children:[(0,Ce.jsx)(so,{children:"\u0418\u0442\u043e\u0433\u043e"}),(0,Ce.jsxs)(uo,{children:["\u20bd",d]})]}),(0,Ce.jsxs)(co,{onClick:()=>{i("/checkout")},children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Ce.jsx)("polyline",{points:"12 6 12 12 16 14"})]}),"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u044e"]})]})]})]})}),(0,Ce.jsx)(sa,{})]})})},fo=yr(Kr)`
  min-height: 70vh;
`,ho=yr.div`
  margin-bottom: var(--spacing-xl);
`,go=yr(Ar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,mo=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,vo=yr.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`,yo=yr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
`,xo=yr.div`
  display: flex;
  align-items: center;
  padding: var(--spacing-sm);
  background-color: var(--background-light);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  &.selected {
    background-color: rgba(255, 159, 13, 0.15);
    border: 1px solid var(--primary-color);
  }
  
  input {
    margin-right: var(--spacing-sm);
  }
  
  label {
    cursor: pointer;
    width: 100%;
  }
`,bo=yr.div`
  background-color: var(--card-bg);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,wo=yr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-md);
  
  &:last-child {
    margin-bottom: 0;
    padding-top: var(--spacing-md);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
`,ko=yr.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
`,So=yr.span`
  font-weight: 600;
  color: var(--text-color);
`,jo=yr(ko)`
  font-size: 1.1rem;
  color: var(--text-color);
`,Co=yr(So)`
  font-size: 1.2rem;
  color: var(--primary-color);
`,Eo=yr.div`
  margin-top: var(--spacing-md);
`,_o=yr.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,Po=yr.span`
  font-size: 0.95rem;
  color: var(--text-color);
`,Lo=yr.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-sm);
`,zo=yr.span`
  font-weight: 600;
  color: var(--text-color);
`,To=yr(Wr)`
  width: 100%;
  padding: var(--spacing-md);
  font-size: 1.1rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`,Ro=()=>{const{cart:e,placeOrder:n,deliveryMethod:r,setDeliveryMethod:a,userAddress:o,updateUserAddress:i}=Pe(),l=ee(),{showBackButton:s,hideBackButton:u,setBackButtonCallback:c}=la(),[d,p]=(0,t.useState)({name:"",phone:"",address:"",city:""}),[f,h]=(0,t.useState)({name:"",phone:"",address:"",city:""});(0,t.useEffect)((()=>(s(),c((()=>{l("/cart")})),()=>{u()})),[u,l,c,s]),(0,t.useEffect)((()=>{o&&p({name:o.name||"",phone:o.phone||"",address:o.address||"",city:o.city||""})}),[o]);const g="delivery"===r?150:0,m=e.reduce(((e,t)=>e+t.price*t.quantity),0),v=m+g,y=e=>{const{name:t,value:n}=e.target;p({...d,[t]:n}),h({...f,[t]:""})},x=e=>{a(e)};return(0,Ce.jsx)(fo,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:(0,Ce.jsxs)(ho,{children:[(0,Ce.jsx)(go,{children:(0,Ce.jsxs)("div",{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,Ce.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"\u041e\u0444\u043e\u0440\u043c\u043b\u0435\u043d\u0438\u0435 \u0437\u0430\u043a\u0430\u0437\u0430"]})}),(0,Ce.jsxs)(mo,{children:[(0,Ce.jsxs)(vo,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"}),(0,Ce.jsx)("circle",{cx:"12",cy:"7",r:"4"})]}),"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u043d\u0430\u044f \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f"]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{children:"\u0418\u043c\u044f*"}),(0,Ce.jsx)(Fr,{type:"text",name:"name",value:d.name,onChange:y,placeholder:"\u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432",error:f.name}),f.name&&(0,Ce.jsx)("span",{style:{color:"#F44336",fontSize:"0.85rem"},children:f.name})]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{children:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d*"}),(0,Ce.jsx)(Fr,{type:"tel",name:"phone",value:d.phone,onChange:y,placeholder:"+7 (___) ___-__-__",error:f.phone}),f.phone&&(0,Ce.jsx)("span",{style:{color:"#F44336",fontSize:"0.85rem"},children:f.phone})]})]}),(0,Ce.jsxs)(mo,{children:[(0,Ce.jsxs)(vo,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("rect",{x:"2",y:"7",width:"20",height:"14",rx:"2",ry:"2"}),(0,Ce.jsx)("path",{d:"M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"})]}),"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f"]}),(0,Ce.jsxs)(yo,{children:[(0,Ce.jsxs)(xo,{className:"delivery"===r?"selected":"",children:[(0,Ce.jsx)("input",{type:"radio",id:"delivery",name:"deliveryMethod",checked:"delivery"===r,onChange:()=>x("delivery")}),(0,Ce.jsx)("label",{htmlFor:"delivery",children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"})]}),(0,Ce.jsxs)(xo,{className:"pickup"===r?"selected":"",children:[(0,Ce.jsx)("input",{type:"radio",id:"pickup",name:"deliveryMethod",checked:"pickup"===r,onChange:()=>x("pickup")}),(0,Ce.jsx)("label",{htmlFor:"pickup",children:"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]})]}),"delivery"===r&&(0,Ce.jsxs)(Ce.Fragment,{children:[(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{children:"\u0413\u043e\u0440\u043e\u0434*"}),(0,Ce.jsx)(Fr,{type:"text",name:"city",value:d.city,onChange:y,placeholder:"\u041c\u043e\u0441\u043a\u0432\u0430",error:f.city}),f.city&&(0,Ce.jsx)("span",{style:{color:"#F44336",fontSize:"0.85rem"},children:f.city})]}),(0,Ce.jsxs)(Nr,{children:[(0,Ce.jsx)(Or,{children:"\u0410\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438*"}),(0,Ce.jsx)(Fr,{type:"text",name:"address",value:d.address,onChange:y,placeholder:"\u0443\u043b. \u041f\u0443\u0448\u043a\u0438\u043d\u0430, \u0434. 10, \u043a\u0432. 5",error:f.address}),f.address&&(0,Ce.jsx)("span",{style:{color:"#F44336",fontSize:"0.85rem"},children:f.address})]})]})]}),(0,Ce.jsxs)(bo,{children:[(0,Ce.jsxs)(vo,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,Ce.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,Ce.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0412\u0430\u0448 \u0437\u0430\u043a\u0430\u0437"]}),(0,Ce.jsx)(Eo,{children:e.map((e=>(0,Ce.jsxs)(_o,{children:[(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)(Po,{children:e.name}),(0,Ce.jsxs)(Lo,{children:["x",e.quantity]})]}),(0,Ce.jsxs)(zo,{children:["\u20bd",e.price*e.quantity]})]},e.id)))}),(0,Ce.jsxs)(wo,{children:[(0,Ce.jsx)(ko,{children:"\u041f\u043e\u0434\u044b\u0442\u043e\u0433"}),(0,Ce.jsxs)(So,{children:["\u20bd",m]})]}),(0,Ce.jsxs)(wo,{children:[(0,Ce.jsx)(ko,{children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430"}),(0,Ce.jsxs)(So,{children:["\u20bd",g]})]}),(0,Ce.jsxs)(wo,{children:[(0,Ce.jsx)(jo,{children:"\u0418\u0442\u043e\u0433\u043e"}),(0,Ce.jsxs)(Co,{children:["\u20bd",v]})]}),(0,Ce.jsxs)(To,{onClick:()=>{(()=>{const e={name:"",phone:"",address:"",city:""};let t=!0;return d.name.trim()||(e.name="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",t=!1),d.phone.trim()||(e.phone="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",t=!1),"delivery"===r&&(d.address.trim()||(e.address="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441 \u0434\u043e\u0441\u0442\u0430\u0432\u043a\u0438",t=!1),d.city.trim()||(e.city="\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0433\u043e\u0440\u043e\u0434",t=!1)),h(e),t})()&&(i({name:d.name,phone:d.phone,address:d.address,city:d.city}),n(),l("/order-success"))},children:[(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}),"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"]})]})]})})]})})},No=yr(Kr)`
  min-height: 70vh;
`,Oo=yr.div`
  margin-bottom: var(--spacing-xl);
`,Fo=yr(Ar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,Mo=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`,Bo=yr.div`
  width: 80px;
  height: 80px;
  background-color: var(--primary-color);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto var(--spacing-lg);
  
  svg {
    color: white;
    width: 40px;
    height: 40px;
  }
`,Io=yr.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  color: var(--text-color);
`,Do=yr.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 159, 13, 0.15);
  color: var(--primary-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-lg);
`,$o=yr.p`
  color: var(--text-secondary);
  font-size: 1rem;
  margin-bottom: var(--spacing-lg);
  line-height: 1.5;
`,Ao=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,Wo=yr.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`,Uo=yr.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ho=yr.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  width: 40%;
`,Vo=yr.span`
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
`,Ko=yr.div`
  margin-top: var(--spacing-md);
`,Qo=yr.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,Yo=yr.span`
  font-size: 0.95rem;
  color: var(--text-color);
`,qo=yr.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
`,Go=yr.span`
  font-weight: 600;
  color: var(--text-color);
`,Xo=yr.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,Zo=yr.span`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`,Jo=yr.span`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
`,ei=yr.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 600px) {
    flex-direction: column;
  }
`,ti=yr(Wr)`
  flex: 1;
  padding: var(--spacing-md);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`,ni=yr(Wr)`
  flex: 1;
  padding: var(--spacing-md);
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    background-color: rgba(255, 159, 13, 0.1);
    transform: translateY(-2px);
  }
`,ri=()=>{const{orderHistory:e}=Pe(),n=ee(),{showBackButton:r,hideBackButton:a,setBackButtonCallback:o}=la(),i=e.length>0?e[0]:null;(0,t.useEffect)((()=>(a(),i||n("/"),()=>{r()})),[a,i,n,r]);return i?(0,Ce.jsx)(No,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:(0,Ce.jsxs)(Oo,{children:[(0,Ce.jsx)(Fo,{children:(0,Ce.jsxs)("div",{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,Ce.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]}),"\u0417\u0430\u043a\u0430\u0437 \u043e\u0444\u043e\u0440\u043c\u043b\u0435\u043d"]})}),(0,Ce.jsxs)(Mo,{children:[(0,Ce.jsx)(Bo,{children:(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})})}),(0,Ce.jsxs)(Io,{children:["\u0417\u0430\u043a\u0430\u0437 \u2116",i.id]}),(0,Ce.jsx)(Do,{children:(e=>{switch(e){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}})(i.status)}),(0,Ce.jsxs)($o,{children:["\u0421\u043f\u0430\u0441\u0438\u0431\u043e \u0437\u0430 \u0437\u0430\u043a\u0430\u0437! \u041c\u044b \u0443\u0436\u0435 \u043d\u0430\u0447\u0430\u043b\u0438 \u0435\u0433\u043e \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0442\u044c.",(0,Ce.jsx)("br",{}),"\u0412\u044b \u043c\u043e\u0436\u0435\u0442\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0442\u044c \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u043a\u0430\u0437\u0430 \u0432 \u043b\u0438\u0447\u043d\u043e\u043c \u043a\u0430\u0431\u0438\u043d\u0435\u0442\u0435."]})]}),(0,Ce.jsxs)(Ao,{children:[(0,Ce.jsxs)(Wo,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,Ce.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,Ce.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,Ce.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,Ce.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,Ce.jsxs)(Uo,{children:[(0,Ce.jsx)(Ho,{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430:"}),(0,Ce.jsxs)(Vo,{children:["#",i.id]})]}),(0,Ce.jsxs)(Uo,{children:[(0,Ce.jsx)(Ho,{children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f:"}),(0,Ce.jsx)(Vo,{children:(e=>{const t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)})(i.date)})]}),(0,Ce.jsxs)(Uo,{children:[(0,Ce.jsx)(Ho,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f:"}),(0,Ce.jsx)(Vo,{children:"delivery"===i.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),(0,Ce.jsxs)(Wo,{style:{marginTop:"var(--spacing-lg)"},children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,Ce.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,Ce.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,Ce.jsx)(Ko,{children:i.items.map(((e,t)=>(0,Ce.jsxs)(Qo,{children:[(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)(Yo,{children:e.name}),(0,Ce.jsxs)(qo,{children:["x",e.quantity]})]}),(0,Ce.jsxs)(Go,{children:["\u20bd",e.price*e.quantity]})]},t)))}),(0,Ce.jsxs)(Xo,{children:[(0,Ce.jsx)(Zo,{children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,Ce.jsxs)(Jo,{children:["\u20bd",i.totalAmount]})]})]}),(0,Ce.jsxs)(ei,{children:[(0,Ce.jsxs)(ti,{onClick:()=>n("/"),children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"}),(0,Ce.jsx)("polyline",{points:"9 22 9 12 15 12 15 22"})]}),"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"]}),(0,Ce.jsxs)(ni,{onClick:()=>n("/profile"),children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("line",{x1:"8",y1:"6",x2:"21",y2:"6"}),(0,Ce.jsx)("line",{x1:"8",y1:"12",x2:"21",y2:"12"}),(0,Ce.jsx)("line",{x1:"8",y1:"18",x2:"21",y2:"18"}),(0,Ce.jsx)("line",{x1:"3",y1:"6",x2:"3.01",y2:"6"}),(0,Ce.jsx)("line",{x1:"3",y1:"12",x2:"3.01",y2:"12"}),(0,Ce.jsx)("line",{x1:"3",y1:"18",x2:"3.01",y2:"18"})]}),"\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]})]})]})})]})}):null},ai=yr(Kr)`
  min-height: 70vh;
`,oi=yr.div`
  margin-bottom: var(--spacing-xl);
`,ii=yr(Ar)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  
  svg {
    margin-right: var(--spacing-xs);
  }
`,li=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,si=yr.div`
  display: inline-block;
  padding: 8px 16px;
  background-color: rgba(255, 159, 13, 0.15);
  color: var(--primary-color);
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-md);
`,ui=yr.div`
  display: flex;
  justify-content: space-between;
  margin: var(--spacing-lg) 0;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 16px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.1);
    z-index: 1;
  }
`,ci=yr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 1;
  
  &:first-child {
    align-items: flex-start;
  }
  
  &:last-child {
    align-items: flex-end;
  }
`,di=yr.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background-color: ${e=>e.$completed?"var(--primary-color)":e.$active?"var(--primary-dark)":"var(--background-light)"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-xs);
  transition: all 0.3s ease;
  border: 2px solid ${e=>e.$completed||e.$active?"var(--primary-color)":"transparent"};
  
  svg {
    color: ${e=>e.$completed?"white":e.$active?"var(--primary-color)":"var(--text-secondary)"};
  }
`,pi=yr.span`
  font-size: 0.8rem;
  color: ${e=>e.$completed||e.$active?"var(--primary-color)":"var(--text-secondary)"};
  font-weight: ${e=>e.$completed||e.$active?"600":"400"};
  text-align: center;
  max-width: 100px;
  
  @media (max-width: 600px) {
    display: none;
  }
`,fi=yr.div`
  background-color: var(--card-bg);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`,hi=yr.h3`
  font-size: 1.2rem;
  margin: 0 0 var(--spacing-md) 0;
  color: var(--text-color);
  display: flex;
  align-items: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
`,gi=yr.div`
  display: flex;
  margin-bottom: var(--spacing-sm);
  
  &:last-child {
    margin-bottom: 0;
  }
`,mi=yr.span`
  font-size: 0.95rem;
  color: var(--text-secondary);
  width: 40%;
`,vi=yr.span`
  font-size: 0.95rem;
  color: var(--text-color);
  font-weight: 500;
`,yi=yr.div`
  margin-top: var(--spacing-md);
`,xi=yr.div`
  display: flex;
  justify-content: space-between;
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:last-child {
    border-bottom: none;
  }
`,bi=yr.span`
  font-size: 0.95rem;
  color: var(--text-color);
`,wi=yr.span`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-left: var(--spacing-xs);
`,ki=yr.span`
  font-weight: 600;
  color: var(--text-color);
`,Si=yr.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`,ji=yr.span`
  font-size: 1.1rem;
  color: var(--text-color);
  font-weight: 500;
`,Ci=yr.span`
  font-size: 1.2rem;
  color: var(--primary-color);
  font-weight: 600;
`,Ei=yr(Wr)`
  padding: var(--spacing-md);
  background-color: transparent;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: var(--spacing-sm);
  }
  
  &:hover {
    background-color: rgba(255, 159, 13, 0.1);
    transform: translateY(-2px);
  }
`,_i=()=>{const{orderHistory:e}=Pe(),n=ee(),{orderId:r}=function(){let{matches:e}=t.useContext(q),n=e[e.length-1];return n?n.params:{}}(),{showBackButton:a,hideBackButton:o,setBackButtonCallback:i}=la(),l=e.find((e=>e.id.toString()===r));(0,t.useEffect)((()=>(a(),i((()=>{n("/profile")})),()=>{o()})),[o,n,i,a]);const s=(e,t)=>e<=t,u=(e,t)=>e===t;if(!l)return(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:(0,Ce.jsxs)(Vr,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"48",height:"48",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,Ce.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,Ce.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,Ce.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,Ce.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),(0,Ce.jsx)("h3",{children:"\u0417\u0430\u043a\u0430\u0437 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"}),(0,Ce.jsx)("p",{children:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u044b\u0439 \u0437\u0430\u043a\u0430\u0437 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442 \u0438\u043b\u0438 \u0431\u044b\u043b \u0443\u0434\u0430\u043b\u0435\u043d."}),(0,Ce.jsx)(Wr,{onClick:()=>n("/profile"),children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"})]})})]});const c=(d=l.status,["pending","confirmed","preparing","ready","delivered"].indexOf(d));var d;return(0,Ce.jsx)(ai,{children:(0,Ce.jsxs)(wr,{children:[(0,Ce.jsx)(qr,{}),(0,Ce.jsx)(Gr,{}),(0,Ce.jsx)(_r,{children:(0,Ce.jsxs)(oi,{children:[(0,Ce.jsx)(ii,{children:(0,Ce.jsxs)("div",{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,Ce.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,Ce.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,Ce.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,Ce.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0417\u0430\u043a\u0430\u0437 \u2116",l.id]})}),(0,Ce.jsxs)(li,{children:[(0,Ce.jsx)(si,{children:(e=>{switch(e){case"pending":return"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f";case"confirmed":return"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d";case"preparing":return"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f";case"ready":return"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435";case"delivered":return"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d";default:return"\u0412 \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u043a\u0435"}})(l.status)}),(0,Ce.jsxs)(ui,{children:[(0,Ce.jsxs)(ci,{$active:u(0,c),$completed:s(0,c),children:[(0,Ce.jsx)(di,{$active:u(0,c),$completed:s(0,c),children:s(0,c)?(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("circle",{cx:"12",cy:"12",r:"10"}),(0,Ce.jsx)("polyline",{points:"12 6 12 12 16 14"})]})}),(0,Ce.jsx)(pi,{$active:u(0,c),$completed:s(0,c),children:"\u041e\u0436\u0438\u0434\u0430\u0435\u0442 \u043f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d\u0438\u044f"})]}),(0,Ce.jsxs)(ci,{$active:u(1,c),$completed:s(1,c),children:[(0,Ce.jsx)(di,{$active:u(1,c),$completed:s(1,c),children:s(1,c)?(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),(0,Ce.jsx)("polyline",{points:"22 4 12 14.01 9 11.01"})]})}),(0,Ce.jsx)(pi,{$active:u(1,c),$completed:s(1,c),children:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043d"})]}),(0,Ce.jsxs)(ci,{$active:u(2,c),$completed:s(2,c),children:[(0,Ce.jsx)(di,{$active:u(2,c),$completed:s(2,c),children:s(2,c)?(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("path",{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"})})}),(0,Ce.jsx)(pi,{$active:u(2,c),$completed:s(2,c),children:"\u0413\u043e\u0442\u043e\u0432\u0438\u0442\u0441\u044f"})]}),(0,Ce.jsxs)(ci,{$active:u(3,c),$completed:s(3,c),children:[(0,Ce.jsx)(di,{$active:u(3,c),$completed:s(3,c),children:s(3,c)?(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("polyline",{points:"20 12 20 22 4 22 4 12"}),(0,Ce.jsx)("rect",{x:"2",y:"7",width:"20",height:"5"}),(0,Ce.jsx)("line",{x1:"12",y1:"22",x2:"12",y2:"7"}),(0,Ce.jsx)("path",{d:"M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"}),(0,Ce.jsx)("path",{d:"M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"})]})}),(0,Ce.jsx)(pi,{$active:u(3,c),$completed:s(3,c),children:"\u0413\u043e\u0442\u043e\u0432 \u043a \u0432\u044b\u0434\u0430\u0447\u0435"})]}),(0,Ce.jsxs)(ci,{$active:u(4,c),$completed:s(4,c),children:[(0,Ce.jsx)(di,{$active:u(4,c),$completed:s(4,c),children:s(4,c)?(0,Ce.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2.5",strokeLinecap:"round",strokeLinejoin:"round",children:(0,Ce.jsx)("polyline",{points:"20 6 9 17 4 12"})}):(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"18",height:"18",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",ry:"2"}),(0,Ce.jsx)("line",{x1:"3",y1:"9",x2:"21",y2:"9"}),(0,Ce.jsx)("line",{x1:"9",y1:"21",x2:"9",y2:"9"})]})}),(0,Ce.jsx)(pi,{$active:u(4,c),$completed:s(4,c),children:"\u0414\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d"})]})]})]}),(0,Ce.jsxs)(fi,{children:[(0,Ce.jsxs)(hi,{children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"}),(0,Ce.jsx)("polyline",{points:"14 2 14 8 20 8"}),(0,Ce.jsx)("line",{x1:"16",y1:"13",x2:"8",y2:"13"}),(0,Ce.jsx)("line",{x1:"16",y1:"17",x2:"8",y2:"17"}),(0,Ce.jsx)("polyline",{points:"10 9 9 9 8 9"})]}),"\u0414\u0435\u0442\u0430\u043b\u0438 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,Ce.jsxs)(gi,{children:[(0,Ce.jsx)(mi,{children:"\u041d\u043e\u043c\u0435\u0440 \u0437\u0430\u043a\u0430\u0437\u0430:"}),(0,Ce.jsxs)(vi,{children:["#",l.id]})]}),(0,Ce.jsxs)(gi,{children:[(0,Ce.jsx)(mi,{children:"\u0414\u0430\u0442\u0430 \u0438 \u0432\u0440\u0435\u043c\u044f:"}),(0,Ce.jsx)(vi,{children:(e=>{const t=new Date(e);return new Intl.DateTimeFormat("ru-RU",{day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"}).format(t)})(l.date)})]}),(0,Ce.jsxs)(gi,{children:[(0,Ce.jsx)(mi,{children:"\u0421\u043f\u043e\u0441\u043e\u0431 \u043f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u044f:"}),(0,Ce.jsx)(vi,{children:"delivery"===l.deliveryMethod?"\u0414\u043e\u0441\u0442\u0430\u0432\u043a\u0430":"\u0421\u0430\u043c\u043e\u0432\u044b\u0432\u043e\u0437"})]}),(0,Ce.jsxs)(hi,{style:{marginTop:"var(--spacing-lg)"},children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("path",{d:"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"}),(0,Ce.jsx)("line",{x1:"3",y1:"6",x2:"21",y2:"6"}),(0,Ce.jsx)("path",{d:"M16 10a4 4 0 0 1-8 0"})]}),"\u0421\u043e\u0441\u0442\u0430\u0432 \u0437\u0430\u043a\u0430\u0437\u0430"]}),(0,Ce.jsx)(yi,{children:l.items.map(((e,t)=>(0,Ce.jsxs)(xi,{children:[(0,Ce.jsxs)("div",{children:[(0,Ce.jsx)(bi,{children:e.name}),(0,Ce.jsxs)(wi,{children:["x",e.quantity]})]}),(0,Ce.jsxs)(ki,{children:["\u20bd",e.price*e.quantity]})]},t)))}),(0,Ce.jsxs)(Si,{children:[(0,Ce.jsx)(ji,{children:"\u0418\u0442\u043e\u0433\u043e:"}),(0,Ce.jsxs)(Ci,{children:["\u20bd",l.totalAmount]})]})]}),(0,Ce.jsxs)(Ei,{onClick:()=>n("/profile"),children:[(0,Ce.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,Ce.jsx)("line",{x1:"19",y1:"12",x2:"5",y2:"12"}),(0,Ce.jsx)("polyline",{points:"12 19 5 12 12 5"})]}),"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043a \u0438\u0441\u0442\u043e\u0440\u0438\u0438 \u0437\u0430\u043a\u0430\u0437\u043e\u0432"]})]})})]})})};const Pi=function(){return(0,Ce.jsxs)(_e,{children:[(0,Ce.jsx)(br,{}),(0,Ce.jsx)(xe,{children:(0,Ce.jsx)("div",{className:"App",children:(0,Ce.jsxs)(me,{children:[(0,Ce.jsx)(he,{path:"/",element:(0,Ce.jsx)(ka,{})}),(0,Ce.jsx)(he,{path:"/city-selection",element:(0,Ce.jsx)(Sa,{})}),(0,Ce.jsx)(he,{path:"/restaurant-selection",element:(0,Ce.jsx)(Oa,{})}),(0,Ce.jsx)(he,{path:"/profile",element:(0,Ce.jsx)(Wa,{})}),(0,Ce.jsx)(he,{path:"/cart",element:(0,Ce.jsx)(po,{})}),(0,Ce.jsx)(he,{path:"/checkout",element:(0,Ce.jsx)(Ro,{})}),(0,Ce.jsx)(he,{path:"/order-success",element:(0,Ce.jsx)(ri,{})}),(0,Ce.jsx)(he,{path:"/orders/:orderId",element:(0,Ce.jsx)(_i,{})})]})})})]})},Li=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:o,getTTFB:i}=t;n(e),r(e),a(e),o(e),i(e)}))};a.createRoot(document.getElementById("root")).render((0,Ce.jsx)(t.StrictMode,{children:(0,Ce.jsx)(Pi,{})})),Li()})()})();
//# sourceMappingURL=main.88795fa0.js.map