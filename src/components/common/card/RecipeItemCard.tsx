import {
    BookmarkBorderRounded,
    BookmarkRounded,
    Star,
    TimerRounded,
} from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface RecipeItemCardProps {
    id: string
    img: string;
    name: string;
    author: string;
    total_time: number;
    rating: number;
    is_favourite: boolean;
}

const RecipeItemCard: React.FC<RecipeItemCardProps> = ({
    id,
    img,
    name,
    author,
    total_time,
    rating,
    is_favourite,
}) => {
    const navigate = useNavigate()

    return (
        <Box width="100%" onClick={() => navigate(`/recipe/${id}`)}>
            <Grid width="100%" container gap={1.5}>
                <Grid item>
                    <Box width={320} height={240} position="relative">
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: 8,
                                objectFit: "cover",
                                position: "absolute",
                            }}
                            src={img}
                        />
                        <Box
                            sx={{
                                borderRadius: 1,
                                background:
                                    "linear-gradient(180deg, rgba(29, 29, 29, 0.60) 0%, rgba(29, 29, 29, 0.00) 25%)",
                            }}
                            width="100%"
                            height="100%"
                            position="absolute"
                            zIndex={2}
                        >
                            {is_favourite ? (
                                <BookmarkRounded
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        color: "#FFC107",
                                    }}
                                />
                            ) : (
                                <BookmarkBorderRounded
                                    sx={{
                                        position: "absolute",
                                        top: 8,
                                        right: 8,
                                        color: "rgba(255,255,255,0.54)",
                                    }}
                                />
                            )}
                        </Box>
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
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default RecipeItemCard;
