import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";
import NotFoundPage from "../screens/NotFoundPage";
import Product from "../screens/Product";

const MainRoutes = () => {

  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/products" element={<Product />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default MainRoutes;
