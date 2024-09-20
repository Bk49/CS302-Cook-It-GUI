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
                        <Typography onClick={() => navigate("/myrecipe")}>
                            My Recipes
                        </Typography>
                        <Typography
                            onClick={() => navigate("/recipe/favourite")}
                        >
                            Favourites
                        </Typography>
                        <Avatar
                            onClick={() => navigate("/profile")}
                            sx={{ ml: "1rem" }}
                        />
                    </Grid>
                </Toolbar>
            </MuiAppBar>
        </Box>
    );
};

export default AppBar;
