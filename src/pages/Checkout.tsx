import axios from "axios";
import { useRef, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { CustomerAddressesUrl, OrderUrl } from "../helpers/apiLinks";
import { timedModal } from "../helpers/SweetAlert";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";
import useGetFetch from "../hooks/useGetFetch";

function Checkout() {
  const cart = useCart();
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  const loginHandler = () => {
    navigate("/login", { state: { from: location } });
  };

  const [addresses]: any = useGetFetch(CustomerAddressesUrl, auth.token);
  const addRef = useRef<any>({});
  const [select, setSelect] = useState<any>(null);
  const [selectErr, setSelectErr] = useState<boolean>(false);
  const addressChangeHandler = (el: any) => {
    let address_id = el.target.value;
    setSelect(address_id);
  };

  const orderBtnClickHandler = () => {
    if (select) {
      setSelectErr(false)
      axios.post(OrderUrl, JSON.stringify({address: select, items: cart.items}), {
        headers: {
          "Authorization": auth.token,
          "Content-Type": "application/json",
        },
      }).then(() =>{
        timedModal.fire({
          icon: "success",
          title: "Orders Successfully Confirmed",
        }).then(() => {
          cart.clear()
          navigate('/')
        })
      }).catch((error) => console.log(error));
    }else{
      setSelectErr(true)
    }
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-12 gap-8 px-2">
        <div className="col-span-12">
          <p className="text-2xl text-center mb-2 font-bold">Checkout Page</p>
        </div>
        {auth.token ? (
          <>
            <div className="col-span-12 md:col-span-4 p-4 shadow-md border rounded-lg overflow-hidden">
              <p className="text-lg mb-2 font-bold">Address</p>
              <select ref={addRef} onChange={addressChangeHandler} className="c-input">
                <option value="">Select an address</option>
                {addresses &&
                  addresses.map((address: any, index: number) => (
                    <option className="break-words" key={index} value={address.id}>
                      {address.address.substring(0, 28)}...
                    </option>
                  ))}
              </select>
              {selectErr && (
                <p className="text-red-500 my-2">*Please select an address</p>
              )}
            </div>
            <div className="col-span-12 md:col-span-8 p-4 shadow-md border rounded-lg">
              <p className="text-lg mb-2 font-bold">Order Overview</p>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-12 border-b">
                  <div className="col-span-9 font-bold">Product</div>
                  <div className="col-span-3 font-bold">Total</div>
                </div>
                {cart.items.map((item: any, index: number) => (
                  <div className="grid grid-cols-12 border-b" key={index}>
                    <div className="col-span-9">
                      {item.title} x {item.quantity}
                    </div>
                    <div className="col-span-3">{item.quantity * item.price} BDT</div>
                  </div>
                ))}
                <div className="grid grid-cols-12 border-b">
                  <div className="col-span-9 font-bold">Total</div>
                  <div className="col-span-3 font-bold">{cart.total} BDT</div>
                </div>
              </div>

              <button onClick={orderBtnClickHandler} className="c-primary-btn mt-4">
                Confirm Order
              </button>
            </div>
          </>
        ) : (
          <div className="col-span-12 shadow py-12 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="bg-red-200 py-4 px-8 rounded-lg text-lg">
                Please login in order to checkout
              </span>
              <button
                className="bg-theme text-white py-2 px-4 rounded-lg hover:scale-110"
                onClick={loginHandler}
              >
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
