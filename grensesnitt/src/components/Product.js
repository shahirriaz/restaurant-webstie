import React from "react";
import { Button } from "./Button";
import "./Menu.css";
import { useStateValue } from "../StateProvider";

function Product({ typeOfProduct, title, desc, price }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        title: title,
        desc: desc,
        price: price,
      },
    });
    // console.log("kk")
  };

  return (
    <div className={`${typeOfProduct}-item`}>
      <h3>{title}</h3>
      <p>{desc}</p>
      <p>{price}</p>
      <Button
        className="btns"
        buttonStyle="btn--outline"
        buttonSize="btn--large"
        onClick={addToBasket}
      >
        Legg til
      </Button>
    </div>
  );
}

export default Product;