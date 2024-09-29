import React from "react";
import { PreparationStepItem } from "../../../types/recipe";
import { Box, Grid, Paper, Typography } from "@mui/material";

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
            <Grid item>
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
                                <Grid item>
                                    <Box
                                        width="100%"
                                        display="flex"
                                        justifyContent="center"
                                        alignItems="center"
                                    >
                                        <Paper
                                            elevation={4}
                                            style={{
                                                borderRadius: 16,
                                                width: "100%",
                                                height:"auto",
                                                maxWidth: 720,
                                            }}
                                        >
                                            <img
                                                src={image}
                                                style={{
                                                    borderRadius: 16,
                                                    width: "100%",
                                                    height: "auto",
                                                    display:"block"
                                                }}
                                            />
                                        </Paper>
                                    </Box>
                                </Grid>
                            )}
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RecipePreparationStepsSection;
