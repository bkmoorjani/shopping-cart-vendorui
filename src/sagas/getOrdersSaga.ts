import {call,put,takeEvery } from '@redux-saga/core/effects';
import { customAxios } from '..';
import { addOrders } from '../features/orders/ordersSlice';

function* getOrders(action: any) {
    const apiAxios = customAxios.shoppingCart();
    const { data: orders } = yield call(apiAxios.get,`/orders`);
    //console.log(orders);
    yield put(addOrders(orders));

}

function* getOrdersSaga() {
    yield takeEvery("GET_ORDERS", getOrders);

}

export default getOrdersSaga;
