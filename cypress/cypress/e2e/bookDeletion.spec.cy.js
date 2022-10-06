describe('book deletion', () => {

  it('delete book', () => {
    cy.visit('http://localhost:3000/');
    cy.get('.bg-teal-50.rounded-md.p-3.shadow-sm.cursor-pointer').last().click();
    cy.get('#delete-book-btn').click();
    cy.url().should('eq', 'http://localhost:3000/')
  })

})