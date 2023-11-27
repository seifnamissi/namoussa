import React, { useState } from 'react';

const BuyerRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword:'',
    profileImage: null,
  });

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
    maxWidth: '400px',
    padding: '20px',
    border: '2px solid #51b884',
    borderRadius: '20px',
    backgroundColor: '#f9f9f9',
    fontFamily: 'sans-serif',
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
    borderRadius: '4px',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <h2 style={{alignContent:'center'}}>Welcome to Customer Panel</h2>
      <label style={labelStyle}>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={inputStyle} />
      </label>
      <label style={labelStyle}>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={inputStyle} />
      </label>
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
  );
};

export default BuyerRegistration;