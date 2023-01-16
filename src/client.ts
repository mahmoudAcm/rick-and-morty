import { ApolloClient, InMemoryCache } from "@apollo/client";

/**
 * it shallow transforms a simple javascript object to graphql string
 * @param filter javascript object
 * @example
 * given { name: "a", count: 0 }
 * ```js
 * result = `{
 *   name: "a"
 *   count: 0
 * }`
 * ```
 */
export function transformJsToGql(filter: Record<string, any>) {
  const keys = Object.keys(filter);
  var output = [];
  for (var key of keys) {
    output.push(`${key}:"${filter[key]}"`);
  }
  return "{ " + output.join(" ") + " }";
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
