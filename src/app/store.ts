import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import getProductsSaga from '../sagas/getProductsSaga';
import productsSlice from '../features/products/products.slice';
import commonSlice from '../features/common/common.slice';
import ordersSlice from '../features/orders/ordersSlice';
import getOrdersSaga from '../sagas/getOrdersSaga';
const sagaMiddLeware = createSagaMiddleware();

export const store = configureStore({
  middleware:(getMiddlewares)=>[...getMiddlewares(),sagaMiddLeware],
  reducer: {
    counter: counterReducer,
    products: productsSlice.reducer,
    orders: ordersSlice.reducer,
    common : commonSlice.reducer,

  },
});
sagaMiddLeware.run(getProductsSaga);
sagaMiddLeware.run(getOrdersSaga);



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
