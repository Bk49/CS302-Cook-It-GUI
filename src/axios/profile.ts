import { ProfileDetails } from "../types/profile";
import { graphQL } from "./client";

export const getProfile = async () => {
    const { data } = await graphQL.get("/profile");
    return data as ProfileDetails;
};
