// spread (espalhar) permite que um objeto iterável, como uma expressão de array ou uma string seja expandido para ser usado onde zero ou mais argumentos.

const numbers = [1, 2, 3];
console.log(numbers);

// Spread
console.log(...numbers);

// Criando o objeto
const data = [
  {
    name: "Rodrigo",
    email: "test1@gmail.com",
    avatar: "r.png",
  },

  {
    name: "Rodrigo2",
    email: "test2@gmail.com",
    avatar: "r.png",
  },

  {
    name: "Rodrig3",
    email: "test3@gmail.com",
    avatar: "r.png",
  },
];

console.log(data);

// Utilizando o spread no array com objetos.
console.log(...data);
