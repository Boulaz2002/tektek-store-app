import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';



const Layout = () => {
  const bennn = {
    paddingLeft : "300px"
}
  return (
    < >
      <Navbar bg="light" variant="light" >
        <Container>
          <Nav className="me-auto" >
            <Nav.Link href="/"  >Home</Nav.Link>
            <Nav.Link href="/addProducts">Add Products</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Outlet />
    </>
  )
};

export default Layout;