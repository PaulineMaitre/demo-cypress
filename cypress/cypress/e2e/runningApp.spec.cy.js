
describe('running app', () => {
  it('running app', {retries: 3}, () => {
    cy.goHome();
    // check there is an answer from api
    cy.get('#no-result-label').should('not.exist');
    // equal :
  /*  cy.get('#no-result-label').then(($label) => {
      cy.wrap($label).should('not.exist');
    })*/
  })
})