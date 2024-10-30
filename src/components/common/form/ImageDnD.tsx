import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import { FormHelperText, Grid, Paper, Typography } from "@mui/material";
import React from "react";
import Dropzone, { DropzoneProps } from "react-dropzone";
import { Controller, useFormContext } from "react-hook-form";
import PlaceholderImage from "../../../assets/images/avatar-placeholder.png";

interface ImageDnDProps extends DropzoneProps {
    name: string;
}

const ImageDnD: React.FC<ImageDnDProps> = ({ name, ...rest }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { onChange, value }, fieldState: { error } }) => (
                <>
                    <Dropzone
                        {...rest}
                        onDrop={(acceptedFiles) => onChange(acceptedFiles[0])}
                    >
                        {({ getInputProps, getRootProps }) => (
                            <Paper
                                sx={{
                                    width: 320,
                                    height: 240,
                                    borderRadius: "8px",
                                }}
                                elevation={4}
                                {...getRootProps()}
                            >
                                <input type="file" {...getInputProps()} />
                                {value ? (
                                    <img
                                        src={URL.createObjectURL(value)}
                                        style={{
                                            objectFit: "cover",
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "8px",
                                        }}
                                        onError={(e) =>
                                            (e.currentTarget.src = PlaceholderImage)
                                        }                                    />
                                ) : (
                                    <Grid
                                        container
                                        direction="column"
                                        alignItems="center"
                                        justifyContent="center"
                                        gap={1}
                                        height="100%"
                                    >
                                        <Grid item>
                                            <AddAPhotoIcon fontSize="large" />
                                        </Grid>
                                        <Grid item>
                                            <Typography>
                                                Add an image
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                )}
                            </Paper>
                        )}
                    </Dropzone>
                    <FormHelperText error={!!error}>
                        {error?.message}
                    </FormHelperText>
                </>
            )}
        />
    );
};

export default ImageDnD;
