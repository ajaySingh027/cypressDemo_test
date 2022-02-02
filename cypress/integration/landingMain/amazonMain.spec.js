import {landingPage} from "../../pageObjects/landing.page";


describe('Amazon main page after login', () => {
    beforeEach(() => {
    })

    it('should have all elements on landing page', () => {
        cy.visit("/");
        cy.get(landingPage.selectors.AMAZON_LOGO).should('be.visible');
        cy.get(landingPage.selectors.TOOL_BAR_SEARCH).should('be.visible');
        cy.get(landingPage.selectors.AMAZON_LOGO).should('be.visible');
        cy.get(landingPage.selectors.AMAZON_LOGO).should('be.visible');

    });
});