import * as z from "zod";

const editProfileSchema = z.object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    about_me: z.string().min(3),
    email_preferences: z.boolean(),
});

export type EditProfileI = z.infer<typeof editProfileSchema>;

export default editProfileSchema;
