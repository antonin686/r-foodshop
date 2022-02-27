import useGetFetch from "../hooks/useGetFetch";
import { ProductQueryUrl } from "../helpers/apiLinks";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

interface Iprops {
  query?: string;
  data?: any;
  position?: string;
}

interface IProduct {
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
}

function ProductList({ query = "all", data, position = "center" }: Iprops) {
  const url = data ? null : `${ProductQueryUrl}/${query}`;

  let [items]: any = useGetFetch(url);

  if (data) items = data;

  return (
    <div className={`flex flex-wrap justify-center md:justify-${position} gap-8`}>
      {items ? (
        items.map((item: IProduct, index: number) => (
          <ProductCard
            key={index}
            product={item}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default ProductList;
