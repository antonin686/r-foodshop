import ImageHoverCard from "./ImageHoverCard";
import useGetFetch from "../hooks/useGetFetch";
import { CategoryUrl } from "../helpers/apiLinks";
import Spinner from "./Spinner";

interface IimageHoverCard {
  id: string;
  icon: string;
  title: string;
  desc: string;
  cover_img: string;
}

function CategoryList() {
  const [items]: any = useGetFetch(CategoryUrl);

  return (
    <div className="flex flex-wrap justify-center gap-8">
      {items ? (
        items.map((item: IimageHoverCard, index: number) => (
          <ImageHoverCard
            key={index}
            eid={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            cover_img={item.cover_img}
          />
        ))
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default CategoryList;
