import { zodResolver } from "@hookform/resolvers/zod";
import AddIcon from "@mui/icons-material/Add";
import { Button, Container, Divider, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import IngredientsSection from "../../components/recipe/form/section/IngredientsSection";
import PreparationStepSection from "../../components/recipe/form/section/PreparationStepSection";
import RecipeBasicDetailsSection from "../../components/recipe/form/section/RecipeBasicDetailsSection";
import TimeSection from "../../components/recipe/form/section/TimeSection";
import useAddRecipe from "../../custom-hooks/react-query/useAddRecipe";
import addRecipeSchema, { AddRecipeI } from "../../zod-schema/add-recipe";

interface AddRecipeProps {}

const AddRecipe: React.FC<AddRecipeProps> = ({}) => {
    const formState = useForm<AddRecipeI>({
        resolver: zodResolver(addRecipeSchema),
    });
    const { handleSubmit } = formState;
    const { mutate } = useAddRecipe();

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
                        (data) => mutate(data),
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
