import { gql, useMutation } from "@apollo/client";
import { enqueueSnackbar } from "notistack";

const useDeleteRecipe = () => {
    return useMutation(
        gql`
            mutation SoftDelByRecipeId($recipeId: ID!) {
                softDelByRecipeId(recipe_id: $recipeId)
            }
        `,
        {
            onCompleted: (data) =>
                data.softDelByRecipeId
                    ? enqueueSnackbar("Deletion of recipe is successful!", {
                          variant: "success",
                      })
                    : enqueueSnackbar(
                          "There is an error deleting the recipe, please try again!",
                          { variant: "error" }
                      ),
        }
    );
};

export default useDeleteRecipe;
