import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

const client = new ApolloClient({
    uri: "http://localhost:7777/graphql",
    cache: new InMemoryCache(),
    defaultOptions: defaultOptions,
});

export default client;