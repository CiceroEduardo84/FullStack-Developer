// O método map() chama a função callback recebida por parâmetro para cada elemento do array original, em ordem, e contrói um novo array com base nos retornos de cada chamada. E no final, devolve o novo array.

const product = ["Teclado", "Mouse", "Monitor"];

// Percorrendo os itens do array
product.map((item) => {
  console.log(item);
});

// Sintaxe reduzida.
product.map((item) => console.log(item));

// Ultilizando o novo objeto retornado.
const formatted = product.map((product) => {
  // return product.toUpperCase();

  return {
    id: Math.random(),
    description: product,
  };
});

console.log(formatted);
