import { useParams } from "react-router-dom";
import ProductList from "../components/ProductList";

function CategoryProducts() {
  const params = useParams();
  return (
    <section className="py-12">
      <h1 className="text-center mb-8 text-4xl font-bold">
        Food <span className="theme-text">List of</span>{" "}
        <span className="capitalize ">{params.category}</span>
      </h1>
      <ProductList query={`categories/${params.category}`} />
    </section>
  );
}

export default CategoryProducts;
