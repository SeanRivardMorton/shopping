import React from "react";
import { Paper } from "@material-ui/core";
import styled from "styled-components";
import { Basket as BasketInterface, Product, BasketProduct } from "../../types";
import { ProductGallery } from "../ProductGallery";

const BasketPaper = styled(Paper)`
  ${({ theme }) => `
    padding: ${theme.spacing(4)}px;
  `}
`;

const BasketUnorderedList = styled.ul`
  list-style-type: none;
  padding: 0px;
`;

const parseProductPrice = ({
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

export const Basket = ({ basket }: { basket: BasketInterface }) => {
  return (
    <BasketPaper variant="outlined">
      Your Basket
      <BasketUnorderedList>
        {Object.entries(basket).map(([id, product]: [string, any]) => {
          const parsedProduct = parseProductPrice(product);
          return (
            <li key={id}>
              {parsedProduct.description}
              {parsedProduct.price}
            </li>
          );
        })}
      </BasketUnorderedList>
    </BasketPaper>
  );
};
