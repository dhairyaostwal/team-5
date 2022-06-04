import './App.css';
import Landing from './Landing';
<<<<<<< HEAD
import NavbarComponent from './components/Navbar';
import LinkedInFileUpload from './components/LinkedInFileUpload';

function App() {
  return (
    <div className="App">
      {/* <NavbarComponent /> */}
      {/* <Landing /> */}
      <LinkedInFileUpload />
      {/* <Routes>
      <Route path="viewprofile" element={<Viewprofile/>}/>
    </Routes> */}
=======
import ViewProfile from './components/ViewProfile';
import Login from './Login';
import Signup from './Signup';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import RedeemPoints from './RedeemPoints';
import AdminPage from './AdminPage';


function App() {
  return (
    <Router>   
      <div className="App">
      <Routes>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/landing" element={<Landing/> }/>
        <Route path="/redeempoints" element={<RedeemPoints/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
        <Route path="/viewprofile" element={<ViewProfile/>}/>
        <Route path="/" element={<Signup/>}/>
      </Routes>
>>>>>>> 83bc8361dbb6409b4bd31349b8b889c5601a41ea
    </div>
  </Router>
  );
}

export default App;
