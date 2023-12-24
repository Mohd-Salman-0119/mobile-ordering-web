import React, { useState } from "react";

const SelectFilter = ({ filterName, data,handleOnChange }) => {


  return (
    <div className="flex flex-col my-1 md:my-2 gap-1">
      <label className="text-xs md:text-lg">{filterName}</label>
      <select
        className="md:p-2 p-1 text-xs md:text-base border outline-none bg-transparent"
        onChange={(e) => handleOnChange(e.target.value, filterName)}
        
      >
        {data?.map((item, index) => (
          <option value={item.value} key={index} className="bg-transparent">
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
