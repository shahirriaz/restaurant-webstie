import React, { useState, useEffect } from "react";
import "./Payment.css";
import "../App.css";
import { Button } from "./Button";
import { useStateValue } from "../StateProvider";
import formValidation from "./formValidation";

function Payment() {
  const [{ cartTotalAmount }, dispatch] = useStateValue();

  //User State
  const [userDetails, setUserDetails] = useState({
    email: "",
    cardNr: "",
    expireDate: "",
    securityCode: "",
    zip: "",
  });

  const calculateMVA = (cartTotalAmount) => {
    const mva = (cartTotalAmount * 15) / 100;
    return mva;
  };

  const [processing, setProcessing] = useState("");

  //Form validation
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  //Error handling
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(formValidation(userDetails));
    setDataIsCorrect(true);
  };

  /**Form name and value attributes */
  let name, value;

  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(value);

    setUserDetails({
      ...userDetails,
      [name]: value,
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      setProcessing(true);
      dispatch({
        type: "MAP_USER",
        useDetails: userDetails,
      });
    }

    if (processing) {
      alert("Take me to Your Orders page");
    }
  }, [errors]);

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
            value={userDetails.email}
            onChange={handleChange}
            placeholder=" example@mail.com"
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <label for="card"> Card details</label>
          <i class="fas fa-credit-card"></i>
          <input
            type="text"
            /*typo*/
            id="card-numer"
            name="cardNr"
            value={userDetails.cardNr}
            onChange={handleChange}
            placeholder="      Card number"
          />
          {errors.cardNr && <p className="error">{errors.cardNr}</p>}

          <label for="expiry-date"> Expiry date</label>
          <input
            type="text"
            id="expiry-date"
            name="expireDate"
            value={userDetails.expireDate}
            onChange={handleChange}
            placeholder=" MM / YY"
          />
          {errors.expireDate && <p className="error">{errors.expireDate}</p>}
          <label for="security-code"> Security code</label>
          <input
            type="text"
            id="security-code"
            name="securityCode"
            value={userDetails.securityCode}
            onChange={handleChange}
            placeholder=" CVC"
          />
          {errors.securityCode && (
            <p className="error">{errors.securityCode}</p>
          )}

          <label for="zip"> ZIP/Postal code</label>
          <input
            type="text"
            value={userDetails.zip}
            onChange={handleChange}
            id="zip"
            name="zip"
          />
          {errors.zip && <p className="error">{errors.zip}</p>}
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
          onClick={handleSubmit}
        >
          Pay {cartTotalAmount + calculateMVA(cartTotalAmount)},-
        </Button>
      </div>
    </div>
  );
}

export default Payment;
