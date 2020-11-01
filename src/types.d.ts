type Units = "l" | "g" | "kg";

type Cost =
  | number
  | {
      per: string = Units;
      amount: number;
    };

export interface Product {
  name: string;
  cost: Cost | number;
}

export interface Products {
  [id: string]: Product;
}
