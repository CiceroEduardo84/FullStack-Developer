const product = {
  name: "Teclado",
  quantity: 100,
};

// Acessando a propriedade do objeto
console.log(product.name);

// Atualizando o valor de uma propriedade
console.log(product.quantity);
product.quantity = 90;
console.log(product.quantity);

console.log(product.name);
product.name = "Mouse";
console.log(product.name);

//Notação de colchetes.
product["quantity"] = 50;
console.log(product);
