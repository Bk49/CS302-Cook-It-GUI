import { useMutation } from "@apollo/client";
import { enqueueSnackbar } from "notistack";
import {
    DELETE_RECIPE,
    GET_MY_RECIPES,
    GET_RECIPE_DETAILS,
    GET_RECIPES,
} from "../../../constants/GraphQLQueries";

const useDeleteRecipe = () => {
    return useMutation(DELETE_RECIPE, {
        refetchQueries: [GET_MY_RECIPES, GET_RECIPE_DETAILS, GET_RECIPES],
        onCompleted: async (data) => {
            if (data.softDelByRecipeId === null || !data.softDelByRecipeId) {
                enqueueSnackbar(
                    "There is an error deleting the recipe, please try again!",
                    { variant: "error" }
                );
                return;
            }
            enqueueSnackbar("Deletion of recipe is successful!", {
                variant: "success",
            });
        },
    });
};

export default useDeleteRecipe;
