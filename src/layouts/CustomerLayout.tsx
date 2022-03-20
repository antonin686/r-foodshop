import { Navigate, Outlet, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { FiLogOut } from "react-icons/fi";
import personImg from "../images/person.png";
import Breadcrumb from "../components/basic/Breadcrumb";

function CustomerLayout() {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const logOutHandler = () => {
    auth.logout();
  };

  return (
    <div className="container mx-auto">
      <div className="mt-5 mx-4 md:mx-0">
        <Breadcrumb start="/customer" />
      </div>
      <div className="flex items-center justify-between shadow p-4 rounded-lg md:p-0 md:px-8 m-4 md:mx-0 border">
        <div className="flex flex-col md:flex-row text-center md:text-left items-center">
          <img
            className="w-32 md:block hidden"
            src={auth.user.image ? auth.user.image : personImg}
            alt={auth.user.username}
          />
          <div>
            <p>Hello,</p>
            <p className="font-bold">{auth.user.first_name + ' ' + auth.user.last_name}</p>
          </div>
        </div>
        <div className="">
          <button onClick={logOutHandler} className="flex items-center gap-1 c-primary-btn">
            <FiLogOut /> Logout
          </button>
        </div>
      </div>
      <div className="container mx-auto p-2 md:p-0 my-4">
        <Outlet />
      </div>
    </div>
  );
}

export default CustomerLayout;
