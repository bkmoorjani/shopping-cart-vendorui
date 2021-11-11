import { createEntityAdapter, createSlice, EntityAdapter } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";



export interface ICustomers {
    _id: string,
    orderRefNo: string,
    custId: string,
    products: [object],
    status: string
   
}


const entityAdapter: EntityAdapter<ICustomers> =
    createEntityAdapter<ICustomers>({
        selectId:(customers: ICustomers)=> customers._id
});

const customerSlice = createSlice({
    name: "customers",
    initialState: entityAdapter.getInitialState(),
    reducers: {
        entityAddMany: entityAdapter.addMany,
    }
})
export const { entityAddMany: addCustomers } = customerSlice.actions;
export const { selectAll: selectCustomers } = entityAdapter.getSelectors((state: RootState) => state.customers)

export default customerSlice;