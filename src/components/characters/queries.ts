import { gql } from "@apollo/client";

//types
import { FilterState } from "./filter";

//utils
import { transformJsToGql } from "../../client";

export const createCharactersQuery = (page: string, filter: FilterState) => gql`
    query {
        characters(filter: ${transformJsToGql(filter)}, page: ${page}) {
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
`;

export const createCharacterQuery = (id: string) =>
  gql`
    query {
        character(id:${id}) {
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
`;

export const createSpeciesAndStatusAndGenderQuery = (page: string) => gql`
query {
    characters(page: ${page}) {
        info {
          pages
          next
        }
        results {
          gender
          status
          species
        }
    }
}
`;
