import { Link } from "react-router-dom";
import useCart from "../hooks/useCart";

function Checkout() {
  const cart = useCart();
  const auth = false;

  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-12 gap-8 ">
        {auth ? (
          <>
            <div className="col-span-12 md:col-span-3 md:p-0 p-4">dsa</div>
            <div className="col-span-12 md:col-span-9"></div>
          </>
        ) : (
          <div className="col-span-12 shadow py-12 flex justify-center">
            <div className="flex flex-col justify-center items-center gap-4">
              <span className="bg-red-200 py-4 px-8 rounded-lg text-lg">
                Please login in order to checkout
              </span>
              <Link
                className="theme-bg text-white py-2 px-4 rounded-lg hover:scale-110"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Checkout;
