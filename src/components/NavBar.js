import React from "react";
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from '../assets/Logo.png'
import Image from 'react-bootstrap/Image'

function NavBar( ){
    
    return (
    <>
    <Navbar bg="dark" sticky="top" variant="dark">
        <Navbar.Brand href="/home">
            <Image src={Logo} className="logo" rounded alt="Money Maker Logo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/your-company">
                    View your Company
                </Nav.Link>
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