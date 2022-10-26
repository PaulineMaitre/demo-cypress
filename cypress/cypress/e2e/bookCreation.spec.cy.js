import { faker } from '@faker-js/faker';

describe('book creation', () => {

  /*beforeEach(() => {
    cy.goHome();
  })*/
  /*it('fill all form fields', () => {
    const title = "La ruche"
    const author = "Talan Labs"
    const publishYear = 2022
    const quantity = 30

    cy.visit("/")
    // cy.get('[data-testid="add-book-btn"]').click()
    cy.get('#add-book-btn').click()
    cy.contains("Ajouter un livre")
    cy.get('#book-title').type(title)
    cy.get('#book-author').type(author)
    cy.get('#book-publish-date').type(publishYear)
    cy.get("#submit-btn").should('be.disabled')
    cy.get('#book-quantity').type(`{selectall}${quantity}`)
    cy.get("#submit-btn").should('be.enabled')
    cy.get("#submit-btn").click()
    cy.url().should('eq', 'http://localhost:3000/')
    cy.contains(title).click()
    cy.url().should('contain', '/view')
    cy.get('[data-testid="title-label"]').contains(title)
  })*/

/*
  it('fill all book fields', () => {
    const title = `${faker.word.adverb()} ${faker.word.verb()}`
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const publishDate = faker.random.numeric(4)

    cy.get('[data-testid="add-book-btn"]').click();
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

  it('check missing title disable submit button', () => {
    const firstName = faker.name.firstName()
    const lastName = faker.name.lastName()
    const publishDate = faker.random.numeric(4)

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

    cy.get('#add-book-btn').click();
    cy.get('#book-title').type(title);
    cy.get('#book-author').type(`${firstName} ${lastName}`);
    cy.get('#book-quantity').type('{selectall}500');
    // submit form
    cy.get('#submit-btn').should('be.disabled');
  })


  it('open pop up', () => {
    cy.get('#add-book-btn').click();
    cy.contains('Ajouter un livre')
  })

  it('close pop up', () => {
    cy.get('#add-book-btn').click();
    cy.contains('Ajouter un livre')
    cy.get('#close-modal-btn').click();
  })*/

})