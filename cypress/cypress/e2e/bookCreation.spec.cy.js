
describe('book creation', () => {
  it('add button opens pop up', () => {
    cy.visit('http://localhost:3000');
    cy.get('#add-book-btn').click();
    cy.contains("Ajouter un livre")
  })

  it('fill book fields', () => {
    cy.visit('http://localhost:3000/');
    cy.get('#add-book-btn').click();
    cy.get('#book-title').type("New book name");
    cy.get('#book-author').type("New author");
    cy.get('#book-publish-date').type("2022");
    cy.get('#book-quantity').type("{selectall}500");
    // submit form
    cy.get('#submit-btn').click();
    // check book has been created
    // cy.wait(3000)
    // cy.get('.bg-teal-50.rounded-md.p-3.shadow-sm.cursor-pointer').last().click();
    /*cy.get('#title-label').contains("New book name")
    cy.get('#author-label').contains("New author")
    cy.get('#publish-date-label').contains("2022")
    cy.get('#quantity-label').contains("500")*/
  })

})