const { fantasyOrScienceFiction, books, expectedResult } = require('./exercise3.js')

test('deve retornar apenas um array com os livros de fantasia ou ficção científica', () => {
  expect(expectedResult).toEqual(fantasyOrScienceFiction(books));
})