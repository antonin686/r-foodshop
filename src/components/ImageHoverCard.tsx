import { Link } from "react-router-dom";

interface Iprops {
  eid: string;
  icon: string;
  title: string;
  desc: string;
  cover_img: string;
}

function ImageHoverCard({ eid, icon, title, desc, cover_img }: Iprops) {
  return (
    <Link className="hover-img-card" to={eid}>
      <img className="image" src={cover_img} alt={title} />
      <div className="content">
        <img className="w-20 h-20" src={icon} alt={title + " Icon"} />
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-justify">{desc}</p>
      </div>
    </Link>
  );
}

export default ImageHoverCard;
