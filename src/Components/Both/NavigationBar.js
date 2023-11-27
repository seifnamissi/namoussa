import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import logo1 from "../../images/logo1.jpg";  // Adjust the import path

function NavigationBar() {
    const linkStyle = {
        fontSize: "15px",
        color: "gray",
        padding: "25px",
        margin: "0px"
    };
    const LogoStyle = {
        marginTop: "-5px",
        marginLeft:"50px",
        height:"145px",
     

    };
  
    return (
        <>
            <Navbar bg="white" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <div style={LogoStyle}>
                        <img
                            src={logo1}
                            width="200"
                            height="158"
                            alt="Logo"
                        />
                        </div>
                    </Navbar.Brand>

                    <Nav style={{
                        justifyContent: "flex-end",
                        marginTop: "90px"
                    }}>
                        <Nav.Link>
                            <Link to="/" style={linkStyle}> Home </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/register" style={linkStyle}>Register</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/advantages" style={linkStyle}>Advantages</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/how-it-works" style={linkStyle}>HIW</Link>
                        </Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
