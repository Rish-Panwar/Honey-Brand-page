import { useContext, useEffect } from "react";
import { DataContext } from "../Context/DataContext";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Carousel = () => {
  const { data, fetchAllData } = useContext(DataContext);

  useEffect(() => {
    fetchAllData();
  }, []);
  // Slick carousel
   var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  //console.log("Data:", data);  ✅ Check this in console

  return (
     <Slider {...settings}>
      
    </Slider>
  );
}
export default Carousel;
