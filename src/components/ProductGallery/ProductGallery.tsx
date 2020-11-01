import React from "react";
import {
  Grid,
  Paper,
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
import { useTheme } from "@material-ui/core/styles";

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

export const ProductGallery = ({ products }: { products: Products }) => {
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
                <IconButton title={`add ${product.name}`} aria-label="add">
                  <AddIcon />
                </IconButton>
                <IconButton
                  title={`remove ${product.name}`}
                  aria-label="remove"
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
