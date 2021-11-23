import React, { useState, useEffect } from "react";
import "./YourOrder.css";
import "../App.css";
import { Button } from "./Button";
import Product from "./Product";

function YourOrder() {
  return (
    <div className="confirmation-container">
      <div className="summary-container">
        <h1>Thanks for your order!</h1>
        <h3 className="greeting">Hi (name), </h3>
        <h3>Your order has been received!</h3>
        <div className="ordered-items">
          <h4>Margarita</h4>
          <h4>1</h4>
          <h4>149,-</h4>
        </div>
        <div className="line"></div>
        <div className="sum-total">
          <h4>Sub-Total: 149,-</h4>
          <h4>MVA: 15%</h4>
          <h4 className="total">Total: 165,-</h4>
        </div>
        <div className="line"></div>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Exit
        </Button>
      </div>
    </div>
  );
}

export default YourOrder;
