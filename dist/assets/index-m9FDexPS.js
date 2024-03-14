(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function e(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=e(o);fetch(o.href,a)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis,q=P.ShadowRoot&&(P.ShadyCSS===void 0||P.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Y=Symbol(),F=new WeakMap;let ot=class{constructor(t,e,r){if(this._$cssResult$=!0,r!==Y)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(q&&t===void 0){const r=e!==void 0&&e.length===1;r&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&F.set(e,t))}return t}toString(){return this.cssText}};const ct=i=>new ot(typeof i=="string"?i:i+"",void 0,Y),N=(i,...t)=>{const e=i.length===1?i[0]:t.reduce((r,o,a)=>r+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+i[a+1],i[0]);return new ot(e,i,Y)},gt=(i,t)=>{if(q)i.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const r=document.createElement("style"),o=P.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=e.cssText,i.appendChild(r)}},X=q?i=>i:i=>i instanceof CSSStyleSheet?(t=>{let e="";for(const r of t.cssRules)e+=r.cssText;return ct(e)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:pt,defineProperty:mt,getOwnPropertyDescriptor:ht,getOwnPropertyNames:ut,getOwnPropertySymbols:bt,getPrototypeOf:wt}=Object,v=globalThis,V=v.trustedTypes,ft=V?V.emptyScript:"",B=v.reactiveElementPolyfillSupport,z=(i,t)=>i,D={toAttribute(i,t){switch(t){case Boolean:i=i?ft:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,t){let e=i;switch(t){case Boolean:e=i!==null;break;case Number:e=i===null?null:Number(i);break;case Object:case Array:try{e=JSON.parse(i)}catch{e=null}}return e}},it=(i,t)=>!pt(i,t),W={attribute:!0,type:String,converter:D,reflect:!1,hasChanged:it};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);class $ extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=W){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,e);o!==void 0&&mt(this.prototype,t,o)}}static getPropertyDescriptor(t,e,r){const{get:o,set:a}=ht(this.prototype,t)??{get(){return this[e]},set(s){this[e]=s}};return{get(){return o==null?void 0:o.call(this)},set(s){const c=o==null?void 0:o.call(this);a.call(this,s),this.requestUpdate(t,c,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??W}static _$Ei(){if(this.hasOwnProperty(z("elementProperties")))return;const t=wt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(z("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(z("properties"))){const e=this.properties,r=[...ut(e),...bt(e)];for(const o of r)this.createProperty(o,e[o])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[r,o]of e)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[e,r]of this.elementProperties){const o=this._$Eu(e,r);o!==void 0&&this._$Eh.set(o,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)e.unshift(X(o))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const r=e.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$Eg=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$ES(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$E_??(this._$E_=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$E_)==null||e.delete(t)}_$ES(){const t=new Map,e=this.constructor.elementProperties;for(const r of e.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return gt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostConnected)==null?void 0:r.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$E_)==null||t.forEach(e=>{var r;return(r=e.hostDisconnected)==null?void 0:r.call(e)})}attributeChangedCallback(t,e,r){this._$AK(t,r)}_$EO(t,e){var a;const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const s=(((a=r.converter)==null?void 0:a.toAttribute)!==void 0?r.converter:D).toAttribute(e,r.type);this._$Em=t,s==null?this.removeAttribute(o):this.setAttribute(o,s),this._$Em=null}}_$AK(t,e){var a;const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const s=r.getPropertyOptions(o),c=typeof s.converter=="function"?{fromAttribute:s.converter}:((a=s.converter)==null?void 0:a.fromAttribute)!==void 0?s.converter:D;this._$Em=o,this[o]=c.fromAttribute(e,s.type),this._$Em=null}}requestUpdate(t,e,r){if(t!==void 0){if(r??(r=this.constructor.getPropertyOptions(t)),!(r.hasChanged??it)(this[t],e))return;this.C(t,e,r)}this.isUpdatePending===!1&&(this._$Eg=this._$EP())}C(t,e,r){this._$AL.has(t)||this._$AL.set(t,e),r.reflect===!0&&this._$Em!==t&&(this._$ET??(this._$ET=new Set)).add(t)}async _$EP(){this.isUpdatePending=!0;try{await this._$Eg}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[a,s]of this._$Ep)this[a]=s;this._$Ep=void 0}const o=this.constructor.elementProperties;if(o.size>0)for(const[a,s]of o)s.wrapped!==!0||this._$AL.has(a)||this[a]===void 0||this.C(a,this[a],s)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(r=this._$E_)==null||r.forEach(o=>{var a;return(a=o.hostUpdate)==null?void 0:a.call(o)}),this.update(e)):this._$Ej()}catch(o){throw t=!1,this._$Ej(),o}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$E_)==null||e.forEach(r=>{var o;return(o=r.hostUpdated)==null?void 0:o.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ej(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$Eg}shouldUpdate(t){return!0}update(t){this._$ET&&(this._$ET=this._$ET.forEach(e=>this._$EO(e,this[e]))),this._$Ej()}updated(t){}firstUpdated(t){}}$.elementStyles=[],$.shadowRootOptions={mode:"open"},$[z("elementProperties")]=new Map,$[z("finalized")]=new Map,B==null||B({ReactiveElement:$}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.0.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,U=E.trustedTypes,Z=U?U.createPolicy("lit-html",{createHTML:i=>i}):void 0,at="$lit$",f=`lit$${(Math.random()+"").slice(9)}$`,st="?"+f,vt=`<${st}>`,k=document,L=()=>k.createComment(""),C=i=>i===null||typeof i!="object"&&typeof i!="function",nt=Array.isArray,xt=i=>nt(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",I=`[ 	
\f\r]`,S=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,G=/-->/g,J=/>/g,x=RegExp(`>|${I}(?:([^\\s"'>=/]+)(${I}*=${I}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Q=/'/g,K=/"/g,lt=/^(?:script|style|textarea|title)$/i,yt=i=>(t,...e)=>({_$litType$:i,strings:t,values:e}),l=yt(1),_=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),tt=new WeakMap,y=k.createTreeWalker(k,129);function dt(i,t){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const kt=(i,t)=>{const e=i.length-1,r=[];let o,a=t===2?"<svg>":"",s=S;for(let c=0;c<e;c++){const n=i[c];let p,h,d=-1,b=0;for(;b<n.length&&(s.lastIndex=b,h=s.exec(n),h!==null);)b=s.lastIndex,s===S?h[1]==="!--"?s=G:h[1]!==void 0?s=J:h[2]!==void 0?(lt.test(h[2])&&(o=RegExp("</"+h[2],"g")),s=x):h[3]!==void 0&&(s=x):s===x?h[0]===">"?(s=o??S,d=-1):h[1]===void 0?d=-2:(d=s.lastIndex-h[2].length,p=h[1],s=h[3]===void 0?x:h[3]==='"'?K:Q):s===K||s===Q?s=x:s===G||s===J?s=S:(s=x,o=void 0);const w=s===x&&i[c+1].startsWith("/>")?" ":"";a+=s===S?n+vt:d>=0?(r.push(p),n.slice(0,d)+at+n.slice(d)+f+w):n+f+(d===-2?c:w)}return[dt(i,a+(i[e]||"<?>")+(t===2?"</svg>":"")),r]};class M{constructor({strings:t,_$litType$:e},r){let o;this.parts=[];let a=0,s=0;const c=t.length-1,n=this.parts,[p,h]=kt(t,e);if(this.el=M.createElement(p,r),y.currentNode=this.el.content,e===2){const d=this.el.content.firstChild;d.replaceWith(...d.childNodes)}for(;(o=y.nextNode())!==null&&n.length<c;){if(o.nodeType===1){if(o.hasAttributes())for(const d of o.getAttributeNames())if(d.endsWith(at)){const b=h[s++],w=o.getAttribute(d).split(f),T=/([.?@])?(.*)/.exec(b);n.push({type:1,index:a,name:T[2],strings:w,ctor:T[1]==="."?_t:T[1]==="?"?At:T[1]==="@"?St:H}),o.removeAttribute(d)}else d.startsWith(f)&&(n.push({type:6,index:a}),o.removeAttribute(d));if(lt.test(o.tagName)){const d=o.textContent.split(f),b=d.length-1;if(b>0){o.textContent=U?U.emptyScript:"";for(let w=0;w<b;w++)o.append(d[w],L()),y.nextNode(),n.push({type:2,index:++a});o.append(d[b],L())}}}else if(o.nodeType===8)if(o.data===st)n.push({type:2,index:a});else{let d=-1;for(;(d=o.data.indexOf(f,d+1))!==-1;)n.push({type:7,index:a}),d+=f.length-1}a++}}static createElement(t,e){const r=k.createElement("template");return r.innerHTML=t,r}}function A(i,t,e=i,r){var s,c;if(t===_)return t;let o=r!==void 0?(s=e._$Co)==null?void 0:s[r]:e._$Cl;const a=C(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((c=o==null?void 0:o._$AO)==null||c.call(o,!1),a===void 0?o=void 0:(o=new a(i),o._$AT(i,e,r)),r!==void 0?(e._$Co??(e._$Co=[]))[r]=o:e._$Cl=o),o!==void 0&&(t=A(i,o._$AS(i,t.values),o,r)),t}class $t{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:r}=this._$AD,o=((t==null?void 0:t.creationScope)??k).importNode(e,!0);y.currentNode=o;let a=y.nextNode(),s=0,c=0,n=r[0];for(;n!==void 0;){if(s===n.index){let p;n.type===2?p=new j(a,a.nextSibling,this,t):n.type===1?p=new n.ctor(a,n.name,n.strings,this,t):n.type===6&&(p=new zt(a,this,t)),this._$AV.push(p),n=r[++c]}s!==(n==null?void 0:n.index)&&(a=y.nextNode(),s++)}return y.currentNode=k,o}p(t){let e=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,e),e+=r.strings.length-2):r._$AI(t[e])),e++}}class j{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,r,o){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=r,this.options=o,this._$Cv=(o==null?void 0:o.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=A(this,t,e),C(t)?t===g||t==null||t===""?(this._$AH!==g&&this._$AR(),this._$AH=g):t!==this._$AH&&t!==_&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):xt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==g&&C(this._$AH)?this._$AA.nextSibling.data=t:this.$(k.createTextNode(t)),this._$AH=t}g(t){var a;const{values:e,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=M.createElement(dt(r.h,r.h[0]),this.options)),r);if(((a=this._$AH)==null?void 0:a._$AD)===o)this._$AH.p(e);else{const s=new $t(o,this),c=s.u(this.options);s.p(e),this.$(c),this._$AH=s}}_$AC(t){let e=tt.get(t.strings);return e===void 0&&tt.set(t.strings,e=new M(t)),e}T(t){nt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let r,o=0;for(const a of t)o===e.length?e.push(r=new j(this.k(L()),this.k(L()),this,this.options)):r=e[o],r._$AI(a),o++;o<e.length&&(this._$AR(r&&r._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class H{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,r,o,a){this.type=1,this._$AH=g,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=a,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(t,e=this,r,o){const a=this.strings;let s=!1;if(a===void 0)t=A(this,t,e,0),s=!C(t)||t!==this._$AH&&t!==_,s&&(this._$AH=t);else{const c=t;let n,p;for(t=a[0],n=0;n<a.length-1;n++)p=A(this,c[r+n],e,n),p===_&&(p=this._$AH[n]),s||(s=!C(p)||p!==this._$AH[n]),p===g?t=g:t!==g&&(t+=(p??"")+a[n+1]),this._$AH[n]=p}s&&!o&&this.O(t)}O(t){t===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class _t extends H{constructor(){super(...arguments),this.type=3}O(t){this.element[this.name]=t===g?void 0:t}}class At extends H{constructor(){super(...arguments),this.type=4}O(t){this.element.toggleAttribute(this.name,!!t&&t!==g)}}class St extends H{constructor(t,e,r,o,a){super(t,e,r,o,a),this.type=5}_$AI(t,e=this){if((t=A(this,t,e,0)??g)===_)return;const r=this._$AH,o=t===g&&r!==g||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,a=t!==g&&(r===g||o);o&&this.element.removeEventListener(this.name,this,r),a&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class zt{constructor(t,e,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){A(this,t)}}const O=E.litHtmlPolyfillSupport;O==null||O(M,j),(E.litHtmlVersions??(E.litHtmlVersions=[])).push("3.1.1");const Et=(i,t,e)=>{const r=(e==null?void 0:e.renderBefore)??t;let o=r._$litPart$;if(o===void 0){const a=(e==null?void 0:e.renderBefore)??null;r._$litPart$=o=new j(t.insertBefore(L(),a),a,void 0,e??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends ${constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Et(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return _}}var rt;m._$litElement$=!0,m.finalized=!0,(rt=globalThis.litElementHydrateSupport)==null||rt.call(globalThis,{LitElement:m});const R=globalThis.litElementPolyfillSupport;R==null||R({LitElement:m});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.3");const u=N` /*! tailwindcss v3.4.1 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.sr-only{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.pointer-events-none{pointer-events:none}.static{position:static}.fixed{position:fixed}.\\!absolute{position:absolute!important}.absolute{position:absolute}.relative{position:relative}.inset-0{inset:0}.inset-x-0{left:0;right:0}.inset-x-\\[15\\%\\]{left:15%;right:15%}.inset-y-0{bottom:0;top:0}.-left-1{left:-.25rem}.-top-4{top:-1rem}.-top-40{top:-10rem}.bottom-0{bottom:0}.bottom-2{bottom:.5rem}.bottom-2\\.5{bottom:.625rem}.bottom-5{bottom:1.25rem}.end-2{inset-inline-end:.5rem}.end-2\\.5{inset-inline-end:.625rem}.left-0{left:0}.left-1\\/2{left:50%}.left-16{left:4rem}.left-\\[calc\\(50\\%\\+3rem\\)\\]{left:calc(50% + 3rem)}.left-\\[calc\\(50\\%-11rem\\)\\]{left:calc(50% - 11rem)}.left-\\[max\\(-7rem\\2c calc\\(50\\%-52rem\\)\\)\\]{left:max(-7rem,calc(50% - 52rem))}.left-\\[max\\(45rem\\2c calc\\(50\\%\\+8rem\\)\\)\\]{left:max(45rem,calc(50% + 8rem))}.right-0{right:0}.right-2{right:.5rem}.start-0{inset-inline-start:0}.top-0{top:0}.top-1\\/2{top:50%}.top-16{top:4rem}.top-4{top:1rem}.top-\\[calc\\(100\\%-13rem\\)\\]{top:calc(100% - 13rem)}.isolate{isolation:isolate}.-z-10{z-index:-10}.z-10{z-index:10}.z-50{z-index:50}.z-\\[1\\]{z-index:1}.z-\\[2\\]{z-index:2}.z-\\[100\\]{z-index:100}.col-span-2{grid-column:span 2/span 2}.col-span-4{grid-column:span 4/span 4}.float-left{float:left}.\\!-m-px{margin:-1px!important}.-m-1{margin:-.25rem}.-m-1\\.5{margin:-.375rem}.-m-2{margin:-.5rem}.-m-2\\.5{margin:-.625rem}.-m-3{margin:-.75rem}.m-auto{margin:auto}.-mx-3{margin-left:-.75rem;margin-right:-.75rem}.-my-6{margin-bottom:-1.5rem;margin-top:-1.5rem}.mx-2{margin-left:.5rem;margin-right:.5rem}.mx-\\[15\\%\\]{margin-left:15%;margin-right:15%}.mx-\\[3px\\]{margin-left:3px;margin-right:3px}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-bottom:.5rem;margin-top:.5rem}.-mr-\\[100\\%\\]{margin-right:-100%}.-mt-2{margin-top:-.5rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-6{margin-bottom:1.5rem}.mb-8{margin-bottom:2rem}.mb-\\[var\\(--bottom-margin\\)\\]{margin-bottom:var(--bottom-margin)}.mb-\\[var\\(--margin-bottom\\)\\]{margin-bottom:var(--margin-bottom)}.me-2{margin-inline-end:.5rem}.ml-2{margin-left:.5rem}.ml-3{margin-left:.75rem}.ml-auto{margin-left:auto}.mr-2{margin-right:.5rem}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-16{margin-top:4rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-8{margin-top:2rem}.ms-1{margin-inline-start:.25rem}.ml-4{margin-left:1rem}.mr-8{margin-right:2rem}.mr-6{margin-right:1.5rem}.box-content{box-sizing:content-box}.line-clamp-2{display:-webkit-box;overflow:hidden;-webkit-box-orient:vertical;-webkit-line-clamp:2}.block{display:block}.inline-block{display:inline-block}.inline{display:inline}.flex{display:flex}.inline-flex{display:inline-flex}.flow-root{display:flow-root}.grid{display:grid}.hidden{display:none}.aspect-\\[1155\\/678\\]{aspect-ratio:1155/678}.aspect-\\[577\\/310\\]{aspect-ratio:577/310}.size-6{height:1.5rem;width:1.5rem}.\\!h-px{height:1px!important}.h-0{height:0}.h-0\\.5{height:.125rem}.h-12{height:3rem}.h-16{height:4rem}.h-4{height:1rem}.h-5{height:1.25rem}.h-56{height:14rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-96{height:24rem}.h-\\[3px\\]{height:3px}.h-\\[64rem\\]{height:64rem}.h-auto{height:auto}.h-fit{height:-moz-fit-content;height:fit-content}.h-full{height:100%}.h-px{height:1px}.h-\\[var\\(--hero-height\\)\\]{height:var(--hero-height)}.min-h-10{min-height:2.5rem}.min-h-full{min-height:100%}.min-h-screen{min-height:100vh}.\\!w-px{width:1px!important}.w-0{width:0}.w-0\\.5{width:.125rem}.w-1\\/2{width:50%}.w-12{width:3rem}.w-16{width:4rem}.w-4{width:1rem}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-60{width:15rem}.w-8{width:2rem}.w-\\[15\\%\\]{width:15%}.w-\\[30px\\]{width:30px}.w-\\[36\\.0625rem\\]{width:36.0625rem}.w-\\[36\\.125rem\\]{width:36.125rem}.w-\\[48rem\\]{width:48rem}.w-\\[5\\.8rem\\]{width:5.8rem}.w-\\[57rem\\]{width:57rem}.w-\\[64rem\\]{width:64rem}.w-\\[69\\.25rem\\]{width:69.25rem}.w-full{width:100%}.w-screen{width:100vw}.w-\\[var\\(--gallery-button-width\\)\\]{width:var(--gallery-button-width)}.w-1\\/4{width:25%}.w-1\\/3{width:33.333333%}.w-auto{width:auto}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-4xl{max-width:56rem}.max-w-7xl{max-width:80rem}.max-w-\\[70rem\\]{max-width:70rem}.max-w-\\[var\\(--search-input-max-width\\)\\]{max-width:var(--search-input-max-width)}.max-w-full{max-width:100%}.max-w-md{max-width:28rem}.max-w-none{max-width:none}.max-w-xl{max-width:36rem}.max-w-xs{max-width:20rem}.flex-1{flex:1 1 0%}.flex-auto{flex:1 1 auto}.flex-initial{flex:0 1 auto}.flex-none{flex:none}.flex-shrink-0{flex-shrink:0}.shrink{flex-shrink:1}.-translate-x-1\\/2{--tw-translate-x:-50%}.-translate-x-1\\/2,.-translate-y-1\\/2{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-1\\/2{--tw-translate-y:-50%}.translate-y-0{--tw-translate-y:0px}.translate-y-0,.translate-y-4{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.translate-y-4{--tw-translate-y:1rem}.translate-x-0{--tw-translate-x:0px}.rotate-\\[30deg\\],.translate-x-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.rotate-\\[30deg\\]{--tw-rotate:30deg}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.transform-gpu{transform:translate3d(var(--tw-translate-x),var(--tw-translate-y),0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.list-none{list-style-type:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-4{grid-template-columns:repeat(4,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-start{align-items:flex-start}.items-end{align-items:flex-end}.items-center{align-items:center}.items-baseline{align-items:baseline}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-2{gap:.5rem}.gap-4{gap:1rem}.gap-8{gap:2rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-4{-moz-column-gap:1rem;column-gap:1rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-x-8{-moz-column-gap:2rem;column-gap:2rem}.gap-y-10{row-gap:2.5rem}.gap-y-16{row-gap:4rem}.gap-y-2{row-gap:.5rem}.-space-x-px>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(-1px*(1 - var(--tw-space-x-reverse)));margin-right:calc(-1px*var(--tw-space-x-reverse))}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-x-6>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1.5rem*var(--tw-space-x-reverse))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-6>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.5rem*var(--tw-space-y-reverse));margin-top:calc(1.5rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.divide-gray-500\\/10>:not([hidden])~:not([hidden]){border-color:hsla(220,9%,46%,.1)}.\\!overflow-hidden{overflow:hidden!important}.overflow-hidden{overflow:hidden}.overflow-visible{overflow:visible}.overflow-y-auto{overflow-y:auto}.overflow-x-hidden{overflow-x:hidden}.\\!whitespace-nowrap{white-space:nowrap!important}.rounded{border-radius:.25rem}.rounded-2xl{border-radius:1rem}.rounded-3xl{border-radius:1.5rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-none{border-radius:0}.rounded-xl{border-radius:.75rem}.rounded-b{border-bottom-left-radius:.25rem;border-bottom-right-radius:.25rem}.rounded-l-md{border-bottom-left-radius:.375rem;border-top-left-radius:.375rem}.rounded-r-md{border-bottom-right-radius:.375rem;border-top-right-radius:.375rem}.rounded-t{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.\\!border-0{border-width:0!important}.border{border-width:1px}.border-0{border-width:0}.border-y-\\[10px\\]{border-bottom-width:10px;border-top-width:10px}.border-b{border-bottom-width:1px}.border-b-2{border-bottom-width:2px}.border-t{border-top-width:1px}.border-t-2{border-top-width:2px}.border-solid{border-style:solid}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-neutral-100{--tw-border-opacity:1;border-color:rgb(245 245 245/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-white{--tw-border-opacity:1;border-color:rgb(255 255 255/var(--tw-border-opacity))}.border-opacity-10{--tw-border-opacity:0.1}.border-opacity-100{--tw-border-opacity:1}.bg-\\[var\\(--bg-banner-bg\\)\\]{background-color:var(--bg-banner-bg)}.bg-\\[var\\(--bg-form\\)\\]{background-color:var(--bg-form)}.bg-\\[var\\(--bg-form-button-bg\\)\\]{background-color:var(--bg-form-button-bg)}.bg-\\[var\\(--bg-form-input\\)\\]{background-color:var(--bg-form-input)}.bg-\\[var\\(--bg-hero\\)\\]{background-color:var(--bg-hero)}.bg-\\[var\\(--button-bg\\)\\]{background-color:var(--button-bg)}.bg-\\[var\\(--button-primary-bg\\)\\]{background-color:var(--button-primary-bg)}.bg-\\[var\\(--button-secondary-bg\\)\\]{background-color:var(--button-secondary-bg)}.bg-\\[var\\(--cta-bg\\)\\]{background-color:var(--cta-bg)}.bg-\\[var\\(--feature-bg\\)\\]{background-color:var(--feature-bg)}.bg-\\[var\\(--footer-bg\\)\\]{background-color:var(--footer-bg)}.bg-\\[var\\(--search-input-bg\\)\\]{background-color:var(--search-input-bg)}.bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.bg-blue-700{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-50{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.bg-gray-500{--tw-bg-opacity:1;background-color:rgb(107 114 128/var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.bg-indigo-600{--tw-bg-opacity:1;background-color:rgb(79 70 229/var(--tw-bg-opacity))}.bg-inherit{background-color:inherit}.bg-red-100{--tw-bg-opacity:1;background-color:rgb(254 226 226/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-red-600{--tw-bg-opacity:1;background-color:rgb(220 38 38/var(--tw-bg-opacity))}.bg-slate-100{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.bg-transparent{background-color:transparent}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-white\\/5{background-color:hsla(0,0%,100%,.05)}.bg-\\[var\\(--form-bg\\)\\]{background-color:var(--form-bg)}.bg-\\[var\\(--form-bg-input\\)\\]{background-color:var(--form-bg-input)}.bg-\\[var\\(--form-bg-button-bg\\)\\]{background-color:var(--form-bg-button-bg)}.bg-\\[var\\(--form-button-bg\\)\\]{background-color:var(--form-button-bg)}.bg-\\[var\\(--property-pill-new\\)\\]{background-color:var(--property-pill-new)}.bg-\\[var\\(--property-pill\\)\\]{background-color:var(--property-pill)}.bg-\\[var\\(--property-pill-bg\\)\\]{background-color:var(--property-pill-bg)}.bg-\\[var\\(--banner-bg\\)\\]{background-color:var(--banner-bg)}.bg-\\[var\\(--hero-bg\\)\\]{background-color:var(--hero-bg)}.bg-opacity-75{--tw-bg-opacity:0.75}.bg-gradient-to-r{background-image:linear-gradient(to right,var(--tw-gradient-stops))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.bg-none{background-image:none}.from-\\[\\#ff80b5\\]{--tw-gradient-from:#ff80b5 var(--tw-gradient-from-position);--tw-gradient-to:rgba(255,128,181,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-blue-400{--tw-gradient-from:#60a5fa var(--tw-gradient-from-position);--tw-gradient-to:rgba(96,165,250,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.to-\\[\\#9089fc\\]{--tw-gradient-to:#9089fc var(--tw-gradient-to-position)}.to-\\[var\\(--bg-banner-to\\)\\]{--tw-gradient-to:var(--bg-banner-to) var(--tw-gradient-to-position)}.to-\\[var\\(--banner-bg-to\\)\\]{--tw-gradient-to:var(--banner-bg-to) var(--tw-gradient-to-position)}.bg-clip-padding{background-clip:padding-box}.fill-black{fill:#000}.fill-current{fill:currentColor}.fill-white{fill:#fff}.object-cover{-o-object-fit:cover;object-fit:cover}.object-center{-o-object-position:center;object-position:center}.\\!p-0{padding:0!important}.p-0{padding:0}.p-1{padding:.25rem}.p-1\\.5{padding:.375rem}.p-10{padding:2.5rem}.p-2{padding:.5rem}.p-2\\.5{padding:.625rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-5{padding:1.25rem}.p-6{padding:1.5rem}.p-8{padding:2rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.px-2{padding-left:.5rem;padding-right:.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-3\\.5{padding-left:.875rem;padding-right:.875rem}.px-4{padding-left:1rem;padding-right:1rem}.px-5{padding-left:1.25rem;padding-right:1.25rem}.px-6{padding-left:1.5rem;padding-right:1.5rem}.px-8{padding-left:2rem;padding-right:2rem}.py-0{padding-bottom:0;padding-top:0}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-16{padding-bottom:4rem;padding-top:4rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-2\\.5{padding-bottom:.625rem;padding-top:.625rem}.py-24{padding-bottom:6rem;padding-top:6rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-32{padding-bottom:8rem;padding-top:8rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-5{padding-bottom:1.25rem;padding-top:1.25rem}.py-6{padding-bottom:1.5rem;padding-top:1.5rem}.py-8{padding-bottom:2rem;padding-top:2rem}.py-\\[10rem\\]{padding-bottom:10rem;padding-top:10rem}.pb-4{padding-bottom:1rem}.pb-8{padding-bottom:2rem}.pb-\\[var\\(--bottom-margin\\)\\]{padding-bottom:var(--bottom-margin)}.pl-2{padding-left:.5rem}.pl-3{padding-left:.75rem}.pl-7{padding-left:1.75rem}.pl-9{padding-left:2.25rem}.pr-20{padding-right:5rem}.pr-3{padding-right:.75rem}.pr-7{padding-right:1.75rem}.ps-10{padding-inline-start:2.5rem}.ps-3{padding-inline-start:.75rem}.pt-14{padding-top:3.5rem}.pt-16{padding-top:4rem}.pt-24{padding-top:6rem}.pt-5{padding-top:1.25rem}.pt-8{padding-top:2rem}.pt-\\[var\\(--bottom-margin\\)\\]{padding-top:var(--bottom-margin)}.pb-\\[var\\(--margin-bottom\\)\\]{padding-bottom:var(--margin-bottom)}.pt-\\[var\\(--margin-bottom\\)\\]{padding-top:var(--margin-bottom)}.text-left{text-align:left}.text-center{text-align:center}.-indent-\\[999px\\]{text-indent:-999px}.font-sans{font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-5xl{font-size:3rem;line-height:1}.text-base{font-size:1rem;line-height:1.5rem}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-normal{font-weight:400}.font-semibold{font-weight:600}.capitalize{text-transform:capitalize}.leading-5{line-height:1.25rem}.leading-6{line-height:1.5rem}.leading-7{line-height:1.75rem}.leading-8{line-height:2rem}.leading-relaxed{line-height:1.625}.leading-tight{line-height:1.25}.tracking-tight{letter-spacing:-.025em}.tracking-wide{letter-spacing:.025em}.text-\\[var\\(--bg-form-button-text\\)\\]{color:var(--bg-form-button-text)}.text-\\[var\\(--bg-form-text\\)\\]{color:var(--bg-form-text)}.text-\\[var\\(--button-text\\)\\]{color:var(--button-text)}.text-\\[var\\(--cta-text\\)\\]{color:var(--cta-text)}.text-\\[var\\(--form-text\\)\\]{color:var(--form-text)}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-gray-300{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.text-gray-400{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-900{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.text-indigo-600{--tw-text-opacity:1;color:rgb(79 70 229/var(--tw-text-opacity))}.text-neutral-800{--tw-text-opacity:1;color:rgb(38 38 38/var(--tw-text-opacity))}.text-red-500{--tw-text-opacity:1;color:rgb(239 68 68/var(--tw-text-opacity))}.text-red-600{--tw-text-opacity:1;color:rgb(220 38 38/var(--tw-text-opacity))}.text-slate-100{--tw-text-opacity:1;color:rgb(241 245 249/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-\\[var\\(--form-bg-text\\)\\]{color:var(--form-bg-text)}.text-\\[var\\(--form-bg-button-text\\)\\]{color:var(--form-bg-button-text)}.text-\\[var\\(--form-button-text\\)\\]{color:var(--form-button-text)}.text-\\[var\\(--search-price-color\\)\\]{color:var(--search-price-color)}.text-\\[var\\(--property-price\\)\\]{color:var(--property-price)}.text-\\[var\\(--property-pill-text\\)\\]{color:var(--property-pill-text)}.text-\\[var\\(--feature-kicker-text\\)\\]{color:var(--feature-kicker-text)}.no-underline{text-decoration-line:none}.opacity-0{opacity:0}.opacity-100{opacity:1}.opacity-20{opacity:.2}.opacity-30{opacity:.3}.opacity-50{opacity:.5}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-2xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-2xl{--tw-shadow:0 25px 50px -12px rgba(0,0,0,.25);--tw-shadow-colored:0 25px 50px -12px var(--tw-shadow-color)}.shadow-lg{--tw-shadow:0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color),0 4px 6px -4px var(--tw-shadow-color)}.shadow-lg,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)}.shadow-sm,.shadow-xl{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-xl{--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color)}.shadow-gray-100{--tw-shadow-color:#f3f4f6;--tw-shadow:var(--tw-shadow-colored)}.outline-none{outline:2px solid transparent;outline-offset:2px}.ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.ring-inset{--tw-ring-inset:inset}.ring-gray-200{--tw-ring-opacity:1;--tw-ring-color:rgb(229 231 235/var(--tw-ring-opacity))}.ring-gray-300{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}.ring-gray-400\\/10{--tw-ring-color:rgba(156,163,175,.1)}.ring-gray-900\\/10{--tw-ring-color:rgba(17,24,39,.1)}.ring-gray-900\\/5{--tw-ring-color:rgba(17,24,39,.05)}.ring-white\\/10{--tw-ring-color:hsla(0,0%,100%,.1)}.blur-2xl{--tw-blur:blur(40px)}.blur-2xl,.blur-3xl{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.blur-3xl{--tw-blur:blur(64px)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-opacity{transition-duration:.15s;transition-property:opacity;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-150,.transition{transition-duration:.15s}.duration-200{transition-duration:.2s}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.duration-\\[600ms\\]{transition-duration:.6s}.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\.0\\)\\]{transition-timing-function:ease}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.ease-out{transition-timing-function:cubic-bezier(0,0,.2,1)}.\\!\\[clip\\:rect\\(0\\2c 0\\2c 0\\2c 0\\)\\]{clip:rect(0,0,0,0)!important}.\\[mask-image\\:radial-gradient\\(closest-side\\2c white\\2c transparent\\)\\]{-webkit-mask-image:radial-gradient(closest-side,#fff,transparent);mask-image:radial-gradient(closest-side,#fff,transparent)}.placeholder\\:text-gray-400::-moz-placeholder{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.placeholder\\:text-gray-400::placeholder{--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}.after\\:clear-both:after{clear:both;content:var(--tw-content)}.after\\:block:after{content:var(--tw-content);display:block}.after\\:content-\\[\\'\\'\\]:after{--tw-content:"";content:var(--tw-content)}.hover\\:bg-\\[var\\(--button-bg-hover\\)\\]:hover{background-color:var(--button-bg-hover)}.hover\\:bg-blue-800:hover{--tw-bg-opacity:1;background-color:rgb(30 64 175/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-gray-200:hover{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.hover\\:bg-gray-700:hover{--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}.hover\\:bg-indigo-500:hover{--tw-bg-opacity:1;background-color:rgb(99 102 241/var(--tw-bg-opacity))}.hover\\:bg-red-500:hover{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.hover\\:bg-slate-100:hover{--tw-bg-opacity:1;background-color:rgb(241 245 249/var(--tw-bg-opacity))}.hover\\:bg-\\[var\\(--form-bg-button-bg-hover\\)\\]:hover{background-color:var(--form-bg-button-bg-hover)}.hover\\:bg-\\[var\\(--form-button-bg-hover\\)\\]:hover{background-color:var(--form-button-bg-hover)}.hover\\:bg-\\[var\\(--gallery-button-bg\\)\\]:hover{background-color:var(--gallery-button-bg)}.hover\\:bg-\\[var\\(--gallery-button-bg-hover\\)\\]:hover{background-color:var(--gallery-button-bg-hover)}.hover\\:text-\\[var\\(--button-text-hover\\)\\]:hover{color:var(--button-text-hover)}.hover\\:text-gray-300:hover{--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}.hover\\:text-gray-50:hover{--tw-text-opacity:1;color:rgb(249 250 251/var(--tw-text-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.hover\\:text-gray-900:hover{--tw-text-opacity:1;color:rgb(17 24 39/var(--tw-text-opacity))}.hover\\:text-white:hover{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.hover\\:text-\\[var\\(--form-button-text-hover\\)\\]:hover{color:var(--form-button-text-hover)}.hover\\:text-black:hover{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:no-underline:hover{text-decoration-line:none}.hover\\:opacity-50:hover{opacity:.5}.hover\\:outline-none:hover{outline:2px solid transparent;outline-offset:2px}.focus\\:z-10:focus{z-index:10}.focus\\:z-20:focus{z-index:20}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.focus\\:border-gray-500:focus{--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}.focus\\:text-white:focus{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.focus\\:no-underline:focus{text-decoration-line:none}.focus\\:opacity-90:focus{opacity:.9}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:outline-offset-0:focus{outline-offset:0}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-2:focus,.focus\\:ring-4:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-4:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-inset:focus{--tw-ring-inset:inset}.focus\\:ring-blue-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(147 197 253/var(--tw-ring-opacity))}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.focus\\:ring-gray-300:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(209 213 219/var(--tw-ring-opacity))}.focus\\:ring-gray-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(107 114 128/var(--tw-ring-opacity))}.focus\\:ring-indigo-600:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(79 70 229/var(--tw-ring-opacity))}.focus-visible\\:outline:focus-visible{outline-style:solid}.focus-visible\\:outline-2:focus-visible{outline-width:2px}.focus-visible\\:outline-offset-2:focus-visible{outline-offset:2px}.focus-visible\\:outline-offset-\\[-4px\\]:focus-visible{outline-offset:-4px}.focus-visible\\:outline-gray-900:focus-visible{outline-color:#111827}.focus-visible\\:outline-indigo-600:focus-visible{outline-color:#4f46e5}.focus-visible\\:outline-white:focus-visible{outline-color:#fff}.group:invalid .group-invalid\\:pointer-events-none{pointer-events:none}.group:invalid .group-invalid\\:opacity-30{opacity:.3}.group:hover .group-hover\\:translate-x-2{--tw-translate-x:0.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:opacity-75{opacity:.75}.group:hover .group-hover\\:transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.group:hover .group-hover\\:duration-150{transition-duration:.15s}.group:hover .group-hover\\:ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.peer:not(:-moz-placeholder-shown):not(:focus):invalid~.peer-\\[\\&\\:not\\(\\:-moz-placeholder-shown\\)\\:not\\(\\:focus\\)\\:invalid\\]\\:block{display:block}.peer:not(:placeholder-shown):not(:focus):invalid~.peer-\\[\\&\\:not\\(\\:placeholder-shown\\)\\:not\\(\\:focus\\)\\:invalid\\]\\:block{display:block}@media (prefers-reduced-motion:reduce){.motion-reduce\\:transition-none{transition-property:none}}:is(.dark .dark\\:border-gray-500){--tw-border-opacity:1;border-color:rgb(107 114 128/var(--tw-border-opacity))}:is(.dark .dark\\:border-gray-600){--tw-border-opacity:1;border-color:rgb(75 85 99/var(--tw-border-opacity))}:is(.dark .dark\\:border-opacity-50){--tw-border-opacity:0.5}:is(.dark .dark\\:bg-black){--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-blue-600){--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-gray-700){--tw-bg-opacity:1;background-color:rgb(55 65 81/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-500){--tw-bg-opacity:1;background-color:rgb(100 116 139/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-600){--tw-bg-opacity:1;background-color:rgb(71 85 105/var(--tw-bg-opacity))}:is(.dark .dark\\:bg-slate-800){--tw-bg-opacity:1;background-color:rgb(30 41 59/var(--tw-bg-opacity))}:is(.dark .dark\\:text-gray-300){--tw-text-opacity:1;color:rgb(209 213 219/var(--tw-text-opacity))}:is(.dark .dark\\:text-gray-400){--tw-text-opacity:1;color:rgb(156 163 175/var(--tw-text-opacity))}:is(.dark .dark\\:text-white){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}:is(.dark .dark\\:placeholder-gray-400)::-moz-placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}:is(.dark .dark\\:placeholder-gray-400)::placeholder{--tw-placeholder-opacity:1;color:rgb(156 163 175/var(--tw-placeholder-opacity))}:is(.dark .dark\\:hover\\:bg-blue-700:hover){--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-gray-600:hover){--tw-bg-opacity:1;background-color:rgb(75 85 99/var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:bg-slate-700:hover){--tw-bg-opacity:1;background-color:rgb(51 65 85/var(--tw-bg-opacity))}:is(.dark .dark\\:hover\\:text-white:hover){--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}:is(.dark .dark\\:focus\\:border-blue-500:focus){--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}:is(.dark .dark\\:focus\\:ring-blue-500:focus){--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-blue-800:focus){--tw-ring-opacity:1;--tw-ring-color:rgb(30 64 175/var(--tw-ring-opacity))}:is(.dark .dark\\:focus\\:ring-slate-800:focus){--tw-ring-opacity:1;--tw-ring-color:rgb(30 41 59/var(--tw-ring-opacity))}@media (min-width:640px){.sm\\:-top-80{top:-20rem}.sm\\:left-\\[calc\\(50\\%\\+36rem\\)\\]{left:calc(50% + 36rem)}.sm\\:left-\\[calc\\(50\\%-30rem\\)\\]{left:calc(50% - 30rem)}.sm\\:left-full{left:100%}.sm\\:top-\\[calc\\(100\\%-30rem\\)\\]{top:calc(100% - 30rem)}.sm\\:mx-0{margin-left:0;margin-right:0}.sm\\:my-8{margin-bottom:2rem;margin-top:2rem}.sm\\:-ml-80{margin-left:-20rem}.sm\\:mb-8{margin-bottom:2rem}.sm\\:ml-3{margin-left:.75rem}.sm\\:ml-4{margin-left:1rem}.sm\\:mt-0{margin-top:0}.sm\\:mt-20{margin-top:5rem}.sm\\:block{display:block}.sm\\:flex{display:flex}.sm\\:hidden{display:none}.sm\\:h-10{height:2.5rem}.sm\\:w-10{width:2.5rem}.sm\\:w-\\[57rem\\]{width:57rem}.sm\\:w-\\[72\\.1875rem\\]{width:72.1875rem}.sm\\:w-auto{width:auto}.sm\\:w-full{width:100%}.sm\\:max-w-lg{max-width:32rem}.sm\\:max-w-sm{max-width:24rem}.sm\\:flex-1{flex:1 1 0%}.sm\\:translate-y-0{--tw-translate-y:0px}.sm\\:scale-100,.sm\\:translate-y-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:scale-100{--tw-scale-x:1;--tw-scale-y:1}.sm\\:scale-95{--tw-scale-x:.95;--tw-scale-y:.95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row-reverse{flex-direction:row-reverse}.sm\\:items-start{align-items:flex-start}.sm\\:items-center{align-items:center}.sm\\:justify-center{justify-content:center}.sm\\:justify-between{justify-content:space-between}.sm\\:gap-6{gap:1.5rem}.sm\\:gap-y-20{row-gap:5rem}.sm\\:rounded-3xl{border-radius:1.5rem}.sm\\:p-0{padding:0}.sm\\:p-10{padding:2.5rem}.sm\\:p-6{padding:1.5rem}.sm\\:px-16{padding-left:4rem;padding-right:4rem}.sm\\:px-3{padding-left:.75rem;padding-right:.75rem}.sm\\:px-3\\.5{padding-left:.875rem;padding-right:.875rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:py-12{padding-bottom:3rem;padding-top:3rem}.sm\\:py-24{padding-bottom:6rem;padding-top:6rem}.sm\\:py-32{padding-bottom:8rem;padding-top:8rem}.sm\\:py-48{padding-bottom:12rem;padding-top:12rem}.sm\\:pb-4{padding-bottom:1rem}.sm\\:text-left{text-align:left}.sm\\:text-center{text-align:center}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.sm\\:text-6xl{font-size:3.75rem;line-height:1}.sm\\:text-sm{font-size:.875rem}.sm\\:leading-5,.sm\\:text-sm{line-height:1.25rem}.sm\\:ring-1{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.sm\\:ring-gray-900\\/10{--tw-ring-color:rgba(17,24,39,.1)}.sm\\:before\\:flex-1:before{content:var(--tw-content);flex:1 1 0%}}@media (min-width:768px){.md\\:inset-0{inset:0}.md\\:-ml-4{margin-left:-1rem}.md\\:block{display:block}.md\\:flex{display:flex}.md\\:inline-flex{display:inline-flex}.md\\:h-auto{height:auto}.md\\:h-full{height:100%}.md\\:w-1\\/2{width:50%}.md\\:w-auto{width:auto}.md\\:grid-cols-6{grid-template-columns:repeat(6,minmax(0,1fr))}.md\\:rounded-xl{border-radius:.75rem}.md\\:px-10{padding-left:2.5rem;padding-right:2.5rem}.md\\:pt-24{padding-top:6rem}}@media (min-width:1024px){.lg\\:left-1\\/2{left:50%}.lg\\:mx-0{margin-right:0}.lg\\:-ml-0,.lg\\:mx-0{margin-left:0}.lg\\:mb-0{margin-bottom:0}.lg\\:ml-0{margin-left:0}.lg\\:mt-0{margin-top:0}.lg\\:mt-8{margin-top:2rem}.lg\\:flex{display:flex}.lg\\:hidden{display:none}.lg\\:h-80{height:20rem}.lg\\:h-full{height:100%}.lg\\:w-1\\/3{width:33.333333%}.lg\\:w-2\\/3{width:66.666667%}.lg\\:w-full{width:100%}.lg\\:max-w-7xl{max-width:80rem}.lg\\:max-w-lg{max-width:32rem}.lg\\:max-w-md{max-width:28rem}.lg\\:max-w-none{max-width:none}.lg\\:max-w-xl{max-width:36rem}.lg\\:flex-1{flex:1 1 0%}.lg\\:flex-auto{flex:1 1 auto}.lg\\:flex-none{flex:none}.lg\\:flex-shrink-0{flex-shrink:0}.lg\\:-translate-x-1\\/2{--tw-translate-x:-50%}.lg\\:-translate-x-1\\/2,.lg\\:translate-y-0{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.lg\\:translate-y-0{--tw-translate-y:0px}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:flex-col{flex-direction:column}.lg\\:justify-start{justify-content:flex-start}.lg\\:justify-end{justify-content:flex-end}.lg\\:justify-center{justify-content:center}.lg\\:gap-x-10{-moz-column-gap:2.5rem;column-gap:2.5rem}.lg\\:gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.lg\\:px-24{padding-left:6rem;padding-right:6rem}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-16{padding-bottom:4rem;padding-top:4rem}.lg\\:py-32{padding-bottom:8rem;padding-top:8rem}.lg\\:py-56{padding-bottom:14rem;padding-top:14rem}.lg\\:pr-3{padding-right:.75rem}.lg\\:pr-8{padding-right:2rem}.lg\\:pt-0{padding-top:0}.lg\\:pt-4{padding-top:1rem}.lg\\:text-left{text-align:left}.lg\\:text-2xl{font-size:1.5rem;line-height:2rem}}@media (min-width:1280px){.xl\\:gap-x-8{-moz-column-gap:2rem;column-gap:2rem}}.invalid\\:\\[\\&\\:not\\(\\:-moz-placeholder-shown\\)\\:not\\(\\:focus\\)\\]\\:border-red-500:not(:-moz-placeholder-shown):not(:focus):invalid{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))}.invalid\\:\\[\\&\\:not\\(\\:placeholder-shown\\)\\:not\\(\\:focus\\)\\]\\:border-red-500:not(:placeholder-shown):not(:focus):invalid{--tw-border-opacity:1;border-color:rgb(239 68 68/var(--tw-border-opacity))} `;class Lt extends m{static get styles(){return[N`
        .cross-lines {
          mask-image: radial-gradient(
            100% 100% at top right,
            white,
            transparent
          );

          stroke: rgb(255 255 255 / 0.1);
        }
        .fill-1 {
          fill: rgb(31 41 55 / 0.2);
        }
        .soft-bg {
          top: calc(50% - 30rem);
          left: 12rem;
        }
        .particles {
          aspect-ratio: 1108/632;
        }
      `,u]}static get properties(){return{links:{type:Array,reflect:!0},variant:{type:String},logoLink:{type:String},image:{type:String},height:{type:String}}}constructor(){super(),this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.variant="white-1",this.logoLink="#",this.image=""}render(){if(this.variant==="white-1")return l`
        <div
          class="mb-[var(--margin-bottom)] bg-white  text-white dark:bg-slate-800"
        >
          <header
            class="${this.image===""?"absolute":"relative"} inset-x-0 top-0 z-50"
          >
            <div
              class="relative isolate h-[var(--hero-height)] px-6 pt-14 lg:px-8"
              style="background-image: url('${this.image}'); background-repeat:no-repeat; background-size:cover;"
            >
              <div
                class="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
                aria-hidden="true"
              >
                <div
                  class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                ></div>
              </div>
              <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                  <slot name="top"></slot>
                </div>
                <div class="text-center">
                  <h1
                    class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl"
                  >
                    <slot name="header"></slot>
                  </h1>
                  <p class="mt-6 text-lg leading-8 text-gray-600">
                    <slot name="text"></slot>
                  </p>
                  <div class="mt-10 flex items-center justify-center gap-x-6">
                    <slot name="buttons"></slot>
                  </div>
                </div>
              </div>
              <div
                class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                  style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
                ></div>
              </div>
            </div>
          </header>
        </div>
      `;if(this.variant==="dark-1")return l` <div
        class="relative isolate overflow-hidden bg-[var(--hero-bg)]"
      >
        <svg
          class="apx cross-lines absolute inset-0 -z-10 h-full w-full"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" class="fill-1 overflow-visible">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
          ></rect>
        </svg>
        <div
          class="soft-bg xi btd cqt crj dgu absolute -z-10 mt-10 blur-3xl"
          aria-hidden="true"
        >
          <div
            class="mg particles w-[69.25rem] bg-gradient-to-r from-blue-400 opacity-20"
            style="clip-path: polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%);"
          ></div>
        </div>
        <div class="asp aun cfx dde mx-auto max-w-7xl px-10 py-[10rem] lg:flex">
          <div class="mx-auto max-w-2xl flex-shrink-0 pt-8 lg:mx-0 lg:max-w-xl">
            <slot name="logo"></slot>
            <div class="le bxc lg:mt-8">
              <slot name="top"></slot>
            </div>
            <h1 class="avs awc aww mt-10 text-white sm:text-6xl">
              <slot name="header"></slot>
            </h1>
            <p class="avy awq mt-8 text-gray-300">
              <slot name="text"></slot>
            </p>
            <div class="yz aai mt-10 flex">
              <slot name="login"></slot>
            </div>
          </div>
          <div
            class="cue cuf cxj cxp dif mx-auto mt-16 flex max-w-2xl lg:mt-0 lg:max-w-none lg:flex-none"
          >
            <div class="tw uo bzl cxj">
              <slot name="buttons"></slot>
            </div>
          </div>
        </div>
      </div>`}}customElements.define("ds-tw-hero",Lt);class Ct extends m{static get styles(){return[u]}static get properties(){return{image:{type:String},variant:{type:String}}}constructor(){super(),this.image="",this.variant="primary"}renderTemplate(){if(this.variant=="primary")return l` <div
        class="min-w-screen flex min-h-screen items-center justify-center px-5 py-5"
      >
        <div
          class="w-full overflow-hidden rounded-3xl bg-gray-100 text-gray-500 shadow-xl"
          style="max-width:1000px"
        >
          <div class="w-full md:flex">
            <div
              class="hidden w-1/2 bg-[var(--cta-bg)] px-10 py-10 text-2xl text-[var(--cta-text)] md:block"
            >
              <slot name="left"></slot>
            </div>
            <div class="w-full px-5 py-10 md:w-1/2 md:px-10">
              <div>
                <slot name="right"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>`;if(this.variant=="secondary")return l`
        <div class="bg-inherit">
          <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div
              class="relative isolate mb-[var(--margin-bottom)] overflow-hidden bg-[var(--cta-bg)] p-4 pt-16 shadow-2xl dark:bg-slate-500 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-10 lg:px-24 lg:pt-0"
            >
              <svg
                viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fill-opacity="0.5"
                />
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="bg-[var(--cta-bg)]" />
                    <stop offset="1" stop-color="white" />
                  </radialGradient>
                </defs>
              </svg>
              <div
                class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left"
              >
                <h2 class="text-3xl font-bold tracking-tight  sm:text-4xl">
                  <slot name="title"></slot>
                </h2>
                <p class="mt-6 text-lg leading-8 text-[var(--cta-text)]">
                  <slot name="body"></slot>
                </p>
                <div
                  class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
                >
                  <slot name="buttons"></slot>
                </div>
              </div>
              <div class="relative mt-16 w-full lg:mt-8">
                <slot name="right"></slot>
                ${this.image?l` <img
                      class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                      src="${this.image}"
                      alt="App screenshot"
                      width="1824"
                      height="1080"
                    />`:g}
              </div>
            </div>
          </div>
        </div>
      `}render(){return this.renderTemplate()}}customElements.define("ds-tw-cta",Ct);class Mt extends m{static get styles(){return[u]}static get properties(){return{image:{type:String},imageWidth:{type:String}}}constructor(){super(),this.imageWidth="2432",this.imageHeight="1442",this.image="/images/office-1.jpg"}render(){return l`
      <div
        class="mb-[var(--margin-bottom)] overflow-hidden rounded-none bg-[var(--feature-bg)] py-8 sm:py-12 md:rounded-xl"
      >
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div
            class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2"
          >
            <div class="lg:pr-8 lg:pt-4">
              <div class="lg:max-w-lg">
                <h2
                  class="text-base font-semibold leading-7 text-[var(--feature-kicker-text)]"
                >
                  <slot name="kicker"></slot>
                </h2>
                <p
                  class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
                >
                  <slot name="header"></slot>
                </p>
                <p class="mt-6 text-lg leading-8 text-gray-600">
                  <slot name="body"></slot>
                </p>
                <dl
                  class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
                >
                  <slot name="bullets"></slot>
                </dl>
              </div>
            </div>
            <img
              src="${this.image}"
              alt="Product screenshot"
              class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width="${this.imageWidth}"
              height="${this.imageHeight}"
            />
          </div>
        </div>
      </div>
    `}}customElements.define("ds-tw-feature",Mt);class jt extends m{static get styles(){return[u]}static get properties(){return{}}constructor(){super()}render(){return l` <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl sm:text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            <slot name="title"></slot>
          </h2>
          <p class="mt-6 text-lg leading-8 text-gray-600">
            <slot name="body"></slot>
          </p>
        </div>
        <slot name="memberships"></slot>
      </div>
    </div>`}}customElements.define("ds-tw-pricing",jt);class Tt extends m{static get styles(){return[N`
        .t {
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
      `,u]}static get properties(){return{companyName:{type:String,reflect:!0},logoSrc:{type:String,reflect:!0},menu:{type:Array,reflect:!0}}}constructor(){super(),this.logoSrc="",this.companyName="Enter Conpany Name",this.menu=[{name:"Menu 1",links:[{name:"Link 1",link:"#"},{name:"Link 2",link:"#"},{name:"Link 3",link:"#"},{name:"Link 4",link:"#"}]},{name:"Menu 2",links:[{name:"Link 1",link:"#"},{name:"Link 2",link:"#"},{name:"Link 3",link:"#"},{name:"Link 4",link:"#"}]},{name:"Menu 3",links:[{name:"Link 1",link:"#"},{name:"Link 2",link:"#"},{name:"Link 3",link:"#"},{name:"Link 4",link:"#"}]},{name:"Menu 4",links:[{name:"Link 1",link:"#"},{name:"Link 2",link:"#"},{name:"Link 3",link:"#"},{name:"Link 4",link:"#"}]}]}render(){var t;return l`<footer
      class="bg-[var(--footer-bg)]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" class="t">Footer</h2>
      <div class="aur mx-auto max-w-7xl px-10 pb-8 pt-24">
        <div class="xs:grid-cols-2 grid gap-8 md:grid-cols-6">
          <div class="col-span-2 space-y-6">
            <slot name="logo"></slot>
            <p class="text-sm leading-6 text-gray-300">
              <slot name="header"></slot>
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-gray-500 hover:text-gray-300"
                ><span class="t">Facebook</span
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path></svg></a
              ><a href="#" class="text-gray-500 hover:text-gray-300"
                ><span class="t">Instagram</span
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path></svg></a
              ><a href="#" class="text-gray-500 hover:text-gray-300"
                ><span class="t">X</span
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z"
                  ></path></svg></a
              ><a href="#" class="text-gray-500 hover:text-gray-300"
                ><span class="t">GitHub</span
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clip-rule="evenodd"
                  ></path></svg></a
              ><a href="#" class="text-gray-500 hover:text-gray-300"
                ><span class="t">YouTube</span
                ><svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  class="h-6 w-6"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="grid-cols col-span-4 mt-16 grid gap-8">
            <div class="grid grid-cols-4">
              ${(t=this.menu)==null?void 0:t.map(e=>l` <div>
                    <h3 class="text-sm font-semibold leading-6 text-white">
                      ${e.name}
                    </h3>
                    <ul role="list" class="mt-6 space-y-6">
                      ${e.links.map(r=>l`
                          <li>
                            <a
                              href="${r.link}"
                              class="text-sm leading-6 text-gray-300 hover:text-gray-50 hover:underline"
                              >${r.name}</a
                            >
                          </li>
                        `)}
                    </ul>
                  </div>`)}
            </div>
          </div>
        </div>
        <div
          class="la bt-1 mt-24 border-t-2 border-white border-opacity-10 pt-8"
        >
          <p class="text-xs leading-5 text-gray-400">
            <slot name="footnote"></slot>
          </p>
        </div>
      </div>
    </footer>`}}customElements.define("ds-tw-footer",Tt);class Pt extends m{static get styles(){return[u]}static get properties(){return{variant:{type:String},dismiss:{type:Boolean}}}constructor(){super(),this.variant="",this.dismiss=!1}render(){return l`
      <div
        class="relative isolate flex items-center gap-x-6 overflow-hidden bg-[var(--banner-bg)] px-6 py-2.5 sm:px-3.5 sm:before:flex-1"
      >
        <div
          class="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            class="from-[var(--banner-bg-from, #ff80b5)] aspect-[577/310] w-[36.0625rem] bg-gradient-to-r to-[var(--banner-bg-to)] opacity-30"
            style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          ></div>
        </div>
        <div
          class="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            class="from-[var(--banner-bg-from, #ff80b5)] aspect-[577/310] w-[36.0625rem] bg-gradient-to-r to-[var(--banner-bg-to)] opacity-30"
            style="clip-path: polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)"
          ></div>
        </div>
        <div class="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p class="text-sm leading-6 text-gray-900">
            <strong class="font-semibold"><slot name="title"></slot></strong
            ><svg
              viewBox="0 0 2 2"
              class="mx-2 inline h-0.5 w-0.5 fill-current"
              aria-hidden="true"
            >
              <circle cx="1" cy="1" r="1" />
            </svg>
            <slot name="text"></slot>
          </p>
          <a
            href="#"
            class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
            ><slot name="cta-text"></slot>
            <span aria-hidden="true">&rarr;</span></a
          >
        </div>
        <div class="flex flex-1 justify-end">
          ${this.dismiss?l` <button
                type="button"
                class="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              >
                <span class="sr-only">Dismiss</span>
                <svg
                  class="h-5 w-5 text-gray-900"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"
                  />
                </svg>
              </button>`:g}
        </div>
      </div>
    `}}customElements.define("ds-tw-banners",Pt);class Ut extends m{static get styles(){return[u]}static get properties(){return{listElements:{type:String},currency:{type:String}}}renderListElements(t){if(t.length!==0)return console.log(t),t.map(e=>{}).join("")}constructor(){super(),this.listElements="",this.currency="£"}render(){const t=this.listElements.split(";");return console.log(t),l`
      <div
        class="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none"
      >
        <div class="p-8 sm:p-10 lg:flex-auto">
          <h3 class="text-2xl font-bold tracking-tight text-gray-900">
            <slot name="title"></slot>
          </h3>
          <p class="mt-6 text-base leading-7 text-gray-600">
            <slot name="body"></slot>
          </p>
          <div class="mt-10 flex items-center gap-x-4">
            <h4
              class="flex-none text-sm font-semibold leading-6 text-indigo-600"
            >
              <slot name="list-title"></slot>
            </h4>
            <div class="h-px flex-auto bg-gray-100"></div>
          </div>
          ${t.map(e=>{})}
          <ul
            role="list"
            class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
          >
            ${t.map(e=>l`
                <li class="flex gap-x-3">
                  <svg
                    class="h-6 w-5 flex-none text-indigo-600"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  ${e}
                </li>
              `)}
          </ul>
        </div>
        <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
          <div
            class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16"
          >
            <div class="mx-auto max-w-xs px-8">
              <p class="text-base font-semibold text-gray-600">
                <slot name="price-title"></slot>
              </p>
              <p class="mt-6 flex items-baseline justify-center gap-x-2">
                <span
                  class="text-sm font-semibold leading-6 tracking-wide text-gray-600"
                  >${this.currency}</span
                >
                <span class="text-5xl font-bold tracking-tight text-gray-900"
                  ><slot name="price"></slot
                ></span>
              </p>
              <a
                href="#"
                class="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Get access</a
              >
              <p class="mt-6 text-xs leading-5 text-gray-600">
                <slot name="price-footer"></slot>
              </p>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("ds-tw-membership",Ut);class Nt extends m{static get styles(){return[u]}static get properties(){return{link:{type:String},variant:{type:String},buttonText:{type:String},hasArrow:{type:Boolean}}}constructor(){super(),this.link="#",this.variant="primary",this.buttonText="",this.hasArrow=!1}displayArrow(){return this.hasArrow?l`<span aria-hidden="true" class="ml-2">→</span>`:""}themeButton(){const t=["mr-2 bg-[var(--button-bg)] text-[var(--button-text)] hover:text-[var(--button-text-hover)] hover:bg-[var(--button-bg-hover)] transition-all duration-200"];return this.querySelector('[slot="icon"]')&&t.push("flex align-center justify-center"),this.variant==="primary"&&t.push("text-sm  px-3.5 py-2.5 font-semibold leading-6 "),this.variant==="primary-2"&&t.push("rounded-md px-5 py-2.5 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"),this.variant==="primary-3"&&t.push("text-lg  px-5 py-3 font-bold leading-6"),this.variant==="secondary"&&t.push("rounded-md px-3.5 py-2.5 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"),t.join(" ")}render(){return this.variant!=="complex"?l`<a href="${this.link}" class="${this.themeButton()}"
          ><slot name="icon"></slot><slot></slot>${this.displayArrow()}</a
        >`:l`<div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <div
            class="${this.themeButton()} relative rounded-full px-5 py-3 text-sm leading-6 ring-1 ring-gray-900/10"
          >
            <slot></slot>
            <a href="${this.link}" class="group font-semibold"
              ><span class="absolute inset-0" aria-hidden="true"></span>${this.buttonText} <span aria-hidden="true">&rarr;</span></a
            >
          </div>
        </div>`}}customElements.define("ds-tw-button",Nt);class Ht extends m{static get styles(){return[u]}static get properties(){return{variant:{type:String}}}constructor(){super(),this.variant=""}toggleModalWindow(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}modalTriggerButton(){return l` <!-- Modal toggle -->
      <button
        class="block rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        @click=${this.toggleModalWindow}
      >
        Toggle modal
      </button>`}render(){return this.variant==="primary"?l` <div class="mx-auto max-w-2xl">
          ${this.modalTriggerButton()}

          <!-- Main modal -->
          <div
            role="dialog"
            aria-hidden="true"
            class="fixed left-0 right-0 top-4 z-50 hidden items-center justify-center overflow-y-auto overflow-x-hidden md:inset-0 md:h-full"
          >
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></div>

            <div
              class="relative flex h-full min-h-full w-full items-center justify-center p-4 px-4 sm:items-center sm:p-0 md:h-auto"
            >
              <!-- Modal content -->
              <div
                class="relative max-w-2xl rounded-lg bg-white shadow dark:bg-gray-700"
              >
                <!-- Modal header -->
                <div
                  class="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600"
                >
                  <h3
                    class="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl"
                  >
                    <slot name="title"></slot>
                  </h3>
                  <button
                    type="button"
                    class="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                    @click=${this.toggleModalWindow}
                  >
                    <svg
                      class="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <!-- Modal body -->
                <div class="space-y-6 p-6">
                  <p
                    class="text-base leading-relaxed text-gray-500 dark:text-gray-400"
                  >
                    <slot></slot>
                  </p>
                </div>
                <!-- Modal footer -->
                <div
                  class="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600"
                >
                  <button
                    @click=${this.toggleModalWindow}
                    type="button"
                    class="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    I accept
                  </button>
                  <button
                    @click=${this.toggleModalWindow}
                    type="button"
                    class="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:ring-4 focus:ring-gray-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                  >
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>`:l`
          ${this.modalTriggerButton()}
          <div
            class="z-10 hidden"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
          >
            <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
            <div
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            ></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div
                class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
              >
                <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
                <div
                  class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
                >
                  <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                      <div
                        class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"
                      >
                        <svg
                          class="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                      </div>
                      <div
                        class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left"
                      >
                        <h3
                          class="text-base font-semibold leading-6 text-gray-900"
                          id="modal-title"
                        >
                          <slot name="title"></slot>
                        </h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">
                            <slot></slot>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"
                  >
                    <button
                      @click=${this.toggleModalWindow}
                      type="button"
                      class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    >
                      Deactivate
                    </button>
                    <button
                      @click=${this.toggleModalWindow}
                      type="button"
                      class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}}customElements.define("ds-tw-modal",Ht);const et=["Baker Street","Elm Street","Cambridge Avenue","Main Street","High Street"];let Bt=[{id:"1",name:"Item 1",href:"1",imageSrc:"/images/house-1.avif",description:"Cupidatat consequat occaecat enim. Ad commodo mollit nisi culpa enim tempor nostrud quis ipsum quis sit aliqua. Non enim velit fugiat velit deserunt dolor.",price:"150,000"},{id:"2",name:"Item 2",href:"2",imageSrc:"/images/house-1.avif",description:"Ssit amet consectetur adipisicing elit.",price:"120,000"},{id:"3",name:"Item 3",href:"3",imageSrc:"/images/house-2.jpg",description:"Laborum dolor sint consequat qui. Mollit ex culpa voluptate Lorem. Ullamco amet incididunt aute duis nisi ut laboris cillum fugiat est tempor quis eiusmod aliqua.",price:"320,000"},{id:"4",name:"Item 4",href:"4",imageSrc:"/images/house-1.avif",description:"Et aliquip dolore culpa nisi voluptate amet non Lorem esse laborum. Tempor consequat irure quis amet id mollit proident sunt. Reprehenderit aliqua irure ad fugiat deserunt tempor amet ipsum cillum culpa occaecat sit fugiat enim.",price:"320,000"},{id:"5",name:"Item 5",href:"5",imageSrc:"/images/house-1.avif",description:"Adipisicing exercitation ipsum magna reprehenderit qui elit sint do ut nulla proident. Aliqua adipisicing ipsum veniam velit est. Quis nulla deserunt sint quis enim ipsum aliqua reprehenderit exercitation. Voluptate enim id dolore velit magna nostrud amet amet. Proident fugiat occaecat mollit ea est ipsum Lorem dolore eu nisi. Cupidatat ex proident laborum adipisicing tempor Lorem et.",price:"320,000"},{id:"6",name:"Item 6",href:"6",imageSrc:"/images/house-2.jpg",description:"Lorem anim aliqua consequat ad id consectetur occaecat magna consequat aute enim nisi. Ut aliqua enim sint velit nisi eu labore elit ex nisi pariatur. Mollit fugiat cupidatat adipisicing laborum mollit culpa.",price:"320,000"},{id:"7",name:"Item 7",href:"7",imageSrc:"/images/house-1.avif",description:"Nulla fugiat amet nulla adipisicing laborum anim commodo voluptate. Ex pariatur duis ipsum cupidatat Lorem nulla ut pariatur elit anim pariatur sint mollit eu. Fugiat sunt excepteur ex enim dolore do commodo enim cillum. Magna labore non excepteur amet voluptate.",price:"120,000"},{id:"8",name:"Item 8",href:"8",imageSrc:"/images/house-1.avif",description:"Ex tempor enim enim pariatur consequat irure aute ipsum culpa eiusmod aute in do. Nostrud occaecat et ipsum esse ut ullamco deserunt. Ullamco Lorem consectetur amet elit labore labore pariatur cupidatat nisi. Dolore cupidatat ea est magna culpa ullamco duis sunt ea ipsum ullamco eiusmod minim tempor.",price:"1,000,000"},{id:"9",name:"Item 9",href:"9",imageSrc:"/images/house-2.jpg",description:"Proident ad deserunt aute nulla nostrud pariatur aute pariatur pariatur Lorem do voluptate. In sit cupidatat fugiat aliquip. Aute sit eiusmod velit ex ea cillum ad aliqua minim sit excepteur pariatur cupidatat.",price:"770,000"}];function It(){const i=Math.floor(Math.random()*et.length);return et[i]}const Ot=Bt.map(i=>({...i,name:It(),currency:"£",type:"Freehold",priceType:"Guide Price",bathrooms:2,rooms:3,receptions:1,imageAlt:"House image"}));function Rt(i,t){const e=new CustomEvent("ds-event",{bubbles:!0,composed:!0,detail:i});t.dispatchEvent(e)}function Dt(i,t){return new Intl.NumberFormat("en-GB",{style:"currency",currency:t,minimumFractionDigits:0,maximumFractionDigits:0}).format(i)}class qt extends m{static get styles(){return[u]}static get properties(){return{items:{type:Array,reflect:!0},limit:{type:Number,reflect:!0},path:{type:String,reflect:!0}}}connectedCallback(){var t;super.connectedCallback(),((t=this.items)==null?void 0:t.length)==0?this.items=[...Ot]:console.log("Items passed",this.items)}constructor(){super(),this.items=[],this.limit=9,this.path=""}render(){var t;return console.log("items: ",this.items),l`<div class="bg-white">
      <div class="mx-auto max-w-4xl lg:max-w-7xl">
        <h2
          class="mb-[var(--margin-bottom)] text-2xl font-bold tracking-tight text-gray-900"
        >
          <slot name="title"></slot>
        </h2>

        <div
          class="mb-[var(--margin-bottom)] grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
        >
          ${((t=this.items)==null?void 0:t.length)>0?this.items.slice(0,this.limit).map(e=>l` <div
                  key="${e.key}"
                  class="group relative mx-auto mb-6 max-w-[70rem]"
                >
                  <div
                    class="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 transition-all duration-300 group-hover:opacity-75 lg:h-80"
                  >
                    <img
                      src="${e.images[0].url}"
                      alt="${e.images[0].name}"
                      class="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    />
                  </div>
                  <div class="mt-4 flex justify-between">
                    <div>
                      <h3 class="text-sm text-gray-700">
                        <a href="${this.path}${e.key}">
                          <span
                            aria-hidden="true"
                            class="absolute inset-0"
                          ></span>
                          ${e.title}
                        </a>
                      </h3>
                      <p class="mt-1 line-clamp-2 text-sm text-gray-500">
                        ${e.description}
                      </p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">
                      ${Dt(e.guidePrice,e.guidePriceCurrency.code)}
                    </p>
                  </div>
                </div>`):"No results"}
        </div>
      </div>
    </div> `}}customElements.define("ds-tw-items",qt);class Yt extends m{static get styles(){return[u]}static get properties(){return{hasIcon:{type:Boolean},variant:{type:String},unorderedListElements:{type:Array}}}constructor(){super(),this.hasIcon=!1,this.variant="",this.unorderedListElements=[]}buildUnorderedList(t){const e=t==null?void 0:t.map((r,o)=>o===t.length-1?l`<li class="w-full px-2 py-4">${r}</li>`:l`<li
        class="${o%2===0?"bg-slate-100":""} bg-s w-full border-b-2 border-neutral-100 border-opacity-100 px-2 py-4 dark:border-opacity-50"
      >
        ${r}
      </li>`);return l`<ul class="w-full">
      ${e}
    </ul>`}render(){return this.variant==="description"?l` <div class="relative mb-[var(--margin-bottom)] pl-9">
          <dt class="inline font-semibold text-gray-900">
            <slot name="icon"></slot>
            <slot name="title"></slot>
          </dt>
          <dd class="inline">
            <slot name="body"></slot>
          </dd>
        </div>`:this.buildUnorderedList(this.unorderedListElements)}}customElements.define("ds-tw-list",Yt);const Ft=N`
  .join {
    display: inline-flex;
    align-items: stretch;
    border-radius: var(0.5rem);
  }

  .join .join-item:first-child:not(:last-child),
  .join *:first-child:not(:last-child) .join-item {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  .join .join-item:last-child:not(:first-child),
  .join *:last-child:not(:first-child) .join-item {
    border-end-start-radius: 0;
    border-start-start-radius: 0;
  }
  .join .join-item:not(:first-child):not(:last-child),
  .join *:not(:first-child):not(:last-child) .join-item {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
    border-end-start-radius: 0;
    border-start-start-radius: 0;
  }

  .select {
    display: inline-flex;
    cursor: pointer;
    -webkit-user-select: none;
    user-select: none;
    -webkit-appearance: none;
    appearance: none;
    height: 3rem;
    min-height: 3rem;
    padding-left: 1rem;
    padding-right: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    line-height: 2;
    border-radius: var(--rounded-btn, 0.5rem);
    border-width: 1px;
    border-color: transparent;
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b1, oklch(var(--b1))) /
      var(--tw-bg-opacity);
    background-image: linear-gradient(45deg, transparent 50%, currentColor 50%),
      linear-gradient(135deg, currentColor 50%, transparent 50%);
    background-position:
      calc(100% - 20px) calc(1px + 50%),
      calc(100% - 16.1px) calc(1px + 50%);
    background-size:
      4px 4px,
      4px 4px;
    background-repeat: no-repeat;
  }

  .select-bordered {
    border-color: var(--fallback-bc, oklch(var(--bc))) / 0.2;
  }

  .join > :where(*:not(:first-child)) {
    margin-top: 0;
    margin-bottom: 0;
    margin-inline-start: -1px;
  }
  .indicator {
    position: relative;
    display: inline-flex;
    width: max-content;
  }
  .indicator :where(.indicator-item) {
    bottom: auto;
    inset-inline-end: 0;
    inset-inline-start: auto;
    top: 0;
    --tw-translate-y: -50%;
    --tw-translate-x: 50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  .indicator :where(.indicator-item) {
    z-index: 1;
    position: absolute;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y))
      rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y))
      scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    white-space: nowrap;
  }

  .badge-secondary {
    --tw-border-opacity: 1;
    border-color: var(--fallback-s, oklch(var(--s))) / var(--tw-border-opacity);
    --tw-bg-opacity: 1;
    background-color: var(--fallback-s, oklch(var(--s))) / var(--tw-bg-opacity);
    --tw-text-opacity: 1;
    color: var(--fallback-sc, oklch(var(--sc))) / var(--tw-text-opacity);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      -webkit-backdrop-filter;
    transition-property: color, background-color, border-color,
      text-decoration-color, fill, stroke, opacity, box-shadow, transform,
      filter, backdrop-filter;
    transition-property:
      color,
      background-color,
      border-color,
      text-decoration-color,
      fill,
      stroke,
      opacity,
      box-shadow,
      transform,
      filter,
      backdrop-filter,
      -webkit-backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 0.2s;
    height: 1.25rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: -moz-fit-content;
    width: fit-content;
    padding-left: 0.563rem;
    padding-right: 0.563rem;
    border-radius: var(--rounded-badge, 1.9rem);
    border-width: 1px;
    --tw-border-opacity: 1;
    border-color: var(--fallback-b2, oklch(var(--b2))) /
      var(--tw-border-opacity);
    --tw-bg-opacity: 1;
    background-color: var(--fallback-b1, oklch(var(--b1))) /
      var(--tw-bg-opacity);
    --tw-text-opacity: 1;
    color: var(--fallback-bc, oklch(var(--bc))) / var(--tw-text-opacity);
  }
`;class Xt extends m{static get styles(){return[Ft,u]}static get properties(){return{label:{type:String},placeholder:{type:String},placeholderMobile:{type:String},redirect:{type:String},buttonText:{type:String},searchQueryParam:{type:String},minSearchTermLength:{type:Number},inputValue:{type:String},variant:{type:String}}}constructor(){super(),this.label="Property Search",this.placeholder="Enter text",this.placeholderMobile="Search",this.redirect="/search",this.buttonText="Search",this.inputValue="",this.searchQueryParam="search",this.minSearchTermLength=3,this.variant="rounded"}handleSearchUrlChange(){if(document.location.href.includes(this.redirect)){const t=window.location.search.split(`${this.searchQueryParam}=`)[1];this.inputValue=t}}connectedCallback(){super.connectedCallback(),window.addEventListener("popstate",this.handleSearchUrlChange.bind(this)),this.handleSearchUrlChange()}handleSearch(t){t.preventDefault();const r=t.target.querySelector("input").value;if(r===""||r.length<this.minSearchTermLength)return;if(Rt({eventName:"search",value:r},this),!document.location.href.includes(this.redirect))document.location.href=this.redirect+`?${this.searchQueryParam}=`+r;else{const a=new URL(location);a.searchParams.set(`${this.searchQueryParam}`,r),history.pushState({},"",a),this.inputValue=r}}applyTheme(){let t=[];return this.variant==="full-width"&&t.push("bg-[var(--search-input-bg)]"),this.variant==="rounded"&&t.push("rounded-xl"),t.join(" ")}isJoined(){if(this.variant==="joined")return"join-item"}render(){return l`<div
      class="${this.applyTheme()} mx-auto mb-[var(--margin-bottom)] max-w-[var(--search-input-max-width)] px-6 py-3 dark:bg-black"
    >
      <form
        @submit=${t=>this.handleSearch(t)}
        name="search"
        class="w-full"
      >
        <label
          for="search"
          class="sr-only mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >${this.label}</label
        >
        <div class="join relative w-full">
          <div
            class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3"
          >
            <svg
              class="h-4 w-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search-input"
            class="${this.isJoined()} mr-6 flex w-1/2 rounded-lg border border-gray-300 bg-gray-50 p-3 ps-10 text-sm text-gray-900 outline-none focus:border-gray-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            placeholder="Search"
            value=${this.inputValue}
            required
          />

          <select
            class="select select-bordered ${this.isJoined()} mr-6 w-1/3 border-gray-300 outline-none focus:ring-gray-500"
          >
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
            <option value="all">All</option>
          </select>

          <div class="indicator w-1/3">
            <!-- <span class="indicator-item badge badge-secondary">new</span> -->

            <button
              type="submit"
              class="btn ${this.isJoined()} bottom-2.5 end-2.5 w-full rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              ${this.buttonText}
            </button>
          </div>
        </div>
      </form>
    </div> `}}customElements.define("ds-tw-search-input",Xt);class Vt extends m{static get styles(){return[u]}static get properties(){return{links:{type:Array,reflect:!0},logoLink:{type:String}}}constructor(){console.log("constructor"),super(),this.opened=!1,this.links=[{name:"Add",href:"#"},{name:"Links",href:"#"},{name:"Array",href:"#"}],this.logoLink="/"}onMenuButtonClick(){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}onMobileMenuLinkClick(t){this.shadowRoot.querySelector("div[role=dialog]").classList.toggle("hidden")}render(){var t,e;return l`
      <nav
        class="relative z-50 mb-[var(--margin-bottom)] flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <a href="${this.logoLink}" class="-m-1.5 p-1.5">
            <slot name="logo"></slot>
          </a>
        </div>
        <!-- Menu toggle -->
        <div class="flex lg:hidden">
          <button
            type="button"
            class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            @click=${this.onMenuButtonClick}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <div class="hidden lg:flex lg:gap-x-12">
          ${(t=this.links)==null?void 0:t.map(r=>l`<a
              href=${r.href}
              class="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-500"
            >
              ${r.name}
            </a>`)}
        </div>
        <div class="hidden lg:flex lg:flex-1 lg:justify-end">
          <slot name="login"></slot>
        </div>
      </nav>
      <!-- Mobile menu, show/hide based on menu open state. -->
      <div
        class="${this.opened?"open":""} hidden"
        role="dialog"
        aria-modal="true"
      >
        <!-- Background backdrop, show/hide based on slide-over state. -->
        <div class="inset-0 z-50"></div>
        <div
          class="fixed inset-y-0 right-0 z-[100] w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div class="flex items-center justify-between">
            <a href="${this.logoLink}" class="-m-1.5 p-1.5">
              <slot name="logoMobile"></slot>
            </a>
            <button
              type="button"
              class="-m-2.5 rounded-md p-2.5 text-gray-700"
              @click=${this.onMenuButtonClick}
            >
              <span class="sr-only">Close menu</span>
              <svg
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div class="mt-6 flow-root">
            <div class="-my-6 divide-y divide-gray-500/10">
              <div class="space-y-2 py-6">
                ${(e=this.links)==null?void 0:e.map(r=>l`
                    <a
                      href=${r.href}
                      class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      @click="${()=>this.onMobileMenuLinkClick(r.href)}"
                    >
                      ${r.name}
                    </a>
                  `)}
              </div>
              <div class="py-6">
                <slot name="login-mobile"></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
    `}}customElements.define("ds-tw-menu",Vt);class Wt extends m{static get styles(){return[u]}static get properties(){return{icon:{type:String},darkMode:{type:Boolean,reflect:!0}}}constructor(){super(),this.darkMode=!1}toggleDarkMode(){return this.darkMode=!this.darkMode,document.documentElement.classList.toggle("dark"),this.darkMode}render(){return l` <button
      @click=${this.toggleDarkMode}
      class="absolute left-16 top-16 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white text-black shadow dark:bg-black dark:text-white"
    >
      ${this.darkMode?l`<slot name="icon-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-8"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                d="M375.7 19.7c-1.5-8-6.9-14.7-14.4-17.8s-16.1-2.2-22.8 2.4L256 61.1 173.5 4.2c-6.7-4.6-15.3-5.5-22.8-2.4s-12.9 9.8-14.4 17.8l-18.1 98.5L19.7 136.3c-8 1.5-14.7 6.9-17.8 14.4s-2.2 16.1 2.4 22.8L61.1 256 4.2 338.5c-4.6 6.7-5.5 15.3-2.4 22.8s9.8 13 17.8 14.4l98.5 18.1 18.1 98.5c1.5 8 6.9 14.7 14.4 17.8s16.1 2.2 22.8-2.4L256 450.9l82.5 56.9c6.7 4.6 15.3 5.5 22.8 2.4s12.9-9.8 14.4-17.8l18.1-98.5 98.5-18.1c8-1.5 14.7-6.9 17.8-14.4s2.2-16.1-2.4-22.8L450.9 256l56.9-82.5c4.6-6.7 5.5-15.3 2.4-22.8s-9.8-12.9-17.8-14.4l-98.5-18.1L375.7 19.7zM269.6 110l65.6-45.2 14.4 78.3c1.8 9.8 9.5 17.5 19.3 19.3l78.3 14.4L402 242.4c-5.7 8.2-5.7 19 0 27.2l45.2 65.6-78.3 14.4c-9.8 1.8-17.5 9.5-19.3 19.3l-14.4 78.3L269.6 402c-8.2-5.7-19-5.7-27.2 0l-65.6 45.2-14.4-78.3c-1.8-9.8-9.5-17.5-19.3-19.3L64.8 335.2 110 269.6c5.7-8.2 5.7-19 0-27.2L64.8 176.8l78.3-14.4c9.8-1.8 17.5-9.5 19.3-19.3l14.4-78.3L242.4 110c8.2 5.7 19 5.7 27.2 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224zM192 256a64 64 0 1 1 128 0 64 64 0 1 1 -128 0z"
              />
            </svg>
          </slot>`:l` <slot name="icon-dark"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              class="w-8"
            >
              <!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                class="h-16 w-16"
                d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"
              />
            </svg>
          </slot>`}
    </button>`}}customElements.define("ds-tw-darkmode",Wt);
