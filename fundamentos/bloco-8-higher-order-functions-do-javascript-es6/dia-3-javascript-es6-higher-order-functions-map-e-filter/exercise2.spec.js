const { nameAndAge, books, expectedResult } = require('./exercise2.js')

test('transforma o array padrão em um array ordenado pela idade do autor no lançamento do livro', () => {
  expect(nameAndAge(books)).toEqual(expectedResult);
})