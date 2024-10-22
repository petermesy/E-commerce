import { ADD_TO_CART, REMOVE_FROM_CART, EMTY_CART } from "./constant";

export const cartData = (data = [], action) => {
  console.warn("reducer called", action);
  switch (action.type) {
    case ADD_TO_CART:
      console.warn("addToCart condition", action);
      return [action.data, ...data];
    case REMOVE_FROM_CART:
      console.warn("removeFromCart condition", action);
      data.length = data.length ? data.length - 1 : [];
      // const remainingItem=data.filter((item)=>item.id!==action.data )
      // return [...remainingItem];
      // return [...data]
      const remainingItem=data.filter((item)=>item.id!==item.action);
      return [...remainingItem];
    case EMTY_CART:
      console.warn("empty cart condition", action);
      data = [];
      return [...data];
    default:
      return data;
  }
};
