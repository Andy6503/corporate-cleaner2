import React from "react";
import Logo from '../assets/Logo.png'
import Image  from "react-bootstrap/Image";

function Homepage(){
   
    
   
    return(
        <>
        <h1>Welcome to Corporate Cleaner</h1>
            <p className="homepage"> Manage your workforce and all related information with this all purpose workforce sorting website!</p>
            <p className="homepage-2"> Let us do the work so you can say goodbye to endless confusing Excel charts and hard to nagivgate User Interfaces! </p>
            <div className="logo-2div">
            <Image src={Logo} rounded className="logo-2"></Image>
            </div>
        </>
    );
}

export default Homepage