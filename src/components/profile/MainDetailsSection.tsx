import { useAuth0 } from "@auth0/auth0-react";
import {
    Avatar,
    Button,
    Grid,
    TextField as MuiTextField,
    Typography,
} from "@mui/material";
import React from "react";
import { useFormContext } from "react-hook-form";
import TextField from "../common/form/TextField";

interface MainDetailsSectionProps {}

const MainDetailsSection: React.FC<MainDetailsSectionProps> = ({}) => {
    const { user } = useAuth0();
    const { handleSubmit } = useFormContext();

    return (
        <Grid container direction="column" gap={4}>
            <Grid item>
                <Typography variant="h4">Main Details</Typography>
            </Grid>
            <Grid item>
                <Grid
                    pl={5}
                    container
                    direction="row"
                    alignItems="center"
                    gap={8}
                >
                    <Grid item>
                        {user?.picture ? (
                            <img
                                src={user?.picture}
                                alt="Profile picture"
                                style={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 150,
                                }}
                            />
                        ) : (
                            <Avatar
                                sx={{
                                    width: 150,
                                    height: 150,
                                    borderRadius: 150,
                                }}
                            />
                        )}
                    </Grid>
                    <Grid item>
                        <Grid container direction="column" gap={4}>
                            <Grid item>
                                <Grid container direction="row" gap={3}>
                                    <TextField
                                        name="first_name"
                                        label="First Name"
                                        variant="outlined"
                                    />
                                    <TextField
                                        name="last_name"
                                        label="Last Name"
                                        variant="outlined"
                                    />
                                    {/* This is on purpose so that email field is not part of the form */}
                                    <MuiTextField
                                        name="email"
                                        label="Email"
                                        variant="outlined"
                                        value={user?.email || ""}
                                        disabled
                                    />
                                </Grid>
                            </Grid>
                            <Grid item>
                                <TextField
                                    multiline
                                    sx={{ width: 484 }}
                                    rows={3}
                                    name="about"
                                    label="About Me"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Button
                    onClick={handleSubmit(({ email_pref, ...data }) => {
                        // TODO: Send Data to backend
                        console.log(data);
                        // graphQL.put("/profile", data)
                    })}
                    variant="contained"
                >
                    Confirm Changes
                </Button>
            </Grid>
        </Grid>
    );
};

export default MainDetailsSection;
