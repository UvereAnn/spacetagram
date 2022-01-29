import React from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap';

const Navigation = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="success" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand id='navbrand'>Spacestagram</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className='nav'>
              <Nav.Link href="#" className='nav-link'>Home</Nav.Link>
              <Nav.Link href="#" className='nav-link'>About</Nav.Link>
              <Nav.Link href="#" className='nav-link'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
    </Navbar>
    </div>
  )
}

export default Navigation
