import {Navbar, Nav} from 'react-bootstrap'
import React from 'react';

export default function NavBar(){
  return(
    <div>
      <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Brand href="/">Mike Yue</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/about">About Me</Nav.Link>
          <Nav.Link href="/experiences">Work Experience</Nav.Link>
          <Nav.Link href="/hobbies">Hobbies</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}
