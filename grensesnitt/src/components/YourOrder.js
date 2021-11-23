import React, { useState, useEffect } from "react";
import "./YourOrder.css";
import "../App.css";
import { Button } from "./Button";
import { useStateValue } from "../StateProvider";
import OrderedItems from "./OrderedItems";
import { useHistory } from "react-router-dom";

function YourOrder() {
  const history = useHistory();
  const [{ cartTotalAmount, userDetails, basket }, dispatch] = useStateValue();
  const { name } = userDetails;

  console.log(basket);

  const calculateMVA = (cartTotalAmount) => {
    const mva = (cartTotalAmount * 15) / 100;
    return mva;
  };

  return (
    <div className="confirmation-container">
      <div className="summary-container">
        <h1>Thanks for your order!</h1>
        <h3 className="greeting">Hi {name || "(name)"}, </h3>
        <h3>Your order has been received!</h3>
        <div className="ordered-items">
          {basket.map((basketItem) => {
            return (
              <OrderedItems
                title={basketItem.title}
                cartTotalQuantity={basketItem.cartQuantity}
                price={basketItem.price}
              />
            );
          })}
        </div>
        <div className="line"></div>
        <div className="sum-total">
          <h4>Sub-Total: {cartTotalAmount},-</h4>
          <h4>MVA: 15%</h4>
          <h4 className="total">
            Total: {cartTotalAmount + calculateMVA(cartTotalAmount)},-
          </h4>
        </div>
        <div className="line"></div>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={() => history.replace("/")}
        >
          Exit
        </Button>
      </div>
    </div>
  );
}

export default YourOrder;
