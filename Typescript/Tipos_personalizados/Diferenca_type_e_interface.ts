// Interface x Type
interface IBaseProduct {
  price: number;
}

interface IProduct extends IBaseProduct {
  id: number;
  name: string;
}

// Interface pode ser sobrescrito
interface IProduct {
  quantity: number;
}

type TBaseProduct = {
  price: number;
};

type TProduct = TBaseProduct & {
  id: number;
  name: string;
};

// type TProduct = {

// }

let product1: IProduct = { id: 1, name: "Product 1", price: 500, quantity: 10 };
let product2: TProduct = { id: 2, name: "Product 2", price: 550 };

type TypeString = string;
type TypeNumber = number;

// interface X extends string {}
