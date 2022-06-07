const submitBtn = document.querySelector('#submit-btn');
const cleanBtn = document.querySelector('#clean-btn');

function notSend(event) {
  event.preventDefault();
}

function clearInputs() {
  const allInputsMain = document.querySelectorAll('main input');
  document.querySelector('textarea').value = '';
  for (let i = 0; i < allInputsMain.length; i += 1) {
    allInputsMain[i].value = '';
  }
}

submitBtn.addEventListener('click', notSend);

cleanBtn.addEventListener('click', clearInputs);