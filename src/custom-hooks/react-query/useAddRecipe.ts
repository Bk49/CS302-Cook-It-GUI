import { useApolloClient } from "@apollo/client";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../axios/client";
import {
    GET_MY_RECIPES,
    GET_RECIPE_DETAILS,
    GET_RECIPES,
} from "../../constants/GraphQLQueries";
import { AddRecipeI } from "../../zod-schema/add-recipe";
import useProfile from "../apollo-query/profile/useProfile";

const useAddRecipe = () => {
    const navigate = useNavigate();
    const client = useApolloClient();
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
        onSuccess: () => {
            client.refetchQueries({
                include: [GET_MY_RECIPES, GET_RECIPE_DETAILS, GET_RECIPES],
            });
            navigate("/myrecipe");
            enqueueSnackbar("Recipe has been successfully created", {
                variant: "success",
            });
        },
        onError: (err) => {
            console.log(err);
            enqueueSnackbar("An Error has occured", { variant: "error" });
        },
    });
};

export default useAddRecipe;
