type Units = "l" | "g" | "kg";

export type Cost =
  | number
  | {
      per: string = Units;
      amount: number;
    };

type DiscountTypes = "bogo" | "multibuy" | "bundle";

export type Discount = {
  type: string = DiscountTypes;
  amount: number;
  for?: number;
};

export interface Product {
  name: string;
  cost: Cost | number;
  discounts?: Discounts[];
  quantity?: number;
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
