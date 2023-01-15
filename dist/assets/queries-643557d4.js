import{$ as a}from"./index-7f96bb1f.js";import{g as r}from"./styles-b8804c7a.js";const t=(e,s)=>r`
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
