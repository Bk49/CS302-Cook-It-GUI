import {
    InputAdornment,
    TextField,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBarProps {
    loc: "home" | "listing";
}

const SearchBar: React.FC<SearchBarProps> = ({ loc }) => {
    const { control } = useFormContext();
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Controller
            control={control}
            name="search"
            render={({ field, fieldState }) => (
                <TextField
                    sx={{
                        width: isSmall ? "320px" : "640px",
                        borderRadius: 100,
                        bgcolor: "white",
                    }}
                    {...field}
                    error={Boolean(fieldState.error)}
                    helperText={fieldState.error?.message}
                    variant="filled"
                    label={
                        loc === "home"
                            ? "What’s cooking today?"
                            : "Search for a recipe"
                    }
                    type="text"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                        disableUnderline: true,
                    }}
                />
            )}
        />
    );
};

export default SearchBar;
