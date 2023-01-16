import { gql } from "@apollo/client";

//utils
import { transformJsToGql } from "@__client__";

//types
import { FilterState } from "./filter";

export const createLocationsQuery = (page: string, filter: FilterState) => gql`
  query {
    locations(filter: ${transformJsToGql(filter)}, page: ${page}) {
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
