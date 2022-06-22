const infosEmployee = (name) => {
  const info = {
    nomeCompleto: name,
    email: `${name.toLowerCase().replace(' ', '_')}@trybe.com`,
  };
  return info;
}

const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callback('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callback('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

// console.table(Object.values(newEmployees(infosEmployee)));


////////////////////////////////////////////////////////////////////

const ehIgual = (aposta, sorteio) => {
  if (aposta === sorteio) return 'Parabéns você ganhou';
  return 'Tente novamente';
}

const resultadoSorteio = (numberoApostado, callback) => {
  const numeroSorteio = Math.floor((Math.random() * 5) + 1);
  return callback(numberoApostado, numeroSorteio);
}

// console.log(resultadoSorteio(2, ehIgual));

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checarNota = (gabarito, respostasEstudante) => {
  nota = 0;
  for (let i = 0; i < gabarito.length; i += 1) {
    if (respostasEstudante[i] === 'N.A') nota = nota;
    else {
      if (gabarito[i] === respostasEstudante[i]) nota += 1;
      else {
        nota -= 0.5;
      }
    }
  }
  return nota;
}

const pontuação = (gabarito, respostasEstudante, callback) => {
  const notaFinal = callback(gabarito, respostasEstudante);
  return notaFinal;
}

console.log(pontuação(RIGHT_ANSWERS, STUDENT_ANSWERS, checarNota));