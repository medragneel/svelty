import{d as k}from"./index.e5922e3f.js";import{r as q}from"./scheduler.b562018a.js";import{H as A}from"./control.f5b05b5f.js";function B(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function C(e,c){e.d(1),c.delete(e.key)}function D(e,c,u,m,d,h,a,x,b,E,p,H){let i=e.length,f=h.length,o=i;const r={};for(;o--;)r[e[o].key]=o;const w=[],g=new Map,y=new Map,v=[];for(o=f;o--;){const t=H(d,h,o),n=u(t);let s=a.get(n);s?m&&v.push(()=>s.p(t,c)):(s=E(n,t),s.c()),g.set(n,w[o]=s),n in r&&y.set(n,Math.abs(o-r[n]))}const S=new Set,j=new Set;function $(t){k(t,1),t.m(x,p),a.set(t.key,t),p=t.first,f--}for(;i&&f;){const t=w[f-1],n=e[i-1],s=t.key,l=n.key;t===n?(p=t.first,i--,f--):g.has(l)?!a.has(s)||S.has(s)?$(t):j.has(l)?i--:y.get(s)>y.get(l)?(j.add(s),$(t)):(S.add(l),i--):(b(n,a),i--)}for(;i--;){const t=e[i];g.has(t.key)||b(t,a)}for(;f;)$(w[f-1]);return q(v),w}function L(e,c){return new A(e,c)}new TextEncoder;const P="https://api.movies.tastejs.com",R="https://image.tmdb.org/t/p";let M=new Map;async function F(e,c,u){const m=new URLSearchParams(u),d=`${P}/${c}?${m}`;if(M.has(d))return M.get(d);const h=await e(d);if(!h.ok)throw L(h.status);const a=await h.json();return M.set(d,a),a}function G(e,c){return`${R}/w${c}${e}`}export{C as d,B as e,F as g,G as m,D as u};