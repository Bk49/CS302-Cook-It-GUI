export interface RecipeItem {
    id: string;
    img: string;
    name: string;
    author: RecipeItemAuthor;
    prep_time: number;
    cook_time: number;
    rating: number;
}

export interface RecipeItemAuthor {
    first_name: string;
    last_name: string;
    _id: string;
}

export interface RecipeDetails {
    id: string;
    name: string;
    img?: string;
    author: RecipeItemAuthor;
    prep_time: number;
    cook_time: number;
    rating: number;
    created_at: string;
    description: string;
    cuisine_type: string;
    ingredients: IngredientItem[];
    portion_size: number;
    steps: PreparationStepItem[];
    reviews: ReviewItem[];
}

export interface IngredientItem {
    ingredient_name: string;
    quantity: string;
}

export interface PreparationStepItem {
    description: string;
    image?: string;
}

export interface ReviewItem {
    id: string;
    author: { email: string };
    rating: number;
    created_at: string;
    comment: string;
    by: RecipeItemAuthor;
}
