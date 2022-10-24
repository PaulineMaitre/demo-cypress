
describe('navigation between pages', () => {
  it('go to book details', () => {
    cy.viewport('iphone-xr')
    cy.goHome();
    cy.get('#book-card-1').click();
    cy.url().should('include', '/books/1/view');
  })

  it('go to book edition', () => {
    cy.viewport('iphone-xr')
    cy.visit('http://localhost:3000/books/1/view');
    cy.get('[data-testid="edit-book-btn"]').click();
    cy.url().should('include', '/books/1/edit');
  })

  it('cancel book edition', () => {
    cy.viewport('iphone-xr')
    cy.visit('http://localhost:3000/books/1/edit');
    cy.get('#cancel-edit-btn').click();
    cy.url().should('include', '/books/1/view');
  })

  it('go back to home page', () => {
    cy.viewport('iphone-xr')
    cy.visit('http://localhost:3000/books/1/view');
    cy.get('#app-logo-header').click();
    cy.url().should('eq', 'http://localhost:3000/')
  })

})