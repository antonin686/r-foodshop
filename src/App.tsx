import { Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Welcome from "./pages/Welcome";

function Test() {
  return <div>Hello</div>;
}
function App() {
  return (
    <Routes>
      <Route path="/*" element={<Layout />}>
        <Route path="" element={<Welcome/>}/>
      </Route>
      <Route path="/admin" element={Test} />
    </Routes>
  );
}

export default App;
