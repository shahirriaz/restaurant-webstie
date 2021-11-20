import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./CartItems.css";
import { Link } from "react-router-dom";

function CartItems() {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-header-element">
          <h4>PLATE</h4>
          <p className="cart-item">MARGHERITA</p>
          <p className="cart-item">POLLO</p>
          <p className="cart-item">COCA COLA</p>
        </div>

        <div className="cart-header-element">
          <h4>QUANTITY</h4>
          <p className="cart-item">1</p>
          <p className="cart-item">2</p>
          <p className="cart-item">1</p>
        </div>

        <div className="cart-header-element">
          <h4>PRICE</h4>
          <p className="cart-item">149,-</p>
          <p className="cart-item">298,-</p>
          <p className="cart-item">49,-</p>
        </div>
      </div>
      <div className="checkout">
        <Link to="/Order">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            CHECKOUT
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CartItems;
