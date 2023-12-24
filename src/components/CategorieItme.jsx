import React from "react";

const CategorieItme = ({ text, image }) => {
  return (
    <div className="flex flex-col gap-1 items-center sm:w-[124px] sm:h-[130px] md:p-2 rounded-md justify-center ">
      <img src={image} className="w-14 h-14 sm:w-24 sm:h-20" />
      <h1 className={`font-semibold text-center md:text-sm text-xs`}>{text}</h1>
    </div>
  );
};

export default CategorieItme;
