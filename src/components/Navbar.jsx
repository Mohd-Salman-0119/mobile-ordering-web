import React, { useState } from "react";
import { SiTrustedshops } from "react-icons/si";

import { FaSearch } from "react-icons/fa";
import { RiMenu4Fill, RiCloseLine } from "react-icons/ri";

import IconButton from "./IconButton";
import {
  faCircleUser,
  faMoon,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { TOGGLE_THEME } from "../redux/theme/themeReducer";
import { Link } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((store) => store.themeReducer.theme);

  const [menu, setMenu] = useState(false);

  const handleToggleTheme = () => {
    dispatch({ type: TOGGLE_THEME });
  };

  const handleHamburgerMenu = () => {
    setMenu((p) => !p);
  };

  return (
    <div
      className={`${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      } flex justify-between py-3 px-5 lg:px-20 items-center transition-all duration-500 shadow-md sticky top-0 z-50`}
    >
      <Link className="text-2xl flex gap-2 font-semibold items-center" to={"/"}>
        <SiTrustedshops />
        <h1>Shop</h1>
      </Link>

      <div className="bg-blue-50 2sm:flex hidden items-center p-2 w-[60%] md:w-[50%] lg:w-1/3 rounded-md">
        <FaSearch className="text-black" />
        <input
          type="text"
          className="text-md outline-none border-none bg-transparent w-full ml-2"
          placeholder="Search mobiles"
        />
      </div>

      <div>
        {menu ? (
          <RiCloseLine
            className="text-2xl flex gap-4 md:hidden"
            onClick={handleHamburgerMenu}
          />
        ) : (
          <RiMenu4Fill
            className="text-2xl flex gap-4 md:hidden"
            onClick={handleHamburgerMenu}
          />
        )}
      </div>
      <div className="md:flex gap-4 hidden">
        <IconButton
          text={"Cart"}
          icon={faCartShopping}
          textClass={"lg:flex hidden"}
        />
        <IconButton
          text={"Become a Seller"}
          icon={faShop}
          textClass={"lg:flex hidden"}
        />
        {theme ? (
          <IconButton
            className={"relative"}
            icon={faSun}
            onClick={handleToggleTheme}
            textClass={"lg:flex hidden transition-all duration-100 ease-in"}
          />
        ) : (
          <IconButton
            icon={faMoon}
            className={"relative"}
            onClick={handleToggleTheme}
            textClass={"lg:flex hidden transition-all duration-100 ease-in"}
          />
        )}
        <IconButton
          text={"Login"}
          icon={faCircleUser}
          textClass={"lg:flex hidden"}
        />
      </div>
      {menu && (
        <div
          className={`md:hidden flex flex-col shadow-sm border border-gray-300 p-1 absolute right-5 top-[4.1rem] rounded-md px-5 py-3 animate-scale-up-center ${
            theme ? "bg-[#242424] text-white" : "bg-white text-black"
          }`}
        >
          <IconButton text={"Cart"} icon={faCartShopping} />
          <IconButton text={"Become a Seller"} icon={faShop} />
          {theme ? (
            <IconButton
              icon={faSun}
              onClick={handleToggleTheme}
              text={"Light"}
            />
          ) : (
            <IconButton
              icon={faMoon}
              onClick={handleToggleTheme}
              text={"Dark"}
            />
          )}
          <IconButton text={"Login"} icon={faCircleUser} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
