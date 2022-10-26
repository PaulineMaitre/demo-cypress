
describe('get books', () => {

  it('check API response is not empty', () => {
    cy.request({
      method: 'GET',
      url: 'http://127.0.0.1:5000/books/1'
    })
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body.title).to.be.eq('Innocent');
        });
  })
})


