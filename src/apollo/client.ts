import {
    ApolloClient,
    createHttpLink,
    from,
    InMemoryCache,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const httpLink = createHttpLink({
    uri: import.meta.env.DEV
        ? `${import.meta.env.VITE_DEVELOPMENT_SERVER}/`
        : `${import.meta.env.VITE_PRODUCTION_SERVER}/`,
});

export const createAuthLink = (token?: string) =>
    setContext((_, { headers }) => ({
        headers: {
            ...headers,
            Authorization: token ? `Bearer ${token}` : "",
        },
    }));

const authLink = createAuthLink("");

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: from([authLink, httpLink]),
    // defaultOptions: {
    //     watchQuery: {
    //         fetchPolicy: "no-cache",
    //         errorPolicy: "ignore",
    //     },
    //     query: {
    //         fetchPolicy: "no-cache",
    //         errorPolicy: "all",
    //     },
    // },
});

export default client;
