import { motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import useCart from "../hooks/useCart";
import Modal from "./basic/Modal";
import Rating from "./Rating";

interface Iprops {
  product: any;
  modalOpen: boolean;
  close: any;
}

function ProductModal({ product, modalOpen, close }: Iprops) {
  const cart = useCart();
  const [quantity, setQuantity] = useState(1);
  const plus = () => setQuantity(quantity + 1);
  const minus = () => (quantity - 1 > 0 ? setQuantity(quantity - 1) : "");

  const quantityChangeHandler = (el: any) => {
    let curr = parseInt(el.currentTarget.value);
    if (curr > 0) setQuantity(curr);
  };

  const orderHandler = () => {
    product.quantity = quantity;
    cart.add(product);
    close()
  };

  return (
    <Modal modalOpen={modalOpen} handleClose={close}>
      <div className="overlay-hidden md:w-96 w-80 border p-4 gap-4 shadow-lg bg-white rounded-lg flex flex-col items-center">
        <div className="w-full flex justify-end ">
          <button className="c-primary-btn font-bold" onClick={close}>
            Close
          </button>
        </div>
        <div className="relative">
          <span className="price-on-card"> BDT {product.price} </span>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-52 rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold text-center">{product.title}</h1>
        <Rating rating={product.rating} />
        <div className="flex gap-2 text-lg items-center">
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
            className="border text-center font-bold rounded-lg w-14 py-1"
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
        </div>
        <div className="font-bold text-xl">Total: {quantity * product.price} BDT</div>
        <button className="c-primary-btn font-bold w-28" onClick={orderHandler}>
          Order
        </button>
      </div>
    </Modal>
  );
}

export default ProductModal;
