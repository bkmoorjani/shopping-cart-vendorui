import Navbar from "react-bootstrap/esm/Navbar";

const AppBarBrand = () => {

    return <Navbar.Brand href="#home">
        <img
            alt=""
            src="./assets/MLogo.jpg"
            width="30"
            height="30"
            className="d-inline-block align-top"
        />{' '}
        Moorjani Inc
    </Navbar.Brand>
}

export default AppBarBrand

