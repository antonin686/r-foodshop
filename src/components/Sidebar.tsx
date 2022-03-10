import { motion } from "framer-motion";
import Backdrop from "./basic/Backdrop";

const dropIn = {
  hidden: {
    width: '0px',
    opacity: 0,
  },
  visible: {
    width: '22rem',
    opacity: 1,
    transition: {
      duration: 0.1,
    },
  },
  exit: {
    width: '0px',
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};


function Sidebar({ handleClose, children }: any) {
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="absolute bg-white h-full right-0 top-0 z-50"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {children}
      </motion.div>
    </Backdrop>
  );
}

export default Sidebar;
