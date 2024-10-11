import {
    gql,
    MutationTuple,
    OperationVariables,
    useMutation,
} from "@apollo/client";
import { ProfileDetails } from "../../../types/profile";

const useProfile = () => {
    const [mutate, { data, ...rest }] = useMutation(
        gql`
            mutation FindOrCreateUser {
                findOrCreateUser {
                    id: _id
                    about_me
                    email_preferences
                    first_name
                    last_name
                }
            }
        `
    );

    const user = data?.findOrCreateUser as ProfileDetails;

    return [mutate, { data: user, ...rest }] as MutationTuple<
        ProfileDetails,
        OperationVariables
    >;
};

export default useProfile;
