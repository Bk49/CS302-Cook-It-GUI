import { useContext, useEffect } from "react";
import { UseFormReturn } from "react-hook-form";
import { EditProfileI } from "../../zod-schema/edit-profile";
import { UserProfileContext } from "../context/UserProfile";

const usePopulateMyProfile = (formState: UseFormReturn<EditProfileI>) => {
    const profile = useContext(UserProfileContext);
    const { reset } = formState;

    useEffect(() => {
        if (profile) {
            reset(profile);
        }
    }, [profile]);
};

export default usePopulateMyProfile;
