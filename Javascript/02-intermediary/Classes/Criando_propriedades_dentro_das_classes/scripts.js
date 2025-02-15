class Product {
  // Recebe por parâmetro o nome do produto
  constructor(name) {
    this.name = name;
  }
}

const product1 = new Product("Teclado");
console.log(product1.name);

const product2 = new Product("Teclado");
console.log(product2.name);
