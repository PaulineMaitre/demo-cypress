Cypress.Commands.add("goHome", () => {
    cy.visit('http://localhost:3000/');
});