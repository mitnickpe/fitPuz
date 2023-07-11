(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function t(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();const $=new Set,j=new Set;function A(e){return typeof e=="function"&&!!e.isT}function V(e){return typeof e=="object"&&e!==null&&"$on"in e&&typeof e.$on=="function"}function Q(e){return"$on"in e}function U(e){return(n,o)=>{function t(){const s=Array.from($);$.clear();const a=Array.from(j);j.clear(),s.forEach(i=>i(n,o)),a.forEach(i=>i()),$.size&&setTimeout(t)}$.size||setTimeout(t),$.add(e)}}const v=new Map;function E(e,n={}){if(V(e)||typeof e!="object")return e;const o=n.o||new Map,t=n.op||new Map,s=Array.isArray(e),a=[],i=s?[]:Object.create(e,{});for(const c in e){const l=e[c];typeof l=="object"&&l!==null?(i[c]=V(l)?l:E(l),a.push(c)):i[c]=l}const d=c=>(l,h)=>{let f=o.get(l),y=t.get(h);f||(f=new Set,o.set(l,f)),y||(y=new Set,t.set(h,y)),f[c](h),y[c](l)},m=d("add"),g=d("delete"),x=(c,l,h)=>{o.has(c)&&o.get(c).forEach(f=>f(l,h))},p={$on:m,$off:g,_em:x,_st:()=>({o,op:t,r:i,p:u._p}),_p:void 0},u=new Proxy(i,{has(c,l){return l in p||l in c},get(...c){const[,l]=c;if(Reflect.has(p,l))return Reflect.get(p,l);const h=Reflect.get(...c);return J(u,l),s&&l in Array.prototype?X(l,i,u,h):h},set(...c){const[l,h,f]=c,y=Reflect.get(l,h);if(Reflect.has(p,h))return Reflect.set(p,h,f);if(f&&V(y)){const _=y,S=_._st(),C=V(f)?Y(f,_):E(f,S);return Reflect.set(l,h,C),x(h,C),S.o.forEach((he,L)=>{const P=Reflect.get(y,L),I=Reflect.get(C,L);P!==I&&_._em(L,I,P)}),!0}const b=Reflect.set(...c);return b&&(y!==f&&x(h,f,y),u._p&&u._p[1]._em(...u._p)),b}});return n.p&&(u._p=n.p),a.map(c=>{u[c]._p=[c,u]}),u}function J(e,n){v.forEach(o=>{let t=o.get(e);t||(t=new Set,o.set(e,t)),t.add(n)})}function X(e,n,o,t){const s=(...a)=>{const i=Array.prototype[e].call(n,...a);if(n.forEach((d,m)=>o._em(String(m),d)),o._p){const[d,m]=o._p;m._em(d,o)}return i};switch(e){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return s;case"unshift":case"push":case"fill":return(...a)=>s(...a.map(i=>E(i)));case"splice":return(a,i,...d)=>s(a,i,...d.map(m=>E(m)));default:return t}}function Y(e,n){const o=n._st();return o.o&&o.o.forEach((t,s)=>{t.forEach(a=>{e.$on(s,a)})}),o.p&&(e._p=o.p),e}function T(e,n){const o=Symbol();v.has(o)||v.set(o,new Map);let t=new Map;const s=U(a);function a(){v.set(o,new Map);const i=e(),d=v.get(o);return v.delete(o),t.forEach((m,g)=>{const x=d.get(g);x&&x.forEach(w=>m.delete(w)),m.forEach(w=>g.$off(w,s))}),d.forEach((m,g)=>{m.forEach(x=>g.$on(x,s))}),t=d,n?n(i):i}return Q(e)&&e.$on(a),a()}const k=new WeakMap,z={},F="➳❍",q="❍⇚",H=`<!--${F}-->`,Z=`<!--${q}-->`;function R(e,...n){const o=[];let t="";const s=(d,m)=>{if(typeof d=="function"){let g=()=>{};return o.push(Object.assign((...x)=>d(...x),{e:d,$on:x=>{g=x},_up:x=>{d=x,g()}})),m+H}return Array.isArray(d)?d.reduce((g,x)=>s(x,g),m):m+d},a=()=>(t||(!n.length&&e.length===1&&e[0]===""?t="<!---->":t=e.reduce(function(m,g,x){return m+=g,n[x]!==void 0?s(n[x],m):m},"")),t),i=d=>{const m=B(a()),g=N(m,{i:0,e:o});return d?g(d):g()};return i.isT=!0,i._k=0,i._h=()=>[a(),o,i._k],i.key=d=>(i._k=d,i),i}function N(e,n){const o=document.createDocumentFragment();let t;for(;t=e.item(0);){if(t.nodeType===8&&t.nodeValue===F){o.append(oe(t,n));continue}t instanceof Element&&ee(t,n),t.hasChildNodes()&&N(t.childNodes,n)(t),o.append(t),t instanceof HTMLOptionElement&&(t.selected=t.defaultSelected)}return s=>s?(s.appendChild(o),s):o}function ee(e,n){var o;const t=[];let s=0,a;for(;a=e.attributes[s++];){if(n.i>=n.e.length)return;if(a.value!==H)continue;let i=a.name;const d=n.e[n.i++];if(i.charAt(0)==="@"){const m=i.substring(1);e.addEventListener(m,d),k.has(e)||k.set(e,new Map),(o=k.get(e))===null||o===void 0||o.set(m,d),t.push(i)}else{const m=i==="value"&&"value"in e||i==="checked"||i.startsWith(".")&&(i=i.substring(1));T(d,g=>{m&&(e[i]=g,e.getAttribute(i)!=g&&(g=!1)),g!==!1?e.setAttribute(i,g):(e.removeAttribute(i),s--)})}}t.forEach(i=>e.removeAttribute(i))}function te(e){e.forEach(ne)}function ne(e){var n;e.remove(),(n=k.get(e))===null||n===void 0||n.forEach((o,t)=>e.removeEventListener(t,o))}function oe(e,n){const o=document.createDocumentFragment();e.remove();const t=n.e[n.i++];if(t&&A(t.e))o.appendChild(O().add(t.e)());else{let s;o.appendChild((s=T(t,a=>se(a,s)))())}return o}function se(e,n){const o=typeof n=="function",t=o?n:O();return Array.isArray(e)?e.forEach(s=>t.add(s)):t.add(e),o&&t._up(),t}function B(e){var n;const t=((n=z[e])!==null&&n!==void 0?n:(()=>{const s=document.createElement("template");return s.innerHTML=e,z[e]=s})()).content.cloneNode(!0);return t.normalize(),t.childNodes}function O(e=Symbol()){let n="",o={i:0,e:[]},t=[],s=[];const a=new Map,i=[],d=()=>{let p;if(t.length||g(),t.length===1&&!A(t[0].tpl)){const u=t[0];u.dom.length?u.dom[0].nodeValue=u.tpl:u.dom.push(document.createTextNode(u.tpl)),p=u.dom[0]}else p=x(N(B(n),o)());return m(),p};d.ch=()=>s,d.l=0,d.add=p=>{if(!p&&p!==0)return d;let u=[],c,l="";A(p)&&([l,u,c]=p._h()),n+=l,n+=Z;const h=c&&a.get(c),f=h||{html:l,exp:u,dom:[],tpl:p,key:c};return t.push(f),c&&(h?h.exp.forEach((y,b)=>y._up(u[b].e)):a.set(c,f)),o.e.push(...u),d.l++,d},d._up=()=>{const p=O(e);let u=0,c=s[0].dom[0];t.length||g(document.createComment(""));const l=()=>{if(!p.l)return;const f=p(),y=f.lastChild;c[u?"after":"before"](f),w(p,t,u),c=y};t.forEach((f,y)=>{const b=s[y];f.key&&f.dom.length?(l(),(!b||b.dom!==f.dom)&&c[y?"after":"before"](...f.dom),c=f.dom[f.dom.length-1]):b&&f.html===b.html&&!b.key?(l(),b.exp.forEach((_,S)=>_._up(f.exp[S].e)),f.exp=b.exp,f.dom=b.dom,c=f.dom[f.dom.length-1],re(f)&&c instanceof Text&&(c.nodeValue=f.tpl)):(b&&f.html!==b.html&&!b.key&&i.push(...b.dom),p.l||(u=y),p.add(f.tpl))}),l();let h=c==null?void 0:c.nextSibling;for(;h&&e in h;)i.push(h),h=h.nextSibling;te(i),m()};const m=()=>{i.length=0,n="",d.l=0,o={i:0,e:[]},s=[...t],t=[]},g=p=>{n="<!---->",t.push({html:n,exp:[],dom:p?[p]:[],tpl:R`${n}`,key:0})},x=p=>{let u=0;const c=[];return p.childNodes.forEach(l=>{if(l.nodeType===8&&l.data===q){u++,c.push(l);return}Object.defineProperty(l,e,{value:e}),t[u].dom.push(l)}),c.forEach(l=>l.remove()),p},w=(p,u,c)=>{p.ch().forEach((l,h)=>{u[c+h].dom=l.dom})};return d}function re(e){return e.dom.length===1&&!A(e.tpl)}const ie="/assets/github-bb39f6ee.svg",ce="/assets/solved-698d9f57.mp3";const le="https://github.com/eldarlrd",r=E({orderedIndex:[],elementValue:[],matchingValue:[],elementTiles:[],show:!1,volume:!1,ticking:!1,startTime:0,endTime:0,timeElapsed:0,minutes:0,seconds:0,moves:0}),ae=()=>{for(let e=1;e<=16;e++)r.orderedIndex.push(e),r.elementValue.push(e);M()},M=()=>{r.elementValue.sort(()=>Math.random()-.5),r.startTime=0,r.endTime=0,r.timeElapsed=0,r.moves=0,G()},G=()=>{r.elementTiles.length=0,r.elementValue.forEach(e=>{r.elementTiles.push(R`
      <div
        id=${e}
        class='${e===16?"invisible":""} flex cursor-pointer select-none items-center justify-center rounded bg-cyan-400 text-4xl font-bold text-white drop-shadow-sm transition-transform hover:scale-95 sm:text-5xl md:text-6xl'
        @click='${()=>de(e)}'>
        ${e}
      </div>
    `.key(e))}),W(),K()},de=e=>{const n=r.elementValue.indexOf(e),o=r.elementValue.indexOf(16);if(![o-4,o-1,o+1,o+4].includes(n))return;const t=E([...r.elementValue].map(s=>r.elementValue.indexOf(s)!==o&&r.elementValue.indexOf(s)!==n?s:s===16?e:16));r.elementValue=t,r.moves++,G()},fe=()=>{r.startTime===0&&(r.ticking=!0,r.startTime=performance.now()),ue()},ue=()=>{r.startTime>0&&r.ticking&&(r.endTime=performance.now(),r.timeElapsed=r.endTime-r.startTime,r.timeElapsed/=1e3,r.minutes=~~(r.timeElapsed/60),r.seconds=~~(r.timeElapsed-r.minutes*60))},W=()=>{r.matchingValue.length=0,r.elementValue.forEach((e,n)=>{e===r.orderedIndex[n]&&r.matchingValue.push(e),r.matchingValue.splice(r.matchingValue.indexOf(e))}),me()},me=()=>{r.elementValue.forEach(e=>{var n,o;r.matchingValue.includes(e)?(n=document.getElementById(e.toString()))==null||n.classList.add("bg-emerald-400"):(o=document.getElementById(e.toString()))==null||o.classList.remove("bg-emerald-400")})},K=()=>{const e=document.getElementById("modal"),n=new Audio(`${ce}`);r.show=r.elementValue.every((o,t)=>o===r.orderedIndex[t]),r.show?(r.volume&&(n==null||n.play()),r.volume=!0,r.ticking=!1,e==null||e.classList.remove("hidden")):e==null||e.classList.add("hidden")},pe=R`
  <header>
    <h1 class='m-6 select-none text-center text-4xl font-bold text-white drop-shadow-xl sm:text-5xl md:text-6xl'>
      Fifteen Puzzle
    </h1>
  </header>

  <main class='flex flex-col items-center justify-center gap-4'>
    <span class='flex w-80 items-center justify-between text-white sm:w-96 md:w-[32em]'>
      <button
        class='rounded bg-cyan-600 px-6 py-4 font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:text-lg'
        @click='${()=>M()}'>
        Shuffle
      </button>
      <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 drop-shadow-md md:text-lg'>
        <time class='text-end font-bold'>
          <figcaption>Time</figcaption>
          <p class='w-20 min-w-max'>
            ${()=>`${r.minutes===0?"":r.minutes+"m"} ${r.seconds}s`}
          </p>
        </time>
        <time class='text-end font-bold'>
          <figcaption>Moves</figcaption>
          <p>${()=>r.moves}</p>
        </time>
      </figure>
    </span>

    <section class='grid h-80 w-80 grid-cols-4 grid-rows-4 gap-1 rounded bg-cyan-600 p-1 shadow-inner drop-shadow-md sm:h-96 sm:w-96 md:h-[32em] md:w-[32em]'>
      ${()=>r.elementTiles}
    </section>
  </main>

  <div id='modal' class='fixed inset-0 z-10 flex hidden h-full w-full items-center justify-center bg-black/75'>
    <section class='flex h-64 w-80 flex-col items-center justify-center gap-6 rounded-md bg-sky-400 drop-shadow-2xl md:h-80 md:w-96'>
      <p class='select-none text-3xl text-white md:text-4xl'>
        Puzzle Solved
      </p>
      <span class='flex flex-col-reverse items-center justify-center gap-6 text-white'>
        <button
          class='rounded bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors hover:bg-cyan-700 md:py-5 md:text-xl'
          @click='${()=>M()}'>
          Shuffle
        </button>
        <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
          <time class='text-end font-bold'>
            <figcaption>Time</figcaption>
            <p class='w-20 min-w-max'>
              ${()=>`${r.minutes===0?"":r.minutes+"m"} ${r.seconds}s`}
            </p>
          </time>
          <time class='text-end font-bold'>
            <figcaption>Moves</figcaption>
            <p>${()=>r.moves}</p>
          </time>
        </figure>
      </span>
    </section>
  </div>

  <footer>
    <p class='m-6 flex select-none flex-col items-center justify-center text-center text-lg font-bold text-white drop-shadow-xl sm:text-xl md:text-2xl'>
      by <a
           class='flex items-center justify-center gap-1 text-center transition-transform hover:scale-110'
           title='Go to GitHub'
           target='_blank'
           rel='noreferrer'
           href=${le}>
           <img
             class='h-6 w-6'
             alt='GitHub Logo'
             src=${ie}
           > eldarlrd
         </a>
    </p>
  </footer>
`;T(W);T(K);T(fe);ae();console.log("Hope you don't get the 14-15 one!");const D=document.getElementById("app");D!==null&&pe(D);
