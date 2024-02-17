import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

Given('I open Trade Nation home page', () => {
    cy.visit('https://tradenation.com/en-gb/markets/#forex');
    cy.url().should('eq', 'ttps://tradenation.com/en-gb/markets/#forex');
    cy.get('#onetrust-accept-btn-handler').should('be.visible');
    cy.wait(5000);
});

 And('I accept the cookies', () => {
     cy.get('#onetrust-accept-btn-handler').click();
     cy.wait(5000);
 });

When('I click on the {string} logo', () => {
    cy.get('[data-test-id="header-logo"]').click();
    cy.wait(5000);
});

Then('I confirm the current page title', () => {
    cy.title().should('contain', 'Trade Nation');
    cy.wait(5000);
});

And('I should see the login form', () => {
    cy.get('[data-test-id="login-form"]').should('be.visible');
});

And('I attempt to login with invalid credentials', () => {
    cy.get('[data-test-id="username-input"]').type('invalid_username');
    cy.get('[data-test-id="password-input"]').type('invalid_password');
    cy.get('[data-test-id="login-button"]').click();
});

Then('I should see an error message', () => {
    cy.get('[data-test-id="error-message"]').should('be.visible');
});
