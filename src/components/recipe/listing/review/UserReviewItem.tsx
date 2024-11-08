import React from "react";
import { ReviewItem } from "../../../../types/recipe";
import { Grid, Rating, Typography } from "@mui/material";
import { Star } from "@mui/icons-material";
import { grey } from "@mui/material/colors";
import dayjs from "dayjs";

interface UserReviewItemProps extends ReviewItem {}

const UserReviewItem: React.FC<UserReviewItemProps> = ({
    by,
    rating,
    created_at,
    comment,
}) => {
    return (
        <Grid container direction="row" gap={3}>
            <Grid item xs>
                <Grid item>
                    <Typography
                        fontWeight={600}
                    >{`${by?.first_name} ${by?.last_name}`}</Typography>
                </Grid>
                <Grid item>
                    <Grid container direction="row" gap={2} alignItems="center">
                        <Grid item>
                            <Rating
                                icon={<Star color="primary" />}
                                precision={1}
                                value={rating}
                                readOnly
                            />
                        </Grid>
                        <Grid item>
                            <Typography variant="caption" color={grey[500]}>
                                {dayjs(created_at).format("DD/MM/YYYY") ?? ""}
                            </Typography>
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
