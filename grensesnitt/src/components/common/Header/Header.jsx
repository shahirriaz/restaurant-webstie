import React from 'react'
import "./Header.css"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
// import logo from "";

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <h1>ABOUT US</h1>
                <h1>MENU</h1>
                <RestaurantMenuIcon />
            </div>
            <div className="header__middlde">
                {/* <img src={logo} alt="Pizza" /> */}
            </div>

            
        </div>
    )
}

export default Header
