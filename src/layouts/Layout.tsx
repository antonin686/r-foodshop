import { Outlet } from "react-router-dom";
import Header from "../components/basic/Header";
import Footer from "../components/basic/Footer";
import CartSidebar from "../components/CartSidebar";
import CartProvider from "../providers/CartProvider";

function Layout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <Outlet />
        <Footer />
        <CartSidebar />
      </div>
    </CartProvider>
  );
}

export default Layout;
