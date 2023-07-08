import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const BarraNavegadora = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tienda</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/vinos">Vinos</NavLink>
            <NavLink to="/carrito">Carrito</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { BarraNavegadora };
