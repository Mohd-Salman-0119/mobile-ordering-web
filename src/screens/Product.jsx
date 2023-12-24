import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import SelectFilter from "../components/SelectFilter";
import {
  filterByMemoryRAM,
  filterByName,
  filterByOS,
  filterByPrice,
  filterByType,
} from "../constants/constants";
import { fetchData } from "../redux/dataReducer/action";

const Product = () => {
  const theme = useSelector((store) => store.themeReducer.theme);
  const mobilesData = useSelector((store) => store.dataReducer.data);

  const [seleted, setSeleted] = useState({});

  const handleOnChange = (value, type) => setSeleted({ value, type });

  const dispatch = useDispatch();
  let queryString = "";
  if (seleted?.type && seleted?.value) {
    queryString =
      "?" + seleted?.type?.toLowerCase() + "=" + seleted?.value?.toLowerCase();
  }

  useEffect(() => {
    dispatch(fetchData(queryString));
  }, [queryString]);

  return (
    <div
      className={`${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      } transition-all duration-500 px-10 py-5`}
    >
      <div className="flex gap-3">
        <div className="w-[35%] sticky top-20 p-3 max-h-svh">
          <h1 className="text-xl font-semibold ">Filters</h1>
          <SelectFilter
            filterName={"Price"}
            data={filterByPrice}
            handleOnChange={handleOnChange}
          />
          <SelectFilter
            filterName={"Name"}
            data={filterByName}
            handleOnChange={handleOnChange}
          />
          <SelectFilter
            filterName={"Type"}
            data={filterByType}
            handleOnChange={handleOnChange}
          />
          <SelectFilter
            filterName={"Memory"}
            data={filterByMemoryRAM}
            handleOnChange={handleOnChange}
          />
          <SelectFilter
            filterName={"OS"}
            data={filterByOS}
            handleOnChange={handleOnChange}
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {mobilesData?.map((item, index) => {
         
            return (
              <Link key={index} to={`/products/${item._id}`}>
                <ProductCard product={item} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
