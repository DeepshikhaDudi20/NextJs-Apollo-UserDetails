/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, RenderResult } from '@testing-library/react';
import { axe, toHaveNoViolations } from "jest-axe";
import { User } from '../../../server/src/schema/types/types'
import UserDetailsTile from './UserDetailsTile';

expect.extend(toHaveNoViolations);

describe('The UserDetailsTile component', () => {
    let component: RenderResult;

    const user: User = {
        name: 'Dummy Data',
        phoneNumber: '010-415-6566',
        email: 'testemail@mock.com',
        address: '201 John Corner House'

    };

    beforeAll(() => {
        component = render(<UserDetailsTile {...user} />);
    });

    it('should render user name, email, address, and phone number', () => {
        expect(screen.getByTestId('user-name')).toHaveTextContent(user.name);
        expect(screen.getByTestId('user-phone')).toHaveTextContent(user.phoneNumber);
        expect(screen.getByTestId('user-email')).toHaveTextContent(user.email);
        expect(screen.getByTestId('user-address')).toHaveTextContent(user.address);
    });
    it('should display empty string for missing phone number', () => {
        const userWithoutPhoneNumber: User = {
            name: 'Dummy Data',
            email: 'testemail@mock.com',
            address: '201 John Corner House'
        };
        render(<UserDetailsTile {...userWithoutPhoneNumber} />);
        expect(screen.getByTestId('user-phone')).toHaveTextContent('');
    });

    it('should display empty string for missing email', () => {
        const userWithoutEmail: User = {
            name: 'Dummy Data',
            phoneNumber: '010-415-6566',
            address: '201 John Corner House'
        };
        render(<UserDetailsTile {...userWithoutEmail} />);
        expect(screen.getByTestId('user-email')).toHaveTextContent('');
    });

    it('should display empty string for missing address', () => {
        const userWithoutAddress: User = {
            name: 'Dummy Data',
            phoneNumber: '010-415-6566',
            email: 'testemail@mock.com'
        };
        render(<UserDetailsTile {...userWithoutAddress} />);
        expect(screen.getByTestId('user-address')).toHaveTextContent('');
    });

    it("should not have any accessibility violations", async () => {
        const { container } = component;
        expect(await axe(container)).toHaveNoViolations();
    });
});


