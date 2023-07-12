(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const c of i)if(c.type==="childList")for(const r of c.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function o(i){const c={};return i.integrity&&(c.integrity=i.integrity),i.referrerPolicy&&(c.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?c.credentials="include":i.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function t(i){if(i.ep)return;i.ep=!0;const c=o(i);fetch(i.href,c)}})();const V=new Set,j=new Set;function L(e){return typeof e=="function"&&!!e.isT}function k(e){return typeof e=="object"&&e!==null&&"$on"in e&&typeof e.$on=="function"}function Q(e){return"$on"in e}function J(e){return(n,o)=>{function t(){const i=Array.from(V);V.clear();const c=Array.from(j);j.clear(),i.forEach(r=>r(n,o)),c.forEach(r=>r()),V.size&&setTimeout(t)}V.size||setTimeout(t),V.add(e)}}const v=new Map;function E(e,n={}){if(k(e)||typeof e!="object")return e;const o=n.o||new Map,t=n.op||new Map,i=Array.isArray(e),c=[],r=i?[]:Object.create(e,{});for(const l in e){const a=e[l];typeof a=="object"&&a!==null?(r[l]=k(a)?a:E(a),c.push(l)):r[l]=a}const d=l=>(a,h)=>{let f=o.get(a),y=t.get(h);f||(f=new Set,o.set(a,f)),y||(y=new Set,t.set(h,y)),f[l](h),y[l](a)},m=d("add"),g=d("delete"),x=(l,a,h)=>{o.has(l)&&o.get(l).forEach(f=>f(a,h))},p={$on:m,$off:g,_em:x,_st:()=>({o,op:t,r,p:u._p}),_p:void 0},u=new Proxy(r,{has(l,a){return a in p||a in l},get(...l){const[,a]=l;if(Reflect.has(p,a))return Reflect.get(p,a);const h=Reflect.get(...l);return X(u,a),i&&a in Array.prototype?Y(a,r,u,h):h},set(...l){const[a,h,f]=l,y=Reflect.get(a,h);if(Reflect.has(p,h))return Reflect.set(p,h,f);if(f&&k(y)){const _=y,A=_._st(),O=k(f)?Z(f,_):E(f,A);return Reflect.set(a,h,O),x(h,O),A.o.forEach((ge,C)=>{const I=Reflect.get(y,C),z=Reflect.get(O,C);I!==z&&_._em(C,z,I)}),!0}const w=Reflect.set(...l);return w&&(y!==f&&x(h,f,y),u._p&&u._p[1]._em(...u._p)),w}});return n.p&&(u._p=n.p),c.map(l=>{u[l]._p=[l,u]}),u}function X(e,n){v.forEach(o=>{let t=o.get(e);t||(t=new Set,o.set(e,t)),t.add(n)})}function Y(e,n,o,t){const i=(...c)=>{const r=Array.prototype[e].call(n,...c);if(n.forEach((d,m)=>o._em(String(m),d)),o._p){const[d,m]=o._p;m._em(d,o)}return r};switch(e){case"shift":case"pop":case"sort":case"reverse":case"copyWithin":return i;case"unshift":case"push":case"fill":return(...c)=>i(...c.map(r=>E(r)));case"splice":return(c,r,...d)=>i(c,r,...d.map(m=>E(m)));default:return t}}function Z(e,n){const o=n._st();return o.o&&o.o.forEach((t,i)=>{t.forEach(c=>{e.$on(i,c)})}),o.p&&(e._p=o.p),e}function T(e,n){const o=Symbol();v.has(o)||v.set(o,new Map);let t=new Map;const i=J(c);function c(){v.set(o,new Map);const r=e(),d=v.get(o);return v.delete(o),t.forEach((m,g)=>{const x=d.get(g);x&&x.forEach(b=>m.delete(b)),m.forEach(b=>g.$off(b,i))}),d.forEach((m,g)=>{m.forEach(x=>g.$on(x,i))}),t=d,n?n(r):r}return Q(e)&&e.$on(c),c()}const S=new WeakMap,D={},q="➳❍",H="❍⇚",B=`<!--${q}-->`,ee=`<!--${H}-->`;function M(e,...n){const o=[];let t="";const i=(d,m)=>{if(typeof d=="function"){let g=()=>{};return o.push(Object.assign((...x)=>d(...x),{e:d,$on:x=>{g=x},_up:x=>{d=x,g()}})),m+B}return Array.isArray(d)?d.reduce((g,x)=>i(x,g),m):m+d},c=()=>(t||(!n.length&&e.length===1&&e[0]===""?t="<!---->":t=e.reduce(function(m,g,x){return m+=g,n[x]!==void 0?i(n[x],m):m},"")),t),r=d=>{const m=G(c()),g=N(m,{i:0,e:o});return d?g(d):g()};return r.isT=!0,r._k=0,r._h=()=>[c(),o,r._k],r.key=d=>(r._k=d,r),r}function N(e,n){const o=document.createDocumentFragment();let t;for(;t=e.item(0);){if(t.nodeType===8&&t.nodeValue===q){o.append(se(t,n));continue}t instanceof Element&&te(t,n),t.hasChildNodes()&&N(t.childNodes,n)(t),o.append(t),t instanceof HTMLOptionElement&&(t.selected=t.defaultSelected)}return i=>i?(i.appendChild(o),i):o}function te(e,n){var o;const t=[];let i=0,c;for(;c=e.attributes[i++];){if(n.i>=n.e.length)return;if(c.value!==B)continue;let r=c.name;const d=n.e[n.i++];if(r.charAt(0)==="@"){const m=r.substring(1);e.addEventListener(m,d),S.has(e)||S.set(e,new Map),(o=S.get(e))===null||o===void 0||o.set(m,d),t.push(r)}else{const m=r==="value"&&"value"in e||r==="checked"||r.startsWith(".")&&(r=r.substring(1));T(d,g=>{m&&(e[r]=g,e.getAttribute(r)!=g&&(g=!1)),g!==!1?e.setAttribute(r,g):(e.removeAttribute(r),i--)})}}t.forEach(r=>e.removeAttribute(r))}function ne(e){e.forEach(oe)}function oe(e){var n;e.remove(),(n=S.get(e))===null||n===void 0||n.forEach((o,t)=>e.removeEventListener(t,o))}function se(e,n){const o=document.createDocumentFragment();e.remove();const t=n.e[n.i++];if(t&&L(t.e))o.appendChild(P().add(t.e)());else{let i;o.appendChild((i=T(t,c=>re(c,i)))())}return o}function re(e,n){const o=typeof n=="function",t=o?n:P();return Array.isArray(e)?e.forEach(i=>t.add(i)):t.add(e),o&&t._up(),t}function G(e){var n;const t=((n=D[e])!==null&&n!==void 0?n:(()=>{const i=document.createElement("template");return i.innerHTML=e,D[e]=i})()).content.cloneNode(!0);return t.normalize(),t.childNodes}function P(e=Symbol()){let n="",o={i:0,e:[]},t=[],i=[];const c=new Map,r=[],d=()=>{let p;if(t.length||g(),t.length===1&&!L(t[0].tpl)){const u=t[0];u.dom.length?u.dom[0].nodeValue=u.tpl:u.dom.push(document.createTextNode(u.tpl)),p=u.dom[0]}else p=x(N(G(n),o)());return m(),p};d.ch=()=>i,d.l=0,d.add=p=>{if(!p&&p!==0)return d;let u=[],l,a="";L(p)&&([a,u,l]=p._h()),n+=a,n+=ee;const h=l&&c.get(l),f=h||{html:a,exp:u,dom:[],tpl:p,key:l};return t.push(f),l&&(h?h.exp.forEach((y,w)=>y._up(u[w].e)):c.set(l,f)),o.e.push(...u),d.l++,d},d._up=()=>{const p=P(e);let u=0,l=i[0].dom[0];t.length||g(document.createComment(""));const a=()=>{if(!p.l)return;const f=p(),y=f.lastChild;l[u?"after":"before"](f),b(p,t,u),l=y};t.forEach((f,y)=>{const w=i[y];f.key&&f.dom.length?(a(),(!w||w.dom!==f.dom)&&l[y?"after":"before"](...f.dom),l=f.dom[f.dom.length-1]):w&&f.html===w.html&&!w.key?(a(),w.exp.forEach((_,A)=>_._up(f.exp[A].e)),f.exp=w.exp,f.dom=w.dom,l=f.dom[f.dom.length-1],ie(f)&&l instanceof Text&&(l.nodeValue=f.tpl)):(w&&f.html!==w.html&&!w.key&&r.push(...w.dom),p.l||(u=y),p.add(f.tpl))}),a();let h=l==null?void 0:l.nextSibling;for(;h&&e in h;)r.push(h),h=h.nextSibling;ne(r),m()};const m=()=>{r.length=0,n="",d.l=0,o={i:0,e:[]},i=[...t],t=[]},g=p=>{n="<!---->",t.push({html:n,exp:[],dom:p?[p]:[],tpl:M`${n}`,key:0})},x=p=>{let u=0;const l=[];return p.childNodes.forEach(a=>{if(a.nodeType===8&&a.data===H){u++,l.push(a);return}Object.defineProperty(a,e,{value:e}),t[u].dom.push(a)}),l.forEach(a=>a.remove()),p},b=(p,u,l)=>{p.ch().forEach((a,h)=>{u[l+h].dom=a.dom})};return d}function ie(e){return e.dom.length===1&&!L(e.tpl)}const le="/fifteen-puzzle/assets/github-bb39f6ee.svg",ce="/fifteen-puzzle/assets/solved-698d9f57.mp3";const ae="https://github.com/eldarlrd",s=E({orderedIndex:[],elementValue:[],matchingValue:[],elementTiles:[],show:!1,volume:!1,ticking:!1,startTime:0,endTime:0,timeElapsed:0,minutes:0,seconds:0,moves:0}),de=()=>{for(let e=1;e<=16;e++)s.orderedIndex.push(e),s.elementValue.push(e);R()},R=()=>{s.elementValue.sort(()=>Math.random()-.5),s.startTime=0,s.endTime=0,s.timeElapsed=0,s.moves=0,K()},K=()=>{s.elementTiles.length=0,s.elementValue.forEach(e=>{s.elementTiles.push(M`
      <div
        id=${e}
        class='${e===16?"invisible":""} flex cursor-pointer select-none items-center justify-center rounded bg-cyan-400 text-4xl font-bold text-white drop-shadow-sm transition-transform hover:scale-95 sm:text-5xl md:text-6xl'
        @click='${()=>$(e)}'>
        ${e}
      </div>
    `.key(e))}),U(),W()},$=e=>{const n=s.elementValue.indexOf(e),o=s.elementValue.indexOf(16);let t=o-1,i=o+1;if(n<0||n>15||([12,8,4].includes(o)&&(t=-1),[11,7,3].includes(o)&&(i=-1),![o-4,o+4,t,i].includes(n)))return;const c=E([...s.elementValue].map(r=>s.elementValue.indexOf(r)!==o&&s.elementValue.indexOf(r)!==n?r:r===16?e:16));s.elementValue=c,s.moves++,K()},fe=e=>{switch(["ArrowUp","ArrowLeft","ArrowRight","ArrowDown","KeyR"].includes(e.code)&&e.preventDefault(),e.code){case"ArrowUp":$(s.elementValue[s.elementValue.indexOf(16)+4]);break;case"ArrowLeft":$(s.elementValue[s.elementValue.indexOf(16)+1]);break;case"ArrowRight":$(s.elementValue[s.elementValue.indexOf(16)-1]);break;case"ArrowDown":$(s.elementValue[s.elementValue.indexOf(16)-4]);break;case"KeyR":R()}},ue=()=>{s.startTime===0&&(s.ticking=!0,s.startTime=performance.now()),me()},me=()=>{s.startTime>0&&s.ticking&&(s.endTime=performance.now(),s.timeElapsed=s.endTime-s.startTime,s.timeElapsed/=1e3,s.minutes=~~(s.timeElapsed/60),s.seconds=~~(s.timeElapsed-s.minutes*60))},U=()=>{s.matchingValue.length=0,s.elementValue.forEach((e,n)=>{e===s.orderedIndex[n]&&s.matchingValue.push(e),s.matchingValue.splice(s.matchingValue.indexOf(e))}),pe()},pe=()=>{s.elementValue.forEach(e=>{var n,o;s.matchingValue.includes(e)?(n=document.getElementById(e.toString()))==null||n.classList.add("bg-emerald-400"):(o=document.getElementById(e.toString()))==null||o.classList.remove("bg-emerald-400")})},W=()=>{const e=document.getElementById("modal"),n=new Audio(`${ce}`);s.show=s.elementValue.every((o,t)=>o===s.orderedIndex[t]),s.show?(s.volume&&(n==null||n.play()),s.volume=!0,s.ticking=!1,e==null||e.classList.remove("hidden")):e==null||e.classList.add("hidden")},he=M`
  <header>
    <h1 class='m-6 select-none text-center text-4xl font-bold text-white drop-shadow-xl sm:text-5xl md:text-6xl'>
      Fifteen Puzzle
    </h1>
  </header>

  <main class='flex flex-col items-center justify-center gap-4'>
    <span class='flex w-80 items-center justify-between text-white sm:w-96 md:w-[32em]'>
      <button
        class='rounded select-none bg-cyan-600 px-6 py-4 font-bold drop-shadow-md transition-colors outline-none hover:bg-cyan-700 md:text-lg'
        @click='${()=>R()}'>
        Shuffle
      </button>
      <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 drop-shadow-md md:text-lg'>
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
          class='rounded select-none bg-cyan-600 px-6 py-4 text-lg font-bold drop-shadow-md transition-colors outline-none hover:bg-cyan-700 md:py-5 md:text-xl'
          @click='${()=>R()}'>
          Shuffle
        </button>
        <figure class='flex select-none gap-6 rounded bg-cyan-600 px-4 py-1 text-lg drop-shadow-md md:py-2 md:text-xl'>
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
      by <a
           class='flex items-center justify-center gap-1 text-center transition-transform hover:scale-110'
           title='Go to GitHub'
           target='_blank'
           rel='noreferrer'
           href=${ae}>
           <img
             class='h-6 w-6'
             alt='GitHub Logo'
             src=${le}
           > eldarlrd
         </a>
    </p>
  </footer>
`;T(U);T(W);T(ue);de();document.addEventListener("keydown",e=>fe(e));console.log("Hope you don't get the 14-15 one!");const F=document.getElementById("app");F!==null&&he(F);
