import{S as k,a as E,s as H,b as _,t as m,c as I,f as u,g as d,h as p,d as g,j as S,k as v,l as b,m as i,o as K}from"./vendor-svelte.3aad0a64.js";function j(n){let e,s,t,h,a,o,l;return{c(){e=_("p"),s=_("strong"),t=m("Kelas hari ini:"),h=I(),a=_("a"),o=m("Kelas "),l=m(n[0]),this.h()},l(c){e=u(c,"P",{class:!0});var r=d(e);s=u(r,"STRONG",{});var y=d(s);t=p(y,"Kelas hari ini:"),y.forEach(g),h=S(r),a=u(r,"A",{href:!0,class:!0});var f=d(a);o=p(f,"Kelas "),l=p(f,n[0]),f.forEach(g),r.forEach(g),this.h()},h(){v(a,"href","/kelas/"+n[0]),v(a,"class","svelte-197o7f7"),v(e,"class","info svelte-197o7f7")},m(c,r){b(c,e,r),i(e,s),i(s,t),i(e,h),i(e,a),i(a,o),i(a,l)},p:K,i:K,o:K,d(c){c&&g(e)}}}function x(n,e,s){let{semuaKategori:t}=e;const a=new Date().getDate()%t.length,o=t[a];return n.$$set=l=>{"semuaKategori"in l&&s(1,t=l.semuaKategori)},[o,t]}class q extends k{constructor(e){super();E(this,e,x,j,H,{semuaKategori:1})}}export{q as K};