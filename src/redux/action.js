import {ADD_TO_CART} from './constant';
import {REMOVE_FROM_CART} from './constant';
import {EMTY_CART} from './constant'

export const addToCart=(data)=>{
    console.warn("action is called",data)
    return {
        type: ADD_TO_CART,
        data
    }
}
export const removeFromCart=(data)=>{
    console.warn("action is called",data)
    return {
        type: REMOVE_FROM_CART,
        
    }
}
export const emtyCart=()=>{
    console.warn("action is called")
    return {
        type: EMTY_CART,       
    }
}