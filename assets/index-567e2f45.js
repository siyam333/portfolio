(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))f(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&f(u)}).observe(document,{childList:!0,subtree:!0});function l(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function f(a){if(a.ep)return;a.ep=!0;const c=l(a);fetch(a.href,c)}})();function ie(){}function zt(e){return e()}function Wt(){return Object.create(null)}function Le(e){e.forEach(zt)}function ne(e){return typeof e=="function"}function Ze(e,i){return e!=e?i==i:e!==i||e&&typeof e=="object"||typeof e=="function"}let ut;function T(e,i){return ut||(ut=document.createElement("a")),ut.href=i,e===ut.href}function es(e){return Object.keys(e).length===0}function Ce(e){return e&&ne(e.destroy)?e.destroy:ie}function s(e,i){e.appendChild(i)}function we(e,i,l){e.insertBefore(i,l||null)}function ye(e){e.parentNode&&e.parentNode.removeChild(e)}function n(e){return document.createElement(e)}function ts(e){return document.createTextNode(e)}function m(){return ts(" ")}function O(e,i,l,f){return e.addEventListener(i,l,f),()=>e.removeEventListener(i,l,f)}function be(e){return function(i){return i.preventDefault(),e.call(this,i)}}function t(e,i,l){l==null?e.removeAttribute(i):e.getAttribute(i)!==l&&e.setAttribute(i,l)}function ss(e){return Array.from(e.childNodes)}function ls(e,i,l,f){l===null?e.style.removeProperty(i):e.style.setProperty(i,l,f?"important":"")}function p(e,i,l){e.classList[l?"add":"remove"](i)}let $e;function ze(e){$e=e}function ns(){if(!$e)throw new Error("Function called outside component initialization");return $e}function pt(e){ns().$$.on_mount.push(e)}const Qe=[],k=[],mt=[],Kt=[],is=Promise.resolve();let _t=!1;function rs(){_t||(_t=!0,is.then($t))}function At(e){mt.push(e)}const wt=new Set;let Xe=0;function $t(){if(Xe!==0)return;const e=$e;do{try{for(;Xe<Qe.length;){const i=Qe[Xe];Xe++,ze(i),os(i.$$)}}catch(i){throw Qe.length=0,Xe=0,i}for(ze(null),Qe.length=0,Xe=0;k.length;)k.pop()();for(let i=0;i<mt.length;i+=1){const l=mt[i];wt.has(l)||(wt.add(l),l())}mt.length=0}while(Qe.length);for(;Kt.length;)Kt.pop()();_t=!1,wt.clear(),ze(e)}function os(e){if(e.fragment!==null){e.update(),Le(e.before_update);const i=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,i),e.after_update.forEach(At)}}const dt=new Set;let as;function Je(e,i){e&&e.i&&(dt.delete(e),e.i(i))}function Ke(e,i,l,f){if(e&&e.o){if(dt.has(e))return;dt.add(e),as.c.push(()=>{dt.delete(e),f&&(l&&e.d(1),f())}),e.o(i)}else f&&f()}function Ge(e){e&&e.c()}function De(e,i,l,f){const{fragment:a,after_update:c}=e.$$;a&&a.m(i,l),f||At(()=>{const u=e.$$.on_mount.map(zt).filter(ne);e.$$.on_destroy?e.$$.on_destroy.push(...u):Le(u),e.$$.on_mount=[]}),c.forEach(At)}function Ne(e,i){const l=e.$$;l.fragment!==null&&(Le(l.on_destroy),l.fragment&&l.fragment.d(i),l.on_destroy=l.fragment=null,l.ctx=[])}function fs(e,i){e.$$.dirty[0]===-1&&(Qe.push(e),rs(),e.$$.dirty.fill(0)),e.$$.dirty[i/31|0]|=1<<i%31}function Fe(e,i,l,f,a,c,u,v=[-1]){const y=$e;ze(e);const o=e.$$={fragment:null,ctx:[],props:c,update:ie,not_equal:a,bound:Wt(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(y?y.$$.context:[])),callbacks:Wt(),dirty:v,skip_bound:!1,root:i.target||y.$$.root};u&&u(o.root);let I=!1;if(o.ctx=l?l(e,i.props||{},(g,w,...b)=>{const A=b.length?b[0]:w;return o.ctx&&a(o.ctx[g],o.ctx[g]=A)&&(!o.skip_bound&&o.bound[g]&&o.bound[g](A),I&&fs(e,g)),w}):[],o.update(),I=!0,Le(o.before_update),o.fragment=f?f(o.ctx):!1,i.target){if(i.hydrate){const g=ss(i.target);o.fragment&&o.fragment.l(g),g.forEach(ye)}else o.fragment&&o.fragment.c();i.intro&&Je(e.$$.fragment),De(e,i.target,i.anchor,i.customElement),$t()}ze(y)}class We{$destroy(){Ne(this,1),this.$destroy=ie}$on(i,l){if(!ne(l))return ie;const f=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return f.push(l),()=>{const a=f.indexOf(l);a!==-1&&f.splice(a,1)}}$set(i){this.$$set&&!es(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}const cs=""+new URL("manutd-6e524747.jpg",import.meta.url).href,us=""+new URL("aww-11ae5ec0.png",import.meta.url).href,ms=""+new URL("code-dbb5d4f2.jpg",import.meta.url).href,ds=""+new URL("figma-10f05267.png",import.meta.url).href,ps=""+new URL("movie-091dfa7e.jpg",import.meta.url).href,gs=""+new URL("news-c629cd13.jpeg",import.meta.url).href,vs=""+new URL("paris-8ea675bf.jpg",import.meta.url).href,hs=""+new URL("real2-3f6ffb46.jpg",import.meta.url).href,ys=""+new URL("rot-7ab04186.png",import.meta.url).href,bs=""+new URL("road-c6f1a075.png",import.meta.url).href,ws=""+new URL("css-cdb27625.png",import.meta.url).href,_s=""+new URL("mdn-3d2b3a3c.png",import.meta.url).href,As=""+new URL("stack-0aded21a.png",import.meta.url).href,Cs=""+new URL("menu-4724d11c.svg",import.meta.url).href,Is=""+new URL("face-649b4be3.jpg",import.meta.url).href;function qs(e){let i,l,f,a,c,u,v,y,o,I,g,w,b,A,E,U,x,d,h,C;return{c(){i=n("body"),l=n("div"),f=n("img"),c=m(),u=n("main"),v=n("div"),y=n("div"),o=n("div"),I=n("div"),I.innerHTML='<p class="svelte-1cohcdy">In order to find my true passion than</p>',g=m(),w=n("div"),w.innerHTML='<p class="svelte-1cohcdy">spending my time playing football,</p>',b=m(),A=n("div"),A.innerHTML='<p class="svelte-1cohcdy">I have been actively exploring various fields.</p>',E=m(),U=n("div"),U.innerHTML=`<p class="svelte-1cohcdy">Currently, I am <span class="self svelte-1cohcdy">self-learning</span>
                            full-stack development using
                            <span class="open svelte-1cohcdy">open-source resources</span></p>`,x=m(),d=n("div"),d.textContent="to broaden my horizons.",T(f.src,a=Is)||t(f,"src",a),t(f,"alt",""),t(f,"class","svelte-1cohcdy"),t(l,"class","img svelte-1cohcdy"),t(I,"class","svelte-1cohcdy"),t(w,"class","svelte-1cohcdy"),t(A,"class","svelte-1cohcdy"),t(U,"class","svelte-1cohcdy"),t(d,"class","svelte-1cohcdy"),t(o,"class","idea svelte-1cohcdy"),t(y,"class","w2"),t(v,"class","doin svelte-1cohcdy"),t(u,"class","svelte-1cohcdy"),t(i,"id","abt"),t(i,"class","svelte-1cohcdy")},m(q,R){we(q,i,R),s(i,l),s(l,f),s(i,c),s(i,u),s(u,v),s(v,y),s(y,o),s(o,I),e[9](I),s(o,g),s(o,w),e[10](w),s(o,b),s(o,A),e[11](A),s(o,E),s(o,U),e[12](U),s(o,x),s(o,d),e[13](d),h||(C=[Ce(e[7].call(null,U)),O(U,"entry",e[5]),O(U,"exit",e[6])],h=!0)},p:ie,i:ie,o:ie,d(q){q&&ye(i),e[9](null),e[10](null),e[11](null),e[12](null),e[13](null),h=!1,Le(C)}}}function Ls(e,i,l){let{theme1:f}=i;f==!1?f=!f:f=!1;let a,c,u,v,y;function o(){l(0,a.style="transform:translateY(0em);opacity:1;",a),l(1,c.style="transform:translateY(0em);opacity:1;",c),l(2,u.style="transform:translateY(0em);opacity:1;",u),l(3,v.style="transform:translateY(0em);opacity:1;",v),l(4,y.style="transform:translateY(0em);opacity:1;",y)}function I(){l(0,a.style="transform:translateY(2em)",a),l(1,c.style="transform:translateY(2em)",c),l(2,u.style="transform:translateY(2em)",u),l(3,v.style="transform:translateY(2em)",v),l(4,y.style="transform:translateY(2em)",y)}const g=new IntersectionObserver(d=>{d.forEach(h=>{const C=h.isIntersecting?"entry":"exit";h.target.dispatchEvent(new CustomEvent(C))})});function w(d){g.observe(d)}function b(d){k[d?"unshift":"push"](()=>{a=d,l(0,a)})}function A(d){k[d?"unshift":"push"](()=>{c=d,l(1,c)})}function E(d){k[d?"unshift":"push"](()=>{u=d,l(2,u)})}function U(d){k[d?"unshift":"push"](()=>{v=d,l(3,v)})}function x(d){k[d?"unshift":"push"](()=>{y=d,l(4,y)})}return e.$$set=d=>{"theme1"in d&&l(8,f=d.theme1)},[a,c,u,v,y,o,I,w,f,b,A,E,U,x]}class Es extends We{constructor(i){super(),Fe(this,i,Ls,qs,Ze,{theme1:8})}}const ks=""+new URL("js-2812b31e.svg",import.meta.url).href,xs=""+new URL("html-fae2500c.svg",import.meta.url).href,Rs=""+new URL("css-81af44d6.svg",import.meta.url).href,Ts=""+new URL("c-8dcc5a4a.svg",import.meta.url).href,Us=""+new URL("python-ba36b851.svg",import.meta.url).href,Vs=""+new URL("svelte-a39f39b7.svg",import.meta.url).href;function Os(e){let i,l,f,a,c,u,v,y,o,I,g,w,b,A,E,U,x,d,h,C,q,R,B,H,Y,P,S,Z,L,r,V,j,G,J,X,z,ae,Q,te,ue,re,F,fe,me,ce,oe,N,se,W,D,le,de,_e,ve,Ie,Ae;return{c(){i=n("div"),l=n("div"),f=n("div"),a=n("div"),c=n("div"),u=n("img"),y=m(),o=n("div"),o.innerHTML=`<h2 class="svelte-1q9xg81">JAVASCRIPT</h2> 
                    <p class="svelte-1q9xg81">I&#39;m passionate about programming and scripting with
                        JavaScript and am excited to continue learning.While I&#39;m
                        confident in my beginner-level skills, I&#39;m eager to dive
                        deeper into advanced topics like API integrations and
                        data structures.</p>`,I=m(),g=n("div"),w=n("div"),b=n("div"),A=n("div"),E=n("img"),x=m(),d=n("div"),d.innerHTML=`<h2 class="svelte-1q9xg81">HTML</h2> 
                    <p class="svelte-1q9xg81">I am familar with HTML, but it&#39;s a vast sea of tags and
                        attributes. As I continue to learn, I&#39;m discovering
                        useful coding techniques and shortcuts that make the
                        process more efficient. I&#39;m excited about the progress
                        and that drives me.</p>`,h=m(),C=n("div"),q=n("div"),R=n("div"),B=n("div"),H=n("img"),P=m(),S=n("div"),S.innerHTML=`<h2 class="svelte-1q9xg81">CSS</h2> 
                    <p class="svelte-1q9xg81">I dont prefer to use css frameworks, just css is a
                        beauty. Well even it has shortcuts where i am learning
                        and improvising every day.</p>`,Z=m(),L=n("div"),r=n("div"),V=n("div"),j=n("div"),G=n("img"),X=m(),z=n("div"),z.innerHTML=`<h2 class="svelte-1q9xg81">C</h2> 
                    <p class="svelte-1q9xg81">I worked on C programming for 3 months but i must get to
                        know more about it to enrich my knowledge(need a big
                        revamp).</p>`,ae=m(),Q=n("div"),te=n("div"),ue=n("div"),re=n("div"),F=n("img"),me=m(),ce=n("div"),ce.innerHTML=`<h2 class="svelte-1q9xg81">PYTHON</h2> 
                    <p class="svelte-1q9xg81">The simplest lang where i came across in my life and i
                        have a basic knowledge and 1 year of experience with SQL
                        database too.Further i am planning to learn the API&#39;s in
                        python which helps in AI and DS.</p>`,oe=m(),N=n("div"),se=n("div"),W=n("div"),D=n("div"),le=n("img"),_e=m(),ve=n("div"),ve.innerHTML=`<h2 class="svelte-1q9xg81">SVELTE</h2> 
                    <p class="svelte-1q9xg81">The only framework i use and made me to love it. The
                        idea of surgical injection is too good.I have been
                        working on with svelte and have a good understing about
                        it.</p>`,T(u.src,v=ks)||t(u,"src",v),t(u,"alt","img"),t(u,"class","svelte-1q9xg81"),t(c,"class","img svelte-1q9xg81"),t(o,"class","reveal svelte-1q9xg81"),p(o,"revealmode",e[0]==!0),t(a,"class","wrap svelte-1q9xg81"),t(f,"class","container svelte-1q9xg81"),t(l,"class","box svelte-1q9xg81"),p(l,"boxmode",e[0]==!0),T(E.src,U=xs)||t(E,"src",U),t(E,"alt","img"),t(E,"class","svelte-1q9xg81"),t(A,"class","img svelte-1q9xg81"),t(d,"class","reveal svelte-1q9xg81"),p(d,"revealmode",e[0]==!0),t(b,"class","wrap svelte-1q9xg81"),t(w,"class","container svelte-1q9xg81"),t(g,"class","box svelte-1q9xg81"),p(g,"boxmode",e[0]==!0),T(H.src,Y=Rs)||t(H,"src",Y),t(H,"alt","img"),t(H,"class","svelte-1q9xg81"),t(B,"class","img svelte-1q9xg81"),t(S,"class","reveal svelte-1q9xg81"),p(S,"revealmode",e[0]==!0),t(R,"class","wrap svelte-1q9xg81"),t(q,"class","container svelte-1q9xg81"),t(C,"class","box svelte-1q9xg81"),p(C,"boxmode",e[0]==!0),T(G.src,J=Ts)||t(G,"src",J),t(G,"alt","img"),t(G,"class","svelte-1q9xg81"),t(j,"class","img svelte-1q9xg81"),t(z,"class","reveal svelte-1q9xg81"),p(z,"revealmode",e[0]==!0),t(V,"class","wrap svelte-1q9xg81"),t(r,"class","container svelte-1q9xg81"),t(L,"class","box svelte-1q9xg81"),p(L,"boxmode",e[0]==!0),T(F.src,fe=Us)||t(F,"src",fe),t(F,"alt","img"),t(F,"class","svelte-1q9xg81"),t(re,"class","img svelte-1q9xg81"),t(ce,"class","reveal svelte-1q9xg81"),p(ce,"revealmode",e[0]==!0),t(ue,"class","wrap svelte-1q9xg81"),t(te,"class","container svelte-1q9xg81"),t(Q,"class","box svelte-1q9xg81"),p(Q,"boxmode",e[0]==!0),T(le.src,de=Vs)||t(le,"src",de),t(le,"alt","img"),t(le,"class","svelte-1q9xg81"),t(D,"class","img svelte-1q9xg81"),t(ve,"class","reveal svelte-1q9xg81"),p(ve,"revealmode",e[0]==!0),t(W,"class","wrap svelte-1q9xg81"),t(se,"class","container svelte-1q9xg81"),t(N,"class","box svelte-1q9xg81"),p(N,"boxmode",e[0]==!0),t(i,"class","main svelte-1q9xg81"),t(i,"id","tech"),p(i,"mode",e[0]==!0)},m(qe,K){we(qe,i,K),s(i,l),s(l,f),s(f,a),s(a,c),s(c,u),s(a,y),s(a,o),e[8](l),s(i,I),s(i,g),s(g,w),s(w,b),s(b,A),s(A,E),s(b,x),s(b,d),e[9](g),s(i,h),s(i,C),s(C,q),s(q,R),s(R,B),s(B,H),s(R,P),s(R,S),e[10](C),s(i,Z),s(i,L),s(L,r),s(r,V),s(V,j),s(j,G),s(V,X),s(V,z),e[11](L),s(i,ae),s(i,Q),s(Q,te),s(te,ue),s(ue,re),s(re,F),s(ue,me),s(ue,ce),e[12](Q),s(i,oe),s(i,N),s(N,se),s(se,W),s(W,D),s(D,le),s(W,_e),s(W,ve),e[13](N),Ie||(Ae=[Ce(e[7].call(null,l)),O(l,"enterViewport",function(){ne(pe(e[1]))&&pe(e[1]).apply(this,arguments)}),O(l,"exitViewport",function(){ne(ge(e[1]))&&ge(e[1]).apply(this,arguments)}),Ce(e[7].call(null,g)),O(g,"enterViewport",function(){ne(pe(e[2]))&&pe(e[2]).apply(this,arguments)}),O(g,"exitViewport",function(){ne(ge(e[2]))&&ge(e[2]).apply(this,arguments)}),Ce(e[7].call(null,C)),O(C,"enterViewport",function(){ne(pe(e[3]))&&pe(e[3]).apply(this,arguments)}),O(C,"exitViewport",function(){ne(ge(e[3]))&&ge(e[3]).apply(this,arguments)}),Ce(e[7].call(null,L)),O(L,"enterViewport",function(){ne(pe(e[4]))&&pe(e[4]).apply(this,arguments)}),O(L,"exitViewport",function(){ne(ge(e[4]))&&ge(e[4]).apply(this,arguments)}),Ce(e[7].call(null,Q)),O(Q,"enterViewport",function(){ne(pe(e[5]))&&pe(e[5]).apply(this,arguments)}),O(Q,"exitViewport",function(){ne(ge(e[5]))&&ge(e[5]).apply(this,arguments)}),Ce(e[7].call(null,N)),O(N,"enterViewport",function(){ne(pe(e[6]))&&pe(e[6]).apply(this,arguments)}),O(N,"exitViewport",function(){ne(ge(e[6]))&&ge(e[6]).apply(this,arguments)})],Ie=!0)},p(qe,[K]){e=qe,K&1&&p(o,"revealmode",e[0]==!0),K&1&&p(l,"boxmode",e[0]==!0),K&1&&p(d,"revealmode",e[0]==!0),K&1&&p(g,"boxmode",e[0]==!0),K&1&&p(S,"revealmode",e[0]==!0),K&1&&p(C,"boxmode",e[0]==!0),K&1&&p(z,"revealmode",e[0]==!0),K&1&&p(L,"boxmode",e[0]==!0),K&1&&p(ce,"revealmode",e[0]==!0),K&1&&p(Q,"boxmode",e[0]==!0),K&1&&p(ve,"revealmode",e[0]==!0),K&1&&p(N,"boxmode",e[0]==!0),K&1&&p(i,"mode",e[0]==!0)},i:ie,o:ie,d(qe){qe&&ye(i),e[8](null),e[9](null),e[10](null),e[11](null),e[12](null),e[13](null),Ie=!1,Le(Ae)}}}function pe(e){e.style=`opacity: 1;
        filter: blur(0); 
        transition: 2s;`}function ge(e){e.style=`opacity: 0;
        filter: blur(5px);
        transform: translateX(-100%);
        transition:0s `}function Ms(e,i,l){let f,a,c,u,v,y,{theme1:o}=i,I=!0;pt(()=>{I==!0?(l(0,o=!1),I=!1):o==!1?l(0,o=!o):l(0,o=!1)});const g=new IntersectionObserver(h=>{h.forEach(C=>{const q=C.isIntersecting?"enterViewport":"exitViewport";C.target.dispatchEvent(new CustomEvent(q))})});function w(h){return g.observe(h),{destroy(){g.unobserve(h)}}}function b(h){k[h?"unshift":"push"](()=>{f=h,l(1,f)})}function A(h){k[h?"unshift":"push"](()=>{a=h,l(2,a)})}function E(h){k[h?"unshift":"push"](()=>{c=h,l(3,c)})}function U(h){k[h?"unshift":"push"](()=>{u=h,l(4,u)})}function x(h){k[h?"unshift":"push"](()=>{v=h,l(5,v)})}function d(h){k[h?"unshift":"push"](()=>{y=h,l(6,y)})}return e.$$set=h=>{"theme1"in h&&l(0,o=h.theme1)},[o,f,a,c,u,v,y,w,b,A,E,U,x,d]}class Ps extends We{constructor(i){super(),Fe(this,i,Ms,Os,Ze,{theme1:0})}}const Ss=""+new URL("rot2-db923d15.png",import.meta.url).href,Bs=""+new URL("portfolio-51f223ae.png",import.meta.url).href,Gt="data:image/png;base64,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";function js(e){let i,l,f,a,c,u,v,y,o,I,g,w,b,A,E,U,x,d,h,C,q,R,B,H,Y,P,S,Z,L,r,V,j,G,J,X,z,ae,Q,te,ue,re,F,fe,me,ce,oe,N,se,W,D,le,de;return{c(){i=n("body"),l=n("div"),f=n("p"),f.textContent="P",a=m(),c=n("p"),c.textContent="R",u=m(),v=n("p"),v.textContent="O",y=m(),o=n("p"),o.textContent="J",I=m(),g=n("p"),g.textContent="E",w=m(),b=n("p"),b.textContent="C",A=m(),E=n("p"),E.textContent="T",U=m(),x=n("p"),x.textContent="S",d=m(),h=n("div"),C=n("div"),q=n("div"),R=n("img"),H=m(),Y=n("div"),P=n("div"),S=n("h2"),S.textContent="Portfolio",Z=m(),L=n("div"),r=n("a"),V=n("img"),G=m(),J=n("p"),J.textContent="A simple portfolio page made with svelte",X=m(),z=n("div"),ae=n("div"),Q=n("img"),ue=m(),re=n("div"),F=n("div"),fe=n("h2"),fe.textContent="Region of Tournments",me=m(),ce=n("div"),oe=n("a"),N=n("img"),W=m(),D=n("p"),D.textContent="Platform to create a gaming community",t(l,"class","heading svelte-1fxi004"),T(R.src,B=Bs)||t(R,"src",B),t(R,"alt",""),t(R,"class","svelte-1fxi004"),t(q,"class","img svelte-1fxi004"),t(S,"class","svelte-1fxi004"),T(V.src,j=Gt)||t(V,"src",j),t(V,"class","arrow svelte-1fxi004"),t(V,"alt",""),t(r,"href","https://siyam333.github.io/portfolio/"),t(r,"target","_blank"),t(r,"rel","noreferrer"),t(P,"class","heading-sub svelte-1fxi004"),t(J,"class","svelte-1fxi004"),t(Y,"class","prohead svelte-1fxi004"),t(C,"class","project svelte-1fxi004"),T(Q.src,te=Ss)||t(Q,"src",te),t(Q,"alt",""),t(Q,"class","svelte-1fxi004"),t(ae,"class","img svelte-1fxi004"),t(fe,"class","svelte-1fxi004"),T(N.src,se=Gt)||t(N,"src",se),t(N,"class","arrow svelte-1fxi004"),t(N,"alt",""),t(oe,"href","https://github.com/Rajaniraiyn/rot-landing-page"),t(oe,"target","_blank"),t(oe,"rel","noreferrer"),t(F,"class","heading-sub svelte-1fxi004"),t(D,"class","svelte-1fxi004"),t(re,"class","prohead svelte-1fxi004"),t(z,"class","project svelte-1fxi004"),t(h,"class","wrap svelte-1fxi004"),t(i,"id","project"),t(i,"class","svelte-1fxi004")},m(_e,ve){we(_e,i,ve),s(i,l),s(l,f),e[15](f),s(l,a),s(l,c),e[16](c),s(l,u),s(l,v),e[17](v),s(l,y),s(l,o),e[18](o),s(l,I),s(l,g),e[19](g),s(l,w),s(l,b),e[20](b),s(l,A),s(l,E),e[21](E),s(l,U),s(l,x),e[22](x),e[23](l),s(i,d),s(i,h),s(h,C),s(C,q),s(q,R),s(C,H),s(C,Y),s(Y,P),s(P,S),s(P,Z),s(P,L),s(L,r),s(r,V),s(Y,G),s(Y,J),e[24](C),s(h,X),s(h,z),s(z,ae),s(ae,Q),s(z,ue),s(z,re),s(re,F),s(F,fe),s(F,me),s(F,ce),s(ce,oe),s(oe,N),s(re,W),s(re,D),e[25](z),le||(de=[Ce(e[13].call(null,C)),O(C,"entry",e[11]),O(C,"exit",e[12])],le=!0)},p:ie,i:ie,o:ie,d(_e){_e&&ye(i),e[15](null),e[16](null),e[17](null),e[18](null),e[19](null),e[20](null),e[21](null),e[22](null),e[23](null),e[24](null),e[25](null),le=!1,Le(de)}}}function Hs(e,i,l){let{theme1:f}=i;f==!1?f=!f:f=!1;let a,c,u,v,y,o,I,g,w,b,A;function E(){l(2,u.style.transform="translateX(0em)",u),l(1,c.style.transform="translateY(0em)",c),l(3,v.style.transform="translateY(0em)",v),l(4,y.style.transform="translate3d(0em,0em,0em)",y),l(5,o.style.transform="translateY(0em)",o),l(6,I.style.transform="translate3d(0em,0em,0em)",I),l(7,g.style.transform="translateX(0em)",g),l(8,w.style.transform="translateX(0em)",w),document.addEventListener("scroll",()=>{b.getBoundingClientRect().top/16<=18.75&&(l(9,b.style="transform:rotate(0deg);translateX(-6em);transition:all 1s;",b),l(10,A.style="transform:rotate(0deg);translateX(6em);transition:all 1s;",A))})}function U(){l(2,u.style.transform="translateX(-0.3em)",u),l(1,c.style.transform="translateY(0.6em)",c),l(3,v.style.transform="translateY(0em)",v),l(4,y.style.transform="translate3d(0.5em,0.5em,0.7em)",y),l(5,o.style.transform="translateY(-0.2em)",o),l(6,I.style.transform="translate3d(-2em,0.6em,0.5em)",I),l(7,g.style.transform="translateX(-2em)",g),l(8,w.style.transform="translateX(0.2em)",w)}const x=new IntersectionObserver(r=>{r.forEach(V=>{const j=V.isIntersecting?"entry":"exit";V.target.dispatchEvent(new CustomEvent(j))})});function d(r){x.observe(r)}pt(()=>{l(2,u.style="transform :translateX(-0.3em);transition: all 3s;",u),l(1,c.style="transform :translateY(0.6em);transition: all 3s;",c),l(3,v.style="transform :translateY(0em);transition: all 3s;",v),l(4,y.style="transform :translate3d(0.5em,0.5em,0.7em);transition: all 3s;",y),l(5,o.style="transform :translateY(-0.2em);transition: all 3s;",o),l(6,I.style="transform :translate3d(-2em,0.6em,0.5em);transition: all 3s;",I),l(7,g.style="transform :translateX(-2em);transition: all 3s;",g),l(8,w.style="transform :translateX(0.2em);transition: all 3s;",w)});function h(r){k[r?"unshift":"push"](()=>{u=r,l(2,u)})}function C(r){k[r?"unshift":"push"](()=>{c=r,l(1,c)})}function q(r){k[r?"unshift":"push"](()=>{v=r,l(3,v)})}function R(r){k[r?"unshift":"push"](()=>{y=r,l(4,y)})}function B(r){k[r?"unshift":"push"](()=>{o=r,l(5,o)})}function H(r){k[r?"unshift":"push"](()=>{I=r,l(6,I)})}function Y(r){k[r?"unshift":"push"](()=>{g=r,l(7,g)})}function P(r){k[r?"unshift":"push"](()=>{w=r,l(8,w)})}function S(r){k[r?"unshift":"push"](()=>{a=r,l(0,a)})}function Z(r){k[r?"unshift":"push"](()=>{b=r,l(9,b)})}function L(r){k[r?"unshift":"push"](()=>{A=r,l(10,A)})}return e.$$set=r=>{"theme1"in r&&l(14,f=r.theme1)},[a,c,u,v,y,o,I,g,w,b,A,E,U,d,f,h,C,q,R,B,H,Y,P,S,Z,L]}class Ys extends We{constructor(i){super(),Fe(this,i,Hs,js,Ze,{theme1:14})}}const Xs=""+new URL("github-fc6dd62e.svg",import.meta.url).href,Qs=""+new URL("gmail-f00fadcd.svg",import.meta.url).href,Js=""+new URL("instagram-9da2c622.svg",import.meta.url).href,Ds=""+new URL("linkdin-85e07b94.svg",import.meta.url).href,Ns="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADIklEQVR4nO3by04UQRTG8X9mxoVcTLxtBHdGfAEJPIGXtaLRxIUati4R1iosBRFCeAMJGsX4HhpcGy6aeMEtwqZNm5qIEKnTXTX00P39ktqRU13n9FRXVTcgIiIiIiIiIiIiIiIiIiIiIiIiIiLyrzowCIwBi8BH4CewDSSBLVRo/9tuLMtubKPAAFCjDZwFJoD1CANN2rQA/2trwDjQSwFOA3PAVgsHmLR5AZotzcEMcJIDcgvYOICBJYekAM32A7hBCx0B5g9wQMkhK0CzzQINIusA3hUwmCTCtRdxzW9dzqLd+UUlP4lw/UmBRYjySyhi2klKUIDEPZyD3M7Y4QowBVwC+oBODr9ON5Z0TM+A1Yw5Gcrbcbqs+m7sJN0HDLsNWdnVgOvApwyro1N5OpozdvAK6KJ6uoHXxhxN59nhWjZZT9tlS16QdOyThjz9AnqyBJ4w3vlVTn5TzfhLeIJR3XC2s1bRaWe/6eizJ2er1ht20FDNu5ZAFXPfkLd+S6Axw1KzCqudrOpuZtgvdw8tgV56gqQPnRBJm7cQ057YC5Ygy54gl4MusdwFuOqJ/cESxHfUfC7wIstcgD5P7HRj6+Vb/4eufspcgC7DfsBLBcjvWIwC+Kag84Qp8y/gQowpSA/hgh/Ci54g6ZFsiDL/AmY8sV9YgowattTaiO3VMGzERjAYMNwl9yyBKmbYkLeLlkA1QyXX3QGU/F39fDEc4ZhPj8cN1UyPYHUczZ8cvDHk6zEZ9BpfyExWvAg19w7cl6dN4EzsJ/rOX0J3RaedJWOO0iJldgL4Zuwg/bsHrfgirE3v+juGOX/nS/nc343eNHbSbGvuSPaK2xWW4a1ZlxtLusl6blig7G7XQi9gNmOHsVuoIq8919SzW93wkkYFYE8OlmJOyR3uW0cVAFMO0mXpUSJrZFgZVXkKmmr1YmQowyeLVSrA1xgP3CxL1Gn3gqHqBdh0d/1xCtDjvvharWABVoBHeXa4rdqc9LvvXhbci4eNSP/EFyq0/y03lvdubCPuVLPKRzAiIiIiIiIiIiIiIiIiIiIiIiIiIsJevwHM218LQVp+KgAAAABJRU5ErkJggg==";function Zs(e){let i,l,f,a,c,u,v,y,o,I,g,w,b,A,E,U,x,d,h,C,q,R,B,H,Y,P,S,Z,L,r,V=`url(${Ns})`,j,G;return{c(){i=n("div"),l=n("div"),f=n("h2"),f.textContent="CONTACT",a=m(),c=n("div"),u=n("a"),v=n("img"),o=n("a"),I=n("img"),w=m(),b=n("a"),A=n("img"),U=m(),x=n("a"),d=n("img"),C=m(),q=n("div"),R=n("div"),R.innerHTML=`<h3 class="svelte-qvpyyi">INSPIRE</h3> 
            <h3 class="svelte-qvpyyi">INNOVATE</h3> 
            <h3 class="svelte-qvpyyi">BURST IT OUT</h3>`,B=m(),H=n("div"),Y=n("h3"),Y.textContent="SPECIAL THANKS TO:",P=m(),S=n("ul"),Z=n("li"),L=n("a"),r=n("p"),r.textContent="RAJANIRAIYN",j=m(),G=n("li"),G.textContent="TEJASWINI",t(f,"class","svelte-qvpyyi"),t(v,"class","git svelte-qvpyyi"),T(v.src,y=Xs)||t(v,"src",y),t(v,"alt",""),p(v,"github",e[0]==!0),t(u,"href","https://github.com/siyam333"),t(u,"target","_blank"),t(u,"rel","noreferrer"),t(u,"class","svelte-qvpyyi"),T(I.src,g=Js)||t(I,"src",g),t(I,"alt",""),t(I,"class","svelte-qvpyyi"),t(o,"href","https://www.instagram.com/siyam_333/"),t(o,"target","_blank"),t(o,"rel","noreferrer"),t(o,"class","svelte-qvpyyi"),T(A.src,E=Ds)||t(A,"src",E),t(A,"alt",""),t(A,"class","svelte-qvpyyi"),t(b,"href","https://www.linkedin.com/in/siyam-sundar-5330a324a/"),t(b,"target","_blank"),t(b,"rel","noreferrer"),t(b,"class","svelte-qvpyyi"),T(d.src,h=Qs)||t(d,"src",h),t(d,"alt",""),t(d,"class","svelte-qvpyyi"),t(x,"href","mailto:%73%69%79%61%6D%73%75%6E%64%61%72%33%33%33%40%67%6D%61%69%6C%2E%63%6F%6D"),t(x,"class","svelte-qvpyyi"),t(c,"class","links svelte-qvpyyi"),t(l,"class","contact svelte-qvpyyi"),p(l,"contactmode",e[0]===!0),t(R,"class","inspire svelte-qvpyyi"),t(Y,"class","svelte-qvpyyi"),t(r,"class","svelte-qvpyyi"),p(r,"link",e[0]==!0),ls(r,"--url",V),t(L,"href","https://github.com/Rajaniraiyn"),t(L,"target","_blank"),t(L,"rel","noreferrer"),t(L,"class","svelte-qvpyyi"),t(Z,"class","svelte-qvpyyi"),t(G,"class","svelte-qvpyyi"),t(S,"class","svelte-qvpyyi"),t(H,"class","ppl svelte-qvpyyi"),t(q,"class","thanks svelte-qvpyyi"),t(i,"class","cover svelte-qvpyyi"),t(i,"id","contact"),p(i,"mode",e[0]===!0)},m(J,X){we(J,i,X),s(i,l),s(l,f),s(l,a),s(l,c),s(c,u),s(u,v),s(c,o),s(o,I),s(c,w),s(c,b),s(b,A),s(b,U),s(c,x),s(x,d),s(i,C),s(i,q),s(q,R),s(q,B),s(q,H),s(H,Y),s(H,P),s(H,S),s(S,Z),s(Z,L),s(L,r),s(S,j),s(S,G)},p(J,[X]){X&1&&p(v,"github",J[0]==!0),X&1&&p(l,"contactmode",J[0]===!0),X&1&&p(r,"link",J[0]==!0),X&1&&p(i,"mode",J[0]===!0)},i:ie,o:ie,d(J){J&&ye(i)}}}function Fs(e,i,l){let{theme1:f}=i;return pt(()=>{l(0,f=!1)}),e.$$set=a=>{"theme1"in a&&l(0,f=a.theme1)},[f]}class Ws extends We{constructor(i){super(),Fe(this,i,Fs,Zs,Ze,{theme1:0})}}function Ks(e){let i,l,f,a,c,u,v,y,o,I,g,w,b,A,E,U,x,d,h,C,q,R,B,H,Y,P,S,Z,L,r,V,j,G,J,X,z,ae,Q,te,ue,re,F,fe,me,ce,oe,N,se,W,D,le,de,_e,ve,Ie,Ae,qe,K,et,Te,Ct,It,tt,Ue,qt,Lt,ee,st,Ve,Et,kt,lt,Oe,xt,Rt,nt,Me,Tt,Ut,it,Pe,Vt,Ot,rt,Se,Mt,Pt,he,ot,Be,St,Bt,at,je,jt,Ht,ft,He,Yt,Xt,ct,Ye,Qt,gt,Ee,vt,ke,ht,xe,yt,Re,$,bt,Jt;return Ee=new Es({props:{theme1:e[11]}}),ke=new Ps({props:{theme1:e[11]}}),xe=new Ys({props:{theme1:e[11]}}),Re=new Ws({props:{theme1:e[11]}}),{c(){i=n("body"),l=n("div"),f=n("div"),a=n("ul"),c=n("li"),u=n("a"),u.textContent="HOME",v=m(),y=n("li"),o=n("a"),o.textContent="ABOUT",I=m(),g=n("li"),w=n("a"),w.textContent="TECH STACKS",b=m(),A=n("li"),E=n("a"),E.textContent="PROJECTS",U=m(),x=n("li"),d=n("a"),d.textContent="CONTACT",h=m(),C=n("header"),q=n("ul"),R=n("li"),B=n("a"),B.textContent="HOME",H=m(),Y=n("li"),P=n("a"),P.textContent="ABOUT",S=m(),Z=n("li"),L=n("a"),L.textContent="TECH STACKS",r=m(),V=n("li"),j=n("a"),j.textContent="PROJECTS",G=m(),J=n("li"),X=n("a"),X.textContent="CONTACT",z=m(),ae=n("ul"),Q=n("li"),te=n("img"),re=m(),F=n("div"),fe=n("div"),me=n("div"),ce=m(),oe=n("main"),oe.innerHTML=`<h2 class="svelte-17fgpnx">Hey, SIYAM here</h2> 
    <h2 class="svelte-17fgpnx">Front-End <span class="svelte-17fgpnx">web</span> Developer</h2> 
    <h2 class="svelte-17fgpnx">Technophile | <span class="svelte-17fgpnx">Astute</span></h2>`,N=m(),se=n("div"),W=n("div"),D=n("div"),le=n("div"),de=n("img"),ve=m(),Ie=n("div"),Ae=n("img"),K=m(),et=n("div"),Te=n("img"),It=m(),tt=n("div"),Ue=n("img"),Lt=m(),ee=n("div"),st=n("div"),Ve=n("img"),kt=m(),lt=n("div"),Oe=n("img"),Rt=m(),nt=n("div"),Me=n("img"),Ut=m(),it=n("div"),Pe=n("img"),Ot=m(),rt=n("div"),Se=n("img"),Pt=m(),he=n("div"),ot=n("div"),Be=n("img"),Bt=m(),at=n("div"),je=n("img"),Ht=m(),ft=n("div"),He=n("img"),Xt=m(),ct=n("div"),Ye=n("img"),gt=m(),Ge(Ee.$$.fragment),vt=m(),Ge(ke.$$.fragment),ht=m(),Ge(xe.$$.fragment),yt=m(),Ge(Re.$$.fragment),t(u,"data-tinro-ignore",""),t(u,"href","#top"),t(u,"class","svelte-17fgpnx"),p(u,"sidelinkmode",e[11]==!0),t(c,"class","svelte-17fgpnx"),t(o,"data-tinro-ignore",""),t(o,"href","#abt"),t(o,"class","svelte-17fgpnx"),p(o,"sidelinkmode",e[11]==!0),t(y,"class","svelte-17fgpnx"),t(w,"data-tinro-ignore",""),t(w,"href","#tech"),t(w,"class","svelte-17fgpnx"),p(w,"sidelinkmode",e[11]==!0),t(g,"class","svelte-17fgpnx"),t(E,"data-tinro-ignore",""),t(E,"href","#project"),t(E,"class","svelte-17fgpnx"),p(E,"sidelinkmode",e[11]==!0),t(A,"class","svelte-17fgpnx"),t(d,"data-tinro-ignore",""),t(d,"href","#contact"),t(d,"class","svelte-17fgpnx"),p(d,"sidelinkmode",e[11]==!0),t(x,"class","svelte-17fgpnx"),t(a,"class","dropmenu svelte-17fgpnx"),t(f,"class","sidebar "),t(l,"class","sidebarwrap svelte-17fgpnx"),p(l,"show",e[10]==!0),p(l,"sidemode",e[11]==!0),t(B,"data-tinro-ignore",""),t(B,"href","#top"),t(B,"class","svelte-17fgpnx"),p(B,"linkmode",e[11]==!0),t(R,"class","svelte-17fgpnx"),t(P,"data-tinro-ignore",""),t(P,"href","#abt"),t(P,"class","svelte-17fgpnx"),p(P,"linkmode",e[11]==!0),t(Y,"class","svelte-17fgpnx"),t(L,"data-tinro-ignore",""),t(L,"href","#tech"),t(L,"class","svelte-17fgpnx"),p(L,"linkmode",e[11]==!0),t(Z,"class","svelte-17fgpnx"),t(j,"data-tinro-ignore",""),t(j,"href","#project"),t(j,"class","svelte-17fgpnx"),p(j,"linkmode",e[11]==!0),t(V,"class","svelte-17fgpnx"),t(X,"data-tinro-ignore",""),t(X,"href","#contact"),t(X,"class","svelte-17fgpnx"),p(X,"linkmode",e[11]==!0),t(J,"class","svelte-17fgpnx"),t(q,"class","lmenu svelte-17fgpnx"),T(te.src,ue=Cs)||t(te,"src",ue),t(te,"alt",""),t(te,"class","svelte-17fgpnx"),t(Q,"class","svelte-17fgpnx"),t(ae,"class","menuicon svelte-17fgpnx"),t(me,"class","circle svelte-17fgpnx"),p(me,"move",e[11]==!0),t(fe,"class","mode svelte-17fgpnx"),t(F,"class","wrapmode svelte-17fgpnx"),t(C,"class","svelte-17fgpnx"),t(oe,"class","svelte-17fgpnx"),T(de.src,_e=gs)||t(de,"src",_e),t(de,"alt",""),t(de,"class","svelte-17fgpnx"),t(le,"class","svelte-17fgpnx"),T(Ae.src,qe=_s)||t(Ae,"src",qe),t(Ae,"alt",""),t(Ae,"class","svelte-17fgpnx"),t(Ie,"class","svelte-17fgpnx"),T(Te.src,Ct=us)||t(Te,"src",Ct),t(Te,"alt",""),t(Te,"class","svelte-17fgpnx"),t(et,"class","svelte-17fgpnx"),T(Ue.src,qt=As)||t(Ue,"src",qt),t(Ue,"alt",""),t(Ue,"class","svelte-17fgpnx"),t(tt,"class","svelte-17fgpnx"),t(D,"class","child svelte-17fgpnx"),T(Ve.src,Et=vs)||t(Ve,"src",Et),t(Ve,"alt",""),t(Ve,"class","svelte-17fgpnx"),t(st,"class","svelte-17fgpnx"),T(Oe.src,xt=cs)||t(Oe,"src",xt),t(Oe,"alt",""),t(Oe,"class","svelte-17fgpnx"),t(lt,"class","svelte-17fgpnx"),T(Me.src,Tt=bs)||t(Me,"src",Tt),t(Me,"alt",""),t(Me,"class","svelte-17fgpnx"),t(nt,"class","svelte-17fgpnx"),T(Pe.src,Vt=hs)||t(Pe,"src",Vt),t(Pe,"alt",""),t(Pe,"class","svelte-17fgpnx"),t(it,"class","svelte-17fgpnx"),T(Se.src,Mt=ws)||t(Se,"src",Mt),t(Se,"alt",""),t(Se,"class","svelte-17fgpnx"),t(rt,"class","svelte-17fgpnx"),t(ee,"class","child svelte-17fgpnx"),t(ee,"data-scroll",""),t(ee,"data-scroll-direction","horizontal"),t(ee,"data-scroll-speed","1"),T(Be.src,St=ps)||t(Be,"src",St),t(Be,"alt",""),t(Be,"class","svelte-17fgpnx"),t(ot,"class","svelte-17fgpnx"),T(je.src,jt=ms)||t(je,"src",jt),t(je,"alt",""),t(je,"class","svelte-17fgpnx"),t(at,"class","svelte-17fgpnx"),T(He.src,Yt=ds)||t(He,"src",Yt),t(He,"alt",""),t(He,"class","svelte-17fgpnx"),t(ft,"class","svelte-17fgpnx"),T(Ye.src,Qt=ys)||t(Ye,"src",Qt),t(Ye,"alt",""),t(Ye,"class","svelte-17fgpnx"),t(ct,"class","svelte-17fgpnx"),t(he,"class","child svelte-17fgpnx"),t(W,"class","about svelte-17fgpnx"),t(se,"class","abtwrap svelte-17fgpnx"),t(i,"id","top"),t(i,"class","svelte-17fgpnx")},m(_,M){we(_,i,M),s(i,l),s(l,f),s(f,a),s(a,c),s(c,u),e[15](c),s(a,v),s(a,y),s(y,o),s(a,I),s(a,g),s(g,w),s(a,b),s(a,A),s(A,E),s(a,U),s(a,x),s(x,d),e[16](f),s(i,h),s(i,C),s(C,q),s(q,R),s(R,B),s(q,H),s(q,Y),s(Y,P),s(q,S),s(q,Z),s(Z,L),s(q,r),s(q,V),s(V,j),s(q,G),s(q,J),s(J,X),e[17](q),s(C,z),s(C,ae),s(ae,Q),s(Q,te),e[18](te),e[19](ae),s(C,re),s(C,F),s(F,fe),s(fe,me),e[20](me),e[21](fe),s(i,ce),s(i,oe),s(i,N),s(i,se),s(se,W),s(W,D),s(D,le),s(le,de),s(D,ve),s(D,Ie),s(Ie,Ae),s(D,K),s(D,et),s(et,Te),s(D,It),s(D,tt),s(tt,Ue),e[22](D),s(W,Lt),s(W,ee),s(ee,st),s(st,Ve),s(ee,kt),s(ee,lt),s(lt,Oe),s(ee,Rt),s(ee,nt),s(nt,Me),s(ee,Ut),s(ee,it),s(it,Pe),s(ee,Ot),s(ee,rt),s(rt,Se),e[23](ee),s(W,Pt),s(W,he),s(he,ot),s(ot,Be),s(he,Bt),s(he,at),s(at,je),s(he,Ht),s(he,ft),s(ft,He),s(he,Xt),s(he,ct),s(ct,Ye),e[24](he),we(_,gt,M),De(Ee,_,M),we(_,vt,M),De(ke,_,M),we(_,ht,M),De(xe,_,M),we(_,yt,M),De(Re,_,M),$=!0,bt||(Jt=[O(u,"click",be(e[12])),O(o,"click",be(e[12])),O(w,"click",be(e[12])),O(E,"click",be(e[12])),O(d,"click",be(e[12])),O(B,"click",be(e[12])),O(P,"click",be(e[12])),O(L,"click",be(e[12])),O(j,"click",be(e[12])),O(X,"click",be(e[12])),Ce(e[14].call(null,se)),O(se,"enterViewport",e[13]),O(se,"exitViewport",Gs)],bt=!0)},p(_,[M]){(!$||M&2048)&&p(u,"sidelinkmode",_[11]==!0),(!$||M&2048)&&p(o,"sidelinkmode",_[11]==!0),(!$||M&2048)&&p(w,"sidelinkmode",_[11]==!0),(!$||M&2048)&&p(E,"sidelinkmode",_[11]==!0),(!$||M&2048)&&p(d,"sidelinkmode",_[11]==!0),(!$||M&1024)&&p(l,"show",_[10]==!0),(!$||M&2048)&&p(l,"sidemode",_[11]==!0),(!$||M&2048)&&p(B,"linkmode",_[11]==!0),(!$||M&2048)&&p(P,"linkmode",_[11]==!0),(!$||M&2048)&&p(L,"linkmode",_[11]==!0),(!$||M&2048)&&p(j,"linkmode",_[11]==!0),(!$||M&2048)&&p(X,"linkmode",_[11]==!0),(!$||M&2048)&&p(me,"move",_[11]==!0);const Dt={};M&2048&&(Dt.theme1=_[11]),Ee.$set(Dt);const Nt={};M&2048&&(Nt.theme1=_[11]),ke.$set(Nt);const Zt={};M&2048&&(Zt.theme1=_[11]),xe.$set(Zt);const Ft={};M&2048&&(Ft.theme1=_[11]),Re.$set(Ft)},i(_){$||(Je(Ee.$$.fragment,_),Je(ke.$$.fragment,_),Je(xe.$$.fragment,_),Je(Re.$$.fragment,_),$=!0)},o(_){Ke(Ee.$$.fragment,_),Ke(ke.$$.fragment,_),Ke(xe.$$.fragment,_),Ke(Re.$$.fragment,_),$=!1},d(_){_&&ye(i),e[15](null),e[16](null),e[17](null),e[18](null),e[19](null),e[20](null),e[21](null),e[22](null),e[23](null),e[24](null),_&&ye(gt),Ne(Ee,_),_&&ye(vt),Ne(ke,_),_&&ye(ht),Ne(xe,_),_&&ye(yt),Ne(Re,_),bt=!1,Le(Jt)}}}function Gs(){}function zs(e,i,l){let f,a,c,u,v,y,o,I,g,w,b=!1;document.addEventListener("load",()=>{l(11,A=!1)});let A=!1;function E(){y.addEventListener("click",()=>{let r=document.body.clientWidth;b==!1?l(10,b=!b):(r<=680,l(10,b=!1))})}pt(()=>{E(),g.addEventListener("mousedown",()=>{A==!1?(l(11,A=!A),document.documentElement.style.setProperty("transition","all 0.7s"),document.documentElement.style.setProperty("color","#000000"),document.documentElement.style.setProperty("background-color","rgb(229, 250, 254)")):(l(11,A=!1),document.documentElement.style.setProperty("transition","all 0.7s"),document.documentElement.style.setProperty("color","rgb(229, 250, 254)"),document.documentElement.style.setProperty("background-color","#000000"))}),document.body.clientWidth<=680?o.parentNode.removeChild(o):o.parentNode.appendChild(o)});const U=({target:r})=>{document.getElementById(r.href.split("#").at(-1)).scrollIntoView({behavior:"smooth"}),b==!0&&l(10,b=!b)};function x(){document.addEventListener("scroll",()=>{const r=window.scrollY*.2;l(0,f.style=`transform:translateX(${r}px);transition:all 1s ease-out`,f),l(1,a.style=`transform:translateX(-${r}px);transition:all 1s ease-out`,a),l(2,c.style=`transform:translateX(${r}px);transition:all 1s ease-out`,c)})}const d=new IntersectionObserver(r=>{r.forEach(V=>{const j=V.isIntersecting?"enterViewport":"exitViewport";V.target.dispatchEvent(new CustomEvent(j))})});function h(r){d.observe(r)}function C(r){k[r?"unshift":"push"](()=>{u=r,l(3,u)})}function q(r){k[r?"unshift":"push"](()=>{v=r,l(4,v)})}function R(r){k[r?"unshift":"push"](()=>{o=r,l(6,o)})}function B(r){k[r?"unshift":"push"](()=>{y=r,l(5,y)})}function H(r){k[r?"unshift":"push"](()=>{I=r,l(7,I)})}function Y(r){k[r?"unshift":"push"](()=>{w=r,l(9,w)})}function P(r){k[r?"unshift":"push"](()=>{g=r,l(8,g)})}function S(r){k[r?"unshift":"push"](()=>{f=r,l(0,f)})}function Z(r){k[r?"unshift":"push"](()=>{a=r,l(1,a)})}function L(r){k[r?"unshift":"push"](()=>{c=r,l(2,c)})}return[f,a,c,u,v,y,o,I,g,w,b,A,U,x,h,C,q,R,B,H,Y,P,S,Z,L]}class $s extends We{constructor(i){super(),Fe(this,i,zs,Ks,Ze,{})}}function el(e){let i,l,f;return l=new $s({}),{c(){i=n("main"),Ge(l.$$.fragment)},m(a,c){we(a,i,c),De(l,i,null),f=!0},p:ie,i(a){f||(Je(l.$$.fragment,a),f=!0)},o(a){Ke(l.$$.fragment,a),f=!1},d(a){a&&ye(i),Ne(l)}}}class tl extends We{constructor(i){super(),Fe(this,i,null,el,Ze,{})}}new tl({target:document.getElementById("app")});
