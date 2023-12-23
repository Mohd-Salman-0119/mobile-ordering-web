import React from "react";
import { useSelector } from "react-redux";
import Hero from "../components/Hero";
import CategorieItme from "../components/CategorieItme";
import { categories } from "../constants/constants";

const Home = () => {
  const theme = useSelector((store) => store.themeReducer.theme);
  return (
    <div
      className={`${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      } mt-5 mb-20`}
    >
      <Hero />
      <div className="p-3">

        <div className="my-5 m-auto flex px-10 gap-5 justify-center py-5 overflow-x-auto">
          {categories?.map((item, index) => (
            <CategorieItme text={item.text} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
