// Parte I - questão 1

const testingScope = (escopo) => {
  if (escopo === true) {
    const ifScope = "Não devo ser utilizada fora do meu escopo (if)";
    console.log(`${ifScope} ótimo, fui utilizada no escopo !`);
  } else {
    const elseScope = "Não devo ser utilizada fora meu escopo (else)";
    console.log(elseScope);
  }
};

// testingScope(true);

// Parte I - questão 2

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const ordenado = (array) => {
  const arrayOrdenado = array.sort(function (a, b) {
    return a - b;
  });
  return arrayOrdenado;
};

// console.log (`os números ${ordenado(oddsAndEvens)} se encontram ordenados de forma crescente`);

// Parte II - questão 1

const fatorialNumber = (number) => {
  if (number > 0) {
    let result = number;
    for (let i = number; i > 1; i -= 1) {
      result = result * (i - 1);
    }
    return result;
  } else return "apenas números naturais";
};

// console.log(fatorialNumber(5));

const fatorialCursivo = (number) => {
  if (number > 0) {
    let result = `${number}! = `;
    let fatorial = number;
    for (let i = 1; i < number; i += 1) {
      result = `${result + i} x `
    }
    for (let i = number; i > 1; i -= 1) {
      fatorial = fatorial * (i - 1);
    }
    result = `${result + number} = ${fatorial}`
    return result;
  } else return 'apenas números naturais';
};

// console.log(fatorialCursivo(5));