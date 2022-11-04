import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../images/pandora.png";
import CarWidget from "./CarWidget";
import "./styles/navbar.css";

function Navegador() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#0b0b0b"}} >
      <Container fluid>
        <Navbar.Brand>
          <img src={Logo} alt="Logo del site" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end text-center">
          <Nav>
            <Nav.Link href="#inicio">Inicio</Nav.Link>
            <Nav.Link href="#tienda">Tienda</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <NavDropdown.Item href="#oro">Oro</NavDropdown.Item>
              <NavDropdown.Item href="#plata">Plata</NavDropdown.Item>
              <NavDropdown.Item href="#acero">Acero</NavDropdown.Item>
            </NavDropdown>
            <CarWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;