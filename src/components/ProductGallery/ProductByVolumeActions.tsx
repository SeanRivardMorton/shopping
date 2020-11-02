import React from "react";
import { CardActions, IconButton, TextField } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { Product } from "../../types";

export const ProductByVolumeActions = ({
  id,
  product,
  dispatchBasket,
  basket,
}: {
  id: string;
  product: Product;
  dispatchBasket: any;
  basket: any;
}) => {
  // (Sean Rivard-Morton) TODO tidy this up
  const quantity = basket?.[id]?.quantity;
  React.useEffect(() => {
    if (basket[id]) {
      dispatchBasket({
        key: id,
        type: "VOLUME_ADD",
        payload: 0.175,
      });
    }
  }, [dispatchBasket, basket, id, quantity]);
  const handleVolumeChange = (e: any) => {
    dispatchBasket({
      key: id,
      type: "VOLUME_ADD",
      payload: e.target.value,
    });
  };
  return (
    <CardActions>
      {!basket[id]?.quantity ? (
        <IconButton
          title={`add ${product.name}`}
          aria-label="add"
          onClick={() =>
            dispatchBasket({ key: id, type: "ADD", payload: product })
          }
        >
          <AddIcon />
        </IconButton>
      ) : (
        <form noValidate autoComplete="off">
          <TextField
            id={`${id}.quantity`}
            defaultValue={0.175}
            label="quantity"
            onChange={handleVolumeChange}
          />
        </form>
      )}
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
