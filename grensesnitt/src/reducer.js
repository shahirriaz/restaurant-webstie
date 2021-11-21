export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
   console.log(action)
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
