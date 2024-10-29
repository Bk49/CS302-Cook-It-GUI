import { gql } from "@apollo/client";

export const FIND_OR_CREATE_USER = gql`
    mutation FindOrCreateUser {
        findOrCreateUser {
            id: _id
            about_me
            email_preferences
            first_name
            last_name
        }
    }
`;

export const DELETE_RECIPE = gql`
    mutation SoftDelByRecipeId($recipeId: ID!) {
        softDelByRecipeId(recipe_id: $recipeId)
    }
`;

export const GET_MY_RECIPES = gql`
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
`;

export const GET_RECIPE_DETAILS = gql`
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
`;

export const GET_RECIPES = gql`
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
`;
