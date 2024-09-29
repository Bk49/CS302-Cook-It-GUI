import { Grid, Typography } from "@mui/material";
import React from "react";

interface RecipeDescriptionSectionProps {
    description: string;
}

const RecipeDescriptionSection: React.FC<RecipeDescriptionSectionProps> = ({
    description,
}) => {
    return (
        <Grid container direction="column" gap={3}>
            <Grid item>
                <Typography fontWeight={600} variant="h3">Description</Typography>
            </Grid>
            <Grid item>
                <Typography>{description}</Typography>
            </Grid>
        </Grid>
    );
};

export default RecipeDescriptionSection;
