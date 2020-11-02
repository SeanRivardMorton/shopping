import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import { Cost } from "../../types";
import styled from "styled-components";

import { ProductByUnitActions } from "./ProductByUnitActions";
import { ProductByVolumeActions } from "./ProductByVolumeActions";

const ProductCard = styled(Card)`
  ${({ theme }) => `
    width: 200px;
    .title {
        font-size: ${theme.typography.h6.fontSize};
        font-weight: 400;
    }
    `}
`;

const parseCost = (cost: Cost): number | string => {
  if (typeof cost === "number") return cost;
  return `${cost.amount}/${cost.per}`;
};

export const ProductGallery = ({
  products,
  basket,
  dispatchBasket,
}: {
  products: any;
  basket: any;
  dispatchBasket: any;
}) => {
  return (
    <Grid justify="space-around" container spacing={2}>
      {Object.entries(products).map(([id, product]: [string, any]) => {
        return (
          <Grid key={id} item>
            <ProductCard>
              <CardContent>
                <Typography component="h3" className="title">
                  {product.name}
                </Typography>
                <Typography>{parseCost(product.cost)}</Typography>
              </CardContent>
              {typeof product.cost === "number" ? (
                <ProductByUnitActions
                  id={id}
                  product={product}
                  dispatchBasket={dispatchBasket}
                />
              ) : (
                <ProductByVolumeActions
                  id={id}
                  basket={basket}
                  product={product}
                  dispatchBasket={dispatchBasket}
                />
              )}
            </ProductCard>
          </Grid>
        );
      })}

      <Grid item lg={4}></Grid>
    </Grid>
  );
};
