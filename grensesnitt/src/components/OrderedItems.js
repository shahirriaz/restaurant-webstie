import React from "react";

function OrderedItems({ title, cartTotalQuantity, price }) {
  return (
    <div>
      <h4>
        {cartTotalQuantity} {title}
      </h4>
      <h4></h4>
      <h4>Price: {price || "0"},-</h4>
    </div>
  );
}

export default OrderedItems;
