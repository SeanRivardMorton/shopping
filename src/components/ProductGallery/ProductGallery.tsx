import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { Products, Cost } from "../../types";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

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
  dispatchBasket,
}: {
  products: Products;
  dispatchBasket: any;
}) => {
  return (
    <Grid justify="space-around" container spacing={2}>
      {Object.entries(products).map(([id, product]) => {
        return (
          <Grid key={id} item>
            <ProductCard>
              <CardContent>
                <Typography component="h3" className="title">
                  {product.name}
                </Typography>
                <Typography>{parseCost(product.cost)}</Typography>
              </CardContent>
              <CardActions>
                <IconButton
                  title={`add ${product.name}`}
                  aria-label="add"
                  onClick={() =>
                    dispatchBasket({ key: id, type: "ADD", payload: product })
                  }
                >
                  <AddIcon />
                </IconButton>
                <IconButton
                  title={`remove ${product.name}`}
                  aria-label="remove"
                  onClick={() =>
                    dispatchBasket({
                      key: id,
                      type: "REMOVE",
                      payload: product,
                    })
                  }
                >
                  <RemoveIcon />
                </IconButton>
              </CardActions>
            </ProductCard>
          </Grid>
        );
      })}

      <Grid item lg={4}></Grid>
    </Grid>
  );
};
