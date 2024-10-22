import { SET_PRODUCT_LIST } from './constant';

export const productData = (data = [], action) => {
  console.warn("reducer called", action);
 switch(action.type){
  case SET_PRODUCT_LIST:
  console.warn("product list condition", action)
  return [...action.data]


;    default: 
    return data
 }
};
