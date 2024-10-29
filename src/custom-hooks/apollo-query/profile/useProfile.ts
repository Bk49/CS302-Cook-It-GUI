import { MutationTuple, OperationVariables, useMutation } from "@apollo/client";
import { FIND_OR_CREATE_USER } from "../../../constants/GraphQLQueries";
import { ProfileDetails } from "../../../types/profile";

const useProfile = () => {
    const [mutate, { data, ...rest }] = useMutation(FIND_OR_CREATE_USER);

    const user = data?.findOrCreateUser as ProfileDetails;

    return [mutate, { data: user, ...rest }] as MutationTuple<
        ProfileDetails,
        OperationVariables
    >;
};

export default useProfile;
