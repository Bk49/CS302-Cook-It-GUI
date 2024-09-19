import React from 'react';
import { Outlet } from 'react-router-dom';

interface RecipeDetailsLayoutProps {
    // : string;
}

const RecipeDetailsLayout: React.FC<RecipeDetailsLayoutProps> = ({  }) => {
    return (
        <>
            Recipe Details Layout
            <Outlet />
        </>
    );
};

export default RecipeDetailsLayout;
