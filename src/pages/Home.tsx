import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import HeroSection from "../components/home/HeroSection";
import RecipeListingSection from "../components/recipe/listing/section/RecipeListingSection";

const Home: React.FC = () => {
    const formState = useForm();

    return (
        <FormProvider {...formState}>
            <HeroSection />
            <RecipeListingSection />
        </FormProvider>
    );
};

export default Home;
