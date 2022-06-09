const verifyNumbers = (num1, num2) => {
  if (num1 === '' || num2 === '') throw new Error ('insira ambos os números')
}

function sum() {
  try {    
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    verifyNumbers(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  } catch (error) {
    result.innerText = `Erro: ${error.message}`;
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}