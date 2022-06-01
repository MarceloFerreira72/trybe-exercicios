const submitBtn = document.querySelector('.submit-btn')

function notSend(event) {
  event.preventDefault();
}

submitBtn.addEventListener('click', notSend);