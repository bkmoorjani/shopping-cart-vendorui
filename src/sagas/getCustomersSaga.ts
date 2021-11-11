import { call,  put,  takeEvery } from 'redux-saga/effects';
import { customAxios } from '..';
import { addCustomers } from '../features/customers/customersslice';

function* getCustomers(action: any) {
    
    const apiAxios = customAxios.shoppingCart();
    //const apiPrefix:string = yield select(selectShoppinCartApiPrefix);
    const { data: customers } = yield call(apiAxios.get, `/customers`);
    yield put(addCustomers(customers));  //create slice for this
   // const { data: products } = yield call(axios.get, "https://shopping-cart-firstapp.herokuapp.com/customers");
  
}
function* getCustomersSaga() {
    yield takeEvery("GET_CUSTOMERS", getCustomers);
    
}

export default getCustomersSaga;