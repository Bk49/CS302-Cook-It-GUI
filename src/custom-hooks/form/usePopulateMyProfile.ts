import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import useProfile from "../apollo-query/profile/useProfile";
import { UseFormReturn } from "react-hook-form";
import { EditProfileI } from "../../zod-schema/edit-profile";

const usePopulateMyProfile = (formState: UseFormReturn<EditProfileI>) => {
    const { isAuthenticated } = useAuth0();
    const [mutate, { data }] = useProfile();
    const { setValue, reset } = formState;

    useEffect(() => {
        if (isAuthenticated) mutate();
    }, [isAuthenticated]);

    useEffect(() => {
        if (data) {
            const { about_me, first_name, last_name, email_preferences } = data;

            reset();
            setValue("about_me", about_me);
            setValue("first_name", first_name);
            setValue("last_name", last_name);
            setValue("email_preferences", email_preferences);
        }
    }, [data]);
};

export default usePopulateMyProfile;
