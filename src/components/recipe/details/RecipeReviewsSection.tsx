import { useAuth0 } from "@auth0/auth0-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import leaveReviewSchema from "../../../zod-schema/leave-review";
import TextField from "../../common/form/TextField";
import RecipeRating from "../form/input/RecipeRating";
import useAddReview from "../../../custom-hooks/apollo-query/review/useAddReview";
import { UserProfileContext } from "../../../custom-hooks/context/UserProfile";
import { RecipeItemAuthor } from "../../../types/recipe";

interface RecipeReviewsSectionProps {
    id?: string;
    author?: RecipeItemAuthor;
}

const RecipeReviewsSection: React.FC<RecipeReviewsSectionProps> = ({
    id,
    author,
}) => {
    const { user } = useAuth0();
    const formState = useForm({ resolver: zodResolver(leaveReviewSchema) });
    const { handleSubmit } = formState;
    const [addReview] = useAddReview(formState);
    const profile = useContext(UserProfileContext);

    return (
        <FormProvider {...formState}>
            <Typography fontWeight={600} variant="h3" mb={4}>
                Reviews
            </Typography>
            <Box display="flex" alignItems="center" justifyContent="center">
                <Grid
                    maxWidth={800}
                    container
                    direction="row"
                    gap={7}
                    alignItems="center"
                    justifyContent="center"
                >
                    <Grid item>
                        <img
                            style={{ borderRadius: 120 }}
                            src={user?.picture}
                            width={128}
                            height={128}
                        />
                    </Grid>
                    <Grid item xs>
                        <Grid container direction="column" gap={2}>
                            <Grid item>
                                <Grid container direction="row" gap={2}>
                                    <Typography>Your Rating</Typography>
                                    <RecipeRating name="rating" />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    multiline
                                    name="comment"
                                    label="Your Rating"
                                    sx={{ width: "100%" }}
                                />
                            </Grid>
                            <Grid item width="100%">
                                <Button
                                    sx={{ float: "right" }}
                                    onClick={handleSubmit(
                                        (data) =>
                                            addReview({
                                                variables: {
                                                    recipe: id,
                                                    author: author?._id,
                                                    by: profile?.id,
                                                    ...data,
                                                },
                                            }),
                                        (e) => console.log(e)
                                    )}
                                    variant="contained"
                                >
                                    Post Review
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ mt: 4 }} />
        </FormProvider>
    );
};

export default RecipeReviewsSection;
