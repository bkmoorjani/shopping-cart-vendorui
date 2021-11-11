import Nav from "react-bootstrap/esm/Nav";
import Navbar from "react-bootstrap/esm/Navbar";
import { LinkContainer } from 'react-router-bootstrap'

const AppBarLinks = () => {

    return <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <LinkContainer to="/vieworders">
                <Nav.Link >View Orders</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/viewcustomers">
                <Nav.Link>View Customers</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/manageproducts">
                <Nav.Link>Manage Products</Nav.Link>
            </LinkContainer>
        </Nav>
    </Navbar.Collapse>
}

export default AppBarLinks

