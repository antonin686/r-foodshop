import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useCart from "../hooks/useCart";

function Checkout() {
  const cart = useCart();
  const auth = useAuth();
  const navigate = useNavigate();
  let location = useLocation();

  const loginHandler = () => {
    navigate("/login", { state: { from: location } });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-12 gap-8 ">
        {auth.token ? (
          <>
            <div className="col-span-12 md:col-span-3 p-4 shadow font-bold">Location</div>
            <div className="col-span-12 md:col-span-9 p-4 shadow">
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

              <button className="c-primary-btn mt-4">Confirm Order</button>
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
