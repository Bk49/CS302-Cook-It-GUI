import { useAuth0 } from "@auth0/auth0-react";
import { InternalAxiosRequestConfig } from "axios";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { graphQL } from "../axios/client";
import AppBar from "../components/common/nav/AppBar";

interface RootLayoutProps {
    // : string;
}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) {
            const configureInstance = async (
                config: InternalAxiosRequestConfig
            ) => {
                config.headers.Authorization = `Bearer ${await getAccessTokenSilently()}`;
                return config;
            };
            graphQL.interceptors.request.use(configureInstance);
        }
    }, [isAuthenticated]);
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};

export default RootLayout;
