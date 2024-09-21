import { RecipeItem } from "../types/recipe";
import { graphQL } from "./client";

export const getRecipesOfTheWeek = async () => {
    const { data } = await graphQL.get("/recipe/weekly");
    return data as RecipeItem[];
};
