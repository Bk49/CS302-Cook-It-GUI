import { Star, TimerRounded } from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import DeleteRecipeDialog from "../../recipe/dialog/DeleteRecipeDialog";
import PlaceholderImage from "../../../assets/images/recipe-placeholder.jpg";

interface RecipeItemCardProps {
    img: string;
    name: string;
    author: string;
    total_time: number;
    rating: number;
    to: string;
    isMyRecipe?: boolean;
    id: string;
}

const RecipeItemCard: React.FC<RecipeItemCardProps> = ({
    img,
    name,
    author,
    total_time,
    rating,
    to,
    isMyRecipe,
    id,
}) => {
    const navigate = useNavigate();

    return (
        <Box width="100%">
            <Grid width="100%" container gap={1.5}>
                <Grid item>
                    <Box
                        onClick={() => navigate(to)}
                        width={320}
                        height={240}
                        position="relative"
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 8,
                                objectFit: "cover",
                                position: "absolute",
                            }}
                            src={img}
                            onError={(e) =>
                                (e.currentTarget.src = PlaceholderImage)
                            }
                        />
                    </Box>
                </Grid>
                <Grid item width="100%">
                    <Grid container direction="column">
                        <Typography fontWeight={600}>{name}</Typography>
                        <Typography variant="body2">{author}</Typography>
                        <Grid item>
                            <Grid
                                container
                                alignItems="center"
                                direction="row"
                                gap={1}
                            >
                                <TimerRounded />
                                <Typography variant="overline">
                                    {total_time} mins
                                </Typography>
                            </Grid>
                        </Grid>
                        <Rating
                            icon={<Star color="primary" />}
                            precision={0.5}
                            value={rating}
                            readOnly
                        />
                        {isMyRecipe && (
                            <Grid container direction="row" mt={2}>
                                <DeleteRecipeDialog {...{ name, id }} />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RecipeItemCard;
