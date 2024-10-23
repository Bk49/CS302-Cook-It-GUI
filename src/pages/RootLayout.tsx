import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/common/nav/AppBar";
import { useAuth0 } from "@auth0/auth0-react";
import { from, useApolloClient } from "@apollo/client";
import { createAuthLink, httpLink } from "../apollo/client";
import { axiosClient } from "../axios/client";
import { InternalAxiosRequestConfig } from "axios";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const client = useApolloClient();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then((token) => {
                client.setLink(from([createAuthLink(token), httpLink]));
                axiosClient.interceptors.request.use(
                    (config: InternalAxiosRequestConfig<any>) => {
                        config.headers.Authorization = `Bearer ${token}`;
                        return config;
                    }
                );
            });
        } else {
            client.setLink(from([createAuthLink(), httpLink]));
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};

export default RootLayout;
