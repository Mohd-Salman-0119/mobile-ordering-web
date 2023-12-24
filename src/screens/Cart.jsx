import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../redux/base_url";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = useSelector((store) => store.authReducer.token);
  const auth = useSelector((store) => store.authReducer.auth);
  const headers = { Authorization: `Bearer ${token}` };
  const fetchProduct = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/favorite`, { headers });
      setProduct(res.data.wishlist);
    } catch (error) {
      console.log("error while fetching");
    }
  };
  console.log(product);
  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {auth ? (
        <div>
          {loading ? (
            <h1 className="text-3xl text-green-700 font-semibold text-center mt-5">
              Loading...
            </h1>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 px-3 md:px-10">
              {product?.map((item, index) => {
                return <ProductCard product={item} />;
              })}
            </div>
          )}
        </div>
      ) : (
        <h1 className="text-3xl text-red-700 font-semibold text-center mt-5">
          Login First
        </h1>
      )}
    </div>
  );
};

export default Cart;
