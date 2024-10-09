import { ApolloProvider } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import React, { useMemo } from "react";
import { Outlet } from "react-router-dom";
import { createApolloClient } from "../apollo/client";
import AppBar from "../components/common/nav/AppBar";

interface RootLayoutProps {
}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();

    const client = useMemo(
        () => createApolloClient(getAccessTokenSilently),
        [getAccessTokenSilently, isAuthenticated]
    );

    return (
        <ApolloProvider client={client}>
            <AppBar />
            <Outlet />
        </ApolloProvider>
    );
};

export default RootLayout;
