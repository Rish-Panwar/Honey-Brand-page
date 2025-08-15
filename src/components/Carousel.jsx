import { useEffect } from "react";
import { getData } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from "./Category";
import { Link } from "react-router-dom";

// import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllData } = getData() || {};

  useEffect(() => {
    fetchAllData();
  }, []);

  const honeyProducts = data?.honeyProducts ?? [];

  // Slick carousel
  var settings = {
    dots: false,
    autoplay: true,
    autoplayspeed: 3000,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  //console.log("Data:", data);  ✅ Check this in console

  return (
    <div className="overflow-x-hidden">
      <Slider {...settings}>
        {honeyProducts.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 -z-10 h-dvh"
            >
              <div className="flex flex-col md:flex-row  gap-10 justify-center min-h-[60vh] md:min-h-[70vh] items-center px-4 my-10 md:my-0">
                <div className="md:space-y-4 space-y-2">
                  <h3 className="text-[#EB5B00] font-semibold font-sans text-sm">
                    Golden Goodness in Every Drop
                  </h3>
                  <h1 className="text-xl md:text-4xl font-bold uppercase line-clamp-3 md:line-clamp-2 md:w-[500px] text-[#B86B00] text-shadow-white">
                    {item.title}
                  </h1>
                  <p className="md:w-[500px] line-clamp-3 text-gray-400 pr-7">
                    {item.description}
                  </p>
                  <Link to={'/products'}>
                    <button
                      className="bg-cover bg-center text-white font-semibold px-3 py-2 rounded-full cursor-pointer mt-2"
                      style={{ backgroundImage: "url(/assets/button-bee-2.jpg)" }}
                    >
                      Shop Now
                    </button>
                  </Link>
                </div>
                <div className="">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-e-full w-[500px] hover:scale-105 transition-all shadow-2xl shadow-amber-600"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};
export default Carousel;
