import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * @description it is just made for one level
 * ```
 * { name: "mahmoud" }
 * ```
 * not
 * ```
 * { name: { firstname: "mahmoud" } }
 * ```
 */
export function transformFilter(
  filter: Record<string, any>,
  delemiter?: string
) {
  const keys = Object.keys(filter);
  var output = [];
  for (var key of keys) {
    output.push(`${key}:"${filter[key]}"`);
  }
  return "{ " + output.join(" " + (delemiter ?? " ") + " ") + " }";
}

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
