import{$ as ct,A as ee,Aa as v,B as A,Ba as ve,C as m,Ca as ye,D as b,Da as X,E as y,Ea as kt,F as u,Fa as _e,G as l,H as V,I as ne,J as wt,K as B,L as rt,M as ae,N as h,O as It,P as $,Q as oe,R as st,S as ie,T as x,U as Et,V as W,W as re,X as Y,Y as K,Z,_ as se,a as D,aa as k,b as at,ba as ce,ca as M,d as yt,da as f,e as U,ea as C,f as $t,fa as de,g as Wt,ga as dt,h as ot,ha as lt,i as Yt,ia as w,j as g,ja as I,k as Kt,ka as mt,l as it,la as G,m as _t,ma as F,n as H,na as le,o as xt,oa as me,p as j,pa as q,q as O,qa as ut,r as Zt,ra as ue,s as E,sa as pe,t as Gt,ta as be,u as qt,ua as fe,v as Xt,va as Mt,w as Qt,wa as Dt,x as Jt,xa as At,y as R,ya as he,z as te,za as ge}from"./chunk-HZPJ4MTP.js";var Tt=class extends ge{supportsDOMEvents=!0},St=class n extends Tt{static makeCurrent(){he(new n)}onAndCancel(a,t,e){return a.addEventListener(t,e),()=>{a.removeEventListener(t,e)}}dispatchEvent(a,t){a.dispatchEvent(t)}remove(a){a.remove()}createElement(a,t){return t=t||this.getDefaultDocument(),t.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,t){return t==="window"?window:t==="document"?a:t==="body"?a.body:null}getBaseHref(a){let t=Je();return t==null?null:tn(t)}resetBaseElement(){Q=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return ve(document.cookie,a)}},Q=null;function Je(){return Q=Q||document.querySelector("base"),Q?Q.getAttribute("href"):null}function tn(n){return new URL(n,document.baseURI).pathname}var en=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Ot=new y(""),Me=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,e,o){return this._findPluginFor(e).addEventListener(t,e,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(i=>i.supports(t)),!e)throw new A(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(u(Ot),u(h))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),pt=class{_doc;constructor(a){this._doc=a}manager},Rt="ng-app-id";function xe(n){for(let a of n)a.remove()}function we(n,a){let t=a.createElement("style");return t.textContent=n,t}function nn(n,a,t){let e=n.head?.querySelectorAll(`style[${Rt}="${a}"]`);if(e)for(let o of e)o.textContent&&(o.removeAttribute(Rt),t.set(o.textContent,{usage:0,elements:[o]}))}function Ft(n,a){let t=a.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var De=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,e,o,i={}){this.doc=t,this.appId=e,this.nonce=o,this.isServer=kt(i),nn(t,e,this.inline),this.hosts.add(t.head)}addStyles(t,e){for(let o of t)this.addUsage(o,this.inline,we);e?.forEach(o=>this.addUsage(o,this.external,Ft))}removeStyles(t,e){for(let o of t)this.removeUsage(o,this.inline);e?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,e,o){let i=e.get(t);i?i.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(t,this.doc)))})}removeUsage(t,e){let o=e.get(t);o&&(o.usage--,o.usage<=0&&(xe(o.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])xe(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:o}]of this.inline)o.push(this.addElement(t,we(e,this.doc)));for(let[e,{elements:o}]of this.external)o.push(this.addElement(t,Ft(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),this.isServer&&e.setAttribute(Rt,this.appId),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(u(v),u(st),u(W,8),u(x))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Ct={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Lt=/%COMP%/g,Ae="%COMP%",an=`_nghost-${Ae}`,on=`_ngcontent-${Ae}`,rn=!0,sn=new y("",{providedIn:"root",factory:()=>rn});function cn(n){return on.replace(Lt,n)}function dn(n){return an.replace(Lt,n)}function ke(n,a){return a.map(t=>t.replace(Lt,n))}var bt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,e,o,i,r,s,c,d=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=r,this.platformId=s,this.ngZone=c,this.nonce=d,this.platformIsServer=kt(s),this.defaultRenderer=new J(t,r,c,this.platformIsServer)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;this.platformIsServer&&e.encapsulation===Y.ShadowDom&&(e=at(D({},e),{encapsulation:Y.Emulated}));let o=this.getOrCreateRenderer(t,e);return o instanceof ft?o.applyToHost(t):o instanceof tt&&o.applyStyles(),o}getOrCreateRenderer(t,e){let o=this.rendererByCompId,i=o.get(e.id);if(!i){let r=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,S=this.platformIsServer;switch(e.encapsulation){case Y.Emulated:i=new ft(c,d,e,this.appId,p,r,s,S);break;case Y.ShadowDom:return new Nt(c,d,t,e,r,s,this.nonce,S);default:i=new tt(c,d,e,p,r,s,S);break}o.set(e.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(e){return new(e||n)(u(Me),u(De),u(st),u(sn),u(v),u(x),u(h),u(W))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),J=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(a,t,e,o){this.eventManager=a,this.doc=t,this.ngZone=e,this.platformIsServer=o}destroy(){}destroyNode=null;createElement(a,t){return t?this.doc.createElementNS(Ct[t]||t,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,t){(Ie(a)?a.content:a).appendChild(t)}insertBefore(a,t,e){a&&(Ie(a)?a.content:a).insertBefore(t,e)}removeChild(a,t){t.remove()}selectRootElement(a,t){let e=typeof a=="string"?this.doc.querySelector(a):a;if(!e)throw new A(-5104,!1);return t||(e.textContent=""),e}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,t,e,o){if(o){t=o+":"+t;let i=Ct[o];i?a.setAttributeNS(i,t,e):a.setAttribute(t,e)}else a.setAttribute(t,e)}removeAttribute(a,t,e){if(e){let o=Ct[e];o?a.removeAttributeNS(o,t):a.removeAttribute(`${e}:${t}`)}else a.removeAttribute(t)}addClass(a,t){a.classList.add(t)}removeClass(a,t){a.classList.remove(t)}setStyle(a,t,e,o){o&(K.DashCase|K.Important)?a.style.setProperty(t,e,o&K.Important?"important":""):a.style[t]=e}removeStyle(a,t,e){e&K.DashCase?a.style.removeProperty(t):a.style[t]=""}setProperty(a,t,e){a!=null&&(a[t]=e)}setValue(a,t){a.nodeValue=t}listen(a,t,e){if(typeof a=="string"&&(a=At().getGlobalEventTarget(this.doc,a),!a))throw new Error(`Unsupported event target ${a} for event ${t}`);return this.eventManager.addEventListener(a,t,this.decoratePreventDefault(e))}decoratePreventDefault(a){return t=>{if(t==="__ngUnwrap__")return a;(this.platformIsServer?this.ngZone.runGuarded(()=>a(t)):a(t))===!1&&t.preventDefault()}}};function Ie(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Nt=class extends J{sharedStylesHost;hostEl;shadowRoot;constructor(a,t,e,o,i,r,s,c){super(a,i,r,c),this.sharedStylesHost=t,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=ke(o.id,o.styles);for(let S of d){let P=document.createElement("style");s&&P.setAttribute("nonce",s),P.textContent=S,this.shadowRoot.appendChild(P)}let p=o.getExternalStyles?.();if(p)for(let S of p){let P=Ft(S,i);s&&P.setAttribute("nonce",s),this.shadowRoot.appendChild(P)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,t){return super.appendChild(this.nodeOrShadowRoot(a),t)}insertBefore(a,t,e){return super.insertBefore(this.nodeOrShadowRoot(a),t,e)}removeChild(a,t){return super.removeChild(null,t)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},tt=class extends J{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(a,t,e,o,i,r,s,c){super(a,i,r,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o,this.styles=c?ke(c,e.styles):e.styles,this.styleUrls=e.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},ft=class extends tt{contentAttr;hostAttr;constructor(a,t,e,o,i,r,s,c){let d=o+"-"+e.id;super(a,t,e,i,r,s,c,d),this.contentAttr=cn(d),this.hostAttr=dn(d)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,"")}createElement(a,t){let e=super.createElement(a,t);return super.setAttribute(e,this.contentAttr,""),e}},ln=(()=>{class n extends pt{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,o){return t.addEventListener(e,o,!1),()=>this.removeEventListener(t,e,o)}removeEventListener(t,e,o){return t.removeEventListener(e,o)}static \u0275fac=function(e){return new(e||n)(u(v))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Ee=["alt","control","meta","shift"],mn={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},un={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},pn=(()=>{class n extends pt{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,o){let i=n.parseEventName(e),r=n.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>At().onAndCancel(t,i.domEventName,r))}static parseEventName(t){let e=t.toLowerCase().split("."),o=e.shift();if(e.length===0||!(o==="keydown"||o==="keyup"))return null;let i=n._normalizeKey(e.pop()),r="",s=e.indexOf("code");if(s>-1&&(e.splice(s,1),r="code."),Ee.forEach(d=>{let p=e.indexOf(d);p>-1&&(e.splice(p,1),r+=d+".")}),r+=i,e.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=r,c}static matchEventFullKeyCode(t,e){let o=mn[t.key]||t.key,i="";return e.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),Ee.forEach(r=>{if(r!==o){let s=un[r];s(t)&&(i+=r+".")}}),i+=o,i===e)}static eventCallback(t,e,o){return i=>{n.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>e(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(u(v))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();function Ce(n,a){return be(D({rootComponent:n},bn(a)))}function bn(n){return{appProviders:[...yn,...n?.providers??[]],platformProviders:vn}}function fn(){St.makeCurrent()}function hn(){return new It}function gn(){return oe(document),document}var vn=[{provide:x,useValue:ye},{provide:ie,useValue:fn,multi:!0},{provide:v,useFactory:gn,deps:[]}];var yn=[{provide:ne,useValue:"root"},{provide:It,useFactory:hn,deps:[]},{provide:Ot,useClass:ln,multi:!0,deps:[v,h,x]},{provide:Ot,useClass:pn,multi:!0,deps:[v]},bt,De,Me,{provide:ct,useExisting:bt},{provide:_e,useClass:en,deps:[]},[]];var nt="Service workers are disabled or not supported by this browser";function _n(n){return _t(()=>Yt(new Error(n)))}var z=class{serviceWorker;worker;registration;events;constructor(a){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=_n(nt);else{let e=H(a,"controllerchange").pipe(g(()=>a.controller)),o=_t(()=>ot(a.controller)),i=it(o,e);this.worker=i.pipe(O(p=>!!p)),this.registration=this.worker.pipe(R(()=>a.getRegistration()));let d=H(a,"message").pipe(g(p=>p.data)).pipe(O(p=>p&&p.type)).pipe(Xt());d.connect(),this.events=d}}postMessage(a,t){return this.worker.pipe(E(1),ee(e=>{e.postMessage(D({action:a},t))})).toPromise().then(()=>{})}postMessageWithOperation(a,t,e){let o=this.waitForOperationCompleted(e),i=this.postMessage(a,t);return Promise.all([i,o]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let t;return typeof a=="string"?t=e=>e.type===a:t=e=>a.includes(e.type),this.events.pipe(O(t))}nextEventOfType(a){return this.eventsOfType(a).pipe(E(1))}waitForOperationCompleted(a){return this.eventsOfType("OPERATION_COMPLETED").pipe(O(t=>t.nonce===a),E(1),g(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},xn=(()=>{class n{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new U;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=j,this.notificationClicks=j,this.subscription=j;return}this.messages=this.sw.eventsOfType("PUSH").pipe(g(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(g(o=>o.data)),this.pushManager=this.sw.registration.pipe(g(o=>o.pushManager));let e=this.pushManager.pipe(R(o=>o.getSubscription()));this.subscription=xt(e,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(nt));let e={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),i=new Uint8Array(new ArrayBuffer(o.length));for(let r=0;r<o.length;r++)i[r]=o.charCodeAt(r);return e.applicationServerKey=i,this.pushManager.pipe(R(r=>r.subscribe(e)),E(1)).toPromise().then(r=>(this.subscriptionChanges.next(r),r))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(nt));let t=e=>{if(e===null)throw new Error("Not subscribed to push notifications.");return e.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(E(1),R(t)).toPromise()}decodeBase64(t){return atob(t)}static \u0275fac=function(e){return new(e||n)(u(z))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),wn=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=j,this.unrecoverable=j;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(nt));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(nt));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(e){return new(e||n)(u(z))};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})();var Te=new y("");function In(n,a,t,e){return()=>{if(!(X(e)&&"serviceWorker"in navigator&&t.enabled!==!1))return;let o=n.get(h),i=n.get(dt);o.runOutsideAngular(()=>{let s=navigator.serviceWorker,c=()=>s.controller?.postMessage({action:"INITIALIZE"});s.addEventListener("controllerchange",c),i.onDestroy(()=>{s.removeEventListener("controllerchange",c)})});let r;if(typeof t.registrationStrategy=="function")r=t.registrationStrategy();else{let[s,...c]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=ot(null);break;case"registerWithDelay":r=Se(+c[0]||0);break;case"registerWhenStable":let d=Wt(n.get(dt).whenStable());r=c[0]?xt(d,Se(+c[0])):d;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}o.runOutsideAngular(()=>r.pipe(E(1)).subscribe(()=>navigator.serviceWorker.register(a,{scope:t.scope}).catch(s=>console.error("Service worker registration failed with:",s))))}}function Se(n){return ot(null).pipe(Gt(n))}function En(n,a){return new z(X(a)&&n.enabled!==!1?navigator.serviceWorker:void 0)}var et=class{enabled;scope;registrationStrategy};function Oe(n,a={}){return V([xn,wn,{provide:Te,useValue:n},{provide:et,useValue:a},{provide:z,useFactory:En,deps:[et,x]},{provide:de,useFactory:In,deps:[B,Te,et,x],multi:!0}])}var Mn="@",Dn=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=l(ae,{optional:!0});loadingSchedulerFn=l(An,{optional:!0});_engine;constructor(t,e,o,i,r){this.doc=t,this.delegate=e,this.zone=o,this.animationType=i,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-EKNTHCI4.js").then(o=>o),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(o=>{throw new A(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let r=new i(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,e){let o=this.delegate.createRenderer(t,e);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new Pt(o);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let s=r.createRenderer(t,e);i.use(s),this.scheduler?.notify(11)}).catch(r=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(e){se()};static \u0275prov=m({token:n,factory:n.\u0275fac})}return n})(),Pt=class{delegate;replay=[];\u0275type=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let t of this.replay)t(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,t){return this.delegate.createElement(a,t)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,t){this.delegate.appendChild(a,t)}insertBefore(a,t,e,o){this.delegate.insertBefore(a,t,e,o)}removeChild(a,t,e){this.delegate.removeChild(a,t,e)}selectRootElement(a,t){return this.delegate.selectRootElement(a,t)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,t,e,o){this.delegate.setAttribute(a,t,e,o)}removeAttribute(a,t,e){this.delegate.removeAttribute(a,t,e)}addClass(a,t){this.delegate.addClass(a,t)}removeClass(a,t){this.delegate.removeClass(a,t)}setStyle(a,t,e,o){this.delegate.setStyle(a,t,e,o)}removeStyle(a,t,e){this.delegate.removeStyle(a,t,e)}setProperty(a,t,e){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(a,t,e)),this.delegate.setProperty(a,t,e)}setValue(a,t){this.delegate.setValue(a,t)}listen(a,t,e){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(a,t,e)),this.delegate.listen(a,t,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(Mn)}},An=new y("");function Re(n="animations"){return re("NgAsyncAnimations"),V([{provide:ct,useFactory:(a,t,e)=>new Dn(a,t,e,n),deps:[v,bt,h]},{provide:Et,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var Fe={providers:[ue({eventCoalescing:!0}),Oe("ngsw-worker.js",{enabled:!pe(),registrationStrategy:"registerWhenStable:30000"}),Re()]};function jt(n,a){!a?.injector&&wt(jt);let t=a?.injector??l(B),e=new $t(1),o=Dt(()=>{let i;try{i=n()}catch(r){Mt(()=>e.error(r));return}Mt(()=>e.next(i))},{injector:t,manualCleanup:!0});return t.get(rt).onDestroy(()=>{o.destroy(),e.complete()}),e.asObservable()}function Bt(n,a){let t=!a?.manualCleanup;t&&!a?.injector&&wt(Bt);let e=t?a?.injector?.get(rt)??l(rt):null,o=kn(a?.equal),i;a?.requireSync?i=k({kind:0},{equal:o}):i=k({kind:1,value:a?.initialValue},{equal:o});let r=n.subscribe({next:s=>i.set({kind:1,value:s}),error:s=>{if(a?.rejectErrors)throw s;i.set({kind:2,error:s})}});if(a?.requireSync&&i().kind===0)throw new A(601,!1);return e?.onDestroy(r.unsubscribe.bind(r)),fe(()=>{let s=i();switch(s.kind){case 1:return s.value;case 2:throw s.error;case 0:throw new A(601,!1)}},{equal:a?.equal})}function kn(n=Object.is){return(a,t)=>a.kind===1&&t.kind===1&&n(a.value,t.value)}var zt;try{zt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{zt=!1}var ht=(()=>{class n{_platformId=l(x);isBrowser=this._platformId?X(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||zt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ut(n){return Array.isArray(n)?n:[n]}var Ne=new Set,N,Cn=(()=>{class n{_platform=l(ht);_nonce=l(W,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):Sn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&Tn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Tn(n,a){if(!Ne.has(n))try{N||(N=document.createElement("style"),a&&N.setAttribute("nonce",a),N.setAttribute("type","text/css"),document.head.appendChild(N)),N.sheet&&(N.sheet.insertRule(`@media ${n} {body{ }}`,0),Ne.add(n))}catch(t){console.error(t)}}function Sn(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Pe=(()=>{class n{_mediaMatcher=l(Cn);_zone=l(h);_queries=new Map;_destroySubject=new U;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Le(Ut(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Le(Ut(t)).map(r=>this._registerQuery(r).observable),i=Kt(o);return i=it(i.pipe(E(1)),i.pipe(Qt(1),Zt(0))),i.pipe(g(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new yt(r=>{let s=c=>this._zone.run(()=>r.next(c));return e.addListener(s),()=>{e.removeListener(s)}}).pipe(Jt(e),g(({matches:r})=>({query:t,matches:r})),te(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Le(n){return n.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var L=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(L||{}),je="cdk-high-contrast-black-on-white",Be="cdk-high-contrast-white-on-black",Ht="cdk-high-contrast-active",Ue=(()=>{class n{_platform=l(ht);_hasCheckedHighContrastMode;_document=l(v);_breakpointSubscription;constructor(){this._breakpointSubscription=l(Pe).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return L.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return L.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return L.BLACK_ON_WHITE}return L.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ht,je,Be),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===L.BLACK_ON_WHITE?t.add(Ht,je):e===L.WHITE_ON_BLACK&&t.add(Ht,Be)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=m({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Vt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({})}return n})();var T=(()=>{class n{constructor(){l(Ue)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[Vt,Vt]})}return n})();var Ve=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[T,T]})}return n})();var $e=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[T,Ve,T]})}return n})();var Ln=["*"];var Pn=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],jn=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Bn=new y("MAT_CARD_CONFIG"),We=(()=>{class n{appearance;constructor(){let t=l(Bn,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(e,o){e&2&&lt("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:Ln,decls:1,vars:0,template:function(e,o){e&1&&(G(),F(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return n})(),Ye=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Ke=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Ze=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=C({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var Ge=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:jn,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(G(Pn),F(0),w(1,"div",0),F(2,1),I(),F(3,2))},encapsulation:2,changeDetection:0})}return n})();var qe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[T,T]})}return n})();var gt=class n{title=k("\u041D\u0430\u0434\u043C\u0456\u0440\u043D\u0435 \u0443\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0435\u043D\u043D\u044F");details=k("\u041F\u043E\u0433\u043B\u044F\u0434 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0443 \u043F\u043E\u0434\u0456\u044E \u044F\u043A \u043D\u0430 \u043E\u0437\u043D\u0430\u043A\u0443 \u0442\u043E\u0433\u043E, \u0449\u043E \u0432\u0441\u0435 \u043F\u043E\u0433\u0430\u043D\u043E.");example=k("\u041F\u0440\u0438\u043A\u043B\u0430\u0434: \u042F \u043F\u0440\u043E\u0432\u0430\u043B\u0438\u0432 \u0456\u043D\u0442\u0435\u0440\u0432'\u044E, \u044F \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0443 \u0440\u043E\u0431\u043E\u0442\u0438. \u0426\u0456 \u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0438 \u043D\u0435\u0432\u0434\u0430\u043B\u0456, \u044F \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0443 \u0441\u0443\u043F\u0443\u0442\u043D\u0438\u043A\u0430 \u0436\u0438\u0442\u0442\u044F. \u0412\u043E\u043D\u0430 \u043C\u0435\u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u0437\u0438\u043B\u0430, \u044F \u043D\u0435 \u043C\u043E\u0436\u0443 \u043D\u0456\u043A\u043E\u043C\u0443 \u0434\u043E\u0432\u0456\u0440\u044F\u0442\u0438");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-distortion-card"]],decls:8,vars:3,consts:[["appearance","outlined"]],template:function(t,e){t&1&&(w(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),q(3),I(),w(4,"mat-card-subtitle"),q(5),I()(),w(6,"mat-card-content"),q(7),I()()),t&2&&(Z(3),ut(e.title()),Z(2),ut(e.details()),Z(2),ut(e.example()))},dependencies:[qe,We,Ke,Ge,Ze,Ye],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var Hn=["btn"],vt=class n{title="username";btnRef=ce("btn",{read:$});dominanceAsserted=this.getData();getData(){let a=jt(this.btnRef).pipe(O(t=>!!t),R(t=>H(t.nativeElement,"click")),qt(),g(()=>"TRUE"));return Bt(a,{initialValue:"FALSE"})}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-root"]],viewQuery:function(t,e){t&1&&le(e.btnRef,Hn,5,$),t&2&&me()},decls:2,vars:0,consts:[[1,"main"]],template:function(t,e){t&1&&(w(0,"main",0),mt(1,"app-distortion-card"),I())},dependencies:[$e,gt],styles:['[_nghost-%COMP%]{--bright-blue: oklch(51.01% .274 263.83);--electric-violet: oklch(53.18% .28 296.97);--french-violet: oklch(47.66% .246 305.88);--vivid-pink: oklch(69.02% .277 332.77);--hot-red: oklch(61.42% .238 15.34);--orange-red: oklch(63.32% .24 31.68);--gray-900: oklch(19.37% .006 300.98);--gray-700: oklch(36.98% .014 302.71);--gray-400: oklch(70.9% .015 304.04);--red-to-pink-to-purple-vertical-gradient: linear-gradient( 180deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--red-to-pink-to-purple-horizontal-gradient: linear-gradient( 90deg, var(--orange-red) 0%, var(--vivid-pink) 50%, var(--electric-violet) 100% );--pill-accent: var(--bright-blue);font-family:Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol;box-sizing:border-box;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}h1[_ngcontent-%COMP%]{font-size:3.125rem;color:var(--gray-900);font-weight:500;line-height:100%;letter-spacing:-.125rem;margin:0;font-family:Inter Tight,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol}p[_ngcontent-%COMP%]{margin:0;color:var(--gray-700)}main[_ngcontent-%COMP%]{width:100%;min-height:100%;display:flex;justify-content:center;align-items:center;padding:1rem;box-sizing:inherit;position:relative}.angular-logo[_ngcontent-%COMP%]{max-width:9.2rem}.content[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:100%;max-width:700px;margin-bottom:3rem}.content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-top:1.75rem}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:1.5rem}.divider[_ngcontent-%COMP%]{width:1px;background:var(--red-to-pink-to-purple-vertical-gradient);margin-inline:.5rem}.pill-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:start;flex-wrap:wrap;gap:1.25rem}.pill[_ngcontent-%COMP%]{display:flex;align-items:center;--pill-accent: var(--bright-blue);background:color-mix(in srgb,var(--pill-accent) 5%,transparent);color:var(--pill-accent);padding-inline:.75rem;padding-block:.375rem;border-radius:2.75rem;border:0;transition:background .3s ease;font-family:var(--inter-font);font-size:.875rem;font-style:normal;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem;text-decoration:none}.pill[_ngcontent-%COMP%]:hover{background:color-mix(in srgb,var(--pill-accent) 15%,transparent)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+1){--pill-accent: var(--bright-blue)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+2){--pill-accent: var(--french-violet)}.pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+3), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+4), .pill-group[_ngcontent-%COMP%]   .pill[_ngcontent-%COMP%]:nth-child(6n+5){--pill-accent: var(--hot-red)}.pill-group[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{margin-inline-start:.25rem}.social-links[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.73rem;margin-top:1.5rem}.social-links[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{transition:fill .3s ease;fill:var(--gray-400)}.social-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover   svg[_ngcontent-%COMP%]   path[_ngcontent-%COMP%]{fill:var(--gray-900)}@media screen and (max-width: 650px){.content[_ngcontent-%COMP%]{flex-direction:column;width:max-content}.divider[_ngcontent-%COMP%]{height:1px;width:100%;background:var(--red-to-pink-to-purple-horizontal-gradient);margin-block:1.5rem}}']})};Ce(vt,Fe).catch(n=>console.error(n));
