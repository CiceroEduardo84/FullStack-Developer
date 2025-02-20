// Destructurubg ssigment (destruturação) permite extrair dados de arrays ou objetos em vráveis distintas.

const data = ["teste", "test@emmail.com"];

// desestruturando Array
const [userName, email] = data;
console.log("nome:", userName);
console.log("email:", email);

const fruits = ["banana", "maça", "laranja"];

// Desetruturar somente o primeiro
const [banana] = fruits;
console.log(banana);

// Ignorando o primeiro na desestruturação
const [_, apple] = fruits;
console.log(apple);

// Ignorando o primeiro e o segundo
const [, , orange] = fruits;
console.log(orange);
