import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  MainPage,
  Blog,
  About,
  Favorite,
  Card,
  Profile,
  Catalog,
  Cart,
} from "@pages";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/card" element={<Card />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
};

export default AppRoutes;
