import ImageHoverCard from "./ImageHoverCard";
import useGetFetch from "../hooks/useGetFetch";
import { CategoryUrl } from "../helpers/apiLinks";
import Spinner from "./basic/Spinner";

interface IimageHoverCard {
  id: string;
  icon: string;
  title: string;
  description: string;
  image: string;
  slug: string;
}

function CategoryList() {
  const [items]: any = useGetFetch(CategoryUrl);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {items ? (
        items.map((item: IimageHoverCard, index: number) => (
          <ImageHoverCard
            key={index}
            slug={item.slug}
            icon={item.icon}
            title={item.title}
            desc={item.description}
            cover_img={item.image}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default CategoryList;
