import React from "react";
import Container from "react-bootstrap/esm/Container";
import Navbar from "react-bootstrap/esm/Navbar";
import AppBarBrand from "../AppBarBrand/AppBarBrand";
import AppBarLinks from "../AppBarLinks/AppBarLinks";

const AppBarContainer = () => {
    return <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container>
            <AppBarBrand />
            <Navbar.Toggle aria-controls="basic-navbar-nav" style={{transform:"scale(0.8)"}} />
            <AppBarLinks />
        </Container>
    </Navbar>
}

export default AppBarContainer;