import { faker } from '@faker-js/faker';

describe('book creation', () => {

  it('open pop up', () => {
    cy.visit('http://localhost:3000');
    cy.get('#add-book-btn').click();
    cy.contains('Ajouter un livre')
  })

  it('close pop up', () => {
    cy.visit('http://localhost:3000');
    cy.get('#add-book-btn').click();
    cy.contains('Ajouter un livre')
    cy.get('#close-modal-btn').click();
  })

  it('check missing title disable submit button', () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const publishDate = faker.random.numeric(4)

    cy.visit('http://localhost:3000/');
    cy.get('#add-book-btn').click();
    cy.get('#book-author').type(`${firstName} ${lastName}`);
    cy.get('#book-publish-date').type(publishDate);
    cy.get('#book-quantity').type('{selectall}500');
    // submit form
    cy.get('#submit-btn').should('be.disabled');
  })

  it('check missing author disable submit button', () => {
    const title = `${faker.word.adverb()} ${faker.word.verb()}`
    const publishDate = faker.random.numeric(4)

    cy.visit('http://localhost:3000/');
    cy.get('#add-book-btn').click();
    cy.get('#book-title').type(title);
    cy.get('#book-publish-date').type(publishDate);
    cy.get('#book-quantity').type('{selectall}500');
    // submit form
    cy.get('#submit-btn').should('be.disabled');
  })

  it('check missing publish date disable submit button', () => {
    const title = `${faker.word.adverb()} ${faker.word.verb()}`
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()

    cy.visit('http://localhost:3000/');
    cy.get('#add-book-btn').click();
    cy.get('#book-title').type(title);
    cy.get('#book-author').type(`${firstName} ${lastName}`);
    cy.get('#book-quantity').type('{selectall}500');
    // submit form
    cy.get('#submit-btn').should('be.disabled');
  })


  it('fill book fields', () => {
    const title = `${faker.word.adverb()} ${faker.word.verb()}`
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const publishDate = faker.random.numeric(4)

    cy.visit('http://localhost:3000/');
    cy.get('#add-book-btn').click();
    cy.get('#book-title').type(title);
    cy.get('#book-author').type(`${firstName} ${lastName}`);
    cy.get('#book-publish-date').type(publishDate);
    cy.get('#book-quantity').type('{selectall}500');
    // submit form
    cy.get('#submit-btn').click();
    // check book has been created
    cy.contains(title).click();
    cy.get('#title-label').contains(title)
    cy.get('#author-label').contains(`${firstName} ${lastName}`)
    cy.get('#publish-date-label').contains(publishDate)
    cy.get('#quantity-label').contains('500')
  })

})