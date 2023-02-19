import { ApolloServer, Config } from 'apollo-server-express';
import { ExpressContext } from 'apollo-server-express/src/ApolloServer';
import dotenv from 'dotenv';
import typeDefs from '../schema/schema';
import resolvers from '../schema/resolvers/resolvers';

dotenv.config();

const port: number | string = 5000 || process.env.PORT;

const graphqlServer: ApolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: {
        endpoint: `http://localhost:${port}/graphql`,
        settings: {
            'editor.theme': 'light',
        },
    },
} as Config<ExpressContext>);

export default graphqlServer