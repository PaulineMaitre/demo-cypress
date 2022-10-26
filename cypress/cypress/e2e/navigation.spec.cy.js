
describe('navigation between pages', () => {
  it('go to book details', () => {
    cy.goHome();
    cy.get('#book-card-1').click();
    cy.url().should('include', '/books/1/view');
  })

  it('go to book edition', () => {
    cy.visit('/books/1/view');
    cy.get('[data-testid="edit-book-btn"]').click();
    cy.url().should('include', '/books/1/edit');
  })

  it('cancel book edition', () => {
    cy.visit('/books/1/edit');
    cy.get('#cancel-edit-btn').click();
    cy.url().should('include', '/books/1/view');
  })

  it('go back to home page', () => {
    cy.visit('/books/1/view');
    cy.get('#app-logo-header').click();
    cy.url().should('eq', 'http://localhost:3000/')
  })

})