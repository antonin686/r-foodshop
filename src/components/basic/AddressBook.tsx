import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddressBook() {
  const editHandler = () => {};
  const deleteHandler = () => {};

  return (
    <div className="rounded-lg relative border shadow p-4 hover:shadow-lg">
      <p className="w-11/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio nulla,
        similique temporibus
      </p>
      <div className="absolute top-5 right-4 text-theme text-xl flex gap-3">
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-theme-dark"
          onClick={editHandler}
          type="button"
        >
          <FaEdit />
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="hover:text-theme-dark"
          onClick={deleteHandler}
          type="button"
        >
          <FaTrash />
        </motion.button>
      </div>
    </div>
  );
}

export default AddressBook;
