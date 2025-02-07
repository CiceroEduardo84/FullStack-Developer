function createProduct(name) {
  const product = {};

  product.name = name;
  product.details = function () {
    console.log(`O nome do produto é ${this.name}`);
  };

  return product;
}

// O new cria um novo objeto ultilizando a estrutura da função construtora.
const product1 = new createProduct("teclado");
console.log(product1.name);
product1.details();

const product2 = new createProduct("Mouse");
console.log(product2.name);
product2.details();

// console.log(product1 === product2);

// Exemplo do funções construtoras disponíveis no próprio Javascript.

let myName = new String("Rodrigo");
console.log(myName);

let price = "40.6".replace(".", "");
console.log(price);

let date = new Date("2024-1-1");
console.log(date);

function Person(name) {
  this.name = name;
  this.message = function () {
    console.log(`Óla, ${this.name}`);
  };
}

const person1 = new Person("Rodrigo");
console.log(person1.name);
person1.message();

const person2 = new Person("Teste");
console.log(person2.name);
person2.message();
