import React from 'react'
 import "./Header.css"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
//  import logo from "./logo.png";
import { Link } from "react-router-dom";

function Header() {
    return (
      <div className="header">
        <div className="header__left">
          <h1>ABOUT US</h1>
          <Link to="about">About</Link>
          <h1>MENU</h1>
          <RestaurantMenuIcon />
        </div>
        <div className="header__middlde">
          {/* <img className="header__middlde__logo" src={logo} alt="Pizza" /> */}
        </div>
      </div>
    );
}

export default Header
