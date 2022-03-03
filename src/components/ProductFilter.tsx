import axios from "axios";
import { useEffect, useState } from "react";
import { ProductQueryUrl } from "../helpers/apiLinks";
import ProductFilterBar from "./ProductFilterBar";
import ProductList from "./ProductList";
import Spinner from "./Spinner";

interface Iprops {
    filterConfig: object;
}

function ProductFilter({ filterConfig }: Iprops) {

  const [config, setConfig] = useState(filterConfig);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    setData(null);
    axios.post(ProductQueryUrl, { config: config }).then((res) => {
      setData(res.data);
    });
  }, [config]);

  return (
    <div>
      <h1 className="text-center mb-8 text-4xl font-bold">
        Food <span className="theme-text">List</span>
      </h1>
      <div className="grid grid-cols-12 gap-8 ">
        <div className="col-span-12 md:col-span-3 md:p-0 p-4">
          <ProductFilterBar config={config} setConfig={setConfig} />
        </div>
        <div className="col-span-12 md:col-span-9">
          {data ? <ProductList data={data} position="start" /> : <Spinner />}
        </div>
      </div>
      
    </div>
  );
}

export default ProductFilter;
