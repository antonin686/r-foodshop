import { FaUtensils, FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { hostAdmin } from "../../helpers/apiLinks";

function Header() {
  const [menu, setmenu] = useState<number>(0);
  const auth = useAuth();

  const handleMenuClick = () => {
    setmenu(menu === 2 ? 1 : 2);
  };

  const toggler = () => {
    if (menu === 1) return "menu-close";
    else if (menu === 2) return "menu-open";
    else return "";
  };

  const navStyling = (navInfo: any) => {
    return navInfo.isActive ? "border-b-2 border-theme" : "";
  };

  const logOutHandler = () => {
    auth.logout();
  };

  return (
    <header className="shadow-lg sticky top-0 bg-white z-30">
      <nav className="container mx-auto flex flex-wrap md:justify-between justify-around items-center text-xl md:py-6 py-3 relative">
        <Link to="/" className="flex items-center gap-2 text-2xl">
          <FaUtensils className="text-theme" /> FoodShop
        </Link>
        <div className="md:flex gap-4 hidden">
          <NavLink className={navStyling} to="/">
            Home
          </NavLink>
          <NavLink className={navStyling} to="/categories">
            Categories
          </NavLink>
          <NavLink className={navStyling} to="/products">
            Foods
          </NavLink>
          <NavLink className={navStyling} to="/about-us">
            About Us
          </NavLink>
        </div>
        <button className="md:hidden text-3xl border p-2" onClick={handleMenuClick}>
          {menu === 2 ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>

        {auth.token ? (
          <div className="dropdown">
            <button className="md:flex hidden items-center gap-2">
              <FaUserAlt className="text-theme" /> Welcome, {auth.user.username}
            </button>
            <div className="dropdown-content">
              <div>
                <Link to="/customer">Account</Link>
              </div>
              <hr />
              <div>
                <button type="button" onClick={logOutHandler}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        ) : (
          <Link to="/login" className="md:flex hidden items-center gap-2">
            <FaUserAlt className="text-theme" /> Login
          </Link>
        )}
      </nav>

      <div
        className={` ${toggler()} h-0 w-full text-lg absolute overflow-hidden bg-white shadow-lg  flex flex-col gap-2 items-left pl-14`}
      >
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Foods</Link>
        <Link to="/about-us">About Us</Link>
        {auth.token ? (
          <Link to="/customer" className="flex  items-center gap-2">
            <FaUserAlt className="text-theme" /> Account
          </Link>
        ) : (
          <Link to="/login" className="flex items-center gap-2">
            <FaUserAlt className="text-theme" /> Login
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
