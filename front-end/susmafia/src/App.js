import ViewProfile from './components/ViewProfile';
import Login from './Login';
import Contacts from './components/Contacts';
import Signup from './Signup';
import Landing from './Landing';
import LinkedInFileUpload from './components/LinkedInFileUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedeemPoints from './components/RedeemPoints';
import AdminPage from './AdminPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/redeempoints" element={<RedeemPoints />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/linkedinupload" element={<LinkedInFileUpload />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
