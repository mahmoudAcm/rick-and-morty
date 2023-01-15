import{$ as t}from"./index-7f96bb1f.js";import{g as i}from"./styles-b8804c7a.js";const r=(e,o)=>i`
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
