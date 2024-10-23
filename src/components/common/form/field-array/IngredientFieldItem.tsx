import CancelIcon from "@mui/icons-material/Cancel";
import { Button, Grid } from "@mui/material";
import React from "react";
import { UseFieldArrayRemove } from "react-hook-form";
import TextField from "../TextField";

interface IngredientFieldItemProps {
    row: number;
    remove: UseFieldArrayRemove;
}

const IngredientFieldItem: React.FC<IngredientFieldItemProps> = ({
    row,
    remove,
}) => {
    return (
        <Grid container direction="row" gap={3} alignItems="center">
            <Grid item>
                <TextField
                    label="Quantity"
                    name={`ingredients.${row}.quantity`}
                />
            </Grid>
            <Grid item>
                <TextField
                    label="Ingredient"
                    name={`ingredients.${row}.ingredient_name`}
                />
            </Grid>
            <Grid item>
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => remove(row)}
                    startIcon={<CancelIcon />}
                >
                    Remove
                </Button>
            </Grid>
        </Grid>
    );
};

export default IngredientFieldItem;
