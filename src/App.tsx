import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider, createTheme } from "@mui/material";

//router
import router from "./router";

//appllo client
import client from "./client";

const theme = createTheme({});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </ApolloProvider>
  );
}
