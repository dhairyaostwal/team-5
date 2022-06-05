import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavLink } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import image from '../assets/SusMafia.jpeg';

const NavbarComponent = () => {
  let navigate = useNavigate();
  const navigateToHome = () => {
    navigate('/landing'); 
  };
  return (
    <div>
      <Navbar style={{ backgroundColor: 'green', color: '#fff' }}>
        <Container>
          <Navbar.Brand
            style={{ cursor: 'pointer', fontWeight: '600', color: '#fff' }}
            onClick={navigateToHome}
          >
           <img src={image} width={40} height={40} alt="Logo" /> SusMafia
          </Navbar.Brand>
          <Nav className="mx -auto">
            <Link
              style={{ fontWeight: 600, color: '#fff' }}
              className="nav-link"
              to="/redeempoints"
            >

              Redeem Points
            </Link>
            <Link
              style={{ fontWeight: 600, color: '#fff' }}
              className="nav-link"
              to="/viewprofile"
            >
              View Profile
            </Link>
            <Link
              style={{ fontWeight: 600, color: '#fff' }}
              className="nav-link"
              to="/login"
            >
              Logout
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
