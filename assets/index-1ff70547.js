(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(i){if(i.ep)return;i.ep=!0;const c=n(i);fetch(i.href,c)}})();const V=new Set,j=new Set;function L(e){return typeof e=="function"&&!!e.isT}function A(e){return typeof e=="object"&&e!==null&&"$on"in e&&typeof e.$on=="function"}function Q(e){return"$on"in e}function J(e){return(o,n)=>{function t(){const i=Array.from(V);V.clear();const c=Array.from(j);j.clear(),i.forEach(r=>r(o,n)),c.forEach(r=>r()),V.size&&setTimeout(t)}V.size||setTimeout(t),V.add(e)}}const v=new Map;function E(e,o={}){if(A(e)||typeof e!="object")return e;const n=o.o||new Map,t=o.op||new Map,i=Array.isArray(e),c=[],r=i?[]:Object.create(e,{});for(const l in e){const a=e[l];typeof a=="object"&&a!==null?(r[l]=A(a)?a:E(a),c.push(l)):r[l]=a}const d=l=>(a,h)=>{let f=n.get(a),w=t.get(h);f||(f=new Set,n.set(a,f)),w||(w=new Set,t.set(h,w)),f[l](h),w[l](a)},m=d("add"),g=d("delete"),x=(l,a,h)=>{n.has(l)&&n.get(l).forEach(f=>f(a,h))},p={$on:m,$off:g,_em:x,_st:()=>({o:n,op:t,r,p:u._p}),_p:void 0},u=new Proxy(r,{has(l,a){return a in p||a in l},get(...l){const[,a]=l;if(Reflect.has(p,a))return Reflect.get(p,a);const h=Reflect.get(...l);return X(u,a),i&&a in Array.prototype?Y(a,r,u,h):h},set(...l){const[a,h,f]=l,w=Reflect.get(a,h);if(Reflect.has(p,h))return Reflect.set(p,h,f);if(f&&A(w)){const _=w,T=_._st(),O=A(f)?Z(f,_):E(f,T);return Reflect.set(a,h,O),x(h,O),T.o.forEach((ge,C)=>{const P=Reflect.get(w,C),I=Reflect.get(O,C);P!==I&&_._em(C,I,P)}),!0}const y=Reflect.set(...l);return y&&(w!==f&&x(h,f,w),u._p&&u._p[1]._em(...u._p)),y}});return o.p&&(u._p=o.p),c.map(l=>{u[l]._p=[l,u]}),u}function X(e,o){v.forEach(n=>{let t=n.get(e);t||(t=new Set,n.set(e,t)),t.add(o)})}function Y(e,o,n,t){const i=(...c)=>{const r=Array.prototype[e].call(o,...c);if(o.forEach((d,m)=>n._em(String(m),d)),n._p){const[d,m]=n._p;m._em(d,n)}return r};switch(e){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return i;case"unshift":case"push":case"fill":return(...c)=>i(...c.map(r=>E(r)));case"splice":return(c,r,...d)=>i(c,r,...d.map(m=>E(m)));default:return t}}function Z(e,o){const n=o._st();return n.o&&n.o.forEach((t,i)=>{t.forEach(c=>{e.$on(i,c)})}),n.p&&(e._p=n.p),e}function k(e,o){const n=Symbol();v.has(n)||v.set(n,new Map);let t=new Map;const i=J(c);function c(){v.set(n,new Map);const r=e(),d=v.get(n);return v.delete(n),t.forEach((m,g)=>{const x=d.get(g);x&&x.forEach(b=>m.delete(b)),m.forEach(b=>g.$off(b,i))}),d.forEach((m,g)=>{m.forEach(x=>g.$on(x,i))}),t=d,o?o(r):r}return Q(e)&&e.$on(c),c()}const S=new WeakMap,D={},W="➳❍",q="❍⇚",B=`<!--${W}-->`,ee=`<!--${q}-->`;function z(e,...o){const n=[];let t="";const i=(d,m)=>{if(typeof d=="function"){let g=()=>{};return n.push(Object.assign((...x)=>d(...x),{e:d,$on:x=>{g=x},_up:x=>{d=x,g()}})),m+B}return Array.isArray(d)?d.reduce((g,x)=>i(x,g),m):m+d},c=()=>(t||(!o.length&&e.length===1&&e[0]===""?t="<!---->":t=e.reduce(function(m,g,x){return m+=g,o[x]!==void 0?i(o[x],m):m},"")),t),r=d=>{const m=H(c()),g=M(m,{i:0,e:n});return d?g(d):g()};return r.isT=!0,r._k=0,r._h=()=>[c(),n,r._k],r.key=d=>(r._k=d,r),r}function M(e,o){const n=document.createDocumentFragment();let t;for(;t=e.item(0);){if(t.nodeType===8&&t.nodeValue===W){n.append(se(t,o));continue}t instanceof Element&&te(t,o),t.hasChildNodes()&&M(t.childNodes,o)(t),n.append(t),t instanceof HTMLOptionElement&&(t.selected=t.defaultSelected)}return i=>i?(i.appendChild(n),i):n}function te(e,o){var n;const t=[];let i=0,c;for(;c=e.attributes[i++];){if(o.i>=o.e.length)return;if(c.value!==B)continue;let r=c.name;const d=o.e[o.i++];if(r.charAt(0)==="@"){const m=r.substring(1);e.addEventListener(m,d),S.has(e)||S.set(e,new Map),(n=S.get(e))===null||n===void 0||n.set(m,d),t.push(r)}else{const m=r==="value"&&"value"in e||r==="checked"||r.startsWith(".")&&(r=r.substring(1));k(d,g=>{m&&(e[r]=g,e.getAttribute(r)!=g&&(g=!1)),g!==!1?e.setAttribute(r,g):(e.removeAttribute(r),i--)})}}t.forEach(r=>e.removeAttribute(r))}function ne(e){e.forEach(oe)}function oe(e){var o;e.remove(),(o=S.get(e))===null||o===void 0||o.forEach((n,t)=>e.removeEventListener(t,n))}function se(e,o){const n=document.createDocumentFragment();e.remove();const t=o.e[o.i++];if(t&&L(t.e))n.appendChild(N().add(t.e)());else{let i;n.appendChild((i=k(t,c=>re(c,i)))())}return n}function re(e,o){const n=typeof o=="function",t=n?o:N();return Array.isArray(e)?e.forEach(i=>t.add(i)):t.add(e),n&&t._up(),t}function H(e){var o;const t=((o=D[e])!==null&&o!==void 0?o:(()=>{const i=document.createElement("template");return i.innerHTML=e,D[e]=i})()).content.cloneNode(!0);return t.normalize(),t.childNodes}function N(e=Symbol()){let o="",n={i:0,e:[]},t=[],i=[];const c=new Map,r=[],d=()=>{let p;if(t.length||g(),t.length===1&&!L(t[0].tpl)){const u=t[0];u.dom.length?u.dom[0].nodeValue=u.tpl:u.dom.push(document.createTextNode(u.tpl)),p=u.dom[0]}else p=x(M(H(o),n)());return m(),p};d.ch=()=>i,d.l=0,d.add=p=>{if(!p&&p!==0)return d;let u=[],l,a="";L(p)&&([a,u,l]=p._h()),o+=a,o+=ee;const h=l&&c.get(l),f=h||{html:a,exp:u,dom:[],tpl:p,key:l};return t.push(f),l&&(h?h.exp.forEach((w,y)=>w._up(u[y].e)):c.set(l,f)),n.e.push(...u),d.l++,d},d._up=()=>{const p=N(e);let u=0,l=i[0].dom[0];t.length||g(document.createComment(""));const a=()=>{if(!p.l)return;const f=p(),w=f.lastChild;l[u?"after":"before"](f),b(p,t,u),l=w};t.forEach((f,w)=>{const y=i[w];f.key&&f.dom.length?(a(),(!y||y.dom!==f.dom)&&l[w?"after":"before"](...f.dom),l=f.dom[f.dom.length-1]):y&&f.html===y.html&&!y.key?(a(),y.exp.forEach((_,T)=>_._up(f.exp[T].e)),f.exp=y.exp,f.dom=y.dom,l=f.dom[f.dom.length-1],ie(f)&&l instanceof Text&&(l.nodeValue=f.tpl)):(y&&f.html!==y.html&&!y.key&&r.push(...y.dom),p.l||(u=w),p.add(f.tpl))}),a();let h=l==null?void 0:l.nextSibling;for(;h&&e in h;)r.push(h),h=h.nextSibling;ne(r),m()};const m=()=>{r.length=0,o="",d.l=0,n={i:0,e:[]},i=[...t],t=[]},g=p=>{o="<!---->",t.push({html:o,exp:[],dom:p?[p]:[],tpl:z`${o}`,key:0})},x=p=>{let u=0;const l=[];return p.childNodes.forEach(a=>{if(a.nodeType===8&&a.data===q){u++,l.push(a);return}Object.defineProperty(a,e,{value:e}),t[u].dom.push(a)}),l.forEach(a=>a.remove()),p},b=(p,u,l)=>{p.ch().forEach((a,h)=>{u[l+h].dom=a.dom})};return d}function ie(e){return e.dom.length===1&&!L(e.tpl)}const le="/fifteen-puzzle/assets/github-bb39f6ee.svg",ce="/fifteen-puzzle/assets/solved-698d9f57.mp3";/**
 * @license AGPL-3.0-only
 * Fifteen Puzzle - A 15 Puzzle Game
 * Copyright (C) 2023 Eldar Pashazade <eldarlrd@pm.me>
 *
 * This file is part of Fifteen Puzzle.
 *
 * Fifteen Puzzle is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published by
 * the Free Software Foundation, version 3.
 *
 * Fifteen Puzzle is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with Fifteen Puzzle. If not, see <https://www.gnu.org/licenses/>.
 */const ae=()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/fifteen-puzzle/sw.js",{scope:"/fifteen-puzzle/"})})},s=E({orderedIndex:[],elementValue:[],matchingValue:[],elementTiles:[],show:!1,volume:!1,ticking:!1,startTime:0,endTime:0,timeElapsed:0,minutes:0,seconds:0,moves:0}),de=()=>{for(let e=1;e<=16;e++)s.orderedIndex.push(e),s.elementValue.push(e);R()},R=()=>{s.elementValue.sort(()=>Math.random()-.5),s.startTime=0,s.endTime=0,s.timeElapsed=0,s.moves=0,K()},K=()=>{s.elementTiles.length=0,s.elementValue.forEach(e=>{s.elementTiles.push(z`
      <div
        id=${e}
        class='${e===16?"invisible":""} flex cursor-pointer select-none items-center justify-center rounded bg-cyan-400 text-4xl font-bold text-white drop-shadow-sm transition-transform hover:scale-95 sm:text-5xl md:text-6xl'
        @click='${()=>{$(e)}}'>
        ${e}
      </div>
    `.key(e))}),G(),U()},$=e=>{const o=s.elementValue.indexOf(e),n=s.elementValue.indexOf(16);let t=n-1,i=n+1;if(o<0||o>15||([12,8,4].includes(n)&&(t=-1),[11,7,3].includes(n)&&(i=-1),![n-4,n+4,t,i].includes(o)))return;const c=E([...s.elementValue].map(r=>s.elementValue.indexOf(+r)!==n&&s.elementValue.indexOf(+r)!==o?+r:r===16?e:16));s.elementValue=c,s.moves++,K()},fe=e=>{switch(["ArrowUp","ArrowLeft","ArrowRight","ArrowDown","KeyR"].includes(e.code)&&e.preventDefault(),e.code){case"ArrowUp":$(+s.elementValue[s.elementValue.indexOf(16)+4]);break;case"ArrowLeft":$(+s.elementValue[s.elementValue.indexOf(16)+1]);break;case"ArrowRight":$(+s.elementValue[s.elementValue.indexOf(16)-1]);break;case"ArrowDown":$(+s.elementValue[s.elementValue.indexOf(16)-4]);break;case"KeyR":R()}},ue=()=>{s.startTime===0&&(s.ticking=!0,s.startTime=performance.now()),me()},me=()=>{s.startTime>0&&s.ticking&&(s.endTime=performance.now(),s.timeElapsed=s.endTime-s.startTime,s.timeElapsed/=1e3,s.minutes=~~(s.timeElapsed/60),s.seconds=~~(s.timeElapsed-s.minutes*60))},G=()=>{s.matchingValue.length=0,s.elementValue.forEach((e,o)=>{e===s.orderedIndex[o]&&s.matchingValue.push(e),s.matchingValue.splice(s.matchingValue.indexOf(e))}),pe()},pe=()=>{s.elementValue.forEach(e=>{var o,n;s.matchingValue.includes(e)?(o=document.getElementById(e.toString()))==null||o.classList.add("bg-emerald-400"):(n=document.getElementById(e.toString()))==null||n.classList.remove("bg-emerald-400")})},U=()=>{const e=document.getElementById("modal"),o=new Audio(`${ce}`);s.show=s.elementValue.every((n,t)=>n===s.orderedIndex[t]),s.show?(s.volume&&o.play(),s.volume=!0,s.ticking=!1,e==null||e.classList.remove("hidden")):e==null||e.classList.add("hidden")},he=z`
  <header>
    <h1 class='m-6 select-none text-center text-4xl font-bold text-white drop-shadow-xl sm:text-5xl md:text-6xl'>
      Fifteen Puzzle
    </h1>
  </header>

  <main class='flex flex-col items-center justify-center gap-4'>
    <span class='flex w-80 items-center justify-between text-white sm:w-96 md:w-[32em]'>
      <button
        class='rounded select-none bg-cyan-600 px-6 py-4 font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:text-lg'
        @click='${()=>{R()}}'>
        Shuffle
      </button>
      <figure aria-label='tracker' class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 drop-shadow-md md:text-lg'>
        <time class='text-end font-bold'>
          <figcaption>Time</figcaption>
          <p class='w-20 min-w-max'>
            ${()=>`${s.minutes===0?"":s.minutes+"m"} ${s.seconds}s`}
          </p>
        </time>
        <time class='text-end font-bold'>
          <figcaption>Moves</figcaption>
          <p>${()=>s.moves}</p>
        </time>
      </figure>
    </span>

    <section class='grid h-80 w-80 grid-cols-4 grid-rows-4 gap-1 rounded bg-cyan-600 p-1 shadow-inner drop-shadow-md sm:h-96 sm:w-96 md:h-[32em] md:w-[32em]'>
      ${()=>s.elementTiles}
    </section>
  </main>

  <div id='modal' class='fixed inset-0 z-10 flex hidden h-full w-full items-center justify-center bg-black/75'>
    <section class='flex h-64 w-80 flex-col items-center justify-center gap-6 rounded-md bg-sky-400 drop-shadow-2xl md:h-80 md:w-96'>
      <p class='select-none text-3xl text-white md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button
          class='rounded select-none bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:py-5 md:text-xl'
          @click='${()=>{R()}}'>
          Shuffle
        </button>
        <figure aria-label='modal-tracker' class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
          <time class='text-end font-bold'>
            <figcaption>Time</figcaption>
            <p class='w-20 min-w-max'>
              ${()=>`${s.minutes===0?"":s.minutes+"m"} ${s.seconds}s`}
            </p>
          </time>
          <time class='text-end font-bold'>
            <figcaption>Moves</figcaption>
            <p>${()=>s.moves}</p>
          </time>
        </figure>
      </span>
    </section>
  </div>

  <footer>
    <p class='m-6 flex select-none flex-col items-center justify-center text-center text-lg font-bold text-white drop-shadow-xl sm:text-xl md:text-2xl'>
    © 2023 <a
           class='flex items-center rounded justify-center gap-1 text-center transition-transform hover:scale-110'
           title='Go to the Source'
           target='_blank'
           type='text/html'
           rel='noopener noreferrer nofollow external author'
           href='https://github.com/eldarlrd/fifteen-puzzle'>
           <img
             class='h-6 w-6'
             alt='GitHub Logo'
             src=${le}
           > eldarlrd
         </a>
    </p>
  </footer>
`;k(G);k(U);k(ue);de();ae();document.addEventListener("keydown",e=>{fe(e)});console.log("Hope you don't get the 14-15 one!");const F=document.getElementById("app");F!==null&&he(F);
