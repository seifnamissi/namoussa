import React, { useState } from 'react';
import logo from "../../images/logo.jpg"; 


const BuyerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    address: '', // Add address field
    paymentInfo: '', // Add payment information field
    profileImage: null,
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      paymentOption: e.target.value,
    });
  }; 
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevData) => ({
      ...prevData,
      profileImage: file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement logic to handle form submission (e.g., send data to the server)
    console.log('Form submitted:', formData);
  };

  const formStyle = {
    maxWidth: '500px',
    padding: '30px',
    border: '2px solid #51b884',
    borderRadius: '30px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
    marginTop: '20px',
  };

  const labelStyle = {
    display: "block",
    margin: '15px 0',
  };

  const inputStyle = {
    width: '100%',
    padding: '8px',
    boxSizing: 'border-box',
    border: "2px solid #9fbbad",
    borderRadius: '10px',
    marginBottom: '9px',
  };

  const buttonStyle = {
    background: '#34bd78',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    marginLeft: "140px",
  };

  const logoStyle = {
    marginLeft: "55%",
    marginTop: "-29%",
    padding: "1px", // Adjust the height as needed
    marginBottom: "50px",
  };

  return (
    <body style={{ margin: "0 px", backgroundColor: "beige", paddingLeft: "50px", marginTop: "5px", paddingRight: "55px" }}>

      <form style={formStyle} onSubmit={handleSubmit}>
        <h2 style={{ alignContent: 'center' }}>Welcome to Customer Panel</h2>
        <label style={labelStyle}>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
        Address:
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          style={inputStyle}
        />
      </label>

      <div>
          <label>Payment Option:</label>
          <div>
            <input
              type="radio"
              id="atDelivery"
              name="paymentOption"
              value="atDelivery"
              checked={formData.paymentOption === 'atDelivery'}
              onChange={handleChange}
            />
            <label htmlFor="atDelivery">At Delivery</label>
          </div>
          <div>
            <input
              type="radio"
              id="creditCard"
              name="paymentOption"
              value="creditCard"
              checked={formData.paymentOption === 'creditCard'}
              onChange={handleChange}
            />
            <label htmlFor="creditCard">Credit Card</label>
          </div>
        </div>

        {/* Credit Card Number */}
        {formData.paymentOption === 'creditCard' && (
          <div>
            <label>Credit Card Number:</label>
            <input
              type="text"
              name="creditCardNumber"
              value={formData.creditCardNumber}
              onChange={handleInputChange}
            />
          </div>
        )}

        <label style={labelStyle}>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleInputChange} style={inputStyle} />
        </label>
        <label style={labelStyle}>
          Confirm Password:
          <input type="password" name="confirmPassword" value={formData.password} onChange={handleInputChange} style={inputStyle} />
        </label>
        <button type="submit" style={buttonStyle}>
          Register as a Buyer
        </button>
        <label style={labelStyle}>
          Profile Image:
          <input type="file" name="profileImage" onChange={handleImageChange} accept="image/*" />
        </label>
        
        
      </form>
     <p> <img
          src={logo}
          alt="CarthageCraft Logo"
          width="50%"
          style={logoStyle}
        /></p>
    </body>
  );
};

export default BuyerRegistration;