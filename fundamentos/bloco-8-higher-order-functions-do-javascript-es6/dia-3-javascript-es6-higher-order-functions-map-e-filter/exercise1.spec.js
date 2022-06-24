const { formatedBookNames, books, expectedResult } = require('./exercise1.js')

test('transforma array de objetos em array personalizado', () => {
  expect(formatedBookNames(books)).toEqual(expectedResult);
})