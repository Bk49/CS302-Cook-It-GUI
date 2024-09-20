import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../components/common/nav/AppBar";

interface RootLayoutProps {
    // : string;
}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <>
            <AppBar />
            <Outlet />
        </>
    );
};

export default RootLayout;
