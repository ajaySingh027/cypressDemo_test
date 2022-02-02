describe('login page', () => {

    beforeEach(() => {
    })

    it('navigate to login page', () => {
        cy.visit("/");
        cy.get('#nav-link-accountList-nav-line-1').click();

    });
});