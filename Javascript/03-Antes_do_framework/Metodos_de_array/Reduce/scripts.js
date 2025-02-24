/*
  O método reduce é utilizado para reduzir um array a um único valor.

  Parâmetros:
  - Array original (values)
  - Acumulador (accmulator)
  - Valor iteração (currentValue)
  - Valor Inicial (0)
  - Index (index da interação atual - opcional)
*/

const values = [1, 2, 3, 4, 5];

const sum = values.reduce((accumulator, currentValue, index) => {
  /*console.log("Acumulador:", accumulator);
  console.log("Curent Value:", currentValue);
  console.log("index", index);

  console.log("Soma:", accumulator + currentValue);
  console.log("########");*/

  return accumulator + currentValue;
}, 0);

console.log("Resultado da soma final:", sum);
