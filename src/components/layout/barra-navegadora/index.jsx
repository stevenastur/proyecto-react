import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CartContext } from "../../../context/cart-context";
import { NavLink } from "react-router-dom";
import "./style.css"

const BarraNavegadora = () => {
  const { cart } = useContext(CartContext);

  const quantity = Array.isArray(cart) ? cart.reduce((acc, curr) => acc + curr.quantity, 0) : 0;

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Tienda</Navbar.Brand>
          <Nav>
            <NavLink className="links" to="/">Vinos</NavLink>
            <NavLink className="links" to="/carrito">
              Carrito: <span>{quantity}</span>{" "}
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export { BarraNavegadora };