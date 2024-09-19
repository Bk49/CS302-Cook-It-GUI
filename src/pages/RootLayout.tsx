import React from "react";
import { Outlet } from "react-router-dom";

interface RootLayoutProps {
    // : string;
}

const RootLayout: React.FC<RootLayoutProps> = ({}) => {
    return (
        <>
        {/* Add the app bar here */}
        Root Layout
            <Outlet />
        </>
    );
};

export default RootLayout;
