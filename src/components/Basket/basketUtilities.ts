import { BasketProduct, Basket, Product } from "../../types";

export const parseProductPrice = ({
  name,
  quantity,
  cost,
}: BasketProduct): { description: string; price: number } => {
  if (typeof cost === "number") return { description: name, price: cost };
  const price = Math.round(quantity * cost.amount * 100) / 100;
  const description = `${name} ${quantity} ${cost.per.toUpperCase()} @ ${
    cost.amount
  }/${cost.per.toUpperCase()} `;
  return {
    description,
    price,
  };
};

export const getSubtotal = (basket: Basket): number => {
  return Object.values(basket).reduce((acc: number, cur: any) => {
    if (typeof cur.cost === "number") {
      acc += cur.cost * cur.quantity;
    }
    return acc;
  }, 0);
};

const discountLookup: any = {
  bogo: (product: any, discount: any) => {
    if (!product?.quantity || product?.quantity < discount.amount) return null;
    const discountable = Math.floor(product.quantity / discount.amount);
    const description = `${product.name} ${discount.amount} for ${discount.for}`;
    return { description, savings: discountable * product.cost };
  },
  multibuy: (product: any, discount: any) => {
    if (!product?.quantity || product?.quantity < discount.amount) return;
    const discountable = Math.floor(product.quantity / discount.amount);
    const discountedCost = discountable * discount.for;
    const totalCost = discountable * (product.cost * discount.amount);
    const description = `${product.name} ${discount.amount} for ${discountedCost}`;
    return { description, savings: totalCost - discountedCost };
  },
};

export const getAppliedDiscounts = (basket: Basket) => {
  let discounts: any[] = [];
  Object.entries(basket).forEach(([id, product]) => {
    if (product.discounts) {
      product.discounts.forEach((discount) => {
        const applicableDiscount = discountLookup[discount.type](
          product,
          discount
        );
        if (applicableDiscount) {
          discounts.push({ id, ...applicableDiscount });
        }
      });
    }
  });
  return discounts;
};

// export const getAppliedDiscounts = (basket: any) => {
//   return Object.values(basket).reduce((totalDiscount: number, product: any) => {
//     totalDiscount += Number(getProductDiscount(product)?.savings) || 0;
//     return Number(totalDiscount);
//   }, 0);
// };

// export const getProductDiscount = (product: any) => {
//   switch (product?.discount?.type) {
//     case "bogo":
//       return getBogoDiscount(product);
//     case "bulk":
//       return getBulkDiscount(product);
//     default:
//       return null;
//   }
// };

// // (Sean Rivard-Morton) bogo is 'buy one get one'
// const getBogoDiscount = ({ quantity, cost, discount, name }: any) => {
//   const discountable = Math.floor(quantity / discount.amount);
//   const displayText = `${name} ${discount.amount} for ${discount.for}`;
//   return { displayText, savings: (discountable * cost).toFixed(2) };
// };

// // (Sean Rivard-Morton) I was considering naming it 'multibuy' because 2 doesn't really
// // seem to qualify for 'bulk'
// const getBulkDiscount = (product: any) => {
//   const discountable = Math.floor(product.quantity / product.discount.amount);
//   const discountedCost = discountable * product.discount.salePrice;
//   const totalCost = discountable * (product.cost * product.discount.amount);
//   const displayText = `${product.name} ${product.discount.amount} for ${discountedCost}`;
//   return { displayText, savings: totalCost - discountedCost };
// };
