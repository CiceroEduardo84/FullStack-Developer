// Rest param (...) permite representar um número indefinido de argumentos como um array.

function values(...rest) {
  // console.log(a);
  // Mostra a quantidade de parametros
  console.log(rest.length);

  //Exibindo o contúdo do array
  console.log(...rest);

  // Exibe o conteúdo do rest que é um array
  console.log(rest);
}

values(2, 1, 3);
