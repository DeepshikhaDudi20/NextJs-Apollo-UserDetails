import { AppProps } from 'next/app';
import { GlobalProvider } from '../context/GlobalContext';
import ApolloProviderComponent from '../graphql/apollo-client';

//Component wrapped with ApolloProviderComponent, GlobalProvider to access Apollo client & global state 
const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ApolloProviderComponent>
            <GlobalProvider>
                <Component {...pageProps} />
            </GlobalProvider>
        </ApolloProviderComponent>
    );
};

export default App;
