import { gql, useQuery } from "@apollo/client";
import useProfile from "../profile/useProfile";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const useMyRecipes = () => {
    const { isAuthenticated } = useAuth0();
    const [mutate, { data, loading }] = useProfile();

    useEffect(() => {
        if (isAuthenticated) mutate();
    }, [isAuthenticated]);

    return useQuery(
        gql`
            query GetRecipesByAuthor($authorId: ID!) {
                getRecipesByAuthor(author_id: $authorId) {
                    id: _id
                    author {
                        first_name
                        last_name
                    }
                    cook_time
                    description
                    img: image
                    name
                    prep_time
                    rating
                }
            }
        `,
        { skip: !data || loading, variables: { authorId: data?.id } }
    );
};

export default useMyRecipes;
