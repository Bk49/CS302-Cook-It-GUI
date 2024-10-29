import * as z from "zod";

const editProfileSchema = z.object({
    first_name: z.string().min(1),
    last_name: z.string().min(1),
    about_me: z.string().min(3),
    email_preferences: z.boolean(),
});

export type EditProfileI = z.infer<typeof editProfileSchema>;

export default editProfileSchema;
