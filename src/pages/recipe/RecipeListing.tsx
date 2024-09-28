import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import HeroSection from '../../components/home/HeroSection';
import RecipeFilterSection from '../../components/recipe/listing/section/RecipeFilterSection';
import RecipeListingSection from '../../components/recipe/listing/section/RecipeListingSection';

interface RecipeListingProps {}

const RecipeListing: React.FC<RecipeListingProps> = ({  }) => {
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
            <HeroSection hideIntro/>
            <Grid m={4} container direction="row">
                <Grid xs={12} sm={6} md={4} lg={3}>
                    <RecipeFilterSection />
                </Grid>
                <Grid item xs>
                    <RecipeListingSection />
                </Grid>
            </Grid>
        </FormProvider>
    );
};

export default RecipeListing;
