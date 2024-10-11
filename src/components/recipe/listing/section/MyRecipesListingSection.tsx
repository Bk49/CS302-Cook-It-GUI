import { Container, Grid } from "@mui/material";
import React from "react";
import useMyRecipes from "../../../../custom-hooks/apollo-query/recipes/useMyRecipes";
import { RecipeItem } from "../../../../types/recipe";
import RecipeItemCard from "../../../common/card/RecipeItemCard";

interface MyRecipesListingSectionProps {}

const MyRecipesListingSection: React.FC<
    MyRecipesListingSectionProps
> = ({}) => {
    const { data, loading } = useMyRecipes();

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Grid container spacing={2}>
                {!loading &&
                    data &&
                    (data.getRecipesByAuthor as RecipeItem[]).map((recipe) => (
                        <Grid lg={3} md={4} sm={6} xs={12} item key={recipe.id}>
                            <RecipeItemCard
                                {...recipe}
                                isMyRecipe
                                total_time={recipe.cook_time + recipe.prep_time}
                                author={`${recipe.author.first_name} ${recipe.author.last_name}`}
                                to={`/recipe/${recipe.id}`}
                            />
                        </Grid>
                    ))}
            </Grid>
        </Container>
    );
};

export default MyRecipesListingSection;
