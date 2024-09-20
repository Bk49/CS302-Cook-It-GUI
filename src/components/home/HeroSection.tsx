import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import HeroBannerBg from "../../assets/images/hero_banner.jpg";
import SearchBar from "../common/form/SearchBar";

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = ({}) => {
    const fill = { height: "100%", width: "100%" };

    return (
        <Box
            sx={{
                height: 389,
                width: "100%",
                position: "relative",
            }}
        >
            <img
                src={HeroBannerBg}
                style={{
                    ...fill,
                    position: "absolute",
                    objectFit: "cover",
                    zIndex: -1,
                }}
            />
            <Box
                sx={{
                    ...fill,
                    position: "absolute",
                    background:
                        "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%)",
                }}
            >
                <Grid
                    height="100%"
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    container
                    gap={9}
                >
                    <Grid item>
                        <Typography textAlign="center" color="white" variant="h3">
                            From your kitchen to mine
                        </Typography>
                        <Typography textAlign="center" color="white" variant="subtitle1">
                            Cook It! • Where Cuisines Meet
                        </Typography>
                    </Grid>
                    <Grid item>
                        <SearchBar loc="home"/>
                    </Grid>
                    
                </Grid>
            </Box>
        </Box>
    );
};

export default HeroSection;
