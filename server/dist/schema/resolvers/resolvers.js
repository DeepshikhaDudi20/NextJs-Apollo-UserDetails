"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const casual_1 = __importDefault(require("casual"));
const helper_1 = require("../../util/helper");
exports.default = {
    Query: {
        User: () => {
            const data = {
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                phoneNumber: casual_1.default.phone,
                address: casual_1.default._address1(),
            };
            return data;
        },
        UsersList: (parent, args) => {
            const { count = helper_1.maxDataCount, page = 1 } = args;
            const users = new Array(count).fill(0).map(() => ({
                name: casual_1.default.full_name,
                email: casual_1.default.email,
                phoneNumber: casual_1.default.phone,
                address: casual_1.default._address1(),
            }));
            // fetching records as per loadDataCount
            const hasNextPage = count !== helper_1.maxDataCount && page * helper_1.loadDataCount < helper_1.maxDataCount;
            return { users, hasNextPage };
        },
    },
};
//# sourceMappingURL=resolvers.js.map