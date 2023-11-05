import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
function Home() {
    const buttonStyle={ background:"gray", cursor:"pointer", paddingLeft:"30px", paddingRight:"30px", marginTop:"60px"}
  return (
   
    <div style={{margin:"40px" }}>
        <br/>
        <h1> Buy and sell Tunisian Products <br/> without leaving your home.</h1>
        <br/>
        <p>  The only app that allows you to make money by selling your<br/> Tunisian products online and also makes it easy for tourists<br/> and customers to buy them</p>
        <Link to ="/register">
            <button style={buttonStyle}>Register</button>
        </Link>
        <img src=''></img>
  </div>
  );
  }

export default Home;