describe('book searching', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/');
    })

    it('searching book by title', () => {
        //get list of all books present
        //Best practice
        cy.get('[data-cy="book-card"]').should('have.length', 5)
        //also possible
        cy.get('*[id^="book-card-"]').should('not.have.length', 1)

        //type in searchbar
        cy.get('#search-book-input').type(`Ju`);
        //should get now only one book showing
        cy.get('*[id^="book-card-"]').should('have.length', 1).contains("Ju")
    })

    it('searching book by author', () => {
        //get list of all books present
        cy.get('*[id^="book-card-"]').should('not.have.length', 0)
        //type in searchbar
        cy.get('#search-book-input').type(`Harlan Coben`);
        //should
        cy.get('*[id^="book-card-"]').should('not.have.length', 0).each(($book) => {
            cy.wrap($book).contains("Harlan Coben")
        })
    })

    it('searching for not existing book', () => {
        //check there are books present
        cy.get('*[id^="book-card-"]').should('not.have.length', 0)
        //type in searchbar
        cy.get('#search-book-input').type(`Not existing title`);
        //should get no book showing
        cy.get('*[id^="book-card-"]').should('have.length', 0)
        cy.get('#no-result-label').should('be.visible')
        cy.get('#no-result-label').contains("Aucun résultat pour cette recherche.")
    })


})
