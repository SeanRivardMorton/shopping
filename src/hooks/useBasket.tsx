import { useImmerReducer } from "use-immer";

const reducer = (draft: any, action: any) => {
  switch (action.type) {
    case "ADD":
      draft[action.key] = {
        ...action.payload,
        quantity: draft[action.key]?.quantity || 0,
      };
      draft[action.key].quantity += 1;
      return draft;
    case "REMOVE":
      draft[action.key] = {
        ...action.payload,
        quantity: draft[action.key]?.quantity || 0,
      };
      draft[action.key].quantity -= 1;
      if (draft[action.key]?.quantity === 0) {
        delete draft[action.key];
      }
      return draft;
  }
};

export const useBasket = () => {
  const [basket, dispatch] = useImmerReducer(reducer, {});
  return [basket, dispatch];
};
