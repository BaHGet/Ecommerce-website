import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:7777/graphql",
    cache: new InMemoryCache()
});

export default client;