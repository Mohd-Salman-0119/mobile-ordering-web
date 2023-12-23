import React from "react";
import { Route, Routes } from "react-router";
import Home from "../screens/Home";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<h1>Login</h1>} />
      <Route path="/cart" element={<h1>Cart</h1>} />
    </Routes>
  );
};

export default MainRoutes;
