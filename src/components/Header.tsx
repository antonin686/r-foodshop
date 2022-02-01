import { FaUtensils, FaUserAlt } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useRef, HtmlHTMLAttributes } from "react";

function Header() {
  const [menu, setmenu] = useState<number>(0);
  const menuDDEl = useRef<any>(null);
  const handleMenuClick = () => {
    setmenu(menu == 2 ? 1 : 2);
  };

  const toggler = () => {
      if(menu == 1) return "menu-close"
      else if(menu == 2) return "menu-open"
      else return ""
  } 

  return (
    <header className="border shadow-lg">
      <nav className="container mx-auto flex flex-wrap justify-around items-center text-xl py-6 relative">
        <div className="flex items-center gap-2 text-2xl">
          <FaUtensils className="text-main" /> FoodShop
        </div>
        <ul className="md:flex gap-3 hidden">
          <li>Home</li>
          <li>Categories</li>
          <li>Popular</li>
          <li>About Us</li>
        </ul>
        <button className="md:hidden text-3xl border p-2" onClick={handleMenuClick}>
          {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
        <div className="md:flex hidden items-center gap-2">
          <FaUserAlt className="text-main" /> Login
        </div>
      </nav>

      <ul
        ref={menuDDEl}
        className={` ${toggler()} h-0 w-full text-lg absolute overflow-hidden z-20 bg-white shadow-lg  flex flex-col gap-2 items-left pl-14`}
      >
        <li>Home</li>
        <li>Categories</li>
        <li>Popular</li>
        <li>About Us</li>
        <li>
          <div className="flex items-center gap-2">
            <FaUserAlt className="text-main" /> Login
          </div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
