import React from 'react';
import {Navbar,Nav,NavDropdown } from 'react-bootstrap';
import logo from '../assets/logo.svg'
function NavBar() {
  return(
    <div>
      <Navbar  expand="lg" style={{backgroundColor:"#fff"}}>
      <Navbar.Brand href="#home">
      <img
          alt=""
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/create">crear pago</Nav.Link>
      <Nav.Link href="/pagos">ver pagos</Nav.Link>
      </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default NavBar;











