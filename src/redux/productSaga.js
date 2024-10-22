import {takeEvery, put} from "redux-saga/effects"
import { PRODUCT_ACTION,SEARCH_PRODUCT,SET_PRODUCT_LIST} from "./constant";

function* getProducts(){ 
    let data =yield fetch('http://localhost:3500/product');
    data = yield data.json();
    console.warn("action is called",data);
    yield put({type:SET_PRODUCT_LIST,data})
}
function* searchProducts(data){  
    let result =yield fetch(`http://localhost:3500/product?q=${data.query}`);
    result = yield result.json();
    console.warn(" search action is called",data.result);
    yield put({type:SET_PRODUCT_LIST,data:result})
    
}
function* productSaga()
{
  yield takeEvery(PRODUCT_ACTION,getProducts)
  yield takeEvery(SEARCH_PRODUCT,searchProducts)
}
export default productSaga;