import RoundedBtn from "../RoundedBtn";
import { FaPhoneAlt, FaSearchLocation } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black py-10 mt-auto">
      <div className="container mx-auto">
        <div className="flex justify-center flex-wrap gap-8">
          <RoundedBtn
            Icon={FaPhoneAlt}
            title="+8801687759686"
            sub="9AM - 8 PM"
            href="tel:+8801687759686"
          />
          <RoundedBtn
            Icon={FaSearchLocation}
            title="Address &amp; Location"
            sub="Find Our Store"
            onClick={() => {
              alert("hi mom");
            }}
          />
        </div>
        <p className="text-white text-center mt-8 text-2xl">
          Developed by{" "}
          <a className="text-theme hover:underline" target="_blank" href="https://antoninislam.com/">
            Md Antonin Islam{" "}
          </a>{" "}
          | All Rights Reserved!
        </p>
      </div>
    </footer>
  );
}

export default Footer;
