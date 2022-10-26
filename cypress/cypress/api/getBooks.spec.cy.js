
describe('get books', () => {

  it('check API response is not empty', () => {
    cy.request({
      method: 'GET',
      url: 'http://127.0.0.1:5000/books'
    })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.length).to.be.greaterThan(0);
        });
  })
})