import { Grid, Paper, Typography } from "@mui/material";
import React from "react";
import { PreparationStepItem } from "../../../types/recipe";

interface RecipePreparationStepsSectionProps {
    steps: PreparationStepItem[];
}

const RecipePreparationStepsSection: React.FC<
    RecipePreparationStepsSectionProps
> = ({ steps }) => {
    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Typography fontWeight={600} variant="h3">
                    Preparation Steps
                </Typography>
            </Grid>
            <Grid ml={2} container direction="column" gap={4}>
                {steps.map(({ description, image }, index) => (
                    <Grid container direction="column" gap={2}>
                        <Grid item>
                            <Grid container direction="row" gap={3}>
                                <Typography fontWeight={600}>
                                    {index + 1}.
                                </Typography>
                                <Typography>{description}</Typography>
                            </Grid>
                        </Grid>
                        {image && (
                            <Paper
                                elevation={4}
                                style={{
                                    display: "block",
                                    margin: "auto",
                                    borderRadius: 16,
                                    width: "100%",
                                    maxWidth: 720,
                                    maxHeight: 400,
                                }}
                            >
                                <img
                                    src={image}
                                    style={{
                                        borderRadius: 16,
                                        width: "100%",
                                        margin: "auto",
                                        maxWidth: 720,
                                        maxHeight: 400,
                                        objectFit: "cover",
                                    }}
                                />
                            </Paper>
                        )}
                    </Grid>
                ))}
            </Grid>
        </Grid>
    );
};

export default RecipePreparationStepsSection;
