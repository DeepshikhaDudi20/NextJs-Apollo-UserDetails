"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const graphqlServer_1 = __importDefault(require("./graphql/graphqlServer"));
dotenv_1.default.config();
const app = (0, express_1.default)();
dotenv_1.default.config();
// const port: number | string = process.env.PORT || 5000;
// const graphqlServer: ApolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//     playground: {
//         endpoint: `http://localhost:${port}/graphql`,
//         settings: {
//             'editor.theme': 'light',
//         },
//     },
// } as Config<ExpressContext>);
// Enable Cross-Origin Resource Sharing (CORS)
app.use((0, cors_1.default)());
// helmet middleware to set up security headers to improve security
// app.use(helmet());
function startServer() {
    return __awaiter(this, void 0, void 0, function* () {
        yield graphqlServer_1.default.start();
        graphqlServer_1.default.applyMiddleware({
            app,
        });
    });
}
startServer();
const port = 5000 || process.env.PORT;
// error-handling middleware to catch and handle errors
app.use((err, req, res, next) => {
    // tslint:disable-next-line:no-console
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
});
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`Server running on http://localhost:${port}/graphql`);
});
exports.default = app;
// project/
// ├─ src/
// │  ├─ schema/
// │  │  ├─ resolvers/
// │  │  │  └─ resolvers.ts
// │  │  ├─ types/
// │  │  │  └─ types.ts
// │  │  └─ schema.ts
// │  ├─ server/
// │  │  └─ app.ts
// │  └─ util/
// │     └─ helper.ts
// ├─ node_modules/
// ├─ package.json
// └─ tsconfig.json
//# sourceMappingURL=server.js.map