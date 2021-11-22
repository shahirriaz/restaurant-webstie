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
  getTotalPrice,
} from "../reducer";

function CartItems() {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    console.log(basket);
    // dispatch the removal of item into the data layer
    // --> make reducer make it happen :D
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: basket[0]?.id, //only need id of product to remove it right? PROBLEEEEEEM
    });
  };
  const addToBasketWithPlusSign = () => {
    //IF THERE IS SOMETHING IN BASKET, JUST MULTIPLY IT
  };

  //   <p className="cart-item">{MARGARITAOccurrences(basket)}</p>
  // <p className="cart-item">{KYLLINGOccurrences(basket)}</p>
  // <p className="cart-item">{BIFFOccurrences(basket)}</p>

  //         <p className="cart-item">kr {margaritaPrice(basket)}</p>
  // <p className="cart-item">kr {kyllingPrice(basket)}</p>
  // <p className="cart-item">kr {biffPrice(basket)}</p>

  return (
    <div className="cart-container">
      <div className="cart-header">
        <div className="cart-header-element">
          <h4>PLATE</h4>
        </div>
        <div className="cart-header-element">
          <h4>QUANTITY</h4>
        </div>
        <div className="cart-header-element">
          <h4>PRICE</h4>
        </div>
      </div>
      {basket.map((item, index) => (
        <div className="list-product">
          <CheckoutProduct
            key={index}
            id={item.id}
            title={item.title}
            price={item.price}
          />
        </div>
      ))}
      <div className="checkout">
        <Link to="/Order">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            <span>CHECKOUT - Total kr {getTotalPrice(basket)}-,</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default CartItems;
