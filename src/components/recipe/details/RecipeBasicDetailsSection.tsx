import {
    BookmarkRounded,
    BookmarkBorderRounded,
    Star,
} from "@mui/icons-material";
import { Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { RecipeDetails } from "../../../types/recipe";

interface RecipeBasicDetailsSectionProps {
    recipe: RecipeDetails;
}

const RecipeBasicDetailsSection: React.FC<RecipeBasicDetailsSectionProps> = ({
    recipe: { name, is_favourite, rating, author, created_at },
}) => {
    return (
        <Grid container direction="column" mb={3}>
            <Grid item>
                <Grid container direction="row" alignItems="center" gap={2}>
                    <Grid item>
                        {is_favourite ? (
                            <BookmarkRounded
                                sx={{
                                    fontSize: 40,
                                    color: "#FFC107",
                                }}
                            />
                        ) : (
                            <BookmarkBorderRounded
                                sx={{
                                    fontSize: 40,
                                    color: "rgba(255,255,255,0.54)",
                                }}
                            />
                        )}
                    </Grid>
                    <Grid item>
                        <Typography variant="h4" fontWeight={600}>
                            {name}
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" gap={2}>
                    <Grid item>
                        <Rating
                            icon={<Star color="primary" />}
                            precision={0.5}
                            value={rating}
                            readOnly
                        />
                    </Grid>
                    <Grid item>{rating.toFixed(2)}</Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="row" gap={1} alignItems="center">
                    <Grid item>
                        <Grid container direction="row" gap={1}>
                            <Typography fontWeight={700} variant="subtitle2">
                                By
                            </Typography>
                            <Typography
                                fontWeight={700}
                                variant="subtitle2"
                                color="secondary"
                            >
                                {author}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">•</Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">{created_at}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RecipeBasicDetailsSection;
