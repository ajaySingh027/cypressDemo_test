import {landingPage} from "../../pageObjects/landing.page";


describe('Amazon main page after login', () => {
    beforeEach(() => {
        cy.visit('/');
    })

    it('should have the required elements on landing page', () => {
        // verify the basic elements are present in main page toolbar
        cy.get(landingPage.selectors.AMAZON_LOGO).should('be.visible');
        cy.get(landingPage.selectors.TOOL_BAR_SEARCH).should('be.visible');
        cy.get(landingPage.selectors.CART_BUTTON).should('be.visible');
        cy.get(landingPage.selectors.ORDERS_BUTTON).should('be.visible');
        cy.get(landingPage.selectors.LOGIN_USER).should('be.visible');

    });

    it('verify the grid layout on main page', () => {
        // verify the grid layout
        cy.get(landingPage.selectors.GRID_CARD_LAYOUT).should('be.visible');

        // verify number of card types in grid layout
        cy.get(landingPage.selectors.GRID_CARD_LAYOUT).within(() => {
            cy.get(landingPage.selectors.CARD_TYPE).should('have.length', 7);
        });
    });
});