import * as z from "zod";

const editProfileSchema = z.object({
    first_name: z.string().min(3),
    last_name: z.string().min(3),
    about: z.string().min(3),
    email_pref: z.boolean(),
});

export default editProfileSchema;
