(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();function H(){}function dt(t){return t()}function ft(){return Object.create(null)}function fe(t){t.forEach(dt)}function Y(t){return typeof t=="function"}function Ce(t,l){return t!=t?l==l:t!==l||t&&typeof t=="object"||typeof t=="function"}let Ye;function I(t,l){return Ye||(Ye=document.createElement("a")),Ye.href=l,t===Ye.href}function ht(t){return Object.keys(t).length===0}function re(t){return t&&Y(t.destroy)?t.destroy:H}function s(t,l){t.appendChild(l)}function Ee(t,l,i){t.insertBefore(l,i||null)}function ge(t){t.parentNode&&t.parentNode.removeChild(t)}function n(t){return document.createElement(t)}function gt(t){return document.createTextNode(t)}function d(){return gt(" ")}function V(t,l,i,a){return t.addEventListener(l,i,a),()=>t.removeEventListener(l,i,a)}function Xe(t){return function(l){return l.preventDefault(),t.call(this,l)}}function e(t,l,i){i==null?t.removeAttribute(l):t.getAttribute(l)!==i&&t.setAttribute(l,i)}function pt(t){return Array.from(t.childNodes)}function wt(t,l,i,a){i===null?t.style.removeProperty(l):t.style.setProperty(l,i,a?"important":"")}let He;function Se(t){He=t}function yt(){if(!He)throw new Error("Function called outside component initialization");return He}function _t(t){yt().$$.on_mount.push(t)}const xe=[],B=[],Ne=[],ut=[],bt=Promise.resolve();let ze=!1;function At(){ze||(ze=!0,bt.then(mt))}function Fe(t){Ne.push(t)}const Ge=new Set;let Ae=0;function mt(){if(Ae!==0)return;const t=He;do{try{for(;Ae<xe.length;){const l=xe[Ae];Ae++,Se(l),xt(l.$$)}}catch(l){throw xe.length=0,Ae=0,l}for(Se(null),xe.length=0,Ae=0;B.length;)B.pop()();for(let l=0;l<Ne.length;l+=1){const i=Ne[l];Ge.has(i)||(Ge.add(i),i())}Ne.length=0}while(xe.length);for(;ut.length;)ut.pop()();ze=!1,Ge.clear(),Se(t)}function xt(t){if(t.fragment!==null){t.update(),fe(t.before_update);const l=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,l),t.after_update.forEach(Fe)}}const Ze=new Set;let jt;function je(t,l){t&&t.i&&(Ze.delete(t),t.i(l))}function Me(t,l,i,a){if(t&&t.o){if(Ze.has(t))return;Ze.add(t),jt.c.push(()=>{Ze.delete(t),a&&(i&&t.d(1),a())}),t.o(l)}else a&&a()}const It=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Be(t){t&&t.c()}function Ie(t,l,i,a){const{fragment:r,after_update:o}=t.$$;r&&r.m(l,i),a||Fe(()=>{const c=t.$$.on_mount.map(dt).filter(Y);t.$$.on_destroy?t.$$.on_destroy.push(...c):fe(c),t.$$.on_mount=[]}),o.forEach(Fe)}function Le(t,l){const i=t.$$;i.fragment!==null&&(fe(i.on_destroy),i.fragment&&i.fragment.d(l),i.on_destroy=i.fragment=null,i.ctx=[])}function Lt(t,l){t.$$.dirty[0]===-1&&(xe.push(t),At(),t.$$.dirty.fill(0)),t.$$.dirty[l/31|0]|=1<<l%31}function Te(t,l,i,a,r,o,c,m=[-1]){const y=He;Se(t);const f=t.$$={fragment:null,ctx:[],props:o,update:H,not_equal:r,bound:ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(y?y.$$.context:[])),callbacks:ft(),dirty:m,skip_bound:!1,root:l.target||y.$$.root};c&&c(f.root);let v=!1;if(f.ctx=i?i(t,l.props||{},(p,h,...w)=>{const b=w.length?w[0]:h;return f.ctx&&r(f.ctx[p],f.ctx[p]=b)&&(!f.skip_bound&&f.bound[p]&&f.bound[p](b),v&&Lt(t,p)),h}):[],f.update(),v=!0,fe(f.before_update),f.fragment=a?a(f.ctx):!1,l.target){if(l.hydrate){const p=pt(l.target);f.fragment&&f.fragment.l(p),p.forEach(ge)}else f.fragment&&f.fragment.c();l.intro&&je(t.$$.fragment),Ie(t,l.target,l.anchor,l.customElement),mt()}Se(y)}class Re{$destroy(){Le(this,1),this.$destroy=H}$on(l,i){if(!Y(i))return H;const a=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return a.push(i),()=>{const r=a.indexOf(i);r!==-1&&a.splice(r,1)}}$set(l){this.$$set&&!ht(l)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}const Ct=""+new URL("manutd-6e524747.jpg",import.meta.url).href,Et=""+new URL("aww-11ae5ec0.png",import.meta.url).href,Tt=""+new URL("code-dbb5d4f2.jpg",import.meta.url).href,Rt=""+new URL("figma-10f05267.png",import.meta.url).href,kt=""+new URL("movie-091dfa7e.jpg",import.meta.url).href,Vt=""+new URL("news-c629cd13.jpeg",import.meta.url).href,Ut=""+new URL("paris-8ea675bf.jpg",import.meta.url).href,Ot=""+new URL("real2-3f6ffb46.jpg",import.meta.url).href,Mt=""+new URL("rot-7ab04186.png",import.meta.url).href,Bt=""+new URL("road-c6f1a075.png",import.meta.url).href,St=""+new URL("css-cdb27625.png",import.meta.url).href,Ht=""+new URL("mdn-3d2b3a3c.png",import.meta.url).href,Pt=""+new URL("stack-0aded21a.png",import.meta.url).href;const{window:$e}=It;function Qt(t){let l=!1,i=()=>{l=!1},a,r,o,c,m,y,f,v,p,h,w,b,x,_,u,A,g,E,j,O,U,L,M,P,C,J,T,D,R,S,q,F,X,G,ce,Q,N,te,ue,k,ve,se,de,ke,Z,z,le,me,$,ne,Ve,he,ae,ie,oe,Ue,Pe,pe,et,tt,ee,Qe,we,st,lt,qe,ye,nt,it,Je,_e,rt,ct,De,be,at,Ke,ot;return Fe(t[9]),{c(){r=n("body"),o=n("header"),c=n("ul"),m=n("li"),m.innerHTML='<a href="#0" class="svelte-1ftuhtw">HOME</a>',y=d(),f=n("li"),v=n("a"),v.textContent="ABOUT",p=d(),h=n("li"),w=n("a"),w.textContent="TECH STACKS",b=d(),x=n("li"),_=n("a"),_.textContent="PROJECTS",u=d(),A=n("li"),g=n("a"),g.textContent="CONTACT",E=d(),j=n("main"),j.innerHTML=`<h2 class="svelte-1ftuhtw">Hey, SIYAM here</h2> 
    <h2 class="svelte-1ftuhtw">Front-End <span class="svelte-1ftuhtw">web</span> Developer</h2> 
    <h2 class="svelte-1ftuhtw">Technophile | <span class="svelte-1ftuhtw">Astute</span></h2>`,O=d(),U=n("div"),L=n("div"),M=n("div"),P=n("div"),C=n("img"),T=d(),D=n("div"),R=n("img"),q=d(),F=n("div"),X=n("img"),ce=d(),Q=n("div"),N=n("img"),ue=d(),k=n("div"),ve=n("div"),se=n("img"),ke=d(),Z=n("div"),z=n("img"),me=d(),$=n("div"),ne=n("img"),he=d(),ae=n("div"),ie=n("img"),Ue=d(),Pe=n("div"),pe=n("img"),tt=d(),ee=n("div"),Qe=n("div"),we=n("img"),lt=d(),qe=n("div"),ye=n("img"),it=d(),Je=n("div"),_e=n("img"),ct=d(),De=n("div"),be=n("img"),e(m,"class","svelte-1ftuhtw"),e(v,"data-tinro-ignore",""),e(v,"href","#abt"),e(v,"class","svelte-1ftuhtw"),e(f,"class","svelte-1ftuhtw"),e(w,"data-tinro-ignore",""),e(w,"href","#tech"),e(w,"class","svelte-1ftuhtw"),e(h,"class","svelte-1ftuhtw"),e(_,"data-tinro-ignore",""),e(_,"href","#project"),e(_,"class","svelte-1ftuhtw"),e(x,"class","svelte-1ftuhtw"),e(g,"data-tinro-ignore",""),e(g,"href","#contact"),e(g,"class","svelte-1ftuhtw"),e(A,"class","svelte-1ftuhtw"),e(c,"class","svelte-1ftuhtw"),e(o,"class","svelte-1ftuhtw"),e(j,"class","svelte-1ftuhtw"),I(C.src,J=Vt)||e(C,"src",J),e(C,"alt",""),e(C,"class","svelte-1ftuhtw"),e(P,"class","svelte-1ftuhtw"),I(R.src,S=Ht)||e(R,"src",S),e(R,"alt",""),e(R,"class","svelte-1ftuhtw"),e(D,"class","svelte-1ftuhtw"),I(X.src,G=Et)||e(X,"src",G),e(X,"alt",""),e(X,"class","svelte-1ftuhtw"),e(F,"class","svelte-1ftuhtw"),I(N.src,te=Pt)||e(N,"src",te),e(N,"alt",""),e(N,"class","svelte-1ftuhtw"),e(Q,"class","svelte-1ftuhtw"),e(M,"class","child svelte-1ftuhtw"),I(se.src,de=Ut)||e(se,"src",de),e(se,"alt",""),e(se,"class","svelte-1ftuhtw"),e(ve,"class","svelte-1ftuhtw"),I(z.src,le=Ct)||e(z,"src",le),e(z,"alt",""),e(z,"class","svelte-1ftuhtw"),e(Z,"class","svelte-1ftuhtw"),I(ne.src,Ve=Bt)||e(ne,"src",Ve),e(ne,"alt",""),e(ne,"class","svelte-1ftuhtw"),e($,"class","svelte-1ftuhtw"),I(ie.src,oe=Ot)||e(ie,"src",oe),e(ie,"alt",""),e(ie,"class","svelte-1ftuhtw"),e(ae,"class","svelte-1ftuhtw"),I(pe.src,et=St)||e(pe,"src",et),e(pe,"alt",""),e(pe,"class","svelte-1ftuhtw"),e(Pe,"class","svelte-1ftuhtw"),e(k,"class","child svelte-1ftuhtw"),e(k,"data-scroll",""),e(k,"data-scroll-direction","horizontal"),e(k,"data-scroll-speed","1"),I(we.src,st=kt)||e(we,"src",st),e(we,"alt",""),e(we,"class","svelte-1ftuhtw"),e(Qe,"class","svelte-1ftuhtw"),I(ye.src,nt=Tt)||e(ye,"src",nt),e(ye,"alt",""),e(ye,"class","svelte-1ftuhtw"),e(qe,"class","svelte-1ftuhtw"),I(_e.src,rt=Rt)||e(_e,"src",rt),e(_e,"alt",""),e(_e,"class","svelte-1ftuhtw"),e(Je,"class","svelte-1ftuhtw"),I(be.src,at=Mt)||e(be,"src",at),e(be,"alt",""),e(be,"class","svelte-1ftuhtw"),e(De,"class","svelte-1ftuhtw"),e(ee,"class","child svelte-1ftuhtw"),e(L,"class","about svelte-1ftuhtw"),e(U,"class","abtwrap svelte-1ftuhtw")},m(Oe,We){Ee(Oe,r,We),s(r,o),s(o,c),s(c,m),t[10](m),s(c,y),s(c,f),s(f,v),s(c,p),s(c,h),s(h,w),s(c,b),s(c,x),s(x,_),s(c,u),s(c,A),s(A,g),t[11](o),s(r,E),s(r,j),s(r,O),s(r,U),s(U,L),s(L,M),s(M,P),s(P,C),s(M,T),s(M,D),s(D,R),s(M,q),s(M,F),s(F,X),s(M,ce),s(M,Q),s(Q,N),t[12](M),s(L,ue),s(L,k),s(k,ve),s(ve,se),s(k,ke),s(k,Z),s(Z,z),s(k,me),s(k,$),s($,ne),s(k,he),s(k,ae),s(ae,ie),s(k,Ue),s(k,Pe),s(Pe,pe),t[13](k),s(L,tt),s(L,ee),s(ee,Qe),s(Qe,we),s(ee,lt),s(ee,qe),s(qe,ye),s(ee,it),s(ee,Je),s(Je,_e),s(ee,ct),s(ee,De),s(De,be),t[14](ee),Ke||(ot=[V($e,"scroll",()=>{l=!0,clearTimeout(a),a=setTimeout(i,100),t[9]()}),V(v,"click",Xe(t[6])),V(w,"click",Xe(t[6])),V(_,"click",Xe(t[6])),V(g,"click",Xe(t[6])),re(t[8].call(null,U)),V(U,"enterViewport",t[7]),V(U,"exitViewport",qt)],Ke=!0)},p(Oe,[We]){We&32&&!l&&(l=!0,clearTimeout(a),scrollTo($e.pageXOffset,Oe[5]),a=setTimeout(i,100))},i:H,o:H,d(Oe){Oe&&ge(r),t[10](null),t[11](null),t[12](null),t[13](null),t[14](null),Ke=!1,fe(ot)}}}function qt(){}function Jt(t,l,i){let a,r,o,c,m,y;_t(()=>{m.addEventListener("click",()=>{window.scrollTo({top:0})})});const f=({target:g})=>{document.getElementById(g.href.split("#").at(-1)).scrollIntoView({behavior:"smooth"})};function v(){document.addEventListener("scroll",()=>{const g=window.scrollY*.2;i(1,r.style=`transform:translateX(${g}px);transition:all 1s`,r),i(2,o.style=`transform:translateX(-${g}px);transition:all 1s`,o),i(3,c.style=`transform:translateX(${g}px);transition:all 1s`,c)})}const p=new IntersectionObserver(g=>{g.forEach(E=>{const j=E.isIntersecting?"enterViewport":"exitViewport";E.target.dispatchEvent(new CustomEvent(j))})});function h(g){p.observe(g)}function w(){i(5,y=$e.pageYOffset)}function b(g){B[g?"unshift":"push"](()=>{m=g,i(4,m)})}function x(g){B[g?"unshift":"push"](()=>{a=g,i(0,a)})}function _(g){B[g?"unshift":"push"](()=>{r=g,i(1,r)})}function u(g){B[g?"unshift":"push"](()=>{o=g,i(2,o)})}function A(g){B[g?"unshift":"push"](()=>{c=g,i(3,c)})}return[a,r,o,c,m,y,f,v,h,w,b,x,_,u,A]}class Dt extends Re{constructor(l){super(),Te(this,l,Jt,Qt,Ce,{})}}const Yt=""+new URL("face-649b4be3.jpg",import.meta.url).href;function Xt(t){let l,i,a,r,o,c,m,y,f,v,p,h,w,b,x,_,u,A,g,E;return{c(){l=n("body"),i=n("div"),a=n("img"),o=d(),c=n("main"),m=n("div"),y=n("div"),f=n("div"),v=n("div"),v.innerHTML='<p class="svelte-1hhcqsv">In order to find my true passion than</p>',p=d(),h=n("div"),h.innerHTML='<p class="svelte-1hhcqsv">spending my time playing football,</p>',w=d(),b=n("div"),b.innerHTML='<p class="svelte-1hhcqsv">I have been actively exploring various fields.</p>',x=d(),_=n("div"),_.innerHTML=`<p class="svelte-1hhcqsv">Currently, I am <span class="self svelte-1hhcqsv">self-learning</span>
                            full-stack development using
                            <span class="open svelte-1hhcqsv">open-source resources</span></p>`,u=d(),A=n("div"),A.textContent="to broaden my horizons.",I(a.src,r=Yt)||e(a,"src",r),e(a,"alt",""),e(a,"class","svelte-1hhcqsv"),e(i,"class","img svelte-1hhcqsv"),e(v,"class","svelte-1hhcqsv"),e(h,"class","svelte-1hhcqsv"),e(b,"class","svelte-1hhcqsv"),e(_,"class","svelte-1hhcqsv"),e(A,"class","svelte-1hhcqsv"),e(f,"class","idea svelte-1hhcqsv"),e(y,"class","w2"),e(m,"class","doin svelte-1hhcqsv"),e(c,"class","svelte-1hhcqsv"),e(l,"id","abt"),e(l,"class","svelte-1hhcqsv")},m(j,O){Ee(j,l,O),s(l,i),s(i,a),s(l,o),s(l,c),s(c,m),s(m,y),s(y,f),s(f,v),t[8](v),s(f,p),s(f,h),t[9](h),s(f,w),s(f,b),t[10](b),s(f,x),s(f,_),t[11](_),s(f,u),s(f,A),t[12](A),g||(E=[re(t[7].call(null,_)),V(_,"entry",t[5]),V(_,"exit",t[6])],g=!0)},p:H,i:H,o:H,d(j){j&&ge(l),t[8](null),t[9](null),t[10](null),t[11](null),t[12](null),g=!1,fe(E)}}}function Nt(t,l,i){let a,r,o,c,m;function y(){i(0,a.style="transform:translateY(0em);opacity:1;",a),i(1,r.style="transform:translateY(0em);opacity:1;",r),i(2,o.style="transform:translateY(0em);opacity:1;",o),i(3,c.style="transform:translateY(0em);opacity:1;",c),i(4,m.style="transform:translateY(0em);opacity:1;",m)}function f(){i(0,a.style="transform:translateY(2em)",a),i(1,r.style="transform:translateY(2em)",r),i(2,o.style="transform:translateY(2em)",o),i(3,c.style="transform:translateY(2em)",c),i(4,m.style="transform:translateY(2em)",m)}const v=new IntersectionObserver(u=>{u.forEach(A=>{const g=A.isIntersecting?"entry":"exit";A.target.dispatchEvent(new CustomEvent(g))})});function p(u){v.observe(u)}function h(u){B[u?"unshift":"push"](()=>{a=u,i(0,a)})}function w(u){B[u?"unshift":"push"](()=>{r=u,i(1,r)})}function b(u){B[u?"unshift":"push"](()=>{o=u,i(2,o)})}function x(u){B[u?"unshift":"push"](()=>{c=u,i(3,c)})}function _(u){B[u?"unshift":"push"](()=>{m=u,i(4,m)})}return[a,r,o,c,m,y,f,p,h,w,b,x,_]}class Zt extends Re{constructor(l){super(),Te(this,l,Nt,Xt,Ce,{})}}const Ft=""+new URL("js-2812b31e.svg",import.meta.url).href,Kt=""+new URL("html-fae2500c.svg",import.meta.url).href,Wt=""+new URL("css-81af44d6.svg",import.meta.url).href,Gt=""+new URL("c-8dcc5a4a.svg",import.meta.url).href,zt=""+new URL("python-ba36b851.svg",import.meta.url).href,$t=""+new URL("svelte-a39f39b7.svg",import.meta.url).href;function es(t){let l,i,a,r,o,c,m,y,f,v,p,h,w,b,x,_,u,A,g,E,j,O,U,L,M,P,C,J,T,D,R,S,q,F,X,G,ce,Q,N,te,ue,k,ve,se,de,ke,Z,z,le,me,$,ne,Ve,he,ae,ie;return{c(){l=n("div"),i=n("div"),a=n("div"),r=n("div"),o=n("div"),c=n("img"),y=d(),f=n("div"),f.innerHTML=`<h2 class="svelte-cjn17x">JAVASCRIPT</h2> 
                    <p class="svelte-cjn17x">I am good in a beginner level of programming/scripting
                        using JAVASCRIPT, but most importantly i love it</p>`,v=d(),p=n("div"),h=n("div"),w=n("div"),b=n("div"),x=n("img"),u=d(),A=n("div"),A.innerHTML=`<h2 class="svelte-cjn17x">HTML</h2> 
                    <p class="svelte-cjn17x">A simple standard markup language where i am familiar with but its a sea and we have shortcuts where i am on the progress of learning</p>`,g=d(),E=n("div"),j=n("div"),O=n("div"),U=n("div"),L=n("img"),P=d(),C=n("div"),C.innerHTML=`<h2 class="svelte-cjn17x">CSS</h2> 
                    <p class="svelte-cjn17x">I dont prefer to use css frameworks, just css is a beauty. Well even it has shortcuts where i am learning.</p>`,J=d(),T=n("div"),D=n("div"),R=n("div"),S=n("div"),q=n("img"),X=d(),G=n("div"),G.innerHTML=`<h2 class="svelte-cjn17x">C</h2> 
                    <p class="svelte-cjn17x">I worked on C programming for 3 months but i must get to know more about it to enrich my knowledge.</p>`,ce=d(),Q=n("div"),N=n("div"),te=n("div"),ue=n("div"),k=n("img"),se=d(),de=n("div"),de.innerHTML=`<h2 class="svelte-cjn17x">PYTHON</h2> 
                    <p class="svelte-cjn17x">The simplest lang where i came across in my life and i have a basic knowledge and 1 year of experience with SQL database too.</p>`,ke=d(),Z=n("div"),z=n("div"),le=n("div"),me=n("div"),$=n("img"),Ve=d(),he=n("div"),he.innerHTML=`<h2 class="svelte-cjn17x">SVELTE</h2> 
                    <p class="svelte-cjn17x">The only framework i use and made me to love it. The idea of surgical injection is too good.</p>`,I(c.src,m=Ft)||e(c,"src",m),e(c,"alt","img"),e(c,"class","svelte-cjn17x"),e(o,"class","img svelte-cjn17x"),e(f,"class","reveal svelte-cjn17x"),e(r,"class","wrap svelte-cjn17x"),e(a,"class","container svelte-cjn17x"),e(i,"class","box svelte-cjn17x"),I(x.src,_=Kt)||e(x,"src",_),e(x,"alt","img"),e(x,"class","svelte-cjn17x"),e(b,"class","img svelte-cjn17x"),e(A,"class","reveal svelte-cjn17x"),e(w,"class","wrap svelte-cjn17x"),e(h,"class","container svelte-cjn17x"),e(p,"class","box svelte-cjn17x"),I(L.src,M=Wt)||e(L,"src",M),e(L,"alt","img"),e(L,"class","svelte-cjn17x"),e(U,"class","img svelte-cjn17x"),e(C,"class","reveal svelte-cjn17x"),e(O,"class","wrap svelte-cjn17x"),e(j,"class","container svelte-cjn17x"),e(E,"class","box svelte-cjn17x"),I(q.src,F=Gt)||e(q,"src",F),e(q,"alt","img"),e(q,"class","svelte-cjn17x"),e(S,"class","img svelte-cjn17x"),e(G,"class","reveal svelte-cjn17x"),e(R,"class","wrap svelte-cjn17x"),e(D,"class","container svelte-cjn17x"),e(T,"class","box svelte-cjn17x"),I(k.src,ve=zt)||e(k,"src",ve),e(k,"alt","img"),e(k,"class","svelte-cjn17x"),e(ue,"class","img svelte-cjn17x"),e(de,"class","reveal svelte-cjn17x"),e(te,"class","wrap svelte-cjn17x"),e(N,"class","container svelte-cjn17x"),e(Q,"class","box svelte-cjn17x"),I($.src,ne=$t)||e($,"src",ne),e($,"alt","img"),e($,"class","svelte-cjn17x"),e(me,"class","img svelte-cjn17x"),e(he,"class","reveal svelte-cjn17x"),e(le,"class","wrap svelte-cjn17x"),e(z,"class","container svelte-cjn17x"),e(Z,"class","box svelte-cjn17x"),e(l,"class","main svelte-cjn17x"),e(l,"id","tech")},m(oe,Ue){Ee(oe,l,Ue),s(l,i),s(i,a),s(a,r),s(r,o),s(o,c),s(r,y),s(r,f),t[7](i),s(l,v),s(l,p),s(p,h),s(h,w),s(w,b),s(b,x),s(w,u),s(w,A),t[8](p),s(l,g),s(l,E),s(E,j),s(j,O),s(O,U),s(U,L),s(O,P),s(O,C),t[9](E),s(l,J),s(l,T),s(T,D),s(D,R),s(R,S),s(S,q),s(R,X),s(R,G),t[10](T),s(l,ce),s(l,Q),s(Q,N),s(N,te),s(te,ue),s(ue,k),s(te,se),s(te,de),t[11](Q),s(l,ke),s(l,Z),s(Z,z),s(z,le),s(le,me),s(me,$),s(le,Ve),s(le,he),t[12](Z),ae||(ie=[re(t[6].call(null,i)),V(i,"enterViewport",function(){Y(K(t[0]))&&K(t[0]).apply(this,arguments)}),V(i,"exitViewport",function(){Y(W(t[0]))&&W(t[0]).apply(this,arguments)}),re(t[6].call(null,p)),V(p,"enterViewport",function(){Y(K(t[1]))&&K(t[1]).apply(this,arguments)}),V(p,"exitViewport",function(){Y(W(t[1]))&&W(t[1]).apply(this,arguments)}),re(t[6].call(null,E)),V(E,"enterViewport",function(){Y(K(t[2]))&&K(t[2]).apply(this,arguments)}),V(E,"exitViewport",function(){Y(W(t[2]))&&W(t[2]).apply(this,arguments)}),re(t[6].call(null,T)),V(T,"enterViewport",function(){Y(K(t[3]))&&K(t[3]).apply(this,arguments)}),V(T,"exitViewport",function(){Y(W(t[3]))&&W(t[3]).apply(this,arguments)}),re(t[6].call(null,Q)),V(Q,"enterViewport",function(){Y(K(t[4]))&&K(t[4]).apply(this,arguments)}),V(Q,"exitViewport",function(){Y(W(t[4]))&&W(t[4]).apply(this,arguments)}),re(t[6].call(null,Z)),V(Z,"enterViewport",function(){Y(K(t[5]))&&K(t[5]).apply(this,arguments)}),V(Z,"exitViewport",function(){Y(W(t[5]))&&W(t[5]).apply(this,arguments)})],ae=!0)},p(oe,[Ue]){t=oe},i:H,o:H,d(oe){oe&&ge(l),t[7](null),t[8](null),t[9](null),t[10](null),t[11](null),t[12](null),ae=!1,fe(ie)}}}function K(t){t.style=`opacity: 1;
        filter: blur(0); 
        transition: 2s;`}function W(t){t.style=`opacity: 0;
        filter: blur(5px);
        transform: translateX(-100%);
        transition:0s `}function ts(t,l,i){let a,r,o,c,m,y;const f=new IntersectionObserver(u=>{u.forEach(A=>{const g=A.isIntersecting?"enterViewport":"exitViewport";A.target.dispatchEvent(new CustomEvent(g))})});function v(u){return f.observe(u),{destroy(){f.unobserve(u)}}}function p(u){B[u?"unshift":"push"](()=>{a=u,i(0,a)})}function h(u){B[u?"unshift":"push"](()=>{r=u,i(1,r)})}function w(u){B[u?"unshift":"push"](()=>{o=u,i(2,o)})}function b(u){B[u?"unshift":"push"](()=>{c=u,i(3,c)})}function x(u){B[u?"unshift":"push"](()=>{m=u,i(4,m)})}function _(u){B[u?"unshift":"push"](()=>{y=u,i(5,y)})}return[a,r,o,c,m,y,v,p,h,w,b,x,_]}class ss extends Re{constructor(l){super(),Te(this,l,ts,es,Ce,{})}}const ls=""+new URL("rot2-049d9429.png",import.meta.url).href,ns=""+new URL("portfolio-51f223ae.png",import.meta.url).href,vt="data:image/png;base64,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";function is(t){let l,i,a,r,o,c,m,y,f,v,p,h,w,b,x,_,u,A,g,E,j,O,U,L,M,P,C,J,T,D,R,S,q,F,X,G,ce;return{c(){l=n("body"),i=n("h2"),i.textContent="Projects",a=d(),r=n("div"),o=n("div"),c=n("div"),m=n("img"),f=d(),v=n("div"),p=n("div"),h=n("h2"),h.textContent="Portfolio",w=d(),b=n("div"),x=n("a"),_=n("img"),A=d(),g=n("p"),g.textContent="a simple portfolio page made with svelte",E=d(),j=n("div"),O=n("div"),U=n("img"),M=d(),P=n("div"),C=n("div"),J=n("h2"),J.textContent="Region of Tournments",T=d(),D=n("div"),R=n("a"),S=n("img"),F=d(),X=n("p"),X.textContent="Platform to create a gaming community",e(i,"class","heading svelte-1yk5cxc"),I(m.src,y=ns)||e(m,"src",y),e(m,"alt",""),e(m,"class","svelte-1yk5cxc"),e(c,"class","img svelte-1yk5cxc"),e(h,"class","svelte-1yk5cxc"),I(_.src,u=vt)||e(_,"src",u),e(_,"class","arrow svelte-1yk5cxc"),e(_,"alt",""),e(x,"href","https://siyam333.github.io/portfolio/"),e(x,"target","_blank"),e(x,"rel","noreferrer"),e(p,"class","heading-sub svelte-1yk5cxc"),e(g,"class","svelte-1yk5cxc"),e(v,"class","prohead svelte-1yk5cxc"),e(o,"class","project svelte-1yk5cxc"),I(U.src,L=ls)||e(U,"src",L),e(U,"alt",""),e(U,"class","svelte-1yk5cxc"),e(O,"class","img svelte-1yk5cxc"),e(J,"class","svelte-1yk5cxc"),I(S.src,q=vt)||e(S,"src",q),e(S,"class","arrow svelte-1yk5cxc"),e(S,"alt",""),e(R,"href","https://github.com/Rajaniraiyn/rot-landing-page"),e(R,"target","_blank"),e(R,"rel","noreferrer"),e(C,"class","heading-sub svelte-1yk5cxc"),e(X,"class","svelte-1yk5cxc"),e(P,"class","prohead svelte-1yk5cxc"),e(j,"class","project svelte-1yk5cxc"),e(r,"class","wrap svelte-1yk5cxc"),e(l,"id","project"),e(l,"class","svelte-1yk5cxc")},m(Q,N){Ee(Q,l,N),s(l,i),s(l,a),s(l,r),s(r,o),s(o,c),s(c,m),s(o,f),s(o,v),s(v,p),s(p,h),s(p,w),s(p,b),s(b,x),s(x,_),s(v,A),s(v,g),t[4](o),s(r,E),s(r,j),s(j,O),s(O,U),s(j,M),s(j,P),s(P,C),s(C,J),s(C,T),s(C,D),s(D,R),s(R,S),s(P,F),s(P,X),t[5](j),G||(ce=[re(t[3].call(null,r)),V(r,"entry",t[2]),V(r,"exit",rs)],G=!0)},p:H,i:H,o:H,d(Q){Q&&ge(l),t[4](null),t[5](null),G=!1,fe(ce)}}}function rs(){}function cs(t,l,i){let a,r;function o(){document.addEventListener("wheel",v=>{v.deltaY>0&&a.getBoundingClientRect().top/16<=18.75&&(i(0,a.style="transform:rotate(0deg);translateX(-6em);transition:all 1s;",a),i(1,r.style="transform:rotate(0deg);translateX(6em);transition:all 1s;",r))})}const c=new IntersectionObserver(v=>{v.forEach(p=>{const h=p.isIntersecting?"entry":"exit";p.target.dispatchEvent(new CustomEvent(h))})});function m(v){c.observe(v)}function y(v){B[v?"unshift":"push"](()=>{a=v,i(0,a)})}function f(v){B[v?"unshift":"push"](()=>{r=v,i(1,r)})}return[a,r,o,m,y,f]}class as extends Re{constructor(l){super(),Te(this,l,cs,is,Ce,{})}}const os=""+new URL("github-fc6dd62e.svg",import.meta.url).href,fs=""+new URL("gmail-f00fadcd.svg",import.meta.url).href,us=""+new URL("instagram-9da2c622.svg",import.meta.url).href,vs=""+new URL("linkdin-85e07b94.svg",import.meta.url).href,ds="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO3by04UQRTG8X9mxoVcTLxtBHdGfAEJPIGXtaLRxIUati4R1iosBRFCeAMJGsX4HhpcGy6aeMEtwqZNm5qIEKnTXTX00P39ktqRU13n9FRXVTcgIiIiIiIiIiIiIiIiIiIiIiIiIiLyrzowCIwBi8BH4CewDSSBLVRo/9tuLMtubKPAAFCjDZwFJoD1CANN2rQA/2trwDjQSwFOA3PAVgsHmLR5AZotzcEMcJIDcgvYOICBJYekAM32A7hBCx0B5g9wQMkhK0CzzQINIusA3hUwmCTCtRdxzW9dzqLd+UUlP4lw/UmBRYjySyhi2klKUIDEPZyD3M7Y4QowBVwC+oBODr9ON5Z0TM+A1Yw5Gcrbcbqs+m7sJN0HDLsNWdnVgOvApwyro1N5OpozdvAK6KJ6uoHXxhxN59nhWjZZT9tlS16QdOyThjz9AnqyBJ4w3vlVTn5TzfhLeIJR3XC2s1bRaWe/6eizJ2er1ht20FDNu5ZAFXPfkLd+S6Axw1KzCqudrOpuZtgvdw8tgV56gqQPnRBJm7cQ057YC5Ygy54gl4MusdwFuOqJ/cESxHfUfC7wIstcgD5P7HRj6+Vb/4eufspcgC7DfsBLBcjvWIwC+Kag84Qp8y/gQowpSA/hgh/Ci54g6ZFsiDL/AmY8sV9YgowattTaiO3VMGzERjAYMNwl9yyBKmbYkLeLlkA1QyXX3QGU/F39fDEc4ZhPj8cN1UyPYHUczZ8cvDHk6zEZ9BpfyExWvAg19w7cl6dN4EzsJ/rOX0J3RaedJWOO0iJldgL4Zuwg/bsHrfgirE3v+juGOX/nS/nc343eNHbSbGvuSPaK2xWW4a1ZlxtLusl6blig7G7XQi9gNmOHsVuoIq8919SzW93wkkYFYE8OlmJOyR3uW0cVAFMO0mXpUSJrZFgZVXkKmmr1YmQowyeLVSrA1xgP3CxL1Gn3gqHqBdh0d/1xCtDjvvharWABVoBHeXa4rdqc9LvvXhbci4eNSP/EFyq0/y03lvdubCPuVLPKRzAiIiIiIiIiIiIiIiIiIiIiIiIiIsJevwHM218LQVp+KgAAAABJRU5ErkJggg==";function ms(t){let l,i,a,r,o,c,m,y,f,v,p,h,w,b,x,_,u,A,g,E,j,O,U,L,M,P,C,J,T,D=`url(${ds})`,R,S;return{c(){l=n("div"),i=n("div"),a=n("h2"),a.textContent="CONTACT",r=d(),o=n("div"),c=n("a"),m=n("img"),f=n("a"),v=n("img"),h=d(),w=n("a"),b=n("img"),_=d(),u=n("a"),A=n("img"),E=d(),j=n("div"),O=n("div"),O.innerHTML=`<h3 class="svelte-fx85t9">INSPIRE</h3> 
            <h3 class="svelte-fx85t9">INNOVATE</h3> 
            <h3 class="svelte-fx85t9">BURST IT OUT</h3>`,U=d(),L=n("div"),M=n("h3"),M.textContent="SPECIAL THANKS TO:",P=d(),C=n("ul"),J=n("li"),T=n("a"),T.textContent="RAJANIRAIYN",R=d(),S=n("li"),S.textContent="TEJASWINI",e(a,"class","svelte-fx85t9"),e(m,"class","git svelte-fx85t9"),I(m.src,y=os)||e(m,"src",y),e(m,"alt",""),e(c,"href","https://github.com/siyam333"),e(c,"target","_blank"),e(c,"rel","noreferrer"),e(c,"class","svelte-fx85t9"),I(v.src,p=us)||e(v,"src",p),e(v,"alt",""),e(v,"class","svelte-fx85t9"),e(f,"href","https://www.instagram.com/siyam_333/"),e(f,"target","_blank"),e(f,"rel","noreferrer"),e(f,"class","svelte-fx85t9"),I(b.src,x=vs)||e(b,"src",x),e(b,"alt",""),e(b,"class","svelte-fx85t9"),e(w,"href","https://www.linkedin.com/in/siyam-sundar-5330a324a/"),e(w,"target","_blank"),e(w,"rel","noreferrer"),e(w,"class","svelte-fx85t9"),I(A.src,g=fs)||e(A,"src",g),e(A,"alt",""),e(A,"class","svelte-fx85t9"),e(u,"href","mailto:%73%69%79%61%6D%73%75%6E%64%61%72%33%33%33%40%67%6D%61%69%6C%2E%63%6F%6D"),e(u,"class","svelte-fx85t9"),e(o,"class","links svelte-fx85t9"),e(i,"class","contact svelte-fx85t9"),e(O,"class","inspire svelte-fx85t9"),e(T,"href","https://github.com/Rajaniraiyn"),e(T,"target","_blank"),e(T,"rel","noreferrer"),e(T,"class","svelte-fx85t9"),wt(T,"--url",D),e(J,"class","svelte-fx85t9"),e(S,"class","svelte-fx85t9"),e(C,"class","svelte-fx85t9"),e(L,"class","ppl svelte-fx85t9"),e(j,"class","thanks svelte-fx85t9"),e(l,"class","cover svelte-fx85t9"),e(l,"id","contact")},m(q,F){Ee(q,l,F),s(l,i),s(i,a),s(i,r),s(i,o),s(o,c),s(c,m),s(o,f),s(f,v),s(o,h),s(o,w),s(w,b),s(w,_),s(o,u),s(u,A),s(l,E),s(l,j),s(j,O),s(j,U),s(j,L),s(L,M),s(L,P),s(L,C),s(C,J),s(J,T),s(C,R),s(C,S)},p:H,i:H,o:H,d(q){q&&ge(l)}}}class hs extends Re{constructor(l){super(),Te(this,l,null,ms,Ce,{})}}function gs(t){let l,i,a,r,o,c,m,y,f,v,p;return i=new Dt({}),r=new Zt({}),c=new ss({}),y=new as({}),v=new hs({}),{c(){l=n("main"),Be(i.$$.fragment),a=d(),Be(r.$$.fragment),o=d(),Be(c.$$.fragment),m=d(),Be(y.$$.fragment),f=d(),Be(v.$$.fragment)},m(h,w){Ee(h,l,w),Ie(i,l,null),s(l,a),Ie(r,l,null),s(l,o),Ie(c,l,null),s(l,m),Ie(y,l,null),s(l,f),Ie(v,l,null),p=!0},p:H,i(h){p||(je(i.$$.fragment,h),je(r.$$.fragment,h),je(c.$$.fragment,h),je(y.$$.fragment,h),je(v.$$.fragment,h),p=!0)},o(h){Me(i.$$.fragment,h),Me(r.$$.fragment,h),Me(c.$$.fragment,h),Me(y.$$.fragment,h),Me(v.$$.fragment,h),p=!1},d(h){h&&ge(l),Le(i),Le(r),Le(c),Le(y),Le(v)}}}class ps extends Re{constructor(l){super(),Te(this,l,null,gs,Ce,{})}}new ps({target:document.getElementById("app")});
