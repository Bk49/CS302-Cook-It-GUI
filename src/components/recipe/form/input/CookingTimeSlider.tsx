import { Slider } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface CookingTimeSliderProps {}

const CookingTimeSlider: React.FC<CookingTimeSliderProps> = ({}) => {
    const { control } = useFormContext();

    return (
        <Controller
            name="cooking_time"
            control={control}
            defaultValue={120}
            render={({ field }) => (
                <Slider
                    {...field}
                    onChange={(_, val) => field.onChange(val)}
                    valueLabelDisplay="auto"
                    max={120}
                    step={5}
                    min={5}
                />
            )}
        />
    );
};

export default CookingTimeSlider;
