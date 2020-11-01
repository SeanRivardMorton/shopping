type Units = "l" | "g" | "kg";

export type Cost =
  | number
  | {
      per: string = Units;
      amount: number;
    };

export interface Product {
  name: string;
  cost: Cost | number;
}
export interface BasketProduct extends Product {
  quantity: number;
}

export interface Products {
  [id: string]: Product;
}

export interface Basket {
  [id: string]: Product;
}
