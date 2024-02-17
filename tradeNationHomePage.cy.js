describe('Trade Nation Home Page Tests', () => {


    it('should open Trade Nation home page, click on logo, and confirm page title', () => {
        cy.visit('https://tradenation.com/en-gb/markets/#forex');
        cy.wait(5000);
        cy.url().should('eq', 'https://tradenation.com/en-gb/markets/#forex');
        cy.get('#onetrust-accept-btn-handler').should('be.visible');
        cy.get('#onetrust-accept-btn-handler').click();
        cy.wait(5000);
        cy.get('[data-test-id="header-logo"]').click();
        cy.wait(5000);
        cy.title().should('contain', 'Trade Nation');
    });

    it('should display an error message for invalid login on Trade Nation', () => {
        cy.visit('https://tradenation.com/en-gb/markets/#forex');

        
         cy.get('#onetrust-accept-btn-handler').click();
         cy.get('.e1xa46cz8 > .MuiButton-outlined').click();

       
        cy.get('[data-test-id="username-input"]').type('invalid_username');
        cy.get('[data-test-id="password-input"]').type('invalid_password');
        cy.get('[data-test-id="login-button"]').click();

        
        cy.get('[data-test-id="error-message"]').should('be.visible');
    })
})
