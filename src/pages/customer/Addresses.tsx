import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddressBook from "../../components/basic/AddressBook";

function Addresses() {
  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Addresses Book</h1>
      <div className="flex flex-col gap-4">
        <AddressBook />
        <AddressBook />
        <Link to="create" className="rounded-lg relative border shadow p-4 flex justify-center gap-2 items-center w-full hover:shadow-lg">
          <FaPlus className="text-theme" /> New Address
        </Link>
      </div>
    </div>
  );
}

export default Addresses;
