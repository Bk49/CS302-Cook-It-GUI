import { useMutation } from "@apollo/client";
import { enqueueSnackbar } from "notistack";
import { DELETE_RECIPE } from "../../../constants/GraphQLQueries";

const useDeleteRecipe = () => {
    return useMutation(DELETE_RECIPE, {
        onCompleted: (data) =>
            data.softDelByRecipeId
                ? enqueueSnackbar("Deletion of recipe is successful!", {
                      variant: "success",
                  })
                : enqueueSnackbar(
                      "There is an error deleting the recipe, please try again!",
                      { variant: "error" }
                  ),
    });
};

export default useDeleteRecipe;
