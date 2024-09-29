import { Grid } from "@mui/material";
import React from "react";
import { ReviewItem } from "../../../types/recipe";
import UserReviewItem from "../listing/review/UserReviewItem";

interface RecipeReviewListingSectionProps {
    reviews: ReviewItem[];
}

const RecipeReviewListingSection: React.FC<RecipeReviewListingSectionProps> = ({
    reviews,
}) => {
    return (
        <Grid container direction="column" gap={4} my={4}>
            {reviews.map((review, index) => (
                <UserReviewItem key={index} {...review} />
            ))}
        </Grid>
    );
};

export default RecipeReviewListingSection;
