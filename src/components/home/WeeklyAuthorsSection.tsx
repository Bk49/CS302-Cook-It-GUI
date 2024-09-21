import React from "react";
import useWeeklyAuthors from "../../custom-hooks/react-query/weekly/useWeeklyAuthors";
import { Container, Grid, Typography } from "@mui/material";
import AuthorItemCard from "./AuthorItemCard";

interface WeeklyAuthorsSectionProps {}

const WeeklyAuthorsSection: React.FC<WeeklyAuthorsSectionProps> = ({}) => {
    const { data: authors } = useWeeklyAuthors();
    return (
        <Container maxWidth="xl" sx={{ my: 4 }}>
            <Grid container gap={3} direction="column">
                <Grid item>
                    <Typography variant="h4">Weekly Notable Authors</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body2">
                        Hall of fame of recipe authors
                    </Typography>
                </Grid>
                <Grid item>
                    <Grid container spacing={4} justifyContent="center">
                        {authors &&
                            authors.map((author) => (
                                <Grid
                                    xl={3}
                                    md={4}
                                    sm={6}
                                    xs={12}
                                    item
                                    key={author.id}
                                >
                                    <AuthorItemCard {...author} />
                                </Grid>
                            ))}
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default WeeklyAuthorsSection;
