interface IProduct {
  id: number;
  name: string;
}

function newProduct(product: IProduct) {
  console.log(product.id, product.name);
}

newProduct({ id: 1, name: "Produto X" });
