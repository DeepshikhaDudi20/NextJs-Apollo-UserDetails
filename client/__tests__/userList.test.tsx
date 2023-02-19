import '@testing-library/jest-dom/extend-expect'
import { render, act, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { userMockData } from '../AppData/GraphQL/mockData';
import { GlobalProvider } from '../context/GlobalContext'
import UserList from '../pages/user-list';

describe('The user-list page', () => {

    it('should render list of user details with graphQL API data',
        async () => {

            const { getByText } = render(
                <MockedProvider mocks={userMockData}>
                    <GlobalProvider>
                    <UserList />
                    </GlobalProvider>
                </MockedProvider>
            );
            await act(async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
            });
            expect(getByText('Load More Users')).toBeInTheDocument();
            expect(screen.getAllByTestId('user-list')).toHaveLength(9);
            expect(screen.getAllByTestId('user-name')[0]).toHaveTextContent(userMockData[0].result.data.UsersList.users[0].name);
            expect(screen.getAllByTestId('user-email')[0]).toHaveTextContent(userMockData[0].result.data.UsersList.users[0].email);
            expect(screen.getAllByTestId('user-phone')[0]).toHaveTextContent(userMockData[0].result.data.UsersList.users[0].phoneNumber);
            expect(screen.getAllByTestId('user-address')[0]).toHaveTextContent(userMockData[0].result.data.UsersList.users[0].address);
        });

        it('should render user list with proper length with graphQL API data', async () => {
            const { getByText } = render(
                <MockedProvider mocks={userMockData}>
                    <GlobalProvider>
                    <UserList />
                    </GlobalProvider>
                </MockedProvider>
            );
            await act(async () => {
                await new Promise((resolve) => setTimeout(resolve, 300));
            });
            const loadMoreBtnElement = screen.queryByRole('button', { name: /Load More Users/i });
            expect(screen.getAllByTestId('user-list')).toHaveLength(9);
        });
});


