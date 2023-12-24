import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import useRazorpay from "react-razorpay";

import { BASE_URL } from "../redux/base_url";
import IconButton from "../components/IconButton";
import { faCartPlus, faShoppingBag } from "@fortawesome/free-solid-svg-icons";

const SingleProduct = () => {
  const { ID } = useParams();
  const navigate = useNavigate();
  const theme = useSelector((store) => store.themeReducer.theme);
  const token = useSelector((store) => store.authReducer.token);
  const auth = useSelector((store) => store.authReducer.auth);
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${BASE_URL}/mobiles/${ID}`);
      setProduct(res.data.mobile);
      setLoading(false);
    } catch (error) {
      console.log("Error, while fetching single product");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const headers = { Authorization: `Bearer ${token}` };

  console.log(token);

  const handleAddToCart = async () => {
    if (auth) {
      try {
        const res = await axios.post(`${BASE_URL}/favorite`, product, {
          headers,
        });
        alert("added ");
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Login First");
    }
  };

  const handleBuyNow = () => {
    if (auth) {
      navigate("/checkout");
    } else {
      alert("Login First");
    }
  };

  return (
    <div
      className={`${
        theme ? "bg-[#242424] text-white" : "bg-white text-black"
      } `}
    >
      {loading ? (
        <h1 className="text-3xl text-green-700 font-semibold text-center mt-2 md:mt-5">
          Loading...
        </h1>
      ) : (
        <div className="gap-3 p-10 md:p-20 md:flex">
          <div className="md:w-[50%] flex justify-center items-center">
            <img src={product.image} className="bg-cover" />
          </div>

          <div className="w-full flex flex-col my-1">
            <h1 className="text-xl md:text-3xl font-semibold">
              {product.name} {product.memory?.RAM}
            </h1>
            <div className="flex gap-3 items-end">
              <h1 className="text-2xl font-semibold text-green-700">
                &#8377;{product.price}
              </h1>
              <h1 className="text-sm line-through">
                &#8377;{product.actual_price}
              </h1>
              <h1 className="text-xs text-green-800">
                {product.discount}% Off
              </h1>
            </div>
            <div className="flex gap-5 my-2 md:text-lg text-sm ">
              <h1 className="font-semibold">RAM: {product?.memory?.RAM}</h1>
              <h1 className="font-semibold">ROM: {product?.memory?.storage}</h1>
            </div>
            <div className="md:flex gap-5 md:text-xl text-sm">
              <h1 className="font-semibold my-1">
                Processor: {product.processor}
              </h1>
              <h1 className="font-semibold">OS: {product.os}</h1>
            </div>
            <h1 className="mt-3 text-xs md:text-lg">{product.description}</h1>
            <div className="flex gap-5 mt-5">
              <IconButton
                text={"Buy Now"}
                icon={faShoppingBag}
                className={
                  "border w-full justify-center bg-green-800 text-white"
                }
                onClick={handleBuyNow}
              />
              <IconButton
                text={"Add To Cart"}
                icon={faCartPlus}
                className={
                  "border w-full justify-center bg-orange-400 text-white"
                }
                onClick={handleAddToCart}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
