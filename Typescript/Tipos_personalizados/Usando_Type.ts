type Product = {
  id: number;
  name: string;
};

function newProduct(product: Product) {}

newProduct({ id: 1, name: "Produto x" });

type SelectResponse = Product[] | null;

function selectProduct(): SelectResponse {
  return null;
}
