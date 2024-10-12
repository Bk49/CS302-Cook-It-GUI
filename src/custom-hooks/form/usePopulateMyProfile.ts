import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import useProfile from "../apollo-query/profile/useProfile";
import { UseFormReturn } from "react-hook-form";
import { EditProfileI } from "../../zod-schema/edit-profile";

const usePopulateMyProfile = (formState: UseFormReturn<EditProfileI>) => {
    const { isAuthenticated } = useAuth0();
    const [mutate, { data }] = useProfile();
    const { reset } = formState;

    useEffect(() => {
        if (isAuthenticated) mutate();
    }, [isAuthenticated]);

    useEffect(() => {
        if (data) {
            reset(data);
        }
    }, [data]);
};

export default usePopulateMyProfile;
