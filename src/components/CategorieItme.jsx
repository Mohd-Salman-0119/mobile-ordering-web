import React from "react";

const CategorieItme = ({ text, image }) => {
  return (
    <div className="flex flex-col gap-1 items-center w-[124px] h-[130px] p-1 md:p-2 rounded-md justify-center ">
      <img src={image} className="w-24 h-20" />
      <h1 className={`font-semibold text-center md:text-sm text-xs`}>{text}</h1>
    </div>
  );
};

export default CategorieItme;
