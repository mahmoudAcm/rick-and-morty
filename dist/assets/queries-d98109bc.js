import{$ as a}from"./index-8cc532e3.js";import{g as r}from"./styles-c78f386b.js";const t=(e,s)=>r`
  query {
    episodes(filter: ${a(s,",")}, page: ${e}) {
      info {
        next
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`,d=e=>r`
  query {
    episode(id: ${e}) {
      name
      episode
      air_date
      characters {
        id
        name
        species
        image
      }
    }
  }
`;export{d as a,t as c};
