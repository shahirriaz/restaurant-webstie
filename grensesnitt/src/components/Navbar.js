import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { scroller } from "react-scroll";
import { useStateValue } from "../StateProvider";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
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
  const [width, setWidth] = useState(window.innerWidth);
  const [{ basket, cartTotalQuantity }, dispatch] = useStateValue();

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    const upDateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWidth(newWidth);
    };

    window.addEventListener("resize", upDateWindowDimensions);
    return () => {
      window.removeEventListener("resize", upDateWindowDimensions);
    };
  }, [width]);

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
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  scrollToAboutUs();
                }}
              >
                OM OSS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  scrollToMenu();
                }}
              >
                MENY
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/cart"
                className="nav-links"
                onClick={() => {
                  closeMobileMenu();
                  scrollToTop();
                }}
              >
                <i class="fas fa-shopping-cart"></i>
                {width < 960 ? cartTotalQuantity : ""}
                <p id="cart-counter">{cartTotalQuantity}</p>
              </Link>
            </li>
          </ul>
          <Link
            to="/"
            onClick={() => {
              closeMobileMenu();
              scrollToTop();
            }}
          >
            <img
              src="images/pizzeria_bella.png"
              id="logo"
              alt="Pizzeria Bella logo"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <Link to="/Order">
            {" "}
            {button && <Button buttonStyle="btn--outline">BESTILL</Button>}{" "}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
