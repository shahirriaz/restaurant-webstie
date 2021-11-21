import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./CartItems.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function CartItems() {
  const [{ basket, user }, dispatch] = useStateValue();

  const MARGARITAOccurrences = basket?.reduce(
    (a, b) => (a += b.title == "MARGARITA" ? 1 : 0),
    0
  );
  const KYLLINGOccurrences = basket?.reduce(
    (a, b) => (a += b.title == "KYLLING" ? 1 : 0),
    0
  );
  const BIFFOccurrences = basket?.reduce(
    (a, b) => (a += b.title == "BIFF" ? 1 : 0),
    0
  );

  const margaritaArray = basket.filter((title) => title.title === "MARGARITA");
  const margaritaPrice = margaritaArray.reduce(
    (amount, item) => item.price + amount,
    0
  );

  const kyllingArray = basket.filter((title) => title.title === "KYLLING");
    const kyllingPrice = kyllingArray.reduce(
      (amount, item) => item.price + amount,
      0
    );

  const biffArray = basket.filter((title) => title.title === "BIFF");
    const biffPrice = biffArray.reduce(
      (amount, item) => item.price + amount,
      0
    );

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
          <p className="cart-item">{MARGARITAOccurrences}</p>
          <p className="cart-item">{KYLLINGOccurrences}</p>
          <p className="cart-item">{BIFFOccurrences}</p>
        </div>

        <div className="cart-header-element">
          <h4>PRICE</h4>
          <p className="cart-item">{margaritaPrice}</p>
          <p className="cart-item">{kyllingPrice}</p>
          <p className="cart-item">{biffPrice}</p>
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
