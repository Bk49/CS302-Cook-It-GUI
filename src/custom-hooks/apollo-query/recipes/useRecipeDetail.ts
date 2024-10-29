import { useQuery } from "@apollo/client";
import { GET_RECIPE_DETAILS } from "../../../constants/GraphQLQueries";
import { RecipeDetails } from "../../../types/recipe";

const useRecipeDetails = (id?: string) => {
    const { data, ...rest } = useQuery(GET_RECIPE_DETAILS, {
        skip: !id,
        variables: { id },
        errorPolicy: "all",
    });
    return { data: (data?.recipe as RecipeDetails) ?? undefined, ...rest };
};

export default useRecipeDetails;
