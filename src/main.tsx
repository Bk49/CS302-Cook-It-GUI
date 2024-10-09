import { Auth0Provider } from "@auth0/auth0-react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SnackbarProvider } from "notistack";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./config/router.tsx";
import defaultTheme from "./config/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <Auth0Provider
            domain="dev-iu4kzoymxgg0vztn.us.auth0.com"
            clientId="GViWxcOKSaHQirXhpf0wtoweGB73CmWW"
            authorizationParams={{
                redirect_uri: "http://localhost:3000",
                audience: "http://localhost:4000/",
            }}
        >
            <ThemeProvider theme={defaultTheme}>
                <SnackbarProvider>
                    <CssBaseline />
                    <RouterProvider router={router} />
                </SnackbarProvider>
            </ThemeProvider>
        </Auth0Provider>
    </React.StrictMode>
);
