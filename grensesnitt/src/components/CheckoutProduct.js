import React from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";


function CheckoutProduct({ title, desc, price }) {
    const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <div className="cart-header-element">
        <p className="cart-item">{title}</p>
      </div>
      <div className="cart-header-element">
        <p className="cart-item">
          <i
            // onClick={removeFromBasket}
            style={{ paddingRight: "1rem" }}
            class="fas fa-minus-square"
          ></i>
          0
          <i
            // onClick={addToBasketWithPlusSign}
            style={{ paddingLeft: "1rem" }}
            class="fas fa-plus-square"
          ></i>
        </p>
      </div>
      <div className="cart-header-element">
        <p className="cart-item">{price}</p>
      </div>
    </>
  );
}

export default CheckoutProduct;
