import { useApolloClient, useMutation } from "@apollo/client";
import { enqueueSnackbar } from "notistack";
import {
    DELETE_RECIPE,
    GET_MY_RECIPES,
    GET_RECIPE_DETAILS,
    GET_RECIPES,
} from "../../../constants/GraphQLQueries";

const useDeleteRecipe = () => {
    const client = useApolloClient();

    return useMutation(DELETE_RECIPE, {
        onCompleted: (data) => {
            if (!data.softDelByRecipeId) {
                return enqueueSnackbar(
                    "There is an error deleting the recipe, please try again!",
                    { variant: "error" }
                );
            }

            client.refetchQueries({
                include: [GET_RECIPES, GET_MY_RECIPES, GET_RECIPE_DETAILS],
            });
            enqueueSnackbar("Deletion of recipe is successful!", {
                variant: "success",
            });
        },
    });
};

export default useDeleteRecipe;
