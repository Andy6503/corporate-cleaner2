import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/Logo.png'
import Image from 'react-bootstrap/Image'
import { NavDropdown } from "react-bootstrap";

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
            </NavDropdown>
                </Nav>
                <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text >
                            Signed in as: <a href="/account-details">Will Yu</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
            
    </Navbar>
    </>
    )
}

export default NavBar;