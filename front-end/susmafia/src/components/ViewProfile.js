import React,{useState, useEffect} from 'react'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMessageAlt } from 'react-icons/bi';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import NavbarComponent from './NavbarComponent';
import LeetCoin from './../assets/LeetCoin.png';
import DhairyaSq from './../assets/dhairyaSq.png';
import './ViewProfile.css';

function ViewProfile({user}) {

  const [userData,setUserData] = useState([])

  const callAPI = ()=>{
      const url = 'http://localhost:8000/api/user/get-linkedin-data/'+user.id
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
        setUserData(data)
      console.log(data)})  
      .catch(err=>console.log(err))
  }

  useEffect(()=>{
      callAPI()
  },[])

  return (
    <div style={{ background: '#C7D36F' }}>
      <NavbarComponent />
      <div
        style={{
          background: '#FCF9C6',
          color: '#4B5D67',
          marginTop: '2rem',
          paddingBottom: 'auto',
        }}
        className="container view_profile_container mb-5"
      >
        <div className="row mt-3">
          <div className="mt-3 col-sm-12 col-md-4 text-center">
            <img src={DhairyaSq} height="auto" width={350} alt="" />
          </div>
          <div className="mt-3 col-sm-12 col-md-8">
            <h2>{user.name}</h2>
            <p className="field_name">Technology Entrepreneur</p>

            <h4>
              <b>Mafioso Score:</b> 1400
            </h4>

            <h4>
              <b>Badges:</b>
              <br />
              <div
                style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}
              >
                <img
                  style={{ width: '3rem', height: 'auto' }}
                  src="https://leetcode.com/static/images/LeetCode_Cup.png"
                />
                <img
                  style={{ width: '3rem', height: 'auto' }}
                  src="https://leetcode.com/static/images/badges/dcc-2022-3.png"
                />
              </div>
            </h4>
            <br />

            <h4>
              <b>Skills:</b>
              {
                    userData.TopSkills?.map((skill)=>{
                      return(
                        <p>{skill} </p>
                      )
                      
                    })}
            </h4>
            <br />

            <a
              href="https://react-chatapp-frontend.herokuapp.com/"
              style={{ border: 'none', textDecoration: 'none' }}
              className="row-col-6 profile_contacts p-2"
            >
              <BiMessageAlt color="rgb(77, 195, 255);" />
              Send Message
            </a>
            <span className="muted">
              <b>User Ratings:</b> 8.6
              <AiFillStar color="#4B5D67" />
            </span>
            <br />
            <label style={{ justifyContent: 'center', marginTop: '0.7rem' }}>
              -10{' '}
              <img style={{ width: '1.2rem', height: 'auto' }} src={LeetCoin} />
              every time
            </label>
            {/* <h4 className="mt-5 row-col-6">
            <BiMessageAlt /> Send Message
            <button className=" row-col-6 profile_contacts p-2">
              <FaClipboardCheck color="rgb(77, 195, 255);" />
              Contacts
            </button>
          </h4> */}
          </div>
        </div>
        <div className="row ">
          <div className="mt-4 col-sm-12 col-md-4">
            <h4 className="mt-3">
              What Other Entrepreneurs say? <hr />
            </h4>
            {/* <h2>Spotify Newyork</h2> */}
            <div className="talk-bubble tri-right round border right-top">
              <div className="talktext">
                <p>Very Helpful and down to earth</p>
              </div>
            </div>
            <div className="talk-bubble tri-right round border right-top">
              <div className="talktext">
                <p>He's been a big inspiration for me to start my business</p>
              </div>
            </div>
          </div>
          <div className="mt-4 col-sm-12 col-md-8">
            <h3 className="mb-3">
              <FaAddressCard /> About
            </h3>
            <div className="row mb-5">
              <div className="col-4">Phone: </div>
              <div className="col-8">{user.mobileNo}</div>
              <div className="col-4">Location: </div>
              <div className="col-8">Newyork City</div>
              <div className="col-4">E-Mail: </div>
              <div className="col-8">{user.email}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewProfile;
