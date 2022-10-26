
describe('running app', () => {
  it('running app', () => {
    cy.goHome();
    // check there is an answer from api
    cy.get('#no-result-label').should('not.exist');
  })
})