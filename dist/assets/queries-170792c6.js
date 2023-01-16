import{$ as t}from"./index-91d8d4d9.js";import{g as i}from"./styles-0af763d8.js";const r=(e,o)=>i`
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
