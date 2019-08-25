import {Nav, Navbar} from 'react-bootstrap'
import React from 'react';


export default function Navigation(){
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Navbar.Brand>Mike Yue</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#about">About Me</Nav.Link>
        <Nav.Link href="#exp">Technological Experiences</Nav.Link>
        <Nav.Link href="#hobbies">Hobbies</Nav.Link>
      </Nav>
    </Navbar>
  )
}
