import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CartSidebar from "../components/CartSidebar";

function Layout() {
  return (
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <Outlet />
        <Footer />
        <CartSidebar/>
      </div>
  );
}

export default Layout;
