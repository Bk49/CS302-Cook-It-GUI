import * as z from "zod";
import { cuisineOptions } from "../constants/Dropdown";

const time_z = {
    hrs: z.coerce.number().min(0).default(0),
    mins: z.coerce.number().min(0).default(0),
};

const addRecipeSchema = z.object({
    name: z.string().min(3),
    portion_size: z.coerce.number().default(1),
    cuisine_type: z
        .enum(["", ...cuisineOptions.map(({ value }) => value)])
        .default("")
        .refine((val) => val !== "", "Cuisine Type cannot be empty"),
    img: z
        .instanceof(File)
        .refine(
            (file) => ["image/jpg", "image/jpeg"].includes(file?.type),
            "Only .jpg and .jpeg formats are supported."
        ),
    description: z.string().optional(),
    prep_time: z.object(time_z).required(),
    cook_time: z.object(time_z).required(),
    ingredients: z.array(
        z.object({
            ingredient_name: z.string().min(1),
            quantity: z.string().min(1),
        })
    ),
    steps: z.array(
        z.object({
            image: z.instanceof(File).optional(),
            description: z.string().min(3),
        })
    ),
});

export type AddRecipeI = z.infer<typeof addRecipeSchema>;

export default addRecipeSchema;
