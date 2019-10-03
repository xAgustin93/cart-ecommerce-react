import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from "../Cart";
import { ReactComponent as Logo } from "../../assets/svg/logo.svg";

import "./TopMenu.scss";

export default function TopMenu(props) {
  const { products, productsCart, getProductsCart } = props;

  return (
    <Navbar bg="dark" variant="dark" className="top-menu">
      <Container>
        <BrandNav />
        {/* <MenuNav /> */}
        <Cart
          products={products}
          productsCart={productsCart}
          getProductsCart={getProductsCart}
        />
      </Container>
    </Navbar>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
      <div>La casa de los helados</div>
    </Navbar.Brand>
  );
}

function MenuNav() {
  return (
    <Nav className="mr-auto">
      <Nav.Link href="#snacks">Aperitivos</Nav.Link>
      <Nav.Link href="#ice-cream">Helados</Nav.Link>
      <Nav.Link href="#pets">Mascotas</Nav.Link>
    </Nav>
  );
}
