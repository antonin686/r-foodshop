import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

function AddressBook() {
  return (
    <div className="rounded-lg relative border shadow p-4 hover:shadow-lg">
      <p className="w-11/12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam odio nulla,
        similique temporibus
      </p>
      <div className="absolute top-5 right-4 text-theme text-xl flex gap-2">
        <Link to="#">
          <FaEdit />
        </Link>
        <button type="button">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default AddressBook;
