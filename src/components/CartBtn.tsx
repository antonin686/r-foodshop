import { motion } from "framer-motion";
import { MouseEventHandler } from "react";
import { MdShoppingBasket } from "react-icons/md";
import useCart from "../hooks/useCart";

interface Iprops {
  clickHandler?: MouseEventHandler;
}

function CartBtn({ clickHandler }: Iprops) {
  const cart = useCart();
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="f-btn"
      onClick={clickHandler}
    >
      <span className="counter">{cart.count}</span>
      <div className="content">
        <MdShoppingBasket className="text-2xl" />
        Cart
      </div>
    </motion.button>
  );
}

export default CartBtn;
