import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
function NavigationBar() {
    const linkStyle = {
        fontSize: "15px",
        color: "white",
        padding: "20px",
        margin: "10px",
      };
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
          <img
             src="logo1.jpg" 
              width="150"
              height="100"
            /></Navbar.Brand>

          <Nav style={{justifyContent:"flex-end",
        marginTop:"80px"

        }}>
          <Nav.Link>
             <Link to="/" style={linkStyle}> Home </Link> 
          </Nav.Link>
            <Nav.Link>
                <Link to ="/register" style={linkStyle}>Register</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to ="/advantages" style={linkStyle}>Advantages</Link>
            </Nav.Link>
            <Nav.Link>
                <Link to ="/how-it-works" style={linkStyle}>HIW</Link>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
  
  export default NavigationBar;
