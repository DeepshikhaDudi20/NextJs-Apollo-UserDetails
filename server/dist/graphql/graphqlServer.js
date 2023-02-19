"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const dotenv_1 = __importDefault(require("dotenv"));
const schema_1 = __importDefault(require("../schema/schema"));
const resolvers_1 = __importDefault(require("../schema/resolvers/resolvers"));
dotenv_1.default.config();
const port = 5000 || process.env.PORT;
const graphqlServer = new apollo_server_express_1.ApolloServer({
    typeDefs: schema_1.default,
    resolvers: resolvers_1.default,
    playground: {
        endpoint: `http://localhost:${port}/graphql`,
        settings: {
            'editor.theme': 'light',
        },
    },
});
exports.default = graphqlServer;
//# sourceMappingURL=graphqlServer.js.map