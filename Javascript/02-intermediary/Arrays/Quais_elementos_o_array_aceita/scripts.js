let myArray = [
  "Um texto",
  10,
  true,
  function () {
    console.log("Função dentro do Array!");
  },
  {
    name: "Rodrigo",
    email: "teste@gmail.com",
  },
];

// Texto
console.log(myArray[0]);

// Número
console.log(myArray[1]);

// Boolean
console.log(myArray[2]);

// Função
myArray[3]();

// Objetos
console.log(myArra[4].name, myArray[4].email);
