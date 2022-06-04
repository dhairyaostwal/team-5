import './App.css';
import Landing from './Landing';
import NavbarComponent from './components/Navbar';

import Login from './Login';
import Signup from './Signup';

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>   
      <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
