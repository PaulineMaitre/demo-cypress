import {Dashboard} from 'react-dom'
// import {BookCard} from 'react-dom'
// import {Book} from '../../../bookshop-webapp/src/domain/Book'

describe('BookCard.cy.js', () => {
  it('playground', () => {
 /*   const b = {id: 1,
      title: 'Innocent',
      codeName: 'innocent',
      author: 'Harlan Coben',
      publishDate: '2010',
      quantity: 25}
    cy.mount(<BookCard book={b}/>)*/
    cy.mount(<Dashboard/>)
  })
})