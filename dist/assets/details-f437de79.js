import{r as n,u,a2 as c,j as s,a3 as m}from"./index-7d7ee9ac.js";import{L as l}from"./location-episode-layouts-7742076e.js";import{C as p}from"./character-523af422.js";import{a as i}from"./queries-6695bc08.js";import{u as d}from"./styles-e2a1f7d7.js";import"./styles-7f9b4d7c.js";const f=e=>{const{data:t,fetchMore:a}=d(i(e??"0")),[o,r]=n.useState(!0);return n.useEffect(()=>{e&&(r(!0),a({query:i(e),updateQuery:u("none")}).then(()=>{r(!1)}))},[e]),{data:t,loading:o}};function g(){const{id:e}=c(),{data:t,loading:a}=f(e);return a||!t||!t.location?s.jsx(m,{}):s.jsx(l,{title:t.location.name,location:{type:t.location.type,dimension:t.location.dimension},subtitle:"Residents",children:(t.location.residents??[]).map(o=>s.jsx(p,{...o},o.id))})}export{g as default};
