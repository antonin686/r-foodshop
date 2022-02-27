import { useContext } from "react";
import { CartContext } from "../providers/_Contexts";

function useCart() {
  const { state, dispatch } = useContext<any>(CartContext);

  const updateCartCount = () => {
    dispatch({type: "UPDATE_CART_INFO"})
  }

  const add = (item: any) => {
    dispatch({type: "ADD_TO_CART", payload: item})
    updateCartCount()
  }

  const remove = (item: any) => {
    dispatch({type: "REMOVE_FROM_CART", payload: item})
    updateCartCount()
  }

  return {
    items: state.cart,
    total: state.total,
    count: state.count,
    add,
    remove
  };
}

export default useCart;
