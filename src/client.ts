import { ApolloClient, InMemoryCache } from "@apollo/client";

export function updateQuery(
  key: "characters" | "locations" | "episodes" | "none"
) {
  return (prev: any, { fetchMoreResult }: any) => {
    if (key === "none") return fetchMoreResult;
    if (!fetchMoreResult) return prev;
    return {
      [key]: {
        info: fetchMoreResult[key].info,
        results: [...prev[key].results, ...fetchMoreResult[key].results],
        __typename: fetchMoreResult[key].__typename,
      },
    };
  };
}

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
