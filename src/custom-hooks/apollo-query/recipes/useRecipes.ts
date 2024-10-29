import { useQuery } from "@apollo/client";
import { GET_RECIPES } from "../../../constants/GraphQLQueries";

const useRecipes = () => {
    return useQuery(GET_RECIPES, { errorPolicy: "all" });
};

export default useRecipes;
