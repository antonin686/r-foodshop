import axios from "axios";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AddressUrl } from "../../helpers/apiLinks";
import useAuth from "../../hooks/useAuth";

interface Iprops {
  id: number;
  city: string;
  post_code: string;
  address: string;
  refetch: Function;
}

function AddressBook({ id, city, post_code, address, refetch }: Iprops) {
  const auth = useAuth();
  const editHandler = () => {};
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`${AddressUrl}/${id}`, {
            headers: {
              Authorization: auth.token,
            },
          })
          .then(() => {
            Swal.fire({
              icon: "success",
              title: "Deleted!",
              showConfirmButton: false,
              timer: 1500,
            }).then(() => refetch());
          })
          .catch((error) => console.log(error));
      }
    });
  };

  return (
    <div className="rounded-lg relative border shadow p-4 hover:shadow-lg">
      <p className="w-11/12">
        {address}, {city} - {post_code}
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
