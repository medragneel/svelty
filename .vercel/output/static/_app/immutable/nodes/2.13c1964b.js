import{g as A,e as J,u as te,d as ae,m as K}from"../chunks/global.0085e4a6.js";import{s as Z,n as L,f as N,h as ie}from"../chunks/scheduler.b562018a.js";import{S as x,i as ee,g as k,s as P,m as G,h as y,c as E,j as I,n as T,f as h,k as w,a as S,y as g,o as ne,r as B,u as D,v as H,d as R,t as V,A as Q,w as q}from"../chunks/index.e5922e3f.js";import{H as re}from"../chunks/hero.2fe95d63.js";import{v as C}from"../chunks/views.7b993c1f.js";import{s as U}from"../chunks/index.d24a8bd6.js";async function se({fetch:s}){let[e,a,i,r]=await Promise.all([A(s,"/trending/movie/day",{page:"1"}),A(s,"/movie/top_rated",{page:"1"}),A(s,"/movie/now_playing",{page:"1"}),A(s,"/movie/upcoming",{page:"1"})]),f=await A(s,`movie/${e.results[0].id}`,{append_to_response:"images,videos,recommendations"});return{trending:e,featured:f,top_rated:a,nowPlaying:i,upcoming:r}}const ve=Object.freeze(Object.defineProperty({__proto__:null,load:se},Symbol.toStringTag,{value:"Module"}));function W(s,e,a){const i=s.slice();return i[3]=e[a],i}function X(s){let e,a;return{c(){e=k("a"),a=G("See More"),this.h()},l(i){e=y(i,"A",{href:!0});var r=I(e);a=T(r,"See More"),r.forEach(h),this.h()},h(){w(e,"href",s[2])},m(i,r){S(i,e,r),g(e,a)},p(i,r){r&4&&w(e,"href",i[2])},d(i){i&&h(e)}}}function Y(s,e){let a,i,r,f,l,d;return{key:s,first:null,c(){a=k("a"),i=k("img"),l=P(),this.h()},l(u){a=y(u,"A",{href:!0});var c=I(a);i=y(c,"IMG",{src:!0,alt:!0,class:!0}),l=E(c),c.forEach(h),this.h()},h(){N(i.src,r=K(e[3].poster_path,200))||w(i,"src",r),w(i,"alt",f=e[3].title),w(i,"class","svelte-9tdlf4"),w(a,"href",d=`/movie/${e[3].id}`),this.first=a},m(u,c){S(u,a,c),g(a,i),g(a,l)},p(u,c){e=u,c&1&&!N(i.src,r=K(e[3].poster_path,200))&&w(i,"src",r),c&1&&f!==(f=e[3].title)&&w(i,"alt",f),c&1&&d!==(d=`/movie/${e[3].id}`)&&w(a,"href",d)},d(u){u&&h(a)}}}function le(s){let e,a,i,r,f,l,d,u,c,p,$,v,t=[],m=new Map,_=s[2]&&X(s),M=J(s[0].results);const j=n=>n[3].id;for(let n=0;n<M.length;n+=1){let o=W(s,M,n),b=j(o);m.set(b,t[n]=Y(b,o))}return{c(){e=k("br"),a=P(),i=k("br"),r=P(),f=k("div"),l=k("h2"),d=G(s[1]),u=G(" - "),_&&_.c(),c=P(),p=k("br"),$=P(),v=k("div");for(let n=0;n<t.length;n+=1)t[n].c();this.h()},l(n){e=y(n,"BR",{}),a=E(n),i=y(n,"BR",{}),r=E(n),f=y(n,"DIV",{class:!0});var o=I(f);l=y(o,"H2",{});var b=I(l);d=T(b,s[1]),u=T(b," - "),_&&_.l(b),b.forEach(h),c=E(o),p=y(o,"BR",{}),$=E(o),v=y(o,"DIV",{class:!0});var F=I(v);for(let z=0;z<t.length;z+=1)t[z].l(F);F.forEach(h),o.forEach(h),this.h()},h(){w(v,"class","carousel"),w(f,"class","container")},m(n,o){S(n,e,o),S(n,a,o),S(n,i,o),S(n,r,o),S(n,f,o),g(f,l),g(l,d),g(l,u),_&&_.m(l,null),g(f,c),g(f,p),g(f,$),g(f,v);for(let b=0;b<t.length;b+=1)t[b]&&t[b].m(v,null)},p(n,[o]){o&2&&ne(d,n[1]),n[2]?_?_.p(n,o):(_=X(n),_.c(),_.m(l,null)):_&&(_.d(1),_=null),o&1&&(M=J(n[0].results),t=te(t,o,j,1,n,M,m,v,ae,Y,null,W))},i:L,o:L,d(n){n&&(h(e),h(a),h(i),h(r),h(f)),_&&_.d();for(let o=0;o<t.length;o+=1)t[o].d()}}}function oe(s,e,a){let{movies:i}=e,{title:r}=e,{href:f}=e;return s.$$set=l=>{"movies"in l&&a(0,i=l.movies),"title"in l&&a(1,r=l.title),"href"in l&&a(2,f=l.href)},[i,r,f]}class O extends x{constructor(e){super(),ee(this,e,oe,le,Z,{movies:0,title:1,href:2})}}function fe(s){let e,a,i,r,f,l,d,u,c,p,$,v;return a=new re({props:{movie:s[0].featured,name:s[0].featured.title,media_type:"movie"}}),r=new O({props:{title:C.trending.title,movies:s[0].trending,href:"/movies/trending"}}),l=new O({props:{title:C.nowPlaying.title,movies:s[0].nowPlaying,href:"/movies/nowPlaying"}}),u=new O({props:{title:C.upcoming.title,movies:s[0].upcoming,href:"/movies/upcoming"}}),p=new O({props:{title:C.top_rated.title,movies:s[0].top_rated,href:"/movies/top_rated"}}),{c(){e=k("div"),B(a.$$.fragment),i=P(),B(r.$$.fragment),f=P(),B(l.$$.fragment),d=P(),B(u.$$.fragment),c=P(),B(p.$$.fragment),this.h()},l(t){e=y(t,"DIV",{class:!0});var m=I(e);D(a.$$.fragment,m),i=E(m),D(r.$$.fragment,m),f=E(m),D(l.$$.fragment,m),d=E(m),D(u.$$.fragment,m),c=E(m),D(p.$$.fragment,m),m.forEach(h),this.h()},h(){w(e,"class","main")},m(t,m){S(t,e,m),H(a,e,null),g(e,i),H(r,e,null),g(e,f),H(l,e,null),g(e,d),H(u,e,null),g(e,c),H(p,e,null),v=!0},p(t,[m]){const _={};m&1&&(_.movie=t[0].featured),m&1&&(_.name=t[0].featured.title),a.$set(_);const M={};m&1&&(M.movies=t[0].trending),r.$set(M);const j={};m&1&&(j.movies=t[0].nowPlaying),l.$set(j);const n={};m&1&&(n.movies=t[0].upcoming),u.$set(n);const o={};m&1&&(o.movies=t[0].top_rated),p.$set(o)},i(t){v||(R(a.$$.fragment,t),R(r.$$.fragment,t),R(l.$$.fragment,t),R(u.$$.fragment,t),R(p.$$.fragment,t),t&&ie(()=>{v&&($||($=Q(e,U,{},!0)),$.run(1))}),v=!0)},o(t){V(a.$$.fragment,t),V(r.$$.fragment,t),V(l.$$.fragment,t),V(u.$$.fragment,t),V(p.$$.fragment,t),t&&($||($=Q(e,U,{},!1)),$.run(0)),v=!1},d(t){t&&h(e),q(a),q(r),q(l),q(u),q(p),t&&$&&$.end()}}}function me(s,e,a){let{data:i}=e;return s.$$set=r=>{"data"in r&&a(0,i=r.data)},[i]}class pe extends x{constructor(e){super(),ee(this,e,me,fe,Z,{data:0})}}export{pe as component,ve as universal};