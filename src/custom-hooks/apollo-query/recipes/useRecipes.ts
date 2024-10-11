import { useQuery, gql } from "@apollo/client";

const useRecipes = () => {
    return useQuery(
        gql`
            query Recipes {
                recipes {
                    id: _id
                    name
                    img: image
                    author {
                        first_name
                        last_name
                    }
                    prep_time
                    cook_time
                }
            }
        `,
        { errorPolicy: "all" }
    );
};

export default useRecipes;
