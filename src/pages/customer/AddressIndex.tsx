import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import AddressBook from "../../components/basic/AddressBook";
import { CustomerAddressesUrl } from "../../helpers/apiLinks";
import useAuth from "../../hooks/useAuth";
import useGetFetch from "../../hooks/useGetFetch";

function AddressIndex() {
  const auth = useAuth()
  const [items, refetch]: any = useGetFetch(CustomerAddressesUrl, auth.token);

  return (
    <div>
      <h1 className="font-bold text-2xl mb-2">Addresses Book</h1>
      <div className="flex flex-col gap-4">
        {items &&
          items.map((item: any, index: number) => (
            <AddressBook
              key={index}
              id={item.id}
              address={item.address}
              city={item.city}
              post_code={item.post_code}
              refetch={refetch}
            />
          ))}
        <Link
          to="create"
          className="rounded-lg relative border shadow p-4 flex justify-center gap-2 items-center w-full hover:shadow-lg"
        >
          <FaPlus className="text-theme" /> New Address
        </Link>
      </div>
    </div>
  );
}

export default AddressIndex;
