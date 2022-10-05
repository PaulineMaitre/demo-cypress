
describe('book edition', () => {
  it('edit redirects to view', () => {
    cy.visit('http://localhost:3000/books/1/edit');
    cy.get('#submit-edit-btn').click();
    cy.url().should("include", "/books/1/view");
  })

  it('edit book fields', () => {
    cy.visit('http://localhost:3000/books/1/edit');
    // edit title
    cy.get('#book-title').type("{selectall}{backspace}");
    cy.get('#book-title').type("Edited book name");
    // edit author
    cy.get('#book-author').type("{selectall}{backspace}");
    cy.get('#book-author').type("Edited author");
    // edit publishing date
    cy.get('#book-publish-date').type("{selectall}2025");
    // edit
    cy.get('#book-quantity').type("{selectall}25");
    // submit form
    cy.get('#submit-edit-btn').click();
    // check fields were edited
    cy.get('#title-label').contains("Edited book name")
    cy.get('#author-label').contains("Edited author")
    cy.get('#publish-date-label').contains("2025")
    cy.get('#quantity-label').contains("25")
  })

  it('reset book fields', () => {
    cy.visit('http://localhost:3000/books/1/edit');
    // edit title
    cy.get('#book-title').type("{selectall}{backspace}");
    cy.get('#book-title').type("Innocent");
    // edit author
    cy.get('#book-author').type("{selectall}{backspace}");
    cy.get('#book-author').type("Harlan Coben");
    // edit publishing date
    cy.get('#book-publish-date').type("{selectall}2010");
    // edit
    cy.get('#book-quantity').type("{selectall}8");
    // submit form
    cy.get('#submit-edit-btn').click();
    // check fields were edited
    cy.get('#title-label').contains("Innocent")
    cy.get('#author-label').contains("Harlan Coben")
    cy.get('#publish-date-label').contains("2010")
    cy.get('#quantity-label').contains("8")
  })

})