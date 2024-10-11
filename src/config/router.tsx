import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AddRecipe from "../pages/my-recipes/AddRecipe";
import MyRecipes from "../pages/my-recipes/MyRecipes";
import Profile from "../pages/Profile";
import RecipeDetails from "../pages/recipe/RecipeDetails";
import RootLayout from "../pages/RootLayout";
import ProtectedRoute from "../pages/route/ProtectedRoute";

export default createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "profile",
                element: (
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: "recipe/:id",
                element: <RecipeDetails />,
            },
            {
                path: "myrecipe",
                element: (
                    <ProtectedRoute>
                        <MyRecipes />
                    </ProtectedRoute>
                ),
            },
            {
                path: "myrecipe/add",
                element: (
                    <ProtectedRoute>
                        <AddRecipe />
                    </ProtectedRoute>
                ),
            },
        ],
    },
]);
