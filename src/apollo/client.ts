import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/`,
});

export const createApolloClient = (
    getAccessTokenSilently: () => Promise<string>
) => {
    const authLink = setContext(async (_, { headers }) => {
        const token = await getAccessTokenSilently();

        return {
            headers: {
                ...headers,
                Authorization: token ? `Bearer ${token}` : "",
            },
        };
    });

    return new ApolloClient({
        cache: new InMemoryCache(),
        link: authLink.concat(httpLink),
    });
};
