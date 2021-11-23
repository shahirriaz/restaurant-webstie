import { toast } from "react-toastify";

export const initialState = {
  basket: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  userDetails: {},
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
        state.basket[itemIndex].cartQuantity += 1;
        toast.info(
          `Increased ${state.basket[itemIndex].title} cart quantity to ${state.basket[itemIndex].cartQuantity}`,
          {
            position: "bottom-left",
          }
        );
      } else {
        const tempProduct = { ...action.item, cartQuantity: 1 };
        updatedBasket.push(tempProduct);
        toast.success(`Added ${action.item.title} to your cart`, {
          position: "bottom-left",
        });
      }
      return {
        ...state, //just remember to always return the current global state
        //spread the current basket state and add a new item
        basket: updatedBasket,
      };

    case "REMOVE_FROM_BASKET":
      const nextCartItems = state.basket.filter(
        (cartItem) => cartItem.id !== action?.id
      );

      state.basket = nextCartItems;

      toast.error(`Removed ${action.title} from your cart`, {
        position: "bottom-left",
      });
      return {
        ...state,
        basket: state.basket,
      };
    case "DECREASE":
      const itemIndex2 = state.basket.findIndex(
        (basketItem) => basketItem.id === action.item.id
      );

      let updatedBasket2 = [...state.basket];

      if (state.basket[itemIndex2].cartQuantity > 1) {
        state.basket[itemIndex2].cartQuantity -= 1;
        toast.info(
          `Decreased ${action.item.title} cart quantity to ${state.basket[itemIndex2].cartQuantity}`,
          {
            position: "bottom-left",
          }
        );
      } else if (state.basket[itemIndex2].cartQuantity === 1) {
        const nextCartItems = state.basket.filter(
          (cartItem) => cartItem.id !== action.item.id
        );

        updatedBasket2 = nextCartItems;

        toast.error(`Removed ${action.item.title} from your cart`, {
          position: "bottom-left",
        });
      }
      return {
        ...state,
        basket: updatedBasket2,
      };
    case "CLEAR_BASKET":
      state.basket = [];
      toast.error(`Cart cleared`, {
        position: "bottom-left",
      });

      return {
        ...state,
        basket: state.basket,
      };

    case "GET_TOTALS":
      let { total, quantity } = state.basket.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;

      return {
        ...state,
        cartTotalQuantity: state.cartTotalQuantity,
        cartTotalAmount: state.cartTotalAmount,
      };

    case "MAP_USER":
      return {
        ...state,
        userDetails: action.userDetails,
      };

    default:
      return state;
  }
};

export default reducer;
