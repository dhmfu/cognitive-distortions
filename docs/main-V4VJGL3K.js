import{$ as Jt,A as l,B as b,C as v,D as m,E as u,F as B,G as Kt,H as nt,I as Zt,J as h,K as yt,L as Gt,M as at,N as Xt,O as x,P as _t,Q as z,R as qt,S as H,T as U,U as V,V as Qt,W as ot,X as $,Y as M,Z as f,_ as D,a as C,aa as it,b as ft,ba as rt,ca as w,d as Lt,da as I,e as J,ea as st,f as Pt,fa as W,g as tt,ga as T,h as jt,ha as Y,i as _,ia as ct,j as Bt,ja as te,k as et,ka as ee,l as ht,la as ne,m as gt,ma as xt,n as vt,na as ae,o as F,oa as oe,p as L,pa as g,q as zt,qa as ie,r as E,ra as re,s as Ht,sa as K,t as Ut,ta as wt,u as Vt,ua as se,v as $t,w as P,x as Wt,y as Yt,z as j}from"./chunk-JMOUXEWV.js";var Et=class extends oe{supportsDOMEvents=!0},Mt=class n extends Et{static makeCurrent(){ae(new n)}onAndCancel(a,t,e){return a.addEventListener(t,e),()=>{a.removeEventListener(t,e)}}dispatchEvent(a,t){a.dispatchEvent(t)}remove(a){a.remove()}createElement(a,t){return t=t||this.getDefaultDocument(),t.createElement(a)}createHtmlDocument(){return document.implementation.createHTMLDocument("fakeTitle")}getDefaultDocument(){return document}isElementNode(a){return a.nodeType===Node.ELEMENT_NODE}isShadowRoot(a){return a instanceof DocumentFragment}getGlobalEventTarget(a,t){return t==="window"?window:t==="document"?a:t==="body"?a.body:null}getBaseHref(a){let t=ze();return t==null?null:He(t)}resetBaseElement(){Z=null}getUserAgent(){return window.navigator.userAgent}getCookie(a){return ie(document.cookie,a)}},Z=null;function ze(){return Z=Z||document.querySelector("base"),Z?Z.getAttribute("href"):null}function He(n){return new URL(n,document.baseURI).pathname}var Ue=(()=>{class n{build(){return new XMLHttpRequest}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),Dt=new v(""),ue=(()=>{class n{_zone;_plugins;_eventNameToPlugin=new Map;constructor(t,e){this._zone=e,t.forEach(o=>{o.manager=this}),this._plugins=t.slice().reverse()}addEventListener(t,e,o){return this._findPluginFor(e).addEventListener(t,e,o)}getZone(){return this._zone}_findPluginFor(t){let e=this._eventNameToPlugin.get(t);if(e)return e;if(e=this._plugins.find(i=>i.supports(t)),!e)throw new j(5101,!1);return this._eventNameToPlugin.set(t,e),e}static \u0275fac=function(e){return new(e||n)(m(Dt),m(h))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),dt=class{_doc;constructor(a){this._doc=a}manager},At="ng-app-id";function ce(n){for(let a of n)a.remove()}function de(n,a){let t=a.createElement("style");return t.textContent=n,t}function Ve(n,a,t){let e=n.head?.querySelectorAll(`style[${At}="${a}"]`);if(e)for(let o of e)o.textContent&&(o.removeAttribute(At),t.set(o.textContent,{usage:0,elements:[o]}))}function kt(n,a){let t=a.createElement("link");return t.setAttribute("rel","stylesheet"),t.setAttribute("href",n),t}var pe=(()=>{class n{doc;appId;nonce;inline=new Map;external=new Map;hosts=new Set;isServer;constructor(t,e,o,i={}){this.doc=t,this.appId=e,this.nonce=o,this.isServer=wt(i),Ve(t,e,this.inline),this.hosts.add(t.head)}addStyles(t,e){for(let o of t)this.addUsage(o,this.inline,de);e?.forEach(o=>this.addUsage(o,this.external,kt))}removeStyles(t,e){for(let o of t)this.removeUsage(o,this.inline);e?.forEach(o=>this.removeUsage(o,this.external))}addUsage(t,e,o){let i=e.get(t);i?i.usage++:e.set(t,{usage:1,elements:[...this.hosts].map(r=>this.addElement(r,o(t,this.doc)))})}removeUsage(t,e){let o=e.get(t);o&&(o.usage--,o.usage<=0&&(ce(o.elements),e.delete(t)))}ngOnDestroy(){for(let[,{elements:t}]of[...this.inline,...this.external])ce(t);this.hosts.clear()}addHost(t){this.hosts.add(t);for(let[e,{elements:o}]of this.inline)o.push(this.addElement(t,de(e,this.doc)));for(let[e,{elements:o}]of this.external)o.push(this.addElement(t,kt(e,this.doc)))}removeHost(t){this.hosts.delete(t)}addElement(t,e){return this.nonce&&e.setAttribute("nonce",this.nonce),this.isServer&&e.setAttribute(At,this.appId),t.appendChild(e)}static \u0275fac=function(e){return new(e||n)(m(g),m(at),m(z,8),m(x))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),It={svg:"http://www.w3.org/2000/svg",xhtml:"http://www.w3.org/1999/xhtml",xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/",math:"http://www.w3.org/1998/Math/MathML"},Tt=/%COMP%/g,be="%COMP%",$e=`_nghost-${be}`,We=`_ngcontent-${be}`,Ye=!0,Ke=new v("",{providedIn:"root",factory:()=>Ye});function Ze(n){return We.replace(Tt,n)}function Ge(n){return $e.replace(Tt,n)}function fe(n,a){return a.map(t=>t.replace(Tt,n))}var lt=(()=>{class n{eventManager;sharedStylesHost;appId;removeStylesOnCompDestroy;doc;platformId;ngZone;nonce;rendererByCompId=new Map;defaultRenderer;platformIsServer;constructor(t,e,o,i,r,s,c,d=null){this.eventManager=t,this.sharedStylesHost=e,this.appId=o,this.removeStylesOnCompDestroy=i,this.doc=r,this.platformId=s,this.ngZone=c,this.nonce=d,this.platformIsServer=wt(s),this.defaultRenderer=new G(t,r,c,this.platformIsServer)}createRenderer(t,e){if(!t||!e)return this.defaultRenderer;this.platformIsServer&&e.encapsulation===H.ShadowDom&&(e=ft(C({},e),{encapsulation:H.Emulated}));let o=this.getOrCreateRenderer(t,e);return o instanceof mt?o.applyToHost(t):o instanceof X&&o.applyStyles(),o}getOrCreateRenderer(t,e){let o=this.rendererByCompId,i=o.get(e.id);if(!i){let r=this.doc,s=this.ngZone,c=this.eventManager,d=this.sharedStylesHost,p=this.removeStylesOnCompDestroy,k=this.platformIsServer;switch(e.encapsulation){case H.Emulated:i=new mt(c,d,e,this.appId,p,r,s,k);break;case H.ShadowDom:return new Ct(c,d,t,e,r,s,this.nonce,k);default:i=new X(c,d,e,p,r,s,k);break}o.set(e.id,i)}return i}ngOnDestroy(){this.rendererByCompId.clear()}static \u0275fac=function(e){return new(e||n)(m(ue),m(pe),m(at),m(Ke),m(g),m(x),m(h),m(z))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),G=class{eventManager;doc;ngZone;platformIsServer;data=Object.create(null);throwOnSyntheticProps=!0;constructor(a,t,e,o){this.eventManager=a,this.doc=t,this.ngZone=e,this.platformIsServer=o}destroy(){}destroyNode=null;createElement(a,t){return t?this.doc.createElementNS(It[t]||t,a):this.doc.createElement(a)}createComment(a){return this.doc.createComment(a)}createText(a){return this.doc.createTextNode(a)}appendChild(a,t){(le(a)?a.content:a).appendChild(t)}insertBefore(a,t,e){a&&(le(a)?a.content:a).insertBefore(t,e)}removeChild(a,t){t.remove()}selectRootElement(a,t){let e=typeof a=="string"?this.doc.querySelector(a):a;if(!e)throw new j(-5104,!1);return t||(e.textContent=""),e}parentNode(a){return a.parentNode}nextSibling(a){return a.nextSibling}setAttribute(a,t,e,o){if(o){t=o+":"+t;let i=It[o];i?a.setAttributeNS(i,t,e):a.setAttribute(t,e)}else a.setAttribute(t,e)}removeAttribute(a,t,e){if(e){let o=It[e];o?a.removeAttributeNS(o,t):a.removeAttribute(`${e}:${t}`)}else a.removeAttribute(t)}addClass(a,t){a.classList.add(t)}removeClass(a,t){a.classList.remove(t)}setStyle(a,t,e,o){o&(U.DashCase|U.Important)?a.style.setProperty(t,e,o&U.Important?"important":""):a.style[t]=e}removeStyle(a,t,e){e&U.DashCase?a.style.removeProperty(t):a.style[t]=""}setProperty(a,t,e){a!=null&&(a[t]=e)}setValue(a,t){a.nodeValue=t}listen(a,t,e){if(typeof a=="string"&&(a=xt().getGlobalEventTarget(this.doc,a),!a))throw new Error(`Unsupported event target ${a} for event ${t}`);return this.eventManager.addEventListener(a,t,this.decoratePreventDefault(e))}decoratePreventDefault(a){return t=>{if(t==="__ngUnwrap__")return a;(this.platformIsServer?this.ngZone.runGuarded(()=>a(t)):a(t))===!1&&t.preventDefault()}}};function le(n){return n.tagName==="TEMPLATE"&&n.content!==void 0}var Ct=class extends G{sharedStylesHost;hostEl;shadowRoot;constructor(a,t,e,o,i,r,s,c){super(a,i,r,c),this.sharedStylesHost=t,this.hostEl=e,this.shadowRoot=e.attachShadow({mode:"open"}),this.sharedStylesHost.addHost(this.shadowRoot);let d=fe(o.id,o.styles);for(let k of d){let O=document.createElement("style");s&&O.setAttribute("nonce",s),O.textContent=k,this.shadowRoot.appendChild(O)}let p=o.getExternalStyles?.();if(p)for(let k of p){let O=kt(k,i);s&&O.setAttribute("nonce",s),this.shadowRoot.appendChild(O)}}nodeOrShadowRoot(a){return a===this.hostEl?this.shadowRoot:a}appendChild(a,t){return super.appendChild(this.nodeOrShadowRoot(a),t)}insertBefore(a,t,e){return super.insertBefore(this.nodeOrShadowRoot(a),t,e)}removeChild(a,t){return super.removeChild(null,t)}parentNode(a){return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(a)))}destroy(){this.sharedStylesHost.removeHost(this.shadowRoot)}},X=class extends G{sharedStylesHost;removeStylesOnCompDestroy;styles;styleUrls;constructor(a,t,e,o,i,r,s,c){super(a,i,r,s),this.sharedStylesHost=t,this.removeStylesOnCompDestroy=o,this.styles=c?fe(c,e.styles):e.styles,this.styleUrls=e.getExternalStyles?.(c)}applyStyles(){this.sharedStylesHost.addStyles(this.styles,this.styleUrls)}destroy(){this.removeStylesOnCompDestroy&&this.sharedStylesHost.removeStyles(this.styles,this.styleUrls)}},mt=class extends X{contentAttr;hostAttr;constructor(a,t,e,o,i,r,s,c){let d=o+"-"+e.id;super(a,t,e,i,r,s,c,d),this.contentAttr=Ze(d),this.hostAttr=Ge(d)}applyToHost(a){this.applyStyles(),this.setAttribute(a,this.hostAttr,"")}createElement(a,t){let e=super.createElement(a,t);return super.setAttribute(e,this.contentAttr,""),e}},Xe=(()=>{class n extends dt{constructor(t){super(t)}supports(t){return!0}addEventListener(t,e,o){return t.addEventListener(e,o,!1),()=>this.removeEventListener(t,e,o)}removeEventListener(t,e,o){return t.removeEventListener(e,o)}static \u0275fac=function(e){return new(e||n)(m(g))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),me=["alt","control","meta","shift"],qe={"\b":"Backspace","	":"Tab","\x7F":"Delete","\x1B":"Escape",Del:"Delete",Esc:"Escape",Left:"ArrowLeft",Right:"ArrowRight",Up:"ArrowUp",Down:"ArrowDown",Menu:"ContextMenu",Scroll:"ScrollLock",Win:"OS"},Qe={alt:n=>n.altKey,control:n=>n.ctrlKey,meta:n=>n.metaKey,shift:n=>n.shiftKey},Je=(()=>{class n extends dt{constructor(t){super(t)}supports(t){return n.parseEventName(t)!=null}addEventListener(t,e,o){let i=n.parseEventName(e),r=n.eventCallback(i.fullKey,o,this.manager.getZone());return this.manager.getZone().runOutsideAngular(()=>xt().onAndCancel(t,i.domEventName,r))}static parseEventName(t){let e=t.toLowerCase().split("."),o=e.shift();if(e.length===0||!(o==="keydown"||o==="keyup"))return null;let i=n._normalizeKey(e.pop()),r="",s=e.indexOf("code");if(s>-1&&(e.splice(s,1),r="code."),me.forEach(d=>{let p=e.indexOf(d);p>-1&&(e.splice(p,1),r+=d+".")}),r+=i,e.length!=0||i.length===0)return null;let c={};return c.domEventName=o,c.fullKey=r,c}static matchEventFullKeyCode(t,e){let o=qe[t.key]||t.key,i="";return e.indexOf("code.")>-1&&(o=t.code,i="code."),o==null||!o?!1:(o=o.toLowerCase(),o===" "?o="space":o==="."&&(o="dot"),me.forEach(r=>{if(r!==o){let s=Qe[r];s(t)&&(i+=r+".")}}),i+=o,i===e)}static eventCallback(t,e,o){return i=>{n.matchEventFullKeyCode(i,t)&&o.runGuarded(()=>e(i))}}static _normalizeKey(t){return t==="esc"?"escape":t}static \u0275fac=function(e){return new(e||n)(m(g))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();function he(n,a){return ne(C({rootComponent:n},tn(a)))}function tn(n){return{appProviders:[...rn,...n?.providers??[]],platformProviders:on}}function en(){Mt.makeCurrent()}function nn(){return new yt}function an(){return Gt(document),document}var on=[{provide:x,useValue:re},{provide:Xt,useValue:en,multi:!0},{provide:g,useFactory:an,deps:[]}];var rn=[{provide:Kt,useValue:"root"},{provide:yt,useFactory:nn,deps:[]},{provide:Dt,useClass:Xe,multi:!0,deps:[g,h,x]},{provide:Dt,useClass:Je,multi:!0,deps:[g]},lt,pe,ue,{provide:ot,useExisting:lt},{provide:se,useClass:Ue,deps:[]},[]];var Q="Service workers are disabled or not supported by this browser";function sn(n){return ht(()=>jt(new Error(n)))}var N=class{serviceWorker;worker;registration;events;constructor(a){if(this.serviceWorker=a,!a)this.worker=this.events=this.registration=sn(Q);else{let e=gt(a,"controllerchange").pipe(_(()=>a.controller)),o=ht(()=>tt(a.controller)),i=et(o,e);this.worker=i.pipe(L(p=>!!p)),this.registration=this.worker.pipe(P(()=>a.getRegistration()));let d=gt(a,"message").pipe(_(p=>p.data)).pipe(L(p=>p&&p.type)).pipe(Ut());d.connect(),this.events=d}}postMessage(a,t){return this.worker.pipe(E(1),Yt(e=>{e.postMessage(C({action:a},t))})).toPromise().then(()=>{})}postMessageWithOperation(a,t,e){let o=this.waitForOperationCompleted(e),i=this.postMessage(a,t);return Promise.all([i,o]).then(([,r])=>r)}generateNonce(){return Math.round(Math.random()*1e7)}eventsOfType(a){let t;return typeof a=="string"?t=e=>e.type===a:t=e=>a.includes(e.type),this.events.pipe(L(t))}nextEventOfType(a){return this.eventsOfType(a).pipe(E(1))}waitForOperationCompleted(a){return this.eventsOfType("OPERATION_COMPLETED").pipe(L(t=>t.nonce===a),E(1),_(t=>{if(t.result!==void 0)return t.result;throw new Error(t.error)})).toPromise()}get isEnabled(){return!!this.serviceWorker}},cn=(()=>{class n{sw;messages;notificationClicks;subscription;get isEnabled(){return this.sw.isEnabled}pushManager=null;subscriptionChanges=new J;constructor(t){if(this.sw=t,!t.isEnabled){this.messages=F,this.notificationClicks=F,this.subscription=F;return}this.messages=this.sw.eventsOfType("PUSH").pipe(_(o=>o.data)),this.notificationClicks=this.sw.eventsOfType("NOTIFICATION_CLICK").pipe(_(o=>o.data)),this.pushManager=this.sw.registration.pipe(_(o=>o.pushManager));let e=this.pushManager.pipe(P(o=>o.getSubscription()));this.subscription=vt(e,this.subscriptionChanges)}requestSubscription(t){if(!this.sw.isEnabled||this.pushManager===null)return Promise.reject(new Error(Q));let e={userVisibleOnly:!0},o=this.decodeBase64(t.serverPublicKey.replace(/_/g,"/").replace(/-/g,"+")),i=new Uint8Array(new ArrayBuffer(o.length));for(let r=0;r<o.length;r++)i[r]=o.charCodeAt(r);return e.applicationServerKey=i,this.pushManager.pipe(P(r=>r.subscribe(e)),E(1)).toPromise().then(r=>(this.subscriptionChanges.next(r),r))}unsubscribe(){if(!this.sw.isEnabled)return Promise.reject(new Error(Q));let t=e=>{if(e===null)throw new Error("Not subscribed to push notifications.");return e.unsubscribe().then(o=>{if(!o)throw new Error("Unsubscribe failed!");this.subscriptionChanges.next(null)})};return this.subscription.pipe(E(1),P(t)).toPromise()}decodeBase64(t){return atob(t)}static \u0275fac=function(e){return new(e||n)(m(N))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),dn=(()=>{class n{sw;versionUpdates;unrecoverable;get isEnabled(){return this.sw.isEnabled}constructor(t){if(this.sw=t,!t.isEnabled){this.versionUpdates=F,this.unrecoverable=F;return}this.versionUpdates=this.sw.eventsOfType(["VERSION_DETECTED","VERSION_INSTALLATION_FAILED","VERSION_READY","NO_NEW_VERSION_DETECTED"]),this.unrecoverable=this.sw.eventsOfType("UNRECOVERABLE_STATE")}checkForUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Q));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("CHECK_FOR_UPDATES",{nonce:t},t)}activateUpdate(){if(!this.sw.isEnabled)return Promise.reject(new Error(Q));let t=this.sw.generateNonce();return this.sw.postMessageWithOperation("ACTIVATE_UPDATE",{nonce:t},t)}static \u0275fac=function(e){return new(e||n)(m(N))};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})();var ge=new v("");function ln(n,a,t,e){return()=>{if(!(K(e)&&"serviceWorker"in navigator&&t.enabled!==!1))return;let o=n.get(h),i=n.get(it);o.runOutsideAngular(()=>{let s=navigator.serviceWorker,c=()=>s.controller?.postMessage({action:"INITIALIZE"});s.addEventListener("controllerchange",c),i.onDestroy(()=>{s.removeEventListener("controllerchange",c)})});let r;if(typeof t.registrationStrategy=="function")r=t.registrationStrategy();else{let[s,...c]=(t.registrationStrategy||"registerWhenStable:30000").split(":");switch(s){case"registerImmediately":r=tt(null);break;case"registerWithDelay":r=ve(+c[0]||0);break;case"registerWhenStable":let d=Pt(n.get(it).whenStable());r=c[0]?vt(d,ve(+c[0])):d;break;default:throw new Error(`Unknown ServiceWorker registration strategy: ${t.registrationStrategy}`)}}o.runOutsideAngular(()=>r.pipe(E(1)).subscribe(()=>navigator.serviceWorker.register(a,{scope:t.scope}).catch(s=>console.error("Service worker registration failed with:",s))))}}function ve(n){return tt(null).pipe(Ht(n))}function mn(n,a){return new N(K(a)&&n.enabled!==!1?navigator.serviceWorker:void 0)}var q=class{enabled;scope;registrationStrategy};function ye(n,a={}){return B([cn,dn,{provide:ge,useValue:n},{provide:q,useValue:a},{provide:N,useFactory:mn,deps:[q,x]},{provide:Jt,useFactory:ln,deps:[nt,ge,q,x],multi:!0}])}var un="@",pn=(()=>{class n{doc;delegate;zone;animationType;moduleImpl;_rendererFactoryPromise=null;scheduler=u(Zt,{optional:!0});loadingSchedulerFn=u(bn,{optional:!0});_engine;constructor(t,e,o,i,r){this.doc=t,this.delegate=e,this.zone=o,this.animationType=i,this.moduleImpl=r}ngOnDestroy(){this._engine?.flush()}loadImpl(){let t=()=>this.moduleImpl??import("./chunk-SJDZEOVA.js").then(o=>o),e;return this.loadingSchedulerFn?e=this.loadingSchedulerFn(t):e=t(),e.catch(o=>{throw new j(5300,!1)}).then(({\u0275createEngine:o,\u0275AnimationRendererFactory:i})=>{this._engine=o(this.animationType,this.doc);let r=new i(this.delegate,this._engine,this.zone);return this.delegate=r,r})}createRenderer(t,e){let o=this.delegate.createRenderer(t,e);if(o.\u0275type===0)return o;typeof o.throwOnSyntheticProps=="boolean"&&(o.throwOnSyntheticProps=!1);let i=new St(o);return e?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(r=>{let s=r.createRenderer(t,e);i.use(s),this.scheduler?.notify(11)}).catch(r=>{i.use(o)}),i}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}static \u0275fac=function(e){Qt()};static \u0275prov=l({token:n,factory:n.\u0275fac})}return n})(),St=class{delegate;replay=[];\u0275type=1;constructor(a){this.delegate=a}use(a){if(this.delegate=a,this.replay!==null){for(let t of this.replay)t(a);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(a,t){return this.delegate.createElement(a,t)}createComment(a){return this.delegate.createComment(a)}createText(a){return this.delegate.createText(a)}get destroyNode(){return this.delegate.destroyNode}appendChild(a,t){this.delegate.appendChild(a,t)}insertBefore(a,t,e,o){this.delegate.insertBefore(a,t,e,o)}removeChild(a,t,e){this.delegate.removeChild(a,t,e)}selectRootElement(a,t){return this.delegate.selectRootElement(a,t)}parentNode(a){return this.delegate.parentNode(a)}nextSibling(a){return this.delegate.nextSibling(a)}setAttribute(a,t,e,o){this.delegate.setAttribute(a,t,e,o)}removeAttribute(a,t,e){this.delegate.removeAttribute(a,t,e)}addClass(a,t){this.delegate.addClass(a,t)}removeClass(a,t){this.delegate.removeClass(a,t)}setStyle(a,t,e,o){this.delegate.setStyle(a,t,e,o)}removeStyle(a,t,e){this.delegate.removeStyle(a,t,e)}setProperty(a,t,e){this.shouldReplay(t)&&this.replay.push(o=>o.setProperty(a,t,e)),this.delegate.setProperty(a,t,e)}setValue(a,t){this.delegate.setValue(a,t)}listen(a,t,e){return this.shouldReplay(t)&&this.replay.push(o=>o.listen(a,t,e)),this.delegate.listen(a,t,e)}shouldReplay(a){return this.replay!==null&&a.startsWith(un)}},bn=new v("");function _e(n="animations"){return qt("NgAsyncAnimations"),B([{provide:ot,useFactory:(a,t,e)=>new pn(a,t,e,n),deps:[g,lt,h]},{provide:_t,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var xe={providers:[te({eventCoalescing:!0}),ye("ngsw-worker.js",{enabled:!ee(),registrationStrategy:"registerWhenStable:30000"}),_e()]};var Rt;try{Rt=typeof Intl<"u"&&Intl.v8BreakIterator}catch{Rt=!1}var ut=(()=>{class n{_platformId=u(x);isBrowser=this._platformId?K(this._platformId):typeof document=="object"&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||Rt)&&typeof CSS<"u"&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!("MSStream"in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;constructor(){}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ot(n){return Array.isArray(n)?n:[n]}var we=new Set,S,fn=(()=>{class n{_platform=u(ut);_nonce=u(z,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):gn}matchMedia(t){return(this._platform.WEBKIT||this._platform.BLINK)&&hn(t,this._nonce),this._matchMedia(t)}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function hn(n,a){if(!we.has(n))try{S||(S=document.createElement("style"),a&&S.setAttribute("nonce",a),S.setAttribute("type","text/css"),document.head.appendChild(S)),S.sheet&&(S.sheet.insertRule(`@media ${n} {body{ }}`,0),we.add(n))}catch(t){console.error(t)}}function gn(n){return{matches:n==="all"||n==="",media:n,addListener:()=>{},removeListener:()=>{}}}var Ee=(()=>{class n{_mediaMatcher=u(fn);_zone=u(h);_queries=new Map;_destroySubject=new J;constructor(){}ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(t){return Ie(Ot(t)).some(o=>this._registerQuery(o).mql.matches)}observe(t){let o=Ie(Ot(t)).map(r=>this._registerQuery(r).observable),i=Bt(o);return i=et(i.pipe(E(1)),i.pipe(Vt(1),zt(0))),i.pipe(_(r=>{let s={matches:!1,breakpoints:{}};return r.forEach(({matches:c,query:d})=>{s.matches=s.matches||c,s.breakpoints[d]=c}),s}))}_registerQuery(t){if(this._queries.has(t))return this._queries.get(t);let e=this._mediaMatcher.matchMedia(t),i={observable:new Lt(r=>{let s=c=>this._zone.run(()=>r.next(c));return e.addListener(s),()=>{e.removeListener(s)}}).pipe($t(e),_(({matches:r})=>({query:t,matches:r})),Wt(this._destroySubject)),mql:e};return this._queries.set(t,i),i}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function Ie(n){return n.map(a=>a.split(",")).reduce((a,t)=>a.concat(t)).map(a=>a.trim())}var R=function(n){return n[n.NONE=0]="NONE",n[n.BLACK_ON_WHITE=1]="BLACK_ON_WHITE",n[n.WHITE_ON_BLACK=2]="WHITE_ON_BLACK",n}(R||{}),Me="cdk-high-contrast-black-on-white",De="cdk-high-contrast-white-on-black",Ft="cdk-high-contrast-active",ke=(()=>{class n{_platform=u(ut);_hasCheckedHighContrastMode;_document=u(g);_breakpointSubscription;constructor(){this._breakpointSubscription=u(Ee).observe("(forced-colors: active)").subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return R.NONE;let t=this._document.createElement("div");t.style.backgroundColor="rgb(1,2,3)",t.style.position="absolute",this._document.body.appendChild(t);let e=this._document.defaultView||window,o=e&&e.getComputedStyle?e.getComputedStyle(t):null,i=(o&&o.backgroundColor||"").replace(/ /g,"");switch(t.remove(),i){case"rgb(0,0,0)":case"rgb(45,50,54)":case"rgb(32,32,32)":return R.WHITE_ON_BLACK;case"rgb(255,255,255)":case"rgb(255,250,239)":return R.BLACK_ON_WHITE}return R.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let t=this._document.body.classList;t.remove(Ft,Me,De),this._hasCheckedHighContrastMode=!0;let e=this.getHighContrastMode();e===R.BLACK_ON_WHITE?t.add(Ft,Me):e===R.WHITE_ON_BLACK&&t.add(Ft,De)}}static \u0275fac=function(e){return new(e||n)};static \u0275prov=l({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Nt=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({})}return n})();var A=(()=>{class n{constructor(){u(ke)._applyBodyHighContrastModeCssClasses()}static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[Nt,Nt]})}return n})();var Te=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[A,A]})}return n})();var Se=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[A,Te,A]})}return n})();var In=["*"];var En=[[["","mat-card-avatar",""],["","matCardAvatar",""]],[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],"*"],Mn=["[mat-card-avatar], [matCardAvatar]",`mat-card-title, mat-card-subtitle,
      [mat-card-title], [mat-card-subtitle],
      [matCardTitle], [matCardSubtitle]`,"*"],Dn=new v("MAT_CARD_CONFIG"),Re=(()=>{class n{appearance;constructor(){let t=u(Dn,{optional:!0});this.appearance=t?.appearance||"raised"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-card"]],hostAttrs:[1,"mat-mdc-card","mdc-card"],hostVars:4,hostBindings:function(e,o){e&2&&rt("mat-mdc-card-outlined",o.appearance==="outlined")("mdc-card--outlined",o.appearance==="outlined")},inputs:{appearance:"appearance"},exportAs:["matCard"],ngContentSelectors:In,decls:1,vars:0,template:function(e,o){e&1&&(W(),T(0))},styles:['.mat-mdc-card{display:flex;flex-direction:column;box-sizing:border-box;position:relative;border-style:solid;border-width:0;background-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-color:var(--mdc-elevated-card-container-color, var(--mat-sys-surface-container-low));border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium));box-shadow:var(--mdc-elevated-card-container-elevation, var(--mat-sys-level1))}.mat-mdc-card::after{position:absolute;top:0;left:0;width:100%;height:100%;border:solid 1px rgba(0,0,0,0);content:"";display:block;pointer-events:none;box-sizing:border-box;border-radius:var(--mdc-elevated-card-container-shape, var(--mat-sys-corner-medium))}.mat-mdc-card-outlined{background-color:var(--mdc-outlined-card-container-color, var(--mat-sys-surface));border-radius:var(--mdc-outlined-card-container-shape, var(--mat-sys-corner-medium));border-width:var(--mdc-outlined-card-outline-width, 1px);border-color:var(--mdc-outlined-card-outline-color, var(--mat-sys-outline-variant));box-shadow:var(--mdc-outlined-card-container-elevation, var(--mat-sys-level0))}.mat-mdc-card-outlined::after{border:none}.mdc-card__media{position:relative;box-sizing:border-box;background-repeat:no-repeat;background-position:center;background-size:cover}.mdc-card__media::before{display:block;content:""}.mdc-card__media:first-child{border-top-left-radius:inherit;border-top-right-radius:inherit}.mdc-card__media:last-child{border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.mat-mdc-card-actions{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;min-height:52px;padding:8px}.mat-mdc-card-title{font-family:var(--mat-card-title-text-font, var(--mat-sys-title-large-font));line-height:var(--mat-card-title-text-line-height, var(--mat-sys-title-large-line-height));font-size:var(--mat-card-title-text-size, var(--mat-sys-title-large-size));letter-spacing:var(--mat-card-title-text-tracking, var(--mat-sys-title-large-tracking));font-weight:var(--mat-card-title-text-weight, var(--mat-sys-title-large-weight))}.mat-mdc-card-subtitle{color:var(--mat-card-subtitle-text-color, var(--mat-sys-on-surface));font-family:var(--mat-card-subtitle-text-font, var(--mat-sys-title-medium-font));line-height:var(--mat-card-subtitle-text-line-height, var(--mat-sys-title-medium-line-height));font-size:var(--mat-card-subtitle-text-size, var(--mat-sys-title-medium-size));letter-spacing:var(--mat-card-subtitle-text-tracking, var(--mat-sys-title-medium-tracking));font-weight:var(--mat-card-subtitle-text-weight, var(--mat-sys-title-medium-weight))}.mat-mdc-card-title,.mat-mdc-card-subtitle{display:block;margin:0}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle{padding:16px 16px 0}.mat-mdc-card-header{display:flex;padding:16px 16px 0}.mat-mdc-card-content{display:block;padding:0 16px}.mat-mdc-card-content:first-child{padding-top:16px}.mat-mdc-card-content:last-child{padding-bottom:16px}.mat-mdc-card-title-group{display:flex;justify-content:space-between;width:100%}.mat-mdc-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;margin-bottom:16px;object-fit:cover}.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-avatar~.mat-mdc-card-header-text .mat-mdc-card-title{line-height:normal}.mat-mdc-card-sm-image{width:80px;height:80px}.mat-mdc-card-md-image{width:112px;height:112px}.mat-mdc-card-lg-image{width:152px;height:152px}.mat-mdc-card-xl-image{width:240px;height:240px}.mat-mdc-card-subtitle~.mat-mdc-card-title,.mat-mdc-card-title~.mat-mdc-card-subtitle,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-title,.mat-mdc-card-header .mat-mdc-card-header-text .mat-mdc-card-subtitle,.mat-mdc-card-title-group .mat-mdc-card-title,.mat-mdc-card-title-group .mat-mdc-card-subtitle{padding-top:0}.mat-mdc-card-content>:last-child:not(.mat-mdc-card-footer){margin-bottom:0}.mat-mdc-card-actions-align-end{justify-content:flex-end}'],encapsulation:2,changeDetection:0})}return n})(),Oe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=D({type:n,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-mdc-card-title"]})}return n})();var Fe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=D({type:n,selectors:[["mat-card-content"]],hostAttrs:[1,"mat-mdc-card-content"]})}return n})(),Ne=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275dir=D({type:n,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-mdc-card-subtitle"]})}return n})();var Le=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275cmp=M({type:n,selectors:[["mat-card-header"]],hostAttrs:[1,"mat-mdc-card-header"],ngContentSelectors:Mn,decls:4,vars:0,consts:[[1,"mat-mdc-card-header-text"]],template:function(e,o){e&1&&(W(En),T(0),w(1,"div",0),T(2,1),I(),T(3,2))},encapsulation:2,changeDetection:0})}return n})();var Pe=(()=>{class n{static \u0275fac=function(e){return new(e||n)};static \u0275mod=f({type:n});static \u0275inj=b({imports:[A,A]})}return n})();var pt=class n{title=$("\u041D\u0430\u0434\u043C\u0456\u0440\u043D\u0435 \u0443\u0437\u0430\u0433\u0430\u043B\u044C\u043D\u0435\u043D\u043D\u044F");details=$("\u041F\u043E\u0433\u043B\u044F\u0434 \u043D\u0430 \u043E\u0434\u043D\u0443 \u043D\u0435\u0433\u0430\u0442\u0438\u0432\u043D\u0443 \u043F\u043E\u0434\u0456\u044E \u044F\u043A \u043D\u0430 \u043E\u0437\u043D\u0430\u043A\u0443 \u0442\u043E\u0433\u043E, \u0449\u043E \u0432\u0441\u0435 \u043F\u043E\u0433\u0430\u043D\u043E.");example=$("\u041F\u0440\u0438\u043A\u043B\u0430\u0434: \u042F \u043F\u0440\u043E\u0432\u0430\u043B\u0438\u0432 \u0456\u043D\u0442\u0435\u0440\u0432'\u044E, \u044F \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0443 \u0440\u043E\u0431\u043E\u0442\u0438. \u0426\u0456 \u0441\u0442\u043E\u0441\u0443\u043D\u043A\u0438 \u043D\u0435\u0432\u0434\u0430\u043B\u0456, \u044F \u043D\u0456\u043A\u043E\u043B\u0438 \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0443 \u0441\u0443\u043F\u0443\u0442\u043D\u0438\u043A\u0430 \u0436\u0438\u0442\u0442\u044F. \u0412\u043E\u043D\u0430 \u043C\u0435\u043D\u0435 \u043F\u0440\u0438\u043D\u0438\u0437\u0438\u043B\u0430, \u044F \u043D\u0435 \u043C\u043E\u0436\u0443 \u043D\u0456\u043A\u043E\u043C\u0443 \u0434\u043E\u0432\u0456\u0440\u044F\u0442\u0438");static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-distortion-card"]],decls:8,vars:3,consts:[["appearance","outlined"]],template:function(t,e){t&1&&(w(0,"mat-card",0)(1,"mat-card-header")(2,"mat-card-title"),Y(3),I(),w(4,"mat-card-subtitle"),Y(5),I()(),w(6,"mat-card-content"),Y(7),I()()),t&2&&(V(3),ct(e.title()),V(2),ct(e.details()),V(2),ct(e.example()))},dependencies:[Pe,Re,Fe,Le,Ne,Oe],styles:["[_nghost-%COMP%]{display:block}"],changeDetection:0})};var bt=class n{static \u0275fac=function(t){return new(t||n)};static \u0275cmp=M({type:n,selectors:[["app-root"]],decls:2,vars:0,consts:[[1,"main"]],template:function(t,e){t&1&&(w(0,"main",0),st(1,"app-distortion-card"),I())},dependencies:[Se,pt],styles:[".main[_ngcontent-%COMP%]{box-sizing:border-box;height:100%;width:100%;max-height:100%;max-width:100%;padding:1rem}"]})};he(bt,xe).catch(n=>console.error(n));
