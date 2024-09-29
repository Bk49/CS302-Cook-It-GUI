import React from "react";
import { ReviewItem } from "../../../../types/recipe";
import { Grid, Rating, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { grey } from "@mui/material/colors";

interface UserReviewItemProps extends ReviewItem {}

const UserReviewItem: React.FC<UserReviewItemProps> = ({
    name,
    image,
    rating,
    created_at,
    comment,
}) => {
    return (
        <Grid container direction="row" gap={3}>
            <Grid item>
                <img
                    width={72}
                    height={72}
                    src={image}
                    referrerPolicy="no-referrer"
                    style={{ borderRadius: 100, objectFit:"cover" }}
                />
            </Grid>
            <Grid item xs>
                <Grid item>
                    <Typography fontWeight={600}>{name}</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" gap={2} alignItems="center">
                        <Grid item>
                            <Rating
                                icon={<Star color="primary" />}
                                precision={0.5}
                                value={rating}
                                readOnly
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color={grey[500]}>{created_at}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography>{comment}</Typography>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default UserReviewItem;
