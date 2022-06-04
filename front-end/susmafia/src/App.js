import './App.css';
import Landing from './Landing';
import { Navbar,Container,Nav, NavLink } from 'react-bootstrap';
import {Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand to="">Team -5</Navbar.Brand>
      <Nav className="mx -auto">
        <NavLink className='nav-link' to='redeempoints'>Redeeem points</NavLink>
        <NavLink className='nav-link' to='viewprofile'>View Profile</NavLink>
      </Nav>
      </Container>
    </Navbar>
      <Landing />


    {/* <Routes>
      <Route path="viewprofile" element={<Viewprofile/>}/>
    </Routes> */}

    </div>
  );
}

export default App;
