import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BuyerRegistration from '../Buyer/BuyerRegistration';
import ArtisanRegistration from '../Artisan/ArtisanRegistration';
import logo from "../../images/logo.jpg";

const Register = () => {
  const [userRole, setUserRole] = useState(null);

  const handleRoleSelection = (role) => {
    setUserRole(role);
  };

  

  const buttonStyle = {
    display: 'block',
    width: '30%',
    padding: '20px',
    marginBottom: '20px',
    backgroundColor: '#51b884',  // Match the button background color of the home page
    color: 'black',  // Match the button text color of the home page
    fontSize: '130%',
    border: 'solid gray 2px',
    borderRadius: '10px',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#2d9ccf',
  };
  const logoStyle = {
    marginLeft: "55%",
    marginTop: "-29%",
   padding:"1px" ,// Adjust the height as needed
  marginBottom:"50px"
  
  };

  return (
    <div style={{ margin: "1px", backgroundColor: "beige", paddingLeft: "50px",marginTop:"4px" ,paddingRight:"55px", padding:"100px"}}>
      <div>
        {!userRole && (
          <div>
            <button
              style={buttonStyle}
              onClick={() => handleRoleSelection('buyer')}
            >
              Register as a Buyer
            </button>
            <button
              style={buttonStyle}
              onClick={() => handleRoleSelection('artisan')}
            >
              Register as an Artisan
            </button>
          </div>
        )}

        {userRole === 'buyer' && <BuyerRegistration />}
        {userRole === 'artisan' && <ArtisanRegistration />}

        {/* Link to the login page */}
        <p style={{ padding: '20px' }}>
          Already have an account?{' '}
          <Link to="/login" style={linkStyle}>
            Login here
          </Link>
        </p>
      </div>
      <img 
        src={logo} 
        alt="CarthageCraft Logo" 
        width="50%" 
        style={logoStyle} 
      />
    </div>
  );
};

export default Register;