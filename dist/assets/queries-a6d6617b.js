import{$ as a}from"./index-7d7ee9ac.js";import{g as r}from"./styles-e2a1f7d7.js";const t=(e,s)=>r`
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
