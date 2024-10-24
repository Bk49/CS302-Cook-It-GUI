import { useQuery, gql } from "@apollo/client";
import { RecipeDetails } from "../../../types/recipe";

const useRecipeDetails = (id?: string) => {
    const { data, ...rest } = useQuery(
        gql`
            query Recipe($id: ID!) {
                recipe(_id: $id) {
                    id: _id
                    author {
                        first_name
                        last_name
                    }
                    cook_time
                    created_at
                    cuisine_type
                    description
                    img: image
                    ingredients {
                        ingredient_name
                        quantity
                    }
                    name
                    portion_size
                    prep_time
                    steps {
                        description
                        image
                    }
                    reviews {
                        id: _id
                        comment
                        rating
                        created_at
                        author {
                            email
                        }
                        by {
                            first_name
                            last_name
                        }
                    }
                    rating
                }
            }
        `,
        { skip: !id, variables: { id } }
    );
    return { data: (data?.recipe as RecipeDetails) ?? undefined, ...rest };
};

export default useRecipeDetails;
