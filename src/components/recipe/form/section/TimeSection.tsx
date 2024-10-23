import { Grid, Typography } from "@mui/material";
import React from "react";
import TextField from "../../../common/form/TextField";

interface TimeSectionProps {}

const TimeSection: React.FC<TimeSectionProps> = ({}) => {
    return (
        <Grid container direction="column" gap={4} my={4}>
            <Grid item>
                <Grid container direction="row" gap={3} alignItems="center">
                    <Grid item>
                        <Typography>Preparation Time</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="hours"
                            type="number"
                            name="prep_time.hrs"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="minutes"
                            type="number"
                            name="prep_time.mins"
                        />
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction="row" gap={3} alignItems="center">
                    <Grid item>
                        <Typography>Cooking Time</Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            label="hours"
                            type="number"
                            name="cook_time.hrs"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            label="minutes"
                            type="number"
                            name="cook_time.mins"
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TimeSection;
