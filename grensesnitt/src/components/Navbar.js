import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
    /* you can also use 'auto' behaviour
       in place of 'smooth' */
  });
};

const scrollToMenu = () => {
  scroller.scrollTo("menu-container", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

const scrollToAboutUs = () => {
  scroller.scrollTo("about", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  });
};

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <ul className={click ? "nav-menu-1 active" : "nav-menu-1"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(closeMobileMenu, scrollToAboutUs)}
              >
                OM OSS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={(closeMobileMenu, scrollToMenu)}
              >
                MENY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-links"
                onClick={(closeMobileMenu, scrollToTop)}
              >
                <i class="fas fa-shopping-cart"></i>
              </Link>
            </li>
          </ul>
          <Link to="/" onClick={(closeMobileMenu, scrollToTop)}>
            <img
              src="images/pizzeria_bella.png"
              id="logo"
              alt="Pizzeria Bella logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu-2 active" : "nav-menu-2"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i class="fab fa-instagram"></i>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                <i class="fab fa-facebook"></i>
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">BESTILL</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
