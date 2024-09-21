import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import RecipeItemCard from "../common/card/RecipeItemCard";
import useWeeklyRecipes from "../../custom-hooks/react-query/weekly/useWeeklyRecipes";
import { useNavigate } from "react-router-dom";

interface WeeklyRecipeSectionProps {}

const WeeklyRecipeSection: React.FC<WeeklyRecipeSectionProps> = ({}) => {
    const { data: recipes } = useWeeklyRecipes();
    const navigate = useNavigate()

    return (
        <Container maxWidth="xl" sx={{ mt: 4 }}>
            <Grid container gap={3}>
                <Grid item width="100%">
                    <Grid
                        direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        container
                    >
                        <Grid item>
                            <Typography variant="h4">
                                Recipes of the Week
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography onClick={() => navigate("/recipe")}>{"View All Recipes >"}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width="100%">
                    <Typography variant="body2">
                        Here are some of the most favourited recipes of the week
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={4} justifyContent="center">
                        {recipes &&
                            recipes.map((recipe) => (
                                <Grid xl={3} md={4} sm={6} xs={12} item key={recipe.id}>
                                    <RecipeItemCard {...recipe} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WeeklyRecipeSection;
