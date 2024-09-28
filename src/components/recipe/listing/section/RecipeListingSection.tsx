import { Grid } from "@mui/material";
import React from "react";
import useWeeklyRecipes from "../../../../custom-hooks/react-query/weekly/useWeeklyRecipes";
import RecipeItemCard from "../../../common/card/RecipeItemCard";

interface RecipeListingSectionProps {}

const RecipeListingSection: React.FC<RecipeListingSectionProps> = ({}) => {
    // TODO: Change this to use actual endpoint
    const { data: recipes } = useWeeklyRecipes();

    return (
        <Grid container spacing={2}>
            {recipes &&
                recipes.map((recipe) => (
                    <Grid lg={4} md={6} sm={12} item key={recipe.id}>
                        <RecipeItemCard
                            {...recipe}
                            to={`/recipe/${recipe.id}`}
                        />
                    </Grid>
                ))}
        </Grid>
    );
};

export default RecipeListingSection;
