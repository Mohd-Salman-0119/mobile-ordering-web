import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";

const IconButton = ({ text, icon, onClick, className, textClass }) => {
  const theme = useSelector((store) => store.themeReducer.theme);

  return (
    <div
      className={`p-2 text-black gap-2 flex items-center lg:text-lg text-sm cursor-pointer font-medium ${className} ${
        theme ? "text-white" : "text-black"
      }`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={icon} />
      <h1 className={`${textClass}`}>{text}</h1>
    </div>
  );
};

export default IconButton;
