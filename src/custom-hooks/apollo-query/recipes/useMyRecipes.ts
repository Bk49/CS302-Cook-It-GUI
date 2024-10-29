import { useQuery } from "@apollo/client";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { GET_MY_RECIPES } from "../../../constants/GraphQLQueries";
import useProfile from "../profile/useProfile";

const useMyRecipes = () => {
    const { isAuthenticated } = useAuth0();
    const [mutate, { data, loading }] = useProfile();

    useEffect(() => {
        if (isAuthenticated) mutate();
    }, [isAuthenticated]);

    return useQuery(GET_MY_RECIPES, {
        skip: !data || loading,
        variables: { authorId: data?.id },
    });
};

export default useMyRecipes;
