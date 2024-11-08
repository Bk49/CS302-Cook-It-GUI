import { Rating } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface RecipeRatingProps {
    name: string;
}

const RecipeRating: React.FC<RecipeRatingProps> = ({ name }) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={0.0}
            render={({ field }) => (
                <Rating
                    precision={1}
                    {...field}
                    onChange={(_, newVal) => field.onChange(newVal)}
                />
            )}
        />
    );
};

export default RecipeRating;
