const verifyNumbers = (num1, num2) => {
  if (num1 === '' || num2 === '') throw new Error ('insira ambos os números');
  if (isNaN(num1) || isNaN(num2)) throw new Error ('insira apenas números');
}

function sum() {
  try {    
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = parseInt(value1) + parseInt(value2);
    verifyNumbers(value1, value2);
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    result.innerText = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}
window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}