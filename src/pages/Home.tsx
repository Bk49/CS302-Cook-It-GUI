import { Button, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import HeroSection from "../components/home/HeroSection";
import { FormProvider, useForm } from "react-hook-form";

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
            <Typography variant="h1">Heading 1</Typography>
            <Typography variant="h2">Heading 2</Typography>
            <Typography variant="h3">Heading 3</Typography>
            <Typography variant="h4">Heading 4</Typography>
            <Typography variant="h5">Heading 5</Typography>
            <Typography variant="h6">Heading 6</Typography>
            <Typography variant="body1">Body 1</Typography>
            <Typography variant="body2">Body 2</Typography>
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            <TextField label="Label" value={"Value"} />
            <Button variant="contained">Submit</Button>
        </FormProvider>
    );
};

export default Home;
