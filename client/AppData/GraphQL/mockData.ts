import { getUserDetails } from '../../graphql/queries/getUserDetails';
import { User, UserResponse } from '../../../server/src/schema/types/types';

export const userMockData = [
    {
        request: {
            query: getUserDetails,
            variables: {
                count: 20,
                page: 1
            },
            fetchPolicy: 'cache-and-network',
            skip: true,
        },
        result: {
            data: {
                UsersList: {
                    users: [
                        {
                            name: "Deron Lubowitz",
                            phoneNumber: "945-507-7360",
                            email: "Dickens_Emma@Rowe.tv",
                            address: "228 Hane Crescent Apt. 016",
                            __typename: 'User',
                        },
                        {
                            name: "Briana Hickle",
                            phoneNumber: "800-532-7655",
                            email: "Brenden.Hermann@gmail.com",
                            address: "94 Lavada Freeway",
                            __typename: 'User',
                        },
                        {
                            name: "Alisha Krajcik",
                            phoneNumber: "180-120-3844",
                            email: "Johnson_Theo@yahoo.com",
                            address: "396 Walsh Extensions",
                            __typename: 'User',
                        },
                        {
                            name: "Freeda Fay",
                            phoneNumber: "036-407-9195",
                            email: "Marcellus.Schaefer@yahoo.com",
                            address: "2726 Adelia Squares Apt. 667",
                            __typename: 'User',
                        },
                        {
                            name: "Denis DuBuque",
                            phoneNumber: "440-530-0253",
                            email: "Obie_Gulgowski@yahoo.com",
                            address: "305 Hackett Flats Apt. 035",
                            __typename: 'User',
                        },
                        {
                            name: "Arne Goodwin",
                            phoneNumber: "197-083-2513",
                            email: "Eddie.Hamill@yahoo.com",
                            address: "112 Dorian Path Apt. 275",
                            __typename: 'User',
                        },
                        {
                            name: "Lewis Corwin",
                            phoneNumber: "651-574-2292",
                            email: "Pasquale.Konopelski@Minnie.co.uk",
                            address: "823 Rosetta River Suite 452",
                            __typename: 'User',
                        },
                        {
                            name: "Roscoe Ullrich",
                            phoneNumber: "860-479-6263",
                            email: "Danial_Pagac@McLaughlin.io",
                            address: "52 Romaguera Villages Suite 106",
                            __typename: 'User',
                        },
                        {
                            name: "Jewel Steuber",
                            phoneNumber: "555-714-0524",
                            email: "Gennaro_Bergstrom@Camila.org",
                            address: "0457 Jakubowski Light",
                            __typename: 'User',
                        },
                    ],
                    hasNextPage: true,
                },
            },
        },
    },
    {
        request: {
            query: getUserDetails,
            variables: {
                count: 20,
                page: 2,
            },
        },
        result: {
            data: {
                UsersList: {
                    users: [
                        {
                            name: "Deron Lubowitz",
                            phoneNumber: "945-507-7360",
                            email: "Dickens_Emma@Rowe.tv",
                            address: "228 Hane Crescent Apt. 016",
                            __typename: 'User',
                        },
                        {
                            name: "Briana Hickle",
                            phoneNumber: "800-532-7655",
                            email: "Brenden.Hermann@gmail.com",
                            address: "94 Lavada Freeway",
                            __typename: 'User',
                        },
                        {
                            name: "Alisha Krajcik",
                            phoneNumber: "180-120-3844",
                            email: "Johnson_Theo@yahoo.com",
                            address: "396 Walsh Extensions",
                            __typename: 'User',
                        },
                        {
                            name: "Freeda Fay",
                            phoneNumber: "036-407-9195",
                            email: "Marcellus.Schaefer@yahoo.com",
                            address: "2726 Adelia Squares Apt. 667",
                            __typename: 'User',
                        },
                        {
                            name: "Denis DuBuque",
                            phoneNumber: "440-530-0253",
                            email: "Obie_Gulgowski@yahoo.com",
                            address: "305 Hackett Flats Apt. 035",
                            __typename: 'User',
                        },
                        
                    ],
                    hasNextPage: true,
                },
            },
        },
    },
];

export const mockUsers: User[] = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        phoneNumber: '1234567890',
        address: '123 Main St',
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        phoneNumber: '2345678901',
        address: '456 High St',
    },
];

export const mockResponseWithUsers = {
    userList: mockUsers,
    loading: false,
    error: '',
    hasNextPage: true,
    handleLoadMore: jest.fn(),
    setLoading: jest.fn()
};

export const mockResponseWithError = {
    userList: [],
    loading: false,
    setLoading: jest.fn(),
    error: 'Oops, seems like there is some error. Please try again',
    handleLoadMore: jest.fn(),
    hasNextPage: false
};

export const mockResponseWithLoader = {
    userList: [],
    loading: true,
    setLoading: jest.fn(),
    error: '',
    handleLoadMore: jest.fn(),
    hasNextPage: false
};

export const mockUserList = [
    {
        name: "Alice",
        email: "alice@example.com",
        phone: "555-1234",
        address: "123 Main St",
    },
    {
        name: "Bob",
        email: "bob@example.com",
        phone: "555-5678",
        address: "456 Oak Ave",
    },
];

export const mockUserResponse = {
    data: {
        UsersList: {
            users: mockUserList,
            hasNextPage: false,
        },
    },
};


