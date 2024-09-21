import { useQuery } from "@tanstack/react-query";
import { getProfile } from "../../../axios/profile";
import queryKey from "../../../config/query-key";

const useGetProfile = () => {
    return useQuery({
        queryKey: queryKey.profile,
        queryFn: getProfile,
    });
};

export default useGetProfile;
