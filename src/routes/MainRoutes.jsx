import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import NotFoundPage from "../screens/NotFoundPage";
import Product from "../screens/Product";
import SingleProduct from "../screens/SingleProduct";
import LoginAndSignup from "../screens/LoginAndSignup";
import Cart from "../screens/Cart";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginAndSignup />} />
      <Route path="/products" element={<Product />} />
      <Route path="/products/:ID" element={<SingleProduct />} />
      <Route path="/*" element={<NotFoundPage />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default MainRoutes;
