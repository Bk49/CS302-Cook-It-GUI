import { ApolloProvider } from "@apollo/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import client from "./apollo/client.ts";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain={import.meta.env.VITE_AUTH0_DOMAIN}
            clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
            authorizationParams={{
                redirect_uri: import.meta.env.VITE_AUTH0_REDIRECT_URI,
                audience: import.meta.env.VITE_AUTH0_AUDIENCE,
            }}
        >
            <QueryClientProvider client={new QueryClient()}>
                <ApolloProvider client={client}>
                    <ThemeProvider theme={defaultTheme}>
                        <SnackbarProvider>
                            <CssBaseline />
                            <RouterProvider router={router} />
                        </SnackbarProvider>
                    </ThemeProvider>
                </ApolloProvider>
            </QueryClientProvider>
        </Auth0Provider>
    </React.StrictMode>
);
