const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA(arrayNames) {
  // escreva seu código aqui
  const count = arrayNames.reduce((acc, cur) => {
    cur.toLowerCase().split('').forEach((element) => {
      if(element === 'a') acc += 1;
    })
    return acc;
  }, 0)
  return count;
}

console.log(containsA(names));