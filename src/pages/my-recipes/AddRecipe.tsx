import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import AddIcon from "@mui/icons-material/Add";
import RecipeBasicDetailsSection from "../../components/recipe/form/section/RecipeBasicDetailsSection";
import TimeSection from "../../components/recipe/form/section/TimeSection";
import IngredientsSection from "../../components/recipe/form/section/IngredientsSection";
import PreparationStepSection from "../../components/recipe/form/section/PreparationStepSection";
import { zodResolver } from "@hookform/resolvers/zod";
import addRecipeSchema from "../../zod-schema/add-recipe";

interface AddRecipeProps {}

const AddRecipe: React.FC<AddRecipeProps> = ({}) => {
    const formState = useForm({ resolver: zodResolver(addRecipeSchema) });
    const { handleSubmit } = formState;

    return (
        <FormProvider {...formState}>
            <Container maxWidth="xl" sx={{ my: 4 }}>
                <Typography variant="h3">Add New Recipe</Typography>
                <Divider sx={{ my: 2 }} />
                <RecipeBasicDetailsSection />
                <Divider sx={{ my: 2 }} />
                <TimeSection />
                <Divider sx={{ my: 2 }} />
                <IngredientsSection />
                <Divider sx={{ my: 2 }} />
                <PreparationStepSection />
                <Divider sx={{ my: 2 }} />
                <Button
                    variant="contained"
                    sx={{ float: "right" }}
                    onClick={handleSubmit(
                        (data) => console.log(data),
                        (e) => console.log(e)
                    )}
                    endIcon={<AddIcon />}
                >
                    Submit
                </Button>
            </Container>
        </FormProvider>
    );
};

export default AddRecipe;
