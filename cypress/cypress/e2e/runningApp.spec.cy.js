
describe('running app', () => {
  it('running app', () => {
    cy.visit('http://localhost:3000/');
    // check there is an answer from api
    cy.get('#no-result-label').should('not.exist');
  })
})