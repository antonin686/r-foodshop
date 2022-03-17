import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { CgMathEqual } from "react-icons/cg";
import { FaTrash } from "react-icons/fa";
import { motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCart from "../hooks/useCart";

interface Iprops {
  item: any;
}
function CartItem({ item }: any) {
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const cart = useCart();
  const plus = () => {
    setQuantity(quantity + 1);
    item.quantity = quantity + 1;
    cart.add(item);
  };
  const minus = () => {
    if (quantity - 1 > 0) {
      setQuantity(quantity - 1);
      item.quantity = quantity - 1;
      cart.add(item);
    }
  };

  const quantityChangeHandler = (el: any) => {
    let curr = parseInt(el.currentTarget.value);
    if (curr > 0){
        setQuantity(curr)
        item.quantity = curr;
        cart.add(item);
    }
  };

  const deleteHandler = () => {
    cart.remove(item)
  }

  return (
    <div className="flex flex-col gap-1 p-2">
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        className="absolute right-2"
        onClick={deleteHandler}
      >
        <FaTrash className="text-theme" />
      </motion.button>
      <div className="flex items-center gap-2">
        <img className="w-24" src={item.image} alt="" />
        <p className="font-bold">{item.title}</p>
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <motion.button
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="border p-2 text-xl rounded-lg text-theme hover:bg-gray-100"
            onClick={minus}
          >
            <AiOutlineMinus />
          </motion.button>
          <input
            type="number"
            className="border text-center font-bold text-theme w-14 py-1"
            min={1}
            value={quantity}
            onChange={quantityChangeHandler}
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="border p-2 text-xl rounded-lg text-theme hover:bg-gray-100"
            onClick={plus}
          >
            <AiOutlinePlus />
          </motion.button>
          <GrClose />
          <p>{item.price} BDT</p>
          <CgMathEqual />
          {item.price * quantity} BDT
        </div>
      </div>
    </div>
  );
}

export default CartItem;
