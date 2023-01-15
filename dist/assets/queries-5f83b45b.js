import{$ as t}from"./index-8cc532e3.js";import{g as i}from"./styles-c78f386b.js";const r=(e,o)=>i`
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
