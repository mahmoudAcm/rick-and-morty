import { gql } from "@apollo/client";

export const createLocationsQuery = (page: string) => gql`
  query {
    locations(page: ${page}) {
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
`;

export const createLocationQuery = (id: string) => gql`
  query {
    location(id: ${id}) {
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
`;
