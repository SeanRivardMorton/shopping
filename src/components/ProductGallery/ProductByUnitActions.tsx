import React from "react";
import { CardActions, IconButton } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Product } from "../../types";

export const ProductByUnitActions = ({
  id,
  product,
  dispatchBasket,
}: {
  id: string;
  product: Product;
  dispatchBasket: any;
}) => {
  return (
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
  );
};
