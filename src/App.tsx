import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryProducts from "./pages/CategoryProducts";
import Checkout from "./pages/Checkout";
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
        </Route>
        <Route path="/admin" element={CategoryProducts} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
