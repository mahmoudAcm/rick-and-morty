import { gql } from "@apollo/client";

export const createEpisodesQuery = (page: string) => gql`
  query {
    episodes(page: ${page}) {
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
