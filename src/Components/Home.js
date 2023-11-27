import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.jpg"; 

function Home() {
  const logoStyle = {
    marginLeft: "55%",
    marginTop: "-35%",
   padding:"1px" // Adjust the height as needed
  };

  const buttonStyle = { 
    background: "lightgray", 
    border:"3px em solid",
    borderColor:" #3cb18e",
    cursor: "pointer", 
    paddingLeft: "30px", 
    paddingRight: "30px", 
    marginTop: "60px",
  };

  return (
    <div style={{ margin: "1px", backgroundColor: "beige", paddingLeft: "50px",marginTop:"4px" ,paddingRight:"55px"}}>
      <br/>
      <br />
      <h1>Buy and sell Tunisian Products <br /> without leaving your home.</h1>
      <br />
      <p>The only app that allows you to make money by selling your<br />Tunisian products online and also makes it easy for tourists<br />and customers to buy them</p>
     
      <Link to="/register">
        <button style={buttonStyle}>Register</button>
      </Link>
      <img 
        src={logo} 
        alt="CarthageCraft Logo" 
        width="50%" 
        style={logoStyle} 
      />
    </div>
  );
}

export default Home;