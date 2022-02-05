import useGetFetch from "../hooks/useGetFetch";
import { ProductQueryUrl } from "../helpers/apiLinks";
import Spinner from "./Spinner";
import ProductCard from "./ProductCard";

interface Iprops {
  query?: string;
}

interface IProduct {
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
}

function ProductList({ query = "all" }: Iprops) {
  const [items]: any = useGetFetch(`${ProductQueryUrl}/${query}`);
  return (
    <div className="flex flex-wrap justify-center gap-8">
      {items ? (
        items.map((item: IProduct, index: number) => (
          <ProductCard
            key={index}
            title={item.title}
            desc={item.desc}
            price={item.price}
            image={item.image}
            slug={item.slug}
            rating={4.5}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default ProductList;
