import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

const NavbarComponent = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="">Team -5</Navbar.Brand>
          <Nav className="mx -auto">
            <NavLink className="nav-link" to="redeempoints">
              Redeeem points
            </NavLink>
            <NavLink className="nav-link" to="viewprofile">
              View Profile
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
