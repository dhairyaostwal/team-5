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
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Signup/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
    </div>
  </Router>
  );
}

export default App;
