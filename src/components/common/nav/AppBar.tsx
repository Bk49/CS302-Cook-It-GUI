import { useAuth0 } from "@auth0/auth0-react";
import {
    Avatar,
    Box,
    Grid,
    AppBar as MuiAppBar,
    Toolbar,
    Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import AppLogo from "../../../assets/images/logo/Cook It!.png";
import PlaceholderImage from "../../../assets/images/avatar-placeholder.png";

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
    const navigate = useNavigate();
    const { isAuthenticated, loginWithPopup, user } = useAuth0();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <MuiAppBar position="static">
                <Toolbar>
                    <img
                        onClick={() => navigate("/")}
                        style={{ width: 40, height: "auto" }}
                        src={AppLogo}
                    />
                    <Typography
                        onClick={() => navigate("/")}
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, ml: "1rem" }}
                    >
                        CookIt!
                    </Typography>
                    <Grid
                        container
                        justifyContent="end"
                        alignItems="center"
                        gap={3}
                    >
                        {isAuthenticated ? (
                            <>
                                <Box
                                    sx={{
                                        cursor: "pointer",
                                        padding: "10px 15px",
                                        borderRadius: "4px", // Rounded corners
                                        backgroundColor: "transparent", // Default background color
                                        "&:hover": {
                                            backgroundColor: "#d0d0d0",
                                            color: "black", // Change text color on hover
                                            textDecoration: "underline", // Add underline on hover
                                        },
                                    }}
                                    onClick={() => navigate("/myrecipe")}
                                >
                                    <Typography>My Recipes</Typography>
                                </Box>
                                {user?.picture ? (
                                    <img
                                        width={40}
                                        height={40}
                                        referrerPolicy="no-referrer"
                                        style={{ borderRadius: 100 }}
                                        src={user?.picture}
                                        alt="Profile picture"
                                        onClick={() => navigate("/profile")}
                                        onError={(e) =>
                                            (e.currentTarget.src = PlaceholderImage)
                                        }
                                    />
                                ) : (
                                    <Avatar
                                        onClick={() => navigate("/profile")}
                                        sx={{ ml: "1rem" }}
                                    />
                                )}
                            </>
                        ) : (
                            <Avatar
                                onClick={() => loginWithPopup()}
                                sx={{ ml: "1rem" }}
                            />
                        )}
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBar;
