/*
  OBJETO
    - Uma coleção de dados e/ou funcionalidades;
    - Podem ter propriedade e métodos;
*/

// Cria um objeto vazio.
const obj = {};

// Cria um objeto com propriedades e métodos.
const user = {
  email: "rodrigo@email.com",
  age: 18,
  name: {
    first_name: "Rodrigo",
    surname: "Gonçalves",
  },
  address: {
    street: "Rua X",
    number: 23,
    city: "São Paulo",
    postal_code: "12345-123",
  },
  message: () => {
    console.log("Hello Word!");
  },
};

