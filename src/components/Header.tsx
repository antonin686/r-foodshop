import { FaUtensils, FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const [menu, setmenu] = useState<number>(0);
  const handleMenuClick = () => {
    setmenu(menu === 2 ? 1 : 2);
  };

  const toggler = () => {
    if (menu === 1) return "menu-close";
    else if (menu === 2) return "menu-open";
    else return "";
  };

  const navStyling = (navInfo: any) => {
    return navInfo.isActive ? "border-b-2 theme-border" : "";
  }

  return (
    <header className="relative shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-around items-center text-xl py-6 relative">
        <Link to="/" className="flex items-center gap-2 text-2xl">
          <FaUtensils className="text-main" /> FoodShop
        </Link>
        <div className="md:flex gap-4 hidden">
          <NavLink className={navStyling} to="/">Home</NavLink>
          <NavLink className={navStyling} to="/categories">Categories</NavLink>
          <NavLink className={navStyling} to="/products">Popular</NavLink>
          <NavLink className={navStyling} to="/about-us">About Us</NavLink>
        </div>
        <button className="md:hidden text-3xl border p-2" onClick={handleMenuClick}>
          {menu === 2 ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <Link to="/login" className="md:flex hidden items-center gap-2">
          <FaUserAlt className="text-main" /> Login
        </Link>
      </nav>

      <div
        className={` ${toggler()} h-0 w-full text-lg absolute overflow-hidden z-20 bg-white shadow-lg  flex flex-col gap-2 items-left pl-14`}
      >
        <Link to="/">Home</Link>
        <Link to="/categories">Categories</Link>
        <Link to="/products">Popular</Link>
        <Link to="/about-us">About Us</Link>
        <Link to="/login" className="flex items-center gap-2">
          <FaUserAlt className="text-main" /> Login
        </Link>
      </div>
    </header>
  );
}

export default Header;
