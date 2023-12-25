import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Hero from "../components/Hero";
import CategorieItme from "../components/CategorieItme";
import { brands, categories } from "../constants/constants";
import PosterSlider from "../components/PosterSlider";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../components/ProductCard";
import { fetchData } from "../redux/dataReducer/action";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const theme = useSelector((store) => store.themeReducer.theme);
  const mobilesData = useSelector((store) => store.dataReducer.data);

  const dispatch = useDispatch();

  const shuffledMobilesData = mobilesData.sort(() => Math.random() - 0.5);

  // Take the first 4 elements
  const randomProducts = shuffledMobilesData.slice(0, 4);

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const settings = {
    slidesToScroll: 1,
    slidesToShow: 7, // Set the default number of slides to show
    dots: true, // Show pagination dots
    responsive: [
      {
        breakpoint: 640, // Small screens and larger
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Small screens and larger
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <div
      className={`${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      }transition-all duration-500`}
    >
      <Hero />
      <div className="px-2 sm:px-5 md:px-10 lg:px-28">
        <div className="px-6">
          <Slider
            {...settings}
            className={`md:my-5 my-3 flex justify-center md:py-5 ${
              theme ? "text-white" : "text-black"
            }`}
          >
            {categories?.map((item, index) => (
              <Link key={index} to={item.path}>
                <CategorieItme text={item.text} image={item.image} />
              </Link>
            ))}
          </Slider>
        </div>

        <div className="mt-10">
          <h1
            className={`text-xl md:text-3xl font-medium ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Exclusive at e-Shop
          </h1>
          <PosterSlider />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-5 lg:mt-20">
          {brands?.map((brand, index) => (
            <div key={index} className="p-1 border rounded-md">
              <img
                src={brand}
                alt={brand}
                className="w-14 sm:w-28 md:w-40 lg:w-56 "
              />
            </div>
          ))}
        </div>
        <div className="mt-10">
          <h1
            className={`text-xl md:text-3xl font-medium ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Latest smart phones
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 justify-center items-center my-5">
            {randomProducts?.map((item, index) => (
              <Link key={index} to={`/products/${item._id}`}>
                <ProductCard product={item} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
