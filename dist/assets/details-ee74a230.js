import{r as o,a2 as p,u as c,a3 as f,j as r,a4 as m}from"./index-91d8d4d9.js";import{L as l}from"./location-episode-layouts-a4f4f2bf.js";import{C as g}from"./character-f125f491.js";import{a as u}from"./queries-d8b367ec.js";import{u as x}from"./styles-0af763d8.js";import"./styles-75f3685e.js";const E=t=>{const{data:e,error:s,fetchMore:a}=x(u(t??"0")),[n,i]=o.useState(!0),d=p();return o.useEffect(()=>{s&&(alert("Somthing went wrong!"),d("/episodes"))},[s]),o.useEffect(()=>{t&&(i(!0),a({query:u(t),updateQuery:c("none")}).then(()=>{i(!1)}))},[t]),{data:e,loading:n}};function v(){const{id:t}=f(),{data:e,loading:s}=E(t);return s||!e||!e.episode?r.jsx(m,{}):r.jsx(l,{title:e.episode.name,episode:{code:e.episode.episode,date:e.episode.air_date},subtitle:"Cast",children:(e.episode.characters??[]).map(a=>r.jsx(g,{...a},a.id))})}export{v as default};