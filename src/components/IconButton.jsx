import { faUser } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const IconButton = ({ text, icon }) => {
  return (
    <div className="p-2 text-black gap-2 flex items-center text-md text-lg cursor-pointer font-medium">
      <FontAwesomeIcon icon={icon} />
      <h1>{text}</h1>
    </div>
  );
};

export default IconButton;
