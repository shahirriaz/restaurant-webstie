import React, { useEffect } from "react";
import "../App.css";
import { Button } from "./Button";
import "./CartItems.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { getTotalPrice } from "../reducer";

function CartItems() {
  const [{ basket, cartTotalAmount }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: "GET_TOTALS",
    });

    // console.log("i ran")
  }, [basket]);

  const clearBasket = () => {
    dispatch({
      type: "CLEAR_BASKET",
    });
  };

  return (
    <div className="cart-container">
      {basket?.length === 0 ? (
        <div className="cart-header-element">
          <h1>Your basket is empty</h1>
        </div>
      ) : (
        <>
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
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              cartQuantity={item.cartQuantity}
            />
          ))}
        </>
      )}
      <div className="checkout">
        <Link to="/Order">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            {/* <span>CHECKOUT - Total kr {getTotalPrice(basket)}-,</span> */}
            <span>CHECKOUT - Total kr {cartTotalAmount}-,</span>
          </Button>
        </Link>
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          onClick={clearBasket}
        >
          <span>Clear basket</span>
        </Button>
      </div>
    </div>
  );
}

export default CartItems;
