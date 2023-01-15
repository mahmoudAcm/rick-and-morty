import{$ as t}from"./index-7f96bb1f.js";import{g as a}from"./styles-b8804c7a.js";const c=(e,r)=>a`
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
