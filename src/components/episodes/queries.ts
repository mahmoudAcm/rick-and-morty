import { gql } from "@apollo/client";

//utils
import { transformJsToGql } from "@__client__";

export const createEpisodesQuery = (
  page: string,
  filter: { episode?: string; name?: string }
) => gql`
  query {
    episodes(filter: ${transformJsToGql(filter)}, page: ${page}) {
      info {
        next
      }
      results {
        id
        name
        air_date
        episode
      }
    }
  }
`;

export const createEpisodeQuery = (id: string) => gql`
  query {
    episode(id: ${id}) {
      name
      episode
      air_date
      characters {
        id
        name
        species
        image
      }
    }
  }
`;
