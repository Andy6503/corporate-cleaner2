import React from "react";
import Logo from '../assets/Logo.png'
import { NavDropdown, Navbar, Nav, Image } from "react-bootstrap";

function NavBar( ){
    
    return (
    <>
    <Navbar bg="dark" sticky="top" variant="dark">
        <Navbar.Brand href="/home">
            <Image src={Logo} className="logo" rounded alt="Money Maker Logo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                <NavDropdown title="View your Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="/your-employees">Employees</NavDropdown.Item>
            <NavDropdown.Item href="/your-managers">Managers</NavDropdown.Item>
            <NavDropdown.Item href="/your-supervisors">Supervisors</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/helpful-links"> Helpful Links</NavDropdown.Item>
            </NavDropdown>
                </Nav>
    </Navbar>
    </>
    )
}

export default NavBar;