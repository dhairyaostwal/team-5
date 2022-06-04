import React from 'react';
import './NeedsHelp.css';
const NeedHelp = () => {
  return (
    <div className="NeedsHelp--Container">
      <h1>Helpdesk</h1>

      <p>
        <h3>
          <a href="">Rahul</a> requires help from an Energy Investor
        </h3>
        <br />
        <h3>
          <a href="">Arjun</a> needs help in the ML field
        </h3>
        <br />
        <h3>
          <a href="">Jack</a> is looking for employes in React feild
        </h3>
        <br />
      </p>
      <center>
        <button
          style={{
            backgroundColor: 'purple',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '1.2rem',
            padding: '1% 3%',
            fontWeight: '600',
          }}
        >
          See More...
        </button>
      </center>
    </div>
  );
};

export default NeedHelp;
