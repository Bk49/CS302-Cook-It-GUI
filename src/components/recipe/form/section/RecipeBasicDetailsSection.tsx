import { Grid } from "@mui/material";
import React from "react";
import ImageDnD from "../../../common/form/ImageDnD";
import TextField from "../../../common/form/TextField";
import SingleSelectField from "../../../common/form/SingleSelectField";
import { cuisineOptions } from "../../../../constants/Dropdown";

interface RecipeBasicDetailsSectionProps {
    // : string;
}

const RecipeBasicDetailsSection: React.FC<
    RecipeBasicDetailsSectionProps
> = ({}) => {
    return (
        <Grid container direction="row" gap={6} my={4}>
            <Grid item>
                <ImageDnD name="img" />
            </Grid>

            <Grid item>
                <Grid container direction="column" gap={4}>
                    <Grid item>
                        <Grid container gap={2}>
                            <Grid item>
                                <TextField label="Recipe Name" name="name" />
                            </Grid>
                            <Grid item>
                                <TextField
                                    label="Portion Size"
                                    name="portion_size"
                                    type="number"
                                />
                            </Grid>
                            <Grid item>
                                <SingleSelectField
                                    name="cuisine_type"
                                    label="Cuisine Type"
                                    options={cuisineOptions}
                                    emptySelectionStr="Select Cuisine Type"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item width="100%">
                        <TextField
                            label="Description"
                            name="description"
                            sx={{
                                width: "100%",
                            }}
                            multiline
                            rows={4}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default RecipeBasicDetailsSection;
