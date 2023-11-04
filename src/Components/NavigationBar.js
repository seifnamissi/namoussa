import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
function NavigationBar() {
    const linkStyle = {
        textDecoration: "none",
        fontSize: "20px",
        color: "white",
        borderRight: "1px solid white",
        padding: "15px",
        marginRight: "15px",
      };
    
      return (
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Nav
              className="me-auto"
              style={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              <Nav.Link>
                 <Link to="/" style={linkStyle}> Home </Link> 
              </Nav.Link>

              <Nav.Link>
                <Link to="/register" style={linkStyle}> Register </Link>
              </Nav.Link>

               <Nav.Link>
                <Link to="/advantages" style={linkStyle}> Advantages </Link>
              </Nav.Link>
    
              <Nav.Link>
                <Link to="/HIW" style={linkStyle}> HIW </Link>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      );
    }
    
  
  export default NavigationBar;
