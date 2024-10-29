import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/common/nav/AppBar";
import UserProfileProvider from "../custom-hooks/context/UserProfile";

interface RootLayoutProps {}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <UserProfileProvider>
            <AppBar />
            <Outlet />
        </UserProfileProvider>
    );
};

export default RootLayout;
