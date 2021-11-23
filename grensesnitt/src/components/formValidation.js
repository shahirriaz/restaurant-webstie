const formValidation = (userDetails) => {
  let errors = {};


  if (!userDetails.email) {
    errors.email = "E-mail is required ";
  } else if (!/\S+@\S+\.\S+/.test(userDetails.email)) {
    errors.email = "E-mail is invalid";
  }

  if (!userDetails.cardNr) {
    errors.cardNr = "Card number is required";
  }

  if (!userDetails.expireDate) {
    errors.expireDate = "Expiration date is required";
  }

  if (!userDetails.securityCode) {
    errors.securityCode = "Security code is required";
  }

  if (!userDetails.zip) {
    errors.zip = "ZIP code is required";
  }

  return errors;
};

export default formValidation;
