import { createEntityAdapter, createSlice, EntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



export interface IOrders {
    _id: string,
    orderRefNo: string,
    custId: string,
    products: [object],
    status: string
   
}


const entityAdapter: EntityAdapter<IOrders> =
    createEntityAdapter<IOrders>({
        selectId:(orders: IOrders)=> orders._id
});

const ordersSlice = createSlice({
    name: "orders",
    initialState: entityAdapter.getInitialState(),
    reducers: {
        entityAddMany: entityAdapter.addMany,
    }
})
export const { entityAddMany: addOrders } = ordersSlice.actions;
export const { selectAll: selectOrders } = entityAdapter.getSelectors((state: RootState) => state.orders)

export default ordersSlice;