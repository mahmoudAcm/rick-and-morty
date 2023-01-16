import{$ as t}from"./index-91d8d4d9.js";import{g as a}from"./styles-0af763d8.js";const c=(e,r)=>a`
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
