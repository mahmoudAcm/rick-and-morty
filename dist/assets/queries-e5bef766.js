import{$ as t}from"./index-7d7ee9ac.js";import{g as a}from"./styles-e2a1f7d7.js";const c=(e,r)=>a`
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
