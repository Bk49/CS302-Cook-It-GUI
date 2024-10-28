import { useMutation } from "@tanstack/react-query";
import { axiosClient } from "../../axios/client";
import { AddRecipeI } from "../../zod-schema/add-recipe";
import useProfile from "../apollo-query/profile/useProfile";
import { useEffect } from "react";
import { enqueueSnackbar } from "notistack";

const useAddRecipe = () => {
    const [getProfile, { data: profile }] = useProfile();

    useEffect(() => {
        getProfile();
    }, [getProfile]);

    return useMutation({
        mutationFn: async ({
            steps,
            prep_time,
            cook_time,
            img,
            ...rest
        }: AddRecipeI) => {
            const formData = new FormData();

            // Append main data
            formData.append(
                "recipe",
                JSON.stringify({
                    ...rest,
                    author: profile?.id ?? "",
                    prep_time: prep_time.hrs * 60 + prep_time.mins,
                    cook_time: cook_time.hrs * 60 + cook_time.mins,
                    steps: steps.map(({ description }) => ({
                        description,
                    })),
                })
            );

            // Append image
            if (img) formData.append("main_image", img);

            steps.forEach(({ image }, index) => {
                if (image) formData.append(`step_image_${index}`, image);
            });

            const { data } = await axiosClient.post("api/v1/recipes", formData);

            return data;
        },
        onError: (err) => {
            console.log(err);
            enqueueSnackbar("An Error has occured", { variant: "error" });
        },
    });
};

export default useAddRecipe;
