import React, { useEffect } from "react";
import "../App.css";
import { useStateValue } from "../StateProvider";

function CheckoutProduct({ id, title, desc, price, cartQuantity }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id, //only need id of product to remove it right?
      title: title,
    });
    // dispatch the removal of item into the data layer
    // --> make reducer make it happen :D
  };

  //MINUS ICON
  const decreaseBasket = () => {
    dispatch({
      type: "DECREASE",
      id: id,
      title: title,
    });
  };

  //PLUS ICON
  const increaseBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        desc: desc,
        price: price,
      },
    });
  };

  return (
    <>
      <div className="cart-header-element">
        <p className="cart-item">{title}</p>
        <button onClick={removeFromBasket}>Remove</button>
      </div>
      <div className="cart-header-element">
        <p className="cart-item">
          <i
            onClick={decreaseBasket}
            style={{ paddingRight: "1rem" }}
            class="fas fa-minus-square"
          ></i>
          {cartQuantity}
          <i
            onClick={increaseBasket}
            style={{ paddingLeft: "1rem" }}
            class="fas fa-plus-square"
          ></i>
        </p>
      </div>
      <div className="cart-header-element">
        <p className="cart-item">{price * cartQuantity}</p>
      </div>
    </>
  );
}

export default CheckoutProduct;
