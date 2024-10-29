import { useQuery } from "@apollo/client";
import { useContext } from "react";
import { GET_MY_RECIPES } from "../../../constants/GraphQLQueries";
import { UserProfileContext } from "../../context/UserProfile";

const useMyRecipes = () => {
    const profile = useContext(UserProfileContext);

    return useQuery(GET_MY_RECIPES, {
        skip: !profile,
        variables: { authorId: profile?.id },
    });
};

export default useMyRecipes;
