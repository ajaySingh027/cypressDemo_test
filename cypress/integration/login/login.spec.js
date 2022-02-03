import { landingPage } from "../../pageObjects/landing.page";

describe('login page', () => {

    beforeEach(() => {
    })

    it('navigate to login page', () => {
        cy.visit("/");
        cy.login(Cypress.env('testUser'), Cypress.env('password'));
        cy.get(landingPage.selectors.LOGIN_USER)
        .should('be.visible')
        .should('have.text', landingPage.strings.LOGGED_USER);
    });
});