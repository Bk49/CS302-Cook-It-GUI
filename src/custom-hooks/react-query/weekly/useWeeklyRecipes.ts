import { useQuery } from "@tanstack/react-query"
import queryKey from "../../../config/query-key"
import { getRecipesOfTheWeek } from "../../../axios/recipe"

const useWeeklyRecipes = () => {
    return useQuery({
        queryKey: queryKey.weekly.recipe,
        queryFn: getRecipesOfTheWeek
    })
}

export default useWeeklyRecipes