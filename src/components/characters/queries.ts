import { gql } from "@apollo/client";

export const createCharactersQuery = (page: string) => gql`
    query {
        characters(page: ${page}) {
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
            episode {
              id
              name
              episode
              air_date
            }
          }
    }
`;
