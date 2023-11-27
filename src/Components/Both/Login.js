import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [loginData, setLoginData] = useState({
    emailOrPhone: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Implement logic to handle login (send data to the server, validate, etc.)
    console.log('Login data:', loginData);
    // Redirect or perform other actions after successful login
  };

  const formStyle = {
    maxWidth: 'center',
    padding: '40px',
    border: '2px solid #51b884',
    borderRadius: '50px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
    margin:'200px',
    marginTop:'30px'
    
  };
  const labelStyle = {
    display: 'block',
    margin: '10px 0',
    
    
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    marginBottom: '10px',
  };

  const buttonStyle = {
    background: '#34bd78',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
   paddingRight: '80px',
   paddingLeft:'80px' ,
   marginTop:"50px",
   
  };

  return (
    <div>
      <form style={formStyle} onSubmit={handleLogin}>
      <h2 style={{ textAlign: 'center',  }}>Login</h2>
        <label style={labelStyle}>
          Email or Phone:
          <input
            type="text"
            name="emailOrPhone"
            value={loginData.emailOrPhone}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <label style={labelStyle}>
          Password:
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </label>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
        
          {/* Link to the registration page */}
      <p style={{ textAlign: 'center', marginTop: '30px' }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
      </form>

    
    </div>
  );
};

export default Login;