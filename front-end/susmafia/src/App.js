import './App.css';
import Landing from './Landing';
import NavbarComponent from './components/Navbar';

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Landing />

      {/* <Routes>
      <Route path="viewprofile" element={<Viewprofile/>}/>
    </Routes> */}
    </div>
  );
}

export default App;
