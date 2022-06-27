const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage(arrayStudents, arrayGrades) {
  // escreva seu código aqui
  const averages = arrayStudents.map((element, index) => {
    const objReady = {
      name: element,
      average: arrayGrades[index].reduce((acc, cur) => acc + cur) / arrayGrades[index].length,
    }
    return objReady;
  })
  return averages;
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

console.log(studentAverage(students, grades));
