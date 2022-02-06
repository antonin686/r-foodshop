import Banner from "../components/Banner";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import ProductList from "../components/ProductList";
import img from "../home-bg.jpg";
import sideImg from "../home-img.png";

interface Ibannner {
  bg_img: string;
  side_img: string;
  main_text: string;
  sub_text: string;
  link: string;
  link_text: string;
}

function Welcome() {
  let banner: Ibannner = {
    bg_img: img,
    side_img: sideImg,
    main_text: "Food Made With Love",
    sub_text:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas accusamus tempore temporibus rem amet laudantium animi optio voluptatum. Natus obcaecati unde porro nostrum ipsam itaque impedit incidunt rem quisquam eos!",
    link: "#",
    link_text: "Order Now",
  };
  return (
    <>
      <section>
        <div className="container mx-auto">
          <Banner
            bg_img={banner.bg_img}
            side_img={banner.side_img}
            main_text={banner.main_text}
            sub_text={banner.sub_text}
            link={banner.link}
            link_text={banner.link_text}
          />
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="container mx-auto ">
          <h1 className="text-center mb-8 text-4xl font-bold">
            Our <span className="theme-text">Categories</span>
          </h1>

          <CategoryList />
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h1 className="text-center mb-8 text-4xl font-bold">
            Most <span className="theme-text">Popular</span>
          </h1>

          <ProductList query="popular" />
        </div>
      </section>
    </>
  );
}

export default Welcome;
