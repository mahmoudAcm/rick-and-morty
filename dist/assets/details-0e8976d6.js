import{j as a,r as o,u as m,a2 as x,a3 as j,T as s,L as n}from"./index-8cc532e3.js";import{u,a as p}from"./styles-c78f386b.js";import{b as N,N as v,c as y,L as t,I as r}from"./styles-faef9574.js";import{a as h}from"./queries-b79c25cb.js";function d(){return a.jsx("svg",{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.00003 0L0.590027 1.41L5.17003 6L0.590027 10.59L2.00003 12L8.00003 6L2.00003 0Z",fill:"#8E8E93"})})}const f=h("0"),g=l=>{const{data:e,loading:i,fetchMore:c}=u(f);return o.useEffect(()=>{l&&c({query:h(l),updateQuery:m("none")})},[l]),{data:e,loading:i}};function w(){const{id:l}=x(),{data:e,loading:i}=g(l);return i||!e||!e.character?a.jsx(j,{}):a.jsx(p,{children:a.jsxs("div",{className:"container",children:[a.jsx(N,{src:e.character.image??"https://rickandmortyapi.com/api/character/avatar/1.jpeg",alt:"character profile picture"}),a.jsx(v,{children:e.character.name??"Rick Sanchez"}),a.jsxs(y,{children:[a.jsxs(t,{children:[a.jsx("span",{className:"list-name",children:"Informations"}),a.jsx(r,{children:a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Gender"}),a.jsx(s,{className:"value",children:e.character.gender})]})}),a.jsx(r,{children:a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Status"}),a.jsx(s,{className:"value",children:e.character.status})]})}),a.jsx(r,{children:a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Specie"}),a.jsx(s,{className:"value",children:e.character.species})]})}),a.jsx(r,{children:a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Origin"}),a.jsx(s,{className:"value",children:e.character.origin.name})]})}),e.character.type?a.jsx(r,{children:a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Type"}),a.jsx(s,{className:"value",children:e.character.type})]})}):a.jsx(a.Fragment,{}),e.character.location.name?a.jsx(n,{to:"/locations/"+e.character.location.id,children:a.jsxs(r,{className:"cursor",children:[a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"key",children:"Location"}),a.jsx(s,{className:"value",children:e.character.location.name})]}),a.jsx(d,{})]})},e.character.location.id):a.jsx(a.Fragment,{})]}),a.jsxs(t,{children:[a.jsx("span",{className:"list-name",children:"Episodes"}),(e.character.episode??[]).map(c=>a.jsx(n,{to:"/episodes/"+c.id,children:a.jsxs(r,{className:"cursor",children:[a.jsxs("div",{className:"col",children:[a.jsx(s,{className:"code",children:c.episode}),a.jsx(s,{className:"episode-name",children:c.name}),a.jsx(s,{className:"date",children:c.air_date})]}),a.jsx(d,{})]})},c.id))]})]})]})})}export{w as default};
