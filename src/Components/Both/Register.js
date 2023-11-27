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

  const containerStyle = {
    maxWidth: '500px',
    padding: '30px',
    marginTop: '100px',
    fontFamily: 'sans-serif',
    backgroundColor: 'beige',
    backgroundSize:"100%",
    paddingLeft: '50px',  // Match the left padding of the home page
    paddingRight: '55px',  // Match the right padding of the home page
  };

  const buttonStyle = {
    display: 'block',
    width: '100%',
    padding: '20px',
    marginBottom: '10px',
    backgroundColor: '#51b884',  // Match the button background color of the home page
    color: 'black',  // Match the button text color of the home page
    fontSize: '130%',
    border: 'solid gray 2px',
    borderRadius: '4px',
    cursor: 'pointer',
  };

  const linkStyle = {
    color: '#2d9ccf',
  };

  return (
    <div style={containerStyle}>
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
    </div>
  );
};

export default Register;