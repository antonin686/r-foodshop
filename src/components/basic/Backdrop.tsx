import { motion } from "framer-motion";

function Backdrop({ children, onClick }: any) {
  return (
    <motion.div
      onClick={onClick}
      className="backdrop z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

export default Backdrop;
