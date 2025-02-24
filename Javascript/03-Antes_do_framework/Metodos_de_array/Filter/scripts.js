// o método filter() cria um novo array com todos os elementos que passaram na condição.

const words = ["Javascript", "HTML", "CSS", "Web"];

// Filtrando palavras que tenham mais de 3 letras
const result = words.filter((word) => word.length > 3);

console.log(result);

const products = [
  { description: "teclado", price: 50, promotion: true },
  { description: "mouse", price: 50, promotion: false },
  { description: "monitor", price: 50, promotion: true },
];

// Exemplo de um filtro de produtos na promoção
const promotion = products.filter((product) => product.promotion === true);
console.log(promotion);
