import { from, useApolloClient, useMutation } from "@apollo/client";
import { createContext, ReactNode, useEffect } from "react";
import { FIND_OR_CREATE_USER } from "../../constants/GraphQLQueries";
import { ProfileDetails } from "../../types/profile";
import { useAuth0 } from "@auth0/auth0-react";
import { InternalAxiosRequestConfig } from "axios";
import { createAuthLink, httpLink } from "../../apollo/client";
import { axiosClient } from "../../axios/client";

export const UserProfileContext = createContext<ProfileDetails | undefined>(
    undefined
);

const UserProfileProvider: React.FC<{ children: ReactNode }> = ({
    children,
}) => {
    const { isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [mutate, { data: profile }] = useMutation(FIND_OR_CREATE_USER);
    const client = useApolloClient();

    useEffect(() => {
        if (isAuthenticated) {
            getAccessTokenSilently().then((token) => {
                client.setLink(from([createAuthLink(token), httpLink]));
                axiosClient.interceptors.request.use(
                    (config: InternalAxiosRequestConfig<any>) => {
                        config.headers.Authorization = `Bearer ${token}`;
                        return config;
                    }
                );
                mutate();
            });
        } else {
            client.setLink(from([createAuthLink(), httpLink]));
        }
    }, [isAuthenticated, getAccessTokenSilently]);

    return (
        <UserProfileContext.Provider
            value={profile?.findOrCreateUser as ProfileDetails | undefined}
        >
            {children}
        </UserProfileContext.Provider>
    );
};

export default UserProfileProvider;
