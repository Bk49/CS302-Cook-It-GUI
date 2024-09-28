import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    Divider,
    Stack,
    Typography,
} from "@mui/material";
import React from "react";
import MultiSelectChipField from "../../../common/form/MultiSelectChipField";
import CuisineTypeCheckboxes from "../../form/input/CuisineTypeCheckboxes";
import CookingTimeSlider from "../../form/input/CookingTimeSlider";

interface RecipeFilterSectionProps {}

const RecipeFilterSection: React.FC<RecipeFilterSectionProps> = ({}) => {
    return (
        <>
            <Typography
                variant="h4"
                mb={4}
                textTransform="capitalize"
                fontWeight={600}
            >
                Filter By
            </Typography>
            <Accordion
                disableGutters
                sx={{ boxShadow: "none" }}
                defaultExpanded
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>Cuisine Type</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <CuisineTypeCheckboxes />
                </AccordionDetails>
            </Accordion>
            <Divider sx={{ mr: 2 }} />
            <Accordion
                disableGutters
                sx={{ boxShadow: "none" }}
                defaultExpanded
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>Ingredients</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <MultiSelectChipField
                        name="ingredients"
                        label="Select Ingredients"
                        options={[
                            { label: "Onion", value: "Onion" },
                            { label: "Garlic", value: "Garlic" },
                        ]}
                    />
                </AccordionDetails>
            </Accordion>
            <Divider sx={{ mr: 2 }} />
            <Accordion
                disableGutters
                sx={{ boxShadow: "none" }}
                defaultExpanded
            >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography fontWeight={600}>
                        Cooking Time (mins)
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Box sx={{ width: 240 }}>
                        <Stack
                            spacing={2}
                            direction="row"
                            sx={{ alignItems: "center", mb: 1 }}
                        >
                            <Typography>{"<5"}</Typography>
                            <CookingTimeSlider />
                            <Typography>{">120"}</Typography>
                        </Stack>
                    </Box>
                </AccordionDetails>
            </Accordion>
        </>
    );
};

export default RecipeFilterSection;
