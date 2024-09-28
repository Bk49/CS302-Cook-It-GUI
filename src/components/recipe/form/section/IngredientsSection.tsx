import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import IngredientFieldItem from "../../../common/form/field-array/IngredientFieldItem";

interface IngredientsSectionProps {}

const IngredientsSection: React.FC<IngredientsSectionProps> = ({}) => {
    const { control } = useFormContext();
    const { append, remove, fields } = useFieldArray({
        control: control,
        name: "ingredients",
    });

    return (
        <>
            <Typography variant="h4" mb={1}>
                Ingredients
            </Typography>
            <Typography variant="subtitle1" mb={3}>
                List one ingredient per line, specifying quantity with
                measurements (1 cups, 2 tablespoons), and any prep details
                (chopped, sifted) along with the item. Let your creativity flow
                in every detail!
            </Typography>
            <Grid container direction="column" gap={2} mb={2}>
                {fields.map(({ id }, index) => (
                    <Grid key={id} item>
                        <IngredientFieldItem remove={remove} row={index} />
                    </Grid>
                ))}
            </Grid>
            <Button
                onClick={() => append({ name: "", quantity: "" })}
                startIcon={<AddIcon />}
            >
                Add Ingredients
            </Button>
        </>
    );
};

export default IngredientsSection;
