import {PRODUCT_ACTION,SEARCH_PRODUCT} from './constant';


export const productList=(data)=>{
    console.warn("action is caleed", data)

    return {
        type: PRODUCT_ACTION,
        data

    }
}

export const productSearch=(query)=>{

    return {
        type: SEARCH_PRODUCT,
        query

    }
}
