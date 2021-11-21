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
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, //just remember to always return the current global state
        //spread the current basket state and add a new item
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
