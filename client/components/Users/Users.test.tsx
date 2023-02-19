import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { GlobalContext } from '../../context/GlobalContext';
import { axe, toHaveNoViolations } from "jest-axe";
import { mockUsers, mockResponseWithUsers, mockResponseWithError, mockResponseWithLoader } from '../../AppData/GraphQL/mockData';
import Users from './Users';

expect.extend(toHaveNoViolations);

describe('The Users component', () => {

    // test cases written in such a way that will test for accessibility as well
    // for instance getting elements by role, label, alt text
    it('should render header', () => {
        render(<Users />);
        const headingElement = screen.getByRole('heading', {
            name: /Users Details/i,
        })
        expect(headingElement).toBeInTheDocument()
        expect(headingElement).toHaveTextContent('Users Details');
    });

    test('should render heading text', () => {
        render(<Users />);
        const heading = screen.getByTestId('user-list-heading');
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Users Details');
    });

    test('renders loading spinner', () => {
        render(
            <GlobalContext.Provider value={mockResponseWithLoader}>
                <Users />
            </GlobalContext.Provider>
        );
        const spinner = screen.getByTestId('loader');
        expect(spinner).toBeInTheDocument();
    });

    test('renders error message', () => {
        render(
            <GlobalContext.Provider value={mockResponseWithError}>
                <Users />
            </GlobalContext.Provider>
        );
        const message = screen.getByText(/Oops, seems like there is some error. Please try again/i);
        expect(message).toBeInTheDocument();
    });

    test('should render list of users', async () => {
        render(
            <GlobalContext.Provider value={mockResponseWithUsers}>
                <Users />
            </GlobalContext.Provider>
        );
        await waitFor(() => {
            const users = screen.getAllByTestId('user-list');
            expect(users).toHaveLength(2);
        });
    });

    test('should render all user details of user correctly', () => {
        render(
            <GlobalContext.Provider value={mockResponseWithUsers}>
                <Users />
            </GlobalContext.Provider>
        );
        expect(screen.getAllByTestId('user-name')[1]).toHaveTextContent(mockUsers[1].name);
        expect(screen.getAllByTestId('user-email')[1]).toHaveTextContent(mockUsers[1].email);
        expect(screen.getAllByTestId('user-phone')[1]).toHaveTextContent(mockUsers[1].phoneNumber);
        expect(screen.getAllByTestId('user-address')[1]).toHaveTextContent(mockUsers[1].address);

    });

    it('should render load more button', async () => {
        render(<Users />);
        const loadMoreBtnElement = screen.queryByRole('button', { name: /Load More Users/i });
        expect(loadMoreBtnElement).toBeInTheDocument()
    });

    it("should not have any accessibility violations", async () => {
        const { container } = render(<Users />);
        expect(await axe(container)).toHaveNoViolations();
    });
});






