import { Container, Grid, Typography } from "@mui/material";
import React from "react";

interface WeeklyRecipeSectionProps {}

const WeeklyRecipeSection: React.FC<WeeklyRecipeSectionProps> = ({}) => {
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
                            <Typography>{"View All Recipes >"}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item width="100%">
                    <Typography variant="body2">Here are some of the most favourited recipes of the week</Typography>
                </Grid>
                <Grid item>
                    
                </Grid>
            </Grid>
        </Container>
    );
};

export default WeeklyRecipeSection;
