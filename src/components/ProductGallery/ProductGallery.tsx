import React from "react";
import { Grid, Paper, Card, Typography, IconButton } from "@material-ui/core";
import { Products, Cost } from "../../types";
import styled from "styled-components";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

const ProductCard = styled(Card)`
  width: 150px;
  padding: 8px;
  margin: 16px;
  .title {
    font-size: 18px;
    font-weight: 400;
  }
`;

const parseCost = (cost: Cost): number | string => {
  if (typeof cost === "number") return cost;
  return `${cost.amount}/${cost.per}`;
};

export const ProductGallery = ({ products }: { products: Products }) => {
  return (
    <Paper>
      <Grid container spacing={3}>
        {Object.entries(products).map(([id, product]) => {
          return (
            <Grid key={id} item lg={3}>
              <ProductCard>
                <Typography component="h3" className="title">
                  {product.name}
                </Typography>
                <Typography>{parseCost(product.cost)}</Typography>
                <IconButton title={`add ${product.name}`} aria-label="add">
                  <AddIcon />
                </IconButton>
                <IconButton
                  title={`remove ${product.name}`}
                  aria-label="remove"
                >
                  <RemoveIcon />
                </IconButton>
              </ProductCard>
            </Grid>
          );
        })}

        <Grid item lg={4}></Grid>
      </Grid>
    </Paper>
  );
};
