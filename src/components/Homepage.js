import React from "react";
import Logo from "../assets/Logo.png";
import Image from "react-bootstrap/Image";
import "./Homepage.css";
function Homepage() {
  return (
    <>
      <div class="split left">
        <div class="centered">
          <h1>Welcome to Corporate Cleaner</h1>
          <p className="homepage">
            {" "}
            Manage your workforce and all related information with this all
            purpose workforce sorting website!
          </p>
          <p className="homepage-2">
            {" "}
            Let us do the work so you can say goodbye to endless confusing Excel
            charts and hard to nagivgate User Interfaces!{" "}
          </p>
        </div>
      </div>
      <div class="split right">
        <div class="centered">
          <div className="logo-2div">
            <Image src={Logo} rounded className="logo-2"></Image>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homepage;
