"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const dotenv_1 = __importDefault(require("dotenv"));
const types_1 = __importDefault(require("./types"));
const resolvers_1 = __importDefault(require("../resolvers/resolvers"));
dotenv_1.default.config();
const port = process.env.PORT || 5000;
const graphqlServer = new apollo_server_express_1.ApolloServer({
    typeDefs: types_1.default,
    resolvers: resolvers_1.default,
    playground: {
        endpoint: `http://localhost:${port}/graphql`,
        settings: {
            'editor.theme': 'light',
        },
    },
});
exports.default = graphqlServer;
//# sourceMappingURL=schema.js.map