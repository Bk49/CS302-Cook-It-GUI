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

export default createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "", element: <Home /> },
            {
                path: "profile",
                element: <Profile />,
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
                path: "recipe/favourites",
                element: <FavouriteRecipes />,
            },
            {
                path: "myrecipe",
                element: <MyRecipes />,
            },
            {
                path: "myrecipe/add",
                element: <AddRecipe />,
            },
            {
                path: "myrecipe/:id",
                element: <RecipeDetailsLayout />,
                children: [
                    { path: "/myrecipe/:id/edit", element: <EditRecipe /> },
                    { path: "/myrecipe/:id/review", element: <RecipeReview /> },
                ],
            },
        ],
    },
]);
