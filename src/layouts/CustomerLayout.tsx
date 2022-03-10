import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import personImg from "../images/person.png";

function CustomerLayout() {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-between shadow px-2 py-2 md:px-8 my-4 mx-2 border">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center">
          <img
            className="w-32"
            src={auth.user.image ? auth.user.image : personImg}
            alt={auth.user.name}
          />
          <div>
            <p>Hello,</p>
            <p className="font-bold">{auth.user.name}</p>
          </div>
        </div>
        <div className="">
          <button className="flex items-center gap-1 c-primary-btn">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default CustomerLayout;
