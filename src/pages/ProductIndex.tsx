import { useState } from "react";
import ProductFilter from "../components/ProductFilter";

function ProductIndex() {
  const [config, setConfig] = useState({
    search: "",
    filters: [
      {
        title: "category",
        fk: "category_id",
        items: [
          {
            id: 1,
            title: "burger",
            checked: false,
          },
          {
            id: 2,
            title: "pizza",
            checked: false,
          },
        ],
      },
    ],
  });

  return (
    <div className="py-12 mx-auto">
      <ProductFilter filterConfig={config} />
    </div>
  );
}

export default ProductIndex;
