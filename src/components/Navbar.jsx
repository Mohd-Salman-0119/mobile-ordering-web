import React from "react";
import { SiTrustedshops } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import IconButton from "./IconButton";
import {
  faCircleUser,
  faSun,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faShop } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="flex justify-between py-3 px-20 items-center shadow-sm">
      <div className="text-2xl flex gap-2 font-semibold items-center">
        <SiTrustedshops />
        <h1>Shop</h1>
      </div>

      <div className="bg-blue-50 flex items-center p-2 w-1/3 rounded-md">
        <FaSearch />
        <input
          type="text"
          className="text-md outline-none border-none bg-transparent w-full ml-2"
          placeholder="Search mobiles"
        />
      </div>

      <IconButton text={"Cart"} icon={faCartShopping} />
      <IconButton text={"Become a Seller"} icon={faShop} />
      <IconButton text={"Login"} icon={faCircleUser} />
      <IconButton icon={faSun} />
    </div>
  );
};

export default Navbar;
