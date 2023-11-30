import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";  // Change to NavLink

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
        marginLeft: "50px",
        height: "145px",
    };

    return (
        <>
            <Navbar bg="white" data-bs-theme="dark">
                <Container>
                    {/* Use NavLink instead of Link */}
                    <NavLink to="/" style={LogoStyle}>
                        <img
                            src={logo1}
                            width="200"
                            height="158"
                            alt="Logo"
                        />
                    </NavLink>

                    <Nav style={{
                        justifyContent: "flex-end",
                        marginTop: "90px"
                    }}>
                        <Nav.Link>
                            <NavLink to="/" style={linkStyle}> Home </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/register" style={linkStyle}>Register</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/advantages" style={linkStyle}>Advantages</NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink to="/how-it-works" style={linkStyle}>HIW</NavLink>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;
