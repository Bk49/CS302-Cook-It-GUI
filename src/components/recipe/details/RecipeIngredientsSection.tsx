import React from "react";
import { IngredientItem } from "../../../types/recipe";
import { Grid, Typography } from "@mui/material";
import { TaskAltRounded } from "@mui/icons-material";

interface RecipeIngredientsSectionProps {
    ingredients: IngredientItem[];
}

const RecipeIngredientsSection: React.FC<RecipeIngredientsSectionProps> = ({
    ingredients,
}) => {
    return (
        <Grid container direction="column" gap={3}>
            <Grid item>
                <Typography fontWeight={600} variant="h3">Ingredients</Typography>
            </Grid>
            <Grid item>
                <Grid ml={2} container direction="column">
                    {ingredients.map(({ ingredient_name, quantity }) => (
                        <Grid container direction="row" gap={2}>
                            <Grid item>
                                <TaskAltRounded color="primary" />
                            </Grid>
                            <Grid item>
                                <Typography>
                                    {quantity} {ingredient_name}
                                </Typography>
                            </Grid>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RecipeIngredientsSection;
