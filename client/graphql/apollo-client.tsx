import { ApolloClient, ApolloProvider, from, HttpLink, InMemoryCache } from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import React, { PropsWithChildren } from 'react';
import { uri } from '../AppData/GraphQL/constant';

// error handling : API
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
            alert(`GraphQL error message ${message}`);
        });
    }
})

const link = from([
    errorLink,
    new HttpLink({ uri: uri })
])

// Creating Apollo Provider Component
const ApolloProviderComponent: React.FC<PropsWithChildren<{}>> = ({ children }) => {
    const client = new ApolloClient({
        link,
        cache: new InMemoryCache()
    });
    return (<ApolloProvider client={client}>{children}</ApolloProvider>);
}

export default ApolloProviderComponent;

