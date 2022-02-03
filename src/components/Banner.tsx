import { Link } from "react-router-dom";

interface props {
  bg_img: string;
  side_img: string;
  main_text: string;
  sub_text: string;
  link: string;
  link_text: string;
}

function Banner({ bg_img, side_img, main_text, sub_text, link, link_text }: props) {
  return (
    <div
      style={{ backgroundImage: `url(${bg_img})` }}
      className="flex bg-cover flex-wrap px-12 py-28 justify-around items-center md:gap-0 gap-10"
    >
      <div className="w-96">
        <h1 className="text-4xl font-bold">{main_text}</h1>
        <p className="mt-6 mb-10">{sub_text}</p>
        <Link className="c-primary-btn" to={link}>{link_text}</Link>
      </div>
      <div className="w-96 banner-floting-img">
        <img src={side_img} alt="" />
      </div>
    </div>
  );
}

export default Banner;
