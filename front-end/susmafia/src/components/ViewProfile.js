import React from 'react';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BiMessageAlt } from 'react-icons/bi';
import { FaClipboardCheck } from 'react-icons/fa';
import { FaAddressCard } from 'react-icons/fa';
import NavbarComponent from './NavbarComponent';
import './ViewProfile.css';

function ViewProfile() {
  return (
      <>
      <NavbarComponent/>
    <div className="container view_profile_container  m-5">
      <div className="row mt-3">
        <div className="mt-3 col-sm-12 col-md-4 text-center">
          <img
            src="data:image/jpeg;base64,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"
            height={300}
            width={250}
            alt=""
          />
        </div>
        <div className="mt-3 col-sm-12 col-md-8">
          <h2>Rahul Bose</h2>
          <p className="field_name">Technology Entrepreneur</p>
          <h4 className="muted">
            <b>Ratings:</b> 8.6 <AiFillStar color="rgb(77, 195, 255)" />
            <AiFillStar color="rgb(77, 195, 255)" />
            <AiFillStar color="rgb(77, 195, 255)" />
            <AiFillStar color="rgb(77, 195, 255)" />
            <AiOutlineStar />
          </h4>

          <h4>
            <b>Badges:</b>
            <br />
            <div style={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
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

          <h4>
            <b>Skills:</b> App Building, Teamwork, Entrepreneurship
          </h4>

          <button
            style={{ border: 'none' }}
            className="row-col-6 profile_contacts p-2"
          >
            <BiMessageAlt color="rgb(77, 195, 255);" />
            Send Message
          </button>

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
          <h5 className="mt-3 text-muted">
            WORK <hr />
          </h5>
          <h2>Spotify Newyork</h2>
          <p>
            170 William Street<br></br>
            New york, NY 10038-312-51
          </p>
        </div>
        <div className="mt-4 col-sm-12 col-md-8">
          <h3 className="mb-3">
            <FaAddressCard /> About
          </h3>
          <div className="row mb-5">
            <div className="col-4">Phone: </div>
            <div className="col-8">+919658458755</div>
            <div className="col-4">Location: </div>
            <div className="col-8">Newyork City</div>
            <div className="col-4">E-Mail: </div>
            <div className="col-8">hasan@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default ViewProfile;
