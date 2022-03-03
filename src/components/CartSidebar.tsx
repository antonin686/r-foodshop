import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import CartBtn from "./CartBtn";
import CartItem from "./CartItem";
import Sidebar from "./Sidebar";

function CartSidebar() {
  const [modalOpen, setModalOpen] = useState(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const cart = useCart();
  const navigate = useNavigate();
  
  const checkoutHandler = () => {
    close();
    navigate("/checkout");
  };

  return (
    <div>
      <CartBtn clickHandler={open} />
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {modalOpen && (
          <Sidebar modalOpen={modalOpen} handleClose={close}>
            <motion.div className="relative h-full overflow-hidden">
              <motion.div className="flex justify-end ">
                <motion.div className="h-12 theme-bg w-full text-white text-xl font-bold flex items-center px-4 justify-between">
                  Cart
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={close}
                  >
                    <AiOutlineClose className="text-2xl" />
                  </motion.button>
                </motion.div>
              </motion.div>
              {/* Sidebar Body */}
              <motion.div className="w-full flex flex-col gap-1">
                {cart.items.map((item: any, index: number) => (
                  <div key={index}>
                    <CartItem item={item} />
                    <hr />
                  </div>
                ))}
              </motion.div>
              {/* Sidebar Footer */}
              <div className="absolute bottom-0 w-full flex flex-col">
                <div className="flex justify-between px-2 border-2 py-3 text-lg">
                  <div></div>
                  <div>Total</div>
                  <div>{cart.total} BDT</div>
                </div>
                <button
                  type="button"
                  onClick={checkoutHandler}
                  className=" theme-bg text-center text-white py-4 hover:bg-red-700"
                >
                  Checkout
                </button>
              </div>
            </motion.div>
          </Sidebar>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CartSidebar;
