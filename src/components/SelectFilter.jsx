import React, { useState } from "react";

const SelectFilter = ({ filterName, data,handleOnChange }) => {


  return (
    <div className="flex flex-col my-2 gap-1">
      <label className="text-lg">{filterName}</label>
      <select
        className="p-2 border outline-none"
        onChange={(e) => handleOnChange(e.target.value, filterName)}
      >
        {data?.map((item, index) => (
          <option value={item.value} key={index}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectFilter;
