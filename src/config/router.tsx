import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import RecipeListing from "../pages/recipe/RecipeListing";
import RecipeDetails from "../pages/recipe/RecipeDetails";
import FavouriteRecipes from "../pages/recipe/FavouriteRecipes";
import RootLayout from "../pages/RootLayout";
import MyRecipes from "../pages/my-recipes/MyRecipes";
import AddRecipe from "../pages/my-recipes/AddRecipe";
import EditRecipe from "../pages/my-recipes/EditRecipe";
import RecipeReview from "../pages/my-recipes/RecipeReview";
import RecipeDetailsLayout from "../pages/my-recipes/RecipeDetailsLayout";
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
                path: "recipe",
                element: <RecipeListing />,
            },
            {
                path: "recipe/:id",
                element: <RecipeDetails />,
            },
            {
                path: "recipe/favourite",
                element: (
                    <ProtectedRoute>
                        <FavouriteRecipes />
                    </ProtectedRoute>
                ),
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
            {
                path: "myrecipe/:id",
                element: (
                    <ProtectedRoute>
                        <RecipeDetailsLayout />
                    </ProtectedRoute>
                ),
                children: [
                    { path: "/myrecipe/:id/edit", element: <EditRecipe /> },
                    { path: "/myrecipe/:id/review", element: <RecipeReview /> },
                ],
            },
        ],
    },
]);
