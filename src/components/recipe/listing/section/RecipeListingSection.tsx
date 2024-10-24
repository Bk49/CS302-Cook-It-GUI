import { Container, Grid } from "@mui/material";
import React from "react";
import RecipeItemCard from "../../../common/card/RecipeItemCard";
import useRecipes from "../../../../custom-hooks/apollo-query/recipes/useRecipes";
import { RecipeItem } from "../../../../types/recipe";
import { useFormContext } from "react-hook-form";

interface RecipeListingSectionProps {}

const RecipeListingSection: React.FC<RecipeListingSectionProps> = ({}) => {
    // TODO: Change this to use actual endpoint
    const { data, loading } = useRecipes();
    const { watch } = useFormContext();
    const searchVal = watch("search");

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Grid container spacing={2}>
                {!loading &&
                    data &&
                    (data.recipes as RecipeItem[])
                        .filter((e) =>
                            searchVal && searchVal.length > 0
                                ? e.name.includes(searchVal)
                                : true
                        )
                        .map((recipe) => (
                            <Grid
                                lg={3}
                                md={4}
                                sm={6}
                                xs={12}
                                item
                                key={recipe?.id}
                            >
                                <RecipeItemCard
                                    {...recipe}
                                    total_time={
                                        recipe?.cook_time && recipe?.prep_time
                                            ? recipe.cook_time +
                                              recipe.prep_time
                                            : 0
                                    }
                                    author={`${recipe?.author.first_name ?? "John"} ${recipe?.author.last_name ?? "Doe"}`}
                                    to={`/recipe/${recipe?.id}`}
                                />
                            </Grid>
                        ))}
            </Grid>
        </Container>
    );
};

export default RecipeListingSection;
