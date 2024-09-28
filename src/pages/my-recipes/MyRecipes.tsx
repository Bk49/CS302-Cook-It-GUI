import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface MyRecipesProps {}

const MyRecipes: React.FC<MyRecipesProps> = ({}) => {
    const navigate = useNavigate();

    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Grid
                container
                direction="row"
                width="100%"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography variant="h3">My Recipes</Typography>
                <Grid item>
                    <Button
                        size="large"
                        variant="contained"
                        onClick={() => navigate("/myrecipe/add")}
                    >
                        Add New Recipe
                    </Button>
                </Grid>
            </Grid>
            <Divider sx={{ my: 2 }} />
        </Container>
    );
};

export default MyRecipes;
