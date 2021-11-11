
/* import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row"; */
import AppBarContainer from "../AppBarContainer/AppBarContainer";
import AppBarRouting from "../AppBarRouting/AppBarRouting";
import {
    BrowserRouter as Router,
    /* Switch,
    Route,
    Link */
} from "react-router-dom";
import ViewOrders from "../ViewOrders/ViewOrders";


const ShoppingCartManager = () => {
    return <>
        <Router>
            <AppBarContainer />
            <AppBarRouting></AppBarRouting>
        </Router>
    </>
}

export default ShoppingCartManager