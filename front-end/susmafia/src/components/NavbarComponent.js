import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = () => {
  
  return (
    <div>
      <Navbar style={{ backgroundColor: 'green', color: '#fff' }}>
        <Container>
          <Navbar.Brand to="">Team -5</Navbar.Brand>
          <Nav className="mx -auto">
            <Link
              style={{ fontWeight: 600, color: '#fff' }}
              className="nav-link"
              to="/redeempoints"
            >
              Redeeem points
            </Link>
            <Link
              style={{ fontWeight: 600, color: '#fff' }}
              className="nav-link"
              to="/viewprofile"
            >
              View Profile
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
