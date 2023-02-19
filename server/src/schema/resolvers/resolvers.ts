import casual from 'casual';
import { loadDataCount, maxDataCount } from '../../util/helper';
import { User, UserResponse, UsersListArgs } from '../types/types';
export default {
    Query: {
        User: () => {
            const data: User = {
                name: casual.full_name,
                email: casual.email,
                phoneNumber: casual.phone,
                address: casual._address1(),
            };
            return data;
        },
        UsersList: (parent: User, args: UsersListArgs): UserResponse => {
            const { count = maxDataCount, page = 1 } = args;

            const users = new Array(count).fill(0).map(() => ({
                name: casual.full_name,
                email: casual.email,
                phoneNumber: casual.phone,
                address: casual._address1(),
            }));

            // fetching records as per loadDataCount
            const hasNextPage =
                count !== maxDataCount && page * loadDataCount < maxDataCount;

            return { users, hasNextPage };
        },
    },
};
