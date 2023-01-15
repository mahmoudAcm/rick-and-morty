import{$ as t}from"./index-7d7ee9ac.js";import{g as i}from"./styles-e2a1f7d7.js";const r=(e,o)=>i`
  query {
    locations(filter: ${t(o)}, page: ${e}) {
      info {
        next
      }
      results {
        id
        name
        dimension
        type
      }
    }
  }
`,s=e=>i`
  query {
    location(id: ${e}) {
      name
      type
      dimension
      residents {
        id
        name
        species
        image
      }
    }
  }
`;export{s as a,r as c};
