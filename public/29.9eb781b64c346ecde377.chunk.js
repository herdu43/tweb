(this.webpackJsonp=this.webpackJsonp||[]).push([[29],{19:function(e,t,n){"use strict";n.r(t);var a=n(33),o=n(45),c=n(16),i=n(30),s=n(29),r=n(62),d=n(38),l=n(48),u=n(31),p=n(82),h=n(1),b=n(7),m=n(14),f=n(46),g=n(17),v=n(59),y=n(5),L=n(63),E=n(92),j=n(103),O=n(21),_=n(87),w=n(4),k=n(28),S=n(34),x=n(52),T=n(58),N=n(94),C=n(93),P=n(47),A=n(75),I=n(15),D=n(113),M=function(e,t,n,a){return new(n||(n=Promise))((function(o,c){function i(e){try{r(a.next(e))}catch(e){c(e)}}function s(e){try{r(a.throw(e))}catch(e){c(e)}}function r(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}r((a=a.apply(e,t||[])).next())}))};let B,H=null;const R=new r.a("page-sign",!0,()=>{const e=()=>{t=m.default.countriesList.filter(e=>{var t;return!(null===(t=e.pFlags)||void 0===t?void 0:t.hidden)}).sort((e,t)=>(e.name||e.default_name).localeCompare(t.name||t.default_name))};let t;e(),I.default.addEventListener("language_change",()=>{e()});const r=new Map;let g,W;const q=document.createElement("div");q.classList.add("input-wrapper");const F=new d.b({label:"Login.CountrySelectorLabel",name:Object(L.b)()});F.container.classList.add("input-select");const J=F.input,K=document.createElement("div");K.classList.add("select-wrapper","z-depth-3","hide");const V=document.createElement("span");V.classList.add("arrow","arrow-down"),F.container.append(V);const z=document.createElement("ul");K.appendChild(z);new o.b(K);let Q=()=>{Q=null,t.forEach(e=>{const t=Object(C.c)(e.iso2),n=[];e.country_codes.forEach(a=>{const o=document.createElement("li");let c=s.a.wrapEmojiText(t);if(s.a.emojiSupported){const e=document.createElement("span");e.innerHTML=c,o.append(e)}else o.innerHTML=c;const i=Object(m.i18n)(e.default_name);i.dataset.defaultName=e.default_name,o.append(i);const r=document.createElement("span");r.classList.add("phone-code"),r.innerText="+"+a.country_code,o.appendChild(r),n.push(o),z.append(o)}),r.set(e.iso2,n)}),z.addEventListener("mousedown",e=>{if(0!==e.button)return;const t=Object(v.a)(e.target,"LI");U(t)}),F.container.appendChild(K)};const U=e=>{const n=e.childNodes[1].dataset.defaultName,a=e.querySelector(".phone-code").innerText,o=a.replace(/\D/g,"");Object(S.a)(J,Object(m.i18n)(n)),Object(P.a)(J,"input"),g=t.find(e=>e.default_name===n),W=g.country_codes.find(e=>e.country_code===o),Z.value=Z.lastValue=a,Y(),setTimeout(()=>{ee.focus(),Object(N.a)(ee,!0)},0)};let $;Q(),J.addEventListener("focus",(function(e){Q?Q():t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}),clearTimeout($),$=void 0,K.classList.remove("hide"),K.offsetWidth,K.classList.add("active"),F.select(),Object(p.b)(R.pageEl.parentElement.parentElement,J,"start",4),setTimeout(()=>{G||(document.addEventListener("mousedown",X,{capture:!0}),G=!0)},0)}));let G=!1;const X=e=>{Object(y.a)(e.target,"input-select")||e.target!==J&&(Y(),document.removeEventListener("mousedown",X,{capture:!0}),G=!1)},Y=()=>{void 0===$&&(K.classList.remove("active"),$=window.setTimeout(()=>{K.classList.add("hide"),$=void 0},200))};J.addEventListener("keyup",e=>{if(e.ctrlKey||"Control"===e.key)return!1;let n=F.value.toLowerCase(),a=[];t.forEach(e=>{let t=!![e.name,e.default_name].filter(Boolean).find(e=>-1!==e.toLowerCase().indexOf(n));r.get(e.iso2).forEach(e=>e.style.display=t?"":"none"),t&&a.push(e)}),0===a.length?t.forEach(e=>{r.get(e.iso2).forEach(e=>e.style.display="")}):1===a.length&&"Enter"===e.key&&U(r.get(a[0].iso2)[0])}),V.addEventListener("mousedown",(function(e){e.cancelBubble=!0,e.preventDefault(),J.matches(":focus")?J.blur():J.focus()}));const Z=new D.a({onInput:e=>{f.b.loadLottieWorkers();const{country:t,code:n}=e;let a=t?t.name||t.default_name:"";a===F.value||g&&t&&n&&(g===t||W.country_code===n.country_code)||(Object(S.a)(J,t?Object(m.i18n)(t.default_name):a),g=t,W=n),t||Z.value.length-1>1?H.style.visibility="":H.style.visibility="hidden"}}),ee=Z.input;ee.addEventListener("keypress",e=>{if(!H.style.visibility&&"Enter"===e.key)return ne()});const te=new l.a({text:"Login.KeepSigned",name:"keepSession",withRipple:!0,checked:!0});te.input.addEventListener("change",()=>{const e=te.checked;c.default.pushToState("keepSigned",e),E.a.toggleStorage(e),j.a.toggleStorage(e),i.a.toggleStorage(e),T.a.toggleStorage(e)}),c.default.getState().then(e=>{c.default.storage.isAvailable()?te.checked=e.keepSigned:(te.checked=!1,te.label.classList.add("checkbox-disabled"))}),H=Object(u.a)("btn-primary btn-color-primary",{text:"Login.Next"}),H.style.visibility="hidden";const ne=e=>{e&&Object(w.a)(e);const t=Object(x.a)([H,B],!0);Object(S.a)(H,Object(m.i18n)("PleaseWait")),Object(a.f)(H);let o=Z.value;i.a.invokeApi("auth.sendCode",{phone_number:o,api_id:b.a.id,api_hash:b.a.hash,settings:{_:"codeSettings"}}).then(e=>{n.e(22).then(n.bind(null,22)).then(t=>t.default.mount(Object.assign(e,{phone_number:o})))}).catch(e=>{switch(t(),e.type){case"PHONE_NUMBER_INVALID":Z.setError(),Object(S.a)(Z.label,Object(m.i18n)("Login.PhoneLabelInvalid")),ee.classList.add("error"),Object(S.a)(H,Object(m.i18n)("Login.Next"));break;default:console.error("auth.sendCode error:",e),H.innerText=e.type}})};Object(k.b)(H,ne),B=Object(u.a)("btn-primary btn-secondary btn-primary-transparent primary",{text:"Login.QR.Login"});B.addEventListener("click",()=>{O.default.mount()}),q.append(F.container,Z.container,te.label,H,B);const ae=document.createElement("h4");ae.classList.add("text-center"),Object(m._i18n)(ae,"Login.Title");const oe=document.createElement("div");oe.classList.add("subtitle","text-center"),Object(m._i18n)(oe,"Login.StartText"),R.pageEl.querySelector(".container").append(ae,oe,q);h.isTouchSupported||setTimeout(()=>{ee.focus()},0),Object(_.a)(q),i.a.invokeApi("help.getNearestDc").then(e=>{var t;const n=A.a.getFromCache("langPack");n&&!(null===(t=n.countries)||void 0===t?void 0:t.hash)&&m.default.getLangPack(n.lang_code).then(()=>{Object(P.a)(ee,"input")});const a=new Set([1,2,3,4,5]),o=[e.this_dc];let c;return e.nearest_dc!==e.this_dc&&(c=i.a.getNetworker(e.nearest_dc).then(()=>{o.push(e.nearest_dc)})),(c||Promise.resolve()).then(()=>{o.forEach(e=>{a.delete(e)});const e=[...a],t=()=>M(void 0,void 0,void 0,(function*(){const n=e.shift();if(!n)return;const a=`dc${n}_auth_key`;if(yield T.a.get(a))return t();setTimeout(()=>{i.a.getNetworker(n).finally(t)},3e3)}));t()}),e}).then(e=>{F.value.length||Z.value.length||U(r.get(e.country)[0])})},()=>{H&&(Object(S.a)(H,Object(m.i18n)("Login.Next")),Object(g.ripple)(H,void 0,void 0,!0),H.removeAttribute("disabled")),B&&B.removeAttribute("disabled"),c.default.pushToState("authState",{_:"authStateSignIn"})});t.default=R}}]);
//# sourceMappingURL=29.9eb781b64c346ecde377.chunk.js.map