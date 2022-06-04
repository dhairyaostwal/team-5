import ViewProfile from './components/ViewProfile';
import Login from './Login';
import Contacts from './components/Contacts';
import Signup from './Signup';
import Landing from './Landing';
import LinkedInFileUpload from './components/LinkedInFileUpload';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RedeemPoints from './components/RedeemPoints';
import AdminPage from './AdminPage';
import React,{useState} from 'react';

function App() {

  const [isLogin,setIsLogin] = useState(false)

  const [update,setUpdate] = useState(false)

  const [identity,setId] = useState(0)

  const [obj,setObj] = useState({})

  const [user,setUser]=useState({})

  const [token,setToken] = useState()
 

  const handleLogin=(data)=>{ 
    if (data.token !== "")
    {
        setIsLogin(true)
        setUser(data.user)
        setToken(data.token)
    }

    console.log(data)

  }

  const handleUpdate = (i,instance)=>{
    setUpdate(true)
    setId(i)
    setObj(instance)
  }
  
  const handleNoUpdate=()=>{
    setUpdate(false)
    setId(0)
    setObj({})
  }

  const handleLogout=()=>{
    setIsLogin(false)
    setUser({})

  }


  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login handleLogin={handleLogin}/>}/>
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
