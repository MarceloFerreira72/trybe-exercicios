const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

function flatten(array) {
  // escreva seu código aqui
  const newArray = array.reduce((acc, cur) => {
    cur.forEach((element) => {
      acc.push(element);
    });
    return acc
  }, [])
  return newArray;
}

console.log(flatten(arrays));
