import React from "react";
import { SiTrustedshops } from "react-icons/si";
import { useSelector } from "react-redux";
const Footer = () => {
  const theme = useSelector((store) => store.themeReducer.theme);
  return (
    <div
      className={`p-5 border-t flex mt-10 justify-center flex-col items-center ${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      } transition-all duration-500`}
    >
      <div>
        <div className="text-4xl flex gap-2 font-semibold items-center">
          <SiTrustedshops />
          <h1>Shop</h1>
        </div>
      </div>
      <div className=" w-full flex justify-center  mt-5">
        <h1>Made By Mohd Salman</h1>
      </div>
    </div>
  );
};

export default Footer;
