
import { call,  put,  takeEvery } from 'redux-saga/effects';
import { customAxios } from '..';
import { addProducts } from '../features/products/products.slice';

function* getProducts(action: any) {
    
    const apiAxios = customAxios.shoppingCart();
    //const apiPrefix:string = yield select(selectShoppinCartApiPrefix);
    const { data: products } = yield call(apiAxios.get, `/products`);
    yield put(addProducts(products));  //create slice for this


   // const { data: products } = yield call(axios.get, "https://shopping-cart-firstapp.herokuapp.com/products");
  
}
function* getProductsSaga() {
    yield takeEvery("GET_PRODUCTS", getProducts);
    
}

export default getProductsSaga;