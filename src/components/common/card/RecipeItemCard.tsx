import {
    Star,
    TimerRounded
} from "@mui/icons-material";
import { Box, Grid, Rating, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface RecipeItemCardProps {
    img: string;
    name: string;
    author: string;
    total_time: number;
    rating: number;
    to: string;
}

const RecipeItemCard: React.FC<RecipeItemCardProps> = ({
    img,
    name,
    author,
    total_time,
    rating,
    to,
}) => {
    const navigate = useNavigate();

    return (
        <Box width="100%" onClick={() => navigate(to)}>
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
