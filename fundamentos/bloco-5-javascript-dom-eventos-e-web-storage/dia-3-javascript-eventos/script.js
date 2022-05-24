function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

for (let i = 0; i < dezDaysList.length; i += 1) {
  let daycreated = document.createElement('li');
  daycreated.className = 'day';
  daycreated.innerText = dezDaysList[i];
  if (dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31) daycreated.classList.add('holiday');
  if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) daycreated.classList.add('friday');
  document.querySelector('#days').appendChild(daycreated);
}

let holidayBtn = document.createElement('button');

function createHolidaysBtn(feriados) {
  holidayBtn.innerText = feriados;
  holidayBtn.className = 'btn-holiday';
  document.querySelector('.buttons-container').appendChild(holidayBtn);
}

createHolidaysBtn('Feriados');

function changeHolidaysColor() {
  let holiday1 = document.querySelector('.holiday');
  for (let i = 0; i < document.querySelectorAll('.holiday'); i += 1) {
    if (holiday1.style.backGroundColor === "rgb(238,238,238)") {
      document.querySelectorAll('.holiday')[i].style.backGroundColor = 'green';
    } else document.querySelectorAll('.holiday')[i].style.backGroundColor === "rgb(238,238,238)"
  }
}

holidayBtn.addEventListener('click', changeHolidaysColor);