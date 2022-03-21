import { Routes, Route } from "react-router-dom";
import CustomerLayout from "./layouts/CustomerLayout";
import Layout from "./layouts/Layout";
import AdminRedirect from "./pages/AdminRedirect";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from "./pages/Checkout";
import AddressCreate from "./pages/customer/AddressCreate";
import AddressEdit from "./pages/customer/AddressEdit";
import AddressIndex from "./pages/customer/AddressIndex";
import Dashboard from "./pages/customer/Dashboard";
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
            <Route path="addresses" element={<AddressIndex />} />
            <Route path="addresses/create" element={<AddressCreate />} />
            <Route path="addresses/edit/:id" element={<AddressEdit />} />
            <Route path="orders" element={<Orders />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminRedirect/>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
