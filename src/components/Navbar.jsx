import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import Logo from "../images/pandora.png";
import CarWidget from "./CarWidget";
import {Link} from "react-router-dom";
import "./styles/navbar.css";

function Navegador() {
  return (
    <Navbar expand="lg" variant="dark" style={{backgroundColor: "#0b0b0b"}} >
      <Container fluid>
        <Navbar.Brand>
          <Link to={`/`}><img src={Logo} alt="Logo del site" className="logo" /></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end text-center">
          <Nav>
            <Link className="nav-link" to={`/`}>Inicio</Link>
            <Link className="nav-link" to={`/contacto`}>Contacto</Link>
            <NavDropdown title="Categoria" id="basic-nav-dropdown">
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Anillo`}>Anillos</Link>  
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Aros`}>Aros</Link>
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Pulsera`}>Pulseras</Link>
              <Link className="nav-item dropdown dropdown-item" to={`/categoria/Cadena`}>Cadenas</Link>
            </NavDropdown>
            <CarWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navegador;