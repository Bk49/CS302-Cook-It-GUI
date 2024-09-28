import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cuisineOptions } from "../../../../constants/Dropdown";

interface CheckBoxProps {}

const CuisineTypeCheckboxes: React.FC<CheckBoxProps> = ({}) => {
    const { control } = useFormContext();

    return (
        <FormGroup>
            {cuisineOptions.map(({ label, value }) => (
                <FormControlLabel
                    key={value}
                    label={label}
                    control={
                        <Controller
                            defaultValue={false}
                            name={`cuisine_type.${value}`}
                            control={control}
                            key={label}
                            render={({ field }) => (
                                <Checkbox
                                    checked={field.value}
                                    onChange={(_, checked) =>
                                        field.onChange(checked)
                                    }
                                />
                            )}
                        />
                    }
                />
            ))}
        </FormGroup>
    );
};

export default CuisineTypeCheckboxes;
