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
  message: function () {
    console.log("Hello Word!");
  },
};

// Acessando propriedades e métodos usando a notação de ponto.
console.log(user.email);

//Acessando propriedades do objeto
console.log(user.name.first_name);

// Executa o método do objeto.
user.message();

// Notação de colchetes
console.log(user["email"]);
console.log(user["name"]["first_name"]);
user["message"]();
