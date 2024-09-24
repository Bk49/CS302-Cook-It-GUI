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

interface AppBarProps {}

const AppBar: React.FC<AppBarProps> = ({}) => {
    const navigate = useNavigate();
    // const { isAuthenticated, loginWithPopup, user, getAccessTokenSilently, getIdTokenClaims } = useAuth0();
    const { isAuthenticated, loginWithPopup, user } = useAuth0();

    // useEffect(() => {
    //     if(isAuthenticated){
    //         getAccessTokenSilently().then((res) => console.log(res) )
    //         getIdTokenClaims().then((res) => console.log(res))
    //     }
    // }, [getAccessTokenSilently])

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
                        <Typography onClick={() => navigate("/recipe")}>
                            Discover
                        </Typography>

                        {isAuthenticated ? (
                            <>
                                <Typography
                                    onClick={() => navigate("/myrecipe")}
                                >
                                    My Recipes
                                </Typography>
                                <Typography
                                    onClick={() =>
                                        navigate("/recipe/favourite")
                                    }
                                >
                                    Favourites
                                </Typography>
                                {user?.picture ? (
                                    <img
                                        width={40}
                                        height={40}
                                        style={{ borderRadius: 100 }}
                                        src={user?.picture}
                                        alt="Profile picture"
                                        onClick={() => navigate("/profile")}
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
