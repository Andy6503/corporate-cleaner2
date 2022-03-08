import React from "react";
import {NavLink} from 'react-router-dom'
import Search from './Search.js'

function NavBar( {onSearch} ){
    
    return (
    <>
        <NavLink exact to="/home">
            Home
        </NavLink>
        <NavLink exact to="/submit-article">
            Submit an Article
        </NavLink>
        <NavLink exact to="/favorites">
            Favorites
        </NavLink>
        <div>
            <Search onSearch={onSearch}/>
        </div>
    </>
    )
}

export default NavBar;