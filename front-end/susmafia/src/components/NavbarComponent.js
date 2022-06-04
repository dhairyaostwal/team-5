import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="">Team -5</Navbar.Brand>
          <Nav className="mx -auto">
            <Link className="nav-link" to="/redeempoints">
              Redeeem points
            </Link>
            <Link className="nav-link" to="/viewprofile">
              View Profile
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
