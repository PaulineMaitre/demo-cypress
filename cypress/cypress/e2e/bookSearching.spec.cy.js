describe('book searching', () => {


    /*beforeEach(() => {
        cy.goHome()
    })*/

    /*it('searching book by author - get 1 book', () => {
        cy.goHome()
        //given
        cy.get('[data-testid="book-card"]').should('have.length.greaterThan', 1)
        //when
        cy.get('#search-book-input').type(`Anne Perry`);
        //then
        cy.get('[data-testid="book-card"]').should('have.length', 1).contains("Anne Perry")
    })*/

    /*it('searching book by author - using wrap', () => {
        cy.goHome()
        cy.get('[data-testid="book-card"]').should('not.have.length', 0)
        cy.get('#search-book-input').type(`Harlan Coben`);
        cy.get('[data-testid="book-card"]').should('not.have.length', 0).each(($book) => {
            cy.wrap($book).contains("Harlan Coben")
        })
    })*/

    /*it('searching book by author - method jQuery', () => {
        cy.goHome()
        cy.get('[data-testid="book-card"]').should('not.have.length', 0)

        cy.get('[data-testid="book-card"]').then(($el) => {
            const itemNum = $el.length;
            cy.log(itemNum)
            cy.get('#search-book-input').type(`Harlan Coben`);
            cy.get('[data-testid="book-card"]').should('have.length.lessThan', itemNum)
        })
    })*/

    /*it('searching book by title', () => {
        //get list of all books present
        //Best practice
        cy.get('[data-cy="book-card"]').should('have.length', 12)
        //also possible
        cy.get('*[id^="book-card-"]').should('not.have.length', 1)

        //type in searchbar
        cy.get('#search-book-input').type(`Ju`);
        //should get now only one book showing
        cy.get('*[id^="book-card-"]').should('have.length', 1).contains("Ju")
    })*/

    /*it('searching for not existing book', () => {
        //check there are books present
        cy.get('*[id^="book-card-"]').should('not.have.length', 0)
        //type in searchbar
        cy.get('#search-book-input').type(`title that does not exist`);
        //should get no book showing
        cy.get('*[id^="book-card-"]').should('have.length', 0)
        cy.get('#no-result-label').should('be.visible')
        cy.get('#no-result-label').contains("Aucun résultat pour cette recherche.")
    })*/

})
