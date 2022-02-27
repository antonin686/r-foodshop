import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import CategoryIndex from "./pages/CategoryIndex";
import CategoryProducts from "./pages/CategoryProducts";
import ProductIndex from "./pages/ProductIndex";
import Welcome from "./pages/Welcome";
import CartProvider from "./providers/CartProvider";

function Test() {
  return <div>Hello</div>;
}
function App() {
  return (
    <CartProvider>
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="" element={<Welcome />} />
        <Route path="products" element={<ProductIndex />} />
        <Route path="categories" element={<CategoryIndex />} />
        <Route path="categories/:category/products" element={<CategoryProducts />} />
      </Route>
      <Route path="/admin" element={CategoryProducts} />
    </Routes>
    </CartProvider>
  );
}

export default App;
