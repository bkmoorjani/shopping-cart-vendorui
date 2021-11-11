import React from "react";
import {
    //BrowserRouter as Router,
    Switch,
    Route
   // Link
} from "react-router-dom";
import ManageProducts from "../ManageProducts/ManageProducts";
import ViewCustomers from "../ViewCustomers/ViewCustomers";
import ViewOrders from "../ViewOrders/ViewOrders";


const AppBarRouting = () => {


    return <Switch>


            <Route path="/vieworders">
                <ViewOrders />
            </Route>
            <Route path="/viewcustomers">
                <ViewCustomers />
            </Route>
            <Route path="/manageproducts">
                <ManageProducts />
            </Route>
            {/* <Route exact path="/">
                <ViewOrders />
            </Route> */}
        </Switch>
    
}

export default AppBarRouting;