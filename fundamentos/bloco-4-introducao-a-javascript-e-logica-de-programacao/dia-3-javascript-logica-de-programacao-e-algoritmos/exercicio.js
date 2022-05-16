let numeroInicial = 10;
let resultado = numeroInicial;
for (let index = numeroInicial; index > 1; index -= 1) {
    numeroInicial -= 1;
    resultado = resultado * numeroInicial;
    console.log (resultado);
}
