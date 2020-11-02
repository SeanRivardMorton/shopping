import React from "react";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { Basket as BasketInterface, Product, BasketProduct } from "../../types";
import { ProductGallery } from "../ProductGallery";
import {
  parseProductPrice,
  getSubtotal,
  getAppliedDiscounts,
  getDiscountedTotal,
  getTotalToPay,
} from "./basketUtilities";

const BasketPaper = styled(Paper)`
  ${({ theme }) => `
    padding: ${theme.spacing(4)}px;
  `}
`;

const BasketUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
  li {
    display: flex;
    .title {
      width: 60%;
    }
  }
`;

const ItemizedReceipt = ({ basket }: { basket: any }) => {
  return (
    <>
      {Object.entries(basket).map(([id, product]: [string, any]) => {
        const parsedProduct = parseProductPrice(product);
        return [...Array(product.quantity > 1 ? product.quantity : 1)].map(
          (_, index) => {
            return (
              <li key={`${id}-${index}`}>
                <span className="title">{parsedProduct.description}</span>
                {parsedProduct.price.toFixed(2)}
              </li>
            );
          }
        );
      })}
    </>
  );
};

const AppliedDiscountsList = ({ basket }: { basket: BasketInterface }) => {
  const appliedDiscounts: any = getAppliedDiscounts(basket);
  return (
    <>
      {appliedDiscounts.map((discount: any, index: number) => {
        return (
          <li
            data-testid={`${discount.description} -${discount.savings.toFixed(
              2
            )}`}
            key={`${discount.id}-${index}`}
          >
            <span className="title">{discount.description}</span>-
            {discount.savings.toFixed(2)}
          </li>
        );
      })}
    </>
  );
};

export const Basket = ({ basket }: { basket: BasketInterface }) => {
  const subTotal = getSubtotal(basket).toFixed(2);
  const discountedTotal = getDiscountedTotal(basket).toFixed(2);
  const totalToPay = getTotalToPay(basket).toFixed(2);
  return (
    <BasketPaper variant="outlined">
      Your Basket
      <BasketUnorderedList>
        <ItemizedReceipt basket={basket} />
        ------
        <li data-testid={`Sub-total ${subTotal}`}>
          <span className="title">Sub-total</span>
          {subTotal}
        </li>
        <li>Savings</li>
        <AppliedDiscountsList basket={basket} />
        ------
        <li data-testid={`total savings -${discountedTotal}`}>
          <span className="title">Total savings</span>
          {discountedTotal}
        </li>
        ---------------------------
        <li data-testid={`Total to Pay ${totalToPay}`}>
          <span className="title">Total to Pay</span>
          {totalToPay}
        </li>
      </BasketUnorderedList>
    </BasketPaper>
  );
};
