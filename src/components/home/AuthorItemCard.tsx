import { Grid, Typography } from "@mui/material";
import React from "react";

interface AuthorItemCardProps {
    name: string;
    img: string;
    recipes: number;
    new_reviews: number;
}

const AuthorItemCard: React.FC<AuthorItemCardProps> = ({
    name,
    img,
    recipes,
    new_reviews,
}) => {
    return (
        <Grid width="100%" container direction="column" gap={2} justifyContent="center">
            <Grid item>
                <Grid container justifyContent="center">
                <img
                    style={{
                        borderRadius: 240,
                        width: 240,
                        height: 240,
                    }}
                    src={img}
                />
                </Grid>
                
            </Grid>
            <Grid item>
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <Typography textAlign="center" fontWeight={700}>
                            {name}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography textAlign="center" variant="overline">
                            {recipes} Recipes
                        </Typography>
                    </Grid><Grid item>
                        <Typography textAlign="center" variant="caption">
                            {new_reviews} New Reviews
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default AuthorItemCard;
