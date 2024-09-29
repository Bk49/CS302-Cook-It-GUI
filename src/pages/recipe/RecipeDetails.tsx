import { Container, Grid } from "@mui/material";
import React from "react";
import RecipeBasicDetailsSection from "../../components/recipe/details/RecipeBasicDetailsSection";
import RecipeImage from "../../components/recipe/details/RecipeImage";
import RecipeDescriptionSection from "../../components/recipe/details/RecipeDescriptionSection";
import RecipeIngredientsSection from "../../components/recipe/details/RecipeIngredientsSection";
import RecipePreparationStepsSection from "../../components/recipe/details/RecipePreparationStepsSection";
import RecipeReviewsSection from "../../components/recipe/details/RecipeReviewsSection";
import RecipeReviewListingSection from "../../components/recipe/details/RecipeReviewListingSection";

interface RecipeDetailsProps {
    // : string;
}

const data = {
    id: "1",
    name: "Nasi Lemak (Sambal Lebih)",
    img: "https://www.seriouseats.com/thmb/jurw_XoUko0sLM17lhIWseKvsyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230309-NasiLemak-MichelleYip-Option1-8d0b9468c998495f91ef4ff6d3b5ab6b.jpg",
    author: "Phris Coskitt",
    prep_time: 20,
    cook_time: 20,
    rating: 4.5,
    is_favourite: true,
    created_at: "Wed, 25 Sep 2024 12:24:33 GMT",
    description: "Fragrance Nasi Lemak ftw",
    cuisine_type: "Malay",
    ingredients: [
        {
            ingredient_name: "coconut milk",
            quantity: "2 tablespoon",
        },
        {
            ingredient_name: "rice",
            quantity: "4 cups",
        },
    ],
    portion_size: 2,
    steps: [
        {
            description: "Do nothing",
            image: "https://www.seriouseats.com/thmb/jurw_XoUko0sLM17lhIWseKvsyM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20230309-NasiLemak-MichelleYip-Option1-8d0b9468c998495f91ef4ff6d3b5ab6b.jpg",
        },
        {
            description: "Do something",
            image: undefined,
        },
    ],
    reviews: [
        {
            name: "Thiang Lay Foo",
            image: "https://staffphoto.smu.edu.sg/s/lfthiang/100x120",
            rating: 5,
            created_at: "Wed, 26 Sep 2024 12:24:33 GMT",
            comment:
                "My wife and I just finished eating the Kung Pao Chicken and it was delicious. I followed the recipe exactly. I did go to our local Asian grocery store and purchased all the items.",
        },
        {
            name: "Auncle Roggier",
            image: "https://cdn.i-scmp.com/sites/default/files/d8/images/methode/2020/12/04/d2925840-35e4-11eb-8d89-a7d6b31c4b8a_image_hires_181733.jpg",
            rating: 4.5,
            created_at: "Wed, 26 Sep 2024 12:26:33 GMT",
            comment:
                "Oh this pretty good, but no MSG, haiyaaa. Once you add it, it is perfect. I am impressed. Let me give Phris Coskitt the Uncle title. Uncle Phris Coskitt, fuiyyooooo",
        },
    ],
};

const RecipeDetails: React.FC<RecipeDetailsProps> = ({}) => {
    return (
        <Container sx={{ my: 4 }} maxWidth="lg">
            <RecipeBasicDetailsSection recipe={data} />
            <Grid container direction="column" gap={4}>
                {data.img && (
                    <Grid item>
                        <RecipeImage img={data.img} />
                    </Grid>
                )}
                <Grid item>
                    <RecipeDescriptionSection description={data.description} />
                </Grid>
                <Grid item>
                    <RecipeIngredientsSection ingredients={data.ingredients} />
                </Grid>
                <Grid item>
                    <RecipePreparationStepsSection steps={data.steps} />
                </Grid>
                <Grid item>
                    <RecipeReviewsSection />
                </Grid>
                <Grid item>
                    <RecipeReviewListingSection reviews={data.reviews}/>
                </Grid>
            </Grid>
        </Container>
    );
};

export default RecipeDetails;
