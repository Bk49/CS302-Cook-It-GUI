export interface RecipeItem {
    id: string;
    img: string;
    name: string;
    author: string;
    total_time: number;
    rating: number;
    is_favourite: boolean;
}

export interface RecipeDetails {
    id: string;
    name: string;
    img?: string;
    author: string;
    prep_time: number;
    cook_time: number;
    rating: number;
    is_favourite: boolean;
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
    name: string;
    image: string;
    rating: number;
    created_at: string;
    comment: string;
}
