import {
    Box,
    Chip,
    FormControl,
    FormHelperText,
    InputLabel,
    MenuItem,
    Select,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";

interface SelectOption {
    label: string;
    value: string;
}

interface MultiSelectChipFieldProps {
    name: string;
    label: string;
    options: SelectOption[];
    variant?: "filled" | "outlined" | "standard";
}

const MultiSelectChipField: React.FC<MultiSelectChipFieldProps> = ({
    name,
    label,
    options,
    variant,
}) => {
    const { control } = useFormContext();

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({ field, fieldState }) => (
                <Box sx={{ minWidth: 240 }}>
                    <FormControl
                        error={!!fieldState.error}
                        variant={variant}
                        fullWidth
                    >
                        <InputLabel>{label}</InputLabel>
                        <Select
                            {...field}
                            variant={variant}
                            multiple
                            label={label}
                            renderValue={(selected) => (
                                <Box display="flex" flexWrap="wrap" gap={0.5}>
                                    {selected.map((val: string) => (
                                        <Chip key={val} label={val} />
                                    ))}
                                </Box>
                            )}
                        >
                            {options.map(({ label, value }) => (
                                <MenuItem key={value} value={value}>
                                    {label}
                                </MenuItem>
                            ))}
                        </Select>
                        {fieldState.error && fieldState.error.message && (
                            <FormHelperText>
                                {fieldState.error.message}
                            </FormHelperText>
                        )}
                    </FormControl>
                </Box>
            )}
        />
    );
};

export default MultiSelectChipField;
