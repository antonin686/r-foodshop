import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import CategoryProducts from "./pages/CategoryProducts";
import Welcome from "./pages/Welcome";

function Test() {
  return <div>Hello</div>;
}
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="" element={<Welcome />} />
        <Route path="categories/:category/products" element={<CategoryProducts />} />
      </Route>
      <Route path="/admin" element={CategoryProducts} />
    </Routes>
  );
}

export default App;
