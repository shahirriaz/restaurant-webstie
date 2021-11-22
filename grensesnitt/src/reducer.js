export const initialState = {
  basket: [],
};

export const MARGARITAOccurrences = (basket) => {
  return basket?.reduce((a, b) => (a += b.title == "MARGARITA" ? 1 : 0), 0);
};

export const KYLLINGOccurrences = (basket) => {
  return basket?.reduce((a, b) => (a += b.title == "KYLLING" ? 1 : 0), 0);
};

export const BIFFOccurrences = (basket) => {
  return basket?.reduce((a, b) => (a += b.title == "BIFF" ? 1 : 0), 0);
};

export const margaritaPrice = (basket) => {
  const margaritaArray = basket.filter((title) => title.title === "MARGARITA");
  const reducedMargaritaPrice = margaritaArray.reduce(
    (amount, item) => item.price + amount,
    0
  );
  return reducedMargaritaPrice;
};

export const kyllingPrice = (basket) => {
  const kyllingArray = basket.filter((title) => title.title === "KYLLING");
  const reducedkyllingPrice = kyllingArray.reduce(
    (amount, item) => item.price + amount,
    0
  );
  return reducedkyllingPrice;
};

export const biffPrice = (basket) => {
  const biffArray = basket.filter((title) => title.title === "BIFF");
  const reducedBiffPrice = biffArray.reduce(
    (amount, item) => item.price + amount,
    0
  );

  return reducedBiffPrice;
};

export const getTotalPrice = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const itemIndex = state.basket.findIndex(
        (basketItem) => basketItem.id == action.item.id
      );

      let updatedBasket = [...state.basket];

      if (itemIndex >= 0) {
        // console.log("lloo");
        state.basket[itemIndex].cartQuantity += 1;
      } else {
        // console.log("neii")
        const tempProduct = { ...action.item, cartQuantity: 1 };
        updatedBasket.push(tempProduct);
      }
      return {
        ...state, //just remember to always return the current global state
        //spread the current basket state and add a new item
        basket: updatedBasket,
      };

    case "REMOVE_FROM_BASKET":
      //fint the first ELEMENT that matches the id (condition)
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id == action.id
      );
      //creating a copy of the state
      let newBasket = [...state.basket];

      //if index is greater than 0 than it found a match
      //pass the index and splice it by one
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in basket!`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    default:
      return state;
  }
};

export default reducer;
