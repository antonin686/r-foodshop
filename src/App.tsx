import { Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import Layout from "./layouts/Layout";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from "./pages/Checkout";
import AddressCreate from "./pages/customer/AddressCreate";
import AddressEdit from "./pages/customer/AddressEdit";
import Addresses from "./pages/customer/Addresses";
import Dashboard from "./pages/customer/Dashboard";
import Account from "./pages/customer/Dashboard";
import Orders from "./pages/customer/Orders";
import Login from "./pages/Login";
import ProductIndex from "./pages/ProductIndex";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import AuthProvider from "./providers/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/*" element={<Layout />}>
          <Route path="" element={<Welcome />} />
          <Route path="products" element={<ProductIndex />} />
          <Route path="categories" element={<CategoryIndex />} />
          <Route path="categories/:category/products" element={<CategoryProducts />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="customer/*" element={<CustomerLayout />}>
            <Route path="" element={<Dashboard />} />
            <Route path="addresses" element={<Addresses />} />
            <Route path="addresses/create" element={<AddressCreate />} />
            <Route path="addresses/:id" element={<AddressEdit />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
        <Route path="/admin" element={CategoryProducts} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
