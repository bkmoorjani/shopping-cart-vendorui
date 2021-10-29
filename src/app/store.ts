import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createSagaMiddleware from '@redux-saga/core';
import getProductsSaga from '../sagas/getProductsSaga';
import productsSlice from '../features/products/products.slice';
import commonSlice from '../features/common/common.slice';
const sagaMiddLeware = createSagaMiddleware();

export const store = configureStore({
  middleware:(getMiddlewares)=>[...getMiddlewares(),sagaMiddLeware],
  reducer: {
    counter: counterReducer,
    products:productsSlice.reducer,
    common : commonSlice.reducer

  },
});
sagaMiddLeware.run(getProductsSaga);



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
