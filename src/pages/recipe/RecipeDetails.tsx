import { Container, Grid } from "@mui/material";
import React from "react";
import RecipeBasicDetailsSection from "../../components/recipe/details/RecipeBasicDetailsSection";
import RecipeImage from "../../components/recipe/details/RecipeImage";
import RecipeDescriptionSection from "../../components/recipe/details/RecipeDescriptionSection";
import RecipeIngredientsSection from "../../components/recipe/details/RecipeIngredientsSection";
import RecipePreparationStepsSection from "../../components/recipe/details/RecipePreparationStepsSection";
import RecipeReviewsSection from "../../components/recipe/details/RecipeReviewsSection";
import RecipeReviewListingSection from "../../components/recipe/details/RecipeReviewListingSection";
import useRecipeDetails from "../../custom-hooks/apollo-query/recipes/useRecipeDetail";
import { useParams } from "react-router-dom";

interface RecipeDetailsProps {}

const RecipeDetails: React.FC<RecipeDetailsProps> = ({}) => {
    const { id } = useParams();
    const { data, loading } = useRecipeDetails(id);

    return (
        <Container sx={{ my: 4 }} maxWidth="lg">
            {!loading && data && (
                <>
                    <RecipeBasicDetailsSection recipe={data} />
                    <Grid container direction="column" gap={4}>
                        {data.img && <RecipeImage img={data.img} />}
                        <Grid item>
                            <RecipeDescriptionSection
                                description={data.description}
                            />
                        </Grid>
                        <Grid item>
                            <RecipeIngredientsSection
                                ingredients={data.ingredients ?? []}
                            />
                        </Grid>
                        <Grid item>
                            <RecipePreparationStepsSection
                                steps={data.steps ?? []}
                            />
                        </Grid>
                        <Grid item>
                            <RecipeReviewsSection />
                        </Grid>
                        <Grid item>
                            <RecipeReviewListingSection
                                reviews={data.reviews ?? []}
                            />
                        </Grid>
                    </Grid>
                </>
            )}
        </Container>
    );
};

export default RecipeDetails;
