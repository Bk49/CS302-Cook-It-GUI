import { useApolloClient } from "@apollo/client";
import { useMutation } from "@tanstack/react-query";
import { enqueueSnackbar } from "notistack";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { axiosClient } from "../../axios/client";
import {
    GET_MY_RECIPES,
    GET_RECIPE_DETAILS,
    GET_RECIPES,
} from "../../constants/GraphQLQueries";
import { AddRecipeI } from "../../zod-schema/add-recipe";
import { UserProfileContext } from "../context/UserProfile";

const useAddRecipe = () => {
    const navigate = useNavigate();
    const client = useApolloClient();
    const profile = useContext(UserProfileContext);

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

            // Refetch the queries first before ending the processing
            await client.refetchQueries({
                include: [GET_MY_RECIPES, GET_RECIPE_DETAILS, GET_RECIPES],
            });

            return data;
        },
        onSuccess: async () => {
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
