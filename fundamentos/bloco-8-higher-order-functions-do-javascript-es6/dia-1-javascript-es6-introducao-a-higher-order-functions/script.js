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

console.log(resultadoSorteio(2, ehIgual));