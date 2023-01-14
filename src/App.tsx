import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";

//router
import router from "./router";

//appllo client
import client from "./client";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}
