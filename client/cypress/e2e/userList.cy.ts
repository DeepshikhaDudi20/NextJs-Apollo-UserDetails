/// <reference types="cypress" />
import {loadDataCount} from '../../AppData/GraphQL/constant'

const clientURL = "http://localhost:3000"

describe('The UserList page', () => {

    beforeEach(() => {
        cy.visit(clientURL);
        cy.get('[href="/user-list"]').click();
        cy.url().should('contain', '/user-list')
    });

    it(`should display ${loadDataCount} user by default`, () => {
        cy.get('[data-testid="user-list"]').should('have.length', loadDataCount);
        cy.get('button').should('have.length', 1);
    });

    it(`should display additional ${loadDataCount} users on load more button click`, () => {
        cy.get('button').click();
        cy.get('[data-testid="user-list"]').should('have.length', loadDataCount * 2);
    });
});
