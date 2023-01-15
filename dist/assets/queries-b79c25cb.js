import{$ as t}from"./index-8cc532e3.js";import{g as a}from"./styles-c78f386b.js";const c=(e,r)=>a`
    query {
        characters(filter: ${t(r??{})}, page: ${e}) {
            info {
              next
            }
            results {
                id
                name
                image
                species
            }
        }
    }
`,o=e=>a`
    query {
        character(id:${e}) {
            name
            image
            status
            species
            gender
            type
            origin {
              name
            }
            location {
              id
              name
            }
            episode {
              id
              name
              episode
              air_date
            }
          }
    }
`;export{o as a,c};
