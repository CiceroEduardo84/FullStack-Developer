interface Product {
  id: number;
  name: string;
  quantity: number;
}

const product1: Product = { id: 1, name: "Product X", quantity: 10 };

const product2: typeof product1 = { id: 2, name: "Produto Y", quantity: 100 };
