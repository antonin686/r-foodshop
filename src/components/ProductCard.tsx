import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import Modal from "./Modal";
import ProductModal from "./ProductModal";
import Rating from "./Rating";

interface Iprops {
  product: any;
}

function ProductCard({ product }: Iprops) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  product.rating = 4.5;

  return (
    <>
      <motion.button
        onClick={() => (modalOpen ? close() : open())}
        className="overlay-hidden w-80 border p-4 gap-4 shadow-lg rounded-lg flex flex-col items-center relative"
      >
        <div className="relative">
          <span className="price-on-card"> BDT {product.price} </span>
          <img src={product.image} alt={product.title} className="w-full h-52 rounded-lg" />
        </div>
        <h1 className="text-3xl font-bold text-center">{product.title}</h1>
        <Rating rating={product.rating} />

        <p className="theme-text animate-bounce font-bold text-lg my-2">Click to Order</p>
      </motion.button>

      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && (
          <ProductModal modalOpen={modalOpen} product={product} close={close} />
        )}
      </AnimatePresence>
    </>
  );
}

export default ProductCard;
