// Destructuting assigment (desestruturação) permite extrair dados de arrys ou objetos em vriáveis distintas

const product = {
  description: "teclado",
  price: 150,
};

const { description, price } = product;
console.log("Descrição: ", description);
console.log("Price: ", price);

function newProduct({ description, price }) {
  console.log("###NOVO PRODUTO###");
  console.log("Descrição: ", description);
  console.log("Price: ", price);
}

newProduct({ description: "moude", price: 70 });
