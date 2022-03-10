import React from "react";
import {NavLink} from 'react-router-dom'
import Search from './Search.js'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import OwlLogo from '../assets/News-Owl-logos_white.png'

function NavBar( {onSearch, handleArticleRefresh} ){
    
    return (
    <>
        <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/home" onClick={handleArticleRefresh}>
                <img src={OwlLogo} className="logo" alt="News Owl Logo"/>
                    Home
                </Navbar.Brand>
                <Nav className="me-auto">
                <Nav.Link href="/submit-article">
                    Submit an Article
                </Nav.Link>
                <Nav.Link href="/favorites">
                    Favorites
                </Nav.Link>    
                </Nav>
                <div>
                    <Search onSearch={onSearch}/>
                </div>
        </Navbar>
        
    </>
    )
}

export default NavBar;