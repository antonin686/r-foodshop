import { AnimateSharedLayout } from "framer-motion";
import Rating from "./Rating";

interface Iprops {
  title: string;
  desc: string;
  price: number;
  image: string;
  slug: string;
  rating: number;
}

function ProductCard({ title, desc, price, rating, image, slug }: Iprops) {
  return (
    <div className="overlay-hidden w-96 border p-4 gap-4 shadow-lg rounded-lg flex flex-col items-center relative">
      <span className="price-on-card"> BDT {price} </span>
      <img src={image} alt="" className="w-full rounded-lg" />
      <h1 className="text-3xl font-bold text-center">{title}</h1>
      <Rating rating={rating}/>
    </div>
  );
}

export default ProductCard;
