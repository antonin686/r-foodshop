import { useContext, useEffect, useLayoutEffect, useRef } from "react";
import { CartContext } from "../providers/_Contexts";

function useCart() {
  const { state, dispatch } = useContext<any>(CartContext);

  const updateCartCount = async () => {
    dispatch({ type: "UPDATE_CART_INFO" });
  };

  const add = (item: any) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    updateCartCount();
  };

  const remove = (item: any) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
    updateCartCount();
  };

  const clear = () => {
    dispatch({ type: "CLEAR_CART"});
    localStorage.clear();
    updateCartCount();
  };

  

  useEffect(() => {
    if (localStorage.getItem("cart")) {
      let cart = JSON.parse(localStorage.getItem("cart") || "{}");
      dispatch({ type: "POPULATE_CART", payload: cart });
    } else {
      let cart = JSON.stringify({
        cart: [],
        total: 0,
        count: 0,
      });

      localStorage.setItem("cart", cart);
    }
  }, []);

  const firstUpdate = useRef(true);

  useLayoutEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
    } else {
      localStorage.setItem("cart", JSON.stringify(state));
    }
  });

  return {
    items: state.cart,
    total: state.total,
    count: state.count,
    add,
    remove,
    clear
  };
}

export default useCart;
