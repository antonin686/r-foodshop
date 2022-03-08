import { useReducer } from "react";
import { CartContext } from "./_Contexts";

function CartProvider(props: any) {
  const initialState: any = {
    cart: [],
    count: 0,
    total: 0,
  };

  const reducer = (state: any, action: any) => {
    switch (action.type) {
      case "ADD_TO_CART":
        let changed = false;
        state.cart.forEach((item: any) => {
          if (item.id == action.payload.id) {
            item.quantity = action.payload.quantity;
            changed = true;
          }
        });
        if (changed) return { ...state };
        else return { ...state, cart: [...state.cart, action.payload] };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((c: any) => c.id !== action.payload.id),
        };
      case "UPDATE_CART_INFO":
        let count = 0;
        let total = 0;
        state.cart.forEach((item: any) => {
          count += item.quantity;
          total += item.quantity * item.price;
        });
        return { ...state, total: total, count: count };
      default:
        return state;
    }
  };
  const [state, dispatch] = useReducer<any>(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
