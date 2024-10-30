import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function ColorSchemesExample() {
    return (
      <Navbar bg="primary" data-bs-theme="dark" className="position-fixed w-100">
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#hobbies">Hobbies</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
  }
export default ColorSchemesExample;




//import Navbar from 'react-bootstrap/Navbar';
//import { Link } from "react-router-dom";
/*function ColorSchemesExample() {
    return (
      <Navbar bg="primary" data-bs-theme="dark" className="position-fixed w-100">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/features">Features</Nav.Link>
              <Nav.Link as={Link} href="/pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
    );
  }
export default ColorSchemesExample;*/