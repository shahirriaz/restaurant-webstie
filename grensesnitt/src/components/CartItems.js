import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./CartItems.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import {
  MARGARITAOccurrences,
  KYLLINGOccurrences,
  BIFFOccurrences,
  margaritaPrice,
  kyllingPrice,
  biffPrice,
} from "../reducer";


function CartItems() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-header-element">
          <h4>PLATE</h4>
          <p className="cart-item">MARGHERITA</p>
          <p className="cart-item">KYLLING</p>
          <p className="cart-item">BIFF</p>
        </div>

        <div className="cart-header-element">
          <h4>QUANTITY</h4>
          <p className="cart-item">{MARGARITAOccurrences(basket)}</p>
          <p className="cart-item">{KYLLINGOccurrences(basket)}</p>
          <p className="cart-item">{BIFFOccurrences(basket)}</p>
        </div>

        <div className="cart-header-element">
          <h4>PRICE</h4>
          <p className="cart-item">{margaritaPrice(basket)}</p>
          <p className="cart-item">{kyllingPrice(basket)}</p>
          <p className="cart-item">{biffPrice(basket)}</p>
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
