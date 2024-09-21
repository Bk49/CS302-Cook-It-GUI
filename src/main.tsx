import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClientProvider } from "@tanstack/react-query";
import { CssBaseline, ThemeProvider } from "@mui/material";
import queryClient from "./config/query-client.ts";
import { SnackbarProvider } from "notistack";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-iu4kzoymxgg0vztn.us.auth0.com"
            clientId="GViWxcOKSaHQirXhpf0wtoweGB73CmWW"
            authorizationParams={{
                redirect_uri: "http://localhost:3000",
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <QueryClientProvider client={queryClient}>
                    <SnackbarProvider>
                        <CssBaseline />
                        <RouterProvider router={router} />
                    </SnackbarProvider>
                </QueryClientProvider>
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);
