import React from "react";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import {Image } from 'react-bootstrap';


function NavbarM(){
return (
    <>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><Image src="rtist-logo.png" alt="Image description" fluid width="100" height="100" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">products</Nav.Link>
            <NavDropdown title="Select Here" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sketches & Paintings</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Ornaments
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pottery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Gift Cards
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing">Contact us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}
export default NavbarM;