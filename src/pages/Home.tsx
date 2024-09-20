import React, { useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import HeroSection from "../components/home/HeroSection";
import WeeklyRecipeSection from "../components/home/WeeklyRecipesSection";

const Home: React.FC = () => {
    const formState = useForm();
    const { watch } = formState;

    useEffect(() => {
        const subscription = watch((value, { name, type }) =>
            console.log(value, name, type)
        );
        return () => subscription.unsubscribe()
    }, [watch]);

    return (
        <FormProvider {...formState}>
            <HeroSection />
            <WeeklyRecipeSection />
        </FormProvider>
    );
};

export default Home;
