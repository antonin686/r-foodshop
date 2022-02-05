import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Modal from "./Modal";
import Rating from "./Rating";

interface Iprops {
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
}

function ProductCard({ title, desc, price, rating, image, slug }: Iprops) {
  const [modalOpen, setModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const plus = () => setQuantity(quantity + 1);
  const minus = () => (quantity - 1 > 0 ? setQuantity(quantity - 1) : "");

  const quantityChangeHandler = (el: any) => {
    let curr = parseInt(el.currentTarget.value);
    if (curr > 0) setQuantity(curr);
  };

  const orderHandler = () => {
    close();
  };

  return (
    <>
      <motion.button
        onClick={() => (modalOpen ? close() : open())}
        className="overlay-hidden md:w-96 w-80 border p-4 gap-4 shadow-lg rounded-lg flex flex-col items-center relative"
      >
        <div className="relative">
          <span className="price-on-card"> BDT {price} </span>
          <img src={image} alt={title} className="w-full h-60 rounded-lg" />
        </div>
        <h1 className="text-3xl font-bold text-center">{title}</h1>
        <Rating rating={rating} />

        <p className="theme-text animate-bounce font-bold text-lg my-2">Click to Order</p>
      </motion.button>

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && (
          <Modal modalOpen={modalOpen} handleClose={close}>
            <div className="overlay-hidden md:w-96 w-80 border p-4 gap-4 shadow-lg bg-white rounded-lg flex flex-col items-center">
              <div className="w-full flex justify-end ">
                <button className="c-primary-btn font-bold" onClick={close}>Close</button>
              </div>
              <div className="relative">
                <span className="price-on-card"> BDT {price} </span>
                <img src={image} alt={title} className="w-full h-60 rounded-lg" />
              </div>
              <h1 className="text-3xl font-bold text-center">{title}</h1>
              <Rating rating={rating} />
              <div className="flex gap-2 text-lg items-center">
                <motion.button
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="border p-2 text-xl rounded-lg theme-text hover:bg-gray-100"
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
                  className="border p-2 text-xl rounded-lg theme-text hover:bg-gray-100"
                  onClick={plus}
                >
                  <AiOutlinePlus />
                </motion.button>
              </div>
              <div className="font-bold text-xl">Total: {quantity * price} BDT</div>
              <button
                className="c-primary-btn animate-bounce font-bold w-28"
                onClick={orderHandler}
              >
                Order
              </button>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCard;
