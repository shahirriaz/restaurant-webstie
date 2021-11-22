import React from "react";
import "./Payment.css";
import "../App.css";
import { Button } from "./Button";
import { useStateValue } from "../StateProvider";


function Payment() {
    const [{ cartTotalAmount }, dispatch] =
      useStateValue();

  const calculateMVA = (cartTotalAmount) => { 
    const mva = cartTotalAmount * 15 / 100
    return mva;
  }

  return (
    <div className="container">
      <div className="flex-container">
        <h1>Payment Details</h1>
        <p>Complete your purchase by providing you payment details.</p>
        <div className="info">
          <label for="email"> Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="example@mail.com"
          />
          <label for="card"> Card details</label>
          <input
            type="text"
            id="card-numer"
            name="card-numer"
            placeholder="&#xf09d; Card number"
          />
          <label for="expiry-date"> Expiry date</label>
          <input
            type="text"
            id="expiry-date"
            name="expiry-date"
            placeholder="MM/YY"
          />
          <label for="security-code"> Security code</label>
          <input
            type="text"
            id="security-code"
            name="security-code"
            placeholder="CVC"
          />
          <label for="zip"> ZIP/Postal code</label>
          <input type="text" id="zip" name="zip" />
        </div>

        <div className="summary">
          <h3>Subtotal</h3>
          <h3>{cartTotalAmount},-</h3>
          <h3>MVA (15%)</h3>
          <h3>{calculateMVA(cartTotalAmount)},-</h3>
          <h3 className="total">Total</h3>
          <h3 className="total">
            {cartTotalAmount + calculateMVA(cartTotalAmount)},-
          </h3>
        </div>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Pay {cartTotalAmount + calculateMVA(cartTotalAmount)},-
        </Button>
      </div>
    </div>
  );
}

export default Payment;