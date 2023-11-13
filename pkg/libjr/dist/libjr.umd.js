(function(E,v){typeof exports=="object"&&typeof module<"u"?v(exports,require("react"),require("styled-components"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","styled-components","react-dom"],v):(E=typeof globalThis<"u"?globalThis:E||self,v(E.libjr={},E.React,E.styled,E.ReactDOM))})(this,function(E,v,s,Qe){"use strict";var ie={exports:{}},V={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function qe(){if(xe)return V;xe=1;var r=v,i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,m=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function C(x,d,h){var R,y={},w=null,b=null;h!==void 0&&(w=""+h),d.key!==void 0&&(w=""+d.key),d.ref!==void 0&&(b=d.ref);for(R in d)f.call(d,R)&&!j.hasOwnProperty(R)&&(y[R]=d[R]);if(x&&x.defaultProps)for(R in d=x.defaultProps,d)y[R]===void 0&&(y[R]=d[R]);return{$$typeof:i,type:x,key:w,ref:b,props:y,_owner:m.current}}return V.Fragment=l,V.jsx=C,V.jsxs=C,V}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function er(){return be||(be=1,process.env.NODE_ENV!=="production"&&function(){var r=v,i=Symbol.for("react.element"),l=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),x=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),R=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),w=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen"),z=Symbol.iterator,I="@@iterator";function ee(e){if(e===null||typeof e!="object")return null;var t=z&&e[z]||e[I];return typeof t=="function"?t:null}var W=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];Vr("error",e,n)}}function Vr(e,t,n){{var a=W.ReactDebugCurrentFrame,p=a.getStackAddendum();p!==""&&(t+="%s",n=n.concat([p]));var g=n.map(function(u){return String(u)});g.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,g)}}var Nr=!1,Hr=!1,Ur=!1,Kr=!1,Gr=!1,_e;_e=Symbol.for("react.module.reference");function Jr(e){return!!(typeof e=="string"||typeof e=="function"||e===f||e===j||Gr||e===m||e===h||e===R||Kr||e===b||Nr||Hr||Ur||typeof e=="object"&&e!==null&&(e.$$typeof===w||e.$$typeof===y||e.$$typeof===C||e.$$typeof===x||e.$$typeof===d||e.$$typeof===_e||e.getModuleId!==void 0))}function Xr(e,t,n){var a=e.displayName;if(a)return a;var p=t.displayName||t.name||"";return p!==""?n+"("+p+")":n}function Te(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case f:return"Fragment";case l:return"Portal";case j:return"Profiler";case m:return"StrictMode";case h:return"Suspense";case R:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case x:var t=e;return Te(t)+".Consumer";case C:var n=e;return Te(n._context)+".Provider";case d:return Xr(e,e.render,"ForwardRef");case y:var a=e.displayName||null;return a!==null?a:F(e.type)||"Memo";case w:{var p=e,g=p._payload,u=p._init;try{return F(u(g))}catch{return null}}}return null}var A=Object.assign,U=0,Se,Oe,Pe,Fe,De,ze,Be;function Ae(){}Ae.__reactDisabledLog=!0;function Zr(){{if(U===0){Se=console.log,Oe=console.info,Pe=console.warn,Fe=console.error,De=console.group,ze=console.groupCollapsed,Be=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Ae,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}U++}}function Qr(){{if(U--,U===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:A({},e,{value:Se}),info:A({},e,{value:Oe}),warn:A({},e,{value:Pe}),error:A({},e,{value:Fe}),group:A({},e,{value:De}),groupCollapsed:A({},e,{value:ze}),groupEnd:A({},e,{value:Be})})}U<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ue=W.ReactCurrentDispatcher,fe;function re(e,t,n){{if(fe===void 0)try{throw Error()}catch(p){var a=p.stack.trim().match(/\n( *(at )?)/);fe=a&&a[1]||""}return`
`+fe+e}}var de=!1,te;{var qr=typeof WeakMap=="function"?WeakMap:Map;te=new qr}function Me(e,t){if(!e||de)return"";{var n=te.get(e);if(n!==void 0)return n}var a;de=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var g;g=ue.current,ue.current=null,Zr();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(D){a=D}Reflect.construct(e,[],u)}else{try{u.call()}catch(D){a=D}e.call(u.prototype)}}else{try{throw Error()}catch(D){a=D}e()}}catch(D){if(D&&a&&typeof D.stack=="string"){for(var c=D.stack.split(`
`),T=a.stack.split(`
`),$=c.length-1,k=T.length-1;$>=1&&k>=0&&c[$]!==T[k];)k--;for(;$>=1&&k>=0;$--,k--)if(c[$]!==T[k]){if($!==1||k!==1)do if($--,k--,k<0||c[$]!==T[k]){var O=`
`+c[$].replace(" at new "," at ");return e.displayName&&O.includes("<anonymous>")&&(O=O.replace("<anonymous>",e.displayName)),typeof e=="function"&&te.set(e,O),O}while($>=1&&k>=0);break}}}finally{de=!1,ue.current=g,Qr(),Error.prepareStackTrace=p}var Y=e?e.displayName||e.name:"",Ze=Y?re(Y):"";return typeof e=="function"&&te.set(e,Ze),Ze}function et(e,t,n){return Me(e,!1)}function rt(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function ne(e,t,n){if(e==null)return"";if(typeof e=="function")return Me(e,rt(e));if(typeof e=="string")return re(e);switch(e){case h:return re("Suspense");case R:return re("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return et(e.render);case y:return ne(e.type,t,n);case w:{var a=e,p=a._payload,g=a._init;try{return ne(g(p),t,n)}catch{}}}return""}var oe=Object.prototype.hasOwnProperty,Ie={},We=W.ReactDebugCurrentFrame;function ae(e){if(e){var t=e._owner,n=ne(e.type,e._source,t?t.type:null);We.setExtraStackFrame(n)}else We.setExtraStackFrame(null)}function tt(e,t,n,a,p){{var g=Function.call.bind(oe);for(var u in e)if(g(e,u)){var c=void 0;try{if(typeof e[u]!="function"){var T=Error((a||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}c=e[u](t,u,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch($){c=$}c&&!(c instanceof Error)&&(ae(p),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,u,typeof c),ae(null)),c instanceof Error&&!(c.message in Ie)&&(Ie[c.message]=!0,ae(p),_("Failed %s type: %s",n,c.message),ae(null))}}}var nt=Array.isArray;function pe(e){return nt(e)}function ot(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function at(e){try{return Le(e),!1}catch{return!0}}function Le(e){return""+e}function Ye(e){if(at(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",ot(e)),Le(e)}var K=W.ReactCurrentOwner,it={key:!0,ref:!0,__self:!0,__source:!0},Ve,Ne,ge;ge={};function st(e){if(oe.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function ct(e){if(oe.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function lt(e,t){if(typeof e.ref=="string"&&K.current&&t&&K.current.stateNode!==t){var n=F(K.current.type);ge[n]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(K.current.type),e.ref),ge[n]=!0)}}function ut(e,t){{var n=function(){Ve||(Ve=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function ft(e,t){{var n=function(){Ne||(Ne=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var dt=function(e,t,n,a,p,g,u){var c={$$typeof:i,type:e,key:t,ref:n,props:u,_owner:g};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function pt(e,t,n,a,p){{var g,u={},c=null,T=null;n!==void 0&&(Ye(n),c=""+n),ct(t)&&(Ye(t.key),c=""+t.key),st(t)&&(T=t.ref,lt(t,p));for(g in t)oe.call(t,g)&&!it.hasOwnProperty(g)&&(u[g]=t[g]);if(e&&e.defaultProps){var $=e.defaultProps;for(g in $)u[g]===void 0&&(u[g]=$[g])}if(c||T){var k=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&ut(u,k),T&&ft(u,k)}return dt(e,c,T,p,a,K.current,u)}}var me=W.ReactCurrentOwner,He=W.ReactDebugCurrentFrame;function L(e){if(e){var t=e._owner,n=ne(e.type,e._source,t?t.type:null);He.setExtraStackFrame(n)}else He.setExtraStackFrame(null)}var he;he=!1;function ve(e){return typeof e=="object"&&e!==null&&e.$$typeof===i}function Ue(){{if(me.current){var e=F(me.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function gt(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}}var Ke={};function mt(e){{var t=Ue();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function Ge(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=mt(t);if(Ke[n])return;Ke[n]=!0;var a="";e&&e._owner&&e._owner!==me.current&&(a=" It was passed a child from "+F(e._owner.type)+"."),L(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),L(null)}}function Je(e,t){{if(typeof e!="object")return;if(pe(e))for(var n=0;n<e.length;n++){var a=e[n];ve(a)&&Ge(a,t)}else if(ve(e))e._store&&(e._store.validated=!0);else if(e){var p=ee(e);if(typeof p=="function"&&p!==e.entries)for(var g=p.call(e),u;!(u=g.next()).done;)ve(u.value)&&Ge(u.value,t)}}}function ht(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===d||t.$$typeof===y))n=t.propTypes;else return;if(n){var a=F(t);tt(n,e.props,"prop",a,e)}else if(t.PropTypes!==void 0&&!he){he=!0;var p=F(t);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",p||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function vt(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var a=t[n];if(a!=="children"&&a!=="key"){L(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),L(null);break}}e.ref!==null&&(L(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),L(null))}}function Xe(e,t,n,a,p,g){{var u=Jr(e);if(!u){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=gt(p);T?c+=T:c+=Ue();var $;e===null?$="null":pe(e)?$="array":e!==void 0&&e.$$typeof===i?($="<"+(F(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):$=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",$,c)}var k=pt(e,t,n,p,g);if(k==null)return k;if(u){var O=t.children;if(O!==void 0)if(a)if(pe(O)){for(var Y=0;Y<O.length;Y++)Je(O[Y],e);Object.freeze&&Object.freeze(O)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Je(O,e)}return e===f?vt(k):ht(k),k}}function xt(e,t,n){return Xe(e,t,n,!0)}function bt(e,t,n){return Xe(e,t,n,!1)}var $t=bt,yt=xt;N.Fragment=f,N.jsx=$t,N.jsxs=yt}()),N}process.env.NODE_ENV==="production"?ie.exports=qe():ie.exports=er();var o=ie.exports;const $e=r=>r=="circle",ye=r=>r=="rounded",rr={container:s.button`

    display: flex;

    justify-content: center;
    align-items: center;

    cursor: pointer;

    margin: 0px;
    padding: 8px;
    
    white-space: nowrap; 
    height: fit-content;
    width: ${r=>r.$sz};

    color: ${r=>r.$makup.item.hout.fg};
    background-color: ${r=>r.$makup.item.hout.bg};

    border-radius: 0px;
    
    ${r=>$e(r.$makup.kind)&&s.css`
        border-radius: calc( ${r.$sz}/2);
        height: ${r.$sz};
    `}

    ${r=>ye(r.$makup.kind)&&s.css`
        border-radius: calc( ${r.$sz}/3);
    `}

    &:hover {
      
      color: ${r=>r.$makup.item.hover.fg};
      background-color: ${r=>r.$makup.item.hover.bg};

      ${r=>$e(r.$makup.kind)&&s.css`
        border-radius: calc( ${r.$sz}/2);
      `}
    
      ${r=>ye(r.$makup.kind)&&s.css`
        border-radius: calc( ${r.$sz}/3);
      `}

    }

`},tr=({sz:r,makup:i,onClick:l,children:f})=>{const m=()=>{l&&l()};return o.jsx(rr.container,{$sz:r,$makup:i,onClick:()=>m(),children:f})},ke=(r,i,l=1)=>({fg:r,bg:i,alpha:l}),Ee=r=>{const i=ke(r.fg,r.bg,.8),l=ke(r.fg,r.hg,.5);return{hout:i,hover:l}},nr=(r={fg:"#CBD3D4",bg:"#5C5853",hg:"#B4B2B0"},i="square")=>({item:Ee(r),kind:i}),or="36px",ar="22px",B=r=>r?ar:or,M="13px",ir=s.div`
  display: flex;
  min-height: ${r=>B(r.$small)};
  max-height: ${r=>B(r.$small)};
  align-items: center;
  padding-left: ${M};
  justify-content: flex-start;
  
  &:hover {
    background: #282831;
  }
`,sr=s.div`
  
  position: absolute;

  width: calc( ${r=>r.$sz} + ${M} );
  white-space: nowrap;

  background: #454550;
  list-style: none;
  white-space: nowrap;
  border-top-left-radius: ${({$dropUp:r})=>r?"10px":"0px"};
  border-top-right-radius: ${({$dropUp:r})=>r?"10px":"0px"};
  border-bottom-left-radius: ${({$dropUp:r})=>r?"0px":"10px"};
  border-bottom-right-radius: ${({$dropUp:r})=>r?"0px":"10px"};

  & > div:first-child {
    &:hover {
      border-top-left-radius: ${({$dropUp:r})=>r?"10px":"0px"};
      border-top-right-radius: ${({$dropUp:r})=>r?"10px":"0px"};
    }
  }

  & > div:last-child {
    &:hover {
      border-bottom-left-radius: ${({$dropUp:r})=>r?"0px":"10px"};
      border-bottom-right-radius: ${({$dropUp:r})=>r?"0px":"10px"};
    }
  }

  top: ${({$dropUp:r,$small:i})=>{const l=B(i);return r?"calc(("+l+" * 2) * -1)":l}};
  left: 0;
`,cr=s.div`
  display: flex;
  align-items: center;
  padding-left: ${M};
  justify-content: flex-start;
  width: calc( ${r=>r.$sz} + ${M} );
  white-space: nowrap;
`,lr=s(cr)`
  min-height: ${r=>B(r.$small)};
  max-height: ${r=>B(r.$small)};
  
  & > div {
    width: 100%;
    height: 100%;
    padding-left: ${M};
  }

  &:hover {
    background-color: ${r=>r.open?"":"#50505B"};
    border-radius: ${r=>r.open?"":"10px"};
  }

  &::after {
    content: "";
    top: ${r=>r.$small?r.open?"10px":"6px":r.open?"15px":"8px"};
    right: ${r=>r.$small?"10px":"25px"};
    border: solid #fff;
    padding: ${r=>r.$small?"3px":"5px"};
    display: inline-block;
    position: absolute;
    border-width: 0 2px 2px 0;

    transform: rotate(${r=>r.open?"225deg":"45deg"});
    -webkit-transform: rotate(${r=>r.open?"225deg":"45deg"});

    transition: 0.5s;
  }
`,ur=(r,i)=>r?`
      border-top-left-radius: ${i?"0px":"10px"};
      border-top-right-radius: ${i?"0px":"10px"};
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    `:`
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      border-bottom-left-radius: ${i?"0px":"10px"};
      border-bottom-right-radius: ${i?"0px":"10px"};
  `,fr=s.div`
  cursor: pointer;
  width: calc( ${r=>r.$sz} + ${M} );
  color: #99999f;
  z-index: 1;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  position: relative;
  min-width: ${r=>r.$small?"60px":"80px"};
  min-height: ${r=>B(r.$small)};
  max-height: ${r=>B(r.$small)};
  background: #454550;

  ${r=>ur(r.$dropUp,r.open)}

  /* border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  border-bottom-left-radius: ${r=>r.open?"0px":"10px"};
  border-bottom-right-radius: ${r=>r.open?"0px":"10px"}; */
`,dr=({items:r,onSelect:i,initialValue:l,sz:f="64px",small:m=!1,dropUp:j=!1})=>{const C=v.useRef(null),[x,d]=v.useState(!1),[h,R]=v.useState(l),y=b=>{C.current.contains(b.target)||d(!1)},w=b=>{d(!1),R(b),i&&i(b)};return v.useEffect(()=>(document.addEventListener("mousedown",y),()=>{document.removeEventListener("mousedown",y)}),[]),o.jsxs(fr,{ref:C,open:x,$small:m,$dropUp:j,$sz:f,children:[o.jsx(lr,{open:x,$small:m,$sz:f,onClick:()=>d(!x),children:h}),o.jsx(sr,{$dropUp:j,$small:m,$sz:f,children:x&&r.filter(b=>b!==h).map((b,z,I)=>o.jsx(ir,{$small:m,$last:z===I.length-1,$dropUp:j,onClick:()=>w(b),children:b},`select-item-${z}`))})]})},pr=s.div`
    display: flex;

    flex-direction: ${r=>r.$dir=="col"?"row":"column"};

    height: 100%;
    width: 100%;

    margin: 0px;
    padding: 0px;
    
`,gr=s.div`
    display: flex;
    
    width: ${r=>r.$sz};

    height: 100%;
`,mr=s.div`
    display: flex;
    
    width: 100%;
    
    height: ${r=>r.$sz};
`,H={container:pr,col:gr,row:mr},hr=({sz:r,dir:i,one:l,two:f})=>o.jsxs(H.container,{$dir:i,children:[i=="col"&&o.jsxs(o.Fragment,{children:[o.jsx(H.col,{$sz:r,$bg:"#454545",children:l}),o.jsx(H.col,{$sz:`calc(100% - ${r})`,$bg:"#0A9729",children:f})]}),i=="row"&&o.jsxs(o.Fragment,{children:[o.jsx(H.row,{$sz:r,$bg:"#454545",children:l}),o.jsx(H.row,{$sz:`calc(100% - ${r})`,$bg:"#0A9729",children:f})]})]}),G=r=>r=="vertical",J=r=>r=="horizontal",X="16px",Z="4px",se="8px",vr=s.div`
    
    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: ${r=>r.$makup.bg};
    color: ${r=>r.$makup.fg};
    opacity: ${r=>r.$makup.alpha};
    
    user-select: none;

    padding: 0px;
    margin: 0px;

    ${r=>G(r.$align)&&s.css`
        flex-direction: column;
        width: ${r.$makup.sz};
        height: 100%;
    `}

    ${r=>J(r.$align)&&s.css`
        flex-direction: row;
        width: 100%;
        height: ${r.$makup.sz};
    `}    

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none;   /* Safari */
    -khtml-user-select: none;   /* Konqueror HTML */
    -moz-user-select: none;   /* Old versions of Firefox */
    -ms-user-select: none;   /* Internet Explorer/Edge */
    user-select: none;   /* Non-prefixed version supported by Chrome, Edge, Opera and Firefox */

`,xr=s.div`
    display: flex;
 
    justify-content: flex-start;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${se};

    ${r=>G(r.$align)&&s.css`
        flex-direction: column;
        margin-top: ${X};
    `}

    ${r=>J(r.$align)&&s.css`
        flex-direction: row;
        margin-left: ${X};
    `}   
    
`,br=s.div`
    display: flex;

    justify-content: center;
    align-items: center;
    
    width: 100%; 
    height: 100%; 
    
    margin: 0px;
    gap: ${se};

    ${r=>G(r.$align)&&s.css`
        flex-direction: column;
        margin-top: ${Z};
        margin-bottom: ${Z};
    `}

    ${r=>J(r.$align)&&s.css`
        flex-direction: row;
        margin-left: ${Z};
        margin-right: ${Z};
    `}   

`,$r=s.div`
    display: flex;
    
    justify-content: flex-end;
    align-items: center;
    
    margin: 0px;
    gap: ${se};

    width: 100%; 
    height: 100%; 

    ${r=>G(r.$align)&&s.css`
        flex-direction: column;
        margin-bottom: ${X};
    `}

    ${r=>J(r.$align)&&s.css`
        flex-direction: row;
        margin-right: ${X};
    `}   

`,Q={container:vr,head:xr,midst:br,tail:$r},yr=({align:r,makup:i,head:l,midst:f,tail:m})=>{const j=()=>o.jsx(o.Fragment,{children:" "}),C=()=>l||o.jsx(j,{}),x=()=>f||o.jsx(j,{}),d=()=>m||o.jsx(j,{});return o.jsxs(Q.container,{$align:r,$makup:i,children:[o.jsx(Q.head,{$align:r,children:o.jsx(C,{})}),o.jsx(Q.midst,{$align:r,children:o.jsx(x,{})}),o.jsx(Q.tail,{$align:r,children:o.jsx(d,{})})]})},kr=()=>{const[r,i]=v.useState(!1);return{open:r,toggle:()=>i(!r)}},Re=(r="portal")=>{const[i,l]=v.useState(null);return v.useEffect(()=>{let f=document.getElementById(r),m=!1;return f||(m=!0,f=Er(r)),l(f),()=>{m&&f.parentNode&&f.parentNode.removeChild(f)}},[r]),i};function Er(r){const i=document.createElement("div");return i.setAttribute("id",r),document.body.appendChild(i),i}const ce="#1C1C1C",q="#F2F2F2",we="#2F2F2F",Rr=s.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;    
`,wr=s.div`
	position: fixed;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	z-index: 700;
	width: inherit;
	outline: 0;
`,Cr=s.div`
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(32, 32, 32, 0.3);
	z-index: 500;
`,jr=s.div`
	z-index: 100;
	color: ${q};
    background-color: ${ce};
	position: relative;
	margin: auto;
	border-radius: 8px;
    min-width: 16rem;
`,_r=s.div`
	
	display: flex;

	justify-content: flex-start;
	align-items: center;

	padding: 0.3rem;
	color: ${q};
	background-color: ${we};

	border-radius: 8px 8px 0 0;

    overflow: hidden;
`,Tr=s.div`
    display: flex;
    flex: 1;
    justify-content: center;
`,Sr=s.button`

	display: flex;
    justify-content: center;

    font-size: 0.8rem;
    background: none;

    color: ${q};
    background-color: ${ce};

    &:hover {
        cursor: pointer;
    }

	width: 1.6rem;

    border: none;
    border-style: solid ;
    border-width: 1px;
    border-color: ${we};
    border-radius: 0.8rem;

    margin: 0px;
	padding: 4px;
`,Or=s.div`
	display: flex;
    flex: 1;
        
    flex-direction: column ;

    justify-content: flex-start;
    align-items: center;
    
    color: ${q};
    background-color: ${ce};
    
    overflow-x: hidden;
    overflow-y: auto;

    padding-left: 10px;
    padding-right: 10px;
    padding-top: 5px;
    padding-bottom: 5px;    

	max-height: 30rem;
`,P={container:Rr,wrapper:wr,backdrop:Cr,styledmodal:jr,header:_r,title:Tr,closebtn:Sr,content:Or},Pr=({open:r,title:i,hide:l,children:f,focusitems:m=[],freeze:j=!0})=>{const C=Re("modal"),x=v.useRef(null),d=v.useRef([]),h=v.useRef(-1);v.useEffect(()=>{h.current=m.length>0?0:-1,d.current=[],m.forEach(y=>{const w=document.getElementById(y);w&&d.current.push(w)}),h.current>=0&&d.current.length>0&&d.current[h.current].focus()},[m]),v.useEffect(()=>{const y=x.current,w=b=>{const z=m.length,I=h.current,ee=d.current;if(b.key==="Tab"){if(!b.shiftKey)return I+1===z?h.current=0:h.current+=1,ee[h.current].focus(),b.preventDefault();if(b.shiftKey)return I-1<0?h.current=z-1:h.current-=1,ee[h.current].focus(),b.preventDefault()}b.key==="Escape"&&l()};if(y)return h.current>=0&&d.current.length>0&&d.current[h.current].focus(),y.addEventListener("keydown",w),()=>{y.removeEventListener("keydown",w)}},[m.length,l,r]);const R=()=>o.jsxs(P.container,{role:"dialog","aria-modal":"true",ref:x,children:[j?o.jsx(P.backdrop,{}):o.jsx(P.backdrop,{onClick:l}),o.jsx(P.wrapper,{children:o.jsxs(P.styledmodal,{children:[o.jsxs(P.header,{children:[o.jsx(P.title,{children:i}),o.jsx(P.closebtn,{onClick:l,children:"✕"})]}),o.jsx(P.content,{children:f})]})})]});return r&&C?Qe.createPortal(o.jsx(R,{}),C):o.jsx(o.Fragment,{})},Fr="#2B2929",Ce="#B3B7B4",Dr=s.div`
	display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  margin: 0.5rem;
  column-gap: 1rem;
`,zr=s.div`
	display: flex;
  flex-direction: row;
  column-gap: 1rem;
`,Br=s.div`
	font-size: 0.9rem;
	margin-bottom: 10px;
	text-align: center;
`,je=s.button`
  display: flex;
	margin-top: 10px;
  cursor: pointer;
  font-weight: 500;
  padding: 11px 28px;
  border-radius: 12px;
  font-size: 0.8rem;
  border: none;
  color: ${Fr};
  background-color: ${Ce};
  transition: all 0.25s ease;

  &:hover {
    box-shadow: 0 10px 20px -10px rgba(255, 62, 78, 0.6);
    transform: translateY(-5px);
    background-color: ${Ce};
  }
`,Ar=je,Mr=({onCancel:r,onConfirm:i,message:l})=>o.jsxs(Dr,{children:[l&&o.jsx(Br,{children:l}),o.jsxs(zr,{children:[o.jsx(je,{onClick:i,children:"✔️"}),o.jsx(Ar,{onClick:r,children:"🗙"})]})]}),S={fg:"#D3D0CF",bg:"#C7C3C3",focusColor:"#24DD34",placeColor:"#0B550B",padV:"0.2rem",padH:"0.3rem",fontsz:"0.8rem",h:"2rem"},Ir=s.div`
    
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    color: ${r=>r.makup?r.makup.fg:S.fg};
    background-color: transparent;
    
    width: calc(100% - 4px);
    min-height: ${r=>r.makup?r.makup.h:S.h};

    margin-left: 2px;
    margin-right: 2px;
    margin-top: 2px;
    margin-bottom: 2px;
    
    font-size: ${r=>r.makup?r.makup.fontsz:S.fontsz};
    font-weight: lighter;
`,Wr=s.label`  
    color: ${r=>r.makup?r.makup.fg:S.fg};  
    padding-left: ${r=>r.makup?r.makup.padH:S.padH};
`,Lr=s.input`

    color: ${r=>r.makup?r.makup.fg:S.placeColor};
    background-color: ${r=>r.makup?r.makup.bg:S.bg};

    box-sizing: border-box ;
    border-style: dotted;
    border-width: 1px;
    border-color: ${r=>r.makup?r.makup.fg:S.fg};
    border-radius: 8px;
    width: 100%;

    outline: none;

    padding-top: ${r=>r.makup?r.makup.padV:S.padV};
    padding-bottom: ${r=>r.makup?r.makup.padV:S.padV};
    padding-left: ${r=>r.makup?r.makup.padH:S.padH};
    padding-right: ${r=>r.makup?r.makup.padH:S.padH};

    &:focus {
        border: 1px dotted ${r=>r.makup?r.makup.focusColor:S.focusColor};
    }

    &::placeholder{
        color: ${r=>r.makup?r.makup.placeColor:S.placeColor};
        font-weight: lighter;
    }
`,le={root:Ir,label:Wr,input:Lr},Yr=({label:r,name:i,placehorlder:l,makup:f,handleChange:m,...j})=>{const C=v.useRef(null),x=v.useRef(),d=w=>{x.current=w.target.value,m&&m(w.target.value)},h=()=>{},R=()=>{C.current&&C.current.focus()},y=()=>{};return v.useEffect(()=>{x.current=""},[]),o.jsxs(le.root,{makup:f,children:[o.jsx(le.label,{makup:f,htmlFor:i,onClick:()=>R(),children:r}),o.jsx(le.input,{ref:C,type:"text",id:i,value:x.current,makup:f,placeholder:l,onChange:d,onFocus:h,onBlur:y,autoComplete:"off",...j},i)]})};E.Buttonice=tr,E.Dropdown=dr,E.Modal=Pr,E.ModalReply=Mr,E.SplitBoard=hr,E.TextEdit=Yr,E.Toolbar=yr,E.createButtonColor=Ee,E.createButtonMakup=nr,E.useModal=kr,E.usePortal=Re,Object.defineProperty(E,Symbol.toStringTag,{value:"Module"})});
