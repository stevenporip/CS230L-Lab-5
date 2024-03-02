import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
const CustomNavBar = () => {
  return(
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Brand href="#home">NavBar</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <div className="d-flex">
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-2"/>
          </Form>
          <Button variant="outline-success" className="ml-2">Search</Button>
        </div>
    </Navbar>
  );
}

export default CustomNavBar;