const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(false);

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenado = (array) => {
  const arrayOrdenado = array.sort(function(a,b) {
    return a - b;
  });
  return arrayOrdenado
}

console.log (`os números ${ordenado(oddsAndEvens)} se encontram ordenados de forma crescente`);